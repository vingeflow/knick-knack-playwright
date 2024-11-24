import { Page } from '@playwright/test'
import { BasePage } from './base-page'
import { baseUrl } from '../config/config'

export class MainPage extends BasePage {
  readonly polymerCategory = this.page.locator('a.cat-polymer-clay')
  readonly silverCategory = this.page.locator('a.cat-silver')

  constructor(page: Page) {
    super(page)
    this.url = baseUrl
  }
}
