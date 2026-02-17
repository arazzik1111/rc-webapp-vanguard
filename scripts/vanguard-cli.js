#!/usr/bin/env node

const VanguardConfig = require("./vanguard-config");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

class VanguardCLI {
  constructor() {
    this.config = new VanguardConfig();
  }

  async run() {
    const args = process.argv.slice(2);
    const command = args[0];

    switch (command) {
      case "init":
        await this.initConfig();
        break;
      case "list":
        this.listComponents();
        break;
      case "add":
        await this.addComponents(args.slice(1));
        break;
      case "remove":
        await this.removeComponents(args.slice(1));
        break;
      case "assets":
        await this.configureAssets();
        break;
      case "build":
        await this.configureBuildOptions();
        break;

      case "status":
        this.showStatus();
        break;
      case "clean-assets":
        await this.cleanAssets();
        break;
      case "rebuild":
        await this.rebuildLibrary();
        break;
      default:
        this.showHelp();
    }

    rl.close();
  }

  async initConfig() {
    console.log("🚀 Initializing Vanguard configuration...\n");

    const mode = await this.askQuestion(
      "Choose installation mode:\n1. Full (all components)\n2. Vanguard (choose components)\nEnter choice (1 or 2): ",
    );

    const config = this.config.loadConfig();
    config.mode = mode === "2" ? "vanguard" : "full";

    if (config.mode === "vanguard") {
      console.log("\n📦 Available components:");
      const availableComponents = this.config.getAvailableComponents();
      availableComponents.forEach((comp, index) => {
        console.log(`${index + 1}. ${comp}`);
      });

      const selection = await this.askQuestion(
        '\nEnter component numbers (comma-separated) or "all" for all components: ',
      );

      if (selection.toLowerCase() === "all") {
        config.components = availableComponents;
      } else {
        const indices = selection.split(",").map((s) => parseInt(s.trim()) - 1);
        config.components = indices
          .filter((i) => i >= 0 && i < availableComponents.length)
          .map((i) => availableComponents[i]);
      }
    }

    const errors = this.config.validateConfig(config);
    if (errors.length > 0) {
      console.error("❌ Configuration errors:");
      errors.forEach((error) => console.error(`  - ${error}`));
      return;
    }

    if (this.config.saveConfig(config)) {
      console.log("✅ Configuration saved to .vanguardrc");
      this.showStatus();
    } else {
      console.error("❌ Failed to save configuration");
    }
  }

  listComponents() {
    console.log("📦 Available components:");
    const components = this.config.getAvailableComponents();
    components.forEach((comp) => console.log(`  - ${comp}`));

    console.log("\n🎨 Available asset categories:");
    const assets = this.config.getAvailableAssets();
    assets.forEach((asset) => console.log(`  - ${asset}`));
  }

  async addComponents(componentNames) {
    if (componentNames.length === 0) {
      console.error("❌ Please specify component names to add");
      return;
    }

    const config = this.config.loadConfig();
    if (config.mode !== "vanguard") {
      console.log("ℹ️  Switching to vanguard mode...");
      config.mode = "vanguard";
      if (!config.components || config.components.length === 0) {
        config.components = [];
      }
    }

    const availableComponents = this.config.getAvailableComponents();
    const validComponents = componentNames.filter((name) => availableComponents.includes(name));
    const invalidComponents = componentNames.filter((name) => !availableComponents.includes(name));

    if (invalidComponents.length > 0) {
      console.error("❌ Unknown components:", invalidComponents.join(", "));
    }

    validComponents.forEach((comp) => {
      if (!config.components.includes(comp)) {
        config.components.push(comp);
        console.log(`✅ Added ${comp}`);
      } else {
        console.log(`ℹ️  ${comp} already included`);
      }
    });

    if (this.config.saveConfig(config)) {
      console.log("✅ Configuration updated");
    }
  }

  async removeComponents(componentNames) {
    if (componentNames.length === 0) {
      console.error("❌ Please specify component names to remove");
      return;
    }

    const config = this.config.loadConfig();
    if (config.mode !== "vanguard") {
      console.log("❌ Cannot remove components in full mode. Switch to vanguard mode first.");
      return;
    }

    componentNames.forEach((comp) => {
      const index = config.components.indexOf(comp);
      if (index > -1) {
        config.components.splice(index, 1);
        console.log(`✅ Removed ${comp}`);
      } else {
        console.log(`ℹ️  ${comp} was not included`);
      }
    });

    if (this.config.saveConfig(config)) {
      console.log("✅ Configuration updated");
    }
  }

  async configureAssets() {
    const config = this.config.loadConfig();
    const availableAssets = this.config.getAvailableAssets();

    console.log("🎨 Configure asset categories:\n");

    for (const asset of availableAssets) {
      const current = config.assets[asset] ? "enabled" : "disabled";
      const answer = await this.askQuestion(`${asset} (currently ${current}) - enable? (y/n): `);
      config.assets[asset] = answer.toLowerCase().startsWith("y");
    }

    if (this.config.saveConfig(config)) {
      console.log("✅ Asset configuration updated");
    }
  }

