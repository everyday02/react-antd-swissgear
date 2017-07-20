import NProgress from 'nprogress'

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  const error = new Error(response.statusText);
  error.response = response;
  return response.json().then((errorMessage) => Promise.reject(errorMessage));
}

export default (
    endpoint,
    method = 'GET',
    body = {},
    config = { mode: 'cors', headers: { Accept: 'application/json', 'Content-Type': 'application/json' } }
  ) => {
  const requestUrl = `http://localhost:3000/api${endpoint}`;
  let queries = '';

  if (['post', 'put'].indexOf(method.toLowerCase()) > -1) {
    config.body = JSON.stringify(body);
  } else if (Object.keys(body).length) {
    queries = Object.keys(body).map((key) => `?${encodeURIComponent(key)}=${encodeURIComponent(body[key])}`).join('&');
  }
  NProgress.inc(0.2);
  return fetch(`${requestUrl}${queries}`, config)
    .then(checkStatus)
    .then((response) => response.json().then((json) => ({ json, response })))
    .then(({ json, response }) => {
      NProgress.done(true);
      if (!response.ok) {
        return Promise.reject(json);
      }
      return json;
    })
    .catch((err) => () => {
      NProgress.done(true);
      return Promise.reject(err);
    });
};
