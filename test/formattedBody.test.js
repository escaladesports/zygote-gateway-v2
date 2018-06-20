import {
  shippingBody,
  shipOptionBody,
  paymentBody,
  formattedShip,
  formattedShipOption
} from './formatSamples'
import formatRequest from '../src/format-request'

describe('Check formatting of request from client', () => {
  test('shipppingFormat to be formatted', () => {
    expect(formatRequest(shippingBody)).toEqual(formattedShip)
  })

  test('shipOptionFormat to be formatted', () => {
    expect(formatRequest(shipOptionBody)).toEqual(formattedShipOption)
  })

  test('paymentFormat should be formatted', () => {
    expect(formatRequest(paymentBody)).toEqual(
      expect.objectContaining({
        cart_id: expect.any(String),
        payment: expect.any(String),
        site: expect.any(String)
      })
    )
  })
})
