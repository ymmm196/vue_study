const SocketServer = require('ws').Server;

const express = require('express');
let wss = new SocketServer({
    port: 2345
});
console.log('web服务器连接成功')