/**
 * 描述: 用户视图
 * 版权: Copyright (c) 2016
 * 公司: 深圳市昊晨科技开发有限公司
 * 作者: 陈元
 * 版本: 1.0
 * 创建日期: 2016/11/23
 * 创建时间: 16:27
 */
let vue = require("./view.vue");
// 对象监听
vue.watch = {
    $route: function (to, from) {
        console.log(to);
        console.log(from);
    }
};

// 数据初始化
vue.data = function () {
    return {
        name: null,
        message: "Hello World!"
    }
};

// 组件初始化事件
vue.created = function () {
    console.log(this);
    this["fetchData"]();
    console.log('=====UserView Created=====');
};

vue.methods = {
    fetchData () {
        setTimeout(()=> {
            this.name = "User Created";
        }, 2000);
    }
};

export default vue;