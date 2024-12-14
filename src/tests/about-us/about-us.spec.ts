import { urlMatchers } from '../../constants/routes'
import { aboutUsPageEn } from '../../constants/translations'
import { test } from './about-us.fixture'

test.describe('About Us page tests', () => {
  test('Open the About Us page from the main page', async ({ mainPage }) => {
    await mainPage.clickButton(mainPage.barBtn)
    const aboutUsPage = await mainPage.returnAboutUsPage()
    await aboutUsPage.expect
      .soft(aboutUsPage.page)
      .toHaveURL(urlMatchers.aboutUs)
    await aboutUsPage.expect
      .soft(aboutUsPage.fancyTag)
      .toHaveText(aboutUsPageEn.tags.fancyTag)
  })
})
