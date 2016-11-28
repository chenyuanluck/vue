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

// 数据初始化
vue.data = function () {
    return {
        loggedIn: "TEST"
    }
};

// 组件初始化事件
vue.created = function () {
    console.log('=====Index=====');
};

export default vue;