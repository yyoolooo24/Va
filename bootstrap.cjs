const fs = require('fs');
const { execFileSync } = require('child_process');
let encoded = '';
for (let i = 0; i < 7; i++) {
  encoded += fs.readFileSync(`payload/part${String(i).padStart(2, '0')}.b64`, 'utf8').trim();
}
fs.writeFileSync('.v818.tar.xz', Buffer.from(encoded, 'base64'));
execFileSync('tar', ['-xJf', '.v818.tar.xz'], { stdio: 'inherit' });
try { fs.unlinkSync('.v818.tar.xz'); } catch {}
console.log('DentHub V8.18 source unpacked.');
