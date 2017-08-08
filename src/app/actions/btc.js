// 云币网
const list = (offset = 1, psize = 10) => (dispatch, getState, api) =>
  fetch('https://yunbi.com/api/v2/tickers.json',
    { mode: 'no-cors' }).then((response) => response.json());

export default {
  list
};
