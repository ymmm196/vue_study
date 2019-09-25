const express = require('express');

const Router = express.Router();

const {
    mysql: query
} = require('../db');

// Router.get('/', (req, res) => {
//     // res.send('连接成功')
//     pool.query(`select * from goods`, (error, results, fields) => {
//         // console.log(results);
//         res.send(results);
//     })
// });
/*
    商品数据的：CRUD
        * 增：C（Create）
        * 删：D（Delete）
        * 改：U（Update）
        * 查：R（Retrieve）
*/


Router.route('/')
    //获取所有商品数据
    .get(async (req, res) => {
        let sql = `select * from goods`;
        let results = await query(sql);
        res.send(results);
    })
    .post(async (req, res) => {

    })


Router.route('/:id')
    // 获取单个商品数据
    .get(async (req, res) => {
        let {
            id
        } = req.params;
        let sql = `select * from goods where id=${id}`;
        let results = await query(sql);
        res.send(results);
    })
    // 删除商品
    .delete(async (req, res) => {
        let {
            id
        } = req.params;
        let sql = `delete from goods where id=${id}`;
        let results = await query(sql);
        res.send(results);
    })
    // 修改商品数据
    .patch(async (req, res) => {
        let {
            id
        } = req.params;
        // console.log(id);
        // console.log(req.body);
        let sql = `update goods set `;
        for (key in req.body) {
            sql += key + '=' + req.body[key] + ',';
        };
        sql = sql.slice(0, -1);
        sql += ` where id=${id}`;
        let results = await query(sql);
        res.send(results);
    })
module.exports = Router;