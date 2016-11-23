/**
 * 描述: 路由配置文件
 * 版权: Copyright (c) 2016
 * 公司: 深圳市昊晨科技开发有限公司
 * 作者: 陈元
 * 版本: 1.0
 * 创建日期: 2016/11/23
 * 创建时间: 10:11
 */
import Vue from "vue";
import VueRouter from "vue-router";

import Index from "./views/index";

// 如果使用模块化机制编程
Vue.use(VueRouter);

// 2. 定义路由
const routes = [
    {
        name: "foo",
        path: '/foo',
        component: {template: '<div>foo</div>'}
    }, {
        name: "bar",
        path: '/bar',
        component: {template: '<div>bar</div>'}
    }, {
        path: '/index',
        component: Index
    }
];

// 实例化一个VueRouter路由对象
const Router = new VueRouter({
    routes: routes
});

export default Router;
export {Router};