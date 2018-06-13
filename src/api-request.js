export default async formattedBody => {
  const res = await fetch('https://apistest.escaladesports.com/v1/cart', {
    method: 'POST',
    body: JSON.stringify(formattedBody)
  })
    .then(res => res.json())
    .catch(err => {
      return { errors: err }
    })

  if (res) {
    const { cart } = res
    let updated = {}
    // remove this prop before production
    updated.res = res
    // remove this prop before production
    updated.formattedBody = formattedBody
    updated.success = res.success
    updated.cartId = cart.cart_id
    updated.delivery = cart.delivery
    updated.billing = cart.billing
    updated.locations = cart.locations
    updated.tax = 0
    updated.shipping = 0
    updated.total = 0

    // Get shipping options for all locations, return array of options
    if (cart.shipping && cart.shipping.locations) {
      updated.shippingOptions = {}
      Object.keys(cart.shipping.locations).forEach(k => {
        const { products, options, type, selected } = cart.shipping.locations[k]
        if (k === 'combined') return
        updated.shippingOptions = {
          ...updated.shippingOptions,
          [k]:
            type === 'free'
              ? {
                  options: options,
                  products: Array.isArray(products)
                    ? products.map(product => {
                        return { id: product.toLowerCase() }
                      })
                    : Object.keys(products).map(product => {
                        return { id: products[product].toLowerCase() }
                      }),
                  selected: selected ? selected : null,
                  type: type
                }
              : {
                  options: options,
                  products: products.map(productId => {
                    return {
                      id: productId.toLowerCase()
                    }
                  }),
                  selected: selected ? selected : null,
                  type: type
                }
        }
      })
    } else {
      updated.shippingOptions = {}
    }

    // List through products and grab only wanted values
    updated.products = cart.products
      ? Object.keys(cart.products.list).map(k => {
          return {
            id: cart.products.list[k].sku.toLowerCase(),
            qty: cart.products.list[k].qty,
            price: cart.products.list[k].price.raw
          }
        })
      : []

    // Tax, Shipping, Total
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

    // Set errors to an array of error messages
    if (cart.errors) {
      updated.errors = cart.errors.map(err => err.message)
    } else {
      updated.errors = []
    }

    return updated
  }
}
