import { urlMatchers } from '../../constants/routes'
import {
  aboutUsPageEn,
  aboutUsPageEt,
  aboutUsPageRu,
} from '../../constants/translations'
import { test } from './about-us.fixture'

test.describe('About Us page tests', () => {
  test(
    'Open the About Us page from the main page',
    { tag: '@desktop' },
    async ({ mainPage }) => {
      await mainPage.clickButton(mainPage.barBtn)
      const aboutUsPage = await mainPage.returnAboutUsPage()

      await aboutUsPage.expect
        .soft(aboutUsPage.page)
        .toHaveURL(urlMatchers.aboutUs)

      await aboutUsPage.expect
        .soft(aboutUsPage.fancyTag)
        .toHaveText(aboutUsPageEn.tags.fancyTag)
    }
  )

  test(
    'Switch the language to Estonian',
    { tag: '@desktop' },
    async ({ aboutUsPage }) => {
      await aboutUsPage.languageSwitcher.hover()
      await aboutUsPage.clickButton(aboutUsPage.estonianLang)

      await aboutUsPage.expect
        .soft(aboutUsPage.fancyTag)
        .toHaveText(aboutUsPageEt.tags.fancyTag)
    }
  )

  test(
    'Switch the language to Russian',
    { tag: '@desktop' },
    async ({ aboutUsPage }) => {
      await aboutUsPage.languageSwitcher.hover()
      await aboutUsPage.clickButton(aboutUsPage.russianLang)

      await aboutUsPage.expect
        .soft(aboutUsPage.fancyTag)
        .toHaveText(aboutUsPageRu.tags.fancyTag)
    }
  )
})
