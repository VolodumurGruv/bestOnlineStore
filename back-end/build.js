import { build } from 'esbuild';
import fs from 'fs';
import path from 'path';

const nodeModules = new RegExp(
  /^(?:.*[\\\/])?node_modules(?:[\\\/].*)?$/
);

const dirnamePlugin = {
  name: "dirname",

  setup(build) {
    build.onLoad({ filter: /.*/ }, ({ path: filePath }) => {
      if (!filePath.match(nodeModules)) {
        let contents = fs.readFileSync(filePath, "utf8");
        const loader = path.extname(filePath).substring(1);
        const dirname = path.dirname(filePath);
        contents = contents
          .replace("__dirname", `"${dirname}"`)
          .replace("__filename", `"${filePath}"`);
        return {
          contents,
          loader,
        };
      }
    });
  },
};

build({
  entryPoints: ['./src/server.js'],
  platform: 'node',
  external: ['aws-sdk', 'mock-aws-s3', 'nock'],
  format: 'esm',
  plugins: [dirnamePlugin],
  bundle: true,
  minify: false,
  outfile: './dist/api/index.js',
  banner: {
    js:`import { createRequire } from 'module';const require = createRequire(import.meta.url);`
  },
  loader: {
    '.html': 'text'
  }
})
.then(() => console.log("⚡ Done"))
.catch(() => process.exit(1));
