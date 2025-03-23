import { defineConfig } from "vite";
import react from '@vitejs/plugin-react'; 
import tailwindcss from "tailwindcss";

export default defineConfig({
  plugins: [
    react(), // Add React plugin first
  ],
  css: {
    postcss: {
      plugins: [tailwindcss()],
    },
  },
  base: '/hack110.github.io/',
});