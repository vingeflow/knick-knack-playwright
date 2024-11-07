import { test } from '@playwright/test'
import { baseUrl } from '../config/config'

test('basic test', async ({ page }) => {
  await page.goto(`${baseUrl}`)
})
