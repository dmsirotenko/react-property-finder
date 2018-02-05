function urlForQueryAndPage (key, value, page) {
  let data = {
      country: 'uk',
      pretty: '1',
      encoding: 'json',
      listing_type: 'buy',
      action: 'search_listings',
      page: page
  };

  data[key] = value;

  let query = Object.keys(data).map(key => `${key}=${encodeURIComponent(data[key])}`).join('&');

  return `https://api.nestoria.co.uk/api?${query}`
}

export {urlForQueryAndPage}
