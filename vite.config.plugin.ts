import { defineConfig } from "vite";
import path from "node:path";
import { viteSingleFile } from "vite-plugin-singlefile";
import react from "@vitejs/plugin-react";
import replace from "@rollup/plugin-replace";
import sass from 'sass-embedded';

export default defineConfig(({ mode }) => ({
  plugins: [
    react({
      include: "**/*.{jsx,tsx}",
    }),
    viteSingleFile({
      removeViteModuleLoader: true,
    }),
    replace({
      "import.meta.url": JSON.stringify(new URL(import.meta.url).href),
      delimiters: ["", ""],
      preventAssignment: true,
    }),
  ],
  css: {
    preprocessorOptions: {
      scss: {
        implementation: sass,
      },
    },
  },
  root: path.resolve(__dirname, "src"),
  build: {
    target: 'esnext',
    assetsInlineLimit: 100000000,
    chunkSizeWarningLimit: 100000000,
    cssCodeSplit: false,
    brotliSize: false,
    minify: mode === "production",
    cssMinify: mode === "production",
    sourcemap: false,
    emptyOutDir: false,
    outDir: path.resolve(__dirname, "dist"),
    rollupOptions: {
      input: path.resolve(__dirname, "src/plugin.html"),
      output: {
        manualChunks: undefined,
        entryFileNames: "ui.js",
        format: "esm",
      },
    },
  },
  resolve: {
    alias: {
      services: path.resolve(__dirname, "src/services"),
      utilities: path.resolve(__dirname, "src/utilities"),
    },
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
  },
}));