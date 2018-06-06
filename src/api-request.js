export default async formattedBody => {
  const res = await fetch(
    'https://apistest.escaladesports.com/v1/shipping/quote',
    {
      method: 'POST',
      body: JSON.stringify(formattedBody)
    }
  )
    .then(res => res.json())
    .catch(err => {
      return err;
    });
  if (res) {
    return res;
  }
};
