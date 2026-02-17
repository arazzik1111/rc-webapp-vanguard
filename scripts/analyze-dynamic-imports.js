#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const VanguardConfig = require('./vanguard-config');

/**
 * Static analysis script for dynamic import patterns in useDynamicImport
 * Generates a hashmap of Component:[...patterns used in dynamic import]
 * Results are exported to dynamic-import-analysis.json
 */
class DynamicImportAnalyzer {
  constructor() {
    this.config = new VanguardConfig();
    this.rootDir = path.resolve(__dirname, '..');
    this.outputDir = this.rootDir;
    this.srcDir = path.resolve(this.rootDir, 'src');
    this.componentAssetMap = new Map(); // Component -> Set of asset patterns
    this.componentDependencies = new Map(); // Component -> Set of dependencies
    this.analysisResults = {
      timestamp: new Date().toISOString(),
      componentAssetMap: {},
      componentDependencies: {},
      totalComponents: 0,
      totalAssetPatterns: 0,
      summary: {}
    };
  }

  /**
   * Main analysis function
   */
  async run() {
    try {
      console.log('🔍 Starting dynamic import pattern analysis...');
      
      // Check if src directory exists
      if (!fs.existsSync(this.srcDir)) {
        console.log('📝 Source directory not found, skipping analysis');
        return;
      }

      // Step 1: Find all components
      const allComponents = await this.findAllComponents();
      console.log(`📊 Found ${allComponents.length} components to analyze`);

      // Step 2: Build component dependency tree
      await this.buildComponentDependencyTree(allComponents);

      // Step 3: Analyze each component for dynamic import patterns
      await this.analyzeComponentsForDynamicImports(allComponents);

      // Step 4: Generate analysis results
      this.generateAnalysisResults();

      // Step 5: Export results to dist folder
      await this.exportResults();

      console.log('✅ Dynamic import analysis completed');
    } catch (error) {
      console.error('❌ Dynamic import analysis failed:', error.message);
      throw error;
    }
  }

  /**
   * Find all components in the source directory
   */
  async findAllComponents() {
    const components = new Set();
    
    const searchDirs = [
      path.join(this.srcDir, 'core'),
      path.join(this.srcDir, 'common'),
      path.join(this.srcDir, 'examples'),
      path.join(this.srcDir, 'components')
    ];

    for (const searchDir of searchDirs) {
      if (fs.existsSync(searchDir)) {
        this.findComponentsInDir(searchDir, components);
      }
    }

    return Array.from(components);
  }

  /**
   * Recursively find components in a directory
   */
  findComponentsInDir(dir, components) {
    try {
      const items = fs.readdirSync(dir);
      
      for (const item of items) {
        const itemPath = path.join(dir, item);
        const stat = fs.statSync(itemPath);
        
        if (stat.isDirectory()) {
          // Add directory name as potential component
          components.add(item);
          // Continue searching in subdirectories
          this.findComponentsInDir(itemPath, components);
        } else if ((item.endsWith('.tsx') || item.endsWith('.ts')) && !item.endsWith('.d.ts')) {
          // Add file name (without extension) as potential component
          const componentName = path.basename(item, path.extname(item));
          if (!componentName.startsWith('_') && !componentName.includes('.test') && !componentName.includes('.spec')) {
            components.add(componentName);
          }
        }
      }
    } catch (error) {
      console.warn(`⚠️  Error reading directory ${dir}: ${error.message}`);
    }
  }

  /**
   * Build a dependency tree for components by analyzing their imports
   */
  async buildComponentDependencyTree(components) {
    console.log('🔍 Building component dependency tree...');
    
    const processedComponents = new Set();
    
    const analyzeComponent = (componentName) => {
      if (processedComponents.has(componentName)) {
        return;
      }
      
      processedComponents.add(componentName);
      const dependencies = new Set();
      
      // Find component files
      const componentFiles = this.findComponentFiles(componentName);
      
      for (const filePath of componentFiles) {
        try {
          const content = fs.readFileSync(filePath, 'utf8');
          const fileDependencies = this.extractComponentDependencies(content);
          
          fileDependencies.forEach(dep => {
            dependencies.add(dep);
            // Recursively analyze dependencies
            if (components.includes(dep)) {
              analyzeComponent(dep);
            }
          });
        } catch (error) {
          console.warn(`⚠️  Error analyzing ${filePath}: ${error.message}`);
        }
      }
      
      this.componentDependencies.set(componentName, dependencies);
    };

    components.forEach(analyzeComponent);
  }

