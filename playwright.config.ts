import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: 'tests',
  timeout: 30000,
  expect: {
    timeout: 5000
  },
  reporter: 'list',
  use: {
    headless: true,
    video: 'on',
    browserName: 'chromium',
    launchOptions: {
      slowMo: 50
    }
  }
});