/**
 * 描述: 路由配置文件
 * 版权: Copyright (c) 2016
 * 公司: 深圳市昊晨科技开发有限公司
 * 作者: 陈元
 * 版本: 1.0
 * 创建日期: 2016/11/23
 * 创建时间: 10:11
 */
import VueRouter from "vue-router";                         // 路由插件
let IndexView = require("./views/index.vue");                // 引入indexVue
import UserView from "./views/user/view";                   // 引入User视图
import UserViewMember from "./views/user/member/view";      // 引入UserMember视图

// 定义路由
const routes = [
    {
        name: "foo",
        path: "/foo",
        // redirect: "index",
        component: {
            template: "<div>foo</div>"
        }
    }, {
        name: "index",
        path: "/index",
        component: IndexView
    }, {
        name: "user",
        path: "/user/:id",
        component: UserView,
        children: [
            {
                path: "member",
                component: UserViewMember
            }, {
                path: "",
                component: UserViewMember
            }
        ]
    }
];

const router = new VueRouter({routes});                     // 实例化一个VueRouter路由对象

export default router;
export {router};