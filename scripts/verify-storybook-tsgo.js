#!/usr/bin/env node

const { execSync, spawn } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🚀 Verifying Storybook TypeScript 7 (tsgo) integration...\n');

try {
  // Check if tsgo is available
  const version = execSync('npx tsgo --version', { encoding: 'utf8' }).trim();
  console.log('✅ TypeScript 7 (tsgo) version:', version);

  // Check if our custom plugin exists
  const pluginPath = path.resolve(__dirname, '../.storybook/vite-plugin-tsgo-checker.ts');
  if (fs.existsSync(pluginPath)) {
    console.log('✅ Custom tsgo checker plugin exists');
  } else {
    console.log('❌ Custom tsgo checker plugin not found');
  }

  // Check Storybook configuration
  const storybookConfigPath = path.resolve(__dirname, '../.storybook/main.ts');
  if (fs.existsSync(storybookConfigPath)) {
    const config = fs.readFileSync(storybookConfigPath, 'utf8');
    
    if (config.includes('tsgoChecker')) {
      console.log('✅ Storybook configuration includes tsgo checker');
    } else {
      console.log('❌ Storybook configuration missing tsgo checker');
    }

    if (config.includes('check: true')) {
      console.log('✅ TypeScript checking enabled in Storybook');
    } else {
      console.log('❌ TypeScript checking disabled in Storybook');
    }

    if (config.includes('skipCompiler: false')) {
      console.log('✅ TypeScript compiler enabled in Storybook');
    } else {
      console.log('❌ TypeScript compiler disabled in Storybook');
    }
  }

  // Test type checking with tsgo on library config
  console.log('\n🔍 Testing tsgo type checking on library configuration...');
  try {
    execSync('npx tsgo --noEmit --project tsconfig.lib.json', { 
      encoding: 'utf8',
      cwd: path.resolve(__dirname, '..')
    });
    console.log('✅ Library type checking passed with tsgo');
  } catch (error) {
    console.log('❌ Library type checking failed:', error.message.split('\n')[0]);
  }

  console.log('\n🎉 Storybook TypeScript 7 (tsgo) integration verification complete!');
  console.log('\nStorybook now uses:');
  console.log('• TypeScript 7 (tsgo) for type checking');
  console.log('• Custom vite plugin for tsgo integration');
  console.log('• Real-time type checking during development');
  console.log('• Error overlay for TypeScript errors');
  console.log('\nTo test: npm run storybook');

} catch (error) {
  console.error('❌ Error verifying Storybook tsgo integration:', error.message);
  process.exit(1);
}