// https://yunbi.com/api/v2/tickers.json
const https = require('https');

const list = (request, response) => {
  const options = {
      hostname: 'yunbi.com',
      port: 443,
      path: '/api/v2/tickers.json',
      method: 'GET'
  };

  const req = https.request(options, (res) => {
    console.info('statusCode:', res.statusCode);
    console.info('headers:', res.headers);
    res.on('data', (d) => {
      process.stdout.write(d);
    });
  });

  req.on('error', (e) => {
    console.error(e);
  });
  req.end();
  // res.send({ status: 'success' });
};

module.exports = {
  list
};
