/**
 * 描述: 视图类
 * 版权: Copyright (c) 2016
 * 公司: 深圳市昊晨科技开发有限公司
 * 作者: 陈元
 * 版本: 1.0
 * 创建日期: 2016/11/23
 * 创建时间: 16:21
 */
class View {
    constructor(view) {
        if (view === undefined) {
            throw new Error("View类构造方法的参数不能为空");
        }
        if (!(typeof(view) == "object" && typeof(view.render) == "function")) {
            throw new TypeError("View类构造方法的参数必须为vue模板对象");
        }

        if (typeof(this.data) === "function") {                 // 提取子类的data方法
            view.data = this.data;
        }

        if (typeof(this.created) === "function") {              // 提取子类的created方法
            view.created = this.created;
        }

        if (typeof(this.watch) === "function") {                // 提取子类的watch方法结果
            view.watch = this['watch']();
        }

        for (let k in view) {                                    //  将Vue模板对象的方法拷贝到View实例上
            if (view.hasOwnProperty(k))
                this[k] = view[k];
        }
    }
}

export default View;
export {View};