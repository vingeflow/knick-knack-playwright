import { test } from '../main-page/main-page.fixture'

test.describe('Check out tests', () => {
  test(
    'Check out the full flow',
    { tag: '@notForIOS' },
    async ({ mainPage }) => {
      const productPage = await mainPage.returnProductPage()

      await productPage.addToCart()
      const cartPage = await productPage.returnCartPage()

      const checkOutPage = await cartPage.returnCheckOutPage()

      await checkOutPage.fillEstoniaBillingData()
      await checkOutPage.selectPickUp()
      await checkOutPage.selectBankAndVerify()
      await checkOutPage.clickButton(checkOutPage.terms)
    }
  )
})
