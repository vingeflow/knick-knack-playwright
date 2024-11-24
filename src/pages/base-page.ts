import { Locator, Page, test } from '@playwright/test'

export abstract class BasePage {
  public page: Page
  protected url: string = ''

  constructor(page: Page) {
    this.page = page
  }

  public async open(directUrl = this.url): Promise<void> {
    await test.step(`Opening the url "${directUrl}"`, async () => {
      await this.page.goto(directUrl)
    })
  }

  public async clickButton(element: Locator): Promise<void> {
    await test.step(`Click button: ${element}`, async () => {
      await element.click()
    })
  }
}
