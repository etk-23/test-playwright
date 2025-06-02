import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  webServer: {
    command: 'npx http-server -p 8080',
    port: 8080,
    timeout: 5000,
    reuseExistingServer: true
  }
});
