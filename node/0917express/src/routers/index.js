const express = require('express');

const Router = express.Router();

const goodsRouter = require('./goods');

Router.use('/goods', goodsRouter);

Router.get('/jsonp', (req, res) => {
    // 获取回调函数名
    let {
        callback
    } = req.query; //getData

    // 读取数据库
    let person = {
        username: 'laoxie',
        password: 123456,
        gender: 'male'
    }

    // jsonp请求后端必须拼接js代码
    res.send(`${callback}(${JSON.stringify(person)})`); //getData(123)
})

Router.post('/jsonp', (req, res) => {
    // 读取数据库
    let person = {
        username: 'laoxie',
        password: 123456,
        gender: 'male'
    }
    res.send(`${JSON.stringify(person)}`);
})
module.exports = Router;