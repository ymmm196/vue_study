var fs = require('fs');

console.log('读取源文件的内容')
fs.readFile('input.txt', function (err, data2) {
    if (err) {
        return console.log(err)
    }
    console.log("异步读取的原文件数据： " + data2.toString())
})
console.log('准备写入文件！');
data = '我是新写入的内容........'
fs.writeFile('input.txt', data, function (err) {
    if (err) console.log(err)
    console.log('数据写入成功')
    console.log('--------分割线--------')
    console.log('读取写入的数据')
    fs.readFile('input.txt', function (err, data1) {
        if (err) {
            return console.log(err)
        }
        console.log("异步读取的文件数据： " + data1.toString())
    })
})