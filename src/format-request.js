export default body => {
  let updated = {};
  let products = {};
  body.products.forEach(product => {
    products[product.id] = {
      sku: product.id,
      qty: product.qty
    };
  });
  updated.site = body.site;
  updated.cart_id = body.cartId || '';
  updated.products = products;
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
  };
  updated.billing = 'delivery';
  return updated;
};
