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
	
	var _user = __webpack_require__(4);
	
	var _user2 = _interopRequireDefault(_user);
	
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
	var IndexView = __webpack_require__(11); // 引入indexVue
	
	
	// 定义路由
	var routes = [{
	    name: "foo",
	    path: '/foo',
	    component: { template: '<div>foo</div>' }
	}, {
	    path: '/index',
	    component: IndexView
	}, {
	    path: '/user',
	    component: _user2.default
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
	/**
	 * 描述:
	 * 版权: Copyright (c) 2016
	 * 公司: 深圳市昊晨科技开发有限公司
	 * 作者: 陈元
	 * 版本: 1.0
	 * 创建日期: 2016/11/23
	 * 创建时间: 16:27
	 */
	
	var UserView = __webpack_require__(5);
	
	UserView.data = function () {
	    return {
	        name: "UserView"
	    };
	};
	UserView.created = function () {
	    console.log('================UserView Created================');
	};
	
	exports.default = UserView;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* styles */
	__webpack_require__(6)
	
	/* template */
	var __vue_template__ = __webpack_require__(10)
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
	__vue_options__.__file = "E:\\TestWork\\vue\\src\\views\\user.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-ab751c32", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-ab751c32", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] user.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(7);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(9)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js?sourceMap!./../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-ab751c32!./../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./user.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js?sourceMap!./../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-ab751c32!./../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./user.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(8)();
	// imports
	
	
	// module
	exports.push([module.id, "\nh1 {\n    color: #F00;\n}\n", "", {"version":3,"sources":["/./src/views/user.vue?df50457a"],"names":[],"mappings":";AAKA;IACA,YAAA;CACA","file":"user.vue","sourcesContent":["<template>\r\n    <h1>Hello {{name}}</h1>\r\n</template>\r\n\r\n<style>\r\n    h1 {\r\n        color: #F00;\r\n    }\r\n</style>"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 8 */
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
/* 9 */
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
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;
	  return _vm._h('h1', ["Hello " + _vm._s(_vm.name)])
	},staticRenderFns: []}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-ab751c32", module.exports)
	  }
	}

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* styles */
	__webpack_require__(12)
	
	/* script */
	__vue_exports__ = __webpack_require__(14)
	
	/* template */
	var __vue_template__ = __webpack_require__(15)
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
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(13);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(9)(content, {});
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
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(8)();
	// imports
	
	
	// module
	exports.push([module.id, "\nh1 {\n    color: #F00;\n}\n", "", {"version":3,"sources":["/./src/views/index.vue?404fa48a"],"names":[],"mappings":";AAKA;IACA,YAAA;CACA","file":"index.vue","sourcesContent":["<template>\r\n    <h1>Auth Flow{{loggedIn}}</h1>\r\n</template>\r\n\r\n<style>\r\n    h1 {\r\n        color: #F00;\r\n    }\r\n</style>\r\n\r\n<script>\r\n    class test {\r\n        data() {\r\n            return {\r\n                loggedIn: \"TEST\"\r\n            }\r\n        }\r\n\r\n        created() {\r\n            console.log('@@@@@@@@@@@@@');\r\n        }\r\n    }\r\n    let page = {\r\n        data: function () {\r\n            return {\r\n                loggedIn: \"TEST\"\r\n            }\r\n        },\r\n        created: function () {\r\n            console.log('@@@@@@@@@@@@@');\r\n        }\r\n    };\r\n    module.exports = page;\r\n</script>"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 14 */
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
/* 15 */
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMzY4YTEwNDc4MWIxMzJmNWY1ODYiLCJ3ZWJwYWNrOi8vLy4vRTovVGVzdFdvcmsvdnVlL3NyYy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vRTovVGVzdFdvcmsvdnVlL34vdnVlL2Rpc3QvdnVlLm1pbi5qcyIsIndlYnBhY2s6Ly8vLi9FOi9UZXN0V29yay92dWUvfi92dWUtcm91dGVyL2Rpc3QvdnVlLXJvdXRlci5qcyIsIndlYnBhY2s6Ly8vLi9FOi9UZXN0V29yay92dWUvc3JjL3JvdXRlci5qcyIsIndlYnBhY2s6Ly8vLi9FOi9UZXN0V29yay92dWUvc3JjL3NjcmlwdHMvdXNlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvdXNlci52dWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL3VzZXIudnVlPzIwMmQiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL3VzZXIudnVlPzM4MjUiLCJ3ZWJwYWNrOi8vLy4vRTovVGVzdFdvcmsvdnVlL34vY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanMiLCJ3ZWJwYWNrOi8vLy4vfi92dWUtc3R5bGUtbG9hZGVyL2FkZFN0eWxlcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvdXNlci52dWU/NDgyZiIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvaW5kZXgudnVlIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9pbmRleC52dWU/MzBmOSIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvaW5kZXgudnVlPzQyZTciLCJ3ZWJwYWNrOi8vL2luZGV4LnZ1ZSIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvaW5kZXgudnVlPzYwYTkiXSwibmFtZXMiOlsidXNlIiwicm91dGVyIiwicm91dGVzIiwiYXBwIiwiJG1vdW50IiwiZSIsInQiLCJleHBvcnRzIiwibW9kdWxlIiwiVnVlIiwiSlNPTiIsInN0cmluZ2lmeSIsIlN0cmluZyIsInBhcnNlRmxvYXQiLCJuIiwiT2JqZWN0IiwiY3JlYXRlIiwiciIsInNwbGl0IiwiaSIsImxlbmd0aCIsInRvTG93ZXJDYXNlIiwiaW5kZXhPZiIsInNwbGljZSIsIlVyIiwiY2FsbCIsIm8iLCJhIiwicyIsImFyZ3VtZW50cyIsImFwcGx5IiwiX2xlbmd0aCIsImMiLCJBcnJheSIsImwiLCJ1IiwiZiIsInFyIiwiV3IiLCJkIiwicCIsInYiLCJyZWR1Y2UiLCJjb25jYXQiLCJzdGF0aWNLZXlzIiwiam9pbiIsImgiLCJtIiwiZyIsImNoYXJDb2RlQXQiLCJ5IiwiZGVmaW5lUHJvcGVydHkiLCJ2YWx1ZSIsImVudW1lcmFibGUiLCJ3cml0YWJsZSIsImNvbmZpZ3VyYWJsZSIsIl8iLCJHciIsInRlc3QiLCJiIiwidG9TdHJpbmciLCIkIiwiZGkiLCJ0YXJnZXQiLCJwaSIsInB1c2giLCJ3IiwicG9wIiwieCIsIl9fcHJvdG9fXyIsIkMiLCJrIiwiX19vYl9fIiwieWkiLCJnaSIsInNob3VsZENvbnZlcnQiLCJvaSIsImlzQXJyYXkiLCJpc0V4dGVuc2libGUiLCJfaXNWdWUiLCJBIiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIiwiZ2V0Iiwic2V0IiwiZGVwZW5kIiwiZGVwIiwiVCIsIm5vdGlmeSIsIk8iLCJNYXRoIiwibWF4Iiwidm1Db3VudCIsIlMiLCJqIiwia2V5cyIsIkUiLCJOIiwiTCIsInByb3BzIiwiVnIiLCJ0eXBlIiwiRCIsImRpcmVjdGl2ZXMiLCJiaW5kIiwidXBkYXRlIiwiTSIsIl9pIiwiYmkiLCJleHRlbmRzIiwib3B0aW9ucyIsIm1peGlucyIsInByb3RvdHlwZSIsIlJlIiwiUCIsInpyIiwiUiIsIkIiLCJLciIsIkkiLCJkZWZhdWx0IiwiJG9wdGlvbnMiLCJwcm9wc0RhdGEiLCJGdW5jdGlvbiIsIkYiLCJtYXRjaCIsIlUiLCJ3aSIsInhpIiwiQ2kiLCJraSIsIkgiLCJzb3J0IiwiaWQiLCJBaSIsInJ1biIsImxpIiwiZGV2dG9vbHMiLCJhaSIsImVtaXQiLCJWIiwic2kiLCJ6IiwiVGkiLCJjbGVhciIsIkoiLCJoYXMiLCJhZGQiLCJLIiwiX3dhdGNoZXJzIiwicSIsIlciLCJaIiwiWSIsIlEiLCJfcHJvcEtleXMiLCIkcGFyZW50IiwiZGF0YSIsIl9kYXRhIiwidGUiLCJjb21wdXRlZCIsImppIiwiRyIsImNhY2hlIiwiU2kiLCJsYXp5IiwiZGlydHkiLCJldmFsdWF0ZSIsIm1ldGhvZHMiLCJ3YXRjaCIsIlgiLCJoYW5kbGVyIiwiJHdhdGNoIiwiZWUiLCIkc2V0IiwiJGRlbGV0ZSIsInVzZXIiLCJpbW1lZGlhdGUiLCJ0ZWFyZG93biIsIm5lIiwiRWkiLCJ0YWciLCJjaGlsZHJlbiIsInRleHQiLCJlbG0iLCJucyIsImNvbnRleHQiLCJjb21wb25lbnRPcHRpb25zIiwiaXNTdGF0aWMiLCJrZXkiLCJpc0Nsb25lZCIsInJlIiwiaWUiLCJfX2luamVjdGVkIiwib2UiLCJmbiIsImNoYXJBdCIsInNsaWNlIiwiaW52b2tlciIsImFlIiwic2UiLCJjZSIsImxlIiwidWUiLCJmZSIsImZpbHRlciIsImRlIiwicGFyZW50IiwiYWJzdHJhY3QiLCIkY2hpbGRyZW4iLCIkcm9vdCIsIiRyZWZzIiwiX3dhdGNoZXIiLCJfaW5hY3RpdmUiLCJfaXNNb3VudGVkIiwiX2lzRGVzdHJveWVkIiwiX2lzQmVpbmdEZXN0cm95ZWQiLCJwZSIsIl9tb3VudCIsIiRlbCIsInJlbmRlciIsIk5pIiwidmUiLCJfdXBkYXRlIiwiX3JlbmRlciIsIiR2bm9kZSIsIkxpIiwiX3Zub2RlIiwiX19wYXRjaF9fIiwiX192dWVfXyIsIl91cGRhdGVGcm9tUGFyZW50IiwiX3JlbmRlckNoaWxkcmVuIiwiX3BhcmVudFZub2RlIiwiX3BhcmVudExpc3RlbmVycyIsIl91cGRhdGVMaXN0ZW5lcnMiLCIkc2xvdHMiLCJFZSIsIl9yZW5kZXJDb250ZXh0IiwiJGZvcmNlVXBkYXRlIiwiJGRlc3Ryb3kiLCIkb2ZmIiwiJGVtaXQiLCJoZSIsIl9iYXNlIiwiZXh0ZW5kIiwiY2lkIiwicmVzb2x2ZWQiLCJ3ZSIsIlBlIiwieGUiLCJmdW5jdGlvbmFsIiwibWUiLCJvbiIsIm5hdGl2ZU9uIiwia2UiLCJuYW1lIiwiQ3RvciIsImxpc3RlbmVycyIsIk9lIiwiX3NlbGYiLCJzbG90cyIsImZ1bmN0aW9uYWxDb250ZXh0Iiwic2xvdCIsImdlIiwiX2lzQ29tcG9uZW50IiwiX2NvbXBvbmVudFRhZyIsImlubGluZVRlbXBsYXRlIiwic3RhdGljUmVuZGVyRm5zIiwieWUiLCJjaGlsZCIsImtlZXBBbGl2ZSIsIl9lIiwiYmUiLCIkZSIsInJlcXVlc3RlZCIsInBlbmRpbmdDYWxsYmFja3MiLCJ0aGVuIiwiYXR0cnMiLCJkb21Qcm9wcyIsIkNlIiwiaG9vayIsIk1pIiwiRGkiLCJBZSIsIlNlIiwic2NvcGVkU2xvdHMiLCJnZXRUYWdOYW1lc3BhY2UiLCJpc1Jlc2VydmVkVGFnIiwiVGUiLCJfc3RhdGljVHJlZXMiLCIkc2NvcGVkU2xvdHMiLCIkY3JlYXRlRWxlbWVudCIsImVsIiwiamUiLCJpc09uY2UiLCIkbmV4dFRpY2siLCJfcmVuZGVyUHJveHkiLCJlcnJvckhhbmRsZXIiLCJjb25zb2xlIiwiZXJyb3IiLCJfaCIsIl9zIiwiX24iLCJfcSIsIl9tIiwiX28iLCJfZiIsIl9sIiwiX3QiLCJfYiIsIm11c3RVc2VQcm9wIiwiX2siLCJrZXlDb2RlcyIsImlzQ29tbWVudCIsIk5lIiwiX2V2ZW50cyIsIiRvbiIsIkxlIiwiJG9uY2UiLCJEZSIsIl9pbml0IiwiX3VpZCIsIlBpIiwiTWUiLCJjb25zdHJ1Y3RvciIsInN1cGVyIiwic3VwZXJPcHRpb25zIiwiZXh0ZW5kT3B0aW9ucyIsIl9zY29wZUlkIiwiY29tcG9uZW50cyIsIkllIiwiaW5zdGFsbGVkIiwidW5zaGlmdCIsImluc3RhbGwiLCJGZSIsIm1peGluIiwiQmUiLCJfQ3RvciIsIl9hc3NldFR5cGVzIiwiZm9yRWFjaCIsIlVlIiwiSGUiLCJWZSIsInV0aWwiLCIkaSIsImRlbGV0ZSIsIm5leHRUaWNrIiwiRmkiLCJ6ZSIsIkplIiwiS2UiLCJzdGF0aWNDbGFzcyIsInFlIiwiY2xhc3MiLCJXZSIsIlplIiwiWGkiLCJHZSIsIlFyIiwidG8iLCJubyIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsIndpbmRvdyIsIkhUTUxVbmtub3duRWxlbWVudCIsIkhUTUxFbGVtZW50IiwiWWUiLCJxdWVyeVNlbGVjdG9yIiwiUWUiLCJzZXRBdHRyaWJ1dGUiLCJYZSIsImNyZWF0ZUVsZW1lbnROUyIsIldpIiwiZXQiLCJjcmVhdGVUZXh0Tm9kZSIsInR0IiwiY3JlYXRlQ29tbWVudCIsIm50IiwiaW5zZXJ0QmVmb3JlIiwicnQiLCJyZW1vdmVDaGlsZCIsIml0IiwiYXBwZW5kQ2hpbGQiLCJvdCIsInBhcmVudE5vZGUiLCJhdCIsIm5leHRTaWJsaW5nIiwic3QiLCJ0YWdOYW1lIiwiY3QiLCJ0ZXh0Q29udGVudCIsImx0IiwiY2hpbGROb2RlcyIsInV0IiwiZnQiLCJyZWYiLCJyZWZJbkZvciIsImR0IiwicHQiLCJ2dCIsImh0IiwibXQiLCJpc1Jvb3RJbnNlcnQiLCJpbml0Iiwib28iLCJpbnNlcnQiLCJwZW5kaW5nSW5zZXJ0IiwiZGVzdHJveSIsInJlbW92ZSIsInByZXBhdGNoIiwic2V0VGV4dENvbnRlbnQiLCJwb3N0cGF0Y2giLCJtb2R1bGVzIiwibm9kZU9wcyIsImFvIiwibm9kZVR5cGUiLCJoYXNBdHRyaWJ1dGUiLCJyZW1vdmVBdHRyaWJ1dGUiLCJndCIsInl0Iiwib2xkVmFsdWUiLCJidCIsImRlZiIsImNvbXBvbmVudFVwZGF0ZWQiLCJpbnNlcnRlZCIsIm1vZGlmaWVycyIsImNvIiwicmF3TmFtZSIsIiR0Iiwid3QiLCJKaSIsInJlbW92ZUF0dHJpYnV0ZU5TIiwiemkiLCJLaSIsIkhpIiwiVmkiLCJxaSIsInNldEF0dHJpYnV0ZU5TIiwieHQiLCJfdHJhbnNpdGlvbkNsYXNzZXMiLCJfcHJldkNsYXNzIiwiQ3QiLCJfdl9hZGQiLCJhZGRFdmVudExpc3RlbmVyIiwiX3ZfcmVtb3ZlIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImt0IiwiX3ZhbHVlIiwiY29tcG9zaW5nIiwiQXQiLCJPdCIsInN0eWxlIiwic3RhdGljU3R5bGUiLCJobyIsIlN0IiwiVHQiLCJnbyIsImp0IiwidHJpbSIsImNsYXNzTGlzdCIsImdldEF0dHJpYnV0ZSIsIkV0IiwicmVwbGFjZSIsIk50IiwiU28iLCJMdCIsIkR0IiwiTXQiLCJQdCIsInRpbWVvdXQiLCJwcm9wQ291bnQiLCJ3byIsImtvIiwiT28iLCJzZXRUaW1lb3V0IiwiZ2V0Q29tcHV0ZWRTdHlsZSIsIkNvIiwiUnQiLCJBbyIsInhvIiwiVG8iLCJoYXNUcmFuc2Zvcm0iLCJtYXAiLCJJdCIsIk51bWJlciIsIkZ0IiwiX2xlYXZlQ2IiLCJjYW5jZWxsZWQiLCJVdCIsInRyYW5zaXRpb24iLCJfZW50ZXJDYiIsImNzcyIsImVudGVyQ2xhc3MiLCJlbnRlckFjdGl2ZUNsYXNzIiwiYXBwZWFyQ2xhc3MiLCJhcHBlYXJBY3RpdmVDbGFzcyIsImJlZm9yZUVudGVyIiwiZW50ZXIiLCJhZnRlckVudGVyIiwiZW50ZXJDYW5jZWxsZWQiLCJiZWZvcmVBcHBlYXIiLCJhcHBlYXIiLCJhZnRlckFwcGVhciIsImFwcGVhckNhbmNlbGxlZCIsInRpIiwiSHQiLCJzaG93IiwiX3BlbmRpbmciLCJCdCIsImxlYXZlQ2xhc3MiLCJsZWF2ZUFjdGl2ZUNsYXNzIiwiYmVmb3JlTGVhdmUiLCJsZWF2ZSIsImFmdGVyTGVhdmUiLCJsZWF2ZUNhbmNlbGxlZCIsImRlbGF5TGVhdmUiLCJqbyIsIlZ0IiwibXVsdGlwbGUiLCJKdCIsInNlbGVjdGVkIiwic2VsZWN0ZWRJbmRleCIsInp0IiwiS3QiLCJxdCIsIld0IiwiY3JlYXRlRXZlbnQiLCJpbml0RXZlbnQiLCJkaXNwYXRjaEV2ZW50IiwiWnQiLCJHdCIsIll0IiwiUXQiLCJYdCIsImVuIiwiX21vdmVDYiIsInRuIiwibmV3UG9zIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0Iiwibm4iLCJwb3MiLCJsZWZ0IiwidG9wIiwibW92ZWQiLCJ0cmFuc2Zvcm0iLCJXZWJraXRUcmFuc2Zvcm0iLCJ0cmFuc2l0aW9uRHVyYXRpb24iLCJybiIsImlubmVySFRNTCIsIlZvIiwiYW4iLCJEYSIsIk5hIiwiTGEiLCJNYSIsIlBhIiwic24iLCJzdWJzdHJpbmciLCJZbyIsInN0YXJ0IiwiUW8iLCJXbyIsInVuYXJ5U2xhc2giLCJlbmQiLCJRaSIsIllpIiwicmEiLCJzaG91bGREZWNvZGVOZXdsaW5lcyIsImV4cGVjdEhUTUwiLCJpc1VuYXJ5VGFnIiwiWnIiLCJqYSIsInNmYyIsIkVhIiwiUmVnRXhwIiwiY2hhcnMiLCJ0YSIsIm5hIiwiZWEiLCJYbyIsImNuIiwibG4iLCJ1biIsIkZhIiwiUmEiLCJsYXN0SW5kZXgiLCJleGVjIiwiaW5kZXgiLCJkbiIsInBuIiwidm4iLCJobiIsImFyZyIsIm1uIiwiY2FwdHVyZSIsIm5hdGl2ZSIsIm5hdGl2ZUV2ZW50cyIsImV2ZW50cyIsImduIiwieW4iLCJhdHRyc01hcCIsImF0dHJzTGlzdCIsIm9hIiwiaWEiLCJzYSIsImNhIiwibGEiLCJsYXN0SW5kZXhPZiIsImV4cCIsImlkeCIsIiRuIiwiYWEiLCJibiIsInduIiwiQ24iLCJ4biIsImtuIiwidWEiLCJ3YXJuIiwiZmEiLCJkYSIsInBhIiwiaXNQcmVUYWciLCJ2YSIsImhhIiwibWEiLCJnYSIsImRlbGltaXRlcnMiLCJwcmVzZXJ2ZVdoaXRlc3BhY2UiLCJlaSIsIlZuIiwiQm4iLCJIbiIsImZvcmJpZGRlbiIsIkFuIiwicHJlIiwiT24iLCJqbiIsIkVuIiwiRG4iLCJTbiIsInBsYWluIiwiVG4iLCJNbiIsIlBuIiwiUm4iLCJpZiIsImVsc2VpZiIsImVsc2UiLCJMbiIsImJsb2NrIiwiTm4iLCJzbG90U2NvcGUiLCJzbG90VGFyZ2V0IiwicGxhY2Vob2xkZXIiLCJxYSIsImV4cHJlc3Npb24iLCJJbiIsIlVhIiwiZm9yIiwiSGEiLCJhbGlhcyIsIml0ZXJhdG9yMSIsIml0ZXJhdG9yMiIsIlVuIiwiY29uZGl0aW9ucyIsIm9uY2UiLCJzbG90TmFtZSIsImNvbXBvbmVudCIsIkJhIiwiaGFzQmluZGluZ3MiLCJGbiIsIkthIiwiVmEiLCJwcm9wIiwiY2FtZWwiLCJ6YSIsIkphIiwiV2EiLCJaYSIsInpuIiwieWEiLCJHYSIsIl9hIiwiS24iLCJxbiIsIkpuIiwic3RhdGljIiwiWm4iLCJzdGF0aWNJbkZvciIsInN0YXRpY1Jvb3QiLCJXbiIsIkJyIiwiR24iLCJldmVyeSIsIlluIiwiUW4iLCJ0cyIsImVzIiwiWG4iLCJRYSIsIllhIiwiZXIiLCJwYXJzZUludCIsIlhhIiwidHIiLCJ3cmFwRGF0YSIsIm5yIiwiQ2EiLCJrYSIsIkFhIiwiYmEiLCIkYSIsIndhIiwieGEiLCJyciIsInN0YXRpY1Byb2Nlc3NlZCIsImlyIiwib25jZVByb2Nlc3NlZCIsIm9yIiwiZm9yUHJvY2Vzc2VkIiwiY3IiLCJpZlByb2Nlc3NlZCIsImFyIiwiZ3IiLCJ5ciIsImxyIiwidnIiLCJzciIsInNoaWZ0IiwidXIiLCJfciIsImRyIiwiZnIiLCJycyIsInByIiwic2NvcGUiLCJociIsIm1yIiwiYnIiLCIkciIsImFzdCIsIndyIiwiY2xhc3NCaW5kaW5nIiwieHIiLCJDciIsInN0eWxlQmluZGluZyIsImtyIiwiQXIiLCJPYSIsImpyIiwiT3IiLCJTciIsIlRyIiwibnVtYmVyIiwiRXIiLCJOciIsIkxyIiwiRHIiLCJscyIsIk1yIiwidWkiLCJjcyIsIlByIiwiUnIiLCJvdXRlckhUTUwiLCJjbG9uZU5vZGUiLCJJciIsIkZyIiwiaGFzT3duUHJvcGVydHkiLCJIciIsInRvVXBwZXJDYXNlIiwiSnIiLCJZciIsIlhyIiwibmF2aWdhdG9yIiwidXNlckFnZW50IiwibmkiLCJyaSIsImlpIiwiZ2xvYmFsIiwicHJvY2VzcyIsImVudiIsIlZVRV9FTlYiLCJfX1ZVRV9ERVZUT09MU19HTE9CQUxfSE9PS19fIiwiUHJvbWlzZSIsInJlc29sdmUiLCJNdXRhdGlvbk9ic2VydmVyIiwib2JzZXJ2ZSIsImNoYXJhY3RlckRhdGEiLCJTZXQiLCJjaSIsIm9wdGlvbk1lcmdlU3RyYXRlZ2llcyIsInNpbGVudCIsImlnbm9yZWRFbGVtZW50cyIsImlzVW5rbm93bkVsZW1lbnQiLCJfbGlmZWN5Y2xlSG9va3MiLCJfbWF4VXBkYXRlQ291bnQiLCJmaSIsInN1YnMiLCJhZGRTdWIiLCJyZW1vdmVTdWIiLCJhZGREZXAiLCJ2aSIsImhpIiwib2JzZXJ2ZUFycmF5IiwibWkiLCJnZXRPd25Qcm9wZXJ0eU5hbWVzIiwiaXNTZXR0aW5nUHJvcHMiLCJ3YWxrIiwiZnJlZXplIiwiZGVmaW5lUmVhY3RpdmUiLCJfdG9TdHJpbmciLCJ0b051bWJlciIsIm1ha2VNYXAiLCJpc0J1aWx0SW5UYWciLCJoYXNPd24iLCJpc1ByaW1pdGl2ZSIsImNhY2hlZCIsImNhbWVsaXplIiwiY2FwaXRhbGl6ZSIsImh5cGhlbmF0ZSIsInRvQXJyYXkiLCJpc09iamVjdCIsImlzUGxhaW5PYmplY3QiLCJ0b09iamVjdCIsIm5vb3AiLCJnZW5TdGF0aWNLZXlzIiwibG9vc2VFcXVhbCIsImxvb3NlSW5kZXhPZiIsImlzUmVzZXJ2ZWQiLCJwYXJzZVBhdGgiLCJoYXNQcm90byIsImluQnJvd3NlciIsIlVBIiwiaXNJRSIsImlzSUU5IiwiaXNFZGdlIiwiaXNBbmRyb2lkIiwiaXNJT1MiLCJpc1NlcnZlclJlbmRlcmluZyIsIl9TZXQiLCJtZXJnZU9wdGlvbnMiLCJyZXNvbHZlQXNzZXQiLCJmb3JtYXRDb21wb25lbnROYW1lIiwidmFsaWRhdGVQcm9wIiwiT2kiLCJ2bSIsImRlZXAiLCJzeW5jIiwiY2IiLCJhY3RpdmUiLCJkZXBzIiwibmV3RGVwcyIsImRlcElkcyIsIm5ld0RlcElkcyIsImdldHRlciIsImNsZWFudXBEZXBzIiwiX3ZGb3JSZW1vdmluZyIsInJhdyIsIlJpIiwiSWkiLCJpbmNsdWRlIiwiZXhjbHVkZSIsImNyZWF0ZWQiLCJkZXN0cm95ZWQiLCJLZWVwQWxpdmUiLCJ2ZXJzaW9uIiwiQmkiLCJVaSIsInN2ZyIsIm1hdGgiLCJ4aHRtbCIsIlppIiwiR2kiLCJlbyIsInJvIiwiaW8iLCJzbyIsImxvIiwidW8iLCJmbyIsInBvIiwidm8iLCJtbyIsInNldFByb3BlcnR5IiwieW8iLCJibyIsIiRvIiwib250cmFuc2l0aW9uZW5kIiwib253ZWJraXR0cmFuc2l0aW9uZW5kIiwib25hbmltYXRpb25lbmQiLCJvbndlYmtpdGFuaW1hdGlvbmVuZCIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsIkVvIiwiTm8iLCJMbyIsIkRvIiwiYWN0aXZlRWxlbWVudCIsInZtb2RlbCIsIk1vIiwic29tZSIsIlBvIiwiZGlzcGxheSIsIl9fdk9yaWdpbmFsRGlzcGxheSIsIlJvIiwibW9kZWwiLCJJbyIsIkJvb2xlYW4iLCJtb2RlIiwiRm8iLCJfbGVhdmluZyIsIkJvIiwibW92ZUNsYXNzIiwiVW8iLCJwcmV2Q2hpbGRyZW4iLCJrZXB0IiwicmVtb3ZlZCIsImJlZm9yZVVwZGF0ZSIsInVwZGF0ZWQiLCJoYXNNb3ZlIiwiYm9keSIsIm9mZnNldEhlaWdodCIsInByb3BlcnR5TmFtZSIsIl9oYXNNb3ZlIiwiSG8iLCJUcmFuc2l0aW9uIiwiVHJhbnNpdGlvbkdyb3VwIiwiY29uZmlnIiwiem8iLCJKbyIsIktvIiwicW8iLCJzb3VyY2UiLCJabyIsIkdvIiwiU2EiLCJUYSIsIklhIiwiZXNjIiwidGFiIiwic3BhY2UiLCJ1cCIsInJpZ2h0IiwiZG93biIsInN0b3AiLCJwcmV2ZW50Iiwic2VsZiIsImN0cmwiLCJhbHQiLCJtZXRhIiwiY2xvYWsiLCJpcyIsInRyYW5zZm9ybU5vZGUiLCJnZW5EYXRhIiwib3MiLCJhcyIsInNzIiwiaHRtbCIsInVzIiwiZnMiLCJkb2N1bWVudEVsZW1lbnQiLCJ0ZW1wbGF0ZSIsImNvbXBpbGUiLCJmYWN0b3J5IiwiVnVlUm91dGVyIiwiVmlldyIsInJvdXRlclZpZXciLCJyb3V0ZSIsIiRyb3V0ZSIsIl9yb3V0ZXJWaWV3Q2FjaGUiLCJkZXB0aCIsImluYWN0aXZlIiwicm91dGVyVmlld0RlcHRoIiwibWF0Y2hlZCIsImhvb2tzIiwidm5vZGUiLCJpbnN0YW5jZXMiLCJvbGRWbm9kZSIsInVuZGVmaW5lZCIsInJlc29sdmVQYXRoIiwicmVsYXRpdmUiLCJiYXNlIiwiYXBwZW5kIiwic3RhY2siLCJzZWdtZW50cyIsInNlZ21lbnQiLCJwYXRoIiwiaGFzaCIsInF1ZXJ5IiwiaGFzaEluZGV4IiwicXVlcnlJbmRleCIsImNsZWFuUGF0aCIsImFzc2VydCIsImNvbmRpdGlvbiIsIm1lc3NhZ2UiLCJFcnJvciIsImVuY29kZSIsImVuY29kZVVSSUNvbXBvbmVudCIsImRlY29kZSIsImRlY29kZVVSSUNvbXBvbmVudCIsInJlc29sdmVRdWVyeSIsImV4dHJhUXVlcnkiLCJwYXJzZWRRdWVyeSIsInBhcnNlUXVlcnkiLCJyZXMiLCJwYXJhbSIsInBhcnRzIiwidmFsIiwic3RyaW5naWZ5UXVlcnkiLCJvYmoiLCJyZXN1bHQiLCJ2YWwyIiwiY3JlYXRlUm91dGUiLCJyZWNvcmQiLCJsb2NhdGlvbiIsInJlZGlyZWN0ZWRGcm9tIiwicGFyYW1zIiwiZnVsbFBhdGgiLCJnZXRGdWxsUGF0aCIsImZvcm1hdE1hdGNoIiwiU1RBUlQiLCJ0cmFpbGluZ1NsYXNoUkUiLCJpc1NhbWVSb3V0ZSIsImlzT2JqZWN0RXF1YWwiLCJhS2V5cyIsImJLZXlzIiwiaXNJbmNsdWRlZFJvdXRlIiwiY3VycmVudCIsInF1ZXJ5SW5jbHVkZXMiLCJub3JtYWxpemVMb2NhdGlvbiIsIm5leHQiLCJfbm9ybWFsaXplZCIsInBhcnNlZFBhdGgiLCJiYXNlUGF0aCIsInRvVHlwZXMiLCJMaW5rIiwicmVxdWlyZWQiLCJleGFjdCIsImFjdGl2ZUNsYXNzIiwidGhpcyQxIiwiJHJvdXRlciIsImhpc3RvcnkiLCJocmVmIiwiY3JlYXRlSHJlZiIsImNsYXNzZXMiLCJsaW5rQWN0aXZlQ2xhc3MiLCJjb21wYXJlVGFyZ2V0IiwiY2xpY2siLCJtZXRhS2V5IiwiY3RybEtleSIsInNoaWZ0S2V5IiwiZGVmYXVsdFByZXZlbnRlZCIsImJ1dHRvbiIsInByZXZlbnREZWZhdWx0IiwiZmluZEFuY2hvciIsIl9WdWUiLCJhRGF0YSIsImFBdHRycyIsIl9yb3V0ZXIiLCJnZXQkMSIsIl9yb3V0ZSIsImJlZm9yZUNyZWF0ZSIsInN0cmF0cyIsImJlZm9yZVJvdXRlRW50ZXIiLCJiZWZvcmVSb3V0ZUxlYXZlIiwiX19tb2R1bGVFeHBvcnRzIiwiYXJyIiwiaXNhcnJheSIsInBhdGhUb1JlZ2V4cCIsInBhcnNlXzEiLCJwYXJzZSIsImNvbXBpbGVfMSIsInRva2Vuc1RvRnVuY3Rpb25fMSIsInRva2Vuc1RvRnVuY3Rpb24iLCJ0b2tlbnNUb1JlZ0V4cF8xIiwidG9rZW5zVG9SZWdFeHAiLCJQQVRIX1JFR0VYUCIsInN0ciIsInRva2VucyIsImRlZmF1bHREZWxpbWl0ZXIiLCJkZWxpbWl0ZXIiLCJlc2NhcGVkIiwib2Zmc2V0IiwicHJlZml4IiwiZ3JvdXAiLCJtb2RpZmllciIsImFzdGVyaXNrIiwicGFydGlhbCIsInJlcGVhdCIsIm9wdGlvbmFsIiwicGF0dGVybiIsImVzY2FwZUdyb3VwIiwiZXNjYXBlU3RyaW5nIiwic3Vic3RyIiwiZW5jb2RlVVJJQ29tcG9uZW50UHJldHR5IiwiZW5jb2RlVVJJIiwiZW5jb2RlQXN0ZXJpc2siLCJtYXRjaGVzIiwib3B0cyIsInByZXR0eSIsInRva2VuIiwiVHlwZUVycm9yIiwiYXR0YWNoS2V5cyIsImZsYWdzIiwic2Vuc2l0aXZlIiwicmVnZXhwVG9SZWdleHAiLCJncm91cHMiLCJhcnJheVRvUmVnZXhwIiwicmVnZXhwIiwic3RyaW5nVG9SZWdleHAiLCJzdHJpY3QiLCJlbmRzV2l0aERlbGltaXRlciIsImNyZWF0ZVJvdXRlTWFwIiwicGF0aE1hcCIsIm5hbWVNYXAiLCJhZGRSb3V0ZVJlY29yZCIsIm1hdGNoQXMiLCJub3JtYWxpemVQYXRoIiwicmVkaXJlY3QiLCJyZWdleHBDYWNoZSIsInJlZ2V4cFBhcmFtc0NhY2hlIiwicmVnZXhwQ29tcGlsZUNhY2hlIiwiY3JlYXRlTWF0Y2hlciIsImN1cnJlbnRSb3V0ZSIsInBhcmFtTmFtZXMiLCJnZXRQYXJhbXMiLCJmaWxsUGFyYW1zIiwiX2NyZWF0ZVJvdXRlIiwibWF0Y2hSb3V0ZSIsIm9yaWdpbmFsUmVkaXJlY3QiLCJ0YXJnZXRSZWNvcmQiLCJyYXdQYXRoIiwicmVzb2x2ZVJlY29yZFBhdGgiLCJyZXNvbHZlZFBhdGgiLCJhbGlhc2VkUGF0aCIsImFsaWFzZWRNYXRjaCIsImFsaWFzZWRSZWNvcmQiLCJnZXRSb3V0ZVJlZ2V4IiwiaGl0IiwicGF0aG5hbWUiLCJsZW4iLCJyb3V0ZU1zZyIsImZpbGxlciIsInN1cHBvcnRzSGlzdG9yeSIsInJ1blF1ZXVlIiwicXVldWUiLCJzdGVwIiwiSGlzdG9yeSIsIm5vcm1hbGl6ZUJhc2UiLCJwZW5kaW5nIiwibGlzdGVuIiwidHJhbnNpdGlvblRvIiwiY29uZmlybVRyYW5zaXRpb24iLCJ1cGRhdGVSb3V0ZSIsImVuc3VyZVVSTCIsInJlc29sdmVRdWV1ZSIsImRlYWN0aXZhdGVkIiwiYWN0aXZhdGVkIiwiZXh0cmFjdExlYXZlR3VhcmRzIiwiYmVmb3JlSG9va3MiLCJyZXNvbHZlQXN5bmNDb21wb25lbnRzIiwiaXRlcmF0b3IiLCJwb3N0RW50ZXJDYnMiLCJlbnRlckd1YXJkcyIsImV4dHJhY3RFbnRlckd1YXJkcyIsInByZXYiLCJhZnRlckhvb2tzIiwiYmFzZUVsIiwiZXh0cmFjdEd1YXJkIiwiZmxhdHRlbiIsImZsYXRNYXBDb21wb25lbnRzIiwiaW5zdGFuY2UiLCJndWFyZCIsIndyYXBMZWF2ZUd1YXJkIiwicmV2ZXJzZSIsInJvdXRlTGVhdmVHdWFyZCIsImNicyIsImlzVmFsaWQiLCJ3cmFwRW50ZXJHdWFyZCIsInJvdXRlRW50ZXJHdWFyZCIsImZyb20iLCJwb2xsIiwicmVzb2x2ZWREZWYiLCJyZWplY3QiLCJyZWFzb24iLCJwb3NpdGlvblN0b3JlIiwic2F2ZVNjcm9sbFBvc2l0aW9uIiwicGFnZVhPZmZzZXQiLCJwYWdlWU9mZnNldCIsImdldFNjcm9sbFBvc2l0aW9uIiwiZ2V0RWxlbWVudFBvc2l0aW9uIiwiZG9jUmVjdCIsImVsUmVjdCIsImlzVmFsaWRQb3NpdGlvbiIsImlzTnVtYmVyIiwibm9ybWFsaXplUG9zaXRpb24iLCJnZW5LZXkiLCJEYXRlIiwibm93IiwiX2tleSIsIkhUTUw1SGlzdG9yeSIsImV4cGVjdFNjcm9sbCIsInNjcm9sbEJlaGF2aW9yIiwic3RhdGUiLCJnZXRMb2NhdGlvbiIsImhhbmRsZVNjcm9sbCIsInB1c2hTdGF0ZSIsInJlcGxhY2VTdGF0ZSIsImlzUG9wIiwiYmVoYXZpb3IiLCJwb3NpdGlvbiIsInNob3VsZFNjcm9sbCIsInNlbGVjdG9yIiwic2Nyb2xsVG8iLCJzZWFyY2giLCJ1cmwiLCJIYXNoSGlzdG9yeSIsImZhbGxiYWNrIiwiY2hlY2tGYWxsYmFjayIsImVuc3VyZVNsYXNoIiwib25IYXNoQ2hhbmdlIiwiZ2V0SGFzaCIsInJlcGxhY2VIYXNoIiwicHVzaEhhc2giLCJBYnN0cmFjdEhpc3RvcnkiLCJ0YXJnZXRJbmRleCIsInByb3RvdHlwZUFjY2Vzc29ycyIsImJlZm9yZUVhY2giLCJhZnRlckVhY2giLCJiYWNrIiwiZm9yd2FyZCIsImdldE1hdGNoZWRDb21wb25lbnRzIiwiZGVmaW5lUHJvcGVydGllcyIsIkluZGV4VmlldyIsInJlcXVpcmUiLCJVc2VyVmlldyIsImxvZyIsImxpc3QiLCJpdGVtIiwibWVkaWFRdWVyeSIsImFscmVhZHlJbXBvcnRlZE1vZHVsZXMiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7QUM3QkE7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUFBZ0Q7O0FBRkE7QUFJaEQsZUFBSUEsR0FBSixzQixDQUFpRDs7QUFIRDtBQVZoRDs7Ozs7Ozs7O0FBZUEsS0FBTUMsU0FBUyx3QkFBYyxFQUFDQyx3QkFBRCxFQUFkLENBQWYsQyxDQUFnRDtBQUNoRCxLQUFNQyxNQUFNLGtCQUFRLEVBQUNGLGNBQUQsRUFBUixFQUFrQkcsTUFBbEIsQ0FBeUIsTUFB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VUE7dUJBRUE7O3VCQUdBO0FBRkE7QUFHQTswQkFDQTtxQkFDQTtBQUNBO0FBUkE7QUFTQSx1Qjs7Ozs7O0FDaENBLGlCQUFnQixtQkFBbUI7QUFDbkM7QUFDQSxFQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEUiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi4vbWFpbi9cIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCAzNjhhMTA0NzgxYjEzMmY1ZjU4NiIsIi8qKlxyXG4gKiDmj4/ov7A6IOWFpeWPo+mhtemdolxyXG4gKiDniYjmnYM6IENvcHlyaWdodCAoYykgMjAxNlxyXG4gKiDlhazlj7g6IOa3seWcs+W4guaYiuaZqOenkeaKgOW8gOWPkeaciemZkOWFrOWPuFxyXG4gKiDkvZzogIU6IOmZiOWFg1xyXG4gKiDniYjmnKw6IDEuMFxyXG4gKiDliJvlu7rml6XmnJ86IDIwMTYvMTEvMjFcclxuICog5Yib5bu65pe26Ze0OiAxNDoyNlxyXG4gKi9cclxuaW1wb3J0IFZ1ZSBmcm9tIFwidnVlXCI7ICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB2dWXmoYbmnrbljIVcclxuaW1wb3J0IFZ1ZVJvdXRlciBmcm9tIFwidnVlLXJvdXRlclwiOyAgICAgICAgICAgICAvLyDot6/nlLHmj5Lku7ZcclxuaW1wb3J0IHJvdXRlcyBmcm9tIFwiLi9yb3V0ZXJcIjsgICAgICAgICAgICAgICAgICAvLyDlr7zlhaXot6/nlLHphY3nva7lr7nosaFcclxuXHJcblZ1ZS51c2UoVnVlUm91dGVyKTsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyDlpoLmnpzkvb/nlKjmqKHlnZfljJbmnLrliLbnvJbnqItcclxuXHJcbmNvbnN0IHJvdXRlciA9IG5ldyBWdWVSb3V0ZXIoe3JvdXRlc30pOyAgICAgICAgIC8vIOWunuS+i+WMluS4gOS4qlZ1ZVJvdXRlcui3r+eUseWvueixoVxyXG5jb25zdCBhcHAgPSBuZXcgVnVlKHtyb3V0ZXJ9KS4kbW91bnQoJyNhcHAnKTsgICAvLyDliJvlu7rlkozmjILovb3moLnlrp7kvotcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vRTovVGVzdFdvcmsvdnVlL3NyYy9hcHAuanMiLCIvKiFcbiAqIFZ1ZS5qcyB2Mi4xLjBcbiAqIChjKSAyMDE0LTIwMTYgRXZhbiBZb3VcbiAqIFJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cbiAqL1xuIWZ1bmN0aW9uKGUsdCl7XCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHMmJlwidW5kZWZpbmVkXCIhPXR5cGVvZiBtb2R1bGU/bW9kdWxlLmV4cG9ydHM9dCgpOlwiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZD9kZWZpbmUodCk6ZS5WdWU9dCgpfSh0aGlzLGZ1bmN0aW9uKCl7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gZShlKXtyZXR1cm4gbnVsbD09ZT9cIlwiOlwib2JqZWN0XCI9PXR5cGVvZiBlP0pTT04uc3RyaW5naWZ5KGUsbnVsbCwyKTpTdHJpbmcoZSl9ZnVuY3Rpb24gdChlKXt2YXIgdD1wYXJzZUZsb2F0KGUsMTApO3JldHVybiB0fHwwPT09dD90OmV9ZnVuY3Rpb24gbihlLHQpe2Zvcih2YXIgbj1PYmplY3QuY3JlYXRlKG51bGwpLHI9ZS5zcGxpdChcIixcIiksaT0wO2k8ci5sZW5ndGg7aSsrKW5bcltpXV09ITA7cmV0dXJuIHQ/ZnVuY3Rpb24oZSl7cmV0dXJuIG5bZS50b0xvd2VyQ2FzZSgpXX06ZnVuY3Rpb24oZSl7cmV0dXJuIG5bZV19fWZ1bmN0aW9uIHIoZSx0KXtpZihlLmxlbmd0aCl7dmFyIG49ZS5pbmRleE9mKHQpO2lmKG4+LTEpcmV0dXJuIGUuc3BsaWNlKG4sMSl9fWZ1bmN0aW9uIGkoZSx0KXtyZXR1cm4gVXIuY2FsbChlLHQpfWZ1bmN0aW9uIG8oZSl7cmV0dXJuXCJzdHJpbmdcIj09dHlwZW9mIGV8fFwibnVtYmVyXCI9PXR5cGVvZiBlfWZ1bmN0aW9uIGEoZSl7dmFyIHQ9T2JqZWN0LmNyZWF0ZShudWxsKTtyZXR1cm4gZnVuY3Rpb24obil7dmFyIHI9dFtuXTtyZXR1cm4gcnx8KHRbbl09ZShuKSl9fWZ1bmN0aW9uIHMoZSx0KXtmdW5jdGlvbiBuKG4pe3ZhciByPWFyZ3VtZW50cy5sZW5ndGg7cmV0dXJuIHI/cj4xP2UuYXBwbHkodCxhcmd1bWVudHMpOmUuY2FsbCh0LG4pOmUuY2FsbCh0KX1yZXR1cm4gbi5fbGVuZ3RoPWUubGVuZ3RoLG59ZnVuY3Rpb24gYyhlLHQpe3Q9dHx8MDtmb3IodmFyIG49ZS5sZW5ndGgtdCxyPW5ldyBBcnJheShuKTtuLS07KXJbbl09ZVtuK3RdO3JldHVybiByfWZ1bmN0aW9uIGwoZSx0KXtmb3IodmFyIG4gaW4gdCllW25dPXRbbl07cmV0dXJuIGV9ZnVuY3Rpb24gdShlKXtyZXR1cm4gbnVsbCE9PWUmJlwib2JqZWN0XCI9PXR5cGVvZiBlfWZ1bmN0aW9uIGYoZSl7cmV0dXJuIHFyLmNhbGwoZSk9PT1Xcn1mdW5jdGlvbiBkKGUpe2Zvcih2YXIgdD17fSxuPTA7bjxlLmxlbmd0aDtuKyspZVtuXSYmbCh0LGVbbl0pO3JldHVybiB0fWZ1bmN0aW9uIHAoKXt9ZnVuY3Rpb24gdihlKXtyZXR1cm4gZS5yZWR1Y2UoZnVuY3Rpb24oZSx0KXtyZXR1cm4gZS5jb25jYXQodC5zdGF0aWNLZXlzfHxbXSl9LFtdKS5qb2luKFwiLFwiKX1mdW5jdGlvbiBoKGUsdCl7cmV0dXJuIGU9PXR8fCEoIXUoZSl8fCF1KHQpKSYmSlNPTi5zdHJpbmdpZnkoZSk9PT1KU09OLnN0cmluZ2lmeSh0KX1mdW5jdGlvbiBtKGUsdCl7Zm9yKHZhciBuPTA7bjxlLmxlbmd0aDtuKyspaWYoaChlW25dLHQpKXJldHVybiBuO3JldHVybi0xfWZ1bmN0aW9uIGcoZSl7dmFyIHQ9KGUrXCJcIikuY2hhckNvZGVBdCgwKTtyZXR1cm4gMzY9PT10fHw5NT09PXR9ZnVuY3Rpb24geShlLHQsbixyKXtPYmplY3QuZGVmaW5lUHJvcGVydHkoZSx0LHt2YWx1ZTpuLGVudW1lcmFibGU6ISFyLHdyaXRhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMH0pfWZ1bmN0aW9uIF8oZSl7aWYoIUdyLnRlc3QoZSkpe3ZhciB0PWUuc3BsaXQoXCIuXCIpO3JldHVybiBmdW5jdGlvbihlKXtmb3IodmFyIG49MDtuPHQubGVuZ3RoO24rKyl7aWYoIWUpcmV0dXJuO2U9ZVt0W25dXX1yZXR1cm4gZX19fWZ1bmN0aW9uIGIoZSl7cmV0dXJuL25hdGl2ZSBjb2RlLy50ZXN0KGUudG9TdHJpbmcoKSl9ZnVuY3Rpb24gJChlKXtkaS50YXJnZXQmJnBpLnB1c2goZGkudGFyZ2V0KSxkaS50YXJnZXQ9ZX1mdW5jdGlvbiB3KCl7ZGkudGFyZ2V0PXBpLnBvcCgpfWZ1bmN0aW9uIHgoZSx0KXtlLl9fcHJvdG9fXz10fWZ1bmN0aW9uIEMoZSx0LG4pe2Zvcih2YXIgcj0wLGk9bi5sZW5ndGg7cjxpO3IrKyl7dmFyIG89bltyXTt5KGUsbyx0W29dKX19ZnVuY3Rpb24gayhlKXtpZih1KGUpKXt2YXIgdDtyZXR1cm4gaShlLFwiX19vYl9fXCIpJiZlLl9fb2JfXyBpbnN0YW5jZW9mIHlpP3Q9ZS5fX29iX186Z2kuc2hvdWxkQ29udmVydCYmIW9pKCkmJihBcnJheS5pc0FycmF5KGUpfHxmKGUpKSYmT2JqZWN0LmlzRXh0ZW5zaWJsZShlKSYmIWUuX2lzVnVlJiYodD1uZXcgeWkoZSkpLHR9fWZ1bmN0aW9uIEEoZSx0LG4scil7dmFyIGk9bmV3IGRpLG89T2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihlLHQpO2lmKCFvfHxvLmNvbmZpZ3VyYWJsZSE9PSExKXt2YXIgYT1vJiZvLmdldCxzPW8mJm8uc2V0LGM9ayhuKTtPYmplY3QuZGVmaW5lUHJvcGVydHkoZSx0LHtlbnVtZXJhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMCxnZXQ6ZnVuY3Rpb24oKXt2YXIgdD1hP2EuY2FsbChlKTpuO3JldHVybiBkaS50YXJnZXQmJihpLmRlcGVuZCgpLGMmJmMuZGVwLmRlcGVuZCgpLEFycmF5LmlzQXJyYXkodCkmJlQodCkpLHR9LHNldDpmdW5jdGlvbih0KXt2YXIgcj1hP2EuY2FsbChlKTpuO3Q9PT1yfHx0IT09dCYmciE9PXJ8fChzP3MuY2FsbChlLHQpOm49dCxjPWsodCksaS5ub3RpZnkoKSl9fSl9fWZ1bmN0aW9uIE8oZSx0LG4pe2lmKEFycmF5LmlzQXJyYXkoZSkpcmV0dXJuIGUubGVuZ3RoPU1hdGgubWF4KGUubGVuZ3RoLHQpLGUuc3BsaWNlKHQsMSxuKSxuO2lmKGkoZSx0KSlyZXR1cm4gdm9pZChlW3RdPW4pO3ZhciByPWUuX19vYl9fO2lmKCEoZS5faXNWdWV8fHImJnIudm1Db3VudCkpcmV0dXJuIHI/KEEoci52YWx1ZSx0LG4pLHIuZGVwLm5vdGlmeSgpLG4pOnZvaWQoZVt0XT1uKX1mdW5jdGlvbiBTKGUsdCl7dmFyIG49ZS5fX29iX187ZS5faXNWdWV8fG4mJm4udm1Db3VudHx8aShlLHQpJiYoZGVsZXRlIGVbdF0sbiYmbi5kZXAubm90aWZ5KCkpfWZ1bmN0aW9uIFQoZSl7Zm9yKHZhciB0PXZvaWQgMCxuPTAscj1lLmxlbmd0aDtuPHI7bisrKXQ9ZVtuXSx0JiZ0Ll9fb2JfXyYmdC5fX29iX18uZGVwLmRlcGVuZCgpLEFycmF5LmlzQXJyYXkodCkmJlQodCl9ZnVuY3Rpb24gaihlLHQpe2lmKCF0KXJldHVybiBlO2Zvcih2YXIgbixyLG8sYT1PYmplY3Qua2V5cyh0KSxzPTA7czxhLmxlbmd0aDtzKyspbj1hW3NdLHI9ZVtuXSxvPXRbbl0saShlLG4pP2YocikmJmYobykmJmoocixvKTpPKGUsbixvKTtyZXR1cm4gZX1mdW5jdGlvbiBFKGUsdCl7cmV0dXJuIHQ/ZT9lLmNvbmNhdCh0KTpBcnJheS5pc0FycmF5KHQpP3Q6W3RdOmV9ZnVuY3Rpb24gTihlLHQpe3ZhciBuPU9iamVjdC5jcmVhdGUoZXx8bnVsbCk7cmV0dXJuIHQ/bChuLHQpOm59ZnVuY3Rpb24gTChlKXt2YXIgdD1lLnByb3BzO2lmKHQpe3ZhciBuLHIsaSxvPXt9O2lmKEFycmF5LmlzQXJyYXkodCkpZm9yKG49dC5sZW5ndGg7bi0tOylyPXRbbl0sXCJzdHJpbmdcIj09dHlwZW9mIHImJihpPVZyKHIpLG9baV09e3R5cGU6bnVsbH0pO2Vsc2UgaWYoZih0KSlmb3IodmFyIGEgaW4gdClyPXRbYV0saT1WcihhKSxvW2ldPWYocik/cjp7dHlwZTpyfTtlLnByb3BzPW99fWZ1bmN0aW9uIEQoZSl7dmFyIHQ9ZS5kaXJlY3RpdmVzO2lmKHQpZm9yKHZhciBuIGluIHQpe3ZhciByPXRbbl07XCJmdW5jdGlvblwiPT10eXBlb2YgciYmKHRbbl09e2JpbmQ6cix1cGRhdGU6cn0pfX1mdW5jdGlvbiBNKGUsdCxuKXtmdW5jdGlvbiByKHIpe3ZhciBpPV9pW3JdfHxiaTt1W3JdPWkoZVtyXSx0W3JdLG4scil9TCh0KSxEKHQpO3ZhciBvPXQuZXh0ZW5kcztpZihvJiYoZT1cImZ1bmN0aW9uXCI9PXR5cGVvZiBvP00oZSxvLm9wdGlvbnMsbik6TShlLG8sbikpLHQubWl4aW5zKWZvcih2YXIgYT0wLHM9dC5taXhpbnMubGVuZ3RoO2E8czthKyspe3ZhciBjPXQubWl4aW5zW2FdO2MucHJvdG90eXBlIGluc3RhbmNlb2YgUmUmJihjPWMub3B0aW9ucyksZT1NKGUsYyxuKX12YXIgbCx1PXt9O2ZvcihsIGluIGUpcihsKTtmb3IobCBpbiB0KWkoZSxsKXx8cihsKTtyZXR1cm4gdX1mdW5jdGlvbiBQKGUsdCxuLHIpe2lmKFwic3RyaW5nXCI9PXR5cGVvZiBuKXt2YXIgaT1lW3RdLG89aVtuXXx8aVtWcihuKV18fGlbenIoVnIobikpXTtyZXR1cm4gb319ZnVuY3Rpb24gUihlLHQsbixyKXt2YXIgbz10W2VdLGE9IWkobixlKSxzPW5bZV07aWYoQihvLnR5cGUpJiYoYSYmIWkobyxcImRlZmF1bHRcIik/cz0hMTpcIlwiIT09cyYmcyE9PUtyKGUpfHwocz0hMCkpLHZvaWQgMD09PXMpe3M9SShyLG8sZSk7dmFyIGM9Z2kuc2hvdWxkQ29udmVydDtnaS5zaG91bGRDb252ZXJ0PSEwLGsocyksZ2kuc2hvdWxkQ29udmVydD1jfXJldHVybiBzfWZ1bmN0aW9uIEkoZSx0LG4pe2lmKGkodCxcImRlZmF1bHRcIikpe3ZhciByPXQuZGVmYXVsdDtyZXR1cm4gdShyKSxlJiZlLiRvcHRpb25zLnByb3BzRGF0YSYmdm9pZCAwPT09ZS4kb3B0aW9ucy5wcm9wc0RhdGFbbl0mJnZvaWQgMCE9PWVbbl0/ZVtuXTpcImZ1bmN0aW9uXCI9PXR5cGVvZiByJiZ0LnR5cGUhPT1GdW5jdGlvbj9yLmNhbGwoZSk6cn19ZnVuY3Rpb24gRihlKXt2YXIgdD1lJiZlLnRvU3RyaW5nKCkubWF0Y2goL15cXHMqZnVuY3Rpb24gKFxcdyspLyk7cmV0dXJuIHQmJnRbMV19ZnVuY3Rpb24gQihlKXtpZighQXJyYXkuaXNBcnJheShlKSlyZXR1cm5cIkJvb2xlYW5cIj09PUYoZSk7Zm9yKHZhciB0PTAsbj1lLmxlbmd0aDt0PG47dCsrKWlmKFwiQm9vbGVhblwiPT09RihlW3RdKSlyZXR1cm4hMDtyZXR1cm4hMX1mdW5jdGlvbiBVKCl7d2kubGVuZ3RoPTAseGk9e30sQ2k9a2k9ITF9ZnVuY3Rpb24gSCgpe2ZvcihraT0hMCx3aS5zb3J0KGZ1bmN0aW9uKGUsdCl7cmV0dXJuIGUuaWQtdC5pZH0pLEFpPTA7QWk8d2kubGVuZ3RoO0FpKyspe3ZhciBlPXdpW0FpXSx0PWUuaWQ7eGlbdF09bnVsbCxlLnJ1bigpfWFpJiZsaS5kZXZ0b29scyYmYWkuZW1pdChcImZsdXNoXCIpLFUoKX1mdW5jdGlvbiBWKGUpe3ZhciB0PWUuaWQ7aWYobnVsbD09eGlbdF0pe2lmKHhpW3RdPSEwLGtpKXtmb3IodmFyIG49d2kubGVuZ3RoLTE7bj49MCYmd2lbbl0uaWQ+ZS5pZDspbi0tO3dpLnNwbGljZShNYXRoLm1heChuLEFpKSsxLDAsZSl9ZWxzZSB3aS5wdXNoKGUpO0NpfHwoQ2k9ITAsc2koSCkpfX1mdW5jdGlvbiB6KGUpe1RpLmNsZWFyKCksSihlLFRpKX1mdW5jdGlvbiBKKGUsdCl7dmFyIG4scixpPUFycmF5LmlzQXJyYXkoZSk7aWYoKGl8fHUoZSkpJiZPYmplY3QuaXNFeHRlbnNpYmxlKGUpKXtpZihlLl9fb2JfXyl7dmFyIG89ZS5fX29iX18uZGVwLmlkO2lmKHQuaGFzKG8pKXJldHVybjt0LmFkZChvKX1pZihpKWZvcihuPWUubGVuZ3RoO24tLTspSihlW25dLHQpO2Vsc2UgZm9yKHI9T2JqZWN0LmtleXMoZSksbj1yLmxlbmd0aDtuLS07KUooZVtyW25dXSx0KX19ZnVuY3Rpb24gSyhlKXtlLl93YXRjaGVycz1bXSxxKGUpLFcoZSksWihlKSxZKGUpLFEoZSl9ZnVuY3Rpb24gcShlKXt2YXIgdD1lLiRvcHRpb25zLnByb3BzO2lmKHQpe3ZhciBuPWUuJG9wdGlvbnMucHJvcHNEYXRhfHx7fSxyPWUuJG9wdGlvbnMuX3Byb3BLZXlzPU9iamVjdC5rZXlzKHQpLGk9IWUuJHBhcmVudDtnaS5zaG91bGRDb252ZXJ0PWk7Zm9yKHZhciBvPWZ1bmN0aW9uKGkpe3ZhciBvPXJbaV07QShlLG8sUihvLHQsbixlKSl9LGE9MDthPHIubGVuZ3RoO2ErKylvKGEpO2dpLnNob3VsZENvbnZlcnQ9ITB9fWZ1bmN0aW9uIFcoZSl7dmFyIHQ9ZS4kb3B0aW9ucy5kYXRhO3Q9ZS5fZGF0YT1cImZ1bmN0aW9uXCI9PXR5cGVvZiB0P3QuY2FsbChlKTp0fHx7fSxmKHQpfHwodD17fSk7Zm9yKHZhciBuPU9iamVjdC5rZXlzKHQpLHI9ZS4kb3B0aW9ucy5wcm9wcyxvPW4ubGVuZ3RoO28tLTspciYmaShyLG5bb10pfHx0ZShlLG5bb10pO2sodCksdC5fX29iX18mJnQuX19vYl9fLnZtQ291bnQrK31mdW5jdGlvbiBaKGUpe3ZhciB0PWUuJG9wdGlvbnMuY29tcHV0ZWQ7aWYodClmb3IodmFyIG4gaW4gdCl7dmFyIHI9dFtuXTtcImZ1bmN0aW9uXCI9PXR5cGVvZiByPyhqaS5nZXQ9RyhyLGUpLGppLnNldD1wKTooamkuZ2V0PXIuZ2V0P3IuY2FjaGUhPT0hMT9HKHIuZ2V0LGUpOnMoci5nZXQsZSk6cCxqaS5zZXQ9ci5zZXQ/cyhyLnNldCxlKTpwKSxPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxuLGppKX19ZnVuY3Rpb24gRyhlLHQpe3ZhciBuPW5ldyBTaSh0LGUscCx7bGF6eTohMH0pO3JldHVybiBmdW5jdGlvbigpe3JldHVybiBuLmRpcnR5JiZuLmV2YWx1YXRlKCksZGkudGFyZ2V0JiZuLmRlcGVuZCgpLG4udmFsdWV9fWZ1bmN0aW9uIFkoZSl7dmFyIHQ9ZS4kb3B0aW9ucy5tZXRob2RzO2lmKHQpZm9yKHZhciBuIGluIHQpZVtuXT1udWxsPT10W25dP3A6cyh0W25dLGUpfWZ1bmN0aW9uIFEoZSl7dmFyIHQ9ZS4kb3B0aW9ucy53YXRjaDtpZih0KWZvcih2YXIgbiBpbiB0KXt2YXIgcj10W25dO2lmKEFycmF5LmlzQXJyYXkocikpZm9yKHZhciBpPTA7aTxyLmxlbmd0aDtpKyspWChlLG4scltpXSk7ZWxzZSBYKGUsbixyKX19ZnVuY3Rpb24gWChlLHQsbil7dmFyIHI7ZihuKSYmKHI9bixuPW4uaGFuZGxlciksXCJzdHJpbmdcIj09dHlwZW9mIG4mJihuPWVbbl0pLGUuJHdhdGNoKHQsbixyKX1mdW5jdGlvbiBlZShlKXt2YXIgdD17fTt0LmdldD1mdW5jdGlvbigpe3JldHVybiB0aGlzLl9kYXRhfSxPYmplY3QuZGVmaW5lUHJvcGVydHkoZS5wcm90b3R5cGUsXCIkZGF0YVwiLHQpLGUucHJvdG90eXBlLiRzZXQ9TyxlLnByb3RvdHlwZS4kZGVsZXRlPVMsZS5wcm90b3R5cGUuJHdhdGNoPWZ1bmN0aW9uKGUsdCxuKXt2YXIgcj10aGlzO249bnx8e30sbi51c2VyPSEwO3ZhciBpPW5ldyBTaShyLGUsdCxuKTtyZXR1cm4gbi5pbW1lZGlhdGUmJnQuY2FsbChyLGkudmFsdWUpLGZ1bmN0aW9uKCl7aS50ZWFyZG93bigpfX19ZnVuY3Rpb24gdGUoZSx0KXtnKHQpfHxPYmplY3QuZGVmaW5lUHJvcGVydHkoZSx0LHtjb25maWd1cmFibGU6ITAsZW51bWVyYWJsZTohMCxnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gZS5fZGF0YVt0XX0sc2V0OmZ1bmN0aW9uKG4pe2UuX2RhdGFbdF09bn19KX1mdW5jdGlvbiBuZShlKXt2YXIgdD1uZXcgRWkoZS50YWcsZS5kYXRhLGUuY2hpbGRyZW4sZS50ZXh0LGUuZWxtLGUubnMsZS5jb250ZXh0LGUuY29tcG9uZW50T3B0aW9ucyk7cmV0dXJuIHQuaXNTdGF0aWM9ZS5pc1N0YXRpYyx0LmtleT1lLmtleSx0LmlzQ2xvbmVkPSEwLHR9ZnVuY3Rpb24gcmUoZSl7Zm9yKHZhciB0PW5ldyBBcnJheShlLmxlbmd0aCksbj0wO248ZS5sZW5ndGg7bisrKXRbbl09bmUoZVtuXSk7cmV0dXJuIHR9ZnVuY3Rpb24gaWUoZSx0LG4scil7cis9dDt2YXIgaT1lLl9faW5qZWN0ZWR8fChlLl9faW5qZWN0ZWQ9e30pO2lmKCFpW3JdKXtpW3JdPSEwO3ZhciBvPWVbdF07bz9lW3RdPWZ1bmN0aW9uKCl7by5hcHBseSh0aGlzLGFyZ3VtZW50cyksbi5hcHBseSh0aGlzLGFyZ3VtZW50cyl9OmVbdF09bn19ZnVuY3Rpb24gb2UoZSx0LG4scixpKXt2YXIgbyxhLHMsYyxsLHU7Zm9yKG8gaW4gZSlpZihhPWVbb10scz10W29dLGEpaWYocyl7aWYoYSE9PXMpaWYoQXJyYXkuaXNBcnJheShzKSl7cy5sZW5ndGg9YS5sZW5ndGg7Zm9yKHZhciBmPTA7ZjxzLmxlbmd0aDtmKyspc1tmXT1hW2ZdO2Vbb109c31lbHNlIHMuZm49YSxlW29dPXN9ZWxzZSB1PVwiIVwiPT09by5jaGFyQXQoMCksbD11P28uc2xpY2UoMSk6byxBcnJheS5pc0FycmF5KGEpP24obCxhLmludm9rZXI9YWUoYSksdSk6KGEuaW52b2tlcnx8KGM9YSxhPWVbb109e30sYS5mbj1jLGEuaW52b2tlcj1zZShhKSksbihsLGEuaW52b2tlcix1KSk7ZWxzZTtmb3IobyBpbiB0KWVbb118fChsPVwiIVwiPT09by5jaGFyQXQoMCk/by5zbGljZSgxKTpvLHIobCx0W29dLmludm9rZXIpKX1mdW5jdGlvbiBhZShlKXtyZXR1cm4gZnVuY3Rpb24odCl7Zm9yKHZhciBuPWFyZ3VtZW50cyxyPTE9PT1hcmd1bWVudHMubGVuZ3RoLGk9MDtpPGUubGVuZ3RoO2krKylyP2VbaV0odCk6ZVtpXS5hcHBseShudWxsLG4pfX1mdW5jdGlvbiBzZShlKXtyZXR1cm4gZnVuY3Rpb24odCl7dmFyIG49MT09PWFyZ3VtZW50cy5sZW5ndGg7bj9lLmZuKHQpOmUuZm4uYXBwbHkobnVsbCxhcmd1bWVudHMpfX1mdW5jdGlvbiBjZShlLHQsbil7aWYobyhlKSlyZXR1cm5bbGUoZSldO2lmKEFycmF5LmlzQXJyYXkoZSkpe2Zvcih2YXIgcj1bXSxpPTAsYT1lLmxlbmd0aDtpPGE7aSsrKXt2YXIgcz1lW2ldLGM9cltyLmxlbmd0aC0xXTtBcnJheS5pc0FycmF5KHMpP3IucHVzaC5hcHBseShyLGNlKHMsdCwobnx8XCJcIikrXCJfXCIraSkpOm8ocyk/YyYmYy50ZXh0P2MudGV4dCs9U3RyaW5nKHMpOlwiXCIhPT1zJiZyLnB1c2gobGUocykpOnMgaW5zdGFuY2VvZiBFaSYmKHMudGV4dCYmYyYmYy50ZXh0P2MuaXNDbG9uZWR8fChjLnRleHQrPXMudGV4dCk6KHQmJnVlKHMsdCkscy50YWcmJm51bGw9PXMua2V5JiZudWxsIT1uJiYocy5rZXk9XCJfX3ZsaXN0XCIrbitcIl9cIitpK1wiX19cIiksci5wdXNoKHMpKSl9cmV0dXJuIHJ9fWZ1bmN0aW9uIGxlKGUpe3JldHVybiBuZXcgRWkodm9pZCAwLHZvaWQgMCx2b2lkIDAsU3RyaW5nKGUpKX1mdW5jdGlvbiB1ZShlLHQpe2lmKGUudGFnJiYhZS5ucyYmKGUubnM9dCxlLmNoaWxkcmVuKSlmb3IodmFyIG49MCxyPWUuY2hpbGRyZW4ubGVuZ3RoO248cjtuKyspdWUoZS5jaGlsZHJlbltuXSx0KX1mdW5jdGlvbiBmZShlKXtyZXR1cm4gZSYmZS5maWx0ZXIoZnVuY3Rpb24oZSl7cmV0dXJuIGUmJmUuY29tcG9uZW50T3B0aW9uc30pWzBdfWZ1bmN0aW9uIGRlKGUpe3ZhciB0PWUuJG9wdGlvbnMsbj10LnBhcmVudDtpZihuJiYhdC5hYnN0cmFjdCl7Zm9yKDtuLiRvcHRpb25zLmFic3RyYWN0JiZuLiRwYXJlbnQ7KW49bi4kcGFyZW50O24uJGNoaWxkcmVuLnB1c2goZSl9ZS4kcGFyZW50PW4sZS4kcm9vdD1uP24uJHJvb3Q6ZSxlLiRjaGlsZHJlbj1bXSxlLiRyZWZzPXt9LGUuX3dhdGNoZXI9bnVsbCxlLl9pbmFjdGl2ZT0hMSxlLl9pc01vdW50ZWQ9ITEsZS5faXNEZXN0cm95ZWQ9ITEsZS5faXNCZWluZ0Rlc3Ryb3llZD0hMX1mdW5jdGlvbiBwZShlKXtlLnByb3RvdHlwZS5fbW91bnQ9ZnVuY3Rpb24oZSx0KXt2YXIgbj10aGlzO3JldHVybiBuLiRlbD1lLG4uJG9wdGlvbnMucmVuZGVyfHwobi4kb3B0aW9ucy5yZW5kZXI9TmkpLHZlKG4sXCJiZWZvcmVNb3VudFwiKSxuLl93YXRjaGVyPW5ldyBTaShuLGZ1bmN0aW9uKCl7bi5fdXBkYXRlKG4uX3JlbmRlcigpLHQpfSxwKSx0PSExLG51bGw9PW4uJHZub2RlJiYobi5faXNNb3VudGVkPSEwLHZlKG4sXCJtb3VudGVkXCIpKSxufSxlLnByb3RvdHlwZS5fdXBkYXRlPWZ1bmN0aW9uKGUsdCl7dmFyIG49dGhpcztuLl9pc01vdW50ZWQmJnZlKG4sXCJiZWZvcmVVcGRhdGVcIik7dmFyIHI9bi4kZWwsaT1MaTtMaT1uO3ZhciBvPW4uX3Zub2RlO24uX3Zub2RlPWUsbz9uLiRlbD1uLl9fcGF0Y2hfXyhvLGUpOm4uJGVsPW4uX19wYXRjaF9fKG4uJGVsLGUsdCksTGk9aSxyJiYoci5fX3Z1ZV9fPW51bGwpLG4uJGVsJiYobi4kZWwuX192dWVfXz1uKSxuLiR2bm9kZSYmbi4kcGFyZW50JiZuLiR2bm9kZT09PW4uJHBhcmVudC5fdm5vZGUmJihuLiRwYXJlbnQuJGVsPW4uJGVsKSxuLl9pc01vdW50ZWQmJnZlKG4sXCJ1cGRhdGVkXCIpfSxlLnByb3RvdHlwZS5fdXBkYXRlRnJvbVBhcmVudD1mdW5jdGlvbihlLHQsbixyKXt2YXIgaT10aGlzLG89ISghaS4kb3B0aW9ucy5fcmVuZGVyQ2hpbGRyZW4mJiFyKTtpZihpLiRvcHRpb25zLl9wYXJlbnRWbm9kZT1uLGkuJG9wdGlvbnMuX3JlbmRlckNoaWxkcmVuPXIsZSYmaS4kb3B0aW9ucy5wcm9wcyl7Z2kuc2hvdWxkQ29udmVydD0hMTtmb3IodmFyIGE9aS4kb3B0aW9ucy5fcHJvcEtleXN8fFtdLHM9MDtzPGEubGVuZ3RoO3MrKyl7dmFyIGM9YVtzXTtpW2NdPVIoYyxpLiRvcHRpb25zLnByb3BzLGUsaSl9Z2kuc2hvdWxkQ29udmVydD0hMCxpLiRvcHRpb25zLnByb3BzRGF0YT1lfWlmKHQpe3ZhciBsPWkuJG9wdGlvbnMuX3BhcmVudExpc3RlbmVycztpLiRvcHRpb25zLl9wYXJlbnRMaXN0ZW5lcnM9dCxpLl91cGRhdGVMaXN0ZW5lcnModCxsKX1vJiYoaS4kc2xvdHM9RWUocixpLl9yZW5kZXJDb250ZXh0KSxpLiRmb3JjZVVwZGF0ZSgpKX0sZS5wcm90b3R5cGUuJGZvcmNlVXBkYXRlPWZ1bmN0aW9uKCl7dmFyIGU9dGhpcztlLl93YXRjaGVyJiZlLl93YXRjaGVyLnVwZGF0ZSgpfSxlLnByb3RvdHlwZS4kZGVzdHJveT1mdW5jdGlvbigpe3ZhciBlPXRoaXM7aWYoIWUuX2lzQmVpbmdEZXN0cm95ZWQpe3ZlKGUsXCJiZWZvcmVEZXN0cm95XCIpLGUuX2lzQmVpbmdEZXN0cm95ZWQ9ITA7dmFyIHQ9ZS4kcGFyZW50OyF0fHx0Ll9pc0JlaW5nRGVzdHJveWVkfHxlLiRvcHRpb25zLmFic3RyYWN0fHxyKHQuJGNoaWxkcmVuLGUpLGUuX3dhdGNoZXImJmUuX3dhdGNoZXIudGVhcmRvd24oKTtmb3IodmFyIG49ZS5fd2F0Y2hlcnMubGVuZ3RoO24tLTspZS5fd2F0Y2hlcnNbbl0udGVhcmRvd24oKTtlLl9kYXRhLl9fb2JfXyYmZS5fZGF0YS5fX29iX18udm1Db3VudC0tLGUuX2lzRGVzdHJveWVkPSEwLHZlKGUsXCJkZXN0cm95ZWRcIiksZS4kb2ZmKCksZS4kZWwmJihlLiRlbC5fX3Z1ZV9fPW51bGwpLGUuX19wYXRjaF9fKGUuX3Zub2RlLG51bGwpfX19ZnVuY3Rpb24gdmUoZSx0KXt2YXIgbj1lLiRvcHRpb25zW3RdO2lmKG4pZm9yKHZhciByPTAsaT1uLmxlbmd0aDtyPGk7cisrKW5bcl0uY2FsbChlKTtlLiRlbWl0KFwiaG9vazpcIit0KX1mdW5jdGlvbiBoZShlLHQsbixyLGkpe2lmKGUpe3ZhciBvPW4uJG9wdGlvbnMuX2Jhc2U7aWYodShlKSYmKGU9by5leHRlbmQoZSkpLFwiZnVuY3Rpb25cIj09dHlwZW9mIGUpe2lmKCFlLmNpZClpZihlLnJlc29sdmVkKWU9ZS5yZXNvbHZlZDtlbHNlIGlmKGU9d2UoZSxvLGZ1bmN0aW9uKCl7bi4kZm9yY2VVcGRhdGUoKX0pLCFlKXJldHVybjtQZShlKSx0PXR8fHt9O3ZhciBhPXhlKHQsZSk7aWYoZS5vcHRpb25zLmZ1bmN0aW9uYWwpcmV0dXJuIG1lKGUsYSx0LG4scik7dmFyIHM9dC5vbjt0Lm9uPXQubmF0aXZlT24sZS5vcHRpb25zLmFic3RyYWN0JiYodD17fSksa2UodCk7dmFyIGM9ZS5vcHRpb25zLm5hbWV8fGksbD1uZXcgRWkoXCJ2dWUtY29tcG9uZW50LVwiK2UuY2lkKyhjP1wiLVwiK2M6XCJcIiksdCx2b2lkIDAsdm9pZCAwLHZvaWQgMCx2b2lkIDAsbix7Q3RvcjplLHByb3BzRGF0YTphLGxpc3RlbmVyczpzLHRhZzppLGNoaWxkcmVuOnJ9KTtyZXR1cm4gbH19fWZ1bmN0aW9uIG1lKGUsdCxuLHIsaSl7dmFyIG89e30sYT1lLm9wdGlvbnMucHJvcHM7aWYoYSlmb3IodmFyIGMgaW4gYSlvW2NdPVIoYyxhLHQpO3ZhciBsPWUub3B0aW9ucy5yZW5kZXIuY2FsbChudWxsLHMoT2Use19zZWxmOk9iamVjdC5jcmVhdGUocil9KSx7cHJvcHM6byxkYXRhOm4scGFyZW50OnIsY2hpbGRyZW46Y2UoaSksc2xvdHM6ZnVuY3Rpb24oKXtyZXR1cm4gRWUoaSxyKX19KTtyZXR1cm4gbCBpbnN0YW5jZW9mIEVpJiYobC5mdW5jdGlvbmFsQ29udGV4dD1yLG4uc2xvdCYmKChsLmRhdGF8fChsLmRhdGE9e30pKS5zbG90PW4uc2xvdCkpLGx9ZnVuY3Rpb24gZ2UoZSx0KXt2YXIgbj1lLmNvbXBvbmVudE9wdGlvbnMscj17X2lzQ29tcG9uZW50OiEwLHBhcmVudDp0LHByb3BzRGF0YTpuLnByb3BzRGF0YSxfY29tcG9uZW50VGFnOm4udGFnLF9wYXJlbnRWbm9kZTplLF9wYXJlbnRMaXN0ZW5lcnM6bi5saXN0ZW5lcnMsX3JlbmRlckNoaWxkcmVuOm4uY2hpbGRyZW59LGk9ZS5kYXRhLmlubGluZVRlbXBsYXRlO3JldHVybiBpJiYoci5yZW5kZXI9aS5yZW5kZXIsci5zdGF0aWNSZW5kZXJGbnM9aS5zdGF0aWNSZW5kZXJGbnMpLG5ldyBuLkN0b3Iocil9ZnVuY3Rpb24geWUoZSx0KXtpZighZS5jaGlsZHx8ZS5jaGlsZC5faXNEZXN0cm95ZWQpe3ZhciBuPWUuY2hpbGQ9Z2UoZSxMaSk7bi4kbW91bnQodD9lLmVsbTp2b2lkIDAsdCl9ZWxzZSBpZihlLmRhdGEua2VlcEFsaXZlKXt2YXIgcj1lO19lKHIscil9fWZ1bmN0aW9uIF9lKGUsdCl7dmFyIG49dC5jb21wb25lbnRPcHRpb25zLHI9dC5jaGlsZD1lLmNoaWxkO3IuX3VwZGF0ZUZyb21QYXJlbnQobi5wcm9wc0RhdGEsbi5saXN0ZW5lcnMsdCxuLmNoaWxkcmVuKX1mdW5jdGlvbiBiZShlKXtlLmNoaWxkLl9pc01vdW50ZWR8fChlLmNoaWxkLl9pc01vdW50ZWQ9ITAsdmUoZS5jaGlsZCxcIm1vdW50ZWRcIikpLGUuZGF0YS5rZWVwQWxpdmUmJihlLmNoaWxkLl9pbmFjdGl2ZT0hMSx2ZShlLmNoaWxkLFwiYWN0aXZhdGVkXCIpKX1mdW5jdGlvbiAkZShlKXtlLmNoaWxkLl9pc0Rlc3Ryb3llZHx8KGUuZGF0YS5rZWVwQWxpdmU/KGUuY2hpbGQuX2luYWN0aXZlPSEwLHZlKGUuY2hpbGQsXCJkZWFjdGl2YXRlZFwiKSk6ZS5jaGlsZC4kZGVzdHJveSgpKX1mdW5jdGlvbiB3ZShlLHQsbil7aWYoIWUucmVxdWVzdGVkKXtlLnJlcXVlc3RlZD0hMDt2YXIgcj1lLnBlbmRpbmdDYWxsYmFja3M9W25dLGk9ITAsbz1mdW5jdGlvbihuKXtpZih1KG4pJiYobj10LmV4dGVuZChuKSksZS5yZXNvbHZlZD1uLCFpKWZvcih2YXIgbz0wLGE9ci5sZW5ndGg7bzxhO28rKylyW29dKG4pfSxhPWZ1bmN0aW9uKGUpe30scz1lKG8sYSk7cmV0dXJuIHMmJlwiZnVuY3Rpb25cIj09dHlwZW9mIHMudGhlbiYmIWUucmVzb2x2ZWQmJnMudGhlbihvLGEpLGk9ITEsZS5yZXNvbHZlZH1lLnBlbmRpbmdDYWxsYmFja3MucHVzaChuKX1mdW5jdGlvbiB4ZShlLHQpe3ZhciBuPXQub3B0aW9ucy5wcm9wcztpZihuKXt2YXIgcj17fSxpPWUuYXR0cnMsbz1lLnByb3BzLGE9ZS5kb21Qcm9wcztpZihpfHxvfHxhKWZvcih2YXIgcyBpbiBuKXt2YXIgYz1LcihzKTtDZShyLG8scyxjLCEwKXx8Q2UocixpLHMsYyl8fENlKHIsYSxzLGMpfXJldHVybiByfX1mdW5jdGlvbiBDZShlLHQsbixyLG8pe2lmKHQpe2lmKGkodCxuKSlyZXR1cm4gZVtuXT10W25dLG98fGRlbGV0ZSB0W25dLCEwO2lmKGkodCxyKSlyZXR1cm4gZVtuXT10W3JdLG98fGRlbGV0ZSB0W3JdLCEwfXJldHVybiExfWZ1bmN0aW9uIGtlKGUpe2UuaG9va3x8KGUuaG9vaz17fSk7Zm9yKHZhciB0PTA7dDxNaS5sZW5ndGg7dCsrKXt2YXIgbj1NaVt0XSxyPWUuaG9va1tuXSxpPURpW25dO2UuaG9va1tuXT1yP0FlKGkscik6aX19ZnVuY3Rpb24gQWUoZSx0KXtyZXR1cm4gZnVuY3Rpb24obixyKXtlKG4sciksdChuLHIpfX1mdW5jdGlvbiBPZShlLHQsbil7cmV0dXJuIHQmJihBcnJheS5pc0FycmF5KHQpfHxcIm9iamVjdFwiIT10eXBlb2YgdCkmJihuPXQsdD12b2lkIDApLFNlKHRoaXMuX3NlbGYsZSx0LG4pfWZ1bmN0aW9uIFNlKGUsdCxuLHIpe2lmKCFufHwhbi5fX29iX18pe2lmKCF0KXJldHVybiBOaSgpO2lmKEFycmF5LmlzQXJyYXkocikmJlwiZnVuY3Rpb25cIj09dHlwZW9mIHJbMF0mJihuPW58fHt9LG4uc2NvcGVkU2xvdHM9e2RlZmF1bHQ6clswXX0sci5sZW5ndGg9MCksXCJzdHJpbmdcIj09dHlwZW9mIHQpe3ZhciBpLG89bGkuZ2V0VGFnTmFtZXNwYWNlKHQpO2lmKGxpLmlzUmVzZXJ2ZWRUYWcodCkpcmV0dXJuIG5ldyBFaSh0LG4sY2UocixvKSx2b2lkIDAsdm9pZCAwLG8sZSk7aWYoaT1QKGUuJG9wdGlvbnMsXCJjb21wb25lbnRzXCIsdCkpcmV0dXJuIGhlKGksbixlLHIsdCk7dmFyIGE9XCJmb3JlaWduT2JqZWN0XCI9PT10P1wieGh0bWxcIjpvO3JldHVybiBuZXcgRWkodCxuLGNlKHIsYSksdm9pZCAwLHZvaWQgMCxvLGUpfXJldHVybiBoZSh0LG4sZSxyKX19ZnVuY3Rpb24gVGUoZSl7ZS4kdm5vZGU9bnVsbCxlLl92bm9kZT1udWxsLGUuX3N0YXRpY1RyZWVzPW51bGwsZS5fcmVuZGVyQ29udGV4dD1lLiRvcHRpb25zLl9wYXJlbnRWbm9kZSYmZS4kb3B0aW9ucy5fcGFyZW50Vm5vZGUuY29udGV4dCxlLiRzbG90cz1FZShlLiRvcHRpb25zLl9yZW5kZXJDaGlsZHJlbixlLl9yZW5kZXJDb250ZXh0KSxlLiRzY29wZWRTbG90cz1udWxsLGUuJGNyZWF0ZUVsZW1lbnQ9cyhPZSxlKSxlLiRvcHRpb25zLmVsJiZlLiRtb3VudChlLiRvcHRpb25zLmVsKX1mdW5jdGlvbiBqZShuKXtmdW5jdGlvbiByKGUsdCxuKXtpZihBcnJheS5pc0FycmF5KGUpKWZvcih2YXIgcj0wO3I8ZS5sZW5ndGg7cisrKWVbcl0mJlwic3RyaW5nXCIhPXR5cGVvZiBlW3JdJiZpKGVbcl0sdCtcIl9cIityLG4pO2Vsc2UgaShlLHQsbil9ZnVuY3Rpb24gaShlLHQsbil7ZS5pc1N0YXRpYz0hMCxlLmtleT10LGUuaXNPbmNlPW59bi5wcm90b3R5cGUuJG5leHRUaWNrPWZ1bmN0aW9uKGUpe3JldHVybiBzaShlLHRoaXMpfSxuLnByb3RvdHlwZS5fcmVuZGVyPWZ1bmN0aW9uKCl7dmFyIGU9dGhpcyx0PWUuJG9wdGlvbnMsbj10LnJlbmRlcixyPXQuc3RhdGljUmVuZGVyRm5zLGk9dC5fcGFyZW50Vm5vZGU7aWYoZS5faXNNb3VudGVkKWZvcih2YXIgbyBpbiBlLiRzbG90cyllLiRzbG90c1tvXT1yZShlLiRzbG90c1tvXSk7aSYmKGUuJHNjb3BlZFNsb3RzPWkuZGF0YS5zY29wZWRTbG90cyksciYmIWUuX3N0YXRpY1RyZWVzJiYoZS5fc3RhdGljVHJlZXM9W10pLGUuJHZub2RlPWk7dmFyIGE7dHJ5e2E9bi5jYWxsKGUuX3JlbmRlclByb3h5LGUuJGNyZWF0ZUVsZW1lbnQpfWNhdGNoKHQpe2lmKGxpLmVycm9ySGFuZGxlcilsaS5lcnJvckhhbmRsZXIuY2FsbChudWxsLHQsZSk7ZWxzZXtpZihvaSgpKXRocm93IHQ7Y29uc29sZS5lcnJvcih0KX1hPWUuX3Zub2RlfXJldHVybiBhIGluc3RhbmNlb2YgRWl8fChhPU5pKCkpLGEucGFyZW50PWksYX0sbi5wcm90b3R5cGUuX2g9T2Usbi5wcm90b3R5cGUuX3M9ZSxuLnByb3RvdHlwZS5fbj10LG4ucHJvdG90eXBlLl9lPU5pLG4ucHJvdG90eXBlLl9xPWgsbi5wcm90b3R5cGUuX2k9bSxuLnByb3RvdHlwZS5fbT1mdW5jdGlvbihlLHQpe3ZhciBuPXRoaXMuX3N0YXRpY1RyZWVzW2VdO3JldHVybiBuJiYhdD9BcnJheS5pc0FycmF5KG4pP3JlKG4pOm5lKG4pOihuPXRoaXMuX3N0YXRpY1RyZWVzW2VdPXRoaXMuJG9wdGlvbnMuc3RhdGljUmVuZGVyRm5zW2VdLmNhbGwodGhpcy5fcmVuZGVyUHJveHkpLHIobixcIl9fc3RhdGljX19cIitlLCExKSxuKX0sbi5wcm90b3R5cGUuX289ZnVuY3Rpb24oZSx0LG4pe3JldHVybiByKGUsXCJfX29uY2VfX1wiK3QrKG4/XCJfXCIrbjpcIlwiKSwhMCksZX07dmFyIG89ZnVuY3Rpb24oZSl7cmV0dXJuIGV9O24ucHJvdG90eXBlLl9mPWZ1bmN0aW9uKGUpe3JldHVybiBQKHRoaXMuJG9wdGlvbnMsXCJmaWx0ZXJzXCIsZSwhMCl8fG99LG4ucHJvdG90eXBlLl9sPWZ1bmN0aW9uKGUsdCl7dmFyIG4scixpLG8sYTtpZihBcnJheS5pc0FycmF5KGUpKWZvcihuPW5ldyBBcnJheShlLmxlbmd0aCkscj0wLGk9ZS5sZW5ndGg7cjxpO3IrKyluW3JdPXQoZVtyXSxyKTtlbHNlIGlmKFwibnVtYmVyXCI9PXR5cGVvZiBlKWZvcihuPW5ldyBBcnJheShlKSxyPTA7cjxlO3IrKyluW3JdPXQocisxLHIpO2Vsc2UgaWYodShlKSlmb3Iobz1PYmplY3Qua2V5cyhlKSxuPW5ldyBBcnJheShvLmxlbmd0aCkscj0wLGk9by5sZW5ndGg7cjxpO3IrKylhPW9bcl0sbltyXT10KGVbYV0sYSxyKTtyZXR1cm4gbn0sbi5wcm90b3R5cGUuX3Q9ZnVuY3Rpb24oZSx0LG4pe3ZhciByPXRoaXMuJHNjb3BlZFNsb3RzJiZ0aGlzLiRzY29wZWRTbG90c1tlXTtpZihyKXJldHVybiByKG58fHt9KXx8dDt2YXIgaT10aGlzLiRzbG90c1tlXTtyZXR1cm4gaXx8dH0sbi5wcm90b3R5cGUuX2I9ZnVuY3Rpb24oZSx0LG4scil7aWYobilpZih1KG4pKXtBcnJheS5pc0FycmF5KG4pJiYobj1kKG4pKTtmb3IodmFyIGkgaW4gbilpZihcImNsYXNzXCI9PT1pfHxcInN0eWxlXCI9PT1pKWVbaV09bltpXTtlbHNle3ZhciBvPXJ8fGxpLm11c3RVc2VQcm9wKHQsaSk/ZS5kb21Qcm9wc3x8KGUuZG9tUHJvcHM9e30pOmUuYXR0cnN8fChlLmF0dHJzPXt9KTtvW2ldPW5baV19fWVsc2U7cmV0dXJuIGV9LG4ucHJvdG90eXBlLl9rPWZ1bmN0aW9uKGUpe3JldHVybiBsaS5rZXlDb2Rlc1tlXX19ZnVuY3Rpb24gRWUoZSx0KXt2YXIgbj17fTtpZighZSlyZXR1cm4gbjtmb3IodmFyIHIsaSxvPWNlKGUpfHxbXSxhPVtdLHM9MCxjPW8ubGVuZ3RoO3M8YztzKyspaWYoaT1vW3NdLChpLmNvbnRleHQ9PT10fHxpLmZ1bmN0aW9uYWxDb250ZXh0PT09dCkmJmkuZGF0YSYmKHI9aS5kYXRhLnNsb3QpKXt2YXIgbD1uW3JdfHwobltyXT1bXSk7XCJ0ZW1wbGF0ZVwiPT09aS50YWc/bC5wdXNoLmFwcGx5KGwsaS5jaGlsZHJlbik6bC5wdXNoKGkpfWVsc2UgYS5wdXNoKGkpO3JldHVybiBhLmxlbmd0aCYmKDEhPT1hLmxlbmd0aHx8XCIgXCIhPT1hWzBdLnRleHQmJiFhWzBdLmlzQ29tbWVudCkmJihuLmRlZmF1bHQ9YSksbn1mdW5jdGlvbiBOZShlKXtlLl9ldmVudHM9T2JqZWN0LmNyZWF0ZShudWxsKTt2YXIgdD1lLiRvcHRpb25zLl9wYXJlbnRMaXN0ZW5lcnMsbj1zKGUuJG9uLGUpLHI9cyhlLiRvZmYsZSk7ZS5fdXBkYXRlTGlzdGVuZXJzPWZ1bmN0aW9uKHQsaSl7b2UodCxpfHx7fSxuLHIsZSl9LHQmJmUuX3VwZGF0ZUxpc3RlbmVycyh0KX1mdW5jdGlvbiBMZShlKXtlLnByb3RvdHlwZS4kb249ZnVuY3Rpb24oZSx0KXt2YXIgbj10aGlzO3JldHVybihuLl9ldmVudHNbZV18fChuLl9ldmVudHNbZV09W10pKS5wdXNoKHQpLG59LGUucHJvdG90eXBlLiRvbmNlPWZ1bmN0aW9uKGUsdCl7ZnVuY3Rpb24gbigpe3IuJG9mZihlLG4pLHQuYXBwbHkocixhcmd1bWVudHMpfXZhciByPXRoaXM7cmV0dXJuIG4uZm49dCxyLiRvbihlLG4pLHJ9LGUucHJvdG90eXBlLiRvZmY9ZnVuY3Rpb24oZSx0KXt2YXIgbj10aGlzO2lmKCFhcmd1bWVudHMubGVuZ3RoKXJldHVybiBuLl9ldmVudHM9T2JqZWN0LmNyZWF0ZShudWxsKSxuO3ZhciByPW4uX2V2ZW50c1tlXTtpZighcilyZXR1cm4gbjtpZigxPT09YXJndW1lbnRzLmxlbmd0aClyZXR1cm4gbi5fZXZlbnRzW2VdPW51bGwsbjtmb3IodmFyIGksbz1yLmxlbmd0aDtvLS07KWlmKGk9cltvXSxpPT09dHx8aS5mbj09PXQpe3Iuc3BsaWNlKG8sMSk7YnJlYWt9cmV0dXJuIG59LGUucHJvdG90eXBlLiRlbWl0PWZ1bmN0aW9uKGUpe3ZhciB0PXRoaXMsbj10Ll9ldmVudHNbZV07aWYobil7bj1uLmxlbmd0aD4xP2Mobik6bjtmb3IodmFyIHI9Yyhhcmd1bWVudHMsMSksaT0wLG89bi5sZW5ndGg7aTxvO2krKyluW2ldLmFwcGx5KHQscil9cmV0dXJuIHR9fWZ1bmN0aW9uIERlKGUpe2UucHJvdG90eXBlLl9pbml0PWZ1bmN0aW9uKGUpe3ZhciB0PXRoaXM7dC5fdWlkPVBpKyssdC5faXNWdWU9ITAsZSYmZS5faXNDb21wb25lbnQ/TWUodCxlKTp0LiRvcHRpb25zPU0oUGUodC5jb25zdHJ1Y3RvciksZXx8e30sdCksdC5fcmVuZGVyUHJveHk9dCx0Ll9zZWxmPXQsZGUodCksTmUodCksdmUodCxcImJlZm9yZUNyZWF0ZVwiKSxLKHQpLHZlKHQsXCJjcmVhdGVkXCIpLFRlKHQpfX1mdW5jdGlvbiBNZShlLHQpe3ZhciBuPWUuJG9wdGlvbnM9T2JqZWN0LmNyZWF0ZShlLmNvbnN0cnVjdG9yLm9wdGlvbnMpO24ucGFyZW50PXQucGFyZW50LG4ucHJvcHNEYXRhPXQucHJvcHNEYXRhLG4uX3BhcmVudFZub2RlPXQuX3BhcmVudFZub2RlLG4uX3BhcmVudExpc3RlbmVycz10Ll9wYXJlbnRMaXN0ZW5lcnMsbi5fcmVuZGVyQ2hpbGRyZW49dC5fcmVuZGVyQ2hpbGRyZW4sbi5fY29tcG9uZW50VGFnPXQuX2NvbXBvbmVudFRhZyx0LnJlbmRlciYmKG4ucmVuZGVyPXQucmVuZGVyLG4uc3RhdGljUmVuZGVyRm5zPXQuc3RhdGljUmVuZGVyRm5zKX1mdW5jdGlvbiBQZShlKXt2YXIgdD1lLm9wdGlvbnM7aWYoZS5zdXBlcil7dmFyIG49ZS5zdXBlci5vcHRpb25zLHI9ZS5zdXBlck9wdGlvbnMsaT1lLmV4dGVuZE9wdGlvbnM7biE9PXImJihlLnN1cGVyT3B0aW9ucz1uLGkucmVuZGVyPXQucmVuZGVyLGkuc3RhdGljUmVuZGVyRm5zPXQuc3RhdGljUmVuZGVyRm5zLGkuX3Njb3BlSWQ9dC5fc2NvcGVJZCx0PWUub3B0aW9ucz1NKG4saSksdC5uYW1lJiYodC5jb21wb25lbnRzW3QubmFtZV09ZSkpfXJldHVybiB0fWZ1bmN0aW9uIFJlKGUpe3RoaXMuX2luaXQoZSl9ZnVuY3Rpb24gSWUoZSl7ZS51c2U9ZnVuY3Rpb24oZSl7aWYoIWUuaW5zdGFsbGVkKXt2YXIgdD1jKGFyZ3VtZW50cywxKTtyZXR1cm4gdC51bnNoaWZ0KHRoaXMpLFwiZnVuY3Rpb25cIj09dHlwZW9mIGUuaW5zdGFsbD9lLmluc3RhbGwuYXBwbHkoZSx0KTplLmFwcGx5KG51bGwsdCksZS5pbnN0YWxsZWQ9ITAsdGhpc319fWZ1bmN0aW9uIEZlKGUpe2UubWl4aW49ZnVuY3Rpb24oZSl7dGhpcy5vcHRpb25zPU0odGhpcy5vcHRpb25zLGUpfX1mdW5jdGlvbiBCZShlKXtlLmNpZD0wO3ZhciB0PTE7ZS5leHRlbmQ9ZnVuY3Rpb24oZSl7ZT1lfHx7fTt2YXIgbj10aGlzLHI9bi5jaWQsaT1lLl9DdG9yfHwoZS5fQ3Rvcj17fSk7aWYoaVtyXSlyZXR1cm4gaVtyXTt2YXIgbz1lLm5hbWV8fG4ub3B0aW9ucy5uYW1lLGE9ZnVuY3Rpb24oZSl7dGhpcy5faW5pdChlKX07cmV0dXJuIGEucHJvdG90eXBlPU9iamVjdC5jcmVhdGUobi5wcm90b3R5cGUpLGEucHJvdG90eXBlLmNvbnN0cnVjdG9yPWEsYS5jaWQ9dCsrLGEub3B0aW9ucz1NKG4ub3B0aW9ucyxlKSxhLnN1cGVyPW4sYS5leHRlbmQ9bi5leHRlbmQsYS5taXhpbj1uLm1peGluLGEudXNlPW4udXNlLGxpLl9hc3NldFR5cGVzLmZvckVhY2goZnVuY3Rpb24oZSl7YVtlXT1uW2VdfSksbyYmKGEub3B0aW9ucy5jb21wb25lbnRzW29dPWEpLGEuc3VwZXJPcHRpb25zPW4ub3B0aW9ucyxhLmV4dGVuZE9wdGlvbnM9ZSxpW3JdPWEsYX19ZnVuY3Rpb24gVWUoZSl7bGkuX2Fzc2V0VHlwZXMuZm9yRWFjaChmdW5jdGlvbih0KXtlW3RdPWZ1bmN0aW9uKGUsbil7cmV0dXJuIG4/KFwiY29tcG9uZW50XCI9PT10JiZmKG4pJiYobi5uYW1lPW4ubmFtZXx8ZSxuPXRoaXMub3B0aW9ucy5fYmFzZS5leHRlbmQobikpLFwiZGlyZWN0aXZlXCI9PT10JiZcImZ1bmN0aW9uXCI9PXR5cGVvZiBuJiYobj17YmluZDpuLHVwZGF0ZTpufSksdGhpcy5vcHRpb25zW3QrXCJzXCJdW2VdPW4sbik6dGhpcy5vcHRpb25zW3QrXCJzXCJdW2VdfX0pfWZ1bmN0aW9uIEhlKGUsdCl7cmV0dXJuXCJzdHJpbmdcIj09dHlwZW9mIGU/ZS5zcGxpdChcIixcIikuaW5kZXhPZih0KT4tMTplLnRlc3QodCl9ZnVuY3Rpb24gVmUoZSl7dmFyIHQ9e307dC5nZXQ9ZnVuY3Rpb24oKXtyZXR1cm4gbGl9LE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFwiY29uZmlnXCIsdCksZS51dGlsPSRpLGUuc2V0PU8sZS5kZWxldGU9UyxlLm5leHRUaWNrPXNpLGUub3B0aW9ucz1PYmplY3QuY3JlYXRlKG51bGwpLGxpLl9hc3NldFR5cGVzLmZvckVhY2goZnVuY3Rpb24odCl7ZS5vcHRpb25zW3QrXCJzXCJdPU9iamVjdC5jcmVhdGUobnVsbCl9KSxlLm9wdGlvbnMuX2Jhc2U9ZSxsKGUub3B0aW9ucy5jb21wb25lbnRzLEZpKSxJZShlKSxGZShlKSxCZShlKSxVZShlKX1mdW5jdGlvbiB6ZShlKXtmb3IodmFyIHQ9ZS5kYXRhLG49ZSxyPWU7ci5jaGlsZDspcj1yLmNoaWxkLl92bm9kZSxyLmRhdGEmJih0PUplKHIuZGF0YSx0KSk7Zm9yKDtuPW4ucGFyZW50OyluLmRhdGEmJih0PUplKHQsbi5kYXRhKSk7cmV0dXJuIEtlKHQpfWZ1bmN0aW9uIEplKGUsdCl7cmV0dXJue3N0YXRpY0NsYXNzOnFlKGUuc3RhdGljQ2xhc3MsdC5zdGF0aWNDbGFzcyksY2xhc3M6ZS5jbGFzcz9bZS5jbGFzcyx0LmNsYXNzXTp0LmNsYXNzfX1mdW5jdGlvbiBLZShlKXt2YXIgdD1lLmNsYXNzLG49ZS5zdGF0aWNDbGFzcztyZXR1cm4gbnx8dD9xZShuLFdlKHQpKTpcIlwifWZ1bmN0aW9uIHFlKGUsdCl7cmV0dXJuIGU/dD9lK1wiIFwiK3Q6ZTp0fHxcIlwifWZ1bmN0aW9uIFdlKGUpe3ZhciB0PVwiXCI7aWYoIWUpcmV0dXJuIHQ7aWYoXCJzdHJpbmdcIj09dHlwZW9mIGUpcmV0dXJuIGU7aWYoQXJyYXkuaXNBcnJheShlKSl7Zm9yKHZhciBuLHI9MCxpPWUubGVuZ3RoO3I8aTtyKyspZVtyXSYmKG49V2UoZVtyXSkpJiYodCs9bitcIiBcIik7cmV0dXJuIHQuc2xpY2UoMCwtMSl9aWYodShlKSl7Zm9yKHZhciBvIGluIGUpZVtvXSYmKHQrPW8rXCIgXCIpO3JldHVybiB0LnNsaWNlKDAsLTEpfXJldHVybiB0fWZ1bmN0aW9uIFplKGUpe3JldHVybiBYaShlKT9cInN2Z1wiOlwibWF0aFwiPT09ZT9cIm1hdGhcIjp2b2lkIDB9ZnVuY3Rpb24gR2UoZSl7aWYoIVFyKXJldHVybiEwO2lmKHRvKGUpKXJldHVybiExO2lmKGU9ZS50b0xvd2VyQ2FzZSgpLG51bGwhPW5vW2VdKXJldHVybiBub1tlXTt2YXIgdD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KGUpO3JldHVybiBlLmluZGV4T2YoXCItXCIpPi0xP25vW2VdPXQuY29uc3RydWN0b3I9PT13aW5kb3cuSFRNTFVua25vd25FbGVtZW50fHx0LmNvbnN0cnVjdG9yPT09d2luZG93LkhUTUxFbGVtZW50Om5vW2VdPS9IVE1MVW5rbm93bkVsZW1lbnQvLnRlc3QodC50b1N0cmluZygpKX1mdW5jdGlvbiBZZShlKXtpZihcInN0cmluZ1wiPT10eXBlb2YgZSl7aWYoZT1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKGUpLCFlKXJldHVybiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpfXJldHVybiBlfWZ1bmN0aW9uIFFlKGUsdCl7dmFyIG49ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChlKTtyZXR1cm5cInNlbGVjdFwiIT09ZT9uOih0LmRhdGEmJnQuZGF0YS5hdHRycyYmXCJtdWx0aXBsZVwiaW4gdC5kYXRhLmF0dHJzJiZuLnNldEF0dHJpYnV0ZShcIm11bHRpcGxlXCIsXCJtdWx0aXBsZVwiKSxuKX1mdW5jdGlvbiBYZShlLHQpe3JldHVybiBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoV2lbZV0sdCl9ZnVuY3Rpb24gZXQoZSl7cmV0dXJuIGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGUpfWZ1bmN0aW9uIHR0KGUpe3JldHVybiBkb2N1bWVudC5jcmVhdGVDb21tZW50KGUpfWZ1bmN0aW9uIG50KGUsdCxuKXtlLmluc2VydEJlZm9yZSh0LG4pfWZ1bmN0aW9uIHJ0KGUsdCl7ZS5yZW1vdmVDaGlsZCh0KX1mdW5jdGlvbiBpdChlLHQpe2UuYXBwZW5kQ2hpbGQodCl9ZnVuY3Rpb24gb3QoZSl7cmV0dXJuIGUucGFyZW50Tm9kZX1mdW5jdGlvbiBhdChlKXtyZXR1cm4gZS5uZXh0U2libGluZ31mdW5jdGlvbiBzdChlKXtyZXR1cm4gZS50YWdOYW1lfWZ1bmN0aW9uIGN0KGUsdCl7ZS50ZXh0Q29udGVudD10fWZ1bmN0aW9uIGx0KGUpe3JldHVybiBlLmNoaWxkTm9kZXN9ZnVuY3Rpb24gdXQoZSx0LG4pe2Uuc2V0QXR0cmlidXRlKHQsbil9ZnVuY3Rpb24gZnQoZSx0KXt2YXIgbj1lLmRhdGEucmVmO2lmKG4pe3ZhciBpPWUuY29udGV4dCxvPWUuY2hpbGR8fGUuZWxtLGE9aS4kcmVmczt0P0FycmF5LmlzQXJyYXkoYVtuXSk/cihhW25dLG8pOmFbbl09PT1vJiYoYVtuXT12b2lkIDApOmUuZGF0YS5yZWZJbkZvcj9BcnJheS5pc0FycmF5KGFbbl0pJiZhW25dLmluZGV4T2Yobyk8MD9hW25dLnB1c2gobyk6YVtuXT1bb106YVtuXT1vfX1mdW5jdGlvbiBkdChlKXtyZXR1cm4gbnVsbD09ZX1mdW5jdGlvbiBwdChlKXtyZXR1cm4gbnVsbCE9ZX1mdW5jdGlvbiB2dChlLHQpe3JldHVybiBlLmtleT09PXQua2V5JiZlLnRhZz09PXQudGFnJiZlLmlzQ29tbWVudD09PXQuaXNDb21tZW50JiYhZS5kYXRhPT0hdC5kYXRhfWZ1bmN0aW9uIGh0KGUsdCxuKXt2YXIgcixpLG89e307Zm9yKHI9dDtyPD1uOysrcilpPWVbcl0ua2V5LHB0KGkpJiYob1tpXT1yKTtyZXR1cm4gb31mdW5jdGlvbiBtdChlKXtmdW5jdGlvbiB0KGUpe3JldHVybiBuZXcgRWkoeC50YWdOYW1lKGUpLnRvTG93ZXJDYXNlKCkse30sW10sdm9pZCAwLGUpfWZ1bmN0aW9uIG4oZSx0KXtmdW5jdGlvbiBuKCl7MD09PS0tbi5saXN0ZW5lcnMmJnIoZSl9cmV0dXJuIG4ubGlzdGVuZXJzPXQsbn1mdW5jdGlvbiByKGUpe3ZhciB0PXgucGFyZW50Tm9kZShlKTt0JiZ4LnJlbW92ZUNoaWxkKHQsZSl9ZnVuY3Rpb24gaShlLHQsbil7dmFyIHIsaT1lLmRhdGE7aWYoZS5pc1Jvb3RJbnNlcnQ9IW4scHQoaSkmJihwdChyPWkuaG9vaykmJnB0KHI9ci5pbml0KSYmcihlKSxwdChyPWUuY2hpbGQpKSlyZXR1cm4gbChlLHQpLGUuZWxtO3ZhciBvPWUuY2hpbGRyZW4scz1lLnRhZztyZXR1cm4gcHQocyk/KGUuZWxtPWUubnM/eC5jcmVhdGVFbGVtZW50TlMoZS5ucyxzKTp4LmNyZWF0ZUVsZW1lbnQocyxlKSx1KGUpLGEoZSxvLHQpLHB0KGkpJiZjKGUsdCkpOmUuaXNDb21tZW50P2UuZWxtPXguY3JlYXRlQ29tbWVudChlLnRleHQpOmUuZWxtPXguY3JlYXRlVGV4dE5vZGUoZS50ZXh0KSxlLmVsbX1mdW5jdGlvbiBhKGUsdCxuKXtpZihBcnJheS5pc0FycmF5KHQpKWZvcih2YXIgcj0wO3I8dC5sZW5ndGg7KytyKXguYXBwZW5kQ2hpbGQoZS5lbG0saSh0W3JdLG4sITApKTtlbHNlIG8oZS50ZXh0KSYmeC5hcHBlbmRDaGlsZChlLmVsbSx4LmNyZWF0ZVRleHROb2RlKGUudGV4dCkpfWZ1bmN0aW9uIHMoZSl7Zm9yKDtlLmNoaWxkOyllPWUuY2hpbGQuX3Zub2RlO3JldHVybiBwdChlLnRhZyl9ZnVuY3Rpb24gYyhlLHQpe2Zvcih2YXIgbj0wO248JC5jcmVhdGUubGVuZ3RoOysrbikkLmNyZWF0ZVtuXShvbyxlKTtfPWUuZGF0YS5ob29rLHB0KF8pJiYoXy5jcmVhdGUmJl8uY3JlYXRlKG9vLGUpLF8uaW5zZXJ0JiZ0LnB1c2goZSkpfWZ1bmN0aW9uIGwoZSx0KXtlLmRhdGEucGVuZGluZ0luc2VydCYmdC5wdXNoLmFwcGx5KHQsZS5kYXRhLnBlbmRpbmdJbnNlcnQpLGUuZWxtPWUuY2hpbGQuJGVsLHMoZSk/KGMoZSx0KSx1KGUpKTooZnQoZSksdC5wdXNoKGUpKX1mdW5jdGlvbiB1KGUpe3ZhciB0O3B0KHQ9ZS5jb250ZXh0KSYmcHQodD10LiRvcHRpb25zLl9zY29wZUlkKSYmeC5zZXRBdHRyaWJ1dGUoZS5lbG0sdCxcIlwiKSxwdCh0PUxpKSYmdCE9PWUuY29udGV4dCYmcHQodD10LiRvcHRpb25zLl9zY29wZUlkKSYmeC5zZXRBdHRyaWJ1dGUoZS5lbG0sdCxcIlwiKX1mdW5jdGlvbiBmKGUsdCxuLHIsbyxhKXtmb3IoO3I8PW87KytyKXguaW5zZXJ0QmVmb3JlKGUsaShuW3JdLGEpLHQpfWZ1bmN0aW9uIGQoZSl7dmFyIHQsbixyPWUuZGF0YTtpZihwdChyKSlmb3IocHQodD1yLmhvb2spJiZwdCh0PXQuZGVzdHJveSkmJnQoZSksdD0wO3Q8JC5kZXN0cm95Lmxlbmd0aDsrK3QpJC5kZXN0cm95W3RdKGUpO2lmKHB0KHQ9ZS5jaGlsZHJlbikpZm9yKG49MDtuPGUuY2hpbGRyZW4ubGVuZ3RoOysrbilkKGUuY2hpbGRyZW5bbl0pfWZ1bmN0aW9uIHAoZSx0LG4scil7Zm9yKDtuPD1yOysrbil7dmFyIGk9dFtuXTtwdChpKSYmKHB0KGkudGFnKT8odihpKSxkKGkpKTp4LnJlbW92ZUNoaWxkKGUsaS5lbG0pKX19ZnVuY3Rpb24gdihlLHQpe2lmKHR8fHB0KGUuZGF0YSkpe3ZhciBpPSQucmVtb3ZlLmxlbmd0aCsxO2Zvcih0P3QubGlzdGVuZXJzKz1pOnQ9bihlLmVsbSxpKSxwdChfPWUuY2hpbGQpJiZwdChfPV8uX3Zub2RlKSYmcHQoXy5kYXRhKSYmdihfLHQpLF89MDtfPCQucmVtb3ZlLmxlbmd0aDsrK18pJC5yZW1vdmVbX10oZSx0KTtwdChfPWUuZGF0YS5ob29rKSYmcHQoXz1fLnJlbW92ZSk/XyhlLHQpOnQoKX1lbHNlIHIoZS5lbG0pfWZ1bmN0aW9uIGgoZSx0LG4scixvKXtmb3IodmFyIGEscyxjLGwsdT0wLGQ9MCx2PXQubGVuZ3RoLTEsaD10WzBdLGc9dFt2XSx5PW4ubGVuZ3RoLTEsXz1uWzBdLGI9blt5XSwkPSFvO3U8PXYmJmQ8PXk7KWR0KGgpP2g9dFsrK3VdOmR0KGcpP2c9dFstLXZdOnZ0KGgsXyk/KG0oaCxfLHIpLGg9dFsrK3VdLF89blsrK2RdKTp2dChnLGIpPyhtKGcsYixyKSxnPXRbLS12XSxiPW5bLS15XSk6dnQoaCxiKT8obShoLGIsciksJCYmeC5pbnNlcnRCZWZvcmUoZSxoLmVsbSx4Lm5leHRTaWJsaW5nKGcuZWxtKSksaD10WysrdV0sYj1uWy0teV0pOnZ0KGcsXyk/KG0oZyxfLHIpLCQmJnguaW5zZXJ0QmVmb3JlKGUsZy5lbG0saC5lbG0pLGc9dFstLXZdLF89blsrK2RdKTooZHQoYSkmJihhPWh0KHQsdSx2KSkscz1wdChfLmtleSk/YVtfLmtleV06bnVsbCxkdChzKT8oeC5pbnNlcnRCZWZvcmUoZSxpKF8sciksaC5lbG0pLF89blsrK2RdKTooYz10W3NdLGMudGFnIT09Xy50YWc/KHguaW5zZXJ0QmVmb3JlKGUsaShfLHIpLGguZWxtKSxfPW5bKytkXSk6KG0oYyxfLHIpLHRbc109dm9pZCAwLCQmJnguaW5zZXJ0QmVmb3JlKGUsXy5lbG0saC5lbG0pLF89blsrK2RdKSkpO3U+dj8obD1kdChuW3krMV0pP251bGw6blt5KzFdLmVsbSxmKGUsbCxuLGQseSxyKSk6ZD55JiZwKGUsdCx1LHYpfWZ1bmN0aW9uIG0oZSx0LG4scil7aWYoZSE9PXQpe2lmKHQuaXNTdGF0aWMmJmUuaXNTdGF0aWMmJnQua2V5PT09ZS5rZXkmJih0LmlzQ2xvbmVkfHx0LmlzT25jZSkpcmV0dXJuIHZvaWQodC5lbG09ZS5lbG0pO3ZhciBpLG89dC5kYXRhLGE9cHQobyk7YSYmcHQoaT1vLmhvb2spJiZwdChpPWkucHJlcGF0Y2gpJiZpKGUsdCk7dmFyIGM9dC5lbG09ZS5lbG0sbD1lLmNoaWxkcmVuLHU9dC5jaGlsZHJlbjtpZihhJiZzKHQpKXtmb3IoaT0wO2k8JC51cGRhdGUubGVuZ3RoOysraSkkLnVwZGF0ZVtpXShlLHQpO3B0KGk9by5ob29rKSYmcHQoaT1pLnVwZGF0ZSkmJmkoZSx0KX1kdCh0LnRleHQpP3B0KGwpJiZwdCh1KT9sIT09dSYmaChjLGwsdSxuLHIpOnB0KHUpPyhwdChlLnRleHQpJiZ4LnNldFRleHRDb250ZW50KGMsXCJcIiksZihjLG51bGwsdSwwLHUubGVuZ3RoLTEsbikpOnB0KGwpP3AoYyxsLDAsbC5sZW5ndGgtMSk6cHQoZS50ZXh0KSYmeC5zZXRUZXh0Q29udGVudChjLFwiXCIpOmUudGV4dCE9PXQudGV4dCYmeC5zZXRUZXh0Q29udGVudChjLHQudGV4dCksYSYmcHQoaT1vLmhvb2spJiZwdChpPWkucG9zdHBhdGNoKSYmaShlLHQpfX1mdW5jdGlvbiBnKGUsdCxuKXtpZihuJiZlLnBhcmVudCllLnBhcmVudC5kYXRhLnBlbmRpbmdJbnNlcnQ9dDtlbHNlIGZvcih2YXIgcj0wO3I8dC5sZW5ndGg7KytyKXRbcl0uZGF0YS5ob29rLmluc2VydCh0W3JdKX1mdW5jdGlvbiB5KGUsdCxuKXt0LmVsbT1lO3ZhciByPXQudGFnLGk9dC5kYXRhLG89dC5jaGlsZHJlbjtpZihwdChpKSYmKHB0KF89aS5ob29rKSYmcHQoXz1fLmluaXQpJiZfKHQsITApLHB0KF89dC5jaGlsZCkpKXJldHVybiBsKHQsbiksITA7aWYocHQocikpe2lmKHB0KG8pKXt2YXIgcz14LmNoaWxkTm9kZXMoZSk7aWYocy5sZW5ndGgpe3ZhciB1PSEwO2lmKHMubGVuZ3RoIT09by5sZW5ndGgpdT0hMTtlbHNlIGZvcih2YXIgZj0wO2Y8by5sZW5ndGg7ZisrKWlmKCF5KHNbZl0sb1tmXSxuKSl7dT0hMTticmVha31pZighdSlyZXR1cm4hMX1lbHNlIGEodCxvLG4pfXB0KGkpJiZjKHQsbil9cmV0dXJuITB9dmFyIF8sYiwkPXt9LHc9ZS5tb2R1bGVzLHg9ZS5ub2RlT3BzO2ZvcihfPTA7Xzxhby5sZW5ndGg7KytfKWZvcigkW2FvW19dXT1bXSxiPTA7Yjx3Lmxlbmd0aDsrK2Ipdm9pZCAwIT09d1tiXVthb1tfXV0mJiRbYW9bX11dLnB1c2god1tiXVthb1tfXV0pO3JldHVybiBmdW5jdGlvbihlLG4scixvKXtpZighbilyZXR1cm4gdm9pZChlJiZkKGUpKTt2YXIgYSxjLGw9ITEsdT1bXTtpZihlKXt2YXIgZj1wdChlLm5vZGVUeXBlKTtpZighZiYmdnQoZSxuKSltKGUsbix1LG8pO2Vsc2V7aWYoZil7aWYoMT09PWUubm9kZVR5cGUmJmUuaGFzQXR0cmlidXRlKFwic2VydmVyLXJlbmRlcmVkXCIpJiYoZS5yZW1vdmVBdHRyaWJ1dGUoXCJzZXJ2ZXItcmVuZGVyZWRcIikscj0hMCksciYmeShlLG4sdSkpcmV0dXJuIGcobix1LCEwKSxlO2U9dChlKX1pZihhPWUuZWxtLGM9eC5wYXJlbnROb2RlKGEpLGkobix1KSxuLnBhcmVudCYmKG4ucGFyZW50LmVsbT1uLmVsbSxzKG4pKSlmb3IodmFyIHY9MDt2PCQuY3JlYXRlLmxlbmd0aDsrK3YpJC5jcmVhdGVbdl0ob28sbi5wYXJlbnQpO251bGwhPT1jPyh4Lmluc2VydEJlZm9yZShjLG4uZWxtLHgubmV4dFNpYmxpbmcoYSkpLHAoYyxbZV0sMCwwKSk6cHQoZS50YWcpJiZkKGUpfX1lbHNlIGw9ITAsaShuLHUpO3JldHVybiBnKG4sdSxsKSxuLmVsbX19ZnVuY3Rpb24gZ3QoZSx0KXtpZihlLmRhdGEuZGlyZWN0aXZlc3x8dC5kYXRhLmRpcmVjdGl2ZXMpe3ZhciBuLHIsaSxvPWU9PT1vbyxhPXl0KGUuZGF0YS5kaXJlY3RpdmVzLGUuY29udGV4dCkscz15dCh0LmRhdGEuZGlyZWN0aXZlcyx0LmNvbnRleHQpLGM9W10sbD1bXTtmb3IobiBpbiBzKXI9YVtuXSxpPXNbbl0scj8oaS5vbGRWYWx1ZT1yLnZhbHVlLGJ0KGksXCJ1cGRhdGVcIix0LGUpLGkuZGVmJiZpLmRlZi5jb21wb25lbnRVcGRhdGVkJiZsLnB1c2goaSkpOihidChpLFwiYmluZFwiLHQsZSksaS5kZWYmJmkuZGVmLmluc2VydGVkJiZjLnB1c2goaSkpO2lmKGMubGVuZ3RoKXt2YXIgdT1mdW5jdGlvbigpe2MuZm9yRWFjaChmdW5jdGlvbihuKXtidChuLFwiaW5zZXJ0ZWRcIix0LGUpfSl9O28/aWUodC5kYXRhLmhvb2t8fCh0LmRhdGEuaG9vaz17fSksXCJpbnNlcnRcIix1LFwiZGlyLWluc2VydFwiKTp1KCl9aWYobC5sZW5ndGgmJmllKHQuZGF0YS5ob29rfHwodC5kYXRhLmhvb2s9e30pLFwicG9zdHBhdGNoXCIsZnVuY3Rpb24oKXtsLmZvckVhY2goZnVuY3Rpb24obil7YnQobixcImNvbXBvbmVudFVwZGF0ZWRcIix0LGUpfSl9LFwiZGlyLXBvc3RwYXRjaFwiKSwhbylmb3IobiBpbiBhKXNbbl18fGJ0KGFbbl0sXCJ1bmJpbmRcIixlKX19ZnVuY3Rpb24geXQoZSx0KXt2YXIgbj1PYmplY3QuY3JlYXRlKG51bGwpO2lmKCFlKXJldHVybiBuO3ZhciByLGk7Zm9yKHI9MDtyPGUubGVuZ3RoO3IrKylpPWVbcl0saS5tb2RpZmllcnN8fChpLm1vZGlmaWVycz1jbyksbltfdChpKV09aSxpLmRlZj1QKHQuJG9wdGlvbnMsXCJkaXJlY3RpdmVzXCIsaS5uYW1lLCEwKTtyZXR1cm4gbn1mdW5jdGlvbiBfdChlKXtyZXR1cm4gZS5yYXdOYW1lfHxlLm5hbWUrXCIuXCIrT2JqZWN0LmtleXMoZS5tb2RpZmllcnN8fHt9KS5qb2luKFwiLlwiKX1mdW5jdGlvbiBidChlLHQsbixyKXt2YXIgaT1lLmRlZiYmZS5kZWZbdF07aSYmaShuLmVsbSxlLG4scil9ZnVuY3Rpb24gJHQoZSx0KXtpZihlLmRhdGEuYXR0cnN8fHQuZGF0YS5hdHRycyl7dmFyIG4scixpLG89dC5lbG0sYT1lLmRhdGEuYXR0cnN8fHt9LHM9dC5kYXRhLmF0dHJzfHx7fTtzLl9fb2JfXyYmKHM9dC5kYXRhLmF0dHJzPWwoe30scykpO2ZvcihuIGluIHMpcj1zW25dLGk9YVtuXSxpIT09ciYmd3QobyxuLHIpO2ZvcihuIGluIGEpbnVsbD09c1tuXSYmKEppKG4pP28ucmVtb3ZlQXR0cmlidXRlTlMoemksS2kobikpOkhpKG4pfHxvLnJlbW92ZUF0dHJpYnV0ZShuKSl9fWZ1bmN0aW9uIHd0KGUsdCxuKXtWaSh0KT9xaShuKT9lLnJlbW92ZUF0dHJpYnV0ZSh0KTplLnNldEF0dHJpYnV0ZSh0LHQpOkhpKHQpP2Uuc2V0QXR0cmlidXRlKHQscWkobil8fFwiZmFsc2VcIj09PW4/XCJmYWxzZVwiOlwidHJ1ZVwiKTpKaSh0KT9xaShuKT9lLnJlbW92ZUF0dHJpYnV0ZU5TKHppLEtpKHQpKTplLnNldEF0dHJpYnV0ZU5TKHppLHQsbik6cWkobik/ZS5yZW1vdmVBdHRyaWJ1dGUodCk6ZS5zZXRBdHRyaWJ1dGUodCxuKX1mdW5jdGlvbiB4dChlLHQpe3ZhciBuPXQuZWxtLHI9dC5kYXRhLGk9ZS5kYXRhO2lmKHIuc3RhdGljQ2xhc3N8fHIuY2xhc3N8fGkmJihpLnN0YXRpY0NsYXNzfHxpLmNsYXNzKSl7dmFyIG89emUodCksYT1uLl90cmFuc2l0aW9uQ2xhc3NlczthJiYobz1xZShvLFdlKGEpKSksbyE9PW4uX3ByZXZDbGFzcyYmKG4uc2V0QXR0cmlidXRlKFwiY2xhc3NcIixvKSxuLl9wcmV2Q2xhc3M9byl9fWZ1bmN0aW9uIEN0KGUsdCl7aWYoZS5kYXRhLm9ufHx0LmRhdGEub24pe3ZhciBuPXQuZGF0YS5vbnx8e30scj1lLmRhdGEub258fHt9LGk9dC5lbG0uX3ZfYWRkfHwodC5lbG0uX3ZfYWRkPWZ1bmN0aW9uKGUsbixyKXt0LmVsbS5hZGRFdmVudExpc3RlbmVyKGUsbixyKX0pLG89dC5lbG0uX3ZfcmVtb3ZlfHwodC5lbG0uX3ZfcmVtb3ZlPWZ1bmN0aW9uKGUsbil7dC5lbG0ucmVtb3ZlRXZlbnRMaXN0ZW5lcihlLG4pfSk7b2UobixyLGksbyx0LmNvbnRleHQpfX1mdW5jdGlvbiBrdChlLHQpe2lmKGUuZGF0YS5kb21Qcm9wc3x8dC5kYXRhLmRvbVByb3BzKXt2YXIgbixyLGk9dC5lbG0sbz1lLmRhdGEuZG9tUHJvcHN8fHt9LGE9dC5kYXRhLmRvbVByb3BzfHx7fTthLl9fb2JfXyYmKGE9dC5kYXRhLmRvbVByb3BzPWwoe30sYSkpO2ZvcihuIGluIG8pbnVsbD09YVtuXSYmKGlbbl09XCJcIik7Zm9yKG4gaW4gYSlpZihyPWFbbl0sXCJ0ZXh0Q29udGVudFwiIT09biYmXCJpbm5lckhUTUxcIiE9PW58fCh0LmNoaWxkcmVuJiYodC5jaGlsZHJlbi5sZW5ndGg9MCksciE9PW9bbl0pKWlmKFwidmFsdWVcIj09PW4pe2kuX3ZhbHVlPXI7dmFyIHM9bnVsbD09cj9cIlwiOlN0cmluZyhyKTtpLnZhbHVlPT09c3x8aS5jb21wb3Npbmd8fChpLnZhbHVlPXMpfWVsc2UgaVtuXT1yfX1mdW5jdGlvbiBBdChlKXt2YXIgdD1PdChlLnN0eWxlKTtyZXR1cm4gZS5zdGF0aWNTdHlsZT9sKGUuc3RhdGljU3R5bGUsdCk6dH1mdW5jdGlvbiBPdChlKXtyZXR1cm4gQXJyYXkuaXNBcnJheShlKT9kKGUpOlwic3RyaW5nXCI9PXR5cGVvZiBlP2hvKGUpOmV9ZnVuY3Rpb24gU3QoZSx0KXt2YXIgbixyPXt9O2lmKHQpZm9yKHZhciBpPWU7aS5jaGlsZDspaT1pLmNoaWxkLl92bm9kZSxpLmRhdGEmJihuPUF0KGkuZGF0YSkpJiZsKHIsbik7KG49QXQoZS5kYXRhKSkmJmwocixuKTtmb3IodmFyIG89ZTtvPW8ucGFyZW50OylvLmRhdGEmJihuPUF0KG8uZGF0YSkpJiZsKHIsbik7cmV0dXJuIHJ9ZnVuY3Rpb24gVHQoZSx0KXt2YXIgbj10LmRhdGEscj1lLmRhdGE7aWYobi5zdGF0aWNTdHlsZXx8bi5zdHlsZXx8ci5zdGF0aWNTdHlsZXx8ci5zdHlsZSl7dmFyIGksbyxhPXQuZWxtLHM9ZS5kYXRhLnN0YXRpY1N0eWxlLGM9ZS5kYXRhLnN0eWxlfHx7fSx1PXN8fGMsZj1PdCh0LmRhdGEuc3R5bGUpfHx7fTt0LmRhdGEuc3R5bGU9Zi5fX29iX18/bCh7fSxmKTpmO3ZhciBkPVN0KHQsITApO2ZvcihvIGluIHUpbnVsbD09ZFtvXSYmZ28oYSxvLFwiXCIpO2ZvcihvIGluIGQpaT1kW29dLGkhPT11W29dJiZnbyhhLG8sbnVsbD09aT9cIlwiOmkpfX1mdW5jdGlvbiBqdChlLHQpe2lmKHQmJnQudHJpbSgpKWlmKGUuY2xhc3NMaXN0KXQuaW5kZXhPZihcIiBcIik+LTE/dC5zcGxpdCgvXFxzKy8pLmZvckVhY2goZnVuY3Rpb24odCl7cmV0dXJuIGUuY2xhc3NMaXN0LmFkZCh0KX0pOmUuY2xhc3NMaXN0LmFkZCh0KTtlbHNle3ZhciBuPVwiIFwiK2UuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikrXCIgXCI7bi5pbmRleE9mKFwiIFwiK3QrXCIgXCIpPDAmJmUuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwobit0KS50cmltKCkpfX1mdW5jdGlvbiBFdChlLHQpe2lmKHQmJnQudHJpbSgpKWlmKGUuY2xhc3NMaXN0KXQuaW5kZXhPZihcIiBcIik+LTE/dC5zcGxpdCgvXFxzKy8pLmZvckVhY2goZnVuY3Rpb24odCl7cmV0dXJuIGUuY2xhc3NMaXN0LnJlbW92ZSh0KX0pOmUuY2xhc3NMaXN0LnJlbW92ZSh0KTtlbHNle2Zvcih2YXIgbj1cIiBcIitlLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpK1wiIFwiLHI9XCIgXCIrdCtcIiBcIjtuLmluZGV4T2Yocik+PTA7KW49bi5yZXBsYWNlKHIsXCIgXCIpO2Uuc2V0QXR0cmlidXRlKFwiY2xhc3NcIixuLnRyaW0oKSl9fWZ1bmN0aW9uIE50KGUpe1NvKGZ1bmN0aW9uKCl7U28oZSl9KX1mdW5jdGlvbiBMdChlLHQpeyhlLl90cmFuc2l0aW9uQ2xhc3Nlc3x8KGUuX3RyYW5zaXRpb25DbGFzc2VzPVtdKSkucHVzaCh0KSxqdChlLHQpfWZ1bmN0aW9uIER0KGUsdCl7ZS5fdHJhbnNpdGlvbkNsYXNzZXMmJnIoZS5fdHJhbnNpdGlvbkNsYXNzZXMsdCksRXQoZSx0KX1mdW5jdGlvbiBNdChlLHQsbil7dmFyIHI9UHQoZSx0KSxpPXIudHlwZSxvPXIudGltZW91dCxhPXIucHJvcENvdW50O2lmKCFpKXJldHVybiBuKCk7dmFyIHM9aT09PXdvP2tvOk9vLGM9MCxsPWZ1bmN0aW9uKCl7ZS5yZW1vdmVFdmVudExpc3RlbmVyKHMsdSksbigpfSx1PWZ1bmN0aW9uKHQpe3QudGFyZ2V0PT09ZSYmKytjPj1hJiZsKCl9O3NldFRpbWVvdXQoZnVuY3Rpb24oKXtjPGEmJmwoKX0sbysxKSxlLmFkZEV2ZW50TGlzdGVuZXIocyx1KX1mdW5jdGlvbiBQdChlLHQpe3ZhciBuLHI9d2luZG93LmdldENvbXB1dGVkU3R5bGUoZSksaT1yW0NvK1wiRGVsYXlcIl0uc3BsaXQoXCIsIFwiKSxvPXJbQ28rXCJEdXJhdGlvblwiXS5zcGxpdChcIiwgXCIpLGE9UnQoaSxvKSxzPXJbQW8rXCJEZWxheVwiXS5zcGxpdChcIiwgXCIpLGM9cltBbytcIkR1cmF0aW9uXCJdLnNwbGl0KFwiLCBcIiksbD1SdChzLGMpLHU9MCxmPTA7dD09PXdvP2E+MCYmKG49d28sdT1hLGY9by5sZW5ndGgpOnQ9PT14bz9sPjAmJihuPXhvLHU9bCxmPWMubGVuZ3RoKToodT1NYXRoLm1heChhLGwpLG49dT4wP2E+bD93bzp4bzpudWxsLGY9bj9uPT09d28/by5sZW5ndGg6Yy5sZW5ndGg6MCk7dmFyIGQ9bj09PXdvJiZUby50ZXN0KHJbQ28rXCJQcm9wZXJ0eVwiXSk7cmV0dXJue3R5cGU6bix0aW1lb3V0OnUscHJvcENvdW50OmYsaGFzVHJhbnNmb3JtOmR9fWZ1bmN0aW9uIFJ0KGUsdCl7Zm9yKDtlLmxlbmd0aDx0Lmxlbmd0aDspZT1lLmNvbmNhdChlKTtyZXR1cm4gTWF0aC5tYXguYXBwbHkobnVsbCx0Lm1hcChmdW5jdGlvbih0LG4pe3JldHVybiBJdCh0KStJdChlW25dKX0pKX1mdW5jdGlvbiBJdChlKXtyZXR1cm4gMWUzKk51bWJlcihlLnNsaWNlKDAsLTEpKX1mdW5jdGlvbiBGdChlKXt2YXIgdD1lLmVsbTt0Ll9sZWF2ZUNiJiYodC5fbGVhdmVDYi5jYW5jZWxsZWQ9ITAsdC5fbGVhdmVDYigpKTt2YXIgbj1VdChlLmRhdGEudHJhbnNpdGlvbik7aWYobiYmIXQuX2VudGVyQ2ImJjE9PT10Lm5vZGVUeXBlKXt2YXIgcj1uLmNzcyxpPW4udHlwZSxvPW4uZW50ZXJDbGFzcyxhPW4uZW50ZXJBY3RpdmVDbGFzcyxzPW4uYXBwZWFyQ2xhc3MsYz1uLmFwcGVhckFjdGl2ZUNsYXNzLGw9bi5iZWZvcmVFbnRlcix1PW4uZW50ZXIsZj1uLmFmdGVyRW50ZXIsZD1uLmVudGVyQ2FuY2VsbGVkLHA9bi5iZWZvcmVBcHBlYXIsdj1uLmFwcGVhcixoPW4uYWZ0ZXJBcHBlYXIsbT1uLmFwcGVhckNhbmNlbGxlZCxnPUxpLiR2bm9kZSx5PWcmJmcucGFyZW50P2cucGFyZW50LmNvbnRleHQ6TGksXz0heS5faXNNb3VudGVkfHwhZS5pc1Jvb3RJbnNlcnQ7aWYoIV98fHZ8fFwiXCI9PT12KXt2YXIgYj1fP3M6bywkPV8/YzphLHc9Xz9wfHxsOmwseD1fJiZcImZ1bmN0aW9uXCI9PXR5cGVvZiB2P3Y6dSxDPV8/aHx8ZjpmLGs9Xz9tfHxkOmQsQT1yIT09ITEmJiF0aSxPPXgmJih4Ll9sZW5ndGh8fHgubGVuZ3RoKT4xLFM9dC5fZW50ZXJDYj1IdChmdW5jdGlvbigpe0EmJkR0KHQsJCksUy5jYW5jZWxsZWQ/KEEmJkR0KHQsYiksayYmayh0KSk6QyYmQyh0KSx0Ll9lbnRlckNiPW51bGx9KTtlLmRhdGEuc2hvd3x8aWUoZS5kYXRhLmhvb2t8fChlLmRhdGEuaG9vaz17fSksXCJpbnNlcnRcIixmdW5jdGlvbigpe3ZhciBuPXQucGFyZW50Tm9kZSxyPW4mJm4uX3BlbmRpbmcmJm4uX3BlbmRpbmdbZS5rZXldO3ImJnIudGFnPT09ZS50YWcmJnIuZWxtLl9sZWF2ZUNiJiZyLmVsbS5fbGVhdmVDYigpLHgmJngodCxTKX0sXCJ0cmFuc2l0aW9uLWluc2VydFwiKSx3JiZ3KHQpLEEmJihMdCh0LGIpLEx0KHQsJCksTnQoZnVuY3Rpb24oKXtEdCh0LGIpLFMuY2FuY2VsbGVkfHxPfHxNdCh0LGksUyl9KSksZS5kYXRhLnNob3cmJngmJngodCxTKSxBfHxPfHxTKCl9fX1mdW5jdGlvbiBCdChlLHQpe2Z1bmN0aW9uIG4oKXttLmNhbmNlbGxlZHx8KGUuZGF0YS5zaG93fHwoKHIucGFyZW50Tm9kZS5fcGVuZGluZ3x8KHIucGFyZW50Tm9kZS5fcGVuZGluZz17fSkpW2Uua2V5XT1lKSxsJiZsKHIpLHYmJihMdChyLHMpLEx0KHIsYyksTnQoZnVuY3Rpb24oKXtEdChyLHMpLG0uY2FuY2VsbGVkfHxofHxNdChyLGEsbSl9KSksdSYmdShyLG0pLHZ8fGh8fG0oKSl9dmFyIHI9ZS5lbG07ci5fZW50ZXJDYiYmKHIuX2VudGVyQ2IuY2FuY2VsbGVkPSEwLHIuX2VudGVyQ2IoKSk7dmFyIGk9VXQoZS5kYXRhLnRyYW5zaXRpb24pO2lmKCFpKXJldHVybiB0KCk7aWYoIXIuX2xlYXZlQ2ImJjE9PT1yLm5vZGVUeXBlKXt2YXIgbz1pLmNzcyxhPWkudHlwZSxzPWkubGVhdmVDbGFzcyxjPWkubGVhdmVBY3RpdmVDbGFzcyxsPWkuYmVmb3JlTGVhdmUsdT1pLmxlYXZlLGY9aS5hZnRlckxlYXZlLGQ9aS5sZWF2ZUNhbmNlbGxlZCxwPWkuZGVsYXlMZWF2ZSx2PW8hPT0hMSYmIXRpLGg9dSYmKHUuX2xlbmd0aHx8dS5sZW5ndGgpPjEsbT1yLl9sZWF2ZUNiPUh0KGZ1bmN0aW9uKCl7ci5wYXJlbnROb2RlJiZyLnBhcmVudE5vZGUuX3BlbmRpbmcmJihyLnBhcmVudE5vZGUuX3BlbmRpbmdbZS5rZXldPW51bGwpLHYmJkR0KHIsYyksbS5jYW5jZWxsZWQ/KHYmJkR0KHIscyksZCYmZChyKSk6KHQoKSxmJiZmKHIpKSxyLl9sZWF2ZUNiPW51bGx9KTtwP3Aobik6bigpfX1mdW5jdGlvbiBVdChlKXtpZihlKXtpZihcIm9iamVjdFwiPT10eXBlb2YgZSl7dmFyIHQ9e307cmV0dXJuIGUuY3NzIT09ITEmJmwodCxqbyhlLm5hbWV8fFwidlwiKSksbCh0LGUpLHR9cmV0dXJuXCJzdHJpbmdcIj09dHlwZW9mIGU/am8oZSk6dm9pZCAwfX1mdW5jdGlvbiBIdChlKXt2YXIgdD0hMTtyZXR1cm4gZnVuY3Rpb24oKXtcbnR8fCh0PSEwLGUoKSl9fWZ1bmN0aW9uIFZ0KGUsdCxuKXt2YXIgcj10LnZhbHVlLGk9ZS5tdWx0aXBsZTtpZighaXx8QXJyYXkuaXNBcnJheShyKSl7Zm9yKHZhciBvLGEscz0wLGM9ZS5vcHRpb25zLmxlbmd0aDtzPGM7cysrKWlmKGE9ZS5vcHRpb25zW3NdLGkpbz1tKHIsSnQoYSkpPi0xLGEuc2VsZWN0ZWQhPT1vJiYoYS5zZWxlY3RlZD1vKTtlbHNlIGlmKGgoSnQoYSkscikpcmV0dXJuIHZvaWQoZS5zZWxlY3RlZEluZGV4IT09cyYmKGUuc2VsZWN0ZWRJbmRleD1zKSk7aXx8KGUuc2VsZWN0ZWRJbmRleD0tMSl9fWZ1bmN0aW9uIHp0KGUsdCl7Zm9yKHZhciBuPTAscj10Lmxlbmd0aDtuPHI7bisrKWlmKGgoSnQodFtuXSksZSkpcmV0dXJuITE7cmV0dXJuITB9ZnVuY3Rpb24gSnQoZSl7cmV0dXJuXCJfdmFsdWVcImluIGU/ZS5fdmFsdWU6ZS52YWx1ZX1mdW5jdGlvbiBLdChlKXtlLnRhcmdldC5jb21wb3Npbmc9ITB9ZnVuY3Rpb24gcXQoZSl7ZS50YXJnZXQuY29tcG9zaW5nPSExLFd0KGUudGFyZ2V0LFwiaW5wdXRcIil9ZnVuY3Rpb24gV3QoZSx0KXt2YXIgbj1kb2N1bWVudC5jcmVhdGVFdmVudChcIkhUTUxFdmVudHNcIik7bi5pbml0RXZlbnQodCwhMCwhMCksZS5kaXNwYXRjaEV2ZW50KG4pfWZ1bmN0aW9uIFp0KGUpe3JldHVybiFlLmNoaWxkfHxlLmRhdGEmJmUuZGF0YS50cmFuc2l0aW9uP2U6WnQoZS5jaGlsZC5fdm5vZGUpfWZ1bmN0aW9uIEd0KGUpe3ZhciB0PWUmJmUuY29tcG9uZW50T3B0aW9ucztyZXR1cm4gdCYmdC5DdG9yLm9wdGlvbnMuYWJzdHJhY3Q/R3QoZmUodC5jaGlsZHJlbikpOmV9ZnVuY3Rpb24gWXQoZSl7dmFyIHQ9e30sbj1lLiRvcHRpb25zO2Zvcih2YXIgciBpbiBuLnByb3BzRGF0YSl0W3JdPWVbcl07dmFyIGk9bi5fcGFyZW50TGlzdGVuZXJzO2Zvcih2YXIgbyBpbiBpKXRbVnIobyldPWlbb10uZm47cmV0dXJuIHR9ZnVuY3Rpb24gUXQoZSx0KXtyZXR1cm4vXFxkLWtlZXAtYWxpdmUkLy50ZXN0KHQudGFnKT9lKFwia2VlcC1hbGl2ZVwiKTpudWxsfWZ1bmN0aW9uIFh0KGUpe2Zvcig7ZT1lLnBhcmVudDspaWYoZS5kYXRhLnRyYW5zaXRpb24pcmV0dXJuITB9ZnVuY3Rpb24gZW4oZSl7ZS5lbG0uX21vdmVDYiYmZS5lbG0uX21vdmVDYigpLGUuZWxtLl9lbnRlckNiJiZlLmVsbS5fZW50ZXJDYigpfWZ1bmN0aW9uIHRuKGUpe2UuZGF0YS5uZXdQb3M9ZS5lbG0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCl9ZnVuY3Rpb24gbm4oZSl7dmFyIHQ9ZS5kYXRhLnBvcyxuPWUuZGF0YS5uZXdQb3Mscj10LmxlZnQtbi5sZWZ0LGk9dC50b3Atbi50b3A7aWYocnx8aSl7ZS5kYXRhLm1vdmVkPSEwO3ZhciBvPWUuZWxtLnN0eWxlO28udHJhbnNmb3JtPW8uV2Via2l0VHJhbnNmb3JtPVwidHJhbnNsYXRlKFwiK3IrXCJweCxcIitpK1wicHgpXCIsby50cmFuc2l0aW9uRHVyYXRpb249XCIwc1wifX1mdW5jdGlvbiBybihlLHQpe3ZhciBuPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7cmV0dXJuIG4uaW5uZXJIVE1MPSc8ZGl2IGE9XCInK2UrJ1wiPicsbi5pbm5lckhUTUwuaW5kZXhPZih0KT4wfWZ1bmN0aW9uIG9uKGUpe3JldHVybiBWbz1Wb3x8ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKSxWby5pbm5lckhUTUw9ZSxWby50ZXh0Q29udGVudH1mdW5jdGlvbiBhbihlLHQpe3JldHVybiB0JiYoZT1lLnJlcGxhY2UoRGEsXCJcXG5cIikpLGUucmVwbGFjZShOYSxcIjxcIikucmVwbGFjZShMYSxcIj5cIikucmVwbGFjZShNYSxcIiZcIikucmVwbGFjZShQYSwnXCInKX1mdW5jdGlvbiBzbihlLHQpe2Z1bmN0aW9uIG4odCl7Zis9dCxlPWUuc3Vic3RyaW5nKHQpfWZ1bmN0aW9uIHIoKXt2YXIgdD1lLm1hdGNoKFlvKTtpZih0KXt2YXIgcj17dGFnTmFtZTp0WzFdLGF0dHJzOltdLHN0YXJ0OmZ9O24odFswXS5sZW5ndGgpO2Zvcih2YXIgaSxvOyEoaT1lLm1hdGNoKFFvKSkmJihvPWUubWF0Y2goV28pKTspbihvWzBdLmxlbmd0aCksci5hdHRycy5wdXNoKG8pO2lmKGkpcmV0dXJuIHIudW5hcnlTbGFzaD1pWzFdLG4oaVswXS5sZW5ndGgpLHIuZW5kPWYscn19ZnVuY3Rpb24gaShlKXt2YXIgbj1lLnRhZ05hbWUscj1lLnVuYXJ5U2xhc2g7bCYmKFwicFwiPT09cyYmUWkobikmJm8oXCJcIixzKSxZaShuKSYmcz09PW4mJm8oXCJcIixuKSk7Zm9yKHZhciBpPXUobil8fFwiaHRtbFwiPT09biYmXCJoZWFkXCI9PT1zfHwhIXIsYT1lLmF0dHJzLmxlbmd0aCxmPW5ldyBBcnJheShhKSxkPTA7ZDxhO2QrKyl7dmFyIHA9ZS5hdHRyc1tkXTtyYSYmcFswXS5pbmRleE9mKCdcIlwiJyk9PT0tMSYmKFwiXCI9PT1wWzNdJiZkZWxldGUgcFszXSxcIlwiPT09cFs0XSYmZGVsZXRlIHBbNF0sXCJcIj09PXBbNV0mJmRlbGV0ZSBwWzVdKTt2YXIgdj1wWzNdfHxwWzRdfHxwWzVdfHxcIlwiO2ZbZF09e25hbWU6cFsxXSx2YWx1ZTphbih2LHQuc2hvdWxkRGVjb2RlTmV3bGluZXMpfX1pfHwoYy5wdXNoKHt0YWc6bixhdHRyczpmfSkscz1uLHI9XCJcIiksdC5zdGFydCYmdC5zdGFydChuLGYsaSxlLnN0YXJ0LGUuZW5kKX1mdW5jdGlvbiBvKGUsbixyLGkpe3ZhciBvO2lmKG51bGw9PXImJihyPWYpLG51bGw9PWkmJihpPWYpLG4pe3ZhciBhPW4udG9Mb3dlckNhc2UoKTtmb3Iobz1jLmxlbmd0aC0xO28+PTAmJmNbb10udGFnLnRvTG93ZXJDYXNlKCkhPT1hO28tLSk7fWVsc2Ugbz0wO2lmKG8+PTApe2Zvcih2YXIgbD1jLmxlbmd0aC0xO2w+PW87bC0tKXQuZW5kJiZ0LmVuZChjW2xdLnRhZyxyLGkpO2MubGVuZ3RoPW8scz1vJiZjW28tMV0udGFnfWVsc2VcImJyXCI9PT1uLnRvTG93ZXJDYXNlKCk/dC5zdGFydCYmdC5zdGFydChuLFtdLCEwLHIsaSk6XCJwXCI9PT1uLnRvTG93ZXJDYXNlKCkmJih0LnN0YXJ0JiZ0LnN0YXJ0KG4sW10sITEscixpKSx0LmVuZCYmdC5lbmQobixyLGkpKX1mb3IodmFyIGEscyxjPVtdLGw9dC5leHBlY3RIVE1MLHU9dC5pc1VuYXJ5VGFnfHxacixmPTA7ZTspe2lmKGE9ZSxzJiZqYShzLHQuc2ZjLGMpKXt2YXIgZD1zLnRvTG93ZXJDYXNlKCkscD1FYVtkXXx8KEVhW2RdPW5ldyBSZWdFeHAoXCIoW1xcXFxzXFxcXFNdKj8pKDwvXCIrZCtcIltePl0qPilcIixcImlcIikpLHY9MCxoPWUucmVwbGFjZShwLGZ1bmN0aW9uKGUsbixyKXtyZXR1cm4gdj1yLmxlbmd0aCxcInNjcmlwdFwiIT09ZCYmXCJzdHlsZVwiIT09ZCYmXCJub3NjcmlwdFwiIT09ZCYmKG49bi5yZXBsYWNlKC88IS0tKFtcXHNcXFNdKj8pLS0+L2csXCIkMVwiKS5yZXBsYWNlKC88IVxcW0NEQVRBXFxbKFtcXHNcXFNdKj8pXV0+L2csXCIkMVwiKSksdC5jaGFycyYmdC5jaGFycyhuKSxcIlwifSk7Zis9ZS5sZW5ndGgtaC5sZW5ndGgsZT1oLG8oXCI8L1wiK2QrXCI+XCIsZCxmLXYsZil9ZWxzZXt2YXIgbT1lLmluZGV4T2YoXCI8XCIpO2lmKDA9PT1tKXtpZih0YS50ZXN0KGUpKXt2YXIgZz1lLmluZGV4T2YoXCItLT5cIik7aWYoZz49MCl7bihnKzMpO2NvbnRpbnVlfX1pZihuYS50ZXN0KGUpKXt2YXIgeT1lLmluZGV4T2YoXCJdPlwiKTtpZih5Pj0wKXtuKHkrMik7Y29udGludWV9fXZhciBfPWUubWF0Y2goZWEpO2lmKF8pe24oX1swXS5sZW5ndGgpO2NvbnRpbnVlfXZhciBiPWUubWF0Y2goWG8pO2lmKGIpe3ZhciAkPWY7bihiWzBdLmxlbmd0aCksbyhiWzBdLGJbMV0sJCxmKTtjb250aW51ZX12YXIgdz1yKCk7aWYodyl7aSh3KTtjb250aW51ZX19dmFyIHg9dm9pZCAwLEM9dm9pZCAwLGs9dm9pZCAwO2lmKG0+MCl7Zm9yKEM9ZS5zbGljZShtKTshKFhvLnRlc3QoQyl8fFlvLnRlc3QoQyl8fHRhLnRlc3QoQyl8fG5hLnRlc3QoQyl8fChrPUMuaW5kZXhPZihcIjxcIiwxKSxrPDApKTspbSs9ayxDPWUuc2xpY2UobSk7eD1lLnN1YnN0cmluZygwLG0pLG4obSl9bTwwJiYoeD1lLGU9XCJcIiksdC5jaGFycyYmeCYmdC5jaGFycyh4KX1pZihlPT09YSYmdC5jaGFycyl7dC5jaGFycyhlKTticmVha319bygpfWZ1bmN0aW9uIGNuKGUpe2Z1bmN0aW9uIHQoKXsoYXx8KGE9W10pKS5wdXNoKGUuc2xpY2UodixpKS50cmltKCkpLHY9aSsxfXZhciBuLHIsaSxvLGEscz0hMSxjPSExLGw9ITEsdT0hMSxmPTAsZD0wLHA9MCx2PTA7Zm9yKGk9MDtpPGUubGVuZ3RoO2krKylpZihyPW4sbj1lLmNoYXJDb2RlQXQoaSkscykzOT09PW4mJjkyIT09ciYmKHM9ITEpO2Vsc2UgaWYoYykzND09PW4mJjkyIT09ciYmKGM9ITEpO2Vsc2UgaWYobCk5Nj09PW4mJjkyIT09ciYmKGw9ITEpO2Vsc2UgaWYodSk0Nz09PW4mJjkyIT09ciYmKHU9ITEpO2Vsc2UgaWYoMTI0IT09bnx8MTI0PT09ZS5jaGFyQ29kZUF0KGkrMSl8fDEyND09PWUuY2hhckNvZGVBdChpLTEpfHxmfHxkfHxwKXN3aXRjaChuKXtjYXNlIDM0OmM9ITA7YnJlYWs7Y2FzZSAzOTpzPSEwO2JyZWFrO2Nhc2UgOTY6bD0hMDticmVhaztjYXNlIDQ3OnU9ITA7YnJlYWs7Y2FzZSA0MDpwKys7YnJlYWs7Y2FzZSA0MTpwLS07YnJlYWs7Y2FzZSA5MTpkKys7YnJlYWs7Y2FzZSA5MzpkLS07YnJlYWs7Y2FzZSAxMjM6ZisrO2JyZWFrO2Nhc2UgMTI1OmYtLX1lbHNlIHZvaWQgMD09PW8/KHY9aSsxLG89ZS5zbGljZSgwLGkpLnRyaW0oKSk6dCgpO2lmKHZvaWQgMD09PW8/bz1lLnNsaWNlKDAsaSkudHJpbSgpOjAhPT12JiZ0KCksYSlmb3IoaT0wO2k8YS5sZW5ndGg7aSsrKW89bG4obyxhW2ldKTtyZXR1cm4gb31mdW5jdGlvbiBsbihlLHQpe3ZhciBuPXQuaW5kZXhPZihcIihcIik7aWYobjwwKXJldHVybidfZihcIicrdCsnXCIpKCcrZStcIilcIjt2YXIgcj10LnNsaWNlKDAsbiksaT10LnNsaWNlKG4rMSk7cmV0dXJuJ19mKFwiJytyKydcIikoJytlK1wiLFwiK2l9ZnVuY3Rpb24gdW4oZSx0KXt2YXIgbj10P0ZhKHQpOlJhO2lmKG4udGVzdChlKSl7Zm9yKHZhciByLGksbz1bXSxhPW4ubGFzdEluZGV4PTA7cj1uLmV4ZWMoZSk7KXtpPXIuaW5kZXgsaT5hJiZvLnB1c2goSlNPTi5zdHJpbmdpZnkoZS5zbGljZShhLGkpKSk7dmFyIHM9Y24oclsxXS50cmltKCkpO28ucHVzaChcIl9zKFwiK3MrXCIpXCIpLGE9aStyWzBdLmxlbmd0aH1yZXR1cm4gYTxlLmxlbmd0aCYmby5wdXNoKEpTT04uc3RyaW5naWZ5KGUuc2xpY2UoYSkpKSxvLmpvaW4oXCIrXCIpfX1mdW5jdGlvbiBmbihlKXtjb25zb2xlLmVycm9yKFwiW1Z1ZSBwYXJzZXJdOiBcIitlKX1mdW5jdGlvbiBkbihlLHQpe3JldHVybiBlP2UubWFwKGZ1bmN0aW9uKGUpe3JldHVybiBlW3RdfSkuZmlsdGVyKGZ1bmN0aW9uKGUpe3JldHVybiBlfSk6W119ZnVuY3Rpb24gcG4oZSx0LG4peyhlLnByb3BzfHwoZS5wcm9wcz1bXSkpLnB1c2goe25hbWU6dCx2YWx1ZTpufSl9ZnVuY3Rpb24gdm4oZSx0LG4peyhlLmF0dHJzfHwoZS5hdHRycz1bXSkpLnB1c2goe25hbWU6dCx2YWx1ZTpufSl9ZnVuY3Rpb24gaG4oZSx0LG4scixpLG8peyhlLmRpcmVjdGl2ZXN8fChlLmRpcmVjdGl2ZXM9W10pKS5wdXNoKHtuYW1lOnQscmF3TmFtZTpuLHZhbHVlOnIsYXJnOmksbW9kaWZpZXJzOm99KX1mdW5jdGlvbiBtbihlLHQsbixyLGkpe3ImJnIuY2FwdHVyZSYmKGRlbGV0ZSByLmNhcHR1cmUsdD1cIiFcIit0KTt2YXIgbztyJiZyLm5hdGl2ZT8oZGVsZXRlIHIubmF0aXZlLG89ZS5uYXRpdmVFdmVudHN8fChlLm5hdGl2ZUV2ZW50cz17fSkpOm89ZS5ldmVudHN8fChlLmV2ZW50cz17fSk7dmFyIGE9e3ZhbHVlOm4sbW9kaWZpZXJzOnJ9LHM9b1t0XTtBcnJheS5pc0FycmF5KHMpP2k/cy51bnNoaWZ0KGEpOnMucHVzaChhKTpzP29bdF09aT9bYSxzXTpbcyxhXTpvW3RdPWF9ZnVuY3Rpb24gZ24oZSx0LG4pe3ZhciByPXluKGUsXCI6XCIrdCl8fHluKGUsXCJ2LWJpbmQ6XCIrdCk7aWYobnVsbCE9cilyZXR1cm4gY24ocik7aWYobiE9PSExKXt2YXIgaT15bihlLHQpO2lmKG51bGwhPWkpcmV0dXJuIEpTT04uc3RyaW5naWZ5KGkpfX1mdW5jdGlvbiB5bihlLHQpe3ZhciBuO2lmKG51bGwhPShuPWUuYXR0cnNNYXBbdF0pKWZvcih2YXIgcj1lLmF0dHJzTGlzdCxpPTAsbz1yLmxlbmd0aDtpPG87aSsrKWlmKHJbaV0ubmFtZT09PXQpe3Iuc3BsaWNlKGksMSk7YnJlYWt9cmV0dXJuIG59ZnVuY3Rpb24gX24oZSl7aWYob2E9ZSxpYT1vYS5sZW5ndGgsc2E9Y2E9bGE9MCxlLmluZGV4T2YoXCJbXCIpPDB8fGUubGFzdEluZGV4T2YoXCJdXCIpPGlhLTEpcmV0dXJue2V4cDplLGlkeDpudWxsfTtmb3IoOyEkbigpOylhYT1ibigpLHduKGFhKT9DbihhYSk6OTE9PT1hYSYmeG4oYWEpO3JldHVybntleHA6ZS5zdWJzdHJpbmcoMCxjYSksaWR4OmUuc3Vic3RyaW5nKGNhKzEsbGEpfX1mdW5jdGlvbiBibigpe3JldHVybiBvYS5jaGFyQ29kZUF0KCsrc2EpfWZ1bmN0aW9uICRuKCl7cmV0dXJuIHNhPj1pYX1mdW5jdGlvbiB3bihlKXtyZXR1cm4gMzQ9PT1lfHwzOT09PWV9ZnVuY3Rpb24geG4oZSl7dmFyIHQ9MTtmb3IoY2E9c2E7ISRuKCk7KWlmKGU9Ym4oKSx3bihlKSlDbihlKTtlbHNlIGlmKDkxPT09ZSYmdCsrLDkzPT09ZSYmdC0tLDA9PT10KXtsYT1zYTticmVha319ZnVuY3Rpb24gQ24oZSl7Zm9yKHZhciB0PWU7ISRuKCkmJihlPWJuKCksZSE9PXQpOyk7fWZ1bmN0aW9uIGtuKGUsdCl7dWE9dC53YXJufHxmbixmYT10LmdldFRhZ05hbWVzcGFjZXx8WnIsZGE9dC5tdXN0VXNlUHJvcHx8WnIscGE9dC5pc1ByZVRhZ3x8WnIsdmE9ZG4odC5tb2R1bGVzLFwicHJlVHJhbnNmb3JtTm9kZVwiKSxoYT1kbih0Lm1vZHVsZXMsXCJ0cmFuc2Zvcm1Ob2RlXCIpLG1hPWRuKHQubW9kdWxlcyxcInBvc3RUcmFuc2Zvcm1Ob2RlXCIpLGdhPXQuZGVsaW1pdGVyczt2YXIgbixyLGk9W10sbz10LnByZXNlcnZlV2hpdGVzcGFjZSE9PSExLGE9ITEscz0hMTtyZXR1cm4gc24oZSx7ZXhwZWN0SFRNTDp0LmV4cGVjdEhUTUwsaXNVbmFyeVRhZzp0LmlzVW5hcnlUYWcsc2hvdWxkRGVjb2RlTmV3bGluZXM6dC5zaG91bGREZWNvZGVOZXdsaW5lcyxzdGFydDpmdW5jdGlvbihlLG8sYyl7ZnVuY3Rpb24gbChlKXt9dmFyIHU9ciYmci5uc3x8ZmEoZSk7ZWkmJlwic3ZnXCI9PT11JiYobz1WbihvKSk7dmFyIGY9e3R5cGU6MSx0YWc6ZSxhdHRyc0xpc3Q6byxhdHRyc01hcDpCbihvKSxwYXJlbnQ6cixjaGlsZHJlbjpbXX07dSYmKGYubnM9dSksSG4oZikmJiFvaSgpJiYoZi5mb3JiaWRkZW49ITApO2Zvcih2YXIgZD0wO2Q8dmEubGVuZ3RoO2QrKyl2YVtkXShmLHQpO2lmKGF8fChBbihmKSxmLnByZSYmKGE9ITApKSxwYShmLnRhZykmJihzPSEwKSxhKU9uKGYpO2Vsc2V7am4oZiksRW4oZiksRG4oZiksU24oZiksZi5wbGFpbj0hZi5rZXkmJiFvLmxlbmd0aCxUbihmKSxNbihmKSxQbihmKTtmb3IodmFyIHA9MDtwPGhhLmxlbmd0aDtwKyspaGFbcF0oZix0KTtSbihmKX1pZihuP2kubGVuZ3RofHxuLmlmJiYoZi5lbHNlaWZ8fGYuZWxzZSkmJihsKGYpLExuKG4se2V4cDpmLmVsc2VpZixibG9jazpmfSkpOihuPWYsbChuKSksciYmIWYuZm9yYmlkZGVuKWlmKGYuZWxzZWlmfHxmLmVsc2UpTm4oZixyKTtlbHNlIGlmKGYuc2xvdFNjb3BlKXtyLnBsYWluPSExO3ZhciB2PWYuc2xvdFRhcmdldHx8XCJkZWZhdWx0XCI7KHIuc2NvcGVkU2xvdHN8fChyLnNjb3BlZFNsb3RzPXt9KSlbdl09Zn1lbHNlIHIuY2hpbGRyZW4ucHVzaChmKSxmLnBhcmVudD1yO2N8fChyPWYsaS5wdXNoKGYpKTtmb3IodmFyIGg9MDtoPG1hLmxlbmd0aDtoKyspbWFbaF0oZix0KX0sZW5kOmZ1bmN0aW9uKCl7dmFyIGU9aVtpLmxlbmd0aC0xXSx0PWUuY2hpbGRyZW5bZS5jaGlsZHJlbi5sZW5ndGgtMV07dCYmMz09PXQudHlwZSYmXCIgXCI9PT10LnRleHQmJmUuY2hpbGRyZW4ucG9wKCksaS5sZW5ndGgtPTEscj1pW2kubGVuZ3RoLTFdLGUucHJlJiYoYT0hMSkscGEoZS50YWcpJiYocz0hMSl9LGNoYXJzOmZ1bmN0aW9uKGUpe2lmKHImJighZWl8fFwidGV4dGFyZWFcIiE9PXIudGFnfHxyLmF0dHJzTWFwLnBsYWNlaG9sZGVyIT09ZSkmJihlPXN8fGUudHJpbSgpP3FhKGUpOm8mJnIuY2hpbGRyZW4ubGVuZ3RoP1wiIFwiOlwiXCIpKXt2YXIgdDshYSYmXCIgXCIhPT1lJiYodD11bihlLGdhKSk/ci5jaGlsZHJlbi5wdXNoKHt0eXBlOjIsZXhwcmVzc2lvbjp0LHRleHQ6ZX0pOnIuY2hpbGRyZW4ucHVzaCh7dHlwZTozLHRleHQ6ZX0pfX19KSxufWZ1bmN0aW9uIEFuKGUpe251bGwhPXluKGUsXCJ2LXByZVwiKSYmKGUucHJlPSEwKX1mdW5jdGlvbiBPbihlKXt2YXIgdD1lLmF0dHJzTGlzdC5sZW5ndGg7aWYodClmb3IodmFyIG49ZS5hdHRycz1uZXcgQXJyYXkodCkscj0wO3I8dDtyKyspbltyXT17bmFtZTplLmF0dHJzTGlzdFtyXS5uYW1lLHZhbHVlOkpTT04uc3RyaW5naWZ5KGUuYXR0cnNMaXN0W3JdLnZhbHVlKX07ZWxzZSBlLnByZXx8KGUucGxhaW49ITApfWZ1bmN0aW9uIFNuKGUpe3ZhciB0PWduKGUsXCJrZXlcIik7dCYmKGUua2V5PXQpfWZ1bmN0aW9uIFRuKGUpe3ZhciB0PWduKGUsXCJyZWZcIik7dCYmKGUucmVmPXQsZS5yZWZJbkZvcj1JbihlKSl9ZnVuY3Rpb24gam4oZSl7dmFyIHQ7aWYodD15bihlLFwidi1mb3JcIikpe3ZhciBuPXQubWF0Y2goVWEpO2lmKCFuKXJldHVybjtlLmZvcj1uWzJdLnRyaW0oKTt2YXIgcj1uWzFdLnRyaW0oKSxpPXIubWF0Y2goSGEpO2k/KGUuYWxpYXM9aVsxXS50cmltKCksZS5pdGVyYXRvcjE9aVsyXS50cmltKCksaVszXSYmKGUuaXRlcmF0b3IyPWlbM10udHJpbSgpKSk6ZS5hbGlhcz1yfX1mdW5jdGlvbiBFbihlKXt2YXIgdD15bihlLFwidi1pZlwiKTtpZih0KWUuaWY9dCxMbihlLHtleHA6dCxibG9jazplfSk7ZWxzZXtudWxsIT15bihlLFwidi1lbHNlXCIpJiYoZS5lbHNlPSEwKTt2YXIgbj15bihlLFwidi1lbHNlLWlmXCIpO24mJihlLmVsc2VpZj1uKX19ZnVuY3Rpb24gTm4oZSx0KXt2YXIgbj1Vbih0LmNoaWxkcmVuKTtuJiZuLmlmJiZMbihuLHtleHA6ZS5lbHNlaWYsYmxvY2s6ZX0pfWZ1bmN0aW9uIExuKGUsdCl7ZS5jb25kaXRpb25zfHwoZS5jb25kaXRpb25zPVtdKSxlLmNvbmRpdGlvbnMucHVzaCh0KX1mdW5jdGlvbiBEbihlKXt2YXIgdD15bihlLFwidi1vbmNlXCIpO251bGwhPXQmJihlLm9uY2U9ITApfWZ1bmN0aW9uIE1uKGUpe2lmKFwic2xvdFwiPT09ZS50YWcpZS5zbG90TmFtZT1nbihlLFwibmFtZVwiKTtlbHNle3ZhciB0PWduKGUsXCJzbG90XCIpO3QmJihlLnNsb3RUYXJnZXQ9J1wiXCInPT09dD8nXCJkZWZhdWx0XCInOnQpLFwidGVtcGxhdGVcIj09PWUudGFnJiYoZS5zbG90U2NvcGU9eW4oZSxcInNjb3BlXCIpKX19ZnVuY3Rpb24gUG4oZSl7dmFyIHQ7KHQ9Z24oZSxcImlzXCIpKSYmKGUuY29tcG9uZW50PXQpLG51bGwhPXluKGUsXCJpbmxpbmUtdGVtcGxhdGVcIikmJihlLmlubGluZVRlbXBsYXRlPSEwKX1mdW5jdGlvbiBSbihlKXt2YXIgdCxuLHIsaSxvLGEscyxjLGw9ZS5hdHRyc0xpc3Q7Zm9yKHQ9MCxuPWwubGVuZ3RoO3Q8bjt0KyspaWYocj1pPWxbdF0ubmFtZSxvPWxbdF0udmFsdWUsQmEudGVzdChyKSlpZihlLmhhc0JpbmRpbmdzPSEwLHM9Rm4ocikscyYmKHI9ci5yZXBsYWNlKEthLFwiXCIpKSxWYS50ZXN0KHIpKXI9ci5yZXBsYWNlKFZhLFwiXCIpLG89Y24obykscyYmKHMucHJvcCYmKGM9ITAscj1WcihyKSxcImlubmVySHRtbFwiPT09ciYmKHI9XCJpbm5lckhUTUxcIikpLHMuY2FtZWwmJihyPVZyKHIpKSksY3x8ZGEoZS50YWcscik/cG4oZSxyLG8pOnZuKGUscixvKTtlbHNlIGlmKHphLnRlc3Qocikpcj1yLnJlcGxhY2UoemEsXCJcIiksbW4oZSxyLG8scyk7ZWxzZXtyPXIucmVwbGFjZShCYSxcIlwiKTt2YXIgdT1yLm1hdGNoKEphKTt1JiYoYT11WzFdKSYmKHI9ci5zbGljZSgwLC0oYS5sZW5ndGgrMSkpKSxobihlLHIsaSxvLGEscyl9ZWxzZSB2bihlLHIsSlNPTi5zdHJpbmdpZnkobykpfWZ1bmN0aW9uIEluKGUpe2Zvcih2YXIgdD1lO3Q7KXtpZih2b2lkIDAhPT10LmZvcilyZXR1cm4hMDt0PXQucGFyZW50fXJldHVybiExfWZ1bmN0aW9uIEZuKGUpe3ZhciB0PWUubWF0Y2goS2EpO2lmKHQpe3ZhciBuPXt9O3JldHVybiB0LmZvckVhY2goZnVuY3Rpb24oZSl7bltlLnNsaWNlKDEpXT0hMH0pLG59fWZ1bmN0aW9uIEJuKGUpe2Zvcih2YXIgdD17fSxuPTAscj1lLmxlbmd0aDtuPHI7bisrKXRbZVtuXS5uYW1lXT1lW25dLnZhbHVlO3JldHVybiB0fWZ1bmN0aW9uIFVuKGUpe2Zvcih2YXIgdD1lLmxlbmd0aDt0LS07KWlmKGVbdF0udGFnKXJldHVybiBlW3RdfWZ1bmN0aW9uIEhuKGUpe3JldHVyblwic3R5bGVcIj09PWUudGFnfHxcInNjcmlwdFwiPT09ZS50YWcmJighZS5hdHRyc01hcC50eXBlfHxcInRleHQvamF2YXNjcmlwdFwiPT09ZS5hdHRyc01hcC50eXBlKX1mdW5jdGlvbiBWbihlKXtmb3IodmFyIHQ9W10sbj0wO248ZS5sZW5ndGg7bisrKXt2YXIgcj1lW25dO1dhLnRlc3Qoci5uYW1lKXx8KHIubmFtZT1yLm5hbWUucmVwbGFjZShaYSxcIlwiKSx0LnB1c2gocikpfXJldHVybiB0fWZ1bmN0aW9uIHpuKGUsdCl7ZSYmKHlhPUdhKHQuc3RhdGljS2V5c3x8XCJcIiksX2E9dC5pc1Jlc2VydmVkVGFnfHxmdW5jdGlvbigpe3JldHVybiExfSxLbihlKSxxbihlLCExKSl9ZnVuY3Rpb24gSm4oZSl7cmV0dXJuIG4oXCJ0eXBlLHRhZyxhdHRyc0xpc3QsYXR0cnNNYXAscGxhaW4scGFyZW50LGNoaWxkcmVuLGF0dHJzXCIrKGU/XCIsXCIrZTpcIlwiKSl9ZnVuY3Rpb24gS24oZSl7aWYoZS5zdGF0aWM9Wm4oZSksMT09PWUudHlwZSl7aWYoIV9hKGUudGFnKSYmXCJzbG90XCIhPT1lLnRhZyYmbnVsbD09ZS5hdHRyc01hcFtcImlubGluZS10ZW1wbGF0ZVwiXSlyZXR1cm47Zm9yKHZhciB0PTAsbj1lLmNoaWxkcmVuLmxlbmd0aDt0PG47dCsrKXt2YXIgcj1lLmNoaWxkcmVuW3RdO0tuKHIpLHIuc3RhdGljfHwoZS5zdGF0aWM9ITEpfX19ZnVuY3Rpb24gcW4oZSx0KXtpZigxPT09ZS50eXBlKXtpZigoZS5zdGF0aWN8fGUub25jZSkmJihlLnN0YXRpY0luRm9yPXQpLGUuc3RhdGljJiZlLmNoaWxkcmVuLmxlbmd0aCYmKDEhPT1lLmNoaWxkcmVuLmxlbmd0aHx8MyE9PWUuY2hpbGRyZW5bMF0udHlwZSkpcmV0dXJuIHZvaWQoZS5zdGF0aWNSb290PSEwKTtpZihlLnN0YXRpY1Jvb3Q9ITEsZS5jaGlsZHJlbilmb3IodmFyIG49MCxyPWUuY2hpbGRyZW4ubGVuZ3RoO248cjtuKyspcW4oZS5jaGlsZHJlbltuXSx0fHwhIWUuZm9yKTtlLmNvbmRpdGlvbnMmJlduKGUuY29uZGl0aW9ucyx0KX19ZnVuY3Rpb24gV24oZSx0KXtmb3IodmFyIG49MSxyPWUubGVuZ3RoO248cjtuKyspcW4oZVtuXS5ibG9jayx0KX1mdW5jdGlvbiBabihlKXtyZXR1cm4gMiE9PWUudHlwZSYmKDM9PT1lLnR5cGV8fCEoIWUucHJlJiYoZS5oYXNCaW5kaW5nc3x8ZS5pZnx8ZS5mb3J8fEJyKGUudGFnKXx8IV9hKGUudGFnKXx8R24oZSl8fCFPYmplY3Qua2V5cyhlKS5ldmVyeSh5YSkpKSl9ZnVuY3Rpb24gR24oZSl7Zm9yKDtlLnBhcmVudDspe2lmKGU9ZS5wYXJlbnQsXCJ0ZW1wbGF0ZVwiIT09ZS50YWcpcmV0dXJuITE7aWYoZS5mb3IpcmV0dXJuITB9cmV0dXJuITF9ZnVuY3Rpb24gWW4oZSx0KXt2YXIgbj10P1wibmF0aXZlT246e1wiOlwib246e1wiO2Zvcih2YXIgciBpbiBlKW4rPSdcIicrcisnXCI6JytRbihyLGVbcl0pK1wiLFwiO3JldHVybiBuLnNsaWNlKDAsLTEpK1wifVwifWZ1bmN0aW9uIFFuKGUsdCl7aWYodCl7aWYoQXJyYXkuaXNBcnJheSh0KSlyZXR1cm5cIltcIit0Lm1hcChmdW5jdGlvbih0KXtyZXR1cm4gUW4oZSx0KX0pLmpvaW4oXCIsXCIpK1wiXVwiO2lmKHQubW9kaWZpZXJzKXt2YXIgbj1cIlwiLHI9W10saT10cy50ZXN0KGUpO2Zvcih2YXIgbyBpbiB0Lm1vZGlmaWVycyllc1tvXT9uKz1lc1tvXTppJiZuc1tvXT9uKz1uc1tvXTpyLnB1c2gobyk7ci5sZW5ndGgmJihuPVhuKHIpK24pO3ZhciBhPVFhLnRlc3QodC52YWx1ZSk/dC52YWx1ZStcIigkZXZlbnQpXCI6dC52YWx1ZTtyZXR1cm5cImZ1bmN0aW9uKCRldmVudCl7XCIrbithK1wifVwifXJldHVybiBZYS50ZXN0KHQudmFsdWUpfHxRYS50ZXN0KHQudmFsdWUpP3QudmFsdWU6XCJmdW5jdGlvbigkZXZlbnQpe1wiK3QudmFsdWUrXCJ9XCJ9cmV0dXJuXCJmdW5jdGlvbigpe31cIn1mdW5jdGlvbiBYbihlKXt2YXIgdD0xPT09ZS5sZW5ndGg/ZXIoZVswXSk6QXJyYXkucHJvdG90eXBlLmNvbmNhdC5hcHBseShbXSxlLm1hcChlcikpO3JldHVybiBBcnJheS5pc0FycmF5KHQpP1wiaWYoXCIrdC5tYXAoZnVuY3Rpb24oZSl7cmV0dXJuXCIkZXZlbnQua2V5Q29kZSE9PVwiK2V9KS5qb2luKFwiJiZcIikrXCIpcmV0dXJuO1wiOlwiaWYoJGV2ZW50LmtleUNvZGUhPT1cIit0K1wiKXJldHVybjtcIn1mdW5jdGlvbiBlcihlKXtyZXR1cm4gcGFyc2VJbnQoZSwxMCl8fFhhW2VdfHxcIl9rKFwiK0pTT04uc3RyaW5naWZ5KGUpK1wiKVwifWZ1bmN0aW9uIHRyKGUsdCl7ZS53cmFwRGF0YT1mdW5jdGlvbihuKXtyZXR1cm5cIl9iKFwiK24rXCIsJ1wiK2UudGFnK1wiJyxcIit0LnZhbHVlKyh0Lm1vZGlmaWVycyYmdC5tb2RpZmllcnMucHJvcD9cIix0cnVlXCI6XCJcIikrXCIpXCJ9fWZ1bmN0aW9uIG5yKGUsdCl7dmFyIG49Q2Escj1DYT1bXSxpPWthO2thPTAsQWE9dCxiYT10Lndhcm58fGZuLCRhPWRuKHQubW9kdWxlcyxcInRyYW5zZm9ybUNvZGVcIiksd2E9ZG4odC5tb2R1bGVzLFwiZ2VuRGF0YVwiKSx4YT10LmRpcmVjdGl2ZXN8fHt9O3ZhciBvPWU/cnIoZSk6J19oKFwiZGl2XCIpJztyZXR1cm4gQ2E9bixrYT1pLHtyZW5kZXI6XCJ3aXRoKHRoaXMpe3JldHVybiBcIitvK1wifVwiLHN0YXRpY1JlbmRlckZuczpyfX1mdW5jdGlvbiBycihlKXtpZihlLnN0YXRpY1Jvb3QmJiFlLnN0YXRpY1Byb2Nlc3NlZClyZXR1cm4gaXIoZSk7aWYoZS5vbmNlJiYhZS5vbmNlUHJvY2Vzc2VkKXJldHVybiBvcihlKTtpZihlLmZvciYmIWUuZm9yUHJvY2Vzc2VkKXJldHVybiBjcihlKTtpZihlLmlmJiYhZS5pZlByb2Nlc3NlZClyZXR1cm4gYXIoZSk7aWYoXCJ0ZW1wbGF0ZVwiIT09ZS50YWd8fGUuc2xvdFRhcmdldCl7aWYoXCJzbG90XCI9PT1lLnRhZylyZXR1cm4gZ3IoZSk7dmFyIHQ7aWYoZS5jb21wb25lbnQpdD15cihlLmNvbXBvbmVudCxlKTtlbHNle3ZhciBuPWUucGxhaW4/dm9pZCAwOmxyKGUpLHI9ZS5pbmxpbmVUZW1wbGF0ZT9udWxsOnZyKGUpO3Q9XCJfaCgnXCIrZS50YWcrXCInXCIrKG4/XCIsXCIrbjpcIlwiKSsocj9cIixcIityOlwiXCIpK1wiKVwifWZvcih2YXIgaT0wO2k8JGEubGVuZ3RoO2krKyl0PSRhW2ldKGUsdCk7cmV0dXJuIHR9cmV0dXJuIHZyKGUpfHxcInZvaWQgMFwifWZ1bmN0aW9uIGlyKGUpe3JldHVybiBlLnN0YXRpY1Byb2Nlc3NlZD0hMCxDYS5wdXNoKFwid2l0aCh0aGlzKXtyZXR1cm4gXCIrcnIoZSkrXCJ9XCIpLFwiX20oXCIrKENhLmxlbmd0aC0xKSsoZS5zdGF0aWNJbkZvcj9cIix0cnVlXCI6XCJcIikrXCIpXCJ9ZnVuY3Rpb24gb3IoZSl7aWYoZS5vbmNlUHJvY2Vzc2VkPSEwLGUuaWYmJiFlLmlmUHJvY2Vzc2VkKXJldHVybiBhcihlKTtpZihlLnN0YXRpY0luRm9yKXtmb3IodmFyIHQ9XCJcIixuPWUucGFyZW50O247KXtpZihuLmZvcil7dD1uLmtleTticmVha31uPW4ucGFyZW50fXJldHVybiB0P1wiX28oXCIrcnIoZSkrXCIsXCIra2ErKyArKHQ/XCIsXCIrdDpcIlwiKStcIilcIjpycihlKX1yZXR1cm4gaXIoZSl9ZnVuY3Rpb24gYXIoZSl7cmV0dXJuIGUuaWZQcm9jZXNzZWQ9ITAsc3IoZS5jb25kaXRpb25zKX1mdW5jdGlvbiBzcihlKXtmdW5jdGlvbiB0KGUpe3JldHVybiBlLm9uY2U/b3IoZSk6cnIoZSl9aWYoIWUubGVuZ3RoKXJldHVyblwiX2UoKVwiO3ZhciBuPWUuc2hpZnQoKTtyZXR1cm4gbi5leHA/XCIoXCIrbi5leHArXCIpP1wiK3Qobi5ibG9jaykrXCI6XCIrc3IoZSk6XCJcIit0KG4uYmxvY2spfWZ1bmN0aW9uIGNyKGUpe3ZhciB0PWUuZm9yLG49ZS5hbGlhcyxyPWUuaXRlcmF0b3IxP1wiLFwiK2UuaXRlcmF0b3IxOlwiXCIsaT1lLml0ZXJhdG9yMj9cIixcIitlLml0ZXJhdG9yMjpcIlwiO3JldHVybiBlLmZvclByb2Nlc3NlZD0hMCxcIl9sKChcIit0K1wiKSxmdW5jdGlvbihcIituK3IraStcIil7cmV0dXJuIFwiK3JyKGUpK1wifSlcIn1mdW5jdGlvbiBscihlKXt2YXIgdD1cIntcIixuPXVyKGUpO24mJih0Kz1uK1wiLFwiKSxlLmtleSYmKHQrPVwia2V5OlwiK2Uua2V5K1wiLFwiKSxlLnJlZiYmKHQrPVwicmVmOlwiK2UucmVmK1wiLFwiKSxlLnJlZkluRm9yJiYodCs9XCJyZWZJbkZvcjp0cnVlLFwiKSxlLmNvbXBvbmVudCYmKHQrPSd0YWc6XCInK2UudGFnKydcIiwnKTtmb3IodmFyIHI9MDtyPHdhLmxlbmd0aDtyKyspdCs9d2Fbcl0oZSk7aWYoZS5hdHRycyYmKHQrPVwiYXR0cnM6e1wiK19yKGUuYXR0cnMpK1wifSxcIiksZS5wcm9wcyYmKHQrPVwiZG9tUHJvcHM6e1wiK19yKGUucHJvcHMpK1wifSxcIiksZS5ldmVudHMmJih0Kz1ZbihlLmV2ZW50cykrXCIsXCIpLGUubmF0aXZlRXZlbnRzJiYodCs9WW4oZS5uYXRpdmVFdmVudHMsITApK1wiLFwiKSxlLnNsb3RUYXJnZXQmJih0Kz1cInNsb3Q6XCIrZS5zbG90VGFyZ2V0K1wiLFwiKSxlLnNjb3BlZFNsb3RzJiYodCs9ZHIoZS5zY29wZWRTbG90cykrXCIsXCIpLGUuaW5saW5lVGVtcGxhdGUpe3ZhciBpPWZyKGUpO2kmJih0Kz1pK1wiLFwiKX1yZXR1cm4gdD10LnJlcGxhY2UoLywkLyxcIlwiKStcIn1cIixlLndyYXBEYXRhJiYodD1lLndyYXBEYXRhKHQpKSx0fWZ1bmN0aW9uIHVyKGUpe3ZhciB0PWUuZGlyZWN0aXZlcztpZih0KXt2YXIgbixyLGksbyxhPVwiZGlyZWN0aXZlczpbXCIscz0hMTtmb3Iobj0wLHI9dC5sZW5ndGg7bjxyO24rKyl7aT10W25dLG89ITA7dmFyIGM9eGFbaS5uYW1lXXx8cnNbaS5uYW1lXTtjJiYobz0hIWMoZSxpLGJhKSksbyYmKHM9ITAsYSs9J3tuYW1lOlwiJytpLm5hbWUrJ1wiLHJhd05hbWU6XCInK2kucmF3TmFtZSsnXCInKyhpLnZhbHVlP1wiLHZhbHVlOihcIitpLnZhbHVlK1wiKSxleHByZXNzaW9uOlwiK0pTT04uc3RyaW5naWZ5KGkudmFsdWUpOlwiXCIpKyhpLmFyZz8nLGFyZzpcIicraS5hcmcrJ1wiJzpcIlwiKSsoaS5tb2RpZmllcnM/XCIsbW9kaWZpZXJzOlwiK0pTT04uc3RyaW5naWZ5KGkubW9kaWZpZXJzKTpcIlwiKStcIn0sXCIpfXJldHVybiBzP2Euc2xpY2UoMCwtMSkrXCJdXCI6dm9pZCAwfX1mdW5jdGlvbiBmcihlKXt2YXIgdD1lLmNoaWxkcmVuWzBdO2lmKDE9PT10LnR5cGUpe3ZhciBuPW5yKHQsQWEpO3JldHVyblwiaW5saW5lVGVtcGxhdGU6e3JlbmRlcjpmdW5jdGlvbigpe1wiK24ucmVuZGVyK1wifSxzdGF0aWNSZW5kZXJGbnM6W1wiK24uc3RhdGljUmVuZGVyRm5zLm1hcChmdW5jdGlvbihlKXtyZXR1cm5cImZ1bmN0aW9uKCl7XCIrZStcIn1cIn0pLmpvaW4oXCIsXCIpK1wiXX1cIn19ZnVuY3Rpb24gZHIoZSl7cmV0dXJuXCJzY29wZWRTbG90czp7XCIrT2JqZWN0LmtleXMoZSkubWFwKGZ1bmN0aW9uKHQpe3JldHVybiBwcih0LGVbdF0pfSkuam9pbihcIixcIikrXCJ9XCJ9ZnVuY3Rpb24gcHIoZSx0KXtyZXR1cm4gZStcIjpmdW5jdGlvbihcIitTdHJpbmcodC5hdHRyc01hcC5zY29wZSkrXCIpe3JldHVybiBcIisoXCJ0ZW1wbGF0ZVwiPT09dC50YWc/dnIodCl8fFwidm9pZCAwXCI6cnIodCkpK1wifVwifWZ1bmN0aW9uIHZyKGUpe2lmKGUuY2hpbGRyZW4ubGVuZ3RoKXJldHVyblwiW1wiK2UuY2hpbGRyZW4ubWFwKGhyKS5qb2luKFwiLFwiKStcIl1cIn1mdW5jdGlvbiBocihlKXtyZXR1cm4gMT09PWUudHlwZT9ycihlKTptcihlKX1mdW5jdGlvbiBtcihlKXtyZXR1cm4gMj09PWUudHlwZT9lLmV4cHJlc3Npb246YnIoSlNPTi5zdHJpbmdpZnkoZS50ZXh0KSl9ZnVuY3Rpb24gZ3IoZSl7dmFyIHQ9ZS5zbG90TmFtZXx8J1wiZGVmYXVsdFwiJyxuPXZyKGUpO3JldHVyblwiX3QoXCIrdCsobj9cIixcIituOlwiXCIpKyhlLmF0dHJzPyhuP1wiXCI6XCIsbnVsbFwiKStcIix7XCIrZS5hdHRycy5tYXAoZnVuY3Rpb24oZSl7cmV0dXJuIFZyKGUubmFtZSkrXCI6XCIrZS52YWx1ZX0pLmpvaW4oXCIsXCIpK1wifVwiOlwiXCIpK1wiKVwifWZ1bmN0aW9uIHlyKGUsdCl7dmFyIG49dC5pbmxpbmVUZW1wbGF0ZT9udWxsOnZyKHQpO3JldHVyblwiX2goXCIrZStcIixcIitscih0KSsobj9cIixcIituOlwiXCIpK1wiKVwifWZ1bmN0aW9uIF9yKGUpe2Zvcih2YXIgdD1cIlwiLG49MDtuPGUubGVuZ3RoO24rKyl7dmFyIHI9ZVtuXTt0Kz0nXCInK3IubmFtZSsnXCI6JyticihyLnZhbHVlKStcIixcIn1yZXR1cm4gdC5zbGljZSgwLC0xKX1mdW5jdGlvbiBicihlKXtyZXR1cm4gZS5yZXBsYWNlKC9cXHUyMDI4L2csXCJcXFxcdTIwMjhcIikucmVwbGFjZSgvXFx1MjAyOS9nLFwiXFxcXHUyMDI5XCIpfWZ1bmN0aW9uICRyKGUsdCl7dmFyIG49a24oZS50cmltKCksdCk7em4obix0KTt2YXIgcj1ucihuLHQpO3JldHVybnthc3Q6bixyZW5kZXI6ci5yZW5kZXIsc3RhdGljUmVuZGVyRm5zOnIuc3RhdGljUmVuZGVyRm5zfX1mdW5jdGlvbiB3cihlLHQpe3ZhciBuPSh0Lndhcm58fGZuLHluKGUsXCJjbGFzc1wiKSk7biYmKGUuc3RhdGljQ2xhc3M9SlNPTi5zdHJpbmdpZnkobikpO3ZhciByPWduKGUsXCJjbGFzc1wiLCExKTtyJiYoZS5jbGFzc0JpbmRpbmc9cil9ZnVuY3Rpb24geHIoZSl7dmFyIHQ9XCJcIjtyZXR1cm4gZS5zdGF0aWNDbGFzcyYmKHQrPVwic3RhdGljQ2xhc3M6XCIrZS5zdGF0aWNDbGFzcytcIixcIiksZS5jbGFzc0JpbmRpbmcmJih0Kz1cImNsYXNzOlwiK2UuY2xhc3NCaW5kaW5nK1wiLFwiKSx0fWZ1bmN0aW9uIENyKGUsdCl7dmFyIG49KHQud2Fybnx8Zm4seW4oZSxcInN0eWxlXCIpKTtuJiYoZS5zdGF0aWNTdHlsZT1KU09OLnN0cmluZ2lmeShobyhuKSkpO3ZhciByPWduKGUsXCJzdHlsZVwiLCExKTtyJiYoZS5zdHlsZUJpbmRpbmc9cil9ZnVuY3Rpb24ga3IoZSl7dmFyIHQ9XCJcIjtyZXR1cm4gZS5zdGF0aWNTdHlsZSYmKHQrPVwic3RhdGljU3R5bGU6XCIrZS5zdGF0aWNTdHlsZStcIixcIiksZS5zdHlsZUJpbmRpbmcmJih0Kz1cInN0eWxlOihcIitlLnN0eWxlQmluZGluZytcIiksXCIpLHR9ZnVuY3Rpb24gQXIoZSx0LG4pe09hPW47dmFyIHI9dC52YWx1ZSxpPXQubW9kaWZpZXJzLG89ZS50YWcsYT1lLmF0dHJzTWFwLnR5cGU7cmV0dXJuXCJzZWxlY3RcIj09PW8/anIoZSxyLGkpOlwiaW5wdXRcIj09PW8mJlwiY2hlY2tib3hcIj09PWE/T3IoZSxyLGkpOlwiaW5wdXRcIj09PW8mJlwicmFkaW9cIj09PWE/U3IoZSxyLGkpOlRyKGUscixpKSwhMH1mdW5jdGlvbiBPcihlLHQsbil7dmFyIHI9biYmbi5udW1iZXIsaT1nbihlLFwidmFsdWVcIil8fFwibnVsbFwiLG89Z24oZSxcInRydWUtdmFsdWVcIil8fFwidHJ1ZVwiLGE9Z24oZSxcImZhbHNlLXZhbHVlXCIpfHxcImZhbHNlXCI7cG4oZSxcImNoZWNrZWRcIixcIkFycmF5LmlzQXJyYXkoXCIrdCtcIik/X2koXCIrdCtcIixcIitpK1wiKT4tMTpfcShcIit0K1wiLFwiK28rXCIpXCIpLG1uKGUsXCJjaGFuZ2VcIixcInZhciAkJGE9XCIrdCtcIiwkJGVsPSRldmVudC50YXJnZXQsJCRjPSQkZWwuY2hlY2tlZD8oXCIrbytcIik6KFwiK2ErXCIpO2lmKEFycmF5LmlzQXJyYXkoJCRhKSl7dmFyICQkdj1cIisocj9cIl9uKFwiK2krXCIpXCI6aSkrXCIsJCRpPV9pKCQkYSwkJHYpO2lmKCQkYyl7JCRpPDAmJihcIit0K1wiPSQkYS5jb25jYXQoJCR2KSl9ZWxzZXskJGk+LTEmJihcIit0K1wiPSQkYS5zbGljZSgwLCQkaSkuY29uY2F0KCQkYS5zbGljZSgkJGkrMSkpKX19ZWxzZXtcIit0K1wiPSQkY31cIixudWxsLCEwKX1mdW5jdGlvbiBTcihlLHQsbil7dmFyIHI9biYmbi5udW1iZXIsaT1nbihlLFwidmFsdWVcIil8fFwibnVsbFwiO2k9cj9cIl9uKFwiK2krXCIpXCI6aSxwbihlLFwiY2hlY2tlZFwiLFwiX3EoXCIrdCtcIixcIitpK1wiKVwiKSxtbihlLFwiY2hhbmdlXCIsRXIodCxpKSxudWxsLCEwKX1mdW5jdGlvbiBUcihlLHQsbil7dmFyIHI9ZS5hdHRyc01hcC50eXBlLGk9bnx8e30sbz1pLmxhenksYT1pLm51bWJlcixzPWkudHJpbSxjPW98fGVpJiZcInJhbmdlXCI9PT1yP1wiY2hhbmdlXCI6XCJpbnB1dFwiLGw9IW8mJlwicmFuZ2VcIiE9PXIsdT1cImlucHV0XCI9PT1lLnRhZ3x8XCJ0ZXh0YXJlYVwiPT09ZS50YWcsZj11P1wiJGV2ZW50LnRhcmdldC52YWx1ZVwiKyhzP1wiLnRyaW0oKVwiOlwiXCIpOnM/XCIodHlwZW9mICRldmVudCA9PT0gJ3N0cmluZycgPyAkZXZlbnQudHJpbSgpIDogJGV2ZW50KVwiOlwiJGV2ZW50XCI7Zj1hfHxcIm51bWJlclwiPT09cj9cIl9uKFwiK2YrXCIpXCI6Zjt2YXIgZD1Fcih0LGYpO3UmJmwmJihkPVwiaWYoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpcmV0dXJuO1wiK2QpLHBuKGUsXCJ2YWx1ZVwiLHU/XCJfcyhcIit0K1wiKVwiOlwiKFwiK3QrXCIpXCIpLG1uKGUsYyxkLG51bGwsITApfWZ1bmN0aW9uIGpyKGUsdCxuKXt2YXIgcj1uJiZuLm51bWJlcixpPSdBcnJheS5wcm90b3R5cGUuZmlsdGVyLmNhbGwoJGV2ZW50LnRhcmdldC5vcHRpb25zLGZ1bmN0aW9uKG8pe3JldHVybiBvLnNlbGVjdGVkfSkubWFwKGZ1bmN0aW9uKG8pe3ZhciB2YWwgPSBcIl92YWx1ZVwiIGluIG8gPyBvLl92YWx1ZSA6IG8udmFsdWU7cmV0dXJuICcrKHI/XCJfbih2YWwpXCI6XCJ2YWxcIikrXCJ9KVwiKyhudWxsPT1lLmF0dHJzTWFwLm11bHRpcGxlP1wiWzBdXCI6XCJcIiksbz1Fcih0LGkpO21uKGUsXCJjaGFuZ2VcIixvLG51bGwsITApfWZ1bmN0aW9uIEVyKGUsdCl7dmFyIG49X24oZSk7cmV0dXJuIG51bGw9PT1uLmlkeD9lK1wiPVwiK3Q6XCJ2YXIgJCRleHAgPSBcIituLmV4cCtcIiwgJCRpZHggPSBcIituLmlkeCtcIjtpZiAoIUFycmF5LmlzQXJyYXkoJCRleHApKXtcIitlK1wiPVwiK3QrXCJ9ZWxzZXskJGV4cC5zcGxpY2UoJCRpZHgsIDEsIFwiK3QrXCIpfVwifWZ1bmN0aW9uIE5yKGUsdCl7dC52YWx1ZSYmcG4oZSxcInRleHRDb250ZW50XCIsXCJfcyhcIit0LnZhbHVlK1wiKVwiKX1mdW5jdGlvbiBMcihlLHQpe3QudmFsdWUmJnBuKGUsXCJpbm5lckhUTUxcIixcIl9zKFwiK3QudmFsdWUrXCIpXCIpfWZ1bmN0aW9uIERyKGUsdCl7cmV0dXJuIHQ9dD9sKGwoe30sbHMpLHQpOmxzLCRyKGUsdCl9ZnVuY3Rpb24gTXIoZSx0LG4pe3ZhciByPSh0JiZ0Lndhcm58fHVpLHQmJnQuZGVsaW1pdGVycz9TdHJpbmcodC5kZWxpbWl0ZXJzKStlOmUpO2lmKGNzW3JdKXJldHVybiBjc1tyXTt2YXIgaT17fSxvPURyKGUsdCk7aS5yZW5kZXI9UHIoby5yZW5kZXIpO3ZhciBhPW8uc3RhdGljUmVuZGVyRm5zLmxlbmd0aDtpLnN0YXRpY1JlbmRlckZucz1uZXcgQXJyYXkoYSk7Zm9yKHZhciBzPTA7czxhO3MrKylpLnN0YXRpY1JlbmRlckZuc1tzXT1QcihvLnN0YXRpY1JlbmRlckZuc1tzXSk7cmV0dXJuIGNzW3JdPWl9ZnVuY3Rpb24gUHIoZSl7dHJ5e3JldHVybiBuZXcgRnVuY3Rpb24oZSl9Y2F0Y2goZSl7cmV0dXJuIHB9fWZ1bmN0aW9uIFJyKGUpe2lmKGUub3V0ZXJIVE1MKXJldHVybiBlLm91dGVySFRNTDt2YXIgdD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO3JldHVybiB0LmFwcGVuZENoaWxkKGUuY2xvbmVOb2RlKCEwKSksdC5pbm5lckhUTUx9dmFyIElyLEZyLEJyPW4oXCJzbG90LGNvbXBvbmVudFwiLCEwKSxVcj1PYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LEhyPS8tKFxcdykvZyxWcj1hKGZ1bmN0aW9uKGUpe3JldHVybiBlLnJlcGxhY2UoSHIsZnVuY3Rpb24oZSx0KXtyZXR1cm4gdD90LnRvVXBwZXJDYXNlKCk6XCJcIn0pfSksenI9YShmdW5jdGlvbihlKXtyZXR1cm4gZS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKStlLnNsaWNlKDEpfSksSnI9LyhbXi1dKShbQS1aXSkvZyxLcj1hKGZ1bmN0aW9uKGUpe3JldHVybiBlLnJlcGxhY2UoSnIsXCIkMS0kMlwiKS5yZXBsYWNlKEpyLFwiJDEtJDJcIikudG9Mb3dlckNhc2UoKX0pLHFyPU9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcsV3I9XCJbb2JqZWN0IE9iamVjdF1cIixacj1mdW5jdGlvbigpe3JldHVybiExfSxHcj0vW15cXHcuJF0vLFlyPVwiX19wcm90b19fXCJpbnt9LFFyPVwidW5kZWZpbmVkXCIhPXR5cGVvZiB3aW5kb3cmJlwiW29iamVjdCBPYmplY3RdXCIhPT1PYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwod2luZG93KSxYcj1RciYmd2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKSxlaT1YciYmL21zaWV8dHJpZGVudC8udGVzdChYciksdGk9WHImJlhyLmluZGV4T2YoXCJtc2llIDkuMFwiKT4wLG5pPVhyJiZYci5pbmRleE9mKFwiZWRnZS9cIik+MCxyaT1YciYmWHIuaW5kZXhPZihcImFuZHJvaWRcIik+MCxpaT1YciYmL2lwaG9uZXxpcGFkfGlwb2R8aW9zLy50ZXN0KFhyKSxvaT1mdW5jdGlvbigpe3JldHVybiB2b2lkIDA9PT1JciYmKElyPSFRciYmXCJ1bmRlZmluZWRcIiE9dHlwZW9mIGdsb2JhbCYmXCJzZXJ2ZXJcIj09PWdsb2JhbC5wcm9jZXNzLmVudi5WVUVfRU5WKSxJcn0sYWk9UXImJndpbmRvdy5fX1ZVRV9ERVZUT09MU19HTE9CQUxfSE9PS19fLHNpPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gZSgpe3I9ITE7dmFyIGU9bi5zbGljZSgwKTtuLmxlbmd0aD0wO2Zvcih2YXIgdD0wO3Q8ZS5sZW5ndGg7dCsrKWVbdF0oKX12YXIgdCxuPVtdLHI9ITE7aWYoXCJ1bmRlZmluZWRcIiE9dHlwZW9mIFByb21pc2UmJmIoUHJvbWlzZSkpe3ZhciBpPVByb21pc2UucmVzb2x2ZSgpO3Q9ZnVuY3Rpb24oKXtpLnRoZW4oZSksaWkmJnNldFRpbWVvdXQocCl9fWVsc2UgaWYoXCJ1bmRlZmluZWRcIj09dHlwZW9mIE11dGF0aW9uT2JzZXJ2ZXJ8fCFiKE11dGF0aW9uT2JzZXJ2ZXIpJiZcIltvYmplY3QgTXV0YXRpb25PYnNlcnZlckNvbnN0cnVjdG9yXVwiIT09TXV0YXRpb25PYnNlcnZlci50b1N0cmluZygpKXQ9ZnVuY3Rpb24oKXtzZXRUaW1lb3V0KGUsMCl9O2Vsc2V7dmFyIG89MSxhPW5ldyBNdXRhdGlvbk9ic2VydmVyKGUpLHM9ZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoU3RyaW5nKG8pKTthLm9ic2VydmUocyx7Y2hhcmFjdGVyRGF0YTohMH0pLHQ9ZnVuY3Rpb24oKXtvPShvKzEpJTIscy5kYXRhPVN0cmluZyhvKX19cmV0dXJuIGZ1bmN0aW9uKGUsaSl7dmFyIG87aWYobi5wdXNoKGZ1bmN0aW9uKCl7ZSYmZS5jYWxsKGkpLG8mJm8oaSl9KSxyfHwocj0hMCx0KCkpLCFlJiZcInVuZGVmaW5lZFwiIT10eXBlb2YgUHJvbWlzZSlyZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24oZSl7bz1lfSl9fSgpO0ZyPVwidW5kZWZpbmVkXCIhPXR5cGVvZiBTZXQmJmIoU2V0KT9TZXQ6ZnVuY3Rpb24oKXtmdW5jdGlvbiBlKCl7dGhpcy5zZXQ9T2JqZWN0LmNyZWF0ZShudWxsKX1yZXR1cm4gZS5wcm90b3R5cGUuaGFzPWZ1bmN0aW9uKGUpe3JldHVybiB2b2lkIDAhPT10aGlzLnNldFtlXX0sZS5wcm90b3R5cGUuYWRkPWZ1bmN0aW9uKGUpe3RoaXMuc2V0W2VdPTF9LGUucHJvdG90eXBlLmNsZWFyPWZ1bmN0aW9uKCl7dGhpcy5zZXQ9T2JqZWN0LmNyZWF0ZShudWxsKX0sZX0oKTt2YXIgY2ksbGk9e29wdGlvbk1lcmdlU3RyYXRlZ2llczpPYmplY3QuY3JlYXRlKG51bGwpLHNpbGVudDohMSxkZXZ0b29sczohMSxlcnJvckhhbmRsZXI6bnVsbCxpZ25vcmVkRWxlbWVudHM6bnVsbCxrZXlDb2RlczpPYmplY3QuY3JlYXRlKG51bGwpLGlzUmVzZXJ2ZWRUYWc6WnIsaXNVbmtub3duRWxlbWVudDpacixnZXRUYWdOYW1lc3BhY2U6cCxtdXN0VXNlUHJvcDpacixfYXNzZXRUeXBlczpbXCJjb21wb25lbnRcIixcImRpcmVjdGl2ZVwiLFwiZmlsdGVyXCJdLF9saWZlY3ljbGVIb29rczpbXCJiZWZvcmVDcmVhdGVcIixcImNyZWF0ZWRcIixcImJlZm9yZU1vdW50XCIsXCJtb3VudGVkXCIsXCJiZWZvcmVVcGRhdGVcIixcInVwZGF0ZWRcIixcImJlZm9yZURlc3Ryb3lcIixcImRlc3Ryb3llZFwiLFwiYWN0aXZhdGVkXCIsXCJkZWFjdGl2YXRlZFwiXSxfbWF4VXBkYXRlQ291bnQ6MTAwfSx1aT1wLGZpPTAsZGk9ZnVuY3Rpb24oKXt0aGlzLmlkPWZpKyssdGhpcy5zdWJzPVtdfTtkaS5wcm90b3R5cGUuYWRkU3ViPWZ1bmN0aW9uKGUpe3RoaXMuc3Vicy5wdXNoKGUpfSxkaS5wcm90b3R5cGUucmVtb3ZlU3ViPWZ1bmN0aW9uKGUpe3IodGhpcy5zdWJzLGUpfSxkaS5wcm90b3R5cGUuZGVwZW5kPWZ1bmN0aW9uKCl7ZGkudGFyZ2V0JiZkaS50YXJnZXQuYWRkRGVwKHRoaXMpfSxkaS5wcm90b3R5cGUubm90aWZ5PWZ1bmN0aW9uKCl7Zm9yKHZhciBlPXRoaXMuc3Vicy5zbGljZSgpLHQ9MCxuPWUubGVuZ3RoO3Q8bjt0KyspZVt0XS51cGRhdGUoKX0sZGkudGFyZ2V0PW51bGw7dmFyIHBpPVtdLHZpPUFycmF5LnByb3RvdHlwZSxoaT1PYmplY3QuY3JlYXRlKHZpKTtbXCJwdXNoXCIsXCJwb3BcIixcInNoaWZ0XCIsXCJ1bnNoaWZ0XCIsXCJzcGxpY2VcIixcInNvcnRcIixcInJldmVyc2VcIl0uZm9yRWFjaChmdW5jdGlvbihlKXt2YXIgdD12aVtlXTt5KGhpLGUsZnVuY3Rpb24oKXtmb3IodmFyIG49YXJndW1lbnRzLHI9YXJndW1lbnRzLmxlbmd0aCxpPW5ldyBBcnJheShyKTtyLS07KWlbcl09bltyXTt2YXIgbyxhPXQuYXBwbHkodGhpcyxpKSxzPXRoaXMuX19vYl9fO3N3aXRjaChlKXtjYXNlXCJwdXNoXCI6bz1pO2JyZWFrO2Nhc2VcInVuc2hpZnRcIjpvPWk7YnJlYWs7Y2FzZVwic3BsaWNlXCI6bz1pLnNsaWNlKDIpfXJldHVybiBvJiZzLm9ic2VydmVBcnJheShvKSxzLmRlcC5ub3RpZnkoKSxhfSl9KTt2YXIgbWk9T2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoaGkpLGdpPXtzaG91bGRDb252ZXJ0OiEwLGlzU2V0dGluZ1Byb3BzOiExfSx5aT1mdW5jdGlvbihlKXtpZih0aGlzLnZhbHVlPWUsdGhpcy5kZXA9bmV3IGRpLHRoaXMudm1Db3VudD0wLHkoZSxcIl9fb2JfX1wiLHRoaXMpLEFycmF5LmlzQXJyYXkoZSkpe3ZhciB0PVlyP3g6Qzt0KGUsaGksbWkpLHRoaXMub2JzZXJ2ZUFycmF5KGUpfWVsc2UgdGhpcy53YWxrKGUpfTt5aS5wcm90b3R5cGUud2Fsaz1mdW5jdGlvbihlKXtmb3IodmFyIHQ9T2JqZWN0LmtleXMoZSksbj0wO248dC5sZW5ndGg7bisrKUEoZSx0W25dLGVbdFtuXV0pfSx5aS5wcm90b3R5cGUub2JzZXJ2ZUFycmF5PWZ1bmN0aW9uKGUpe2Zvcih2YXIgdD0wLG49ZS5sZW5ndGg7dDxuO3QrKylrKGVbdF0pfTt2YXIgX2k9bGkub3B0aW9uTWVyZ2VTdHJhdGVnaWVzO19pLmRhdGE9ZnVuY3Rpb24oZSx0LG4pe3JldHVybiBuP2V8fHQ/ZnVuY3Rpb24oKXt2YXIgcj1cImZ1bmN0aW9uXCI9PXR5cGVvZiB0P3QuY2FsbChuKTp0LGk9XCJmdW5jdGlvblwiPT10eXBlb2YgZT9lLmNhbGwobik6dm9pZCAwO3JldHVybiByP2oocixpKTppfTp2b2lkIDA6dD9cImZ1bmN0aW9uXCIhPXR5cGVvZiB0P2U6ZT9mdW5jdGlvbigpe3JldHVybiBqKHQuY2FsbCh0aGlzKSxlLmNhbGwodGhpcykpfTp0OmV9LGxpLl9saWZlY3ljbGVIb29rcy5mb3JFYWNoKGZ1bmN0aW9uKGUpe19pW2VdPUV9KSxsaS5fYXNzZXRUeXBlcy5mb3JFYWNoKGZ1bmN0aW9uKGUpe19pW2UrXCJzXCJdPU59KSxfaS53YXRjaD1mdW5jdGlvbihlLHQpe2lmKCF0KXJldHVybiBlO2lmKCFlKXJldHVybiB0O3ZhciBuPXt9O2wobixlKTtmb3IodmFyIHIgaW4gdCl7dmFyIGk9bltyXSxvPXRbcl07aSYmIUFycmF5LmlzQXJyYXkoaSkmJihpPVtpXSksbltyXT1pP2kuY29uY2F0KG8pOltvXX1yZXR1cm4gbn0sX2kucHJvcHM9X2kubWV0aG9kcz1faS5jb21wdXRlZD1mdW5jdGlvbihlLHQpe2lmKCF0KXJldHVybiBlO2lmKCFlKXJldHVybiB0O3ZhciBuPU9iamVjdC5jcmVhdGUobnVsbCk7cmV0dXJuIGwobixlKSxsKG4sdCksbn07dmFyIGJpPWZ1bmN0aW9uKGUsdCl7cmV0dXJuIHZvaWQgMD09PXQ/ZTp0fSwkaT1PYmplY3QuZnJlZXplKHtkZWZpbmVSZWFjdGl2ZTpBLF90b1N0cmluZzplLHRvTnVtYmVyOnQsbWFrZU1hcDpuLGlzQnVpbHRJblRhZzpCcixyZW1vdmU6cixoYXNPd246aSxpc1ByaW1pdGl2ZTpvLGNhY2hlZDphLGNhbWVsaXplOlZyLGNhcGl0YWxpemU6enIsaHlwaGVuYXRlOktyLGJpbmQ6cyx0b0FycmF5OmMsZXh0ZW5kOmwsaXNPYmplY3Q6dSxpc1BsYWluT2JqZWN0OmYsdG9PYmplY3Q6ZCxub29wOnAsbm86WnIsZ2VuU3RhdGljS2V5czp2LGxvb3NlRXF1YWw6aCxsb29zZUluZGV4T2Y6bSxpc1Jlc2VydmVkOmcsZGVmOnkscGFyc2VQYXRoOl8saGFzUHJvdG86WXIsaW5Ccm93c2VyOlFyLFVBOlhyLGlzSUU6ZWksaXNJRTk6dGksaXNFZGdlOm5pLGlzQW5kcm9pZDpyaSxpc0lPUzppaSxpc1NlcnZlclJlbmRlcmluZzpvaSxkZXZ0b29sczphaSxuZXh0VGljazpzaSxnZXQgX1NldCgpe3JldHVybiBGcn0sbWVyZ2VPcHRpb25zOk0scmVzb2x2ZUFzc2V0OlAsd2Fybjp1aSxmb3JtYXRDb21wb25lbnROYW1lOmNpLHZhbGlkYXRlUHJvcDpSfSksd2k9W10seGk9e30sQ2k9ITEsa2k9ITEsQWk9MCxPaT0wLFNpPWZ1bmN0aW9uKGUsdCxuLHIpe3ZvaWQgMD09PXImJihyPXt9KSx0aGlzLnZtPWUsZS5fd2F0Y2hlcnMucHVzaCh0aGlzKSx0aGlzLmRlZXA9ISFyLmRlZXAsdGhpcy51c2VyPSEhci51c2VyLHRoaXMubGF6eT0hIXIubGF6eSx0aGlzLnN5bmM9ISFyLnN5bmMsdGhpcy5leHByZXNzaW9uPXQudG9TdHJpbmcoKSx0aGlzLmNiPW4sdGhpcy5pZD0rK09pLHRoaXMuYWN0aXZlPSEwLHRoaXMuZGlydHk9dGhpcy5sYXp5LHRoaXMuZGVwcz1bXSx0aGlzLm5ld0RlcHM9W10sdGhpcy5kZXBJZHM9bmV3IEZyLHRoaXMubmV3RGVwSWRzPW5ldyBGcixcImZ1bmN0aW9uXCI9PXR5cGVvZiB0P3RoaXMuZ2V0dGVyPXQ6KHRoaXMuZ2V0dGVyPV8odCksdGhpcy5nZXR0ZXJ8fCh0aGlzLmdldHRlcj1mdW5jdGlvbigpe30pKSx0aGlzLnZhbHVlPXRoaXMubGF6eT92b2lkIDA6dGhpcy5nZXQoKX07U2kucHJvdG90eXBlLmdldD1mdW5jdGlvbigpeyQodGhpcyk7dmFyIGU9dGhpcy5nZXR0ZXIuY2FsbCh0aGlzLnZtLHRoaXMudm0pO3JldHVybiB0aGlzLmRlZXAmJnooZSksdygpLHRoaXMuY2xlYW51cERlcHMoKSxlfSxTaS5wcm90b3R5cGUuYWRkRGVwPWZ1bmN0aW9uKGUpe3ZhciB0PWUuaWQ7dGhpcy5uZXdEZXBJZHMuaGFzKHQpfHwodGhpcy5uZXdEZXBJZHMuYWRkKHQpLHRoaXMubmV3RGVwcy5wdXNoKGUpLHRoaXMuZGVwSWRzLmhhcyh0KXx8ZS5hZGRTdWIodGhpcykpfSxTaS5wcm90b3R5cGUuY2xlYW51cERlcHM9ZnVuY3Rpb24oKXtmb3IodmFyIGU9dGhpcyx0PXRoaXMuZGVwcy5sZW5ndGg7dC0tOyl7dmFyIG49ZS5kZXBzW3RdO2UubmV3RGVwSWRzLmhhcyhuLmlkKXx8bi5yZW1vdmVTdWIoZSl9dmFyIHI9dGhpcy5kZXBJZHM7dGhpcy5kZXBJZHM9dGhpcy5uZXdEZXBJZHMsdGhpcy5uZXdEZXBJZHM9cix0aGlzLm5ld0RlcElkcy5jbGVhcigpLHI9dGhpcy5kZXBzLHRoaXMuZGVwcz10aGlzLm5ld0RlcHMsdGhpcy5uZXdEZXBzPXIsdGhpcy5uZXdEZXBzLmxlbmd0aD0wfSxTaS5wcm90b3R5cGUudXBkYXRlPWZ1bmN0aW9uKCl7dGhpcy5sYXp5P3RoaXMuZGlydHk9ITA6dGhpcy5zeW5jP3RoaXMucnVuKCk6Vih0aGlzKX0sU2kucHJvdG90eXBlLnJ1bj1mdW5jdGlvbigpe2lmKHRoaXMuYWN0aXZlKXt2YXIgZT10aGlzLmdldCgpO2lmKGUhPT10aGlzLnZhbHVlfHx1KGUpfHx0aGlzLmRlZXApe3ZhciB0PXRoaXMudmFsdWU7aWYodGhpcy52YWx1ZT1lLHRoaXMudXNlcil0cnl7dGhpcy5jYi5jYWxsKHRoaXMudm0sZSx0KX1jYXRjaChlKXtpZighbGkuZXJyb3JIYW5kbGVyKXRocm93IGU7bGkuZXJyb3JIYW5kbGVyLmNhbGwobnVsbCxlLHRoaXMudm0pfWVsc2UgdGhpcy5jYi5jYWxsKHRoaXMudm0sZSx0KX19fSxTaS5wcm90b3R5cGUuZXZhbHVhdGU9ZnVuY3Rpb24oKXt0aGlzLnZhbHVlPXRoaXMuZ2V0KCksdGhpcy5kaXJ0eT0hMX0sU2kucHJvdG90eXBlLmRlcGVuZD1mdW5jdGlvbigpe2Zvcih2YXIgZT10aGlzLHQ9dGhpcy5kZXBzLmxlbmd0aDt0LS07KWUuZGVwc1t0XS5kZXBlbmQoKX0sU2kucHJvdG90eXBlLnRlYXJkb3duPWZ1bmN0aW9uKCl7dmFyIGU9dGhpcztpZih0aGlzLmFjdGl2ZSl7dGhpcy52bS5faXNCZWluZ0Rlc3Ryb3llZHx8dGhpcy52bS5fdkZvclJlbW92aW5nfHxyKHRoaXMudm0uX3dhdGNoZXJzLHRoaXMpO2Zvcih2YXIgdD10aGlzLmRlcHMubGVuZ3RoO3QtLTspZS5kZXBzW3RdLnJlbW92ZVN1YihlKTt0aGlzLmFjdGl2ZT0hMX19O3ZhciBUaT1uZXcgRnIsamk9e2VudW1lcmFibGU6ITAsY29uZmlndXJhYmxlOiEwLGdldDpwLHNldDpwfSxFaT1mdW5jdGlvbihlLHQsbixyLGksbyxhLHMpe3RoaXMudGFnPWUsdGhpcy5kYXRhPXQsdGhpcy5jaGlsZHJlbj1uLHRoaXMudGV4dD1yLHRoaXMuZWxtPWksdGhpcy5ucz1vLHRoaXMuY29udGV4dD1hLHRoaXMuZnVuY3Rpb25hbENvbnRleHQ9dm9pZCAwLHRoaXMua2V5PXQmJnQua2V5LHRoaXMuY29tcG9uZW50T3B0aW9ucz1zLHRoaXMuY2hpbGQ9dm9pZCAwLHRoaXMucGFyZW50PXZvaWQgMCx0aGlzLnJhdz0hMSx0aGlzLmlzU3RhdGljPSExLHRoaXMuaXNSb290SW5zZXJ0PSEwLHRoaXMuaXNDb21tZW50PSExLHRoaXMuaXNDbG9uZWQ9ITEsdGhpcy5pc09uY2U9ITF9LE5pPWZ1bmN0aW9uKCl7dmFyIGU9bmV3IEVpO3JldHVybiBlLnRleHQ9XCJcIixlLmlzQ29tbWVudD0hMCxlfSxMaT1udWxsLERpPXtpbml0OnllLHByZXBhdGNoOl9lLGluc2VydDpiZSxkZXN0cm95OiRlfSxNaT1PYmplY3Qua2V5cyhEaSksUGk9MDtEZShSZSksZWUoUmUpLExlKFJlKSxwZShSZSksamUoUmUpO3ZhciBSaT1bU3RyaW5nLFJlZ0V4cF0sSWk9e25hbWU6XCJrZWVwLWFsaXZlXCIsYWJzdHJhY3Q6ITAscHJvcHM6e2luY2x1ZGU6UmksZXhjbHVkZTpSaX0sY3JlYXRlZDpmdW5jdGlvbigpe3RoaXMuY2FjaGU9T2JqZWN0LmNyZWF0ZShudWxsKX0scmVuZGVyOmZ1bmN0aW9uKCl7dmFyIGU9ZmUodGhpcy4kc2xvdHMuZGVmYXVsdCk7aWYoZSYmZS5jb21wb25lbnRPcHRpb25zKXt2YXIgdD1lLmNvbXBvbmVudE9wdGlvbnMsbj10LkN0b3Iub3B0aW9ucy5uYW1lfHx0LnRhZztpZihuJiYodGhpcy5pbmNsdWRlJiYhSGUodGhpcy5pbmNsdWRlLG4pfHx0aGlzLmV4Y2x1ZGUmJkhlKHRoaXMuZXhjbHVkZSxuKSkpcmV0dXJuIGU7dmFyIHI9bnVsbD09ZS5rZXk/dC5DdG9yLmNpZCsodC50YWc/XCI6OlwiK3QudGFnOlwiXCIpOmUua2V5O3RoaXMuY2FjaGVbcl0/ZS5jaGlsZD10aGlzLmNhY2hlW3JdLmNoaWxkOnRoaXMuY2FjaGVbcl09ZSxlLmRhdGEua2VlcEFsaXZlPSEwfXJldHVybiBlfSxkZXN0cm95ZWQ6ZnVuY3Rpb24oKXt2YXIgZT10aGlzO2Zvcih2YXIgdCBpbiB0aGlzLmNhY2hlKXt2YXIgbj1lLmNhY2hlW3RdO3ZlKG4uY2hpbGQsXCJkZWFjdGl2YXRlZFwiKSxuLmNoaWxkLiRkZXN0cm95KCl9fX0sRmk9e0tlZXBBbGl2ZTpJaX07VmUoUmUpLE9iamVjdC5kZWZpbmVQcm9wZXJ0eShSZS5wcm90b3R5cGUsXCIkaXNTZXJ2ZXJcIix7Z2V0Om9pfSksUmUudmVyc2lvbj1cIjIuMS4wXCI7dmFyIEJpLFVpPWZ1bmN0aW9uKGUsdCl7cmV0dXJuXCJ2YWx1ZVwiPT09dCYmKFwiaW5wdXRcIj09PWV8fFwidGV4dGFyZWFcIj09PWV8fFwib3B0aW9uXCI9PT1lKXx8XCJzZWxlY3RlZFwiPT09dCYmXCJvcHRpb25cIj09PWV8fFwiY2hlY2tlZFwiPT09dCYmXCJpbnB1dFwiPT09ZXx8XCJtdXRlZFwiPT09dCYmXCJ2aWRlb1wiPT09ZX0sSGk9bihcImNvbnRlbnRlZGl0YWJsZSxkcmFnZ2FibGUsc3BlbGxjaGVja1wiKSxWaT1uKFwiYWxsb3dmdWxsc2NyZWVuLGFzeW5jLGF1dG9mb2N1cyxhdXRvcGxheSxjaGVja2VkLGNvbXBhY3QsY29udHJvbHMsZGVjbGFyZSxkZWZhdWx0LGRlZmF1bHRjaGVja2VkLGRlZmF1bHRtdXRlZCxkZWZhdWx0c2VsZWN0ZWQsZGVmZXIsZGlzYWJsZWQsZW5hYmxlZCxmb3Jtbm92YWxpZGF0ZSxoaWRkZW4saW5kZXRlcm1pbmF0ZSxpbmVydCxpc21hcCxpdGVtc2NvcGUsbG9vcCxtdWx0aXBsZSxtdXRlZCxub2hyZWYsbm9yZXNpemUsbm9zaGFkZSxub3ZhbGlkYXRlLG5vd3JhcCxvcGVuLHBhdXNlb25leGl0LHJlYWRvbmx5LHJlcXVpcmVkLHJldmVyc2VkLHNjb3BlZCxzZWFtbGVzcyxzZWxlY3RlZCxzb3J0YWJsZSx0cmFuc2xhdGUsdHJ1ZXNwZWVkLHR5cGVtdXN0bWF0Y2gsdmlzaWJsZVwiKSx6aT1cImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIixKaT1mdW5jdGlvbihlKXtyZXR1cm5cIjpcIj09PWUuY2hhckF0KDUpJiZcInhsaW5rXCI9PT1lLnNsaWNlKDAsNSl9LEtpPWZ1bmN0aW9uKGUpe3JldHVybiBKaShlKT9lLnNsaWNlKDYsZS5sZW5ndGgpOlwiXCJ9LHFpPWZ1bmN0aW9uKGUpe3JldHVybiBudWxsPT1lfHxlPT09ITF9LFdpPXtzdmc6XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLG1hdGg6XCJodHRwOi8vd3d3LnczLm9yZy8xOTk4L01hdGgvTWF0aE1MXCIseGh0bWw6XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hodG1sXCJ9LFppPW4oXCJodG1sLGJvZHksYmFzZSxoZWFkLGxpbmssbWV0YSxzdHlsZSx0aXRsZSxhZGRyZXNzLGFydGljbGUsYXNpZGUsZm9vdGVyLGhlYWRlcixoMSxoMixoMyxoNCxoNSxoNixoZ3JvdXAsbmF2LHNlY3Rpb24sZGl2LGRkLGRsLGR0LGZpZ2NhcHRpb24sZmlndXJlLGhyLGltZyxsaSxtYWluLG9sLHAscHJlLHVsLGEsYixhYmJyLGJkaSxiZG8sYnIsY2l0ZSxjb2RlLGRhdGEsZGZuLGVtLGksa2JkLG1hcmsscSxycCxydCxydGMscnVieSxzLHNhbXAsc21hbGwsc3BhbixzdHJvbmcsc3ViLHN1cCx0aW1lLHUsdmFyLHdicixhcmVhLGF1ZGlvLG1hcCx0cmFjayx2aWRlbyxlbWJlZCxvYmplY3QscGFyYW0sc291cmNlLGNhbnZhcyxzY3JpcHQsbm9zY3JpcHQsZGVsLGlucyxjYXB0aW9uLGNvbCxjb2xncm91cCx0YWJsZSx0aGVhZCx0Ym9keSx0ZCx0aCx0cixidXR0b24sZGF0YWxpc3QsZmllbGRzZXQsZm9ybSxpbnB1dCxsYWJlbCxsZWdlbmQsbWV0ZXIsb3B0Z3JvdXAsb3B0aW9uLG91dHB1dCxwcm9ncmVzcyxzZWxlY3QsdGV4dGFyZWEsZGV0YWlscyxkaWFsb2csbWVudSxtZW51aXRlbSxzdW1tYXJ5LGNvbnRlbnQsZWxlbWVudCxzaGFkb3csdGVtcGxhdGVcIiksR2k9bihcImFyZWEsYmFzZSxicixjb2wsZW1iZWQsZnJhbWUsaHIsaW1nLGlucHV0LGlzaW5kZXgsa2V5Z2VuLGxpbmssbWV0YSxwYXJhbSxzb3VyY2UsdHJhY2ssd2JyXCIsITApLFlpPW4oXCJjb2xncm91cCxkZCxkdCxsaSxvcHRpb25zLHAsdGQsdGZvb3QsdGgsdGhlYWQsdHIsc291cmNlXCIsITApLFFpPW4oXCJhZGRyZXNzLGFydGljbGUsYXNpZGUsYmFzZSxibG9ja3F1b3RlLGJvZHksY2FwdGlvbixjb2wsY29sZ3JvdXAsZGQsZGV0YWlscyxkaWFsb2csZGl2LGRsLGR0LGZpZWxkc2V0LGZpZ2NhcHRpb24sZmlndXJlLGZvb3Rlcixmb3JtLGgxLGgyLGgzLGg0LGg1LGg2LGhlYWQsaGVhZGVyLGhncm91cCxocixodG1sLGxlZ2VuZCxsaSxtZW51aXRlbSxtZXRhLG9wdGdyb3VwLG9wdGlvbixwYXJhbSxycCxydCxzb3VyY2Usc3R5bGUsc3VtbWFyeSx0Ym9keSx0ZCx0Zm9vdCx0aCx0aGVhZCx0aXRsZSx0cix0cmFja1wiLCEwKSxYaT1uKFwic3ZnLGFuaW1hdGUsY2lyY2xlLGNsaXBwYXRoLGN1cnNvcixkZWZzLGRlc2MsZWxsaXBzZSxmaWx0ZXIsZm9udCxmb250LWZhY2UsZyxnbHlwaCxpbWFnZSxsaW5lLG1hcmtlcixtYXNrLG1pc3NpbmctZ2x5cGgscGF0aCxwYXR0ZXJuLHBvbHlnb24scG9seWxpbmUscmVjdCxzd2l0Y2gsc3ltYm9sLHRleHQsdGV4dHBhdGgsdHNwYW4sdXNlLHZpZXdcIiwhMCksZW89ZnVuY3Rpb24oZSl7cmV0dXJuXCJwcmVcIj09PWV9LHRvPWZ1bmN0aW9uKGUpe3JldHVybiBaaShlKXx8WGkoZSl9LG5vPU9iamVjdC5jcmVhdGUobnVsbCkscm89T2JqZWN0LmZyZWV6ZSh7Y3JlYXRlRWxlbWVudDpRZSxjcmVhdGVFbGVtZW50TlM6WGUsY3JlYXRlVGV4dE5vZGU6ZXQsY3JlYXRlQ29tbWVudDp0dCxpbnNlcnRCZWZvcmU6bnQscmVtb3ZlQ2hpbGQ6cnQsYXBwZW5kQ2hpbGQ6aXQscGFyZW50Tm9kZTpvdCxuZXh0U2libGluZzphdCx0YWdOYW1lOnN0LHNldFRleHRDb250ZW50OmN0LGNoaWxkTm9kZXM6bHQsc2V0QXR0cmlidXRlOnV0fSksaW89e2NyZWF0ZTpmdW5jdGlvbihlLHQpe2Z0KHQpfSx1cGRhdGU6ZnVuY3Rpb24oZSx0KXtlLmRhdGEucmVmIT09dC5kYXRhLnJlZiYmKGZ0KGUsITApLGZ0KHQpKX0sZGVzdHJveTpmdW5jdGlvbihlKXtmdChlLCEwKX19LG9vPW5ldyBFaShcIlwiLHt9LFtdKSxhbz1bXCJjcmVhdGVcIixcInVwZGF0ZVwiLFwicmVtb3ZlXCIsXCJkZXN0cm95XCJdLHNvPXtjcmVhdGU6Z3QsdXBkYXRlOmd0LGRlc3Ryb3k6ZnVuY3Rpb24oZSl7Z3QoZSxvbyl9fSxjbz1PYmplY3QuY3JlYXRlKG51bGwpLGxvPVtpbyxzb10sdW89e2NyZWF0ZTokdCx1cGRhdGU6JHR9LGZvPXtjcmVhdGU6eHQsdXBkYXRlOnh0fSxwbz17Y3JlYXRlOkN0LHVwZGF0ZTpDdH0sdm89e2NyZWF0ZTprdCx1cGRhdGU6a3R9LGhvPWEoZnVuY3Rpb24oZSl7dmFyIHQ9e30sbj1lLmluZGV4T2YoXCJiYWNrZ3JvdW5kXCIpPj0wLHI9bj8vOyg/IVteKF0qXFwpKS9nOlwiO1wiLGk9bj8vOiguKykvOlwiOlwiO3JldHVybiBlLnNwbGl0KHIpLmZvckVhY2goZnVuY3Rpb24oZSl7aWYoZSl7dmFyIG49ZS5zcGxpdChpKTtuLmxlbmd0aD4xJiYodFtuWzBdLnRyaW0oKV09blsxXS50cmltKCkpfX0pLHR9KSxtbz0vXi0tLyxnbz1mdW5jdGlvbihlLHQsbil7bW8udGVzdCh0KT9lLnN0eWxlLnNldFByb3BlcnR5KHQsbik6ZS5zdHlsZVtfbyh0KV09bn0seW89W1wiV2Via2l0XCIsXCJNb3pcIixcIm1zXCJdLF9vPWEoZnVuY3Rpb24oZSl7aWYoQmk9Qml8fGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksZT1WcihlKSxcImZpbHRlclwiIT09ZSYmZSBpbiBCaS5zdHlsZSlyZXR1cm4gZTtmb3IodmFyIHQ9ZS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKStlLnNsaWNlKDEpLG49MDtuPHlvLmxlbmd0aDtuKyspe3ZhciByPXlvW25dK3Q7aWYociBpbiBCaS5zdHlsZSlyZXR1cm4gcn19KSxibz17Y3JlYXRlOlR0LHVwZGF0ZTpUdH0sJG89UXImJiF0aSx3bz1cInRyYW5zaXRpb25cIix4bz1cImFuaW1hdGlvblwiLENvPVwidHJhbnNpdGlvblwiLGtvPVwidHJhbnNpdGlvbmVuZFwiLEFvPVwiYW5pbWF0aW9uXCIsT289XCJhbmltYXRpb25lbmRcIjskbyYmKHZvaWQgMD09PXdpbmRvdy5vbnRyYW5zaXRpb25lbmQmJnZvaWQgMCE9PXdpbmRvdy5vbndlYmtpdHRyYW5zaXRpb25lbmQmJihDbz1cIldlYmtpdFRyYW5zaXRpb25cIixrbz1cIndlYmtpdFRyYW5zaXRpb25FbmRcIiksdm9pZCAwPT09d2luZG93Lm9uYW5pbWF0aW9uZW5kJiZ2b2lkIDAhPT13aW5kb3cub253ZWJraXRhbmltYXRpb25lbmQmJihBbz1cIldlYmtpdEFuaW1hdGlvblwiLE9vPVwid2Via2l0QW5pbWF0aW9uRW5kXCIpKTt2YXIgU289UXImJndpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWV8fHNldFRpbWVvdXQsVG89L1xcYih0cmFuc2Zvcm18YWxsKSgsfCQpLyxqbz1hKGZ1bmN0aW9uKGUpe3JldHVybntlbnRlckNsYXNzOmUrXCItZW50ZXJcIixsZWF2ZUNsYXNzOmUrXCItbGVhdmVcIixhcHBlYXJDbGFzczplK1wiLWVudGVyXCIsZW50ZXJBY3RpdmVDbGFzczplK1wiLWVudGVyLWFjdGl2ZVwiLGxlYXZlQWN0aXZlQ2xhc3M6ZStcIi1sZWF2ZS1hY3RpdmVcIixhcHBlYXJBY3RpdmVDbGFzczplK1wiLWVudGVyLWFjdGl2ZVwifX0pLEVvPVFyP3tjcmVhdGU6ZnVuY3Rpb24oZSx0KXt0LmRhdGEuc2hvd3x8RnQodCl9LHJlbW92ZTpmdW5jdGlvbihlLHQpe2UuZGF0YS5zaG93P3QoKTpCdChlLHQpfX06e30sTm89W3VvLGZvLHBvLHZvLGJvLEVvXSxMbz1Oby5jb25jYXQobG8pLERvPW10KHtub2RlT3BzOnJvLG1vZHVsZXM6TG99KTt0aSYmZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInNlbGVjdGlvbmNoYW5nZVwiLGZ1bmN0aW9uKCl7dmFyIGU9ZG9jdW1lbnQuYWN0aXZlRWxlbWVudDtlJiZlLnZtb2RlbCYmV3QoZSxcImlucHV0XCIpfSk7dmFyIE1vPXtpbnNlcnRlZDpmdW5jdGlvbihlLHQsbil7aWYoXCJzZWxlY3RcIj09PW4udGFnKXt2YXIgcj1mdW5jdGlvbigpe1Z0KGUsdCxuLmNvbnRleHQpfTtyKCksKGVpfHxuaSkmJnNldFRpbWVvdXQociwwKX1lbHNlXCJ0ZXh0YXJlYVwiIT09bi50YWcmJlwidGV4dFwiIT09ZS50eXBlfHx0Lm1vZGlmaWVycy5sYXp5fHwocml8fChlLmFkZEV2ZW50TGlzdGVuZXIoXCJjb21wb3NpdGlvbnN0YXJ0XCIsS3QpLGUuYWRkRXZlbnRMaXN0ZW5lcihcImNvbXBvc2l0aW9uZW5kXCIscXQpKSx0aSYmKGUudm1vZGVsPSEwKSl9LGNvbXBvbmVudFVwZGF0ZWQ6ZnVuY3Rpb24oZSx0LG4pe2lmKFwic2VsZWN0XCI9PT1uLnRhZyl7VnQoZSx0LG4uY29udGV4dCk7dmFyIHI9ZS5tdWx0aXBsZT90LnZhbHVlLnNvbWUoZnVuY3Rpb24odCl7cmV0dXJuIHp0KHQsZS5vcHRpb25zKX0pOnQudmFsdWUhPT10Lm9sZFZhbHVlJiZ6dCh0LnZhbHVlLGUub3B0aW9ucyk7ciYmV3QoZSxcImNoYW5nZVwiKX19fSxQbz17YmluZDpmdW5jdGlvbihlLHQsbil7dmFyIHI9dC52YWx1ZTtuPVp0KG4pO3ZhciBpPW4uZGF0YSYmbi5kYXRhLnRyYW5zaXRpb247ciYmaSYmIXRpJiZGdChuKTt2YXIgbz1cIm5vbmVcIj09PWUuc3R5bGUuZGlzcGxheT9cIlwiOmUuc3R5bGUuZGlzcGxheTtlLnN0eWxlLmRpc3BsYXk9cj9vOlwibm9uZVwiLGUuX192T3JpZ2luYWxEaXNwbGF5PW99LHVwZGF0ZTpmdW5jdGlvbihlLHQsbil7dmFyIHI9dC52YWx1ZSxpPXQub2xkVmFsdWU7aWYociE9PWkpe249WnQobik7dmFyIG89bi5kYXRhJiZuLmRhdGEudHJhbnNpdGlvbjtvJiYhdGk/cj8oRnQobiksZS5zdHlsZS5kaXNwbGF5PWUuX192T3JpZ2luYWxEaXNwbGF5KTpCdChuLGZ1bmN0aW9uKCl7ZS5zdHlsZS5kaXNwbGF5PVwibm9uZVwifSk6ZS5zdHlsZS5kaXNwbGF5PXI/ZS5fX3ZPcmlnaW5hbERpc3BsYXk6XCJub25lXCJ9fX0sUm89e21vZGVsOk1vLHNob3c6UG99LElvPXtuYW1lOlN0cmluZyxhcHBlYXI6Qm9vbGVhbixjc3M6Qm9vbGVhbixtb2RlOlN0cmluZyx0eXBlOlN0cmluZyxlbnRlckNsYXNzOlN0cmluZyxsZWF2ZUNsYXNzOlN0cmluZyxlbnRlckFjdGl2ZUNsYXNzOlN0cmluZyxsZWF2ZUFjdGl2ZUNsYXNzOlN0cmluZyxhcHBlYXJDbGFzczpTdHJpbmcsYXBwZWFyQWN0aXZlQ2xhc3M6U3RyaW5nfSxGbz17bmFtZTpcInRyYW5zaXRpb25cIixwcm9wczpJbyxhYnN0cmFjdDohMCxcbnJlbmRlcjpmdW5jdGlvbihlKXt2YXIgdD10aGlzLG49dGhpcy4kc2xvdHMuZGVmYXVsdDtpZihuJiYobj1uLmZpbHRlcihmdW5jdGlvbihlKXtyZXR1cm4gZS50YWd9KSxuLmxlbmd0aCkpe3ZhciByPXRoaXMubW9kZSxpPW5bMF07aWYoWHQodGhpcy4kdm5vZGUpKXJldHVybiBpO3ZhciBvPUd0KGkpO2lmKCFvKXJldHVybiBpO2lmKHRoaXMuX2xlYXZpbmcpcmV0dXJuIFF0KGUsaSk7dmFyIGE9by5rZXk9bnVsbD09by5rZXl8fG8uaXNTdGF0aWM/XCJfX3ZcIisoby50YWcrdGhpcy5fdWlkKStcIl9fXCI6by5rZXkscz0oby5kYXRhfHwoby5kYXRhPXt9KSkudHJhbnNpdGlvbj1ZdCh0aGlzKSxjPXRoaXMuX3Zub2RlLHU9R3QoYyk7aWYoby5kYXRhLmRpcmVjdGl2ZXMmJm8uZGF0YS5kaXJlY3RpdmVzLnNvbWUoZnVuY3Rpb24oZSl7cmV0dXJuXCJzaG93XCI9PT1lLm5hbWV9KSYmKG8uZGF0YS5zaG93PSEwKSx1JiZ1LmRhdGEmJnUua2V5IT09YSl7dmFyIGY9dS5kYXRhLnRyYW5zaXRpb249bCh7fSxzKTtpZihcIm91dC1pblwiPT09cilyZXR1cm4gdGhpcy5fbGVhdmluZz0hMCxpZShmLFwiYWZ0ZXJMZWF2ZVwiLGZ1bmN0aW9uKCl7dC5fbGVhdmluZz0hMSx0LiRmb3JjZVVwZGF0ZSgpfSxhKSxRdChlLGkpO2lmKFwiaW4tb3V0XCI9PT1yKXt2YXIgZCxwPWZ1bmN0aW9uKCl7ZCgpfTtpZShzLFwiYWZ0ZXJFbnRlclwiLHAsYSksaWUocyxcImVudGVyQ2FuY2VsbGVkXCIscCxhKSxpZShmLFwiZGVsYXlMZWF2ZVwiLGZ1bmN0aW9uKGUpe2Q9ZX0sYSl9fXJldHVybiBpfX19LEJvPWwoe3RhZzpTdHJpbmcsbW92ZUNsYXNzOlN0cmluZ30sSW8pO2RlbGV0ZSBCby5tb2RlO3ZhciBVbz17cHJvcHM6Qm8scmVuZGVyOmZ1bmN0aW9uKGUpe2Zvcih2YXIgdD10aGlzLnRhZ3x8dGhpcy4kdm5vZGUuZGF0YS50YWd8fFwic3BhblwiLG49T2JqZWN0LmNyZWF0ZShudWxsKSxyPXRoaXMucHJldkNoaWxkcmVuPXRoaXMuY2hpbGRyZW4saT10aGlzLiRzbG90cy5kZWZhdWx0fHxbXSxvPXRoaXMuY2hpbGRyZW49W10sYT1ZdCh0aGlzKSxzPTA7czxpLmxlbmd0aDtzKyspe3ZhciBjPWlbc107Yy50YWcmJm51bGwhPWMua2V5JiYwIT09U3RyaW5nKGMua2V5KS5pbmRleE9mKFwiX192bGlzdFwiKSYmKG8ucHVzaChjKSxuW2Mua2V5XT1jLChjLmRhdGF8fChjLmRhdGE9e30pKS50cmFuc2l0aW9uPWEpfWlmKHIpe2Zvcih2YXIgbD1bXSx1PVtdLGY9MDtmPHIubGVuZ3RoO2YrKyl7dmFyIGQ9cltmXTtkLmRhdGEudHJhbnNpdGlvbj1hLGQuZGF0YS5wb3M9ZC5lbG0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksbltkLmtleV0/bC5wdXNoKGQpOnUucHVzaChkKX10aGlzLmtlcHQ9ZSh0LG51bGwsbCksdGhpcy5yZW1vdmVkPXV9cmV0dXJuIGUodCxudWxsLG8pfSxiZWZvcmVVcGRhdGU6ZnVuY3Rpb24oKXt0aGlzLl9fcGF0Y2hfXyh0aGlzLl92bm9kZSx0aGlzLmtlcHQsITEsITApLHRoaXMuX3Zub2RlPXRoaXMua2VwdH0sdXBkYXRlZDpmdW5jdGlvbigpe3ZhciBlPXRoaXMucHJldkNoaWxkcmVuLHQ9dGhpcy5tb3ZlQ2xhc3N8fCh0aGlzLm5hbWV8fFwidlwiKStcIi1tb3ZlXCI7aWYoZS5sZW5ndGgmJnRoaXMuaGFzTW92ZShlWzBdLmVsbSx0KSl7ZS5mb3JFYWNoKGVuKSxlLmZvckVhY2godG4pLGUuZm9yRWFjaChubik7ZG9jdW1lbnQuYm9keS5vZmZzZXRIZWlnaHQ7ZS5mb3JFYWNoKGZ1bmN0aW9uKGUpe2lmKGUuZGF0YS5tb3ZlZCl7dmFyIG49ZS5lbG0scj1uLnN0eWxlO0x0KG4sdCksci50cmFuc2Zvcm09ci5XZWJraXRUcmFuc2Zvcm09ci50cmFuc2l0aW9uRHVyYXRpb249XCJcIixuLmFkZEV2ZW50TGlzdGVuZXIoa28sbi5fbW92ZUNiPWZ1bmN0aW9uIGUocil7ciYmIS90cmFuc2Zvcm0kLy50ZXN0KHIucHJvcGVydHlOYW1lKXx8KG4ucmVtb3ZlRXZlbnRMaXN0ZW5lcihrbyxlKSxuLl9tb3ZlQ2I9bnVsbCxEdChuLHQpKX0pfX0pfX0sbWV0aG9kczp7aGFzTW92ZTpmdW5jdGlvbihlLHQpe2lmKCEkbylyZXR1cm4hMTtpZihudWxsIT10aGlzLl9oYXNNb3ZlKXJldHVybiB0aGlzLl9oYXNNb3ZlO0x0KGUsdCk7dmFyIG49UHQoZSk7cmV0dXJuIER0KGUsdCksdGhpcy5faGFzTW92ZT1uLmhhc1RyYW5zZm9ybX19fSxIbz17VHJhbnNpdGlvbjpGbyxUcmFuc2l0aW9uR3JvdXA6VW99O1JlLmNvbmZpZy5pc1Vua25vd25FbGVtZW50PUdlLFJlLmNvbmZpZy5pc1Jlc2VydmVkVGFnPXRvLFJlLmNvbmZpZy5nZXRUYWdOYW1lc3BhY2U9WmUsUmUuY29uZmlnLm11c3RVc2VQcm9wPVVpLGwoUmUub3B0aW9ucy5kaXJlY3RpdmVzLFJvKSxsKFJlLm9wdGlvbnMuY29tcG9uZW50cyxIbyksUmUucHJvdG90eXBlLl9fcGF0Y2hfXz1Rcj9EbzpwLFJlLnByb3RvdHlwZS4kbW91bnQ9ZnVuY3Rpb24oZSx0KXtyZXR1cm4gZT1lJiZRcj9ZZShlKTp2b2lkIDAsdGhpcy5fbW91bnQoZSx0KX0sc2V0VGltZW91dChmdW5jdGlvbigpe2xpLmRldnRvb2xzJiZhaSYmYWkuZW1pdChcImluaXRcIixSZSl9LDApO3ZhciBWbyx6bz0hIVFyJiZybihcIlxcblwiLFwiJiMxMDtcIiksSm89LyhbXlxcc1wiJzw+XFwvPV0rKS8sS289Lyg/Oj0pLyxxbz1bL1wiKFteXCJdKilcIisvLnNvdXJjZSwvJyhbXiddKiknKy8uc291cmNlLC8oW15cXHNcIic9PD5gXSspLy5zb3VyY2VdLFdvPW5ldyBSZWdFeHAoXCJeXFxcXHMqXCIrSm8uc291cmNlK1wiKD86XFxcXHMqKFwiK0tvLnNvdXJjZStcIilcXFxccyooPzpcIitxby5qb2luKFwifFwiKStcIikpP1wiKSxabz1cIlthLXpBLVpfXVtcXFxcd1xcXFwtXFxcXC5dKlwiLEdvPVwiKCg/OlwiK1pvK1wiXFxcXDopP1wiK1pvK1wiKVwiLFlvPW5ldyBSZWdFeHAoXCJePFwiK0dvKSxRbz0vXlxccyooXFwvPyk+LyxYbz1uZXcgUmVnRXhwKFwiXjxcXFxcL1wiK0dvK1wiW14+XSo+XCIpLGVhPS9ePCFET0NUWVBFIFtePl0rPi9pLHRhPS9ePCEtLS8sbmE9L148IVxcWy8scmE9ITE7XCJ4XCIucmVwbGFjZSgveCguKT8vZyxmdW5jdGlvbihlLHQpe3JhPVwiXCI9PT10fSk7dmFyIGlhLG9hLGFhLHNhLGNhLGxhLHVhLGZhLGRhLHBhLHZhLGhhLG1hLGdhLHlhLF9hLGJhLCRhLHdhLHhhLENhLGthLEFhLE9hLFNhPW4oXCJzY3JpcHQsc3R5bGVcIiwhMCksVGE9ZnVuY3Rpb24oZSl7cmV0dXJuXCJsYW5nXCI9PT1lLm5hbWUmJlwiaHRtbFwiIT09ZS52YWx1ZX0samE9ZnVuY3Rpb24oZSx0LG4pe3JldHVybiEhU2EoZSl8fCEhdCYmIShcInRlbXBsYXRlXCI9PT1lJiYxPT09bi5sZW5ndGgmJiFuWzBdLmF0dHJzLnNvbWUoVGEpKX0sRWE9e30sTmE9LyZsdDsvZyxMYT0vJmd0Oy9nLERhPS8mIzEwOy9nLE1hPS8mYW1wOy9nLFBhPS8mcXVvdDsvZyxSYT0vXFx7XFx7KCg/Oi58XFxuKSs/KVxcfVxcfS9nLElhPS9bLS4qKz9eJHt9KCl8W1xcXVxcL1xcXFxdL2csRmE9YShmdW5jdGlvbihlKXt2YXIgdD1lWzBdLnJlcGxhY2UoSWEsXCJcXFxcJCZcIiksbj1lWzFdLnJlcGxhY2UoSWEsXCJcXFxcJCZcIik7cmV0dXJuIG5ldyBSZWdFeHAodCtcIigoPzoufFxcXFxuKSs/KVwiK24sXCJnXCIpfSksQmE9L152LXxeQHxeOi8sVWE9LyguKj8pXFxzKyg/OmlufG9mKVxccysoLiopLyxIYT0vXFwoKFxce1tefV0qXFx9fFteLF0qKSwoW14sXSopKD86LChbXixdKikpP1xcKS8sVmE9L146fF52LWJpbmQ6Lyx6YT0vXkB8XnYtb246LyxKYT0vOiguKikkLyxLYT0vXFwuW14uXSsvZyxxYT1hKG9uKSxXYT0vXnhtbG5zOk5TXFxkKy8sWmE9L15OU1xcZCs6LyxHYT1hKEpuKSxZYT0vXlxccyooW1xcdyRfXSt8XFwoW14pXSo/XFwpKVxccyo9PnxeZnVuY3Rpb25cXHMqXFwoLyxRYT0vXlxccypbQS1aYS16XyRdW1xcdyRdKig/OlxcLltBLVphLXpfJF1bXFx3JF0qfFxcWycuKj8nXXxcXFtcIi4qP1wiXXxcXFtcXGQrXXxcXFtbQS1aYS16XyRdW1xcdyRdKl0pKlxccyokLyxYYT17ZXNjOjI3LHRhYjo5LGVudGVyOjEzLHNwYWNlOjMyLHVwOjM4LGxlZnQ6MzcscmlnaHQ6MzksZG93bjo0MCxkZWxldGU6WzgsNDZdfSxlcz17c3RvcDpcIiRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcIixwcmV2ZW50OlwiJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XCIsc2VsZjpcImlmKCRldmVudC50YXJnZXQgIT09ICRldmVudC5jdXJyZW50VGFyZ2V0KXJldHVybjtcIn0sdHM9L15tb3VzZXxecG9pbnRlcnxeKGNsaWNrfGRibGNsaWNrfGNvbnRleHRtZW51fHdoZWVsKSQvLG5zPXtjdHJsOlwiaWYoISRldmVudC5jdHJsS2V5KXJldHVybjtcIixzaGlmdDpcImlmKCEkZXZlbnQuc2hpZnRLZXkpcmV0dXJuO1wiLGFsdDpcImlmKCEkZXZlbnQuYWx0S2V5KXJldHVybjtcIixtZXRhOlwiaWYoISRldmVudC5tZXRhS2V5KXJldHVybjtcIn0scnM9e2JpbmQ6dHIsY2xvYWs6cH0saXM9KG5ldyBSZWdFeHAoXCJcXFxcYlwiK1wiZG8saWYsZm9yLGxldCxuZXcsdHJ5LHZhcixjYXNlLGVsc2Usd2l0aCxhd2FpdCxicmVhayxjYXRjaCxjbGFzcyxjb25zdCxzdXBlcix0aHJvdyx3aGlsZSx5aWVsZCxkZWxldGUsZXhwb3J0LGltcG9ydCxyZXR1cm4sc3dpdGNoLGRlZmF1bHQsZXh0ZW5kcyxmaW5hbGx5LGNvbnRpbnVlLGRlYnVnZ2VyLGZ1bmN0aW9uLGFyZ3VtZW50c1wiLnNwbGl0KFwiLFwiKS5qb2luKFwiXFxcXGJ8XFxcXGJcIikrXCJcXFxcYlwiKSx7c3RhdGljS2V5czpbXCJzdGF0aWNDbGFzc1wiXSx0cmFuc2Zvcm1Ob2RlOndyLGdlbkRhdGE6eHJ9KSxvcz17c3RhdGljS2V5czpbXCJzdGF0aWNTdHlsZVwiXSx0cmFuc2Zvcm1Ob2RlOkNyLGdlbkRhdGE6a3J9LGFzPVtpcyxvc10sc3M9e21vZGVsOkFyLHRleHQ6TnIsaHRtbDpMcn0sY3M9T2JqZWN0LmNyZWF0ZShudWxsKSxscz17ZXhwZWN0SFRNTDohMCxtb2R1bGVzOmFzLHN0YXRpY0tleXM6dihhcyksZGlyZWN0aXZlczpzcyxpc1Jlc2VydmVkVGFnOnRvLGlzVW5hcnlUYWc6R2ksbXVzdFVzZVByb3A6VWksZ2V0VGFnTmFtZXNwYWNlOlplLGlzUHJlVGFnOmVvfSx1cz1hKGZ1bmN0aW9uKGUpe3ZhciB0PVllKGUpO3JldHVybiB0JiZ0LmlubmVySFRNTH0pLGZzPVJlLnByb3RvdHlwZS4kbW91bnQ7cmV0dXJuIFJlLnByb3RvdHlwZS4kbW91bnQ9ZnVuY3Rpb24oZSx0KXtpZihlPWUmJlllKGUpLGU9PT1kb2N1bWVudC5ib2R5fHxlPT09ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KXJldHVybiB0aGlzO3ZhciBuPXRoaXMuJG9wdGlvbnM7aWYoIW4ucmVuZGVyKXt2YXIgcj1uLnRlbXBsYXRlO2lmKHIpaWYoXCJzdHJpbmdcIj09dHlwZW9mIHIpXCIjXCI9PT1yLmNoYXJBdCgwKSYmKHI9dXMocikpO2Vsc2V7aWYoIXIubm9kZVR5cGUpcmV0dXJuIHRoaXM7cj1yLmlubmVySFRNTH1lbHNlIGUmJihyPVJyKGUpKTtpZihyKXt2YXIgaT1NcihyLHt3YXJuOnVpLHNob3VsZERlY29kZU5ld2xpbmVzOnpvLGRlbGltaXRlcnM6bi5kZWxpbWl0ZXJzfSx0aGlzKSxvPWkucmVuZGVyLGE9aS5zdGF0aWNSZW5kZXJGbnM7bi5yZW5kZXI9byxuLnN0YXRpY1JlbmRlckZucz1hfX1yZXR1cm4gZnMuY2FsbCh0aGlzLGUsdCl9LFJlLmNvbXBpbGU9TXIsUmV9KTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9FOi9UZXN0V29yay92dWUvfi92dWUvZGlzdC92dWUubWluLmpzIiwiLyoqXG4gKiB2dWUtcm91dGVyIHYyLjAuM1xuICogKGMpIDIwMTYgRXZhbiBZb3VcbiAqIEBsaWNlbnNlIE1JVFxuICovXG4oZnVuY3Rpb24gKGdsb2JhbCwgZmFjdG9yeSkge1xuICB0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgPyBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKSA6XG4gIHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCA/IGRlZmluZShmYWN0b3J5KSA6XG4gIChnbG9iYWwuVnVlUm91dGVyID0gZmFjdG9yeSgpKTtcbn0odGhpcywgKGZ1bmN0aW9uICgpIHsgJ3VzZSBzdHJpY3QnO1xuXG52YXIgVmlldyA9IHtcbiAgbmFtZTogJ3JvdXRlci12aWV3JyxcbiAgZnVuY3Rpb25hbDogdHJ1ZSxcbiAgcHJvcHM6IHtcbiAgICBuYW1lOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiAnZGVmYXVsdCdcbiAgICB9XG4gIH0sXG4gIHJlbmRlcjogZnVuY3Rpb24gcmVuZGVyIChoLCByZWYpIHtcbiAgICB2YXIgcHJvcHMgPSByZWYucHJvcHM7XG4gICAgdmFyIGNoaWxkcmVuID0gcmVmLmNoaWxkcmVuO1xuICAgIHZhciBwYXJlbnQgPSByZWYucGFyZW50O1xuICAgIHZhciBkYXRhID0gcmVmLmRhdGE7XG5cbiAgICBkYXRhLnJvdXRlclZpZXcgPSB0cnVlXG5cbiAgICB2YXIgcm91dGUgPSBwYXJlbnQuJHJvdXRlXG4gICAgdmFyIGNhY2hlID0gcGFyZW50Ll9yb3V0ZXJWaWV3Q2FjaGUgfHwgKHBhcmVudC5fcm91dGVyVmlld0NhY2hlID0ge30pXG4gICAgdmFyIGRlcHRoID0gMFxuICAgIHZhciBpbmFjdGl2ZSA9IGZhbHNlXG5cbiAgICB3aGlsZSAocGFyZW50KSB7XG4gICAgICBpZiAocGFyZW50LiR2bm9kZSAmJiBwYXJlbnQuJHZub2RlLmRhdGEucm91dGVyVmlldykge1xuICAgICAgICBkZXB0aCsrXG4gICAgICB9XG4gICAgICBpZiAocGFyZW50Ll9pbmFjdGl2ZSkge1xuICAgICAgICBpbmFjdGl2ZSA9IHRydWVcbiAgICAgIH1cbiAgICAgIHBhcmVudCA9IHBhcmVudC4kcGFyZW50XG4gICAgfVxuXG4gICAgZGF0YS5yb3V0ZXJWaWV3RGVwdGggPSBkZXB0aFxuICAgIHZhciBtYXRjaGVkID0gcm91dGUubWF0Y2hlZFtkZXB0aF1cbiAgICBpZiAoIW1hdGNoZWQpIHtcbiAgICAgIHJldHVybiBoKClcbiAgICB9XG5cbiAgICB2YXIgbmFtZSA9IHByb3BzLm5hbWVcbiAgICB2YXIgY29tcG9uZW50ID0gaW5hY3RpdmVcbiAgICAgID8gY2FjaGVbbmFtZV1cbiAgICAgIDogKGNhY2hlW25hbWVdID0gbWF0Y2hlZC5jb21wb25lbnRzW25hbWVdKVxuXG4gICAgaWYgKCFpbmFjdGl2ZSkge1xuICAgICAgdmFyIGhvb2tzID0gZGF0YS5ob29rIHx8IChkYXRhLmhvb2sgPSB7fSlcbiAgICAgIGhvb2tzLmluaXQgPSBmdW5jdGlvbiAodm5vZGUpIHtcbiAgICAgICAgbWF0Y2hlZC5pbnN0YW5jZXNbbmFtZV0gPSB2bm9kZS5jaGlsZFxuICAgICAgfVxuICAgICAgaG9va3MucHJlcGF0Y2ggPSBmdW5jdGlvbiAob2xkVm5vZGUsIHZub2RlKSB7XG4gICAgICAgIG1hdGNoZWQuaW5zdGFuY2VzW25hbWVdID0gdm5vZGUuY2hpbGRcbiAgICAgIH1cbiAgICAgIGhvb2tzLmRlc3Ryb3kgPSBmdW5jdGlvbiAodm5vZGUpIHtcbiAgICAgICAgaWYgKG1hdGNoZWQuaW5zdGFuY2VzW25hbWVdID09PSB2bm9kZS5jaGlsZCkge1xuICAgICAgICAgIG1hdGNoZWQuaW5zdGFuY2VzW25hbWVdID0gdW5kZWZpbmVkXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gaChjb21wb25lbnQsIGRhdGEsIGNoaWxkcmVuKVxuICB9XG59XG5cbi8qICAqL1xuXG5mdW5jdGlvbiByZXNvbHZlUGF0aCAoXG4gIHJlbGF0aXZlLFxuICBiYXNlLFxuICBhcHBlbmRcbikge1xuICBpZiAocmVsYXRpdmUuY2hhckF0KDApID09PSAnLycpIHtcbiAgICByZXR1cm4gcmVsYXRpdmVcbiAgfVxuXG4gIGlmIChyZWxhdGl2ZS5jaGFyQXQoMCkgPT09ICc/JyB8fCByZWxhdGl2ZS5jaGFyQXQoMCkgPT09ICcjJykge1xuICAgIHJldHVybiBiYXNlICsgcmVsYXRpdmVcbiAgfVxuXG4gIHZhciBzdGFjayA9IGJhc2Uuc3BsaXQoJy8nKVxuXG4gIC8vIHJlbW92ZSB0cmFpbGluZyBzZWdtZW50IGlmOlxuICAvLyAtIG5vdCBhcHBlbmRpbmdcbiAgLy8gLSBhcHBlbmRpbmcgdG8gdHJhaWxpbmcgc2xhc2ggKGxhc3Qgc2VnbWVudCBpcyBlbXB0eSlcbiAgaWYgKCFhcHBlbmQgfHwgIXN0YWNrW3N0YWNrLmxlbmd0aCAtIDFdKSB7XG4gICAgc3RhY2sucG9wKClcbiAgfVxuXG4gIC8vIHJlc29sdmUgcmVsYXRpdmUgcGF0aFxuICB2YXIgc2VnbWVudHMgPSByZWxhdGl2ZS5yZXBsYWNlKC9eXFwvLywgJycpLnNwbGl0KCcvJylcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzZWdtZW50cy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBzZWdtZW50ID0gc2VnbWVudHNbaV1cbiAgICBpZiAoc2VnbWVudCA9PT0gJy4nKSB7XG4gICAgICBjb250aW51ZVxuICAgIH0gZWxzZSBpZiAoc2VnbWVudCA9PT0gJy4uJykge1xuICAgICAgc3RhY2sucG9wKClcbiAgICB9IGVsc2Uge1xuICAgICAgc3RhY2sucHVzaChzZWdtZW50KVxuICAgIH1cbiAgfVxuXG4gIC8vIGVuc3VyZSBsZWFkaW5nIHNsYXNoXG4gIGlmIChzdGFja1swXSAhPT0gJycpIHtcbiAgICBzdGFjay51bnNoaWZ0KCcnKVxuICB9XG5cbiAgcmV0dXJuIHN0YWNrLmpvaW4oJy8nKVxufVxuXG5mdW5jdGlvbiBwYXJzZVBhdGggKHBhdGgpIHtcbiAgdmFyIGhhc2ggPSAnJ1xuICB2YXIgcXVlcnkgPSAnJ1xuXG4gIHZhciBoYXNoSW5kZXggPSBwYXRoLmluZGV4T2YoJyMnKVxuICBpZiAoaGFzaEluZGV4ID49IDApIHtcbiAgICBoYXNoID0gcGF0aC5zbGljZShoYXNoSW5kZXgpXG4gICAgcGF0aCA9IHBhdGguc2xpY2UoMCwgaGFzaEluZGV4KVxuICB9XG5cbiAgdmFyIHF1ZXJ5SW5kZXggPSBwYXRoLmluZGV4T2YoJz8nKVxuICBpZiAocXVlcnlJbmRleCA+PSAwKSB7XG4gICAgcXVlcnkgPSBwYXRoLnNsaWNlKHF1ZXJ5SW5kZXggKyAxKVxuICAgIHBhdGggPSBwYXRoLnNsaWNlKDAsIHF1ZXJ5SW5kZXgpXG4gIH1cblxuICByZXR1cm4ge1xuICAgIHBhdGg6IHBhdGgsXG4gICAgcXVlcnk6IHF1ZXJ5LFxuICAgIGhhc2g6IGhhc2hcbiAgfVxufVxuXG5mdW5jdGlvbiBjbGVhblBhdGggKHBhdGgpIHtcbiAgcmV0dXJuIHBhdGgucmVwbGFjZSgvXFwvXFwvL2csICcvJylcbn1cblxuLyogICovXG5cbmZ1bmN0aW9uIGFzc2VydCAoY29uZGl0aW9uLCBtZXNzYWdlKSB7XG4gIGlmICghY29uZGl0aW9uKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKChcIlt2dWUtcm91dGVyXSBcIiArIG1lc3NhZ2UpKVxuICB9XG59XG5cbmZ1bmN0aW9uIHdhcm4gKGNvbmRpdGlvbiwgbWVzc2FnZSkge1xuICBpZiAoIWNvbmRpdGlvbikge1xuICAgIHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJyAmJiBjb25zb2xlLndhcm4oKFwiW3Z1ZS1yb3V0ZXJdIFwiICsgbWVzc2FnZSkpXG4gIH1cbn1cblxuLyogICovXG5cbnZhciBlbmNvZGUgPSBlbmNvZGVVUklDb21wb25lbnRcbnZhciBkZWNvZGUgPSBkZWNvZGVVUklDb21wb25lbnRcblxuZnVuY3Rpb24gcmVzb2x2ZVF1ZXJ5IChcbiAgcXVlcnksXG4gIGV4dHJhUXVlcnlcbikge1xuICBpZiAoIGV4dHJhUXVlcnkgPT09IHZvaWQgMCApIGV4dHJhUXVlcnkgPSB7fTtcblxuICBpZiAocXVlcnkpIHtcbiAgICB2YXIgcGFyc2VkUXVlcnlcbiAgICB0cnkge1xuICAgICAgcGFyc2VkUXVlcnkgPSBwYXJzZVF1ZXJ5KHF1ZXJ5KVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHdhcm4oZmFsc2UsIGUubWVzc2FnZSlcbiAgICAgIHBhcnNlZFF1ZXJ5ID0ge31cbiAgICB9XG4gICAgZm9yICh2YXIga2V5IGluIGV4dHJhUXVlcnkpIHtcbiAgICAgIHBhcnNlZFF1ZXJ5W2tleV0gPSBleHRyYVF1ZXJ5W2tleV1cbiAgICB9XG4gICAgcmV0dXJuIHBhcnNlZFF1ZXJ5XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGV4dHJhUXVlcnlcbiAgfVxufVxuXG5mdW5jdGlvbiBwYXJzZVF1ZXJ5IChxdWVyeSkge1xuICB2YXIgcmVzID0ge31cblxuICBxdWVyeSA9IHF1ZXJ5LnRyaW0oKS5yZXBsYWNlKC9eKFxcP3wjfCYpLywgJycpXG5cbiAgaWYgKCFxdWVyeSkge1xuICAgIHJldHVybiByZXNcbiAgfVxuXG4gIHF1ZXJ5LnNwbGl0KCcmJykuZm9yRWFjaChmdW5jdGlvbiAocGFyYW0pIHtcbiAgICB2YXIgcGFydHMgPSBwYXJhbS5yZXBsYWNlKC9cXCsvZywgJyAnKS5zcGxpdCgnPScpXG4gICAgdmFyIGtleSA9IGRlY29kZShwYXJ0cy5zaGlmdCgpKVxuICAgIHZhciB2YWwgPSBwYXJ0cy5sZW5ndGggPiAwXG4gICAgICA/IGRlY29kZShwYXJ0cy5qb2luKCc9JykpXG4gICAgICA6IG51bGxcblxuICAgIGlmIChyZXNba2V5XSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXNba2V5XSA9IHZhbFxuICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShyZXNba2V5XSkpIHtcbiAgICAgIHJlc1trZXldLnB1c2godmFsKVxuICAgIH0gZWxzZSB7XG4gICAgICByZXNba2V5XSA9IFtyZXNba2V5XSwgdmFsXVxuICAgIH1cbiAgfSlcblxuICByZXR1cm4gcmVzXG59XG5cbmZ1bmN0aW9uIHN0cmluZ2lmeVF1ZXJ5IChvYmopIHtcbiAgdmFyIHJlcyA9IG9iaiA/IE9iamVjdC5rZXlzKG9iaikuc29ydCgpLm1hcChmdW5jdGlvbiAoa2V5KSB7XG4gICAgdmFyIHZhbCA9IG9ialtrZXldXG5cbiAgICBpZiAodmFsID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiAnJ1xuICAgIH1cblxuICAgIGlmICh2YWwgPT09IG51bGwpIHtcbiAgICAgIHJldHVybiBlbmNvZGUoa2V5KVxuICAgIH1cblxuICAgIGlmIChBcnJheS5pc0FycmF5KHZhbCkpIHtcbiAgICAgIHZhciByZXN1bHQgPSBbXVxuICAgICAgdmFsLnNsaWNlKCkuZm9yRWFjaChmdW5jdGlvbiAodmFsMikge1xuICAgICAgICBpZiAodmFsMiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgaWYgKHZhbDIgPT09IG51bGwpIHtcbiAgICAgICAgICByZXN1bHQucHVzaChlbmNvZGUoa2V5KSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXN1bHQucHVzaChlbmNvZGUoa2V5KSArICc9JyArIGVuY29kZSh2YWwyKSlcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIHJldHVybiByZXN1bHQuam9pbignJicpXG4gICAgfVxuXG4gICAgcmV0dXJuIGVuY29kZShrZXkpICsgJz0nICsgZW5jb2RlKHZhbClcbiAgfSkuZmlsdGVyKGZ1bmN0aW9uICh4KSB7IHJldHVybiB4Lmxlbmd0aCA+IDA7IH0pLmpvaW4oJyYnKSA6IG51bGxcbiAgcmV0dXJuIHJlcyA/IChcIj9cIiArIHJlcykgOiAnJ1xufVxuXG4vKiAgKi9cblxuZnVuY3Rpb24gY3JlYXRlUm91dGUgKFxuICByZWNvcmQsXG4gIGxvY2F0aW9uLFxuICByZWRpcmVjdGVkRnJvbVxuKSB7XG4gIHZhciByb3V0ZSA9IHtcbiAgICBuYW1lOiBsb2NhdGlvbi5uYW1lIHx8IChyZWNvcmQgJiYgcmVjb3JkLm5hbWUpLFxuICAgIG1ldGE6IChyZWNvcmQgJiYgcmVjb3JkLm1ldGEpIHx8IHt9LFxuICAgIHBhdGg6IGxvY2F0aW9uLnBhdGggfHwgJy8nLFxuICAgIGhhc2g6IGxvY2F0aW9uLmhhc2ggfHwgJycsXG4gICAgcXVlcnk6IGxvY2F0aW9uLnF1ZXJ5IHx8IHt9LFxuICAgIHBhcmFtczogbG9jYXRpb24ucGFyYW1zIHx8IHt9LFxuICAgIGZ1bGxQYXRoOiBnZXRGdWxsUGF0aChsb2NhdGlvbiksXG4gICAgbWF0Y2hlZDogcmVjb3JkID8gZm9ybWF0TWF0Y2gocmVjb3JkKSA6IFtdXG4gIH1cbiAgaWYgKHJlZGlyZWN0ZWRGcm9tKSB7XG4gICAgcm91dGUucmVkaXJlY3RlZEZyb20gPSBnZXRGdWxsUGF0aChyZWRpcmVjdGVkRnJvbSlcbiAgfVxuICByZXR1cm4gT2JqZWN0LmZyZWV6ZShyb3V0ZSlcbn1cblxuLy8gdGhlIHN0YXJ0aW5nIHJvdXRlIHRoYXQgcmVwcmVzZW50cyB0aGUgaW5pdGlhbCBzdGF0ZVxudmFyIFNUQVJUID0gY3JlYXRlUm91dGUobnVsbCwge1xuICBwYXRoOiAnLydcbn0pXG5cbmZ1bmN0aW9uIGZvcm1hdE1hdGNoIChyZWNvcmQpIHtcbiAgdmFyIHJlcyA9IFtdXG4gIHdoaWxlIChyZWNvcmQpIHtcbiAgICByZXMudW5zaGlmdChyZWNvcmQpXG4gICAgcmVjb3JkID0gcmVjb3JkLnBhcmVudFxuICB9XG4gIHJldHVybiByZXNcbn1cblxuZnVuY3Rpb24gZ2V0RnVsbFBhdGggKHJlZikge1xuICB2YXIgcGF0aCA9IHJlZi5wYXRoO1xuICB2YXIgcXVlcnkgPSByZWYucXVlcnk7IGlmICggcXVlcnkgPT09IHZvaWQgMCApIHF1ZXJ5ID0ge307XG4gIHZhciBoYXNoID0gcmVmLmhhc2g7IGlmICggaGFzaCA9PT0gdm9pZCAwICkgaGFzaCA9ICcnO1xuXG4gIHJldHVybiAocGF0aCB8fCAnLycpICsgc3RyaW5naWZ5UXVlcnkocXVlcnkpICsgaGFzaFxufVxuXG52YXIgdHJhaWxpbmdTbGFzaFJFID0gL1xcLyQvXG5mdW5jdGlvbiBpc1NhbWVSb3V0ZSAoYSwgYikge1xuICBpZiAoYiA9PT0gU1RBUlQpIHtcbiAgICByZXR1cm4gYSA9PT0gYlxuICB9IGVsc2UgaWYgKCFiKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH0gZWxzZSBpZiAoYS5wYXRoICYmIGIucGF0aCkge1xuICAgIHJldHVybiAoXG4gICAgICBhLnBhdGgucmVwbGFjZSh0cmFpbGluZ1NsYXNoUkUsICcnKSA9PT0gYi5wYXRoLnJlcGxhY2UodHJhaWxpbmdTbGFzaFJFLCAnJykgJiZcbiAgICAgIGEuaGFzaCA9PT0gYi5oYXNoICYmXG4gICAgICBpc09iamVjdEVxdWFsKGEucXVlcnksIGIucXVlcnkpXG4gICAgKVxuICB9IGVsc2UgaWYgKGEubmFtZSAmJiBiLm5hbWUpIHtcbiAgICByZXR1cm4gKFxuICAgICAgYS5uYW1lID09PSBiLm5hbWUgJiZcbiAgICAgIGEuaGFzaCA9PT0gYi5oYXNoICYmXG4gICAgICBpc09iamVjdEVxdWFsKGEucXVlcnksIGIucXVlcnkpICYmXG4gICAgICBpc09iamVjdEVxdWFsKGEucGFyYW1zLCBiLnBhcmFtcylcbiAgICApXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cbn1cblxuZnVuY3Rpb24gaXNPYmplY3RFcXVhbCAoYSwgYikge1xuICBpZiAoIGEgPT09IHZvaWQgMCApIGEgPSB7fTtcbiAgaWYgKCBiID09PSB2b2lkIDAgKSBiID0ge307XG5cbiAgdmFyIGFLZXlzID0gT2JqZWN0LmtleXMoYSlcbiAgdmFyIGJLZXlzID0gT2JqZWN0LmtleXMoYilcbiAgaWYgKGFLZXlzLmxlbmd0aCAhPT0gYktleXMubGVuZ3RoKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cbiAgcmV0dXJuIGFLZXlzLmV2ZXJ5KGZ1bmN0aW9uIChrZXkpIHsgcmV0dXJuIFN0cmluZyhhW2tleV0pID09PSBTdHJpbmcoYltrZXldKTsgfSlcbn1cblxuZnVuY3Rpb24gaXNJbmNsdWRlZFJvdXRlIChjdXJyZW50LCB0YXJnZXQpIHtcbiAgcmV0dXJuIChcbiAgICBjdXJyZW50LnBhdGguaW5kZXhPZih0YXJnZXQucGF0aC5yZXBsYWNlKC9cXC8kLywgJycpKSA9PT0gMCAmJlxuICAgICghdGFyZ2V0Lmhhc2ggfHwgY3VycmVudC5oYXNoID09PSB0YXJnZXQuaGFzaCkgJiZcbiAgICBxdWVyeUluY2x1ZGVzKGN1cnJlbnQucXVlcnksIHRhcmdldC5xdWVyeSlcbiAgKVxufVxuXG5mdW5jdGlvbiBxdWVyeUluY2x1ZGVzIChjdXJyZW50LCB0YXJnZXQpIHtcbiAgZm9yICh2YXIga2V5IGluIHRhcmdldCkge1xuICAgIGlmICghKGtleSBpbiBjdXJyZW50KSkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuICB9XG4gIHJldHVybiB0cnVlXG59XG5cbi8qICAqL1xuXG5mdW5jdGlvbiBub3JtYWxpemVMb2NhdGlvbiAoXG4gIHJhdyxcbiAgY3VycmVudCxcbiAgYXBwZW5kXG4pIHtcbiAgdmFyIG5leHQgPSB0eXBlb2YgcmF3ID09PSAnc3RyaW5nJyA/IHsgcGF0aDogcmF3IH0gOiByYXdcbiAgaWYgKG5leHQubmFtZSB8fCBuZXh0Ll9ub3JtYWxpemVkKSB7XG4gICAgcmV0dXJuIG5leHRcbiAgfVxuXG4gIHZhciBwYXJzZWRQYXRoID0gcGFyc2VQYXRoKG5leHQucGF0aCB8fCAnJylcbiAgdmFyIGJhc2VQYXRoID0gKGN1cnJlbnQgJiYgY3VycmVudC5wYXRoKSB8fCAnLydcbiAgdmFyIHBhdGggPSBwYXJzZWRQYXRoLnBhdGhcbiAgICA/IHJlc29sdmVQYXRoKHBhcnNlZFBhdGgucGF0aCwgYmFzZVBhdGgsIGFwcGVuZClcbiAgICA6IChjdXJyZW50ICYmIGN1cnJlbnQucGF0aCkgfHwgJy8nXG4gIHZhciBxdWVyeSA9IHJlc29sdmVRdWVyeShwYXJzZWRQYXRoLnF1ZXJ5LCBuZXh0LnF1ZXJ5KVxuICB2YXIgaGFzaCA9IG5leHQuaGFzaCB8fCBwYXJzZWRQYXRoLmhhc2hcbiAgaWYgKGhhc2ggJiYgaGFzaC5jaGFyQXQoMCkgIT09ICcjJykge1xuICAgIGhhc2ggPSBcIiNcIiArIGhhc2hcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgX25vcm1hbGl6ZWQ6IHRydWUsXG4gICAgcGF0aDogcGF0aCxcbiAgICBxdWVyeTogcXVlcnksXG4gICAgaGFzaDogaGFzaFxuICB9XG59XG5cbi8qICAqL1xuXG4vLyB3b3JrIGFyb3VuZCB3ZWlyZCBmbG93IGJ1Z1xudmFyIHRvVHlwZXMgPSBbU3RyaW5nLCBPYmplY3RdXG5cbnZhciBMaW5rID0ge1xuICBuYW1lOiAncm91dGVyLWxpbmsnLFxuICBwcm9wczoge1xuICAgIHRvOiB7XG4gICAgICB0eXBlOiB0b1R5cGVzLFxuICAgICAgcmVxdWlyZWQ6IHRydWVcbiAgICB9LFxuICAgIHRhZzoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdDogJ2EnXG4gICAgfSxcbiAgICBleGFjdDogQm9vbGVhbixcbiAgICBhcHBlbmQ6IEJvb2xlYW4sXG4gICAgcmVwbGFjZTogQm9vbGVhbixcbiAgICBhY3RpdmVDbGFzczogU3RyaW5nXG4gIH0sXG4gIHJlbmRlcjogZnVuY3Rpb24gcmVuZGVyIChoKSB7XG4gICAgdmFyIHRoaXMkMSA9IHRoaXM7XG5cbiAgICB2YXIgcm91dGVyID0gdGhpcy4kcm91dGVyXG4gICAgdmFyIGN1cnJlbnQgPSB0aGlzLiRyb3V0ZVxuICAgIHZhciB0byA9IG5vcm1hbGl6ZUxvY2F0aW9uKHRoaXMudG8sIGN1cnJlbnQsIHRoaXMuYXBwZW5kKVxuICAgIHZhciByZXNvbHZlZCA9IHJvdXRlci5tYXRjaCh0bywgY3VycmVudClcbiAgICB2YXIgZnVsbFBhdGggPSByZXNvbHZlZC5yZWRpcmVjdGVkRnJvbSB8fCByZXNvbHZlZC5mdWxsUGF0aFxuICAgIHZhciBiYXNlID0gcm91dGVyLmhpc3RvcnkuYmFzZVxuICAgIHZhciBocmVmID0gY3JlYXRlSHJlZihiYXNlLCBmdWxsUGF0aCwgcm91dGVyLm1vZGUpXG4gICAgdmFyIGNsYXNzZXMgPSB7fVxuICAgIHZhciBhY3RpdmVDbGFzcyA9IHRoaXMuYWN0aXZlQ2xhc3MgfHwgcm91dGVyLm9wdGlvbnMubGlua0FjdGl2ZUNsYXNzIHx8ICdyb3V0ZXItbGluay1hY3RpdmUnXG4gICAgdmFyIGNvbXBhcmVUYXJnZXQgPSB0by5wYXRoID8gY3JlYXRlUm91dGUobnVsbCwgdG8pIDogcmVzb2x2ZWRcbiAgICBjbGFzc2VzW2FjdGl2ZUNsYXNzXSA9IHRoaXMuZXhhY3RcbiAgICAgID8gaXNTYW1lUm91dGUoY3VycmVudCwgY29tcGFyZVRhcmdldClcbiAgICAgIDogaXNJbmNsdWRlZFJvdXRlKGN1cnJlbnQsIGNvbXBhcmVUYXJnZXQpXG5cbiAgICB2YXIgb24gPSB7XG4gICAgICBjbGljazogZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgLy8gZG9uJ3QgcmVkaXJlY3Qgd2l0aCBjb250cm9sIGtleXNcbiAgICAgICAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gICAgICAgIGlmIChlLm1ldGFLZXkgfHwgZS5jdHJsS2V5IHx8IGUuc2hpZnRLZXkpIHsgcmV0dXJuIH1cbiAgICAgICAgLy8gZG9uJ3QgcmVkaXJlY3Qgd2hlbiBwcmV2ZW50RGVmYXVsdCBjYWxsZWRcbiAgICAgICAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gICAgICAgIGlmIChlLmRlZmF1bHRQcmV2ZW50ZWQpIHsgcmV0dXJuIH1cbiAgICAgICAgLy8gZG9uJ3QgcmVkaXJlY3Qgb24gcmlnaHQgY2xpY2tcbiAgICAgICAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gICAgICAgIGlmIChlLmJ1dHRvbiAhPT0gMCkgeyByZXR1cm4gfVxuICAgICAgICAvLyBkb24ndCByZWRpcmVjdCBpZiBgdGFyZ2V0PVwiX2JsYW5rXCJgXG4gICAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICAgICAgICB2YXIgdGFyZ2V0ID0gZS50YXJnZXQuZ2V0QXR0cmlidXRlKCd0YXJnZXQnKVxuICAgICAgICBpZiAoL1xcYl9ibGFua1xcYi9pLnRlc3QodGFyZ2V0KSkgeyByZXR1cm4gfVxuXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICBpZiAodGhpcyQxLnJlcGxhY2UpIHtcbiAgICAgICAgICByb3V0ZXIucmVwbGFjZSh0bylcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByb3V0ZXIucHVzaCh0bylcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBkYXRhID0ge1xuICAgICAgY2xhc3M6IGNsYXNzZXNcbiAgICB9XG5cbiAgICBpZiAodGhpcy50YWcgPT09ICdhJykge1xuICAgICAgZGF0YS5vbiA9IG9uXG4gICAgICBkYXRhLmF0dHJzID0geyBocmVmOiBocmVmIH1cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gZmluZCB0aGUgZmlyc3QgPGE+IGNoaWxkIGFuZCBhcHBseSBsaXN0ZW5lciBhbmQgaHJlZlxuICAgICAgdmFyIGEgPSBmaW5kQW5jaG9yKHRoaXMuJHNsb3RzLmRlZmF1bHQpXG4gICAgICBpZiAoYSkge1xuICAgICAgICAvLyBpbiBjYXNlIHRoZSA8YT4gaXMgYSBzdGF0aWMgbm9kZVxuICAgICAgICBhLmlzU3RhdGljID0gZmFsc2VcbiAgICAgICAgdmFyIGV4dGVuZCA9IF9WdWUudXRpbC5leHRlbmRcbiAgICAgICAgdmFyIGFEYXRhID0gYS5kYXRhID0gZXh0ZW5kKHt9LCBhLmRhdGEpXG4gICAgICAgIGFEYXRhLm9uID0gb25cbiAgICAgICAgdmFyIGFBdHRycyA9IGEuZGF0YS5hdHRycyA9IGV4dGVuZCh7fSwgYS5kYXRhLmF0dHJzKVxuICAgICAgICBhQXR0cnMuaHJlZiA9IGhyZWZcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIGRvZXNuJ3QgaGF2ZSA8YT4gY2hpbGQsIGFwcGx5IGxpc3RlbmVyIHRvIHNlbGZcbiAgICAgICAgZGF0YS5vbiA9IG9uXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGgodGhpcy50YWcsIGRhdGEsIHRoaXMuJHNsb3RzLmRlZmF1bHQpXG4gIH1cbn1cblxuZnVuY3Rpb24gZmluZEFuY2hvciAoY2hpbGRyZW4pIHtcbiAgaWYgKGNoaWxkcmVuKSB7XG4gICAgdmFyIGNoaWxkXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgY2hpbGQgPSBjaGlsZHJlbltpXVxuICAgICAgaWYgKGNoaWxkLnRhZyA9PT0gJ2EnKSB7XG4gICAgICAgIHJldHVybiBjaGlsZFxuICAgICAgfVxuICAgICAgaWYgKGNoaWxkLmNoaWxkcmVuICYmIChjaGlsZCA9IGZpbmRBbmNob3IoY2hpbGQuY2hpbGRyZW4pKSkge1xuICAgICAgICByZXR1cm4gY2hpbGRcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlSHJlZiAoYmFzZSwgZnVsbFBhdGgsIG1vZGUpIHtcbiAgdmFyIHBhdGggPSBtb2RlID09PSAnaGFzaCcgPyAnLyMnICsgZnVsbFBhdGggOiBmdWxsUGF0aFxuICByZXR1cm4gYmFzZSA/IGNsZWFuUGF0aChiYXNlICsgcGF0aCkgOiBwYXRoXG59XG5cbnZhciBfVnVlXG5cbmZ1bmN0aW9uIGluc3RhbGwgKFZ1ZSkge1xuICBpZiAoaW5zdGFsbC5pbnN0YWxsZWQpIHsgcmV0dXJuIH1cbiAgaW5zdGFsbC5pbnN0YWxsZWQgPSB0cnVlXG5cbiAgX1Z1ZSA9IFZ1ZVxuXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShWdWUucHJvdG90eXBlLCAnJHJvdXRlcicsIHtcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCAoKSB7IHJldHVybiB0aGlzLiRyb290Ll9yb3V0ZXIgfVxuICB9KVxuXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShWdWUucHJvdG90eXBlLCAnJHJvdXRlJywge1xuICAgIGdldDogZnVuY3Rpb24gZ2V0JDEgKCkgeyByZXR1cm4gdGhpcy4kcm9vdC5fcm91dGUgfVxuICB9KVxuXG4gIFZ1ZS5taXhpbih7XG4gICAgYmVmb3JlQ3JlYXRlOiBmdW5jdGlvbiBiZWZvcmVDcmVhdGUgKCkge1xuICAgICAgaWYgKHRoaXMuJG9wdGlvbnMucm91dGVyKSB7XG4gICAgICAgIHRoaXMuX3JvdXRlciA9IHRoaXMuJG9wdGlvbnMucm91dGVyXG4gICAgICAgIHRoaXMuX3JvdXRlci5pbml0KHRoaXMpXG4gICAgICAgIFZ1ZS51dGlsLmRlZmluZVJlYWN0aXZlKHRoaXMsICdfcm91dGUnLCB0aGlzLl9yb3V0ZXIuaGlzdG9yeS5jdXJyZW50KVxuICAgICAgfVxuICAgIH1cbiAgfSlcblxuICBWdWUuY29tcG9uZW50KCdyb3V0ZXItdmlldycsIFZpZXcpXG4gIFZ1ZS5jb21wb25lbnQoJ3JvdXRlci1saW5rJywgTGluaylcblxuICB2YXIgc3RyYXRzID0gVnVlLmNvbmZpZy5vcHRpb25NZXJnZVN0cmF0ZWdpZXNcbiAgLy8gdXNlIHRoZSBzYW1lIGhvb2sgbWVyZ2luZyBzdHJhdGVneSBmb3Igcm91dGUgaG9va3NcbiAgc3RyYXRzLmJlZm9yZVJvdXRlRW50ZXIgPSBzdHJhdHMuYmVmb3JlUm91dGVMZWF2ZSA9IHN0cmF0cy5jcmVhdGVkXG59XG5cbnZhciBfX21vZHVsZUV4cG9ydHMgPSBBcnJheS5pc0FycmF5IHx8IGZ1bmN0aW9uIChhcnIpIHtcbiAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChhcnIpID09ICdbb2JqZWN0IEFycmF5XSc7XG59O1xuXG52YXIgaXNhcnJheSA9IF9fbW9kdWxlRXhwb3J0c1xuXG4vKipcbiAqIEV4cG9zZSBgcGF0aFRvUmVnZXhwYC5cbiAqL1xudmFyIGluZGV4ID0gcGF0aFRvUmVnZXhwXG52YXIgcGFyc2VfMSA9IHBhcnNlXG52YXIgY29tcGlsZV8xID0gY29tcGlsZVxudmFyIHRva2Vuc1RvRnVuY3Rpb25fMSA9IHRva2Vuc1RvRnVuY3Rpb25cbnZhciB0b2tlbnNUb1JlZ0V4cF8xID0gdG9rZW5zVG9SZWdFeHBcblxuLyoqXG4gKiBUaGUgbWFpbiBwYXRoIG1hdGNoaW5nIHJlZ2V4cCB1dGlsaXR5LlxuICpcbiAqIEB0eXBlIHtSZWdFeHB9XG4gKi9cbnZhciBQQVRIX1JFR0VYUCA9IG5ldyBSZWdFeHAoW1xuICAvLyBNYXRjaCBlc2NhcGVkIGNoYXJhY3RlcnMgdGhhdCB3b3VsZCBvdGhlcndpc2UgYXBwZWFyIGluIGZ1dHVyZSBtYXRjaGVzLlxuICAvLyBUaGlzIGFsbG93cyB0aGUgdXNlciB0byBlc2NhcGUgc3BlY2lhbCBjaGFyYWN0ZXJzIHRoYXQgd29uJ3QgdHJhbnNmb3JtLlxuICAnKFxcXFxcXFxcLiknLFxuICAvLyBNYXRjaCBFeHByZXNzLXN0eWxlIHBhcmFtZXRlcnMgYW5kIHVuLW5hbWVkIHBhcmFtZXRlcnMgd2l0aCBhIHByZWZpeFxuICAvLyBhbmQgb3B0aW9uYWwgc3VmZml4ZXMuIE1hdGNoZXMgYXBwZWFyIGFzOlxuICAvL1xuICAvLyBcIi86dGVzdChcXFxcZCspP1wiID0+IFtcIi9cIiwgXCJ0ZXN0XCIsIFwiXFxkK1wiLCB1bmRlZmluZWQsIFwiP1wiLCB1bmRlZmluZWRdXG4gIC8vIFwiL3JvdXRlKFxcXFxkKylcIiAgPT4gW3VuZGVmaW5lZCwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIFwiXFxkK1wiLCB1bmRlZmluZWQsIHVuZGVmaW5lZF1cbiAgLy8gXCIvKlwiICAgICAgICAgICAgPT4gW1wiL1wiLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIFwiKlwiXVxuICAnKFtcXFxcLy5dKT8oPzooPzpcXFxcOihcXFxcdyspKD86XFxcXCgoKD86XFxcXFxcXFwufFteXFxcXFxcXFwoKV0pKylcXFxcKSk/fFxcXFwoKCg/OlxcXFxcXFxcLnxbXlxcXFxcXFxcKCldKSspXFxcXCkpKFsrKj9dKT98KFxcXFwqKSknXG5dLmpvaW4oJ3wnKSwgJ2cnKVxuXG4vKipcbiAqIFBhcnNlIGEgc3RyaW5nIGZvciB0aGUgcmF3IHRva2Vucy5cbiAqXG4gKiBAcGFyYW0gIHtzdHJpbmd9ICBzdHJcbiAqIEBwYXJhbSAge09iamVjdD19IG9wdGlvbnNcbiAqIEByZXR1cm4geyFBcnJheX1cbiAqL1xuZnVuY3Rpb24gcGFyc2UgKHN0ciwgb3B0aW9ucykge1xuICB2YXIgdG9rZW5zID0gW11cbiAgdmFyIGtleSA9IDBcbiAgdmFyIGluZGV4ID0gMFxuICB2YXIgcGF0aCA9ICcnXG4gIHZhciBkZWZhdWx0RGVsaW1pdGVyID0gb3B0aW9ucyAmJiBvcHRpb25zLmRlbGltaXRlciB8fCAnLydcbiAgdmFyIHJlc1xuXG4gIHdoaWxlICgocmVzID0gUEFUSF9SRUdFWFAuZXhlYyhzdHIpKSAhPSBudWxsKSB7XG4gICAgdmFyIG0gPSByZXNbMF1cbiAgICB2YXIgZXNjYXBlZCA9IHJlc1sxXVxuICAgIHZhciBvZmZzZXQgPSByZXMuaW5kZXhcbiAgICBwYXRoICs9IHN0ci5zbGljZShpbmRleCwgb2Zmc2V0KVxuICAgIGluZGV4ID0gb2Zmc2V0ICsgbS5sZW5ndGhcblxuICAgIC8vIElnbm9yZSBhbHJlYWR5IGVzY2FwZWQgc2VxdWVuY2VzLlxuICAgIGlmIChlc2NhcGVkKSB7XG4gICAgICBwYXRoICs9IGVzY2FwZWRbMV1cbiAgICAgIGNvbnRpbnVlXG4gICAgfVxuXG4gICAgdmFyIG5leHQgPSBzdHJbaW5kZXhdXG4gICAgdmFyIHByZWZpeCA9IHJlc1syXVxuICAgIHZhciBuYW1lID0gcmVzWzNdXG4gICAgdmFyIGNhcHR1cmUgPSByZXNbNF1cbiAgICB2YXIgZ3JvdXAgPSByZXNbNV1cbiAgICB2YXIgbW9kaWZpZXIgPSByZXNbNl1cbiAgICB2YXIgYXN0ZXJpc2sgPSByZXNbN11cblxuICAgIC8vIFB1c2ggdGhlIGN1cnJlbnQgcGF0aCBvbnRvIHRoZSB0b2tlbnMuXG4gICAgaWYgKHBhdGgpIHtcbiAgICAgIHRva2Vucy5wdXNoKHBhdGgpXG4gICAgICBwYXRoID0gJydcbiAgICB9XG5cbiAgICB2YXIgcGFydGlhbCA9IHByZWZpeCAhPSBudWxsICYmIG5leHQgIT0gbnVsbCAmJiBuZXh0ICE9PSBwcmVmaXhcbiAgICB2YXIgcmVwZWF0ID0gbW9kaWZpZXIgPT09ICcrJyB8fCBtb2RpZmllciA9PT0gJyonXG4gICAgdmFyIG9wdGlvbmFsID0gbW9kaWZpZXIgPT09ICc/JyB8fCBtb2RpZmllciA9PT0gJyonXG4gICAgdmFyIGRlbGltaXRlciA9IHJlc1syXSB8fCBkZWZhdWx0RGVsaW1pdGVyXG4gICAgdmFyIHBhdHRlcm4gPSBjYXB0dXJlIHx8IGdyb3VwXG5cbiAgICB0b2tlbnMucHVzaCh7XG4gICAgICBuYW1lOiBuYW1lIHx8IGtleSsrLFxuICAgICAgcHJlZml4OiBwcmVmaXggfHwgJycsXG4gICAgICBkZWxpbWl0ZXI6IGRlbGltaXRlcixcbiAgICAgIG9wdGlvbmFsOiBvcHRpb25hbCxcbiAgICAgIHJlcGVhdDogcmVwZWF0LFxuICAgICAgcGFydGlhbDogcGFydGlhbCxcbiAgICAgIGFzdGVyaXNrOiAhIWFzdGVyaXNrLFxuICAgICAgcGF0dGVybjogcGF0dGVybiA/IGVzY2FwZUdyb3VwKHBhdHRlcm4pIDogKGFzdGVyaXNrID8gJy4qJyA6ICdbXicgKyBlc2NhcGVTdHJpbmcoZGVsaW1pdGVyKSArICddKz8nKVxuICAgIH0pXG4gIH1cblxuICAvLyBNYXRjaCBhbnkgY2hhcmFjdGVycyBzdGlsbCByZW1haW5pbmcuXG4gIGlmIChpbmRleCA8IHN0ci5sZW5ndGgpIHtcbiAgICBwYXRoICs9IHN0ci5zdWJzdHIoaW5kZXgpXG4gIH1cblxuICAvLyBJZiB0aGUgcGF0aCBleGlzdHMsIHB1c2ggaXQgb250byB0aGUgZW5kLlxuICBpZiAocGF0aCkge1xuICAgIHRva2Vucy5wdXNoKHBhdGgpXG4gIH1cblxuICByZXR1cm4gdG9rZW5zXG59XG5cbi8qKlxuICogQ29tcGlsZSBhIHN0cmluZyB0byBhIHRlbXBsYXRlIGZ1bmN0aW9uIGZvciB0aGUgcGF0aC5cbiAqXG4gKiBAcGFyYW0gIHtzdHJpbmd9ICAgICAgICAgICAgIHN0clxuICogQHBhcmFtICB7T2JqZWN0PX0gICAgICAgICAgICBvcHRpb25zXG4gKiBAcmV0dXJuIHshZnVuY3Rpb24oT2JqZWN0PSwgT2JqZWN0PSl9XG4gKi9cbmZ1bmN0aW9uIGNvbXBpbGUgKHN0ciwgb3B0aW9ucykge1xuICByZXR1cm4gdG9rZW5zVG9GdW5jdGlvbihwYXJzZShzdHIsIG9wdGlvbnMpKVxufVxuXG4vKipcbiAqIFByZXR0aWVyIGVuY29kaW5nIG9mIFVSSSBwYXRoIHNlZ21lbnRzLlxuICpcbiAqIEBwYXJhbSAge3N0cmluZ31cbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xuZnVuY3Rpb24gZW5jb2RlVVJJQ29tcG9uZW50UHJldHR5IChzdHIpIHtcbiAgcmV0dXJuIGVuY29kZVVSSShzdHIpLnJlcGxhY2UoL1tcXC8/I10vZywgZnVuY3Rpb24gKGMpIHtcbiAgICByZXR1cm4gJyUnICsgYy5jaGFyQ29kZUF0KDApLnRvU3RyaW5nKDE2KS50b1VwcGVyQ2FzZSgpXG4gIH0pXG59XG5cbi8qKlxuICogRW5jb2RlIHRoZSBhc3RlcmlzayBwYXJhbWV0ZXIuIFNpbWlsYXIgdG8gYHByZXR0eWAsIGJ1dCBhbGxvd3Mgc2xhc2hlcy5cbiAqXG4gKiBAcGFyYW0gIHtzdHJpbmd9XG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cbmZ1bmN0aW9uIGVuY29kZUFzdGVyaXNrIChzdHIpIHtcbiAgcmV0dXJuIGVuY29kZVVSSShzdHIpLnJlcGxhY2UoL1s/I10vZywgZnVuY3Rpb24gKGMpIHtcbiAgICByZXR1cm4gJyUnICsgYy5jaGFyQ29kZUF0KDApLnRvU3RyaW5nKDE2KS50b1VwcGVyQ2FzZSgpXG4gIH0pXG59XG5cbi8qKlxuICogRXhwb3NlIGEgbWV0aG9kIGZvciB0cmFuc2Zvcm1pbmcgdG9rZW5zIGludG8gdGhlIHBhdGggZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIHRva2Vuc1RvRnVuY3Rpb24gKHRva2Vucykge1xuICAvLyBDb21waWxlIGFsbCB0aGUgdG9rZW5zIGludG8gcmVnZXhwcy5cbiAgdmFyIG1hdGNoZXMgPSBuZXcgQXJyYXkodG9rZW5zLmxlbmd0aClcblxuICAvLyBDb21waWxlIGFsbCB0aGUgcGF0dGVybnMgYmVmb3JlIGNvbXBpbGF0aW9uLlxuICBmb3IgKHZhciBpID0gMDsgaSA8IHRva2Vucy5sZW5ndGg7IGkrKykge1xuICAgIGlmICh0eXBlb2YgdG9rZW5zW2ldID09PSAnb2JqZWN0Jykge1xuICAgICAgbWF0Y2hlc1tpXSA9IG5ldyBSZWdFeHAoJ14oPzonICsgdG9rZW5zW2ldLnBhdHRlcm4gKyAnKSQnKVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbiAob2JqLCBvcHRzKSB7XG4gICAgdmFyIHBhdGggPSAnJ1xuICAgIHZhciBkYXRhID0gb2JqIHx8IHt9XG4gICAgdmFyIG9wdGlvbnMgPSBvcHRzIHx8IHt9XG4gICAgdmFyIGVuY29kZSA9IG9wdGlvbnMucHJldHR5ID8gZW5jb2RlVVJJQ29tcG9uZW50UHJldHR5IDogZW5jb2RlVVJJQ29tcG9uZW50XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRva2Vucy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIHRva2VuID0gdG9rZW5zW2ldXG5cbiAgICAgIGlmICh0eXBlb2YgdG9rZW4gPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHBhdGggKz0gdG9rZW5cblxuICAgICAgICBjb250aW51ZVxuICAgICAgfVxuXG4gICAgICB2YXIgdmFsdWUgPSBkYXRhW3Rva2VuLm5hbWVdXG4gICAgICB2YXIgc2VnbWVudFxuXG4gICAgICBpZiAodmFsdWUgPT0gbnVsbCkge1xuICAgICAgICBpZiAodG9rZW4ub3B0aW9uYWwpIHtcbiAgICAgICAgICAvLyBQcmVwZW5kIHBhcnRpYWwgc2VnbWVudCBwcmVmaXhlcy5cbiAgICAgICAgICBpZiAodG9rZW4ucGFydGlhbCkge1xuICAgICAgICAgICAgcGF0aCArPSB0b2tlbi5wcmVmaXhcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb250aW51ZVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0V4cGVjdGVkIFwiJyArIHRva2VuLm5hbWUgKyAnXCIgdG8gYmUgZGVmaW5lZCcpXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGlzYXJyYXkodmFsdWUpKSB7XG4gICAgICAgIGlmICghdG9rZW4ucmVwZWF0KSB7XG4gICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignRXhwZWN0ZWQgXCInICsgdG9rZW4ubmFtZSArICdcIiB0byBub3QgcmVwZWF0LCBidXQgcmVjZWl2ZWQgYCcgKyBKU09OLnN0cmluZ2lmeSh2YWx1ZSkgKyAnYCcpXG4gICAgICAgIH1cblxuICAgICAgICBpZiAodmFsdWUubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgaWYgKHRva2VuLm9wdGlvbmFsKSB7XG4gICAgICAgICAgICBjb250aW51ZVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdFeHBlY3RlZCBcIicgKyB0b2tlbi5uYW1lICsgJ1wiIHRvIG5vdCBiZSBlbXB0eScpXG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCB2YWx1ZS5sZW5ndGg7IGorKykge1xuICAgICAgICAgIHNlZ21lbnQgPSBlbmNvZGUodmFsdWVbal0pXG5cbiAgICAgICAgICBpZiAoIW1hdGNoZXNbaV0udGVzdChzZWdtZW50KSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignRXhwZWN0ZWQgYWxsIFwiJyArIHRva2VuLm5hbWUgKyAnXCIgdG8gbWF0Y2ggXCInICsgdG9rZW4ucGF0dGVybiArICdcIiwgYnV0IHJlY2VpdmVkIGAnICsgSlNPTi5zdHJpbmdpZnkoc2VnbWVudCkgKyAnYCcpXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcGF0aCArPSAoaiA9PT0gMCA/IHRva2VuLnByZWZpeCA6IHRva2VuLmRlbGltaXRlcikgKyBzZWdtZW50XG4gICAgICAgIH1cblxuICAgICAgICBjb250aW51ZVxuICAgICAgfVxuXG4gICAgICBzZWdtZW50ID0gdG9rZW4uYXN0ZXJpc2sgPyBlbmNvZGVBc3Rlcmlzayh2YWx1ZSkgOiBlbmNvZGUodmFsdWUpXG5cbiAgICAgIGlmICghbWF0Y2hlc1tpXS50ZXN0KHNlZ21lbnQpKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0V4cGVjdGVkIFwiJyArIHRva2VuLm5hbWUgKyAnXCIgdG8gbWF0Y2ggXCInICsgdG9rZW4ucGF0dGVybiArICdcIiwgYnV0IHJlY2VpdmVkIFwiJyArIHNlZ21lbnQgKyAnXCInKVxuICAgICAgfVxuXG4gICAgICBwYXRoICs9IHRva2VuLnByZWZpeCArIHNlZ21lbnRcbiAgICB9XG5cbiAgICByZXR1cm4gcGF0aFxuICB9XG59XG5cbi8qKlxuICogRXNjYXBlIGEgcmVndWxhciBleHByZXNzaW9uIHN0cmluZy5cbiAqXG4gKiBAcGFyYW0gIHtzdHJpbmd9IHN0clxuICogQHJldHVybiB7c3RyaW5nfVxuICovXG5mdW5jdGlvbiBlc2NhcGVTdHJpbmcgKHN0cikge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoLyhbLisqPz1eIToke30oKVtcXF18XFwvXFxcXF0pL2csICdcXFxcJDEnKVxufVxuXG4vKipcbiAqIEVzY2FwZSB0aGUgY2FwdHVyaW5nIGdyb3VwIGJ5IGVzY2FwaW5nIHNwZWNpYWwgY2hhcmFjdGVycyBhbmQgbWVhbmluZy5cbiAqXG4gKiBAcGFyYW0gIHtzdHJpbmd9IGdyb3VwXG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cbmZ1bmN0aW9uIGVzY2FwZUdyb3VwIChncm91cCkge1xuICByZXR1cm4gZ3JvdXAucmVwbGFjZSgvKFs9ITokXFwvKCldKS9nLCAnXFxcXCQxJylcbn1cblxuLyoqXG4gKiBBdHRhY2ggdGhlIGtleXMgYXMgYSBwcm9wZXJ0eSBvZiB0aGUgcmVnZXhwLlxuICpcbiAqIEBwYXJhbSAgeyFSZWdFeHB9IHJlXG4gKiBAcGFyYW0gIHtBcnJheX0gICBrZXlzXG4gKiBAcmV0dXJuIHshUmVnRXhwfVxuICovXG5mdW5jdGlvbiBhdHRhY2hLZXlzIChyZSwga2V5cykge1xuICByZS5rZXlzID0ga2V5c1xuICByZXR1cm4gcmVcbn1cblxuLyoqXG4gKiBHZXQgdGhlIGZsYWdzIGZvciBhIHJlZ2V4cCBmcm9tIHRoZSBvcHRpb25zLlxuICpcbiAqIEBwYXJhbSAge09iamVjdH0gb3B0aW9uc1xuICogQHJldHVybiB7c3RyaW5nfVxuICovXG5mdW5jdGlvbiBmbGFncyAob3B0aW9ucykge1xuICByZXR1cm4gb3B0aW9ucy5zZW5zaXRpdmUgPyAnJyA6ICdpJ1xufVxuXG4vKipcbiAqIFB1bGwgb3V0IGtleXMgZnJvbSBhIHJlZ2V4cC5cbiAqXG4gKiBAcGFyYW0gIHshUmVnRXhwfSBwYXRoXG4gKiBAcGFyYW0gIHshQXJyYXl9ICBrZXlzXG4gKiBAcmV0dXJuIHshUmVnRXhwfVxuICovXG5mdW5jdGlvbiByZWdleHBUb1JlZ2V4cCAocGF0aCwga2V5cykge1xuICAvLyBVc2UgYSBuZWdhdGl2ZSBsb29rYWhlYWQgdG8gbWF0Y2ggb25seSBjYXB0dXJpbmcgZ3JvdXBzLlxuICB2YXIgZ3JvdXBzID0gcGF0aC5zb3VyY2UubWF0Y2goL1xcKCg/IVxcPykvZylcblxuICBpZiAoZ3JvdXBzKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBncm91cHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGtleXMucHVzaCh7XG4gICAgICAgIG5hbWU6IGksXG4gICAgICAgIHByZWZpeDogbnVsbCxcbiAgICAgICAgZGVsaW1pdGVyOiBudWxsLFxuICAgICAgICBvcHRpb25hbDogZmFsc2UsXG4gICAgICAgIHJlcGVhdDogZmFsc2UsXG4gICAgICAgIHBhcnRpYWw6IGZhbHNlLFxuICAgICAgICBhc3RlcmlzazogZmFsc2UsXG4gICAgICAgIHBhdHRlcm46IG51bGxcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGF0dGFjaEtleXMocGF0aCwga2V5cylcbn1cblxuLyoqXG4gKiBUcmFuc2Zvcm0gYW4gYXJyYXkgaW50byBhIHJlZ2V4cC5cbiAqXG4gKiBAcGFyYW0gIHshQXJyYXl9ICBwYXRoXG4gKiBAcGFyYW0gIHtBcnJheX0gICBrZXlzXG4gKiBAcGFyYW0gIHshT2JqZWN0fSBvcHRpb25zXG4gKiBAcmV0dXJuIHshUmVnRXhwfVxuICovXG5mdW5jdGlvbiBhcnJheVRvUmVnZXhwIChwYXRoLCBrZXlzLCBvcHRpb25zKSB7XG4gIHZhciBwYXJ0cyA9IFtdXG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBwYXRoLmxlbmd0aDsgaSsrKSB7XG4gICAgcGFydHMucHVzaChwYXRoVG9SZWdleHAocGF0aFtpXSwga2V5cywgb3B0aW9ucykuc291cmNlKVxuICB9XG5cbiAgdmFyIHJlZ2V4cCA9IG5ldyBSZWdFeHAoJyg/OicgKyBwYXJ0cy5qb2luKCd8JykgKyAnKScsIGZsYWdzKG9wdGlvbnMpKVxuXG4gIHJldHVybiBhdHRhY2hLZXlzKHJlZ2V4cCwga2V5cylcbn1cblxuLyoqXG4gKiBDcmVhdGUgYSBwYXRoIHJlZ2V4cCBmcm9tIHN0cmluZyBpbnB1dC5cbiAqXG4gKiBAcGFyYW0gIHtzdHJpbmd9ICBwYXRoXG4gKiBAcGFyYW0gIHshQXJyYXl9ICBrZXlzXG4gKiBAcGFyYW0gIHshT2JqZWN0fSBvcHRpb25zXG4gKiBAcmV0dXJuIHshUmVnRXhwfVxuICovXG5mdW5jdGlvbiBzdHJpbmdUb1JlZ2V4cCAocGF0aCwga2V5cywgb3B0aW9ucykge1xuICByZXR1cm4gdG9rZW5zVG9SZWdFeHAocGFyc2UocGF0aCwgb3B0aW9ucyksIGtleXMsIG9wdGlvbnMpXG59XG5cbi8qKlxuICogRXhwb3NlIGEgZnVuY3Rpb24gZm9yIHRha2luZyB0b2tlbnMgYW5kIHJldHVybmluZyBhIFJlZ0V4cC5cbiAqXG4gKiBAcGFyYW0gIHshQXJyYXl9ICAgICAgICAgIHRva2Vuc1xuICogQHBhcmFtICB7KEFycmF5fE9iamVjdCk9fSBrZXlzXG4gKiBAcGFyYW0gIHtPYmplY3Q9fSAgICAgICAgIG9wdGlvbnNcbiAqIEByZXR1cm4geyFSZWdFeHB9XG4gKi9cbmZ1bmN0aW9uIHRva2Vuc1RvUmVnRXhwICh0b2tlbnMsIGtleXMsIG9wdGlvbnMpIHtcbiAgaWYgKCFpc2FycmF5KGtleXMpKSB7XG4gICAgb3B0aW9ucyA9IC8qKiBAdHlwZSB7IU9iamVjdH0gKi8gKGtleXMgfHwgb3B0aW9ucylcbiAgICBrZXlzID0gW11cbiAgfVxuXG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9XG5cbiAgdmFyIHN0cmljdCA9IG9wdGlvbnMuc3RyaWN0XG4gIHZhciBlbmQgPSBvcHRpb25zLmVuZCAhPT0gZmFsc2VcbiAgdmFyIHJvdXRlID0gJydcblxuICAvLyBJdGVyYXRlIG92ZXIgdGhlIHRva2VucyBhbmQgY3JlYXRlIG91ciByZWdleHAgc3RyaW5nLlxuICBmb3IgKHZhciBpID0gMDsgaSA8IHRva2Vucy5sZW5ndGg7IGkrKykge1xuICAgIHZhciB0b2tlbiA9IHRva2Vuc1tpXVxuXG4gICAgaWYgKHR5cGVvZiB0b2tlbiA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHJvdXRlICs9IGVzY2FwZVN0cmluZyh0b2tlbilcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHByZWZpeCA9IGVzY2FwZVN0cmluZyh0b2tlbi5wcmVmaXgpXG4gICAgICB2YXIgY2FwdHVyZSA9ICcoPzonICsgdG9rZW4ucGF0dGVybiArICcpJ1xuXG4gICAgICBrZXlzLnB1c2godG9rZW4pXG5cbiAgICAgIGlmICh0b2tlbi5yZXBlYXQpIHtcbiAgICAgICAgY2FwdHVyZSArPSAnKD86JyArIHByZWZpeCArIGNhcHR1cmUgKyAnKSonXG4gICAgICB9XG5cbiAgICAgIGlmICh0b2tlbi5vcHRpb25hbCkge1xuICAgICAgICBpZiAoIXRva2VuLnBhcnRpYWwpIHtcbiAgICAgICAgICBjYXB0dXJlID0gJyg/OicgKyBwcmVmaXggKyAnKCcgKyBjYXB0dXJlICsgJykpPydcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjYXB0dXJlID0gcHJlZml4ICsgJygnICsgY2FwdHVyZSArICcpPydcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY2FwdHVyZSA9IHByZWZpeCArICcoJyArIGNhcHR1cmUgKyAnKSdcbiAgICAgIH1cblxuICAgICAgcm91dGUgKz0gY2FwdHVyZVxuICAgIH1cbiAgfVxuXG4gIHZhciBkZWxpbWl0ZXIgPSBlc2NhcGVTdHJpbmcob3B0aW9ucy5kZWxpbWl0ZXIgfHwgJy8nKVxuICB2YXIgZW5kc1dpdGhEZWxpbWl0ZXIgPSByb3V0ZS5zbGljZSgtZGVsaW1pdGVyLmxlbmd0aCkgPT09IGRlbGltaXRlclxuXG4gIC8vIEluIG5vbi1zdHJpY3QgbW9kZSB3ZSBhbGxvdyBhIHNsYXNoIGF0IHRoZSBlbmQgb2YgbWF0Y2guIElmIHRoZSBwYXRoIHRvXG4gIC8vIG1hdGNoIGFscmVhZHkgZW5kcyB3aXRoIGEgc2xhc2gsIHdlIHJlbW92ZSBpdCBmb3IgY29uc2lzdGVuY3kuIFRoZSBzbGFzaFxuICAvLyBpcyB2YWxpZCBhdCB0aGUgZW5kIG9mIGEgcGF0aCBtYXRjaCwgbm90IGluIHRoZSBtaWRkbGUuIFRoaXMgaXMgaW1wb3J0YW50XG4gIC8vIGluIG5vbi1lbmRpbmcgbW9kZSwgd2hlcmUgXCIvdGVzdC9cIiBzaG91bGRuJ3QgbWF0Y2ggXCIvdGVzdC8vcm91dGVcIi5cbiAgaWYgKCFzdHJpY3QpIHtcbiAgICByb3V0ZSA9IChlbmRzV2l0aERlbGltaXRlciA/IHJvdXRlLnNsaWNlKDAsIC1kZWxpbWl0ZXIubGVuZ3RoKSA6IHJvdXRlKSArICcoPzonICsgZGVsaW1pdGVyICsgJyg/PSQpKT8nXG4gIH1cblxuICBpZiAoZW5kKSB7XG4gICAgcm91dGUgKz0gJyQnXG4gIH0gZWxzZSB7XG4gICAgLy8gSW4gbm9uLWVuZGluZyBtb2RlLCB3ZSBuZWVkIHRoZSBjYXB0dXJpbmcgZ3JvdXBzIHRvIG1hdGNoIGFzIG11Y2ggYXNcbiAgICAvLyBwb3NzaWJsZSBieSB1c2luZyBhIHBvc2l0aXZlIGxvb2thaGVhZCB0byB0aGUgZW5kIG9yIG5leHQgcGF0aCBzZWdtZW50LlxuICAgIHJvdXRlICs9IHN0cmljdCAmJiBlbmRzV2l0aERlbGltaXRlciA/ICcnIDogJyg/PScgKyBkZWxpbWl0ZXIgKyAnfCQpJ1xuICB9XG5cbiAgcmV0dXJuIGF0dGFjaEtleXMobmV3IFJlZ0V4cCgnXicgKyByb3V0ZSwgZmxhZ3Mob3B0aW9ucykpLCBrZXlzKVxufVxuXG4vKipcbiAqIE5vcm1hbGl6ZSB0aGUgZ2l2ZW4gcGF0aCBzdHJpbmcsIHJldHVybmluZyBhIHJlZ3VsYXIgZXhwcmVzc2lvbi5cbiAqXG4gKiBBbiBlbXB0eSBhcnJheSBjYW4gYmUgcGFzc2VkIGluIGZvciB0aGUga2V5cywgd2hpY2ggd2lsbCBob2xkIHRoZVxuICogcGxhY2Vob2xkZXIga2V5IGRlc2NyaXB0aW9ucy4gRm9yIGV4YW1wbGUsIHVzaW5nIGAvdXNlci86aWRgLCBga2V5c2Agd2lsbFxuICogY29udGFpbiBgW3sgbmFtZTogJ2lkJywgZGVsaW1pdGVyOiAnLycsIG9wdGlvbmFsOiBmYWxzZSwgcmVwZWF0OiBmYWxzZSB9XWAuXG4gKlxuICogQHBhcmFtICB7KHN0cmluZ3xSZWdFeHB8QXJyYXkpfSBwYXRoXG4gKiBAcGFyYW0gIHsoQXJyYXl8T2JqZWN0KT19ICAgICAgIGtleXNcbiAqIEBwYXJhbSAge09iamVjdD19ICAgICAgICAgICAgICAgb3B0aW9uc1xuICogQHJldHVybiB7IVJlZ0V4cH1cbiAqL1xuZnVuY3Rpb24gcGF0aFRvUmVnZXhwIChwYXRoLCBrZXlzLCBvcHRpb25zKSB7XG4gIGlmICghaXNhcnJheShrZXlzKSkge1xuICAgIG9wdGlvbnMgPSAvKiogQHR5cGUgeyFPYmplY3R9ICovIChrZXlzIHx8IG9wdGlvbnMpXG4gICAga2V5cyA9IFtdXG4gIH1cblxuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fVxuXG4gIGlmIChwYXRoIGluc3RhbmNlb2YgUmVnRXhwKSB7XG4gICAgcmV0dXJuIHJlZ2V4cFRvUmVnZXhwKHBhdGgsIC8qKiBAdHlwZSB7IUFycmF5fSAqLyAoa2V5cykpXG4gIH1cblxuICBpZiAoaXNhcnJheShwYXRoKSkge1xuICAgIHJldHVybiBhcnJheVRvUmVnZXhwKC8qKiBAdHlwZSB7IUFycmF5fSAqLyAocGF0aCksIC8qKiBAdHlwZSB7IUFycmF5fSAqLyAoa2V5cyksIG9wdGlvbnMpXG4gIH1cblxuICByZXR1cm4gc3RyaW5nVG9SZWdleHAoLyoqIEB0eXBlIHtzdHJpbmd9ICovIChwYXRoKSwgLyoqIEB0eXBlIHshQXJyYXl9ICovIChrZXlzKSwgb3B0aW9ucylcbn1cblxuaW5kZXgucGFyc2UgPSBwYXJzZV8xO1xuaW5kZXguY29tcGlsZSA9IGNvbXBpbGVfMTtcbmluZGV4LnRva2Vuc1RvRnVuY3Rpb24gPSB0b2tlbnNUb0Z1bmN0aW9uXzE7XG5pbmRleC50b2tlbnNUb1JlZ0V4cCA9IHRva2Vuc1RvUmVnRXhwXzE7XG5cbi8qICAqL1xuXG5mdW5jdGlvbiBjcmVhdGVSb3V0ZU1hcCAocm91dGVzKSB7XG4gIHZhciBwYXRoTWFwID0gT2JqZWN0LmNyZWF0ZShudWxsKVxuICB2YXIgbmFtZU1hcCA9IE9iamVjdC5jcmVhdGUobnVsbClcblxuICByb3V0ZXMuZm9yRWFjaChmdW5jdGlvbiAocm91dGUpIHtcbiAgICBhZGRSb3V0ZVJlY29yZChwYXRoTWFwLCBuYW1lTWFwLCByb3V0ZSlcbiAgfSlcblxuICByZXR1cm4ge1xuICAgIHBhdGhNYXA6IHBhdGhNYXAsXG4gICAgbmFtZU1hcDogbmFtZU1hcFxuICB9XG59XG5cbmZ1bmN0aW9uIGFkZFJvdXRlUmVjb3JkIChcbiAgcGF0aE1hcCxcbiAgbmFtZU1hcCxcbiAgcm91dGUsXG4gIHBhcmVudCxcbiAgbWF0Y2hBc1xuKSB7XG4gIHZhciBwYXRoID0gcm91dGUucGF0aDtcbiAgdmFyIG5hbWUgPSByb3V0ZS5uYW1lO1xuICBhc3NlcnQocGF0aCAhPSBudWxsLCBcIlxcXCJwYXRoXFxcIiBpcyByZXF1aXJlZCBpbiBhIHJvdXRlIGNvbmZpZ3VyYXRpb24uXCIpXG5cbiAgdmFyIHJlY29yZCA9IHtcbiAgICBwYXRoOiBub3JtYWxpemVQYXRoKHBhdGgsIHBhcmVudCksXG4gICAgY29tcG9uZW50czogcm91dGUuY29tcG9uZW50cyB8fCB7IGRlZmF1bHQ6IHJvdXRlLmNvbXBvbmVudCB9LFxuICAgIGluc3RhbmNlczoge30sXG4gICAgbmFtZTogbmFtZSxcbiAgICBwYXJlbnQ6IHBhcmVudCxcbiAgICBtYXRjaEFzOiBtYXRjaEFzLFxuICAgIHJlZGlyZWN0OiByb3V0ZS5yZWRpcmVjdCxcbiAgICBiZWZvcmVFbnRlcjogcm91dGUuYmVmb3JlRW50ZXIsXG4gICAgbWV0YTogcm91dGUubWV0YSB8fCB7fVxuICB9XG5cbiAgaWYgKHJvdXRlLmNoaWxkcmVuKSB7XG4gICAgLy8gV2FybiBpZiByb3V0ZSBpcyBuYW1lZCBhbmQgaGFzIGEgZGVmYXVsdCBjaGlsZCByb3V0ZS5cbiAgICAvLyBJZiB1c2VycyBuYXZpZ2F0ZSB0byB0aGlzIHJvdXRlIGJ5IG5hbWUsIHRoZSBkZWZhdWx0IGNoaWxkIHdpbGxcbiAgICAvLyBub3QgYmUgcmVuZGVyZWQgKEdIIElzc3VlICM2MjkpXG4gICAgaWYgKFwicHJvZHVjdGlvblwiICE9PSAncHJvZHVjdGlvbicpIHt9XG4gICAgcm91dGUuY2hpbGRyZW4uZm9yRWFjaChmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICAgIGFkZFJvdXRlUmVjb3JkKHBhdGhNYXAsIG5hbWVNYXAsIGNoaWxkLCByZWNvcmQpXG4gICAgfSlcbiAgfVxuXG4gIGlmIChyb3V0ZS5hbGlhcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkocm91dGUuYWxpYXMpKSB7XG4gICAgICByb3V0ZS5hbGlhcy5mb3JFYWNoKGZ1bmN0aW9uIChhbGlhcykge1xuICAgICAgICBhZGRSb3V0ZVJlY29yZChwYXRoTWFwLCBuYW1lTWFwLCB7IHBhdGg6IGFsaWFzIH0sIHBhcmVudCwgcmVjb3JkLnBhdGgpXG4gICAgICB9KVxuICAgIH0gZWxzZSB7XG4gICAgICBhZGRSb3V0ZVJlY29yZChwYXRoTWFwLCBuYW1lTWFwLCB7IHBhdGg6IHJvdXRlLmFsaWFzIH0sIHBhcmVudCwgcmVjb3JkLnBhdGgpXG4gICAgfVxuICB9XG5cbiAgcGF0aE1hcFtyZWNvcmQucGF0aF0gPSByZWNvcmRcbiAgaWYgKG5hbWUpIHtcbiAgICBpZiAoIW5hbWVNYXBbbmFtZV0pIHtcbiAgICAgIG5hbWVNYXBbbmFtZV0gPSByZWNvcmRcbiAgICB9IGVsc2Uge1xuICAgICAgd2FybihmYWxzZSwgKFwiRHVwbGljYXRlIG5hbWVkIHJvdXRlcyBkZWZpbml0aW9uOiB7IG5hbWU6IFxcXCJcIiArIG5hbWUgKyBcIlxcXCIsIHBhdGg6IFxcXCJcIiArIChyZWNvcmQucGF0aCkgKyBcIlxcXCIgfVwiKSlcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gbm9ybWFsaXplUGF0aCAocGF0aCwgcGFyZW50KSB7XG4gIHBhdGggPSBwYXRoLnJlcGxhY2UoL1xcLyQvLCAnJylcbiAgaWYgKHBhdGhbMF0gPT09ICcvJykgeyByZXR1cm4gcGF0aCB9XG4gIGlmIChwYXJlbnQgPT0gbnVsbCkgeyByZXR1cm4gcGF0aCB9XG4gIHJldHVybiBjbGVhblBhdGgoKChwYXJlbnQucGF0aCkgKyBcIi9cIiArIHBhdGgpKVxufVxuXG4vKiAgKi9cblxudmFyIHJlZ2V4cENhY2hlID0gT2JqZWN0LmNyZWF0ZShudWxsKVxuXG52YXIgcmVnZXhwUGFyYW1zQ2FjaGUgPSBPYmplY3QuY3JlYXRlKG51bGwpXG5cbnZhciByZWdleHBDb21waWxlQ2FjaGUgPSBPYmplY3QuY3JlYXRlKG51bGwpXG5cbmZ1bmN0aW9uIGNyZWF0ZU1hdGNoZXIgKHJvdXRlcykge1xuICB2YXIgcmVmID0gY3JlYXRlUm91dGVNYXAocm91dGVzKTtcbiAgdmFyIHBhdGhNYXAgPSByZWYucGF0aE1hcDtcbiAgdmFyIG5hbWVNYXAgPSByZWYubmFtZU1hcDtcblxuICBmdW5jdGlvbiBtYXRjaCAoXG4gICAgcmF3LFxuICAgIGN1cnJlbnRSb3V0ZSxcbiAgICByZWRpcmVjdGVkRnJvbVxuICApIHtcbiAgICB2YXIgbG9jYXRpb24gPSBub3JtYWxpemVMb2NhdGlvbihyYXcsIGN1cnJlbnRSb3V0ZSlcbiAgICB2YXIgbmFtZSA9IGxvY2F0aW9uLm5hbWU7XG5cbiAgICBpZiAobmFtZSkge1xuICAgICAgdmFyIHJlY29yZCA9IG5hbWVNYXBbbmFtZV1cbiAgICAgIHZhciBwYXJhbU5hbWVzID0gZ2V0UGFyYW1zKHJlY29yZC5wYXRoKVxuXG4gICAgICBpZiAodHlwZW9mIGxvY2F0aW9uLnBhcmFtcyAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgbG9jYXRpb24ucGFyYW1zID0ge31cbiAgICAgIH1cblxuICAgICAgaWYgKGN1cnJlbnRSb3V0ZSAmJiB0eXBlb2YgY3VycmVudFJvdXRlLnBhcmFtcyA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgZm9yICh2YXIga2V5IGluIGN1cnJlbnRSb3V0ZS5wYXJhbXMpIHtcbiAgICAgICAgICBpZiAoIShrZXkgaW4gbG9jYXRpb24ucGFyYW1zKSAmJiBwYXJhbU5hbWVzLmluZGV4T2Yoa2V5KSA+IC0xKSB7XG4gICAgICAgICAgICBsb2NhdGlvbi5wYXJhbXNba2V5XSA9IGN1cnJlbnRSb3V0ZS5wYXJhbXNba2V5XVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAocmVjb3JkKSB7XG4gICAgICAgIGxvY2F0aW9uLnBhdGggPSBmaWxsUGFyYW1zKHJlY29yZC5wYXRoLCBsb2NhdGlvbi5wYXJhbXMsIChcIm5hbWVkIHJvdXRlIFxcXCJcIiArIG5hbWUgKyBcIlxcXCJcIikpXG4gICAgICAgIHJldHVybiBfY3JlYXRlUm91dGUocmVjb3JkLCBsb2NhdGlvbiwgcmVkaXJlY3RlZEZyb20pXG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChsb2NhdGlvbi5wYXRoKSB7XG4gICAgICBsb2NhdGlvbi5wYXJhbXMgPSB7fVxuICAgICAgZm9yICh2YXIgcGF0aCBpbiBwYXRoTWFwKSB7XG4gICAgICAgIGlmIChtYXRjaFJvdXRlKHBhdGgsIGxvY2F0aW9uLnBhcmFtcywgbG9jYXRpb24ucGF0aCkpIHtcbiAgICAgICAgICByZXR1cm4gX2NyZWF0ZVJvdXRlKHBhdGhNYXBbcGF0aF0sIGxvY2F0aW9uLCByZWRpcmVjdGVkRnJvbSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICAvLyBubyBtYXRjaFxuICAgIHJldHVybiBfY3JlYXRlUm91dGUobnVsbCwgbG9jYXRpb24pXG4gIH1cblxuICBmdW5jdGlvbiByZWRpcmVjdCAoXG4gICAgcmVjb3JkLFxuICAgIGxvY2F0aW9uXG4gICkge1xuICAgIHZhciBvcmlnaW5hbFJlZGlyZWN0ID0gcmVjb3JkLnJlZGlyZWN0XG4gICAgdmFyIHJlZGlyZWN0ID0gdHlwZW9mIG9yaWdpbmFsUmVkaXJlY3QgPT09ICdmdW5jdGlvbidcbiAgICAgICAgPyBvcmlnaW5hbFJlZGlyZWN0KGNyZWF0ZVJvdXRlKHJlY29yZCwgbG9jYXRpb24pKVxuICAgICAgICA6IG9yaWdpbmFsUmVkaXJlY3RcblxuICAgIGlmICh0eXBlb2YgcmVkaXJlY3QgPT09ICdzdHJpbmcnKSB7XG4gICAgICByZWRpcmVjdCA9IHsgcGF0aDogcmVkaXJlY3QgfVxuICAgIH1cblxuICAgIGlmICghcmVkaXJlY3QgfHwgdHlwZW9mIHJlZGlyZWN0ICE9PSAnb2JqZWN0Jykge1xuICAgICAgd2FybihmYWxzZSwgKFwiaW52YWxpZCByZWRpcmVjdCBvcHRpb246IFwiICsgKEpTT04uc3RyaW5naWZ5KHJlZGlyZWN0KSkpKVxuICAgICAgcmV0dXJuIF9jcmVhdGVSb3V0ZShudWxsLCBsb2NhdGlvbilcbiAgICB9XG5cbiAgICB2YXIgcmUgPSByZWRpcmVjdFxuICAgIHZhciBuYW1lID0gcmUubmFtZTtcbiAgICB2YXIgcGF0aCA9IHJlLnBhdGg7XG4gICAgdmFyIHF1ZXJ5ID0gbG9jYXRpb24ucXVlcnk7XG4gICAgdmFyIGhhc2ggPSBsb2NhdGlvbi5oYXNoO1xuICAgIHZhciBwYXJhbXMgPSBsb2NhdGlvbi5wYXJhbXM7XG4gICAgcXVlcnkgPSByZS5oYXNPd25Qcm9wZXJ0eSgncXVlcnknKSA/IHJlLnF1ZXJ5IDogcXVlcnlcbiAgICBoYXNoID0gcmUuaGFzT3duUHJvcGVydHkoJ2hhc2gnKSA/IHJlLmhhc2ggOiBoYXNoXG4gICAgcGFyYW1zID0gcmUuaGFzT3duUHJvcGVydHkoJ3BhcmFtcycpID8gcmUucGFyYW1zIDogcGFyYW1zXG5cbiAgICBpZiAobmFtZSkge1xuICAgICAgLy8gcmVzb2x2ZWQgbmFtZWQgZGlyZWN0XG4gICAgICB2YXIgdGFyZ2V0UmVjb3JkID0gbmFtZU1hcFtuYW1lXVxuICAgICAgYXNzZXJ0KHRhcmdldFJlY29yZCwgKFwicmVkaXJlY3QgZmFpbGVkOiBuYW1lZCByb3V0ZSBcXFwiXCIgKyBuYW1lICsgXCJcXFwiIG5vdCBmb3VuZC5cIikpXG4gICAgICByZXR1cm4gbWF0Y2goe1xuICAgICAgICBfbm9ybWFsaXplZDogdHJ1ZSxcbiAgICAgICAgbmFtZTogbmFtZSxcbiAgICAgICAgcXVlcnk6IHF1ZXJ5LFxuICAgICAgICBoYXNoOiBoYXNoLFxuICAgICAgICBwYXJhbXM6IHBhcmFtc1xuICAgICAgfSwgdW5kZWZpbmVkLCBsb2NhdGlvbilcbiAgICB9IGVsc2UgaWYgKHBhdGgpIHtcbiAgICAgIC8vIDEuIHJlc29sdmUgcmVsYXRpdmUgcmVkaXJlY3RcbiAgICAgIHZhciByYXdQYXRoID0gcmVzb2x2ZVJlY29yZFBhdGgocGF0aCwgcmVjb3JkKVxuICAgICAgLy8gMi4gcmVzb2x2ZSBwYXJhbXNcbiAgICAgIHZhciByZXNvbHZlZFBhdGggPSBmaWxsUGFyYW1zKHJhd1BhdGgsIHBhcmFtcywgKFwicmVkaXJlY3Qgcm91dGUgd2l0aCBwYXRoIFxcXCJcIiArIHJhd1BhdGggKyBcIlxcXCJcIikpXG4gICAgICAvLyAzLiByZW1hdGNoIHdpdGggZXhpc3RpbmcgcXVlcnkgYW5kIGhhc2hcbiAgICAgIHJldHVybiBtYXRjaCh7XG4gICAgICAgIF9ub3JtYWxpemVkOiB0cnVlLFxuICAgICAgICBwYXRoOiByZXNvbHZlZFBhdGgsXG4gICAgICAgIHF1ZXJ5OiBxdWVyeSxcbiAgICAgICAgaGFzaDogaGFzaFxuICAgICAgfSwgdW5kZWZpbmVkLCBsb2NhdGlvbilcbiAgICB9IGVsc2Uge1xuICAgICAgd2FybihmYWxzZSwgKFwiaW52YWxpZCByZWRpcmVjdCBvcHRpb246IFwiICsgKEpTT04uc3RyaW5naWZ5KHJlZGlyZWN0KSkpKVxuICAgICAgcmV0dXJuIF9jcmVhdGVSb3V0ZShudWxsLCBsb2NhdGlvbilcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBhbGlhcyAoXG4gICAgcmVjb3JkLFxuICAgIGxvY2F0aW9uLFxuICAgIG1hdGNoQXNcbiAgKSB7XG4gICAgdmFyIGFsaWFzZWRQYXRoID0gZmlsbFBhcmFtcyhtYXRjaEFzLCBsb2NhdGlvbi5wYXJhbXMsIChcImFsaWFzZWQgcm91dGUgd2l0aCBwYXRoIFxcXCJcIiArIG1hdGNoQXMgKyBcIlxcXCJcIikpXG4gICAgdmFyIGFsaWFzZWRNYXRjaCA9IG1hdGNoKHtcbiAgICAgIF9ub3JtYWxpemVkOiB0cnVlLFxuICAgICAgcGF0aDogYWxpYXNlZFBhdGhcbiAgICB9KVxuICAgIGlmIChhbGlhc2VkTWF0Y2gpIHtcbiAgICAgIHZhciBtYXRjaGVkID0gYWxpYXNlZE1hdGNoLm1hdGNoZWRcbiAgICAgIHZhciBhbGlhc2VkUmVjb3JkID0gbWF0Y2hlZFttYXRjaGVkLmxlbmd0aCAtIDFdXG4gICAgICBsb2NhdGlvbi5wYXJhbXMgPSBhbGlhc2VkTWF0Y2gucGFyYW1zXG4gICAgICByZXR1cm4gX2NyZWF0ZVJvdXRlKGFsaWFzZWRSZWNvcmQsIGxvY2F0aW9uKVxuICAgIH1cbiAgICByZXR1cm4gX2NyZWF0ZVJvdXRlKG51bGwsIGxvY2F0aW9uKVxuICB9XG5cbiAgZnVuY3Rpb24gX2NyZWF0ZVJvdXRlIChcbiAgICByZWNvcmQsXG4gICAgbG9jYXRpb24sXG4gICAgcmVkaXJlY3RlZEZyb21cbiAgKSB7XG4gICAgaWYgKHJlY29yZCAmJiByZWNvcmQucmVkaXJlY3QpIHtcbiAgICAgIHJldHVybiByZWRpcmVjdChyZWNvcmQsIHJlZGlyZWN0ZWRGcm9tIHx8IGxvY2F0aW9uKVxuICAgIH1cbiAgICBpZiAocmVjb3JkICYmIHJlY29yZC5tYXRjaEFzKSB7XG4gICAgICByZXR1cm4gYWxpYXMocmVjb3JkLCBsb2NhdGlvbiwgcmVjb3JkLm1hdGNoQXMpXG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVSb3V0ZShyZWNvcmQsIGxvY2F0aW9uLCByZWRpcmVjdGVkRnJvbSlcbiAgfVxuXG4gIHJldHVybiBtYXRjaFxufVxuXG5mdW5jdGlvbiBnZXRSb3V0ZVJlZ2V4IChwYXRoKSB7XG4gIHZhciBoaXQgPSByZWdleHBDYWNoZVtwYXRoXVxuICB2YXIga2V5cywgcmVnZXhwXG5cbiAgaWYgKGhpdCkge1xuICAgIGtleXMgPSBoaXQua2V5c1xuICAgIHJlZ2V4cCA9IGhpdC5yZWdleHBcbiAgfSBlbHNlIHtcbiAgICBrZXlzID0gW11cbiAgICByZWdleHAgPSBpbmRleChwYXRoLCBrZXlzKVxuICAgIHJlZ2V4cENhY2hlW3BhdGhdID0geyBrZXlzOiBrZXlzLCByZWdleHA6IHJlZ2V4cCB9XG4gIH1cblxuICByZXR1cm4geyBrZXlzOiBrZXlzLCByZWdleHA6IHJlZ2V4cCB9XG59XG5cbmZ1bmN0aW9uIG1hdGNoUm91dGUgKFxuICBwYXRoLFxuICBwYXJhbXMsXG4gIHBhdGhuYW1lXG4pIHtcbiAgdmFyIHJlZiA9IGdldFJvdXRlUmVnZXgocGF0aCk7XG4gIHZhciByZWdleHAgPSByZWYucmVnZXhwO1xuICB2YXIga2V5cyA9IHJlZi5rZXlzO1xuICB2YXIgbSA9IHBhdGhuYW1lLm1hdGNoKHJlZ2V4cClcblxuICBpZiAoIW0pIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfSBlbHNlIGlmICghcGFyYW1zKSB7XG4gICAgcmV0dXJuIHRydWVcbiAgfVxuXG4gIGZvciAodmFyIGkgPSAxLCBsZW4gPSBtLmxlbmd0aDsgaSA8IGxlbjsgKytpKSB7XG4gICAgdmFyIGtleSA9IGtleXNbaSAtIDFdXG4gICAgdmFyIHZhbCA9IHR5cGVvZiBtW2ldID09PSAnc3RyaW5nJyA/IGRlY29kZVVSSUNvbXBvbmVudChtW2ldKSA6IG1baV1cbiAgICBpZiAoa2V5KSB7IHBhcmFtc1trZXkubmFtZV0gPSB2YWwgfVxuICB9XG5cbiAgcmV0dXJuIHRydWVcbn1cblxuZnVuY3Rpb24gZmlsbFBhcmFtcyAoXG4gIHBhdGgsXG4gIHBhcmFtcyxcbiAgcm91dGVNc2dcbikge1xuICB0cnkge1xuICAgIHZhciBmaWxsZXIgPVxuICAgICAgcmVnZXhwQ29tcGlsZUNhY2hlW3BhdGhdIHx8XG4gICAgICAocmVnZXhwQ29tcGlsZUNhY2hlW3BhdGhdID0gaW5kZXguY29tcGlsZShwYXRoKSlcbiAgICByZXR1cm4gZmlsbGVyKHBhcmFtcyB8fCB7fSwgeyBwcmV0dHk6IHRydWUgfSlcbiAgfSBjYXRjaCAoZSkge1xuICAgIGFzc2VydChmYWxzZSwgKFwibWlzc2luZyBwYXJhbSBmb3IgXCIgKyByb3V0ZU1zZyArIFwiOiBcIiArIChlLm1lc3NhZ2UpKSlcbiAgICByZXR1cm4gJydcbiAgfVxufVxuXG5mdW5jdGlvbiBnZXRQYXJhbXMgKHBhdGgpIHtcbiAgcmV0dXJuIHJlZ2V4cFBhcmFtc0NhY2hlW3BhdGhdIHx8XG4gICAgKHJlZ2V4cFBhcmFtc0NhY2hlW3BhdGhdID0gZ2V0Um91dGVSZWdleChwYXRoKS5rZXlzLm1hcChmdW5jdGlvbiAoa2V5KSB7IHJldHVybiBrZXkubmFtZTsgfSkpXG59XG5cbmZ1bmN0aW9uIHJlc29sdmVSZWNvcmRQYXRoIChwYXRoLCByZWNvcmQpIHtcbiAgcmV0dXJuIHJlc29sdmVQYXRoKHBhdGgsIHJlY29yZC5wYXJlbnQgPyByZWNvcmQucGFyZW50LnBhdGggOiAnLycsIHRydWUpXG59XG5cbi8qICAqL1xuXG52YXIgaW5Ccm93c2VyID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCdcblxudmFyIHN1cHBvcnRzSGlzdG9yeSA9IGluQnJvd3NlciAmJiAoZnVuY3Rpb24gKCkge1xuICB2YXIgdWEgPSB3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudFxuXG4gIGlmIChcbiAgICAodWEuaW5kZXhPZignQW5kcm9pZCAyLicpICE9PSAtMSB8fCB1YS5pbmRleE9mKCdBbmRyb2lkIDQuMCcpICE9PSAtMSkgJiZcbiAgICB1YS5pbmRleE9mKCdNb2JpbGUgU2FmYXJpJykgIT09IC0xICYmXG4gICAgdWEuaW5kZXhPZignQ2hyb21lJykgPT09IC0xICYmXG4gICAgdWEuaW5kZXhPZignV2luZG93cyBQaG9uZScpID09PSAtMVxuICApIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIHJldHVybiB3aW5kb3cuaGlzdG9yeSAmJiAncHVzaFN0YXRlJyBpbiB3aW5kb3cuaGlzdG9yeVxufSkoKVxuXG4vKiAgKi9cblxuZnVuY3Rpb24gcnVuUXVldWUgKHF1ZXVlLCBmbiwgY2IpIHtcbiAgdmFyIHN0ZXAgPSBmdW5jdGlvbiAoaW5kZXgpIHtcbiAgICBpZiAoaW5kZXggPj0gcXVldWUubGVuZ3RoKSB7XG4gICAgICBjYigpXG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChxdWV1ZVtpbmRleF0pIHtcbiAgICAgICAgZm4ocXVldWVbaW5kZXhdLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgc3RlcChpbmRleCArIDEpXG4gICAgICAgIH0pXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzdGVwKGluZGV4ICsgMSlcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgc3RlcCgwKVxufVxuXG4vKiAgKi9cblxuXG52YXIgSGlzdG9yeSA9IGZ1bmN0aW9uIEhpc3RvcnkgKHJvdXRlciwgYmFzZSkge1xuICB0aGlzLnJvdXRlciA9IHJvdXRlclxuICB0aGlzLmJhc2UgPSBub3JtYWxpemVCYXNlKGJhc2UpXG4gIC8vIHN0YXJ0IHdpdGggYSByb3V0ZSBvYmplY3QgdGhhdCBzdGFuZHMgZm9yIFwibm93aGVyZVwiXG4gIHRoaXMuY3VycmVudCA9IFNUQVJUXG4gIHRoaXMucGVuZGluZyA9IG51bGxcbn07XG5cbkhpc3RvcnkucHJvdG90eXBlLmxpc3RlbiA9IGZ1bmN0aW9uIGxpc3RlbiAoY2IpIHtcbiAgdGhpcy5jYiA9IGNiXG59O1xuXG5IaXN0b3J5LnByb3RvdHlwZS50cmFuc2l0aW9uVG8gPSBmdW5jdGlvbiB0cmFuc2l0aW9uVG8gKGxvY2F0aW9uLCBjYikge1xuICAgIHZhciB0aGlzJDEgPSB0aGlzO1xuXG4gIHZhciByb3V0ZSA9IHRoaXMucm91dGVyLm1hdGNoKGxvY2F0aW9uLCB0aGlzLmN1cnJlbnQpXG4gIHRoaXMuY29uZmlybVRyYW5zaXRpb24ocm91dGUsIGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzJDEudXBkYXRlUm91dGUocm91dGUpXG4gICAgY2IgJiYgY2Iocm91dGUpXG4gICAgdGhpcyQxLmVuc3VyZVVSTCgpXG4gIH0pXG59O1xuXG5IaXN0b3J5LnByb3RvdHlwZS5jb25maXJtVHJhbnNpdGlvbiA9IGZ1bmN0aW9uIGNvbmZpcm1UcmFuc2l0aW9uIChyb3V0ZSwgY2IpIHtcbiAgICB2YXIgdGhpcyQxID0gdGhpcztcblxuICB2YXIgY3VycmVudCA9IHRoaXMuY3VycmVudFxuICBpZiAoaXNTYW1lUm91dGUocm91dGUsIGN1cnJlbnQpKSB7XG4gICAgdGhpcy5lbnN1cmVVUkwoKVxuICAgIHJldHVyblxuICB9XG5cbiAgdmFyIHJlZiA9IHJlc29sdmVRdWV1ZSh0aGlzLmN1cnJlbnQubWF0Y2hlZCwgcm91dGUubWF0Y2hlZCk7XG4gICAgdmFyIGRlYWN0aXZhdGVkID0gcmVmLmRlYWN0aXZhdGVkO1xuICAgIHZhciBhY3RpdmF0ZWQgPSByZWYuYWN0aXZhdGVkO1xuXG4gIHZhciBxdWV1ZSA9IFtdLmNvbmNhdChcbiAgICAvLyBpbi1jb21wb25lbnQgbGVhdmUgZ3VhcmRzXG4gICAgZXh0cmFjdExlYXZlR3VhcmRzKGRlYWN0aXZhdGVkKSxcbiAgICAvLyBnbG9iYWwgYmVmb3JlIGhvb2tzXG4gICAgdGhpcy5yb3V0ZXIuYmVmb3JlSG9va3MsXG4gICAgLy8gZW50ZXIgZ3VhcmRzXG4gICAgYWN0aXZhdGVkLm1hcChmdW5jdGlvbiAobSkgeyByZXR1cm4gbS5iZWZvcmVFbnRlcjsgfSksXG4gICAgLy8gYXN5bmMgY29tcG9uZW50c1xuICAgIHJlc29sdmVBc3luY0NvbXBvbmVudHMoYWN0aXZhdGVkKVxuICApXG5cbiAgdGhpcy5wZW5kaW5nID0gcm91dGVcbiAgdmFyIGl0ZXJhdG9yID0gZnVuY3Rpb24gKGhvb2ssIG5leHQpIHtcbiAgICBpZiAodGhpcyQxLnBlbmRpbmcgIT09IHJvdXRlKSB7IHJldHVybiB9XG4gICAgaG9vayhyb3V0ZSwgY3VycmVudCwgZnVuY3Rpb24gKHRvKSB7XG4gICAgICBpZiAodG8gPT09IGZhbHNlKSB7XG4gICAgICAgIC8vIG5leHQoZmFsc2UpIC0+IGFib3J0IG5hdmlnYXRpb24sIGVuc3VyZSBjdXJyZW50IFVSTFxuICAgICAgICB0aGlzJDEuZW5zdXJlVVJMKHRydWUpXG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZiB0byA9PT0gJ3N0cmluZycgfHwgdHlwZW9mIHRvID09PSAnb2JqZWN0Jykge1xuICAgICAgICAvLyBuZXh0KCcvJykgb3IgbmV4dCh7IHBhdGg6ICcvJyB9KSAtPiByZWRpcmVjdFxuICAgICAgICB0aGlzJDEucHVzaCh0bylcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIGNvbmZpcm0gdHJhbnNpdGlvbiBhbmQgcGFzcyBvbiB0aGUgdmFsdWVcbiAgICAgICAgbmV4dCh0bylcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgcnVuUXVldWUocXVldWUsIGl0ZXJhdG9yLCBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHBvc3RFbnRlckNicyA9IFtdXG4gICAgdmFyIGVudGVyR3VhcmRzID0gZXh0cmFjdEVudGVyR3VhcmRzKGFjdGl2YXRlZCwgcG9zdEVudGVyQ2JzLCBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gdGhpcyQxLmN1cnJlbnQgPT09IHJvdXRlXG4gICAgfSlcbiAgICAvLyB3YWl0IHVudGlsIGFzeW5jIGNvbXBvbmVudHMgYXJlIHJlc29sdmVkIGJlZm9yZVxuICAgIC8vIGV4dHJhY3RpbmcgaW4tY29tcG9uZW50IGVudGVyIGd1YXJkc1xuICAgIHJ1blF1ZXVlKGVudGVyR3VhcmRzLCBpdGVyYXRvciwgZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKHRoaXMkMS5wZW5kaW5nID09PSByb3V0ZSkge1xuICAgICAgICB0aGlzJDEucGVuZGluZyA9IG51bGxcbiAgICAgICAgY2Iocm91dGUpXG4gICAgICAgIHRoaXMkMS5yb3V0ZXIuYXBwLiRuZXh0VGljayhmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcG9zdEVudGVyQ2JzLmZvckVhY2goZnVuY3Rpb24gKGNiKSB7IHJldHVybiBjYigpOyB9KVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH0pXG4gIH0pXG59O1xuXG5IaXN0b3J5LnByb3RvdHlwZS51cGRhdGVSb3V0ZSA9IGZ1bmN0aW9uIHVwZGF0ZVJvdXRlIChyb3V0ZSkge1xuICB2YXIgcHJldiA9IHRoaXMuY3VycmVudFxuICB0aGlzLmN1cnJlbnQgPSByb3V0ZVxuICB0aGlzLmNiICYmIHRoaXMuY2Iocm91dGUpXG4gIHRoaXMucm91dGVyLmFmdGVySG9va3MuZm9yRWFjaChmdW5jdGlvbiAoaG9vaykge1xuICAgIGhvb2sgJiYgaG9vayhyb3V0ZSwgcHJldilcbiAgfSlcbn07XG5cbmZ1bmN0aW9uIG5vcm1hbGl6ZUJhc2UgKGJhc2UpIHtcbiAgaWYgKCFiYXNlKSB7XG4gICAgaWYgKGluQnJvd3Nlcikge1xuICAgICAgLy8gcmVzcGVjdCA8YmFzZT4gdGFnXG4gICAgICB2YXIgYmFzZUVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYmFzZScpXG4gICAgICBiYXNlID0gYmFzZUVsID8gYmFzZUVsLmdldEF0dHJpYnV0ZSgnaHJlZicpIDogJy8nXG4gICAgfSBlbHNlIHtcbiAgICAgIGJhc2UgPSAnLydcbiAgICB9XG4gIH1cbiAgLy8gbWFrZSBzdXJlIHRoZXJlJ3MgdGhlIHN0YXJ0aW5nIHNsYXNoXG4gIGlmIChiYXNlLmNoYXJBdCgwKSAhPT0gJy8nKSB7XG4gICAgYmFzZSA9ICcvJyArIGJhc2VcbiAgfVxuICAvLyByZW1vdmUgdHJhaWxpbmcgc2xhc2hcbiAgcmV0dXJuIGJhc2UucmVwbGFjZSgvXFwvJC8sICcnKVxufVxuXG5mdW5jdGlvbiByZXNvbHZlUXVldWUgKFxuICBjdXJyZW50LFxuICBuZXh0XG4pIHtcbiAgdmFyIGlcbiAgdmFyIG1heCA9IE1hdGgubWF4KGN1cnJlbnQubGVuZ3RoLCBuZXh0Lmxlbmd0aClcbiAgZm9yIChpID0gMDsgaSA8IG1heDsgaSsrKSB7XG4gICAgaWYgKGN1cnJlbnRbaV0gIT09IG5leHRbaV0pIHtcbiAgICAgIGJyZWFrXG4gICAgfVxuICB9XG4gIHJldHVybiB7XG4gICAgYWN0aXZhdGVkOiBuZXh0LnNsaWNlKGkpLFxuICAgIGRlYWN0aXZhdGVkOiBjdXJyZW50LnNsaWNlKGkpXG4gIH1cbn1cblxuZnVuY3Rpb24gZXh0cmFjdEd1YXJkIChcbiAgZGVmLFxuICBrZXlcbikge1xuICBpZiAodHlwZW9mIGRlZiAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIC8vIGV4dGVuZCBub3cgc28gdGhhdCBnbG9iYWwgbWl4aW5zIGFyZSBhcHBsaWVkLlxuICAgIGRlZiA9IF9WdWUuZXh0ZW5kKGRlZilcbiAgfVxuICByZXR1cm4gZGVmLm9wdGlvbnNba2V5XVxufVxuXG5mdW5jdGlvbiBleHRyYWN0TGVhdmVHdWFyZHMgKG1hdGNoZWQpIHtcbiAgcmV0dXJuIGZsYXR0ZW4oZmxhdE1hcENvbXBvbmVudHMobWF0Y2hlZCwgZnVuY3Rpb24gKGRlZiwgaW5zdGFuY2UpIHtcbiAgICB2YXIgZ3VhcmQgPSBleHRyYWN0R3VhcmQoZGVmLCAnYmVmb3JlUm91dGVMZWF2ZScpXG4gICAgaWYgKGd1YXJkKSB7XG4gICAgICByZXR1cm4gQXJyYXkuaXNBcnJheShndWFyZClcbiAgICAgICAgPyBndWFyZC5tYXAoZnVuY3Rpb24gKGd1YXJkKSB7IHJldHVybiB3cmFwTGVhdmVHdWFyZChndWFyZCwgaW5zdGFuY2UpOyB9KVxuICAgICAgICA6IHdyYXBMZWF2ZUd1YXJkKGd1YXJkLCBpbnN0YW5jZSlcbiAgICB9XG4gIH0pLnJldmVyc2UoKSlcbn1cblxuZnVuY3Rpb24gd3JhcExlYXZlR3VhcmQgKFxuICBndWFyZCxcbiAgaW5zdGFuY2Vcbikge1xuICByZXR1cm4gZnVuY3Rpb24gcm91dGVMZWF2ZUd1YXJkICgpIHtcbiAgICByZXR1cm4gZ3VhcmQuYXBwbHkoaW5zdGFuY2UsIGFyZ3VtZW50cylcbiAgfVxufVxuXG5mdW5jdGlvbiBleHRyYWN0RW50ZXJHdWFyZHMgKFxuICBtYXRjaGVkLFxuICBjYnMsXG4gIGlzVmFsaWRcbikge1xuICByZXR1cm4gZmxhdHRlbihmbGF0TWFwQ29tcG9uZW50cyhtYXRjaGVkLCBmdW5jdGlvbiAoZGVmLCBfLCBtYXRjaCwga2V5KSB7XG4gICAgdmFyIGd1YXJkID0gZXh0cmFjdEd1YXJkKGRlZiwgJ2JlZm9yZVJvdXRlRW50ZXInKVxuICAgIGlmIChndWFyZCkge1xuICAgICAgcmV0dXJuIEFycmF5LmlzQXJyYXkoZ3VhcmQpXG4gICAgICAgID8gZ3VhcmQubWFwKGZ1bmN0aW9uIChndWFyZCkgeyByZXR1cm4gd3JhcEVudGVyR3VhcmQoZ3VhcmQsIGNicywgbWF0Y2gsIGtleSwgaXNWYWxpZCk7IH0pXG4gICAgICAgIDogd3JhcEVudGVyR3VhcmQoZ3VhcmQsIGNicywgbWF0Y2gsIGtleSwgaXNWYWxpZClcbiAgICB9XG4gIH0pKVxufVxuXG5mdW5jdGlvbiB3cmFwRW50ZXJHdWFyZCAoXG4gIGd1YXJkLFxuICBjYnMsXG4gIG1hdGNoLFxuICBrZXksXG4gIGlzVmFsaWRcbikge1xuICByZXR1cm4gZnVuY3Rpb24gcm91dGVFbnRlckd1YXJkICh0bywgZnJvbSwgbmV4dCkge1xuICAgIHJldHVybiBndWFyZCh0bywgZnJvbSwgZnVuY3Rpb24gKGNiKSB7XG4gICAgICBuZXh0KGNiKVxuICAgICAgaWYgKHR5cGVvZiBjYiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBjYnMucHVzaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgLy8gIzc1MFxuICAgICAgICAgIC8vIGlmIGEgcm91dGVyLXZpZXcgaXMgd3JhcHBlZCB3aXRoIGFuIG91dC1pbiB0cmFuc2l0aW9uLFxuICAgICAgICAgIC8vIHRoZSBpbnN0YW5jZSBtYXkgbm90IGhhdmUgYmVlbiByZWdpc3RlcmVkIGF0IHRoaXMgdGltZS5cbiAgICAgICAgICAvLyB3ZSB3aWxsIG5lZWQgdG8gcG9sbCBmb3IgcmVnaXN0cmF0aW9uIHVudGlsIGN1cnJlbnQgcm91dGVcbiAgICAgICAgICAvLyBpcyBubyBsb25nZXIgdmFsaWQuXG4gICAgICAgICAgcG9sbChjYiwgbWF0Y2guaW5zdGFuY2VzLCBrZXksIGlzVmFsaWQpXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfSlcbiAgfVxufVxuXG5mdW5jdGlvbiBwb2xsIChcbiAgY2IsIC8vIHNvbWVob3cgZmxvdyBjYW5ub3QgaW5mZXIgdGhpcyBpcyBhIGZ1bmN0aW9uXG4gIGluc3RhbmNlcyxcbiAga2V5LFxuICBpc1ZhbGlkXG4pIHtcbiAgaWYgKGluc3RhbmNlc1trZXldKSB7XG4gICAgY2IoaW5zdGFuY2VzW2tleV0pXG4gIH0gZWxzZSBpZiAoaXNWYWxpZCgpKSB7XG4gICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICBwb2xsKGNiLCBpbnN0YW5jZXMsIGtleSwgaXNWYWxpZClcbiAgICB9LCAxNilcbiAgfVxufVxuXG5mdW5jdGlvbiByZXNvbHZlQXN5bmNDb21wb25lbnRzIChtYXRjaGVkKSB7XG4gIHJldHVybiBmbGF0TWFwQ29tcG9uZW50cyhtYXRjaGVkLCBmdW5jdGlvbiAoZGVmLCBfLCBtYXRjaCwga2V5KSB7XG4gICAgLy8gaWYgaXQncyBhIGZ1bmN0aW9uIGFuZCBkb2Vzbid0IGhhdmUgVnVlIG9wdGlvbnMgYXR0YWNoZWQsXG4gICAgLy8gYXNzdW1lIGl0J3MgYW4gYXN5bmMgY29tcG9uZW50IHJlc29sdmUgZnVuY3Rpb24uXG4gICAgLy8gd2UgYXJlIG5vdCB1c2luZyBWdWUncyBkZWZhdWx0IGFzeW5jIHJlc29sdmluZyBtZWNoYW5pc20gYmVjYXVzZVxuICAgIC8vIHdlIHdhbnQgdG8gaGFsdCB0aGUgbmF2aWdhdGlvbiB1bnRpbCB0aGUgaW5jb21pbmcgY29tcG9uZW50IGhhcyBiZWVuXG4gICAgLy8gcmVzb2x2ZWQuXG4gICAgaWYgKHR5cGVvZiBkZWYgPT09ICdmdW5jdGlvbicgJiYgIWRlZi5vcHRpb25zKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24gKHRvLCBmcm9tLCBuZXh0KSB7XG4gICAgICAgIHZhciByZXNvbHZlID0gZnVuY3Rpb24gKHJlc29sdmVkRGVmKSB7XG4gICAgICAgICAgbWF0Y2guY29tcG9uZW50c1trZXldID0gcmVzb2x2ZWREZWZcbiAgICAgICAgICBuZXh0KClcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciByZWplY3QgPSBmdW5jdGlvbiAocmVhc29uKSB7XG4gICAgICAgICAgd2FybihmYWxzZSwgKFwiRmFpbGVkIHRvIHJlc29sdmUgYXN5bmMgY29tcG9uZW50IFwiICsga2V5ICsgXCI6IFwiICsgcmVhc29uKSlcbiAgICAgICAgICBuZXh0KGZhbHNlKVxuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHJlcyA9IGRlZihyZXNvbHZlLCByZWplY3QpXG4gICAgICAgIGlmIChyZXMgJiYgdHlwZW9mIHJlcy50aGVuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgcmVzLnRoZW4ocmVzb2x2ZSwgcmVqZWN0KVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9KVxufVxuXG5mdW5jdGlvbiBmbGF0TWFwQ29tcG9uZW50cyAoXG4gIG1hdGNoZWQsXG4gIGZuXG4pIHtcbiAgcmV0dXJuIGZsYXR0ZW4obWF0Y2hlZC5tYXAoZnVuY3Rpb24gKG0pIHtcbiAgICByZXR1cm4gT2JqZWN0LmtleXMobS5jb21wb25lbnRzKS5tYXAoZnVuY3Rpb24gKGtleSkgeyByZXR1cm4gZm4oXG4gICAgICBtLmNvbXBvbmVudHNba2V5XSxcbiAgICAgIG0uaW5zdGFuY2VzW2tleV0sXG4gICAgICBtLCBrZXlcbiAgICApOyB9KVxuICB9KSlcbn1cblxuZnVuY3Rpb24gZmxhdHRlbiAoYXJyKSB7XG4gIHJldHVybiBBcnJheS5wcm90b3R5cGUuY29uY2F0LmFwcGx5KFtdLCBhcnIpXG59XG5cbi8qICAqL1xuXG52YXIgcG9zaXRpb25TdG9yZSA9IE9iamVjdC5jcmVhdGUobnVsbClcblxuZnVuY3Rpb24gc2F2ZVNjcm9sbFBvc2l0aW9uIChrZXkpIHtcbiAgaWYgKCFrZXkpIHsgcmV0dXJuIH1cbiAgcG9zaXRpb25TdG9yZVtrZXldID0ge1xuICAgIHg6IHdpbmRvdy5wYWdlWE9mZnNldCxcbiAgICB5OiB3aW5kb3cucGFnZVlPZmZzZXRcbiAgfVxufVxuXG5mdW5jdGlvbiBnZXRTY3JvbGxQb3NpdGlvbiAoa2V5KSB7XG4gIGlmICgha2V5KSB7IHJldHVybiB9XG4gIHJldHVybiBwb3NpdGlvblN0b3JlW2tleV1cbn1cblxuZnVuY3Rpb24gZ2V0RWxlbWVudFBvc2l0aW9uIChlbCkge1xuICB2YXIgZG9jUmVjdCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuICB2YXIgZWxSZWN0ID0gZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcbiAgcmV0dXJuIHtcbiAgICB4OiBlbFJlY3QubGVmdCAtIGRvY1JlY3QubGVmdCxcbiAgICB5OiBlbFJlY3QudG9wIC0gZG9jUmVjdC50b3BcbiAgfVxufVxuXG5mdW5jdGlvbiBpc1ZhbGlkUG9zaXRpb24gKG9iaikge1xuICByZXR1cm4gaXNOdW1iZXIob2JqLngpIHx8IGlzTnVtYmVyKG9iai55KVxufVxuXG5mdW5jdGlvbiBub3JtYWxpemVQb3NpdGlvbiAob2JqKSB7XG4gIHJldHVybiB7XG4gICAgeDogaXNOdW1iZXIob2JqLngpID8gb2JqLnggOiB3aW5kb3cucGFnZVhPZmZzZXQsXG4gICAgeTogaXNOdW1iZXIob2JqLnkpID8gb2JqLnkgOiB3aW5kb3cucGFnZVlPZmZzZXRcbiAgfVxufVxuXG5mdW5jdGlvbiBpc051bWJlciAodikge1xuICByZXR1cm4gdHlwZW9mIHYgPT09ICdudW1iZXInXG59XG5cbi8qICAqL1xuXG5cbnZhciBnZW5LZXkgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBTdHJpbmcoRGF0ZS5ub3coKSk7IH1cbnZhciBfa2V5ID0gZ2VuS2V5KClcblxudmFyIEhUTUw1SGlzdG9yeSA9IChmdW5jdGlvbiAoSGlzdG9yeSkge1xuICBmdW5jdGlvbiBIVE1MNUhpc3RvcnkgKHJvdXRlciwgYmFzZSkge1xuICAgIHZhciB0aGlzJDEgPSB0aGlzO1xuXG4gICAgSGlzdG9yeS5jYWxsKHRoaXMsIHJvdXRlciwgYmFzZSlcblxuICAgIHZhciBleHBlY3RTY3JvbGwgPSByb3V0ZXIub3B0aW9ucy5zY3JvbGxCZWhhdmlvclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdwb3BzdGF0ZScsIGZ1bmN0aW9uIChlKSB7XG4gICAgICBfa2V5ID0gZS5zdGF0ZSAmJiBlLnN0YXRlLmtleVxuICAgICAgdmFyIGN1cnJlbnQgPSB0aGlzJDEuY3VycmVudFxuICAgICAgdGhpcyQxLnRyYW5zaXRpb25UbyhnZXRMb2NhdGlvbih0aGlzJDEuYmFzZSksIGZ1bmN0aW9uIChuZXh0KSB7XG4gICAgICAgIGlmIChleHBlY3RTY3JvbGwpIHtcbiAgICAgICAgICB0aGlzJDEuaGFuZGxlU2Nyb2xsKG5leHQsIGN1cnJlbnQsIHRydWUpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSlcblxuICAgIGlmIChleHBlY3RTY3JvbGwpIHtcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHNhdmVTY3JvbGxQb3NpdGlvbihfa2V5KVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICBpZiAoIEhpc3RvcnkgKSBIVE1MNUhpc3RvcnkuX19wcm90b19fID0gSGlzdG9yeTtcbiAgSFRNTDVIaXN0b3J5LnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoIEhpc3RvcnkgJiYgSGlzdG9yeS5wcm90b3R5cGUgKTtcbiAgSFRNTDVIaXN0b3J5LnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IEhUTUw1SGlzdG9yeTtcblxuICBIVE1MNUhpc3RvcnkucHJvdG90eXBlLmdvID0gZnVuY3Rpb24gZ28gKG4pIHtcbiAgICB3aW5kb3cuaGlzdG9yeS5nbyhuKVxuICB9O1xuXG4gIEhUTUw1SGlzdG9yeS5wcm90b3R5cGUucHVzaCA9IGZ1bmN0aW9uIHB1c2ggKGxvY2F0aW9uKSB7XG4gICAgdmFyIHRoaXMkMSA9IHRoaXM7XG5cbiAgICB2YXIgY3VycmVudCA9IHRoaXMuY3VycmVudFxuICAgIHRoaXMudHJhbnNpdGlvblRvKGxvY2F0aW9uLCBmdW5jdGlvbiAocm91dGUpIHtcbiAgICAgIHB1c2hTdGF0ZShjbGVhblBhdGgodGhpcyQxLmJhc2UgKyByb3V0ZS5mdWxsUGF0aCkpXG4gICAgICB0aGlzJDEuaGFuZGxlU2Nyb2xsKHJvdXRlLCBjdXJyZW50LCBmYWxzZSlcbiAgICB9KVxuICB9O1xuXG4gIEhUTUw1SGlzdG9yeS5wcm90b3R5cGUucmVwbGFjZSA9IGZ1bmN0aW9uIHJlcGxhY2UgKGxvY2F0aW9uKSB7XG4gICAgdmFyIHRoaXMkMSA9IHRoaXM7XG5cbiAgICB2YXIgY3VycmVudCA9IHRoaXMuY3VycmVudFxuICAgIHRoaXMudHJhbnNpdGlvblRvKGxvY2F0aW9uLCBmdW5jdGlvbiAocm91dGUpIHtcbiAgICAgIHJlcGxhY2VTdGF0ZShjbGVhblBhdGgodGhpcyQxLmJhc2UgKyByb3V0ZS5mdWxsUGF0aCkpXG4gICAgICB0aGlzJDEuaGFuZGxlU2Nyb2xsKHJvdXRlLCBjdXJyZW50LCBmYWxzZSlcbiAgICB9KVxuICB9O1xuXG4gIEhUTUw1SGlzdG9yeS5wcm90b3R5cGUuZW5zdXJlVVJMID0gZnVuY3Rpb24gZW5zdXJlVVJMIChwdXNoKSB7XG4gICAgaWYgKGdldExvY2F0aW9uKHRoaXMuYmFzZSkgIT09IHRoaXMuY3VycmVudC5mdWxsUGF0aCkge1xuICAgICAgdmFyIGN1cnJlbnQgPSBjbGVhblBhdGgodGhpcy5iYXNlICsgdGhpcy5jdXJyZW50LmZ1bGxQYXRoKVxuICAgICAgcHVzaCA/IHB1c2hTdGF0ZShjdXJyZW50KSA6IHJlcGxhY2VTdGF0ZShjdXJyZW50KVxuICAgIH1cbiAgfTtcblxuICBIVE1MNUhpc3RvcnkucHJvdG90eXBlLmhhbmRsZVNjcm9sbCA9IGZ1bmN0aW9uIGhhbmRsZVNjcm9sbCAodG8sIGZyb20sIGlzUG9wKSB7XG4gICAgdmFyIHJvdXRlciA9IHRoaXMucm91dGVyXG4gICAgaWYgKCFyb3V0ZXIuYXBwKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB2YXIgYmVoYXZpb3IgPSByb3V0ZXIub3B0aW9ucy5zY3JvbGxCZWhhdmlvclxuICAgIGlmICghYmVoYXZpb3IpIHtcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBhc3NlcnQodHlwZW9mIGJlaGF2aW9yID09PSAnZnVuY3Rpb24nLCBcInNjcm9sbEJlaGF2aW9yIG11c3QgYmUgYSBmdW5jdGlvblwiKVxuXG4gICAgLy8gd2FpdCB1bnRpbCByZS1yZW5kZXIgZmluaXNoZXMgYmVmb3JlIHNjcm9sbGluZ1xuICAgIHJvdXRlci5hcHAuJG5leHRUaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBwb3NpdGlvbiA9IGdldFNjcm9sbFBvc2l0aW9uKF9rZXkpXG4gICAgICB2YXIgc2hvdWxkU2Nyb2xsID0gYmVoYXZpb3IodG8sIGZyb20sIGlzUG9wID8gcG9zaXRpb24gOiBudWxsKVxuICAgICAgaWYgKCFzaG91bGRTY3JvbGwpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgICB2YXIgaXNPYmplY3QgPSB0eXBlb2Ygc2hvdWxkU2Nyb2xsID09PSAnb2JqZWN0J1xuICAgICAgaWYgKGlzT2JqZWN0ICYmIHR5cGVvZiBzaG91bGRTY3JvbGwuc2VsZWN0b3IgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHZhciBlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2hvdWxkU2Nyb2xsLnNlbGVjdG9yKVxuICAgICAgICBpZiAoZWwpIHtcbiAgICAgICAgICBwb3NpdGlvbiA9IGdldEVsZW1lbnRQb3NpdGlvbihlbClcbiAgICAgICAgfSBlbHNlIGlmIChpc1ZhbGlkUG9zaXRpb24oc2hvdWxkU2Nyb2xsKSkge1xuICAgICAgICAgIHBvc2l0aW9uID0gbm9ybWFsaXplUG9zaXRpb24oc2hvdWxkU2Nyb2xsKVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGlzT2JqZWN0ICYmIGlzVmFsaWRQb3NpdGlvbihzaG91bGRTY3JvbGwpKSB7XG4gICAgICAgIHBvc2l0aW9uID0gbm9ybWFsaXplUG9zaXRpb24oc2hvdWxkU2Nyb2xsKVxuICAgICAgfVxuXG4gICAgICBpZiAocG9zaXRpb24pIHtcbiAgICAgICAgd2luZG93LnNjcm9sbFRvKHBvc2l0aW9uLngsIHBvc2l0aW9uLnkpXG4gICAgICB9XG4gICAgfSlcbiAgfTtcblxuICByZXR1cm4gSFRNTDVIaXN0b3J5O1xufShIaXN0b3J5KSk7XG5cbmZ1bmN0aW9uIGdldExvY2F0aW9uIChiYXNlKSB7XG4gIHZhciBwYXRoID0gd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lXG4gIGlmIChiYXNlICYmIHBhdGguaW5kZXhPZihiYXNlKSA9PT0gMCkge1xuICAgIHBhdGggPSBwYXRoLnNsaWNlKGJhc2UubGVuZ3RoKVxuICB9XG4gIHJldHVybiAocGF0aCB8fCAnLycpICsgd2luZG93LmxvY2F0aW9uLnNlYXJjaCArIHdpbmRvdy5sb2NhdGlvbi5oYXNoXG59XG5cbmZ1bmN0aW9uIHB1c2hTdGF0ZSAodXJsLCByZXBsYWNlKSB7XG4gIC8vIHRyeS4uLmNhdGNoIHRoZSBwdXNoU3RhdGUgY2FsbCB0byBnZXQgYXJvdW5kIFNhZmFyaVxuICAvLyBET00gRXhjZXB0aW9uIDE4IHdoZXJlIGl0IGxpbWl0cyB0byAxMDAgcHVzaFN0YXRlIGNhbGxzXG4gIHZhciBoaXN0b3J5ID0gd2luZG93Lmhpc3RvcnlcbiAgdHJ5IHtcbiAgICBpZiAocmVwbGFjZSkge1xuICAgICAgaGlzdG9yeS5yZXBsYWNlU3RhdGUoeyBrZXk6IF9rZXkgfSwgJycsIHVybClcbiAgICB9IGVsc2Uge1xuICAgICAgX2tleSA9IGdlbktleSgpXG4gICAgICBoaXN0b3J5LnB1c2hTdGF0ZSh7IGtleTogX2tleSB9LCAnJywgdXJsKVxuICAgIH1cbiAgICBzYXZlU2Nyb2xsUG9zaXRpb24oX2tleSlcbiAgfSBjYXRjaCAoZSkge1xuICAgIHdpbmRvdy5sb2NhdGlvbltyZXBsYWNlID8gJ2Fzc2lnbicgOiAncmVwbGFjZSddKHVybClcbiAgfVxufVxuXG5mdW5jdGlvbiByZXBsYWNlU3RhdGUgKHVybCkge1xuICBwdXNoU3RhdGUodXJsLCB0cnVlKVxufVxuXG4vKiAgKi9cblxuXG52YXIgSGFzaEhpc3RvcnkgPSAoZnVuY3Rpb24gKEhpc3RvcnkpIHtcbiAgZnVuY3Rpb24gSGFzaEhpc3RvcnkgKHJvdXRlciwgYmFzZSwgZmFsbGJhY2spIHtcbiAgICBIaXN0b3J5LmNhbGwodGhpcywgcm91dGVyLCBiYXNlKVxuXG4gICAgLy8gY2hlY2sgaGlzdG9yeSBmYWxsYmFjayBkZWVwbGlua2luZ1xuICAgIGlmIChmYWxsYmFjayAmJiB0aGlzLmNoZWNrRmFsbGJhY2soKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgZW5zdXJlU2xhc2goKVxuICB9XG5cbiAgaWYgKCBIaXN0b3J5ICkgSGFzaEhpc3RvcnkuX19wcm90b19fID0gSGlzdG9yeTtcbiAgSGFzaEhpc3RvcnkucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSggSGlzdG9yeSAmJiBIaXN0b3J5LnByb3RvdHlwZSApO1xuICBIYXNoSGlzdG9yeS5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBIYXNoSGlzdG9yeTtcblxuICBIYXNoSGlzdG9yeS5wcm90b3R5cGUuY2hlY2tGYWxsYmFjayA9IGZ1bmN0aW9uIGNoZWNrRmFsbGJhY2sgKCkge1xuICAgIHZhciBsb2NhdGlvbiA9IGdldExvY2F0aW9uKHRoaXMuYmFzZSlcbiAgICBpZiAoIS9eXFwvIy8udGVzdChsb2NhdGlvbikpIHtcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZXBsYWNlKFxuICAgICAgICBjbGVhblBhdGgodGhpcy5iYXNlICsgJy8jJyArIGxvY2F0aW9uKVxuICAgICAgKVxuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG4gIH07XG5cbiAgSGFzaEhpc3RvcnkucHJvdG90eXBlLm9uSGFzaENoYW5nZSA9IGZ1bmN0aW9uIG9uSGFzaENoYW5nZSAoKSB7XG4gICAgaWYgKCFlbnN1cmVTbGFzaCgpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgdGhpcy50cmFuc2l0aW9uVG8oZ2V0SGFzaCgpLCBmdW5jdGlvbiAocm91dGUpIHtcbiAgICAgIHJlcGxhY2VIYXNoKHJvdXRlLmZ1bGxQYXRoKVxuICAgIH0pXG4gIH07XG5cbiAgSGFzaEhpc3RvcnkucHJvdG90eXBlLnB1c2ggPSBmdW5jdGlvbiBwdXNoIChsb2NhdGlvbikge1xuICAgIHRoaXMudHJhbnNpdGlvblRvKGxvY2F0aW9uLCBmdW5jdGlvbiAocm91dGUpIHtcbiAgICAgIHB1c2hIYXNoKHJvdXRlLmZ1bGxQYXRoKVxuICAgIH0pXG4gIH07XG5cbiAgSGFzaEhpc3RvcnkucHJvdG90eXBlLnJlcGxhY2UgPSBmdW5jdGlvbiByZXBsYWNlIChsb2NhdGlvbikge1xuICAgIHRoaXMudHJhbnNpdGlvblRvKGxvY2F0aW9uLCBmdW5jdGlvbiAocm91dGUpIHtcbiAgICAgIHJlcGxhY2VIYXNoKHJvdXRlLmZ1bGxQYXRoKVxuICAgIH0pXG4gIH07XG5cbiAgSGFzaEhpc3RvcnkucHJvdG90eXBlLmdvID0gZnVuY3Rpb24gZ28gKG4pIHtcbiAgICB3aW5kb3cuaGlzdG9yeS5nbyhuKVxuICB9O1xuXG4gIEhhc2hIaXN0b3J5LnByb3RvdHlwZS5lbnN1cmVVUkwgPSBmdW5jdGlvbiBlbnN1cmVVUkwgKHB1c2gpIHtcbiAgICB2YXIgY3VycmVudCA9IHRoaXMuY3VycmVudC5mdWxsUGF0aFxuICAgIGlmIChnZXRIYXNoKCkgIT09IGN1cnJlbnQpIHtcbiAgICAgIHB1c2ggPyBwdXNoSGFzaChjdXJyZW50KSA6IHJlcGxhY2VIYXNoKGN1cnJlbnQpXG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBIYXNoSGlzdG9yeTtcbn0oSGlzdG9yeSkpO1xuXG5mdW5jdGlvbiBlbnN1cmVTbGFzaCAoKSB7XG4gIHZhciBwYXRoID0gZ2V0SGFzaCgpXG4gIGlmIChwYXRoLmNoYXJBdCgwKSA9PT0gJy8nKSB7XG4gICAgcmV0dXJuIHRydWVcbiAgfVxuICByZXBsYWNlSGFzaCgnLycgKyBwYXRoKVxuICByZXR1cm4gZmFsc2Vcbn1cblxuZnVuY3Rpb24gZ2V0SGFzaCAoKSB7XG4gIC8vIFdlIGNhbid0IHVzZSB3aW5kb3cubG9jYXRpb24uaGFzaCBoZXJlIGJlY2F1c2UgaXQncyBub3RcbiAgLy8gY29uc2lzdGVudCBhY3Jvc3MgYnJvd3NlcnMgLSBGaXJlZm94IHdpbGwgcHJlLWRlY29kZSBpdCFcbiAgdmFyIGhyZWYgPSB3aW5kb3cubG9jYXRpb24uaHJlZlxuICB2YXIgaW5kZXggPSBocmVmLmluZGV4T2YoJyMnKVxuICByZXR1cm4gaW5kZXggPT09IC0xID8gJycgOiBocmVmLnNsaWNlKGluZGV4ICsgMSlcbn1cblxuZnVuY3Rpb24gcHVzaEhhc2ggKHBhdGgpIHtcbiAgd2luZG93LmxvY2F0aW9uLmhhc2ggPSBwYXRoXG59XG5cbmZ1bmN0aW9uIHJlcGxhY2VIYXNoIChwYXRoKSB7XG4gIHZhciBpID0gd2luZG93LmxvY2F0aW9uLmhyZWYuaW5kZXhPZignIycpXG4gIHdpbmRvdy5sb2NhdGlvbi5yZXBsYWNlKFxuICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmLnNsaWNlKDAsIGkgPj0gMCA/IGkgOiAwKSArICcjJyArIHBhdGhcbiAgKVxufVxuXG4vKiAgKi9cblxuXG52YXIgQWJzdHJhY3RIaXN0b3J5ID0gKGZ1bmN0aW9uIChIaXN0b3J5KSB7XG4gIGZ1bmN0aW9uIEFic3RyYWN0SGlzdG9yeSAocm91dGVyKSB7XG4gICAgSGlzdG9yeS5jYWxsKHRoaXMsIHJvdXRlcilcbiAgICB0aGlzLnN0YWNrID0gW11cbiAgICB0aGlzLmluZGV4ID0gLTFcbiAgfVxuXG4gIGlmICggSGlzdG9yeSApIEFic3RyYWN0SGlzdG9yeS5fX3Byb3RvX18gPSBIaXN0b3J5O1xuICBBYnN0cmFjdEhpc3RvcnkucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSggSGlzdG9yeSAmJiBIaXN0b3J5LnByb3RvdHlwZSApO1xuICBBYnN0cmFjdEhpc3RvcnkucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gQWJzdHJhY3RIaXN0b3J5O1xuXG4gIEFic3RyYWN0SGlzdG9yeS5wcm90b3R5cGUucHVzaCA9IGZ1bmN0aW9uIHB1c2ggKGxvY2F0aW9uKSB7XG4gICAgdmFyIHRoaXMkMSA9IHRoaXM7XG5cbiAgICB0aGlzLnRyYW5zaXRpb25Ubyhsb2NhdGlvbiwgZnVuY3Rpb24gKHJvdXRlKSB7XG4gICAgICB0aGlzJDEuc3RhY2sgPSB0aGlzJDEuc3RhY2suc2xpY2UoMCwgdGhpcyQxLmluZGV4ICsgMSkuY29uY2F0KHJvdXRlKVxuICAgICAgdGhpcyQxLmluZGV4KytcbiAgICB9KVxuICB9O1xuXG4gIEFic3RyYWN0SGlzdG9yeS5wcm90b3R5cGUucmVwbGFjZSA9IGZ1bmN0aW9uIHJlcGxhY2UgKGxvY2F0aW9uKSB7XG4gICAgdmFyIHRoaXMkMSA9IHRoaXM7XG5cbiAgICB0aGlzLnRyYW5zaXRpb25Ubyhsb2NhdGlvbiwgZnVuY3Rpb24gKHJvdXRlKSB7XG4gICAgICB0aGlzJDEuc3RhY2sgPSB0aGlzJDEuc3RhY2suc2xpY2UoMCwgdGhpcyQxLmluZGV4KS5jb25jYXQocm91dGUpXG4gICAgfSlcbiAgfTtcblxuICBBYnN0cmFjdEhpc3RvcnkucHJvdG90eXBlLmdvID0gZnVuY3Rpb24gZ28gKG4pIHtcbiAgICB2YXIgdGhpcyQxID0gdGhpcztcblxuICAgIHZhciB0YXJnZXRJbmRleCA9IHRoaXMuaW5kZXggKyBuXG4gICAgaWYgKHRhcmdldEluZGV4IDwgMCB8fCB0YXJnZXRJbmRleCA+PSB0aGlzLnN0YWNrLmxlbmd0aCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIHZhciByb3V0ZSA9IHRoaXMuc3RhY2tbdGFyZ2V0SW5kZXhdXG4gICAgdGhpcy5jb25maXJtVHJhbnNpdGlvbihyb3V0ZSwgZnVuY3Rpb24gKCkge1xuICAgICAgdGhpcyQxLmluZGV4ID0gdGFyZ2V0SW5kZXhcbiAgICAgIHRoaXMkMS51cGRhdGVSb3V0ZShyb3V0ZSlcbiAgICB9KVxuICB9O1xuXG4gIEFic3RyYWN0SGlzdG9yeS5wcm90b3R5cGUuZW5zdXJlVVJMID0gZnVuY3Rpb24gZW5zdXJlVVJMICgpIHtcbiAgICAvLyBub29wXG4gIH07XG5cbiAgcmV0dXJuIEFic3RyYWN0SGlzdG9yeTtcbn0oSGlzdG9yeSkpO1xuXG4vKiAgKi9cblxudmFyIFZ1ZVJvdXRlciA9IGZ1bmN0aW9uIFZ1ZVJvdXRlciAob3B0aW9ucykge1xuICBpZiAoIG9wdGlvbnMgPT09IHZvaWQgMCApIG9wdGlvbnMgPSB7fTtcblxuICB0aGlzLmFwcCA9IG51bGxcbiAgdGhpcy5vcHRpb25zID0gb3B0aW9uc1xuICB0aGlzLmJlZm9yZUhvb2tzID0gW11cbiAgdGhpcy5hZnRlckhvb2tzID0gW11cbiAgdGhpcy5tYXRjaCA9IGNyZWF0ZU1hdGNoZXIob3B0aW9ucy5yb3V0ZXMgfHwgW10pXG5cbiAgdmFyIG1vZGUgPSBvcHRpb25zLm1vZGUgfHwgJ2hhc2gnXG4gIHRoaXMuZmFsbGJhY2sgPSBtb2RlID09PSAnaGlzdG9yeScgJiYgIXN1cHBvcnRzSGlzdG9yeVxuICBpZiAodGhpcy5mYWxsYmFjaykge1xuICAgIG1vZGUgPSAnaGFzaCdcbiAgfVxuICBpZiAoIWluQnJvd3Nlcikge1xuICAgIG1vZGUgPSAnYWJzdHJhY3QnXG4gIH1cbiAgdGhpcy5tb2RlID0gbW9kZVxuXG4gIHN3aXRjaCAobW9kZSkge1xuICAgIGNhc2UgJ2hpc3RvcnknOlxuICAgICAgdGhpcy5oaXN0b3J5ID0gbmV3IEhUTUw1SGlzdG9yeSh0aGlzLCBvcHRpb25zLmJhc2UpXG4gICAgICBicmVha1xuICAgIGNhc2UgJ2hhc2gnOlxuICAgICAgdGhpcy5oaXN0b3J5ID0gbmV3IEhhc2hIaXN0b3J5KHRoaXMsIG9wdGlvbnMuYmFzZSwgdGhpcy5mYWxsYmFjaylcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAnYWJzdHJhY3QnOlxuICAgICAgdGhpcy5oaXN0b3J5ID0gbmV3IEFic3RyYWN0SGlzdG9yeSh0aGlzKVxuICAgICAgYnJlYWtcbiAgICBkZWZhdWx0OlxuICAgICAgYXNzZXJ0KGZhbHNlLCAoXCJpbnZhbGlkIG1vZGU6IFwiICsgbW9kZSkpXG4gIH1cbn07XG5cbnZhciBwcm90b3R5cGVBY2Nlc3NvcnMgPSB7IGN1cnJlbnRSb3V0ZToge30gfTtcblxucHJvdG90eXBlQWNjZXNzb3JzLmN1cnJlbnRSb3V0ZS5nZXQgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB0aGlzLmhpc3RvcnkgJiYgdGhpcy5oaXN0b3J5LmN1cnJlbnRcbn07XG5cblZ1ZVJvdXRlci5wcm90b3R5cGUuaW5pdCA9IGZ1bmN0aW9uIGluaXQgKGFwcCAvKiBWdWUgY29tcG9uZW50IGluc3RhbmNlICovKSB7XG4gICAgdmFyIHRoaXMkMSA9IHRoaXM7XG5cbiAgYXNzZXJ0KFxuICAgIGluc3RhbGwuaW5zdGFsbGVkLFxuICAgIFwibm90IGluc3RhbGxlZC4gTWFrZSBzdXJlIHRvIGNhbGwgYFZ1ZS51c2UoVnVlUm91dGVyKWAgXCIgK1xuICAgIFwiYmVmb3JlIGNyZWF0aW5nIHJvb3QgaW5zdGFuY2UuXCJcbiAgKVxuXG4gIHRoaXMuYXBwID0gYXBwXG5cbiAgdmFyIGhpc3RvcnkgPSB0aGlzLmhpc3RvcnlcblxuICBpZiAoaGlzdG9yeSBpbnN0YW5jZW9mIEhUTUw1SGlzdG9yeSkge1xuICAgIGhpc3RvcnkudHJhbnNpdGlvblRvKGdldExvY2F0aW9uKGhpc3RvcnkuYmFzZSkpXG4gIH0gZWxzZSBpZiAoaGlzdG9yeSBpbnN0YW5jZW9mIEhhc2hIaXN0b3J5KSB7XG4gICAgaGlzdG9yeS50cmFuc2l0aW9uVG8oZ2V0SGFzaCgpLCBmdW5jdGlvbiAoKSB7XG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignaGFzaGNoYW5nZScsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaGlzdG9yeS5vbkhhc2hDaGFuZ2UoKVxuICAgICAgfSlcbiAgICB9KVxuICB9XG5cbiAgaGlzdG9yeS5saXN0ZW4oZnVuY3Rpb24gKHJvdXRlKSB7XG4gICAgdGhpcyQxLmFwcC5fcm91dGUgPSByb3V0ZVxuICB9KVxufTtcblxuVnVlUm91dGVyLnByb3RvdHlwZS5iZWZvcmVFYWNoID0gZnVuY3Rpb24gYmVmb3JlRWFjaCAoZm4pIHtcbiAgdGhpcy5iZWZvcmVIb29rcy5wdXNoKGZuKVxufTtcblxuVnVlUm91dGVyLnByb3RvdHlwZS5hZnRlckVhY2ggPSBmdW5jdGlvbiBhZnRlckVhY2ggKGZuKSB7XG4gIHRoaXMuYWZ0ZXJIb29rcy5wdXNoKGZuKVxufTtcblxuVnVlUm91dGVyLnByb3RvdHlwZS5wdXNoID0gZnVuY3Rpb24gcHVzaCAobG9jYXRpb24pIHtcbiAgdGhpcy5oaXN0b3J5LnB1c2gobG9jYXRpb24pXG59O1xuXG5WdWVSb3V0ZXIucHJvdG90eXBlLnJlcGxhY2UgPSBmdW5jdGlvbiByZXBsYWNlIChsb2NhdGlvbikge1xuICB0aGlzLmhpc3RvcnkucmVwbGFjZShsb2NhdGlvbilcbn07XG5cblZ1ZVJvdXRlci5wcm90b3R5cGUuZ28gPSBmdW5jdGlvbiBnbyAobikge1xuICB0aGlzLmhpc3RvcnkuZ28obilcbn07XG5cblZ1ZVJvdXRlci5wcm90b3R5cGUuYmFjayA9IGZ1bmN0aW9uIGJhY2sgKCkge1xuICB0aGlzLmdvKC0xKVxufTtcblxuVnVlUm91dGVyLnByb3RvdHlwZS5mb3J3YXJkID0gZnVuY3Rpb24gZm9yd2FyZCAoKSB7XG4gIHRoaXMuZ28oMSlcbn07XG5cblZ1ZVJvdXRlci5wcm90b3R5cGUuZ2V0TWF0Y2hlZENvbXBvbmVudHMgPSBmdW5jdGlvbiBnZXRNYXRjaGVkQ29tcG9uZW50cyAoKSB7XG4gIGlmICghdGhpcy5jdXJyZW50Um91dGUpIHtcbiAgICByZXR1cm4gW11cbiAgfVxuICByZXR1cm4gW10uY29uY2F0LmFwcGx5KFtdLCB0aGlzLmN1cnJlbnRSb3V0ZS5tYXRjaGVkLm1hcChmdW5jdGlvbiAobSkge1xuICAgIHJldHVybiBPYmplY3Qua2V5cyhtLmNvbXBvbmVudHMpLm1hcChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICByZXR1cm4gbS5jb21wb25lbnRzW2tleV1cbiAgICB9KVxuICB9KSlcbn07XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKCBWdWVSb3V0ZXIucHJvdG90eXBlLCBwcm90b3R5cGVBY2Nlc3NvcnMgKTtcblxuVnVlUm91dGVyLmluc3RhbGwgPSBpbnN0YWxsXG5cbmlmIChpbkJyb3dzZXIgJiYgd2luZG93LlZ1ZSkge1xuICB3aW5kb3cuVnVlLnVzZShWdWVSb3V0ZXIpXG59XG5cbnJldHVybiBWdWVSb3V0ZXI7XG5cbn0pKSk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vRTovVGVzdFdvcmsvdnVlL34vdnVlLXJvdXRlci9kaXN0L3Z1ZS1yb3V0ZXIuanMiLCIvKipcclxuICog5o+P6L+wOiDot6/nlLHphY3nva7mlofku7ZcclxuICog54mI5p2DOiBDb3B5cmlnaHQgKGMpIDIwMTZcclxuICog5YWs5Y+4OiDmt7HlnLPluILmmIrmmajnp5HmioDlvIDlj5HmnInpmZDlhazlj7hcclxuICog5L2c6ICFOiDpmYjlhYNcclxuICog54mI5pysOiAxLjBcclxuICog5Yib5bu65pel5pyfOiAyMDE2LzExLzIzXHJcbiAqIOWIm+W7uuaXtumXtDogMTA6MTFcclxuICovXHJcbmxldCBJbmRleFZpZXcgPSByZXF1aXJlKFwiLi92aWV3cy9pbmRleC52dWVcIik7ICAgICAgICAgICAvLyDlvJXlhaVpbmRleFZ1ZVxyXG5pbXBvcnQgVXNlciBmcm9tIFwiLi9zY3JpcHRzL3VzZXJcIjtcclxuXHJcbi8vIOWumuS5iei3r+eUsVxyXG5jb25zdCByb3V0ZXMgPSBbXHJcbiAgICB7XHJcbiAgICAgICAgbmFtZTogXCJmb29cIixcclxuICAgICAgICBwYXRoOiAnL2ZvbycsXHJcbiAgICAgICAgY29tcG9uZW50OiB7dGVtcGxhdGU6ICc8ZGl2PmZvbzwvZGl2Pid9XHJcbiAgICB9LCB7XHJcbiAgICAgICAgcGF0aDogJy9pbmRleCcsXHJcbiAgICAgICAgY29tcG9uZW50OiBJbmRleFZpZXdcclxuICAgIH1cclxuICAgICwge1xyXG4gICAgICAgIHBhdGg6ICcvdXNlcicsXHJcbiAgICAgICAgY29tcG9uZW50OiBVc2VyXHJcbiAgICB9XHJcbl07XHJcblxyXG5leHBvcnQgZGVmYXVsdCByb3V0ZXM7XHJcbmV4cG9ydCB7cm91dGVzfTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9FOi9UZXN0V29yay92dWUvc3JjL3JvdXRlci5qcyIsIi8qKlxyXG4gKiDmj4/ov7A6XHJcbiAqIOeJiOadgzogQ29weXJpZ2h0IChjKSAyMDE2XHJcbiAqIOWFrOWPuDog5rex5Zyz5biC5piK5pmo56eR5oqA5byA5Y+R5pyJ6ZmQ5YWs5Y+4XHJcbiAqIOS9nOiAhTog6ZmI5YWDXHJcbiAqIOeJiOacrDogMS4wXHJcbiAqIOWIm+W7uuaXpeacnzogMjAxNi8xMS8yM1xyXG4gKiDliJvlu7rml7bpl7Q6IDE2OjI3XHJcbiAqL1xyXG5cclxudmFyIFVzZXJWaWV3ID0gcmVxdWlyZShcIi4uL3ZpZXdzL3VzZXIudnVlXCIpO1xyXG5cclxuVXNlclZpZXcuZGF0YSA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgbmFtZTogXCJVc2VyVmlld1wiXHJcbiAgICB9XHJcbn07XHJcblVzZXJWaWV3LmNyZWF0ZWQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBjb25zb2xlLmxvZygnPT09PT09PT09PT09PT09PVVzZXJWaWV3IENyZWF0ZWQ9PT09PT09PT09PT09PT09Jyk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBVc2VyVmlldztcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9FOi9UZXN0V29yay92dWUvc3JjL3NjcmlwdHMvdXNlci5qcyIsInZhciBfX3Z1ZV9leHBvcnRzX18sIF9fdnVlX29wdGlvbnNfX1xudmFyIF9fdnVlX3N0eWxlc19fID0ge31cblxuLyogc3R5bGVzICovXG5yZXF1aXJlKFwiISF2dWUtc3R5bGUtbG9hZGVyIWNzcy1sb2FkZXI/c291cmNlTWFwIXZ1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyP2lkPWRhdGEtdi1hYjc1MWMzMiF2dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXN0eWxlcyZpbmRleD0wIS4vdXNlci52dWVcIilcblxuLyogdGVtcGxhdGUgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9fID0gcmVxdWlyZShcIiEhdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/aWQ9ZGF0YS12LWFiNzUxYzMyIXZ1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3VzZXIudnVlXCIpXG5fX3Z1ZV9vcHRpb25zX18gPSBfX3Z1ZV9leHBvcnRzX18gPSBfX3Z1ZV9leHBvcnRzX18gfHwge31cbmlmIChcbiAgdHlwZW9mIF9fdnVlX2V4cG9ydHNfXy5kZWZhdWx0ID09PSBcIm9iamVjdFwiIHx8XG4gIHR5cGVvZiBfX3Z1ZV9leHBvcnRzX18uZGVmYXVsdCA9PT0gXCJmdW5jdGlvblwiXG4pIHtcbmlmIChPYmplY3Qua2V5cyhfX3Z1ZV9leHBvcnRzX18pLnNvbWUoZnVuY3Rpb24gKGtleSkgeyByZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkgIT09IFwiX19lc01vZHVsZVwiIH0pKSB7Y29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuX192dWVfb3B0aW9uc19fID0gX192dWVfZXhwb3J0c19fID0gX192dWVfZXhwb3J0c19fLmRlZmF1bHRcbn1cbmlmICh0eXBlb2YgX192dWVfb3B0aW9uc19fID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgX192dWVfb3B0aW9uc19fID0gX192dWVfb3B0aW9uc19fLm9wdGlvbnNcbn1cbl9fdnVlX29wdGlvbnNfXy5fX2ZpbGUgPSBcIkU6XFxcXFRlc3RXb3JrXFxcXHZ1ZVxcXFxzcmNcXFxcdmlld3NcXFxcdXNlci52dWVcIlxuX192dWVfb3B0aW9uc19fLnJlbmRlciA9IF9fdnVlX3RlbXBsYXRlX18ucmVuZGVyXG5fX3Z1ZV9vcHRpb25zX18uc3RhdGljUmVuZGVyRm5zID0gX192dWVfdGVtcGxhdGVfXy5zdGF0aWNSZW5kZXJGbnNcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LWFiNzUxYzMyXCIsIF9fdnVlX29wdGlvbnNfXylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LWFiNzUxYzMyXCIsIF9fdnVlX29wdGlvbnNfXylcbiAgfVxufSkoKX1cbmlmIChfX3Z1ZV9vcHRpb25zX18uZnVuY3Rpb25hbCkge2NvbnNvbGUuZXJyb3IoXCJbdnVlLWxvYWRlcl0gdXNlci52dWU6IGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhcmUgbm90IHN1cHBvcnRlZCBhbmQgc2hvdWxkIGJlIGRlZmluZWQgaW4gcGxhaW4ganMgZmlsZXMgdXNpbmcgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbm1vZHVsZS5leHBvcnRzID0gX192dWVfZXhwb3J0c19fXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy92aWV3cy91c2VyLnZ1ZVxuLy8gbW9kdWxlIGlkID0gNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LWFiNzUxYzMyIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi91c2VyLnZ1ZVwiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9hZGRTdHlsZXMuanNcIikoY29udGVudCwge30pO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG5cdC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdGlmKCFjb250ZW50LmxvY2Fscykge1xuXHRcdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtYWI3NTFjMzIhLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3VzZXIudnVlXCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtYWI3NTFjMzIhLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3VzZXIudnVlXCIpO1xuXHRcdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cdFx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdFx0fSk7XG5cdH1cblx0Ly8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLXN0eWxlLWxvYWRlciEuL34vY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9+L3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi1hYjc1MWMzMiEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3NyYy92aWV3cy91c2VyLnZ1ZVxuLy8gbW9kdWxlIGlkID0gNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcbmgxIHtcXG4gICAgY29sb3I6ICNGMDA7XFxufVxcblwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCIvLi9zcmMvdmlld3MvdXNlci52dWU/ZGY1MDQ1N2FcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIjtBQUtBO0lBQ0EsWUFBQTtDQUNBXCIsXCJmaWxlXCI6XCJ1c2VyLnZ1ZVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI8dGVtcGxhdGU+XFxyXFxuICAgIDxoMT5IZWxsbyB7e25hbWV9fTwvaDE+XFxyXFxuPC90ZW1wbGF0ZT5cXHJcXG5cXHJcXG48c3R5bGU+XFxyXFxuICAgIGgxIHtcXHJcXG4gICAgICAgIGNvbG9yOiAjRjAwO1xcclxcbiAgICB9XFxyXFxuPC9zdHlsZT5cIl0sXCJzb3VyY2VSb290XCI6XCJ3ZWJwYWNrOi8vXCJ9XSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL34vdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LWFiNzUxYzMyIS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vc3JjL3ZpZXdzL3VzZXIudnVlXG4vLyBtb2R1bGUgaWQgPSA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qXHJcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcclxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXHJcbiovXHJcbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXHJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKSB7XHJcblx0dmFyIGxpc3QgPSBbXTtcclxuXHJcblx0Ly8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xyXG5cdGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcclxuXHRcdHZhciByZXN1bHQgPSBbXTtcclxuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdHZhciBpdGVtID0gdGhpc1tpXTtcclxuXHRcdFx0aWYoaXRlbVsyXSkge1xyXG5cdFx0XHRcdHJlc3VsdC5wdXNoKFwiQG1lZGlhIFwiICsgaXRlbVsyXSArIFwie1wiICsgaXRlbVsxXSArIFwifVwiKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRyZXN1bHQucHVzaChpdGVtWzFdKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHJlc3VsdC5qb2luKFwiXCIpO1xyXG5cdH07XHJcblxyXG5cdC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XHJcblx0bGlzdC5pID0gZnVuY3Rpb24obW9kdWxlcywgbWVkaWFRdWVyeSkge1xyXG5cdFx0aWYodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpXHJcblx0XHRcdG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIFwiXCJdXTtcclxuXHRcdHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XHJcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHR2YXIgaWQgPSB0aGlzW2ldWzBdO1xyXG5cdFx0XHRpZih0eXBlb2YgaWQgPT09IFwibnVtYmVyXCIpXHJcblx0XHRcdFx0YWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xyXG5cdFx0fVxyXG5cdFx0Zm9yKGkgPSAwOyBpIDwgbW9kdWxlcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHR2YXIgaXRlbSA9IG1vZHVsZXNbaV07XHJcblx0XHRcdC8vIHNraXAgYWxyZWFkeSBpbXBvcnRlZCBtb2R1bGVcclxuXHRcdFx0Ly8gdGhpcyBpbXBsZW1lbnRhdGlvbiBpcyBub3QgMTAwJSBwZXJmZWN0IGZvciB3ZWlyZCBtZWRpYSBxdWVyeSBjb21iaW5hdGlvbnNcclxuXHRcdFx0Ly8gIHdoZW4gYSBtb2R1bGUgaXMgaW1wb3J0ZWQgbXVsdGlwbGUgdGltZXMgd2l0aCBkaWZmZXJlbnQgbWVkaWEgcXVlcmllcy5cclxuXHRcdFx0Ly8gIEkgaG9wZSB0aGlzIHdpbGwgbmV2ZXIgb2NjdXIgKEhleSB0aGlzIHdheSB3ZSBoYXZlIHNtYWxsZXIgYnVuZGxlcylcclxuXHRcdFx0aWYodHlwZW9mIGl0ZW1bMF0gIT09IFwibnVtYmVyXCIgfHwgIWFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcclxuXHRcdFx0XHRpZihtZWRpYVF1ZXJ5ICYmICFpdGVtWzJdKSB7XHJcblx0XHRcdFx0XHRpdGVtWzJdID0gbWVkaWFRdWVyeTtcclxuXHRcdFx0XHR9IGVsc2UgaWYobWVkaWFRdWVyeSkge1xyXG5cdFx0XHRcdFx0aXRlbVsyXSA9IFwiKFwiICsgaXRlbVsyXSArIFwiKSBhbmQgKFwiICsgbWVkaWFRdWVyeSArIFwiKVwiO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRsaXN0LnB1c2goaXRlbSk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9O1xyXG5cdHJldHVybiBsaXN0O1xyXG59O1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9FOi9UZXN0V29yay92dWUvfi9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qcyIsIi8qXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG5cdEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG52YXIgc3R5bGVzSW5Eb20gPSB7fSxcblx0bWVtb2l6ZSA9IGZ1bmN0aW9uKGZuKSB7XG5cdFx0dmFyIG1lbW87XG5cdFx0cmV0dXJuIGZ1bmN0aW9uICgpIHtcblx0XHRcdGlmICh0eXBlb2YgbWVtbyA9PT0gXCJ1bmRlZmluZWRcIikgbWVtbyA9IGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cdFx0XHRyZXR1cm4gbWVtbztcblx0XHR9O1xuXHR9LFxuXHRpc09sZElFID0gbWVtb2l6ZShmdW5jdGlvbigpIHtcblx0XHRyZXR1cm4gL21zaWUgWzYtOV1cXGIvLnRlc3Qod2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKSk7XG5cdH0pLFxuXHRnZXRIZWFkRWxlbWVudCA9IG1lbW9pemUoZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiBkb2N1bWVudC5oZWFkIHx8IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiaGVhZFwiKVswXTtcblx0fSksXG5cdHNpbmdsZXRvbkVsZW1lbnQgPSBudWxsLFxuXHRzaW5nbGV0b25Db3VudGVyID0gMCxcblx0c3R5bGVFbGVtZW50c0luc2VydGVkQXRUb3AgPSBbXTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihsaXN0LCBvcHRpb25zKSB7XG5cdGlmKHR5cGVvZiBERUJVRyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBERUJVRykge1xuXHRcdGlmKHR5cGVvZiBkb2N1bWVudCAhPT0gXCJvYmplY3RcIikgdGhyb3cgbmV3IEVycm9yKFwiVGhlIHN0eWxlLWxvYWRlciBjYW5ub3QgYmUgdXNlZCBpbiBhIG5vbi1icm93c2VyIGVudmlyb25tZW50XCIpO1xuXHR9XG5cblx0b3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cdC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuXHQvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cdGlmICh0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gPT09IFwidW5kZWZpbmVkXCIpIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuXG5cdC8vIEJ5IGRlZmF1bHQsIGFkZCA8c3R5bGU+IHRhZ3MgdG8gdGhlIGJvdHRvbSBvZiA8aGVhZD4uXG5cdGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJ1bmRlZmluZWRcIikgb3B0aW9ucy5pbnNlcnRBdCA9IFwiYm90dG9tXCI7XG5cblx0dmFyIHN0eWxlcyA9IGxpc3RUb1N0eWxlcyhsaXN0KTtcblx0YWRkU3R5bGVzVG9Eb20oc3R5bGVzLCBvcHRpb25zKTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcblx0XHR2YXIgbWF5UmVtb3ZlID0gW107XG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcblx0XHRcdGRvbVN0eWxlLnJlZnMtLTtcblx0XHRcdG1heVJlbW92ZS5wdXNoKGRvbVN0eWxlKTtcblx0XHR9XG5cdFx0aWYobmV3TGlzdCkge1xuXHRcdFx0dmFyIG5ld1N0eWxlcyA9IGxpc3RUb1N0eWxlcyhuZXdMaXN0KTtcblx0XHRcdGFkZFN0eWxlc1RvRG9tKG5ld1N0eWxlcywgb3B0aW9ucyk7XG5cdFx0fVxuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBtYXlSZW1vdmUubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBkb21TdHlsZSA9IG1heVJlbW92ZVtpXTtcblx0XHRcdGlmKGRvbVN0eWxlLnJlZnMgPT09IDApIHtcblx0XHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKVxuXHRcdFx0XHRcdGRvbVN0eWxlLnBhcnRzW2pdKCk7XG5cdFx0XHRcdGRlbGV0ZSBzdHlsZXNJbkRvbVtkb21TdHlsZS5pZF07XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xufVxuXG5mdW5jdGlvbiBhZGRTdHlsZXNUb0RvbShzdHlsZXMsIG9wdGlvbnMpIHtcblx0Zm9yKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xuXHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuXHRcdGlmKGRvbVN0eWxlKSB7XG5cdFx0XHRkb21TdHlsZS5yZWZzKys7XG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0ZG9tU3R5bGUucGFydHNbal0oaXRlbS5wYXJ0c1tqXSk7XG5cdFx0XHR9XG5cdFx0XHRmb3IoOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRkb21TdHlsZS5wYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0dmFyIHBhcnRzID0gW107XG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRwYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcblx0XHRcdH1cblx0XHRcdHN0eWxlc0luRG9tW2l0ZW0uaWRdID0ge2lkOiBpdGVtLmlkLCByZWZzOiAxLCBwYXJ0czogcGFydHN9O1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBsaXN0VG9TdHlsZXMobGlzdCkge1xuXHR2YXIgc3R5bGVzID0gW107XG5cdHZhciBuZXdTdHlsZXMgPSB7fTtcblx0Zm9yKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgaXRlbSA9IGxpc3RbaV07XG5cdFx0dmFyIGlkID0gaXRlbVswXTtcblx0XHR2YXIgY3NzID0gaXRlbVsxXTtcblx0XHR2YXIgbWVkaWEgPSBpdGVtWzJdO1xuXHRcdHZhciBzb3VyY2VNYXAgPSBpdGVtWzNdO1xuXHRcdHZhciBwYXJ0ID0ge2NzczogY3NzLCBtZWRpYTogbWVkaWEsIHNvdXJjZU1hcDogc291cmNlTWFwfTtcblx0XHRpZighbmV3U3R5bGVzW2lkXSlcblx0XHRcdHN0eWxlcy5wdXNoKG5ld1N0eWxlc1tpZF0gPSB7aWQ6IGlkLCBwYXJ0czogW3BhcnRdfSk7XG5cdFx0ZWxzZVxuXHRcdFx0bmV3U3R5bGVzW2lkXS5wYXJ0cy5wdXNoKHBhcnQpO1xuXHR9XG5cdHJldHVybiBzdHlsZXM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBzdHlsZUVsZW1lbnQpIHtcblx0dmFyIGhlYWQgPSBnZXRIZWFkRWxlbWVudCgpO1xuXHR2YXIgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AgPSBzdHlsZUVsZW1lbnRzSW5zZXJ0ZWRBdFRvcFtzdHlsZUVsZW1lbnRzSW5zZXJ0ZWRBdFRvcC5sZW5ndGggLSAxXTtcblx0aWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwidG9wXCIpIHtcblx0XHRpZighbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3ApIHtcblx0XHRcdGhlYWQuaW5zZXJ0QmVmb3JlKHN0eWxlRWxlbWVudCwgaGVhZC5maXJzdENoaWxkKTtcblx0XHR9IGVsc2UgaWYobGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpIHtcblx0XHRcdGhlYWQuaW5zZXJ0QmVmb3JlKHN0eWxlRWxlbWVudCwgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRoZWFkLmFwcGVuZENoaWxkKHN0eWxlRWxlbWVudCk7XG5cdFx0fVxuXHRcdHN0eWxlRWxlbWVudHNJbnNlcnRlZEF0VG9wLnB1c2goc3R5bGVFbGVtZW50KTtcblx0fSBlbHNlIGlmIChvcHRpb25zLmluc2VydEF0ID09PSBcImJvdHRvbVwiKSB7XG5cdFx0aGVhZC5hcHBlbmRDaGlsZChzdHlsZUVsZW1lbnQpO1xuXHR9IGVsc2Uge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgdmFsdWUgZm9yIHBhcmFtZXRlciAnaW5zZXJ0QXQnLiBNdXN0IGJlICd0b3AnIG9yICdib3R0b20nLlwiKTtcblx0fVxufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG5cdHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG5cdHZhciBpZHggPSBzdHlsZUVsZW1lbnRzSW5zZXJ0ZWRBdFRvcC5pbmRleE9mKHN0eWxlRWxlbWVudCk7XG5cdGlmKGlkeCA+PSAwKSB7XG5cdFx0c3R5bGVFbGVtZW50c0luc2VydGVkQXRUb3Auc3BsaWNlKGlkeCwgMSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcblx0c3R5bGVFbGVtZW50LnR5cGUgPSBcInRleHQvY3NzXCI7XG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBzdHlsZUVsZW1lbnQpO1xuXHRyZXR1cm4gc3R5bGVFbGVtZW50O1xufVxuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlRWxlbWVudCwgdXBkYXRlLCByZW1vdmU7XG5cblx0aWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG5cdFx0dmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG5cdFx0c3R5bGVFbGVtZW50ID0gc2luZ2xldG9uRWxlbWVudCB8fCAoc2luZ2xldG9uRWxlbWVudCA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKSk7XG5cdFx0dXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlRWxlbWVudCwgc3R5bGVJbmRleCwgZmFsc2UpO1xuXHRcdHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZUVsZW1lbnQsIHN0eWxlSW5kZXgsIHRydWUpO1xuXHR9IGVsc2Uge1xuXHRcdHN0eWxlRWxlbWVudCA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKTtcblx0XHR1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGVFbGVtZW50KTtcblx0XHRyZW1vdmUgPSBmdW5jdGlvbigpIHtcblx0XHRcdHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuXHRcdH07XG5cdH1cblxuXHR1cGRhdGUob2JqKTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG5cdFx0aWYobmV3T2JqKSB7XG5cdFx0XHRpZihuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApXG5cdFx0XHRcdHJldHVybjtcblx0XHRcdHVwZGF0ZShvYmogPSBuZXdPYmopO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZW1vdmUoKTtcblx0XHR9XG5cdH07XG59XG5cbnZhciByZXBsYWNlVGV4dCA9IChmdW5jdGlvbiAoKSB7XG5cdHZhciB0ZXh0U3RvcmUgPSBbXTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gKGluZGV4LCByZXBsYWNlbWVudCkge1xuXHRcdHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcblx0XHRyZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcblx0fTtcbn0pKCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcoc3R5bGVFbGVtZW50LCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcblx0dmFyIGNzcyA9IHJlbW92ZSA/IFwiXCIgOiBvYmouY3NzO1xuXG5cdGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuXHRcdHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcblx0fSBlbHNlIHtcblx0XHR2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG5cdFx0dmFyIGNoaWxkTm9kZXMgPSBzdHlsZUVsZW1lbnQuY2hpbGROb2Rlcztcblx0XHRpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG5cdFx0aWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG5cdFx0XHRzdHlsZUVsZW1lbnQuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0c3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGNzc05vZGUpO1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlRWxlbWVudCwgb2JqKSB7XG5cdHZhciBjc3MgPSBvYmouY3NzO1xuXHR2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG5cdHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG5cdGlmIChtZWRpYSkge1xuXHRcdHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJtZWRpYVwiLCBtZWRpYSk7XG5cdH1cblxuXHRpZiAoc291cmNlTWFwKSB7XG5cdFx0Ly8gaHR0cHM6Ly9kZXZlbG9wZXIuY2hyb21lLmNvbS9kZXZ0b29scy9kb2NzL2phdmFzY3JpcHQtZGVidWdnaW5nXG5cdFx0Ly8gdGhpcyBtYWtlcyBzb3VyY2UgbWFwcyBpbnNpZGUgc3R5bGUgdGFncyB3b3JrIHByb3Blcmx5IGluIENocm9tZVxuXHRcdGNzcyArPSAnXFxuLyojIHNvdXJjZVVSTD0nICsgc291cmNlTWFwLnNvdXJjZXNbMF0gKyAnICovJztcblx0XHQvLyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8yNjYwMzg3NVxuXHRcdGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIgKyBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpICsgXCIgKi9cIjtcblx0fVxuXG5cdGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuXHRcdHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG5cdH0gZWxzZSB7XG5cdFx0d2hpbGUoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcblx0XHRcdHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG5cdFx0fVxuXHRcdHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcblx0fVxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1zdHlsZS1sb2FkZXIvYWRkU3R5bGVzLmpzXG4vLyBtb2R1bGUgaWQgPSA5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzPXtyZW5kZXI6ZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO1xuICByZXR1cm4gX3ZtLl9oKCdoMScsIFtcIkhlbGxvIFwiICsgX3ZtLl9zKF92bS5uYW1lKV0pXG59LHN0YXRpY1JlbmRlckZuczogW119XG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKS5yZXJlbmRlcihcImRhdGEtdi1hYjc1MWMzMlwiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci5qcz9pZD1kYXRhLXYtYWI3NTFjMzIhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3NyYy92aWV3cy91c2VyLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIF9fdnVlX2V4cG9ydHNfXywgX192dWVfb3B0aW9uc19fXG52YXIgX192dWVfc3R5bGVzX18gPSB7fVxuXG4vKiBzdHlsZXMgKi9cbnJlcXVpcmUoXCIhIXZ1ZS1zdHlsZS1sb2FkZXIhY3NzLWxvYWRlcj9zb3VyY2VNYXAhdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXI/aWQ9ZGF0YS12LTVjYWE5MWU2IXZ1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9pbmRleC52dWVcIilcblxuLyogc2NyaXB0ICovXG5fX3Z1ZV9leHBvcnRzX18gPSByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXIhdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL2luZGV4LnZ1ZVwiKVxuXG4vKiB0ZW1wbGF0ZSAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX18gPSByZXF1aXJlKFwiISF2dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj9pZD1kYXRhLXYtNWNhYTkxZTYhdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vaW5kZXgudnVlXCIpXG5fX3Z1ZV9vcHRpb25zX18gPSBfX3Z1ZV9leHBvcnRzX18gPSBfX3Z1ZV9leHBvcnRzX18gfHwge31cbmlmIChcbiAgdHlwZW9mIF9fdnVlX2V4cG9ydHNfXy5kZWZhdWx0ID09PSBcIm9iamVjdFwiIHx8XG4gIHR5cGVvZiBfX3Z1ZV9leHBvcnRzX18uZGVmYXVsdCA9PT0gXCJmdW5jdGlvblwiXG4pIHtcbmlmIChPYmplY3Qua2V5cyhfX3Z1ZV9leHBvcnRzX18pLnNvbWUoZnVuY3Rpb24gKGtleSkgeyByZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkgIT09IFwiX19lc01vZHVsZVwiIH0pKSB7Y29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuX192dWVfb3B0aW9uc19fID0gX192dWVfZXhwb3J0c19fID0gX192dWVfZXhwb3J0c19fLmRlZmF1bHRcbn1cbmlmICh0eXBlb2YgX192dWVfb3B0aW9uc19fID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgX192dWVfb3B0aW9uc19fID0gX192dWVfb3B0aW9uc19fLm9wdGlvbnNcbn1cbl9fdnVlX29wdGlvbnNfXy5fX2ZpbGUgPSBcIkU6XFxcXFRlc3RXb3JrXFxcXHZ1ZVxcXFxzcmNcXFxcdmlld3NcXFxcaW5kZXgudnVlXCJcbl9fdnVlX29wdGlvbnNfXy5yZW5kZXIgPSBfX3Z1ZV90ZW1wbGF0ZV9fLnJlbmRlclxuX192dWVfb3B0aW9uc19fLnN0YXRpY1JlbmRlckZucyA9IF9fdnVlX3RlbXBsYXRlX18uc3RhdGljUmVuZGVyRm5zXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi01Y2FhOTFlNlwiLCBfX3Z1ZV9vcHRpb25zX18pXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi01Y2FhOTFlNlwiLCBfX3Z1ZV9vcHRpb25zX18pXG4gIH1cbn0pKCl9XG5pZiAoX192dWVfb3B0aW9uc19fLmZ1bmN0aW9uYWwpIHtjb25zb2xlLmVycm9yKFwiW3Z1ZS1sb2FkZXJdIGluZGV4LnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIGFuZCBzaG91bGQgYmUgZGVmaW5lZCBpbiBwbGFpbiBqcyBmaWxlcyB1c2luZyByZW5kZXIgZnVuY3Rpb25zLlwiKX1cblxubW9kdWxlLmV4cG9ydHMgPSBfX3Z1ZV9leHBvcnRzX19cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3ZpZXdzL2luZGV4LnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi01Y2FhOTFlNiEuLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vaW5kZXgudnVlXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCB7fSk7XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcblx0Ly8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0aWYoIWNvbnRlbnQubG9jYWxzKSB7XG5cdFx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi01Y2FhOTFlNiEuLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vaW5kZXgudnVlXCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtNWNhYTkxZTYhLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL2luZGV4LnZ1ZVwiKTtcblx0XHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXHRcdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHRcdH0pO1xuXHR9XG5cdC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1zdHlsZS1sb2FkZXIhLi9+L2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vfi92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtNWNhYTkxZTYhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9zcmMvdmlld3MvaW5kZXgudnVlXG4vLyBtb2R1bGUgaWQgPSAxMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcbmgxIHtcXG4gICAgY29sb3I6ICNGMDA7XFxufVxcblwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCIvLi9zcmMvdmlld3MvaW5kZXgudnVlPzQwNGZhNDhhXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7QUFLQTtJQUNBLFlBQUE7Q0FDQVwiLFwiZmlsZVwiOlwiaW5kZXgudnVlXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjx0ZW1wbGF0ZT5cXHJcXG4gICAgPGgxPkF1dGggRmxvd3t7bG9nZ2VkSW59fTwvaDE+XFxyXFxuPC90ZW1wbGF0ZT5cXHJcXG5cXHJcXG48c3R5bGU+XFxyXFxuICAgIGgxIHtcXHJcXG4gICAgICAgIGNvbG9yOiAjRjAwO1xcclxcbiAgICB9XFxyXFxuPC9zdHlsZT5cXHJcXG5cXHJcXG48c2NyaXB0PlxcclxcbiAgICBjbGFzcyB0ZXN0IHtcXHJcXG4gICAgICAgIGRhdGEoKSB7XFxyXFxuICAgICAgICAgICAgcmV0dXJuIHtcXHJcXG4gICAgICAgICAgICAgICAgbG9nZ2VkSW46IFxcXCJURVNUXFxcIlxcclxcbiAgICAgICAgICAgIH1cXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgIGNyZWF0ZWQoKSB7XFxyXFxuICAgICAgICAgICAgY29uc29sZS5sb2coJ0BAQEBAQEBAQEBAQEAnKTtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgfVxcclxcbiAgICBsZXQgcGFnZSA9IHtcXHJcXG4gICAgICAgIGRhdGE6IGZ1bmN0aW9uICgpIHtcXHJcXG4gICAgICAgICAgICByZXR1cm4ge1xcclxcbiAgICAgICAgICAgICAgICBsb2dnZWRJbjogXFxcIlRFU1RcXFwiXFxyXFxuICAgICAgICAgICAgfVxcclxcbiAgICAgICAgfSxcXHJcXG4gICAgICAgIGNyZWF0ZWQ6IGZ1bmN0aW9uICgpIHtcXHJcXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnQEBAQEBAQEBAQEBAQCcpO1xcclxcbiAgICAgICAgfVxcclxcbiAgICB9O1xcclxcbiAgICBtb2R1bGUuZXhwb3J0cyA9IHBhZ2U7XFxyXFxuPC9zY3JpcHQ+XCJdLFwic291cmNlUm9vdFwiOlwid2VicGFjazovL1wifV0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9+L3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi01Y2FhOTFlNiEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3NyYy92aWV3cy9pbmRleC52dWVcbi8vIG1vZHVsZSBpZCA9IDEzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIjx0ZW1wbGF0ZT5cclxuICAgIDxoMT5BdXRoIEZsb3d7e2xvZ2dlZElufX08L2gxPlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHN0eWxlPlxyXG4gICAgaDEge1xyXG4gICAgICAgIGNvbG9yOiAjRjAwO1xyXG4gICAgfVxyXG48L3N0eWxlPlxyXG5cclxuPHNjcmlwdD5cclxuICAgIGNsYXNzIHRlc3Qge1xyXG4gICAgICAgIGRhdGEoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBsb2dnZWRJbjogXCJURVNUXCJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY3JlYXRlZCgpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ0BAQEBAQEBAQEBAQEAnKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBsZXQgcGFnZSA9IHtcclxuICAgICAgICBkYXRhOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBsb2dnZWRJbjogXCJURVNUXCJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY3JlYXRlZDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnQEBAQEBAQEBAQEBAQCcpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBtb2R1bGUuZXhwb3J0cyA9IHBhZ2U7XHJcbjwvc2NyaXB0PlxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBpbmRleC52dWU/NDA0ZmE0OGEiLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpcztcbiAgcmV0dXJuIF92bS5faCgnaDEnLCBbXCJBdXRoIEZsb3dcIiArIF92bS5fcyhfdm0ubG9nZ2VkSW4pXSlcbn0sc3RhdGljUmVuZGVyRm5zOiBbXX1cbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpLnJlcmVuZGVyKFwiZGF0YS12LTVjYWE5MWU2XCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyLmpzP2lkPWRhdGEtdi01Y2FhOTFlNiEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vc3JjL3ZpZXdzL2luZGV4LnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==