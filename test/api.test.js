import apiRequest from '../src/api-request'
import {
  formattedShip,
  formattedShipOption,
  formattedPayment
} from './formatSamples'
import { shipResponse, shipOptionResponse, paymentResponse } from './apiSamples'

describe('Check to make sure request are being sent back correctly from api', () => {
  //shipping
  test('shippingRequest should have same props as response', async () => {
    const request = await apiRequest(formattedShip)
    const shipKeys = Object.keys(shipResponse)
    let objContain = {}
    shipKeys.forEach(k => {
      objContain[k] = expect.anything()
    })

    expect(request).toEqual(expect.objectContaining(objContain))
  })

  //ship options
  test('shipOptionRequest should have same props as response', async () => {
    const request = await apiRequest(formattedShipOption)
    const requestKeys = Object.keys(request)
    const shipOptionKeys = Object.keys(shipOptionResponse)

    expect(requestKeys).toEqual(shipOptionKeys)
  })

  //payment
  test('shipOptionRequest should have same props as response', async () => {
    const request = await apiRequest(formattedPayment)
    const requestKeys = Object.keys(request)
    const paymentKeys = Object.keys(paymentResponse)

    expect(requestKeys).toEqual(paymentKeys)
  })
})
