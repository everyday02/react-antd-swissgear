const express = require('express');     // 引入express模块
const bodyParser = require('body-parser');
const app = express();                  // 实例化express
const http = require('http');

const user = require('./routes/user');

app.use(bodyParser.json());

// allow custom header and CORS
app.all('*', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
  next();
});

// 用户管理
app.get('/api/users', user.list);
app.put('/api/users/:userId', user.put);
app.delete('/api/users/:userId', user.del);

// 监听3000端口
http.createServer(app).listen(3000, () => {
  console.info('Express server listening on port 3000');
});
