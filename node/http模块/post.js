const http = require('http');
const {
    writeFileSync
} = require('fs');
//post请求是特殊请求，是流的形式
const server = http.createServer((req, res) => {
    //设置请求头，体和响应头，体
    //设置一个空容器监听请求流
    req.on('data', (chunk) => {
        body += chunk
    });
    req.on('end', () => {
        console.log(body);
        writeFileSync('./db.txt', body);
    });
    res.write('success');
    res.end();
}).listen(8888);