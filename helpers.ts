export async function virginFetch<R>(
  url: string,
  method: 'POST' | 'GET',
  body: string,
): Promise<R> {
  const resp = await fetch(url, {
    method,
    referrer: 'https://mylocker.virginactive.com.au/',
    referrerPolicy: 'no-referrer-when-downgrade',
    credentials: 'omit',
    mode: 'cors',
    headers: {
      accept: 'application/json, text/plain, */*',
      'accept-language': 'en-AU,en-GB;q=0.9,en-US;q=0.8,en;q=0.7',
      'content-type': 'application/x-www-form-urlencoded',
      'sec-fetch-dest': 'empty',
      'sec-fetch-mode': 'cors',
      'sec-fetch-site': 'same-site',
      'x-mylocker-language': 'en-AU',
    },
    body,
  });

  // TODO: Make nicer
  if (!resp.ok) {
    throw Error('Error');
  }

  return resp.json();
}
