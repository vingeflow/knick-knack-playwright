import { defineConfig, devices } from '@playwright/test'
import { stagingUsername, stagingPassword } from './src/config/config'

const isStaging = process.env.ENV === 'staging'

export default defineConfig({
  testDir: './src/tests',
  timeout: 15000,
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
    ...(isStaging && {
      extraHTTPHeaders: {
        Authorization:
          'Basic ' +
          Buffer.from(`${stagingUsername}:${stagingPassword}`).toString(
            'base64'
          ),
      },
    }),
  },
  projects: [
    {
      name: 'Chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'Mobile Android',
      use: {
        ...devices['Pixel 7'],
      },
      grepInvert: /@desktop/,
    },
    {
      name: 'Mobile iOS',
      use: {
        ...devices['iPhone 14'],
      },
      grepInvert: /@desktop|@notForIOS/,
    },
  ],
})
