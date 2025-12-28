import { expect, Page } from '@playwright/test'
import { BasePage } from './base-page'
import { baseUrl } from '../config/config'
import { url } from '../constants/routes'
import { faker } from '@faker-js/faker'
import { fakeEstonianMobile } from '../utils/test-data'

export class CheckOutPage extends BasePage {
  readonly firstNameInput = this.page.locator('#billing_first_name')
  readonly lastNameInput = this.page.locator('#billing_last_name')
  readonly streetInput = this.page.locator('#billing_address_1')
  readonly postCodeInput = this.page.locator('#billing_postcode')
  readonly cityInput = this.page.locator('#billing_city')
  readonly phoneInput = this.page.locator('#billing_phone')
  readonly emailInput = this.page.locator('#billing_email')
  readonly countryDropdown = this.page.locator('.select2-selection--single')
  readonly countryEstoniaOption = this.page.locator(
    '.select2-results__option',
    {
      hasText: 'Estonia',
    }
  )
  readonly pickUpDropdown = this.page.locator('.choices')
  readonly pickUpOption = this.page.locator('.choices__item--choice', {
    hasText: 'Kakumäe Selveri',
  })
  readonly swedbank = this.page.locator('[data-bank="HABAEE2X"]')
  readonly terms = this.page.locator('#terms')
  readonly checkOutBtn = this.page.getByText('Place order')
  readonly blockOverlay = this.page.locator('.blockUI.blockOverlay').first()

  constructor(page: Page) {
    super(page)
    this.url = `${baseUrl}${url.strict.checkOut}`
  }

  async fillEstoniaBillingData() {
    await this.firstNameInput.fill(faker.person.firstName())
    await this.lastNameInput.fill(faker.person.lastName())
    await this.clickButton(this.countryDropdown)
    await this.clickButton(this.countryEstoniaOption)
    await this.streetInput.fill(faker.location.street())
    await this.postCodeInput.fill(faker.location.zipCode('#####'))
    await this.cityInput.fill(faker.location.city())
    await this.phoneInput.fill(fakeEstonianMobile())
    await this.emailInput.fill(faker.internet.email())
  }

  async selectPickUp() {
    await this.blockOverlay.waitFor({ state: 'hidden' })

    await this.pickUpDropdown.waitFor({ state: 'visible' })
    await this.pickUpDropdown.click()

    await this.pickUpOption.waitFor({ state: 'visible' })
    await this.pickUpOption.click()
  }

  async selectBankAndVerify() {
    await this.blockOverlay.waitFor({ state: 'hidden' })

    await this.swedbank.click()

    await expect.soft(this.swedbank).toHaveClass(/active/)

    await expect
      .soft(this.swedbank)
      .toHaveCSS('border-color', 'rgb(69, 55, 205)')
  }
}
