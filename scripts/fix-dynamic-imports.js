const fs = require('fs');
const path = require('path');

function fixDynamicImports() {
  const distPath = path.join(__dirname, '../dist/index.es.js');
  const distWordpressPath = path.join(__dirname, '../dist-wordpress/index.es.js');

  let indexPath, packagePath;
  if (fs.existsSync(distWordpressPath)) {
    indexPath = distWordpressPath;
    packagePath = 'vanguard/dist-wordpress';
  } else if (fs.existsSync(distPath)) {
    indexPath = distPath;
    packagePath = 'vanguard/dist';
  } else {
    console.log('index.es.js not found, skipping dynamic import fix');
    return;
  }

  let content = fs.readFileSync(indexPath, 'utf8');

  // Replace relative dynamic imports with package-relative imports
  content = content.replace(
    /import\("\.\/([^"]+\.mjs)"\)/g,
    `import("${packagePath}/$1")`
  );

  fs.writeFileSync(indexPath, content, 'utf8');
  console.log(`✅ Fixed dynamic import paths in ${path.relative(path.join(__dirname, '..'), indexPath)}`);
}

if (require.main === module) {
  fixDynamicImports();
}

module.exports = fixDynamicImports;