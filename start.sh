#!/bin/sh
node -v

echo 'generating files...'
npx -p typescript@4.9.4 tsc --lib es2015,dom test.ts --out tsc-es2015.js
npx -p typescript@4.9.4 tsc --lib esnext,dom test.ts --out tsc-esnext.js
npx esbuild test.ts --target=es2015 --outfile=esbuild-es2015.js
npx esbuild test.ts --target=esnext --outfile=esbuild-esnext.js

echo '$ node tsc-es2015.js' && node tsc-es2015.js
echo '$ node tsc-esnext.js' && node tsc-esnext.js
echo '$ node esbuild-es2015.js' && node esbuild-es2015.js
echo '$ node esbuild-esnext.js' && node esbuild-esnext.js
