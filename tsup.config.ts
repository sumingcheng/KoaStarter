import { defineConfig } from 'tsup';

export default defineConfig({
  clean: true,
  target: 'esnext',
  entry: [ './app.ts' ],
  minify: true,
  sourcemap: true,
  esbuildOptions (options) {
    options.minifySyntax = true;
    options.minifyWhitespace = true;
    options.minifyIdentifiers = true;
  }
});
