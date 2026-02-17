#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const VanguardConfig = require('./vanguard-config');

class PostInstallBuilder {
  constructor() {
    this.config = new VanguardConfig();
    this.rootDir = path.resolve(__dirname, '..');
    this.distDir = path.resolve(this.rootDir, 'dist');
    this.isConsumingRepo = this.isRunningInConsumingRepository();
  }

  async run() {
    try {
      console.log('🚀 Vanguard postinstall build starting...');
      
      // Check if we're in a development environment (skip build if so)
      if (this.isDevelopmentEnvironment()) {
        console.log('📝 Development environment detected, skipping postinstall build');
        return;
      }

      // If we're not in a consuming repository, skip the build
      if (!this.isConsumingRepo) {
        console.log('📝 Not in consuming repository, skipping postinstall build');
        return;
      }

      // Validate .vanguardrc file exists when running as dependency
      console.log('🔍 Validating .vanguardrc file...');
      this.config.validateVanguardRcFile();
      console.log('✅ .vanguardrc file validation passed');

      // Check if we have required build dependencies
      if (!this.hasRequiredBuildDependencies()) {
        console.log('⚠️  Build dependencies not available, skipping postinstall build');
        console.log('   This is normal for production installations');
        return;
      }

      // Check if dist already exists and is recent
      if (this.isDistUpToDate()) {
        console.log('✅ Distribution files are up to date, skipping build');
        return;
      }

      // Load configuration
      const vanguardConfig = this.config.loadConfig();
      console.log(`🔧 Configuration mode: ${vanguardConfig.mode}`);

      console.log('📦 Building library (full mode)');
      await this.buildFull();

      // Clean assets based on vanguardrc configuration
      await this.cleanAssetsBasedOnConfig();

      console.log('✅ Vanguard postinstall build completed successfully');
    } catch (error) {
      console.error('❌ Postinstall build failed:', error.message);
      
      // If this is a .vanguardrc validation error, fail the installation
      if (error.code === 'VANGUARDRC_MISSING') {
        console.error('💥 Installation failed due to missing .vanguardrc file');
        process.exit(1);
      }
      
      // For other errors, don't fail the installation, just warn
      console.warn('⚠️  Installation will continue, but you may need to build manually');
      console.warn('   Run: npm run build-lib');
    }
  }

  /**
   * Check if we're running in a consuming repository (as a dependency)
   */
  isRunningInConsumingRepository() {
    const indicators = [
      // Check if we're in node_modules
      this.rootDir.includes('node_modules'),
      
      // Check if we're running via npm postinstall
      process.env.npm_lifecycle_event === 'postinstall',
      
      // Check if the current working directory is different from our package directory
      process.cwd() !== this.rootDir && !process.cwd().startsWith(this.rootDir)
    ];

    return indicators.some(indicator => indicator);
  }

  isDevelopmentEnvironment() {
    // Check various indicators that we're in development
    const indicators = [
      // Check if we're in the source repository (has .git) AND not in consuming repo
      fs.existsSync(path.resolve(this.rootDir, '.git')) && !this.isConsumingRepo,
      
      // Check if NODE_ENV is development AND not in consuming repo
      process.env.NODE_ENV === 'development' && !this.isConsumingRepo,
      
      // Check if we're running npm install in the package itself (not as dependency)
      process.env.npm_config_user_config && process.cwd() === this.rootDir
    ];

    return indicators.some(indicator => indicator);
  }

  hasRequiredBuildDependencies() {
    const requiredDeps = [
      '@vitejs/plugin-react',
      'vite',
      'typescript'
    ];

    return requiredDeps.every(dep => {
      const depPath = path.resolve(this.rootDir, 'node_modules', dep);
      return fs.existsSync(depPath);
    });
  }

  isDistUpToDate() {
    if (!fs.existsSync(this.distDir)) {
      return false;
    }

    try {
      const distStat = fs.statSync(path.resolve(this.distDir, 'index.es.js'));
      const packageStat = fs.statSync(path.resolve(this.rootDir, 'package.json'));
      
      // If dist is newer than package.json, consider it up to date
      return distStat.mtime > packageStat.mtime;
    } catch (error) {
      return false;
    }
  }

  async buildFull() {
    console.log('🔨 Building full library...');
    this.execBuildCommand('npm run build-lib');
  }

  async cleanAssetsBasedOnConfig() {
    try {
      console.log('🧹 Running asset cleanup based on .vanguardrc configuration...');
      const VanguardAssetCleaner = require('./clean-assets-based-on-vanguardrc');
      const cleaner = new VanguardAssetCleaner();
      await cleaner.run();
    } catch (error) {
      console.warn('⚠️  Asset cleanup failed:', error.message);
      console.warn('   Installation will continue with all assets');
    }
  }



  execBuildCommand(command) {
    try {
      execSync(command, {
        cwd: this.rootDir,
        stdio: 'inherit',
        env: {
          ...process.env,
          NODE_ENV: 'production'
        }
      });
    } catch (error) {
      throw new Error(`Build command failed: ${command}\n${error.message}`);
    }
  }



  // Create default configuration if none exists
  createDefaultConfigIfNeeded() {
    // Only create config in consuming repository
    if (!this.isConsumingRepo) {
      return;
    }

    const configPath = path.resolve(this.config.configDir, '.vanguardrc');
    const examplePath = path.resolve(this.rootDir, 'vanguard-config.example');
    
    if (!fs.existsSync(configPath) && fs.existsSync(examplePath)) {
      console.log('📋 Creating default .vanguardrc from example...');
      
      try {
        const exampleContent = fs.readFileSync(examplePath, 'utf8');
        const exampleConfig = JSON.parse(exampleContent);
        
        // Set to full mode by default for new installations
        exampleConfig.mode = 'full';
        
        fs.writeFileSync(configPath, JSON.stringify(exampleConfig, null, 2));
        console.log(`✅ Default configuration created at: ${configPath}`);
      } catch (error) {
        console.warn('⚠️  Could not create default configuration:', error.message);
      }
    }
  }
}

// Only run if this script is executed directly
if (require.main === module) {
  const builder = new PostInstallBuilder();
  builder.createDefaultConfigIfNeeded();
  builder.run().catch(error => {
    console.error('Postinstall build error:', error);
    process.exit(0); // Don't fail the installation
  });
}

module.exports = PostInstallBuilder;