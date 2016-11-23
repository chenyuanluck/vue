/**
 * 描述: 视图
 * 版权: Copyright (c) 2016
 * 公司: 深圳市昊晨科技开发有限公司
 * 作者: 陈元
 * 版本: 1.0
 * 创建日期: 2016/11/23
 * 创建时间: 16:21
 */
class View {
    constructor(view) {
        if(typeof(this.data)==="function") {
            view.data = this.data;
        }
        if(typeof(this.created)==="function") {
            view.created = this.created;
        }
        this.view = view;
    }

    getInstance() {
        return this.view;
    }
}

export default View;
export {View};