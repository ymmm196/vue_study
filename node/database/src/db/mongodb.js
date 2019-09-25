const MongoClient = require('mongodb').MongoClient;

const {
    DBurl,
    DBname
} = require('../config.json');

// 连接数据库
MongoClient.connect(DBurl, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, async (err, client) => {
    if (err) throw err;
    let db = client.db(DBname); //数据库名称
    let col = db.collection('user'); // 集合名称

    //增删改查的操作
    // let result = await col.find().toArray(); 

    let result = await col.find({
        age: {}
    })
    console.log(result);
    //关闭数据库
    client.close();
})