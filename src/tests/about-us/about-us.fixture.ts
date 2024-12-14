import { test as baseTest } from '../main-page/main-page.fixture'
import { AboutUsPage } from '../../pages/about-us-page'

export const test = baseTest.extend<{
  aboutUsPage: AboutUsPage
}>({
  aboutUsPage: async ({ page }, use) => {
    const aboutUsPage = new AboutUsPage(page)
    await aboutUsPage.open()
    await use(aboutUsPage)
  },
})
