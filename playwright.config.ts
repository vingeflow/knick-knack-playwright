import { defineConfig, devices } from '@playwright/test'
import { stagingUsername, stagingPassword } from './src/config/config'

export default defineConfig({
  testDir: './src/tests',
  timeout: 10000,
  retries: 1,
  maxFailures: 5,
  reporter: [
    ['json', { outputFile: 'playwright-report.json' }],
    ['html', { outputFile: 'playwright-report-.html' }],
  ],
  use: {
    headless: true,
    viewport: { width: 1280, height: 720 },
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    extraHTTPHeaders: {
      Authorization:
        'Basic ' +
        Buffer.from(`${stagingUsername}:${stagingPassword}`).toString('base64'),
    },
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
  ],
})
