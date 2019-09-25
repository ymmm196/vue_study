//引入 events 模块
var events = require('events');

// 创建eventEmitter对象

var eventEmitter = new events.EventEmitter();

/*
    eventEmitter.emit 是触发事件（事件请求），eventEmitter.on是绑定处理事件的处理器（事件处理），事件的请求和处理是分开的，所以是异步
    // 绑定事件以及事件的处理程序
    eventEmitter.on('eventName', eventHandler);

    // 触发事件
    eventEmitter.emit('eventName');
*/

// 创建事件处理程序
var connectHandler = function connected() {
    console.log('连接成功');

    // 触发data_received 事件
    eventEmitter.emit('data_received');
};

// 绑定connection 事件处理程序
eventEmitter.on('connection', connectHandler);

// 使用匿名函数绑定data_received事件
eventEmitter.on('data_received', function () {
    console.log('数据接收成功');
})

// 触发connection事件
eventEmitter.emit('connection');

console.log('程序执行完毕');