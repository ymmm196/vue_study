const express = require('express');
const Router = express.Router();

const {
    mongo
} = require('../db');
const {
    formatData,
    token
} = require('../utils');
/**
 * 用户CRUD
 * 增：C（Create）
 * 删：D（Delete）
 * 改：U（Update）
 * 查：R（Retrieve）
 */


//注册
Router.post('/reg', async (req, res) => {
    let {
        username,
        password
    } = req.body;
    console.log(req.body);
    let result = await mongo.create('user', [{
        username,
        password,
        regtime: Date.now()
    }]);

    res.send(result);
})

//登录
Router.get('/login', async (req, res) => {
    let {
        username,
        password,
        mdl
    } = req.query;
    let result = await mongo.find('user', {
        username,
        password
    });
    if (result.length > 0) {
        // 如用户需要免登陆操作，则生成一个token并返回给前端
        let Authorization
        if (mdl) {
            Authorization = token.create(username)
        }
        res.send(formatData({
            data: Authorization
        }));
    } else {
        res.send(formatData({
            code: 0
        }))
    }
})

Router.get('/check', async (req, res) => {
    let {
        username
    } = req.query;
    console.log(req.query);
    let result = await mongo.find('user', {
        username
    });
    if (result.length) {
        res.send(formatData({
            code: 0
        }))
    } else {
        res.send(formatData());
    }

});

module.exports = Router;