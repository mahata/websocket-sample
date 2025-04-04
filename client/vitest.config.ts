/// <reference types="vitest" />
/// <reference types="@vitest/browser/providers/playwright" />

import react from "@vitejs/plugin-react";
import { defineConfig } from 'vitest/config';

export default defineConfig({
  plugins: [react()],
  test: {
    setupFiles: ['./src/setupTests.ts'],
    browser: {
      name: 'chromium',
      provider: 'playwright',
      enabled: true,
    },
  }
})
