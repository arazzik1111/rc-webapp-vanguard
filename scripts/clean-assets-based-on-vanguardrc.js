#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const VanguardConfig = require('./vanguard-config');

/**
 * Script to clean unused assets based on .vanguardrc configuration
 * This script runs during postinstall when the package is installed as a dependency
 * It analyzes configured components and their dependencies to determine which assets are needed
 */
class VanguardAssetCleaner {
  constructor() {
    this.config = new VanguardConfig();
    this.rootDir = path.resolve(__dirname, '..');
    this.distDir = path.resolve(this.rootDir, 'dist');
    this.usedAssets = new Set();
    this.allDistAssets = new Set();
    this.deletedAssets = [];
  }

  /**
   * Main cleanup function
   */
  async run() {
    try {
      console.log('🧹 Starting Vanguard asset cleanup based on .vanguardrc...');

      // Check if .vanguardrc exists
      if (!this.config.checkVanguardRcFile()) {
        console.log('📝 No .vanguardrc file found, skipping asset cleanup');
        return;
      }

      // Check if dist directory exists
      if (!fs.existsSync(this.distDir)) {
        console.log('📝 No dist directory found, skipping asset cleanup');
        return;
      }

      // Load configuration
      const vanguardConfig = this.config.loadConfig();
      console.log(`🔧 Configuration mode: ${vanguardConfig.mode}`);

      if (vanguardConfig.mode === 'wordpress') {
        console.log('📦 WordPress mode detected - replacing dist with dist-wordpress');
        await this.handleWordPressMode();
        return;
      }

      if (vanguardConfig.mode === 'full') {
        console.log('📦 Full mode detected - keeping all assets');
        return;
      }

      if (vanguardConfig.mode === 'vanguard') {
        console.log('📦 Vanguard mode detected - replacing dist with dist-vanguard');
        await this.handleVanguardMode();
        return;
      }

      console.log('✅ Vanguard asset cleanup completed');
    } catch (error) {
      console.error('❌ Asset cleanup failed:', error.message);
      // Don't fail the installation, just warn
      console.warn('⚠️  Installation will continue with all assets');
    }
  }

  /**
   * Load asset usage from pre-generated analysis results
   */
  async loadAssetUsageFromAnalysis(components) {
    console.log('📄 Loading asset usage from analysis results...');
    console.log(`🔍 Components to analyze: [${components.join(', ')}]`);
    
    const analysisPath = path.join(this.distDir, 'dynamic-import-analysis.json');
    
    if (!fs.existsSync(analysisPath)) {
      console.warn('⚠️  Analysis results not found, skipping cleanup...');
      return;
    }

    try {
      const analysisData = JSON.parse(fs.readFileSync(analysisPath, 'utf8'));
      const componentAssetMap = analysisData.componentAssetMap || {};
      
      console.log(`📊 Analysis file contains ${Object.keys(componentAssetMap).length} components with asset patterns`);
      console.log(`🔍 Available components in analysis: ${Object.keys(componentAssetMap).slice(0, 10).join(', ')}${Object.keys(componentAssetMap).length > 10 ? '...' : ''}`);
      
      // Extract asset patterns for required components
      for (const componentName of components) {
        if (componentAssetMap[componentName]) {
          const patterns = componentAssetMap[componentName];
          console.log(`📦 Loading ${patterns.length} patterns for component: ${componentName}`);
          patterns.forEach(patternData => {
            // Handle both simple strings and pattern objects
            let pattern = typeof patternData === 'string' ? patternData : patternData.pattern;
            if (pattern) {
              // Strip file extensions from patterns to match how asset paths are processed
              if (pattern.endsWith('.svg')) {
                pattern = pattern.replace('.svg', '');
              } else if (pattern.endsWith('.png')) {
                pattern = pattern.replace('.png', '');
              } else if (pattern.endsWith('.gif')) {
                pattern = pattern.replace('.gif', '');
              } else if (pattern.endsWith('.mjs')) {
                pattern = pattern.replace('.mjs', '');
              }
              console.log(`  + Adding pattern: ${pattern}`);
              this.usedAssets.add(pattern);
            }
          });
        } else {
          console.log(`⚠️  No patterns found for component: ${componentName}`);
        }
      }

      console.log(`🎯 Loaded ${this.usedAssets.size} unique asset patterns from analysis`);
      
      if (this.usedAssets.size > 0) {
        console.log('\\n🎯 Asset patterns loaded:');
        const sortedPatterns = Array.from(this.usedAssets).sort();
        for (const pattern of sortedPatterns) {
          console.log(`  - ${pattern}`);
        }
      }
    } catch (error) {
      console.warn(`⚠️  Error loading analysis results: ${error.message}`);
    }
  }

