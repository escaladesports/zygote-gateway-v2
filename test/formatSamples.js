const shippingBody = {
  cartId: '',
  addressSame: true,
  couponCode: '',
  products: [
    {
      desc: 'Table tennis paddle.',
      id: 'B1002',
      image: 'https://pingpong.com/img/product/t1265-0-s.jpg?1496431075',
      name: 'Item One',
      price: '139.95',
      qty: 1,
      url: 'https://pingpong.comproduct/t1265'
    }
  ],
  shippingAddress: '949 Tulip Ave',
  shippingApt: 'wer',
  shippingCity: 'Evansville',
  shippingCompanyName: 'wer',
  shippingEmail: 'test@test.com',
  shippingFirst: 'Taylor',
  shippingLast: 'Austin',
  shippingPhone: '812 319 4206',
  shippingState: 'IN',
  shippingZip: '47711',
  site: 'goalrilla'
}

const shipOptionBody = {
  shippingEmail: 'test@test.com',
  shippingPhone: '812 319 4206',
  shippingApt: 'wer',
  shippingCompanyName: 'wer',
  shippingAddress: '949 Tulip Ave',
  shippingCity: 'Evansville',
  shippingState: 'IN',
  shippingZip: '47711',
  shippingFirst: 'Taylor',
  shippingLast: 'Austin',
  site: 'goalrilla',
  products: [
    {
      desc: 'Table tennis paddle.',
      id: 'B1002',
      image: 'https://pingpong.com/img/product/t1265-0-s.jpg?1496431075',
      name: 'Item One',
      price: '139.95',
      qty: 1,
      url: 'https://pingpong.comproduct/t1265'
    }
  ],
  couponCode: '',
  addressSame: true,
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
  setShip: { evansville: 0 },
  success: 1,
  cartId: 'OFFLbHR6QitURWlKbDFLL3RQYjI3QT09TVRVeU9UVXdNak0xTWk0eQ',
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
  }
}

const paymentBody = {
  shippingEmail: 'test@test.com',
  shippingPhone: '812 319 4206',
  shippingApt: 'wer',
  shippingCompanyName: 'wer',
  shippingAddress: '949 Tulip Ave',
  shippingCity: 'Evansville',
  shippingState: 'IN',
  shippingZip: '47711',
  shippingFirst: 'Taylor',
  shippingLast: 'Austin',
  site: 'goalrilla',
  products: [
    {
      desc: 'Table tennis paddle.',
      id: 'B1002',
      image: 'https://pingpong.com/img/product/t1265-0-s.jpg?1496431075',
      name: 'Item One',
      price: '139.95',
      qty: 1,
      url: 'https://pingpong.comproduct/t1265'
    }
  ],
  couponCode: '',
  addressSame: true,
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
  setShip: { evansville: 0 },
  success: 1,
  cartId: 'OFFLbHR6QitURWlKbDFLL3RQYjI3QT09TVRVeU9UVXdNak0xTWk0eQ',
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
  billingNumber: '370000000000002',
  billingSecurity: '1234',
  billingExpiration: '09/19'
}

const formattedShip = {
  site: 'goalrilla',
  cart_id: '',
  products: { B1002: { sku: 'B1002', qty: 1 } },
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
  billing: 'delivery',
  getshipquotes: 1
}

const formattedShipOption = {
  site: 'goalrilla',
  cart_id: 'OFFLbHR6QitURWlKbDFLL3RQYjI3QT09TVRVeU9UVXdNak0xTWk0eQ',
  setship: { evansville: 0 }
}

const formattedPayment = {
  site: 'goalrilla',
  cart_id: 'OFFLbHR6QitURWlKbDFLL3RQYjI3QT09TVRVeU9UVXdNak0xTWk0eQ',
  payment:
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjYyI6eyJudW1iZXIiOiIzNzAwMDAwMDAwMDAwMDIiLCJleHBpcmUiOnsibW9udGgiOiIwOSIsInllYXIiOiIyMDE5In0sImNvZGUiOiIxMjM0In0sImlhdCI6MTUyOTUwNDMyOH0.ijfrRcCIZXNmFAFE5GoILvq_p7nw628YcTBGIi7F7KQ'
}

export {
  shippingBody,
  shipOptionBody,
  paymentBody,
  formattedShip,
  formattedShipOption,
  formattedPayment
}
