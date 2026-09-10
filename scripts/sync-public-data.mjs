import fs from 'node:fs';
import path from 'node:path';

const src = path.resolve('data');
const dst = path.resolve('public/data');
fs.rmSync(dst, { recursive: true, force: true });
fs.cpSync(src, dst, { recursive: true });
console.log('Public CSV mirror updated.');
