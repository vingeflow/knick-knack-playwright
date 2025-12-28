import { Page } from '@playwright/test'
import { BasePage } from './base-page'
import { baseUrl } from '../config/config'
import { url } from '../constants/routes'
import { CheckOutPage } from './check-out-page'

export class CartPage extends BasePage {
  readonly blockOverlay = this.page.locator('.blockUI.blockOverlay').first()
  readonly checkOutBtn = this.page.getByText('Proceed to checkout')

  constructor(page: Page) {
    super(page)
    this.url = `${baseUrl}${url.strict.cart}`
  }

  async returnCheckOutPage(): Promise<CheckOutPage> {
    await this.clickButton(this.checkOutBtn)
    return new CheckOutPage(this.page)
  }
}
