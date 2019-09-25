const express = require('express');

const app = express();

// 静态资源服务器
app.use(express.static('./'));

// 引入json
let {
    PORT
} = require('./config.json');

// 引入所有路由

let allRouter = require('./routers/index');

// 使用路由
app.use(allRouter);

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
})