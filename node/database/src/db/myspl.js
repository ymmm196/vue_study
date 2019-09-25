const mysql = require('mysql');
// console.log(mysql);

// 创建连接池
var pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    port: 3306,
    database: 'nodestudy',
    multipleStatements: true,
});

function query(sql) {
    return new Promise((resolve, reject) => {
        pool.query(sql, (error, results, fields) => {
            if (error) {
                reject(error);
            }
            resolve(results);
        })
    })
}

module.exports = query;