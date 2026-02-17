#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

/**
 * Script to read dynamic import analysis report and delete unused assets 
 * from the dist assets directory.
 */
class UnusedAssetsCleanup {
  constructor() {
    this.rootDir = process.cwd();
    this.distPath = path.resolve(__dirname, "../dist");
    this.reportPath = path.join(this.distPath, "dynamic-import-analysis-simple.json");
    this.assetsPath = path.join(this.distPath, "custom-hooks/use-dynamic-import/assets");
    this.usedAssets = new Set();
    this.allAssets = new Set();
    this.deletedAssets = [];
    this.skippedPatterns = [];
    this.dryRun = false;
    this.supportedExtensions = [".mjs", ".svg", ".png", ".gif"];
    this.keepPatterns = ['icon-name-has.mjs', 'index.mjs', 'loading-hash.mjs'];
    this.keepDirPatterns = ['types'];
    this.keepFileRegex = /^vanguard.*\.css$/;
  }

  /**
   * Main cleanup function
   */
  async cleanup(options = {}) {
    this.dryRun = options.dryRun || false;

    if (options.wordpress) {
      return this.wordpressCleanup(options);
    }

    console.log("🔍 Starting unused assets cleanup...");
    console.log(`📁 Assets directory: ${path.relative(this.rootDir, this.assetsPath)}`);
    console.log(`📊 Reading analysis report: ${path.relative(this.rootDir, this.reportPath)}`);
    console.log(`🧹 Cleaning assets from: ${path.relative(this.rootDir, this.distPath)}`);

    if (this.dryRun) {
      console.log("🧪 DRY RUN MODE - No files will be deleted");
    }

    // Step 1: Load used assets from analysis report
    await this.loadUsedAssetsFromReport();
    console.log(`🎯 Found ${this.usedAssets.size} unique asset patterns in use`);

    // Step 2: Find all existing assets
    await this.findAllAssets();
    console.log(`📦 Found ${this.allAssets.size} total assets (.mjs, .svg, .png, .gif, etc.) in assets directory`);

    // Step 3: Identify and delete unused assets
    const unusedAssets = await this.identifyUnusedAssets();
    console.log(`🗑️  Identified ${unusedAssets.length} unused assets`);

    if (unusedAssets.length > 0) {
      await this.deleteUnusedAssets(unusedAssets);
    }

    // Step 4: Generate report
    this.generateReport();

    return {
      totalAssets: this.allAssets.size,
      usedAssets: this.usedAssets.size,
      deletedAssets: this.deletedAssets.length,
      skippedPatterns: this.skippedPatterns.length,
    };
  }

  /**
   * Load used assets from the dynamic import analysis report
   */
  async loadUsedAssetsFromReport() {
    try {
      if (!fs.existsSync(this.reportPath)) {
        throw new Error(`Analysis report not found at ${this.reportPath}. Please run the dynamic import analysis first.`);
      }

      const reportContent = fs.readFileSync(this.reportPath, "utf8");
      const report = JSON.parse(reportContent);

      if (!report.componentAssetMap) {
        throw new Error("Invalid report format: missing componentAssetMap");
      }

      console.log(`📊 Report timestamp: ${report.timestamp}`);
      console.log(`📊 Components analyzed: ${report.summary?.componentsWithDynamicImports || Object.keys(report.componentAssetMap).length}`);

      // Extract all asset patterns from the report
      for (const [componentName, assets] of Object.entries(report.componentAssetMap)) {
        for (const assetInfo of assets) {
          if (assetInfo.pattern) {
            this.usedAssets.add(assetInfo.pattern);
            console.log(`  ✅ ${componentName}: ${assetInfo.pattern}`);
          }
        }
      }

    } catch (error) {
      console.error(`❌ Error loading analysis report: ${error.message}`);
      throw error;
    }
  }



  /**
   * Find all existing assets in the assets directory
   */
  async findAllAssets() {
    const walkDir = (dir) => {
      try {
        const files = fs.readdirSync(dir);

        for (const file of files) {
          const filePath = path.join(dir, file);
          const stat = fs.statSync(filePath);

          if (stat.isDirectory()) {
            walkDir(filePath);
          } else {
            const relativePath = path.relative(this.assetsPath, filePath);
            this.allAssets.add(relativePath);
          }
        }
      } catch (error) {
        console.warn(`⚠️  Error reading directory ${dir}: ${error.message}`);
      }
    };

    walkDir(this.assetsPath);
    return Promise.resolve();
  }

