const express = require('express');
const {
    PORT
} = require('./config.json');
const allRouter = require('./routers/index');

const app = express();

//静态资源服务器
app.use(express.static('./'));

app.use(allRouter);

app.listen(PORT, () => {
    console.log(`服务器正运行在 ${PORT}`);
})