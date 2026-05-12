const fs = require('fs');
const path = require('path');

const outDir = path.join(__dirname, '..', 'out');
const noJekyllPath = path.join(outDir, '.nojekyll');

if (!fs.existsSync(outDir)) {
  console.error(`Cannot create ${path.relative(process.cwd(), noJekyllPath)} because the out directory does not exist.`);
  process.exit(1);
}

try {
  fs.closeSync(fs.openSync(noJekyllPath, 'a'));
  console.log(`Ensured ${path.relative(process.cwd(), noJekyllPath)} exists.`);
} catch (error) {
  console.error(`Failed to ensure ${path.relative(process.cwd(), noJekyllPath)}:`, error);
  process.exit(1);
}