  /**
   * Find all assets in the dist directory
   */
  async findAllDistAssets() {
    console.log('📦 Finding all assets in dist directory...');
    
    const findAssetsInDir = (dir, relativePath = '') => {
      const items = fs.readdirSync(dir);
      
      for (const item of items) {
        const itemPath = path.join(dir, item);
        const relativeItemPath = path.join(relativePath, item);
        const stat = fs.statSync(itemPath);
        
        if (stat.isDirectory()) {
          findAssetsInDir(itemPath, relativeItemPath);
        } else if (item.endsWith('.mjs') || item.endsWith('.svg') || item.endsWith('.png') || item.endsWith('.gif')) {
          this.allDistAssets.add(relativeItemPath.replace(/\\\\/g, '/'));
        }
      }
    };

    findAssetsInDir(this.distDir);
    console.log(`📦 Found ${this.allDistAssets.size} total assets (.mjs, .svg, .png, .gif) in dist directory`);
  }

  /**
   * Clean unused assets
   */
  async cleanUnusedAssets() {
    console.log('🧹 Identifying unused assets...');
    
    const unusedAssets = [];
    
    for (const asset of this.allDistAssets) {
      let isUsed = false;
      
      // Convert asset path back to original asset path for matching
      let assetForMatching = asset;
      if (asset.endsWith('.mjs')) {
        assetForMatching = asset.replace('.mjs', '');
      } else if (asset.endsWith('.svg')) {
        assetForMatching = asset.replace('.svg', '');
      } else if (asset.endsWith('.png')) {
        assetForMatching = asset.replace('.png', '');
      } else if (asset.endsWith('.gif')) {
        assetForMatching = asset.replace('.gif', '');
      }
      
      // Check direct matches
      if (this.usedAssets.has(assetForMatching)) {
        isUsed = true;
      } else {
        // Check pattern matches
        for (const usedPattern of this.usedAssets) {
          if (this.matchesPattern(assetForMatching, usedPattern)) {
            isUsed = true;
            break;
          }
        }
      }
      
      if (!isUsed) {
        unusedAssets.push(asset);
      }
    }

    console.log(`🗑️  Identified ${unusedAssets.length} unused assets`);

    if (unusedAssets.length > 0) {
      console.log('\\n🗑️  Deleting unused assets:');
      
      for (const asset of unusedAssets) {
        const assetPath = path.join(this.distDir, asset);
        try {
          fs.unlinkSync(assetPath);
          this.deletedAssets.push(asset);
          console.log(`  ✅ Deleted: ${asset}`);
        } catch (error) {
          console.warn(`  ⚠️  Failed to delete ${asset}: ${error.message}`);
        }
      }
    }

    console.log('\\n✅ Asset cleanup completed!');
  }

  /**
   * Check if an asset matches a pattern
   */
  matchesPattern(assetPath, pattern) {
    // Handle template patterns like icons/Icon-${children}${postfix}.svg
    if (pattern.includes('${')) {
      // Convert template pattern to regex
      // Escape special regex characters first, then replace template variables
      const regexPattern = pattern
        .replace(/[.+^${}()|[\]\\]/g, '\\$&') // Escape special regex chars
        .replace(/\\\$\\\{[^}]+\\\}/g, '[^/]*'); // Replace ${...} with wildcard
      
      try {
        const regex = new RegExp(`^${regexPattern}$`);
        return regex.test(assetPath);
      } catch (error) {
        console.warn(`⚠️  Invalid regex pattern: ${regexPattern}`);
        return false;
      }
    }
    
