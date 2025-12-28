import { faker } from '@faker-js/faker'

export const fakeEstonianMobile = (): string =>
  `5${faker.number.int({ min: 1000000, max: 99999999 })}`
