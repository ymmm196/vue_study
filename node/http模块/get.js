const http = require('http');
const {
    writeFileSync
} = require('fs');

//创建一个http服务器
// req 前端->后端 请求：请求头 请求体
//res 后端->前端 响应：响应头 响应体

const server = http.createServer((req, res) => {
    writeFileSync('./db.txt', req.url);
    console.log(req.url);
    //让响应头带上‘Access-Control-Allow-Origin’表示允许跨域
    //响应头
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.writeHead(200, {
        'Content-Type': 'text/plain',
        //设置缓存时间
        'cache-control': 'max-age=60'
    });
    //响应体
    res.write('hello world');
    res.end();
}).listen(8888);