  /**
   * Find all files related to a component
   */
  findComponentFiles(componentName) {
    const files = [];
    
    const searchDirs = [
      path.join(this.srcDir, 'core'),
      path.join(this.srcDir, 'common'),
      path.join(this.srcDir, 'examples'),
      path.join(this.srcDir, 'components')
    ];

    for (const searchDir of searchDirs) {
      if (fs.existsSync(searchDir)) {
        this.findComponentFilesInDir(searchDir, componentName, files);
      }
    }

    return files;
  }

  /**
   * Recursively search for component files in a directory
   */
  findComponentFilesInDir(dir, componentName, files) {
    try {
      const items = fs.readdirSync(dir);
      
      for (const item of items) {
        const itemPath = path.join(dir, item);
        const stat = fs.statSync(itemPath);
        
        if (stat.isDirectory()) {
          // Check if directory name matches component name
          if (item === componentName || item.toLowerCase() === componentName.toLowerCase()) {
            // Found component directory, add all tsx/ts files
            this.addAllTsxFilesInDir(itemPath, files);
          } else {
            // Continue searching in subdirectories
            this.findComponentFilesInDir(itemPath, componentName, files);
          }
        } else if (item.includes(componentName) && (item.endsWith('.tsx') || item.endsWith('.ts'))) {
          files.push(itemPath);
        }
      }
    } catch (error) {
      // Ignore errors for directories that don't exist or can't be read
    }
  }

  /**
   * Add all tsx/ts files in a directory
   */
  addAllTsxFilesInDir(dir, files) {
    try {
      const items = fs.readdirSync(dir);
      
      for (const item of items) {
        const itemPath = path.join(dir, item);
        const stat = fs.statSync(itemPath);
        
        if (stat.isDirectory()) {
          this.addAllTsxFilesInDir(itemPath, files);
        } else if (item.endsWith('.tsx') || item.endsWith('.ts')) {
          files.push(itemPath);
        }
      }
    } catch (error) {
      // Ignore errors
    }
  }

  /**
   * Extract component dependencies from file content
   */
  extractComponentDependencies(content) {
    const dependencies = new Set();
    
    // Look for imports from vanguard components
    const importPatterns = [
      // import { Component } from "@vanguard/..."
      /import\s+\{([^}]+)\}\s+from\s+["']@vanguard\/[^"']*["']/g,
      // import { Component } from "./core/Component/..."
      /import\s+\{([^}]+)\}\s+from\s+["']\.\/core\/([^"'\/]+)/g,
      // import { Component } from "./common/Component/..."
      /import\s+\{([^}]+)\}\s+from\s+["']\.\/common\/([^"'\/]+)/g,
      // import { Component } from "../Component/..."
      /import\s+\{([^}]+)\}\s+from\s+["']\.\.\/([^"'\/]+)/g
    ];

    for (const pattern of importPatterns) {
      let match;
      while ((match = pattern.exec(content)) !== null) {
        const imports = match[1];
        const componentPath = match[2];
        
        // Extract individual component names from imports
        const componentNames = imports.split(',').map(name => name.trim().split(' ')[0]);
        componentNames.forEach(name => {
          if (name && !name.startsWith('type') && name !== 'type') {
            dependencies.add(name);
          }
        });
        
        // Also add component from path if available
        if (componentPath) {
          dependencies.add(componentPath);
        }
      }
    }

