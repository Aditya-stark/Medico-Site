import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import macrosPlugin from 'babel-plugin-macros';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [macrosPlugin],
      },
    }),
  ],
});