const Mock = require('mockjs');

const list = Mock.mock({
  // 生成一个数组，其中含有 1 到 100 个元素
  'data|15-100': [
    {
      'id|+1': () => Mock.Random.id(), // 属性 id 是一个自增数，起始值为 1，每次增 1
      'name|+1': () => Mock.Random.cname(), // 随机生成一个中文名
      'ip|+1': () => Mock.Random.ip(),
      'city|+1': () => Mock.Random.city(),
      'email|+1': () => Mock.mock('@email')
    }
  ]
});

module.exports = {
  list
};