    return dependencies;
  }

  /**
   * Analyze components for dynamic import patterns
   */
  async analyzeComponentsForDynamicImports(components) {
    console.log('🔍 Analyzing components for useDynamicImport patterns...');
    
    for (const componentName of components) {
      const componentFiles = this.findComponentFiles(componentName);
      const assetPatterns = new Set();
      
      for (const filePath of componentFiles) {
        try {
          const content = fs.readFileSync(filePath, 'utf8');
          const assets = this.extractDynamicImportPatterns(content, filePath);
          
          assets.forEach(asset => {
            assetPatterns.add(asset);
          });
        } catch (error) {
          console.warn(`⚠️  Error analyzing ${filePath}: ${error.message}`);
        }
      }

      if (assetPatterns.size > 0) {
        this.componentAssetMap.set(componentName, assetPatterns);
      }
    }

    console.log(`🎯 Found ${this.componentAssetMap.size} components using dynamic imports`);
  }

  /**
   * Extract dynamic import patterns from useDynamicImport calls in a file
   */
  extractDynamicImportPatterns(content, filePath) {
    const patterns = [];
    
    // Check if file uses useDynamicImport
    if (!content.includes('useDynamicImport')) {
      return patterns;
    }

    // Pattern 1: Direct string literals
    const directPatterns = [
      /useDynamicImport\s*\(\s*[`"']([^`"']+)[`"']/g,
      /useDynamicImport\s*\(\s*[`"']([^`"']+)[`"']\s*,/g
    ];

    for (const pattern of directPatterns) {
      let match;
      while ((match = pattern.exec(content)) !== null) {
        const assetPath = match[1];
        patterns.push({
          type: 'direct',
          pattern: assetPath,
          file: path.relative(this.rootDir, filePath)
        });
      }
    }

    // Pattern 2: Template literals with variables
    const templatePattern = /useDynamicImport\s*\(\s*[`]([^`]*\$\{[^}]+\}[^`]*)[`]/g;
    let match;
    while ((match = templatePattern.exec(content)) !== null) {
      const templatePath = match[1];
      const expandedPatterns = this.expandTemplatePattern(templatePath, content);
      expandedPatterns.forEach(expandedPattern => {
        patterns.push({
          type: 'template',
          pattern: expandedPattern,
          original: templatePath,
          file: path.relative(this.rootDir, filePath)
        });
      });
    }

    // Pattern 3: String concatenation
    const concatPattern = /useDynamicImport\s*\(\s*([^)]+\+[^)]+)\s*\)/g;
    while ((match = concatPattern.exec(content)) !== null) {
      const concatExpr = match[1];
      const expandedPatterns = this.expandConcatenationPattern(concatExpr, content);
      expandedPatterns.forEach(expandedPattern => {
        patterns.push({
          type: 'concatenation',
          pattern: expandedPattern,
          original: concatExpr,
          file: path.relative(this.rootDir, filePath)
        });
      });
    }

    return patterns;
  }

  /**
   * Expand template literal patterns
   */
  expandTemplatePattern(templatePath, content) {
    const patterns = [];
    
    if (templatePath.includes('${')) {
      const basePath = templatePath.replace(/\$\{[^}]+\}/g, '*');
      patterns.push(basePath);
      
      const variableMatches = templatePath.match(/\$\{([^}]+)\}/g);
      if (variableMatches) {
        for (const varMatch of variableMatches) {
          const varName = varMatch.replace(/\$\{|\}/g, '');
          const possibleValues = this.extractVariableValues(varName, content);
          
          if (possibleValues.length > 0) {
            for (const value of possibleValues) {
              const specificPath = templatePath.replace(varMatch, value);
              patterns.push(specificPath);
            }
          }
        }
      }
    } else {
      patterns.push(templatePath);
    }
    
    return patterns;
  }

  /**
   * Expand concatenation patterns
   */
  expandConcatenationPattern(concatExpr, content) {
    const patterns = [];
    
    const stringLiterals = concatExpr.match(/[`"']([^`"']+)[`"']/g) || [];
    const variables = concatExpr.match(/\b[a-zA-Z_$][a-zA-Z0-9_$]*\b/g) || [];
    
    if (stringLiterals.length > 0) {
      let pattern = concatExpr;
      for (const variable of variables) {
        if (!stringLiterals.some(lit => lit.includes(variable))) {
          pattern = pattern.replace(new RegExp(`\\b${variable}\\b`, 'g'), '*');
        }
      }
      
      pattern = pattern.replace(/[`"']/g, '').replace(/\s*\+\s*/g, '');
      patterns.push(pattern);
    }
    
    return patterns;
  }

  /**
   * Extract variable values from content
   */
  extractVariableValues(varName, content) {
    const values = [];
    
    const assignmentPatterns = [
      new RegExp(`const\\s+${varName}\\s*=\\s*["'\`]([^"'\`]+)["'\`]`, 'g'),
      new RegExp(`let\\s+${varName}\\s*=\\s*["'\`]([^"'\`]+)["'\`]`, 'g'),
      new RegExp(`var\\s+${varName}\\s*=\\s*["'\`]([^"'\`]+)["'\`]`, 'g'),
    ];
    
    for (const pattern of assignmentPatterns) {
      let match;
      while ((match = pattern.exec(content)) !== null) {
        values.push(match[1]);
      }
    }
    
    const enumPattern = new RegExp(`${varName}\\s*:\\s*["'\`]([^"'\`]+)["'\`]`, 'g');
    let match;
    while ((match = enumPattern.exec(content)) !== null) {
      values.push(match[1]);
    }
    
    return [...new Set(values)];
  }

  /**
   * Generate analysis results
   */
  generateAnalysisResults() {
    console.log('📊 Generating analysis results...');

    // Convert Maps to Objects for JSON serialization
    const componentAssetMap = {};
    const componentDependencies = {};
    let totalAssetPatterns = 0;

    // Process component asset map
    for (const [component, patterns] of this.componentAssetMap) {
      componentAssetMap[component] = Array.from(patterns);
      totalAssetPatterns += patterns.size;
    }

    // Process component dependencies
    for (const [component, deps] of this.componentDependencies) {
      componentDependencies[component] = Array.from(deps);
    }

    // Generate summary statistics
    const summary = {
      componentsWithDynamicImports: this.componentAssetMap.size,
      componentsWithDependencies: this.componentDependencies.size,
      totalAssetPatterns: totalAssetPatterns,
      averagePatternsPerComponent: this.componentAssetMap.size > 0 ? 
        (totalAssetPatterns / this.componentAssetMap.size).toFixed(2) : 0,
      patternTypes: this.getPatternTypesSummary(componentAssetMap)
    };

    this.analysisResults = {
      timestamp: new Date().toISOString(),
      componentAssetMap,
      componentDependencies,
      totalComponents: Object.keys(componentAssetMap).length,
      totalAssetPatterns,
      summary
    };
  }

  /**
   * Get summary of pattern types
   */
  getPatternTypesSummary(componentAssetMap) {
    const typeCounts = { direct: 0, template: 0, concatenation: 0 };
    
    for (const patterns of Object.values(componentAssetMap)) {
      for (const pattern of patterns) {
        if (typeof pattern === 'object' && pattern.type) {
          typeCounts[pattern.type] = (typeCounts[pattern.type] || 0) + 1;
        } else {
          typeCounts.direct++;
        }
      }
    }
    
    return typeCounts;
  }

  /**
   * Export results to main directory
   */
  async exportResults() {
    const outputPath = path.join(this.outputDir, 'dynamic-import-analysis.json');

    try {
      fs.writeFileSync(outputPath, JSON.stringify(this.analysisResults, null, 2));
      console.log(`📄 Analysis results exported to: ${path.relative(this.rootDir, outputPath)}`);

      // Also create a simplified version for easier consumption
      const simplifiedResults = {
        timestamp: this.analysisResults.timestamp,
        componentAssetMap: this.analysisResults.componentAssetMap,
        summary: this.analysisResults.summary
      };

      const simplifiedPath = path.join(this.outputDir, 'dynamic-import-analysis-simple.json');
      fs.writeFileSync(simplifiedPath, JSON.stringify(simplifiedResults, null, 2));
      console.log(`📄 Simplified results exported to: ${path.relative(this.rootDir, simplifiedPath)}`);
      
      this.printSummary();
    } catch (error) {
      console.error('❌ Failed to export results:', error.message);
      throw error;
    }
  }

  /**
   * Print analysis summary
   */
  printSummary() {
    console.log('\n📊 Dynamic Import Analysis Summary:');
    console.log('=====================================');
    console.log(`Total components analyzed: ${this.analysisResults.totalComponents}`);
    console.log(`Components with dynamic imports: ${this.analysisResults.summary.componentsWithDynamicImports}`);
    console.log(`Total asset patterns found: ${this.analysisResults.totalAssetPatterns}`);
    console.log(`Average patterns per component: ${this.analysisResults.summary.averagePatternsPerComponent}`);
    
    console.log('\nPattern types:');
    const patternTypes = this.analysisResults.summary.patternTypes;
    console.log(`  - Direct patterns: ${patternTypes.direct}`);
    console.log(`  - Template patterns: ${patternTypes.template}`);
    console.log(`  - Concatenation patterns: ${patternTypes.concatenation}`);
    
    if (this.analysisResults.totalComponents > 0) {
      console.log('\nComponents with dynamic imports:');
      for (const [component, patterns] of Object.entries(this.analysisResults.componentAssetMap)) {
        console.log(`  - ${component}: ${patterns.length} pattern(s)`);
      }
    }
  }
}

// Only run if this script is executed directly
if (require.main === module) {
  const analyzer = new DynamicImportAnalyzer();
  analyzer.run().catch(error => {
    console.error('Dynamic import analysis error:', error);
    process.exit(1);
  });
}

module.exports = DynamicImportAnalyzer;