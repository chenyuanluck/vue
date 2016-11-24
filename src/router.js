/**
 * 描述: 路由配置文件
 * 版权: Copyright (c) 2016
 * 公司: 深圳市昊晨科技开发有限公司
 * 作者: 陈元
 * 版本: 1.0
 * 创建日期: 2016/11/23
 * 创建时间: 10:11
 */
let IndexView = require("./views/index.vue");                // 引入indexVue
import UserView from "./views/user/view";                   // 引入User视图
import UserViewMember from "./views/user/member/view";      // 引入UserMember视图

// 定义路由
const routes = [
    {
        name: "foo",
        path: '/foo',
        component: {
            template: '<div>foo</div>'
        }
    }, {
        path: '/index',
        component: IndexView
    }
    , {
        path: '/user/:id',
        component: UserView,
        children:[
            {
                path: "member",
                component: UserViewMember
            }
        ]
    }
];

export default routes;
export {routes};