import fetch from 'isomorphic-fetch'

export default async formattedBody => {
  // console.log(JSON.stringify(formattedBody))
  let updated = {}
  updated.errors = []
  let res
  try {
    res = await fetch('https://apistest.escaladesports.com/v1/cart', {
      method: 'POST',
      body: JSON.stringify(formattedBody)
    }).then(res => res.json())
  } catch (e) {
    res = null
  }

  if (res) {
    const { cart } = res
    updated.success = res.success
    updated.cartId = cart.cart_id
    updated.delivery = cart.delivery
    updated.billing = cart.billing
    updated.locations = cart.locations
    updated.tax = 0
    updated.shipping = 0
    updated.total = 0

    // Get shipping options for all locations, return array of options
    if (cart.shipping && cart.shipping.locations && !cart.shipping.errors) {
      updated.shippingOptions = {}
      if (Object.keys(cart.shipping.locations).length == 0) {
        updated.shippingOptions = null
        return
      }
      Object.keys(cart.shipping.locations).forEach(k => {
        const { products, options, type, selected } = cart.shipping.locations[k]

        if (k === 'combined') return
        updated.shippingOptions = {
          ...updated.shippingOptions,
          [k]: {
            options: options,
            products: Array.isArray(products)
              ? products.map(product => {
                  return { id: product.toLowerCase() }
                })
              : Object.keys(products).map(product => {
                  return { id: products[product].sku.toLowerCase() }
                }),
            selected: selected ? selected : null,
            type: type
          }
        }
      })
    } else if (cart.shipping.errors) {
      updated.errors = [...updated.errors, 'Error with shipping options']
    } else {
      updated.shippingOptions = {}
    }

    // List through products and grab only wanted values
    updated.products = cart.products
      ? cart.products.list
        ? Object.keys(cart.products.list).map(k => {
            return {
              id: cart.products.list[k].sku.toLowerCase(),
              qty: cart.products.list[k].qty,
              price: cart.products.list[k].price.raw
            }
          })
        : []
      : []

    // Tax, Shipping, Total
    try {
      if (cart.line_items) {
        Object.keys(cart.line_items).forEach(k => {
          if (k === 'combined') {
            return
          }
          const { tax, shipping, total } = cart.line_items[k]
          if (tax) {
            updated.tax += Number(tax.raw)
          }
          if (shipping) {
            updated.shipping += Number(shipping.raw)
          }
          if (total) {
            updated.total += Number(total.raw)
          }
        })
      }
    } catch (e) {
      console.log('ERROR --> ', e)
      updated.errors = [...updated.errors, e]
    }

    // Set errors to an array of error messages
    if (cart.errors) {
      const errMessages = cart.errors.map(err => err.message)
      updated.errors = [...updated.errors, ...errMessages]
    } else {
      updated.errors = []
    }

    return updated
  } else {
    return { errors: ['No response from the server'] }
  }
}
