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
    constructor(view = {}) {
        for (let k in view) {                                    //  将Vue模板对象的方法拷贝到View实例上
            if (view.hasOwnProperty(k))
                this[k] = view[k];
        }
        this.methods = {};
        this.methods.datas = {};
    }

    config(configMethod) {
        let config = new configMethod();
        for (let k in config) {
            if (config.hasOwnProperty(k)) {
                this.setAttribute(k, config[k]);
            }
        }
        this['AAAAAAA'] = "AAAAAAAAAAA";
        this.methods['BBBBBBB'] = "BBBBBBB";
        console.log(this);
    }

    setAttribute(name, value) {
        if (name == "created" || name == "watch"|| name == "data") {
            this[name] = value;
            return;
        }

        if (typeof(value) == "function") {
            this.methods[name] = value;
        }
    }
}

export default View;
export {View};