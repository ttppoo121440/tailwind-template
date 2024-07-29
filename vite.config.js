import { defineConfig, loadEnv } from 'vite';
import path from 'path';
import { fileURLToPath } from 'url';
import { globSync } from 'glob';
import liveReload from 'vite-plugin-live-reload';
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';
import { ViteEjsPlugin } from 'vite-plugin-ejs';

function moveOutputPlugin() {
  return {
    name: 'move-output',
    enforce: 'post',
    apply: 'build',
    async generateBundle(options, bundle) {
      for (const fileName in bundle) {
        if (fileName.startsWith('src/pages/')) {
          const newFileName = fileName.slice('src/pages/'.length);
          bundle[fileName].fileName = newFileName;
        }
      }
    },
  };
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());

  return {
    base: mode === 'development' ? '/' : env.VITE_BASE_URL || '/',
    build: {
      rollupOptions: {
        input: {
          main: path.resolve(__dirname, 'src/pages/index.html'),
          ...Object.fromEntries(
            globSync('src/pages/**/*.html').map((file) => [
              path.relative(
                'src/pages',
                file.slice(0, file.length - path.extname(file).length),
              ),
              fileURLToPath(new URL(file, import.meta.url)),
            ]),
          ),
        },
      },
      outDir: 'dist',
    },
    resolve: {
      alias: {
        '@': path.resolve('./src'),
      },
    },
    server: {
      port: 3000,
      open: '/src/pages/index.html',
      fs: {
        allow: [
          path.resolve(__dirname, 'src'),
          path.resolve(__dirname, 'src/pages'),
        ],
      },
    },
    plugins: [
      liveReload([
        './src/layout/**/*.ejs',
        './src/pages/**/*.ejs',
        './src/pages/**/*.html',
      ]),
      ViteEjsPlugin({
        base: mode === 'development' ? '/src/pages/' : env.VITE_BASE_URL || '/',
      }),
      moveOutputPlugin(),
    ],
    css: {
      postcss: {
        plugins: [tailwindcss(), autoprefixer],
      },
    },
  };
});
