import { urlMatchers } from '../../pages/url-matchers'
import { test, expect } from './main-page.fixture'

test.describe('Main page tests', () => {
  test('should navigate to Polymer Clay category', async ({ mainPage }) => {
    await mainPage.clickButton(mainPage.polymerCategory)
    await expect(mainPage.page).toHaveURL(
      urlMatchers.productCategory.polymerClay
    )
  })

  test('should navigate to Silver category', async ({ mainPage }) => {
    await mainPage.clickButton(mainPage.silverCategory)
    await expect(mainPage.page).toHaveURL(urlMatchers.productCategory.silver)
  })
})
