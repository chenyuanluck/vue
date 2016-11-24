/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "./main/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _vue = __webpack_require__(1);
	
	var _vue2 = _interopRequireDefault(_vue);
	
	var _vueRouter = __webpack_require__(2);
	
	var _vueRouter2 = _interopRequireDefault(_vueRouter);
	
	var _router = __webpack_require__(3);
	
	var _router2 = _interopRequireDefault(_router);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// 导入路由配置对象
	
	// vue框架包
	_vue2.default.use(_vueRouter2.default); // 如果使用模块化机制编程
	
	// 路由插件
	/**
	 * 描述: 入口页面
	 * 版权: Copyright (c) 2016
	 * 公司: 深圳市昊晨科技开发有限公司
	 * 作者: 陈元
	 * 版本: 1.0
	 * 创建日期: 2016/11/21
	 * 创建时间: 14:26
	 */
	var router = new _vueRouter2.default({ routes: _router2.default }); // 实例化一个VueRouter路由对象
	var app = new _vue2.default({ router: router }).$mount('#app'); // 创建和挂载根实例

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(global) {"use strict";
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	/*!
	 * Vue.js v2.1.0
	 * (c) 2014-2016 Evan You
	 * Released under the MIT License.
	 */
	!function (e, t) {
	  "object" == ( false ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? module.exports = t() :  true ? !(__WEBPACK_AMD_DEFINE_FACTORY__ = (t), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : e.Vue = t();
	}(undefined, function () {
	  "use strict";
	  function e(e) {
	    return null == e ? "" : "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) ? JSON.stringify(e, null, 2) : String(e);
	  }function t(e) {
	    var t = parseFloat(e, 10);return t || 0 === t ? t : e;
	  }function n(e, t) {
	    for (var n = Object.create(null), r = e.split(","), i = 0; i < r.length; i++) {
	      n[r[i]] = !0;
	    }return t ? function (e) {
	      return n[e.toLowerCase()];
	    } : function (e) {
	      return n[e];
	    };
	  }function r(e, t) {
	    if (e.length) {
	      var n = e.indexOf(t);if (n > -1) return e.splice(n, 1);
	    }
	  }function i(e, t) {
	    return Ur.call(e, t);
	  }function o(e) {
	    return "string" == typeof e || "number" == typeof e;
	  }function a(e) {
	    var t = Object.create(null);return function (n) {
	      var r = t[n];return r || (t[n] = e(n));
	    };
	  }function s(e, t) {
	    function n(n) {
	      var r = arguments.length;return r ? r > 1 ? e.apply(t, arguments) : e.call(t, n) : e.call(t);
	    }return n._length = e.length, n;
	  }function c(e, t) {
	    t = t || 0;for (var n = e.length - t, r = new Array(n); n--;) {
	      r[n] = e[n + t];
	    }return r;
	  }function l(e, t) {
	    for (var n in t) {
	      e[n] = t[n];
	    }return e;
	  }function u(e) {
	    return null !== e && "object" == (typeof e === "undefined" ? "undefined" : _typeof(e));
	  }function f(e) {
	    return qr.call(e) === Wr;
	  }function d(e) {
	    for (var t = {}, n = 0; n < e.length; n++) {
	      e[n] && l(t, e[n]);
	    }return t;
	  }function p() {}function v(e) {
	    return e.reduce(function (e, t) {
	      return e.concat(t.staticKeys || []);
	    }, []).join(",");
	  }function h(e, t) {
	    return e == t || !(!u(e) || !u(t)) && JSON.stringify(e) === JSON.stringify(t);
	  }function m(e, t) {
	    for (var n = 0; n < e.length; n++) {
	      if (h(e[n], t)) return n;
	    }return -1;
	  }function g(e) {
	    var t = (e + "").charCodeAt(0);return 36 === t || 95 === t;
	  }function y(e, t, n, r) {
	    Object.defineProperty(e, t, { value: n, enumerable: !!r, writable: !0, configurable: !0 });
	  }function _(e) {
	    if (!Gr.test(e)) {
	      var t = e.split(".");return function (e) {
	        for (var n = 0; n < t.length; n++) {
	          if (!e) return;e = e[t[n]];
	        }return e;
	      };
	    }
	  }function b(e) {
	    return (/native code/.test(e.toString())
	    );
	  }function $(e) {
	    di.target && pi.push(di.target), di.target = e;
	  }function w() {
	    di.target = pi.pop();
	  }function x(e, t) {
	    e.__proto__ = t;
	  }function C(e, t, n) {
	    for (var r = 0, i = n.length; r < i; r++) {
	      var o = n[r];y(e, o, t[o]);
	    }
	  }function k(e) {
	    if (u(e)) {
	      var t;return i(e, "__ob__") && e.__ob__ instanceof yi ? t = e.__ob__ : gi.shouldConvert && !oi() && (Array.isArray(e) || f(e)) && Object.isExtensible(e) && !e._isVue && (t = new yi(e)), t;
	    }
	  }function A(e, t, n, r) {
	    var i = new di(),
	        o = Object.getOwnPropertyDescriptor(e, t);if (!o || o.configurable !== !1) {
	      var a = o && o.get,
	          s = o && o.set,
	          c = k(n);Object.defineProperty(e, t, { enumerable: !0, configurable: !0, get: function get() {
	          var t = a ? a.call(e) : n;return di.target && (i.depend(), c && c.dep.depend(), Array.isArray(t) && T(t)), t;
	        }, set: function set(t) {
	          var r = a ? a.call(e) : n;t === r || t !== t && r !== r || (s ? s.call(e, t) : n = t, c = k(t), i.notify());
	        } });
	    }
	  }function O(e, t, n) {
	    if (Array.isArray(e)) return e.length = Math.max(e.length, t), e.splice(t, 1, n), n;if (i(e, t)) return void (e[t] = n);var r = e.__ob__;if (!(e._isVue || r && r.vmCount)) return r ? (A(r.value, t, n), r.dep.notify(), n) : void (e[t] = n);
	  }function S(e, t) {
	    var n = e.__ob__;e._isVue || n && n.vmCount || i(e, t) && (delete e[t], n && n.dep.notify());
	  }function T(e) {
	    for (var t = void 0, n = 0, r = e.length; n < r; n++) {
	      t = e[n], t && t.__ob__ && t.__ob__.dep.depend(), Array.isArray(t) && T(t);
	    }
	  }function j(e, t) {
	    if (!t) return e;for (var n, r, o, a = Object.keys(t), s = 0; s < a.length; s++) {
	      n = a[s], r = e[n], o = t[n], i(e, n) ? f(r) && f(o) && j(r, o) : O(e, n, o);
	    }return e;
	  }function E(e, t) {
	    return t ? e ? e.concat(t) : Array.isArray(t) ? t : [t] : e;
	  }function N(e, t) {
	    var n = Object.create(e || null);return t ? l(n, t) : n;
	  }function L(e) {
	    var t = e.props;if (t) {
	      var n,
	          r,
	          i,
	          o = {};if (Array.isArray(t)) for (n = t.length; n--;) {
	        r = t[n], "string" == typeof r && (i = Vr(r), o[i] = { type: null });
	      } else if (f(t)) for (var a in t) {
	        r = t[a], i = Vr(a), o[i] = f(r) ? r : { type: r };
	      }e.props = o;
	    }
	  }function D(e) {
	    var t = e.directives;if (t) for (var n in t) {
	      var r = t[n];"function" == typeof r && (t[n] = { bind: r, update: r });
	    }
	  }function M(e, t, n) {
	    function r(r) {
	      var i = _i[r] || bi;u[r] = i(e[r], t[r], n, r);
	    }L(t), D(t);var o = t.extends;if (o && (e = "function" == typeof o ? M(e, o.options, n) : M(e, o, n)), t.mixins) for (var a = 0, s = t.mixins.length; a < s; a++) {
	      var c = t.mixins[a];c.prototype instanceof Re && (c = c.options), e = M(e, c, n);
	    }var l,
	        u = {};for (l in e) {
	      r(l);
	    }for (l in t) {
	      i(e, l) || r(l);
	    }return u;
	  }function P(e, t, n, r) {
	    if ("string" == typeof n) {
	      var i = e[t],
	          o = i[n] || i[Vr(n)] || i[zr(Vr(n))];return o;
	    }
	  }function R(e, t, n, r) {
	    var o = t[e],
	        a = !i(n, e),
	        s = n[e];if (B(o.type) && (a && !i(o, "default") ? s = !1 : "" !== s && s !== Kr(e) || (s = !0)), void 0 === s) {
	      s = I(r, o, e);var c = gi.shouldConvert;gi.shouldConvert = !0, k(s), gi.shouldConvert = c;
	    }return s;
	  }function I(e, t, n) {
	    if (i(t, "default")) {
	      var r = t.default;return u(r), e && e.$options.propsData && void 0 === e.$options.propsData[n] && void 0 !== e[n] ? e[n] : "function" == typeof r && t.type !== Function ? r.call(e) : r;
	    }
	  }function F(e) {
	    var t = e && e.toString().match(/^\s*function (\w+)/);return t && t[1];
	  }function B(e) {
	    if (!Array.isArray(e)) return "Boolean" === F(e);for (var t = 0, n = e.length; t < n; t++) {
	      if ("Boolean" === F(e[t])) return !0;
	    }return !1;
	  }function U() {
	    wi.length = 0, xi = {}, Ci = ki = !1;
	  }function H() {
	    for (ki = !0, wi.sort(function (e, t) {
	      return e.id - t.id;
	    }), Ai = 0; Ai < wi.length; Ai++) {
	      var e = wi[Ai],
	          t = e.id;xi[t] = null, e.run();
	    }ai && li.devtools && ai.emit("flush"), U();
	  }function V(e) {
	    var t = e.id;if (null == xi[t]) {
	      if (xi[t] = !0, ki) {
	        for (var n = wi.length - 1; n >= 0 && wi[n].id > e.id;) {
	          n--;
	        }wi.splice(Math.max(n, Ai) + 1, 0, e);
	      } else wi.push(e);Ci || (Ci = !0, si(H));
	    }
	  }function z(e) {
	    Ti.clear(), J(e, Ti);
	  }function J(e, t) {
	    var n,
	        r,
	        i = Array.isArray(e);if ((i || u(e)) && Object.isExtensible(e)) {
	      if (e.__ob__) {
	        var o = e.__ob__.dep.id;if (t.has(o)) return;t.add(o);
	      }if (i) for (n = e.length; n--;) {
	        J(e[n], t);
	      } else for (r = Object.keys(e), n = r.length; n--;) {
	        J(e[r[n]], t);
	      }
	    }
	  }function K(e) {
	    e._watchers = [], q(e), W(e), Z(e), Y(e), Q(e);
	  }function q(e) {
	    var t = e.$options.props;if (t) {
	      var n = e.$options.propsData || {},
	          r = e.$options._propKeys = Object.keys(t),
	          i = !e.$parent;gi.shouldConvert = i;for (var o = function o(i) {
	        var o = r[i];A(e, o, R(o, t, n, e));
	      }, a = 0; a < r.length; a++) {
	        o(a);
	      }gi.shouldConvert = !0;
	    }
	  }function W(e) {
	    var t = e.$options.data;t = e._data = "function" == typeof t ? t.call(e) : t || {}, f(t) || (t = {});for (var n = Object.keys(t), r = e.$options.props, o = n.length; o--;) {
	      r && i(r, n[o]) || te(e, n[o]);
	    }k(t), t.__ob__ && t.__ob__.vmCount++;
	  }function Z(e) {
	    var t = e.$options.computed;if (t) for (var n in t) {
	      var r = t[n];"function" == typeof r ? (ji.get = G(r, e), ji.set = p) : (ji.get = r.get ? r.cache !== !1 ? G(r.get, e) : s(r.get, e) : p, ji.set = r.set ? s(r.set, e) : p), Object.defineProperty(e, n, ji);
	    }
	  }function G(e, t) {
	    var n = new Si(t, e, p, { lazy: !0 });return function () {
	      return n.dirty && n.evaluate(), di.target && n.depend(), n.value;
	    };
	  }function Y(e) {
	    var t = e.$options.methods;if (t) for (var n in t) {
	      e[n] = null == t[n] ? p : s(t[n], e);
	    }
	  }function Q(e) {
	    var t = e.$options.watch;if (t) for (var n in t) {
	      var r = t[n];if (Array.isArray(r)) for (var i = 0; i < r.length; i++) {
	        X(e, n, r[i]);
	      } else X(e, n, r);
	    }
	  }function X(e, t, n) {
	    var r;f(n) && (r = n, n = n.handler), "string" == typeof n && (n = e[n]), e.$watch(t, n, r);
	  }function ee(e) {
	    var t = {};t.get = function () {
	      return this._data;
	    }, Object.defineProperty(e.prototype, "$data", t), e.prototype.$set = O, e.prototype.$delete = S, e.prototype.$watch = function (e, t, n) {
	      var r = this;n = n || {}, n.user = !0;var i = new Si(r, e, t, n);return n.immediate && t.call(r, i.value), function () {
	        i.teardown();
	      };
	    };
	  }function te(e, t) {
	    g(t) || Object.defineProperty(e, t, { configurable: !0, enumerable: !0, get: function get() {
	        return e._data[t];
	      }, set: function set(n) {
	        e._data[t] = n;
	      } });
	  }function ne(e) {
	    var t = new Ei(e.tag, e.data, e.children, e.text, e.elm, e.ns, e.context, e.componentOptions);return t.isStatic = e.isStatic, t.key = e.key, t.isCloned = !0, t;
	  }function re(e) {
	    for (var t = new Array(e.length), n = 0; n < e.length; n++) {
	      t[n] = ne(e[n]);
	    }return t;
	  }function ie(e, t, n, r) {
	    r += t;var i = e.__injected || (e.__injected = {});if (!i[r]) {
	      i[r] = !0;var o = e[t];o ? e[t] = function () {
	        o.apply(this, arguments), n.apply(this, arguments);
	      } : e[t] = n;
	    }
	  }function oe(e, t, n, r, i) {
	    var o, a, s, c, l, u;for (o in e) {
	      if (a = e[o], s = t[o], a) {
	        if (s) {
	          if (a !== s) if (Array.isArray(s)) {
	            s.length = a.length;for (var f = 0; f < s.length; f++) {
	              s[f] = a[f];
	            }e[o] = s;
	          } else s.fn = a, e[o] = s;
	        } else u = "!" === o.charAt(0), l = u ? o.slice(1) : o, Array.isArray(a) ? n(l, a.invoker = ae(a), u) : (a.invoker || (c = a, a = e[o] = {}, a.fn = c, a.invoker = se(a)), n(l, a.invoker, u));
	      } else ;
	    }for (o in t) {
	      e[o] || (l = "!" === o.charAt(0) ? o.slice(1) : o, r(l, t[o].invoker));
	    }
	  }function ae(e) {
	    return function (t) {
	      for (var n = arguments, r = 1 === arguments.length, i = 0; i < e.length; i++) {
	        r ? e[i](t) : e[i].apply(null, n);
	      }
	    };
	  }function se(e) {
	    return function (t) {
	      var n = 1 === arguments.length;n ? e.fn(t) : e.fn.apply(null, arguments);
	    };
	  }function ce(e, t, n) {
	    if (o(e)) return [le(e)];if (Array.isArray(e)) {
	      for (var r = [], i = 0, a = e.length; i < a; i++) {
	        var s = e[i],
	            c = r[r.length - 1];Array.isArray(s) ? r.push.apply(r, ce(s, t, (n || "") + "_" + i)) : o(s) ? c && c.text ? c.text += String(s) : "" !== s && r.push(le(s)) : s instanceof Ei && (s.text && c && c.text ? c.isCloned || (c.text += s.text) : (t && ue(s, t), s.tag && null == s.key && null != n && (s.key = "__vlist" + n + "_" + i + "__"), r.push(s)));
	      }return r;
	    }
	  }function le(e) {
	    return new Ei(void 0, void 0, void 0, String(e));
	  }function ue(e, t) {
	    if (e.tag && !e.ns && (e.ns = t, e.children)) for (var n = 0, r = e.children.length; n < r; n++) {
	      ue(e.children[n], t);
	    }
	  }function fe(e) {
	    return e && e.filter(function (e) {
	      return e && e.componentOptions;
	    })[0];
	  }function de(e) {
	    var t = e.$options,
	        n = t.parent;if (n && !t.abstract) {
	      for (; n.$options.abstract && n.$parent;) {
	        n = n.$parent;
	      }n.$children.push(e);
	    }e.$parent = n, e.$root = n ? n.$root : e, e.$children = [], e.$refs = {}, e._watcher = null, e._inactive = !1, e._isMounted = !1, e._isDestroyed = !1, e._isBeingDestroyed = !1;
	  }function pe(e) {
	    e.prototype._mount = function (e, t) {
	      var n = this;return n.$el = e, n.$options.render || (n.$options.render = Ni), ve(n, "beforeMount"), n._watcher = new Si(n, function () {
	        n._update(n._render(), t);
	      }, p), t = !1, null == n.$vnode && (n._isMounted = !0, ve(n, "mounted")), n;
	    }, e.prototype._update = function (e, t) {
	      var n = this;n._isMounted && ve(n, "beforeUpdate");var r = n.$el,
	          i = Li;Li = n;var o = n._vnode;n._vnode = e, o ? n.$el = n.__patch__(o, e) : n.$el = n.__patch__(n.$el, e, t), Li = i, r && (r.__vue__ = null), n.$el && (n.$el.__vue__ = n), n.$vnode && n.$parent && n.$vnode === n.$parent._vnode && (n.$parent.$el = n.$el), n._isMounted && ve(n, "updated");
	    }, e.prototype._updateFromParent = function (e, t, n, r) {
	      var i = this,
	          o = !(!i.$options._renderChildren && !r);if (i.$options._parentVnode = n, i.$options._renderChildren = r, e && i.$options.props) {
	        gi.shouldConvert = !1;for (var a = i.$options._propKeys || [], s = 0; s < a.length; s++) {
	          var c = a[s];i[c] = R(c, i.$options.props, e, i);
	        }gi.shouldConvert = !0, i.$options.propsData = e;
	      }if (t) {
	        var l = i.$options._parentListeners;i.$options._parentListeners = t, i._updateListeners(t, l);
	      }o && (i.$slots = Ee(r, i._renderContext), i.$forceUpdate());
	    }, e.prototype.$forceUpdate = function () {
	      var e = this;e._watcher && e._watcher.update();
	    }, e.prototype.$destroy = function () {
	      var e = this;if (!e._isBeingDestroyed) {
	        ve(e, "beforeDestroy"), e._isBeingDestroyed = !0;var t = e.$parent;!t || t._isBeingDestroyed || e.$options.abstract || r(t.$children, e), e._watcher && e._watcher.teardown();for (var n = e._watchers.length; n--;) {
	          e._watchers[n].teardown();
	        }e._data.__ob__ && e._data.__ob__.vmCount--, e._isDestroyed = !0, ve(e, "destroyed"), e.$off(), e.$el && (e.$el.__vue__ = null), e.__patch__(e._vnode, null);
	      }
	    };
	  }function ve(e, t) {
	    var n = e.$options[t];if (n) for (var r = 0, i = n.length; r < i; r++) {
	      n[r].call(e);
	    }e.$emit("hook:" + t);
	  }function he(e, t, n, r, i) {
	    if (e) {
	      var o = n.$options._base;if (u(e) && (e = o.extend(e)), "function" == typeof e) {
	        if (!e.cid) if (e.resolved) e = e.resolved;else if (e = we(e, o, function () {
	          n.$forceUpdate();
	        }), !e) return;Pe(e), t = t || {};var a = xe(t, e);if (e.options.functional) return me(e, a, t, n, r);var s = t.on;t.on = t.nativeOn, e.options.abstract && (t = {}), ke(t);var c = e.options.name || i,
	            l = new Ei("vue-component-" + e.cid + (c ? "-" + c : ""), t, void 0, void 0, void 0, void 0, n, { Ctor: e, propsData: a, listeners: s, tag: i, children: r });return l;
	      }
	    }
	  }function me(e, t, n, r, i) {
	    var o = {},
	        a = e.options.props;if (a) for (var c in a) {
	      o[c] = R(c, a, t);
	    }var l = e.options.render.call(null, s(Oe, { _self: Object.create(r) }), { props: o, data: n, parent: r, children: ce(i), slots: function slots() {
	        return Ee(i, r);
	      } });return l instanceof Ei && (l.functionalContext = r, n.slot && ((l.data || (l.data = {})).slot = n.slot)), l;
	  }function ge(e, t) {
	    var n = e.componentOptions,
	        r = { _isComponent: !0, parent: t, propsData: n.propsData, _componentTag: n.tag, _parentVnode: e, _parentListeners: n.listeners, _renderChildren: n.children },
	        i = e.data.inlineTemplate;return i && (r.render = i.render, r.staticRenderFns = i.staticRenderFns), new n.Ctor(r);
	  }function ye(e, t) {
	    if (!e.child || e.child._isDestroyed) {
	      var n = e.child = ge(e, Li);n.$mount(t ? e.elm : void 0, t);
	    } else if (e.data.keepAlive) {
	      var r = e;_e(r, r);
	    }
	  }function _e(e, t) {
	    var n = t.componentOptions,
	        r = t.child = e.child;r._updateFromParent(n.propsData, n.listeners, t, n.children);
	  }function be(e) {
	    e.child._isMounted || (e.child._isMounted = !0, ve(e.child, "mounted")), e.data.keepAlive && (e.child._inactive = !1, ve(e.child, "activated"));
	  }function $e(e) {
	    e.child._isDestroyed || (e.data.keepAlive ? (e.child._inactive = !0, ve(e.child, "deactivated")) : e.child.$destroy());
	  }function we(e, t, n) {
	    if (!e.requested) {
	      e.requested = !0;var r = e.pendingCallbacks = [n],
	          i = !0,
	          o = function o(n) {
	        if (u(n) && (n = t.extend(n)), e.resolved = n, !i) for (var o = 0, a = r.length; o < a; o++) {
	          r[o](n);
	        }
	      },
	          a = function a(e) {},
	          s = e(o, a);return s && "function" == typeof s.then && !e.resolved && s.then(o, a), i = !1, e.resolved;
	    }e.pendingCallbacks.push(n);
	  }function xe(e, t) {
	    var n = t.options.props;if (n) {
	      var r = {},
	          i = e.attrs,
	          o = e.props,
	          a = e.domProps;if (i || o || a) for (var s in n) {
	        var c = Kr(s);Ce(r, o, s, c, !0) || Ce(r, i, s, c) || Ce(r, a, s, c);
	      }return r;
	    }
	  }function Ce(e, t, n, r, o) {
	    if (t) {
	      if (i(t, n)) return e[n] = t[n], o || delete t[n], !0;if (i(t, r)) return e[n] = t[r], o || delete t[r], !0;
	    }return !1;
	  }function ke(e) {
	    e.hook || (e.hook = {});for (var t = 0; t < Mi.length; t++) {
	      var n = Mi[t],
	          r = e.hook[n],
	          i = Di[n];e.hook[n] = r ? Ae(i, r) : i;
	    }
	  }function Ae(e, t) {
	    return function (n, r) {
	      e(n, r), t(n, r);
	    };
	  }function Oe(e, t, n) {
	    return t && (Array.isArray(t) || "object" != (typeof t === "undefined" ? "undefined" : _typeof(t))) && (n = t, t = void 0), Se(this._self, e, t, n);
	  }function Se(e, t, n, r) {
	    if (!n || !n.__ob__) {
	      if (!t) return Ni();if (Array.isArray(r) && "function" == typeof r[0] && (n = n || {}, n.scopedSlots = { default: r[0] }, r.length = 0), "string" == typeof t) {
	        var i,
	            o = li.getTagNamespace(t);if (li.isReservedTag(t)) return new Ei(t, n, ce(r, o), void 0, void 0, o, e);if (i = P(e.$options, "components", t)) return he(i, n, e, r, t);var a = "foreignObject" === t ? "xhtml" : o;return new Ei(t, n, ce(r, a), void 0, void 0, o, e);
	      }return he(t, n, e, r);
	    }
	  }function Te(e) {
	    e.$vnode = null, e._vnode = null, e._staticTrees = null, e._renderContext = e.$options._parentVnode && e.$options._parentVnode.context, e.$slots = Ee(e.$options._renderChildren, e._renderContext), e.$scopedSlots = null, e.$createElement = s(Oe, e), e.$options.el && e.$mount(e.$options.el);
	  }function je(n) {
	    function r(e, t, n) {
	      if (Array.isArray(e)) for (var r = 0; r < e.length; r++) {
	        e[r] && "string" != typeof e[r] && i(e[r], t + "_" + r, n);
	      } else i(e, t, n);
	    }function i(e, t, n) {
	      e.isStatic = !0, e.key = t, e.isOnce = n;
	    }n.prototype.$nextTick = function (e) {
	      return si(e, this);
	    }, n.prototype._render = function () {
	      var e = this,
	          t = e.$options,
	          n = t.render,
	          r = t.staticRenderFns,
	          i = t._parentVnode;if (e._isMounted) for (var o in e.$slots) {
	        e.$slots[o] = re(e.$slots[o]);
	      }i && (e.$scopedSlots = i.data.scopedSlots), r && !e._staticTrees && (e._staticTrees = []), e.$vnode = i;var a;try {
	        a = n.call(e._renderProxy, e.$createElement);
	      } catch (t) {
	        if (li.errorHandler) li.errorHandler.call(null, t, e);else {
	          if (oi()) throw t;console.error(t);
	        }a = e._vnode;
	      }return a instanceof Ei || (a = Ni()), a.parent = i, a;
	    }, n.prototype._h = Oe, n.prototype._s = e, n.prototype._n = t, n.prototype._e = Ni, n.prototype._q = h, n.prototype._i = m, n.prototype._m = function (e, t) {
	      var n = this._staticTrees[e];return n && !t ? Array.isArray(n) ? re(n) : ne(n) : (n = this._staticTrees[e] = this.$options.staticRenderFns[e].call(this._renderProxy), r(n, "__static__" + e, !1), n);
	    }, n.prototype._o = function (e, t, n) {
	      return r(e, "__once__" + t + (n ? "_" + n : ""), !0), e;
	    };var o = function o(e) {
	      return e;
	    };n.prototype._f = function (e) {
	      return P(this.$options, "filters", e, !0) || o;
	    }, n.prototype._l = function (e, t) {
	      var n, r, i, o, a;if (Array.isArray(e)) for (n = new Array(e.length), r = 0, i = e.length; r < i; r++) {
	        n[r] = t(e[r], r);
	      } else if ("number" == typeof e) for (n = new Array(e), r = 0; r < e; r++) {
	        n[r] = t(r + 1, r);
	      } else if (u(e)) for (o = Object.keys(e), n = new Array(o.length), r = 0, i = o.length; r < i; r++) {
	        a = o[r], n[r] = t(e[a], a, r);
	      }return n;
	    }, n.prototype._t = function (e, t, n) {
	      var r = this.$scopedSlots && this.$scopedSlots[e];if (r) return r(n || {}) || t;var i = this.$slots[e];return i || t;
	    }, n.prototype._b = function (e, t, n, r) {
	      if (n) if (u(n)) {
	        Array.isArray(n) && (n = d(n));for (var i in n) {
	          if ("class" === i || "style" === i) e[i] = n[i];else {
	            var o = r || li.mustUseProp(t, i) ? e.domProps || (e.domProps = {}) : e.attrs || (e.attrs = {});o[i] = n[i];
	          }
	        }
	      } else ;return e;
	    }, n.prototype._k = function (e) {
	      return li.keyCodes[e];
	    };
	  }function Ee(e, t) {
	    var n = {};if (!e) return n;for (var r, i, o = ce(e) || [], a = [], s = 0, c = o.length; s < c; s++) {
	      if (i = o[s], (i.context === t || i.functionalContext === t) && i.data && (r = i.data.slot)) {
	        var l = n[r] || (n[r] = []);"template" === i.tag ? l.push.apply(l, i.children) : l.push(i);
	      } else a.push(i);
	    }return a.length && (1 !== a.length || " " !== a[0].text && !a[0].isComment) && (n.default = a), n;
	  }function Ne(e) {
	    e._events = Object.create(null);var t = e.$options._parentListeners,
	        n = s(e.$on, e),
	        r = s(e.$off, e);e._updateListeners = function (t, i) {
	      oe(t, i || {}, n, r, e);
	    }, t && e._updateListeners(t);
	  }function Le(e) {
	    e.prototype.$on = function (e, t) {
	      var n = this;return (n._events[e] || (n._events[e] = [])).push(t), n;
	    }, e.prototype.$once = function (e, t) {
	      function n() {
	        r.$off(e, n), t.apply(r, arguments);
	      }var r = this;return n.fn = t, r.$on(e, n), r;
	    }, e.prototype.$off = function (e, t) {
	      var n = this;if (!arguments.length) return n._events = Object.create(null), n;var r = n._events[e];if (!r) return n;if (1 === arguments.length) return n._events[e] = null, n;for (var i, o = r.length; o--;) {
	        if (i = r[o], i === t || i.fn === t) {
	          r.splice(o, 1);break;
	        }
	      }return n;
	    }, e.prototype.$emit = function (e) {
	      var t = this,
	          n = t._events[e];if (n) {
	        n = n.length > 1 ? c(n) : n;for (var r = c(arguments, 1), i = 0, o = n.length; i < o; i++) {
	          n[i].apply(t, r);
	        }
	      }return t;
	    };
	  }function De(e) {
	    e.prototype._init = function (e) {
	      var t = this;t._uid = Pi++, t._isVue = !0, e && e._isComponent ? Me(t, e) : t.$options = M(Pe(t.constructor), e || {}, t), t._renderProxy = t, t._self = t, de(t), Ne(t), ve(t, "beforeCreate"), K(t), ve(t, "created"), Te(t);
	    };
	  }function Me(e, t) {
	    var n = e.$options = Object.create(e.constructor.options);n.parent = t.parent, n.propsData = t.propsData, n._parentVnode = t._parentVnode, n._parentListeners = t._parentListeners, n._renderChildren = t._renderChildren, n._componentTag = t._componentTag, t.render && (n.render = t.render, n.staticRenderFns = t.staticRenderFns);
	  }function Pe(e) {
	    var t = e.options;if (e.super) {
	      var n = e.super.options,
	          r = e.superOptions,
	          i = e.extendOptions;n !== r && (e.superOptions = n, i.render = t.render, i.staticRenderFns = t.staticRenderFns, i._scopeId = t._scopeId, t = e.options = M(n, i), t.name && (t.components[t.name] = e));
	    }return t;
	  }function Re(e) {
	    this._init(e);
	  }function Ie(e) {
	    e.use = function (e) {
	      if (!e.installed) {
	        var t = c(arguments, 1);return t.unshift(this), "function" == typeof e.install ? e.install.apply(e, t) : e.apply(null, t), e.installed = !0, this;
	      }
	    };
	  }function Fe(e) {
	    e.mixin = function (e) {
	      this.options = M(this.options, e);
	    };
	  }function Be(e) {
	    e.cid = 0;var t = 1;e.extend = function (e) {
	      e = e || {};var n = this,
	          r = n.cid,
	          i = e._Ctor || (e._Ctor = {});if (i[r]) return i[r];var o = e.name || n.options.name,
	          a = function a(e) {
	        this._init(e);
	      };return a.prototype = Object.create(n.prototype), a.prototype.constructor = a, a.cid = t++, a.options = M(n.options, e), a.super = n, a.extend = n.extend, a.mixin = n.mixin, a.use = n.use, li._assetTypes.forEach(function (e) {
	        a[e] = n[e];
	      }), o && (a.options.components[o] = a), a.superOptions = n.options, a.extendOptions = e, i[r] = a, a;
	    };
	  }function Ue(e) {
	    li._assetTypes.forEach(function (t) {
	      e[t] = function (e, n) {
	        return n ? ("component" === t && f(n) && (n.name = n.name || e, n = this.options._base.extend(n)), "directive" === t && "function" == typeof n && (n = { bind: n, update: n }), this.options[t + "s"][e] = n, n) : this.options[t + "s"][e];
	      };
	    });
	  }function He(e, t) {
	    return "string" == typeof e ? e.split(",").indexOf(t) > -1 : e.test(t);
	  }function Ve(e) {
	    var t = {};t.get = function () {
	      return li;
	    }, Object.defineProperty(e, "config", t), e.util = $i, e.set = O, e.delete = S, e.nextTick = si, e.options = Object.create(null), li._assetTypes.forEach(function (t) {
	      e.options[t + "s"] = Object.create(null);
	    }), e.options._base = e, l(e.options.components, Fi), Ie(e), Fe(e), Be(e), Ue(e);
	  }function ze(e) {
	    for (var t = e.data, n = e, r = e; r.child;) {
	      r = r.child._vnode, r.data && (t = Je(r.data, t));
	    }for (; n = n.parent;) {
	      n.data && (t = Je(t, n.data));
	    }return Ke(t);
	  }function Je(e, t) {
	    return { staticClass: qe(e.staticClass, t.staticClass), class: e.class ? [e.class, t.class] : t.class };
	  }function Ke(e) {
	    var t = e.class,
	        n = e.staticClass;return n || t ? qe(n, We(t)) : "";
	  }function qe(e, t) {
	    return e ? t ? e + " " + t : e : t || "";
	  }function We(e) {
	    var t = "";if (!e) return t;if ("string" == typeof e) return e;if (Array.isArray(e)) {
	      for (var n, r = 0, i = e.length; r < i; r++) {
	        e[r] && (n = We(e[r])) && (t += n + " ");
	      }return t.slice(0, -1);
	    }if (u(e)) {
	      for (var o in e) {
	        e[o] && (t += o + " ");
	      }return t.slice(0, -1);
	    }return t;
	  }function Ze(e) {
	    return Xi(e) ? "svg" : "math" === e ? "math" : void 0;
	  }function Ge(e) {
	    if (!Qr) return !0;if (to(e)) return !1;if (e = e.toLowerCase(), null != no[e]) return no[e];var t = document.createElement(e);return e.indexOf("-") > -1 ? no[e] = t.constructor === window.HTMLUnknownElement || t.constructor === window.HTMLElement : no[e] = /HTMLUnknownElement/.test(t.toString());
	  }function Ye(e) {
	    if ("string" == typeof e) {
	      if (e = document.querySelector(e), !e) return document.createElement("div");
	    }return e;
	  }function Qe(e, t) {
	    var n = document.createElement(e);return "select" !== e ? n : (t.data && t.data.attrs && "multiple" in t.data.attrs && n.setAttribute("multiple", "multiple"), n);
	  }function Xe(e, t) {
	    return document.createElementNS(Wi[e], t);
	  }function et(e) {
	    return document.createTextNode(e);
	  }function tt(e) {
	    return document.createComment(e);
	  }function nt(e, t, n) {
	    e.insertBefore(t, n);
	  }function rt(e, t) {
	    e.removeChild(t);
	  }function it(e, t) {
	    e.appendChild(t);
	  }function ot(e) {
	    return e.parentNode;
	  }function at(e) {
	    return e.nextSibling;
	  }function st(e) {
	    return e.tagName;
	  }function ct(e, t) {
	    e.textContent = t;
	  }function lt(e) {
	    return e.childNodes;
	  }function ut(e, t, n) {
	    e.setAttribute(t, n);
	  }function ft(e, t) {
	    var n = e.data.ref;if (n) {
	      var i = e.context,
	          o = e.child || e.elm,
	          a = i.$refs;t ? Array.isArray(a[n]) ? r(a[n], o) : a[n] === o && (a[n] = void 0) : e.data.refInFor ? Array.isArray(a[n]) && a[n].indexOf(o) < 0 ? a[n].push(o) : a[n] = [o] : a[n] = o;
	    }
	  }function dt(e) {
	    return null == e;
	  }function pt(e) {
	    return null != e;
	  }function vt(e, t) {
	    return e.key === t.key && e.tag === t.tag && e.isComment === t.isComment && !e.data == !t.data;
	  }function ht(e, t, n) {
	    var r,
	        i,
	        o = {};for (r = t; r <= n; ++r) {
	      i = e[r].key, pt(i) && (o[i] = r);
	    }return o;
	  }function mt(e) {
	    function t(e) {
	      return new Ei(x.tagName(e).toLowerCase(), {}, [], void 0, e);
	    }function n(e, t) {
	      function n() {
	        0 === --n.listeners && r(e);
	      }return n.listeners = t, n;
	    }function r(e) {
	      var t = x.parentNode(e);t && x.removeChild(t, e);
	    }function i(e, t, n) {
	      var r,
	          i = e.data;if (e.isRootInsert = !n, pt(i) && (pt(r = i.hook) && pt(r = r.init) && r(e), pt(r = e.child))) return l(e, t), e.elm;var o = e.children,
	          s = e.tag;return pt(s) ? (e.elm = e.ns ? x.createElementNS(e.ns, s) : x.createElement(s, e), u(e), a(e, o, t), pt(i) && c(e, t)) : e.isComment ? e.elm = x.createComment(e.text) : e.elm = x.createTextNode(e.text), e.elm;
	    }function a(e, t, n) {
	      if (Array.isArray(t)) for (var r = 0; r < t.length; ++r) {
	        x.appendChild(e.elm, i(t[r], n, !0));
	      } else o(e.text) && x.appendChild(e.elm, x.createTextNode(e.text));
	    }function s(e) {
	      for (; e.child;) {
	        e = e.child._vnode;
	      }return pt(e.tag);
	    }function c(e, t) {
	      for (var n = 0; n < $.create.length; ++n) {
	        $.create[n](oo, e);
	      }_ = e.data.hook, pt(_) && (_.create && _.create(oo, e), _.insert && t.push(e));
	    }function l(e, t) {
	      e.data.pendingInsert && t.push.apply(t, e.data.pendingInsert), e.elm = e.child.$el, s(e) ? (c(e, t), u(e)) : (ft(e), t.push(e));
	    }function u(e) {
	      var t;pt(t = e.context) && pt(t = t.$options._scopeId) && x.setAttribute(e.elm, t, ""), pt(t = Li) && t !== e.context && pt(t = t.$options._scopeId) && x.setAttribute(e.elm, t, "");
	    }function f(e, t, n, r, o, a) {
	      for (; r <= o; ++r) {
	        x.insertBefore(e, i(n[r], a), t);
	      }
	    }function d(e) {
	      var t,
	          n,
	          r = e.data;if (pt(r)) for (pt(t = r.hook) && pt(t = t.destroy) && t(e), t = 0; t < $.destroy.length; ++t) {
	        $.destroy[t](e);
	      }if (pt(t = e.children)) for (n = 0; n < e.children.length; ++n) {
	        d(e.children[n]);
	      }
	    }function p(e, t, n, r) {
	      for (; n <= r; ++n) {
	        var i = t[n];pt(i) && (pt(i.tag) ? (v(i), d(i)) : x.removeChild(e, i.elm));
	      }
	    }function v(e, t) {
	      if (t || pt(e.data)) {
	        var i = $.remove.length + 1;for (t ? t.listeners += i : t = n(e.elm, i), pt(_ = e.child) && pt(_ = _._vnode) && pt(_.data) && v(_, t), _ = 0; _ < $.remove.length; ++_) {
	          $.remove[_](e, t);
	        }pt(_ = e.data.hook) && pt(_ = _.remove) ? _(e, t) : t();
	      } else r(e.elm);
	    }function h(e, t, n, r, o) {
	      for (var a, s, c, l, u = 0, d = 0, v = t.length - 1, h = t[0], g = t[v], y = n.length - 1, _ = n[0], b = n[y], $ = !o; u <= v && d <= y;) {
	        dt(h) ? h = t[++u] : dt(g) ? g = t[--v] : vt(h, _) ? (m(h, _, r), h = t[++u], _ = n[++d]) : vt(g, b) ? (m(g, b, r), g = t[--v], b = n[--y]) : vt(h, b) ? (m(h, b, r), $ && x.insertBefore(e, h.elm, x.nextSibling(g.elm)), h = t[++u], b = n[--y]) : vt(g, _) ? (m(g, _, r), $ && x.insertBefore(e, g.elm, h.elm), g = t[--v], _ = n[++d]) : (dt(a) && (a = ht(t, u, v)), s = pt(_.key) ? a[_.key] : null, dt(s) ? (x.insertBefore(e, i(_, r), h.elm), _ = n[++d]) : (c = t[s], c.tag !== _.tag ? (x.insertBefore(e, i(_, r), h.elm), _ = n[++d]) : (m(c, _, r), t[s] = void 0, $ && x.insertBefore(e, _.elm, h.elm), _ = n[++d])));
	      }u > v ? (l = dt(n[y + 1]) ? null : n[y + 1].elm, f(e, l, n, d, y, r)) : d > y && p(e, t, u, v);
	    }function m(e, t, n, r) {
	      if (e !== t) {
	        if (t.isStatic && e.isStatic && t.key === e.key && (t.isCloned || t.isOnce)) return void (t.elm = e.elm);var i,
	            o = t.data,
	            a = pt(o);a && pt(i = o.hook) && pt(i = i.prepatch) && i(e, t);var c = t.elm = e.elm,
	            l = e.children,
	            u = t.children;if (a && s(t)) {
	          for (i = 0; i < $.update.length; ++i) {
	            $.update[i](e, t);
	          }pt(i = o.hook) && pt(i = i.update) && i(e, t);
	        }dt(t.text) ? pt(l) && pt(u) ? l !== u && h(c, l, u, n, r) : pt(u) ? (pt(e.text) && x.setTextContent(c, ""), f(c, null, u, 0, u.length - 1, n)) : pt(l) ? p(c, l, 0, l.length - 1) : pt(e.text) && x.setTextContent(c, "") : e.text !== t.text && x.setTextContent(c, t.text), a && pt(i = o.hook) && pt(i = i.postpatch) && i(e, t);
	      }
	    }function g(e, t, n) {
	      if (n && e.parent) e.parent.data.pendingInsert = t;else for (var r = 0; r < t.length; ++r) {
	        t[r].data.hook.insert(t[r]);
	      }
	    }function y(e, t, n) {
	      t.elm = e;var r = t.tag,
	          i = t.data,
	          o = t.children;if (pt(i) && (pt(_ = i.hook) && pt(_ = _.init) && _(t, !0), pt(_ = t.child))) return l(t, n), !0;if (pt(r)) {
	        if (pt(o)) {
	          var s = x.childNodes(e);if (s.length) {
	            var u = !0;if (s.length !== o.length) u = !1;else for (var f = 0; f < o.length; f++) {
	              if (!y(s[f], o[f], n)) {
	                u = !1;break;
	              }
	            }if (!u) return !1;
	          } else a(t, o, n);
	        }pt(i) && c(t, n);
	      }return !0;
	    }var _,
	        b,
	        $ = {},
	        w = e.modules,
	        x = e.nodeOps;for (_ = 0; _ < ao.length; ++_) {
	      for ($[ao[_]] = [], b = 0; b < w.length; ++b) {
	        void 0 !== w[b][ao[_]] && $[ao[_]].push(w[b][ao[_]]);
	      }
	    }return function (e, n, r, o) {
	      if (!n) return void (e && d(e));var a,
	          c,
	          l = !1,
	          u = [];if (e) {
	        var f = pt(e.nodeType);if (!f && vt(e, n)) m(e, n, u, o);else {
	          if (f) {
	            if (1 === e.nodeType && e.hasAttribute("server-rendered") && (e.removeAttribute("server-rendered"), r = !0), r && y(e, n, u)) return g(n, u, !0), e;e = t(e);
	          }if (a = e.elm, c = x.parentNode(a), i(n, u), n.parent && (n.parent.elm = n.elm, s(n))) for (var v = 0; v < $.create.length; ++v) {
	            $.create[v](oo, n.parent);
	          }null !== c ? (x.insertBefore(c, n.elm, x.nextSibling(a)), p(c, [e], 0, 0)) : pt(e.tag) && d(e);
	        }
	      } else l = !0, i(n, u);return g(n, u, l), n.elm;
	    };
	  }function gt(e, t) {
	    if (e.data.directives || t.data.directives) {
	      var n,
	          r,
	          i,
	          o = e === oo,
	          a = yt(e.data.directives, e.context),
	          s = yt(t.data.directives, t.context),
	          c = [],
	          l = [];for (n in s) {
	        r = a[n], i = s[n], r ? (i.oldValue = r.value, bt(i, "update", t, e), i.def && i.def.componentUpdated && l.push(i)) : (bt(i, "bind", t, e), i.def && i.def.inserted && c.push(i));
	      }if (c.length) {
	        var u = function u() {
	          c.forEach(function (n) {
	            bt(n, "inserted", t, e);
	          });
	        };o ? ie(t.data.hook || (t.data.hook = {}), "insert", u, "dir-insert") : u();
	      }if (l.length && ie(t.data.hook || (t.data.hook = {}), "postpatch", function () {
	        l.forEach(function (n) {
	          bt(n, "componentUpdated", t, e);
	        });
	      }, "dir-postpatch"), !o) for (n in a) {
	        s[n] || bt(a[n], "unbind", e);
	      }
	    }
	  }function yt(e, t) {
	    var n = Object.create(null);if (!e) return n;var r, i;for (r = 0; r < e.length; r++) {
	      i = e[r], i.modifiers || (i.modifiers = co), n[_t(i)] = i, i.def = P(t.$options, "directives", i.name, !0);
	    }return n;
	  }function _t(e) {
	    return e.rawName || e.name + "." + Object.keys(e.modifiers || {}).join(".");
	  }function bt(e, t, n, r) {
	    var i = e.def && e.def[t];i && i(n.elm, e, n, r);
	  }function $t(e, t) {
	    if (e.data.attrs || t.data.attrs) {
	      var n,
	          r,
	          i,
	          o = t.elm,
	          a = e.data.attrs || {},
	          s = t.data.attrs || {};s.__ob__ && (s = t.data.attrs = l({}, s));for (n in s) {
	        r = s[n], i = a[n], i !== r && wt(o, n, r);
	      }for (n in a) {
	        null == s[n] && (Ji(n) ? o.removeAttributeNS(zi, Ki(n)) : Hi(n) || o.removeAttribute(n));
	      }
	    }
	  }function wt(e, t, n) {
	    Vi(t) ? qi(n) ? e.removeAttribute(t) : e.setAttribute(t, t) : Hi(t) ? e.setAttribute(t, qi(n) || "false" === n ? "false" : "true") : Ji(t) ? qi(n) ? e.removeAttributeNS(zi, Ki(t)) : e.setAttributeNS(zi, t, n) : qi(n) ? e.removeAttribute(t) : e.setAttribute(t, n);
	  }function xt(e, t) {
	    var n = t.elm,
	        r = t.data,
	        i = e.data;if (r.staticClass || r.class || i && (i.staticClass || i.class)) {
	      var o = ze(t),
	          a = n._transitionClasses;a && (o = qe(o, We(a))), o !== n._prevClass && (n.setAttribute("class", o), n._prevClass = o);
	    }
	  }function Ct(e, t) {
	    if (e.data.on || t.data.on) {
	      var n = t.data.on || {},
	          r = e.data.on || {},
	          i = t.elm._v_add || (t.elm._v_add = function (e, n, r) {
	        t.elm.addEventListener(e, n, r);
	      }),
	          o = t.elm._v_remove || (t.elm._v_remove = function (e, n) {
	        t.elm.removeEventListener(e, n);
	      });oe(n, r, i, o, t.context);
	    }
	  }function kt(e, t) {
	    if (e.data.domProps || t.data.domProps) {
	      var n,
	          r,
	          i = t.elm,
	          o = e.data.domProps || {},
	          a = t.data.domProps || {};a.__ob__ && (a = t.data.domProps = l({}, a));for (n in o) {
	        null == a[n] && (i[n] = "");
	      }for (n in a) {
	        if (r = a[n], "textContent" !== n && "innerHTML" !== n || (t.children && (t.children.length = 0), r !== o[n])) if ("value" === n) {
	          i._value = r;var s = null == r ? "" : String(r);i.value === s || i.composing || (i.value = s);
	        } else i[n] = r;
	      }
	    }
	  }function At(e) {
	    var t = Ot(e.style);return e.staticStyle ? l(e.staticStyle, t) : t;
	  }function Ot(e) {
	    return Array.isArray(e) ? d(e) : "string" == typeof e ? ho(e) : e;
	  }function St(e, t) {
	    var n,
	        r = {};if (t) for (var i = e; i.child;) {
	      i = i.child._vnode, i.data && (n = At(i.data)) && l(r, n);
	    }(n = At(e.data)) && l(r, n);for (var o = e; o = o.parent;) {
	      o.data && (n = At(o.data)) && l(r, n);
	    }return r;
	  }function Tt(e, t) {
	    var n = t.data,
	        r = e.data;if (n.staticStyle || n.style || r.staticStyle || r.style) {
	      var i,
	          o,
	          a = t.elm,
	          s = e.data.staticStyle,
	          c = e.data.style || {},
	          u = s || c,
	          f = Ot(t.data.style) || {};t.data.style = f.__ob__ ? l({}, f) : f;var d = St(t, !0);for (o in u) {
	        null == d[o] && go(a, o, "");
	      }for (o in d) {
	        i = d[o], i !== u[o] && go(a, o, null == i ? "" : i);
	      }
	    }
	  }function jt(e, t) {
	    if (t && t.trim()) if (e.classList) t.indexOf(" ") > -1 ? t.split(/\s+/).forEach(function (t) {
	      return e.classList.add(t);
	    }) : e.classList.add(t);else {
	      var n = " " + e.getAttribute("class") + " ";n.indexOf(" " + t + " ") < 0 && e.setAttribute("class", (n + t).trim());
	    }
	  }function Et(e, t) {
	    if (t && t.trim()) if (e.classList) t.indexOf(" ") > -1 ? t.split(/\s+/).forEach(function (t) {
	      return e.classList.remove(t);
	    }) : e.classList.remove(t);else {
	      for (var n = " " + e.getAttribute("class") + " ", r = " " + t + " "; n.indexOf(r) >= 0;) {
	        n = n.replace(r, " ");
	      }e.setAttribute("class", n.trim());
	    }
	  }function Nt(e) {
	    So(function () {
	      So(e);
	    });
	  }function Lt(e, t) {
	    (e._transitionClasses || (e._transitionClasses = [])).push(t), jt(e, t);
	  }function Dt(e, t) {
	    e._transitionClasses && r(e._transitionClasses, t), Et(e, t);
	  }function Mt(e, t, n) {
	    var r = Pt(e, t),
	        i = r.type,
	        o = r.timeout,
	        a = r.propCount;if (!i) return n();var s = i === wo ? ko : Oo,
	        c = 0,
	        l = function l() {
	      e.removeEventListener(s, u), n();
	    },
	        u = function u(t) {
	      t.target === e && ++c >= a && l();
	    };setTimeout(function () {
	      c < a && l();
	    }, o + 1), e.addEventListener(s, u);
	  }function Pt(e, t) {
	    var n,
	        r = window.getComputedStyle(e),
	        i = r[Co + "Delay"].split(", "),
	        o = r[Co + "Duration"].split(", "),
	        a = Rt(i, o),
	        s = r[Ao + "Delay"].split(", "),
	        c = r[Ao + "Duration"].split(", "),
	        l = Rt(s, c),
	        u = 0,
	        f = 0;t === wo ? a > 0 && (n = wo, u = a, f = o.length) : t === xo ? l > 0 && (n = xo, u = l, f = c.length) : (u = Math.max(a, l), n = u > 0 ? a > l ? wo : xo : null, f = n ? n === wo ? o.length : c.length : 0);var d = n === wo && To.test(r[Co + "Property"]);return { type: n, timeout: u, propCount: f, hasTransform: d };
	  }function Rt(e, t) {
	    for (; e.length < t.length;) {
	      e = e.concat(e);
	    }return Math.max.apply(null, t.map(function (t, n) {
	      return It(t) + It(e[n]);
	    }));
	  }function It(e) {
	    return 1e3 * Number(e.slice(0, -1));
	  }function Ft(e) {
	    var t = e.elm;t._leaveCb && (t._leaveCb.cancelled = !0, t._leaveCb());var n = Ut(e.data.transition);if (n && !t._enterCb && 1 === t.nodeType) {
	      var r = n.css,
	          i = n.type,
	          o = n.enterClass,
	          a = n.enterActiveClass,
	          s = n.appearClass,
	          c = n.appearActiveClass,
	          l = n.beforeEnter,
	          u = n.enter,
	          f = n.afterEnter,
	          d = n.enterCancelled,
	          p = n.beforeAppear,
	          v = n.appear,
	          h = n.afterAppear,
	          m = n.appearCancelled,
	          g = Li.$vnode,
	          y = g && g.parent ? g.parent.context : Li,
	          _ = !y._isMounted || !e.isRootInsert;if (!_ || v || "" === v) {
	        var b = _ ? s : o,
	            $ = _ ? c : a,
	            w = _ ? p || l : l,
	            x = _ && "function" == typeof v ? v : u,
	            C = _ ? h || f : f,
	            k = _ ? m || d : d,
	            A = r !== !1 && !ti,
	            O = x && (x._length || x.length) > 1,
	            S = t._enterCb = Ht(function () {
	          A && Dt(t, $), S.cancelled ? (A && Dt(t, b), k && k(t)) : C && C(t), t._enterCb = null;
	        });e.data.show || ie(e.data.hook || (e.data.hook = {}), "insert", function () {
	          var n = t.parentNode,
	              r = n && n._pending && n._pending[e.key];r && r.tag === e.tag && r.elm._leaveCb && r.elm._leaveCb(), x && x(t, S);
	        }, "transition-insert"), w && w(t), A && (Lt(t, b), Lt(t, $), Nt(function () {
	          Dt(t, b), S.cancelled || O || Mt(t, i, S);
	        })), e.data.show && x && x(t, S), A || O || S();
	      }
	    }
	  }function Bt(e, t) {
	    function n() {
	      m.cancelled || (e.data.show || ((r.parentNode._pending || (r.parentNode._pending = {}))[e.key] = e), l && l(r), v && (Lt(r, s), Lt(r, c), Nt(function () {
	        Dt(r, s), m.cancelled || h || Mt(r, a, m);
	      })), u && u(r, m), v || h || m());
	    }var r = e.elm;r._enterCb && (r._enterCb.cancelled = !0, r._enterCb());var i = Ut(e.data.transition);if (!i) return t();if (!r._leaveCb && 1 === r.nodeType) {
	      var o = i.css,
	          a = i.type,
	          s = i.leaveClass,
	          c = i.leaveActiveClass,
	          l = i.beforeLeave,
	          u = i.leave,
	          f = i.afterLeave,
	          d = i.leaveCancelled,
	          p = i.delayLeave,
	          v = o !== !1 && !ti,
	          h = u && (u._length || u.length) > 1,
	          m = r._leaveCb = Ht(function () {
	        r.parentNode && r.parentNode._pending && (r.parentNode._pending[e.key] = null), v && Dt(r, c), m.cancelled ? (v && Dt(r, s), d && d(r)) : (t(), f && f(r)), r._leaveCb = null;
	      });p ? p(n) : n();
	    }
	  }function Ut(e) {
	    if (e) {
	      if ("object" == (typeof e === "undefined" ? "undefined" : _typeof(e))) {
	        var t = {};return e.css !== !1 && l(t, jo(e.name || "v")), l(t, e), t;
	      }return "string" == typeof e ? jo(e) : void 0;
	    }
	  }function Ht(e) {
	    var t = !1;return function () {
	      t || (t = !0, e());
	    };
	  }function Vt(e, t, n) {
	    var r = t.value,
	        i = e.multiple;if (!i || Array.isArray(r)) {
	      for (var o, a, s = 0, c = e.options.length; s < c; s++) {
	        if (a = e.options[s], i) o = m(r, Jt(a)) > -1, a.selected !== o && (a.selected = o);else if (h(Jt(a), r)) return void (e.selectedIndex !== s && (e.selectedIndex = s));
	      }i || (e.selectedIndex = -1);
	    }
	  }function zt(e, t) {
	    for (var n = 0, r = t.length; n < r; n++) {
	      if (h(Jt(t[n]), e)) return !1;
	    }return !0;
	  }function Jt(e) {
	    return "_value" in e ? e._value : e.value;
	  }function Kt(e) {
	    e.target.composing = !0;
	  }function qt(e) {
	    e.target.composing = !1, Wt(e.target, "input");
	  }function Wt(e, t) {
	    var n = document.createEvent("HTMLEvents");n.initEvent(t, !0, !0), e.dispatchEvent(n);
	  }function Zt(e) {
	    return !e.child || e.data && e.data.transition ? e : Zt(e.child._vnode);
	  }function Gt(e) {
	    var t = e && e.componentOptions;return t && t.Ctor.options.abstract ? Gt(fe(t.children)) : e;
	  }function Yt(e) {
	    var t = {},
	        n = e.$options;for (var r in n.propsData) {
	      t[r] = e[r];
	    }var i = n._parentListeners;for (var o in i) {
	      t[Vr(o)] = i[o].fn;
	    }return t;
	  }function Qt(e, t) {
	    return (/\d-keep-alive$/.test(t.tag) ? e("keep-alive") : null
	    );
	  }function Xt(e) {
	    for (; e = e.parent;) {
	      if (e.data.transition) return !0;
	    }
	  }function en(e) {
	    e.elm._moveCb && e.elm._moveCb(), e.elm._enterCb && e.elm._enterCb();
	  }function tn(e) {
	    e.data.newPos = e.elm.getBoundingClientRect();
	  }function nn(e) {
	    var t = e.data.pos,
	        n = e.data.newPos,
	        r = t.left - n.left,
	        i = t.top - n.top;if (r || i) {
	      e.data.moved = !0;var o = e.elm.style;o.transform = o.WebkitTransform = "translate(" + r + "px," + i + "px)", o.transitionDuration = "0s";
	    }
	  }function rn(e, t) {
	    var n = document.createElement("div");return n.innerHTML = '<div a="' + e + '">', n.innerHTML.indexOf(t) > 0;
	  }function on(e) {
	    return Vo = Vo || document.createElement("div"), Vo.innerHTML = e, Vo.textContent;
	  }function an(e, t) {
	    return t && (e = e.replace(Da, "\n")), e.replace(Na, "<").replace(La, ">").replace(Ma, "&").replace(Pa, '"');
	  }function sn(e, t) {
	    function n(t) {
	      f += t, e = e.substring(t);
	    }function r() {
	      var t = e.match(Yo);if (t) {
	        var r = { tagName: t[1], attrs: [], start: f };n(t[0].length);for (var i, o; !(i = e.match(Qo)) && (o = e.match(Wo));) {
	          n(o[0].length), r.attrs.push(o);
	        }if (i) return r.unarySlash = i[1], n(i[0].length), r.end = f, r;
	      }
	    }function i(e) {
	      var n = e.tagName,
	          r = e.unarySlash;l && ("p" === s && Qi(n) && o("", s), Yi(n) && s === n && o("", n));for (var i = u(n) || "html" === n && "head" === s || !!r, a = e.attrs.length, f = new Array(a), d = 0; d < a; d++) {
	        var p = e.attrs[d];ra && p[0].indexOf('""') === -1 && ("" === p[3] && delete p[3], "" === p[4] && delete p[4], "" === p[5] && delete p[5]);var v = p[3] || p[4] || p[5] || "";f[d] = { name: p[1], value: an(v, t.shouldDecodeNewlines) };
	      }i || (c.push({ tag: n, attrs: f }), s = n, r = ""), t.start && t.start(n, f, i, e.start, e.end);
	    }function o(e, n, r, i) {
	      var o;if (null == r && (r = f), null == i && (i = f), n) {
	        var a = n.toLowerCase();for (o = c.length - 1; o >= 0 && c[o].tag.toLowerCase() !== a; o--) {}
	      } else o = 0;if (o >= 0) {
	        for (var l = c.length - 1; l >= o; l--) {
	          t.end && t.end(c[l].tag, r, i);
	        }c.length = o, s = o && c[o - 1].tag;
	      } else "br" === n.toLowerCase() ? t.start && t.start(n, [], !0, r, i) : "p" === n.toLowerCase() && (t.start && t.start(n, [], !1, r, i), t.end && t.end(n, r, i));
	    }for (var a, s, c = [], l = t.expectHTML, u = t.isUnaryTag || Zr, f = 0; e;) {
	      if (a = e, s && ja(s, t.sfc, c)) {
	        var d = s.toLowerCase(),
	            p = Ea[d] || (Ea[d] = new RegExp("([\\s\\S]*?)(</" + d + "[^>]*>)", "i")),
	            v = 0,
	            h = e.replace(p, function (e, n, r) {
	          return v = r.length, "script" !== d && "style" !== d && "noscript" !== d && (n = n.replace(/<!--([\s\S]*?)-->/g, "$1").replace(/<!\[CDATA\[([\s\S]*?)]]>/g, "$1")), t.chars && t.chars(n), "";
	        });f += e.length - h.length, e = h, o("</" + d + ">", d, f - v, f);
	      } else {
	        var m = e.indexOf("<");if (0 === m) {
	          if (ta.test(e)) {
	            var g = e.indexOf("-->");if (g >= 0) {
	              n(g + 3);continue;
	            }
	          }if (na.test(e)) {
	            var y = e.indexOf("]>");if (y >= 0) {
	              n(y + 2);continue;
	            }
	          }var _ = e.match(ea);if (_) {
	            n(_[0].length);continue;
	          }var b = e.match(Xo);if (b) {
	            var $ = f;n(b[0].length), o(b[0], b[1], $, f);continue;
	          }var w = r();if (w) {
	            i(w);continue;
	          }
	        }var x = void 0,
	            C = void 0,
	            k = void 0;if (m > 0) {
	          for (C = e.slice(m); !(Xo.test(C) || Yo.test(C) || ta.test(C) || na.test(C) || (k = C.indexOf("<", 1), k < 0));) {
	            m += k, C = e.slice(m);
	          }x = e.substring(0, m), n(m);
	        }m < 0 && (x = e, e = ""), t.chars && x && t.chars(x);
	      }if (e === a && t.chars) {
	        t.chars(e);break;
	      }
	    }o();
	  }function cn(e) {
	    function t() {
	      (a || (a = [])).push(e.slice(v, i).trim()), v = i + 1;
	    }var n,
	        r,
	        i,
	        o,
	        a,
	        s = !1,
	        c = !1,
	        l = !1,
	        u = !1,
	        f = 0,
	        d = 0,
	        p = 0,
	        v = 0;for (i = 0; i < e.length; i++) {
	      if (r = n, n = e.charCodeAt(i), s) 39 === n && 92 !== r && (s = !1);else if (c) 34 === n && 92 !== r && (c = !1);else if (l) 96 === n && 92 !== r && (l = !1);else if (u) 47 === n && 92 !== r && (u = !1);else if (124 !== n || 124 === e.charCodeAt(i + 1) || 124 === e.charCodeAt(i - 1) || f || d || p) switch (n) {case 34:
	          c = !0;break;case 39:
	          s = !0;break;case 96:
	          l = !0;break;case 47:
	          u = !0;break;case 40:
	          p++;break;case 41:
	          p--;break;case 91:
	          d++;break;case 93:
	          d--;break;case 123:
	          f++;break;case 125:
	          f--;} else void 0 === o ? (v = i + 1, o = e.slice(0, i).trim()) : t();
	    }if (void 0 === o ? o = e.slice(0, i).trim() : 0 !== v && t(), a) for (i = 0; i < a.length; i++) {
	      o = ln(o, a[i]);
	    }return o;
	  }function ln(e, t) {
	    var n = t.indexOf("(");if (n < 0) return '_f("' + t + '")(' + e + ")";var r = t.slice(0, n),
	        i = t.slice(n + 1);return '_f("' + r + '")(' + e + "," + i;
	  }function un(e, t) {
	    var n = t ? Fa(t) : Ra;if (n.test(e)) {
	      for (var r, i, o = [], a = n.lastIndex = 0; r = n.exec(e);) {
	        i = r.index, i > a && o.push(JSON.stringify(e.slice(a, i)));var s = cn(r[1].trim());o.push("_s(" + s + ")"), a = i + r[0].length;
	      }return a < e.length && o.push(JSON.stringify(e.slice(a))), o.join("+");
	    }
	  }function fn(e) {
	    console.error("[Vue parser]: " + e);
	  }function dn(e, t) {
	    return e ? e.map(function (e) {
	      return e[t];
	    }).filter(function (e) {
	      return e;
	    }) : [];
	  }function pn(e, t, n) {
	    (e.props || (e.props = [])).push({ name: t, value: n });
	  }function vn(e, t, n) {
	    (e.attrs || (e.attrs = [])).push({ name: t, value: n });
	  }function hn(e, t, n, r, i, o) {
	    (e.directives || (e.directives = [])).push({ name: t, rawName: n, value: r, arg: i, modifiers: o });
	  }function mn(e, t, n, r, i) {
	    r && r.capture && (delete r.capture, t = "!" + t);var o;r && r.native ? (delete r.native, o = e.nativeEvents || (e.nativeEvents = {})) : o = e.events || (e.events = {});var a = { value: n, modifiers: r },
	        s = o[t];Array.isArray(s) ? i ? s.unshift(a) : s.push(a) : s ? o[t] = i ? [a, s] : [s, a] : o[t] = a;
	  }function gn(e, t, n) {
	    var r = yn(e, ":" + t) || yn(e, "v-bind:" + t);if (null != r) return cn(r);if (n !== !1) {
	      var i = yn(e, t);if (null != i) return JSON.stringify(i);
	    }
	  }function yn(e, t) {
	    var n;if (null != (n = e.attrsMap[t])) for (var r = e.attrsList, i = 0, o = r.length; i < o; i++) {
	      if (r[i].name === t) {
	        r.splice(i, 1);break;
	      }
	    }return n;
	  }function _n(e) {
	    if (oa = e, ia = oa.length, sa = ca = la = 0, e.indexOf("[") < 0 || e.lastIndexOf("]") < ia - 1) return { exp: e, idx: null };for (; !$n();) {
	      aa = bn(), wn(aa) ? Cn(aa) : 91 === aa && xn(aa);
	    }return { exp: e.substring(0, ca), idx: e.substring(ca + 1, la) };
	  }function bn() {
	    return oa.charCodeAt(++sa);
	  }function $n() {
	    return sa >= ia;
	  }function wn(e) {
	    return 34 === e || 39 === e;
	  }function xn(e) {
	    var t = 1;for (ca = sa; !$n();) {
	      if (e = bn(), wn(e)) Cn(e);else if (91 === e && t++, 93 === e && t--, 0 === t) {
	        la = sa;break;
	      }
	    }
	  }function Cn(e) {
	    for (var t = e; !$n() && (e = bn(), e !== t);) {}
	  }function kn(e, t) {
	    ua = t.warn || fn, fa = t.getTagNamespace || Zr, da = t.mustUseProp || Zr, pa = t.isPreTag || Zr, va = dn(t.modules, "preTransformNode"), ha = dn(t.modules, "transformNode"), ma = dn(t.modules, "postTransformNode"), ga = t.delimiters;var n,
	        r,
	        i = [],
	        o = t.preserveWhitespace !== !1,
	        a = !1,
	        s = !1;return sn(e, { expectHTML: t.expectHTML, isUnaryTag: t.isUnaryTag, shouldDecodeNewlines: t.shouldDecodeNewlines, start: function start(e, o, c) {
	        function l(e) {}var u = r && r.ns || fa(e);ei && "svg" === u && (o = Vn(o));var f = { type: 1, tag: e, attrsList: o, attrsMap: Bn(o), parent: r, children: [] };u && (f.ns = u), Hn(f) && !oi() && (f.forbidden = !0);for (var d = 0; d < va.length; d++) {
	          va[d](f, t);
	        }if (a || (An(f), f.pre && (a = !0)), pa(f.tag) && (s = !0), a) On(f);else {
	          jn(f), En(f), Dn(f), Sn(f), f.plain = !f.key && !o.length, Tn(f), Mn(f), Pn(f);for (var p = 0; p < ha.length; p++) {
	            ha[p](f, t);
	          }Rn(f);
	        }if (n ? i.length || n.if && (f.elseif || f.else) && (l(f), Ln(n, { exp: f.elseif, block: f })) : (n = f, l(n)), r && !f.forbidden) if (f.elseif || f.else) Nn(f, r);else if (f.slotScope) {
	          r.plain = !1;var v = f.slotTarget || "default";(r.scopedSlots || (r.scopedSlots = {}))[v] = f;
	        } else r.children.push(f), f.parent = r;c || (r = f, i.push(f));for (var h = 0; h < ma.length; h++) {
	          ma[h](f, t);
	        }
	      }, end: function end() {
	        var e = i[i.length - 1],
	            t = e.children[e.children.length - 1];t && 3 === t.type && " " === t.text && e.children.pop(), i.length -= 1, r = i[i.length - 1], e.pre && (a = !1), pa(e.tag) && (s = !1);
	      }, chars: function chars(e) {
	        if (r && (!ei || "textarea" !== r.tag || r.attrsMap.placeholder !== e) && (e = s || e.trim() ? qa(e) : o && r.children.length ? " " : "")) {
	          var t;!a && " " !== e && (t = un(e, ga)) ? r.children.push({ type: 2, expression: t, text: e }) : r.children.push({ type: 3, text: e });
	        }
	      } }), n;
	  }function An(e) {
	    null != yn(e, "v-pre") && (e.pre = !0);
	  }function On(e) {
	    var t = e.attrsList.length;if (t) for (var n = e.attrs = new Array(t), r = 0; r < t; r++) {
	      n[r] = { name: e.attrsList[r].name, value: JSON.stringify(e.attrsList[r].value) };
	    } else e.pre || (e.plain = !0);
	  }function Sn(e) {
	    var t = gn(e, "key");t && (e.key = t);
	  }function Tn(e) {
	    var t = gn(e, "ref");t && (e.ref = t, e.refInFor = In(e));
	  }function jn(e) {
	    var t;if (t = yn(e, "v-for")) {
	      var n = t.match(Ua);if (!n) return;e.for = n[2].trim();var r = n[1].trim(),
	          i = r.match(Ha);i ? (e.alias = i[1].trim(), e.iterator1 = i[2].trim(), i[3] && (e.iterator2 = i[3].trim())) : e.alias = r;
	    }
	  }function En(e) {
	    var t = yn(e, "v-if");if (t) e.if = t, Ln(e, { exp: t, block: e });else {
	      null != yn(e, "v-else") && (e.else = !0);var n = yn(e, "v-else-if");n && (e.elseif = n);
	    }
	  }function Nn(e, t) {
	    var n = Un(t.children);n && n.if && Ln(n, { exp: e.elseif, block: e });
	  }function Ln(e, t) {
	    e.conditions || (e.conditions = []), e.conditions.push(t);
	  }function Dn(e) {
	    var t = yn(e, "v-once");null != t && (e.once = !0);
	  }function Mn(e) {
	    if ("slot" === e.tag) e.slotName = gn(e, "name");else {
	      var t = gn(e, "slot");t && (e.slotTarget = '""' === t ? '"default"' : t), "template" === e.tag && (e.slotScope = yn(e, "scope"));
	    }
	  }function Pn(e) {
	    var t;(t = gn(e, "is")) && (e.component = t), null != yn(e, "inline-template") && (e.inlineTemplate = !0);
	  }function Rn(e) {
	    var t,
	        n,
	        r,
	        i,
	        o,
	        a,
	        s,
	        c,
	        l = e.attrsList;for (t = 0, n = l.length; t < n; t++) {
	      if (r = i = l[t].name, o = l[t].value, Ba.test(r)) {
	        if (e.hasBindings = !0, s = Fn(r), s && (r = r.replace(Ka, "")), Va.test(r)) r = r.replace(Va, ""), o = cn(o), s && (s.prop && (c = !0, r = Vr(r), "innerHtml" === r && (r = "innerHTML")), s.camel && (r = Vr(r))), c || da(e.tag, r) ? pn(e, r, o) : vn(e, r, o);else if (za.test(r)) r = r.replace(za, ""), mn(e, r, o, s);else {
	          r = r.replace(Ba, "");var u = r.match(Ja);u && (a = u[1]) && (r = r.slice(0, -(a.length + 1))), hn(e, r, i, o, a, s);
	        }
	      } else vn(e, r, JSON.stringify(o));
	    }
	  }function In(e) {
	    for (var t = e; t;) {
	      if (void 0 !== t.for) return !0;t = t.parent;
	    }return !1;
	  }function Fn(e) {
	    var t = e.match(Ka);if (t) {
	      var n = {};return t.forEach(function (e) {
	        n[e.slice(1)] = !0;
	      }), n;
	    }
	  }function Bn(e) {
	    for (var t = {}, n = 0, r = e.length; n < r; n++) {
	      t[e[n].name] = e[n].value;
	    }return t;
	  }function Un(e) {
	    for (var t = e.length; t--;) {
	      if (e[t].tag) return e[t];
	    }
	  }function Hn(e) {
	    return "style" === e.tag || "script" === e.tag && (!e.attrsMap.type || "text/javascript" === e.attrsMap.type);
	  }function Vn(e) {
	    for (var t = [], n = 0; n < e.length; n++) {
	      var r = e[n];Wa.test(r.name) || (r.name = r.name.replace(Za, ""), t.push(r));
	    }return t;
	  }function zn(e, t) {
	    e && (ya = Ga(t.staticKeys || ""), _a = t.isReservedTag || function () {
	      return !1;
	    }, Kn(e), qn(e, !1));
	  }function Jn(e) {
	    return n("type,tag,attrsList,attrsMap,plain,parent,children,attrs" + (e ? "," + e : ""));
	  }function Kn(e) {
	    if (e.static = Zn(e), 1 === e.type) {
	      if (!_a(e.tag) && "slot" !== e.tag && null == e.attrsMap["inline-template"]) return;for (var t = 0, n = e.children.length; t < n; t++) {
	        var r = e.children[t];Kn(r), r.static || (e.static = !1);
	      }
	    }
	  }function qn(e, t) {
	    if (1 === e.type) {
	      if ((e.static || e.once) && (e.staticInFor = t), e.static && e.children.length && (1 !== e.children.length || 3 !== e.children[0].type)) return void (e.staticRoot = !0);if (e.staticRoot = !1, e.children) for (var n = 0, r = e.children.length; n < r; n++) {
	        qn(e.children[n], t || !!e.for);
	      }e.conditions && Wn(e.conditions, t);
	    }
	  }function Wn(e, t) {
	    for (var n = 1, r = e.length; n < r; n++) {
	      qn(e[n].block, t);
	    }
	  }function Zn(e) {
	    return 2 !== e.type && (3 === e.type || !(!e.pre && (e.hasBindings || e.if || e.for || Br(e.tag) || !_a(e.tag) || Gn(e) || !Object.keys(e).every(ya))));
	  }function Gn(e) {
	    for (; e.parent;) {
	      if (e = e.parent, "template" !== e.tag) return !1;if (e.for) return !0;
	    }return !1;
	  }function Yn(e, t) {
	    var n = t ? "nativeOn:{" : "on:{";for (var r in e) {
	      n += '"' + r + '":' + Qn(r, e[r]) + ",";
	    }return n.slice(0, -1) + "}";
	  }function Qn(e, t) {
	    if (t) {
	      if (Array.isArray(t)) return "[" + t.map(function (t) {
	        return Qn(e, t);
	      }).join(",") + "]";if (t.modifiers) {
	        var n = "",
	            r = [],
	            i = ts.test(e);for (var o in t.modifiers) {
	          es[o] ? n += es[o] : i && ns[o] ? n += ns[o] : r.push(o);
	        }r.length && (n = Xn(r) + n);var a = Qa.test(t.value) ? t.value + "($event)" : t.value;return "function($event){" + n + a + "}";
	      }return Ya.test(t.value) || Qa.test(t.value) ? t.value : "function($event){" + t.value + "}";
	    }return "function(){}";
	  }function Xn(e) {
	    var t = 1 === e.length ? er(e[0]) : Array.prototype.concat.apply([], e.map(er));return Array.isArray(t) ? "if(" + t.map(function (e) {
	      return "$event.keyCode!==" + e;
	    }).join("&&") + ")return;" : "if($event.keyCode!==" + t + ")return;";
	  }function er(e) {
	    return parseInt(e, 10) || Xa[e] || "_k(" + JSON.stringify(e) + ")";
	  }function tr(e, t) {
	    e.wrapData = function (n) {
	      return "_b(" + n + ",'" + e.tag + "'," + t.value + (t.modifiers && t.modifiers.prop ? ",true" : "") + ")";
	    };
	  }function nr(e, t) {
	    var n = Ca,
	        r = Ca = [],
	        i = ka;ka = 0, Aa = t, ba = t.warn || fn, $a = dn(t.modules, "transformCode"), wa = dn(t.modules, "genData"), xa = t.directives || {};var o = e ? rr(e) : '_h("div")';return Ca = n, ka = i, { render: "with(this){return " + o + "}", staticRenderFns: r };
	  }function rr(e) {
	    if (e.staticRoot && !e.staticProcessed) return ir(e);if (e.once && !e.onceProcessed) return or(e);if (e.for && !e.forProcessed) return cr(e);if (e.if && !e.ifProcessed) return ar(e);if ("template" !== e.tag || e.slotTarget) {
	      if ("slot" === e.tag) return gr(e);var t;if (e.component) t = yr(e.component, e);else {
	        var n = e.plain ? void 0 : lr(e),
	            r = e.inlineTemplate ? null : vr(e);t = "_h('" + e.tag + "'" + (n ? "," + n : "") + (r ? "," + r : "") + ")";
	      }for (var i = 0; i < $a.length; i++) {
	        t = $a[i](e, t);
	      }return t;
	    }return vr(e) || "void 0";
	  }function ir(e) {
	    return e.staticProcessed = !0, Ca.push("with(this){return " + rr(e) + "}"), "_m(" + (Ca.length - 1) + (e.staticInFor ? ",true" : "") + ")";
	  }function or(e) {
	    if (e.onceProcessed = !0, e.if && !e.ifProcessed) return ar(e);if (e.staticInFor) {
	      for (var t = "", n = e.parent; n;) {
	        if (n.for) {
	          t = n.key;break;
	        }n = n.parent;
	      }return t ? "_o(" + rr(e) + "," + ka++ + (t ? "," + t : "") + ")" : rr(e);
	    }return ir(e);
	  }function ar(e) {
	    return e.ifProcessed = !0, sr(e.conditions);
	  }function sr(e) {
	    function t(e) {
	      return e.once ? or(e) : rr(e);
	    }if (!e.length) return "_e()";var n = e.shift();return n.exp ? "(" + n.exp + ")?" + t(n.block) + ":" + sr(e) : "" + t(n.block);
	  }function cr(e) {
	    var t = e.for,
	        n = e.alias,
	        r = e.iterator1 ? "," + e.iterator1 : "",
	        i = e.iterator2 ? "," + e.iterator2 : "";return e.forProcessed = !0, "_l((" + t + "),function(" + n + r + i + "){return " + rr(e) + "})";
	  }function lr(e) {
	    var t = "{",
	        n = ur(e);n && (t += n + ","), e.key && (t += "key:" + e.key + ","), e.ref && (t += "ref:" + e.ref + ","), e.refInFor && (t += "refInFor:true,"), e.component && (t += 'tag:"' + e.tag + '",');for (var r = 0; r < wa.length; r++) {
	      t += wa[r](e);
	    }if (e.attrs && (t += "attrs:{" + _r(e.attrs) + "},"), e.props && (t += "domProps:{" + _r(e.props) + "},"), e.events && (t += Yn(e.events) + ","), e.nativeEvents && (t += Yn(e.nativeEvents, !0) + ","), e.slotTarget && (t += "slot:" + e.slotTarget + ","), e.scopedSlots && (t += dr(e.scopedSlots) + ","), e.inlineTemplate) {
	      var i = fr(e);i && (t += i + ",");
	    }return t = t.replace(/,$/, "") + "}", e.wrapData && (t = e.wrapData(t)), t;
	  }function ur(e) {
	    var t = e.directives;if (t) {
	      var n,
	          r,
	          i,
	          o,
	          a = "directives:[",
	          s = !1;for (n = 0, r = t.length; n < r; n++) {
	        i = t[n], o = !0;var c = xa[i.name] || rs[i.name];c && (o = !!c(e, i, ba)), o && (s = !0, a += '{name:"' + i.name + '",rawName:"' + i.rawName + '"' + (i.value ? ",value:(" + i.value + "),expression:" + JSON.stringify(i.value) : "") + (i.arg ? ',arg:"' + i.arg + '"' : "") + (i.modifiers ? ",modifiers:" + JSON.stringify(i.modifiers) : "") + "},");
	      }return s ? a.slice(0, -1) + "]" : void 0;
	    }
	  }function fr(e) {
	    var t = e.children[0];if (1 === t.type) {
	      var n = nr(t, Aa);return "inlineTemplate:{render:function(){" + n.render + "},staticRenderFns:[" + n.staticRenderFns.map(function (e) {
	        return "function(){" + e + "}";
	      }).join(",") + "]}";
	    }
	  }function dr(e) {
	    return "scopedSlots:{" + Object.keys(e).map(function (t) {
	      return pr(t, e[t]);
	    }).join(",") + "}";
	  }function pr(e, t) {
	    return e + ":function(" + String(t.attrsMap.scope) + "){return " + ("template" === t.tag ? vr(t) || "void 0" : rr(t)) + "}";
	  }function vr(e) {
	    if (e.children.length) return "[" + e.children.map(hr).join(",") + "]";
	  }function hr(e) {
	    return 1 === e.type ? rr(e) : mr(e);
	  }function mr(e) {
	    return 2 === e.type ? e.expression : br(JSON.stringify(e.text));
	  }function gr(e) {
	    var t = e.slotName || '"default"',
	        n = vr(e);return "_t(" + t + (n ? "," + n : "") + (e.attrs ? (n ? "" : ",null") + ",{" + e.attrs.map(function (e) {
	      return Vr(e.name) + ":" + e.value;
	    }).join(",") + "}" : "") + ")";
	  }function yr(e, t) {
	    var n = t.inlineTemplate ? null : vr(t);return "_h(" + e + "," + lr(t) + (n ? "," + n : "") + ")";
	  }function _r(e) {
	    for (var t = "", n = 0; n < e.length; n++) {
	      var r = e[n];t += '"' + r.name + '":' + br(r.value) + ",";
	    }return t.slice(0, -1);
	  }function br(e) {
	    return e.replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029");
	  }function $r(e, t) {
	    var n = kn(e.trim(), t);zn(n, t);var r = nr(n, t);return { ast: n, render: r.render, staticRenderFns: r.staticRenderFns };
	  }function wr(e, t) {
	    var n = (t.warn || fn, yn(e, "class"));n && (e.staticClass = JSON.stringify(n));var r = gn(e, "class", !1);r && (e.classBinding = r);
	  }function xr(e) {
	    var t = "";return e.staticClass && (t += "staticClass:" + e.staticClass + ","), e.classBinding && (t += "class:" + e.classBinding + ","), t;
	  }function Cr(e, t) {
	    var n = (t.warn || fn, yn(e, "style"));n && (e.staticStyle = JSON.stringify(ho(n)));var r = gn(e, "style", !1);r && (e.styleBinding = r);
	  }function kr(e) {
	    var t = "";return e.staticStyle && (t += "staticStyle:" + e.staticStyle + ","), e.styleBinding && (t += "style:(" + e.styleBinding + "),"), t;
	  }function Ar(e, t, n) {
	    Oa = n;var r = t.value,
	        i = t.modifiers,
	        o = e.tag,
	        a = e.attrsMap.type;return "select" === o ? jr(e, r, i) : "input" === o && "checkbox" === a ? Or(e, r, i) : "input" === o && "radio" === a ? Sr(e, r, i) : Tr(e, r, i), !0;
	  }function Or(e, t, n) {
	    var r = n && n.number,
	        i = gn(e, "value") || "null",
	        o = gn(e, "true-value") || "true",
	        a = gn(e, "false-value") || "false";pn(e, "checked", "Array.isArray(" + t + ")?_i(" + t + "," + i + ")>-1:_q(" + t + "," + o + ")"), mn(e, "change", "var $$a=" + t + ",$$el=$event.target,$$c=$$el.checked?(" + o + "):(" + a + ");if(Array.isArray($$a)){var $$v=" + (r ? "_n(" + i + ")" : i) + ",$$i=_i($$a,$$v);if($$c){$$i<0&&(" + t + "=$$a.concat($$v))}else{$$i>-1&&(" + t + "=$$a.slice(0,$$i).concat($$a.slice($$i+1)))}}else{" + t + "=$$c}", null, !0);
	  }function Sr(e, t, n) {
	    var r = n && n.number,
	        i = gn(e, "value") || "null";i = r ? "_n(" + i + ")" : i, pn(e, "checked", "_q(" + t + "," + i + ")"), mn(e, "change", Er(t, i), null, !0);
	  }function Tr(e, t, n) {
	    var r = e.attrsMap.type,
	        i = n || {},
	        o = i.lazy,
	        a = i.number,
	        s = i.trim,
	        c = o || ei && "range" === r ? "change" : "input",
	        l = !o && "range" !== r,
	        u = "input" === e.tag || "textarea" === e.tag,
	        f = u ? "$event.target.value" + (s ? ".trim()" : "") : s ? "(typeof $event === 'string' ? $event.trim() : $event)" : "$event";f = a || "number" === r ? "_n(" + f + ")" : f;var d = Er(t, f);u && l && (d = "if($event.target.composing)return;" + d), pn(e, "value", u ? "_s(" + t + ")" : "(" + t + ")"), mn(e, c, d, null, !0);
	  }function jr(e, t, n) {
	    var r = n && n.number,
	        i = 'Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return ' + (r ? "_n(val)" : "val") + "})" + (null == e.attrsMap.multiple ? "[0]" : ""),
	        o = Er(t, i);mn(e, "change", o, null, !0);
	  }function Er(e, t) {
	    var n = _n(e);return null === n.idx ? e + "=" + t : "var $$exp = " + n.exp + ", $$idx = " + n.idx + ";if (!Array.isArray($$exp)){" + e + "=" + t + "}else{$$exp.splice($$idx, 1, " + t + ")}";
	  }function Nr(e, t) {
	    t.value && pn(e, "textContent", "_s(" + t.value + ")");
	  }function Lr(e, t) {
	    t.value && pn(e, "innerHTML", "_s(" + t.value + ")");
	  }function Dr(e, t) {
	    return t = t ? l(l({}, ls), t) : ls, $r(e, t);
	  }function Mr(e, t, n) {
	    var r = (t && t.warn || ui, t && t.delimiters ? String(t.delimiters) + e : e);if (cs[r]) return cs[r];var i = {},
	        o = Dr(e, t);i.render = Pr(o.render);var a = o.staticRenderFns.length;i.staticRenderFns = new Array(a);for (var s = 0; s < a; s++) {
	      i.staticRenderFns[s] = Pr(o.staticRenderFns[s]);
	    }return cs[r] = i;
	  }function Pr(e) {
	    try {
	      return new Function(e);
	    } catch (e) {
	      return p;
	    }
	  }function Rr(e) {
	    if (e.outerHTML) return e.outerHTML;var t = document.createElement("div");return t.appendChild(e.cloneNode(!0)), t.innerHTML;
	  }var Ir,
	      Fr,
	      Br = n("slot,component", !0),
	      Ur = Object.prototype.hasOwnProperty,
	      Hr = /-(\w)/g,
	      Vr = a(function (e) {
	    return e.replace(Hr, function (e, t) {
	      return t ? t.toUpperCase() : "";
	    });
	  }),
	      zr = a(function (e) {
	    return e.charAt(0).toUpperCase() + e.slice(1);
	  }),
	      Jr = /([^-])([A-Z])/g,
	      Kr = a(function (e) {
	    return e.replace(Jr, "$1-$2").replace(Jr, "$1-$2").toLowerCase();
	  }),
	      qr = Object.prototype.toString,
	      Wr = "[object Object]",
	      Zr = function Zr() {
	    return !1;
	  },
	      Gr = /[^\w.$]/,
	      Yr = "__proto__" in {},
	      Qr = "undefined" != typeof window && "[object Object]" !== Object.prototype.toString.call(window),
	      Xr = Qr && window.navigator.userAgent.toLowerCase(),
	      ei = Xr && /msie|trident/.test(Xr),
	      ti = Xr && Xr.indexOf("msie 9.0") > 0,
	      ni = Xr && Xr.indexOf("edge/") > 0,
	      ri = Xr && Xr.indexOf("android") > 0,
	      ii = Xr && /iphone|ipad|ipod|ios/.test(Xr),
	      oi = function oi() {
	    return void 0 === Ir && (Ir = !Qr && "undefined" != typeof global && "server" === global.process.env.VUE_ENV), Ir;
	  },
	      ai = Qr && window.__VUE_DEVTOOLS_GLOBAL_HOOK__,
	      si = function () {
	    function e() {
	      r = !1;var e = n.slice(0);n.length = 0;for (var t = 0; t < e.length; t++) {
	        e[t]();
	      }
	    }var t,
	        n = [],
	        r = !1;if ("undefined" != typeof Promise && b(Promise)) {
	      var i = Promise.resolve();t = function t() {
	        i.then(e), ii && setTimeout(p);
	      };
	    } else if ("undefined" == typeof MutationObserver || !b(MutationObserver) && "[object MutationObserverConstructor]" !== MutationObserver.toString()) t = function t() {
	      setTimeout(e, 0);
	    };else {
	      var o = 1,
	          a = new MutationObserver(e),
	          s = document.createTextNode(String(o));a.observe(s, { characterData: !0 }), t = function t() {
	        o = (o + 1) % 2, s.data = String(o);
	      };
	    }return function (e, i) {
	      var o;if (n.push(function () {
	        e && e.call(i), o && o(i);
	      }), r || (r = !0, t()), !e && "undefined" != typeof Promise) return new Promise(function (e) {
	        o = e;
	      });
	    };
	  }();Fr = "undefined" != typeof Set && b(Set) ? Set : function () {
	    function e() {
	      this.set = Object.create(null);
	    }return e.prototype.has = function (e) {
	      return void 0 !== this.set[e];
	    }, e.prototype.add = function (e) {
	      this.set[e] = 1;
	    }, e.prototype.clear = function () {
	      this.set = Object.create(null);
	    }, e;
	  }();var ci,
	      li = { optionMergeStrategies: Object.create(null), silent: !1, devtools: !1, errorHandler: null, ignoredElements: null, keyCodes: Object.create(null), isReservedTag: Zr, isUnknownElement: Zr, getTagNamespace: p, mustUseProp: Zr, _assetTypes: ["component", "directive", "filter"], _lifecycleHooks: ["beforeCreate", "created", "beforeMount", "mounted", "beforeUpdate", "updated", "beforeDestroy", "destroyed", "activated", "deactivated"], _maxUpdateCount: 100 },
	      ui = p,
	      fi = 0,
	      di = function di() {
	    this.id = fi++, this.subs = [];
	  };di.prototype.addSub = function (e) {
	    this.subs.push(e);
	  }, di.prototype.removeSub = function (e) {
	    r(this.subs, e);
	  }, di.prototype.depend = function () {
	    di.target && di.target.addDep(this);
	  }, di.prototype.notify = function () {
	    for (var e = this.subs.slice(), t = 0, n = e.length; t < n; t++) {
	      e[t].update();
	    }
	  }, di.target = null;var pi = [],
	      vi = Array.prototype,
	      hi = Object.create(vi);["push", "pop", "shift", "unshift", "splice", "sort", "reverse"].forEach(function (e) {
	    var t = vi[e];y(hi, e, function () {
	      for (var n = arguments, r = arguments.length, i = new Array(r); r--;) {
	        i[r] = n[r];
	      }var o,
	          a = t.apply(this, i),
	          s = this.__ob__;switch (e) {case "push":
	          o = i;break;case "unshift":
	          o = i;break;case "splice":
	          o = i.slice(2);}return o && s.observeArray(o), s.dep.notify(), a;
	    });
	  });var mi = Object.getOwnPropertyNames(hi),
	      gi = { shouldConvert: !0, isSettingProps: !1 },
	      yi = function yi(e) {
	    if (this.value = e, this.dep = new di(), this.vmCount = 0, y(e, "__ob__", this), Array.isArray(e)) {
	      var t = Yr ? x : C;t(e, hi, mi), this.observeArray(e);
	    } else this.walk(e);
	  };yi.prototype.walk = function (e) {
	    for (var t = Object.keys(e), n = 0; n < t.length; n++) {
	      A(e, t[n], e[t[n]]);
	    }
	  }, yi.prototype.observeArray = function (e) {
	    for (var t = 0, n = e.length; t < n; t++) {
	      k(e[t]);
	    }
	  };var _i = li.optionMergeStrategies;_i.data = function (e, t, n) {
	    return n ? e || t ? function () {
	      var r = "function" == typeof t ? t.call(n) : t,
	          i = "function" == typeof e ? e.call(n) : void 0;return r ? j(r, i) : i;
	    } : void 0 : t ? "function" != typeof t ? e : e ? function () {
	      return j(t.call(this), e.call(this));
	    } : t : e;
	  }, li._lifecycleHooks.forEach(function (e) {
	    _i[e] = E;
	  }), li._assetTypes.forEach(function (e) {
	    _i[e + "s"] = N;
	  }), _i.watch = function (e, t) {
	    if (!t) return e;if (!e) return t;var n = {};l(n, e);for (var r in t) {
	      var i = n[r],
	          o = t[r];i && !Array.isArray(i) && (i = [i]), n[r] = i ? i.concat(o) : [o];
	    }return n;
	  }, _i.props = _i.methods = _i.computed = function (e, t) {
	    if (!t) return e;if (!e) return t;var n = Object.create(null);return l(n, e), l(n, t), n;
	  };var bi = function bi(e, t) {
	    return void 0 === t ? e : t;
	  },
	      $i = Object.freeze({ defineReactive: A, _toString: e, toNumber: t, makeMap: n, isBuiltInTag: Br, remove: r, hasOwn: i, isPrimitive: o, cached: a, camelize: Vr, capitalize: zr, hyphenate: Kr, bind: s, toArray: c, extend: l, isObject: u, isPlainObject: f, toObject: d, noop: p, no: Zr, genStaticKeys: v, looseEqual: h, looseIndexOf: m, isReserved: g, def: y, parsePath: _, hasProto: Yr, inBrowser: Qr, UA: Xr, isIE: ei, isIE9: ti, isEdge: ni, isAndroid: ri, isIOS: ii, isServerRendering: oi, devtools: ai, nextTick: si, get _Set() {
	      return Fr;
	    }, mergeOptions: M, resolveAsset: P, warn: ui, formatComponentName: ci, validateProp: R }),
	      wi = [],
	      xi = {},
	      Ci = !1,
	      ki = !1,
	      Ai = 0,
	      Oi = 0,
	      Si = function Si(e, t, n, r) {
	    void 0 === r && (r = {}), this.vm = e, e._watchers.push(this), this.deep = !!r.deep, this.user = !!r.user, this.lazy = !!r.lazy, this.sync = !!r.sync, this.expression = t.toString(), this.cb = n, this.id = ++Oi, this.active = !0, this.dirty = this.lazy, this.deps = [], this.newDeps = [], this.depIds = new Fr(), this.newDepIds = new Fr(), "function" == typeof t ? this.getter = t : (this.getter = _(t), this.getter || (this.getter = function () {})), this.value = this.lazy ? void 0 : this.get();
	  };Si.prototype.get = function () {
	    $(this);var e = this.getter.call(this.vm, this.vm);return this.deep && z(e), w(), this.cleanupDeps(), e;
	  }, Si.prototype.addDep = function (e) {
	    var t = e.id;this.newDepIds.has(t) || (this.newDepIds.add(t), this.newDeps.push(e), this.depIds.has(t) || e.addSub(this));
	  }, Si.prototype.cleanupDeps = function () {
	    for (var e = this, t = this.deps.length; t--;) {
	      var n = e.deps[t];e.newDepIds.has(n.id) || n.removeSub(e);
	    }var r = this.depIds;this.depIds = this.newDepIds, this.newDepIds = r, this.newDepIds.clear(), r = this.deps, this.deps = this.newDeps, this.newDeps = r, this.newDeps.length = 0;
	  }, Si.prototype.update = function () {
	    this.lazy ? this.dirty = !0 : this.sync ? this.run() : V(this);
	  }, Si.prototype.run = function () {
	    if (this.active) {
	      var e = this.get();if (e !== this.value || u(e) || this.deep) {
	        var t = this.value;if (this.value = e, this.user) try {
	          this.cb.call(this.vm, e, t);
	        } catch (e) {
	          if (!li.errorHandler) throw e;li.errorHandler.call(null, e, this.vm);
	        } else this.cb.call(this.vm, e, t);
	      }
	    }
	  }, Si.prototype.evaluate = function () {
	    this.value = this.get(), this.dirty = !1;
	  }, Si.prototype.depend = function () {
	    for (var e = this, t = this.deps.length; t--;) {
	      e.deps[t].depend();
	    }
	  }, Si.prototype.teardown = function () {
	    var e = this;if (this.active) {
	      this.vm._isBeingDestroyed || this.vm._vForRemoving || r(this.vm._watchers, this);for (var t = this.deps.length; t--;) {
	        e.deps[t].removeSub(e);
	      }this.active = !1;
	    }
	  };var Ti = new Fr(),
	      ji = { enumerable: !0, configurable: !0, get: p, set: p },
	      Ei = function Ei(e, t, n, r, i, o, a, s) {
	    this.tag = e, this.data = t, this.children = n, this.text = r, this.elm = i, this.ns = o, this.context = a, this.functionalContext = void 0, this.key = t && t.key, this.componentOptions = s, this.child = void 0, this.parent = void 0, this.raw = !1, this.isStatic = !1, this.isRootInsert = !0, this.isComment = !1, this.isCloned = !1, this.isOnce = !1;
	  },
	      Ni = function Ni() {
	    var e = new Ei();return e.text = "", e.isComment = !0, e;
	  },
	      Li = null,
	      Di = { init: ye, prepatch: _e, insert: be, destroy: $e },
	      Mi = Object.keys(Di),
	      Pi = 0;De(Re), ee(Re), Le(Re), pe(Re), je(Re);var Ri = [String, RegExp],
	      Ii = { name: "keep-alive", abstract: !0, props: { include: Ri, exclude: Ri }, created: function created() {
	      this.cache = Object.create(null);
	    }, render: function render() {
	      var e = fe(this.$slots.default);if (e && e.componentOptions) {
	        var t = e.componentOptions,
	            n = t.Ctor.options.name || t.tag;if (n && (this.include && !He(this.include, n) || this.exclude && He(this.exclude, n))) return e;var r = null == e.key ? t.Ctor.cid + (t.tag ? "::" + t.tag : "") : e.key;this.cache[r] ? e.child = this.cache[r].child : this.cache[r] = e, e.data.keepAlive = !0;
	      }return e;
	    }, destroyed: function destroyed() {
	      var e = this;for (var t in this.cache) {
	        var n = e.cache[t];ve(n.child, "deactivated"), n.child.$destroy();
	      }
	    } },
	      Fi = { KeepAlive: Ii };Ve(Re), Object.defineProperty(Re.prototype, "$isServer", { get: oi }), Re.version = "2.1.0";var Bi,
	      Ui = function Ui(e, t) {
	    return "value" === t && ("input" === e || "textarea" === e || "option" === e) || "selected" === t && "option" === e || "checked" === t && "input" === e || "muted" === t && "video" === e;
	  },
	      Hi = n("contenteditable,draggable,spellcheck"),
	      Vi = n("allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,default,defaultchecked,defaultmuted,defaultselected,defer,disabled,enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,required,reversed,scoped,seamless,selected,sortable,translate,truespeed,typemustmatch,visible"),
	      zi = "http://www.w3.org/1999/xlink",
	      Ji = function Ji(e) {
	    return ":" === e.charAt(5) && "xlink" === e.slice(0, 5);
	  },
	      Ki = function Ki(e) {
	    return Ji(e) ? e.slice(6, e.length) : "";
	  },
	      qi = function qi(e) {
	    return null == e || e === !1;
	  },
	      Wi = { svg: "http://www.w3.org/2000/svg", math: "http://www.w3.org/1998/Math/MathML", xhtml: "http://www.w3.org/1999/xhtml" },
	      Zi = n("html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,div,dd,dl,dt,figcaption,figure,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,menuitem,summary,content,element,shadow,template"),
	      Gi = n("area,base,br,col,embed,frame,hr,img,input,isindex,keygen,link,meta,param,source,track,wbr", !0),
	      Yi = n("colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr,source", !0),
	      Qi = n("address,article,aside,base,blockquote,body,caption,col,colgroup,dd,details,dialog,div,dl,dt,fieldset,figcaption,figure,footer,form,h1,h2,h3,h4,h5,h6,head,header,hgroup,hr,html,legend,li,menuitem,meta,optgroup,option,param,rp,rt,source,style,summary,tbody,td,tfoot,th,thead,title,tr,track", !0),
	      Xi = n("svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font,font-face,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view", !0),
	      eo = function eo(e) {
	    return "pre" === e;
	  },
	      to = function to(e) {
	    return Zi(e) || Xi(e);
	  },
	      no = Object.create(null),
	      ro = Object.freeze({ createElement: Qe, createElementNS: Xe, createTextNode: et, createComment: tt, insertBefore: nt, removeChild: rt, appendChild: it, parentNode: ot, nextSibling: at, tagName: st, setTextContent: ct, childNodes: lt, setAttribute: ut }),
	      io = { create: function create(e, t) {
	      ft(t);
	    }, update: function update(e, t) {
	      e.data.ref !== t.data.ref && (ft(e, !0), ft(t));
	    }, destroy: function destroy(e) {
	      ft(e, !0);
	    } },
	      oo = new Ei("", {}, []),
	      ao = ["create", "update", "remove", "destroy"],
	      so = { create: gt, update: gt, destroy: function destroy(e) {
	      gt(e, oo);
	    } },
	      co = Object.create(null),
	      lo = [io, so],
	      uo = { create: $t, update: $t },
	      fo = { create: xt, update: xt },
	      po = { create: Ct, update: Ct },
	      vo = { create: kt, update: kt },
	      ho = a(function (e) {
	    var t = {},
	        n = e.indexOf("background") >= 0,
	        r = n ? /;(?![^(]*\))/g : ";",
	        i = n ? /:(.+)/ : ":";return e.split(r).forEach(function (e) {
	      if (e) {
	        var n = e.split(i);n.length > 1 && (t[n[0].trim()] = n[1].trim());
	      }
	    }), t;
	  }),
	      mo = /^--/,
	      go = function go(e, t, n) {
	    mo.test(t) ? e.style.setProperty(t, n) : e.style[_o(t)] = n;
	  },
	      yo = ["Webkit", "Moz", "ms"],
	      _o = a(function (e) {
	    if (Bi = Bi || document.createElement("div"), e = Vr(e), "filter" !== e && e in Bi.style) return e;for (var t = e.charAt(0).toUpperCase() + e.slice(1), n = 0; n < yo.length; n++) {
	      var r = yo[n] + t;if (r in Bi.style) return r;
	    }
	  }),
	      bo = { create: Tt, update: Tt },
	      $o = Qr && !ti,
	      wo = "transition",
	      xo = "animation",
	      Co = "transition",
	      ko = "transitionend",
	      Ao = "animation",
	      Oo = "animationend";$o && (void 0 === window.ontransitionend && void 0 !== window.onwebkittransitionend && (Co = "WebkitTransition", ko = "webkitTransitionEnd"), void 0 === window.onanimationend && void 0 !== window.onwebkitanimationend && (Ao = "WebkitAnimation", Oo = "webkitAnimationEnd"));var So = Qr && window.requestAnimationFrame || setTimeout,
	      To = /\b(transform|all)(,|$)/,
	      jo = a(function (e) {
	    return { enterClass: e + "-enter", leaveClass: e + "-leave", appearClass: e + "-enter", enterActiveClass: e + "-enter-active", leaveActiveClass: e + "-leave-active", appearActiveClass: e + "-enter-active" };
	  }),
	      Eo = Qr ? { create: function create(e, t) {
	      t.data.show || Ft(t);
	    }, remove: function remove(e, t) {
	      e.data.show ? t() : Bt(e, t);
	    } } : {},
	      No = [uo, fo, po, vo, bo, Eo],
	      Lo = No.concat(lo),
	      Do = mt({ nodeOps: ro, modules: Lo });ti && document.addEventListener("selectionchange", function () {
	    var e = document.activeElement;e && e.vmodel && Wt(e, "input");
	  });var Mo = { inserted: function inserted(e, t, n) {
	      if ("select" === n.tag) {
	        var r = function r() {
	          Vt(e, t, n.context);
	        };r(), (ei || ni) && setTimeout(r, 0);
	      } else "textarea" !== n.tag && "text" !== e.type || t.modifiers.lazy || (ri || (e.addEventListener("compositionstart", Kt), e.addEventListener("compositionend", qt)), ti && (e.vmodel = !0));
	    }, componentUpdated: function componentUpdated(e, t, n) {
	      if ("select" === n.tag) {
	        Vt(e, t, n.context);var r = e.multiple ? t.value.some(function (t) {
	          return zt(t, e.options);
	        }) : t.value !== t.oldValue && zt(t.value, e.options);r && Wt(e, "change");
	      }
	    } },
	      Po = { bind: function bind(e, t, n) {
	      var r = t.value;n = Zt(n);var i = n.data && n.data.transition;r && i && !ti && Ft(n);var o = "none" === e.style.display ? "" : e.style.display;e.style.display = r ? o : "none", e.__vOriginalDisplay = o;
	    }, update: function update(e, t, n) {
	      var r = t.value,
	          i = t.oldValue;if (r !== i) {
	        n = Zt(n);var o = n.data && n.data.transition;o && !ti ? r ? (Ft(n), e.style.display = e.__vOriginalDisplay) : Bt(n, function () {
	          e.style.display = "none";
	        }) : e.style.display = r ? e.__vOriginalDisplay : "none";
	      }
	    } },
	      Ro = { model: Mo, show: Po },
	      Io = { name: String, appear: Boolean, css: Boolean, mode: String, type: String, enterClass: String, leaveClass: String, enterActiveClass: String, leaveActiveClass: String, appearClass: String, appearActiveClass: String },
	      Fo = { name: "transition", props: Io, abstract: !0,
	    render: function render(e) {
	      var t = this,
	          n = this.$slots.default;if (n && (n = n.filter(function (e) {
	        return e.tag;
	      }), n.length)) {
	        var r = this.mode,
	            i = n[0];if (Xt(this.$vnode)) return i;var o = Gt(i);if (!o) return i;if (this._leaving) return Qt(e, i);var a = o.key = null == o.key || o.isStatic ? "__v" + (o.tag + this._uid) + "__" : o.key,
	            s = (o.data || (o.data = {})).transition = Yt(this),
	            c = this._vnode,
	            u = Gt(c);if (o.data.directives && o.data.directives.some(function (e) {
	          return "show" === e.name;
	        }) && (o.data.show = !0), u && u.data && u.key !== a) {
	          var f = u.data.transition = l({}, s);if ("out-in" === r) return this._leaving = !0, ie(f, "afterLeave", function () {
	            t._leaving = !1, t.$forceUpdate();
	          }, a), Qt(e, i);if ("in-out" === r) {
	            var d,
	                p = function p() {
	              d();
	            };ie(s, "afterEnter", p, a), ie(s, "enterCancelled", p, a), ie(f, "delayLeave", function (e) {
	              d = e;
	            }, a);
	          }
	        }return i;
	      }
	    } },
	      Bo = l({ tag: String, moveClass: String }, Io);delete Bo.mode;var Uo = { props: Bo, render: function render(e) {
	      for (var t = this.tag || this.$vnode.data.tag || "span", n = Object.create(null), r = this.prevChildren = this.children, i = this.$slots.default || [], o = this.children = [], a = Yt(this), s = 0; s < i.length; s++) {
	        var c = i[s];c.tag && null != c.key && 0 !== String(c.key).indexOf("__vlist") && (o.push(c), n[c.key] = c, (c.data || (c.data = {})).transition = a);
	      }if (r) {
	        for (var l = [], u = [], f = 0; f < r.length; f++) {
	          var d = r[f];d.data.transition = a, d.data.pos = d.elm.getBoundingClientRect(), n[d.key] ? l.push(d) : u.push(d);
	        }this.kept = e(t, null, l), this.removed = u;
	      }return e(t, null, o);
	    }, beforeUpdate: function beforeUpdate() {
	      this.__patch__(this._vnode, this.kept, !1, !0), this._vnode = this.kept;
	    }, updated: function updated() {
	      var e = this.prevChildren,
	          t = this.moveClass || (this.name || "v") + "-move";if (e.length && this.hasMove(e[0].elm, t)) {
	        e.forEach(en), e.forEach(tn), e.forEach(nn);document.body.offsetHeight;e.forEach(function (e) {
	          if (e.data.moved) {
	            var n = e.elm,
	                r = n.style;Lt(n, t), r.transform = r.WebkitTransform = r.transitionDuration = "", n.addEventListener(ko, n._moveCb = function e(r) {
	              r && !/transform$/.test(r.propertyName) || (n.removeEventListener(ko, e), n._moveCb = null, Dt(n, t));
	            });
	          }
	        });
	      }
	    }, methods: { hasMove: function hasMove(e, t) {
	        if (!$o) return !1;if (null != this._hasMove) return this._hasMove;Lt(e, t);var n = Pt(e);return Dt(e, t), this._hasMove = n.hasTransform;
	      } } },
	      Ho = { Transition: Fo, TransitionGroup: Uo };Re.config.isUnknownElement = Ge, Re.config.isReservedTag = to, Re.config.getTagNamespace = Ze, Re.config.mustUseProp = Ui, l(Re.options.directives, Ro), l(Re.options.components, Ho), Re.prototype.__patch__ = Qr ? Do : p, Re.prototype.$mount = function (e, t) {
	    return e = e && Qr ? Ye(e) : void 0, this._mount(e, t);
	  }, setTimeout(function () {
	    li.devtools && ai && ai.emit("init", Re);
	  }, 0);var Vo,
	      zo = !!Qr && rn("\n", "&#10;"),
	      Jo = /([^\s"'<>\/=]+)/,
	      Ko = /(?:=)/,
	      qo = [/"([^"]*)"+/.source, /'([^']*)'+/.source, /([^\s"'=<>`]+)/.source],
	      Wo = new RegExp("^\\s*" + Jo.source + "(?:\\s*(" + Ko.source + ")\\s*(?:" + qo.join("|") + "))?"),
	      Zo = "[a-zA-Z_][\\w\\-\\.]*",
	      Go = "((?:" + Zo + "\\:)?" + Zo + ")",
	      Yo = new RegExp("^<" + Go),
	      Qo = /^\s*(\/?)>/,
	      Xo = new RegExp("^<\\/" + Go + "[^>]*>"),
	      ea = /^<!DOCTYPE [^>]+>/i,
	      ta = /^<!--/,
	      na = /^<!\[/,
	      ra = !1;"x".replace(/x(.)?/g, function (e, t) {
	    ra = "" === t;
	  });var ia,
	      oa,
	      aa,
	      sa,
	      ca,
	      la,
	      ua,
	      fa,
	      da,
	      pa,
	      va,
	      ha,
	      ma,
	      ga,
	      ya,
	      _a,
	      ba,
	      $a,
	      wa,
	      xa,
	      Ca,
	      ka,
	      Aa,
	      Oa,
	      Sa = n("script,style", !0),
	      Ta = function Ta(e) {
	    return "lang" === e.name && "html" !== e.value;
	  },
	      ja = function ja(e, t, n) {
	    return !!Sa(e) || !!t && !("template" === e && 1 === n.length && !n[0].attrs.some(Ta));
	  },
	      Ea = {},
	      Na = /&lt;/g,
	      La = /&gt;/g,
	      Da = /&#10;/g,
	      Ma = /&amp;/g,
	      Pa = /&quot;/g,
	      Ra = /\{\{((?:.|\n)+?)\}\}/g,
	      Ia = /[-.*+?^${}()|[\]\/\\]/g,
	      Fa = a(function (e) {
	    var t = e[0].replace(Ia, "\\$&"),
	        n = e[1].replace(Ia, "\\$&");return new RegExp(t + "((?:.|\\n)+?)" + n, "g");
	  }),
	      Ba = /^v-|^@|^:/,
	      Ua = /(.*?)\s+(?:in|of)\s+(.*)/,
	      Ha = /\((\{[^}]*\}|[^,]*),([^,]*)(?:,([^,]*))?\)/,
	      Va = /^:|^v-bind:/,
	      za = /^@|^v-on:/,
	      Ja = /:(.*)$/,
	      Ka = /\.[^.]+/g,
	      qa = a(on),
	      Wa = /^xmlns:NS\d+/,
	      Za = /^NS\d+:/,
	      Ga = a(Jn),
	      Ya = /^\s*([\w$_]+|\([^)]*?\))\s*=>|^function\s*\(/,
	      Qa = /^\s*[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['.*?']|\[".*?"]|\[\d+]|\[[A-Za-z_$][\w$]*])*\s*$/,
	      Xa = { esc: 27, tab: 9, enter: 13, space: 32, up: 38, left: 37, right: 39, down: 40, delete: [8, 46] },
	      es = { stop: "$event.stopPropagation();", prevent: "$event.preventDefault();", self: "if($event.target !== $event.currentTarget)return;" },
	      ts = /^mouse|^pointer|^(click|dblclick|contextmenu|wheel)$/,
	      ns = { ctrl: "if(!$event.ctrlKey)return;", shift: "if(!$event.shiftKey)return;", alt: "if(!$event.altKey)return;", meta: "if(!$event.metaKey)return;" },
	      rs = { bind: tr, cloak: p },
	      is = (new RegExp("\\b" + "do,if,for,let,new,try,var,case,else,with,await,break,catch,class,const,super,throw,while,yield,delete,export,import,return,switch,default,extends,finally,continue,debugger,function,arguments".split(",").join("\\b|\\b") + "\\b"), { staticKeys: ["staticClass"], transformNode: wr, genData: xr }),
	      os = { staticKeys: ["staticStyle"], transformNode: Cr, genData: kr },
	      as = [is, os],
	      ss = { model: Ar, text: Nr, html: Lr },
	      cs = Object.create(null),
	      ls = { expectHTML: !0, modules: as, staticKeys: v(as), directives: ss, isReservedTag: to, isUnaryTag: Gi, mustUseProp: Ui, getTagNamespace: Ze, isPreTag: eo },
	      us = a(function (e) {
	    var t = Ye(e);return t && t.innerHTML;
	  }),
	      fs = Re.prototype.$mount;return Re.prototype.$mount = function (e, t) {
	    if (e = e && Ye(e), e === document.body || e === document.documentElement) return this;var n = this.$options;if (!n.render) {
	      var r = n.template;if (r) {
	        if ("string" == typeof r) "#" === r.charAt(0) && (r = us(r));else {
	          if (!r.nodeType) return this;r = r.innerHTML;
	        }
	      } else e && (r = Rr(e));if (r) {
	        var i = Mr(r, { warn: ui, shouldDecodeNewlines: zo, delimiters: n.delimiters }, this),
	            o = i.render,
	            a = i.staticRenderFns;n.render = o, n.staticRenderFns = a;
	      }
	    }return fs.call(this, e, t);
	  }, Re.compile = Mr, Re;
	});
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	/**
	 * vue-router v2.0.3
	 * (c) 2016 Evan You
	 * @license MIT
	 */
	(function (global, factory) {
	  ( false ? 'undefined' : _typeof(exports)) === 'object' && typeof module !== 'undefined' ? module.exports = factory() :  true ? !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : global.VueRouter = factory();
	})(undefined, function () {
	  'use strict';
	
	  var View = {
	    name: 'router-view',
	    functional: true,
	    props: {
	      name: {
	        type: String,
	        default: 'default'
	      }
	    },
	    render: function render(h, ref) {
	      var props = ref.props;
	      var children = ref.children;
	      var parent = ref.parent;
	      var data = ref.data;
	
	      data.routerView = true;
	
	      var route = parent.$route;
	      var cache = parent._routerViewCache || (parent._routerViewCache = {});
	      var depth = 0;
	      var inactive = false;
	
	      while (parent) {
	        if (parent.$vnode && parent.$vnode.data.routerView) {
	          depth++;
	        }
	        if (parent._inactive) {
	          inactive = true;
	        }
	        parent = parent.$parent;
	      }
	
	      data.routerViewDepth = depth;
	      var matched = route.matched[depth];
	      if (!matched) {
	        return h();
	      }
	
	      var name = props.name;
	      var component = inactive ? cache[name] : cache[name] = matched.components[name];
	
	      if (!inactive) {
	        var hooks = data.hook || (data.hook = {});
	        hooks.init = function (vnode) {
	          matched.instances[name] = vnode.child;
	        };
	        hooks.prepatch = function (oldVnode, vnode) {
	          matched.instances[name] = vnode.child;
	        };
	        hooks.destroy = function (vnode) {
	          if (matched.instances[name] === vnode.child) {
	            matched.instances[name] = undefined;
	          }
	        };
	      }
	
	      return h(component, data, children);
	    }
	  };
	
	  /*  */
	
	  function resolvePath(relative, base, append) {
	    if (relative.charAt(0) === '/') {
	      return relative;
	    }
	
	    if (relative.charAt(0) === '?' || relative.charAt(0) === '#') {
	      return base + relative;
	    }
	
	    var stack = base.split('/');
	
	    // remove trailing segment if:
	    // - not appending
	    // - appending to trailing slash (last segment is empty)
	    if (!append || !stack[stack.length - 1]) {
	      stack.pop();
	    }
	
	    // resolve relative path
	    var segments = relative.replace(/^\//, '').split('/');
	    for (var i = 0; i < segments.length; i++) {
	      var segment = segments[i];
	      if (segment === '.') {
	        continue;
	      } else if (segment === '..') {
	        stack.pop();
	      } else {
	        stack.push(segment);
	      }
	    }
	
	    // ensure leading slash
	    if (stack[0] !== '') {
	      stack.unshift('');
	    }
	
	    return stack.join('/');
	  }
	
	  function parsePath(path) {
	    var hash = '';
	    var query = '';
	
	    var hashIndex = path.indexOf('#');
	    if (hashIndex >= 0) {
	      hash = path.slice(hashIndex);
	      path = path.slice(0, hashIndex);
	    }
	
	    var queryIndex = path.indexOf('?');
	    if (queryIndex >= 0) {
	      query = path.slice(queryIndex + 1);
	      path = path.slice(0, queryIndex);
	    }
	
	    return {
	      path: path,
	      query: query,
	      hash: hash
	    };
	  }
	
	  function cleanPath(path) {
	    return path.replace(/\/\//g, '/');
	  }
	
	  /*  */
	
	  function assert(condition, message) {
	    if (!condition) {
	      throw new Error("[vue-router] " + message);
	    }
	  }
	
	  function warn(condition, message) {
	    if (!condition) {
	      typeof console !== 'undefined' && console.warn("[vue-router] " + message);
	    }
	  }
	
	  /*  */
	
	  var encode = encodeURIComponent;
	  var decode = decodeURIComponent;
	
	  function resolveQuery(query, extraQuery) {
	    if (extraQuery === void 0) extraQuery = {};
	
	    if (query) {
	      var parsedQuery;
	      try {
	        parsedQuery = parseQuery(query);
	      } catch (e) {
	        warn(false, e.message);
	        parsedQuery = {};
	      }
	      for (var key in extraQuery) {
	        parsedQuery[key] = extraQuery[key];
	      }
	      return parsedQuery;
	    } else {
	      return extraQuery;
	    }
	  }
	
	  function parseQuery(query) {
	    var res = {};
	
	    query = query.trim().replace(/^(\?|#|&)/, '');
	
	    if (!query) {
	      return res;
	    }
	
	    query.split('&').forEach(function (param) {
	      var parts = param.replace(/\+/g, ' ').split('=');
	      var key = decode(parts.shift());
	      var val = parts.length > 0 ? decode(parts.join('=')) : null;
	
	      if (res[key] === undefined) {
	        res[key] = val;
	      } else if (Array.isArray(res[key])) {
	        res[key].push(val);
	      } else {
	        res[key] = [res[key], val];
	      }
	    });
	
	    return res;
	  }
	
	  function stringifyQuery(obj) {
	    var res = obj ? Object.keys(obj).sort().map(function (key) {
	      var val = obj[key];
	
	      if (val === undefined) {
	        return '';
	      }
	
	      if (val === null) {
	        return encode(key);
	      }
	
	      if (Array.isArray(val)) {
	        var result = [];
	        val.slice().forEach(function (val2) {
	          if (val2 === undefined) {
	            return;
	          }
	          if (val2 === null) {
	            result.push(encode(key));
	          } else {
	            result.push(encode(key) + '=' + encode(val2));
	          }
	        });
	        return result.join('&');
	      }
	
	      return encode(key) + '=' + encode(val);
	    }).filter(function (x) {
	      return x.length > 0;
	    }).join('&') : null;
	    return res ? "?" + res : '';
	  }
	
	  /*  */
	
	  function createRoute(record, location, redirectedFrom) {
	    var route = {
	      name: location.name || record && record.name,
	      meta: record && record.meta || {},
	      path: location.path || '/',
	      hash: location.hash || '',
	      query: location.query || {},
	      params: location.params || {},
	      fullPath: getFullPath(location),
	      matched: record ? formatMatch(record) : []
	    };
	    if (redirectedFrom) {
	      route.redirectedFrom = getFullPath(redirectedFrom);
	    }
	    return Object.freeze(route);
	  }
	
	  // the starting route that represents the initial state
	  var START = createRoute(null, {
	    path: '/'
	  });
	
	  function formatMatch(record) {
	    var res = [];
	    while (record) {
	      res.unshift(record);
	      record = record.parent;
	    }
	    return res;
	  }
	
	  function getFullPath(ref) {
	    var path = ref.path;
	    var query = ref.query;if (query === void 0) query = {};
	    var hash = ref.hash;if (hash === void 0) hash = '';
	
	    return (path || '/') + stringifyQuery(query) + hash;
	  }
	
	  var trailingSlashRE = /\/$/;
	  function isSameRoute(a, b) {
	    if (b === START) {
	      return a === b;
	    } else if (!b) {
	      return false;
	    } else if (a.path && b.path) {
	      return a.path.replace(trailingSlashRE, '') === b.path.replace(trailingSlashRE, '') && a.hash === b.hash && isObjectEqual(a.query, b.query);
	    } else if (a.name && b.name) {
	      return a.name === b.name && a.hash === b.hash && isObjectEqual(a.query, b.query) && isObjectEqual(a.params, b.params);
	    } else {
	      return false;
	    }
	  }
	
	  function isObjectEqual(a, b) {
	    if (a === void 0) a = {};
	    if (b === void 0) b = {};
	
	    var aKeys = Object.keys(a);
	    var bKeys = Object.keys(b);
	    if (aKeys.length !== bKeys.length) {
	      return false;
	    }
	    return aKeys.every(function (key) {
	      return String(a[key]) === String(b[key]);
	    });
	  }
	
	  function isIncludedRoute(current, target) {
	    return current.path.indexOf(target.path.replace(/\/$/, '')) === 0 && (!target.hash || current.hash === target.hash) && queryIncludes(current.query, target.query);
	  }
	
	  function queryIncludes(current, target) {
	    for (var key in target) {
	      if (!(key in current)) {
	        return false;
	      }
	    }
	    return true;
	  }
	
	  /*  */
	
	  function normalizeLocation(raw, current, append) {
	    var next = typeof raw === 'string' ? { path: raw } : raw;
	    if (next.name || next._normalized) {
	      return next;
	    }
	
	    var parsedPath = parsePath(next.path || '');
	    var basePath = current && current.path || '/';
	    var path = parsedPath.path ? resolvePath(parsedPath.path, basePath, append) : current && current.path || '/';
	    var query = resolveQuery(parsedPath.query, next.query);
	    var hash = next.hash || parsedPath.hash;
	    if (hash && hash.charAt(0) !== '#') {
	      hash = "#" + hash;
	    }
	
	    return {
	      _normalized: true,
	      path: path,
	      query: query,
	      hash: hash
	    };
	  }
	
	  /*  */
	
	  // work around weird flow bug
	  var toTypes = [String, Object];
	
	  var Link = {
	    name: 'router-link',
	    props: {
	      to: {
	        type: toTypes,
	        required: true
	      },
	      tag: {
	        type: String,
	        default: 'a'
	      },
	      exact: Boolean,
	      append: Boolean,
	      replace: Boolean,
	      activeClass: String
	    },
	    render: function render(h) {
	      var this$1 = this;
	
	      var router = this.$router;
	      var current = this.$route;
	      var to = normalizeLocation(this.to, current, this.append);
	      var resolved = router.match(to, current);
	      var fullPath = resolved.redirectedFrom || resolved.fullPath;
	      var base = router.history.base;
	      var href = createHref(base, fullPath, router.mode);
	      var classes = {};
	      var activeClass = this.activeClass || router.options.linkActiveClass || 'router-link-active';
	      var compareTarget = to.path ? createRoute(null, to) : resolved;
	      classes[activeClass] = this.exact ? isSameRoute(current, compareTarget) : isIncludedRoute(current, compareTarget);
	
	      var on = {
	        click: function click(e) {
	          // don't redirect with control keys
	          /* istanbul ignore if */
	          if (e.metaKey || e.ctrlKey || e.shiftKey) {
	            return;
	          }
	          // don't redirect when preventDefault called
	          /* istanbul ignore if */
	          if (e.defaultPrevented) {
	            return;
	          }
	          // don't redirect on right click
	          /* istanbul ignore if */
	          if (e.button !== 0) {
	            return;
	          }
	          // don't redirect if `target="_blank"`
	          /* istanbul ignore if */
	          var target = e.target.getAttribute('target');
	          if (/\b_blank\b/i.test(target)) {
	            return;
	          }
	
	          e.preventDefault();
	          if (this$1.replace) {
	            router.replace(to);
	          } else {
	            router.push(to);
	          }
	        }
	      };
	
	      var data = {
	        class: classes
	      };
	
	      if (this.tag === 'a') {
	        data.on = on;
	        data.attrs = { href: href };
	      } else {
	        // find the first <a> child and apply listener and href
	        var a = findAnchor(this.$slots.default);
	        if (a) {
	          // in case the <a> is a static node
	          a.isStatic = false;
	          var extend = _Vue.util.extend;
	          var aData = a.data = extend({}, a.data);
	          aData.on = on;
	          var aAttrs = a.data.attrs = extend({}, a.data.attrs);
	          aAttrs.href = href;
	        } else {
	          // doesn't have <a> child, apply listener to self
	          data.on = on;
	        }
	      }
	
	      return h(this.tag, data, this.$slots.default);
	    }
	  };
	
	  function findAnchor(children) {
	    if (children) {
	      var child;
	      for (var i = 0; i < children.length; i++) {
	        child = children[i];
	        if (child.tag === 'a') {
	          return child;
	        }
	        if (child.children && (child = findAnchor(child.children))) {
	          return child;
	        }
	      }
	    }
	  }
	
	  function createHref(base, fullPath, mode) {
	    var path = mode === 'hash' ? '/#' + fullPath : fullPath;
	    return base ? cleanPath(base + path) : path;
	  }
	
	  var _Vue;
	
	  function install(Vue) {
	    if (install.installed) {
	      return;
	    }
	    install.installed = true;
	
	    _Vue = Vue;
	
	    Object.defineProperty(Vue.prototype, '$router', {
	      get: function get() {
	        return this.$root._router;
	      }
	    });
	
	    Object.defineProperty(Vue.prototype, '$route', {
	      get: function get$1() {
	        return this.$root._route;
	      }
	    });
	
	    Vue.mixin({
	      beforeCreate: function beforeCreate() {
	        if (this.$options.router) {
	          this._router = this.$options.router;
	          this._router.init(this);
	          Vue.util.defineReactive(this, '_route', this._router.history.current);
	        }
	      }
	    });
	
	    Vue.component('router-view', View);
	    Vue.component('router-link', Link);
	
	    var strats = Vue.config.optionMergeStrategies;
	    // use the same hook merging strategy for route hooks
	    strats.beforeRouteEnter = strats.beforeRouteLeave = strats.created;
	  }
	
	  var __moduleExports = Array.isArray || function (arr) {
	    return Object.prototype.toString.call(arr) == '[object Array]';
	  };
	
	  var isarray = __moduleExports;
	
	  /**
	   * Expose `pathToRegexp`.
	   */
	  var index = pathToRegexp;
	  var parse_1 = parse;
	  var compile_1 = compile;
	  var tokensToFunction_1 = tokensToFunction;
	  var tokensToRegExp_1 = tokensToRegExp;
	
	  /**
	   * The main path matching regexp utility.
	   *
	   * @type {RegExp}
	   */
	  var PATH_REGEXP = new RegExp([
	  // Match escaped characters that would otherwise appear in future matches.
	  // This allows the user to escape special characters that won't transform.
	  '(\\\\.)',
	  // Match Express-style parameters and un-named parameters with a prefix
	  // and optional suffixes. Matches appear as:
	  //
	  // "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?", undefined]
	  // "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined, undefined]
	  // "/*"            => ["/", undefined, undefined, undefined, undefined, "*"]
	  '([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))'].join('|'), 'g');
	
	  /**
	   * Parse a string for the raw tokens.
	   *
	   * @param  {string}  str
	   * @param  {Object=} options
	   * @return {!Array}
	   */
	  function parse(str, options) {
	    var tokens = [];
	    var key = 0;
	    var index = 0;
	    var path = '';
	    var defaultDelimiter = options && options.delimiter || '/';
	    var res;
	
	    while ((res = PATH_REGEXP.exec(str)) != null) {
	      var m = res[0];
	      var escaped = res[1];
	      var offset = res.index;
	      path += str.slice(index, offset);
	      index = offset + m.length;
	
	      // Ignore already escaped sequences.
	      if (escaped) {
	        path += escaped[1];
	        continue;
	      }
	
	      var next = str[index];
	      var prefix = res[2];
	      var name = res[3];
	      var capture = res[4];
	      var group = res[5];
	      var modifier = res[6];
	      var asterisk = res[7];
	
	      // Push the current path onto the tokens.
	      if (path) {
	        tokens.push(path);
	        path = '';
	      }
	
	      var partial = prefix != null && next != null && next !== prefix;
	      var repeat = modifier === '+' || modifier === '*';
	      var optional = modifier === '?' || modifier === '*';
	      var delimiter = res[2] || defaultDelimiter;
	      var pattern = capture || group;
	
	      tokens.push({
	        name: name || key++,
	        prefix: prefix || '',
	        delimiter: delimiter,
	        optional: optional,
	        repeat: repeat,
	        partial: partial,
	        asterisk: !!asterisk,
	        pattern: pattern ? escapeGroup(pattern) : asterisk ? '.*' : '[^' + escapeString(delimiter) + ']+?'
	      });
	    }
	
	    // Match any characters still remaining.
	    if (index < str.length) {
	      path += str.substr(index);
	    }
	
	    // If the path exists, push it onto the end.
	    if (path) {
	      tokens.push(path);
	    }
	
	    return tokens;
	  }
	
	  /**
	   * Compile a string to a template function for the path.
	   *
	   * @param  {string}             str
	   * @param  {Object=}            options
	   * @return {!function(Object=, Object=)}
	   */
	  function compile(str, options) {
	    return tokensToFunction(parse(str, options));
	  }
	
	  /**
	   * Prettier encoding of URI path segments.
	   *
	   * @param  {string}
	   * @return {string}
	   */
	  function encodeURIComponentPretty(str) {
	    return encodeURI(str).replace(/[\/?#]/g, function (c) {
	      return '%' + c.charCodeAt(0).toString(16).toUpperCase();
	    });
	  }
	
	  /**
	   * Encode the asterisk parameter. Similar to `pretty`, but allows slashes.
	   *
	   * @param  {string}
	   * @return {string}
	   */
	  function encodeAsterisk(str) {
	    return encodeURI(str).replace(/[?#]/g, function (c) {
	      return '%' + c.charCodeAt(0).toString(16).toUpperCase();
	    });
	  }
	
	  /**
	   * Expose a method for transforming tokens into the path function.
	   */
	  function tokensToFunction(tokens) {
	    // Compile all the tokens into regexps.
	    var matches = new Array(tokens.length);
	
	    // Compile all the patterns before compilation.
	    for (var i = 0; i < tokens.length; i++) {
	      if (_typeof(tokens[i]) === 'object') {
	        matches[i] = new RegExp('^(?:' + tokens[i].pattern + ')$');
	      }
	    }
	
	    return function (obj, opts) {
	      var path = '';
	      var data = obj || {};
	      var options = opts || {};
	      var encode = options.pretty ? encodeURIComponentPretty : encodeURIComponent;
	
	      for (var i = 0; i < tokens.length; i++) {
	        var token = tokens[i];
	
	        if (typeof token === 'string') {
	          path += token;
	
	          continue;
	        }
	
	        var value = data[token.name];
	        var segment;
	
	        if (value == null) {
	          if (token.optional) {
	            // Prepend partial segment prefixes.
	            if (token.partial) {
	              path += token.prefix;
	            }
	
	            continue;
	          } else {
	            throw new TypeError('Expected "' + token.name + '" to be defined');
	          }
	        }
	
	        if (isarray(value)) {
	          if (!token.repeat) {
	            throw new TypeError('Expected "' + token.name + '" to not repeat, but received `' + JSON.stringify(value) + '`');
	          }
	
	          if (value.length === 0) {
	            if (token.optional) {
	              continue;
	            } else {
	              throw new TypeError('Expected "' + token.name + '" to not be empty');
	            }
	          }
	
	          for (var j = 0; j < value.length; j++) {
	            segment = encode(value[j]);
	
	            if (!matches[i].test(segment)) {
	              throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received `' + JSON.stringify(segment) + '`');
	            }
	
	            path += (j === 0 ? token.prefix : token.delimiter) + segment;
	          }
	
	          continue;
	        }
	
	        segment = token.asterisk ? encodeAsterisk(value) : encode(value);
	
	        if (!matches[i].test(segment)) {
	          throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"');
	        }
	
	        path += token.prefix + segment;
	      }
	
	      return path;
	    };
	  }
	
	  /**
	   * Escape a regular expression string.
	   *
	   * @param  {string} str
	   * @return {string}
	   */
	  function escapeString(str) {
	    return str.replace(/([.+*?=^!:${}()[\]|\/\\])/g, '\\$1');
	  }
	
	  /**
	   * Escape the capturing group by escaping special characters and meaning.
	   *
	   * @param  {string} group
	   * @return {string}
	   */
	  function escapeGroup(group) {
	    return group.replace(/([=!:$\/()])/g, '\\$1');
	  }
	
	  /**
	   * Attach the keys as a property of the regexp.
	   *
	   * @param  {!RegExp} re
	   * @param  {Array}   keys
	   * @return {!RegExp}
	   */
	  function attachKeys(re, keys) {
	    re.keys = keys;
	    return re;
	  }
	
	  /**
	   * Get the flags for a regexp from the options.
	   *
	   * @param  {Object} options
	   * @return {string}
	   */
	  function flags(options) {
	    return options.sensitive ? '' : 'i';
	  }
	
	  /**
	   * Pull out keys from a regexp.
	   *
	   * @param  {!RegExp} path
	   * @param  {!Array}  keys
	   * @return {!RegExp}
	   */
	  function regexpToRegexp(path, keys) {
	    // Use a negative lookahead to match only capturing groups.
	    var groups = path.source.match(/\((?!\?)/g);
	
	    if (groups) {
	      for (var i = 0; i < groups.length; i++) {
	        keys.push({
	          name: i,
	          prefix: null,
	          delimiter: null,
	          optional: false,
	          repeat: false,
	          partial: false,
	          asterisk: false,
	          pattern: null
	        });
	      }
	    }
	
	    return attachKeys(path, keys);
	  }
	
	  /**
	   * Transform an array into a regexp.
	   *
	   * @param  {!Array}  path
	   * @param  {Array}   keys
	   * @param  {!Object} options
	   * @return {!RegExp}
	   */
	  function arrayToRegexp(path, keys, options) {
	    var parts = [];
	
	    for (var i = 0; i < path.length; i++) {
	      parts.push(pathToRegexp(path[i], keys, options).source);
	    }
	
	    var regexp = new RegExp('(?:' + parts.join('|') + ')', flags(options));
	
	    return attachKeys(regexp, keys);
	  }
	
	  /**
	   * Create a path regexp from string input.
	   *
	   * @param  {string}  path
	   * @param  {!Array}  keys
	   * @param  {!Object} options
	   * @return {!RegExp}
	   */
	  function stringToRegexp(path, keys, options) {
	    return tokensToRegExp(parse(path, options), keys, options);
	  }
	
	  /**
	   * Expose a function for taking tokens and returning a RegExp.
	   *
	   * @param  {!Array}          tokens
	   * @param  {(Array|Object)=} keys
	   * @param  {Object=}         options
	   * @return {!RegExp}
	   */
	  function tokensToRegExp(tokens, keys, options) {
	    if (!isarray(keys)) {
	      options = /** @type {!Object} */keys || options;
	      keys = [];
	    }
	
	    options = options || {};
	
	    var strict = options.strict;
	    var end = options.end !== false;
	    var route = '';
	
	    // Iterate over the tokens and create our regexp string.
	    for (var i = 0; i < tokens.length; i++) {
	      var token = tokens[i];
	
	      if (typeof token === 'string') {
	        route += escapeString(token);
	      } else {
	        var prefix = escapeString(token.prefix);
	        var capture = '(?:' + token.pattern + ')';
	
	        keys.push(token);
	
	        if (token.repeat) {
	          capture += '(?:' + prefix + capture + ')*';
	        }
	
	        if (token.optional) {
	          if (!token.partial) {
	            capture = '(?:' + prefix + '(' + capture + '))?';
	          } else {
	            capture = prefix + '(' + capture + ')?';
	          }
	        } else {
	          capture = prefix + '(' + capture + ')';
	        }
	
	        route += capture;
	      }
	    }
	
	    var delimiter = escapeString(options.delimiter || '/');
	    var endsWithDelimiter = route.slice(-delimiter.length) === delimiter;
	
	    // In non-strict mode we allow a slash at the end of match. If the path to
	    // match already ends with a slash, we remove it for consistency. The slash
	    // is valid at the end of a path match, not in the middle. This is important
	    // in non-ending mode, where "/test/" shouldn't match "/test//route".
	    if (!strict) {
	      route = (endsWithDelimiter ? route.slice(0, -delimiter.length) : route) + '(?:' + delimiter + '(?=$))?';
	    }
	
	    if (end) {
	      route += '$';
	    } else {
	      // In non-ending mode, we need the capturing groups to match as much as
	      // possible by using a positive lookahead to the end or next path segment.
	      route += strict && endsWithDelimiter ? '' : '(?=' + delimiter + '|$)';
	    }
	
	    return attachKeys(new RegExp('^' + route, flags(options)), keys);
	  }
	
	  /**
	   * Normalize the given path string, returning a regular expression.
	   *
	   * An empty array can be passed in for the keys, which will hold the
	   * placeholder key descriptions. For example, using `/user/:id`, `keys` will
	   * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
	   *
	   * @param  {(string|RegExp|Array)} path
	   * @param  {(Array|Object)=}       keys
	   * @param  {Object=}               options
	   * @return {!RegExp}
	   */
	  function pathToRegexp(path, keys, options) {
	    if (!isarray(keys)) {
	      options = /** @type {!Object} */keys || options;
	      keys = [];
	    }
	
	    options = options || {};
	
	    if (path instanceof RegExp) {
	      return regexpToRegexp(path, /** @type {!Array} */keys);
	    }
	
	    if (isarray(path)) {
	      return arrayToRegexp( /** @type {!Array} */path, /** @type {!Array} */keys, options);
	    }
	
	    return stringToRegexp( /** @type {string} */path, /** @type {!Array} */keys, options);
	  }
	
	  index.parse = parse_1;
	  index.compile = compile_1;
	  index.tokensToFunction = tokensToFunction_1;
	  index.tokensToRegExp = tokensToRegExp_1;
	
	  /*  */
	
	  function createRouteMap(routes) {
	    var pathMap = Object.create(null);
	    var nameMap = Object.create(null);
	
	    routes.forEach(function (route) {
	      addRouteRecord(pathMap, nameMap, route);
	    });
	
	    return {
	      pathMap: pathMap,
	      nameMap: nameMap
	    };
	  }
	
	  function addRouteRecord(pathMap, nameMap, route, parent, matchAs) {
	    var path = route.path;
	    var name = route.name;
	    assert(path != null, "\"path\" is required in a route configuration.");
	
	    var record = {
	      path: normalizePath(path, parent),
	      components: route.components || { default: route.component },
	      instances: {},
	      name: name,
	      parent: parent,
	      matchAs: matchAs,
	      redirect: route.redirect,
	      beforeEnter: route.beforeEnter,
	      meta: route.meta || {}
	    };
	
	    if (route.children) {
	      // Warn if route is named and has a default child route.
	      // If users navigate to this route by name, the default child will
	      // not be rendered (GH Issue #629)
	      if (false) {}
	      route.children.forEach(function (child) {
	        addRouteRecord(pathMap, nameMap, child, record);
	      });
	    }
	
	    if (route.alias !== undefined) {
	      if (Array.isArray(route.alias)) {
	        route.alias.forEach(function (alias) {
	          addRouteRecord(pathMap, nameMap, { path: alias }, parent, record.path);
	        });
	      } else {
	        addRouteRecord(pathMap, nameMap, { path: route.alias }, parent, record.path);
	      }
	    }
	
	    pathMap[record.path] = record;
	    if (name) {
	      if (!nameMap[name]) {
	        nameMap[name] = record;
	      } else {
	        warn(false, "Duplicate named routes definition: { name: \"" + name + "\", path: \"" + record.path + "\" }");
	      }
	    }
	  }
	
	  function normalizePath(path, parent) {
	    path = path.replace(/\/$/, '');
	    if (path[0] === '/') {
	      return path;
	    }
	    if (parent == null) {
	      return path;
	    }
	    return cleanPath(parent.path + "/" + path);
	  }
	
	  /*  */
	
	  var regexpCache = Object.create(null);
	
	  var regexpParamsCache = Object.create(null);
	
	  var regexpCompileCache = Object.create(null);
	
	  function createMatcher(routes) {
	    var ref = createRouteMap(routes);
	    var pathMap = ref.pathMap;
	    var nameMap = ref.nameMap;
	
	    function match(raw, currentRoute, redirectedFrom) {
	      var location = normalizeLocation(raw, currentRoute);
	      var name = location.name;
	
	      if (name) {
	        var record = nameMap[name];
	        var paramNames = getParams(record.path);
	
	        if (_typeof(location.params) !== 'object') {
	          location.params = {};
	        }
	
	        if (currentRoute && _typeof(currentRoute.params) === 'object') {
	          for (var key in currentRoute.params) {
	            if (!(key in location.params) && paramNames.indexOf(key) > -1) {
	              location.params[key] = currentRoute.params[key];
	            }
	          }
	        }
	
	        if (record) {
	          location.path = fillParams(record.path, location.params, "named route \"" + name + "\"");
	          return _createRoute(record, location, redirectedFrom);
	        }
	      } else if (location.path) {
	        location.params = {};
	        for (var path in pathMap) {
	          if (matchRoute(path, location.params, location.path)) {
	            return _createRoute(pathMap[path], location, redirectedFrom);
	          }
	        }
	      }
	      // no match
	      return _createRoute(null, location);
	    }
	
	    function redirect(record, location) {
	      var originalRedirect = record.redirect;
	      var redirect = typeof originalRedirect === 'function' ? originalRedirect(createRoute(record, location)) : originalRedirect;
	
	      if (typeof redirect === 'string') {
	        redirect = { path: redirect };
	      }
	
	      if (!redirect || (typeof redirect === 'undefined' ? 'undefined' : _typeof(redirect)) !== 'object') {
	        warn(false, "invalid redirect option: " + JSON.stringify(redirect));
	        return _createRoute(null, location);
	      }
	
	      var re = redirect;
	      var name = re.name;
	      var path = re.path;
	      var query = location.query;
	      var hash = location.hash;
	      var params = location.params;
	      query = re.hasOwnProperty('query') ? re.query : query;
	      hash = re.hasOwnProperty('hash') ? re.hash : hash;
	      params = re.hasOwnProperty('params') ? re.params : params;
	
	      if (name) {
	        // resolved named direct
	        var targetRecord = nameMap[name];
	        assert(targetRecord, "redirect failed: named route \"" + name + "\" not found.");
	        return match({
	          _normalized: true,
	          name: name,
	          query: query,
	          hash: hash,
	          params: params
	        }, undefined, location);
	      } else if (path) {
	        // 1. resolve relative redirect
	        var rawPath = resolveRecordPath(path, record);
	        // 2. resolve params
	        var resolvedPath = fillParams(rawPath, params, "redirect route with path \"" + rawPath + "\"");
	        // 3. rematch with existing query and hash
	        return match({
	          _normalized: true,
	          path: resolvedPath,
	          query: query,
	          hash: hash
	        }, undefined, location);
	      } else {
	        warn(false, "invalid redirect option: " + JSON.stringify(redirect));
	        return _createRoute(null, location);
	      }
	    }
	
	    function alias(record, location, matchAs) {
	      var aliasedPath = fillParams(matchAs, location.params, "aliased route with path \"" + matchAs + "\"");
	      var aliasedMatch = match({
	        _normalized: true,
	        path: aliasedPath
	      });
	      if (aliasedMatch) {
	        var matched = aliasedMatch.matched;
	        var aliasedRecord = matched[matched.length - 1];
	        location.params = aliasedMatch.params;
	        return _createRoute(aliasedRecord, location);
	      }
	      return _createRoute(null, location);
	    }
	
	    function _createRoute(record, location, redirectedFrom) {
	      if (record && record.redirect) {
	        return redirect(record, redirectedFrom || location);
	      }
	      if (record && record.matchAs) {
	        return alias(record, location, record.matchAs);
	      }
	      return createRoute(record, location, redirectedFrom);
	    }
	
	    return match;
	  }
	
	  function getRouteRegex(path) {
	    var hit = regexpCache[path];
	    var keys, regexp;
	
	    if (hit) {
	      keys = hit.keys;
	      regexp = hit.regexp;
	    } else {
	      keys = [];
	      regexp = index(path, keys);
	      regexpCache[path] = { keys: keys, regexp: regexp };
	    }
	
	    return { keys: keys, regexp: regexp };
	  }
	
	  function matchRoute(path, params, pathname) {
	    var ref = getRouteRegex(path);
	    var regexp = ref.regexp;
	    var keys = ref.keys;
	    var m = pathname.match(regexp);
	
	    if (!m) {
	      return false;
	    } else if (!params) {
	      return true;
	    }
	
	    for (var i = 1, len = m.length; i < len; ++i) {
	      var key = keys[i - 1];
	      var val = typeof m[i] === 'string' ? decodeURIComponent(m[i]) : m[i];
	      if (key) {
	        params[key.name] = val;
	      }
	    }
	
	    return true;
	  }
	
	  function fillParams(path, params, routeMsg) {
	    try {
	      var filler = regexpCompileCache[path] || (regexpCompileCache[path] = index.compile(path));
	      return filler(params || {}, { pretty: true });
	    } catch (e) {
	      assert(false, "missing param for " + routeMsg + ": " + e.message);
	      return '';
	    }
	  }
	
	  function getParams(path) {
	    return regexpParamsCache[path] || (regexpParamsCache[path] = getRouteRegex(path).keys.map(function (key) {
	      return key.name;
	    }));
	  }
	
	  function resolveRecordPath(path, record) {
	    return resolvePath(path, record.parent ? record.parent.path : '/', true);
	  }
	
	  /*  */
	
	  var inBrowser = typeof window !== 'undefined';
	
	  var supportsHistory = inBrowser && function () {
	    var ua = window.navigator.userAgent;
	
	    if ((ua.indexOf('Android 2.') !== -1 || ua.indexOf('Android 4.0') !== -1) && ua.indexOf('Mobile Safari') !== -1 && ua.indexOf('Chrome') === -1 && ua.indexOf('Windows Phone') === -1) {
	      return false;
	    }
	
	    return window.history && 'pushState' in window.history;
	  }();
	
	  /*  */
	
	  function runQueue(queue, fn, cb) {
	    var step = function step(index) {
	      if (index >= queue.length) {
	        cb();
	      } else {
	        if (queue[index]) {
	          fn(queue[index], function () {
	            step(index + 1);
	          });
	        } else {
	          step(index + 1);
	        }
	      }
	    };
	    step(0);
	  }
	
	  /*  */
	
	  var History = function History(router, base) {
	    this.router = router;
	    this.base = normalizeBase(base);
	    // start with a route object that stands for "nowhere"
	    this.current = START;
	    this.pending = null;
	  };
	
	  History.prototype.listen = function listen(cb) {
	    this.cb = cb;
	  };
	
	  History.prototype.transitionTo = function transitionTo(location, cb) {
	    var this$1 = this;
	
	    var route = this.router.match(location, this.current);
	    this.confirmTransition(route, function () {
	      this$1.updateRoute(route);
	      cb && cb(route);
	      this$1.ensureURL();
	    });
	  };
	
	  History.prototype.confirmTransition = function confirmTransition(route, cb) {
	    var this$1 = this;
	
	    var current = this.current;
	    if (isSameRoute(route, current)) {
	      this.ensureURL();
	      return;
	    }
	
	    var ref = resolveQueue(this.current.matched, route.matched);
	    var deactivated = ref.deactivated;
	    var activated = ref.activated;
	
	    var queue = [].concat(
	    // in-component leave guards
	    extractLeaveGuards(deactivated),
	    // global before hooks
	    this.router.beforeHooks,
	    // enter guards
	    activated.map(function (m) {
	      return m.beforeEnter;
	    }),
	    // async components
	    resolveAsyncComponents(activated));
	
	    this.pending = route;
	    var iterator = function iterator(hook, next) {
	      if (this$1.pending !== route) {
	        return;
	      }
	      hook(route, current, function (to) {
	        if (to === false) {
	          // next(false) -> abort navigation, ensure current URL
	          this$1.ensureURL(true);
	        } else if (typeof to === 'string' || (typeof to === 'undefined' ? 'undefined' : _typeof(to)) === 'object') {
	          // next('/') or next({ path: '/' }) -> redirect
	          this$1.push(to);
	        } else {
	          // confirm transition and pass on the value
	          next(to);
	        }
	      });
	    };
	
	    runQueue(queue, iterator, function () {
	      var postEnterCbs = [];
	      var enterGuards = extractEnterGuards(activated, postEnterCbs, function () {
	        return this$1.current === route;
	      });
	      // wait until async components are resolved before
	      // extracting in-component enter guards
	      runQueue(enterGuards, iterator, function () {
	        if (this$1.pending === route) {
	          this$1.pending = null;
	          cb(route);
	          this$1.router.app.$nextTick(function () {
	            postEnterCbs.forEach(function (cb) {
	              return cb();
	            });
	          });
	        }
	      });
	    });
	  };
	
	  History.prototype.updateRoute = function updateRoute(route) {
	    var prev = this.current;
	    this.current = route;
	    this.cb && this.cb(route);
	    this.router.afterHooks.forEach(function (hook) {
	      hook && hook(route, prev);
	    });
	  };
	
	  function normalizeBase(base) {
	    if (!base) {
	      if (inBrowser) {
	        // respect <base> tag
	        var baseEl = document.querySelector('base');
	        base = baseEl ? baseEl.getAttribute('href') : '/';
	      } else {
	        base = '/';
	      }
	    }
	    // make sure there's the starting slash
	    if (base.charAt(0) !== '/') {
	      base = '/' + base;
	    }
	    // remove trailing slash
	    return base.replace(/\/$/, '');
	  }
	
	  function resolveQueue(current, next) {
	    var i;
	    var max = Math.max(current.length, next.length);
	    for (i = 0; i < max; i++) {
	      if (current[i] !== next[i]) {
	        break;
	      }
	    }
	    return {
	      activated: next.slice(i),
	      deactivated: current.slice(i)
	    };
	  }
	
	  function extractGuard(def, key) {
	    if (typeof def !== 'function') {
	      // extend now so that global mixins are applied.
	      def = _Vue.extend(def);
	    }
	    return def.options[key];
	  }
	
	  function extractLeaveGuards(matched) {
	    return flatten(flatMapComponents(matched, function (def, instance) {
	      var guard = extractGuard(def, 'beforeRouteLeave');
	      if (guard) {
	        return Array.isArray(guard) ? guard.map(function (guard) {
	          return wrapLeaveGuard(guard, instance);
	        }) : wrapLeaveGuard(guard, instance);
	      }
	    }).reverse());
	  }
	
	  function wrapLeaveGuard(guard, instance) {
	    return function routeLeaveGuard() {
	      return guard.apply(instance, arguments);
	    };
	  }
	
	  function extractEnterGuards(matched, cbs, isValid) {
	    return flatten(flatMapComponents(matched, function (def, _, match, key) {
	      var guard = extractGuard(def, 'beforeRouteEnter');
	      if (guard) {
	        return Array.isArray(guard) ? guard.map(function (guard) {
	          return wrapEnterGuard(guard, cbs, match, key, isValid);
	        }) : wrapEnterGuard(guard, cbs, match, key, isValid);
	      }
	    }));
	  }
	
	  function wrapEnterGuard(guard, cbs, match, key, isValid) {
	    return function routeEnterGuard(to, from, next) {
	      return guard(to, from, function (cb) {
	        next(cb);
	        if (typeof cb === 'function') {
	          cbs.push(function () {
	            // #750
	            // if a router-view is wrapped with an out-in transition,
	            // the instance may not have been registered at this time.
	            // we will need to poll for registration until current route
	            // is no longer valid.
	            poll(cb, match.instances, key, isValid);
	          });
	        }
	      });
	    };
	  }
	
	  function poll(cb, // somehow flow cannot infer this is a function
	  instances, key, isValid) {
	    if (instances[key]) {
	      cb(instances[key]);
	    } else if (isValid()) {
	      setTimeout(function () {
	        poll(cb, instances, key, isValid);
	      }, 16);
	    }
	  }
	
	  function resolveAsyncComponents(matched) {
	    return flatMapComponents(matched, function (def, _, match, key) {
	      // if it's a function and doesn't have Vue options attached,
	      // assume it's an async component resolve function.
	      // we are not using Vue's default async resolving mechanism because
	      // we want to halt the navigation until the incoming component has been
	      // resolved.
	      if (typeof def === 'function' && !def.options) {
	        return function (to, from, next) {
	          var resolve = function resolve(resolvedDef) {
	            match.components[key] = resolvedDef;
	            next();
	          };
	
	          var reject = function reject(reason) {
	            warn(false, "Failed to resolve async component " + key + ": " + reason);
	            next(false);
	          };
	
	          var res = def(resolve, reject);
	          if (res && typeof res.then === 'function') {
	            res.then(resolve, reject);
	          }
	        };
	      }
	    });
	  }
	
	  function flatMapComponents(matched, fn) {
	    return flatten(matched.map(function (m) {
	      return Object.keys(m.components).map(function (key) {
	        return fn(m.components[key], m.instances[key], m, key);
	      });
	    }));
	  }
	
	  function flatten(arr) {
	    return Array.prototype.concat.apply([], arr);
	  }
	
	  /*  */
	
	  var positionStore = Object.create(null);
	
	  function saveScrollPosition(key) {
	    if (!key) {
	      return;
	    }
	    positionStore[key] = {
	      x: window.pageXOffset,
	      y: window.pageYOffset
	    };
	  }
	
	  function getScrollPosition(key) {
	    if (!key) {
	      return;
	    }
	    return positionStore[key];
	  }
	
	  function getElementPosition(el) {
	    var docRect = document.documentElement.getBoundingClientRect();
	    var elRect = el.getBoundingClientRect();
	    return {
	      x: elRect.left - docRect.left,
	      y: elRect.top - docRect.top
	    };
	  }
	
	  function isValidPosition(obj) {
	    return isNumber(obj.x) || isNumber(obj.y);
	  }
	
	  function normalizePosition(obj) {
	    return {
	      x: isNumber(obj.x) ? obj.x : window.pageXOffset,
	      y: isNumber(obj.y) ? obj.y : window.pageYOffset
	    };
	  }
	
	  function isNumber(v) {
	    return typeof v === 'number';
	  }
	
	  /*  */
	
	  var genKey = function genKey() {
	    return String(Date.now());
	  };
	  var _key = genKey();
	
	  var HTML5History = function (History) {
	    function HTML5History(router, base) {
	      var this$1 = this;
	
	      History.call(this, router, base);
	
	      var expectScroll = router.options.scrollBehavior;
	      window.addEventListener('popstate', function (e) {
	        _key = e.state && e.state.key;
	        var current = this$1.current;
	        this$1.transitionTo(getLocation(this$1.base), function (next) {
	          if (expectScroll) {
	            this$1.handleScroll(next, current, true);
	          }
	        });
	      });
	
	      if (expectScroll) {
	        window.addEventListener('scroll', function () {
	          saveScrollPosition(_key);
	        });
	      }
	    }
	
	    if (History) HTML5History.__proto__ = History;
	    HTML5History.prototype = Object.create(History && History.prototype);
	    HTML5History.prototype.constructor = HTML5History;
	
	    HTML5History.prototype.go = function go(n) {
	      window.history.go(n);
	    };
	
	    HTML5History.prototype.push = function push(location) {
	      var this$1 = this;
	
	      var current = this.current;
	      this.transitionTo(location, function (route) {
	        pushState(cleanPath(this$1.base + route.fullPath));
	        this$1.handleScroll(route, current, false);
	      });
	    };
	
	    HTML5History.prototype.replace = function replace(location) {
	      var this$1 = this;
	
	      var current = this.current;
	      this.transitionTo(location, function (route) {
	        replaceState(cleanPath(this$1.base + route.fullPath));
	        this$1.handleScroll(route, current, false);
	      });
	    };
	
	    HTML5History.prototype.ensureURL = function ensureURL(push) {
	      if (getLocation(this.base) !== this.current.fullPath) {
	        var current = cleanPath(this.base + this.current.fullPath);
	        push ? pushState(current) : replaceState(current);
	      }
	    };
	
	    HTML5History.prototype.handleScroll = function handleScroll(to, from, isPop) {
	      var router = this.router;
	      if (!router.app) {
	        return;
	      }
	
	      var behavior = router.options.scrollBehavior;
	      if (!behavior) {
	        return;
	      }
	      assert(typeof behavior === 'function', "scrollBehavior must be a function");
	
	      // wait until re-render finishes before scrolling
	      router.app.$nextTick(function () {
	        var position = getScrollPosition(_key);
	        var shouldScroll = behavior(to, from, isPop ? position : null);
	        if (!shouldScroll) {
	          return;
	        }
	        var isObject = (typeof shouldScroll === 'undefined' ? 'undefined' : _typeof(shouldScroll)) === 'object';
	        if (isObject && typeof shouldScroll.selector === 'string') {
	          var el = document.querySelector(shouldScroll.selector);
	          if (el) {
	            position = getElementPosition(el);
	          } else if (isValidPosition(shouldScroll)) {
	            position = normalizePosition(shouldScroll);
	          }
	        } else if (isObject && isValidPosition(shouldScroll)) {
	          position = normalizePosition(shouldScroll);
	        }
	
	        if (position) {
	          window.scrollTo(position.x, position.y);
	        }
	      });
	    };
	
	    return HTML5History;
	  }(History);
	
	  function getLocation(base) {
	    var path = window.location.pathname;
	    if (base && path.indexOf(base) === 0) {
	      path = path.slice(base.length);
	    }
	    return (path || '/') + window.location.search + window.location.hash;
	  }
	
	  function pushState(url, replace) {
	    // try...catch the pushState call to get around Safari
	    // DOM Exception 18 where it limits to 100 pushState calls
	    var history = window.history;
	    try {
	      if (replace) {
	        history.replaceState({ key: _key }, '', url);
	      } else {
	        _key = genKey();
	        history.pushState({ key: _key }, '', url);
	      }
	      saveScrollPosition(_key);
	    } catch (e) {
	      window.location[replace ? 'assign' : 'replace'](url);
	    }
	  }
	
	  function replaceState(url) {
	    pushState(url, true);
	  }
	
	  /*  */
	
	  var HashHistory = function (History) {
	    function HashHistory(router, base, fallback) {
	      History.call(this, router, base);
	
	      // check history fallback deeplinking
	      if (fallback && this.checkFallback()) {
	        return;
	      }
	
	      ensureSlash();
	    }
	
	    if (History) HashHistory.__proto__ = History;
	    HashHistory.prototype = Object.create(History && History.prototype);
	    HashHistory.prototype.constructor = HashHistory;
	
	    HashHistory.prototype.checkFallback = function checkFallback() {
	      var location = getLocation(this.base);
	      if (!/^\/#/.test(location)) {
	        window.location.replace(cleanPath(this.base + '/#' + location));
	        return true;
	      }
	    };
	
	    HashHistory.prototype.onHashChange = function onHashChange() {
	      if (!ensureSlash()) {
	        return;
	      }
	      this.transitionTo(getHash(), function (route) {
	        replaceHash(route.fullPath);
	      });
	    };
	
	    HashHistory.prototype.push = function push(location) {
	      this.transitionTo(location, function (route) {
	        pushHash(route.fullPath);
	      });
	    };
	
	    HashHistory.prototype.replace = function replace(location) {
	      this.transitionTo(location, function (route) {
	        replaceHash(route.fullPath);
	      });
	    };
	
	    HashHistory.prototype.go = function go(n) {
	      window.history.go(n);
	    };
	
	    HashHistory.prototype.ensureURL = function ensureURL(push) {
	      var current = this.current.fullPath;
	      if (getHash() !== current) {
	        push ? pushHash(current) : replaceHash(current);
	      }
	    };
	
	    return HashHistory;
	  }(History);
	
	  function ensureSlash() {
	    var path = getHash();
	    if (path.charAt(0) === '/') {
	      return true;
	    }
	    replaceHash('/' + path);
	    return false;
	  }
	
	  function getHash() {
	    // We can't use window.location.hash here because it's not
	    // consistent across browsers - Firefox will pre-decode it!
	    var href = window.location.href;
	    var index = href.indexOf('#');
	    return index === -1 ? '' : href.slice(index + 1);
	  }
	
	  function pushHash(path) {
	    window.location.hash = path;
	  }
	
	  function replaceHash(path) {
	    var i = window.location.href.indexOf('#');
	    window.location.replace(window.location.href.slice(0, i >= 0 ? i : 0) + '#' + path);
	  }
	
	  /*  */
	
	  var AbstractHistory = function (History) {
	    function AbstractHistory(router) {
	      History.call(this, router);
	      this.stack = [];
	      this.index = -1;
	    }
	
	    if (History) AbstractHistory.__proto__ = History;
	    AbstractHistory.prototype = Object.create(History && History.prototype);
	    AbstractHistory.prototype.constructor = AbstractHistory;
	
	    AbstractHistory.prototype.push = function push(location) {
	      var this$1 = this;
	
	      this.transitionTo(location, function (route) {
	        this$1.stack = this$1.stack.slice(0, this$1.index + 1).concat(route);
	        this$1.index++;
	      });
	    };
	
	    AbstractHistory.prototype.replace = function replace(location) {
	      var this$1 = this;
	
	      this.transitionTo(location, function (route) {
	        this$1.stack = this$1.stack.slice(0, this$1.index).concat(route);
	      });
	    };
	
	    AbstractHistory.prototype.go = function go(n) {
	      var this$1 = this;
	
	      var targetIndex = this.index + n;
	      if (targetIndex < 0 || targetIndex >= this.stack.length) {
	        return;
	      }
	      var route = this.stack[targetIndex];
	      this.confirmTransition(route, function () {
	        this$1.index = targetIndex;
	        this$1.updateRoute(route);
	      });
	    };
	
	    AbstractHistory.prototype.ensureURL = function ensureURL() {
	      // noop
	    };
	
	    return AbstractHistory;
	  }(History);
	
	  /*  */
	
	  var VueRouter = function VueRouter(options) {
	    if (options === void 0) options = {};
	
	    this.app = null;
	    this.options = options;
	    this.beforeHooks = [];
	    this.afterHooks = [];
	    this.match = createMatcher(options.routes || []);
	
	    var mode = options.mode || 'hash';
	    this.fallback = mode === 'history' && !supportsHistory;
	    if (this.fallback) {
	      mode = 'hash';
	    }
	    if (!inBrowser) {
	      mode = 'abstract';
	    }
	    this.mode = mode;
	
	    switch (mode) {
	      case 'history':
	        this.history = new HTML5History(this, options.base);
	        break;
	      case 'hash':
	        this.history = new HashHistory(this, options.base, this.fallback);
	        break;
	      case 'abstract':
	        this.history = new AbstractHistory(this);
	        break;
	      default:
	        assert(false, "invalid mode: " + mode);
	    }
	  };
	
	  var prototypeAccessors = { currentRoute: {} };
	
	  prototypeAccessors.currentRoute.get = function () {
	    return this.history && this.history.current;
	  };
	
	  VueRouter.prototype.init = function init(app /* Vue component instance */) {
	    var this$1 = this;
	
	    assert(install.installed, "not installed. Make sure to call `Vue.use(VueRouter)` " + "before creating root instance.");
	
	    this.app = app;
	
	    var history = this.history;
	
	    if (history instanceof HTML5History) {
	      history.transitionTo(getLocation(history.base));
	    } else if (history instanceof HashHistory) {
	      history.transitionTo(getHash(), function () {
	        window.addEventListener('hashchange', function () {
	          history.onHashChange();
	        });
	      });
	    }
	
	    history.listen(function (route) {
	      this$1.app._route = route;
	    });
	  };
	
	  VueRouter.prototype.beforeEach = function beforeEach(fn) {
	    this.beforeHooks.push(fn);
	  };
	
	  VueRouter.prototype.afterEach = function afterEach(fn) {
	    this.afterHooks.push(fn);
	  };
	
	  VueRouter.prototype.push = function push(location) {
	    this.history.push(location);
	  };
	
	  VueRouter.prototype.replace = function replace(location) {
	    this.history.replace(location);
	  };
	
	  VueRouter.prototype.go = function go(n) {
	    this.history.go(n);
	  };
	
	  VueRouter.prototype.back = function back() {
	    this.go(-1);
	  };
	
	  VueRouter.prototype.forward = function forward() {
	    this.go(1);
	  };
	
	  VueRouter.prototype.getMatchedComponents = function getMatchedComponents() {
	    if (!this.currentRoute) {
	      return [];
	    }
	    return [].concat.apply([], this.currentRoute.matched.map(function (m) {
	      return Object.keys(m.components).map(function (key) {
	        return m.components[key];
	      });
	    }));
	  };
	
	  Object.defineProperties(VueRouter.prototype, prototypeAccessors);
	
	  VueRouter.install = install;
	
	  if (inBrowser && window.Vue) {
	    window.Vue.use(VueRouter);
	  }
	
	  return VueRouter;
	});

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.routes = undefined;
	
	var _view = __webpack_require__(4);
	
	var _view2 = _interopRequireDefault(_view);
	
	var _view3 = __webpack_require__(12);
	
	var _view4 = _interopRequireDefault(_view3);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * 描述: 路由配置文件
	 * 版权: Copyright (c) 2016
	 * 公司: 深圳市昊晨科技开发有限公司
	 * 作者: 陈元
	 * 版本: 1.0
	 * 创建日期: 2016/11/23
	 * 创建时间: 10:11
	 */
	var IndexView = __webpack_require__(15); // 引入indexVue
	// 引入User视图
	// 引入UserMember视图
	
	// 定义路由
	var routes = [{
	    name: "foo",
	    path: '/foo',
	    component: {
	        template: '<div>foo</div>'
	    }
	}, {
	    path: '/index',
	    component: IndexView
	}, {
	    path: '/user/:id',
	    component: _view2.default,
	    children: [{
	        path: "member",
	        component: _view4.default
	    }]
	}];
	
	exports.default = routes;
	exports.routes = routes;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _view = __webpack_require__(5);
	
	var _view2 = _interopRequireDefault(_view);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * 描述: 用户视图
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * 版权: Copyright (c) 2016
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * 公司: 深圳市昊晨科技开发有限公司
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * 作者: 陈元
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * 版本: 1.0
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * 创建日期: 2016/11/23
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * 创建时间: 16:27
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */
	
	
	// 导入视图父类
	var UserTemplate = __webpack_require__(6); // 导入视图模板
	
	var UserView = function (_View) {
	    _inherits(UserView, _View);
	
	    function UserView(view) {
	        _classCallCheck(this, UserView);
	
	        return _possibleConstructorReturn(this, (UserView.__proto__ || Object.getPrototypeOf(UserView)).call(this, view));
	    }
	
	    _createClass(UserView, [{
	        key: "watch",
	        value: function watch() {
	            return {
	                $route: function $route(to, from) {
	                    console.log(to);
	                    console.log(from);
	                }
	            };
	        }
	    }, {
	        key: "data",
	        value: function data() {
	            var data = {
	                name: "UserView",
	                message: "这是一条测试消息"
	            };
	            setInterval(function () {
	                data.message += "@";
	            }, 1000);
	            return data;
	        }
	    }, {
	        key: "created",
	        value: function created() {
	            console.log(this);
	            console.log('=====UserView Created=====');
	            return this;
	        }
	    }]);
	
	    return UserView;
	}(_view2.default);
	
	exports.default = new UserView(UserTemplate);

/***/ },
/* 5 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/**
	 * 描述: 视图类
	 * 版权: Copyright (c) 2016
	 * 公司: 深圳市昊晨科技开发有限公司
	 * 作者: 陈元
	 * 版本: 1.0
	 * 创建日期: 2016/11/23
	 * 创建时间: 16:21
	 */
	var View = function View(view) {
	    _classCallCheck(this, View);
	
	    if (view === undefined) {
	        throw new Error("View类构造方法的参数不能为空");
	    }
	    if (!((typeof view === "undefined" ? "undefined" : _typeof(view)) == "object" && typeof view.render == "function")) {
	        throw new TypeError("View类构造方法的参数必须为vue模板对象");
	    }
	
	    if (typeof this.data === "function") {
	        // 提取子类的data方法
	        view.data = this.data;
	    }
	
	    if (typeof this.created === "function") {
	        // 提取子类的created方法
	        view.created = this.created;
	    }
	
	    if (typeof this.watch === "function") {
	        // 提取子类的watch方法结果
	        view.watch = this['watch']();
	    }
	
	    for (var k in view) {
	        //  将Vue模板对象的方法拷贝到View实例上
	        if (view.hasOwnProperty(k)) this[k] = view[k];
	    }
	};
	
	exports.default = View;
	exports.View = View;

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* styles */
	__webpack_require__(7)
	
	/* template */
	var __vue_template__ = __webpack_require__(11)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "E:\\TestWork\\vue\\src\\views\\user\\view.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-f2651dac", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-f2651dac", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] view.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(8);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(10)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js?sourceMap!./../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-f2651dac!./../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./view.vue", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js?sourceMap!./../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-f2651dac!./../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./view.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(9)();
	// imports
	
	
	// module
	exports.push([module.id, "\nh1 {\n    color: #F00;\n}\n", "", {"version":3,"sources":["/./src/views/user/view.vue?5776b652"],"names":[],"mappings":";AAUA;IACA,YAAA;CACA","file":"view.vue","sourcesContent":["<template>\r\n    <div id=\"user\">\r\n        <h1>Hello {{name}}</h1>\r\n        <p>{{$route.params.id}}</p>\r\n        <div v-text=\"message\"></div>\r\n        <router-view></router-view>\r\n    </div>\r\n</template>\r\n\r\n<style>\r\n    h1 {\r\n        color: #F00;\r\n    }\r\n</style>"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 9 */
/***/ function(module, exports) {

	"use strict";
	
	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function () {
		var list = [];
	
		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for (var i = 0; i < this.length; i++) {
				var item = this[i];
				if (item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
	
		// import a list of modules into the list
		list.i = function (modules, mediaQuery) {
			if (typeof modules === "string") modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for (var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if (typeof id === "number") alreadyImportedModules[id] = true;
			}
			for (i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if (typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if (mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if (mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];
	
	module.exports = function(list, options) {
		if(true) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}
	
		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();
	
		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";
	
		var styles = listToStyles(list);
		addStylesToDom(styles, options);
	
		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}
	
	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}
	
	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}
	
	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}
	
	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}
	
	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}
	
	function addStyle(obj, options) {
		var styleElement, update, remove;
	
		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}
	
		update(obj);
	
		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}
	
	var replaceText = (function () {
		var textStore = [];
	
		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();
	
	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}
	
	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;
	
		if (media) {
			styleElement.setAttribute("media", media);
		}
	
		if (sourceMap) {
			// https://developer.chrome.com/devtools/docs/javascript-debugging
			// this makes source maps inside style tags work properly in Chrome
			css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */';
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}


/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;
	  return _vm._h('div', {
	    attrs: {
	      "id": "user"
	    }
	  }, [_vm._h('h1', ["Hello " + _vm._s(_vm.name)]), " ", _vm._h('p', [_vm._s(_vm.$route.params.id)]), " ", _vm._h('div', {
	    domProps: {
	      "textContent": _vm._s(_vm.message)
	    }
	  }), " ", _vm._h('router-view')])
	},staticRenderFns: []}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-f2651dac", module.exports)
	  }
	}

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _view = __webpack_require__(5);
	
	var _view2 = _interopRequireDefault(_view);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * 描述: 会员视图
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * 版权: Copyright (c) 2016
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * 公司: 深圳市昊晨科技开发有限公司
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * 作者: 陈元
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * 版本: 1.0
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * 创建日期: 2016/11/24
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * 创建时间: 15:24
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */
	
	
	var vue = __webpack_require__(13);
	
	var UserMemberView = function (_View) {
	    _inherits(UserMemberView, _View);
	
	    function UserMemberView(view) {
	        _classCallCheck(this, UserMemberView);
	
	        return _possibleConstructorReturn(this, (UserMemberView.__proto__ || Object.getPrototypeOf(UserMemberView)).call(this, view));
	    }
	
	    _createClass(UserMemberView, [{
	        key: "data",
	        value: function data() {
	            return {
	                name: "UserMemberView"
	            };
	        }
	    }]);
	
	    return UserMemberView;
	}(_view2.default);
	
	exports.default = new UserMemberView(vue);

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* template */
	var __vue_template__ = __webpack_require__(14)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "E:\\TestWork\\vue\\src\\views\\user\\member\\view.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-3757b6b2", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-3757b6b2", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] view.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;
	  return _vm._h('div', {
	    attrs: {
	      "id": "user"
	    }
	  }, [_vm._h('h1', ["Hello " + _vm._s(_vm.name)])])
	},staticRenderFns: []}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-3757b6b2", module.exports)
	  }
	}

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* styles */
	__webpack_require__(16)
	
	/* script */
	__vue_exports__ = __webpack_require__(18)
	
	/* template */
	var __vue_template__ = __webpack_require__(19)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "E:\\TestWork\\vue\\src\\views\\index.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-5caa91e6", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-5caa91e6", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] index.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(17);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(10)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js?sourceMap!./../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-5caa91e6!./../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js?sourceMap!./../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-5caa91e6!./../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(9)();
	// imports
	
	
	// module
	exports.push([module.id, "\nh1 {\n    color: #F00;\n}\n", "", {"version":3,"sources":["/./src/views/index.vue?404fa48a"],"names":[],"mappings":";AAKA;IACA,YAAA;CACA","file":"index.vue","sourcesContent":["<template>\r\n    <h1>Auth Flow{{loggedIn}}</h1>\r\n</template>\r\n\r\n<style>\r\n    h1 {\r\n        color: #F00;\r\n    }\r\n</style>\r\n\r\n<script>\r\n    class test {\r\n        data() {\r\n            return {\r\n                loggedIn: \"TEST\"\r\n            }\r\n        }\r\n\r\n        created() {\r\n            console.log('@@@@@@@@@@@@@');\r\n        }\r\n    }\r\n    let page = {\r\n        data: function () {\r\n            return {\r\n                loggedIn: \"TEST\"\r\n            }\r\n        },\r\n        created: function () {\r\n            console.log('@@@@@@@@@@@@@');\r\n        }\r\n    };\r\n    module.exports = page;\r\n</script>"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 18 */
/***/ function(module, exports) {

	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	
	class test {
	    data() {
	        return {
	            loggedIn: "TEST"
	        };
	    }
	
	    created() {
	        console.log('@@@@@@@@@@@@@');
	    }
	}
	let page = {
	    data: function () {
	        return {
	            loggedIn: "TEST"
	        };
	    },
	    created: function () {
	        console.log('@@@@@@@@@@@@@');
	    }
	};
	module.exports = page;

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;
	  return _vm._h('h1', ["Auth Flow" + _vm._s(_vm.loggedIn)])
	},staticRenderFns: []}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-5caa91e6", module.exports)
	  }
	}

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNWY2M2QxMzNlNzU2ZDU1YThjYTEiLCJ3ZWJwYWNrOi8vLy4vRTovVGVzdFdvcmsvdnVlL3NyYy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vRTovVGVzdFdvcmsvdnVlL34vdnVlL2Rpc3QvdnVlLm1pbi5qcyIsIndlYnBhY2s6Ly8vLi9FOi9UZXN0V29yay92dWUvfi92dWUtcm91dGVyL2Rpc3QvdnVlLXJvdXRlci5qcyIsIndlYnBhY2s6Ly8vLi9FOi9UZXN0V29yay92dWUvc3JjL3JvdXRlci5qcyIsIndlYnBhY2s6Ly8vLi9FOi9UZXN0V29yay92dWUvc3JjL3ZpZXdzL3VzZXIvdmlldy5qcyIsIndlYnBhY2s6Ly8vLi9FOi9UZXN0V29yay92dWUvc3JjL3V0aWxzL3ZpZXcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL3VzZXIvdmlldy52dWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL3VzZXIvdmlldy52dWU/ZDQ4NCIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvdXNlci92aWV3LnZ1ZT8zZjZkIiwid2VicGFjazovLy8uL0U6L1Rlc3RXb3JrL3Z1ZS9+L2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzIiwid2VicGFjazovLy8uL34vdnVlLXN0eWxlLWxvYWRlci9hZGRTdHlsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL3VzZXIvdmlldy52dWU/Y2U4YyIsIndlYnBhY2s6Ly8vLi9FOi9UZXN0V29yay92dWUvc3JjL3ZpZXdzL3VzZXIvbWVtYmVyL3ZpZXcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL3VzZXIvbWVtYmVyL3ZpZXcudnVlIiwid2VicGFjazovLy8uL3NyYy92aWV3cy91c2VyL21lbWJlci92aWV3LnZ1ZT9hOGFkIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9pbmRleC52dWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL2luZGV4LnZ1ZT8zMGY5Iiwid2VicGFjazovLy8uL3NyYy92aWV3cy9pbmRleC52dWU/NDJlNyIsIndlYnBhY2s6Ly8vaW5kZXgudnVlIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9pbmRleC52dWU/NjBhOSJdLCJuYW1lcyI6WyJ1c2UiLCJyb3V0ZXIiLCJyb3V0ZXMiLCJhcHAiLCIkbW91bnQiLCJlIiwidCIsImV4cG9ydHMiLCJtb2R1bGUiLCJWdWUiLCJKU09OIiwic3RyaW5naWZ5IiwiU3RyaW5nIiwicGFyc2VGbG9hdCIsIm4iLCJPYmplY3QiLCJjcmVhdGUiLCJyIiwic3BsaXQiLCJpIiwibGVuZ3RoIiwidG9Mb3dlckNhc2UiLCJpbmRleE9mIiwic3BsaWNlIiwiVXIiLCJjYWxsIiwibyIsImEiLCJzIiwiYXJndW1lbnRzIiwiYXBwbHkiLCJfbGVuZ3RoIiwiYyIsIkFycmF5IiwibCIsInUiLCJmIiwicXIiLCJXciIsImQiLCJwIiwidiIsInJlZHVjZSIsImNvbmNhdCIsInN0YXRpY0tleXMiLCJqb2luIiwiaCIsIm0iLCJnIiwiY2hhckNvZGVBdCIsInkiLCJkZWZpbmVQcm9wZXJ0eSIsInZhbHVlIiwiZW51bWVyYWJsZSIsIndyaXRhYmxlIiwiY29uZmlndXJhYmxlIiwiXyIsIkdyIiwidGVzdCIsImIiLCJ0b1N0cmluZyIsIiQiLCJkaSIsInRhcmdldCIsInBpIiwicHVzaCIsInciLCJwb3AiLCJ4IiwiX19wcm90b19fIiwiQyIsImsiLCJfX29iX18iLCJ5aSIsImdpIiwic2hvdWxkQ29udmVydCIsIm9pIiwiaXNBcnJheSIsImlzRXh0ZW5zaWJsZSIsIl9pc1Z1ZSIsIkEiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiLCJnZXQiLCJzZXQiLCJkZXBlbmQiLCJkZXAiLCJUIiwibm90aWZ5IiwiTyIsIk1hdGgiLCJtYXgiLCJ2bUNvdW50IiwiUyIsImoiLCJrZXlzIiwiRSIsIk4iLCJMIiwicHJvcHMiLCJWciIsInR5cGUiLCJEIiwiZGlyZWN0aXZlcyIsImJpbmQiLCJ1cGRhdGUiLCJNIiwiX2kiLCJiaSIsImV4dGVuZHMiLCJvcHRpb25zIiwibWl4aW5zIiwicHJvdG90eXBlIiwiUmUiLCJQIiwienIiLCJSIiwiQiIsIktyIiwiSSIsImRlZmF1bHQiLCIkb3B0aW9ucyIsInByb3BzRGF0YSIsIkZ1bmN0aW9uIiwiRiIsIm1hdGNoIiwiVSIsIndpIiwieGkiLCJDaSIsImtpIiwiSCIsInNvcnQiLCJpZCIsIkFpIiwicnVuIiwibGkiLCJkZXZ0b29scyIsImFpIiwiZW1pdCIsIlYiLCJzaSIsInoiLCJUaSIsImNsZWFyIiwiSiIsImhhcyIsImFkZCIsIksiLCJfd2F0Y2hlcnMiLCJxIiwiVyIsIloiLCJZIiwiUSIsIl9wcm9wS2V5cyIsIiRwYXJlbnQiLCJkYXRhIiwiX2RhdGEiLCJ0ZSIsImNvbXB1dGVkIiwiamkiLCJHIiwiY2FjaGUiLCJTaSIsImxhenkiLCJkaXJ0eSIsImV2YWx1YXRlIiwibWV0aG9kcyIsIndhdGNoIiwiWCIsImhhbmRsZXIiLCIkd2F0Y2giLCJlZSIsIiRzZXQiLCIkZGVsZXRlIiwidXNlciIsImltbWVkaWF0ZSIsInRlYXJkb3duIiwibmUiLCJFaSIsInRhZyIsImNoaWxkcmVuIiwidGV4dCIsImVsbSIsIm5zIiwiY29udGV4dCIsImNvbXBvbmVudE9wdGlvbnMiLCJpc1N0YXRpYyIsImtleSIsImlzQ2xvbmVkIiwicmUiLCJpZSIsIl9faW5qZWN0ZWQiLCJvZSIsImZuIiwiY2hhckF0Iiwic2xpY2UiLCJpbnZva2VyIiwiYWUiLCJzZSIsImNlIiwibGUiLCJ1ZSIsImZlIiwiZmlsdGVyIiwiZGUiLCJwYXJlbnQiLCJhYnN0cmFjdCIsIiRjaGlsZHJlbiIsIiRyb290IiwiJHJlZnMiLCJfd2F0Y2hlciIsIl9pbmFjdGl2ZSIsIl9pc01vdW50ZWQiLCJfaXNEZXN0cm95ZWQiLCJfaXNCZWluZ0Rlc3Ryb3llZCIsInBlIiwiX21vdW50IiwiJGVsIiwicmVuZGVyIiwiTmkiLCJ2ZSIsIl91cGRhdGUiLCJfcmVuZGVyIiwiJHZub2RlIiwiTGkiLCJfdm5vZGUiLCJfX3BhdGNoX18iLCJfX3Z1ZV9fIiwiX3VwZGF0ZUZyb21QYXJlbnQiLCJfcmVuZGVyQ2hpbGRyZW4iLCJfcGFyZW50Vm5vZGUiLCJfcGFyZW50TGlzdGVuZXJzIiwiX3VwZGF0ZUxpc3RlbmVycyIsIiRzbG90cyIsIkVlIiwiX3JlbmRlckNvbnRleHQiLCIkZm9yY2VVcGRhdGUiLCIkZGVzdHJveSIsIiRvZmYiLCIkZW1pdCIsImhlIiwiX2Jhc2UiLCJleHRlbmQiLCJjaWQiLCJyZXNvbHZlZCIsIndlIiwiUGUiLCJ4ZSIsImZ1bmN0aW9uYWwiLCJtZSIsIm9uIiwibmF0aXZlT24iLCJrZSIsIm5hbWUiLCJDdG9yIiwibGlzdGVuZXJzIiwiT2UiLCJfc2VsZiIsInNsb3RzIiwiZnVuY3Rpb25hbENvbnRleHQiLCJzbG90IiwiZ2UiLCJfaXNDb21wb25lbnQiLCJfY29tcG9uZW50VGFnIiwiaW5saW5lVGVtcGxhdGUiLCJzdGF0aWNSZW5kZXJGbnMiLCJ5ZSIsImNoaWxkIiwia2VlcEFsaXZlIiwiX2UiLCJiZSIsIiRlIiwicmVxdWVzdGVkIiwicGVuZGluZ0NhbGxiYWNrcyIsInRoZW4iLCJhdHRycyIsImRvbVByb3BzIiwiQ2UiLCJob29rIiwiTWkiLCJEaSIsIkFlIiwiU2UiLCJzY29wZWRTbG90cyIsImdldFRhZ05hbWVzcGFjZSIsImlzUmVzZXJ2ZWRUYWciLCJUZSIsIl9zdGF0aWNUcmVlcyIsIiRzY29wZWRTbG90cyIsIiRjcmVhdGVFbGVtZW50IiwiZWwiLCJqZSIsImlzT25jZSIsIiRuZXh0VGljayIsIl9yZW5kZXJQcm94eSIsImVycm9ySGFuZGxlciIsImNvbnNvbGUiLCJlcnJvciIsIl9oIiwiX3MiLCJfbiIsIl9xIiwiX20iLCJfbyIsIl9mIiwiX2wiLCJfdCIsIl9iIiwibXVzdFVzZVByb3AiLCJfayIsImtleUNvZGVzIiwiaXNDb21tZW50IiwiTmUiLCJfZXZlbnRzIiwiJG9uIiwiTGUiLCIkb25jZSIsIkRlIiwiX2luaXQiLCJfdWlkIiwiUGkiLCJNZSIsImNvbnN0cnVjdG9yIiwic3VwZXIiLCJzdXBlck9wdGlvbnMiLCJleHRlbmRPcHRpb25zIiwiX3Njb3BlSWQiLCJjb21wb25lbnRzIiwiSWUiLCJpbnN0YWxsZWQiLCJ1bnNoaWZ0IiwiaW5zdGFsbCIsIkZlIiwibWl4aW4iLCJCZSIsIl9DdG9yIiwiX2Fzc2V0VHlwZXMiLCJmb3JFYWNoIiwiVWUiLCJIZSIsIlZlIiwidXRpbCIsIiRpIiwiZGVsZXRlIiwibmV4dFRpY2siLCJGaSIsInplIiwiSmUiLCJLZSIsInN0YXRpY0NsYXNzIiwicWUiLCJjbGFzcyIsIldlIiwiWmUiLCJYaSIsIkdlIiwiUXIiLCJ0byIsIm5vIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50Iiwid2luZG93IiwiSFRNTFVua25vd25FbGVtZW50IiwiSFRNTEVsZW1lbnQiLCJZZSIsInF1ZXJ5U2VsZWN0b3IiLCJRZSIsInNldEF0dHJpYnV0ZSIsIlhlIiwiY3JlYXRlRWxlbWVudE5TIiwiV2kiLCJldCIsImNyZWF0ZVRleHROb2RlIiwidHQiLCJjcmVhdGVDb21tZW50IiwibnQiLCJpbnNlcnRCZWZvcmUiLCJydCIsInJlbW92ZUNoaWxkIiwiaXQiLCJhcHBlbmRDaGlsZCIsIm90IiwicGFyZW50Tm9kZSIsImF0IiwibmV4dFNpYmxpbmciLCJzdCIsInRhZ05hbWUiLCJjdCIsInRleHRDb250ZW50IiwibHQiLCJjaGlsZE5vZGVzIiwidXQiLCJmdCIsInJlZiIsInJlZkluRm9yIiwiZHQiLCJwdCIsInZ0IiwiaHQiLCJtdCIsImlzUm9vdEluc2VydCIsImluaXQiLCJvbyIsImluc2VydCIsInBlbmRpbmdJbnNlcnQiLCJkZXN0cm95IiwicmVtb3ZlIiwicHJlcGF0Y2giLCJzZXRUZXh0Q29udGVudCIsInBvc3RwYXRjaCIsIm1vZHVsZXMiLCJub2RlT3BzIiwiYW8iLCJub2RlVHlwZSIsImhhc0F0dHJpYnV0ZSIsInJlbW92ZUF0dHJpYnV0ZSIsImd0IiwieXQiLCJvbGRWYWx1ZSIsImJ0IiwiZGVmIiwiY29tcG9uZW50VXBkYXRlZCIsImluc2VydGVkIiwibW9kaWZpZXJzIiwiY28iLCJyYXdOYW1lIiwiJHQiLCJ3dCIsIkppIiwicmVtb3ZlQXR0cmlidXRlTlMiLCJ6aSIsIktpIiwiSGkiLCJWaSIsInFpIiwic2V0QXR0cmlidXRlTlMiLCJ4dCIsIl90cmFuc2l0aW9uQ2xhc3NlcyIsIl9wcmV2Q2xhc3MiLCJDdCIsIl92X2FkZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJfdl9yZW1vdmUiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwia3QiLCJfdmFsdWUiLCJjb21wb3NpbmciLCJBdCIsIk90Iiwic3R5bGUiLCJzdGF0aWNTdHlsZSIsImhvIiwiU3QiLCJUdCIsImdvIiwianQiLCJ0cmltIiwiY2xhc3NMaXN0IiwiZ2V0QXR0cmlidXRlIiwiRXQiLCJyZXBsYWNlIiwiTnQiLCJTbyIsIkx0IiwiRHQiLCJNdCIsIlB0IiwidGltZW91dCIsInByb3BDb3VudCIsIndvIiwia28iLCJPbyIsInNldFRpbWVvdXQiLCJnZXRDb21wdXRlZFN0eWxlIiwiQ28iLCJSdCIsIkFvIiwieG8iLCJUbyIsImhhc1RyYW5zZm9ybSIsIm1hcCIsIkl0IiwiTnVtYmVyIiwiRnQiLCJfbGVhdmVDYiIsImNhbmNlbGxlZCIsIlV0IiwidHJhbnNpdGlvbiIsIl9lbnRlckNiIiwiY3NzIiwiZW50ZXJDbGFzcyIsImVudGVyQWN0aXZlQ2xhc3MiLCJhcHBlYXJDbGFzcyIsImFwcGVhckFjdGl2ZUNsYXNzIiwiYmVmb3JlRW50ZXIiLCJlbnRlciIsImFmdGVyRW50ZXIiLCJlbnRlckNhbmNlbGxlZCIsImJlZm9yZUFwcGVhciIsImFwcGVhciIsImFmdGVyQXBwZWFyIiwiYXBwZWFyQ2FuY2VsbGVkIiwidGkiLCJIdCIsInNob3ciLCJfcGVuZGluZyIsIkJ0IiwibGVhdmVDbGFzcyIsImxlYXZlQWN0aXZlQ2xhc3MiLCJiZWZvcmVMZWF2ZSIsImxlYXZlIiwiYWZ0ZXJMZWF2ZSIsImxlYXZlQ2FuY2VsbGVkIiwiZGVsYXlMZWF2ZSIsImpvIiwiVnQiLCJtdWx0aXBsZSIsIkp0Iiwic2VsZWN0ZWQiLCJzZWxlY3RlZEluZGV4IiwienQiLCJLdCIsInF0IiwiV3QiLCJjcmVhdGVFdmVudCIsImluaXRFdmVudCIsImRpc3BhdGNoRXZlbnQiLCJadCIsIkd0IiwiWXQiLCJRdCIsIlh0IiwiZW4iLCJfbW92ZUNiIiwidG4iLCJuZXdQb3MiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJubiIsInBvcyIsImxlZnQiLCJ0b3AiLCJtb3ZlZCIsInRyYW5zZm9ybSIsIldlYmtpdFRyYW5zZm9ybSIsInRyYW5zaXRpb25EdXJhdGlvbiIsInJuIiwiaW5uZXJIVE1MIiwiVm8iLCJhbiIsIkRhIiwiTmEiLCJMYSIsIk1hIiwiUGEiLCJzbiIsInN1YnN0cmluZyIsIllvIiwic3RhcnQiLCJRbyIsIldvIiwidW5hcnlTbGFzaCIsImVuZCIsIlFpIiwiWWkiLCJyYSIsInNob3VsZERlY29kZU5ld2xpbmVzIiwiZXhwZWN0SFRNTCIsImlzVW5hcnlUYWciLCJaciIsImphIiwic2ZjIiwiRWEiLCJSZWdFeHAiLCJjaGFycyIsInRhIiwibmEiLCJlYSIsIlhvIiwiY24iLCJsbiIsInVuIiwiRmEiLCJSYSIsImxhc3RJbmRleCIsImV4ZWMiLCJpbmRleCIsImRuIiwicG4iLCJ2biIsImhuIiwiYXJnIiwibW4iLCJjYXB0dXJlIiwibmF0aXZlIiwibmF0aXZlRXZlbnRzIiwiZXZlbnRzIiwiZ24iLCJ5biIsImF0dHJzTWFwIiwiYXR0cnNMaXN0Iiwib2EiLCJpYSIsInNhIiwiY2EiLCJsYSIsImxhc3RJbmRleE9mIiwiZXhwIiwiaWR4IiwiJG4iLCJhYSIsImJuIiwid24iLCJDbiIsInhuIiwia24iLCJ1YSIsIndhcm4iLCJmYSIsImRhIiwicGEiLCJpc1ByZVRhZyIsInZhIiwiaGEiLCJtYSIsImdhIiwiZGVsaW1pdGVycyIsInByZXNlcnZlV2hpdGVzcGFjZSIsImVpIiwiVm4iLCJCbiIsIkhuIiwiZm9yYmlkZGVuIiwiQW4iLCJwcmUiLCJPbiIsImpuIiwiRW4iLCJEbiIsIlNuIiwicGxhaW4iLCJUbiIsIk1uIiwiUG4iLCJSbiIsImlmIiwiZWxzZWlmIiwiZWxzZSIsIkxuIiwiYmxvY2siLCJObiIsInNsb3RTY29wZSIsInNsb3RUYXJnZXQiLCJwbGFjZWhvbGRlciIsInFhIiwiZXhwcmVzc2lvbiIsIkluIiwiVWEiLCJmb3IiLCJIYSIsImFsaWFzIiwiaXRlcmF0b3IxIiwiaXRlcmF0b3IyIiwiVW4iLCJjb25kaXRpb25zIiwib25jZSIsInNsb3ROYW1lIiwiY29tcG9uZW50IiwiQmEiLCJoYXNCaW5kaW5ncyIsIkZuIiwiS2EiLCJWYSIsInByb3AiLCJjYW1lbCIsInphIiwiSmEiLCJXYSIsIlphIiwiem4iLCJ5YSIsIkdhIiwiX2EiLCJLbiIsInFuIiwiSm4iLCJzdGF0aWMiLCJabiIsInN0YXRpY0luRm9yIiwic3RhdGljUm9vdCIsIlduIiwiQnIiLCJHbiIsImV2ZXJ5IiwiWW4iLCJRbiIsInRzIiwiZXMiLCJYbiIsIlFhIiwiWWEiLCJlciIsInBhcnNlSW50IiwiWGEiLCJ0ciIsIndyYXBEYXRhIiwibnIiLCJDYSIsImthIiwiQWEiLCJiYSIsIiRhIiwid2EiLCJ4YSIsInJyIiwic3RhdGljUHJvY2Vzc2VkIiwiaXIiLCJvbmNlUHJvY2Vzc2VkIiwib3IiLCJmb3JQcm9jZXNzZWQiLCJjciIsImlmUHJvY2Vzc2VkIiwiYXIiLCJnciIsInlyIiwibHIiLCJ2ciIsInNyIiwic2hpZnQiLCJ1ciIsIl9yIiwiZHIiLCJmciIsInJzIiwicHIiLCJzY29wZSIsImhyIiwibXIiLCJiciIsIiRyIiwiYXN0Iiwid3IiLCJjbGFzc0JpbmRpbmciLCJ4ciIsIkNyIiwic3R5bGVCaW5kaW5nIiwia3IiLCJBciIsIk9hIiwianIiLCJPciIsIlNyIiwiVHIiLCJudW1iZXIiLCJFciIsIk5yIiwiTHIiLCJEciIsImxzIiwiTXIiLCJ1aSIsImNzIiwiUHIiLCJSciIsIm91dGVySFRNTCIsImNsb25lTm9kZSIsIklyIiwiRnIiLCJoYXNPd25Qcm9wZXJ0eSIsIkhyIiwidG9VcHBlckNhc2UiLCJKciIsIllyIiwiWHIiLCJuYXZpZ2F0b3IiLCJ1c2VyQWdlbnQiLCJuaSIsInJpIiwiaWkiLCJnbG9iYWwiLCJwcm9jZXNzIiwiZW52IiwiVlVFX0VOViIsIl9fVlVFX0RFVlRPT0xTX0dMT0JBTF9IT09LX18iLCJQcm9taXNlIiwicmVzb2x2ZSIsIk11dGF0aW9uT2JzZXJ2ZXIiLCJvYnNlcnZlIiwiY2hhcmFjdGVyRGF0YSIsIlNldCIsImNpIiwib3B0aW9uTWVyZ2VTdHJhdGVnaWVzIiwic2lsZW50IiwiaWdub3JlZEVsZW1lbnRzIiwiaXNVbmtub3duRWxlbWVudCIsIl9saWZlY3ljbGVIb29rcyIsIl9tYXhVcGRhdGVDb3VudCIsImZpIiwic3VicyIsImFkZFN1YiIsInJlbW92ZVN1YiIsImFkZERlcCIsInZpIiwiaGkiLCJvYnNlcnZlQXJyYXkiLCJtaSIsImdldE93blByb3BlcnR5TmFtZXMiLCJpc1NldHRpbmdQcm9wcyIsIndhbGsiLCJmcmVlemUiLCJkZWZpbmVSZWFjdGl2ZSIsIl90b1N0cmluZyIsInRvTnVtYmVyIiwibWFrZU1hcCIsImlzQnVpbHRJblRhZyIsImhhc093biIsImlzUHJpbWl0aXZlIiwiY2FjaGVkIiwiY2FtZWxpemUiLCJjYXBpdGFsaXplIiwiaHlwaGVuYXRlIiwidG9BcnJheSIsImlzT2JqZWN0IiwiaXNQbGFpbk9iamVjdCIsInRvT2JqZWN0Iiwibm9vcCIsImdlblN0YXRpY0tleXMiLCJsb29zZUVxdWFsIiwibG9vc2VJbmRleE9mIiwiaXNSZXNlcnZlZCIsInBhcnNlUGF0aCIsImhhc1Byb3RvIiwiaW5Ccm93c2VyIiwiVUEiLCJpc0lFIiwiaXNJRTkiLCJpc0VkZ2UiLCJpc0FuZHJvaWQiLCJpc0lPUyIsImlzU2VydmVyUmVuZGVyaW5nIiwiX1NldCIsIm1lcmdlT3B0aW9ucyIsInJlc29sdmVBc3NldCIsImZvcm1hdENvbXBvbmVudE5hbWUiLCJ2YWxpZGF0ZVByb3AiLCJPaSIsInZtIiwiZGVlcCIsInN5bmMiLCJjYiIsImFjdGl2ZSIsImRlcHMiLCJuZXdEZXBzIiwiZGVwSWRzIiwibmV3RGVwSWRzIiwiZ2V0dGVyIiwiY2xlYW51cERlcHMiLCJfdkZvclJlbW92aW5nIiwicmF3IiwiUmkiLCJJaSIsImluY2x1ZGUiLCJleGNsdWRlIiwiY3JlYXRlZCIsImRlc3Ryb3llZCIsIktlZXBBbGl2ZSIsInZlcnNpb24iLCJCaSIsIlVpIiwic3ZnIiwibWF0aCIsInhodG1sIiwiWmkiLCJHaSIsImVvIiwicm8iLCJpbyIsInNvIiwibG8iLCJ1byIsImZvIiwicG8iLCJ2byIsIm1vIiwic2V0UHJvcGVydHkiLCJ5byIsImJvIiwiJG8iLCJvbnRyYW5zaXRpb25lbmQiLCJvbndlYmtpdHRyYW5zaXRpb25lbmQiLCJvbmFuaW1hdGlvbmVuZCIsIm9ud2Via2l0YW5pbWF0aW9uZW5kIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiRW8iLCJObyIsIkxvIiwiRG8iLCJhY3RpdmVFbGVtZW50Iiwidm1vZGVsIiwiTW8iLCJzb21lIiwiUG8iLCJkaXNwbGF5IiwiX192T3JpZ2luYWxEaXNwbGF5IiwiUm8iLCJtb2RlbCIsIklvIiwiQm9vbGVhbiIsIm1vZGUiLCJGbyIsIl9sZWF2aW5nIiwiQm8iLCJtb3ZlQ2xhc3MiLCJVbyIsInByZXZDaGlsZHJlbiIsImtlcHQiLCJyZW1vdmVkIiwiYmVmb3JlVXBkYXRlIiwidXBkYXRlZCIsImhhc01vdmUiLCJib2R5Iiwib2Zmc2V0SGVpZ2h0IiwicHJvcGVydHlOYW1lIiwiX2hhc01vdmUiLCJIbyIsIlRyYW5zaXRpb24iLCJUcmFuc2l0aW9uR3JvdXAiLCJjb25maWciLCJ6byIsIkpvIiwiS28iLCJxbyIsInNvdXJjZSIsIlpvIiwiR28iLCJTYSIsIlRhIiwiSWEiLCJlc2MiLCJ0YWIiLCJzcGFjZSIsInVwIiwicmlnaHQiLCJkb3duIiwic3RvcCIsInByZXZlbnQiLCJzZWxmIiwiY3RybCIsImFsdCIsIm1ldGEiLCJjbG9hayIsImlzIiwidHJhbnNmb3JtTm9kZSIsImdlbkRhdGEiLCJvcyIsImFzIiwic3MiLCJodG1sIiwidXMiLCJmcyIsImRvY3VtZW50RWxlbWVudCIsInRlbXBsYXRlIiwiY29tcGlsZSIsImZhY3RvcnkiLCJWdWVSb3V0ZXIiLCJWaWV3Iiwicm91dGVyVmlldyIsInJvdXRlIiwiJHJvdXRlIiwiX3JvdXRlclZpZXdDYWNoZSIsImRlcHRoIiwiaW5hY3RpdmUiLCJyb3V0ZXJWaWV3RGVwdGgiLCJtYXRjaGVkIiwiaG9va3MiLCJ2bm9kZSIsImluc3RhbmNlcyIsIm9sZFZub2RlIiwidW5kZWZpbmVkIiwicmVzb2x2ZVBhdGgiLCJyZWxhdGl2ZSIsImJhc2UiLCJhcHBlbmQiLCJzdGFjayIsInNlZ21lbnRzIiwic2VnbWVudCIsInBhdGgiLCJoYXNoIiwicXVlcnkiLCJoYXNoSW5kZXgiLCJxdWVyeUluZGV4IiwiY2xlYW5QYXRoIiwiYXNzZXJ0IiwiY29uZGl0aW9uIiwibWVzc2FnZSIsIkVycm9yIiwiZW5jb2RlIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwiZGVjb2RlIiwiZGVjb2RlVVJJQ29tcG9uZW50IiwicmVzb2x2ZVF1ZXJ5IiwiZXh0cmFRdWVyeSIsInBhcnNlZFF1ZXJ5IiwicGFyc2VRdWVyeSIsInJlcyIsInBhcmFtIiwicGFydHMiLCJ2YWwiLCJzdHJpbmdpZnlRdWVyeSIsIm9iaiIsInJlc3VsdCIsInZhbDIiLCJjcmVhdGVSb3V0ZSIsInJlY29yZCIsImxvY2F0aW9uIiwicmVkaXJlY3RlZEZyb20iLCJwYXJhbXMiLCJmdWxsUGF0aCIsImdldEZ1bGxQYXRoIiwiZm9ybWF0TWF0Y2giLCJTVEFSVCIsInRyYWlsaW5nU2xhc2hSRSIsImlzU2FtZVJvdXRlIiwiaXNPYmplY3RFcXVhbCIsImFLZXlzIiwiYktleXMiLCJpc0luY2x1ZGVkUm91dGUiLCJjdXJyZW50IiwicXVlcnlJbmNsdWRlcyIsIm5vcm1hbGl6ZUxvY2F0aW9uIiwibmV4dCIsIl9ub3JtYWxpemVkIiwicGFyc2VkUGF0aCIsImJhc2VQYXRoIiwidG9UeXBlcyIsIkxpbmsiLCJyZXF1aXJlZCIsImV4YWN0IiwiYWN0aXZlQ2xhc3MiLCJ0aGlzJDEiLCIkcm91dGVyIiwiaGlzdG9yeSIsImhyZWYiLCJjcmVhdGVIcmVmIiwiY2xhc3NlcyIsImxpbmtBY3RpdmVDbGFzcyIsImNvbXBhcmVUYXJnZXQiLCJjbGljayIsIm1ldGFLZXkiLCJjdHJsS2V5Iiwic2hpZnRLZXkiLCJkZWZhdWx0UHJldmVudGVkIiwiYnV0dG9uIiwicHJldmVudERlZmF1bHQiLCJmaW5kQW5jaG9yIiwiX1Z1ZSIsImFEYXRhIiwiYUF0dHJzIiwiX3JvdXRlciIsImdldCQxIiwiX3JvdXRlIiwiYmVmb3JlQ3JlYXRlIiwic3RyYXRzIiwiYmVmb3JlUm91dGVFbnRlciIsImJlZm9yZVJvdXRlTGVhdmUiLCJfX21vZHVsZUV4cG9ydHMiLCJhcnIiLCJpc2FycmF5IiwicGF0aFRvUmVnZXhwIiwicGFyc2VfMSIsInBhcnNlIiwiY29tcGlsZV8xIiwidG9rZW5zVG9GdW5jdGlvbl8xIiwidG9rZW5zVG9GdW5jdGlvbiIsInRva2Vuc1RvUmVnRXhwXzEiLCJ0b2tlbnNUb1JlZ0V4cCIsIlBBVEhfUkVHRVhQIiwic3RyIiwidG9rZW5zIiwiZGVmYXVsdERlbGltaXRlciIsImRlbGltaXRlciIsImVzY2FwZWQiLCJvZmZzZXQiLCJwcmVmaXgiLCJncm91cCIsIm1vZGlmaWVyIiwiYXN0ZXJpc2siLCJwYXJ0aWFsIiwicmVwZWF0Iiwib3B0aW9uYWwiLCJwYXR0ZXJuIiwiZXNjYXBlR3JvdXAiLCJlc2NhcGVTdHJpbmciLCJzdWJzdHIiLCJlbmNvZGVVUklDb21wb25lbnRQcmV0dHkiLCJlbmNvZGVVUkkiLCJlbmNvZGVBc3RlcmlzayIsIm1hdGNoZXMiLCJvcHRzIiwicHJldHR5IiwidG9rZW4iLCJUeXBlRXJyb3IiLCJhdHRhY2hLZXlzIiwiZmxhZ3MiLCJzZW5zaXRpdmUiLCJyZWdleHBUb1JlZ2V4cCIsImdyb3VwcyIsImFycmF5VG9SZWdleHAiLCJyZWdleHAiLCJzdHJpbmdUb1JlZ2V4cCIsInN0cmljdCIsImVuZHNXaXRoRGVsaW1pdGVyIiwiY3JlYXRlUm91dGVNYXAiLCJwYXRoTWFwIiwibmFtZU1hcCIsImFkZFJvdXRlUmVjb3JkIiwibWF0Y2hBcyIsIm5vcm1hbGl6ZVBhdGgiLCJyZWRpcmVjdCIsInJlZ2V4cENhY2hlIiwicmVnZXhwUGFyYW1zQ2FjaGUiLCJyZWdleHBDb21waWxlQ2FjaGUiLCJjcmVhdGVNYXRjaGVyIiwiY3VycmVudFJvdXRlIiwicGFyYW1OYW1lcyIsImdldFBhcmFtcyIsImZpbGxQYXJhbXMiLCJfY3JlYXRlUm91dGUiLCJtYXRjaFJvdXRlIiwib3JpZ2luYWxSZWRpcmVjdCIsInRhcmdldFJlY29yZCIsInJhd1BhdGgiLCJyZXNvbHZlUmVjb3JkUGF0aCIsInJlc29sdmVkUGF0aCIsImFsaWFzZWRQYXRoIiwiYWxpYXNlZE1hdGNoIiwiYWxpYXNlZFJlY29yZCIsImdldFJvdXRlUmVnZXgiLCJoaXQiLCJwYXRobmFtZSIsImxlbiIsInJvdXRlTXNnIiwiZmlsbGVyIiwic3VwcG9ydHNIaXN0b3J5IiwicnVuUXVldWUiLCJxdWV1ZSIsInN0ZXAiLCJIaXN0b3J5Iiwibm9ybWFsaXplQmFzZSIsInBlbmRpbmciLCJsaXN0ZW4iLCJ0cmFuc2l0aW9uVG8iLCJjb25maXJtVHJhbnNpdGlvbiIsInVwZGF0ZVJvdXRlIiwiZW5zdXJlVVJMIiwicmVzb2x2ZVF1ZXVlIiwiZGVhY3RpdmF0ZWQiLCJhY3RpdmF0ZWQiLCJleHRyYWN0TGVhdmVHdWFyZHMiLCJiZWZvcmVIb29rcyIsInJlc29sdmVBc3luY0NvbXBvbmVudHMiLCJpdGVyYXRvciIsInBvc3RFbnRlckNicyIsImVudGVyR3VhcmRzIiwiZXh0cmFjdEVudGVyR3VhcmRzIiwicHJldiIsImFmdGVySG9va3MiLCJiYXNlRWwiLCJleHRyYWN0R3VhcmQiLCJmbGF0dGVuIiwiZmxhdE1hcENvbXBvbmVudHMiLCJpbnN0YW5jZSIsImd1YXJkIiwid3JhcExlYXZlR3VhcmQiLCJyZXZlcnNlIiwicm91dGVMZWF2ZUd1YXJkIiwiY2JzIiwiaXNWYWxpZCIsIndyYXBFbnRlckd1YXJkIiwicm91dGVFbnRlckd1YXJkIiwiZnJvbSIsInBvbGwiLCJyZXNvbHZlZERlZiIsInJlamVjdCIsInJlYXNvbiIsInBvc2l0aW9uU3RvcmUiLCJzYXZlU2Nyb2xsUG9zaXRpb24iLCJwYWdlWE9mZnNldCIsInBhZ2VZT2Zmc2V0IiwiZ2V0U2Nyb2xsUG9zaXRpb24iLCJnZXRFbGVtZW50UG9zaXRpb24iLCJkb2NSZWN0IiwiZWxSZWN0IiwiaXNWYWxpZFBvc2l0aW9uIiwiaXNOdW1iZXIiLCJub3JtYWxpemVQb3NpdGlvbiIsImdlbktleSIsIkRhdGUiLCJub3ciLCJfa2V5IiwiSFRNTDVIaXN0b3J5IiwiZXhwZWN0U2Nyb2xsIiwic2Nyb2xsQmVoYXZpb3IiLCJzdGF0ZSIsImdldExvY2F0aW9uIiwiaGFuZGxlU2Nyb2xsIiwicHVzaFN0YXRlIiwicmVwbGFjZVN0YXRlIiwiaXNQb3AiLCJiZWhhdmlvciIsInBvc2l0aW9uIiwic2hvdWxkU2Nyb2xsIiwic2VsZWN0b3IiLCJzY3JvbGxUbyIsInNlYXJjaCIsInVybCIsIkhhc2hIaXN0b3J5IiwiZmFsbGJhY2siLCJjaGVja0ZhbGxiYWNrIiwiZW5zdXJlU2xhc2giLCJvbkhhc2hDaGFuZ2UiLCJnZXRIYXNoIiwicmVwbGFjZUhhc2giLCJwdXNoSGFzaCIsIkFic3RyYWN0SGlzdG9yeSIsInRhcmdldEluZGV4IiwicHJvdG90eXBlQWNjZXNzb3JzIiwiYmVmb3JlRWFjaCIsImFmdGVyRWFjaCIsImJhY2siLCJmb3J3YXJkIiwiZ2V0TWF0Y2hlZENvbXBvbmVudHMiLCJkZWZpbmVQcm9wZXJ0aWVzIiwiSW5kZXhWaWV3IiwicmVxdWlyZSIsIlVzZXJUZW1wbGF0ZSIsIlVzZXJWaWV3IiwidmlldyIsImxvZyIsInNldEludGVydmFsIiwibGlzdCIsIml0ZW0iLCJtZWRpYVF1ZXJ5IiwiYWxyZWFkeUltcG9ydGVkTW9kdWxlcyIsInZ1ZSIsIlVzZXJNZW1iZXJWaWV3Il0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7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O0FBQzVDLEU7Ozs7OztBQ3BCQTtBQUNBOzs7QUFHQTtBQUNBLGlDQUFnQyxrQkFBa0IsR0FBRyxVQUFVLGtGQUFrRixLQUFLLFVBQVUsNkVBQTZFLFVBQVUsK0NBQStDLHdCQUF3QixTQUFTLGdEQUFnRCxvQkFBb0Isd0JBQXdCLHVEQUF1RCxhQUFhLDJCQUEyQiw2Q0FBNkMsYUFBYSxTQUFTLG9CQUFvQiwrQkFBK0Isd0JBQXdCLHVEQUF1RCxhQUFhLG1DQUFtQyw2Q0FBNkMsYUFBYSxVQUFVLDhCQUE4QiwwQ0FBMEM7O0FBRW40Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSUE7WUFFQTs7dUJBR0E7QUFGQTtBQUlBOztlQUNBO3FCQUNBO0FBQ0E7QUFUQTtBQVVBO3VCQUVBOzt1QkFHQTtBQUZBO0FBR0E7MEJBQ0E7cUJBQ0E7QUFDQTtBQVJBO0FBU0EsdUI7Ozs7OztBQ2hDQSxpQkFBZ0IsbUJBQW1CO0FBQ25DO0FBQ0EsRUFBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIuL21haW4vXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgNWY2M2QxMzNlNzU2ZDU1YThjYTEiLCIvKipcclxuICog5o+P6L+wOiDlhaXlj6PpobXpnaJcclxuICog54mI5p2DOiBDb3B5cmlnaHQgKGMpIDIwMTZcclxuICog5YWs5Y+4OiDmt7HlnLPluILmmIrmmajnp5HmioDlvIDlj5HmnInpmZDlhazlj7hcclxuICog5L2c6ICFOiDpmYjlhYNcclxuICog54mI5pysOiAxLjBcclxuICog5Yib5bu65pel5pyfOiAyMDE2LzExLzIxXHJcbiAqIOWIm+W7uuaXtumXtDogMTQ6MjZcclxuICovXHJcbmltcG9ydCBWdWUgZnJvbSBcInZ1ZVwiOyAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdnVl5qGG5p625YyFXHJcbmltcG9ydCBWdWVSb3V0ZXIgZnJvbSBcInZ1ZS1yb3V0ZXJcIjsgICAgICAgICAgICAgLy8g6Lev55Sx5o+S5Lu2XHJcbmltcG9ydCByb3V0ZXMgZnJvbSBcIi4vcm91dGVyXCI7ICAgICAgICAgICAgICAgICAgLy8g5a+85YWl6Lev55Sx6YWN572u5a+56LGhXHJcblxyXG5WdWUudXNlKFZ1ZVJvdXRlcik7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8g5aaC5p6c5L2/55So5qih5Z2X5YyW5py65Yi257yW56iLXHJcblxyXG5jb25zdCByb3V0ZXIgPSBuZXcgVnVlUm91dGVyKHtyb3V0ZXN9KTsgICAgICAgICAvLyDlrp7kvovljJbkuIDkuKpWdWVSb3V0ZXLot6/nlLHlr7nosaFcclxuY29uc3QgYXBwID0gbmV3IFZ1ZSh7cm91dGVyfSkuJG1vdW50KCcjYXBwJyk7ICAgLy8g5Yib5bu65ZKM5oyC6L295qC55a6e5L6LXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vRTovVGVzdFdvcmsvdnVlL3NyYy9hcHAuanMiLCIvKiFcbiAqIFZ1ZS5qcyB2Mi4xLjBcbiAqIChjKSAyMDE0LTIwMTYgRXZhbiBZb3VcbiAqIFJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cbiAqL1xuIWZ1bmN0aW9uKGUsdCl7XCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHMmJlwidW5kZWZpbmVkXCIhPXR5cGVvZiBtb2R1bGU/bW9kdWxlLmV4cG9ydHM9dCgpOlwiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZD9kZWZpbmUodCk6ZS5WdWU9dCgpfSh0aGlzLGZ1bmN0aW9uKCl7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gZShlKXtyZXR1cm4gbnVsbD09ZT9cIlwiOlwib2JqZWN0XCI9PXR5cGVvZiBlP0pTT04uc3RyaW5naWZ5KGUsbnVsbCwyKTpTdHJpbmcoZSl9ZnVuY3Rpb24gdChlKXt2YXIgdD1wYXJzZUZsb2F0KGUsMTApO3JldHVybiB0fHwwPT09dD90OmV9ZnVuY3Rpb24gbihlLHQpe2Zvcih2YXIgbj1PYmplY3QuY3JlYXRlKG51bGwpLHI9ZS5zcGxpdChcIixcIiksaT0wO2k8ci5sZW5ndGg7aSsrKW5bcltpXV09ITA7cmV0dXJuIHQ/ZnVuY3Rpb24oZSl7cmV0dXJuIG5bZS50b0xvd2VyQ2FzZSgpXX06ZnVuY3Rpb24oZSl7cmV0dXJuIG5bZV19fWZ1bmN0aW9uIHIoZSx0KXtpZihlLmxlbmd0aCl7dmFyIG49ZS5pbmRleE9mKHQpO2lmKG4+LTEpcmV0dXJuIGUuc3BsaWNlKG4sMSl9fWZ1bmN0aW9uIGkoZSx0KXtyZXR1cm4gVXIuY2FsbChlLHQpfWZ1bmN0aW9uIG8oZSl7cmV0dXJuXCJzdHJpbmdcIj09dHlwZW9mIGV8fFwibnVtYmVyXCI9PXR5cGVvZiBlfWZ1bmN0aW9uIGEoZSl7dmFyIHQ9T2JqZWN0LmNyZWF0ZShudWxsKTtyZXR1cm4gZnVuY3Rpb24obil7dmFyIHI9dFtuXTtyZXR1cm4gcnx8KHRbbl09ZShuKSl9fWZ1bmN0aW9uIHMoZSx0KXtmdW5jdGlvbiBuKG4pe3ZhciByPWFyZ3VtZW50cy5sZW5ndGg7cmV0dXJuIHI/cj4xP2UuYXBwbHkodCxhcmd1bWVudHMpOmUuY2FsbCh0LG4pOmUuY2FsbCh0KX1yZXR1cm4gbi5fbGVuZ3RoPWUubGVuZ3RoLG59ZnVuY3Rpb24gYyhlLHQpe3Q9dHx8MDtmb3IodmFyIG49ZS5sZW5ndGgtdCxyPW5ldyBBcnJheShuKTtuLS07KXJbbl09ZVtuK3RdO3JldHVybiByfWZ1bmN0aW9uIGwoZSx0KXtmb3IodmFyIG4gaW4gdCllW25dPXRbbl07cmV0dXJuIGV9ZnVuY3Rpb24gdShlKXtyZXR1cm4gbnVsbCE9PWUmJlwib2JqZWN0XCI9PXR5cGVvZiBlfWZ1bmN0aW9uIGYoZSl7cmV0dXJuIHFyLmNhbGwoZSk9PT1Xcn1mdW5jdGlvbiBkKGUpe2Zvcih2YXIgdD17fSxuPTA7bjxlLmxlbmd0aDtuKyspZVtuXSYmbCh0LGVbbl0pO3JldHVybiB0fWZ1bmN0aW9uIHAoKXt9ZnVuY3Rpb24gdihlKXtyZXR1cm4gZS5yZWR1Y2UoZnVuY3Rpb24oZSx0KXtyZXR1cm4gZS5jb25jYXQodC5zdGF0aWNLZXlzfHxbXSl9LFtdKS5qb2luKFwiLFwiKX1mdW5jdGlvbiBoKGUsdCl7cmV0dXJuIGU9PXR8fCEoIXUoZSl8fCF1KHQpKSYmSlNPTi5zdHJpbmdpZnkoZSk9PT1KU09OLnN0cmluZ2lmeSh0KX1mdW5jdGlvbiBtKGUsdCl7Zm9yKHZhciBuPTA7bjxlLmxlbmd0aDtuKyspaWYoaChlW25dLHQpKXJldHVybiBuO3JldHVybi0xfWZ1bmN0aW9uIGcoZSl7dmFyIHQ9KGUrXCJcIikuY2hhckNvZGVBdCgwKTtyZXR1cm4gMzY9PT10fHw5NT09PXR9ZnVuY3Rpb24geShlLHQsbixyKXtPYmplY3QuZGVmaW5lUHJvcGVydHkoZSx0LHt2YWx1ZTpuLGVudW1lcmFibGU6ISFyLHdyaXRhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMH0pfWZ1bmN0aW9uIF8oZSl7aWYoIUdyLnRlc3QoZSkpe3ZhciB0PWUuc3BsaXQoXCIuXCIpO3JldHVybiBmdW5jdGlvbihlKXtmb3IodmFyIG49MDtuPHQubGVuZ3RoO24rKyl7aWYoIWUpcmV0dXJuO2U9ZVt0W25dXX1yZXR1cm4gZX19fWZ1bmN0aW9uIGIoZSl7cmV0dXJuL25hdGl2ZSBjb2RlLy50ZXN0KGUudG9TdHJpbmcoKSl9ZnVuY3Rpb24gJChlKXtkaS50YXJnZXQmJnBpLnB1c2goZGkudGFyZ2V0KSxkaS50YXJnZXQ9ZX1mdW5jdGlvbiB3KCl7ZGkudGFyZ2V0PXBpLnBvcCgpfWZ1bmN0aW9uIHgoZSx0KXtlLl9fcHJvdG9fXz10fWZ1bmN0aW9uIEMoZSx0LG4pe2Zvcih2YXIgcj0wLGk9bi5sZW5ndGg7cjxpO3IrKyl7dmFyIG89bltyXTt5KGUsbyx0W29dKX19ZnVuY3Rpb24gayhlKXtpZih1KGUpKXt2YXIgdDtyZXR1cm4gaShlLFwiX19vYl9fXCIpJiZlLl9fb2JfXyBpbnN0YW5jZW9mIHlpP3Q9ZS5fX29iX186Z2kuc2hvdWxkQ29udmVydCYmIW9pKCkmJihBcnJheS5pc0FycmF5KGUpfHxmKGUpKSYmT2JqZWN0LmlzRXh0ZW5zaWJsZShlKSYmIWUuX2lzVnVlJiYodD1uZXcgeWkoZSkpLHR9fWZ1bmN0aW9uIEEoZSx0LG4scil7dmFyIGk9bmV3IGRpLG89T2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihlLHQpO2lmKCFvfHxvLmNvbmZpZ3VyYWJsZSE9PSExKXt2YXIgYT1vJiZvLmdldCxzPW8mJm8uc2V0LGM9ayhuKTtPYmplY3QuZGVmaW5lUHJvcGVydHkoZSx0LHtlbnVtZXJhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMCxnZXQ6ZnVuY3Rpb24oKXt2YXIgdD1hP2EuY2FsbChlKTpuO3JldHVybiBkaS50YXJnZXQmJihpLmRlcGVuZCgpLGMmJmMuZGVwLmRlcGVuZCgpLEFycmF5LmlzQXJyYXkodCkmJlQodCkpLHR9LHNldDpmdW5jdGlvbih0KXt2YXIgcj1hP2EuY2FsbChlKTpuO3Q9PT1yfHx0IT09dCYmciE9PXJ8fChzP3MuY2FsbChlLHQpOm49dCxjPWsodCksaS5ub3RpZnkoKSl9fSl9fWZ1bmN0aW9uIE8oZSx0LG4pe2lmKEFycmF5LmlzQXJyYXkoZSkpcmV0dXJuIGUubGVuZ3RoPU1hdGgubWF4KGUubGVuZ3RoLHQpLGUuc3BsaWNlKHQsMSxuKSxuO2lmKGkoZSx0KSlyZXR1cm4gdm9pZChlW3RdPW4pO3ZhciByPWUuX19vYl9fO2lmKCEoZS5faXNWdWV8fHImJnIudm1Db3VudCkpcmV0dXJuIHI/KEEoci52YWx1ZSx0LG4pLHIuZGVwLm5vdGlmeSgpLG4pOnZvaWQoZVt0XT1uKX1mdW5jdGlvbiBTKGUsdCl7dmFyIG49ZS5fX29iX187ZS5faXNWdWV8fG4mJm4udm1Db3VudHx8aShlLHQpJiYoZGVsZXRlIGVbdF0sbiYmbi5kZXAubm90aWZ5KCkpfWZ1bmN0aW9uIFQoZSl7Zm9yKHZhciB0PXZvaWQgMCxuPTAscj1lLmxlbmd0aDtuPHI7bisrKXQ9ZVtuXSx0JiZ0Ll9fb2JfXyYmdC5fX29iX18uZGVwLmRlcGVuZCgpLEFycmF5LmlzQXJyYXkodCkmJlQodCl9ZnVuY3Rpb24gaihlLHQpe2lmKCF0KXJldHVybiBlO2Zvcih2YXIgbixyLG8sYT1PYmplY3Qua2V5cyh0KSxzPTA7czxhLmxlbmd0aDtzKyspbj1hW3NdLHI9ZVtuXSxvPXRbbl0saShlLG4pP2YocikmJmYobykmJmoocixvKTpPKGUsbixvKTtyZXR1cm4gZX1mdW5jdGlvbiBFKGUsdCl7cmV0dXJuIHQ/ZT9lLmNvbmNhdCh0KTpBcnJheS5pc0FycmF5KHQpP3Q6W3RdOmV9ZnVuY3Rpb24gTihlLHQpe3ZhciBuPU9iamVjdC5jcmVhdGUoZXx8bnVsbCk7cmV0dXJuIHQ/bChuLHQpOm59ZnVuY3Rpb24gTChlKXt2YXIgdD1lLnByb3BzO2lmKHQpe3ZhciBuLHIsaSxvPXt9O2lmKEFycmF5LmlzQXJyYXkodCkpZm9yKG49dC5sZW5ndGg7bi0tOylyPXRbbl0sXCJzdHJpbmdcIj09dHlwZW9mIHImJihpPVZyKHIpLG9baV09e3R5cGU6bnVsbH0pO2Vsc2UgaWYoZih0KSlmb3IodmFyIGEgaW4gdClyPXRbYV0saT1WcihhKSxvW2ldPWYocik/cjp7dHlwZTpyfTtlLnByb3BzPW99fWZ1bmN0aW9uIEQoZSl7dmFyIHQ9ZS5kaXJlY3RpdmVzO2lmKHQpZm9yKHZhciBuIGluIHQpe3ZhciByPXRbbl07XCJmdW5jdGlvblwiPT10eXBlb2YgciYmKHRbbl09e2JpbmQ6cix1cGRhdGU6cn0pfX1mdW5jdGlvbiBNKGUsdCxuKXtmdW5jdGlvbiByKHIpe3ZhciBpPV9pW3JdfHxiaTt1W3JdPWkoZVtyXSx0W3JdLG4scil9TCh0KSxEKHQpO3ZhciBvPXQuZXh0ZW5kcztpZihvJiYoZT1cImZ1bmN0aW9uXCI9PXR5cGVvZiBvP00oZSxvLm9wdGlvbnMsbik6TShlLG8sbikpLHQubWl4aW5zKWZvcih2YXIgYT0wLHM9dC5taXhpbnMubGVuZ3RoO2E8czthKyspe3ZhciBjPXQubWl4aW5zW2FdO2MucHJvdG90eXBlIGluc3RhbmNlb2YgUmUmJihjPWMub3B0aW9ucyksZT1NKGUsYyxuKX12YXIgbCx1PXt9O2ZvcihsIGluIGUpcihsKTtmb3IobCBpbiB0KWkoZSxsKXx8cihsKTtyZXR1cm4gdX1mdW5jdGlvbiBQKGUsdCxuLHIpe2lmKFwic3RyaW5nXCI9PXR5cGVvZiBuKXt2YXIgaT1lW3RdLG89aVtuXXx8aVtWcihuKV18fGlbenIoVnIobikpXTtyZXR1cm4gb319ZnVuY3Rpb24gUihlLHQsbixyKXt2YXIgbz10W2VdLGE9IWkobixlKSxzPW5bZV07aWYoQihvLnR5cGUpJiYoYSYmIWkobyxcImRlZmF1bHRcIik/cz0hMTpcIlwiIT09cyYmcyE9PUtyKGUpfHwocz0hMCkpLHZvaWQgMD09PXMpe3M9SShyLG8sZSk7dmFyIGM9Z2kuc2hvdWxkQ29udmVydDtnaS5zaG91bGRDb252ZXJ0PSEwLGsocyksZ2kuc2hvdWxkQ29udmVydD1jfXJldHVybiBzfWZ1bmN0aW9uIEkoZSx0LG4pe2lmKGkodCxcImRlZmF1bHRcIikpe3ZhciByPXQuZGVmYXVsdDtyZXR1cm4gdShyKSxlJiZlLiRvcHRpb25zLnByb3BzRGF0YSYmdm9pZCAwPT09ZS4kb3B0aW9ucy5wcm9wc0RhdGFbbl0mJnZvaWQgMCE9PWVbbl0/ZVtuXTpcImZ1bmN0aW9uXCI9PXR5cGVvZiByJiZ0LnR5cGUhPT1GdW5jdGlvbj9yLmNhbGwoZSk6cn19ZnVuY3Rpb24gRihlKXt2YXIgdD1lJiZlLnRvU3RyaW5nKCkubWF0Y2goL15cXHMqZnVuY3Rpb24gKFxcdyspLyk7cmV0dXJuIHQmJnRbMV19ZnVuY3Rpb24gQihlKXtpZighQXJyYXkuaXNBcnJheShlKSlyZXR1cm5cIkJvb2xlYW5cIj09PUYoZSk7Zm9yKHZhciB0PTAsbj1lLmxlbmd0aDt0PG47dCsrKWlmKFwiQm9vbGVhblwiPT09RihlW3RdKSlyZXR1cm4hMDtyZXR1cm4hMX1mdW5jdGlvbiBVKCl7d2kubGVuZ3RoPTAseGk9e30sQ2k9a2k9ITF9ZnVuY3Rpb24gSCgpe2ZvcihraT0hMCx3aS5zb3J0KGZ1bmN0aW9uKGUsdCl7cmV0dXJuIGUuaWQtdC5pZH0pLEFpPTA7QWk8d2kubGVuZ3RoO0FpKyspe3ZhciBlPXdpW0FpXSx0PWUuaWQ7eGlbdF09bnVsbCxlLnJ1bigpfWFpJiZsaS5kZXZ0b29scyYmYWkuZW1pdChcImZsdXNoXCIpLFUoKX1mdW5jdGlvbiBWKGUpe3ZhciB0PWUuaWQ7aWYobnVsbD09eGlbdF0pe2lmKHhpW3RdPSEwLGtpKXtmb3IodmFyIG49d2kubGVuZ3RoLTE7bj49MCYmd2lbbl0uaWQ+ZS5pZDspbi0tO3dpLnNwbGljZShNYXRoLm1heChuLEFpKSsxLDAsZSl9ZWxzZSB3aS5wdXNoKGUpO0NpfHwoQ2k9ITAsc2koSCkpfX1mdW5jdGlvbiB6KGUpe1RpLmNsZWFyKCksSihlLFRpKX1mdW5jdGlvbiBKKGUsdCl7dmFyIG4scixpPUFycmF5LmlzQXJyYXkoZSk7aWYoKGl8fHUoZSkpJiZPYmplY3QuaXNFeHRlbnNpYmxlKGUpKXtpZihlLl9fb2JfXyl7dmFyIG89ZS5fX29iX18uZGVwLmlkO2lmKHQuaGFzKG8pKXJldHVybjt0LmFkZChvKX1pZihpKWZvcihuPWUubGVuZ3RoO24tLTspSihlW25dLHQpO2Vsc2UgZm9yKHI9T2JqZWN0LmtleXMoZSksbj1yLmxlbmd0aDtuLS07KUooZVtyW25dXSx0KX19ZnVuY3Rpb24gSyhlKXtlLl93YXRjaGVycz1bXSxxKGUpLFcoZSksWihlKSxZKGUpLFEoZSl9ZnVuY3Rpb24gcShlKXt2YXIgdD1lLiRvcHRpb25zLnByb3BzO2lmKHQpe3ZhciBuPWUuJG9wdGlvbnMucHJvcHNEYXRhfHx7fSxyPWUuJG9wdGlvbnMuX3Byb3BLZXlzPU9iamVjdC5rZXlzKHQpLGk9IWUuJHBhcmVudDtnaS5zaG91bGRDb252ZXJ0PWk7Zm9yKHZhciBvPWZ1bmN0aW9uKGkpe3ZhciBvPXJbaV07QShlLG8sUihvLHQsbixlKSl9LGE9MDthPHIubGVuZ3RoO2ErKylvKGEpO2dpLnNob3VsZENvbnZlcnQ9ITB9fWZ1bmN0aW9uIFcoZSl7dmFyIHQ9ZS4kb3B0aW9ucy5kYXRhO3Q9ZS5fZGF0YT1cImZ1bmN0aW9uXCI9PXR5cGVvZiB0P3QuY2FsbChlKTp0fHx7fSxmKHQpfHwodD17fSk7Zm9yKHZhciBuPU9iamVjdC5rZXlzKHQpLHI9ZS4kb3B0aW9ucy5wcm9wcyxvPW4ubGVuZ3RoO28tLTspciYmaShyLG5bb10pfHx0ZShlLG5bb10pO2sodCksdC5fX29iX18mJnQuX19vYl9fLnZtQ291bnQrK31mdW5jdGlvbiBaKGUpe3ZhciB0PWUuJG9wdGlvbnMuY29tcHV0ZWQ7aWYodClmb3IodmFyIG4gaW4gdCl7dmFyIHI9dFtuXTtcImZ1bmN0aW9uXCI9PXR5cGVvZiByPyhqaS5nZXQ9RyhyLGUpLGppLnNldD1wKTooamkuZ2V0PXIuZ2V0P3IuY2FjaGUhPT0hMT9HKHIuZ2V0LGUpOnMoci5nZXQsZSk6cCxqaS5zZXQ9ci5zZXQ/cyhyLnNldCxlKTpwKSxPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxuLGppKX19ZnVuY3Rpb24gRyhlLHQpe3ZhciBuPW5ldyBTaSh0LGUscCx7bGF6eTohMH0pO3JldHVybiBmdW5jdGlvbigpe3JldHVybiBuLmRpcnR5JiZuLmV2YWx1YXRlKCksZGkudGFyZ2V0JiZuLmRlcGVuZCgpLG4udmFsdWV9fWZ1bmN0aW9uIFkoZSl7dmFyIHQ9ZS4kb3B0aW9ucy5tZXRob2RzO2lmKHQpZm9yKHZhciBuIGluIHQpZVtuXT1udWxsPT10W25dP3A6cyh0W25dLGUpfWZ1bmN0aW9uIFEoZSl7dmFyIHQ9ZS4kb3B0aW9ucy53YXRjaDtpZih0KWZvcih2YXIgbiBpbiB0KXt2YXIgcj10W25dO2lmKEFycmF5LmlzQXJyYXkocikpZm9yKHZhciBpPTA7aTxyLmxlbmd0aDtpKyspWChlLG4scltpXSk7ZWxzZSBYKGUsbixyKX19ZnVuY3Rpb24gWChlLHQsbil7dmFyIHI7ZihuKSYmKHI9bixuPW4uaGFuZGxlciksXCJzdHJpbmdcIj09dHlwZW9mIG4mJihuPWVbbl0pLGUuJHdhdGNoKHQsbixyKX1mdW5jdGlvbiBlZShlKXt2YXIgdD17fTt0LmdldD1mdW5jdGlvbigpe3JldHVybiB0aGlzLl9kYXRhfSxPYmplY3QuZGVmaW5lUHJvcGVydHkoZS5wcm90b3R5cGUsXCIkZGF0YVwiLHQpLGUucHJvdG90eXBlLiRzZXQ9TyxlLnByb3RvdHlwZS4kZGVsZXRlPVMsZS5wcm90b3R5cGUuJHdhdGNoPWZ1bmN0aW9uKGUsdCxuKXt2YXIgcj10aGlzO249bnx8e30sbi51c2VyPSEwO3ZhciBpPW5ldyBTaShyLGUsdCxuKTtyZXR1cm4gbi5pbW1lZGlhdGUmJnQuY2FsbChyLGkudmFsdWUpLGZ1bmN0aW9uKCl7aS50ZWFyZG93bigpfX19ZnVuY3Rpb24gdGUoZSx0KXtnKHQpfHxPYmplY3QuZGVmaW5lUHJvcGVydHkoZSx0LHtjb25maWd1cmFibGU6ITAsZW51bWVyYWJsZTohMCxnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gZS5fZGF0YVt0XX0sc2V0OmZ1bmN0aW9uKG4pe2UuX2RhdGFbdF09bn19KX1mdW5jdGlvbiBuZShlKXt2YXIgdD1uZXcgRWkoZS50YWcsZS5kYXRhLGUuY2hpbGRyZW4sZS50ZXh0LGUuZWxtLGUubnMsZS5jb250ZXh0LGUuY29tcG9uZW50T3B0aW9ucyk7cmV0dXJuIHQuaXNTdGF0aWM9ZS5pc1N0YXRpYyx0LmtleT1lLmtleSx0LmlzQ2xvbmVkPSEwLHR9ZnVuY3Rpb24gcmUoZSl7Zm9yKHZhciB0PW5ldyBBcnJheShlLmxlbmd0aCksbj0wO248ZS5sZW5ndGg7bisrKXRbbl09bmUoZVtuXSk7cmV0dXJuIHR9ZnVuY3Rpb24gaWUoZSx0LG4scil7cis9dDt2YXIgaT1lLl9faW5qZWN0ZWR8fChlLl9faW5qZWN0ZWQ9e30pO2lmKCFpW3JdKXtpW3JdPSEwO3ZhciBvPWVbdF07bz9lW3RdPWZ1bmN0aW9uKCl7by5hcHBseSh0aGlzLGFyZ3VtZW50cyksbi5hcHBseSh0aGlzLGFyZ3VtZW50cyl9OmVbdF09bn19ZnVuY3Rpb24gb2UoZSx0LG4scixpKXt2YXIgbyxhLHMsYyxsLHU7Zm9yKG8gaW4gZSlpZihhPWVbb10scz10W29dLGEpaWYocyl7aWYoYSE9PXMpaWYoQXJyYXkuaXNBcnJheShzKSl7cy5sZW5ndGg9YS5sZW5ndGg7Zm9yKHZhciBmPTA7ZjxzLmxlbmd0aDtmKyspc1tmXT1hW2ZdO2Vbb109c31lbHNlIHMuZm49YSxlW29dPXN9ZWxzZSB1PVwiIVwiPT09by5jaGFyQXQoMCksbD11P28uc2xpY2UoMSk6byxBcnJheS5pc0FycmF5KGEpP24obCxhLmludm9rZXI9YWUoYSksdSk6KGEuaW52b2tlcnx8KGM9YSxhPWVbb109e30sYS5mbj1jLGEuaW52b2tlcj1zZShhKSksbihsLGEuaW52b2tlcix1KSk7ZWxzZTtmb3IobyBpbiB0KWVbb118fChsPVwiIVwiPT09by5jaGFyQXQoMCk/by5zbGljZSgxKTpvLHIobCx0W29dLmludm9rZXIpKX1mdW5jdGlvbiBhZShlKXtyZXR1cm4gZnVuY3Rpb24odCl7Zm9yKHZhciBuPWFyZ3VtZW50cyxyPTE9PT1hcmd1bWVudHMubGVuZ3RoLGk9MDtpPGUubGVuZ3RoO2krKylyP2VbaV0odCk6ZVtpXS5hcHBseShudWxsLG4pfX1mdW5jdGlvbiBzZShlKXtyZXR1cm4gZnVuY3Rpb24odCl7dmFyIG49MT09PWFyZ3VtZW50cy5sZW5ndGg7bj9lLmZuKHQpOmUuZm4uYXBwbHkobnVsbCxhcmd1bWVudHMpfX1mdW5jdGlvbiBjZShlLHQsbil7aWYobyhlKSlyZXR1cm5bbGUoZSldO2lmKEFycmF5LmlzQXJyYXkoZSkpe2Zvcih2YXIgcj1bXSxpPTAsYT1lLmxlbmd0aDtpPGE7aSsrKXt2YXIgcz1lW2ldLGM9cltyLmxlbmd0aC0xXTtBcnJheS5pc0FycmF5KHMpP3IucHVzaC5hcHBseShyLGNlKHMsdCwobnx8XCJcIikrXCJfXCIraSkpOm8ocyk/YyYmYy50ZXh0P2MudGV4dCs9U3RyaW5nKHMpOlwiXCIhPT1zJiZyLnB1c2gobGUocykpOnMgaW5zdGFuY2VvZiBFaSYmKHMudGV4dCYmYyYmYy50ZXh0P2MuaXNDbG9uZWR8fChjLnRleHQrPXMudGV4dCk6KHQmJnVlKHMsdCkscy50YWcmJm51bGw9PXMua2V5JiZudWxsIT1uJiYocy5rZXk9XCJfX3ZsaXN0XCIrbitcIl9cIitpK1wiX19cIiksci5wdXNoKHMpKSl9cmV0dXJuIHJ9fWZ1bmN0aW9uIGxlKGUpe3JldHVybiBuZXcgRWkodm9pZCAwLHZvaWQgMCx2b2lkIDAsU3RyaW5nKGUpKX1mdW5jdGlvbiB1ZShlLHQpe2lmKGUudGFnJiYhZS5ucyYmKGUubnM9dCxlLmNoaWxkcmVuKSlmb3IodmFyIG49MCxyPWUuY2hpbGRyZW4ubGVuZ3RoO248cjtuKyspdWUoZS5jaGlsZHJlbltuXSx0KX1mdW5jdGlvbiBmZShlKXtyZXR1cm4gZSYmZS5maWx0ZXIoZnVuY3Rpb24oZSl7cmV0dXJuIGUmJmUuY29tcG9uZW50T3B0aW9uc30pWzBdfWZ1bmN0aW9uIGRlKGUpe3ZhciB0PWUuJG9wdGlvbnMsbj10LnBhcmVudDtpZihuJiYhdC5hYnN0cmFjdCl7Zm9yKDtuLiRvcHRpb25zLmFic3RyYWN0JiZuLiRwYXJlbnQ7KW49bi4kcGFyZW50O24uJGNoaWxkcmVuLnB1c2goZSl9ZS4kcGFyZW50PW4sZS4kcm9vdD1uP24uJHJvb3Q6ZSxlLiRjaGlsZHJlbj1bXSxlLiRyZWZzPXt9LGUuX3dhdGNoZXI9bnVsbCxlLl9pbmFjdGl2ZT0hMSxlLl9pc01vdW50ZWQ9ITEsZS5faXNEZXN0cm95ZWQ9ITEsZS5faXNCZWluZ0Rlc3Ryb3llZD0hMX1mdW5jdGlvbiBwZShlKXtlLnByb3RvdHlwZS5fbW91bnQ9ZnVuY3Rpb24oZSx0KXt2YXIgbj10aGlzO3JldHVybiBuLiRlbD1lLG4uJG9wdGlvbnMucmVuZGVyfHwobi4kb3B0aW9ucy5yZW5kZXI9TmkpLHZlKG4sXCJiZWZvcmVNb3VudFwiKSxuLl93YXRjaGVyPW5ldyBTaShuLGZ1bmN0aW9uKCl7bi5fdXBkYXRlKG4uX3JlbmRlcigpLHQpfSxwKSx0PSExLG51bGw9PW4uJHZub2RlJiYobi5faXNNb3VudGVkPSEwLHZlKG4sXCJtb3VudGVkXCIpKSxufSxlLnByb3RvdHlwZS5fdXBkYXRlPWZ1bmN0aW9uKGUsdCl7dmFyIG49dGhpcztuLl9pc01vdW50ZWQmJnZlKG4sXCJiZWZvcmVVcGRhdGVcIik7dmFyIHI9bi4kZWwsaT1MaTtMaT1uO3ZhciBvPW4uX3Zub2RlO24uX3Zub2RlPWUsbz9uLiRlbD1uLl9fcGF0Y2hfXyhvLGUpOm4uJGVsPW4uX19wYXRjaF9fKG4uJGVsLGUsdCksTGk9aSxyJiYoci5fX3Z1ZV9fPW51bGwpLG4uJGVsJiYobi4kZWwuX192dWVfXz1uKSxuLiR2bm9kZSYmbi4kcGFyZW50JiZuLiR2bm9kZT09PW4uJHBhcmVudC5fdm5vZGUmJihuLiRwYXJlbnQuJGVsPW4uJGVsKSxuLl9pc01vdW50ZWQmJnZlKG4sXCJ1cGRhdGVkXCIpfSxlLnByb3RvdHlwZS5fdXBkYXRlRnJvbVBhcmVudD1mdW5jdGlvbihlLHQsbixyKXt2YXIgaT10aGlzLG89ISghaS4kb3B0aW9ucy5fcmVuZGVyQ2hpbGRyZW4mJiFyKTtpZihpLiRvcHRpb25zLl9wYXJlbnRWbm9kZT1uLGkuJG9wdGlvbnMuX3JlbmRlckNoaWxkcmVuPXIsZSYmaS4kb3B0aW9ucy5wcm9wcyl7Z2kuc2hvdWxkQ29udmVydD0hMTtmb3IodmFyIGE9aS4kb3B0aW9ucy5fcHJvcEtleXN8fFtdLHM9MDtzPGEubGVuZ3RoO3MrKyl7dmFyIGM9YVtzXTtpW2NdPVIoYyxpLiRvcHRpb25zLnByb3BzLGUsaSl9Z2kuc2hvdWxkQ29udmVydD0hMCxpLiRvcHRpb25zLnByb3BzRGF0YT1lfWlmKHQpe3ZhciBsPWkuJG9wdGlvbnMuX3BhcmVudExpc3RlbmVycztpLiRvcHRpb25zLl9wYXJlbnRMaXN0ZW5lcnM9dCxpLl91cGRhdGVMaXN0ZW5lcnModCxsKX1vJiYoaS4kc2xvdHM9RWUocixpLl9yZW5kZXJDb250ZXh0KSxpLiRmb3JjZVVwZGF0ZSgpKX0sZS5wcm90b3R5cGUuJGZvcmNlVXBkYXRlPWZ1bmN0aW9uKCl7dmFyIGU9dGhpcztlLl93YXRjaGVyJiZlLl93YXRjaGVyLnVwZGF0ZSgpfSxlLnByb3RvdHlwZS4kZGVzdHJveT1mdW5jdGlvbigpe3ZhciBlPXRoaXM7aWYoIWUuX2lzQmVpbmdEZXN0cm95ZWQpe3ZlKGUsXCJiZWZvcmVEZXN0cm95XCIpLGUuX2lzQmVpbmdEZXN0cm95ZWQ9ITA7dmFyIHQ9ZS4kcGFyZW50OyF0fHx0Ll9pc0JlaW5nRGVzdHJveWVkfHxlLiRvcHRpb25zLmFic3RyYWN0fHxyKHQuJGNoaWxkcmVuLGUpLGUuX3dhdGNoZXImJmUuX3dhdGNoZXIudGVhcmRvd24oKTtmb3IodmFyIG49ZS5fd2F0Y2hlcnMubGVuZ3RoO24tLTspZS5fd2F0Y2hlcnNbbl0udGVhcmRvd24oKTtlLl9kYXRhLl9fb2JfXyYmZS5fZGF0YS5fX29iX18udm1Db3VudC0tLGUuX2lzRGVzdHJveWVkPSEwLHZlKGUsXCJkZXN0cm95ZWRcIiksZS4kb2ZmKCksZS4kZWwmJihlLiRlbC5fX3Z1ZV9fPW51bGwpLGUuX19wYXRjaF9fKGUuX3Zub2RlLG51bGwpfX19ZnVuY3Rpb24gdmUoZSx0KXt2YXIgbj1lLiRvcHRpb25zW3RdO2lmKG4pZm9yKHZhciByPTAsaT1uLmxlbmd0aDtyPGk7cisrKW5bcl0uY2FsbChlKTtlLiRlbWl0KFwiaG9vazpcIit0KX1mdW5jdGlvbiBoZShlLHQsbixyLGkpe2lmKGUpe3ZhciBvPW4uJG9wdGlvbnMuX2Jhc2U7aWYodShlKSYmKGU9by5leHRlbmQoZSkpLFwiZnVuY3Rpb25cIj09dHlwZW9mIGUpe2lmKCFlLmNpZClpZihlLnJlc29sdmVkKWU9ZS5yZXNvbHZlZDtlbHNlIGlmKGU9d2UoZSxvLGZ1bmN0aW9uKCl7bi4kZm9yY2VVcGRhdGUoKX0pLCFlKXJldHVybjtQZShlKSx0PXR8fHt9O3ZhciBhPXhlKHQsZSk7aWYoZS5vcHRpb25zLmZ1bmN0aW9uYWwpcmV0dXJuIG1lKGUsYSx0LG4scik7dmFyIHM9dC5vbjt0Lm9uPXQubmF0aXZlT24sZS5vcHRpb25zLmFic3RyYWN0JiYodD17fSksa2UodCk7dmFyIGM9ZS5vcHRpb25zLm5hbWV8fGksbD1uZXcgRWkoXCJ2dWUtY29tcG9uZW50LVwiK2UuY2lkKyhjP1wiLVwiK2M6XCJcIiksdCx2b2lkIDAsdm9pZCAwLHZvaWQgMCx2b2lkIDAsbix7Q3RvcjplLHByb3BzRGF0YTphLGxpc3RlbmVyczpzLHRhZzppLGNoaWxkcmVuOnJ9KTtyZXR1cm4gbH19fWZ1bmN0aW9uIG1lKGUsdCxuLHIsaSl7dmFyIG89e30sYT1lLm9wdGlvbnMucHJvcHM7aWYoYSlmb3IodmFyIGMgaW4gYSlvW2NdPVIoYyxhLHQpO3ZhciBsPWUub3B0aW9ucy5yZW5kZXIuY2FsbChudWxsLHMoT2Use19zZWxmOk9iamVjdC5jcmVhdGUocil9KSx7cHJvcHM6byxkYXRhOm4scGFyZW50OnIsY2hpbGRyZW46Y2UoaSksc2xvdHM6ZnVuY3Rpb24oKXtyZXR1cm4gRWUoaSxyKX19KTtyZXR1cm4gbCBpbnN0YW5jZW9mIEVpJiYobC5mdW5jdGlvbmFsQ29udGV4dD1yLG4uc2xvdCYmKChsLmRhdGF8fChsLmRhdGE9e30pKS5zbG90PW4uc2xvdCkpLGx9ZnVuY3Rpb24gZ2UoZSx0KXt2YXIgbj1lLmNvbXBvbmVudE9wdGlvbnMscj17X2lzQ29tcG9uZW50OiEwLHBhcmVudDp0LHByb3BzRGF0YTpuLnByb3BzRGF0YSxfY29tcG9uZW50VGFnOm4udGFnLF9wYXJlbnRWbm9kZTplLF9wYXJlbnRMaXN0ZW5lcnM6bi5saXN0ZW5lcnMsX3JlbmRlckNoaWxkcmVuOm4uY2hpbGRyZW59LGk9ZS5kYXRhLmlubGluZVRlbXBsYXRlO3JldHVybiBpJiYoci5yZW5kZXI9aS5yZW5kZXIsci5zdGF0aWNSZW5kZXJGbnM9aS5zdGF0aWNSZW5kZXJGbnMpLG5ldyBuLkN0b3Iocil9ZnVuY3Rpb24geWUoZSx0KXtpZighZS5jaGlsZHx8ZS5jaGlsZC5faXNEZXN0cm95ZWQpe3ZhciBuPWUuY2hpbGQ9Z2UoZSxMaSk7bi4kbW91bnQodD9lLmVsbTp2b2lkIDAsdCl9ZWxzZSBpZihlLmRhdGEua2VlcEFsaXZlKXt2YXIgcj1lO19lKHIscil9fWZ1bmN0aW9uIF9lKGUsdCl7dmFyIG49dC5jb21wb25lbnRPcHRpb25zLHI9dC5jaGlsZD1lLmNoaWxkO3IuX3VwZGF0ZUZyb21QYXJlbnQobi5wcm9wc0RhdGEsbi5saXN0ZW5lcnMsdCxuLmNoaWxkcmVuKX1mdW5jdGlvbiBiZShlKXtlLmNoaWxkLl9pc01vdW50ZWR8fChlLmNoaWxkLl9pc01vdW50ZWQ9ITAsdmUoZS5jaGlsZCxcIm1vdW50ZWRcIikpLGUuZGF0YS5rZWVwQWxpdmUmJihlLmNoaWxkLl9pbmFjdGl2ZT0hMSx2ZShlLmNoaWxkLFwiYWN0aXZhdGVkXCIpKX1mdW5jdGlvbiAkZShlKXtlLmNoaWxkLl9pc0Rlc3Ryb3llZHx8KGUuZGF0YS5rZWVwQWxpdmU/KGUuY2hpbGQuX2luYWN0aXZlPSEwLHZlKGUuY2hpbGQsXCJkZWFjdGl2YXRlZFwiKSk6ZS5jaGlsZC4kZGVzdHJveSgpKX1mdW5jdGlvbiB3ZShlLHQsbil7aWYoIWUucmVxdWVzdGVkKXtlLnJlcXVlc3RlZD0hMDt2YXIgcj1lLnBlbmRpbmdDYWxsYmFja3M9W25dLGk9ITAsbz1mdW5jdGlvbihuKXtpZih1KG4pJiYobj10LmV4dGVuZChuKSksZS5yZXNvbHZlZD1uLCFpKWZvcih2YXIgbz0wLGE9ci5sZW5ndGg7bzxhO28rKylyW29dKG4pfSxhPWZ1bmN0aW9uKGUpe30scz1lKG8sYSk7cmV0dXJuIHMmJlwiZnVuY3Rpb25cIj09dHlwZW9mIHMudGhlbiYmIWUucmVzb2x2ZWQmJnMudGhlbihvLGEpLGk9ITEsZS5yZXNvbHZlZH1lLnBlbmRpbmdDYWxsYmFja3MucHVzaChuKX1mdW5jdGlvbiB4ZShlLHQpe3ZhciBuPXQub3B0aW9ucy5wcm9wcztpZihuKXt2YXIgcj17fSxpPWUuYXR0cnMsbz1lLnByb3BzLGE9ZS5kb21Qcm9wcztpZihpfHxvfHxhKWZvcih2YXIgcyBpbiBuKXt2YXIgYz1LcihzKTtDZShyLG8scyxjLCEwKXx8Q2UocixpLHMsYyl8fENlKHIsYSxzLGMpfXJldHVybiByfX1mdW5jdGlvbiBDZShlLHQsbixyLG8pe2lmKHQpe2lmKGkodCxuKSlyZXR1cm4gZVtuXT10W25dLG98fGRlbGV0ZSB0W25dLCEwO2lmKGkodCxyKSlyZXR1cm4gZVtuXT10W3JdLG98fGRlbGV0ZSB0W3JdLCEwfXJldHVybiExfWZ1bmN0aW9uIGtlKGUpe2UuaG9va3x8KGUuaG9vaz17fSk7Zm9yKHZhciB0PTA7dDxNaS5sZW5ndGg7dCsrKXt2YXIgbj1NaVt0XSxyPWUuaG9va1tuXSxpPURpW25dO2UuaG9va1tuXT1yP0FlKGkscik6aX19ZnVuY3Rpb24gQWUoZSx0KXtyZXR1cm4gZnVuY3Rpb24obixyKXtlKG4sciksdChuLHIpfX1mdW5jdGlvbiBPZShlLHQsbil7cmV0dXJuIHQmJihBcnJheS5pc0FycmF5KHQpfHxcIm9iamVjdFwiIT10eXBlb2YgdCkmJihuPXQsdD12b2lkIDApLFNlKHRoaXMuX3NlbGYsZSx0LG4pfWZ1bmN0aW9uIFNlKGUsdCxuLHIpe2lmKCFufHwhbi5fX29iX18pe2lmKCF0KXJldHVybiBOaSgpO2lmKEFycmF5LmlzQXJyYXkocikmJlwiZnVuY3Rpb25cIj09dHlwZW9mIHJbMF0mJihuPW58fHt9LG4uc2NvcGVkU2xvdHM9e2RlZmF1bHQ6clswXX0sci5sZW5ndGg9MCksXCJzdHJpbmdcIj09dHlwZW9mIHQpe3ZhciBpLG89bGkuZ2V0VGFnTmFtZXNwYWNlKHQpO2lmKGxpLmlzUmVzZXJ2ZWRUYWcodCkpcmV0dXJuIG5ldyBFaSh0LG4sY2UocixvKSx2b2lkIDAsdm9pZCAwLG8sZSk7aWYoaT1QKGUuJG9wdGlvbnMsXCJjb21wb25lbnRzXCIsdCkpcmV0dXJuIGhlKGksbixlLHIsdCk7dmFyIGE9XCJmb3JlaWduT2JqZWN0XCI9PT10P1wieGh0bWxcIjpvO3JldHVybiBuZXcgRWkodCxuLGNlKHIsYSksdm9pZCAwLHZvaWQgMCxvLGUpfXJldHVybiBoZSh0LG4sZSxyKX19ZnVuY3Rpb24gVGUoZSl7ZS4kdm5vZGU9bnVsbCxlLl92bm9kZT1udWxsLGUuX3N0YXRpY1RyZWVzPW51bGwsZS5fcmVuZGVyQ29udGV4dD1lLiRvcHRpb25zLl9wYXJlbnRWbm9kZSYmZS4kb3B0aW9ucy5fcGFyZW50Vm5vZGUuY29udGV4dCxlLiRzbG90cz1FZShlLiRvcHRpb25zLl9yZW5kZXJDaGlsZHJlbixlLl9yZW5kZXJDb250ZXh0KSxlLiRzY29wZWRTbG90cz1udWxsLGUuJGNyZWF0ZUVsZW1lbnQ9cyhPZSxlKSxlLiRvcHRpb25zLmVsJiZlLiRtb3VudChlLiRvcHRpb25zLmVsKX1mdW5jdGlvbiBqZShuKXtmdW5jdGlvbiByKGUsdCxuKXtpZihBcnJheS5pc0FycmF5KGUpKWZvcih2YXIgcj0wO3I8ZS5sZW5ndGg7cisrKWVbcl0mJlwic3RyaW5nXCIhPXR5cGVvZiBlW3JdJiZpKGVbcl0sdCtcIl9cIityLG4pO2Vsc2UgaShlLHQsbil9ZnVuY3Rpb24gaShlLHQsbil7ZS5pc1N0YXRpYz0hMCxlLmtleT10LGUuaXNPbmNlPW59bi5wcm90b3R5cGUuJG5leHRUaWNrPWZ1bmN0aW9uKGUpe3JldHVybiBzaShlLHRoaXMpfSxuLnByb3RvdHlwZS5fcmVuZGVyPWZ1bmN0aW9uKCl7dmFyIGU9dGhpcyx0PWUuJG9wdGlvbnMsbj10LnJlbmRlcixyPXQuc3RhdGljUmVuZGVyRm5zLGk9dC5fcGFyZW50Vm5vZGU7aWYoZS5faXNNb3VudGVkKWZvcih2YXIgbyBpbiBlLiRzbG90cyllLiRzbG90c1tvXT1yZShlLiRzbG90c1tvXSk7aSYmKGUuJHNjb3BlZFNsb3RzPWkuZGF0YS5zY29wZWRTbG90cyksciYmIWUuX3N0YXRpY1RyZWVzJiYoZS5fc3RhdGljVHJlZXM9W10pLGUuJHZub2RlPWk7dmFyIGE7dHJ5e2E9bi5jYWxsKGUuX3JlbmRlclByb3h5LGUuJGNyZWF0ZUVsZW1lbnQpfWNhdGNoKHQpe2lmKGxpLmVycm9ySGFuZGxlcilsaS5lcnJvckhhbmRsZXIuY2FsbChudWxsLHQsZSk7ZWxzZXtpZihvaSgpKXRocm93IHQ7Y29uc29sZS5lcnJvcih0KX1hPWUuX3Zub2RlfXJldHVybiBhIGluc3RhbmNlb2YgRWl8fChhPU5pKCkpLGEucGFyZW50PWksYX0sbi5wcm90b3R5cGUuX2g9T2Usbi5wcm90b3R5cGUuX3M9ZSxuLnByb3RvdHlwZS5fbj10LG4ucHJvdG90eXBlLl9lPU5pLG4ucHJvdG90eXBlLl9xPWgsbi5wcm90b3R5cGUuX2k9bSxuLnByb3RvdHlwZS5fbT1mdW5jdGlvbihlLHQpe3ZhciBuPXRoaXMuX3N0YXRpY1RyZWVzW2VdO3JldHVybiBuJiYhdD9BcnJheS5pc0FycmF5KG4pP3JlKG4pOm5lKG4pOihuPXRoaXMuX3N0YXRpY1RyZWVzW2VdPXRoaXMuJG9wdGlvbnMuc3RhdGljUmVuZGVyRm5zW2VdLmNhbGwodGhpcy5fcmVuZGVyUHJveHkpLHIobixcIl9fc3RhdGljX19cIitlLCExKSxuKX0sbi5wcm90b3R5cGUuX289ZnVuY3Rpb24oZSx0LG4pe3JldHVybiByKGUsXCJfX29uY2VfX1wiK3QrKG4/XCJfXCIrbjpcIlwiKSwhMCksZX07dmFyIG89ZnVuY3Rpb24oZSl7cmV0dXJuIGV9O24ucHJvdG90eXBlLl9mPWZ1bmN0aW9uKGUpe3JldHVybiBQKHRoaXMuJG9wdGlvbnMsXCJmaWx0ZXJzXCIsZSwhMCl8fG99LG4ucHJvdG90eXBlLl9sPWZ1bmN0aW9uKGUsdCl7dmFyIG4scixpLG8sYTtpZihBcnJheS5pc0FycmF5KGUpKWZvcihuPW5ldyBBcnJheShlLmxlbmd0aCkscj0wLGk9ZS5sZW5ndGg7cjxpO3IrKyluW3JdPXQoZVtyXSxyKTtlbHNlIGlmKFwibnVtYmVyXCI9PXR5cGVvZiBlKWZvcihuPW5ldyBBcnJheShlKSxyPTA7cjxlO3IrKyluW3JdPXQocisxLHIpO2Vsc2UgaWYodShlKSlmb3Iobz1PYmplY3Qua2V5cyhlKSxuPW5ldyBBcnJheShvLmxlbmd0aCkscj0wLGk9by5sZW5ndGg7cjxpO3IrKylhPW9bcl0sbltyXT10KGVbYV0sYSxyKTtyZXR1cm4gbn0sbi5wcm90b3R5cGUuX3Q9ZnVuY3Rpb24oZSx0LG4pe3ZhciByPXRoaXMuJHNjb3BlZFNsb3RzJiZ0aGlzLiRzY29wZWRTbG90c1tlXTtpZihyKXJldHVybiByKG58fHt9KXx8dDt2YXIgaT10aGlzLiRzbG90c1tlXTtyZXR1cm4gaXx8dH0sbi5wcm90b3R5cGUuX2I9ZnVuY3Rpb24oZSx0LG4scil7aWYobilpZih1KG4pKXtBcnJheS5pc0FycmF5KG4pJiYobj1kKG4pKTtmb3IodmFyIGkgaW4gbilpZihcImNsYXNzXCI9PT1pfHxcInN0eWxlXCI9PT1pKWVbaV09bltpXTtlbHNle3ZhciBvPXJ8fGxpLm11c3RVc2VQcm9wKHQsaSk/ZS5kb21Qcm9wc3x8KGUuZG9tUHJvcHM9e30pOmUuYXR0cnN8fChlLmF0dHJzPXt9KTtvW2ldPW5baV19fWVsc2U7cmV0dXJuIGV9LG4ucHJvdG90eXBlLl9rPWZ1bmN0aW9uKGUpe3JldHVybiBsaS5rZXlDb2Rlc1tlXX19ZnVuY3Rpb24gRWUoZSx0KXt2YXIgbj17fTtpZighZSlyZXR1cm4gbjtmb3IodmFyIHIsaSxvPWNlKGUpfHxbXSxhPVtdLHM9MCxjPW8ubGVuZ3RoO3M8YztzKyspaWYoaT1vW3NdLChpLmNvbnRleHQ9PT10fHxpLmZ1bmN0aW9uYWxDb250ZXh0PT09dCkmJmkuZGF0YSYmKHI9aS5kYXRhLnNsb3QpKXt2YXIgbD1uW3JdfHwobltyXT1bXSk7XCJ0ZW1wbGF0ZVwiPT09aS50YWc/bC5wdXNoLmFwcGx5KGwsaS5jaGlsZHJlbik6bC5wdXNoKGkpfWVsc2UgYS5wdXNoKGkpO3JldHVybiBhLmxlbmd0aCYmKDEhPT1hLmxlbmd0aHx8XCIgXCIhPT1hWzBdLnRleHQmJiFhWzBdLmlzQ29tbWVudCkmJihuLmRlZmF1bHQ9YSksbn1mdW5jdGlvbiBOZShlKXtlLl9ldmVudHM9T2JqZWN0LmNyZWF0ZShudWxsKTt2YXIgdD1lLiRvcHRpb25zLl9wYXJlbnRMaXN0ZW5lcnMsbj1zKGUuJG9uLGUpLHI9cyhlLiRvZmYsZSk7ZS5fdXBkYXRlTGlzdGVuZXJzPWZ1bmN0aW9uKHQsaSl7b2UodCxpfHx7fSxuLHIsZSl9LHQmJmUuX3VwZGF0ZUxpc3RlbmVycyh0KX1mdW5jdGlvbiBMZShlKXtlLnByb3RvdHlwZS4kb249ZnVuY3Rpb24oZSx0KXt2YXIgbj10aGlzO3JldHVybihuLl9ldmVudHNbZV18fChuLl9ldmVudHNbZV09W10pKS5wdXNoKHQpLG59LGUucHJvdG90eXBlLiRvbmNlPWZ1bmN0aW9uKGUsdCl7ZnVuY3Rpb24gbigpe3IuJG9mZihlLG4pLHQuYXBwbHkocixhcmd1bWVudHMpfXZhciByPXRoaXM7cmV0dXJuIG4uZm49dCxyLiRvbihlLG4pLHJ9LGUucHJvdG90eXBlLiRvZmY9ZnVuY3Rpb24oZSx0KXt2YXIgbj10aGlzO2lmKCFhcmd1bWVudHMubGVuZ3RoKXJldHVybiBuLl9ldmVudHM9T2JqZWN0LmNyZWF0ZShudWxsKSxuO3ZhciByPW4uX2V2ZW50c1tlXTtpZighcilyZXR1cm4gbjtpZigxPT09YXJndW1lbnRzLmxlbmd0aClyZXR1cm4gbi5fZXZlbnRzW2VdPW51bGwsbjtmb3IodmFyIGksbz1yLmxlbmd0aDtvLS07KWlmKGk9cltvXSxpPT09dHx8aS5mbj09PXQpe3Iuc3BsaWNlKG8sMSk7YnJlYWt9cmV0dXJuIG59LGUucHJvdG90eXBlLiRlbWl0PWZ1bmN0aW9uKGUpe3ZhciB0PXRoaXMsbj10Ll9ldmVudHNbZV07aWYobil7bj1uLmxlbmd0aD4xP2Mobik6bjtmb3IodmFyIHI9Yyhhcmd1bWVudHMsMSksaT0wLG89bi5sZW5ndGg7aTxvO2krKyluW2ldLmFwcGx5KHQscil9cmV0dXJuIHR9fWZ1bmN0aW9uIERlKGUpe2UucHJvdG90eXBlLl9pbml0PWZ1bmN0aW9uKGUpe3ZhciB0PXRoaXM7dC5fdWlkPVBpKyssdC5faXNWdWU9ITAsZSYmZS5faXNDb21wb25lbnQ/TWUodCxlKTp0LiRvcHRpb25zPU0oUGUodC5jb25zdHJ1Y3RvciksZXx8e30sdCksdC5fcmVuZGVyUHJveHk9dCx0Ll9zZWxmPXQsZGUodCksTmUodCksdmUodCxcImJlZm9yZUNyZWF0ZVwiKSxLKHQpLHZlKHQsXCJjcmVhdGVkXCIpLFRlKHQpfX1mdW5jdGlvbiBNZShlLHQpe3ZhciBuPWUuJG9wdGlvbnM9T2JqZWN0LmNyZWF0ZShlLmNvbnN0cnVjdG9yLm9wdGlvbnMpO24ucGFyZW50PXQucGFyZW50LG4ucHJvcHNEYXRhPXQucHJvcHNEYXRhLG4uX3BhcmVudFZub2RlPXQuX3BhcmVudFZub2RlLG4uX3BhcmVudExpc3RlbmVycz10Ll9wYXJlbnRMaXN0ZW5lcnMsbi5fcmVuZGVyQ2hpbGRyZW49dC5fcmVuZGVyQ2hpbGRyZW4sbi5fY29tcG9uZW50VGFnPXQuX2NvbXBvbmVudFRhZyx0LnJlbmRlciYmKG4ucmVuZGVyPXQucmVuZGVyLG4uc3RhdGljUmVuZGVyRm5zPXQuc3RhdGljUmVuZGVyRm5zKX1mdW5jdGlvbiBQZShlKXt2YXIgdD1lLm9wdGlvbnM7aWYoZS5zdXBlcil7dmFyIG49ZS5zdXBlci5vcHRpb25zLHI9ZS5zdXBlck9wdGlvbnMsaT1lLmV4dGVuZE9wdGlvbnM7biE9PXImJihlLnN1cGVyT3B0aW9ucz1uLGkucmVuZGVyPXQucmVuZGVyLGkuc3RhdGljUmVuZGVyRm5zPXQuc3RhdGljUmVuZGVyRm5zLGkuX3Njb3BlSWQ9dC5fc2NvcGVJZCx0PWUub3B0aW9ucz1NKG4saSksdC5uYW1lJiYodC5jb21wb25lbnRzW3QubmFtZV09ZSkpfXJldHVybiB0fWZ1bmN0aW9uIFJlKGUpe3RoaXMuX2luaXQoZSl9ZnVuY3Rpb24gSWUoZSl7ZS51c2U9ZnVuY3Rpb24oZSl7aWYoIWUuaW5zdGFsbGVkKXt2YXIgdD1jKGFyZ3VtZW50cywxKTtyZXR1cm4gdC51bnNoaWZ0KHRoaXMpLFwiZnVuY3Rpb25cIj09dHlwZW9mIGUuaW5zdGFsbD9lLmluc3RhbGwuYXBwbHkoZSx0KTplLmFwcGx5KG51bGwsdCksZS5pbnN0YWxsZWQ9ITAsdGhpc319fWZ1bmN0aW9uIEZlKGUpe2UubWl4aW49ZnVuY3Rpb24oZSl7dGhpcy5vcHRpb25zPU0odGhpcy5vcHRpb25zLGUpfX1mdW5jdGlvbiBCZShlKXtlLmNpZD0wO3ZhciB0PTE7ZS5leHRlbmQ9ZnVuY3Rpb24oZSl7ZT1lfHx7fTt2YXIgbj10aGlzLHI9bi5jaWQsaT1lLl9DdG9yfHwoZS5fQ3Rvcj17fSk7aWYoaVtyXSlyZXR1cm4gaVtyXTt2YXIgbz1lLm5hbWV8fG4ub3B0aW9ucy5uYW1lLGE9ZnVuY3Rpb24oZSl7dGhpcy5faW5pdChlKX07cmV0dXJuIGEucHJvdG90eXBlPU9iamVjdC5jcmVhdGUobi5wcm90b3R5cGUpLGEucHJvdG90eXBlLmNvbnN0cnVjdG9yPWEsYS5jaWQ9dCsrLGEub3B0aW9ucz1NKG4ub3B0aW9ucyxlKSxhLnN1cGVyPW4sYS5leHRlbmQ9bi5leHRlbmQsYS5taXhpbj1uLm1peGluLGEudXNlPW4udXNlLGxpLl9hc3NldFR5cGVzLmZvckVhY2goZnVuY3Rpb24oZSl7YVtlXT1uW2VdfSksbyYmKGEub3B0aW9ucy5jb21wb25lbnRzW29dPWEpLGEuc3VwZXJPcHRpb25zPW4ub3B0aW9ucyxhLmV4dGVuZE9wdGlvbnM9ZSxpW3JdPWEsYX19ZnVuY3Rpb24gVWUoZSl7bGkuX2Fzc2V0VHlwZXMuZm9yRWFjaChmdW5jdGlvbih0KXtlW3RdPWZ1bmN0aW9uKGUsbil7cmV0dXJuIG4/KFwiY29tcG9uZW50XCI9PT10JiZmKG4pJiYobi5uYW1lPW4ubmFtZXx8ZSxuPXRoaXMub3B0aW9ucy5fYmFzZS5leHRlbmQobikpLFwiZGlyZWN0aXZlXCI9PT10JiZcImZ1bmN0aW9uXCI9PXR5cGVvZiBuJiYobj17YmluZDpuLHVwZGF0ZTpufSksdGhpcy5vcHRpb25zW3QrXCJzXCJdW2VdPW4sbik6dGhpcy5vcHRpb25zW3QrXCJzXCJdW2VdfX0pfWZ1bmN0aW9uIEhlKGUsdCl7cmV0dXJuXCJzdHJpbmdcIj09dHlwZW9mIGU/ZS5zcGxpdChcIixcIikuaW5kZXhPZih0KT4tMTplLnRlc3QodCl9ZnVuY3Rpb24gVmUoZSl7dmFyIHQ9e307dC5nZXQ9ZnVuY3Rpb24oKXtyZXR1cm4gbGl9LE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFwiY29uZmlnXCIsdCksZS51dGlsPSRpLGUuc2V0PU8sZS5kZWxldGU9UyxlLm5leHRUaWNrPXNpLGUub3B0aW9ucz1PYmplY3QuY3JlYXRlKG51bGwpLGxpLl9hc3NldFR5cGVzLmZvckVhY2goZnVuY3Rpb24odCl7ZS5vcHRpb25zW3QrXCJzXCJdPU9iamVjdC5jcmVhdGUobnVsbCl9KSxlLm9wdGlvbnMuX2Jhc2U9ZSxsKGUub3B0aW9ucy5jb21wb25lbnRzLEZpKSxJZShlKSxGZShlKSxCZShlKSxVZShlKX1mdW5jdGlvbiB6ZShlKXtmb3IodmFyIHQ9ZS5kYXRhLG49ZSxyPWU7ci5jaGlsZDspcj1yLmNoaWxkLl92bm9kZSxyLmRhdGEmJih0PUplKHIuZGF0YSx0KSk7Zm9yKDtuPW4ucGFyZW50OyluLmRhdGEmJih0PUplKHQsbi5kYXRhKSk7cmV0dXJuIEtlKHQpfWZ1bmN0aW9uIEplKGUsdCl7cmV0dXJue3N0YXRpY0NsYXNzOnFlKGUuc3RhdGljQ2xhc3MsdC5zdGF0aWNDbGFzcyksY2xhc3M6ZS5jbGFzcz9bZS5jbGFzcyx0LmNsYXNzXTp0LmNsYXNzfX1mdW5jdGlvbiBLZShlKXt2YXIgdD1lLmNsYXNzLG49ZS5zdGF0aWNDbGFzcztyZXR1cm4gbnx8dD9xZShuLFdlKHQpKTpcIlwifWZ1bmN0aW9uIHFlKGUsdCl7cmV0dXJuIGU/dD9lK1wiIFwiK3Q6ZTp0fHxcIlwifWZ1bmN0aW9uIFdlKGUpe3ZhciB0PVwiXCI7aWYoIWUpcmV0dXJuIHQ7aWYoXCJzdHJpbmdcIj09dHlwZW9mIGUpcmV0dXJuIGU7aWYoQXJyYXkuaXNBcnJheShlKSl7Zm9yKHZhciBuLHI9MCxpPWUubGVuZ3RoO3I8aTtyKyspZVtyXSYmKG49V2UoZVtyXSkpJiYodCs9bitcIiBcIik7cmV0dXJuIHQuc2xpY2UoMCwtMSl9aWYodShlKSl7Zm9yKHZhciBvIGluIGUpZVtvXSYmKHQrPW8rXCIgXCIpO3JldHVybiB0LnNsaWNlKDAsLTEpfXJldHVybiB0fWZ1bmN0aW9uIFplKGUpe3JldHVybiBYaShlKT9cInN2Z1wiOlwibWF0aFwiPT09ZT9cIm1hdGhcIjp2b2lkIDB9ZnVuY3Rpb24gR2UoZSl7aWYoIVFyKXJldHVybiEwO2lmKHRvKGUpKXJldHVybiExO2lmKGU9ZS50b0xvd2VyQ2FzZSgpLG51bGwhPW5vW2VdKXJldHVybiBub1tlXTt2YXIgdD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KGUpO3JldHVybiBlLmluZGV4T2YoXCItXCIpPi0xP25vW2VdPXQuY29uc3RydWN0b3I9PT13aW5kb3cuSFRNTFVua25vd25FbGVtZW50fHx0LmNvbnN0cnVjdG9yPT09d2luZG93LkhUTUxFbGVtZW50Om5vW2VdPS9IVE1MVW5rbm93bkVsZW1lbnQvLnRlc3QodC50b1N0cmluZygpKX1mdW5jdGlvbiBZZShlKXtpZihcInN0cmluZ1wiPT10eXBlb2YgZSl7aWYoZT1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKGUpLCFlKXJldHVybiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpfXJldHVybiBlfWZ1bmN0aW9uIFFlKGUsdCl7dmFyIG49ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChlKTtyZXR1cm5cInNlbGVjdFwiIT09ZT9uOih0LmRhdGEmJnQuZGF0YS5hdHRycyYmXCJtdWx0aXBsZVwiaW4gdC5kYXRhLmF0dHJzJiZuLnNldEF0dHJpYnV0ZShcIm11bHRpcGxlXCIsXCJtdWx0aXBsZVwiKSxuKX1mdW5jdGlvbiBYZShlLHQpe3JldHVybiBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoV2lbZV0sdCl9ZnVuY3Rpb24gZXQoZSl7cmV0dXJuIGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGUpfWZ1bmN0aW9uIHR0KGUpe3JldHVybiBkb2N1bWVudC5jcmVhdGVDb21tZW50KGUpfWZ1bmN0aW9uIG50KGUsdCxuKXtlLmluc2VydEJlZm9yZSh0LG4pfWZ1bmN0aW9uIHJ0KGUsdCl7ZS5yZW1vdmVDaGlsZCh0KX1mdW5jdGlvbiBpdChlLHQpe2UuYXBwZW5kQ2hpbGQodCl9ZnVuY3Rpb24gb3QoZSl7cmV0dXJuIGUucGFyZW50Tm9kZX1mdW5jdGlvbiBhdChlKXtyZXR1cm4gZS5uZXh0U2libGluZ31mdW5jdGlvbiBzdChlKXtyZXR1cm4gZS50YWdOYW1lfWZ1bmN0aW9uIGN0KGUsdCl7ZS50ZXh0Q29udGVudD10fWZ1bmN0aW9uIGx0KGUpe3JldHVybiBlLmNoaWxkTm9kZXN9ZnVuY3Rpb24gdXQoZSx0LG4pe2Uuc2V0QXR0cmlidXRlKHQsbil9ZnVuY3Rpb24gZnQoZSx0KXt2YXIgbj1lLmRhdGEucmVmO2lmKG4pe3ZhciBpPWUuY29udGV4dCxvPWUuY2hpbGR8fGUuZWxtLGE9aS4kcmVmczt0P0FycmF5LmlzQXJyYXkoYVtuXSk/cihhW25dLG8pOmFbbl09PT1vJiYoYVtuXT12b2lkIDApOmUuZGF0YS5yZWZJbkZvcj9BcnJheS5pc0FycmF5KGFbbl0pJiZhW25dLmluZGV4T2Yobyk8MD9hW25dLnB1c2gobyk6YVtuXT1bb106YVtuXT1vfX1mdW5jdGlvbiBkdChlKXtyZXR1cm4gbnVsbD09ZX1mdW5jdGlvbiBwdChlKXtyZXR1cm4gbnVsbCE9ZX1mdW5jdGlvbiB2dChlLHQpe3JldHVybiBlLmtleT09PXQua2V5JiZlLnRhZz09PXQudGFnJiZlLmlzQ29tbWVudD09PXQuaXNDb21tZW50JiYhZS5kYXRhPT0hdC5kYXRhfWZ1bmN0aW9uIGh0KGUsdCxuKXt2YXIgcixpLG89e307Zm9yKHI9dDtyPD1uOysrcilpPWVbcl0ua2V5LHB0KGkpJiYob1tpXT1yKTtyZXR1cm4gb31mdW5jdGlvbiBtdChlKXtmdW5jdGlvbiB0KGUpe3JldHVybiBuZXcgRWkoeC50YWdOYW1lKGUpLnRvTG93ZXJDYXNlKCkse30sW10sdm9pZCAwLGUpfWZ1bmN0aW9uIG4oZSx0KXtmdW5jdGlvbiBuKCl7MD09PS0tbi5saXN0ZW5lcnMmJnIoZSl9cmV0dXJuIG4ubGlzdGVuZXJzPXQsbn1mdW5jdGlvbiByKGUpe3ZhciB0PXgucGFyZW50Tm9kZShlKTt0JiZ4LnJlbW92ZUNoaWxkKHQsZSl9ZnVuY3Rpb24gaShlLHQsbil7dmFyIHIsaT1lLmRhdGE7aWYoZS5pc1Jvb3RJbnNlcnQ9IW4scHQoaSkmJihwdChyPWkuaG9vaykmJnB0KHI9ci5pbml0KSYmcihlKSxwdChyPWUuY2hpbGQpKSlyZXR1cm4gbChlLHQpLGUuZWxtO3ZhciBvPWUuY2hpbGRyZW4scz1lLnRhZztyZXR1cm4gcHQocyk/KGUuZWxtPWUubnM/eC5jcmVhdGVFbGVtZW50TlMoZS5ucyxzKTp4LmNyZWF0ZUVsZW1lbnQocyxlKSx1KGUpLGEoZSxvLHQpLHB0KGkpJiZjKGUsdCkpOmUuaXNDb21tZW50P2UuZWxtPXguY3JlYXRlQ29tbWVudChlLnRleHQpOmUuZWxtPXguY3JlYXRlVGV4dE5vZGUoZS50ZXh0KSxlLmVsbX1mdW5jdGlvbiBhKGUsdCxuKXtpZihBcnJheS5pc0FycmF5KHQpKWZvcih2YXIgcj0wO3I8dC5sZW5ndGg7KytyKXguYXBwZW5kQ2hpbGQoZS5lbG0saSh0W3JdLG4sITApKTtlbHNlIG8oZS50ZXh0KSYmeC5hcHBlbmRDaGlsZChlLmVsbSx4LmNyZWF0ZVRleHROb2RlKGUudGV4dCkpfWZ1bmN0aW9uIHMoZSl7Zm9yKDtlLmNoaWxkOyllPWUuY2hpbGQuX3Zub2RlO3JldHVybiBwdChlLnRhZyl9ZnVuY3Rpb24gYyhlLHQpe2Zvcih2YXIgbj0wO248JC5jcmVhdGUubGVuZ3RoOysrbikkLmNyZWF0ZVtuXShvbyxlKTtfPWUuZGF0YS5ob29rLHB0KF8pJiYoXy5jcmVhdGUmJl8uY3JlYXRlKG9vLGUpLF8uaW5zZXJ0JiZ0LnB1c2goZSkpfWZ1bmN0aW9uIGwoZSx0KXtlLmRhdGEucGVuZGluZ0luc2VydCYmdC5wdXNoLmFwcGx5KHQsZS5kYXRhLnBlbmRpbmdJbnNlcnQpLGUuZWxtPWUuY2hpbGQuJGVsLHMoZSk/KGMoZSx0KSx1KGUpKTooZnQoZSksdC5wdXNoKGUpKX1mdW5jdGlvbiB1KGUpe3ZhciB0O3B0KHQ9ZS5jb250ZXh0KSYmcHQodD10LiRvcHRpb25zLl9zY29wZUlkKSYmeC5zZXRBdHRyaWJ1dGUoZS5lbG0sdCxcIlwiKSxwdCh0PUxpKSYmdCE9PWUuY29udGV4dCYmcHQodD10LiRvcHRpb25zLl9zY29wZUlkKSYmeC5zZXRBdHRyaWJ1dGUoZS5lbG0sdCxcIlwiKX1mdW5jdGlvbiBmKGUsdCxuLHIsbyxhKXtmb3IoO3I8PW87KytyKXguaW5zZXJ0QmVmb3JlKGUsaShuW3JdLGEpLHQpfWZ1bmN0aW9uIGQoZSl7dmFyIHQsbixyPWUuZGF0YTtpZihwdChyKSlmb3IocHQodD1yLmhvb2spJiZwdCh0PXQuZGVzdHJveSkmJnQoZSksdD0wO3Q8JC5kZXN0cm95Lmxlbmd0aDsrK3QpJC5kZXN0cm95W3RdKGUpO2lmKHB0KHQ9ZS5jaGlsZHJlbikpZm9yKG49MDtuPGUuY2hpbGRyZW4ubGVuZ3RoOysrbilkKGUuY2hpbGRyZW5bbl0pfWZ1bmN0aW9uIHAoZSx0LG4scil7Zm9yKDtuPD1yOysrbil7dmFyIGk9dFtuXTtwdChpKSYmKHB0KGkudGFnKT8odihpKSxkKGkpKTp4LnJlbW92ZUNoaWxkKGUsaS5lbG0pKX19ZnVuY3Rpb24gdihlLHQpe2lmKHR8fHB0KGUuZGF0YSkpe3ZhciBpPSQucmVtb3ZlLmxlbmd0aCsxO2Zvcih0P3QubGlzdGVuZXJzKz1pOnQ9bihlLmVsbSxpKSxwdChfPWUuY2hpbGQpJiZwdChfPV8uX3Zub2RlKSYmcHQoXy5kYXRhKSYmdihfLHQpLF89MDtfPCQucmVtb3ZlLmxlbmd0aDsrK18pJC5yZW1vdmVbX10oZSx0KTtwdChfPWUuZGF0YS5ob29rKSYmcHQoXz1fLnJlbW92ZSk/XyhlLHQpOnQoKX1lbHNlIHIoZS5lbG0pfWZ1bmN0aW9uIGgoZSx0LG4scixvKXtmb3IodmFyIGEscyxjLGwsdT0wLGQ9MCx2PXQubGVuZ3RoLTEsaD10WzBdLGc9dFt2XSx5PW4ubGVuZ3RoLTEsXz1uWzBdLGI9blt5XSwkPSFvO3U8PXYmJmQ8PXk7KWR0KGgpP2g9dFsrK3VdOmR0KGcpP2c9dFstLXZdOnZ0KGgsXyk/KG0oaCxfLHIpLGg9dFsrK3VdLF89blsrK2RdKTp2dChnLGIpPyhtKGcsYixyKSxnPXRbLS12XSxiPW5bLS15XSk6dnQoaCxiKT8obShoLGIsciksJCYmeC5pbnNlcnRCZWZvcmUoZSxoLmVsbSx4Lm5leHRTaWJsaW5nKGcuZWxtKSksaD10WysrdV0sYj1uWy0teV0pOnZ0KGcsXyk/KG0oZyxfLHIpLCQmJnguaW5zZXJ0QmVmb3JlKGUsZy5lbG0saC5lbG0pLGc9dFstLXZdLF89blsrK2RdKTooZHQoYSkmJihhPWh0KHQsdSx2KSkscz1wdChfLmtleSk/YVtfLmtleV06bnVsbCxkdChzKT8oeC5pbnNlcnRCZWZvcmUoZSxpKF8sciksaC5lbG0pLF89blsrK2RdKTooYz10W3NdLGMudGFnIT09Xy50YWc/KHguaW5zZXJ0QmVmb3JlKGUsaShfLHIpLGguZWxtKSxfPW5bKytkXSk6KG0oYyxfLHIpLHRbc109dm9pZCAwLCQmJnguaW5zZXJ0QmVmb3JlKGUsXy5lbG0saC5lbG0pLF89blsrK2RdKSkpO3U+dj8obD1kdChuW3krMV0pP251bGw6blt5KzFdLmVsbSxmKGUsbCxuLGQseSxyKSk6ZD55JiZwKGUsdCx1LHYpfWZ1bmN0aW9uIG0oZSx0LG4scil7aWYoZSE9PXQpe2lmKHQuaXNTdGF0aWMmJmUuaXNTdGF0aWMmJnQua2V5PT09ZS5rZXkmJih0LmlzQ2xvbmVkfHx0LmlzT25jZSkpcmV0dXJuIHZvaWQodC5lbG09ZS5lbG0pO3ZhciBpLG89dC5kYXRhLGE9cHQobyk7YSYmcHQoaT1vLmhvb2spJiZwdChpPWkucHJlcGF0Y2gpJiZpKGUsdCk7dmFyIGM9dC5lbG09ZS5lbG0sbD1lLmNoaWxkcmVuLHU9dC5jaGlsZHJlbjtpZihhJiZzKHQpKXtmb3IoaT0wO2k8JC51cGRhdGUubGVuZ3RoOysraSkkLnVwZGF0ZVtpXShlLHQpO3B0KGk9by5ob29rKSYmcHQoaT1pLnVwZGF0ZSkmJmkoZSx0KX1kdCh0LnRleHQpP3B0KGwpJiZwdCh1KT9sIT09dSYmaChjLGwsdSxuLHIpOnB0KHUpPyhwdChlLnRleHQpJiZ4LnNldFRleHRDb250ZW50KGMsXCJcIiksZihjLG51bGwsdSwwLHUubGVuZ3RoLTEsbikpOnB0KGwpP3AoYyxsLDAsbC5sZW5ndGgtMSk6cHQoZS50ZXh0KSYmeC5zZXRUZXh0Q29udGVudChjLFwiXCIpOmUudGV4dCE9PXQudGV4dCYmeC5zZXRUZXh0Q29udGVudChjLHQudGV4dCksYSYmcHQoaT1vLmhvb2spJiZwdChpPWkucG9zdHBhdGNoKSYmaShlLHQpfX1mdW5jdGlvbiBnKGUsdCxuKXtpZihuJiZlLnBhcmVudCllLnBhcmVudC5kYXRhLnBlbmRpbmdJbnNlcnQ9dDtlbHNlIGZvcih2YXIgcj0wO3I8dC5sZW5ndGg7KytyKXRbcl0uZGF0YS5ob29rLmluc2VydCh0W3JdKX1mdW5jdGlvbiB5KGUsdCxuKXt0LmVsbT1lO3ZhciByPXQudGFnLGk9dC5kYXRhLG89dC5jaGlsZHJlbjtpZihwdChpKSYmKHB0KF89aS5ob29rKSYmcHQoXz1fLmluaXQpJiZfKHQsITApLHB0KF89dC5jaGlsZCkpKXJldHVybiBsKHQsbiksITA7aWYocHQocikpe2lmKHB0KG8pKXt2YXIgcz14LmNoaWxkTm9kZXMoZSk7aWYocy5sZW5ndGgpe3ZhciB1PSEwO2lmKHMubGVuZ3RoIT09by5sZW5ndGgpdT0hMTtlbHNlIGZvcih2YXIgZj0wO2Y8by5sZW5ndGg7ZisrKWlmKCF5KHNbZl0sb1tmXSxuKSl7dT0hMTticmVha31pZighdSlyZXR1cm4hMX1lbHNlIGEodCxvLG4pfXB0KGkpJiZjKHQsbil9cmV0dXJuITB9dmFyIF8sYiwkPXt9LHc9ZS5tb2R1bGVzLHg9ZS5ub2RlT3BzO2ZvcihfPTA7Xzxhby5sZW5ndGg7KytfKWZvcigkW2FvW19dXT1bXSxiPTA7Yjx3Lmxlbmd0aDsrK2Ipdm9pZCAwIT09d1tiXVthb1tfXV0mJiRbYW9bX11dLnB1c2god1tiXVthb1tfXV0pO3JldHVybiBmdW5jdGlvbihlLG4scixvKXtpZighbilyZXR1cm4gdm9pZChlJiZkKGUpKTt2YXIgYSxjLGw9ITEsdT1bXTtpZihlKXt2YXIgZj1wdChlLm5vZGVUeXBlKTtpZighZiYmdnQoZSxuKSltKGUsbix1LG8pO2Vsc2V7aWYoZil7aWYoMT09PWUubm9kZVR5cGUmJmUuaGFzQXR0cmlidXRlKFwic2VydmVyLXJlbmRlcmVkXCIpJiYoZS5yZW1vdmVBdHRyaWJ1dGUoXCJzZXJ2ZXItcmVuZGVyZWRcIikscj0hMCksciYmeShlLG4sdSkpcmV0dXJuIGcobix1LCEwKSxlO2U9dChlKX1pZihhPWUuZWxtLGM9eC5wYXJlbnROb2RlKGEpLGkobix1KSxuLnBhcmVudCYmKG4ucGFyZW50LmVsbT1uLmVsbSxzKG4pKSlmb3IodmFyIHY9MDt2PCQuY3JlYXRlLmxlbmd0aDsrK3YpJC5jcmVhdGVbdl0ob28sbi5wYXJlbnQpO251bGwhPT1jPyh4Lmluc2VydEJlZm9yZShjLG4uZWxtLHgubmV4dFNpYmxpbmcoYSkpLHAoYyxbZV0sMCwwKSk6cHQoZS50YWcpJiZkKGUpfX1lbHNlIGw9ITAsaShuLHUpO3JldHVybiBnKG4sdSxsKSxuLmVsbX19ZnVuY3Rpb24gZ3QoZSx0KXtpZihlLmRhdGEuZGlyZWN0aXZlc3x8dC5kYXRhLmRpcmVjdGl2ZXMpe3ZhciBuLHIsaSxvPWU9PT1vbyxhPXl0KGUuZGF0YS5kaXJlY3RpdmVzLGUuY29udGV4dCkscz15dCh0LmRhdGEuZGlyZWN0aXZlcyx0LmNvbnRleHQpLGM9W10sbD1bXTtmb3IobiBpbiBzKXI9YVtuXSxpPXNbbl0scj8oaS5vbGRWYWx1ZT1yLnZhbHVlLGJ0KGksXCJ1cGRhdGVcIix0LGUpLGkuZGVmJiZpLmRlZi5jb21wb25lbnRVcGRhdGVkJiZsLnB1c2goaSkpOihidChpLFwiYmluZFwiLHQsZSksaS5kZWYmJmkuZGVmLmluc2VydGVkJiZjLnB1c2goaSkpO2lmKGMubGVuZ3RoKXt2YXIgdT1mdW5jdGlvbigpe2MuZm9yRWFjaChmdW5jdGlvbihuKXtidChuLFwiaW5zZXJ0ZWRcIix0LGUpfSl9O28/aWUodC5kYXRhLmhvb2t8fCh0LmRhdGEuaG9vaz17fSksXCJpbnNlcnRcIix1LFwiZGlyLWluc2VydFwiKTp1KCl9aWYobC5sZW5ndGgmJmllKHQuZGF0YS5ob29rfHwodC5kYXRhLmhvb2s9e30pLFwicG9zdHBhdGNoXCIsZnVuY3Rpb24oKXtsLmZvckVhY2goZnVuY3Rpb24obil7YnQobixcImNvbXBvbmVudFVwZGF0ZWRcIix0LGUpfSl9LFwiZGlyLXBvc3RwYXRjaFwiKSwhbylmb3IobiBpbiBhKXNbbl18fGJ0KGFbbl0sXCJ1bmJpbmRcIixlKX19ZnVuY3Rpb24geXQoZSx0KXt2YXIgbj1PYmplY3QuY3JlYXRlKG51bGwpO2lmKCFlKXJldHVybiBuO3ZhciByLGk7Zm9yKHI9MDtyPGUubGVuZ3RoO3IrKylpPWVbcl0saS5tb2RpZmllcnN8fChpLm1vZGlmaWVycz1jbyksbltfdChpKV09aSxpLmRlZj1QKHQuJG9wdGlvbnMsXCJkaXJlY3RpdmVzXCIsaS5uYW1lLCEwKTtyZXR1cm4gbn1mdW5jdGlvbiBfdChlKXtyZXR1cm4gZS5yYXdOYW1lfHxlLm5hbWUrXCIuXCIrT2JqZWN0LmtleXMoZS5tb2RpZmllcnN8fHt9KS5qb2luKFwiLlwiKX1mdW5jdGlvbiBidChlLHQsbixyKXt2YXIgaT1lLmRlZiYmZS5kZWZbdF07aSYmaShuLmVsbSxlLG4scil9ZnVuY3Rpb24gJHQoZSx0KXtpZihlLmRhdGEuYXR0cnN8fHQuZGF0YS5hdHRycyl7dmFyIG4scixpLG89dC5lbG0sYT1lLmRhdGEuYXR0cnN8fHt9LHM9dC5kYXRhLmF0dHJzfHx7fTtzLl9fb2JfXyYmKHM9dC5kYXRhLmF0dHJzPWwoe30scykpO2ZvcihuIGluIHMpcj1zW25dLGk9YVtuXSxpIT09ciYmd3QobyxuLHIpO2ZvcihuIGluIGEpbnVsbD09c1tuXSYmKEppKG4pP28ucmVtb3ZlQXR0cmlidXRlTlMoemksS2kobikpOkhpKG4pfHxvLnJlbW92ZUF0dHJpYnV0ZShuKSl9fWZ1bmN0aW9uIHd0KGUsdCxuKXtWaSh0KT9xaShuKT9lLnJlbW92ZUF0dHJpYnV0ZSh0KTplLnNldEF0dHJpYnV0ZSh0LHQpOkhpKHQpP2Uuc2V0QXR0cmlidXRlKHQscWkobil8fFwiZmFsc2VcIj09PW4/XCJmYWxzZVwiOlwidHJ1ZVwiKTpKaSh0KT9xaShuKT9lLnJlbW92ZUF0dHJpYnV0ZU5TKHppLEtpKHQpKTplLnNldEF0dHJpYnV0ZU5TKHppLHQsbik6cWkobik/ZS5yZW1vdmVBdHRyaWJ1dGUodCk6ZS5zZXRBdHRyaWJ1dGUodCxuKX1mdW5jdGlvbiB4dChlLHQpe3ZhciBuPXQuZWxtLHI9dC5kYXRhLGk9ZS5kYXRhO2lmKHIuc3RhdGljQ2xhc3N8fHIuY2xhc3N8fGkmJihpLnN0YXRpY0NsYXNzfHxpLmNsYXNzKSl7dmFyIG89emUodCksYT1uLl90cmFuc2l0aW9uQ2xhc3NlczthJiYobz1xZShvLFdlKGEpKSksbyE9PW4uX3ByZXZDbGFzcyYmKG4uc2V0QXR0cmlidXRlKFwiY2xhc3NcIixvKSxuLl9wcmV2Q2xhc3M9byl9fWZ1bmN0aW9uIEN0KGUsdCl7aWYoZS5kYXRhLm9ufHx0LmRhdGEub24pe3ZhciBuPXQuZGF0YS5vbnx8e30scj1lLmRhdGEub258fHt9LGk9dC5lbG0uX3ZfYWRkfHwodC5lbG0uX3ZfYWRkPWZ1bmN0aW9uKGUsbixyKXt0LmVsbS5hZGRFdmVudExpc3RlbmVyKGUsbixyKX0pLG89dC5lbG0uX3ZfcmVtb3ZlfHwodC5lbG0uX3ZfcmVtb3ZlPWZ1bmN0aW9uKGUsbil7dC5lbG0ucmVtb3ZlRXZlbnRMaXN0ZW5lcihlLG4pfSk7b2UobixyLGksbyx0LmNvbnRleHQpfX1mdW5jdGlvbiBrdChlLHQpe2lmKGUuZGF0YS5kb21Qcm9wc3x8dC5kYXRhLmRvbVByb3BzKXt2YXIgbixyLGk9dC5lbG0sbz1lLmRhdGEuZG9tUHJvcHN8fHt9LGE9dC5kYXRhLmRvbVByb3BzfHx7fTthLl9fb2JfXyYmKGE9dC5kYXRhLmRvbVByb3BzPWwoe30sYSkpO2ZvcihuIGluIG8pbnVsbD09YVtuXSYmKGlbbl09XCJcIik7Zm9yKG4gaW4gYSlpZihyPWFbbl0sXCJ0ZXh0Q29udGVudFwiIT09biYmXCJpbm5lckhUTUxcIiE9PW58fCh0LmNoaWxkcmVuJiYodC5jaGlsZHJlbi5sZW5ndGg9MCksciE9PW9bbl0pKWlmKFwidmFsdWVcIj09PW4pe2kuX3ZhbHVlPXI7dmFyIHM9bnVsbD09cj9cIlwiOlN0cmluZyhyKTtpLnZhbHVlPT09c3x8aS5jb21wb3Npbmd8fChpLnZhbHVlPXMpfWVsc2UgaVtuXT1yfX1mdW5jdGlvbiBBdChlKXt2YXIgdD1PdChlLnN0eWxlKTtyZXR1cm4gZS5zdGF0aWNTdHlsZT9sKGUuc3RhdGljU3R5bGUsdCk6dH1mdW5jdGlvbiBPdChlKXtyZXR1cm4gQXJyYXkuaXNBcnJheShlKT9kKGUpOlwic3RyaW5nXCI9PXR5cGVvZiBlP2hvKGUpOmV9ZnVuY3Rpb24gU3QoZSx0KXt2YXIgbixyPXt9O2lmKHQpZm9yKHZhciBpPWU7aS5jaGlsZDspaT1pLmNoaWxkLl92bm9kZSxpLmRhdGEmJihuPUF0KGkuZGF0YSkpJiZsKHIsbik7KG49QXQoZS5kYXRhKSkmJmwocixuKTtmb3IodmFyIG89ZTtvPW8ucGFyZW50OylvLmRhdGEmJihuPUF0KG8uZGF0YSkpJiZsKHIsbik7cmV0dXJuIHJ9ZnVuY3Rpb24gVHQoZSx0KXt2YXIgbj10LmRhdGEscj1lLmRhdGE7aWYobi5zdGF0aWNTdHlsZXx8bi5zdHlsZXx8ci5zdGF0aWNTdHlsZXx8ci5zdHlsZSl7dmFyIGksbyxhPXQuZWxtLHM9ZS5kYXRhLnN0YXRpY1N0eWxlLGM9ZS5kYXRhLnN0eWxlfHx7fSx1PXN8fGMsZj1PdCh0LmRhdGEuc3R5bGUpfHx7fTt0LmRhdGEuc3R5bGU9Zi5fX29iX18/bCh7fSxmKTpmO3ZhciBkPVN0KHQsITApO2ZvcihvIGluIHUpbnVsbD09ZFtvXSYmZ28oYSxvLFwiXCIpO2ZvcihvIGluIGQpaT1kW29dLGkhPT11W29dJiZnbyhhLG8sbnVsbD09aT9cIlwiOmkpfX1mdW5jdGlvbiBqdChlLHQpe2lmKHQmJnQudHJpbSgpKWlmKGUuY2xhc3NMaXN0KXQuaW5kZXhPZihcIiBcIik+LTE/dC5zcGxpdCgvXFxzKy8pLmZvckVhY2goZnVuY3Rpb24odCl7cmV0dXJuIGUuY2xhc3NMaXN0LmFkZCh0KX0pOmUuY2xhc3NMaXN0LmFkZCh0KTtlbHNle3ZhciBuPVwiIFwiK2UuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikrXCIgXCI7bi5pbmRleE9mKFwiIFwiK3QrXCIgXCIpPDAmJmUuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwobit0KS50cmltKCkpfX1mdW5jdGlvbiBFdChlLHQpe2lmKHQmJnQudHJpbSgpKWlmKGUuY2xhc3NMaXN0KXQuaW5kZXhPZihcIiBcIik+LTE/dC5zcGxpdCgvXFxzKy8pLmZvckVhY2goZnVuY3Rpb24odCl7cmV0dXJuIGUuY2xhc3NMaXN0LnJlbW92ZSh0KX0pOmUuY2xhc3NMaXN0LnJlbW92ZSh0KTtlbHNle2Zvcih2YXIgbj1cIiBcIitlLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpK1wiIFwiLHI9XCIgXCIrdCtcIiBcIjtuLmluZGV4T2Yocik+PTA7KW49bi5yZXBsYWNlKHIsXCIgXCIpO2Uuc2V0QXR0cmlidXRlKFwiY2xhc3NcIixuLnRyaW0oKSl9fWZ1bmN0aW9uIE50KGUpe1NvKGZ1bmN0aW9uKCl7U28oZSl9KX1mdW5jdGlvbiBMdChlLHQpeyhlLl90cmFuc2l0aW9uQ2xhc3Nlc3x8KGUuX3RyYW5zaXRpb25DbGFzc2VzPVtdKSkucHVzaCh0KSxqdChlLHQpfWZ1bmN0aW9uIER0KGUsdCl7ZS5fdHJhbnNpdGlvbkNsYXNzZXMmJnIoZS5fdHJhbnNpdGlvbkNsYXNzZXMsdCksRXQoZSx0KX1mdW5jdGlvbiBNdChlLHQsbil7dmFyIHI9UHQoZSx0KSxpPXIudHlwZSxvPXIudGltZW91dCxhPXIucHJvcENvdW50O2lmKCFpKXJldHVybiBuKCk7dmFyIHM9aT09PXdvP2tvOk9vLGM9MCxsPWZ1bmN0aW9uKCl7ZS5yZW1vdmVFdmVudExpc3RlbmVyKHMsdSksbigpfSx1PWZ1bmN0aW9uKHQpe3QudGFyZ2V0PT09ZSYmKytjPj1hJiZsKCl9O3NldFRpbWVvdXQoZnVuY3Rpb24oKXtjPGEmJmwoKX0sbysxKSxlLmFkZEV2ZW50TGlzdGVuZXIocyx1KX1mdW5jdGlvbiBQdChlLHQpe3ZhciBuLHI9d2luZG93LmdldENvbXB1dGVkU3R5bGUoZSksaT1yW0NvK1wiRGVsYXlcIl0uc3BsaXQoXCIsIFwiKSxvPXJbQ28rXCJEdXJhdGlvblwiXS5zcGxpdChcIiwgXCIpLGE9UnQoaSxvKSxzPXJbQW8rXCJEZWxheVwiXS5zcGxpdChcIiwgXCIpLGM9cltBbytcIkR1cmF0aW9uXCJdLnNwbGl0KFwiLCBcIiksbD1SdChzLGMpLHU9MCxmPTA7dD09PXdvP2E+MCYmKG49d28sdT1hLGY9by5sZW5ndGgpOnQ9PT14bz9sPjAmJihuPXhvLHU9bCxmPWMubGVuZ3RoKToodT1NYXRoLm1heChhLGwpLG49dT4wP2E+bD93bzp4bzpudWxsLGY9bj9uPT09d28/by5sZW5ndGg6Yy5sZW5ndGg6MCk7dmFyIGQ9bj09PXdvJiZUby50ZXN0KHJbQ28rXCJQcm9wZXJ0eVwiXSk7cmV0dXJue3R5cGU6bix0aW1lb3V0OnUscHJvcENvdW50OmYsaGFzVHJhbnNmb3JtOmR9fWZ1bmN0aW9uIFJ0KGUsdCl7Zm9yKDtlLmxlbmd0aDx0Lmxlbmd0aDspZT1lLmNvbmNhdChlKTtyZXR1cm4gTWF0aC5tYXguYXBwbHkobnVsbCx0Lm1hcChmdW5jdGlvbih0LG4pe3JldHVybiBJdCh0KStJdChlW25dKX0pKX1mdW5jdGlvbiBJdChlKXtyZXR1cm4gMWUzKk51bWJlcihlLnNsaWNlKDAsLTEpKX1mdW5jdGlvbiBGdChlKXt2YXIgdD1lLmVsbTt0Ll9sZWF2ZUNiJiYodC5fbGVhdmVDYi5jYW5jZWxsZWQ9ITAsdC5fbGVhdmVDYigpKTt2YXIgbj1VdChlLmRhdGEudHJhbnNpdGlvbik7aWYobiYmIXQuX2VudGVyQ2ImJjE9PT10Lm5vZGVUeXBlKXt2YXIgcj1uLmNzcyxpPW4udHlwZSxvPW4uZW50ZXJDbGFzcyxhPW4uZW50ZXJBY3RpdmVDbGFzcyxzPW4uYXBwZWFyQ2xhc3MsYz1uLmFwcGVhckFjdGl2ZUNsYXNzLGw9bi5iZWZvcmVFbnRlcix1PW4uZW50ZXIsZj1uLmFmdGVyRW50ZXIsZD1uLmVudGVyQ2FuY2VsbGVkLHA9bi5iZWZvcmVBcHBlYXIsdj1uLmFwcGVhcixoPW4uYWZ0ZXJBcHBlYXIsbT1uLmFwcGVhckNhbmNlbGxlZCxnPUxpLiR2bm9kZSx5PWcmJmcucGFyZW50P2cucGFyZW50LmNvbnRleHQ6TGksXz0heS5faXNNb3VudGVkfHwhZS5pc1Jvb3RJbnNlcnQ7aWYoIV98fHZ8fFwiXCI9PT12KXt2YXIgYj1fP3M6bywkPV8/YzphLHc9Xz9wfHxsOmwseD1fJiZcImZ1bmN0aW9uXCI9PXR5cGVvZiB2P3Y6dSxDPV8/aHx8ZjpmLGs9Xz9tfHxkOmQsQT1yIT09ITEmJiF0aSxPPXgmJih4Ll9sZW5ndGh8fHgubGVuZ3RoKT4xLFM9dC5fZW50ZXJDYj1IdChmdW5jdGlvbigpe0EmJkR0KHQsJCksUy5jYW5jZWxsZWQ/KEEmJkR0KHQsYiksayYmayh0KSk6QyYmQyh0KSx0Ll9lbnRlckNiPW51bGx9KTtlLmRhdGEuc2hvd3x8aWUoZS5kYXRhLmhvb2t8fChlLmRhdGEuaG9vaz17fSksXCJpbnNlcnRcIixmdW5jdGlvbigpe3ZhciBuPXQucGFyZW50Tm9kZSxyPW4mJm4uX3BlbmRpbmcmJm4uX3BlbmRpbmdbZS5rZXldO3ImJnIudGFnPT09ZS50YWcmJnIuZWxtLl9sZWF2ZUNiJiZyLmVsbS5fbGVhdmVDYigpLHgmJngodCxTKX0sXCJ0cmFuc2l0aW9uLWluc2VydFwiKSx3JiZ3KHQpLEEmJihMdCh0LGIpLEx0KHQsJCksTnQoZnVuY3Rpb24oKXtEdCh0LGIpLFMuY2FuY2VsbGVkfHxPfHxNdCh0LGksUyl9KSksZS5kYXRhLnNob3cmJngmJngodCxTKSxBfHxPfHxTKCl9fX1mdW5jdGlvbiBCdChlLHQpe2Z1bmN0aW9uIG4oKXttLmNhbmNlbGxlZHx8KGUuZGF0YS5zaG93fHwoKHIucGFyZW50Tm9kZS5fcGVuZGluZ3x8KHIucGFyZW50Tm9kZS5fcGVuZGluZz17fSkpW2Uua2V5XT1lKSxsJiZsKHIpLHYmJihMdChyLHMpLEx0KHIsYyksTnQoZnVuY3Rpb24oKXtEdChyLHMpLG0uY2FuY2VsbGVkfHxofHxNdChyLGEsbSl9KSksdSYmdShyLG0pLHZ8fGh8fG0oKSl9dmFyIHI9ZS5lbG07ci5fZW50ZXJDYiYmKHIuX2VudGVyQ2IuY2FuY2VsbGVkPSEwLHIuX2VudGVyQ2IoKSk7dmFyIGk9VXQoZS5kYXRhLnRyYW5zaXRpb24pO2lmKCFpKXJldHVybiB0KCk7aWYoIXIuX2xlYXZlQ2ImJjE9PT1yLm5vZGVUeXBlKXt2YXIgbz1pLmNzcyxhPWkudHlwZSxzPWkubGVhdmVDbGFzcyxjPWkubGVhdmVBY3RpdmVDbGFzcyxsPWkuYmVmb3JlTGVhdmUsdT1pLmxlYXZlLGY9aS5hZnRlckxlYXZlLGQ9aS5sZWF2ZUNhbmNlbGxlZCxwPWkuZGVsYXlMZWF2ZSx2PW8hPT0hMSYmIXRpLGg9dSYmKHUuX2xlbmd0aHx8dS5sZW5ndGgpPjEsbT1yLl9sZWF2ZUNiPUh0KGZ1bmN0aW9uKCl7ci5wYXJlbnROb2RlJiZyLnBhcmVudE5vZGUuX3BlbmRpbmcmJihyLnBhcmVudE5vZGUuX3BlbmRpbmdbZS5rZXldPW51bGwpLHYmJkR0KHIsYyksbS5jYW5jZWxsZWQ/KHYmJkR0KHIscyksZCYmZChyKSk6KHQoKSxmJiZmKHIpKSxyLl9sZWF2ZUNiPW51bGx9KTtwP3Aobik6bigpfX1mdW5jdGlvbiBVdChlKXtpZihlKXtpZihcIm9iamVjdFwiPT10eXBlb2YgZSl7dmFyIHQ9e307cmV0dXJuIGUuY3NzIT09ITEmJmwodCxqbyhlLm5hbWV8fFwidlwiKSksbCh0LGUpLHR9cmV0dXJuXCJzdHJpbmdcIj09dHlwZW9mIGU/am8oZSk6dm9pZCAwfX1mdW5jdGlvbiBIdChlKXt2YXIgdD0hMTtyZXR1cm4gZnVuY3Rpb24oKXtcbnR8fCh0PSEwLGUoKSl9fWZ1bmN0aW9uIFZ0KGUsdCxuKXt2YXIgcj10LnZhbHVlLGk9ZS5tdWx0aXBsZTtpZighaXx8QXJyYXkuaXNBcnJheShyKSl7Zm9yKHZhciBvLGEscz0wLGM9ZS5vcHRpb25zLmxlbmd0aDtzPGM7cysrKWlmKGE9ZS5vcHRpb25zW3NdLGkpbz1tKHIsSnQoYSkpPi0xLGEuc2VsZWN0ZWQhPT1vJiYoYS5zZWxlY3RlZD1vKTtlbHNlIGlmKGgoSnQoYSkscikpcmV0dXJuIHZvaWQoZS5zZWxlY3RlZEluZGV4IT09cyYmKGUuc2VsZWN0ZWRJbmRleD1zKSk7aXx8KGUuc2VsZWN0ZWRJbmRleD0tMSl9fWZ1bmN0aW9uIHp0KGUsdCl7Zm9yKHZhciBuPTAscj10Lmxlbmd0aDtuPHI7bisrKWlmKGgoSnQodFtuXSksZSkpcmV0dXJuITE7cmV0dXJuITB9ZnVuY3Rpb24gSnQoZSl7cmV0dXJuXCJfdmFsdWVcImluIGU/ZS5fdmFsdWU6ZS52YWx1ZX1mdW5jdGlvbiBLdChlKXtlLnRhcmdldC5jb21wb3Npbmc9ITB9ZnVuY3Rpb24gcXQoZSl7ZS50YXJnZXQuY29tcG9zaW5nPSExLFd0KGUudGFyZ2V0LFwiaW5wdXRcIil9ZnVuY3Rpb24gV3QoZSx0KXt2YXIgbj1kb2N1bWVudC5jcmVhdGVFdmVudChcIkhUTUxFdmVudHNcIik7bi5pbml0RXZlbnQodCwhMCwhMCksZS5kaXNwYXRjaEV2ZW50KG4pfWZ1bmN0aW9uIFp0KGUpe3JldHVybiFlLmNoaWxkfHxlLmRhdGEmJmUuZGF0YS50cmFuc2l0aW9uP2U6WnQoZS5jaGlsZC5fdm5vZGUpfWZ1bmN0aW9uIEd0KGUpe3ZhciB0PWUmJmUuY29tcG9uZW50T3B0aW9ucztyZXR1cm4gdCYmdC5DdG9yLm9wdGlvbnMuYWJzdHJhY3Q/R3QoZmUodC5jaGlsZHJlbikpOmV9ZnVuY3Rpb24gWXQoZSl7dmFyIHQ9e30sbj1lLiRvcHRpb25zO2Zvcih2YXIgciBpbiBuLnByb3BzRGF0YSl0W3JdPWVbcl07dmFyIGk9bi5fcGFyZW50TGlzdGVuZXJzO2Zvcih2YXIgbyBpbiBpKXRbVnIobyldPWlbb10uZm47cmV0dXJuIHR9ZnVuY3Rpb24gUXQoZSx0KXtyZXR1cm4vXFxkLWtlZXAtYWxpdmUkLy50ZXN0KHQudGFnKT9lKFwia2VlcC1hbGl2ZVwiKTpudWxsfWZ1bmN0aW9uIFh0KGUpe2Zvcig7ZT1lLnBhcmVudDspaWYoZS5kYXRhLnRyYW5zaXRpb24pcmV0dXJuITB9ZnVuY3Rpb24gZW4oZSl7ZS5lbG0uX21vdmVDYiYmZS5lbG0uX21vdmVDYigpLGUuZWxtLl9lbnRlckNiJiZlLmVsbS5fZW50ZXJDYigpfWZ1bmN0aW9uIHRuKGUpe2UuZGF0YS5uZXdQb3M9ZS5lbG0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCl9ZnVuY3Rpb24gbm4oZSl7dmFyIHQ9ZS5kYXRhLnBvcyxuPWUuZGF0YS5uZXdQb3Mscj10LmxlZnQtbi5sZWZ0LGk9dC50b3Atbi50b3A7aWYocnx8aSl7ZS5kYXRhLm1vdmVkPSEwO3ZhciBvPWUuZWxtLnN0eWxlO28udHJhbnNmb3JtPW8uV2Via2l0VHJhbnNmb3JtPVwidHJhbnNsYXRlKFwiK3IrXCJweCxcIitpK1wicHgpXCIsby50cmFuc2l0aW9uRHVyYXRpb249XCIwc1wifX1mdW5jdGlvbiBybihlLHQpe3ZhciBuPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7cmV0dXJuIG4uaW5uZXJIVE1MPSc8ZGl2IGE9XCInK2UrJ1wiPicsbi5pbm5lckhUTUwuaW5kZXhPZih0KT4wfWZ1bmN0aW9uIG9uKGUpe3JldHVybiBWbz1Wb3x8ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKSxWby5pbm5lckhUTUw9ZSxWby50ZXh0Q29udGVudH1mdW5jdGlvbiBhbihlLHQpe3JldHVybiB0JiYoZT1lLnJlcGxhY2UoRGEsXCJcXG5cIikpLGUucmVwbGFjZShOYSxcIjxcIikucmVwbGFjZShMYSxcIj5cIikucmVwbGFjZShNYSxcIiZcIikucmVwbGFjZShQYSwnXCInKX1mdW5jdGlvbiBzbihlLHQpe2Z1bmN0aW9uIG4odCl7Zis9dCxlPWUuc3Vic3RyaW5nKHQpfWZ1bmN0aW9uIHIoKXt2YXIgdD1lLm1hdGNoKFlvKTtpZih0KXt2YXIgcj17dGFnTmFtZTp0WzFdLGF0dHJzOltdLHN0YXJ0OmZ9O24odFswXS5sZW5ndGgpO2Zvcih2YXIgaSxvOyEoaT1lLm1hdGNoKFFvKSkmJihvPWUubWF0Y2goV28pKTspbihvWzBdLmxlbmd0aCksci5hdHRycy5wdXNoKG8pO2lmKGkpcmV0dXJuIHIudW5hcnlTbGFzaD1pWzFdLG4oaVswXS5sZW5ndGgpLHIuZW5kPWYscn19ZnVuY3Rpb24gaShlKXt2YXIgbj1lLnRhZ05hbWUscj1lLnVuYXJ5U2xhc2g7bCYmKFwicFwiPT09cyYmUWkobikmJm8oXCJcIixzKSxZaShuKSYmcz09PW4mJm8oXCJcIixuKSk7Zm9yKHZhciBpPXUobil8fFwiaHRtbFwiPT09biYmXCJoZWFkXCI9PT1zfHwhIXIsYT1lLmF0dHJzLmxlbmd0aCxmPW5ldyBBcnJheShhKSxkPTA7ZDxhO2QrKyl7dmFyIHA9ZS5hdHRyc1tkXTtyYSYmcFswXS5pbmRleE9mKCdcIlwiJyk9PT0tMSYmKFwiXCI9PT1wWzNdJiZkZWxldGUgcFszXSxcIlwiPT09cFs0XSYmZGVsZXRlIHBbNF0sXCJcIj09PXBbNV0mJmRlbGV0ZSBwWzVdKTt2YXIgdj1wWzNdfHxwWzRdfHxwWzVdfHxcIlwiO2ZbZF09e25hbWU6cFsxXSx2YWx1ZTphbih2LHQuc2hvdWxkRGVjb2RlTmV3bGluZXMpfX1pfHwoYy5wdXNoKHt0YWc6bixhdHRyczpmfSkscz1uLHI9XCJcIiksdC5zdGFydCYmdC5zdGFydChuLGYsaSxlLnN0YXJ0LGUuZW5kKX1mdW5jdGlvbiBvKGUsbixyLGkpe3ZhciBvO2lmKG51bGw9PXImJihyPWYpLG51bGw9PWkmJihpPWYpLG4pe3ZhciBhPW4udG9Mb3dlckNhc2UoKTtmb3Iobz1jLmxlbmd0aC0xO28+PTAmJmNbb10udGFnLnRvTG93ZXJDYXNlKCkhPT1hO28tLSk7fWVsc2Ugbz0wO2lmKG8+PTApe2Zvcih2YXIgbD1jLmxlbmd0aC0xO2w+PW87bC0tKXQuZW5kJiZ0LmVuZChjW2xdLnRhZyxyLGkpO2MubGVuZ3RoPW8scz1vJiZjW28tMV0udGFnfWVsc2VcImJyXCI9PT1uLnRvTG93ZXJDYXNlKCk/dC5zdGFydCYmdC5zdGFydChuLFtdLCEwLHIsaSk6XCJwXCI9PT1uLnRvTG93ZXJDYXNlKCkmJih0LnN0YXJ0JiZ0LnN0YXJ0KG4sW10sITEscixpKSx0LmVuZCYmdC5lbmQobixyLGkpKX1mb3IodmFyIGEscyxjPVtdLGw9dC5leHBlY3RIVE1MLHU9dC5pc1VuYXJ5VGFnfHxacixmPTA7ZTspe2lmKGE9ZSxzJiZqYShzLHQuc2ZjLGMpKXt2YXIgZD1zLnRvTG93ZXJDYXNlKCkscD1FYVtkXXx8KEVhW2RdPW5ldyBSZWdFeHAoXCIoW1xcXFxzXFxcXFNdKj8pKDwvXCIrZCtcIltePl0qPilcIixcImlcIikpLHY9MCxoPWUucmVwbGFjZShwLGZ1bmN0aW9uKGUsbixyKXtyZXR1cm4gdj1yLmxlbmd0aCxcInNjcmlwdFwiIT09ZCYmXCJzdHlsZVwiIT09ZCYmXCJub3NjcmlwdFwiIT09ZCYmKG49bi5yZXBsYWNlKC88IS0tKFtcXHNcXFNdKj8pLS0+L2csXCIkMVwiKS5yZXBsYWNlKC88IVxcW0NEQVRBXFxbKFtcXHNcXFNdKj8pXV0+L2csXCIkMVwiKSksdC5jaGFycyYmdC5jaGFycyhuKSxcIlwifSk7Zis9ZS5sZW5ndGgtaC5sZW5ndGgsZT1oLG8oXCI8L1wiK2QrXCI+XCIsZCxmLXYsZil9ZWxzZXt2YXIgbT1lLmluZGV4T2YoXCI8XCIpO2lmKDA9PT1tKXtpZih0YS50ZXN0KGUpKXt2YXIgZz1lLmluZGV4T2YoXCItLT5cIik7aWYoZz49MCl7bihnKzMpO2NvbnRpbnVlfX1pZihuYS50ZXN0KGUpKXt2YXIgeT1lLmluZGV4T2YoXCJdPlwiKTtpZih5Pj0wKXtuKHkrMik7Y29udGludWV9fXZhciBfPWUubWF0Y2goZWEpO2lmKF8pe24oX1swXS5sZW5ndGgpO2NvbnRpbnVlfXZhciBiPWUubWF0Y2goWG8pO2lmKGIpe3ZhciAkPWY7bihiWzBdLmxlbmd0aCksbyhiWzBdLGJbMV0sJCxmKTtjb250aW51ZX12YXIgdz1yKCk7aWYodyl7aSh3KTtjb250aW51ZX19dmFyIHg9dm9pZCAwLEM9dm9pZCAwLGs9dm9pZCAwO2lmKG0+MCl7Zm9yKEM9ZS5zbGljZShtKTshKFhvLnRlc3QoQyl8fFlvLnRlc3QoQyl8fHRhLnRlc3QoQyl8fG5hLnRlc3QoQyl8fChrPUMuaW5kZXhPZihcIjxcIiwxKSxrPDApKTspbSs9ayxDPWUuc2xpY2UobSk7eD1lLnN1YnN0cmluZygwLG0pLG4obSl9bTwwJiYoeD1lLGU9XCJcIiksdC5jaGFycyYmeCYmdC5jaGFycyh4KX1pZihlPT09YSYmdC5jaGFycyl7dC5jaGFycyhlKTticmVha319bygpfWZ1bmN0aW9uIGNuKGUpe2Z1bmN0aW9uIHQoKXsoYXx8KGE9W10pKS5wdXNoKGUuc2xpY2UodixpKS50cmltKCkpLHY9aSsxfXZhciBuLHIsaSxvLGEscz0hMSxjPSExLGw9ITEsdT0hMSxmPTAsZD0wLHA9MCx2PTA7Zm9yKGk9MDtpPGUubGVuZ3RoO2krKylpZihyPW4sbj1lLmNoYXJDb2RlQXQoaSkscykzOT09PW4mJjkyIT09ciYmKHM9ITEpO2Vsc2UgaWYoYykzND09PW4mJjkyIT09ciYmKGM9ITEpO2Vsc2UgaWYobCk5Nj09PW4mJjkyIT09ciYmKGw9ITEpO2Vsc2UgaWYodSk0Nz09PW4mJjkyIT09ciYmKHU9ITEpO2Vsc2UgaWYoMTI0IT09bnx8MTI0PT09ZS5jaGFyQ29kZUF0KGkrMSl8fDEyND09PWUuY2hhckNvZGVBdChpLTEpfHxmfHxkfHxwKXN3aXRjaChuKXtjYXNlIDM0OmM9ITA7YnJlYWs7Y2FzZSAzOTpzPSEwO2JyZWFrO2Nhc2UgOTY6bD0hMDticmVhaztjYXNlIDQ3OnU9ITA7YnJlYWs7Y2FzZSA0MDpwKys7YnJlYWs7Y2FzZSA0MTpwLS07YnJlYWs7Y2FzZSA5MTpkKys7YnJlYWs7Y2FzZSA5MzpkLS07YnJlYWs7Y2FzZSAxMjM6ZisrO2JyZWFrO2Nhc2UgMTI1OmYtLX1lbHNlIHZvaWQgMD09PW8/KHY9aSsxLG89ZS5zbGljZSgwLGkpLnRyaW0oKSk6dCgpO2lmKHZvaWQgMD09PW8/bz1lLnNsaWNlKDAsaSkudHJpbSgpOjAhPT12JiZ0KCksYSlmb3IoaT0wO2k8YS5sZW5ndGg7aSsrKW89bG4obyxhW2ldKTtyZXR1cm4gb31mdW5jdGlvbiBsbihlLHQpe3ZhciBuPXQuaW5kZXhPZihcIihcIik7aWYobjwwKXJldHVybidfZihcIicrdCsnXCIpKCcrZStcIilcIjt2YXIgcj10LnNsaWNlKDAsbiksaT10LnNsaWNlKG4rMSk7cmV0dXJuJ19mKFwiJytyKydcIikoJytlK1wiLFwiK2l9ZnVuY3Rpb24gdW4oZSx0KXt2YXIgbj10P0ZhKHQpOlJhO2lmKG4udGVzdChlKSl7Zm9yKHZhciByLGksbz1bXSxhPW4ubGFzdEluZGV4PTA7cj1uLmV4ZWMoZSk7KXtpPXIuaW5kZXgsaT5hJiZvLnB1c2goSlNPTi5zdHJpbmdpZnkoZS5zbGljZShhLGkpKSk7dmFyIHM9Y24oclsxXS50cmltKCkpO28ucHVzaChcIl9zKFwiK3MrXCIpXCIpLGE9aStyWzBdLmxlbmd0aH1yZXR1cm4gYTxlLmxlbmd0aCYmby5wdXNoKEpTT04uc3RyaW5naWZ5KGUuc2xpY2UoYSkpKSxvLmpvaW4oXCIrXCIpfX1mdW5jdGlvbiBmbihlKXtjb25zb2xlLmVycm9yKFwiW1Z1ZSBwYXJzZXJdOiBcIitlKX1mdW5jdGlvbiBkbihlLHQpe3JldHVybiBlP2UubWFwKGZ1bmN0aW9uKGUpe3JldHVybiBlW3RdfSkuZmlsdGVyKGZ1bmN0aW9uKGUpe3JldHVybiBlfSk6W119ZnVuY3Rpb24gcG4oZSx0LG4peyhlLnByb3BzfHwoZS5wcm9wcz1bXSkpLnB1c2goe25hbWU6dCx2YWx1ZTpufSl9ZnVuY3Rpb24gdm4oZSx0LG4peyhlLmF0dHJzfHwoZS5hdHRycz1bXSkpLnB1c2goe25hbWU6dCx2YWx1ZTpufSl9ZnVuY3Rpb24gaG4oZSx0LG4scixpLG8peyhlLmRpcmVjdGl2ZXN8fChlLmRpcmVjdGl2ZXM9W10pKS5wdXNoKHtuYW1lOnQscmF3TmFtZTpuLHZhbHVlOnIsYXJnOmksbW9kaWZpZXJzOm99KX1mdW5jdGlvbiBtbihlLHQsbixyLGkpe3ImJnIuY2FwdHVyZSYmKGRlbGV0ZSByLmNhcHR1cmUsdD1cIiFcIit0KTt2YXIgbztyJiZyLm5hdGl2ZT8oZGVsZXRlIHIubmF0aXZlLG89ZS5uYXRpdmVFdmVudHN8fChlLm5hdGl2ZUV2ZW50cz17fSkpOm89ZS5ldmVudHN8fChlLmV2ZW50cz17fSk7dmFyIGE9e3ZhbHVlOm4sbW9kaWZpZXJzOnJ9LHM9b1t0XTtBcnJheS5pc0FycmF5KHMpP2k/cy51bnNoaWZ0KGEpOnMucHVzaChhKTpzP29bdF09aT9bYSxzXTpbcyxhXTpvW3RdPWF9ZnVuY3Rpb24gZ24oZSx0LG4pe3ZhciByPXluKGUsXCI6XCIrdCl8fHluKGUsXCJ2LWJpbmQ6XCIrdCk7aWYobnVsbCE9cilyZXR1cm4gY24ocik7aWYobiE9PSExKXt2YXIgaT15bihlLHQpO2lmKG51bGwhPWkpcmV0dXJuIEpTT04uc3RyaW5naWZ5KGkpfX1mdW5jdGlvbiB5bihlLHQpe3ZhciBuO2lmKG51bGwhPShuPWUuYXR0cnNNYXBbdF0pKWZvcih2YXIgcj1lLmF0dHJzTGlzdCxpPTAsbz1yLmxlbmd0aDtpPG87aSsrKWlmKHJbaV0ubmFtZT09PXQpe3Iuc3BsaWNlKGksMSk7YnJlYWt9cmV0dXJuIG59ZnVuY3Rpb24gX24oZSl7aWYob2E9ZSxpYT1vYS5sZW5ndGgsc2E9Y2E9bGE9MCxlLmluZGV4T2YoXCJbXCIpPDB8fGUubGFzdEluZGV4T2YoXCJdXCIpPGlhLTEpcmV0dXJue2V4cDplLGlkeDpudWxsfTtmb3IoOyEkbigpOylhYT1ibigpLHduKGFhKT9DbihhYSk6OTE9PT1hYSYmeG4oYWEpO3JldHVybntleHA6ZS5zdWJzdHJpbmcoMCxjYSksaWR4OmUuc3Vic3RyaW5nKGNhKzEsbGEpfX1mdW5jdGlvbiBibigpe3JldHVybiBvYS5jaGFyQ29kZUF0KCsrc2EpfWZ1bmN0aW9uICRuKCl7cmV0dXJuIHNhPj1pYX1mdW5jdGlvbiB3bihlKXtyZXR1cm4gMzQ9PT1lfHwzOT09PWV9ZnVuY3Rpb24geG4oZSl7dmFyIHQ9MTtmb3IoY2E9c2E7ISRuKCk7KWlmKGU9Ym4oKSx3bihlKSlDbihlKTtlbHNlIGlmKDkxPT09ZSYmdCsrLDkzPT09ZSYmdC0tLDA9PT10KXtsYT1zYTticmVha319ZnVuY3Rpb24gQ24oZSl7Zm9yKHZhciB0PWU7ISRuKCkmJihlPWJuKCksZSE9PXQpOyk7fWZ1bmN0aW9uIGtuKGUsdCl7dWE9dC53YXJufHxmbixmYT10LmdldFRhZ05hbWVzcGFjZXx8WnIsZGE9dC5tdXN0VXNlUHJvcHx8WnIscGE9dC5pc1ByZVRhZ3x8WnIsdmE9ZG4odC5tb2R1bGVzLFwicHJlVHJhbnNmb3JtTm9kZVwiKSxoYT1kbih0Lm1vZHVsZXMsXCJ0cmFuc2Zvcm1Ob2RlXCIpLG1hPWRuKHQubW9kdWxlcyxcInBvc3RUcmFuc2Zvcm1Ob2RlXCIpLGdhPXQuZGVsaW1pdGVyczt2YXIgbixyLGk9W10sbz10LnByZXNlcnZlV2hpdGVzcGFjZSE9PSExLGE9ITEscz0hMTtyZXR1cm4gc24oZSx7ZXhwZWN0SFRNTDp0LmV4cGVjdEhUTUwsaXNVbmFyeVRhZzp0LmlzVW5hcnlUYWcsc2hvdWxkRGVjb2RlTmV3bGluZXM6dC5zaG91bGREZWNvZGVOZXdsaW5lcyxzdGFydDpmdW5jdGlvbihlLG8sYyl7ZnVuY3Rpb24gbChlKXt9dmFyIHU9ciYmci5uc3x8ZmEoZSk7ZWkmJlwic3ZnXCI9PT11JiYobz1WbihvKSk7dmFyIGY9e3R5cGU6MSx0YWc6ZSxhdHRyc0xpc3Q6byxhdHRyc01hcDpCbihvKSxwYXJlbnQ6cixjaGlsZHJlbjpbXX07dSYmKGYubnM9dSksSG4oZikmJiFvaSgpJiYoZi5mb3JiaWRkZW49ITApO2Zvcih2YXIgZD0wO2Q8dmEubGVuZ3RoO2QrKyl2YVtkXShmLHQpO2lmKGF8fChBbihmKSxmLnByZSYmKGE9ITApKSxwYShmLnRhZykmJihzPSEwKSxhKU9uKGYpO2Vsc2V7am4oZiksRW4oZiksRG4oZiksU24oZiksZi5wbGFpbj0hZi5rZXkmJiFvLmxlbmd0aCxUbihmKSxNbihmKSxQbihmKTtmb3IodmFyIHA9MDtwPGhhLmxlbmd0aDtwKyspaGFbcF0oZix0KTtSbihmKX1pZihuP2kubGVuZ3RofHxuLmlmJiYoZi5lbHNlaWZ8fGYuZWxzZSkmJihsKGYpLExuKG4se2V4cDpmLmVsc2VpZixibG9jazpmfSkpOihuPWYsbChuKSksciYmIWYuZm9yYmlkZGVuKWlmKGYuZWxzZWlmfHxmLmVsc2UpTm4oZixyKTtlbHNlIGlmKGYuc2xvdFNjb3BlKXtyLnBsYWluPSExO3ZhciB2PWYuc2xvdFRhcmdldHx8XCJkZWZhdWx0XCI7KHIuc2NvcGVkU2xvdHN8fChyLnNjb3BlZFNsb3RzPXt9KSlbdl09Zn1lbHNlIHIuY2hpbGRyZW4ucHVzaChmKSxmLnBhcmVudD1yO2N8fChyPWYsaS5wdXNoKGYpKTtmb3IodmFyIGg9MDtoPG1hLmxlbmd0aDtoKyspbWFbaF0oZix0KX0sZW5kOmZ1bmN0aW9uKCl7dmFyIGU9aVtpLmxlbmd0aC0xXSx0PWUuY2hpbGRyZW5bZS5jaGlsZHJlbi5sZW5ndGgtMV07dCYmMz09PXQudHlwZSYmXCIgXCI9PT10LnRleHQmJmUuY2hpbGRyZW4ucG9wKCksaS5sZW5ndGgtPTEscj1pW2kubGVuZ3RoLTFdLGUucHJlJiYoYT0hMSkscGEoZS50YWcpJiYocz0hMSl9LGNoYXJzOmZ1bmN0aW9uKGUpe2lmKHImJighZWl8fFwidGV4dGFyZWFcIiE9PXIudGFnfHxyLmF0dHJzTWFwLnBsYWNlaG9sZGVyIT09ZSkmJihlPXN8fGUudHJpbSgpP3FhKGUpOm8mJnIuY2hpbGRyZW4ubGVuZ3RoP1wiIFwiOlwiXCIpKXt2YXIgdDshYSYmXCIgXCIhPT1lJiYodD11bihlLGdhKSk/ci5jaGlsZHJlbi5wdXNoKHt0eXBlOjIsZXhwcmVzc2lvbjp0LHRleHQ6ZX0pOnIuY2hpbGRyZW4ucHVzaCh7dHlwZTozLHRleHQ6ZX0pfX19KSxufWZ1bmN0aW9uIEFuKGUpe251bGwhPXluKGUsXCJ2LXByZVwiKSYmKGUucHJlPSEwKX1mdW5jdGlvbiBPbihlKXt2YXIgdD1lLmF0dHJzTGlzdC5sZW5ndGg7aWYodClmb3IodmFyIG49ZS5hdHRycz1uZXcgQXJyYXkodCkscj0wO3I8dDtyKyspbltyXT17bmFtZTplLmF0dHJzTGlzdFtyXS5uYW1lLHZhbHVlOkpTT04uc3RyaW5naWZ5KGUuYXR0cnNMaXN0W3JdLnZhbHVlKX07ZWxzZSBlLnByZXx8KGUucGxhaW49ITApfWZ1bmN0aW9uIFNuKGUpe3ZhciB0PWduKGUsXCJrZXlcIik7dCYmKGUua2V5PXQpfWZ1bmN0aW9uIFRuKGUpe3ZhciB0PWduKGUsXCJyZWZcIik7dCYmKGUucmVmPXQsZS5yZWZJbkZvcj1JbihlKSl9ZnVuY3Rpb24gam4oZSl7dmFyIHQ7aWYodD15bihlLFwidi1mb3JcIikpe3ZhciBuPXQubWF0Y2goVWEpO2lmKCFuKXJldHVybjtlLmZvcj1uWzJdLnRyaW0oKTt2YXIgcj1uWzFdLnRyaW0oKSxpPXIubWF0Y2goSGEpO2k/KGUuYWxpYXM9aVsxXS50cmltKCksZS5pdGVyYXRvcjE9aVsyXS50cmltKCksaVszXSYmKGUuaXRlcmF0b3IyPWlbM10udHJpbSgpKSk6ZS5hbGlhcz1yfX1mdW5jdGlvbiBFbihlKXt2YXIgdD15bihlLFwidi1pZlwiKTtpZih0KWUuaWY9dCxMbihlLHtleHA6dCxibG9jazplfSk7ZWxzZXtudWxsIT15bihlLFwidi1lbHNlXCIpJiYoZS5lbHNlPSEwKTt2YXIgbj15bihlLFwidi1lbHNlLWlmXCIpO24mJihlLmVsc2VpZj1uKX19ZnVuY3Rpb24gTm4oZSx0KXt2YXIgbj1Vbih0LmNoaWxkcmVuKTtuJiZuLmlmJiZMbihuLHtleHA6ZS5lbHNlaWYsYmxvY2s6ZX0pfWZ1bmN0aW9uIExuKGUsdCl7ZS5jb25kaXRpb25zfHwoZS5jb25kaXRpb25zPVtdKSxlLmNvbmRpdGlvbnMucHVzaCh0KX1mdW5jdGlvbiBEbihlKXt2YXIgdD15bihlLFwidi1vbmNlXCIpO251bGwhPXQmJihlLm9uY2U9ITApfWZ1bmN0aW9uIE1uKGUpe2lmKFwic2xvdFwiPT09ZS50YWcpZS5zbG90TmFtZT1nbihlLFwibmFtZVwiKTtlbHNle3ZhciB0PWduKGUsXCJzbG90XCIpO3QmJihlLnNsb3RUYXJnZXQ9J1wiXCInPT09dD8nXCJkZWZhdWx0XCInOnQpLFwidGVtcGxhdGVcIj09PWUudGFnJiYoZS5zbG90U2NvcGU9eW4oZSxcInNjb3BlXCIpKX19ZnVuY3Rpb24gUG4oZSl7dmFyIHQ7KHQ9Z24oZSxcImlzXCIpKSYmKGUuY29tcG9uZW50PXQpLG51bGwhPXluKGUsXCJpbmxpbmUtdGVtcGxhdGVcIikmJihlLmlubGluZVRlbXBsYXRlPSEwKX1mdW5jdGlvbiBSbihlKXt2YXIgdCxuLHIsaSxvLGEscyxjLGw9ZS5hdHRyc0xpc3Q7Zm9yKHQ9MCxuPWwubGVuZ3RoO3Q8bjt0KyspaWYocj1pPWxbdF0ubmFtZSxvPWxbdF0udmFsdWUsQmEudGVzdChyKSlpZihlLmhhc0JpbmRpbmdzPSEwLHM9Rm4ocikscyYmKHI9ci5yZXBsYWNlKEthLFwiXCIpKSxWYS50ZXN0KHIpKXI9ci5yZXBsYWNlKFZhLFwiXCIpLG89Y24obykscyYmKHMucHJvcCYmKGM9ITAscj1WcihyKSxcImlubmVySHRtbFwiPT09ciYmKHI9XCJpbm5lckhUTUxcIikpLHMuY2FtZWwmJihyPVZyKHIpKSksY3x8ZGEoZS50YWcscik/cG4oZSxyLG8pOnZuKGUscixvKTtlbHNlIGlmKHphLnRlc3Qocikpcj1yLnJlcGxhY2UoemEsXCJcIiksbW4oZSxyLG8scyk7ZWxzZXtyPXIucmVwbGFjZShCYSxcIlwiKTt2YXIgdT1yLm1hdGNoKEphKTt1JiYoYT11WzFdKSYmKHI9ci5zbGljZSgwLC0oYS5sZW5ndGgrMSkpKSxobihlLHIsaSxvLGEscyl9ZWxzZSB2bihlLHIsSlNPTi5zdHJpbmdpZnkobykpfWZ1bmN0aW9uIEluKGUpe2Zvcih2YXIgdD1lO3Q7KXtpZih2b2lkIDAhPT10LmZvcilyZXR1cm4hMDt0PXQucGFyZW50fXJldHVybiExfWZ1bmN0aW9uIEZuKGUpe3ZhciB0PWUubWF0Y2goS2EpO2lmKHQpe3ZhciBuPXt9O3JldHVybiB0LmZvckVhY2goZnVuY3Rpb24oZSl7bltlLnNsaWNlKDEpXT0hMH0pLG59fWZ1bmN0aW9uIEJuKGUpe2Zvcih2YXIgdD17fSxuPTAscj1lLmxlbmd0aDtuPHI7bisrKXRbZVtuXS5uYW1lXT1lW25dLnZhbHVlO3JldHVybiB0fWZ1bmN0aW9uIFVuKGUpe2Zvcih2YXIgdD1lLmxlbmd0aDt0LS07KWlmKGVbdF0udGFnKXJldHVybiBlW3RdfWZ1bmN0aW9uIEhuKGUpe3JldHVyblwic3R5bGVcIj09PWUudGFnfHxcInNjcmlwdFwiPT09ZS50YWcmJighZS5hdHRyc01hcC50eXBlfHxcInRleHQvamF2YXNjcmlwdFwiPT09ZS5hdHRyc01hcC50eXBlKX1mdW5jdGlvbiBWbihlKXtmb3IodmFyIHQ9W10sbj0wO248ZS5sZW5ndGg7bisrKXt2YXIgcj1lW25dO1dhLnRlc3Qoci5uYW1lKXx8KHIubmFtZT1yLm5hbWUucmVwbGFjZShaYSxcIlwiKSx0LnB1c2gocikpfXJldHVybiB0fWZ1bmN0aW9uIHpuKGUsdCl7ZSYmKHlhPUdhKHQuc3RhdGljS2V5c3x8XCJcIiksX2E9dC5pc1Jlc2VydmVkVGFnfHxmdW5jdGlvbigpe3JldHVybiExfSxLbihlKSxxbihlLCExKSl9ZnVuY3Rpb24gSm4oZSl7cmV0dXJuIG4oXCJ0eXBlLHRhZyxhdHRyc0xpc3QsYXR0cnNNYXAscGxhaW4scGFyZW50LGNoaWxkcmVuLGF0dHJzXCIrKGU/XCIsXCIrZTpcIlwiKSl9ZnVuY3Rpb24gS24oZSl7aWYoZS5zdGF0aWM9Wm4oZSksMT09PWUudHlwZSl7aWYoIV9hKGUudGFnKSYmXCJzbG90XCIhPT1lLnRhZyYmbnVsbD09ZS5hdHRyc01hcFtcImlubGluZS10ZW1wbGF0ZVwiXSlyZXR1cm47Zm9yKHZhciB0PTAsbj1lLmNoaWxkcmVuLmxlbmd0aDt0PG47dCsrKXt2YXIgcj1lLmNoaWxkcmVuW3RdO0tuKHIpLHIuc3RhdGljfHwoZS5zdGF0aWM9ITEpfX19ZnVuY3Rpb24gcW4oZSx0KXtpZigxPT09ZS50eXBlKXtpZigoZS5zdGF0aWN8fGUub25jZSkmJihlLnN0YXRpY0luRm9yPXQpLGUuc3RhdGljJiZlLmNoaWxkcmVuLmxlbmd0aCYmKDEhPT1lLmNoaWxkcmVuLmxlbmd0aHx8MyE9PWUuY2hpbGRyZW5bMF0udHlwZSkpcmV0dXJuIHZvaWQoZS5zdGF0aWNSb290PSEwKTtpZihlLnN0YXRpY1Jvb3Q9ITEsZS5jaGlsZHJlbilmb3IodmFyIG49MCxyPWUuY2hpbGRyZW4ubGVuZ3RoO248cjtuKyspcW4oZS5jaGlsZHJlbltuXSx0fHwhIWUuZm9yKTtlLmNvbmRpdGlvbnMmJlduKGUuY29uZGl0aW9ucyx0KX19ZnVuY3Rpb24gV24oZSx0KXtmb3IodmFyIG49MSxyPWUubGVuZ3RoO248cjtuKyspcW4oZVtuXS5ibG9jayx0KX1mdW5jdGlvbiBabihlKXtyZXR1cm4gMiE9PWUudHlwZSYmKDM9PT1lLnR5cGV8fCEoIWUucHJlJiYoZS5oYXNCaW5kaW5nc3x8ZS5pZnx8ZS5mb3J8fEJyKGUudGFnKXx8IV9hKGUudGFnKXx8R24oZSl8fCFPYmplY3Qua2V5cyhlKS5ldmVyeSh5YSkpKSl9ZnVuY3Rpb24gR24oZSl7Zm9yKDtlLnBhcmVudDspe2lmKGU9ZS5wYXJlbnQsXCJ0ZW1wbGF0ZVwiIT09ZS50YWcpcmV0dXJuITE7aWYoZS5mb3IpcmV0dXJuITB9cmV0dXJuITF9ZnVuY3Rpb24gWW4oZSx0KXt2YXIgbj10P1wibmF0aXZlT246e1wiOlwib246e1wiO2Zvcih2YXIgciBpbiBlKW4rPSdcIicrcisnXCI6JytRbihyLGVbcl0pK1wiLFwiO3JldHVybiBuLnNsaWNlKDAsLTEpK1wifVwifWZ1bmN0aW9uIFFuKGUsdCl7aWYodCl7aWYoQXJyYXkuaXNBcnJheSh0KSlyZXR1cm5cIltcIit0Lm1hcChmdW5jdGlvbih0KXtyZXR1cm4gUW4oZSx0KX0pLmpvaW4oXCIsXCIpK1wiXVwiO2lmKHQubW9kaWZpZXJzKXt2YXIgbj1cIlwiLHI9W10saT10cy50ZXN0KGUpO2Zvcih2YXIgbyBpbiB0Lm1vZGlmaWVycyllc1tvXT9uKz1lc1tvXTppJiZuc1tvXT9uKz1uc1tvXTpyLnB1c2gobyk7ci5sZW5ndGgmJihuPVhuKHIpK24pO3ZhciBhPVFhLnRlc3QodC52YWx1ZSk/dC52YWx1ZStcIigkZXZlbnQpXCI6dC52YWx1ZTtyZXR1cm5cImZ1bmN0aW9uKCRldmVudCl7XCIrbithK1wifVwifXJldHVybiBZYS50ZXN0KHQudmFsdWUpfHxRYS50ZXN0KHQudmFsdWUpP3QudmFsdWU6XCJmdW5jdGlvbigkZXZlbnQpe1wiK3QudmFsdWUrXCJ9XCJ9cmV0dXJuXCJmdW5jdGlvbigpe31cIn1mdW5jdGlvbiBYbihlKXt2YXIgdD0xPT09ZS5sZW5ndGg/ZXIoZVswXSk6QXJyYXkucHJvdG90eXBlLmNvbmNhdC5hcHBseShbXSxlLm1hcChlcikpO3JldHVybiBBcnJheS5pc0FycmF5KHQpP1wiaWYoXCIrdC5tYXAoZnVuY3Rpb24oZSl7cmV0dXJuXCIkZXZlbnQua2V5Q29kZSE9PVwiK2V9KS5qb2luKFwiJiZcIikrXCIpcmV0dXJuO1wiOlwiaWYoJGV2ZW50LmtleUNvZGUhPT1cIit0K1wiKXJldHVybjtcIn1mdW5jdGlvbiBlcihlKXtyZXR1cm4gcGFyc2VJbnQoZSwxMCl8fFhhW2VdfHxcIl9rKFwiK0pTT04uc3RyaW5naWZ5KGUpK1wiKVwifWZ1bmN0aW9uIHRyKGUsdCl7ZS53cmFwRGF0YT1mdW5jdGlvbihuKXtyZXR1cm5cIl9iKFwiK24rXCIsJ1wiK2UudGFnK1wiJyxcIit0LnZhbHVlKyh0Lm1vZGlmaWVycyYmdC5tb2RpZmllcnMucHJvcD9cIix0cnVlXCI6XCJcIikrXCIpXCJ9fWZ1bmN0aW9uIG5yKGUsdCl7dmFyIG49Q2Escj1DYT1bXSxpPWthO2thPTAsQWE9dCxiYT10Lndhcm58fGZuLCRhPWRuKHQubW9kdWxlcyxcInRyYW5zZm9ybUNvZGVcIiksd2E9ZG4odC5tb2R1bGVzLFwiZ2VuRGF0YVwiKSx4YT10LmRpcmVjdGl2ZXN8fHt9O3ZhciBvPWU/cnIoZSk6J19oKFwiZGl2XCIpJztyZXR1cm4gQ2E9bixrYT1pLHtyZW5kZXI6XCJ3aXRoKHRoaXMpe3JldHVybiBcIitvK1wifVwiLHN0YXRpY1JlbmRlckZuczpyfX1mdW5jdGlvbiBycihlKXtpZihlLnN0YXRpY1Jvb3QmJiFlLnN0YXRpY1Byb2Nlc3NlZClyZXR1cm4gaXIoZSk7aWYoZS5vbmNlJiYhZS5vbmNlUHJvY2Vzc2VkKXJldHVybiBvcihlKTtpZihlLmZvciYmIWUuZm9yUHJvY2Vzc2VkKXJldHVybiBjcihlKTtpZihlLmlmJiYhZS5pZlByb2Nlc3NlZClyZXR1cm4gYXIoZSk7aWYoXCJ0ZW1wbGF0ZVwiIT09ZS50YWd8fGUuc2xvdFRhcmdldCl7aWYoXCJzbG90XCI9PT1lLnRhZylyZXR1cm4gZ3IoZSk7dmFyIHQ7aWYoZS5jb21wb25lbnQpdD15cihlLmNvbXBvbmVudCxlKTtlbHNle3ZhciBuPWUucGxhaW4/dm9pZCAwOmxyKGUpLHI9ZS5pbmxpbmVUZW1wbGF0ZT9udWxsOnZyKGUpO3Q9XCJfaCgnXCIrZS50YWcrXCInXCIrKG4/XCIsXCIrbjpcIlwiKSsocj9cIixcIityOlwiXCIpK1wiKVwifWZvcih2YXIgaT0wO2k8JGEubGVuZ3RoO2krKyl0PSRhW2ldKGUsdCk7cmV0dXJuIHR9cmV0dXJuIHZyKGUpfHxcInZvaWQgMFwifWZ1bmN0aW9uIGlyKGUpe3JldHVybiBlLnN0YXRpY1Byb2Nlc3NlZD0hMCxDYS5wdXNoKFwid2l0aCh0aGlzKXtyZXR1cm4gXCIrcnIoZSkrXCJ9XCIpLFwiX20oXCIrKENhLmxlbmd0aC0xKSsoZS5zdGF0aWNJbkZvcj9cIix0cnVlXCI6XCJcIikrXCIpXCJ9ZnVuY3Rpb24gb3IoZSl7aWYoZS5vbmNlUHJvY2Vzc2VkPSEwLGUuaWYmJiFlLmlmUHJvY2Vzc2VkKXJldHVybiBhcihlKTtpZihlLnN0YXRpY0luRm9yKXtmb3IodmFyIHQ9XCJcIixuPWUucGFyZW50O247KXtpZihuLmZvcil7dD1uLmtleTticmVha31uPW4ucGFyZW50fXJldHVybiB0P1wiX28oXCIrcnIoZSkrXCIsXCIra2ErKyArKHQ/XCIsXCIrdDpcIlwiKStcIilcIjpycihlKX1yZXR1cm4gaXIoZSl9ZnVuY3Rpb24gYXIoZSl7cmV0dXJuIGUuaWZQcm9jZXNzZWQ9ITAsc3IoZS5jb25kaXRpb25zKX1mdW5jdGlvbiBzcihlKXtmdW5jdGlvbiB0KGUpe3JldHVybiBlLm9uY2U/b3IoZSk6cnIoZSl9aWYoIWUubGVuZ3RoKXJldHVyblwiX2UoKVwiO3ZhciBuPWUuc2hpZnQoKTtyZXR1cm4gbi5leHA/XCIoXCIrbi5leHArXCIpP1wiK3Qobi5ibG9jaykrXCI6XCIrc3IoZSk6XCJcIit0KG4uYmxvY2spfWZ1bmN0aW9uIGNyKGUpe3ZhciB0PWUuZm9yLG49ZS5hbGlhcyxyPWUuaXRlcmF0b3IxP1wiLFwiK2UuaXRlcmF0b3IxOlwiXCIsaT1lLml0ZXJhdG9yMj9cIixcIitlLml0ZXJhdG9yMjpcIlwiO3JldHVybiBlLmZvclByb2Nlc3NlZD0hMCxcIl9sKChcIit0K1wiKSxmdW5jdGlvbihcIituK3IraStcIil7cmV0dXJuIFwiK3JyKGUpK1wifSlcIn1mdW5jdGlvbiBscihlKXt2YXIgdD1cIntcIixuPXVyKGUpO24mJih0Kz1uK1wiLFwiKSxlLmtleSYmKHQrPVwia2V5OlwiK2Uua2V5K1wiLFwiKSxlLnJlZiYmKHQrPVwicmVmOlwiK2UucmVmK1wiLFwiKSxlLnJlZkluRm9yJiYodCs9XCJyZWZJbkZvcjp0cnVlLFwiKSxlLmNvbXBvbmVudCYmKHQrPSd0YWc6XCInK2UudGFnKydcIiwnKTtmb3IodmFyIHI9MDtyPHdhLmxlbmd0aDtyKyspdCs9d2Fbcl0oZSk7aWYoZS5hdHRycyYmKHQrPVwiYXR0cnM6e1wiK19yKGUuYXR0cnMpK1wifSxcIiksZS5wcm9wcyYmKHQrPVwiZG9tUHJvcHM6e1wiK19yKGUucHJvcHMpK1wifSxcIiksZS5ldmVudHMmJih0Kz1ZbihlLmV2ZW50cykrXCIsXCIpLGUubmF0aXZlRXZlbnRzJiYodCs9WW4oZS5uYXRpdmVFdmVudHMsITApK1wiLFwiKSxlLnNsb3RUYXJnZXQmJih0Kz1cInNsb3Q6XCIrZS5zbG90VGFyZ2V0K1wiLFwiKSxlLnNjb3BlZFNsb3RzJiYodCs9ZHIoZS5zY29wZWRTbG90cykrXCIsXCIpLGUuaW5saW5lVGVtcGxhdGUpe3ZhciBpPWZyKGUpO2kmJih0Kz1pK1wiLFwiKX1yZXR1cm4gdD10LnJlcGxhY2UoLywkLyxcIlwiKStcIn1cIixlLndyYXBEYXRhJiYodD1lLndyYXBEYXRhKHQpKSx0fWZ1bmN0aW9uIHVyKGUpe3ZhciB0PWUuZGlyZWN0aXZlcztpZih0KXt2YXIgbixyLGksbyxhPVwiZGlyZWN0aXZlczpbXCIscz0hMTtmb3Iobj0wLHI9dC5sZW5ndGg7bjxyO24rKyl7aT10W25dLG89ITA7dmFyIGM9eGFbaS5uYW1lXXx8cnNbaS5uYW1lXTtjJiYobz0hIWMoZSxpLGJhKSksbyYmKHM9ITAsYSs9J3tuYW1lOlwiJytpLm5hbWUrJ1wiLHJhd05hbWU6XCInK2kucmF3TmFtZSsnXCInKyhpLnZhbHVlP1wiLHZhbHVlOihcIitpLnZhbHVlK1wiKSxleHByZXNzaW9uOlwiK0pTT04uc3RyaW5naWZ5KGkudmFsdWUpOlwiXCIpKyhpLmFyZz8nLGFyZzpcIicraS5hcmcrJ1wiJzpcIlwiKSsoaS5tb2RpZmllcnM/XCIsbW9kaWZpZXJzOlwiK0pTT04uc3RyaW5naWZ5KGkubW9kaWZpZXJzKTpcIlwiKStcIn0sXCIpfXJldHVybiBzP2Euc2xpY2UoMCwtMSkrXCJdXCI6dm9pZCAwfX1mdW5jdGlvbiBmcihlKXt2YXIgdD1lLmNoaWxkcmVuWzBdO2lmKDE9PT10LnR5cGUpe3ZhciBuPW5yKHQsQWEpO3JldHVyblwiaW5saW5lVGVtcGxhdGU6e3JlbmRlcjpmdW5jdGlvbigpe1wiK24ucmVuZGVyK1wifSxzdGF0aWNSZW5kZXJGbnM6W1wiK24uc3RhdGljUmVuZGVyRm5zLm1hcChmdW5jdGlvbihlKXtyZXR1cm5cImZ1bmN0aW9uKCl7XCIrZStcIn1cIn0pLmpvaW4oXCIsXCIpK1wiXX1cIn19ZnVuY3Rpb24gZHIoZSl7cmV0dXJuXCJzY29wZWRTbG90czp7XCIrT2JqZWN0LmtleXMoZSkubWFwKGZ1bmN0aW9uKHQpe3JldHVybiBwcih0LGVbdF0pfSkuam9pbihcIixcIikrXCJ9XCJ9ZnVuY3Rpb24gcHIoZSx0KXtyZXR1cm4gZStcIjpmdW5jdGlvbihcIitTdHJpbmcodC5hdHRyc01hcC5zY29wZSkrXCIpe3JldHVybiBcIisoXCJ0ZW1wbGF0ZVwiPT09dC50YWc/dnIodCl8fFwidm9pZCAwXCI6cnIodCkpK1wifVwifWZ1bmN0aW9uIHZyKGUpe2lmKGUuY2hpbGRyZW4ubGVuZ3RoKXJldHVyblwiW1wiK2UuY2hpbGRyZW4ubWFwKGhyKS5qb2luKFwiLFwiKStcIl1cIn1mdW5jdGlvbiBocihlKXtyZXR1cm4gMT09PWUudHlwZT9ycihlKTptcihlKX1mdW5jdGlvbiBtcihlKXtyZXR1cm4gMj09PWUudHlwZT9lLmV4cHJlc3Npb246YnIoSlNPTi5zdHJpbmdpZnkoZS50ZXh0KSl9ZnVuY3Rpb24gZ3IoZSl7dmFyIHQ9ZS5zbG90TmFtZXx8J1wiZGVmYXVsdFwiJyxuPXZyKGUpO3JldHVyblwiX3QoXCIrdCsobj9cIixcIituOlwiXCIpKyhlLmF0dHJzPyhuP1wiXCI6XCIsbnVsbFwiKStcIix7XCIrZS5hdHRycy5tYXAoZnVuY3Rpb24oZSl7cmV0dXJuIFZyKGUubmFtZSkrXCI6XCIrZS52YWx1ZX0pLmpvaW4oXCIsXCIpK1wifVwiOlwiXCIpK1wiKVwifWZ1bmN0aW9uIHlyKGUsdCl7dmFyIG49dC5pbmxpbmVUZW1wbGF0ZT9udWxsOnZyKHQpO3JldHVyblwiX2goXCIrZStcIixcIitscih0KSsobj9cIixcIituOlwiXCIpK1wiKVwifWZ1bmN0aW9uIF9yKGUpe2Zvcih2YXIgdD1cIlwiLG49MDtuPGUubGVuZ3RoO24rKyl7dmFyIHI9ZVtuXTt0Kz0nXCInK3IubmFtZSsnXCI6JyticihyLnZhbHVlKStcIixcIn1yZXR1cm4gdC5zbGljZSgwLC0xKX1mdW5jdGlvbiBicihlKXtyZXR1cm4gZS5yZXBsYWNlKC9cXHUyMDI4L2csXCJcXFxcdTIwMjhcIikucmVwbGFjZSgvXFx1MjAyOS9nLFwiXFxcXHUyMDI5XCIpfWZ1bmN0aW9uICRyKGUsdCl7dmFyIG49a24oZS50cmltKCksdCk7em4obix0KTt2YXIgcj1ucihuLHQpO3JldHVybnthc3Q6bixyZW5kZXI6ci5yZW5kZXIsc3RhdGljUmVuZGVyRm5zOnIuc3RhdGljUmVuZGVyRm5zfX1mdW5jdGlvbiB3cihlLHQpe3ZhciBuPSh0Lndhcm58fGZuLHluKGUsXCJjbGFzc1wiKSk7biYmKGUuc3RhdGljQ2xhc3M9SlNPTi5zdHJpbmdpZnkobikpO3ZhciByPWduKGUsXCJjbGFzc1wiLCExKTtyJiYoZS5jbGFzc0JpbmRpbmc9cil9ZnVuY3Rpb24geHIoZSl7dmFyIHQ9XCJcIjtyZXR1cm4gZS5zdGF0aWNDbGFzcyYmKHQrPVwic3RhdGljQ2xhc3M6XCIrZS5zdGF0aWNDbGFzcytcIixcIiksZS5jbGFzc0JpbmRpbmcmJih0Kz1cImNsYXNzOlwiK2UuY2xhc3NCaW5kaW5nK1wiLFwiKSx0fWZ1bmN0aW9uIENyKGUsdCl7dmFyIG49KHQud2Fybnx8Zm4seW4oZSxcInN0eWxlXCIpKTtuJiYoZS5zdGF0aWNTdHlsZT1KU09OLnN0cmluZ2lmeShobyhuKSkpO3ZhciByPWduKGUsXCJzdHlsZVwiLCExKTtyJiYoZS5zdHlsZUJpbmRpbmc9cil9ZnVuY3Rpb24ga3IoZSl7dmFyIHQ9XCJcIjtyZXR1cm4gZS5zdGF0aWNTdHlsZSYmKHQrPVwic3RhdGljU3R5bGU6XCIrZS5zdGF0aWNTdHlsZStcIixcIiksZS5zdHlsZUJpbmRpbmcmJih0Kz1cInN0eWxlOihcIitlLnN0eWxlQmluZGluZytcIiksXCIpLHR9ZnVuY3Rpb24gQXIoZSx0LG4pe09hPW47dmFyIHI9dC52YWx1ZSxpPXQubW9kaWZpZXJzLG89ZS50YWcsYT1lLmF0dHJzTWFwLnR5cGU7cmV0dXJuXCJzZWxlY3RcIj09PW8/anIoZSxyLGkpOlwiaW5wdXRcIj09PW8mJlwiY2hlY2tib3hcIj09PWE/T3IoZSxyLGkpOlwiaW5wdXRcIj09PW8mJlwicmFkaW9cIj09PWE/U3IoZSxyLGkpOlRyKGUscixpKSwhMH1mdW5jdGlvbiBPcihlLHQsbil7dmFyIHI9biYmbi5udW1iZXIsaT1nbihlLFwidmFsdWVcIil8fFwibnVsbFwiLG89Z24oZSxcInRydWUtdmFsdWVcIil8fFwidHJ1ZVwiLGE9Z24oZSxcImZhbHNlLXZhbHVlXCIpfHxcImZhbHNlXCI7cG4oZSxcImNoZWNrZWRcIixcIkFycmF5LmlzQXJyYXkoXCIrdCtcIik/X2koXCIrdCtcIixcIitpK1wiKT4tMTpfcShcIit0K1wiLFwiK28rXCIpXCIpLG1uKGUsXCJjaGFuZ2VcIixcInZhciAkJGE9XCIrdCtcIiwkJGVsPSRldmVudC50YXJnZXQsJCRjPSQkZWwuY2hlY2tlZD8oXCIrbytcIik6KFwiK2ErXCIpO2lmKEFycmF5LmlzQXJyYXkoJCRhKSl7dmFyICQkdj1cIisocj9cIl9uKFwiK2krXCIpXCI6aSkrXCIsJCRpPV9pKCQkYSwkJHYpO2lmKCQkYyl7JCRpPDAmJihcIit0K1wiPSQkYS5jb25jYXQoJCR2KSl9ZWxzZXskJGk+LTEmJihcIit0K1wiPSQkYS5zbGljZSgwLCQkaSkuY29uY2F0KCQkYS5zbGljZSgkJGkrMSkpKX19ZWxzZXtcIit0K1wiPSQkY31cIixudWxsLCEwKX1mdW5jdGlvbiBTcihlLHQsbil7dmFyIHI9biYmbi5udW1iZXIsaT1nbihlLFwidmFsdWVcIil8fFwibnVsbFwiO2k9cj9cIl9uKFwiK2krXCIpXCI6aSxwbihlLFwiY2hlY2tlZFwiLFwiX3EoXCIrdCtcIixcIitpK1wiKVwiKSxtbihlLFwiY2hhbmdlXCIsRXIodCxpKSxudWxsLCEwKX1mdW5jdGlvbiBUcihlLHQsbil7dmFyIHI9ZS5hdHRyc01hcC50eXBlLGk9bnx8e30sbz1pLmxhenksYT1pLm51bWJlcixzPWkudHJpbSxjPW98fGVpJiZcInJhbmdlXCI9PT1yP1wiY2hhbmdlXCI6XCJpbnB1dFwiLGw9IW8mJlwicmFuZ2VcIiE9PXIsdT1cImlucHV0XCI9PT1lLnRhZ3x8XCJ0ZXh0YXJlYVwiPT09ZS50YWcsZj11P1wiJGV2ZW50LnRhcmdldC52YWx1ZVwiKyhzP1wiLnRyaW0oKVwiOlwiXCIpOnM/XCIodHlwZW9mICRldmVudCA9PT0gJ3N0cmluZycgPyAkZXZlbnQudHJpbSgpIDogJGV2ZW50KVwiOlwiJGV2ZW50XCI7Zj1hfHxcIm51bWJlclwiPT09cj9cIl9uKFwiK2YrXCIpXCI6Zjt2YXIgZD1Fcih0LGYpO3UmJmwmJihkPVwiaWYoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpcmV0dXJuO1wiK2QpLHBuKGUsXCJ2YWx1ZVwiLHU/XCJfcyhcIit0K1wiKVwiOlwiKFwiK3QrXCIpXCIpLG1uKGUsYyxkLG51bGwsITApfWZ1bmN0aW9uIGpyKGUsdCxuKXt2YXIgcj1uJiZuLm51bWJlcixpPSdBcnJheS5wcm90b3R5cGUuZmlsdGVyLmNhbGwoJGV2ZW50LnRhcmdldC5vcHRpb25zLGZ1bmN0aW9uKG8pe3JldHVybiBvLnNlbGVjdGVkfSkubWFwKGZ1bmN0aW9uKG8pe3ZhciB2YWwgPSBcIl92YWx1ZVwiIGluIG8gPyBvLl92YWx1ZSA6IG8udmFsdWU7cmV0dXJuICcrKHI/XCJfbih2YWwpXCI6XCJ2YWxcIikrXCJ9KVwiKyhudWxsPT1lLmF0dHJzTWFwLm11bHRpcGxlP1wiWzBdXCI6XCJcIiksbz1Fcih0LGkpO21uKGUsXCJjaGFuZ2VcIixvLG51bGwsITApfWZ1bmN0aW9uIEVyKGUsdCl7dmFyIG49X24oZSk7cmV0dXJuIG51bGw9PT1uLmlkeD9lK1wiPVwiK3Q6XCJ2YXIgJCRleHAgPSBcIituLmV4cCtcIiwgJCRpZHggPSBcIituLmlkeCtcIjtpZiAoIUFycmF5LmlzQXJyYXkoJCRleHApKXtcIitlK1wiPVwiK3QrXCJ9ZWxzZXskJGV4cC5zcGxpY2UoJCRpZHgsIDEsIFwiK3QrXCIpfVwifWZ1bmN0aW9uIE5yKGUsdCl7dC52YWx1ZSYmcG4oZSxcInRleHRDb250ZW50XCIsXCJfcyhcIit0LnZhbHVlK1wiKVwiKX1mdW5jdGlvbiBMcihlLHQpe3QudmFsdWUmJnBuKGUsXCJpbm5lckhUTUxcIixcIl9zKFwiK3QudmFsdWUrXCIpXCIpfWZ1bmN0aW9uIERyKGUsdCl7cmV0dXJuIHQ9dD9sKGwoe30sbHMpLHQpOmxzLCRyKGUsdCl9ZnVuY3Rpb24gTXIoZSx0LG4pe3ZhciByPSh0JiZ0Lndhcm58fHVpLHQmJnQuZGVsaW1pdGVycz9TdHJpbmcodC5kZWxpbWl0ZXJzKStlOmUpO2lmKGNzW3JdKXJldHVybiBjc1tyXTt2YXIgaT17fSxvPURyKGUsdCk7aS5yZW5kZXI9UHIoby5yZW5kZXIpO3ZhciBhPW8uc3RhdGljUmVuZGVyRm5zLmxlbmd0aDtpLnN0YXRpY1JlbmRlckZucz1uZXcgQXJyYXkoYSk7Zm9yKHZhciBzPTA7czxhO3MrKylpLnN0YXRpY1JlbmRlckZuc1tzXT1QcihvLnN0YXRpY1JlbmRlckZuc1tzXSk7cmV0dXJuIGNzW3JdPWl9ZnVuY3Rpb24gUHIoZSl7dHJ5e3JldHVybiBuZXcgRnVuY3Rpb24oZSl9Y2F0Y2goZSl7cmV0dXJuIHB9fWZ1bmN0aW9uIFJyKGUpe2lmKGUub3V0ZXJIVE1MKXJldHVybiBlLm91dGVySFRNTDt2YXIgdD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO3JldHVybiB0LmFwcGVuZENoaWxkKGUuY2xvbmVOb2RlKCEwKSksdC5pbm5lckhUTUx9dmFyIElyLEZyLEJyPW4oXCJzbG90LGNvbXBvbmVudFwiLCEwKSxVcj1PYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LEhyPS8tKFxcdykvZyxWcj1hKGZ1bmN0aW9uKGUpe3JldHVybiBlLnJlcGxhY2UoSHIsZnVuY3Rpb24oZSx0KXtyZXR1cm4gdD90LnRvVXBwZXJDYXNlKCk6XCJcIn0pfSksenI9YShmdW5jdGlvbihlKXtyZXR1cm4gZS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKStlLnNsaWNlKDEpfSksSnI9LyhbXi1dKShbQS1aXSkvZyxLcj1hKGZ1bmN0aW9uKGUpe3JldHVybiBlLnJlcGxhY2UoSnIsXCIkMS0kMlwiKS5yZXBsYWNlKEpyLFwiJDEtJDJcIikudG9Mb3dlckNhc2UoKX0pLHFyPU9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcsV3I9XCJbb2JqZWN0IE9iamVjdF1cIixacj1mdW5jdGlvbigpe3JldHVybiExfSxHcj0vW15cXHcuJF0vLFlyPVwiX19wcm90b19fXCJpbnt9LFFyPVwidW5kZWZpbmVkXCIhPXR5cGVvZiB3aW5kb3cmJlwiW29iamVjdCBPYmplY3RdXCIhPT1PYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwod2luZG93KSxYcj1RciYmd2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKSxlaT1YciYmL21zaWV8dHJpZGVudC8udGVzdChYciksdGk9WHImJlhyLmluZGV4T2YoXCJtc2llIDkuMFwiKT4wLG5pPVhyJiZYci5pbmRleE9mKFwiZWRnZS9cIik+MCxyaT1YciYmWHIuaW5kZXhPZihcImFuZHJvaWRcIik+MCxpaT1YciYmL2lwaG9uZXxpcGFkfGlwb2R8aW9zLy50ZXN0KFhyKSxvaT1mdW5jdGlvbigpe3JldHVybiB2b2lkIDA9PT1JciYmKElyPSFRciYmXCJ1bmRlZmluZWRcIiE9dHlwZW9mIGdsb2JhbCYmXCJzZXJ2ZXJcIj09PWdsb2JhbC5wcm9jZXNzLmVudi5WVUVfRU5WKSxJcn0sYWk9UXImJndpbmRvdy5fX1ZVRV9ERVZUT09MU19HTE9CQUxfSE9PS19fLHNpPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gZSgpe3I9ITE7dmFyIGU9bi5zbGljZSgwKTtuLmxlbmd0aD0wO2Zvcih2YXIgdD0wO3Q8ZS5sZW5ndGg7dCsrKWVbdF0oKX12YXIgdCxuPVtdLHI9ITE7aWYoXCJ1bmRlZmluZWRcIiE9dHlwZW9mIFByb21pc2UmJmIoUHJvbWlzZSkpe3ZhciBpPVByb21pc2UucmVzb2x2ZSgpO3Q9ZnVuY3Rpb24oKXtpLnRoZW4oZSksaWkmJnNldFRpbWVvdXQocCl9fWVsc2UgaWYoXCJ1bmRlZmluZWRcIj09dHlwZW9mIE11dGF0aW9uT2JzZXJ2ZXJ8fCFiKE11dGF0aW9uT2JzZXJ2ZXIpJiZcIltvYmplY3QgTXV0YXRpb25PYnNlcnZlckNvbnN0cnVjdG9yXVwiIT09TXV0YXRpb25PYnNlcnZlci50b1N0cmluZygpKXQ9ZnVuY3Rpb24oKXtzZXRUaW1lb3V0KGUsMCl9O2Vsc2V7dmFyIG89MSxhPW5ldyBNdXRhdGlvbk9ic2VydmVyKGUpLHM9ZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoU3RyaW5nKG8pKTthLm9ic2VydmUocyx7Y2hhcmFjdGVyRGF0YTohMH0pLHQ9ZnVuY3Rpb24oKXtvPShvKzEpJTIscy5kYXRhPVN0cmluZyhvKX19cmV0dXJuIGZ1bmN0aW9uKGUsaSl7dmFyIG87aWYobi5wdXNoKGZ1bmN0aW9uKCl7ZSYmZS5jYWxsKGkpLG8mJm8oaSl9KSxyfHwocj0hMCx0KCkpLCFlJiZcInVuZGVmaW5lZFwiIT10eXBlb2YgUHJvbWlzZSlyZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24oZSl7bz1lfSl9fSgpO0ZyPVwidW5kZWZpbmVkXCIhPXR5cGVvZiBTZXQmJmIoU2V0KT9TZXQ6ZnVuY3Rpb24oKXtmdW5jdGlvbiBlKCl7dGhpcy5zZXQ9T2JqZWN0LmNyZWF0ZShudWxsKX1yZXR1cm4gZS5wcm90b3R5cGUuaGFzPWZ1bmN0aW9uKGUpe3JldHVybiB2b2lkIDAhPT10aGlzLnNldFtlXX0sZS5wcm90b3R5cGUuYWRkPWZ1bmN0aW9uKGUpe3RoaXMuc2V0W2VdPTF9LGUucHJvdG90eXBlLmNsZWFyPWZ1bmN0aW9uKCl7dGhpcy5zZXQ9T2JqZWN0LmNyZWF0ZShudWxsKX0sZX0oKTt2YXIgY2ksbGk9e29wdGlvbk1lcmdlU3RyYXRlZ2llczpPYmplY3QuY3JlYXRlKG51bGwpLHNpbGVudDohMSxkZXZ0b29sczohMSxlcnJvckhhbmRsZXI6bnVsbCxpZ25vcmVkRWxlbWVudHM6bnVsbCxrZXlDb2RlczpPYmplY3QuY3JlYXRlKG51bGwpLGlzUmVzZXJ2ZWRUYWc6WnIsaXNVbmtub3duRWxlbWVudDpacixnZXRUYWdOYW1lc3BhY2U6cCxtdXN0VXNlUHJvcDpacixfYXNzZXRUeXBlczpbXCJjb21wb25lbnRcIixcImRpcmVjdGl2ZVwiLFwiZmlsdGVyXCJdLF9saWZlY3ljbGVIb29rczpbXCJiZWZvcmVDcmVhdGVcIixcImNyZWF0ZWRcIixcImJlZm9yZU1vdW50XCIsXCJtb3VudGVkXCIsXCJiZWZvcmVVcGRhdGVcIixcInVwZGF0ZWRcIixcImJlZm9yZURlc3Ryb3lcIixcImRlc3Ryb3llZFwiLFwiYWN0aXZhdGVkXCIsXCJkZWFjdGl2YXRlZFwiXSxfbWF4VXBkYXRlQ291bnQ6MTAwfSx1aT1wLGZpPTAsZGk9ZnVuY3Rpb24oKXt0aGlzLmlkPWZpKyssdGhpcy5zdWJzPVtdfTtkaS5wcm90b3R5cGUuYWRkU3ViPWZ1bmN0aW9uKGUpe3RoaXMuc3Vicy5wdXNoKGUpfSxkaS5wcm90b3R5cGUucmVtb3ZlU3ViPWZ1bmN0aW9uKGUpe3IodGhpcy5zdWJzLGUpfSxkaS5wcm90b3R5cGUuZGVwZW5kPWZ1bmN0aW9uKCl7ZGkudGFyZ2V0JiZkaS50YXJnZXQuYWRkRGVwKHRoaXMpfSxkaS5wcm90b3R5cGUubm90aWZ5PWZ1bmN0aW9uKCl7Zm9yKHZhciBlPXRoaXMuc3Vicy5zbGljZSgpLHQ9MCxuPWUubGVuZ3RoO3Q8bjt0KyspZVt0XS51cGRhdGUoKX0sZGkudGFyZ2V0PW51bGw7dmFyIHBpPVtdLHZpPUFycmF5LnByb3RvdHlwZSxoaT1PYmplY3QuY3JlYXRlKHZpKTtbXCJwdXNoXCIsXCJwb3BcIixcInNoaWZ0XCIsXCJ1bnNoaWZ0XCIsXCJzcGxpY2VcIixcInNvcnRcIixcInJldmVyc2VcIl0uZm9yRWFjaChmdW5jdGlvbihlKXt2YXIgdD12aVtlXTt5KGhpLGUsZnVuY3Rpb24oKXtmb3IodmFyIG49YXJndW1lbnRzLHI9YXJndW1lbnRzLmxlbmd0aCxpPW5ldyBBcnJheShyKTtyLS07KWlbcl09bltyXTt2YXIgbyxhPXQuYXBwbHkodGhpcyxpKSxzPXRoaXMuX19vYl9fO3N3aXRjaChlKXtjYXNlXCJwdXNoXCI6bz1pO2JyZWFrO2Nhc2VcInVuc2hpZnRcIjpvPWk7YnJlYWs7Y2FzZVwic3BsaWNlXCI6bz1pLnNsaWNlKDIpfXJldHVybiBvJiZzLm9ic2VydmVBcnJheShvKSxzLmRlcC5ub3RpZnkoKSxhfSl9KTt2YXIgbWk9T2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoaGkpLGdpPXtzaG91bGRDb252ZXJ0OiEwLGlzU2V0dGluZ1Byb3BzOiExfSx5aT1mdW5jdGlvbihlKXtpZih0aGlzLnZhbHVlPWUsdGhpcy5kZXA9bmV3IGRpLHRoaXMudm1Db3VudD0wLHkoZSxcIl9fb2JfX1wiLHRoaXMpLEFycmF5LmlzQXJyYXkoZSkpe3ZhciB0PVlyP3g6Qzt0KGUsaGksbWkpLHRoaXMub2JzZXJ2ZUFycmF5KGUpfWVsc2UgdGhpcy53YWxrKGUpfTt5aS5wcm90b3R5cGUud2Fsaz1mdW5jdGlvbihlKXtmb3IodmFyIHQ9T2JqZWN0LmtleXMoZSksbj0wO248dC5sZW5ndGg7bisrKUEoZSx0W25dLGVbdFtuXV0pfSx5aS5wcm90b3R5cGUub2JzZXJ2ZUFycmF5PWZ1bmN0aW9uKGUpe2Zvcih2YXIgdD0wLG49ZS5sZW5ndGg7dDxuO3QrKylrKGVbdF0pfTt2YXIgX2k9bGkub3B0aW9uTWVyZ2VTdHJhdGVnaWVzO19pLmRhdGE9ZnVuY3Rpb24oZSx0LG4pe3JldHVybiBuP2V8fHQ/ZnVuY3Rpb24oKXt2YXIgcj1cImZ1bmN0aW9uXCI9PXR5cGVvZiB0P3QuY2FsbChuKTp0LGk9XCJmdW5jdGlvblwiPT10eXBlb2YgZT9lLmNhbGwobik6dm9pZCAwO3JldHVybiByP2oocixpKTppfTp2b2lkIDA6dD9cImZ1bmN0aW9uXCIhPXR5cGVvZiB0P2U6ZT9mdW5jdGlvbigpe3JldHVybiBqKHQuY2FsbCh0aGlzKSxlLmNhbGwodGhpcykpfTp0OmV9LGxpLl9saWZlY3ljbGVIb29rcy5mb3JFYWNoKGZ1bmN0aW9uKGUpe19pW2VdPUV9KSxsaS5fYXNzZXRUeXBlcy5mb3JFYWNoKGZ1bmN0aW9uKGUpe19pW2UrXCJzXCJdPU59KSxfaS53YXRjaD1mdW5jdGlvbihlLHQpe2lmKCF0KXJldHVybiBlO2lmKCFlKXJldHVybiB0O3ZhciBuPXt9O2wobixlKTtmb3IodmFyIHIgaW4gdCl7dmFyIGk9bltyXSxvPXRbcl07aSYmIUFycmF5LmlzQXJyYXkoaSkmJihpPVtpXSksbltyXT1pP2kuY29uY2F0KG8pOltvXX1yZXR1cm4gbn0sX2kucHJvcHM9X2kubWV0aG9kcz1faS5jb21wdXRlZD1mdW5jdGlvbihlLHQpe2lmKCF0KXJldHVybiBlO2lmKCFlKXJldHVybiB0O3ZhciBuPU9iamVjdC5jcmVhdGUobnVsbCk7cmV0dXJuIGwobixlKSxsKG4sdCksbn07dmFyIGJpPWZ1bmN0aW9uKGUsdCl7cmV0dXJuIHZvaWQgMD09PXQ/ZTp0fSwkaT1PYmplY3QuZnJlZXplKHtkZWZpbmVSZWFjdGl2ZTpBLF90b1N0cmluZzplLHRvTnVtYmVyOnQsbWFrZU1hcDpuLGlzQnVpbHRJblRhZzpCcixyZW1vdmU6cixoYXNPd246aSxpc1ByaW1pdGl2ZTpvLGNhY2hlZDphLGNhbWVsaXplOlZyLGNhcGl0YWxpemU6enIsaHlwaGVuYXRlOktyLGJpbmQ6cyx0b0FycmF5OmMsZXh0ZW5kOmwsaXNPYmplY3Q6dSxpc1BsYWluT2JqZWN0OmYsdG9PYmplY3Q6ZCxub29wOnAsbm86WnIsZ2VuU3RhdGljS2V5czp2LGxvb3NlRXF1YWw6aCxsb29zZUluZGV4T2Y6bSxpc1Jlc2VydmVkOmcsZGVmOnkscGFyc2VQYXRoOl8saGFzUHJvdG86WXIsaW5Ccm93c2VyOlFyLFVBOlhyLGlzSUU6ZWksaXNJRTk6dGksaXNFZGdlOm5pLGlzQW5kcm9pZDpyaSxpc0lPUzppaSxpc1NlcnZlclJlbmRlcmluZzpvaSxkZXZ0b29sczphaSxuZXh0VGljazpzaSxnZXQgX1NldCgpe3JldHVybiBGcn0sbWVyZ2VPcHRpb25zOk0scmVzb2x2ZUFzc2V0OlAsd2Fybjp1aSxmb3JtYXRDb21wb25lbnROYW1lOmNpLHZhbGlkYXRlUHJvcDpSfSksd2k9W10seGk9e30sQ2k9ITEsa2k9ITEsQWk9MCxPaT0wLFNpPWZ1bmN0aW9uKGUsdCxuLHIpe3ZvaWQgMD09PXImJihyPXt9KSx0aGlzLnZtPWUsZS5fd2F0Y2hlcnMucHVzaCh0aGlzKSx0aGlzLmRlZXA9ISFyLmRlZXAsdGhpcy51c2VyPSEhci51c2VyLHRoaXMubGF6eT0hIXIubGF6eSx0aGlzLnN5bmM9ISFyLnN5bmMsdGhpcy5leHByZXNzaW9uPXQudG9TdHJpbmcoKSx0aGlzLmNiPW4sdGhpcy5pZD0rK09pLHRoaXMuYWN0aXZlPSEwLHRoaXMuZGlydHk9dGhpcy5sYXp5LHRoaXMuZGVwcz1bXSx0aGlzLm5ld0RlcHM9W10sdGhpcy5kZXBJZHM9bmV3IEZyLHRoaXMubmV3RGVwSWRzPW5ldyBGcixcImZ1bmN0aW9uXCI9PXR5cGVvZiB0P3RoaXMuZ2V0dGVyPXQ6KHRoaXMuZ2V0dGVyPV8odCksdGhpcy5nZXR0ZXJ8fCh0aGlzLmdldHRlcj1mdW5jdGlvbigpe30pKSx0aGlzLnZhbHVlPXRoaXMubGF6eT92b2lkIDA6dGhpcy5nZXQoKX07U2kucHJvdG90eXBlLmdldD1mdW5jdGlvbigpeyQodGhpcyk7dmFyIGU9dGhpcy5nZXR0ZXIuY2FsbCh0aGlzLnZtLHRoaXMudm0pO3JldHVybiB0aGlzLmRlZXAmJnooZSksdygpLHRoaXMuY2xlYW51cERlcHMoKSxlfSxTaS5wcm90b3R5cGUuYWRkRGVwPWZ1bmN0aW9uKGUpe3ZhciB0PWUuaWQ7dGhpcy5uZXdEZXBJZHMuaGFzKHQpfHwodGhpcy5uZXdEZXBJZHMuYWRkKHQpLHRoaXMubmV3RGVwcy5wdXNoKGUpLHRoaXMuZGVwSWRzLmhhcyh0KXx8ZS5hZGRTdWIodGhpcykpfSxTaS5wcm90b3R5cGUuY2xlYW51cERlcHM9ZnVuY3Rpb24oKXtmb3IodmFyIGU9dGhpcyx0PXRoaXMuZGVwcy5sZW5ndGg7dC0tOyl7dmFyIG49ZS5kZXBzW3RdO2UubmV3RGVwSWRzLmhhcyhuLmlkKXx8bi5yZW1vdmVTdWIoZSl9dmFyIHI9dGhpcy5kZXBJZHM7dGhpcy5kZXBJZHM9dGhpcy5uZXdEZXBJZHMsdGhpcy5uZXdEZXBJZHM9cix0aGlzLm5ld0RlcElkcy5jbGVhcigpLHI9dGhpcy5kZXBzLHRoaXMuZGVwcz10aGlzLm5ld0RlcHMsdGhpcy5uZXdEZXBzPXIsdGhpcy5uZXdEZXBzLmxlbmd0aD0wfSxTaS5wcm90b3R5cGUudXBkYXRlPWZ1bmN0aW9uKCl7dGhpcy5sYXp5P3RoaXMuZGlydHk9ITA6dGhpcy5zeW5jP3RoaXMucnVuKCk6Vih0aGlzKX0sU2kucHJvdG90eXBlLnJ1bj1mdW5jdGlvbigpe2lmKHRoaXMuYWN0aXZlKXt2YXIgZT10aGlzLmdldCgpO2lmKGUhPT10aGlzLnZhbHVlfHx1KGUpfHx0aGlzLmRlZXApe3ZhciB0PXRoaXMudmFsdWU7aWYodGhpcy52YWx1ZT1lLHRoaXMudXNlcil0cnl7dGhpcy5jYi5jYWxsKHRoaXMudm0sZSx0KX1jYXRjaChlKXtpZighbGkuZXJyb3JIYW5kbGVyKXRocm93IGU7bGkuZXJyb3JIYW5kbGVyLmNhbGwobnVsbCxlLHRoaXMudm0pfWVsc2UgdGhpcy5jYi5jYWxsKHRoaXMudm0sZSx0KX19fSxTaS5wcm90b3R5cGUuZXZhbHVhdGU9ZnVuY3Rpb24oKXt0aGlzLnZhbHVlPXRoaXMuZ2V0KCksdGhpcy5kaXJ0eT0hMX0sU2kucHJvdG90eXBlLmRlcGVuZD1mdW5jdGlvbigpe2Zvcih2YXIgZT10aGlzLHQ9dGhpcy5kZXBzLmxlbmd0aDt0LS07KWUuZGVwc1t0XS5kZXBlbmQoKX0sU2kucHJvdG90eXBlLnRlYXJkb3duPWZ1bmN0aW9uKCl7dmFyIGU9dGhpcztpZih0aGlzLmFjdGl2ZSl7dGhpcy52bS5faXNCZWluZ0Rlc3Ryb3llZHx8dGhpcy52bS5fdkZvclJlbW92aW5nfHxyKHRoaXMudm0uX3dhdGNoZXJzLHRoaXMpO2Zvcih2YXIgdD10aGlzLmRlcHMubGVuZ3RoO3QtLTspZS5kZXBzW3RdLnJlbW92ZVN1YihlKTt0aGlzLmFjdGl2ZT0hMX19O3ZhciBUaT1uZXcgRnIsamk9e2VudW1lcmFibGU6ITAsY29uZmlndXJhYmxlOiEwLGdldDpwLHNldDpwfSxFaT1mdW5jdGlvbihlLHQsbixyLGksbyxhLHMpe3RoaXMudGFnPWUsdGhpcy5kYXRhPXQsdGhpcy5jaGlsZHJlbj1uLHRoaXMudGV4dD1yLHRoaXMuZWxtPWksdGhpcy5ucz1vLHRoaXMuY29udGV4dD1hLHRoaXMuZnVuY3Rpb25hbENvbnRleHQ9dm9pZCAwLHRoaXMua2V5PXQmJnQua2V5LHRoaXMuY29tcG9uZW50T3B0aW9ucz1zLHRoaXMuY2hpbGQ9dm9pZCAwLHRoaXMucGFyZW50PXZvaWQgMCx0aGlzLnJhdz0hMSx0aGlzLmlzU3RhdGljPSExLHRoaXMuaXNSb290SW5zZXJ0PSEwLHRoaXMuaXNDb21tZW50PSExLHRoaXMuaXNDbG9uZWQ9ITEsdGhpcy5pc09uY2U9ITF9LE5pPWZ1bmN0aW9uKCl7dmFyIGU9bmV3IEVpO3JldHVybiBlLnRleHQ9XCJcIixlLmlzQ29tbWVudD0hMCxlfSxMaT1udWxsLERpPXtpbml0OnllLHByZXBhdGNoOl9lLGluc2VydDpiZSxkZXN0cm95OiRlfSxNaT1PYmplY3Qua2V5cyhEaSksUGk9MDtEZShSZSksZWUoUmUpLExlKFJlKSxwZShSZSksamUoUmUpO3ZhciBSaT1bU3RyaW5nLFJlZ0V4cF0sSWk9e25hbWU6XCJrZWVwLWFsaXZlXCIsYWJzdHJhY3Q6ITAscHJvcHM6e2luY2x1ZGU6UmksZXhjbHVkZTpSaX0sY3JlYXRlZDpmdW5jdGlvbigpe3RoaXMuY2FjaGU9T2JqZWN0LmNyZWF0ZShudWxsKX0scmVuZGVyOmZ1bmN0aW9uKCl7dmFyIGU9ZmUodGhpcy4kc2xvdHMuZGVmYXVsdCk7aWYoZSYmZS5jb21wb25lbnRPcHRpb25zKXt2YXIgdD1lLmNvbXBvbmVudE9wdGlvbnMsbj10LkN0b3Iub3B0aW9ucy5uYW1lfHx0LnRhZztpZihuJiYodGhpcy5pbmNsdWRlJiYhSGUodGhpcy5pbmNsdWRlLG4pfHx0aGlzLmV4Y2x1ZGUmJkhlKHRoaXMuZXhjbHVkZSxuKSkpcmV0dXJuIGU7dmFyIHI9bnVsbD09ZS5rZXk/dC5DdG9yLmNpZCsodC50YWc/XCI6OlwiK3QudGFnOlwiXCIpOmUua2V5O3RoaXMuY2FjaGVbcl0/ZS5jaGlsZD10aGlzLmNhY2hlW3JdLmNoaWxkOnRoaXMuY2FjaGVbcl09ZSxlLmRhdGEua2VlcEFsaXZlPSEwfXJldHVybiBlfSxkZXN0cm95ZWQ6ZnVuY3Rpb24oKXt2YXIgZT10aGlzO2Zvcih2YXIgdCBpbiB0aGlzLmNhY2hlKXt2YXIgbj1lLmNhY2hlW3RdO3ZlKG4uY2hpbGQsXCJkZWFjdGl2YXRlZFwiKSxuLmNoaWxkLiRkZXN0cm95KCl9fX0sRmk9e0tlZXBBbGl2ZTpJaX07VmUoUmUpLE9iamVjdC5kZWZpbmVQcm9wZXJ0eShSZS5wcm90b3R5cGUsXCIkaXNTZXJ2ZXJcIix7Z2V0Om9pfSksUmUudmVyc2lvbj1cIjIuMS4wXCI7dmFyIEJpLFVpPWZ1bmN0aW9uKGUsdCl7cmV0dXJuXCJ2YWx1ZVwiPT09dCYmKFwiaW5wdXRcIj09PWV8fFwidGV4dGFyZWFcIj09PWV8fFwib3B0aW9uXCI9PT1lKXx8XCJzZWxlY3RlZFwiPT09dCYmXCJvcHRpb25cIj09PWV8fFwiY2hlY2tlZFwiPT09dCYmXCJpbnB1dFwiPT09ZXx8XCJtdXRlZFwiPT09dCYmXCJ2aWRlb1wiPT09ZX0sSGk9bihcImNvbnRlbnRlZGl0YWJsZSxkcmFnZ2FibGUsc3BlbGxjaGVja1wiKSxWaT1uKFwiYWxsb3dmdWxsc2NyZWVuLGFzeW5jLGF1dG9mb2N1cyxhdXRvcGxheSxjaGVja2VkLGNvbXBhY3QsY29udHJvbHMsZGVjbGFyZSxkZWZhdWx0LGRlZmF1bHRjaGVja2VkLGRlZmF1bHRtdXRlZCxkZWZhdWx0c2VsZWN0ZWQsZGVmZXIsZGlzYWJsZWQsZW5hYmxlZCxmb3Jtbm92YWxpZGF0ZSxoaWRkZW4saW5kZXRlcm1pbmF0ZSxpbmVydCxpc21hcCxpdGVtc2NvcGUsbG9vcCxtdWx0aXBsZSxtdXRlZCxub2hyZWYsbm9yZXNpemUsbm9zaGFkZSxub3ZhbGlkYXRlLG5vd3JhcCxvcGVuLHBhdXNlb25leGl0LHJlYWRvbmx5LHJlcXVpcmVkLHJldmVyc2VkLHNjb3BlZCxzZWFtbGVzcyxzZWxlY3RlZCxzb3J0YWJsZSx0cmFuc2xhdGUsdHJ1ZXNwZWVkLHR5cGVtdXN0bWF0Y2gsdmlzaWJsZVwiKSx6aT1cImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIixKaT1mdW5jdGlvbihlKXtyZXR1cm5cIjpcIj09PWUuY2hhckF0KDUpJiZcInhsaW5rXCI9PT1lLnNsaWNlKDAsNSl9LEtpPWZ1bmN0aW9uKGUpe3JldHVybiBKaShlKT9lLnNsaWNlKDYsZS5sZW5ndGgpOlwiXCJ9LHFpPWZ1bmN0aW9uKGUpe3JldHVybiBudWxsPT1lfHxlPT09ITF9LFdpPXtzdmc6XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLG1hdGg6XCJodHRwOi8vd3d3LnczLm9yZy8xOTk4L01hdGgvTWF0aE1MXCIseGh0bWw6XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hodG1sXCJ9LFppPW4oXCJodG1sLGJvZHksYmFzZSxoZWFkLGxpbmssbWV0YSxzdHlsZSx0aXRsZSxhZGRyZXNzLGFydGljbGUsYXNpZGUsZm9vdGVyLGhlYWRlcixoMSxoMixoMyxoNCxoNSxoNixoZ3JvdXAsbmF2LHNlY3Rpb24sZGl2LGRkLGRsLGR0LGZpZ2NhcHRpb24sZmlndXJlLGhyLGltZyxsaSxtYWluLG9sLHAscHJlLHVsLGEsYixhYmJyLGJkaSxiZG8sYnIsY2l0ZSxjb2RlLGRhdGEsZGZuLGVtLGksa2JkLG1hcmsscSxycCxydCxydGMscnVieSxzLHNhbXAsc21hbGwsc3BhbixzdHJvbmcsc3ViLHN1cCx0aW1lLHUsdmFyLHdicixhcmVhLGF1ZGlvLG1hcCx0cmFjayx2aWRlbyxlbWJlZCxvYmplY3QscGFyYW0sc291cmNlLGNhbnZhcyxzY3JpcHQsbm9zY3JpcHQsZGVsLGlucyxjYXB0aW9uLGNvbCxjb2xncm91cCx0YWJsZSx0aGVhZCx0Ym9keSx0ZCx0aCx0cixidXR0b24sZGF0YWxpc3QsZmllbGRzZXQsZm9ybSxpbnB1dCxsYWJlbCxsZWdlbmQsbWV0ZXIsb3B0Z3JvdXAsb3B0aW9uLG91dHB1dCxwcm9ncmVzcyxzZWxlY3QsdGV4dGFyZWEsZGV0YWlscyxkaWFsb2csbWVudSxtZW51aXRlbSxzdW1tYXJ5LGNvbnRlbnQsZWxlbWVudCxzaGFkb3csdGVtcGxhdGVcIiksR2k9bihcImFyZWEsYmFzZSxicixjb2wsZW1iZWQsZnJhbWUsaHIsaW1nLGlucHV0LGlzaW5kZXgsa2V5Z2VuLGxpbmssbWV0YSxwYXJhbSxzb3VyY2UsdHJhY2ssd2JyXCIsITApLFlpPW4oXCJjb2xncm91cCxkZCxkdCxsaSxvcHRpb25zLHAsdGQsdGZvb3QsdGgsdGhlYWQsdHIsc291cmNlXCIsITApLFFpPW4oXCJhZGRyZXNzLGFydGljbGUsYXNpZGUsYmFzZSxibG9ja3F1b3RlLGJvZHksY2FwdGlvbixjb2wsY29sZ3JvdXAsZGQsZGV0YWlscyxkaWFsb2csZGl2LGRsLGR0LGZpZWxkc2V0LGZpZ2NhcHRpb24sZmlndXJlLGZvb3Rlcixmb3JtLGgxLGgyLGgzLGg0LGg1LGg2LGhlYWQsaGVhZGVyLGhncm91cCxocixodG1sLGxlZ2VuZCxsaSxtZW51aXRlbSxtZXRhLG9wdGdyb3VwLG9wdGlvbixwYXJhbSxycCxydCxzb3VyY2Usc3R5bGUsc3VtbWFyeSx0Ym9keSx0ZCx0Zm9vdCx0aCx0aGVhZCx0aXRsZSx0cix0cmFja1wiLCEwKSxYaT1uKFwic3ZnLGFuaW1hdGUsY2lyY2xlLGNsaXBwYXRoLGN1cnNvcixkZWZzLGRlc2MsZWxsaXBzZSxmaWx0ZXIsZm9udCxmb250LWZhY2UsZyxnbHlwaCxpbWFnZSxsaW5lLG1hcmtlcixtYXNrLG1pc3NpbmctZ2x5cGgscGF0aCxwYXR0ZXJuLHBvbHlnb24scG9seWxpbmUscmVjdCxzd2l0Y2gsc3ltYm9sLHRleHQsdGV4dHBhdGgsdHNwYW4sdXNlLHZpZXdcIiwhMCksZW89ZnVuY3Rpb24oZSl7cmV0dXJuXCJwcmVcIj09PWV9LHRvPWZ1bmN0aW9uKGUpe3JldHVybiBaaShlKXx8WGkoZSl9LG5vPU9iamVjdC5jcmVhdGUobnVsbCkscm89T2JqZWN0LmZyZWV6ZSh7Y3JlYXRlRWxlbWVudDpRZSxjcmVhdGVFbGVtZW50TlM6WGUsY3JlYXRlVGV4dE5vZGU6ZXQsY3JlYXRlQ29tbWVudDp0dCxpbnNlcnRCZWZvcmU6bnQscmVtb3ZlQ2hpbGQ6cnQsYXBwZW5kQ2hpbGQ6aXQscGFyZW50Tm9kZTpvdCxuZXh0U2libGluZzphdCx0YWdOYW1lOnN0LHNldFRleHRDb250ZW50OmN0LGNoaWxkTm9kZXM6bHQsc2V0QXR0cmlidXRlOnV0fSksaW89e2NyZWF0ZTpmdW5jdGlvbihlLHQpe2Z0KHQpfSx1cGRhdGU6ZnVuY3Rpb24oZSx0KXtlLmRhdGEucmVmIT09dC5kYXRhLnJlZiYmKGZ0KGUsITApLGZ0KHQpKX0sZGVzdHJveTpmdW5jdGlvbihlKXtmdChlLCEwKX19LG9vPW5ldyBFaShcIlwiLHt9LFtdKSxhbz1bXCJjcmVhdGVcIixcInVwZGF0ZVwiLFwicmVtb3ZlXCIsXCJkZXN0cm95XCJdLHNvPXtjcmVhdGU6Z3QsdXBkYXRlOmd0LGRlc3Ryb3k6ZnVuY3Rpb24oZSl7Z3QoZSxvbyl9fSxjbz1PYmplY3QuY3JlYXRlKG51bGwpLGxvPVtpbyxzb10sdW89e2NyZWF0ZTokdCx1cGRhdGU6JHR9LGZvPXtjcmVhdGU6eHQsdXBkYXRlOnh0fSxwbz17Y3JlYXRlOkN0LHVwZGF0ZTpDdH0sdm89e2NyZWF0ZTprdCx1cGRhdGU6a3R9LGhvPWEoZnVuY3Rpb24oZSl7dmFyIHQ9e30sbj1lLmluZGV4T2YoXCJiYWNrZ3JvdW5kXCIpPj0wLHI9bj8vOyg/IVteKF0qXFwpKS9nOlwiO1wiLGk9bj8vOiguKykvOlwiOlwiO3JldHVybiBlLnNwbGl0KHIpLmZvckVhY2goZnVuY3Rpb24oZSl7aWYoZSl7dmFyIG49ZS5zcGxpdChpKTtuLmxlbmd0aD4xJiYodFtuWzBdLnRyaW0oKV09blsxXS50cmltKCkpfX0pLHR9KSxtbz0vXi0tLyxnbz1mdW5jdGlvbihlLHQsbil7bW8udGVzdCh0KT9lLnN0eWxlLnNldFByb3BlcnR5KHQsbik6ZS5zdHlsZVtfbyh0KV09bn0seW89W1wiV2Via2l0XCIsXCJNb3pcIixcIm1zXCJdLF9vPWEoZnVuY3Rpb24oZSl7aWYoQmk9Qml8fGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksZT1WcihlKSxcImZpbHRlclwiIT09ZSYmZSBpbiBCaS5zdHlsZSlyZXR1cm4gZTtmb3IodmFyIHQ9ZS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKStlLnNsaWNlKDEpLG49MDtuPHlvLmxlbmd0aDtuKyspe3ZhciByPXlvW25dK3Q7aWYociBpbiBCaS5zdHlsZSlyZXR1cm4gcn19KSxibz17Y3JlYXRlOlR0LHVwZGF0ZTpUdH0sJG89UXImJiF0aSx3bz1cInRyYW5zaXRpb25cIix4bz1cImFuaW1hdGlvblwiLENvPVwidHJhbnNpdGlvblwiLGtvPVwidHJhbnNpdGlvbmVuZFwiLEFvPVwiYW5pbWF0aW9uXCIsT289XCJhbmltYXRpb25lbmRcIjskbyYmKHZvaWQgMD09PXdpbmRvdy5vbnRyYW5zaXRpb25lbmQmJnZvaWQgMCE9PXdpbmRvdy5vbndlYmtpdHRyYW5zaXRpb25lbmQmJihDbz1cIldlYmtpdFRyYW5zaXRpb25cIixrbz1cIndlYmtpdFRyYW5zaXRpb25FbmRcIiksdm9pZCAwPT09d2luZG93Lm9uYW5pbWF0aW9uZW5kJiZ2b2lkIDAhPT13aW5kb3cub253ZWJraXRhbmltYXRpb25lbmQmJihBbz1cIldlYmtpdEFuaW1hdGlvblwiLE9vPVwid2Via2l0QW5pbWF0aW9uRW5kXCIpKTt2YXIgU289UXImJndpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWV8fHNldFRpbWVvdXQsVG89L1xcYih0cmFuc2Zvcm18YWxsKSgsfCQpLyxqbz1hKGZ1bmN0aW9uKGUpe3JldHVybntlbnRlckNsYXNzOmUrXCItZW50ZXJcIixsZWF2ZUNsYXNzOmUrXCItbGVhdmVcIixhcHBlYXJDbGFzczplK1wiLWVudGVyXCIsZW50ZXJBY3RpdmVDbGFzczplK1wiLWVudGVyLWFjdGl2ZVwiLGxlYXZlQWN0aXZlQ2xhc3M6ZStcIi1sZWF2ZS1hY3RpdmVcIixhcHBlYXJBY3RpdmVDbGFzczplK1wiLWVudGVyLWFjdGl2ZVwifX0pLEVvPVFyP3tjcmVhdGU6ZnVuY3Rpb24oZSx0KXt0LmRhdGEuc2hvd3x8RnQodCl9LHJlbW92ZTpmdW5jdGlvbihlLHQpe2UuZGF0YS5zaG93P3QoKTpCdChlLHQpfX06e30sTm89W3VvLGZvLHBvLHZvLGJvLEVvXSxMbz1Oby5jb25jYXQobG8pLERvPW10KHtub2RlT3BzOnJvLG1vZHVsZXM6TG99KTt0aSYmZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInNlbGVjdGlvbmNoYW5nZVwiLGZ1bmN0aW9uKCl7dmFyIGU9ZG9jdW1lbnQuYWN0aXZlRWxlbWVudDtlJiZlLnZtb2RlbCYmV3QoZSxcImlucHV0XCIpfSk7dmFyIE1vPXtpbnNlcnRlZDpmdW5jdGlvbihlLHQsbil7aWYoXCJzZWxlY3RcIj09PW4udGFnKXt2YXIgcj1mdW5jdGlvbigpe1Z0KGUsdCxuLmNvbnRleHQpfTtyKCksKGVpfHxuaSkmJnNldFRpbWVvdXQociwwKX1lbHNlXCJ0ZXh0YXJlYVwiIT09bi50YWcmJlwidGV4dFwiIT09ZS50eXBlfHx0Lm1vZGlmaWVycy5sYXp5fHwocml8fChlLmFkZEV2ZW50TGlzdGVuZXIoXCJjb21wb3NpdGlvbnN0YXJ0XCIsS3QpLGUuYWRkRXZlbnRMaXN0ZW5lcihcImNvbXBvc2l0aW9uZW5kXCIscXQpKSx0aSYmKGUudm1vZGVsPSEwKSl9LGNvbXBvbmVudFVwZGF0ZWQ6ZnVuY3Rpb24oZSx0LG4pe2lmKFwic2VsZWN0XCI9PT1uLnRhZyl7VnQoZSx0LG4uY29udGV4dCk7dmFyIHI9ZS5tdWx0aXBsZT90LnZhbHVlLnNvbWUoZnVuY3Rpb24odCl7cmV0dXJuIHp0KHQsZS5vcHRpb25zKX0pOnQudmFsdWUhPT10Lm9sZFZhbHVlJiZ6dCh0LnZhbHVlLGUub3B0aW9ucyk7ciYmV3QoZSxcImNoYW5nZVwiKX19fSxQbz17YmluZDpmdW5jdGlvbihlLHQsbil7dmFyIHI9dC52YWx1ZTtuPVp0KG4pO3ZhciBpPW4uZGF0YSYmbi5kYXRhLnRyYW5zaXRpb247ciYmaSYmIXRpJiZGdChuKTt2YXIgbz1cIm5vbmVcIj09PWUuc3R5bGUuZGlzcGxheT9cIlwiOmUuc3R5bGUuZGlzcGxheTtlLnN0eWxlLmRpc3BsYXk9cj9vOlwibm9uZVwiLGUuX192T3JpZ2luYWxEaXNwbGF5PW99LHVwZGF0ZTpmdW5jdGlvbihlLHQsbil7dmFyIHI9dC52YWx1ZSxpPXQub2xkVmFsdWU7aWYociE9PWkpe249WnQobik7dmFyIG89bi5kYXRhJiZuLmRhdGEudHJhbnNpdGlvbjtvJiYhdGk/cj8oRnQobiksZS5zdHlsZS5kaXNwbGF5PWUuX192T3JpZ2luYWxEaXNwbGF5KTpCdChuLGZ1bmN0aW9uKCl7ZS5zdHlsZS5kaXNwbGF5PVwibm9uZVwifSk6ZS5zdHlsZS5kaXNwbGF5PXI/ZS5fX3ZPcmlnaW5hbERpc3BsYXk6XCJub25lXCJ9fX0sUm89e21vZGVsOk1vLHNob3c6UG99LElvPXtuYW1lOlN0cmluZyxhcHBlYXI6Qm9vbGVhbixjc3M6Qm9vbGVhbixtb2RlOlN0cmluZyx0eXBlOlN0cmluZyxlbnRlckNsYXNzOlN0cmluZyxsZWF2ZUNsYXNzOlN0cmluZyxlbnRlckFjdGl2ZUNsYXNzOlN0cmluZyxsZWF2ZUFjdGl2ZUNsYXNzOlN0cmluZyxhcHBlYXJDbGFzczpTdHJpbmcsYXBwZWFyQWN0aXZlQ2xhc3M6U3RyaW5nfSxGbz17bmFtZTpcInRyYW5zaXRpb25cIixwcm9wczpJbyxhYnN0cmFjdDohMCxcbnJlbmRlcjpmdW5jdGlvbihlKXt2YXIgdD10aGlzLG49dGhpcy4kc2xvdHMuZGVmYXVsdDtpZihuJiYobj1uLmZpbHRlcihmdW5jdGlvbihlKXtyZXR1cm4gZS50YWd9KSxuLmxlbmd0aCkpe3ZhciByPXRoaXMubW9kZSxpPW5bMF07aWYoWHQodGhpcy4kdm5vZGUpKXJldHVybiBpO3ZhciBvPUd0KGkpO2lmKCFvKXJldHVybiBpO2lmKHRoaXMuX2xlYXZpbmcpcmV0dXJuIFF0KGUsaSk7dmFyIGE9by5rZXk9bnVsbD09by5rZXl8fG8uaXNTdGF0aWM/XCJfX3ZcIisoby50YWcrdGhpcy5fdWlkKStcIl9fXCI6by5rZXkscz0oby5kYXRhfHwoby5kYXRhPXt9KSkudHJhbnNpdGlvbj1ZdCh0aGlzKSxjPXRoaXMuX3Zub2RlLHU9R3QoYyk7aWYoby5kYXRhLmRpcmVjdGl2ZXMmJm8uZGF0YS5kaXJlY3RpdmVzLnNvbWUoZnVuY3Rpb24oZSl7cmV0dXJuXCJzaG93XCI9PT1lLm5hbWV9KSYmKG8uZGF0YS5zaG93PSEwKSx1JiZ1LmRhdGEmJnUua2V5IT09YSl7dmFyIGY9dS5kYXRhLnRyYW5zaXRpb249bCh7fSxzKTtpZihcIm91dC1pblwiPT09cilyZXR1cm4gdGhpcy5fbGVhdmluZz0hMCxpZShmLFwiYWZ0ZXJMZWF2ZVwiLGZ1bmN0aW9uKCl7dC5fbGVhdmluZz0hMSx0LiRmb3JjZVVwZGF0ZSgpfSxhKSxRdChlLGkpO2lmKFwiaW4tb3V0XCI9PT1yKXt2YXIgZCxwPWZ1bmN0aW9uKCl7ZCgpfTtpZShzLFwiYWZ0ZXJFbnRlclwiLHAsYSksaWUocyxcImVudGVyQ2FuY2VsbGVkXCIscCxhKSxpZShmLFwiZGVsYXlMZWF2ZVwiLGZ1bmN0aW9uKGUpe2Q9ZX0sYSl9fXJldHVybiBpfX19LEJvPWwoe3RhZzpTdHJpbmcsbW92ZUNsYXNzOlN0cmluZ30sSW8pO2RlbGV0ZSBCby5tb2RlO3ZhciBVbz17cHJvcHM6Qm8scmVuZGVyOmZ1bmN0aW9uKGUpe2Zvcih2YXIgdD10aGlzLnRhZ3x8dGhpcy4kdm5vZGUuZGF0YS50YWd8fFwic3BhblwiLG49T2JqZWN0LmNyZWF0ZShudWxsKSxyPXRoaXMucHJldkNoaWxkcmVuPXRoaXMuY2hpbGRyZW4saT10aGlzLiRzbG90cy5kZWZhdWx0fHxbXSxvPXRoaXMuY2hpbGRyZW49W10sYT1ZdCh0aGlzKSxzPTA7czxpLmxlbmd0aDtzKyspe3ZhciBjPWlbc107Yy50YWcmJm51bGwhPWMua2V5JiYwIT09U3RyaW5nKGMua2V5KS5pbmRleE9mKFwiX192bGlzdFwiKSYmKG8ucHVzaChjKSxuW2Mua2V5XT1jLChjLmRhdGF8fChjLmRhdGE9e30pKS50cmFuc2l0aW9uPWEpfWlmKHIpe2Zvcih2YXIgbD1bXSx1PVtdLGY9MDtmPHIubGVuZ3RoO2YrKyl7dmFyIGQ9cltmXTtkLmRhdGEudHJhbnNpdGlvbj1hLGQuZGF0YS5wb3M9ZC5lbG0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksbltkLmtleV0/bC5wdXNoKGQpOnUucHVzaChkKX10aGlzLmtlcHQ9ZSh0LG51bGwsbCksdGhpcy5yZW1vdmVkPXV9cmV0dXJuIGUodCxudWxsLG8pfSxiZWZvcmVVcGRhdGU6ZnVuY3Rpb24oKXt0aGlzLl9fcGF0Y2hfXyh0aGlzLl92bm9kZSx0aGlzLmtlcHQsITEsITApLHRoaXMuX3Zub2RlPXRoaXMua2VwdH0sdXBkYXRlZDpmdW5jdGlvbigpe3ZhciBlPXRoaXMucHJldkNoaWxkcmVuLHQ9dGhpcy5tb3ZlQ2xhc3N8fCh0aGlzLm5hbWV8fFwidlwiKStcIi1tb3ZlXCI7aWYoZS5sZW5ndGgmJnRoaXMuaGFzTW92ZShlWzBdLmVsbSx0KSl7ZS5mb3JFYWNoKGVuKSxlLmZvckVhY2godG4pLGUuZm9yRWFjaChubik7ZG9jdW1lbnQuYm9keS5vZmZzZXRIZWlnaHQ7ZS5mb3JFYWNoKGZ1bmN0aW9uKGUpe2lmKGUuZGF0YS5tb3ZlZCl7dmFyIG49ZS5lbG0scj1uLnN0eWxlO0x0KG4sdCksci50cmFuc2Zvcm09ci5XZWJraXRUcmFuc2Zvcm09ci50cmFuc2l0aW9uRHVyYXRpb249XCJcIixuLmFkZEV2ZW50TGlzdGVuZXIoa28sbi5fbW92ZUNiPWZ1bmN0aW9uIGUocil7ciYmIS90cmFuc2Zvcm0kLy50ZXN0KHIucHJvcGVydHlOYW1lKXx8KG4ucmVtb3ZlRXZlbnRMaXN0ZW5lcihrbyxlKSxuLl9tb3ZlQ2I9bnVsbCxEdChuLHQpKX0pfX0pfX0sbWV0aG9kczp7aGFzTW92ZTpmdW5jdGlvbihlLHQpe2lmKCEkbylyZXR1cm4hMTtpZihudWxsIT10aGlzLl9oYXNNb3ZlKXJldHVybiB0aGlzLl9oYXNNb3ZlO0x0KGUsdCk7dmFyIG49UHQoZSk7cmV0dXJuIER0KGUsdCksdGhpcy5faGFzTW92ZT1uLmhhc1RyYW5zZm9ybX19fSxIbz17VHJhbnNpdGlvbjpGbyxUcmFuc2l0aW9uR3JvdXA6VW99O1JlLmNvbmZpZy5pc1Vua25vd25FbGVtZW50PUdlLFJlLmNvbmZpZy5pc1Jlc2VydmVkVGFnPXRvLFJlLmNvbmZpZy5nZXRUYWdOYW1lc3BhY2U9WmUsUmUuY29uZmlnLm11c3RVc2VQcm9wPVVpLGwoUmUub3B0aW9ucy5kaXJlY3RpdmVzLFJvKSxsKFJlLm9wdGlvbnMuY29tcG9uZW50cyxIbyksUmUucHJvdG90eXBlLl9fcGF0Y2hfXz1Rcj9EbzpwLFJlLnByb3RvdHlwZS4kbW91bnQ9ZnVuY3Rpb24oZSx0KXtyZXR1cm4gZT1lJiZRcj9ZZShlKTp2b2lkIDAsdGhpcy5fbW91bnQoZSx0KX0sc2V0VGltZW91dChmdW5jdGlvbigpe2xpLmRldnRvb2xzJiZhaSYmYWkuZW1pdChcImluaXRcIixSZSl9LDApO3ZhciBWbyx6bz0hIVFyJiZybihcIlxcblwiLFwiJiMxMDtcIiksSm89LyhbXlxcc1wiJzw+XFwvPV0rKS8sS289Lyg/Oj0pLyxxbz1bL1wiKFteXCJdKilcIisvLnNvdXJjZSwvJyhbXiddKiknKy8uc291cmNlLC8oW15cXHNcIic9PD5gXSspLy5zb3VyY2VdLFdvPW5ldyBSZWdFeHAoXCJeXFxcXHMqXCIrSm8uc291cmNlK1wiKD86XFxcXHMqKFwiK0tvLnNvdXJjZStcIilcXFxccyooPzpcIitxby5qb2luKFwifFwiKStcIikpP1wiKSxabz1cIlthLXpBLVpfXVtcXFxcd1xcXFwtXFxcXC5dKlwiLEdvPVwiKCg/OlwiK1pvK1wiXFxcXDopP1wiK1pvK1wiKVwiLFlvPW5ldyBSZWdFeHAoXCJePFwiK0dvKSxRbz0vXlxccyooXFwvPyk+LyxYbz1uZXcgUmVnRXhwKFwiXjxcXFxcL1wiK0dvK1wiW14+XSo+XCIpLGVhPS9ePCFET0NUWVBFIFtePl0rPi9pLHRhPS9ePCEtLS8sbmE9L148IVxcWy8scmE9ITE7XCJ4XCIucmVwbGFjZSgveCguKT8vZyxmdW5jdGlvbihlLHQpe3JhPVwiXCI9PT10fSk7dmFyIGlhLG9hLGFhLHNhLGNhLGxhLHVhLGZhLGRhLHBhLHZhLGhhLG1hLGdhLHlhLF9hLGJhLCRhLHdhLHhhLENhLGthLEFhLE9hLFNhPW4oXCJzY3JpcHQsc3R5bGVcIiwhMCksVGE9ZnVuY3Rpb24oZSl7cmV0dXJuXCJsYW5nXCI9PT1lLm5hbWUmJlwiaHRtbFwiIT09ZS52YWx1ZX0samE9ZnVuY3Rpb24oZSx0LG4pe3JldHVybiEhU2EoZSl8fCEhdCYmIShcInRlbXBsYXRlXCI9PT1lJiYxPT09bi5sZW5ndGgmJiFuWzBdLmF0dHJzLnNvbWUoVGEpKX0sRWE9e30sTmE9LyZsdDsvZyxMYT0vJmd0Oy9nLERhPS8mIzEwOy9nLE1hPS8mYW1wOy9nLFBhPS8mcXVvdDsvZyxSYT0vXFx7XFx7KCg/Oi58XFxuKSs/KVxcfVxcfS9nLElhPS9bLS4qKz9eJHt9KCl8W1xcXVxcL1xcXFxdL2csRmE9YShmdW5jdGlvbihlKXt2YXIgdD1lWzBdLnJlcGxhY2UoSWEsXCJcXFxcJCZcIiksbj1lWzFdLnJlcGxhY2UoSWEsXCJcXFxcJCZcIik7cmV0dXJuIG5ldyBSZWdFeHAodCtcIigoPzoufFxcXFxuKSs/KVwiK24sXCJnXCIpfSksQmE9L152LXxeQHxeOi8sVWE9LyguKj8pXFxzKyg/OmlufG9mKVxccysoLiopLyxIYT0vXFwoKFxce1tefV0qXFx9fFteLF0qKSwoW14sXSopKD86LChbXixdKikpP1xcKS8sVmE9L146fF52LWJpbmQ6Lyx6YT0vXkB8XnYtb246LyxKYT0vOiguKikkLyxLYT0vXFwuW14uXSsvZyxxYT1hKG9uKSxXYT0vXnhtbG5zOk5TXFxkKy8sWmE9L15OU1xcZCs6LyxHYT1hKEpuKSxZYT0vXlxccyooW1xcdyRfXSt8XFwoW14pXSo/XFwpKVxccyo9PnxeZnVuY3Rpb25cXHMqXFwoLyxRYT0vXlxccypbQS1aYS16XyRdW1xcdyRdKig/OlxcLltBLVphLXpfJF1bXFx3JF0qfFxcWycuKj8nXXxcXFtcIi4qP1wiXXxcXFtcXGQrXXxcXFtbQS1aYS16XyRdW1xcdyRdKl0pKlxccyokLyxYYT17ZXNjOjI3LHRhYjo5LGVudGVyOjEzLHNwYWNlOjMyLHVwOjM4LGxlZnQ6MzcscmlnaHQ6MzksZG93bjo0MCxkZWxldGU6WzgsNDZdfSxlcz17c3RvcDpcIiRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcIixwcmV2ZW50OlwiJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XCIsc2VsZjpcImlmKCRldmVudC50YXJnZXQgIT09ICRldmVudC5jdXJyZW50VGFyZ2V0KXJldHVybjtcIn0sdHM9L15tb3VzZXxecG9pbnRlcnxeKGNsaWNrfGRibGNsaWNrfGNvbnRleHRtZW51fHdoZWVsKSQvLG5zPXtjdHJsOlwiaWYoISRldmVudC5jdHJsS2V5KXJldHVybjtcIixzaGlmdDpcImlmKCEkZXZlbnQuc2hpZnRLZXkpcmV0dXJuO1wiLGFsdDpcImlmKCEkZXZlbnQuYWx0S2V5KXJldHVybjtcIixtZXRhOlwiaWYoISRldmVudC5tZXRhS2V5KXJldHVybjtcIn0scnM9e2JpbmQ6dHIsY2xvYWs6cH0saXM9KG5ldyBSZWdFeHAoXCJcXFxcYlwiK1wiZG8saWYsZm9yLGxldCxuZXcsdHJ5LHZhcixjYXNlLGVsc2Usd2l0aCxhd2FpdCxicmVhayxjYXRjaCxjbGFzcyxjb25zdCxzdXBlcix0aHJvdyx3aGlsZSx5aWVsZCxkZWxldGUsZXhwb3J0LGltcG9ydCxyZXR1cm4sc3dpdGNoLGRlZmF1bHQsZXh0ZW5kcyxmaW5hbGx5LGNvbnRpbnVlLGRlYnVnZ2VyLGZ1bmN0aW9uLGFyZ3VtZW50c1wiLnNwbGl0KFwiLFwiKS5qb2luKFwiXFxcXGJ8XFxcXGJcIikrXCJcXFxcYlwiKSx7c3RhdGljS2V5czpbXCJzdGF0aWNDbGFzc1wiXSx0cmFuc2Zvcm1Ob2RlOndyLGdlbkRhdGE6eHJ9KSxvcz17c3RhdGljS2V5czpbXCJzdGF0aWNTdHlsZVwiXSx0cmFuc2Zvcm1Ob2RlOkNyLGdlbkRhdGE6a3J9LGFzPVtpcyxvc10sc3M9e21vZGVsOkFyLHRleHQ6TnIsaHRtbDpMcn0sY3M9T2JqZWN0LmNyZWF0ZShudWxsKSxscz17ZXhwZWN0SFRNTDohMCxtb2R1bGVzOmFzLHN0YXRpY0tleXM6dihhcyksZGlyZWN0aXZlczpzcyxpc1Jlc2VydmVkVGFnOnRvLGlzVW5hcnlUYWc6R2ksbXVzdFVzZVByb3A6VWksZ2V0VGFnTmFtZXNwYWNlOlplLGlzUHJlVGFnOmVvfSx1cz1hKGZ1bmN0aW9uKGUpe3ZhciB0PVllKGUpO3JldHVybiB0JiZ0LmlubmVySFRNTH0pLGZzPVJlLnByb3RvdHlwZS4kbW91bnQ7cmV0dXJuIFJlLnByb3RvdHlwZS4kbW91bnQ9ZnVuY3Rpb24oZSx0KXtpZihlPWUmJlllKGUpLGU9PT1kb2N1bWVudC5ib2R5fHxlPT09ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KXJldHVybiB0aGlzO3ZhciBuPXRoaXMuJG9wdGlvbnM7aWYoIW4ucmVuZGVyKXt2YXIgcj1uLnRlbXBsYXRlO2lmKHIpaWYoXCJzdHJpbmdcIj09dHlwZW9mIHIpXCIjXCI9PT1yLmNoYXJBdCgwKSYmKHI9dXMocikpO2Vsc2V7aWYoIXIubm9kZVR5cGUpcmV0dXJuIHRoaXM7cj1yLmlubmVySFRNTH1lbHNlIGUmJihyPVJyKGUpKTtpZihyKXt2YXIgaT1NcihyLHt3YXJuOnVpLHNob3VsZERlY29kZU5ld2xpbmVzOnpvLGRlbGltaXRlcnM6bi5kZWxpbWl0ZXJzfSx0aGlzKSxvPWkucmVuZGVyLGE9aS5zdGF0aWNSZW5kZXJGbnM7bi5yZW5kZXI9byxuLnN0YXRpY1JlbmRlckZucz1hfX1yZXR1cm4gZnMuY2FsbCh0aGlzLGUsdCl9LFJlLmNvbXBpbGU9TXIsUmV9KTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9FOi9UZXN0V29yay92dWUvfi92dWUvZGlzdC92dWUubWluLmpzIiwiLyoqXG4gKiB2dWUtcm91dGVyIHYyLjAuM1xuICogKGMpIDIwMTYgRXZhbiBZb3VcbiAqIEBsaWNlbnNlIE1JVFxuICovXG4oZnVuY3Rpb24gKGdsb2JhbCwgZmFjdG9yeSkge1xuICB0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgPyBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKSA6XG4gIHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCA/IGRlZmluZShmYWN0b3J5KSA6XG4gIChnbG9iYWwuVnVlUm91dGVyID0gZmFjdG9yeSgpKTtcbn0odGhpcywgKGZ1bmN0aW9uICgpIHsgJ3VzZSBzdHJpY3QnO1xuXG52YXIgVmlldyA9IHtcbiAgbmFtZTogJ3JvdXRlci12aWV3JyxcbiAgZnVuY3Rpb25hbDogdHJ1ZSxcbiAgcHJvcHM6IHtcbiAgICBuYW1lOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiAnZGVmYXVsdCdcbiAgICB9XG4gIH0sXG4gIHJlbmRlcjogZnVuY3Rpb24gcmVuZGVyIChoLCByZWYpIHtcbiAgICB2YXIgcHJvcHMgPSByZWYucHJvcHM7XG4gICAgdmFyIGNoaWxkcmVuID0gcmVmLmNoaWxkcmVuO1xuICAgIHZhciBwYXJlbnQgPSByZWYucGFyZW50O1xuICAgIHZhciBkYXRhID0gcmVmLmRhdGE7XG5cbiAgICBkYXRhLnJvdXRlclZpZXcgPSB0cnVlXG5cbiAgICB2YXIgcm91dGUgPSBwYXJlbnQuJHJvdXRlXG4gICAgdmFyIGNhY2hlID0gcGFyZW50Ll9yb3V0ZXJWaWV3Q2FjaGUgfHwgKHBhcmVudC5fcm91dGVyVmlld0NhY2hlID0ge30pXG4gICAgdmFyIGRlcHRoID0gMFxuICAgIHZhciBpbmFjdGl2ZSA9IGZhbHNlXG5cbiAgICB3aGlsZSAocGFyZW50KSB7XG4gICAgICBpZiAocGFyZW50LiR2bm9kZSAmJiBwYXJlbnQuJHZub2RlLmRhdGEucm91dGVyVmlldykge1xuICAgICAgICBkZXB0aCsrXG4gICAgICB9XG4gICAgICBpZiAocGFyZW50Ll9pbmFjdGl2ZSkge1xuICAgICAgICBpbmFjdGl2ZSA9IHRydWVcbiAgICAgIH1cbiAgICAgIHBhcmVudCA9IHBhcmVudC4kcGFyZW50XG4gICAgfVxuXG4gICAgZGF0YS5yb3V0ZXJWaWV3RGVwdGggPSBkZXB0aFxuICAgIHZhciBtYXRjaGVkID0gcm91dGUubWF0Y2hlZFtkZXB0aF1cbiAgICBpZiAoIW1hdGNoZWQpIHtcbiAgICAgIHJldHVybiBoKClcbiAgICB9XG5cbiAgICB2YXIgbmFtZSA9IHByb3BzLm5hbWVcbiAgICB2YXIgY29tcG9uZW50ID0gaW5hY3RpdmVcbiAgICAgID8gY2FjaGVbbmFtZV1cbiAgICAgIDogKGNhY2hlW25hbWVdID0gbWF0Y2hlZC5jb21wb25lbnRzW25hbWVdKVxuXG4gICAgaWYgKCFpbmFjdGl2ZSkge1xuICAgICAgdmFyIGhvb2tzID0gZGF0YS5ob29rIHx8IChkYXRhLmhvb2sgPSB7fSlcbiAgICAgIGhvb2tzLmluaXQgPSBmdW5jdGlvbiAodm5vZGUpIHtcbiAgICAgICAgbWF0Y2hlZC5pbnN0YW5jZXNbbmFtZV0gPSB2bm9kZS5jaGlsZFxuICAgICAgfVxuICAgICAgaG9va3MucHJlcGF0Y2ggPSBmdW5jdGlvbiAob2xkVm5vZGUsIHZub2RlKSB7XG4gICAgICAgIG1hdGNoZWQuaW5zdGFuY2VzW25hbWVdID0gdm5vZGUuY2hpbGRcbiAgICAgIH1cbiAgICAgIGhvb2tzLmRlc3Ryb3kgPSBmdW5jdGlvbiAodm5vZGUpIHtcbiAgICAgICAgaWYgKG1hdGNoZWQuaW5zdGFuY2VzW25hbWVdID09PSB2bm9kZS5jaGlsZCkge1xuICAgICAgICAgIG1hdGNoZWQuaW5zdGFuY2VzW25hbWVdID0gdW5kZWZpbmVkXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gaChjb21wb25lbnQsIGRhdGEsIGNoaWxkcmVuKVxuICB9XG59XG5cbi8qICAqL1xuXG5mdW5jdGlvbiByZXNvbHZlUGF0aCAoXG4gIHJlbGF0aXZlLFxuICBiYXNlLFxuICBhcHBlbmRcbikge1xuICBpZiAocmVsYXRpdmUuY2hhckF0KDApID09PSAnLycpIHtcbiAgICByZXR1cm4gcmVsYXRpdmVcbiAgfVxuXG4gIGlmIChyZWxhdGl2ZS5jaGFyQXQoMCkgPT09ICc/JyB8fCByZWxhdGl2ZS5jaGFyQXQoMCkgPT09ICcjJykge1xuICAgIHJldHVybiBiYXNlICsgcmVsYXRpdmVcbiAgfVxuXG4gIHZhciBzdGFjayA9IGJhc2Uuc3BsaXQoJy8nKVxuXG4gIC8vIHJlbW92ZSB0cmFpbGluZyBzZWdtZW50IGlmOlxuICAvLyAtIG5vdCBhcHBlbmRpbmdcbiAgLy8gLSBhcHBlbmRpbmcgdG8gdHJhaWxpbmcgc2xhc2ggKGxhc3Qgc2VnbWVudCBpcyBlbXB0eSlcbiAgaWYgKCFhcHBlbmQgfHwgIXN0YWNrW3N0YWNrLmxlbmd0aCAtIDFdKSB7XG4gICAgc3RhY2sucG9wKClcbiAgfVxuXG4gIC8vIHJlc29sdmUgcmVsYXRpdmUgcGF0aFxuICB2YXIgc2VnbWVudHMgPSByZWxhdGl2ZS5yZXBsYWNlKC9eXFwvLywgJycpLnNwbGl0KCcvJylcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzZWdtZW50cy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBzZWdtZW50ID0gc2VnbWVudHNbaV1cbiAgICBpZiAoc2VnbWVudCA9PT0gJy4nKSB7XG4gICAgICBjb250aW51ZVxuICAgIH0gZWxzZSBpZiAoc2VnbWVudCA9PT0gJy4uJykge1xuICAgICAgc3RhY2sucG9wKClcbiAgICB9IGVsc2Uge1xuICAgICAgc3RhY2sucHVzaChzZWdtZW50KVxuICAgIH1cbiAgfVxuXG4gIC8vIGVuc3VyZSBsZWFkaW5nIHNsYXNoXG4gIGlmIChzdGFja1swXSAhPT0gJycpIHtcbiAgICBzdGFjay51bnNoaWZ0KCcnKVxuICB9XG5cbiAgcmV0dXJuIHN0YWNrLmpvaW4oJy8nKVxufVxuXG5mdW5jdGlvbiBwYXJzZVBhdGggKHBhdGgpIHtcbiAgdmFyIGhhc2ggPSAnJ1xuICB2YXIgcXVlcnkgPSAnJ1xuXG4gIHZhciBoYXNoSW5kZXggPSBwYXRoLmluZGV4T2YoJyMnKVxuICBpZiAoaGFzaEluZGV4ID49IDApIHtcbiAgICBoYXNoID0gcGF0aC5zbGljZShoYXNoSW5kZXgpXG4gICAgcGF0aCA9IHBhdGguc2xpY2UoMCwgaGFzaEluZGV4KVxuICB9XG5cbiAgdmFyIHF1ZXJ5SW5kZXggPSBwYXRoLmluZGV4T2YoJz8nKVxuICBpZiAocXVlcnlJbmRleCA+PSAwKSB7XG4gICAgcXVlcnkgPSBwYXRoLnNsaWNlKHF1ZXJ5SW5kZXggKyAxKVxuICAgIHBhdGggPSBwYXRoLnNsaWNlKDAsIHF1ZXJ5SW5kZXgpXG4gIH1cblxuICByZXR1cm4ge1xuICAgIHBhdGg6IHBhdGgsXG4gICAgcXVlcnk6IHF1ZXJ5LFxuICAgIGhhc2g6IGhhc2hcbiAgfVxufVxuXG5mdW5jdGlvbiBjbGVhblBhdGggKHBhdGgpIHtcbiAgcmV0dXJuIHBhdGgucmVwbGFjZSgvXFwvXFwvL2csICcvJylcbn1cblxuLyogICovXG5cbmZ1bmN0aW9uIGFzc2VydCAoY29uZGl0aW9uLCBtZXNzYWdlKSB7XG4gIGlmICghY29uZGl0aW9uKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKChcIlt2dWUtcm91dGVyXSBcIiArIG1lc3NhZ2UpKVxuICB9XG59XG5cbmZ1bmN0aW9uIHdhcm4gKGNvbmRpdGlvbiwgbWVzc2FnZSkge1xuICBpZiAoIWNvbmRpdGlvbikge1xuICAgIHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJyAmJiBjb25zb2xlLndhcm4oKFwiW3Z1ZS1yb3V0ZXJdIFwiICsgbWVzc2FnZSkpXG4gIH1cbn1cblxuLyogICovXG5cbnZhciBlbmNvZGUgPSBlbmNvZGVVUklDb21wb25lbnRcbnZhciBkZWNvZGUgPSBkZWNvZGVVUklDb21wb25lbnRcblxuZnVuY3Rpb24gcmVzb2x2ZVF1ZXJ5IChcbiAgcXVlcnksXG4gIGV4dHJhUXVlcnlcbikge1xuICBpZiAoIGV4dHJhUXVlcnkgPT09IHZvaWQgMCApIGV4dHJhUXVlcnkgPSB7fTtcblxuICBpZiAocXVlcnkpIHtcbiAgICB2YXIgcGFyc2VkUXVlcnlcbiAgICB0cnkge1xuICAgICAgcGFyc2VkUXVlcnkgPSBwYXJzZVF1ZXJ5KHF1ZXJ5KVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHdhcm4oZmFsc2UsIGUubWVzc2FnZSlcbiAgICAgIHBhcnNlZFF1ZXJ5ID0ge31cbiAgICB9XG4gICAgZm9yICh2YXIga2V5IGluIGV4dHJhUXVlcnkpIHtcbiAgICAgIHBhcnNlZFF1ZXJ5W2tleV0gPSBleHRyYVF1ZXJ5W2tleV1cbiAgICB9XG4gICAgcmV0dXJuIHBhcnNlZFF1ZXJ5XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGV4dHJhUXVlcnlcbiAgfVxufVxuXG5mdW5jdGlvbiBwYXJzZVF1ZXJ5IChxdWVyeSkge1xuICB2YXIgcmVzID0ge31cblxuICBxdWVyeSA9IHF1ZXJ5LnRyaW0oKS5yZXBsYWNlKC9eKFxcP3wjfCYpLywgJycpXG5cbiAgaWYgKCFxdWVyeSkge1xuICAgIHJldHVybiByZXNcbiAgfVxuXG4gIHF1ZXJ5LnNwbGl0KCcmJykuZm9yRWFjaChmdW5jdGlvbiAocGFyYW0pIHtcbiAgICB2YXIgcGFydHMgPSBwYXJhbS5yZXBsYWNlKC9cXCsvZywgJyAnKS5zcGxpdCgnPScpXG4gICAgdmFyIGtleSA9IGRlY29kZShwYXJ0cy5zaGlmdCgpKVxuICAgIHZhciB2YWwgPSBwYXJ0cy5sZW5ndGggPiAwXG4gICAgICA/IGRlY29kZShwYXJ0cy5qb2luKCc9JykpXG4gICAgICA6IG51bGxcblxuICAgIGlmIChyZXNba2V5XSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXNba2V5XSA9IHZhbFxuICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShyZXNba2V5XSkpIHtcbiAgICAgIHJlc1trZXldLnB1c2godmFsKVxuICAgIH0gZWxzZSB7XG4gICAgICByZXNba2V5XSA9IFtyZXNba2V5XSwgdmFsXVxuICAgIH1cbiAgfSlcblxuICByZXR1cm4gcmVzXG59XG5cbmZ1bmN0aW9uIHN0cmluZ2lmeVF1ZXJ5IChvYmopIHtcbiAgdmFyIHJlcyA9IG9iaiA/IE9iamVjdC5rZXlzKG9iaikuc29ydCgpLm1hcChmdW5jdGlvbiAoa2V5KSB7XG4gICAgdmFyIHZhbCA9IG9ialtrZXldXG5cbiAgICBpZiAodmFsID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiAnJ1xuICAgIH1cblxuICAgIGlmICh2YWwgPT09IG51bGwpIHtcbiAgICAgIHJldHVybiBlbmNvZGUoa2V5KVxuICAgIH1cblxuICAgIGlmIChBcnJheS5pc0FycmF5KHZhbCkpIHtcbiAgICAgIHZhciByZXN1bHQgPSBbXVxuICAgICAgdmFsLnNsaWNlKCkuZm9yRWFjaChmdW5jdGlvbiAodmFsMikge1xuICAgICAgICBpZiAodmFsMiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgaWYgKHZhbDIgPT09IG51bGwpIHtcbiAgICAgICAgICByZXN1bHQucHVzaChlbmNvZGUoa2V5KSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXN1bHQucHVzaChlbmNvZGUoa2V5KSArICc9JyArIGVuY29kZSh2YWwyKSlcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIHJldHVybiByZXN1bHQuam9pbignJicpXG4gICAgfVxuXG4gICAgcmV0dXJuIGVuY29kZShrZXkpICsgJz0nICsgZW5jb2RlKHZhbClcbiAgfSkuZmlsdGVyKGZ1bmN0aW9uICh4KSB7IHJldHVybiB4Lmxlbmd0aCA+IDA7IH0pLmpvaW4oJyYnKSA6IG51bGxcbiAgcmV0dXJuIHJlcyA/IChcIj9cIiArIHJlcykgOiAnJ1xufVxuXG4vKiAgKi9cblxuZnVuY3Rpb24gY3JlYXRlUm91dGUgKFxuICByZWNvcmQsXG4gIGxvY2F0aW9uLFxuICByZWRpcmVjdGVkRnJvbVxuKSB7XG4gIHZhciByb3V0ZSA9IHtcbiAgICBuYW1lOiBsb2NhdGlvbi5uYW1lIHx8IChyZWNvcmQgJiYgcmVjb3JkLm5hbWUpLFxuICAgIG1ldGE6IChyZWNvcmQgJiYgcmVjb3JkLm1ldGEpIHx8IHt9LFxuICAgIHBhdGg6IGxvY2F0aW9uLnBhdGggfHwgJy8nLFxuICAgIGhhc2g6IGxvY2F0aW9uLmhhc2ggfHwgJycsXG4gICAgcXVlcnk6IGxvY2F0aW9uLnF1ZXJ5IHx8IHt9LFxuICAgIHBhcmFtczogbG9jYXRpb24ucGFyYW1zIHx8IHt9LFxuICAgIGZ1bGxQYXRoOiBnZXRGdWxsUGF0aChsb2NhdGlvbiksXG4gICAgbWF0Y2hlZDogcmVjb3JkID8gZm9ybWF0TWF0Y2gocmVjb3JkKSA6IFtdXG4gIH1cbiAgaWYgKHJlZGlyZWN0ZWRGcm9tKSB7XG4gICAgcm91dGUucmVkaXJlY3RlZEZyb20gPSBnZXRGdWxsUGF0aChyZWRpcmVjdGVkRnJvbSlcbiAgfVxuICByZXR1cm4gT2JqZWN0LmZyZWV6ZShyb3V0ZSlcbn1cblxuLy8gdGhlIHN0YXJ0aW5nIHJvdXRlIHRoYXQgcmVwcmVzZW50cyB0aGUgaW5pdGlhbCBzdGF0ZVxudmFyIFNUQVJUID0gY3JlYXRlUm91dGUobnVsbCwge1xuICBwYXRoOiAnLydcbn0pXG5cbmZ1bmN0aW9uIGZvcm1hdE1hdGNoIChyZWNvcmQpIHtcbiAgdmFyIHJlcyA9IFtdXG4gIHdoaWxlIChyZWNvcmQpIHtcbiAgICByZXMudW5zaGlmdChyZWNvcmQpXG4gICAgcmVjb3JkID0gcmVjb3JkLnBhcmVudFxuICB9XG4gIHJldHVybiByZXNcbn1cblxuZnVuY3Rpb24gZ2V0RnVsbFBhdGggKHJlZikge1xuICB2YXIgcGF0aCA9IHJlZi5wYXRoO1xuICB2YXIgcXVlcnkgPSByZWYucXVlcnk7IGlmICggcXVlcnkgPT09IHZvaWQgMCApIHF1ZXJ5ID0ge307XG4gIHZhciBoYXNoID0gcmVmLmhhc2g7IGlmICggaGFzaCA9PT0gdm9pZCAwICkgaGFzaCA9ICcnO1xuXG4gIHJldHVybiAocGF0aCB8fCAnLycpICsgc3RyaW5naWZ5UXVlcnkocXVlcnkpICsgaGFzaFxufVxuXG52YXIgdHJhaWxpbmdTbGFzaFJFID0gL1xcLyQvXG5mdW5jdGlvbiBpc1NhbWVSb3V0ZSAoYSwgYikge1xuICBpZiAoYiA9PT0gU1RBUlQpIHtcbiAgICByZXR1cm4gYSA9PT0gYlxuICB9IGVsc2UgaWYgKCFiKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH0gZWxzZSBpZiAoYS5wYXRoICYmIGIucGF0aCkge1xuICAgIHJldHVybiAoXG4gICAgICBhLnBhdGgucmVwbGFjZSh0cmFpbGluZ1NsYXNoUkUsICcnKSA9PT0gYi5wYXRoLnJlcGxhY2UodHJhaWxpbmdTbGFzaFJFLCAnJykgJiZcbiAgICAgIGEuaGFzaCA9PT0gYi5oYXNoICYmXG4gICAgICBpc09iamVjdEVxdWFsKGEucXVlcnksIGIucXVlcnkpXG4gICAgKVxuICB9IGVsc2UgaWYgKGEubmFtZSAmJiBiLm5hbWUpIHtcbiAgICByZXR1cm4gKFxuICAgICAgYS5uYW1lID09PSBiLm5hbWUgJiZcbiAgICAgIGEuaGFzaCA9PT0gYi5oYXNoICYmXG4gICAgICBpc09iamVjdEVxdWFsKGEucXVlcnksIGIucXVlcnkpICYmXG4gICAgICBpc09iamVjdEVxdWFsKGEucGFyYW1zLCBiLnBhcmFtcylcbiAgICApXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cbn1cblxuZnVuY3Rpb24gaXNPYmplY3RFcXVhbCAoYSwgYikge1xuICBpZiAoIGEgPT09IHZvaWQgMCApIGEgPSB7fTtcbiAgaWYgKCBiID09PSB2b2lkIDAgKSBiID0ge307XG5cbiAgdmFyIGFLZXlzID0gT2JqZWN0LmtleXMoYSlcbiAgdmFyIGJLZXlzID0gT2JqZWN0LmtleXMoYilcbiAgaWYgKGFLZXlzLmxlbmd0aCAhPT0gYktleXMubGVuZ3RoKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cbiAgcmV0dXJuIGFLZXlzLmV2ZXJ5KGZ1bmN0aW9uIChrZXkpIHsgcmV0dXJuIFN0cmluZyhhW2tleV0pID09PSBTdHJpbmcoYltrZXldKTsgfSlcbn1cblxuZnVuY3Rpb24gaXNJbmNsdWRlZFJvdXRlIChjdXJyZW50LCB0YXJnZXQpIHtcbiAgcmV0dXJuIChcbiAgICBjdXJyZW50LnBhdGguaW5kZXhPZih0YXJnZXQucGF0aC5yZXBsYWNlKC9cXC8kLywgJycpKSA9PT0gMCAmJlxuICAgICghdGFyZ2V0Lmhhc2ggfHwgY3VycmVudC5oYXNoID09PSB0YXJnZXQuaGFzaCkgJiZcbiAgICBxdWVyeUluY2x1ZGVzKGN1cnJlbnQucXVlcnksIHRhcmdldC5xdWVyeSlcbiAgKVxufVxuXG5mdW5jdGlvbiBxdWVyeUluY2x1ZGVzIChjdXJyZW50LCB0YXJnZXQpIHtcbiAgZm9yICh2YXIga2V5IGluIHRhcmdldCkge1xuICAgIGlmICghKGtleSBpbiBjdXJyZW50KSkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuICB9XG4gIHJldHVybiB0cnVlXG59XG5cbi8qICAqL1xuXG5mdW5jdGlvbiBub3JtYWxpemVMb2NhdGlvbiAoXG4gIHJhdyxcbiAgY3VycmVudCxcbiAgYXBwZW5kXG4pIHtcbiAgdmFyIG5leHQgPSB0eXBlb2YgcmF3ID09PSAnc3RyaW5nJyA/IHsgcGF0aDogcmF3IH0gOiByYXdcbiAgaWYgKG5leHQubmFtZSB8fCBuZXh0Ll9ub3JtYWxpemVkKSB7XG4gICAgcmV0dXJuIG5leHRcbiAgfVxuXG4gIHZhciBwYXJzZWRQYXRoID0gcGFyc2VQYXRoKG5leHQucGF0aCB8fCAnJylcbiAgdmFyIGJhc2VQYXRoID0gKGN1cnJlbnQgJiYgY3VycmVudC5wYXRoKSB8fCAnLydcbiAgdmFyIHBhdGggPSBwYXJzZWRQYXRoLnBhdGhcbiAgICA/IHJlc29sdmVQYXRoKHBhcnNlZFBhdGgucGF0aCwgYmFzZVBhdGgsIGFwcGVuZClcbiAgICA6IChjdXJyZW50ICYmIGN1cnJlbnQucGF0aCkgfHwgJy8nXG4gIHZhciBxdWVyeSA9IHJlc29sdmVRdWVyeShwYXJzZWRQYXRoLnF1ZXJ5LCBuZXh0LnF1ZXJ5KVxuICB2YXIgaGFzaCA9IG5leHQuaGFzaCB8fCBwYXJzZWRQYXRoLmhhc2hcbiAgaWYgKGhhc2ggJiYgaGFzaC5jaGFyQXQoMCkgIT09ICcjJykge1xuICAgIGhhc2ggPSBcIiNcIiArIGhhc2hcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgX25vcm1hbGl6ZWQ6IHRydWUsXG4gICAgcGF0aDogcGF0aCxcbiAgICBxdWVyeTogcXVlcnksXG4gICAgaGFzaDogaGFzaFxuICB9XG59XG5cbi8qICAqL1xuXG4vLyB3b3JrIGFyb3VuZCB3ZWlyZCBmbG93IGJ1Z1xudmFyIHRvVHlwZXMgPSBbU3RyaW5nLCBPYmplY3RdXG5cbnZhciBMaW5rID0ge1xuICBuYW1lOiAncm91dGVyLWxpbmsnLFxuICBwcm9wczoge1xuICAgIHRvOiB7XG4gICAgICB0eXBlOiB0b1R5cGVzLFxuICAgICAgcmVxdWlyZWQ6IHRydWVcbiAgICB9LFxuICAgIHRhZzoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdDogJ2EnXG4gICAgfSxcbiAgICBleGFjdDogQm9vbGVhbixcbiAgICBhcHBlbmQ6IEJvb2xlYW4sXG4gICAgcmVwbGFjZTogQm9vbGVhbixcbiAgICBhY3RpdmVDbGFzczogU3RyaW5nXG4gIH0sXG4gIHJlbmRlcjogZnVuY3Rpb24gcmVuZGVyIChoKSB7XG4gICAgdmFyIHRoaXMkMSA9IHRoaXM7XG5cbiAgICB2YXIgcm91dGVyID0gdGhpcy4kcm91dGVyXG4gICAgdmFyIGN1cnJlbnQgPSB0aGlzLiRyb3V0ZVxuICAgIHZhciB0byA9IG5vcm1hbGl6ZUxvY2F0aW9uKHRoaXMudG8sIGN1cnJlbnQsIHRoaXMuYXBwZW5kKVxuICAgIHZhciByZXNvbHZlZCA9IHJvdXRlci5tYXRjaCh0bywgY3VycmVudClcbiAgICB2YXIgZnVsbFBhdGggPSByZXNvbHZlZC5yZWRpcmVjdGVkRnJvbSB8fCByZXNvbHZlZC5mdWxsUGF0aFxuICAgIHZhciBiYXNlID0gcm91dGVyLmhpc3RvcnkuYmFzZVxuICAgIHZhciBocmVmID0gY3JlYXRlSHJlZihiYXNlLCBmdWxsUGF0aCwgcm91dGVyLm1vZGUpXG4gICAgdmFyIGNsYXNzZXMgPSB7fVxuICAgIHZhciBhY3RpdmVDbGFzcyA9IHRoaXMuYWN0aXZlQ2xhc3MgfHwgcm91dGVyLm9wdGlvbnMubGlua0FjdGl2ZUNsYXNzIHx8ICdyb3V0ZXItbGluay1hY3RpdmUnXG4gICAgdmFyIGNvbXBhcmVUYXJnZXQgPSB0by5wYXRoID8gY3JlYXRlUm91dGUobnVsbCwgdG8pIDogcmVzb2x2ZWRcbiAgICBjbGFzc2VzW2FjdGl2ZUNsYXNzXSA9IHRoaXMuZXhhY3RcbiAgICAgID8gaXNTYW1lUm91dGUoY3VycmVudCwgY29tcGFyZVRhcmdldClcbiAgICAgIDogaXNJbmNsdWRlZFJvdXRlKGN1cnJlbnQsIGNvbXBhcmVUYXJnZXQpXG5cbiAgICB2YXIgb24gPSB7XG4gICAgICBjbGljazogZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgLy8gZG9uJ3QgcmVkaXJlY3Qgd2l0aCBjb250cm9sIGtleXNcbiAgICAgICAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gICAgICAgIGlmIChlLm1ldGFLZXkgfHwgZS5jdHJsS2V5IHx8IGUuc2hpZnRLZXkpIHsgcmV0dXJuIH1cbiAgICAgICAgLy8gZG9uJ3QgcmVkaXJlY3Qgd2hlbiBwcmV2ZW50RGVmYXVsdCBjYWxsZWRcbiAgICAgICAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gICAgICAgIGlmIChlLmRlZmF1bHRQcmV2ZW50ZWQpIHsgcmV0dXJuIH1cbiAgICAgICAgLy8gZG9uJ3QgcmVkaXJlY3Qgb24gcmlnaHQgY2xpY2tcbiAgICAgICAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gICAgICAgIGlmIChlLmJ1dHRvbiAhPT0gMCkgeyByZXR1cm4gfVxuICAgICAgICAvLyBkb24ndCByZWRpcmVjdCBpZiBgdGFyZ2V0PVwiX2JsYW5rXCJgXG4gICAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICAgICAgICB2YXIgdGFyZ2V0ID0gZS50YXJnZXQuZ2V0QXR0cmlidXRlKCd0YXJnZXQnKVxuICAgICAgICBpZiAoL1xcYl9ibGFua1xcYi9pLnRlc3QodGFyZ2V0KSkgeyByZXR1cm4gfVxuXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICBpZiAodGhpcyQxLnJlcGxhY2UpIHtcbiAgICAgICAgICByb3V0ZXIucmVwbGFjZSh0bylcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByb3V0ZXIucHVzaCh0bylcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBkYXRhID0ge1xuICAgICAgY2xhc3M6IGNsYXNzZXNcbiAgICB9XG5cbiAgICBpZiAodGhpcy50YWcgPT09ICdhJykge1xuICAgICAgZGF0YS5vbiA9IG9uXG4gICAgICBkYXRhLmF0dHJzID0geyBocmVmOiBocmVmIH1cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gZmluZCB0aGUgZmlyc3QgPGE+IGNoaWxkIGFuZCBhcHBseSBsaXN0ZW5lciBhbmQgaHJlZlxuICAgICAgdmFyIGEgPSBmaW5kQW5jaG9yKHRoaXMuJHNsb3RzLmRlZmF1bHQpXG4gICAgICBpZiAoYSkge1xuICAgICAgICAvLyBpbiBjYXNlIHRoZSA8YT4gaXMgYSBzdGF0aWMgbm9kZVxuICAgICAgICBhLmlzU3RhdGljID0gZmFsc2VcbiAgICAgICAgdmFyIGV4dGVuZCA9IF9WdWUudXRpbC5leHRlbmRcbiAgICAgICAgdmFyIGFEYXRhID0gYS5kYXRhID0gZXh0ZW5kKHt9LCBhLmRhdGEpXG4gICAgICAgIGFEYXRhLm9uID0gb25cbiAgICAgICAgdmFyIGFBdHRycyA9IGEuZGF0YS5hdHRycyA9IGV4dGVuZCh7fSwgYS5kYXRhLmF0dHJzKVxuICAgICAgICBhQXR0cnMuaHJlZiA9IGhyZWZcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIGRvZXNuJ3QgaGF2ZSA8YT4gY2hpbGQsIGFwcGx5IGxpc3RlbmVyIHRvIHNlbGZcbiAgICAgICAgZGF0YS5vbiA9IG9uXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGgodGhpcy50YWcsIGRhdGEsIHRoaXMuJHNsb3RzLmRlZmF1bHQpXG4gIH1cbn1cblxuZnVuY3Rpb24gZmluZEFuY2hvciAoY2hpbGRyZW4pIHtcbiAgaWYgKGNoaWxkcmVuKSB7XG4gICAgdmFyIGNoaWxkXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgY2hpbGQgPSBjaGlsZHJlbltpXVxuICAgICAgaWYgKGNoaWxkLnRhZyA9PT0gJ2EnKSB7XG4gICAgICAgIHJldHVybiBjaGlsZFxuICAgICAgfVxuICAgICAgaWYgKGNoaWxkLmNoaWxkcmVuICYmIChjaGlsZCA9IGZpbmRBbmNob3IoY2hpbGQuY2hpbGRyZW4pKSkge1xuICAgICAgICByZXR1cm4gY2hpbGRcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlSHJlZiAoYmFzZSwgZnVsbFBhdGgsIG1vZGUpIHtcbiAgdmFyIHBhdGggPSBtb2RlID09PSAnaGFzaCcgPyAnLyMnICsgZnVsbFBhdGggOiBmdWxsUGF0aFxuICByZXR1cm4gYmFzZSA/IGNsZWFuUGF0aChiYXNlICsgcGF0aCkgOiBwYXRoXG59XG5cbnZhciBfVnVlXG5cbmZ1bmN0aW9uIGluc3RhbGwgKFZ1ZSkge1xuICBpZiAoaW5zdGFsbC5pbnN0YWxsZWQpIHsgcmV0dXJuIH1cbiAgaW5zdGFsbC5pbnN0YWxsZWQgPSB0cnVlXG5cbiAgX1Z1ZSA9IFZ1ZVxuXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShWdWUucHJvdG90eXBlLCAnJHJvdXRlcicsIHtcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCAoKSB7IHJldHVybiB0aGlzLiRyb290Ll9yb3V0ZXIgfVxuICB9KVxuXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShWdWUucHJvdG90eXBlLCAnJHJvdXRlJywge1xuICAgIGdldDogZnVuY3Rpb24gZ2V0JDEgKCkgeyByZXR1cm4gdGhpcy4kcm9vdC5fcm91dGUgfVxuICB9KVxuXG4gIFZ1ZS5taXhpbih7XG4gICAgYmVmb3JlQ3JlYXRlOiBmdW5jdGlvbiBiZWZvcmVDcmVhdGUgKCkge1xuICAgICAgaWYgKHRoaXMuJG9wdGlvbnMucm91dGVyKSB7XG4gICAgICAgIHRoaXMuX3JvdXRlciA9IHRoaXMuJG9wdGlvbnMucm91dGVyXG4gICAgICAgIHRoaXMuX3JvdXRlci5pbml0KHRoaXMpXG4gICAgICAgIFZ1ZS51dGlsLmRlZmluZVJlYWN0aXZlKHRoaXMsICdfcm91dGUnLCB0aGlzLl9yb3V0ZXIuaGlzdG9yeS5jdXJyZW50KVxuICAgICAgfVxuICAgIH1cbiAgfSlcblxuICBWdWUuY29tcG9uZW50KCdyb3V0ZXItdmlldycsIFZpZXcpXG4gIFZ1ZS5jb21wb25lbnQoJ3JvdXRlci1saW5rJywgTGluaylcblxuICB2YXIgc3RyYXRzID0gVnVlLmNvbmZpZy5vcHRpb25NZXJnZVN0cmF0ZWdpZXNcbiAgLy8gdXNlIHRoZSBzYW1lIGhvb2sgbWVyZ2luZyBzdHJhdGVneSBmb3Igcm91dGUgaG9va3NcbiAgc3RyYXRzLmJlZm9yZVJvdXRlRW50ZXIgPSBzdHJhdHMuYmVmb3JlUm91dGVMZWF2ZSA9IHN0cmF0cy5jcmVhdGVkXG59XG5cbnZhciBfX21vZHVsZUV4cG9ydHMgPSBBcnJheS5pc0FycmF5IHx8IGZ1bmN0aW9uIChhcnIpIHtcbiAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChhcnIpID09ICdbb2JqZWN0IEFycmF5XSc7XG59O1xuXG52YXIgaXNhcnJheSA9IF9fbW9kdWxlRXhwb3J0c1xuXG4vKipcbiAqIEV4cG9zZSBgcGF0aFRvUmVnZXhwYC5cbiAqL1xudmFyIGluZGV4ID0gcGF0aFRvUmVnZXhwXG52YXIgcGFyc2VfMSA9IHBhcnNlXG52YXIgY29tcGlsZV8xID0gY29tcGlsZVxudmFyIHRva2Vuc1RvRnVuY3Rpb25fMSA9IHRva2Vuc1RvRnVuY3Rpb25cbnZhciB0b2tlbnNUb1JlZ0V4cF8xID0gdG9rZW5zVG9SZWdFeHBcblxuLyoqXG4gKiBUaGUgbWFpbiBwYXRoIG1hdGNoaW5nIHJlZ2V4cCB1dGlsaXR5LlxuICpcbiAqIEB0eXBlIHtSZWdFeHB9XG4gKi9cbnZhciBQQVRIX1JFR0VYUCA9IG5ldyBSZWdFeHAoW1xuICAvLyBNYXRjaCBlc2NhcGVkIGNoYXJhY3RlcnMgdGhhdCB3b3VsZCBvdGhlcndpc2UgYXBwZWFyIGluIGZ1dHVyZSBtYXRjaGVzLlxuICAvLyBUaGlzIGFsbG93cyB0aGUgdXNlciB0byBlc2NhcGUgc3BlY2lhbCBjaGFyYWN0ZXJzIHRoYXQgd29uJ3QgdHJhbnNmb3JtLlxuICAnKFxcXFxcXFxcLiknLFxuICAvLyBNYXRjaCBFeHByZXNzLXN0eWxlIHBhcmFtZXRlcnMgYW5kIHVuLW5hbWVkIHBhcmFtZXRlcnMgd2l0aCBhIHByZWZpeFxuICAvLyBhbmQgb3B0aW9uYWwgc3VmZml4ZXMuIE1hdGNoZXMgYXBwZWFyIGFzOlxuICAvL1xuICAvLyBcIi86dGVzdChcXFxcZCspP1wiID0+IFtcIi9cIiwgXCJ0ZXN0XCIsIFwiXFxkK1wiLCB1bmRlZmluZWQsIFwiP1wiLCB1bmRlZmluZWRdXG4gIC8vIFwiL3JvdXRlKFxcXFxkKylcIiAgPT4gW3VuZGVmaW5lZCwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIFwiXFxkK1wiLCB1bmRlZmluZWQsIHVuZGVmaW5lZF1cbiAgLy8gXCIvKlwiICAgICAgICAgICAgPT4gW1wiL1wiLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIFwiKlwiXVxuICAnKFtcXFxcLy5dKT8oPzooPzpcXFxcOihcXFxcdyspKD86XFxcXCgoKD86XFxcXFxcXFwufFteXFxcXFxcXFwoKV0pKylcXFxcKSk/fFxcXFwoKCg/OlxcXFxcXFxcLnxbXlxcXFxcXFxcKCldKSspXFxcXCkpKFsrKj9dKT98KFxcXFwqKSknXG5dLmpvaW4oJ3wnKSwgJ2cnKVxuXG4vKipcbiAqIFBhcnNlIGEgc3RyaW5nIGZvciB0aGUgcmF3IHRva2Vucy5cbiAqXG4gKiBAcGFyYW0gIHtzdHJpbmd9ICBzdHJcbiAqIEBwYXJhbSAge09iamVjdD19IG9wdGlvbnNcbiAqIEByZXR1cm4geyFBcnJheX1cbiAqL1xuZnVuY3Rpb24gcGFyc2UgKHN0ciwgb3B0aW9ucykge1xuICB2YXIgdG9rZW5zID0gW11cbiAgdmFyIGtleSA9IDBcbiAgdmFyIGluZGV4ID0gMFxuICB2YXIgcGF0aCA9ICcnXG4gIHZhciBkZWZhdWx0RGVsaW1pdGVyID0gb3B0aW9ucyAmJiBvcHRpb25zLmRlbGltaXRlciB8fCAnLydcbiAgdmFyIHJlc1xuXG4gIHdoaWxlICgocmVzID0gUEFUSF9SRUdFWFAuZXhlYyhzdHIpKSAhPSBudWxsKSB7XG4gICAgdmFyIG0gPSByZXNbMF1cbiAgICB2YXIgZXNjYXBlZCA9IHJlc1sxXVxuICAgIHZhciBvZmZzZXQgPSByZXMuaW5kZXhcbiAgICBwYXRoICs9IHN0ci5zbGljZShpbmRleCwgb2Zmc2V0KVxuICAgIGluZGV4ID0gb2Zmc2V0ICsgbS5sZW5ndGhcblxuICAgIC8vIElnbm9yZSBhbHJlYWR5IGVzY2FwZWQgc2VxdWVuY2VzLlxuICAgIGlmIChlc2NhcGVkKSB7XG4gICAgICBwYXRoICs9IGVzY2FwZWRbMV1cbiAgICAgIGNvbnRpbnVlXG4gICAgfVxuXG4gICAgdmFyIG5leHQgPSBzdHJbaW5kZXhdXG4gICAgdmFyIHByZWZpeCA9IHJlc1syXVxuICAgIHZhciBuYW1lID0gcmVzWzNdXG4gICAgdmFyIGNhcHR1cmUgPSByZXNbNF1cbiAgICB2YXIgZ3JvdXAgPSByZXNbNV1cbiAgICB2YXIgbW9kaWZpZXIgPSByZXNbNl1cbiAgICB2YXIgYXN0ZXJpc2sgPSByZXNbN11cblxuICAgIC8vIFB1c2ggdGhlIGN1cnJlbnQgcGF0aCBvbnRvIHRoZSB0b2tlbnMuXG4gICAgaWYgKHBhdGgpIHtcbiAgICAgIHRva2Vucy5wdXNoKHBhdGgpXG4gICAgICBwYXRoID0gJydcbiAgICB9XG5cbiAgICB2YXIgcGFydGlhbCA9IHByZWZpeCAhPSBudWxsICYmIG5leHQgIT0gbnVsbCAmJiBuZXh0ICE9PSBwcmVmaXhcbiAgICB2YXIgcmVwZWF0ID0gbW9kaWZpZXIgPT09ICcrJyB8fCBtb2RpZmllciA9PT0gJyonXG4gICAgdmFyIG9wdGlvbmFsID0gbW9kaWZpZXIgPT09ICc/JyB8fCBtb2RpZmllciA9PT0gJyonXG4gICAgdmFyIGRlbGltaXRlciA9IHJlc1syXSB8fCBkZWZhdWx0RGVsaW1pdGVyXG4gICAgdmFyIHBhdHRlcm4gPSBjYXB0dXJlIHx8IGdyb3VwXG5cbiAgICB0b2tlbnMucHVzaCh7XG4gICAgICBuYW1lOiBuYW1lIHx8IGtleSsrLFxuICAgICAgcHJlZml4OiBwcmVmaXggfHwgJycsXG4gICAgICBkZWxpbWl0ZXI6IGRlbGltaXRlcixcbiAgICAgIG9wdGlvbmFsOiBvcHRpb25hbCxcbiAgICAgIHJlcGVhdDogcmVwZWF0LFxuICAgICAgcGFydGlhbDogcGFydGlhbCxcbiAgICAgIGFzdGVyaXNrOiAhIWFzdGVyaXNrLFxuICAgICAgcGF0dGVybjogcGF0dGVybiA/IGVzY2FwZUdyb3VwKHBhdHRlcm4pIDogKGFzdGVyaXNrID8gJy4qJyA6ICdbXicgKyBlc2NhcGVTdHJpbmcoZGVsaW1pdGVyKSArICddKz8nKVxuICAgIH0pXG4gIH1cblxuICAvLyBNYXRjaCBhbnkgY2hhcmFjdGVycyBzdGlsbCByZW1haW5pbmcuXG4gIGlmIChpbmRleCA8IHN0ci5sZW5ndGgpIHtcbiAgICBwYXRoICs9IHN0ci5zdWJzdHIoaW5kZXgpXG4gIH1cblxuICAvLyBJZiB0aGUgcGF0aCBleGlzdHMsIHB1c2ggaXQgb250byB0aGUgZW5kLlxuICBpZiAocGF0aCkge1xuICAgIHRva2Vucy5wdXNoKHBhdGgpXG4gIH1cblxuICByZXR1cm4gdG9rZW5zXG59XG5cbi8qKlxuICogQ29tcGlsZSBhIHN0cmluZyB0byBhIHRlbXBsYXRlIGZ1bmN0aW9uIGZvciB0aGUgcGF0aC5cbiAqXG4gKiBAcGFyYW0gIHtzdHJpbmd9ICAgICAgICAgICAgIHN0clxuICogQHBhcmFtICB7T2JqZWN0PX0gICAgICAgICAgICBvcHRpb25zXG4gKiBAcmV0dXJuIHshZnVuY3Rpb24oT2JqZWN0PSwgT2JqZWN0PSl9XG4gKi9cbmZ1bmN0aW9uIGNvbXBpbGUgKHN0ciwgb3B0aW9ucykge1xuICByZXR1cm4gdG9rZW5zVG9GdW5jdGlvbihwYXJzZShzdHIsIG9wdGlvbnMpKVxufVxuXG4vKipcbiAqIFByZXR0aWVyIGVuY29kaW5nIG9mIFVSSSBwYXRoIHNlZ21lbnRzLlxuICpcbiAqIEBwYXJhbSAge3N0cmluZ31cbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xuZnVuY3Rpb24gZW5jb2RlVVJJQ29tcG9uZW50UHJldHR5IChzdHIpIHtcbiAgcmV0dXJuIGVuY29kZVVSSShzdHIpLnJlcGxhY2UoL1tcXC8/I10vZywgZnVuY3Rpb24gKGMpIHtcbiAgICByZXR1cm4gJyUnICsgYy5jaGFyQ29kZUF0KDApLnRvU3RyaW5nKDE2KS50b1VwcGVyQ2FzZSgpXG4gIH0pXG59XG5cbi8qKlxuICogRW5jb2RlIHRoZSBhc3RlcmlzayBwYXJhbWV0ZXIuIFNpbWlsYXIgdG8gYHByZXR0eWAsIGJ1dCBhbGxvd3Mgc2xhc2hlcy5cbiAqXG4gKiBAcGFyYW0gIHtzdHJpbmd9XG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cbmZ1bmN0aW9uIGVuY29kZUFzdGVyaXNrIChzdHIpIHtcbiAgcmV0dXJuIGVuY29kZVVSSShzdHIpLnJlcGxhY2UoL1s/I10vZywgZnVuY3Rpb24gKGMpIHtcbiAgICByZXR1cm4gJyUnICsgYy5jaGFyQ29kZUF0KDApLnRvU3RyaW5nKDE2KS50b1VwcGVyQ2FzZSgpXG4gIH0pXG59XG5cbi8qKlxuICogRXhwb3NlIGEgbWV0aG9kIGZvciB0cmFuc2Zvcm1pbmcgdG9rZW5zIGludG8gdGhlIHBhdGggZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIHRva2Vuc1RvRnVuY3Rpb24gKHRva2Vucykge1xuICAvLyBDb21waWxlIGFsbCB0aGUgdG9rZW5zIGludG8gcmVnZXhwcy5cbiAgdmFyIG1hdGNoZXMgPSBuZXcgQXJyYXkodG9rZW5zLmxlbmd0aClcblxuICAvLyBDb21waWxlIGFsbCB0aGUgcGF0dGVybnMgYmVmb3JlIGNvbXBpbGF0aW9uLlxuICBmb3IgKHZhciBpID0gMDsgaSA8IHRva2Vucy5sZW5ndGg7IGkrKykge1xuICAgIGlmICh0eXBlb2YgdG9rZW5zW2ldID09PSAnb2JqZWN0Jykge1xuICAgICAgbWF0Y2hlc1tpXSA9IG5ldyBSZWdFeHAoJ14oPzonICsgdG9rZW5zW2ldLnBhdHRlcm4gKyAnKSQnKVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbiAob2JqLCBvcHRzKSB7XG4gICAgdmFyIHBhdGggPSAnJ1xuICAgIHZhciBkYXRhID0gb2JqIHx8IHt9XG4gICAgdmFyIG9wdGlvbnMgPSBvcHRzIHx8IHt9XG4gICAgdmFyIGVuY29kZSA9IG9wdGlvbnMucHJldHR5ID8gZW5jb2RlVVJJQ29tcG9uZW50UHJldHR5IDogZW5jb2RlVVJJQ29tcG9uZW50XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRva2Vucy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIHRva2VuID0gdG9rZW5zW2ldXG5cbiAgICAgIGlmICh0eXBlb2YgdG9rZW4gPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHBhdGggKz0gdG9rZW5cblxuICAgICAgICBjb250aW51ZVxuICAgICAgfVxuXG4gICAgICB2YXIgdmFsdWUgPSBkYXRhW3Rva2VuLm5hbWVdXG4gICAgICB2YXIgc2VnbWVudFxuXG4gICAgICBpZiAodmFsdWUgPT0gbnVsbCkge1xuICAgICAgICBpZiAodG9rZW4ub3B0aW9uYWwpIHtcbiAgICAgICAgICAvLyBQcmVwZW5kIHBhcnRpYWwgc2VnbWVudCBwcmVmaXhlcy5cbiAgICAgICAgICBpZiAodG9rZW4ucGFydGlhbCkge1xuICAgICAgICAgICAgcGF0aCArPSB0b2tlbi5wcmVmaXhcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb250aW51ZVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0V4cGVjdGVkIFwiJyArIHRva2VuLm5hbWUgKyAnXCIgdG8gYmUgZGVmaW5lZCcpXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGlzYXJyYXkodmFsdWUpKSB7XG4gICAgICAgIGlmICghdG9rZW4ucmVwZWF0KSB7XG4gICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignRXhwZWN0ZWQgXCInICsgdG9rZW4ubmFtZSArICdcIiB0byBub3QgcmVwZWF0LCBidXQgcmVjZWl2ZWQgYCcgKyBKU09OLnN0cmluZ2lmeSh2YWx1ZSkgKyAnYCcpXG4gICAgICAgIH1cblxuICAgICAgICBpZiAodmFsdWUubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgaWYgKHRva2VuLm9wdGlvbmFsKSB7XG4gICAgICAgICAgICBjb250aW51ZVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdFeHBlY3RlZCBcIicgKyB0b2tlbi5uYW1lICsgJ1wiIHRvIG5vdCBiZSBlbXB0eScpXG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCB2YWx1ZS5sZW5ndGg7IGorKykge1xuICAgICAgICAgIHNlZ21lbnQgPSBlbmNvZGUodmFsdWVbal0pXG5cbiAgICAgICAgICBpZiAoIW1hdGNoZXNbaV0udGVzdChzZWdtZW50KSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignRXhwZWN0ZWQgYWxsIFwiJyArIHRva2VuLm5hbWUgKyAnXCIgdG8gbWF0Y2ggXCInICsgdG9rZW4ucGF0dGVybiArICdcIiwgYnV0IHJlY2VpdmVkIGAnICsgSlNPTi5zdHJpbmdpZnkoc2VnbWVudCkgKyAnYCcpXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcGF0aCArPSAoaiA9PT0gMCA/IHRva2VuLnByZWZpeCA6IHRva2VuLmRlbGltaXRlcikgKyBzZWdtZW50XG4gICAgICAgIH1cblxuICAgICAgICBjb250aW51ZVxuICAgICAgfVxuXG4gICAgICBzZWdtZW50ID0gdG9rZW4uYXN0ZXJpc2sgPyBlbmNvZGVBc3Rlcmlzayh2YWx1ZSkgOiBlbmNvZGUodmFsdWUpXG5cbiAgICAgIGlmICghbWF0Y2hlc1tpXS50ZXN0KHNlZ21lbnQpKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0V4cGVjdGVkIFwiJyArIHRva2VuLm5hbWUgKyAnXCIgdG8gbWF0Y2ggXCInICsgdG9rZW4ucGF0dGVybiArICdcIiwgYnV0IHJlY2VpdmVkIFwiJyArIHNlZ21lbnQgKyAnXCInKVxuICAgICAgfVxuXG4gICAgICBwYXRoICs9IHRva2VuLnByZWZpeCArIHNlZ21lbnRcbiAgICB9XG5cbiAgICByZXR1cm4gcGF0aFxuICB9XG59XG5cbi8qKlxuICogRXNjYXBlIGEgcmVndWxhciBleHByZXNzaW9uIHN0cmluZy5cbiAqXG4gKiBAcGFyYW0gIHtzdHJpbmd9IHN0clxuICogQHJldHVybiB7c3RyaW5nfVxuICovXG5mdW5jdGlvbiBlc2NhcGVTdHJpbmcgKHN0cikge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoLyhbLisqPz1eIToke30oKVtcXF18XFwvXFxcXF0pL2csICdcXFxcJDEnKVxufVxuXG4vKipcbiAqIEVzY2FwZSB0aGUgY2FwdHVyaW5nIGdyb3VwIGJ5IGVzY2FwaW5nIHNwZWNpYWwgY2hhcmFjdGVycyBhbmQgbWVhbmluZy5cbiAqXG4gKiBAcGFyYW0gIHtzdHJpbmd9IGdyb3VwXG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cbmZ1bmN0aW9uIGVzY2FwZUdyb3VwIChncm91cCkge1xuICByZXR1cm4gZ3JvdXAucmVwbGFjZSgvKFs9ITokXFwvKCldKS9nLCAnXFxcXCQxJylcbn1cblxuLyoqXG4gKiBBdHRhY2ggdGhlIGtleXMgYXMgYSBwcm9wZXJ0eSBvZiB0aGUgcmVnZXhwLlxuICpcbiAqIEBwYXJhbSAgeyFSZWdFeHB9IHJlXG4gKiBAcGFyYW0gIHtBcnJheX0gICBrZXlzXG4gKiBAcmV0dXJuIHshUmVnRXhwfVxuICovXG5mdW5jdGlvbiBhdHRhY2hLZXlzIChyZSwga2V5cykge1xuICByZS5rZXlzID0ga2V5c1xuICByZXR1cm4gcmVcbn1cblxuLyoqXG4gKiBHZXQgdGhlIGZsYWdzIGZvciBhIHJlZ2V4cCBmcm9tIHRoZSBvcHRpb25zLlxuICpcbiAqIEBwYXJhbSAge09iamVjdH0gb3B0aW9uc1xuICogQHJldHVybiB7c3RyaW5nfVxuICovXG5mdW5jdGlvbiBmbGFncyAob3B0aW9ucykge1xuICByZXR1cm4gb3B0aW9ucy5zZW5zaXRpdmUgPyAnJyA6ICdpJ1xufVxuXG4vKipcbiAqIFB1bGwgb3V0IGtleXMgZnJvbSBhIHJlZ2V4cC5cbiAqXG4gKiBAcGFyYW0gIHshUmVnRXhwfSBwYXRoXG4gKiBAcGFyYW0gIHshQXJyYXl9ICBrZXlzXG4gKiBAcmV0dXJuIHshUmVnRXhwfVxuICovXG5mdW5jdGlvbiByZWdleHBUb1JlZ2V4cCAocGF0aCwga2V5cykge1xuICAvLyBVc2UgYSBuZWdhdGl2ZSBsb29rYWhlYWQgdG8gbWF0Y2ggb25seSBjYXB0dXJpbmcgZ3JvdXBzLlxuICB2YXIgZ3JvdXBzID0gcGF0aC5zb3VyY2UubWF0Y2goL1xcKCg/IVxcPykvZylcblxuICBpZiAoZ3JvdXBzKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBncm91cHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGtleXMucHVzaCh7XG4gICAgICAgIG5hbWU6IGksXG4gICAgICAgIHByZWZpeDogbnVsbCxcbiAgICAgICAgZGVsaW1pdGVyOiBudWxsLFxuICAgICAgICBvcHRpb25hbDogZmFsc2UsXG4gICAgICAgIHJlcGVhdDogZmFsc2UsXG4gICAgICAgIHBhcnRpYWw6IGZhbHNlLFxuICAgICAgICBhc3RlcmlzazogZmFsc2UsXG4gICAgICAgIHBhdHRlcm46IG51bGxcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGF0dGFjaEtleXMocGF0aCwga2V5cylcbn1cblxuLyoqXG4gKiBUcmFuc2Zvcm0gYW4gYXJyYXkgaW50byBhIHJlZ2V4cC5cbiAqXG4gKiBAcGFyYW0gIHshQXJyYXl9ICBwYXRoXG4gKiBAcGFyYW0gIHtBcnJheX0gICBrZXlzXG4gKiBAcGFyYW0gIHshT2JqZWN0fSBvcHRpb25zXG4gKiBAcmV0dXJuIHshUmVnRXhwfVxuICovXG5mdW5jdGlvbiBhcnJheVRvUmVnZXhwIChwYXRoLCBrZXlzLCBvcHRpb25zKSB7XG4gIHZhciBwYXJ0cyA9IFtdXG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBwYXRoLmxlbmd0aDsgaSsrKSB7XG4gICAgcGFydHMucHVzaChwYXRoVG9SZWdleHAocGF0aFtpXSwga2V5cywgb3B0aW9ucykuc291cmNlKVxuICB9XG5cbiAgdmFyIHJlZ2V4cCA9IG5ldyBSZWdFeHAoJyg/OicgKyBwYXJ0cy5qb2luKCd8JykgKyAnKScsIGZsYWdzKG9wdGlvbnMpKVxuXG4gIHJldHVybiBhdHRhY2hLZXlzKHJlZ2V4cCwga2V5cylcbn1cblxuLyoqXG4gKiBDcmVhdGUgYSBwYXRoIHJlZ2V4cCBmcm9tIHN0cmluZyBpbnB1dC5cbiAqXG4gKiBAcGFyYW0gIHtzdHJpbmd9ICBwYXRoXG4gKiBAcGFyYW0gIHshQXJyYXl9ICBrZXlzXG4gKiBAcGFyYW0gIHshT2JqZWN0fSBvcHRpb25zXG4gKiBAcmV0dXJuIHshUmVnRXhwfVxuICovXG5mdW5jdGlvbiBzdHJpbmdUb1JlZ2V4cCAocGF0aCwga2V5cywgb3B0aW9ucykge1xuICByZXR1cm4gdG9rZW5zVG9SZWdFeHAocGFyc2UocGF0aCwgb3B0aW9ucyksIGtleXMsIG9wdGlvbnMpXG59XG5cbi8qKlxuICogRXhwb3NlIGEgZnVuY3Rpb24gZm9yIHRha2luZyB0b2tlbnMgYW5kIHJldHVybmluZyBhIFJlZ0V4cC5cbiAqXG4gKiBAcGFyYW0gIHshQXJyYXl9ICAgICAgICAgIHRva2Vuc1xuICogQHBhcmFtICB7KEFycmF5fE9iamVjdCk9fSBrZXlzXG4gKiBAcGFyYW0gIHtPYmplY3Q9fSAgICAgICAgIG9wdGlvbnNcbiAqIEByZXR1cm4geyFSZWdFeHB9XG4gKi9cbmZ1bmN0aW9uIHRva2Vuc1RvUmVnRXhwICh0b2tlbnMsIGtleXMsIG9wdGlvbnMpIHtcbiAgaWYgKCFpc2FycmF5KGtleXMpKSB7XG4gICAgb3B0aW9ucyA9IC8qKiBAdHlwZSB7IU9iamVjdH0gKi8gKGtleXMgfHwgb3B0aW9ucylcbiAgICBrZXlzID0gW11cbiAgfVxuXG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9XG5cbiAgdmFyIHN0cmljdCA9IG9wdGlvbnMuc3RyaWN0XG4gIHZhciBlbmQgPSBvcHRpb25zLmVuZCAhPT0gZmFsc2VcbiAgdmFyIHJvdXRlID0gJydcblxuICAvLyBJdGVyYXRlIG92ZXIgdGhlIHRva2VucyBhbmQgY3JlYXRlIG91ciByZWdleHAgc3RyaW5nLlxuICBmb3IgKHZhciBpID0gMDsgaSA8IHRva2Vucy5sZW5ndGg7IGkrKykge1xuICAgIHZhciB0b2tlbiA9IHRva2Vuc1tpXVxuXG4gICAgaWYgKHR5cGVvZiB0b2tlbiA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHJvdXRlICs9IGVzY2FwZVN0cmluZyh0b2tlbilcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHByZWZpeCA9IGVzY2FwZVN0cmluZyh0b2tlbi5wcmVmaXgpXG4gICAgICB2YXIgY2FwdHVyZSA9ICcoPzonICsgdG9rZW4ucGF0dGVybiArICcpJ1xuXG4gICAgICBrZXlzLnB1c2godG9rZW4pXG5cbiAgICAgIGlmICh0b2tlbi5yZXBlYXQpIHtcbiAgICAgICAgY2FwdHVyZSArPSAnKD86JyArIHByZWZpeCArIGNhcHR1cmUgKyAnKSonXG4gICAgICB9XG5cbiAgICAgIGlmICh0b2tlbi5vcHRpb25hbCkge1xuICAgICAgICBpZiAoIXRva2VuLnBhcnRpYWwpIHtcbiAgICAgICAgICBjYXB0dXJlID0gJyg/OicgKyBwcmVmaXggKyAnKCcgKyBjYXB0dXJlICsgJykpPydcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjYXB0dXJlID0gcHJlZml4ICsgJygnICsgY2FwdHVyZSArICcpPydcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY2FwdHVyZSA9IHByZWZpeCArICcoJyArIGNhcHR1cmUgKyAnKSdcbiAgICAgIH1cblxuICAgICAgcm91dGUgKz0gY2FwdHVyZVxuICAgIH1cbiAgfVxuXG4gIHZhciBkZWxpbWl0ZXIgPSBlc2NhcGVTdHJpbmcob3B0aW9ucy5kZWxpbWl0ZXIgfHwgJy8nKVxuICB2YXIgZW5kc1dpdGhEZWxpbWl0ZXIgPSByb3V0ZS5zbGljZSgtZGVsaW1pdGVyLmxlbmd0aCkgPT09IGRlbGltaXRlclxuXG4gIC8vIEluIG5vbi1zdHJpY3QgbW9kZSB3ZSBhbGxvdyBhIHNsYXNoIGF0IHRoZSBlbmQgb2YgbWF0Y2guIElmIHRoZSBwYXRoIHRvXG4gIC8vIG1hdGNoIGFscmVhZHkgZW5kcyB3aXRoIGEgc2xhc2gsIHdlIHJlbW92ZSBpdCBmb3IgY29uc2lzdGVuY3kuIFRoZSBzbGFzaFxuICAvLyBpcyB2YWxpZCBhdCB0aGUgZW5kIG9mIGEgcGF0aCBtYXRjaCwgbm90IGluIHRoZSBtaWRkbGUuIFRoaXMgaXMgaW1wb3J0YW50XG4gIC8vIGluIG5vbi1lbmRpbmcgbW9kZSwgd2hlcmUgXCIvdGVzdC9cIiBzaG91bGRuJ3QgbWF0Y2ggXCIvdGVzdC8vcm91dGVcIi5cbiAgaWYgKCFzdHJpY3QpIHtcbiAgICByb3V0ZSA9IChlbmRzV2l0aERlbGltaXRlciA/IHJvdXRlLnNsaWNlKDAsIC1kZWxpbWl0ZXIubGVuZ3RoKSA6IHJvdXRlKSArICcoPzonICsgZGVsaW1pdGVyICsgJyg/PSQpKT8nXG4gIH1cblxuICBpZiAoZW5kKSB7XG4gICAgcm91dGUgKz0gJyQnXG4gIH0gZWxzZSB7XG4gICAgLy8gSW4gbm9uLWVuZGluZyBtb2RlLCB3ZSBuZWVkIHRoZSBjYXB0dXJpbmcgZ3JvdXBzIHRvIG1hdGNoIGFzIG11Y2ggYXNcbiAgICAvLyBwb3NzaWJsZSBieSB1c2luZyBhIHBvc2l0aXZlIGxvb2thaGVhZCB0byB0aGUgZW5kIG9yIG5leHQgcGF0aCBzZWdtZW50LlxuICAgIHJvdXRlICs9IHN0cmljdCAmJiBlbmRzV2l0aERlbGltaXRlciA/ICcnIDogJyg/PScgKyBkZWxpbWl0ZXIgKyAnfCQpJ1xuICB9XG5cbiAgcmV0dXJuIGF0dGFjaEtleXMobmV3IFJlZ0V4cCgnXicgKyByb3V0ZSwgZmxhZ3Mob3B0aW9ucykpLCBrZXlzKVxufVxuXG4vKipcbiAqIE5vcm1hbGl6ZSB0aGUgZ2l2ZW4gcGF0aCBzdHJpbmcsIHJldHVybmluZyBhIHJlZ3VsYXIgZXhwcmVzc2lvbi5cbiAqXG4gKiBBbiBlbXB0eSBhcnJheSBjYW4gYmUgcGFzc2VkIGluIGZvciB0aGUga2V5cywgd2hpY2ggd2lsbCBob2xkIHRoZVxuICogcGxhY2Vob2xkZXIga2V5IGRlc2NyaXB0aW9ucy4gRm9yIGV4YW1wbGUsIHVzaW5nIGAvdXNlci86aWRgLCBga2V5c2Agd2lsbFxuICogY29udGFpbiBgW3sgbmFtZTogJ2lkJywgZGVsaW1pdGVyOiAnLycsIG9wdGlvbmFsOiBmYWxzZSwgcmVwZWF0OiBmYWxzZSB9XWAuXG4gKlxuICogQHBhcmFtICB7KHN0cmluZ3xSZWdFeHB8QXJyYXkpfSBwYXRoXG4gKiBAcGFyYW0gIHsoQXJyYXl8T2JqZWN0KT19ICAgICAgIGtleXNcbiAqIEBwYXJhbSAge09iamVjdD19ICAgICAgICAgICAgICAgb3B0aW9uc1xuICogQHJldHVybiB7IVJlZ0V4cH1cbiAqL1xuZnVuY3Rpb24gcGF0aFRvUmVnZXhwIChwYXRoLCBrZXlzLCBvcHRpb25zKSB7XG4gIGlmICghaXNhcnJheShrZXlzKSkge1xuICAgIG9wdGlvbnMgPSAvKiogQHR5cGUgeyFPYmplY3R9ICovIChrZXlzIHx8IG9wdGlvbnMpXG4gICAga2V5cyA9IFtdXG4gIH1cblxuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fVxuXG4gIGlmIChwYXRoIGluc3RhbmNlb2YgUmVnRXhwKSB7XG4gICAgcmV0dXJuIHJlZ2V4cFRvUmVnZXhwKHBhdGgsIC8qKiBAdHlwZSB7IUFycmF5fSAqLyAoa2V5cykpXG4gIH1cblxuICBpZiAoaXNhcnJheShwYXRoKSkge1xuICAgIHJldHVybiBhcnJheVRvUmVnZXhwKC8qKiBAdHlwZSB7IUFycmF5fSAqLyAocGF0aCksIC8qKiBAdHlwZSB7IUFycmF5fSAqLyAoa2V5cyksIG9wdGlvbnMpXG4gIH1cblxuICByZXR1cm4gc3RyaW5nVG9SZWdleHAoLyoqIEB0eXBlIHtzdHJpbmd9ICovIChwYXRoKSwgLyoqIEB0eXBlIHshQXJyYXl9ICovIChrZXlzKSwgb3B0aW9ucylcbn1cblxuaW5kZXgucGFyc2UgPSBwYXJzZV8xO1xuaW5kZXguY29tcGlsZSA9IGNvbXBpbGVfMTtcbmluZGV4LnRva2Vuc1RvRnVuY3Rpb24gPSB0b2tlbnNUb0Z1bmN0aW9uXzE7XG5pbmRleC50b2tlbnNUb1JlZ0V4cCA9IHRva2Vuc1RvUmVnRXhwXzE7XG5cbi8qICAqL1xuXG5mdW5jdGlvbiBjcmVhdGVSb3V0ZU1hcCAocm91dGVzKSB7XG4gIHZhciBwYXRoTWFwID0gT2JqZWN0LmNyZWF0ZShudWxsKVxuICB2YXIgbmFtZU1hcCA9IE9iamVjdC5jcmVhdGUobnVsbClcblxuICByb3V0ZXMuZm9yRWFjaChmdW5jdGlvbiAocm91dGUpIHtcbiAgICBhZGRSb3V0ZVJlY29yZChwYXRoTWFwLCBuYW1lTWFwLCByb3V0ZSlcbiAgfSlcblxuICByZXR1cm4ge1xuICAgIHBhdGhNYXA6IHBhdGhNYXAsXG4gICAgbmFtZU1hcDogbmFtZU1hcFxuICB9XG59XG5cbmZ1bmN0aW9uIGFkZFJvdXRlUmVjb3JkIChcbiAgcGF0aE1hcCxcbiAgbmFtZU1hcCxcbiAgcm91dGUsXG4gIHBhcmVudCxcbiAgbWF0Y2hBc1xuKSB7XG4gIHZhciBwYXRoID0gcm91dGUucGF0aDtcbiAgdmFyIG5hbWUgPSByb3V0ZS5uYW1lO1xuICBhc3NlcnQocGF0aCAhPSBudWxsLCBcIlxcXCJwYXRoXFxcIiBpcyByZXF1aXJlZCBpbiBhIHJvdXRlIGNvbmZpZ3VyYXRpb24uXCIpXG5cbiAgdmFyIHJlY29yZCA9IHtcbiAgICBwYXRoOiBub3JtYWxpemVQYXRoKHBhdGgsIHBhcmVudCksXG4gICAgY29tcG9uZW50czogcm91dGUuY29tcG9uZW50cyB8fCB7IGRlZmF1bHQ6IHJvdXRlLmNvbXBvbmVudCB9LFxuICAgIGluc3RhbmNlczoge30sXG4gICAgbmFtZTogbmFtZSxcbiAgICBwYXJlbnQ6IHBhcmVudCxcbiAgICBtYXRjaEFzOiBtYXRjaEFzLFxuICAgIHJlZGlyZWN0OiByb3V0ZS5yZWRpcmVjdCxcbiAgICBiZWZvcmVFbnRlcjogcm91dGUuYmVmb3JlRW50ZXIsXG4gICAgbWV0YTogcm91dGUubWV0YSB8fCB7fVxuICB9XG5cbiAgaWYgKHJvdXRlLmNoaWxkcmVuKSB7XG4gICAgLy8gV2FybiBpZiByb3V0ZSBpcyBuYW1lZCBhbmQgaGFzIGEgZGVmYXVsdCBjaGlsZCByb3V0ZS5cbiAgICAvLyBJZiB1c2VycyBuYXZpZ2F0ZSB0byB0aGlzIHJvdXRlIGJ5IG5hbWUsIHRoZSBkZWZhdWx0IGNoaWxkIHdpbGxcbiAgICAvLyBub3QgYmUgcmVuZGVyZWQgKEdIIElzc3VlICM2MjkpXG4gICAgaWYgKFwicHJvZHVjdGlvblwiICE9PSAncHJvZHVjdGlvbicpIHt9XG4gICAgcm91dGUuY2hpbGRyZW4uZm9yRWFjaChmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICAgIGFkZFJvdXRlUmVjb3JkKHBhdGhNYXAsIG5hbWVNYXAsIGNoaWxkLCByZWNvcmQpXG4gICAgfSlcbiAgfVxuXG4gIGlmIChyb3V0ZS5hbGlhcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkocm91dGUuYWxpYXMpKSB7XG4gICAgICByb3V0ZS5hbGlhcy5mb3JFYWNoKGZ1bmN0aW9uIChhbGlhcykge1xuICAgICAgICBhZGRSb3V0ZVJlY29yZChwYXRoTWFwLCBuYW1lTWFwLCB7IHBhdGg6IGFsaWFzIH0sIHBhcmVudCwgcmVjb3JkLnBhdGgpXG4gICAgICB9KVxuICAgIH0gZWxzZSB7XG4gICAgICBhZGRSb3V0ZVJlY29yZChwYXRoTWFwLCBuYW1lTWFwLCB7IHBhdGg6IHJvdXRlLmFsaWFzIH0sIHBhcmVudCwgcmVjb3JkLnBhdGgpXG4gICAgfVxuICB9XG5cbiAgcGF0aE1hcFtyZWNvcmQucGF0aF0gPSByZWNvcmRcbiAgaWYgKG5hbWUpIHtcbiAgICBpZiAoIW5hbWVNYXBbbmFtZV0pIHtcbiAgICAgIG5hbWVNYXBbbmFtZV0gPSByZWNvcmRcbiAgICB9IGVsc2Uge1xuICAgICAgd2FybihmYWxzZSwgKFwiRHVwbGljYXRlIG5hbWVkIHJvdXRlcyBkZWZpbml0aW9uOiB7IG5hbWU6IFxcXCJcIiArIG5hbWUgKyBcIlxcXCIsIHBhdGg6IFxcXCJcIiArIChyZWNvcmQucGF0aCkgKyBcIlxcXCIgfVwiKSlcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gbm9ybWFsaXplUGF0aCAocGF0aCwgcGFyZW50KSB7XG4gIHBhdGggPSBwYXRoLnJlcGxhY2UoL1xcLyQvLCAnJylcbiAgaWYgKHBhdGhbMF0gPT09ICcvJykgeyByZXR1cm4gcGF0aCB9XG4gIGlmIChwYXJlbnQgPT0gbnVsbCkgeyByZXR1cm4gcGF0aCB9XG4gIHJldHVybiBjbGVhblBhdGgoKChwYXJlbnQucGF0aCkgKyBcIi9cIiArIHBhdGgpKVxufVxuXG4vKiAgKi9cblxudmFyIHJlZ2V4cENhY2hlID0gT2JqZWN0LmNyZWF0ZShudWxsKVxuXG52YXIgcmVnZXhwUGFyYW1zQ2FjaGUgPSBPYmplY3QuY3JlYXRlKG51bGwpXG5cbnZhciByZWdleHBDb21waWxlQ2FjaGUgPSBPYmplY3QuY3JlYXRlKG51bGwpXG5cbmZ1bmN0aW9uIGNyZWF0ZU1hdGNoZXIgKHJvdXRlcykge1xuICB2YXIgcmVmID0gY3JlYXRlUm91dGVNYXAocm91dGVzKTtcbiAgdmFyIHBhdGhNYXAgPSByZWYucGF0aE1hcDtcbiAgdmFyIG5hbWVNYXAgPSByZWYubmFtZU1hcDtcblxuICBmdW5jdGlvbiBtYXRjaCAoXG4gICAgcmF3LFxuICAgIGN1cnJlbnRSb3V0ZSxcbiAgICByZWRpcmVjdGVkRnJvbVxuICApIHtcbiAgICB2YXIgbG9jYXRpb24gPSBub3JtYWxpemVMb2NhdGlvbihyYXcsIGN1cnJlbnRSb3V0ZSlcbiAgICB2YXIgbmFtZSA9IGxvY2F0aW9uLm5hbWU7XG5cbiAgICBpZiAobmFtZSkge1xuICAgICAgdmFyIHJlY29yZCA9IG5hbWVNYXBbbmFtZV1cbiAgICAgIHZhciBwYXJhbU5hbWVzID0gZ2V0UGFyYW1zKHJlY29yZC5wYXRoKVxuXG4gICAgICBpZiAodHlwZW9mIGxvY2F0aW9uLnBhcmFtcyAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgbG9jYXRpb24ucGFyYW1zID0ge31cbiAgICAgIH1cblxuICAgICAgaWYgKGN1cnJlbnRSb3V0ZSAmJiB0eXBlb2YgY3VycmVudFJvdXRlLnBhcmFtcyA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgZm9yICh2YXIga2V5IGluIGN1cnJlbnRSb3V0ZS5wYXJhbXMpIHtcbiAgICAgICAgICBpZiAoIShrZXkgaW4gbG9jYXRpb24ucGFyYW1zKSAmJiBwYXJhbU5hbWVzLmluZGV4T2Yoa2V5KSA+IC0xKSB7XG4gICAgICAgICAgICBsb2NhdGlvbi5wYXJhbXNba2V5XSA9IGN1cnJlbnRSb3V0ZS5wYXJhbXNba2V5XVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAocmVjb3JkKSB7XG4gICAgICAgIGxvY2F0aW9uLnBhdGggPSBmaWxsUGFyYW1zKHJlY29yZC5wYXRoLCBsb2NhdGlvbi5wYXJhbXMsIChcIm5hbWVkIHJvdXRlIFxcXCJcIiArIG5hbWUgKyBcIlxcXCJcIikpXG4gICAgICAgIHJldHVybiBfY3JlYXRlUm91dGUocmVjb3JkLCBsb2NhdGlvbiwgcmVkaXJlY3RlZEZyb20pXG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChsb2NhdGlvbi5wYXRoKSB7XG4gICAgICBsb2NhdGlvbi5wYXJhbXMgPSB7fVxuICAgICAgZm9yICh2YXIgcGF0aCBpbiBwYXRoTWFwKSB7XG4gICAgICAgIGlmIChtYXRjaFJvdXRlKHBhdGgsIGxvY2F0aW9uLnBhcmFtcywgbG9jYXRpb24ucGF0aCkpIHtcbiAgICAgICAgICByZXR1cm4gX2NyZWF0ZVJvdXRlKHBhdGhNYXBbcGF0aF0sIGxvY2F0aW9uLCByZWRpcmVjdGVkRnJvbSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICAvLyBubyBtYXRjaFxuICAgIHJldHVybiBfY3JlYXRlUm91dGUobnVsbCwgbG9jYXRpb24pXG4gIH1cblxuICBmdW5jdGlvbiByZWRpcmVjdCAoXG4gICAgcmVjb3JkLFxuICAgIGxvY2F0aW9uXG4gICkge1xuICAgIHZhciBvcmlnaW5hbFJlZGlyZWN0ID0gcmVjb3JkLnJlZGlyZWN0XG4gICAgdmFyIHJlZGlyZWN0ID0gdHlwZW9mIG9yaWdpbmFsUmVkaXJlY3QgPT09ICdmdW5jdGlvbidcbiAgICAgICAgPyBvcmlnaW5hbFJlZGlyZWN0KGNyZWF0ZVJvdXRlKHJlY29yZCwgbG9jYXRpb24pKVxuICAgICAgICA6IG9yaWdpbmFsUmVkaXJlY3RcblxuICAgIGlmICh0eXBlb2YgcmVkaXJlY3QgPT09ICdzdHJpbmcnKSB7XG4gICAgICByZWRpcmVjdCA9IHsgcGF0aDogcmVkaXJlY3QgfVxuICAgIH1cblxuICAgIGlmICghcmVkaXJlY3QgfHwgdHlwZW9mIHJlZGlyZWN0ICE9PSAnb2JqZWN0Jykge1xuICAgICAgd2FybihmYWxzZSwgKFwiaW52YWxpZCByZWRpcmVjdCBvcHRpb246IFwiICsgKEpTT04uc3RyaW5naWZ5KHJlZGlyZWN0KSkpKVxuICAgICAgcmV0dXJuIF9jcmVhdGVSb3V0ZShudWxsLCBsb2NhdGlvbilcbiAgICB9XG5cbiAgICB2YXIgcmUgPSByZWRpcmVjdFxuICAgIHZhciBuYW1lID0gcmUubmFtZTtcbiAgICB2YXIgcGF0aCA9IHJlLnBhdGg7XG4gICAgdmFyIHF1ZXJ5ID0gbG9jYXRpb24ucXVlcnk7XG4gICAgdmFyIGhhc2ggPSBsb2NhdGlvbi5oYXNoO1xuICAgIHZhciBwYXJhbXMgPSBsb2NhdGlvbi5wYXJhbXM7XG4gICAgcXVlcnkgPSByZS5oYXNPd25Qcm9wZXJ0eSgncXVlcnknKSA/IHJlLnF1ZXJ5IDogcXVlcnlcbiAgICBoYXNoID0gcmUuaGFzT3duUHJvcGVydHkoJ2hhc2gnKSA/IHJlLmhhc2ggOiBoYXNoXG4gICAgcGFyYW1zID0gcmUuaGFzT3duUHJvcGVydHkoJ3BhcmFtcycpID8gcmUucGFyYW1zIDogcGFyYW1zXG5cbiAgICBpZiAobmFtZSkge1xuICAgICAgLy8gcmVzb2x2ZWQgbmFtZWQgZGlyZWN0XG4gICAgICB2YXIgdGFyZ2V0UmVjb3JkID0gbmFtZU1hcFtuYW1lXVxuICAgICAgYXNzZXJ0KHRhcmdldFJlY29yZCwgKFwicmVkaXJlY3QgZmFpbGVkOiBuYW1lZCByb3V0ZSBcXFwiXCIgKyBuYW1lICsgXCJcXFwiIG5vdCBmb3VuZC5cIikpXG4gICAgICByZXR1cm4gbWF0Y2goe1xuICAgICAgICBfbm9ybWFsaXplZDogdHJ1ZSxcbiAgICAgICAgbmFtZTogbmFtZSxcbiAgICAgICAgcXVlcnk6IHF1ZXJ5LFxuICAgICAgICBoYXNoOiBoYXNoLFxuICAgICAgICBwYXJhbXM6IHBhcmFtc1xuICAgICAgfSwgdW5kZWZpbmVkLCBsb2NhdGlvbilcbiAgICB9IGVsc2UgaWYgKHBhdGgpIHtcbiAgICAgIC8vIDEuIHJlc29sdmUgcmVsYXRpdmUgcmVkaXJlY3RcbiAgICAgIHZhciByYXdQYXRoID0gcmVzb2x2ZVJlY29yZFBhdGgocGF0aCwgcmVjb3JkKVxuICAgICAgLy8gMi4gcmVzb2x2ZSBwYXJhbXNcbiAgICAgIHZhciByZXNvbHZlZFBhdGggPSBmaWxsUGFyYW1zKHJhd1BhdGgsIHBhcmFtcywgKFwicmVkaXJlY3Qgcm91dGUgd2l0aCBwYXRoIFxcXCJcIiArIHJhd1BhdGggKyBcIlxcXCJcIikpXG4gICAgICAvLyAzLiByZW1hdGNoIHdpdGggZXhpc3RpbmcgcXVlcnkgYW5kIGhhc2hcbiAgICAgIHJldHVybiBtYXRjaCh7XG4gICAgICAgIF9ub3JtYWxpemVkOiB0cnVlLFxuICAgICAgICBwYXRoOiByZXNvbHZlZFBhdGgsXG4gICAgICAgIHF1ZXJ5OiBxdWVyeSxcbiAgICAgICAgaGFzaDogaGFzaFxuICAgICAgfSwgdW5kZWZpbmVkLCBsb2NhdGlvbilcbiAgICB9IGVsc2Uge1xuICAgICAgd2FybihmYWxzZSwgKFwiaW52YWxpZCByZWRpcmVjdCBvcHRpb246IFwiICsgKEpTT04uc3RyaW5naWZ5KHJlZGlyZWN0KSkpKVxuICAgICAgcmV0dXJuIF9jcmVhdGVSb3V0ZShudWxsLCBsb2NhdGlvbilcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBhbGlhcyAoXG4gICAgcmVjb3JkLFxuICAgIGxvY2F0aW9uLFxuICAgIG1hdGNoQXNcbiAgKSB7XG4gICAgdmFyIGFsaWFzZWRQYXRoID0gZmlsbFBhcmFtcyhtYXRjaEFzLCBsb2NhdGlvbi5wYXJhbXMsIChcImFsaWFzZWQgcm91dGUgd2l0aCBwYXRoIFxcXCJcIiArIG1hdGNoQXMgKyBcIlxcXCJcIikpXG4gICAgdmFyIGFsaWFzZWRNYXRjaCA9IG1hdGNoKHtcbiAgICAgIF9ub3JtYWxpemVkOiB0cnVlLFxuICAgICAgcGF0aDogYWxpYXNlZFBhdGhcbiAgICB9KVxuICAgIGlmIChhbGlhc2VkTWF0Y2gpIHtcbiAgICAgIHZhciBtYXRjaGVkID0gYWxpYXNlZE1hdGNoLm1hdGNoZWRcbiAgICAgIHZhciBhbGlhc2VkUmVjb3JkID0gbWF0Y2hlZFttYXRjaGVkLmxlbmd0aCAtIDFdXG4gICAgICBsb2NhdGlvbi5wYXJhbXMgPSBhbGlhc2VkTWF0Y2gucGFyYW1zXG4gICAgICByZXR1cm4gX2NyZWF0ZVJvdXRlKGFsaWFzZWRSZWNvcmQsIGxvY2F0aW9uKVxuICAgIH1cbiAgICByZXR1cm4gX2NyZWF0ZVJvdXRlKG51bGwsIGxvY2F0aW9uKVxuICB9XG5cbiAgZnVuY3Rpb24gX2NyZWF0ZVJvdXRlIChcbiAgICByZWNvcmQsXG4gICAgbG9jYXRpb24sXG4gICAgcmVkaXJlY3RlZEZyb21cbiAgKSB7XG4gICAgaWYgKHJlY29yZCAmJiByZWNvcmQucmVkaXJlY3QpIHtcbiAgICAgIHJldHVybiByZWRpcmVjdChyZWNvcmQsIHJlZGlyZWN0ZWRGcm9tIHx8IGxvY2F0aW9uKVxuICAgIH1cbiAgICBpZiAocmVjb3JkICYmIHJlY29yZC5tYXRjaEFzKSB7XG4gICAgICByZXR1cm4gYWxpYXMocmVjb3JkLCBsb2NhdGlvbiwgcmVjb3JkLm1hdGNoQXMpXG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVSb3V0ZShyZWNvcmQsIGxvY2F0aW9uLCByZWRpcmVjdGVkRnJvbSlcbiAgfVxuXG4gIHJldHVybiBtYXRjaFxufVxuXG5mdW5jdGlvbiBnZXRSb3V0ZVJlZ2V4IChwYXRoKSB7XG4gIHZhciBoaXQgPSByZWdleHBDYWNoZVtwYXRoXVxuICB2YXIga2V5cywgcmVnZXhwXG5cbiAgaWYgKGhpdCkge1xuICAgIGtleXMgPSBoaXQua2V5c1xuICAgIHJlZ2V4cCA9IGhpdC5yZWdleHBcbiAgfSBlbHNlIHtcbiAgICBrZXlzID0gW11cbiAgICByZWdleHAgPSBpbmRleChwYXRoLCBrZXlzKVxuICAgIHJlZ2V4cENhY2hlW3BhdGhdID0geyBrZXlzOiBrZXlzLCByZWdleHA6IHJlZ2V4cCB9XG4gIH1cblxuICByZXR1cm4geyBrZXlzOiBrZXlzLCByZWdleHA6IHJlZ2V4cCB9XG59XG5cbmZ1bmN0aW9uIG1hdGNoUm91dGUgKFxuICBwYXRoLFxuICBwYXJhbXMsXG4gIHBhdGhuYW1lXG4pIHtcbiAgdmFyIHJlZiA9IGdldFJvdXRlUmVnZXgocGF0aCk7XG4gIHZhciByZWdleHAgPSByZWYucmVnZXhwO1xuICB2YXIga2V5cyA9IHJlZi5rZXlzO1xuICB2YXIgbSA9IHBhdGhuYW1lLm1hdGNoKHJlZ2V4cClcblxuICBpZiAoIW0pIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfSBlbHNlIGlmICghcGFyYW1zKSB7XG4gICAgcmV0dXJuIHRydWVcbiAgfVxuXG4gIGZvciAodmFyIGkgPSAxLCBsZW4gPSBtLmxlbmd0aDsgaSA8IGxlbjsgKytpKSB7XG4gICAgdmFyIGtleSA9IGtleXNbaSAtIDFdXG4gICAgdmFyIHZhbCA9IHR5cGVvZiBtW2ldID09PSAnc3RyaW5nJyA/IGRlY29kZVVSSUNvbXBvbmVudChtW2ldKSA6IG1baV1cbiAgICBpZiAoa2V5KSB7IHBhcmFtc1trZXkubmFtZV0gPSB2YWwgfVxuICB9XG5cbiAgcmV0dXJuIHRydWVcbn1cblxuZnVuY3Rpb24gZmlsbFBhcmFtcyAoXG4gIHBhdGgsXG4gIHBhcmFtcyxcbiAgcm91dGVNc2dcbikge1xuICB0cnkge1xuICAgIHZhciBmaWxsZXIgPVxuICAgICAgcmVnZXhwQ29tcGlsZUNhY2hlW3BhdGhdIHx8XG4gICAgICAocmVnZXhwQ29tcGlsZUNhY2hlW3BhdGhdID0gaW5kZXguY29tcGlsZShwYXRoKSlcbiAgICByZXR1cm4gZmlsbGVyKHBhcmFtcyB8fCB7fSwgeyBwcmV0dHk6IHRydWUgfSlcbiAgfSBjYXRjaCAoZSkge1xuICAgIGFzc2VydChmYWxzZSwgKFwibWlzc2luZyBwYXJhbSBmb3IgXCIgKyByb3V0ZU1zZyArIFwiOiBcIiArIChlLm1lc3NhZ2UpKSlcbiAgICByZXR1cm4gJydcbiAgfVxufVxuXG5mdW5jdGlvbiBnZXRQYXJhbXMgKHBhdGgpIHtcbiAgcmV0dXJuIHJlZ2V4cFBhcmFtc0NhY2hlW3BhdGhdIHx8XG4gICAgKHJlZ2V4cFBhcmFtc0NhY2hlW3BhdGhdID0gZ2V0Um91dGVSZWdleChwYXRoKS5rZXlzLm1hcChmdW5jdGlvbiAoa2V5KSB7IHJldHVybiBrZXkubmFtZTsgfSkpXG59XG5cbmZ1bmN0aW9uIHJlc29sdmVSZWNvcmRQYXRoIChwYXRoLCByZWNvcmQpIHtcbiAgcmV0dXJuIHJlc29sdmVQYXRoKHBhdGgsIHJlY29yZC5wYXJlbnQgPyByZWNvcmQucGFyZW50LnBhdGggOiAnLycsIHRydWUpXG59XG5cbi8qICAqL1xuXG52YXIgaW5Ccm93c2VyID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCdcblxudmFyIHN1cHBvcnRzSGlzdG9yeSA9IGluQnJvd3NlciAmJiAoZnVuY3Rpb24gKCkge1xuICB2YXIgdWEgPSB3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudFxuXG4gIGlmIChcbiAgICAodWEuaW5kZXhPZignQW5kcm9pZCAyLicpICE9PSAtMSB8fCB1YS5pbmRleE9mKCdBbmRyb2lkIDQuMCcpICE9PSAtMSkgJiZcbiAgICB1YS5pbmRleE9mKCdNb2JpbGUgU2FmYXJpJykgIT09IC0xICYmXG4gICAgdWEuaW5kZXhPZignQ2hyb21lJykgPT09IC0xICYmXG4gICAgdWEuaW5kZXhPZignV2luZG93cyBQaG9uZScpID09PSAtMVxuICApIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIHJldHVybiB3aW5kb3cuaGlzdG9yeSAmJiAncHVzaFN0YXRlJyBpbiB3aW5kb3cuaGlzdG9yeVxufSkoKVxuXG4vKiAgKi9cblxuZnVuY3Rpb24gcnVuUXVldWUgKHF1ZXVlLCBmbiwgY2IpIHtcbiAgdmFyIHN0ZXAgPSBmdW5jdGlvbiAoaW5kZXgpIHtcbiAgICBpZiAoaW5kZXggPj0gcXVldWUubGVuZ3RoKSB7XG4gICAgICBjYigpXG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChxdWV1ZVtpbmRleF0pIHtcbiAgICAgICAgZm4ocXVldWVbaW5kZXhdLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgc3RlcChpbmRleCArIDEpXG4gICAgICAgIH0pXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzdGVwKGluZGV4ICsgMSlcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgc3RlcCgwKVxufVxuXG4vKiAgKi9cblxuXG52YXIgSGlzdG9yeSA9IGZ1bmN0aW9uIEhpc3RvcnkgKHJvdXRlciwgYmFzZSkge1xuICB0aGlzLnJvdXRlciA9IHJvdXRlclxuICB0aGlzLmJhc2UgPSBub3JtYWxpemVCYXNlKGJhc2UpXG4gIC8vIHN0YXJ0IHdpdGggYSByb3V0ZSBvYmplY3QgdGhhdCBzdGFuZHMgZm9yIFwibm93aGVyZVwiXG4gIHRoaXMuY3VycmVudCA9IFNUQVJUXG4gIHRoaXMucGVuZGluZyA9IG51bGxcbn07XG5cbkhpc3RvcnkucHJvdG90eXBlLmxpc3RlbiA9IGZ1bmN0aW9uIGxpc3RlbiAoY2IpIHtcbiAgdGhpcy5jYiA9IGNiXG59O1xuXG5IaXN0b3J5LnByb3RvdHlwZS50cmFuc2l0aW9uVG8gPSBmdW5jdGlvbiB0cmFuc2l0aW9uVG8gKGxvY2F0aW9uLCBjYikge1xuICAgIHZhciB0aGlzJDEgPSB0aGlzO1xuXG4gIHZhciByb3V0ZSA9IHRoaXMucm91dGVyLm1hdGNoKGxvY2F0aW9uLCB0aGlzLmN1cnJlbnQpXG4gIHRoaXMuY29uZmlybVRyYW5zaXRpb24ocm91dGUsIGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzJDEudXBkYXRlUm91dGUocm91dGUpXG4gICAgY2IgJiYgY2Iocm91dGUpXG4gICAgdGhpcyQxLmVuc3VyZVVSTCgpXG4gIH0pXG59O1xuXG5IaXN0b3J5LnByb3RvdHlwZS5jb25maXJtVHJhbnNpdGlvbiA9IGZ1bmN0aW9uIGNvbmZpcm1UcmFuc2l0aW9uIChyb3V0ZSwgY2IpIHtcbiAgICB2YXIgdGhpcyQxID0gdGhpcztcblxuICB2YXIgY3VycmVudCA9IHRoaXMuY3VycmVudFxuICBpZiAoaXNTYW1lUm91dGUocm91dGUsIGN1cnJlbnQpKSB7XG4gICAgdGhpcy5lbnN1cmVVUkwoKVxuICAgIHJldHVyblxuICB9XG5cbiAgdmFyIHJlZiA9IHJlc29sdmVRdWV1ZSh0aGlzLmN1cnJlbnQubWF0Y2hlZCwgcm91dGUubWF0Y2hlZCk7XG4gICAgdmFyIGRlYWN0aXZhdGVkID0gcmVmLmRlYWN0aXZhdGVkO1xuICAgIHZhciBhY3RpdmF0ZWQgPSByZWYuYWN0aXZhdGVkO1xuXG4gIHZhciBxdWV1ZSA9IFtdLmNvbmNhdChcbiAgICAvLyBpbi1jb21wb25lbnQgbGVhdmUgZ3VhcmRzXG4gICAgZXh0cmFjdExlYXZlR3VhcmRzKGRlYWN0aXZhdGVkKSxcbiAgICAvLyBnbG9iYWwgYmVmb3JlIGhvb2tzXG4gICAgdGhpcy5yb3V0ZXIuYmVmb3JlSG9va3MsXG4gICAgLy8gZW50ZXIgZ3VhcmRzXG4gICAgYWN0aXZhdGVkLm1hcChmdW5jdGlvbiAobSkgeyByZXR1cm4gbS5iZWZvcmVFbnRlcjsgfSksXG4gICAgLy8gYXN5bmMgY29tcG9uZW50c1xuICAgIHJlc29sdmVBc3luY0NvbXBvbmVudHMoYWN0aXZhdGVkKVxuICApXG5cbiAgdGhpcy5wZW5kaW5nID0gcm91dGVcbiAgdmFyIGl0ZXJhdG9yID0gZnVuY3Rpb24gKGhvb2ssIG5leHQpIHtcbiAgICBpZiAodGhpcyQxLnBlbmRpbmcgIT09IHJvdXRlKSB7IHJldHVybiB9XG4gICAgaG9vayhyb3V0ZSwgY3VycmVudCwgZnVuY3Rpb24gKHRvKSB7XG4gICAgICBpZiAodG8gPT09IGZhbHNlKSB7XG4gICAgICAgIC8vIG5leHQoZmFsc2UpIC0+IGFib3J0IG5hdmlnYXRpb24sIGVuc3VyZSBjdXJyZW50IFVSTFxuICAgICAgICB0aGlzJDEuZW5zdXJlVVJMKHRydWUpXG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZiB0byA9PT0gJ3N0cmluZycgfHwgdHlwZW9mIHRvID09PSAnb2JqZWN0Jykge1xuICAgICAgICAvLyBuZXh0KCcvJykgb3IgbmV4dCh7IHBhdGg6ICcvJyB9KSAtPiByZWRpcmVjdFxuICAgICAgICB0aGlzJDEucHVzaCh0bylcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIGNvbmZpcm0gdHJhbnNpdGlvbiBhbmQgcGFzcyBvbiB0aGUgdmFsdWVcbiAgICAgICAgbmV4dCh0bylcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgcnVuUXVldWUocXVldWUsIGl0ZXJhdG9yLCBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHBvc3RFbnRlckNicyA9IFtdXG4gICAgdmFyIGVudGVyR3VhcmRzID0gZXh0cmFjdEVudGVyR3VhcmRzKGFjdGl2YXRlZCwgcG9zdEVudGVyQ2JzLCBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gdGhpcyQxLmN1cnJlbnQgPT09IHJvdXRlXG4gICAgfSlcbiAgICAvLyB3YWl0IHVudGlsIGFzeW5jIGNvbXBvbmVudHMgYXJlIHJlc29sdmVkIGJlZm9yZVxuICAgIC8vIGV4dHJhY3RpbmcgaW4tY29tcG9uZW50IGVudGVyIGd1YXJkc1xuICAgIHJ1blF1ZXVlKGVudGVyR3VhcmRzLCBpdGVyYXRvciwgZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKHRoaXMkMS5wZW5kaW5nID09PSByb3V0ZSkge1xuICAgICAgICB0aGlzJDEucGVuZGluZyA9IG51bGxcbiAgICAgICAgY2Iocm91dGUpXG4gICAgICAgIHRoaXMkMS5yb3V0ZXIuYXBwLiRuZXh0VGljayhmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcG9zdEVudGVyQ2JzLmZvckVhY2goZnVuY3Rpb24gKGNiKSB7IHJldHVybiBjYigpOyB9KVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH0pXG4gIH0pXG59O1xuXG5IaXN0b3J5LnByb3RvdHlwZS51cGRhdGVSb3V0ZSA9IGZ1bmN0aW9uIHVwZGF0ZVJvdXRlIChyb3V0ZSkge1xuICB2YXIgcHJldiA9IHRoaXMuY3VycmVudFxuICB0aGlzLmN1cnJlbnQgPSByb3V0ZVxuICB0aGlzLmNiICYmIHRoaXMuY2Iocm91dGUpXG4gIHRoaXMucm91dGVyLmFmdGVySG9va3MuZm9yRWFjaChmdW5jdGlvbiAoaG9vaykge1xuICAgIGhvb2sgJiYgaG9vayhyb3V0ZSwgcHJldilcbiAgfSlcbn07XG5cbmZ1bmN0aW9uIG5vcm1hbGl6ZUJhc2UgKGJhc2UpIHtcbiAgaWYgKCFiYXNlKSB7XG4gICAgaWYgKGluQnJvd3Nlcikge1xuICAgICAgLy8gcmVzcGVjdCA8YmFzZT4gdGFnXG4gICAgICB2YXIgYmFzZUVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYmFzZScpXG4gICAgICBiYXNlID0gYmFzZUVsID8gYmFzZUVsLmdldEF0dHJpYnV0ZSgnaHJlZicpIDogJy8nXG4gICAgfSBlbHNlIHtcbiAgICAgIGJhc2UgPSAnLydcbiAgICB9XG4gIH1cbiAgLy8gbWFrZSBzdXJlIHRoZXJlJ3MgdGhlIHN0YXJ0aW5nIHNsYXNoXG4gIGlmIChiYXNlLmNoYXJBdCgwKSAhPT0gJy8nKSB7XG4gICAgYmFzZSA9ICcvJyArIGJhc2VcbiAgfVxuICAvLyByZW1vdmUgdHJhaWxpbmcgc2xhc2hcbiAgcmV0dXJuIGJhc2UucmVwbGFjZSgvXFwvJC8sICcnKVxufVxuXG5mdW5jdGlvbiByZXNvbHZlUXVldWUgKFxuICBjdXJyZW50LFxuICBuZXh0XG4pIHtcbiAgdmFyIGlcbiAgdmFyIG1heCA9IE1hdGgubWF4KGN1cnJlbnQubGVuZ3RoLCBuZXh0Lmxlbmd0aClcbiAgZm9yIChpID0gMDsgaSA8IG1heDsgaSsrKSB7XG4gICAgaWYgKGN1cnJlbnRbaV0gIT09IG5leHRbaV0pIHtcbiAgICAgIGJyZWFrXG4gICAgfVxuICB9XG4gIHJldHVybiB7XG4gICAgYWN0aXZhdGVkOiBuZXh0LnNsaWNlKGkpLFxuICAgIGRlYWN0aXZhdGVkOiBjdXJyZW50LnNsaWNlKGkpXG4gIH1cbn1cblxuZnVuY3Rpb24gZXh0cmFjdEd1YXJkIChcbiAgZGVmLFxuICBrZXlcbikge1xuICBpZiAodHlwZW9mIGRlZiAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIC8vIGV4dGVuZCBub3cgc28gdGhhdCBnbG9iYWwgbWl4aW5zIGFyZSBhcHBsaWVkLlxuICAgIGRlZiA9IF9WdWUuZXh0ZW5kKGRlZilcbiAgfVxuICByZXR1cm4gZGVmLm9wdGlvbnNba2V5XVxufVxuXG5mdW5jdGlvbiBleHRyYWN0TGVhdmVHdWFyZHMgKG1hdGNoZWQpIHtcbiAgcmV0dXJuIGZsYXR0ZW4oZmxhdE1hcENvbXBvbmVudHMobWF0Y2hlZCwgZnVuY3Rpb24gKGRlZiwgaW5zdGFuY2UpIHtcbiAgICB2YXIgZ3VhcmQgPSBleHRyYWN0R3VhcmQoZGVmLCAnYmVmb3JlUm91dGVMZWF2ZScpXG4gICAgaWYgKGd1YXJkKSB7XG4gICAgICByZXR1cm4gQXJyYXkuaXNBcnJheShndWFyZClcbiAgICAgICAgPyBndWFyZC5tYXAoZnVuY3Rpb24gKGd1YXJkKSB7IHJldHVybiB3cmFwTGVhdmVHdWFyZChndWFyZCwgaW5zdGFuY2UpOyB9KVxuICAgICAgICA6IHdyYXBMZWF2ZUd1YXJkKGd1YXJkLCBpbnN0YW5jZSlcbiAgICB9XG4gIH0pLnJldmVyc2UoKSlcbn1cblxuZnVuY3Rpb24gd3JhcExlYXZlR3VhcmQgKFxuICBndWFyZCxcbiAgaW5zdGFuY2Vcbikge1xuICByZXR1cm4gZnVuY3Rpb24gcm91dGVMZWF2ZUd1YXJkICgpIHtcbiAgICByZXR1cm4gZ3VhcmQuYXBwbHkoaW5zdGFuY2UsIGFyZ3VtZW50cylcbiAgfVxufVxuXG5mdW5jdGlvbiBleHRyYWN0RW50ZXJHdWFyZHMgKFxuICBtYXRjaGVkLFxuICBjYnMsXG4gIGlzVmFsaWRcbikge1xuICByZXR1cm4gZmxhdHRlbihmbGF0TWFwQ29tcG9uZW50cyhtYXRjaGVkLCBmdW5jdGlvbiAoZGVmLCBfLCBtYXRjaCwga2V5KSB7XG4gICAgdmFyIGd1YXJkID0gZXh0cmFjdEd1YXJkKGRlZiwgJ2JlZm9yZVJvdXRlRW50ZXInKVxuICAgIGlmIChndWFyZCkge1xuICAgICAgcmV0dXJuIEFycmF5LmlzQXJyYXkoZ3VhcmQpXG4gICAgICAgID8gZ3VhcmQubWFwKGZ1bmN0aW9uIChndWFyZCkgeyByZXR1cm4gd3JhcEVudGVyR3VhcmQoZ3VhcmQsIGNicywgbWF0Y2gsIGtleSwgaXNWYWxpZCk7IH0pXG4gICAgICAgIDogd3JhcEVudGVyR3VhcmQoZ3VhcmQsIGNicywgbWF0Y2gsIGtleSwgaXNWYWxpZClcbiAgICB9XG4gIH0pKVxufVxuXG5mdW5jdGlvbiB3cmFwRW50ZXJHdWFyZCAoXG4gIGd1YXJkLFxuICBjYnMsXG4gIG1hdGNoLFxuICBrZXksXG4gIGlzVmFsaWRcbikge1xuICByZXR1cm4gZnVuY3Rpb24gcm91dGVFbnRlckd1YXJkICh0bywgZnJvbSwgbmV4dCkge1xuICAgIHJldHVybiBndWFyZCh0bywgZnJvbSwgZnVuY3Rpb24gKGNiKSB7XG4gICAgICBuZXh0KGNiKVxuICAgICAgaWYgKHR5cGVvZiBjYiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBjYnMucHVzaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgLy8gIzc1MFxuICAgICAgICAgIC8vIGlmIGEgcm91dGVyLXZpZXcgaXMgd3JhcHBlZCB3aXRoIGFuIG91dC1pbiB0cmFuc2l0aW9uLFxuICAgICAgICAgIC8vIHRoZSBpbnN0YW5jZSBtYXkgbm90IGhhdmUgYmVlbiByZWdpc3RlcmVkIGF0IHRoaXMgdGltZS5cbiAgICAgICAgICAvLyB3ZSB3aWxsIG5lZWQgdG8gcG9sbCBmb3IgcmVnaXN0cmF0aW9uIHVudGlsIGN1cnJlbnQgcm91dGVcbiAgICAgICAgICAvLyBpcyBubyBsb25nZXIgdmFsaWQuXG4gICAgICAgICAgcG9sbChjYiwgbWF0Y2guaW5zdGFuY2VzLCBrZXksIGlzVmFsaWQpXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfSlcbiAgfVxufVxuXG5mdW5jdGlvbiBwb2xsIChcbiAgY2IsIC8vIHNvbWVob3cgZmxvdyBjYW5ub3QgaW5mZXIgdGhpcyBpcyBhIGZ1bmN0aW9uXG4gIGluc3RhbmNlcyxcbiAga2V5LFxuICBpc1ZhbGlkXG4pIHtcbiAgaWYgKGluc3RhbmNlc1trZXldKSB7XG4gICAgY2IoaW5zdGFuY2VzW2tleV0pXG4gIH0gZWxzZSBpZiAoaXNWYWxpZCgpKSB7XG4gICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICBwb2xsKGNiLCBpbnN0YW5jZXMsIGtleSwgaXNWYWxpZClcbiAgICB9LCAxNilcbiAgfVxufVxuXG5mdW5jdGlvbiByZXNvbHZlQXN5bmNDb21wb25lbnRzIChtYXRjaGVkKSB7XG4gIHJldHVybiBmbGF0TWFwQ29tcG9uZW50cyhtYXRjaGVkLCBmdW5jdGlvbiAoZGVmLCBfLCBtYXRjaCwga2V5KSB7XG4gICAgLy8gaWYgaXQncyBhIGZ1bmN0aW9uIGFuZCBkb2Vzbid0IGhhdmUgVnVlIG9wdGlvbnMgYXR0YWNoZWQsXG4gICAgLy8gYXNzdW1lIGl0J3MgYW4gYXN5bmMgY29tcG9uZW50IHJlc29sdmUgZnVuY3Rpb24uXG4gICAgLy8gd2UgYXJlIG5vdCB1c2luZyBWdWUncyBkZWZhdWx0IGFzeW5jIHJlc29sdmluZyBtZWNoYW5pc20gYmVjYXVzZVxuICAgIC8vIHdlIHdhbnQgdG8gaGFsdCB0aGUgbmF2aWdhdGlvbiB1bnRpbCB0aGUgaW5jb21pbmcgY29tcG9uZW50IGhhcyBiZWVuXG4gICAgLy8gcmVzb2x2ZWQuXG4gICAgaWYgKHR5cGVvZiBkZWYgPT09ICdmdW5jdGlvbicgJiYgIWRlZi5vcHRpb25zKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24gKHRvLCBmcm9tLCBuZXh0KSB7XG4gICAgICAgIHZhciByZXNvbHZlID0gZnVuY3Rpb24gKHJlc29sdmVkRGVmKSB7XG4gICAgICAgICAgbWF0Y2guY29tcG9uZW50c1trZXldID0gcmVzb2x2ZWREZWZcbiAgICAgICAgICBuZXh0KClcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciByZWplY3QgPSBmdW5jdGlvbiAocmVhc29uKSB7XG4gICAgICAgICAgd2FybihmYWxzZSwgKFwiRmFpbGVkIHRvIHJlc29sdmUgYXN5bmMgY29tcG9uZW50IFwiICsga2V5ICsgXCI6IFwiICsgcmVhc29uKSlcbiAgICAgICAgICBuZXh0KGZhbHNlKVxuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHJlcyA9IGRlZihyZXNvbHZlLCByZWplY3QpXG4gICAgICAgIGlmIChyZXMgJiYgdHlwZW9mIHJlcy50aGVuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgcmVzLnRoZW4ocmVzb2x2ZSwgcmVqZWN0KVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9KVxufVxuXG5mdW5jdGlvbiBmbGF0TWFwQ29tcG9uZW50cyAoXG4gIG1hdGNoZWQsXG4gIGZuXG4pIHtcbiAgcmV0dXJuIGZsYXR0ZW4obWF0Y2hlZC5tYXAoZnVuY3Rpb24gKG0pIHtcbiAgICByZXR1cm4gT2JqZWN0LmtleXMobS5jb21wb25lbnRzKS5tYXAoZnVuY3Rpb24gKGtleSkgeyByZXR1cm4gZm4oXG4gICAgICBtLmNvbXBvbmVudHNba2V5XSxcbiAgICAgIG0uaW5zdGFuY2VzW2tleV0sXG4gICAgICBtLCBrZXlcbiAgICApOyB9KVxuICB9KSlcbn1cblxuZnVuY3Rpb24gZmxhdHRlbiAoYXJyKSB7XG4gIHJldHVybiBBcnJheS5wcm90b3R5cGUuY29uY2F0LmFwcGx5KFtdLCBhcnIpXG59XG5cbi8qICAqL1xuXG52YXIgcG9zaXRpb25TdG9yZSA9IE9iamVjdC5jcmVhdGUobnVsbClcblxuZnVuY3Rpb24gc2F2ZVNjcm9sbFBvc2l0aW9uIChrZXkpIHtcbiAgaWYgKCFrZXkpIHsgcmV0dXJuIH1cbiAgcG9zaXRpb25TdG9yZVtrZXldID0ge1xuICAgIHg6IHdpbmRvdy5wYWdlWE9mZnNldCxcbiAgICB5OiB3aW5kb3cucGFnZVlPZmZzZXRcbiAgfVxufVxuXG5mdW5jdGlvbiBnZXRTY3JvbGxQb3NpdGlvbiAoa2V5KSB7XG4gIGlmICgha2V5KSB7IHJldHVybiB9XG4gIHJldHVybiBwb3NpdGlvblN0b3JlW2tleV1cbn1cblxuZnVuY3Rpb24gZ2V0RWxlbWVudFBvc2l0aW9uIChlbCkge1xuICB2YXIgZG9jUmVjdCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuICB2YXIgZWxSZWN0ID0gZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcbiAgcmV0dXJuIHtcbiAgICB4OiBlbFJlY3QubGVmdCAtIGRvY1JlY3QubGVmdCxcbiAgICB5OiBlbFJlY3QudG9wIC0gZG9jUmVjdC50b3BcbiAgfVxufVxuXG5mdW5jdGlvbiBpc1ZhbGlkUG9zaXRpb24gKG9iaikge1xuICByZXR1cm4gaXNOdW1iZXIob2JqLngpIHx8IGlzTnVtYmVyKG9iai55KVxufVxuXG5mdW5jdGlvbiBub3JtYWxpemVQb3NpdGlvbiAob2JqKSB7XG4gIHJldHVybiB7XG4gICAgeDogaXNOdW1iZXIob2JqLngpID8gb2JqLnggOiB3aW5kb3cucGFnZVhPZmZzZXQsXG4gICAgeTogaXNOdW1iZXIob2JqLnkpID8gb2JqLnkgOiB3aW5kb3cucGFnZVlPZmZzZXRcbiAgfVxufVxuXG5mdW5jdGlvbiBpc051bWJlciAodikge1xuICByZXR1cm4gdHlwZW9mIHYgPT09ICdudW1iZXInXG59XG5cbi8qICAqL1xuXG5cbnZhciBnZW5LZXkgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBTdHJpbmcoRGF0ZS5ub3coKSk7IH1cbnZhciBfa2V5ID0gZ2VuS2V5KClcblxudmFyIEhUTUw1SGlzdG9yeSA9IChmdW5jdGlvbiAoSGlzdG9yeSkge1xuICBmdW5jdGlvbiBIVE1MNUhpc3RvcnkgKHJvdXRlciwgYmFzZSkge1xuICAgIHZhciB0aGlzJDEgPSB0aGlzO1xuXG4gICAgSGlzdG9yeS5jYWxsKHRoaXMsIHJvdXRlciwgYmFzZSlcblxuICAgIHZhciBleHBlY3RTY3JvbGwgPSByb3V0ZXIub3B0aW9ucy5zY3JvbGxCZWhhdmlvclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdwb3BzdGF0ZScsIGZ1bmN0aW9uIChlKSB7XG4gICAgICBfa2V5ID0gZS5zdGF0ZSAmJiBlLnN0YXRlLmtleVxuICAgICAgdmFyIGN1cnJlbnQgPSB0aGlzJDEuY3VycmVudFxuICAgICAgdGhpcyQxLnRyYW5zaXRpb25UbyhnZXRMb2NhdGlvbih0aGlzJDEuYmFzZSksIGZ1bmN0aW9uIChuZXh0KSB7XG4gICAgICAgIGlmIChleHBlY3RTY3JvbGwpIHtcbiAgICAgICAgICB0aGlzJDEuaGFuZGxlU2Nyb2xsKG5leHQsIGN1cnJlbnQsIHRydWUpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSlcblxuICAgIGlmIChleHBlY3RTY3JvbGwpIHtcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHNhdmVTY3JvbGxQb3NpdGlvbihfa2V5KVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICBpZiAoIEhpc3RvcnkgKSBIVE1MNUhpc3RvcnkuX19wcm90b19fID0gSGlzdG9yeTtcbiAgSFRNTDVIaXN0b3J5LnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoIEhpc3RvcnkgJiYgSGlzdG9yeS5wcm90b3R5cGUgKTtcbiAgSFRNTDVIaXN0b3J5LnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IEhUTUw1SGlzdG9yeTtcblxuICBIVE1MNUhpc3RvcnkucHJvdG90eXBlLmdvID0gZnVuY3Rpb24gZ28gKG4pIHtcbiAgICB3aW5kb3cuaGlzdG9yeS5nbyhuKVxuICB9O1xuXG4gIEhUTUw1SGlzdG9yeS5wcm90b3R5cGUucHVzaCA9IGZ1bmN0aW9uIHB1c2ggKGxvY2F0aW9uKSB7XG4gICAgdmFyIHRoaXMkMSA9IHRoaXM7XG5cbiAgICB2YXIgY3VycmVudCA9IHRoaXMuY3VycmVudFxuICAgIHRoaXMudHJhbnNpdGlvblRvKGxvY2F0aW9uLCBmdW5jdGlvbiAocm91dGUpIHtcbiAgICAgIHB1c2hTdGF0ZShjbGVhblBhdGgodGhpcyQxLmJhc2UgKyByb3V0ZS5mdWxsUGF0aCkpXG4gICAgICB0aGlzJDEuaGFuZGxlU2Nyb2xsKHJvdXRlLCBjdXJyZW50LCBmYWxzZSlcbiAgICB9KVxuICB9O1xuXG4gIEhUTUw1SGlzdG9yeS5wcm90b3R5cGUucmVwbGFjZSA9IGZ1bmN0aW9uIHJlcGxhY2UgKGxvY2F0aW9uKSB7XG4gICAgdmFyIHRoaXMkMSA9IHRoaXM7XG5cbiAgICB2YXIgY3VycmVudCA9IHRoaXMuY3VycmVudFxuICAgIHRoaXMudHJhbnNpdGlvblRvKGxvY2F0aW9uLCBmdW5jdGlvbiAocm91dGUpIHtcbiAgICAgIHJlcGxhY2VTdGF0ZShjbGVhblBhdGgodGhpcyQxLmJhc2UgKyByb3V0ZS5mdWxsUGF0aCkpXG4gICAgICB0aGlzJDEuaGFuZGxlU2Nyb2xsKHJvdXRlLCBjdXJyZW50LCBmYWxzZSlcbiAgICB9KVxuICB9O1xuXG4gIEhUTUw1SGlzdG9yeS5wcm90b3R5cGUuZW5zdXJlVVJMID0gZnVuY3Rpb24gZW5zdXJlVVJMIChwdXNoKSB7XG4gICAgaWYgKGdldExvY2F0aW9uKHRoaXMuYmFzZSkgIT09IHRoaXMuY3VycmVudC5mdWxsUGF0aCkge1xuICAgICAgdmFyIGN1cnJlbnQgPSBjbGVhblBhdGgodGhpcy5iYXNlICsgdGhpcy5jdXJyZW50LmZ1bGxQYXRoKVxuICAgICAgcHVzaCA/IHB1c2hTdGF0ZShjdXJyZW50KSA6IHJlcGxhY2VTdGF0ZShjdXJyZW50KVxuICAgIH1cbiAgfTtcblxuICBIVE1MNUhpc3RvcnkucHJvdG90eXBlLmhhbmRsZVNjcm9sbCA9IGZ1bmN0aW9uIGhhbmRsZVNjcm9sbCAodG8sIGZyb20sIGlzUG9wKSB7XG4gICAgdmFyIHJvdXRlciA9IHRoaXMucm91dGVyXG4gICAgaWYgKCFyb3V0ZXIuYXBwKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB2YXIgYmVoYXZpb3IgPSByb3V0ZXIub3B0aW9ucy5zY3JvbGxCZWhhdmlvclxuICAgIGlmICghYmVoYXZpb3IpIHtcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBhc3NlcnQodHlwZW9mIGJlaGF2aW9yID09PSAnZnVuY3Rpb24nLCBcInNjcm9sbEJlaGF2aW9yIG11c3QgYmUgYSBmdW5jdGlvblwiKVxuXG4gICAgLy8gd2FpdCB1bnRpbCByZS1yZW5kZXIgZmluaXNoZXMgYmVmb3JlIHNjcm9sbGluZ1xuICAgIHJvdXRlci5hcHAuJG5leHRUaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBwb3NpdGlvbiA9IGdldFNjcm9sbFBvc2l0aW9uKF9rZXkpXG4gICAgICB2YXIgc2hvdWxkU2Nyb2xsID0gYmVoYXZpb3IodG8sIGZyb20sIGlzUG9wID8gcG9zaXRpb24gOiBudWxsKVxuICAgICAgaWYgKCFzaG91bGRTY3JvbGwpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgICB2YXIgaXNPYmplY3QgPSB0eXBlb2Ygc2hvdWxkU2Nyb2xsID09PSAnb2JqZWN0J1xuICAgICAgaWYgKGlzT2JqZWN0ICYmIHR5cGVvZiBzaG91bGRTY3JvbGwuc2VsZWN0b3IgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHZhciBlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2hvdWxkU2Nyb2xsLnNlbGVjdG9yKVxuICAgICAgICBpZiAoZWwpIHtcbiAgICAgICAgICBwb3NpdGlvbiA9IGdldEVsZW1lbnRQb3NpdGlvbihlbClcbiAgICAgICAgfSBlbHNlIGlmIChpc1ZhbGlkUG9zaXRpb24oc2hvdWxkU2Nyb2xsKSkge1xuICAgICAgICAgIHBvc2l0aW9uID0gbm9ybWFsaXplUG9zaXRpb24oc2hvdWxkU2Nyb2xsKVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGlzT2JqZWN0ICYmIGlzVmFsaWRQb3NpdGlvbihzaG91bGRTY3JvbGwpKSB7XG4gICAgICAgIHBvc2l0aW9uID0gbm9ybWFsaXplUG9zaXRpb24oc2hvdWxkU2Nyb2xsKVxuICAgICAgfVxuXG4gICAgICBpZiAocG9zaXRpb24pIHtcbiAgICAgICAgd2luZG93LnNjcm9sbFRvKHBvc2l0aW9uLngsIHBvc2l0aW9uLnkpXG4gICAgICB9XG4gICAgfSlcbiAgfTtcblxuICByZXR1cm4gSFRNTDVIaXN0b3J5O1xufShIaXN0b3J5KSk7XG5cbmZ1bmN0aW9uIGdldExvY2F0aW9uIChiYXNlKSB7XG4gIHZhciBwYXRoID0gd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lXG4gIGlmIChiYXNlICYmIHBhdGguaW5kZXhPZihiYXNlKSA9PT0gMCkge1xuICAgIHBhdGggPSBwYXRoLnNsaWNlKGJhc2UubGVuZ3RoKVxuICB9XG4gIHJldHVybiAocGF0aCB8fCAnLycpICsgd2luZG93LmxvY2F0aW9uLnNlYXJjaCArIHdpbmRvdy5sb2NhdGlvbi5oYXNoXG59XG5cbmZ1bmN0aW9uIHB1c2hTdGF0ZSAodXJsLCByZXBsYWNlKSB7XG4gIC8vIHRyeS4uLmNhdGNoIHRoZSBwdXNoU3RhdGUgY2FsbCB0byBnZXQgYXJvdW5kIFNhZmFyaVxuICAvLyBET00gRXhjZXB0aW9uIDE4IHdoZXJlIGl0IGxpbWl0cyB0byAxMDAgcHVzaFN0YXRlIGNhbGxzXG4gIHZhciBoaXN0b3J5ID0gd2luZG93Lmhpc3RvcnlcbiAgdHJ5IHtcbiAgICBpZiAocmVwbGFjZSkge1xuICAgICAgaGlzdG9yeS5yZXBsYWNlU3RhdGUoeyBrZXk6IF9rZXkgfSwgJycsIHVybClcbiAgICB9IGVsc2Uge1xuICAgICAgX2tleSA9IGdlbktleSgpXG4gICAgICBoaXN0b3J5LnB1c2hTdGF0ZSh7IGtleTogX2tleSB9LCAnJywgdXJsKVxuICAgIH1cbiAgICBzYXZlU2Nyb2xsUG9zaXRpb24oX2tleSlcbiAgfSBjYXRjaCAoZSkge1xuICAgIHdpbmRvdy5sb2NhdGlvbltyZXBsYWNlID8gJ2Fzc2lnbicgOiAncmVwbGFjZSddKHVybClcbiAgfVxufVxuXG5mdW5jdGlvbiByZXBsYWNlU3RhdGUgKHVybCkge1xuICBwdXNoU3RhdGUodXJsLCB0cnVlKVxufVxuXG4vKiAgKi9cblxuXG52YXIgSGFzaEhpc3RvcnkgPSAoZnVuY3Rpb24gKEhpc3RvcnkpIHtcbiAgZnVuY3Rpb24gSGFzaEhpc3RvcnkgKHJvdXRlciwgYmFzZSwgZmFsbGJhY2spIHtcbiAgICBIaXN0b3J5LmNhbGwodGhpcywgcm91dGVyLCBiYXNlKVxuXG4gICAgLy8gY2hlY2sgaGlzdG9yeSBmYWxsYmFjayBkZWVwbGlua2luZ1xuICAgIGlmIChmYWxsYmFjayAmJiB0aGlzLmNoZWNrRmFsbGJhY2soKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgZW5zdXJlU2xhc2goKVxuICB9XG5cbiAgaWYgKCBIaXN0b3J5ICkgSGFzaEhpc3RvcnkuX19wcm90b19fID0gSGlzdG9yeTtcbiAgSGFzaEhpc3RvcnkucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSggSGlzdG9yeSAmJiBIaXN0b3J5LnByb3RvdHlwZSApO1xuICBIYXNoSGlzdG9yeS5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBIYXNoSGlzdG9yeTtcblxuICBIYXNoSGlzdG9yeS5wcm90b3R5cGUuY2hlY2tGYWxsYmFjayA9IGZ1bmN0aW9uIGNoZWNrRmFsbGJhY2sgKCkge1xuICAgIHZhciBsb2NhdGlvbiA9IGdldExvY2F0aW9uKHRoaXMuYmFzZSlcbiAgICBpZiAoIS9eXFwvIy8udGVzdChsb2NhdGlvbikpIHtcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZXBsYWNlKFxuICAgICAgICBjbGVhblBhdGgodGhpcy5iYXNlICsgJy8jJyArIGxvY2F0aW9uKVxuICAgICAgKVxuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG4gIH07XG5cbiAgSGFzaEhpc3RvcnkucHJvdG90eXBlLm9uSGFzaENoYW5nZSA9IGZ1bmN0aW9uIG9uSGFzaENoYW5nZSAoKSB7XG4gICAgaWYgKCFlbnN1cmVTbGFzaCgpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgdGhpcy50cmFuc2l0aW9uVG8oZ2V0SGFzaCgpLCBmdW5jdGlvbiAocm91dGUpIHtcbiAgICAgIHJlcGxhY2VIYXNoKHJvdXRlLmZ1bGxQYXRoKVxuICAgIH0pXG4gIH07XG5cbiAgSGFzaEhpc3RvcnkucHJvdG90eXBlLnB1c2ggPSBmdW5jdGlvbiBwdXNoIChsb2NhdGlvbikge1xuICAgIHRoaXMudHJhbnNpdGlvblRvKGxvY2F0aW9uLCBmdW5jdGlvbiAocm91dGUpIHtcbiAgICAgIHB1c2hIYXNoKHJvdXRlLmZ1bGxQYXRoKVxuICAgIH0pXG4gIH07XG5cbiAgSGFzaEhpc3RvcnkucHJvdG90eXBlLnJlcGxhY2UgPSBmdW5jdGlvbiByZXBsYWNlIChsb2NhdGlvbikge1xuICAgIHRoaXMudHJhbnNpdGlvblRvKGxvY2F0aW9uLCBmdW5jdGlvbiAocm91dGUpIHtcbiAgICAgIHJlcGxhY2VIYXNoKHJvdXRlLmZ1bGxQYXRoKVxuICAgIH0pXG4gIH07XG5cbiAgSGFzaEhpc3RvcnkucHJvdG90eXBlLmdvID0gZnVuY3Rpb24gZ28gKG4pIHtcbiAgICB3aW5kb3cuaGlzdG9yeS5nbyhuKVxuICB9O1xuXG4gIEhhc2hIaXN0b3J5LnByb3RvdHlwZS5lbnN1cmVVUkwgPSBmdW5jdGlvbiBlbnN1cmVVUkwgKHB1c2gpIHtcbiAgICB2YXIgY3VycmVudCA9IHRoaXMuY3VycmVudC5mdWxsUGF0aFxuICAgIGlmIChnZXRIYXNoKCkgIT09IGN1cnJlbnQpIHtcbiAgICAgIHB1c2ggPyBwdXNoSGFzaChjdXJyZW50KSA6IHJlcGxhY2VIYXNoKGN1cnJlbnQpXG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBIYXNoSGlzdG9yeTtcbn0oSGlzdG9yeSkpO1xuXG5mdW5jdGlvbiBlbnN1cmVTbGFzaCAoKSB7XG4gIHZhciBwYXRoID0gZ2V0SGFzaCgpXG4gIGlmIChwYXRoLmNoYXJBdCgwKSA9PT0gJy8nKSB7XG4gICAgcmV0dXJuIHRydWVcbiAgfVxuICByZXBsYWNlSGFzaCgnLycgKyBwYXRoKVxuICByZXR1cm4gZmFsc2Vcbn1cblxuZnVuY3Rpb24gZ2V0SGFzaCAoKSB7XG4gIC8vIFdlIGNhbid0IHVzZSB3aW5kb3cubG9jYXRpb24uaGFzaCBoZXJlIGJlY2F1c2UgaXQncyBub3RcbiAgLy8gY29uc2lzdGVudCBhY3Jvc3MgYnJvd3NlcnMgLSBGaXJlZm94IHdpbGwgcHJlLWRlY29kZSBpdCFcbiAgdmFyIGhyZWYgPSB3aW5kb3cubG9jYXRpb24uaHJlZlxuICB2YXIgaW5kZXggPSBocmVmLmluZGV4T2YoJyMnKVxuICByZXR1cm4gaW5kZXggPT09IC0xID8gJycgOiBocmVmLnNsaWNlKGluZGV4ICsgMSlcbn1cblxuZnVuY3Rpb24gcHVzaEhhc2ggKHBhdGgpIHtcbiAgd2luZG93LmxvY2F0aW9uLmhhc2ggPSBwYXRoXG59XG5cbmZ1bmN0aW9uIHJlcGxhY2VIYXNoIChwYXRoKSB7XG4gIHZhciBpID0gd2luZG93LmxvY2F0aW9uLmhyZWYuaW5kZXhPZignIycpXG4gIHdpbmRvdy5sb2NhdGlvbi5yZXBsYWNlKFxuICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmLnNsaWNlKDAsIGkgPj0gMCA/IGkgOiAwKSArICcjJyArIHBhdGhcbiAgKVxufVxuXG4vKiAgKi9cblxuXG52YXIgQWJzdHJhY3RIaXN0b3J5ID0gKGZ1bmN0aW9uIChIaXN0b3J5KSB7XG4gIGZ1bmN0aW9uIEFic3RyYWN0SGlzdG9yeSAocm91dGVyKSB7XG4gICAgSGlzdG9yeS5jYWxsKHRoaXMsIHJvdXRlcilcbiAgICB0aGlzLnN0YWNrID0gW11cbiAgICB0aGlzLmluZGV4ID0gLTFcbiAgfVxuXG4gIGlmICggSGlzdG9yeSApIEFic3RyYWN0SGlzdG9yeS5fX3Byb3RvX18gPSBIaXN0b3J5O1xuICBBYnN0cmFjdEhpc3RvcnkucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSggSGlzdG9yeSAmJiBIaXN0b3J5LnByb3RvdHlwZSApO1xuICBBYnN0cmFjdEhpc3RvcnkucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gQWJzdHJhY3RIaXN0b3J5O1xuXG4gIEFic3RyYWN0SGlzdG9yeS5wcm90b3R5cGUucHVzaCA9IGZ1bmN0aW9uIHB1c2ggKGxvY2F0aW9uKSB7XG4gICAgdmFyIHRoaXMkMSA9IHRoaXM7XG5cbiAgICB0aGlzLnRyYW5zaXRpb25Ubyhsb2NhdGlvbiwgZnVuY3Rpb24gKHJvdXRlKSB7XG4gICAgICB0aGlzJDEuc3RhY2sgPSB0aGlzJDEuc3RhY2suc2xpY2UoMCwgdGhpcyQxLmluZGV4ICsgMSkuY29uY2F0KHJvdXRlKVxuICAgICAgdGhpcyQxLmluZGV4KytcbiAgICB9KVxuICB9O1xuXG4gIEFic3RyYWN0SGlzdG9yeS5wcm90b3R5cGUucmVwbGFjZSA9IGZ1bmN0aW9uIHJlcGxhY2UgKGxvY2F0aW9uKSB7XG4gICAgdmFyIHRoaXMkMSA9IHRoaXM7XG5cbiAgICB0aGlzLnRyYW5zaXRpb25Ubyhsb2NhdGlvbiwgZnVuY3Rpb24gKHJvdXRlKSB7XG4gICAgICB0aGlzJDEuc3RhY2sgPSB0aGlzJDEuc3RhY2suc2xpY2UoMCwgdGhpcyQxLmluZGV4KS5jb25jYXQocm91dGUpXG4gICAgfSlcbiAgfTtcblxuICBBYnN0cmFjdEhpc3RvcnkucHJvdG90eXBlLmdvID0gZnVuY3Rpb24gZ28gKG4pIHtcbiAgICB2YXIgdGhpcyQxID0gdGhpcztcblxuICAgIHZhciB0YXJnZXRJbmRleCA9IHRoaXMuaW5kZXggKyBuXG4gICAgaWYgKHRhcmdldEluZGV4IDwgMCB8fCB0YXJnZXRJbmRleCA+PSB0aGlzLnN0YWNrLmxlbmd0aCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIHZhciByb3V0ZSA9IHRoaXMuc3RhY2tbdGFyZ2V0SW5kZXhdXG4gICAgdGhpcy5jb25maXJtVHJhbnNpdGlvbihyb3V0ZSwgZnVuY3Rpb24gKCkge1xuICAgICAgdGhpcyQxLmluZGV4ID0gdGFyZ2V0SW5kZXhcbiAgICAgIHRoaXMkMS51cGRhdGVSb3V0ZShyb3V0ZSlcbiAgICB9KVxuICB9O1xuXG4gIEFic3RyYWN0SGlzdG9yeS5wcm90b3R5cGUuZW5zdXJlVVJMID0gZnVuY3Rpb24gZW5zdXJlVVJMICgpIHtcbiAgICAvLyBub29wXG4gIH07XG5cbiAgcmV0dXJuIEFic3RyYWN0SGlzdG9yeTtcbn0oSGlzdG9yeSkpO1xuXG4vKiAgKi9cblxudmFyIFZ1ZVJvdXRlciA9IGZ1bmN0aW9uIFZ1ZVJvdXRlciAob3B0aW9ucykge1xuICBpZiAoIG9wdGlvbnMgPT09IHZvaWQgMCApIG9wdGlvbnMgPSB7fTtcblxuICB0aGlzLmFwcCA9IG51bGxcbiAgdGhpcy5vcHRpb25zID0gb3B0aW9uc1xuICB0aGlzLmJlZm9yZUhvb2tzID0gW11cbiAgdGhpcy5hZnRlckhvb2tzID0gW11cbiAgdGhpcy5tYXRjaCA9IGNyZWF0ZU1hdGNoZXIob3B0aW9ucy5yb3V0ZXMgfHwgW10pXG5cbiAgdmFyIG1vZGUgPSBvcHRpb25zLm1vZGUgfHwgJ2hhc2gnXG4gIHRoaXMuZmFsbGJhY2sgPSBtb2RlID09PSAnaGlzdG9yeScgJiYgIXN1cHBvcnRzSGlzdG9yeVxuICBpZiAodGhpcy5mYWxsYmFjaykge1xuICAgIG1vZGUgPSAnaGFzaCdcbiAgfVxuICBpZiAoIWluQnJvd3Nlcikge1xuICAgIG1vZGUgPSAnYWJzdHJhY3QnXG4gIH1cbiAgdGhpcy5tb2RlID0gbW9kZVxuXG4gIHN3aXRjaCAobW9kZSkge1xuICAgIGNhc2UgJ2hpc3RvcnknOlxuICAgICAgdGhpcy5oaXN0b3J5ID0gbmV3IEhUTUw1SGlzdG9yeSh0aGlzLCBvcHRpb25zLmJhc2UpXG4gICAgICBicmVha1xuICAgIGNhc2UgJ2hhc2gnOlxuICAgICAgdGhpcy5oaXN0b3J5ID0gbmV3IEhhc2hIaXN0b3J5KHRoaXMsIG9wdGlvbnMuYmFzZSwgdGhpcy5mYWxsYmFjaylcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAnYWJzdHJhY3QnOlxuICAgICAgdGhpcy5oaXN0b3J5ID0gbmV3IEFic3RyYWN0SGlzdG9yeSh0aGlzKVxuICAgICAgYnJlYWtcbiAgICBkZWZhdWx0OlxuICAgICAgYXNzZXJ0KGZhbHNlLCAoXCJpbnZhbGlkIG1vZGU6IFwiICsgbW9kZSkpXG4gIH1cbn07XG5cbnZhciBwcm90b3R5cGVBY2Nlc3NvcnMgPSB7IGN1cnJlbnRSb3V0ZToge30gfTtcblxucHJvdG90eXBlQWNjZXNzb3JzLmN1cnJlbnRSb3V0ZS5nZXQgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB0aGlzLmhpc3RvcnkgJiYgdGhpcy5oaXN0b3J5LmN1cnJlbnRcbn07XG5cblZ1ZVJvdXRlci5wcm90b3R5cGUuaW5pdCA9IGZ1bmN0aW9uIGluaXQgKGFwcCAvKiBWdWUgY29tcG9uZW50IGluc3RhbmNlICovKSB7XG4gICAgdmFyIHRoaXMkMSA9IHRoaXM7XG5cbiAgYXNzZXJ0KFxuICAgIGluc3RhbGwuaW5zdGFsbGVkLFxuICAgIFwibm90IGluc3RhbGxlZC4gTWFrZSBzdXJlIHRvIGNhbGwgYFZ1ZS51c2UoVnVlUm91dGVyKWAgXCIgK1xuICAgIFwiYmVmb3JlIGNyZWF0aW5nIHJvb3QgaW5zdGFuY2UuXCJcbiAgKVxuXG4gIHRoaXMuYXBwID0gYXBwXG5cbiAgdmFyIGhpc3RvcnkgPSB0aGlzLmhpc3RvcnlcblxuICBpZiAoaGlzdG9yeSBpbnN0YW5jZW9mIEhUTUw1SGlzdG9yeSkge1xuICAgIGhpc3RvcnkudHJhbnNpdGlvblRvKGdldExvY2F0aW9uKGhpc3RvcnkuYmFzZSkpXG4gIH0gZWxzZSBpZiAoaGlzdG9yeSBpbnN0YW5jZW9mIEhhc2hIaXN0b3J5KSB7XG4gICAgaGlzdG9yeS50cmFuc2l0aW9uVG8oZ2V0SGFzaCgpLCBmdW5jdGlvbiAoKSB7XG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignaGFzaGNoYW5nZScsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaGlzdG9yeS5vbkhhc2hDaGFuZ2UoKVxuICAgICAgfSlcbiAgICB9KVxuICB9XG5cbiAgaGlzdG9yeS5saXN0ZW4oZnVuY3Rpb24gKHJvdXRlKSB7XG4gICAgdGhpcyQxLmFwcC5fcm91dGUgPSByb3V0ZVxuICB9KVxufTtcblxuVnVlUm91dGVyLnByb3RvdHlwZS5iZWZvcmVFYWNoID0gZnVuY3Rpb24gYmVmb3JlRWFjaCAoZm4pIHtcbiAgdGhpcy5iZWZvcmVIb29rcy5wdXNoKGZuKVxufTtcblxuVnVlUm91dGVyLnByb3RvdHlwZS5hZnRlckVhY2ggPSBmdW5jdGlvbiBhZnRlckVhY2ggKGZuKSB7XG4gIHRoaXMuYWZ0ZXJIb29rcy5wdXNoKGZuKVxufTtcblxuVnVlUm91dGVyLnByb3RvdHlwZS5wdXNoID0gZnVuY3Rpb24gcHVzaCAobG9jYXRpb24pIHtcbiAgdGhpcy5oaXN0b3J5LnB1c2gobG9jYXRpb24pXG59O1xuXG5WdWVSb3V0ZXIucHJvdG90eXBlLnJlcGxhY2UgPSBmdW5jdGlvbiByZXBsYWNlIChsb2NhdGlvbikge1xuICB0aGlzLmhpc3RvcnkucmVwbGFjZShsb2NhdGlvbilcbn07XG5cblZ1ZVJvdXRlci5wcm90b3R5cGUuZ28gPSBmdW5jdGlvbiBnbyAobikge1xuICB0aGlzLmhpc3RvcnkuZ28obilcbn07XG5cblZ1ZVJvdXRlci5wcm90b3R5cGUuYmFjayA9IGZ1bmN0aW9uIGJhY2sgKCkge1xuICB0aGlzLmdvKC0xKVxufTtcblxuVnVlUm91dGVyLnByb3RvdHlwZS5mb3J3YXJkID0gZnVuY3Rpb24gZm9yd2FyZCAoKSB7XG4gIHRoaXMuZ28oMSlcbn07XG5cblZ1ZVJvdXRlci5wcm90b3R5cGUuZ2V0TWF0Y2hlZENvbXBvbmVudHMgPSBmdW5jdGlvbiBnZXRNYXRjaGVkQ29tcG9uZW50cyAoKSB7XG4gIGlmICghdGhpcy5jdXJyZW50Um91dGUpIHtcbiAgICByZXR1cm4gW11cbiAgfVxuICByZXR1cm4gW10uY29uY2F0LmFwcGx5KFtdLCB0aGlzLmN1cnJlbnRSb3V0ZS5tYXRjaGVkLm1hcChmdW5jdGlvbiAobSkge1xuICAgIHJldHVybiBPYmplY3Qua2V5cyhtLmNvbXBvbmVudHMpLm1hcChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICByZXR1cm4gbS5jb21wb25lbnRzW2tleV1cbiAgICB9KVxuICB9KSlcbn07XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKCBWdWVSb3V0ZXIucHJvdG90eXBlLCBwcm90b3R5cGVBY2Nlc3NvcnMgKTtcblxuVnVlUm91dGVyLmluc3RhbGwgPSBpbnN0YWxsXG5cbmlmIChpbkJyb3dzZXIgJiYgd2luZG93LlZ1ZSkge1xuICB3aW5kb3cuVnVlLnVzZShWdWVSb3V0ZXIpXG59XG5cbnJldHVybiBWdWVSb3V0ZXI7XG5cbn0pKSk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vRTovVGVzdFdvcmsvdnVlL34vdnVlLXJvdXRlci9kaXN0L3Z1ZS1yb3V0ZXIuanMiLCIvKipcclxuICog5o+P6L+wOiDot6/nlLHphY3nva7mlofku7ZcclxuICog54mI5p2DOiBDb3B5cmlnaHQgKGMpIDIwMTZcclxuICog5YWs5Y+4OiDmt7HlnLPluILmmIrmmajnp5HmioDlvIDlj5HmnInpmZDlhazlj7hcclxuICog5L2c6ICFOiDpmYjlhYNcclxuICog54mI5pysOiAxLjBcclxuICog5Yib5bu65pel5pyfOiAyMDE2LzExLzIzXHJcbiAqIOWIm+W7uuaXtumXtDogMTA6MTFcclxuICovXHJcbmxldCBJbmRleFZpZXcgPSByZXF1aXJlKFwiLi92aWV3cy9pbmRleC52dWVcIik7ICAgICAgICAgICAgICAgIC8vIOW8leWFpWluZGV4VnVlXHJcbmltcG9ydCBVc2VyVmlldyBmcm9tIFwiLi92aWV3cy91c2VyL3ZpZXdcIjsgICAgICAgICAgICAgICAgICAgLy8g5byV5YWlVXNlcuinhuWbvlxyXG5pbXBvcnQgVXNlclZpZXdNZW1iZXIgZnJvbSBcIi4vdmlld3MvdXNlci9tZW1iZXIvdmlld1wiOyAgICAgIC8vIOW8leWFpVVzZXJNZW1iZXLop4blm75cclxuXHJcbi8vIOWumuS5iei3r+eUsVxyXG5jb25zdCByb3V0ZXMgPSBbXHJcbiAgICB7XHJcbiAgICAgICAgbmFtZTogXCJmb29cIixcclxuICAgICAgICBwYXRoOiAnL2ZvbycsXHJcbiAgICAgICAgY29tcG9uZW50OiB7XHJcbiAgICAgICAgICAgIHRlbXBsYXRlOiAnPGRpdj5mb288L2Rpdj4nXHJcbiAgICAgICAgfVxyXG4gICAgfSwge1xyXG4gICAgICAgIHBhdGg6ICcvaW5kZXgnLFxyXG4gICAgICAgIGNvbXBvbmVudDogSW5kZXhWaWV3XHJcbiAgICB9XHJcbiAgICAsIHtcclxuICAgICAgICBwYXRoOiAnL3VzZXIvOmlkJyxcclxuICAgICAgICBjb21wb25lbnQ6IFVzZXJWaWV3LFxyXG4gICAgICAgIGNoaWxkcmVuOltcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcGF0aDogXCJtZW1iZXJcIixcclxuICAgICAgICAgICAgICAgIGNvbXBvbmVudDogVXNlclZpZXdNZW1iZXJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIF1cclxuICAgIH1cclxuXTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJvdXRlcztcclxuZXhwb3J0IHtyb3V0ZXN9O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0U6L1Rlc3RXb3JrL3Z1ZS9zcmMvcm91dGVyLmpzIiwiLyoqXHJcbiAqIOaPj+i/sDog55So5oi36KeG5Zu+XHJcbiAqIOeJiOadgzogQ29weXJpZ2h0IChjKSAyMDE2XHJcbiAqIOWFrOWPuDog5rex5Zyz5biC5piK5pmo56eR5oqA5byA5Y+R5pyJ6ZmQ5YWs5Y+4XHJcbiAqIOS9nOiAhTog6ZmI5YWDXHJcbiAqIOeJiOacrDogMS4wXHJcbiAqIOWIm+W7uuaXpeacnzogMjAxNi8xMS8yM1xyXG4gKiDliJvlu7rml7bpl7Q6IDE2OjI3XHJcbiAqL1xyXG5pbXBvcnQgVmlldyBmcm9tIFwiLi4vLi4vdXRpbHMvdmlld1wiOyAgICAgICAgICAgICAgICAvLyDlr7zlhaXop4blm77niLbnsbtcclxubGV0IFVzZXJUZW1wbGF0ZSA9IHJlcXVpcmUoXCIuL3ZpZXcudnVlXCIpOyAgICAgICAgICAgIC8vIOWvvOWFpeinhuWbvuaooeadv1xyXG5cclxuY2xhc3MgVXNlclZpZXcgZXh0ZW5kcyBWaWV3IHtcclxuICAgIGNvbnN0cnVjdG9yKHZpZXcpIHtcclxuICAgICAgICBzdXBlcih2aWV3KTtcclxuICAgIH1cclxuXHJcbiAgICB3YXRjaCgpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAkcm91dGU6IGZ1bmN0aW9uICh0bywgZnJvbSkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2codG8pO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZnJvbSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIGRhdGEoKSB7XHJcbiAgICAgICAgbGV0IGRhdGEgPSB7XHJcbiAgICAgICAgICAgIG5hbWU6IFwiVXNlclZpZXdcIixcclxuICAgICAgICAgICAgbWVzc2FnZTogXCLov5nmmK/kuIDmnaHmtYvor5Xmtojmga9cIlxyXG4gICAgICAgIH07XHJcbiAgICAgICAgc2V0SW50ZXJ2YWwoKCk9PiB7XHJcbiAgICAgICAgICAgIGRhdGEubWVzc2FnZSArPSBcIkBcIjtcclxuICAgICAgICB9LCAxMDAwKTtcclxuICAgICAgICByZXR1cm4gZGF0YTtcclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGVkKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCc9PT09PVVzZXJWaWV3IENyZWF0ZWQ9PT09PScpO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBuZXcgVXNlclZpZXcoVXNlclRlbXBsYXRlKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9FOi9UZXN0V29yay92dWUvc3JjL3ZpZXdzL3VzZXIvdmlldy5qcyIsIi8qKlxyXG4gKiDmj4/ov7A6IOinhuWbvuexu1xyXG4gKiDniYjmnYM6IENvcHlyaWdodCAoYykgMjAxNlxyXG4gKiDlhazlj7g6IOa3seWcs+W4guaYiuaZqOenkeaKgOW8gOWPkeaciemZkOWFrOWPuFxyXG4gKiDkvZzogIU6IOmZiOWFg1xyXG4gKiDniYjmnKw6IDEuMFxyXG4gKiDliJvlu7rml6XmnJ86IDIwMTYvMTEvMjNcclxuICog5Yib5bu65pe26Ze0OiAxNjoyMVxyXG4gKi9cclxuY2xhc3MgVmlldyB7XHJcbiAgICBjb25zdHJ1Y3Rvcih2aWV3KSB7XHJcbiAgICAgICAgaWYgKHZpZXcgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJWaWV357G75p6E6YCg5pa55rOV55qE5Y+C5pWw5LiN6IO95Li656m6XCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoISh0eXBlb2YodmlldykgPT0gXCJvYmplY3RcIiAmJiB0eXBlb2Yodmlldy5yZW5kZXIpID09IFwiZnVuY3Rpb25cIikpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlZpZXfnsbvmnoTpgKDmlrnms5XnmoTlj4LmlbDlv4XpobvkuLp2dWXmqKHmnb/lr7nosaFcIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodHlwZW9mKHRoaXMuZGF0YSkgPT09IFwiZnVuY3Rpb25cIikgeyAgICAgICAgICAgICAgICAgLy8g5o+Q5Y+W5a2Q57G755qEZGF0YeaWueazlVxyXG4gICAgICAgICAgICB2aWV3LmRhdGEgPSB0aGlzLmRhdGE7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodHlwZW9mKHRoaXMuY3JlYXRlZCkgPT09IFwiZnVuY3Rpb25cIikgeyAgICAgICAgICAgICAgLy8g5o+Q5Y+W5a2Q57G755qEY3JlYXRlZOaWueazlVxyXG4gICAgICAgICAgICB2aWV3LmNyZWF0ZWQgPSB0aGlzLmNyZWF0ZWQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodHlwZW9mKHRoaXMud2F0Y2gpID09PSBcImZ1bmN0aW9uXCIpIHsgICAgICAgICAgICAgICAgLy8g5o+Q5Y+W5a2Q57G755qEd2F0Y2jmlrnms5Xnu5PmnpxcclxuICAgICAgICAgICAgdmlldy53YXRjaCA9IHRoaXNbJ3dhdGNoJ10oKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZvciAobGV0IGsgaW4gdmlldykgeyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICDlsIZWdWXmqKHmnb/lr7nosaHnmoTmlrnms5Xmi7fotJ3liLBWaWV35a6e5L6L5LiKXHJcbiAgICAgICAgICAgIGlmICh2aWV3Lmhhc093blByb3BlcnR5KGspKVxyXG4gICAgICAgICAgICAgICAgdGhpc1trXSA9IHZpZXdba107XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBWaWV3O1xyXG5leHBvcnQge1ZpZXd9O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0U6L1Rlc3RXb3JrL3Z1ZS9zcmMvdXRpbHMvdmlldy5qcyIsInZhciBfX3Z1ZV9leHBvcnRzX18sIF9fdnVlX29wdGlvbnNfX1xudmFyIF9fdnVlX3N0eWxlc19fID0ge31cblxuLyogc3R5bGVzICovXG5yZXF1aXJlKFwiISF2dWUtc3R5bGUtbG9hZGVyIWNzcy1sb2FkZXI/c291cmNlTWFwIXZ1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyP2lkPWRhdGEtdi1mMjY1MWRhYyF2dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXN0eWxlcyZpbmRleD0wIS4vdmlldy52dWVcIilcblxuLyogdGVtcGxhdGUgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9fID0gcmVxdWlyZShcIiEhdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/aWQ9ZGF0YS12LWYyNjUxZGFjIXZ1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3ZpZXcudnVlXCIpXG5fX3Z1ZV9vcHRpb25zX18gPSBfX3Z1ZV9leHBvcnRzX18gPSBfX3Z1ZV9leHBvcnRzX18gfHwge31cbmlmIChcbiAgdHlwZW9mIF9fdnVlX2V4cG9ydHNfXy5kZWZhdWx0ID09PSBcIm9iamVjdFwiIHx8XG4gIHR5cGVvZiBfX3Z1ZV9leHBvcnRzX18uZGVmYXVsdCA9PT0gXCJmdW5jdGlvblwiXG4pIHtcbmlmIChPYmplY3Qua2V5cyhfX3Z1ZV9leHBvcnRzX18pLnNvbWUoZnVuY3Rpb24gKGtleSkgeyByZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkgIT09IFwiX19lc01vZHVsZVwiIH0pKSB7Y29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuX192dWVfb3B0aW9uc19fID0gX192dWVfZXhwb3J0c19fID0gX192dWVfZXhwb3J0c19fLmRlZmF1bHRcbn1cbmlmICh0eXBlb2YgX192dWVfb3B0aW9uc19fID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgX192dWVfb3B0aW9uc19fID0gX192dWVfb3B0aW9uc19fLm9wdGlvbnNcbn1cbl9fdnVlX29wdGlvbnNfXy5fX2ZpbGUgPSBcIkU6XFxcXFRlc3RXb3JrXFxcXHZ1ZVxcXFxzcmNcXFxcdmlld3NcXFxcdXNlclxcXFx2aWV3LnZ1ZVwiXG5fX3Z1ZV9vcHRpb25zX18ucmVuZGVyID0gX192dWVfdGVtcGxhdGVfXy5yZW5kZXJcbl9fdnVlX29wdGlvbnNfXy5zdGF0aWNSZW5kZXJGbnMgPSBfX3Z1ZV90ZW1wbGF0ZV9fLnN0YXRpY1JlbmRlckZuc1xuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtZjI2NTFkYWNcIiwgX192dWVfb3B0aW9uc19fKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtZjI2NTFkYWNcIiwgX192dWVfb3B0aW9uc19fKVxuICB9XG59KSgpfVxuaWYgKF9fdnVlX29wdGlvbnNfXy5mdW5jdGlvbmFsKSB7Y29uc29sZS5lcnJvcihcIlt2dWUtbG9hZGVyXSB2aWV3LnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIGFuZCBzaG91bGQgYmUgZGVmaW5lZCBpbiBwbGFpbiBqcyBmaWxlcyB1c2luZyByZW5kZXIgZnVuY3Rpb25zLlwiKX1cblxubW9kdWxlLmV4cG9ydHMgPSBfX3Z1ZV9leHBvcnRzX19cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3ZpZXdzL3VzZXIvdmlldy52dWVcbi8vIG1vZHVsZSBpZCA9IDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi1mMjY1MWRhYyEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vdmlldy52dWVcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIHt9KTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuXHQvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuXHRpZighY29udGVudC5sb2NhbHMpIHtcblx0XHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LWYyNjUxZGFjIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi92aWV3LnZ1ZVwiLCBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LWYyNjUxZGFjIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi92aWV3LnZ1ZVwiKTtcblx0XHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXHRcdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHRcdH0pO1xuXHR9XG5cdC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1zdHlsZS1sb2FkZXIhLi9+L2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vfi92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtZjI2NTFkYWMhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9zcmMvdmlld3MvdXNlci92aWV3LnZ1ZVxuLy8gbW9kdWxlIGlkID0gN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcbmgxIHtcXG4gICAgY29sb3I6ICNGMDA7XFxufVxcblwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCIvLi9zcmMvdmlld3MvdXNlci92aWV3LnZ1ZT81Nzc2YjY1MlwiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiO0FBVUE7SUFDQSxZQUFBO0NBQ0FcIixcImZpbGVcIjpcInZpZXcudnVlXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjx0ZW1wbGF0ZT5cXHJcXG4gICAgPGRpdiBpZD1cXFwidXNlclxcXCI+XFxyXFxuICAgICAgICA8aDE+SGVsbG8ge3tuYW1lfX08L2gxPlxcclxcbiAgICAgICAgPHA+e3skcm91dGUucGFyYW1zLmlkfX08L3A+XFxyXFxuICAgICAgICA8ZGl2IHYtdGV4dD1cXFwibWVzc2FnZVxcXCI+PC9kaXY+XFxyXFxuICAgICAgICA8cm91dGVyLXZpZXc+PC9yb3V0ZXItdmlldz5cXHJcXG4gICAgPC9kaXY+XFxyXFxuPC90ZW1wbGF0ZT5cXHJcXG5cXHJcXG48c3R5bGU+XFxyXFxuICAgIGgxIHtcXHJcXG4gICAgICAgIGNvbG9yOiAjRjAwO1xcclxcbiAgICB9XFxyXFxuPC9zdHlsZT5cIl0sXCJzb3VyY2VSb290XCI6XCJ3ZWJwYWNrOi8vXCJ9XSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL34vdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LWYyNjUxZGFjIS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vc3JjL3ZpZXdzL3VzZXIvdmlldy52dWVcbi8vIG1vZHVsZSBpZCA9IDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLypcclxuXHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxyXG5cdEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcclxuKi9cclxuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpIHtcclxuXHR2YXIgbGlzdCA9IFtdO1xyXG5cclxuXHQvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXHJcblx0bGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xyXG5cdFx0dmFyIHJlc3VsdCA9IFtdO1xyXG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0dmFyIGl0ZW0gPSB0aGlzW2ldO1xyXG5cdFx0XHRpZihpdGVtWzJdKSB7XHJcblx0XHRcdFx0cmVzdWx0LnB1c2goXCJAbWVkaWEgXCIgKyBpdGVtWzJdICsgXCJ7XCIgKyBpdGVtWzFdICsgXCJ9XCIpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHJlc3VsdC5wdXNoKGl0ZW1bMV0pO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gcmVzdWx0LmpvaW4oXCJcIik7XHJcblx0fTtcclxuXHJcblx0Ly8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcclxuXHRsaXN0LmkgPSBmdW5jdGlvbihtb2R1bGVzLCBtZWRpYVF1ZXJ5KSB7XHJcblx0XHRpZih0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIilcclxuXHRcdFx0bW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgXCJcIl1dO1xyXG5cdFx0dmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcclxuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdHZhciBpZCA9IHRoaXNbaV1bMF07XHJcblx0XHRcdGlmKHR5cGVvZiBpZCA9PT0gXCJudW1iZXJcIilcclxuXHRcdFx0XHRhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XHJcblx0XHR9XHJcblx0XHRmb3IoaSA9IDA7IGkgPCBtb2R1bGVzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdHZhciBpdGVtID0gbW9kdWxlc1tpXTtcclxuXHRcdFx0Ly8gc2tpcCBhbHJlYWR5IGltcG9ydGVkIG1vZHVsZVxyXG5cdFx0XHQvLyB0aGlzIGltcGxlbWVudGF0aW9uIGlzIG5vdCAxMDAlIHBlcmZlY3QgZm9yIHdlaXJkIG1lZGlhIHF1ZXJ5IGNvbWJpbmF0aW9uc1xyXG5cdFx0XHQvLyAgd2hlbiBhIG1vZHVsZSBpcyBpbXBvcnRlZCBtdWx0aXBsZSB0aW1lcyB3aXRoIGRpZmZlcmVudCBtZWRpYSBxdWVyaWVzLlxyXG5cdFx0XHQvLyAgSSBob3BlIHRoaXMgd2lsbCBuZXZlciBvY2N1ciAoSGV5IHRoaXMgd2F5IHdlIGhhdmUgc21hbGxlciBidW5kbGVzKVxyXG5cdFx0XHRpZih0eXBlb2YgaXRlbVswXSAhPT0gXCJudW1iZXJcIiB8fCAhYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xyXG5cdFx0XHRcdGlmKG1lZGlhUXVlcnkgJiYgIWl0ZW1bMl0pIHtcclxuXHRcdFx0XHRcdGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xyXG5cdFx0XHRcdH0gZWxzZSBpZihtZWRpYVF1ZXJ5KSB7XHJcblx0XHRcdFx0XHRpdGVtWzJdID0gXCIoXCIgKyBpdGVtWzJdICsgXCIpIGFuZCAoXCIgKyBtZWRpYVF1ZXJ5ICsgXCIpXCI7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGxpc3QucHVzaChpdGVtKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH07XHJcblx0cmV0dXJuIGxpc3Q7XHJcbn07XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0U6L1Rlc3RXb3JrL3Z1ZS9+L2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzIiwiLypcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbnZhciBzdHlsZXNJbkRvbSA9IHt9LFxuXHRtZW1vaXplID0gZnVuY3Rpb24oZm4pIHtcblx0XHR2YXIgbWVtbztcblx0XHRyZXR1cm4gZnVuY3Rpb24gKCkge1xuXHRcdFx0aWYgKHR5cGVvZiBtZW1vID09PSBcInVuZGVmaW5lZFwiKSBtZW1vID0gZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcblx0XHRcdHJldHVybiBtZW1vO1xuXHRcdH07XG5cdH0sXG5cdGlzT2xkSUUgPSBtZW1vaXplKGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiAvbXNpZSBbNi05XVxcYi8udGVzdCh3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpKTtcblx0fSksXG5cdGdldEhlYWRFbGVtZW50ID0gbWVtb2l6ZShmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuIGRvY3VtZW50LmhlYWQgfHwgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJoZWFkXCIpWzBdO1xuXHR9KSxcblx0c2luZ2xldG9uRWxlbWVudCA9IG51bGwsXG5cdHNpbmdsZXRvbkNvdW50ZXIgPSAwLFxuXHRzdHlsZUVsZW1lbnRzSW5zZXJ0ZWRBdFRvcCA9IFtdO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGxpc3QsIG9wdGlvbnMpIHtcblx0aWYodHlwZW9mIERFQlVHICE9PSBcInVuZGVmaW5lZFwiICYmIERFQlVHKSB7XG5cdFx0aWYodHlwZW9mIGRvY3VtZW50ICE9PSBcIm9iamVjdFwiKSB0aHJvdyBuZXcgRXJyb3IoXCJUaGUgc3R5bGUtbG9hZGVyIGNhbm5vdCBiZSB1c2VkIGluIGEgbm9uLWJyb3dzZXIgZW52aXJvbm1lbnRcIik7XG5cdH1cblxuXHRvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblx0Ly8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG5cdC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2Vcblx0aWYgKHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiA9PT0gXCJ1bmRlZmluZWRcIikgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG5cblx0Ly8gQnkgZGVmYXVsdCwgYWRkIDxzdHlsZT4gdGFncyB0byB0aGUgYm90dG9tIG9mIDxoZWFkPi5cblx0aWYgKHR5cGVvZiBvcHRpb25zLmluc2VydEF0ID09PSBcInVuZGVmaW5lZFwiKSBvcHRpb25zLmluc2VydEF0ID0gXCJib3R0b21cIjtcblxuXHR2YXIgc3R5bGVzID0gbGlzdFRvU3R5bGVzKGxpc3QpO1xuXHRhZGRTdHlsZXNUb0RvbShzdHlsZXMsIG9wdGlvbnMpO1xuXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuXHRcdHZhciBtYXlSZW1vdmUgPSBbXTtcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcblx0XHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuXHRcdFx0ZG9tU3R5bGUucmVmcy0tO1xuXHRcdFx0bWF5UmVtb3ZlLnB1c2goZG9tU3R5bGUpO1xuXHRcdH1cblx0XHRpZihuZXdMaXN0KSB7XG5cdFx0XHR2YXIgbmV3U3R5bGVzID0gbGlzdFRvU3R5bGVzKG5ld0xpc3QpO1xuXHRcdFx0YWRkU3R5bGVzVG9Eb20obmV3U3R5bGVzLCBvcHRpb25zKTtcblx0XHR9XG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IG1heVJlbW92ZS5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGRvbVN0eWxlID0gbWF5UmVtb3ZlW2ldO1xuXHRcdFx0aWYoZG9tU3R5bGUucmVmcyA9PT0gMCkge1xuXHRcdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspXG5cdFx0XHRcdFx0ZG9tU3R5bGUucGFydHNbal0oKTtcblx0XHRcdFx0ZGVsZXRlIHN0eWxlc0luRG9tW2RvbVN0eWxlLmlkXTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlc1RvRG9tKHN0eWxlcywgb3B0aW9ucykge1xuXHRmb3IodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XG5cdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XG5cdFx0aWYoZG9tU3R5bGUpIHtcblx0XHRcdGRvbVN0eWxlLnJlZnMrKztcblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRkb21TdHlsZS5wYXJ0c1tqXShpdGVtLnBhcnRzW2pdKTtcblx0XHRcdH1cblx0XHRcdGZvcig7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHR2YXIgcGFydHMgPSBbXTtcblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdHBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xuXHRcdFx0fVxuXHRcdFx0c3R5bGVzSW5Eb21baXRlbS5pZF0gPSB7aWQ6IGl0ZW0uaWQsIHJlZnM6IDEsIHBhcnRzOiBwYXJ0c307XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGxpc3RUb1N0eWxlcyhsaXN0KSB7XG5cdHZhciBzdHlsZXMgPSBbXTtcblx0dmFyIG5ld1N0eWxlcyA9IHt9O1xuXHRmb3IodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBpdGVtID0gbGlzdFtpXTtcblx0XHR2YXIgaWQgPSBpdGVtWzBdO1xuXHRcdHZhciBjc3MgPSBpdGVtWzFdO1xuXHRcdHZhciBtZWRpYSA9IGl0ZW1bMl07XG5cdFx0dmFyIHNvdXJjZU1hcCA9IGl0ZW1bM107XG5cdFx0dmFyIHBhcnQgPSB7Y3NzOiBjc3MsIG1lZGlhOiBtZWRpYSwgc291cmNlTWFwOiBzb3VyY2VNYXB9O1xuXHRcdGlmKCFuZXdTdHlsZXNbaWRdKVxuXHRcdFx0c3R5bGVzLnB1c2gobmV3U3R5bGVzW2lkXSA9IHtpZDogaWQsIHBhcnRzOiBbcGFydF19KTtcblx0XHRlbHNlXG5cdFx0XHRuZXdTdHlsZXNbaWRdLnBhcnRzLnB1c2gocGFydCk7XG5cdH1cblx0cmV0dXJuIHN0eWxlcztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIHN0eWxlRWxlbWVudCkge1xuXHR2YXIgaGVhZCA9IGdldEhlYWRFbGVtZW50KCk7XG5cdHZhciBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCA9IHN0eWxlRWxlbWVudHNJbnNlcnRlZEF0VG9wW3N0eWxlRWxlbWVudHNJbnNlcnRlZEF0VG9wLmxlbmd0aCAtIDFdO1xuXHRpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJ0b3BcIikge1xuXHRcdGlmKCFsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCkge1xuXHRcdFx0aGVhZC5pbnNlcnRCZWZvcmUoc3R5bGVFbGVtZW50LCBoZWFkLmZpcnN0Q2hpbGQpO1xuXHRcdH0gZWxzZSBpZihsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZykge1xuXHRcdFx0aGVhZC5pbnNlcnRCZWZvcmUoc3R5bGVFbGVtZW50LCBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGhlYWQuYXBwZW5kQ2hpbGQoc3R5bGVFbGVtZW50KTtcblx0XHR9XG5cdFx0c3R5bGVFbGVtZW50c0luc2VydGVkQXRUb3AucHVzaChzdHlsZUVsZW1lbnQpO1xuXHR9IGVsc2UgaWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwiYm90dG9tXCIpIHtcblx0XHRoZWFkLmFwcGVuZENoaWxkKHN0eWxlRWxlbWVudCk7XG5cdH0gZWxzZSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCB2YWx1ZSBmb3IgcGFyYW1ldGVyICdpbnNlcnRBdCcuIE11c3QgYmUgJ3RvcCcgb3IgJ2JvdHRvbScuXCIpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcblx0c3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcblx0dmFyIGlkeCA9IHN0eWxlRWxlbWVudHNJbnNlcnRlZEF0VG9wLmluZGV4T2Yoc3R5bGVFbGVtZW50KTtcblx0aWYoaWR4ID49IDApIHtcblx0XHRzdHlsZUVsZW1lbnRzSW5zZXJ0ZWRBdFRvcC5zcGxpY2UoaWR4LCAxKTtcblx0fVxufVxuXG5mdW5jdGlvbiBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuXHR2YXIgc3R5bGVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuXHRzdHlsZUVsZW1lbnQudHlwZSA9IFwidGV4dC9jc3NcIjtcblx0aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIHN0eWxlRWxlbWVudCk7XG5cdHJldHVybiBzdHlsZUVsZW1lbnQ7XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuXHR2YXIgc3R5bGVFbGVtZW50LCB1cGRhdGUsIHJlbW92ZTtcblxuXHRpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcblx0XHR2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcblx0XHRzdHlsZUVsZW1lbnQgPSBzaW5nbGV0b25FbGVtZW50IHx8IChzaW5nbGV0b25FbGVtZW50ID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcblx0XHR1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGVFbGVtZW50LCBzdHlsZUluZGV4LCBmYWxzZSk7XG5cdFx0cmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlRWxlbWVudCwgc3R5bGVJbmRleCwgdHJ1ZSk7XG5cdH0gZWxzZSB7XG5cdFx0c3R5bGVFbGVtZW50ID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuXHRcdHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZUVsZW1lbnQpO1xuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG5cdFx0fTtcblx0fVxuXG5cdHVwZGF0ZShvYmopO1xuXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcblx0XHRpZihuZXdPYmopIHtcblx0XHRcdGlmKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcClcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0dXBkYXRlKG9iaiA9IG5ld09iaik7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJlbW92ZSgpO1xuXHRcdH1cblx0fTtcbn1cblxudmFyIHJlcGxhY2VUZXh0ID0gKGZ1bmN0aW9uICgpIHtcblx0dmFyIHRleHRTdG9yZSA9IFtdO1xuXG5cdHJldHVybiBmdW5jdGlvbiAoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG5cdFx0dGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuXHRcdHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuXHR9O1xufSkoKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZUVsZW1lbnQsIGluZGV4LCByZW1vdmUsIG9iaikge1xuXHR2YXIgY3NzID0gcmVtb3ZlID8gXCJcIiA6IG9iai5jc3M7XG5cblx0aWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG5cdFx0c3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuXHR9IGVsc2Uge1xuXHRcdHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcblx0XHR2YXIgY2hpbGROb2RlcyA9IHN0eWxlRWxlbWVudC5jaGlsZE5vZGVzO1xuXHRcdGlmIChjaGlsZE5vZGVzW2luZGV4XSkgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcblx0XHRpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcblx0XHRcdHN0eWxlRWxlbWVudC5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcoc3R5bGVFbGVtZW50LCBvYmopIHtcblx0dmFyIGNzcyA9IG9iai5jc3M7XG5cdHZhciBtZWRpYSA9IG9iai5tZWRpYTtcblx0dmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cblx0aWYgKG1lZGlhKSB7XG5cdFx0c3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm1lZGlhXCIsIG1lZGlhKTtcblx0fVxuXG5cdGlmIChzb3VyY2VNYXApIHtcblx0XHQvLyBodHRwczovL2RldmVsb3Blci5jaHJvbWUuY29tL2RldnRvb2xzL2RvY3MvamF2YXNjcmlwdC1kZWJ1Z2dpbmdcblx0XHQvLyB0aGlzIG1ha2VzIHNvdXJjZSBtYXBzIGluc2lkZSBzdHlsZSB0YWdzIHdvcmsgcHJvcGVybHkgaW4gQ2hyb21lXG5cdFx0Y3NzICs9ICdcXG4vKiMgc291cmNlVVJMPScgKyBzb3VyY2VNYXAuc291cmNlc1swXSArICcgKi8nO1xuXHRcdC8vIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzI2NjAzODc1XG5cdFx0Y3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIiArIGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSkgKyBcIiAqL1wiO1xuXHR9XG5cblx0aWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG5cdFx0c3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcblx0fSBlbHNlIHtcblx0XHR3aGlsZShzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuXHRcdFx0c3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcblx0XHR9XG5cdFx0c3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuXHR9XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLXN0eWxlLWxvYWRlci9hZGRTdHlsZXMuanNcbi8vIG1vZHVsZSBpZCA9IDEwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzPXtyZW5kZXI6ZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO1xuICByZXR1cm4gX3ZtLl9oKCdkaXYnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwiaWRcIjogXCJ1c2VyXCJcbiAgICB9XG4gIH0sIFtfdm0uX2goJ2gxJywgW1wiSGVsbG8gXCIgKyBfdm0uX3MoX3ZtLm5hbWUpXSksIFwiIFwiLCBfdm0uX2goJ3AnLCBbX3ZtLl9zKF92bS4kcm91dGUucGFyYW1zLmlkKV0pLCBcIiBcIiwgX3ZtLl9oKCdkaXYnLCB7XG4gICAgZG9tUHJvcHM6IHtcbiAgICAgIFwidGV4dENvbnRlbnRcIjogX3ZtLl9zKF92bS5tZXNzYWdlKVxuICAgIH1cbiAgfSksIFwiIFwiLCBfdm0uX2goJ3JvdXRlci12aWV3JyldKVxufSxzdGF0aWNSZW5kZXJGbnM6IFtdfVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikucmVyZW5kZXIoXCJkYXRhLXYtZjI2NTFkYWNcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIuanM/aWQ9ZGF0YS12LWYyNjUxZGFjIS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9zcmMvdmlld3MvdXNlci92aWV3LnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXHJcbiAqIOaPj+i/sDog5Lya5ZGY6KeG5Zu+XHJcbiAqIOeJiOadgzogQ29weXJpZ2h0IChjKSAyMDE2XHJcbiAqIOWFrOWPuDog5rex5Zyz5biC5piK5pmo56eR5oqA5byA5Y+R5pyJ6ZmQ5YWs5Y+4XHJcbiAqIOS9nOiAhTog6ZmI5YWDXHJcbiAqIOeJiOacrDogMS4wXHJcbiAqIOWIm+W7uuaXpeacnzogMjAxNi8xMS8yNFxyXG4gKiDliJvlu7rml7bpl7Q6IDE1OjI0XHJcbiAqL1xyXG5pbXBvcnQgVmlldyBmcm9tIFwiLi4vLi4vLi4vdXRpbHMvdmlld1wiO1xyXG5sZXQgdnVlID0gcmVxdWlyZShcIi4vdmlldy52dWVcIik7XHJcblxyXG5jbGFzcyBVc2VyTWVtYmVyVmlldyBleHRlbmRzIFZpZXcge1xyXG4gICAgY29uc3RydWN0b3Iodmlldykge1xyXG4gICAgICAgIHN1cGVyKHZpZXcpO1xyXG4gICAgfVxyXG5cclxuICAgIGRhdGEgKCkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIG5hbWU6IFwiVXNlck1lbWJlclZpZXdcIlxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IG5ldyBVc2VyTWVtYmVyVmlldyh2dWUpO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0U6L1Rlc3RXb3JrL3Z1ZS9zcmMvdmlld3MvdXNlci9tZW1iZXIvdmlldy5qcyIsInZhciBfX3Z1ZV9leHBvcnRzX18sIF9fdnVlX29wdGlvbnNfX1xudmFyIF9fdnVlX3N0eWxlc19fID0ge31cblxuLyogdGVtcGxhdGUgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9fID0gcmVxdWlyZShcIiEhdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/aWQ9ZGF0YS12LTM3NTdiNmIyIXZ1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3ZpZXcudnVlXCIpXG5fX3Z1ZV9vcHRpb25zX18gPSBfX3Z1ZV9leHBvcnRzX18gPSBfX3Z1ZV9leHBvcnRzX18gfHwge31cbmlmIChcbiAgdHlwZW9mIF9fdnVlX2V4cG9ydHNfXy5kZWZhdWx0ID09PSBcIm9iamVjdFwiIHx8XG4gIHR5cGVvZiBfX3Z1ZV9leHBvcnRzX18uZGVmYXVsdCA9PT0gXCJmdW5jdGlvblwiXG4pIHtcbmlmIChPYmplY3Qua2V5cyhfX3Z1ZV9leHBvcnRzX18pLnNvbWUoZnVuY3Rpb24gKGtleSkgeyByZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkgIT09IFwiX19lc01vZHVsZVwiIH0pKSB7Y29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuX192dWVfb3B0aW9uc19fID0gX192dWVfZXhwb3J0c19fID0gX192dWVfZXhwb3J0c19fLmRlZmF1bHRcbn1cbmlmICh0eXBlb2YgX192dWVfb3B0aW9uc19fID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgX192dWVfb3B0aW9uc19fID0gX192dWVfb3B0aW9uc19fLm9wdGlvbnNcbn1cbl9fdnVlX29wdGlvbnNfXy5fX2ZpbGUgPSBcIkU6XFxcXFRlc3RXb3JrXFxcXHZ1ZVxcXFxzcmNcXFxcdmlld3NcXFxcdXNlclxcXFxtZW1iZXJcXFxcdmlldy52dWVcIlxuX192dWVfb3B0aW9uc19fLnJlbmRlciA9IF9fdnVlX3RlbXBsYXRlX18ucmVuZGVyXG5fX3Z1ZV9vcHRpb25zX18uc3RhdGljUmVuZGVyRm5zID0gX192dWVfdGVtcGxhdGVfXy5zdGF0aWNSZW5kZXJGbnNcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTM3NTdiNmIyXCIsIF9fdnVlX29wdGlvbnNfXylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTM3NTdiNmIyXCIsIF9fdnVlX29wdGlvbnNfXylcbiAgfVxufSkoKX1cbmlmIChfX3Z1ZV9vcHRpb25zX18uZnVuY3Rpb25hbCkge2NvbnNvbGUuZXJyb3IoXCJbdnVlLWxvYWRlcl0gdmlldy52dWU6IGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhcmUgbm90IHN1cHBvcnRlZCBhbmQgc2hvdWxkIGJlIGRlZmluZWQgaW4gcGxhaW4ganMgZmlsZXMgdXNpbmcgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbm1vZHVsZS5leHBvcnRzID0gX192dWVfZXhwb3J0c19fXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy92aWV3cy91c2VyL21lbWJlci92aWV3LnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7XG4gIHJldHVybiBfdm0uX2goJ2RpdicsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJpZFwiOiBcInVzZXJcIlxuICAgIH1cbiAgfSwgW192bS5faCgnaDEnLCBbXCJIZWxsbyBcIiArIF92bS5fcyhfdm0ubmFtZSldKV0pXG59LHN0YXRpY1JlbmRlckZuczogW119XG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKS5yZXJlbmRlcihcImRhdGEtdi0zNzU3YjZiMlwiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci5qcz9pZD1kYXRhLXYtMzc1N2I2YjIhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3NyYy92aWV3cy91c2VyL21lbWJlci92aWV3LnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIF9fdnVlX2V4cG9ydHNfXywgX192dWVfb3B0aW9uc19fXG52YXIgX192dWVfc3R5bGVzX18gPSB7fVxuXG4vKiBzdHlsZXMgKi9cbnJlcXVpcmUoXCIhIXZ1ZS1zdHlsZS1sb2FkZXIhY3NzLWxvYWRlcj9zb3VyY2VNYXAhdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXI/aWQ9ZGF0YS12LTVjYWE5MWU2IXZ1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9pbmRleC52dWVcIilcblxuLyogc2NyaXB0ICovXG5fX3Z1ZV9leHBvcnRzX18gPSByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXIhdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL2luZGV4LnZ1ZVwiKVxuXG4vKiB0ZW1wbGF0ZSAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX18gPSByZXF1aXJlKFwiISF2dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj9pZD1kYXRhLXYtNWNhYTkxZTYhdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vaW5kZXgudnVlXCIpXG5fX3Z1ZV9vcHRpb25zX18gPSBfX3Z1ZV9leHBvcnRzX18gPSBfX3Z1ZV9leHBvcnRzX18gfHwge31cbmlmIChcbiAgdHlwZW9mIF9fdnVlX2V4cG9ydHNfXy5kZWZhdWx0ID09PSBcIm9iamVjdFwiIHx8XG4gIHR5cGVvZiBfX3Z1ZV9leHBvcnRzX18uZGVmYXVsdCA9PT0gXCJmdW5jdGlvblwiXG4pIHtcbmlmIChPYmplY3Qua2V5cyhfX3Z1ZV9leHBvcnRzX18pLnNvbWUoZnVuY3Rpb24gKGtleSkgeyByZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkgIT09IFwiX19lc01vZHVsZVwiIH0pKSB7Y29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuX192dWVfb3B0aW9uc19fID0gX192dWVfZXhwb3J0c19fID0gX192dWVfZXhwb3J0c19fLmRlZmF1bHRcbn1cbmlmICh0eXBlb2YgX192dWVfb3B0aW9uc19fID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgX192dWVfb3B0aW9uc19fID0gX192dWVfb3B0aW9uc19fLm9wdGlvbnNcbn1cbl9fdnVlX29wdGlvbnNfXy5fX2ZpbGUgPSBcIkU6XFxcXFRlc3RXb3JrXFxcXHZ1ZVxcXFxzcmNcXFxcdmlld3NcXFxcaW5kZXgudnVlXCJcbl9fdnVlX29wdGlvbnNfXy5yZW5kZXIgPSBfX3Z1ZV90ZW1wbGF0ZV9fLnJlbmRlclxuX192dWVfb3B0aW9uc19fLnN0YXRpY1JlbmRlckZucyA9IF9fdnVlX3RlbXBsYXRlX18uc3RhdGljUmVuZGVyRm5zXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi01Y2FhOTFlNlwiLCBfX3Z1ZV9vcHRpb25zX18pXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi01Y2FhOTFlNlwiLCBfX3Z1ZV9vcHRpb25zX18pXG4gIH1cbn0pKCl9XG5pZiAoX192dWVfb3B0aW9uc19fLmZ1bmN0aW9uYWwpIHtjb25zb2xlLmVycm9yKFwiW3Z1ZS1sb2FkZXJdIGluZGV4LnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIGFuZCBzaG91bGQgYmUgZGVmaW5lZCBpbiBwbGFpbiBqcyBmaWxlcyB1c2luZyByZW5kZXIgZnVuY3Rpb25zLlwiKX1cblxubW9kdWxlLmV4cG9ydHMgPSBfX3Z1ZV9leHBvcnRzX19cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3ZpZXdzL2luZGV4LnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi01Y2FhOTFlNiEuLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vaW5kZXgudnVlXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCB7fSk7XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcblx0Ly8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0aWYoIWNvbnRlbnQubG9jYWxzKSB7XG5cdFx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi01Y2FhOTFlNiEuLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vaW5kZXgudnVlXCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtNWNhYTkxZTYhLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL2luZGV4LnZ1ZVwiKTtcblx0XHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXHRcdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHRcdH0pO1xuXHR9XG5cdC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1zdHlsZS1sb2FkZXIhLi9+L2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vfi92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtNWNhYTkxZTYhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9zcmMvdmlld3MvaW5kZXgudnVlXG4vLyBtb2R1bGUgaWQgPSAxNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcbmgxIHtcXG4gICAgY29sb3I6ICNGMDA7XFxufVxcblwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCIvLi9zcmMvdmlld3MvaW5kZXgudnVlPzQwNGZhNDhhXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7QUFLQTtJQUNBLFlBQUE7Q0FDQVwiLFwiZmlsZVwiOlwiaW5kZXgudnVlXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjx0ZW1wbGF0ZT5cXHJcXG4gICAgPGgxPkF1dGggRmxvd3t7bG9nZ2VkSW59fTwvaDE+XFxyXFxuPC90ZW1wbGF0ZT5cXHJcXG5cXHJcXG48c3R5bGU+XFxyXFxuICAgIGgxIHtcXHJcXG4gICAgICAgIGNvbG9yOiAjRjAwO1xcclxcbiAgICB9XFxyXFxuPC9zdHlsZT5cXHJcXG5cXHJcXG48c2NyaXB0PlxcclxcbiAgICBjbGFzcyB0ZXN0IHtcXHJcXG4gICAgICAgIGRhdGEoKSB7XFxyXFxuICAgICAgICAgICAgcmV0dXJuIHtcXHJcXG4gICAgICAgICAgICAgICAgbG9nZ2VkSW46IFxcXCJURVNUXFxcIlxcclxcbiAgICAgICAgICAgIH1cXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgIGNyZWF0ZWQoKSB7XFxyXFxuICAgICAgICAgICAgY29uc29sZS5sb2coJ0BAQEBAQEBAQEBAQEAnKTtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgfVxcclxcbiAgICBsZXQgcGFnZSA9IHtcXHJcXG4gICAgICAgIGRhdGE6IGZ1bmN0aW9uICgpIHtcXHJcXG4gICAgICAgICAgICByZXR1cm4ge1xcclxcbiAgICAgICAgICAgICAgICBsb2dnZWRJbjogXFxcIlRFU1RcXFwiXFxyXFxuICAgICAgICAgICAgfVxcclxcbiAgICAgICAgfSxcXHJcXG4gICAgICAgIGNyZWF0ZWQ6IGZ1bmN0aW9uICgpIHtcXHJcXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnQEBAQEBAQEBAQEBAQCcpO1xcclxcbiAgICAgICAgfVxcclxcbiAgICB9O1xcclxcbiAgICBtb2R1bGUuZXhwb3J0cyA9IHBhZ2U7XFxyXFxuPC9zY3JpcHQ+XCJdLFwic291cmNlUm9vdFwiOlwid2VicGFjazovL1wifV0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9+L3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi01Y2FhOTFlNiEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3NyYy92aWV3cy9pbmRleC52dWVcbi8vIG1vZHVsZSBpZCA9IDE3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIjx0ZW1wbGF0ZT5cclxuICAgIDxoMT5BdXRoIEZsb3d7e2xvZ2dlZElufX08L2gxPlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHN0eWxlPlxyXG4gICAgaDEge1xyXG4gICAgICAgIGNvbG9yOiAjRjAwO1xyXG4gICAgfVxyXG48L3N0eWxlPlxyXG5cclxuPHNjcmlwdD5cclxuICAgIGNsYXNzIHRlc3Qge1xyXG4gICAgICAgIGRhdGEoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBsb2dnZWRJbjogXCJURVNUXCJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY3JlYXRlZCgpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ0BAQEBAQEBAQEBAQEAnKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBsZXQgcGFnZSA9IHtcclxuICAgICAgICBkYXRhOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBsb2dnZWRJbjogXCJURVNUXCJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY3JlYXRlZDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnQEBAQEBAQEBAQEBAQCcpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBtb2R1bGUuZXhwb3J0cyA9IHBhZ2U7XHJcbjwvc2NyaXB0PlxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBpbmRleC52dWU/NDA0ZmE0OGEiLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpcztcbiAgcmV0dXJuIF92bS5faCgnaDEnLCBbXCJBdXRoIEZsb3dcIiArIF92bS5fcyhfdm0ubG9nZ2VkSW4pXSlcbn0sc3RhdGljUmVuZGVyRm5zOiBbXX1cbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpLnJlcmVuZGVyKFwiZGF0YS12LTVjYWE5MWU2XCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyLmpzP2lkPWRhdGEtdi01Y2FhOTFlNiEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vc3JjL3ZpZXdzL2luZGV4LnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==