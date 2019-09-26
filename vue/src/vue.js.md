# Vue.js相关知识点

### 如何定义数据对象
    * el：它是DOM元素中的id
    * data: 用于定义属性
    * methods：用于定义的函数，可以通过return来返回函数值

### 输出对象属性和函数返回值
    * 文本
        - 数据绑定 {{}}
    * HTml
        * 使用 v-html指令
    * 属性
        * v-bind ：attr
### 指令
>指令是带有v-前缀的特殊属性，用于在表达式的值改变时，将某些行为应用到DOM上；

    * v-if : 用作判断
        * 根据表达式的true和false值来判断是否执行
    * v-on ： 监听事件  简写： @

    * v-bind : 响应更新html属性 简写： ：

    * 修饰符 ： 修饰符是以半角句号 . 指明的特殊后缀，用于指出一个指令应该以特殊方式绑定。例如，.prevent 修饰符告诉 v-on 指令对于触发的事件调event.preventDefault()：
    
    * v-model ：双向数据绑定

    * v-else : 给v-if 添加一个else块

    * v-else-if ：在2.1.0中新增，用作v-if的else-if块，可以链式的多次使用

    * v-show ： 根据条件来展示元素

    * v-for : 循环语句
        * 语法：site in sites
        * v-for 可以通过一个对象的属性来迭代数据 : value in object 或者 (value,key,index) in object
        * v-for 也可以循环整数 如：v-for = "n in 10 "



### v-if 和 v-show 区别：
    * v-if 是动态添加，当值为 false 时，是完全移除该元素，即 dom 树中不存在该元素。

    * v-show 仅是隐藏 / 显示，值为 false 时，该元素依旧存在于 dom 树中。若其原有样式设置了 display:none 则会导致其无法正常显示。

### vue.js 计算属性
>计算属性关键词: computed,在复杂逻辑出都应当使用计算属性

* 计算属性缓存vs方法
    * 计算属性是基于它们的响应式依赖进行缓存的。
* 计算属性 vs 侦听属性
    Vue 提供了一种更通用的方式来观察和响应 Vue 实例上的数据变动：侦听属性。当你有一些数据需要随着其它数据变动而变动时，你很容易滥用 watch。

* 计算属性的setter
>计算属性默认只有getter，但是在需要时也可以提供一个setter




    