console.log(1);

const fs = require('fs');
// console.log(fs);
//读取文件
//阻塞代码实例
var data = fs.readFileSync('test.txt');
console.log(data.toString());
console.log('程序执行结束');

console.log(2);
//非阻塞代码
fs.readFile('test.txt', function (err, data) {
    if (err) return console.error(err);
    console.log(data.toString());
});

console.log("程序执行结束!");