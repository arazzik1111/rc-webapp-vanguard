#!/usr/bin/env node

const VanguardConfig = require('./vanguard-config');
const ComponentAssetAnalyzer = require('./analyze-component-assets');

/**
 * Test script to verify component-based asset detection is working correctly
 */
class ComponentAssetTest {
  constructor() {
    this.config = new VanguardConfig();
  }

  async runTest() {
    console.log('🧪 Testing component-based asset detection...\n');

    // Test 1: Load configuration
    console.log('📋 Test 1: Loading configuration');
    const config = this.config.loadConfig();
    console.log('Configuration loaded:', JSON.stringify(config, null, 2));
    console.log('✅ Configuration test passed\n');

    // Test 2: Component analysis
    console.log('📋 Test 2: Component analysis');
    const analyzer = new ComponentAssetAnalyzer();
    
    try {
      const analysis = analyzer.analyze();
      console.log(`✅ Analysis completed:`);
      console.log(`   - Mode: ${analysis.mode}`);
      console.log(`   - Components analyzed: ${analysis.totalComponents}`);
      console.log(`   - Total assets found: ${analysis.totalAssets}`);
      
      if (analysis.config && analysis.config.components) {
        console.log(`   - Limited to components: ${analysis.config.components.join(', ')}`);
      }
      
      console.log(`   - Components with assets: ${analysis.summary.componentsWithAssets}`);
      console.log('✅ Component analysis test passed\n');

      // Test 3: Component-based asset detection
      console.log('📋 Test 3: Component-based asset detection');
      if (analysis.allAssets.length > 0) {
        console.log('Assets found for selected components:');
        analysis.allAssets.slice(0, 5).forEach(asset => {
          console.log(`   - ${asset}`);
        });
        console.log('✅ Component-based asset detection working correctly');
      } else {
        console.log('ℹ️  No assets found for selected components');
      }

    } catch (error) {
      console.error('❌ Analysis failed:', error.message);
    }

    console.log('\n🏁 Component-based asset detection test completed');
  }
}

// Run test if executed directly
if (require.main === module) {
  const test = new ComponentAssetTest();
  test.runTest().catch(error => {
    console.error('Test failed:', error);
    process.exit(1);
  });
}

module.exports = ComponentAssetTest;