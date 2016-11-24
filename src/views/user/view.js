/**
 * 描述: 用户视图
 * 版权: Copyright (c) 2016
 * 公司: 深圳市昊晨科技开发有限公司
 * 作者: 陈元
 * 版本: 1.0
 * 创建日期: 2016/11/23
 * 创建时间: 16:27
 */
import View from "../../utils/view";
let UserVue = require("./view.vue");

class UserView extends View {
    constructor(view) {
        super(view);
    }

    data() {
        return {
            name: "UserView"
        }
    };

    created() {
        console.log('=====UserView Created=====');
    };
}

let v = new UserView(UserVue).getInstance();

export default UserVue;