import { Page } from '@playwright/test'
import { BasePage } from './base-page'
import { baseUrl } from '../config/config'
import { AboutUsPage } from './about-us-page'

export class MainPage extends BasePage {
  readonly polymerCategory = this.page.locator('a.cat-polymer-clay')
  readonly silverCategory = this.page.locator('a.cat-silver')
  readonly barBtn = this.page.locator('.menu-toggle.fullscreen-toggle')
  readonly aboutUsMenuItem = this.page.getByText('About Us').nth(1)

  constructor(page: Page) {
    super(page)
    this.url = baseUrl
  }

  async returnAboutUsPage(): Promise<AboutUsPage> {
    await this.clickButton(this.aboutUsMenuItem)
    return new AboutUsPage(this.page)
  }
}
