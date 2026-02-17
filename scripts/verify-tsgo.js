#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');

console.log('🚀 Verifying TypeScript 7 (tsgo) setup...\n');

try {
  // Check if tsgo is available
  const version = execSync('npx tsgo --version', { encoding: 'utf8' }).trim();
  console.log('✅ TypeScript 7 (tsgo) version:', version);

  // Check if build info files are being generated
  const buildInfoFiles = ['.tsbuildinfo', '.tsbuildinfo-lib', '.tsbuildinfo-app'];
  
  console.log('\n📁 Checking for incremental build files:');
  buildInfoFiles.forEach(file => {
    if (fs.existsSync(file)) {
      console.log(`✅ ${file} exists`);
    } else {
      console.log(`⚠️  ${file} not found (will be created on first build)`);
    }
  });

  // Test type checking
  console.log('\n🔍 Testing type checking with tsgo...');
  try {
    execSync('npx tsgo --noEmit --project tsconfig.lib.json', { encoding: 'utf8' });
    console.log('✅ Type checking passed');
  } catch (error) {
    console.log('❌ Type checking failed:', error.message);
  }

  console.log('\n🎉 TypeScript 7 (tsgo) setup verification complete!');
  console.log('\nKey improvements with TypeScript 7:');
  console.log('• 10x faster compilation');
  console.log('• Reduced memory usage');
  console.log('• Incremental builds with .tsbuildinfo files');
  console.log('• Native Go-based compiler (tsgo)');

} catch (error) {
  console.error('❌ Error verifying tsgo setup:', error.message);
  process.exit(1);
}