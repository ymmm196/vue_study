const express = require('express');

const Router = express.Router();

//引入每个模块的路由
const goodsRouter = require('./goods');
const usersRouter = require('./users');

//解析req的请求
Router.use(express.urlencoded(), express.json());
Router.use('/goods', goodsRouter);
Router.use('/users', usersRouter);

module.exports = Router;