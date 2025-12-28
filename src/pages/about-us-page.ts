import { Page } from '@playwright/test'
import { BasePage } from './base-page'
import { baseUrl } from '../config/config'
import { url } from '../constants/routes'

export class AboutUsPage extends BasePage {
  readonly fancyTag = this.page.locator('.fancy-tag')
  readonly languageSwitcher = this.page.locator('.et-language').first()
  readonly estonianLang = this.page.locator('a[data-lang="et"]').first()
  readonly russianLang = this.page.locator('a[data-lang="ru"]').first()
  readonly englishLang = this.page.locator('a[data-lang="en"]').first()

  constructor(page: Page) {
    super(page)
    this.url = `${baseUrl}${url.strict.aboutUs}`
  }
}
