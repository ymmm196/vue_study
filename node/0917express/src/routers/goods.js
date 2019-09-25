const express = require('express');

const Router = express.Router();

// 获取所有商品：/goods
Router.get('/', (req, res) => {
    res.send([{
        name: 'huawei p30 pro',
        price: 3999
    }, {
        name: 'huawei meta30 pro',
        price: 5999
    }])
})

// 获取单个商品：/goods/123
Router.get('/:id', (req, res) => {
    let id = req.params.id;
    // 通过id查询数据库

    res.send({
        id,
        name: 'huawei meta30 pro',
        price: 5999
    })
})

Router.post('/', (req, res) => {
    // 通过id查询数据库

    res.send('add success')
})

Router.delete('/:id', (req, res) => {
    let id = req.params.id;
    // 通过id查询数据库

    res.send('delete success')
})

Router.patch('/:id', (req, res) => {
    let id = req.params.id;
    // 通过id查询数据库

    res.send({
        id,
        name: 'huawei meta30 pro',
        price: 2999
    })
})


module.exports = Router;