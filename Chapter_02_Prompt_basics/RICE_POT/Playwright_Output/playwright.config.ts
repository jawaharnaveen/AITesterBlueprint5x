import 'dotenv/config';
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: Boolean(process.env.CI),
  retries: process.env.CI ? 1 : 0,
  workers: process.env.CI ? 2 : undefined,
  reporter: [
    ['list'],
    ['allure-playwright', { outputFolder: 'allure-results', detail: true }]
  ],
  use: {
    ...devices['Desktop Chrome'],
    baseURL: process.env.WINGIFY_BASE_URL ?? 'https://app.wingify.com',
    trace: 'retain-on-failure',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure'
  },
  outputDir: 'test-results'
});
