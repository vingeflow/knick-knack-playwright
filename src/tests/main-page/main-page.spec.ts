import { urlMatchers } from '../../constants/routes'
import { test } from './main-page.fixture'

test.describe('Main page tests', () => {
  test('Should navigate to Polymer Clay category', async ({ mainPage }) => {
    await mainPage.clickButton(mainPage.polymerCategory)
    await mainPage.expect(mainPage.page).toHaveURL(urlMatchers.polymerClay)
  })

  test('Should navigate to Silver category', async ({ mainPage }) => {
    await mainPage.clickButton(mainPage.silverCategory)
    await mainPage.expect(mainPage.page).toHaveURL(urlMatchers.silver)
  })
})
