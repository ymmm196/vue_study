const express = require('express');

const Router = express.Router();

Router.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,PATCH,POST,GET,DELETE,OPTIONS");

    // 跨域请求CORS中的预请求
    if (req.method == "OPTIONS") {
        res.sendStatus(200); /*让options请求快速返回*/
    } else {
        next();
    }
})
//引入每个模块的路由
const goodsRouter = require('./goods');
const usersRouter = require('./users');

//解析req的请求
Router.use(express.urlencoded(), express.json());
Router.use('/goods', goodsRouter);
Router.use('/users', usersRouter);

module.exports = Router;