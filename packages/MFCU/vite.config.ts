import {defineConfig} from "vite";
import vue from "@vitejs/plugin-vue";
import * as path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  resolve:{
    alias:{
      '@shared': path.resolve( __dirname, '../_shared' ),
    },
  },
  plugins: [vue()],
  build: {
    chunkSizeWarningLimit: 3000,
  },
});
