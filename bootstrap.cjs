const { execFileSync } = require('node:child_process');
execFileSync('tar', ['-xJf', 'payload.tar.xz', '-C', '.'], { stdio: 'inherit' });
console.log('DentHub V8.18 source unpacked.');
