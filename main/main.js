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
	/**
	 * 描述: 路由配置文件
	 * 版权: Copyright (c) 2016
	 * 公司: 深圳市昊晨科技开发有限公司
	 * 作者: 陈元
	 * 版本: 1.0
	 * 创建日期: 2016/11/23
	 * 创建时间: 10:11
	 */
	var IndexView = __webpack_require__(4);
	
	// 2. 定义路由
	var routes = [{
	    name: "foo",
	    path: '/foo',
	    component: { template: '<div>foo</div>' }
	}, {
	    name: "bar",
	    path: '/bar',
	    component: { template: '<div>bar</div>' }
	}, {
	    path: '/index',
	    component: IndexView
	}];
	
	exports.default = routes;
	exports.routes = routes;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* script */
	__vue_exports__ = __webpack_require__(5)
	
	/* template */
	var __vue_template__ = __webpack_require__(6)
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
/* 5 */
/***/ function(module, exports) {

	//
	//
	//
	//
	
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
/* 6 */
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNmRlZWE3ZjAxZTAwMGZjNjQzYzQiLCJ3ZWJwYWNrOi8vLy4vRTovVGVzdFdvcmsvdnVlL3NyYy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vRTovVGVzdFdvcmsvdnVlL34vdnVlL2Rpc3QvdnVlLm1pbi5qcyIsIndlYnBhY2s6Ly8vLi9FOi9UZXN0V29yay92dWUvfi92dWUtcm91dGVyL2Rpc3QvdnVlLXJvdXRlci5qcyIsIndlYnBhY2s6Ly8vLi9FOi9UZXN0V29yay92dWUvc3JjL3JvdXRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvaW5kZXgudnVlIiwid2VicGFjazovLy9pbmRleC52dWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL2luZGV4LnZ1ZT82MGE5Il0sIm5hbWVzIjpbInVzZSIsInJvdXRlciIsInJvdXRlcyIsImFwcCIsIiRtb3VudCIsImUiLCJ0IiwiZXhwb3J0cyIsIm1vZHVsZSIsIlZ1ZSIsIkpTT04iLCJzdHJpbmdpZnkiLCJTdHJpbmciLCJwYXJzZUZsb2F0IiwibiIsIk9iamVjdCIsImNyZWF0ZSIsInIiLCJzcGxpdCIsImkiLCJsZW5ndGgiLCJ0b0xvd2VyQ2FzZSIsImluZGV4T2YiLCJzcGxpY2UiLCJVciIsImNhbGwiLCJvIiwiYSIsInMiLCJhcmd1bWVudHMiLCJhcHBseSIsIl9sZW5ndGgiLCJjIiwiQXJyYXkiLCJsIiwidSIsImYiLCJxciIsIldyIiwiZCIsInAiLCJ2IiwicmVkdWNlIiwiY29uY2F0Iiwic3RhdGljS2V5cyIsImpvaW4iLCJoIiwibSIsImciLCJjaGFyQ29kZUF0IiwieSIsImRlZmluZVByb3BlcnR5IiwidmFsdWUiLCJlbnVtZXJhYmxlIiwid3JpdGFibGUiLCJjb25maWd1cmFibGUiLCJfIiwiR3IiLCJ0ZXN0IiwiYiIsInRvU3RyaW5nIiwiJCIsImRpIiwidGFyZ2V0IiwicGkiLCJwdXNoIiwidyIsInBvcCIsIngiLCJfX3Byb3RvX18iLCJDIiwiayIsIl9fb2JfXyIsInlpIiwiZ2kiLCJzaG91bGRDb252ZXJ0Iiwib2kiLCJpc0FycmF5IiwiaXNFeHRlbnNpYmxlIiwiX2lzVnVlIiwiQSIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsImdldCIsInNldCIsImRlcGVuZCIsImRlcCIsIlQiLCJub3RpZnkiLCJPIiwiTWF0aCIsIm1heCIsInZtQ291bnQiLCJTIiwiaiIsImtleXMiLCJFIiwiTiIsIkwiLCJwcm9wcyIsIlZyIiwidHlwZSIsIkQiLCJkaXJlY3RpdmVzIiwiYmluZCIsInVwZGF0ZSIsIk0iLCJfaSIsImJpIiwiZXh0ZW5kcyIsIm9wdGlvbnMiLCJtaXhpbnMiLCJwcm90b3R5cGUiLCJSZSIsIlAiLCJ6ciIsIlIiLCJCIiwiS3IiLCJJIiwiZGVmYXVsdCIsIiRvcHRpb25zIiwicHJvcHNEYXRhIiwiRnVuY3Rpb24iLCJGIiwibWF0Y2giLCJVIiwid2kiLCJ4aSIsIkNpIiwia2kiLCJIIiwic29ydCIsImlkIiwiQWkiLCJydW4iLCJsaSIsImRldnRvb2xzIiwiYWkiLCJlbWl0IiwiViIsInNpIiwieiIsIlRpIiwiY2xlYXIiLCJKIiwiaGFzIiwiYWRkIiwiSyIsIl93YXRjaGVycyIsInEiLCJXIiwiWiIsIlkiLCJRIiwiX3Byb3BLZXlzIiwiJHBhcmVudCIsImRhdGEiLCJfZGF0YSIsInRlIiwiY29tcHV0ZWQiLCJqaSIsIkciLCJjYWNoZSIsIlNpIiwibGF6eSIsImRpcnR5IiwiZXZhbHVhdGUiLCJtZXRob2RzIiwid2F0Y2giLCJYIiwiaGFuZGxlciIsIiR3YXRjaCIsImVlIiwiJHNldCIsIiRkZWxldGUiLCJ1c2VyIiwiaW1tZWRpYXRlIiwidGVhcmRvd24iLCJuZSIsIkVpIiwidGFnIiwiY2hpbGRyZW4iLCJ0ZXh0IiwiZWxtIiwibnMiLCJjb250ZXh0IiwiY29tcG9uZW50T3B0aW9ucyIsImlzU3RhdGljIiwia2V5IiwiaXNDbG9uZWQiLCJyZSIsImllIiwiX19pbmplY3RlZCIsIm9lIiwiZm4iLCJjaGFyQXQiLCJzbGljZSIsImludm9rZXIiLCJhZSIsInNlIiwiY2UiLCJsZSIsInVlIiwiZmUiLCJmaWx0ZXIiLCJkZSIsInBhcmVudCIsImFic3RyYWN0IiwiJGNoaWxkcmVuIiwiJHJvb3QiLCIkcmVmcyIsIl93YXRjaGVyIiwiX2luYWN0aXZlIiwiX2lzTW91bnRlZCIsIl9pc0Rlc3Ryb3llZCIsIl9pc0JlaW5nRGVzdHJveWVkIiwicGUiLCJfbW91bnQiLCIkZWwiLCJyZW5kZXIiLCJOaSIsInZlIiwiX3VwZGF0ZSIsIl9yZW5kZXIiLCIkdm5vZGUiLCJMaSIsIl92bm9kZSIsIl9fcGF0Y2hfXyIsIl9fdnVlX18iLCJfdXBkYXRlRnJvbVBhcmVudCIsIl9yZW5kZXJDaGlsZHJlbiIsIl9wYXJlbnRWbm9kZSIsIl9wYXJlbnRMaXN0ZW5lcnMiLCJfdXBkYXRlTGlzdGVuZXJzIiwiJHNsb3RzIiwiRWUiLCJfcmVuZGVyQ29udGV4dCIsIiRmb3JjZVVwZGF0ZSIsIiRkZXN0cm95IiwiJG9mZiIsIiRlbWl0IiwiaGUiLCJfYmFzZSIsImV4dGVuZCIsImNpZCIsInJlc29sdmVkIiwid2UiLCJQZSIsInhlIiwiZnVuY3Rpb25hbCIsIm1lIiwib24iLCJuYXRpdmVPbiIsImtlIiwibmFtZSIsIkN0b3IiLCJsaXN0ZW5lcnMiLCJPZSIsIl9zZWxmIiwic2xvdHMiLCJmdW5jdGlvbmFsQ29udGV4dCIsInNsb3QiLCJnZSIsIl9pc0NvbXBvbmVudCIsIl9jb21wb25lbnRUYWciLCJpbmxpbmVUZW1wbGF0ZSIsInN0YXRpY1JlbmRlckZucyIsInllIiwiY2hpbGQiLCJrZWVwQWxpdmUiLCJfZSIsImJlIiwiJGUiLCJyZXF1ZXN0ZWQiLCJwZW5kaW5nQ2FsbGJhY2tzIiwidGhlbiIsImF0dHJzIiwiZG9tUHJvcHMiLCJDZSIsImhvb2siLCJNaSIsIkRpIiwiQWUiLCJTZSIsInNjb3BlZFNsb3RzIiwiZ2V0VGFnTmFtZXNwYWNlIiwiaXNSZXNlcnZlZFRhZyIsIlRlIiwiX3N0YXRpY1RyZWVzIiwiJHNjb3BlZFNsb3RzIiwiJGNyZWF0ZUVsZW1lbnQiLCJlbCIsImplIiwiaXNPbmNlIiwiJG5leHRUaWNrIiwiX3JlbmRlclByb3h5IiwiZXJyb3JIYW5kbGVyIiwiY29uc29sZSIsImVycm9yIiwiX2giLCJfcyIsIl9uIiwiX3EiLCJfbSIsIl9vIiwiX2YiLCJfbCIsIl90IiwiX2IiLCJtdXN0VXNlUHJvcCIsIl9rIiwia2V5Q29kZXMiLCJpc0NvbW1lbnQiLCJOZSIsIl9ldmVudHMiLCIkb24iLCJMZSIsIiRvbmNlIiwiRGUiLCJfaW5pdCIsIl91aWQiLCJQaSIsIk1lIiwiY29uc3RydWN0b3IiLCJzdXBlciIsInN1cGVyT3B0aW9ucyIsImV4dGVuZE9wdGlvbnMiLCJfc2NvcGVJZCIsImNvbXBvbmVudHMiLCJJZSIsImluc3RhbGxlZCIsInVuc2hpZnQiLCJpbnN0YWxsIiwiRmUiLCJtaXhpbiIsIkJlIiwiX0N0b3IiLCJfYXNzZXRUeXBlcyIsImZvckVhY2giLCJVZSIsIkhlIiwiVmUiLCJ1dGlsIiwiJGkiLCJkZWxldGUiLCJuZXh0VGljayIsIkZpIiwiemUiLCJKZSIsIktlIiwic3RhdGljQ2xhc3MiLCJxZSIsImNsYXNzIiwiV2UiLCJaZSIsIlhpIiwiR2UiLCJRciIsInRvIiwibm8iLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJ3aW5kb3ciLCJIVE1MVW5rbm93bkVsZW1lbnQiLCJIVE1MRWxlbWVudCIsIlllIiwicXVlcnlTZWxlY3RvciIsIlFlIiwic2V0QXR0cmlidXRlIiwiWGUiLCJjcmVhdGVFbGVtZW50TlMiLCJXaSIsImV0IiwiY3JlYXRlVGV4dE5vZGUiLCJ0dCIsImNyZWF0ZUNvbW1lbnQiLCJudCIsImluc2VydEJlZm9yZSIsInJ0IiwicmVtb3ZlQ2hpbGQiLCJpdCIsImFwcGVuZENoaWxkIiwib3QiLCJwYXJlbnROb2RlIiwiYXQiLCJuZXh0U2libGluZyIsInN0IiwidGFnTmFtZSIsImN0IiwidGV4dENvbnRlbnQiLCJsdCIsImNoaWxkTm9kZXMiLCJ1dCIsImZ0IiwicmVmIiwicmVmSW5Gb3IiLCJkdCIsInB0IiwidnQiLCJodCIsIm10IiwiaXNSb290SW5zZXJ0IiwiaW5pdCIsIm9vIiwiaW5zZXJ0IiwicGVuZGluZ0luc2VydCIsImRlc3Ryb3kiLCJyZW1vdmUiLCJwcmVwYXRjaCIsInNldFRleHRDb250ZW50IiwicG9zdHBhdGNoIiwibW9kdWxlcyIsIm5vZGVPcHMiLCJhbyIsIm5vZGVUeXBlIiwiaGFzQXR0cmlidXRlIiwicmVtb3ZlQXR0cmlidXRlIiwiZ3QiLCJ5dCIsIm9sZFZhbHVlIiwiYnQiLCJkZWYiLCJjb21wb25lbnRVcGRhdGVkIiwiaW5zZXJ0ZWQiLCJtb2RpZmllcnMiLCJjbyIsInJhd05hbWUiLCIkdCIsInd0IiwiSmkiLCJyZW1vdmVBdHRyaWJ1dGVOUyIsInppIiwiS2kiLCJIaSIsIlZpIiwicWkiLCJzZXRBdHRyaWJ1dGVOUyIsInh0IiwiX3RyYW5zaXRpb25DbGFzc2VzIiwiX3ByZXZDbGFzcyIsIkN0IiwiX3ZfYWRkIiwiYWRkRXZlbnRMaXN0ZW5lciIsIl92X3JlbW92ZSIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJrdCIsIl92YWx1ZSIsImNvbXBvc2luZyIsIkF0IiwiT3QiLCJzdHlsZSIsInN0YXRpY1N0eWxlIiwiaG8iLCJTdCIsIlR0IiwiZ28iLCJqdCIsInRyaW0iLCJjbGFzc0xpc3QiLCJnZXRBdHRyaWJ1dGUiLCJFdCIsInJlcGxhY2UiLCJOdCIsIlNvIiwiTHQiLCJEdCIsIk10IiwiUHQiLCJ0aW1lb3V0IiwicHJvcENvdW50Iiwid28iLCJrbyIsIk9vIiwic2V0VGltZW91dCIsImdldENvbXB1dGVkU3R5bGUiLCJDbyIsIlJ0IiwiQW8iLCJ4byIsIlRvIiwiaGFzVHJhbnNmb3JtIiwibWFwIiwiSXQiLCJOdW1iZXIiLCJGdCIsIl9sZWF2ZUNiIiwiY2FuY2VsbGVkIiwiVXQiLCJ0cmFuc2l0aW9uIiwiX2VudGVyQ2IiLCJjc3MiLCJlbnRlckNsYXNzIiwiZW50ZXJBY3RpdmVDbGFzcyIsImFwcGVhckNsYXNzIiwiYXBwZWFyQWN0aXZlQ2xhc3MiLCJiZWZvcmVFbnRlciIsImVudGVyIiwiYWZ0ZXJFbnRlciIsImVudGVyQ2FuY2VsbGVkIiwiYmVmb3JlQXBwZWFyIiwiYXBwZWFyIiwiYWZ0ZXJBcHBlYXIiLCJhcHBlYXJDYW5jZWxsZWQiLCJ0aSIsIkh0Iiwic2hvdyIsIl9wZW5kaW5nIiwiQnQiLCJsZWF2ZUNsYXNzIiwibGVhdmVBY3RpdmVDbGFzcyIsImJlZm9yZUxlYXZlIiwibGVhdmUiLCJhZnRlckxlYXZlIiwibGVhdmVDYW5jZWxsZWQiLCJkZWxheUxlYXZlIiwiam8iLCJWdCIsIm11bHRpcGxlIiwiSnQiLCJzZWxlY3RlZCIsInNlbGVjdGVkSW5kZXgiLCJ6dCIsIkt0IiwicXQiLCJXdCIsImNyZWF0ZUV2ZW50IiwiaW5pdEV2ZW50IiwiZGlzcGF0Y2hFdmVudCIsIlp0IiwiR3QiLCJZdCIsIlF0IiwiWHQiLCJlbiIsIl9tb3ZlQ2IiLCJ0biIsIm5ld1BvcyIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsIm5uIiwicG9zIiwibGVmdCIsInRvcCIsIm1vdmVkIiwidHJhbnNmb3JtIiwiV2Via2l0VHJhbnNmb3JtIiwidHJhbnNpdGlvbkR1cmF0aW9uIiwicm4iLCJpbm5lckhUTUwiLCJWbyIsImFuIiwiRGEiLCJOYSIsIkxhIiwiTWEiLCJQYSIsInNuIiwic3Vic3RyaW5nIiwiWW8iLCJzdGFydCIsIlFvIiwiV28iLCJ1bmFyeVNsYXNoIiwiZW5kIiwiUWkiLCJZaSIsInJhIiwic2hvdWxkRGVjb2RlTmV3bGluZXMiLCJleHBlY3RIVE1MIiwiaXNVbmFyeVRhZyIsIlpyIiwiamEiLCJzZmMiLCJFYSIsIlJlZ0V4cCIsImNoYXJzIiwidGEiLCJuYSIsImVhIiwiWG8iLCJjbiIsImxuIiwidW4iLCJGYSIsIlJhIiwibGFzdEluZGV4IiwiZXhlYyIsImluZGV4IiwiZG4iLCJwbiIsInZuIiwiaG4iLCJhcmciLCJtbiIsImNhcHR1cmUiLCJuYXRpdmUiLCJuYXRpdmVFdmVudHMiLCJldmVudHMiLCJnbiIsInluIiwiYXR0cnNNYXAiLCJhdHRyc0xpc3QiLCJvYSIsImlhIiwic2EiLCJjYSIsImxhIiwibGFzdEluZGV4T2YiLCJleHAiLCJpZHgiLCIkbiIsImFhIiwiYm4iLCJ3biIsIkNuIiwieG4iLCJrbiIsInVhIiwid2FybiIsImZhIiwiZGEiLCJwYSIsImlzUHJlVGFnIiwidmEiLCJoYSIsIm1hIiwiZ2EiLCJkZWxpbWl0ZXJzIiwicHJlc2VydmVXaGl0ZXNwYWNlIiwiZWkiLCJWbiIsIkJuIiwiSG4iLCJmb3JiaWRkZW4iLCJBbiIsInByZSIsIk9uIiwiam4iLCJFbiIsIkRuIiwiU24iLCJwbGFpbiIsIlRuIiwiTW4iLCJQbiIsIlJuIiwiaWYiLCJlbHNlaWYiLCJlbHNlIiwiTG4iLCJibG9jayIsIk5uIiwic2xvdFNjb3BlIiwic2xvdFRhcmdldCIsInBsYWNlaG9sZGVyIiwicWEiLCJleHByZXNzaW9uIiwiSW4iLCJVYSIsImZvciIsIkhhIiwiYWxpYXMiLCJpdGVyYXRvcjEiLCJpdGVyYXRvcjIiLCJVbiIsImNvbmRpdGlvbnMiLCJvbmNlIiwic2xvdE5hbWUiLCJjb21wb25lbnQiLCJCYSIsImhhc0JpbmRpbmdzIiwiRm4iLCJLYSIsIlZhIiwicHJvcCIsImNhbWVsIiwiemEiLCJKYSIsIldhIiwiWmEiLCJ6biIsInlhIiwiR2EiLCJfYSIsIktuIiwicW4iLCJKbiIsInN0YXRpYyIsIlpuIiwic3RhdGljSW5Gb3IiLCJzdGF0aWNSb290IiwiV24iLCJCciIsIkduIiwiZXZlcnkiLCJZbiIsIlFuIiwidHMiLCJlcyIsIlhuIiwiUWEiLCJZYSIsImVyIiwicGFyc2VJbnQiLCJYYSIsInRyIiwid3JhcERhdGEiLCJuciIsIkNhIiwia2EiLCJBYSIsImJhIiwiJGEiLCJ3YSIsInhhIiwicnIiLCJzdGF0aWNQcm9jZXNzZWQiLCJpciIsIm9uY2VQcm9jZXNzZWQiLCJvciIsImZvclByb2Nlc3NlZCIsImNyIiwiaWZQcm9jZXNzZWQiLCJhciIsImdyIiwieXIiLCJsciIsInZyIiwic3IiLCJzaGlmdCIsInVyIiwiX3IiLCJkciIsImZyIiwicnMiLCJwciIsInNjb3BlIiwiaHIiLCJtciIsImJyIiwiJHIiLCJhc3QiLCJ3ciIsImNsYXNzQmluZGluZyIsInhyIiwiQ3IiLCJzdHlsZUJpbmRpbmciLCJrciIsIkFyIiwiT2EiLCJqciIsIk9yIiwiU3IiLCJUciIsIm51bWJlciIsIkVyIiwiTnIiLCJMciIsIkRyIiwibHMiLCJNciIsInVpIiwiY3MiLCJQciIsIlJyIiwib3V0ZXJIVE1MIiwiY2xvbmVOb2RlIiwiSXIiLCJGciIsImhhc093blByb3BlcnR5IiwiSHIiLCJ0b1VwcGVyQ2FzZSIsIkpyIiwiWXIiLCJYciIsIm5hdmlnYXRvciIsInVzZXJBZ2VudCIsIm5pIiwicmkiLCJpaSIsImdsb2JhbCIsInByb2Nlc3MiLCJlbnYiLCJWVUVfRU5WIiwiX19WVUVfREVWVE9PTFNfR0xPQkFMX0hPT0tfXyIsIlByb21pc2UiLCJyZXNvbHZlIiwiTXV0YXRpb25PYnNlcnZlciIsIm9ic2VydmUiLCJjaGFyYWN0ZXJEYXRhIiwiU2V0IiwiY2kiLCJvcHRpb25NZXJnZVN0cmF0ZWdpZXMiLCJzaWxlbnQiLCJpZ25vcmVkRWxlbWVudHMiLCJpc1Vua25vd25FbGVtZW50IiwiX2xpZmVjeWNsZUhvb2tzIiwiX21heFVwZGF0ZUNvdW50IiwiZmkiLCJzdWJzIiwiYWRkU3ViIiwicmVtb3ZlU3ViIiwiYWRkRGVwIiwidmkiLCJoaSIsIm9ic2VydmVBcnJheSIsIm1pIiwiZ2V0T3duUHJvcGVydHlOYW1lcyIsImlzU2V0dGluZ1Byb3BzIiwid2FsayIsImZyZWV6ZSIsImRlZmluZVJlYWN0aXZlIiwiX3RvU3RyaW5nIiwidG9OdW1iZXIiLCJtYWtlTWFwIiwiaXNCdWlsdEluVGFnIiwiaGFzT3duIiwiaXNQcmltaXRpdmUiLCJjYWNoZWQiLCJjYW1lbGl6ZSIsImNhcGl0YWxpemUiLCJoeXBoZW5hdGUiLCJ0b0FycmF5IiwiaXNPYmplY3QiLCJpc1BsYWluT2JqZWN0IiwidG9PYmplY3QiLCJub29wIiwiZ2VuU3RhdGljS2V5cyIsImxvb3NlRXF1YWwiLCJsb29zZUluZGV4T2YiLCJpc1Jlc2VydmVkIiwicGFyc2VQYXRoIiwiaGFzUHJvdG8iLCJpbkJyb3dzZXIiLCJVQSIsImlzSUUiLCJpc0lFOSIsImlzRWRnZSIsImlzQW5kcm9pZCIsImlzSU9TIiwiaXNTZXJ2ZXJSZW5kZXJpbmciLCJfU2V0IiwibWVyZ2VPcHRpb25zIiwicmVzb2x2ZUFzc2V0IiwiZm9ybWF0Q29tcG9uZW50TmFtZSIsInZhbGlkYXRlUHJvcCIsIk9pIiwidm0iLCJkZWVwIiwic3luYyIsImNiIiwiYWN0aXZlIiwiZGVwcyIsIm5ld0RlcHMiLCJkZXBJZHMiLCJuZXdEZXBJZHMiLCJnZXR0ZXIiLCJjbGVhbnVwRGVwcyIsIl92Rm9yUmVtb3ZpbmciLCJyYXciLCJSaSIsIklpIiwiaW5jbHVkZSIsImV4Y2x1ZGUiLCJjcmVhdGVkIiwiZGVzdHJveWVkIiwiS2VlcEFsaXZlIiwidmVyc2lvbiIsIkJpIiwiVWkiLCJzdmciLCJtYXRoIiwieGh0bWwiLCJaaSIsIkdpIiwiZW8iLCJybyIsImlvIiwic28iLCJsbyIsInVvIiwiZm8iLCJwbyIsInZvIiwibW8iLCJzZXRQcm9wZXJ0eSIsInlvIiwiYm8iLCIkbyIsIm9udHJhbnNpdGlvbmVuZCIsIm9ud2Via2l0dHJhbnNpdGlvbmVuZCIsIm9uYW5pbWF0aW9uZW5kIiwib253ZWJraXRhbmltYXRpb25lbmQiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJFbyIsIk5vIiwiTG8iLCJEbyIsImFjdGl2ZUVsZW1lbnQiLCJ2bW9kZWwiLCJNbyIsInNvbWUiLCJQbyIsImRpc3BsYXkiLCJfX3ZPcmlnaW5hbERpc3BsYXkiLCJSbyIsIm1vZGVsIiwiSW8iLCJCb29sZWFuIiwibW9kZSIsIkZvIiwiX2xlYXZpbmciLCJCbyIsIm1vdmVDbGFzcyIsIlVvIiwicHJldkNoaWxkcmVuIiwia2VwdCIsInJlbW92ZWQiLCJiZWZvcmVVcGRhdGUiLCJ1cGRhdGVkIiwiaGFzTW92ZSIsImJvZHkiLCJvZmZzZXRIZWlnaHQiLCJwcm9wZXJ0eU5hbWUiLCJfaGFzTW92ZSIsIkhvIiwiVHJhbnNpdGlvbiIsIlRyYW5zaXRpb25Hcm91cCIsImNvbmZpZyIsInpvIiwiSm8iLCJLbyIsInFvIiwic291cmNlIiwiWm8iLCJHbyIsIlNhIiwiVGEiLCJJYSIsImVzYyIsInRhYiIsInNwYWNlIiwidXAiLCJyaWdodCIsImRvd24iLCJzdG9wIiwicHJldmVudCIsInNlbGYiLCJjdHJsIiwiYWx0IiwibWV0YSIsImNsb2FrIiwiaXMiLCJ0cmFuc2Zvcm1Ob2RlIiwiZ2VuRGF0YSIsIm9zIiwiYXMiLCJzcyIsImh0bWwiLCJ1cyIsImZzIiwiZG9jdW1lbnRFbGVtZW50IiwidGVtcGxhdGUiLCJjb21waWxlIiwiZmFjdG9yeSIsIlZ1ZVJvdXRlciIsIlZpZXciLCJyb3V0ZXJWaWV3Iiwicm91dGUiLCIkcm91dGUiLCJfcm91dGVyVmlld0NhY2hlIiwiZGVwdGgiLCJpbmFjdGl2ZSIsInJvdXRlclZpZXdEZXB0aCIsIm1hdGNoZWQiLCJob29rcyIsInZub2RlIiwiaW5zdGFuY2VzIiwib2xkVm5vZGUiLCJ1bmRlZmluZWQiLCJyZXNvbHZlUGF0aCIsInJlbGF0aXZlIiwiYmFzZSIsImFwcGVuZCIsInN0YWNrIiwic2VnbWVudHMiLCJzZWdtZW50IiwicGF0aCIsImhhc2giLCJxdWVyeSIsImhhc2hJbmRleCIsInF1ZXJ5SW5kZXgiLCJjbGVhblBhdGgiLCJhc3NlcnQiLCJjb25kaXRpb24iLCJtZXNzYWdlIiwiRXJyb3IiLCJlbmNvZGUiLCJlbmNvZGVVUklDb21wb25lbnQiLCJkZWNvZGUiLCJkZWNvZGVVUklDb21wb25lbnQiLCJyZXNvbHZlUXVlcnkiLCJleHRyYVF1ZXJ5IiwicGFyc2VkUXVlcnkiLCJwYXJzZVF1ZXJ5IiwicmVzIiwicGFyYW0iLCJwYXJ0cyIsInZhbCIsInN0cmluZ2lmeVF1ZXJ5Iiwib2JqIiwicmVzdWx0IiwidmFsMiIsImNyZWF0ZVJvdXRlIiwicmVjb3JkIiwibG9jYXRpb24iLCJyZWRpcmVjdGVkRnJvbSIsInBhcmFtcyIsImZ1bGxQYXRoIiwiZ2V0RnVsbFBhdGgiLCJmb3JtYXRNYXRjaCIsIlNUQVJUIiwidHJhaWxpbmdTbGFzaFJFIiwiaXNTYW1lUm91dGUiLCJpc09iamVjdEVxdWFsIiwiYUtleXMiLCJiS2V5cyIsImlzSW5jbHVkZWRSb3V0ZSIsImN1cnJlbnQiLCJxdWVyeUluY2x1ZGVzIiwibm9ybWFsaXplTG9jYXRpb24iLCJuZXh0IiwiX25vcm1hbGl6ZWQiLCJwYXJzZWRQYXRoIiwiYmFzZVBhdGgiLCJ0b1R5cGVzIiwiTGluayIsInJlcXVpcmVkIiwiZXhhY3QiLCJhY3RpdmVDbGFzcyIsInRoaXMkMSIsIiRyb3V0ZXIiLCJoaXN0b3J5IiwiaHJlZiIsImNyZWF0ZUhyZWYiLCJjbGFzc2VzIiwibGlua0FjdGl2ZUNsYXNzIiwiY29tcGFyZVRhcmdldCIsImNsaWNrIiwibWV0YUtleSIsImN0cmxLZXkiLCJzaGlmdEtleSIsImRlZmF1bHRQcmV2ZW50ZWQiLCJidXR0b24iLCJwcmV2ZW50RGVmYXVsdCIsImZpbmRBbmNob3IiLCJfVnVlIiwiYURhdGEiLCJhQXR0cnMiLCJfcm91dGVyIiwiZ2V0JDEiLCJfcm91dGUiLCJiZWZvcmVDcmVhdGUiLCJzdHJhdHMiLCJiZWZvcmVSb3V0ZUVudGVyIiwiYmVmb3JlUm91dGVMZWF2ZSIsIl9fbW9kdWxlRXhwb3J0cyIsImFyciIsImlzYXJyYXkiLCJwYXRoVG9SZWdleHAiLCJwYXJzZV8xIiwicGFyc2UiLCJjb21waWxlXzEiLCJ0b2tlbnNUb0Z1bmN0aW9uXzEiLCJ0b2tlbnNUb0Z1bmN0aW9uIiwidG9rZW5zVG9SZWdFeHBfMSIsInRva2Vuc1RvUmVnRXhwIiwiUEFUSF9SRUdFWFAiLCJzdHIiLCJ0b2tlbnMiLCJkZWZhdWx0RGVsaW1pdGVyIiwiZGVsaW1pdGVyIiwiZXNjYXBlZCIsIm9mZnNldCIsInByZWZpeCIsImdyb3VwIiwibW9kaWZpZXIiLCJhc3RlcmlzayIsInBhcnRpYWwiLCJyZXBlYXQiLCJvcHRpb25hbCIsInBhdHRlcm4iLCJlc2NhcGVHcm91cCIsImVzY2FwZVN0cmluZyIsInN1YnN0ciIsImVuY29kZVVSSUNvbXBvbmVudFByZXR0eSIsImVuY29kZVVSSSIsImVuY29kZUFzdGVyaXNrIiwibWF0Y2hlcyIsIm9wdHMiLCJwcmV0dHkiLCJ0b2tlbiIsIlR5cGVFcnJvciIsImF0dGFjaEtleXMiLCJmbGFncyIsInNlbnNpdGl2ZSIsInJlZ2V4cFRvUmVnZXhwIiwiZ3JvdXBzIiwiYXJyYXlUb1JlZ2V4cCIsInJlZ2V4cCIsInN0cmluZ1RvUmVnZXhwIiwic3RyaWN0IiwiZW5kc1dpdGhEZWxpbWl0ZXIiLCJjcmVhdGVSb3V0ZU1hcCIsInBhdGhNYXAiLCJuYW1lTWFwIiwiYWRkUm91dGVSZWNvcmQiLCJtYXRjaEFzIiwibm9ybWFsaXplUGF0aCIsInJlZGlyZWN0IiwicmVnZXhwQ2FjaGUiLCJyZWdleHBQYXJhbXNDYWNoZSIsInJlZ2V4cENvbXBpbGVDYWNoZSIsImNyZWF0ZU1hdGNoZXIiLCJjdXJyZW50Um91dGUiLCJwYXJhbU5hbWVzIiwiZ2V0UGFyYW1zIiwiZmlsbFBhcmFtcyIsIl9jcmVhdGVSb3V0ZSIsIm1hdGNoUm91dGUiLCJvcmlnaW5hbFJlZGlyZWN0IiwidGFyZ2V0UmVjb3JkIiwicmF3UGF0aCIsInJlc29sdmVSZWNvcmRQYXRoIiwicmVzb2x2ZWRQYXRoIiwiYWxpYXNlZFBhdGgiLCJhbGlhc2VkTWF0Y2giLCJhbGlhc2VkUmVjb3JkIiwiZ2V0Um91dGVSZWdleCIsImhpdCIsInBhdGhuYW1lIiwibGVuIiwicm91dGVNc2ciLCJmaWxsZXIiLCJzdXBwb3J0c0hpc3RvcnkiLCJydW5RdWV1ZSIsInF1ZXVlIiwic3RlcCIsIkhpc3RvcnkiLCJub3JtYWxpemVCYXNlIiwicGVuZGluZyIsImxpc3RlbiIsInRyYW5zaXRpb25UbyIsImNvbmZpcm1UcmFuc2l0aW9uIiwidXBkYXRlUm91dGUiLCJlbnN1cmVVUkwiLCJyZXNvbHZlUXVldWUiLCJkZWFjdGl2YXRlZCIsImFjdGl2YXRlZCIsImV4dHJhY3RMZWF2ZUd1YXJkcyIsImJlZm9yZUhvb2tzIiwicmVzb2x2ZUFzeW5jQ29tcG9uZW50cyIsIml0ZXJhdG9yIiwicG9zdEVudGVyQ2JzIiwiZW50ZXJHdWFyZHMiLCJleHRyYWN0RW50ZXJHdWFyZHMiLCJwcmV2IiwiYWZ0ZXJIb29rcyIsImJhc2VFbCIsImV4dHJhY3RHdWFyZCIsImZsYXR0ZW4iLCJmbGF0TWFwQ29tcG9uZW50cyIsImluc3RhbmNlIiwiZ3VhcmQiLCJ3cmFwTGVhdmVHdWFyZCIsInJldmVyc2UiLCJyb3V0ZUxlYXZlR3VhcmQiLCJjYnMiLCJpc1ZhbGlkIiwid3JhcEVudGVyR3VhcmQiLCJyb3V0ZUVudGVyR3VhcmQiLCJmcm9tIiwicG9sbCIsInJlc29sdmVkRGVmIiwicmVqZWN0IiwicmVhc29uIiwicG9zaXRpb25TdG9yZSIsInNhdmVTY3JvbGxQb3NpdGlvbiIsInBhZ2VYT2Zmc2V0IiwicGFnZVlPZmZzZXQiLCJnZXRTY3JvbGxQb3NpdGlvbiIsImdldEVsZW1lbnRQb3NpdGlvbiIsImRvY1JlY3QiLCJlbFJlY3QiLCJpc1ZhbGlkUG9zaXRpb24iLCJpc051bWJlciIsIm5vcm1hbGl6ZVBvc2l0aW9uIiwiZ2VuS2V5IiwiRGF0ZSIsIm5vdyIsIl9rZXkiLCJIVE1MNUhpc3RvcnkiLCJleHBlY3RTY3JvbGwiLCJzY3JvbGxCZWhhdmlvciIsInN0YXRlIiwiZ2V0TG9jYXRpb24iLCJoYW5kbGVTY3JvbGwiLCJwdXNoU3RhdGUiLCJyZXBsYWNlU3RhdGUiLCJpc1BvcCIsImJlaGF2aW9yIiwicG9zaXRpb24iLCJzaG91bGRTY3JvbGwiLCJzZWxlY3RvciIsInNjcm9sbFRvIiwic2VhcmNoIiwidXJsIiwiSGFzaEhpc3RvcnkiLCJmYWxsYmFjayIsImNoZWNrRmFsbGJhY2siLCJlbnN1cmVTbGFzaCIsIm9uSGFzaENoYW5nZSIsImdldEhhc2giLCJyZXBsYWNlSGFzaCIsInB1c2hIYXNoIiwiQWJzdHJhY3RIaXN0b3J5IiwidGFyZ2V0SW5kZXgiLCJwcm90b3R5cGVBY2Nlc3NvcnMiLCJiZWZvcmVFYWNoIiwiYWZ0ZXJFYWNoIiwiYmFjayIsImZvcndhcmQiLCJnZXRNYXRjaGVkQ29tcG9uZW50cyIsImRlZmluZVByb3BlcnRpZXMiLCJJbmRleFZpZXciLCJyZXF1aXJlIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7O0FDN0JBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBQWdEOztBQUZBO0FBSWhELGVBQUlBLEdBQUosc0IsQ0FBaUQ7O0FBSEQ7QUFWaEQ7Ozs7Ozs7OztBQWVBLEtBQU1DLFNBQVMsd0JBQWMsRUFBQ0Msd0JBQUQsRUFBZCxDQUFmLEMsQ0FBZ0Q7QUFDaEQsS0FBTUMsTUFBTSxrQkFBUSxFQUFDRixjQUFELEVBQVIsRUFBa0JHLE1BQWxCLENBQXlCLE1BQXpCLENBQVosQyxDQUFnRCxXOzs7Ozs7Ozs7O0FDaEJoRDs7Ozs7QUFLQSxFQUFDLFVBQVNDLENBQVQsRUFBV0MsQ0FBWCxFQUFhO0FBQUMsK0NBQWlCQyxPQUFqQixNQUEwQixlQUFhLE9BQU9DLE1BQTlDLEdBQXFEQSxPQUFPRCxPQUFQLEdBQWVELEdBQXBFLEdBQXdFLFFBQXNDLG9DQUFPQSxDQUFQLG1UQUF0QyxHQUFnREQsRUFBRUksR0FBRixHQUFNSCxHQUE5SDtBQUFrSSxFQUFoSixZQUFzSixZQUFVO0FBQUM7QUFBYSxZQUFTRCxDQUFULENBQVdBLENBQVgsRUFBYTtBQUFDLFlBQU8sUUFBTUEsQ0FBTixHQUFRLEVBQVIsR0FBVyxvQkFBaUJBLENBQWpCLHlDQUFpQkEsQ0FBakIsS0FBbUJLLEtBQUtDLFNBQUwsQ0FBZU4sQ0FBZixFQUFpQixJQUFqQixFQUFzQixDQUF0QixDQUFuQixHQUE0Q08sT0FBT1AsQ0FBUCxDQUE5RDtBQUF3RSxhQUFTQyxDQUFULENBQVdELENBQVgsRUFBYTtBQUFDLFNBQUlD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UEEsTSxHQUFBQSxNOzs7Ozs7QUM1QlI7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdURBQXNELG1EQUFtRCxJQUFJO0FBQzdHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxhQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBLEVBQUM7QUFDRCxrQ0FBaUM7O0FBRWpDOzs7Ozs7Ozs7Ozs7QUNoQ0E7dUJBRUE7O3VCQUdBO0FBRkE7QUFHQTswQkFDQTtxQkFDQTtBQUNBO0FBUkE7QUFTQSx1Qjs7Ozs7O0FDZkEsaUJBQWdCLG1CQUFtQjtBQUNuQztBQUNBLEVBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiLi9tYWluL1wiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDZkZWVhN2YwMWUwMDBmYzY0M2M0IiwiLyoqXHJcbiAqIOaPj+i/sDog5YWl5Y+j6aG16Z2iXHJcbiAqIOeJiOadgzogQ29weXJpZ2h0IChjKSAyMDE2XHJcbiAqIOWFrOWPuDog5rex5Zyz5biC5piK5pmo56eR5oqA5byA5Y+R5pyJ6ZmQ5YWs5Y+4XHJcbiAqIOS9nOiAhTog6ZmI5YWDXHJcbiAqIOeJiOacrDogMS4wXHJcbiAqIOWIm+W7uuaXpeacnzogMjAxNi8xMS8yMVxyXG4gKiDliJvlu7rml7bpl7Q6IDE0OjI2XHJcbiAqL1xyXG5pbXBvcnQgVnVlIGZyb20gXCJ2dWVcIjsgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHZ1ZeahhuaetuWMhVxyXG5pbXBvcnQgVnVlUm91dGVyIGZyb20gXCJ2dWUtcm91dGVyXCI7ICAgICAgICAgICAgIC8vIOi3r+eUseaPkuS7tlxyXG5pbXBvcnQgcm91dGVzIGZyb20gXCIuL3JvdXRlclwiOyAgICAgICAgICAgICAgICAgIC8vIOWvvOWFpei3r+eUsemFjee9ruWvueixoVxyXG5cclxuVnVlLnVzZShWdWVSb3V0ZXIpOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIOWmguaenOS9v+eUqOaooeWdl+WMluacuuWItue8lueoi1xyXG5cclxuY29uc3Qgcm91dGVyID0gbmV3IFZ1ZVJvdXRlcih7cm91dGVzfSk7ICAgICAgICAgLy8g5a6e5L6L5YyW5LiA5LiqVnVlUm91dGVy6Lev55Sx5a+56LGhXHJcbmNvbnN0IGFwcCA9IG5ldyBWdWUoe3JvdXRlcn0pLiRtb3VudCgnI2FwcCcpOyAgIC8vIOWIm+W7uuWSjOaMgui9veagueWunuS+i1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9FOi9UZXN0V29yay92dWUvc3JjL2FwcC5qcyIsIi8qIVxuICogVnVlLmpzIHYyLjEuMFxuICogKGMpIDIwMTQtMjAxNiBFdmFuIFlvdVxuICogUmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuICovXG4hZnVuY3Rpb24oZSx0KXtcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cyYmXCJ1bmRlZmluZWRcIiE9dHlwZW9mIG1vZHVsZT9tb2R1bGUuZXhwb3J0cz10KCk6XCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZSh0KTplLlZ1ZT10KCl9KHRoaXMsZnVuY3Rpb24oKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiBlKGUpe3JldHVybiBudWxsPT1lP1wiXCI6XCJvYmplY3RcIj09dHlwZW9mIGU/SlNPTi5zdHJpbmdpZnkoZSxudWxsLDIpOlN0cmluZyhlKX1mdW5jdGlvbiB0KGUpe3ZhciB0PXBhcnNlRmxvYXQoZSwxMCk7cmV0dXJuIHR8fDA9PT10P3Q6ZX1mdW5jdGlvbiBuKGUsdCl7Zm9yKHZhciBuPU9iamVjdC5jcmVhdGUobnVsbCkscj1lLnNwbGl0KFwiLFwiKSxpPTA7aTxyLmxlbmd0aDtpKyspbltyW2ldXT0hMDtyZXR1cm4gdD9mdW5jdGlvbihlKXtyZXR1cm4gbltlLnRvTG93ZXJDYXNlKCldfTpmdW5jdGlvbihlKXtyZXR1cm4gbltlXX19ZnVuY3Rpb24gcihlLHQpe2lmKGUubGVuZ3RoKXt2YXIgbj1lLmluZGV4T2YodCk7aWYobj4tMSlyZXR1cm4gZS5zcGxpY2UobiwxKX19ZnVuY3Rpb24gaShlLHQpe3JldHVybiBVci5jYWxsKGUsdCl9ZnVuY3Rpb24gbyhlKXtyZXR1cm5cInN0cmluZ1wiPT10eXBlb2YgZXx8XCJudW1iZXJcIj09dHlwZW9mIGV9ZnVuY3Rpb24gYShlKXt2YXIgdD1PYmplY3QuY3JlYXRlKG51bGwpO3JldHVybiBmdW5jdGlvbihuKXt2YXIgcj10W25dO3JldHVybiByfHwodFtuXT1lKG4pKX19ZnVuY3Rpb24gcyhlLHQpe2Z1bmN0aW9uIG4obil7dmFyIHI9YXJndW1lbnRzLmxlbmd0aDtyZXR1cm4gcj9yPjE/ZS5hcHBseSh0LGFyZ3VtZW50cyk6ZS5jYWxsKHQsbik6ZS5jYWxsKHQpfXJldHVybiBuLl9sZW5ndGg9ZS5sZW5ndGgsbn1mdW5jdGlvbiBjKGUsdCl7dD10fHwwO2Zvcih2YXIgbj1lLmxlbmd0aC10LHI9bmV3IEFycmF5KG4pO24tLTspcltuXT1lW24rdF07cmV0dXJuIHJ9ZnVuY3Rpb24gbChlLHQpe2Zvcih2YXIgbiBpbiB0KWVbbl09dFtuXTtyZXR1cm4gZX1mdW5jdGlvbiB1KGUpe3JldHVybiBudWxsIT09ZSYmXCJvYmplY3RcIj09dHlwZW9mIGV9ZnVuY3Rpb24gZihlKXtyZXR1cm4gcXIuY2FsbChlKT09PVdyfWZ1bmN0aW9uIGQoZSl7Zm9yKHZhciB0PXt9LG49MDtuPGUubGVuZ3RoO24rKyllW25dJiZsKHQsZVtuXSk7cmV0dXJuIHR9ZnVuY3Rpb24gcCgpe31mdW5jdGlvbiB2KGUpe3JldHVybiBlLnJlZHVjZShmdW5jdGlvbihlLHQpe3JldHVybiBlLmNvbmNhdCh0LnN0YXRpY0tleXN8fFtdKX0sW10pLmpvaW4oXCIsXCIpfWZ1bmN0aW9uIGgoZSx0KXtyZXR1cm4gZT09dHx8ISghdShlKXx8IXUodCkpJiZKU09OLnN0cmluZ2lmeShlKT09PUpTT04uc3RyaW5naWZ5KHQpfWZ1bmN0aW9uIG0oZSx0KXtmb3IodmFyIG49MDtuPGUubGVuZ3RoO24rKylpZihoKGVbbl0sdCkpcmV0dXJuIG47cmV0dXJuLTF9ZnVuY3Rpb24gZyhlKXt2YXIgdD0oZStcIlwiKS5jaGFyQ29kZUF0KDApO3JldHVybiAzNj09PXR8fDk1PT09dH1mdW5jdGlvbiB5KGUsdCxuLHIpe09iamVjdC5kZWZpbmVQcm9wZXJ0eShlLHQse3ZhbHVlOm4sZW51bWVyYWJsZTohIXIsd3JpdGFibGU6ITAsY29uZmlndXJhYmxlOiEwfSl9ZnVuY3Rpb24gXyhlKXtpZighR3IudGVzdChlKSl7dmFyIHQ9ZS5zcGxpdChcIi5cIik7cmV0dXJuIGZ1bmN0aW9uKGUpe2Zvcih2YXIgbj0wO248dC5sZW5ndGg7bisrKXtpZighZSlyZXR1cm47ZT1lW3Rbbl1dfXJldHVybiBlfX19ZnVuY3Rpb24gYihlKXtyZXR1cm4vbmF0aXZlIGNvZGUvLnRlc3QoZS50b1N0cmluZygpKX1mdW5jdGlvbiAkKGUpe2RpLnRhcmdldCYmcGkucHVzaChkaS50YXJnZXQpLGRpLnRhcmdldD1lfWZ1bmN0aW9uIHcoKXtkaS50YXJnZXQ9cGkucG9wKCl9ZnVuY3Rpb24geChlLHQpe2UuX19wcm90b19fPXR9ZnVuY3Rpb24gQyhlLHQsbil7Zm9yKHZhciByPTAsaT1uLmxlbmd0aDtyPGk7cisrKXt2YXIgbz1uW3JdO3koZSxvLHRbb10pfX1mdW5jdGlvbiBrKGUpe2lmKHUoZSkpe3ZhciB0O3JldHVybiBpKGUsXCJfX29iX19cIikmJmUuX19vYl9fIGluc3RhbmNlb2YgeWk/dD1lLl9fb2JfXzpnaS5zaG91bGRDb252ZXJ0JiYhb2koKSYmKEFycmF5LmlzQXJyYXkoZSl8fGYoZSkpJiZPYmplY3QuaXNFeHRlbnNpYmxlKGUpJiYhZS5faXNWdWUmJih0PW5ldyB5aShlKSksdH19ZnVuY3Rpb24gQShlLHQsbixyKXt2YXIgaT1uZXcgZGksbz1PYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGUsdCk7aWYoIW98fG8uY29uZmlndXJhYmxlIT09ITEpe3ZhciBhPW8mJm8uZ2V0LHM9byYmby5zZXQsYz1rKG4pO09iamVjdC5kZWZpbmVQcm9wZXJ0eShlLHQse2VudW1lcmFibGU6ITAsY29uZmlndXJhYmxlOiEwLGdldDpmdW5jdGlvbigpe3ZhciB0PWE/YS5jYWxsKGUpOm47cmV0dXJuIGRpLnRhcmdldCYmKGkuZGVwZW5kKCksYyYmYy5kZXAuZGVwZW5kKCksQXJyYXkuaXNBcnJheSh0KSYmVCh0KSksdH0sc2V0OmZ1bmN0aW9uKHQpe3ZhciByPWE/YS5jYWxsKGUpOm47dD09PXJ8fHQhPT10JiZyIT09cnx8KHM/cy5jYWxsKGUsdCk6bj10LGM9ayh0KSxpLm5vdGlmeSgpKX19KX19ZnVuY3Rpb24gTyhlLHQsbil7aWYoQXJyYXkuaXNBcnJheShlKSlyZXR1cm4gZS5sZW5ndGg9TWF0aC5tYXgoZS5sZW5ndGgsdCksZS5zcGxpY2UodCwxLG4pLG47aWYoaShlLHQpKXJldHVybiB2b2lkKGVbdF09bik7dmFyIHI9ZS5fX29iX187aWYoIShlLl9pc1Z1ZXx8ciYmci52bUNvdW50KSlyZXR1cm4gcj8oQShyLnZhbHVlLHQsbiksci5kZXAubm90aWZ5KCksbik6dm9pZChlW3RdPW4pfWZ1bmN0aW9uIFMoZSx0KXt2YXIgbj1lLl9fb2JfXztlLl9pc1Z1ZXx8biYmbi52bUNvdW50fHxpKGUsdCkmJihkZWxldGUgZVt0XSxuJiZuLmRlcC5ub3RpZnkoKSl9ZnVuY3Rpb24gVChlKXtmb3IodmFyIHQ9dm9pZCAwLG49MCxyPWUubGVuZ3RoO248cjtuKyspdD1lW25dLHQmJnQuX19vYl9fJiZ0Ll9fb2JfXy5kZXAuZGVwZW5kKCksQXJyYXkuaXNBcnJheSh0KSYmVCh0KX1mdW5jdGlvbiBqKGUsdCl7aWYoIXQpcmV0dXJuIGU7Zm9yKHZhciBuLHIsbyxhPU9iamVjdC5rZXlzKHQpLHM9MDtzPGEubGVuZ3RoO3MrKyluPWFbc10scj1lW25dLG89dFtuXSxpKGUsbik/ZihyKSYmZihvKSYmaihyLG8pOk8oZSxuLG8pO3JldHVybiBlfWZ1bmN0aW9uIEUoZSx0KXtyZXR1cm4gdD9lP2UuY29uY2F0KHQpOkFycmF5LmlzQXJyYXkodCk/dDpbdF06ZX1mdW5jdGlvbiBOKGUsdCl7dmFyIG49T2JqZWN0LmNyZWF0ZShlfHxudWxsKTtyZXR1cm4gdD9sKG4sdCk6bn1mdW5jdGlvbiBMKGUpe3ZhciB0PWUucHJvcHM7aWYodCl7dmFyIG4scixpLG89e307aWYoQXJyYXkuaXNBcnJheSh0KSlmb3Iobj10Lmxlbmd0aDtuLS07KXI9dFtuXSxcInN0cmluZ1wiPT10eXBlb2YgciYmKGk9VnIociksb1tpXT17dHlwZTpudWxsfSk7ZWxzZSBpZihmKHQpKWZvcih2YXIgYSBpbiB0KXI9dFthXSxpPVZyKGEpLG9baV09ZihyKT9yOnt0eXBlOnJ9O2UucHJvcHM9b319ZnVuY3Rpb24gRChlKXt2YXIgdD1lLmRpcmVjdGl2ZXM7aWYodClmb3IodmFyIG4gaW4gdCl7dmFyIHI9dFtuXTtcImZ1bmN0aW9uXCI9PXR5cGVvZiByJiYodFtuXT17YmluZDpyLHVwZGF0ZTpyfSl9fWZ1bmN0aW9uIE0oZSx0LG4pe2Z1bmN0aW9uIHIocil7dmFyIGk9X2lbcl18fGJpO3Vbcl09aShlW3JdLHRbcl0sbixyKX1MKHQpLEQodCk7dmFyIG89dC5leHRlbmRzO2lmKG8mJihlPVwiZnVuY3Rpb25cIj09dHlwZW9mIG8/TShlLG8ub3B0aW9ucyxuKTpNKGUsbyxuKSksdC5taXhpbnMpZm9yKHZhciBhPTAscz10Lm1peGlucy5sZW5ndGg7YTxzO2ErKyl7dmFyIGM9dC5taXhpbnNbYV07Yy5wcm90b3R5cGUgaW5zdGFuY2VvZiBSZSYmKGM9Yy5vcHRpb25zKSxlPU0oZSxjLG4pfXZhciBsLHU9e307Zm9yKGwgaW4gZSlyKGwpO2ZvcihsIGluIHQpaShlLGwpfHxyKGwpO3JldHVybiB1fWZ1bmN0aW9uIFAoZSx0LG4scil7aWYoXCJzdHJpbmdcIj09dHlwZW9mIG4pe3ZhciBpPWVbdF0sbz1pW25dfHxpW1ZyKG4pXXx8aVt6cihWcihuKSldO3JldHVybiBvfX1mdW5jdGlvbiBSKGUsdCxuLHIpe3ZhciBvPXRbZV0sYT0haShuLGUpLHM9bltlXTtpZihCKG8udHlwZSkmJihhJiYhaShvLFwiZGVmYXVsdFwiKT9zPSExOlwiXCIhPT1zJiZzIT09S3IoZSl8fChzPSEwKSksdm9pZCAwPT09cyl7cz1JKHIsbyxlKTt2YXIgYz1naS5zaG91bGRDb252ZXJ0O2dpLnNob3VsZENvbnZlcnQ9ITAsayhzKSxnaS5zaG91bGRDb252ZXJ0PWN9cmV0dXJuIHN9ZnVuY3Rpb24gSShlLHQsbil7aWYoaSh0LFwiZGVmYXVsdFwiKSl7dmFyIHI9dC5kZWZhdWx0O3JldHVybiB1KHIpLGUmJmUuJG9wdGlvbnMucHJvcHNEYXRhJiZ2b2lkIDA9PT1lLiRvcHRpb25zLnByb3BzRGF0YVtuXSYmdm9pZCAwIT09ZVtuXT9lW25dOlwiZnVuY3Rpb25cIj09dHlwZW9mIHImJnQudHlwZSE9PUZ1bmN0aW9uP3IuY2FsbChlKTpyfX1mdW5jdGlvbiBGKGUpe3ZhciB0PWUmJmUudG9TdHJpbmcoKS5tYXRjaCgvXlxccypmdW5jdGlvbiAoXFx3KykvKTtyZXR1cm4gdCYmdFsxXX1mdW5jdGlvbiBCKGUpe2lmKCFBcnJheS5pc0FycmF5KGUpKXJldHVyblwiQm9vbGVhblwiPT09RihlKTtmb3IodmFyIHQ9MCxuPWUubGVuZ3RoO3Q8bjt0KyspaWYoXCJCb29sZWFuXCI9PT1GKGVbdF0pKXJldHVybiEwO3JldHVybiExfWZ1bmN0aW9uIFUoKXt3aS5sZW5ndGg9MCx4aT17fSxDaT1raT0hMX1mdW5jdGlvbiBIKCl7Zm9yKGtpPSEwLHdpLnNvcnQoZnVuY3Rpb24oZSx0KXtyZXR1cm4gZS5pZC10LmlkfSksQWk9MDtBaTx3aS5sZW5ndGg7QWkrKyl7dmFyIGU9d2lbQWldLHQ9ZS5pZDt4aVt0XT1udWxsLGUucnVuKCl9YWkmJmxpLmRldnRvb2xzJiZhaS5lbWl0KFwiZmx1c2hcIiksVSgpfWZ1bmN0aW9uIFYoZSl7dmFyIHQ9ZS5pZDtpZihudWxsPT14aVt0XSl7aWYoeGlbdF09ITAsa2kpe2Zvcih2YXIgbj13aS5sZW5ndGgtMTtuPj0wJiZ3aVtuXS5pZD5lLmlkOyluLS07d2kuc3BsaWNlKE1hdGgubWF4KG4sQWkpKzEsMCxlKX1lbHNlIHdpLnB1c2goZSk7Q2l8fChDaT0hMCxzaShIKSl9fWZ1bmN0aW9uIHooZSl7VGkuY2xlYXIoKSxKKGUsVGkpfWZ1bmN0aW9uIEooZSx0KXt2YXIgbixyLGk9QXJyYXkuaXNBcnJheShlKTtpZigoaXx8dShlKSkmJk9iamVjdC5pc0V4dGVuc2libGUoZSkpe2lmKGUuX19vYl9fKXt2YXIgbz1lLl9fb2JfXy5kZXAuaWQ7aWYodC5oYXMobykpcmV0dXJuO3QuYWRkKG8pfWlmKGkpZm9yKG49ZS5sZW5ndGg7bi0tOylKKGVbbl0sdCk7ZWxzZSBmb3Iocj1PYmplY3Qua2V5cyhlKSxuPXIubGVuZ3RoO24tLTspSihlW3Jbbl1dLHQpfX1mdW5jdGlvbiBLKGUpe2UuX3dhdGNoZXJzPVtdLHEoZSksVyhlKSxaKGUpLFkoZSksUShlKX1mdW5jdGlvbiBxKGUpe3ZhciB0PWUuJG9wdGlvbnMucHJvcHM7aWYodCl7dmFyIG49ZS4kb3B0aW9ucy5wcm9wc0RhdGF8fHt9LHI9ZS4kb3B0aW9ucy5fcHJvcEtleXM9T2JqZWN0LmtleXModCksaT0hZS4kcGFyZW50O2dpLnNob3VsZENvbnZlcnQ9aTtmb3IodmFyIG89ZnVuY3Rpb24oaSl7dmFyIG89cltpXTtBKGUsbyxSKG8sdCxuLGUpKX0sYT0wO2E8ci5sZW5ndGg7YSsrKW8oYSk7Z2kuc2hvdWxkQ29udmVydD0hMH19ZnVuY3Rpb24gVyhlKXt2YXIgdD1lLiRvcHRpb25zLmRhdGE7dD1lLl9kYXRhPVwiZnVuY3Rpb25cIj09dHlwZW9mIHQ/dC5jYWxsKGUpOnR8fHt9LGYodCl8fCh0PXt9KTtmb3IodmFyIG49T2JqZWN0LmtleXModCkscj1lLiRvcHRpb25zLnByb3BzLG89bi5sZW5ndGg7by0tOylyJiZpKHIsbltvXSl8fHRlKGUsbltvXSk7ayh0KSx0Ll9fb2JfXyYmdC5fX29iX18udm1Db3VudCsrfWZ1bmN0aW9uIFooZSl7dmFyIHQ9ZS4kb3B0aW9ucy5jb21wdXRlZDtpZih0KWZvcih2YXIgbiBpbiB0KXt2YXIgcj10W25dO1wiZnVuY3Rpb25cIj09dHlwZW9mIHI/KGppLmdldD1HKHIsZSksamkuc2V0PXApOihqaS5nZXQ9ci5nZXQ/ci5jYWNoZSE9PSExP0coci5nZXQsZSk6cyhyLmdldCxlKTpwLGppLnNldD1yLnNldD9zKHIuc2V0LGUpOnApLE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLG4samkpfX1mdW5jdGlvbiBHKGUsdCl7dmFyIG49bmV3IFNpKHQsZSxwLHtsYXp5OiEwfSk7cmV0dXJuIGZ1bmN0aW9uKCl7cmV0dXJuIG4uZGlydHkmJm4uZXZhbHVhdGUoKSxkaS50YXJnZXQmJm4uZGVwZW5kKCksbi52YWx1ZX19ZnVuY3Rpb24gWShlKXt2YXIgdD1lLiRvcHRpb25zLm1ldGhvZHM7aWYodClmb3IodmFyIG4gaW4gdCllW25dPW51bGw9PXRbbl0/cDpzKHRbbl0sZSl9ZnVuY3Rpb24gUShlKXt2YXIgdD1lLiRvcHRpb25zLndhdGNoO2lmKHQpZm9yKHZhciBuIGluIHQpe3ZhciByPXRbbl07aWYoQXJyYXkuaXNBcnJheShyKSlmb3IodmFyIGk9MDtpPHIubGVuZ3RoO2krKylYKGUsbixyW2ldKTtlbHNlIFgoZSxuLHIpfX1mdW5jdGlvbiBYKGUsdCxuKXt2YXIgcjtmKG4pJiYocj1uLG49bi5oYW5kbGVyKSxcInN0cmluZ1wiPT10eXBlb2YgbiYmKG49ZVtuXSksZS4kd2F0Y2godCxuLHIpfWZ1bmN0aW9uIGVlKGUpe3ZhciB0PXt9O3QuZ2V0PWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuX2RhdGF9LE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLnByb3RvdHlwZSxcIiRkYXRhXCIsdCksZS5wcm90b3R5cGUuJHNldD1PLGUucHJvdG90eXBlLiRkZWxldGU9UyxlLnByb3RvdHlwZS4kd2F0Y2g9ZnVuY3Rpb24oZSx0LG4pe3ZhciByPXRoaXM7bj1ufHx7fSxuLnVzZXI9ITA7dmFyIGk9bmV3IFNpKHIsZSx0LG4pO3JldHVybiBuLmltbWVkaWF0ZSYmdC5jYWxsKHIsaS52YWx1ZSksZnVuY3Rpb24oKXtpLnRlYXJkb3duKCl9fX1mdW5jdGlvbiB0ZShlLHQpe2codCl8fE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLHQse2NvbmZpZ3VyYWJsZTohMCxlbnVtZXJhYmxlOiEwLGdldDpmdW5jdGlvbigpe3JldHVybiBlLl9kYXRhW3RdfSxzZXQ6ZnVuY3Rpb24obil7ZS5fZGF0YVt0XT1ufX0pfWZ1bmN0aW9uIG5lKGUpe3ZhciB0PW5ldyBFaShlLnRhZyxlLmRhdGEsZS5jaGlsZHJlbixlLnRleHQsZS5lbG0sZS5ucyxlLmNvbnRleHQsZS5jb21wb25lbnRPcHRpb25zKTtyZXR1cm4gdC5pc1N0YXRpYz1lLmlzU3RhdGljLHQua2V5PWUua2V5LHQuaXNDbG9uZWQ9ITAsdH1mdW5jdGlvbiByZShlKXtmb3IodmFyIHQ9bmV3IEFycmF5KGUubGVuZ3RoKSxuPTA7bjxlLmxlbmd0aDtuKyspdFtuXT1uZShlW25dKTtyZXR1cm4gdH1mdW5jdGlvbiBpZShlLHQsbixyKXtyKz10O3ZhciBpPWUuX19pbmplY3RlZHx8KGUuX19pbmplY3RlZD17fSk7aWYoIWlbcl0pe2lbcl09ITA7dmFyIG89ZVt0XTtvP2VbdF09ZnVuY3Rpb24oKXtvLmFwcGx5KHRoaXMsYXJndW1lbnRzKSxuLmFwcGx5KHRoaXMsYXJndW1lbnRzKX06ZVt0XT1ufX1mdW5jdGlvbiBvZShlLHQsbixyLGkpe3ZhciBvLGEscyxjLGwsdTtmb3IobyBpbiBlKWlmKGE9ZVtvXSxzPXRbb10sYSlpZihzKXtpZihhIT09cylpZihBcnJheS5pc0FycmF5KHMpKXtzLmxlbmd0aD1hLmxlbmd0aDtmb3IodmFyIGY9MDtmPHMubGVuZ3RoO2YrKylzW2ZdPWFbZl07ZVtvXT1zfWVsc2Ugcy5mbj1hLGVbb109c31lbHNlIHU9XCIhXCI9PT1vLmNoYXJBdCgwKSxsPXU/by5zbGljZSgxKTpvLEFycmF5LmlzQXJyYXkoYSk/bihsLGEuaW52b2tlcj1hZShhKSx1KTooYS5pbnZva2VyfHwoYz1hLGE9ZVtvXT17fSxhLmZuPWMsYS5pbnZva2VyPXNlKGEpKSxuKGwsYS5pbnZva2VyLHUpKTtlbHNlO2ZvcihvIGluIHQpZVtvXXx8KGw9XCIhXCI9PT1vLmNoYXJBdCgwKT9vLnNsaWNlKDEpOm8scihsLHRbb10uaW52b2tlcikpfWZ1bmN0aW9uIGFlKGUpe3JldHVybiBmdW5jdGlvbih0KXtmb3IodmFyIG49YXJndW1lbnRzLHI9MT09PWFyZ3VtZW50cy5sZW5ndGgsaT0wO2k8ZS5sZW5ndGg7aSsrKXI/ZVtpXSh0KTplW2ldLmFwcGx5KG51bGwsbil9fWZ1bmN0aW9uIHNlKGUpe3JldHVybiBmdW5jdGlvbih0KXt2YXIgbj0xPT09YXJndW1lbnRzLmxlbmd0aDtuP2UuZm4odCk6ZS5mbi5hcHBseShudWxsLGFyZ3VtZW50cyl9fWZ1bmN0aW9uIGNlKGUsdCxuKXtpZihvKGUpKXJldHVybltsZShlKV07aWYoQXJyYXkuaXNBcnJheShlKSl7Zm9yKHZhciByPVtdLGk9MCxhPWUubGVuZ3RoO2k8YTtpKyspe3ZhciBzPWVbaV0sYz1yW3IubGVuZ3RoLTFdO0FycmF5LmlzQXJyYXkocyk/ci5wdXNoLmFwcGx5KHIsY2Uocyx0LChufHxcIlwiKStcIl9cIitpKSk6byhzKT9jJiZjLnRleHQ/Yy50ZXh0Kz1TdHJpbmcocyk6XCJcIiE9PXMmJnIucHVzaChsZShzKSk6cyBpbnN0YW5jZW9mIEVpJiYocy50ZXh0JiZjJiZjLnRleHQ/Yy5pc0Nsb25lZHx8KGMudGV4dCs9cy50ZXh0KToodCYmdWUocyx0KSxzLnRhZyYmbnVsbD09cy5rZXkmJm51bGwhPW4mJihzLmtleT1cIl9fdmxpc3RcIituK1wiX1wiK2krXCJfX1wiKSxyLnB1c2gocykpKX1yZXR1cm4gcn19ZnVuY3Rpb24gbGUoZSl7cmV0dXJuIG5ldyBFaSh2b2lkIDAsdm9pZCAwLHZvaWQgMCxTdHJpbmcoZSkpfWZ1bmN0aW9uIHVlKGUsdCl7aWYoZS50YWcmJiFlLm5zJiYoZS5ucz10LGUuY2hpbGRyZW4pKWZvcih2YXIgbj0wLHI9ZS5jaGlsZHJlbi5sZW5ndGg7bjxyO24rKyl1ZShlLmNoaWxkcmVuW25dLHQpfWZ1bmN0aW9uIGZlKGUpe3JldHVybiBlJiZlLmZpbHRlcihmdW5jdGlvbihlKXtyZXR1cm4gZSYmZS5jb21wb25lbnRPcHRpb25zfSlbMF19ZnVuY3Rpb24gZGUoZSl7dmFyIHQ9ZS4kb3B0aW9ucyxuPXQucGFyZW50O2lmKG4mJiF0LmFic3RyYWN0KXtmb3IoO24uJG9wdGlvbnMuYWJzdHJhY3QmJm4uJHBhcmVudDspbj1uLiRwYXJlbnQ7bi4kY2hpbGRyZW4ucHVzaChlKX1lLiRwYXJlbnQ9bixlLiRyb290PW4/bi4kcm9vdDplLGUuJGNoaWxkcmVuPVtdLGUuJHJlZnM9e30sZS5fd2F0Y2hlcj1udWxsLGUuX2luYWN0aXZlPSExLGUuX2lzTW91bnRlZD0hMSxlLl9pc0Rlc3Ryb3llZD0hMSxlLl9pc0JlaW5nRGVzdHJveWVkPSExfWZ1bmN0aW9uIHBlKGUpe2UucHJvdG90eXBlLl9tb3VudD1mdW5jdGlvbihlLHQpe3ZhciBuPXRoaXM7cmV0dXJuIG4uJGVsPWUsbi4kb3B0aW9ucy5yZW5kZXJ8fChuLiRvcHRpb25zLnJlbmRlcj1OaSksdmUobixcImJlZm9yZU1vdW50XCIpLG4uX3dhdGNoZXI9bmV3IFNpKG4sZnVuY3Rpb24oKXtuLl91cGRhdGUobi5fcmVuZGVyKCksdCl9LHApLHQ9ITEsbnVsbD09bi4kdm5vZGUmJihuLl9pc01vdW50ZWQ9ITAsdmUobixcIm1vdW50ZWRcIikpLG59LGUucHJvdG90eXBlLl91cGRhdGU9ZnVuY3Rpb24oZSx0KXt2YXIgbj10aGlzO24uX2lzTW91bnRlZCYmdmUobixcImJlZm9yZVVwZGF0ZVwiKTt2YXIgcj1uLiRlbCxpPUxpO0xpPW47dmFyIG89bi5fdm5vZGU7bi5fdm5vZGU9ZSxvP24uJGVsPW4uX19wYXRjaF9fKG8sZSk6bi4kZWw9bi5fX3BhdGNoX18obi4kZWwsZSx0KSxMaT1pLHImJihyLl9fdnVlX189bnVsbCksbi4kZWwmJihuLiRlbC5fX3Z1ZV9fPW4pLG4uJHZub2RlJiZuLiRwYXJlbnQmJm4uJHZub2RlPT09bi4kcGFyZW50Ll92bm9kZSYmKG4uJHBhcmVudC4kZWw9bi4kZWwpLG4uX2lzTW91bnRlZCYmdmUobixcInVwZGF0ZWRcIil9LGUucHJvdG90eXBlLl91cGRhdGVGcm9tUGFyZW50PWZ1bmN0aW9uKGUsdCxuLHIpe3ZhciBpPXRoaXMsbz0hKCFpLiRvcHRpb25zLl9yZW5kZXJDaGlsZHJlbiYmIXIpO2lmKGkuJG9wdGlvbnMuX3BhcmVudFZub2RlPW4saS4kb3B0aW9ucy5fcmVuZGVyQ2hpbGRyZW49cixlJiZpLiRvcHRpb25zLnByb3BzKXtnaS5zaG91bGRDb252ZXJ0PSExO2Zvcih2YXIgYT1pLiRvcHRpb25zLl9wcm9wS2V5c3x8W10scz0wO3M8YS5sZW5ndGg7cysrKXt2YXIgYz1hW3NdO2lbY109UihjLGkuJG9wdGlvbnMucHJvcHMsZSxpKX1naS5zaG91bGRDb252ZXJ0PSEwLGkuJG9wdGlvbnMucHJvcHNEYXRhPWV9aWYodCl7dmFyIGw9aS4kb3B0aW9ucy5fcGFyZW50TGlzdGVuZXJzO2kuJG9wdGlvbnMuX3BhcmVudExpc3RlbmVycz10LGkuX3VwZGF0ZUxpc3RlbmVycyh0LGwpfW8mJihpLiRzbG90cz1FZShyLGkuX3JlbmRlckNvbnRleHQpLGkuJGZvcmNlVXBkYXRlKCkpfSxlLnByb3RvdHlwZS4kZm9yY2VVcGRhdGU9ZnVuY3Rpb24oKXt2YXIgZT10aGlzO2UuX3dhdGNoZXImJmUuX3dhdGNoZXIudXBkYXRlKCl9LGUucHJvdG90eXBlLiRkZXN0cm95PWZ1bmN0aW9uKCl7dmFyIGU9dGhpcztpZighZS5faXNCZWluZ0Rlc3Ryb3llZCl7dmUoZSxcImJlZm9yZURlc3Ryb3lcIiksZS5faXNCZWluZ0Rlc3Ryb3llZD0hMDt2YXIgdD1lLiRwYXJlbnQ7IXR8fHQuX2lzQmVpbmdEZXN0cm95ZWR8fGUuJG9wdGlvbnMuYWJzdHJhY3R8fHIodC4kY2hpbGRyZW4sZSksZS5fd2F0Y2hlciYmZS5fd2F0Y2hlci50ZWFyZG93bigpO2Zvcih2YXIgbj1lLl93YXRjaGVycy5sZW5ndGg7bi0tOyllLl93YXRjaGVyc1tuXS50ZWFyZG93bigpO2UuX2RhdGEuX19vYl9fJiZlLl9kYXRhLl9fb2JfXy52bUNvdW50LS0sZS5faXNEZXN0cm95ZWQ9ITAsdmUoZSxcImRlc3Ryb3llZFwiKSxlLiRvZmYoKSxlLiRlbCYmKGUuJGVsLl9fdnVlX189bnVsbCksZS5fX3BhdGNoX18oZS5fdm5vZGUsbnVsbCl9fX1mdW5jdGlvbiB2ZShlLHQpe3ZhciBuPWUuJG9wdGlvbnNbdF07aWYobilmb3IodmFyIHI9MCxpPW4ubGVuZ3RoO3I8aTtyKyspbltyXS5jYWxsKGUpO2UuJGVtaXQoXCJob29rOlwiK3QpfWZ1bmN0aW9uIGhlKGUsdCxuLHIsaSl7aWYoZSl7dmFyIG89bi4kb3B0aW9ucy5fYmFzZTtpZih1KGUpJiYoZT1vLmV4dGVuZChlKSksXCJmdW5jdGlvblwiPT10eXBlb2YgZSl7aWYoIWUuY2lkKWlmKGUucmVzb2x2ZWQpZT1lLnJlc29sdmVkO2Vsc2UgaWYoZT13ZShlLG8sZnVuY3Rpb24oKXtuLiRmb3JjZVVwZGF0ZSgpfSksIWUpcmV0dXJuO1BlKGUpLHQ9dHx8e307dmFyIGE9eGUodCxlKTtpZihlLm9wdGlvbnMuZnVuY3Rpb25hbClyZXR1cm4gbWUoZSxhLHQsbixyKTt2YXIgcz10Lm9uO3Qub249dC5uYXRpdmVPbixlLm9wdGlvbnMuYWJzdHJhY3QmJih0PXt9KSxrZSh0KTt2YXIgYz1lLm9wdGlvbnMubmFtZXx8aSxsPW5ldyBFaShcInZ1ZS1jb21wb25lbnQtXCIrZS5jaWQrKGM/XCItXCIrYzpcIlwiKSx0LHZvaWQgMCx2b2lkIDAsdm9pZCAwLHZvaWQgMCxuLHtDdG9yOmUscHJvcHNEYXRhOmEsbGlzdGVuZXJzOnMsdGFnOmksY2hpbGRyZW46cn0pO3JldHVybiBsfX19ZnVuY3Rpb24gbWUoZSx0LG4scixpKXt2YXIgbz17fSxhPWUub3B0aW9ucy5wcm9wcztpZihhKWZvcih2YXIgYyBpbiBhKW9bY109UihjLGEsdCk7dmFyIGw9ZS5vcHRpb25zLnJlbmRlci5jYWxsKG51bGwscyhPZSx7X3NlbGY6T2JqZWN0LmNyZWF0ZShyKX0pLHtwcm9wczpvLGRhdGE6bixwYXJlbnQ6cixjaGlsZHJlbjpjZShpKSxzbG90czpmdW5jdGlvbigpe3JldHVybiBFZShpLHIpfX0pO3JldHVybiBsIGluc3RhbmNlb2YgRWkmJihsLmZ1bmN0aW9uYWxDb250ZXh0PXIsbi5zbG90JiYoKGwuZGF0YXx8KGwuZGF0YT17fSkpLnNsb3Q9bi5zbG90KSksbH1mdW5jdGlvbiBnZShlLHQpe3ZhciBuPWUuY29tcG9uZW50T3B0aW9ucyxyPXtfaXNDb21wb25lbnQ6ITAscGFyZW50OnQscHJvcHNEYXRhOm4ucHJvcHNEYXRhLF9jb21wb25lbnRUYWc6bi50YWcsX3BhcmVudFZub2RlOmUsX3BhcmVudExpc3RlbmVyczpuLmxpc3RlbmVycyxfcmVuZGVyQ2hpbGRyZW46bi5jaGlsZHJlbn0saT1lLmRhdGEuaW5saW5lVGVtcGxhdGU7cmV0dXJuIGkmJihyLnJlbmRlcj1pLnJlbmRlcixyLnN0YXRpY1JlbmRlckZucz1pLnN0YXRpY1JlbmRlckZucyksbmV3IG4uQ3RvcihyKX1mdW5jdGlvbiB5ZShlLHQpe2lmKCFlLmNoaWxkfHxlLmNoaWxkLl9pc0Rlc3Ryb3llZCl7dmFyIG49ZS5jaGlsZD1nZShlLExpKTtuLiRtb3VudCh0P2UuZWxtOnZvaWQgMCx0KX1lbHNlIGlmKGUuZGF0YS5rZWVwQWxpdmUpe3ZhciByPWU7X2UocixyKX19ZnVuY3Rpb24gX2UoZSx0KXt2YXIgbj10LmNvbXBvbmVudE9wdGlvbnMscj10LmNoaWxkPWUuY2hpbGQ7ci5fdXBkYXRlRnJvbVBhcmVudChuLnByb3BzRGF0YSxuLmxpc3RlbmVycyx0LG4uY2hpbGRyZW4pfWZ1bmN0aW9uIGJlKGUpe2UuY2hpbGQuX2lzTW91bnRlZHx8KGUuY2hpbGQuX2lzTW91bnRlZD0hMCx2ZShlLmNoaWxkLFwibW91bnRlZFwiKSksZS5kYXRhLmtlZXBBbGl2ZSYmKGUuY2hpbGQuX2luYWN0aXZlPSExLHZlKGUuY2hpbGQsXCJhY3RpdmF0ZWRcIikpfWZ1bmN0aW9uICRlKGUpe2UuY2hpbGQuX2lzRGVzdHJveWVkfHwoZS5kYXRhLmtlZXBBbGl2ZT8oZS5jaGlsZC5faW5hY3RpdmU9ITAsdmUoZS5jaGlsZCxcImRlYWN0aXZhdGVkXCIpKTplLmNoaWxkLiRkZXN0cm95KCkpfWZ1bmN0aW9uIHdlKGUsdCxuKXtpZighZS5yZXF1ZXN0ZWQpe2UucmVxdWVzdGVkPSEwO3ZhciByPWUucGVuZGluZ0NhbGxiYWNrcz1bbl0saT0hMCxvPWZ1bmN0aW9uKG4pe2lmKHUobikmJihuPXQuZXh0ZW5kKG4pKSxlLnJlc29sdmVkPW4sIWkpZm9yKHZhciBvPTAsYT1yLmxlbmd0aDtvPGE7bysrKXJbb10obil9LGE9ZnVuY3Rpb24oZSl7fSxzPWUobyxhKTtyZXR1cm4gcyYmXCJmdW5jdGlvblwiPT10eXBlb2Ygcy50aGVuJiYhZS5yZXNvbHZlZCYmcy50aGVuKG8sYSksaT0hMSxlLnJlc29sdmVkfWUucGVuZGluZ0NhbGxiYWNrcy5wdXNoKG4pfWZ1bmN0aW9uIHhlKGUsdCl7dmFyIG49dC5vcHRpb25zLnByb3BzO2lmKG4pe3ZhciByPXt9LGk9ZS5hdHRycyxvPWUucHJvcHMsYT1lLmRvbVByb3BzO2lmKGl8fG98fGEpZm9yKHZhciBzIGluIG4pe3ZhciBjPUtyKHMpO0NlKHIsbyxzLGMsITApfHxDZShyLGkscyxjKXx8Q2UocixhLHMsYyl9cmV0dXJuIHJ9fWZ1bmN0aW9uIENlKGUsdCxuLHIsbyl7aWYodCl7aWYoaSh0LG4pKXJldHVybiBlW25dPXRbbl0sb3x8ZGVsZXRlIHRbbl0sITA7aWYoaSh0LHIpKXJldHVybiBlW25dPXRbcl0sb3x8ZGVsZXRlIHRbcl0sITB9cmV0dXJuITF9ZnVuY3Rpb24ga2UoZSl7ZS5ob29rfHwoZS5ob29rPXt9KTtmb3IodmFyIHQ9MDt0PE1pLmxlbmd0aDt0Kyspe3ZhciBuPU1pW3RdLHI9ZS5ob29rW25dLGk9RGlbbl07ZS5ob29rW25dPXI/QWUoaSxyKTppfX1mdW5jdGlvbiBBZShlLHQpe3JldHVybiBmdW5jdGlvbihuLHIpe2UobixyKSx0KG4scil9fWZ1bmN0aW9uIE9lKGUsdCxuKXtyZXR1cm4gdCYmKEFycmF5LmlzQXJyYXkodCl8fFwib2JqZWN0XCIhPXR5cGVvZiB0KSYmKG49dCx0PXZvaWQgMCksU2UodGhpcy5fc2VsZixlLHQsbil9ZnVuY3Rpb24gU2UoZSx0LG4scil7aWYoIW58fCFuLl9fb2JfXyl7aWYoIXQpcmV0dXJuIE5pKCk7aWYoQXJyYXkuaXNBcnJheShyKSYmXCJmdW5jdGlvblwiPT10eXBlb2YgclswXSYmKG49bnx8e30sbi5zY29wZWRTbG90cz17ZGVmYXVsdDpyWzBdfSxyLmxlbmd0aD0wKSxcInN0cmluZ1wiPT10eXBlb2YgdCl7dmFyIGksbz1saS5nZXRUYWdOYW1lc3BhY2UodCk7aWYobGkuaXNSZXNlcnZlZFRhZyh0KSlyZXR1cm4gbmV3IEVpKHQsbixjZShyLG8pLHZvaWQgMCx2b2lkIDAsbyxlKTtpZihpPVAoZS4kb3B0aW9ucyxcImNvbXBvbmVudHNcIix0KSlyZXR1cm4gaGUoaSxuLGUscix0KTt2YXIgYT1cImZvcmVpZ25PYmplY3RcIj09PXQ/XCJ4aHRtbFwiOm87cmV0dXJuIG5ldyBFaSh0LG4sY2UocixhKSx2b2lkIDAsdm9pZCAwLG8sZSl9cmV0dXJuIGhlKHQsbixlLHIpfX1mdW5jdGlvbiBUZShlKXtlLiR2bm9kZT1udWxsLGUuX3Zub2RlPW51bGwsZS5fc3RhdGljVHJlZXM9bnVsbCxlLl9yZW5kZXJDb250ZXh0PWUuJG9wdGlvbnMuX3BhcmVudFZub2RlJiZlLiRvcHRpb25zLl9wYXJlbnRWbm9kZS5jb250ZXh0LGUuJHNsb3RzPUVlKGUuJG9wdGlvbnMuX3JlbmRlckNoaWxkcmVuLGUuX3JlbmRlckNvbnRleHQpLGUuJHNjb3BlZFNsb3RzPW51bGwsZS4kY3JlYXRlRWxlbWVudD1zKE9lLGUpLGUuJG9wdGlvbnMuZWwmJmUuJG1vdW50KGUuJG9wdGlvbnMuZWwpfWZ1bmN0aW9uIGplKG4pe2Z1bmN0aW9uIHIoZSx0LG4pe2lmKEFycmF5LmlzQXJyYXkoZSkpZm9yKHZhciByPTA7cjxlLmxlbmd0aDtyKyspZVtyXSYmXCJzdHJpbmdcIiE9dHlwZW9mIGVbcl0mJmkoZVtyXSx0K1wiX1wiK3Isbik7ZWxzZSBpKGUsdCxuKX1mdW5jdGlvbiBpKGUsdCxuKXtlLmlzU3RhdGljPSEwLGUua2V5PXQsZS5pc09uY2U9bn1uLnByb3RvdHlwZS4kbmV4dFRpY2s9ZnVuY3Rpb24oZSl7cmV0dXJuIHNpKGUsdGhpcyl9LG4ucHJvdG90eXBlLl9yZW5kZXI9ZnVuY3Rpb24oKXt2YXIgZT10aGlzLHQ9ZS4kb3B0aW9ucyxuPXQucmVuZGVyLHI9dC5zdGF0aWNSZW5kZXJGbnMsaT10Ll9wYXJlbnRWbm9kZTtpZihlLl9pc01vdW50ZWQpZm9yKHZhciBvIGluIGUuJHNsb3RzKWUuJHNsb3RzW29dPXJlKGUuJHNsb3RzW29dKTtpJiYoZS4kc2NvcGVkU2xvdHM9aS5kYXRhLnNjb3BlZFNsb3RzKSxyJiYhZS5fc3RhdGljVHJlZXMmJihlLl9zdGF0aWNUcmVlcz1bXSksZS4kdm5vZGU9aTt2YXIgYTt0cnl7YT1uLmNhbGwoZS5fcmVuZGVyUHJveHksZS4kY3JlYXRlRWxlbWVudCl9Y2F0Y2godCl7aWYobGkuZXJyb3JIYW5kbGVyKWxpLmVycm9ySGFuZGxlci5jYWxsKG51bGwsdCxlKTtlbHNle2lmKG9pKCkpdGhyb3cgdDtjb25zb2xlLmVycm9yKHQpfWE9ZS5fdm5vZGV9cmV0dXJuIGEgaW5zdGFuY2VvZiBFaXx8KGE9TmkoKSksYS5wYXJlbnQ9aSxhfSxuLnByb3RvdHlwZS5faD1PZSxuLnByb3RvdHlwZS5fcz1lLG4ucHJvdG90eXBlLl9uPXQsbi5wcm90b3R5cGUuX2U9Tmksbi5wcm90b3R5cGUuX3E9aCxuLnByb3RvdHlwZS5faT1tLG4ucHJvdG90eXBlLl9tPWZ1bmN0aW9uKGUsdCl7dmFyIG49dGhpcy5fc3RhdGljVHJlZXNbZV07cmV0dXJuIG4mJiF0P0FycmF5LmlzQXJyYXkobik/cmUobik6bmUobik6KG49dGhpcy5fc3RhdGljVHJlZXNbZV09dGhpcy4kb3B0aW9ucy5zdGF0aWNSZW5kZXJGbnNbZV0uY2FsbCh0aGlzLl9yZW5kZXJQcm94eSkscihuLFwiX19zdGF0aWNfX1wiK2UsITEpLG4pfSxuLnByb3RvdHlwZS5fbz1mdW5jdGlvbihlLHQsbil7cmV0dXJuIHIoZSxcIl9fb25jZV9fXCIrdCsobj9cIl9cIituOlwiXCIpLCEwKSxlfTt2YXIgbz1mdW5jdGlvbihlKXtyZXR1cm4gZX07bi5wcm90b3R5cGUuX2Y9ZnVuY3Rpb24oZSl7cmV0dXJuIFAodGhpcy4kb3B0aW9ucyxcImZpbHRlcnNcIixlLCEwKXx8b30sbi5wcm90b3R5cGUuX2w9ZnVuY3Rpb24oZSx0KXt2YXIgbixyLGksbyxhO2lmKEFycmF5LmlzQXJyYXkoZSkpZm9yKG49bmV3IEFycmF5KGUubGVuZ3RoKSxyPTAsaT1lLmxlbmd0aDtyPGk7cisrKW5bcl09dChlW3JdLHIpO2Vsc2UgaWYoXCJudW1iZXJcIj09dHlwZW9mIGUpZm9yKG49bmV3IEFycmF5KGUpLHI9MDtyPGU7cisrKW5bcl09dChyKzEscik7ZWxzZSBpZih1KGUpKWZvcihvPU9iamVjdC5rZXlzKGUpLG49bmV3IEFycmF5KG8ubGVuZ3RoKSxyPTAsaT1vLmxlbmd0aDtyPGk7cisrKWE9b1tyXSxuW3JdPXQoZVthXSxhLHIpO3JldHVybiBufSxuLnByb3RvdHlwZS5fdD1mdW5jdGlvbihlLHQsbil7dmFyIHI9dGhpcy4kc2NvcGVkU2xvdHMmJnRoaXMuJHNjb3BlZFNsb3RzW2VdO2lmKHIpcmV0dXJuIHIobnx8e30pfHx0O3ZhciBpPXRoaXMuJHNsb3RzW2VdO3JldHVybiBpfHx0fSxuLnByb3RvdHlwZS5fYj1mdW5jdGlvbihlLHQsbixyKXtpZihuKWlmKHUobikpe0FycmF5LmlzQXJyYXkobikmJihuPWQobikpO2Zvcih2YXIgaSBpbiBuKWlmKFwiY2xhc3NcIj09PWl8fFwic3R5bGVcIj09PWkpZVtpXT1uW2ldO2Vsc2V7dmFyIG89cnx8bGkubXVzdFVzZVByb3AodCxpKT9lLmRvbVByb3BzfHwoZS5kb21Qcm9wcz17fSk6ZS5hdHRyc3x8KGUuYXR0cnM9e30pO29baV09bltpXX19ZWxzZTtyZXR1cm4gZX0sbi5wcm90b3R5cGUuX2s9ZnVuY3Rpb24oZSl7cmV0dXJuIGxpLmtleUNvZGVzW2VdfX1mdW5jdGlvbiBFZShlLHQpe3ZhciBuPXt9O2lmKCFlKXJldHVybiBuO2Zvcih2YXIgcixpLG89Y2UoZSl8fFtdLGE9W10scz0wLGM9by5sZW5ndGg7czxjO3MrKylpZihpPW9bc10sKGkuY29udGV4dD09PXR8fGkuZnVuY3Rpb25hbENvbnRleHQ9PT10KSYmaS5kYXRhJiYocj1pLmRhdGEuc2xvdCkpe3ZhciBsPW5bcl18fChuW3JdPVtdKTtcInRlbXBsYXRlXCI9PT1pLnRhZz9sLnB1c2guYXBwbHkobCxpLmNoaWxkcmVuKTpsLnB1c2goaSl9ZWxzZSBhLnB1c2goaSk7cmV0dXJuIGEubGVuZ3RoJiYoMSE9PWEubGVuZ3RofHxcIiBcIiE9PWFbMF0udGV4dCYmIWFbMF0uaXNDb21tZW50KSYmKG4uZGVmYXVsdD1hKSxufWZ1bmN0aW9uIE5lKGUpe2UuX2V2ZW50cz1PYmplY3QuY3JlYXRlKG51bGwpO3ZhciB0PWUuJG9wdGlvbnMuX3BhcmVudExpc3RlbmVycyxuPXMoZS4kb24sZSkscj1zKGUuJG9mZixlKTtlLl91cGRhdGVMaXN0ZW5lcnM9ZnVuY3Rpb24odCxpKXtvZSh0LGl8fHt9LG4scixlKX0sdCYmZS5fdXBkYXRlTGlzdGVuZXJzKHQpfWZ1bmN0aW9uIExlKGUpe2UucHJvdG90eXBlLiRvbj1mdW5jdGlvbihlLHQpe3ZhciBuPXRoaXM7cmV0dXJuKG4uX2V2ZW50c1tlXXx8KG4uX2V2ZW50c1tlXT1bXSkpLnB1c2godCksbn0sZS5wcm90b3R5cGUuJG9uY2U9ZnVuY3Rpb24oZSx0KXtmdW5jdGlvbiBuKCl7ci4kb2ZmKGUsbiksdC5hcHBseShyLGFyZ3VtZW50cyl9dmFyIHI9dGhpcztyZXR1cm4gbi5mbj10LHIuJG9uKGUsbikscn0sZS5wcm90b3R5cGUuJG9mZj1mdW5jdGlvbihlLHQpe3ZhciBuPXRoaXM7aWYoIWFyZ3VtZW50cy5sZW5ndGgpcmV0dXJuIG4uX2V2ZW50cz1PYmplY3QuY3JlYXRlKG51bGwpLG47dmFyIHI9bi5fZXZlbnRzW2VdO2lmKCFyKXJldHVybiBuO2lmKDE9PT1hcmd1bWVudHMubGVuZ3RoKXJldHVybiBuLl9ldmVudHNbZV09bnVsbCxuO2Zvcih2YXIgaSxvPXIubGVuZ3RoO28tLTspaWYoaT1yW29dLGk9PT10fHxpLmZuPT09dCl7ci5zcGxpY2UobywxKTticmVha31yZXR1cm4gbn0sZS5wcm90b3R5cGUuJGVtaXQ9ZnVuY3Rpb24oZSl7dmFyIHQ9dGhpcyxuPXQuX2V2ZW50c1tlXTtpZihuKXtuPW4ubGVuZ3RoPjE/YyhuKTpuO2Zvcih2YXIgcj1jKGFyZ3VtZW50cywxKSxpPTAsbz1uLmxlbmd0aDtpPG87aSsrKW5baV0uYXBwbHkodCxyKX1yZXR1cm4gdH19ZnVuY3Rpb24gRGUoZSl7ZS5wcm90b3R5cGUuX2luaXQ9ZnVuY3Rpb24oZSl7dmFyIHQ9dGhpczt0Ll91aWQ9UGkrKyx0Ll9pc1Z1ZT0hMCxlJiZlLl9pc0NvbXBvbmVudD9NZSh0LGUpOnQuJG9wdGlvbnM9TShQZSh0LmNvbnN0cnVjdG9yKSxlfHx7fSx0KSx0Ll9yZW5kZXJQcm94eT10LHQuX3NlbGY9dCxkZSh0KSxOZSh0KSx2ZSh0LFwiYmVmb3JlQ3JlYXRlXCIpLEsodCksdmUodCxcImNyZWF0ZWRcIiksVGUodCl9fWZ1bmN0aW9uIE1lKGUsdCl7dmFyIG49ZS4kb3B0aW9ucz1PYmplY3QuY3JlYXRlKGUuY29uc3RydWN0b3Iub3B0aW9ucyk7bi5wYXJlbnQ9dC5wYXJlbnQsbi5wcm9wc0RhdGE9dC5wcm9wc0RhdGEsbi5fcGFyZW50Vm5vZGU9dC5fcGFyZW50Vm5vZGUsbi5fcGFyZW50TGlzdGVuZXJzPXQuX3BhcmVudExpc3RlbmVycyxuLl9yZW5kZXJDaGlsZHJlbj10Ll9yZW5kZXJDaGlsZHJlbixuLl9jb21wb25lbnRUYWc9dC5fY29tcG9uZW50VGFnLHQucmVuZGVyJiYobi5yZW5kZXI9dC5yZW5kZXIsbi5zdGF0aWNSZW5kZXJGbnM9dC5zdGF0aWNSZW5kZXJGbnMpfWZ1bmN0aW9uIFBlKGUpe3ZhciB0PWUub3B0aW9ucztpZihlLnN1cGVyKXt2YXIgbj1lLnN1cGVyLm9wdGlvbnMscj1lLnN1cGVyT3B0aW9ucyxpPWUuZXh0ZW5kT3B0aW9ucztuIT09ciYmKGUuc3VwZXJPcHRpb25zPW4saS5yZW5kZXI9dC5yZW5kZXIsaS5zdGF0aWNSZW5kZXJGbnM9dC5zdGF0aWNSZW5kZXJGbnMsaS5fc2NvcGVJZD10Ll9zY29wZUlkLHQ9ZS5vcHRpb25zPU0obixpKSx0Lm5hbWUmJih0LmNvbXBvbmVudHNbdC5uYW1lXT1lKSl9cmV0dXJuIHR9ZnVuY3Rpb24gUmUoZSl7dGhpcy5faW5pdChlKX1mdW5jdGlvbiBJZShlKXtlLnVzZT1mdW5jdGlvbihlKXtpZighZS5pbnN0YWxsZWQpe3ZhciB0PWMoYXJndW1lbnRzLDEpO3JldHVybiB0LnVuc2hpZnQodGhpcyksXCJmdW5jdGlvblwiPT10eXBlb2YgZS5pbnN0YWxsP2UuaW5zdGFsbC5hcHBseShlLHQpOmUuYXBwbHkobnVsbCx0KSxlLmluc3RhbGxlZD0hMCx0aGlzfX19ZnVuY3Rpb24gRmUoZSl7ZS5taXhpbj1mdW5jdGlvbihlKXt0aGlzLm9wdGlvbnM9TSh0aGlzLm9wdGlvbnMsZSl9fWZ1bmN0aW9uIEJlKGUpe2UuY2lkPTA7dmFyIHQ9MTtlLmV4dGVuZD1mdW5jdGlvbihlKXtlPWV8fHt9O3ZhciBuPXRoaXMscj1uLmNpZCxpPWUuX0N0b3J8fChlLl9DdG9yPXt9KTtpZihpW3JdKXJldHVybiBpW3JdO3ZhciBvPWUubmFtZXx8bi5vcHRpb25zLm5hbWUsYT1mdW5jdGlvbihlKXt0aGlzLl9pbml0KGUpfTtyZXR1cm4gYS5wcm90b3R5cGU9T2JqZWN0LmNyZWF0ZShuLnByb3RvdHlwZSksYS5wcm90b3R5cGUuY29uc3RydWN0b3I9YSxhLmNpZD10KyssYS5vcHRpb25zPU0obi5vcHRpb25zLGUpLGEuc3VwZXI9bixhLmV4dGVuZD1uLmV4dGVuZCxhLm1peGluPW4ubWl4aW4sYS51c2U9bi51c2UsbGkuX2Fzc2V0VHlwZXMuZm9yRWFjaChmdW5jdGlvbihlKXthW2VdPW5bZV19KSxvJiYoYS5vcHRpb25zLmNvbXBvbmVudHNbb109YSksYS5zdXBlck9wdGlvbnM9bi5vcHRpb25zLGEuZXh0ZW5kT3B0aW9ucz1lLGlbcl09YSxhfX1mdW5jdGlvbiBVZShlKXtsaS5fYXNzZXRUeXBlcy5mb3JFYWNoKGZ1bmN0aW9uKHQpe2VbdF09ZnVuY3Rpb24oZSxuKXtyZXR1cm4gbj8oXCJjb21wb25lbnRcIj09PXQmJmYobikmJihuLm5hbWU9bi5uYW1lfHxlLG49dGhpcy5vcHRpb25zLl9iYXNlLmV4dGVuZChuKSksXCJkaXJlY3RpdmVcIj09PXQmJlwiZnVuY3Rpb25cIj09dHlwZW9mIG4mJihuPXtiaW5kOm4sdXBkYXRlOm59KSx0aGlzLm9wdGlvbnNbdCtcInNcIl1bZV09bixuKTp0aGlzLm9wdGlvbnNbdCtcInNcIl1bZV19fSl9ZnVuY3Rpb24gSGUoZSx0KXtyZXR1cm5cInN0cmluZ1wiPT10eXBlb2YgZT9lLnNwbGl0KFwiLFwiKS5pbmRleE9mKHQpPi0xOmUudGVzdCh0KX1mdW5jdGlvbiBWZShlKXt2YXIgdD17fTt0LmdldD1mdW5jdGlvbigpe3JldHVybiBsaX0sT2JqZWN0LmRlZmluZVByb3BlcnR5KGUsXCJjb25maWdcIix0KSxlLnV0aWw9JGksZS5zZXQ9TyxlLmRlbGV0ZT1TLGUubmV4dFRpY2s9c2ksZS5vcHRpb25zPU9iamVjdC5jcmVhdGUobnVsbCksbGkuX2Fzc2V0VHlwZXMuZm9yRWFjaChmdW5jdGlvbih0KXtlLm9wdGlvbnNbdCtcInNcIl09T2JqZWN0LmNyZWF0ZShudWxsKX0pLGUub3B0aW9ucy5fYmFzZT1lLGwoZS5vcHRpb25zLmNvbXBvbmVudHMsRmkpLEllKGUpLEZlKGUpLEJlKGUpLFVlKGUpfWZ1bmN0aW9uIHplKGUpe2Zvcih2YXIgdD1lLmRhdGEsbj1lLHI9ZTtyLmNoaWxkOylyPXIuY2hpbGQuX3Zub2RlLHIuZGF0YSYmKHQ9SmUoci5kYXRhLHQpKTtmb3IoO249bi5wYXJlbnQ7KW4uZGF0YSYmKHQ9SmUodCxuLmRhdGEpKTtyZXR1cm4gS2UodCl9ZnVuY3Rpb24gSmUoZSx0KXtyZXR1cm57c3RhdGljQ2xhc3M6cWUoZS5zdGF0aWNDbGFzcyx0LnN0YXRpY0NsYXNzKSxjbGFzczplLmNsYXNzP1tlLmNsYXNzLHQuY2xhc3NdOnQuY2xhc3N9fWZ1bmN0aW9uIEtlKGUpe3ZhciB0PWUuY2xhc3Msbj1lLnN0YXRpY0NsYXNzO3JldHVybiBufHx0P3FlKG4sV2UodCkpOlwiXCJ9ZnVuY3Rpb24gcWUoZSx0KXtyZXR1cm4gZT90P2UrXCIgXCIrdDplOnR8fFwiXCJ9ZnVuY3Rpb24gV2UoZSl7dmFyIHQ9XCJcIjtpZighZSlyZXR1cm4gdDtpZihcInN0cmluZ1wiPT10eXBlb2YgZSlyZXR1cm4gZTtpZihBcnJheS5pc0FycmF5KGUpKXtmb3IodmFyIG4scj0wLGk9ZS5sZW5ndGg7cjxpO3IrKyllW3JdJiYobj1XZShlW3JdKSkmJih0Kz1uK1wiIFwiKTtyZXR1cm4gdC5zbGljZSgwLC0xKX1pZih1KGUpKXtmb3IodmFyIG8gaW4gZSllW29dJiYodCs9bytcIiBcIik7cmV0dXJuIHQuc2xpY2UoMCwtMSl9cmV0dXJuIHR9ZnVuY3Rpb24gWmUoZSl7cmV0dXJuIFhpKGUpP1wic3ZnXCI6XCJtYXRoXCI9PT1lP1wibWF0aFwiOnZvaWQgMH1mdW5jdGlvbiBHZShlKXtpZighUXIpcmV0dXJuITA7aWYodG8oZSkpcmV0dXJuITE7aWYoZT1lLnRvTG93ZXJDYXNlKCksbnVsbCE9bm9bZV0pcmV0dXJuIG5vW2VdO3ZhciB0PWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoZSk7cmV0dXJuIGUuaW5kZXhPZihcIi1cIik+LTE/bm9bZV09dC5jb25zdHJ1Y3Rvcj09PXdpbmRvdy5IVE1MVW5rbm93bkVsZW1lbnR8fHQuY29uc3RydWN0b3I9PT13aW5kb3cuSFRNTEVsZW1lbnQ6bm9bZV09L0hUTUxVbmtub3duRWxlbWVudC8udGVzdCh0LnRvU3RyaW5nKCkpfWZ1bmN0aW9uIFllKGUpe2lmKFwic3RyaW5nXCI9PXR5cGVvZiBlKXtpZihlPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoZSksIWUpcmV0dXJuIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIil9cmV0dXJuIGV9ZnVuY3Rpb24gUWUoZSx0KXt2YXIgbj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KGUpO3JldHVyblwic2VsZWN0XCIhPT1lP246KHQuZGF0YSYmdC5kYXRhLmF0dHJzJiZcIm11bHRpcGxlXCJpbiB0LmRhdGEuYXR0cnMmJm4uc2V0QXR0cmlidXRlKFwibXVsdGlwbGVcIixcIm11bHRpcGxlXCIpLG4pfWZ1bmN0aW9uIFhlKGUsdCl7cmV0dXJuIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhXaVtlXSx0KX1mdW5jdGlvbiBldChlKXtyZXR1cm4gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoZSl9ZnVuY3Rpb24gdHQoZSl7cmV0dXJuIGRvY3VtZW50LmNyZWF0ZUNvbW1lbnQoZSl9ZnVuY3Rpb24gbnQoZSx0LG4pe2UuaW5zZXJ0QmVmb3JlKHQsbil9ZnVuY3Rpb24gcnQoZSx0KXtlLnJlbW92ZUNoaWxkKHQpfWZ1bmN0aW9uIGl0KGUsdCl7ZS5hcHBlbmRDaGlsZCh0KX1mdW5jdGlvbiBvdChlKXtyZXR1cm4gZS5wYXJlbnROb2RlfWZ1bmN0aW9uIGF0KGUpe3JldHVybiBlLm5leHRTaWJsaW5nfWZ1bmN0aW9uIHN0KGUpe3JldHVybiBlLnRhZ05hbWV9ZnVuY3Rpb24gY3QoZSx0KXtlLnRleHRDb250ZW50PXR9ZnVuY3Rpb24gbHQoZSl7cmV0dXJuIGUuY2hpbGROb2Rlc31mdW5jdGlvbiB1dChlLHQsbil7ZS5zZXRBdHRyaWJ1dGUodCxuKX1mdW5jdGlvbiBmdChlLHQpe3ZhciBuPWUuZGF0YS5yZWY7aWYobil7dmFyIGk9ZS5jb250ZXh0LG89ZS5jaGlsZHx8ZS5lbG0sYT1pLiRyZWZzO3Q/QXJyYXkuaXNBcnJheShhW25dKT9yKGFbbl0sbyk6YVtuXT09PW8mJihhW25dPXZvaWQgMCk6ZS5kYXRhLnJlZkluRm9yP0FycmF5LmlzQXJyYXkoYVtuXSkmJmFbbl0uaW5kZXhPZihvKTwwP2Fbbl0ucHVzaChvKTphW25dPVtvXTphW25dPW99fWZ1bmN0aW9uIGR0KGUpe3JldHVybiBudWxsPT1lfWZ1bmN0aW9uIHB0KGUpe3JldHVybiBudWxsIT1lfWZ1bmN0aW9uIHZ0KGUsdCl7cmV0dXJuIGUua2V5PT09dC5rZXkmJmUudGFnPT09dC50YWcmJmUuaXNDb21tZW50PT09dC5pc0NvbW1lbnQmJiFlLmRhdGE9PSF0LmRhdGF9ZnVuY3Rpb24gaHQoZSx0LG4pe3ZhciByLGksbz17fTtmb3Iocj10O3I8PW47KytyKWk9ZVtyXS5rZXkscHQoaSkmJihvW2ldPXIpO3JldHVybiBvfWZ1bmN0aW9uIG10KGUpe2Z1bmN0aW9uIHQoZSl7cmV0dXJuIG5ldyBFaSh4LnRhZ05hbWUoZSkudG9Mb3dlckNhc2UoKSx7fSxbXSx2b2lkIDAsZSl9ZnVuY3Rpb24gbihlLHQpe2Z1bmN0aW9uIG4oKXswPT09LS1uLmxpc3RlbmVycyYmcihlKX1yZXR1cm4gbi5saXN0ZW5lcnM9dCxufWZ1bmN0aW9uIHIoZSl7dmFyIHQ9eC5wYXJlbnROb2RlKGUpO3QmJngucmVtb3ZlQ2hpbGQodCxlKX1mdW5jdGlvbiBpKGUsdCxuKXt2YXIgcixpPWUuZGF0YTtpZihlLmlzUm9vdEluc2VydD0hbixwdChpKSYmKHB0KHI9aS5ob29rKSYmcHQocj1yLmluaXQpJiZyKGUpLHB0KHI9ZS5jaGlsZCkpKXJldHVybiBsKGUsdCksZS5lbG07dmFyIG89ZS5jaGlsZHJlbixzPWUudGFnO3JldHVybiBwdChzKT8oZS5lbG09ZS5ucz94LmNyZWF0ZUVsZW1lbnROUyhlLm5zLHMpOnguY3JlYXRlRWxlbWVudChzLGUpLHUoZSksYShlLG8sdCkscHQoaSkmJmMoZSx0KSk6ZS5pc0NvbW1lbnQ/ZS5lbG09eC5jcmVhdGVDb21tZW50KGUudGV4dCk6ZS5lbG09eC5jcmVhdGVUZXh0Tm9kZShlLnRleHQpLGUuZWxtfWZ1bmN0aW9uIGEoZSx0LG4pe2lmKEFycmF5LmlzQXJyYXkodCkpZm9yKHZhciByPTA7cjx0Lmxlbmd0aDsrK3IpeC5hcHBlbmRDaGlsZChlLmVsbSxpKHRbcl0sbiwhMCkpO2Vsc2UgbyhlLnRleHQpJiZ4LmFwcGVuZENoaWxkKGUuZWxtLHguY3JlYXRlVGV4dE5vZGUoZS50ZXh0KSl9ZnVuY3Rpb24gcyhlKXtmb3IoO2UuY2hpbGQ7KWU9ZS5jaGlsZC5fdm5vZGU7cmV0dXJuIHB0KGUudGFnKX1mdW5jdGlvbiBjKGUsdCl7Zm9yKHZhciBuPTA7bjwkLmNyZWF0ZS5sZW5ndGg7KytuKSQuY3JlYXRlW25dKG9vLGUpO189ZS5kYXRhLmhvb2sscHQoXykmJihfLmNyZWF0ZSYmXy5jcmVhdGUob28sZSksXy5pbnNlcnQmJnQucHVzaChlKSl9ZnVuY3Rpb24gbChlLHQpe2UuZGF0YS5wZW5kaW5nSW5zZXJ0JiZ0LnB1c2guYXBwbHkodCxlLmRhdGEucGVuZGluZ0luc2VydCksZS5lbG09ZS5jaGlsZC4kZWwscyhlKT8oYyhlLHQpLHUoZSkpOihmdChlKSx0LnB1c2goZSkpfWZ1bmN0aW9uIHUoZSl7dmFyIHQ7cHQodD1lLmNvbnRleHQpJiZwdCh0PXQuJG9wdGlvbnMuX3Njb3BlSWQpJiZ4LnNldEF0dHJpYnV0ZShlLmVsbSx0LFwiXCIpLHB0KHQ9TGkpJiZ0IT09ZS5jb250ZXh0JiZwdCh0PXQuJG9wdGlvbnMuX3Njb3BlSWQpJiZ4LnNldEF0dHJpYnV0ZShlLmVsbSx0LFwiXCIpfWZ1bmN0aW9uIGYoZSx0LG4scixvLGEpe2Zvcig7cjw9bzsrK3IpeC5pbnNlcnRCZWZvcmUoZSxpKG5bcl0sYSksdCl9ZnVuY3Rpb24gZChlKXt2YXIgdCxuLHI9ZS5kYXRhO2lmKHB0KHIpKWZvcihwdCh0PXIuaG9vaykmJnB0KHQ9dC5kZXN0cm95KSYmdChlKSx0PTA7dDwkLmRlc3Ryb3kubGVuZ3RoOysrdCkkLmRlc3Ryb3lbdF0oZSk7aWYocHQodD1lLmNoaWxkcmVuKSlmb3Iobj0wO248ZS5jaGlsZHJlbi5sZW5ndGg7KytuKWQoZS5jaGlsZHJlbltuXSl9ZnVuY3Rpb24gcChlLHQsbixyKXtmb3IoO248PXI7KytuKXt2YXIgaT10W25dO3B0KGkpJiYocHQoaS50YWcpPyh2KGkpLGQoaSkpOngucmVtb3ZlQ2hpbGQoZSxpLmVsbSkpfX1mdW5jdGlvbiB2KGUsdCl7aWYodHx8cHQoZS5kYXRhKSl7dmFyIGk9JC5yZW1vdmUubGVuZ3RoKzE7Zm9yKHQ/dC5saXN0ZW5lcnMrPWk6dD1uKGUuZWxtLGkpLHB0KF89ZS5jaGlsZCkmJnB0KF89Xy5fdm5vZGUpJiZwdChfLmRhdGEpJiZ2KF8sdCksXz0wO188JC5yZW1vdmUubGVuZ3RoOysrXykkLnJlbW92ZVtfXShlLHQpO3B0KF89ZS5kYXRhLmhvb2spJiZwdChfPV8ucmVtb3ZlKT9fKGUsdCk6dCgpfWVsc2UgcihlLmVsbSl9ZnVuY3Rpb24gaChlLHQsbixyLG8pe2Zvcih2YXIgYSxzLGMsbCx1PTAsZD0wLHY9dC5sZW5ndGgtMSxoPXRbMF0sZz10W3ZdLHk9bi5sZW5ndGgtMSxfPW5bMF0sYj1uW3ldLCQ9IW87dTw9diYmZDw9eTspZHQoaCk/aD10WysrdV06ZHQoZyk/Zz10Wy0tdl06dnQoaCxfKT8obShoLF8sciksaD10WysrdV0sXz1uWysrZF0pOnZ0KGcsYik/KG0oZyxiLHIpLGc9dFstLXZdLGI9blstLXldKTp2dChoLGIpPyhtKGgsYixyKSwkJiZ4Lmluc2VydEJlZm9yZShlLGguZWxtLHgubmV4dFNpYmxpbmcoZy5lbG0pKSxoPXRbKyt1XSxiPW5bLS15XSk6dnQoZyxfKT8obShnLF8sciksJCYmeC5pbnNlcnRCZWZvcmUoZSxnLmVsbSxoLmVsbSksZz10Wy0tdl0sXz1uWysrZF0pOihkdChhKSYmKGE9aHQodCx1LHYpKSxzPXB0KF8ua2V5KT9hW18ua2V5XTpudWxsLGR0KHMpPyh4Lmluc2VydEJlZm9yZShlLGkoXyxyKSxoLmVsbSksXz1uWysrZF0pOihjPXRbc10sYy50YWchPT1fLnRhZz8oeC5pbnNlcnRCZWZvcmUoZSxpKF8sciksaC5lbG0pLF89blsrK2RdKToobShjLF8sciksdFtzXT12b2lkIDAsJCYmeC5pbnNlcnRCZWZvcmUoZSxfLmVsbSxoLmVsbSksXz1uWysrZF0pKSk7dT52PyhsPWR0KG5beSsxXSk/bnVsbDpuW3krMV0uZWxtLGYoZSxsLG4sZCx5LHIpKTpkPnkmJnAoZSx0LHUsdil9ZnVuY3Rpb24gbShlLHQsbixyKXtpZihlIT09dCl7aWYodC5pc1N0YXRpYyYmZS5pc1N0YXRpYyYmdC5rZXk9PT1lLmtleSYmKHQuaXNDbG9uZWR8fHQuaXNPbmNlKSlyZXR1cm4gdm9pZCh0LmVsbT1lLmVsbSk7dmFyIGksbz10LmRhdGEsYT1wdChvKTthJiZwdChpPW8uaG9vaykmJnB0KGk9aS5wcmVwYXRjaCkmJmkoZSx0KTt2YXIgYz10LmVsbT1lLmVsbSxsPWUuY2hpbGRyZW4sdT10LmNoaWxkcmVuO2lmKGEmJnModCkpe2ZvcihpPTA7aTwkLnVwZGF0ZS5sZW5ndGg7KytpKSQudXBkYXRlW2ldKGUsdCk7cHQoaT1vLmhvb2spJiZwdChpPWkudXBkYXRlKSYmaShlLHQpfWR0KHQudGV4dCk/cHQobCkmJnB0KHUpP2whPT11JiZoKGMsbCx1LG4scik6cHQodSk/KHB0KGUudGV4dCkmJnguc2V0VGV4dENvbnRlbnQoYyxcIlwiKSxmKGMsbnVsbCx1LDAsdS5sZW5ndGgtMSxuKSk6cHQobCk/cChjLGwsMCxsLmxlbmd0aC0xKTpwdChlLnRleHQpJiZ4LnNldFRleHRDb250ZW50KGMsXCJcIik6ZS50ZXh0IT09dC50ZXh0JiZ4LnNldFRleHRDb250ZW50KGMsdC50ZXh0KSxhJiZwdChpPW8uaG9vaykmJnB0KGk9aS5wb3N0cGF0Y2gpJiZpKGUsdCl9fWZ1bmN0aW9uIGcoZSx0LG4pe2lmKG4mJmUucGFyZW50KWUucGFyZW50LmRhdGEucGVuZGluZ0luc2VydD10O2Vsc2UgZm9yKHZhciByPTA7cjx0Lmxlbmd0aDsrK3IpdFtyXS5kYXRhLmhvb2suaW5zZXJ0KHRbcl0pfWZ1bmN0aW9uIHkoZSx0LG4pe3QuZWxtPWU7dmFyIHI9dC50YWcsaT10LmRhdGEsbz10LmNoaWxkcmVuO2lmKHB0KGkpJiYocHQoXz1pLmhvb2spJiZwdChfPV8uaW5pdCkmJl8odCwhMCkscHQoXz10LmNoaWxkKSkpcmV0dXJuIGwodCxuKSwhMDtpZihwdChyKSl7aWYocHQobykpe3ZhciBzPXguY2hpbGROb2RlcyhlKTtpZihzLmxlbmd0aCl7dmFyIHU9ITA7aWYocy5sZW5ndGghPT1vLmxlbmd0aCl1PSExO2Vsc2UgZm9yKHZhciBmPTA7ZjxvLmxlbmd0aDtmKyspaWYoIXkoc1tmXSxvW2ZdLG4pKXt1PSExO2JyZWFrfWlmKCF1KXJldHVybiExfWVsc2UgYSh0LG8sbil9cHQoaSkmJmModCxuKX1yZXR1cm4hMH12YXIgXyxiLCQ9e30sdz1lLm1vZHVsZXMseD1lLm5vZGVPcHM7Zm9yKF89MDtfPGFvLmxlbmd0aDsrK18pZm9yKCRbYW9bX11dPVtdLGI9MDtiPHcubGVuZ3RoOysrYil2b2lkIDAhPT13W2JdW2FvW19dXSYmJFthb1tfXV0ucHVzaCh3W2JdW2FvW19dXSk7cmV0dXJuIGZ1bmN0aW9uKGUsbixyLG8pe2lmKCFuKXJldHVybiB2b2lkKGUmJmQoZSkpO3ZhciBhLGMsbD0hMSx1PVtdO2lmKGUpe3ZhciBmPXB0KGUubm9kZVR5cGUpO2lmKCFmJiZ2dChlLG4pKW0oZSxuLHUsbyk7ZWxzZXtpZihmKXtpZigxPT09ZS5ub2RlVHlwZSYmZS5oYXNBdHRyaWJ1dGUoXCJzZXJ2ZXItcmVuZGVyZWRcIikmJihlLnJlbW92ZUF0dHJpYnV0ZShcInNlcnZlci1yZW5kZXJlZFwiKSxyPSEwKSxyJiZ5KGUsbix1KSlyZXR1cm4gZyhuLHUsITApLGU7ZT10KGUpfWlmKGE9ZS5lbG0sYz14LnBhcmVudE5vZGUoYSksaShuLHUpLG4ucGFyZW50JiYobi5wYXJlbnQuZWxtPW4uZWxtLHMobikpKWZvcih2YXIgdj0wO3Y8JC5jcmVhdGUubGVuZ3RoOysrdikkLmNyZWF0ZVt2XShvbyxuLnBhcmVudCk7bnVsbCE9PWM/KHguaW5zZXJ0QmVmb3JlKGMsbi5lbG0seC5uZXh0U2libGluZyhhKSkscChjLFtlXSwwLDApKTpwdChlLnRhZykmJmQoZSl9fWVsc2UgbD0hMCxpKG4sdSk7cmV0dXJuIGcobix1LGwpLG4uZWxtfX1mdW5jdGlvbiBndChlLHQpe2lmKGUuZGF0YS5kaXJlY3RpdmVzfHx0LmRhdGEuZGlyZWN0aXZlcyl7dmFyIG4scixpLG89ZT09PW9vLGE9eXQoZS5kYXRhLmRpcmVjdGl2ZXMsZS5jb250ZXh0KSxzPXl0KHQuZGF0YS5kaXJlY3RpdmVzLHQuY29udGV4dCksYz1bXSxsPVtdO2ZvcihuIGluIHMpcj1hW25dLGk9c1tuXSxyPyhpLm9sZFZhbHVlPXIudmFsdWUsYnQoaSxcInVwZGF0ZVwiLHQsZSksaS5kZWYmJmkuZGVmLmNvbXBvbmVudFVwZGF0ZWQmJmwucHVzaChpKSk6KGJ0KGksXCJiaW5kXCIsdCxlKSxpLmRlZiYmaS5kZWYuaW5zZXJ0ZWQmJmMucHVzaChpKSk7aWYoYy5sZW5ndGgpe3ZhciB1PWZ1bmN0aW9uKCl7Yy5mb3JFYWNoKGZ1bmN0aW9uKG4pe2J0KG4sXCJpbnNlcnRlZFwiLHQsZSl9KX07bz9pZSh0LmRhdGEuaG9va3x8KHQuZGF0YS5ob29rPXt9KSxcImluc2VydFwiLHUsXCJkaXItaW5zZXJ0XCIpOnUoKX1pZihsLmxlbmd0aCYmaWUodC5kYXRhLmhvb2t8fCh0LmRhdGEuaG9vaz17fSksXCJwb3N0cGF0Y2hcIixmdW5jdGlvbigpe2wuZm9yRWFjaChmdW5jdGlvbihuKXtidChuLFwiY29tcG9uZW50VXBkYXRlZFwiLHQsZSl9KX0sXCJkaXItcG9zdHBhdGNoXCIpLCFvKWZvcihuIGluIGEpc1tuXXx8YnQoYVtuXSxcInVuYmluZFwiLGUpfX1mdW5jdGlvbiB5dChlLHQpe3ZhciBuPU9iamVjdC5jcmVhdGUobnVsbCk7aWYoIWUpcmV0dXJuIG47dmFyIHIsaTtmb3Iocj0wO3I8ZS5sZW5ndGg7cisrKWk9ZVtyXSxpLm1vZGlmaWVyc3x8KGkubW9kaWZpZXJzPWNvKSxuW190KGkpXT1pLGkuZGVmPVAodC4kb3B0aW9ucyxcImRpcmVjdGl2ZXNcIixpLm5hbWUsITApO3JldHVybiBufWZ1bmN0aW9uIF90KGUpe3JldHVybiBlLnJhd05hbWV8fGUubmFtZStcIi5cIitPYmplY3Qua2V5cyhlLm1vZGlmaWVyc3x8e30pLmpvaW4oXCIuXCIpfWZ1bmN0aW9uIGJ0KGUsdCxuLHIpe3ZhciBpPWUuZGVmJiZlLmRlZlt0XTtpJiZpKG4uZWxtLGUsbixyKX1mdW5jdGlvbiAkdChlLHQpe2lmKGUuZGF0YS5hdHRyc3x8dC5kYXRhLmF0dHJzKXt2YXIgbixyLGksbz10LmVsbSxhPWUuZGF0YS5hdHRyc3x8e30scz10LmRhdGEuYXR0cnN8fHt9O3MuX19vYl9fJiYocz10LmRhdGEuYXR0cnM9bCh7fSxzKSk7Zm9yKG4gaW4gcylyPXNbbl0saT1hW25dLGkhPT1yJiZ3dChvLG4scik7Zm9yKG4gaW4gYSludWxsPT1zW25dJiYoSmkobik/by5yZW1vdmVBdHRyaWJ1dGVOUyh6aSxLaShuKSk6SGkobil8fG8ucmVtb3ZlQXR0cmlidXRlKG4pKX19ZnVuY3Rpb24gd3QoZSx0LG4pe1ZpKHQpP3FpKG4pP2UucmVtb3ZlQXR0cmlidXRlKHQpOmUuc2V0QXR0cmlidXRlKHQsdCk6SGkodCk/ZS5zZXRBdHRyaWJ1dGUodCxxaShuKXx8XCJmYWxzZVwiPT09bj9cImZhbHNlXCI6XCJ0cnVlXCIpOkppKHQpP3FpKG4pP2UucmVtb3ZlQXR0cmlidXRlTlMoemksS2kodCkpOmUuc2V0QXR0cmlidXRlTlMoemksdCxuKTpxaShuKT9lLnJlbW92ZUF0dHJpYnV0ZSh0KTplLnNldEF0dHJpYnV0ZSh0LG4pfWZ1bmN0aW9uIHh0KGUsdCl7dmFyIG49dC5lbG0scj10LmRhdGEsaT1lLmRhdGE7aWYoci5zdGF0aWNDbGFzc3x8ci5jbGFzc3x8aSYmKGkuc3RhdGljQ2xhc3N8fGkuY2xhc3MpKXt2YXIgbz16ZSh0KSxhPW4uX3RyYW5zaXRpb25DbGFzc2VzO2EmJihvPXFlKG8sV2UoYSkpKSxvIT09bi5fcHJldkNsYXNzJiYobi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLG8pLG4uX3ByZXZDbGFzcz1vKX19ZnVuY3Rpb24gQ3QoZSx0KXtpZihlLmRhdGEub258fHQuZGF0YS5vbil7dmFyIG49dC5kYXRhLm9ufHx7fSxyPWUuZGF0YS5vbnx8e30saT10LmVsbS5fdl9hZGR8fCh0LmVsbS5fdl9hZGQ9ZnVuY3Rpb24oZSxuLHIpe3QuZWxtLmFkZEV2ZW50TGlzdGVuZXIoZSxuLHIpfSksbz10LmVsbS5fdl9yZW1vdmV8fCh0LmVsbS5fdl9yZW1vdmU9ZnVuY3Rpb24oZSxuKXt0LmVsbS5yZW1vdmVFdmVudExpc3RlbmVyKGUsbil9KTtvZShuLHIsaSxvLHQuY29udGV4dCl9fWZ1bmN0aW9uIGt0KGUsdCl7aWYoZS5kYXRhLmRvbVByb3BzfHx0LmRhdGEuZG9tUHJvcHMpe3ZhciBuLHIsaT10LmVsbSxvPWUuZGF0YS5kb21Qcm9wc3x8e30sYT10LmRhdGEuZG9tUHJvcHN8fHt9O2EuX19vYl9fJiYoYT10LmRhdGEuZG9tUHJvcHM9bCh7fSxhKSk7Zm9yKG4gaW4gbyludWxsPT1hW25dJiYoaVtuXT1cIlwiKTtmb3IobiBpbiBhKWlmKHI9YVtuXSxcInRleHRDb250ZW50XCIhPT1uJiZcImlubmVySFRNTFwiIT09bnx8KHQuY2hpbGRyZW4mJih0LmNoaWxkcmVuLmxlbmd0aD0wKSxyIT09b1tuXSkpaWYoXCJ2YWx1ZVwiPT09bil7aS5fdmFsdWU9cjt2YXIgcz1udWxsPT1yP1wiXCI6U3RyaW5nKHIpO2kudmFsdWU9PT1zfHxpLmNvbXBvc2luZ3x8KGkudmFsdWU9cyl9ZWxzZSBpW25dPXJ9fWZ1bmN0aW9uIEF0KGUpe3ZhciB0PU90KGUuc3R5bGUpO3JldHVybiBlLnN0YXRpY1N0eWxlP2woZS5zdGF0aWNTdHlsZSx0KTp0fWZ1bmN0aW9uIE90KGUpe3JldHVybiBBcnJheS5pc0FycmF5KGUpP2QoZSk6XCJzdHJpbmdcIj09dHlwZW9mIGU/aG8oZSk6ZX1mdW5jdGlvbiBTdChlLHQpe3ZhciBuLHI9e307aWYodClmb3IodmFyIGk9ZTtpLmNoaWxkOylpPWkuY2hpbGQuX3Zub2RlLGkuZGF0YSYmKG49QXQoaS5kYXRhKSkmJmwocixuKTsobj1BdChlLmRhdGEpKSYmbChyLG4pO2Zvcih2YXIgbz1lO289by5wYXJlbnQ7KW8uZGF0YSYmKG49QXQoby5kYXRhKSkmJmwocixuKTtyZXR1cm4gcn1mdW5jdGlvbiBUdChlLHQpe3ZhciBuPXQuZGF0YSxyPWUuZGF0YTtpZihuLnN0YXRpY1N0eWxlfHxuLnN0eWxlfHxyLnN0YXRpY1N0eWxlfHxyLnN0eWxlKXt2YXIgaSxvLGE9dC5lbG0scz1lLmRhdGEuc3RhdGljU3R5bGUsYz1lLmRhdGEuc3R5bGV8fHt9LHU9c3x8YyxmPU90KHQuZGF0YS5zdHlsZSl8fHt9O3QuZGF0YS5zdHlsZT1mLl9fb2JfXz9sKHt9LGYpOmY7dmFyIGQ9U3QodCwhMCk7Zm9yKG8gaW4gdSludWxsPT1kW29dJiZnbyhhLG8sXCJcIik7Zm9yKG8gaW4gZClpPWRbb10saSE9PXVbb10mJmdvKGEsbyxudWxsPT1pP1wiXCI6aSl9fWZ1bmN0aW9uIGp0KGUsdCl7aWYodCYmdC50cmltKCkpaWYoZS5jbGFzc0xpc3QpdC5pbmRleE9mKFwiIFwiKT4tMT90LnNwbGl0KC9cXHMrLykuZm9yRWFjaChmdW5jdGlvbih0KXtyZXR1cm4gZS5jbGFzc0xpc3QuYWRkKHQpfSk6ZS5jbGFzc0xpc3QuYWRkKHQpO2Vsc2V7dmFyIG49XCIgXCIrZS5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKStcIiBcIjtuLmluZGV4T2YoXCIgXCIrdCtcIiBcIik8MCYmZS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLChuK3QpLnRyaW0oKSl9fWZ1bmN0aW9uIEV0KGUsdCl7aWYodCYmdC50cmltKCkpaWYoZS5jbGFzc0xpc3QpdC5pbmRleE9mKFwiIFwiKT4tMT90LnNwbGl0KC9cXHMrLykuZm9yRWFjaChmdW5jdGlvbih0KXtyZXR1cm4gZS5jbGFzc0xpc3QucmVtb3ZlKHQpfSk6ZS5jbGFzc0xpc3QucmVtb3ZlKHQpO2Vsc2V7Zm9yKHZhciBuPVwiIFwiK2UuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikrXCIgXCIscj1cIiBcIit0K1wiIFwiO24uaW5kZXhPZihyKT49MDspbj1uLnJlcGxhY2UocixcIiBcIik7ZS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLG4udHJpbSgpKX19ZnVuY3Rpb24gTnQoZSl7U28oZnVuY3Rpb24oKXtTbyhlKX0pfWZ1bmN0aW9uIEx0KGUsdCl7KGUuX3RyYW5zaXRpb25DbGFzc2VzfHwoZS5fdHJhbnNpdGlvbkNsYXNzZXM9W10pKS5wdXNoKHQpLGp0KGUsdCl9ZnVuY3Rpb24gRHQoZSx0KXtlLl90cmFuc2l0aW9uQ2xhc3NlcyYmcihlLl90cmFuc2l0aW9uQ2xhc3Nlcyx0KSxFdChlLHQpfWZ1bmN0aW9uIE10KGUsdCxuKXt2YXIgcj1QdChlLHQpLGk9ci50eXBlLG89ci50aW1lb3V0LGE9ci5wcm9wQ291bnQ7aWYoIWkpcmV0dXJuIG4oKTt2YXIgcz1pPT09d28/a286T28sYz0wLGw9ZnVuY3Rpb24oKXtlLnJlbW92ZUV2ZW50TGlzdGVuZXIocyx1KSxuKCl9LHU9ZnVuY3Rpb24odCl7dC50YXJnZXQ9PT1lJiYrK2M+PWEmJmwoKX07c2V0VGltZW91dChmdW5jdGlvbigpe2M8YSYmbCgpfSxvKzEpLGUuYWRkRXZlbnRMaXN0ZW5lcihzLHUpfWZ1bmN0aW9uIFB0KGUsdCl7dmFyIG4scj13aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlKSxpPXJbQ28rXCJEZWxheVwiXS5zcGxpdChcIiwgXCIpLG89cltDbytcIkR1cmF0aW9uXCJdLnNwbGl0KFwiLCBcIiksYT1SdChpLG8pLHM9cltBbytcIkRlbGF5XCJdLnNwbGl0KFwiLCBcIiksYz1yW0FvK1wiRHVyYXRpb25cIl0uc3BsaXQoXCIsIFwiKSxsPVJ0KHMsYyksdT0wLGY9MDt0PT09d28/YT4wJiYobj13byx1PWEsZj1vLmxlbmd0aCk6dD09PXhvP2w+MCYmKG49eG8sdT1sLGY9Yy5sZW5ndGgpOih1PU1hdGgubWF4KGEsbCksbj11PjA/YT5sP3dvOnhvOm51bGwsZj1uP249PT13bz9vLmxlbmd0aDpjLmxlbmd0aDowKTt2YXIgZD1uPT09d28mJlRvLnRlc3QocltDbytcIlByb3BlcnR5XCJdKTtyZXR1cm57dHlwZTpuLHRpbWVvdXQ6dSxwcm9wQ291bnQ6ZixoYXNUcmFuc2Zvcm06ZH19ZnVuY3Rpb24gUnQoZSx0KXtmb3IoO2UubGVuZ3RoPHQubGVuZ3RoOyllPWUuY29uY2F0KGUpO3JldHVybiBNYXRoLm1heC5hcHBseShudWxsLHQubWFwKGZ1bmN0aW9uKHQsbil7cmV0dXJuIEl0KHQpK0l0KGVbbl0pfSkpfWZ1bmN0aW9uIEl0KGUpe3JldHVybiAxZTMqTnVtYmVyKGUuc2xpY2UoMCwtMSkpfWZ1bmN0aW9uIEZ0KGUpe3ZhciB0PWUuZWxtO3QuX2xlYXZlQ2ImJih0Ll9sZWF2ZUNiLmNhbmNlbGxlZD0hMCx0Ll9sZWF2ZUNiKCkpO3ZhciBuPVV0KGUuZGF0YS50cmFuc2l0aW9uKTtpZihuJiYhdC5fZW50ZXJDYiYmMT09PXQubm9kZVR5cGUpe3ZhciByPW4uY3NzLGk9bi50eXBlLG89bi5lbnRlckNsYXNzLGE9bi5lbnRlckFjdGl2ZUNsYXNzLHM9bi5hcHBlYXJDbGFzcyxjPW4uYXBwZWFyQWN0aXZlQ2xhc3MsbD1uLmJlZm9yZUVudGVyLHU9bi5lbnRlcixmPW4uYWZ0ZXJFbnRlcixkPW4uZW50ZXJDYW5jZWxsZWQscD1uLmJlZm9yZUFwcGVhcix2PW4uYXBwZWFyLGg9bi5hZnRlckFwcGVhcixtPW4uYXBwZWFyQ2FuY2VsbGVkLGc9TGkuJHZub2RlLHk9ZyYmZy5wYXJlbnQ/Zy5wYXJlbnQuY29udGV4dDpMaSxfPSF5Ll9pc01vdW50ZWR8fCFlLmlzUm9vdEluc2VydDtpZighX3x8dnx8XCJcIj09PXYpe3ZhciBiPV8/czpvLCQ9Xz9jOmEsdz1fP3B8fGw6bCx4PV8mJlwiZnVuY3Rpb25cIj09dHlwZW9mIHY/djp1LEM9Xz9ofHxmOmYsaz1fP218fGQ6ZCxBPXIhPT0hMSYmIXRpLE89eCYmKHguX2xlbmd0aHx8eC5sZW5ndGgpPjEsUz10Ll9lbnRlckNiPUh0KGZ1bmN0aW9uKCl7QSYmRHQodCwkKSxTLmNhbmNlbGxlZD8oQSYmRHQodCxiKSxrJiZrKHQpKTpDJiZDKHQpLHQuX2VudGVyQ2I9bnVsbH0pO2UuZGF0YS5zaG93fHxpZShlLmRhdGEuaG9va3x8KGUuZGF0YS5ob29rPXt9KSxcImluc2VydFwiLGZ1bmN0aW9uKCl7dmFyIG49dC5wYXJlbnROb2RlLHI9biYmbi5fcGVuZGluZyYmbi5fcGVuZGluZ1tlLmtleV07ciYmci50YWc9PT1lLnRhZyYmci5lbG0uX2xlYXZlQ2ImJnIuZWxtLl9sZWF2ZUNiKCkseCYmeCh0LFMpfSxcInRyYW5zaXRpb24taW5zZXJ0XCIpLHcmJncodCksQSYmKEx0KHQsYiksTHQodCwkKSxOdChmdW5jdGlvbigpe0R0KHQsYiksUy5jYW5jZWxsZWR8fE98fE10KHQsaSxTKX0pKSxlLmRhdGEuc2hvdyYmeCYmeCh0LFMpLEF8fE98fFMoKX19fWZ1bmN0aW9uIEJ0KGUsdCl7ZnVuY3Rpb24gbigpe20uY2FuY2VsbGVkfHwoZS5kYXRhLnNob3d8fCgoci5wYXJlbnROb2RlLl9wZW5kaW5nfHwoci5wYXJlbnROb2RlLl9wZW5kaW5nPXt9KSlbZS5rZXldPWUpLGwmJmwociksdiYmKEx0KHIscyksTHQocixjKSxOdChmdW5jdGlvbigpe0R0KHIscyksbS5jYW5jZWxsZWR8fGh8fE10KHIsYSxtKX0pKSx1JiZ1KHIsbSksdnx8aHx8bSgpKX12YXIgcj1lLmVsbTtyLl9lbnRlckNiJiYoci5fZW50ZXJDYi5jYW5jZWxsZWQ9ITAsci5fZW50ZXJDYigpKTt2YXIgaT1VdChlLmRhdGEudHJhbnNpdGlvbik7aWYoIWkpcmV0dXJuIHQoKTtpZighci5fbGVhdmVDYiYmMT09PXIubm9kZVR5cGUpe3ZhciBvPWkuY3NzLGE9aS50eXBlLHM9aS5sZWF2ZUNsYXNzLGM9aS5sZWF2ZUFjdGl2ZUNsYXNzLGw9aS5iZWZvcmVMZWF2ZSx1PWkubGVhdmUsZj1pLmFmdGVyTGVhdmUsZD1pLmxlYXZlQ2FuY2VsbGVkLHA9aS5kZWxheUxlYXZlLHY9byE9PSExJiYhdGksaD11JiYodS5fbGVuZ3RofHx1Lmxlbmd0aCk+MSxtPXIuX2xlYXZlQ2I9SHQoZnVuY3Rpb24oKXtyLnBhcmVudE5vZGUmJnIucGFyZW50Tm9kZS5fcGVuZGluZyYmKHIucGFyZW50Tm9kZS5fcGVuZGluZ1tlLmtleV09bnVsbCksdiYmRHQocixjKSxtLmNhbmNlbGxlZD8odiYmRHQocixzKSxkJiZkKHIpKToodCgpLGYmJmYocikpLHIuX2xlYXZlQ2I9bnVsbH0pO3A/cChuKTpuKCl9fWZ1bmN0aW9uIFV0KGUpe2lmKGUpe2lmKFwib2JqZWN0XCI9PXR5cGVvZiBlKXt2YXIgdD17fTtyZXR1cm4gZS5jc3MhPT0hMSYmbCh0LGpvKGUubmFtZXx8XCJ2XCIpKSxsKHQsZSksdH1yZXR1cm5cInN0cmluZ1wiPT10eXBlb2YgZT9qbyhlKTp2b2lkIDB9fWZ1bmN0aW9uIEh0KGUpe3ZhciB0PSExO3JldHVybiBmdW5jdGlvbigpe1xudHx8KHQ9ITAsZSgpKX19ZnVuY3Rpb24gVnQoZSx0LG4pe3ZhciByPXQudmFsdWUsaT1lLm11bHRpcGxlO2lmKCFpfHxBcnJheS5pc0FycmF5KHIpKXtmb3IodmFyIG8sYSxzPTAsYz1lLm9wdGlvbnMubGVuZ3RoO3M8YztzKyspaWYoYT1lLm9wdGlvbnNbc10saSlvPW0ocixKdChhKSk+LTEsYS5zZWxlY3RlZCE9PW8mJihhLnNlbGVjdGVkPW8pO2Vsc2UgaWYoaChKdChhKSxyKSlyZXR1cm4gdm9pZChlLnNlbGVjdGVkSW5kZXghPT1zJiYoZS5zZWxlY3RlZEluZGV4PXMpKTtpfHwoZS5zZWxlY3RlZEluZGV4PS0xKX19ZnVuY3Rpb24genQoZSx0KXtmb3IodmFyIG49MCxyPXQubGVuZ3RoO248cjtuKyspaWYoaChKdCh0W25dKSxlKSlyZXR1cm4hMTtyZXR1cm4hMH1mdW5jdGlvbiBKdChlKXtyZXR1cm5cIl92YWx1ZVwiaW4gZT9lLl92YWx1ZTplLnZhbHVlfWZ1bmN0aW9uIEt0KGUpe2UudGFyZ2V0LmNvbXBvc2luZz0hMH1mdW5jdGlvbiBxdChlKXtlLnRhcmdldC5jb21wb3Npbmc9ITEsV3QoZS50YXJnZXQsXCJpbnB1dFwiKX1mdW5jdGlvbiBXdChlLHQpe3ZhciBuPWRvY3VtZW50LmNyZWF0ZUV2ZW50KFwiSFRNTEV2ZW50c1wiKTtuLmluaXRFdmVudCh0LCEwLCEwKSxlLmRpc3BhdGNoRXZlbnQobil9ZnVuY3Rpb24gWnQoZSl7cmV0dXJuIWUuY2hpbGR8fGUuZGF0YSYmZS5kYXRhLnRyYW5zaXRpb24/ZTpadChlLmNoaWxkLl92bm9kZSl9ZnVuY3Rpb24gR3QoZSl7dmFyIHQ9ZSYmZS5jb21wb25lbnRPcHRpb25zO3JldHVybiB0JiZ0LkN0b3Iub3B0aW9ucy5hYnN0cmFjdD9HdChmZSh0LmNoaWxkcmVuKSk6ZX1mdW5jdGlvbiBZdChlKXt2YXIgdD17fSxuPWUuJG9wdGlvbnM7Zm9yKHZhciByIGluIG4ucHJvcHNEYXRhKXRbcl09ZVtyXTt2YXIgaT1uLl9wYXJlbnRMaXN0ZW5lcnM7Zm9yKHZhciBvIGluIGkpdFtWcihvKV09aVtvXS5mbjtyZXR1cm4gdH1mdW5jdGlvbiBRdChlLHQpe3JldHVybi9cXGQta2VlcC1hbGl2ZSQvLnRlc3QodC50YWcpP2UoXCJrZWVwLWFsaXZlXCIpOm51bGx9ZnVuY3Rpb24gWHQoZSl7Zm9yKDtlPWUucGFyZW50OylpZihlLmRhdGEudHJhbnNpdGlvbilyZXR1cm4hMH1mdW5jdGlvbiBlbihlKXtlLmVsbS5fbW92ZUNiJiZlLmVsbS5fbW92ZUNiKCksZS5lbG0uX2VudGVyQ2ImJmUuZWxtLl9lbnRlckNiKCl9ZnVuY3Rpb24gdG4oZSl7ZS5kYXRhLm5ld1Bvcz1lLmVsbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKX1mdW5jdGlvbiBubihlKXt2YXIgdD1lLmRhdGEucG9zLG49ZS5kYXRhLm5ld1BvcyxyPXQubGVmdC1uLmxlZnQsaT10LnRvcC1uLnRvcDtpZihyfHxpKXtlLmRhdGEubW92ZWQ9ITA7dmFyIG89ZS5lbG0uc3R5bGU7by50cmFuc2Zvcm09by5XZWJraXRUcmFuc2Zvcm09XCJ0cmFuc2xhdGUoXCIrcitcInB4LFwiK2krXCJweClcIixvLnRyYW5zaXRpb25EdXJhdGlvbj1cIjBzXCJ9fWZ1bmN0aW9uIHJuKGUsdCl7dmFyIG49ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtyZXR1cm4gbi5pbm5lckhUTUw9JzxkaXYgYT1cIicrZSsnXCI+JyxuLmlubmVySFRNTC5pbmRleE9mKHQpPjB9ZnVuY3Rpb24gb24oZSl7cmV0dXJuIFZvPVZvfHxkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLFZvLmlubmVySFRNTD1lLFZvLnRleHRDb250ZW50fWZ1bmN0aW9uIGFuKGUsdCl7cmV0dXJuIHQmJihlPWUucmVwbGFjZShEYSxcIlxcblwiKSksZS5yZXBsYWNlKE5hLFwiPFwiKS5yZXBsYWNlKExhLFwiPlwiKS5yZXBsYWNlKE1hLFwiJlwiKS5yZXBsYWNlKFBhLCdcIicpfWZ1bmN0aW9uIHNuKGUsdCl7ZnVuY3Rpb24gbih0KXtmKz10LGU9ZS5zdWJzdHJpbmcodCl9ZnVuY3Rpb24gcigpe3ZhciB0PWUubWF0Y2goWW8pO2lmKHQpe3ZhciByPXt0YWdOYW1lOnRbMV0sYXR0cnM6W10sc3RhcnQ6Zn07bih0WzBdLmxlbmd0aCk7Zm9yKHZhciBpLG87IShpPWUubWF0Y2goUW8pKSYmKG89ZS5tYXRjaChXbykpOyluKG9bMF0ubGVuZ3RoKSxyLmF0dHJzLnB1c2gobyk7aWYoaSlyZXR1cm4gci51bmFyeVNsYXNoPWlbMV0sbihpWzBdLmxlbmd0aCksci5lbmQ9ZixyfX1mdW5jdGlvbiBpKGUpe3ZhciBuPWUudGFnTmFtZSxyPWUudW5hcnlTbGFzaDtsJiYoXCJwXCI9PT1zJiZRaShuKSYmbyhcIlwiLHMpLFlpKG4pJiZzPT09biYmbyhcIlwiLG4pKTtmb3IodmFyIGk9dShuKXx8XCJodG1sXCI9PT1uJiZcImhlYWRcIj09PXN8fCEhcixhPWUuYXR0cnMubGVuZ3RoLGY9bmV3IEFycmF5KGEpLGQ9MDtkPGE7ZCsrKXt2YXIgcD1lLmF0dHJzW2RdO3JhJiZwWzBdLmluZGV4T2YoJ1wiXCInKT09PS0xJiYoXCJcIj09PXBbM10mJmRlbGV0ZSBwWzNdLFwiXCI9PT1wWzRdJiZkZWxldGUgcFs0XSxcIlwiPT09cFs1XSYmZGVsZXRlIHBbNV0pO3ZhciB2PXBbM118fHBbNF18fHBbNV18fFwiXCI7ZltkXT17bmFtZTpwWzFdLHZhbHVlOmFuKHYsdC5zaG91bGREZWNvZGVOZXdsaW5lcyl9fWl8fChjLnB1c2goe3RhZzpuLGF0dHJzOmZ9KSxzPW4scj1cIlwiKSx0LnN0YXJ0JiZ0LnN0YXJ0KG4sZixpLGUuc3RhcnQsZS5lbmQpfWZ1bmN0aW9uIG8oZSxuLHIsaSl7dmFyIG87aWYobnVsbD09ciYmKHI9ZiksbnVsbD09aSYmKGk9Ziksbil7dmFyIGE9bi50b0xvd2VyQ2FzZSgpO2ZvcihvPWMubGVuZ3RoLTE7bz49MCYmY1tvXS50YWcudG9Mb3dlckNhc2UoKSE9PWE7by0tKTt9ZWxzZSBvPTA7aWYobz49MCl7Zm9yKHZhciBsPWMubGVuZ3RoLTE7bD49bztsLS0pdC5lbmQmJnQuZW5kKGNbbF0udGFnLHIsaSk7Yy5sZW5ndGg9byxzPW8mJmNbby0xXS50YWd9ZWxzZVwiYnJcIj09PW4udG9Mb3dlckNhc2UoKT90LnN0YXJ0JiZ0LnN0YXJ0KG4sW10sITAscixpKTpcInBcIj09PW4udG9Mb3dlckNhc2UoKSYmKHQuc3RhcnQmJnQuc3RhcnQobixbXSwhMSxyLGkpLHQuZW5kJiZ0LmVuZChuLHIsaSkpfWZvcih2YXIgYSxzLGM9W10sbD10LmV4cGVjdEhUTUwsdT10LmlzVW5hcnlUYWd8fFpyLGY9MDtlOyl7aWYoYT1lLHMmJmphKHMsdC5zZmMsYykpe3ZhciBkPXMudG9Mb3dlckNhc2UoKSxwPUVhW2RdfHwoRWFbZF09bmV3IFJlZ0V4cChcIihbXFxcXHNcXFxcU10qPykoPC9cIitkK1wiW14+XSo+KVwiLFwiaVwiKSksdj0wLGg9ZS5yZXBsYWNlKHAsZnVuY3Rpb24oZSxuLHIpe3JldHVybiB2PXIubGVuZ3RoLFwic2NyaXB0XCIhPT1kJiZcInN0eWxlXCIhPT1kJiZcIm5vc2NyaXB0XCIhPT1kJiYobj1uLnJlcGxhY2UoLzwhLS0oW1xcc1xcU10qPyktLT4vZyxcIiQxXCIpLnJlcGxhY2UoLzwhXFxbQ0RBVEFcXFsoW1xcc1xcU10qPyldXT4vZyxcIiQxXCIpKSx0LmNoYXJzJiZ0LmNoYXJzKG4pLFwiXCJ9KTtmKz1lLmxlbmd0aC1oLmxlbmd0aCxlPWgsbyhcIjwvXCIrZCtcIj5cIixkLGYtdixmKX1lbHNle3ZhciBtPWUuaW5kZXhPZihcIjxcIik7aWYoMD09PW0pe2lmKHRhLnRlc3QoZSkpe3ZhciBnPWUuaW5kZXhPZihcIi0tPlwiKTtpZihnPj0wKXtuKGcrMyk7Y29udGludWV9fWlmKG5hLnRlc3QoZSkpe3ZhciB5PWUuaW5kZXhPZihcIl0+XCIpO2lmKHk+PTApe24oeSsyKTtjb250aW51ZX19dmFyIF89ZS5tYXRjaChlYSk7aWYoXyl7bihfWzBdLmxlbmd0aCk7Y29udGludWV9dmFyIGI9ZS5tYXRjaChYbyk7aWYoYil7dmFyICQ9ZjtuKGJbMF0ubGVuZ3RoKSxvKGJbMF0sYlsxXSwkLGYpO2NvbnRpbnVlfXZhciB3PXIoKTtpZih3KXtpKHcpO2NvbnRpbnVlfX12YXIgeD12b2lkIDAsQz12b2lkIDAsaz12b2lkIDA7aWYobT4wKXtmb3IoQz1lLnNsaWNlKG0pOyEoWG8udGVzdChDKXx8WW8udGVzdChDKXx8dGEudGVzdChDKXx8bmEudGVzdChDKXx8KGs9Qy5pbmRleE9mKFwiPFwiLDEpLGs8MCkpOyltKz1rLEM9ZS5zbGljZShtKTt4PWUuc3Vic3RyaW5nKDAsbSksbihtKX1tPDAmJih4PWUsZT1cIlwiKSx0LmNoYXJzJiZ4JiZ0LmNoYXJzKHgpfWlmKGU9PT1hJiZ0LmNoYXJzKXt0LmNoYXJzKGUpO2JyZWFrfX1vKCl9ZnVuY3Rpb24gY24oZSl7ZnVuY3Rpb24gdCgpeyhhfHwoYT1bXSkpLnB1c2goZS5zbGljZSh2LGkpLnRyaW0oKSksdj1pKzF9dmFyIG4scixpLG8sYSxzPSExLGM9ITEsbD0hMSx1PSExLGY9MCxkPTAscD0wLHY9MDtmb3IoaT0wO2k8ZS5sZW5ndGg7aSsrKWlmKHI9bixuPWUuY2hhckNvZGVBdChpKSxzKTM5PT09biYmOTIhPT1yJiYocz0hMSk7ZWxzZSBpZihjKTM0PT09biYmOTIhPT1yJiYoYz0hMSk7ZWxzZSBpZihsKTk2PT09biYmOTIhPT1yJiYobD0hMSk7ZWxzZSBpZih1KTQ3PT09biYmOTIhPT1yJiYodT0hMSk7ZWxzZSBpZigxMjQhPT1ufHwxMjQ9PT1lLmNoYXJDb2RlQXQoaSsxKXx8MTI0PT09ZS5jaGFyQ29kZUF0KGktMSl8fGZ8fGR8fHApc3dpdGNoKG4pe2Nhc2UgMzQ6Yz0hMDticmVhaztjYXNlIDM5OnM9ITA7YnJlYWs7Y2FzZSA5NjpsPSEwO2JyZWFrO2Nhc2UgNDc6dT0hMDticmVhaztjYXNlIDQwOnArKzticmVhaztjYXNlIDQxOnAtLTticmVhaztjYXNlIDkxOmQrKzticmVhaztjYXNlIDkzOmQtLTticmVhaztjYXNlIDEyMzpmKys7YnJlYWs7Y2FzZSAxMjU6Zi0tfWVsc2Ugdm9pZCAwPT09bz8odj1pKzEsbz1lLnNsaWNlKDAsaSkudHJpbSgpKTp0KCk7aWYodm9pZCAwPT09bz9vPWUuc2xpY2UoMCxpKS50cmltKCk6MCE9PXYmJnQoKSxhKWZvcihpPTA7aTxhLmxlbmd0aDtpKyspbz1sbihvLGFbaV0pO3JldHVybiBvfWZ1bmN0aW9uIGxuKGUsdCl7dmFyIG49dC5pbmRleE9mKFwiKFwiKTtpZihuPDApcmV0dXJuJ19mKFwiJyt0KydcIikoJytlK1wiKVwiO3ZhciByPXQuc2xpY2UoMCxuKSxpPXQuc2xpY2UobisxKTtyZXR1cm4nX2YoXCInK3IrJ1wiKSgnK2UrXCIsXCIraX1mdW5jdGlvbiB1bihlLHQpe3ZhciBuPXQ/RmEodCk6UmE7aWYobi50ZXN0KGUpKXtmb3IodmFyIHIsaSxvPVtdLGE9bi5sYXN0SW5kZXg9MDtyPW4uZXhlYyhlKTspe2k9ci5pbmRleCxpPmEmJm8ucHVzaChKU09OLnN0cmluZ2lmeShlLnNsaWNlKGEsaSkpKTt2YXIgcz1jbihyWzFdLnRyaW0oKSk7by5wdXNoKFwiX3MoXCIrcytcIilcIiksYT1pK3JbMF0ubGVuZ3RofXJldHVybiBhPGUubGVuZ3RoJiZvLnB1c2goSlNPTi5zdHJpbmdpZnkoZS5zbGljZShhKSkpLG8uam9pbihcIitcIil9fWZ1bmN0aW9uIGZuKGUpe2NvbnNvbGUuZXJyb3IoXCJbVnVlIHBhcnNlcl06IFwiK2UpfWZ1bmN0aW9uIGRuKGUsdCl7cmV0dXJuIGU/ZS5tYXAoZnVuY3Rpb24oZSl7cmV0dXJuIGVbdF19KS5maWx0ZXIoZnVuY3Rpb24oZSl7cmV0dXJuIGV9KTpbXX1mdW5jdGlvbiBwbihlLHQsbil7KGUucHJvcHN8fChlLnByb3BzPVtdKSkucHVzaCh7bmFtZTp0LHZhbHVlOm59KX1mdW5jdGlvbiB2bihlLHQsbil7KGUuYXR0cnN8fChlLmF0dHJzPVtdKSkucHVzaCh7bmFtZTp0LHZhbHVlOm59KX1mdW5jdGlvbiBobihlLHQsbixyLGksbyl7KGUuZGlyZWN0aXZlc3x8KGUuZGlyZWN0aXZlcz1bXSkpLnB1c2goe25hbWU6dCxyYXdOYW1lOm4sdmFsdWU6cixhcmc6aSxtb2RpZmllcnM6b30pfWZ1bmN0aW9uIG1uKGUsdCxuLHIsaSl7ciYmci5jYXB0dXJlJiYoZGVsZXRlIHIuY2FwdHVyZSx0PVwiIVwiK3QpO3ZhciBvO3ImJnIubmF0aXZlPyhkZWxldGUgci5uYXRpdmUsbz1lLm5hdGl2ZUV2ZW50c3x8KGUubmF0aXZlRXZlbnRzPXt9KSk6bz1lLmV2ZW50c3x8KGUuZXZlbnRzPXt9KTt2YXIgYT17dmFsdWU6bixtb2RpZmllcnM6cn0scz1vW3RdO0FycmF5LmlzQXJyYXkocyk/aT9zLnVuc2hpZnQoYSk6cy5wdXNoKGEpOnM/b1t0XT1pP1thLHNdOltzLGFdOm9bdF09YX1mdW5jdGlvbiBnbihlLHQsbil7dmFyIHI9eW4oZSxcIjpcIit0KXx8eW4oZSxcInYtYmluZDpcIit0KTtpZihudWxsIT1yKXJldHVybiBjbihyKTtpZihuIT09ITEpe3ZhciBpPXluKGUsdCk7aWYobnVsbCE9aSlyZXR1cm4gSlNPTi5zdHJpbmdpZnkoaSl9fWZ1bmN0aW9uIHluKGUsdCl7dmFyIG47aWYobnVsbCE9KG49ZS5hdHRyc01hcFt0XSkpZm9yKHZhciByPWUuYXR0cnNMaXN0LGk9MCxvPXIubGVuZ3RoO2k8bztpKyspaWYocltpXS5uYW1lPT09dCl7ci5zcGxpY2UoaSwxKTticmVha31yZXR1cm4gbn1mdW5jdGlvbiBfbihlKXtpZihvYT1lLGlhPW9hLmxlbmd0aCxzYT1jYT1sYT0wLGUuaW5kZXhPZihcIltcIik8MHx8ZS5sYXN0SW5kZXhPZihcIl1cIik8aWEtMSlyZXR1cm57ZXhwOmUsaWR4Om51bGx9O2Zvcig7ISRuKCk7KWFhPWJuKCksd24oYWEpP0NuKGFhKTo5MT09PWFhJiZ4bihhYSk7cmV0dXJue2V4cDplLnN1YnN0cmluZygwLGNhKSxpZHg6ZS5zdWJzdHJpbmcoY2ErMSxsYSl9fWZ1bmN0aW9uIGJuKCl7cmV0dXJuIG9hLmNoYXJDb2RlQXQoKytzYSl9ZnVuY3Rpb24gJG4oKXtyZXR1cm4gc2E+PWlhfWZ1bmN0aW9uIHduKGUpe3JldHVybiAzND09PWV8fDM5PT09ZX1mdW5jdGlvbiB4bihlKXt2YXIgdD0xO2ZvcihjYT1zYTshJG4oKTspaWYoZT1ibigpLHduKGUpKUNuKGUpO2Vsc2UgaWYoOTE9PT1lJiZ0KyssOTM9PT1lJiZ0LS0sMD09PXQpe2xhPXNhO2JyZWFrfX1mdW5jdGlvbiBDbihlKXtmb3IodmFyIHQ9ZTshJG4oKSYmKGU9Ym4oKSxlIT09dCk7KTt9ZnVuY3Rpb24ga24oZSx0KXt1YT10Lndhcm58fGZuLGZhPXQuZ2V0VGFnTmFtZXNwYWNlfHxacixkYT10Lm11c3RVc2VQcm9wfHxacixwYT10LmlzUHJlVGFnfHxacix2YT1kbih0Lm1vZHVsZXMsXCJwcmVUcmFuc2Zvcm1Ob2RlXCIpLGhhPWRuKHQubW9kdWxlcyxcInRyYW5zZm9ybU5vZGVcIiksbWE9ZG4odC5tb2R1bGVzLFwicG9zdFRyYW5zZm9ybU5vZGVcIiksZ2E9dC5kZWxpbWl0ZXJzO3ZhciBuLHIsaT1bXSxvPXQucHJlc2VydmVXaGl0ZXNwYWNlIT09ITEsYT0hMSxzPSExO3JldHVybiBzbihlLHtleHBlY3RIVE1MOnQuZXhwZWN0SFRNTCxpc1VuYXJ5VGFnOnQuaXNVbmFyeVRhZyxzaG91bGREZWNvZGVOZXdsaW5lczp0LnNob3VsZERlY29kZU5ld2xpbmVzLHN0YXJ0OmZ1bmN0aW9uKGUsbyxjKXtmdW5jdGlvbiBsKGUpe312YXIgdT1yJiZyLm5zfHxmYShlKTtlaSYmXCJzdmdcIj09PXUmJihvPVZuKG8pKTt2YXIgZj17dHlwZToxLHRhZzplLGF0dHJzTGlzdDpvLGF0dHJzTWFwOkJuKG8pLHBhcmVudDpyLGNoaWxkcmVuOltdfTt1JiYoZi5ucz11KSxIbihmKSYmIW9pKCkmJihmLmZvcmJpZGRlbj0hMCk7Zm9yKHZhciBkPTA7ZDx2YS5sZW5ndGg7ZCsrKXZhW2RdKGYsdCk7aWYoYXx8KEFuKGYpLGYucHJlJiYoYT0hMCkpLHBhKGYudGFnKSYmKHM9ITApLGEpT24oZik7ZWxzZXtqbihmKSxFbihmKSxEbihmKSxTbihmKSxmLnBsYWluPSFmLmtleSYmIW8ubGVuZ3RoLFRuKGYpLE1uKGYpLFBuKGYpO2Zvcih2YXIgcD0wO3A8aGEubGVuZ3RoO3ArKyloYVtwXShmLHQpO1JuKGYpfWlmKG4/aS5sZW5ndGh8fG4uaWYmJihmLmVsc2VpZnx8Zi5lbHNlKSYmKGwoZiksTG4obix7ZXhwOmYuZWxzZWlmLGJsb2NrOmZ9KSk6KG49ZixsKG4pKSxyJiYhZi5mb3JiaWRkZW4paWYoZi5lbHNlaWZ8fGYuZWxzZSlObihmLHIpO2Vsc2UgaWYoZi5zbG90U2NvcGUpe3IucGxhaW49ITE7dmFyIHY9Zi5zbG90VGFyZ2V0fHxcImRlZmF1bHRcIjsoci5zY29wZWRTbG90c3x8KHIuc2NvcGVkU2xvdHM9e30pKVt2XT1mfWVsc2Ugci5jaGlsZHJlbi5wdXNoKGYpLGYucGFyZW50PXI7Y3x8KHI9ZixpLnB1c2goZikpO2Zvcih2YXIgaD0wO2g8bWEubGVuZ3RoO2grKyltYVtoXShmLHQpfSxlbmQ6ZnVuY3Rpb24oKXt2YXIgZT1pW2kubGVuZ3RoLTFdLHQ9ZS5jaGlsZHJlbltlLmNoaWxkcmVuLmxlbmd0aC0xXTt0JiYzPT09dC50eXBlJiZcIiBcIj09PXQudGV4dCYmZS5jaGlsZHJlbi5wb3AoKSxpLmxlbmd0aC09MSxyPWlbaS5sZW5ndGgtMV0sZS5wcmUmJihhPSExKSxwYShlLnRhZykmJihzPSExKX0sY2hhcnM6ZnVuY3Rpb24oZSl7aWYociYmKCFlaXx8XCJ0ZXh0YXJlYVwiIT09ci50YWd8fHIuYXR0cnNNYXAucGxhY2Vob2xkZXIhPT1lKSYmKGU9c3x8ZS50cmltKCk/cWEoZSk6byYmci5jaGlsZHJlbi5sZW5ndGg/XCIgXCI6XCJcIikpe3ZhciB0OyFhJiZcIiBcIiE9PWUmJih0PXVuKGUsZ2EpKT9yLmNoaWxkcmVuLnB1c2goe3R5cGU6MixleHByZXNzaW9uOnQsdGV4dDplfSk6ci5jaGlsZHJlbi5wdXNoKHt0eXBlOjMsdGV4dDplfSl9fX0pLG59ZnVuY3Rpb24gQW4oZSl7bnVsbCE9eW4oZSxcInYtcHJlXCIpJiYoZS5wcmU9ITApfWZ1bmN0aW9uIE9uKGUpe3ZhciB0PWUuYXR0cnNMaXN0Lmxlbmd0aDtpZih0KWZvcih2YXIgbj1lLmF0dHJzPW5ldyBBcnJheSh0KSxyPTA7cjx0O3IrKyluW3JdPXtuYW1lOmUuYXR0cnNMaXN0W3JdLm5hbWUsdmFsdWU6SlNPTi5zdHJpbmdpZnkoZS5hdHRyc0xpc3Rbcl0udmFsdWUpfTtlbHNlIGUucHJlfHwoZS5wbGFpbj0hMCl9ZnVuY3Rpb24gU24oZSl7dmFyIHQ9Z24oZSxcImtleVwiKTt0JiYoZS5rZXk9dCl9ZnVuY3Rpb24gVG4oZSl7dmFyIHQ9Z24oZSxcInJlZlwiKTt0JiYoZS5yZWY9dCxlLnJlZkluRm9yPUluKGUpKX1mdW5jdGlvbiBqbihlKXt2YXIgdDtpZih0PXluKGUsXCJ2LWZvclwiKSl7dmFyIG49dC5tYXRjaChVYSk7aWYoIW4pcmV0dXJuO2UuZm9yPW5bMl0udHJpbSgpO3ZhciByPW5bMV0udHJpbSgpLGk9ci5tYXRjaChIYSk7aT8oZS5hbGlhcz1pWzFdLnRyaW0oKSxlLml0ZXJhdG9yMT1pWzJdLnRyaW0oKSxpWzNdJiYoZS5pdGVyYXRvcjI9aVszXS50cmltKCkpKTplLmFsaWFzPXJ9fWZ1bmN0aW9uIEVuKGUpe3ZhciB0PXluKGUsXCJ2LWlmXCIpO2lmKHQpZS5pZj10LExuKGUse2V4cDp0LGJsb2NrOmV9KTtlbHNle251bGwhPXluKGUsXCJ2LWVsc2VcIikmJihlLmVsc2U9ITApO3ZhciBuPXluKGUsXCJ2LWVsc2UtaWZcIik7biYmKGUuZWxzZWlmPW4pfX1mdW5jdGlvbiBObihlLHQpe3ZhciBuPVVuKHQuY2hpbGRyZW4pO24mJm4uaWYmJkxuKG4se2V4cDplLmVsc2VpZixibG9jazplfSl9ZnVuY3Rpb24gTG4oZSx0KXtlLmNvbmRpdGlvbnN8fChlLmNvbmRpdGlvbnM9W10pLGUuY29uZGl0aW9ucy5wdXNoKHQpfWZ1bmN0aW9uIERuKGUpe3ZhciB0PXluKGUsXCJ2LW9uY2VcIik7bnVsbCE9dCYmKGUub25jZT0hMCl9ZnVuY3Rpb24gTW4oZSl7aWYoXCJzbG90XCI9PT1lLnRhZyllLnNsb3ROYW1lPWduKGUsXCJuYW1lXCIpO2Vsc2V7dmFyIHQ9Z24oZSxcInNsb3RcIik7dCYmKGUuc2xvdFRhcmdldD0nXCJcIic9PT10PydcImRlZmF1bHRcIic6dCksXCJ0ZW1wbGF0ZVwiPT09ZS50YWcmJihlLnNsb3RTY29wZT15bihlLFwic2NvcGVcIikpfX1mdW5jdGlvbiBQbihlKXt2YXIgdDsodD1nbihlLFwiaXNcIikpJiYoZS5jb21wb25lbnQ9dCksbnVsbCE9eW4oZSxcImlubGluZS10ZW1wbGF0ZVwiKSYmKGUuaW5saW5lVGVtcGxhdGU9ITApfWZ1bmN0aW9uIFJuKGUpe3ZhciB0LG4scixpLG8sYSxzLGMsbD1lLmF0dHJzTGlzdDtmb3IodD0wLG49bC5sZW5ndGg7dDxuO3QrKylpZihyPWk9bFt0XS5uYW1lLG89bFt0XS52YWx1ZSxCYS50ZXN0KHIpKWlmKGUuaGFzQmluZGluZ3M9ITAscz1GbihyKSxzJiYocj1yLnJlcGxhY2UoS2EsXCJcIikpLFZhLnRlc3Qocikpcj1yLnJlcGxhY2UoVmEsXCJcIiksbz1jbihvKSxzJiYocy5wcm9wJiYoYz0hMCxyPVZyKHIpLFwiaW5uZXJIdG1sXCI9PT1yJiYocj1cImlubmVySFRNTFwiKSkscy5jYW1lbCYmKHI9VnIocikpKSxjfHxkYShlLnRhZyxyKT9wbihlLHIsbyk6dm4oZSxyLG8pO2Vsc2UgaWYoemEudGVzdChyKSlyPXIucmVwbGFjZSh6YSxcIlwiKSxtbihlLHIsbyxzKTtlbHNle3I9ci5yZXBsYWNlKEJhLFwiXCIpO3ZhciB1PXIubWF0Y2goSmEpO3UmJihhPXVbMV0pJiYocj1yLnNsaWNlKDAsLShhLmxlbmd0aCsxKSkpLGhuKGUscixpLG8sYSxzKX1lbHNlIHZuKGUscixKU09OLnN0cmluZ2lmeShvKSl9ZnVuY3Rpb24gSW4oZSl7Zm9yKHZhciB0PWU7dDspe2lmKHZvaWQgMCE9PXQuZm9yKXJldHVybiEwO3Q9dC5wYXJlbnR9cmV0dXJuITF9ZnVuY3Rpb24gRm4oZSl7dmFyIHQ9ZS5tYXRjaChLYSk7aWYodCl7dmFyIG49e307cmV0dXJuIHQuZm9yRWFjaChmdW5jdGlvbihlKXtuW2Uuc2xpY2UoMSldPSEwfSksbn19ZnVuY3Rpb24gQm4oZSl7Zm9yKHZhciB0PXt9LG49MCxyPWUubGVuZ3RoO248cjtuKyspdFtlW25dLm5hbWVdPWVbbl0udmFsdWU7cmV0dXJuIHR9ZnVuY3Rpb24gVW4oZSl7Zm9yKHZhciB0PWUubGVuZ3RoO3QtLTspaWYoZVt0XS50YWcpcmV0dXJuIGVbdF19ZnVuY3Rpb24gSG4oZSl7cmV0dXJuXCJzdHlsZVwiPT09ZS50YWd8fFwic2NyaXB0XCI9PT1lLnRhZyYmKCFlLmF0dHJzTWFwLnR5cGV8fFwidGV4dC9qYXZhc2NyaXB0XCI9PT1lLmF0dHJzTWFwLnR5cGUpfWZ1bmN0aW9uIFZuKGUpe2Zvcih2YXIgdD1bXSxuPTA7bjxlLmxlbmd0aDtuKyspe3ZhciByPWVbbl07V2EudGVzdChyLm5hbWUpfHwoci5uYW1lPXIubmFtZS5yZXBsYWNlKFphLFwiXCIpLHQucHVzaChyKSl9cmV0dXJuIHR9ZnVuY3Rpb24gem4oZSx0KXtlJiYoeWE9R2EodC5zdGF0aWNLZXlzfHxcIlwiKSxfYT10LmlzUmVzZXJ2ZWRUYWd8fGZ1bmN0aW9uKCl7cmV0dXJuITF9LEtuKGUpLHFuKGUsITEpKX1mdW5jdGlvbiBKbihlKXtyZXR1cm4gbihcInR5cGUsdGFnLGF0dHJzTGlzdCxhdHRyc01hcCxwbGFpbixwYXJlbnQsY2hpbGRyZW4sYXR0cnNcIisoZT9cIixcIitlOlwiXCIpKX1mdW5jdGlvbiBLbihlKXtpZihlLnN0YXRpYz1abihlKSwxPT09ZS50eXBlKXtpZighX2EoZS50YWcpJiZcInNsb3RcIiE9PWUudGFnJiZudWxsPT1lLmF0dHJzTWFwW1wiaW5saW5lLXRlbXBsYXRlXCJdKXJldHVybjtmb3IodmFyIHQ9MCxuPWUuY2hpbGRyZW4ubGVuZ3RoO3Q8bjt0Kyspe3ZhciByPWUuY2hpbGRyZW5bdF07S24ociksci5zdGF0aWN8fChlLnN0YXRpYz0hMSl9fX1mdW5jdGlvbiBxbihlLHQpe2lmKDE9PT1lLnR5cGUpe2lmKChlLnN0YXRpY3x8ZS5vbmNlKSYmKGUuc3RhdGljSW5Gb3I9dCksZS5zdGF0aWMmJmUuY2hpbGRyZW4ubGVuZ3RoJiYoMSE9PWUuY2hpbGRyZW4ubGVuZ3RofHwzIT09ZS5jaGlsZHJlblswXS50eXBlKSlyZXR1cm4gdm9pZChlLnN0YXRpY1Jvb3Q9ITApO2lmKGUuc3RhdGljUm9vdD0hMSxlLmNoaWxkcmVuKWZvcih2YXIgbj0wLHI9ZS5jaGlsZHJlbi5sZW5ndGg7bjxyO24rKylxbihlLmNoaWxkcmVuW25dLHR8fCEhZS5mb3IpO2UuY29uZGl0aW9ucyYmV24oZS5jb25kaXRpb25zLHQpfX1mdW5jdGlvbiBXbihlLHQpe2Zvcih2YXIgbj0xLHI9ZS5sZW5ndGg7bjxyO24rKylxbihlW25dLmJsb2NrLHQpfWZ1bmN0aW9uIFpuKGUpe3JldHVybiAyIT09ZS50eXBlJiYoMz09PWUudHlwZXx8ISghZS5wcmUmJihlLmhhc0JpbmRpbmdzfHxlLmlmfHxlLmZvcnx8QnIoZS50YWcpfHwhX2EoZS50YWcpfHxHbihlKXx8IU9iamVjdC5rZXlzKGUpLmV2ZXJ5KHlhKSkpKX1mdW5jdGlvbiBHbihlKXtmb3IoO2UucGFyZW50Oyl7aWYoZT1lLnBhcmVudCxcInRlbXBsYXRlXCIhPT1lLnRhZylyZXR1cm4hMTtpZihlLmZvcilyZXR1cm4hMH1yZXR1cm4hMX1mdW5jdGlvbiBZbihlLHQpe3ZhciBuPXQ/XCJuYXRpdmVPbjp7XCI6XCJvbjp7XCI7Zm9yKHZhciByIGluIGUpbis9J1wiJytyKydcIjonK1FuKHIsZVtyXSkrXCIsXCI7cmV0dXJuIG4uc2xpY2UoMCwtMSkrXCJ9XCJ9ZnVuY3Rpb24gUW4oZSx0KXtpZih0KXtpZihBcnJheS5pc0FycmF5KHQpKXJldHVyblwiW1wiK3QubWFwKGZ1bmN0aW9uKHQpe3JldHVybiBRbihlLHQpfSkuam9pbihcIixcIikrXCJdXCI7aWYodC5tb2RpZmllcnMpe3ZhciBuPVwiXCIscj1bXSxpPXRzLnRlc3QoZSk7Zm9yKHZhciBvIGluIHQubW9kaWZpZXJzKWVzW29dP24rPWVzW29dOmkmJm5zW29dP24rPW5zW29dOnIucHVzaChvKTtyLmxlbmd0aCYmKG49WG4ocikrbik7dmFyIGE9UWEudGVzdCh0LnZhbHVlKT90LnZhbHVlK1wiKCRldmVudClcIjp0LnZhbHVlO3JldHVyblwiZnVuY3Rpb24oJGV2ZW50KXtcIituK2ErXCJ9XCJ9cmV0dXJuIFlhLnRlc3QodC52YWx1ZSl8fFFhLnRlc3QodC52YWx1ZSk/dC52YWx1ZTpcImZ1bmN0aW9uKCRldmVudCl7XCIrdC52YWx1ZStcIn1cIn1yZXR1cm5cImZ1bmN0aW9uKCl7fVwifWZ1bmN0aW9uIFhuKGUpe3ZhciB0PTE9PT1lLmxlbmd0aD9lcihlWzBdKTpBcnJheS5wcm90b3R5cGUuY29uY2F0LmFwcGx5KFtdLGUubWFwKGVyKSk7cmV0dXJuIEFycmF5LmlzQXJyYXkodCk/XCJpZihcIit0Lm1hcChmdW5jdGlvbihlKXtyZXR1cm5cIiRldmVudC5rZXlDb2RlIT09XCIrZX0pLmpvaW4oXCImJlwiKStcIilyZXR1cm47XCI6XCJpZigkZXZlbnQua2V5Q29kZSE9PVwiK3QrXCIpcmV0dXJuO1wifWZ1bmN0aW9uIGVyKGUpe3JldHVybiBwYXJzZUludChlLDEwKXx8WGFbZV18fFwiX2soXCIrSlNPTi5zdHJpbmdpZnkoZSkrXCIpXCJ9ZnVuY3Rpb24gdHIoZSx0KXtlLndyYXBEYXRhPWZ1bmN0aW9uKG4pe3JldHVyblwiX2IoXCIrbitcIiwnXCIrZS50YWcrXCInLFwiK3QudmFsdWUrKHQubW9kaWZpZXJzJiZ0Lm1vZGlmaWVycy5wcm9wP1wiLHRydWVcIjpcIlwiKStcIilcIn19ZnVuY3Rpb24gbnIoZSx0KXt2YXIgbj1DYSxyPUNhPVtdLGk9a2E7a2E9MCxBYT10LGJhPXQud2Fybnx8Zm4sJGE9ZG4odC5tb2R1bGVzLFwidHJhbnNmb3JtQ29kZVwiKSx3YT1kbih0Lm1vZHVsZXMsXCJnZW5EYXRhXCIpLHhhPXQuZGlyZWN0aXZlc3x8e307dmFyIG89ZT9ycihlKTonX2goXCJkaXZcIiknO3JldHVybiBDYT1uLGthPWkse3JlbmRlcjpcIndpdGgodGhpcyl7cmV0dXJuIFwiK28rXCJ9XCIsc3RhdGljUmVuZGVyRm5zOnJ9fWZ1bmN0aW9uIHJyKGUpe2lmKGUuc3RhdGljUm9vdCYmIWUuc3RhdGljUHJvY2Vzc2VkKXJldHVybiBpcihlKTtpZihlLm9uY2UmJiFlLm9uY2VQcm9jZXNzZWQpcmV0dXJuIG9yKGUpO2lmKGUuZm9yJiYhZS5mb3JQcm9jZXNzZWQpcmV0dXJuIGNyKGUpO2lmKGUuaWYmJiFlLmlmUHJvY2Vzc2VkKXJldHVybiBhcihlKTtpZihcInRlbXBsYXRlXCIhPT1lLnRhZ3x8ZS5zbG90VGFyZ2V0KXtpZihcInNsb3RcIj09PWUudGFnKXJldHVybiBncihlKTt2YXIgdDtpZihlLmNvbXBvbmVudCl0PXlyKGUuY29tcG9uZW50LGUpO2Vsc2V7dmFyIG49ZS5wbGFpbj92b2lkIDA6bHIoZSkscj1lLmlubGluZVRlbXBsYXRlP251bGw6dnIoZSk7dD1cIl9oKCdcIitlLnRhZytcIidcIisobj9cIixcIituOlwiXCIpKyhyP1wiLFwiK3I6XCJcIikrXCIpXCJ9Zm9yKHZhciBpPTA7aTwkYS5sZW5ndGg7aSsrKXQ9JGFbaV0oZSx0KTtyZXR1cm4gdH1yZXR1cm4gdnIoZSl8fFwidm9pZCAwXCJ9ZnVuY3Rpb24gaXIoZSl7cmV0dXJuIGUuc3RhdGljUHJvY2Vzc2VkPSEwLENhLnB1c2goXCJ3aXRoKHRoaXMpe3JldHVybiBcIitycihlKStcIn1cIiksXCJfbShcIisoQ2EubGVuZ3RoLTEpKyhlLnN0YXRpY0luRm9yP1wiLHRydWVcIjpcIlwiKStcIilcIn1mdW5jdGlvbiBvcihlKXtpZihlLm9uY2VQcm9jZXNzZWQ9ITAsZS5pZiYmIWUuaWZQcm9jZXNzZWQpcmV0dXJuIGFyKGUpO2lmKGUuc3RhdGljSW5Gb3Ipe2Zvcih2YXIgdD1cIlwiLG49ZS5wYXJlbnQ7bjspe2lmKG4uZm9yKXt0PW4ua2V5O2JyZWFrfW49bi5wYXJlbnR9cmV0dXJuIHQ/XCJfbyhcIitycihlKStcIixcIitrYSsrICsodD9cIixcIit0OlwiXCIpK1wiKVwiOnJyKGUpfXJldHVybiBpcihlKX1mdW5jdGlvbiBhcihlKXtyZXR1cm4gZS5pZlByb2Nlc3NlZD0hMCxzcihlLmNvbmRpdGlvbnMpfWZ1bmN0aW9uIHNyKGUpe2Z1bmN0aW9uIHQoZSl7cmV0dXJuIGUub25jZT9vcihlKTpycihlKX1pZighZS5sZW5ndGgpcmV0dXJuXCJfZSgpXCI7dmFyIG49ZS5zaGlmdCgpO3JldHVybiBuLmV4cD9cIihcIituLmV4cCtcIik/XCIrdChuLmJsb2NrKStcIjpcIitzcihlKTpcIlwiK3Qobi5ibG9jayl9ZnVuY3Rpb24gY3IoZSl7dmFyIHQ9ZS5mb3Isbj1lLmFsaWFzLHI9ZS5pdGVyYXRvcjE/XCIsXCIrZS5pdGVyYXRvcjE6XCJcIixpPWUuaXRlcmF0b3IyP1wiLFwiK2UuaXRlcmF0b3IyOlwiXCI7cmV0dXJuIGUuZm9yUHJvY2Vzc2VkPSEwLFwiX2woKFwiK3QrXCIpLGZ1bmN0aW9uKFwiK24rcitpK1wiKXtyZXR1cm4gXCIrcnIoZSkrXCJ9KVwifWZ1bmN0aW9uIGxyKGUpe3ZhciB0PVwie1wiLG49dXIoZSk7biYmKHQrPW4rXCIsXCIpLGUua2V5JiYodCs9XCJrZXk6XCIrZS5rZXkrXCIsXCIpLGUucmVmJiYodCs9XCJyZWY6XCIrZS5yZWYrXCIsXCIpLGUucmVmSW5Gb3ImJih0Kz1cInJlZkluRm9yOnRydWUsXCIpLGUuY29tcG9uZW50JiYodCs9J3RhZzpcIicrZS50YWcrJ1wiLCcpO2Zvcih2YXIgcj0wO3I8d2EubGVuZ3RoO3IrKyl0Kz13YVtyXShlKTtpZihlLmF0dHJzJiYodCs9XCJhdHRyczp7XCIrX3IoZS5hdHRycykrXCJ9LFwiKSxlLnByb3BzJiYodCs9XCJkb21Qcm9wczp7XCIrX3IoZS5wcm9wcykrXCJ9LFwiKSxlLmV2ZW50cyYmKHQrPVluKGUuZXZlbnRzKStcIixcIiksZS5uYXRpdmVFdmVudHMmJih0Kz1ZbihlLm5hdGl2ZUV2ZW50cywhMCkrXCIsXCIpLGUuc2xvdFRhcmdldCYmKHQrPVwic2xvdDpcIitlLnNsb3RUYXJnZXQrXCIsXCIpLGUuc2NvcGVkU2xvdHMmJih0Kz1kcihlLnNjb3BlZFNsb3RzKStcIixcIiksZS5pbmxpbmVUZW1wbGF0ZSl7dmFyIGk9ZnIoZSk7aSYmKHQrPWkrXCIsXCIpfXJldHVybiB0PXQucmVwbGFjZSgvLCQvLFwiXCIpK1wifVwiLGUud3JhcERhdGEmJih0PWUud3JhcERhdGEodCkpLHR9ZnVuY3Rpb24gdXIoZSl7dmFyIHQ9ZS5kaXJlY3RpdmVzO2lmKHQpe3ZhciBuLHIsaSxvLGE9XCJkaXJlY3RpdmVzOltcIixzPSExO2ZvcihuPTAscj10Lmxlbmd0aDtuPHI7bisrKXtpPXRbbl0sbz0hMDt2YXIgYz14YVtpLm5hbWVdfHxyc1tpLm5hbWVdO2MmJihvPSEhYyhlLGksYmEpKSxvJiYocz0hMCxhKz0ne25hbWU6XCInK2kubmFtZSsnXCIscmF3TmFtZTpcIicraS5yYXdOYW1lKydcIicrKGkudmFsdWU/XCIsdmFsdWU6KFwiK2kudmFsdWUrXCIpLGV4cHJlc3Npb246XCIrSlNPTi5zdHJpbmdpZnkoaS52YWx1ZSk6XCJcIikrKGkuYXJnPycsYXJnOlwiJytpLmFyZysnXCInOlwiXCIpKyhpLm1vZGlmaWVycz9cIixtb2RpZmllcnM6XCIrSlNPTi5zdHJpbmdpZnkoaS5tb2RpZmllcnMpOlwiXCIpK1wifSxcIil9cmV0dXJuIHM/YS5zbGljZSgwLC0xKStcIl1cIjp2b2lkIDB9fWZ1bmN0aW9uIGZyKGUpe3ZhciB0PWUuY2hpbGRyZW5bMF07aWYoMT09PXQudHlwZSl7dmFyIG49bnIodCxBYSk7cmV0dXJuXCJpbmxpbmVUZW1wbGF0ZTp7cmVuZGVyOmZ1bmN0aW9uKCl7XCIrbi5yZW5kZXIrXCJ9LHN0YXRpY1JlbmRlckZuczpbXCIrbi5zdGF0aWNSZW5kZXJGbnMubWFwKGZ1bmN0aW9uKGUpe3JldHVyblwiZnVuY3Rpb24oKXtcIitlK1wifVwifSkuam9pbihcIixcIikrXCJdfVwifX1mdW5jdGlvbiBkcihlKXtyZXR1cm5cInNjb3BlZFNsb3RzOntcIitPYmplY3Qua2V5cyhlKS5tYXAoZnVuY3Rpb24odCl7cmV0dXJuIHByKHQsZVt0XSl9KS5qb2luKFwiLFwiKStcIn1cIn1mdW5jdGlvbiBwcihlLHQpe3JldHVybiBlK1wiOmZ1bmN0aW9uKFwiK1N0cmluZyh0LmF0dHJzTWFwLnNjb3BlKStcIil7cmV0dXJuIFwiKyhcInRlbXBsYXRlXCI9PT10LnRhZz92cih0KXx8XCJ2b2lkIDBcIjpycih0KSkrXCJ9XCJ9ZnVuY3Rpb24gdnIoZSl7aWYoZS5jaGlsZHJlbi5sZW5ndGgpcmV0dXJuXCJbXCIrZS5jaGlsZHJlbi5tYXAoaHIpLmpvaW4oXCIsXCIpK1wiXVwifWZ1bmN0aW9uIGhyKGUpe3JldHVybiAxPT09ZS50eXBlP3JyKGUpOm1yKGUpfWZ1bmN0aW9uIG1yKGUpe3JldHVybiAyPT09ZS50eXBlP2UuZXhwcmVzc2lvbjpicihKU09OLnN0cmluZ2lmeShlLnRleHQpKX1mdW5jdGlvbiBncihlKXt2YXIgdD1lLnNsb3ROYW1lfHwnXCJkZWZhdWx0XCInLG49dnIoZSk7cmV0dXJuXCJfdChcIit0KyhuP1wiLFwiK246XCJcIikrKGUuYXR0cnM/KG4/XCJcIjpcIixudWxsXCIpK1wiLHtcIitlLmF0dHJzLm1hcChmdW5jdGlvbihlKXtyZXR1cm4gVnIoZS5uYW1lKStcIjpcIitlLnZhbHVlfSkuam9pbihcIixcIikrXCJ9XCI6XCJcIikrXCIpXCJ9ZnVuY3Rpb24geXIoZSx0KXt2YXIgbj10LmlubGluZVRlbXBsYXRlP251bGw6dnIodCk7cmV0dXJuXCJfaChcIitlK1wiLFwiK2xyKHQpKyhuP1wiLFwiK246XCJcIikrXCIpXCJ9ZnVuY3Rpb24gX3IoZSl7Zm9yKHZhciB0PVwiXCIsbj0wO248ZS5sZW5ndGg7bisrKXt2YXIgcj1lW25dO3QrPSdcIicrci5uYW1lKydcIjonK2JyKHIudmFsdWUpK1wiLFwifXJldHVybiB0LnNsaWNlKDAsLTEpfWZ1bmN0aW9uIGJyKGUpe3JldHVybiBlLnJlcGxhY2UoL1xcdTIwMjgvZyxcIlxcXFx1MjAyOFwiKS5yZXBsYWNlKC9cXHUyMDI5L2csXCJcXFxcdTIwMjlcIil9ZnVuY3Rpb24gJHIoZSx0KXt2YXIgbj1rbihlLnRyaW0oKSx0KTt6bihuLHQpO3ZhciByPW5yKG4sdCk7cmV0dXJue2FzdDpuLHJlbmRlcjpyLnJlbmRlcixzdGF0aWNSZW5kZXJGbnM6ci5zdGF0aWNSZW5kZXJGbnN9fWZ1bmN0aW9uIHdyKGUsdCl7dmFyIG49KHQud2Fybnx8Zm4seW4oZSxcImNsYXNzXCIpKTtuJiYoZS5zdGF0aWNDbGFzcz1KU09OLnN0cmluZ2lmeShuKSk7dmFyIHI9Z24oZSxcImNsYXNzXCIsITEpO3ImJihlLmNsYXNzQmluZGluZz1yKX1mdW5jdGlvbiB4cihlKXt2YXIgdD1cIlwiO3JldHVybiBlLnN0YXRpY0NsYXNzJiYodCs9XCJzdGF0aWNDbGFzczpcIitlLnN0YXRpY0NsYXNzK1wiLFwiKSxlLmNsYXNzQmluZGluZyYmKHQrPVwiY2xhc3M6XCIrZS5jbGFzc0JpbmRpbmcrXCIsXCIpLHR9ZnVuY3Rpb24gQ3IoZSx0KXt2YXIgbj0odC53YXJufHxmbix5bihlLFwic3R5bGVcIikpO24mJihlLnN0YXRpY1N0eWxlPUpTT04uc3RyaW5naWZ5KGhvKG4pKSk7dmFyIHI9Z24oZSxcInN0eWxlXCIsITEpO3ImJihlLnN0eWxlQmluZGluZz1yKX1mdW5jdGlvbiBrcihlKXt2YXIgdD1cIlwiO3JldHVybiBlLnN0YXRpY1N0eWxlJiYodCs9XCJzdGF0aWNTdHlsZTpcIitlLnN0YXRpY1N0eWxlK1wiLFwiKSxlLnN0eWxlQmluZGluZyYmKHQrPVwic3R5bGU6KFwiK2Uuc3R5bGVCaW5kaW5nK1wiKSxcIiksdH1mdW5jdGlvbiBBcihlLHQsbil7T2E9bjt2YXIgcj10LnZhbHVlLGk9dC5tb2RpZmllcnMsbz1lLnRhZyxhPWUuYXR0cnNNYXAudHlwZTtyZXR1cm5cInNlbGVjdFwiPT09bz9qcihlLHIsaSk6XCJpbnB1dFwiPT09byYmXCJjaGVja2JveFwiPT09YT9PcihlLHIsaSk6XCJpbnB1dFwiPT09byYmXCJyYWRpb1wiPT09YT9TcihlLHIsaSk6VHIoZSxyLGkpLCEwfWZ1bmN0aW9uIE9yKGUsdCxuKXt2YXIgcj1uJiZuLm51bWJlcixpPWduKGUsXCJ2YWx1ZVwiKXx8XCJudWxsXCIsbz1nbihlLFwidHJ1ZS12YWx1ZVwiKXx8XCJ0cnVlXCIsYT1nbihlLFwiZmFsc2UtdmFsdWVcIil8fFwiZmFsc2VcIjtwbihlLFwiY2hlY2tlZFwiLFwiQXJyYXkuaXNBcnJheShcIit0K1wiKT9faShcIit0K1wiLFwiK2krXCIpPi0xOl9xKFwiK3QrXCIsXCIrbytcIilcIiksbW4oZSxcImNoYW5nZVwiLFwidmFyICQkYT1cIit0K1wiLCQkZWw9JGV2ZW50LnRhcmdldCwkJGM9JCRlbC5jaGVja2VkPyhcIitvK1wiKTooXCIrYStcIik7aWYoQXJyYXkuaXNBcnJheSgkJGEpKXt2YXIgJCR2PVwiKyhyP1wiX24oXCIraStcIilcIjppKStcIiwkJGk9X2koJCRhLCQkdik7aWYoJCRjKXskJGk8MCYmKFwiK3QrXCI9JCRhLmNvbmNhdCgkJHYpKX1lbHNleyQkaT4tMSYmKFwiK3QrXCI9JCRhLnNsaWNlKDAsJCRpKS5jb25jYXQoJCRhLnNsaWNlKCQkaSsxKSkpfX1lbHNle1wiK3QrXCI9JCRjfVwiLG51bGwsITApfWZ1bmN0aW9uIFNyKGUsdCxuKXt2YXIgcj1uJiZuLm51bWJlcixpPWduKGUsXCJ2YWx1ZVwiKXx8XCJudWxsXCI7aT1yP1wiX24oXCIraStcIilcIjppLHBuKGUsXCJjaGVja2VkXCIsXCJfcShcIit0K1wiLFwiK2krXCIpXCIpLG1uKGUsXCJjaGFuZ2VcIixFcih0LGkpLG51bGwsITApfWZ1bmN0aW9uIFRyKGUsdCxuKXt2YXIgcj1lLmF0dHJzTWFwLnR5cGUsaT1ufHx7fSxvPWkubGF6eSxhPWkubnVtYmVyLHM9aS50cmltLGM9b3x8ZWkmJlwicmFuZ2VcIj09PXI/XCJjaGFuZ2VcIjpcImlucHV0XCIsbD0hbyYmXCJyYW5nZVwiIT09cix1PVwiaW5wdXRcIj09PWUudGFnfHxcInRleHRhcmVhXCI9PT1lLnRhZyxmPXU/XCIkZXZlbnQudGFyZ2V0LnZhbHVlXCIrKHM/XCIudHJpbSgpXCI6XCJcIik6cz9cIih0eXBlb2YgJGV2ZW50ID09PSAnc3RyaW5nJyA/ICRldmVudC50cmltKCkgOiAkZXZlbnQpXCI6XCIkZXZlbnRcIjtmPWF8fFwibnVtYmVyXCI9PT1yP1wiX24oXCIrZitcIilcIjpmO3ZhciBkPUVyKHQsZik7dSYmbCYmKGQ9XCJpZigkZXZlbnQudGFyZ2V0LmNvbXBvc2luZylyZXR1cm47XCIrZCkscG4oZSxcInZhbHVlXCIsdT9cIl9zKFwiK3QrXCIpXCI6XCIoXCIrdCtcIilcIiksbW4oZSxjLGQsbnVsbCwhMCl9ZnVuY3Rpb24ganIoZSx0LG4pe3ZhciByPW4mJm4ubnVtYmVyLGk9J0FycmF5LnByb3RvdHlwZS5maWx0ZXIuY2FsbCgkZXZlbnQudGFyZ2V0Lm9wdGlvbnMsZnVuY3Rpb24obyl7cmV0dXJuIG8uc2VsZWN0ZWR9KS5tYXAoZnVuY3Rpb24obyl7dmFyIHZhbCA9IFwiX3ZhbHVlXCIgaW4gbyA/IG8uX3ZhbHVlIDogby52YWx1ZTtyZXR1cm4gJysocj9cIl9uKHZhbClcIjpcInZhbFwiKStcIn0pXCIrKG51bGw9PWUuYXR0cnNNYXAubXVsdGlwbGU/XCJbMF1cIjpcIlwiKSxvPUVyKHQsaSk7bW4oZSxcImNoYW5nZVwiLG8sbnVsbCwhMCl9ZnVuY3Rpb24gRXIoZSx0KXt2YXIgbj1fbihlKTtyZXR1cm4gbnVsbD09PW4uaWR4P2UrXCI9XCIrdDpcInZhciAkJGV4cCA9IFwiK24uZXhwK1wiLCAkJGlkeCA9IFwiK24uaWR4K1wiO2lmICghQXJyYXkuaXNBcnJheSgkJGV4cCkpe1wiK2UrXCI9XCIrdCtcIn1lbHNleyQkZXhwLnNwbGljZSgkJGlkeCwgMSwgXCIrdCtcIil9XCJ9ZnVuY3Rpb24gTnIoZSx0KXt0LnZhbHVlJiZwbihlLFwidGV4dENvbnRlbnRcIixcIl9zKFwiK3QudmFsdWUrXCIpXCIpfWZ1bmN0aW9uIExyKGUsdCl7dC52YWx1ZSYmcG4oZSxcImlubmVySFRNTFwiLFwiX3MoXCIrdC52YWx1ZStcIilcIil9ZnVuY3Rpb24gRHIoZSx0KXtyZXR1cm4gdD10P2wobCh7fSxscyksdCk6bHMsJHIoZSx0KX1mdW5jdGlvbiBNcihlLHQsbil7dmFyIHI9KHQmJnQud2Fybnx8dWksdCYmdC5kZWxpbWl0ZXJzP1N0cmluZyh0LmRlbGltaXRlcnMpK2U6ZSk7aWYoY3Nbcl0pcmV0dXJuIGNzW3JdO3ZhciBpPXt9LG89RHIoZSx0KTtpLnJlbmRlcj1QcihvLnJlbmRlcik7dmFyIGE9by5zdGF0aWNSZW5kZXJGbnMubGVuZ3RoO2kuc3RhdGljUmVuZGVyRm5zPW5ldyBBcnJheShhKTtmb3IodmFyIHM9MDtzPGE7cysrKWkuc3RhdGljUmVuZGVyRm5zW3NdPVByKG8uc3RhdGljUmVuZGVyRm5zW3NdKTtyZXR1cm4gY3Nbcl09aX1mdW5jdGlvbiBQcihlKXt0cnl7cmV0dXJuIG5ldyBGdW5jdGlvbihlKX1jYXRjaChlKXtyZXR1cm4gcH19ZnVuY3Rpb24gUnIoZSl7aWYoZS5vdXRlckhUTUwpcmV0dXJuIGUub3V0ZXJIVE1MO3ZhciB0PWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7cmV0dXJuIHQuYXBwZW5kQ2hpbGQoZS5jbG9uZU5vZGUoITApKSx0LmlubmVySFRNTH12YXIgSXIsRnIsQnI9bihcInNsb3QsY29tcG9uZW50XCIsITApLFVyPU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHksSHI9Ly0oXFx3KS9nLFZyPWEoZnVuY3Rpb24oZSl7cmV0dXJuIGUucmVwbGFjZShIcixmdW5jdGlvbihlLHQpe3JldHVybiB0P3QudG9VcHBlckNhc2UoKTpcIlwifSl9KSx6cj1hKGZ1bmN0aW9uKGUpe3JldHVybiBlLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpK2Uuc2xpY2UoMSl9KSxKcj0vKFteLV0pKFtBLVpdKS9nLEtyPWEoZnVuY3Rpb24oZSl7cmV0dXJuIGUucmVwbGFjZShKcixcIiQxLSQyXCIpLnJlcGxhY2UoSnIsXCIkMS0kMlwiKS50b0xvd2VyQ2FzZSgpfSkscXI9T2JqZWN0LnByb3RvdHlwZS50b1N0cmluZyxXcj1cIltvYmplY3QgT2JqZWN0XVwiLFpyPWZ1bmN0aW9uKCl7cmV0dXJuITF9LEdyPS9bXlxcdy4kXS8sWXI9XCJfX3Byb3RvX19cImlue30sUXI9XCJ1bmRlZmluZWRcIiE9dHlwZW9mIHdpbmRvdyYmXCJbb2JqZWN0IE9iamVjdF1cIiE9PU9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh3aW5kb3cpLFhyPVFyJiZ3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpLGVpPVhyJiYvbXNpZXx0cmlkZW50Ly50ZXN0KFhyKSx0aT1YciYmWHIuaW5kZXhPZihcIm1zaWUgOS4wXCIpPjAsbmk9WHImJlhyLmluZGV4T2YoXCJlZGdlL1wiKT4wLHJpPVhyJiZYci5pbmRleE9mKFwiYW5kcm9pZFwiKT4wLGlpPVhyJiYvaXBob25lfGlwYWR8aXBvZHxpb3MvLnRlc3QoWHIpLG9pPWZ1bmN0aW9uKCl7cmV0dXJuIHZvaWQgMD09PUlyJiYoSXI9IVFyJiZcInVuZGVmaW5lZFwiIT10eXBlb2YgZ2xvYmFsJiZcInNlcnZlclwiPT09Z2xvYmFsLnByb2Nlc3MuZW52LlZVRV9FTlYpLElyfSxhaT1RciYmd2luZG93Ll9fVlVFX0RFVlRPT0xTX0dMT0JBTF9IT09LX18sc2k9ZnVuY3Rpb24oKXtmdW5jdGlvbiBlKCl7cj0hMTt2YXIgZT1uLnNsaWNlKDApO24ubGVuZ3RoPTA7Zm9yKHZhciB0PTA7dDxlLmxlbmd0aDt0KyspZVt0XSgpfXZhciB0LG49W10scj0hMTtpZihcInVuZGVmaW5lZFwiIT10eXBlb2YgUHJvbWlzZSYmYihQcm9taXNlKSl7dmFyIGk9UHJvbWlzZS5yZXNvbHZlKCk7dD1mdW5jdGlvbigpe2kudGhlbihlKSxpaSYmc2V0VGltZW91dChwKX19ZWxzZSBpZihcInVuZGVmaW5lZFwiPT10eXBlb2YgTXV0YXRpb25PYnNlcnZlcnx8IWIoTXV0YXRpb25PYnNlcnZlcikmJlwiW29iamVjdCBNdXRhdGlvbk9ic2VydmVyQ29uc3RydWN0b3JdXCIhPT1NdXRhdGlvbk9ic2VydmVyLnRvU3RyaW5nKCkpdD1mdW5jdGlvbigpe3NldFRpbWVvdXQoZSwwKX07ZWxzZXt2YXIgbz0xLGE9bmV3IE11dGF0aW9uT2JzZXJ2ZXIoZSkscz1kb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShTdHJpbmcobykpO2Eub2JzZXJ2ZShzLHtjaGFyYWN0ZXJEYXRhOiEwfSksdD1mdW5jdGlvbigpe289KG8rMSklMixzLmRhdGE9U3RyaW5nKG8pfX1yZXR1cm4gZnVuY3Rpb24oZSxpKXt2YXIgbztpZihuLnB1c2goZnVuY3Rpb24oKXtlJiZlLmNhbGwoaSksbyYmbyhpKX0pLHJ8fChyPSEwLHQoKSksIWUmJlwidW5kZWZpbmVkXCIhPXR5cGVvZiBQcm9taXNlKXJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihlKXtvPWV9KX19KCk7RnI9XCJ1bmRlZmluZWRcIiE9dHlwZW9mIFNldCYmYihTZXQpP1NldDpmdW5jdGlvbigpe2Z1bmN0aW9uIGUoKXt0aGlzLnNldD1PYmplY3QuY3JlYXRlKG51bGwpfXJldHVybiBlLnByb3RvdHlwZS5oYXM9ZnVuY3Rpb24oZSl7cmV0dXJuIHZvaWQgMCE9PXRoaXMuc2V0W2VdfSxlLnByb3RvdHlwZS5hZGQ9ZnVuY3Rpb24oZSl7dGhpcy5zZXRbZV09MX0sZS5wcm90b3R5cGUuY2xlYXI9ZnVuY3Rpb24oKXt0aGlzLnNldD1PYmplY3QuY3JlYXRlKG51bGwpfSxlfSgpO3ZhciBjaSxsaT17b3B0aW9uTWVyZ2VTdHJhdGVnaWVzOk9iamVjdC5jcmVhdGUobnVsbCksc2lsZW50OiExLGRldnRvb2xzOiExLGVycm9ySGFuZGxlcjpudWxsLGlnbm9yZWRFbGVtZW50czpudWxsLGtleUNvZGVzOk9iamVjdC5jcmVhdGUobnVsbCksaXNSZXNlcnZlZFRhZzpacixpc1Vua25vd25FbGVtZW50OlpyLGdldFRhZ05hbWVzcGFjZTpwLG11c3RVc2VQcm9wOlpyLF9hc3NldFR5cGVzOltcImNvbXBvbmVudFwiLFwiZGlyZWN0aXZlXCIsXCJmaWx0ZXJcIl0sX2xpZmVjeWNsZUhvb2tzOltcImJlZm9yZUNyZWF0ZVwiLFwiY3JlYXRlZFwiLFwiYmVmb3JlTW91bnRcIixcIm1vdW50ZWRcIixcImJlZm9yZVVwZGF0ZVwiLFwidXBkYXRlZFwiLFwiYmVmb3JlRGVzdHJveVwiLFwiZGVzdHJveWVkXCIsXCJhY3RpdmF0ZWRcIixcImRlYWN0aXZhdGVkXCJdLF9tYXhVcGRhdGVDb3VudDoxMDB9LHVpPXAsZmk9MCxkaT1mdW5jdGlvbigpe3RoaXMuaWQ9ZmkrKyx0aGlzLnN1YnM9W119O2RpLnByb3RvdHlwZS5hZGRTdWI9ZnVuY3Rpb24oZSl7dGhpcy5zdWJzLnB1c2goZSl9LGRpLnByb3RvdHlwZS5yZW1vdmVTdWI9ZnVuY3Rpb24oZSl7cih0aGlzLnN1YnMsZSl9LGRpLnByb3RvdHlwZS5kZXBlbmQ9ZnVuY3Rpb24oKXtkaS50YXJnZXQmJmRpLnRhcmdldC5hZGREZXAodGhpcyl9LGRpLnByb3RvdHlwZS5ub3RpZnk9ZnVuY3Rpb24oKXtmb3IodmFyIGU9dGhpcy5zdWJzLnNsaWNlKCksdD0wLG49ZS5sZW5ndGg7dDxuO3QrKyllW3RdLnVwZGF0ZSgpfSxkaS50YXJnZXQ9bnVsbDt2YXIgcGk9W10sdmk9QXJyYXkucHJvdG90eXBlLGhpPU9iamVjdC5jcmVhdGUodmkpO1tcInB1c2hcIixcInBvcFwiLFwic2hpZnRcIixcInVuc2hpZnRcIixcInNwbGljZVwiLFwic29ydFwiLFwicmV2ZXJzZVwiXS5mb3JFYWNoKGZ1bmN0aW9uKGUpe3ZhciB0PXZpW2VdO3koaGksZSxmdW5jdGlvbigpe2Zvcih2YXIgbj1hcmd1bWVudHMscj1hcmd1bWVudHMubGVuZ3RoLGk9bmV3IEFycmF5KHIpO3ItLTspaVtyXT1uW3JdO3ZhciBvLGE9dC5hcHBseSh0aGlzLGkpLHM9dGhpcy5fX29iX187c3dpdGNoKGUpe2Nhc2VcInB1c2hcIjpvPWk7YnJlYWs7Y2FzZVwidW5zaGlmdFwiOm89aTticmVhaztjYXNlXCJzcGxpY2VcIjpvPWkuc2xpY2UoMil9cmV0dXJuIG8mJnMub2JzZXJ2ZUFycmF5KG8pLHMuZGVwLm5vdGlmeSgpLGF9KX0pO3ZhciBtaT1PYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhoaSksZ2k9e3Nob3VsZENvbnZlcnQ6ITAsaXNTZXR0aW5nUHJvcHM6ITF9LHlpPWZ1bmN0aW9uKGUpe2lmKHRoaXMudmFsdWU9ZSx0aGlzLmRlcD1uZXcgZGksdGhpcy52bUNvdW50PTAseShlLFwiX19vYl9fXCIsdGhpcyksQXJyYXkuaXNBcnJheShlKSl7dmFyIHQ9WXI/eDpDO3QoZSxoaSxtaSksdGhpcy5vYnNlcnZlQXJyYXkoZSl9ZWxzZSB0aGlzLndhbGsoZSl9O3lpLnByb3RvdHlwZS53YWxrPWZ1bmN0aW9uKGUpe2Zvcih2YXIgdD1PYmplY3Qua2V5cyhlKSxuPTA7bjx0Lmxlbmd0aDtuKyspQShlLHRbbl0sZVt0W25dXSl9LHlpLnByb3RvdHlwZS5vYnNlcnZlQXJyYXk9ZnVuY3Rpb24oZSl7Zm9yKHZhciB0PTAsbj1lLmxlbmd0aDt0PG47dCsrKWsoZVt0XSl9O3ZhciBfaT1saS5vcHRpb25NZXJnZVN0cmF0ZWdpZXM7X2kuZGF0YT1mdW5jdGlvbihlLHQsbil7cmV0dXJuIG4/ZXx8dD9mdW5jdGlvbigpe3ZhciByPVwiZnVuY3Rpb25cIj09dHlwZW9mIHQ/dC5jYWxsKG4pOnQsaT1cImZ1bmN0aW9uXCI9PXR5cGVvZiBlP2UuY2FsbChuKTp2b2lkIDA7cmV0dXJuIHI/aihyLGkpOml9OnZvaWQgMDp0P1wiZnVuY3Rpb25cIiE9dHlwZW9mIHQ/ZTplP2Z1bmN0aW9uKCl7cmV0dXJuIGoodC5jYWxsKHRoaXMpLGUuY2FsbCh0aGlzKSl9OnQ6ZX0sbGkuX2xpZmVjeWNsZUhvb2tzLmZvckVhY2goZnVuY3Rpb24oZSl7X2lbZV09RX0pLGxpLl9hc3NldFR5cGVzLmZvckVhY2goZnVuY3Rpb24oZSl7X2lbZStcInNcIl09Tn0pLF9pLndhdGNoPWZ1bmN0aW9uKGUsdCl7aWYoIXQpcmV0dXJuIGU7aWYoIWUpcmV0dXJuIHQ7dmFyIG49e307bChuLGUpO2Zvcih2YXIgciBpbiB0KXt2YXIgaT1uW3JdLG89dFtyXTtpJiYhQXJyYXkuaXNBcnJheShpKSYmKGk9W2ldKSxuW3JdPWk/aS5jb25jYXQobyk6W29dfXJldHVybiBufSxfaS5wcm9wcz1faS5tZXRob2RzPV9pLmNvbXB1dGVkPWZ1bmN0aW9uKGUsdCl7aWYoIXQpcmV0dXJuIGU7aWYoIWUpcmV0dXJuIHQ7dmFyIG49T2JqZWN0LmNyZWF0ZShudWxsKTtyZXR1cm4gbChuLGUpLGwobix0KSxufTt2YXIgYmk9ZnVuY3Rpb24oZSx0KXtyZXR1cm4gdm9pZCAwPT09dD9lOnR9LCRpPU9iamVjdC5mcmVlemUoe2RlZmluZVJlYWN0aXZlOkEsX3RvU3RyaW5nOmUsdG9OdW1iZXI6dCxtYWtlTWFwOm4saXNCdWlsdEluVGFnOkJyLHJlbW92ZTpyLGhhc093bjppLGlzUHJpbWl0aXZlOm8sY2FjaGVkOmEsY2FtZWxpemU6VnIsY2FwaXRhbGl6ZTp6cixoeXBoZW5hdGU6S3IsYmluZDpzLHRvQXJyYXk6YyxleHRlbmQ6bCxpc09iamVjdDp1LGlzUGxhaW5PYmplY3Q6Zix0b09iamVjdDpkLG5vb3A6cCxubzpacixnZW5TdGF0aWNLZXlzOnYsbG9vc2VFcXVhbDpoLGxvb3NlSW5kZXhPZjptLGlzUmVzZXJ2ZWQ6ZyxkZWY6eSxwYXJzZVBhdGg6XyxoYXNQcm90bzpZcixpbkJyb3dzZXI6UXIsVUE6WHIsaXNJRTplaSxpc0lFOTp0aSxpc0VkZ2U6bmksaXNBbmRyb2lkOnJpLGlzSU9TOmlpLGlzU2VydmVyUmVuZGVyaW5nOm9pLGRldnRvb2xzOmFpLG5leHRUaWNrOnNpLGdldCBfU2V0KCl7cmV0dXJuIEZyfSxtZXJnZU9wdGlvbnM6TSxyZXNvbHZlQXNzZXQ6UCx3YXJuOnVpLGZvcm1hdENvbXBvbmVudE5hbWU6Y2ksdmFsaWRhdGVQcm9wOlJ9KSx3aT1bXSx4aT17fSxDaT0hMSxraT0hMSxBaT0wLE9pPTAsU2k9ZnVuY3Rpb24oZSx0LG4scil7dm9pZCAwPT09ciYmKHI9e30pLHRoaXMudm09ZSxlLl93YXRjaGVycy5wdXNoKHRoaXMpLHRoaXMuZGVlcD0hIXIuZGVlcCx0aGlzLnVzZXI9ISFyLnVzZXIsdGhpcy5sYXp5PSEhci5sYXp5LHRoaXMuc3luYz0hIXIuc3luYyx0aGlzLmV4cHJlc3Npb249dC50b1N0cmluZygpLHRoaXMuY2I9bix0aGlzLmlkPSsrT2ksdGhpcy5hY3RpdmU9ITAsdGhpcy5kaXJ0eT10aGlzLmxhenksdGhpcy5kZXBzPVtdLHRoaXMubmV3RGVwcz1bXSx0aGlzLmRlcElkcz1uZXcgRnIsdGhpcy5uZXdEZXBJZHM9bmV3IEZyLFwiZnVuY3Rpb25cIj09dHlwZW9mIHQ/dGhpcy5nZXR0ZXI9dDoodGhpcy5nZXR0ZXI9Xyh0KSx0aGlzLmdldHRlcnx8KHRoaXMuZ2V0dGVyPWZ1bmN0aW9uKCl7fSkpLHRoaXMudmFsdWU9dGhpcy5sYXp5P3ZvaWQgMDp0aGlzLmdldCgpfTtTaS5wcm90b3R5cGUuZ2V0PWZ1bmN0aW9uKCl7JCh0aGlzKTt2YXIgZT10aGlzLmdldHRlci5jYWxsKHRoaXMudm0sdGhpcy52bSk7cmV0dXJuIHRoaXMuZGVlcCYmeihlKSx3KCksdGhpcy5jbGVhbnVwRGVwcygpLGV9LFNpLnByb3RvdHlwZS5hZGREZXA9ZnVuY3Rpb24oZSl7dmFyIHQ9ZS5pZDt0aGlzLm5ld0RlcElkcy5oYXModCl8fCh0aGlzLm5ld0RlcElkcy5hZGQodCksdGhpcy5uZXdEZXBzLnB1c2goZSksdGhpcy5kZXBJZHMuaGFzKHQpfHxlLmFkZFN1Yih0aGlzKSl9LFNpLnByb3RvdHlwZS5jbGVhbnVwRGVwcz1mdW5jdGlvbigpe2Zvcih2YXIgZT10aGlzLHQ9dGhpcy5kZXBzLmxlbmd0aDt0LS07KXt2YXIgbj1lLmRlcHNbdF07ZS5uZXdEZXBJZHMuaGFzKG4uaWQpfHxuLnJlbW92ZVN1YihlKX12YXIgcj10aGlzLmRlcElkczt0aGlzLmRlcElkcz10aGlzLm5ld0RlcElkcyx0aGlzLm5ld0RlcElkcz1yLHRoaXMubmV3RGVwSWRzLmNsZWFyKCkscj10aGlzLmRlcHMsdGhpcy5kZXBzPXRoaXMubmV3RGVwcyx0aGlzLm5ld0RlcHM9cix0aGlzLm5ld0RlcHMubGVuZ3RoPTB9LFNpLnByb3RvdHlwZS51cGRhdGU9ZnVuY3Rpb24oKXt0aGlzLmxhenk/dGhpcy5kaXJ0eT0hMDp0aGlzLnN5bmM/dGhpcy5ydW4oKTpWKHRoaXMpfSxTaS5wcm90b3R5cGUucnVuPWZ1bmN0aW9uKCl7aWYodGhpcy5hY3RpdmUpe3ZhciBlPXRoaXMuZ2V0KCk7aWYoZSE9PXRoaXMudmFsdWV8fHUoZSl8fHRoaXMuZGVlcCl7dmFyIHQ9dGhpcy52YWx1ZTtpZih0aGlzLnZhbHVlPWUsdGhpcy51c2VyKXRyeXt0aGlzLmNiLmNhbGwodGhpcy52bSxlLHQpfWNhdGNoKGUpe2lmKCFsaS5lcnJvckhhbmRsZXIpdGhyb3cgZTtsaS5lcnJvckhhbmRsZXIuY2FsbChudWxsLGUsdGhpcy52bSl9ZWxzZSB0aGlzLmNiLmNhbGwodGhpcy52bSxlLHQpfX19LFNpLnByb3RvdHlwZS5ldmFsdWF0ZT1mdW5jdGlvbigpe3RoaXMudmFsdWU9dGhpcy5nZXQoKSx0aGlzLmRpcnR5PSExfSxTaS5wcm90b3R5cGUuZGVwZW5kPWZ1bmN0aW9uKCl7Zm9yKHZhciBlPXRoaXMsdD10aGlzLmRlcHMubGVuZ3RoO3QtLTspZS5kZXBzW3RdLmRlcGVuZCgpfSxTaS5wcm90b3R5cGUudGVhcmRvd249ZnVuY3Rpb24oKXt2YXIgZT10aGlzO2lmKHRoaXMuYWN0aXZlKXt0aGlzLnZtLl9pc0JlaW5nRGVzdHJveWVkfHx0aGlzLnZtLl92Rm9yUmVtb3Zpbmd8fHIodGhpcy52bS5fd2F0Y2hlcnMsdGhpcyk7Zm9yKHZhciB0PXRoaXMuZGVwcy5sZW5ndGg7dC0tOyllLmRlcHNbdF0ucmVtb3ZlU3ViKGUpO3RoaXMuYWN0aXZlPSExfX07dmFyIFRpPW5ldyBGcixqaT17ZW51bWVyYWJsZTohMCxjb25maWd1cmFibGU6ITAsZ2V0OnAsc2V0OnB9LEVpPWZ1bmN0aW9uKGUsdCxuLHIsaSxvLGEscyl7dGhpcy50YWc9ZSx0aGlzLmRhdGE9dCx0aGlzLmNoaWxkcmVuPW4sdGhpcy50ZXh0PXIsdGhpcy5lbG09aSx0aGlzLm5zPW8sdGhpcy5jb250ZXh0PWEsdGhpcy5mdW5jdGlvbmFsQ29udGV4dD12b2lkIDAsdGhpcy5rZXk9dCYmdC5rZXksdGhpcy5jb21wb25lbnRPcHRpb25zPXMsdGhpcy5jaGlsZD12b2lkIDAsdGhpcy5wYXJlbnQ9dm9pZCAwLHRoaXMucmF3PSExLHRoaXMuaXNTdGF0aWM9ITEsdGhpcy5pc1Jvb3RJbnNlcnQ9ITAsdGhpcy5pc0NvbW1lbnQ9ITEsdGhpcy5pc0Nsb25lZD0hMSx0aGlzLmlzT25jZT0hMX0sTmk9ZnVuY3Rpb24oKXt2YXIgZT1uZXcgRWk7cmV0dXJuIGUudGV4dD1cIlwiLGUuaXNDb21tZW50PSEwLGV9LExpPW51bGwsRGk9e2luaXQ6eWUscHJlcGF0Y2g6X2UsaW5zZXJ0OmJlLGRlc3Ryb3k6JGV9LE1pPU9iamVjdC5rZXlzKERpKSxQaT0wO0RlKFJlKSxlZShSZSksTGUoUmUpLHBlKFJlKSxqZShSZSk7dmFyIFJpPVtTdHJpbmcsUmVnRXhwXSxJaT17bmFtZTpcImtlZXAtYWxpdmVcIixhYnN0cmFjdDohMCxwcm9wczp7aW5jbHVkZTpSaSxleGNsdWRlOlJpfSxjcmVhdGVkOmZ1bmN0aW9uKCl7dGhpcy5jYWNoZT1PYmplY3QuY3JlYXRlKG51bGwpfSxyZW5kZXI6ZnVuY3Rpb24oKXt2YXIgZT1mZSh0aGlzLiRzbG90cy5kZWZhdWx0KTtpZihlJiZlLmNvbXBvbmVudE9wdGlvbnMpe3ZhciB0PWUuY29tcG9uZW50T3B0aW9ucyxuPXQuQ3Rvci5vcHRpb25zLm5hbWV8fHQudGFnO2lmKG4mJih0aGlzLmluY2x1ZGUmJiFIZSh0aGlzLmluY2x1ZGUsbil8fHRoaXMuZXhjbHVkZSYmSGUodGhpcy5leGNsdWRlLG4pKSlyZXR1cm4gZTt2YXIgcj1udWxsPT1lLmtleT90LkN0b3IuY2lkKyh0LnRhZz9cIjo6XCIrdC50YWc6XCJcIik6ZS5rZXk7dGhpcy5jYWNoZVtyXT9lLmNoaWxkPXRoaXMuY2FjaGVbcl0uY2hpbGQ6dGhpcy5jYWNoZVtyXT1lLGUuZGF0YS5rZWVwQWxpdmU9ITB9cmV0dXJuIGV9LGRlc3Ryb3llZDpmdW5jdGlvbigpe3ZhciBlPXRoaXM7Zm9yKHZhciB0IGluIHRoaXMuY2FjaGUpe3ZhciBuPWUuY2FjaGVbdF07dmUobi5jaGlsZCxcImRlYWN0aXZhdGVkXCIpLG4uY2hpbGQuJGRlc3Ryb3koKX19fSxGaT17S2VlcEFsaXZlOklpfTtWZShSZSksT2JqZWN0LmRlZmluZVByb3BlcnR5KFJlLnByb3RvdHlwZSxcIiRpc1NlcnZlclwiLHtnZXQ6b2l9KSxSZS52ZXJzaW9uPVwiMi4xLjBcIjt2YXIgQmksVWk9ZnVuY3Rpb24oZSx0KXtyZXR1cm5cInZhbHVlXCI9PT10JiYoXCJpbnB1dFwiPT09ZXx8XCJ0ZXh0YXJlYVwiPT09ZXx8XCJvcHRpb25cIj09PWUpfHxcInNlbGVjdGVkXCI9PT10JiZcIm9wdGlvblwiPT09ZXx8XCJjaGVja2VkXCI9PT10JiZcImlucHV0XCI9PT1lfHxcIm11dGVkXCI9PT10JiZcInZpZGVvXCI9PT1lfSxIaT1uKFwiY29udGVudGVkaXRhYmxlLGRyYWdnYWJsZSxzcGVsbGNoZWNrXCIpLFZpPW4oXCJhbGxvd2Z1bGxzY3JlZW4sYXN5bmMsYXV0b2ZvY3VzLGF1dG9wbGF5LGNoZWNrZWQsY29tcGFjdCxjb250cm9scyxkZWNsYXJlLGRlZmF1bHQsZGVmYXVsdGNoZWNrZWQsZGVmYXVsdG11dGVkLGRlZmF1bHRzZWxlY3RlZCxkZWZlcixkaXNhYmxlZCxlbmFibGVkLGZvcm1ub3ZhbGlkYXRlLGhpZGRlbixpbmRldGVybWluYXRlLGluZXJ0LGlzbWFwLGl0ZW1zY29wZSxsb29wLG11bHRpcGxlLG11dGVkLG5vaHJlZixub3Jlc2l6ZSxub3NoYWRlLG5vdmFsaWRhdGUsbm93cmFwLG9wZW4scGF1c2VvbmV4aXQscmVhZG9ubHkscmVxdWlyZWQscmV2ZXJzZWQsc2NvcGVkLHNlYW1sZXNzLHNlbGVjdGVkLHNvcnRhYmxlLHRyYW5zbGF0ZSx0cnVlc3BlZWQsdHlwZW11c3RtYXRjaCx2aXNpYmxlXCIpLHppPVwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiLEppPWZ1bmN0aW9uKGUpe3JldHVyblwiOlwiPT09ZS5jaGFyQXQoNSkmJlwieGxpbmtcIj09PWUuc2xpY2UoMCw1KX0sS2k9ZnVuY3Rpb24oZSl7cmV0dXJuIEppKGUpP2Uuc2xpY2UoNixlLmxlbmd0aCk6XCJcIn0scWk9ZnVuY3Rpb24oZSl7cmV0dXJuIG51bGw9PWV8fGU9PT0hMX0sV2k9e3N2ZzpcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsbWF0aDpcImh0dHA6Ly93d3cudzMub3JnLzE5OTgvTWF0aC9NYXRoTUxcIix4aHRtbDpcImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGh0bWxcIn0sWmk9bihcImh0bWwsYm9keSxiYXNlLGhlYWQsbGluayxtZXRhLHN0eWxlLHRpdGxlLGFkZHJlc3MsYXJ0aWNsZSxhc2lkZSxmb290ZXIsaGVhZGVyLGgxLGgyLGgzLGg0LGg1LGg2LGhncm91cCxuYXYsc2VjdGlvbixkaXYsZGQsZGwsZHQsZmlnY2FwdGlvbixmaWd1cmUsaHIsaW1nLGxpLG1haW4sb2wscCxwcmUsdWwsYSxiLGFiYnIsYmRpLGJkbyxicixjaXRlLGNvZGUsZGF0YSxkZm4sZW0saSxrYmQsbWFyayxxLHJwLHJ0LHJ0YyxydWJ5LHMsc2FtcCxzbWFsbCxzcGFuLHN0cm9uZyxzdWIsc3VwLHRpbWUsdSx2YXIsd2JyLGFyZWEsYXVkaW8sbWFwLHRyYWNrLHZpZGVvLGVtYmVkLG9iamVjdCxwYXJhbSxzb3VyY2UsY2FudmFzLHNjcmlwdCxub3NjcmlwdCxkZWwsaW5zLGNhcHRpb24sY29sLGNvbGdyb3VwLHRhYmxlLHRoZWFkLHRib2R5LHRkLHRoLHRyLGJ1dHRvbixkYXRhbGlzdCxmaWVsZHNldCxmb3JtLGlucHV0LGxhYmVsLGxlZ2VuZCxtZXRlcixvcHRncm91cCxvcHRpb24sb3V0cHV0LHByb2dyZXNzLHNlbGVjdCx0ZXh0YXJlYSxkZXRhaWxzLGRpYWxvZyxtZW51LG1lbnVpdGVtLHN1bW1hcnksY29udGVudCxlbGVtZW50LHNoYWRvdyx0ZW1wbGF0ZVwiKSxHaT1uKFwiYXJlYSxiYXNlLGJyLGNvbCxlbWJlZCxmcmFtZSxocixpbWcsaW5wdXQsaXNpbmRleCxrZXlnZW4sbGluayxtZXRhLHBhcmFtLHNvdXJjZSx0cmFjayx3YnJcIiwhMCksWWk9bihcImNvbGdyb3VwLGRkLGR0LGxpLG9wdGlvbnMscCx0ZCx0Zm9vdCx0aCx0aGVhZCx0cixzb3VyY2VcIiwhMCksUWk9bihcImFkZHJlc3MsYXJ0aWNsZSxhc2lkZSxiYXNlLGJsb2NrcXVvdGUsYm9keSxjYXB0aW9uLGNvbCxjb2xncm91cCxkZCxkZXRhaWxzLGRpYWxvZyxkaXYsZGwsZHQsZmllbGRzZXQsZmlnY2FwdGlvbixmaWd1cmUsZm9vdGVyLGZvcm0saDEsaDIsaDMsaDQsaDUsaDYsaGVhZCxoZWFkZXIsaGdyb3VwLGhyLGh0bWwsbGVnZW5kLGxpLG1lbnVpdGVtLG1ldGEsb3B0Z3JvdXAsb3B0aW9uLHBhcmFtLHJwLHJ0LHNvdXJjZSxzdHlsZSxzdW1tYXJ5LHRib2R5LHRkLHRmb290LHRoLHRoZWFkLHRpdGxlLHRyLHRyYWNrXCIsITApLFhpPW4oXCJzdmcsYW5pbWF0ZSxjaXJjbGUsY2xpcHBhdGgsY3Vyc29yLGRlZnMsZGVzYyxlbGxpcHNlLGZpbHRlcixmb250LGZvbnQtZmFjZSxnLGdseXBoLGltYWdlLGxpbmUsbWFya2VyLG1hc2ssbWlzc2luZy1nbHlwaCxwYXRoLHBhdHRlcm4scG9seWdvbixwb2x5bGluZSxyZWN0LHN3aXRjaCxzeW1ib2wsdGV4dCx0ZXh0cGF0aCx0c3Bhbix1c2Usdmlld1wiLCEwKSxlbz1mdW5jdGlvbihlKXtyZXR1cm5cInByZVwiPT09ZX0sdG89ZnVuY3Rpb24oZSl7cmV0dXJuIFppKGUpfHxYaShlKX0sbm89T2JqZWN0LmNyZWF0ZShudWxsKSxybz1PYmplY3QuZnJlZXplKHtjcmVhdGVFbGVtZW50OlFlLGNyZWF0ZUVsZW1lbnROUzpYZSxjcmVhdGVUZXh0Tm9kZTpldCxjcmVhdGVDb21tZW50OnR0LGluc2VydEJlZm9yZTpudCxyZW1vdmVDaGlsZDpydCxhcHBlbmRDaGlsZDppdCxwYXJlbnROb2RlOm90LG5leHRTaWJsaW5nOmF0LHRhZ05hbWU6c3Qsc2V0VGV4dENvbnRlbnQ6Y3QsY2hpbGROb2RlczpsdCxzZXRBdHRyaWJ1dGU6dXR9KSxpbz17Y3JlYXRlOmZ1bmN0aW9uKGUsdCl7ZnQodCl9LHVwZGF0ZTpmdW5jdGlvbihlLHQpe2UuZGF0YS5yZWYhPT10LmRhdGEucmVmJiYoZnQoZSwhMCksZnQodCkpfSxkZXN0cm95OmZ1bmN0aW9uKGUpe2Z0KGUsITApfX0sb289bmV3IEVpKFwiXCIse30sW10pLGFvPVtcImNyZWF0ZVwiLFwidXBkYXRlXCIsXCJyZW1vdmVcIixcImRlc3Ryb3lcIl0sc289e2NyZWF0ZTpndCx1cGRhdGU6Z3QsZGVzdHJveTpmdW5jdGlvbihlKXtndChlLG9vKX19LGNvPU9iamVjdC5jcmVhdGUobnVsbCksbG89W2lvLHNvXSx1bz17Y3JlYXRlOiR0LHVwZGF0ZTokdH0sZm89e2NyZWF0ZTp4dCx1cGRhdGU6eHR9LHBvPXtjcmVhdGU6Q3QsdXBkYXRlOkN0fSx2bz17Y3JlYXRlOmt0LHVwZGF0ZTprdH0saG89YShmdW5jdGlvbihlKXt2YXIgdD17fSxuPWUuaW5kZXhPZihcImJhY2tncm91bmRcIik+PTAscj1uPy87KD8hW14oXSpcXCkpL2c6XCI7XCIsaT1uPy86KC4rKS86XCI6XCI7cmV0dXJuIGUuc3BsaXQocikuZm9yRWFjaChmdW5jdGlvbihlKXtpZihlKXt2YXIgbj1lLnNwbGl0KGkpO24ubGVuZ3RoPjEmJih0W25bMF0udHJpbSgpXT1uWzFdLnRyaW0oKSl9fSksdH0pLG1vPS9eLS0vLGdvPWZ1bmN0aW9uKGUsdCxuKXttby50ZXN0KHQpP2Uuc3R5bGUuc2V0UHJvcGVydHkodCxuKTplLnN0eWxlW19vKHQpXT1ufSx5bz1bXCJXZWJraXRcIixcIk1velwiLFwibXNcIl0sX289YShmdW5jdGlvbihlKXtpZihCaT1CaXx8ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKSxlPVZyKGUpLFwiZmlsdGVyXCIhPT1lJiZlIGluIEJpLnN0eWxlKXJldHVybiBlO2Zvcih2YXIgdD1lLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpK2Uuc2xpY2UoMSksbj0wO248eW8ubGVuZ3RoO24rKyl7dmFyIHI9eW9bbl0rdDtpZihyIGluIEJpLnN0eWxlKXJldHVybiByfX0pLGJvPXtjcmVhdGU6VHQsdXBkYXRlOlR0fSwkbz1RciYmIXRpLHdvPVwidHJhbnNpdGlvblwiLHhvPVwiYW5pbWF0aW9uXCIsQ289XCJ0cmFuc2l0aW9uXCIsa289XCJ0cmFuc2l0aW9uZW5kXCIsQW89XCJhbmltYXRpb25cIixPbz1cImFuaW1hdGlvbmVuZFwiOyRvJiYodm9pZCAwPT09d2luZG93Lm9udHJhbnNpdGlvbmVuZCYmdm9pZCAwIT09d2luZG93Lm9ud2Via2l0dHJhbnNpdGlvbmVuZCYmKENvPVwiV2Via2l0VHJhbnNpdGlvblwiLGtvPVwid2Via2l0VHJhbnNpdGlvbkVuZFwiKSx2b2lkIDA9PT13aW5kb3cub25hbmltYXRpb25lbmQmJnZvaWQgMCE9PXdpbmRvdy5vbndlYmtpdGFuaW1hdGlvbmVuZCYmKEFvPVwiV2Via2l0QW5pbWF0aW9uXCIsT289XCJ3ZWJraXRBbmltYXRpb25FbmRcIikpO3ZhciBTbz1RciYmd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZXx8c2V0VGltZW91dCxUbz0vXFxiKHRyYW5zZm9ybXxhbGwpKCx8JCkvLGpvPWEoZnVuY3Rpb24oZSl7cmV0dXJue2VudGVyQ2xhc3M6ZStcIi1lbnRlclwiLGxlYXZlQ2xhc3M6ZStcIi1sZWF2ZVwiLGFwcGVhckNsYXNzOmUrXCItZW50ZXJcIixlbnRlckFjdGl2ZUNsYXNzOmUrXCItZW50ZXItYWN0aXZlXCIsbGVhdmVBY3RpdmVDbGFzczplK1wiLWxlYXZlLWFjdGl2ZVwiLGFwcGVhckFjdGl2ZUNsYXNzOmUrXCItZW50ZXItYWN0aXZlXCJ9fSksRW89UXI/e2NyZWF0ZTpmdW5jdGlvbihlLHQpe3QuZGF0YS5zaG93fHxGdCh0KX0scmVtb3ZlOmZ1bmN0aW9uKGUsdCl7ZS5kYXRhLnNob3c/dCgpOkJ0KGUsdCl9fTp7fSxObz1bdW8sZm8scG8sdm8sYm8sRW9dLExvPU5vLmNvbmNhdChsbyksRG89bXQoe25vZGVPcHM6cm8sbW9kdWxlczpMb30pO3RpJiZkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwic2VsZWN0aW9uY2hhbmdlXCIsZnVuY3Rpb24oKXt2YXIgZT1kb2N1bWVudC5hY3RpdmVFbGVtZW50O2UmJmUudm1vZGVsJiZXdChlLFwiaW5wdXRcIil9KTt2YXIgTW89e2luc2VydGVkOmZ1bmN0aW9uKGUsdCxuKXtpZihcInNlbGVjdFwiPT09bi50YWcpe3ZhciByPWZ1bmN0aW9uKCl7VnQoZSx0LG4uY29udGV4dCl9O3IoKSwoZWl8fG5pKSYmc2V0VGltZW91dChyLDApfWVsc2VcInRleHRhcmVhXCIhPT1uLnRhZyYmXCJ0ZXh0XCIhPT1lLnR5cGV8fHQubW9kaWZpZXJzLmxhenl8fChyaXx8KGUuYWRkRXZlbnRMaXN0ZW5lcihcImNvbXBvc2l0aW9uc3RhcnRcIixLdCksZS5hZGRFdmVudExpc3RlbmVyKFwiY29tcG9zaXRpb25lbmRcIixxdCkpLHRpJiYoZS52bW9kZWw9ITApKX0sY29tcG9uZW50VXBkYXRlZDpmdW5jdGlvbihlLHQsbil7aWYoXCJzZWxlY3RcIj09PW4udGFnKXtWdChlLHQsbi5jb250ZXh0KTt2YXIgcj1lLm11bHRpcGxlP3QudmFsdWUuc29tZShmdW5jdGlvbih0KXtyZXR1cm4genQodCxlLm9wdGlvbnMpfSk6dC52YWx1ZSE9PXQub2xkVmFsdWUmJnp0KHQudmFsdWUsZS5vcHRpb25zKTtyJiZXdChlLFwiY2hhbmdlXCIpfX19LFBvPXtiaW5kOmZ1bmN0aW9uKGUsdCxuKXt2YXIgcj10LnZhbHVlO249WnQobik7dmFyIGk9bi5kYXRhJiZuLmRhdGEudHJhbnNpdGlvbjtyJiZpJiYhdGkmJkZ0KG4pO3ZhciBvPVwibm9uZVwiPT09ZS5zdHlsZS5kaXNwbGF5P1wiXCI6ZS5zdHlsZS5kaXNwbGF5O2Uuc3R5bGUuZGlzcGxheT1yP286XCJub25lXCIsZS5fX3ZPcmlnaW5hbERpc3BsYXk9b30sdXBkYXRlOmZ1bmN0aW9uKGUsdCxuKXt2YXIgcj10LnZhbHVlLGk9dC5vbGRWYWx1ZTtpZihyIT09aSl7bj1adChuKTt2YXIgbz1uLmRhdGEmJm4uZGF0YS50cmFuc2l0aW9uO28mJiF0aT9yPyhGdChuKSxlLnN0eWxlLmRpc3BsYXk9ZS5fX3ZPcmlnaW5hbERpc3BsYXkpOkJ0KG4sZnVuY3Rpb24oKXtlLnN0eWxlLmRpc3BsYXk9XCJub25lXCJ9KTplLnN0eWxlLmRpc3BsYXk9cj9lLl9fdk9yaWdpbmFsRGlzcGxheTpcIm5vbmVcIn19fSxSbz17bW9kZWw6TW8sc2hvdzpQb30sSW89e25hbWU6U3RyaW5nLGFwcGVhcjpCb29sZWFuLGNzczpCb29sZWFuLG1vZGU6U3RyaW5nLHR5cGU6U3RyaW5nLGVudGVyQ2xhc3M6U3RyaW5nLGxlYXZlQ2xhc3M6U3RyaW5nLGVudGVyQWN0aXZlQ2xhc3M6U3RyaW5nLGxlYXZlQWN0aXZlQ2xhc3M6U3RyaW5nLGFwcGVhckNsYXNzOlN0cmluZyxhcHBlYXJBY3RpdmVDbGFzczpTdHJpbmd9LEZvPXtuYW1lOlwidHJhbnNpdGlvblwiLHByb3BzOklvLGFic3RyYWN0OiEwLFxucmVuZGVyOmZ1bmN0aW9uKGUpe3ZhciB0PXRoaXMsbj10aGlzLiRzbG90cy5kZWZhdWx0O2lmKG4mJihuPW4uZmlsdGVyKGZ1bmN0aW9uKGUpe3JldHVybiBlLnRhZ30pLG4ubGVuZ3RoKSl7dmFyIHI9dGhpcy5tb2RlLGk9blswXTtpZihYdCh0aGlzLiR2bm9kZSkpcmV0dXJuIGk7dmFyIG89R3QoaSk7aWYoIW8pcmV0dXJuIGk7aWYodGhpcy5fbGVhdmluZylyZXR1cm4gUXQoZSxpKTt2YXIgYT1vLmtleT1udWxsPT1vLmtleXx8by5pc1N0YXRpYz9cIl9fdlwiKyhvLnRhZyt0aGlzLl91aWQpK1wiX19cIjpvLmtleSxzPShvLmRhdGF8fChvLmRhdGE9e30pKS50cmFuc2l0aW9uPVl0KHRoaXMpLGM9dGhpcy5fdm5vZGUsdT1HdChjKTtpZihvLmRhdGEuZGlyZWN0aXZlcyYmby5kYXRhLmRpcmVjdGl2ZXMuc29tZShmdW5jdGlvbihlKXtyZXR1cm5cInNob3dcIj09PWUubmFtZX0pJiYoby5kYXRhLnNob3c9ITApLHUmJnUuZGF0YSYmdS5rZXkhPT1hKXt2YXIgZj11LmRhdGEudHJhbnNpdGlvbj1sKHt9LHMpO2lmKFwib3V0LWluXCI9PT1yKXJldHVybiB0aGlzLl9sZWF2aW5nPSEwLGllKGYsXCJhZnRlckxlYXZlXCIsZnVuY3Rpb24oKXt0Ll9sZWF2aW5nPSExLHQuJGZvcmNlVXBkYXRlKCl9LGEpLFF0KGUsaSk7aWYoXCJpbi1vdXRcIj09PXIpe3ZhciBkLHA9ZnVuY3Rpb24oKXtkKCl9O2llKHMsXCJhZnRlckVudGVyXCIscCxhKSxpZShzLFwiZW50ZXJDYW5jZWxsZWRcIixwLGEpLGllKGYsXCJkZWxheUxlYXZlXCIsZnVuY3Rpb24oZSl7ZD1lfSxhKX19cmV0dXJuIGl9fX0sQm89bCh7dGFnOlN0cmluZyxtb3ZlQ2xhc3M6U3RyaW5nfSxJbyk7ZGVsZXRlIEJvLm1vZGU7dmFyIFVvPXtwcm9wczpCbyxyZW5kZXI6ZnVuY3Rpb24oZSl7Zm9yKHZhciB0PXRoaXMudGFnfHx0aGlzLiR2bm9kZS5kYXRhLnRhZ3x8XCJzcGFuXCIsbj1PYmplY3QuY3JlYXRlKG51bGwpLHI9dGhpcy5wcmV2Q2hpbGRyZW49dGhpcy5jaGlsZHJlbixpPXRoaXMuJHNsb3RzLmRlZmF1bHR8fFtdLG89dGhpcy5jaGlsZHJlbj1bXSxhPVl0KHRoaXMpLHM9MDtzPGkubGVuZ3RoO3MrKyl7dmFyIGM9aVtzXTtjLnRhZyYmbnVsbCE9Yy5rZXkmJjAhPT1TdHJpbmcoYy5rZXkpLmluZGV4T2YoXCJfX3ZsaXN0XCIpJiYoby5wdXNoKGMpLG5bYy5rZXldPWMsKGMuZGF0YXx8KGMuZGF0YT17fSkpLnRyYW5zaXRpb249YSl9aWYocil7Zm9yKHZhciBsPVtdLHU9W10sZj0wO2Y8ci5sZW5ndGg7ZisrKXt2YXIgZD1yW2ZdO2QuZGF0YS50cmFuc2l0aW9uPWEsZC5kYXRhLnBvcz1kLmVsbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSxuW2Qua2V5XT9sLnB1c2goZCk6dS5wdXNoKGQpfXRoaXMua2VwdD1lKHQsbnVsbCxsKSx0aGlzLnJlbW92ZWQ9dX1yZXR1cm4gZSh0LG51bGwsbyl9LGJlZm9yZVVwZGF0ZTpmdW5jdGlvbigpe3RoaXMuX19wYXRjaF9fKHRoaXMuX3Zub2RlLHRoaXMua2VwdCwhMSwhMCksdGhpcy5fdm5vZGU9dGhpcy5rZXB0fSx1cGRhdGVkOmZ1bmN0aW9uKCl7dmFyIGU9dGhpcy5wcmV2Q2hpbGRyZW4sdD10aGlzLm1vdmVDbGFzc3x8KHRoaXMubmFtZXx8XCJ2XCIpK1wiLW1vdmVcIjtpZihlLmxlbmd0aCYmdGhpcy5oYXNNb3ZlKGVbMF0uZWxtLHQpKXtlLmZvckVhY2goZW4pLGUuZm9yRWFjaCh0biksZS5mb3JFYWNoKG5uKTtkb2N1bWVudC5ib2R5Lm9mZnNldEhlaWdodDtlLmZvckVhY2goZnVuY3Rpb24oZSl7aWYoZS5kYXRhLm1vdmVkKXt2YXIgbj1lLmVsbSxyPW4uc3R5bGU7THQobix0KSxyLnRyYW5zZm9ybT1yLldlYmtpdFRyYW5zZm9ybT1yLnRyYW5zaXRpb25EdXJhdGlvbj1cIlwiLG4uYWRkRXZlbnRMaXN0ZW5lcihrbyxuLl9tb3ZlQ2I9ZnVuY3Rpb24gZShyKXtyJiYhL3RyYW5zZm9ybSQvLnRlc3Qoci5wcm9wZXJ0eU5hbWUpfHwobi5yZW1vdmVFdmVudExpc3RlbmVyKGtvLGUpLG4uX21vdmVDYj1udWxsLER0KG4sdCkpfSl9fSl9fSxtZXRob2RzOntoYXNNb3ZlOmZ1bmN0aW9uKGUsdCl7aWYoISRvKXJldHVybiExO2lmKG51bGwhPXRoaXMuX2hhc01vdmUpcmV0dXJuIHRoaXMuX2hhc01vdmU7THQoZSx0KTt2YXIgbj1QdChlKTtyZXR1cm4gRHQoZSx0KSx0aGlzLl9oYXNNb3ZlPW4uaGFzVHJhbnNmb3JtfX19LEhvPXtUcmFuc2l0aW9uOkZvLFRyYW5zaXRpb25Hcm91cDpVb307UmUuY29uZmlnLmlzVW5rbm93bkVsZW1lbnQ9R2UsUmUuY29uZmlnLmlzUmVzZXJ2ZWRUYWc9dG8sUmUuY29uZmlnLmdldFRhZ05hbWVzcGFjZT1aZSxSZS5jb25maWcubXVzdFVzZVByb3A9VWksbChSZS5vcHRpb25zLmRpcmVjdGl2ZXMsUm8pLGwoUmUub3B0aW9ucy5jb21wb25lbnRzLEhvKSxSZS5wcm90b3R5cGUuX19wYXRjaF9fPVFyP0RvOnAsUmUucHJvdG90eXBlLiRtb3VudD1mdW5jdGlvbihlLHQpe3JldHVybiBlPWUmJlFyP1llKGUpOnZvaWQgMCx0aGlzLl9tb3VudChlLHQpfSxzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7bGkuZGV2dG9vbHMmJmFpJiZhaS5lbWl0KFwiaW5pdFwiLFJlKX0sMCk7dmFyIFZvLHpvPSEhUXImJnJuKFwiXFxuXCIsXCImIzEwO1wiKSxKbz0vKFteXFxzXCInPD5cXC89XSspLyxLbz0vKD86PSkvLHFvPVsvXCIoW15cIl0qKVwiKy8uc291cmNlLC8nKFteJ10qKScrLy5zb3VyY2UsLyhbXlxcc1wiJz08PmBdKykvLnNvdXJjZV0sV289bmV3IFJlZ0V4cChcIl5cXFxccypcIitKby5zb3VyY2UrXCIoPzpcXFxccyooXCIrS28uc291cmNlK1wiKVxcXFxzKig/OlwiK3FvLmpvaW4oXCJ8XCIpK1wiKSk/XCIpLFpvPVwiW2EtekEtWl9dW1xcXFx3XFxcXC1cXFxcLl0qXCIsR289XCIoKD86XCIrWm8rXCJcXFxcOik/XCIrWm8rXCIpXCIsWW89bmV3IFJlZ0V4cChcIl48XCIrR28pLFFvPS9eXFxzKihcXC8/KT4vLFhvPW5ldyBSZWdFeHAoXCJePFxcXFwvXCIrR28rXCJbXj5dKj5cIiksZWE9L148IURPQ1RZUEUgW14+XSs+L2ksdGE9L148IS0tLyxuYT0vXjwhXFxbLyxyYT0hMTtcInhcIi5yZXBsYWNlKC94KC4pPy9nLGZ1bmN0aW9uKGUsdCl7cmE9XCJcIj09PXR9KTt2YXIgaWEsb2EsYWEsc2EsY2EsbGEsdWEsZmEsZGEscGEsdmEsaGEsbWEsZ2EseWEsX2EsYmEsJGEsd2EseGEsQ2Esa2EsQWEsT2EsU2E9bihcInNjcmlwdCxzdHlsZVwiLCEwKSxUYT1mdW5jdGlvbihlKXtyZXR1cm5cImxhbmdcIj09PWUubmFtZSYmXCJodG1sXCIhPT1lLnZhbHVlfSxqYT1mdW5jdGlvbihlLHQsbil7cmV0dXJuISFTYShlKXx8ISF0JiYhKFwidGVtcGxhdGVcIj09PWUmJjE9PT1uLmxlbmd0aCYmIW5bMF0uYXR0cnMuc29tZShUYSkpfSxFYT17fSxOYT0vJmx0Oy9nLExhPS8mZ3Q7L2csRGE9LyYjMTA7L2csTWE9LyZhbXA7L2csUGE9LyZxdW90Oy9nLFJhPS9cXHtcXHsoKD86LnxcXG4pKz8pXFx9XFx9L2csSWE9L1stLiorP14ke30oKXxbXFxdXFwvXFxcXF0vZyxGYT1hKGZ1bmN0aW9uKGUpe3ZhciB0PWVbMF0ucmVwbGFjZShJYSxcIlxcXFwkJlwiKSxuPWVbMV0ucmVwbGFjZShJYSxcIlxcXFwkJlwiKTtyZXR1cm4gbmV3IFJlZ0V4cCh0K1wiKCg/Oi58XFxcXG4pKz8pXCIrbixcImdcIil9KSxCYT0vXnYtfF5AfF46LyxVYT0vKC4qPylcXHMrKD86aW58b2YpXFxzKyguKikvLEhhPS9cXCgoXFx7W159XSpcXH18W14sXSopLChbXixdKikoPzosKFteLF0qKSk/XFwpLyxWYT0vXjp8XnYtYmluZDovLHphPS9eQHxedi1vbjovLEphPS86KC4qKSQvLEthPS9cXC5bXi5dKy9nLHFhPWEob24pLFdhPS9eeG1sbnM6TlNcXGQrLyxaYT0vXk5TXFxkKzovLEdhPWEoSm4pLFlhPS9eXFxzKihbXFx3JF9dK3xcXChbXildKj9cXCkpXFxzKj0+fF5mdW5jdGlvblxccypcXCgvLFFhPS9eXFxzKltBLVphLXpfJF1bXFx3JF0qKD86XFwuW0EtWmEtel8kXVtcXHckXSp8XFxbJy4qPyddfFxcW1wiLio/XCJdfFxcW1xcZCtdfFxcW1tBLVphLXpfJF1bXFx3JF0qXSkqXFxzKiQvLFhhPXtlc2M6MjcsdGFiOjksZW50ZXI6MTMsc3BhY2U6MzIsdXA6MzgsbGVmdDozNyxyaWdodDozOSxkb3duOjQwLGRlbGV0ZTpbOCw0Nl19LGVzPXtzdG9wOlwiJGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1wiLHByZXZlbnQ6XCIkZXZlbnQucHJldmVudERlZmF1bHQoKTtcIixzZWxmOlwiaWYoJGV2ZW50LnRhcmdldCAhPT0gJGV2ZW50LmN1cnJlbnRUYXJnZXQpcmV0dXJuO1wifSx0cz0vXm1vdXNlfF5wb2ludGVyfF4oY2xpY2t8ZGJsY2xpY2t8Y29udGV4dG1lbnV8d2hlZWwpJC8sbnM9e2N0cmw6XCJpZighJGV2ZW50LmN0cmxLZXkpcmV0dXJuO1wiLHNoaWZ0OlwiaWYoISRldmVudC5zaGlmdEtleSlyZXR1cm47XCIsYWx0OlwiaWYoISRldmVudC5hbHRLZXkpcmV0dXJuO1wiLG1ldGE6XCJpZighJGV2ZW50Lm1ldGFLZXkpcmV0dXJuO1wifSxycz17YmluZDp0cixjbG9hazpwfSxpcz0obmV3IFJlZ0V4cChcIlxcXFxiXCIrXCJkbyxpZixmb3IsbGV0LG5ldyx0cnksdmFyLGNhc2UsZWxzZSx3aXRoLGF3YWl0LGJyZWFrLGNhdGNoLGNsYXNzLGNvbnN0LHN1cGVyLHRocm93LHdoaWxlLHlpZWxkLGRlbGV0ZSxleHBvcnQsaW1wb3J0LHJldHVybixzd2l0Y2gsZGVmYXVsdCxleHRlbmRzLGZpbmFsbHksY29udGludWUsZGVidWdnZXIsZnVuY3Rpb24sYXJndW1lbnRzXCIuc3BsaXQoXCIsXCIpLmpvaW4oXCJcXFxcYnxcXFxcYlwiKStcIlxcXFxiXCIpLHtzdGF0aWNLZXlzOltcInN0YXRpY0NsYXNzXCJdLHRyYW5zZm9ybU5vZGU6d3IsZ2VuRGF0YTp4cn0pLG9zPXtzdGF0aWNLZXlzOltcInN0YXRpY1N0eWxlXCJdLHRyYW5zZm9ybU5vZGU6Q3IsZ2VuRGF0YTprcn0sYXM9W2lzLG9zXSxzcz17bW9kZWw6QXIsdGV4dDpOcixodG1sOkxyfSxjcz1PYmplY3QuY3JlYXRlKG51bGwpLGxzPXtleHBlY3RIVE1MOiEwLG1vZHVsZXM6YXMsc3RhdGljS2V5czp2KGFzKSxkaXJlY3RpdmVzOnNzLGlzUmVzZXJ2ZWRUYWc6dG8saXNVbmFyeVRhZzpHaSxtdXN0VXNlUHJvcDpVaSxnZXRUYWdOYW1lc3BhY2U6WmUsaXNQcmVUYWc6ZW99LHVzPWEoZnVuY3Rpb24oZSl7dmFyIHQ9WWUoZSk7cmV0dXJuIHQmJnQuaW5uZXJIVE1MfSksZnM9UmUucHJvdG90eXBlLiRtb3VudDtyZXR1cm4gUmUucHJvdG90eXBlLiRtb3VudD1mdW5jdGlvbihlLHQpe2lmKGU9ZSYmWWUoZSksZT09PWRvY3VtZW50LmJvZHl8fGU9PT1kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpcmV0dXJuIHRoaXM7dmFyIG49dGhpcy4kb3B0aW9ucztpZighbi5yZW5kZXIpe3ZhciByPW4udGVtcGxhdGU7aWYocilpZihcInN0cmluZ1wiPT10eXBlb2YgcilcIiNcIj09PXIuY2hhckF0KDApJiYocj11cyhyKSk7ZWxzZXtpZighci5ub2RlVHlwZSlyZXR1cm4gdGhpcztyPXIuaW5uZXJIVE1MfWVsc2UgZSYmKHI9UnIoZSkpO2lmKHIpe3ZhciBpPU1yKHIse3dhcm46dWksc2hvdWxkRGVjb2RlTmV3bGluZXM6em8sZGVsaW1pdGVyczpuLmRlbGltaXRlcnN9LHRoaXMpLG89aS5yZW5kZXIsYT1pLnN0YXRpY1JlbmRlckZucztuLnJlbmRlcj1vLG4uc3RhdGljUmVuZGVyRm5zPWF9fXJldHVybiBmcy5jYWxsKHRoaXMsZSx0KX0sUmUuY29tcGlsZT1NcixSZX0pO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0U6L1Rlc3RXb3JrL3Z1ZS9+L3Z1ZS9kaXN0L3Z1ZS5taW4uanMiLCIvKipcbiAqIHZ1ZS1yb3V0ZXIgdjIuMC4zXG4gKiAoYykgMjAxNiBFdmFuIFlvdVxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbihmdW5jdGlvbiAoZ2xvYmFsLCBmYWN0b3J5KSB7XG4gIHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyA/IG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpIDpcbiAgdHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kID8gZGVmaW5lKGZhY3RvcnkpIDpcbiAgKGdsb2JhbC5WdWVSb3V0ZXIgPSBmYWN0b3J5KCkpO1xufSh0aGlzLCAoZnVuY3Rpb24gKCkgeyAndXNlIHN0cmljdCc7XG5cbnZhciBWaWV3ID0ge1xuICBuYW1lOiAncm91dGVyLXZpZXcnLFxuICBmdW5jdGlvbmFsOiB0cnVlLFxuICBwcm9wczoge1xuICAgIG5hbWU6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQ6ICdkZWZhdWx0J1xuICAgIH1cbiAgfSxcbiAgcmVuZGVyOiBmdW5jdGlvbiByZW5kZXIgKGgsIHJlZikge1xuICAgIHZhciBwcm9wcyA9IHJlZi5wcm9wcztcbiAgICB2YXIgY2hpbGRyZW4gPSByZWYuY2hpbGRyZW47XG4gICAgdmFyIHBhcmVudCA9IHJlZi5wYXJlbnQ7XG4gICAgdmFyIGRhdGEgPSByZWYuZGF0YTtcblxuICAgIGRhdGEucm91dGVyVmlldyA9IHRydWVcblxuICAgIHZhciByb3V0ZSA9IHBhcmVudC4kcm91dGVcbiAgICB2YXIgY2FjaGUgPSBwYXJlbnQuX3JvdXRlclZpZXdDYWNoZSB8fCAocGFyZW50Ll9yb3V0ZXJWaWV3Q2FjaGUgPSB7fSlcbiAgICB2YXIgZGVwdGggPSAwXG4gICAgdmFyIGluYWN0aXZlID0gZmFsc2VcblxuICAgIHdoaWxlIChwYXJlbnQpIHtcbiAgICAgIGlmIChwYXJlbnQuJHZub2RlICYmIHBhcmVudC4kdm5vZGUuZGF0YS5yb3V0ZXJWaWV3KSB7XG4gICAgICAgIGRlcHRoKytcbiAgICAgIH1cbiAgICAgIGlmIChwYXJlbnQuX2luYWN0aXZlKSB7XG4gICAgICAgIGluYWN0aXZlID0gdHJ1ZVxuICAgICAgfVxuICAgICAgcGFyZW50ID0gcGFyZW50LiRwYXJlbnRcbiAgICB9XG5cbiAgICBkYXRhLnJvdXRlclZpZXdEZXB0aCA9IGRlcHRoXG4gICAgdmFyIG1hdGNoZWQgPSByb3V0ZS5tYXRjaGVkW2RlcHRoXVxuICAgIGlmICghbWF0Y2hlZCkge1xuICAgICAgcmV0dXJuIGgoKVxuICAgIH1cblxuICAgIHZhciBuYW1lID0gcHJvcHMubmFtZVxuICAgIHZhciBjb21wb25lbnQgPSBpbmFjdGl2ZVxuICAgICAgPyBjYWNoZVtuYW1lXVxuICAgICAgOiAoY2FjaGVbbmFtZV0gPSBtYXRjaGVkLmNvbXBvbmVudHNbbmFtZV0pXG5cbiAgICBpZiAoIWluYWN0aXZlKSB7XG4gICAgICB2YXIgaG9va3MgPSBkYXRhLmhvb2sgfHwgKGRhdGEuaG9vayA9IHt9KVxuICAgICAgaG9va3MuaW5pdCA9IGZ1bmN0aW9uICh2bm9kZSkge1xuICAgICAgICBtYXRjaGVkLmluc3RhbmNlc1tuYW1lXSA9IHZub2RlLmNoaWxkXG4gICAgICB9XG4gICAgICBob29rcy5wcmVwYXRjaCA9IGZ1bmN0aW9uIChvbGRWbm9kZSwgdm5vZGUpIHtcbiAgICAgICAgbWF0Y2hlZC5pbnN0YW5jZXNbbmFtZV0gPSB2bm9kZS5jaGlsZFxuICAgICAgfVxuICAgICAgaG9va3MuZGVzdHJveSA9IGZ1bmN0aW9uICh2bm9kZSkge1xuICAgICAgICBpZiAobWF0Y2hlZC5pbnN0YW5jZXNbbmFtZV0gPT09IHZub2RlLmNoaWxkKSB7XG4gICAgICAgICAgbWF0Y2hlZC5pbnN0YW5jZXNbbmFtZV0gPSB1bmRlZmluZWRcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBoKGNvbXBvbmVudCwgZGF0YSwgY2hpbGRyZW4pXG4gIH1cbn1cblxuLyogICovXG5cbmZ1bmN0aW9uIHJlc29sdmVQYXRoIChcbiAgcmVsYXRpdmUsXG4gIGJhc2UsXG4gIGFwcGVuZFxuKSB7XG4gIGlmIChyZWxhdGl2ZS5jaGFyQXQoMCkgPT09ICcvJykge1xuICAgIHJldHVybiByZWxhdGl2ZVxuICB9XG5cbiAgaWYgKHJlbGF0aXZlLmNoYXJBdCgwKSA9PT0gJz8nIHx8IHJlbGF0aXZlLmNoYXJBdCgwKSA9PT0gJyMnKSB7XG4gICAgcmV0dXJuIGJhc2UgKyByZWxhdGl2ZVxuICB9XG5cbiAgdmFyIHN0YWNrID0gYmFzZS5zcGxpdCgnLycpXG5cbiAgLy8gcmVtb3ZlIHRyYWlsaW5nIHNlZ21lbnQgaWY6XG4gIC8vIC0gbm90IGFwcGVuZGluZ1xuICAvLyAtIGFwcGVuZGluZyB0byB0cmFpbGluZyBzbGFzaCAobGFzdCBzZWdtZW50IGlzIGVtcHR5KVxuICBpZiAoIWFwcGVuZCB8fCAhc3RhY2tbc3RhY2subGVuZ3RoIC0gMV0pIHtcbiAgICBzdGFjay5wb3AoKVxuICB9XG5cbiAgLy8gcmVzb2x2ZSByZWxhdGl2ZSBwYXRoXG4gIHZhciBzZWdtZW50cyA9IHJlbGF0aXZlLnJlcGxhY2UoL15cXC8vLCAnJykuc3BsaXQoJy8nKVxuICBmb3IgKHZhciBpID0gMDsgaSA8IHNlZ21lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIHNlZ21lbnQgPSBzZWdtZW50c1tpXVxuICAgIGlmIChzZWdtZW50ID09PSAnLicpIHtcbiAgICAgIGNvbnRpbnVlXG4gICAgfSBlbHNlIGlmIChzZWdtZW50ID09PSAnLi4nKSB7XG4gICAgICBzdGFjay5wb3AoKVxuICAgIH0gZWxzZSB7XG4gICAgICBzdGFjay5wdXNoKHNlZ21lbnQpXG4gICAgfVxuICB9XG5cbiAgLy8gZW5zdXJlIGxlYWRpbmcgc2xhc2hcbiAgaWYgKHN0YWNrWzBdICE9PSAnJykge1xuICAgIHN0YWNrLnVuc2hpZnQoJycpXG4gIH1cblxuICByZXR1cm4gc3RhY2suam9pbignLycpXG59XG5cbmZ1bmN0aW9uIHBhcnNlUGF0aCAocGF0aCkge1xuICB2YXIgaGFzaCA9ICcnXG4gIHZhciBxdWVyeSA9ICcnXG5cbiAgdmFyIGhhc2hJbmRleCA9IHBhdGguaW5kZXhPZignIycpXG4gIGlmIChoYXNoSW5kZXggPj0gMCkge1xuICAgIGhhc2ggPSBwYXRoLnNsaWNlKGhhc2hJbmRleClcbiAgICBwYXRoID0gcGF0aC5zbGljZSgwLCBoYXNoSW5kZXgpXG4gIH1cblxuICB2YXIgcXVlcnlJbmRleCA9IHBhdGguaW5kZXhPZignPycpXG4gIGlmIChxdWVyeUluZGV4ID49IDApIHtcbiAgICBxdWVyeSA9IHBhdGguc2xpY2UocXVlcnlJbmRleCArIDEpXG4gICAgcGF0aCA9IHBhdGguc2xpY2UoMCwgcXVlcnlJbmRleClcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgcGF0aDogcGF0aCxcbiAgICBxdWVyeTogcXVlcnksXG4gICAgaGFzaDogaGFzaFxuICB9XG59XG5cbmZ1bmN0aW9uIGNsZWFuUGF0aCAocGF0aCkge1xuICByZXR1cm4gcGF0aC5yZXBsYWNlKC9cXC9cXC8vZywgJy8nKVxufVxuXG4vKiAgKi9cblxuZnVuY3Rpb24gYXNzZXJ0IChjb25kaXRpb24sIG1lc3NhZ2UpIHtcbiAgaWYgKCFjb25kaXRpb24pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoKFwiW3Z1ZS1yb3V0ZXJdIFwiICsgbWVzc2FnZSkpXG4gIH1cbn1cblxuZnVuY3Rpb24gd2FybiAoY29uZGl0aW9uLCBtZXNzYWdlKSB7XG4gIGlmICghY29uZGl0aW9uKSB7XG4gICAgdHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnICYmIGNvbnNvbGUud2FybigoXCJbdnVlLXJvdXRlcl0gXCIgKyBtZXNzYWdlKSlcbiAgfVxufVxuXG4vKiAgKi9cblxudmFyIGVuY29kZSA9IGVuY29kZVVSSUNvbXBvbmVudFxudmFyIGRlY29kZSA9IGRlY29kZVVSSUNvbXBvbmVudFxuXG5mdW5jdGlvbiByZXNvbHZlUXVlcnkgKFxuICBxdWVyeSxcbiAgZXh0cmFRdWVyeVxuKSB7XG4gIGlmICggZXh0cmFRdWVyeSA9PT0gdm9pZCAwICkgZXh0cmFRdWVyeSA9IHt9O1xuXG4gIGlmIChxdWVyeSkge1xuICAgIHZhciBwYXJzZWRRdWVyeVxuICAgIHRyeSB7XG4gICAgICBwYXJzZWRRdWVyeSA9IHBhcnNlUXVlcnkocXVlcnkpXG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgd2FybihmYWxzZSwgZS5tZXNzYWdlKVxuICAgICAgcGFyc2VkUXVlcnkgPSB7fVxuICAgIH1cbiAgICBmb3IgKHZhciBrZXkgaW4gZXh0cmFRdWVyeSkge1xuICAgICAgcGFyc2VkUXVlcnlba2V5XSA9IGV4dHJhUXVlcnlba2V5XVxuICAgIH1cbiAgICByZXR1cm4gcGFyc2VkUXVlcnlcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZXh0cmFRdWVyeVxuICB9XG59XG5cbmZ1bmN0aW9uIHBhcnNlUXVlcnkgKHF1ZXJ5KSB7XG4gIHZhciByZXMgPSB7fVxuXG4gIHF1ZXJ5ID0gcXVlcnkudHJpbSgpLnJlcGxhY2UoL14oXFw/fCN8JikvLCAnJylcblxuICBpZiAoIXF1ZXJ5KSB7XG4gICAgcmV0dXJuIHJlc1xuICB9XG5cbiAgcXVlcnkuc3BsaXQoJyYnKS5mb3JFYWNoKGZ1bmN0aW9uIChwYXJhbSkge1xuICAgIHZhciBwYXJ0cyA9IHBhcmFtLnJlcGxhY2UoL1xcKy9nLCAnICcpLnNwbGl0KCc9JylcbiAgICB2YXIga2V5ID0gZGVjb2RlKHBhcnRzLnNoaWZ0KCkpXG4gICAgdmFyIHZhbCA9IHBhcnRzLmxlbmd0aCA+IDBcbiAgICAgID8gZGVjb2RlKHBhcnRzLmpvaW4oJz0nKSlcbiAgICAgIDogbnVsbFxuXG4gICAgaWYgKHJlc1trZXldID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJlc1trZXldID0gdmFsXG4gICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KHJlc1trZXldKSkge1xuICAgICAgcmVzW2tleV0ucHVzaCh2YWwpXG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc1trZXldID0gW3Jlc1trZXldLCB2YWxdXG4gICAgfVxuICB9KVxuXG4gIHJldHVybiByZXNcbn1cblxuZnVuY3Rpb24gc3RyaW5naWZ5UXVlcnkgKG9iaikge1xuICB2YXIgcmVzID0gb2JqID8gT2JqZWN0LmtleXMob2JqKS5zb3J0KCkubWFwKGZ1bmN0aW9uIChrZXkpIHtcbiAgICB2YXIgdmFsID0gb2JqW2tleV1cblxuICAgIGlmICh2YWwgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuICcnXG4gICAgfVxuXG4gICAgaWYgKHZhbCA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuIGVuY29kZShrZXkpXG4gICAgfVxuXG4gICAgaWYgKEFycmF5LmlzQXJyYXkodmFsKSkge1xuICAgICAgdmFyIHJlc3VsdCA9IFtdXG4gICAgICB2YWwuc2xpY2UoKS5mb3JFYWNoKGZ1bmN0aW9uICh2YWwyKSB7XG4gICAgICAgIGlmICh2YWwyID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuICAgICAgICBpZiAodmFsMiA9PT0gbnVsbCkge1xuICAgICAgICAgIHJlc3VsdC5wdXNoKGVuY29kZShrZXkpKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJlc3VsdC5wdXNoKGVuY29kZShrZXkpICsgJz0nICsgZW5jb2RlKHZhbDIpKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgcmV0dXJuIHJlc3VsdC5qb2luKCcmJylcbiAgICB9XG5cbiAgICByZXR1cm4gZW5jb2RlKGtleSkgKyAnPScgKyBlbmNvZGUodmFsKVxuICB9KS5maWx0ZXIoZnVuY3Rpb24gKHgpIHsgcmV0dXJuIHgubGVuZ3RoID4gMDsgfSkuam9pbignJicpIDogbnVsbFxuICByZXR1cm4gcmVzID8gKFwiP1wiICsgcmVzKSA6ICcnXG59XG5cbi8qICAqL1xuXG5mdW5jdGlvbiBjcmVhdGVSb3V0ZSAoXG4gIHJlY29yZCxcbiAgbG9jYXRpb24sXG4gIHJlZGlyZWN0ZWRGcm9tXG4pIHtcbiAgdmFyIHJvdXRlID0ge1xuICAgIG5hbWU6IGxvY2F0aW9uLm5hbWUgfHwgKHJlY29yZCAmJiByZWNvcmQubmFtZSksXG4gICAgbWV0YTogKHJlY29yZCAmJiByZWNvcmQubWV0YSkgfHwge30sXG4gICAgcGF0aDogbG9jYXRpb24ucGF0aCB8fCAnLycsXG4gICAgaGFzaDogbG9jYXRpb24uaGFzaCB8fCAnJyxcbiAgICBxdWVyeTogbG9jYXRpb24ucXVlcnkgfHwge30sXG4gICAgcGFyYW1zOiBsb2NhdGlvbi5wYXJhbXMgfHwge30sXG4gICAgZnVsbFBhdGg6IGdldEZ1bGxQYXRoKGxvY2F0aW9uKSxcbiAgICBtYXRjaGVkOiByZWNvcmQgPyBmb3JtYXRNYXRjaChyZWNvcmQpIDogW11cbiAgfVxuICBpZiAocmVkaXJlY3RlZEZyb20pIHtcbiAgICByb3V0ZS5yZWRpcmVjdGVkRnJvbSA9IGdldEZ1bGxQYXRoKHJlZGlyZWN0ZWRGcm9tKVxuICB9XG4gIHJldHVybiBPYmplY3QuZnJlZXplKHJvdXRlKVxufVxuXG4vLyB0aGUgc3RhcnRpbmcgcm91dGUgdGhhdCByZXByZXNlbnRzIHRoZSBpbml0aWFsIHN0YXRlXG52YXIgU1RBUlQgPSBjcmVhdGVSb3V0ZShudWxsLCB7XG4gIHBhdGg6ICcvJ1xufSlcblxuZnVuY3Rpb24gZm9ybWF0TWF0Y2ggKHJlY29yZCkge1xuICB2YXIgcmVzID0gW11cbiAgd2hpbGUgKHJlY29yZCkge1xuICAgIHJlcy51bnNoaWZ0KHJlY29yZClcbiAgICByZWNvcmQgPSByZWNvcmQucGFyZW50XG4gIH1cbiAgcmV0dXJuIHJlc1xufVxuXG5mdW5jdGlvbiBnZXRGdWxsUGF0aCAocmVmKSB7XG4gIHZhciBwYXRoID0gcmVmLnBhdGg7XG4gIHZhciBxdWVyeSA9IHJlZi5xdWVyeTsgaWYgKCBxdWVyeSA9PT0gdm9pZCAwICkgcXVlcnkgPSB7fTtcbiAgdmFyIGhhc2ggPSByZWYuaGFzaDsgaWYgKCBoYXNoID09PSB2b2lkIDAgKSBoYXNoID0gJyc7XG5cbiAgcmV0dXJuIChwYXRoIHx8ICcvJykgKyBzdHJpbmdpZnlRdWVyeShxdWVyeSkgKyBoYXNoXG59XG5cbnZhciB0cmFpbGluZ1NsYXNoUkUgPSAvXFwvJC9cbmZ1bmN0aW9uIGlzU2FtZVJvdXRlIChhLCBiKSB7XG4gIGlmIChiID09PSBTVEFSVCkge1xuICAgIHJldHVybiBhID09PSBiXG4gIH0gZWxzZSBpZiAoIWIpIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfSBlbHNlIGlmIChhLnBhdGggJiYgYi5wYXRoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIGEucGF0aC5yZXBsYWNlKHRyYWlsaW5nU2xhc2hSRSwgJycpID09PSBiLnBhdGgucmVwbGFjZSh0cmFpbGluZ1NsYXNoUkUsICcnKSAmJlxuICAgICAgYS5oYXNoID09PSBiLmhhc2ggJiZcbiAgICAgIGlzT2JqZWN0RXF1YWwoYS5xdWVyeSwgYi5xdWVyeSlcbiAgICApXG4gIH0gZWxzZSBpZiAoYS5uYW1lICYmIGIubmFtZSkge1xuICAgIHJldHVybiAoXG4gICAgICBhLm5hbWUgPT09IGIubmFtZSAmJlxuICAgICAgYS5oYXNoID09PSBiLmhhc2ggJiZcbiAgICAgIGlzT2JqZWN0RXF1YWwoYS5xdWVyeSwgYi5xdWVyeSkgJiZcbiAgICAgIGlzT2JqZWN0RXF1YWwoYS5wYXJhbXMsIGIucGFyYW1zKVxuICAgIClcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxufVxuXG5mdW5jdGlvbiBpc09iamVjdEVxdWFsIChhLCBiKSB7XG4gIGlmICggYSA9PT0gdm9pZCAwICkgYSA9IHt9O1xuICBpZiAoIGIgPT09IHZvaWQgMCApIGIgPSB7fTtcblxuICB2YXIgYUtleXMgPSBPYmplY3Qua2V5cyhhKVxuICB2YXIgYktleXMgPSBPYmplY3Qua2V5cyhiKVxuICBpZiAoYUtleXMubGVuZ3RoICE9PSBiS2V5cy5sZW5ndGgpIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuICByZXR1cm4gYUtleXMuZXZlcnkoZnVuY3Rpb24gKGtleSkgeyByZXR1cm4gU3RyaW5nKGFba2V5XSkgPT09IFN0cmluZyhiW2tleV0pOyB9KVxufVxuXG5mdW5jdGlvbiBpc0luY2x1ZGVkUm91dGUgKGN1cnJlbnQsIHRhcmdldCkge1xuICByZXR1cm4gKFxuICAgIGN1cnJlbnQucGF0aC5pbmRleE9mKHRhcmdldC5wYXRoLnJlcGxhY2UoL1xcLyQvLCAnJykpID09PSAwICYmXG4gICAgKCF0YXJnZXQuaGFzaCB8fCBjdXJyZW50Lmhhc2ggPT09IHRhcmdldC5oYXNoKSAmJlxuICAgIHF1ZXJ5SW5jbHVkZXMoY3VycmVudC5xdWVyeSwgdGFyZ2V0LnF1ZXJ5KVxuICApXG59XG5cbmZ1bmN0aW9uIHF1ZXJ5SW5jbHVkZXMgKGN1cnJlbnQsIHRhcmdldCkge1xuICBmb3IgKHZhciBrZXkgaW4gdGFyZ2V0KSB7XG4gICAgaWYgKCEoa2V5IGluIGN1cnJlbnQpKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRydWVcbn1cblxuLyogICovXG5cbmZ1bmN0aW9uIG5vcm1hbGl6ZUxvY2F0aW9uIChcbiAgcmF3LFxuICBjdXJyZW50LFxuICBhcHBlbmRcbikge1xuICB2YXIgbmV4dCA9IHR5cGVvZiByYXcgPT09ICdzdHJpbmcnID8geyBwYXRoOiByYXcgfSA6IHJhd1xuICBpZiAobmV4dC5uYW1lIHx8IG5leHQuX25vcm1hbGl6ZWQpIHtcbiAgICByZXR1cm4gbmV4dFxuICB9XG5cbiAgdmFyIHBhcnNlZFBhdGggPSBwYXJzZVBhdGgobmV4dC5wYXRoIHx8ICcnKVxuICB2YXIgYmFzZVBhdGggPSAoY3VycmVudCAmJiBjdXJyZW50LnBhdGgpIHx8ICcvJ1xuICB2YXIgcGF0aCA9IHBhcnNlZFBhdGgucGF0aFxuICAgID8gcmVzb2x2ZVBhdGgocGFyc2VkUGF0aC5wYXRoLCBiYXNlUGF0aCwgYXBwZW5kKVxuICAgIDogKGN1cnJlbnQgJiYgY3VycmVudC5wYXRoKSB8fCAnLydcbiAgdmFyIHF1ZXJ5ID0gcmVzb2x2ZVF1ZXJ5KHBhcnNlZFBhdGgucXVlcnksIG5leHQucXVlcnkpXG4gIHZhciBoYXNoID0gbmV4dC5oYXNoIHx8IHBhcnNlZFBhdGguaGFzaFxuICBpZiAoaGFzaCAmJiBoYXNoLmNoYXJBdCgwKSAhPT0gJyMnKSB7XG4gICAgaGFzaCA9IFwiI1wiICsgaGFzaFxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBfbm9ybWFsaXplZDogdHJ1ZSxcbiAgICBwYXRoOiBwYXRoLFxuICAgIHF1ZXJ5OiBxdWVyeSxcbiAgICBoYXNoOiBoYXNoXG4gIH1cbn1cblxuLyogICovXG5cbi8vIHdvcmsgYXJvdW5kIHdlaXJkIGZsb3cgYnVnXG52YXIgdG9UeXBlcyA9IFtTdHJpbmcsIE9iamVjdF1cblxudmFyIExpbmsgPSB7XG4gIG5hbWU6ICdyb3V0ZXItbGluaycsXG4gIHByb3BzOiB7XG4gICAgdG86IHtcbiAgICAgIHR5cGU6IHRvVHlwZXMsXG4gICAgICByZXF1aXJlZDogdHJ1ZVxuICAgIH0sXG4gICAgdGFnOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiAnYSdcbiAgICB9LFxuICAgIGV4YWN0OiBCb29sZWFuLFxuICAgIGFwcGVuZDogQm9vbGVhbixcbiAgICByZXBsYWNlOiBCb29sZWFuLFxuICAgIGFjdGl2ZUNsYXNzOiBTdHJpbmdcbiAgfSxcbiAgcmVuZGVyOiBmdW5jdGlvbiByZW5kZXIgKGgpIHtcbiAgICB2YXIgdGhpcyQxID0gdGhpcztcblxuICAgIHZhciByb3V0ZXIgPSB0aGlzLiRyb3V0ZXJcbiAgICB2YXIgY3VycmVudCA9IHRoaXMuJHJvdXRlXG4gICAgdmFyIHRvID0gbm9ybWFsaXplTG9jYXRpb24odGhpcy50bywgY3VycmVudCwgdGhpcy5hcHBlbmQpXG4gICAgdmFyIHJlc29sdmVkID0gcm91dGVyLm1hdGNoKHRvLCBjdXJyZW50KVxuICAgIHZhciBmdWxsUGF0aCA9IHJlc29sdmVkLnJlZGlyZWN0ZWRGcm9tIHx8IHJlc29sdmVkLmZ1bGxQYXRoXG4gICAgdmFyIGJhc2UgPSByb3V0ZXIuaGlzdG9yeS5iYXNlXG4gICAgdmFyIGhyZWYgPSBjcmVhdGVIcmVmKGJhc2UsIGZ1bGxQYXRoLCByb3V0ZXIubW9kZSlcbiAgICB2YXIgY2xhc3NlcyA9IHt9XG4gICAgdmFyIGFjdGl2ZUNsYXNzID0gdGhpcy5hY3RpdmVDbGFzcyB8fCByb3V0ZXIub3B0aW9ucy5saW5rQWN0aXZlQ2xhc3MgfHwgJ3JvdXRlci1saW5rLWFjdGl2ZSdcbiAgICB2YXIgY29tcGFyZVRhcmdldCA9IHRvLnBhdGggPyBjcmVhdGVSb3V0ZShudWxsLCB0bykgOiByZXNvbHZlZFxuICAgIGNsYXNzZXNbYWN0aXZlQ2xhc3NdID0gdGhpcy5leGFjdFxuICAgICAgPyBpc1NhbWVSb3V0ZShjdXJyZW50LCBjb21wYXJlVGFyZ2V0KVxuICAgICAgOiBpc0luY2x1ZGVkUm91dGUoY3VycmVudCwgY29tcGFyZVRhcmdldClcblxuICAgIHZhciBvbiA9IHtcbiAgICAgIGNsaWNrOiBmdW5jdGlvbiAoZSkge1xuICAgICAgICAvLyBkb24ndCByZWRpcmVjdCB3aXRoIGNvbnRyb2wga2V5c1xuICAgICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgICAgICAgaWYgKGUubWV0YUtleSB8fCBlLmN0cmxLZXkgfHwgZS5zaGlmdEtleSkgeyByZXR1cm4gfVxuICAgICAgICAvLyBkb24ndCByZWRpcmVjdCB3aGVuIHByZXZlbnREZWZhdWx0IGNhbGxlZFxuICAgICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgICAgICAgaWYgKGUuZGVmYXVsdFByZXZlbnRlZCkgeyByZXR1cm4gfVxuICAgICAgICAvLyBkb24ndCByZWRpcmVjdCBvbiByaWdodCBjbGlja1xuICAgICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgICAgICAgaWYgKGUuYnV0dG9uICE9PSAwKSB7IHJldHVybiB9XG4gICAgICAgIC8vIGRvbid0IHJlZGlyZWN0IGlmIGB0YXJnZXQ9XCJfYmxhbmtcImBcbiAgICAgICAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gICAgICAgIHZhciB0YXJnZXQgPSBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ3RhcmdldCcpXG4gICAgICAgIGlmICgvXFxiX2JsYW5rXFxiL2kudGVzdCh0YXJnZXQpKSB7IHJldHVybiB9XG5cbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgIGlmICh0aGlzJDEucmVwbGFjZSkge1xuICAgICAgICAgIHJvdXRlci5yZXBsYWNlKHRvKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJvdXRlci5wdXNoKHRvKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIGRhdGEgPSB7XG4gICAgICBjbGFzczogY2xhc3Nlc1xuICAgIH1cblxuICAgIGlmICh0aGlzLnRhZyA9PT0gJ2EnKSB7XG4gICAgICBkYXRhLm9uID0gb25cbiAgICAgIGRhdGEuYXR0cnMgPSB7IGhyZWY6IGhyZWYgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBmaW5kIHRoZSBmaXJzdCA8YT4gY2hpbGQgYW5kIGFwcGx5IGxpc3RlbmVyIGFuZCBocmVmXG4gICAgICB2YXIgYSA9IGZpbmRBbmNob3IodGhpcy4kc2xvdHMuZGVmYXVsdClcbiAgICAgIGlmIChhKSB7XG4gICAgICAgIC8vIGluIGNhc2UgdGhlIDxhPiBpcyBhIHN0YXRpYyBub2RlXG4gICAgICAgIGEuaXNTdGF0aWMgPSBmYWxzZVxuICAgICAgICB2YXIgZXh0ZW5kID0gX1Z1ZS51dGlsLmV4dGVuZFxuICAgICAgICB2YXIgYURhdGEgPSBhLmRhdGEgPSBleHRlbmQoe30sIGEuZGF0YSlcbiAgICAgICAgYURhdGEub24gPSBvblxuICAgICAgICB2YXIgYUF0dHJzID0gYS5kYXRhLmF0dHJzID0gZXh0ZW5kKHt9LCBhLmRhdGEuYXR0cnMpXG4gICAgICAgIGFBdHRycy5ocmVmID0gaHJlZlxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gZG9lc24ndCBoYXZlIDxhPiBjaGlsZCwgYXBwbHkgbGlzdGVuZXIgdG8gc2VsZlxuICAgICAgICBkYXRhLm9uID0gb25cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gaCh0aGlzLnRhZywgZGF0YSwgdGhpcy4kc2xvdHMuZGVmYXVsdClcbiAgfVxufVxuXG5mdW5jdGlvbiBmaW5kQW5jaG9yIChjaGlsZHJlbikge1xuICBpZiAoY2hpbGRyZW4pIHtcbiAgICB2YXIgY2hpbGRcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjaGlsZCA9IGNoaWxkcmVuW2ldXG4gICAgICBpZiAoY2hpbGQudGFnID09PSAnYScpIHtcbiAgICAgICAgcmV0dXJuIGNoaWxkXG4gICAgICB9XG4gICAgICBpZiAoY2hpbGQuY2hpbGRyZW4gJiYgKGNoaWxkID0gZmluZEFuY2hvcihjaGlsZC5jaGlsZHJlbikpKSB7XG4gICAgICAgIHJldHVybiBjaGlsZFxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBjcmVhdGVIcmVmIChiYXNlLCBmdWxsUGF0aCwgbW9kZSkge1xuICB2YXIgcGF0aCA9IG1vZGUgPT09ICdoYXNoJyA/ICcvIycgKyBmdWxsUGF0aCA6IGZ1bGxQYXRoXG4gIHJldHVybiBiYXNlID8gY2xlYW5QYXRoKGJhc2UgKyBwYXRoKSA6IHBhdGhcbn1cblxudmFyIF9WdWVcblxuZnVuY3Rpb24gaW5zdGFsbCAoVnVlKSB7XG4gIGlmIChpbnN0YWxsLmluc3RhbGxlZCkgeyByZXR1cm4gfVxuICBpbnN0YWxsLmluc3RhbGxlZCA9IHRydWVcblxuICBfVnVlID0gVnVlXG5cbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFZ1ZS5wcm90b3R5cGUsICckcm91dGVyJywge1xuICAgIGdldDogZnVuY3Rpb24gZ2V0ICgpIHsgcmV0dXJuIHRoaXMuJHJvb3QuX3JvdXRlciB9XG4gIH0pXG5cbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFZ1ZS5wcm90b3R5cGUsICckcm91dGUnLCB7XG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQkMSAoKSB7IHJldHVybiB0aGlzLiRyb290Ll9yb3V0ZSB9XG4gIH0pXG5cbiAgVnVlLm1peGluKHtcbiAgICBiZWZvcmVDcmVhdGU6IGZ1bmN0aW9uIGJlZm9yZUNyZWF0ZSAoKSB7XG4gICAgICBpZiAodGhpcy4kb3B0aW9ucy5yb3V0ZXIpIHtcbiAgICAgICAgdGhpcy5fcm91dGVyID0gdGhpcy4kb3B0aW9ucy5yb3V0ZXJcbiAgICAgICAgdGhpcy5fcm91dGVyLmluaXQodGhpcylcbiAgICAgICAgVnVlLnV0aWwuZGVmaW5lUmVhY3RpdmUodGhpcywgJ19yb3V0ZScsIHRoaXMuX3JvdXRlci5oaXN0b3J5LmN1cnJlbnQpXG4gICAgICB9XG4gICAgfVxuICB9KVxuXG4gIFZ1ZS5jb21wb25lbnQoJ3JvdXRlci12aWV3JywgVmlldylcbiAgVnVlLmNvbXBvbmVudCgncm91dGVyLWxpbmsnLCBMaW5rKVxuXG4gIHZhciBzdHJhdHMgPSBWdWUuY29uZmlnLm9wdGlvbk1lcmdlU3RyYXRlZ2llc1xuICAvLyB1c2UgdGhlIHNhbWUgaG9vayBtZXJnaW5nIHN0cmF0ZWd5IGZvciByb3V0ZSBob29rc1xuICBzdHJhdHMuYmVmb3JlUm91dGVFbnRlciA9IHN0cmF0cy5iZWZvcmVSb3V0ZUxlYXZlID0gc3RyYXRzLmNyZWF0ZWRcbn1cblxudmFyIF9fbW9kdWxlRXhwb3J0cyA9IEFycmF5LmlzQXJyYXkgfHwgZnVuY3Rpb24gKGFycikge1xuICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGFycikgPT0gJ1tvYmplY3QgQXJyYXldJztcbn07XG5cbnZhciBpc2FycmF5ID0gX19tb2R1bGVFeHBvcnRzXG5cbi8qKlxuICogRXhwb3NlIGBwYXRoVG9SZWdleHBgLlxuICovXG52YXIgaW5kZXggPSBwYXRoVG9SZWdleHBcbnZhciBwYXJzZV8xID0gcGFyc2VcbnZhciBjb21waWxlXzEgPSBjb21waWxlXG52YXIgdG9rZW5zVG9GdW5jdGlvbl8xID0gdG9rZW5zVG9GdW5jdGlvblxudmFyIHRva2Vuc1RvUmVnRXhwXzEgPSB0b2tlbnNUb1JlZ0V4cFxuXG4vKipcbiAqIFRoZSBtYWluIHBhdGggbWF0Y2hpbmcgcmVnZXhwIHV0aWxpdHkuXG4gKlxuICogQHR5cGUge1JlZ0V4cH1cbiAqL1xudmFyIFBBVEhfUkVHRVhQID0gbmV3IFJlZ0V4cChbXG4gIC8vIE1hdGNoIGVzY2FwZWQgY2hhcmFjdGVycyB0aGF0IHdvdWxkIG90aGVyd2lzZSBhcHBlYXIgaW4gZnV0dXJlIG1hdGNoZXMuXG4gIC8vIFRoaXMgYWxsb3dzIHRoZSB1c2VyIHRvIGVzY2FwZSBzcGVjaWFsIGNoYXJhY3RlcnMgdGhhdCB3b24ndCB0cmFuc2Zvcm0uXG4gICcoXFxcXFxcXFwuKScsXG4gIC8vIE1hdGNoIEV4cHJlc3Mtc3R5bGUgcGFyYW1ldGVycyBhbmQgdW4tbmFtZWQgcGFyYW1ldGVycyB3aXRoIGEgcHJlZml4XG4gIC8vIGFuZCBvcHRpb25hbCBzdWZmaXhlcy4gTWF0Y2hlcyBhcHBlYXIgYXM6XG4gIC8vXG4gIC8vIFwiLzp0ZXN0KFxcXFxkKyk/XCIgPT4gW1wiL1wiLCBcInRlc3RcIiwgXCJcXGQrXCIsIHVuZGVmaW5lZCwgXCI/XCIsIHVuZGVmaW5lZF1cbiAgLy8gXCIvcm91dGUoXFxcXGQrKVwiICA9PiBbdW5kZWZpbmVkLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgXCJcXGQrXCIsIHVuZGVmaW5lZCwgdW5kZWZpbmVkXVxuICAvLyBcIi8qXCIgICAgICAgICAgICA9PiBbXCIvXCIsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgXCIqXCJdXG4gICcoW1xcXFwvLl0pPyg/Oig/OlxcXFw6KFxcXFx3KykoPzpcXFxcKCgoPzpcXFxcXFxcXC58W15cXFxcXFxcXCgpXSkrKVxcXFwpKT98XFxcXCgoKD86XFxcXFxcXFwufFteXFxcXFxcXFwoKV0pKylcXFxcKSkoWysqP10pP3woXFxcXCopKSdcbl0uam9pbignfCcpLCAnZycpXG5cbi8qKlxuICogUGFyc2UgYSBzdHJpbmcgZm9yIHRoZSByYXcgdG9rZW5zLlxuICpcbiAqIEBwYXJhbSAge3N0cmluZ30gIHN0clxuICogQHBhcmFtICB7T2JqZWN0PX0gb3B0aW9uc1xuICogQHJldHVybiB7IUFycmF5fVxuICovXG5mdW5jdGlvbiBwYXJzZSAoc3RyLCBvcHRpb25zKSB7XG4gIHZhciB0b2tlbnMgPSBbXVxuICB2YXIga2V5ID0gMFxuICB2YXIgaW5kZXggPSAwXG4gIHZhciBwYXRoID0gJydcbiAgdmFyIGRlZmF1bHREZWxpbWl0ZXIgPSBvcHRpb25zICYmIG9wdGlvbnMuZGVsaW1pdGVyIHx8ICcvJ1xuICB2YXIgcmVzXG5cbiAgd2hpbGUgKChyZXMgPSBQQVRIX1JFR0VYUC5leGVjKHN0cikpICE9IG51bGwpIHtcbiAgICB2YXIgbSA9IHJlc1swXVxuICAgIHZhciBlc2NhcGVkID0gcmVzWzFdXG4gICAgdmFyIG9mZnNldCA9IHJlcy5pbmRleFxuICAgIHBhdGggKz0gc3RyLnNsaWNlKGluZGV4LCBvZmZzZXQpXG4gICAgaW5kZXggPSBvZmZzZXQgKyBtLmxlbmd0aFxuXG4gICAgLy8gSWdub3JlIGFscmVhZHkgZXNjYXBlZCBzZXF1ZW5jZXMuXG4gICAgaWYgKGVzY2FwZWQpIHtcbiAgICAgIHBhdGggKz0gZXNjYXBlZFsxXVxuICAgICAgY29udGludWVcbiAgICB9XG5cbiAgICB2YXIgbmV4dCA9IHN0cltpbmRleF1cbiAgICB2YXIgcHJlZml4ID0gcmVzWzJdXG4gICAgdmFyIG5hbWUgPSByZXNbM11cbiAgICB2YXIgY2FwdHVyZSA9IHJlc1s0XVxuICAgIHZhciBncm91cCA9IHJlc1s1XVxuICAgIHZhciBtb2RpZmllciA9IHJlc1s2XVxuICAgIHZhciBhc3RlcmlzayA9IHJlc1s3XVxuXG4gICAgLy8gUHVzaCB0aGUgY3VycmVudCBwYXRoIG9udG8gdGhlIHRva2Vucy5cbiAgICBpZiAocGF0aCkge1xuICAgICAgdG9rZW5zLnB1c2gocGF0aClcbiAgICAgIHBhdGggPSAnJ1xuICAgIH1cblxuICAgIHZhciBwYXJ0aWFsID0gcHJlZml4ICE9IG51bGwgJiYgbmV4dCAhPSBudWxsICYmIG5leHQgIT09IHByZWZpeFxuICAgIHZhciByZXBlYXQgPSBtb2RpZmllciA9PT0gJysnIHx8IG1vZGlmaWVyID09PSAnKidcbiAgICB2YXIgb3B0aW9uYWwgPSBtb2RpZmllciA9PT0gJz8nIHx8IG1vZGlmaWVyID09PSAnKidcbiAgICB2YXIgZGVsaW1pdGVyID0gcmVzWzJdIHx8IGRlZmF1bHREZWxpbWl0ZXJcbiAgICB2YXIgcGF0dGVybiA9IGNhcHR1cmUgfHwgZ3JvdXBcblxuICAgIHRva2Vucy5wdXNoKHtcbiAgICAgIG5hbWU6IG5hbWUgfHwga2V5KyssXG4gICAgICBwcmVmaXg6IHByZWZpeCB8fCAnJyxcbiAgICAgIGRlbGltaXRlcjogZGVsaW1pdGVyLFxuICAgICAgb3B0aW9uYWw6IG9wdGlvbmFsLFxuICAgICAgcmVwZWF0OiByZXBlYXQsXG4gICAgICBwYXJ0aWFsOiBwYXJ0aWFsLFxuICAgICAgYXN0ZXJpc2s6ICEhYXN0ZXJpc2ssXG4gICAgICBwYXR0ZXJuOiBwYXR0ZXJuID8gZXNjYXBlR3JvdXAocGF0dGVybikgOiAoYXN0ZXJpc2sgPyAnLionIDogJ1teJyArIGVzY2FwZVN0cmluZyhkZWxpbWl0ZXIpICsgJ10rPycpXG4gICAgfSlcbiAgfVxuXG4gIC8vIE1hdGNoIGFueSBjaGFyYWN0ZXJzIHN0aWxsIHJlbWFpbmluZy5cbiAgaWYgKGluZGV4IDwgc3RyLmxlbmd0aCkge1xuICAgIHBhdGggKz0gc3RyLnN1YnN0cihpbmRleClcbiAgfVxuXG4gIC8vIElmIHRoZSBwYXRoIGV4aXN0cywgcHVzaCBpdCBvbnRvIHRoZSBlbmQuXG4gIGlmIChwYXRoKSB7XG4gICAgdG9rZW5zLnB1c2gocGF0aClcbiAgfVxuXG4gIHJldHVybiB0b2tlbnNcbn1cblxuLyoqXG4gKiBDb21waWxlIGEgc3RyaW5nIHRvIGEgdGVtcGxhdGUgZnVuY3Rpb24gZm9yIHRoZSBwYXRoLlxuICpcbiAqIEBwYXJhbSAge3N0cmluZ30gICAgICAgICAgICAgc3RyXG4gKiBAcGFyYW0gIHtPYmplY3Q9fSAgICAgICAgICAgIG9wdGlvbnNcbiAqIEByZXR1cm4geyFmdW5jdGlvbihPYmplY3Q9LCBPYmplY3Q9KX1cbiAqL1xuZnVuY3Rpb24gY29tcGlsZSAoc3RyLCBvcHRpb25zKSB7XG4gIHJldHVybiB0b2tlbnNUb0Z1bmN0aW9uKHBhcnNlKHN0ciwgb3B0aW9ucykpXG59XG5cbi8qKlxuICogUHJldHRpZXIgZW5jb2Rpbmcgb2YgVVJJIHBhdGggc2VnbWVudHMuXG4gKlxuICogQHBhcmFtICB7c3RyaW5nfVxuICogQHJldHVybiB7c3RyaW5nfVxuICovXG5mdW5jdGlvbiBlbmNvZGVVUklDb21wb25lbnRQcmV0dHkgKHN0cikge1xuICByZXR1cm4gZW5jb2RlVVJJKHN0cikucmVwbGFjZSgvW1xcLz8jXS9nLCBmdW5jdGlvbiAoYykge1xuICAgIHJldHVybiAnJScgKyBjLmNoYXJDb2RlQXQoMCkudG9TdHJpbmcoMTYpLnRvVXBwZXJDYXNlKClcbiAgfSlcbn1cblxuLyoqXG4gKiBFbmNvZGUgdGhlIGFzdGVyaXNrIHBhcmFtZXRlci4gU2ltaWxhciB0byBgcHJldHR5YCwgYnV0IGFsbG93cyBzbGFzaGVzLlxuICpcbiAqIEBwYXJhbSAge3N0cmluZ31cbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xuZnVuY3Rpb24gZW5jb2RlQXN0ZXJpc2sgKHN0cikge1xuICByZXR1cm4gZW5jb2RlVVJJKHN0cikucmVwbGFjZSgvWz8jXS9nLCBmdW5jdGlvbiAoYykge1xuICAgIHJldHVybiAnJScgKyBjLmNoYXJDb2RlQXQoMCkudG9TdHJpbmcoMTYpLnRvVXBwZXJDYXNlKClcbiAgfSlcbn1cblxuLyoqXG4gKiBFeHBvc2UgYSBtZXRob2QgZm9yIHRyYW5zZm9ybWluZyB0b2tlbnMgaW50byB0aGUgcGF0aCBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gdG9rZW5zVG9GdW5jdGlvbiAodG9rZW5zKSB7XG4gIC8vIENvbXBpbGUgYWxsIHRoZSB0b2tlbnMgaW50byByZWdleHBzLlxuICB2YXIgbWF0Y2hlcyA9IG5ldyBBcnJheSh0b2tlbnMubGVuZ3RoKVxuXG4gIC8vIENvbXBpbGUgYWxsIHRoZSBwYXR0ZXJucyBiZWZvcmUgY29tcGlsYXRpb24uXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgdG9rZW5zLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHR5cGVvZiB0b2tlbnNbaV0gPT09ICdvYmplY3QnKSB7XG4gICAgICBtYXRjaGVzW2ldID0gbmV3IFJlZ0V4cCgnXig/OicgKyB0b2tlbnNbaV0ucGF0dGVybiArICcpJCcpXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIChvYmosIG9wdHMpIHtcbiAgICB2YXIgcGF0aCA9ICcnXG4gICAgdmFyIGRhdGEgPSBvYmogfHwge31cbiAgICB2YXIgb3B0aW9ucyA9IG9wdHMgfHwge31cbiAgICB2YXIgZW5jb2RlID0gb3B0aW9ucy5wcmV0dHkgPyBlbmNvZGVVUklDb21wb25lbnRQcmV0dHkgOiBlbmNvZGVVUklDb21wb25lbnRcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdG9rZW5zLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgdG9rZW4gPSB0b2tlbnNbaV1cblxuICAgICAgaWYgKHR5cGVvZiB0b2tlbiA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgcGF0aCArPSB0b2tlblxuXG4gICAgICAgIGNvbnRpbnVlXG4gICAgICB9XG5cbiAgICAgIHZhciB2YWx1ZSA9IGRhdGFbdG9rZW4ubmFtZV1cbiAgICAgIHZhciBzZWdtZW50XG5cbiAgICAgIGlmICh2YWx1ZSA9PSBudWxsKSB7XG4gICAgICAgIGlmICh0b2tlbi5vcHRpb25hbCkge1xuICAgICAgICAgIC8vIFByZXBlbmQgcGFydGlhbCBzZWdtZW50IHByZWZpeGVzLlxuICAgICAgICAgIGlmICh0b2tlbi5wYXJ0aWFsKSB7XG4gICAgICAgICAgICBwYXRoICs9IHRva2VuLnByZWZpeFxuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnRpbnVlXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignRXhwZWN0ZWQgXCInICsgdG9rZW4ubmFtZSArICdcIiB0byBiZSBkZWZpbmVkJylcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoaXNhcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgaWYgKCF0b2tlbi5yZXBlYXQpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdFeHBlY3RlZCBcIicgKyB0b2tlbi5uYW1lICsgJ1wiIHRvIG5vdCByZXBlYXQsIGJ1dCByZWNlaXZlZCBgJyArIEpTT04uc3RyaW5naWZ5KHZhbHVlKSArICdgJylcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh2YWx1ZS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICBpZiAodG9rZW4ub3B0aW9uYWwpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0V4cGVjdGVkIFwiJyArIHRva2VuLm5hbWUgKyAnXCIgdG8gbm90IGJlIGVtcHR5JylcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHZhbHVlLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgc2VnbWVudCA9IGVuY29kZSh2YWx1ZVtqXSlcblxuICAgICAgICAgIGlmICghbWF0Y2hlc1tpXS50ZXN0KHNlZ21lbnQpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdFeHBlY3RlZCBhbGwgXCInICsgdG9rZW4ubmFtZSArICdcIiB0byBtYXRjaCBcIicgKyB0b2tlbi5wYXR0ZXJuICsgJ1wiLCBidXQgcmVjZWl2ZWQgYCcgKyBKU09OLnN0cmluZ2lmeShzZWdtZW50KSArICdgJylcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBwYXRoICs9IChqID09PSAwID8gdG9rZW4ucHJlZml4IDogdG9rZW4uZGVsaW1pdGVyKSArIHNlZ21lbnRcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnRpbnVlXG4gICAgICB9XG5cbiAgICAgIHNlZ21lbnQgPSB0b2tlbi5hc3RlcmlzayA/IGVuY29kZUFzdGVyaXNrKHZhbHVlKSA6IGVuY29kZSh2YWx1ZSlcblxuICAgICAgaWYgKCFtYXRjaGVzW2ldLnRlc3Qoc2VnbWVudCkpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignRXhwZWN0ZWQgXCInICsgdG9rZW4ubmFtZSArICdcIiB0byBtYXRjaCBcIicgKyB0b2tlbi5wYXR0ZXJuICsgJ1wiLCBidXQgcmVjZWl2ZWQgXCInICsgc2VnbWVudCArICdcIicpXG4gICAgICB9XG5cbiAgICAgIHBhdGggKz0gdG9rZW4ucHJlZml4ICsgc2VnbWVudFxuICAgIH1cblxuICAgIHJldHVybiBwYXRoXG4gIH1cbn1cblxuLyoqXG4gKiBFc2NhcGUgYSByZWd1bGFyIGV4cHJlc3Npb24gc3RyaW5nLlxuICpcbiAqIEBwYXJhbSAge3N0cmluZ30gc3RyXG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cbmZ1bmN0aW9uIGVzY2FwZVN0cmluZyAoc3RyKSB7XG4gIHJldHVybiBzdHIucmVwbGFjZSgvKFsuKyo/PV4hOiR7fSgpW1xcXXxcXC9cXFxcXSkvZywgJ1xcXFwkMScpXG59XG5cbi8qKlxuICogRXNjYXBlIHRoZSBjYXB0dXJpbmcgZ3JvdXAgYnkgZXNjYXBpbmcgc3BlY2lhbCBjaGFyYWN0ZXJzIGFuZCBtZWFuaW5nLlxuICpcbiAqIEBwYXJhbSAge3N0cmluZ30gZ3JvdXBcbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xuZnVuY3Rpb24gZXNjYXBlR3JvdXAgKGdyb3VwKSB7XG4gIHJldHVybiBncm91cC5yZXBsYWNlKC8oWz0hOiRcXC8oKV0pL2csICdcXFxcJDEnKVxufVxuXG4vKipcbiAqIEF0dGFjaCB0aGUga2V5cyBhcyBhIHByb3BlcnR5IG9mIHRoZSByZWdleHAuXG4gKlxuICogQHBhcmFtICB7IVJlZ0V4cH0gcmVcbiAqIEBwYXJhbSAge0FycmF5fSAgIGtleXNcbiAqIEByZXR1cm4geyFSZWdFeHB9XG4gKi9cbmZ1bmN0aW9uIGF0dGFjaEtleXMgKHJlLCBrZXlzKSB7XG4gIHJlLmtleXMgPSBrZXlzXG4gIHJldHVybiByZVxufVxuXG4vKipcbiAqIEdldCB0aGUgZmxhZ3MgZm9yIGEgcmVnZXhwIGZyb20gdGhlIG9wdGlvbnMuXG4gKlxuICogQHBhcmFtICB7T2JqZWN0fSBvcHRpb25zXG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cbmZ1bmN0aW9uIGZsYWdzIChvcHRpb25zKSB7XG4gIHJldHVybiBvcHRpb25zLnNlbnNpdGl2ZSA/ICcnIDogJ2knXG59XG5cbi8qKlxuICogUHVsbCBvdXQga2V5cyBmcm9tIGEgcmVnZXhwLlxuICpcbiAqIEBwYXJhbSAgeyFSZWdFeHB9IHBhdGhcbiAqIEBwYXJhbSAgeyFBcnJheX0gIGtleXNcbiAqIEByZXR1cm4geyFSZWdFeHB9XG4gKi9cbmZ1bmN0aW9uIHJlZ2V4cFRvUmVnZXhwIChwYXRoLCBrZXlzKSB7XG4gIC8vIFVzZSBhIG5lZ2F0aXZlIGxvb2thaGVhZCB0byBtYXRjaCBvbmx5IGNhcHR1cmluZyBncm91cHMuXG4gIHZhciBncm91cHMgPSBwYXRoLnNvdXJjZS5tYXRjaCgvXFwoKD8hXFw/KS9nKVxuXG4gIGlmIChncm91cHMpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGdyb3Vwcy5sZW5ndGg7IGkrKykge1xuICAgICAga2V5cy5wdXNoKHtcbiAgICAgICAgbmFtZTogaSxcbiAgICAgICAgcHJlZml4OiBudWxsLFxuICAgICAgICBkZWxpbWl0ZXI6IG51bGwsXG4gICAgICAgIG9wdGlvbmFsOiBmYWxzZSxcbiAgICAgICAgcmVwZWF0OiBmYWxzZSxcbiAgICAgICAgcGFydGlhbDogZmFsc2UsXG4gICAgICAgIGFzdGVyaXNrOiBmYWxzZSxcbiAgICAgICAgcGF0dGVybjogbnVsbFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gYXR0YWNoS2V5cyhwYXRoLCBrZXlzKVxufVxuXG4vKipcbiAqIFRyYW5zZm9ybSBhbiBhcnJheSBpbnRvIGEgcmVnZXhwLlxuICpcbiAqIEBwYXJhbSAgeyFBcnJheX0gIHBhdGhcbiAqIEBwYXJhbSAge0FycmF5fSAgIGtleXNcbiAqIEBwYXJhbSAgeyFPYmplY3R9IG9wdGlvbnNcbiAqIEByZXR1cm4geyFSZWdFeHB9XG4gKi9cbmZ1bmN0aW9uIGFycmF5VG9SZWdleHAgKHBhdGgsIGtleXMsIG9wdGlvbnMpIHtcbiAgdmFyIHBhcnRzID0gW11cblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHBhdGgubGVuZ3RoOyBpKyspIHtcbiAgICBwYXJ0cy5wdXNoKHBhdGhUb1JlZ2V4cChwYXRoW2ldLCBrZXlzLCBvcHRpb25zKS5zb3VyY2UpXG4gIH1cblxuICB2YXIgcmVnZXhwID0gbmV3IFJlZ0V4cCgnKD86JyArIHBhcnRzLmpvaW4oJ3wnKSArICcpJywgZmxhZ3Mob3B0aW9ucykpXG5cbiAgcmV0dXJuIGF0dGFjaEtleXMocmVnZXhwLCBrZXlzKVxufVxuXG4vKipcbiAqIENyZWF0ZSBhIHBhdGggcmVnZXhwIGZyb20gc3RyaW5nIGlucHV0LlxuICpcbiAqIEBwYXJhbSAge3N0cmluZ30gIHBhdGhcbiAqIEBwYXJhbSAgeyFBcnJheX0gIGtleXNcbiAqIEBwYXJhbSAgeyFPYmplY3R9IG9wdGlvbnNcbiAqIEByZXR1cm4geyFSZWdFeHB9XG4gKi9cbmZ1bmN0aW9uIHN0cmluZ1RvUmVnZXhwIChwYXRoLCBrZXlzLCBvcHRpb25zKSB7XG4gIHJldHVybiB0b2tlbnNUb1JlZ0V4cChwYXJzZShwYXRoLCBvcHRpb25zKSwga2V5cywgb3B0aW9ucylcbn1cblxuLyoqXG4gKiBFeHBvc2UgYSBmdW5jdGlvbiBmb3IgdGFraW5nIHRva2VucyBhbmQgcmV0dXJuaW5nIGEgUmVnRXhwLlxuICpcbiAqIEBwYXJhbSAgeyFBcnJheX0gICAgICAgICAgdG9rZW5zXG4gKiBAcGFyYW0gIHsoQXJyYXl8T2JqZWN0KT19IGtleXNcbiAqIEBwYXJhbSAge09iamVjdD19ICAgICAgICAgb3B0aW9uc1xuICogQHJldHVybiB7IVJlZ0V4cH1cbiAqL1xuZnVuY3Rpb24gdG9rZW5zVG9SZWdFeHAgKHRva2Vucywga2V5cywgb3B0aW9ucykge1xuICBpZiAoIWlzYXJyYXkoa2V5cykpIHtcbiAgICBvcHRpb25zID0gLyoqIEB0eXBlIHshT2JqZWN0fSAqLyAoa2V5cyB8fCBvcHRpb25zKVxuICAgIGtleXMgPSBbXVxuICB9XG5cbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge31cblxuICB2YXIgc3RyaWN0ID0gb3B0aW9ucy5zdHJpY3RcbiAgdmFyIGVuZCA9IG9wdGlvbnMuZW5kICE9PSBmYWxzZVxuICB2YXIgcm91dGUgPSAnJ1xuXG4gIC8vIEl0ZXJhdGUgb3ZlciB0aGUgdG9rZW5zIGFuZCBjcmVhdGUgb3VyIHJlZ2V4cCBzdHJpbmcuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgdG9rZW5zLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIHRva2VuID0gdG9rZW5zW2ldXG5cbiAgICBpZiAodHlwZW9mIHRva2VuID09PSAnc3RyaW5nJykge1xuICAgICAgcm91dGUgKz0gZXNjYXBlU3RyaW5nKHRva2VuKVxuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgcHJlZml4ID0gZXNjYXBlU3RyaW5nKHRva2VuLnByZWZpeClcbiAgICAgIHZhciBjYXB0dXJlID0gJyg/OicgKyB0b2tlbi5wYXR0ZXJuICsgJyknXG5cbiAgICAgIGtleXMucHVzaCh0b2tlbilcblxuICAgICAgaWYgKHRva2VuLnJlcGVhdCkge1xuICAgICAgICBjYXB0dXJlICs9ICcoPzonICsgcHJlZml4ICsgY2FwdHVyZSArICcpKidcbiAgICAgIH1cblxuICAgICAgaWYgKHRva2VuLm9wdGlvbmFsKSB7XG4gICAgICAgIGlmICghdG9rZW4ucGFydGlhbCkge1xuICAgICAgICAgIGNhcHR1cmUgPSAnKD86JyArIHByZWZpeCArICcoJyArIGNhcHR1cmUgKyAnKSk/J1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNhcHR1cmUgPSBwcmVmaXggKyAnKCcgKyBjYXB0dXJlICsgJyk/J1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjYXB0dXJlID0gcHJlZml4ICsgJygnICsgY2FwdHVyZSArICcpJ1xuICAgICAgfVxuXG4gICAgICByb3V0ZSArPSBjYXB0dXJlXG4gICAgfVxuICB9XG5cbiAgdmFyIGRlbGltaXRlciA9IGVzY2FwZVN0cmluZyhvcHRpb25zLmRlbGltaXRlciB8fCAnLycpXG4gIHZhciBlbmRzV2l0aERlbGltaXRlciA9IHJvdXRlLnNsaWNlKC1kZWxpbWl0ZXIubGVuZ3RoKSA9PT0gZGVsaW1pdGVyXG5cbiAgLy8gSW4gbm9uLXN0cmljdCBtb2RlIHdlIGFsbG93IGEgc2xhc2ggYXQgdGhlIGVuZCBvZiBtYXRjaC4gSWYgdGhlIHBhdGggdG9cbiAgLy8gbWF0Y2ggYWxyZWFkeSBlbmRzIHdpdGggYSBzbGFzaCwgd2UgcmVtb3ZlIGl0IGZvciBjb25zaXN0ZW5jeS4gVGhlIHNsYXNoXG4gIC8vIGlzIHZhbGlkIGF0IHRoZSBlbmQgb2YgYSBwYXRoIG1hdGNoLCBub3QgaW4gdGhlIG1pZGRsZS4gVGhpcyBpcyBpbXBvcnRhbnRcbiAgLy8gaW4gbm9uLWVuZGluZyBtb2RlLCB3aGVyZSBcIi90ZXN0L1wiIHNob3VsZG4ndCBtYXRjaCBcIi90ZXN0Ly9yb3V0ZVwiLlxuICBpZiAoIXN0cmljdCkge1xuICAgIHJvdXRlID0gKGVuZHNXaXRoRGVsaW1pdGVyID8gcm91dGUuc2xpY2UoMCwgLWRlbGltaXRlci5sZW5ndGgpIDogcm91dGUpICsgJyg/OicgKyBkZWxpbWl0ZXIgKyAnKD89JCkpPydcbiAgfVxuXG4gIGlmIChlbmQpIHtcbiAgICByb3V0ZSArPSAnJCdcbiAgfSBlbHNlIHtcbiAgICAvLyBJbiBub24tZW5kaW5nIG1vZGUsIHdlIG5lZWQgdGhlIGNhcHR1cmluZyBncm91cHMgdG8gbWF0Y2ggYXMgbXVjaCBhc1xuICAgIC8vIHBvc3NpYmxlIGJ5IHVzaW5nIGEgcG9zaXRpdmUgbG9va2FoZWFkIHRvIHRoZSBlbmQgb3IgbmV4dCBwYXRoIHNlZ21lbnQuXG4gICAgcm91dGUgKz0gc3RyaWN0ICYmIGVuZHNXaXRoRGVsaW1pdGVyID8gJycgOiAnKD89JyArIGRlbGltaXRlciArICd8JCknXG4gIH1cblxuICByZXR1cm4gYXR0YWNoS2V5cyhuZXcgUmVnRXhwKCdeJyArIHJvdXRlLCBmbGFncyhvcHRpb25zKSksIGtleXMpXG59XG5cbi8qKlxuICogTm9ybWFsaXplIHRoZSBnaXZlbiBwYXRoIHN0cmluZywgcmV0dXJuaW5nIGEgcmVndWxhciBleHByZXNzaW9uLlxuICpcbiAqIEFuIGVtcHR5IGFycmF5IGNhbiBiZSBwYXNzZWQgaW4gZm9yIHRoZSBrZXlzLCB3aGljaCB3aWxsIGhvbGQgdGhlXG4gKiBwbGFjZWhvbGRlciBrZXkgZGVzY3JpcHRpb25zLiBGb3IgZXhhbXBsZSwgdXNpbmcgYC91c2VyLzppZGAsIGBrZXlzYCB3aWxsXG4gKiBjb250YWluIGBbeyBuYW1lOiAnaWQnLCBkZWxpbWl0ZXI6ICcvJywgb3B0aW9uYWw6IGZhbHNlLCByZXBlYXQ6IGZhbHNlIH1dYC5cbiAqXG4gKiBAcGFyYW0gIHsoc3RyaW5nfFJlZ0V4cHxBcnJheSl9IHBhdGhcbiAqIEBwYXJhbSAgeyhBcnJheXxPYmplY3QpPX0gICAgICAga2V5c1xuICogQHBhcmFtICB7T2JqZWN0PX0gICAgICAgICAgICAgICBvcHRpb25zXG4gKiBAcmV0dXJuIHshUmVnRXhwfVxuICovXG5mdW5jdGlvbiBwYXRoVG9SZWdleHAgKHBhdGgsIGtleXMsIG9wdGlvbnMpIHtcbiAgaWYgKCFpc2FycmF5KGtleXMpKSB7XG4gICAgb3B0aW9ucyA9IC8qKiBAdHlwZSB7IU9iamVjdH0gKi8gKGtleXMgfHwgb3B0aW9ucylcbiAgICBrZXlzID0gW11cbiAgfVxuXG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9XG5cbiAgaWYgKHBhdGggaW5zdGFuY2VvZiBSZWdFeHApIHtcbiAgICByZXR1cm4gcmVnZXhwVG9SZWdleHAocGF0aCwgLyoqIEB0eXBlIHshQXJyYXl9ICovIChrZXlzKSlcbiAgfVxuXG4gIGlmIChpc2FycmF5KHBhdGgpKSB7XG4gICAgcmV0dXJuIGFycmF5VG9SZWdleHAoLyoqIEB0eXBlIHshQXJyYXl9ICovIChwYXRoKSwgLyoqIEB0eXBlIHshQXJyYXl9ICovIChrZXlzKSwgb3B0aW9ucylcbiAgfVxuXG4gIHJldHVybiBzdHJpbmdUb1JlZ2V4cCgvKiogQHR5cGUge3N0cmluZ30gKi8gKHBhdGgpLCAvKiogQHR5cGUgeyFBcnJheX0gKi8gKGtleXMpLCBvcHRpb25zKVxufVxuXG5pbmRleC5wYXJzZSA9IHBhcnNlXzE7XG5pbmRleC5jb21waWxlID0gY29tcGlsZV8xO1xuaW5kZXgudG9rZW5zVG9GdW5jdGlvbiA9IHRva2Vuc1RvRnVuY3Rpb25fMTtcbmluZGV4LnRva2Vuc1RvUmVnRXhwID0gdG9rZW5zVG9SZWdFeHBfMTtcblxuLyogICovXG5cbmZ1bmN0aW9uIGNyZWF0ZVJvdXRlTWFwIChyb3V0ZXMpIHtcbiAgdmFyIHBhdGhNYXAgPSBPYmplY3QuY3JlYXRlKG51bGwpXG4gIHZhciBuYW1lTWFwID0gT2JqZWN0LmNyZWF0ZShudWxsKVxuXG4gIHJvdXRlcy5mb3JFYWNoKGZ1bmN0aW9uIChyb3V0ZSkge1xuICAgIGFkZFJvdXRlUmVjb3JkKHBhdGhNYXAsIG5hbWVNYXAsIHJvdXRlKVxuICB9KVxuXG4gIHJldHVybiB7XG4gICAgcGF0aE1hcDogcGF0aE1hcCxcbiAgICBuYW1lTWFwOiBuYW1lTWFwXG4gIH1cbn1cblxuZnVuY3Rpb24gYWRkUm91dGVSZWNvcmQgKFxuICBwYXRoTWFwLFxuICBuYW1lTWFwLFxuICByb3V0ZSxcbiAgcGFyZW50LFxuICBtYXRjaEFzXG4pIHtcbiAgdmFyIHBhdGggPSByb3V0ZS5wYXRoO1xuICB2YXIgbmFtZSA9IHJvdXRlLm5hbWU7XG4gIGFzc2VydChwYXRoICE9IG51bGwsIFwiXFxcInBhdGhcXFwiIGlzIHJlcXVpcmVkIGluIGEgcm91dGUgY29uZmlndXJhdGlvbi5cIilcblxuICB2YXIgcmVjb3JkID0ge1xuICAgIHBhdGg6IG5vcm1hbGl6ZVBhdGgocGF0aCwgcGFyZW50KSxcbiAgICBjb21wb25lbnRzOiByb3V0ZS5jb21wb25lbnRzIHx8IHsgZGVmYXVsdDogcm91dGUuY29tcG9uZW50IH0sXG4gICAgaW5zdGFuY2VzOiB7fSxcbiAgICBuYW1lOiBuYW1lLFxuICAgIHBhcmVudDogcGFyZW50LFxuICAgIG1hdGNoQXM6IG1hdGNoQXMsXG4gICAgcmVkaXJlY3Q6IHJvdXRlLnJlZGlyZWN0LFxuICAgIGJlZm9yZUVudGVyOiByb3V0ZS5iZWZvcmVFbnRlcixcbiAgICBtZXRhOiByb3V0ZS5tZXRhIHx8IHt9XG4gIH1cblxuICBpZiAocm91dGUuY2hpbGRyZW4pIHtcbiAgICAvLyBXYXJuIGlmIHJvdXRlIGlzIG5hbWVkIGFuZCBoYXMgYSBkZWZhdWx0IGNoaWxkIHJvdXRlLlxuICAgIC8vIElmIHVzZXJzIG5hdmlnYXRlIHRvIHRoaXMgcm91dGUgYnkgbmFtZSwgdGhlIGRlZmF1bHQgY2hpbGQgd2lsbFxuICAgIC8vIG5vdCBiZSByZW5kZXJlZCAoR0ggSXNzdWUgIzYyOSlcbiAgICBpZiAoXCJwcm9kdWN0aW9uXCIgIT09ICdwcm9kdWN0aW9uJykge31cbiAgICByb3V0ZS5jaGlsZHJlbi5mb3JFYWNoKGZ1bmN0aW9uIChjaGlsZCkge1xuICAgICAgYWRkUm91dGVSZWNvcmQocGF0aE1hcCwgbmFtZU1hcCwgY2hpbGQsIHJlY29yZClcbiAgICB9KVxuICB9XG5cbiAgaWYgKHJvdXRlLmFsaWFzICE9PSB1bmRlZmluZWQpIHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShyb3V0ZS5hbGlhcykpIHtcbiAgICAgIHJvdXRlLmFsaWFzLmZvckVhY2goZnVuY3Rpb24gKGFsaWFzKSB7XG4gICAgICAgIGFkZFJvdXRlUmVjb3JkKHBhdGhNYXAsIG5hbWVNYXAsIHsgcGF0aDogYWxpYXMgfSwgcGFyZW50LCByZWNvcmQucGF0aClcbiAgICAgIH0pXG4gICAgfSBlbHNlIHtcbiAgICAgIGFkZFJvdXRlUmVjb3JkKHBhdGhNYXAsIG5hbWVNYXAsIHsgcGF0aDogcm91dGUuYWxpYXMgfSwgcGFyZW50LCByZWNvcmQucGF0aClcbiAgICB9XG4gIH1cblxuICBwYXRoTWFwW3JlY29yZC5wYXRoXSA9IHJlY29yZFxuICBpZiAobmFtZSkge1xuICAgIGlmICghbmFtZU1hcFtuYW1lXSkge1xuICAgICAgbmFtZU1hcFtuYW1lXSA9IHJlY29yZFxuICAgIH0gZWxzZSB7XG4gICAgICB3YXJuKGZhbHNlLCAoXCJEdXBsaWNhdGUgbmFtZWQgcm91dGVzIGRlZmluaXRpb246IHsgbmFtZTogXFxcIlwiICsgbmFtZSArIFwiXFxcIiwgcGF0aDogXFxcIlwiICsgKHJlY29yZC5wYXRoKSArIFwiXFxcIiB9XCIpKVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBub3JtYWxpemVQYXRoIChwYXRoLCBwYXJlbnQpIHtcbiAgcGF0aCA9IHBhdGgucmVwbGFjZSgvXFwvJC8sICcnKVxuICBpZiAocGF0aFswXSA9PT0gJy8nKSB7IHJldHVybiBwYXRoIH1cbiAgaWYgKHBhcmVudCA9PSBudWxsKSB7IHJldHVybiBwYXRoIH1cbiAgcmV0dXJuIGNsZWFuUGF0aCgoKHBhcmVudC5wYXRoKSArIFwiL1wiICsgcGF0aCkpXG59XG5cbi8qICAqL1xuXG52YXIgcmVnZXhwQ2FjaGUgPSBPYmplY3QuY3JlYXRlKG51bGwpXG5cbnZhciByZWdleHBQYXJhbXNDYWNoZSA9IE9iamVjdC5jcmVhdGUobnVsbClcblxudmFyIHJlZ2V4cENvbXBpbGVDYWNoZSA9IE9iamVjdC5jcmVhdGUobnVsbClcblxuZnVuY3Rpb24gY3JlYXRlTWF0Y2hlciAocm91dGVzKSB7XG4gIHZhciByZWYgPSBjcmVhdGVSb3V0ZU1hcChyb3V0ZXMpO1xuICB2YXIgcGF0aE1hcCA9IHJlZi5wYXRoTWFwO1xuICB2YXIgbmFtZU1hcCA9IHJlZi5uYW1lTWFwO1xuXG4gIGZ1bmN0aW9uIG1hdGNoIChcbiAgICByYXcsXG4gICAgY3VycmVudFJvdXRlLFxuICAgIHJlZGlyZWN0ZWRGcm9tXG4gICkge1xuICAgIHZhciBsb2NhdGlvbiA9IG5vcm1hbGl6ZUxvY2F0aW9uKHJhdywgY3VycmVudFJvdXRlKVxuICAgIHZhciBuYW1lID0gbG9jYXRpb24ubmFtZTtcblxuICAgIGlmIChuYW1lKSB7XG4gICAgICB2YXIgcmVjb3JkID0gbmFtZU1hcFtuYW1lXVxuICAgICAgdmFyIHBhcmFtTmFtZXMgPSBnZXRQYXJhbXMocmVjb3JkLnBhdGgpXG5cbiAgICAgIGlmICh0eXBlb2YgbG9jYXRpb24ucGFyYW1zICE9PSAnb2JqZWN0Jykge1xuICAgICAgICBsb2NhdGlvbi5wYXJhbXMgPSB7fVxuICAgICAgfVxuXG4gICAgICBpZiAoY3VycmVudFJvdXRlICYmIHR5cGVvZiBjdXJyZW50Um91dGUucGFyYW1zID09PSAnb2JqZWN0Jykge1xuICAgICAgICBmb3IgKHZhciBrZXkgaW4gY3VycmVudFJvdXRlLnBhcmFtcykge1xuICAgICAgICAgIGlmICghKGtleSBpbiBsb2NhdGlvbi5wYXJhbXMpICYmIHBhcmFtTmFtZXMuaW5kZXhPZihrZXkpID4gLTEpIHtcbiAgICAgICAgICAgIGxvY2F0aW9uLnBhcmFtc1trZXldID0gY3VycmVudFJvdXRlLnBhcmFtc1trZXldXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChyZWNvcmQpIHtcbiAgICAgICAgbG9jYXRpb24ucGF0aCA9IGZpbGxQYXJhbXMocmVjb3JkLnBhdGgsIGxvY2F0aW9uLnBhcmFtcywgKFwibmFtZWQgcm91dGUgXFxcIlwiICsgbmFtZSArIFwiXFxcIlwiKSlcbiAgICAgICAgcmV0dXJuIF9jcmVhdGVSb3V0ZShyZWNvcmQsIGxvY2F0aW9uLCByZWRpcmVjdGVkRnJvbSlcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGxvY2F0aW9uLnBhdGgpIHtcbiAgICAgIGxvY2F0aW9uLnBhcmFtcyA9IHt9XG4gICAgICBmb3IgKHZhciBwYXRoIGluIHBhdGhNYXApIHtcbiAgICAgICAgaWYgKG1hdGNoUm91dGUocGF0aCwgbG9jYXRpb24ucGFyYW1zLCBsb2NhdGlvbi5wYXRoKSkge1xuICAgICAgICAgIHJldHVybiBfY3JlYXRlUm91dGUocGF0aE1hcFtwYXRoXSwgbG9jYXRpb24sIHJlZGlyZWN0ZWRGcm9tKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIC8vIG5vIG1hdGNoXG4gICAgcmV0dXJuIF9jcmVhdGVSb3V0ZShudWxsLCBsb2NhdGlvbilcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlZGlyZWN0IChcbiAgICByZWNvcmQsXG4gICAgbG9jYXRpb25cbiAgKSB7XG4gICAgdmFyIG9yaWdpbmFsUmVkaXJlY3QgPSByZWNvcmQucmVkaXJlY3RcbiAgICB2YXIgcmVkaXJlY3QgPSB0eXBlb2Ygb3JpZ2luYWxSZWRpcmVjdCA9PT0gJ2Z1bmN0aW9uJ1xuICAgICAgICA/IG9yaWdpbmFsUmVkaXJlY3QoY3JlYXRlUm91dGUocmVjb3JkLCBsb2NhdGlvbikpXG4gICAgICAgIDogb3JpZ2luYWxSZWRpcmVjdFxuXG4gICAgaWYgKHR5cGVvZiByZWRpcmVjdCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHJlZGlyZWN0ID0geyBwYXRoOiByZWRpcmVjdCB9XG4gICAgfVxuXG4gICAgaWYgKCFyZWRpcmVjdCB8fCB0eXBlb2YgcmVkaXJlY3QgIT09ICdvYmplY3QnKSB7XG4gICAgICB3YXJuKGZhbHNlLCAoXCJpbnZhbGlkIHJlZGlyZWN0IG9wdGlvbjogXCIgKyAoSlNPTi5zdHJpbmdpZnkocmVkaXJlY3QpKSkpXG4gICAgICByZXR1cm4gX2NyZWF0ZVJvdXRlKG51bGwsIGxvY2F0aW9uKVxuICAgIH1cblxuICAgIHZhciByZSA9IHJlZGlyZWN0XG4gICAgdmFyIG5hbWUgPSByZS5uYW1lO1xuICAgIHZhciBwYXRoID0gcmUucGF0aDtcbiAgICB2YXIgcXVlcnkgPSBsb2NhdGlvbi5xdWVyeTtcbiAgICB2YXIgaGFzaCA9IGxvY2F0aW9uLmhhc2g7XG4gICAgdmFyIHBhcmFtcyA9IGxvY2F0aW9uLnBhcmFtcztcbiAgICBxdWVyeSA9IHJlLmhhc093blByb3BlcnR5KCdxdWVyeScpID8gcmUucXVlcnkgOiBxdWVyeVxuICAgIGhhc2ggPSByZS5oYXNPd25Qcm9wZXJ0eSgnaGFzaCcpID8gcmUuaGFzaCA6IGhhc2hcbiAgICBwYXJhbXMgPSByZS5oYXNPd25Qcm9wZXJ0eSgncGFyYW1zJykgPyByZS5wYXJhbXMgOiBwYXJhbXNcblxuICAgIGlmIChuYW1lKSB7XG4gICAgICAvLyByZXNvbHZlZCBuYW1lZCBkaXJlY3RcbiAgICAgIHZhciB0YXJnZXRSZWNvcmQgPSBuYW1lTWFwW25hbWVdXG4gICAgICBhc3NlcnQodGFyZ2V0UmVjb3JkLCAoXCJyZWRpcmVjdCBmYWlsZWQ6IG5hbWVkIHJvdXRlIFxcXCJcIiArIG5hbWUgKyBcIlxcXCIgbm90IGZvdW5kLlwiKSlcbiAgICAgIHJldHVybiBtYXRjaCh7XG4gICAgICAgIF9ub3JtYWxpemVkOiB0cnVlLFxuICAgICAgICBuYW1lOiBuYW1lLFxuICAgICAgICBxdWVyeTogcXVlcnksXG4gICAgICAgIGhhc2g6IGhhc2gsXG4gICAgICAgIHBhcmFtczogcGFyYW1zXG4gICAgICB9LCB1bmRlZmluZWQsIGxvY2F0aW9uKVxuICAgIH0gZWxzZSBpZiAocGF0aCkge1xuICAgICAgLy8gMS4gcmVzb2x2ZSByZWxhdGl2ZSByZWRpcmVjdFxuICAgICAgdmFyIHJhd1BhdGggPSByZXNvbHZlUmVjb3JkUGF0aChwYXRoLCByZWNvcmQpXG4gICAgICAvLyAyLiByZXNvbHZlIHBhcmFtc1xuICAgICAgdmFyIHJlc29sdmVkUGF0aCA9IGZpbGxQYXJhbXMocmF3UGF0aCwgcGFyYW1zLCAoXCJyZWRpcmVjdCByb3V0ZSB3aXRoIHBhdGggXFxcIlwiICsgcmF3UGF0aCArIFwiXFxcIlwiKSlcbiAgICAgIC8vIDMuIHJlbWF0Y2ggd2l0aCBleGlzdGluZyBxdWVyeSBhbmQgaGFzaFxuICAgICAgcmV0dXJuIG1hdGNoKHtcbiAgICAgICAgX25vcm1hbGl6ZWQ6IHRydWUsXG4gICAgICAgIHBhdGg6IHJlc29sdmVkUGF0aCxcbiAgICAgICAgcXVlcnk6IHF1ZXJ5LFxuICAgICAgICBoYXNoOiBoYXNoXG4gICAgICB9LCB1bmRlZmluZWQsIGxvY2F0aW9uKVxuICAgIH0gZWxzZSB7XG4gICAgICB3YXJuKGZhbHNlLCAoXCJpbnZhbGlkIHJlZGlyZWN0IG9wdGlvbjogXCIgKyAoSlNPTi5zdHJpbmdpZnkocmVkaXJlY3QpKSkpXG4gICAgICByZXR1cm4gX2NyZWF0ZVJvdXRlKG51bGwsIGxvY2F0aW9uKVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGFsaWFzIChcbiAgICByZWNvcmQsXG4gICAgbG9jYXRpb24sXG4gICAgbWF0Y2hBc1xuICApIHtcbiAgICB2YXIgYWxpYXNlZFBhdGggPSBmaWxsUGFyYW1zKG1hdGNoQXMsIGxvY2F0aW9uLnBhcmFtcywgKFwiYWxpYXNlZCByb3V0ZSB3aXRoIHBhdGggXFxcIlwiICsgbWF0Y2hBcyArIFwiXFxcIlwiKSlcbiAgICB2YXIgYWxpYXNlZE1hdGNoID0gbWF0Y2goe1xuICAgICAgX25vcm1hbGl6ZWQ6IHRydWUsXG4gICAgICBwYXRoOiBhbGlhc2VkUGF0aFxuICAgIH0pXG4gICAgaWYgKGFsaWFzZWRNYXRjaCkge1xuICAgICAgdmFyIG1hdGNoZWQgPSBhbGlhc2VkTWF0Y2gubWF0Y2hlZFxuICAgICAgdmFyIGFsaWFzZWRSZWNvcmQgPSBtYXRjaGVkW21hdGNoZWQubGVuZ3RoIC0gMV1cbiAgICAgIGxvY2F0aW9uLnBhcmFtcyA9IGFsaWFzZWRNYXRjaC5wYXJhbXNcbiAgICAgIHJldHVybiBfY3JlYXRlUm91dGUoYWxpYXNlZFJlY29yZCwgbG9jYXRpb24pXG4gICAgfVxuICAgIHJldHVybiBfY3JlYXRlUm91dGUobnVsbCwgbG9jYXRpb24pXG4gIH1cblxuICBmdW5jdGlvbiBfY3JlYXRlUm91dGUgKFxuICAgIHJlY29yZCxcbiAgICBsb2NhdGlvbixcbiAgICByZWRpcmVjdGVkRnJvbVxuICApIHtcbiAgICBpZiAocmVjb3JkICYmIHJlY29yZC5yZWRpcmVjdCkge1xuICAgICAgcmV0dXJuIHJlZGlyZWN0KHJlY29yZCwgcmVkaXJlY3RlZEZyb20gfHwgbG9jYXRpb24pXG4gICAgfVxuICAgIGlmIChyZWNvcmQgJiYgcmVjb3JkLm1hdGNoQXMpIHtcbiAgICAgIHJldHVybiBhbGlhcyhyZWNvcmQsIGxvY2F0aW9uLCByZWNvcmQubWF0Y2hBcylcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZVJvdXRlKHJlY29yZCwgbG9jYXRpb24sIHJlZGlyZWN0ZWRGcm9tKVxuICB9XG5cbiAgcmV0dXJuIG1hdGNoXG59XG5cbmZ1bmN0aW9uIGdldFJvdXRlUmVnZXggKHBhdGgpIHtcbiAgdmFyIGhpdCA9IHJlZ2V4cENhY2hlW3BhdGhdXG4gIHZhciBrZXlzLCByZWdleHBcblxuICBpZiAoaGl0KSB7XG4gICAga2V5cyA9IGhpdC5rZXlzXG4gICAgcmVnZXhwID0gaGl0LnJlZ2V4cFxuICB9IGVsc2Uge1xuICAgIGtleXMgPSBbXVxuICAgIHJlZ2V4cCA9IGluZGV4KHBhdGgsIGtleXMpXG4gICAgcmVnZXhwQ2FjaGVbcGF0aF0gPSB7IGtleXM6IGtleXMsIHJlZ2V4cDogcmVnZXhwIH1cbiAgfVxuXG4gIHJldHVybiB7IGtleXM6IGtleXMsIHJlZ2V4cDogcmVnZXhwIH1cbn1cblxuZnVuY3Rpb24gbWF0Y2hSb3V0ZSAoXG4gIHBhdGgsXG4gIHBhcmFtcyxcbiAgcGF0aG5hbWVcbikge1xuICB2YXIgcmVmID0gZ2V0Um91dGVSZWdleChwYXRoKTtcbiAgdmFyIHJlZ2V4cCA9IHJlZi5yZWdleHA7XG4gIHZhciBrZXlzID0gcmVmLmtleXM7XG4gIHZhciBtID0gcGF0aG5hbWUubWF0Y2gocmVnZXhwKVxuXG4gIGlmICghbSkge1xuICAgIHJldHVybiBmYWxzZVxuICB9IGVsc2UgaWYgKCFwYXJhbXMpIHtcbiAgICByZXR1cm4gdHJ1ZVxuICB9XG5cbiAgZm9yICh2YXIgaSA9IDEsIGxlbiA9IG0ubGVuZ3RoOyBpIDwgbGVuOyArK2kpIHtcbiAgICB2YXIga2V5ID0ga2V5c1tpIC0gMV1cbiAgICB2YXIgdmFsID0gdHlwZW9mIG1baV0gPT09ICdzdHJpbmcnID8gZGVjb2RlVVJJQ29tcG9uZW50KG1baV0pIDogbVtpXVxuICAgIGlmIChrZXkpIHsgcGFyYW1zW2tleS5uYW1lXSA9IHZhbCB9XG4gIH1cblxuICByZXR1cm4gdHJ1ZVxufVxuXG5mdW5jdGlvbiBmaWxsUGFyYW1zIChcbiAgcGF0aCxcbiAgcGFyYW1zLFxuICByb3V0ZU1zZ1xuKSB7XG4gIHRyeSB7XG4gICAgdmFyIGZpbGxlciA9XG4gICAgICByZWdleHBDb21waWxlQ2FjaGVbcGF0aF0gfHxcbiAgICAgIChyZWdleHBDb21waWxlQ2FjaGVbcGF0aF0gPSBpbmRleC5jb21waWxlKHBhdGgpKVxuICAgIHJldHVybiBmaWxsZXIocGFyYW1zIHx8IHt9LCB7IHByZXR0eTogdHJ1ZSB9KVxuICB9IGNhdGNoIChlKSB7XG4gICAgYXNzZXJ0KGZhbHNlLCAoXCJtaXNzaW5nIHBhcmFtIGZvciBcIiArIHJvdXRlTXNnICsgXCI6IFwiICsgKGUubWVzc2FnZSkpKVxuICAgIHJldHVybiAnJ1xuICB9XG59XG5cbmZ1bmN0aW9uIGdldFBhcmFtcyAocGF0aCkge1xuICByZXR1cm4gcmVnZXhwUGFyYW1zQ2FjaGVbcGF0aF0gfHxcbiAgICAocmVnZXhwUGFyYW1zQ2FjaGVbcGF0aF0gPSBnZXRSb3V0ZVJlZ2V4KHBhdGgpLmtleXMubWFwKGZ1bmN0aW9uIChrZXkpIHsgcmV0dXJuIGtleS5uYW1lOyB9KSlcbn1cblxuZnVuY3Rpb24gcmVzb2x2ZVJlY29yZFBhdGggKHBhdGgsIHJlY29yZCkge1xuICByZXR1cm4gcmVzb2x2ZVBhdGgocGF0aCwgcmVjb3JkLnBhcmVudCA/IHJlY29yZC5wYXJlbnQucGF0aCA6ICcvJywgdHJ1ZSlcbn1cblxuLyogICovXG5cbnZhciBpbkJyb3dzZXIgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJ1xuXG52YXIgc3VwcG9ydHNIaXN0b3J5ID0gaW5Ccm93c2VyICYmIChmdW5jdGlvbiAoKSB7XG4gIHZhciB1YSA9IHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50XG5cbiAgaWYgKFxuICAgICh1YS5pbmRleE9mKCdBbmRyb2lkIDIuJykgIT09IC0xIHx8IHVhLmluZGV4T2YoJ0FuZHJvaWQgNC4wJykgIT09IC0xKSAmJlxuICAgIHVhLmluZGV4T2YoJ01vYmlsZSBTYWZhcmknKSAhPT0gLTEgJiZcbiAgICB1YS5pbmRleE9mKCdDaHJvbWUnKSA9PT0gLTEgJiZcbiAgICB1YS5pbmRleE9mKCdXaW5kb3dzIFBob25lJykgPT09IC0xXG4gICkge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgcmV0dXJuIHdpbmRvdy5oaXN0b3J5ICYmICdwdXNoU3RhdGUnIGluIHdpbmRvdy5oaXN0b3J5XG59KSgpXG5cbi8qICAqL1xuXG5mdW5jdGlvbiBydW5RdWV1ZSAocXVldWUsIGZuLCBjYikge1xuICB2YXIgc3RlcCA9IGZ1bmN0aW9uIChpbmRleCkge1xuICAgIGlmIChpbmRleCA+PSBxdWV1ZS5sZW5ndGgpIHtcbiAgICAgIGNiKClcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHF1ZXVlW2luZGV4XSkge1xuICAgICAgICBmbihxdWV1ZVtpbmRleF0sIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBzdGVwKGluZGV4ICsgMSlcbiAgICAgICAgfSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHN0ZXAoaW5kZXggKyAxKVxuICAgICAgfVxuICAgIH1cbiAgfVxuICBzdGVwKDApXG59XG5cbi8qICAqL1xuXG5cbnZhciBIaXN0b3J5ID0gZnVuY3Rpb24gSGlzdG9yeSAocm91dGVyLCBiYXNlKSB7XG4gIHRoaXMucm91dGVyID0gcm91dGVyXG4gIHRoaXMuYmFzZSA9IG5vcm1hbGl6ZUJhc2UoYmFzZSlcbiAgLy8gc3RhcnQgd2l0aCBhIHJvdXRlIG9iamVjdCB0aGF0IHN0YW5kcyBmb3IgXCJub3doZXJlXCJcbiAgdGhpcy5jdXJyZW50ID0gU1RBUlRcbiAgdGhpcy5wZW5kaW5nID0gbnVsbFxufTtcblxuSGlzdG9yeS5wcm90b3R5cGUubGlzdGVuID0gZnVuY3Rpb24gbGlzdGVuIChjYikge1xuICB0aGlzLmNiID0gY2Jcbn07XG5cbkhpc3RvcnkucHJvdG90eXBlLnRyYW5zaXRpb25UbyA9IGZ1bmN0aW9uIHRyYW5zaXRpb25UbyAobG9jYXRpb24sIGNiKSB7XG4gICAgdmFyIHRoaXMkMSA9IHRoaXM7XG5cbiAgdmFyIHJvdXRlID0gdGhpcy5yb3V0ZXIubWF0Y2gobG9jYXRpb24sIHRoaXMuY3VycmVudClcbiAgdGhpcy5jb25maXJtVHJhbnNpdGlvbihyb3V0ZSwgZnVuY3Rpb24gKCkge1xuICAgIHRoaXMkMS51cGRhdGVSb3V0ZShyb3V0ZSlcbiAgICBjYiAmJiBjYihyb3V0ZSlcbiAgICB0aGlzJDEuZW5zdXJlVVJMKClcbiAgfSlcbn07XG5cbkhpc3RvcnkucHJvdG90eXBlLmNvbmZpcm1UcmFuc2l0aW9uID0gZnVuY3Rpb24gY29uZmlybVRyYW5zaXRpb24gKHJvdXRlLCBjYikge1xuICAgIHZhciB0aGlzJDEgPSB0aGlzO1xuXG4gIHZhciBjdXJyZW50ID0gdGhpcy5jdXJyZW50XG4gIGlmIChpc1NhbWVSb3V0ZShyb3V0ZSwgY3VycmVudCkpIHtcbiAgICB0aGlzLmVuc3VyZVVSTCgpXG4gICAgcmV0dXJuXG4gIH1cblxuICB2YXIgcmVmID0gcmVzb2x2ZVF1ZXVlKHRoaXMuY3VycmVudC5tYXRjaGVkLCByb3V0ZS5tYXRjaGVkKTtcbiAgICB2YXIgZGVhY3RpdmF0ZWQgPSByZWYuZGVhY3RpdmF0ZWQ7XG4gICAgdmFyIGFjdGl2YXRlZCA9IHJlZi5hY3RpdmF0ZWQ7XG5cbiAgdmFyIHF1ZXVlID0gW10uY29uY2F0KFxuICAgIC8vIGluLWNvbXBvbmVudCBsZWF2ZSBndWFyZHNcbiAgICBleHRyYWN0TGVhdmVHdWFyZHMoZGVhY3RpdmF0ZWQpLFxuICAgIC8vIGdsb2JhbCBiZWZvcmUgaG9va3NcbiAgICB0aGlzLnJvdXRlci5iZWZvcmVIb29rcyxcbiAgICAvLyBlbnRlciBndWFyZHNcbiAgICBhY3RpdmF0ZWQubWFwKGZ1bmN0aW9uIChtKSB7IHJldHVybiBtLmJlZm9yZUVudGVyOyB9KSxcbiAgICAvLyBhc3luYyBjb21wb25lbnRzXG4gICAgcmVzb2x2ZUFzeW5jQ29tcG9uZW50cyhhY3RpdmF0ZWQpXG4gIClcblxuICB0aGlzLnBlbmRpbmcgPSByb3V0ZVxuICB2YXIgaXRlcmF0b3IgPSBmdW5jdGlvbiAoaG9vaywgbmV4dCkge1xuICAgIGlmICh0aGlzJDEucGVuZGluZyAhPT0gcm91dGUpIHsgcmV0dXJuIH1cbiAgICBob29rKHJvdXRlLCBjdXJyZW50LCBmdW5jdGlvbiAodG8pIHtcbiAgICAgIGlmICh0byA9PT0gZmFsc2UpIHtcbiAgICAgICAgLy8gbmV4dChmYWxzZSkgLT4gYWJvcnQgbmF2aWdhdGlvbiwgZW5zdXJlIGN1cnJlbnQgVVJMXG4gICAgICAgIHRoaXMkMS5lbnN1cmVVUkwodHJ1ZSlcbiAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHRvID09PSAnc3RyaW5nJyB8fCB0eXBlb2YgdG8gPT09ICdvYmplY3QnKSB7XG4gICAgICAgIC8vIG5leHQoJy8nKSBvciBuZXh0KHsgcGF0aDogJy8nIH0pIC0+IHJlZGlyZWN0XG4gICAgICAgIHRoaXMkMS5wdXNoKHRvKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gY29uZmlybSB0cmFuc2l0aW9uIGFuZCBwYXNzIG9uIHRoZSB2YWx1ZVxuICAgICAgICBuZXh0KHRvKVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICBydW5RdWV1ZShxdWV1ZSwgaXRlcmF0b3IsIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgcG9zdEVudGVyQ2JzID0gW11cbiAgICB2YXIgZW50ZXJHdWFyZHMgPSBleHRyYWN0RW50ZXJHdWFyZHMoYWN0aXZhdGVkLCBwb3N0RW50ZXJDYnMsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiB0aGlzJDEuY3VycmVudCA9PT0gcm91dGVcbiAgICB9KVxuICAgIC8vIHdhaXQgdW50aWwgYXN5bmMgY29tcG9uZW50cyBhcmUgcmVzb2x2ZWQgYmVmb3JlXG4gICAgLy8gZXh0cmFjdGluZyBpbi1jb21wb25lbnQgZW50ZXIgZ3VhcmRzXG4gICAgcnVuUXVldWUoZW50ZXJHdWFyZHMsIGl0ZXJhdG9yLCBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAodGhpcyQxLnBlbmRpbmcgPT09IHJvdXRlKSB7XG4gICAgICAgIHRoaXMkMS5wZW5kaW5nID0gbnVsbFxuICAgICAgICBjYihyb3V0ZSlcbiAgICAgICAgdGhpcyQxLnJvdXRlci5hcHAuJG5leHRUaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBwb3N0RW50ZXJDYnMuZm9yRWFjaChmdW5jdGlvbiAoY2IpIHsgcmV0dXJuIGNiKCk7IH0pXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfSlcbiAgfSlcbn07XG5cbkhpc3RvcnkucHJvdG90eXBlLnVwZGF0ZVJvdXRlID0gZnVuY3Rpb24gdXBkYXRlUm91dGUgKHJvdXRlKSB7XG4gIHZhciBwcmV2ID0gdGhpcy5jdXJyZW50XG4gIHRoaXMuY3VycmVudCA9IHJvdXRlXG4gIHRoaXMuY2IgJiYgdGhpcy5jYihyb3V0ZSlcbiAgdGhpcy5yb3V0ZXIuYWZ0ZXJIb29rcy5mb3JFYWNoKGZ1bmN0aW9uIChob29rKSB7XG4gICAgaG9vayAmJiBob29rKHJvdXRlLCBwcmV2KVxuICB9KVxufTtcblxuZnVuY3Rpb24gbm9ybWFsaXplQmFzZSAoYmFzZSkge1xuICBpZiAoIWJhc2UpIHtcbiAgICBpZiAoaW5Ccm93c2VyKSB7XG4gICAgICAvLyByZXNwZWN0IDxiYXNlPiB0YWdcbiAgICAgIHZhciBiYXNlRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdiYXNlJylcbiAgICAgIGJhc2UgPSBiYXNlRWwgPyBiYXNlRWwuZ2V0QXR0cmlidXRlKCdocmVmJykgOiAnLydcbiAgICB9IGVsc2Uge1xuICAgICAgYmFzZSA9ICcvJ1xuICAgIH1cbiAgfVxuICAvLyBtYWtlIHN1cmUgdGhlcmUncyB0aGUgc3RhcnRpbmcgc2xhc2hcbiAgaWYgKGJhc2UuY2hhckF0KDApICE9PSAnLycpIHtcbiAgICBiYXNlID0gJy8nICsgYmFzZVxuICB9XG4gIC8vIHJlbW92ZSB0cmFpbGluZyBzbGFzaFxuICByZXR1cm4gYmFzZS5yZXBsYWNlKC9cXC8kLywgJycpXG59XG5cbmZ1bmN0aW9uIHJlc29sdmVRdWV1ZSAoXG4gIGN1cnJlbnQsXG4gIG5leHRcbikge1xuICB2YXIgaVxuICB2YXIgbWF4ID0gTWF0aC5tYXgoY3VycmVudC5sZW5ndGgsIG5leHQubGVuZ3RoKVxuICBmb3IgKGkgPSAwOyBpIDwgbWF4OyBpKyspIHtcbiAgICBpZiAoY3VycmVudFtpXSAhPT0gbmV4dFtpXSkge1xuICAgICAgYnJlYWtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBhY3RpdmF0ZWQ6IG5leHQuc2xpY2UoaSksXG4gICAgZGVhY3RpdmF0ZWQ6IGN1cnJlbnQuc2xpY2UoaSlcbiAgfVxufVxuXG5mdW5jdGlvbiBleHRyYWN0R3VhcmQgKFxuICBkZWYsXG4gIGtleVxuKSB7XG4gIGlmICh0eXBlb2YgZGVmICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgLy8gZXh0ZW5kIG5vdyBzbyB0aGF0IGdsb2JhbCBtaXhpbnMgYXJlIGFwcGxpZWQuXG4gICAgZGVmID0gX1Z1ZS5leHRlbmQoZGVmKVxuICB9XG4gIHJldHVybiBkZWYub3B0aW9uc1trZXldXG59XG5cbmZ1bmN0aW9uIGV4dHJhY3RMZWF2ZUd1YXJkcyAobWF0Y2hlZCkge1xuICByZXR1cm4gZmxhdHRlbihmbGF0TWFwQ29tcG9uZW50cyhtYXRjaGVkLCBmdW5jdGlvbiAoZGVmLCBpbnN0YW5jZSkge1xuICAgIHZhciBndWFyZCA9IGV4dHJhY3RHdWFyZChkZWYsICdiZWZvcmVSb3V0ZUxlYXZlJylcbiAgICBpZiAoZ3VhcmQpIHtcbiAgICAgIHJldHVybiBBcnJheS5pc0FycmF5KGd1YXJkKVxuICAgICAgICA/IGd1YXJkLm1hcChmdW5jdGlvbiAoZ3VhcmQpIHsgcmV0dXJuIHdyYXBMZWF2ZUd1YXJkKGd1YXJkLCBpbnN0YW5jZSk7IH0pXG4gICAgICAgIDogd3JhcExlYXZlR3VhcmQoZ3VhcmQsIGluc3RhbmNlKVxuICAgIH1cbiAgfSkucmV2ZXJzZSgpKVxufVxuXG5mdW5jdGlvbiB3cmFwTGVhdmVHdWFyZCAoXG4gIGd1YXJkLFxuICBpbnN0YW5jZVxuKSB7XG4gIHJldHVybiBmdW5jdGlvbiByb3V0ZUxlYXZlR3VhcmQgKCkge1xuICAgIHJldHVybiBndWFyZC5hcHBseShpbnN0YW5jZSwgYXJndW1lbnRzKVxuICB9XG59XG5cbmZ1bmN0aW9uIGV4dHJhY3RFbnRlckd1YXJkcyAoXG4gIG1hdGNoZWQsXG4gIGNicyxcbiAgaXNWYWxpZFxuKSB7XG4gIHJldHVybiBmbGF0dGVuKGZsYXRNYXBDb21wb25lbnRzKG1hdGNoZWQsIGZ1bmN0aW9uIChkZWYsIF8sIG1hdGNoLCBrZXkpIHtcbiAgICB2YXIgZ3VhcmQgPSBleHRyYWN0R3VhcmQoZGVmLCAnYmVmb3JlUm91dGVFbnRlcicpXG4gICAgaWYgKGd1YXJkKSB7XG4gICAgICByZXR1cm4gQXJyYXkuaXNBcnJheShndWFyZClcbiAgICAgICAgPyBndWFyZC5tYXAoZnVuY3Rpb24gKGd1YXJkKSB7IHJldHVybiB3cmFwRW50ZXJHdWFyZChndWFyZCwgY2JzLCBtYXRjaCwga2V5LCBpc1ZhbGlkKTsgfSlcbiAgICAgICAgOiB3cmFwRW50ZXJHdWFyZChndWFyZCwgY2JzLCBtYXRjaCwga2V5LCBpc1ZhbGlkKVxuICAgIH1cbiAgfSkpXG59XG5cbmZ1bmN0aW9uIHdyYXBFbnRlckd1YXJkIChcbiAgZ3VhcmQsXG4gIGNicyxcbiAgbWF0Y2gsXG4gIGtleSxcbiAgaXNWYWxpZFxuKSB7XG4gIHJldHVybiBmdW5jdGlvbiByb3V0ZUVudGVyR3VhcmQgKHRvLCBmcm9tLCBuZXh0KSB7XG4gICAgcmV0dXJuIGd1YXJkKHRvLCBmcm9tLCBmdW5jdGlvbiAoY2IpIHtcbiAgICAgIG5leHQoY2IpXG4gICAgICBpZiAodHlwZW9mIGNiID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGNicy5wdXNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAvLyAjNzUwXG4gICAgICAgICAgLy8gaWYgYSByb3V0ZXItdmlldyBpcyB3cmFwcGVkIHdpdGggYW4gb3V0LWluIHRyYW5zaXRpb24sXG4gICAgICAgICAgLy8gdGhlIGluc3RhbmNlIG1heSBub3QgaGF2ZSBiZWVuIHJlZ2lzdGVyZWQgYXQgdGhpcyB0aW1lLlxuICAgICAgICAgIC8vIHdlIHdpbGwgbmVlZCB0byBwb2xsIGZvciByZWdpc3RyYXRpb24gdW50aWwgY3VycmVudCByb3V0ZVxuICAgICAgICAgIC8vIGlzIG5vIGxvbmdlciB2YWxpZC5cbiAgICAgICAgICBwb2xsKGNiLCBtYXRjaC5pbnN0YW5jZXMsIGtleSwgaXNWYWxpZClcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9KVxuICB9XG59XG5cbmZ1bmN0aW9uIHBvbGwgKFxuICBjYiwgLy8gc29tZWhvdyBmbG93IGNhbm5vdCBpbmZlciB0aGlzIGlzIGEgZnVuY3Rpb25cbiAgaW5zdGFuY2VzLFxuICBrZXksXG4gIGlzVmFsaWRcbikge1xuICBpZiAoaW5zdGFuY2VzW2tleV0pIHtcbiAgICBjYihpbnN0YW5jZXNba2V5XSlcbiAgfSBlbHNlIGlmIChpc1ZhbGlkKCkpIHtcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgIHBvbGwoY2IsIGluc3RhbmNlcywga2V5LCBpc1ZhbGlkKVxuICAgIH0sIDE2KVxuICB9XG59XG5cbmZ1bmN0aW9uIHJlc29sdmVBc3luY0NvbXBvbmVudHMgKG1hdGNoZWQpIHtcbiAgcmV0dXJuIGZsYXRNYXBDb21wb25lbnRzKG1hdGNoZWQsIGZ1bmN0aW9uIChkZWYsIF8sIG1hdGNoLCBrZXkpIHtcbiAgICAvLyBpZiBpdCdzIGEgZnVuY3Rpb24gYW5kIGRvZXNuJ3QgaGF2ZSBWdWUgb3B0aW9ucyBhdHRhY2hlZCxcbiAgICAvLyBhc3N1bWUgaXQncyBhbiBhc3luYyBjb21wb25lbnQgcmVzb2x2ZSBmdW5jdGlvbi5cbiAgICAvLyB3ZSBhcmUgbm90IHVzaW5nIFZ1ZSdzIGRlZmF1bHQgYXN5bmMgcmVzb2x2aW5nIG1lY2hhbmlzbSBiZWNhdXNlXG4gICAgLy8gd2Ugd2FudCB0byBoYWx0IHRoZSBuYXZpZ2F0aW9uIHVudGlsIHRoZSBpbmNvbWluZyBjb21wb25lbnQgaGFzIGJlZW5cbiAgICAvLyByZXNvbHZlZC5cbiAgICBpZiAodHlwZW9mIGRlZiA9PT0gJ2Z1bmN0aW9uJyAmJiAhZGVmLm9wdGlvbnMpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbiAodG8sIGZyb20sIG5leHQpIHtcbiAgICAgICAgdmFyIHJlc29sdmUgPSBmdW5jdGlvbiAocmVzb2x2ZWREZWYpIHtcbiAgICAgICAgICBtYXRjaC5jb21wb25lbnRzW2tleV0gPSByZXNvbHZlZERlZlxuICAgICAgICAgIG5leHQoKVxuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHJlamVjdCA9IGZ1bmN0aW9uIChyZWFzb24pIHtcbiAgICAgICAgICB3YXJuKGZhbHNlLCAoXCJGYWlsZWQgdG8gcmVzb2x2ZSBhc3luYyBjb21wb25lbnQgXCIgKyBrZXkgKyBcIjogXCIgKyByZWFzb24pKVxuICAgICAgICAgIG5leHQoZmFsc2UpXG4gICAgICAgIH1cblxuICAgICAgICB2YXIgcmVzID0gZGVmKHJlc29sdmUsIHJlamVjdClcbiAgICAgICAgaWYgKHJlcyAmJiB0eXBlb2YgcmVzLnRoZW4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICByZXMudGhlbihyZXNvbHZlLCByZWplY3QpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0pXG59XG5cbmZ1bmN0aW9uIGZsYXRNYXBDb21wb25lbnRzIChcbiAgbWF0Y2hlZCxcbiAgZm5cbikge1xuICByZXR1cm4gZmxhdHRlbihtYXRjaGVkLm1hcChmdW5jdGlvbiAobSkge1xuICAgIHJldHVybiBPYmplY3Qua2V5cyhtLmNvbXBvbmVudHMpLm1hcChmdW5jdGlvbiAoa2V5KSB7IHJldHVybiBmbihcbiAgICAgIG0uY29tcG9uZW50c1trZXldLFxuICAgICAgbS5pbnN0YW5jZXNba2V5XSxcbiAgICAgIG0sIGtleVxuICAgICk7IH0pXG4gIH0pKVxufVxuXG5mdW5jdGlvbiBmbGF0dGVuIChhcnIpIHtcbiAgcmV0dXJuIEFycmF5LnByb3RvdHlwZS5jb25jYXQuYXBwbHkoW10sIGFycilcbn1cblxuLyogICovXG5cbnZhciBwb3NpdGlvblN0b3JlID0gT2JqZWN0LmNyZWF0ZShudWxsKVxuXG5mdW5jdGlvbiBzYXZlU2Nyb2xsUG9zaXRpb24gKGtleSkge1xuICBpZiAoIWtleSkgeyByZXR1cm4gfVxuICBwb3NpdGlvblN0b3JlW2tleV0gPSB7XG4gICAgeDogd2luZG93LnBhZ2VYT2Zmc2V0LFxuICAgIHk6IHdpbmRvdy5wYWdlWU9mZnNldFxuICB9XG59XG5cbmZ1bmN0aW9uIGdldFNjcm9sbFBvc2l0aW9uIChrZXkpIHtcbiAgaWYgKCFrZXkpIHsgcmV0dXJuIH1cbiAgcmV0dXJuIHBvc2l0aW9uU3RvcmVba2V5XVxufVxuXG5mdW5jdGlvbiBnZXRFbGVtZW50UG9zaXRpb24gKGVsKSB7XG4gIHZhciBkb2NSZWN0ID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gIHZhciBlbFJlY3QgPSBlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuICByZXR1cm4ge1xuICAgIHg6IGVsUmVjdC5sZWZ0IC0gZG9jUmVjdC5sZWZ0LFxuICAgIHk6IGVsUmVjdC50b3AgLSBkb2NSZWN0LnRvcFxuICB9XG59XG5cbmZ1bmN0aW9uIGlzVmFsaWRQb3NpdGlvbiAob2JqKSB7XG4gIHJldHVybiBpc051bWJlcihvYmoueCkgfHwgaXNOdW1iZXIob2JqLnkpXG59XG5cbmZ1bmN0aW9uIG5vcm1hbGl6ZVBvc2l0aW9uIChvYmopIHtcbiAgcmV0dXJuIHtcbiAgICB4OiBpc051bWJlcihvYmoueCkgPyBvYmoueCA6IHdpbmRvdy5wYWdlWE9mZnNldCxcbiAgICB5OiBpc051bWJlcihvYmoueSkgPyBvYmoueSA6IHdpbmRvdy5wYWdlWU9mZnNldFxuICB9XG59XG5cbmZ1bmN0aW9uIGlzTnVtYmVyICh2KSB7XG4gIHJldHVybiB0eXBlb2YgdiA9PT0gJ251bWJlcidcbn1cblxuLyogICovXG5cblxudmFyIGdlbktleSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIFN0cmluZyhEYXRlLm5vdygpKTsgfVxudmFyIF9rZXkgPSBnZW5LZXkoKVxuXG52YXIgSFRNTDVIaXN0b3J5ID0gKGZ1bmN0aW9uIChIaXN0b3J5KSB7XG4gIGZ1bmN0aW9uIEhUTUw1SGlzdG9yeSAocm91dGVyLCBiYXNlKSB7XG4gICAgdmFyIHRoaXMkMSA9IHRoaXM7XG5cbiAgICBIaXN0b3J5LmNhbGwodGhpcywgcm91dGVyLCBiYXNlKVxuXG4gICAgdmFyIGV4cGVjdFNjcm9sbCA9IHJvdXRlci5vcHRpb25zLnNjcm9sbEJlaGF2aW9yXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3BvcHN0YXRlJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgIF9rZXkgPSBlLnN0YXRlICYmIGUuc3RhdGUua2V5XG4gICAgICB2YXIgY3VycmVudCA9IHRoaXMkMS5jdXJyZW50XG4gICAgICB0aGlzJDEudHJhbnNpdGlvblRvKGdldExvY2F0aW9uKHRoaXMkMS5iYXNlKSwgZnVuY3Rpb24gKG5leHQpIHtcbiAgICAgICAgaWYgKGV4cGVjdFNjcm9sbCkge1xuICAgICAgICAgIHRoaXMkMS5oYW5kbGVTY3JvbGwobmV4dCwgY3VycmVudCwgdHJ1ZSlcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9KVxuXG4gICAgaWYgKGV4cGVjdFNjcm9sbCkge1xuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgc2F2ZVNjcm9sbFBvc2l0aW9uKF9rZXkpXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIGlmICggSGlzdG9yeSApIEhUTUw1SGlzdG9yeS5fX3Byb3RvX18gPSBIaXN0b3J5O1xuICBIVE1MNUhpc3RvcnkucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSggSGlzdG9yeSAmJiBIaXN0b3J5LnByb3RvdHlwZSApO1xuICBIVE1MNUhpc3RvcnkucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gSFRNTDVIaXN0b3J5O1xuXG4gIEhUTUw1SGlzdG9yeS5wcm90b3R5cGUuZ28gPSBmdW5jdGlvbiBnbyAobikge1xuICAgIHdpbmRvdy5oaXN0b3J5LmdvKG4pXG4gIH07XG5cbiAgSFRNTDVIaXN0b3J5LnByb3RvdHlwZS5wdXNoID0gZnVuY3Rpb24gcHVzaCAobG9jYXRpb24pIHtcbiAgICB2YXIgdGhpcyQxID0gdGhpcztcblxuICAgIHZhciBjdXJyZW50ID0gdGhpcy5jdXJyZW50XG4gICAgdGhpcy50cmFuc2l0aW9uVG8obG9jYXRpb24sIGZ1bmN0aW9uIChyb3V0ZSkge1xuICAgICAgcHVzaFN0YXRlKGNsZWFuUGF0aCh0aGlzJDEuYmFzZSArIHJvdXRlLmZ1bGxQYXRoKSlcbiAgICAgIHRoaXMkMS5oYW5kbGVTY3JvbGwocm91dGUsIGN1cnJlbnQsIGZhbHNlKVxuICAgIH0pXG4gIH07XG5cbiAgSFRNTDVIaXN0b3J5LnByb3RvdHlwZS5yZXBsYWNlID0gZnVuY3Rpb24gcmVwbGFjZSAobG9jYXRpb24pIHtcbiAgICB2YXIgdGhpcyQxID0gdGhpcztcblxuICAgIHZhciBjdXJyZW50ID0gdGhpcy5jdXJyZW50XG4gICAgdGhpcy50cmFuc2l0aW9uVG8obG9jYXRpb24sIGZ1bmN0aW9uIChyb3V0ZSkge1xuICAgICAgcmVwbGFjZVN0YXRlKGNsZWFuUGF0aCh0aGlzJDEuYmFzZSArIHJvdXRlLmZ1bGxQYXRoKSlcbiAgICAgIHRoaXMkMS5oYW5kbGVTY3JvbGwocm91dGUsIGN1cnJlbnQsIGZhbHNlKVxuICAgIH0pXG4gIH07XG5cbiAgSFRNTDVIaXN0b3J5LnByb3RvdHlwZS5lbnN1cmVVUkwgPSBmdW5jdGlvbiBlbnN1cmVVUkwgKHB1c2gpIHtcbiAgICBpZiAoZ2V0TG9jYXRpb24odGhpcy5iYXNlKSAhPT0gdGhpcy5jdXJyZW50LmZ1bGxQYXRoKSB7XG4gICAgICB2YXIgY3VycmVudCA9IGNsZWFuUGF0aCh0aGlzLmJhc2UgKyB0aGlzLmN1cnJlbnQuZnVsbFBhdGgpXG4gICAgICBwdXNoID8gcHVzaFN0YXRlKGN1cnJlbnQpIDogcmVwbGFjZVN0YXRlKGN1cnJlbnQpXG4gICAgfVxuICB9O1xuXG4gIEhUTUw1SGlzdG9yeS5wcm90b3R5cGUuaGFuZGxlU2Nyb2xsID0gZnVuY3Rpb24gaGFuZGxlU2Nyb2xsICh0bywgZnJvbSwgaXNQb3ApIHtcbiAgICB2YXIgcm91dGVyID0gdGhpcy5yb3V0ZXJcbiAgICBpZiAoIXJvdXRlci5hcHApIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHZhciBiZWhhdmlvciA9IHJvdXRlci5vcHRpb25zLnNjcm9sbEJlaGF2aW9yXG4gICAgaWYgKCFiZWhhdmlvcikge1xuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIGFzc2VydCh0eXBlb2YgYmVoYXZpb3IgPT09ICdmdW5jdGlvbicsIFwic2Nyb2xsQmVoYXZpb3IgbXVzdCBiZSBhIGZ1bmN0aW9uXCIpXG5cbiAgICAvLyB3YWl0IHVudGlsIHJlLXJlbmRlciBmaW5pc2hlcyBiZWZvcmUgc2Nyb2xsaW5nXG4gICAgcm91dGVyLmFwcC4kbmV4dFRpY2soZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIHBvc2l0aW9uID0gZ2V0U2Nyb2xsUG9zaXRpb24oX2tleSlcbiAgICAgIHZhciBzaG91bGRTY3JvbGwgPSBiZWhhdmlvcih0bywgZnJvbSwgaXNQb3AgPyBwb3NpdGlvbiA6IG51bGwpXG4gICAgICBpZiAoIXNob3VsZFNjcm9sbCkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICAgIHZhciBpc09iamVjdCA9IHR5cGVvZiBzaG91bGRTY3JvbGwgPT09ICdvYmplY3QnXG4gICAgICBpZiAoaXNPYmplY3QgJiYgdHlwZW9mIHNob3VsZFNjcm9sbC5zZWxlY3RvciA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgdmFyIGVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzaG91bGRTY3JvbGwuc2VsZWN0b3IpXG4gICAgICAgIGlmIChlbCkge1xuICAgICAgICAgIHBvc2l0aW9uID0gZ2V0RWxlbWVudFBvc2l0aW9uKGVsKVxuICAgICAgICB9IGVsc2UgaWYgKGlzVmFsaWRQb3NpdGlvbihzaG91bGRTY3JvbGwpKSB7XG4gICAgICAgICAgcG9zaXRpb24gPSBub3JtYWxpemVQb3NpdGlvbihzaG91bGRTY3JvbGwpXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoaXNPYmplY3QgJiYgaXNWYWxpZFBvc2l0aW9uKHNob3VsZFNjcm9sbCkpIHtcbiAgICAgICAgcG9zaXRpb24gPSBub3JtYWxpemVQb3NpdGlvbihzaG91bGRTY3JvbGwpXG4gICAgICB9XG5cbiAgICAgIGlmIChwb3NpdGlvbikge1xuICAgICAgICB3aW5kb3cuc2Nyb2xsVG8ocG9zaXRpb24ueCwgcG9zaXRpb24ueSlcbiAgICAgIH1cbiAgICB9KVxuICB9O1xuXG4gIHJldHVybiBIVE1MNUhpc3Rvcnk7XG59KEhpc3RvcnkpKTtcblxuZnVuY3Rpb24gZ2V0TG9jYXRpb24gKGJhc2UpIHtcbiAgdmFyIHBhdGggPSB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWVcbiAgaWYgKGJhc2UgJiYgcGF0aC5pbmRleE9mKGJhc2UpID09PSAwKSB7XG4gICAgcGF0aCA9IHBhdGguc2xpY2UoYmFzZS5sZW5ndGgpXG4gIH1cbiAgcmV0dXJuIChwYXRoIHx8ICcvJykgKyB3aW5kb3cubG9jYXRpb24uc2VhcmNoICsgd2luZG93LmxvY2F0aW9uLmhhc2hcbn1cblxuZnVuY3Rpb24gcHVzaFN0YXRlICh1cmwsIHJlcGxhY2UpIHtcbiAgLy8gdHJ5Li4uY2F0Y2ggdGhlIHB1c2hTdGF0ZSBjYWxsIHRvIGdldCBhcm91bmQgU2FmYXJpXG4gIC8vIERPTSBFeGNlcHRpb24gMTggd2hlcmUgaXQgbGltaXRzIHRvIDEwMCBwdXNoU3RhdGUgY2FsbHNcbiAgdmFyIGhpc3RvcnkgPSB3aW5kb3cuaGlzdG9yeVxuICB0cnkge1xuICAgIGlmIChyZXBsYWNlKSB7XG4gICAgICBoaXN0b3J5LnJlcGxhY2VTdGF0ZSh7IGtleTogX2tleSB9LCAnJywgdXJsKVxuICAgIH0gZWxzZSB7XG4gICAgICBfa2V5ID0gZ2VuS2V5KClcbiAgICAgIGhpc3RvcnkucHVzaFN0YXRlKHsga2V5OiBfa2V5IH0sICcnLCB1cmwpXG4gICAgfVxuICAgIHNhdmVTY3JvbGxQb3NpdGlvbihfa2V5KVxuICB9IGNhdGNoIChlKSB7XG4gICAgd2luZG93LmxvY2F0aW9uW3JlcGxhY2UgPyAnYXNzaWduJyA6ICdyZXBsYWNlJ10odXJsKVxuICB9XG59XG5cbmZ1bmN0aW9uIHJlcGxhY2VTdGF0ZSAodXJsKSB7XG4gIHB1c2hTdGF0ZSh1cmwsIHRydWUpXG59XG5cbi8qICAqL1xuXG5cbnZhciBIYXNoSGlzdG9yeSA9IChmdW5jdGlvbiAoSGlzdG9yeSkge1xuICBmdW5jdGlvbiBIYXNoSGlzdG9yeSAocm91dGVyLCBiYXNlLCBmYWxsYmFjaykge1xuICAgIEhpc3RvcnkuY2FsbCh0aGlzLCByb3V0ZXIsIGJhc2UpXG5cbiAgICAvLyBjaGVjayBoaXN0b3J5IGZhbGxiYWNrIGRlZXBsaW5raW5nXG4gICAgaWYgKGZhbGxiYWNrICYmIHRoaXMuY2hlY2tGYWxsYmFjaygpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBlbnN1cmVTbGFzaCgpXG4gIH1cblxuICBpZiAoIEhpc3RvcnkgKSBIYXNoSGlzdG9yeS5fX3Byb3RvX18gPSBIaXN0b3J5O1xuICBIYXNoSGlzdG9yeS5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKCBIaXN0b3J5ICYmIEhpc3RvcnkucHJvdG90eXBlICk7XG4gIEhhc2hIaXN0b3J5LnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IEhhc2hIaXN0b3J5O1xuXG4gIEhhc2hIaXN0b3J5LnByb3RvdHlwZS5jaGVja0ZhbGxiYWNrID0gZnVuY3Rpb24gY2hlY2tGYWxsYmFjayAoKSB7XG4gICAgdmFyIGxvY2F0aW9uID0gZ2V0TG9jYXRpb24odGhpcy5iYXNlKVxuICAgIGlmICghL15cXC8jLy50ZXN0KGxvY2F0aW9uKSkge1xuICAgICAgd2luZG93LmxvY2F0aW9uLnJlcGxhY2UoXG4gICAgICAgIGNsZWFuUGF0aCh0aGlzLmJhc2UgKyAnLyMnICsgbG9jYXRpb24pXG4gICAgICApXG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cbiAgfTtcblxuICBIYXNoSGlzdG9yeS5wcm90b3R5cGUub25IYXNoQ2hhbmdlID0gZnVuY3Rpb24gb25IYXNoQ2hhbmdlICgpIHtcbiAgICBpZiAoIWVuc3VyZVNsYXNoKCkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICB0aGlzLnRyYW5zaXRpb25UbyhnZXRIYXNoKCksIGZ1bmN0aW9uIChyb3V0ZSkge1xuICAgICAgcmVwbGFjZUhhc2gocm91dGUuZnVsbFBhdGgpXG4gICAgfSlcbiAgfTtcblxuICBIYXNoSGlzdG9yeS5wcm90b3R5cGUucHVzaCA9IGZ1bmN0aW9uIHB1c2ggKGxvY2F0aW9uKSB7XG4gICAgdGhpcy50cmFuc2l0aW9uVG8obG9jYXRpb24sIGZ1bmN0aW9uIChyb3V0ZSkge1xuICAgICAgcHVzaEhhc2gocm91dGUuZnVsbFBhdGgpXG4gICAgfSlcbiAgfTtcblxuICBIYXNoSGlzdG9yeS5wcm90b3R5cGUucmVwbGFjZSA9IGZ1bmN0aW9uIHJlcGxhY2UgKGxvY2F0aW9uKSB7XG4gICAgdGhpcy50cmFuc2l0aW9uVG8obG9jYXRpb24sIGZ1bmN0aW9uIChyb3V0ZSkge1xuICAgICAgcmVwbGFjZUhhc2gocm91dGUuZnVsbFBhdGgpXG4gICAgfSlcbiAgfTtcblxuICBIYXNoSGlzdG9yeS5wcm90b3R5cGUuZ28gPSBmdW5jdGlvbiBnbyAobikge1xuICAgIHdpbmRvdy5oaXN0b3J5LmdvKG4pXG4gIH07XG5cbiAgSGFzaEhpc3RvcnkucHJvdG90eXBlLmVuc3VyZVVSTCA9IGZ1bmN0aW9uIGVuc3VyZVVSTCAocHVzaCkge1xuICAgIHZhciBjdXJyZW50ID0gdGhpcy5jdXJyZW50LmZ1bGxQYXRoXG4gICAgaWYgKGdldEhhc2goKSAhPT0gY3VycmVudCkge1xuICAgICAgcHVzaCA/IHB1c2hIYXNoKGN1cnJlbnQpIDogcmVwbGFjZUhhc2goY3VycmVudClcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIEhhc2hIaXN0b3J5O1xufShIaXN0b3J5KSk7XG5cbmZ1bmN0aW9uIGVuc3VyZVNsYXNoICgpIHtcbiAgdmFyIHBhdGggPSBnZXRIYXNoKClcbiAgaWYgKHBhdGguY2hhckF0KDApID09PSAnLycpIHtcbiAgICByZXR1cm4gdHJ1ZVxuICB9XG4gIHJlcGxhY2VIYXNoKCcvJyArIHBhdGgpXG4gIHJldHVybiBmYWxzZVxufVxuXG5mdW5jdGlvbiBnZXRIYXNoICgpIHtcbiAgLy8gV2UgY2FuJ3QgdXNlIHdpbmRvdy5sb2NhdGlvbi5oYXNoIGhlcmUgYmVjYXVzZSBpdCdzIG5vdFxuICAvLyBjb25zaXN0ZW50IGFjcm9zcyBicm93c2VycyAtIEZpcmVmb3ggd2lsbCBwcmUtZGVjb2RlIGl0IVxuICB2YXIgaHJlZiA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmXG4gIHZhciBpbmRleCA9IGhyZWYuaW5kZXhPZignIycpXG4gIHJldHVybiBpbmRleCA9PT0gLTEgPyAnJyA6IGhyZWYuc2xpY2UoaW5kZXggKyAxKVxufVxuXG5mdW5jdGlvbiBwdXNoSGFzaCAocGF0aCkge1xuICB3aW5kb3cubG9jYXRpb24uaGFzaCA9IHBhdGhcbn1cblxuZnVuY3Rpb24gcmVwbGFjZUhhc2ggKHBhdGgpIHtcbiAgdmFyIGkgPSB3aW5kb3cubG9jYXRpb24uaHJlZi5pbmRleE9mKCcjJylcbiAgd2luZG93LmxvY2F0aW9uLnJlcGxhY2UoXG4gICAgd2luZG93LmxvY2F0aW9uLmhyZWYuc2xpY2UoMCwgaSA+PSAwID8gaSA6IDApICsgJyMnICsgcGF0aFxuICApXG59XG5cbi8qICAqL1xuXG5cbnZhciBBYnN0cmFjdEhpc3RvcnkgPSAoZnVuY3Rpb24gKEhpc3RvcnkpIHtcbiAgZnVuY3Rpb24gQWJzdHJhY3RIaXN0b3J5IChyb3V0ZXIpIHtcbiAgICBIaXN0b3J5LmNhbGwodGhpcywgcm91dGVyKVxuICAgIHRoaXMuc3RhY2sgPSBbXVxuICAgIHRoaXMuaW5kZXggPSAtMVxuICB9XG5cbiAgaWYgKCBIaXN0b3J5ICkgQWJzdHJhY3RIaXN0b3J5Ll9fcHJvdG9fXyA9IEhpc3Rvcnk7XG4gIEFic3RyYWN0SGlzdG9yeS5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKCBIaXN0b3J5ICYmIEhpc3RvcnkucHJvdG90eXBlICk7XG4gIEFic3RyYWN0SGlzdG9yeS5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBBYnN0cmFjdEhpc3Rvcnk7XG5cbiAgQWJzdHJhY3RIaXN0b3J5LnByb3RvdHlwZS5wdXNoID0gZnVuY3Rpb24gcHVzaCAobG9jYXRpb24pIHtcbiAgICB2YXIgdGhpcyQxID0gdGhpcztcblxuICAgIHRoaXMudHJhbnNpdGlvblRvKGxvY2F0aW9uLCBmdW5jdGlvbiAocm91dGUpIHtcbiAgICAgIHRoaXMkMS5zdGFjayA9IHRoaXMkMS5zdGFjay5zbGljZSgwLCB0aGlzJDEuaW5kZXggKyAxKS5jb25jYXQocm91dGUpXG4gICAgICB0aGlzJDEuaW5kZXgrK1xuICAgIH0pXG4gIH07XG5cbiAgQWJzdHJhY3RIaXN0b3J5LnByb3RvdHlwZS5yZXBsYWNlID0gZnVuY3Rpb24gcmVwbGFjZSAobG9jYXRpb24pIHtcbiAgICB2YXIgdGhpcyQxID0gdGhpcztcblxuICAgIHRoaXMudHJhbnNpdGlvblRvKGxvY2F0aW9uLCBmdW5jdGlvbiAocm91dGUpIHtcbiAgICAgIHRoaXMkMS5zdGFjayA9IHRoaXMkMS5zdGFjay5zbGljZSgwLCB0aGlzJDEuaW5kZXgpLmNvbmNhdChyb3V0ZSlcbiAgICB9KVxuICB9O1xuXG4gIEFic3RyYWN0SGlzdG9yeS5wcm90b3R5cGUuZ28gPSBmdW5jdGlvbiBnbyAobikge1xuICAgIHZhciB0aGlzJDEgPSB0aGlzO1xuXG4gICAgdmFyIHRhcmdldEluZGV4ID0gdGhpcy5pbmRleCArIG5cbiAgICBpZiAodGFyZ2V0SW5kZXggPCAwIHx8IHRhcmdldEluZGV4ID49IHRoaXMuc3RhY2subGVuZ3RoKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgdmFyIHJvdXRlID0gdGhpcy5zdGFja1t0YXJnZXRJbmRleF1cbiAgICB0aGlzLmNvbmZpcm1UcmFuc2l0aW9uKHJvdXRlLCBmdW5jdGlvbiAoKSB7XG4gICAgICB0aGlzJDEuaW5kZXggPSB0YXJnZXRJbmRleFxuICAgICAgdGhpcyQxLnVwZGF0ZVJvdXRlKHJvdXRlKVxuICAgIH0pXG4gIH07XG5cbiAgQWJzdHJhY3RIaXN0b3J5LnByb3RvdHlwZS5lbnN1cmVVUkwgPSBmdW5jdGlvbiBlbnN1cmVVUkwgKCkge1xuICAgIC8vIG5vb3BcbiAgfTtcblxuICByZXR1cm4gQWJzdHJhY3RIaXN0b3J5O1xufShIaXN0b3J5KSk7XG5cbi8qICAqL1xuXG52YXIgVnVlUm91dGVyID0gZnVuY3Rpb24gVnVlUm91dGVyIChvcHRpb25zKSB7XG4gIGlmICggb3B0aW9ucyA9PT0gdm9pZCAwICkgb3B0aW9ucyA9IHt9O1xuXG4gIHRoaXMuYXBwID0gbnVsbFxuICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zXG4gIHRoaXMuYmVmb3JlSG9va3MgPSBbXVxuICB0aGlzLmFmdGVySG9va3MgPSBbXVxuICB0aGlzLm1hdGNoID0gY3JlYXRlTWF0Y2hlcihvcHRpb25zLnJvdXRlcyB8fCBbXSlcblxuICB2YXIgbW9kZSA9IG9wdGlvbnMubW9kZSB8fCAnaGFzaCdcbiAgdGhpcy5mYWxsYmFjayA9IG1vZGUgPT09ICdoaXN0b3J5JyAmJiAhc3VwcG9ydHNIaXN0b3J5XG4gIGlmICh0aGlzLmZhbGxiYWNrKSB7XG4gICAgbW9kZSA9ICdoYXNoJ1xuICB9XG4gIGlmICghaW5Ccm93c2VyKSB7XG4gICAgbW9kZSA9ICdhYnN0cmFjdCdcbiAgfVxuICB0aGlzLm1vZGUgPSBtb2RlXG5cbiAgc3dpdGNoIChtb2RlKSB7XG4gICAgY2FzZSAnaGlzdG9yeSc6XG4gICAgICB0aGlzLmhpc3RvcnkgPSBuZXcgSFRNTDVIaXN0b3J5KHRoaXMsIG9wdGlvbnMuYmFzZSlcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAnaGFzaCc6XG4gICAgICB0aGlzLmhpc3RvcnkgPSBuZXcgSGFzaEhpc3RvcnkodGhpcywgb3B0aW9ucy5iYXNlLCB0aGlzLmZhbGxiYWNrKVxuICAgICAgYnJlYWtcbiAgICBjYXNlICdhYnN0cmFjdCc6XG4gICAgICB0aGlzLmhpc3RvcnkgPSBuZXcgQWJzdHJhY3RIaXN0b3J5KHRoaXMpXG4gICAgICBicmVha1xuICAgIGRlZmF1bHQ6XG4gICAgICBhc3NlcnQoZmFsc2UsIChcImludmFsaWQgbW9kZTogXCIgKyBtb2RlKSlcbiAgfVxufTtcblxudmFyIHByb3RvdHlwZUFjY2Vzc29ycyA9IHsgY3VycmVudFJvdXRlOiB7fSB9O1xuXG5wcm90b3R5cGVBY2Nlc3NvcnMuY3VycmVudFJvdXRlLmdldCA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHRoaXMuaGlzdG9yeSAmJiB0aGlzLmhpc3RvcnkuY3VycmVudFxufTtcblxuVnVlUm91dGVyLnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24gaW5pdCAoYXBwIC8qIFZ1ZSBjb21wb25lbnQgaW5zdGFuY2UgKi8pIHtcbiAgICB2YXIgdGhpcyQxID0gdGhpcztcblxuICBhc3NlcnQoXG4gICAgaW5zdGFsbC5pbnN0YWxsZWQsXG4gICAgXCJub3QgaW5zdGFsbGVkLiBNYWtlIHN1cmUgdG8gY2FsbCBgVnVlLnVzZShWdWVSb3V0ZXIpYCBcIiArXG4gICAgXCJiZWZvcmUgY3JlYXRpbmcgcm9vdCBpbnN0YW5jZS5cIlxuICApXG5cbiAgdGhpcy5hcHAgPSBhcHBcblxuICB2YXIgaGlzdG9yeSA9IHRoaXMuaGlzdG9yeVxuXG4gIGlmIChoaXN0b3J5IGluc3RhbmNlb2YgSFRNTDVIaXN0b3J5KSB7XG4gICAgaGlzdG9yeS50cmFuc2l0aW9uVG8oZ2V0TG9jYXRpb24oaGlzdG9yeS5iYXNlKSlcbiAgfSBlbHNlIGlmIChoaXN0b3J5IGluc3RhbmNlb2YgSGFzaEhpc3RvcnkpIHtcbiAgICBoaXN0b3J5LnRyYW5zaXRpb25UbyhnZXRIYXNoKCksIGZ1bmN0aW9uICgpIHtcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdoYXNoY2hhbmdlJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBoaXN0b3J5Lm9uSGFzaENoYW5nZSgpXG4gICAgICB9KVxuICAgIH0pXG4gIH1cblxuICBoaXN0b3J5Lmxpc3RlbihmdW5jdGlvbiAocm91dGUpIHtcbiAgICB0aGlzJDEuYXBwLl9yb3V0ZSA9IHJvdXRlXG4gIH0pXG59O1xuXG5WdWVSb3V0ZXIucHJvdG90eXBlLmJlZm9yZUVhY2ggPSBmdW5jdGlvbiBiZWZvcmVFYWNoIChmbikge1xuICB0aGlzLmJlZm9yZUhvb2tzLnB1c2goZm4pXG59O1xuXG5WdWVSb3V0ZXIucHJvdG90eXBlLmFmdGVyRWFjaCA9IGZ1bmN0aW9uIGFmdGVyRWFjaCAoZm4pIHtcbiAgdGhpcy5hZnRlckhvb2tzLnB1c2goZm4pXG59O1xuXG5WdWVSb3V0ZXIucHJvdG90eXBlLnB1c2ggPSBmdW5jdGlvbiBwdXNoIChsb2NhdGlvbikge1xuICB0aGlzLmhpc3RvcnkucHVzaChsb2NhdGlvbilcbn07XG5cblZ1ZVJvdXRlci5wcm90b3R5cGUucmVwbGFjZSA9IGZ1bmN0aW9uIHJlcGxhY2UgKGxvY2F0aW9uKSB7XG4gIHRoaXMuaGlzdG9yeS5yZXBsYWNlKGxvY2F0aW9uKVxufTtcblxuVnVlUm91dGVyLnByb3RvdHlwZS5nbyA9IGZ1bmN0aW9uIGdvIChuKSB7XG4gIHRoaXMuaGlzdG9yeS5nbyhuKVxufTtcblxuVnVlUm91dGVyLnByb3RvdHlwZS5iYWNrID0gZnVuY3Rpb24gYmFjayAoKSB7XG4gIHRoaXMuZ28oLTEpXG59O1xuXG5WdWVSb3V0ZXIucHJvdG90eXBlLmZvcndhcmQgPSBmdW5jdGlvbiBmb3J3YXJkICgpIHtcbiAgdGhpcy5nbygxKVxufTtcblxuVnVlUm91dGVyLnByb3RvdHlwZS5nZXRNYXRjaGVkQ29tcG9uZW50cyA9IGZ1bmN0aW9uIGdldE1hdGNoZWRDb21wb25lbnRzICgpIHtcbiAgaWYgKCF0aGlzLmN1cnJlbnRSb3V0ZSkge1xuICAgIHJldHVybiBbXVxuICB9XG4gIHJldHVybiBbXS5jb25jYXQuYXBwbHkoW10sIHRoaXMuY3VycmVudFJvdXRlLm1hdGNoZWQubWFwKGZ1bmN0aW9uIChtKSB7XG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKG0uY29tcG9uZW50cykubWFwKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgIHJldHVybiBtLmNvbXBvbmVudHNba2V5XVxuICAgIH0pXG4gIH0pKVxufTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoIFZ1ZVJvdXRlci5wcm90b3R5cGUsIHByb3RvdHlwZUFjY2Vzc29ycyApO1xuXG5WdWVSb3V0ZXIuaW5zdGFsbCA9IGluc3RhbGxcblxuaWYgKGluQnJvd3NlciAmJiB3aW5kb3cuVnVlKSB7XG4gIHdpbmRvdy5WdWUudXNlKFZ1ZVJvdXRlcilcbn1cblxucmV0dXJuIFZ1ZVJvdXRlcjtcblxufSkpKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9FOi9UZXN0V29yay92dWUvfi92dWUtcm91dGVyL2Rpc3QvdnVlLXJvdXRlci5qcyIsIi8qKlxyXG4gKiDmj4/ov7A6IOi3r+eUsemFjee9ruaWh+S7tlxyXG4gKiDniYjmnYM6IENvcHlyaWdodCAoYykgMjAxNlxyXG4gKiDlhazlj7g6IOa3seWcs+W4guaYiuaZqOenkeaKgOW8gOWPkeaciemZkOWFrOWPuFxyXG4gKiDkvZzogIU6IOmZiOWFg1xyXG4gKiDniYjmnKw6IDEuMFxyXG4gKiDliJvlu7rml6XmnJ86IDIwMTYvMTEvMjNcclxuICog5Yib5bu65pe26Ze0OiAxMDoxMVxyXG4gKi9cclxubGV0IEluZGV4VmlldyA9IHJlcXVpcmUoXCIuL3ZpZXdzL2luZGV4LnZ1ZVwiKTtcclxuXHJcbi8vIDIuIOWumuS5iei3r+eUsVxyXG5jb25zdCByb3V0ZXMgPSBbXHJcbiAgICB7XHJcbiAgICAgICAgbmFtZTogXCJmb29cIixcclxuICAgICAgICBwYXRoOiAnL2ZvbycsXHJcbiAgICAgICAgY29tcG9uZW50OiB7dGVtcGxhdGU6ICc8ZGl2PmZvbzwvZGl2Pid9XHJcbiAgICB9LCB7XHJcbiAgICAgICAgbmFtZTogXCJiYXJcIixcclxuICAgICAgICBwYXRoOiAnL2JhcicsXHJcbiAgICAgICAgY29tcG9uZW50OiB7dGVtcGxhdGU6ICc8ZGl2PmJhcjwvZGl2Pid9XHJcbiAgICB9LCB7XHJcbiAgICAgICAgcGF0aDogJy9pbmRleCcsXHJcbiAgICAgICAgY29tcG9uZW50OiBJbmRleFZpZXdcclxuICAgIH1cclxuXTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJvdXRlcztcclxuZXhwb3J0IHtyb3V0ZXN9O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0U6L1Rlc3RXb3JrL3Z1ZS9zcmMvcm91dGVyLmpzIiwidmFyIF9fdnVlX2V4cG9ydHNfXywgX192dWVfb3B0aW9uc19fXG52YXIgX192dWVfc3R5bGVzX18gPSB7fVxuXG4vKiBzY3JpcHQgKi9cbl9fdnVlX2V4cG9ydHNfXyA9IHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlciF2dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vaW5kZXgudnVlXCIpXG5cbi8qIHRlbXBsYXRlICovXG52YXIgX192dWVfdGVtcGxhdGVfXyA9IHJlcXVpcmUoXCIhIXZ1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP2lkPWRhdGEtdi01Y2FhOTFlNiF2dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9pbmRleC52dWVcIilcbl9fdnVlX29wdGlvbnNfXyA9IF9fdnVlX2V4cG9ydHNfXyA9IF9fdnVlX2V4cG9ydHNfXyB8fCB7fVxuaWYgKFxuICB0eXBlb2YgX192dWVfZXhwb3J0c19fLmRlZmF1bHQgPT09IFwib2JqZWN0XCIgfHxcbiAgdHlwZW9mIF9fdnVlX2V4cG9ydHNfXy5kZWZhdWx0ID09PSBcImZ1bmN0aW9uXCJcbikge1xuaWYgKE9iamVjdC5rZXlzKF9fdnVlX2V4cG9ydHNfXykuc29tZShmdW5jdGlvbiAoa2V5KSB7IHJldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleSAhPT0gXCJfX2VzTW9kdWxlXCIgfSkpIHtjb25zb2xlLmVycm9yKFwibmFtZWQgZXhwb3J0cyBhcmUgbm90IHN1cHBvcnRlZCBpbiAqLnZ1ZSBmaWxlcy5cIil9XG5fX3Z1ZV9vcHRpb25zX18gPSBfX3Z1ZV9leHBvcnRzX18gPSBfX3Z1ZV9leHBvcnRzX18uZGVmYXVsdFxufVxuaWYgKHR5cGVvZiBfX3Z1ZV9vcHRpb25zX18gPT09IFwiZnVuY3Rpb25cIikge1xuICBfX3Z1ZV9vcHRpb25zX18gPSBfX3Z1ZV9vcHRpb25zX18ub3B0aW9uc1xufVxuX192dWVfb3B0aW9uc19fLl9fZmlsZSA9IFwiRTpcXFxcVGVzdFdvcmtcXFxcdnVlXFxcXHNyY1xcXFx2aWV3c1xcXFxpbmRleC52dWVcIlxuX192dWVfb3B0aW9uc19fLnJlbmRlciA9IF9fdnVlX3RlbXBsYXRlX18ucmVuZGVyXG5fX3Z1ZV9vcHRpb25zX18uc3RhdGljUmVuZGVyRm5zID0gX192dWVfdGVtcGxhdGVfXy5zdGF0aWNSZW5kZXJGbnNcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTVjYWE5MWU2XCIsIF9fdnVlX29wdGlvbnNfXylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTVjYWE5MWU2XCIsIF9fdnVlX29wdGlvbnNfXylcbiAgfVxufSkoKX1cbmlmIChfX3Z1ZV9vcHRpb25zX18uZnVuY3Rpb25hbCkge2NvbnNvbGUuZXJyb3IoXCJbdnVlLWxvYWRlcl0gaW5kZXgudnVlOiBmdW5jdGlvbmFsIGNvbXBvbmVudHMgYXJlIG5vdCBzdXBwb3J0ZWQgYW5kIHNob3VsZCBiZSBkZWZpbmVkIGluIHBsYWluIGpzIGZpbGVzIHVzaW5nIHJlbmRlciBmdW5jdGlvbnMuXCIpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9fdnVlX2V4cG9ydHNfX1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvdmlld3MvaW5kZXgudnVlXG4vLyBtb2R1bGUgaWQgPSA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIjx0ZW1wbGF0ZT5cclxuICAgIDxoMT5BdXRoIEZsb3d7e2xvZ2dlZElufX08L2gxPlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuICAgIGxldCBwYWdlID0ge1xyXG4gICAgICAgIGRhdGE6IGZ1bmN0aW9uICgpe1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgbG9nZ2VkSW46IFwiVEVTVFwiXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGNyZWF0ZWQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ0BAQEBAQEBAQEBAQEAnKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBwYWdlO1xyXG48L3NjcmlwdD5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gaW5kZXgudnVlPzdkZjRjZmQ4IiwibW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7XG4gIHJldHVybiBfdm0uX2goJ2gxJywgW1wiQXV0aCBGbG93XCIgKyBfdm0uX3MoX3ZtLmxvZ2dlZEluKV0pXG59LHN0YXRpY1JlbmRlckZuczogW119XG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKS5yZXJlbmRlcihcImRhdGEtdi01Y2FhOTFlNlwiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci5qcz9pZD1kYXRhLXYtNWNhYTkxZTYhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3NyYy92aWV3cy9pbmRleC52dWVcbi8vIG1vZHVsZSBpZCA9IDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==