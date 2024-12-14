import { Page } from '@playwright/test'
import { BasePage } from './base-page'
import { baseUrl } from '../config/config'
import { url } from '../constants/routes'

export class AboutUsPage extends BasePage {
  readonly fancyTag = this.page.locator('.fancy-tag')

  constructor(page: Page) {
    super(page)
    this.url = `${baseUrl}${url.strict.aboutUs}`
  }
}
