// const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost:27017/test');
// const con = mongoose.connection;
// con.on('error', console.error.bind(console, '连接数据库失败'));
// con.once('open',()=>{
//     //成功连接
//     console.log('连接成功')
// })

// module.exports = mongoose;

var mongoose = require('mongoose'),
    DB_URL = 'mongodb://127.0.0.1:27017/test';

/**
 * 连接
 */
mongoose.connect(DB_URL, {
    useNewUrlParser:true
});

/**
  * 连接成功
  */
mongoose.connection.on('connected', function () {
    console.log('Mongoose connection open to ' + DB_URL);
});

/**
 * 连接异常
 */
mongoose.connection.on('error', function (err) {
    console.log('Mongoose connection error: ' + err);
});

/**
 * 连接断开
 */
mongoose.connection.on('disconnected', function () {
    console.log('Mongoose connection disconnected');
});

module.exports = mongoose;