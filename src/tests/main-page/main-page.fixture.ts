import { test as baseTest } from '@playwright/test'
import { MainPage } from '../../pages/main-page'

export const test = baseTest.extend<{
  mainPage: MainPage
}>({
  mainPage: async ({ page }, use) => {
    const mainPage = new MainPage(page)
    await mainPage.open()
    await use(mainPage)
  },
})

export const expect = test.expect
