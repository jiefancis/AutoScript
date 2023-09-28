import { defineConfig, splitVendorChunkPlugin } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

const env = process.env.ENV;
const isProd = env === 'prod';

const VARIABLE_LESS_PATH = './src/variable.less';

let apiBaseUrl = 'http://3.208.255.189:3007';
let apiFileUrl = 'http://3.208.255.189:8889';
let dashboardUrl = 'https://dashboard.autoape.ai';

if (env !== 'prod') {
  apiFileUrl = 'http://3.208.255.189:8889';
  apiBaseUrl = 'http://3.208.255.189:3007';
  dashboardUrl = 'https://test.auto-ape-dashboard.pages.dev/dashboard';
}
const watch = isProd ? null : {};
const manualChunks = isProd
  ? {
      lodash: ['lodash-es'],
      react: ['react', 'react-dom', 'react-router-dom'],
      antd: ['antd'],
    }
  : null;

const plugins = isProd ? [react(), splitVendorChunkPlugin()] : [react()];

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    watch,
    rollupOptions: {
      input: {
        action: 'action.html',
        index: 'index.html',
        background: 'src/background.ts',
        'content-script': 'src/content-script.ts',
        contentScriptStyle: 'src/content-script.less',
      },
      output: {
        entryFileNames: '[name].js',
        chunkFileNames: '[name].[hash].js',
        assetFileNames: '[name].[ext]',
        manualChunks: manualChunks,
      },
    },
    outDir: 'dist',
  },
  plugins: plugins,
  define: {
    'import.meta.env.NODE_ENV': JSON.stringify(env),
    API_BASE_URL: JSON.stringify(apiBaseUrl),
    API_FILE_URL: JSON.stringify(apiFileUrl),
    DASHBOARD_URL: JSON.stringify(dashboardUrl),
  },
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
        additionalData: `@import "${VARIABLE_LESS_PATH}";`,
      },
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@components': path.resolve(__dirname, './src/components'),
    },
  },
  server: {
    host: '0.0.0.0',
    port: 3000,
    open: '/',
    https: false,
  },
});
