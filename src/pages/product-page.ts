import { expect, Page } from '@playwright/test'
import { BasePage } from './base-page'
import { CartPage } from './cart-page'

export class ProductPage extends BasePage {
  readonly addToBasketBtn = this.page.getByText('Add to basket').first()
  readonly cart = this.page.getByRole('link', { name: 'Cart' }).first()
  readonly cartCounter = this.page.locator('.minicart-counter').first()

  constructor(page: Page) {
    super(page)
  }

  async addToCart() {
    await Promise.all([
      this.page.waitForResponse(/wc-ajax=get_refreshed_fragments/),
      this.addToBasketBtn.click(),
    ])

    await expect(this.cartCounter).not.toHaveText('0')
  }

  async returnCartPage(): Promise<CartPage> {
    await this.cart.click()
    return new CartPage(this.page)
  }
}