  /**
   * Identify unused assets by comparing used vs existing assets
   */
  async identifyUnusedAssets() {
    const unusedAssets = [];

    for (const asset of this.allAssets) {
      let isUsed = false;

      // Check direct matches
      if (this.usedAssets.has(asset)) {
        isUsed = true;
      } else {
        // Check pattern matches
        for (const usedPattern of this.usedAssets) {
          if (this.matchesPattern(asset, usedPattern)) {
            isUsed = true;
            break;
          }
        }
      }

      if (!isUsed) {
        unusedAssets.push(asset);
      }
    }

    return unusedAssets;
  }

  /**
   * Check if an asset matches a pattern (supports wildcards)
   */
  matchesPattern(asset, pattern) {
    // Convert pattern to regex
    const regexPattern = pattern
      .replace(/\*/g, "[^/]*") // * matches any characters except /
      .replace(/\./g, "\\."); // Escape dots

    const regex = new RegExp(`^${regexPattern}$`);
    return regex.test(asset);
  }

  /**
   * Check if a file should be kept in WordPress cleanup
   */
  shouldKeep(filePath) {
    const fileName = path.basename(filePath);
    if (this.keepPatterns.includes(fileName)) return true;
    if (this.keepDirPatterns.includes(fileName) && fs.statSync(filePath).isDirectory()) return true;
    if (this.keepFileRegex.test(fileName)) return true;
    return false;
  }

  /**
   * Delete unused assets
   */
  async deleteUnusedAssets(unusedAssets) {
    console.log("\n🗑️  Deleting unused assets:");

    for (const asset of unusedAssets) {
      const fullPath = path.join(this.assetsPath, asset);

      try {
        if (fs.existsSync(fullPath)) {
          if (!this.dryRun) {
            fs.unlinkSync(fullPath);
            console.log(`  ✅ Deleted: ${asset}`);
          } else {
            console.log(`  🧪 Would delete: ${asset}`);
          }
          this.deletedAssets.push(asset);
        } else {
          console.log(`  ⚠️  File not found: ${asset}`);
        }
      } catch (error) {
        console.error(`  ❌ Error deleting ${asset}: ${error.message}`);
      }
    }

    // Clean up empty directories
    if (!this.dryRun) {
      await this.cleanupEmptyDirectories();
    }
  }

  /**
   * Remove empty directories after deleting assets
   */
  async cleanupEmptyDirectories() {
    const cleanupDir = (dirPath) => {
      try {
        const items = fs.readdirSync(dirPath);

        // Recursively clean subdirectories first
        for (const item of items) {
          const itemPath = path.join(dirPath, item);
          if (fs.statSync(itemPath).isDirectory()) {
            cleanupDir(itemPath);
          }
        }

        // Check if directory is now empty
        const remainingItems = fs.readdirSync(dirPath);
        if (remainingItems.length === 0 && dirPath !== this.assetsPath) {
          fs.rmdirSync(dirPath);
          const relativePath = path.relative(this.assetsPath, dirPath);
          console.log(`  🧹 Removed empty directory: ${relativePath}`);
        }
      } catch (error) {
        // Ignore errors for directories that don't exist or can't be read
      }
    };

    cleanupDir(this.assetsPath);
  }

  /**
   * Generate cleanup report
   */
  generateReport() {
    console.log("\n📊 Cleanup Report:");
    console.log("==================");
    console.log(`Total assets found: ${this.allAssets.size}`);
    console.log(`Assets in use: ${this.usedAssets.size}`);
    console.log(`Assets deleted: ${this.deletedAssets.length}`);
    console.log(`Remaining assets: ${this.allAssets.size - this.deletedAssets.length}`);

    if (this.deletedAssets.length > 0) {
      console.log("\n🗑️  Deleted assets:");
      for (const asset of this.deletedAssets) {
        console.log(`  - ${asset}`);
      }
    }

    if (this.skippedPatterns.length > 0) {
      console.log("\n⚠️  Skipped patterns (complex dynamic imports):");
      for (const pattern of this.skippedPatterns) {
        console.log(`  - ${pattern}`);
      }
    }

    console.log("\n✅ Cleanup completed!");
  }

