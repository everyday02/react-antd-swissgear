import _ from 'lodash';

/*
  @param {name: '张三', age: 32}
  @return {name: {value: '张三'}, age: {value: 32} }
**/
function recordTransformFormData(record) {
  const formData = {};
  _.forEach(record, (n, key) => {
    formData[key] = { value: n };
  });
  // console.info(formData);
  return formData;
}

export {
  recordTransformFormData
};
