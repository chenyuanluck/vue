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
	var IndexView = __webpack_require__(12); // 引入indexVue
	
	
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
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _view = __webpack_require__(5);
	
	var _view2 = _interopRequireDefault(_view);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * 描述:
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * 版权: Copyright (c) 2016
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * 公司: 深圳市昊晨科技开发有限公司
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * 作者: 陈元
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * 版本: 1.0
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * 创建日期: 2016/11/23
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * 创建时间: 16:27
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */
	
	
	var UserView = __webpack_require__(6);
	
	var User = function (_View) {
	    _inherits(User, _View);
	
	    function User(view) {
	        _classCallCheck(this, User);
	
	        return _possibleConstructorReturn(this, (User.__proto__ || Object.getPrototypeOf(User)).call(this, view));
	    }
	
	    _createClass(User, [{
	        key: "data",
	        value: function data() {
	            return {
	                name: "UserView"
	            };
	        }
	    }, {
	        key: "created",
	        value: function created() {
	            console.log('================UserView Created================');
	        }
	    }]);
	
	    return User;
	}(_view2.default);
	
	exports.default = new User(UserView).getInstance();

/***/ },
/* 5 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/**
	 * 描述: 视图
	 * 版权: Copyright (c) 2016
	 * 公司: 深圳市昊晨科技开发有限公司
	 * 作者: 陈元
	 * 版本: 1.0
	 * 创建日期: 2016/11/23
	 * 创建时间: 16:21
	 */
	var View = function () {
	    function View(view) {
	        _classCallCheck(this, View);
	
	        console.log(_typeof(this.t));
	        console.log(typeof this.data === "function");
	        if (this.data === undefined) {}
	        view.data = this.data;
	        view.created = this.created;
	        this.view = view;
	    }
	
	    _createClass(View, [{
	        key: "getInstance",
	        value: function getInstance() {
	            return this.view;
	        }
	    }]);
	
	    return View;
	}();
	
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
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(9)();
	// imports
	
	
	// module
	exports.push([module.id, "\nh1 {\n    color: #F00;\n}\n", "", {"version":3,"sources":["/./src/views/user.vue?df50457a"],"names":[],"mappings":";AAKA;IACA,YAAA;CACA","file":"user.vue","sourcesContent":["<template>\r\n    <h1>Hello {{name}}</h1>\r\n</template>\r\n\r\n<style>\r\n    h1 {\r\n        color: #F00;\r\n    }\r\n</style>"],"sourceRoot":"webpack://"}]);
	
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
	  return _vm._h('h1', ["Hello " + _vm._s(_vm.name)])
	},staticRenderFns: []}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-ab751c32", module.exports)
	  }
	}

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* styles */
	__webpack_require__(13)
	
	/* script */
	__vue_exports__ = __webpack_require__(15)
	
	/* template */
	var __vue_template__ = __webpack_require__(16)
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
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(14);
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
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(9)();
	// imports
	
	
	// module
	exports.push([module.id, "\nh1 {\n    color: #F00;\n}\n", "", {"version":3,"sources":["/./src/views/index.vue?404fa48a"],"names":[],"mappings":";AAKA;IACA,YAAA;CACA","file":"index.vue","sourcesContent":["<template>\r\n    <h1>Auth Flow{{loggedIn}}</h1>\r\n</template>\r\n\r\n<style>\r\n    h1 {\r\n        color: #F00;\r\n    }\r\n</style>\r\n\r\n<script>\r\n    class test {\r\n        data() {\r\n            return {\r\n                loggedIn: \"TEST\"\r\n            }\r\n        }\r\n\r\n        created() {\r\n            console.log('@@@@@@@@@@@@@');\r\n        }\r\n    }\r\n    let page = {\r\n        data: function () {\r\n            return {\r\n                loggedIn: \"TEST\"\r\n            }\r\n        },\r\n        created: function () {\r\n            console.log('@@@@@@@@@@@@@');\r\n        }\r\n    };\r\n    module.exports = page;\r\n</script>"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 15 */
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
/* 16 */
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYTg5ZjBiYjQ5MzIxMzI4MjVkNjAiLCJ3ZWJwYWNrOi8vLy4vRTovVGVzdFdvcmsvdnVlL3NyYy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vRTovVGVzdFdvcmsvdnVlL34vdnVlL2Rpc3QvdnVlLm1pbi5qcyIsIndlYnBhY2s6Ly8vLi9FOi9UZXN0V29yay92dWUvfi92dWUtcm91dGVyL2Rpc3QvdnVlLXJvdXRlci5qcyIsIndlYnBhY2s6Ly8vLi9FOi9UZXN0V29yay92dWUvc3JjL3JvdXRlci5qcyIsIndlYnBhY2s6Ly8vLi9FOi9UZXN0V29yay92dWUvc3JjL3NjcmlwdHMvdXNlci5qcyIsIndlYnBhY2s6Ly8vLi9FOi9UZXN0V29yay92dWUvc3JjL3V0aWxzL3ZpZXcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL3VzZXIudnVlIiwid2VicGFjazovLy8uL3NyYy92aWV3cy91c2VyLnZ1ZT8yMDJkIiwid2VicGFjazovLy8uL3NyYy92aWV3cy91c2VyLnZ1ZT8zODI1Iiwid2VicGFjazovLy8uL0U6L1Rlc3RXb3JrL3Z1ZS9+L2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzIiwid2VicGFjazovLy8uL34vdnVlLXN0eWxlLWxvYWRlci9hZGRTdHlsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL3VzZXIudnVlPzQ4MmYiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL2luZGV4LnZ1ZSIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvaW5kZXgudnVlPzMwZjkiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL2luZGV4LnZ1ZT80MmU3Iiwid2VicGFjazovLy9pbmRleC52dWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL2luZGV4LnZ1ZT82MGE5Il0sIm5hbWVzIjpbInVzZSIsInJvdXRlciIsInJvdXRlcyIsImFwcCIsIiRtb3VudCIsImUiLCJ0IiwiZXhwb3J0cyIsIm1vZHVsZSIsIlZ1ZSIsIkpTT04iLCJzdHJpbmdpZnkiLCJTdHJpbmciLCJwYXJzZUZsb2F0IiwibiIsIk9iamVjdCIsImNyZWF0ZSIsInIiLCJzcGxpdCIsImkiLCJsZW5ndGgiLCJ0b0xvd2VyQ2FzZSIsImluZGV4T2YiLCJzcGxpY2UiLCJVciIsImNhbGwiLCJvIiwiYSIsInMiLCJhcmd1bWVudHMiLCJhcHBseSIsIl9sZW5ndGgiLCJjIiwiQXJyYXkiLCJsIiwidSIsImYiLCJxciIsIldyIiwiZCIsInAiLCJ2IiwicmVkdWNlIiwiY29uY2F0Iiwic3RhdGljS2V5cyIsImpvaW4iLCJoIiwibSIsImciLCJjaGFyQ29kZUF0IiwieSIsImRlZmluZVByb3BlcnR5IiwidmFsdWUiLCJlbnVtZXJhYmxlIiwid3JpdGFibGUiLCJjb25maWd1cmFibGUiLCJfIiwiR3IiLCJ0ZXN0IiwiYiIsInRvU3RyaW5nIiwiJCIsImRpIiwidGFyZ2V0IiwicGkiLCJwdXNoIiwidyIsInBvcCIsIngiLCJfX3Byb3RvX18iLCJDIiwiayIsIl9fb2JfXyIsInlpIiwiZ2kiLCJzaG91bGRDb252ZXJ0Iiwib2kiLCJpc0FycmF5IiwiaXNFeHRlbnNpYmxlIiwiX2lzVnVlIiwiQSIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsImdldCIsInNldCIsImRlcGVuZCIsImRlcCIsIlQiLCJub3RpZnkiLCJPIiwiTWF0aCIsIm1heCIsInZtQ291bnQiLCJTIiwiaiIsImtleXMiLCJFIiwiTiIsIkwiLCJwcm9wcyIsIlZyIiwidHlwZSIsIkQiLCJkaXJlY3RpdmVzIiwiYmluZCIsInVwZGF0ZSIsIk0iLCJfaSIsImJpIiwiZXh0ZW5kcyIsIm9wdGlvbnMiLCJtaXhpbnMiLCJwcm90b3R5cGUiLCJSZSIsIlAiLCJ6ciIsIlIiLCJCIiwiS3IiLCJJIiwiZGVmYXVsdCIsIiRvcHRpb25zIiwicHJvcHNEYXRhIiwiRnVuY3Rpb24iLCJGIiwibWF0Y2giLCJVIiwid2kiLCJ4aSIsIkNpIiwia2kiLCJIIiwic29ydCIsImlkIiwiQWkiLCJydW4iLCJsaSIsImRldnRvb2xzIiwiYWkiLCJlbWl0IiwiViIsInNpIiwieiIsIlRpIiwiY2xlYXIiLCJKIiwiaGFzIiwiYWRkIiwiSyIsIl93YXRjaGVycyIsInEiLCJXIiwiWiIsIlkiLCJRIiwiX3Byb3BLZXlzIiwiJHBhcmVudCIsImRhdGEiLCJfZGF0YSIsInRlIiwiY29tcHV0ZWQiLCJqaSIsIkciLCJjYWNoZSIsIlNpIiwibGF6eSIsImRpcnR5IiwiZXZhbHVhdGUiLCJtZXRob2RzIiwid2F0Y2giLCJYIiwiaGFuZGxlciIsIiR3YXRjaCIsImVlIiwiJHNldCIsIiRkZWxldGUiLCJ1c2VyIiwiaW1tZWRpYXRlIiwidGVhcmRvd24iLCJuZSIsIkVpIiwidGFnIiwiY2hpbGRyZW4iLCJ0ZXh0IiwiZWxtIiwibnMiLCJjb250ZXh0IiwiY29tcG9uZW50T3B0aW9ucyIsImlzU3RhdGljIiwia2V5IiwiaXNDbG9uZWQiLCJyZSIsImllIiwiX19pbmplY3RlZCIsIm9lIiwiZm4iLCJjaGFyQXQiLCJzbGljZSIsImludm9rZXIiLCJhZSIsInNlIiwiY2UiLCJsZSIsInVlIiwiZmUiLCJmaWx0ZXIiLCJkZSIsInBhcmVudCIsImFic3RyYWN0IiwiJGNoaWxkcmVuIiwiJHJvb3QiLCIkcmVmcyIsIl93YXRjaGVyIiwiX2luYWN0aXZlIiwiX2lzTW91bnRlZCIsIl9pc0Rlc3Ryb3llZCIsIl9pc0JlaW5nRGVzdHJveWVkIiwicGUiLCJfbW91bnQiLCIkZWwiLCJyZW5kZXIiLCJOaSIsInZlIiwiX3VwZGF0ZSIsIl9yZW5kZXIiLCIkdm5vZGUiLCJMaSIsIl92bm9kZSIsIl9fcGF0Y2hfXyIsIl9fdnVlX18iLCJfdXBkYXRlRnJvbVBhcmVudCIsIl9yZW5kZXJDaGlsZHJlbiIsIl9wYXJlbnRWbm9kZSIsIl9wYXJlbnRMaXN0ZW5lcnMiLCJfdXBkYXRlTGlzdGVuZXJzIiwiJHNsb3RzIiwiRWUiLCJfcmVuZGVyQ29udGV4dCIsIiRmb3JjZVVwZGF0ZSIsIiRkZXN0cm95IiwiJG9mZiIsIiRlbWl0IiwiaGUiLCJfYmFzZSIsImV4dGVuZCIsImNpZCIsInJlc29sdmVkIiwid2UiLCJQZSIsInhlIiwiZnVuY3Rpb25hbCIsIm1lIiwib24iLCJuYXRpdmVPbiIsImtlIiwibmFtZSIsIkN0b3IiLCJsaXN0ZW5lcnMiLCJPZSIsIl9zZWxmIiwic2xvdHMiLCJmdW5jdGlvbmFsQ29udGV4dCIsInNsb3QiLCJnZSIsIl9pc0NvbXBvbmVudCIsIl9jb21wb25lbnRUYWciLCJpbmxpbmVUZW1wbGF0ZSIsInN0YXRpY1JlbmRlckZucyIsInllIiwiY2hpbGQiLCJrZWVwQWxpdmUiLCJfZSIsImJlIiwiJGUiLCJyZXF1ZXN0ZWQiLCJwZW5kaW5nQ2FsbGJhY2tzIiwidGhlbiIsImF0dHJzIiwiZG9tUHJvcHMiLCJDZSIsImhvb2siLCJNaSIsIkRpIiwiQWUiLCJTZSIsInNjb3BlZFNsb3RzIiwiZ2V0VGFnTmFtZXNwYWNlIiwiaXNSZXNlcnZlZFRhZyIsIlRlIiwiX3N0YXRpY1RyZWVzIiwiJHNjb3BlZFNsb3RzIiwiJGNyZWF0ZUVsZW1lbnQiLCJlbCIsImplIiwiaXNPbmNlIiwiJG5leHRUaWNrIiwiX3JlbmRlclByb3h5IiwiZXJyb3JIYW5kbGVyIiwiY29uc29sZSIsImVycm9yIiwiX2giLCJfcyIsIl9uIiwiX3EiLCJfbSIsIl9vIiwiX2YiLCJfbCIsIl90IiwiX2IiLCJtdXN0VXNlUHJvcCIsIl9rIiwia2V5Q29kZXMiLCJpc0NvbW1lbnQiLCJOZSIsIl9ldmVudHMiLCIkb24iLCJMZSIsIiRvbmNlIiwiRGUiLCJfaW5pdCIsIl91aWQiLCJQaSIsIk1lIiwiY29uc3RydWN0b3IiLCJzdXBlciIsInN1cGVyT3B0aW9ucyIsImV4dGVuZE9wdGlvbnMiLCJfc2NvcGVJZCIsImNvbXBvbmVudHMiLCJJZSIsImluc3RhbGxlZCIsInVuc2hpZnQiLCJpbnN0YWxsIiwiRmUiLCJtaXhpbiIsIkJlIiwiX0N0b3IiLCJfYXNzZXRUeXBlcyIsImZvckVhY2giLCJVZSIsIkhlIiwiVmUiLCJ1dGlsIiwiJGkiLCJkZWxldGUiLCJuZXh0VGljayIsIkZpIiwiemUiLCJKZSIsIktlIiwic3RhdGljQ2xhc3MiLCJxZSIsImNsYXNzIiwiV2UiLCJaZSIsIlhpIiwiR2UiLCJRciIsInRvIiwibm8iLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJ3aW5kb3ciLCJIVE1MVW5rbm93bkVsZW1lbnQiLCJIVE1MRWxlbWVudCIsIlllIiwicXVlcnlTZWxlY3RvciIsIlFlIiwic2V0QXR0cmlidXRlIiwiWGUiLCJjcmVhdGVFbGVtZW50TlMiLCJXaSIsImV0IiwiY3JlYXRlVGV4dE5vZGUiLCJ0dCIsImNyZWF0ZUNvbW1lbnQiLCJudCIsImluc2VydEJlZm9yZSIsInJ0IiwicmVtb3ZlQ2hpbGQiLCJpdCIsImFwcGVuZENoaWxkIiwib3QiLCJwYXJlbnROb2RlIiwiYXQiLCJuZXh0U2libGluZyIsInN0IiwidGFnTmFtZSIsImN0IiwidGV4dENvbnRlbnQiLCJsdCIsImNoaWxkTm9kZXMiLCJ1dCIsImZ0IiwicmVmIiwicmVmSW5Gb3IiLCJkdCIsInB0IiwidnQiLCJodCIsIm10IiwiaXNSb290SW5zZXJ0IiwiaW5pdCIsIm9vIiwiaW5zZXJ0IiwicGVuZGluZ0luc2VydCIsImRlc3Ryb3kiLCJyZW1vdmUiLCJwcmVwYXRjaCIsInNldFRleHRDb250ZW50IiwicG9zdHBhdGNoIiwibW9kdWxlcyIsIm5vZGVPcHMiLCJhbyIsIm5vZGVUeXBlIiwiaGFzQXR0cmlidXRlIiwicmVtb3ZlQXR0cmlidXRlIiwiZ3QiLCJ5dCIsIm9sZFZhbHVlIiwiYnQiLCJkZWYiLCJjb21wb25lbnRVcGRhdGVkIiwiaW5zZXJ0ZWQiLCJtb2RpZmllcnMiLCJjbyIsInJhd05hbWUiLCIkdCIsInd0IiwiSmkiLCJyZW1vdmVBdHRyaWJ1dGVOUyIsInppIiwiS2kiLCJIaSIsIlZpIiwicWkiLCJzZXRBdHRyaWJ1dGVOUyIsInh0IiwiX3RyYW5zaXRpb25DbGFzc2VzIiwiX3ByZXZDbGFzcyIsIkN0IiwiX3ZfYWRkIiwiYWRkRXZlbnRMaXN0ZW5lciIsIl92X3JlbW92ZSIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJrdCIsIl92YWx1ZSIsImNvbXBvc2luZyIsIkF0IiwiT3QiLCJzdHlsZSIsInN0YXRpY1N0eWxlIiwiaG8iLCJTdCIsIlR0IiwiZ28iLCJqdCIsInRyaW0iLCJjbGFzc0xpc3QiLCJnZXRBdHRyaWJ1dGUiLCJFdCIsInJlcGxhY2UiLCJOdCIsIlNvIiwiTHQiLCJEdCIsIk10IiwiUHQiLCJ0aW1lb3V0IiwicHJvcENvdW50Iiwid28iLCJrbyIsIk9vIiwic2V0VGltZW91dCIsImdldENvbXB1dGVkU3R5bGUiLCJDbyIsIlJ0IiwiQW8iLCJ4byIsIlRvIiwiaGFzVHJhbnNmb3JtIiwibWFwIiwiSXQiLCJOdW1iZXIiLCJGdCIsIl9sZWF2ZUNiIiwiY2FuY2VsbGVkIiwiVXQiLCJ0cmFuc2l0aW9uIiwiX2VudGVyQ2IiLCJjc3MiLCJlbnRlckNsYXNzIiwiZW50ZXJBY3RpdmVDbGFzcyIsImFwcGVhckNsYXNzIiwiYXBwZWFyQWN0aXZlQ2xhc3MiLCJiZWZvcmVFbnRlciIsImVudGVyIiwiYWZ0ZXJFbnRlciIsImVudGVyQ2FuY2VsbGVkIiwiYmVmb3JlQXBwZWFyIiwiYXBwZWFyIiwiYWZ0ZXJBcHBlYXIiLCJhcHBlYXJDYW5jZWxsZWQiLCJ0aSIsIkh0Iiwic2hvdyIsIl9wZW5kaW5nIiwiQnQiLCJsZWF2ZUNsYXNzIiwibGVhdmVBY3RpdmVDbGFzcyIsImJlZm9yZUxlYXZlIiwibGVhdmUiLCJhZnRlckxlYXZlIiwibGVhdmVDYW5jZWxsZWQiLCJkZWxheUxlYXZlIiwiam8iLCJWdCIsIm11bHRpcGxlIiwiSnQiLCJzZWxlY3RlZCIsInNlbGVjdGVkSW5kZXgiLCJ6dCIsIkt0IiwicXQiLCJXdCIsImNyZWF0ZUV2ZW50IiwiaW5pdEV2ZW50IiwiZGlzcGF0Y2hFdmVudCIsIlp0IiwiR3QiLCJZdCIsIlF0IiwiWHQiLCJlbiIsIl9tb3ZlQ2IiLCJ0biIsIm5ld1BvcyIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsIm5uIiwicG9zIiwibGVmdCIsInRvcCIsIm1vdmVkIiwidHJhbnNmb3JtIiwiV2Via2l0VHJhbnNmb3JtIiwidHJhbnNpdGlvbkR1cmF0aW9uIiwicm4iLCJpbm5lckhUTUwiLCJWbyIsImFuIiwiRGEiLCJOYSIsIkxhIiwiTWEiLCJQYSIsInNuIiwic3Vic3RyaW5nIiwiWW8iLCJzdGFydCIsIlFvIiwiV28iLCJ1bmFyeVNsYXNoIiwiZW5kIiwiUWkiLCJZaSIsInJhIiwic2hvdWxkRGVjb2RlTmV3bGluZXMiLCJleHBlY3RIVE1MIiwiaXNVbmFyeVRhZyIsIlpyIiwiamEiLCJzZmMiLCJFYSIsIlJlZ0V4cCIsImNoYXJzIiwidGEiLCJuYSIsImVhIiwiWG8iLCJjbiIsImxuIiwidW4iLCJGYSIsIlJhIiwibGFzdEluZGV4IiwiZXhlYyIsImluZGV4IiwiZG4iLCJwbiIsInZuIiwiaG4iLCJhcmciLCJtbiIsImNhcHR1cmUiLCJuYXRpdmUiLCJuYXRpdmVFdmVudHMiLCJldmVudHMiLCJnbiIsInluIiwiYXR0cnNNYXAiLCJhdHRyc0xpc3QiLCJvYSIsImlhIiwic2EiLCJjYSIsImxhIiwibGFzdEluZGV4T2YiLCJleHAiLCJpZHgiLCIkbiIsImFhIiwiYm4iLCJ3biIsIkNuIiwieG4iLCJrbiIsInVhIiwid2FybiIsImZhIiwiZGEiLCJwYSIsImlzUHJlVGFnIiwidmEiLCJoYSIsIm1hIiwiZ2EiLCJkZWxpbWl0ZXJzIiwicHJlc2VydmVXaGl0ZXNwYWNlIiwiZWkiLCJWbiIsIkJuIiwiSG4iLCJmb3JiaWRkZW4iLCJBbiIsInByZSIsIk9uIiwiam4iLCJFbiIsIkRuIiwiU24iLCJwbGFpbiIsIlRuIiwiTW4iLCJQbiIsIlJuIiwiaWYiLCJlbHNlaWYiLCJlbHNlIiwiTG4iLCJibG9jayIsIk5uIiwic2xvdFNjb3BlIiwic2xvdFRhcmdldCIsInBsYWNlaG9sZGVyIiwicWEiLCJleHByZXNzaW9uIiwiSW4iLCJVYSIsImZvciIsIkhhIiwiYWxpYXMiLCJpdGVyYXRvcjEiLCJpdGVyYXRvcjIiLCJVbiIsImNvbmRpdGlvbnMiLCJvbmNlIiwic2xvdE5hbWUiLCJjb21wb25lbnQiLCJCYSIsImhhc0JpbmRpbmdzIiwiRm4iLCJLYSIsIlZhIiwicHJvcCIsImNhbWVsIiwiemEiLCJKYSIsIldhIiwiWmEiLCJ6biIsInlhIiwiR2EiLCJfYSIsIktuIiwicW4iLCJKbiIsInN0YXRpYyIsIlpuIiwic3RhdGljSW5Gb3IiLCJzdGF0aWNSb290IiwiV24iLCJCciIsIkduIiwiZXZlcnkiLCJZbiIsIlFuIiwidHMiLCJlcyIsIlhuIiwiUWEiLCJZYSIsImVyIiwicGFyc2VJbnQiLCJYYSIsInRyIiwid3JhcERhdGEiLCJuciIsIkNhIiwia2EiLCJBYSIsImJhIiwiJGEiLCJ3YSIsInhhIiwicnIiLCJzdGF0aWNQcm9jZXNzZWQiLCJpciIsIm9uY2VQcm9jZXNzZWQiLCJvciIsImZvclByb2Nlc3NlZCIsImNyIiwiaWZQcm9jZXNzZWQiLCJhciIsImdyIiwieXIiLCJsciIsInZyIiwic3IiLCJzaGlmdCIsInVyIiwiX3IiLCJkciIsImZyIiwicnMiLCJwciIsInNjb3BlIiwiaHIiLCJtciIsImJyIiwiJHIiLCJhc3QiLCJ3ciIsImNsYXNzQmluZGluZyIsInhyIiwiQ3IiLCJzdHlsZUJpbmRpbmciLCJrciIsIkFyIiwiT2EiLCJqciIsIk9yIiwiU3IiLCJUciIsIm51bWJlciIsIkVyIiwiTnIiLCJMciIsIkRyIiwibHMiLCJNciIsInVpIiwiY3MiLCJQciIsIlJyIiwib3V0ZXJIVE1MIiwiY2xvbmVOb2RlIiwiSXIiLCJGciIsImhhc093blByb3BlcnR5IiwiSHIiLCJ0b1VwcGVyQ2FzZSIsIkpyIiwiWXIiLCJYciIsIm5hdmlnYXRvciIsInVzZXJBZ2VudCIsIm5pIiwicmkiLCJpaSIsImdsb2JhbCIsInByb2Nlc3MiLCJlbnYiLCJWVUVfRU5WIiwiX19WVUVfREVWVE9PTFNfR0xPQkFMX0hPT0tfXyIsIlByb21pc2UiLCJyZXNvbHZlIiwiTXV0YXRpb25PYnNlcnZlciIsIm9ic2VydmUiLCJjaGFyYWN0ZXJEYXRhIiwiU2V0IiwiY2kiLCJvcHRpb25NZXJnZVN0cmF0ZWdpZXMiLCJzaWxlbnQiLCJpZ25vcmVkRWxlbWVudHMiLCJpc1Vua25vd25FbGVtZW50IiwiX2xpZmVjeWNsZUhvb2tzIiwiX21heFVwZGF0ZUNvdW50IiwiZmkiLCJzdWJzIiwiYWRkU3ViIiwicmVtb3ZlU3ViIiwiYWRkRGVwIiwidmkiLCJoaSIsIm9ic2VydmVBcnJheSIsIm1pIiwiZ2V0T3duUHJvcGVydHlOYW1lcyIsImlzU2V0dGluZ1Byb3BzIiwid2FsayIsImZyZWV6ZSIsImRlZmluZVJlYWN0aXZlIiwiX3RvU3RyaW5nIiwidG9OdW1iZXIiLCJtYWtlTWFwIiwiaXNCdWlsdEluVGFnIiwiaGFzT3duIiwiaXNQcmltaXRpdmUiLCJjYWNoZWQiLCJjYW1lbGl6ZSIsImNhcGl0YWxpemUiLCJoeXBoZW5hdGUiLCJ0b0FycmF5IiwiaXNPYmplY3QiLCJpc1BsYWluT2JqZWN0IiwidG9PYmplY3QiLCJub29wIiwiZ2VuU3RhdGljS2V5cyIsImxvb3NlRXF1YWwiLCJsb29zZUluZGV4T2YiLCJpc1Jlc2VydmVkIiwicGFyc2VQYXRoIiwiaGFzUHJvdG8iLCJpbkJyb3dzZXIiLCJVQSIsImlzSUUiLCJpc0lFOSIsImlzRWRnZSIsImlzQW5kcm9pZCIsImlzSU9TIiwiaXNTZXJ2ZXJSZW5kZXJpbmciLCJfU2V0IiwibWVyZ2VPcHRpb25zIiwicmVzb2x2ZUFzc2V0IiwiZm9ybWF0Q29tcG9uZW50TmFtZSIsInZhbGlkYXRlUHJvcCIsIk9pIiwidm0iLCJkZWVwIiwic3luYyIsImNiIiwiYWN0aXZlIiwiZGVwcyIsIm5ld0RlcHMiLCJkZXBJZHMiLCJuZXdEZXBJZHMiLCJnZXR0ZXIiLCJjbGVhbnVwRGVwcyIsIl92Rm9yUmVtb3ZpbmciLCJyYXciLCJSaSIsIklpIiwiaW5jbHVkZSIsImV4Y2x1ZGUiLCJjcmVhdGVkIiwiZGVzdHJveWVkIiwiS2VlcEFsaXZlIiwidmVyc2lvbiIsIkJpIiwiVWkiLCJzdmciLCJtYXRoIiwieGh0bWwiLCJaaSIsIkdpIiwiZW8iLCJybyIsImlvIiwic28iLCJsbyIsInVvIiwiZm8iLCJwbyIsInZvIiwibW8iLCJzZXRQcm9wZXJ0eSIsInlvIiwiYm8iLCIkbyIsIm9udHJhbnNpdGlvbmVuZCIsIm9ud2Via2l0dHJhbnNpdGlvbmVuZCIsIm9uYW5pbWF0aW9uZW5kIiwib253ZWJraXRhbmltYXRpb25lbmQiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJFbyIsIk5vIiwiTG8iLCJEbyIsImFjdGl2ZUVsZW1lbnQiLCJ2bW9kZWwiLCJNbyIsInNvbWUiLCJQbyIsImRpc3BsYXkiLCJfX3ZPcmlnaW5hbERpc3BsYXkiLCJSbyIsIm1vZGVsIiwiSW8iLCJCb29sZWFuIiwibW9kZSIsIkZvIiwiX2xlYXZpbmciLCJCbyIsIm1vdmVDbGFzcyIsIlVvIiwicHJldkNoaWxkcmVuIiwia2VwdCIsInJlbW92ZWQiLCJiZWZvcmVVcGRhdGUiLCJ1cGRhdGVkIiwiaGFzTW92ZSIsImJvZHkiLCJvZmZzZXRIZWlnaHQiLCJwcm9wZXJ0eU5hbWUiLCJfaGFzTW92ZSIsIkhvIiwiVHJhbnNpdGlvbiIsIlRyYW5zaXRpb25Hcm91cCIsImNvbmZpZyIsInpvIiwiSm8iLCJLbyIsInFvIiwic291cmNlIiwiWm8iLCJHbyIsIlNhIiwiVGEiLCJJYSIsImVzYyIsInRhYiIsInNwYWNlIiwidXAiLCJyaWdodCIsImRvd24iLCJzdG9wIiwicHJldmVudCIsInNlbGYiLCJjdHJsIiwiYWx0IiwibWV0YSIsImNsb2FrIiwiaXMiLCJ0cmFuc2Zvcm1Ob2RlIiwiZ2VuRGF0YSIsIm9zIiwiYXMiLCJzcyIsImh0bWwiLCJ1cyIsImZzIiwiZG9jdW1lbnRFbGVtZW50IiwidGVtcGxhdGUiLCJjb21waWxlIiwiZmFjdG9yeSIsIlZ1ZVJvdXRlciIsIlZpZXciLCJyb3V0ZXJWaWV3Iiwicm91dGUiLCIkcm91dGUiLCJfcm91dGVyVmlld0NhY2hlIiwiZGVwdGgiLCJpbmFjdGl2ZSIsInJvdXRlclZpZXdEZXB0aCIsIm1hdGNoZWQiLCJob29rcyIsInZub2RlIiwiaW5zdGFuY2VzIiwib2xkVm5vZGUiLCJ1bmRlZmluZWQiLCJyZXNvbHZlUGF0aCIsInJlbGF0aXZlIiwiYmFzZSIsImFwcGVuZCIsInN0YWNrIiwic2VnbWVudHMiLCJzZWdtZW50IiwicGF0aCIsImhhc2giLCJxdWVyeSIsImhhc2hJbmRleCIsInF1ZXJ5SW5kZXgiLCJjbGVhblBhdGgiLCJhc3NlcnQiLCJjb25kaXRpb24iLCJtZXNzYWdlIiwiRXJyb3IiLCJlbmNvZGUiLCJlbmNvZGVVUklDb21wb25lbnQiLCJkZWNvZGUiLCJkZWNvZGVVUklDb21wb25lbnQiLCJyZXNvbHZlUXVlcnkiLCJleHRyYVF1ZXJ5IiwicGFyc2VkUXVlcnkiLCJwYXJzZVF1ZXJ5IiwicmVzIiwicGFyYW0iLCJwYXJ0cyIsInZhbCIsInN0cmluZ2lmeVF1ZXJ5Iiwib2JqIiwicmVzdWx0IiwidmFsMiIsImNyZWF0ZVJvdXRlIiwicmVjb3JkIiwibG9jYXRpb24iLCJyZWRpcmVjdGVkRnJvbSIsInBhcmFtcyIsImZ1bGxQYXRoIiwiZ2V0RnVsbFBhdGgiLCJmb3JtYXRNYXRjaCIsIlNUQVJUIiwidHJhaWxpbmdTbGFzaFJFIiwiaXNTYW1lUm91dGUiLCJpc09iamVjdEVxdWFsIiwiYUtleXMiLCJiS2V5cyIsImlzSW5jbHVkZWRSb3V0ZSIsImN1cnJlbnQiLCJxdWVyeUluY2x1ZGVzIiwibm9ybWFsaXplTG9jYXRpb24iLCJuZXh0IiwiX25vcm1hbGl6ZWQiLCJwYXJzZWRQYXRoIiwiYmFzZVBhdGgiLCJ0b1R5cGVzIiwiTGluayIsInJlcXVpcmVkIiwiZXhhY3QiLCJhY3RpdmVDbGFzcyIsInRoaXMkMSIsIiRyb3V0ZXIiLCJoaXN0b3J5IiwiaHJlZiIsImNyZWF0ZUhyZWYiLCJjbGFzc2VzIiwibGlua0FjdGl2ZUNsYXNzIiwiY29tcGFyZVRhcmdldCIsImNsaWNrIiwibWV0YUtleSIsImN0cmxLZXkiLCJzaGlmdEtleSIsImRlZmF1bHRQcmV2ZW50ZWQiLCJidXR0b24iLCJwcmV2ZW50RGVmYXVsdCIsImZpbmRBbmNob3IiLCJfVnVlIiwiYURhdGEiLCJhQXR0cnMiLCJfcm91dGVyIiwiZ2V0JDEiLCJfcm91dGUiLCJiZWZvcmVDcmVhdGUiLCJzdHJhdHMiLCJiZWZvcmVSb3V0ZUVudGVyIiwiYmVmb3JlUm91dGVMZWF2ZSIsIl9fbW9kdWxlRXhwb3J0cyIsImFyciIsImlzYXJyYXkiLCJwYXRoVG9SZWdleHAiLCJwYXJzZV8xIiwicGFyc2UiLCJjb21waWxlXzEiLCJ0b2tlbnNUb0Z1bmN0aW9uXzEiLCJ0b2tlbnNUb0Z1bmN0aW9uIiwidG9rZW5zVG9SZWdFeHBfMSIsInRva2Vuc1RvUmVnRXhwIiwiUEFUSF9SRUdFWFAiLCJzdHIiLCJ0b2tlbnMiLCJkZWZhdWx0RGVsaW1pdGVyIiwiZGVsaW1pdGVyIiwiZXNjYXBlZCIsIm9mZnNldCIsInByZWZpeCIsImdyb3VwIiwibW9kaWZpZXIiLCJhc3RlcmlzayIsInBhcnRpYWwiLCJyZXBlYXQiLCJvcHRpb25hbCIsInBhdHRlcm4iLCJlc2NhcGVHcm91cCIsImVzY2FwZVN0cmluZyIsInN1YnN0ciIsImVuY29kZVVSSUNvbXBvbmVudFByZXR0eSIsImVuY29kZVVSSSIsImVuY29kZUFzdGVyaXNrIiwibWF0Y2hlcyIsIm9wdHMiLCJwcmV0dHkiLCJ0b2tlbiIsIlR5cGVFcnJvciIsImF0dGFjaEtleXMiLCJmbGFncyIsInNlbnNpdGl2ZSIsInJlZ2V4cFRvUmVnZXhwIiwiZ3JvdXBzIiwiYXJyYXlUb1JlZ2V4cCIsInJlZ2V4cCIsInN0cmluZ1RvUmVnZXhwIiwic3RyaWN0IiwiZW5kc1dpdGhEZWxpbWl0ZXIiLCJjcmVhdGVSb3V0ZU1hcCIsInBhdGhNYXAiLCJuYW1lTWFwIiwiYWRkUm91dGVSZWNvcmQiLCJtYXRjaEFzIiwibm9ybWFsaXplUGF0aCIsInJlZGlyZWN0IiwicmVnZXhwQ2FjaGUiLCJyZWdleHBQYXJhbXNDYWNoZSIsInJlZ2V4cENvbXBpbGVDYWNoZSIsImNyZWF0ZU1hdGNoZXIiLCJjdXJyZW50Um91dGUiLCJwYXJhbU5hbWVzIiwiZ2V0UGFyYW1zIiwiZmlsbFBhcmFtcyIsIl9jcmVhdGVSb3V0ZSIsIm1hdGNoUm91dGUiLCJvcmlnaW5hbFJlZGlyZWN0IiwidGFyZ2V0UmVjb3JkIiwicmF3UGF0aCIsInJlc29sdmVSZWNvcmRQYXRoIiwicmVzb2x2ZWRQYXRoIiwiYWxpYXNlZFBhdGgiLCJhbGlhc2VkTWF0Y2giLCJhbGlhc2VkUmVjb3JkIiwiZ2V0Um91dGVSZWdleCIsImhpdCIsInBhdGhuYW1lIiwibGVuIiwicm91dGVNc2ciLCJmaWxsZXIiLCJzdXBwb3J0c0hpc3RvcnkiLCJydW5RdWV1ZSIsInF1ZXVlIiwic3RlcCIsIkhpc3RvcnkiLCJub3JtYWxpemVCYXNlIiwicGVuZGluZyIsImxpc3RlbiIsInRyYW5zaXRpb25UbyIsImNvbmZpcm1UcmFuc2l0aW9uIiwidXBkYXRlUm91dGUiLCJlbnN1cmVVUkwiLCJyZXNvbHZlUXVldWUiLCJkZWFjdGl2YXRlZCIsImFjdGl2YXRlZCIsImV4dHJhY3RMZWF2ZUd1YXJkcyIsImJlZm9yZUhvb2tzIiwicmVzb2x2ZUFzeW5jQ29tcG9uZW50cyIsIml0ZXJhdG9yIiwicG9zdEVudGVyQ2JzIiwiZW50ZXJHdWFyZHMiLCJleHRyYWN0RW50ZXJHdWFyZHMiLCJwcmV2IiwiYWZ0ZXJIb29rcyIsImJhc2VFbCIsImV4dHJhY3RHdWFyZCIsImZsYXR0ZW4iLCJmbGF0TWFwQ29tcG9uZW50cyIsImluc3RhbmNlIiwiZ3VhcmQiLCJ3cmFwTGVhdmVHdWFyZCIsInJldmVyc2UiLCJyb3V0ZUxlYXZlR3VhcmQiLCJjYnMiLCJpc1ZhbGlkIiwid3JhcEVudGVyR3VhcmQiLCJyb3V0ZUVudGVyR3VhcmQiLCJmcm9tIiwicG9sbCIsInJlc29sdmVkRGVmIiwicmVqZWN0IiwicmVhc29uIiwicG9zaXRpb25TdG9yZSIsInNhdmVTY3JvbGxQb3NpdGlvbiIsInBhZ2VYT2Zmc2V0IiwicGFnZVlPZmZzZXQiLCJnZXRTY3JvbGxQb3NpdGlvbiIsImdldEVsZW1lbnRQb3NpdGlvbiIsImRvY1JlY3QiLCJlbFJlY3QiLCJpc1ZhbGlkUG9zaXRpb24iLCJpc051bWJlciIsIm5vcm1hbGl6ZVBvc2l0aW9uIiwiZ2VuS2V5IiwiRGF0ZSIsIm5vdyIsIl9rZXkiLCJIVE1MNUhpc3RvcnkiLCJleHBlY3RTY3JvbGwiLCJzY3JvbGxCZWhhdmlvciIsInN0YXRlIiwiZ2V0TG9jYXRpb24iLCJoYW5kbGVTY3JvbGwiLCJwdXNoU3RhdGUiLCJyZXBsYWNlU3RhdGUiLCJpc1BvcCIsImJlaGF2aW9yIiwicG9zaXRpb24iLCJzaG91bGRTY3JvbGwiLCJzZWxlY3RvciIsInNjcm9sbFRvIiwic2VhcmNoIiwidXJsIiwiSGFzaEhpc3RvcnkiLCJmYWxsYmFjayIsImNoZWNrRmFsbGJhY2siLCJlbnN1cmVTbGFzaCIsIm9uSGFzaENoYW5nZSIsImdldEhhc2giLCJyZXBsYWNlSGFzaCIsInB1c2hIYXNoIiwiQWJzdHJhY3RIaXN0b3J5IiwidGFyZ2V0SW5kZXgiLCJwcm90b3R5cGVBY2Nlc3NvcnMiLCJiZWZvcmVFYWNoIiwiYWZ0ZXJFYWNoIiwiYmFjayIsImZvcndhcmQiLCJnZXRNYXRjaGVkQ29tcG9uZW50cyIsImRlZmluZVByb3BlcnRpZXMiLCJJbmRleFZpZXciLCJyZXF1aXJlIiwiVXNlclZpZXciLCJVc2VyIiwidmlldyIsImxvZyIsImdldEluc3RhbmNlIiwibGlzdCIsIml0ZW0iLCJtZWRpYVF1ZXJ5IiwiYWxyZWFkeUltcG9ydGVkTW9kdWxlcyJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7OztBQzdCQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztBQUFnRDs7QUFGQTtBQUloRCxlQUFJQSxHQUFKLHNCLENBQWlEOztBQUhEO0FBVmhEOzs7Ozs7Ozs7QUFlQSxLQUFNQyxTQUFTLHdCQUFjLEVBQUNDLHdCQUFELEVB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LGFBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0EsRUFBQztBQUNELGtDQUFpQzs7QUFFakM7Ozs7Ozs7QUN4Q0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBdUY7QUFDdkY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQSxpQ0FBZ0MsVUFBVSxFQUFFO0FBQzVDLEU7Ozs7OztBQ3BCQTtBQUNBOzs7QUFHQTtBQUNBLGlDQUFnQyxrQkFBa0IsR0FBRyxVQUFVLGtGQUFrRixLQUFLLFVBQVUsNkVBQTZFLFVBQVUsK0NBQStDLHdCQUF3QixTQUFTLGdEQUFnRCxvQkFBb0Isd0JBQXdCLHVEQUF1RCxhQUFhLDJCQUEyQiw2Q0FBNkMsYUFBYSxTQUFTLG9CQUFvQiwrQkFBK0Isd0JBQXdCLHVEQUF1RCxhQUFhLG1DQUFtQyw2Q0FBNkMsYUFBYSxVQUFVLDhCQUE4QiwwQ0FBMEM7O0FBRW40Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSUE7WUFFQTs7dUJBR0E7QUFGQTtBQUlBOztlQUNBO3FCQUNBO0FBQ0E7QUFUQTtBQVVBO3VCQUVBOzt1QkFHQTtBQUZBO0FBR0E7MEJBQ0E7cUJBQ0E7QUFDQTtBQVJBO0FBU0EsdUI7Ozs7OztBQ2hDQSxpQkFBZ0IsbUJBQW1CO0FBQ25DO0FBQ0EsRUFBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIuL21haW4vXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgYTg5ZjBiYjQ5MzIxMzI4MjVkNjAiLCIvKipcclxuICog5o+P6L+wOiDlhaXlj6PpobXpnaJcclxuICog54mI5p2DOiBDb3B5cmlnaHQgKGMpIDIwMTZcclxuICog5YWs5Y+4OiDmt7HlnLPluILmmIrmmajnp5HmioDlvIDlj5HmnInpmZDlhazlj7hcclxuICog5L2c6ICFOiDpmYjlhYNcclxuICog54mI5pysOiAxLjBcclxuICog5Yib5bu65pel5pyfOiAyMDE2LzExLzIxXHJcbiAqIOWIm+W7uuaXtumXtDogMTQ6MjZcclxuICovXHJcbmltcG9ydCBWdWUgZnJvbSBcInZ1ZVwiOyAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdnVl5qGG5p625YyFXHJcbmltcG9ydCBWdWVSb3V0ZXIgZnJvbSBcInZ1ZS1yb3V0ZXJcIjsgICAgICAgICAgICAgLy8g6Lev55Sx5o+S5Lu2XHJcbmltcG9ydCByb3V0ZXMgZnJvbSBcIi4vcm91dGVyXCI7ICAgICAgICAgICAgICAgICAgLy8g5a+85YWl6Lev55Sx6YWN572u5a+56LGhXHJcblxyXG5WdWUudXNlKFZ1ZVJvdXRlcik7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8g5aaC5p6c5L2/55So5qih5Z2X5YyW5py65Yi257yW56iLXHJcblxyXG5jb25zdCByb3V0ZXIgPSBuZXcgVnVlUm91dGVyKHtyb3V0ZXN9KTsgICAgICAgICAvLyDlrp7kvovljJbkuIDkuKpWdWVSb3V0ZXLot6/nlLHlr7nosaFcclxuY29uc3QgYXBwID0gbmV3IFZ1ZSh7cm91dGVyfSkuJG1vdW50KCcjYXBwJyk7ICAgLy8g5Yib5bu65ZKM5oyC6L295qC55a6e5L6LXHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0U6L1Rlc3RXb3JrL3Z1ZS9zcmMvYXBwLmpzIiwiLyohXG4gKiBWdWUuanMgdjIuMS4wXG4gKiAoYykgMjAxNC0yMDE2IEV2YW4gWW91XG4gKiBSZWxlYXNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXG4gKi9cbiFmdW5jdGlvbihlLHQpe1wib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzJiZcInVuZGVmaW5lZFwiIT10eXBlb2YgbW9kdWxlP21vZHVsZS5leHBvcnRzPXQoKTpcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQ/ZGVmaW5lKHQpOmUuVnVlPXQoKX0odGhpcyxmdW5jdGlvbigpe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIGUoZSl7cmV0dXJuIG51bGw9PWU/XCJcIjpcIm9iamVjdFwiPT10eXBlb2YgZT9KU09OLnN0cmluZ2lmeShlLG51bGwsMik6U3RyaW5nKGUpfWZ1bmN0aW9uIHQoZSl7dmFyIHQ9cGFyc2VGbG9hdChlLDEwKTtyZXR1cm4gdHx8MD09PXQ/dDplfWZ1bmN0aW9uIG4oZSx0KXtmb3IodmFyIG49T2JqZWN0LmNyZWF0ZShudWxsKSxyPWUuc3BsaXQoXCIsXCIpLGk9MDtpPHIubGVuZ3RoO2krKyluW3JbaV1dPSEwO3JldHVybiB0P2Z1bmN0aW9uKGUpe3JldHVybiBuW2UudG9Mb3dlckNhc2UoKV19OmZ1bmN0aW9uKGUpe3JldHVybiBuW2VdfX1mdW5jdGlvbiByKGUsdCl7aWYoZS5sZW5ndGgpe3ZhciBuPWUuaW5kZXhPZih0KTtpZihuPi0xKXJldHVybiBlLnNwbGljZShuLDEpfX1mdW5jdGlvbiBpKGUsdCl7cmV0dXJuIFVyLmNhbGwoZSx0KX1mdW5jdGlvbiBvKGUpe3JldHVyblwic3RyaW5nXCI9PXR5cGVvZiBlfHxcIm51bWJlclwiPT10eXBlb2YgZX1mdW5jdGlvbiBhKGUpe3ZhciB0PU9iamVjdC5jcmVhdGUobnVsbCk7cmV0dXJuIGZ1bmN0aW9uKG4pe3ZhciByPXRbbl07cmV0dXJuIHJ8fCh0W25dPWUobikpfX1mdW5jdGlvbiBzKGUsdCl7ZnVuY3Rpb24gbihuKXt2YXIgcj1hcmd1bWVudHMubGVuZ3RoO3JldHVybiByP3I+MT9lLmFwcGx5KHQsYXJndW1lbnRzKTplLmNhbGwodCxuKTplLmNhbGwodCl9cmV0dXJuIG4uX2xlbmd0aD1lLmxlbmd0aCxufWZ1bmN0aW9uIGMoZSx0KXt0PXR8fDA7Zm9yKHZhciBuPWUubGVuZ3RoLXQscj1uZXcgQXJyYXkobik7bi0tOylyW25dPWVbbit0XTtyZXR1cm4gcn1mdW5jdGlvbiBsKGUsdCl7Zm9yKHZhciBuIGluIHQpZVtuXT10W25dO3JldHVybiBlfWZ1bmN0aW9uIHUoZSl7cmV0dXJuIG51bGwhPT1lJiZcIm9iamVjdFwiPT10eXBlb2YgZX1mdW5jdGlvbiBmKGUpe3JldHVybiBxci5jYWxsKGUpPT09V3J9ZnVuY3Rpb24gZChlKXtmb3IodmFyIHQ9e30sbj0wO248ZS5sZW5ndGg7bisrKWVbbl0mJmwodCxlW25dKTtyZXR1cm4gdH1mdW5jdGlvbiBwKCl7fWZ1bmN0aW9uIHYoZSl7cmV0dXJuIGUucmVkdWNlKGZ1bmN0aW9uKGUsdCl7cmV0dXJuIGUuY29uY2F0KHQuc3RhdGljS2V5c3x8W10pfSxbXSkuam9pbihcIixcIil9ZnVuY3Rpb24gaChlLHQpe3JldHVybiBlPT10fHwhKCF1KGUpfHwhdSh0KSkmJkpTT04uc3RyaW5naWZ5KGUpPT09SlNPTi5zdHJpbmdpZnkodCl9ZnVuY3Rpb24gbShlLHQpe2Zvcih2YXIgbj0wO248ZS5sZW5ndGg7bisrKWlmKGgoZVtuXSx0KSlyZXR1cm4gbjtyZXR1cm4tMX1mdW5jdGlvbiBnKGUpe3ZhciB0PShlK1wiXCIpLmNoYXJDb2RlQXQoMCk7cmV0dXJuIDM2PT09dHx8OTU9PT10fWZ1bmN0aW9uIHkoZSx0LG4scil7T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsdCx7dmFsdWU6bixlbnVtZXJhYmxlOiEhcix3cml0YWJsZTohMCxjb25maWd1cmFibGU6ITB9KX1mdW5jdGlvbiBfKGUpe2lmKCFHci50ZXN0KGUpKXt2YXIgdD1lLnNwbGl0KFwiLlwiKTtyZXR1cm4gZnVuY3Rpb24oZSl7Zm9yKHZhciBuPTA7bjx0Lmxlbmd0aDtuKyspe2lmKCFlKXJldHVybjtlPWVbdFtuXV19cmV0dXJuIGV9fX1mdW5jdGlvbiBiKGUpe3JldHVybi9uYXRpdmUgY29kZS8udGVzdChlLnRvU3RyaW5nKCkpfWZ1bmN0aW9uICQoZSl7ZGkudGFyZ2V0JiZwaS5wdXNoKGRpLnRhcmdldCksZGkudGFyZ2V0PWV9ZnVuY3Rpb24gdygpe2RpLnRhcmdldD1waS5wb3AoKX1mdW5jdGlvbiB4KGUsdCl7ZS5fX3Byb3RvX189dH1mdW5jdGlvbiBDKGUsdCxuKXtmb3IodmFyIHI9MCxpPW4ubGVuZ3RoO3I8aTtyKyspe3ZhciBvPW5bcl07eShlLG8sdFtvXSl9fWZ1bmN0aW9uIGsoZSl7aWYodShlKSl7dmFyIHQ7cmV0dXJuIGkoZSxcIl9fb2JfX1wiKSYmZS5fX29iX18gaW5zdGFuY2VvZiB5aT90PWUuX19vYl9fOmdpLnNob3VsZENvbnZlcnQmJiFvaSgpJiYoQXJyYXkuaXNBcnJheShlKXx8ZihlKSkmJk9iamVjdC5pc0V4dGVuc2libGUoZSkmJiFlLl9pc1Z1ZSYmKHQ9bmV3IHlpKGUpKSx0fX1mdW5jdGlvbiBBKGUsdCxuLHIpe3ZhciBpPW5ldyBkaSxvPU9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoZSx0KTtpZighb3x8by5jb25maWd1cmFibGUhPT0hMSl7dmFyIGE9byYmby5nZXQscz1vJiZvLnNldCxjPWsobik7T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsdCx7ZW51bWVyYWJsZTohMCxjb25maWd1cmFibGU6ITAsZ2V0OmZ1bmN0aW9uKCl7dmFyIHQ9YT9hLmNhbGwoZSk6bjtyZXR1cm4gZGkudGFyZ2V0JiYoaS5kZXBlbmQoKSxjJiZjLmRlcC5kZXBlbmQoKSxBcnJheS5pc0FycmF5KHQpJiZUKHQpKSx0fSxzZXQ6ZnVuY3Rpb24odCl7dmFyIHI9YT9hLmNhbGwoZSk6bjt0PT09cnx8dCE9PXQmJnIhPT1yfHwocz9zLmNhbGwoZSx0KTpuPXQsYz1rKHQpLGkubm90aWZ5KCkpfX0pfX1mdW5jdGlvbiBPKGUsdCxuKXtpZihBcnJheS5pc0FycmF5KGUpKXJldHVybiBlLmxlbmd0aD1NYXRoLm1heChlLmxlbmd0aCx0KSxlLnNwbGljZSh0LDEsbiksbjtpZihpKGUsdCkpcmV0dXJuIHZvaWQoZVt0XT1uKTt2YXIgcj1lLl9fb2JfXztpZighKGUuX2lzVnVlfHxyJiZyLnZtQ291bnQpKXJldHVybiByPyhBKHIudmFsdWUsdCxuKSxyLmRlcC5ub3RpZnkoKSxuKTp2b2lkKGVbdF09bil9ZnVuY3Rpb24gUyhlLHQpe3ZhciBuPWUuX19vYl9fO2UuX2lzVnVlfHxuJiZuLnZtQ291bnR8fGkoZSx0KSYmKGRlbGV0ZSBlW3RdLG4mJm4uZGVwLm5vdGlmeSgpKX1mdW5jdGlvbiBUKGUpe2Zvcih2YXIgdD12b2lkIDAsbj0wLHI9ZS5sZW5ndGg7bjxyO24rKyl0PWVbbl0sdCYmdC5fX29iX18mJnQuX19vYl9fLmRlcC5kZXBlbmQoKSxBcnJheS5pc0FycmF5KHQpJiZUKHQpfWZ1bmN0aW9uIGooZSx0KXtpZighdClyZXR1cm4gZTtmb3IodmFyIG4scixvLGE9T2JqZWN0LmtleXModCkscz0wO3M8YS5sZW5ndGg7cysrKW49YVtzXSxyPWVbbl0sbz10W25dLGkoZSxuKT9mKHIpJiZmKG8pJiZqKHIsbyk6TyhlLG4sbyk7cmV0dXJuIGV9ZnVuY3Rpb24gRShlLHQpe3JldHVybiB0P2U/ZS5jb25jYXQodCk6QXJyYXkuaXNBcnJheSh0KT90Olt0XTplfWZ1bmN0aW9uIE4oZSx0KXt2YXIgbj1PYmplY3QuY3JlYXRlKGV8fG51bGwpO3JldHVybiB0P2wobix0KTpufWZ1bmN0aW9uIEwoZSl7dmFyIHQ9ZS5wcm9wcztpZih0KXt2YXIgbixyLGksbz17fTtpZihBcnJheS5pc0FycmF5KHQpKWZvcihuPXQubGVuZ3RoO24tLTspcj10W25dLFwic3RyaW5nXCI9PXR5cGVvZiByJiYoaT1WcihyKSxvW2ldPXt0eXBlOm51bGx9KTtlbHNlIGlmKGYodCkpZm9yKHZhciBhIGluIHQpcj10W2FdLGk9VnIoYSksb1tpXT1mKHIpP3I6e3R5cGU6cn07ZS5wcm9wcz1vfX1mdW5jdGlvbiBEKGUpe3ZhciB0PWUuZGlyZWN0aXZlcztpZih0KWZvcih2YXIgbiBpbiB0KXt2YXIgcj10W25dO1wiZnVuY3Rpb25cIj09dHlwZW9mIHImJih0W25dPXtiaW5kOnIsdXBkYXRlOnJ9KX19ZnVuY3Rpb24gTShlLHQsbil7ZnVuY3Rpb24gcihyKXt2YXIgaT1faVtyXXx8Ymk7dVtyXT1pKGVbcl0sdFtyXSxuLHIpfUwodCksRCh0KTt2YXIgbz10LmV4dGVuZHM7aWYobyYmKGU9XCJmdW5jdGlvblwiPT10eXBlb2Ygbz9NKGUsby5vcHRpb25zLG4pOk0oZSxvLG4pKSx0Lm1peGlucylmb3IodmFyIGE9MCxzPXQubWl4aW5zLmxlbmd0aDthPHM7YSsrKXt2YXIgYz10Lm1peGluc1thXTtjLnByb3RvdHlwZSBpbnN0YW5jZW9mIFJlJiYoYz1jLm9wdGlvbnMpLGU9TShlLGMsbil9dmFyIGwsdT17fTtmb3IobCBpbiBlKXIobCk7Zm9yKGwgaW4gdClpKGUsbCl8fHIobCk7cmV0dXJuIHV9ZnVuY3Rpb24gUChlLHQsbixyKXtpZihcInN0cmluZ1wiPT10eXBlb2Ygbil7dmFyIGk9ZVt0XSxvPWlbbl18fGlbVnIobildfHxpW3pyKFZyKG4pKV07cmV0dXJuIG99fWZ1bmN0aW9uIFIoZSx0LG4scil7dmFyIG89dFtlXSxhPSFpKG4sZSkscz1uW2VdO2lmKEIoby50eXBlKSYmKGEmJiFpKG8sXCJkZWZhdWx0XCIpP3M9ITE6XCJcIiE9PXMmJnMhPT1LcihlKXx8KHM9ITApKSx2b2lkIDA9PT1zKXtzPUkocixvLGUpO3ZhciBjPWdpLnNob3VsZENvbnZlcnQ7Z2kuc2hvdWxkQ29udmVydD0hMCxrKHMpLGdpLnNob3VsZENvbnZlcnQ9Y31yZXR1cm4gc31mdW5jdGlvbiBJKGUsdCxuKXtpZihpKHQsXCJkZWZhdWx0XCIpKXt2YXIgcj10LmRlZmF1bHQ7cmV0dXJuIHUociksZSYmZS4kb3B0aW9ucy5wcm9wc0RhdGEmJnZvaWQgMD09PWUuJG9wdGlvbnMucHJvcHNEYXRhW25dJiZ2b2lkIDAhPT1lW25dP2Vbbl06XCJmdW5jdGlvblwiPT10eXBlb2YgciYmdC50eXBlIT09RnVuY3Rpb24/ci5jYWxsKGUpOnJ9fWZ1bmN0aW9uIEYoZSl7dmFyIHQ9ZSYmZS50b1N0cmluZygpLm1hdGNoKC9eXFxzKmZ1bmN0aW9uIChcXHcrKS8pO3JldHVybiB0JiZ0WzFdfWZ1bmN0aW9uIEIoZSl7aWYoIUFycmF5LmlzQXJyYXkoZSkpcmV0dXJuXCJCb29sZWFuXCI9PT1GKGUpO2Zvcih2YXIgdD0wLG49ZS5sZW5ndGg7dDxuO3QrKylpZihcIkJvb2xlYW5cIj09PUYoZVt0XSkpcmV0dXJuITA7cmV0dXJuITF9ZnVuY3Rpb24gVSgpe3dpLmxlbmd0aD0wLHhpPXt9LENpPWtpPSExfWZ1bmN0aW9uIEgoKXtmb3Ioa2k9ITAsd2kuc29ydChmdW5jdGlvbihlLHQpe3JldHVybiBlLmlkLXQuaWR9KSxBaT0wO0FpPHdpLmxlbmd0aDtBaSsrKXt2YXIgZT13aVtBaV0sdD1lLmlkO3hpW3RdPW51bGwsZS5ydW4oKX1haSYmbGkuZGV2dG9vbHMmJmFpLmVtaXQoXCJmbHVzaFwiKSxVKCl9ZnVuY3Rpb24gVihlKXt2YXIgdD1lLmlkO2lmKG51bGw9PXhpW3RdKXtpZih4aVt0XT0hMCxraSl7Zm9yKHZhciBuPXdpLmxlbmd0aC0xO24+PTAmJndpW25dLmlkPmUuaWQ7KW4tLTt3aS5zcGxpY2UoTWF0aC5tYXgobixBaSkrMSwwLGUpfWVsc2Ugd2kucHVzaChlKTtDaXx8KENpPSEwLHNpKEgpKX19ZnVuY3Rpb24geihlKXtUaS5jbGVhcigpLEooZSxUaSl9ZnVuY3Rpb24gSihlLHQpe3ZhciBuLHIsaT1BcnJheS5pc0FycmF5KGUpO2lmKChpfHx1KGUpKSYmT2JqZWN0LmlzRXh0ZW5zaWJsZShlKSl7aWYoZS5fX29iX18pe3ZhciBvPWUuX19vYl9fLmRlcC5pZDtpZih0LmhhcyhvKSlyZXR1cm47dC5hZGQobyl9aWYoaSlmb3Iobj1lLmxlbmd0aDtuLS07KUooZVtuXSx0KTtlbHNlIGZvcihyPU9iamVjdC5rZXlzKGUpLG49ci5sZW5ndGg7bi0tOylKKGVbcltuXV0sdCl9fWZ1bmN0aW9uIEsoZSl7ZS5fd2F0Y2hlcnM9W10scShlKSxXKGUpLFooZSksWShlKSxRKGUpfWZ1bmN0aW9uIHEoZSl7dmFyIHQ9ZS4kb3B0aW9ucy5wcm9wcztpZih0KXt2YXIgbj1lLiRvcHRpb25zLnByb3BzRGF0YXx8e30scj1lLiRvcHRpb25zLl9wcm9wS2V5cz1PYmplY3Qua2V5cyh0KSxpPSFlLiRwYXJlbnQ7Z2kuc2hvdWxkQ29udmVydD1pO2Zvcih2YXIgbz1mdW5jdGlvbihpKXt2YXIgbz1yW2ldO0EoZSxvLFIobyx0LG4sZSkpfSxhPTA7YTxyLmxlbmd0aDthKyspbyhhKTtnaS5zaG91bGRDb252ZXJ0PSEwfX1mdW5jdGlvbiBXKGUpe3ZhciB0PWUuJG9wdGlvbnMuZGF0YTt0PWUuX2RhdGE9XCJmdW5jdGlvblwiPT10eXBlb2YgdD90LmNhbGwoZSk6dHx8e30sZih0KXx8KHQ9e30pO2Zvcih2YXIgbj1PYmplY3Qua2V5cyh0KSxyPWUuJG9wdGlvbnMucHJvcHMsbz1uLmxlbmd0aDtvLS07KXImJmkocixuW29dKXx8dGUoZSxuW29dKTtrKHQpLHQuX19vYl9fJiZ0Ll9fb2JfXy52bUNvdW50Kyt9ZnVuY3Rpb24gWihlKXt2YXIgdD1lLiRvcHRpb25zLmNvbXB1dGVkO2lmKHQpZm9yKHZhciBuIGluIHQpe3ZhciByPXRbbl07XCJmdW5jdGlvblwiPT10eXBlb2Ygcj8oamkuZ2V0PUcocixlKSxqaS5zZXQ9cCk6KGppLmdldD1yLmdldD9yLmNhY2hlIT09ITE/RyhyLmdldCxlKTpzKHIuZ2V0LGUpOnAsamkuc2V0PXIuc2V0P3Moci5zZXQsZSk6cCksT2JqZWN0LmRlZmluZVByb3BlcnR5KGUsbixqaSl9fWZ1bmN0aW9uIEcoZSx0KXt2YXIgbj1uZXcgU2kodCxlLHAse2xhenk6ITB9KTtyZXR1cm4gZnVuY3Rpb24oKXtyZXR1cm4gbi5kaXJ0eSYmbi5ldmFsdWF0ZSgpLGRpLnRhcmdldCYmbi5kZXBlbmQoKSxuLnZhbHVlfX1mdW5jdGlvbiBZKGUpe3ZhciB0PWUuJG9wdGlvbnMubWV0aG9kcztpZih0KWZvcih2YXIgbiBpbiB0KWVbbl09bnVsbD09dFtuXT9wOnModFtuXSxlKX1mdW5jdGlvbiBRKGUpe3ZhciB0PWUuJG9wdGlvbnMud2F0Y2g7aWYodClmb3IodmFyIG4gaW4gdCl7dmFyIHI9dFtuXTtpZihBcnJheS5pc0FycmF5KHIpKWZvcih2YXIgaT0wO2k8ci5sZW5ndGg7aSsrKVgoZSxuLHJbaV0pO2Vsc2UgWChlLG4scil9fWZ1bmN0aW9uIFgoZSx0LG4pe3ZhciByO2YobikmJihyPW4sbj1uLmhhbmRsZXIpLFwic3RyaW5nXCI9PXR5cGVvZiBuJiYobj1lW25dKSxlLiR3YXRjaCh0LG4scil9ZnVuY3Rpb24gZWUoZSl7dmFyIHQ9e307dC5nZXQ9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5fZGF0YX0sT2JqZWN0LmRlZmluZVByb3BlcnR5KGUucHJvdG90eXBlLFwiJGRhdGFcIix0KSxlLnByb3RvdHlwZS4kc2V0PU8sZS5wcm90b3R5cGUuJGRlbGV0ZT1TLGUucHJvdG90eXBlLiR3YXRjaD1mdW5jdGlvbihlLHQsbil7dmFyIHI9dGhpcztuPW58fHt9LG4udXNlcj0hMDt2YXIgaT1uZXcgU2kocixlLHQsbik7cmV0dXJuIG4uaW1tZWRpYXRlJiZ0LmNhbGwocixpLnZhbHVlKSxmdW5jdGlvbigpe2kudGVhcmRvd24oKX19fWZ1bmN0aW9uIHRlKGUsdCl7Zyh0KXx8T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsdCx7Y29uZmlndXJhYmxlOiEwLGVudW1lcmFibGU6ITAsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIGUuX2RhdGFbdF19LHNldDpmdW5jdGlvbihuKXtlLl9kYXRhW3RdPW59fSl9ZnVuY3Rpb24gbmUoZSl7dmFyIHQ9bmV3IEVpKGUudGFnLGUuZGF0YSxlLmNoaWxkcmVuLGUudGV4dCxlLmVsbSxlLm5zLGUuY29udGV4dCxlLmNvbXBvbmVudE9wdGlvbnMpO3JldHVybiB0LmlzU3RhdGljPWUuaXNTdGF0aWMsdC5rZXk9ZS5rZXksdC5pc0Nsb25lZD0hMCx0fWZ1bmN0aW9uIHJlKGUpe2Zvcih2YXIgdD1uZXcgQXJyYXkoZS5sZW5ndGgpLG49MDtuPGUubGVuZ3RoO24rKyl0W25dPW5lKGVbbl0pO3JldHVybiB0fWZ1bmN0aW9uIGllKGUsdCxuLHIpe3IrPXQ7dmFyIGk9ZS5fX2luamVjdGVkfHwoZS5fX2luamVjdGVkPXt9KTtpZighaVtyXSl7aVtyXT0hMDt2YXIgbz1lW3RdO28/ZVt0XT1mdW5jdGlvbigpe28uYXBwbHkodGhpcyxhcmd1bWVudHMpLG4uYXBwbHkodGhpcyxhcmd1bWVudHMpfTplW3RdPW59fWZ1bmN0aW9uIG9lKGUsdCxuLHIsaSl7dmFyIG8sYSxzLGMsbCx1O2ZvcihvIGluIGUpaWYoYT1lW29dLHM9dFtvXSxhKWlmKHMpe2lmKGEhPT1zKWlmKEFycmF5LmlzQXJyYXkocykpe3MubGVuZ3RoPWEubGVuZ3RoO2Zvcih2YXIgZj0wO2Y8cy5sZW5ndGg7ZisrKXNbZl09YVtmXTtlW29dPXN9ZWxzZSBzLmZuPWEsZVtvXT1zfWVsc2UgdT1cIiFcIj09PW8uY2hhckF0KDApLGw9dT9vLnNsaWNlKDEpOm8sQXJyYXkuaXNBcnJheShhKT9uKGwsYS5pbnZva2VyPWFlKGEpLHUpOihhLmludm9rZXJ8fChjPWEsYT1lW29dPXt9LGEuZm49YyxhLmludm9rZXI9c2UoYSkpLG4obCxhLmludm9rZXIsdSkpO2Vsc2U7Zm9yKG8gaW4gdCllW29dfHwobD1cIiFcIj09PW8uY2hhckF0KDApP28uc2xpY2UoMSk6byxyKGwsdFtvXS5pbnZva2VyKSl9ZnVuY3Rpb24gYWUoZSl7cmV0dXJuIGZ1bmN0aW9uKHQpe2Zvcih2YXIgbj1hcmd1bWVudHMscj0xPT09YXJndW1lbnRzLmxlbmd0aCxpPTA7aTxlLmxlbmd0aDtpKyspcj9lW2ldKHQpOmVbaV0uYXBwbHkobnVsbCxuKX19ZnVuY3Rpb24gc2UoZSl7cmV0dXJuIGZ1bmN0aW9uKHQpe3ZhciBuPTE9PT1hcmd1bWVudHMubGVuZ3RoO24/ZS5mbih0KTplLmZuLmFwcGx5KG51bGwsYXJndW1lbnRzKX19ZnVuY3Rpb24gY2UoZSx0LG4pe2lmKG8oZSkpcmV0dXJuW2xlKGUpXTtpZihBcnJheS5pc0FycmF5KGUpKXtmb3IodmFyIHI9W10saT0wLGE9ZS5sZW5ndGg7aTxhO2krKyl7dmFyIHM9ZVtpXSxjPXJbci5sZW5ndGgtMV07QXJyYXkuaXNBcnJheShzKT9yLnB1c2guYXBwbHkocixjZShzLHQsKG58fFwiXCIpK1wiX1wiK2kpKTpvKHMpP2MmJmMudGV4dD9jLnRleHQrPVN0cmluZyhzKTpcIlwiIT09cyYmci5wdXNoKGxlKHMpKTpzIGluc3RhbmNlb2YgRWkmJihzLnRleHQmJmMmJmMudGV4dD9jLmlzQ2xvbmVkfHwoYy50ZXh0Kz1zLnRleHQpOih0JiZ1ZShzLHQpLHMudGFnJiZudWxsPT1zLmtleSYmbnVsbCE9biYmKHMua2V5PVwiX192bGlzdFwiK24rXCJfXCIraStcIl9fXCIpLHIucHVzaChzKSkpfXJldHVybiByfX1mdW5jdGlvbiBsZShlKXtyZXR1cm4gbmV3IEVpKHZvaWQgMCx2b2lkIDAsdm9pZCAwLFN0cmluZyhlKSl9ZnVuY3Rpb24gdWUoZSx0KXtpZihlLnRhZyYmIWUubnMmJihlLm5zPXQsZS5jaGlsZHJlbikpZm9yKHZhciBuPTAscj1lLmNoaWxkcmVuLmxlbmd0aDtuPHI7bisrKXVlKGUuY2hpbGRyZW5bbl0sdCl9ZnVuY3Rpb24gZmUoZSl7cmV0dXJuIGUmJmUuZmlsdGVyKGZ1bmN0aW9uKGUpe3JldHVybiBlJiZlLmNvbXBvbmVudE9wdGlvbnN9KVswXX1mdW5jdGlvbiBkZShlKXt2YXIgdD1lLiRvcHRpb25zLG49dC5wYXJlbnQ7aWYobiYmIXQuYWJzdHJhY3Qpe2Zvcig7bi4kb3B0aW9ucy5hYnN0cmFjdCYmbi4kcGFyZW50OyluPW4uJHBhcmVudDtuLiRjaGlsZHJlbi5wdXNoKGUpfWUuJHBhcmVudD1uLGUuJHJvb3Q9bj9uLiRyb290OmUsZS4kY2hpbGRyZW49W10sZS4kcmVmcz17fSxlLl93YXRjaGVyPW51bGwsZS5faW5hY3RpdmU9ITEsZS5faXNNb3VudGVkPSExLGUuX2lzRGVzdHJveWVkPSExLGUuX2lzQmVpbmdEZXN0cm95ZWQ9ITF9ZnVuY3Rpb24gcGUoZSl7ZS5wcm90b3R5cGUuX21vdW50PWZ1bmN0aW9uKGUsdCl7dmFyIG49dGhpcztyZXR1cm4gbi4kZWw9ZSxuLiRvcHRpb25zLnJlbmRlcnx8KG4uJG9wdGlvbnMucmVuZGVyPU5pKSx2ZShuLFwiYmVmb3JlTW91bnRcIiksbi5fd2F0Y2hlcj1uZXcgU2kobixmdW5jdGlvbigpe24uX3VwZGF0ZShuLl9yZW5kZXIoKSx0KX0scCksdD0hMSxudWxsPT1uLiR2bm9kZSYmKG4uX2lzTW91bnRlZD0hMCx2ZShuLFwibW91bnRlZFwiKSksbn0sZS5wcm90b3R5cGUuX3VwZGF0ZT1mdW5jdGlvbihlLHQpe3ZhciBuPXRoaXM7bi5faXNNb3VudGVkJiZ2ZShuLFwiYmVmb3JlVXBkYXRlXCIpO3ZhciByPW4uJGVsLGk9TGk7TGk9bjt2YXIgbz1uLl92bm9kZTtuLl92bm9kZT1lLG8/bi4kZWw9bi5fX3BhdGNoX18obyxlKTpuLiRlbD1uLl9fcGF0Y2hfXyhuLiRlbCxlLHQpLExpPWksciYmKHIuX192dWVfXz1udWxsKSxuLiRlbCYmKG4uJGVsLl9fdnVlX189biksbi4kdm5vZGUmJm4uJHBhcmVudCYmbi4kdm5vZGU9PT1uLiRwYXJlbnQuX3Zub2RlJiYobi4kcGFyZW50LiRlbD1uLiRlbCksbi5faXNNb3VudGVkJiZ2ZShuLFwidXBkYXRlZFwiKX0sZS5wcm90b3R5cGUuX3VwZGF0ZUZyb21QYXJlbnQ9ZnVuY3Rpb24oZSx0LG4scil7dmFyIGk9dGhpcyxvPSEoIWkuJG9wdGlvbnMuX3JlbmRlckNoaWxkcmVuJiYhcik7aWYoaS4kb3B0aW9ucy5fcGFyZW50Vm5vZGU9bixpLiRvcHRpb25zLl9yZW5kZXJDaGlsZHJlbj1yLGUmJmkuJG9wdGlvbnMucHJvcHMpe2dpLnNob3VsZENvbnZlcnQ9ITE7Zm9yKHZhciBhPWkuJG9wdGlvbnMuX3Byb3BLZXlzfHxbXSxzPTA7czxhLmxlbmd0aDtzKyspe3ZhciBjPWFbc107aVtjXT1SKGMsaS4kb3B0aW9ucy5wcm9wcyxlLGkpfWdpLnNob3VsZENvbnZlcnQ9ITAsaS4kb3B0aW9ucy5wcm9wc0RhdGE9ZX1pZih0KXt2YXIgbD1pLiRvcHRpb25zLl9wYXJlbnRMaXN0ZW5lcnM7aS4kb3B0aW9ucy5fcGFyZW50TGlzdGVuZXJzPXQsaS5fdXBkYXRlTGlzdGVuZXJzKHQsbCl9byYmKGkuJHNsb3RzPUVlKHIsaS5fcmVuZGVyQ29udGV4dCksaS4kZm9yY2VVcGRhdGUoKSl9LGUucHJvdG90eXBlLiRmb3JjZVVwZGF0ZT1mdW5jdGlvbigpe3ZhciBlPXRoaXM7ZS5fd2F0Y2hlciYmZS5fd2F0Y2hlci51cGRhdGUoKX0sZS5wcm90b3R5cGUuJGRlc3Ryb3k9ZnVuY3Rpb24oKXt2YXIgZT10aGlzO2lmKCFlLl9pc0JlaW5nRGVzdHJveWVkKXt2ZShlLFwiYmVmb3JlRGVzdHJveVwiKSxlLl9pc0JlaW5nRGVzdHJveWVkPSEwO3ZhciB0PWUuJHBhcmVudDshdHx8dC5faXNCZWluZ0Rlc3Ryb3llZHx8ZS4kb3B0aW9ucy5hYnN0cmFjdHx8cih0LiRjaGlsZHJlbixlKSxlLl93YXRjaGVyJiZlLl93YXRjaGVyLnRlYXJkb3duKCk7Zm9yKHZhciBuPWUuX3dhdGNoZXJzLmxlbmd0aDtuLS07KWUuX3dhdGNoZXJzW25dLnRlYXJkb3duKCk7ZS5fZGF0YS5fX29iX18mJmUuX2RhdGEuX19vYl9fLnZtQ291bnQtLSxlLl9pc0Rlc3Ryb3llZD0hMCx2ZShlLFwiZGVzdHJveWVkXCIpLGUuJG9mZigpLGUuJGVsJiYoZS4kZWwuX192dWVfXz1udWxsKSxlLl9fcGF0Y2hfXyhlLl92bm9kZSxudWxsKX19fWZ1bmN0aW9uIHZlKGUsdCl7dmFyIG49ZS4kb3B0aW9uc1t0XTtpZihuKWZvcih2YXIgcj0wLGk9bi5sZW5ndGg7cjxpO3IrKyluW3JdLmNhbGwoZSk7ZS4kZW1pdChcImhvb2s6XCIrdCl9ZnVuY3Rpb24gaGUoZSx0LG4scixpKXtpZihlKXt2YXIgbz1uLiRvcHRpb25zLl9iYXNlO2lmKHUoZSkmJihlPW8uZXh0ZW5kKGUpKSxcImZ1bmN0aW9uXCI9PXR5cGVvZiBlKXtpZighZS5jaWQpaWYoZS5yZXNvbHZlZCllPWUucmVzb2x2ZWQ7ZWxzZSBpZihlPXdlKGUsbyxmdW5jdGlvbigpe24uJGZvcmNlVXBkYXRlKCl9KSwhZSlyZXR1cm47UGUoZSksdD10fHx7fTt2YXIgYT14ZSh0LGUpO2lmKGUub3B0aW9ucy5mdW5jdGlvbmFsKXJldHVybiBtZShlLGEsdCxuLHIpO3ZhciBzPXQub247dC5vbj10Lm5hdGl2ZU9uLGUub3B0aW9ucy5hYnN0cmFjdCYmKHQ9e30pLGtlKHQpO3ZhciBjPWUub3B0aW9ucy5uYW1lfHxpLGw9bmV3IEVpKFwidnVlLWNvbXBvbmVudC1cIitlLmNpZCsoYz9cIi1cIitjOlwiXCIpLHQsdm9pZCAwLHZvaWQgMCx2b2lkIDAsdm9pZCAwLG4se0N0b3I6ZSxwcm9wc0RhdGE6YSxsaXN0ZW5lcnM6cyx0YWc6aSxjaGlsZHJlbjpyfSk7cmV0dXJuIGx9fX1mdW5jdGlvbiBtZShlLHQsbixyLGkpe3ZhciBvPXt9LGE9ZS5vcHRpb25zLnByb3BzO2lmKGEpZm9yKHZhciBjIGluIGEpb1tjXT1SKGMsYSx0KTt2YXIgbD1lLm9wdGlvbnMucmVuZGVyLmNhbGwobnVsbCxzKE9lLHtfc2VsZjpPYmplY3QuY3JlYXRlKHIpfSkse3Byb3BzOm8sZGF0YTpuLHBhcmVudDpyLGNoaWxkcmVuOmNlKGkpLHNsb3RzOmZ1bmN0aW9uKCl7cmV0dXJuIEVlKGkscil9fSk7cmV0dXJuIGwgaW5zdGFuY2VvZiBFaSYmKGwuZnVuY3Rpb25hbENvbnRleHQ9cixuLnNsb3QmJigobC5kYXRhfHwobC5kYXRhPXt9KSkuc2xvdD1uLnNsb3QpKSxsfWZ1bmN0aW9uIGdlKGUsdCl7dmFyIG49ZS5jb21wb25lbnRPcHRpb25zLHI9e19pc0NvbXBvbmVudDohMCxwYXJlbnQ6dCxwcm9wc0RhdGE6bi5wcm9wc0RhdGEsX2NvbXBvbmVudFRhZzpuLnRhZyxfcGFyZW50Vm5vZGU6ZSxfcGFyZW50TGlzdGVuZXJzOm4ubGlzdGVuZXJzLF9yZW5kZXJDaGlsZHJlbjpuLmNoaWxkcmVufSxpPWUuZGF0YS5pbmxpbmVUZW1wbGF0ZTtyZXR1cm4gaSYmKHIucmVuZGVyPWkucmVuZGVyLHIuc3RhdGljUmVuZGVyRm5zPWkuc3RhdGljUmVuZGVyRm5zKSxuZXcgbi5DdG9yKHIpfWZ1bmN0aW9uIHllKGUsdCl7aWYoIWUuY2hpbGR8fGUuY2hpbGQuX2lzRGVzdHJveWVkKXt2YXIgbj1lLmNoaWxkPWdlKGUsTGkpO24uJG1vdW50KHQ/ZS5lbG06dm9pZCAwLHQpfWVsc2UgaWYoZS5kYXRhLmtlZXBBbGl2ZSl7dmFyIHI9ZTtfZShyLHIpfX1mdW5jdGlvbiBfZShlLHQpe3ZhciBuPXQuY29tcG9uZW50T3B0aW9ucyxyPXQuY2hpbGQ9ZS5jaGlsZDtyLl91cGRhdGVGcm9tUGFyZW50KG4ucHJvcHNEYXRhLG4ubGlzdGVuZXJzLHQsbi5jaGlsZHJlbil9ZnVuY3Rpb24gYmUoZSl7ZS5jaGlsZC5faXNNb3VudGVkfHwoZS5jaGlsZC5faXNNb3VudGVkPSEwLHZlKGUuY2hpbGQsXCJtb3VudGVkXCIpKSxlLmRhdGEua2VlcEFsaXZlJiYoZS5jaGlsZC5faW5hY3RpdmU9ITEsdmUoZS5jaGlsZCxcImFjdGl2YXRlZFwiKSl9ZnVuY3Rpb24gJGUoZSl7ZS5jaGlsZC5faXNEZXN0cm95ZWR8fChlLmRhdGEua2VlcEFsaXZlPyhlLmNoaWxkLl9pbmFjdGl2ZT0hMCx2ZShlLmNoaWxkLFwiZGVhY3RpdmF0ZWRcIikpOmUuY2hpbGQuJGRlc3Ryb3koKSl9ZnVuY3Rpb24gd2UoZSx0LG4pe2lmKCFlLnJlcXVlc3RlZCl7ZS5yZXF1ZXN0ZWQ9ITA7dmFyIHI9ZS5wZW5kaW5nQ2FsbGJhY2tzPVtuXSxpPSEwLG89ZnVuY3Rpb24obil7aWYodShuKSYmKG49dC5leHRlbmQobikpLGUucmVzb2x2ZWQ9biwhaSlmb3IodmFyIG89MCxhPXIubGVuZ3RoO288YTtvKyspcltvXShuKX0sYT1mdW5jdGlvbihlKXt9LHM9ZShvLGEpO3JldHVybiBzJiZcImZ1bmN0aW9uXCI9PXR5cGVvZiBzLnRoZW4mJiFlLnJlc29sdmVkJiZzLnRoZW4obyxhKSxpPSExLGUucmVzb2x2ZWR9ZS5wZW5kaW5nQ2FsbGJhY2tzLnB1c2gobil9ZnVuY3Rpb24geGUoZSx0KXt2YXIgbj10Lm9wdGlvbnMucHJvcHM7aWYobil7dmFyIHI9e30saT1lLmF0dHJzLG89ZS5wcm9wcyxhPWUuZG9tUHJvcHM7aWYoaXx8b3x8YSlmb3IodmFyIHMgaW4gbil7dmFyIGM9S3Iocyk7Q2UocixvLHMsYywhMCl8fENlKHIsaSxzLGMpfHxDZShyLGEscyxjKX1yZXR1cm4gcn19ZnVuY3Rpb24gQ2UoZSx0LG4scixvKXtpZih0KXtpZihpKHQsbikpcmV0dXJuIGVbbl09dFtuXSxvfHxkZWxldGUgdFtuXSwhMDtpZihpKHQscikpcmV0dXJuIGVbbl09dFtyXSxvfHxkZWxldGUgdFtyXSwhMH1yZXR1cm4hMX1mdW5jdGlvbiBrZShlKXtlLmhvb2t8fChlLmhvb2s9e30pO2Zvcih2YXIgdD0wO3Q8TWkubGVuZ3RoO3QrKyl7dmFyIG49TWlbdF0scj1lLmhvb2tbbl0saT1EaVtuXTtlLmhvb2tbbl09cj9BZShpLHIpOml9fWZ1bmN0aW9uIEFlKGUsdCl7cmV0dXJuIGZ1bmN0aW9uKG4scil7ZShuLHIpLHQobixyKX19ZnVuY3Rpb24gT2UoZSx0LG4pe3JldHVybiB0JiYoQXJyYXkuaXNBcnJheSh0KXx8XCJvYmplY3RcIiE9dHlwZW9mIHQpJiYobj10LHQ9dm9pZCAwKSxTZSh0aGlzLl9zZWxmLGUsdCxuKX1mdW5jdGlvbiBTZShlLHQsbixyKXtpZighbnx8IW4uX19vYl9fKXtpZighdClyZXR1cm4gTmkoKTtpZihBcnJheS5pc0FycmF5KHIpJiZcImZ1bmN0aW9uXCI9PXR5cGVvZiByWzBdJiYobj1ufHx7fSxuLnNjb3BlZFNsb3RzPXtkZWZhdWx0OnJbMF19LHIubGVuZ3RoPTApLFwic3RyaW5nXCI9PXR5cGVvZiB0KXt2YXIgaSxvPWxpLmdldFRhZ05hbWVzcGFjZSh0KTtpZihsaS5pc1Jlc2VydmVkVGFnKHQpKXJldHVybiBuZXcgRWkodCxuLGNlKHIsbyksdm9pZCAwLHZvaWQgMCxvLGUpO2lmKGk9UChlLiRvcHRpb25zLFwiY29tcG9uZW50c1wiLHQpKXJldHVybiBoZShpLG4sZSxyLHQpO3ZhciBhPVwiZm9yZWlnbk9iamVjdFwiPT09dD9cInhodG1sXCI6bztyZXR1cm4gbmV3IEVpKHQsbixjZShyLGEpLHZvaWQgMCx2b2lkIDAsbyxlKX1yZXR1cm4gaGUodCxuLGUscil9fWZ1bmN0aW9uIFRlKGUpe2UuJHZub2RlPW51bGwsZS5fdm5vZGU9bnVsbCxlLl9zdGF0aWNUcmVlcz1udWxsLGUuX3JlbmRlckNvbnRleHQ9ZS4kb3B0aW9ucy5fcGFyZW50Vm5vZGUmJmUuJG9wdGlvbnMuX3BhcmVudFZub2RlLmNvbnRleHQsZS4kc2xvdHM9RWUoZS4kb3B0aW9ucy5fcmVuZGVyQ2hpbGRyZW4sZS5fcmVuZGVyQ29udGV4dCksZS4kc2NvcGVkU2xvdHM9bnVsbCxlLiRjcmVhdGVFbGVtZW50PXMoT2UsZSksZS4kb3B0aW9ucy5lbCYmZS4kbW91bnQoZS4kb3B0aW9ucy5lbCl9ZnVuY3Rpb24gamUobil7ZnVuY3Rpb24gcihlLHQsbil7aWYoQXJyYXkuaXNBcnJheShlKSlmb3IodmFyIHI9MDtyPGUubGVuZ3RoO3IrKyllW3JdJiZcInN0cmluZ1wiIT10eXBlb2YgZVtyXSYmaShlW3JdLHQrXCJfXCIrcixuKTtlbHNlIGkoZSx0LG4pfWZ1bmN0aW9uIGkoZSx0LG4pe2UuaXNTdGF0aWM9ITAsZS5rZXk9dCxlLmlzT25jZT1ufW4ucHJvdG90eXBlLiRuZXh0VGljaz1mdW5jdGlvbihlKXtyZXR1cm4gc2koZSx0aGlzKX0sbi5wcm90b3R5cGUuX3JlbmRlcj1mdW5jdGlvbigpe3ZhciBlPXRoaXMsdD1lLiRvcHRpb25zLG49dC5yZW5kZXIscj10LnN0YXRpY1JlbmRlckZucyxpPXQuX3BhcmVudFZub2RlO2lmKGUuX2lzTW91bnRlZClmb3IodmFyIG8gaW4gZS4kc2xvdHMpZS4kc2xvdHNbb109cmUoZS4kc2xvdHNbb10pO2kmJihlLiRzY29wZWRTbG90cz1pLmRhdGEuc2NvcGVkU2xvdHMpLHImJiFlLl9zdGF0aWNUcmVlcyYmKGUuX3N0YXRpY1RyZWVzPVtdKSxlLiR2bm9kZT1pO3ZhciBhO3RyeXthPW4uY2FsbChlLl9yZW5kZXJQcm94eSxlLiRjcmVhdGVFbGVtZW50KX1jYXRjaCh0KXtpZihsaS5lcnJvckhhbmRsZXIpbGkuZXJyb3JIYW5kbGVyLmNhbGwobnVsbCx0LGUpO2Vsc2V7aWYob2koKSl0aHJvdyB0O2NvbnNvbGUuZXJyb3IodCl9YT1lLl92bm9kZX1yZXR1cm4gYSBpbnN0YW5jZW9mIEVpfHwoYT1OaSgpKSxhLnBhcmVudD1pLGF9LG4ucHJvdG90eXBlLl9oPU9lLG4ucHJvdG90eXBlLl9zPWUsbi5wcm90b3R5cGUuX249dCxuLnByb3RvdHlwZS5fZT1OaSxuLnByb3RvdHlwZS5fcT1oLG4ucHJvdG90eXBlLl9pPW0sbi5wcm90b3R5cGUuX209ZnVuY3Rpb24oZSx0KXt2YXIgbj10aGlzLl9zdGF0aWNUcmVlc1tlXTtyZXR1cm4gbiYmIXQ/QXJyYXkuaXNBcnJheShuKT9yZShuKTpuZShuKToobj10aGlzLl9zdGF0aWNUcmVlc1tlXT10aGlzLiRvcHRpb25zLnN0YXRpY1JlbmRlckZuc1tlXS5jYWxsKHRoaXMuX3JlbmRlclByb3h5KSxyKG4sXCJfX3N0YXRpY19fXCIrZSwhMSksbil9LG4ucHJvdG90eXBlLl9vPWZ1bmN0aW9uKGUsdCxuKXtyZXR1cm4gcihlLFwiX19vbmNlX19cIit0KyhuP1wiX1wiK246XCJcIiksITApLGV9O3ZhciBvPWZ1bmN0aW9uKGUpe3JldHVybiBlfTtuLnByb3RvdHlwZS5fZj1mdW5jdGlvbihlKXtyZXR1cm4gUCh0aGlzLiRvcHRpb25zLFwiZmlsdGVyc1wiLGUsITApfHxvfSxuLnByb3RvdHlwZS5fbD1mdW5jdGlvbihlLHQpe3ZhciBuLHIsaSxvLGE7aWYoQXJyYXkuaXNBcnJheShlKSlmb3Iobj1uZXcgQXJyYXkoZS5sZW5ndGgpLHI9MCxpPWUubGVuZ3RoO3I8aTtyKyspbltyXT10KGVbcl0scik7ZWxzZSBpZihcIm51bWJlclwiPT10eXBlb2YgZSlmb3Iobj1uZXcgQXJyYXkoZSkscj0wO3I8ZTtyKyspbltyXT10KHIrMSxyKTtlbHNlIGlmKHUoZSkpZm9yKG89T2JqZWN0LmtleXMoZSksbj1uZXcgQXJyYXkoby5sZW5ndGgpLHI9MCxpPW8ubGVuZ3RoO3I8aTtyKyspYT1vW3JdLG5bcl09dChlW2FdLGEscik7cmV0dXJuIG59LG4ucHJvdG90eXBlLl90PWZ1bmN0aW9uKGUsdCxuKXt2YXIgcj10aGlzLiRzY29wZWRTbG90cyYmdGhpcy4kc2NvcGVkU2xvdHNbZV07aWYocilyZXR1cm4gcihufHx7fSl8fHQ7dmFyIGk9dGhpcy4kc2xvdHNbZV07cmV0dXJuIGl8fHR9LG4ucHJvdG90eXBlLl9iPWZ1bmN0aW9uKGUsdCxuLHIpe2lmKG4paWYodShuKSl7QXJyYXkuaXNBcnJheShuKSYmKG49ZChuKSk7Zm9yKHZhciBpIGluIG4paWYoXCJjbGFzc1wiPT09aXx8XCJzdHlsZVwiPT09aSllW2ldPW5baV07ZWxzZXt2YXIgbz1yfHxsaS5tdXN0VXNlUHJvcCh0LGkpP2UuZG9tUHJvcHN8fChlLmRvbVByb3BzPXt9KTplLmF0dHJzfHwoZS5hdHRycz17fSk7b1tpXT1uW2ldfX1lbHNlO3JldHVybiBlfSxuLnByb3RvdHlwZS5faz1mdW5jdGlvbihlKXtyZXR1cm4gbGkua2V5Q29kZXNbZV19fWZ1bmN0aW9uIEVlKGUsdCl7dmFyIG49e307aWYoIWUpcmV0dXJuIG47Zm9yKHZhciByLGksbz1jZShlKXx8W10sYT1bXSxzPTAsYz1vLmxlbmd0aDtzPGM7cysrKWlmKGk9b1tzXSwoaS5jb250ZXh0PT09dHx8aS5mdW5jdGlvbmFsQ29udGV4dD09PXQpJiZpLmRhdGEmJihyPWkuZGF0YS5zbG90KSl7dmFyIGw9bltyXXx8KG5bcl09W10pO1widGVtcGxhdGVcIj09PWkudGFnP2wucHVzaC5hcHBseShsLGkuY2hpbGRyZW4pOmwucHVzaChpKX1lbHNlIGEucHVzaChpKTtyZXR1cm4gYS5sZW5ndGgmJigxIT09YS5sZW5ndGh8fFwiIFwiIT09YVswXS50ZXh0JiYhYVswXS5pc0NvbW1lbnQpJiYobi5kZWZhdWx0PWEpLG59ZnVuY3Rpb24gTmUoZSl7ZS5fZXZlbnRzPU9iamVjdC5jcmVhdGUobnVsbCk7dmFyIHQ9ZS4kb3B0aW9ucy5fcGFyZW50TGlzdGVuZXJzLG49cyhlLiRvbixlKSxyPXMoZS4kb2ZmLGUpO2UuX3VwZGF0ZUxpc3RlbmVycz1mdW5jdGlvbih0LGkpe29lKHQsaXx8e30sbixyLGUpfSx0JiZlLl91cGRhdGVMaXN0ZW5lcnModCl9ZnVuY3Rpb24gTGUoZSl7ZS5wcm90b3R5cGUuJG9uPWZ1bmN0aW9uKGUsdCl7dmFyIG49dGhpcztyZXR1cm4obi5fZXZlbnRzW2VdfHwobi5fZXZlbnRzW2VdPVtdKSkucHVzaCh0KSxufSxlLnByb3RvdHlwZS4kb25jZT1mdW5jdGlvbihlLHQpe2Z1bmN0aW9uIG4oKXtyLiRvZmYoZSxuKSx0LmFwcGx5KHIsYXJndW1lbnRzKX12YXIgcj10aGlzO3JldHVybiBuLmZuPXQsci4kb24oZSxuKSxyfSxlLnByb3RvdHlwZS4kb2ZmPWZ1bmN0aW9uKGUsdCl7dmFyIG49dGhpcztpZighYXJndW1lbnRzLmxlbmd0aClyZXR1cm4gbi5fZXZlbnRzPU9iamVjdC5jcmVhdGUobnVsbCksbjt2YXIgcj1uLl9ldmVudHNbZV07aWYoIXIpcmV0dXJuIG47aWYoMT09PWFyZ3VtZW50cy5sZW5ndGgpcmV0dXJuIG4uX2V2ZW50c1tlXT1udWxsLG47Zm9yKHZhciBpLG89ci5sZW5ndGg7by0tOylpZihpPXJbb10saT09PXR8fGkuZm49PT10KXtyLnNwbGljZShvLDEpO2JyZWFrfXJldHVybiBufSxlLnByb3RvdHlwZS4kZW1pdD1mdW5jdGlvbihlKXt2YXIgdD10aGlzLG49dC5fZXZlbnRzW2VdO2lmKG4pe249bi5sZW5ndGg+MT9jKG4pOm47Zm9yKHZhciByPWMoYXJndW1lbnRzLDEpLGk9MCxvPW4ubGVuZ3RoO2k8bztpKyspbltpXS5hcHBseSh0LHIpfXJldHVybiB0fX1mdW5jdGlvbiBEZShlKXtlLnByb3RvdHlwZS5faW5pdD1mdW5jdGlvbihlKXt2YXIgdD10aGlzO3QuX3VpZD1QaSsrLHQuX2lzVnVlPSEwLGUmJmUuX2lzQ29tcG9uZW50P01lKHQsZSk6dC4kb3B0aW9ucz1NKFBlKHQuY29uc3RydWN0b3IpLGV8fHt9LHQpLHQuX3JlbmRlclByb3h5PXQsdC5fc2VsZj10LGRlKHQpLE5lKHQpLHZlKHQsXCJiZWZvcmVDcmVhdGVcIiksSyh0KSx2ZSh0LFwiY3JlYXRlZFwiKSxUZSh0KX19ZnVuY3Rpb24gTWUoZSx0KXt2YXIgbj1lLiRvcHRpb25zPU9iamVjdC5jcmVhdGUoZS5jb25zdHJ1Y3Rvci5vcHRpb25zKTtuLnBhcmVudD10LnBhcmVudCxuLnByb3BzRGF0YT10LnByb3BzRGF0YSxuLl9wYXJlbnRWbm9kZT10Ll9wYXJlbnRWbm9kZSxuLl9wYXJlbnRMaXN0ZW5lcnM9dC5fcGFyZW50TGlzdGVuZXJzLG4uX3JlbmRlckNoaWxkcmVuPXQuX3JlbmRlckNoaWxkcmVuLG4uX2NvbXBvbmVudFRhZz10Ll9jb21wb25lbnRUYWcsdC5yZW5kZXImJihuLnJlbmRlcj10LnJlbmRlcixuLnN0YXRpY1JlbmRlckZucz10LnN0YXRpY1JlbmRlckZucyl9ZnVuY3Rpb24gUGUoZSl7dmFyIHQ9ZS5vcHRpb25zO2lmKGUuc3VwZXIpe3ZhciBuPWUuc3VwZXIub3B0aW9ucyxyPWUuc3VwZXJPcHRpb25zLGk9ZS5leHRlbmRPcHRpb25zO24hPT1yJiYoZS5zdXBlck9wdGlvbnM9bixpLnJlbmRlcj10LnJlbmRlcixpLnN0YXRpY1JlbmRlckZucz10LnN0YXRpY1JlbmRlckZucyxpLl9zY29wZUlkPXQuX3Njb3BlSWQsdD1lLm9wdGlvbnM9TShuLGkpLHQubmFtZSYmKHQuY29tcG9uZW50c1t0Lm5hbWVdPWUpKX1yZXR1cm4gdH1mdW5jdGlvbiBSZShlKXt0aGlzLl9pbml0KGUpfWZ1bmN0aW9uIEllKGUpe2UudXNlPWZ1bmN0aW9uKGUpe2lmKCFlLmluc3RhbGxlZCl7dmFyIHQ9Yyhhcmd1bWVudHMsMSk7cmV0dXJuIHQudW5zaGlmdCh0aGlzKSxcImZ1bmN0aW9uXCI9PXR5cGVvZiBlLmluc3RhbGw/ZS5pbnN0YWxsLmFwcGx5KGUsdCk6ZS5hcHBseShudWxsLHQpLGUuaW5zdGFsbGVkPSEwLHRoaXN9fX1mdW5jdGlvbiBGZShlKXtlLm1peGluPWZ1bmN0aW9uKGUpe3RoaXMub3B0aW9ucz1NKHRoaXMub3B0aW9ucyxlKX19ZnVuY3Rpb24gQmUoZSl7ZS5jaWQ9MDt2YXIgdD0xO2UuZXh0ZW5kPWZ1bmN0aW9uKGUpe2U9ZXx8e307dmFyIG49dGhpcyxyPW4uY2lkLGk9ZS5fQ3Rvcnx8KGUuX0N0b3I9e30pO2lmKGlbcl0pcmV0dXJuIGlbcl07dmFyIG89ZS5uYW1lfHxuLm9wdGlvbnMubmFtZSxhPWZ1bmN0aW9uKGUpe3RoaXMuX2luaXQoZSl9O3JldHVybiBhLnByb3RvdHlwZT1PYmplY3QuY3JlYXRlKG4ucHJvdG90eXBlKSxhLnByb3RvdHlwZS5jb25zdHJ1Y3Rvcj1hLGEuY2lkPXQrKyxhLm9wdGlvbnM9TShuLm9wdGlvbnMsZSksYS5zdXBlcj1uLGEuZXh0ZW5kPW4uZXh0ZW5kLGEubWl4aW49bi5taXhpbixhLnVzZT1uLnVzZSxsaS5fYXNzZXRUeXBlcy5mb3JFYWNoKGZ1bmN0aW9uKGUpe2FbZV09bltlXX0pLG8mJihhLm9wdGlvbnMuY29tcG9uZW50c1tvXT1hKSxhLnN1cGVyT3B0aW9ucz1uLm9wdGlvbnMsYS5leHRlbmRPcHRpb25zPWUsaVtyXT1hLGF9fWZ1bmN0aW9uIFVlKGUpe2xpLl9hc3NldFR5cGVzLmZvckVhY2goZnVuY3Rpb24odCl7ZVt0XT1mdW5jdGlvbihlLG4pe3JldHVybiBuPyhcImNvbXBvbmVudFwiPT09dCYmZihuKSYmKG4ubmFtZT1uLm5hbWV8fGUsbj10aGlzLm9wdGlvbnMuX2Jhc2UuZXh0ZW5kKG4pKSxcImRpcmVjdGl2ZVwiPT09dCYmXCJmdW5jdGlvblwiPT10eXBlb2YgbiYmKG49e2JpbmQ6bix1cGRhdGU6bn0pLHRoaXMub3B0aW9uc1t0K1wic1wiXVtlXT1uLG4pOnRoaXMub3B0aW9uc1t0K1wic1wiXVtlXX19KX1mdW5jdGlvbiBIZShlLHQpe3JldHVyblwic3RyaW5nXCI9PXR5cGVvZiBlP2Uuc3BsaXQoXCIsXCIpLmluZGV4T2YodCk+LTE6ZS50ZXN0KHQpfWZ1bmN0aW9uIFZlKGUpe3ZhciB0PXt9O3QuZ2V0PWZ1bmN0aW9uKCl7cmV0dXJuIGxpfSxPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxcImNvbmZpZ1wiLHQpLGUudXRpbD0kaSxlLnNldD1PLGUuZGVsZXRlPVMsZS5uZXh0VGljaz1zaSxlLm9wdGlvbnM9T2JqZWN0LmNyZWF0ZShudWxsKSxsaS5fYXNzZXRUeXBlcy5mb3JFYWNoKGZ1bmN0aW9uKHQpe2Uub3B0aW9uc1t0K1wic1wiXT1PYmplY3QuY3JlYXRlKG51bGwpfSksZS5vcHRpb25zLl9iYXNlPWUsbChlLm9wdGlvbnMuY29tcG9uZW50cyxGaSksSWUoZSksRmUoZSksQmUoZSksVWUoZSl9ZnVuY3Rpb24gemUoZSl7Zm9yKHZhciB0PWUuZGF0YSxuPWUscj1lO3IuY2hpbGQ7KXI9ci5jaGlsZC5fdm5vZGUsci5kYXRhJiYodD1KZShyLmRhdGEsdCkpO2Zvcig7bj1uLnBhcmVudDspbi5kYXRhJiYodD1KZSh0LG4uZGF0YSkpO3JldHVybiBLZSh0KX1mdW5jdGlvbiBKZShlLHQpe3JldHVybntzdGF0aWNDbGFzczpxZShlLnN0YXRpY0NsYXNzLHQuc3RhdGljQ2xhc3MpLGNsYXNzOmUuY2xhc3M/W2UuY2xhc3MsdC5jbGFzc106dC5jbGFzc319ZnVuY3Rpb24gS2UoZSl7dmFyIHQ9ZS5jbGFzcyxuPWUuc3RhdGljQ2xhc3M7cmV0dXJuIG58fHQ/cWUobixXZSh0KSk6XCJcIn1mdW5jdGlvbiBxZShlLHQpe3JldHVybiBlP3Q/ZStcIiBcIit0OmU6dHx8XCJcIn1mdW5jdGlvbiBXZShlKXt2YXIgdD1cIlwiO2lmKCFlKXJldHVybiB0O2lmKFwic3RyaW5nXCI9PXR5cGVvZiBlKXJldHVybiBlO2lmKEFycmF5LmlzQXJyYXkoZSkpe2Zvcih2YXIgbixyPTAsaT1lLmxlbmd0aDtyPGk7cisrKWVbcl0mJihuPVdlKGVbcl0pKSYmKHQrPW4rXCIgXCIpO3JldHVybiB0LnNsaWNlKDAsLTEpfWlmKHUoZSkpe2Zvcih2YXIgbyBpbiBlKWVbb10mJih0Kz1vK1wiIFwiKTtyZXR1cm4gdC5zbGljZSgwLC0xKX1yZXR1cm4gdH1mdW5jdGlvbiBaZShlKXtyZXR1cm4gWGkoZSk/XCJzdmdcIjpcIm1hdGhcIj09PWU/XCJtYXRoXCI6dm9pZCAwfWZ1bmN0aW9uIEdlKGUpe2lmKCFRcilyZXR1cm4hMDtpZih0byhlKSlyZXR1cm4hMTtpZihlPWUudG9Mb3dlckNhc2UoKSxudWxsIT1ub1tlXSlyZXR1cm4gbm9bZV07dmFyIHQ9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChlKTtyZXR1cm4gZS5pbmRleE9mKFwiLVwiKT4tMT9ub1tlXT10LmNvbnN0cnVjdG9yPT09d2luZG93LkhUTUxVbmtub3duRWxlbWVudHx8dC5jb25zdHJ1Y3Rvcj09PXdpbmRvdy5IVE1MRWxlbWVudDpub1tlXT0vSFRNTFVua25vd25FbGVtZW50Ly50ZXN0KHQudG9TdHJpbmcoKSl9ZnVuY3Rpb24gWWUoZSl7aWYoXCJzdHJpbmdcIj09dHlwZW9mIGUpe2lmKGU9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihlKSwhZSlyZXR1cm4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKX1yZXR1cm4gZX1mdW5jdGlvbiBRZShlLHQpe3ZhciBuPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoZSk7cmV0dXJuXCJzZWxlY3RcIiE9PWU/bjoodC5kYXRhJiZ0LmRhdGEuYXR0cnMmJlwibXVsdGlwbGVcImluIHQuZGF0YS5hdHRycyYmbi5zZXRBdHRyaWJ1dGUoXCJtdWx0aXBsZVwiLFwibXVsdGlwbGVcIiksbil9ZnVuY3Rpb24gWGUoZSx0KXtyZXR1cm4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKFdpW2VdLHQpfWZ1bmN0aW9uIGV0KGUpe3JldHVybiBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShlKX1mdW5jdGlvbiB0dChlKXtyZXR1cm4gZG9jdW1lbnQuY3JlYXRlQ29tbWVudChlKX1mdW5jdGlvbiBudChlLHQsbil7ZS5pbnNlcnRCZWZvcmUodCxuKX1mdW5jdGlvbiBydChlLHQpe2UucmVtb3ZlQ2hpbGQodCl9ZnVuY3Rpb24gaXQoZSx0KXtlLmFwcGVuZENoaWxkKHQpfWZ1bmN0aW9uIG90KGUpe3JldHVybiBlLnBhcmVudE5vZGV9ZnVuY3Rpb24gYXQoZSl7cmV0dXJuIGUubmV4dFNpYmxpbmd9ZnVuY3Rpb24gc3QoZSl7cmV0dXJuIGUudGFnTmFtZX1mdW5jdGlvbiBjdChlLHQpe2UudGV4dENvbnRlbnQ9dH1mdW5jdGlvbiBsdChlKXtyZXR1cm4gZS5jaGlsZE5vZGVzfWZ1bmN0aW9uIHV0KGUsdCxuKXtlLnNldEF0dHJpYnV0ZSh0LG4pfWZ1bmN0aW9uIGZ0KGUsdCl7dmFyIG49ZS5kYXRhLnJlZjtpZihuKXt2YXIgaT1lLmNvbnRleHQsbz1lLmNoaWxkfHxlLmVsbSxhPWkuJHJlZnM7dD9BcnJheS5pc0FycmF5KGFbbl0pP3IoYVtuXSxvKTphW25dPT09byYmKGFbbl09dm9pZCAwKTplLmRhdGEucmVmSW5Gb3I/QXJyYXkuaXNBcnJheShhW25dKSYmYVtuXS5pbmRleE9mKG8pPDA/YVtuXS5wdXNoKG8pOmFbbl09W29dOmFbbl09b319ZnVuY3Rpb24gZHQoZSl7cmV0dXJuIG51bGw9PWV9ZnVuY3Rpb24gcHQoZSl7cmV0dXJuIG51bGwhPWV9ZnVuY3Rpb24gdnQoZSx0KXtyZXR1cm4gZS5rZXk9PT10LmtleSYmZS50YWc9PT10LnRhZyYmZS5pc0NvbW1lbnQ9PT10LmlzQ29tbWVudCYmIWUuZGF0YT09IXQuZGF0YX1mdW5jdGlvbiBodChlLHQsbil7dmFyIHIsaSxvPXt9O2ZvcihyPXQ7cjw9bjsrK3IpaT1lW3JdLmtleSxwdChpKSYmKG9baV09cik7cmV0dXJuIG99ZnVuY3Rpb24gbXQoZSl7ZnVuY3Rpb24gdChlKXtyZXR1cm4gbmV3IEVpKHgudGFnTmFtZShlKS50b0xvd2VyQ2FzZSgpLHt9LFtdLHZvaWQgMCxlKX1mdW5jdGlvbiBuKGUsdCl7ZnVuY3Rpb24gbigpezA9PT0tLW4ubGlzdGVuZXJzJiZyKGUpfXJldHVybiBuLmxpc3RlbmVycz10LG59ZnVuY3Rpb24gcihlKXt2YXIgdD14LnBhcmVudE5vZGUoZSk7dCYmeC5yZW1vdmVDaGlsZCh0LGUpfWZ1bmN0aW9uIGkoZSx0LG4pe3ZhciByLGk9ZS5kYXRhO2lmKGUuaXNSb290SW5zZXJ0PSFuLHB0KGkpJiYocHQocj1pLmhvb2spJiZwdChyPXIuaW5pdCkmJnIoZSkscHQocj1lLmNoaWxkKSkpcmV0dXJuIGwoZSx0KSxlLmVsbTt2YXIgbz1lLmNoaWxkcmVuLHM9ZS50YWc7cmV0dXJuIHB0KHMpPyhlLmVsbT1lLm5zP3guY3JlYXRlRWxlbWVudE5TKGUubnMscyk6eC5jcmVhdGVFbGVtZW50KHMsZSksdShlKSxhKGUsbyx0KSxwdChpKSYmYyhlLHQpKTplLmlzQ29tbWVudD9lLmVsbT14LmNyZWF0ZUNvbW1lbnQoZS50ZXh0KTplLmVsbT14LmNyZWF0ZVRleHROb2RlKGUudGV4dCksZS5lbG19ZnVuY3Rpb24gYShlLHQsbil7aWYoQXJyYXkuaXNBcnJheSh0KSlmb3IodmFyIHI9MDtyPHQubGVuZ3RoOysrcil4LmFwcGVuZENoaWxkKGUuZWxtLGkodFtyXSxuLCEwKSk7ZWxzZSBvKGUudGV4dCkmJnguYXBwZW5kQ2hpbGQoZS5lbG0seC5jcmVhdGVUZXh0Tm9kZShlLnRleHQpKX1mdW5jdGlvbiBzKGUpe2Zvcig7ZS5jaGlsZDspZT1lLmNoaWxkLl92bm9kZTtyZXR1cm4gcHQoZS50YWcpfWZ1bmN0aW9uIGMoZSx0KXtmb3IodmFyIG49MDtuPCQuY3JlYXRlLmxlbmd0aDsrK24pJC5jcmVhdGVbbl0ob28sZSk7Xz1lLmRhdGEuaG9vayxwdChfKSYmKF8uY3JlYXRlJiZfLmNyZWF0ZShvbyxlKSxfLmluc2VydCYmdC5wdXNoKGUpKX1mdW5jdGlvbiBsKGUsdCl7ZS5kYXRhLnBlbmRpbmdJbnNlcnQmJnQucHVzaC5hcHBseSh0LGUuZGF0YS5wZW5kaW5nSW5zZXJ0KSxlLmVsbT1lLmNoaWxkLiRlbCxzKGUpPyhjKGUsdCksdShlKSk6KGZ0KGUpLHQucHVzaChlKSl9ZnVuY3Rpb24gdShlKXt2YXIgdDtwdCh0PWUuY29udGV4dCkmJnB0KHQ9dC4kb3B0aW9ucy5fc2NvcGVJZCkmJnguc2V0QXR0cmlidXRlKGUuZWxtLHQsXCJcIikscHQodD1MaSkmJnQhPT1lLmNvbnRleHQmJnB0KHQ9dC4kb3B0aW9ucy5fc2NvcGVJZCkmJnguc2V0QXR0cmlidXRlKGUuZWxtLHQsXCJcIil9ZnVuY3Rpb24gZihlLHQsbixyLG8sYSl7Zm9yKDtyPD1vOysrcil4Lmluc2VydEJlZm9yZShlLGkobltyXSxhKSx0KX1mdW5jdGlvbiBkKGUpe3ZhciB0LG4scj1lLmRhdGE7aWYocHQocikpZm9yKHB0KHQ9ci5ob29rKSYmcHQodD10LmRlc3Ryb3kpJiZ0KGUpLHQ9MDt0PCQuZGVzdHJveS5sZW5ndGg7Kyt0KSQuZGVzdHJveVt0XShlKTtpZihwdCh0PWUuY2hpbGRyZW4pKWZvcihuPTA7bjxlLmNoaWxkcmVuLmxlbmd0aDsrK24pZChlLmNoaWxkcmVuW25dKX1mdW5jdGlvbiBwKGUsdCxuLHIpe2Zvcig7bjw9cjsrK24pe3ZhciBpPXRbbl07cHQoaSkmJihwdChpLnRhZyk/KHYoaSksZChpKSk6eC5yZW1vdmVDaGlsZChlLGkuZWxtKSl9fWZ1bmN0aW9uIHYoZSx0KXtpZih0fHxwdChlLmRhdGEpKXt2YXIgaT0kLnJlbW92ZS5sZW5ndGgrMTtmb3IodD90Lmxpc3RlbmVycys9aTp0PW4oZS5lbG0saSkscHQoXz1lLmNoaWxkKSYmcHQoXz1fLl92bm9kZSkmJnB0KF8uZGF0YSkmJnYoXyx0KSxfPTA7XzwkLnJlbW92ZS5sZW5ndGg7KytfKSQucmVtb3ZlW19dKGUsdCk7cHQoXz1lLmRhdGEuaG9vaykmJnB0KF89Xy5yZW1vdmUpP18oZSx0KTp0KCl9ZWxzZSByKGUuZWxtKX1mdW5jdGlvbiBoKGUsdCxuLHIsbyl7Zm9yKHZhciBhLHMsYyxsLHU9MCxkPTAsdj10Lmxlbmd0aC0xLGg9dFswXSxnPXRbdl0seT1uLmxlbmd0aC0xLF89blswXSxiPW5beV0sJD0hbzt1PD12JiZkPD15OylkdChoKT9oPXRbKyt1XTpkdChnKT9nPXRbLS12XTp2dChoLF8pPyhtKGgsXyxyKSxoPXRbKyt1XSxfPW5bKytkXSk6dnQoZyxiKT8obShnLGIsciksZz10Wy0tdl0sYj1uWy0teV0pOnZ0KGgsYik/KG0oaCxiLHIpLCQmJnguaW5zZXJ0QmVmb3JlKGUsaC5lbG0seC5uZXh0U2libGluZyhnLmVsbSkpLGg9dFsrK3VdLGI9blstLXldKTp2dChnLF8pPyhtKGcsXyxyKSwkJiZ4Lmluc2VydEJlZm9yZShlLGcuZWxtLGguZWxtKSxnPXRbLS12XSxfPW5bKytkXSk6KGR0KGEpJiYoYT1odCh0LHUsdikpLHM9cHQoXy5rZXkpP2FbXy5rZXldOm51bGwsZHQocyk/KHguaW5zZXJ0QmVmb3JlKGUsaShfLHIpLGguZWxtKSxfPW5bKytkXSk6KGM9dFtzXSxjLnRhZyE9PV8udGFnPyh4Lmluc2VydEJlZm9yZShlLGkoXyxyKSxoLmVsbSksXz1uWysrZF0pOihtKGMsXyxyKSx0W3NdPXZvaWQgMCwkJiZ4Lmluc2VydEJlZm9yZShlLF8uZWxtLGguZWxtKSxfPW5bKytkXSkpKTt1PnY/KGw9ZHQoblt5KzFdKT9udWxsOm5beSsxXS5lbG0sZihlLGwsbixkLHkscikpOmQ+eSYmcChlLHQsdSx2KX1mdW5jdGlvbiBtKGUsdCxuLHIpe2lmKGUhPT10KXtpZih0LmlzU3RhdGljJiZlLmlzU3RhdGljJiZ0LmtleT09PWUua2V5JiYodC5pc0Nsb25lZHx8dC5pc09uY2UpKXJldHVybiB2b2lkKHQuZWxtPWUuZWxtKTt2YXIgaSxvPXQuZGF0YSxhPXB0KG8pO2EmJnB0KGk9by5ob29rKSYmcHQoaT1pLnByZXBhdGNoKSYmaShlLHQpO3ZhciBjPXQuZWxtPWUuZWxtLGw9ZS5jaGlsZHJlbix1PXQuY2hpbGRyZW47aWYoYSYmcyh0KSl7Zm9yKGk9MDtpPCQudXBkYXRlLmxlbmd0aDsrK2kpJC51cGRhdGVbaV0oZSx0KTtwdChpPW8uaG9vaykmJnB0KGk9aS51cGRhdGUpJiZpKGUsdCl9ZHQodC50ZXh0KT9wdChsKSYmcHQodSk/bCE9PXUmJmgoYyxsLHUsbixyKTpwdCh1KT8ocHQoZS50ZXh0KSYmeC5zZXRUZXh0Q29udGVudChjLFwiXCIpLGYoYyxudWxsLHUsMCx1Lmxlbmd0aC0xLG4pKTpwdChsKT9wKGMsbCwwLGwubGVuZ3RoLTEpOnB0KGUudGV4dCkmJnguc2V0VGV4dENvbnRlbnQoYyxcIlwiKTplLnRleHQhPT10LnRleHQmJnguc2V0VGV4dENvbnRlbnQoYyx0LnRleHQpLGEmJnB0KGk9by5ob29rKSYmcHQoaT1pLnBvc3RwYXRjaCkmJmkoZSx0KX19ZnVuY3Rpb24gZyhlLHQsbil7aWYobiYmZS5wYXJlbnQpZS5wYXJlbnQuZGF0YS5wZW5kaW5nSW5zZXJ0PXQ7ZWxzZSBmb3IodmFyIHI9MDtyPHQubGVuZ3RoOysrcil0W3JdLmRhdGEuaG9vay5pbnNlcnQodFtyXSl9ZnVuY3Rpb24geShlLHQsbil7dC5lbG09ZTt2YXIgcj10LnRhZyxpPXQuZGF0YSxvPXQuY2hpbGRyZW47aWYocHQoaSkmJihwdChfPWkuaG9vaykmJnB0KF89Xy5pbml0KSYmXyh0LCEwKSxwdChfPXQuY2hpbGQpKSlyZXR1cm4gbCh0LG4pLCEwO2lmKHB0KHIpKXtpZihwdChvKSl7dmFyIHM9eC5jaGlsZE5vZGVzKGUpO2lmKHMubGVuZ3RoKXt2YXIgdT0hMDtpZihzLmxlbmd0aCE9PW8ubGVuZ3RoKXU9ITE7ZWxzZSBmb3IodmFyIGY9MDtmPG8ubGVuZ3RoO2YrKylpZigheShzW2ZdLG9bZl0sbikpe3U9ITE7YnJlYWt9aWYoIXUpcmV0dXJuITF9ZWxzZSBhKHQsbyxuKX1wdChpKSYmYyh0LG4pfXJldHVybiEwfXZhciBfLGIsJD17fSx3PWUubW9kdWxlcyx4PWUubm9kZU9wcztmb3IoXz0wO188YW8ubGVuZ3RoOysrXylmb3IoJFthb1tfXV09W10sYj0wO2I8dy5sZW5ndGg7KytiKXZvaWQgMCE9PXdbYl1bYW9bX11dJiYkW2FvW19dXS5wdXNoKHdbYl1bYW9bX11dKTtyZXR1cm4gZnVuY3Rpb24oZSxuLHIsbyl7aWYoIW4pcmV0dXJuIHZvaWQoZSYmZChlKSk7dmFyIGEsYyxsPSExLHU9W107aWYoZSl7dmFyIGY9cHQoZS5ub2RlVHlwZSk7aWYoIWYmJnZ0KGUsbikpbShlLG4sdSxvKTtlbHNle2lmKGYpe2lmKDE9PT1lLm5vZGVUeXBlJiZlLmhhc0F0dHJpYnV0ZShcInNlcnZlci1yZW5kZXJlZFwiKSYmKGUucmVtb3ZlQXR0cmlidXRlKFwic2VydmVyLXJlbmRlcmVkXCIpLHI9ITApLHImJnkoZSxuLHUpKXJldHVybiBnKG4sdSwhMCksZTtlPXQoZSl9aWYoYT1lLmVsbSxjPXgucGFyZW50Tm9kZShhKSxpKG4sdSksbi5wYXJlbnQmJihuLnBhcmVudC5lbG09bi5lbG0scyhuKSkpZm9yKHZhciB2PTA7djwkLmNyZWF0ZS5sZW5ndGg7Kyt2KSQuY3JlYXRlW3ZdKG9vLG4ucGFyZW50KTtudWxsIT09Yz8oeC5pbnNlcnRCZWZvcmUoYyxuLmVsbSx4Lm5leHRTaWJsaW5nKGEpKSxwKGMsW2VdLDAsMCkpOnB0KGUudGFnKSYmZChlKX19ZWxzZSBsPSEwLGkobix1KTtyZXR1cm4gZyhuLHUsbCksbi5lbG19fWZ1bmN0aW9uIGd0KGUsdCl7aWYoZS5kYXRhLmRpcmVjdGl2ZXN8fHQuZGF0YS5kaXJlY3RpdmVzKXt2YXIgbixyLGksbz1lPT09b28sYT15dChlLmRhdGEuZGlyZWN0aXZlcyxlLmNvbnRleHQpLHM9eXQodC5kYXRhLmRpcmVjdGl2ZXMsdC5jb250ZXh0KSxjPVtdLGw9W107Zm9yKG4gaW4gcylyPWFbbl0saT1zW25dLHI/KGkub2xkVmFsdWU9ci52YWx1ZSxidChpLFwidXBkYXRlXCIsdCxlKSxpLmRlZiYmaS5kZWYuY29tcG9uZW50VXBkYXRlZCYmbC5wdXNoKGkpKTooYnQoaSxcImJpbmRcIix0LGUpLGkuZGVmJiZpLmRlZi5pbnNlcnRlZCYmYy5wdXNoKGkpKTtpZihjLmxlbmd0aCl7dmFyIHU9ZnVuY3Rpb24oKXtjLmZvckVhY2goZnVuY3Rpb24obil7YnQobixcImluc2VydGVkXCIsdCxlKX0pfTtvP2llKHQuZGF0YS5ob29rfHwodC5kYXRhLmhvb2s9e30pLFwiaW5zZXJ0XCIsdSxcImRpci1pbnNlcnRcIik6dSgpfWlmKGwubGVuZ3RoJiZpZSh0LmRhdGEuaG9va3x8KHQuZGF0YS5ob29rPXt9KSxcInBvc3RwYXRjaFwiLGZ1bmN0aW9uKCl7bC5mb3JFYWNoKGZ1bmN0aW9uKG4pe2J0KG4sXCJjb21wb25lbnRVcGRhdGVkXCIsdCxlKX0pfSxcImRpci1wb3N0cGF0Y2hcIiksIW8pZm9yKG4gaW4gYSlzW25dfHxidChhW25dLFwidW5iaW5kXCIsZSl9fWZ1bmN0aW9uIHl0KGUsdCl7dmFyIG49T2JqZWN0LmNyZWF0ZShudWxsKTtpZighZSlyZXR1cm4gbjt2YXIgcixpO2ZvcihyPTA7cjxlLmxlbmd0aDtyKyspaT1lW3JdLGkubW9kaWZpZXJzfHwoaS5tb2RpZmllcnM9Y28pLG5bX3QoaSldPWksaS5kZWY9UCh0LiRvcHRpb25zLFwiZGlyZWN0aXZlc1wiLGkubmFtZSwhMCk7cmV0dXJuIG59ZnVuY3Rpb24gX3QoZSl7cmV0dXJuIGUucmF3TmFtZXx8ZS5uYW1lK1wiLlwiK09iamVjdC5rZXlzKGUubW9kaWZpZXJzfHx7fSkuam9pbihcIi5cIil9ZnVuY3Rpb24gYnQoZSx0LG4scil7dmFyIGk9ZS5kZWYmJmUuZGVmW3RdO2kmJmkobi5lbG0sZSxuLHIpfWZ1bmN0aW9uICR0KGUsdCl7aWYoZS5kYXRhLmF0dHJzfHx0LmRhdGEuYXR0cnMpe3ZhciBuLHIsaSxvPXQuZWxtLGE9ZS5kYXRhLmF0dHJzfHx7fSxzPXQuZGF0YS5hdHRyc3x8e307cy5fX29iX18mJihzPXQuZGF0YS5hdHRycz1sKHt9LHMpKTtmb3IobiBpbiBzKXI9c1tuXSxpPWFbbl0saSE9PXImJnd0KG8sbixyKTtmb3IobiBpbiBhKW51bGw9PXNbbl0mJihKaShuKT9vLnJlbW92ZUF0dHJpYnV0ZU5TKHppLEtpKG4pKTpIaShuKXx8by5yZW1vdmVBdHRyaWJ1dGUobikpfX1mdW5jdGlvbiB3dChlLHQsbil7VmkodCk/cWkobik/ZS5yZW1vdmVBdHRyaWJ1dGUodCk6ZS5zZXRBdHRyaWJ1dGUodCx0KTpIaSh0KT9lLnNldEF0dHJpYnV0ZSh0LHFpKG4pfHxcImZhbHNlXCI9PT1uP1wiZmFsc2VcIjpcInRydWVcIik6SmkodCk/cWkobik/ZS5yZW1vdmVBdHRyaWJ1dGVOUyh6aSxLaSh0KSk6ZS5zZXRBdHRyaWJ1dGVOUyh6aSx0LG4pOnFpKG4pP2UucmVtb3ZlQXR0cmlidXRlKHQpOmUuc2V0QXR0cmlidXRlKHQsbil9ZnVuY3Rpb24geHQoZSx0KXt2YXIgbj10LmVsbSxyPXQuZGF0YSxpPWUuZGF0YTtpZihyLnN0YXRpY0NsYXNzfHxyLmNsYXNzfHxpJiYoaS5zdGF0aWNDbGFzc3x8aS5jbGFzcykpe3ZhciBvPXplKHQpLGE9bi5fdHJhbnNpdGlvbkNsYXNzZXM7YSYmKG89cWUobyxXZShhKSkpLG8hPT1uLl9wcmV2Q2xhc3MmJihuLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsbyksbi5fcHJldkNsYXNzPW8pfX1mdW5jdGlvbiBDdChlLHQpe2lmKGUuZGF0YS5vbnx8dC5kYXRhLm9uKXt2YXIgbj10LmRhdGEub258fHt9LHI9ZS5kYXRhLm9ufHx7fSxpPXQuZWxtLl92X2FkZHx8KHQuZWxtLl92X2FkZD1mdW5jdGlvbihlLG4scil7dC5lbG0uYWRkRXZlbnRMaXN0ZW5lcihlLG4scil9KSxvPXQuZWxtLl92X3JlbW92ZXx8KHQuZWxtLl92X3JlbW92ZT1mdW5jdGlvbihlLG4pe3QuZWxtLnJlbW92ZUV2ZW50TGlzdGVuZXIoZSxuKX0pO29lKG4scixpLG8sdC5jb250ZXh0KX19ZnVuY3Rpb24ga3QoZSx0KXtpZihlLmRhdGEuZG9tUHJvcHN8fHQuZGF0YS5kb21Qcm9wcyl7dmFyIG4scixpPXQuZWxtLG89ZS5kYXRhLmRvbVByb3BzfHx7fSxhPXQuZGF0YS5kb21Qcm9wc3x8e307YS5fX29iX18mJihhPXQuZGF0YS5kb21Qcm9wcz1sKHt9LGEpKTtmb3IobiBpbiBvKW51bGw9PWFbbl0mJihpW25dPVwiXCIpO2ZvcihuIGluIGEpaWYocj1hW25dLFwidGV4dENvbnRlbnRcIiE9PW4mJlwiaW5uZXJIVE1MXCIhPT1ufHwodC5jaGlsZHJlbiYmKHQuY2hpbGRyZW4ubGVuZ3RoPTApLHIhPT1vW25dKSlpZihcInZhbHVlXCI9PT1uKXtpLl92YWx1ZT1yO3ZhciBzPW51bGw9PXI/XCJcIjpTdHJpbmcocik7aS52YWx1ZT09PXN8fGkuY29tcG9zaW5nfHwoaS52YWx1ZT1zKX1lbHNlIGlbbl09cn19ZnVuY3Rpb24gQXQoZSl7dmFyIHQ9T3QoZS5zdHlsZSk7cmV0dXJuIGUuc3RhdGljU3R5bGU/bChlLnN0YXRpY1N0eWxlLHQpOnR9ZnVuY3Rpb24gT3QoZSl7cmV0dXJuIEFycmF5LmlzQXJyYXkoZSk/ZChlKTpcInN0cmluZ1wiPT10eXBlb2YgZT9obyhlKTplfWZ1bmN0aW9uIFN0KGUsdCl7dmFyIG4scj17fTtpZih0KWZvcih2YXIgaT1lO2kuY2hpbGQ7KWk9aS5jaGlsZC5fdm5vZGUsaS5kYXRhJiYobj1BdChpLmRhdGEpKSYmbChyLG4pOyhuPUF0KGUuZGF0YSkpJiZsKHIsbik7Zm9yKHZhciBvPWU7bz1vLnBhcmVudDspby5kYXRhJiYobj1BdChvLmRhdGEpKSYmbChyLG4pO3JldHVybiByfWZ1bmN0aW9uIFR0KGUsdCl7dmFyIG49dC5kYXRhLHI9ZS5kYXRhO2lmKG4uc3RhdGljU3R5bGV8fG4uc3R5bGV8fHIuc3RhdGljU3R5bGV8fHIuc3R5bGUpe3ZhciBpLG8sYT10LmVsbSxzPWUuZGF0YS5zdGF0aWNTdHlsZSxjPWUuZGF0YS5zdHlsZXx8e30sdT1zfHxjLGY9T3QodC5kYXRhLnN0eWxlKXx8e307dC5kYXRhLnN0eWxlPWYuX19vYl9fP2woe30sZik6Zjt2YXIgZD1TdCh0LCEwKTtmb3IobyBpbiB1KW51bGw9PWRbb10mJmdvKGEsbyxcIlwiKTtmb3IobyBpbiBkKWk9ZFtvXSxpIT09dVtvXSYmZ28oYSxvLG51bGw9PWk/XCJcIjppKX19ZnVuY3Rpb24ganQoZSx0KXtpZih0JiZ0LnRyaW0oKSlpZihlLmNsYXNzTGlzdCl0LmluZGV4T2YoXCIgXCIpPi0xP3Quc3BsaXQoL1xccysvKS5mb3JFYWNoKGZ1bmN0aW9uKHQpe3JldHVybiBlLmNsYXNzTGlzdC5hZGQodCl9KTplLmNsYXNzTGlzdC5hZGQodCk7ZWxzZXt2YXIgbj1cIiBcIitlLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpK1wiIFwiO24uaW5kZXhPZihcIiBcIit0K1wiIFwiKTwwJiZlLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsKG4rdCkudHJpbSgpKX19ZnVuY3Rpb24gRXQoZSx0KXtpZih0JiZ0LnRyaW0oKSlpZihlLmNsYXNzTGlzdCl0LmluZGV4T2YoXCIgXCIpPi0xP3Quc3BsaXQoL1xccysvKS5mb3JFYWNoKGZ1bmN0aW9uKHQpe3JldHVybiBlLmNsYXNzTGlzdC5yZW1vdmUodCl9KTplLmNsYXNzTGlzdC5yZW1vdmUodCk7ZWxzZXtmb3IodmFyIG49XCIgXCIrZS5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKStcIiBcIixyPVwiIFwiK3QrXCIgXCI7bi5pbmRleE9mKHIpPj0wOyluPW4ucmVwbGFjZShyLFwiIFwiKTtlLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsbi50cmltKCkpfX1mdW5jdGlvbiBOdChlKXtTbyhmdW5jdGlvbigpe1NvKGUpfSl9ZnVuY3Rpb24gTHQoZSx0KXsoZS5fdHJhbnNpdGlvbkNsYXNzZXN8fChlLl90cmFuc2l0aW9uQ2xhc3Nlcz1bXSkpLnB1c2godCksanQoZSx0KX1mdW5jdGlvbiBEdChlLHQpe2UuX3RyYW5zaXRpb25DbGFzc2VzJiZyKGUuX3RyYW5zaXRpb25DbGFzc2VzLHQpLEV0KGUsdCl9ZnVuY3Rpb24gTXQoZSx0LG4pe3ZhciByPVB0KGUsdCksaT1yLnR5cGUsbz1yLnRpbWVvdXQsYT1yLnByb3BDb3VudDtpZighaSlyZXR1cm4gbigpO3ZhciBzPWk9PT13bz9rbzpPbyxjPTAsbD1mdW5jdGlvbigpe2UucmVtb3ZlRXZlbnRMaXN0ZW5lcihzLHUpLG4oKX0sdT1mdW5jdGlvbih0KXt0LnRhcmdldD09PWUmJisrYz49YSYmbCgpfTtzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7YzxhJiZsKCl9LG8rMSksZS5hZGRFdmVudExpc3RlbmVyKHMsdSl9ZnVuY3Rpb24gUHQoZSx0KXt2YXIgbixyPXdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGUpLGk9cltDbytcIkRlbGF5XCJdLnNwbGl0KFwiLCBcIiksbz1yW0NvK1wiRHVyYXRpb25cIl0uc3BsaXQoXCIsIFwiKSxhPVJ0KGksbykscz1yW0FvK1wiRGVsYXlcIl0uc3BsaXQoXCIsIFwiKSxjPXJbQW8rXCJEdXJhdGlvblwiXS5zcGxpdChcIiwgXCIpLGw9UnQocyxjKSx1PTAsZj0wO3Q9PT13bz9hPjAmJihuPXdvLHU9YSxmPW8ubGVuZ3RoKTp0PT09eG8/bD4wJiYobj14byx1PWwsZj1jLmxlbmd0aCk6KHU9TWF0aC5tYXgoYSxsKSxuPXU+MD9hPmw/d286eG86bnVsbCxmPW4/bj09PXdvP28ubGVuZ3RoOmMubGVuZ3RoOjApO3ZhciBkPW49PT13byYmVG8udGVzdChyW0NvK1wiUHJvcGVydHlcIl0pO3JldHVybnt0eXBlOm4sdGltZW91dDp1LHByb3BDb3VudDpmLGhhc1RyYW5zZm9ybTpkfX1mdW5jdGlvbiBSdChlLHQpe2Zvcig7ZS5sZW5ndGg8dC5sZW5ndGg7KWU9ZS5jb25jYXQoZSk7cmV0dXJuIE1hdGgubWF4LmFwcGx5KG51bGwsdC5tYXAoZnVuY3Rpb24odCxuKXtyZXR1cm4gSXQodCkrSXQoZVtuXSl9KSl9ZnVuY3Rpb24gSXQoZSl7cmV0dXJuIDFlMypOdW1iZXIoZS5zbGljZSgwLC0xKSl9ZnVuY3Rpb24gRnQoZSl7dmFyIHQ9ZS5lbG07dC5fbGVhdmVDYiYmKHQuX2xlYXZlQ2IuY2FuY2VsbGVkPSEwLHQuX2xlYXZlQ2IoKSk7dmFyIG49VXQoZS5kYXRhLnRyYW5zaXRpb24pO2lmKG4mJiF0Ll9lbnRlckNiJiYxPT09dC5ub2RlVHlwZSl7dmFyIHI9bi5jc3MsaT1uLnR5cGUsbz1uLmVudGVyQ2xhc3MsYT1uLmVudGVyQWN0aXZlQ2xhc3Mscz1uLmFwcGVhckNsYXNzLGM9bi5hcHBlYXJBY3RpdmVDbGFzcyxsPW4uYmVmb3JlRW50ZXIsdT1uLmVudGVyLGY9bi5hZnRlckVudGVyLGQ9bi5lbnRlckNhbmNlbGxlZCxwPW4uYmVmb3JlQXBwZWFyLHY9bi5hcHBlYXIsaD1uLmFmdGVyQXBwZWFyLG09bi5hcHBlYXJDYW5jZWxsZWQsZz1MaS4kdm5vZGUseT1nJiZnLnBhcmVudD9nLnBhcmVudC5jb250ZXh0OkxpLF89IXkuX2lzTW91bnRlZHx8IWUuaXNSb290SW5zZXJ0O2lmKCFffHx2fHxcIlwiPT09dil7dmFyIGI9Xz9zOm8sJD1fP2M6YSx3PV8/cHx8bDpsLHg9XyYmXCJmdW5jdGlvblwiPT10eXBlb2Ygdj92OnUsQz1fP2h8fGY6ZixrPV8/bXx8ZDpkLEE9ciE9PSExJiYhdGksTz14JiYoeC5fbGVuZ3RofHx4Lmxlbmd0aCk+MSxTPXQuX2VudGVyQ2I9SHQoZnVuY3Rpb24oKXtBJiZEdCh0LCQpLFMuY2FuY2VsbGVkPyhBJiZEdCh0LGIpLGsmJmsodCkpOkMmJkModCksdC5fZW50ZXJDYj1udWxsfSk7ZS5kYXRhLnNob3d8fGllKGUuZGF0YS5ob29rfHwoZS5kYXRhLmhvb2s9e30pLFwiaW5zZXJ0XCIsZnVuY3Rpb24oKXt2YXIgbj10LnBhcmVudE5vZGUscj1uJiZuLl9wZW5kaW5nJiZuLl9wZW5kaW5nW2Uua2V5XTtyJiZyLnRhZz09PWUudGFnJiZyLmVsbS5fbGVhdmVDYiYmci5lbG0uX2xlYXZlQ2IoKSx4JiZ4KHQsUyl9LFwidHJhbnNpdGlvbi1pbnNlcnRcIiksdyYmdyh0KSxBJiYoTHQodCxiKSxMdCh0LCQpLE50KGZ1bmN0aW9uKCl7RHQodCxiKSxTLmNhbmNlbGxlZHx8T3x8TXQodCxpLFMpfSkpLGUuZGF0YS5zaG93JiZ4JiZ4KHQsUyksQXx8T3x8UygpfX19ZnVuY3Rpb24gQnQoZSx0KXtmdW5jdGlvbiBuKCl7bS5jYW5jZWxsZWR8fChlLmRhdGEuc2hvd3x8KChyLnBhcmVudE5vZGUuX3BlbmRpbmd8fChyLnBhcmVudE5vZGUuX3BlbmRpbmc9e30pKVtlLmtleV09ZSksbCYmbChyKSx2JiYoTHQocixzKSxMdChyLGMpLE50KGZ1bmN0aW9uKCl7RHQocixzKSxtLmNhbmNlbGxlZHx8aHx8TXQocixhLG0pfSkpLHUmJnUocixtKSx2fHxofHxtKCkpfXZhciByPWUuZWxtO3IuX2VudGVyQ2ImJihyLl9lbnRlckNiLmNhbmNlbGxlZD0hMCxyLl9lbnRlckNiKCkpO3ZhciBpPVV0KGUuZGF0YS50cmFuc2l0aW9uKTtpZighaSlyZXR1cm4gdCgpO2lmKCFyLl9sZWF2ZUNiJiYxPT09ci5ub2RlVHlwZSl7dmFyIG89aS5jc3MsYT1pLnR5cGUscz1pLmxlYXZlQ2xhc3MsYz1pLmxlYXZlQWN0aXZlQ2xhc3MsbD1pLmJlZm9yZUxlYXZlLHU9aS5sZWF2ZSxmPWkuYWZ0ZXJMZWF2ZSxkPWkubGVhdmVDYW5jZWxsZWQscD1pLmRlbGF5TGVhdmUsdj1vIT09ITEmJiF0aSxoPXUmJih1Ll9sZW5ndGh8fHUubGVuZ3RoKT4xLG09ci5fbGVhdmVDYj1IdChmdW5jdGlvbigpe3IucGFyZW50Tm9kZSYmci5wYXJlbnROb2RlLl9wZW5kaW5nJiYoci5wYXJlbnROb2RlLl9wZW5kaW5nW2Uua2V5XT1udWxsKSx2JiZEdChyLGMpLG0uY2FuY2VsbGVkPyh2JiZEdChyLHMpLGQmJmQocikpOih0KCksZiYmZihyKSksci5fbGVhdmVDYj1udWxsfSk7cD9wKG4pOm4oKX19ZnVuY3Rpb24gVXQoZSl7aWYoZSl7aWYoXCJvYmplY3RcIj09dHlwZW9mIGUpe3ZhciB0PXt9O3JldHVybiBlLmNzcyE9PSExJiZsKHQsam8oZS5uYW1lfHxcInZcIikpLGwodCxlKSx0fXJldHVyblwic3RyaW5nXCI9PXR5cGVvZiBlP2pvKGUpOnZvaWQgMH19ZnVuY3Rpb24gSHQoZSl7dmFyIHQ9ITE7cmV0dXJuIGZ1bmN0aW9uKCl7XG50fHwodD0hMCxlKCkpfX1mdW5jdGlvbiBWdChlLHQsbil7dmFyIHI9dC52YWx1ZSxpPWUubXVsdGlwbGU7aWYoIWl8fEFycmF5LmlzQXJyYXkocikpe2Zvcih2YXIgbyxhLHM9MCxjPWUub3B0aW9ucy5sZW5ndGg7czxjO3MrKylpZihhPWUub3B0aW9uc1tzXSxpKW89bShyLEp0KGEpKT4tMSxhLnNlbGVjdGVkIT09byYmKGEuc2VsZWN0ZWQ9byk7ZWxzZSBpZihoKEp0KGEpLHIpKXJldHVybiB2b2lkKGUuc2VsZWN0ZWRJbmRleCE9PXMmJihlLnNlbGVjdGVkSW5kZXg9cykpO2l8fChlLnNlbGVjdGVkSW5kZXg9LTEpfX1mdW5jdGlvbiB6dChlLHQpe2Zvcih2YXIgbj0wLHI9dC5sZW5ndGg7bjxyO24rKylpZihoKEp0KHRbbl0pLGUpKXJldHVybiExO3JldHVybiEwfWZ1bmN0aW9uIEp0KGUpe3JldHVyblwiX3ZhbHVlXCJpbiBlP2UuX3ZhbHVlOmUudmFsdWV9ZnVuY3Rpb24gS3QoZSl7ZS50YXJnZXQuY29tcG9zaW5nPSEwfWZ1bmN0aW9uIHF0KGUpe2UudGFyZ2V0LmNvbXBvc2luZz0hMSxXdChlLnRhcmdldCxcImlucHV0XCIpfWZ1bmN0aW9uIFd0KGUsdCl7dmFyIG49ZG9jdW1lbnQuY3JlYXRlRXZlbnQoXCJIVE1MRXZlbnRzXCIpO24uaW5pdEV2ZW50KHQsITAsITApLGUuZGlzcGF0Y2hFdmVudChuKX1mdW5jdGlvbiBadChlKXtyZXR1cm4hZS5jaGlsZHx8ZS5kYXRhJiZlLmRhdGEudHJhbnNpdGlvbj9lOlp0KGUuY2hpbGQuX3Zub2RlKX1mdW5jdGlvbiBHdChlKXt2YXIgdD1lJiZlLmNvbXBvbmVudE9wdGlvbnM7cmV0dXJuIHQmJnQuQ3Rvci5vcHRpb25zLmFic3RyYWN0P0d0KGZlKHQuY2hpbGRyZW4pKTplfWZ1bmN0aW9uIFl0KGUpe3ZhciB0PXt9LG49ZS4kb3B0aW9ucztmb3IodmFyIHIgaW4gbi5wcm9wc0RhdGEpdFtyXT1lW3JdO3ZhciBpPW4uX3BhcmVudExpc3RlbmVycztmb3IodmFyIG8gaW4gaSl0W1ZyKG8pXT1pW29dLmZuO3JldHVybiB0fWZ1bmN0aW9uIFF0KGUsdCl7cmV0dXJuL1xcZC1rZWVwLWFsaXZlJC8udGVzdCh0LnRhZyk/ZShcImtlZXAtYWxpdmVcIik6bnVsbH1mdW5jdGlvbiBYdChlKXtmb3IoO2U9ZS5wYXJlbnQ7KWlmKGUuZGF0YS50cmFuc2l0aW9uKXJldHVybiEwfWZ1bmN0aW9uIGVuKGUpe2UuZWxtLl9tb3ZlQ2ImJmUuZWxtLl9tb3ZlQ2IoKSxlLmVsbS5fZW50ZXJDYiYmZS5lbG0uX2VudGVyQ2IoKX1mdW5jdGlvbiB0bihlKXtlLmRhdGEubmV3UG9zPWUuZWxtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpfWZ1bmN0aW9uIG5uKGUpe3ZhciB0PWUuZGF0YS5wb3Msbj1lLmRhdGEubmV3UG9zLHI9dC5sZWZ0LW4ubGVmdCxpPXQudG9wLW4udG9wO2lmKHJ8fGkpe2UuZGF0YS5tb3ZlZD0hMDt2YXIgbz1lLmVsbS5zdHlsZTtvLnRyYW5zZm9ybT1vLldlYmtpdFRyYW5zZm9ybT1cInRyYW5zbGF0ZShcIityK1wicHgsXCIraStcInB4KVwiLG8udHJhbnNpdGlvbkR1cmF0aW9uPVwiMHNcIn19ZnVuY3Rpb24gcm4oZSx0KXt2YXIgbj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO3JldHVybiBuLmlubmVySFRNTD0nPGRpdiBhPVwiJytlKydcIj4nLG4uaW5uZXJIVE1MLmluZGV4T2YodCk+MH1mdW5jdGlvbiBvbihlKXtyZXR1cm4gVm89Vm98fGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksVm8uaW5uZXJIVE1MPWUsVm8udGV4dENvbnRlbnR9ZnVuY3Rpb24gYW4oZSx0KXtyZXR1cm4gdCYmKGU9ZS5yZXBsYWNlKERhLFwiXFxuXCIpKSxlLnJlcGxhY2UoTmEsXCI8XCIpLnJlcGxhY2UoTGEsXCI+XCIpLnJlcGxhY2UoTWEsXCImXCIpLnJlcGxhY2UoUGEsJ1wiJyl9ZnVuY3Rpb24gc24oZSx0KXtmdW5jdGlvbiBuKHQpe2YrPXQsZT1lLnN1YnN0cmluZyh0KX1mdW5jdGlvbiByKCl7dmFyIHQ9ZS5tYXRjaChZbyk7aWYodCl7dmFyIHI9e3RhZ05hbWU6dFsxXSxhdHRyczpbXSxzdGFydDpmfTtuKHRbMF0ubGVuZ3RoKTtmb3IodmFyIGksbzshKGk9ZS5tYXRjaChRbykpJiYobz1lLm1hdGNoKFdvKSk7KW4ob1swXS5sZW5ndGgpLHIuYXR0cnMucHVzaChvKTtpZihpKXJldHVybiByLnVuYXJ5U2xhc2g9aVsxXSxuKGlbMF0ubGVuZ3RoKSxyLmVuZD1mLHJ9fWZ1bmN0aW9uIGkoZSl7dmFyIG49ZS50YWdOYW1lLHI9ZS51bmFyeVNsYXNoO2wmJihcInBcIj09PXMmJlFpKG4pJiZvKFwiXCIscyksWWkobikmJnM9PT1uJiZvKFwiXCIsbikpO2Zvcih2YXIgaT11KG4pfHxcImh0bWxcIj09PW4mJlwiaGVhZFwiPT09c3x8ISFyLGE9ZS5hdHRycy5sZW5ndGgsZj1uZXcgQXJyYXkoYSksZD0wO2Q8YTtkKyspe3ZhciBwPWUuYXR0cnNbZF07cmEmJnBbMF0uaW5kZXhPZignXCJcIicpPT09LTEmJihcIlwiPT09cFszXSYmZGVsZXRlIHBbM10sXCJcIj09PXBbNF0mJmRlbGV0ZSBwWzRdLFwiXCI9PT1wWzVdJiZkZWxldGUgcFs1XSk7dmFyIHY9cFszXXx8cFs0XXx8cFs1XXx8XCJcIjtmW2RdPXtuYW1lOnBbMV0sdmFsdWU6YW4odix0LnNob3VsZERlY29kZU5ld2xpbmVzKX19aXx8KGMucHVzaCh7dGFnOm4sYXR0cnM6Zn0pLHM9bixyPVwiXCIpLHQuc3RhcnQmJnQuc3RhcnQobixmLGksZS5zdGFydCxlLmVuZCl9ZnVuY3Rpb24gbyhlLG4scixpKXt2YXIgbztpZihudWxsPT1yJiYocj1mKSxudWxsPT1pJiYoaT1mKSxuKXt2YXIgYT1uLnRvTG93ZXJDYXNlKCk7Zm9yKG89Yy5sZW5ndGgtMTtvPj0wJiZjW29dLnRhZy50b0xvd2VyQ2FzZSgpIT09YTtvLS0pO31lbHNlIG89MDtpZihvPj0wKXtmb3IodmFyIGw9Yy5sZW5ndGgtMTtsPj1vO2wtLSl0LmVuZCYmdC5lbmQoY1tsXS50YWcscixpKTtjLmxlbmd0aD1vLHM9byYmY1tvLTFdLnRhZ31lbHNlXCJiclwiPT09bi50b0xvd2VyQ2FzZSgpP3Quc3RhcnQmJnQuc3RhcnQobixbXSwhMCxyLGkpOlwicFwiPT09bi50b0xvd2VyQ2FzZSgpJiYodC5zdGFydCYmdC5zdGFydChuLFtdLCExLHIsaSksdC5lbmQmJnQuZW5kKG4scixpKSl9Zm9yKHZhciBhLHMsYz1bXSxsPXQuZXhwZWN0SFRNTCx1PXQuaXNVbmFyeVRhZ3x8WnIsZj0wO2U7KXtpZihhPWUscyYmamEocyx0LnNmYyxjKSl7dmFyIGQ9cy50b0xvd2VyQ2FzZSgpLHA9RWFbZF18fChFYVtkXT1uZXcgUmVnRXhwKFwiKFtcXFxcc1xcXFxTXSo/KSg8L1wiK2QrXCJbXj5dKj4pXCIsXCJpXCIpKSx2PTAsaD1lLnJlcGxhY2UocCxmdW5jdGlvbihlLG4scil7cmV0dXJuIHY9ci5sZW5ndGgsXCJzY3JpcHRcIiE9PWQmJlwic3R5bGVcIiE9PWQmJlwibm9zY3JpcHRcIiE9PWQmJihuPW4ucmVwbGFjZSgvPCEtLShbXFxzXFxTXSo/KS0tPi9nLFwiJDFcIikucmVwbGFjZSgvPCFcXFtDREFUQVxcWyhbXFxzXFxTXSo/KV1dPi9nLFwiJDFcIikpLHQuY2hhcnMmJnQuY2hhcnMobiksXCJcIn0pO2YrPWUubGVuZ3RoLWgubGVuZ3RoLGU9aCxvKFwiPC9cIitkK1wiPlwiLGQsZi12LGYpfWVsc2V7dmFyIG09ZS5pbmRleE9mKFwiPFwiKTtpZigwPT09bSl7aWYodGEudGVzdChlKSl7dmFyIGc9ZS5pbmRleE9mKFwiLS0+XCIpO2lmKGc+PTApe24oZyszKTtjb250aW51ZX19aWYobmEudGVzdChlKSl7dmFyIHk9ZS5pbmRleE9mKFwiXT5cIik7aWYoeT49MCl7bih5KzIpO2NvbnRpbnVlfX12YXIgXz1lLm1hdGNoKGVhKTtpZihfKXtuKF9bMF0ubGVuZ3RoKTtjb250aW51ZX12YXIgYj1lLm1hdGNoKFhvKTtpZihiKXt2YXIgJD1mO24oYlswXS5sZW5ndGgpLG8oYlswXSxiWzFdLCQsZik7Y29udGludWV9dmFyIHc9cigpO2lmKHcpe2kodyk7Y29udGludWV9fXZhciB4PXZvaWQgMCxDPXZvaWQgMCxrPXZvaWQgMDtpZihtPjApe2ZvcihDPWUuc2xpY2UobSk7IShYby50ZXN0KEMpfHxZby50ZXN0KEMpfHx0YS50ZXN0KEMpfHxuYS50ZXN0KEMpfHwoaz1DLmluZGV4T2YoXCI8XCIsMSksazwwKSk7KW0rPWssQz1lLnNsaWNlKG0pO3g9ZS5zdWJzdHJpbmcoMCxtKSxuKG0pfW08MCYmKHg9ZSxlPVwiXCIpLHQuY2hhcnMmJngmJnQuY2hhcnMoeCl9aWYoZT09PWEmJnQuY2hhcnMpe3QuY2hhcnMoZSk7YnJlYWt9fW8oKX1mdW5jdGlvbiBjbihlKXtmdW5jdGlvbiB0KCl7KGF8fChhPVtdKSkucHVzaChlLnNsaWNlKHYsaSkudHJpbSgpKSx2PWkrMX12YXIgbixyLGksbyxhLHM9ITEsYz0hMSxsPSExLHU9ITEsZj0wLGQ9MCxwPTAsdj0wO2ZvcihpPTA7aTxlLmxlbmd0aDtpKyspaWYocj1uLG49ZS5jaGFyQ29kZUF0KGkpLHMpMzk9PT1uJiY5MiE9PXImJihzPSExKTtlbHNlIGlmKGMpMzQ9PT1uJiY5MiE9PXImJihjPSExKTtlbHNlIGlmKGwpOTY9PT1uJiY5MiE9PXImJihsPSExKTtlbHNlIGlmKHUpNDc9PT1uJiY5MiE9PXImJih1PSExKTtlbHNlIGlmKDEyNCE9PW58fDEyND09PWUuY2hhckNvZGVBdChpKzEpfHwxMjQ9PT1lLmNoYXJDb2RlQXQoaS0xKXx8Znx8ZHx8cClzd2l0Y2gobil7Y2FzZSAzNDpjPSEwO2JyZWFrO2Nhc2UgMzk6cz0hMDticmVhaztjYXNlIDk2Omw9ITA7YnJlYWs7Y2FzZSA0Nzp1PSEwO2JyZWFrO2Nhc2UgNDA6cCsrO2JyZWFrO2Nhc2UgNDE6cC0tO2JyZWFrO2Nhc2UgOTE6ZCsrO2JyZWFrO2Nhc2UgOTM6ZC0tO2JyZWFrO2Nhc2UgMTIzOmYrKzticmVhaztjYXNlIDEyNTpmLS19ZWxzZSB2b2lkIDA9PT1vPyh2PWkrMSxvPWUuc2xpY2UoMCxpKS50cmltKCkpOnQoKTtpZih2b2lkIDA9PT1vP289ZS5zbGljZSgwLGkpLnRyaW0oKTowIT09diYmdCgpLGEpZm9yKGk9MDtpPGEubGVuZ3RoO2krKylvPWxuKG8sYVtpXSk7cmV0dXJuIG99ZnVuY3Rpb24gbG4oZSx0KXt2YXIgbj10LmluZGV4T2YoXCIoXCIpO2lmKG48MClyZXR1cm4nX2YoXCInK3QrJ1wiKSgnK2UrXCIpXCI7dmFyIHI9dC5zbGljZSgwLG4pLGk9dC5zbGljZShuKzEpO3JldHVybidfZihcIicrcisnXCIpKCcrZStcIixcIitpfWZ1bmN0aW9uIHVuKGUsdCl7dmFyIG49dD9GYSh0KTpSYTtpZihuLnRlc3QoZSkpe2Zvcih2YXIgcixpLG89W10sYT1uLmxhc3RJbmRleD0wO3I9bi5leGVjKGUpOyl7aT1yLmluZGV4LGk+YSYmby5wdXNoKEpTT04uc3RyaW5naWZ5KGUuc2xpY2UoYSxpKSkpO3ZhciBzPWNuKHJbMV0udHJpbSgpKTtvLnB1c2goXCJfcyhcIitzK1wiKVwiKSxhPWkrclswXS5sZW5ndGh9cmV0dXJuIGE8ZS5sZW5ndGgmJm8ucHVzaChKU09OLnN0cmluZ2lmeShlLnNsaWNlKGEpKSksby5qb2luKFwiK1wiKX19ZnVuY3Rpb24gZm4oZSl7Y29uc29sZS5lcnJvcihcIltWdWUgcGFyc2VyXTogXCIrZSl9ZnVuY3Rpb24gZG4oZSx0KXtyZXR1cm4gZT9lLm1hcChmdW5jdGlvbihlKXtyZXR1cm4gZVt0XX0pLmZpbHRlcihmdW5jdGlvbihlKXtyZXR1cm4gZX0pOltdfWZ1bmN0aW9uIHBuKGUsdCxuKXsoZS5wcm9wc3x8KGUucHJvcHM9W10pKS5wdXNoKHtuYW1lOnQsdmFsdWU6bn0pfWZ1bmN0aW9uIHZuKGUsdCxuKXsoZS5hdHRyc3x8KGUuYXR0cnM9W10pKS5wdXNoKHtuYW1lOnQsdmFsdWU6bn0pfWZ1bmN0aW9uIGhuKGUsdCxuLHIsaSxvKXsoZS5kaXJlY3RpdmVzfHwoZS5kaXJlY3RpdmVzPVtdKSkucHVzaCh7bmFtZTp0LHJhd05hbWU6bix2YWx1ZTpyLGFyZzppLG1vZGlmaWVyczpvfSl9ZnVuY3Rpb24gbW4oZSx0LG4scixpKXtyJiZyLmNhcHR1cmUmJihkZWxldGUgci5jYXB0dXJlLHQ9XCIhXCIrdCk7dmFyIG87ciYmci5uYXRpdmU/KGRlbGV0ZSByLm5hdGl2ZSxvPWUubmF0aXZlRXZlbnRzfHwoZS5uYXRpdmVFdmVudHM9e30pKTpvPWUuZXZlbnRzfHwoZS5ldmVudHM9e30pO3ZhciBhPXt2YWx1ZTpuLG1vZGlmaWVyczpyfSxzPW9bdF07QXJyYXkuaXNBcnJheShzKT9pP3MudW5zaGlmdChhKTpzLnB1c2goYSk6cz9vW3RdPWk/W2Esc106W3MsYV06b1t0XT1hfWZ1bmN0aW9uIGduKGUsdCxuKXt2YXIgcj15bihlLFwiOlwiK3QpfHx5bihlLFwidi1iaW5kOlwiK3QpO2lmKG51bGwhPXIpcmV0dXJuIGNuKHIpO2lmKG4hPT0hMSl7dmFyIGk9eW4oZSx0KTtpZihudWxsIT1pKXJldHVybiBKU09OLnN0cmluZ2lmeShpKX19ZnVuY3Rpb24geW4oZSx0KXt2YXIgbjtpZihudWxsIT0obj1lLmF0dHJzTWFwW3RdKSlmb3IodmFyIHI9ZS5hdHRyc0xpc3QsaT0wLG89ci5sZW5ndGg7aTxvO2krKylpZihyW2ldLm5hbWU9PT10KXtyLnNwbGljZShpLDEpO2JyZWFrfXJldHVybiBufWZ1bmN0aW9uIF9uKGUpe2lmKG9hPWUsaWE9b2EubGVuZ3RoLHNhPWNhPWxhPTAsZS5pbmRleE9mKFwiW1wiKTwwfHxlLmxhc3RJbmRleE9mKFwiXVwiKTxpYS0xKXJldHVybntleHA6ZSxpZHg6bnVsbH07Zm9yKDshJG4oKTspYWE9Ym4oKSx3bihhYSk/Q24oYWEpOjkxPT09YWEmJnhuKGFhKTtyZXR1cm57ZXhwOmUuc3Vic3RyaW5nKDAsY2EpLGlkeDplLnN1YnN0cmluZyhjYSsxLGxhKX19ZnVuY3Rpb24gYm4oKXtyZXR1cm4gb2EuY2hhckNvZGVBdCgrK3NhKX1mdW5jdGlvbiAkbigpe3JldHVybiBzYT49aWF9ZnVuY3Rpb24gd24oZSl7cmV0dXJuIDM0PT09ZXx8Mzk9PT1lfWZ1bmN0aW9uIHhuKGUpe3ZhciB0PTE7Zm9yKGNhPXNhOyEkbigpOylpZihlPWJuKCksd24oZSkpQ24oZSk7ZWxzZSBpZig5MT09PWUmJnQrKyw5Mz09PWUmJnQtLSwwPT09dCl7bGE9c2E7YnJlYWt9fWZ1bmN0aW9uIENuKGUpe2Zvcih2YXIgdD1lOyEkbigpJiYoZT1ibigpLGUhPT10KTspO31mdW5jdGlvbiBrbihlLHQpe3VhPXQud2Fybnx8Zm4sZmE9dC5nZXRUYWdOYW1lc3BhY2V8fFpyLGRhPXQubXVzdFVzZVByb3B8fFpyLHBhPXQuaXNQcmVUYWd8fFpyLHZhPWRuKHQubW9kdWxlcyxcInByZVRyYW5zZm9ybU5vZGVcIiksaGE9ZG4odC5tb2R1bGVzLFwidHJhbnNmb3JtTm9kZVwiKSxtYT1kbih0Lm1vZHVsZXMsXCJwb3N0VHJhbnNmb3JtTm9kZVwiKSxnYT10LmRlbGltaXRlcnM7dmFyIG4scixpPVtdLG89dC5wcmVzZXJ2ZVdoaXRlc3BhY2UhPT0hMSxhPSExLHM9ITE7cmV0dXJuIHNuKGUse2V4cGVjdEhUTUw6dC5leHBlY3RIVE1MLGlzVW5hcnlUYWc6dC5pc1VuYXJ5VGFnLHNob3VsZERlY29kZU5ld2xpbmVzOnQuc2hvdWxkRGVjb2RlTmV3bGluZXMsc3RhcnQ6ZnVuY3Rpb24oZSxvLGMpe2Z1bmN0aW9uIGwoZSl7fXZhciB1PXImJnIubnN8fGZhKGUpO2VpJiZcInN2Z1wiPT09dSYmKG89Vm4obykpO3ZhciBmPXt0eXBlOjEsdGFnOmUsYXR0cnNMaXN0Om8sYXR0cnNNYXA6Qm4obykscGFyZW50OnIsY2hpbGRyZW46W119O3UmJihmLm5zPXUpLEhuKGYpJiYhb2koKSYmKGYuZm9yYmlkZGVuPSEwKTtmb3IodmFyIGQ9MDtkPHZhLmxlbmd0aDtkKyspdmFbZF0oZix0KTtpZihhfHwoQW4oZiksZi5wcmUmJihhPSEwKSkscGEoZi50YWcpJiYocz0hMCksYSlPbihmKTtlbHNle2puKGYpLEVuKGYpLERuKGYpLFNuKGYpLGYucGxhaW49IWYua2V5JiYhby5sZW5ndGgsVG4oZiksTW4oZiksUG4oZik7Zm9yKHZhciBwPTA7cDxoYS5sZW5ndGg7cCsrKWhhW3BdKGYsdCk7Um4oZil9aWYobj9pLmxlbmd0aHx8bi5pZiYmKGYuZWxzZWlmfHxmLmVsc2UpJiYobChmKSxMbihuLHtleHA6Zi5lbHNlaWYsYmxvY2s6Zn0pKToobj1mLGwobikpLHImJiFmLmZvcmJpZGRlbilpZihmLmVsc2VpZnx8Zi5lbHNlKU5uKGYscik7ZWxzZSBpZihmLnNsb3RTY29wZSl7ci5wbGFpbj0hMTt2YXIgdj1mLnNsb3RUYXJnZXR8fFwiZGVmYXVsdFwiOyhyLnNjb3BlZFNsb3RzfHwoci5zY29wZWRTbG90cz17fSkpW3ZdPWZ9ZWxzZSByLmNoaWxkcmVuLnB1c2goZiksZi5wYXJlbnQ9cjtjfHwocj1mLGkucHVzaChmKSk7Zm9yKHZhciBoPTA7aDxtYS5sZW5ndGg7aCsrKW1hW2hdKGYsdCl9LGVuZDpmdW5jdGlvbigpe3ZhciBlPWlbaS5sZW5ndGgtMV0sdD1lLmNoaWxkcmVuW2UuY2hpbGRyZW4ubGVuZ3RoLTFdO3QmJjM9PT10LnR5cGUmJlwiIFwiPT09dC50ZXh0JiZlLmNoaWxkcmVuLnBvcCgpLGkubGVuZ3RoLT0xLHI9aVtpLmxlbmd0aC0xXSxlLnByZSYmKGE9ITEpLHBhKGUudGFnKSYmKHM9ITEpfSxjaGFyczpmdW5jdGlvbihlKXtpZihyJiYoIWVpfHxcInRleHRhcmVhXCIhPT1yLnRhZ3x8ci5hdHRyc01hcC5wbGFjZWhvbGRlciE9PWUpJiYoZT1zfHxlLnRyaW0oKT9xYShlKTpvJiZyLmNoaWxkcmVuLmxlbmd0aD9cIiBcIjpcIlwiKSl7dmFyIHQ7IWEmJlwiIFwiIT09ZSYmKHQ9dW4oZSxnYSkpP3IuY2hpbGRyZW4ucHVzaCh7dHlwZToyLGV4cHJlc3Npb246dCx0ZXh0OmV9KTpyLmNoaWxkcmVuLnB1c2goe3R5cGU6Myx0ZXh0OmV9KX19fSksbn1mdW5jdGlvbiBBbihlKXtudWxsIT15bihlLFwidi1wcmVcIikmJihlLnByZT0hMCl9ZnVuY3Rpb24gT24oZSl7dmFyIHQ9ZS5hdHRyc0xpc3QubGVuZ3RoO2lmKHQpZm9yKHZhciBuPWUuYXR0cnM9bmV3IEFycmF5KHQpLHI9MDtyPHQ7cisrKW5bcl09e25hbWU6ZS5hdHRyc0xpc3Rbcl0ubmFtZSx2YWx1ZTpKU09OLnN0cmluZ2lmeShlLmF0dHJzTGlzdFtyXS52YWx1ZSl9O2Vsc2UgZS5wcmV8fChlLnBsYWluPSEwKX1mdW5jdGlvbiBTbihlKXt2YXIgdD1nbihlLFwia2V5XCIpO3QmJihlLmtleT10KX1mdW5jdGlvbiBUbihlKXt2YXIgdD1nbihlLFwicmVmXCIpO3QmJihlLnJlZj10LGUucmVmSW5Gb3I9SW4oZSkpfWZ1bmN0aW9uIGpuKGUpe3ZhciB0O2lmKHQ9eW4oZSxcInYtZm9yXCIpKXt2YXIgbj10Lm1hdGNoKFVhKTtpZighbilyZXR1cm47ZS5mb3I9blsyXS50cmltKCk7dmFyIHI9blsxXS50cmltKCksaT1yLm1hdGNoKEhhKTtpPyhlLmFsaWFzPWlbMV0udHJpbSgpLGUuaXRlcmF0b3IxPWlbMl0udHJpbSgpLGlbM10mJihlLml0ZXJhdG9yMj1pWzNdLnRyaW0oKSkpOmUuYWxpYXM9cn19ZnVuY3Rpb24gRW4oZSl7dmFyIHQ9eW4oZSxcInYtaWZcIik7aWYodCllLmlmPXQsTG4oZSx7ZXhwOnQsYmxvY2s6ZX0pO2Vsc2V7bnVsbCE9eW4oZSxcInYtZWxzZVwiKSYmKGUuZWxzZT0hMCk7dmFyIG49eW4oZSxcInYtZWxzZS1pZlwiKTtuJiYoZS5lbHNlaWY9bil9fWZ1bmN0aW9uIE5uKGUsdCl7dmFyIG49VW4odC5jaGlsZHJlbik7biYmbi5pZiYmTG4obix7ZXhwOmUuZWxzZWlmLGJsb2NrOmV9KX1mdW5jdGlvbiBMbihlLHQpe2UuY29uZGl0aW9uc3x8KGUuY29uZGl0aW9ucz1bXSksZS5jb25kaXRpb25zLnB1c2godCl9ZnVuY3Rpb24gRG4oZSl7dmFyIHQ9eW4oZSxcInYtb25jZVwiKTtudWxsIT10JiYoZS5vbmNlPSEwKX1mdW5jdGlvbiBNbihlKXtpZihcInNsb3RcIj09PWUudGFnKWUuc2xvdE5hbWU9Z24oZSxcIm5hbWVcIik7ZWxzZXt2YXIgdD1nbihlLFwic2xvdFwiKTt0JiYoZS5zbG90VGFyZ2V0PSdcIlwiJz09PXQ/J1wiZGVmYXVsdFwiJzp0KSxcInRlbXBsYXRlXCI9PT1lLnRhZyYmKGUuc2xvdFNjb3BlPXluKGUsXCJzY29wZVwiKSl9fWZ1bmN0aW9uIFBuKGUpe3ZhciB0Oyh0PWduKGUsXCJpc1wiKSkmJihlLmNvbXBvbmVudD10KSxudWxsIT15bihlLFwiaW5saW5lLXRlbXBsYXRlXCIpJiYoZS5pbmxpbmVUZW1wbGF0ZT0hMCl9ZnVuY3Rpb24gUm4oZSl7dmFyIHQsbixyLGksbyxhLHMsYyxsPWUuYXR0cnNMaXN0O2Zvcih0PTAsbj1sLmxlbmd0aDt0PG47dCsrKWlmKHI9aT1sW3RdLm5hbWUsbz1sW3RdLnZhbHVlLEJhLnRlc3QocikpaWYoZS5oYXNCaW5kaW5ncz0hMCxzPUZuKHIpLHMmJihyPXIucmVwbGFjZShLYSxcIlwiKSksVmEudGVzdChyKSlyPXIucmVwbGFjZShWYSxcIlwiKSxvPWNuKG8pLHMmJihzLnByb3AmJihjPSEwLHI9VnIociksXCJpbm5lckh0bWxcIj09PXImJihyPVwiaW5uZXJIVE1MXCIpKSxzLmNhbWVsJiYocj1WcihyKSkpLGN8fGRhKGUudGFnLHIpP3BuKGUscixvKTp2bihlLHIsbyk7ZWxzZSBpZih6YS50ZXN0KHIpKXI9ci5yZXBsYWNlKHphLFwiXCIpLG1uKGUscixvLHMpO2Vsc2V7cj1yLnJlcGxhY2UoQmEsXCJcIik7dmFyIHU9ci5tYXRjaChKYSk7dSYmKGE9dVsxXSkmJihyPXIuc2xpY2UoMCwtKGEubGVuZ3RoKzEpKSksaG4oZSxyLGksbyxhLHMpfWVsc2Ugdm4oZSxyLEpTT04uc3RyaW5naWZ5KG8pKX1mdW5jdGlvbiBJbihlKXtmb3IodmFyIHQ9ZTt0Oyl7aWYodm9pZCAwIT09dC5mb3IpcmV0dXJuITA7dD10LnBhcmVudH1yZXR1cm4hMX1mdW5jdGlvbiBGbihlKXt2YXIgdD1lLm1hdGNoKEthKTtpZih0KXt2YXIgbj17fTtyZXR1cm4gdC5mb3JFYWNoKGZ1bmN0aW9uKGUpe25bZS5zbGljZSgxKV09ITB9KSxufX1mdW5jdGlvbiBCbihlKXtmb3IodmFyIHQ9e30sbj0wLHI9ZS5sZW5ndGg7bjxyO24rKyl0W2Vbbl0ubmFtZV09ZVtuXS52YWx1ZTtyZXR1cm4gdH1mdW5jdGlvbiBVbihlKXtmb3IodmFyIHQ9ZS5sZW5ndGg7dC0tOylpZihlW3RdLnRhZylyZXR1cm4gZVt0XX1mdW5jdGlvbiBIbihlKXtyZXR1cm5cInN0eWxlXCI9PT1lLnRhZ3x8XCJzY3JpcHRcIj09PWUudGFnJiYoIWUuYXR0cnNNYXAudHlwZXx8XCJ0ZXh0L2phdmFzY3JpcHRcIj09PWUuYXR0cnNNYXAudHlwZSl9ZnVuY3Rpb24gVm4oZSl7Zm9yKHZhciB0PVtdLG49MDtuPGUubGVuZ3RoO24rKyl7dmFyIHI9ZVtuXTtXYS50ZXN0KHIubmFtZSl8fChyLm5hbWU9ci5uYW1lLnJlcGxhY2UoWmEsXCJcIiksdC5wdXNoKHIpKX1yZXR1cm4gdH1mdW5jdGlvbiB6bihlLHQpe2UmJih5YT1HYSh0LnN0YXRpY0tleXN8fFwiXCIpLF9hPXQuaXNSZXNlcnZlZFRhZ3x8ZnVuY3Rpb24oKXtyZXR1cm4hMX0sS24oZSkscW4oZSwhMSkpfWZ1bmN0aW9uIEpuKGUpe3JldHVybiBuKFwidHlwZSx0YWcsYXR0cnNMaXN0LGF0dHJzTWFwLHBsYWluLHBhcmVudCxjaGlsZHJlbixhdHRyc1wiKyhlP1wiLFwiK2U6XCJcIikpfWZ1bmN0aW9uIEtuKGUpe2lmKGUuc3RhdGljPVpuKGUpLDE9PT1lLnR5cGUpe2lmKCFfYShlLnRhZykmJlwic2xvdFwiIT09ZS50YWcmJm51bGw9PWUuYXR0cnNNYXBbXCJpbmxpbmUtdGVtcGxhdGVcIl0pcmV0dXJuO2Zvcih2YXIgdD0wLG49ZS5jaGlsZHJlbi5sZW5ndGg7dDxuO3QrKyl7dmFyIHI9ZS5jaGlsZHJlblt0XTtLbihyKSxyLnN0YXRpY3x8KGUuc3RhdGljPSExKX19fWZ1bmN0aW9uIHFuKGUsdCl7aWYoMT09PWUudHlwZSl7aWYoKGUuc3RhdGljfHxlLm9uY2UpJiYoZS5zdGF0aWNJbkZvcj10KSxlLnN0YXRpYyYmZS5jaGlsZHJlbi5sZW5ndGgmJigxIT09ZS5jaGlsZHJlbi5sZW5ndGh8fDMhPT1lLmNoaWxkcmVuWzBdLnR5cGUpKXJldHVybiB2b2lkKGUuc3RhdGljUm9vdD0hMCk7aWYoZS5zdGF0aWNSb290PSExLGUuY2hpbGRyZW4pZm9yKHZhciBuPTAscj1lLmNoaWxkcmVuLmxlbmd0aDtuPHI7bisrKXFuKGUuY2hpbGRyZW5bbl0sdHx8ISFlLmZvcik7ZS5jb25kaXRpb25zJiZXbihlLmNvbmRpdGlvbnMsdCl9fWZ1bmN0aW9uIFduKGUsdCl7Zm9yKHZhciBuPTEscj1lLmxlbmd0aDtuPHI7bisrKXFuKGVbbl0uYmxvY2ssdCl9ZnVuY3Rpb24gWm4oZSl7cmV0dXJuIDIhPT1lLnR5cGUmJigzPT09ZS50eXBlfHwhKCFlLnByZSYmKGUuaGFzQmluZGluZ3N8fGUuaWZ8fGUuZm9yfHxCcihlLnRhZyl8fCFfYShlLnRhZyl8fEduKGUpfHwhT2JqZWN0LmtleXMoZSkuZXZlcnkoeWEpKSkpfWZ1bmN0aW9uIEduKGUpe2Zvcig7ZS5wYXJlbnQ7KXtpZihlPWUucGFyZW50LFwidGVtcGxhdGVcIiE9PWUudGFnKXJldHVybiExO2lmKGUuZm9yKXJldHVybiEwfXJldHVybiExfWZ1bmN0aW9uIFluKGUsdCl7dmFyIG49dD9cIm5hdGl2ZU9uOntcIjpcIm9uOntcIjtmb3IodmFyIHIgaW4gZSluKz0nXCInK3IrJ1wiOicrUW4ocixlW3JdKStcIixcIjtyZXR1cm4gbi5zbGljZSgwLC0xKStcIn1cIn1mdW5jdGlvbiBRbihlLHQpe2lmKHQpe2lmKEFycmF5LmlzQXJyYXkodCkpcmV0dXJuXCJbXCIrdC5tYXAoZnVuY3Rpb24odCl7cmV0dXJuIFFuKGUsdCl9KS5qb2luKFwiLFwiKStcIl1cIjtpZih0Lm1vZGlmaWVycyl7dmFyIG49XCJcIixyPVtdLGk9dHMudGVzdChlKTtmb3IodmFyIG8gaW4gdC5tb2RpZmllcnMpZXNbb10/bis9ZXNbb106aSYmbnNbb10/bis9bnNbb106ci5wdXNoKG8pO3IubGVuZ3RoJiYobj1YbihyKStuKTt2YXIgYT1RYS50ZXN0KHQudmFsdWUpP3QudmFsdWUrXCIoJGV2ZW50KVwiOnQudmFsdWU7cmV0dXJuXCJmdW5jdGlvbigkZXZlbnQpe1wiK24rYStcIn1cIn1yZXR1cm4gWWEudGVzdCh0LnZhbHVlKXx8UWEudGVzdCh0LnZhbHVlKT90LnZhbHVlOlwiZnVuY3Rpb24oJGV2ZW50KXtcIit0LnZhbHVlK1wifVwifXJldHVyblwiZnVuY3Rpb24oKXt9XCJ9ZnVuY3Rpb24gWG4oZSl7dmFyIHQ9MT09PWUubGVuZ3RoP2VyKGVbMF0pOkFycmF5LnByb3RvdHlwZS5jb25jYXQuYXBwbHkoW10sZS5tYXAoZXIpKTtyZXR1cm4gQXJyYXkuaXNBcnJheSh0KT9cImlmKFwiK3QubWFwKGZ1bmN0aW9uKGUpe3JldHVyblwiJGV2ZW50LmtleUNvZGUhPT1cIitlfSkuam9pbihcIiYmXCIpK1wiKXJldHVybjtcIjpcImlmKCRldmVudC5rZXlDb2RlIT09XCIrdCtcIilyZXR1cm47XCJ9ZnVuY3Rpb24gZXIoZSl7cmV0dXJuIHBhcnNlSW50KGUsMTApfHxYYVtlXXx8XCJfayhcIitKU09OLnN0cmluZ2lmeShlKStcIilcIn1mdW5jdGlvbiB0cihlLHQpe2Uud3JhcERhdGE9ZnVuY3Rpb24obil7cmV0dXJuXCJfYihcIituK1wiLCdcIitlLnRhZytcIicsXCIrdC52YWx1ZSsodC5tb2RpZmllcnMmJnQubW9kaWZpZXJzLnByb3A/XCIsdHJ1ZVwiOlwiXCIpK1wiKVwifX1mdW5jdGlvbiBucihlLHQpe3ZhciBuPUNhLHI9Q2E9W10saT1rYTtrYT0wLEFhPXQsYmE9dC53YXJufHxmbiwkYT1kbih0Lm1vZHVsZXMsXCJ0cmFuc2Zvcm1Db2RlXCIpLHdhPWRuKHQubW9kdWxlcyxcImdlbkRhdGFcIikseGE9dC5kaXJlY3RpdmVzfHx7fTt2YXIgbz1lP3JyKGUpOidfaChcImRpdlwiKSc7cmV0dXJuIENhPW4sa2E9aSx7cmVuZGVyOlwid2l0aCh0aGlzKXtyZXR1cm4gXCIrbytcIn1cIixzdGF0aWNSZW5kZXJGbnM6cn19ZnVuY3Rpb24gcnIoZSl7aWYoZS5zdGF0aWNSb290JiYhZS5zdGF0aWNQcm9jZXNzZWQpcmV0dXJuIGlyKGUpO2lmKGUub25jZSYmIWUub25jZVByb2Nlc3NlZClyZXR1cm4gb3IoZSk7aWYoZS5mb3ImJiFlLmZvclByb2Nlc3NlZClyZXR1cm4gY3IoZSk7aWYoZS5pZiYmIWUuaWZQcm9jZXNzZWQpcmV0dXJuIGFyKGUpO2lmKFwidGVtcGxhdGVcIiE9PWUudGFnfHxlLnNsb3RUYXJnZXQpe2lmKFwic2xvdFwiPT09ZS50YWcpcmV0dXJuIGdyKGUpO3ZhciB0O2lmKGUuY29tcG9uZW50KXQ9eXIoZS5jb21wb25lbnQsZSk7ZWxzZXt2YXIgbj1lLnBsYWluP3ZvaWQgMDpscihlKSxyPWUuaW5saW5lVGVtcGxhdGU/bnVsbDp2cihlKTt0PVwiX2goJ1wiK2UudGFnK1wiJ1wiKyhuP1wiLFwiK246XCJcIikrKHI/XCIsXCIrcjpcIlwiKStcIilcIn1mb3IodmFyIGk9MDtpPCRhLmxlbmd0aDtpKyspdD0kYVtpXShlLHQpO3JldHVybiB0fXJldHVybiB2cihlKXx8XCJ2b2lkIDBcIn1mdW5jdGlvbiBpcihlKXtyZXR1cm4gZS5zdGF0aWNQcm9jZXNzZWQ9ITAsQ2EucHVzaChcIndpdGgodGhpcyl7cmV0dXJuIFwiK3JyKGUpK1wifVwiKSxcIl9tKFwiKyhDYS5sZW5ndGgtMSkrKGUuc3RhdGljSW5Gb3I/XCIsdHJ1ZVwiOlwiXCIpK1wiKVwifWZ1bmN0aW9uIG9yKGUpe2lmKGUub25jZVByb2Nlc3NlZD0hMCxlLmlmJiYhZS5pZlByb2Nlc3NlZClyZXR1cm4gYXIoZSk7aWYoZS5zdGF0aWNJbkZvcil7Zm9yKHZhciB0PVwiXCIsbj1lLnBhcmVudDtuOyl7aWYobi5mb3Ipe3Q9bi5rZXk7YnJlYWt9bj1uLnBhcmVudH1yZXR1cm4gdD9cIl9vKFwiK3JyKGUpK1wiLFwiK2thKysgKyh0P1wiLFwiK3Q6XCJcIikrXCIpXCI6cnIoZSl9cmV0dXJuIGlyKGUpfWZ1bmN0aW9uIGFyKGUpe3JldHVybiBlLmlmUHJvY2Vzc2VkPSEwLHNyKGUuY29uZGl0aW9ucyl9ZnVuY3Rpb24gc3IoZSl7ZnVuY3Rpb24gdChlKXtyZXR1cm4gZS5vbmNlP29yKGUpOnJyKGUpfWlmKCFlLmxlbmd0aClyZXR1cm5cIl9lKClcIjt2YXIgbj1lLnNoaWZ0KCk7cmV0dXJuIG4uZXhwP1wiKFwiK24uZXhwK1wiKT9cIit0KG4uYmxvY2spK1wiOlwiK3NyKGUpOlwiXCIrdChuLmJsb2NrKX1mdW5jdGlvbiBjcihlKXt2YXIgdD1lLmZvcixuPWUuYWxpYXMscj1lLml0ZXJhdG9yMT9cIixcIitlLml0ZXJhdG9yMTpcIlwiLGk9ZS5pdGVyYXRvcjI/XCIsXCIrZS5pdGVyYXRvcjI6XCJcIjtyZXR1cm4gZS5mb3JQcm9jZXNzZWQ9ITAsXCJfbCgoXCIrdCtcIiksZnVuY3Rpb24oXCIrbityK2krXCIpe3JldHVybiBcIitycihlKStcIn0pXCJ9ZnVuY3Rpb24gbHIoZSl7dmFyIHQ9XCJ7XCIsbj11cihlKTtuJiYodCs9bitcIixcIiksZS5rZXkmJih0Kz1cImtleTpcIitlLmtleStcIixcIiksZS5yZWYmJih0Kz1cInJlZjpcIitlLnJlZitcIixcIiksZS5yZWZJbkZvciYmKHQrPVwicmVmSW5Gb3I6dHJ1ZSxcIiksZS5jb21wb25lbnQmJih0Kz0ndGFnOlwiJytlLnRhZysnXCIsJyk7Zm9yKHZhciByPTA7cjx3YS5sZW5ndGg7cisrKXQrPXdhW3JdKGUpO2lmKGUuYXR0cnMmJih0Kz1cImF0dHJzOntcIitfcihlLmF0dHJzKStcIn0sXCIpLGUucHJvcHMmJih0Kz1cImRvbVByb3BzOntcIitfcihlLnByb3BzKStcIn0sXCIpLGUuZXZlbnRzJiYodCs9WW4oZS5ldmVudHMpK1wiLFwiKSxlLm5hdGl2ZUV2ZW50cyYmKHQrPVluKGUubmF0aXZlRXZlbnRzLCEwKStcIixcIiksZS5zbG90VGFyZ2V0JiYodCs9XCJzbG90OlwiK2Uuc2xvdFRhcmdldCtcIixcIiksZS5zY29wZWRTbG90cyYmKHQrPWRyKGUuc2NvcGVkU2xvdHMpK1wiLFwiKSxlLmlubGluZVRlbXBsYXRlKXt2YXIgaT1mcihlKTtpJiYodCs9aStcIixcIil9cmV0dXJuIHQ9dC5yZXBsYWNlKC8sJC8sXCJcIikrXCJ9XCIsZS53cmFwRGF0YSYmKHQ9ZS53cmFwRGF0YSh0KSksdH1mdW5jdGlvbiB1cihlKXt2YXIgdD1lLmRpcmVjdGl2ZXM7aWYodCl7dmFyIG4scixpLG8sYT1cImRpcmVjdGl2ZXM6W1wiLHM9ITE7Zm9yKG49MCxyPXQubGVuZ3RoO248cjtuKyspe2k9dFtuXSxvPSEwO3ZhciBjPXhhW2kubmFtZV18fHJzW2kubmFtZV07YyYmKG89ISFjKGUsaSxiYSkpLG8mJihzPSEwLGErPSd7bmFtZTpcIicraS5uYW1lKydcIixyYXdOYW1lOlwiJytpLnJhd05hbWUrJ1wiJysoaS52YWx1ZT9cIix2YWx1ZTooXCIraS52YWx1ZStcIiksZXhwcmVzc2lvbjpcIitKU09OLnN0cmluZ2lmeShpLnZhbHVlKTpcIlwiKSsoaS5hcmc/Jyxhcmc6XCInK2kuYXJnKydcIic6XCJcIikrKGkubW9kaWZpZXJzP1wiLG1vZGlmaWVyczpcIitKU09OLnN0cmluZ2lmeShpLm1vZGlmaWVycyk6XCJcIikrXCJ9LFwiKX1yZXR1cm4gcz9hLnNsaWNlKDAsLTEpK1wiXVwiOnZvaWQgMH19ZnVuY3Rpb24gZnIoZSl7dmFyIHQ9ZS5jaGlsZHJlblswXTtpZigxPT09dC50eXBlKXt2YXIgbj1ucih0LEFhKTtyZXR1cm5cImlubGluZVRlbXBsYXRlOntyZW5kZXI6ZnVuY3Rpb24oKXtcIituLnJlbmRlcitcIn0sc3RhdGljUmVuZGVyRm5zOltcIituLnN0YXRpY1JlbmRlckZucy5tYXAoZnVuY3Rpb24oZSl7cmV0dXJuXCJmdW5jdGlvbigpe1wiK2UrXCJ9XCJ9KS5qb2luKFwiLFwiKStcIl19XCJ9fWZ1bmN0aW9uIGRyKGUpe3JldHVyblwic2NvcGVkU2xvdHM6e1wiK09iamVjdC5rZXlzKGUpLm1hcChmdW5jdGlvbih0KXtyZXR1cm4gcHIodCxlW3RdKX0pLmpvaW4oXCIsXCIpK1wifVwifWZ1bmN0aW9uIHByKGUsdCl7cmV0dXJuIGUrXCI6ZnVuY3Rpb24oXCIrU3RyaW5nKHQuYXR0cnNNYXAuc2NvcGUpK1wiKXtyZXR1cm4gXCIrKFwidGVtcGxhdGVcIj09PXQudGFnP3ZyKHQpfHxcInZvaWQgMFwiOnJyKHQpKStcIn1cIn1mdW5jdGlvbiB2cihlKXtpZihlLmNoaWxkcmVuLmxlbmd0aClyZXR1cm5cIltcIitlLmNoaWxkcmVuLm1hcChocikuam9pbihcIixcIikrXCJdXCJ9ZnVuY3Rpb24gaHIoZSl7cmV0dXJuIDE9PT1lLnR5cGU/cnIoZSk6bXIoZSl9ZnVuY3Rpb24gbXIoZSl7cmV0dXJuIDI9PT1lLnR5cGU/ZS5leHByZXNzaW9uOmJyKEpTT04uc3RyaW5naWZ5KGUudGV4dCkpfWZ1bmN0aW9uIGdyKGUpe3ZhciB0PWUuc2xvdE5hbWV8fCdcImRlZmF1bHRcIicsbj12cihlKTtyZXR1cm5cIl90KFwiK3QrKG4/XCIsXCIrbjpcIlwiKSsoZS5hdHRycz8obj9cIlwiOlwiLG51bGxcIikrXCIse1wiK2UuYXR0cnMubWFwKGZ1bmN0aW9uKGUpe3JldHVybiBWcihlLm5hbWUpK1wiOlwiK2UudmFsdWV9KS5qb2luKFwiLFwiKStcIn1cIjpcIlwiKStcIilcIn1mdW5jdGlvbiB5cihlLHQpe3ZhciBuPXQuaW5saW5lVGVtcGxhdGU/bnVsbDp2cih0KTtyZXR1cm5cIl9oKFwiK2UrXCIsXCIrbHIodCkrKG4/XCIsXCIrbjpcIlwiKStcIilcIn1mdW5jdGlvbiBfcihlKXtmb3IodmFyIHQ9XCJcIixuPTA7bjxlLmxlbmd0aDtuKyspe3ZhciByPWVbbl07dCs9J1wiJytyLm5hbWUrJ1wiOicrYnIoci52YWx1ZSkrXCIsXCJ9cmV0dXJuIHQuc2xpY2UoMCwtMSl9ZnVuY3Rpb24gYnIoZSl7cmV0dXJuIGUucmVwbGFjZSgvXFx1MjAyOC9nLFwiXFxcXHUyMDI4XCIpLnJlcGxhY2UoL1xcdTIwMjkvZyxcIlxcXFx1MjAyOVwiKX1mdW5jdGlvbiAkcihlLHQpe3ZhciBuPWtuKGUudHJpbSgpLHQpO3puKG4sdCk7dmFyIHI9bnIobix0KTtyZXR1cm57YXN0Om4scmVuZGVyOnIucmVuZGVyLHN0YXRpY1JlbmRlckZuczpyLnN0YXRpY1JlbmRlckZuc319ZnVuY3Rpb24gd3IoZSx0KXt2YXIgbj0odC53YXJufHxmbix5bihlLFwiY2xhc3NcIikpO24mJihlLnN0YXRpY0NsYXNzPUpTT04uc3RyaW5naWZ5KG4pKTt2YXIgcj1nbihlLFwiY2xhc3NcIiwhMSk7ciYmKGUuY2xhc3NCaW5kaW5nPXIpfWZ1bmN0aW9uIHhyKGUpe3ZhciB0PVwiXCI7cmV0dXJuIGUuc3RhdGljQ2xhc3MmJih0Kz1cInN0YXRpY0NsYXNzOlwiK2Uuc3RhdGljQ2xhc3MrXCIsXCIpLGUuY2xhc3NCaW5kaW5nJiYodCs9XCJjbGFzczpcIitlLmNsYXNzQmluZGluZytcIixcIiksdH1mdW5jdGlvbiBDcihlLHQpe3ZhciBuPSh0Lndhcm58fGZuLHluKGUsXCJzdHlsZVwiKSk7biYmKGUuc3RhdGljU3R5bGU9SlNPTi5zdHJpbmdpZnkoaG8obikpKTt2YXIgcj1nbihlLFwic3R5bGVcIiwhMSk7ciYmKGUuc3R5bGVCaW5kaW5nPXIpfWZ1bmN0aW9uIGtyKGUpe3ZhciB0PVwiXCI7cmV0dXJuIGUuc3RhdGljU3R5bGUmJih0Kz1cInN0YXRpY1N0eWxlOlwiK2Uuc3RhdGljU3R5bGUrXCIsXCIpLGUuc3R5bGVCaW5kaW5nJiYodCs9XCJzdHlsZTooXCIrZS5zdHlsZUJpbmRpbmcrXCIpLFwiKSx0fWZ1bmN0aW9uIEFyKGUsdCxuKXtPYT1uO3ZhciByPXQudmFsdWUsaT10Lm1vZGlmaWVycyxvPWUudGFnLGE9ZS5hdHRyc01hcC50eXBlO3JldHVyblwic2VsZWN0XCI9PT1vP2pyKGUscixpKTpcImlucHV0XCI9PT1vJiZcImNoZWNrYm94XCI9PT1hP09yKGUscixpKTpcImlucHV0XCI9PT1vJiZcInJhZGlvXCI9PT1hP1NyKGUscixpKTpUcihlLHIsaSksITB9ZnVuY3Rpb24gT3IoZSx0LG4pe3ZhciByPW4mJm4ubnVtYmVyLGk9Z24oZSxcInZhbHVlXCIpfHxcIm51bGxcIixvPWduKGUsXCJ0cnVlLXZhbHVlXCIpfHxcInRydWVcIixhPWduKGUsXCJmYWxzZS12YWx1ZVwiKXx8XCJmYWxzZVwiO3BuKGUsXCJjaGVja2VkXCIsXCJBcnJheS5pc0FycmF5KFwiK3QrXCIpP19pKFwiK3QrXCIsXCIraStcIik+LTE6X3EoXCIrdCtcIixcIitvK1wiKVwiKSxtbihlLFwiY2hhbmdlXCIsXCJ2YXIgJCRhPVwiK3QrXCIsJCRlbD0kZXZlbnQudGFyZ2V0LCQkYz0kJGVsLmNoZWNrZWQ/KFwiK28rXCIpOihcIithK1wiKTtpZihBcnJheS5pc0FycmF5KCQkYSkpe3ZhciAkJHY9XCIrKHI/XCJfbihcIitpK1wiKVwiOmkpK1wiLCQkaT1faSgkJGEsJCR2KTtpZigkJGMpeyQkaTwwJiYoXCIrdCtcIj0kJGEuY29uY2F0KCQkdikpfWVsc2V7JCRpPi0xJiYoXCIrdCtcIj0kJGEuc2xpY2UoMCwkJGkpLmNvbmNhdCgkJGEuc2xpY2UoJCRpKzEpKSl9fWVsc2V7XCIrdCtcIj0kJGN9XCIsbnVsbCwhMCl9ZnVuY3Rpb24gU3IoZSx0LG4pe3ZhciByPW4mJm4ubnVtYmVyLGk9Z24oZSxcInZhbHVlXCIpfHxcIm51bGxcIjtpPXI/XCJfbihcIitpK1wiKVwiOmkscG4oZSxcImNoZWNrZWRcIixcIl9xKFwiK3QrXCIsXCIraStcIilcIiksbW4oZSxcImNoYW5nZVwiLEVyKHQsaSksbnVsbCwhMCl9ZnVuY3Rpb24gVHIoZSx0LG4pe3ZhciByPWUuYXR0cnNNYXAudHlwZSxpPW58fHt9LG89aS5sYXp5LGE9aS5udW1iZXIscz1pLnRyaW0sYz1vfHxlaSYmXCJyYW5nZVwiPT09cj9cImNoYW5nZVwiOlwiaW5wdXRcIixsPSFvJiZcInJhbmdlXCIhPT1yLHU9XCJpbnB1dFwiPT09ZS50YWd8fFwidGV4dGFyZWFcIj09PWUudGFnLGY9dT9cIiRldmVudC50YXJnZXQudmFsdWVcIisocz9cIi50cmltKClcIjpcIlwiKTpzP1wiKHR5cGVvZiAkZXZlbnQgPT09ICdzdHJpbmcnID8gJGV2ZW50LnRyaW0oKSA6ICRldmVudClcIjpcIiRldmVudFwiO2Y9YXx8XCJudW1iZXJcIj09PXI/XCJfbihcIitmK1wiKVwiOmY7dmFyIGQ9RXIodCxmKTt1JiZsJiYoZD1cImlmKCRldmVudC50YXJnZXQuY29tcG9zaW5nKXJldHVybjtcIitkKSxwbihlLFwidmFsdWVcIix1P1wiX3MoXCIrdCtcIilcIjpcIihcIit0K1wiKVwiKSxtbihlLGMsZCxudWxsLCEwKX1mdW5jdGlvbiBqcihlLHQsbil7dmFyIHI9biYmbi5udW1iZXIsaT0nQXJyYXkucHJvdG90eXBlLmZpbHRlci5jYWxsKCRldmVudC50YXJnZXQub3B0aW9ucyxmdW5jdGlvbihvKXtyZXR1cm4gby5zZWxlY3RlZH0pLm1hcChmdW5jdGlvbihvKXt2YXIgdmFsID0gXCJfdmFsdWVcIiBpbiBvID8gby5fdmFsdWUgOiBvLnZhbHVlO3JldHVybiAnKyhyP1wiX24odmFsKVwiOlwidmFsXCIpK1wifSlcIisobnVsbD09ZS5hdHRyc01hcC5tdWx0aXBsZT9cIlswXVwiOlwiXCIpLG89RXIodCxpKTttbihlLFwiY2hhbmdlXCIsbyxudWxsLCEwKX1mdW5jdGlvbiBFcihlLHQpe3ZhciBuPV9uKGUpO3JldHVybiBudWxsPT09bi5pZHg/ZStcIj1cIit0OlwidmFyICQkZXhwID0gXCIrbi5leHArXCIsICQkaWR4ID0gXCIrbi5pZHgrXCI7aWYgKCFBcnJheS5pc0FycmF5KCQkZXhwKSl7XCIrZStcIj1cIit0K1wifWVsc2V7JCRleHAuc3BsaWNlKCQkaWR4LCAxLCBcIit0K1wiKX1cIn1mdW5jdGlvbiBOcihlLHQpe3QudmFsdWUmJnBuKGUsXCJ0ZXh0Q29udGVudFwiLFwiX3MoXCIrdC52YWx1ZStcIilcIil9ZnVuY3Rpb24gTHIoZSx0KXt0LnZhbHVlJiZwbihlLFwiaW5uZXJIVE1MXCIsXCJfcyhcIit0LnZhbHVlK1wiKVwiKX1mdW5jdGlvbiBEcihlLHQpe3JldHVybiB0PXQ/bChsKHt9LGxzKSx0KTpscywkcihlLHQpfWZ1bmN0aW9uIE1yKGUsdCxuKXt2YXIgcj0odCYmdC53YXJufHx1aSx0JiZ0LmRlbGltaXRlcnM/U3RyaW5nKHQuZGVsaW1pdGVycykrZTplKTtpZihjc1tyXSlyZXR1cm4gY3Nbcl07dmFyIGk9e30sbz1EcihlLHQpO2kucmVuZGVyPVByKG8ucmVuZGVyKTt2YXIgYT1vLnN0YXRpY1JlbmRlckZucy5sZW5ndGg7aS5zdGF0aWNSZW5kZXJGbnM9bmV3IEFycmF5KGEpO2Zvcih2YXIgcz0wO3M8YTtzKyspaS5zdGF0aWNSZW5kZXJGbnNbc109UHIoby5zdGF0aWNSZW5kZXJGbnNbc10pO3JldHVybiBjc1tyXT1pfWZ1bmN0aW9uIFByKGUpe3RyeXtyZXR1cm4gbmV3IEZ1bmN0aW9uKGUpfWNhdGNoKGUpe3JldHVybiBwfX1mdW5jdGlvbiBScihlKXtpZihlLm91dGVySFRNTClyZXR1cm4gZS5vdXRlckhUTUw7dmFyIHQ9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtyZXR1cm4gdC5hcHBlbmRDaGlsZChlLmNsb25lTm9kZSghMCkpLHQuaW5uZXJIVE1MfXZhciBJcixGcixCcj1uKFwic2xvdCxjb21wb25lbnRcIiwhMCksVXI9T2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eSxIcj0vLShcXHcpL2csVnI9YShmdW5jdGlvbihlKXtyZXR1cm4gZS5yZXBsYWNlKEhyLGZ1bmN0aW9uKGUsdCl7cmV0dXJuIHQ/dC50b1VwcGVyQ2FzZSgpOlwiXCJ9KX0pLHpyPWEoZnVuY3Rpb24oZSl7cmV0dXJuIGUuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkrZS5zbGljZSgxKX0pLEpyPS8oW14tXSkoW0EtWl0pL2csS3I9YShmdW5jdGlvbihlKXtyZXR1cm4gZS5yZXBsYWNlKEpyLFwiJDEtJDJcIikucmVwbGFjZShKcixcIiQxLSQyXCIpLnRvTG93ZXJDYXNlKCl9KSxxcj1PYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLFdyPVwiW29iamVjdCBPYmplY3RdXCIsWnI9ZnVuY3Rpb24oKXtyZXR1cm4hMX0sR3I9L1teXFx3LiRdLyxZcj1cIl9fcHJvdG9fX1wiaW57fSxRcj1cInVuZGVmaW5lZFwiIT10eXBlb2Ygd2luZG93JiZcIltvYmplY3QgT2JqZWN0XVwiIT09T2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHdpbmRvdyksWHI9UXImJndpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCksZWk9WHImJi9tc2llfHRyaWRlbnQvLnRlc3QoWHIpLHRpPVhyJiZYci5pbmRleE9mKFwibXNpZSA5LjBcIik+MCxuaT1YciYmWHIuaW5kZXhPZihcImVkZ2UvXCIpPjAscmk9WHImJlhyLmluZGV4T2YoXCJhbmRyb2lkXCIpPjAsaWk9WHImJi9pcGhvbmV8aXBhZHxpcG9kfGlvcy8udGVzdChYciksb2k9ZnVuY3Rpb24oKXtyZXR1cm4gdm9pZCAwPT09SXImJihJcj0hUXImJlwidW5kZWZpbmVkXCIhPXR5cGVvZiBnbG9iYWwmJlwic2VydmVyXCI9PT1nbG9iYWwucHJvY2Vzcy5lbnYuVlVFX0VOViksSXJ9LGFpPVFyJiZ3aW5kb3cuX19WVUVfREVWVE9PTFNfR0xPQkFMX0hPT0tfXyxzaT1mdW5jdGlvbigpe2Z1bmN0aW9uIGUoKXtyPSExO3ZhciBlPW4uc2xpY2UoMCk7bi5sZW5ndGg9MDtmb3IodmFyIHQ9MDt0PGUubGVuZ3RoO3QrKyllW3RdKCl9dmFyIHQsbj1bXSxyPSExO2lmKFwidW5kZWZpbmVkXCIhPXR5cGVvZiBQcm9taXNlJiZiKFByb21pc2UpKXt2YXIgaT1Qcm9taXNlLnJlc29sdmUoKTt0PWZ1bmN0aW9uKCl7aS50aGVuKGUpLGlpJiZzZXRUaW1lb3V0KHApfX1lbHNlIGlmKFwidW5kZWZpbmVkXCI9PXR5cGVvZiBNdXRhdGlvbk9ic2VydmVyfHwhYihNdXRhdGlvbk9ic2VydmVyKSYmXCJbb2JqZWN0IE11dGF0aW9uT2JzZXJ2ZXJDb25zdHJ1Y3Rvcl1cIiE9PU11dGF0aW9uT2JzZXJ2ZXIudG9TdHJpbmcoKSl0PWZ1bmN0aW9uKCl7c2V0VGltZW91dChlLDApfTtlbHNle3ZhciBvPTEsYT1uZXcgTXV0YXRpb25PYnNlcnZlcihlKSxzPWRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFN0cmluZyhvKSk7YS5vYnNlcnZlKHMse2NoYXJhY3RlckRhdGE6ITB9KSx0PWZ1bmN0aW9uKCl7bz0obysxKSUyLHMuZGF0YT1TdHJpbmcobyl9fXJldHVybiBmdW5jdGlvbihlLGkpe3ZhciBvO2lmKG4ucHVzaChmdW5jdGlvbigpe2UmJmUuY2FsbChpKSxvJiZvKGkpfSkscnx8KHI9ITAsdCgpKSwhZSYmXCJ1bmRlZmluZWRcIiE9dHlwZW9mIFByb21pc2UpcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKGUpe289ZX0pfX0oKTtGcj1cInVuZGVmaW5lZFwiIT10eXBlb2YgU2V0JiZiKFNldCk/U2V0OmZ1bmN0aW9uKCl7ZnVuY3Rpb24gZSgpe3RoaXMuc2V0PU9iamVjdC5jcmVhdGUobnVsbCl9cmV0dXJuIGUucHJvdG90eXBlLmhhcz1mdW5jdGlvbihlKXtyZXR1cm4gdm9pZCAwIT09dGhpcy5zZXRbZV19LGUucHJvdG90eXBlLmFkZD1mdW5jdGlvbihlKXt0aGlzLnNldFtlXT0xfSxlLnByb3RvdHlwZS5jbGVhcj1mdW5jdGlvbigpe3RoaXMuc2V0PU9iamVjdC5jcmVhdGUobnVsbCl9LGV9KCk7dmFyIGNpLGxpPXtvcHRpb25NZXJnZVN0cmF0ZWdpZXM6T2JqZWN0LmNyZWF0ZShudWxsKSxzaWxlbnQ6ITEsZGV2dG9vbHM6ITEsZXJyb3JIYW5kbGVyOm51bGwsaWdub3JlZEVsZW1lbnRzOm51bGwsa2V5Q29kZXM6T2JqZWN0LmNyZWF0ZShudWxsKSxpc1Jlc2VydmVkVGFnOlpyLGlzVW5rbm93bkVsZW1lbnQ6WnIsZ2V0VGFnTmFtZXNwYWNlOnAsbXVzdFVzZVByb3A6WnIsX2Fzc2V0VHlwZXM6W1wiY29tcG9uZW50XCIsXCJkaXJlY3RpdmVcIixcImZpbHRlclwiXSxfbGlmZWN5Y2xlSG9va3M6W1wiYmVmb3JlQ3JlYXRlXCIsXCJjcmVhdGVkXCIsXCJiZWZvcmVNb3VudFwiLFwibW91bnRlZFwiLFwiYmVmb3JlVXBkYXRlXCIsXCJ1cGRhdGVkXCIsXCJiZWZvcmVEZXN0cm95XCIsXCJkZXN0cm95ZWRcIixcImFjdGl2YXRlZFwiLFwiZGVhY3RpdmF0ZWRcIl0sX21heFVwZGF0ZUNvdW50OjEwMH0sdWk9cCxmaT0wLGRpPWZ1bmN0aW9uKCl7dGhpcy5pZD1maSsrLHRoaXMuc3Vicz1bXX07ZGkucHJvdG90eXBlLmFkZFN1Yj1mdW5jdGlvbihlKXt0aGlzLnN1YnMucHVzaChlKX0sZGkucHJvdG90eXBlLnJlbW92ZVN1Yj1mdW5jdGlvbihlKXtyKHRoaXMuc3VicyxlKX0sZGkucHJvdG90eXBlLmRlcGVuZD1mdW5jdGlvbigpe2RpLnRhcmdldCYmZGkudGFyZ2V0LmFkZERlcCh0aGlzKX0sZGkucHJvdG90eXBlLm5vdGlmeT1mdW5jdGlvbigpe2Zvcih2YXIgZT10aGlzLnN1YnMuc2xpY2UoKSx0PTAsbj1lLmxlbmd0aDt0PG47dCsrKWVbdF0udXBkYXRlKCl9LGRpLnRhcmdldD1udWxsO3ZhciBwaT1bXSx2aT1BcnJheS5wcm90b3R5cGUsaGk9T2JqZWN0LmNyZWF0ZSh2aSk7W1wicHVzaFwiLFwicG9wXCIsXCJzaGlmdFwiLFwidW5zaGlmdFwiLFwic3BsaWNlXCIsXCJzb3J0XCIsXCJyZXZlcnNlXCJdLmZvckVhY2goZnVuY3Rpb24oZSl7dmFyIHQ9dmlbZV07eShoaSxlLGZ1bmN0aW9uKCl7Zm9yKHZhciBuPWFyZ3VtZW50cyxyPWFyZ3VtZW50cy5sZW5ndGgsaT1uZXcgQXJyYXkocik7ci0tOylpW3JdPW5bcl07dmFyIG8sYT10LmFwcGx5KHRoaXMsaSkscz10aGlzLl9fb2JfXztzd2l0Y2goZSl7Y2FzZVwicHVzaFwiOm89aTticmVhaztjYXNlXCJ1bnNoaWZ0XCI6bz1pO2JyZWFrO2Nhc2VcInNwbGljZVwiOm89aS5zbGljZSgyKX1yZXR1cm4gbyYmcy5vYnNlcnZlQXJyYXkobykscy5kZXAubm90aWZ5KCksYX0pfSk7dmFyIG1pPU9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGhpKSxnaT17c2hvdWxkQ29udmVydDohMCxpc1NldHRpbmdQcm9wczohMX0seWk9ZnVuY3Rpb24oZSl7aWYodGhpcy52YWx1ZT1lLHRoaXMuZGVwPW5ldyBkaSx0aGlzLnZtQ291bnQ9MCx5KGUsXCJfX29iX19cIix0aGlzKSxBcnJheS5pc0FycmF5KGUpKXt2YXIgdD1Zcj94OkM7dChlLGhpLG1pKSx0aGlzLm9ic2VydmVBcnJheShlKX1lbHNlIHRoaXMud2FsayhlKX07eWkucHJvdG90eXBlLndhbGs9ZnVuY3Rpb24oZSl7Zm9yKHZhciB0PU9iamVjdC5rZXlzKGUpLG49MDtuPHQubGVuZ3RoO24rKylBKGUsdFtuXSxlW3Rbbl1dKX0seWkucHJvdG90eXBlLm9ic2VydmVBcnJheT1mdW5jdGlvbihlKXtmb3IodmFyIHQ9MCxuPWUubGVuZ3RoO3Q8bjt0KyspayhlW3RdKX07dmFyIF9pPWxpLm9wdGlvbk1lcmdlU3RyYXRlZ2llcztfaS5kYXRhPWZ1bmN0aW9uKGUsdCxuKXtyZXR1cm4gbj9lfHx0P2Z1bmN0aW9uKCl7dmFyIHI9XCJmdW5jdGlvblwiPT10eXBlb2YgdD90LmNhbGwobik6dCxpPVwiZnVuY3Rpb25cIj09dHlwZW9mIGU/ZS5jYWxsKG4pOnZvaWQgMDtyZXR1cm4gcj9qKHIsaSk6aX06dm9pZCAwOnQ/XCJmdW5jdGlvblwiIT10eXBlb2YgdD9lOmU/ZnVuY3Rpb24oKXtyZXR1cm4gaih0LmNhbGwodGhpcyksZS5jYWxsKHRoaXMpKX06dDplfSxsaS5fbGlmZWN5Y2xlSG9va3MuZm9yRWFjaChmdW5jdGlvbihlKXtfaVtlXT1FfSksbGkuX2Fzc2V0VHlwZXMuZm9yRWFjaChmdW5jdGlvbihlKXtfaVtlK1wic1wiXT1OfSksX2kud2F0Y2g9ZnVuY3Rpb24oZSx0KXtpZighdClyZXR1cm4gZTtpZighZSlyZXR1cm4gdDt2YXIgbj17fTtsKG4sZSk7Zm9yKHZhciByIGluIHQpe3ZhciBpPW5bcl0sbz10W3JdO2kmJiFBcnJheS5pc0FycmF5KGkpJiYoaT1baV0pLG5bcl09aT9pLmNvbmNhdChvKTpbb119cmV0dXJuIG59LF9pLnByb3BzPV9pLm1ldGhvZHM9X2kuY29tcHV0ZWQ9ZnVuY3Rpb24oZSx0KXtpZighdClyZXR1cm4gZTtpZighZSlyZXR1cm4gdDt2YXIgbj1PYmplY3QuY3JlYXRlKG51bGwpO3JldHVybiBsKG4sZSksbChuLHQpLG59O3ZhciBiaT1mdW5jdGlvbihlLHQpe3JldHVybiB2b2lkIDA9PT10P2U6dH0sJGk9T2JqZWN0LmZyZWV6ZSh7ZGVmaW5lUmVhY3RpdmU6QSxfdG9TdHJpbmc6ZSx0b051bWJlcjp0LG1ha2VNYXA6bixpc0J1aWx0SW5UYWc6QnIscmVtb3ZlOnIsaGFzT3duOmksaXNQcmltaXRpdmU6byxjYWNoZWQ6YSxjYW1lbGl6ZTpWcixjYXBpdGFsaXplOnpyLGh5cGhlbmF0ZTpLcixiaW5kOnMsdG9BcnJheTpjLGV4dGVuZDpsLGlzT2JqZWN0OnUsaXNQbGFpbk9iamVjdDpmLHRvT2JqZWN0OmQsbm9vcDpwLG5vOlpyLGdlblN0YXRpY0tleXM6dixsb29zZUVxdWFsOmgsbG9vc2VJbmRleE9mOm0saXNSZXNlcnZlZDpnLGRlZjp5LHBhcnNlUGF0aDpfLGhhc1Byb3RvOllyLGluQnJvd3NlcjpRcixVQTpYcixpc0lFOmVpLGlzSUU5OnRpLGlzRWRnZTpuaSxpc0FuZHJvaWQ6cmksaXNJT1M6aWksaXNTZXJ2ZXJSZW5kZXJpbmc6b2ksZGV2dG9vbHM6YWksbmV4dFRpY2s6c2ksZ2V0IF9TZXQoKXtyZXR1cm4gRnJ9LG1lcmdlT3B0aW9uczpNLHJlc29sdmVBc3NldDpQLHdhcm46dWksZm9ybWF0Q29tcG9uZW50TmFtZTpjaSx2YWxpZGF0ZVByb3A6Un0pLHdpPVtdLHhpPXt9LENpPSExLGtpPSExLEFpPTAsT2k9MCxTaT1mdW5jdGlvbihlLHQsbixyKXt2b2lkIDA9PT1yJiYocj17fSksdGhpcy52bT1lLGUuX3dhdGNoZXJzLnB1c2godGhpcyksdGhpcy5kZWVwPSEhci5kZWVwLHRoaXMudXNlcj0hIXIudXNlcix0aGlzLmxhenk9ISFyLmxhenksdGhpcy5zeW5jPSEhci5zeW5jLHRoaXMuZXhwcmVzc2lvbj10LnRvU3RyaW5nKCksdGhpcy5jYj1uLHRoaXMuaWQ9KytPaSx0aGlzLmFjdGl2ZT0hMCx0aGlzLmRpcnR5PXRoaXMubGF6eSx0aGlzLmRlcHM9W10sdGhpcy5uZXdEZXBzPVtdLHRoaXMuZGVwSWRzPW5ldyBGcix0aGlzLm5ld0RlcElkcz1uZXcgRnIsXCJmdW5jdGlvblwiPT10eXBlb2YgdD90aGlzLmdldHRlcj10Oih0aGlzLmdldHRlcj1fKHQpLHRoaXMuZ2V0dGVyfHwodGhpcy5nZXR0ZXI9ZnVuY3Rpb24oKXt9KSksdGhpcy52YWx1ZT10aGlzLmxhenk/dm9pZCAwOnRoaXMuZ2V0KCl9O1NpLnByb3RvdHlwZS5nZXQ9ZnVuY3Rpb24oKXskKHRoaXMpO3ZhciBlPXRoaXMuZ2V0dGVyLmNhbGwodGhpcy52bSx0aGlzLnZtKTtyZXR1cm4gdGhpcy5kZWVwJiZ6KGUpLHcoKSx0aGlzLmNsZWFudXBEZXBzKCksZX0sU2kucHJvdG90eXBlLmFkZERlcD1mdW5jdGlvbihlKXt2YXIgdD1lLmlkO3RoaXMubmV3RGVwSWRzLmhhcyh0KXx8KHRoaXMubmV3RGVwSWRzLmFkZCh0KSx0aGlzLm5ld0RlcHMucHVzaChlKSx0aGlzLmRlcElkcy5oYXModCl8fGUuYWRkU3ViKHRoaXMpKX0sU2kucHJvdG90eXBlLmNsZWFudXBEZXBzPWZ1bmN0aW9uKCl7Zm9yKHZhciBlPXRoaXMsdD10aGlzLmRlcHMubGVuZ3RoO3QtLTspe3ZhciBuPWUuZGVwc1t0XTtlLm5ld0RlcElkcy5oYXMobi5pZCl8fG4ucmVtb3ZlU3ViKGUpfXZhciByPXRoaXMuZGVwSWRzO3RoaXMuZGVwSWRzPXRoaXMubmV3RGVwSWRzLHRoaXMubmV3RGVwSWRzPXIsdGhpcy5uZXdEZXBJZHMuY2xlYXIoKSxyPXRoaXMuZGVwcyx0aGlzLmRlcHM9dGhpcy5uZXdEZXBzLHRoaXMubmV3RGVwcz1yLHRoaXMubmV3RGVwcy5sZW5ndGg9MH0sU2kucHJvdG90eXBlLnVwZGF0ZT1mdW5jdGlvbigpe3RoaXMubGF6eT90aGlzLmRpcnR5PSEwOnRoaXMuc3luYz90aGlzLnJ1bigpOlYodGhpcyl9LFNpLnByb3RvdHlwZS5ydW49ZnVuY3Rpb24oKXtpZih0aGlzLmFjdGl2ZSl7dmFyIGU9dGhpcy5nZXQoKTtpZihlIT09dGhpcy52YWx1ZXx8dShlKXx8dGhpcy5kZWVwKXt2YXIgdD10aGlzLnZhbHVlO2lmKHRoaXMudmFsdWU9ZSx0aGlzLnVzZXIpdHJ5e3RoaXMuY2IuY2FsbCh0aGlzLnZtLGUsdCl9Y2F0Y2goZSl7aWYoIWxpLmVycm9ySGFuZGxlcil0aHJvdyBlO2xpLmVycm9ySGFuZGxlci5jYWxsKG51bGwsZSx0aGlzLnZtKX1lbHNlIHRoaXMuY2IuY2FsbCh0aGlzLnZtLGUsdCl9fX0sU2kucHJvdG90eXBlLmV2YWx1YXRlPWZ1bmN0aW9uKCl7dGhpcy52YWx1ZT10aGlzLmdldCgpLHRoaXMuZGlydHk9ITF9LFNpLnByb3RvdHlwZS5kZXBlbmQ9ZnVuY3Rpb24oKXtmb3IodmFyIGU9dGhpcyx0PXRoaXMuZGVwcy5sZW5ndGg7dC0tOyllLmRlcHNbdF0uZGVwZW5kKCl9LFNpLnByb3RvdHlwZS50ZWFyZG93bj1mdW5jdGlvbigpe3ZhciBlPXRoaXM7aWYodGhpcy5hY3RpdmUpe3RoaXMudm0uX2lzQmVpbmdEZXN0cm95ZWR8fHRoaXMudm0uX3ZGb3JSZW1vdmluZ3x8cih0aGlzLnZtLl93YXRjaGVycyx0aGlzKTtmb3IodmFyIHQ9dGhpcy5kZXBzLmxlbmd0aDt0LS07KWUuZGVwc1t0XS5yZW1vdmVTdWIoZSk7dGhpcy5hY3RpdmU9ITF9fTt2YXIgVGk9bmV3IEZyLGppPXtlbnVtZXJhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMCxnZXQ6cCxzZXQ6cH0sRWk9ZnVuY3Rpb24oZSx0LG4scixpLG8sYSxzKXt0aGlzLnRhZz1lLHRoaXMuZGF0YT10LHRoaXMuY2hpbGRyZW49bix0aGlzLnRleHQ9cix0aGlzLmVsbT1pLHRoaXMubnM9byx0aGlzLmNvbnRleHQ9YSx0aGlzLmZ1bmN0aW9uYWxDb250ZXh0PXZvaWQgMCx0aGlzLmtleT10JiZ0LmtleSx0aGlzLmNvbXBvbmVudE9wdGlvbnM9cyx0aGlzLmNoaWxkPXZvaWQgMCx0aGlzLnBhcmVudD12b2lkIDAsdGhpcy5yYXc9ITEsdGhpcy5pc1N0YXRpYz0hMSx0aGlzLmlzUm9vdEluc2VydD0hMCx0aGlzLmlzQ29tbWVudD0hMSx0aGlzLmlzQ2xvbmVkPSExLHRoaXMuaXNPbmNlPSExfSxOaT1mdW5jdGlvbigpe3ZhciBlPW5ldyBFaTtyZXR1cm4gZS50ZXh0PVwiXCIsZS5pc0NvbW1lbnQ9ITAsZX0sTGk9bnVsbCxEaT17aW5pdDp5ZSxwcmVwYXRjaDpfZSxpbnNlcnQ6YmUsZGVzdHJveTokZX0sTWk9T2JqZWN0LmtleXMoRGkpLFBpPTA7RGUoUmUpLGVlKFJlKSxMZShSZSkscGUoUmUpLGplKFJlKTt2YXIgUmk9W1N0cmluZyxSZWdFeHBdLElpPXtuYW1lOlwia2VlcC1hbGl2ZVwiLGFic3RyYWN0OiEwLHByb3BzOntpbmNsdWRlOlJpLGV4Y2x1ZGU6Uml9LGNyZWF0ZWQ6ZnVuY3Rpb24oKXt0aGlzLmNhY2hlPU9iamVjdC5jcmVhdGUobnVsbCl9LHJlbmRlcjpmdW5jdGlvbigpe3ZhciBlPWZlKHRoaXMuJHNsb3RzLmRlZmF1bHQpO2lmKGUmJmUuY29tcG9uZW50T3B0aW9ucyl7dmFyIHQ9ZS5jb21wb25lbnRPcHRpb25zLG49dC5DdG9yLm9wdGlvbnMubmFtZXx8dC50YWc7aWYobiYmKHRoaXMuaW5jbHVkZSYmIUhlKHRoaXMuaW5jbHVkZSxuKXx8dGhpcy5leGNsdWRlJiZIZSh0aGlzLmV4Y2x1ZGUsbikpKXJldHVybiBlO3ZhciByPW51bGw9PWUua2V5P3QuQ3Rvci5jaWQrKHQudGFnP1wiOjpcIit0LnRhZzpcIlwiKTplLmtleTt0aGlzLmNhY2hlW3JdP2UuY2hpbGQ9dGhpcy5jYWNoZVtyXS5jaGlsZDp0aGlzLmNhY2hlW3JdPWUsZS5kYXRhLmtlZXBBbGl2ZT0hMH1yZXR1cm4gZX0sZGVzdHJveWVkOmZ1bmN0aW9uKCl7dmFyIGU9dGhpcztmb3IodmFyIHQgaW4gdGhpcy5jYWNoZSl7dmFyIG49ZS5jYWNoZVt0XTt2ZShuLmNoaWxkLFwiZGVhY3RpdmF0ZWRcIiksbi5jaGlsZC4kZGVzdHJveSgpfX19LEZpPXtLZWVwQWxpdmU6SWl9O1ZlKFJlKSxPYmplY3QuZGVmaW5lUHJvcGVydHkoUmUucHJvdG90eXBlLFwiJGlzU2VydmVyXCIse2dldDpvaX0pLFJlLnZlcnNpb249XCIyLjEuMFwiO3ZhciBCaSxVaT1mdW5jdGlvbihlLHQpe3JldHVyblwidmFsdWVcIj09PXQmJihcImlucHV0XCI9PT1lfHxcInRleHRhcmVhXCI9PT1lfHxcIm9wdGlvblwiPT09ZSl8fFwic2VsZWN0ZWRcIj09PXQmJlwib3B0aW9uXCI9PT1lfHxcImNoZWNrZWRcIj09PXQmJlwiaW5wdXRcIj09PWV8fFwibXV0ZWRcIj09PXQmJlwidmlkZW9cIj09PWV9LEhpPW4oXCJjb250ZW50ZWRpdGFibGUsZHJhZ2dhYmxlLHNwZWxsY2hlY2tcIiksVmk9bihcImFsbG93ZnVsbHNjcmVlbixhc3luYyxhdXRvZm9jdXMsYXV0b3BsYXksY2hlY2tlZCxjb21wYWN0LGNvbnRyb2xzLGRlY2xhcmUsZGVmYXVsdCxkZWZhdWx0Y2hlY2tlZCxkZWZhdWx0bXV0ZWQsZGVmYXVsdHNlbGVjdGVkLGRlZmVyLGRpc2FibGVkLGVuYWJsZWQsZm9ybW5vdmFsaWRhdGUsaGlkZGVuLGluZGV0ZXJtaW5hdGUsaW5lcnQsaXNtYXAsaXRlbXNjb3BlLGxvb3AsbXVsdGlwbGUsbXV0ZWQsbm9ocmVmLG5vcmVzaXplLG5vc2hhZGUsbm92YWxpZGF0ZSxub3dyYXAsb3BlbixwYXVzZW9uZXhpdCxyZWFkb25seSxyZXF1aXJlZCxyZXZlcnNlZCxzY29wZWQsc2VhbWxlc3Msc2VsZWN0ZWQsc29ydGFibGUsdHJhbnNsYXRlLHRydWVzcGVlZCx0eXBlbXVzdG1hdGNoLHZpc2libGVcIiksemk9XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCIsSmk9ZnVuY3Rpb24oZSl7cmV0dXJuXCI6XCI9PT1lLmNoYXJBdCg1KSYmXCJ4bGlua1wiPT09ZS5zbGljZSgwLDUpfSxLaT1mdW5jdGlvbihlKXtyZXR1cm4gSmkoZSk/ZS5zbGljZSg2LGUubGVuZ3RoKTpcIlwifSxxaT1mdW5jdGlvbihlKXtyZXR1cm4gbnVsbD09ZXx8ZT09PSExfSxXaT17c3ZnOlwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIixtYXRoOlwiaHR0cDovL3d3dy53My5vcmcvMTk5OC9NYXRoL01hdGhNTFwiLHhodG1sOlwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94aHRtbFwifSxaaT1uKFwiaHRtbCxib2R5LGJhc2UsaGVhZCxsaW5rLG1ldGEsc3R5bGUsdGl0bGUsYWRkcmVzcyxhcnRpY2xlLGFzaWRlLGZvb3RlcixoZWFkZXIsaDEsaDIsaDMsaDQsaDUsaDYsaGdyb3VwLG5hdixzZWN0aW9uLGRpdixkZCxkbCxkdCxmaWdjYXB0aW9uLGZpZ3VyZSxocixpbWcsbGksbWFpbixvbCxwLHByZSx1bCxhLGIsYWJicixiZGksYmRvLGJyLGNpdGUsY29kZSxkYXRhLGRmbixlbSxpLGtiZCxtYXJrLHEscnAscnQscnRjLHJ1YnkscyxzYW1wLHNtYWxsLHNwYW4sc3Ryb25nLHN1YixzdXAsdGltZSx1LHZhcix3YnIsYXJlYSxhdWRpbyxtYXAsdHJhY2ssdmlkZW8sZW1iZWQsb2JqZWN0LHBhcmFtLHNvdXJjZSxjYW52YXMsc2NyaXB0LG5vc2NyaXB0LGRlbCxpbnMsY2FwdGlvbixjb2wsY29sZ3JvdXAsdGFibGUsdGhlYWQsdGJvZHksdGQsdGgsdHIsYnV0dG9uLGRhdGFsaXN0LGZpZWxkc2V0LGZvcm0saW5wdXQsbGFiZWwsbGVnZW5kLG1ldGVyLG9wdGdyb3VwLG9wdGlvbixvdXRwdXQscHJvZ3Jlc3Msc2VsZWN0LHRleHRhcmVhLGRldGFpbHMsZGlhbG9nLG1lbnUsbWVudWl0ZW0sc3VtbWFyeSxjb250ZW50LGVsZW1lbnQsc2hhZG93LHRlbXBsYXRlXCIpLEdpPW4oXCJhcmVhLGJhc2UsYnIsY29sLGVtYmVkLGZyYW1lLGhyLGltZyxpbnB1dCxpc2luZGV4LGtleWdlbixsaW5rLG1ldGEscGFyYW0sc291cmNlLHRyYWNrLHdiclwiLCEwKSxZaT1uKFwiY29sZ3JvdXAsZGQsZHQsbGksb3B0aW9ucyxwLHRkLHRmb290LHRoLHRoZWFkLHRyLHNvdXJjZVwiLCEwKSxRaT1uKFwiYWRkcmVzcyxhcnRpY2xlLGFzaWRlLGJhc2UsYmxvY2txdW90ZSxib2R5LGNhcHRpb24sY29sLGNvbGdyb3VwLGRkLGRldGFpbHMsZGlhbG9nLGRpdixkbCxkdCxmaWVsZHNldCxmaWdjYXB0aW9uLGZpZ3VyZSxmb290ZXIsZm9ybSxoMSxoMixoMyxoNCxoNSxoNixoZWFkLGhlYWRlcixoZ3JvdXAsaHIsaHRtbCxsZWdlbmQsbGksbWVudWl0ZW0sbWV0YSxvcHRncm91cCxvcHRpb24scGFyYW0scnAscnQsc291cmNlLHN0eWxlLHN1bW1hcnksdGJvZHksdGQsdGZvb3QsdGgsdGhlYWQsdGl0bGUsdHIsdHJhY2tcIiwhMCksWGk9bihcInN2ZyxhbmltYXRlLGNpcmNsZSxjbGlwcGF0aCxjdXJzb3IsZGVmcyxkZXNjLGVsbGlwc2UsZmlsdGVyLGZvbnQsZm9udC1mYWNlLGcsZ2x5cGgsaW1hZ2UsbGluZSxtYXJrZXIsbWFzayxtaXNzaW5nLWdseXBoLHBhdGgscGF0dGVybixwb2x5Z29uLHBvbHlsaW5lLHJlY3Qsc3dpdGNoLHN5bWJvbCx0ZXh0LHRleHRwYXRoLHRzcGFuLHVzZSx2aWV3XCIsITApLGVvPWZ1bmN0aW9uKGUpe3JldHVyblwicHJlXCI9PT1lfSx0bz1mdW5jdGlvbihlKXtyZXR1cm4gWmkoZSl8fFhpKGUpfSxubz1PYmplY3QuY3JlYXRlKG51bGwpLHJvPU9iamVjdC5mcmVlemUoe2NyZWF0ZUVsZW1lbnQ6UWUsY3JlYXRlRWxlbWVudE5TOlhlLGNyZWF0ZVRleHROb2RlOmV0LGNyZWF0ZUNvbW1lbnQ6dHQsaW5zZXJ0QmVmb3JlOm50LHJlbW92ZUNoaWxkOnJ0LGFwcGVuZENoaWxkOml0LHBhcmVudE5vZGU6b3QsbmV4dFNpYmxpbmc6YXQsdGFnTmFtZTpzdCxzZXRUZXh0Q29udGVudDpjdCxjaGlsZE5vZGVzOmx0LHNldEF0dHJpYnV0ZTp1dH0pLGlvPXtjcmVhdGU6ZnVuY3Rpb24oZSx0KXtmdCh0KX0sdXBkYXRlOmZ1bmN0aW9uKGUsdCl7ZS5kYXRhLnJlZiE9PXQuZGF0YS5yZWYmJihmdChlLCEwKSxmdCh0KSl9LGRlc3Ryb3k6ZnVuY3Rpb24oZSl7ZnQoZSwhMCl9fSxvbz1uZXcgRWkoXCJcIix7fSxbXSksYW89W1wiY3JlYXRlXCIsXCJ1cGRhdGVcIixcInJlbW92ZVwiLFwiZGVzdHJveVwiXSxzbz17Y3JlYXRlOmd0LHVwZGF0ZTpndCxkZXN0cm95OmZ1bmN0aW9uKGUpe2d0KGUsb28pfX0sY289T2JqZWN0LmNyZWF0ZShudWxsKSxsbz1baW8sc29dLHVvPXtjcmVhdGU6JHQsdXBkYXRlOiR0fSxmbz17Y3JlYXRlOnh0LHVwZGF0ZTp4dH0scG89e2NyZWF0ZTpDdCx1cGRhdGU6Q3R9LHZvPXtjcmVhdGU6a3QsdXBkYXRlOmt0fSxobz1hKGZ1bmN0aW9uKGUpe3ZhciB0PXt9LG49ZS5pbmRleE9mKFwiYmFja2dyb3VuZFwiKT49MCxyPW4/LzsoPyFbXihdKlxcKSkvZzpcIjtcIixpPW4/LzooLispLzpcIjpcIjtyZXR1cm4gZS5zcGxpdChyKS5mb3JFYWNoKGZ1bmN0aW9uKGUpe2lmKGUpe3ZhciBuPWUuc3BsaXQoaSk7bi5sZW5ndGg+MSYmKHRbblswXS50cmltKCldPW5bMV0udHJpbSgpKX19KSx0fSksbW89L14tLS8sZ289ZnVuY3Rpb24oZSx0LG4pe21vLnRlc3QodCk/ZS5zdHlsZS5zZXRQcm9wZXJ0eSh0LG4pOmUuc3R5bGVbX28odCldPW59LHlvPVtcIldlYmtpdFwiLFwiTW96XCIsXCJtc1wiXSxfbz1hKGZ1bmN0aW9uKGUpe2lmKEJpPUJpfHxkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLGU9VnIoZSksXCJmaWx0ZXJcIiE9PWUmJmUgaW4gQmkuc3R5bGUpcmV0dXJuIGU7Zm9yKHZhciB0PWUuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkrZS5zbGljZSgxKSxuPTA7bjx5by5sZW5ndGg7bisrKXt2YXIgcj15b1tuXSt0O2lmKHIgaW4gQmkuc3R5bGUpcmV0dXJuIHJ9fSksYm89e2NyZWF0ZTpUdCx1cGRhdGU6VHR9LCRvPVFyJiYhdGksd289XCJ0cmFuc2l0aW9uXCIseG89XCJhbmltYXRpb25cIixDbz1cInRyYW5zaXRpb25cIixrbz1cInRyYW5zaXRpb25lbmRcIixBbz1cImFuaW1hdGlvblwiLE9vPVwiYW5pbWF0aW9uZW5kXCI7JG8mJih2b2lkIDA9PT13aW5kb3cub250cmFuc2l0aW9uZW5kJiZ2b2lkIDAhPT13aW5kb3cub253ZWJraXR0cmFuc2l0aW9uZW5kJiYoQ289XCJXZWJraXRUcmFuc2l0aW9uXCIsa289XCJ3ZWJraXRUcmFuc2l0aW9uRW5kXCIpLHZvaWQgMD09PXdpbmRvdy5vbmFuaW1hdGlvbmVuZCYmdm9pZCAwIT09d2luZG93Lm9ud2Via2l0YW5pbWF0aW9uZW5kJiYoQW89XCJXZWJraXRBbmltYXRpb25cIixPbz1cIndlYmtpdEFuaW1hdGlvbkVuZFwiKSk7dmFyIFNvPVFyJiZ3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lfHxzZXRUaW1lb3V0LFRvPS9cXGIodHJhbnNmb3JtfGFsbCkoLHwkKS8sam89YShmdW5jdGlvbihlKXtyZXR1cm57ZW50ZXJDbGFzczplK1wiLWVudGVyXCIsbGVhdmVDbGFzczplK1wiLWxlYXZlXCIsYXBwZWFyQ2xhc3M6ZStcIi1lbnRlclwiLGVudGVyQWN0aXZlQ2xhc3M6ZStcIi1lbnRlci1hY3RpdmVcIixsZWF2ZUFjdGl2ZUNsYXNzOmUrXCItbGVhdmUtYWN0aXZlXCIsYXBwZWFyQWN0aXZlQ2xhc3M6ZStcIi1lbnRlci1hY3RpdmVcIn19KSxFbz1Rcj97Y3JlYXRlOmZ1bmN0aW9uKGUsdCl7dC5kYXRhLnNob3d8fEZ0KHQpfSxyZW1vdmU6ZnVuY3Rpb24oZSx0KXtlLmRhdGEuc2hvdz90KCk6QnQoZSx0KX19Ont9LE5vPVt1byxmbyxwbyx2byxibyxFb10sTG89Tm8uY29uY2F0KGxvKSxEbz1tdCh7bm9kZU9wczpybyxtb2R1bGVzOkxvfSk7dGkmJmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJzZWxlY3Rpb25jaGFuZ2VcIixmdW5jdGlvbigpe3ZhciBlPWRvY3VtZW50LmFjdGl2ZUVsZW1lbnQ7ZSYmZS52bW9kZWwmJld0KGUsXCJpbnB1dFwiKX0pO3ZhciBNbz17aW5zZXJ0ZWQ6ZnVuY3Rpb24oZSx0LG4pe2lmKFwic2VsZWN0XCI9PT1uLnRhZyl7dmFyIHI9ZnVuY3Rpb24oKXtWdChlLHQsbi5jb250ZXh0KX07cigpLChlaXx8bmkpJiZzZXRUaW1lb3V0KHIsMCl9ZWxzZVwidGV4dGFyZWFcIiE9PW4udGFnJiZcInRleHRcIiE9PWUudHlwZXx8dC5tb2RpZmllcnMubGF6eXx8KHJpfHwoZS5hZGRFdmVudExpc3RlbmVyKFwiY29tcG9zaXRpb25zdGFydFwiLEt0KSxlLmFkZEV2ZW50TGlzdGVuZXIoXCJjb21wb3NpdGlvbmVuZFwiLHF0KSksdGkmJihlLnZtb2RlbD0hMCkpfSxjb21wb25lbnRVcGRhdGVkOmZ1bmN0aW9uKGUsdCxuKXtpZihcInNlbGVjdFwiPT09bi50YWcpe1Z0KGUsdCxuLmNvbnRleHQpO3ZhciByPWUubXVsdGlwbGU/dC52YWx1ZS5zb21lKGZ1bmN0aW9uKHQpe3JldHVybiB6dCh0LGUub3B0aW9ucyl9KTp0LnZhbHVlIT09dC5vbGRWYWx1ZSYmenQodC52YWx1ZSxlLm9wdGlvbnMpO3ImJld0KGUsXCJjaGFuZ2VcIil9fX0sUG89e2JpbmQ6ZnVuY3Rpb24oZSx0LG4pe3ZhciByPXQudmFsdWU7bj1adChuKTt2YXIgaT1uLmRhdGEmJm4uZGF0YS50cmFuc2l0aW9uO3ImJmkmJiF0aSYmRnQobik7dmFyIG89XCJub25lXCI9PT1lLnN0eWxlLmRpc3BsYXk/XCJcIjplLnN0eWxlLmRpc3BsYXk7ZS5zdHlsZS5kaXNwbGF5PXI/bzpcIm5vbmVcIixlLl9fdk9yaWdpbmFsRGlzcGxheT1vfSx1cGRhdGU6ZnVuY3Rpb24oZSx0LG4pe3ZhciByPXQudmFsdWUsaT10Lm9sZFZhbHVlO2lmKHIhPT1pKXtuPVp0KG4pO3ZhciBvPW4uZGF0YSYmbi5kYXRhLnRyYW5zaXRpb247byYmIXRpP3I/KEZ0KG4pLGUuc3R5bGUuZGlzcGxheT1lLl9fdk9yaWdpbmFsRGlzcGxheSk6QnQobixmdW5jdGlvbigpe2Uuc3R5bGUuZGlzcGxheT1cIm5vbmVcIn0pOmUuc3R5bGUuZGlzcGxheT1yP2UuX192T3JpZ2luYWxEaXNwbGF5Olwibm9uZVwifX19LFJvPXttb2RlbDpNbyxzaG93OlBvfSxJbz17bmFtZTpTdHJpbmcsYXBwZWFyOkJvb2xlYW4sY3NzOkJvb2xlYW4sbW9kZTpTdHJpbmcsdHlwZTpTdHJpbmcsZW50ZXJDbGFzczpTdHJpbmcsbGVhdmVDbGFzczpTdHJpbmcsZW50ZXJBY3RpdmVDbGFzczpTdHJpbmcsbGVhdmVBY3RpdmVDbGFzczpTdHJpbmcsYXBwZWFyQ2xhc3M6U3RyaW5nLGFwcGVhckFjdGl2ZUNsYXNzOlN0cmluZ30sRm89e25hbWU6XCJ0cmFuc2l0aW9uXCIscHJvcHM6SW8sYWJzdHJhY3Q6ITAsXG5yZW5kZXI6ZnVuY3Rpb24oZSl7dmFyIHQ9dGhpcyxuPXRoaXMuJHNsb3RzLmRlZmF1bHQ7aWYobiYmKG49bi5maWx0ZXIoZnVuY3Rpb24oZSl7cmV0dXJuIGUudGFnfSksbi5sZW5ndGgpKXt2YXIgcj10aGlzLm1vZGUsaT1uWzBdO2lmKFh0KHRoaXMuJHZub2RlKSlyZXR1cm4gaTt2YXIgbz1HdChpKTtpZighbylyZXR1cm4gaTtpZih0aGlzLl9sZWF2aW5nKXJldHVybiBRdChlLGkpO3ZhciBhPW8ua2V5PW51bGw9PW8ua2V5fHxvLmlzU3RhdGljP1wiX192XCIrKG8udGFnK3RoaXMuX3VpZCkrXCJfX1wiOm8ua2V5LHM9KG8uZGF0YXx8KG8uZGF0YT17fSkpLnRyYW5zaXRpb249WXQodGhpcyksYz10aGlzLl92bm9kZSx1PUd0KGMpO2lmKG8uZGF0YS5kaXJlY3RpdmVzJiZvLmRhdGEuZGlyZWN0aXZlcy5zb21lKGZ1bmN0aW9uKGUpe3JldHVyblwic2hvd1wiPT09ZS5uYW1lfSkmJihvLmRhdGEuc2hvdz0hMCksdSYmdS5kYXRhJiZ1LmtleSE9PWEpe3ZhciBmPXUuZGF0YS50cmFuc2l0aW9uPWwoe30scyk7aWYoXCJvdXQtaW5cIj09PXIpcmV0dXJuIHRoaXMuX2xlYXZpbmc9ITAsaWUoZixcImFmdGVyTGVhdmVcIixmdW5jdGlvbigpe3QuX2xlYXZpbmc9ITEsdC4kZm9yY2VVcGRhdGUoKX0sYSksUXQoZSxpKTtpZihcImluLW91dFwiPT09cil7dmFyIGQscD1mdW5jdGlvbigpe2QoKX07aWUocyxcImFmdGVyRW50ZXJcIixwLGEpLGllKHMsXCJlbnRlckNhbmNlbGxlZFwiLHAsYSksaWUoZixcImRlbGF5TGVhdmVcIixmdW5jdGlvbihlKXtkPWV9LGEpfX1yZXR1cm4gaX19fSxCbz1sKHt0YWc6U3RyaW5nLG1vdmVDbGFzczpTdHJpbmd9LElvKTtkZWxldGUgQm8ubW9kZTt2YXIgVW89e3Byb3BzOkJvLHJlbmRlcjpmdW5jdGlvbihlKXtmb3IodmFyIHQ9dGhpcy50YWd8fHRoaXMuJHZub2RlLmRhdGEudGFnfHxcInNwYW5cIixuPU9iamVjdC5jcmVhdGUobnVsbCkscj10aGlzLnByZXZDaGlsZHJlbj10aGlzLmNoaWxkcmVuLGk9dGhpcy4kc2xvdHMuZGVmYXVsdHx8W10sbz10aGlzLmNoaWxkcmVuPVtdLGE9WXQodGhpcykscz0wO3M8aS5sZW5ndGg7cysrKXt2YXIgYz1pW3NdO2MudGFnJiZudWxsIT1jLmtleSYmMCE9PVN0cmluZyhjLmtleSkuaW5kZXhPZihcIl9fdmxpc3RcIikmJihvLnB1c2goYyksbltjLmtleV09YywoYy5kYXRhfHwoYy5kYXRhPXt9KSkudHJhbnNpdGlvbj1hKX1pZihyKXtmb3IodmFyIGw9W10sdT1bXSxmPTA7ZjxyLmxlbmd0aDtmKyspe3ZhciBkPXJbZl07ZC5kYXRhLnRyYW5zaXRpb249YSxkLmRhdGEucG9zPWQuZWxtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLG5bZC5rZXldP2wucHVzaChkKTp1LnB1c2goZCl9dGhpcy5rZXB0PWUodCxudWxsLGwpLHRoaXMucmVtb3ZlZD11fXJldHVybiBlKHQsbnVsbCxvKX0sYmVmb3JlVXBkYXRlOmZ1bmN0aW9uKCl7dGhpcy5fX3BhdGNoX18odGhpcy5fdm5vZGUsdGhpcy5rZXB0LCExLCEwKSx0aGlzLl92bm9kZT10aGlzLmtlcHR9LHVwZGF0ZWQ6ZnVuY3Rpb24oKXt2YXIgZT10aGlzLnByZXZDaGlsZHJlbix0PXRoaXMubW92ZUNsYXNzfHwodGhpcy5uYW1lfHxcInZcIikrXCItbW92ZVwiO2lmKGUubGVuZ3RoJiZ0aGlzLmhhc01vdmUoZVswXS5lbG0sdCkpe2UuZm9yRWFjaChlbiksZS5mb3JFYWNoKHRuKSxlLmZvckVhY2gobm4pO2RvY3VtZW50LmJvZHkub2Zmc2V0SGVpZ2h0O2UuZm9yRWFjaChmdW5jdGlvbihlKXtpZihlLmRhdGEubW92ZWQpe3ZhciBuPWUuZWxtLHI9bi5zdHlsZTtMdChuLHQpLHIudHJhbnNmb3JtPXIuV2Via2l0VHJhbnNmb3JtPXIudHJhbnNpdGlvbkR1cmF0aW9uPVwiXCIsbi5hZGRFdmVudExpc3RlbmVyKGtvLG4uX21vdmVDYj1mdW5jdGlvbiBlKHIpe3ImJiEvdHJhbnNmb3JtJC8udGVzdChyLnByb3BlcnR5TmFtZSl8fChuLnJlbW92ZUV2ZW50TGlzdGVuZXIoa28sZSksbi5fbW92ZUNiPW51bGwsRHQobix0KSl9KX19KX19LG1ldGhvZHM6e2hhc01vdmU6ZnVuY3Rpb24oZSx0KXtpZighJG8pcmV0dXJuITE7aWYobnVsbCE9dGhpcy5faGFzTW92ZSlyZXR1cm4gdGhpcy5faGFzTW92ZTtMdChlLHQpO3ZhciBuPVB0KGUpO3JldHVybiBEdChlLHQpLHRoaXMuX2hhc01vdmU9bi5oYXNUcmFuc2Zvcm19fX0sSG89e1RyYW5zaXRpb246Rm8sVHJhbnNpdGlvbkdyb3VwOlVvfTtSZS5jb25maWcuaXNVbmtub3duRWxlbWVudD1HZSxSZS5jb25maWcuaXNSZXNlcnZlZFRhZz10byxSZS5jb25maWcuZ2V0VGFnTmFtZXNwYWNlPVplLFJlLmNvbmZpZy5tdXN0VXNlUHJvcD1VaSxsKFJlLm9wdGlvbnMuZGlyZWN0aXZlcyxSbyksbChSZS5vcHRpb25zLmNvbXBvbmVudHMsSG8pLFJlLnByb3RvdHlwZS5fX3BhdGNoX189UXI/RG86cCxSZS5wcm90b3R5cGUuJG1vdW50PWZ1bmN0aW9uKGUsdCl7cmV0dXJuIGU9ZSYmUXI/WWUoZSk6dm9pZCAwLHRoaXMuX21vdW50KGUsdCl9LHNldFRpbWVvdXQoZnVuY3Rpb24oKXtsaS5kZXZ0b29scyYmYWkmJmFpLmVtaXQoXCJpbml0XCIsUmUpfSwwKTt2YXIgVm8sem89ISFRciYmcm4oXCJcXG5cIixcIiYjMTA7XCIpLEpvPS8oW15cXHNcIic8PlxcLz1dKykvLEtvPS8oPzo9KS8scW89Wy9cIihbXlwiXSopXCIrLy5zb3VyY2UsLycoW14nXSopJysvLnNvdXJjZSwvKFteXFxzXCInPTw+YF0rKS8uc291cmNlXSxXbz1uZXcgUmVnRXhwKFwiXlxcXFxzKlwiK0pvLnNvdXJjZStcIig/OlxcXFxzKihcIitLby5zb3VyY2UrXCIpXFxcXHMqKD86XCIrcW8uam9pbihcInxcIikrXCIpKT9cIiksWm89XCJbYS16QS1aX11bXFxcXHdcXFxcLVxcXFwuXSpcIixHbz1cIigoPzpcIitabytcIlxcXFw6KT9cIitabytcIilcIixZbz1uZXcgUmVnRXhwKFwiXjxcIitHbyksUW89L15cXHMqKFxcLz8pPi8sWG89bmV3IFJlZ0V4cChcIl48XFxcXC9cIitHbytcIltePl0qPlwiKSxlYT0vXjwhRE9DVFlQRSBbXj5dKz4vaSx0YT0vXjwhLS0vLG5hPS9ePCFcXFsvLHJhPSExO1wieFwiLnJlcGxhY2UoL3goLik/L2csZnVuY3Rpb24oZSx0KXtyYT1cIlwiPT09dH0pO3ZhciBpYSxvYSxhYSxzYSxjYSxsYSx1YSxmYSxkYSxwYSx2YSxoYSxtYSxnYSx5YSxfYSxiYSwkYSx3YSx4YSxDYSxrYSxBYSxPYSxTYT1uKFwic2NyaXB0LHN0eWxlXCIsITApLFRhPWZ1bmN0aW9uKGUpe3JldHVyblwibGFuZ1wiPT09ZS5uYW1lJiZcImh0bWxcIiE9PWUudmFsdWV9LGphPWZ1bmN0aW9uKGUsdCxuKXtyZXR1cm4hIVNhKGUpfHwhIXQmJiEoXCJ0ZW1wbGF0ZVwiPT09ZSYmMT09PW4ubGVuZ3RoJiYhblswXS5hdHRycy5zb21lKFRhKSl9LEVhPXt9LE5hPS8mbHQ7L2csTGE9LyZndDsvZyxEYT0vJiMxMDsvZyxNYT0vJmFtcDsvZyxQYT0vJnF1b3Q7L2csUmE9L1xce1xceygoPzoufFxcbikrPylcXH1cXH0vZyxJYT0vWy0uKis/XiR7fSgpfFtcXF1cXC9cXFxcXS9nLEZhPWEoZnVuY3Rpb24oZSl7dmFyIHQ9ZVswXS5yZXBsYWNlKElhLFwiXFxcXCQmXCIpLG49ZVsxXS5yZXBsYWNlKElhLFwiXFxcXCQmXCIpO3JldHVybiBuZXcgUmVnRXhwKHQrXCIoKD86LnxcXFxcbikrPylcIituLFwiZ1wiKX0pLEJhPS9edi18XkB8XjovLFVhPS8oLio/KVxccysoPzppbnxvZilcXHMrKC4qKS8sSGE9L1xcKChcXHtbXn1dKlxcfXxbXixdKiksKFteLF0qKSg/OiwoW14sXSopKT9cXCkvLFZhPS9eOnxedi1iaW5kOi8semE9L15AfF52LW9uOi8sSmE9LzooLiopJC8sS2E9L1xcLlteLl0rL2cscWE9YShvbiksV2E9L154bWxuczpOU1xcZCsvLFphPS9eTlNcXGQrOi8sR2E9YShKbiksWWE9L15cXHMqKFtcXHckX10rfFxcKFteKV0qP1xcKSlcXHMqPT58XmZ1bmN0aW9uXFxzKlxcKC8sUWE9L15cXHMqW0EtWmEtel8kXVtcXHckXSooPzpcXC5bQS1aYS16XyRdW1xcdyRdKnxcXFsnLio/J118XFxbXCIuKj9cIl18XFxbXFxkK118XFxbW0EtWmEtel8kXVtcXHckXSpdKSpcXHMqJC8sWGE9e2VzYzoyNyx0YWI6OSxlbnRlcjoxMyxzcGFjZTozMix1cDozOCxsZWZ0OjM3LHJpZ2h0OjM5LGRvd246NDAsZGVsZXRlOls4LDQ2XX0sZXM9e3N0b3A6XCIkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XCIscHJldmVudDpcIiRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1wiLHNlbGY6XCJpZigkZXZlbnQudGFyZ2V0ICE9PSAkZXZlbnQuY3VycmVudFRhcmdldClyZXR1cm47XCJ9LHRzPS9ebW91c2V8XnBvaW50ZXJ8XihjbGlja3xkYmxjbGlja3xjb250ZXh0bWVudXx3aGVlbCkkLyxucz17Y3RybDpcImlmKCEkZXZlbnQuY3RybEtleSlyZXR1cm47XCIsc2hpZnQ6XCJpZighJGV2ZW50LnNoaWZ0S2V5KXJldHVybjtcIixhbHQ6XCJpZighJGV2ZW50LmFsdEtleSlyZXR1cm47XCIsbWV0YTpcImlmKCEkZXZlbnQubWV0YUtleSlyZXR1cm47XCJ9LHJzPXtiaW5kOnRyLGNsb2FrOnB9LGlzPShuZXcgUmVnRXhwKFwiXFxcXGJcIitcImRvLGlmLGZvcixsZXQsbmV3LHRyeSx2YXIsY2FzZSxlbHNlLHdpdGgsYXdhaXQsYnJlYWssY2F0Y2gsY2xhc3MsY29uc3Qsc3VwZXIsdGhyb3csd2hpbGUseWllbGQsZGVsZXRlLGV4cG9ydCxpbXBvcnQscmV0dXJuLHN3aXRjaCxkZWZhdWx0LGV4dGVuZHMsZmluYWxseSxjb250aW51ZSxkZWJ1Z2dlcixmdW5jdGlvbixhcmd1bWVudHNcIi5zcGxpdChcIixcIikuam9pbihcIlxcXFxifFxcXFxiXCIpK1wiXFxcXGJcIikse3N0YXRpY0tleXM6W1wic3RhdGljQ2xhc3NcIl0sdHJhbnNmb3JtTm9kZTp3cixnZW5EYXRhOnhyfSksb3M9e3N0YXRpY0tleXM6W1wic3RhdGljU3R5bGVcIl0sdHJhbnNmb3JtTm9kZTpDcixnZW5EYXRhOmtyfSxhcz1baXMsb3NdLHNzPXttb2RlbDpBcix0ZXh0Ok5yLGh0bWw6THJ9LGNzPU9iamVjdC5jcmVhdGUobnVsbCksbHM9e2V4cGVjdEhUTUw6ITAsbW9kdWxlczphcyxzdGF0aWNLZXlzOnYoYXMpLGRpcmVjdGl2ZXM6c3MsaXNSZXNlcnZlZFRhZzp0byxpc1VuYXJ5VGFnOkdpLG11c3RVc2VQcm9wOlVpLGdldFRhZ05hbWVzcGFjZTpaZSxpc1ByZVRhZzplb30sdXM9YShmdW5jdGlvbihlKXt2YXIgdD1ZZShlKTtyZXR1cm4gdCYmdC5pbm5lckhUTUx9KSxmcz1SZS5wcm90b3R5cGUuJG1vdW50O3JldHVybiBSZS5wcm90b3R5cGUuJG1vdW50PWZ1bmN0aW9uKGUsdCl7aWYoZT1lJiZZZShlKSxlPT09ZG9jdW1lbnQuYm9keXx8ZT09PWRvY3VtZW50LmRvY3VtZW50RWxlbWVudClyZXR1cm4gdGhpczt2YXIgbj10aGlzLiRvcHRpb25zO2lmKCFuLnJlbmRlcil7dmFyIHI9bi50ZW1wbGF0ZTtpZihyKWlmKFwic3RyaW5nXCI9PXR5cGVvZiByKVwiI1wiPT09ci5jaGFyQXQoMCkmJihyPXVzKHIpKTtlbHNle2lmKCFyLm5vZGVUeXBlKXJldHVybiB0aGlzO3I9ci5pbm5lckhUTUx9ZWxzZSBlJiYocj1ScihlKSk7aWYocil7dmFyIGk9TXIocix7d2Fybjp1aSxzaG91bGREZWNvZGVOZXdsaW5lczp6byxkZWxpbWl0ZXJzOm4uZGVsaW1pdGVyc30sdGhpcyksbz1pLnJlbmRlcixhPWkuc3RhdGljUmVuZGVyRm5zO24ucmVuZGVyPW8sbi5zdGF0aWNSZW5kZXJGbnM9YX19cmV0dXJuIGZzLmNhbGwodGhpcyxlLHQpfSxSZS5jb21waWxlPU1yLFJlfSk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vRTovVGVzdFdvcmsvdnVlL34vdnVlL2Rpc3QvdnVlLm1pbi5qcyIsIi8qKlxuICogdnVlLXJvdXRlciB2Mi4wLjNcbiAqIChjKSAyMDE2IEV2YW4gWW91XG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuKGZ1bmN0aW9uIChnbG9iYWwsIGZhY3RvcnkpIHtcbiAgdHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnID8gbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCkgOlxuICB0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQgPyBkZWZpbmUoZmFjdG9yeSkgOlxuICAoZ2xvYmFsLlZ1ZVJvdXRlciA9IGZhY3RvcnkoKSk7XG59KHRoaXMsIChmdW5jdGlvbiAoKSB7ICd1c2Ugc3RyaWN0JztcblxudmFyIFZpZXcgPSB7XG4gIG5hbWU6ICdyb3V0ZXItdmlldycsXG4gIGZ1bmN0aW9uYWw6IHRydWUsXG4gIHByb3BzOiB7XG4gICAgbmFtZToge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdDogJ2RlZmF1bHQnXG4gICAgfVxuICB9LFxuICByZW5kZXI6IGZ1bmN0aW9uIHJlbmRlciAoaCwgcmVmKSB7XG4gICAgdmFyIHByb3BzID0gcmVmLnByb3BzO1xuICAgIHZhciBjaGlsZHJlbiA9IHJlZi5jaGlsZHJlbjtcbiAgICB2YXIgcGFyZW50ID0gcmVmLnBhcmVudDtcbiAgICB2YXIgZGF0YSA9IHJlZi5kYXRhO1xuXG4gICAgZGF0YS5yb3V0ZXJWaWV3ID0gdHJ1ZVxuXG4gICAgdmFyIHJvdXRlID0gcGFyZW50LiRyb3V0ZVxuICAgIHZhciBjYWNoZSA9IHBhcmVudC5fcm91dGVyVmlld0NhY2hlIHx8IChwYXJlbnQuX3JvdXRlclZpZXdDYWNoZSA9IHt9KVxuICAgIHZhciBkZXB0aCA9IDBcbiAgICB2YXIgaW5hY3RpdmUgPSBmYWxzZVxuXG4gICAgd2hpbGUgKHBhcmVudCkge1xuICAgICAgaWYgKHBhcmVudC4kdm5vZGUgJiYgcGFyZW50LiR2bm9kZS5kYXRhLnJvdXRlclZpZXcpIHtcbiAgICAgICAgZGVwdGgrK1xuICAgICAgfVxuICAgICAgaWYgKHBhcmVudC5faW5hY3RpdmUpIHtcbiAgICAgICAgaW5hY3RpdmUgPSB0cnVlXG4gICAgICB9XG4gICAgICBwYXJlbnQgPSBwYXJlbnQuJHBhcmVudFxuICAgIH1cblxuICAgIGRhdGEucm91dGVyVmlld0RlcHRoID0gZGVwdGhcbiAgICB2YXIgbWF0Y2hlZCA9IHJvdXRlLm1hdGNoZWRbZGVwdGhdXG4gICAgaWYgKCFtYXRjaGVkKSB7XG4gICAgICByZXR1cm4gaCgpXG4gICAgfVxuXG4gICAgdmFyIG5hbWUgPSBwcm9wcy5uYW1lXG4gICAgdmFyIGNvbXBvbmVudCA9IGluYWN0aXZlXG4gICAgICA/IGNhY2hlW25hbWVdXG4gICAgICA6IChjYWNoZVtuYW1lXSA9IG1hdGNoZWQuY29tcG9uZW50c1tuYW1lXSlcblxuICAgIGlmICghaW5hY3RpdmUpIHtcbiAgICAgIHZhciBob29rcyA9IGRhdGEuaG9vayB8fCAoZGF0YS5ob29rID0ge30pXG4gICAgICBob29rcy5pbml0ID0gZnVuY3Rpb24gKHZub2RlKSB7XG4gICAgICAgIG1hdGNoZWQuaW5zdGFuY2VzW25hbWVdID0gdm5vZGUuY2hpbGRcbiAgICAgIH1cbiAgICAgIGhvb2tzLnByZXBhdGNoID0gZnVuY3Rpb24gKG9sZFZub2RlLCB2bm9kZSkge1xuICAgICAgICBtYXRjaGVkLmluc3RhbmNlc1tuYW1lXSA9IHZub2RlLmNoaWxkXG4gICAgICB9XG4gICAgICBob29rcy5kZXN0cm95ID0gZnVuY3Rpb24gKHZub2RlKSB7XG4gICAgICAgIGlmIChtYXRjaGVkLmluc3RhbmNlc1tuYW1lXSA9PT0gdm5vZGUuY2hpbGQpIHtcbiAgICAgICAgICBtYXRjaGVkLmluc3RhbmNlc1tuYW1lXSA9IHVuZGVmaW5lZFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGgoY29tcG9uZW50LCBkYXRhLCBjaGlsZHJlbilcbiAgfVxufVxuXG4vKiAgKi9cblxuZnVuY3Rpb24gcmVzb2x2ZVBhdGggKFxuICByZWxhdGl2ZSxcbiAgYmFzZSxcbiAgYXBwZW5kXG4pIHtcbiAgaWYgKHJlbGF0aXZlLmNoYXJBdCgwKSA9PT0gJy8nKSB7XG4gICAgcmV0dXJuIHJlbGF0aXZlXG4gIH1cblxuICBpZiAocmVsYXRpdmUuY2hhckF0KDApID09PSAnPycgfHwgcmVsYXRpdmUuY2hhckF0KDApID09PSAnIycpIHtcbiAgICByZXR1cm4gYmFzZSArIHJlbGF0aXZlXG4gIH1cblxuICB2YXIgc3RhY2sgPSBiYXNlLnNwbGl0KCcvJylcblxuICAvLyByZW1vdmUgdHJhaWxpbmcgc2VnbWVudCBpZjpcbiAgLy8gLSBub3QgYXBwZW5kaW5nXG4gIC8vIC0gYXBwZW5kaW5nIHRvIHRyYWlsaW5nIHNsYXNoIChsYXN0IHNlZ21lbnQgaXMgZW1wdHkpXG4gIGlmICghYXBwZW5kIHx8ICFzdGFja1tzdGFjay5sZW5ndGggLSAxXSkge1xuICAgIHN0YWNrLnBvcCgpXG4gIH1cblxuICAvLyByZXNvbHZlIHJlbGF0aXZlIHBhdGhcbiAgdmFyIHNlZ21lbnRzID0gcmVsYXRpdmUucmVwbGFjZSgvXlxcLy8sICcnKS5zcGxpdCgnLycpXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc2VnbWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgc2VnbWVudCA9IHNlZ21lbnRzW2ldXG4gICAgaWYgKHNlZ21lbnQgPT09ICcuJykge1xuICAgICAgY29udGludWVcbiAgICB9IGVsc2UgaWYgKHNlZ21lbnQgPT09ICcuLicpIHtcbiAgICAgIHN0YWNrLnBvcCgpXG4gICAgfSBlbHNlIHtcbiAgICAgIHN0YWNrLnB1c2goc2VnbWVudClcbiAgICB9XG4gIH1cblxuICAvLyBlbnN1cmUgbGVhZGluZyBzbGFzaFxuICBpZiAoc3RhY2tbMF0gIT09ICcnKSB7XG4gICAgc3RhY2sudW5zaGlmdCgnJylcbiAgfVxuXG4gIHJldHVybiBzdGFjay5qb2luKCcvJylcbn1cblxuZnVuY3Rpb24gcGFyc2VQYXRoIChwYXRoKSB7XG4gIHZhciBoYXNoID0gJydcbiAgdmFyIHF1ZXJ5ID0gJydcblxuICB2YXIgaGFzaEluZGV4ID0gcGF0aC5pbmRleE9mKCcjJylcbiAgaWYgKGhhc2hJbmRleCA+PSAwKSB7XG4gICAgaGFzaCA9IHBhdGguc2xpY2UoaGFzaEluZGV4KVxuICAgIHBhdGggPSBwYXRoLnNsaWNlKDAsIGhhc2hJbmRleClcbiAgfVxuXG4gIHZhciBxdWVyeUluZGV4ID0gcGF0aC5pbmRleE9mKCc/JylcbiAgaWYgKHF1ZXJ5SW5kZXggPj0gMCkge1xuICAgIHF1ZXJ5ID0gcGF0aC5zbGljZShxdWVyeUluZGV4ICsgMSlcbiAgICBwYXRoID0gcGF0aC5zbGljZSgwLCBxdWVyeUluZGV4KVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBwYXRoOiBwYXRoLFxuICAgIHF1ZXJ5OiBxdWVyeSxcbiAgICBoYXNoOiBoYXNoXG4gIH1cbn1cblxuZnVuY3Rpb24gY2xlYW5QYXRoIChwYXRoKSB7XG4gIHJldHVybiBwYXRoLnJlcGxhY2UoL1xcL1xcLy9nLCAnLycpXG59XG5cbi8qICAqL1xuXG5mdW5jdGlvbiBhc3NlcnQgKGNvbmRpdGlvbiwgbWVzc2FnZSkge1xuICBpZiAoIWNvbmRpdGlvbikge1xuICAgIHRocm93IG5ldyBFcnJvcigoXCJbdnVlLXJvdXRlcl0gXCIgKyBtZXNzYWdlKSlcbiAgfVxufVxuXG5mdW5jdGlvbiB3YXJuIChjb25kaXRpb24sIG1lc3NhZ2UpIHtcbiAgaWYgKCFjb25kaXRpb24pIHtcbiAgICB0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcgJiYgY29uc29sZS53YXJuKChcIlt2dWUtcm91dGVyXSBcIiArIG1lc3NhZ2UpKVxuICB9XG59XG5cbi8qICAqL1xuXG52YXIgZW5jb2RlID0gZW5jb2RlVVJJQ29tcG9uZW50XG52YXIgZGVjb2RlID0gZGVjb2RlVVJJQ29tcG9uZW50XG5cbmZ1bmN0aW9uIHJlc29sdmVRdWVyeSAoXG4gIHF1ZXJ5LFxuICBleHRyYVF1ZXJ5XG4pIHtcbiAgaWYgKCBleHRyYVF1ZXJ5ID09PSB2b2lkIDAgKSBleHRyYVF1ZXJ5ID0ge307XG5cbiAgaWYgKHF1ZXJ5KSB7XG4gICAgdmFyIHBhcnNlZFF1ZXJ5XG4gICAgdHJ5IHtcbiAgICAgIHBhcnNlZFF1ZXJ5ID0gcGFyc2VRdWVyeShxdWVyeSlcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICB3YXJuKGZhbHNlLCBlLm1lc3NhZ2UpXG4gICAgICBwYXJzZWRRdWVyeSA9IHt9XG4gICAgfVxuICAgIGZvciAodmFyIGtleSBpbiBleHRyYVF1ZXJ5KSB7XG4gICAgICBwYXJzZWRRdWVyeVtrZXldID0gZXh0cmFRdWVyeVtrZXldXG4gICAgfVxuICAgIHJldHVybiBwYXJzZWRRdWVyeVxuICB9IGVsc2Uge1xuICAgIHJldHVybiBleHRyYVF1ZXJ5XG4gIH1cbn1cblxuZnVuY3Rpb24gcGFyc2VRdWVyeSAocXVlcnkpIHtcbiAgdmFyIHJlcyA9IHt9XG5cbiAgcXVlcnkgPSBxdWVyeS50cmltKCkucmVwbGFjZSgvXihcXD98I3wmKS8sICcnKVxuXG4gIGlmICghcXVlcnkpIHtcbiAgICByZXR1cm4gcmVzXG4gIH1cblxuICBxdWVyeS5zcGxpdCgnJicpLmZvckVhY2goZnVuY3Rpb24gKHBhcmFtKSB7XG4gICAgdmFyIHBhcnRzID0gcGFyYW0ucmVwbGFjZSgvXFwrL2csICcgJykuc3BsaXQoJz0nKVxuICAgIHZhciBrZXkgPSBkZWNvZGUocGFydHMuc2hpZnQoKSlcbiAgICB2YXIgdmFsID0gcGFydHMubGVuZ3RoID4gMFxuICAgICAgPyBkZWNvZGUocGFydHMuam9pbignPScpKVxuICAgICAgOiBudWxsXG5cbiAgICBpZiAocmVzW2tleV0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmVzW2tleV0gPSB2YWxcbiAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkocmVzW2tleV0pKSB7XG4gICAgICByZXNba2V5XS5wdXNoKHZhbClcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzW2tleV0gPSBbcmVzW2tleV0sIHZhbF1cbiAgICB9XG4gIH0pXG5cbiAgcmV0dXJuIHJlc1xufVxuXG5mdW5jdGlvbiBzdHJpbmdpZnlRdWVyeSAob2JqKSB7XG4gIHZhciByZXMgPSBvYmogPyBPYmplY3Qua2V5cyhvYmopLnNvcnQoKS5tYXAoZnVuY3Rpb24gKGtleSkge1xuICAgIHZhciB2YWwgPSBvYmpba2V5XVxuXG4gICAgaWYgKHZhbCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gJydcbiAgICB9XG5cbiAgICBpZiAodmFsID09PSBudWxsKSB7XG4gICAgICByZXR1cm4gZW5jb2RlKGtleSlcbiAgICB9XG5cbiAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWwpKSB7XG4gICAgICB2YXIgcmVzdWx0ID0gW11cbiAgICAgIHZhbC5zbGljZSgpLmZvckVhY2goZnVuY3Rpb24gKHZhbDIpIHtcbiAgICAgICAgaWYgKHZhbDIgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICAgIGlmICh2YWwyID09PSBudWxsKSB7XG4gICAgICAgICAgcmVzdWx0LnB1c2goZW5jb2RlKGtleSkpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmVzdWx0LnB1c2goZW5jb2RlKGtleSkgKyAnPScgKyBlbmNvZGUodmFsMikpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICByZXR1cm4gcmVzdWx0LmpvaW4oJyYnKVxuICAgIH1cblxuICAgIHJldHVybiBlbmNvZGUoa2V5KSArICc9JyArIGVuY29kZSh2YWwpXG4gIH0pLmZpbHRlcihmdW5jdGlvbiAoeCkgeyByZXR1cm4geC5sZW5ndGggPiAwOyB9KS5qb2luKCcmJykgOiBudWxsXG4gIHJldHVybiByZXMgPyAoXCI/XCIgKyByZXMpIDogJydcbn1cblxuLyogICovXG5cbmZ1bmN0aW9uIGNyZWF0ZVJvdXRlIChcbiAgcmVjb3JkLFxuICBsb2NhdGlvbixcbiAgcmVkaXJlY3RlZEZyb21cbikge1xuICB2YXIgcm91dGUgPSB7XG4gICAgbmFtZTogbG9jYXRpb24ubmFtZSB8fCAocmVjb3JkICYmIHJlY29yZC5uYW1lKSxcbiAgICBtZXRhOiAocmVjb3JkICYmIHJlY29yZC5tZXRhKSB8fCB7fSxcbiAgICBwYXRoOiBsb2NhdGlvbi5wYXRoIHx8ICcvJyxcbiAgICBoYXNoOiBsb2NhdGlvbi5oYXNoIHx8ICcnLFxuICAgIHF1ZXJ5OiBsb2NhdGlvbi5xdWVyeSB8fCB7fSxcbiAgICBwYXJhbXM6IGxvY2F0aW9uLnBhcmFtcyB8fCB7fSxcbiAgICBmdWxsUGF0aDogZ2V0RnVsbFBhdGgobG9jYXRpb24pLFxuICAgIG1hdGNoZWQ6IHJlY29yZCA/IGZvcm1hdE1hdGNoKHJlY29yZCkgOiBbXVxuICB9XG4gIGlmIChyZWRpcmVjdGVkRnJvbSkge1xuICAgIHJvdXRlLnJlZGlyZWN0ZWRGcm9tID0gZ2V0RnVsbFBhdGgocmVkaXJlY3RlZEZyb20pXG4gIH1cbiAgcmV0dXJuIE9iamVjdC5mcmVlemUocm91dGUpXG59XG5cbi8vIHRoZSBzdGFydGluZyByb3V0ZSB0aGF0IHJlcHJlc2VudHMgdGhlIGluaXRpYWwgc3RhdGVcbnZhciBTVEFSVCA9IGNyZWF0ZVJvdXRlKG51bGwsIHtcbiAgcGF0aDogJy8nXG59KVxuXG5mdW5jdGlvbiBmb3JtYXRNYXRjaCAocmVjb3JkKSB7XG4gIHZhciByZXMgPSBbXVxuICB3aGlsZSAocmVjb3JkKSB7XG4gICAgcmVzLnVuc2hpZnQocmVjb3JkKVxuICAgIHJlY29yZCA9IHJlY29yZC5wYXJlbnRcbiAgfVxuICByZXR1cm4gcmVzXG59XG5cbmZ1bmN0aW9uIGdldEZ1bGxQYXRoIChyZWYpIHtcbiAgdmFyIHBhdGggPSByZWYucGF0aDtcbiAgdmFyIHF1ZXJ5ID0gcmVmLnF1ZXJ5OyBpZiAoIHF1ZXJ5ID09PSB2b2lkIDAgKSBxdWVyeSA9IHt9O1xuICB2YXIgaGFzaCA9IHJlZi5oYXNoOyBpZiAoIGhhc2ggPT09IHZvaWQgMCApIGhhc2ggPSAnJztcblxuICByZXR1cm4gKHBhdGggfHwgJy8nKSArIHN0cmluZ2lmeVF1ZXJ5KHF1ZXJ5KSArIGhhc2hcbn1cblxudmFyIHRyYWlsaW5nU2xhc2hSRSA9IC9cXC8kL1xuZnVuY3Rpb24gaXNTYW1lUm91dGUgKGEsIGIpIHtcbiAgaWYgKGIgPT09IFNUQVJUKSB7XG4gICAgcmV0dXJuIGEgPT09IGJcbiAgfSBlbHNlIGlmICghYikge1xuICAgIHJldHVybiBmYWxzZVxuICB9IGVsc2UgaWYgKGEucGF0aCAmJiBiLnBhdGgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgYS5wYXRoLnJlcGxhY2UodHJhaWxpbmdTbGFzaFJFLCAnJykgPT09IGIucGF0aC5yZXBsYWNlKHRyYWlsaW5nU2xhc2hSRSwgJycpICYmXG4gICAgICBhLmhhc2ggPT09IGIuaGFzaCAmJlxuICAgICAgaXNPYmplY3RFcXVhbChhLnF1ZXJ5LCBiLnF1ZXJ5KVxuICAgIClcbiAgfSBlbHNlIGlmIChhLm5hbWUgJiYgYi5uYW1lKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIGEubmFtZSA9PT0gYi5uYW1lICYmXG4gICAgICBhLmhhc2ggPT09IGIuaGFzaCAmJlxuICAgICAgaXNPYmplY3RFcXVhbChhLnF1ZXJ5LCBiLnF1ZXJ5KSAmJlxuICAgICAgaXNPYmplY3RFcXVhbChhLnBhcmFtcywgYi5wYXJhbXMpXG4gICAgKVxuICB9IGVsc2Uge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG59XG5cbmZ1bmN0aW9uIGlzT2JqZWN0RXF1YWwgKGEsIGIpIHtcbiAgaWYgKCBhID09PSB2b2lkIDAgKSBhID0ge307XG4gIGlmICggYiA9PT0gdm9pZCAwICkgYiA9IHt9O1xuXG4gIHZhciBhS2V5cyA9IE9iamVjdC5rZXlzKGEpXG4gIHZhciBiS2V5cyA9IE9iamVjdC5rZXlzKGIpXG4gIGlmIChhS2V5cy5sZW5ndGggIT09IGJLZXlzLmxlbmd0aCkge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG4gIHJldHVybiBhS2V5cy5ldmVyeShmdW5jdGlvbiAoa2V5KSB7IHJldHVybiBTdHJpbmcoYVtrZXldKSA9PT0gU3RyaW5nKGJba2V5XSk7IH0pXG59XG5cbmZ1bmN0aW9uIGlzSW5jbHVkZWRSb3V0ZSAoY3VycmVudCwgdGFyZ2V0KSB7XG4gIHJldHVybiAoXG4gICAgY3VycmVudC5wYXRoLmluZGV4T2YodGFyZ2V0LnBhdGgucmVwbGFjZSgvXFwvJC8sICcnKSkgPT09IDAgJiZcbiAgICAoIXRhcmdldC5oYXNoIHx8IGN1cnJlbnQuaGFzaCA9PT0gdGFyZ2V0Lmhhc2gpICYmXG4gICAgcXVlcnlJbmNsdWRlcyhjdXJyZW50LnF1ZXJ5LCB0YXJnZXQucXVlcnkpXG4gIClcbn1cblxuZnVuY3Rpb24gcXVlcnlJbmNsdWRlcyAoY3VycmVudCwgdGFyZ2V0KSB7XG4gIGZvciAodmFyIGtleSBpbiB0YXJnZXQpIHtcbiAgICBpZiAoIShrZXkgaW4gY3VycmVudCkpIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cbiAgfVxuICByZXR1cm4gdHJ1ZVxufVxuXG4vKiAgKi9cblxuZnVuY3Rpb24gbm9ybWFsaXplTG9jYXRpb24gKFxuICByYXcsXG4gIGN1cnJlbnQsXG4gIGFwcGVuZFxuKSB7XG4gIHZhciBuZXh0ID0gdHlwZW9mIHJhdyA9PT0gJ3N0cmluZycgPyB7IHBhdGg6IHJhdyB9IDogcmF3XG4gIGlmIChuZXh0Lm5hbWUgfHwgbmV4dC5fbm9ybWFsaXplZCkge1xuICAgIHJldHVybiBuZXh0XG4gIH1cblxuICB2YXIgcGFyc2VkUGF0aCA9IHBhcnNlUGF0aChuZXh0LnBhdGggfHwgJycpXG4gIHZhciBiYXNlUGF0aCA9IChjdXJyZW50ICYmIGN1cnJlbnQucGF0aCkgfHwgJy8nXG4gIHZhciBwYXRoID0gcGFyc2VkUGF0aC5wYXRoXG4gICAgPyByZXNvbHZlUGF0aChwYXJzZWRQYXRoLnBhdGgsIGJhc2VQYXRoLCBhcHBlbmQpXG4gICAgOiAoY3VycmVudCAmJiBjdXJyZW50LnBhdGgpIHx8ICcvJ1xuICB2YXIgcXVlcnkgPSByZXNvbHZlUXVlcnkocGFyc2VkUGF0aC5xdWVyeSwgbmV4dC5xdWVyeSlcbiAgdmFyIGhhc2ggPSBuZXh0Lmhhc2ggfHwgcGFyc2VkUGF0aC5oYXNoXG4gIGlmIChoYXNoICYmIGhhc2guY2hhckF0KDApICE9PSAnIycpIHtcbiAgICBoYXNoID0gXCIjXCIgKyBoYXNoXG4gIH1cblxuICByZXR1cm4ge1xuICAgIF9ub3JtYWxpemVkOiB0cnVlLFxuICAgIHBhdGg6IHBhdGgsXG4gICAgcXVlcnk6IHF1ZXJ5LFxuICAgIGhhc2g6IGhhc2hcbiAgfVxufVxuXG4vKiAgKi9cblxuLy8gd29yayBhcm91bmQgd2VpcmQgZmxvdyBidWdcbnZhciB0b1R5cGVzID0gW1N0cmluZywgT2JqZWN0XVxuXG52YXIgTGluayA9IHtcbiAgbmFtZTogJ3JvdXRlci1saW5rJyxcbiAgcHJvcHM6IHtcbiAgICB0bzoge1xuICAgICAgdHlwZTogdG9UeXBlcyxcbiAgICAgIHJlcXVpcmVkOiB0cnVlXG4gICAgfSxcbiAgICB0YWc6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQ6ICdhJ1xuICAgIH0sXG4gICAgZXhhY3Q6IEJvb2xlYW4sXG4gICAgYXBwZW5kOiBCb29sZWFuLFxuICAgIHJlcGxhY2U6IEJvb2xlYW4sXG4gICAgYWN0aXZlQ2xhc3M6IFN0cmluZ1xuICB9LFxuICByZW5kZXI6IGZ1bmN0aW9uIHJlbmRlciAoaCkge1xuICAgIHZhciB0aGlzJDEgPSB0aGlzO1xuXG4gICAgdmFyIHJvdXRlciA9IHRoaXMuJHJvdXRlclxuICAgIHZhciBjdXJyZW50ID0gdGhpcy4kcm91dGVcbiAgICB2YXIgdG8gPSBub3JtYWxpemVMb2NhdGlvbih0aGlzLnRvLCBjdXJyZW50LCB0aGlzLmFwcGVuZClcbiAgICB2YXIgcmVzb2x2ZWQgPSByb3V0ZXIubWF0Y2godG8sIGN1cnJlbnQpXG4gICAgdmFyIGZ1bGxQYXRoID0gcmVzb2x2ZWQucmVkaXJlY3RlZEZyb20gfHwgcmVzb2x2ZWQuZnVsbFBhdGhcbiAgICB2YXIgYmFzZSA9IHJvdXRlci5oaXN0b3J5LmJhc2VcbiAgICB2YXIgaHJlZiA9IGNyZWF0ZUhyZWYoYmFzZSwgZnVsbFBhdGgsIHJvdXRlci5tb2RlKVxuICAgIHZhciBjbGFzc2VzID0ge31cbiAgICB2YXIgYWN0aXZlQ2xhc3MgPSB0aGlzLmFjdGl2ZUNsYXNzIHx8IHJvdXRlci5vcHRpb25zLmxpbmtBY3RpdmVDbGFzcyB8fCAncm91dGVyLWxpbmstYWN0aXZlJ1xuICAgIHZhciBjb21wYXJlVGFyZ2V0ID0gdG8ucGF0aCA/IGNyZWF0ZVJvdXRlKG51bGwsIHRvKSA6IHJlc29sdmVkXG4gICAgY2xhc3Nlc1thY3RpdmVDbGFzc10gPSB0aGlzLmV4YWN0XG4gICAgICA/IGlzU2FtZVJvdXRlKGN1cnJlbnQsIGNvbXBhcmVUYXJnZXQpXG4gICAgICA6IGlzSW5jbHVkZWRSb3V0ZShjdXJyZW50LCBjb21wYXJlVGFyZ2V0KVxuXG4gICAgdmFyIG9uID0ge1xuICAgICAgY2xpY2s6IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIC8vIGRvbid0IHJlZGlyZWN0IHdpdGggY29udHJvbCBrZXlzXG4gICAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICAgICAgICBpZiAoZS5tZXRhS2V5IHx8IGUuY3RybEtleSB8fCBlLnNoaWZ0S2V5KSB7IHJldHVybiB9XG4gICAgICAgIC8vIGRvbid0IHJlZGlyZWN0IHdoZW4gcHJldmVudERlZmF1bHQgY2FsbGVkXG4gICAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICAgICAgICBpZiAoZS5kZWZhdWx0UHJldmVudGVkKSB7IHJldHVybiB9XG4gICAgICAgIC8vIGRvbid0IHJlZGlyZWN0IG9uIHJpZ2h0IGNsaWNrXG4gICAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICAgICAgICBpZiAoZS5idXR0b24gIT09IDApIHsgcmV0dXJuIH1cbiAgICAgICAgLy8gZG9uJ3QgcmVkaXJlY3QgaWYgYHRhcmdldD1cIl9ibGFua1wiYFxuICAgICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgICAgICAgdmFyIHRhcmdldCA9IGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgndGFyZ2V0JylcbiAgICAgICAgaWYgKC9cXGJfYmxhbmtcXGIvaS50ZXN0KHRhcmdldCkpIHsgcmV0dXJuIH1cblxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgaWYgKHRoaXMkMS5yZXBsYWNlKSB7XG4gICAgICAgICAgcm91dGVyLnJlcGxhY2UodG8pXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcm91dGVyLnB1c2godG8pXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgZGF0YSA9IHtcbiAgICAgIGNsYXNzOiBjbGFzc2VzXG4gICAgfVxuXG4gICAgaWYgKHRoaXMudGFnID09PSAnYScpIHtcbiAgICAgIGRhdGEub24gPSBvblxuICAgICAgZGF0YS5hdHRycyA9IHsgaHJlZjogaHJlZiB9XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGZpbmQgdGhlIGZpcnN0IDxhPiBjaGlsZCBhbmQgYXBwbHkgbGlzdGVuZXIgYW5kIGhyZWZcbiAgICAgIHZhciBhID0gZmluZEFuY2hvcih0aGlzLiRzbG90cy5kZWZhdWx0KVxuICAgICAgaWYgKGEpIHtcbiAgICAgICAgLy8gaW4gY2FzZSB0aGUgPGE+IGlzIGEgc3RhdGljIG5vZGVcbiAgICAgICAgYS5pc1N0YXRpYyA9IGZhbHNlXG4gICAgICAgIHZhciBleHRlbmQgPSBfVnVlLnV0aWwuZXh0ZW5kXG4gICAgICAgIHZhciBhRGF0YSA9IGEuZGF0YSA9IGV4dGVuZCh7fSwgYS5kYXRhKVxuICAgICAgICBhRGF0YS5vbiA9IG9uXG4gICAgICAgIHZhciBhQXR0cnMgPSBhLmRhdGEuYXR0cnMgPSBleHRlbmQoe30sIGEuZGF0YS5hdHRycylcbiAgICAgICAgYUF0dHJzLmhyZWYgPSBocmVmXG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBkb2Vzbid0IGhhdmUgPGE+IGNoaWxkLCBhcHBseSBsaXN0ZW5lciB0byBzZWxmXG4gICAgICAgIGRhdGEub24gPSBvblxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBoKHRoaXMudGFnLCBkYXRhLCB0aGlzLiRzbG90cy5kZWZhdWx0KVxuICB9XG59XG5cbmZ1bmN0aW9uIGZpbmRBbmNob3IgKGNoaWxkcmVuKSB7XG4gIGlmIChjaGlsZHJlbikge1xuICAgIHZhciBjaGlsZFxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNoaWxkID0gY2hpbGRyZW5baV1cbiAgICAgIGlmIChjaGlsZC50YWcgPT09ICdhJykge1xuICAgICAgICByZXR1cm4gY2hpbGRcbiAgICAgIH1cbiAgICAgIGlmIChjaGlsZC5jaGlsZHJlbiAmJiAoY2hpbGQgPSBmaW5kQW5jaG9yKGNoaWxkLmNoaWxkcmVuKSkpIHtcbiAgICAgICAgcmV0dXJuIGNoaWxkXG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUhyZWYgKGJhc2UsIGZ1bGxQYXRoLCBtb2RlKSB7XG4gIHZhciBwYXRoID0gbW9kZSA9PT0gJ2hhc2gnID8gJy8jJyArIGZ1bGxQYXRoIDogZnVsbFBhdGhcbiAgcmV0dXJuIGJhc2UgPyBjbGVhblBhdGgoYmFzZSArIHBhdGgpIDogcGF0aFxufVxuXG52YXIgX1Z1ZVxuXG5mdW5jdGlvbiBpbnN0YWxsIChWdWUpIHtcbiAgaWYgKGluc3RhbGwuaW5zdGFsbGVkKSB7IHJldHVybiB9XG4gIGluc3RhbGwuaW5zdGFsbGVkID0gdHJ1ZVxuXG4gIF9WdWUgPSBWdWVcblxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoVnVlLnByb3RvdHlwZSwgJyRyb3V0ZXInLCB7XG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQgKCkgeyByZXR1cm4gdGhpcy4kcm9vdC5fcm91dGVyIH1cbiAgfSlcblxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoVnVlLnByb3RvdHlwZSwgJyRyb3V0ZScsIHtcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCQxICgpIHsgcmV0dXJuIHRoaXMuJHJvb3QuX3JvdXRlIH1cbiAgfSlcblxuICBWdWUubWl4aW4oe1xuICAgIGJlZm9yZUNyZWF0ZTogZnVuY3Rpb24gYmVmb3JlQ3JlYXRlICgpIHtcbiAgICAgIGlmICh0aGlzLiRvcHRpb25zLnJvdXRlcikge1xuICAgICAgICB0aGlzLl9yb3V0ZXIgPSB0aGlzLiRvcHRpb25zLnJvdXRlclxuICAgICAgICB0aGlzLl9yb3V0ZXIuaW5pdCh0aGlzKVxuICAgICAgICBWdWUudXRpbC5kZWZpbmVSZWFjdGl2ZSh0aGlzLCAnX3JvdXRlJywgdGhpcy5fcm91dGVyLmhpc3RvcnkuY3VycmVudClcbiAgICAgIH1cbiAgICB9XG4gIH0pXG5cbiAgVnVlLmNvbXBvbmVudCgncm91dGVyLXZpZXcnLCBWaWV3KVxuICBWdWUuY29tcG9uZW50KCdyb3V0ZXItbGluaycsIExpbmspXG5cbiAgdmFyIHN0cmF0cyA9IFZ1ZS5jb25maWcub3B0aW9uTWVyZ2VTdHJhdGVnaWVzXG4gIC8vIHVzZSB0aGUgc2FtZSBob29rIG1lcmdpbmcgc3RyYXRlZ3kgZm9yIHJvdXRlIGhvb2tzXG4gIHN0cmF0cy5iZWZvcmVSb3V0ZUVudGVyID0gc3RyYXRzLmJlZm9yZVJvdXRlTGVhdmUgPSBzdHJhdHMuY3JlYXRlZFxufVxuXG52YXIgX19tb2R1bGVFeHBvcnRzID0gQXJyYXkuaXNBcnJheSB8fCBmdW5jdGlvbiAoYXJyKSB7XG4gIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoYXJyKSA9PSAnW29iamVjdCBBcnJheV0nO1xufTtcblxudmFyIGlzYXJyYXkgPSBfX21vZHVsZUV4cG9ydHNcblxuLyoqXG4gKiBFeHBvc2UgYHBhdGhUb1JlZ2V4cGAuXG4gKi9cbnZhciBpbmRleCA9IHBhdGhUb1JlZ2V4cFxudmFyIHBhcnNlXzEgPSBwYXJzZVxudmFyIGNvbXBpbGVfMSA9IGNvbXBpbGVcbnZhciB0b2tlbnNUb0Z1bmN0aW9uXzEgPSB0b2tlbnNUb0Z1bmN0aW9uXG52YXIgdG9rZW5zVG9SZWdFeHBfMSA9IHRva2Vuc1RvUmVnRXhwXG5cbi8qKlxuICogVGhlIG1haW4gcGF0aCBtYXRjaGluZyByZWdleHAgdXRpbGl0eS5cbiAqXG4gKiBAdHlwZSB7UmVnRXhwfVxuICovXG52YXIgUEFUSF9SRUdFWFAgPSBuZXcgUmVnRXhwKFtcbiAgLy8gTWF0Y2ggZXNjYXBlZCBjaGFyYWN0ZXJzIHRoYXQgd291bGQgb3RoZXJ3aXNlIGFwcGVhciBpbiBmdXR1cmUgbWF0Y2hlcy5cbiAgLy8gVGhpcyBhbGxvd3MgdGhlIHVzZXIgdG8gZXNjYXBlIHNwZWNpYWwgY2hhcmFjdGVycyB0aGF0IHdvbid0IHRyYW5zZm9ybS5cbiAgJyhcXFxcXFxcXC4pJyxcbiAgLy8gTWF0Y2ggRXhwcmVzcy1zdHlsZSBwYXJhbWV0ZXJzIGFuZCB1bi1uYW1lZCBwYXJhbWV0ZXJzIHdpdGggYSBwcmVmaXhcbiAgLy8gYW5kIG9wdGlvbmFsIHN1ZmZpeGVzLiBNYXRjaGVzIGFwcGVhciBhczpcbiAgLy9cbiAgLy8gXCIvOnRlc3QoXFxcXGQrKT9cIiA9PiBbXCIvXCIsIFwidGVzdFwiLCBcIlxcZCtcIiwgdW5kZWZpbmVkLCBcIj9cIiwgdW5kZWZpbmVkXVxuICAvLyBcIi9yb3V0ZShcXFxcZCspXCIgID0+IFt1bmRlZmluZWQsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCBcIlxcZCtcIiwgdW5kZWZpbmVkLCB1bmRlZmluZWRdXG4gIC8vIFwiLypcIiAgICAgICAgICAgID0+IFtcIi9cIiwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCBcIipcIl1cbiAgJyhbXFxcXC8uXSk/KD86KD86XFxcXDooXFxcXHcrKSg/OlxcXFwoKCg/OlxcXFxcXFxcLnxbXlxcXFxcXFxcKCldKSspXFxcXCkpP3xcXFxcKCgoPzpcXFxcXFxcXC58W15cXFxcXFxcXCgpXSkrKVxcXFwpKShbKyo/XSk/fChcXFxcKikpJ1xuXS5qb2luKCd8JyksICdnJylcblxuLyoqXG4gKiBQYXJzZSBhIHN0cmluZyBmb3IgdGhlIHJhdyB0b2tlbnMuXG4gKlxuICogQHBhcmFtICB7c3RyaW5nfSAgc3RyXG4gKiBAcGFyYW0gIHtPYmplY3Q9fSBvcHRpb25zXG4gKiBAcmV0dXJuIHshQXJyYXl9XG4gKi9cbmZ1bmN0aW9uIHBhcnNlIChzdHIsIG9wdGlvbnMpIHtcbiAgdmFyIHRva2VucyA9IFtdXG4gIHZhciBrZXkgPSAwXG4gIHZhciBpbmRleCA9IDBcbiAgdmFyIHBhdGggPSAnJ1xuICB2YXIgZGVmYXVsdERlbGltaXRlciA9IG9wdGlvbnMgJiYgb3B0aW9ucy5kZWxpbWl0ZXIgfHwgJy8nXG4gIHZhciByZXNcblxuICB3aGlsZSAoKHJlcyA9IFBBVEhfUkVHRVhQLmV4ZWMoc3RyKSkgIT0gbnVsbCkge1xuICAgIHZhciBtID0gcmVzWzBdXG4gICAgdmFyIGVzY2FwZWQgPSByZXNbMV1cbiAgICB2YXIgb2Zmc2V0ID0gcmVzLmluZGV4XG4gICAgcGF0aCArPSBzdHIuc2xpY2UoaW5kZXgsIG9mZnNldClcbiAgICBpbmRleCA9IG9mZnNldCArIG0ubGVuZ3RoXG5cbiAgICAvLyBJZ25vcmUgYWxyZWFkeSBlc2NhcGVkIHNlcXVlbmNlcy5cbiAgICBpZiAoZXNjYXBlZCkge1xuICAgICAgcGF0aCArPSBlc2NhcGVkWzFdXG4gICAgICBjb250aW51ZVxuICAgIH1cblxuICAgIHZhciBuZXh0ID0gc3RyW2luZGV4XVxuICAgIHZhciBwcmVmaXggPSByZXNbMl1cbiAgICB2YXIgbmFtZSA9IHJlc1szXVxuICAgIHZhciBjYXB0dXJlID0gcmVzWzRdXG4gICAgdmFyIGdyb3VwID0gcmVzWzVdXG4gICAgdmFyIG1vZGlmaWVyID0gcmVzWzZdXG4gICAgdmFyIGFzdGVyaXNrID0gcmVzWzddXG5cbiAgICAvLyBQdXNoIHRoZSBjdXJyZW50IHBhdGggb250byB0aGUgdG9rZW5zLlxuICAgIGlmIChwYXRoKSB7XG4gICAgICB0b2tlbnMucHVzaChwYXRoKVxuICAgICAgcGF0aCA9ICcnXG4gICAgfVxuXG4gICAgdmFyIHBhcnRpYWwgPSBwcmVmaXggIT0gbnVsbCAmJiBuZXh0ICE9IG51bGwgJiYgbmV4dCAhPT0gcHJlZml4XG4gICAgdmFyIHJlcGVhdCA9IG1vZGlmaWVyID09PSAnKycgfHwgbW9kaWZpZXIgPT09ICcqJ1xuICAgIHZhciBvcHRpb25hbCA9IG1vZGlmaWVyID09PSAnPycgfHwgbW9kaWZpZXIgPT09ICcqJ1xuICAgIHZhciBkZWxpbWl0ZXIgPSByZXNbMl0gfHwgZGVmYXVsdERlbGltaXRlclxuICAgIHZhciBwYXR0ZXJuID0gY2FwdHVyZSB8fCBncm91cFxuXG4gICAgdG9rZW5zLnB1c2goe1xuICAgICAgbmFtZTogbmFtZSB8fCBrZXkrKyxcbiAgICAgIHByZWZpeDogcHJlZml4IHx8ICcnLFxuICAgICAgZGVsaW1pdGVyOiBkZWxpbWl0ZXIsXG4gICAgICBvcHRpb25hbDogb3B0aW9uYWwsXG4gICAgICByZXBlYXQ6IHJlcGVhdCxcbiAgICAgIHBhcnRpYWw6IHBhcnRpYWwsXG4gICAgICBhc3RlcmlzazogISFhc3RlcmlzayxcbiAgICAgIHBhdHRlcm46IHBhdHRlcm4gPyBlc2NhcGVHcm91cChwYXR0ZXJuKSA6IChhc3RlcmlzayA/ICcuKicgOiAnW14nICsgZXNjYXBlU3RyaW5nKGRlbGltaXRlcikgKyAnXSs/JylcbiAgICB9KVxuICB9XG5cbiAgLy8gTWF0Y2ggYW55IGNoYXJhY3RlcnMgc3RpbGwgcmVtYWluaW5nLlxuICBpZiAoaW5kZXggPCBzdHIubGVuZ3RoKSB7XG4gICAgcGF0aCArPSBzdHIuc3Vic3RyKGluZGV4KVxuICB9XG5cbiAgLy8gSWYgdGhlIHBhdGggZXhpc3RzLCBwdXNoIGl0IG9udG8gdGhlIGVuZC5cbiAgaWYgKHBhdGgpIHtcbiAgICB0b2tlbnMucHVzaChwYXRoKVxuICB9XG5cbiAgcmV0dXJuIHRva2Vuc1xufVxuXG4vKipcbiAqIENvbXBpbGUgYSBzdHJpbmcgdG8gYSB0ZW1wbGF0ZSBmdW5jdGlvbiBmb3IgdGhlIHBhdGguXG4gKlxuICogQHBhcmFtICB7c3RyaW5nfSAgICAgICAgICAgICBzdHJcbiAqIEBwYXJhbSAge09iamVjdD19ICAgICAgICAgICAgb3B0aW9uc1xuICogQHJldHVybiB7IWZ1bmN0aW9uKE9iamVjdD0sIE9iamVjdD0pfVxuICovXG5mdW5jdGlvbiBjb21waWxlIChzdHIsIG9wdGlvbnMpIHtcbiAgcmV0dXJuIHRva2Vuc1RvRnVuY3Rpb24ocGFyc2Uoc3RyLCBvcHRpb25zKSlcbn1cblxuLyoqXG4gKiBQcmV0dGllciBlbmNvZGluZyBvZiBVUkkgcGF0aCBzZWdtZW50cy5cbiAqXG4gKiBAcGFyYW0gIHtzdHJpbmd9XG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cbmZ1bmN0aW9uIGVuY29kZVVSSUNvbXBvbmVudFByZXR0eSAoc3RyKSB7XG4gIHJldHVybiBlbmNvZGVVUkkoc3RyKS5yZXBsYWNlKC9bXFwvPyNdL2csIGZ1bmN0aW9uIChjKSB7XG4gICAgcmV0dXJuICclJyArIGMuY2hhckNvZGVBdCgwKS50b1N0cmluZygxNikudG9VcHBlckNhc2UoKVxuICB9KVxufVxuXG4vKipcbiAqIEVuY29kZSB0aGUgYXN0ZXJpc2sgcGFyYW1ldGVyLiBTaW1pbGFyIHRvIGBwcmV0dHlgLCBidXQgYWxsb3dzIHNsYXNoZXMuXG4gKlxuICogQHBhcmFtICB7c3RyaW5nfVxuICogQHJldHVybiB7c3RyaW5nfVxuICovXG5mdW5jdGlvbiBlbmNvZGVBc3RlcmlzayAoc3RyKSB7XG4gIHJldHVybiBlbmNvZGVVUkkoc3RyKS5yZXBsYWNlKC9bPyNdL2csIGZ1bmN0aW9uIChjKSB7XG4gICAgcmV0dXJuICclJyArIGMuY2hhckNvZGVBdCgwKS50b1N0cmluZygxNikudG9VcHBlckNhc2UoKVxuICB9KVxufVxuXG4vKipcbiAqIEV4cG9zZSBhIG1ldGhvZCBmb3IgdHJhbnNmb3JtaW5nIHRva2VucyBpbnRvIHRoZSBwYXRoIGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiB0b2tlbnNUb0Z1bmN0aW9uICh0b2tlbnMpIHtcbiAgLy8gQ29tcGlsZSBhbGwgdGhlIHRva2VucyBpbnRvIHJlZ2V4cHMuXG4gIHZhciBtYXRjaGVzID0gbmV3IEFycmF5KHRva2Vucy5sZW5ndGgpXG5cbiAgLy8gQ29tcGlsZSBhbGwgdGhlIHBhdHRlcm5zIGJlZm9yZSBjb21waWxhdGlvbi5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCB0b2tlbnMubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAodHlwZW9mIHRva2Vuc1tpXSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIG1hdGNoZXNbaV0gPSBuZXcgUmVnRXhwKCdeKD86JyArIHRva2Vuc1tpXS5wYXR0ZXJuICsgJykkJylcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24gKG9iaiwgb3B0cykge1xuICAgIHZhciBwYXRoID0gJydcbiAgICB2YXIgZGF0YSA9IG9iaiB8fCB7fVxuICAgIHZhciBvcHRpb25zID0gb3B0cyB8fCB7fVxuICAgIHZhciBlbmNvZGUgPSBvcHRpb25zLnByZXR0eSA/IGVuY29kZVVSSUNvbXBvbmVudFByZXR0eSA6IGVuY29kZVVSSUNvbXBvbmVudFxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0b2tlbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciB0b2tlbiA9IHRva2Vuc1tpXVxuXG4gICAgICBpZiAodHlwZW9mIHRva2VuID09PSAnc3RyaW5nJykge1xuICAgICAgICBwYXRoICs9IHRva2VuXG5cbiAgICAgICAgY29udGludWVcbiAgICAgIH1cblxuICAgICAgdmFyIHZhbHVlID0gZGF0YVt0b2tlbi5uYW1lXVxuICAgICAgdmFyIHNlZ21lbnRcblxuICAgICAgaWYgKHZhbHVlID09IG51bGwpIHtcbiAgICAgICAgaWYgKHRva2VuLm9wdGlvbmFsKSB7XG4gICAgICAgICAgLy8gUHJlcGVuZCBwYXJ0aWFsIHNlZ21lbnQgcHJlZml4ZXMuXG4gICAgICAgICAgaWYgKHRva2VuLnBhcnRpYWwpIHtcbiAgICAgICAgICAgIHBhdGggKz0gdG9rZW4ucHJlZml4XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29udGludWVcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdFeHBlY3RlZCBcIicgKyB0b2tlbi5uYW1lICsgJ1wiIHRvIGJlIGRlZmluZWQnKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChpc2FycmF5KHZhbHVlKSkge1xuICAgICAgICBpZiAoIXRva2VuLnJlcGVhdCkge1xuICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0V4cGVjdGVkIFwiJyArIHRva2VuLm5hbWUgKyAnXCIgdG8gbm90IHJlcGVhdCwgYnV0IHJlY2VpdmVkIGAnICsgSlNPTi5zdHJpbmdpZnkodmFsdWUpICsgJ2AnKVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHZhbHVlLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgIGlmICh0b2tlbi5vcHRpb25hbCkge1xuICAgICAgICAgICAgY29udGludWVcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignRXhwZWN0ZWQgXCInICsgdG9rZW4ubmFtZSArICdcIiB0byBub3QgYmUgZW1wdHknKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgdmFsdWUubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICBzZWdtZW50ID0gZW5jb2RlKHZhbHVlW2pdKVxuXG4gICAgICAgICAgaWYgKCFtYXRjaGVzW2ldLnRlc3Qoc2VnbWVudCkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0V4cGVjdGVkIGFsbCBcIicgKyB0b2tlbi5uYW1lICsgJ1wiIHRvIG1hdGNoIFwiJyArIHRva2VuLnBhdHRlcm4gKyAnXCIsIGJ1dCByZWNlaXZlZCBgJyArIEpTT04uc3RyaW5naWZ5KHNlZ21lbnQpICsgJ2AnKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHBhdGggKz0gKGogPT09IDAgPyB0b2tlbi5wcmVmaXggOiB0b2tlbi5kZWxpbWl0ZXIpICsgc2VnbWVudFxuICAgICAgICB9XG5cbiAgICAgICAgY29udGludWVcbiAgICAgIH1cblxuICAgICAgc2VnbWVudCA9IHRva2VuLmFzdGVyaXNrID8gZW5jb2RlQXN0ZXJpc2sodmFsdWUpIDogZW5jb2RlKHZhbHVlKVxuXG4gICAgICBpZiAoIW1hdGNoZXNbaV0udGVzdChzZWdtZW50KSkge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdFeHBlY3RlZCBcIicgKyB0b2tlbi5uYW1lICsgJ1wiIHRvIG1hdGNoIFwiJyArIHRva2VuLnBhdHRlcm4gKyAnXCIsIGJ1dCByZWNlaXZlZCBcIicgKyBzZWdtZW50ICsgJ1wiJylcbiAgICAgIH1cblxuICAgICAgcGF0aCArPSB0b2tlbi5wcmVmaXggKyBzZWdtZW50XG4gICAgfVxuXG4gICAgcmV0dXJuIHBhdGhcbiAgfVxufVxuXG4vKipcbiAqIEVzY2FwZSBhIHJlZ3VsYXIgZXhwcmVzc2lvbiBzdHJpbmcuXG4gKlxuICogQHBhcmFtICB7c3RyaW5nfSBzdHJcbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xuZnVuY3Rpb24gZXNjYXBlU3RyaW5nIChzdHIpIHtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC8oWy4rKj89XiE6JHt9KClbXFxdfFxcL1xcXFxdKS9nLCAnXFxcXCQxJylcbn1cblxuLyoqXG4gKiBFc2NhcGUgdGhlIGNhcHR1cmluZyBncm91cCBieSBlc2NhcGluZyBzcGVjaWFsIGNoYXJhY3RlcnMgYW5kIG1lYW5pbmcuXG4gKlxuICogQHBhcmFtICB7c3RyaW5nfSBncm91cFxuICogQHJldHVybiB7c3RyaW5nfVxuICovXG5mdW5jdGlvbiBlc2NhcGVHcm91cCAoZ3JvdXApIHtcbiAgcmV0dXJuIGdyb3VwLnJlcGxhY2UoLyhbPSE6JFxcLygpXSkvZywgJ1xcXFwkMScpXG59XG5cbi8qKlxuICogQXR0YWNoIHRoZSBrZXlzIGFzIGEgcHJvcGVydHkgb2YgdGhlIHJlZ2V4cC5cbiAqXG4gKiBAcGFyYW0gIHshUmVnRXhwfSByZVxuICogQHBhcmFtICB7QXJyYXl9ICAga2V5c1xuICogQHJldHVybiB7IVJlZ0V4cH1cbiAqL1xuZnVuY3Rpb24gYXR0YWNoS2V5cyAocmUsIGtleXMpIHtcbiAgcmUua2V5cyA9IGtleXNcbiAgcmV0dXJuIHJlXG59XG5cbi8qKlxuICogR2V0IHRoZSBmbGFncyBmb3IgYSByZWdleHAgZnJvbSB0aGUgb3B0aW9ucy5cbiAqXG4gKiBAcGFyYW0gIHtPYmplY3R9IG9wdGlvbnNcbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xuZnVuY3Rpb24gZmxhZ3MgKG9wdGlvbnMpIHtcbiAgcmV0dXJuIG9wdGlvbnMuc2Vuc2l0aXZlID8gJycgOiAnaSdcbn1cblxuLyoqXG4gKiBQdWxsIG91dCBrZXlzIGZyb20gYSByZWdleHAuXG4gKlxuICogQHBhcmFtICB7IVJlZ0V4cH0gcGF0aFxuICogQHBhcmFtICB7IUFycmF5fSAga2V5c1xuICogQHJldHVybiB7IVJlZ0V4cH1cbiAqL1xuZnVuY3Rpb24gcmVnZXhwVG9SZWdleHAgKHBhdGgsIGtleXMpIHtcbiAgLy8gVXNlIGEgbmVnYXRpdmUgbG9va2FoZWFkIHRvIG1hdGNoIG9ubHkgY2FwdHVyaW5nIGdyb3Vwcy5cbiAgdmFyIGdyb3VwcyA9IHBhdGguc291cmNlLm1hdGNoKC9cXCgoPyFcXD8pL2cpXG5cbiAgaWYgKGdyb3Vwcykge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZ3JvdXBzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBrZXlzLnB1c2goe1xuICAgICAgICBuYW1lOiBpLFxuICAgICAgICBwcmVmaXg6IG51bGwsXG4gICAgICAgIGRlbGltaXRlcjogbnVsbCxcbiAgICAgICAgb3B0aW9uYWw6IGZhbHNlLFxuICAgICAgICByZXBlYXQ6IGZhbHNlLFxuICAgICAgICBwYXJ0aWFsOiBmYWxzZSxcbiAgICAgICAgYXN0ZXJpc2s6IGZhbHNlLFxuICAgICAgICBwYXR0ZXJuOiBudWxsXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBhdHRhY2hLZXlzKHBhdGgsIGtleXMpXG59XG5cbi8qKlxuICogVHJhbnNmb3JtIGFuIGFycmF5IGludG8gYSByZWdleHAuXG4gKlxuICogQHBhcmFtICB7IUFycmF5fSAgcGF0aFxuICogQHBhcmFtICB7QXJyYXl9ICAga2V5c1xuICogQHBhcmFtICB7IU9iamVjdH0gb3B0aW9uc1xuICogQHJldHVybiB7IVJlZ0V4cH1cbiAqL1xuZnVuY3Rpb24gYXJyYXlUb1JlZ2V4cCAocGF0aCwga2V5cywgb3B0aW9ucykge1xuICB2YXIgcGFydHMgPSBbXVxuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcGF0aC5sZW5ndGg7IGkrKykge1xuICAgIHBhcnRzLnB1c2gocGF0aFRvUmVnZXhwKHBhdGhbaV0sIGtleXMsIG9wdGlvbnMpLnNvdXJjZSlcbiAgfVxuXG4gIHZhciByZWdleHAgPSBuZXcgUmVnRXhwKCcoPzonICsgcGFydHMuam9pbignfCcpICsgJyknLCBmbGFncyhvcHRpb25zKSlcblxuICByZXR1cm4gYXR0YWNoS2V5cyhyZWdleHAsIGtleXMpXG59XG5cbi8qKlxuICogQ3JlYXRlIGEgcGF0aCByZWdleHAgZnJvbSBzdHJpbmcgaW5wdXQuXG4gKlxuICogQHBhcmFtICB7c3RyaW5nfSAgcGF0aFxuICogQHBhcmFtICB7IUFycmF5fSAga2V5c1xuICogQHBhcmFtICB7IU9iamVjdH0gb3B0aW9uc1xuICogQHJldHVybiB7IVJlZ0V4cH1cbiAqL1xuZnVuY3Rpb24gc3RyaW5nVG9SZWdleHAgKHBhdGgsIGtleXMsIG9wdGlvbnMpIHtcbiAgcmV0dXJuIHRva2Vuc1RvUmVnRXhwKHBhcnNlKHBhdGgsIG9wdGlvbnMpLCBrZXlzLCBvcHRpb25zKVxufVxuXG4vKipcbiAqIEV4cG9zZSBhIGZ1bmN0aW9uIGZvciB0YWtpbmcgdG9rZW5zIGFuZCByZXR1cm5pbmcgYSBSZWdFeHAuXG4gKlxuICogQHBhcmFtICB7IUFycmF5fSAgICAgICAgICB0b2tlbnNcbiAqIEBwYXJhbSAgeyhBcnJheXxPYmplY3QpPX0ga2V5c1xuICogQHBhcmFtICB7T2JqZWN0PX0gICAgICAgICBvcHRpb25zXG4gKiBAcmV0dXJuIHshUmVnRXhwfVxuICovXG5mdW5jdGlvbiB0b2tlbnNUb1JlZ0V4cCAodG9rZW5zLCBrZXlzLCBvcHRpb25zKSB7XG4gIGlmICghaXNhcnJheShrZXlzKSkge1xuICAgIG9wdGlvbnMgPSAvKiogQHR5cGUgeyFPYmplY3R9ICovIChrZXlzIHx8IG9wdGlvbnMpXG4gICAga2V5cyA9IFtdXG4gIH1cblxuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fVxuXG4gIHZhciBzdHJpY3QgPSBvcHRpb25zLnN0cmljdFxuICB2YXIgZW5kID0gb3B0aW9ucy5lbmQgIT09IGZhbHNlXG4gIHZhciByb3V0ZSA9ICcnXG5cbiAgLy8gSXRlcmF0ZSBvdmVyIHRoZSB0b2tlbnMgYW5kIGNyZWF0ZSBvdXIgcmVnZXhwIHN0cmluZy5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCB0b2tlbnMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgdG9rZW4gPSB0b2tlbnNbaV1cblxuICAgIGlmICh0eXBlb2YgdG9rZW4gPT09ICdzdHJpbmcnKSB7XG4gICAgICByb3V0ZSArPSBlc2NhcGVTdHJpbmcodG9rZW4pXG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBwcmVmaXggPSBlc2NhcGVTdHJpbmcodG9rZW4ucHJlZml4KVxuICAgICAgdmFyIGNhcHR1cmUgPSAnKD86JyArIHRva2VuLnBhdHRlcm4gKyAnKSdcblxuICAgICAga2V5cy5wdXNoKHRva2VuKVxuXG4gICAgICBpZiAodG9rZW4ucmVwZWF0KSB7XG4gICAgICAgIGNhcHR1cmUgKz0gJyg/OicgKyBwcmVmaXggKyBjYXB0dXJlICsgJykqJ1xuICAgICAgfVxuXG4gICAgICBpZiAodG9rZW4ub3B0aW9uYWwpIHtcbiAgICAgICAgaWYgKCF0b2tlbi5wYXJ0aWFsKSB7XG4gICAgICAgICAgY2FwdHVyZSA9ICcoPzonICsgcHJlZml4ICsgJygnICsgY2FwdHVyZSArICcpKT8nXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY2FwdHVyZSA9IHByZWZpeCArICcoJyArIGNhcHR1cmUgKyAnKT8nXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNhcHR1cmUgPSBwcmVmaXggKyAnKCcgKyBjYXB0dXJlICsgJyknXG4gICAgICB9XG5cbiAgICAgIHJvdXRlICs9IGNhcHR1cmVcbiAgICB9XG4gIH1cblxuICB2YXIgZGVsaW1pdGVyID0gZXNjYXBlU3RyaW5nKG9wdGlvbnMuZGVsaW1pdGVyIHx8ICcvJylcbiAgdmFyIGVuZHNXaXRoRGVsaW1pdGVyID0gcm91dGUuc2xpY2UoLWRlbGltaXRlci5sZW5ndGgpID09PSBkZWxpbWl0ZXJcblxuICAvLyBJbiBub24tc3RyaWN0IG1vZGUgd2UgYWxsb3cgYSBzbGFzaCBhdCB0aGUgZW5kIG9mIG1hdGNoLiBJZiB0aGUgcGF0aCB0b1xuICAvLyBtYXRjaCBhbHJlYWR5IGVuZHMgd2l0aCBhIHNsYXNoLCB3ZSByZW1vdmUgaXQgZm9yIGNvbnNpc3RlbmN5LiBUaGUgc2xhc2hcbiAgLy8gaXMgdmFsaWQgYXQgdGhlIGVuZCBvZiBhIHBhdGggbWF0Y2gsIG5vdCBpbiB0aGUgbWlkZGxlLiBUaGlzIGlzIGltcG9ydGFudFxuICAvLyBpbiBub24tZW5kaW5nIG1vZGUsIHdoZXJlIFwiL3Rlc3QvXCIgc2hvdWxkbid0IG1hdGNoIFwiL3Rlc3QvL3JvdXRlXCIuXG4gIGlmICghc3RyaWN0KSB7XG4gICAgcm91dGUgPSAoZW5kc1dpdGhEZWxpbWl0ZXIgPyByb3V0ZS5zbGljZSgwLCAtZGVsaW1pdGVyLmxlbmd0aCkgOiByb3V0ZSkgKyAnKD86JyArIGRlbGltaXRlciArICcoPz0kKSk/J1xuICB9XG5cbiAgaWYgKGVuZCkge1xuICAgIHJvdXRlICs9ICckJ1xuICB9IGVsc2Uge1xuICAgIC8vIEluIG5vbi1lbmRpbmcgbW9kZSwgd2UgbmVlZCB0aGUgY2FwdHVyaW5nIGdyb3VwcyB0byBtYXRjaCBhcyBtdWNoIGFzXG4gICAgLy8gcG9zc2libGUgYnkgdXNpbmcgYSBwb3NpdGl2ZSBsb29rYWhlYWQgdG8gdGhlIGVuZCBvciBuZXh0IHBhdGggc2VnbWVudC5cbiAgICByb3V0ZSArPSBzdHJpY3QgJiYgZW5kc1dpdGhEZWxpbWl0ZXIgPyAnJyA6ICcoPz0nICsgZGVsaW1pdGVyICsgJ3wkKSdcbiAgfVxuXG4gIHJldHVybiBhdHRhY2hLZXlzKG5ldyBSZWdFeHAoJ14nICsgcm91dGUsIGZsYWdzKG9wdGlvbnMpKSwga2V5cylcbn1cblxuLyoqXG4gKiBOb3JtYWxpemUgdGhlIGdpdmVuIHBhdGggc3RyaW5nLCByZXR1cm5pbmcgYSByZWd1bGFyIGV4cHJlc3Npb24uXG4gKlxuICogQW4gZW1wdHkgYXJyYXkgY2FuIGJlIHBhc3NlZCBpbiBmb3IgdGhlIGtleXMsIHdoaWNoIHdpbGwgaG9sZCB0aGVcbiAqIHBsYWNlaG9sZGVyIGtleSBkZXNjcmlwdGlvbnMuIEZvciBleGFtcGxlLCB1c2luZyBgL3VzZXIvOmlkYCwgYGtleXNgIHdpbGxcbiAqIGNvbnRhaW4gYFt7IG5hbWU6ICdpZCcsIGRlbGltaXRlcjogJy8nLCBvcHRpb25hbDogZmFsc2UsIHJlcGVhdDogZmFsc2UgfV1gLlxuICpcbiAqIEBwYXJhbSAgeyhzdHJpbmd8UmVnRXhwfEFycmF5KX0gcGF0aFxuICogQHBhcmFtICB7KEFycmF5fE9iamVjdCk9fSAgICAgICBrZXlzXG4gKiBAcGFyYW0gIHtPYmplY3Q9fSAgICAgICAgICAgICAgIG9wdGlvbnNcbiAqIEByZXR1cm4geyFSZWdFeHB9XG4gKi9cbmZ1bmN0aW9uIHBhdGhUb1JlZ2V4cCAocGF0aCwga2V5cywgb3B0aW9ucykge1xuICBpZiAoIWlzYXJyYXkoa2V5cykpIHtcbiAgICBvcHRpb25zID0gLyoqIEB0eXBlIHshT2JqZWN0fSAqLyAoa2V5cyB8fCBvcHRpb25zKVxuICAgIGtleXMgPSBbXVxuICB9XG5cbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge31cblxuICBpZiAocGF0aCBpbnN0YW5jZW9mIFJlZ0V4cCkge1xuICAgIHJldHVybiByZWdleHBUb1JlZ2V4cChwYXRoLCAvKiogQHR5cGUgeyFBcnJheX0gKi8gKGtleXMpKVxuICB9XG5cbiAgaWYgKGlzYXJyYXkocGF0aCkpIHtcbiAgICByZXR1cm4gYXJyYXlUb1JlZ2V4cCgvKiogQHR5cGUgeyFBcnJheX0gKi8gKHBhdGgpLCAvKiogQHR5cGUgeyFBcnJheX0gKi8gKGtleXMpLCBvcHRpb25zKVxuICB9XG5cbiAgcmV0dXJuIHN0cmluZ1RvUmVnZXhwKC8qKiBAdHlwZSB7c3RyaW5nfSAqLyAocGF0aCksIC8qKiBAdHlwZSB7IUFycmF5fSAqLyAoa2V5cyksIG9wdGlvbnMpXG59XG5cbmluZGV4LnBhcnNlID0gcGFyc2VfMTtcbmluZGV4LmNvbXBpbGUgPSBjb21waWxlXzE7XG5pbmRleC50b2tlbnNUb0Z1bmN0aW9uID0gdG9rZW5zVG9GdW5jdGlvbl8xO1xuaW5kZXgudG9rZW5zVG9SZWdFeHAgPSB0b2tlbnNUb1JlZ0V4cF8xO1xuXG4vKiAgKi9cblxuZnVuY3Rpb24gY3JlYXRlUm91dGVNYXAgKHJvdXRlcykge1xuICB2YXIgcGF0aE1hcCA9IE9iamVjdC5jcmVhdGUobnVsbClcbiAgdmFyIG5hbWVNYXAgPSBPYmplY3QuY3JlYXRlKG51bGwpXG5cbiAgcm91dGVzLmZvckVhY2goZnVuY3Rpb24gKHJvdXRlKSB7XG4gICAgYWRkUm91dGVSZWNvcmQocGF0aE1hcCwgbmFtZU1hcCwgcm91dGUpXG4gIH0pXG5cbiAgcmV0dXJuIHtcbiAgICBwYXRoTWFwOiBwYXRoTWFwLFxuICAgIG5hbWVNYXA6IG5hbWVNYXBcbiAgfVxufVxuXG5mdW5jdGlvbiBhZGRSb3V0ZVJlY29yZCAoXG4gIHBhdGhNYXAsXG4gIG5hbWVNYXAsXG4gIHJvdXRlLFxuICBwYXJlbnQsXG4gIG1hdGNoQXNcbikge1xuICB2YXIgcGF0aCA9IHJvdXRlLnBhdGg7XG4gIHZhciBuYW1lID0gcm91dGUubmFtZTtcbiAgYXNzZXJ0KHBhdGggIT0gbnVsbCwgXCJcXFwicGF0aFxcXCIgaXMgcmVxdWlyZWQgaW4gYSByb3V0ZSBjb25maWd1cmF0aW9uLlwiKVxuXG4gIHZhciByZWNvcmQgPSB7XG4gICAgcGF0aDogbm9ybWFsaXplUGF0aChwYXRoLCBwYXJlbnQpLFxuICAgIGNvbXBvbmVudHM6IHJvdXRlLmNvbXBvbmVudHMgfHwgeyBkZWZhdWx0OiByb3V0ZS5jb21wb25lbnQgfSxcbiAgICBpbnN0YW5jZXM6IHt9LFxuICAgIG5hbWU6IG5hbWUsXG4gICAgcGFyZW50OiBwYXJlbnQsXG4gICAgbWF0Y2hBczogbWF0Y2hBcyxcbiAgICByZWRpcmVjdDogcm91dGUucmVkaXJlY3QsXG4gICAgYmVmb3JlRW50ZXI6IHJvdXRlLmJlZm9yZUVudGVyLFxuICAgIG1ldGE6IHJvdXRlLm1ldGEgfHwge31cbiAgfVxuXG4gIGlmIChyb3V0ZS5jaGlsZHJlbikge1xuICAgIC8vIFdhcm4gaWYgcm91dGUgaXMgbmFtZWQgYW5kIGhhcyBhIGRlZmF1bHQgY2hpbGQgcm91dGUuXG4gICAgLy8gSWYgdXNlcnMgbmF2aWdhdGUgdG8gdGhpcyByb3V0ZSBieSBuYW1lLCB0aGUgZGVmYXVsdCBjaGlsZCB3aWxsXG4gICAgLy8gbm90IGJlIHJlbmRlcmVkIChHSCBJc3N1ZSAjNjI5KVxuICAgIGlmIChcInByb2R1Y3Rpb25cIiAhPT0gJ3Byb2R1Y3Rpb24nKSB7fVxuICAgIHJvdXRlLmNoaWxkcmVuLmZvckVhY2goZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgICBhZGRSb3V0ZVJlY29yZChwYXRoTWFwLCBuYW1lTWFwLCBjaGlsZCwgcmVjb3JkKVxuICAgIH0pXG4gIH1cblxuICBpZiAocm91dGUuYWxpYXMgIT09IHVuZGVmaW5lZCkge1xuICAgIGlmIChBcnJheS5pc0FycmF5KHJvdXRlLmFsaWFzKSkge1xuICAgICAgcm91dGUuYWxpYXMuZm9yRWFjaChmdW5jdGlvbiAoYWxpYXMpIHtcbiAgICAgICAgYWRkUm91dGVSZWNvcmQocGF0aE1hcCwgbmFtZU1hcCwgeyBwYXRoOiBhbGlhcyB9LCBwYXJlbnQsIHJlY29yZC5wYXRoKVxuICAgICAgfSlcbiAgICB9IGVsc2Uge1xuICAgICAgYWRkUm91dGVSZWNvcmQocGF0aE1hcCwgbmFtZU1hcCwgeyBwYXRoOiByb3V0ZS5hbGlhcyB9LCBwYXJlbnQsIHJlY29yZC5wYXRoKVxuICAgIH1cbiAgfVxuXG4gIHBhdGhNYXBbcmVjb3JkLnBhdGhdID0gcmVjb3JkXG4gIGlmIChuYW1lKSB7XG4gICAgaWYgKCFuYW1lTWFwW25hbWVdKSB7XG4gICAgICBuYW1lTWFwW25hbWVdID0gcmVjb3JkXG4gICAgfSBlbHNlIHtcbiAgICAgIHdhcm4oZmFsc2UsIChcIkR1cGxpY2F0ZSBuYW1lZCByb3V0ZXMgZGVmaW5pdGlvbjogeyBuYW1lOiBcXFwiXCIgKyBuYW1lICsgXCJcXFwiLCBwYXRoOiBcXFwiXCIgKyAocmVjb3JkLnBhdGgpICsgXCJcXFwiIH1cIikpXG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIG5vcm1hbGl6ZVBhdGggKHBhdGgsIHBhcmVudCkge1xuICBwYXRoID0gcGF0aC5yZXBsYWNlKC9cXC8kLywgJycpXG4gIGlmIChwYXRoWzBdID09PSAnLycpIHsgcmV0dXJuIHBhdGggfVxuICBpZiAocGFyZW50ID09IG51bGwpIHsgcmV0dXJuIHBhdGggfVxuICByZXR1cm4gY2xlYW5QYXRoKCgocGFyZW50LnBhdGgpICsgXCIvXCIgKyBwYXRoKSlcbn1cblxuLyogICovXG5cbnZhciByZWdleHBDYWNoZSA9IE9iamVjdC5jcmVhdGUobnVsbClcblxudmFyIHJlZ2V4cFBhcmFtc0NhY2hlID0gT2JqZWN0LmNyZWF0ZShudWxsKVxuXG52YXIgcmVnZXhwQ29tcGlsZUNhY2hlID0gT2JqZWN0LmNyZWF0ZShudWxsKVxuXG5mdW5jdGlvbiBjcmVhdGVNYXRjaGVyIChyb3V0ZXMpIHtcbiAgdmFyIHJlZiA9IGNyZWF0ZVJvdXRlTWFwKHJvdXRlcyk7XG4gIHZhciBwYXRoTWFwID0gcmVmLnBhdGhNYXA7XG4gIHZhciBuYW1lTWFwID0gcmVmLm5hbWVNYXA7XG5cbiAgZnVuY3Rpb24gbWF0Y2ggKFxuICAgIHJhdyxcbiAgICBjdXJyZW50Um91dGUsXG4gICAgcmVkaXJlY3RlZEZyb21cbiAgKSB7XG4gICAgdmFyIGxvY2F0aW9uID0gbm9ybWFsaXplTG9jYXRpb24ocmF3LCBjdXJyZW50Um91dGUpXG4gICAgdmFyIG5hbWUgPSBsb2NhdGlvbi5uYW1lO1xuXG4gICAgaWYgKG5hbWUpIHtcbiAgICAgIHZhciByZWNvcmQgPSBuYW1lTWFwW25hbWVdXG4gICAgICB2YXIgcGFyYW1OYW1lcyA9IGdldFBhcmFtcyhyZWNvcmQucGF0aClcblxuICAgICAgaWYgKHR5cGVvZiBsb2NhdGlvbi5wYXJhbXMgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIGxvY2F0aW9uLnBhcmFtcyA9IHt9XG4gICAgICB9XG5cbiAgICAgIGlmIChjdXJyZW50Um91dGUgJiYgdHlwZW9mIGN1cnJlbnRSb3V0ZS5wYXJhbXMgPT09ICdvYmplY3QnKSB7XG4gICAgICAgIGZvciAodmFyIGtleSBpbiBjdXJyZW50Um91dGUucGFyYW1zKSB7XG4gICAgICAgICAgaWYgKCEoa2V5IGluIGxvY2F0aW9uLnBhcmFtcykgJiYgcGFyYW1OYW1lcy5pbmRleE9mKGtleSkgPiAtMSkge1xuICAgICAgICAgICAgbG9jYXRpb24ucGFyYW1zW2tleV0gPSBjdXJyZW50Um91dGUucGFyYW1zW2tleV1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHJlY29yZCkge1xuICAgICAgICBsb2NhdGlvbi5wYXRoID0gZmlsbFBhcmFtcyhyZWNvcmQucGF0aCwgbG9jYXRpb24ucGFyYW1zLCAoXCJuYW1lZCByb3V0ZSBcXFwiXCIgKyBuYW1lICsgXCJcXFwiXCIpKVxuICAgICAgICByZXR1cm4gX2NyZWF0ZVJvdXRlKHJlY29yZCwgbG9jYXRpb24sIHJlZGlyZWN0ZWRGcm9tKVxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAobG9jYXRpb24ucGF0aCkge1xuICAgICAgbG9jYXRpb24ucGFyYW1zID0ge31cbiAgICAgIGZvciAodmFyIHBhdGggaW4gcGF0aE1hcCkge1xuICAgICAgICBpZiAobWF0Y2hSb3V0ZShwYXRoLCBsb2NhdGlvbi5wYXJhbXMsIGxvY2F0aW9uLnBhdGgpKSB7XG4gICAgICAgICAgcmV0dXJuIF9jcmVhdGVSb3V0ZShwYXRoTWFwW3BhdGhdLCBsb2NhdGlvbiwgcmVkaXJlY3RlZEZyb20pXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgLy8gbm8gbWF0Y2hcbiAgICByZXR1cm4gX2NyZWF0ZVJvdXRlKG51bGwsIGxvY2F0aW9uKVxuICB9XG5cbiAgZnVuY3Rpb24gcmVkaXJlY3QgKFxuICAgIHJlY29yZCxcbiAgICBsb2NhdGlvblxuICApIHtcbiAgICB2YXIgb3JpZ2luYWxSZWRpcmVjdCA9IHJlY29yZC5yZWRpcmVjdFxuICAgIHZhciByZWRpcmVjdCA9IHR5cGVvZiBvcmlnaW5hbFJlZGlyZWN0ID09PSAnZnVuY3Rpb24nXG4gICAgICAgID8gb3JpZ2luYWxSZWRpcmVjdChjcmVhdGVSb3V0ZShyZWNvcmQsIGxvY2F0aW9uKSlcbiAgICAgICAgOiBvcmlnaW5hbFJlZGlyZWN0XG5cbiAgICBpZiAodHlwZW9mIHJlZGlyZWN0ID09PSAnc3RyaW5nJykge1xuICAgICAgcmVkaXJlY3QgPSB7IHBhdGg6IHJlZGlyZWN0IH1cbiAgICB9XG5cbiAgICBpZiAoIXJlZGlyZWN0IHx8IHR5cGVvZiByZWRpcmVjdCAhPT0gJ29iamVjdCcpIHtcbiAgICAgIHdhcm4oZmFsc2UsIChcImludmFsaWQgcmVkaXJlY3Qgb3B0aW9uOiBcIiArIChKU09OLnN0cmluZ2lmeShyZWRpcmVjdCkpKSlcbiAgICAgIHJldHVybiBfY3JlYXRlUm91dGUobnVsbCwgbG9jYXRpb24pXG4gICAgfVxuXG4gICAgdmFyIHJlID0gcmVkaXJlY3RcbiAgICB2YXIgbmFtZSA9IHJlLm5hbWU7XG4gICAgdmFyIHBhdGggPSByZS5wYXRoO1xuICAgIHZhciBxdWVyeSA9IGxvY2F0aW9uLnF1ZXJ5O1xuICAgIHZhciBoYXNoID0gbG9jYXRpb24uaGFzaDtcbiAgICB2YXIgcGFyYW1zID0gbG9jYXRpb24ucGFyYW1zO1xuICAgIHF1ZXJ5ID0gcmUuaGFzT3duUHJvcGVydHkoJ3F1ZXJ5JykgPyByZS5xdWVyeSA6IHF1ZXJ5XG4gICAgaGFzaCA9IHJlLmhhc093blByb3BlcnR5KCdoYXNoJykgPyByZS5oYXNoIDogaGFzaFxuICAgIHBhcmFtcyA9IHJlLmhhc093blByb3BlcnR5KCdwYXJhbXMnKSA/IHJlLnBhcmFtcyA6IHBhcmFtc1xuXG4gICAgaWYgKG5hbWUpIHtcbiAgICAgIC8vIHJlc29sdmVkIG5hbWVkIGRpcmVjdFxuICAgICAgdmFyIHRhcmdldFJlY29yZCA9IG5hbWVNYXBbbmFtZV1cbiAgICAgIGFzc2VydCh0YXJnZXRSZWNvcmQsIChcInJlZGlyZWN0IGZhaWxlZDogbmFtZWQgcm91dGUgXFxcIlwiICsgbmFtZSArIFwiXFxcIiBub3QgZm91bmQuXCIpKVxuICAgICAgcmV0dXJuIG1hdGNoKHtcbiAgICAgICAgX25vcm1hbGl6ZWQ6IHRydWUsXG4gICAgICAgIG5hbWU6IG5hbWUsXG4gICAgICAgIHF1ZXJ5OiBxdWVyeSxcbiAgICAgICAgaGFzaDogaGFzaCxcbiAgICAgICAgcGFyYW1zOiBwYXJhbXNcbiAgICAgIH0sIHVuZGVmaW5lZCwgbG9jYXRpb24pXG4gICAgfSBlbHNlIGlmIChwYXRoKSB7XG4gICAgICAvLyAxLiByZXNvbHZlIHJlbGF0aXZlIHJlZGlyZWN0XG4gICAgICB2YXIgcmF3UGF0aCA9IHJlc29sdmVSZWNvcmRQYXRoKHBhdGgsIHJlY29yZClcbiAgICAgIC8vIDIuIHJlc29sdmUgcGFyYW1zXG4gICAgICB2YXIgcmVzb2x2ZWRQYXRoID0gZmlsbFBhcmFtcyhyYXdQYXRoLCBwYXJhbXMsIChcInJlZGlyZWN0IHJvdXRlIHdpdGggcGF0aCBcXFwiXCIgKyByYXdQYXRoICsgXCJcXFwiXCIpKVxuICAgICAgLy8gMy4gcmVtYXRjaCB3aXRoIGV4aXN0aW5nIHF1ZXJ5IGFuZCBoYXNoXG4gICAgICByZXR1cm4gbWF0Y2goe1xuICAgICAgICBfbm9ybWFsaXplZDogdHJ1ZSxcbiAgICAgICAgcGF0aDogcmVzb2x2ZWRQYXRoLFxuICAgICAgICBxdWVyeTogcXVlcnksXG4gICAgICAgIGhhc2g6IGhhc2hcbiAgICAgIH0sIHVuZGVmaW5lZCwgbG9jYXRpb24pXG4gICAgfSBlbHNlIHtcbiAgICAgIHdhcm4oZmFsc2UsIChcImludmFsaWQgcmVkaXJlY3Qgb3B0aW9uOiBcIiArIChKU09OLnN0cmluZ2lmeShyZWRpcmVjdCkpKSlcbiAgICAgIHJldHVybiBfY3JlYXRlUm91dGUobnVsbCwgbG9jYXRpb24pXG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gYWxpYXMgKFxuICAgIHJlY29yZCxcbiAgICBsb2NhdGlvbixcbiAgICBtYXRjaEFzXG4gICkge1xuICAgIHZhciBhbGlhc2VkUGF0aCA9IGZpbGxQYXJhbXMobWF0Y2hBcywgbG9jYXRpb24ucGFyYW1zLCAoXCJhbGlhc2VkIHJvdXRlIHdpdGggcGF0aCBcXFwiXCIgKyBtYXRjaEFzICsgXCJcXFwiXCIpKVxuICAgIHZhciBhbGlhc2VkTWF0Y2ggPSBtYXRjaCh7XG4gICAgICBfbm9ybWFsaXplZDogdHJ1ZSxcbiAgICAgIHBhdGg6IGFsaWFzZWRQYXRoXG4gICAgfSlcbiAgICBpZiAoYWxpYXNlZE1hdGNoKSB7XG4gICAgICB2YXIgbWF0Y2hlZCA9IGFsaWFzZWRNYXRjaC5tYXRjaGVkXG4gICAgICB2YXIgYWxpYXNlZFJlY29yZCA9IG1hdGNoZWRbbWF0Y2hlZC5sZW5ndGggLSAxXVxuICAgICAgbG9jYXRpb24ucGFyYW1zID0gYWxpYXNlZE1hdGNoLnBhcmFtc1xuICAgICAgcmV0dXJuIF9jcmVhdGVSb3V0ZShhbGlhc2VkUmVjb3JkLCBsb2NhdGlvbilcbiAgICB9XG4gICAgcmV0dXJuIF9jcmVhdGVSb3V0ZShudWxsLCBsb2NhdGlvbilcbiAgfVxuXG4gIGZ1bmN0aW9uIF9jcmVhdGVSb3V0ZSAoXG4gICAgcmVjb3JkLFxuICAgIGxvY2F0aW9uLFxuICAgIHJlZGlyZWN0ZWRGcm9tXG4gICkge1xuICAgIGlmIChyZWNvcmQgJiYgcmVjb3JkLnJlZGlyZWN0KSB7XG4gICAgICByZXR1cm4gcmVkaXJlY3QocmVjb3JkLCByZWRpcmVjdGVkRnJvbSB8fCBsb2NhdGlvbilcbiAgICB9XG4gICAgaWYgKHJlY29yZCAmJiByZWNvcmQubWF0Y2hBcykge1xuICAgICAgcmV0dXJuIGFsaWFzKHJlY29yZCwgbG9jYXRpb24sIHJlY29yZC5tYXRjaEFzKVxuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlUm91dGUocmVjb3JkLCBsb2NhdGlvbiwgcmVkaXJlY3RlZEZyb20pXG4gIH1cblxuICByZXR1cm4gbWF0Y2hcbn1cblxuZnVuY3Rpb24gZ2V0Um91dGVSZWdleCAocGF0aCkge1xuICB2YXIgaGl0ID0gcmVnZXhwQ2FjaGVbcGF0aF1cbiAgdmFyIGtleXMsIHJlZ2V4cFxuXG4gIGlmIChoaXQpIHtcbiAgICBrZXlzID0gaGl0LmtleXNcbiAgICByZWdleHAgPSBoaXQucmVnZXhwXG4gIH0gZWxzZSB7XG4gICAga2V5cyA9IFtdXG4gICAgcmVnZXhwID0gaW5kZXgocGF0aCwga2V5cylcbiAgICByZWdleHBDYWNoZVtwYXRoXSA9IHsga2V5czoga2V5cywgcmVnZXhwOiByZWdleHAgfVxuICB9XG5cbiAgcmV0dXJuIHsga2V5czoga2V5cywgcmVnZXhwOiByZWdleHAgfVxufVxuXG5mdW5jdGlvbiBtYXRjaFJvdXRlIChcbiAgcGF0aCxcbiAgcGFyYW1zLFxuICBwYXRobmFtZVxuKSB7XG4gIHZhciByZWYgPSBnZXRSb3V0ZVJlZ2V4KHBhdGgpO1xuICB2YXIgcmVnZXhwID0gcmVmLnJlZ2V4cDtcbiAgdmFyIGtleXMgPSByZWYua2V5cztcbiAgdmFyIG0gPSBwYXRobmFtZS5tYXRjaChyZWdleHApXG5cbiAgaWYgKCFtKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH0gZWxzZSBpZiAoIXBhcmFtcykge1xuICAgIHJldHVybiB0cnVlXG4gIH1cblxuICBmb3IgKHZhciBpID0gMSwgbGVuID0gbS5sZW5ndGg7IGkgPCBsZW47ICsraSkge1xuICAgIHZhciBrZXkgPSBrZXlzW2kgLSAxXVxuICAgIHZhciB2YWwgPSB0eXBlb2YgbVtpXSA9PT0gJ3N0cmluZycgPyBkZWNvZGVVUklDb21wb25lbnQobVtpXSkgOiBtW2ldXG4gICAgaWYgKGtleSkgeyBwYXJhbXNba2V5Lm5hbWVdID0gdmFsIH1cbiAgfVxuXG4gIHJldHVybiB0cnVlXG59XG5cbmZ1bmN0aW9uIGZpbGxQYXJhbXMgKFxuICBwYXRoLFxuICBwYXJhbXMsXG4gIHJvdXRlTXNnXG4pIHtcbiAgdHJ5IHtcbiAgICB2YXIgZmlsbGVyID1cbiAgICAgIHJlZ2V4cENvbXBpbGVDYWNoZVtwYXRoXSB8fFxuICAgICAgKHJlZ2V4cENvbXBpbGVDYWNoZVtwYXRoXSA9IGluZGV4LmNvbXBpbGUocGF0aCkpXG4gICAgcmV0dXJuIGZpbGxlcihwYXJhbXMgfHwge30sIHsgcHJldHR5OiB0cnVlIH0pXG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBhc3NlcnQoZmFsc2UsIChcIm1pc3NpbmcgcGFyYW0gZm9yIFwiICsgcm91dGVNc2cgKyBcIjogXCIgKyAoZS5tZXNzYWdlKSkpXG4gICAgcmV0dXJuICcnXG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0UGFyYW1zIChwYXRoKSB7XG4gIHJldHVybiByZWdleHBQYXJhbXNDYWNoZVtwYXRoXSB8fFxuICAgIChyZWdleHBQYXJhbXNDYWNoZVtwYXRoXSA9IGdldFJvdXRlUmVnZXgocGF0aCkua2V5cy5tYXAoZnVuY3Rpb24gKGtleSkgeyByZXR1cm4ga2V5Lm5hbWU7IH0pKVxufVxuXG5mdW5jdGlvbiByZXNvbHZlUmVjb3JkUGF0aCAocGF0aCwgcmVjb3JkKSB7XG4gIHJldHVybiByZXNvbHZlUGF0aChwYXRoLCByZWNvcmQucGFyZW50ID8gcmVjb3JkLnBhcmVudC5wYXRoIDogJy8nLCB0cnVlKVxufVxuXG4vKiAgKi9cblxudmFyIGluQnJvd3NlciA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnXG5cbnZhciBzdXBwb3J0c0hpc3RvcnkgPSBpbkJyb3dzZXIgJiYgKGZ1bmN0aW9uICgpIHtcbiAgdmFyIHVhID0gd2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnRcblxuICBpZiAoXG4gICAgKHVhLmluZGV4T2YoJ0FuZHJvaWQgMi4nKSAhPT0gLTEgfHwgdWEuaW5kZXhPZignQW5kcm9pZCA0LjAnKSAhPT0gLTEpICYmXG4gICAgdWEuaW5kZXhPZignTW9iaWxlIFNhZmFyaScpICE9PSAtMSAmJlxuICAgIHVhLmluZGV4T2YoJ0Nocm9tZScpID09PSAtMSAmJlxuICAgIHVhLmluZGV4T2YoJ1dpbmRvd3MgUGhvbmUnKSA9PT0gLTFcbiAgKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICByZXR1cm4gd2luZG93Lmhpc3RvcnkgJiYgJ3B1c2hTdGF0ZScgaW4gd2luZG93Lmhpc3Rvcnlcbn0pKClcblxuLyogICovXG5cbmZ1bmN0aW9uIHJ1blF1ZXVlIChxdWV1ZSwgZm4sIGNiKSB7XG4gIHZhciBzdGVwID0gZnVuY3Rpb24gKGluZGV4KSB7XG4gICAgaWYgKGluZGV4ID49IHF1ZXVlLmxlbmd0aCkge1xuICAgICAgY2IoKVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAocXVldWVbaW5kZXhdKSB7XG4gICAgICAgIGZuKHF1ZXVlW2luZGV4XSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHN0ZXAoaW5kZXggKyAxKVxuICAgICAgICB9KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc3RlcChpbmRleCArIDEpXG4gICAgICB9XG4gICAgfVxuICB9XG4gIHN0ZXAoMClcbn1cblxuLyogICovXG5cblxudmFyIEhpc3RvcnkgPSBmdW5jdGlvbiBIaXN0b3J5IChyb3V0ZXIsIGJhc2UpIHtcbiAgdGhpcy5yb3V0ZXIgPSByb3V0ZXJcbiAgdGhpcy5iYXNlID0gbm9ybWFsaXplQmFzZShiYXNlKVxuICAvLyBzdGFydCB3aXRoIGEgcm91dGUgb2JqZWN0IHRoYXQgc3RhbmRzIGZvciBcIm5vd2hlcmVcIlxuICB0aGlzLmN1cnJlbnQgPSBTVEFSVFxuICB0aGlzLnBlbmRpbmcgPSBudWxsXG59O1xuXG5IaXN0b3J5LnByb3RvdHlwZS5saXN0ZW4gPSBmdW5jdGlvbiBsaXN0ZW4gKGNiKSB7XG4gIHRoaXMuY2IgPSBjYlxufTtcblxuSGlzdG9yeS5wcm90b3R5cGUudHJhbnNpdGlvblRvID0gZnVuY3Rpb24gdHJhbnNpdGlvblRvIChsb2NhdGlvbiwgY2IpIHtcbiAgICB2YXIgdGhpcyQxID0gdGhpcztcblxuICB2YXIgcm91dGUgPSB0aGlzLnJvdXRlci5tYXRjaChsb2NhdGlvbiwgdGhpcy5jdXJyZW50KVxuICB0aGlzLmNvbmZpcm1UcmFuc2l0aW9uKHJvdXRlLCBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcyQxLnVwZGF0ZVJvdXRlKHJvdXRlKVxuICAgIGNiICYmIGNiKHJvdXRlKVxuICAgIHRoaXMkMS5lbnN1cmVVUkwoKVxuICB9KVxufTtcblxuSGlzdG9yeS5wcm90b3R5cGUuY29uZmlybVRyYW5zaXRpb24gPSBmdW5jdGlvbiBjb25maXJtVHJhbnNpdGlvbiAocm91dGUsIGNiKSB7XG4gICAgdmFyIHRoaXMkMSA9IHRoaXM7XG5cbiAgdmFyIGN1cnJlbnQgPSB0aGlzLmN1cnJlbnRcbiAgaWYgKGlzU2FtZVJvdXRlKHJvdXRlLCBjdXJyZW50KSkge1xuICAgIHRoaXMuZW5zdXJlVVJMKClcbiAgICByZXR1cm5cbiAgfVxuXG4gIHZhciByZWYgPSByZXNvbHZlUXVldWUodGhpcy5jdXJyZW50Lm1hdGNoZWQsIHJvdXRlLm1hdGNoZWQpO1xuICAgIHZhciBkZWFjdGl2YXRlZCA9IHJlZi5kZWFjdGl2YXRlZDtcbiAgICB2YXIgYWN0aXZhdGVkID0gcmVmLmFjdGl2YXRlZDtcblxuICB2YXIgcXVldWUgPSBbXS5jb25jYXQoXG4gICAgLy8gaW4tY29tcG9uZW50IGxlYXZlIGd1YXJkc1xuICAgIGV4dHJhY3RMZWF2ZUd1YXJkcyhkZWFjdGl2YXRlZCksXG4gICAgLy8gZ2xvYmFsIGJlZm9yZSBob29rc1xuICAgIHRoaXMucm91dGVyLmJlZm9yZUhvb2tzLFxuICAgIC8vIGVudGVyIGd1YXJkc1xuICAgIGFjdGl2YXRlZC5tYXAoZnVuY3Rpb24gKG0pIHsgcmV0dXJuIG0uYmVmb3JlRW50ZXI7IH0pLFxuICAgIC8vIGFzeW5jIGNvbXBvbmVudHNcbiAgICByZXNvbHZlQXN5bmNDb21wb25lbnRzKGFjdGl2YXRlZClcbiAgKVxuXG4gIHRoaXMucGVuZGluZyA9IHJvdXRlXG4gIHZhciBpdGVyYXRvciA9IGZ1bmN0aW9uIChob29rLCBuZXh0KSB7XG4gICAgaWYgKHRoaXMkMS5wZW5kaW5nICE9PSByb3V0ZSkgeyByZXR1cm4gfVxuICAgIGhvb2socm91dGUsIGN1cnJlbnQsIGZ1bmN0aW9uICh0bykge1xuICAgICAgaWYgKHRvID09PSBmYWxzZSkge1xuICAgICAgICAvLyBuZXh0KGZhbHNlKSAtPiBhYm9ydCBuYXZpZ2F0aW9uLCBlbnN1cmUgY3VycmVudCBVUkxcbiAgICAgICAgdGhpcyQxLmVuc3VyZVVSTCh0cnVlKVxuICAgICAgfSBlbHNlIGlmICh0eXBlb2YgdG8gPT09ICdzdHJpbmcnIHx8IHR5cGVvZiB0byA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgLy8gbmV4dCgnLycpIG9yIG5leHQoeyBwYXRoOiAnLycgfSkgLT4gcmVkaXJlY3RcbiAgICAgICAgdGhpcyQxLnB1c2godG8pXG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBjb25maXJtIHRyYW5zaXRpb24gYW5kIHBhc3Mgb24gdGhlIHZhbHVlXG4gICAgICAgIG5leHQodG8pXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIHJ1blF1ZXVlKHF1ZXVlLCBpdGVyYXRvciwgZnVuY3Rpb24gKCkge1xuICAgIHZhciBwb3N0RW50ZXJDYnMgPSBbXVxuICAgIHZhciBlbnRlckd1YXJkcyA9IGV4dHJhY3RFbnRlckd1YXJkcyhhY3RpdmF0ZWQsIHBvc3RFbnRlckNicywgZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHRoaXMkMS5jdXJyZW50ID09PSByb3V0ZVxuICAgIH0pXG4gICAgLy8gd2FpdCB1bnRpbCBhc3luYyBjb21wb25lbnRzIGFyZSByZXNvbHZlZCBiZWZvcmVcbiAgICAvLyBleHRyYWN0aW5nIGluLWNvbXBvbmVudCBlbnRlciBndWFyZHNcbiAgICBydW5RdWV1ZShlbnRlckd1YXJkcywgaXRlcmF0b3IsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmICh0aGlzJDEucGVuZGluZyA9PT0gcm91dGUpIHtcbiAgICAgICAgdGhpcyQxLnBlbmRpbmcgPSBudWxsXG4gICAgICAgIGNiKHJvdXRlKVxuICAgICAgICB0aGlzJDEucm91dGVyLmFwcC4kbmV4dFRpY2soZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHBvc3RFbnRlckNicy5mb3JFYWNoKGZ1bmN0aW9uIChjYikgeyByZXR1cm4gY2IoKTsgfSlcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9KVxuICB9KVxufTtcblxuSGlzdG9yeS5wcm90b3R5cGUudXBkYXRlUm91dGUgPSBmdW5jdGlvbiB1cGRhdGVSb3V0ZSAocm91dGUpIHtcbiAgdmFyIHByZXYgPSB0aGlzLmN1cnJlbnRcbiAgdGhpcy5jdXJyZW50ID0gcm91dGVcbiAgdGhpcy5jYiAmJiB0aGlzLmNiKHJvdXRlKVxuICB0aGlzLnJvdXRlci5hZnRlckhvb2tzLmZvckVhY2goZnVuY3Rpb24gKGhvb2spIHtcbiAgICBob29rICYmIGhvb2socm91dGUsIHByZXYpXG4gIH0pXG59O1xuXG5mdW5jdGlvbiBub3JtYWxpemVCYXNlIChiYXNlKSB7XG4gIGlmICghYmFzZSkge1xuICAgIGlmIChpbkJyb3dzZXIpIHtcbiAgICAgIC8vIHJlc3BlY3QgPGJhc2U+IHRhZ1xuICAgICAgdmFyIGJhc2VFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Jhc2UnKVxuICAgICAgYmFzZSA9IGJhc2VFbCA/IGJhc2VFbC5nZXRBdHRyaWJ1dGUoJ2hyZWYnKSA6ICcvJ1xuICAgIH0gZWxzZSB7XG4gICAgICBiYXNlID0gJy8nXG4gICAgfVxuICB9XG4gIC8vIG1ha2Ugc3VyZSB0aGVyZSdzIHRoZSBzdGFydGluZyBzbGFzaFxuICBpZiAoYmFzZS5jaGFyQXQoMCkgIT09ICcvJykge1xuICAgIGJhc2UgPSAnLycgKyBiYXNlXG4gIH1cbiAgLy8gcmVtb3ZlIHRyYWlsaW5nIHNsYXNoXG4gIHJldHVybiBiYXNlLnJlcGxhY2UoL1xcLyQvLCAnJylcbn1cblxuZnVuY3Rpb24gcmVzb2x2ZVF1ZXVlIChcbiAgY3VycmVudCxcbiAgbmV4dFxuKSB7XG4gIHZhciBpXG4gIHZhciBtYXggPSBNYXRoLm1heChjdXJyZW50Lmxlbmd0aCwgbmV4dC5sZW5ndGgpXG4gIGZvciAoaSA9IDA7IGkgPCBtYXg7IGkrKykge1xuICAgIGlmIChjdXJyZW50W2ldICE9PSBuZXh0W2ldKSB7XG4gICAgICBicmVha1xuICAgIH1cbiAgfVxuICByZXR1cm4ge1xuICAgIGFjdGl2YXRlZDogbmV4dC5zbGljZShpKSxcbiAgICBkZWFjdGl2YXRlZDogY3VycmVudC5zbGljZShpKVxuICB9XG59XG5cbmZ1bmN0aW9uIGV4dHJhY3RHdWFyZCAoXG4gIGRlZixcbiAga2V5XG4pIHtcbiAgaWYgKHR5cGVvZiBkZWYgIT09ICdmdW5jdGlvbicpIHtcbiAgICAvLyBleHRlbmQgbm93IHNvIHRoYXQgZ2xvYmFsIG1peGlucyBhcmUgYXBwbGllZC5cbiAgICBkZWYgPSBfVnVlLmV4dGVuZChkZWYpXG4gIH1cbiAgcmV0dXJuIGRlZi5vcHRpb25zW2tleV1cbn1cblxuZnVuY3Rpb24gZXh0cmFjdExlYXZlR3VhcmRzIChtYXRjaGVkKSB7XG4gIHJldHVybiBmbGF0dGVuKGZsYXRNYXBDb21wb25lbnRzKG1hdGNoZWQsIGZ1bmN0aW9uIChkZWYsIGluc3RhbmNlKSB7XG4gICAgdmFyIGd1YXJkID0gZXh0cmFjdEd1YXJkKGRlZiwgJ2JlZm9yZVJvdXRlTGVhdmUnKVxuICAgIGlmIChndWFyZCkge1xuICAgICAgcmV0dXJuIEFycmF5LmlzQXJyYXkoZ3VhcmQpXG4gICAgICAgID8gZ3VhcmQubWFwKGZ1bmN0aW9uIChndWFyZCkgeyByZXR1cm4gd3JhcExlYXZlR3VhcmQoZ3VhcmQsIGluc3RhbmNlKTsgfSlcbiAgICAgICAgOiB3cmFwTGVhdmVHdWFyZChndWFyZCwgaW5zdGFuY2UpXG4gICAgfVxuICB9KS5yZXZlcnNlKCkpXG59XG5cbmZ1bmN0aW9uIHdyYXBMZWF2ZUd1YXJkIChcbiAgZ3VhcmQsXG4gIGluc3RhbmNlXG4pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIHJvdXRlTGVhdmVHdWFyZCAoKSB7XG4gICAgcmV0dXJuIGd1YXJkLmFwcGx5KGluc3RhbmNlLCBhcmd1bWVudHMpXG4gIH1cbn1cblxuZnVuY3Rpb24gZXh0cmFjdEVudGVyR3VhcmRzIChcbiAgbWF0Y2hlZCxcbiAgY2JzLFxuICBpc1ZhbGlkXG4pIHtcbiAgcmV0dXJuIGZsYXR0ZW4oZmxhdE1hcENvbXBvbmVudHMobWF0Y2hlZCwgZnVuY3Rpb24gKGRlZiwgXywgbWF0Y2gsIGtleSkge1xuICAgIHZhciBndWFyZCA9IGV4dHJhY3RHdWFyZChkZWYsICdiZWZvcmVSb3V0ZUVudGVyJylcbiAgICBpZiAoZ3VhcmQpIHtcbiAgICAgIHJldHVybiBBcnJheS5pc0FycmF5KGd1YXJkKVxuICAgICAgICA/IGd1YXJkLm1hcChmdW5jdGlvbiAoZ3VhcmQpIHsgcmV0dXJuIHdyYXBFbnRlckd1YXJkKGd1YXJkLCBjYnMsIG1hdGNoLCBrZXksIGlzVmFsaWQpOyB9KVxuICAgICAgICA6IHdyYXBFbnRlckd1YXJkKGd1YXJkLCBjYnMsIG1hdGNoLCBrZXksIGlzVmFsaWQpXG4gICAgfVxuICB9KSlcbn1cblxuZnVuY3Rpb24gd3JhcEVudGVyR3VhcmQgKFxuICBndWFyZCxcbiAgY2JzLFxuICBtYXRjaCxcbiAga2V5LFxuICBpc1ZhbGlkXG4pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIHJvdXRlRW50ZXJHdWFyZCAodG8sIGZyb20sIG5leHQpIHtcbiAgICByZXR1cm4gZ3VhcmQodG8sIGZyb20sIGZ1bmN0aW9uIChjYikge1xuICAgICAgbmV4dChjYilcbiAgICAgIGlmICh0eXBlb2YgY2IgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgY2JzLnB1c2goZnVuY3Rpb24gKCkge1xuICAgICAgICAgIC8vICM3NTBcbiAgICAgICAgICAvLyBpZiBhIHJvdXRlci12aWV3IGlzIHdyYXBwZWQgd2l0aCBhbiBvdXQtaW4gdHJhbnNpdGlvbixcbiAgICAgICAgICAvLyB0aGUgaW5zdGFuY2UgbWF5IG5vdCBoYXZlIGJlZW4gcmVnaXN0ZXJlZCBhdCB0aGlzIHRpbWUuXG4gICAgICAgICAgLy8gd2Ugd2lsbCBuZWVkIHRvIHBvbGwgZm9yIHJlZ2lzdHJhdGlvbiB1bnRpbCBjdXJyZW50IHJvdXRlXG4gICAgICAgICAgLy8gaXMgbm8gbG9uZ2VyIHZhbGlkLlxuICAgICAgICAgIHBvbGwoY2IsIG1hdGNoLmluc3RhbmNlcywga2V5LCBpc1ZhbGlkKVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH0pXG4gIH1cbn1cblxuZnVuY3Rpb24gcG9sbCAoXG4gIGNiLCAvLyBzb21laG93IGZsb3cgY2Fubm90IGluZmVyIHRoaXMgaXMgYSBmdW5jdGlvblxuICBpbnN0YW5jZXMsXG4gIGtleSxcbiAgaXNWYWxpZFxuKSB7XG4gIGlmIChpbnN0YW5jZXNba2V5XSkge1xuICAgIGNiKGluc3RhbmNlc1trZXldKVxuICB9IGVsc2UgaWYgKGlzVmFsaWQoKSkge1xuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgcG9sbChjYiwgaW5zdGFuY2VzLCBrZXksIGlzVmFsaWQpXG4gICAgfSwgMTYpXG4gIH1cbn1cblxuZnVuY3Rpb24gcmVzb2x2ZUFzeW5jQ29tcG9uZW50cyAobWF0Y2hlZCkge1xuICByZXR1cm4gZmxhdE1hcENvbXBvbmVudHMobWF0Y2hlZCwgZnVuY3Rpb24gKGRlZiwgXywgbWF0Y2gsIGtleSkge1xuICAgIC8vIGlmIGl0J3MgYSBmdW5jdGlvbiBhbmQgZG9lc24ndCBoYXZlIFZ1ZSBvcHRpb25zIGF0dGFjaGVkLFxuICAgIC8vIGFzc3VtZSBpdCdzIGFuIGFzeW5jIGNvbXBvbmVudCByZXNvbHZlIGZ1bmN0aW9uLlxuICAgIC8vIHdlIGFyZSBub3QgdXNpbmcgVnVlJ3MgZGVmYXVsdCBhc3luYyByZXNvbHZpbmcgbWVjaGFuaXNtIGJlY2F1c2VcbiAgICAvLyB3ZSB3YW50IHRvIGhhbHQgdGhlIG5hdmlnYXRpb24gdW50aWwgdGhlIGluY29taW5nIGNvbXBvbmVudCBoYXMgYmVlblxuICAgIC8vIHJlc29sdmVkLlxuICAgIGlmICh0eXBlb2YgZGVmID09PSAnZnVuY3Rpb24nICYmICFkZWYub3B0aW9ucykge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uICh0bywgZnJvbSwgbmV4dCkge1xuICAgICAgICB2YXIgcmVzb2x2ZSA9IGZ1bmN0aW9uIChyZXNvbHZlZERlZikge1xuICAgICAgICAgIG1hdGNoLmNvbXBvbmVudHNba2V5XSA9IHJlc29sdmVkRGVmXG4gICAgICAgICAgbmV4dCgpXG4gICAgICAgIH1cblxuICAgICAgICB2YXIgcmVqZWN0ID0gZnVuY3Rpb24gKHJlYXNvbikge1xuICAgICAgICAgIHdhcm4oZmFsc2UsIChcIkZhaWxlZCB0byByZXNvbHZlIGFzeW5jIGNvbXBvbmVudCBcIiArIGtleSArIFwiOiBcIiArIHJlYXNvbikpXG4gICAgICAgICAgbmV4dChmYWxzZSlcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciByZXMgPSBkZWYocmVzb2x2ZSwgcmVqZWN0KVxuICAgICAgICBpZiAocmVzICYmIHR5cGVvZiByZXMudGhlbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIHJlcy50aGVuKHJlc29sdmUsIHJlamVjdClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSlcbn1cblxuZnVuY3Rpb24gZmxhdE1hcENvbXBvbmVudHMgKFxuICBtYXRjaGVkLFxuICBmblxuKSB7XG4gIHJldHVybiBmbGF0dGVuKG1hdGNoZWQubWFwKGZ1bmN0aW9uIChtKSB7XG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKG0uY29tcG9uZW50cykubWFwKGZ1bmN0aW9uIChrZXkpIHsgcmV0dXJuIGZuKFxuICAgICAgbS5jb21wb25lbnRzW2tleV0sXG4gICAgICBtLmluc3RhbmNlc1trZXldLFxuICAgICAgbSwga2V5XG4gICAgKTsgfSlcbiAgfSkpXG59XG5cbmZ1bmN0aW9uIGZsYXR0ZW4gKGFycikge1xuICByZXR1cm4gQXJyYXkucHJvdG90eXBlLmNvbmNhdC5hcHBseShbXSwgYXJyKVxufVxuXG4vKiAgKi9cblxudmFyIHBvc2l0aW9uU3RvcmUgPSBPYmplY3QuY3JlYXRlKG51bGwpXG5cbmZ1bmN0aW9uIHNhdmVTY3JvbGxQb3NpdGlvbiAoa2V5KSB7XG4gIGlmICgha2V5KSB7IHJldHVybiB9XG4gIHBvc2l0aW9uU3RvcmVba2V5XSA9IHtcbiAgICB4OiB3aW5kb3cucGFnZVhPZmZzZXQsXG4gICAgeTogd2luZG93LnBhZ2VZT2Zmc2V0XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0U2Nyb2xsUG9zaXRpb24gKGtleSkge1xuICBpZiAoIWtleSkgeyByZXR1cm4gfVxuICByZXR1cm4gcG9zaXRpb25TdG9yZVtrZXldXG59XG5cbmZ1bmN0aW9uIGdldEVsZW1lbnRQb3NpdGlvbiAoZWwpIHtcbiAgdmFyIGRvY1JlY3QgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcbiAgdmFyIGVsUmVjdCA9IGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gIHJldHVybiB7XG4gICAgeDogZWxSZWN0LmxlZnQgLSBkb2NSZWN0LmxlZnQsXG4gICAgeTogZWxSZWN0LnRvcCAtIGRvY1JlY3QudG9wXG4gIH1cbn1cblxuZnVuY3Rpb24gaXNWYWxpZFBvc2l0aW9uIChvYmopIHtcbiAgcmV0dXJuIGlzTnVtYmVyKG9iai54KSB8fCBpc051bWJlcihvYmoueSlcbn1cblxuZnVuY3Rpb24gbm9ybWFsaXplUG9zaXRpb24gKG9iaikge1xuICByZXR1cm4ge1xuICAgIHg6IGlzTnVtYmVyKG9iai54KSA/IG9iai54IDogd2luZG93LnBhZ2VYT2Zmc2V0LFxuICAgIHk6IGlzTnVtYmVyKG9iai55KSA/IG9iai55IDogd2luZG93LnBhZ2VZT2Zmc2V0XG4gIH1cbn1cblxuZnVuY3Rpb24gaXNOdW1iZXIgKHYpIHtcbiAgcmV0dXJuIHR5cGVvZiB2ID09PSAnbnVtYmVyJ1xufVxuXG4vKiAgKi9cblxuXG52YXIgZ2VuS2V5ID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gU3RyaW5nKERhdGUubm93KCkpOyB9XG52YXIgX2tleSA9IGdlbktleSgpXG5cbnZhciBIVE1MNUhpc3RvcnkgPSAoZnVuY3Rpb24gKEhpc3RvcnkpIHtcbiAgZnVuY3Rpb24gSFRNTDVIaXN0b3J5IChyb3V0ZXIsIGJhc2UpIHtcbiAgICB2YXIgdGhpcyQxID0gdGhpcztcblxuICAgIEhpc3RvcnkuY2FsbCh0aGlzLCByb3V0ZXIsIGJhc2UpXG5cbiAgICB2YXIgZXhwZWN0U2Nyb2xsID0gcm91dGVyLm9wdGlvbnMuc2Nyb2xsQmVoYXZpb3JcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncG9wc3RhdGUnLCBmdW5jdGlvbiAoZSkge1xuICAgICAgX2tleSA9IGUuc3RhdGUgJiYgZS5zdGF0ZS5rZXlcbiAgICAgIHZhciBjdXJyZW50ID0gdGhpcyQxLmN1cnJlbnRcbiAgICAgIHRoaXMkMS50cmFuc2l0aW9uVG8oZ2V0TG9jYXRpb24odGhpcyQxLmJhc2UpLCBmdW5jdGlvbiAobmV4dCkge1xuICAgICAgICBpZiAoZXhwZWN0U2Nyb2xsKSB7XG4gICAgICAgICAgdGhpcyQxLmhhbmRsZVNjcm9sbChuZXh0LCBjdXJyZW50LCB0cnVlKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0pXG5cbiAgICBpZiAoZXhwZWN0U2Nyb2xsKSB7XG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBzYXZlU2Nyb2xsUG9zaXRpb24oX2tleSlcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgaWYgKCBIaXN0b3J5ICkgSFRNTDVIaXN0b3J5Ll9fcHJvdG9fXyA9IEhpc3Rvcnk7XG4gIEhUTUw1SGlzdG9yeS5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKCBIaXN0b3J5ICYmIEhpc3RvcnkucHJvdG90eXBlICk7XG4gIEhUTUw1SGlzdG9yeS5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBIVE1MNUhpc3Rvcnk7XG5cbiAgSFRNTDVIaXN0b3J5LnByb3RvdHlwZS5nbyA9IGZ1bmN0aW9uIGdvIChuKSB7XG4gICAgd2luZG93Lmhpc3RvcnkuZ28obilcbiAgfTtcblxuICBIVE1MNUhpc3RvcnkucHJvdG90eXBlLnB1c2ggPSBmdW5jdGlvbiBwdXNoIChsb2NhdGlvbikge1xuICAgIHZhciB0aGlzJDEgPSB0aGlzO1xuXG4gICAgdmFyIGN1cnJlbnQgPSB0aGlzLmN1cnJlbnRcbiAgICB0aGlzLnRyYW5zaXRpb25Ubyhsb2NhdGlvbiwgZnVuY3Rpb24gKHJvdXRlKSB7XG4gICAgICBwdXNoU3RhdGUoY2xlYW5QYXRoKHRoaXMkMS5iYXNlICsgcm91dGUuZnVsbFBhdGgpKVxuICAgICAgdGhpcyQxLmhhbmRsZVNjcm9sbChyb3V0ZSwgY3VycmVudCwgZmFsc2UpXG4gICAgfSlcbiAgfTtcblxuICBIVE1MNUhpc3RvcnkucHJvdG90eXBlLnJlcGxhY2UgPSBmdW5jdGlvbiByZXBsYWNlIChsb2NhdGlvbikge1xuICAgIHZhciB0aGlzJDEgPSB0aGlzO1xuXG4gICAgdmFyIGN1cnJlbnQgPSB0aGlzLmN1cnJlbnRcbiAgICB0aGlzLnRyYW5zaXRpb25Ubyhsb2NhdGlvbiwgZnVuY3Rpb24gKHJvdXRlKSB7XG4gICAgICByZXBsYWNlU3RhdGUoY2xlYW5QYXRoKHRoaXMkMS5iYXNlICsgcm91dGUuZnVsbFBhdGgpKVxuICAgICAgdGhpcyQxLmhhbmRsZVNjcm9sbChyb3V0ZSwgY3VycmVudCwgZmFsc2UpXG4gICAgfSlcbiAgfTtcblxuICBIVE1MNUhpc3RvcnkucHJvdG90eXBlLmVuc3VyZVVSTCA9IGZ1bmN0aW9uIGVuc3VyZVVSTCAocHVzaCkge1xuICAgIGlmIChnZXRMb2NhdGlvbih0aGlzLmJhc2UpICE9PSB0aGlzLmN1cnJlbnQuZnVsbFBhdGgpIHtcbiAgICAgIHZhciBjdXJyZW50ID0gY2xlYW5QYXRoKHRoaXMuYmFzZSArIHRoaXMuY3VycmVudC5mdWxsUGF0aClcbiAgICAgIHB1c2ggPyBwdXNoU3RhdGUoY3VycmVudCkgOiByZXBsYWNlU3RhdGUoY3VycmVudClcbiAgICB9XG4gIH07XG5cbiAgSFRNTDVIaXN0b3J5LnByb3RvdHlwZS5oYW5kbGVTY3JvbGwgPSBmdW5jdGlvbiBoYW5kbGVTY3JvbGwgKHRvLCBmcm9tLCBpc1BvcCkge1xuICAgIHZhciByb3V0ZXIgPSB0aGlzLnJvdXRlclxuICAgIGlmICghcm91dGVyLmFwcCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdmFyIGJlaGF2aW9yID0gcm91dGVyLm9wdGlvbnMuc2Nyb2xsQmVoYXZpb3JcbiAgICBpZiAoIWJlaGF2aW9yKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgYXNzZXJ0KHR5cGVvZiBiZWhhdmlvciA9PT0gJ2Z1bmN0aW9uJywgXCJzY3JvbGxCZWhhdmlvciBtdXN0IGJlIGEgZnVuY3Rpb25cIilcblxuICAgIC8vIHdhaXQgdW50aWwgcmUtcmVuZGVyIGZpbmlzaGVzIGJlZm9yZSBzY3JvbGxpbmdcbiAgICByb3V0ZXIuYXBwLiRuZXh0VGljayhmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgcG9zaXRpb24gPSBnZXRTY3JvbGxQb3NpdGlvbihfa2V5KVxuICAgICAgdmFyIHNob3VsZFNjcm9sbCA9IGJlaGF2aW9yKHRvLCBmcm9tLCBpc1BvcCA/IHBvc2l0aW9uIDogbnVsbClcbiAgICAgIGlmICghc2hvdWxkU2Nyb2xsKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgICAgdmFyIGlzT2JqZWN0ID0gdHlwZW9mIHNob3VsZFNjcm9sbCA9PT0gJ29iamVjdCdcbiAgICAgIGlmIChpc09iamVjdCAmJiB0eXBlb2Ygc2hvdWxkU2Nyb2xsLnNlbGVjdG9yID09PSAnc3RyaW5nJykge1xuICAgICAgICB2YXIgZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNob3VsZFNjcm9sbC5zZWxlY3RvcilcbiAgICAgICAgaWYgKGVsKSB7XG4gICAgICAgICAgcG9zaXRpb24gPSBnZXRFbGVtZW50UG9zaXRpb24oZWwpXG4gICAgICAgIH0gZWxzZSBpZiAoaXNWYWxpZFBvc2l0aW9uKHNob3VsZFNjcm9sbCkpIHtcbiAgICAgICAgICBwb3NpdGlvbiA9IG5vcm1hbGl6ZVBvc2l0aW9uKHNob3VsZFNjcm9sbClcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChpc09iamVjdCAmJiBpc1ZhbGlkUG9zaXRpb24oc2hvdWxkU2Nyb2xsKSkge1xuICAgICAgICBwb3NpdGlvbiA9IG5vcm1hbGl6ZVBvc2l0aW9uKHNob3VsZFNjcm9sbClcbiAgICAgIH1cblxuICAgICAgaWYgKHBvc2l0aW9uKSB7XG4gICAgICAgIHdpbmRvdy5zY3JvbGxUbyhwb3NpdGlvbi54LCBwb3NpdGlvbi55KVxuICAgICAgfVxuICAgIH0pXG4gIH07XG5cbiAgcmV0dXJuIEhUTUw1SGlzdG9yeTtcbn0oSGlzdG9yeSkpO1xuXG5mdW5jdGlvbiBnZXRMb2NhdGlvbiAoYmFzZSkge1xuICB2YXIgcGF0aCA9IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZVxuICBpZiAoYmFzZSAmJiBwYXRoLmluZGV4T2YoYmFzZSkgPT09IDApIHtcbiAgICBwYXRoID0gcGF0aC5zbGljZShiYXNlLmxlbmd0aClcbiAgfVxuICByZXR1cm4gKHBhdGggfHwgJy8nKSArIHdpbmRvdy5sb2NhdGlvbi5zZWFyY2ggKyB3aW5kb3cubG9jYXRpb24uaGFzaFxufVxuXG5mdW5jdGlvbiBwdXNoU3RhdGUgKHVybCwgcmVwbGFjZSkge1xuICAvLyB0cnkuLi5jYXRjaCB0aGUgcHVzaFN0YXRlIGNhbGwgdG8gZ2V0IGFyb3VuZCBTYWZhcmlcbiAgLy8gRE9NIEV4Y2VwdGlvbiAxOCB3aGVyZSBpdCBsaW1pdHMgdG8gMTAwIHB1c2hTdGF0ZSBjYWxsc1xuICB2YXIgaGlzdG9yeSA9IHdpbmRvdy5oaXN0b3J5XG4gIHRyeSB7XG4gICAgaWYgKHJlcGxhY2UpIHtcbiAgICAgIGhpc3RvcnkucmVwbGFjZVN0YXRlKHsga2V5OiBfa2V5IH0sICcnLCB1cmwpXG4gICAgfSBlbHNlIHtcbiAgICAgIF9rZXkgPSBnZW5LZXkoKVxuICAgICAgaGlzdG9yeS5wdXNoU3RhdGUoeyBrZXk6IF9rZXkgfSwgJycsIHVybClcbiAgICB9XG4gICAgc2F2ZVNjcm9sbFBvc2l0aW9uKF9rZXkpXG4gIH0gY2F0Y2ggKGUpIHtcbiAgICB3aW5kb3cubG9jYXRpb25bcmVwbGFjZSA/ICdhc3NpZ24nIDogJ3JlcGxhY2UnXSh1cmwpXG4gIH1cbn1cblxuZnVuY3Rpb24gcmVwbGFjZVN0YXRlICh1cmwpIHtcbiAgcHVzaFN0YXRlKHVybCwgdHJ1ZSlcbn1cblxuLyogICovXG5cblxudmFyIEhhc2hIaXN0b3J5ID0gKGZ1bmN0aW9uIChIaXN0b3J5KSB7XG4gIGZ1bmN0aW9uIEhhc2hIaXN0b3J5IChyb3V0ZXIsIGJhc2UsIGZhbGxiYWNrKSB7XG4gICAgSGlzdG9yeS5jYWxsKHRoaXMsIHJvdXRlciwgYmFzZSlcblxuICAgIC8vIGNoZWNrIGhpc3RvcnkgZmFsbGJhY2sgZGVlcGxpbmtpbmdcbiAgICBpZiAoZmFsbGJhY2sgJiYgdGhpcy5jaGVja0ZhbGxiYWNrKCkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGVuc3VyZVNsYXNoKClcbiAgfVxuXG4gIGlmICggSGlzdG9yeSApIEhhc2hIaXN0b3J5Ll9fcHJvdG9fXyA9IEhpc3Rvcnk7XG4gIEhhc2hIaXN0b3J5LnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoIEhpc3RvcnkgJiYgSGlzdG9yeS5wcm90b3R5cGUgKTtcbiAgSGFzaEhpc3RvcnkucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gSGFzaEhpc3Rvcnk7XG5cbiAgSGFzaEhpc3RvcnkucHJvdG90eXBlLmNoZWNrRmFsbGJhY2sgPSBmdW5jdGlvbiBjaGVja0ZhbGxiYWNrICgpIHtcbiAgICB2YXIgbG9jYXRpb24gPSBnZXRMb2NhdGlvbih0aGlzLmJhc2UpXG4gICAgaWYgKCEvXlxcLyMvLnRlc3QobG9jYXRpb24pKSB7XG4gICAgICB3aW5kb3cubG9jYXRpb24ucmVwbGFjZShcbiAgICAgICAgY2xlYW5QYXRoKHRoaXMuYmFzZSArICcvIycgKyBsb2NhdGlvbilcbiAgICAgIClcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuICB9O1xuXG4gIEhhc2hIaXN0b3J5LnByb3RvdHlwZS5vbkhhc2hDaGFuZ2UgPSBmdW5jdGlvbiBvbkhhc2hDaGFuZ2UgKCkge1xuICAgIGlmICghZW5zdXJlU2xhc2goKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIHRoaXMudHJhbnNpdGlvblRvKGdldEhhc2goKSwgZnVuY3Rpb24gKHJvdXRlKSB7XG4gICAgICByZXBsYWNlSGFzaChyb3V0ZS5mdWxsUGF0aClcbiAgICB9KVxuICB9O1xuXG4gIEhhc2hIaXN0b3J5LnByb3RvdHlwZS5wdXNoID0gZnVuY3Rpb24gcHVzaCAobG9jYXRpb24pIHtcbiAgICB0aGlzLnRyYW5zaXRpb25Ubyhsb2NhdGlvbiwgZnVuY3Rpb24gKHJvdXRlKSB7XG4gICAgICBwdXNoSGFzaChyb3V0ZS5mdWxsUGF0aClcbiAgICB9KVxuICB9O1xuXG4gIEhhc2hIaXN0b3J5LnByb3RvdHlwZS5yZXBsYWNlID0gZnVuY3Rpb24gcmVwbGFjZSAobG9jYXRpb24pIHtcbiAgICB0aGlzLnRyYW5zaXRpb25Ubyhsb2NhdGlvbiwgZnVuY3Rpb24gKHJvdXRlKSB7XG4gICAgICByZXBsYWNlSGFzaChyb3V0ZS5mdWxsUGF0aClcbiAgICB9KVxuICB9O1xuXG4gIEhhc2hIaXN0b3J5LnByb3RvdHlwZS5nbyA9IGZ1bmN0aW9uIGdvIChuKSB7XG4gICAgd2luZG93Lmhpc3RvcnkuZ28obilcbiAgfTtcblxuICBIYXNoSGlzdG9yeS5wcm90b3R5cGUuZW5zdXJlVVJMID0gZnVuY3Rpb24gZW5zdXJlVVJMIChwdXNoKSB7XG4gICAgdmFyIGN1cnJlbnQgPSB0aGlzLmN1cnJlbnQuZnVsbFBhdGhcbiAgICBpZiAoZ2V0SGFzaCgpICE9PSBjdXJyZW50KSB7XG4gICAgICBwdXNoID8gcHVzaEhhc2goY3VycmVudCkgOiByZXBsYWNlSGFzaChjdXJyZW50KVxuICAgIH1cbiAgfTtcblxuICByZXR1cm4gSGFzaEhpc3Rvcnk7XG59KEhpc3RvcnkpKTtcblxuZnVuY3Rpb24gZW5zdXJlU2xhc2ggKCkge1xuICB2YXIgcGF0aCA9IGdldEhhc2goKVxuICBpZiAocGF0aC5jaGFyQXQoMCkgPT09ICcvJykge1xuICAgIHJldHVybiB0cnVlXG4gIH1cbiAgcmVwbGFjZUhhc2goJy8nICsgcGF0aClcbiAgcmV0dXJuIGZhbHNlXG59XG5cbmZ1bmN0aW9uIGdldEhhc2ggKCkge1xuICAvLyBXZSBjYW4ndCB1c2Ugd2luZG93LmxvY2F0aW9uLmhhc2ggaGVyZSBiZWNhdXNlIGl0J3Mgbm90XG4gIC8vIGNvbnNpc3RlbnQgYWNyb3NzIGJyb3dzZXJzIC0gRmlyZWZveCB3aWxsIHByZS1kZWNvZGUgaXQhXG4gIHZhciBocmVmID0gd2luZG93LmxvY2F0aW9uLmhyZWZcbiAgdmFyIGluZGV4ID0gaHJlZi5pbmRleE9mKCcjJylcbiAgcmV0dXJuIGluZGV4ID09PSAtMSA/ICcnIDogaHJlZi5zbGljZShpbmRleCArIDEpXG59XG5cbmZ1bmN0aW9uIHB1c2hIYXNoIChwYXRoKSB7XG4gIHdpbmRvdy5sb2NhdGlvbi5oYXNoID0gcGF0aFxufVxuXG5mdW5jdGlvbiByZXBsYWNlSGFzaCAocGF0aCkge1xuICB2YXIgaSA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmLmluZGV4T2YoJyMnKVxuICB3aW5kb3cubG9jYXRpb24ucmVwbGFjZShcbiAgICB3aW5kb3cubG9jYXRpb24uaHJlZi5zbGljZSgwLCBpID49IDAgPyBpIDogMCkgKyAnIycgKyBwYXRoXG4gIClcbn1cblxuLyogICovXG5cblxudmFyIEFic3RyYWN0SGlzdG9yeSA9IChmdW5jdGlvbiAoSGlzdG9yeSkge1xuICBmdW5jdGlvbiBBYnN0cmFjdEhpc3RvcnkgKHJvdXRlcikge1xuICAgIEhpc3RvcnkuY2FsbCh0aGlzLCByb3V0ZXIpXG4gICAgdGhpcy5zdGFjayA9IFtdXG4gICAgdGhpcy5pbmRleCA9IC0xXG4gIH1cblxuICBpZiAoIEhpc3RvcnkgKSBBYnN0cmFjdEhpc3RvcnkuX19wcm90b19fID0gSGlzdG9yeTtcbiAgQWJzdHJhY3RIaXN0b3J5LnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoIEhpc3RvcnkgJiYgSGlzdG9yeS5wcm90b3R5cGUgKTtcbiAgQWJzdHJhY3RIaXN0b3J5LnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IEFic3RyYWN0SGlzdG9yeTtcblxuICBBYnN0cmFjdEhpc3RvcnkucHJvdG90eXBlLnB1c2ggPSBmdW5jdGlvbiBwdXNoIChsb2NhdGlvbikge1xuICAgIHZhciB0aGlzJDEgPSB0aGlzO1xuXG4gICAgdGhpcy50cmFuc2l0aW9uVG8obG9jYXRpb24sIGZ1bmN0aW9uIChyb3V0ZSkge1xuICAgICAgdGhpcyQxLnN0YWNrID0gdGhpcyQxLnN0YWNrLnNsaWNlKDAsIHRoaXMkMS5pbmRleCArIDEpLmNvbmNhdChyb3V0ZSlcbiAgICAgIHRoaXMkMS5pbmRleCsrXG4gICAgfSlcbiAgfTtcblxuICBBYnN0cmFjdEhpc3RvcnkucHJvdG90eXBlLnJlcGxhY2UgPSBmdW5jdGlvbiByZXBsYWNlIChsb2NhdGlvbikge1xuICAgIHZhciB0aGlzJDEgPSB0aGlzO1xuXG4gICAgdGhpcy50cmFuc2l0aW9uVG8obG9jYXRpb24sIGZ1bmN0aW9uIChyb3V0ZSkge1xuICAgICAgdGhpcyQxLnN0YWNrID0gdGhpcyQxLnN0YWNrLnNsaWNlKDAsIHRoaXMkMS5pbmRleCkuY29uY2F0KHJvdXRlKVxuICAgIH0pXG4gIH07XG5cbiAgQWJzdHJhY3RIaXN0b3J5LnByb3RvdHlwZS5nbyA9IGZ1bmN0aW9uIGdvIChuKSB7XG4gICAgdmFyIHRoaXMkMSA9IHRoaXM7XG5cbiAgICB2YXIgdGFyZ2V0SW5kZXggPSB0aGlzLmluZGV4ICsgblxuICAgIGlmICh0YXJnZXRJbmRleCA8IDAgfHwgdGFyZ2V0SW5kZXggPj0gdGhpcy5zdGFjay5sZW5ndGgpIHtcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICB2YXIgcm91dGUgPSB0aGlzLnN0YWNrW3RhcmdldEluZGV4XVxuICAgIHRoaXMuY29uZmlybVRyYW5zaXRpb24ocm91dGUsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHRoaXMkMS5pbmRleCA9IHRhcmdldEluZGV4XG4gICAgICB0aGlzJDEudXBkYXRlUm91dGUocm91dGUpXG4gICAgfSlcbiAgfTtcblxuICBBYnN0cmFjdEhpc3RvcnkucHJvdG90eXBlLmVuc3VyZVVSTCA9IGZ1bmN0aW9uIGVuc3VyZVVSTCAoKSB7XG4gICAgLy8gbm9vcFxuICB9O1xuXG4gIHJldHVybiBBYnN0cmFjdEhpc3Rvcnk7XG59KEhpc3RvcnkpKTtcblxuLyogICovXG5cbnZhciBWdWVSb3V0ZXIgPSBmdW5jdGlvbiBWdWVSb3V0ZXIgKG9wdGlvbnMpIHtcbiAgaWYgKCBvcHRpb25zID09PSB2b2lkIDAgKSBvcHRpb25zID0ge307XG5cbiAgdGhpcy5hcHAgPSBudWxsXG4gIHRoaXMub3B0aW9ucyA9IG9wdGlvbnNcbiAgdGhpcy5iZWZvcmVIb29rcyA9IFtdXG4gIHRoaXMuYWZ0ZXJIb29rcyA9IFtdXG4gIHRoaXMubWF0Y2ggPSBjcmVhdGVNYXRjaGVyKG9wdGlvbnMucm91dGVzIHx8IFtdKVxuXG4gIHZhciBtb2RlID0gb3B0aW9ucy5tb2RlIHx8ICdoYXNoJ1xuICB0aGlzLmZhbGxiYWNrID0gbW9kZSA9PT0gJ2hpc3RvcnknICYmICFzdXBwb3J0c0hpc3RvcnlcbiAgaWYgKHRoaXMuZmFsbGJhY2spIHtcbiAgICBtb2RlID0gJ2hhc2gnXG4gIH1cbiAgaWYgKCFpbkJyb3dzZXIpIHtcbiAgICBtb2RlID0gJ2Fic3RyYWN0J1xuICB9XG4gIHRoaXMubW9kZSA9IG1vZGVcblxuICBzd2l0Y2ggKG1vZGUpIHtcbiAgICBjYXNlICdoaXN0b3J5JzpcbiAgICAgIHRoaXMuaGlzdG9yeSA9IG5ldyBIVE1MNUhpc3RvcnkodGhpcywgb3B0aW9ucy5iYXNlKVxuICAgICAgYnJlYWtcbiAgICBjYXNlICdoYXNoJzpcbiAgICAgIHRoaXMuaGlzdG9yeSA9IG5ldyBIYXNoSGlzdG9yeSh0aGlzLCBvcHRpb25zLmJhc2UsIHRoaXMuZmFsbGJhY2spXG4gICAgICBicmVha1xuICAgIGNhc2UgJ2Fic3RyYWN0JzpcbiAgICAgIHRoaXMuaGlzdG9yeSA9IG5ldyBBYnN0cmFjdEhpc3RvcnkodGhpcylcbiAgICAgIGJyZWFrXG4gICAgZGVmYXVsdDpcbiAgICAgIGFzc2VydChmYWxzZSwgKFwiaW52YWxpZCBtb2RlOiBcIiArIG1vZGUpKVxuICB9XG59O1xuXG52YXIgcHJvdG90eXBlQWNjZXNzb3JzID0geyBjdXJyZW50Um91dGU6IHt9IH07XG5cbnByb3RvdHlwZUFjY2Vzc29ycy5jdXJyZW50Um91dGUuZ2V0ID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdGhpcy5oaXN0b3J5ICYmIHRoaXMuaGlzdG9yeS5jdXJyZW50XG59O1xuXG5WdWVSb3V0ZXIucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbiBpbml0IChhcHAgLyogVnVlIGNvbXBvbmVudCBpbnN0YW5jZSAqLykge1xuICAgIHZhciB0aGlzJDEgPSB0aGlzO1xuXG4gIGFzc2VydChcbiAgICBpbnN0YWxsLmluc3RhbGxlZCxcbiAgICBcIm5vdCBpbnN0YWxsZWQuIE1ha2Ugc3VyZSB0byBjYWxsIGBWdWUudXNlKFZ1ZVJvdXRlcilgIFwiICtcbiAgICBcImJlZm9yZSBjcmVhdGluZyByb290IGluc3RhbmNlLlwiXG4gIClcblxuICB0aGlzLmFwcCA9IGFwcFxuXG4gIHZhciBoaXN0b3J5ID0gdGhpcy5oaXN0b3J5XG5cbiAgaWYgKGhpc3RvcnkgaW5zdGFuY2VvZiBIVE1MNUhpc3RvcnkpIHtcbiAgICBoaXN0b3J5LnRyYW5zaXRpb25UbyhnZXRMb2NhdGlvbihoaXN0b3J5LmJhc2UpKVxuICB9IGVsc2UgaWYgKGhpc3RvcnkgaW5zdGFuY2VvZiBIYXNoSGlzdG9yeSkge1xuICAgIGhpc3RvcnkudHJhbnNpdGlvblRvKGdldEhhc2goKSwgZnVuY3Rpb24gKCkge1xuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2hhc2hjaGFuZ2UnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGhpc3Rvcnkub25IYXNoQ2hhbmdlKClcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxuXG4gIGhpc3RvcnkubGlzdGVuKGZ1bmN0aW9uIChyb3V0ZSkge1xuICAgIHRoaXMkMS5hcHAuX3JvdXRlID0gcm91dGVcbiAgfSlcbn07XG5cblZ1ZVJvdXRlci5wcm90b3R5cGUuYmVmb3JlRWFjaCA9IGZ1bmN0aW9uIGJlZm9yZUVhY2ggKGZuKSB7XG4gIHRoaXMuYmVmb3JlSG9va3MucHVzaChmbilcbn07XG5cblZ1ZVJvdXRlci5wcm90b3R5cGUuYWZ0ZXJFYWNoID0gZnVuY3Rpb24gYWZ0ZXJFYWNoIChmbikge1xuICB0aGlzLmFmdGVySG9va3MucHVzaChmbilcbn07XG5cblZ1ZVJvdXRlci5wcm90b3R5cGUucHVzaCA9IGZ1bmN0aW9uIHB1c2ggKGxvY2F0aW9uKSB7XG4gIHRoaXMuaGlzdG9yeS5wdXNoKGxvY2F0aW9uKVxufTtcblxuVnVlUm91dGVyLnByb3RvdHlwZS5yZXBsYWNlID0gZnVuY3Rpb24gcmVwbGFjZSAobG9jYXRpb24pIHtcbiAgdGhpcy5oaXN0b3J5LnJlcGxhY2UobG9jYXRpb24pXG59O1xuXG5WdWVSb3V0ZXIucHJvdG90eXBlLmdvID0gZnVuY3Rpb24gZ28gKG4pIHtcbiAgdGhpcy5oaXN0b3J5LmdvKG4pXG59O1xuXG5WdWVSb3V0ZXIucHJvdG90eXBlLmJhY2sgPSBmdW5jdGlvbiBiYWNrICgpIHtcbiAgdGhpcy5nbygtMSlcbn07XG5cblZ1ZVJvdXRlci5wcm90b3R5cGUuZm9yd2FyZCA9IGZ1bmN0aW9uIGZvcndhcmQgKCkge1xuICB0aGlzLmdvKDEpXG59O1xuXG5WdWVSb3V0ZXIucHJvdG90eXBlLmdldE1hdGNoZWRDb21wb25lbnRzID0gZnVuY3Rpb24gZ2V0TWF0Y2hlZENvbXBvbmVudHMgKCkge1xuICBpZiAoIXRoaXMuY3VycmVudFJvdXRlKSB7XG4gICAgcmV0dXJuIFtdXG4gIH1cbiAgcmV0dXJuIFtdLmNvbmNhdC5hcHBseShbXSwgdGhpcy5jdXJyZW50Um91dGUubWF0Y2hlZC5tYXAoZnVuY3Rpb24gKG0pIHtcbiAgICByZXR1cm4gT2JqZWN0LmtleXMobS5jb21wb25lbnRzKS5tYXAoZnVuY3Rpb24gKGtleSkge1xuICAgICAgcmV0dXJuIG0uY29tcG9uZW50c1trZXldXG4gICAgfSlcbiAgfSkpXG59O1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydGllcyggVnVlUm91dGVyLnByb3RvdHlwZSwgcHJvdG90eXBlQWNjZXNzb3JzICk7XG5cblZ1ZVJvdXRlci5pbnN0YWxsID0gaW5zdGFsbFxuXG5pZiAoaW5Ccm93c2VyICYmIHdpbmRvdy5WdWUpIHtcbiAgd2luZG93LlZ1ZS51c2UoVnVlUm91dGVyKVxufVxuXG5yZXR1cm4gVnVlUm91dGVyO1xuXG59KSkpO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0U6L1Rlc3RXb3JrL3Z1ZS9+L3Z1ZS1yb3V0ZXIvZGlzdC92dWUtcm91dGVyLmpzIiwiLyoqXHJcbiAqIOaPj+i/sDog6Lev55Sx6YWN572u5paH5Lu2XHJcbiAqIOeJiOadgzogQ29weXJpZ2h0IChjKSAyMDE2XHJcbiAqIOWFrOWPuDog5rex5Zyz5biC5piK5pmo56eR5oqA5byA5Y+R5pyJ6ZmQ5YWs5Y+4XHJcbiAqIOS9nOiAhTog6ZmI5YWDXHJcbiAqIOeJiOacrDogMS4wXHJcbiAqIOWIm+W7uuaXpeacnzogMjAxNi8xMS8yM1xyXG4gKiDliJvlu7rml7bpl7Q6IDEwOjExXHJcbiAqL1xyXG5sZXQgSW5kZXhWaWV3ID0gcmVxdWlyZShcIi4vdmlld3MvaW5kZXgudnVlXCIpOyAgICAgICAgICAgLy8g5byV5YWlaW5kZXhWdWVcclxuaW1wb3J0IFVzZXIgZnJvbSBcIi4vc2NyaXB0cy91c2VyXCI7XHJcblxyXG4vLyDlrprkuYnot6/nlLFcclxuY29uc3Qgcm91dGVzID0gW1xyXG4gICAge1xyXG4gICAgICAgIG5hbWU6IFwiZm9vXCIsXHJcbiAgICAgICAgcGF0aDogJy9mb28nLFxyXG4gICAgICAgIGNvbXBvbmVudDoge3RlbXBsYXRlOiAnPGRpdj5mb288L2Rpdj4nfVxyXG4gICAgfSwge1xyXG4gICAgICAgIHBhdGg6ICcvaW5kZXgnLFxyXG4gICAgICAgIGNvbXBvbmVudDogSW5kZXhWaWV3XHJcbiAgICB9XHJcbiAgICAsIHtcclxuICAgICAgICBwYXRoOiAnL3VzZXInLFxyXG4gICAgICAgIGNvbXBvbmVudDogVXNlclxyXG4gICAgfVxyXG5dO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcm91dGVzO1xyXG5leHBvcnQge3JvdXRlc307XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vRTovVGVzdFdvcmsvdnVlL3NyYy9yb3V0ZXIuanMiLCIvKipcclxuICog5o+P6L+wOlxyXG4gKiDniYjmnYM6IENvcHlyaWdodCAoYykgMjAxNlxyXG4gKiDlhazlj7g6IOa3seWcs+W4guaYiuaZqOenkeaKgOW8gOWPkeaciemZkOWFrOWPuFxyXG4gKiDkvZzogIU6IOmZiOWFg1xyXG4gKiDniYjmnKw6IDEuMFxyXG4gKiDliJvlu7rml6XmnJ86IDIwMTYvMTEvMjNcclxuICog5Yib5bu65pe26Ze0OiAxNjoyN1xyXG4gKi9cclxuaW1wb3J0IFZpZXcgZnJvbSBcIi4uL3V0aWxzL3ZpZXdcIjtcclxudmFyIFVzZXJWaWV3ID0gcmVxdWlyZShcIi4uL3ZpZXdzL3VzZXIudnVlXCIpO1xyXG5cclxuY2xhc3MgVXNlciBleHRlbmRzIFZpZXcge1xyXG4gICAgY29uc3RydWN0b3Iodmlldykge1xyXG4gICAgICAgIHN1cGVyKHZpZXcpO1xyXG4gICAgfVxyXG5cclxuICAgIGRhdGEoKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgbmFtZTogXCJVc2VyVmlld1wiXHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBjcmVhdGVkKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCc9PT09PT09PT09PT09PT09VXNlclZpZXcgQ3JlYXRlZD09PT09PT09PT09PT09PT0nKTtcclxuICAgIH07XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IG5ldyBVc2VyKFVzZXJWaWV3KS5nZXRJbnN0YW5jZSgpO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0U6L1Rlc3RXb3JrL3Z1ZS9zcmMvc2NyaXB0cy91c2VyLmpzIiwiLyoqXHJcbiAqIOaPj+i/sDog6KeG5Zu+XHJcbiAqIOeJiOadgzogQ29weXJpZ2h0IChjKSAyMDE2XHJcbiAqIOWFrOWPuDog5rex5Zyz5biC5piK5pmo56eR5oqA5byA5Y+R5pyJ6ZmQ5YWs5Y+4XHJcbiAqIOS9nOiAhTog6ZmI5YWDXHJcbiAqIOeJiOacrDogMS4wXHJcbiAqIOWIm+W7uuaXpeacnzogMjAxNi8xMS8yM1xyXG4gKiDliJvlu7rml7bpl7Q6IDE2OjIxXHJcbiAqL1xyXG5jbGFzcyBWaWV3IHtcclxuICAgIGNvbnN0cnVjdG9yKHZpZXcpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyh0eXBlb2YgdGhpcy50KTtcclxuICAgICAgICBjb25zb2xlLmxvZyh0eXBlb2YodGhpcy5kYXRhKT09PVwiZnVuY3Rpb25cIik7XHJcbiAgICAgICAgaWYodGhpcy5kYXRhID09PSB1bmRlZmluZWQpIHtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZpZXcuZGF0YSA9IHRoaXMuZGF0YTtcclxuICAgICAgICB2aWV3LmNyZWF0ZWQgPSB0aGlzLmNyZWF0ZWQ7XHJcbiAgICAgICAgdGhpcy52aWV3ID0gdmlldztcclxuICAgIH1cclxuXHJcbiAgICBnZXRJbnN0YW5jZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy52aWV3O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBWaWV3O1xyXG5leHBvcnQge1ZpZXd9O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0U6L1Rlc3RXb3JrL3Z1ZS9zcmMvdXRpbHMvdmlldy5qcyIsInZhciBfX3Z1ZV9leHBvcnRzX18sIF9fdnVlX29wdGlvbnNfX1xudmFyIF9fdnVlX3N0eWxlc19fID0ge31cblxuLyogc3R5bGVzICovXG5yZXF1aXJlKFwiISF2dWUtc3R5bGUtbG9hZGVyIWNzcy1sb2FkZXI/c291cmNlTWFwIXZ1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyP2lkPWRhdGEtdi1hYjc1MWMzMiF2dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXN0eWxlcyZpbmRleD0wIS4vdXNlci52dWVcIilcblxuLyogdGVtcGxhdGUgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9fID0gcmVxdWlyZShcIiEhdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/aWQ9ZGF0YS12LWFiNzUxYzMyIXZ1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3VzZXIudnVlXCIpXG5fX3Z1ZV9vcHRpb25zX18gPSBfX3Z1ZV9leHBvcnRzX18gPSBfX3Z1ZV9leHBvcnRzX18gfHwge31cbmlmIChcbiAgdHlwZW9mIF9fdnVlX2V4cG9ydHNfXy5kZWZhdWx0ID09PSBcIm9iamVjdFwiIHx8XG4gIHR5cGVvZiBfX3Z1ZV9leHBvcnRzX18uZGVmYXVsdCA9PT0gXCJmdW5jdGlvblwiXG4pIHtcbmlmIChPYmplY3Qua2V5cyhfX3Z1ZV9leHBvcnRzX18pLnNvbWUoZnVuY3Rpb24gKGtleSkgeyByZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkgIT09IFwiX19lc01vZHVsZVwiIH0pKSB7Y29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuX192dWVfb3B0aW9uc19fID0gX192dWVfZXhwb3J0c19fID0gX192dWVfZXhwb3J0c19fLmRlZmF1bHRcbn1cbmlmICh0eXBlb2YgX192dWVfb3B0aW9uc19fID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgX192dWVfb3B0aW9uc19fID0gX192dWVfb3B0aW9uc19fLm9wdGlvbnNcbn1cbl9fdnVlX29wdGlvbnNfXy5fX2ZpbGUgPSBcIkU6XFxcXFRlc3RXb3JrXFxcXHZ1ZVxcXFxzcmNcXFxcdmlld3NcXFxcdXNlci52dWVcIlxuX192dWVfb3B0aW9uc19fLnJlbmRlciA9IF9fdnVlX3RlbXBsYXRlX18ucmVuZGVyXG5fX3Z1ZV9vcHRpb25zX18uc3RhdGljUmVuZGVyRm5zID0gX192dWVfdGVtcGxhdGVfXy5zdGF0aWNSZW5kZXJGbnNcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LWFiNzUxYzMyXCIsIF9fdnVlX29wdGlvbnNfXylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LWFiNzUxYzMyXCIsIF9fdnVlX29wdGlvbnNfXylcbiAgfVxufSkoKX1cbmlmIChfX3Z1ZV9vcHRpb25zX18uZnVuY3Rpb25hbCkge2NvbnNvbGUuZXJyb3IoXCJbdnVlLWxvYWRlcl0gdXNlci52dWU6IGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhcmUgbm90IHN1cHBvcnRlZCBhbmQgc2hvdWxkIGJlIGRlZmluZWQgaW4gcGxhaW4ganMgZmlsZXMgdXNpbmcgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbm1vZHVsZS5leHBvcnRzID0gX192dWVfZXhwb3J0c19fXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy92aWV3cy91c2VyLnZ1ZVxuLy8gbW9kdWxlIGlkID0gNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LWFiNzUxYzMyIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi91c2VyLnZ1ZVwiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9hZGRTdHlsZXMuanNcIikoY29udGVudCwge30pO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG5cdC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdGlmKCFjb250ZW50LmxvY2Fscykge1xuXHRcdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtYWI3NTFjMzIhLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3VzZXIudnVlXCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtYWI3NTFjMzIhLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3VzZXIudnVlXCIpO1xuXHRcdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cdFx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdFx0fSk7XG5cdH1cblx0Ly8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLXN0eWxlLWxvYWRlciEuL34vY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9+L3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi1hYjc1MWMzMiEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3NyYy92aWV3cy91c2VyLnZ1ZVxuLy8gbW9kdWxlIGlkID0gN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcbmgxIHtcXG4gICAgY29sb3I6ICNGMDA7XFxufVxcblwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCIvLi9zcmMvdmlld3MvdXNlci52dWU/ZGY1MDQ1N2FcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIjtBQUtBO0lBQ0EsWUFBQTtDQUNBXCIsXCJmaWxlXCI6XCJ1c2VyLnZ1ZVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI8dGVtcGxhdGU+XFxyXFxuICAgIDxoMT5IZWxsbyB7e25hbWV9fTwvaDE+XFxyXFxuPC90ZW1wbGF0ZT5cXHJcXG5cXHJcXG48c3R5bGU+XFxyXFxuICAgIGgxIHtcXHJcXG4gICAgICAgIGNvbG9yOiAjRjAwO1xcclxcbiAgICB9XFxyXFxuPC9zdHlsZT5cIl0sXCJzb3VyY2VSb290XCI6XCJ3ZWJwYWNrOi8vXCJ9XSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL34vdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LWFiNzUxYzMyIS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vc3JjL3ZpZXdzL3VzZXIudnVlXG4vLyBtb2R1bGUgaWQgPSA4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qXHJcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcclxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXHJcbiovXHJcbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXHJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKSB7XHJcblx0dmFyIGxpc3QgPSBbXTtcclxuXHJcblx0Ly8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xyXG5cdGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcclxuXHRcdHZhciByZXN1bHQgPSBbXTtcclxuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdHZhciBpdGVtID0gdGhpc1tpXTtcclxuXHRcdFx0aWYoaXRlbVsyXSkge1xyXG5cdFx0XHRcdHJlc3VsdC5wdXNoKFwiQG1lZGlhIFwiICsgaXRlbVsyXSArIFwie1wiICsgaXRlbVsxXSArIFwifVwiKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRyZXN1bHQucHVzaChpdGVtWzFdKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHJlc3VsdC5qb2luKFwiXCIpO1xyXG5cdH07XHJcblxyXG5cdC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XHJcblx0bGlzdC5pID0gZnVuY3Rpb24obW9kdWxlcywgbWVkaWFRdWVyeSkge1xyXG5cdFx0aWYodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpXHJcblx0XHRcdG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIFwiXCJdXTtcclxuXHRcdHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XHJcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHR2YXIgaWQgPSB0aGlzW2ldWzBdO1xyXG5cdFx0XHRpZih0eXBlb2YgaWQgPT09IFwibnVtYmVyXCIpXHJcblx0XHRcdFx0YWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xyXG5cdFx0fVxyXG5cdFx0Zm9yKGkgPSAwOyBpIDwgbW9kdWxlcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHR2YXIgaXRlbSA9IG1vZHVsZXNbaV07XHJcblx0XHRcdC8vIHNraXAgYWxyZWFkeSBpbXBvcnRlZCBtb2R1bGVcclxuXHRcdFx0Ly8gdGhpcyBpbXBsZW1lbnRhdGlvbiBpcyBub3QgMTAwJSBwZXJmZWN0IGZvciB3ZWlyZCBtZWRpYSBxdWVyeSBjb21iaW5hdGlvbnNcclxuXHRcdFx0Ly8gIHdoZW4gYSBtb2R1bGUgaXMgaW1wb3J0ZWQgbXVsdGlwbGUgdGltZXMgd2l0aCBkaWZmZXJlbnQgbWVkaWEgcXVlcmllcy5cclxuXHRcdFx0Ly8gIEkgaG9wZSB0aGlzIHdpbGwgbmV2ZXIgb2NjdXIgKEhleSB0aGlzIHdheSB3ZSBoYXZlIHNtYWxsZXIgYnVuZGxlcylcclxuXHRcdFx0aWYodHlwZW9mIGl0ZW1bMF0gIT09IFwibnVtYmVyXCIgfHwgIWFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcclxuXHRcdFx0XHRpZihtZWRpYVF1ZXJ5ICYmICFpdGVtWzJdKSB7XHJcblx0XHRcdFx0XHRpdGVtWzJdID0gbWVkaWFRdWVyeTtcclxuXHRcdFx0XHR9IGVsc2UgaWYobWVkaWFRdWVyeSkge1xyXG5cdFx0XHRcdFx0aXRlbVsyXSA9IFwiKFwiICsgaXRlbVsyXSArIFwiKSBhbmQgKFwiICsgbWVkaWFRdWVyeSArIFwiKVwiO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRsaXN0LnB1c2goaXRlbSk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9O1xyXG5cdHJldHVybiBsaXN0O1xyXG59O1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9FOi9UZXN0V29yay92dWUvfi9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qcyIsIi8qXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG5cdEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG52YXIgc3R5bGVzSW5Eb20gPSB7fSxcblx0bWVtb2l6ZSA9IGZ1bmN0aW9uKGZuKSB7XG5cdFx0dmFyIG1lbW87XG5cdFx0cmV0dXJuIGZ1bmN0aW9uICgpIHtcblx0XHRcdGlmICh0eXBlb2YgbWVtbyA9PT0gXCJ1bmRlZmluZWRcIikgbWVtbyA9IGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cdFx0XHRyZXR1cm4gbWVtbztcblx0XHR9O1xuXHR9LFxuXHRpc09sZElFID0gbWVtb2l6ZShmdW5jdGlvbigpIHtcblx0XHRyZXR1cm4gL21zaWUgWzYtOV1cXGIvLnRlc3Qod2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKSk7XG5cdH0pLFxuXHRnZXRIZWFkRWxlbWVudCA9IG1lbW9pemUoZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiBkb2N1bWVudC5oZWFkIHx8IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiaGVhZFwiKVswXTtcblx0fSksXG5cdHNpbmdsZXRvbkVsZW1lbnQgPSBudWxsLFxuXHRzaW5nbGV0b25Db3VudGVyID0gMCxcblx0c3R5bGVFbGVtZW50c0luc2VydGVkQXRUb3AgPSBbXTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihsaXN0LCBvcHRpb25zKSB7XG5cdGlmKHR5cGVvZiBERUJVRyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBERUJVRykge1xuXHRcdGlmKHR5cGVvZiBkb2N1bWVudCAhPT0gXCJvYmplY3RcIikgdGhyb3cgbmV3IEVycm9yKFwiVGhlIHN0eWxlLWxvYWRlciBjYW5ub3QgYmUgdXNlZCBpbiBhIG5vbi1icm93c2VyIGVudmlyb25tZW50XCIpO1xuXHR9XG5cblx0b3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cdC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuXHQvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cdGlmICh0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gPT09IFwidW5kZWZpbmVkXCIpIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuXG5cdC8vIEJ5IGRlZmF1bHQsIGFkZCA8c3R5bGU+IHRhZ3MgdG8gdGhlIGJvdHRvbSBvZiA8aGVhZD4uXG5cdGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJ1bmRlZmluZWRcIikgb3B0aW9ucy5pbnNlcnRBdCA9IFwiYm90dG9tXCI7XG5cblx0dmFyIHN0eWxlcyA9IGxpc3RUb1N0eWxlcyhsaXN0KTtcblx0YWRkU3R5bGVzVG9Eb20oc3R5bGVzLCBvcHRpb25zKTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcblx0XHR2YXIgbWF5UmVtb3ZlID0gW107XG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcblx0XHRcdGRvbVN0eWxlLnJlZnMtLTtcblx0XHRcdG1heVJlbW92ZS5wdXNoKGRvbVN0eWxlKTtcblx0XHR9XG5cdFx0aWYobmV3TGlzdCkge1xuXHRcdFx0dmFyIG5ld1N0eWxlcyA9IGxpc3RUb1N0eWxlcyhuZXdMaXN0KTtcblx0XHRcdGFkZFN0eWxlc1RvRG9tKG5ld1N0eWxlcywgb3B0aW9ucyk7XG5cdFx0fVxuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBtYXlSZW1vdmUubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBkb21TdHlsZSA9IG1heVJlbW92ZVtpXTtcblx0XHRcdGlmKGRvbVN0eWxlLnJlZnMgPT09IDApIHtcblx0XHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKVxuXHRcdFx0XHRcdGRvbVN0eWxlLnBhcnRzW2pdKCk7XG5cdFx0XHRcdGRlbGV0ZSBzdHlsZXNJbkRvbVtkb21TdHlsZS5pZF07XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xufVxuXG5mdW5jdGlvbiBhZGRTdHlsZXNUb0RvbShzdHlsZXMsIG9wdGlvbnMpIHtcblx0Zm9yKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xuXHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuXHRcdGlmKGRvbVN0eWxlKSB7XG5cdFx0XHRkb21TdHlsZS5yZWZzKys7XG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0ZG9tU3R5bGUucGFydHNbal0oaXRlbS5wYXJ0c1tqXSk7XG5cdFx0XHR9XG5cdFx0XHRmb3IoOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRkb21TdHlsZS5wYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0dmFyIHBhcnRzID0gW107XG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRwYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcblx0XHRcdH1cblx0XHRcdHN0eWxlc0luRG9tW2l0ZW0uaWRdID0ge2lkOiBpdGVtLmlkLCByZWZzOiAxLCBwYXJ0czogcGFydHN9O1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBsaXN0VG9TdHlsZXMobGlzdCkge1xuXHR2YXIgc3R5bGVzID0gW107XG5cdHZhciBuZXdTdHlsZXMgPSB7fTtcblx0Zm9yKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgaXRlbSA9IGxpc3RbaV07XG5cdFx0dmFyIGlkID0gaXRlbVswXTtcblx0XHR2YXIgY3NzID0gaXRlbVsxXTtcblx0XHR2YXIgbWVkaWEgPSBpdGVtWzJdO1xuXHRcdHZhciBzb3VyY2VNYXAgPSBpdGVtWzNdO1xuXHRcdHZhciBwYXJ0ID0ge2NzczogY3NzLCBtZWRpYTogbWVkaWEsIHNvdXJjZU1hcDogc291cmNlTWFwfTtcblx0XHRpZighbmV3U3R5bGVzW2lkXSlcblx0XHRcdHN0eWxlcy5wdXNoKG5ld1N0eWxlc1tpZF0gPSB7aWQ6IGlkLCBwYXJ0czogW3BhcnRdfSk7XG5cdFx0ZWxzZVxuXHRcdFx0bmV3U3R5bGVzW2lkXS5wYXJ0cy5wdXNoKHBhcnQpO1xuXHR9XG5cdHJldHVybiBzdHlsZXM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBzdHlsZUVsZW1lbnQpIHtcblx0dmFyIGhlYWQgPSBnZXRIZWFkRWxlbWVudCgpO1xuXHR2YXIgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AgPSBzdHlsZUVsZW1lbnRzSW5zZXJ0ZWRBdFRvcFtzdHlsZUVsZW1lbnRzSW5zZXJ0ZWRBdFRvcC5sZW5ndGggLSAxXTtcblx0aWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwidG9wXCIpIHtcblx0XHRpZighbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3ApIHtcblx0XHRcdGhlYWQuaW5zZXJ0QmVmb3JlKHN0eWxlRWxlbWVudCwgaGVhZC5maXJzdENoaWxkKTtcblx0XHR9IGVsc2UgaWYobGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpIHtcblx0XHRcdGhlYWQuaW5zZXJ0QmVmb3JlKHN0eWxlRWxlbWVudCwgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRoZWFkLmFwcGVuZENoaWxkKHN0eWxlRWxlbWVudCk7XG5cdFx0fVxuXHRcdHN0eWxlRWxlbWVudHNJbnNlcnRlZEF0VG9wLnB1c2goc3R5bGVFbGVtZW50KTtcblx0fSBlbHNlIGlmIChvcHRpb25zLmluc2VydEF0ID09PSBcImJvdHRvbVwiKSB7XG5cdFx0aGVhZC5hcHBlbmRDaGlsZChzdHlsZUVsZW1lbnQpO1xuXHR9IGVsc2Uge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgdmFsdWUgZm9yIHBhcmFtZXRlciAnaW5zZXJ0QXQnLiBNdXN0IGJlICd0b3AnIG9yICdib3R0b20nLlwiKTtcblx0fVxufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG5cdHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG5cdHZhciBpZHggPSBzdHlsZUVsZW1lbnRzSW5zZXJ0ZWRBdFRvcC5pbmRleE9mKHN0eWxlRWxlbWVudCk7XG5cdGlmKGlkeCA+PSAwKSB7XG5cdFx0c3R5bGVFbGVtZW50c0luc2VydGVkQXRUb3Auc3BsaWNlKGlkeCwgMSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcblx0c3R5bGVFbGVtZW50LnR5cGUgPSBcInRleHQvY3NzXCI7XG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBzdHlsZUVsZW1lbnQpO1xuXHRyZXR1cm4gc3R5bGVFbGVtZW50O1xufVxuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlRWxlbWVudCwgdXBkYXRlLCByZW1vdmU7XG5cblx0aWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG5cdFx0dmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG5cdFx0c3R5bGVFbGVtZW50ID0gc2luZ2xldG9uRWxlbWVudCB8fCAoc2luZ2xldG9uRWxlbWVudCA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKSk7XG5cdFx0dXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlRWxlbWVudCwgc3R5bGVJbmRleCwgZmFsc2UpO1xuXHRcdHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZUVsZW1lbnQsIHN0eWxlSW5kZXgsIHRydWUpO1xuXHR9IGVsc2Uge1xuXHRcdHN0eWxlRWxlbWVudCA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKTtcblx0XHR1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGVFbGVtZW50KTtcblx0XHRyZW1vdmUgPSBmdW5jdGlvbigpIHtcblx0XHRcdHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuXHRcdH07XG5cdH1cblxuXHR1cGRhdGUob2JqKTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG5cdFx0aWYobmV3T2JqKSB7XG5cdFx0XHRpZihuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApXG5cdFx0XHRcdHJldHVybjtcblx0XHRcdHVwZGF0ZShvYmogPSBuZXdPYmopO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZW1vdmUoKTtcblx0XHR9XG5cdH07XG59XG5cbnZhciByZXBsYWNlVGV4dCA9IChmdW5jdGlvbiAoKSB7XG5cdHZhciB0ZXh0U3RvcmUgPSBbXTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gKGluZGV4LCByZXBsYWNlbWVudCkge1xuXHRcdHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcblx0XHRyZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcblx0fTtcbn0pKCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcoc3R5bGVFbGVtZW50LCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcblx0dmFyIGNzcyA9IHJlbW92ZSA/IFwiXCIgOiBvYmouY3NzO1xuXG5cdGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuXHRcdHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcblx0fSBlbHNlIHtcblx0XHR2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG5cdFx0dmFyIGNoaWxkTm9kZXMgPSBzdHlsZUVsZW1lbnQuY2hpbGROb2Rlcztcblx0XHRpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG5cdFx0aWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG5cdFx0XHRzdHlsZUVsZW1lbnQuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0c3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGNzc05vZGUpO1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlRWxlbWVudCwgb2JqKSB7XG5cdHZhciBjc3MgPSBvYmouY3NzO1xuXHR2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG5cdHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG5cdGlmIChtZWRpYSkge1xuXHRcdHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJtZWRpYVwiLCBtZWRpYSk7XG5cdH1cblxuXHRpZiAoc291cmNlTWFwKSB7XG5cdFx0Ly8gaHR0cHM6Ly9kZXZlbG9wZXIuY2hyb21lLmNvbS9kZXZ0b29scy9kb2NzL2phdmFzY3JpcHQtZGVidWdnaW5nXG5cdFx0Ly8gdGhpcyBtYWtlcyBzb3VyY2UgbWFwcyBpbnNpZGUgc3R5bGUgdGFncyB3b3JrIHByb3Blcmx5IGluIENocm9tZVxuXHRcdGNzcyArPSAnXFxuLyojIHNvdXJjZVVSTD0nICsgc291cmNlTWFwLnNvdXJjZXNbMF0gKyAnICovJztcblx0XHQvLyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8yNjYwMzg3NVxuXHRcdGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIgKyBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpICsgXCIgKi9cIjtcblx0fVxuXG5cdGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuXHRcdHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG5cdH0gZWxzZSB7XG5cdFx0d2hpbGUoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcblx0XHRcdHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG5cdFx0fVxuXHRcdHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcblx0fVxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1zdHlsZS1sb2FkZXIvYWRkU3R5bGVzLmpzXG4vLyBtb2R1bGUgaWQgPSAxMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpcztcbiAgcmV0dXJuIF92bS5faCgnaDEnLCBbXCJIZWxsbyBcIiArIF92bS5fcyhfdm0ubmFtZSldKVxufSxzdGF0aWNSZW5kZXJGbnM6IFtdfVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikucmVyZW5kZXIoXCJkYXRhLXYtYWI3NTFjMzJcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIuanM/aWQ9ZGF0YS12LWFiNzUxYzMyIS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9zcmMvdmlld3MvdXNlci52dWVcbi8vIG1vZHVsZSBpZCA9IDExXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBfX3Z1ZV9leHBvcnRzX18sIF9fdnVlX29wdGlvbnNfX1xudmFyIF9fdnVlX3N0eWxlc19fID0ge31cblxuLyogc3R5bGVzICovXG5yZXF1aXJlKFwiISF2dWUtc3R5bGUtbG9hZGVyIWNzcy1sb2FkZXI/c291cmNlTWFwIXZ1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyP2lkPWRhdGEtdi01Y2FhOTFlNiF2dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXN0eWxlcyZpbmRleD0wIS4vaW5kZXgudnVlXCIpXG5cbi8qIHNjcmlwdCAqL1xuX192dWVfZXhwb3J0c19fID0gcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyIXZ1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9pbmRleC52dWVcIilcblxuLyogdGVtcGxhdGUgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9fID0gcmVxdWlyZShcIiEhdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/aWQ9ZGF0YS12LTVjYWE5MWU2IXZ1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL2luZGV4LnZ1ZVwiKVxuX192dWVfb3B0aW9uc19fID0gX192dWVfZXhwb3J0c19fID0gX192dWVfZXhwb3J0c19fIHx8IHt9XG5pZiAoXG4gIHR5cGVvZiBfX3Z1ZV9leHBvcnRzX18uZGVmYXVsdCA9PT0gXCJvYmplY3RcIiB8fFxuICB0eXBlb2YgX192dWVfZXhwb3J0c19fLmRlZmF1bHQgPT09IFwiZnVuY3Rpb25cIlxuKSB7XG5pZiAoT2JqZWN0LmtleXMoX192dWVfZXhwb3J0c19fKS5zb21lKGZ1bmN0aW9uIChrZXkpIHsgcmV0dXJuIGtleSAhPT0gXCJkZWZhdWx0XCIgJiYga2V5ICE9PSBcIl9fZXNNb2R1bGVcIiB9KSkge2NvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cbl9fdnVlX29wdGlvbnNfXyA9IF9fdnVlX2V4cG9ydHNfXyA9IF9fdnVlX2V4cG9ydHNfXy5kZWZhdWx0XG59XG5pZiAodHlwZW9mIF9fdnVlX29wdGlvbnNfXyA9PT0gXCJmdW5jdGlvblwiKSB7XG4gIF9fdnVlX29wdGlvbnNfXyA9IF9fdnVlX29wdGlvbnNfXy5vcHRpb25zXG59XG5fX3Z1ZV9vcHRpb25zX18uX19maWxlID0gXCJFOlxcXFxUZXN0V29ya1xcXFx2dWVcXFxcc3JjXFxcXHZpZXdzXFxcXGluZGV4LnZ1ZVwiXG5fX3Z1ZV9vcHRpb25zX18ucmVuZGVyID0gX192dWVfdGVtcGxhdGVfXy5yZW5kZXJcbl9fdnVlX29wdGlvbnNfXy5zdGF0aWNSZW5kZXJGbnMgPSBfX3Z1ZV90ZW1wbGF0ZV9fLnN0YXRpY1JlbmRlckZuc1xuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtNWNhYTkxZTZcIiwgX192dWVfb3B0aW9uc19fKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtNWNhYTkxZTZcIiwgX192dWVfb3B0aW9uc19fKVxuICB9XG59KSgpfVxuaWYgKF9fdnVlX29wdGlvbnNfXy5mdW5jdGlvbmFsKSB7Y29uc29sZS5lcnJvcihcIlt2dWUtbG9hZGVyXSBpbmRleC52dWU6IGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhcmUgbm90IHN1cHBvcnRlZCBhbmQgc2hvdWxkIGJlIGRlZmluZWQgaW4gcGxhaW4ganMgZmlsZXMgdXNpbmcgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbm1vZHVsZS5leHBvcnRzID0gX192dWVfZXhwb3J0c19fXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy92aWV3cy9pbmRleC52dWVcbi8vIG1vZHVsZSBpZCA9IDEyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtNWNhYTkxZTYhLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL2luZGV4LnZ1ZVwiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9hZGRTdHlsZXMuanNcIikoY29udGVudCwge30pO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG5cdC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdGlmKCFjb250ZW50LmxvY2Fscykge1xuXHRcdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtNWNhYTkxZTYhLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL2luZGV4LnZ1ZVwiLCBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LTVjYWE5MWU2IS4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9pbmRleC52dWVcIik7XG5cdFx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblx0XHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0XHR9KTtcblx0fVxuXHQvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtc3R5bGUtbG9hZGVyIS4vfi9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL34vdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LTVjYWE5MWU2IS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vc3JjL3ZpZXdzL2luZGV4LnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG5oMSB7XFxuICAgIGNvbG9yOiAjRjAwO1xcbn1cXG5cIiwgXCJcIiwge1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wiLy4vc3JjL3ZpZXdzL2luZGV4LnZ1ZT80MDRmYTQ4YVwiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiO0FBS0E7SUFDQSxZQUFBO0NBQ0FcIixcImZpbGVcIjpcImluZGV4LnZ1ZVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI8dGVtcGxhdGU+XFxyXFxuICAgIDxoMT5BdXRoIEZsb3d7e2xvZ2dlZElufX08L2gxPlxcclxcbjwvdGVtcGxhdGU+XFxyXFxuXFxyXFxuPHN0eWxlPlxcclxcbiAgICBoMSB7XFxyXFxuICAgICAgICBjb2xvcjogI0YwMDtcXHJcXG4gICAgfVxcclxcbjwvc3R5bGU+XFxyXFxuXFxyXFxuPHNjcmlwdD5cXHJcXG4gICAgY2xhc3MgdGVzdCB7XFxyXFxuICAgICAgICBkYXRhKCkge1xcclxcbiAgICAgICAgICAgIHJldHVybiB7XFxyXFxuICAgICAgICAgICAgICAgIGxvZ2dlZEluOiBcXFwiVEVTVFxcXCJcXHJcXG4gICAgICAgICAgICB9XFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICBjcmVhdGVkKCkge1xcclxcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdAQEBAQEBAQEBAQEBAJyk7XFxyXFxuICAgICAgICB9XFxyXFxuICAgIH1cXHJcXG4gICAgbGV0IHBhZ2UgPSB7XFxyXFxuICAgICAgICBkYXRhOiBmdW5jdGlvbiAoKSB7XFxyXFxuICAgICAgICAgICAgcmV0dXJuIHtcXHJcXG4gICAgICAgICAgICAgICAgbG9nZ2VkSW46IFxcXCJURVNUXFxcIlxcclxcbiAgICAgICAgICAgIH1cXHJcXG4gICAgICAgIH0sXFxyXFxuICAgICAgICBjcmVhdGVkOiBmdW5jdGlvbiAoKSB7XFxyXFxuICAgICAgICAgICAgY29uc29sZS5sb2coJ0BAQEBAQEBAQEBAQEAnKTtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgfTtcXHJcXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBwYWdlO1xcclxcbjwvc2NyaXB0PlwiXSxcInNvdXJjZVJvb3RcIjpcIndlYnBhY2s6Ly9cIn1dKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vfi92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtNWNhYTkxZTYhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9zcmMvdmlld3MvaW5kZXgudnVlXG4vLyBtb2R1bGUgaWQgPSAxNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCI8dGVtcGxhdGU+XHJcbiAgICA8aDE+QXV0aCBGbG93e3tsb2dnZWRJbn19PC9oMT5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzdHlsZT5cclxuICAgIGgxIHtcclxuICAgICAgICBjb2xvcjogI0YwMDtcclxuICAgIH1cclxuPC9zdHlsZT5cclxuXHJcbjxzY3JpcHQ+XHJcbiAgICBjbGFzcyB0ZXN0IHtcclxuICAgICAgICBkYXRhKCkge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgbG9nZ2VkSW46IFwiVEVTVFwiXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNyZWF0ZWQoKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdAQEBAQEBAQEBAQEBAJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgbGV0IHBhZ2UgPSB7XHJcbiAgICAgICAgZGF0YTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgbG9nZ2VkSW46IFwiVEVTVFwiXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGNyZWF0ZWQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ0BAQEBAQEBAQEBAQEAnKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBwYWdlO1xyXG48L3NjcmlwdD5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gaW5kZXgudnVlPzQwNGZhNDhhIiwibW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7XG4gIHJldHVybiBfdm0uX2goJ2gxJywgW1wiQXV0aCBGbG93XCIgKyBfdm0uX3MoX3ZtLmxvZ2dlZEluKV0pXG59LHN0YXRpY1JlbmRlckZuczogW119XG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKS5yZXJlbmRlcihcImRhdGEtdi01Y2FhOTFlNlwiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci5qcz9pZD1kYXRhLXYtNWNhYTkxZTYhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3NyYy92aWV3cy9pbmRleC52dWVcbi8vIG1vZHVsZSBpZCA9IDE2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=