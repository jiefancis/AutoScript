import archiver from 'archiver';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import chalk from 'chalk';
import pkg from '../package.json' assert { type: 'json' };

function resolve(filePath) {
  const __dirname = path.dirname(fileURLToPath(import.meta.url));
  return path.join(__dirname, filePath);
}
const browser = 'chrome';
const appVersion = pkg.version;
const fileName = `${pkg.name}-${browser}-v${appVersion}.zip`;

const destDir = resolve('../dist');
const zipDir = resolve('../dist-zip');

if (!fs.existsSync(zipDir)) {
  fs.mkdirSync(zipDir, { recursive: true });
}

const archive = archiver('zip', { zlib: { level: 9 } });
const stream = fs.createWriteStream(path.join(zipDir, fileName));

archive
  .directory(destDir, false)
  .on('error', (error) => {
    console.error(error);
  })
  .pipe(stream);

stream.on('close', () => console.log(chalk.green`✓ Build gzip successfully`));
archive.finalize();
