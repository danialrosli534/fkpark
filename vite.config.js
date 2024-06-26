// vite.config.js
import { defineConfig } from 'vite';
import { liveReload } from "vite-plugin-live-reload";

const baseUrl = '/CB22159/fkpark/'

export default defineConfig(({command, mode }) => {

  let baseSetting = '';
  if (command === 'build') {
    baseSetting = baseUrl + 'build/'
  }

  return {
    plugins:[
      liveReload(['**/*.php'])
    ],
    base: baseSetting,
    server: {
      origin: "http://localhost:5173"
    },
    build: {
      manifest: true,
      outDir: 'build',
      rollupOptions: {
        input: './js/main.js',
      },
    },
  }
});
