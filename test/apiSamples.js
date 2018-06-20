const shipResponse = {
  errors: [],
  success: 1,
  cartId: 'TG5sMnRVRm9VWUU3dS8vQ2dRMjg1Zz09TVRVeU9UVXdOelk0T0M0eA',
  delivery: {
    first_name: 'Taylor',
    last_name: 'Austin',
    street1: '949 Tulip Ave',
    city: 'Evansville',
    state: 'IN',
    zip: '47711',
    country: 'US',
    phone: '812 319 4206',
    email: 'test@test.com'
  },
  billing: {
    first_name: 'Taylor',
    last_name: 'Austin',
    street1: '949 Tulip Ave',
    city: 'Evansville',
    state: 'IN',
    zip: '47711',
    country: 'US',
    phone: '812 319 4206',
    email: 'test@test.com'
  },
  locations: {
    evansville: {
      products: ['B1002'],
      type: 'ups',
      shipping: { label: 'UPS Ground', raw: '11.67', value: '$11.67' },
      subtotal: { label: 'Subtotal', raw: 139.95, value: '$139.95' },
      total: { label: 'Total', raw: 162.23, due: 162.23, value: '$162.23' },
      tax: { label: 'Indiana Sales Tax', raw: '10.61', value: '$10.61' }
    },
    combined: {
      subtotal: { label: 'Total', raw: 139.95, value: '$139.95' },
      total: { label: 'Total', raw: 162.23, due: 162.23, value: '$162.23' }
    }
  },
  tax: 10.61,
  shipping: 11.67,
  total: 162.23,
  shippingOptions: {
    evansville: {
      options: [
        { amount: '11.67', name: 'UPS Ground' },
        { amount: '18.61', name: 'UPS 2nd Day Air' },
        { amount: '19.19', name: 'UPS Sure Post' },
        { amount: '23.09', name: 'UPS Next Day Air' }
      ],
      products: [{ id: 'b1002' }],
      selected: null,
      type: 'ups'
    }
  },
  products: [{ id: 'b1002', qty: 1, price: '139.95' }]
}
const shipOptionResponse = {
  errors: [],
  success: 1,
  cartId: 'TG5sMnRVRm9VWUU3dS8vQ2dRMjg1Zz09TVRVeU9UVXdOelk0T0M0eA',
  delivery: {
    first_name: 'Taylor',
    last_name: 'Austin',
    street1: '949 Tulip Ave',
    city: 'Evansville',
    state: 'IN',
    zip: '47711',
    country: 'US',
    phone: '812 319 4206',
    email: 'test@test.com'
  },
  billing: {
    first_name: 'Taylor',
    last_name: 'Austin',
    street1: '949 Tulip Ave',
    city: 'Evansville',
    state: 'IN',
    zip: '47711',
    country: 'US',
    phone: '812 319 4206',
    email: 'test@test.com'
  },
  locations: {
    evansville: {
      products: ['B1002'],
      type: 'ups',
      shipping: { label: 'UPS Next Day Air', raw: '23.09', value: '$23.09' },
      subtotal: { label: 'Subtotal', raw: 139.95, value: '$139.95' },
      total: { label: 'Total', raw: 174.45, due: 174.45, value: '$174.45' },
      tax: { label: 'Indiana Sales Tax', raw: '11.41', value: '$11.41' }
    },
    combined: {
      subtotal: { label: 'Total', raw: 139.95, value: '$139.95' },
      total: { label: 'Total', raw: 174.45, due: 174.45, value: '$174.45' }
    }
  },
  tax: 11.41,
  shipping: 23.09,
  total: 174.45,
  shippingOptions: {
    evansville: {
      options: [
        { amount: '11.67', name: 'UPS Ground' },
        { amount: '18.61', name: 'UPS 2nd Day Air' },
        { amount: '19.19', name: 'UPS Sure Post' },
        { amount: '23.09', name: 'UPS Next Day Air' }
      ],
      products: [{ id: 'b1002' }],
      selected: '3',
      type: 'ups'
    }
  },
  products: [{ id: 'b1002', qty: 1, price: '139.95' }]
}
const paymentResponse = {
  errors: [],
  success: 1,
  cartId: 'TG5sMnRVRm9VWUU3dS8vQ2dRMjg1Zz09TVRVeU9UVXdOelk0T0M0eA',
  delivery: {
    first_name: 'Taylor',
    last_name: 'Austin',
    street1: '949 Tulip Ave',
    city: 'Evansville',
    state: 'IN',
    zip: '47711',
    country: 'US',
    phone: '812 319 4206',
    email: 'test@test.com'
  },
  billing: {
    first_name: 'Taylor',
    last_name: 'Austin',
    street1: '949 Tulip Ave',
    city: 'Evansville',
    state: 'IN',
    zip: '47711',
    country: 'US',
    phone: '812 319 4206',
    email: 'test@test.com'
  },
  locations: {
    evansville: {
      products: ['B1002'],
      type: 'ups',
      shipping: { label: 'UPS Next Day Air', raw: '23.09', value: '$23.09' },
      subtotal: { label: 'Subtotal', raw: 139.95, value: '$139.95' },
      total: { label: 'Total', raw: 174.45, due: 0, value: '$174.45' },
      tax: {
        label: 'Indiana Sales Tax',
        raw: '11.41',
        value: '$11.41',
        rate: '7',
        state: 'IN',
        tid: '3'
      },
      payment: {
        authnet: {
          due: 0,
          method: 'direct',
          success: 1,
          trans_code: '40015168708',
          amount: 174.45,
          authorized: 1,
          captured: 1
        }
      }
    },
    combined: {
      subtotal: { label: 'Total', raw: 139.95, value: '$139.95' },
      total: { label: 'Total', raw: 174.45, due: 174.45, value: '$174.45' }
    }
  },
  tax: 11.41,
  shipping: 23.09,
  total: 174.45,
  shippingOptions: {
    evansville: {
      options: [
        { amount: '11.67', name: 'UPS Ground' },
        { amount: '18.61', name: 'UPS 2nd Day Air' },
        { amount: '19.19', name: 'UPS Sure Post' },
        { amount: '23.09', name: 'UPS Next Day Air' }
      ],
      products: [{ id: 'b1002' }],
      selected: '3',
      type: 'ups'
    }
  },
  products: [{ id: 'b1002', qty: 1, price: '139.95' }]
}

export { shipResponse, shipOptionResponse, paymentResponse }
