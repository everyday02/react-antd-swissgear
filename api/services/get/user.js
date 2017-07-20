const { list } = require('../../datas/user.js');

const pageHelper = require('../../libs/pageHelper.js');
const CONFIG = require('../../config.js');

const total = list.data.length;
const datas = list.data;

const users = {
  path: `${CONFIG.prefix}/users`,
  template: {
    datas: (body, params) => {
      const { offset, psize } = params;
      return pageHelper(offset, psize, datas);
    },
    total
  }
};

const updateUser = {
  path: `${CONFIG.prefix}/users/:userId`,
  template: (body, params) => {
    console.info(body);
    console.info(params);
    for (let start = 0; start < datas.length; start += 1) {
      // if (datas[start].id === 'id')  return null;
    }
    return { success: 'ok' };
  }
};

module.exports = [users, updateUser];
