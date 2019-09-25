const express = require('express');
const request = require('request');
const cheerio = require('cheerio');
const fs = require('fs');
const path = require('path');

const Router = express.Router();

Router.get('/jiuxian', (req, res) => {
    request('http://list.jiuxian.com/1-2-0-0-0-0-0-0-0-0-0-0.htm?area=#v2', (err, response, body) => {
        let $ = cheerio.load(body);

        //遍历每个商品
        let goodslist = [];
        $('.proListSearch ul li').each((idx, li) => {
            let $li = $(li);
            let imgurl = $li.find('.img img').attr('src');
            //  提取文件名：
            let filename = path.basename(imgurl);

            let goods = {
                id: $li.attr('product-box'),
                imgurl: 'imgs/' + filename,
                name: $li.find('.proName').text(),
                price: $li.find('.price span').text(),
                comment: $li.find('.judge span').text()
            }
            goodslist.push(goods);

            //  文件流
            // 利用request与stream数据流保存爬取到的图片到本地硬盘
            request(imgurl).pipe(fs.createWriteStream('./imgs/' + filename))
        })
        // 请求价格
        // http://list.jiuxian.com/act/selectPriceAndClubPriceByProIds.htm?ids=
        let ids = goodslist.map(item => item.id).join();
        request('http://list.jiuxian.com/act/selectPriceAndClubPriceByProIds.htm?ids=' + ids, (err, r, body) => {
            console.log('style:', body)
            body = JSON.parse(body);
            goodslist = goodslist.map(item => {
                // 获取当前商品对应的价格
                let currentPrice = body.data.filter(goods => goods.productId == item.id)[0]
                item.price = currentPrice.price;
                item.clubPrice = currentPrice.clubPrice
                return item;
            });

            res.send(goodslist)
        })
    })
})

const app = express();

app.use(express.static('./'));

app.use(Router);
app.listen(1999);