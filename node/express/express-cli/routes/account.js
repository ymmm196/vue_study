var express = require('express');
// 创建路由对象
var router = express.Router();

/* GET users listing. */
//引入fs模块
var fs = require('fs');
var buf = new Buffer.alloc(1024); //数据写入的缓冲区

router.post('/login', function (req, res, next) {
    // console.log(req);
    let {
        username,
        password
    } = req.body;
    //登录的时候读取文件数据，将前端传过来的账号和密码进行对比
    fs.open('./user.txt', "r+", function (err, fd) {
        if (err) {
            return console.error(err);
        }
        fs.read(fd, buf, 0, buf.length, 0, function (err, bytes) {
            if (err) {
                console.log(err);
            }
            // 仅输出读取的字节
            if (bytes > 0) {
                // console.log(buf.slice(0, bytes).toString());
                let str = buf.slice(0, bytes).toString();
                str = str.substring(0, str.length - 1);
                let arr = str.split('\n');
                console.log(arr, arr.length);
                for (var i = 0; i < arr.length; i++) {
                    if (username + '&' + password === arr[i]) {
                        res.send({
                            status: 'success'
                        });
                    } else {
                        res.json({
                            status: 'failure'
                        })
                    }
                }
            }
        });
    })
});
router.post('/register', function (req, res, next) {
    let {
        username,
        password
    } = req.body;
    console.log(req.body);
    //注册的时候将前端传过来的账号和密码追加写入文件
    fs.open('./user.txt', "a+", function (err, fd) {
        if (err) {
            return console.error(err);
        }
        fs.writeFile(fd, `${username+'&'+password}\n`, function (err) {
            if (err) {
                return console.error(err);
            }
        });
    });
})

module.exports = router;