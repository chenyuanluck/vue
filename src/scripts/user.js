/**
 * 描述:
 * 版权: Copyright (c) 2016
 * 公司: 深圳市昊晨科技开发有限公司
 * 作者: 陈元
 * 版本: 1.0
 * 创建日期: 2016/11/23
 * 创建时间: 16:27
 */

var UserView = require("../views/user.vue");

UserView.data = function () {
    return {
        name: "UserView"
    }
};
UserView.created = function () {
    console.log('================UserView Created================');
};

export default UserView;