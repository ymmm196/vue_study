# Buffer 缓冲区

在处理Tcp流或文件流时，必须使用二进制数据，因此定义了Buffer类，用来创建一个专门存放二进制数据的缓冲区。

在 Node.js 中，Buffer 类是随 Node 内核一起发布的核心库。Buffer 库为 Node.js 带来了一种存储原始数据的方法，可以让 Node.js 处理二进制数据，每当需要在 Node.js 中处理I/O操作中移动的数据时，就有可能使用 Buffer 库。原始数据存储在 Buffer 类的实例中。一个 Buffer 类似于一个整数数组，但它对应于 V8 堆内存之外的一块原始内存。

- Buffer与字符编码

一般用于表示编码字符的序列，比如utf-8的数据

- Node.js目前支持的编码

    - ascii ： 仅支持7位ASCII数据
    - utf-8 : 多字节编码的Unicode字符
    - utf16le - 2 或 4 个字节，小字节序编码的 Unicode 字符。支持代理对（U+10000 至 U+10FFFF）。
    - ucs2 - utf16le 的别名。
    - base64 - Base64 编码。
    - latin1 - 一种把 Buffer 编码成一字节编码的字符串的方式。
    - binary - latin1 的别名。
    - hex - 将每个字节编码为两个十六进制字符。

- 创建Buffer类

    - Buffer.alloc(size[, fill[, encoding]])： 返回一个指定大小的 Buffer 实例，如果没有设置 fill，则默认填满 0
    - Buffer.allocUnsafe(size)： 返回一个指定大小的 Buffer 实例，但是它不会被初始化，所以它可能包含敏感的数据
    - Buffer.allocUnsafeSlow(size)
    - Buffer.from(array)： 返回一个被 array 的值初始化的新的 Buffer 实例（传入的 array 的元素只能是数字，不然就会自动被 0 覆盖）
    - Buffer.from(arrayBuffer[, byteOffset[, length]])： 返回一个新建的与给定的 ArrayBuffer 共享同一内存的 Buffer。
    - Buffer.from(buffer)： 复制传入的 Buffer 实例的数据，并返回一个新的 Buffer 实例
    - Buffer.from(string[, encoding])： 返回一个被 string 的值初始化的新的 Buffer 实例

- 写入缓冲区

    语法：buf.write(string[,offset[,length]][,encoding])

    参数：
        - string -写入缓冲区的字符串
        - offset - 缓冲区开始写入的索引值，默认为0
        - length - 写入的字节数，默认为buffer.length
        - encoding - 使用的编码，默认为utf-8

    返回值：返回实际写入的大小，空间不足，只会写入部分字符串

- 从缓冲区读取数据

    语法：buf.toString([encoding[,start[,end]]])

    参数：
        - encoding - 使用的编码，默认utf-8
        - start - 起始位置
        - end - 结束位置
    
    返回值：解码缓冲区数据并使用指定的编码返回字符串

- 将Buffer转换为JSON对象

    语法：buf.toJSON();
    当字符串化一个Buffer实例时，JSON.stringify()会隐式调用toJSON()

    返回值：返回JSON对象

- 缓冲区合并

    语法：Buffer.concat(list[,totalLength])

    参数：
        - list - 用于合并的BUffer对象数组列表
        - totalLength - 指定合并后Buffer对象的总长度

    返回值：返回一个多个成员合并的新BUffer对象

- 缓冲区比较

    语法：Buffer.compare(otherBuffer)

    返回值：返回一个数字，表示buf在other之前，之后或相同

- 拷贝缓冲区

    语法：buf.copy()
    