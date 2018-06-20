import jwt from 'jsonwebtoken'
import md5 from 'md5'

export default body => {
  let updated = {}
  let products = {}
  body.products.forEach(product => {
    products[product.id] = {
      sku: product.id,
      qty: product.qty
    }
  })
  updated.site = body.site
  updated.cart_id = body.cartId || ''
  updated.products = products
  updated.delivery = {
    first_name: body.shippingFirst,
    last_name: body.shippingLast,
    street1: body.shippingAddress,
    city: body.shippingCity,
    state: body.shippingState,
    zip: body.shippingZip,
    country: body.shippingCountry || 'US',
    phone: body.shippingPhone,
    email: body.shippingEmail
  }
  updated.billing = 'delivery'

  updated.getshipquotes = 1
  if (body.setShip) {
    let updatedsetship = {}
    Object.keys(body.setShip).forEach(k => {
      updatedsetship = { ...updatedsetship, [k]: body.setShip[k] }
    })
    updated.setship = updatedsetship
    delete updated['getshipquotes']
    delete updated['billing']
    delete updated['delivery']
    delete updated['products']
  }

  if (body.billingNumber || body.billingSecurity || body.billingExpiration) {
    const currentYear = new Date()
      .getFullYear()
      .toString()
      .slice(0, 2)
    const splitExpiration = body.billingExpiration.split('/')
    const month = splitExpiration[0]
    const year = currentYear + splitExpiration[1]

    let paymentObj = {
      cc: {
        number: body.billingNumber,
        expire: {
          month: month,
          year: year
        },
        code: body.billingSecurity
      }
    }

    updated.payment = jwt.sign(paymentObj, md5(updated.site))
    delete updated['setship']
  }

  if (!body.addressSame) {
    updated.billing = {
      first_name: body.shippingFirst,
      last_name: body.shippingLast,
      street1: body.billingAddress,
      city: body.billingCity,
      state: body.billingState,
      zip: body.billingZip,
      country: body.billingCountry || 'US',
      phone: body.shippingPhone,
      email: body.shippingEmail
    }
  }

  return updated
}
