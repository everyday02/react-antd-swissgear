import nprogress from 'nprogress';
import { message } from 'antd';
import 'whatwg-fetch';

// 默认错误处理函数。
function autoErrorHandler(err) {
  if (err.response) {
    parseContentType(err.response).then((data) => {
      if (data.msg) message.error(data.msg);
      else message.error(err.message);
    });
  } else {
    message.error(err.message);
  }
  throw err;
}

// 断网状态下，不会走此函数
function checkStatus(response) {
  nprogress.done(true);
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
  const error = new Error(response.statusText);
  error.response = response;
  throw error;
}

function parseContentType(response) {
  const contentType = response.headers.get('content-type');
  if (contentType && contentType.indexOf('application/json') !== -1) {
    return response.json();
  }
  return response.text();
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

  nprogress.inc(0.2); // 页面顶部进度条
  return fetch(`${requestUrl}${queries}`, { ...config, method })
    .then(checkStatus)
    .then(parseContentType)
    .catch((err) => {
      nprogress.done(true);
      throw err;
    });
};

export { autoErrorHandler };