    // Handle wildcard patterns
    if (pattern.includes('*')) {
      // First collapse consecutive asterisks into single asterisk
      const normalizedPattern = pattern.replace(/\*+/g, '*');
      
      // Escape special regex characters first, then replace * with wildcard
      const regexPattern = normalizedPattern
        .replace(/[.+^${}()|[\]\\*]/g, '\\$&') // Escape special regex chars including *
        .replace(/\\\*/g, '.*'); // Replace \* (escaped *) with wildcard that matches anything
      
      try {
        const regex = new RegExp(`^${regexPattern}$`);
        return regex.test(assetPath);
      } catch (error) {
        console.warn(`⚠️  Invalid regex pattern: ${regexPattern}`);
        return false;
      }
    }
    
    // Exact match
    return assetPath === pattern;
  }

  /**
   * Handle WordPress mode - replace dist with dist-wordpress
   */
  async handleWordPressMode() {
    const distWordPressDir = path.resolve(this.rootDir, 'dist-wordpress');

    // Check if dist-wordpress exists
    if (!fs.existsSync(distWordPressDir)) {
      console.log('⚠️  dist-wordpress directory not found, skipping WordPress mode handling');
      return;
    }

    // Delete existing dist directory if it exists
    if (fs.existsSync(this.distDir)) {
      console.log('🗑️  Deleting existing dist directory...');
      try {
        fs.rmSync(this.distDir, { recursive: true, force: true });
        console.log('✅ Deleted dist directory');
      } catch (error) {
        console.error(`❌ Failed to delete dist directory: ${error.message}`);
        return;
      }
    }

    // Rename dist-wordpress to dist
    console.log('📦 Renaming dist-wordpress to dist...');
    try {
      fs.renameSync(distWordPressDir, this.distDir);
      console.log('✅ Successfully replaced dist with dist-wordpress');
    } catch (error) {
      console.error(`❌ Failed to rename dist-wordpress to dist: ${error.message}`);
    }
  }

  /**
   * Handle Vanguard mode - replace dist with dist-vanguard
   */
  async handleVanguardMode() {
    const distVanguardDir = path.resolve(this.rootDir, 'dist-vanguard');

    // Check if dist-vanguard exists
    if (!fs.existsSync(distVanguardDir)) {
      console.log('⚠️  dist-vanguard directory not found, skipping Vanguard mode handling');
      return;
    }

    // Delete existing dist directory if it exists
    if (fs.existsSync(this.distDir)) {
      console.log('🗑️  Deleting existing dist directory...');
      try {
        fs.rmSync(this.distDir, { recursive: true, force: true });
        console.log('✅ Deleted dist directory');
      } catch (error) {
        console.error(`❌ Failed to delete dist directory: ${error.message}`);
        return;
      }
    }

    // Rename dist-vanguard to dist
    console.log('📦 Renaming dist-vanguard to dist...');
    try {
      fs.renameSync(distVanguardDir, this.distDir);
      console.log('✅ Successfully replaced dist with dist-vanguard');
    } catch (error) {
      console.error(`❌ Failed to rename dist-vanguard to dist: ${error.message}`);
    }
  }

  /**
    * Generate cleanup report
    */
   generateReport() {
     console.log('\\n📊 Asset Cleanup Report:');
     console.log('========================');
     console.log(`Total assets found: ${this.allDistAssets.size}`);
     console.log(`Asset patterns in use: ${this.usedAssets.size}`);
     console.log(`Assets deleted: ${this.deletedAssets.length}`);
     console.log(`Remaining assets: ${this.allDistAssets.size - this.deletedAssets.length}`);

     if (this.usedAssets.size > 0) {
       console.log('\\n🎯 Asset patterns found:');
       const sortedPatterns = Array.from(this.usedAssets).sort();
       for (const pattern of sortedPatterns) {
         console.log(`  - ${pattern}`);
       }
     }

     if (this.deletedAssets.length > 0) {
       console.log('\\n🗑️  Deleted assets:');
       for (const asset of this.deletedAssets) {
         console.log(`  - ${asset}`);
       }
     }
   }
}

// Run the script
if (require.main === module) {
  const cleaner = new VanguardAssetCleaner();
  cleaner.run().catch(error => {
    console.error('❌ Script failed:', error);
    process.exit(1);
  });
}

module.exports = VanguardAssetCleaner;