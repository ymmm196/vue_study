
# http 模块

- 要使用HTTP服务器和客户端，必须require('http')
- HTTP 消息头由如下对象表示：
    ***



        {   'content-length': '123',
            'content-type': 'text/plain',
            'connection': 'keep-alive',
            'host': 'mysite.com',
            'accept': '*/*' }
    ***

- 注：Node.js的HTTP api 仅处理流消息和消息解析，将消息解析为消息头和消息主体，但不会解析具体的消息头或消息主体

## http.creatServer([options][,requestlistener])

- options
- 返回新建的 http.Server 实例。
- requestListener 是一个自动添加到 'request' 事件的函数。
- get
    ***
        //创建一个服务器
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
    ***

- post
    ***
            //post请求是特殊请求，是流的形式
        const server = http.createServer((req, res) => {
            //设置请求头，体和响应头，体
            //设置一个空容器监听请求流
            req.on('datSa', (chunk) => {
                body += chunk
        });
            req.on('end', () => {
                console.log(body);
                writeFileSync('./db.txt', body);
            });
            res.write('success');
            res.end();
        }).listen(8888);
    ***

