# Node.js 回调函数

- node.js 异步编程的直接体现就是回调
- 回调函数在完成任务后就会呗调用，Node使用了大量的回调函数，Node所有的Api都支持回调函数

- 回调函数一般作为函数的最后一个参数出现

    `
        function foo1(name,age,callback){ }
    `

- 阻塞代码
- 非阻塞代码

    `
    var fs = require("fs");
    fs.readFile('input.txt', function (err, data) {
    if (err) return console.error(err);
    console.log(data.toString());
    });
    console.log("程序执行结束!");
    `

# fs 文件模块

- var fs = require("fs")

- 含有异步和同步两个版本

- 读取文件 
    - 同步 ：readFileSync()
    - 异步：readFile()
    - 案例：file.js

- 打开文件
    - fs.open(path,flags[,mode],callback)
    - path:路径
    - flags：文件打开的行为
        - r ：读，文件不存在抛出异常
        - r+ ：读写，文件不存在抛出异常
        - rs ：同步读
        - rs+ ：同步读
        - w :写，文件不存在则创建
        - w+：读写，文件不存在则创建
        - a：追加的方式打开，文件不存在则创建
        - ax:类似a，但是如果文件路径存在，则文件追加失败
        - a+：以读取追加模式打开，不存在则创建
        - ax+：类似a+,但是如果文件路径存在，则文件追加失败
    - mode：设置文件模式(权限)，默认权限为0666，可读可写
    - callback：回调函数，带有两个参数：callback(err,fd);
    - 案例：flieopen.js

- 获取文件信息

    - fs.stat(path,callback)
    -参数：
        - path：文件路径
        - callback:回调函数，(err,stats),stats为fs.Stats对象
    
    - stats类中的方法
        - stats.isFile()	如果是文件返回 true，否则返回 false。
        - stats.isDirectory()	如果是目录返回 true，否则返回 false。
        - stats.isBlockDevice()	如果是块设备返回 true，否则返回  false。
        - stats.isCharacterDevice()	如果是字符设备返回 true，否则返回 false。
        - stats.isSymbolicLink()	如果是软链接返回 true，否则返回 false。
        - stats.isFIFO()	如果是FIFO，返回true，否则返回 false。FIFO是UNIX中的一种特殊类型的命令管道。
        - stats.isSocket()	如果是 Socket 返回 true，否则返回 false。

- 文件写入
    - fs.writeFile(file,data[,options],callback)
    - 注：writeFile直接打开文件默认为W模式，如果文件存在，写入的内容会覆盖源文件内容
    - 参数：
        - file:文件名
        - data：写入的数据，可以是字符串和Buffer（缓冲）对象
        - options：是一个对象，包含{encoding,mode,flag},默认编码为utf-8,模式为0666，flag为w
        - callback：只包含错误信息参数
    - 案例：filewrite.js

- 读取文件
    - fs.read(fd,buffer,offset,length,position,callback)
    - 参数：
        - fd：通过fs.open()方法返回的文件描述符
        - buffer：数据写入的缓冲区
        - offset：缓冲区写入的写入偏移量
        - length：要从文件中读取的字节数
        - position：文件读取的位置，如果为null，则会从当前文件的指针位置开始读
        - callback：回调函数，有三个参数err,bytesRead,buffer,err为错误信息，bytesRead表示读取的字节数，buffer为缓冲区对象
    - 案例：fileread.js

- 关闭文件
    - fs.close(fd,callback)
    - 参数：
        - fd：通过fs.open()方法返回的文件描述符
        - callback：回调函数，没有参数
    - 案例：fileclose.js

- 截取文件
    - fs.ftruncate(fd,len,callback)
    - 参数：
        - fd：通过fs.open()方法返回的文件描述符
        - len: 文件内容截取的长度
        - callback：回调函数，没有参数
    - 案例：ftruncate.js

- 