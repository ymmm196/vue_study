const express = require('express');

const app = express();

// 使用express中间件
// 静态资源服务器中间件
let mw = express.static('./');
app.use(mw);

/*
    app.use 不带path，所有的访问都能进入，一般不会用use来写数据接口
*/
// app.use(function (req, res, next) {
//     console.log('ym')
// })
// 获取商品数据
app.get('/goods', (req, res) => {
    res.send([{
        name: 'iphone',
        price: '5999'
    }])
})

// 获取单个商品
app.get('/goods/:id', (req, res) => {
    let id = req.params.id;
    res.send([{
        id,
        name: 'iphone',
        price: '5999'
    }])
})

//post 增加商品
app.post('/goods', (req, res) => {
    res.send([{
        name: 'sony',
        price: '4999'
    }])
})

// delete 删除商品
app.delete('/goods', (req, res) => {
    res.send('删除商品成功')
})

// patch/put  修改商品
app.patch('/goods', (req, res) => {
    res.send('修改商品成功')
})


// 监听端口(2^16)
app.listen(1907, () => {
    console.log('服务器启动成功...')
})