
const pageHelper = (offset, psize, datas) => {
  const total = datas.length;
  const rows = [];
  const end = (offset * psize) > total ? total : (offset * psize);

  let start = (offset - 1) * psize;
  for (start; start < end; start += 1) rows.push(datas[start]);
  return rows;
};

module.exports = pageHelper;
