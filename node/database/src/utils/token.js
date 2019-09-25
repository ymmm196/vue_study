const jwt = require('jsonwebtoken');
/**
 * Token的生成与校验
 */
/**
 * 
 * @param {String} data         加密数据
 * @param {Number} expiresIn    有效期（单位:s）
 */
let {
    secret
} = require('../config.json');

function create(data, expiresIn = 1200) {
    let token = jwt.sign({
        data
    }, secret, {
        expiresIn
    });
    return token;
}

function verify(token) {
    let res;
    try {
        let result = jwt.verify(token, secret);
        console.log('token校验：', result)
        res = true;
    } catch (err) {
        res = false;
    }

    return res;
}

module.exports = {
    create,
    verify
}