  async configureBuildOptions() {
    const config = this.config.loadConfig();

    console.log("🔧 Configure build options:\n");

    // Initialize buildOptions if it doesn't exist
    if (!config.buildOptions) {
      config.buildOptions = {
        treeshaking: true,
        minify: true,
        sourcemap: true,
      };
    }

    const buildOptions = config.buildOptions;

    // Configure treeshaking
    const treeshakingCurrent = buildOptions.treeshaking ? "enabled" : "disabled";
    const treeshakingAnswer = await this.askQuestion(
      `Tree shaking (currently ${treeshakingCurrent}) - enable? (y/n): `,
    );
    buildOptions.treeshaking = treeshakingAnswer.toLowerCase().startsWith("y");

    // Configure minification
    const minifyCurrent = buildOptions.minify ? "enabled" : "disabled";
    const minifyAnswer = await this.askQuestion(`Minification (currently ${minifyCurrent}) - enable? (y/n): `);
    buildOptions.minify = minifyAnswer.toLowerCase().startsWith("y");

    // Configure sourcemap
    const sourcemapCurrent = buildOptions.sourcemap ? "enabled" : "disabled";
    const sourcemapAnswer = await this.askQuestion(`Source maps (currently ${sourcemapCurrent}) - enable? (y/n): `);
    buildOptions.sourcemap = sourcemapAnswer.toLowerCase().startsWith("y");

    config.buildOptions = buildOptions;

    if (this.config.saveConfig(config)) {
      console.log("✅ Build options updated");
      console.log("\n📋 Current build options:");
      console.log(`  Tree shaking: ${buildOptions.treeshaking ? "✓" : "✗"}`);
      console.log(`  Minification: ${buildOptions.minify ? "✓" : "✗"}`);
      console.log(`  Source maps: ${buildOptions.sourcemap ? "✓" : "✗"}`);
      console.log('\n💡 Run "npm run build-lib" to apply these settings');
    }
  }

  async cleanAssets() {
    console.log("🧹 Running asset cleanup based on .vanguardrc configuration...");
    
    try {
      const VanguardAssetCleaner = require('./clean-assets-based-on-vanguardrc');
      const cleaner = new VanguardAssetCleaner();
      await cleaner.run();
    } catch (error) {
      console.error("❌ Asset cleanup failed:", error.message);
    }
  }

  async rebuildLibrary() {
    console.log("🔄 Rebuilding Vanguard library...");
    console.log("This will run the same process as the postinstall build.\n");
    
    try {
      const PostInstallBuilder = require('./postinstall-build');
      const builder = new PostInstallBuilder();
      
      // Force rebuild by temporarily overriding the up-to-date check
      const originalIsDistUpToDate = builder.isDistUpToDate;
      builder.isDistUpToDate = () => false;
      
      // Force rebuild by overriding development environment check
      const originalIsDevelopmentEnvironment = builder.isDevelopmentEnvironment;
      builder.isDevelopmentEnvironment = () => false;
      
      // Force rebuild by overriding consuming repo check
      const originalIsRunningInConsumingRepository = builder.isRunningInConsumingRepository;
      builder.isRunningInConsumingRepository = () => true;
      
      await builder.run();
      
      // Restore original methods
      builder.isDistUpToDate = originalIsDistUpToDate;
      builder.isDevelopmentEnvironment = originalIsDevelopmentEnvironment;
      builder.isRunningInConsumingRepository = originalIsRunningInConsumingRepository;
      
      console.log("✅ Library rebuild completed successfully!");
    } catch (error) {
      console.error("❌ Library rebuild failed:", error.message);
      console.error("💡 You can also try running: npm run build-lib");
    }
  }

  showStatus() {
    const config = this.config.loadConfig();

    console.log("\n📊 Current Vanguard Configuration:");
    console.log(`Mode: ${config.mode}`);

    if (config.mode === "vanguard") {
      console.log(`Components (${config.components.length}):`);
      config.components.forEach((comp) => console.log(`  ✓ ${comp}`));
    } else {
      console.log("Components: All available components");
    }

    console.log("\nAssets:");
    if (config.assets && typeof config.assets === "object") {
      Object.entries(config.assets).forEach(([asset, enabled]) => {
        console.log(`  ${enabled ? "✓" : "✗"} ${asset}`);
      });
    } else {
      console.log("  No asset configuration found");
    }

    console.log("\nBuild Options:");
    if (config.buildOptions) {
      console.log(`  Tree shaking: ${config.buildOptions.treeshaking ? "✓" : "✗"}`);
      console.log(`  Minification: ${config.buildOptions.minify ? "✓" : "✗"}`);
      console.log(`  Source maps: ${config.buildOptions.sourcemap ? "✓" : "✗"}`);
    } else {
      console.log("  Using default build options");
    }


  }

  showHelp() {
    console.log(`
🛠️  Vanguard Component Library CLI

Usage: node scripts/vanguard-cli.js <command> [options]

Commands:
  init                    Initialize configuration interactively
  list                    List all available components and assets
  add <components...>     Add components to vanguard installation
  remove <components...>  Remove components from vanguard installation
  assets                  Configure asset categories
  build                   Configure build options (sourcemap, minify, treeshaking)
  status                  Show current configuration
  clean-assets            Clean assets based on .vanguardrc configuration
  rebuild                 Force rebuild the library (same as postinstall build)

Examples:
  node scripts/vanguard-cli.js init
  node scripts/vanguard-cli.js add Button Icon Text
  node scripts/vanguard-cli.js remove Modal
  node scripts/vanguard-cli.js assets
  node scripts/vanguard-cli.js build
  node scripts/vanguard-cli.js status
  node scripts/vanguard-cli.js rebuild
`);
  }

  askQuestion(question) {
    return new Promise((resolve) => {
      rl.question(question, resolve);
    });
  }
}

if (require.main === module) {
  const cli = new VanguardCLI();
  cli.run().catch(console.error);
}

module.exports = VanguardCLI;
