const fs = require('fs');
const { spawn } = require('child_process');

console.log('🧪 Testing installation failure with missing .vanguardrc...\n');

// Backup .vanguardrc
const vanguardrcPath = '/Users/a.kott/rc-webapp-vanguard/.vanguardrc';
const backupPath = vanguardrcPath + '.backup';

if (fs.existsSync(vanguardrcPath)) {
  fs.renameSync(vanguardrcPath, backupPath);
  console.log('📝 Moved .vanguardrc to simulate missing file');
}

// Set postinstall environment and run the script
process.env.npm_lifecycle_event = 'postinstall';

console.log('🚀 Running postinstall script...');

const child = spawn('node', ['/Users/a.kott/rc-webapp-vanguard/scripts/postinstall-build.js'], {
  stdio: 'inherit',
  env: {
    ...process.env,
    npm_lifecycle_event: 'postinstall'
  }
});

child.on('close', (code) => {
  console.log(`\n📊 Process exited with code: ${code}`);
  
  if (code === 1) {
    console.log('✅ Installation correctly failed due to missing .vanguardrc');
  } else if (code === 0) {
    console.log('❌ Installation should have failed but succeeded');
  } else {
    console.log(`❓ Unexpected exit code: ${code}`);
  }
  
  // Restore file
  if (fs.existsSync(backupPath)) {
    fs.renameSync(backupPath, vanguardrcPath);
    console.log('📝 Restored .vanguardrc');
  }
  
  delete process.env.npm_lifecycle_event;
  console.log('🎉 Test completed!');
});