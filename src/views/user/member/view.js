/**
 * 描述: 会员视图
 * 版权: Copyright (c) 2016
 * 公司: 深圳市昊晨科技开发有限公司
 * 作者: 陈元
 * 版本: 1.0
 * 创建日期: 2016/11/24
 * 创建时间: 15:24
 */
import View from "../../../utils/view";
let vue = require("./view.vue");

class UserMemberView extends View {
    constructor(view) {
        super(view);
    }

    data () {
        return {
            name: "UserMemberView"
        };
    }
}

export default new UserMemberView(vue);