  /**
   * WordPress dist cleanup - keep only essential files
   */
  async wordpressCleanup(options = {}) {
    this.dryRun = options.dryRun || false;

    console.log("🔍 Starting WordPress dist cleanup...");
    console.log(`📁 Dist directory: ${path.relative(this.rootDir, this.distPath)}`);

    if (this.dryRun) {
      console.log("🧪 DRY RUN MODE - No files will be deleted");
    }

    // Find all files and directories in dist
    const allPaths = [];
    const walk = (dir) => {
      try {
        const files = fs.readdirSync(dir);
        for (const file of files) {
          const filePath = path.join(dir, file);
          allPaths.push(filePath);
          if (fs.statSync(filePath).isDirectory()) {
            walk(filePath);
          }
        }
      } catch (error) {
        console.warn(`⚠️  Error reading directory ${dir}: ${error.message}`);
      }
    };

    walk(this.distPath);

    // Identify items to delete
    const toDelete = [];
    for (const itemPath of allPaths) {
      if (!this.shouldKeep(itemPath)) {
        toDelete.push(itemPath);
      }
    }

    console.log(`🗑️  Identified ${toDelete.length} items to delete`);

    // Delete them
    this.deletedAssets = []; // reset
    for (const item of toDelete) {
      try {
        const stat = fs.statSync(item);
        const relativePath = path.relative(this.distPath, item);
        if (stat.isDirectory()) {
          if (!this.dryRun) {
            fs.rmSync(item, { recursive: true, force: true });
            console.log(`  ✅ Deleted directory: ${relativePath}`);
          } else {
            console.log(`  🧪 Would delete directory: ${relativePath}`);
          }
        } else {
          if (!this.dryRun) {
            fs.unlinkSync(item);
            console.log(`  ✅ Deleted file: ${relativePath}`);
          } else {
            console.log(`  🧪 Would delete file: ${relativePath}`);
          }
        }
        this.deletedAssets.push(relativePath);
      } catch (error) {
        console.error(`  ❌ Error deleting ${path.relative(this.distPath, item)}: ${error.message}`);
      }
    }

    console.log("\n✅ WordPress cleanup completed!");
    return {
      deletedItems: this.deletedAssets.length,
    };
  }

  /**
   * List all used assets without deleting anything
   */
  async listUsedAssets() {
    console.log("🔍 Analyzing asset usage from report...");

    await this.loadUsedAssetsFromReport();
    await this.findAllAssets();

    console.log("\n📋 Used Assets:");
    console.log("===============");
    const sortedUsedAssets = Array.from(this.usedAssets).sort();
    for (const asset of sortedUsedAssets) {
      console.log(`  ✅ ${asset}`);
    }

    const unusedAssets = await this.identifyUnusedAssets();
    console.log("\n🗑️  Unused Assets:");
    console.log("=================");
    for (const asset of unusedAssets) {
      console.log(`  ❌ ${asset}`);
    }

    console.log(
      `\n📊 Summary: ${this.usedAssets.size} used, ${unusedAssets.length} unused, ${this.allAssets.size} total`,
    );
  }
}

// CLI interface
if (require.main === module) {
  const cleanup = new UnusedAssetsCleanup();
  const args = process.argv.slice(2);

  const options = {
    dryRun: args.includes("--dry-run") || args.includes("-d"),
    listOnly: args.includes("--list") || args.includes("-l"),
    help: args.includes("--help") || args.includes("-h"),
    wordpress: args.includes("--wordpress") || args.includes("-w"),
  };

  if (options.help) {
    console.log(`
Usage: node cleanup-unused-assets.js [options]

This script can perform two types of cleanup:

1. Asset cleanup: Reads the dynamic import analysis report (dist/dynamic-import-analysis-simple.json)
   and identifies unused assets in the dist/custom-hooks/use-dynamic-import/assets directory.

2. WordPress cleanup: Cleans the entire dist directory, keeping only essential files for WordPress build.

Options:
  --dry-run, -d    Show what would be deleted without actually deleting
  --list, -l       List used and unused assets without deleting (asset cleanup only)
  --wordpress, -w  Perform WordPress dist cleanup instead of asset cleanup
  --help, -h       Show this help message

Examples:
  node cleanup-unused-assets.js --dry-run                    # Preview asset cleanup
  node cleanup-unused-assets.js --list                       # List assets and usage
  node cleanup-unused-assets.js                              # Actually delete unused assets
  node cleanup-unused-assets.js --wordpress --dry-run        # Preview WordPress cleanup
  node cleanup-unused-assets.js --wordpress                  # Actually clean dist for WordPress

Note: For asset cleanup, make sure to run the dynamic import analysis first to generate the report.
`);
    process.exit(0);
  }

  if (options.wordpress) {
    cleanup
      .cleanup({ wordpress: true, dryRun: options.dryRun })
      .then((result) => {
        console.log(`\n🎉 WordPress cleanup completed: ${result.deletedItems} items deleted`);
      })
      .catch(console.error);
  } else if (options.listOnly) {
    cleanup.listUsedAssets().catch(console.error);
  } else {
    cleanup
      .cleanup(options)
      .then((result) => {
        console.log(`\n🎉 Cleanup completed: ${result.deletedAssets} assets deleted`);
      })
      .catch(console.error);
  }
}

module.exports = UnusedAssetsCleanup;
