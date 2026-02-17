const fs = require('fs');
const path = require('path');

class VanguardConfig {
  constructor(configDir = null) {
    // Determine the correct config directory
    this.configDir = configDir || this.findConfigDirectory();
    this.configPath = path.resolve(this.configDir, '.vanguardrc');
    this.defaultConfig = {
      mode: 'full', // 'full' or 'vanguard'
      components: [],
      buildOptions: {
        treeshaking: true,
        minify: true,
        sourcemap: true
      }
    };
  }

  /**
   * Find the correct directory to look for .vanguardrc
   * When running as a postinstall script, we need to look in the consuming repository's root
   */
  findConfigDirectory() {
    const currentDir = process.cwd();
    const vanguardPackageDir = path.resolve(__dirname, '..');
    
    // Check if we're running in a consuming repository (as a dependency)
    if (this.isRunningAsPostinstall()) {
      // Look for the consuming repository's root
      const consumingRepoRoot = this.findConsumingRepositoryRoot(currentDir);
      if (consumingRepoRoot) {
        console.log(`📍 Using config from consuming repository: ${consumingRepoRoot}`);
        return consumingRepoRoot;
      }
    }
    
    // Default to current working directory
    return currentDir;
  }

  /**
   * Check if we're running as a postinstall script in a consuming repository
   */
  isRunningAsPostinstall() {
    const vanguardPackageDir = path.resolve(__dirname, '..');
    const currentDir = process.cwd();
    
    // Check if we're in node_modules/vanguard or similar
    const isInNodeModules = currentDir.includes('node_modules') || 
                           vanguardPackageDir.includes('node_modules');
    
    // Check if we're running via npm postinstall
    const isPostinstall = process.env.npm_lifecycle_event === 'postinstall' ||
                          process.env.npm_lifecycle_script?.includes('postinstall');
    
    return isInNodeModules || isPostinstall;
  }

  /**
   * Check if .vanguardrc file exists in the consuming repository
   * This file is required when the package is installed as a dependency
   */
  checkVanguardRcFile() {
    return fs.existsSync(this.configPath);
  }

  /**
   * Validate that .vanguardrc file exists when running as a dependency
   * Throws an error if the file is missing during package installation
   */
  validateVanguardRcFile() {
    // Only check when running as a postinstall script in a consuming repository
    if (!this.isRunningAsPostinstall()) {
      return; // Skip validation in development environment
    }

    if (!this.checkVanguardRcFile()) {
      const error = new Error(
        `Missing required .vanguardrc file!\n\n` +
        `The Vanguard component library requires a .vanguardrc configuration file in your project root.\n` +
        `Expected location: ${this.configPath}\n\n` +
        `To fix this issue:\n` +
        `1. Create a .vanguardrc file in your project root\n` +
        `2. Add the following content:\n\n` +
        `{\n` +
        `  "mode": "vanguard",\n` +
        `  "components": [\n` +
        `    "Button",\n` +
        `    "Icon",\n` +
        `    "Text"\n` +
        `  ],\n` +
        `  "buildOptions": {\n` +
        `    "treeshaking": true,\n` +
        `    "minify": true,\n` +
        `    "sourcemap": true\n` +
        `  }\n` +
        `}\n\n` +
        `3. Or run: npx vanguard init\n` +
        `4. Re-run npm install\n\n` +
        `For more information, visit: https://github.com/your-repo/vanguard#setup`
      );
      
      error.code = 'VANGUARDRC_MISSING';
      throw error;
    }
  }

  /**
   * Find the root of the consuming repository
   */
  findConsumingRepositoryRoot(startDir) {
    let currentDir = startDir;
    
    // Walk up the directory tree looking for package.json that's not in node_modules
    while (currentDir !== path.dirname(currentDir)) {
      const packageJsonPath = path.join(currentDir, 'package.json');
      
      // Skip if we're still in node_modules
      if (currentDir.includes('node_modules')) {
        currentDir = path.dirname(currentDir);
        continue;
      }
      
      // Check if package.json exists and doesn't have vanguard as name
      if (fs.existsSync(packageJsonPath)) {
        try {
          const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
          if (packageJson.name !== 'vanguard') {
            return currentDir;
          }
        } catch (error) {
          // Continue searching if package.json is invalid
        }
      }
      
      currentDir = path.dirname(currentDir);
    }
    
    return null;
  }

  loadConfig() {
    try {
      if (fs.existsSync(this.configPath)) {
        const configContent = fs.readFileSync(this.configPath, 'utf8');
        const userConfig = JSON.parse(configContent);
        return { ...this.defaultConfig, ...userConfig };
      }
    } catch (error) {
      console.warn('Warning: Could not load .vanguardrc, using default configuration');
    }
    return this.defaultConfig;
  }

  saveConfig(config) {
    try {
      fs.writeFileSync(this.configPath, JSON.stringify(config, null, 2));
      return true;
    } catch (error) {
      console.error('Error saving .vanguardrc:', error.message);
      return false;
    }
  }

  getAvailableComponents() {
    const indexPath = path.resolve(__dirname, '../src/index.ts');
    const indexContent = fs.readFileSync(indexPath, 'utf8');
    
    // Extract component exports using regex
    const exportMatches = indexContent.match(/export\s+\{\s*([^}]+)\s*\}/g) || [];
    const components = new Set();
    
    exportMatches.forEach(match => {
      const exports = match.match(/export\s+\{\s*([^}]+)\s*\}/)[1];
      exports.split(',').forEach(exp => {
        const componentName = exp.trim().split(/\s+/)[0];
        if (componentName && !componentName.startsWith('//') && componentName !== 'type') {
          components.add(componentName);
        }
      });
    });

    return Array.from(components).sort();
  }

  getAvailableAssets() {
    const assetsPath = path.resolve(__dirname, '../src/custom-hooks/use-dynamic-import/assets');
    if (!fs.existsSync(assetsPath)) return [];
    
    return fs.readdirSync(assetsPath, { withFileTypes: true })
      .filter(dirent => dirent.isDirectory())
      .map(dirent => dirent.name)
      .sort();
  }

  validateConfig(config) {
    const availableComponents = this.getAvailableComponents();
    const availableAssets = this.getAvailableAssets();
    
    const errors = [];
    
    if (config.mode === 'vanguard') {
      if (!Array.isArray(config.components)) {
        errors.push('components must be an array when mode is vanguard');
      } else {
        config.components.forEach(component => {
          if (!availableComponents.includes(component)) {
            errors.push(`Unknown component: ${component}`);
          }
        });
      }
    }

    if (config.assets && typeof config.assets === 'object') {
      Object.keys(config.assets).forEach(asset => {
        if (!availableAssets.includes(asset)) {
          errors.push(`Unknown asset category: ${asset}`);
        }
      });
    }

    if (config.buildOptions && typeof config.buildOptions === 'object') {
      const validBuildOptions = ['treeshaking', 'minify', 'sourcemap'];
      Object.keys(config.buildOptions).forEach(option => {
        if (!validBuildOptions.includes(option)) {
          errors.push(`Unknown build option: ${option}. Valid options are: ${validBuildOptions.join(', ')}`);
        }
        if (typeof config.buildOptions[option] !== 'boolean') {
          errors.push(`Build option '${option}' must be a boolean value`);
        }
      });
    }

    return errors;
  }
}

module.exports = VanguardConfig;