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
	__webpack_require__(25); // 路由插件
	/**
	 * 描述: 入口页面
	 * 版权: Copyright (c) 2016
	 * 公司: 深圳市昊晨科技开发有限公司
	 * 作者: 陈元
	 * 版本: 1.0
	 * 创建日期: 2016/11/21
	 * 创建时间: 14:26
	 */
	
	
	_vue2.default.use(_vueRouter2.default); // 如果使用模块化机制编程
	var app = new _vue2.default({ router: _router2.default }).$mount('#app'); // 创建和挂载根实例

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
	exports.router = undefined;
	
	var _vueRouter = __webpack_require__(2);
	
	var _vueRouter2 = _interopRequireDefault(_vueRouter);
	
	var _view = __webpack_require__(4);
	
	var _view2 = _interopRequireDefault(_view);
	
	var _view3 = __webpack_require__(11);
	
	var _view4 = _interopRequireDefault(_view3);
	
	var _view5 = __webpack_require__(16);
	
	var _view6 = _interopRequireDefault(_view5);
	
	var _view7 = __webpack_require__(21);
	
	var _view8 = _interopRequireDefault(_view7);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// 引入UserMember视图
	
	// 定义路由
	// 引入User视图
	// 路由插件
	var routes = [{
	    name: "foo",
	    path: "/foo",
	    // redirect: "index",
	    component: {
	        template: "<div>foo</div>"
	    }
	}, {
	    name: "index",
	    path: "/index",
	    component: _view2.default
	}, {
	    name: "user",
	    path: "/user/:id",
	    component: _view4.default,
	    children: [{
	        path: "member",
	        component: _view8.default
	    }, {
	        path: "",
	        component: _view8.default
	    }]
	}, {
	    name: "tag",
	    path: "/tag",
	    component: _view6.default
	}]; // 引入标签视图
	// 引入indexVue
	/**
	 * 描述: 路由配置文件
	 * 版权: Copyright (c) 2016
	 * 公司: 深圳市昊晨科技开发有限公司
	 * 作者: 陈元
	 * 版本: 1.0
	 * 创建日期: 2016/11/23
	 * 创建时间: 10:11
	 */
	
	
	var router = new _vueRouter2.default({ routes: routes }); // 实例化一个VueRouter路由对象
	
	exports.default = router;
	exports.router = router;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	/**
	 * 描述: 用户视图
	 * 版权: Copyright (c) 2016
	 * 公司: 深圳市昊晨科技开发有限公司
	 * 作者: 陈元
	 * 版本: 1.0
	 * 创建日期: 2016/11/23
	 * 创建时间: 16:27
	 */
	var vue = __webpack_require__(5);
	
	// 数据初始化
	vue.data = function () {
	    return {
	        loggedIn: "TEST"
	    };
	};
	
	// 组件初始化事件
	vue.created = function () {
	    console.log('=====Index=====');
	};
	
	exports.default = vue;

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
	__vue_options__.__file = "E:\\TestWork\\vue\\src\\views\\index\\view.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-24e7788b", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-24e7788b", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] view.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
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
			module.hot.accept("!!./../../../node_modules/css-loader/index.js?sourceMap!./../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-24e7788b!./../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./view.vue", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js?sourceMap!./../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-24e7788b!./../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./view.vue");
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
	exports.push([module.id, "\nh1 {\n    color: #F00;\n}\n", "", {"version":3,"sources":["/./src/views/index/view.vue?5f6088cf"],"names":[],"mappings":";AAKA;IACA,YAAA;CACA","file":"view.vue","sourcesContent":["<template>\r\n    <h1>Auth Flow{{loggedIn}}</h1>\r\n</template>\r\n\r\n<style>\r\n    h1 {\r\n        color: #F00;\r\n    }\r\n</style>"],"sourceRoot":"webpack://"}]);
	
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
	  return _vm._h('h1', ["Auth Flow" + _vm._s(_vm.loggedIn)])
	},staticRenderFns: []}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-24e7788b", module.exports)
	  }
	}

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	/**
	 * 描述: 用户视图
	 * 版权: Copyright (c) 2016
	 * 公司: 深圳市昊晨科技开发有限公司
	 * 作者: 陈元
	 * 版本: 1.0
	 * 创建日期: 2016/11/23
	 * 创建时间: 16:27
	 */
	var vue = __webpack_require__(12);
	// 对象监听
	vue.watch = {
	    $route: function $route(to, from) {
	        console.log(to);
	        console.log(from);
	    }
	};
	
	// 数据初始化
	vue.data = function () {
	    return {
	        name: null,
	        message: "Hello World!"
	    };
	};
	
	// 组件初始化事件
	vue.created = function () {
	    console.log(this);
	    this["fetchData"]();
	    console.log('=====UserView Created=====');
	};
	
	vue.methods = {
	    fetchData: function fetchData() {
	        var _this = this;
	
	        setTimeout(function () {
	            _this.name = "User Created";
	        }, 2000);
	    }
	};
	
	exports.default = vue;

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* styles */
	__webpack_require__(13)
	
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
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(14);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(9)(content, {});
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
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(8)();
	// imports
	
	
	// module
	exports.push([module.id, "\nh1 {\n    color: #F00;\n}\n", "", {"version":3,"sources":["/./src/views/user/view.vue?20527c75"],"names":[],"mappings":";AACA;IACA,YAAA;CACA","file":"view.vue","sourcesContent":["<style>\r\n    h1 {\r\n        color: #F00;\r\n    }\r\n</style>\r\n\r\n<template>\r\n    <div id=\"user\">\r\n        <h1>Hello {{$data.name}}</h1>\r\n        <p>{{$route.params.id}}</p>\r\n        <div v-text=\"$data.message\"></div>\r\n        <router-view></router-view>\r\n    </div>\r\n</template>"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;
	  return _vm._h('div', {
	    attrs: {
	      "id": "user"
	    }
	  }, [_vm._h('h1', ["Hello " + _vm._s(_vm.$data.name)]), " ", _vm._h('p', [_vm._s(_vm.$route.params.id)]), " ", _vm._h('div', {
	    domProps: {
	      "textContent": _vm._s(_vm.$data.message)
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
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	/**
	 * 描述: 用户视图
	 * 版权: Copyright (c) 2016
	 * 公司: 深圳市昊晨科技开发有限公司
	 * 作者: 陈元
	 * 版本: 1.0
	 * 创建日期: 2016/11/23
	 * 创建时间: 16:27
	 */
	var vue = __webpack_require__(17);
	
	// 数据初始化
	vue.data = function () {
	    return {
	        name: "TagView"
	    };
	};
	
	// 组件初始化事件
	vue.created = function () {
	    console.log('=====Tag=====');
	};
	
	exports.default = vue;

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* styles */
	__webpack_require__(18)
	
	/* template */
	var __vue_template__ = __webpack_require__(20)
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
	__vue_options__.__file = "E:\\TestWork\\vue\\src\\views\\tag\\view.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-5d31b3c3", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-5d31b3c3", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] view.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(19);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(9)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js?sourceMap!./../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-5d31b3c3!./../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./view.vue", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js?sourceMap!./../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-5d31b3c3!./../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./view.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(8)();
	// imports
	
	
	// module
	exports.push([module.id, "\nh1 {\n    color: #F00;\n}\n", "", {"version":3,"sources":["/./src/views/tag/view.vue?e3861b4c"],"names":[],"mappings":";AAKA;IACA,YAAA;CACA","file":"view.vue","sourcesContent":["<template>\r\n    <h1>页面:{{$data.name}}</h1>\r\n</template>\r\n\r\n<style>\r\n    h1 {\r\n        color: #F00;\r\n    }\r\n</style>"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;
	  return _vm._h('h1', ["页面:" + _vm._s(_vm.$data.name)])
	},staticRenderFns: []}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-5d31b3c3", module.exports)
	  }
	}

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _view = __webpack_require__(22);
	
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
	
	
	var vue = __webpack_require__(23);
	
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
/* 22 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
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
	var View = function () {
	    function View() {
	        var view = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	
	        _classCallCheck(this, View);
	
	        for (var k in view) {
	            //  将Vue模板对象的方法拷贝到View实例上
	            if (view.hasOwnProperty(k)) this[k] = view[k];
	        }
	        this.methods = {};
	        this.methods.datas = {};
	    }
	
	    _createClass(View, [{
	        key: 'config',
	        value: function config(configMethod) {
	            var config = new configMethod();
	            for (var k in config) {
	                if (config.hasOwnProperty(k)) {
	                    this.setAttribute(k, config[k]);
	                }
	            }
	            this['AAAAAAA'] = "AAAAAAAAAAA";
	            this.methods['BBBBBBB'] = "BBBBBBB";
	            console.log(this);
	        }
	    }, {
	        key: 'setAttribute',
	        value: function setAttribute(name, value) {
	            if (name == "created" || name == "watch" || name == "data") {
	                this[name] = value;
	                return;
	            }
	
	            if (typeof value == "function") {
	                this.methods[name] = value;
	            }
	        }
	    }]);
	
	    return View;
	}();
	
	exports.default = View;
	exports.View = View;

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* template */
	var __vue_template__ = __webpack_require__(24)
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
/* 24 */
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
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(26);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(27)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js?sourceMap!./../../../node_modules/sass-loader/index.js?sourceMap!./main.scss", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js?sourceMap!./../../../node_modules/sass-loader/index.js?sourceMap!./main.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(8)();
	// imports
	
	
	// module
	exports.push([module.id, "* {\n  padding: 0;\n  margin: 0; }\n\na {\n  text-decoration: none; }\n\n#app #menu {\n  padding: 20px 0;\n  border-bottom: 2px solid #FF0;\n  text-align: center; }\n  #app #menu a {\n    display: inline-block;\n    height: 30px;\n    line-height: 30px;\n    background: #CCCCCC;\n    padding: 0 20px; }\n", "", {"version":3,"sources":["/./src/assets/scss/src/assets/scss/main.scss"],"names":[],"mappings":"AAAA;EACE,WAAW;EACX,UAAU,EACX;;AAED;EACE,sBAAsB,EACvB;;AAED;EAEI,gBAAe;EACf,8BAA6B;EAC7B,mBAAmB,EAQpB;EAZH;IAMM,sBAAsB;IACtB,aAAa;IACb,kBAAkB;IAClB,oBAAoB;IACpB,gBAAgB,EACjB","file":"main.scss","sourcesContent":["* {\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\n\r\na {\r\n  text-decoration: none;\r\n}\r\n\r\n#app {\r\n  #menu {\r\n    padding:20px 0;\r\n    border-bottom:2px solid #FF0;\r\n    text-align: center;\r\n    a {\r\n      display: inline-block;\r\n      height: 30px;\r\n      line-height: 30px;\r\n      background: #CCCCCC;\r\n      padding: 0 20px;\r\n    }\r\n  }\r\n}"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 27 */
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
	
	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}
	
	function addStyle(obj, options) {
		var styleElement, update, remove;
	
		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
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
	
		if(media) {
			styleElement.setAttribute("media", media)
		}
	
		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}
	
	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;
	
		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}
	
		var blob = new Blob([css], { type: "text/css" });
	
		var oldSrc = linkElement.href;
	
		linkElement.href = URL.createObjectURL(blob);
	
		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNDQ3NTZhNTBiZDBmOTY1YjQzODgiLCJ3ZWJwYWNrOi8vLy4vRTovVGVzdFdvcmsvdnVlL3NyYy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vRTovVGVzdFdvcmsvdnVlL34vdnVlL2Rpc3QvdnVlLm1pbi5qcyIsIndlYnBhY2s6Ly8vLi9FOi9UZXN0V29yay92dWUvfi92dWUtcm91dGVyL2Rpc3QvdnVlLXJvdXRlci5qcyIsIndlYnBhY2s6Ly8vLi9FOi9UZXN0V29yay92dWUvc3JjL3JvdXRlci5qcyIsIndlYnBhY2s6Ly8vLi9FOi9UZXN0V29yay92dWUvc3JjL3ZpZXdzL2luZGV4L3ZpZXcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL2luZGV4L3ZpZXcudnVlIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9pbmRleC92aWV3LnZ1ZT83MWE4Iiwid2VicGFjazovLy8uL3NyYy92aWV3cy9pbmRleC92aWV3LnZ1ZT8xYmUwIiwid2VicGFjazovLy8uL0U6L1Rlc3RXb3JrL3Z1ZS9+L2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzIiwid2VicGFjazovLy8uL34vdnVlLXN0eWxlLWxvYWRlci9hZGRTdHlsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL2luZGV4L3ZpZXcudnVlPzEwZWQiLCJ3ZWJwYWNrOi8vLy4vRTovVGVzdFdvcmsvdnVlL3NyYy92aWV3cy91c2VyL3ZpZXcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL3VzZXIvdmlldy52dWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL3VzZXIvdmlldy52dWU/ZDQ4NCIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvdXNlci92aWV3LnZ1ZT8zZjZkIiwid2VicGFjazovLy8uL3NyYy92aWV3cy91c2VyL3ZpZXcudnVlP2NlOGMiLCJ3ZWJwYWNrOi8vLy4vRTovVGVzdFdvcmsvdnVlL3NyYy92aWV3cy90YWcvdmlldy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvdGFnL3ZpZXcudnVlIiwid2VicGFjazovLy8uL3NyYy92aWV3cy90YWcvdmlldy52dWU/MDNjOSIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvdGFnL3ZpZXcudnVlP2QwYWEiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL3RhZy92aWV3LnZ1ZT81YWY3Iiwid2VicGFjazovLy8uL0U6L1Rlc3RXb3JrL3Z1ZS9zcmMvdmlld3MvdXNlci9tZW1iZXIvdmlldy5qcyIsIndlYnBhY2s6Ly8vLi9FOi9UZXN0V29yay92dWUvc3JjL3V0aWxzL3ZpZXcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL3VzZXIvbWVtYmVyL3ZpZXcudnVlIiwid2VicGFjazovLy8uL3NyYy92aWV3cy91c2VyL21lbWJlci92aWV3LnZ1ZT9hOGFkIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvc2Nzcy9tYWluLnNjc3M/MTE5NCIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3Njc3MvbWFpbi5zY3NzIiwid2VicGFjazovLy8uL34vc3R5bGUtbG9hZGVyL2FkZFN0eWxlcy5qcyJdLCJuYW1lcyI6WyJyZXF1aXJlIiwidXNlIiwiYXBwIiwicm91dGVyIiwiJG1vdW50IiwiZSIsInQiLCJleHBvcnRzIiwibW9kdWxlIiwiVnVlIiwiSlNPTiIsInN0cmluZ2lmeSIsIlN0cmluZyIsInBhcnNlRmxvYXQiLCJuIiwiT2JqZWN0IiwiY3JlYXRlIiwiciIsInNwbGl0IiwiaSIsImxlbmd0aCIsInRvTG93ZXJDYXNlIiwiaW5kZXhPZiIsInNwbGljZSIsIlVyIiwiY2FsbCIsIm8iLCJhIiwicyIsImFyZ3VtZW50cyIsImFwcGx5IiwiX2xlbmd0aCIsImMiLCJBcnJheSIsImwiLCJ1IiwiZiIsInFyIiwiV3IiLCJkIiwicCIsInYiLCJyZWR1Y2UiLCJjb25jYXQiLCJzdGF0aWNLZXlzIiwiam9pbiIsImgiLCJtIiwiZyIsImNoYXJDb2RlQXQiLCJ5IiwiZGVmaW5lUHJvcGVydHkiLCJ2YWx1ZSIsImVudW1lcmFibGUiLCJ3cml0YWJsZSIsImNvbmZpZ3VyYWJsZSIsIl8iLCJHciIsInRlc3QiLCJiIiwidG9TdHJpbmciLCIkIiwiZGkiLCJ0YXJnZXQiLCJwaSIsInB1c2giLCJ3IiwicG9wIiwieCIsIl9fcHJvdG9fXyIsIkMiLCJrIiwiX19vYl9fIiwieWkiLCJnaSIsInNob3VsZENvbnZlcnQiLCJvaSIsImlzQXJyYXkiLCJpc0V4dGVuc2libGUiLCJfaXNWdWUiLCJBIiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIiwiZ2V0Iiwic2V0IiwiZGVwZW5kIiwiZGVwIiwiVCIsIm5vdGlmeSIsIk8iLCJNYXRoIiwibWF4Iiwidm1Db3VudCIsIlMiLCJqIiwia2V5cyIsIkUiLCJOIiwiTCIsInByb3BzIiwiVnIiLCJ0eXBlIiwiRCIsImRpcmVjdGl2ZXMiLCJiaW5kIiwidXBkYXRlIiwiTSIsIl9pIiwiYmkiLCJleHRlbmRzIiwib3B0aW9ucyIsIm1peGlucyIsInByb3RvdHlwZSIsIlJlIiwiUCIsInpyIiwiUiIsIkIiLCJLciIsIkkiLCJkZWZhdWx0IiwiJG9wdGlvbnMiLCJwcm9wc0RhdGEiLCJGdW5jdGlvbiIsIkYiLCJtYXRjaCIsIlUiLCJ3aSIsInhpIiwiQ2kiLCJraSIsIkgiLCJzb3J0IiwiaWQiLCJBaSIsInJ1biIsImxpIiwiZGV2dG9vbHMiLCJhaSIsImVtaXQiLCJWIiwic2kiLCJ6IiwiVGkiLCJjbGVhciIsIkoiLCJoYXMiLCJhZGQiLCJLIiwiX3dhdGNoZXJzIiwicSIsIlciLCJaIiwiWSIsIlEiLCJfcHJvcEtleXMiLCIkcGFyZW50IiwiZGF0YSIsIl9kYXRhIiwidGUiLCJjb21wdXRlZCIsImppIiwiRyIsImNhY2hlIiwiU2kiLCJsYXp5IiwiZGlydHkiLCJldmFsdWF0ZSIsIm1ldGhvZHMiLCJ3YXRjaCIsIlgiLCJoYW5kbGVyIiwiJHdhdGNoIiwiZWUiLCIkc2V0IiwiJGRlbGV0ZSIsInVzZXIiLCJpbW1lZGlhdGUiLCJ0ZWFyZG93biIsIm5lIiwiRWkiLCJ0YWciLCJjaGlsZHJlbiIsInRleHQiLCJlbG0iLCJucyIsImNvbnRleHQiLCJjb21wb25lbnRPcHRpb25zIiwiaXNTdGF0aWMiLCJrZXkiLCJpc0Nsb25lZCIsInJlIiwiaWUiLCJfX2luamVjdGVkIiwib2UiLCJmbiIsImNoYXJBdCIsInNsaWNlIiwiaW52b2tlciIsImFlIiwic2UiLCJjZSIsImxlIiwidWUiLCJmZSIsImZpbHRlciIsImRlIiwicGFyZW50IiwiYWJzdHJhY3QiLCIkY2hpbGRyZW4iLCIkcm9vdCIsIiRyZWZzIiwiX3dhdGNoZXIiLCJfaW5hY3RpdmUiLCJfaXNNb3VudGVkIiwiX2lzRGVzdHJveWVkIiwiX2lzQmVpbmdEZXN0cm95ZWQiLCJwZSIsIl9tb3VudCIsIiRlbCIsInJlbmRlciIsIk5pIiwidmUiLCJfdXBkYXRlIiwiX3JlbmRlciIsIiR2bm9kZSIsIkxpIiwiX3Zub2RlIiwiX19wYXRjaF9fIiwiX192dWVfXyIsIl91cGRhdGVGcm9tUGFyZW50IiwiX3JlbmRlckNoaWxkcmVuIiwiX3BhcmVudFZub2RlIiwiX3BhcmVudExpc3RlbmVycyIsIl91cGRhdGVMaXN0ZW5lcnMiLCIkc2xvdHMiLCJFZSIsIl9yZW5kZXJDb250ZXh0IiwiJGZvcmNlVXBkYXRlIiwiJGRlc3Ryb3kiLCIkb2ZmIiwiJGVtaXQiLCJoZSIsIl9iYXNlIiwiZXh0ZW5kIiwiY2lkIiwicmVzb2x2ZWQiLCJ3ZSIsIlBlIiwieGUiLCJmdW5jdGlvbmFsIiwibWUiLCJvbiIsIm5hdGl2ZU9uIiwia2UiLCJuYW1lIiwiQ3RvciIsImxpc3RlbmVycyIsIk9lIiwiX3NlbGYiLCJzbG90cyIsImZ1bmN0aW9uYWxDb250ZXh0Iiwic2xvdCIsImdlIiwiX2lzQ29tcG9uZW50IiwiX2NvbXBvbmVudFRhZyIsImlubGluZVRlbXBsYXRlIiwic3RhdGljUmVuZGVyRm5zIiwieWUiLCJjaGlsZCIsImtlZXBBbGl2ZSIsIl9lIiwiYmUiLCIkZSIsInJlcXVlc3RlZCIsInBlbmRpbmdDYWxsYmFja3MiLCJ0aGVuIiwiYXR0cnMiLCJkb21Qcm9wcyIsIkNlIiwiaG9vayIsIk1pIiwiRGkiLCJBZSIsIlNlIiwic2NvcGVkU2xvdHMiLCJnZXRUYWdOYW1lc3BhY2UiLCJpc1Jlc2VydmVkVGFnIiwiVGUiLCJfc3RhdGljVHJlZXMiLCIkc2NvcGVkU2xvdHMiLCIkY3JlYXRlRWxlbWVudCIsImVsIiwiamUiLCJpc09uY2UiLCIkbmV4dFRpY2siLCJfcmVuZGVyUHJveHkiLCJlcnJvckhhbmRsZXIiLCJjb25zb2xlIiwiZXJyb3IiLCJfaCIsIl9zIiwiX24iLCJfcSIsIl9tIiwiX28iLCJfZiIsIl9sIiwiX3QiLCJfYiIsIm11c3RVc2VQcm9wIiwiX2siLCJrZXlDb2RlcyIsImlzQ29tbWVudCIsIk5lIiwiX2V2ZW50cyIsIiRvbiIsIkxlIiwiJG9uY2UiLCJEZSIsIl9pbml0IiwiX3VpZCIsIlBpIiwiTWUiLCJjb25zdHJ1Y3RvciIsInN1cGVyIiwic3VwZXJPcHRpb25zIiwiZXh0ZW5kT3B0aW9ucyIsIl9zY29wZUlkIiwiY29tcG9uZW50cyIsIkllIiwiaW5zdGFsbGVkIiwidW5zaGlmdCIsImluc3RhbGwiLCJGZSIsIm1peGluIiwiQmUiLCJfQ3RvciIsIl9hc3NldFR5cGVzIiwiZm9yRWFjaCIsIlVlIiwiSGUiLCJWZSIsInV0aWwiLCIkaSIsImRlbGV0ZSIsIm5leHRUaWNrIiwiRmkiLCJ6ZSIsIkplIiwiS2UiLCJzdGF0aWNDbGFzcyIsInFlIiwiY2xhc3MiLCJXZSIsIlplIiwiWGkiLCJHZSIsIlFyIiwidG8iLCJubyIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsIndpbmRvdyIsIkhUTUxVbmtub3duRWxlbWVudCIsIkhUTUxFbGVtZW50IiwiWWUiLCJxdWVyeVNlbGVjdG9yIiwiUWUiLCJzZXRBdHRyaWJ1dGUiLCJYZSIsImNyZWF0ZUVsZW1lbnROUyIsIldpIiwiZXQiLCJjcmVhdGVUZXh0Tm9kZSIsInR0IiwiY3JlYXRlQ29tbWVudCIsIm50IiwiaW5zZXJ0QmVmb3JlIiwicnQiLCJyZW1vdmVDaGlsZCIsIml0IiwiYXBwZW5kQ2hpbGQiLCJvdCIsInBhcmVudE5vZGUiLCJhdCIsIm5leHRTaWJsaW5nIiwic3QiLCJ0YWdOYW1lIiwiY3QiLCJ0ZXh0Q29udGVudCIsImx0IiwiY2hpbGROb2RlcyIsInV0IiwiZnQiLCJyZWYiLCJyZWZJbkZvciIsImR0IiwicHQiLCJ2dCIsImh0IiwibXQiLCJpc1Jvb3RJbnNlcnQiLCJpbml0Iiwib28iLCJpbnNlcnQiLCJwZW5kaW5nSW5zZXJ0IiwiZGVzdHJveSIsInJlbW92ZSIsInByZXBhdGNoIiwic2V0VGV4dENvbnRlbnQiLCJwb3N0cGF0Y2giLCJtb2R1bGVzIiwibm9kZU9wcyIsImFvIiwibm9kZVR5cGUiLCJoYXNBdHRyaWJ1dGUiLCJyZW1vdmVBdHRyaWJ1dGUiLCJndCIsInl0Iiwib2xkVmFsdWUiLCJidCIsImRlZiIsImNvbXBvbmVudFVwZGF0ZWQiLCJpbnNlcnRlZCIsIm1vZGlmaWVycyIsImNvIiwicmF3TmFtZSIsIiR0Iiwid3QiLCJKaSIsInJlbW92ZUF0dHJpYnV0ZU5TIiwiemkiLCJLaSIsIkhpIiwiVmkiLCJxaSIsInNldEF0dHJpYnV0ZU5TIiwieHQiLCJfdHJhbnNpdGlvbkNsYXNzZXMiLCJfcHJldkNsYXNzIiwiQ3QiLCJfdl9hZGQiLCJhZGRFdmVudExpc3RlbmVyIiwiX3ZfcmVtb3ZlIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImt0IiwiX3ZhbHVlIiwiY29tcG9zaW5nIiwiQXQiLCJPdCIsInN0eWxlIiwic3RhdGljU3R5bGUiLCJobyIsIlN0IiwiVHQiLCJnbyIsImp0IiwidHJpbSIsImNsYXNzTGlzdCIsImdldEF0dHJpYnV0ZSIsIkV0IiwicmVwbGFjZSIsIk50IiwiU28iLCJMdCIsIkR0IiwiTXQiLCJQdCIsInRpbWVvdXQiLCJwcm9wQ291bnQiLCJ3byIsImtvIiwiT28iLCJzZXRUaW1lb3V0IiwiZ2V0Q29tcHV0ZWRTdHlsZSIsIkNvIiwiUnQiLCJBbyIsInhvIiwiVG8iLCJoYXNUcmFuc2Zvcm0iLCJtYXAiLCJJdCIsIk51bWJlciIsIkZ0IiwiX2xlYXZlQ2IiLCJjYW5jZWxsZWQiLCJVdCIsInRyYW5zaXRpb24iLCJfZW50ZXJDYiIsImNzcyIsImVudGVyQ2xhc3MiLCJlbnRlckFjdGl2ZUNsYXNzIiwiYXBwZWFyQ2xhc3MiLCJhcHBlYXJBY3RpdmVDbGFzcyIsImJlZm9yZUVudGVyIiwiZW50ZXIiLCJhZnRlckVudGVyIiwiZW50ZXJDYW5jZWxsZWQiLCJiZWZvcmVBcHBlYXIiLCJhcHBlYXIiLCJhZnRlckFwcGVhciIsImFwcGVhckNhbmNlbGxlZCIsInRpIiwiSHQiLCJzaG93IiwiX3BlbmRpbmciLCJCdCIsImxlYXZlQ2xhc3MiLCJsZWF2ZUFjdGl2ZUNsYXNzIiwiYmVmb3JlTGVhdmUiLCJsZWF2ZSIsImFmdGVyTGVhdmUiLCJsZWF2ZUNhbmNlbGxlZCIsImRlbGF5TGVhdmUiLCJqbyIsIlZ0IiwibXVsdGlwbGUiLCJKdCIsInNlbGVjdGVkIiwic2VsZWN0ZWRJbmRleCIsInp0IiwiS3QiLCJxdCIsIld0IiwiY3JlYXRlRXZlbnQiLCJpbml0RXZlbnQiLCJkaXNwYXRjaEV2ZW50IiwiWnQiLCJHdCIsIll0IiwiUXQiLCJYdCIsImVuIiwiX21vdmVDYiIsInRuIiwibmV3UG9zIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0Iiwibm4iLCJwb3MiLCJsZWZ0IiwidG9wIiwibW92ZWQiLCJ0cmFuc2Zvcm0iLCJXZWJraXRUcmFuc2Zvcm0iLCJ0cmFuc2l0aW9uRHVyYXRpb24iLCJybiIsImlubmVySFRNTCIsIlZvIiwiYW4iLCJEYSIsIk5hIiwiTGEiLCJNYSIsIlBhIiwic24iLCJzdWJzdHJpbmciLCJZbyIsInN0YXJ0IiwiUW8iLCJXbyIsInVuYXJ5U2xhc2giLCJlbmQiLCJRaSIsIllpIiwicmEiLCJzaG91bGREZWNvZGVOZXdsaW5lcyIsImV4cGVjdEhUTUwiLCJpc1VuYXJ5VGFnIiwiWnIiLCJqYSIsInNmYyIsIkVhIiwiUmVnRXhwIiwiY2hhcnMiLCJ0YSIsIm5hIiwiZWEiLCJYbyIsImNuIiwibG4iLCJ1biIsIkZhIiwiUmEiLCJsYXN0SW5kZXgiLCJleGVjIiwiaW5kZXgiLCJkbiIsInBuIiwidm4iLCJobiIsImFyZyIsIm1uIiwiY2FwdHVyZSIsIm5hdGl2ZSIsIm5hdGl2ZUV2ZW50cyIsImV2ZW50cyIsImduIiwieW4iLCJhdHRyc01hcCIsImF0dHJzTGlzdCIsIm9hIiwiaWEiLCJzYSIsImNhIiwibGEiLCJsYXN0SW5kZXhPZiIsImV4cCIsImlkeCIsIiRuIiwiYWEiLCJibiIsInduIiwiQ24iLCJ4biIsImtuIiwidWEiLCJ3YXJuIiwiZmEiLCJkYSIsInBhIiwiaXNQcmVUYWciLCJ2YSIsImhhIiwibWEiLCJnYSIsImRlbGltaXRlcnMiLCJwcmVzZXJ2ZVdoaXRlc3BhY2UiLCJlaSIsIlZuIiwiQm4iLCJIbiIsImZvcmJpZGRlbiIsIkFuIiwicHJlIiwiT24iLCJqbiIsIkVuIiwiRG4iLCJTbiIsInBsYWluIiwiVG4iLCJNbiIsIlBuIiwiUm4iLCJpZiIsImVsc2VpZiIsImVsc2UiLCJMbiIsImJsb2NrIiwiTm4iLCJzbG90U2NvcGUiLCJzbG90VGFyZ2V0IiwicGxhY2Vob2xkZXIiLCJxYSIsImV4cHJlc3Npb24iLCJJbiIsIlVhIiwiZm9yIiwiSGEiLCJhbGlhcyIsIml0ZXJhdG9yMSIsIml0ZXJhdG9yMiIsIlVuIiwiY29uZGl0aW9ucyIsIm9uY2UiLCJzbG90TmFtZSIsImNvbXBvbmVudCIsIkJhIiwiaGFzQmluZGluZ3MiLCJGbiIsIkthIiwiVmEiLCJwcm9wIiwiY2FtZWwiLCJ6YSIsIkphIiwiV2EiLCJaYSIsInpuIiwieWEiLCJHYSIsIl9hIiwiS24iLCJxbiIsIkpuIiwic3RhdGljIiwiWm4iLCJzdGF0aWNJbkZvciIsInN0YXRpY1Jvb3QiLCJXbiIsIkJyIiwiR24iLCJldmVyeSIsIlluIiwiUW4iLCJ0cyIsImVzIiwiWG4iLCJRYSIsIllhIiwiZXIiLCJwYXJzZUludCIsIlhhIiwidHIiLCJ3cmFwRGF0YSIsIm5yIiwiQ2EiLCJrYSIsIkFhIiwiYmEiLCIkYSIsIndhIiwieGEiLCJyciIsInN0YXRpY1Byb2Nlc3NlZCIsImlyIiwib25jZVByb2Nlc3NlZCIsIm9yIiwiZm9yUHJvY2Vzc2VkIiwiY3IiLCJpZlByb2Nlc3NlZCIsImFyIiwiZ3IiLCJ5ciIsImxyIiwidnIiLCJzciIsInNoaWZ0IiwidXIiLCJfciIsImRyIiwiZnIiLCJycyIsInByIiwic2NvcGUiLCJociIsIm1yIiwiYnIiLCIkciIsImFzdCIsIndyIiwiY2xhc3NCaW5kaW5nIiwieHIiLCJDciIsInN0eWxlQmluZGluZyIsImtyIiwiQXIiLCJPYSIsImpyIiwiT3IiLCJTciIsIlRyIiwibnVtYmVyIiwiRXIiLCJOciIsIkxyIiwiRHIiLCJscyIsIk1yIiwidWkiLCJjcyIsIlByIiwiUnIiLCJvdXRlckhUTUwiLCJjbG9uZU5vZGUiLCJJciIsIkZyIiwiaGFzT3duUHJvcGVydHkiLCJIciIsInRvVXBwZXJDYXNlIiwiSnIiLCJZciIsIlhyIiwibmF2aWdhdG9yIiwidXNlckFnZW50IiwibmkiLCJyaSIsImlpIiwiZ2xvYmFsIiwicHJvY2VzcyIsImVudiIsIlZVRV9FTlYiLCJfX1ZVRV9ERVZUT09MU19HTE9CQUxfSE9PS19fIiwiUHJvbWlzZSIsInJlc29sdmUiLCJNdXRhdGlvbk9ic2VydmVyIiwib2JzZXJ2ZSIsImNoYXJhY3RlckRhdGEiLCJTZXQiLCJjaSIsIm9wdGlvbk1lcmdlU3RyYXRlZ2llcyIsInNpbGVudCIsImlnbm9yZWRFbGVtZW50cyIsImlzVW5rbm93bkVsZW1lbnQiLCJfbGlmZWN5Y2xlSG9va3MiLCJfbWF4VXBkYXRlQ291bnQiLCJmaSIsInN1YnMiLCJhZGRTdWIiLCJyZW1vdmVTdWIiLCJhZGREZXAiLCJ2aSIsImhpIiwib2JzZXJ2ZUFycmF5IiwibWkiLCJnZXRPd25Qcm9wZXJ0eU5hbWVzIiwiaXNTZXR0aW5nUHJvcHMiLCJ3YWxrIiwiZnJlZXplIiwiZGVmaW5lUmVhY3RpdmUiLCJfdG9TdHJpbmciLCJ0b051bWJlciIsIm1ha2VNYXAiLCJpc0J1aWx0SW5UYWciLCJoYXNPd24iLCJpc1ByaW1pdGl2ZSIsImNhY2hlZCIsImNhbWVsaXplIiwiY2FwaXRhbGl6ZSIsImh5cGhlbmF0ZSIsInRvQXJyYXkiLCJpc09iamVjdCIsImlzUGxhaW5PYmplY3QiLCJ0b09iamVjdCIsIm5vb3AiLCJnZW5TdGF0aWNLZXlzIiwibG9vc2VFcXVhbCIsImxvb3NlSW5kZXhPZiIsImlzUmVzZXJ2ZWQiLCJwYXJzZVBhdGgiLCJoYXNQcm90byIsImluQnJvd3NlciIsIlVBIiwiaXNJRSIsImlzSUU5IiwiaXNFZGdlIiwiaXNBbmRyb2lkIiwiaXNJT1MiLCJpc1NlcnZlclJlbmRlcmluZyIsIl9TZXQiLCJtZXJnZU9wdGlvbnMiLCJyZXNvbHZlQXNzZXQiLCJmb3JtYXRDb21wb25lbnROYW1lIiwidmFsaWRhdGVQcm9wIiwiT2kiLCJ2bSIsImRlZXAiLCJzeW5jIiwiY2IiLCJhY3RpdmUiLCJkZXBzIiwibmV3RGVwcyIsImRlcElkcyIsIm5ld0RlcElkcyIsImdldHRlciIsImNsZWFudXBEZXBzIiwiX3ZGb3JSZW1vdmluZyIsInJhdyIsIlJpIiwiSWkiLCJpbmNsdWRlIiwiZXhjbHVkZSIsImNyZWF0ZWQiLCJkZXN0cm95ZWQiLCJLZWVwQWxpdmUiLCJ2ZXJzaW9uIiwiQmkiLCJVaSIsInN2ZyIsIm1hdGgiLCJ4aHRtbCIsIlppIiwiR2kiLCJlbyIsInJvIiwiaW8iLCJzbyIsImxvIiwidW8iLCJmbyIsInBvIiwidm8iLCJtbyIsInNldFByb3BlcnR5IiwieW8iLCJibyIsIiRvIiwib250cmFuc2l0aW9uZW5kIiwib253ZWJraXR0cmFuc2l0aW9uZW5kIiwib25hbmltYXRpb25lbmQiLCJvbndlYmtpdGFuaW1hdGlvbmVuZCIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsIkVvIiwiTm8iLCJMbyIsIkRvIiwiYWN0aXZlRWxlbWVudCIsInZtb2RlbCIsIk1vIiwic29tZSIsIlBvIiwiZGlzcGxheSIsIl9fdk9yaWdpbmFsRGlzcGxheSIsIlJvIiwibW9kZWwiLCJJbyIsIkJvb2xlYW4iLCJtb2RlIiwiRm8iLCJfbGVhdmluZyIsIkJvIiwibW92ZUNsYXNzIiwiVW8iLCJwcmV2Q2hpbGRyZW4iLCJrZXB0IiwicmVtb3ZlZCIsImJlZm9yZVVwZGF0ZSIsInVwZGF0ZWQiLCJoYXNNb3ZlIiwiYm9keSIsIm9mZnNldEhlaWdodCIsInByb3BlcnR5TmFtZSIsIl9oYXNNb3ZlIiwiSG8iLCJUcmFuc2l0aW9uIiwiVHJhbnNpdGlvbkdyb3VwIiwiY29uZmlnIiwiem8iLCJKbyIsIktvIiwicW8iLCJzb3VyY2UiLCJabyIsIkdvIiwiU2EiLCJUYSIsIklhIiwiZXNjIiwidGFiIiwic3BhY2UiLCJ1cCIsInJpZ2h0IiwiZG93biIsInN0b3AiLCJwcmV2ZW50Iiwic2VsZiIsImN0cmwiLCJhbHQiLCJtZXRhIiwiY2xvYWsiLCJpcyIsInRyYW5zZm9ybU5vZGUiLCJnZW5EYXRhIiwib3MiLCJhcyIsInNzIiwiaHRtbCIsInVzIiwiZnMiLCJkb2N1bWVudEVsZW1lbnQiLCJ0ZW1wbGF0ZSIsImNvbXBpbGUiLCJmYWN0b3J5IiwiVnVlUm91dGVyIiwiVmlldyIsInJvdXRlclZpZXciLCJyb3V0ZSIsIiRyb3V0ZSIsIl9yb3V0ZXJWaWV3Q2FjaGUiLCJkZXB0aCIsImluYWN0aXZlIiwicm91dGVyVmlld0RlcHRoIiwibWF0Y2hlZCIsImhvb2tzIiwidm5vZGUiLCJpbnN0YW5jZXMiLCJvbGRWbm9kZSIsInVuZGVmaW5lZCIsInJlc29sdmVQYXRoIiwicmVsYXRpdmUiLCJiYXNlIiwiYXBwZW5kIiwic3RhY2siLCJzZWdtZW50cyIsInNlZ21lbnQiLCJwYXRoIiwiaGFzaCIsInF1ZXJ5IiwiaGFzaEluZGV4IiwicXVlcnlJbmRleCIsImNsZWFuUGF0aCIsImFzc2VydCIsImNvbmRpdGlvbiIsIm1lc3NhZ2UiLCJFcnJvciIsImVuY29kZSIsImVuY29kZVVSSUNvbXBvbmVudCIsImRlY29kZSIsImRlY29kZVVSSUNvbXBvbmVudCIsInJlc29sdmVRdWVyeSIsImV4dHJhUXVlcnkiLCJwYXJzZWRRdWVyeSIsInBhcnNlUXVlcnkiLCJyZXMiLCJwYXJhbSIsInBhcnRzIiwidmFsIiwic3RyaW5naWZ5UXVlcnkiLCJvYmoiLCJyZXN1bHQiLCJ2YWwyIiwiY3JlYXRlUm91dGUiLCJyZWNvcmQiLCJsb2NhdGlvbiIsInJlZGlyZWN0ZWRGcm9tIiwicGFyYW1zIiwiZnVsbFBhdGgiLCJnZXRGdWxsUGF0aCIsImZvcm1hdE1hdGNoIiwiU1RBUlQiLCJ0cmFpbGluZ1NsYXNoUkUiLCJpc1NhbWVSb3V0ZSIsImlzT2JqZWN0RXF1YWwiLCJhS2V5cyIsImJLZXlzIiwiaXNJbmNsdWRlZFJvdXRlIiwiY3VycmVudCIsInF1ZXJ5SW5jbHVkZXMiLCJub3JtYWxpemVMb2NhdGlvbiIsIm5leHQiLCJfbm9ybWFsaXplZCIsInBhcnNlZFBhdGgiLCJiYXNlUGF0aCIsInRvVHlwZXMiLCJMaW5rIiwicmVxdWlyZWQiLCJleGFjdCIsImFjdGl2ZUNsYXNzIiwidGhpcyQxIiwiJHJvdXRlciIsImhpc3RvcnkiLCJocmVmIiwiY3JlYXRlSHJlZiIsImNsYXNzZXMiLCJsaW5rQWN0aXZlQ2xhc3MiLCJjb21wYXJlVGFyZ2V0IiwiY2xpY2siLCJtZXRhS2V5IiwiY3RybEtleSIsInNoaWZ0S2V5IiwiZGVmYXVsdFByZXZlbnRlZCIsImJ1dHRvbiIsInByZXZlbnREZWZhdWx0IiwiZmluZEFuY2hvciIsIl9WdWUiLCJhRGF0YSIsImFBdHRycyIsIl9yb3V0ZXIiLCJnZXQkMSIsIl9yb3V0ZSIsImJlZm9yZUNyZWF0ZSIsInN0cmF0cyIsImJlZm9yZVJvdXRlRW50ZXIiLCJiZWZvcmVSb3V0ZUxlYXZlIiwiX19tb2R1bGVFeHBvcnRzIiwiYXJyIiwiaXNhcnJheSIsInBhdGhUb1JlZ2V4cCIsInBhcnNlXzEiLCJwYXJzZSIsImNvbXBpbGVfMSIsInRva2Vuc1RvRnVuY3Rpb25fMSIsInRva2Vuc1RvRnVuY3Rpb24iLCJ0b2tlbnNUb1JlZ0V4cF8xIiwidG9rZW5zVG9SZWdFeHAiLCJQQVRIX1JFR0VYUCIsInN0ciIsInRva2VucyIsImRlZmF1bHREZWxpbWl0ZXIiLCJkZWxpbWl0ZXIiLCJlc2NhcGVkIiwib2Zmc2V0IiwicHJlZml4IiwiZ3JvdXAiLCJtb2RpZmllciIsImFzdGVyaXNrIiwicGFydGlhbCIsInJlcGVhdCIsIm9wdGlvbmFsIiwicGF0dGVybiIsImVzY2FwZUdyb3VwIiwiZXNjYXBlU3RyaW5nIiwic3Vic3RyIiwiZW5jb2RlVVJJQ29tcG9uZW50UHJldHR5IiwiZW5jb2RlVVJJIiwiZW5jb2RlQXN0ZXJpc2siLCJtYXRjaGVzIiwib3B0cyIsInByZXR0eSIsInRva2VuIiwiVHlwZUVycm9yIiwiYXR0YWNoS2V5cyIsImZsYWdzIiwic2Vuc2l0aXZlIiwicmVnZXhwVG9SZWdleHAiLCJncm91cHMiLCJhcnJheVRvUmVnZXhwIiwicmVnZXhwIiwic3RyaW5nVG9SZWdleHAiLCJzdHJpY3QiLCJlbmRzV2l0aERlbGltaXRlciIsImNyZWF0ZVJvdXRlTWFwIiwicm91dGVzIiwicGF0aE1hcCIsIm5hbWVNYXAiLCJhZGRSb3V0ZVJlY29yZCIsIm1hdGNoQXMiLCJub3JtYWxpemVQYXRoIiwicmVkaXJlY3QiLCJyZWdleHBDYWNoZSIsInJlZ2V4cFBhcmFtc0NhY2hlIiwicmVnZXhwQ29tcGlsZUNhY2hlIiwiY3JlYXRlTWF0Y2hlciIsImN1cnJlbnRSb3V0ZSIsInBhcmFtTmFtZXMiLCJnZXRQYXJhbXMiLCJmaWxsUGFyYW1zIiwiX2NyZWF0ZVJvdXRlIiwibWF0Y2hSb3V0ZSIsIm9yaWdpbmFsUmVkaXJlY3QiLCJ0YXJnZXRSZWNvcmQiLCJyYXdQYXRoIiwicmVzb2x2ZVJlY29yZFBhdGgiLCJyZXNvbHZlZFBhdGgiLCJhbGlhc2VkUGF0aCIsImFsaWFzZWRNYXRjaCIsImFsaWFzZWRSZWNvcmQiLCJnZXRSb3V0ZVJlZ2V4IiwiaGl0IiwicGF0aG5hbWUiLCJsZW4iLCJyb3V0ZU1zZyIsImZpbGxlciIsInN1cHBvcnRzSGlzdG9yeSIsInJ1blF1ZXVlIiwicXVldWUiLCJzdGVwIiwiSGlzdG9yeSIsIm5vcm1hbGl6ZUJhc2UiLCJwZW5kaW5nIiwibGlzdGVuIiwidHJhbnNpdGlvblRvIiwiY29uZmlybVRyYW5zaXRpb24iLCJ1cGRhdGVSb3V0ZSIsImVuc3VyZVVSTCIsInJlc29sdmVRdWV1ZSIsImRlYWN0aXZhdGVkIiwiYWN0aXZhdGVkIiwiZXh0cmFjdExlYXZlR3VhcmRzIiwiYmVmb3JlSG9va3MiLCJyZXNvbHZlQXN5bmNDb21wb25lbnRzIiwiaXRlcmF0b3IiLCJwb3N0RW50ZXJDYnMiLCJlbnRlckd1YXJkcyIsImV4dHJhY3RFbnRlckd1YXJkcyIsInByZXYiLCJhZnRlckhvb2tzIiwiYmFzZUVsIiwiZXh0cmFjdEd1YXJkIiwiZmxhdHRlbiIsImZsYXRNYXBDb21wb25lbnRzIiwiaW5zdGFuY2UiLCJndWFyZCIsIndyYXBMZWF2ZUd1YXJkIiwicmV2ZXJzZSIsInJvdXRlTGVhdmVHdWFyZCIsImNicyIsImlzVmFsaWQiLCJ3cmFwRW50ZXJHdWFyZCIsInJvdXRlRW50ZXJHdWFyZCIsImZyb20iLCJwb2xsIiwicmVzb2x2ZWREZWYiLCJyZWplY3QiLCJyZWFzb24iLCJwb3NpdGlvblN0b3JlIiwic2F2ZVNjcm9sbFBvc2l0aW9uIiwicGFnZVhPZmZzZXQiLCJwYWdlWU9mZnNldCIsImdldFNjcm9sbFBvc2l0aW9uIiwiZ2V0RWxlbWVudFBvc2l0aW9uIiwiZG9jUmVjdCIsImVsUmVjdCIsImlzVmFsaWRQb3NpdGlvbiIsImlzTnVtYmVyIiwibm9ybWFsaXplUG9zaXRpb24iLCJnZW5LZXkiLCJEYXRlIiwibm93IiwiX2tleSIsIkhUTUw1SGlzdG9yeSIsImV4cGVjdFNjcm9sbCIsInNjcm9sbEJlaGF2aW9yIiwic3RhdGUiLCJnZXRMb2NhdGlvbiIsImhhbmRsZVNjcm9sbCIsInB1c2hTdGF0ZSIsInJlcGxhY2VTdGF0ZSIsImlzUG9wIiwiYmVoYXZpb3IiLCJwb3NpdGlvbiIsInNob3VsZFNjcm9sbCIsInNlbGVjdG9yIiwic2Nyb2xsVG8iLCJzZWFyY2giLCJ1cmwiLCJIYXNoSGlzdG9yeSIsImZhbGxiYWNrIiwiY2hlY2tGYWxsYmFjayIsImVuc3VyZVNsYXNoIiwib25IYXNoQ2hhbmdlIiwiZ2V0SGFzaCIsInJlcGxhY2VIYXNoIiwicHVzaEhhc2giLCJBYnN0cmFjdEhpc3RvcnkiLCJ0YXJnZXRJbmRleCIsInByb3RvdHlwZUFjY2Vzc29ycyIsImJlZm9yZUVhY2giLCJhZnRlckVhY2giLCJiYWNrIiwiZm9yd2FyZCIsImdldE1hdGNoZWRDb21wb25lbnRzIiwiZGVmaW5lUHJvcGVydGllcyIsInZ1ZSIsImxvZ2dlZEluIiwibG9nIiwibGlzdCIsIml0ZW0iLCJtZWRpYVF1ZXJ5IiwiYWxyZWFkeUltcG9ydGVkTW9kdWxlcyIsImZldGNoRGF0YSIsIlVzZXJNZW1iZXJWaWV3IiwidmlldyIsImRhdGFzIiwiY29uZmlnTWV0aG9kIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7O0FDN0JBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBQWdEOztBQUZBO0FBSWhELG9CQUFBQSxDQUFRLEVBQVIsRSxDQUhnRDtBQVZoRDs7Ozs7Ozs7Ozs7QUFlQSxlQUFJQyxHQUFKLHNCLENBQWlEO0FBQ2pELEtBQU1DLE1BQU0sa0JBQVEsRUFBQ0Msd0JBQUQsRUFBUixFQUFrQkMsTUFBbEIsQ0FBeUIsTUFBekIsQ0FBWixDLENBQWdELFc7Ozs7Ozs7Ozs7QUNoQmhEOzs7OztBQUtBLEVBQUMsVUFBU0MsQ0FBVCxFQUFXQyxDQUFYLEVBQWE7QUFBQywrQ0FBaUJDLE9BQWpCLE1BQTBCLGVBQWEsT0FBT0MsTUFBOUMsR0FBcURBLE9BQU9ELE9BQVAsR0FBZUQsR0FBcEUsR0FBd0UsUUFBc0Msb0NBQU9BLENBQVAsbVRBQXRDLEdBQWdERCxFQUFFSSxHQUFGLEdBQU1ILEdBQTlIO0FBQWtJLEVBQWhKLFlBQXNKLFlBQVU7QUFBQztBQUFh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QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx3REFBdUQ7QUFDdkQ7O0FBRUEsOEJBQTZCLG1CQUFtQjs7QUFFaEQ7O0FBRUE7O0FBRUE7QUFDQTtBQUNBIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIuL21haW4vXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgNDQ3NTZhNTBiZDBmOTY1YjQzODgiLCIvKipcclxuICog5o+P6L+wOiDlhaXlj6PpobXpnaJcclxuICog54mI5p2DOiBDb3B5cmlnaHQgKGMpIDIwMTZcclxuICog5YWs5Y+4OiDmt7HlnLPluILmmIrmmajnp5HmioDlvIDlj5HmnInpmZDlhazlj7hcclxuICog5L2c6ICFOiDpmYjlhYNcclxuICog54mI5pysOiAxLjBcclxuICog5Yib5bu65pel5pyfOiAyMDE2LzExLzIxXHJcbiAqIOWIm+W7uuaXtumXtDogMTQ6MjZcclxuICovXHJcbmltcG9ydCBWdWUgZnJvbSBcInZ1ZVwiOyAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdnVl5qGG5p625YyFXHJcbmltcG9ydCBWdWVSb3V0ZXIgZnJvbSBcInZ1ZS1yb3V0ZXJcIjsgICAgICAgICAgICAgLy8g6Lev55Sx5o+S5Lu2XHJcbmltcG9ydCByb3V0ZXIgZnJvbSBcIi4vcm91dGVyXCI7ICAgICAgICAgICAgICAgICAgLy8g5a+85YWl6Lev55Sx6YWN572u5a+56LGhXHJcblxyXG5yZXF1aXJlKFwiLi9hc3NldHMvc2Nzcy9tYWluLnNjc3NcIik7XHJcblxyXG5WdWUudXNlKFZ1ZVJvdXRlcik7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8g5aaC5p6c5L2/55So5qih5Z2X5YyW5py65Yi257yW56iLXHJcbmNvbnN0IGFwcCA9IG5ldyBWdWUoe3JvdXRlcn0pLiRtb3VudCgnI2FwcCcpOyAgIC8vIOWIm+W7uuWSjOaMgui9veagueWunuS+i1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0U6L1Rlc3RXb3JrL3Z1ZS9zcmMvYXBwLmpzIiwiLyohXG4gKiBWdWUuanMgdjIuMS4wXG4gKiAoYykgMjAxNC0yMDE2IEV2YW4gWW91XG4gKiBSZWxlYXNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXG4gKi9cbiFmdW5jdGlvbihlLHQpe1wib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzJiZcInVuZGVmaW5lZFwiIT10eXBlb2YgbW9kdWxlP21vZHVsZS5leHBvcnRzPXQoKTpcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQ/ZGVmaW5lKHQpOmUuVnVlPXQoKX0odGhpcyxmdW5jdGlvbigpe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIGUoZSl7cmV0dXJuIG51bGw9PWU/XCJcIjpcIm9iamVjdFwiPT10eXBlb2YgZT9KU09OLnN0cmluZ2lmeShlLG51bGwsMik6U3RyaW5nKGUpfWZ1bmN0aW9uIHQoZSl7dmFyIHQ9cGFyc2VGbG9hdChlLDEwKTtyZXR1cm4gdHx8MD09PXQ/dDplfWZ1bmN0aW9uIG4oZSx0KXtmb3IodmFyIG49T2JqZWN0LmNyZWF0ZShudWxsKSxyPWUuc3BsaXQoXCIsXCIpLGk9MDtpPHIubGVuZ3RoO2krKyluW3JbaV1dPSEwO3JldHVybiB0P2Z1bmN0aW9uKGUpe3JldHVybiBuW2UudG9Mb3dlckNhc2UoKV19OmZ1bmN0aW9uKGUpe3JldHVybiBuW2VdfX1mdW5jdGlvbiByKGUsdCl7aWYoZS5sZW5ndGgpe3ZhciBuPWUuaW5kZXhPZih0KTtpZihuPi0xKXJldHVybiBlLnNwbGljZShuLDEpfX1mdW5jdGlvbiBpKGUsdCl7cmV0dXJuIFVyLmNhbGwoZSx0KX1mdW5jdGlvbiBvKGUpe3JldHVyblwic3RyaW5nXCI9PXR5cGVvZiBlfHxcIm51bWJlclwiPT10eXBlb2YgZX1mdW5jdGlvbiBhKGUpe3ZhciB0PU9iamVjdC5jcmVhdGUobnVsbCk7cmV0dXJuIGZ1bmN0aW9uKG4pe3ZhciByPXRbbl07cmV0dXJuIHJ8fCh0W25dPWUobikpfX1mdW5jdGlvbiBzKGUsdCl7ZnVuY3Rpb24gbihuKXt2YXIgcj1hcmd1bWVudHMubGVuZ3RoO3JldHVybiByP3I+MT9lLmFwcGx5KHQsYXJndW1lbnRzKTplLmNhbGwodCxuKTplLmNhbGwodCl9cmV0dXJuIG4uX2xlbmd0aD1lLmxlbmd0aCxufWZ1bmN0aW9uIGMoZSx0KXt0PXR8fDA7Zm9yKHZhciBuPWUubGVuZ3RoLXQscj1uZXcgQXJyYXkobik7bi0tOylyW25dPWVbbit0XTtyZXR1cm4gcn1mdW5jdGlvbiBsKGUsdCl7Zm9yKHZhciBuIGluIHQpZVtuXT10W25dO3JldHVybiBlfWZ1bmN0aW9uIHUoZSl7cmV0dXJuIG51bGwhPT1lJiZcIm9iamVjdFwiPT10eXBlb2YgZX1mdW5jdGlvbiBmKGUpe3JldHVybiBxci5jYWxsKGUpPT09V3J9ZnVuY3Rpb24gZChlKXtmb3IodmFyIHQ9e30sbj0wO248ZS5sZW5ndGg7bisrKWVbbl0mJmwodCxlW25dKTtyZXR1cm4gdH1mdW5jdGlvbiBwKCl7fWZ1bmN0aW9uIHYoZSl7cmV0dXJuIGUucmVkdWNlKGZ1bmN0aW9uKGUsdCl7cmV0dXJuIGUuY29uY2F0KHQuc3RhdGljS2V5c3x8W10pfSxbXSkuam9pbihcIixcIil9ZnVuY3Rpb24gaChlLHQpe3JldHVybiBlPT10fHwhKCF1KGUpfHwhdSh0KSkmJkpTT04uc3RyaW5naWZ5KGUpPT09SlNPTi5zdHJpbmdpZnkodCl9ZnVuY3Rpb24gbShlLHQpe2Zvcih2YXIgbj0wO248ZS5sZW5ndGg7bisrKWlmKGgoZVtuXSx0KSlyZXR1cm4gbjtyZXR1cm4tMX1mdW5jdGlvbiBnKGUpe3ZhciB0PShlK1wiXCIpLmNoYXJDb2RlQXQoMCk7cmV0dXJuIDM2PT09dHx8OTU9PT10fWZ1bmN0aW9uIHkoZSx0LG4scil7T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsdCx7dmFsdWU6bixlbnVtZXJhYmxlOiEhcix3cml0YWJsZTohMCxjb25maWd1cmFibGU6ITB9KX1mdW5jdGlvbiBfKGUpe2lmKCFHci50ZXN0KGUpKXt2YXIgdD1lLnNwbGl0KFwiLlwiKTtyZXR1cm4gZnVuY3Rpb24oZSl7Zm9yKHZhciBuPTA7bjx0Lmxlbmd0aDtuKyspe2lmKCFlKXJldHVybjtlPWVbdFtuXV19cmV0dXJuIGV9fX1mdW5jdGlvbiBiKGUpe3JldHVybi9uYXRpdmUgY29kZS8udGVzdChlLnRvU3RyaW5nKCkpfWZ1bmN0aW9uICQoZSl7ZGkudGFyZ2V0JiZwaS5wdXNoKGRpLnRhcmdldCksZGkudGFyZ2V0PWV9ZnVuY3Rpb24gdygpe2RpLnRhcmdldD1waS5wb3AoKX1mdW5jdGlvbiB4KGUsdCl7ZS5fX3Byb3RvX189dH1mdW5jdGlvbiBDKGUsdCxuKXtmb3IodmFyIHI9MCxpPW4ubGVuZ3RoO3I8aTtyKyspe3ZhciBvPW5bcl07eShlLG8sdFtvXSl9fWZ1bmN0aW9uIGsoZSl7aWYodShlKSl7dmFyIHQ7cmV0dXJuIGkoZSxcIl9fb2JfX1wiKSYmZS5fX29iX18gaW5zdGFuY2VvZiB5aT90PWUuX19vYl9fOmdpLnNob3VsZENvbnZlcnQmJiFvaSgpJiYoQXJyYXkuaXNBcnJheShlKXx8ZihlKSkmJk9iamVjdC5pc0V4dGVuc2libGUoZSkmJiFlLl9pc1Z1ZSYmKHQ9bmV3IHlpKGUpKSx0fX1mdW5jdGlvbiBBKGUsdCxuLHIpe3ZhciBpPW5ldyBkaSxvPU9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoZSx0KTtpZighb3x8by5jb25maWd1cmFibGUhPT0hMSl7dmFyIGE9byYmby5nZXQscz1vJiZvLnNldCxjPWsobik7T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsdCx7ZW51bWVyYWJsZTohMCxjb25maWd1cmFibGU6ITAsZ2V0OmZ1bmN0aW9uKCl7dmFyIHQ9YT9hLmNhbGwoZSk6bjtyZXR1cm4gZGkudGFyZ2V0JiYoaS5kZXBlbmQoKSxjJiZjLmRlcC5kZXBlbmQoKSxBcnJheS5pc0FycmF5KHQpJiZUKHQpKSx0fSxzZXQ6ZnVuY3Rpb24odCl7dmFyIHI9YT9hLmNhbGwoZSk6bjt0PT09cnx8dCE9PXQmJnIhPT1yfHwocz9zLmNhbGwoZSx0KTpuPXQsYz1rKHQpLGkubm90aWZ5KCkpfX0pfX1mdW5jdGlvbiBPKGUsdCxuKXtpZihBcnJheS5pc0FycmF5KGUpKXJldHVybiBlLmxlbmd0aD1NYXRoLm1heChlLmxlbmd0aCx0KSxlLnNwbGljZSh0LDEsbiksbjtpZihpKGUsdCkpcmV0dXJuIHZvaWQoZVt0XT1uKTt2YXIgcj1lLl9fb2JfXztpZighKGUuX2lzVnVlfHxyJiZyLnZtQ291bnQpKXJldHVybiByPyhBKHIudmFsdWUsdCxuKSxyLmRlcC5ub3RpZnkoKSxuKTp2b2lkKGVbdF09bil9ZnVuY3Rpb24gUyhlLHQpe3ZhciBuPWUuX19vYl9fO2UuX2lzVnVlfHxuJiZuLnZtQ291bnR8fGkoZSx0KSYmKGRlbGV0ZSBlW3RdLG4mJm4uZGVwLm5vdGlmeSgpKX1mdW5jdGlvbiBUKGUpe2Zvcih2YXIgdD12b2lkIDAsbj0wLHI9ZS5sZW5ndGg7bjxyO24rKyl0PWVbbl0sdCYmdC5fX29iX18mJnQuX19vYl9fLmRlcC5kZXBlbmQoKSxBcnJheS5pc0FycmF5KHQpJiZUKHQpfWZ1bmN0aW9uIGooZSx0KXtpZighdClyZXR1cm4gZTtmb3IodmFyIG4scixvLGE9T2JqZWN0LmtleXModCkscz0wO3M8YS5sZW5ndGg7cysrKW49YVtzXSxyPWVbbl0sbz10W25dLGkoZSxuKT9mKHIpJiZmKG8pJiZqKHIsbyk6TyhlLG4sbyk7cmV0dXJuIGV9ZnVuY3Rpb24gRShlLHQpe3JldHVybiB0P2U/ZS5jb25jYXQodCk6QXJyYXkuaXNBcnJheSh0KT90Olt0XTplfWZ1bmN0aW9uIE4oZSx0KXt2YXIgbj1PYmplY3QuY3JlYXRlKGV8fG51bGwpO3JldHVybiB0P2wobix0KTpufWZ1bmN0aW9uIEwoZSl7dmFyIHQ9ZS5wcm9wcztpZih0KXt2YXIgbixyLGksbz17fTtpZihBcnJheS5pc0FycmF5KHQpKWZvcihuPXQubGVuZ3RoO24tLTspcj10W25dLFwic3RyaW5nXCI9PXR5cGVvZiByJiYoaT1WcihyKSxvW2ldPXt0eXBlOm51bGx9KTtlbHNlIGlmKGYodCkpZm9yKHZhciBhIGluIHQpcj10W2FdLGk9VnIoYSksb1tpXT1mKHIpP3I6e3R5cGU6cn07ZS5wcm9wcz1vfX1mdW5jdGlvbiBEKGUpe3ZhciB0PWUuZGlyZWN0aXZlcztpZih0KWZvcih2YXIgbiBpbiB0KXt2YXIgcj10W25dO1wiZnVuY3Rpb25cIj09dHlwZW9mIHImJih0W25dPXtiaW5kOnIsdXBkYXRlOnJ9KX19ZnVuY3Rpb24gTShlLHQsbil7ZnVuY3Rpb24gcihyKXt2YXIgaT1faVtyXXx8Ymk7dVtyXT1pKGVbcl0sdFtyXSxuLHIpfUwodCksRCh0KTt2YXIgbz10LmV4dGVuZHM7aWYobyYmKGU9XCJmdW5jdGlvblwiPT10eXBlb2Ygbz9NKGUsby5vcHRpb25zLG4pOk0oZSxvLG4pKSx0Lm1peGlucylmb3IodmFyIGE9MCxzPXQubWl4aW5zLmxlbmd0aDthPHM7YSsrKXt2YXIgYz10Lm1peGluc1thXTtjLnByb3RvdHlwZSBpbnN0YW5jZW9mIFJlJiYoYz1jLm9wdGlvbnMpLGU9TShlLGMsbil9dmFyIGwsdT17fTtmb3IobCBpbiBlKXIobCk7Zm9yKGwgaW4gdClpKGUsbCl8fHIobCk7cmV0dXJuIHV9ZnVuY3Rpb24gUChlLHQsbixyKXtpZihcInN0cmluZ1wiPT10eXBlb2Ygbil7dmFyIGk9ZVt0XSxvPWlbbl18fGlbVnIobildfHxpW3pyKFZyKG4pKV07cmV0dXJuIG99fWZ1bmN0aW9uIFIoZSx0LG4scil7dmFyIG89dFtlXSxhPSFpKG4sZSkscz1uW2VdO2lmKEIoby50eXBlKSYmKGEmJiFpKG8sXCJkZWZhdWx0XCIpP3M9ITE6XCJcIiE9PXMmJnMhPT1LcihlKXx8KHM9ITApKSx2b2lkIDA9PT1zKXtzPUkocixvLGUpO3ZhciBjPWdpLnNob3VsZENvbnZlcnQ7Z2kuc2hvdWxkQ29udmVydD0hMCxrKHMpLGdpLnNob3VsZENvbnZlcnQ9Y31yZXR1cm4gc31mdW5jdGlvbiBJKGUsdCxuKXtpZihpKHQsXCJkZWZhdWx0XCIpKXt2YXIgcj10LmRlZmF1bHQ7cmV0dXJuIHUociksZSYmZS4kb3B0aW9ucy5wcm9wc0RhdGEmJnZvaWQgMD09PWUuJG9wdGlvbnMucHJvcHNEYXRhW25dJiZ2b2lkIDAhPT1lW25dP2Vbbl06XCJmdW5jdGlvblwiPT10eXBlb2YgciYmdC50eXBlIT09RnVuY3Rpb24/ci5jYWxsKGUpOnJ9fWZ1bmN0aW9uIEYoZSl7dmFyIHQ9ZSYmZS50b1N0cmluZygpLm1hdGNoKC9eXFxzKmZ1bmN0aW9uIChcXHcrKS8pO3JldHVybiB0JiZ0WzFdfWZ1bmN0aW9uIEIoZSl7aWYoIUFycmF5LmlzQXJyYXkoZSkpcmV0dXJuXCJCb29sZWFuXCI9PT1GKGUpO2Zvcih2YXIgdD0wLG49ZS5sZW5ndGg7dDxuO3QrKylpZihcIkJvb2xlYW5cIj09PUYoZVt0XSkpcmV0dXJuITA7cmV0dXJuITF9ZnVuY3Rpb24gVSgpe3dpLmxlbmd0aD0wLHhpPXt9LENpPWtpPSExfWZ1bmN0aW9uIEgoKXtmb3Ioa2k9ITAsd2kuc29ydChmdW5jdGlvbihlLHQpe3JldHVybiBlLmlkLXQuaWR9KSxBaT0wO0FpPHdpLmxlbmd0aDtBaSsrKXt2YXIgZT13aVtBaV0sdD1lLmlkO3hpW3RdPW51bGwsZS5ydW4oKX1haSYmbGkuZGV2dG9vbHMmJmFpLmVtaXQoXCJmbHVzaFwiKSxVKCl9ZnVuY3Rpb24gVihlKXt2YXIgdD1lLmlkO2lmKG51bGw9PXhpW3RdKXtpZih4aVt0XT0hMCxraSl7Zm9yKHZhciBuPXdpLmxlbmd0aC0xO24+PTAmJndpW25dLmlkPmUuaWQ7KW4tLTt3aS5zcGxpY2UoTWF0aC5tYXgobixBaSkrMSwwLGUpfWVsc2Ugd2kucHVzaChlKTtDaXx8KENpPSEwLHNpKEgpKX19ZnVuY3Rpb24geihlKXtUaS5jbGVhcigpLEooZSxUaSl9ZnVuY3Rpb24gSihlLHQpe3ZhciBuLHIsaT1BcnJheS5pc0FycmF5KGUpO2lmKChpfHx1KGUpKSYmT2JqZWN0LmlzRXh0ZW5zaWJsZShlKSl7aWYoZS5fX29iX18pe3ZhciBvPWUuX19vYl9fLmRlcC5pZDtpZih0LmhhcyhvKSlyZXR1cm47dC5hZGQobyl9aWYoaSlmb3Iobj1lLmxlbmd0aDtuLS07KUooZVtuXSx0KTtlbHNlIGZvcihyPU9iamVjdC5rZXlzKGUpLG49ci5sZW5ndGg7bi0tOylKKGVbcltuXV0sdCl9fWZ1bmN0aW9uIEsoZSl7ZS5fd2F0Y2hlcnM9W10scShlKSxXKGUpLFooZSksWShlKSxRKGUpfWZ1bmN0aW9uIHEoZSl7dmFyIHQ9ZS4kb3B0aW9ucy5wcm9wcztpZih0KXt2YXIgbj1lLiRvcHRpb25zLnByb3BzRGF0YXx8e30scj1lLiRvcHRpb25zLl9wcm9wS2V5cz1PYmplY3Qua2V5cyh0KSxpPSFlLiRwYXJlbnQ7Z2kuc2hvdWxkQ29udmVydD1pO2Zvcih2YXIgbz1mdW5jdGlvbihpKXt2YXIgbz1yW2ldO0EoZSxvLFIobyx0LG4sZSkpfSxhPTA7YTxyLmxlbmd0aDthKyspbyhhKTtnaS5zaG91bGRDb252ZXJ0PSEwfX1mdW5jdGlvbiBXKGUpe3ZhciB0PWUuJG9wdGlvbnMuZGF0YTt0PWUuX2RhdGE9XCJmdW5jdGlvblwiPT10eXBlb2YgdD90LmNhbGwoZSk6dHx8e30sZih0KXx8KHQ9e30pO2Zvcih2YXIgbj1PYmplY3Qua2V5cyh0KSxyPWUuJG9wdGlvbnMucHJvcHMsbz1uLmxlbmd0aDtvLS07KXImJmkocixuW29dKXx8dGUoZSxuW29dKTtrKHQpLHQuX19vYl9fJiZ0Ll9fb2JfXy52bUNvdW50Kyt9ZnVuY3Rpb24gWihlKXt2YXIgdD1lLiRvcHRpb25zLmNvbXB1dGVkO2lmKHQpZm9yKHZhciBuIGluIHQpe3ZhciByPXRbbl07XCJmdW5jdGlvblwiPT10eXBlb2Ygcj8oamkuZ2V0PUcocixlKSxqaS5zZXQ9cCk6KGppLmdldD1yLmdldD9yLmNhY2hlIT09ITE/RyhyLmdldCxlKTpzKHIuZ2V0LGUpOnAsamkuc2V0PXIuc2V0P3Moci5zZXQsZSk6cCksT2JqZWN0LmRlZmluZVByb3BlcnR5KGUsbixqaSl9fWZ1bmN0aW9uIEcoZSx0KXt2YXIgbj1uZXcgU2kodCxlLHAse2xhenk6ITB9KTtyZXR1cm4gZnVuY3Rpb24oKXtyZXR1cm4gbi5kaXJ0eSYmbi5ldmFsdWF0ZSgpLGRpLnRhcmdldCYmbi5kZXBlbmQoKSxuLnZhbHVlfX1mdW5jdGlvbiBZKGUpe3ZhciB0PWUuJG9wdGlvbnMubWV0aG9kcztpZih0KWZvcih2YXIgbiBpbiB0KWVbbl09bnVsbD09dFtuXT9wOnModFtuXSxlKX1mdW5jdGlvbiBRKGUpe3ZhciB0PWUuJG9wdGlvbnMud2F0Y2g7aWYodClmb3IodmFyIG4gaW4gdCl7dmFyIHI9dFtuXTtpZihBcnJheS5pc0FycmF5KHIpKWZvcih2YXIgaT0wO2k8ci5sZW5ndGg7aSsrKVgoZSxuLHJbaV0pO2Vsc2UgWChlLG4scil9fWZ1bmN0aW9uIFgoZSx0LG4pe3ZhciByO2YobikmJihyPW4sbj1uLmhhbmRsZXIpLFwic3RyaW5nXCI9PXR5cGVvZiBuJiYobj1lW25dKSxlLiR3YXRjaCh0LG4scil9ZnVuY3Rpb24gZWUoZSl7dmFyIHQ9e307dC5nZXQ9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5fZGF0YX0sT2JqZWN0LmRlZmluZVByb3BlcnR5KGUucHJvdG90eXBlLFwiJGRhdGFcIix0KSxlLnByb3RvdHlwZS4kc2V0PU8sZS5wcm90b3R5cGUuJGRlbGV0ZT1TLGUucHJvdG90eXBlLiR3YXRjaD1mdW5jdGlvbihlLHQsbil7dmFyIHI9dGhpcztuPW58fHt9LG4udXNlcj0hMDt2YXIgaT1uZXcgU2kocixlLHQsbik7cmV0dXJuIG4uaW1tZWRpYXRlJiZ0LmNhbGwocixpLnZhbHVlKSxmdW5jdGlvbigpe2kudGVhcmRvd24oKX19fWZ1bmN0aW9uIHRlKGUsdCl7Zyh0KXx8T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsdCx7Y29uZmlndXJhYmxlOiEwLGVudW1lcmFibGU6ITAsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIGUuX2RhdGFbdF19LHNldDpmdW5jdGlvbihuKXtlLl9kYXRhW3RdPW59fSl9ZnVuY3Rpb24gbmUoZSl7dmFyIHQ9bmV3IEVpKGUudGFnLGUuZGF0YSxlLmNoaWxkcmVuLGUudGV4dCxlLmVsbSxlLm5zLGUuY29udGV4dCxlLmNvbXBvbmVudE9wdGlvbnMpO3JldHVybiB0LmlzU3RhdGljPWUuaXNTdGF0aWMsdC5rZXk9ZS5rZXksdC5pc0Nsb25lZD0hMCx0fWZ1bmN0aW9uIHJlKGUpe2Zvcih2YXIgdD1uZXcgQXJyYXkoZS5sZW5ndGgpLG49MDtuPGUubGVuZ3RoO24rKyl0W25dPW5lKGVbbl0pO3JldHVybiB0fWZ1bmN0aW9uIGllKGUsdCxuLHIpe3IrPXQ7dmFyIGk9ZS5fX2luamVjdGVkfHwoZS5fX2luamVjdGVkPXt9KTtpZighaVtyXSl7aVtyXT0hMDt2YXIgbz1lW3RdO28/ZVt0XT1mdW5jdGlvbigpe28uYXBwbHkodGhpcyxhcmd1bWVudHMpLG4uYXBwbHkodGhpcyxhcmd1bWVudHMpfTplW3RdPW59fWZ1bmN0aW9uIG9lKGUsdCxuLHIsaSl7dmFyIG8sYSxzLGMsbCx1O2ZvcihvIGluIGUpaWYoYT1lW29dLHM9dFtvXSxhKWlmKHMpe2lmKGEhPT1zKWlmKEFycmF5LmlzQXJyYXkocykpe3MubGVuZ3RoPWEubGVuZ3RoO2Zvcih2YXIgZj0wO2Y8cy5sZW5ndGg7ZisrKXNbZl09YVtmXTtlW29dPXN9ZWxzZSBzLmZuPWEsZVtvXT1zfWVsc2UgdT1cIiFcIj09PW8uY2hhckF0KDApLGw9dT9vLnNsaWNlKDEpOm8sQXJyYXkuaXNBcnJheShhKT9uKGwsYS5pbnZva2VyPWFlKGEpLHUpOihhLmludm9rZXJ8fChjPWEsYT1lW29dPXt9LGEuZm49YyxhLmludm9rZXI9c2UoYSkpLG4obCxhLmludm9rZXIsdSkpO2Vsc2U7Zm9yKG8gaW4gdCllW29dfHwobD1cIiFcIj09PW8uY2hhckF0KDApP28uc2xpY2UoMSk6byxyKGwsdFtvXS5pbnZva2VyKSl9ZnVuY3Rpb24gYWUoZSl7cmV0dXJuIGZ1bmN0aW9uKHQpe2Zvcih2YXIgbj1hcmd1bWVudHMscj0xPT09YXJndW1lbnRzLmxlbmd0aCxpPTA7aTxlLmxlbmd0aDtpKyspcj9lW2ldKHQpOmVbaV0uYXBwbHkobnVsbCxuKX19ZnVuY3Rpb24gc2UoZSl7cmV0dXJuIGZ1bmN0aW9uKHQpe3ZhciBuPTE9PT1hcmd1bWVudHMubGVuZ3RoO24/ZS5mbih0KTplLmZuLmFwcGx5KG51bGwsYXJndW1lbnRzKX19ZnVuY3Rpb24gY2UoZSx0LG4pe2lmKG8oZSkpcmV0dXJuW2xlKGUpXTtpZihBcnJheS5pc0FycmF5KGUpKXtmb3IodmFyIHI9W10saT0wLGE9ZS5sZW5ndGg7aTxhO2krKyl7dmFyIHM9ZVtpXSxjPXJbci5sZW5ndGgtMV07QXJyYXkuaXNBcnJheShzKT9yLnB1c2guYXBwbHkocixjZShzLHQsKG58fFwiXCIpK1wiX1wiK2kpKTpvKHMpP2MmJmMudGV4dD9jLnRleHQrPVN0cmluZyhzKTpcIlwiIT09cyYmci5wdXNoKGxlKHMpKTpzIGluc3RhbmNlb2YgRWkmJihzLnRleHQmJmMmJmMudGV4dD9jLmlzQ2xvbmVkfHwoYy50ZXh0Kz1zLnRleHQpOih0JiZ1ZShzLHQpLHMudGFnJiZudWxsPT1zLmtleSYmbnVsbCE9biYmKHMua2V5PVwiX192bGlzdFwiK24rXCJfXCIraStcIl9fXCIpLHIucHVzaChzKSkpfXJldHVybiByfX1mdW5jdGlvbiBsZShlKXtyZXR1cm4gbmV3IEVpKHZvaWQgMCx2b2lkIDAsdm9pZCAwLFN0cmluZyhlKSl9ZnVuY3Rpb24gdWUoZSx0KXtpZihlLnRhZyYmIWUubnMmJihlLm5zPXQsZS5jaGlsZHJlbikpZm9yKHZhciBuPTAscj1lLmNoaWxkcmVuLmxlbmd0aDtuPHI7bisrKXVlKGUuY2hpbGRyZW5bbl0sdCl9ZnVuY3Rpb24gZmUoZSl7cmV0dXJuIGUmJmUuZmlsdGVyKGZ1bmN0aW9uKGUpe3JldHVybiBlJiZlLmNvbXBvbmVudE9wdGlvbnN9KVswXX1mdW5jdGlvbiBkZShlKXt2YXIgdD1lLiRvcHRpb25zLG49dC5wYXJlbnQ7aWYobiYmIXQuYWJzdHJhY3Qpe2Zvcig7bi4kb3B0aW9ucy5hYnN0cmFjdCYmbi4kcGFyZW50OyluPW4uJHBhcmVudDtuLiRjaGlsZHJlbi5wdXNoKGUpfWUuJHBhcmVudD1uLGUuJHJvb3Q9bj9uLiRyb290OmUsZS4kY2hpbGRyZW49W10sZS4kcmVmcz17fSxlLl93YXRjaGVyPW51bGwsZS5faW5hY3RpdmU9ITEsZS5faXNNb3VudGVkPSExLGUuX2lzRGVzdHJveWVkPSExLGUuX2lzQmVpbmdEZXN0cm95ZWQ9ITF9ZnVuY3Rpb24gcGUoZSl7ZS5wcm90b3R5cGUuX21vdW50PWZ1bmN0aW9uKGUsdCl7dmFyIG49dGhpcztyZXR1cm4gbi4kZWw9ZSxuLiRvcHRpb25zLnJlbmRlcnx8KG4uJG9wdGlvbnMucmVuZGVyPU5pKSx2ZShuLFwiYmVmb3JlTW91bnRcIiksbi5fd2F0Y2hlcj1uZXcgU2kobixmdW5jdGlvbigpe24uX3VwZGF0ZShuLl9yZW5kZXIoKSx0KX0scCksdD0hMSxudWxsPT1uLiR2bm9kZSYmKG4uX2lzTW91bnRlZD0hMCx2ZShuLFwibW91bnRlZFwiKSksbn0sZS5wcm90b3R5cGUuX3VwZGF0ZT1mdW5jdGlvbihlLHQpe3ZhciBuPXRoaXM7bi5faXNNb3VudGVkJiZ2ZShuLFwiYmVmb3JlVXBkYXRlXCIpO3ZhciByPW4uJGVsLGk9TGk7TGk9bjt2YXIgbz1uLl92bm9kZTtuLl92bm9kZT1lLG8/bi4kZWw9bi5fX3BhdGNoX18obyxlKTpuLiRlbD1uLl9fcGF0Y2hfXyhuLiRlbCxlLHQpLExpPWksciYmKHIuX192dWVfXz1udWxsKSxuLiRlbCYmKG4uJGVsLl9fdnVlX189biksbi4kdm5vZGUmJm4uJHBhcmVudCYmbi4kdm5vZGU9PT1uLiRwYXJlbnQuX3Zub2RlJiYobi4kcGFyZW50LiRlbD1uLiRlbCksbi5faXNNb3VudGVkJiZ2ZShuLFwidXBkYXRlZFwiKX0sZS5wcm90b3R5cGUuX3VwZGF0ZUZyb21QYXJlbnQ9ZnVuY3Rpb24oZSx0LG4scil7dmFyIGk9dGhpcyxvPSEoIWkuJG9wdGlvbnMuX3JlbmRlckNoaWxkcmVuJiYhcik7aWYoaS4kb3B0aW9ucy5fcGFyZW50Vm5vZGU9bixpLiRvcHRpb25zLl9yZW5kZXJDaGlsZHJlbj1yLGUmJmkuJG9wdGlvbnMucHJvcHMpe2dpLnNob3VsZENvbnZlcnQ9ITE7Zm9yKHZhciBhPWkuJG9wdGlvbnMuX3Byb3BLZXlzfHxbXSxzPTA7czxhLmxlbmd0aDtzKyspe3ZhciBjPWFbc107aVtjXT1SKGMsaS4kb3B0aW9ucy5wcm9wcyxlLGkpfWdpLnNob3VsZENvbnZlcnQ9ITAsaS4kb3B0aW9ucy5wcm9wc0RhdGE9ZX1pZih0KXt2YXIgbD1pLiRvcHRpb25zLl9wYXJlbnRMaXN0ZW5lcnM7aS4kb3B0aW9ucy5fcGFyZW50TGlzdGVuZXJzPXQsaS5fdXBkYXRlTGlzdGVuZXJzKHQsbCl9byYmKGkuJHNsb3RzPUVlKHIsaS5fcmVuZGVyQ29udGV4dCksaS4kZm9yY2VVcGRhdGUoKSl9LGUucHJvdG90eXBlLiRmb3JjZVVwZGF0ZT1mdW5jdGlvbigpe3ZhciBlPXRoaXM7ZS5fd2F0Y2hlciYmZS5fd2F0Y2hlci51cGRhdGUoKX0sZS5wcm90b3R5cGUuJGRlc3Ryb3k9ZnVuY3Rpb24oKXt2YXIgZT10aGlzO2lmKCFlLl9pc0JlaW5nRGVzdHJveWVkKXt2ZShlLFwiYmVmb3JlRGVzdHJveVwiKSxlLl9pc0JlaW5nRGVzdHJveWVkPSEwO3ZhciB0PWUuJHBhcmVudDshdHx8dC5faXNCZWluZ0Rlc3Ryb3llZHx8ZS4kb3B0aW9ucy5hYnN0cmFjdHx8cih0LiRjaGlsZHJlbixlKSxlLl93YXRjaGVyJiZlLl93YXRjaGVyLnRlYXJkb3duKCk7Zm9yKHZhciBuPWUuX3dhdGNoZXJzLmxlbmd0aDtuLS07KWUuX3dhdGNoZXJzW25dLnRlYXJkb3duKCk7ZS5fZGF0YS5fX29iX18mJmUuX2RhdGEuX19vYl9fLnZtQ291bnQtLSxlLl9pc0Rlc3Ryb3llZD0hMCx2ZShlLFwiZGVzdHJveWVkXCIpLGUuJG9mZigpLGUuJGVsJiYoZS4kZWwuX192dWVfXz1udWxsKSxlLl9fcGF0Y2hfXyhlLl92bm9kZSxudWxsKX19fWZ1bmN0aW9uIHZlKGUsdCl7dmFyIG49ZS4kb3B0aW9uc1t0XTtpZihuKWZvcih2YXIgcj0wLGk9bi5sZW5ndGg7cjxpO3IrKyluW3JdLmNhbGwoZSk7ZS4kZW1pdChcImhvb2s6XCIrdCl9ZnVuY3Rpb24gaGUoZSx0LG4scixpKXtpZihlKXt2YXIgbz1uLiRvcHRpb25zLl9iYXNlO2lmKHUoZSkmJihlPW8uZXh0ZW5kKGUpKSxcImZ1bmN0aW9uXCI9PXR5cGVvZiBlKXtpZighZS5jaWQpaWYoZS5yZXNvbHZlZCllPWUucmVzb2x2ZWQ7ZWxzZSBpZihlPXdlKGUsbyxmdW5jdGlvbigpe24uJGZvcmNlVXBkYXRlKCl9KSwhZSlyZXR1cm47UGUoZSksdD10fHx7fTt2YXIgYT14ZSh0LGUpO2lmKGUub3B0aW9ucy5mdW5jdGlvbmFsKXJldHVybiBtZShlLGEsdCxuLHIpO3ZhciBzPXQub247dC5vbj10Lm5hdGl2ZU9uLGUub3B0aW9ucy5hYnN0cmFjdCYmKHQ9e30pLGtlKHQpO3ZhciBjPWUub3B0aW9ucy5uYW1lfHxpLGw9bmV3IEVpKFwidnVlLWNvbXBvbmVudC1cIitlLmNpZCsoYz9cIi1cIitjOlwiXCIpLHQsdm9pZCAwLHZvaWQgMCx2b2lkIDAsdm9pZCAwLG4se0N0b3I6ZSxwcm9wc0RhdGE6YSxsaXN0ZW5lcnM6cyx0YWc6aSxjaGlsZHJlbjpyfSk7cmV0dXJuIGx9fX1mdW5jdGlvbiBtZShlLHQsbixyLGkpe3ZhciBvPXt9LGE9ZS5vcHRpb25zLnByb3BzO2lmKGEpZm9yKHZhciBjIGluIGEpb1tjXT1SKGMsYSx0KTt2YXIgbD1lLm9wdGlvbnMucmVuZGVyLmNhbGwobnVsbCxzKE9lLHtfc2VsZjpPYmplY3QuY3JlYXRlKHIpfSkse3Byb3BzOm8sZGF0YTpuLHBhcmVudDpyLGNoaWxkcmVuOmNlKGkpLHNsb3RzOmZ1bmN0aW9uKCl7cmV0dXJuIEVlKGkscil9fSk7cmV0dXJuIGwgaW5zdGFuY2VvZiBFaSYmKGwuZnVuY3Rpb25hbENvbnRleHQ9cixuLnNsb3QmJigobC5kYXRhfHwobC5kYXRhPXt9KSkuc2xvdD1uLnNsb3QpKSxsfWZ1bmN0aW9uIGdlKGUsdCl7dmFyIG49ZS5jb21wb25lbnRPcHRpb25zLHI9e19pc0NvbXBvbmVudDohMCxwYXJlbnQ6dCxwcm9wc0RhdGE6bi5wcm9wc0RhdGEsX2NvbXBvbmVudFRhZzpuLnRhZyxfcGFyZW50Vm5vZGU6ZSxfcGFyZW50TGlzdGVuZXJzOm4ubGlzdGVuZXJzLF9yZW5kZXJDaGlsZHJlbjpuLmNoaWxkcmVufSxpPWUuZGF0YS5pbmxpbmVUZW1wbGF0ZTtyZXR1cm4gaSYmKHIucmVuZGVyPWkucmVuZGVyLHIuc3RhdGljUmVuZGVyRm5zPWkuc3RhdGljUmVuZGVyRm5zKSxuZXcgbi5DdG9yKHIpfWZ1bmN0aW9uIHllKGUsdCl7aWYoIWUuY2hpbGR8fGUuY2hpbGQuX2lzRGVzdHJveWVkKXt2YXIgbj1lLmNoaWxkPWdlKGUsTGkpO24uJG1vdW50KHQ/ZS5lbG06dm9pZCAwLHQpfWVsc2UgaWYoZS5kYXRhLmtlZXBBbGl2ZSl7dmFyIHI9ZTtfZShyLHIpfX1mdW5jdGlvbiBfZShlLHQpe3ZhciBuPXQuY29tcG9uZW50T3B0aW9ucyxyPXQuY2hpbGQ9ZS5jaGlsZDtyLl91cGRhdGVGcm9tUGFyZW50KG4ucHJvcHNEYXRhLG4ubGlzdGVuZXJzLHQsbi5jaGlsZHJlbil9ZnVuY3Rpb24gYmUoZSl7ZS5jaGlsZC5faXNNb3VudGVkfHwoZS5jaGlsZC5faXNNb3VudGVkPSEwLHZlKGUuY2hpbGQsXCJtb3VudGVkXCIpKSxlLmRhdGEua2VlcEFsaXZlJiYoZS5jaGlsZC5faW5hY3RpdmU9ITEsdmUoZS5jaGlsZCxcImFjdGl2YXRlZFwiKSl9ZnVuY3Rpb24gJGUoZSl7ZS5jaGlsZC5faXNEZXN0cm95ZWR8fChlLmRhdGEua2VlcEFsaXZlPyhlLmNoaWxkLl9pbmFjdGl2ZT0hMCx2ZShlLmNoaWxkLFwiZGVhY3RpdmF0ZWRcIikpOmUuY2hpbGQuJGRlc3Ryb3koKSl9ZnVuY3Rpb24gd2UoZSx0LG4pe2lmKCFlLnJlcXVlc3RlZCl7ZS5yZXF1ZXN0ZWQ9ITA7dmFyIHI9ZS5wZW5kaW5nQ2FsbGJhY2tzPVtuXSxpPSEwLG89ZnVuY3Rpb24obil7aWYodShuKSYmKG49dC5leHRlbmQobikpLGUucmVzb2x2ZWQ9biwhaSlmb3IodmFyIG89MCxhPXIubGVuZ3RoO288YTtvKyspcltvXShuKX0sYT1mdW5jdGlvbihlKXt9LHM9ZShvLGEpO3JldHVybiBzJiZcImZ1bmN0aW9uXCI9PXR5cGVvZiBzLnRoZW4mJiFlLnJlc29sdmVkJiZzLnRoZW4obyxhKSxpPSExLGUucmVzb2x2ZWR9ZS5wZW5kaW5nQ2FsbGJhY2tzLnB1c2gobil9ZnVuY3Rpb24geGUoZSx0KXt2YXIgbj10Lm9wdGlvbnMucHJvcHM7aWYobil7dmFyIHI9e30saT1lLmF0dHJzLG89ZS5wcm9wcyxhPWUuZG9tUHJvcHM7aWYoaXx8b3x8YSlmb3IodmFyIHMgaW4gbil7dmFyIGM9S3Iocyk7Q2UocixvLHMsYywhMCl8fENlKHIsaSxzLGMpfHxDZShyLGEscyxjKX1yZXR1cm4gcn19ZnVuY3Rpb24gQ2UoZSx0LG4scixvKXtpZih0KXtpZihpKHQsbikpcmV0dXJuIGVbbl09dFtuXSxvfHxkZWxldGUgdFtuXSwhMDtpZihpKHQscikpcmV0dXJuIGVbbl09dFtyXSxvfHxkZWxldGUgdFtyXSwhMH1yZXR1cm4hMX1mdW5jdGlvbiBrZShlKXtlLmhvb2t8fChlLmhvb2s9e30pO2Zvcih2YXIgdD0wO3Q8TWkubGVuZ3RoO3QrKyl7dmFyIG49TWlbdF0scj1lLmhvb2tbbl0saT1EaVtuXTtlLmhvb2tbbl09cj9BZShpLHIpOml9fWZ1bmN0aW9uIEFlKGUsdCl7cmV0dXJuIGZ1bmN0aW9uKG4scil7ZShuLHIpLHQobixyKX19ZnVuY3Rpb24gT2UoZSx0LG4pe3JldHVybiB0JiYoQXJyYXkuaXNBcnJheSh0KXx8XCJvYmplY3RcIiE9dHlwZW9mIHQpJiYobj10LHQ9dm9pZCAwKSxTZSh0aGlzLl9zZWxmLGUsdCxuKX1mdW5jdGlvbiBTZShlLHQsbixyKXtpZighbnx8IW4uX19vYl9fKXtpZighdClyZXR1cm4gTmkoKTtpZihBcnJheS5pc0FycmF5KHIpJiZcImZ1bmN0aW9uXCI9PXR5cGVvZiByWzBdJiYobj1ufHx7fSxuLnNjb3BlZFNsb3RzPXtkZWZhdWx0OnJbMF19LHIubGVuZ3RoPTApLFwic3RyaW5nXCI9PXR5cGVvZiB0KXt2YXIgaSxvPWxpLmdldFRhZ05hbWVzcGFjZSh0KTtpZihsaS5pc1Jlc2VydmVkVGFnKHQpKXJldHVybiBuZXcgRWkodCxuLGNlKHIsbyksdm9pZCAwLHZvaWQgMCxvLGUpO2lmKGk9UChlLiRvcHRpb25zLFwiY29tcG9uZW50c1wiLHQpKXJldHVybiBoZShpLG4sZSxyLHQpO3ZhciBhPVwiZm9yZWlnbk9iamVjdFwiPT09dD9cInhodG1sXCI6bztyZXR1cm4gbmV3IEVpKHQsbixjZShyLGEpLHZvaWQgMCx2b2lkIDAsbyxlKX1yZXR1cm4gaGUodCxuLGUscil9fWZ1bmN0aW9uIFRlKGUpe2UuJHZub2RlPW51bGwsZS5fdm5vZGU9bnVsbCxlLl9zdGF0aWNUcmVlcz1udWxsLGUuX3JlbmRlckNvbnRleHQ9ZS4kb3B0aW9ucy5fcGFyZW50Vm5vZGUmJmUuJG9wdGlvbnMuX3BhcmVudFZub2RlLmNvbnRleHQsZS4kc2xvdHM9RWUoZS4kb3B0aW9ucy5fcmVuZGVyQ2hpbGRyZW4sZS5fcmVuZGVyQ29udGV4dCksZS4kc2NvcGVkU2xvdHM9bnVsbCxlLiRjcmVhdGVFbGVtZW50PXMoT2UsZSksZS4kb3B0aW9ucy5lbCYmZS4kbW91bnQoZS4kb3B0aW9ucy5lbCl9ZnVuY3Rpb24gamUobil7ZnVuY3Rpb24gcihlLHQsbil7aWYoQXJyYXkuaXNBcnJheShlKSlmb3IodmFyIHI9MDtyPGUubGVuZ3RoO3IrKyllW3JdJiZcInN0cmluZ1wiIT10eXBlb2YgZVtyXSYmaShlW3JdLHQrXCJfXCIrcixuKTtlbHNlIGkoZSx0LG4pfWZ1bmN0aW9uIGkoZSx0LG4pe2UuaXNTdGF0aWM9ITAsZS5rZXk9dCxlLmlzT25jZT1ufW4ucHJvdG90eXBlLiRuZXh0VGljaz1mdW5jdGlvbihlKXtyZXR1cm4gc2koZSx0aGlzKX0sbi5wcm90b3R5cGUuX3JlbmRlcj1mdW5jdGlvbigpe3ZhciBlPXRoaXMsdD1lLiRvcHRpb25zLG49dC5yZW5kZXIscj10LnN0YXRpY1JlbmRlckZucyxpPXQuX3BhcmVudFZub2RlO2lmKGUuX2lzTW91bnRlZClmb3IodmFyIG8gaW4gZS4kc2xvdHMpZS4kc2xvdHNbb109cmUoZS4kc2xvdHNbb10pO2kmJihlLiRzY29wZWRTbG90cz1pLmRhdGEuc2NvcGVkU2xvdHMpLHImJiFlLl9zdGF0aWNUcmVlcyYmKGUuX3N0YXRpY1RyZWVzPVtdKSxlLiR2bm9kZT1pO3ZhciBhO3RyeXthPW4uY2FsbChlLl9yZW5kZXJQcm94eSxlLiRjcmVhdGVFbGVtZW50KX1jYXRjaCh0KXtpZihsaS5lcnJvckhhbmRsZXIpbGkuZXJyb3JIYW5kbGVyLmNhbGwobnVsbCx0LGUpO2Vsc2V7aWYob2koKSl0aHJvdyB0O2NvbnNvbGUuZXJyb3IodCl9YT1lLl92bm9kZX1yZXR1cm4gYSBpbnN0YW5jZW9mIEVpfHwoYT1OaSgpKSxhLnBhcmVudD1pLGF9LG4ucHJvdG90eXBlLl9oPU9lLG4ucHJvdG90eXBlLl9zPWUsbi5wcm90b3R5cGUuX249dCxuLnByb3RvdHlwZS5fZT1OaSxuLnByb3RvdHlwZS5fcT1oLG4ucHJvdG90eXBlLl9pPW0sbi5wcm90b3R5cGUuX209ZnVuY3Rpb24oZSx0KXt2YXIgbj10aGlzLl9zdGF0aWNUcmVlc1tlXTtyZXR1cm4gbiYmIXQ/QXJyYXkuaXNBcnJheShuKT9yZShuKTpuZShuKToobj10aGlzLl9zdGF0aWNUcmVlc1tlXT10aGlzLiRvcHRpb25zLnN0YXRpY1JlbmRlckZuc1tlXS5jYWxsKHRoaXMuX3JlbmRlclByb3h5KSxyKG4sXCJfX3N0YXRpY19fXCIrZSwhMSksbil9LG4ucHJvdG90eXBlLl9vPWZ1bmN0aW9uKGUsdCxuKXtyZXR1cm4gcihlLFwiX19vbmNlX19cIit0KyhuP1wiX1wiK246XCJcIiksITApLGV9O3ZhciBvPWZ1bmN0aW9uKGUpe3JldHVybiBlfTtuLnByb3RvdHlwZS5fZj1mdW5jdGlvbihlKXtyZXR1cm4gUCh0aGlzLiRvcHRpb25zLFwiZmlsdGVyc1wiLGUsITApfHxvfSxuLnByb3RvdHlwZS5fbD1mdW5jdGlvbihlLHQpe3ZhciBuLHIsaSxvLGE7aWYoQXJyYXkuaXNBcnJheShlKSlmb3Iobj1uZXcgQXJyYXkoZS5sZW5ndGgpLHI9MCxpPWUubGVuZ3RoO3I8aTtyKyspbltyXT10KGVbcl0scik7ZWxzZSBpZihcIm51bWJlclwiPT10eXBlb2YgZSlmb3Iobj1uZXcgQXJyYXkoZSkscj0wO3I8ZTtyKyspbltyXT10KHIrMSxyKTtlbHNlIGlmKHUoZSkpZm9yKG89T2JqZWN0LmtleXMoZSksbj1uZXcgQXJyYXkoby5sZW5ndGgpLHI9MCxpPW8ubGVuZ3RoO3I8aTtyKyspYT1vW3JdLG5bcl09dChlW2FdLGEscik7cmV0dXJuIG59LG4ucHJvdG90eXBlLl90PWZ1bmN0aW9uKGUsdCxuKXt2YXIgcj10aGlzLiRzY29wZWRTbG90cyYmdGhpcy4kc2NvcGVkU2xvdHNbZV07aWYocilyZXR1cm4gcihufHx7fSl8fHQ7dmFyIGk9dGhpcy4kc2xvdHNbZV07cmV0dXJuIGl8fHR9LG4ucHJvdG90eXBlLl9iPWZ1bmN0aW9uKGUsdCxuLHIpe2lmKG4paWYodShuKSl7QXJyYXkuaXNBcnJheShuKSYmKG49ZChuKSk7Zm9yKHZhciBpIGluIG4paWYoXCJjbGFzc1wiPT09aXx8XCJzdHlsZVwiPT09aSllW2ldPW5baV07ZWxzZXt2YXIgbz1yfHxsaS5tdXN0VXNlUHJvcCh0LGkpP2UuZG9tUHJvcHN8fChlLmRvbVByb3BzPXt9KTplLmF0dHJzfHwoZS5hdHRycz17fSk7b1tpXT1uW2ldfX1lbHNlO3JldHVybiBlfSxuLnByb3RvdHlwZS5faz1mdW5jdGlvbihlKXtyZXR1cm4gbGkua2V5Q29kZXNbZV19fWZ1bmN0aW9uIEVlKGUsdCl7dmFyIG49e307aWYoIWUpcmV0dXJuIG47Zm9yKHZhciByLGksbz1jZShlKXx8W10sYT1bXSxzPTAsYz1vLmxlbmd0aDtzPGM7cysrKWlmKGk9b1tzXSwoaS5jb250ZXh0PT09dHx8aS5mdW5jdGlvbmFsQ29udGV4dD09PXQpJiZpLmRhdGEmJihyPWkuZGF0YS5zbG90KSl7dmFyIGw9bltyXXx8KG5bcl09W10pO1widGVtcGxhdGVcIj09PWkudGFnP2wucHVzaC5hcHBseShsLGkuY2hpbGRyZW4pOmwucHVzaChpKX1lbHNlIGEucHVzaChpKTtyZXR1cm4gYS5sZW5ndGgmJigxIT09YS5sZW5ndGh8fFwiIFwiIT09YVswXS50ZXh0JiYhYVswXS5pc0NvbW1lbnQpJiYobi5kZWZhdWx0PWEpLG59ZnVuY3Rpb24gTmUoZSl7ZS5fZXZlbnRzPU9iamVjdC5jcmVhdGUobnVsbCk7dmFyIHQ9ZS4kb3B0aW9ucy5fcGFyZW50TGlzdGVuZXJzLG49cyhlLiRvbixlKSxyPXMoZS4kb2ZmLGUpO2UuX3VwZGF0ZUxpc3RlbmVycz1mdW5jdGlvbih0LGkpe29lKHQsaXx8e30sbixyLGUpfSx0JiZlLl91cGRhdGVMaXN0ZW5lcnModCl9ZnVuY3Rpb24gTGUoZSl7ZS5wcm90b3R5cGUuJG9uPWZ1bmN0aW9uKGUsdCl7dmFyIG49dGhpcztyZXR1cm4obi5fZXZlbnRzW2VdfHwobi5fZXZlbnRzW2VdPVtdKSkucHVzaCh0KSxufSxlLnByb3RvdHlwZS4kb25jZT1mdW5jdGlvbihlLHQpe2Z1bmN0aW9uIG4oKXtyLiRvZmYoZSxuKSx0LmFwcGx5KHIsYXJndW1lbnRzKX12YXIgcj10aGlzO3JldHVybiBuLmZuPXQsci4kb24oZSxuKSxyfSxlLnByb3RvdHlwZS4kb2ZmPWZ1bmN0aW9uKGUsdCl7dmFyIG49dGhpcztpZighYXJndW1lbnRzLmxlbmd0aClyZXR1cm4gbi5fZXZlbnRzPU9iamVjdC5jcmVhdGUobnVsbCksbjt2YXIgcj1uLl9ldmVudHNbZV07aWYoIXIpcmV0dXJuIG47aWYoMT09PWFyZ3VtZW50cy5sZW5ndGgpcmV0dXJuIG4uX2V2ZW50c1tlXT1udWxsLG47Zm9yKHZhciBpLG89ci5sZW5ndGg7by0tOylpZihpPXJbb10saT09PXR8fGkuZm49PT10KXtyLnNwbGljZShvLDEpO2JyZWFrfXJldHVybiBufSxlLnByb3RvdHlwZS4kZW1pdD1mdW5jdGlvbihlKXt2YXIgdD10aGlzLG49dC5fZXZlbnRzW2VdO2lmKG4pe249bi5sZW5ndGg+MT9jKG4pOm47Zm9yKHZhciByPWMoYXJndW1lbnRzLDEpLGk9MCxvPW4ubGVuZ3RoO2k8bztpKyspbltpXS5hcHBseSh0LHIpfXJldHVybiB0fX1mdW5jdGlvbiBEZShlKXtlLnByb3RvdHlwZS5faW5pdD1mdW5jdGlvbihlKXt2YXIgdD10aGlzO3QuX3VpZD1QaSsrLHQuX2lzVnVlPSEwLGUmJmUuX2lzQ29tcG9uZW50P01lKHQsZSk6dC4kb3B0aW9ucz1NKFBlKHQuY29uc3RydWN0b3IpLGV8fHt9LHQpLHQuX3JlbmRlclByb3h5PXQsdC5fc2VsZj10LGRlKHQpLE5lKHQpLHZlKHQsXCJiZWZvcmVDcmVhdGVcIiksSyh0KSx2ZSh0LFwiY3JlYXRlZFwiKSxUZSh0KX19ZnVuY3Rpb24gTWUoZSx0KXt2YXIgbj1lLiRvcHRpb25zPU9iamVjdC5jcmVhdGUoZS5jb25zdHJ1Y3Rvci5vcHRpb25zKTtuLnBhcmVudD10LnBhcmVudCxuLnByb3BzRGF0YT10LnByb3BzRGF0YSxuLl9wYXJlbnRWbm9kZT10Ll9wYXJlbnRWbm9kZSxuLl9wYXJlbnRMaXN0ZW5lcnM9dC5fcGFyZW50TGlzdGVuZXJzLG4uX3JlbmRlckNoaWxkcmVuPXQuX3JlbmRlckNoaWxkcmVuLG4uX2NvbXBvbmVudFRhZz10Ll9jb21wb25lbnRUYWcsdC5yZW5kZXImJihuLnJlbmRlcj10LnJlbmRlcixuLnN0YXRpY1JlbmRlckZucz10LnN0YXRpY1JlbmRlckZucyl9ZnVuY3Rpb24gUGUoZSl7dmFyIHQ9ZS5vcHRpb25zO2lmKGUuc3VwZXIpe3ZhciBuPWUuc3VwZXIub3B0aW9ucyxyPWUuc3VwZXJPcHRpb25zLGk9ZS5leHRlbmRPcHRpb25zO24hPT1yJiYoZS5zdXBlck9wdGlvbnM9bixpLnJlbmRlcj10LnJlbmRlcixpLnN0YXRpY1JlbmRlckZucz10LnN0YXRpY1JlbmRlckZucyxpLl9zY29wZUlkPXQuX3Njb3BlSWQsdD1lLm9wdGlvbnM9TShuLGkpLHQubmFtZSYmKHQuY29tcG9uZW50c1t0Lm5hbWVdPWUpKX1yZXR1cm4gdH1mdW5jdGlvbiBSZShlKXt0aGlzLl9pbml0KGUpfWZ1bmN0aW9uIEllKGUpe2UudXNlPWZ1bmN0aW9uKGUpe2lmKCFlLmluc3RhbGxlZCl7dmFyIHQ9Yyhhcmd1bWVudHMsMSk7cmV0dXJuIHQudW5zaGlmdCh0aGlzKSxcImZ1bmN0aW9uXCI9PXR5cGVvZiBlLmluc3RhbGw/ZS5pbnN0YWxsLmFwcGx5KGUsdCk6ZS5hcHBseShudWxsLHQpLGUuaW5zdGFsbGVkPSEwLHRoaXN9fX1mdW5jdGlvbiBGZShlKXtlLm1peGluPWZ1bmN0aW9uKGUpe3RoaXMub3B0aW9ucz1NKHRoaXMub3B0aW9ucyxlKX19ZnVuY3Rpb24gQmUoZSl7ZS5jaWQ9MDt2YXIgdD0xO2UuZXh0ZW5kPWZ1bmN0aW9uKGUpe2U9ZXx8e307dmFyIG49dGhpcyxyPW4uY2lkLGk9ZS5fQ3Rvcnx8KGUuX0N0b3I9e30pO2lmKGlbcl0pcmV0dXJuIGlbcl07dmFyIG89ZS5uYW1lfHxuLm9wdGlvbnMubmFtZSxhPWZ1bmN0aW9uKGUpe3RoaXMuX2luaXQoZSl9O3JldHVybiBhLnByb3RvdHlwZT1PYmplY3QuY3JlYXRlKG4ucHJvdG90eXBlKSxhLnByb3RvdHlwZS5jb25zdHJ1Y3Rvcj1hLGEuY2lkPXQrKyxhLm9wdGlvbnM9TShuLm9wdGlvbnMsZSksYS5zdXBlcj1uLGEuZXh0ZW5kPW4uZXh0ZW5kLGEubWl4aW49bi5taXhpbixhLnVzZT1uLnVzZSxsaS5fYXNzZXRUeXBlcy5mb3JFYWNoKGZ1bmN0aW9uKGUpe2FbZV09bltlXX0pLG8mJihhLm9wdGlvbnMuY29tcG9uZW50c1tvXT1hKSxhLnN1cGVyT3B0aW9ucz1uLm9wdGlvbnMsYS5leHRlbmRPcHRpb25zPWUsaVtyXT1hLGF9fWZ1bmN0aW9uIFVlKGUpe2xpLl9hc3NldFR5cGVzLmZvckVhY2goZnVuY3Rpb24odCl7ZVt0XT1mdW5jdGlvbihlLG4pe3JldHVybiBuPyhcImNvbXBvbmVudFwiPT09dCYmZihuKSYmKG4ubmFtZT1uLm5hbWV8fGUsbj10aGlzLm9wdGlvbnMuX2Jhc2UuZXh0ZW5kKG4pKSxcImRpcmVjdGl2ZVwiPT09dCYmXCJmdW5jdGlvblwiPT10eXBlb2YgbiYmKG49e2JpbmQ6bix1cGRhdGU6bn0pLHRoaXMub3B0aW9uc1t0K1wic1wiXVtlXT1uLG4pOnRoaXMub3B0aW9uc1t0K1wic1wiXVtlXX19KX1mdW5jdGlvbiBIZShlLHQpe3JldHVyblwic3RyaW5nXCI9PXR5cGVvZiBlP2Uuc3BsaXQoXCIsXCIpLmluZGV4T2YodCk+LTE6ZS50ZXN0KHQpfWZ1bmN0aW9uIFZlKGUpe3ZhciB0PXt9O3QuZ2V0PWZ1bmN0aW9uKCl7cmV0dXJuIGxpfSxPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxcImNvbmZpZ1wiLHQpLGUudXRpbD0kaSxlLnNldD1PLGUuZGVsZXRlPVMsZS5uZXh0VGljaz1zaSxlLm9wdGlvbnM9T2JqZWN0LmNyZWF0ZShudWxsKSxsaS5fYXNzZXRUeXBlcy5mb3JFYWNoKGZ1bmN0aW9uKHQpe2Uub3B0aW9uc1t0K1wic1wiXT1PYmplY3QuY3JlYXRlKG51bGwpfSksZS5vcHRpb25zLl9iYXNlPWUsbChlLm9wdGlvbnMuY29tcG9uZW50cyxGaSksSWUoZSksRmUoZSksQmUoZSksVWUoZSl9ZnVuY3Rpb24gemUoZSl7Zm9yKHZhciB0PWUuZGF0YSxuPWUscj1lO3IuY2hpbGQ7KXI9ci5jaGlsZC5fdm5vZGUsci5kYXRhJiYodD1KZShyLmRhdGEsdCkpO2Zvcig7bj1uLnBhcmVudDspbi5kYXRhJiYodD1KZSh0LG4uZGF0YSkpO3JldHVybiBLZSh0KX1mdW5jdGlvbiBKZShlLHQpe3JldHVybntzdGF0aWNDbGFzczpxZShlLnN0YXRpY0NsYXNzLHQuc3RhdGljQ2xhc3MpLGNsYXNzOmUuY2xhc3M/W2UuY2xhc3MsdC5jbGFzc106dC5jbGFzc319ZnVuY3Rpb24gS2UoZSl7dmFyIHQ9ZS5jbGFzcyxuPWUuc3RhdGljQ2xhc3M7cmV0dXJuIG58fHQ/cWUobixXZSh0KSk6XCJcIn1mdW5jdGlvbiBxZShlLHQpe3JldHVybiBlP3Q/ZStcIiBcIit0OmU6dHx8XCJcIn1mdW5jdGlvbiBXZShlKXt2YXIgdD1cIlwiO2lmKCFlKXJldHVybiB0O2lmKFwic3RyaW5nXCI9PXR5cGVvZiBlKXJldHVybiBlO2lmKEFycmF5LmlzQXJyYXkoZSkpe2Zvcih2YXIgbixyPTAsaT1lLmxlbmd0aDtyPGk7cisrKWVbcl0mJihuPVdlKGVbcl0pKSYmKHQrPW4rXCIgXCIpO3JldHVybiB0LnNsaWNlKDAsLTEpfWlmKHUoZSkpe2Zvcih2YXIgbyBpbiBlKWVbb10mJih0Kz1vK1wiIFwiKTtyZXR1cm4gdC5zbGljZSgwLC0xKX1yZXR1cm4gdH1mdW5jdGlvbiBaZShlKXtyZXR1cm4gWGkoZSk/XCJzdmdcIjpcIm1hdGhcIj09PWU/XCJtYXRoXCI6dm9pZCAwfWZ1bmN0aW9uIEdlKGUpe2lmKCFRcilyZXR1cm4hMDtpZih0byhlKSlyZXR1cm4hMTtpZihlPWUudG9Mb3dlckNhc2UoKSxudWxsIT1ub1tlXSlyZXR1cm4gbm9bZV07dmFyIHQ9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChlKTtyZXR1cm4gZS5pbmRleE9mKFwiLVwiKT4tMT9ub1tlXT10LmNvbnN0cnVjdG9yPT09d2luZG93LkhUTUxVbmtub3duRWxlbWVudHx8dC5jb25zdHJ1Y3Rvcj09PXdpbmRvdy5IVE1MRWxlbWVudDpub1tlXT0vSFRNTFVua25vd25FbGVtZW50Ly50ZXN0KHQudG9TdHJpbmcoKSl9ZnVuY3Rpb24gWWUoZSl7aWYoXCJzdHJpbmdcIj09dHlwZW9mIGUpe2lmKGU9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihlKSwhZSlyZXR1cm4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKX1yZXR1cm4gZX1mdW5jdGlvbiBRZShlLHQpe3ZhciBuPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoZSk7cmV0dXJuXCJzZWxlY3RcIiE9PWU/bjoodC5kYXRhJiZ0LmRhdGEuYXR0cnMmJlwibXVsdGlwbGVcImluIHQuZGF0YS5hdHRycyYmbi5zZXRBdHRyaWJ1dGUoXCJtdWx0aXBsZVwiLFwibXVsdGlwbGVcIiksbil9ZnVuY3Rpb24gWGUoZSx0KXtyZXR1cm4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKFdpW2VdLHQpfWZ1bmN0aW9uIGV0KGUpe3JldHVybiBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShlKX1mdW5jdGlvbiB0dChlKXtyZXR1cm4gZG9jdW1lbnQuY3JlYXRlQ29tbWVudChlKX1mdW5jdGlvbiBudChlLHQsbil7ZS5pbnNlcnRCZWZvcmUodCxuKX1mdW5jdGlvbiBydChlLHQpe2UucmVtb3ZlQ2hpbGQodCl9ZnVuY3Rpb24gaXQoZSx0KXtlLmFwcGVuZENoaWxkKHQpfWZ1bmN0aW9uIG90KGUpe3JldHVybiBlLnBhcmVudE5vZGV9ZnVuY3Rpb24gYXQoZSl7cmV0dXJuIGUubmV4dFNpYmxpbmd9ZnVuY3Rpb24gc3QoZSl7cmV0dXJuIGUudGFnTmFtZX1mdW5jdGlvbiBjdChlLHQpe2UudGV4dENvbnRlbnQ9dH1mdW5jdGlvbiBsdChlKXtyZXR1cm4gZS5jaGlsZE5vZGVzfWZ1bmN0aW9uIHV0KGUsdCxuKXtlLnNldEF0dHJpYnV0ZSh0LG4pfWZ1bmN0aW9uIGZ0KGUsdCl7dmFyIG49ZS5kYXRhLnJlZjtpZihuKXt2YXIgaT1lLmNvbnRleHQsbz1lLmNoaWxkfHxlLmVsbSxhPWkuJHJlZnM7dD9BcnJheS5pc0FycmF5KGFbbl0pP3IoYVtuXSxvKTphW25dPT09byYmKGFbbl09dm9pZCAwKTplLmRhdGEucmVmSW5Gb3I/QXJyYXkuaXNBcnJheShhW25dKSYmYVtuXS5pbmRleE9mKG8pPDA/YVtuXS5wdXNoKG8pOmFbbl09W29dOmFbbl09b319ZnVuY3Rpb24gZHQoZSl7cmV0dXJuIG51bGw9PWV9ZnVuY3Rpb24gcHQoZSl7cmV0dXJuIG51bGwhPWV9ZnVuY3Rpb24gdnQoZSx0KXtyZXR1cm4gZS5rZXk9PT10LmtleSYmZS50YWc9PT10LnRhZyYmZS5pc0NvbW1lbnQ9PT10LmlzQ29tbWVudCYmIWUuZGF0YT09IXQuZGF0YX1mdW5jdGlvbiBodChlLHQsbil7dmFyIHIsaSxvPXt9O2ZvcihyPXQ7cjw9bjsrK3IpaT1lW3JdLmtleSxwdChpKSYmKG9baV09cik7cmV0dXJuIG99ZnVuY3Rpb24gbXQoZSl7ZnVuY3Rpb24gdChlKXtyZXR1cm4gbmV3IEVpKHgudGFnTmFtZShlKS50b0xvd2VyQ2FzZSgpLHt9LFtdLHZvaWQgMCxlKX1mdW5jdGlvbiBuKGUsdCl7ZnVuY3Rpb24gbigpezA9PT0tLW4ubGlzdGVuZXJzJiZyKGUpfXJldHVybiBuLmxpc3RlbmVycz10LG59ZnVuY3Rpb24gcihlKXt2YXIgdD14LnBhcmVudE5vZGUoZSk7dCYmeC5yZW1vdmVDaGlsZCh0LGUpfWZ1bmN0aW9uIGkoZSx0LG4pe3ZhciByLGk9ZS5kYXRhO2lmKGUuaXNSb290SW5zZXJ0PSFuLHB0KGkpJiYocHQocj1pLmhvb2spJiZwdChyPXIuaW5pdCkmJnIoZSkscHQocj1lLmNoaWxkKSkpcmV0dXJuIGwoZSx0KSxlLmVsbTt2YXIgbz1lLmNoaWxkcmVuLHM9ZS50YWc7cmV0dXJuIHB0KHMpPyhlLmVsbT1lLm5zP3guY3JlYXRlRWxlbWVudE5TKGUubnMscyk6eC5jcmVhdGVFbGVtZW50KHMsZSksdShlKSxhKGUsbyx0KSxwdChpKSYmYyhlLHQpKTplLmlzQ29tbWVudD9lLmVsbT14LmNyZWF0ZUNvbW1lbnQoZS50ZXh0KTplLmVsbT14LmNyZWF0ZVRleHROb2RlKGUudGV4dCksZS5lbG19ZnVuY3Rpb24gYShlLHQsbil7aWYoQXJyYXkuaXNBcnJheSh0KSlmb3IodmFyIHI9MDtyPHQubGVuZ3RoOysrcil4LmFwcGVuZENoaWxkKGUuZWxtLGkodFtyXSxuLCEwKSk7ZWxzZSBvKGUudGV4dCkmJnguYXBwZW5kQ2hpbGQoZS5lbG0seC5jcmVhdGVUZXh0Tm9kZShlLnRleHQpKX1mdW5jdGlvbiBzKGUpe2Zvcig7ZS5jaGlsZDspZT1lLmNoaWxkLl92bm9kZTtyZXR1cm4gcHQoZS50YWcpfWZ1bmN0aW9uIGMoZSx0KXtmb3IodmFyIG49MDtuPCQuY3JlYXRlLmxlbmd0aDsrK24pJC5jcmVhdGVbbl0ob28sZSk7Xz1lLmRhdGEuaG9vayxwdChfKSYmKF8uY3JlYXRlJiZfLmNyZWF0ZShvbyxlKSxfLmluc2VydCYmdC5wdXNoKGUpKX1mdW5jdGlvbiBsKGUsdCl7ZS5kYXRhLnBlbmRpbmdJbnNlcnQmJnQucHVzaC5hcHBseSh0LGUuZGF0YS5wZW5kaW5nSW5zZXJ0KSxlLmVsbT1lLmNoaWxkLiRlbCxzKGUpPyhjKGUsdCksdShlKSk6KGZ0KGUpLHQucHVzaChlKSl9ZnVuY3Rpb24gdShlKXt2YXIgdDtwdCh0PWUuY29udGV4dCkmJnB0KHQ9dC4kb3B0aW9ucy5fc2NvcGVJZCkmJnguc2V0QXR0cmlidXRlKGUuZWxtLHQsXCJcIikscHQodD1MaSkmJnQhPT1lLmNvbnRleHQmJnB0KHQ9dC4kb3B0aW9ucy5fc2NvcGVJZCkmJnguc2V0QXR0cmlidXRlKGUuZWxtLHQsXCJcIil9ZnVuY3Rpb24gZihlLHQsbixyLG8sYSl7Zm9yKDtyPD1vOysrcil4Lmluc2VydEJlZm9yZShlLGkobltyXSxhKSx0KX1mdW5jdGlvbiBkKGUpe3ZhciB0LG4scj1lLmRhdGE7aWYocHQocikpZm9yKHB0KHQ9ci5ob29rKSYmcHQodD10LmRlc3Ryb3kpJiZ0KGUpLHQ9MDt0PCQuZGVzdHJveS5sZW5ndGg7Kyt0KSQuZGVzdHJveVt0XShlKTtpZihwdCh0PWUuY2hpbGRyZW4pKWZvcihuPTA7bjxlLmNoaWxkcmVuLmxlbmd0aDsrK24pZChlLmNoaWxkcmVuW25dKX1mdW5jdGlvbiBwKGUsdCxuLHIpe2Zvcig7bjw9cjsrK24pe3ZhciBpPXRbbl07cHQoaSkmJihwdChpLnRhZyk/KHYoaSksZChpKSk6eC5yZW1vdmVDaGlsZChlLGkuZWxtKSl9fWZ1bmN0aW9uIHYoZSx0KXtpZih0fHxwdChlLmRhdGEpKXt2YXIgaT0kLnJlbW92ZS5sZW5ndGgrMTtmb3IodD90Lmxpc3RlbmVycys9aTp0PW4oZS5lbG0saSkscHQoXz1lLmNoaWxkKSYmcHQoXz1fLl92bm9kZSkmJnB0KF8uZGF0YSkmJnYoXyx0KSxfPTA7XzwkLnJlbW92ZS5sZW5ndGg7KytfKSQucmVtb3ZlW19dKGUsdCk7cHQoXz1lLmRhdGEuaG9vaykmJnB0KF89Xy5yZW1vdmUpP18oZSx0KTp0KCl9ZWxzZSByKGUuZWxtKX1mdW5jdGlvbiBoKGUsdCxuLHIsbyl7Zm9yKHZhciBhLHMsYyxsLHU9MCxkPTAsdj10Lmxlbmd0aC0xLGg9dFswXSxnPXRbdl0seT1uLmxlbmd0aC0xLF89blswXSxiPW5beV0sJD0hbzt1PD12JiZkPD15OylkdChoKT9oPXRbKyt1XTpkdChnKT9nPXRbLS12XTp2dChoLF8pPyhtKGgsXyxyKSxoPXRbKyt1XSxfPW5bKytkXSk6dnQoZyxiKT8obShnLGIsciksZz10Wy0tdl0sYj1uWy0teV0pOnZ0KGgsYik/KG0oaCxiLHIpLCQmJnguaW5zZXJ0QmVmb3JlKGUsaC5lbG0seC5uZXh0U2libGluZyhnLmVsbSkpLGg9dFsrK3VdLGI9blstLXldKTp2dChnLF8pPyhtKGcsXyxyKSwkJiZ4Lmluc2VydEJlZm9yZShlLGcuZWxtLGguZWxtKSxnPXRbLS12XSxfPW5bKytkXSk6KGR0KGEpJiYoYT1odCh0LHUsdikpLHM9cHQoXy5rZXkpP2FbXy5rZXldOm51bGwsZHQocyk/KHguaW5zZXJ0QmVmb3JlKGUsaShfLHIpLGguZWxtKSxfPW5bKytkXSk6KGM9dFtzXSxjLnRhZyE9PV8udGFnPyh4Lmluc2VydEJlZm9yZShlLGkoXyxyKSxoLmVsbSksXz1uWysrZF0pOihtKGMsXyxyKSx0W3NdPXZvaWQgMCwkJiZ4Lmluc2VydEJlZm9yZShlLF8uZWxtLGguZWxtKSxfPW5bKytkXSkpKTt1PnY/KGw9ZHQoblt5KzFdKT9udWxsOm5beSsxXS5lbG0sZihlLGwsbixkLHkscikpOmQ+eSYmcChlLHQsdSx2KX1mdW5jdGlvbiBtKGUsdCxuLHIpe2lmKGUhPT10KXtpZih0LmlzU3RhdGljJiZlLmlzU3RhdGljJiZ0LmtleT09PWUua2V5JiYodC5pc0Nsb25lZHx8dC5pc09uY2UpKXJldHVybiB2b2lkKHQuZWxtPWUuZWxtKTt2YXIgaSxvPXQuZGF0YSxhPXB0KG8pO2EmJnB0KGk9by5ob29rKSYmcHQoaT1pLnByZXBhdGNoKSYmaShlLHQpO3ZhciBjPXQuZWxtPWUuZWxtLGw9ZS5jaGlsZHJlbix1PXQuY2hpbGRyZW47aWYoYSYmcyh0KSl7Zm9yKGk9MDtpPCQudXBkYXRlLmxlbmd0aDsrK2kpJC51cGRhdGVbaV0oZSx0KTtwdChpPW8uaG9vaykmJnB0KGk9aS51cGRhdGUpJiZpKGUsdCl9ZHQodC50ZXh0KT9wdChsKSYmcHQodSk/bCE9PXUmJmgoYyxsLHUsbixyKTpwdCh1KT8ocHQoZS50ZXh0KSYmeC5zZXRUZXh0Q29udGVudChjLFwiXCIpLGYoYyxudWxsLHUsMCx1Lmxlbmd0aC0xLG4pKTpwdChsKT9wKGMsbCwwLGwubGVuZ3RoLTEpOnB0KGUudGV4dCkmJnguc2V0VGV4dENvbnRlbnQoYyxcIlwiKTplLnRleHQhPT10LnRleHQmJnguc2V0VGV4dENvbnRlbnQoYyx0LnRleHQpLGEmJnB0KGk9by5ob29rKSYmcHQoaT1pLnBvc3RwYXRjaCkmJmkoZSx0KX19ZnVuY3Rpb24gZyhlLHQsbil7aWYobiYmZS5wYXJlbnQpZS5wYXJlbnQuZGF0YS5wZW5kaW5nSW5zZXJ0PXQ7ZWxzZSBmb3IodmFyIHI9MDtyPHQubGVuZ3RoOysrcil0W3JdLmRhdGEuaG9vay5pbnNlcnQodFtyXSl9ZnVuY3Rpb24geShlLHQsbil7dC5lbG09ZTt2YXIgcj10LnRhZyxpPXQuZGF0YSxvPXQuY2hpbGRyZW47aWYocHQoaSkmJihwdChfPWkuaG9vaykmJnB0KF89Xy5pbml0KSYmXyh0LCEwKSxwdChfPXQuY2hpbGQpKSlyZXR1cm4gbCh0LG4pLCEwO2lmKHB0KHIpKXtpZihwdChvKSl7dmFyIHM9eC5jaGlsZE5vZGVzKGUpO2lmKHMubGVuZ3RoKXt2YXIgdT0hMDtpZihzLmxlbmd0aCE9PW8ubGVuZ3RoKXU9ITE7ZWxzZSBmb3IodmFyIGY9MDtmPG8ubGVuZ3RoO2YrKylpZigheShzW2ZdLG9bZl0sbikpe3U9ITE7YnJlYWt9aWYoIXUpcmV0dXJuITF9ZWxzZSBhKHQsbyxuKX1wdChpKSYmYyh0LG4pfXJldHVybiEwfXZhciBfLGIsJD17fSx3PWUubW9kdWxlcyx4PWUubm9kZU9wcztmb3IoXz0wO188YW8ubGVuZ3RoOysrXylmb3IoJFthb1tfXV09W10sYj0wO2I8dy5sZW5ndGg7KytiKXZvaWQgMCE9PXdbYl1bYW9bX11dJiYkW2FvW19dXS5wdXNoKHdbYl1bYW9bX11dKTtyZXR1cm4gZnVuY3Rpb24oZSxuLHIsbyl7aWYoIW4pcmV0dXJuIHZvaWQoZSYmZChlKSk7dmFyIGEsYyxsPSExLHU9W107aWYoZSl7dmFyIGY9cHQoZS5ub2RlVHlwZSk7aWYoIWYmJnZ0KGUsbikpbShlLG4sdSxvKTtlbHNle2lmKGYpe2lmKDE9PT1lLm5vZGVUeXBlJiZlLmhhc0F0dHJpYnV0ZShcInNlcnZlci1yZW5kZXJlZFwiKSYmKGUucmVtb3ZlQXR0cmlidXRlKFwic2VydmVyLXJlbmRlcmVkXCIpLHI9ITApLHImJnkoZSxuLHUpKXJldHVybiBnKG4sdSwhMCksZTtlPXQoZSl9aWYoYT1lLmVsbSxjPXgucGFyZW50Tm9kZShhKSxpKG4sdSksbi5wYXJlbnQmJihuLnBhcmVudC5lbG09bi5lbG0scyhuKSkpZm9yKHZhciB2PTA7djwkLmNyZWF0ZS5sZW5ndGg7Kyt2KSQuY3JlYXRlW3ZdKG9vLG4ucGFyZW50KTtudWxsIT09Yz8oeC5pbnNlcnRCZWZvcmUoYyxuLmVsbSx4Lm5leHRTaWJsaW5nKGEpKSxwKGMsW2VdLDAsMCkpOnB0KGUudGFnKSYmZChlKX19ZWxzZSBsPSEwLGkobix1KTtyZXR1cm4gZyhuLHUsbCksbi5lbG19fWZ1bmN0aW9uIGd0KGUsdCl7aWYoZS5kYXRhLmRpcmVjdGl2ZXN8fHQuZGF0YS5kaXJlY3RpdmVzKXt2YXIgbixyLGksbz1lPT09b28sYT15dChlLmRhdGEuZGlyZWN0aXZlcyxlLmNvbnRleHQpLHM9eXQodC5kYXRhLmRpcmVjdGl2ZXMsdC5jb250ZXh0KSxjPVtdLGw9W107Zm9yKG4gaW4gcylyPWFbbl0saT1zW25dLHI/KGkub2xkVmFsdWU9ci52YWx1ZSxidChpLFwidXBkYXRlXCIsdCxlKSxpLmRlZiYmaS5kZWYuY29tcG9uZW50VXBkYXRlZCYmbC5wdXNoKGkpKTooYnQoaSxcImJpbmRcIix0LGUpLGkuZGVmJiZpLmRlZi5pbnNlcnRlZCYmYy5wdXNoKGkpKTtpZihjLmxlbmd0aCl7dmFyIHU9ZnVuY3Rpb24oKXtjLmZvckVhY2goZnVuY3Rpb24obil7YnQobixcImluc2VydGVkXCIsdCxlKX0pfTtvP2llKHQuZGF0YS5ob29rfHwodC5kYXRhLmhvb2s9e30pLFwiaW5zZXJ0XCIsdSxcImRpci1pbnNlcnRcIik6dSgpfWlmKGwubGVuZ3RoJiZpZSh0LmRhdGEuaG9va3x8KHQuZGF0YS5ob29rPXt9KSxcInBvc3RwYXRjaFwiLGZ1bmN0aW9uKCl7bC5mb3JFYWNoKGZ1bmN0aW9uKG4pe2J0KG4sXCJjb21wb25lbnRVcGRhdGVkXCIsdCxlKX0pfSxcImRpci1wb3N0cGF0Y2hcIiksIW8pZm9yKG4gaW4gYSlzW25dfHxidChhW25dLFwidW5iaW5kXCIsZSl9fWZ1bmN0aW9uIHl0KGUsdCl7dmFyIG49T2JqZWN0LmNyZWF0ZShudWxsKTtpZighZSlyZXR1cm4gbjt2YXIgcixpO2ZvcihyPTA7cjxlLmxlbmd0aDtyKyspaT1lW3JdLGkubW9kaWZpZXJzfHwoaS5tb2RpZmllcnM9Y28pLG5bX3QoaSldPWksaS5kZWY9UCh0LiRvcHRpb25zLFwiZGlyZWN0aXZlc1wiLGkubmFtZSwhMCk7cmV0dXJuIG59ZnVuY3Rpb24gX3QoZSl7cmV0dXJuIGUucmF3TmFtZXx8ZS5uYW1lK1wiLlwiK09iamVjdC5rZXlzKGUubW9kaWZpZXJzfHx7fSkuam9pbihcIi5cIil9ZnVuY3Rpb24gYnQoZSx0LG4scil7dmFyIGk9ZS5kZWYmJmUuZGVmW3RdO2kmJmkobi5lbG0sZSxuLHIpfWZ1bmN0aW9uICR0KGUsdCl7aWYoZS5kYXRhLmF0dHJzfHx0LmRhdGEuYXR0cnMpe3ZhciBuLHIsaSxvPXQuZWxtLGE9ZS5kYXRhLmF0dHJzfHx7fSxzPXQuZGF0YS5hdHRyc3x8e307cy5fX29iX18mJihzPXQuZGF0YS5hdHRycz1sKHt9LHMpKTtmb3IobiBpbiBzKXI9c1tuXSxpPWFbbl0saSE9PXImJnd0KG8sbixyKTtmb3IobiBpbiBhKW51bGw9PXNbbl0mJihKaShuKT9vLnJlbW92ZUF0dHJpYnV0ZU5TKHppLEtpKG4pKTpIaShuKXx8by5yZW1vdmVBdHRyaWJ1dGUobikpfX1mdW5jdGlvbiB3dChlLHQsbil7VmkodCk/cWkobik/ZS5yZW1vdmVBdHRyaWJ1dGUodCk6ZS5zZXRBdHRyaWJ1dGUodCx0KTpIaSh0KT9lLnNldEF0dHJpYnV0ZSh0LHFpKG4pfHxcImZhbHNlXCI9PT1uP1wiZmFsc2VcIjpcInRydWVcIik6SmkodCk/cWkobik/ZS5yZW1vdmVBdHRyaWJ1dGVOUyh6aSxLaSh0KSk6ZS5zZXRBdHRyaWJ1dGVOUyh6aSx0LG4pOnFpKG4pP2UucmVtb3ZlQXR0cmlidXRlKHQpOmUuc2V0QXR0cmlidXRlKHQsbil9ZnVuY3Rpb24geHQoZSx0KXt2YXIgbj10LmVsbSxyPXQuZGF0YSxpPWUuZGF0YTtpZihyLnN0YXRpY0NsYXNzfHxyLmNsYXNzfHxpJiYoaS5zdGF0aWNDbGFzc3x8aS5jbGFzcykpe3ZhciBvPXplKHQpLGE9bi5fdHJhbnNpdGlvbkNsYXNzZXM7YSYmKG89cWUobyxXZShhKSkpLG8hPT1uLl9wcmV2Q2xhc3MmJihuLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsbyksbi5fcHJldkNsYXNzPW8pfX1mdW5jdGlvbiBDdChlLHQpe2lmKGUuZGF0YS5vbnx8dC5kYXRhLm9uKXt2YXIgbj10LmRhdGEub258fHt9LHI9ZS5kYXRhLm9ufHx7fSxpPXQuZWxtLl92X2FkZHx8KHQuZWxtLl92X2FkZD1mdW5jdGlvbihlLG4scil7dC5lbG0uYWRkRXZlbnRMaXN0ZW5lcihlLG4scil9KSxvPXQuZWxtLl92X3JlbW92ZXx8KHQuZWxtLl92X3JlbW92ZT1mdW5jdGlvbihlLG4pe3QuZWxtLnJlbW92ZUV2ZW50TGlzdGVuZXIoZSxuKX0pO29lKG4scixpLG8sdC5jb250ZXh0KX19ZnVuY3Rpb24ga3QoZSx0KXtpZihlLmRhdGEuZG9tUHJvcHN8fHQuZGF0YS5kb21Qcm9wcyl7dmFyIG4scixpPXQuZWxtLG89ZS5kYXRhLmRvbVByb3BzfHx7fSxhPXQuZGF0YS5kb21Qcm9wc3x8e307YS5fX29iX18mJihhPXQuZGF0YS5kb21Qcm9wcz1sKHt9LGEpKTtmb3IobiBpbiBvKW51bGw9PWFbbl0mJihpW25dPVwiXCIpO2ZvcihuIGluIGEpaWYocj1hW25dLFwidGV4dENvbnRlbnRcIiE9PW4mJlwiaW5uZXJIVE1MXCIhPT1ufHwodC5jaGlsZHJlbiYmKHQuY2hpbGRyZW4ubGVuZ3RoPTApLHIhPT1vW25dKSlpZihcInZhbHVlXCI9PT1uKXtpLl92YWx1ZT1yO3ZhciBzPW51bGw9PXI/XCJcIjpTdHJpbmcocik7aS52YWx1ZT09PXN8fGkuY29tcG9zaW5nfHwoaS52YWx1ZT1zKX1lbHNlIGlbbl09cn19ZnVuY3Rpb24gQXQoZSl7dmFyIHQ9T3QoZS5zdHlsZSk7cmV0dXJuIGUuc3RhdGljU3R5bGU/bChlLnN0YXRpY1N0eWxlLHQpOnR9ZnVuY3Rpb24gT3QoZSl7cmV0dXJuIEFycmF5LmlzQXJyYXkoZSk/ZChlKTpcInN0cmluZ1wiPT10eXBlb2YgZT9obyhlKTplfWZ1bmN0aW9uIFN0KGUsdCl7dmFyIG4scj17fTtpZih0KWZvcih2YXIgaT1lO2kuY2hpbGQ7KWk9aS5jaGlsZC5fdm5vZGUsaS5kYXRhJiYobj1BdChpLmRhdGEpKSYmbChyLG4pOyhuPUF0KGUuZGF0YSkpJiZsKHIsbik7Zm9yKHZhciBvPWU7bz1vLnBhcmVudDspby5kYXRhJiYobj1BdChvLmRhdGEpKSYmbChyLG4pO3JldHVybiByfWZ1bmN0aW9uIFR0KGUsdCl7dmFyIG49dC5kYXRhLHI9ZS5kYXRhO2lmKG4uc3RhdGljU3R5bGV8fG4uc3R5bGV8fHIuc3RhdGljU3R5bGV8fHIuc3R5bGUpe3ZhciBpLG8sYT10LmVsbSxzPWUuZGF0YS5zdGF0aWNTdHlsZSxjPWUuZGF0YS5zdHlsZXx8e30sdT1zfHxjLGY9T3QodC5kYXRhLnN0eWxlKXx8e307dC5kYXRhLnN0eWxlPWYuX19vYl9fP2woe30sZik6Zjt2YXIgZD1TdCh0LCEwKTtmb3IobyBpbiB1KW51bGw9PWRbb10mJmdvKGEsbyxcIlwiKTtmb3IobyBpbiBkKWk9ZFtvXSxpIT09dVtvXSYmZ28oYSxvLG51bGw9PWk/XCJcIjppKX19ZnVuY3Rpb24ganQoZSx0KXtpZih0JiZ0LnRyaW0oKSlpZihlLmNsYXNzTGlzdCl0LmluZGV4T2YoXCIgXCIpPi0xP3Quc3BsaXQoL1xccysvKS5mb3JFYWNoKGZ1bmN0aW9uKHQpe3JldHVybiBlLmNsYXNzTGlzdC5hZGQodCl9KTplLmNsYXNzTGlzdC5hZGQodCk7ZWxzZXt2YXIgbj1cIiBcIitlLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpK1wiIFwiO24uaW5kZXhPZihcIiBcIit0K1wiIFwiKTwwJiZlLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsKG4rdCkudHJpbSgpKX19ZnVuY3Rpb24gRXQoZSx0KXtpZih0JiZ0LnRyaW0oKSlpZihlLmNsYXNzTGlzdCl0LmluZGV4T2YoXCIgXCIpPi0xP3Quc3BsaXQoL1xccysvKS5mb3JFYWNoKGZ1bmN0aW9uKHQpe3JldHVybiBlLmNsYXNzTGlzdC5yZW1vdmUodCl9KTplLmNsYXNzTGlzdC5yZW1vdmUodCk7ZWxzZXtmb3IodmFyIG49XCIgXCIrZS5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKStcIiBcIixyPVwiIFwiK3QrXCIgXCI7bi5pbmRleE9mKHIpPj0wOyluPW4ucmVwbGFjZShyLFwiIFwiKTtlLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsbi50cmltKCkpfX1mdW5jdGlvbiBOdChlKXtTbyhmdW5jdGlvbigpe1NvKGUpfSl9ZnVuY3Rpb24gTHQoZSx0KXsoZS5fdHJhbnNpdGlvbkNsYXNzZXN8fChlLl90cmFuc2l0aW9uQ2xhc3Nlcz1bXSkpLnB1c2godCksanQoZSx0KX1mdW5jdGlvbiBEdChlLHQpe2UuX3RyYW5zaXRpb25DbGFzc2VzJiZyKGUuX3RyYW5zaXRpb25DbGFzc2VzLHQpLEV0KGUsdCl9ZnVuY3Rpb24gTXQoZSx0LG4pe3ZhciByPVB0KGUsdCksaT1yLnR5cGUsbz1yLnRpbWVvdXQsYT1yLnByb3BDb3VudDtpZighaSlyZXR1cm4gbigpO3ZhciBzPWk9PT13bz9rbzpPbyxjPTAsbD1mdW5jdGlvbigpe2UucmVtb3ZlRXZlbnRMaXN0ZW5lcihzLHUpLG4oKX0sdT1mdW5jdGlvbih0KXt0LnRhcmdldD09PWUmJisrYz49YSYmbCgpfTtzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7YzxhJiZsKCl9LG8rMSksZS5hZGRFdmVudExpc3RlbmVyKHMsdSl9ZnVuY3Rpb24gUHQoZSx0KXt2YXIgbixyPXdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGUpLGk9cltDbytcIkRlbGF5XCJdLnNwbGl0KFwiLCBcIiksbz1yW0NvK1wiRHVyYXRpb25cIl0uc3BsaXQoXCIsIFwiKSxhPVJ0KGksbykscz1yW0FvK1wiRGVsYXlcIl0uc3BsaXQoXCIsIFwiKSxjPXJbQW8rXCJEdXJhdGlvblwiXS5zcGxpdChcIiwgXCIpLGw9UnQocyxjKSx1PTAsZj0wO3Q9PT13bz9hPjAmJihuPXdvLHU9YSxmPW8ubGVuZ3RoKTp0PT09eG8/bD4wJiYobj14byx1PWwsZj1jLmxlbmd0aCk6KHU9TWF0aC5tYXgoYSxsKSxuPXU+MD9hPmw/d286eG86bnVsbCxmPW4/bj09PXdvP28ubGVuZ3RoOmMubGVuZ3RoOjApO3ZhciBkPW49PT13byYmVG8udGVzdChyW0NvK1wiUHJvcGVydHlcIl0pO3JldHVybnt0eXBlOm4sdGltZW91dDp1LHByb3BDb3VudDpmLGhhc1RyYW5zZm9ybTpkfX1mdW5jdGlvbiBSdChlLHQpe2Zvcig7ZS5sZW5ndGg8dC5sZW5ndGg7KWU9ZS5jb25jYXQoZSk7cmV0dXJuIE1hdGgubWF4LmFwcGx5KG51bGwsdC5tYXAoZnVuY3Rpb24odCxuKXtyZXR1cm4gSXQodCkrSXQoZVtuXSl9KSl9ZnVuY3Rpb24gSXQoZSl7cmV0dXJuIDFlMypOdW1iZXIoZS5zbGljZSgwLC0xKSl9ZnVuY3Rpb24gRnQoZSl7dmFyIHQ9ZS5lbG07dC5fbGVhdmVDYiYmKHQuX2xlYXZlQ2IuY2FuY2VsbGVkPSEwLHQuX2xlYXZlQ2IoKSk7dmFyIG49VXQoZS5kYXRhLnRyYW5zaXRpb24pO2lmKG4mJiF0Ll9lbnRlckNiJiYxPT09dC5ub2RlVHlwZSl7dmFyIHI9bi5jc3MsaT1uLnR5cGUsbz1uLmVudGVyQ2xhc3MsYT1uLmVudGVyQWN0aXZlQ2xhc3Mscz1uLmFwcGVhckNsYXNzLGM9bi5hcHBlYXJBY3RpdmVDbGFzcyxsPW4uYmVmb3JlRW50ZXIsdT1uLmVudGVyLGY9bi5hZnRlckVudGVyLGQ9bi5lbnRlckNhbmNlbGxlZCxwPW4uYmVmb3JlQXBwZWFyLHY9bi5hcHBlYXIsaD1uLmFmdGVyQXBwZWFyLG09bi5hcHBlYXJDYW5jZWxsZWQsZz1MaS4kdm5vZGUseT1nJiZnLnBhcmVudD9nLnBhcmVudC5jb250ZXh0OkxpLF89IXkuX2lzTW91bnRlZHx8IWUuaXNSb290SW5zZXJ0O2lmKCFffHx2fHxcIlwiPT09dil7dmFyIGI9Xz9zOm8sJD1fP2M6YSx3PV8/cHx8bDpsLHg9XyYmXCJmdW5jdGlvblwiPT10eXBlb2Ygdj92OnUsQz1fP2h8fGY6ZixrPV8/bXx8ZDpkLEE9ciE9PSExJiYhdGksTz14JiYoeC5fbGVuZ3RofHx4Lmxlbmd0aCk+MSxTPXQuX2VudGVyQ2I9SHQoZnVuY3Rpb24oKXtBJiZEdCh0LCQpLFMuY2FuY2VsbGVkPyhBJiZEdCh0LGIpLGsmJmsodCkpOkMmJkModCksdC5fZW50ZXJDYj1udWxsfSk7ZS5kYXRhLnNob3d8fGllKGUuZGF0YS5ob29rfHwoZS5kYXRhLmhvb2s9e30pLFwiaW5zZXJ0XCIsZnVuY3Rpb24oKXt2YXIgbj10LnBhcmVudE5vZGUscj1uJiZuLl9wZW5kaW5nJiZuLl9wZW5kaW5nW2Uua2V5XTtyJiZyLnRhZz09PWUudGFnJiZyLmVsbS5fbGVhdmVDYiYmci5lbG0uX2xlYXZlQ2IoKSx4JiZ4KHQsUyl9LFwidHJhbnNpdGlvbi1pbnNlcnRcIiksdyYmdyh0KSxBJiYoTHQodCxiKSxMdCh0LCQpLE50KGZ1bmN0aW9uKCl7RHQodCxiKSxTLmNhbmNlbGxlZHx8T3x8TXQodCxpLFMpfSkpLGUuZGF0YS5zaG93JiZ4JiZ4KHQsUyksQXx8T3x8UygpfX19ZnVuY3Rpb24gQnQoZSx0KXtmdW5jdGlvbiBuKCl7bS5jYW5jZWxsZWR8fChlLmRhdGEuc2hvd3x8KChyLnBhcmVudE5vZGUuX3BlbmRpbmd8fChyLnBhcmVudE5vZGUuX3BlbmRpbmc9e30pKVtlLmtleV09ZSksbCYmbChyKSx2JiYoTHQocixzKSxMdChyLGMpLE50KGZ1bmN0aW9uKCl7RHQocixzKSxtLmNhbmNlbGxlZHx8aHx8TXQocixhLG0pfSkpLHUmJnUocixtKSx2fHxofHxtKCkpfXZhciByPWUuZWxtO3IuX2VudGVyQ2ImJihyLl9lbnRlckNiLmNhbmNlbGxlZD0hMCxyLl9lbnRlckNiKCkpO3ZhciBpPVV0KGUuZGF0YS50cmFuc2l0aW9uKTtpZighaSlyZXR1cm4gdCgpO2lmKCFyLl9sZWF2ZUNiJiYxPT09ci5ub2RlVHlwZSl7dmFyIG89aS5jc3MsYT1pLnR5cGUscz1pLmxlYXZlQ2xhc3MsYz1pLmxlYXZlQWN0aXZlQ2xhc3MsbD1pLmJlZm9yZUxlYXZlLHU9aS5sZWF2ZSxmPWkuYWZ0ZXJMZWF2ZSxkPWkubGVhdmVDYW5jZWxsZWQscD1pLmRlbGF5TGVhdmUsdj1vIT09ITEmJiF0aSxoPXUmJih1Ll9sZW5ndGh8fHUubGVuZ3RoKT4xLG09ci5fbGVhdmVDYj1IdChmdW5jdGlvbigpe3IucGFyZW50Tm9kZSYmci5wYXJlbnROb2RlLl9wZW5kaW5nJiYoci5wYXJlbnROb2RlLl9wZW5kaW5nW2Uua2V5XT1udWxsKSx2JiZEdChyLGMpLG0uY2FuY2VsbGVkPyh2JiZEdChyLHMpLGQmJmQocikpOih0KCksZiYmZihyKSksci5fbGVhdmVDYj1udWxsfSk7cD9wKG4pOm4oKX19ZnVuY3Rpb24gVXQoZSl7aWYoZSl7aWYoXCJvYmplY3RcIj09dHlwZW9mIGUpe3ZhciB0PXt9O3JldHVybiBlLmNzcyE9PSExJiZsKHQsam8oZS5uYW1lfHxcInZcIikpLGwodCxlKSx0fXJldHVyblwic3RyaW5nXCI9PXR5cGVvZiBlP2pvKGUpOnZvaWQgMH19ZnVuY3Rpb24gSHQoZSl7dmFyIHQ9ITE7cmV0dXJuIGZ1bmN0aW9uKCl7XG50fHwodD0hMCxlKCkpfX1mdW5jdGlvbiBWdChlLHQsbil7dmFyIHI9dC52YWx1ZSxpPWUubXVsdGlwbGU7aWYoIWl8fEFycmF5LmlzQXJyYXkocikpe2Zvcih2YXIgbyxhLHM9MCxjPWUub3B0aW9ucy5sZW5ndGg7czxjO3MrKylpZihhPWUub3B0aW9uc1tzXSxpKW89bShyLEp0KGEpKT4tMSxhLnNlbGVjdGVkIT09byYmKGEuc2VsZWN0ZWQ9byk7ZWxzZSBpZihoKEp0KGEpLHIpKXJldHVybiB2b2lkKGUuc2VsZWN0ZWRJbmRleCE9PXMmJihlLnNlbGVjdGVkSW5kZXg9cykpO2l8fChlLnNlbGVjdGVkSW5kZXg9LTEpfX1mdW5jdGlvbiB6dChlLHQpe2Zvcih2YXIgbj0wLHI9dC5sZW5ndGg7bjxyO24rKylpZihoKEp0KHRbbl0pLGUpKXJldHVybiExO3JldHVybiEwfWZ1bmN0aW9uIEp0KGUpe3JldHVyblwiX3ZhbHVlXCJpbiBlP2UuX3ZhbHVlOmUudmFsdWV9ZnVuY3Rpb24gS3QoZSl7ZS50YXJnZXQuY29tcG9zaW5nPSEwfWZ1bmN0aW9uIHF0KGUpe2UudGFyZ2V0LmNvbXBvc2luZz0hMSxXdChlLnRhcmdldCxcImlucHV0XCIpfWZ1bmN0aW9uIFd0KGUsdCl7dmFyIG49ZG9jdW1lbnQuY3JlYXRlRXZlbnQoXCJIVE1MRXZlbnRzXCIpO24uaW5pdEV2ZW50KHQsITAsITApLGUuZGlzcGF0Y2hFdmVudChuKX1mdW5jdGlvbiBadChlKXtyZXR1cm4hZS5jaGlsZHx8ZS5kYXRhJiZlLmRhdGEudHJhbnNpdGlvbj9lOlp0KGUuY2hpbGQuX3Zub2RlKX1mdW5jdGlvbiBHdChlKXt2YXIgdD1lJiZlLmNvbXBvbmVudE9wdGlvbnM7cmV0dXJuIHQmJnQuQ3Rvci5vcHRpb25zLmFic3RyYWN0P0d0KGZlKHQuY2hpbGRyZW4pKTplfWZ1bmN0aW9uIFl0KGUpe3ZhciB0PXt9LG49ZS4kb3B0aW9ucztmb3IodmFyIHIgaW4gbi5wcm9wc0RhdGEpdFtyXT1lW3JdO3ZhciBpPW4uX3BhcmVudExpc3RlbmVycztmb3IodmFyIG8gaW4gaSl0W1ZyKG8pXT1pW29dLmZuO3JldHVybiB0fWZ1bmN0aW9uIFF0KGUsdCl7cmV0dXJuL1xcZC1rZWVwLWFsaXZlJC8udGVzdCh0LnRhZyk/ZShcImtlZXAtYWxpdmVcIik6bnVsbH1mdW5jdGlvbiBYdChlKXtmb3IoO2U9ZS5wYXJlbnQ7KWlmKGUuZGF0YS50cmFuc2l0aW9uKXJldHVybiEwfWZ1bmN0aW9uIGVuKGUpe2UuZWxtLl9tb3ZlQ2ImJmUuZWxtLl9tb3ZlQ2IoKSxlLmVsbS5fZW50ZXJDYiYmZS5lbG0uX2VudGVyQ2IoKX1mdW5jdGlvbiB0bihlKXtlLmRhdGEubmV3UG9zPWUuZWxtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpfWZ1bmN0aW9uIG5uKGUpe3ZhciB0PWUuZGF0YS5wb3Msbj1lLmRhdGEubmV3UG9zLHI9dC5sZWZ0LW4ubGVmdCxpPXQudG9wLW4udG9wO2lmKHJ8fGkpe2UuZGF0YS5tb3ZlZD0hMDt2YXIgbz1lLmVsbS5zdHlsZTtvLnRyYW5zZm9ybT1vLldlYmtpdFRyYW5zZm9ybT1cInRyYW5zbGF0ZShcIityK1wicHgsXCIraStcInB4KVwiLG8udHJhbnNpdGlvbkR1cmF0aW9uPVwiMHNcIn19ZnVuY3Rpb24gcm4oZSx0KXt2YXIgbj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO3JldHVybiBuLmlubmVySFRNTD0nPGRpdiBhPVwiJytlKydcIj4nLG4uaW5uZXJIVE1MLmluZGV4T2YodCk+MH1mdW5jdGlvbiBvbihlKXtyZXR1cm4gVm89Vm98fGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksVm8uaW5uZXJIVE1MPWUsVm8udGV4dENvbnRlbnR9ZnVuY3Rpb24gYW4oZSx0KXtyZXR1cm4gdCYmKGU9ZS5yZXBsYWNlKERhLFwiXFxuXCIpKSxlLnJlcGxhY2UoTmEsXCI8XCIpLnJlcGxhY2UoTGEsXCI+XCIpLnJlcGxhY2UoTWEsXCImXCIpLnJlcGxhY2UoUGEsJ1wiJyl9ZnVuY3Rpb24gc24oZSx0KXtmdW5jdGlvbiBuKHQpe2YrPXQsZT1lLnN1YnN0cmluZyh0KX1mdW5jdGlvbiByKCl7dmFyIHQ9ZS5tYXRjaChZbyk7aWYodCl7dmFyIHI9e3RhZ05hbWU6dFsxXSxhdHRyczpbXSxzdGFydDpmfTtuKHRbMF0ubGVuZ3RoKTtmb3IodmFyIGksbzshKGk9ZS5tYXRjaChRbykpJiYobz1lLm1hdGNoKFdvKSk7KW4ob1swXS5sZW5ndGgpLHIuYXR0cnMucHVzaChvKTtpZihpKXJldHVybiByLnVuYXJ5U2xhc2g9aVsxXSxuKGlbMF0ubGVuZ3RoKSxyLmVuZD1mLHJ9fWZ1bmN0aW9uIGkoZSl7dmFyIG49ZS50YWdOYW1lLHI9ZS51bmFyeVNsYXNoO2wmJihcInBcIj09PXMmJlFpKG4pJiZvKFwiXCIscyksWWkobikmJnM9PT1uJiZvKFwiXCIsbikpO2Zvcih2YXIgaT11KG4pfHxcImh0bWxcIj09PW4mJlwiaGVhZFwiPT09c3x8ISFyLGE9ZS5hdHRycy5sZW5ndGgsZj1uZXcgQXJyYXkoYSksZD0wO2Q8YTtkKyspe3ZhciBwPWUuYXR0cnNbZF07cmEmJnBbMF0uaW5kZXhPZignXCJcIicpPT09LTEmJihcIlwiPT09cFszXSYmZGVsZXRlIHBbM10sXCJcIj09PXBbNF0mJmRlbGV0ZSBwWzRdLFwiXCI9PT1wWzVdJiZkZWxldGUgcFs1XSk7dmFyIHY9cFszXXx8cFs0XXx8cFs1XXx8XCJcIjtmW2RdPXtuYW1lOnBbMV0sdmFsdWU6YW4odix0LnNob3VsZERlY29kZU5ld2xpbmVzKX19aXx8KGMucHVzaCh7dGFnOm4sYXR0cnM6Zn0pLHM9bixyPVwiXCIpLHQuc3RhcnQmJnQuc3RhcnQobixmLGksZS5zdGFydCxlLmVuZCl9ZnVuY3Rpb24gbyhlLG4scixpKXt2YXIgbztpZihudWxsPT1yJiYocj1mKSxudWxsPT1pJiYoaT1mKSxuKXt2YXIgYT1uLnRvTG93ZXJDYXNlKCk7Zm9yKG89Yy5sZW5ndGgtMTtvPj0wJiZjW29dLnRhZy50b0xvd2VyQ2FzZSgpIT09YTtvLS0pO31lbHNlIG89MDtpZihvPj0wKXtmb3IodmFyIGw9Yy5sZW5ndGgtMTtsPj1vO2wtLSl0LmVuZCYmdC5lbmQoY1tsXS50YWcscixpKTtjLmxlbmd0aD1vLHM9byYmY1tvLTFdLnRhZ31lbHNlXCJiclwiPT09bi50b0xvd2VyQ2FzZSgpP3Quc3RhcnQmJnQuc3RhcnQobixbXSwhMCxyLGkpOlwicFwiPT09bi50b0xvd2VyQ2FzZSgpJiYodC5zdGFydCYmdC5zdGFydChuLFtdLCExLHIsaSksdC5lbmQmJnQuZW5kKG4scixpKSl9Zm9yKHZhciBhLHMsYz1bXSxsPXQuZXhwZWN0SFRNTCx1PXQuaXNVbmFyeVRhZ3x8WnIsZj0wO2U7KXtpZihhPWUscyYmamEocyx0LnNmYyxjKSl7dmFyIGQ9cy50b0xvd2VyQ2FzZSgpLHA9RWFbZF18fChFYVtkXT1uZXcgUmVnRXhwKFwiKFtcXFxcc1xcXFxTXSo/KSg8L1wiK2QrXCJbXj5dKj4pXCIsXCJpXCIpKSx2PTAsaD1lLnJlcGxhY2UocCxmdW5jdGlvbihlLG4scil7cmV0dXJuIHY9ci5sZW5ndGgsXCJzY3JpcHRcIiE9PWQmJlwic3R5bGVcIiE9PWQmJlwibm9zY3JpcHRcIiE9PWQmJihuPW4ucmVwbGFjZSgvPCEtLShbXFxzXFxTXSo/KS0tPi9nLFwiJDFcIikucmVwbGFjZSgvPCFcXFtDREFUQVxcWyhbXFxzXFxTXSo/KV1dPi9nLFwiJDFcIikpLHQuY2hhcnMmJnQuY2hhcnMobiksXCJcIn0pO2YrPWUubGVuZ3RoLWgubGVuZ3RoLGU9aCxvKFwiPC9cIitkK1wiPlwiLGQsZi12LGYpfWVsc2V7dmFyIG09ZS5pbmRleE9mKFwiPFwiKTtpZigwPT09bSl7aWYodGEudGVzdChlKSl7dmFyIGc9ZS5pbmRleE9mKFwiLS0+XCIpO2lmKGc+PTApe24oZyszKTtjb250aW51ZX19aWYobmEudGVzdChlKSl7dmFyIHk9ZS5pbmRleE9mKFwiXT5cIik7aWYoeT49MCl7bih5KzIpO2NvbnRpbnVlfX12YXIgXz1lLm1hdGNoKGVhKTtpZihfKXtuKF9bMF0ubGVuZ3RoKTtjb250aW51ZX12YXIgYj1lLm1hdGNoKFhvKTtpZihiKXt2YXIgJD1mO24oYlswXS5sZW5ndGgpLG8oYlswXSxiWzFdLCQsZik7Y29udGludWV9dmFyIHc9cigpO2lmKHcpe2kodyk7Y29udGludWV9fXZhciB4PXZvaWQgMCxDPXZvaWQgMCxrPXZvaWQgMDtpZihtPjApe2ZvcihDPWUuc2xpY2UobSk7IShYby50ZXN0KEMpfHxZby50ZXN0KEMpfHx0YS50ZXN0KEMpfHxuYS50ZXN0KEMpfHwoaz1DLmluZGV4T2YoXCI8XCIsMSksazwwKSk7KW0rPWssQz1lLnNsaWNlKG0pO3g9ZS5zdWJzdHJpbmcoMCxtKSxuKG0pfW08MCYmKHg9ZSxlPVwiXCIpLHQuY2hhcnMmJngmJnQuY2hhcnMoeCl9aWYoZT09PWEmJnQuY2hhcnMpe3QuY2hhcnMoZSk7YnJlYWt9fW8oKX1mdW5jdGlvbiBjbihlKXtmdW5jdGlvbiB0KCl7KGF8fChhPVtdKSkucHVzaChlLnNsaWNlKHYsaSkudHJpbSgpKSx2PWkrMX12YXIgbixyLGksbyxhLHM9ITEsYz0hMSxsPSExLHU9ITEsZj0wLGQ9MCxwPTAsdj0wO2ZvcihpPTA7aTxlLmxlbmd0aDtpKyspaWYocj1uLG49ZS5jaGFyQ29kZUF0KGkpLHMpMzk9PT1uJiY5MiE9PXImJihzPSExKTtlbHNlIGlmKGMpMzQ9PT1uJiY5MiE9PXImJihjPSExKTtlbHNlIGlmKGwpOTY9PT1uJiY5MiE9PXImJihsPSExKTtlbHNlIGlmKHUpNDc9PT1uJiY5MiE9PXImJih1PSExKTtlbHNlIGlmKDEyNCE9PW58fDEyND09PWUuY2hhckNvZGVBdChpKzEpfHwxMjQ9PT1lLmNoYXJDb2RlQXQoaS0xKXx8Znx8ZHx8cClzd2l0Y2gobil7Y2FzZSAzNDpjPSEwO2JyZWFrO2Nhc2UgMzk6cz0hMDticmVhaztjYXNlIDk2Omw9ITA7YnJlYWs7Y2FzZSA0Nzp1PSEwO2JyZWFrO2Nhc2UgNDA6cCsrO2JyZWFrO2Nhc2UgNDE6cC0tO2JyZWFrO2Nhc2UgOTE6ZCsrO2JyZWFrO2Nhc2UgOTM6ZC0tO2JyZWFrO2Nhc2UgMTIzOmYrKzticmVhaztjYXNlIDEyNTpmLS19ZWxzZSB2b2lkIDA9PT1vPyh2PWkrMSxvPWUuc2xpY2UoMCxpKS50cmltKCkpOnQoKTtpZih2b2lkIDA9PT1vP289ZS5zbGljZSgwLGkpLnRyaW0oKTowIT09diYmdCgpLGEpZm9yKGk9MDtpPGEubGVuZ3RoO2krKylvPWxuKG8sYVtpXSk7cmV0dXJuIG99ZnVuY3Rpb24gbG4oZSx0KXt2YXIgbj10LmluZGV4T2YoXCIoXCIpO2lmKG48MClyZXR1cm4nX2YoXCInK3QrJ1wiKSgnK2UrXCIpXCI7dmFyIHI9dC5zbGljZSgwLG4pLGk9dC5zbGljZShuKzEpO3JldHVybidfZihcIicrcisnXCIpKCcrZStcIixcIitpfWZ1bmN0aW9uIHVuKGUsdCl7dmFyIG49dD9GYSh0KTpSYTtpZihuLnRlc3QoZSkpe2Zvcih2YXIgcixpLG89W10sYT1uLmxhc3RJbmRleD0wO3I9bi5leGVjKGUpOyl7aT1yLmluZGV4LGk+YSYmby5wdXNoKEpTT04uc3RyaW5naWZ5KGUuc2xpY2UoYSxpKSkpO3ZhciBzPWNuKHJbMV0udHJpbSgpKTtvLnB1c2goXCJfcyhcIitzK1wiKVwiKSxhPWkrclswXS5sZW5ndGh9cmV0dXJuIGE8ZS5sZW5ndGgmJm8ucHVzaChKU09OLnN0cmluZ2lmeShlLnNsaWNlKGEpKSksby5qb2luKFwiK1wiKX19ZnVuY3Rpb24gZm4oZSl7Y29uc29sZS5lcnJvcihcIltWdWUgcGFyc2VyXTogXCIrZSl9ZnVuY3Rpb24gZG4oZSx0KXtyZXR1cm4gZT9lLm1hcChmdW5jdGlvbihlKXtyZXR1cm4gZVt0XX0pLmZpbHRlcihmdW5jdGlvbihlKXtyZXR1cm4gZX0pOltdfWZ1bmN0aW9uIHBuKGUsdCxuKXsoZS5wcm9wc3x8KGUucHJvcHM9W10pKS5wdXNoKHtuYW1lOnQsdmFsdWU6bn0pfWZ1bmN0aW9uIHZuKGUsdCxuKXsoZS5hdHRyc3x8KGUuYXR0cnM9W10pKS5wdXNoKHtuYW1lOnQsdmFsdWU6bn0pfWZ1bmN0aW9uIGhuKGUsdCxuLHIsaSxvKXsoZS5kaXJlY3RpdmVzfHwoZS5kaXJlY3RpdmVzPVtdKSkucHVzaCh7bmFtZTp0LHJhd05hbWU6bix2YWx1ZTpyLGFyZzppLG1vZGlmaWVyczpvfSl9ZnVuY3Rpb24gbW4oZSx0LG4scixpKXtyJiZyLmNhcHR1cmUmJihkZWxldGUgci5jYXB0dXJlLHQ9XCIhXCIrdCk7dmFyIG87ciYmci5uYXRpdmU/KGRlbGV0ZSByLm5hdGl2ZSxvPWUubmF0aXZlRXZlbnRzfHwoZS5uYXRpdmVFdmVudHM9e30pKTpvPWUuZXZlbnRzfHwoZS5ldmVudHM9e30pO3ZhciBhPXt2YWx1ZTpuLG1vZGlmaWVyczpyfSxzPW9bdF07QXJyYXkuaXNBcnJheShzKT9pP3MudW5zaGlmdChhKTpzLnB1c2goYSk6cz9vW3RdPWk/W2Esc106W3MsYV06b1t0XT1hfWZ1bmN0aW9uIGduKGUsdCxuKXt2YXIgcj15bihlLFwiOlwiK3QpfHx5bihlLFwidi1iaW5kOlwiK3QpO2lmKG51bGwhPXIpcmV0dXJuIGNuKHIpO2lmKG4hPT0hMSl7dmFyIGk9eW4oZSx0KTtpZihudWxsIT1pKXJldHVybiBKU09OLnN0cmluZ2lmeShpKX19ZnVuY3Rpb24geW4oZSx0KXt2YXIgbjtpZihudWxsIT0obj1lLmF0dHJzTWFwW3RdKSlmb3IodmFyIHI9ZS5hdHRyc0xpc3QsaT0wLG89ci5sZW5ndGg7aTxvO2krKylpZihyW2ldLm5hbWU9PT10KXtyLnNwbGljZShpLDEpO2JyZWFrfXJldHVybiBufWZ1bmN0aW9uIF9uKGUpe2lmKG9hPWUsaWE9b2EubGVuZ3RoLHNhPWNhPWxhPTAsZS5pbmRleE9mKFwiW1wiKTwwfHxlLmxhc3RJbmRleE9mKFwiXVwiKTxpYS0xKXJldHVybntleHA6ZSxpZHg6bnVsbH07Zm9yKDshJG4oKTspYWE9Ym4oKSx3bihhYSk/Q24oYWEpOjkxPT09YWEmJnhuKGFhKTtyZXR1cm57ZXhwOmUuc3Vic3RyaW5nKDAsY2EpLGlkeDplLnN1YnN0cmluZyhjYSsxLGxhKX19ZnVuY3Rpb24gYm4oKXtyZXR1cm4gb2EuY2hhckNvZGVBdCgrK3NhKX1mdW5jdGlvbiAkbigpe3JldHVybiBzYT49aWF9ZnVuY3Rpb24gd24oZSl7cmV0dXJuIDM0PT09ZXx8Mzk9PT1lfWZ1bmN0aW9uIHhuKGUpe3ZhciB0PTE7Zm9yKGNhPXNhOyEkbigpOylpZihlPWJuKCksd24oZSkpQ24oZSk7ZWxzZSBpZig5MT09PWUmJnQrKyw5Mz09PWUmJnQtLSwwPT09dCl7bGE9c2E7YnJlYWt9fWZ1bmN0aW9uIENuKGUpe2Zvcih2YXIgdD1lOyEkbigpJiYoZT1ibigpLGUhPT10KTspO31mdW5jdGlvbiBrbihlLHQpe3VhPXQud2Fybnx8Zm4sZmE9dC5nZXRUYWdOYW1lc3BhY2V8fFpyLGRhPXQubXVzdFVzZVByb3B8fFpyLHBhPXQuaXNQcmVUYWd8fFpyLHZhPWRuKHQubW9kdWxlcyxcInByZVRyYW5zZm9ybU5vZGVcIiksaGE9ZG4odC5tb2R1bGVzLFwidHJhbnNmb3JtTm9kZVwiKSxtYT1kbih0Lm1vZHVsZXMsXCJwb3N0VHJhbnNmb3JtTm9kZVwiKSxnYT10LmRlbGltaXRlcnM7dmFyIG4scixpPVtdLG89dC5wcmVzZXJ2ZVdoaXRlc3BhY2UhPT0hMSxhPSExLHM9ITE7cmV0dXJuIHNuKGUse2V4cGVjdEhUTUw6dC5leHBlY3RIVE1MLGlzVW5hcnlUYWc6dC5pc1VuYXJ5VGFnLHNob3VsZERlY29kZU5ld2xpbmVzOnQuc2hvdWxkRGVjb2RlTmV3bGluZXMsc3RhcnQ6ZnVuY3Rpb24oZSxvLGMpe2Z1bmN0aW9uIGwoZSl7fXZhciB1PXImJnIubnN8fGZhKGUpO2VpJiZcInN2Z1wiPT09dSYmKG89Vm4obykpO3ZhciBmPXt0eXBlOjEsdGFnOmUsYXR0cnNMaXN0Om8sYXR0cnNNYXA6Qm4obykscGFyZW50OnIsY2hpbGRyZW46W119O3UmJihmLm5zPXUpLEhuKGYpJiYhb2koKSYmKGYuZm9yYmlkZGVuPSEwKTtmb3IodmFyIGQ9MDtkPHZhLmxlbmd0aDtkKyspdmFbZF0oZix0KTtpZihhfHwoQW4oZiksZi5wcmUmJihhPSEwKSkscGEoZi50YWcpJiYocz0hMCksYSlPbihmKTtlbHNle2puKGYpLEVuKGYpLERuKGYpLFNuKGYpLGYucGxhaW49IWYua2V5JiYhby5sZW5ndGgsVG4oZiksTW4oZiksUG4oZik7Zm9yKHZhciBwPTA7cDxoYS5sZW5ndGg7cCsrKWhhW3BdKGYsdCk7Um4oZil9aWYobj9pLmxlbmd0aHx8bi5pZiYmKGYuZWxzZWlmfHxmLmVsc2UpJiYobChmKSxMbihuLHtleHA6Zi5lbHNlaWYsYmxvY2s6Zn0pKToobj1mLGwobikpLHImJiFmLmZvcmJpZGRlbilpZihmLmVsc2VpZnx8Zi5lbHNlKU5uKGYscik7ZWxzZSBpZihmLnNsb3RTY29wZSl7ci5wbGFpbj0hMTt2YXIgdj1mLnNsb3RUYXJnZXR8fFwiZGVmYXVsdFwiOyhyLnNjb3BlZFNsb3RzfHwoci5zY29wZWRTbG90cz17fSkpW3ZdPWZ9ZWxzZSByLmNoaWxkcmVuLnB1c2goZiksZi5wYXJlbnQ9cjtjfHwocj1mLGkucHVzaChmKSk7Zm9yKHZhciBoPTA7aDxtYS5sZW5ndGg7aCsrKW1hW2hdKGYsdCl9LGVuZDpmdW5jdGlvbigpe3ZhciBlPWlbaS5sZW5ndGgtMV0sdD1lLmNoaWxkcmVuW2UuY2hpbGRyZW4ubGVuZ3RoLTFdO3QmJjM9PT10LnR5cGUmJlwiIFwiPT09dC50ZXh0JiZlLmNoaWxkcmVuLnBvcCgpLGkubGVuZ3RoLT0xLHI9aVtpLmxlbmd0aC0xXSxlLnByZSYmKGE9ITEpLHBhKGUudGFnKSYmKHM9ITEpfSxjaGFyczpmdW5jdGlvbihlKXtpZihyJiYoIWVpfHxcInRleHRhcmVhXCIhPT1yLnRhZ3x8ci5hdHRyc01hcC5wbGFjZWhvbGRlciE9PWUpJiYoZT1zfHxlLnRyaW0oKT9xYShlKTpvJiZyLmNoaWxkcmVuLmxlbmd0aD9cIiBcIjpcIlwiKSl7dmFyIHQ7IWEmJlwiIFwiIT09ZSYmKHQ9dW4oZSxnYSkpP3IuY2hpbGRyZW4ucHVzaCh7dHlwZToyLGV4cHJlc3Npb246dCx0ZXh0OmV9KTpyLmNoaWxkcmVuLnB1c2goe3R5cGU6Myx0ZXh0OmV9KX19fSksbn1mdW5jdGlvbiBBbihlKXtudWxsIT15bihlLFwidi1wcmVcIikmJihlLnByZT0hMCl9ZnVuY3Rpb24gT24oZSl7dmFyIHQ9ZS5hdHRyc0xpc3QubGVuZ3RoO2lmKHQpZm9yKHZhciBuPWUuYXR0cnM9bmV3IEFycmF5KHQpLHI9MDtyPHQ7cisrKW5bcl09e25hbWU6ZS5hdHRyc0xpc3Rbcl0ubmFtZSx2YWx1ZTpKU09OLnN0cmluZ2lmeShlLmF0dHJzTGlzdFtyXS52YWx1ZSl9O2Vsc2UgZS5wcmV8fChlLnBsYWluPSEwKX1mdW5jdGlvbiBTbihlKXt2YXIgdD1nbihlLFwia2V5XCIpO3QmJihlLmtleT10KX1mdW5jdGlvbiBUbihlKXt2YXIgdD1nbihlLFwicmVmXCIpO3QmJihlLnJlZj10LGUucmVmSW5Gb3I9SW4oZSkpfWZ1bmN0aW9uIGpuKGUpe3ZhciB0O2lmKHQ9eW4oZSxcInYtZm9yXCIpKXt2YXIgbj10Lm1hdGNoKFVhKTtpZighbilyZXR1cm47ZS5mb3I9blsyXS50cmltKCk7dmFyIHI9blsxXS50cmltKCksaT1yLm1hdGNoKEhhKTtpPyhlLmFsaWFzPWlbMV0udHJpbSgpLGUuaXRlcmF0b3IxPWlbMl0udHJpbSgpLGlbM10mJihlLml0ZXJhdG9yMj1pWzNdLnRyaW0oKSkpOmUuYWxpYXM9cn19ZnVuY3Rpb24gRW4oZSl7dmFyIHQ9eW4oZSxcInYtaWZcIik7aWYodCllLmlmPXQsTG4oZSx7ZXhwOnQsYmxvY2s6ZX0pO2Vsc2V7bnVsbCE9eW4oZSxcInYtZWxzZVwiKSYmKGUuZWxzZT0hMCk7dmFyIG49eW4oZSxcInYtZWxzZS1pZlwiKTtuJiYoZS5lbHNlaWY9bil9fWZ1bmN0aW9uIE5uKGUsdCl7dmFyIG49VW4odC5jaGlsZHJlbik7biYmbi5pZiYmTG4obix7ZXhwOmUuZWxzZWlmLGJsb2NrOmV9KX1mdW5jdGlvbiBMbihlLHQpe2UuY29uZGl0aW9uc3x8KGUuY29uZGl0aW9ucz1bXSksZS5jb25kaXRpb25zLnB1c2godCl9ZnVuY3Rpb24gRG4oZSl7dmFyIHQ9eW4oZSxcInYtb25jZVwiKTtudWxsIT10JiYoZS5vbmNlPSEwKX1mdW5jdGlvbiBNbihlKXtpZihcInNsb3RcIj09PWUudGFnKWUuc2xvdE5hbWU9Z24oZSxcIm5hbWVcIik7ZWxzZXt2YXIgdD1nbihlLFwic2xvdFwiKTt0JiYoZS5zbG90VGFyZ2V0PSdcIlwiJz09PXQ/J1wiZGVmYXVsdFwiJzp0KSxcInRlbXBsYXRlXCI9PT1lLnRhZyYmKGUuc2xvdFNjb3BlPXluKGUsXCJzY29wZVwiKSl9fWZ1bmN0aW9uIFBuKGUpe3ZhciB0Oyh0PWduKGUsXCJpc1wiKSkmJihlLmNvbXBvbmVudD10KSxudWxsIT15bihlLFwiaW5saW5lLXRlbXBsYXRlXCIpJiYoZS5pbmxpbmVUZW1wbGF0ZT0hMCl9ZnVuY3Rpb24gUm4oZSl7dmFyIHQsbixyLGksbyxhLHMsYyxsPWUuYXR0cnNMaXN0O2Zvcih0PTAsbj1sLmxlbmd0aDt0PG47dCsrKWlmKHI9aT1sW3RdLm5hbWUsbz1sW3RdLnZhbHVlLEJhLnRlc3QocikpaWYoZS5oYXNCaW5kaW5ncz0hMCxzPUZuKHIpLHMmJihyPXIucmVwbGFjZShLYSxcIlwiKSksVmEudGVzdChyKSlyPXIucmVwbGFjZShWYSxcIlwiKSxvPWNuKG8pLHMmJihzLnByb3AmJihjPSEwLHI9VnIociksXCJpbm5lckh0bWxcIj09PXImJihyPVwiaW5uZXJIVE1MXCIpKSxzLmNhbWVsJiYocj1WcihyKSkpLGN8fGRhKGUudGFnLHIpP3BuKGUscixvKTp2bihlLHIsbyk7ZWxzZSBpZih6YS50ZXN0KHIpKXI9ci5yZXBsYWNlKHphLFwiXCIpLG1uKGUscixvLHMpO2Vsc2V7cj1yLnJlcGxhY2UoQmEsXCJcIik7dmFyIHU9ci5tYXRjaChKYSk7dSYmKGE9dVsxXSkmJihyPXIuc2xpY2UoMCwtKGEubGVuZ3RoKzEpKSksaG4oZSxyLGksbyxhLHMpfWVsc2Ugdm4oZSxyLEpTT04uc3RyaW5naWZ5KG8pKX1mdW5jdGlvbiBJbihlKXtmb3IodmFyIHQ9ZTt0Oyl7aWYodm9pZCAwIT09dC5mb3IpcmV0dXJuITA7dD10LnBhcmVudH1yZXR1cm4hMX1mdW5jdGlvbiBGbihlKXt2YXIgdD1lLm1hdGNoKEthKTtpZih0KXt2YXIgbj17fTtyZXR1cm4gdC5mb3JFYWNoKGZ1bmN0aW9uKGUpe25bZS5zbGljZSgxKV09ITB9KSxufX1mdW5jdGlvbiBCbihlKXtmb3IodmFyIHQ9e30sbj0wLHI9ZS5sZW5ndGg7bjxyO24rKyl0W2Vbbl0ubmFtZV09ZVtuXS52YWx1ZTtyZXR1cm4gdH1mdW5jdGlvbiBVbihlKXtmb3IodmFyIHQ9ZS5sZW5ndGg7dC0tOylpZihlW3RdLnRhZylyZXR1cm4gZVt0XX1mdW5jdGlvbiBIbihlKXtyZXR1cm5cInN0eWxlXCI9PT1lLnRhZ3x8XCJzY3JpcHRcIj09PWUudGFnJiYoIWUuYXR0cnNNYXAudHlwZXx8XCJ0ZXh0L2phdmFzY3JpcHRcIj09PWUuYXR0cnNNYXAudHlwZSl9ZnVuY3Rpb24gVm4oZSl7Zm9yKHZhciB0PVtdLG49MDtuPGUubGVuZ3RoO24rKyl7dmFyIHI9ZVtuXTtXYS50ZXN0KHIubmFtZSl8fChyLm5hbWU9ci5uYW1lLnJlcGxhY2UoWmEsXCJcIiksdC5wdXNoKHIpKX1yZXR1cm4gdH1mdW5jdGlvbiB6bihlLHQpe2UmJih5YT1HYSh0LnN0YXRpY0tleXN8fFwiXCIpLF9hPXQuaXNSZXNlcnZlZFRhZ3x8ZnVuY3Rpb24oKXtyZXR1cm4hMX0sS24oZSkscW4oZSwhMSkpfWZ1bmN0aW9uIEpuKGUpe3JldHVybiBuKFwidHlwZSx0YWcsYXR0cnNMaXN0LGF0dHJzTWFwLHBsYWluLHBhcmVudCxjaGlsZHJlbixhdHRyc1wiKyhlP1wiLFwiK2U6XCJcIikpfWZ1bmN0aW9uIEtuKGUpe2lmKGUuc3RhdGljPVpuKGUpLDE9PT1lLnR5cGUpe2lmKCFfYShlLnRhZykmJlwic2xvdFwiIT09ZS50YWcmJm51bGw9PWUuYXR0cnNNYXBbXCJpbmxpbmUtdGVtcGxhdGVcIl0pcmV0dXJuO2Zvcih2YXIgdD0wLG49ZS5jaGlsZHJlbi5sZW5ndGg7dDxuO3QrKyl7dmFyIHI9ZS5jaGlsZHJlblt0XTtLbihyKSxyLnN0YXRpY3x8KGUuc3RhdGljPSExKX19fWZ1bmN0aW9uIHFuKGUsdCl7aWYoMT09PWUudHlwZSl7aWYoKGUuc3RhdGljfHxlLm9uY2UpJiYoZS5zdGF0aWNJbkZvcj10KSxlLnN0YXRpYyYmZS5jaGlsZHJlbi5sZW5ndGgmJigxIT09ZS5jaGlsZHJlbi5sZW5ndGh8fDMhPT1lLmNoaWxkcmVuWzBdLnR5cGUpKXJldHVybiB2b2lkKGUuc3RhdGljUm9vdD0hMCk7aWYoZS5zdGF0aWNSb290PSExLGUuY2hpbGRyZW4pZm9yKHZhciBuPTAscj1lLmNoaWxkcmVuLmxlbmd0aDtuPHI7bisrKXFuKGUuY2hpbGRyZW5bbl0sdHx8ISFlLmZvcik7ZS5jb25kaXRpb25zJiZXbihlLmNvbmRpdGlvbnMsdCl9fWZ1bmN0aW9uIFduKGUsdCl7Zm9yKHZhciBuPTEscj1lLmxlbmd0aDtuPHI7bisrKXFuKGVbbl0uYmxvY2ssdCl9ZnVuY3Rpb24gWm4oZSl7cmV0dXJuIDIhPT1lLnR5cGUmJigzPT09ZS50eXBlfHwhKCFlLnByZSYmKGUuaGFzQmluZGluZ3N8fGUuaWZ8fGUuZm9yfHxCcihlLnRhZyl8fCFfYShlLnRhZyl8fEduKGUpfHwhT2JqZWN0LmtleXMoZSkuZXZlcnkoeWEpKSkpfWZ1bmN0aW9uIEduKGUpe2Zvcig7ZS5wYXJlbnQ7KXtpZihlPWUucGFyZW50LFwidGVtcGxhdGVcIiE9PWUudGFnKXJldHVybiExO2lmKGUuZm9yKXJldHVybiEwfXJldHVybiExfWZ1bmN0aW9uIFluKGUsdCl7dmFyIG49dD9cIm5hdGl2ZU9uOntcIjpcIm9uOntcIjtmb3IodmFyIHIgaW4gZSluKz0nXCInK3IrJ1wiOicrUW4ocixlW3JdKStcIixcIjtyZXR1cm4gbi5zbGljZSgwLC0xKStcIn1cIn1mdW5jdGlvbiBRbihlLHQpe2lmKHQpe2lmKEFycmF5LmlzQXJyYXkodCkpcmV0dXJuXCJbXCIrdC5tYXAoZnVuY3Rpb24odCl7cmV0dXJuIFFuKGUsdCl9KS5qb2luKFwiLFwiKStcIl1cIjtpZih0Lm1vZGlmaWVycyl7dmFyIG49XCJcIixyPVtdLGk9dHMudGVzdChlKTtmb3IodmFyIG8gaW4gdC5tb2RpZmllcnMpZXNbb10/bis9ZXNbb106aSYmbnNbb10/bis9bnNbb106ci5wdXNoKG8pO3IubGVuZ3RoJiYobj1YbihyKStuKTt2YXIgYT1RYS50ZXN0KHQudmFsdWUpP3QudmFsdWUrXCIoJGV2ZW50KVwiOnQudmFsdWU7cmV0dXJuXCJmdW5jdGlvbigkZXZlbnQpe1wiK24rYStcIn1cIn1yZXR1cm4gWWEudGVzdCh0LnZhbHVlKXx8UWEudGVzdCh0LnZhbHVlKT90LnZhbHVlOlwiZnVuY3Rpb24oJGV2ZW50KXtcIit0LnZhbHVlK1wifVwifXJldHVyblwiZnVuY3Rpb24oKXt9XCJ9ZnVuY3Rpb24gWG4oZSl7dmFyIHQ9MT09PWUubGVuZ3RoP2VyKGVbMF0pOkFycmF5LnByb3RvdHlwZS5jb25jYXQuYXBwbHkoW10sZS5tYXAoZXIpKTtyZXR1cm4gQXJyYXkuaXNBcnJheSh0KT9cImlmKFwiK3QubWFwKGZ1bmN0aW9uKGUpe3JldHVyblwiJGV2ZW50LmtleUNvZGUhPT1cIitlfSkuam9pbihcIiYmXCIpK1wiKXJldHVybjtcIjpcImlmKCRldmVudC5rZXlDb2RlIT09XCIrdCtcIilyZXR1cm47XCJ9ZnVuY3Rpb24gZXIoZSl7cmV0dXJuIHBhcnNlSW50KGUsMTApfHxYYVtlXXx8XCJfayhcIitKU09OLnN0cmluZ2lmeShlKStcIilcIn1mdW5jdGlvbiB0cihlLHQpe2Uud3JhcERhdGE9ZnVuY3Rpb24obil7cmV0dXJuXCJfYihcIituK1wiLCdcIitlLnRhZytcIicsXCIrdC52YWx1ZSsodC5tb2RpZmllcnMmJnQubW9kaWZpZXJzLnByb3A/XCIsdHJ1ZVwiOlwiXCIpK1wiKVwifX1mdW5jdGlvbiBucihlLHQpe3ZhciBuPUNhLHI9Q2E9W10saT1rYTtrYT0wLEFhPXQsYmE9dC53YXJufHxmbiwkYT1kbih0Lm1vZHVsZXMsXCJ0cmFuc2Zvcm1Db2RlXCIpLHdhPWRuKHQubW9kdWxlcyxcImdlbkRhdGFcIikseGE9dC5kaXJlY3RpdmVzfHx7fTt2YXIgbz1lP3JyKGUpOidfaChcImRpdlwiKSc7cmV0dXJuIENhPW4sa2E9aSx7cmVuZGVyOlwid2l0aCh0aGlzKXtyZXR1cm4gXCIrbytcIn1cIixzdGF0aWNSZW5kZXJGbnM6cn19ZnVuY3Rpb24gcnIoZSl7aWYoZS5zdGF0aWNSb290JiYhZS5zdGF0aWNQcm9jZXNzZWQpcmV0dXJuIGlyKGUpO2lmKGUub25jZSYmIWUub25jZVByb2Nlc3NlZClyZXR1cm4gb3IoZSk7aWYoZS5mb3ImJiFlLmZvclByb2Nlc3NlZClyZXR1cm4gY3IoZSk7aWYoZS5pZiYmIWUuaWZQcm9jZXNzZWQpcmV0dXJuIGFyKGUpO2lmKFwidGVtcGxhdGVcIiE9PWUudGFnfHxlLnNsb3RUYXJnZXQpe2lmKFwic2xvdFwiPT09ZS50YWcpcmV0dXJuIGdyKGUpO3ZhciB0O2lmKGUuY29tcG9uZW50KXQ9eXIoZS5jb21wb25lbnQsZSk7ZWxzZXt2YXIgbj1lLnBsYWluP3ZvaWQgMDpscihlKSxyPWUuaW5saW5lVGVtcGxhdGU/bnVsbDp2cihlKTt0PVwiX2goJ1wiK2UudGFnK1wiJ1wiKyhuP1wiLFwiK246XCJcIikrKHI/XCIsXCIrcjpcIlwiKStcIilcIn1mb3IodmFyIGk9MDtpPCRhLmxlbmd0aDtpKyspdD0kYVtpXShlLHQpO3JldHVybiB0fXJldHVybiB2cihlKXx8XCJ2b2lkIDBcIn1mdW5jdGlvbiBpcihlKXtyZXR1cm4gZS5zdGF0aWNQcm9jZXNzZWQ9ITAsQ2EucHVzaChcIndpdGgodGhpcyl7cmV0dXJuIFwiK3JyKGUpK1wifVwiKSxcIl9tKFwiKyhDYS5sZW5ndGgtMSkrKGUuc3RhdGljSW5Gb3I/XCIsdHJ1ZVwiOlwiXCIpK1wiKVwifWZ1bmN0aW9uIG9yKGUpe2lmKGUub25jZVByb2Nlc3NlZD0hMCxlLmlmJiYhZS5pZlByb2Nlc3NlZClyZXR1cm4gYXIoZSk7aWYoZS5zdGF0aWNJbkZvcil7Zm9yKHZhciB0PVwiXCIsbj1lLnBhcmVudDtuOyl7aWYobi5mb3Ipe3Q9bi5rZXk7YnJlYWt9bj1uLnBhcmVudH1yZXR1cm4gdD9cIl9vKFwiK3JyKGUpK1wiLFwiK2thKysgKyh0P1wiLFwiK3Q6XCJcIikrXCIpXCI6cnIoZSl9cmV0dXJuIGlyKGUpfWZ1bmN0aW9uIGFyKGUpe3JldHVybiBlLmlmUHJvY2Vzc2VkPSEwLHNyKGUuY29uZGl0aW9ucyl9ZnVuY3Rpb24gc3IoZSl7ZnVuY3Rpb24gdChlKXtyZXR1cm4gZS5vbmNlP29yKGUpOnJyKGUpfWlmKCFlLmxlbmd0aClyZXR1cm5cIl9lKClcIjt2YXIgbj1lLnNoaWZ0KCk7cmV0dXJuIG4uZXhwP1wiKFwiK24uZXhwK1wiKT9cIit0KG4uYmxvY2spK1wiOlwiK3NyKGUpOlwiXCIrdChuLmJsb2NrKX1mdW5jdGlvbiBjcihlKXt2YXIgdD1lLmZvcixuPWUuYWxpYXMscj1lLml0ZXJhdG9yMT9cIixcIitlLml0ZXJhdG9yMTpcIlwiLGk9ZS5pdGVyYXRvcjI/XCIsXCIrZS5pdGVyYXRvcjI6XCJcIjtyZXR1cm4gZS5mb3JQcm9jZXNzZWQ9ITAsXCJfbCgoXCIrdCtcIiksZnVuY3Rpb24oXCIrbityK2krXCIpe3JldHVybiBcIitycihlKStcIn0pXCJ9ZnVuY3Rpb24gbHIoZSl7dmFyIHQ9XCJ7XCIsbj11cihlKTtuJiYodCs9bitcIixcIiksZS5rZXkmJih0Kz1cImtleTpcIitlLmtleStcIixcIiksZS5yZWYmJih0Kz1cInJlZjpcIitlLnJlZitcIixcIiksZS5yZWZJbkZvciYmKHQrPVwicmVmSW5Gb3I6dHJ1ZSxcIiksZS5jb21wb25lbnQmJih0Kz0ndGFnOlwiJytlLnRhZysnXCIsJyk7Zm9yKHZhciByPTA7cjx3YS5sZW5ndGg7cisrKXQrPXdhW3JdKGUpO2lmKGUuYXR0cnMmJih0Kz1cImF0dHJzOntcIitfcihlLmF0dHJzKStcIn0sXCIpLGUucHJvcHMmJih0Kz1cImRvbVByb3BzOntcIitfcihlLnByb3BzKStcIn0sXCIpLGUuZXZlbnRzJiYodCs9WW4oZS5ldmVudHMpK1wiLFwiKSxlLm5hdGl2ZUV2ZW50cyYmKHQrPVluKGUubmF0aXZlRXZlbnRzLCEwKStcIixcIiksZS5zbG90VGFyZ2V0JiYodCs9XCJzbG90OlwiK2Uuc2xvdFRhcmdldCtcIixcIiksZS5zY29wZWRTbG90cyYmKHQrPWRyKGUuc2NvcGVkU2xvdHMpK1wiLFwiKSxlLmlubGluZVRlbXBsYXRlKXt2YXIgaT1mcihlKTtpJiYodCs9aStcIixcIil9cmV0dXJuIHQ9dC5yZXBsYWNlKC8sJC8sXCJcIikrXCJ9XCIsZS53cmFwRGF0YSYmKHQ9ZS53cmFwRGF0YSh0KSksdH1mdW5jdGlvbiB1cihlKXt2YXIgdD1lLmRpcmVjdGl2ZXM7aWYodCl7dmFyIG4scixpLG8sYT1cImRpcmVjdGl2ZXM6W1wiLHM9ITE7Zm9yKG49MCxyPXQubGVuZ3RoO248cjtuKyspe2k9dFtuXSxvPSEwO3ZhciBjPXhhW2kubmFtZV18fHJzW2kubmFtZV07YyYmKG89ISFjKGUsaSxiYSkpLG8mJihzPSEwLGErPSd7bmFtZTpcIicraS5uYW1lKydcIixyYXdOYW1lOlwiJytpLnJhd05hbWUrJ1wiJysoaS52YWx1ZT9cIix2YWx1ZTooXCIraS52YWx1ZStcIiksZXhwcmVzc2lvbjpcIitKU09OLnN0cmluZ2lmeShpLnZhbHVlKTpcIlwiKSsoaS5hcmc/Jyxhcmc6XCInK2kuYXJnKydcIic6XCJcIikrKGkubW9kaWZpZXJzP1wiLG1vZGlmaWVyczpcIitKU09OLnN0cmluZ2lmeShpLm1vZGlmaWVycyk6XCJcIikrXCJ9LFwiKX1yZXR1cm4gcz9hLnNsaWNlKDAsLTEpK1wiXVwiOnZvaWQgMH19ZnVuY3Rpb24gZnIoZSl7dmFyIHQ9ZS5jaGlsZHJlblswXTtpZigxPT09dC50eXBlKXt2YXIgbj1ucih0LEFhKTtyZXR1cm5cImlubGluZVRlbXBsYXRlOntyZW5kZXI6ZnVuY3Rpb24oKXtcIituLnJlbmRlcitcIn0sc3RhdGljUmVuZGVyRm5zOltcIituLnN0YXRpY1JlbmRlckZucy5tYXAoZnVuY3Rpb24oZSl7cmV0dXJuXCJmdW5jdGlvbigpe1wiK2UrXCJ9XCJ9KS5qb2luKFwiLFwiKStcIl19XCJ9fWZ1bmN0aW9uIGRyKGUpe3JldHVyblwic2NvcGVkU2xvdHM6e1wiK09iamVjdC5rZXlzKGUpLm1hcChmdW5jdGlvbih0KXtyZXR1cm4gcHIodCxlW3RdKX0pLmpvaW4oXCIsXCIpK1wifVwifWZ1bmN0aW9uIHByKGUsdCl7cmV0dXJuIGUrXCI6ZnVuY3Rpb24oXCIrU3RyaW5nKHQuYXR0cnNNYXAuc2NvcGUpK1wiKXtyZXR1cm4gXCIrKFwidGVtcGxhdGVcIj09PXQudGFnP3ZyKHQpfHxcInZvaWQgMFwiOnJyKHQpKStcIn1cIn1mdW5jdGlvbiB2cihlKXtpZihlLmNoaWxkcmVuLmxlbmd0aClyZXR1cm5cIltcIitlLmNoaWxkcmVuLm1hcChocikuam9pbihcIixcIikrXCJdXCJ9ZnVuY3Rpb24gaHIoZSl7cmV0dXJuIDE9PT1lLnR5cGU/cnIoZSk6bXIoZSl9ZnVuY3Rpb24gbXIoZSl7cmV0dXJuIDI9PT1lLnR5cGU/ZS5leHByZXNzaW9uOmJyKEpTT04uc3RyaW5naWZ5KGUudGV4dCkpfWZ1bmN0aW9uIGdyKGUpe3ZhciB0PWUuc2xvdE5hbWV8fCdcImRlZmF1bHRcIicsbj12cihlKTtyZXR1cm5cIl90KFwiK3QrKG4/XCIsXCIrbjpcIlwiKSsoZS5hdHRycz8obj9cIlwiOlwiLG51bGxcIikrXCIse1wiK2UuYXR0cnMubWFwKGZ1bmN0aW9uKGUpe3JldHVybiBWcihlLm5hbWUpK1wiOlwiK2UudmFsdWV9KS5qb2luKFwiLFwiKStcIn1cIjpcIlwiKStcIilcIn1mdW5jdGlvbiB5cihlLHQpe3ZhciBuPXQuaW5saW5lVGVtcGxhdGU/bnVsbDp2cih0KTtyZXR1cm5cIl9oKFwiK2UrXCIsXCIrbHIodCkrKG4/XCIsXCIrbjpcIlwiKStcIilcIn1mdW5jdGlvbiBfcihlKXtmb3IodmFyIHQ9XCJcIixuPTA7bjxlLmxlbmd0aDtuKyspe3ZhciByPWVbbl07dCs9J1wiJytyLm5hbWUrJ1wiOicrYnIoci52YWx1ZSkrXCIsXCJ9cmV0dXJuIHQuc2xpY2UoMCwtMSl9ZnVuY3Rpb24gYnIoZSl7cmV0dXJuIGUucmVwbGFjZSgvXFx1MjAyOC9nLFwiXFxcXHUyMDI4XCIpLnJlcGxhY2UoL1xcdTIwMjkvZyxcIlxcXFx1MjAyOVwiKX1mdW5jdGlvbiAkcihlLHQpe3ZhciBuPWtuKGUudHJpbSgpLHQpO3puKG4sdCk7dmFyIHI9bnIobix0KTtyZXR1cm57YXN0Om4scmVuZGVyOnIucmVuZGVyLHN0YXRpY1JlbmRlckZuczpyLnN0YXRpY1JlbmRlckZuc319ZnVuY3Rpb24gd3IoZSx0KXt2YXIgbj0odC53YXJufHxmbix5bihlLFwiY2xhc3NcIikpO24mJihlLnN0YXRpY0NsYXNzPUpTT04uc3RyaW5naWZ5KG4pKTt2YXIgcj1nbihlLFwiY2xhc3NcIiwhMSk7ciYmKGUuY2xhc3NCaW5kaW5nPXIpfWZ1bmN0aW9uIHhyKGUpe3ZhciB0PVwiXCI7cmV0dXJuIGUuc3RhdGljQ2xhc3MmJih0Kz1cInN0YXRpY0NsYXNzOlwiK2Uuc3RhdGljQ2xhc3MrXCIsXCIpLGUuY2xhc3NCaW5kaW5nJiYodCs9XCJjbGFzczpcIitlLmNsYXNzQmluZGluZytcIixcIiksdH1mdW5jdGlvbiBDcihlLHQpe3ZhciBuPSh0Lndhcm58fGZuLHluKGUsXCJzdHlsZVwiKSk7biYmKGUuc3RhdGljU3R5bGU9SlNPTi5zdHJpbmdpZnkoaG8obikpKTt2YXIgcj1nbihlLFwic3R5bGVcIiwhMSk7ciYmKGUuc3R5bGVCaW5kaW5nPXIpfWZ1bmN0aW9uIGtyKGUpe3ZhciB0PVwiXCI7cmV0dXJuIGUuc3RhdGljU3R5bGUmJih0Kz1cInN0YXRpY1N0eWxlOlwiK2Uuc3RhdGljU3R5bGUrXCIsXCIpLGUuc3R5bGVCaW5kaW5nJiYodCs9XCJzdHlsZTooXCIrZS5zdHlsZUJpbmRpbmcrXCIpLFwiKSx0fWZ1bmN0aW9uIEFyKGUsdCxuKXtPYT1uO3ZhciByPXQudmFsdWUsaT10Lm1vZGlmaWVycyxvPWUudGFnLGE9ZS5hdHRyc01hcC50eXBlO3JldHVyblwic2VsZWN0XCI9PT1vP2pyKGUscixpKTpcImlucHV0XCI9PT1vJiZcImNoZWNrYm94XCI9PT1hP09yKGUscixpKTpcImlucHV0XCI9PT1vJiZcInJhZGlvXCI9PT1hP1NyKGUscixpKTpUcihlLHIsaSksITB9ZnVuY3Rpb24gT3IoZSx0LG4pe3ZhciByPW4mJm4ubnVtYmVyLGk9Z24oZSxcInZhbHVlXCIpfHxcIm51bGxcIixvPWduKGUsXCJ0cnVlLXZhbHVlXCIpfHxcInRydWVcIixhPWduKGUsXCJmYWxzZS12YWx1ZVwiKXx8XCJmYWxzZVwiO3BuKGUsXCJjaGVja2VkXCIsXCJBcnJheS5pc0FycmF5KFwiK3QrXCIpP19pKFwiK3QrXCIsXCIraStcIik+LTE6X3EoXCIrdCtcIixcIitvK1wiKVwiKSxtbihlLFwiY2hhbmdlXCIsXCJ2YXIgJCRhPVwiK3QrXCIsJCRlbD0kZXZlbnQudGFyZ2V0LCQkYz0kJGVsLmNoZWNrZWQ/KFwiK28rXCIpOihcIithK1wiKTtpZihBcnJheS5pc0FycmF5KCQkYSkpe3ZhciAkJHY9XCIrKHI/XCJfbihcIitpK1wiKVwiOmkpK1wiLCQkaT1faSgkJGEsJCR2KTtpZigkJGMpeyQkaTwwJiYoXCIrdCtcIj0kJGEuY29uY2F0KCQkdikpfWVsc2V7JCRpPi0xJiYoXCIrdCtcIj0kJGEuc2xpY2UoMCwkJGkpLmNvbmNhdCgkJGEuc2xpY2UoJCRpKzEpKSl9fWVsc2V7XCIrdCtcIj0kJGN9XCIsbnVsbCwhMCl9ZnVuY3Rpb24gU3IoZSx0LG4pe3ZhciByPW4mJm4ubnVtYmVyLGk9Z24oZSxcInZhbHVlXCIpfHxcIm51bGxcIjtpPXI/XCJfbihcIitpK1wiKVwiOmkscG4oZSxcImNoZWNrZWRcIixcIl9xKFwiK3QrXCIsXCIraStcIilcIiksbW4oZSxcImNoYW5nZVwiLEVyKHQsaSksbnVsbCwhMCl9ZnVuY3Rpb24gVHIoZSx0LG4pe3ZhciByPWUuYXR0cnNNYXAudHlwZSxpPW58fHt9LG89aS5sYXp5LGE9aS5udW1iZXIscz1pLnRyaW0sYz1vfHxlaSYmXCJyYW5nZVwiPT09cj9cImNoYW5nZVwiOlwiaW5wdXRcIixsPSFvJiZcInJhbmdlXCIhPT1yLHU9XCJpbnB1dFwiPT09ZS50YWd8fFwidGV4dGFyZWFcIj09PWUudGFnLGY9dT9cIiRldmVudC50YXJnZXQudmFsdWVcIisocz9cIi50cmltKClcIjpcIlwiKTpzP1wiKHR5cGVvZiAkZXZlbnQgPT09ICdzdHJpbmcnID8gJGV2ZW50LnRyaW0oKSA6ICRldmVudClcIjpcIiRldmVudFwiO2Y9YXx8XCJudW1iZXJcIj09PXI/XCJfbihcIitmK1wiKVwiOmY7dmFyIGQ9RXIodCxmKTt1JiZsJiYoZD1cImlmKCRldmVudC50YXJnZXQuY29tcG9zaW5nKXJldHVybjtcIitkKSxwbihlLFwidmFsdWVcIix1P1wiX3MoXCIrdCtcIilcIjpcIihcIit0K1wiKVwiKSxtbihlLGMsZCxudWxsLCEwKX1mdW5jdGlvbiBqcihlLHQsbil7dmFyIHI9biYmbi5udW1iZXIsaT0nQXJyYXkucHJvdG90eXBlLmZpbHRlci5jYWxsKCRldmVudC50YXJnZXQub3B0aW9ucyxmdW5jdGlvbihvKXtyZXR1cm4gby5zZWxlY3RlZH0pLm1hcChmdW5jdGlvbihvKXt2YXIgdmFsID0gXCJfdmFsdWVcIiBpbiBvID8gby5fdmFsdWUgOiBvLnZhbHVlO3JldHVybiAnKyhyP1wiX24odmFsKVwiOlwidmFsXCIpK1wifSlcIisobnVsbD09ZS5hdHRyc01hcC5tdWx0aXBsZT9cIlswXVwiOlwiXCIpLG89RXIodCxpKTttbihlLFwiY2hhbmdlXCIsbyxudWxsLCEwKX1mdW5jdGlvbiBFcihlLHQpe3ZhciBuPV9uKGUpO3JldHVybiBudWxsPT09bi5pZHg/ZStcIj1cIit0OlwidmFyICQkZXhwID0gXCIrbi5leHArXCIsICQkaWR4ID0gXCIrbi5pZHgrXCI7aWYgKCFBcnJheS5pc0FycmF5KCQkZXhwKSl7XCIrZStcIj1cIit0K1wifWVsc2V7JCRleHAuc3BsaWNlKCQkaWR4LCAxLCBcIit0K1wiKX1cIn1mdW5jdGlvbiBOcihlLHQpe3QudmFsdWUmJnBuKGUsXCJ0ZXh0Q29udGVudFwiLFwiX3MoXCIrdC52YWx1ZStcIilcIil9ZnVuY3Rpb24gTHIoZSx0KXt0LnZhbHVlJiZwbihlLFwiaW5uZXJIVE1MXCIsXCJfcyhcIit0LnZhbHVlK1wiKVwiKX1mdW5jdGlvbiBEcihlLHQpe3JldHVybiB0PXQ/bChsKHt9LGxzKSx0KTpscywkcihlLHQpfWZ1bmN0aW9uIE1yKGUsdCxuKXt2YXIgcj0odCYmdC53YXJufHx1aSx0JiZ0LmRlbGltaXRlcnM/U3RyaW5nKHQuZGVsaW1pdGVycykrZTplKTtpZihjc1tyXSlyZXR1cm4gY3Nbcl07dmFyIGk9e30sbz1EcihlLHQpO2kucmVuZGVyPVByKG8ucmVuZGVyKTt2YXIgYT1vLnN0YXRpY1JlbmRlckZucy5sZW5ndGg7aS5zdGF0aWNSZW5kZXJGbnM9bmV3IEFycmF5KGEpO2Zvcih2YXIgcz0wO3M8YTtzKyspaS5zdGF0aWNSZW5kZXJGbnNbc109UHIoby5zdGF0aWNSZW5kZXJGbnNbc10pO3JldHVybiBjc1tyXT1pfWZ1bmN0aW9uIFByKGUpe3RyeXtyZXR1cm4gbmV3IEZ1bmN0aW9uKGUpfWNhdGNoKGUpe3JldHVybiBwfX1mdW5jdGlvbiBScihlKXtpZihlLm91dGVySFRNTClyZXR1cm4gZS5vdXRlckhUTUw7dmFyIHQ9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtyZXR1cm4gdC5hcHBlbmRDaGlsZChlLmNsb25lTm9kZSghMCkpLHQuaW5uZXJIVE1MfXZhciBJcixGcixCcj1uKFwic2xvdCxjb21wb25lbnRcIiwhMCksVXI9T2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eSxIcj0vLShcXHcpL2csVnI9YShmdW5jdGlvbihlKXtyZXR1cm4gZS5yZXBsYWNlKEhyLGZ1bmN0aW9uKGUsdCl7cmV0dXJuIHQ/dC50b1VwcGVyQ2FzZSgpOlwiXCJ9KX0pLHpyPWEoZnVuY3Rpb24oZSl7cmV0dXJuIGUuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkrZS5zbGljZSgxKX0pLEpyPS8oW14tXSkoW0EtWl0pL2csS3I9YShmdW5jdGlvbihlKXtyZXR1cm4gZS5yZXBsYWNlKEpyLFwiJDEtJDJcIikucmVwbGFjZShKcixcIiQxLSQyXCIpLnRvTG93ZXJDYXNlKCl9KSxxcj1PYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLFdyPVwiW29iamVjdCBPYmplY3RdXCIsWnI9ZnVuY3Rpb24oKXtyZXR1cm4hMX0sR3I9L1teXFx3LiRdLyxZcj1cIl9fcHJvdG9fX1wiaW57fSxRcj1cInVuZGVmaW5lZFwiIT10eXBlb2Ygd2luZG93JiZcIltvYmplY3QgT2JqZWN0XVwiIT09T2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHdpbmRvdyksWHI9UXImJndpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCksZWk9WHImJi9tc2llfHRyaWRlbnQvLnRlc3QoWHIpLHRpPVhyJiZYci5pbmRleE9mKFwibXNpZSA5LjBcIik+MCxuaT1YciYmWHIuaW5kZXhPZihcImVkZ2UvXCIpPjAscmk9WHImJlhyLmluZGV4T2YoXCJhbmRyb2lkXCIpPjAsaWk9WHImJi9pcGhvbmV8aXBhZHxpcG9kfGlvcy8udGVzdChYciksb2k9ZnVuY3Rpb24oKXtyZXR1cm4gdm9pZCAwPT09SXImJihJcj0hUXImJlwidW5kZWZpbmVkXCIhPXR5cGVvZiBnbG9iYWwmJlwic2VydmVyXCI9PT1nbG9iYWwucHJvY2Vzcy5lbnYuVlVFX0VOViksSXJ9LGFpPVFyJiZ3aW5kb3cuX19WVUVfREVWVE9PTFNfR0xPQkFMX0hPT0tfXyxzaT1mdW5jdGlvbigpe2Z1bmN0aW9uIGUoKXtyPSExO3ZhciBlPW4uc2xpY2UoMCk7bi5sZW5ndGg9MDtmb3IodmFyIHQ9MDt0PGUubGVuZ3RoO3QrKyllW3RdKCl9dmFyIHQsbj1bXSxyPSExO2lmKFwidW5kZWZpbmVkXCIhPXR5cGVvZiBQcm9taXNlJiZiKFByb21pc2UpKXt2YXIgaT1Qcm9taXNlLnJlc29sdmUoKTt0PWZ1bmN0aW9uKCl7aS50aGVuKGUpLGlpJiZzZXRUaW1lb3V0KHApfX1lbHNlIGlmKFwidW5kZWZpbmVkXCI9PXR5cGVvZiBNdXRhdGlvbk9ic2VydmVyfHwhYihNdXRhdGlvbk9ic2VydmVyKSYmXCJbb2JqZWN0IE11dGF0aW9uT2JzZXJ2ZXJDb25zdHJ1Y3Rvcl1cIiE9PU11dGF0aW9uT2JzZXJ2ZXIudG9TdHJpbmcoKSl0PWZ1bmN0aW9uKCl7c2V0VGltZW91dChlLDApfTtlbHNle3ZhciBvPTEsYT1uZXcgTXV0YXRpb25PYnNlcnZlcihlKSxzPWRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFN0cmluZyhvKSk7YS5vYnNlcnZlKHMse2NoYXJhY3RlckRhdGE6ITB9KSx0PWZ1bmN0aW9uKCl7bz0obysxKSUyLHMuZGF0YT1TdHJpbmcobyl9fXJldHVybiBmdW5jdGlvbihlLGkpe3ZhciBvO2lmKG4ucHVzaChmdW5jdGlvbigpe2UmJmUuY2FsbChpKSxvJiZvKGkpfSkscnx8KHI9ITAsdCgpKSwhZSYmXCJ1bmRlZmluZWRcIiE9dHlwZW9mIFByb21pc2UpcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKGUpe289ZX0pfX0oKTtGcj1cInVuZGVmaW5lZFwiIT10eXBlb2YgU2V0JiZiKFNldCk/U2V0OmZ1bmN0aW9uKCl7ZnVuY3Rpb24gZSgpe3RoaXMuc2V0PU9iamVjdC5jcmVhdGUobnVsbCl9cmV0dXJuIGUucHJvdG90eXBlLmhhcz1mdW5jdGlvbihlKXtyZXR1cm4gdm9pZCAwIT09dGhpcy5zZXRbZV19LGUucHJvdG90eXBlLmFkZD1mdW5jdGlvbihlKXt0aGlzLnNldFtlXT0xfSxlLnByb3RvdHlwZS5jbGVhcj1mdW5jdGlvbigpe3RoaXMuc2V0PU9iamVjdC5jcmVhdGUobnVsbCl9LGV9KCk7dmFyIGNpLGxpPXtvcHRpb25NZXJnZVN0cmF0ZWdpZXM6T2JqZWN0LmNyZWF0ZShudWxsKSxzaWxlbnQ6ITEsZGV2dG9vbHM6ITEsZXJyb3JIYW5kbGVyOm51bGwsaWdub3JlZEVsZW1lbnRzOm51bGwsa2V5Q29kZXM6T2JqZWN0LmNyZWF0ZShudWxsKSxpc1Jlc2VydmVkVGFnOlpyLGlzVW5rbm93bkVsZW1lbnQ6WnIsZ2V0VGFnTmFtZXNwYWNlOnAsbXVzdFVzZVByb3A6WnIsX2Fzc2V0VHlwZXM6W1wiY29tcG9uZW50XCIsXCJkaXJlY3RpdmVcIixcImZpbHRlclwiXSxfbGlmZWN5Y2xlSG9va3M6W1wiYmVmb3JlQ3JlYXRlXCIsXCJjcmVhdGVkXCIsXCJiZWZvcmVNb3VudFwiLFwibW91bnRlZFwiLFwiYmVmb3JlVXBkYXRlXCIsXCJ1cGRhdGVkXCIsXCJiZWZvcmVEZXN0cm95XCIsXCJkZXN0cm95ZWRcIixcImFjdGl2YXRlZFwiLFwiZGVhY3RpdmF0ZWRcIl0sX21heFVwZGF0ZUNvdW50OjEwMH0sdWk9cCxmaT0wLGRpPWZ1bmN0aW9uKCl7dGhpcy5pZD1maSsrLHRoaXMuc3Vicz1bXX07ZGkucHJvdG90eXBlLmFkZFN1Yj1mdW5jdGlvbihlKXt0aGlzLnN1YnMucHVzaChlKX0sZGkucHJvdG90eXBlLnJlbW92ZVN1Yj1mdW5jdGlvbihlKXtyKHRoaXMuc3VicyxlKX0sZGkucHJvdG90eXBlLmRlcGVuZD1mdW5jdGlvbigpe2RpLnRhcmdldCYmZGkudGFyZ2V0LmFkZERlcCh0aGlzKX0sZGkucHJvdG90eXBlLm5vdGlmeT1mdW5jdGlvbigpe2Zvcih2YXIgZT10aGlzLnN1YnMuc2xpY2UoKSx0PTAsbj1lLmxlbmd0aDt0PG47dCsrKWVbdF0udXBkYXRlKCl9LGRpLnRhcmdldD1udWxsO3ZhciBwaT1bXSx2aT1BcnJheS5wcm90b3R5cGUsaGk9T2JqZWN0LmNyZWF0ZSh2aSk7W1wicHVzaFwiLFwicG9wXCIsXCJzaGlmdFwiLFwidW5zaGlmdFwiLFwic3BsaWNlXCIsXCJzb3J0XCIsXCJyZXZlcnNlXCJdLmZvckVhY2goZnVuY3Rpb24oZSl7dmFyIHQ9dmlbZV07eShoaSxlLGZ1bmN0aW9uKCl7Zm9yKHZhciBuPWFyZ3VtZW50cyxyPWFyZ3VtZW50cy5sZW5ndGgsaT1uZXcgQXJyYXkocik7ci0tOylpW3JdPW5bcl07dmFyIG8sYT10LmFwcGx5KHRoaXMsaSkscz10aGlzLl9fb2JfXztzd2l0Y2goZSl7Y2FzZVwicHVzaFwiOm89aTticmVhaztjYXNlXCJ1bnNoaWZ0XCI6bz1pO2JyZWFrO2Nhc2VcInNwbGljZVwiOm89aS5zbGljZSgyKX1yZXR1cm4gbyYmcy5vYnNlcnZlQXJyYXkobykscy5kZXAubm90aWZ5KCksYX0pfSk7dmFyIG1pPU9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGhpKSxnaT17c2hvdWxkQ29udmVydDohMCxpc1NldHRpbmdQcm9wczohMX0seWk9ZnVuY3Rpb24oZSl7aWYodGhpcy52YWx1ZT1lLHRoaXMuZGVwPW5ldyBkaSx0aGlzLnZtQ291bnQ9MCx5KGUsXCJfX29iX19cIix0aGlzKSxBcnJheS5pc0FycmF5KGUpKXt2YXIgdD1Zcj94OkM7dChlLGhpLG1pKSx0aGlzLm9ic2VydmVBcnJheShlKX1lbHNlIHRoaXMud2FsayhlKX07eWkucHJvdG90eXBlLndhbGs9ZnVuY3Rpb24oZSl7Zm9yKHZhciB0PU9iamVjdC5rZXlzKGUpLG49MDtuPHQubGVuZ3RoO24rKylBKGUsdFtuXSxlW3Rbbl1dKX0seWkucHJvdG90eXBlLm9ic2VydmVBcnJheT1mdW5jdGlvbihlKXtmb3IodmFyIHQ9MCxuPWUubGVuZ3RoO3Q8bjt0KyspayhlW3RdKX07dmFyIF9pPWxpLm9wdGlvbk1lcmdlU3RyYXRlZ2llcztfaS5kYXRhPWZ1bmN0aW9uKGUsdCxuKXtyZXR1cm4gbj9lfHx0P2Z1bmN0aW9uKCl7dmFyIHI9XCJmdW5jdGlvblwiPT10eXBlb2YgdD90LmNhbGwobik6dCxpPVwiZnVuY3Rpb25cIj09dHlwZW9mIGU/ZS5jYWxsKG4pOnZvaWQgMDtyZXR1cm4gcj9qKHIsaSk6aX06dm9pZCAwOnQ/XCJmdW5jdGlvblwiIT10eXBlb2YgdD9lOmU/ZnVuY3Rpb24oKXtyZXR1cm4gaih0LmNhbGwodGhpcyksZS5jYWxsKHRoaXMpKX06dDplfSxsaS5fbGlmZWN5Y2xlSG9va3MuZm9yRWFjaChmdW5jdGlvbihlKXtfaVtlXT1FfSksbGkuX2Fzc2V0VHlwZXMuZm9yRWFjaChmdW5jdGlvbihlKXtfaVtlK1wic1wiXT1OfSksX2kud2F0Y2g9ZnVuY3Rpb24oZSx0KXtpZighdClyZXR1cm4gZTtpZighZSlyZXR1cm4gdDt2YXIgbj17fTtsKG4sZSk7Zm9yKHZhciByIGluIHQpe3ZhciBpPW5bcl0sbz10W3JdO2kmJiFBcnJheS5pc0FycmF5KGkpJiYoaT1baV0pLG5bcl09aT9pLmNvbmNhdChvKTpbb119cmV0dXJuIG59LF9pLnByb3BzPV9pLm1ldGhvZHM9X2kuY29tcHV0ZWQ9ZnVuY3Rpb24oZSx0KXtpZighdClyZXR1cm4gZTtpZighZSlyZXR1cm4gdDt2YXIgbj1PYmplY3QuY3JlYXRlKG51bGwpO3JldHVybiBsKG4sZSksbChuLHQpLG59O3ZhciBiaT1mdW5jdGlvbihlLHQpe3JldHVybiB2b2lkIDA9PT10P2U6dH0sJGk9T2JqZWN0LmZyZWV6ZSh7ZGVmaW5lUmVhY3RpdmU6QSxfdG9TdHJpbmc6ZSx0b051bWJlcjp0LG1ha2VNYXA6bixpc0J1aWx0SW5UYWc6QnIscmVtb3ZlOnIsaGFzT3duOmksaXNQcmltaXRpdmU6byxjYWNoZWQ6YSxjYW1lbGl6ZTpWcixjYXBpdGFsaXplOnpyLGh5cGhlbmF0ZTpLcixiaW5kOnMsdG9BcnJheTpjLGV4dGVuZDpsLGlzT2JqZWN0OnUsaXNQbGFpbk9iamVjdDpmLHRvT2JqZWN0OmQsbm9vcDpwLG5vOlpyLGdlblN0YXRpY0tleXM6dixsb29zZUVxdWFsOmgsbG9vc2VJbmRleE9mOm0saXNSZXNlcnZlZDpnLGRlZjp5LHBhcnNlUGF0aDpfLGhhc1Byb3RvOllyLGluQnJvd3NlcjpRcixVQTpYcixpc0lFOmVpLGlzSUU5OnRpLGlzRWRnZTpuaSxpc0FuZHJvaWQ6cmksaXNJT1M6aWksaXNTZXJ2ZXJSZW5kZXJpbmc6b2ksZGV2dG9vbHM6YWksbmV4dFRpY2s6c2ksZ2V0IF9TZXQoKXtyZXR1cm4gRnJ9LG1lcmdlT3B0aW9uczpNLHJlc29sdmVBc3NldDpQLHdhcm46dWksZm9ybWF0Q29tcG9uZW50TmFtZTpjaSx2YWxpZGF0ZVByb3A6Un0pLHdpPVtdLHhpPXt9LENpPSExLGtpPSExLEFpPTAsT2k9MCxTaT1mdW5jdGlvbihlLHQsbixyKXt2b2lkIDA9PT1yJiYocj17fSksdGhpcy52bT1lLGUuX3dhdGNoZXJzLnB1c2godGhpcyksdGhpcy5kZWVwPSEhci5kZWVwLHRoaXMudXNlcj0hIXIudXNlcix0aGlzLmxhenk9ISFyLmxhenksdGhpcy5zeW5jPSEhci5zeW5jLHRoaXMuZXhwcmVzc2lvbj10LnRvU3RyaW5nKCksdGhpcy5jYj1uLHRoaXMuaWQ9KytPaSx0aGlzLmFjdGl2ZT0hMCx0aGlzLmRpcnR5PXRoaXMubGF6eSx0aGlzLmRlcHM9W10sdGhpcy5uZXdEZXBzPVtdLHRoaXMuZGVwSWRzPW5ldyBGcix0aGlzLm5ld0RlcElkcz1uZXcgRnIsXCJmdW5jdGlvblwiPT10eXBlb2YgdD90aGlzLmdldHRlcj10Oih0aGlzLmdldHRlcj1fKHQpLHRoaXMuZ2V0dGVyfHwodGhpcy5nZXR0ZXI9ZnVuY3Rpb24oKXt9KSksdGhpcy52YWx1ZT10aGlzLmxhenk/dm9pZCAwOnRoaXMuZ2V0KCl9O1NpLnByb3RvdHlwZS5nZXQ9ZnVuY3Rpb24oKXskKHRoaXMpO3ZhciBlPXRoaXMuZ2V0dGVyLmNhbGwodGhpcy52bSx0aGlzLnZtKTtyZXR1cm4gdGhpcy5kZWVwJiZ6KGUpLHcoKSx0aGlzLmNsZWFudXBEZXBzKCksZX0sU2kucHJvdG90eXBlLmFkZERlcD1mdW5jdGlvbihlKXt2YXIgdD1lLmlkO3RoaXMubmV3RGVwSWRzLmhhcyh0KXx8KHRoaXMubmV3RGVwSWRzLmFkZCh0KSx0aGlzLm5ld0RlcHMucHVzaChlKSx0aGlzLmRlcElkcy5oYXModCl8fGUuYWRkU3ViKHRoaXMpKX0sU2kucHJvdG90eXBlLmNsZWFudXBEZXBzPWZ1bmN0aW9uKCl7Zm9yKHZhciBlPXRoaXMsdD10aGlzLmRlcHMubGVuZ3RoO3QtLTspe3ZhciBuPWUuZGVwc1t0XTtlLm5ld0RlcElkcy5oYXMobi5pZCl8fG4ucmVtb3ZlU3ViKGUpfXZhciByPXRoaXMuZGVwSWRzO3RoaXMuZGVwSWRzPXRoaXMubmV3RGVwSWRzLHRoaXMubmV3RGVwSWRzPXIsdGhpcy5uZXdEZXBJZHMuY2xlYXIoKSxyPXRoaXMuZGVwcyx0aGlzLmRlcHM9dGhpcy5uZXdEZXBzLHRoaXMubmV3RGVwcz1yLHRoaXMubmV3RGVwcy5sZW5ndGg9MH0sU2kucHJvdG90eXBlLnVwZGF0ZT1mdW5jdGlvbigpe3RoaXMubGF6eT90aGlzLmRpcnR5PSEwOnRoaXMuc3luYz90aGlzLnJ1bigpOlYodGhpcyl9LFNpLnByb3RvdHlwZS5ydW49ZnVuY3Rpb24oKXtpZih0aGlzLmFjdGl2ZSl7dmFyIGU9dGhpcy5nZXQoKTtpZihlIT09dGhpcy52YWx1ZXx8dShlKXx8dGhpcy5kZWVwKXt2YXIgdD10aGlzLnZhbHVlO2lmKHRoaXMudmFsdWU9ZSx0aGlzLnVzZXIpdHJ5e3RoaXMuY2IuY2FsbCh0aGlzLnZtLGUsdCl9Y2F0Y2goZSl7aWYoIWxpLmVycm9ySGFuZGxlcil0aHJvdyBlO2xpLmVycm9ySGFuZGxlci5jYWxsKG51bGwsZSx0aGlzLnZtKX1lbHNlIHRoaXMuY2IuY2FsbCh0aGlzLnZtLGUsdCl9fX0sU2kucHJvdG90eXBlLmV2YWx1YXRlPWZ1bmN0aW9uKCl7dGhpcy52YWx1ZT10aGlzLmdldCgpLHRoaXMuZGlydHk9ITF9LFNpLnByb3RvdHlwZS5kZXBlbmQ9ZnVuY3Rpb24oKXtmb3IodmFyIGU9dGhpcyx0PXRoaXMuZGVwcy5sZW5ndGg7dC0tOyllLmRlcHNbdF0uZGVwZW5kKCl9LFNpLnByb3RvdHlwZS50ZWFyZG93bj1mdW5jdGlvbigpe3ZhciBlPXRoaXM7aWYodGhpcy5hY3RpdmUpe3RoaXMudm0uX2lzQmVpbmdEZXN0cm95ZWR8fHRoaXMudm0uX3ZGb3JSZW1vdmluZ3x8cih0aGlzLnZtLl93YXRjaGVycyx0aGlzKTtmb3IodmFyIHQ9dGhpcy5kZXBzLmxlbmd0aDt0LS07KWUuZGVwc1t0XS5yZW1vdmVTdWIoZSk7dGhpcy5hY3RpdmU9ITF9fTt2YXIgVGk9bmV3IEZyLGppPXtlbnVtZXJhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMCxnZXQ6cCxzZXQ6cH0sRWk9ZnVuY3Rpb24oZSx0LG4scixpLG8sYSxzKXt0aGlzLnRhZz1lLHRoaXMuZGF0YT10LHRoaXMuY2hpbGRyZW49bix0aGlzLnRleHQ9cix0aGlzLmVsbT1pLHRoaXMubnM9byx0aGlzLmNvbnRleHQ9YSx0aGlzLmZ1bmN0aW9uYWxDb250ZXh0PXZvaWQgMCx0aGlzLmtleT10JiZ0LmtleSx0aGlzLmNvbXBvbmVudE9wdGlvbnM9cyx0aGlzLmNoaWxkPXZvaWQgMCx0aGlzLnBhcmVudD12b2lkIDAsdGhpcy5yYXc9ITEsdGhpcy5pc1N0YXRpYz0hMSx0aGlzLmlzUm9vdEluc2VydD0hMCx0aGlzLmlzQ29tbWVudD0hMSx0aGlzLmlzQ2xvbmVkPSExLHRoaXMuaXNPbmNlPSExfSxOaT1mdW5jdGlvbigpe3ZhciBlPW5ldyBFaTtyZXR1cm4gZS50ZXh0PVwiXCIsZS5pc0NvbW1lbnQ9ITAsZX0sTGk9bnVsbCxEaT17aW5pdDp5ZSxwcmVwYXRjaDpfZSxpbnNlcnQ6YmUsZGVzdHJveTokZX0sTWk9T2JqZWN0LmtleXMoRGkpLFBpPTA7RGUoUmUpLGVlKFJlKSxMZShSZSkscGUoUmUpLGplKFJlKTt2YXIgUmk9W1N0cmluZyxSZWdFeHBdLElpPXtuYW1lOlwia2VlcC1hbGl2ZVwiLGFic3RyYWN0OiEwLHByb3BzOntpbmNsdWRlOlJpLGV4Y2x1ZGU6Uml9LGNyZWF0ZWQ6ZnVuY3Rpb24oKXt0aGlzLmNhY2hlPU9iamVjdC5jcmVhdGUobnVsbCl9LHJlbmRlcjpmdW5jdGlvbigpe3ZhciBlPWZlKHRoaXMuJHNsb3RzLmRlZmF1bHQpO2lmKGUmJmUuY29tcG9uZW50T3B0aW9ucyl7dmFyIHQ9ZS5jb21wb25lbnRPcHRpb25zLG49dC5DdG9yLm9wdGlvbnMubmFtZXx8dC50YWc7aWYobiYmKHRoaXMuaW5jbHVkZSYmIUhlKHRoaXMuaW5jbHVkZSxuKXx8dGhpcy5leGNsdWRlJiZIZSh0aGlzLmV4Y2x1ZGUsbikpKXJldHVybiBlO3ZhciByPW51bGw9PWUua2V5P3QuQ3Rvci5jaWQrKHQudGFnP1wiOjpcIit0LnRhZzpcIlwiKTplLmtleTt0aGlzLmNhY2hlW3JdP2UuY2hpbGQ9dGhpcy5jYWNoZVtyXS5jaGlsZDp0aGlzLmNhY2hlW3JdPWUsZS5kYXRhLmtlZXBBbGl2ZT0hMH1yZXR1cm4gZX0sZGVzdHJveWVkOmZ1bmN0aW9uKCl7dmFyIGU9dGhpcztmb3IodmFyIHQgaW4gdGhpcy5jYWNoZSl7dmFyIG49ZS5jYWNoZVt0XTt2ZShuLmNoaWxkLFwiZGVhY3RpdmF0ZWRcIiksbi5jaGlsZC4kZGVzdHJveSgpfX19LEZpPXtLZWVwQWxpdmU6SWl9O1ZlKFJlKSxPYmplY3QuZGVmaW5lUHJvcGVydHkoUmUucHJvdG90eXBlLFwiJGlzU2VydmVyXCIse2dldDpvaX0pLFJlLnZlcnNpb249XCIyLjEuMFwiO3ZhciBCaSxVaT1mdW5jdGlvbihlLHQpe3JldHVyblwidmFsdWVcIj09PXQmJihcImlucHV0XCI9PT1lfHxcInRleHRhcmVhXCI9PT1lfHxcIm9wdGlvblwiPT09ZSl8fFwic2VsZWN0ZWRcIj09PXQmJlwib3B0aW9uXCI9PT1lfHxcImNoZWNrZWRcIj09PXQmJlwiaW5wdXRcIj09PWV8fFwibXV0ZWRcIj09PXQmJlwidmlkZW9cIj09PWV9LEhpPW4oXCJjb250ZW50ZWRpdGFibGUsZHJhZ2dhYmxlLHNwZWxsY2hlY2tcIiksVmk9bihcImFsbG93ZnVsbHNjcmVlbixhc3luYyxhdXRvZm9jdXMsYXV0b3BsYXksY2hlY2tlZCxjb21wYWN0LGNvbnRyb2xzLGRlY2xhcmUsZGVmYXVsdCxkZWZhdWx0Y2hlY2tlZCxkZWZhdWx0bXV0ZWQsZGVmYXVsdHNlbGVjdGVkLGRlZmVyLGRpc2FibGVkLGVuYWJsZWQsZm9ybW5vdmFsaWRhdGUsaGlkZGVuLGluZGV0ZXJtaW5hdGUsaW5lcnQsaXNtYXAsaXRlbXNjb3BlLGxvb3AsbXVsdGlwbGUsbXV0ZWQsbm9ocmVmLG5vcmVzaXplLG5vc2hhZGUsbm92YWxpZGF0ZSxub3dyYXAsb3BlbixwYXVzZW9uZXhpdCxyZWFkb25seSxyZXF1aXJlZCxyZXZlcnNlZCxzY29wZWQsc2VhbWxlc3Msc2VsZWN0ZWQsc29ydGFibGUsdHJhbnNsYXRlLHRydWVzcGVlZCx0eXBlbXVzdG1hdGNoLHZpc2libGVcIiksemk9XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCIsSmk9ZnVuY3Rpb24oZSl7cmV0dXJuXCI6XCI9PT1lLmNoYXJBdCg1KSYmXCJ4bGlua1wiPT09ZS5zbGljZSgwLDUpfSxLaT1mdW5jdGlvbihlKXtyZXR1cm4gSmkoZSk/ZS5zbGljZSg2LGUubGVuZ3RoKTpcIlwifSxxaT1mdW5jdGlvbihlKXtyZXR1cm4gbnVsbD09ZXx8ZT09PSExfSxXaT17c3ZnOlwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIixtYXRoOlwiaHR0cDovL3d3dy53My5vcmcvMTk5OC9NYXRoL01hdGhNTFwiLHhodG1sOlwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94aHRtbFwifSxaaT1uKFwiaHRtbCxib2R5LGJhc2UsaGVhZCxsaW5rLG1ldGEsc3R5bGUsdGl0bGUsYWRkcmVzcyxhcnRpY2xlLGFzaWRlLGZvb3RlcixoZWFkZXIsaDEsaDIsaDMsaDQsaDUsaDYsaGdyb3VwLG5hdixzZWN0aW9uLGRpdixkZCxkbCxkdCxmaWdjYXB0aW9uLGZpZ3VyZSxocixpbWcsbGksbWFpbixvbCxwLHByZSx1bCxhLGIsYWJicixiZGksYmRvLGJyLGNpdGUsY29kZSxkYXRhLGRmbixlbSxpLGtiZCxtYXJrLHEscnAscnQscnRjLHJ1YnkscyxzYW1wLHNtYWxsLHNwYW4sc3Ryb25nLHN1YixzdXAsdGltZSx1LHZhcix3YnIsYXJlYSxhdWRpbyxtYXAsdHJhY2ssdmlkZW8sZW1iZWQsb2JqZWN0LHBhcmFtLHNvdXJjZSxjYW52YXMsc2NyaXB0LG5vc2NyaXB0LGRlbCxpbnMsY2FwdGlvbixjb2wsY29sZ3JvdXAsdGFibGUsdGhlYWQsdGJvZHksdGQsdGgsdHIsYnV0dG9uLGRhdGFsaXN0LGZpZWxkc2V0LGZvcm0saW5wdXQsbGFiZWwsbGVnZW5kLG1ldGVyLG9wdGdyb3VwLG9wdGlvbixvdXRwdXQscHJvZ3Jlc3Msc2VsZWN0LHRleHRhcmVhLGRldGFpbHMsZGlhbG9nLG1lbnUsbWVudWl0ZW0sc3VtbWFyeSxjb250ZW50LGVsZW1lbnQsc2hhZG93LHRlbXBsYXRlXCIpLEdpPW4oXCJhcmVhLGJhc2UsYnIsY29sLGVtYmVkLGZyYW1lLGhyLGltZyxpbnB1dCxpc2luZGV4LGtleWdlbixsaW5rLG1ldGEscGFyYW0sc291cmNlLHRyYWNrLHdiclwiLCEwKSxZaT1uKFwiY29sZ3JvdXAsZGQsZHQsbGksb3B0aW9ucyxwLHRkLHRmb290LHRoLHRoZWFkLHRyLHNvdXJjZVwiLCEwKSxRaT1uKFwiYWRkcmVzcyxhcnRpY2xlLGFzaWRlLGJhc2UsYmxvY2txdW90ZSxib2R5LGNhcHRpb24sY29sLGNvbGdyb3VwLGRkLGRldGFpbHMsZGlhbG9nLGRpdixkbCxkdCxmaWVsZHNldCxmaWdjYXB0aW9uLGZpZ3VyZSxmb290ZXIsZm9ybSxoMSxoMixoMyxoNCxoNSxoNixoZWFkLGhlYWRlcixoZ3JvdXAsaHIsaHRtbCxsZWdlbmQsbGksbWVudWl0ZW0sbWV0YSxvcHRncm91cCxvcHRpb24scGFyYW0scnAscnQsc291cmNlLHN0eWxlLHN1bW1hcnksdGJvZHksdGQsdGZvb3QsdGgsdGhlYWQsdGl0bGUsdHIsdHJhY2tcIiwhMCksWGk9bihcInN2ZyxhbmltYXRlLGNpcmNsZSxjbGlwcGF0aCxjdXJzb3IsZGVmcyxkZXNjLGVsbGlwc2UsZmlsdGVyLGZvbnQsZm9udC1mYWNlLGcsZ2x5cGgsaW1hZ2UsbGluZSxtYXJrZXIsbWFzayxtaXNzaW5nLWdseXBoLHBhdGgscGF0dGVybixwb2x5Z29uLHBvbHlsaW5lLHJlY3Qsc3dpdGNoLHN5bWJvbCx0ZXh0LHRleHRwYXRoLHRzcGFuLHVzZSx2aWV3XCIsITApLGVvPWZ1bmN0aW9uKGUpe3JldHVyblwicHJlXCI9PT1lfSx0bz1mdW5jdGlvbihlKXtyZXR1cm4gWmkoZSl8fFhpKGUpfSxubz1PYmplY3QuY3JlYXRlKG51bGwpLHJvPU9iamVjdC5mcmVlemUoe2NyZWF0ZUVsZW1lbnQ6UWUsY3JlYXRlRWxlbWVudE5TOlhlLGNyZWF0ZVRleHROb2RlOmV0LGNyZWF0ZUNvbW1lbnQ6dHQsaW5zZXJ0QmVmb3JlOm50LHJlbW92ZUNoaWxkOnJ0LGFwcGVuZENoaWxkOml0LHBhcmVudE5vZGU6b3QsbmV4dFNpYmxpbmc6YXQsdGFnTmFtZTpzdCxzZXRUZXh0Q29udGVudDpjdCxjaGlsZE5vZGVzOmx0LHNldEF0dHJpYnV0ZTp1dH0pLGlvPXtjcmVhdGU6ZnVuY3Rpb24oZSx0KXtmdCh0KX0sdXBkYXRlOmZ1bmN0aW9uKGUsdCl7ZS5kYXRhLnJlZiE9PXQuZGF0YS5yZWYmJihmdChlLCEwKSxmdCh0KSl9LGRlc3Ryb3k6ZnVuY3Rpb24oZSl7ZnQoZSwhMCl9fSxvbz1uZXcgRWkoXCJcIix7fSxbXSksYW89W1wiY3JlYXRlXCIsXCJ1cGRhdGVcIixcInJlbW92ZVwiLFwiZGVzdHJveVwiXSxzbz17Y3JlYXRlOmd0LHVwZGF0ZTpndCxkZXN0cm95OmZ1bmN0aW9uKGUpe2d0KGUsb28pfX0sY289T2JqZWN0LmNyZWF0ZShudWxsKSxsbz1baW8sc29dLHVvPXtjcmVhdGU6JHQsdXBkYXRlOiR0fSxmbz17Y3JlYXRlOnh0LHVwZGF0ZTp4dH0scG89e2NyZWF0ZTpDdCx1cGRhdGU6Q3R9LHZvPXtjcmVhdGU6a3QsdXBkYXRlOmt0fSxobz1hKGZ1bmN0aW9uKGUpe3ZhciB0PXt9LG49ZS5pbmRleE9mKFwiYmFja2dyb3VuZFwiKT49MCxyPW4/LzsoPyFbXihdKlxcKSkvZzpcIjtcIixpPW4/LzooLispLzpcIjpcIjtyZXR1cm4gZS5zcGxpdChyKS5mb3JFYWNoKGZ1bmN0aW9uKGUpe2lmKGUpe3ZhciBuPWUuc3BsaXQoaSk7bi5sZW5ndGg+MSYmKHRbblswXS50cmltKCldPW5bMV0udHJpbSgpKX19KSx0fSksbW89L14tLS8sZ289ZnVuY3Rpb24oZSx0LG4pe21vLnRlc3QodCk/ZS5zdHlsZS5zZXRQcm9wZXJ0eSh0LG4pOmUuc3R5bGVbX28odCldPW59LHlvPVtcIldlYmtpdFwiLFwiTW96XCIsXCJtc1wiXSxfbz1hKGZ1bmN0aW9uKGUpe2lmKEJpPUJpfHxkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLGU9VnIoZSksXCJmaWx0ZXJcIiE9PWUmJmUgaW4gQmkuc3R5bGUpcmV0dXJuIGU7Zm9yKHZhciB0PWUuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkrZS5zbGljZSgxKSxuPTA7bjx5by5sZW5ndGg7bisrKXt2YXIgcj15b1tuXSt0O2lmKHIgaW4gQmkuc3R5bGUpcmV0dXJuIHJ9fSksYm89e2NyZWF0ZTpUdCx1cGRhdGU6VHR9LCRvPVFyJiYhdGksd289XCJ0cmFuc2l0aW9uXCIseG89XCJhbmltYXRpb25cIixDbz1cInRyYW5zaXRpb25cIixrbz1cInRyYW5zaXRpb25lbmRcIixBbz1cImFuaW1hdGlvblwiLE9vPVwiYW5pbWF0aW9uZW5kXCI7JG8mJih2b2lkIDA9PT13aW5kb3cub250cmFuc2l0aW9uZW5kJiZ2b2lkIDAhPT13aW5kb3cub253ZWJraXR0cmFuc2l0aW9uZW5kJiYoQ289XCJXZWJraXRUcmFuc2l0aW9uXCIsa289XCJ3ZWJraXRUcmFuc2l0aW9uRW5kXCIpLHZvaWQgMD09PXdpbmRvdy5vbmFuaW1hdGlvbmVuZCYmdm9pZCAwIT09d2luZG93Lm9ud2Via2l0YW5pbWF0aW9uZW5kJiYoQW89XCJXZWJraXRBbmltYXRpb25cIixPbz1cIndlYmtpdEFuaW1hdGlvbkVuZFwiKSk7dmFyIFNvPVFyJiZ3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lfHxzZXRUaW1lb3V0LFRvPS9cXGIodHJhbnNmb3JtfGFsbCkoLHwkKS8sam89YShmdW5jdGlvbihlKXtyZXR1cm57ZW50ZXJDbGFzczplK1wiLWVudGVyXCIsbGVhdmVDbGFzczplK1wiLWxlYXZlXCIsYXBwZWFyQ2xhc3M6ZStcIi1lbnRlclwiLGVudGVyQWN0aXZlQ2xhc3M6ZStcIi1lbnRlci1hY3RpdmVcIixsZWF2ZUFjdGl2ZUNsYXNzOmUrXCItbGVhdmUtYWN0aXZlXCIsYXBwZWFyQWN0aXZlQ2xhc3M6ZStcIi1lbnRlci1hY3RpdmVcIn19KSxFbz1Rcj97Y3JlYXRlOmZ1bmN0aW9uKGUsdCl7dC5kYXRhLnNob3d8fEZ0KHQpfSxyZW1vdmU6ZnVuY3Rpb24oZSx0KXtlLmRhdGEuc2hvdz90KCk6QnQoZSx0KX19Ont9LE5vPVt1byxmbyxwbyx2byxibyxFb10sTG89Tm8uY29uY2F0KGxvKSxEbz1tdCh7bm9kZU9wczpybyxtb2R1bGVzOkxvfSk7dGkmJmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJzZWxlY3Rpb25jaGFuZ2VcIixmdW5jdGlvbigpe3ZhciBlPWRvY3VtZW50LmFjdGl2ZUVsZW1lbnQ7ZSYmZS52bW9kZWwmJld0KGUsXCJpbnB1dFwiKX0pO3ZhciBNbz17aW5zZXJ0ZWQ6ZnVuY3Rpb24oZSx0LG4pe2lmKFwic2VsZWN0XCI9PT1uLnRhZyl7dmFyIHI9ZnVuY3Rpb24oKXtWdChlLHQsbi5jb250ZXh0KX07cigpLChlaXx8bmkpJiZzZXRUaW1lb3V0KHIsMCl9ZWxzZVwidGV4dGFyZWFcIiE9PW4udGFnJiZcInRleHRcIiE9PWUudHlwZXx8dC5tb2RpZmllcnMubGF6eXx8KHJpfHwoZS5hZGRFdmVudExpc3RlbmVyKFwiY29tcG9zaXRpb25zdGFydFwiLEt0KSxlLmFkZEV2ZW50TGlzdGVuZXIoXCJjb21wb3NpdGlvbmVuZFwiLHF0KSksdGkmJihlLnZtb2RlbD0hMCkpfSxjb21wb25lbnRVcGRhdGVkOmZ1bmN0aW9uKGUsdCxuKXtpZihcInNlbGVjdFwiPT09bi50YWcpe1Z0KGUsdCxuLmNvbnRleHQpO3ZhciByPWUubXVsdGlwbGU/dC52YWx1ZS5zb21lKGZ1bmN0aW9uKHQpe3JldHVybiB6dCh0LGUub3B0aW9ucyl9KTp0LnZhbHVlIT09dC5vbGRWYWx1ZSYmenQodC52YWx1ZSxlLm9wdGlvbnMpO3ImJld0KGUsXCJjaGFuZ2VcIil9fX0sUG89e2JpbmQ6ZnVuY3Rpb24oZSx0LG4pe3ZhciByPXQudmFsdWU7bj1adChuKTt2YXIgaT1uLmRhdGEmJm4uZGF0YS50cmFuc2l0aW9uO3ImJmkmJiF0aSYmRnQobik7dmFyIG89XCJub25lXCI9PT1lLnN0eWxlLmRpc3BsYXk/XCJcIjplLnN0eWxlLmRpc3BsYXk7ZS5zdHlsZS5kaXNwbGF5PXI/bzpcIm5vbmVcIixlLl9fdk9yaWdpbmFsRGlzcGxheT1vfSx1cGRhdGU6ZnVuY3Rpb24oZSx0LG4pe3ZhciByPXQudmFsdWUsaT10Lm9sZFZhbHVlO2lmKHIhPT1pKXtuPVp0KG4pO3ZhciBvPW4uZGF0YSYmbi5kYXRhLnRyYW5zaXRpb247byYmIXRpP3I/KEZ0KG4pLGUuc3R5bGUuZGlzcGxheT1lLl9fdk9yaWdpbmFsRGlzcGxheSk6QnQobixmdW5jdGlvbigpe2Uuc3R5bGUuZGlzcGxheT1cIm5vbmVcIn0pOmUuc3R5bGUuZGlzcGxheT1yP2UuX192T3JpZ2luYWxEaXNwbGF5Olwibm9uZVwifX19LFJvPXttb2RlbDpNbyxzaG93OlBvfSxJbz17bmFtZTpTdHJpbmcsYXBwZWFyOkJvb2xlYW4sY3NzOkJvb2xlYW4sbW9kZTpTdHJpbmcsdHlwZTpTdHJpbmcsZW50ZXJDbGFzczpTdHJpbmcsbGVhdmVDbGFzczpTdHJpbmcsZW50ZXJBY3RpdmVDbGFzczpTdHJpbmcsbGVhdmVBY3RpdmVDbGFzczpTdHJpbmcsYXBwZWFyQ2xhc3M6U3RyaW5nLGFwcGVhckFjdGl2ZUNsYXNzOlN0cmluZ30sRm89e25hbWU6XCJ0cmFuc2l0aW9uXCIscHJvcHM6SW8sYWJzdHJhY3Q6ITAsXG5yZW5kZXI6ZnVuY3Rpb24oZSl7dmFyIHQ9dGhpcyxuPXRoaXMuJHNsb3RzLmRlZmF1bHQ7aWYobiYmKG49bi5maWx0ZXIoZnVuY3Rpb24oZSl7cmV0dXJuIGUudGFnfSksbi5sZW5ndGgpKXt2YXIgcj10aGlzLm1vZGUsaT1uWzBdO2lmKFh0KHRoaXMuJHZub2RlKSlyZXR1cm4gaTt2YXIgbz1HdChpKTtpZighbylyZXR1cm4gaTtpZih0aGlzLl9sZWF2aW5nKXJldHVybiBRdChlLGkpO3ZhciBhPW8ua2V5PW51bGw9PW8ua2V5fHxvLmlzU3RhdGljP1wiX192XCIrKG8udGFnK3RoaXMuX3VpZCkrXCJfX1wiOm8ua2V5LHM9KG8uZGF0YXx8KG8uZGF0YT17fSkpLnRyYW5zaXRpb249WXQodGhpcyksYz10aGlzLl92bm9kZSx1PUd0KGMpO2lmKG8uZGF0YS5kaXJlY3RpdmVzJiZvLmRhdGEuZGlyZWN0aXZlcy5zb21lKGZ1bmN0aW9uKGUpe3JldHVyblwic2hvd1wiPT09ZS5uYW1lfSkmJihvLmRhdGEuc2hvdz0hMCksdSYmdS5kYXRhJiZ1LmtleSE9PWEpe3ZhciBmPXUuZGF0YS50cmFuc2l0aW9uPWwoe30scyk7aWYoXCJvdXQtaW5cIj09PXIpcmV0dXJuIHRoaXMuX2xlYXZpbmc9ITAsaWUoZixcImFmdGVyTGVhdmVcIixmdW5jdGlvbigpe3QuX2xlYXZpbmc9ITEsdC4kZm9yY2VVcGRhdGUoKX0sYSksUXQoZSxpKTtpZihcImluLW91dFwiPT09cil7dmFyIGQscD1mdW5jdGlvbigpe2QoKX07aWUocyxcImFmdGVyRW50ZXJcIixwLGEpLGllKHMsXCJlbnRlckNhbmNlbGxlZFwiLHAsYSksaWUoZixcImRlbGF5TGVhdmVcIixmdW5jdGlvbihlKXtkPWV9LGEpfX1yZXR1cm4gaX19fSxCbz1sKHt0YWc6U3RyaW5nLG1vdmVDbGFzczpTdHJpbmd9LElvKTtkZWxldGUgQm8ubW9kZTt2YXIgVW89e3Byb3BzOkJvLHJlbmRlcjpmdW5jdGlvbihlKXtmb3IodmFyIHQ9dGhpcy50YWd8fHRoaXMuJHZub2RlLmRhdGEudGFnfHxcInNwYW5cIixuPU9iamVjdC5jcmVhdGUobnVsbCkscj10aGlzLnByZXZDaGlsZHJlbj10aGlzLmNoaWxkcmVuLGk9dGhpcy4kc2xvdHMuZGVmYXVsdHx8W10sbz10aGlzLmNoaWxkcmVuPVtdLGE9WXQodGhpcykscz0wO3M8aS5sZW5ndGg7cysrKXt2YXIgYz1pW3NdO2MudGFnJiZudWxsIT1jLmtleSYmMCE9PVN0cmluZyhjLmtleSkuaW5kZXhPZihcIl9fdmxpc3RcIikmJihvLnB1c2goYyksbltjLmtleV09YywoYy5kYXRhfHwoYy5kYXRhPXt9KSkudHJhbnNpdGlvbj1hKX1pZihyKXtmb3IodmFyIGw9W10sdT1bXSxmPTA7ZjxyLmxlbmd0aDtmKyspe3ZhciBkPXJbZl07ZC5kYXRhLnRyYW5zaXRpb249YSxkLmRhdGEucG9zPWQuZWxtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLG5bZC5rZXldP2wucHVzaChkKTp1LnB1c2goZCl9dGhpcy5rZXB0PWUodCxudWxsLGwpLHRoaXMucmVtb3ZlZD11fXJldHVybiBlKHQsbnVsbCxvKX0sYmVmb3JlVXBkYXRlOmZ1bmN0aW9uKCl7dGhpcy5fX3BhdGNoX18odGhpcy5fdm5vZGUsdGhpcy5rZXB0LCExLCEwKSx0aGlzLl92bm9kZT10aGlzLmtlcHR9LHVwZGF0ZWQ6ZnVuY3Rpb24oKXt2YXIgZT10aGlzLnByZXZDaGlsZHJlbix0PXRoaXMubW92ZUNsYXNzfHwodGhpcy5uYW1lfHxcInZcIikrXCItbW92ZVwiO2lmKGUubGVuZ3RoJiZ0aGlzLmhhc01vdmUoZVswXS5lbG0sdCkpe2UuZm9yRWFjaChlbiksZS5mb3JFYWNoKHRuKSxlLmZvckVhY2gobm4pO2RvY3VtZW50LmJvZHkub2Zmc2V0SGVpZ2h0O2UuZm9yRWFjaChmdW5jdGlvbihlKXtpZihlLmRhdGEubW92ZWQpe3ZhciBuPWUuZWxtLHI9bi5zdHlsZTtMdChuLHQpLHIudHJhbnNmb3JtPXIuV2Via2l0VHJhbnNmb3JtPXIudHJhbnNpdGlvbkR1cmF0aW9uPVwiXCIsbi5hZGRFdmVudExpc3RlbmVyKGtvLG4uX21vdmVDYj1mdW5jdGlvbiBlKHIpe3ImJiEvdHJhbnNmb3JtJC8udGVzdChyLnByb3BlcnR5TmFtZSl8fChuLnJlbW92ZUV2ZW50TGlzdGVuZXIoa28sZSksbi5fbW92ZUNiPW51bGwsRHQobix0KSl9KX19KX19LG1ldGhvZHM6e2hhc01vdmU6ZnVuY3Rpb24oZSx0KXtpZighJG8pcmV0dXJuITE7aWYobnVsbCE9dGhpcy5faGFzTW92ZSlyZXR1cm4gdGhpcy5faGFzTW92ZTtMdChlLHQpO3ZhciBuPVB0KGUpO3JldHVybiBEdChlLHQpLHRoaXMuX2hhc01vdmU9bi5oYXNUcmFuc2Zvcm19fX0sSG89e1RyYW5zaXRpb246Rm8sVHJhbnNpdGlvbkdyb3VwOlVvfTtSZS5jb25maWcuaXNVbmtub3duRWxlbWVudD1HZSxSZS5jb25maWcuaXNSZXNlcnZlZFRhZz10byxSZS5jb25maWcuZ2V0VGFnTmFtZXNwYWNlPVplLFJlLmNvbmZpZy5tdXN0VXNlUHJvcD1VaSxsKFJlLm9wdGlvbnMuZGlyZWN0aXZlcyxSbyksbChSZS5vcHRpb25zLmNvbXBvbmVudHMsSG8pLFJlLnByb3RvdHlwZS5fX3BhdGNoX189UXI/RG86cCxSZS5wcm90b3R5cGUuJG1vdW50PWZ1bmN0aW9uKGUsdCl7cmV0dXJuIGU9ZSYmUXI/WWUoZSk6dm9pZCAwLHRoaXMuX21vdW50KGUsdCl9LHNldFRpbWVvdXQoZnVuY3Rpb24oKXtsaS5kZXZ0b29scyYmYWkmJmFpLmVtaXQoXCJpbml0XCIsUmUpfSwwKTt2YXIgVm8sem89ISFRciYmcm4oXCJcXG5cIixcIiYjMTA7XCIpLEpvPS8oW15cXHNcIic8PlxcLz1dKykvLEtvPS8oPzo9KS8scW89Wy9cIihbXlwiXSopXCIrLy5zb3VyY2UsLycoW14nXSopJysvLnNvdXJjZSwvKFteXFxzXCInPTw+YF0rKS8uc291cmNlXSxXbz1uZXcgUmVnRXhwKFwiXlxcXFxzKlwiK0pvLnNvdXJjZStcIig/OlxcXFxzKihcIitLby5zb3VyY2UrXCIpXFxcXHMqKD86XCIrcW8uam9pbihcInxcIikrXCIpKT9cIiksWm89XCJbYS16QS1aX11bXFxcXHdcXFxcLVxcXFwuXSpcIixHbz1cIigoPzpcIitabytcIlxcXFw6KT9cIitabytcIilcIixZbz1uZXcgUmVnRXhwKFwiXjxcIitHbyksUW89L15cXHMqKFxcLz8pPi8sWG89bmV3IFJlZ0V4cChcIl48XFxcXC9cIitHbytcIltePl0qPlwiKSxlYT0vXjwhRE9DVFlQRSBbXj5dKz4vaSx0YT0vXjwhLS0vLG5hPS9ePCFcXFsvLHJhPSExO1wieFwiLnJlcGxhY2UoL3goLik/L2csZnVuY3Rpb24oZSx0KXtyYT1cIlwiPT09dH0pO3ZhciBpYSxvYSxhYSxzYSxjYSxsYSx1YSxmYSxkYSxwYSx2YSxoYSxtYSxnYSx5YSxfYSxiYSwkYSx3YSx4YSxDYSxrYSxBYSxPYSxTYT1uKFwic2NyaXB0LHN0eWxlXCIsITApLFRhPWZ1bmN0aW9uKGUpe3JldHVyblwibGFuZ1wiPT09ZS5uYW1lJiZcImh0bWxcIiE9PWUudmFsdWV9LGphPWZ1bmN0aW9uKGUsdCxuKXtyZXR1cm4hIVNhKGUpfHwhIXQmJiEoXCJ0ZW1wbGF0ZVwiPT09ZSYmMT09PW4ubGVuZ3RoJiYhblswXS5hdHRycy5zb21lKFRhKSl9LEVhPXt9LE5hPS8mbHQ7L2csTGE9LyZndDsvZyxEYT0vJiMxMDsvZyxNYT0vJmFtcDsvZyxQYT0vJnF1b3Q7L2csUmE9L1xce1xceygoPzoufFxcbikrPylcXH1cXH0vZyxJYT0vWy0uKis/XiR7fSgpfFtcXF1cXC9cXFxcXS9nLEZhPWEoZnVuY3Rpb24oZSl7dmFyIHQ9ZVswXS5yZXBsYWNlKElhLFwiXFxcXCQmXCIpLG49ZVsxXS5yZXBsYWNlKElhLFwiXFxcXCQmXCIpO3JldHVybiBuZXcgUmVnRXhwKHQrXCIoKD86LnxcXFxcbikrPylcIituLFwiZ1wiKX0pLEJhPS9edi18XkB8XjovLFVhPS8oLio/KVxccysoPzppbnxvZilcXHMrKC4qKS8sSGE9L1xcKChcXHtbXn1dKlxcfXxbXixdKiksKFteLF0qKSg/OiwoW14sXSopKT9cXCkvLFZhPS9eOnxedi1iaW5kOi8semE9L15AfF52LW9uOi8sSmE9LzooLiopJC8sS2E9L1xcLlteLl0rL2cscWE9YShvbiksV2E9L154bWxuczpOU1xcZCsvLFphPS9eTlNcXGQrOi8sR2E9YShKbiksWWE9L15cXHMqKFtcXHckX10rfFxcKFteKV0qP1xcKSlcXHMqPT58XmZ1bmN0aW9uXFxzKlxcKC8sUWE9L15cXHMqW0EtWmEtel8kXVtcXHckXSooPzpcXC5bQS1aYS16XyRdW1xcdyRdKnxcXFsnLio/J118XFxbXCIuKj9cIl18XFxbXFxkK118XFxbW0EtWmEtel8kXVtcXHckXSpdKSpcXHMqJC8sWGE9e2VzYzoyNyx0YWI6OSxlbnRlcjoxMyxzcGFjZTozMix1cDozOCxsZWZ0OjM3LHJpZ2h0OjM5LGRvd246NDAsZGVsZXRlOls4LDQ2XX0sZXM9e3N0b3A6XCIkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XCIscHJldmVudDpcIiRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1wiLHNlbGY6XCJpZigkZXZlbnQudGFyZ2V0ICE9PSAkZXZlbnQuY3VycmVudFRhcmdldClyZXR1cm47XCJ9LHRzPS9ebW91c2V8XnBvaW50ZXJ8XihjbGlja3xkYmxjbGlja3xjb250ZXh0bWVudXx3aGVlbCkkLyxucz17Y3RybDpcImlmKCEkZXZlbnQuY3RybEtleSlyZXR1cm47XCIsc2hpZnQ6XCJpZighJGV2ZW50LnNoaWZ0S2V5KXJldHVybjtcIixhbHQ6XCJpZighJGV2ZW50LmFsdEtleSlyZXR1cm47XCIsbWV0YTpcImlmKCEkZXZlbnQubWV0YUtleSlyZXR1cm47XCJ9LHJzPXtiaW5kOnRyLGNsb2FrOnB9LGlzPShuZXcgUmVnRXhwKFwiXFxcXGJcIitcImRvLGlmLGZvcixsZXQsbmV3LHRyeSx2YXIsY2FzZSxlbHNlLHdpdGgsYXdhaXQsYnJlYWssY2F0Y2gsY2xhc3MsY29uc3Qsc3VwZXIsdGhyb3csd2hpbGUseWllbGQsZGVsZXRlLGV4cG9ydCxpbXBvcnQscmV0dXJuLHN3aXRjaCxkZWZhdWx0LGV4dGVuZHMsZmluYWxseSxjb250aW51ZSxkZWJ1Z2dlcixmdW5jdGlvbixhcmd1bWVudHNcIi5zcGxpdChcIixcIikuam9pbihcIlxcXFxifFxcXFxiXCIpK1wiXFxcXGJcIikse3N0YXRpY0tleXM6W1wic3RhdGljQ2xhc3NcIl0sdHJhbnNmb3JtTm9kZTp3cixnZW5EYXRhOnhyfSksb3M9e3N0YXRpY0tleXM6W1wic3RhdGljU3R5bGVcIl0sdHJhbnNmb3JtTm9kZTpDcixnZW5EYXRhOmtyfSxhcz1baXMsb3NdLHNzPXttb2RlbDpBcix0ZXh0Ok5yLGh0bWw6THJ9LGNzPU9iamVjdC5jcmVhdGUobnVsbCksbHM9e2V4cGVjdEhUTUw6ITAsbW9kdWxlczphcyxzdGF0aWNLZXlzOnYoYXMpLGRpcmVjdGl2ZXM6c3MsaXNSZXNlcnZlZFRhZzp0byxpc1VuYXJ5VGFnOkdpLG11c3RVc2VQcm9wOlVpLGdldFRhZ05hbWVzcGFjZTpaZSxpc1ByZVRhZzplb30sdXM9YShmdW5jdGlvbihlKXt2YXIgdD1ZZShlKTtyZXR1cm4gdCYmdC5pbm5lckhUTUx9KSxmcz1SZS5wcm90b3R5cGUuJG1vdW50O3JldHVybiBSZS5wcm90b3R5cGUuJG1vdW50PWZ1bmN0aW9uKGUsdCl7aWYoZT1lJiZZZShlKSxlPT09ZG9jdW1lbnQuYm9keXx8ZT09PWRvY3VtZW50LmRvY3VtZW50RWxlbWVudClyZXR1cm4gdGhpczt2YXIgbj10aGlzLiRvcHRpb25zO2lmKCFuLnJlbmRlcil7dmFyIHI9bi50ZW1wbGF0ZTtpZihyKWlmKFwic3RyaW5nXCI9PXR5cGVvZiByKVwiI1wiPT09ci5jaGFyQXQoMCkmJihyPXVzKHIpKTtlbHNle2lmKCFyLm5vZGVUeXBlKXJldHVybiB0aGlzO3I9ci5pbm5lckhUTUx9ZWxzZSBlJiYocj1ScihlKSk7aWYocil7dmFyIGk9TXIocix7d2Fybjp1aSxzaG91bGREZWNvZGVOZXdsaW5lczp6byxkZWxpbWl0ZXJzOm4uZGVsaW1pdGVyc30sdGhpcyksbz1pLnJlbmRlcixhPWkuc3RhdGljUmVuZGVyRm5zO24ucmVuZGVyPW8sbi5zdGF0aWNSZW5kZXJGbnM9YX19cmV0dXJuIGZzLmNhbGwodGhpcyxlLHQpfSxSZS5jb21waWxlPU1yLFJlfSk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vRTovVGVzdFdvcmsvdnVlL34vdnVlL2Rpc3QvdnVlLm1pbi5qcyIsIi8qKlxuICogdnVlLXJvdXRlciB2Mi4wLjNcbiAqIChjKSAyMDE2IEV2YW4gWW91XG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuKGZ1bmN0aW9uIChnbG9iYWwsIGZhY3RvcnkpIHtcbiAgdHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnID8gbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCkgOlxuICB0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQgPyBkZWZpbmUoZmFjdG9yeSkgOlxuICAoZ2xvYmFsLlZ1ZVJvdXRlciA9IGZhY3RvcnkoKSk7XG59KHRoaXMsIChmdW5jdGlvbiAoKSB7ICd1c2Ugc3RyaWN0JztcblxudmFyIFZpZXcgPSB7XG4gIG5hbWU6ICdyb3V0ZXItdmlldycsXG4gIGZ1bmN0aW9uYWw6IHRydWUsXG4gIHByb3BzOiB7XG4gICAgbmFtZToge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdDogJ2RlZmF1bHQnXG4gICAgfVxuICB9LFxuICByZW5kZXI6IGZ1bmN0aW9uIHJlbmRlciAoaCwgcmVmKSB7XG4gICAgdmFyIHByb3BzID0gcmVmLnByb3BzO1xuICAgIHZhciBjaGlsZHJlbiA9IHJlZi5jaGlsZHJlbjtcbiAgICB2YXIgcGFyZW50ID0gcmVmLnBhcmVudDtcbiAgICB2YXIgZGF0YSA9IHJlZi5kYXRhO1xuXG4gICAgZGF0YS5yb3V0ZXJWaWV3ID0gdHJ1ZVxuXG4gICAgdmFyIHJvdXRlID0gcGFyZW50LiRyb3V0ZVxuICAgIHZhciBjYWNoZSA9IHBhcmVudC5fcm91dGVyVmlld0NhY2hlIHx8IChwYXJlbnQuX3JvdXRlclZpZXdDYWNoZSA9IHt9KVxuICAgIHZhciBkZXB0aCA9IDBcbiAgICB2YXIgaW5hY3RpdmUgPSBmYWxzZVxuXG4gICAgd2hpbGUgKHBhcmVudCkge1xuICAgICAgaWYgKHBhcmVudC4kdm5vZGUgJiYgcGFyZW50LiR2bm9kZS5kYXRhLnJvdXRlclZpZXcpIHtcbiAgICAgICAgZGVwdGgrK1xuICAgICAgfVxuICAgICAgaWYgKHBhcmVudC5faW5hY3RpdmUpIHtcbiAgICAgICAgaW5hY3RpdmUgPSB0cnVlXG4gICAgICB9XG4gICAgICBwYXJlbnQgPSBwYXJlbnQuJHBhcmVudFxuICAgIH1cblxuICAgIGRhdGEucm91dGVyVmlld0RlcHRoID0gZGVwdGhcbiAgICB2YXIgbWF0Y2hlZCA9IHJvdXRlLm1hdGNoZWRbZGVwdGhdXG4gICAgaWYgKCFtYXRjaGVkKSB7XG4gICAgICByZXR1cm4gaCgpXG4gICAgfVxuXG4gICAgdmFyIG5hbWUgPSBwcm9wcy5uYW1lXG4gICAgdmFyIGNvbXBvbmVudCA9IGluYWN0aXZlXG4gICAgICA/IGNhY2hlW25hbWVdXG4gICAgICA6IChjYWNoZVtuYW1lXSA9IG1hdGNoZWQuY29tcG9uZW50c1tuYW1lXSlcblxuICAgIGlmICghaW5hY3RpdmUpIHtcbiAgICAgIHZhciBob29rcyA9IGRhdGEuaG9vayB8fCAoZGF0YS5ob29rID0ge30pXG4gICAgICBob29rcy5pbml0ID0gZnVuY3Rpb24gKHZub2RlKSB7XG4gICAgICAgIG1hdGNoZWQuaW5zdGFuY2VzW25hbWVdID0gdm5vZGUuY2hpbGRcbiAgICAgIH1cbiAgICAgIGhvb2tzLnByZXBhdGNoID0gZnVuY3Rpb24gKG9sZFZub2RlLCB2bm9kZSkge1xuICAgICAgICBtYXRjaGVkLmluc3RhbmNlc1tuYW1lXSA9IHZub2RlLmNoaWxkXG4gICAgICB9XG4gICAgICBob29rcy5kZXN0cm95ID0gZnVuY3Rpb24gKHZub2RlKSB7XG4gICAgICAgIGlmIChtYXRjaGVkLmluc3RhbmNlc1tuYW1lXSA9PT0gdm5vZGUuY2hpbGQpIHtcbiAgICAgICAgICBtYXRjaGVkLmluc3RhbmNlc1tuYW1lXSA9IHVuZGVmaW5lZFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGgoY29tcG9uZW50LCBkYXRhLCBjaGlsZHJlbilcbiAgfVxufVxuXG4vKiAgKi9cblxuZnVuY3Rpb24gcmVzb2x2ZVBhdGggKFxuICByZWxhdGl2ZSxcbiAgYmFzZSxcbiAgYXBwZW5kXG4pIHtcbiAgaWYgKHJlbGF0aXZlLmNoYXJBdCgwKSA9PT0gJy8nKSB7XG4gICAgcmV0dXJuIHJlbGF0aXZlXG4gIH1cblxuICBpZiAocmVsYXRpdmUuY2hhckF0KDApID09PSAnPycgfHwgcmVsYXRpdmUuY2hhckF0KDApID09PSAnIycpIHtcbiAgICByZXR1cm4gYmFzZSArIHJlbGF0aXZlXG4gIH1cblxuICB2YXIgc3RhY2sgPSBiYXNlLnNwbGl0KCcvJylcblxuICAvLyByZW1vdmUgdHJhaWxpbmcgc2VnbWVudCBpZjpcbiAgLy8gLSBub3QgYXBwZW5kaW5nXG4gIC8vIC0gYXBwZW5kaW5nIHRvIHRyYWlsaW5nIHNsYXNoIChsYXN0IHNlZ21lbnQgaXMgZW1wdHkpXG4gIGlmICghYXBwZW5kIHx8ICFzdGFja1tzdGFjay5sZW5ndGggLSAxXSkge1xuICAgIHN0YWNrLnBvcCgpXG4gIH1cblxuICAvLyByZXNvbHZlIHJlbGF0aXZlIHBhdGhcbiAgdmFyIHNlZ21lbnRzID0gcmVsYXRpdmUucmVwbGFjZSgvXlxcLy8sICcnKS5zcGxpdCgnLycpXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc2VnbWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgc2VnbWVudCA9IHNlZ21lbnRzW2ldXG4gICAgaWYgKHNlZ21lbnQgPT09ICcuJykge1xuICAgICAgY29udGludWVcbiAgICB9IGVsc2UgaWYgKHNlZ21lbnQgPT09ICcuLicpIHtcbiAgICAgIHN0YWNrLnBvcCgpXG4gICAgfSBlbHNlIHtcbiAgICAgIHN0YWNrLnB1c2goc2VnbWVudClcbiAgICB9XG4gIH1cblxuICAvLyBlbnN1cmUgbGVhZGluZyBzbGFzaFxuICBpZiAoc3RhY2tbMF0gIT09ICcnKSB7XG4gICAgc3RhY2sudW5zaGlmdCgnJylcbiAgfVxuXG4gIHJldHVybiBzdGFjay5qb2luKCcvJylcbn1cblxuZnVuY3Rpb24gcGFyc2VQYXRoIChwYXRoKSB7XG4gIHZhciBoYXNoID0gJydcbiAgdmFyIHF1ZXJ5ID0gJydcblxuICB2YXIgaGFzaEluZGV4ID0gcGF0aC5pbmRleE9mKCcjJylcbiAgaWYgKGhhc2hJbmRleCA+PSAwKSB7XG4gICAgaGFzaCA9IHBhdGguc2xpY2UoaGFzaEluZGV4KVxuICAgIHBhdGggPSBwYXRoLnNsaWNlKDAsIGhhc2hJbmRleClcbiAgfVxuXG4gIHZhciBxdWVyeUluZGV4ID0gcGF0aC5pbmRleE9mKCc/JylcbiAgaWYgKHF1ZXJ5SW5kZXggPj0gMCkge1xuICAgIHF1ZXJ5ID0gcGF0aC5zbGljZShxdWVyeUluZGV4ICsgMSlcbiAgICBwYXRoID0gcGF0aC5zbGljZSgwLCBxdWVyeUluZGV4KVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBwYXRoOiBwYXRoLFxuICAgIHF1ZXJ5OiBxdWVyeSxcbiAgICBoYXNoOiBoYXNoXG4gIH1cbn1cblxuZnVuY3Rpb24gY2xlYW5QYXRoIChwYXRoKSB7XG4gIHJldHVybiBwYXRoLnJlcGxhY2UoL1xcL1xcLy9nLCAnLycpXG59XG5cbi8qICAqL1xuXG5mdW5jdGlvbiBhc3NlcnQgKGNvbmRpdGlvbiwgbWVzc2FnZSkge1xuICBpZiAoIWNvbmRpdGlvbikge1xuICAgIHRocm93IG5ldyBFcnJvcigoXCJbdnVlLXJvdXRlcl0gXCIgKyBtZXNzYWdlKSlcbiAgfVxufVxuXG5mdW5jdGlvbiB3YXJuIChjb25kaXRpb24sIG1lc3NhZ2UpIHtcbiAgaWYgKCFjb25kaXRpb24pIHtcbiAgICB0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcgJiYgY29uc29sZS53YXJuKChcIlt2dWUtcm91dGVyXSBcIiArIG1lc3NhZ2UpKVxuICB9XG59XG5cbi8qICAqL1xuXG52YXIgZW5jb2RlID0gZW5jb2RlVVJJQ29tcG9uZW50XG52YXIgZGVjb2RlID0gZGVjb2RlVVJJQ29tcG9uZW50XG5cbmZ1bmN0aW9uIHJlc29sdmVRdWVyeSAoXG4gIHF1ZXJ5LFxuICBleHRyYVF1ZXJ5XG4pIHtcbiAgaWYgKCBleHRyYVF1ZXJ5ID09PSB2b2lkIDAgKSBleHRyYVF1ZXJ5ID0ge307XG5cbiAgaWYgKHF1ZXJ5KSB7XG4gICAgdmFyIHBhcnNlZFF1ZXJ5XG4gICAgdHJ5IHtcbiAgICAgIHBhcnNlZFF1ZXJ5ID0gcGFyc2VRdWVyeShxdWVyeSlcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICB3YXJuKGZhbHNlLCBlLm1lc3NhZ2UpXG4gICAgICBwYXJzZWRRdWVyeSA9IHt9XG4gICAgfVxuICAgIGZvciAodmFyIGtleSBpbiBleHRyYVF1ZXJ5KSB7XG4gICAgICBwYXJzZWRRdWVyeVtrZXldID0gZXh0cmFRdWVyeVtrZXldXG4gICAgfVxuICAgIHJldHVybiBwYXJzZWRRdWVyeVxuICB9IGVsc2Uge1xuICAgIHJldHVybiBleHRyYVF1ZXJ5XG4gIH1cbn1cblxuZnVuY3Rpb24gcGFyc2VRdWVyeSAocXVlcnkpIHtcbiAgdmFyIHJlcyA9IHt9XG5cbiAgcXVlcnkgPSBxdWVyeS50cmltKCkucmVwbGFjZSgvXihcXD98I3wmKS8sICcnKVxuXG4gIGlmICghcXVlcnkpIHtcbiAgICByZXR1cm4gcmVzXG4gIH1cblxuICBxdWVyeS5zcGxpdCgnJicpLmZvckVhY2goZnVuY3Rpb24gKHBhcmFtKSB7XG4gICAgdmFyIHBhcnRzID0gcGFyYW0ucmVwbGFjZSgvXFwrL2csICcgJykuc3BsaXQoJz0nKVxuICAgIHZhciBrZXkgPSBkZWNvZGUocGFydHMuc2hpZnQoKSlcbiAgICB2YXIgdmFsID0gcGFydHMubGVuZ3RoID4gMFxuICAgICAgPyBkZWNvZGUocGFydHMuam9pbignPScpKVxuICAgICAgOiBudWxsXG5cbiAgICBpZiAocmVzW2tleV0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmVzW2tleV0gPSB2YWxcbiAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkocmVzW2tleV0pKSB7XG4gICAgICByZXNba2V5XS5wdXNoKHZhbClcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzW2tleV0gPSBbcmVzW2tleV0sIHZhbF1cbiAgICB9XG4gIH0pXG5cbiAgcmV0dXJuIHJlc1xufVxuXG5mdW5jdGlvbiBzdHJpbmdpZnlRdWVyeSAob2JqKSB7XG4gIHZhciByZXMgPSBvYmogPyBPYmplY3Qua2V5cyhvYmopLnNvcnQoKS5tYXAoZnVuY3Rpb24gKGtleSkge1xuICAgIHZhciB2YWwgPSBvYmpba2V5XVxuXG4gICAgaWYgKHZhbCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gJydcbiAgICB9XG5cbiAgICBpZiAodmFsID09PSBudWxsKSB7XG4gICAgICByZXR1cm4gZW5jb2RlKGtleSlcbiAgICB9XG5cbiAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWwpKSB7XG4gICAgICB2YXIgcmVzdWx0ID0gW11cbiAgICAgIHZhbC5zbGljZSgpLmZvckVhY2goZnVuY3Rpb24gKHZhbDIpIHtcbiAgICAgICAgaWYgKHZhbDIgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICAgIGlmICh2YWwyID09PSBudWxsKSB7XG4gICAgICAgICAgcmVzdWx0LnB1c2goZW5jb2RlKGtleSkpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmVzdWx0LnB1c2goZW5jb2RlKGtleSkgKyAnPScgKyBlbmNvZGUodmFsMikpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICByZXR1cm4gcmVzdWx0LmpvaW4oJyYnKVxuICAgIH1cblxuICAgIHJldHVybiBlbmNvZGUoa2V5KSArICc9JyArIGVuY29kZSh2YWwpXG4gIH0pLmZpbHRlcihmdW5jdGlvbiAoeCkgeyByZXR1cm4geC5sZW5ndGggPiAwOyB9KS5qb2luKCcmJykgOiBudWxsXG4gIHJldHVybiByZXMgPyAoXCI/XCIgKyByZXMpIDogJydcbn1cblxuLyogICovXG5cbmZ1bmN0aW9uIGNyZWF0ZVJvdXRlIChcbiAgcmVjb3JkLFxuICBsb2NhdGlvbixcbiAgcmVkaXJlY3RlZEZyb21cbikge1xuICB2YXIgcm91dGUgPSB7XG4gICAgbmFtZTogbG9jYXRpb24ubmFtZSB8fCAocmVjb3JkICYmIHJlY29yZC5uYW1lKSxcbiAgICBtZXRhOiAocmVjb3JkICYmIHJlY29yZC5tZXRhKSB8fCB7fSxcbiAgICBwYXRoOiBsb2NhdGlvbi5wYXRoIHx8ICcvJyxcbiAgICBoYXNoOiBsb2NhdGlvbi5oYXNoIHx8ICcnLFxuICAgIHF1ZXJ5OiBsb2NhdGlvbi5xdWVyeSB8fCB7fSxcbiAgICBwYXJhbXM6IGxvY2F0aW9uLnBhcmFtcyB8fCB7fSxcbiAgICBmdWxsUGF0aDogZ2V0RnVsbFBhdGgobG9jYXRpb24pLFxuICAgIG1hdGNoZWQ6IHJlY29yZCA/IGZvcm1hdE1hdGNoKHJlY29yZCkgOiBbXVxuICB9XG4gIGlmIChyZWRpcmVjdGVkRnJvbSkge1xuICAgIHJvdXRlLnJlZGlyZWN0ZWRGcm9tID0gZ2V0RnVsbFBhdGgocmVkaXJlY3RlZEZyb20pXG4gIH1cbiAgcmV0dXJuIE9iamVjdC5mcmVlemUocm91dGUpXG59XG5cbi8vIHRoZSBzdGFydGluZyByb3V0ZSB0aGF0IHJlcHJlc2VudHMgdGhlIGluaXRpYWwgc3RhdGVcbnZhciBTVEFSVCA9IGNyZWF0ZVJvdXRlKG51bGwsIHtcbiAgcGF0aDogJy8nXG59KVxuXG5mdW5jdGlvbiBmb3JtYXRNYXRjaCAocmVjb3JkKSB7XG4gIHZhciByZXMgPSBbXVxuICB3aGlsZSAocmVjb3JkKSB7XG4gICAgcmVzLnVuc2hpZnQocmVjb3JkKVxuICAgIHJlY29yZCA9IHJlY29yZC5wYXJlbnRcbiAgfVxuICByZXR1cm4gcmVzXG59XG5cbmZ1bmN0aW9uIGdldEZ1bGxQYXRoIChyZWYpIHtcbiAgdmFyIHBhdGggPSByZWYucGF0aDtcbiAgdmFyIHF1ZXJ5ID0gcmVmLnF1ZXJ5OyBpZiAoIHF1ZXJ5ID09PSB2b2lkIDAgKSBxdWVyeSA9IHt9O1xuICB2YXIgaGFzaCA9IHJlZi5oYXNoOyBpZiAoIGhhc2ggPT09IHZvaWQgMCApIGhhc2ggPSAnJztcblxuICByZXR1cm4gKHBhdGggfHwgJy8nKSArIHN0cmluZ2lmeVF1ZXJ5KHF1ZXJ5KSArIGhhc2hcbn1cblxudmFyIHRyYWlsaW5nU2xhc2hSRSA9IC9cXC8kL1xuZnVuY3Rpb24gaXNTYW1lUm91dGUgKGEsIGIpIHtcbiAgaWYgKGIgPT09IFNUQVJUKSB7XG4gICAgcmV0dXJuIGEgPT09IGJcbiAgfSBlbHNlIGlmICghYikge1xuICAgIHJldHVybiBmYWxzZVxuICB9IGVsc2UgaWYgKGEucGF0aCAmJiBiLnBhdGgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgYS5wYXRoLnJlcGxhY2UodHJhaWxpbmdTbGFzaFJFLCAnJykgPT09IGIucGF0aC5yZXBsYWNlKHRyYWlsaW5nU2xhc2hSRSwgJycpICYmXG4gICAgICBhLmhhc2ggPT09IGIuaGFzaCAmJlxuICAgICAgaXNPYmplY3RFcXVhbChhLnF1ZXJ5LCBiLnF1ZXJ5KVxuICAgIClcbiAgfSBlbHNlIGlmIChhLm5hbWUgJiYgYi5uYW1lKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIGEubmFtZSA9PT0gYi5uYW1lICYmXG4gICAgICBhLmhhc2ggPT09IGIuaGFzaCAmJlxuICAgICAgaXNPYmplY3RFcXVhbChhLnF1ZXJ5LCBiLnF1ZXJ5KSAmJlxuICAgICAgaXNPYmplY3RFcXVhbChhLnBhcmFtcywgYi5wYXJhbXMpXG4gICAgKVxuICB9IGVsc2Uge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG59XG5cbmZ1bmN0aW9uIGlzT2JqZWN0RXF1YWwgKGEsIGIpIHtcbiAgaWYgKCBhID09PSB2b2lkIDAgKSBhID0ge307XG4gIGlmICggYiA9PT0gdm9pZCAwICkgYiA9IHt9O1xuXG4gIHZhciBhS2V5cyA9IE9iamVjdC5rZXlzKGEpXG4gIHZhciBiS2V5cyA9IE9iamVjdC5rZXlzKGIpXG4gIGlmIChhS2V5cy5sZW5ndGggIT09IGJLZXlzLmxlbmd0aCkge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG4gIHJldHVybiBhS2V5cy5ldmVyeShmdW5jdGlvbiAoa2V5KSB7IHJldHVybiBTdHJpbmcoYVtrZXldKSA9PT0gU3RyaW5nKGJba2V5XSk7IH0pXG59XG5cbmZ1bmN0aW9uIGlzSW5jbHVkZWRSb3V0ZSAoY3VycmVudCwgdGFyZ2V0KSB7XG4gIHJldHVybiAoXG4gICAgY3VycmVudC5wYXRoLmluZGV4T2YodGFyZ2V0LnBhdGgucmVwbGFjZSgvXFwvJC8sICcnKSkgPT09IDAgJiZcbiAgICAoIXRhcmdldC5oYXNoIHx8IGN1cnJlbnQuaGFzaCA9PT0gdGFyZ2V0Lmhhc2gpICYmXG4gICAgcXVlcnlJbmNsdWRlcyhjdXJyZW50LnF1ZXJ5LCB0YXJnZXQucXVlcnkpXG4gIClcbn1cblxuZnVuY3Rpb24gcXVlcnlJbmNsdWRlcyAoY3VycmVudCwgdGFyZ2V0KSB7XG4gIGZvciAodmFyIGtleSBpbiB0YXJnZXQpIHtcbiAgICBpZiAoIShrZXkgaW4gY3VycmVudCkpIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cbiAgfVxuICByZXR1cm4gdHJ1ZVxufVxuXG4vKiAgKi9cblxuZnVuY3Rpb24gbm9ybWFsaXplTG9jYXRpb24gKFxuICByYXcsXG4gIGN1cnJlbnQsXG4gIGFwcGVuZFxuKSB7XG4gIHZhciBuZXh0ID0gdHlwZW9mIHJhdyA9PT0gJ3N0cmluZycgPyB7IHBhdGg6IHJhdyB9IDogcmF3XG4gIGlmIChuZXh0Lm5hbWUgfHwgbmV4dC5fbm9ybWFsaXplZCkge1xuICAgIHJldHVybiBuZXh0XG4gIH1cblxuICB2YXIgcGFyc2VkUGF0aCA9IHBhcnNlUGF0aChuZXh0LnBhdGggfHwgJycpXG4gIHZhciBiYXNlUGF0aCA9IChjdXJyZW50ICYmIGN1cnJlbnQucGF0aCkgfHwgJy8nXG4gIHZhciBwYXRoID0gcGFyc2VkUGF0aC5wYXRoXG4gICAgPyByZXNvbHZlUGF0aChwYXJzZWRQYXRoLnBhdGgsIGJhc2VQYXRoLCBhcHBlbmQpXG4gICAgOiAoY3VycmVudCAmJiBjdXJyZW50LnBhdGgpIHx8ICcvJ1xuICB2YXIgcXVlcnkgPSByZXNvbHZlUXVlcnkocGFyc2VkUGF0aC5xdWVyeSwgbmV4dC5xdWVyeSlcbiAgdmFyIGhhc2ggPSBuZXh0Lmhhc2ggfHwgcGFyc2VkUGF0aC5oYXNoXG4gIGlmIChoYXNoICYmIGhhc2guY2hhckF0KDApICE9PSAnIycpIHtcbiAgICBoYXNoID0gXCIjXCIgKyBoYXNoXG4gIH1cblxuICByZXR1cm4ge1xuICAgIF9ub3JtYWxpemVkOiB0cnVlLFxuICAgIHBhdGg6IHBhdGgsXG4gICAgcXVlcnk6IHF1ZXJ5LFxuICAgIGhhc2g6IGhhc2hcbiAgfVxufVxuXG4vKiAgKi9cblxuLy8gd29yayBhcm91bmQgd2VpcmQgZmxvdyBidWdcbnZhciB0b1R5cGVzID0gW1N0cmluZywgT2JqZWN0XVxuXG52YXIgTGluayA9IHtcbiAgbmFtZTogJ3JvdXRlci1saW5rJyxcbiAgcHJvcHM6IHtcbiAgICB0bzoge1xuICAgICAgdHlwZTogdG9UeXBlcyxcbiAgICAgIHJlcXVpcmVkOiB0cnVlXG4gICAgfSxcbiAgICB0YWc6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQ6ICdhJ1xuICAgIH0sXG4gICAgZXhhY3Q6IEJvb2xlYW4sXG4gICAgYXBwZW5kOiBCb29sZWFuLFxuICAgIHJlcGxhY2U6IEJvb2xlYW4sXG4gICAgYWN0aXZlQ2xhc3M6IFN0cmluZ1xuICB9LFxuICByZW5kZXI6IGZ1bmN0aW9uIHJlbmRlciAoaCkge1xuICAgIHZhciB0aGlzJDEgPSB0aGlzO1xuXG4gICAgdmFyIHJvdXRlciA9IHRoaXMuJHJvdXRlclxuICAgIHZhciBjdXJyZW50ID0gdGhpcy4kcm91dGVcbiAgICB2YXIgdG8gPSBub3JtYWxpemVMb2NhdGlvbih0aGlzLnRvLCBjdXJyZW50LCB0aGlzLmFwcGVuZClcbiAgICB2YXIgcmVzb2x2ZWQgPSByb3V0ZXIubWF0Y2godG8sIGN1cnJlbnQpXG4gICAgdmFyIGZ1bGxQYXRoID0gcmVzb2x2ZWQucmVkaXJlY3RlZEZyb20gfHwgcmVzb2x2ZWQuZnVsbFBhdGhcbiAgICB2YXIgYmFzZSA9IHJvdXRlci5oaXN0b3J5LmJhc2VcbiAgICB2YXIgaHJlZiA9IGNyZWF0ZUhyZWYoYmFzZSwgZnVsbFBhdGgsIHJvdXRlci5tb2RlKVxuICAgIHZhciBjbGFzc2VzID0ge31cbiAgICB2YXIgYWN0aXZlQ2xhc3MgPSB0aGlzLmFjdGl2ZUNsYXNzIHx8IHJvdXRlci5vcHRpb25zLmxpbmtBY3RpdmVDbGFzcyB8fCAncm91dGVyLWxpbmstYWN0aXZlJ1xuICAgIHZhciBjb21wYXJlVGFyZ2V0ID0gdG8ucGF0aCA/IGNyZWF0ZVJvdXRlKG51bGwsIHRvKSA6IHJlc29sdmVkXG4gICAgY2xhc3Nlc1thY3RpdmVDbGFzc10gPSB0aGlzLmV4YWN0XG4gICAgICA/IGlzU2FtZVJvdXRlKGN1cnJlbnQsIGNvbXBhcmVUYXJnZXQpXG4gICAgICA6IGlzSW5jbHVkZWRSb3V0ZShjdXJyZW50LCBjb21wYXJlVGFyZ2V0KVxuXG4gICAgdmFyIG9uID0ge1xuICAgICAgY2xpY2s6IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIC8vIGRvbid0IHJlZGlyZWN0IHdpdGggY29udHJvbCBrZXlzXG4gICAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICAgICAgICBpZiAoZS5tZXRhS2V5IHx8IGUuY3RybEtleSB8fCBlLnNoaWZ0S2V5KSB7IHJldHVybiB9XG4gICAgICAgIC8vIGRvbid0IHJlZGlyZWN0IHdoZW4gcHJldmVudERlZmF1bHQgY2FsbGVkXG4gICAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICAgICAgICBpZiAoZS5kZWZhdWx0UHJldmVudGVkKSB7IHJldHVybiB9XG4gICAgICAgIC8vIGRvbid0IHJlZGlyZWN0IG9uIHJpZ2h0IGNsaWNrXG4gICAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICAgICAgICBpZiAoZS5idXR0b24gIT09IDApIHsgcmV0dXJuIH1cbiAgICAgICAgLy8gZG9uJ3QgcmVkaXJlY3QgaWYgYHRhcmdldD1cIl9ibGFua1wiYFxuICAgICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgICAgICAgdmFyIHRhcmdldCA9IGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgndGFyZ2V0JylcbiAgICAgICAgaWYgKC9cXGJfYmxhbmtcXGIvaS50ZXN0KHRhcmdldCkpIHsgcmV0dXJuIH1cblxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgaWYgKHRoaXMkMS5yZXBsYWNlKSB7XG4gICAgICAgICAgcm91dGVyLnJlcGxhY2UodG8pXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcm91dGVyLnB1c2godG8pXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgZGF0YSA9IHtcbiAgICAgIGNsYXNzOiBjbGFzc2VzXG4gICAgfVxuXG4gICAgaWYgKHRoaXMudGFnID09PSAnYScpIHtcbiAgICAgIGRhdGEub24gPSBvblxuICAgICAgZGF0YS5hdHRycyA9IHsgaHJlZjogaHJlZiB9XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGZpbmQgdGhlIGZpcnN0IDxhPiBjaGlsZCBhbmQgYXBwbHkgbGlzdGVuZXIgYW5kIGhyZWZcbiAgICAgIHZhciBhID0gZmluZEFuY2hvcih0aGlzLiRzbG90cy5kZWZhdWx0KVxuICAgICAgaWYgKGEpIHtcbiAgICAgICAgLy8gaW4gY2FzZSB0aGUgPGE+IGlzIGEgc3RhdGljIG5vZGVcbiAgICAgICAgYS5pc1N0YXRpYyA9IGZhbHNlXG4gICAgICAgIHZhciBleHRlbmQgPSBfVnVlLnV0aWwuZXh0ZW5kXG4gICAgICAgIHZhciBhRGF0YSA9IGEuZGF0YSA9IGV4dGVuZCh7fSwgYS5kYXRhKVxuICAgICAgICBhRGF0YS5vbiA9IG9uXG4gICAgICAgIHZhciBhQXR0cnMgPSBhLmRhdGEuYXR0cnMgPSBleHRlbmQoe30sIGEuZGF0YS5hdHRycylcbiAgICAgICAgYUF0dHJzLmhyZWYgPSBocmVmXG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBkb2Vzbid0IGhhdmUgPGE+IGNoaWxkLCBhcHBseSBsaXN0ZW5lciB0byBzZWxmXG4gICAgICAgIGRhdGEub24gPSBvblxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBoKHRoaXMudGFnLCBkYXRhLCB0aGlzLiRzbG90cy5kZWZhdWx0KVxuICB9XG59XG5cbmZ1bmN0aW9uIGZpbmRBbmNob3IgKGNoaWxkcmVuKSB7XG4gIGlmIChjaGlsZHJlbikge1xuICAgIHZhciBjaGlsZFxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNoaWxkID0gY2hpbGRyZW5baV1cbiAgICAgIGlmIChjaGlsZC50YWcgPT09ICdhJykge1xuICAgICAgICByZXR1cm4gY2hpbGRcbiAgICAgIH1cbiAgICAgIGlmIChjaGlsZC5jaGlsZHJlbiAmJiAoY2hpbGQgPSBmaW5kQW5jaG9yKGNoaWxkLmNoaWxkcmVuKSkpIHtcbiAgICAgICAgcmV0dXJuIGNoaWxkXG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUhyZWYgKGJhc2UsIGZ1bGxQYXRoLCBtb2RlKSB7XG4gIHZhciBwYXRoID0gbW9kZSA9PT0gJ2hhc2gnID8gJy8jJyArIGZ1bGxQYXRoIDogZnVsbFBhdGhcbiAgcmV0dXJuIGJhc2UgPyBjbGVhblBhdGgoYmFzZSArIHBhdGgpIDogcGF0aFxufVxuXG52YXIgX1Z1ZVxuXG5mdW5jdGlvbiBpbnN0YWxsIChWdWUpIHtcbiAgaWYgKGluc3RhbGwuaW5zdGFsbGVkKSB7IHJldHVybiB9XG4gIGluc3RhbGwuaW5zdGFsbGVkID0gdHJ1ZVxuXG4gIF9WdWUgPSBWdWVcblxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoVnVlLnByb3RvdHlwZSwgJyRyb3V0ZXInLCB7XG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQgKCkgeyByZXR1cm4gdGhpcy4kcm9vdC5fcm91dGVyIH1cbiAgfSlcblxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoVnVlLnByb3RvdHlwZSwgJyRyb3V0ZScsIHtcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCQxICgpIHsgcmV0dXJuIHRoaXMuJHJvb3QuX3JvdXRlIH1cbiAgfSlcblxuICBWdWUubWl4aW4oe1xuICAgIGJlZm9yZUNyZWF0ZTogZnVuY3Rpb24gYmVmb3JlQ3JlYXRlICgpIHtcbiAgICAgIGlmICh0aGlzLiRvcHRpb25zLnJvdXRlcikge1xuICAgICAgICB0aGlzLl9yb3V0ZXIgPSB0aGlzLiRvcHRpb25zLnJvdXRlclxuICAgICAgICB0aGlzLl9yb3V0ZXIuaW5pdCh0aGlzKVxuICAgICAgICBWdWUudXRpbC5kZWZpbmVSZWFjdGl2ZSh0aGlzLCAnX3JvdXRlJywgdGhpcy5fcm91dGVyLmhpc3RvcnkuY3VycmVudClcbiAgICAgIH1cbiAgICB9XG4gIH0pXG5cbiAgVnVlLmNvbXBvbmVudCgncm91dGVyLXZpZXcnLCBWaWV3KVxuICBWdWUuY29tcG9uZW50KCdyb3V0ZXItbGluaycsIExpbmspXG5cbiAgdmFyIHN0cmF0cyA9IFZ1ZS5jb25maWcub3B0aW9uTWVyZ2VTdHJhdGVnaWVzXG4gIC8vIHVzZSB0aGUgc2FtZSBob29rIG1lcmdpbmcgc3RyYXRlZ3kgZm9yIHJvdXRlIGhvb2tzXG4gIHN0cmF0cy5iZWZvcmVSb3V0ZUVudGVyID0gc3RyYXRzLmJlZm9yZVJvdXRlTGVhdmUgPSBzdHJhdHMuY3JlYXRlZFxufVxuXG52YXIgX19tb2R1bGVFeHBvcnRzID0gQXJyYXkuaXNBcnJheSB8fCBmdW5jdGlvbiAoYXJyKSB7XG4gIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoYXJyKSA9PSAnW29iamVjdCBBcnJheV0nO1xufTtcblxudmFyIGlzYXJyYXkgPSBfX21vZHVsZUV4cG9ydHNcblxuLyoqXG4gKiBFeHBvc2UgYHBhdGhUb1JlZ2V4cGAuXG4gKi9cbnZhciBpbmRleCA9IHBhdGhUb1JlZ2V4cFxudmFyIHBhcnNlXzEgPSBwYXJzZVxudmFyIGNvbXBpbGVfMSA9IGNvbXBpbGVcbnZhciB0b2tlbnNUb0Z1bmN0aW9uXzEgPSB0b2tlbnNUb0Z1bmN0aW9uXG52YXIgdG9rZW5zVG9SZWdFeHBfMSA9IHRva2Vuc1RvUmVnRXhwXG5cbi8qKlxuICogVGhlIG1haW4gcGF0aCBtYXRjaGluZyByZWdleHAgdXRpbGl0eS5cbiAqXG4gKiBAdHlwZSB7UmVnRXhwfVxuICovXG52YXIgUEFUSF9SRUdFWFAgPSBuZXcgUmVnRXhwKFtcbiAgLy8gTWF0Y2ggZXNjYXBlZCBjaGFyYWN0ZXJzIHRoYXQgd291bGQgb3RoZXJ3aXNlIGFwcGVhciBpbiBmdXR1cmUgbWF0Y2hlcy5cbiAgLy8gVGhpcyBhbGxvd3MgdGhlIHVzZXIgdG8gZXNjYXBlIHNwZWNpYWwgY2hhcmFjdGVycyB0aGF0IHdvbid0IHRyYW5zZm9ybS5cbiAgJyhcXFxcXFxcXC4pJyxcbiAgLy8gTWF0Y2ggRXhwcmVzcy1zdHlsZSBwYXJhbWV0ZXJzIGFuZCB1bi1uYW1lZCBwYXJhbWV0ZXJzIHdpdGggYSBwcmVmaXhcbiAgLy8gYW5kIG9wdGlvbmFsIHN1ZmZpeGVzLiBNYXRjaGVzIGFwcGVhciBhczpcbiAgLy9cbiAgLy8gXCIvOnRlc3QoXFxcXGQrKT9cIiA9PiBbXCIvXCIsIFwidGVzdFwiLCBcIlxcZCtcIiwgdW5kZWZpbmVkLCBcIj9cIiwgdW5kZWZpbmVkXVxuICAvLyBcIi9yb3V0ZShcXFxcZCspXCIgID0+IFt1bmRlZmluZWQsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCBcIlxcZCtcIiwgdW5kZWZpbmVkLCB1bmRlZmluZWRdXG4gIC8vIFwiLypcIiAgICAgICAgICAgID0+IFtcIi9cIiwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCBcIipcIl1cbiAgJyhbXFxcXC8uXSk/KD86KD86XFxcXDooXFxcXHcrKSg/OlxcXFwoKCg/OlxcXFxcXFxcLnxbXlxcXFxcXFxcKCldKSspXFxcXCkpP3xcXFxcKCgoPzpcXFxcXFxcXC58W15cXFxcXFxcXCgpXSkrKVxcXFwpKShbKyo/XSk/fChcXFxcKikpJ1xuXS5qb2luKCd8JyksICdnJylcblxuLyoqXG4gKiBQYXJzZSBhIHN0cmluZyBmb3IgdGhlIHJhdyB0b2tlbnMuXG4gKlxuICogQHBhcmFtICB7c3RyaW5nfSAgc3RyXG4gKiBAcGFyYW0gIHtPYmplY3Q9fSBvcHRpb25zXG4gKiBAcmV0dXJuIHshQXJyYXl9XG4gKi9cbmZ1bmN0aW9uIHBhcnNlIChzdHIsIG9wdGlvbnMpIHtcbiAgdmFyIHRva2VucyA9IFtdXG4gIHZhciBrZXkgPSAwXG4gIHZhciBpbmRleCA9IDBcbiAgdmFyIHBhdGggPSAnJ1xuICB2YXIgZGVmYXVsdERlbGltaXRlciA9IG9wdGlvbnMgJiYgb3B0aW9ucy5kZWxpbWl0ZXIgfHwgJy8nXG4gIHZhciByZXNcblxuICB3aGlsZSAoKHJlcyA9IFBBVEhfUkVHRVhQLmV4ZWMoc3RyKSkgIT0gbnVsbCkge1xuICAgIHZhciBtID0gcmVzWzBdXG4gICAgdmFyIGVzY2FwZWQgPSByZXNbMV1cbiAgICB2YXIgb2Zmc2V0ID0gcmVzLmluZGV4XG4gICAgcGF0aCArPSBzdHIuc2xpY2UoaW5kZXgsIG9mZnNldClcbiAgICBpbmRleCA9IG9mZnNldCArIG0ubGVuZ3RoXG5cbiAgICAvLyBJZ25vcmUgYWxyZWFkeSBlc2NhcGVkIHNlcXVlbmNlcy5cbiAgICBpZiAoZXNjYXBlZCkge1xuICAgICAgcGF0aCArPSBlc2NhcGVkWzFdXG4gICAgICBjb250aW51ZVxuICAgIH1cblxuICAgIHZhciBuZXh0ID0gc3RyW2luZGV4XVxuICAgIHZhciBwcmVmaXggPSByZXNbMl1cbiAgICB2YXIgbmFtZSA9IHJlc1szXVxuICAgIHZhciBjYXB0dXJlID0gcmVzWzRdXG4gICAgdmFyIGdyb3VwID0gcmVzWzVdXG4gICAgdmFyIG1vZGlmaWVyID0gcmVzWzZdXG4gICAgdmFyIGFzdGVyaXNrID0gcmVzWzddXG5cbiAgICAvLyBQdXNoIHRoZSBjdXJyZW50IHBhdGggb250byB0aGUgdG9rZW5zLlxuICAgIGlmIChwYXRoKSB7XG4gICAgICB0b2tlbnMucHVzaChwYXRoKVxuICAgICAgcGF0aCA9ICcnXG4gICAgfVxuXG4gICAgdmFyIHBhcnRpYWwgPSBwcmVmaXggIT0gbnVsbCAmJiBuZXh0ICE9IG51bGwgJiYgbmV4dCAhPT0gcHJlZml4XG4gICAgdmFyIHJlcGVhdCA9IG1vZGlmaWVyID09PSAnKycgfHwgbW9kaWZpZXIgPT09ICcqJ1xuICAgIHZhciBvcHRpb25hbCA9IG1vZGlmaWVyID09PSAnPycgfHwgbW9kaWZpZXIgPT09ICcqJ1xuICAgIHZhciBkZWxpbWl0ZXIgPSByZXNbMl0gfHwgZGVmYXVsdERlbGltaXRlclxuICAgIHZhciBwYXR0ZXJuID0gY2FwdHVyZSB8fCBncm91cFxuXG4gICAgdG9rZW5zLnB1c2goe1xuICAgICAgbmFtZTogbmFtZSB8fCBrZXkrKyxcbiAgICAgIHByZWZpeDogcHJlZml4IHx8ICcnLFxuICAgICAgZGVsaW1pdGVyOiBkZWxpbWl0ZXIsXG4gICAgICBvcHRpb25hbDogb3B0aW9uYWwsXG4gICAgICByZXBlYXQ6IHJlcGVhdCxcbiAgICAgIHBhcnRpYWw6IHBhcnRpYWwsXG4gICAgICBhc3RlcmlzazogISFhc3RlcmlzayxcbiAgICAgIHBhdHRlcm46IHBhdHRlcm4gPyBlc2NhcGVHcm91cChwYXR0ZXJuKSA6IChhc3RlcmlzayA/ICcuKicgOiAnW14nICsgZXNjYXBlU3RyaW5nKGRlbGltaXRlcikgKyAnXSs/JylcbiAgICB9KVxuICB9XG5cbiAgLy8gTWF0Y2ggYW55IGNoYXJhY3RlcnMgc3RpbGwgcmVtYWluaW5nLlxuICBpZiAoaW5kZXggPCBzdHIubGVuZ3RoKSB7XG4gICAgcGF0aCArPSBzdHIuc3Vic3RyKGluZGV4KVxuICB9XG5cbiAgLy8gSWYgdGhlIHBhdGggZXhpc3RzLCBwdXNoIGl0IG9udG8gdGhlIGVuZC5cbiAgaWYgKHBhdGgpIHtcbiAgICB0b2tlbnMucHVzaChwYXRoKVxuICB9XG5cbiAgcmV0dXJuIHRva2Vuc1xufVxuXG4vKipcbiAqIENvbXBpbGUgYSBzdHJpbmcgdG8gYSB0ZW1wbGF0ZSBmdW5jdGlvbiBmb3IgdGhlIHBhdGguXG4gKlxuICogQHBhcmFtICB7c3RyaW5nfSAgICAgICAgICAgICBzdHJcbiAqIEBwYXJhbSAge09iamVjdD19ICAgICAgICAgICAgb3B0aW9uc1xuICogQHJldHVybiB7IWZ1bmN0aW9uKE9iamVjdD0sIE9iamVjdD0pfVxuICovXG5mdW5jdGlvbiBjb21waWxlIChzdHIsIG9wdGlvbnMpIHtcbiAgcmV0dXJuIHRva2Vuc1RvRnVuY3Rpb24ocGFyc2Uoc3RyLCBvcHRpb25zKSlcbn1cblxuLyoqXG4gKiBQcmV0dGllciBlbmNvZGluZyBvZiBVUkkgcGF0aCBzZWdtZW50cy5cbiAqXG4gKiBAcGFyYW0gIHtzdHJpbmd9XG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cbmZ1bmN0aW9uIGVuY29kZVVSSUNvbXBvbmVudFByZXR0eSAoc3RyKSB7XG4gIHJldHVybiBlbmNvZGVVUkkoc3RyKS5yZXBsYWNlKC9bXFwvPyNdL2csIGZ1bmN0aW9uIChjKSB7XG4gICAgcmV0dXJuICclJyArIGMuY2hhckNvZGVBdCgwKS50b1N0cmluZygxNikudG9VcHBlckNhc2UoKVxuICB9KVxufVxuXG4vKipcbiAqIEVuY29kZSB0aGUgYXN0ZXJpc2sgcGFyYW1ldGVyLiBTaW1pbGFyIHRvIGBwcmV0dHlgLCBidXQgYWxsb3dzIHNsYXNoZXMuXG4gKlxuICogQHBhcmFtICB7c3RyaW5nfVxuICogQHJldHVybiB7c3RyaW5nfVxuICovXG5mdW5jdGlvbiBlbmNvZGVBc3RlcmlzayAoc3RyKSB7XG4gIHJldHVybiBlbmNvZGVVUkkoc3RyKS5yZXBsYWNlKC9bPyNdL2csIGZ1bmN0aW9uIChjKSB7XG4gICAgcmV0dXJuICclJyArIGMuY2hhckNvZGVBdCgwKS50b1N0cmluZygxNikudG9VcHBlckNhc2UoKVxuICB9KVxufVxuXG4vKipcbiAqIEV4cG9zZSBhIG1ldGhvZCBmb3IgdHJhbnNmb3JtaW5nIHRva2VucyBpbnRvIHRoZSBwYXRoIGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiB0b2tlbnNUb0Z1bmN0aW9uICh0b2tlbnMpIHtcbiAgLy8gQ29tcGlsZSBhbGwgdGhlIHRva2VucyBpbnRvIHJlZ2V4cHMuXG4gIHZhciBtYXRjaGVzID0gbmV3IEFycmF5KHRva2Vucy5sZW5ndGgpXG5cbiAgLy8gQ29tcGlsZSBhbGwgdGhlIHBhdHRlcm5zIGJlZm9yZSBjb21waWxhdGlvbi5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCB0b2tlbnMubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAodHlwZW9mIHRva2Vuc1tpXSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIG1hdGNoZXNbaV0gPSBuZXcgUmVnRXhwKCdeKD86JyArIHRva2Vuc1tpXS5wYXR0ZXJuICsgJykkJylcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24gKG9iaiwgb3B0cykge1xuICAgIHZhciBwYXRoID0gJydcbiAgICB2YXIgZGF0YSA9IG9iaiB8fCB7fVxuICAgIHZhciBvcHRpb25zID0gb3B0cyB8fCB7fVxuICAgIHZhciBlbmNvZGUgPSBvcHRpb25zLnByZXR0eSA/IGVuY29kZVVSSUNvbXBvbmVudFByZXR0eSA6IGVuY29kZVVSSUNvbXBvbmVudFxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0b2tlbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciB0b2tlbiA9IHRva2Vuc1tpXVxuXG4gICAgICBpZiAodHlwZW9mIHRva2VuID09PSAnc3RyaW5nJykge1xuICAgICAgICBwYXRoICs9IHRva2VuXG5cbiAgICAgICAgY29udGludWVcbiAgICAgIH1cblxuICAgICAgdmFyIHZhbHVlID0gZGF0YVt0b2tlbi5uYW1lXVxuICAgICAgdmFyIHNlZ21lbnRcblxuICAgICAgaWYgKHZhbHVlID09IG51bGwpIHtcbiAgICAgICAgaWYgKHRva2VuLm9wdGlvbmFsKSB7XG4gICAgICAgICAgLy8gUHJlcGVuZCBwYXJ0aWFsIHNlZ21lbnQgcHJlZml4ZXMuXG4gICAgICAgICAgaWYgKHRva2VuLnBhcnRpYWwpIHtcbiAgICAgICAgICAgIHBhdGggKz0gdG9rZW4ucHJlZml4XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29udGludWVcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdFeHBlY3RlZCBcIicgKyB0b2tlbi5uYW1lICsgJ1wiIHRvIGJlIGRlZmluZWQnKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChpc2FycmF5KHZhbHVlKSkge1xuICAgICAgICBpZiAoIXRva2VuLnJlcGVhdCkge1xuICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0V4cGVjdGVkIFwiJyArIHRva2VuLm5hbWUgKyAnXCIgdG8gbm90IHJlcGVhdCwgYnV0IHJlY2VpdmVkIGAnICsgSlNPTi5zdHJpbmdpZnkodmFsdWUpICsgJ2AnKVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHZhbHVlLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgIGlmICh0b2tlbi5vcHRpb25hbCkge1xuICAgICAgICAgICAgY29udGludWVcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignRXhwZWN0ZWQgXCInICsgdG9rZW4ubmFtZSArICdcIiB0byBub3QgYmUgZW1wdHknKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgdmFsdWUubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICBzZWdtZW50ID0gZW5jb2RlKHZhbHVlW2pdKVxuXG4gICAgICAgICAgaWYgKCFtYXRjaGVzW2ldLnRlc3Qoc2VnbWVudCkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0V4cGVjdGVkIGFsbCBcIicgKyB0b2tlbi5uYW1lICsgJ1wiIHRvIG1hdGNoIFwiJyArIHRva2VuLnBhdHRlcm4gKyAnXCIsIGJ1dCByZWNlaXZlZCBgJyArIEpTT04uc3RyaW5naWZ5KHNlZ21lbnQpICsgJ2AnKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHBhdGggKz0gKGogPT09IDAgPyB0b2tlbi5wcmVmaXggOiB0b2tlbi5kZWxpbWl0ZXIpICsgc2VnbWVudFxuICAgICAgICB9XG5cbiAgICAgICAgY29udGludWVcbiAgICAgIH1cblxuICAgICAgc2VnbWVudCA9IHRva2VuLmFzdGVyaXNrID8gZW5jb2RlQXN0ZXJpc2sodmFsdWUpIDogZW5jb2RlKHZhbHVlKVxuXG4gICAgICBpZiAoIW1hdGNoZXNbaV0udGVzdChzZWdtZW50KSkge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdFeHBlY3RlZCBcIicgKyB0b2tlbi5uYW1lICsgJ1wiIHRvIG1hdGNoIFwiJyArIHRva2VuLnBhdHRlcm4gKyAnXCIsIGJ1dCByZWNlaXZlZCBcIicgKyBzZWdtZW50ICsgJ1wiJylcbiAgICAgIH1cblxuICAgICAgcGF0aCArPSB0b2tlbi5wcmVmaXggKyBzZWdtZW50XG4gICAgfVxuXG4gICAgcmV0dXJuIHBhdGhcbiAgfVxufVxuXG4vKipcbiAqIEVzY2FwZSBhIHJlZ3VsYXIgZXhwcmVzc2lvbiBzdHJpbmcuXG4gKlxuICogQHBhcmFtICB7c3RyaW5nfSBzdHJcbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xuZnVuY3Rpb24gZXNjYXBlU3RyaW5nIChzdHIpIHtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC8oWy4rKj89XiE6JHt9KClbXFxdfFxcL1xcXFxdKS9nLCAnXFxcXCQxJylcbn1cblxuLyoqXG4gKiBFc2NhcGUgdGhlIGNhcHR1cmluZyBncm91cCBieSBlc2NhcGluZyBzcGVjaWFsIGNoYXJhY3RlcnMgYW5kIG1lYW5pbmcuXG4gKlxuICogQHBhcmFtICB7c3RyaW5nfSBncm91cFxuICogQHJldHVybiB7c3RyaW5nfVxuICovXG5mdW5jdGlvbiBlc2NhcGVHcm91cCAoZ3JvdXApIHtcbiAgcmV0dXJuIGdyb3VwLnJlcGxhY2UoLyhbPSE6JFxcLygpXSkvZywgJ1xcXFwkMScpXG59XG5cbi8qKlxuICogQXR0YWNoIHRoZSBrZXlzIGFzIGEgcHJvcGVydHkgb2YgdGhlIHJlZ2V4cC5cbiAqXG4gKiBAcGFyYW0gIHshUmVnRXhwfSByZVxuICogQHBhcmFtICB7QXJyYXl9ICAga2V5c1xuICogQHJldHVybiB7IVJlZ0V4cH1cbiAqL1xuZnVuY3Rpb24gYXR0YWNoS2V5cyAocmUsIGtleXMpIHtcbiAgcmUua2V5cyA9IGtleXNcbiAgcmV0dXJuIHJlXG59XG5cbi8qKlxuICogR2V0IHRoZSBmbGFncyBmb3IgYSByZWdleHAgZnJvbSB0aGUgb3B0aW9ucy5cbiAqXG4gKiBAcGFyYW0gIHtPYmplY3R9IG9wdGlvbnNcbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xuZnVuY3Rpb24gZmxhZ3MgKG9wdGlvbnMpIHtcbiAgcmV0dXJuIG9wdGlvbnMuc2Vuc2l0aXZlID8gJycgOiAnaSdcbn1cblxuLyoqXG4gKiBQdWxsIG91dCBrZXlzIGZyb20gYSByZWdleHAuXG4gKlxuICogQHBhcmFtICB7IVJlZ0V4cH0gcGF0aFxuICogQHBhcmFtICB7IUFycmF5fSAga2V5c1xuICogQHJldHVybiB7IVJlZ0V4cH1cbiAqL1xuZnVuY3Rpb24gcmVnZXhwVG9SZWdleHAgKHBhdGgsIGtleXMpIHtcbiAgLy8gVXNlIGEgbmVnYXRpdmUgbG9va2FoZWFkIHRvIG1hdGNoIG9ubHkgY2FwdHVyaW5nIGdyb3Vwcy5cbiAgdmFyIGdyb3VwcyA9IHBhdGguc291cmNlLm1hdGNoKC9cXCgoPyFcXD8pL2cpXG5cbiAgaWYgKGdyb3Vwcykge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZ3JvdXBzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBrZXlzLnB1c2goe1xuICAgICAgICBuYW1lOiBpLFxuICAgICAgICBwcmVmaXg6IG51bGwsXG4gICAgICAgIGRlbGltaXRlcjogbnVsbCxcbiAgICAgICAgb3B0aW9uYWw6IGZhbHNlLFxuICAgICAgICByZXBlYXQ6IGZhbHNlLFxuICAgICAgICBwYXJ0aWFsOiBmYWxzZSxcbiAgICAgICAgYXN0ZXJpc2s6IGZhbHNlLFxuICAgICAgICBwYXR0ZXJuOiBudWxsXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBhdHRhY2hLZXlzKHBhdGgsIGtleXMpXG59XG5cbi8qKlxuICogVHJhbnNmb3JtIGFuIGFycmF5IGludG8gYSByZWdleHAuXG4gKlxuICogQHBhcmFtICB7IUFycmF5fSAgcGF0aFxuICogQHBhcmFtICB7QXJyYXl9ICAga2V5c1xuICogQHBhcmFtICB7IU9iamVjdH0gb3B0aW9uc1xuICogQHJldHVybiB7IVJlZ0V4cH1cbiAqL1xuZnVuY3Rpb24gYXJyYXlUb1JlZ2V4cCAocGF0aCwga2V5cywgb3B0aW9ucykge1xuICB2YXIgcGFydHMgPSBbXVxuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcGF0aC5sZW5ndGg7IGkrKykge1xuICAgIHBhcnRzLnB1c2gocGF0aFRvUmVnZXhwKHBhdGhbaV0sIGtleXMsIG9wdGlvbnMpLnNvdXJjZSlcbiAgfVxuXG4gIHZhciByZWdleHAgPSBuZXcgUmVnRXhwKCcoPzonICsgcGFydHMuam9pbignfCcpICsgJyknLCBmbGFncyhvcHRpb25zKSlcblxuICByZXR1cm4gYXR0YWNoS2V5cyhyZWdleHAsIGtleXMpXG59XG5cbi8qKlxuICogQ3JlYXRlIGEgcGF0aCByZWdleHAgZnJvbSBzdHJpbmcgaW5wdXQuXG4gKlxuICogQHBhcmFtICB7c3RyaW5nfSAgcGF0aFxuICogQHBhcmFtICB7IUFycmF5fSAga2V5c1xuICogQHBhcmFtICB7IU9iamVjdH0gb3B0aW9uc1xuICogQHJldHVybiB7IVJlZ0V4cH1cbiAqL1xuZnVuY3Rpb24gc3RyaW5nVG9SZWdleHAgKHBhdGgsIGtleXMsIG9wdGlvbnMpIHtcbiAgcmV0dXJuIHRva2Vuc1RvUmVnRXhwKHBhcnNlKHBhdGgsIG9wdGlvbnMpLCBrZXlzLCBvcHRpb25zKVxufVxuXG4vKipcbiAqIEV4cG9zZSBhIGZ1bmN0aW9uIGZvciB0YWtpbmcgdG9rZW5zIGFuZCByZXR1cm5pbmcgYSBSZWdFeHAuXG4gKlxuICogQHBhcmFtICB7IUFycmF5fSAgICAgICAgICB0b2tlbnNcbiAqIEBwYXJhbSAgeyhBcnJheXxPYmplY3QpPX0ga2V5c1xuICogQHBhcmFtICB7T2JqZWN0PX0gICAgICAgICBvcHRpb25zXG4gKiBAcmV0dXJuIHshUmVnRXhwfVxuICovXG5mdW5jdGlvbiB0b2tlbnNUb1JlZ0V4cCAodG9rZW5zLCBrZXlzLCBvcHRpb25zKSB7XG4gIGlmICghaXNhcnJheShrZXlzKSkge1xuICAgIG9wdGlvbnMgPSAvKiogQHR5cGUgeyFPYmplY3R9ICovIChrZXlzIHx8IG9wdGlvbnMpXG4gICAga2V5cyA9IFtdXG4gIH1cblxuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fVxuXG4gIHZhciBzdHJpY3QgPSBvcHRpb25zLnN0cmljdFxuICB2YXIgZW5kID0gb3B0aW9ucy5lbmQgIT09IGZhbHNlXG4gIHZhciByb3V0ZSA9ICcnXG5cbiAgLy8gSXRlcmF0ZSBvdmVyIHRoZSB0b2tlbnMgYW5kIGNyZWF0ZSBvdXIgcmVnZXhwIHN0cmluZy5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCB0b2tlbnMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgdG9rZW4gPSB0b2tlbnNbaV1cblxuICAgIGlmICh0eXBlb2YgdG9rZW4gPT09ICdzdHJpbmcnKSB7XG4gICAgICByb3V0ZSArPSBlc2NhcGVTdHJpbmcodG9rZW4pXG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBwcmVmaXggPSBlc2NhcGVTdHJpbmcodG9rZW4ucHJlZml4KVxuICAgICAgdmFyIGNhcHR1cmUgPSAnKD86JyArIHRva2VuLnBhdHRlcm4gKyAnKSdcblxuICAgICAga2V5cy5wdXNoKHRva2VuKVxuXG4gICAgICBpZiAodG9rZW4ucmVwZWF0KSB7XG4gICAgICAgIGNhcHR1cmUgKz0gJyg/OicgKyBwcmVmaXggKyBjYXB0dXJlICsgJykqJ1xuICAgICAgfVxuXG4gICAgICBpZiAodG9rZW4ub3B0aW9uYWwpIHtcbiAgICAgICAgaWYgKCF0b2tlbi5wYXJ0aWFsKSB7XG4gICAgICAgICAgY2FwdHVyZSA9ICcoPzonICsgcHJlZml4ICsgJygnICsgY2FwdHVyZSArICcpKT8nXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY2FwdHVyZSA9IHByZWZpeCArICcoJyArIGNhcHR1cmUgKyAnKT8nXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNhcHR1cmUgPSBwcmVmaXggKyAnKCcgKyBjYXB0dXJlICsgJyknXG4gICAgICB9XG5cbiAgICAgIHJvdXRlICs9IGNhcHR1cmVcbiAgICB9XG4gIH1cblxuICB2YXIgZGVsaW1pdGVyID0gZXNjYXBlU3RyaW5nKG9wdGlvbnMuZGVsaW1pdGVyIHx8ICcvJylcbiAgdmFyIGVuZHNXaXRoRGVsaW1pdGVyID0gcm91dGUuc2xpY2UoLWRlbGltaXRlci5sZW5ndGgpID09PSBkZWxpbWl0ZXJcblxuICAvLyBJbiBub24tc3RyaWN0IG1vZGUgd2UgYWxsb3cgYSBzbGFzaCBhdCB0aGUgZW5kIG9mIG1hdGNoLiBJZiB0aGUgcGF0aCB0b1xuICAvLyBtYXRjaCBhbHJlYWR5IGVuZHMgd2l0aCBhIHNsYXNoLCB3ZSByZW1vdmUgaXQgZm9yIGNvbnNpc3RlbmN5LiBUaGUgc2xhc2hcbiAgLy8gaXMgdmFsaWQgYXQgdGhlIGVuZCBvZiBhIHBhdGggbWF0Y2gsIG5vdCBpbiB0aGUgbWlkZGxlLiBUaGlzIGlzIGltcG9ydGFudFxuICAvLyBpbiBub24tZW5kaW5nIG1vZGUsIHdoZXJlIFwiL3Rlc3QvXCIgc2hvdWxkbid0IG1hdGNoIFwiL3Rlc3QvL3JvdXRlXCIuXG4gIGlmICghc3RyaWN0KSB7XG4gICAgcm91dGUgPSAoZW5kc1dpdGhEZWxpbWl0ZXIgPyByb3V0ZS5zbGljZSgwLCAtZGVsaW1pdGVyLmxlbmd0aCkgOiByb3V0ZSkgKyAnKD86JyArIGRlbGltaXRlciArICcoPz0kKSk/J1xuICB9XG5cbiAgaWYgKGVuZCkge1xuICAgIHJvdXRlICs9ICckJ1xuICB9IGVsc2Uge1xuICAgIC8vIEluIG5vbi1lbmRpbmcgbW9kZSwgd2UgbmVlZCB0aGUgY2FwdHVyaW5nIGdyb3VwcyB0byBtYXRjaCBhcyBtdWNoIGFzXG4gICAgLy8gcG9zc2libGUgYnkgdXNpbmcgYSBwb3NpdGl2ZSBsb29rYWhlYWQgdG8gdGhlIGVuZCBvciBuZXh0IHBhdGggc2VnbWVudC5cbiAgICByb3V0ZSArPSBzdHJpY3QgJiYgZW5kc1dpdGhEZWxpbWl0ZXIgPyAnJyA6ICcoPz0nICsgZGVsaW1pdGVyICsgJ3wkKSdcbiAgfVxuXG4gIHJldHVybiBhdHRhY2hLZXlzKG5ldyBSZWdFeHAoJ14nICsgcm91dGUsIGZsYWdzKG9wdGlvbnMpKSwga2V5cylcbn1cblxuLyoqXG4gKiBOb3JtYWxpemUgdGhlIGdpdmVuIHBhdGggc3RyaW5nLCByZXR1cm5pbmcgYSByZWd1bGFyIGV4cHJlc3Npb24uXG4gKlxuICogQW4gZW1wdHkgYXJyYXkgY2FuIGJlIHBhc3NlZCBpbiBmb3IgdGhlIGtleXMsIHdoaWNoIHdpbGwgaG9sZCB0aGVcbiAqIHBsYWNlaG9sZGVyIGtleSBkZXNjcmlwdGlvbnMuIEZvciBleGFtcGxlLCB1c2luZyBgL3VzZXIvOmlkYCwgYGtleXNgIHdpbGxcbiAqIGNvbnRhaW4gYFt7IG5hbWU6ICdpZCcsIGRlbGltaXRlcjogJy8nLCBvcHRpb25hbDogZmFsc2UsIHJlcGVhdDogZmFsc2UgfV1gLlxuICpcbiAqIEBwYXJhbSAgeyhzdHJpbmd8UmVnRXhwfEFycmF5KX0gcGF0aFxuICogQHBhcmFtICB7KEFycmF5fE9iamVjdCk9fSAgICAgICBrZXlzXG4gKiBAcGFyYW0gIHtPYmplY3Q9fSAgICAgICAgICAgICAgIG9wdGlvbnNcbiAqIEByZXR1cm4geyFSZWdFeHB9XG4gKi9cbmZ1bmN0aW9uIHBhdGhUb1JlZ2V4cCAocGF0aCwga2V5cywgb3B0aW9ucykge1xuICBpZiAoIWlzYXJyYXkoa2V5cykpIHtcbiAgICBvcHRpb25zID0gLyoqIEB0eXBlIHshT2JqZWN0fSAqLyAoa2V5cyB8fCBvcHRpb25zKVxuICAgIGtleXMgPSBbXVxuICB9XG5cbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge31cblxuICBpZiAocGF0aCBpbnN0YW5jZW9mIFJlZ0V4cCkge1xuICAgIHJldHVybiByZWdleHBUb1JlZ2V4cChwYXRoLCAvKiogQHR5cGUgeyFBcnJheX0gKi8gKGtleXMpKVxuICB9XG5cbiAgaWYgKGlzYXJyYXkocGF0aCkpIHtcbiAgICByZXR1cm4gYXJyYXlUb1JlZ2V4cCgvKiogQHR5cGUgeyFBcnJheX0gKi8gKHBhdGgpLCAvKiogQHR5cGUgeyFBcnJheX0gKi8gKGtleXMpLCBvcHRpb25zKVxuICB9XG5cbiAgcmV0dXJuIHN0cmluZ1RvUmVnZXhwKC8qKiBAdHlwZSB7c3RyaW5nfSAqLyAocGF0aCksIC8qKiBAdHlwZSB7IUFycmF5fSAqLyAoa2V5cyksIG9wdGlvbnMpXG59XG5cbmluZGV4LnBhcnNlID0gcGFyc2VfMTtcbmluZGV4LmNvbXBpbGUgPSBjb21waWxlXzE7XG5pbmRleC50b2tlbnNUb0Z1bmN0aW9uID0gdG9rZW5zVG9GdW5jdGlvbl8xO1xuaW5kZXgudG9rZW5zVG9SZWdFeHAgPSB0b2tlbnNUb1JlZ0V4cF8xO1xuXG4vKiAgKi9cblxuZnVuY3Rpb24gY3JlYXRlUm91dGVNYXAgKHJvdXRlcykge1xuICB2YXIgcGF0aE1hcCA9IE9iamVjdC5jcmVhdGUobnVsbClcbiAgdmFyIG5hbWVNYXAgPSBPYmplY3QuY3JlYXRlKG51bGwpXG5cbiAgcm91dGVzLmZvckVhY2goZnVuY3Rpb24gKHJvdXRlKSB7XG4gICAgYWRkUm91dGVSZWNvcmQocGF0aE1hcCwgbmFtZU1hcCwgcm91dGUpXG4gIH0pXG5cbiAgcmV0dXJuIHtcbiAgICBwYXRoTWFwOiBwYXRoTWFwLFxuICAgIG5hbWVNYXA6IG5hbWVNYXBcbiAgfVxufVxuXG5mdW5jdGlvbiBhZGRSb3V0ZVJlY29yZCAoXG4gIHBhdGhNYXAsXG4gIG5hbWVNYXAsXG4gIHJvdXRlLFxuICBwYXJlbnQsXG4gIG1hdGNoQXNcbikge1xuICB2YXIgcGF0aCA9IHJvdXRlLnBhdGg7XG4gIHZhciBuYW1lID0gcm91dGUubmFtZTtcbiAgYXNzZXJ0KHBhdGggIT0gbnVsbCwgXCJcXFwicGF0aFxcXCIgaXMgcmVxdWlyZWQgaW4gYSByb3V0ZSBjb25maWd1cmF0aW9uLlwiKVxuXG4gIHZhciByZWNvcmQgPSB7XG4gICAgcGF0aDogbm9ybWFsaXplUGF0aChwYXRoLCBwYXJlbnQpLFxuICAgIGNvbXBvbmVudHM6IHJvdXRlLmNvbXBvbmVudHMgfHwgeyBkZWZhdWx0OiByb3V0ZS5jb21wb25lbnQgfSxcbiAgICBpbnN0YW5jZXM6IHt9LFxuICAgIG5hbWU6IG5hbWUsXG4gICAgcGFyZW50OiBwYXJlbnQsXG4gICAgbWF0Y2hBczogbWF0Y2hBcyxcbiAgICByZWRpcmVjdDogcm91dGUucmVkaXJlY3QsXG4gICAgYmVmb3JlRW50ZXI6IHJvdXRlLmJlZm9yZUVudGVyLFxuICAgIG1ldGE6IHJvdXRlLm1ldGEgfHwge31cbiAgfVxuXG4gIGlmIChyb3V0ZS5jaGlsZHJlbikge1xuICAgIC8vIFdhcm4gaWYgcm91dGUgaXMgbmFtZWQgYW5kIGhhcyBhIGRlZmF1bHQgY2hpbGQgcm91dGUuXG4gICAgLy8gSWYgdXNlcnMgbmF2aWdhdGUgdG8gdGhpcyByb3V0ZSBieSBuYW1lLCB0aGUgZGVmYXVsdCBjaGlsZCB3aWxsXG4gICAgLy8gbm90IGJlIHJlbmRlcmVkIChHSCBJc3N1ZSAjNjI5KVxuICAgIGlmIChcInByb2R1Y3Rpb25cIiAhPT0gJ3Byb2R1Y3Rpb24nKSB7fVxuICAgIHJvdXRlLmNoaWxkcmVuLmZvckVhY2goZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgICBhZGRSb3V0ZVJlY29yZChwYXRoTWFwLCBuYW1lTWFwLCBjaGlsZCwgcmVjb3JkKVxuICAgIH0pXG4gIH1cblxuICBpZiAocm91dGUuYWxpYXMgIT09IHVuZGVmaW5lZCkge1xuICAgIGlmIChBcnJheS5pc0FycmF5KHJvdXRlLmFsaWFzKSkge1xuICAgICAgcm91dGUuYWxpYXMuZm9yRWFjaChmdW5jdGlvbiAoYWxpYXMpIHtcbiAgICAgICAgYWRkUm91dGVSZWNvcmQocGF0aE1hcCwgbmFtZU1hcCwgeyBwYXRoOiBhbGlhcyB9LCBwYXJlbnQsIHJlY29yZC5wYXRoKVxuICAgICAgfSlcbiAgICB9IGVsc2Uge1xuICAgICAgYWRkUm91dGVSZWNvcmQocGF0aE1hcCwgbmFtZU1hcCwgeyBwYXRoOiByb3V0ZS5hbGlhcyB9LCBwYXJlbnQsIHJlY29yZC5wYXRoKVxuICAgIH1cbiAgfVxuXG4gIHBhdGhNYXBbcmVjb3JkLnBhdGhdID0gcmVjb3JkXG4gIGlmIChuYW1lKSB7XG4gICAgaWYgKCFuYW1lTWFwW25hbWVdKSB7XG4gICAgICBuYW1lTWFwW25hbWVdID0gcmVjb3JkXG4gICAgfSBlbHNlIHtcbiAgICAgIHdhcm4oZmFsc2UsIChcIkR1cGxpY2F0ZSBuYW1lZCByb3V0ZXMgZGVmaW5pdGlvbjogeyBuYW1lOiBcXFwiXCIgKyBuYW1lICsgXCJcXFwiLCBwYXRoOiBcXFwiXCIgKyAocmVjb3JkLnBhdGgpICsgXCJcXFwiIH1cIikpXG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIG5vcm1hbGl6ZVBhdGggKHBhdGgsIHBhcmVudCkge1xuICBwYXRoID0gcGF0aC5yZXBsYWNlKC9cXC8kLywgJycpXG4gIGlmIChwYXRoWzBdID09PSAnLycpIHsgcmV0dXJuIHBhdGggfVxuICBpZiAocGFyZW50ID09IG51bGwpIHsgcmV0dXJuIHBhdGggfVxuICByZXR1cm4gY2xlYW5QYXRoKCgocGFyZW50LnBhdGgpICsgXCIvXCIgKyBwYXRoKSlcbn1cblxuLyogICovXG5cbnZhciByZWdleHBDYWNoZSA9IE9iamVjdC5jcmVhdGUobnVsbClcblxudmFyIHJlZ2V4cFBhcmFtc0NhY2hlID0gT2JqZWN0LmNyZWF0ZShudWxsKVxuXG52YXIgcmVnZXhwQ29tcGlsZUNhY2hlID0gT2JqZWN0LmNyZWF0ZShudWxsKVxuXG5mdW5jdGlvbiBjcmVhdGVNYXRjaGVyIChyb3V0ZXMpIHtcbiAgdmFyIHJlZiA9IGNyZWF0ZVJvdXRlTWFwKHJvdXRlcyk7XG4gIHZhciBwYXRoTWFwID0gcmVmLnBhdGhNYXA7XG4gIHZhciBuYW1lTWFwID0gcmVmLm5hbWVNYXA7XG5cbiAgZnVuY3Rpb24gbWF0Y2ggKFxuICAgIHJhdyxcbiAgICBjdXJyZW50Um91dGUsXG4gICAgcmVkaXJlY3RlZEZyb21cbiAgKSB7XG4gICAgdmFyIGxvY2F0aW9uID0gbm9ybWFsaXplTG9jYXRpb24ocmF3LCBjdXJyZW50Um91dGUpXG4gICAgdmFyIG5hbWUgPSBsb2NhdGlvbi5uYW1lO1xuXG4gICAgaWYgKG5hbWUpIHtcbiAgICAgIHZhciByZWNvcmQgPSBuYW1lTWFwW25hbWVdXG4gICAgICB2YXIgcGFyYW1OYW1lcyA9IGdldFBhcmFtcyhyZWNvcmQucGF0aClcblxuICAgICAgaWYgKHR5cGVvZiBsb2NhdGlvbi5wYXJhbXMgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIGxvY2F0aW9uLnBhcmFtcyA9IHt9XG4gICAgICB9XG5cbiAgICAgIGlmIChjdXJyZW50Um91dGUgJiYgdHlwZW9mIGN1cnJlbnRSb3V0ZS5wYXJhbXMgPT09ICdvYmplY3QnKSB7XG4gICAgICAgIGZvciAodmFyIGtleSBpbiBjdXJyZW50Um91dGUucGFyYW1zKSB7XG4gICAgICAgICAgaWYgKCEoa2V5IGluIGxvY2F0aW9uLnBhcmFtcykgJiYgcGFyYW1OYW1lcy5pbmRleE9mKGtleSkgPiAtMSkge1xuICAgICAgICAgICAgbG9jYXRpb24ucGFyYW1zW2tleV0gPSBjdXJyZW50Um91dGUucGFyYW1zW2tleV1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHJlY29yZCkge1xuICAgICAgICBsb2NhdGlvbi5wYXRoID0gZmlsbFBhcmFtcyhyZWNvcmQucGF0aCwgbG9jYXRpb24ucGFyYW1zLCAoXCJuYW1lZCByb3V0ZSBcXFwiXCIgKyBuYW1lICsgXCJcXFwiXCIpKVxuICAgICAgICByZXR1cm4gX2NyZWF0ZVJvdXRlKHJlY29yZCwgbG9jYXRpb24sIHJlZGlyZWN0ZWRGcm9tKVxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAobG9jYXRpb24ucGF0aCkge1xuICAgICAgbG9jYXRpb24ucGFyYW1zID0ge31cbiAgICAgIGZvciAodmFyIHBhdGggaW4gcGF0aE1hcCkge1xuICAgICAgICBpZiAobWF0Y2hSb3V0ZShwYXRoLCBsb2NhdGlvbi5wYXJhbXMsIGxvY2F0aW9uLnBhdGgpKSB7XG4gICAgICAgICAgcmV0dXJuIF9jcmVhdGVSb3V0ZShwYXRoTWFwW3BhdGhdLCBsb2NhdGlvbiwgcmVkaXJlY3RlZEZyb20pXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgLy8gbm8gbWF0Y2hcbiAgICByZXR1cm4gX2NyZWF0ZVJvdXRlKG51bGwsIGxvY2F0aW9uKVxuICB9XG5cbiAgZnVuY3Rpb24gcmVkaXJlY3QgKFxuICAgIHJlY29yZCxcbiAgICBsb2NhdGlvblxuICApIHtcbiAgICB2YXIgb3JpZ2luYWxSZWRpcmVjdCA9IHJlY29yZC5yZWRpcmVjdFxuICAgIHZhciByZWRpcmVjdCA9IHR5cGVvZiBvcmlnaW5hbFJlZGlyZWN0ID09PSAnZnVuY3Rpb24nXG4gICAgICAgID8gb3JpZ2luYWxSZWRpcmVjdChjcmVhdGVSb3V0ZShyZWNvcmQsIGxvY2F0aW9uKSlcbiAgICAgICAgOiBvcmlnaW5hbFJlZGlyZWN0XG5cbiAgICBpZiAodHlwZW9mIHJlZGlyZWN0ID09PSAnc3RyaW5nJykge1xuICAgICAgcmVkaXJlY3QgPSB7IHBhdGg6IHJlZGlyZWN0IH1cbiAgICB9XG5cbiAgICBpZiAoIXJlZGlyZWN0IHx8IHR5cGVvZiByZWRpcmVjdCAhPT0gJ29iamVjdCcpIHtcbiAgICAgIHdhcm4oZmFsc2UsIChcImludmFsaWQgcmVkaXJlY3Qgb3B0aW9uOiBcIiArIChKU09OLnN0cmluZ2lmeShyZWRpcmVjdCkpKSlcbiAgICAgIHJldHVybiBfY3JlYXRlUm91dGUobnVsbCwgbG9jYXRpb24pXG4gICAgfVxuXG4gICAgdmFyIHJlID0gcmVkaXJlY3RcbiAgICB2YXIgbmFtZSA9IHJlLm5hbWU7XG4gICAgdmFyIHBhdGggPSByZS5wYXRoO1xuICAgIHZhciBxdWVyeSA9IGxvY2F0aW9uLnF1ZXJ5O1xuICAgIHZhciBoYXNoID0gbG9jYXRpb24uaGFzaDtcbiAgICB2YXIgcGFyYW1zID0gbG9jYXRpb24ucGFyYW1zO1xuICAgIHF1ZXJ5ID0gcmUuaGFzT3duUHJvcGVydHkoJ3F1ZXJ5JykgPyByZS5xdWVyeSA6IHF1ZXJ5XG4gICAgaGFzaCA9IHJlLmhhc093blByb3BlcnR5KCdoYXNoJykgPyByZS5oYXNoIDogaGFzaFxuICAgIHBhcmFtcyA9IHJlLmhhc093blByb3BlcnR5KCdwYXJhbXMnKSA/IHJlLnBhcmFtcyA6IHBhcmFtc1xuXG4gICAgaWYgKG5hbWUpIHtcbiAgICAgIC8vIHJlc29sdmVkIG5hbWVkIGRpcmVjdFxuICAgICAgdmFyIHRhcmdldFJlY29yZCA9IG5hbWVNYXBbbmFtZV1cbiAgICAgIGFzc2VydCh0YXJnZXRSZWNvcmQsIChcInJlZGlyZWN0IGZhaWxlZDogbmFtZWQgcm91dGUgXFxcIlwiICsgbmFtZSArIFwiXFxcIiBub3QgZm91bmQuXCIpKVxuICAgICAgcmV0dXJuIG1hdGNoKHtcbiAgICAgICAgX25vcm1hbGl6ZWQ6IHRydWUsXG4gICAgICAgIG5hbWU6IG5hbWUsXG4gICAgICAgIHF1ZXJ5OiBxdWVyeSxcbiAgICAgICAgaGFzaDogaGFzaCxcbiAgICAgICAgcGFyYW1zOiBwYXJhbXNcbiAgICAgIH0sIHVuZGVmaW5lZCwgbG9jYXRpb24pXG4gICAgfSBlbHNlIGlmIChwYXRoKSB7XG4gICAgICAvLyAxLiByZXNvbHZlIHJlbGF0aXZlIHJlZGlyZWN0XG4gICAgICB2YXIgcmF3UGF0aCA9IHJlc29sdmVSZWNvcmRQYXRoKHBhdGgsIHJlY29yZClcbiAgICAgIC8vIDIuIHJlc29sdmUgcGFyYW1zXG4gICAgICB2YXIgcmVzb2x2ZWRQYXRoID0gZmlsbFBhcmFtcyhyYXdQYXRoLCBwYXJhbXMsIChcInJlZGlyZWN0IHJvdXRlIHdpdGggcGF0aCBcXFwiXCIgKyByYXdQYXRoICsgXCJcXFwiXCIpKVxuICAgICAgLy8gMy4gcmVtYXRjaCB3aXRoIGV4aXN0aW5nIHF1ZXJ5IGFuZCBoYXNoXG4gICAgICByZXR1cm4gbWF0Y2goe1xuICAgICAgICBfbm9ybWFsaXplZDogdHJ1ZSxcbiAgICAgICAgcGF0aDogcmVzb2x2ZWRQYXRoLFxuICAgICAgICBxdWVyeTogcXVlcnksXG4gICAgICAgIGhhc2g6IGhhc2hcbiAgICAgIH0sIHVuZGVmaW5lZCwgbG9jYXRpb24pXG4gICAgfSBlbHNlIHtcbiAgICAgIHdhcm4oZmFsc2UsIChcImludmFsaWQgcmVkaXJlY3Qgb3B0aW9uOiBcIiArIChKU09OLnN0cmluZ2lmeShyZWRpcmVjdCkpKSlcbiAgICAgIHJldHVybiBfY3JlYXRlUm91dGUobnVsbCwgbG9jYXRpb24pXG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gYWxpYXMgKFxuICAgIHJlY29yZCxcbiAgICBsb2NhdGlvbixcbiAgICBtYXRjaEFzXG4gICkge1xuICAgIHZhciBhbGlhc2VkUGF0aCA9IGZpbGxQYXJhbXMobWF0Y2hBcywgbG9jYXRpb24ucGFyYW1zLCAoXCJhbGlhc2VkIHJvdXRlIHdpdGggcGF0aCBcXFwiXCIgKyBtYXRjaEFzICsgXCJcXFwiXCIpKVxuICAgIHZhciBhbGlhc2VkTWF0Y2ggPSBtYXRjaCh7XG4gICAgICBfbm9ybWFsaXplZDogdHJ1ZSxcbiAgICAgIHBhdGg6IGFsaWFzZWRQYXRoXG4gICAgfSlcbiAgICBpZiAoYWxpYXNlZE1hdGNoKSB7XG4gICAgICB2YXIgbWF0Y2hlZCA9IGFsaWFzZWRNYXRjaC5tYXRjaGVkXG4gICAgICB2YXIgYWxpYXNlZFJlY29yZCA9IG1hdGNoZWRbbWF0Y2hlZC5sZW5ndGggLSAxXVxuICAgICAgbG9jYXRpb24ucGFyYW1zID0gYWxpYXNlZE1hdGNoLnBhcmFtc1xuICAgICAgcmV0dXJuIF9jcmVhdGVSb3V0ZShhbGlhc2VkUmVjb3JkLCBsb2NhdGlvbilcbiAgICB9XG4gICAgcmV0dXJuIF9jcmVhdGVSb3V0ZShudWxsLCBsb2NhdGlvbilcbiAgfVxuXG4gIGZ1bmN0aW9uIF9jcmVhdGVSb3V0ZSAoXG4gICAgcmVjb3JkLFxuICAgIGxvY2F0aW9uLFxuICAgIHJlZGlyZWN0ZWRGcm9tXG4gICkge1xuICAgIGlmIChyZWNvcmQgJiYgcmVjb3JkLnJlZGlyZWN0KSB7XG4gICAgICByZXR1cm4gcmVkaXJlY3QocmVjb3JkLCByZWRpcmVjdGVkRnJvbSB8fCBsb2NhdGlvbilcbiAgICB9XG4gICAgaWYgKHJlY29yZCAmJiByZWNvcmQubWF0Y2hBcykge1xuICAgICAgcmV0dXJuIGFsaWFzKHJlY29yZCwgbG9jYXRpb24sIHJlY29yZC5tYXRjaEFzKVxuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlUm91dGUocmVjb3JkLCBsb2NhdGlvbiwgcmVkaXJlY3RlZEZyb20pXG4gIH1cblxuICByZXR1cm4gbWF0Y2hcbn1cblxuZnVuY3Rpb24gZ2V0Um91dGVSZWdleCAocGF0aCkge1xuICB2YXIgaGl0ID0gcmVnZXhwQ2FjaGVbcGF0aF1cbiAgdmFyIGtleXMsIHJlZ2V4cFxuXG4gIGlmIChoaXQpIHtcbiAgICBrZXlzID0gaGl0LmtleXNcbiAgICByZWdleHAgPSBoaXQucmVnZXhwXG4gIH0gZWxzZSB7XG4gICAga2V5cyA9IFtdXG4gICAgcmVnZXhwID0gaW5kZXgocGF0aCwga2V5cylcbiAgICByZWdleHBDYWNoZVtwYXRoXSA9IHsga2V5czoga2V5cywgcmVnZXhwOiByZWdleHAgfVxuICB9XG5cbiAgcmV0dXJuIHsga2V5czoga2V5cywgcmVnZXhwOiByZWdleHAgfVxufVxuXG5mdW5jdGlvbiBtYXRjaFJvdXRlIChcbiAgcGF0aCxcbiAgcGFyYW1zLFxuICBwYXRobmFtZVxuKSB7XG4gIHZhciByZWYgPSBnZXRSb3V0ZVJlZ2V4KHBhdGgpO1xuICB2YXIgcmVnZXhwID0gcmVmLnJlZ2V4cDtcbiAgdmFyIGtleXMgPSByZWYua2V5cztcbiAgdmFyIG0gPSBwYXRobmFtZS5tYXRjaChyZWdleHApXG5cbiAgaWYgKCFtKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH0gZWxzZSBpZiAoIXBhcmFtcykge1xuICAgIHJldHVybiB0cnVlXG4gIH1cblxuICBmb3IgKHZhciBpID0gMSwgbGVuID0gbS5sZW5ndGg7IGkgPCBsZW47ICsraSkge1xuICAgIHZhciBrZXkgPSBrZXlzW2kgLSAxXVxuICAgIHZhciB2YWwgPSB0eXBlb2YgbVtpXSA9PT0gJ3N0cmluZycgPyBkZWNvZGVVUklDb21wb25lbnQobVtpXSkgOiBtW2ldXG4gICAgaWYgKGtleSkgeyBwYXJhbXNba2V5Lm5hbWVdID0gdmFsIH1cbiAgfVxuXG4gIHJldHVybiB0cnVlXG59XG5cbmZ1bmN0aW9uIGZpbGxQYXJhbXMgKFxuICBwYXRoLFxuICBwYXJhbXMsXG4gIHJvdXRlTXNnXG4pIHtcbiAgdHJ5IHtcbiAgICB2YXIgZmlsbGVyID1cbiAgICAgIHJlZ2V4cENvbXBpbGVDYWNoZVtwYXRoXSB8fFxuICAgICAgKHJlZ2V4cENvbXBpbGVDYWNoZVtwYXRoXSA9IGluZGV4LmNvbXBpbGUocGF0aCkpXG4gICAgcmV0dXJuIGZpbGxlcihwYXJhbXMgfHwge30sIHsgcHJldHR5OiB0cnVlIH0pXG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBhc3NlcnQoZmFsc2UsIChcIm1pc3NpbmcgcGFyYW0gZm9yIFwiICsgcm91dGVNc2cgKyBcIjogXCIgKyAoZS5tZXNzYWdlKSkpXG4gICAgcmV0dXJuICcnXG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0UGFyYW1zIChwYXRoKSB7XG4gIHJldHVybiByZWdleHBQYXJhbXNDYWNoZVtwYXRoXSB8fFxuICAgIChyZWdleHBQYXJhbXNDYWNoZVtwYXRoXSA9IGdldFJvdXRlUmVnZXgocGF0aCkua2V5cy5tYXAoZnVuY3Rpb24gKGtleSkgeyByZXR1cm4ga2V5Lm5hbWU7IH0pKVxufVxuXG5mdW5jdGlvbiByZXNvbHZlUmVjb3JkUGF0aCAocGF0aCwgcmVjb3JkKSB7XG4gIHJldHVybiByZXNvbHZlUGF0aChwYXRoLCByZWNvcmQucGFyZW50ID8gcmVjb3JkLnBhcmVudC5wYXRoIDogJy8nLCB0cnVlKVxufVxuXG4vKiAgKi9cblxudmFyIGluQnJvd3NlciA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnXG5cbnZhciBzdXBwb3J0c0hpc3RvcnkgPSBpbkJyb3dzZXIgJiYgKGZ1bmN0aW9uICgpIHtcbiAgdmFyIHVhID0gd2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnRcblxuICBpZiAoXG4gICAgKHVhLmluZGV4T2YoJ0FuZHJvaWQgMi4nKSAhPT0gLTEgfHwgdWEuaW5kZXhPZignQW5kcm9pZCA0LjAnKSAhPT0gLTEpICYmXG4gICAgdWEuaW5kZXhPZignTW9iaWxlIFNhZmFyaScpICE9PSAtMSAmJlxuICAgIHVhLmluZGV4T2YoJ0Nocm9tZScpID09PSAtMSAmJlxuICAgIHVhLmluZGV4T2YoJ1dpbmRvd3MgUGhvbmUnKSA9PT0gLTFcbiAgKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICByZXR1cm4gd2luZG93Lmhpc3RvcnkgJiYgJ3B1c2hTdGF0ZScgaW4gd2luZG93Lmhpc3Rvcnlcbn0pKClcblxuLyogICovXG5cbmZ1bmN0aW9uIHJ1blF1ZXVlIChxdWV1ZSwgZm4sIGNiKSB7XG4gIHZhciBzdGVwID0gZnVuY3Rpb24gKGluZGV4KSB7XG4gICAgaWYgKGluZGV4ID49IHF1ZXVlLmxlbmd0aCkge1xuICAgICAgY2IoKVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAocXVldWVbaW5kZXhdKSB7XG4gICAgICAgIGZuKHF1ZXVlW2luZGV4XSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHN0ZXAoaW5kZXggKyAxKVxuICAgICAgICB9KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc3RlcChpbmRleCArIDEpXG4gICAgICB9XG4gICAgfVxuICB9XG4gIHN0ZXAoMClcbn1cblxuLyogICovXG5cblxudmFyIEhpc3RvcnkgPSBmdW5jdGlvbiBIaXN0b3J5IChyb3V0ZXIsIGJhc2UpIHtcbiAgdGhpcy5yb3V0ZXIgPSByb3V0ZXJcbiAgdGhpcy5iYXNlID0gbm9ybWFsaXplQmFzZShiYXNlKVxuICAvLyBzdGFydCB3aXRoIGEgcm91dGUgb2JqZWN0IHRoYXQgc3RhbmRzIGZvciBcIm5vd2hlcmVcIlxuICB0aGlzLmN1cnJlbnQgPSBTVEFSVFxuICB0aGlzLnBlbmRpbmcgPSBudWxsXG59O1xuXG5IaXN0b3J5LnByb3RvdHlwZS5saXN0ZW4gPSBmdW5jdGlvbiBsaXN0ZW4gKGNiKSB7XG4gIHRoaXMuY2IgPSBjYlxufTtcblxuSGlzdG9yeS5wcm90b3R5cGUudHJhbnNpdGlvblRvID0gZnVuY3Rpb24gdHJhbnNpdGlvblRvIChsb2NhdGlvbiwgY2IpIHtcbiAgICB2YXIgdGhpcyQxID0gdGhpcztcblxuICB2YXIgcm91dGUgPSB0aGlzLnJvdXRlci5tYXRjaChsb2NhdGlvbiwgdGhpcy5jdXJyZW50KVxuICB0aGlzLmNvbmZpcm1UcmFuc2l0aW9uKHJvdXRlLCBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcyQxLnVwZGF0ZVJvdXRlKHJvdXRlKVxuICAgIGNiICYmIGNiKHJvdXRlKVxuICAgIHRoaXMkMS5lbnN1cmVVUkwoKVxuICB9KVxufTtcblxuSGlzdG9yeS5wcm90b3R5cGUuY29uZmlybVRyYW5zaXRpb24gPSBmdW5jdGlvbiBjb25maXJtVHJhbnNpdGlvbiAocm91dGUsIGNiKSB7XG4gICAgdmFyIHRoaXMkMSA9IHRoaXM7XG5cbiAgdmFyIGN1cnJlbnQgPSB0aGlzLmN1cnJlbnRcbiAgaWYgKGlzU2FtZVJvdXRlKHJvdXRlLCBjdXJyZW50KSkge1xuICAgIHRoaXMuZW5zdXJlVVJMKClcbiAgICByZXR1cm5cbiAgfVxuXG4gIHZhciByZWYgPSByZXNvbHZlUXVldWUodGhpcy5jdXJyZW50Lm1hdGNoZWQsIHJvdXRlLm1hdGNoZWQpO1xuICAgIHZhciBkZWFjdGl2YXRlZCA9IHJlZi5kZWFjdGl2YXRlZDtcbiAgICB2YXIgYWN0aXZhdGVkID0gcmVmLmFjdGl2YXRlZDtcblxuICB2YXIgcXVldWUgPSBbXS5jb25jYXQoXG4gICAgLy8gaW4tY29tcG9uZW50IGxlYXZlIGd1YXJkc1xuICAgIGV4dHJhY3RMZWF2ZUd1YXJkcyhkZWFjdGl2YXRlZCksXG4gICAgLy8gZ2xvYmFsIGJlZm9yZSBob29rc1xuICAgIHRoaXMucm91dGVyLmJlZm9yZUhvb2tzLFxuICAgIC8vIGVudGVyIGd1YXJkc1xuICAgIGFjdGl2YXRlZC5tYXAoZnVuY3Rpb24gKG0pIHsgcmV0dXJuIG0uYmVmb3JlRW50ZXI7IH0pLFxuICAgIC8vIGFzeW5jIGNvbXBvbmVudHNcbiAgICByZXNvbHZlQXN5bmNDb21wb25lbnRzKGFjdGl2YXRlZClcbiAgKVxuXG4gIHRoaXMucGVuZGluZyA9IHJvdXRlXG4gIHZhciBpdGVyYXRvciA9IGZ1bmN0aW9uIChob29rLCBuZXh0KSB7XG4gICAgaWYgKHRoaXMkMS5wZW5kaW5nICE9PSByb3V0ZSkgeyByZXR1cm4gfVxuICAgIGhvb2socm91dGUsIGN1cnJlbnQsIGZ1bmN0aW9uICh0bykge1xuICAgICAgaWYgKHRvID09PSBmYWxzZSkge1xuICAgICAgICAvLyBuZXh0KGZhbHNlKSAtPiBhYm9ydCBuYXZpZ2F0aW9uLCBlbnN1cmUgY3VycmVudCBVUkxcbiAgICAgICAgdGhpcyQxLmVuc3VyZVVSTCh0cnVlKVxuICAgICAgfSBlbHNlIGlmICh0eXBlb2YgdG8gPT09ICdzdHJpbmcnIHx8IHR5cGVvZiB0byA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgLy8gbmV4dCgnLycpIG9yIG5leHQoeyBwYXRoOiAnLycgfSkgLT4gcmVkaXJlY3RcbiAgICAgICAgdGhpcyQxLnB1c2godG8pXG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBjb25maXJtIHRyYW5zaXRpb24gYW5kIHBhc3Mgb24gdGhlIHZhbHVlXG4gICAgICAgIG5leHQodG8pXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIHJ1blF1ZXVlKHF1ZXVlLCBpdGVyYXRvciwgZnVuY3Rpb24gKCkge1xuICAgIHZhciBwb3N0RW50ZXJDYnMgPSBbXVxuICAgIHZhciBlbnRlckd1YXJkcyA9IGV4dHJhY3RFbnRlckd1YXJkcyhhY3RpdmF0ZWQsIHBvc3RFbnRlckNicywgZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHRoaXMkMS5jdXJyZW50ID09PSByb3V0ZVxuICAgIH0pXG4gICAgLy8gd2FpdCB1bnRpbCBhc3luYyBjb21wb25lbnRzIGFyZSByZXNvbHZlZCBiZWZvcmVcbiAgICAvLyBleHRyYWN0aW5nIGluLWNvbXBvbmVudCBlbnRlciBndWFyZHNcbiAgICBydW5RdWV1ZShlbnRlckd1YXJkcywgaXRlcmF0b3IsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmICh0aGlzJDEucGVuZGluZyA9PT0gcm91dGUpIHtcbiAgICAgICAgdGhpcyQxLnBlbmRpbmcgPSBudWxsXG4gICAgICAgIGNiKHJvdXRlKVxuICAgICAgICB0aGlzJDEucm91dGVyLmFwcC4kbmV4dFRpY2soZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHBvc3RFbnRlckNicy5mb3JFYWNoKGZ1bmN0aW9uIChjYikgeyByZXR1cm4gY2IoKTsgfSlcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9KVxuICB9KVxufTtcblxuSGlzdG9yeS5wcm90b3R5cGUudXBkYXRlUm91dGUgPSBmdW5jdGlvbiB1cGRhdGVSb3V0ZSAocm91dGUpIHtcbiAgdmFyIHByZXYgPSB0aGlzLmN1cnJlbnRcbiAgdGhpcy5jdXJyZW50ID0gcm91dGVcbiAgdGhpcy5jYiAmJiB0aGlzLmNiKHJvdXRlKVxuICB0aGlzLnJvdXRlci5hZnRlckhvb2tzLmZvckVhY2goZnVuY3Rpb24gKGhvb2spIHtcbiAgICBob29rICYmIGhvb2socm91dGUsIHByZXYpXG4gIH0pXG59O1xuXG5mdW5jdGlvbiBub3JtYWxpemVCYXNlIChiYXNlKSB7XG4gIGlmICghYmFzZSkge1xuICAgIGlmIChpbkJyb3dzZXIpIHtcbiAgICAgIC8vIHJlc3BlY3QgPGJhc2U+IHRhZ1xuICAgICAgdmFyIGJhc2VFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Jhc2UnKVxuICAgICAgYmFzZSA9IGJhc2VFbCA/IGJhc2VFbC5nZXRBdHRyaWJ1dGUoJ2hyZWYnKSA6ICcvJ1xuICAgIH0gZWxzZSB7XG4gICAgICBiYXNlID0gJy8nXG4gICAgfVxuICB9XG4gIC8vIG1ha2Ugc3VyZSB0aGVyZSdzIHRoZSBzdGFydGluZyBzbGFzaFxuICBpZiAoYmFzZS5jaGFyQXQoMCkgIT09ICcvJykge1xuICAgIGJhc2UgPSAnLycgKyBiYXNlXG4gIH1cbiAgLy8gcmVtb3ZlIHRyYWlsaW5nIHNsYXNoXG4gIHJldHVybiBiYXNlLnJlcGxhY2UoL1xcLyQvLCAnJylcbn1cblxuZnVuY3Rpb24gcmVzb2x2ZVF1ZXVlIChcbiAgY3VycmVudCxcbiAgbmV4dFxuKSB7XG4gIHZhciBpXG4gIHZhciBtYXggPSBNYXRoLm1heChjdXJyZW50Lmxlbmd0aCwgbmV4dC5sZW5ndGgpXG4gIGZvciAoaSA9IDA7IGkgPCBtYXg7IGkrKykge1xuICAgIGlmIChjdXJyZW50W2ldICE9PSBuZXh0W2ldKSB7XG4gICAgICBicmVha1xuICAgIH1cbiAgfVxuICByZXR1cm4ge1xuICAgIGFjdGl2YXRlZDogbmV4dC5zbGljZShpKSxcbiAgICBkZWFjdGl2YXRlZDogY3VycmVudC5zbGljZShpKVxuICB9XG59XG5cbmZ1bmN0aW9uIGV4dHJhY3RHdWFyZCAoXG4gIGRlZixcbiAga2V5XG4pIHtcbiAgaWYgKHR5cGVvZiBkZWYgIT09ICdmdW5jdGlvbicpIHtcbiAgICAvLyBleHRlbmQgbm93IHNvIHRoYXQgZ2xvYmFsIG1peGlucyBhcmUgYXBwbGllZC5cbiAgICBkZWYgPSBfVnVlLmV4dGVuZChkZWYpXG4gIH1cbiAgcmV0dXJuIGRlZi5vcHRpb25zW2tleV1cbn1cblxuZnVuY3Rpb24gZXh0cmFjdExlYXZlR3VhcmRzIChtYXRjaGVkKSB7XG4gIHJldHVybiBmbGF0dGVuKGZsYXRNYXBDb21wb25lbnRzKG1hdGNoZWQsIGZ1bmN0aW9uIChkZWYsIGluc3RhbmNlKSB7XG4gICAgdmFyIGd1YXJkID0gZXh0cmFjdEd1YXJkKGRlZiwgJ2JlZm9yZVJvdXRlTGVhdmUnKVxuICAgIGlmIChndWFyZCkge1xuICAgICAgcmV0dXJuIEFycmF5LmlzQXJyYXkoZ3VhcmQpXG4gICAgICAgID8gZ3VhcmQubWFwKGZ1bmN0aW9uIChndWFyZCkgeyByZXR1cm4gd3JhcExlYXZlR3VhcmQoZ3VhcmQsIGluc3RhbmNlKTsgfSlcbiAgICAgICAgOiB3cmFwTGVhdmVHdWFyZChndWFyZCwgaW5zdGFuY2UpXG4gICAgfVxuICB9KS5yZXZlcnNlKCkpXG59XG5cbmZ1bmN0aW9uIHdyYXBMZWF2ZUd1YXJkIChcbiAgZ3VhcmQsXG4gIGluc3RhbmNlXG4pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIHJvdXRlTGVhdmVHdWFyZCAoKSB7XG4gICAgcmV0dXJuIGd1YXJkLmFwcGx5KGluc3RhbmNlLCBhcmd1bWVudHMpXG4gIH1cbn1cblxuZnVuY3Rpb24gZXh0cmFjdEVudGVyR3VhcmRzIChcbiAgbWF0Y2hlZCxcbiAgY2JzLFxuICBpc1ZhbGlkXG4pIHtcbiAgcmV0dXJuIGZsYXR0ZW4oZmxhdE1hcENvbXBvbmVudHMobWF0Y2hlZCwgZnVuY3Rpb24gKGRlZiwgXywgbWF0Y2gsIGtleSkge1xuICAgIHZhciBndWFyZCA9IGV4dHJhY3RHdWFyZChkZWYsICdiZWZvcmVSb3V0ZUVudGVyJylcbiAgICBpZiAoZ3VhcmQpIHtcbiAgICAgIHJldHVybiBBcnJheS5pc0FycmF5KGd1YXJkKVxuICAgICAgICA/IGd1YXJkLm1hcChmdW5jdGlvbiAoZ3VhcmQpIHsgcmV0dXJuIHdyYXBFbnRlckd1YXJkKGd1YXJkLCBjYnMsIG1hdGNoLCBrZXksIGlzVmFsaWQpOyB9KVxuICAgICAgICA6IHdyYXBFbnRlckd1YXJkKGd1YXJkLCBjYnMsIG1hdGNoLCBrZXksIGlzVmFsaWQpXG4gICAgfVxuICB9KSlcbn1cblxuZnVuY3Rpb24gd3JhcEVudGVyR3VhcmQgKFxuICBndWFyZCxcbiAgY2JzLFxuICBtYXRjaCxcbiAga2V5LFxuICBpc1ZhbGlkXG4pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIHJvdXRlRW50ZXJHdWFyZCAodG8sIGZyb20sIG5leHQpIHtcbiAgICByZXR1cm4gZ3VhcmQodG8sIGZyb20sIGZ1bmN0aW9uIChjYikge1xuICAgICAgbmV4dChjYilcbiAgICAgIGlmICh0eXBlb2YgY2IgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgY2JzLnB1c2goZnVuY3Rpb24gKCkge1xuICAgICAgICAgIC8vICM3NTBcbiAgICAgICAgICAvLyBpZiBhIHJvdXRlci12aWV3IGlzIHdyYXBwZWQgd2l0aCBhbiBvdXQtaW4gdHJhbnNpdGlvbixcbiAgICAgICAgICAvLyB0aGUgaW5zdGFuY2UgbWF5IG5vdCBoYXZlIGJlZW4gcmVnaXN0ZXJlZCBhdCB0aGlzIHRpbWUuXG4gICAgICAgICAgLy8gd2Ugd2lsbCBuZWVkIHRvIHBvbGwgZm9yIHJlZ2lzdHJhdGlvbiB1bnRpbCBjdXJyZW50IHJvdXRlXG4gICAgICAgICAgLy8gaXMgbm8gbG9uZ2VyIHZhbGlkLlxuICAgICAgICAgIHBvbGwoY2IsIG1hdGNoLmluc3RhbmNlcywga2V5LCBpc1ZhbGlkKVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH0pXG4gIH1cbn1cblxuZnVuY3Rpb24gcG9sbCAoXG4gIGNiLCAvLyBzb21laG93IGZsb3cgY2Fubm90IGluZmVyIHRoaXMgaXMgYSBmdW5jdGlvblxuICBpbnN0YW5jZXMsXG4gIGtleSxcbiAgaXNWYWxpZFxuKSB7XG4gIGlmIChpbnN0YW5jZXNba2V5XSkge1xuICAgIGNiKGluc3RhbmNlc1trZXldKVxuICB9IGVsc2UgaWYgKGlzVmFsaWQoKSkge1xuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgcG9sbChjYiwgaW5zdGFuY2VzLCBrZXksIGlzVmFsaWQpXG4gICAgfSwgMTYpXG4gIH1cbn1cblxuZnVuY3Rpb24gcmVzb2x2ZUFzeW5jQ29tcG9uZW50cyAobWF0Y2hlZCkge1xuICByZXR1cm4gZmxhdE1hcENvbXBvbmVudHMobWF0Y2hlZCwgZnVuY3Rpb24gKGRlZiwgXywgbWF0Y2gsIGtleSkge1xuICAgIC8vIGlmIGl0J3MgYSBmdW5jdGlvbiBhbmQgZG9lc24ndCBoYXZlIFZ1ZSBvcHRpb25zIGF0dGFjaGVkLFxuICAgIC8vIGFzc3VtZSBpdCdzIGFuIGFzeW5jIGNvbXBvbmVudCByZXNvbHZlIGZ1bmN0aW9uLlxuICAgIC8vIHdlIGFyZSBub3QgdXNpbmcgVnVlJ3MgZGVmYXVsdCBhc3luYyByZXNvbHZpbmcgbWVjaGFuaXNtIGJlY2F1c2VcbiAgICAvLyB3ZSB3YW50IHRvIGhhbHQgdGhlIG5hdmlnYXRpb24gdW50aWwgdGhlIGluY29taW5nIGNvbXBvbmVudCBoYXMgYmVlblxuICAgIC8vIHJlc29sdmVkLlxuICAgIGlmICh0eXBlb2YgZGVmID09PSAnZnVuY3Rpb24nICYmICFkZWYub3B0aW9ucykge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uICh0bywgZnJvbSwgbmV4dCkge1xuICAgICAgICB2YXIgcmVzb2x2ZSA9IGZ1bmN0aW9uIChyZXNvbHZlZERlZikge1xuICAgICAgICAgIG1hdGNoLmNvbXBvbmVudHNba2V5XSA9IHJlc29sdmVkRGVmXG4gICAgICAgICAgbmV4dCgpXG4gICAgICAgIH1cblxuICAgICAgICB2YXIgcmVqZWN0ID0gZnVuY3Rpb24gKHJlYXNvbikge1xuICAgICAgICAgIHdhcm4oZmFsc2UsIChcIkZhaWxlZCB0byByZXNvbHZlIGFzeW5jIGNvbXBvbmVudCBcIiArIGtleSArIFwiOiBcIiArIHJlYXNvbikpXG4gICAgICAgICAgbmV4dChmYWxzZSlcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciByZXMgPSBkZWYocmVzb2x2ZSwgcmVqZWN0KVxuICAgICAgICBpZiAocmVzICYmIHR5cGVvZiByZXMudGhlbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIHJlcy50aGVuKHJlc29sdmUsIHJlamVjdClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSlcbn1cblxuZnVuY3Rpb24gZmxhdE1hcENvbXBvbmVudHMgKFxuICBtYXRjaGVkLFxuICBmblxuKSB7XG4gIHJldHVybiBmbGF0dGVuKG1hdGNoZWQubWFwKGZ1bmN0aW9uIChtKSB7XG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKG0uY29tcG9uZW50cykubWFwKGZ1bmN0aW9uIChrZXkpIHsgcmV0dXJuIGZuKFxuICAgICAgbS5jb21wb25lbnRzW2tleV0sXG4gICAgICBtLmluc3RhbmNlc1trZXldLFxuICAgICAgbSwga2V5XG4gICAgKTsgfSlcbiAgfSkpXG59XG5cbmZ1bmN0aW9uIGZsYXR0ZW4gKGFycikge1xuICByZXR1cm4gQXJyYXkucHJvdG90eXBlLmNvbmNhdC5hcHBseShbXSwgYXJyKVxufVxuXG4vKiAgKi9cblxudmFyIHBvc2l0aW9uU3RvcmUgPSBPYmplY3QuY3JlYXRlKG51bGwpXG5cbmZ1bmN0aW9uIHNhdmVTY3JvbGxQb3NpdGlvbiAoa2V5KSB7XG4gIGlmICgha2V5KSB7IHJldHVybiB9XG4gIHBvc2l0aW9uU3RvcmVba2V5XSA9IHtcbiAgICB4OiB3aW5kb3cucGFnZVhPZmZzZXQsXG4gICAgeTogd2luZG93LnBhZ2VZT2Zmc2V0XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0U2Nyb2xsUG9zaXRpb24gKGtleSkge1xuICBpZiAoIWtleSkgeyByZXR1cm4gfVxuICByZXR1cm4gcG9zaXRpb25TdG9yZVtrZXldXG59XG5cbmZ1bmN0aW9uIGdldEVsZW1lbnRQb3NpdGlvbiAoZWwpIHtcbiAgdmFyIGRvY1JlY3QgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcbiAgdmFyIGVsUmVjdCA9IGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gIHJldHVybiB7XG4gICAgeDogZWxSZWN0LmxlZnQgLSBkb2NSZWN0LmxlZnQsXG4gICAgeTogZWxSZWN0LnRvcCAtIGRvY1JlY3QudG9wXG4gIH1cbn1cblxuZnVuY3Rpb24gaXNWYWxpZFBvc2l0aW9uIChvYmopIHtcbiAgcmV0dXJuIGlzTnVtYmVyKG9iai54KSB8fCBpc051bWJlcihvYmoueSlcbn1cblxuZnVuY3Rpb24gbm9ybWFsaXplUG9zaXRpb24gKG9iaikge1xuICByZXR1cm4ge1xuICAgIHg6IGlzTnVtYmVyKG9iai54KSA/IG9iai54IDogd2luZG93LnBhZ2VYT2Zmc2V0LFxuICAgIHk6IGlzTnVtYmVyKG9iai55KSA/IG9iai55IDogd2luZG93LnBhZ2VZT2Zmc2V0XG4gIH1cbn1cblxuZnVuY3Rpb24gaXNOdW1iZXIgKHYpIHtcbiAgcmV0dXJuIHR5cGVvZiB2ID09PSAnbnVtYmVyJ1xufVxuXG4vKiAgKi9cblxuXG52YXIgZ2VuS2V5ID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gU3RyaW5nKERhdGUubm93KCkpOyB9XG52YXIgX2tleSA9IGdlbktleSgpXG5cbnZhciBIVE1MNUhpc3RvcnkgPSAoZnVuY3Rpb24gKEhpc3RvcnkpIHtcbiAgZnVuY3Rpb24gSFRNTDVIaXN0b3J5IChyb3V0ZXIsIGJhc2UpIHtcbiAgICB2YXIgdGhpcyQxID0gdGhpcztcblxuICAgIEhpc3RvcnkuY2FsbCh0aGlzLCByb3V0ZXIsIGJhc2UpXG5cbiAgICB2YXIgZXhwZWN0U2Nyb2xsID0gcm91dGVyLm9wdGlvbnMuc2Nyb2xsQmVoYXZpb3JcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncG9wc3RhdGUnLCBmdW5jdGlvbiAoZSkge1xuICAgICAgX2tleSA9IGUuc3RhdGUgJiYgZS5zdGF0ZS5rZXlcbiAgICAgIHZhciBjdXJyZW50ID0gdGhpcyQxLmN1cnJlbnRcbiAgICAgIHRoaXMkMS50cmFuc2l0aW9uVG8oZ2V0TG9jYXRpb24odGhpcyQxLmJhc2UpLCBmdW5jdGlvbiAobmV4dCkge1xuICAgICAgICBpZiAoZXhwZWN0U2Nyb2xsKSB7XG4gICAgICAgICAgdGhpcyQxLmhhbmRsZVNjcm9sbChuZXh0LCBjdXJyZW50LCB0cnVlKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0pXG5cbiAgICBpZiAoZXhwZWN0U2Nyb2xsKSB7XG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBzYXZlU2Nyb2xsUG9zaXRpb24oX2tleSlcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgaWYgKCBIaXN0b3J5ICkgSFRNTDVIaXN0b3J5Ll9fcHJvdG9fXyA9IEhpc3Rvcnk7XG4gIEhUTUw1SGlzdG9yeS5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKCBIaXN0b3J5ICYmIEhpc3RvcnkucHJvdG90eXBlICk7XG4gIEhUTUw1SGlzdG9yeS5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBIVE1MNUhpc3Rvcnk7XG5cbiAgSFRNTDVIaXN0b3J5LnByb3RvdHlwZS5nbyA9IGZ1bmN0aW9uIGdvIChuKSB7XG4gICAgd2luZG93Lmhpc3RvcnkuZ28obilcbiAgfTtcblxuICBIVE1MNUhpc3RvcnkucHJvdG90eXBlLnB1c2ggPSBmdW5jdGlvbiBwdXNoIChsb2NhdGlvbikge1xuICAgIHZhciB0aGlzJDEgPSB0aGlzO1xuXG4gICAgdmFyIGN1cnJlbnQgPSB0aGlzLmN1cnJlbnRcbiAgICB0aGlzLnRyYW5zaXRpb25Ubyhsb2NhdGlvbiwgZnVuY3Rpb24gKHJvdXRlKSB7XG4gICAgICBwdXNoU3RhdGUoY2xlYW5QYXRoKHRoaXMkMS5iYXNlICsgcm91dGUuZnVsbFBhdGgpKVxuICAgICAgdGhpcyQxLmhhbmRsZVNjcm9sbChyb3V0ZSwgY3VycmVudCwgZmFsc2UpXG4gICAgfSlcbiAgfTtcblxuICBIVE1MNUhpc3RvcnkucHJvdG90eXBlLnJlcGxhY2UgPSBmdW5jdGlvbiByZXBsYWNlIChsb2NhdGlvbikge1xuICAgIHZhciB0aGlzJDEgPSB0aGlzO1xuXG4gICAgdmFyIGN1cnJlbnQgPSB0aGlzLmN1cnJlbnRcbiAgICB0aGlzLnRyYW5zaXRpb25Ubyhsb2NhdGlvbiwgZnVuY3Rpb24gKHJvdXRlKSB7XG4gICAgICByZXBsYWNlU3RhdGUoY2xlYW5QYXRoKHRoaXMkMS5iYXNlICsgcm91dGUuZnVsbFBhdGgpKVxuICAgICAgdGhpcyQxLmhhbmRsZVNjcm9sbChyb3V0ZSwgY3VycmVudCwgZmFsc2UpXG4gICAgfSlcbiAgfTtcblxuICBIVE1MNUhpc3RvcnkucHJvdG90eXBlLmVuc3VyZVVSTCA9IGZ1bmN0aW9uIGVuc3VyZVVSTCAocHVzaCkge1xuICAgIGlmIChnZXRMb2NhdGlvbih0aGlzLmJhc2UpICE9PSB0aGlzLmN1cnJlbnQuZnVsbFBhdGgpIHtcbiAgICAgIHZhciBjdXJyZW50ID0gY2xlYW5QYXRoKHRoaXMuYmFzZSArIHRoaXMuY3VycmVudC5mdWxsUGF0aClcbiAgICAgIHB1c2ggPyBwdXNoU3RhdGUoY3VycmVudCkgOiByZXBsYWNlU3RhdGUoY3VycmVudClcbiAgICB9XG4gIH07XG5cbiAgSFRNTDVIaXN0b3J5LnByb3RvdHlwZS5oYW5kbGVTY3JvbGwgPSBmdW5jdGlvbiBoYW5kbGVTY3JvbGwgKHRvLCBmcm9tLCBpc1BvcCkge1xuICAgIHZhciByb3V0ZXIgPSB0aGlzLnJvdXRlclxuICAgIGlmICghcm91dGVyLmFwcCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdmFyIGJlaGF2aW9yID0gcm91dGVyLm9wdGlvbnMuc2Nyb2xsQmVoYXZpb3JcbiAgICBpZiAoIWJlaGF2aW9yKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgYXNzZXJ0KHR5cGVvZiBiZWhhdmlvciA9PT0gJ2Z1bmN0aW9uJywgXCJzY3JvbGxCZWhhdmlvciBtdXN0IGJlIGEgZnVuY3Rpb25cIilcblxuICAgIC8vIHdhaXQgdW50aWwgcmUtcmVuZGVyIGZpbmlzaGVzIGJlZm9yZSBzY3JvbGxpbmdcbiAgICByb3V0ZXIuYXBwLiRuZXh0VGljayhmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgcG9zaXRpb24gPSBnZXRTY3JvbGxQb3NpdGlvbihfa2V5KVxuICAgICAgdmFyIHNob3VsZFNjcm9sbCA9IGJlaGF2aW9yKHRvLCBmcm9tLCBpc1BvcCA/IHBvc2l0aW9uIDogbnVsbClcbiAgICAgIGlmICghc2hvdWxkU2Nyb2xsKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgICAgdmFyIGlzT2JqZWN0ID0gdHlwZW9mIHNob3VsZFNjcm9sbCA9PT0gJ29iamVjdCdcbiAgICAgIGlmIChpc09iamVjdCAmJiB0eXBlb2Ygc2hvdWxkU2Nyb2xsLnNlbGVjdG9yID09PSAnc3RyaW5nJykge1xuICAgICAgICB2YXIgZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNob3VsZFNjcm9sbC5zZWxlY3RvcilcbiAgICAgICAgaWYgKGVsKSB7XG4gICAgICAgICAgcG9zaXRpb24gPSBnZXRFbGVtZW50UG9zaXRpb24oZWwpXG4gICAgICAgIH0gZWxzZSBpZiAoaXNWYWxpZFBvc2l0aW9uKHNob3VsZFNjcm9sbCkpIHtcbiAgICAgICAgICBwb3NpdGlvbiA9IG5vcm1hbGl6ZVBvc2l0aW9uKHNob3VsZFNjcm9sbClcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChpc09iamVjdCAmJiBpc1ZhbGlkUG9zaXRpb24oc2hvdWxkU2Nyb2xsKSkge1xuICAgICAgICBwb3NpdGlvbiA9IG5vcm1hbGl6ZVBvc2l0aW9uKHNob3VsZFNjcm9sbClcbiAgICAgIH1cblxuICAgICAgaWYgKHBvc2l0aW9uKSB7XG4gICAgICAgIHdpbmRvdy5zY3JvbGxUbyhwb3NpdGlvbi54LCBwb3NpdGlvbi55KVxuICAgICAgfVxuICAgIH0pXG4gIH07XG5cbiAgcmV0dXJuIEhUTUw1SGlzdG9yeTtcbn0oSGlzdG9yeSkpO1xuXG5mdW5jdGlvbiBnZXRMb2NhdGlvbiAoYmFzZSkge1xuICB2YXIgcGF0aCA9IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZVxuICBpZiAoYmFzZSAmJiBwYXRoLmluZGV4T2YoYmFzZSkgPT09IDApIHtcbiAgICBwYXRoID0gcGF0aC5zbGljZShiYXNlLmxlbmd0aClcbiAgfVxuICByZXR1cm4gKHBhdGggfHwgJy8nKSArIHdpbmRvdy5sb2NhdGlvbi5zZWFyY2ggKyB3aW5kb3cubG9jYXRpb24uaGFzaFxufVxuXG5mdW5jdGlvbiBwdXNoU3RhdGUgKHVybCwgcmVwbGFjZSkge1xuICAvLyB0cnkuLi5jYXRjaCB0aGUgcHVzaFN0YXRlIGNhbGwgdG8gZ2V0IGFyb3VuZCBTYWZhcmlcbiAgLy8gRE9NIEV4Y2VwdGlvbiAxOCB3aGVyZSBpdCBsaW1pdHMgdG8gMTAwIHB1c2hTdGF0ZSBjYWxsc1xuICB2YXIgaGlzdG9yeSA9IHdpbmRvdy5oaXN0b3J5XG4gIHRyeSB7XG4gICAgaWYgKHJlcGxhY2UpIHtcbiAgICAgIGhpc3RvcnkucmVwbGFjZVN0YXRlKHsga2V5OiBfa2V5IH0sICcnLCB1cmwpXG4gICAgfSBlbHNlIHtcbiAgICAgIF9rZXkgPSBnZW5LZXkoKVxuICAgICAgaGlzdG9yeS5wdXNoU3RhdGUoeyBrZXk6IF9rZXkgfSwgJycsIHVybClcbiAgICB9XG4gICAgc2F2ZVNjcm9sbFBvc2l0aW9uKF9rZXkpXG4gIH0gY2F0Y2ggKGUpIHtcbiAgICB3aW5kb3cubG9jYXRpb25bcmVwbGFjZSA/ICdhc3NpZ24nIDogJ3JlcGxhY2UnXSh1cmwpXG4gIH1cbn1cblxuZnVuY3Rpb24gcmVwbGFjZVN0YXRlICh1cmwpIHtcbiAgcHVzaFN0YXRlKHVybCwgdHJ1ZSlcbn1cblxuLyogICovXG5cblxudmFyIEhhc2hIaXN0b3J5ID0gKGZ1bmN0aW9uIChIaXN0b3J5KSB7XG4gIGZ1bmN0aW9uIEhhc2hIaXN0b3J5IChyb3V0ZXIsIGJhc2UsIGZhbGxiYWNrKSB7XG4gICAgSGlzdG9yeS5jYWxsKHRoaXMsIHJvdXRlciwgYmFzZSlcblxuICAgIC8vIGNoZWNrIGhpc3RvcnkgZmFsbGJhY2sgZGVlcGxpbmtpbmdcbiAgICBpZiAoZmFsbGJhY2sgJiYgdGhpcy5jaGVja0ZhbGxiYWNrKCkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGVuc3VyZVNsYXNoKClcbiAgfVxuXG4gIGlmICggSGlzdG9yeSApIEhhc2hIaXN0b3J5Ll9fcHJvdG9fXyA9IEhpc3Rvcnk7XG4gIEhhc2hIaXN0b3J5LnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoIEhpc3RvcnkgJiYgSGlzdG9yeS5wcm90b3R5cGUgKTtcbiAgSGFzaEhpc3RvcnkucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gSGFzaEhpc3Rvcnk7XG5cbiAgSGFzaEhpc3RvcnkucHJvdG90eXBlLmNoZWNrRmFsbGJhY2sgPSBmdW5jdGlvbiBjaGVja0ZhbGxiYWNrICgpIHtcbiAgICB2YXIgbG9jYXRpb24gPSBnZXRMb2NhdGlvbih0aGlzLmJhc2UpXG4gICAgaWYgKCEvXlxcLyMvLnRlc3QobG9jYXRpb24pKSB7XG4gICAgICB3aW5kb3cubG9jYXRpb24ucmVwbGFjZShcbiAgICAgICAgY2xlYW5QYXRoKHRoaXMuYmFzZSArICcvIycgKyBsb2NhdGlvbilcbiAgICAgIClcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuICB9O1xuXG4gIEhhc2hIaXN0b3J5LnByb3RvdHlwZS5vbkhhc2hDaGFuZ2UgPSBmdW5jdGlvbiBvbkhhc2hDaGFuZ2UgKCkge1xuICAgIGlmICghZW5zdXJlU2xhc2goKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIHRoaXMudHJhbnNpdGlvblRvKGdldEhhc2goKSwgZnVuY3Rpb24gKHJvdXRlKSB7XG4gICAgICByZXBsYWNlSGFzaChyb3V0ZS5mdWxsUGF0aClcbiAgICB9KVxuICB9O1xuXG4gIEhhc2hIaXN0b3J5LnByb3RvdHlwZS5wdXNoID0gZnVuY3Rpb24gcHVzaCAobG9jYXRpb24pIHtcbiAgICB0aGlzLnRyYW5zaXRpb25Ubyhsb2NhdGlvbiwgZnVuY3Rpb24gKHJvdXRlKSB7XG4gICAgICBwdXNoSGFzaChyb3V0ZS5mdWxsUGF0aClcbiAgICB9KVxuICB9O1xuXG4gIEhhc2hIaXN0b3J5LnByb3RvdHlwZS5yZXBsYWNlID0gZnVuY3Rpb24gcmVwbGFjZSAobG9jYXRpb24pIHtcbiAgICB0aGlzLnRyYW5zaXRpb25Ubyhsb2NhdGlvbiwgZnVuY3Rpb24gKHJvdXRlKSB7XG4gICAgICByZXBsYWNlSGFzaChyb3V0ZS5mdWxsUGF0aClcbiAgICB9KVxuICB9O1xuXG4gIEhhc2hIaXN0b3J5LnByb3RvdHlwZS5nbyA9IGZ1bmN0aW9uIGdvIChuKSB7XG4gICAgd2luZG93Lmhpc3RvcnkuZ28obilcbiAgfTtcblxuICBIYXNoSGlzdG9yeS5wcm90b3R5cGUuZW5zdXJlVVJMID0gZnVuY3Rpb24gZW5zdXJlVVJMIChwdXNoKSB7XG4gICAgdmFyIGN1cnJlbnQgPSB0aGlzLmN1cnJlbnQuZnVsbFBhdGhcbiAgICBpZiAoZ2V0SGFzaCgpICE9PSBjdXJyZW50KSB7XG4gICAgICBwdXNoID8gcHVzaEhhc2goY3VycmVudCkgOiByZXBsYWNlSGFzaChjdXJyZW50KVxuICAgIH1cbiAgfTtcblxuICByZXR1cm4gSGFzaEhpc3Rvcnk7XG59KEhpc3RvcnkpKTtcblxuZnVuY3Rpb24gZW5zdXJlU2xhc2ggKCkge1xuICB2YXIgcGF0aCA9IGdldEhhc2goKVxuICBpZiAocGF0aC5jaGFyQXQoMCkgPT09ICcvJykge1xuICAgIHJldHVybiB0cnVlXG4gIH1cbiAgcmVwbGFjZUhhc2goJy8nICsgcGF0aClcbiAgcmV0dXJuIGZhbHNlXG59XG5cbmZ1bmN0aW9uIGdldEhhc2ggKCkge1xuICAvLyBXZSBjYW4ndCB1c2Ugd2luZG93LmxvY2F0aW9uLmhhc2ggaGVyZSBiZWNhdXNlIGl0J3Mgbm90XG4gIC8vIGNvbnNpc3RlbnQgYWNyb3NzIGJyb3dzZXJzIC0gRmlyZWZveCB3aWxsIHByZS1kZWNvZGUgaXQhXG4gIHZhciBocmVmID0gd2luZG93LmxvY2F0aW9uLmhyZWZcbiAgdmFyIGluZGV4ID0gaHJlZi5pbmRleE9mKCcjJylcbiAgcmV0dXJuIGluZGV4ID09PSAtMSA/ICcnIDogaHJlZi5zbGljZShpbmRleCArIDEpXG59XG5cbmZ1bmN0aW9uIHB1c2hIYXNoIChwYXRoKSB7XG4gIHdpbmRvdy5sb2NhdGlvbi5oYXNoID0gcGF0aFxufVxuXG5mdW5jdGlvbiByZXBsYWNlSGFzaCAocGF0aCkge1xuICB2YXIgaSA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmLmluZGV4T2YoJyMnKVxuICB3aW5kb3cubG9jYXRpb24ucmVwbGFjZShcbiAgICB3aW5kb3cubG9jYXRpb24uaHJlZi5zbGljZSgwLCBpID49IDAgPyBpIDogMCkgKyAnIycgKyBwYXRoXG4gIClcbn1cblxuLyogICovXG5cblxudmFyIEFic3RyYWN0SGlzdG9yeSA9IChmdW5jdGlvbiAoSGlzdG9yeSkge1xuICBmdW5jdGlvbiBBYnN0cmFjdEhpc3RvcnkgKHJvdXRlcikge1xuICAgIEhpc3RvcnkuY2FsbCh0aGlzLCByb3V0ZXIpXG4gICAgdGhpcy5zdGFjayA9IFtdXG4gICAgdGhpcy5pbmRleCA9IC0xXG4gIH1cblxuICBpZiAoIEhpc3RvcnkgKSBBYnN0cmFjdEhpc3RvcnkuX19wcm90b19fID0gSGlzdG9yeTtcbiAgQWJzdHJhY3RIaXN0b3J5LnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoIEhpc3RvcnkgJiYgSGlzdG9yeS5wcm90b3R5cGUgKTtcbiAgQWJzdHJhY3RIaXN0b3J5LnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IEFic3RyYWN0SGlzdG9yeTtcblxuICBBYnN0cmFjdEhpc3RvcnkucHJvdG90eXBlLnB1c2ggPSBmdW5jdGlvbiBwdXNoIChsb2NhdGlvbikge1xuICAgIHZhciB0aGlzJDEgPSB0aGlzO1xuXG4gICAgdGhpcy50cmFuc2l0aW9uVG8obG9jYXRpb24sIGZ1bmN0aW9uIChyb3V0ZSkge1xuICAgICAgdGhpcyQxLnN0YWNrID0gdGhpcyQxLnN0YWNrLnNsaWNlKDAsIHRoaXMkMS5pbmRleCArIDEpLmNvbmNhdChyb3V0ZSlcbiAgICAgIHRoaXMkMS5pbmRleCsrXG4gICAgfSlcbiAgfTtcblxuICBBYnN0cmFjdEhpc3RvcnkucHJvdG90eXBlLnJlcGxhY2UgPSBmdW5jdGlvbiByZXBsYWNlIChsb2NhdGlvbikge1xuICAgIHZhciB0aGlzJDEgPSB0aGlzO1xuXG4gICAgdGhpcy50cmFuc2l0aW9uVG8obG9jYXRpb24sIGZ1bmN0aW9uIChyb3V0ZSkge1xuICAgICAgdGhpcyQxLnN0YWNrID0gdGhpcyQxLnN0YWNrLnNsaWNlKDAsIHRoaXMkMS5pbmRleCkuY29uY2F0KHJvdXRlKVxuICAgIH0pXG4gIH07XG5cbiAgQWJzdHJhY3RIaXN0b3J5LnByb3RvdHlwZS5nbyA9IGZ1bmN0aW9uIGdvIChuKSB7XG4gICAgdmFyIHRoaXMkMSA9IHRoaXM7XG5cbiAgICB2YXIgdGFyZ2V0SW5kZXggPSB0aGlzLmluZGV4ICsgblxuICAgIGlmICh0YXJnZXRJbmRleCA8IDAgfHwgdGFyZ2V0SW5kZXggPj0gdGhpcy5zdGFjay5sZW5ndGgpIHtcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICB2YXIgcm91dGUgPSB0aGlzLnN0YWNrW3RhcmdldEluZGV4XVxuICAgIHRoaXMuY29uZmlybVRyYW5zaXRpb24ocm91dGUsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHRoaXMkMS5pbmRleCA9IHRhcmdldEluZGV4XG4gICAgICB0aGlzJDEudXBkYXRlUm91dGUocm91dGUpXG4gICAgfSlcbiAgfTtcblxuICBBYnN0cmFjdEhpc3RvcnkucHJvdG90eXBlLmVuc3VyZVVSTCA9IGZ1bmN0aW9uIGVuc3VyZVVSTCAoKSB7XG4gICAgLy8gbm9vcFxuICB9O1xuXG4gIHJldHVybiBBYnN0cmFjdEhpc3Rvcnk7XG59KEhpc3RvcnkpKTtcblxuLyogICovXG5cbnZhciBWdWVSb3V0ZXIgPSBmdW5jdGlvbiBWdWVSb3V0ZXIgKG9wdGlvbnMpIHtcbiAgaWYgKCBvcHRpb25zID09PSB2b2lkIDAgKSBvcHRpb25zID0ge307XG5cbiAgdGhpcy5hcHAgPSBudWxsXG4gIHRoaXMub3B0aW9ucyA9IG9wdGlvbnNcbiAgdGhpcy5iZWZvcmVIb29rcyA9IFtdXG4gIHRoaXMuYWZ0ZXJIb29rcyA9IFtdXG4gIHRoaXMubWF0Y2ggPSBjcmVhdGVNYXRjaGVyKG9wdGlvbnMucm91dGVzIHx8IFtdKVxuXG4gIHZhciBtb2RlID0gb3B0aW9ucy5tb2RlIHx8ICdoYXNoJ1xuICB0aGlzLmZhbGxiYWNrID0gbW9kZSA9PT0gJ2hpc3RvcnknICYmICFzdXBwb3J0c0hpc3RvcnlcbiAgaWYgKHRoaXMuZmFsbGJhY2spIHtcbiAgICBtb2RlID0gJ2hhc2gnXG4gIH1cbiAgaWYgKCFpbkJyb3dzZXIpIHtcbiAgICBtb2RlID0gJ2Fic3RyYWN0J1xuICB9XG4gIHRoaXMubW9kZSA9IG1vZGVcblxuICBzd2l0Y2ggKG1vZGUpIHtcbiAgICBjYXNlICdoaXN0b3J5JzpcbiAgICAgIHRoaXMuaGlzdG9yeSA9IG5ldyBIVE1MNUhpc3RvcnkodGhpcywgb3B0aW9ucy5iYXNlKVxuICAgICAgYnJlYWtcbiAgICBjYXNlICdoYXNoJzpcbiAgICAgIHRoaXMuaGlzdG9yeSA9IG5ldyBIYXNoSGlzdG9yeSh0aGlzLCBvcHRpb25zLmJhc2UsIHRoaXMuZmFsbGJhY2spXG4gICAgICBicmVha1xuICAgIGNhc2UgJ2Fic3RyYWN0JzpcbiAgICAgIHRoaXMuaGlzdG9yeSA9IG5ldyBBYnN0cmFjdEhpc3RvcnkodGhpcylcbiAgICAgIGJyZWFrXG4gICAgZGVmYXVsdDpcbiAgICAgIGFzc2VydChmYWxzZSwgKFwiaW52YWxpZCBtb2RlOiBcIiArIG1vZGUpKVxuICB9XG59O1xuXG52YXIgcHJvdG90eXBlQWNjZXNzb3JzID0geyBjdXJyZW50Um91dGU6IHt9IH07XG5cbnByb3RvdHlwZUFjY2Vzc29ycy5jdXJyZW50Um91dGUuZ2V0ID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdGhpcy5oaXN0b3J5ICYmIHRoaXMuaGlzdG9yeS5jdXJyZW50XG59O1xuXG5WdWVSb3V0ZXIucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbiBpbml0IChhcHAgLyogVnVlIGNvbXBvbmVudCBpbnN0YW5jZSAqLykge1xuICAgIHZhciB0aGlzJDEgPSB0aGlzO1xuXG4gIGFzc2VydChcbiAgICBpbnN0YWxsLmluc3RhbGxlZCxcbiAgICBcIm5vdCBpbnN0YWxsZWQuIE1ha2Ugc3VyZSB0byBjYWxsIGBWdWUudXNlKFZ1ZVJvdXRlcilgIFwiICtcbiAgICBcImJlZm9yZSBjcmVhdGluZyByb290IGluc3RhbmNlLlwiXG4gIClcblxuICB0aGlzLmFwcCA9IGFwcFxuXG4gIHZhciBoaXN0b3J5ID0gdGhpcy5oaXN0b3J5XG5cbiAgaWYgKGhpc3RvcnkgaW5zdGFuY2VvZiBIVE1MNUhpc3RvcnkpIHtcbiAgICBoaXN0b3J5LnRyYW5zaXRpb25UbyhnZXRMb2NhdGlvbihoaXN0b3J5LmJhc2UpKVxuICB9IGVsc2UgaWYgKGhpc3RvcnkgaW5zdGFuY2VvZiBIYXNoSGlzdG9yeSkge1xuICAgIGhpc3RvcnkudHJhbnNpdGlvblRvKGdldEhhc2goKSwgZnVuY3Rpb24gKCkge1xuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2hhc2hjaGFuZ2UnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGhpc3Rvcnkub25IYXNoQ2hhbmdlKClcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxuXG4gIGhpc3RvcnkubGlzdGVuKGZ1bmN0aW9uIChyb3V0ZSkge1xuICAgIHRoaXMkMS5hcHAuX3JvdXRlID0gcm91dGVcbiAgfSlcbn07XG5cblZ1ZVJvdXRlci5wcm90b3R5cGUuYmVmb3JlRWFjaCA9IGZ1bmN0aW9uIGJlZm9yZUVhY2ggKGZuKSB7XG4gIHRoaXMuYmVmb3JlSG9va3MucHVzaChmbilcbn07XG5cblZ1ZVJvdXRlci5wcm90b3R5cGUuYWZ0ZXJFYWNoID0gZnVuY3Rpb24gYWZ0ZXJFYWNoIChmbikge1xuICB0aGlzLmFmdGVySG9va3MucHVzaChmbilcbn07XG5cblZ1ZVJvdXRlci5wcm90b3R5cGUucHVzaCA9IGZ1bmN0aW9uIHB1c2ggKGxvY2F0aW9uKSB7XG4gIHRoaXMuaGlzdG9yeS5wdXNoKGxvY2F0aW9uKVxufTtcblxuVnVlUm91dGVyLnByb3RvdHlwZS5yZXBsYWNlID0gZnVuY3Rpb24gcmVwbGFjZSAobG9jYXRpb24pIHtcbiAgdGhpcy5oaXN0b3J5LnJlcGxhY2UobG9jYXRpb24pXG59O1xuXG5WdWVSb3V0ZXIucHJvdG90eXBlLmdvID0gZnVuY3Rpb24gZ28gKG4pIHtcbiAgdGhpcy5oaXN0b3J5LmdvKG4pXG59O1xuXG5WdWVSb3V0ZXIucHJvdG90eXBlLmJhY2sgPSBmdW5jdGlvbiBiYWNrICgpIHtcbiAgdGhpcy5nbygtMSlcbn07XG5cblZ1ZVJvdXRlci5wcm90b3R5cGUuZm9yd2FyZCA9IGZ1bmN0aW9uIGZvcndhcmQgKCkge1xuICB0aGlzLmdvKDEpXG59O1xuXG5WdWVSb3V0ZXIucHJvdG90eXBlLmdldE1hdGNoZWRDb21wb25lbnRzID0gZnVuY3Rpb24gZ2V0TWF0Y2hlZENvbXBvbmVudHMgKCkge1xuICBpZiAoIXRoaXMuY3VycmVudFJvdXRlKSB7XG4gICAgcmV0dXJuIFtdXG4gIH1cbiAgcmV0dXJuIFtdLmNvbmNhdC5hcHBseShbXSwgdGhpcy5jdXJyZW50Um91dGUubWF0Y2hlZC5tYXAoZnVuY3Rpb24gKG0pIHtcbiAgICByZXR1cm4gT2JqZWN0LmtleXMobS5jb21wb25lbnRzKS5tYXAoZnVuY3Rpb24gKGtleSkge1xuICAgICAgcmV0dXJuIG0uY29tcG9uZW50c1trZXldXG4gICAgfSlcbiAgfSkpXG59O1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydGllcyggVnVlUm91dGVyLnByb3RvdHlwZSwgcHJvdG90eXBlQWNjZXNzb3JzICk7XG5cblZ1ZVJvdXRlci5pbnN0YWxsID0gaW5zdGFsbFxuXG5pZiAoaW5Ccm93c2VyICYmIHdpbmRvdy5WdWUpIHtcbiAgd2luZG93LlZ1ZS51c2UoVnVlUm91dGVyKVxufVxuXG5yZXR1cm4gVnVlUm91dGVyO1xuXG59KSkpO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0U6L1Rlc3RXb3JrL3Z1ZS9+L3Z1ZS1yb3V0ZXIvZGlzdC92dWUtcm91dGVyLmpzIiwiLyoqXHJcbiAqIOaPj+i/sDog6Lev55Sx6YWN572u5paH5Lu2XHJcbiAqIOeJiOadgzogQ29weXJpZ2h0IChjKSAyMDE2XHJcbiAqIOWFrOWPuDog5rex5Zyz5biC5piK5pmo56eR5oqA5byA5Y+R5pyJ6ZmQ5YWs5Y+4XHJcbiAqIOS9nOiAhTog6ZmI5YWDXHJcbiAqIOeJiOacrDogMS4wXHJcbiAqIOWIm+W7uuaXpeacnzogMjAxNi8xMS8yM1xyXG4gKiDliJvlu7rml7bpl7Q6IDEwOjExXHJcbiAqL1xyXG5pbXBvcnQgVnVlUm91dGVyIGZyb20gXCJ2dWUtcm91dGVyXCI7ICAgICAgICAgICAgICAgICAgICAgICAgIC8vIOi3r+eUseaPkuS7tlxyXG5pbXBvcnQgSW5kZXhWaWV3IGZyb20gXCIuL3ZpZXdzL2luZGV4L3ZpZXdcIjsgICAgICAgICAgICAgICAgIC8vIOW8leWFpWluZGV4VnVlXHJcbmltcG9ydCBVc2VyVmlldyBmcm9tIFwiLi92aWV3cy91c2VyL3ZpZXdcIjsgICAgICAgICAgICAgICAgICAgLy8g5byV5YWlVXNlcuinhuWbvlxyXG5pbXBvcnQgVGFnVmlldyBmcm9tIFwiLi92aWV3cy90YWcvdmlld1wiOyAgICAgICAgICAgICAgICAgICAgIC8vIOW8leWFpeagh+etvuinhuWbvlxyXG5pbXBvcnQgVXNlclZpZXdNZW1iZXIgZnJvbSBcIi4vdmlld3MvdXNlci9tZW1iZXIvdmlld1wiOyAgICAgIC8vIOW8leWFpVVzZXJNZW1iZXLop4blm75cclxuXHJcbi8vIOWumuS5iei3r+eUsVxyXG5jb25zdCByb3V0ZXMgPSBbXHJcbiAgICB7XHJcbiAgICAgICAgbmFtZTogXCJmb29cIixcclxuICAgICAgICBwYXRoOiBcIi9mb29cIixcclxuICAgICAgICAvLyByZWRpcmVjdDogXCJpbmRleFwiLFxyXG4gICAgICAgIGNvbXBvbmVudDoge1xyXG4gICAgICAgICAgICB0ZW1wbGF0ZTogXCI8ZGl2PmZvbzwvZGl2PlwiXHJcbiAgICAgICAgfVxyXG4gICAgfSwge1xyXG4gICAgICAgIG5hbWU6IFwiaW5kZXhcIixcclxuICAgICAgICBwYXRoOiBcIi9pbmRleFwiLFxyXG4gICAgICAgIGNvbXBvbmVudDogSW5kZXhWaWV3XHJcbiAgICB9LCB7XHJcbiAgICAgICAgbmFtZTogXCJ1c2VyXCIsXHJcbiAgICAgICAgcGF0aDogXCIvdXNlci86aWRcIixcclxuICAgICAgICBjb21wb25lbnQ6IFVzZXJWaWV3LFxyXG4gICAgICAgIGNoaWxkcmVuOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHBhdGg6IFwibWVtYmVyXCIsXHJcbiAgICAgICAgICAgICAgICBjb21wb25lbnQ6IFVzZXJWaWV3TWVtYmVyXHJcbiAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgIHBhdGg6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICBjb21wb25lbnQ6IFVzZXJWaWV3TWVtYmVyXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBdXHJcbiAgICB9LCB7XHJcbiAgICAgICAgbmFtZTogXCJ0YWdcIixcclxuICAgICAgICBwYXRoOiBcIi90YWdcIixcclxuICAgICAgICBjb21wb25lbnQ6IFRhZ1ZpZXdcclxuICAgIH1cclxuXTtcclxuXHJcbmNvbnN0IHJvdXRlciA9IG5ldyBWdWVSb3V0ZXIoe3JvdXRlc30pOyAgICAgICAgICAgICAgICAgICAgIC8vIOWunuS+i+WMluS4gOS4qlZ1ZVJvdXRlcui3r+eUseWvueixoVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcm91dGVyO1xyXG5leHBvcnQge3JvdXRlcn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vRTovVGVzdFdvcmsvdnVlL3NyYy9yb3V0ZXIuanMiLCIvKipcclxuICog5o+P6L+wOiDnlKjmiLfop4blm75cclxuICog54mI5p2DOiBDb3B5cmlnaHQgKGMpIDIwMTZcclxuICog5YWs5Y+4OiDmt7HlnLPluILmmIrmmajnp5HmioDlvIDlj5HmnInpmZDlhazlj7hcclxuICog5L2c6ICFOiDpmYjlhYNcclxuICog54mI5pysOiAxLjBcclxuICog5Yib5bu65pel5pyfOiAyMDE2LzExLzIzXHJcbiAqIOWIm+W7uuaXtumXtDogMTY6MjdcclxuICovXHJcbmxldCB2dWUgPSByZXF1aXJlKFwiLi92aWV3LnZ1ZVwiKTtcclxuXHJcbi8vIOaVsOaNruWIneWni+WMllxyXG52dWUuZGF0YSA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgbG9nZ2VkSW46IFwiVEVTVFwiXHJcbiAgICB9XHJcbn07XHJcblxyXG4vLyDnu4Tku7bliJ3lp4vljJbkuovku7ZcclxudnVlLmNyZWF0ZWQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBjb25zb2xlLmxvZygnPT09PT1JbmRleD09PT09Jyk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB2dWU7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vRTovVGVzdFdvcmsvdnVlL3NyYy92aWV3cy9pbmRleC92aWV3LmpzIiwidmFyIF9fdnVlX2V4cG9ydHNfXywgX192dWVfb3B0aW9uc19fXG52YXIgX192dWVfc3R5bGVzX18gPSB7fVxuXG4vKiBzdHlsZXMgKi9cbnJlcXVpcmUoXCIhIXZ1ZS1zdHlsZS1sb2FkZXIhY3NzLWxvYWRlcj9zb3VyY2VNYXAhdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXI/aWQ9ZGF0YS12LTI0ZTc3ODhiIXZ1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c3R5bGVzJmluZGV4PTAhLi92aWV3LnZ1ZVwiKVxuXG4vKiB0ZW1wbGF0ZSAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX18gPSByZXF1aXJlKFwiISF2dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj9pZD1kYXRhLXYtMjRlNzc4OGIhdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vdmlldy52dWVcIilcbl9fdnVlX29wdGlvbnNfXyA9IF9fdnVlX2V4cG9ydHNfXyA9IF9fdnVlX2V4cG9ydHNfXyB8fCB7fVxuaWYgKFxuICB0eXBlb2YgX192dWVfZXhwb3J0c19fLmRlZmF1bHQgPT09IFwib2JqZWN0XCIgfHxcbiAgdHlwZW9mIF9fdnVlX2V4cG9ydHNfXy5kZWZhdWx0ID09PSBcImZ1bmN0aW9uXCJcbikge1xuaWYgKE9iamVjdC5rZXlzKF9fdnVlX2V4cG9ydHNfXykuc29tZShmdW5jdGlvbiAoa2V5KSB7IHJldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleSAhPT0gXCJfX2VzTW9kdWxlXCIgfSkpIHtjb25zb2xlLmVycm9yKFwibmFtZWQgZXhwb3J0cyBhcmUgbm90IHN1cHBvcnRlZCBpbiAqLnZ1ZSBmaWxlcy5cIil9XG5fX3Z1ZV9vcHRpb25zX18gPSBfX3Z1ZV9leHBvcnRzX18gPSBfX3Z1ZV9leHBvcnRzX18uZGVmYXVsdFxufVxuaWYgKHR5cGVvZiBfX3Z1ZV9vcHRpb25zX18gPT09IFwiZnVuY3Rpb25cIikge1xuICBfX3Z1ZV9vcHRpb25zX18gPSBfX3Z1ZV9vcHRpb25zX18ub3B0aW9uc1xufVxuX192dWVfb3B0aW9uc19fLl9fZmlsZSA9IFwiRTpcXFxcVGVzdFdvcmtcXFxcdnVlXFxcXHNyY1xcXFx2aWV3c1xcXFxpbmRleFxcXFx2aWV3LnZ1ZVwiXG5fX3Z1ZV9vcHRpb25zX18ucmVuZGVyID0gX192dWVfdGVtcGxhdGVfXy5yZW5kZXJcbl9fdnVlX29wdGlvbnNfXy5zdGF0aWNSZW5kZXJGbnMgPSBfX3Z1ZV90ZW1wbGF0ZV9fLnN0YXRpY1JlbmRlckZuc1xuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtMjRlNzc4OGJcIiwgX192dWVfb3B0aW9uc19fKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtMjRlNzc4OGJcIiwgX192dWVfb3B0aW9uc19fKVxuICB9XG59KSgpfVxuaWYgKF9fdnVlX29wdGlvbnNfXy5mdW5jdGlvbmFsKSB7Y29uc29sZS5lcnJvcihcIlt2dWUtbG9hZGVyXSB2aWV3LnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIGFuZCBzaG91bGQgYmUgZGVmaW5lZCBpbiBwbGFpbiBqcyBmaWxlcyB1c2luZyByZW5kZXIgZnVuY3Rpb25zLlwiKX1cblxubW9kdWxlLmV4cG9ydHMgPSBfX3Z1ZV9leHBvcnRzX19cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3ZpZXdzL2luZGV4L3ZpZXcudnVlXG4vLyBtb2R1bGUgaWQgPSA1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtMjRlNzc4OGIhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3ZpZXcudnVlXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCB7fSk7XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcblx0Ly8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0aWYoIWNvbnRlbnQubG9jYWxzKSB7XG5cdFx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi0yNGU3Nzg4YiEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vdmlldy52dWVcIiwgZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi0yNGU3Nzg4YiEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vdmlldy52dWVcIik7XG5cdFx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblx0XHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0XHR9KTtcblx0fVxuXHQvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtc3R5bGUtbG9hZGVyIS4vfi9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL34vdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LTI0ZTc3ODhiIS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vc3JjL3ZpZXdzL2luZGV4L3ZpZXcudnVlXG4vLyBtb2R1bGUgaWQgPSA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuaDEge1xcbiAgICBjb2xvcjogI0YwMDtcXG59XFxuXCIsIFwiXCIsIHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIi8uL3NyYy92aWV3cy9pbmRleC92aWV3LnZ1ZT81ZjYwODhjZlwiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiO0FBS0E7SUFDQSxZQUFBO0NBQ0FcIixcImZpbGVcIjpcInZpZXcudnVlXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjx0ZW1wbGF0ZT5cXHJcXG4gICAgPGgxPkF1dGggRmxvd3t7bG9nZ2VkSW59fTwvaDE+XFxyXFxuPC90ZW1wbGF0ZT5cXHJcXG5cXHJcXG48c3R5bGU+XFxyXFxuICAgIGgxIHtcXHJcXG4gICAgICAgIGNvbG9yOiAjRjAwO1xcclxcbiAgICB9XFxyXFxuPC9zdHlsZT5cIl0sXCJzb3VyY2VSb290XCI6XCJ3ZWJwYWNrOi8vXCJ9XSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL34vdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LTI0ZTc3ODhiIS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vc3JjL3ZpZXdzL2luZGV4L3ZpZXcudnVlXG4vLyBtb2R1bGUgaWQgPSA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qXHJcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcclxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXHJcbiovXHJcbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXHJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKSB7XHJcblx0dmFyIGxpc3QgPSBbXTtcclxuXHJcblx0Ly8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xyXG5cdGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcclxuXHRcdHZhciByZXN1bHQgPSBbXTtcclxuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdHZhciBpdGVtID0gdGhpc1tpXTtcclxuXHRcdFx0aWYoaXRlbVsyXSkge1xyXG5cdFx0XHRcdHJlc3VsdC5wdXNoKFwiQG1lZGlhIFwiICsgaXRlbVsyXSArIFwie1wiICsgaXRlbVsxXSArIFwifVwiKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRyZXN1bHQucHVzaChpdGVtWzFdKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHJlc3VsdC5qb2luKFwiXCIpO1xyXG5cdH07XHJcblxyXG5cdC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XHJcblx0bGlzdC5pID0gZnVuY3Rpb24obW9kdWxlcywgbWVkaWFRdWVyeSkge1xyXG5cdFx0aWYodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpXHJcblx0XHRcdG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIFwiXCJdXTtcclxuXHRcdHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XHJcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHR2YXIgaWQgPSB0aGlzW2ldWzBdO1xyXG5cdFx0XHRpZih0eXBlb2YgaWQgPT09IFwibnVtYmVyXCIpXHJcblx0XHRcdFx0YWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xyXG5cdFx0fVxyXG5cdFx0Zm9yKGkgPSAwOyBpIDwgbW9kdWxlcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHR2YXIgaXRlbSA9IG1vZHVsZXNbaV07XHJcblx0XHRcdC8vIHNraXAgYWxyZWFkeSBpbXBvcnRlZCBtb2R1bGVcclxuXHRcdFx0Ly8gdGhpcyBpbXBsZW1lbnRhdGlvbiBpcyBub3QgMTAwJSBwZXJmZWN0IGZvciB3ZWlyZCBtZWRpYSBxdWVyeSBjb21iaW5hdGlvbnNcclxuXHRcdFx0Ly8gIHdoZW4gYSBtb2R1bGUgaXMgaW1wb3J0ZWQgbXVsdGlwbGUgdGltZXMgd2l0aCBkaWZmZXJlbnQgbWVkaWEgcXVlcmllcy5cclxuXHRcdFx0Ly8gIEkgaG9wZSB0aGlzIHdpbGwgbmV2ZXIgb2NjdXIgKEhleSB0aGlzIHdheSB3ZSBoYXZlIHNtYWxsZXIgYnVuZGxlcylcclxuXHRcdFx0aWYodHlwZW9mIGl0ZW1bMF0gIT09IFwibnVtYmVyXCIgfHwgIWFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcclxuXHRcdFx0XHRpZihtZWRpYVF1ZXJ5ICYmICFpdGVtWzJdKSB7XHJcblx0XHRcdFx0XHRpdGVtWzJdID0gbWVkaWFRdWVyeTtcclxuXHRcdFx0XHR9IGVsc2UgaWYobWVkaWFRdWVyeSkge1xyXG5cdFx0XHRcdFx0aXRlbVsyXSA9IFwiKFwiICsgaXRlbVsyXSArIFwiKSBhbmQgKFwiICsgbWVkaWFRdWVyeSArIFwiKVwiO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRsaXN0LnB1c2goaXRlbSk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9O1xyXG5cdHJldHVybiBsaXN0O1xyXG59O1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9FOi9UZXN0V29yay92dWUvfi9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qcyIsIi8qXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG5cdEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG52YXIgc3R5bGVzSW5Eb20gPSB7fSxcblx0bWVtb2l6ZSA9IGZ1bmN0aW9uKGZuKSB7XG5cdFx0dmFyIG1lbW87XG5cdFx0cmV0dXJuIGZ1bmN0aW9uICgpIHtcblx0XHRcdGlmICh0eXBlb2YgbWVtbyA9PT0gXCJ1bmRlZmluZWRcIikgbWVtbyA9IGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cdFx0XHRyZXR1cm4gbWVtbztcblx0XHR9O1xuXHR9LFxuXHRpc09sZElFID0gbWVtb2l6ZShmdW5jdGlvbigpIHtcblx0XHRyZXR1cm4gL21zaWUgWzYtOV1cXGIvLnRlc3Qod2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKSk7XG5cdH0pLFxuXHRnZXRIZWFkRWxlbWVudCA9IG1lbW9pemUoZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiBkb2N1bWVudC5oZWFkIHx8IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiaGVhZFwiKVswXTtcblx0fSksXG5cdHNpbmdsZXRvbkVsZW1lbnQgPSBudWxsLFxuXHRzaW5nbGV0b25Db3VudGVyID0gMCxcblx0c3R5bGVFbGVtZW50c0luc2VydGVkQXRUb3AgPSBbXTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihsaXN0LCBvcHRpb25zKSB7XG5cdGlmKHR5cGVvZiBERUJVRyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBERUJVRykge1xuXHRcdGlmKHR5cGVvZiBkb2N1bWVudCAhPT0gXCJvYmplY3RcIikgdGhyb3cgbmV3IEVycm9yKFwiVGhlIHN0eWxlLWxvYWRlciBjYW5ub3QgYmUgdXNlZCBpbiBhIG5vbi1icm93c2VyIGVudmlyb25tZW50XCIpO1xuXHR9XG5cblx0b3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cdC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuXHQvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cdGlmICh0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gPT09IFwidW5kZWZpbmVkXCIpIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuXG5cdC8vIEJ5IGRlZmF1bHQsIGFkZCA8c3R5bGU+IHRhZ3MgdG8gdGhlIGJvdHRvbSBvZiA8aGVhZD4uXG5cdGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJ1bmRlZmluZWRcIikgb3B0aW9ucy5pbnNlcnRBdCA9IFwiYm90dG9tXCI7XG5cblx0dmFyIHN0eWxlcyA9IGxpc3RUb1N0eWxlcyhsaXN0KTtcblx0YWRkU3R5bGVzVG9Eb20oc3R5bGVzLCBvcHRpb25zKTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcblx0XHR2YXIgbWF5UmVtb3ZlID0gW107XG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcblx0XHRcdGRvbVN0eWxlLnJlZnMtLTtcblx0XHRcdG1heVJlbW92ZS5wdXNoKGRvbVN0eWxlKTtcblx0XHR9XG5cdFx0aWYobmV3TGlzdCkge1xuXHRcdFx0dmFyIG5ld1N0eWxlcyA9IGxpc3RUb1N0eWxlcyhuZXdMaXN0KTtcblx0XHRcdGFkZFN0eWxlc1RvRG9tKG5ld1N0eWxlcywgb3B0aW9ucyk7XG5cdFx0fVxuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBtYXlSZW1vdmUubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBkb21TdHlsZSA9IG1heVJlbW92ZVtpXTtcblx0XHRcdGlmKGRvbVN0eWxlLnJlZnMgPT09IDApIHtcblx0XHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKVxuXHRcdFx0XHRcdGRvbVN0eWxlLnBhcnRzW2pdKCk7XG5cdFx0XHRcdGRlbGV0ZSBzdHlsZXNJbkRvbVtkb21TdHlsZS5pZF07XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xufVxuXG5mdW5jdGlvbiBhZGRTdHlsZXNUb0RvbShzdHlsZXMsIG9wdGlvbnMpIHtcblx0Zm9yKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xuXHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuXHRcdGlmKGRvbVN0eWxlKSB7XG5cdFx0XHRkb21TdHlsZS5yZWZzKys7XG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0ZG9tU3R5bGUucGFydHNbal0oaXRlbS5wYXJ0c1tqXSk7XG5cdFx0XHR9XG5cdFx0XHRmb3IoOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRkb21TdHlsZS5wYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0dmFyIHBhcnRzID0gW107XG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRwYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcblx0XHRcdH1cblx0XHRcdHN0eWxlc0luRG9tW2l0ZW0uaWRdID0ge2lkOiBpdGVtLmlkLCByZWZzOiAxLCBwYXJ0czogcGFydHN9O1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBsaXN0VG9TdHlsZXMobGlzdCkge1xuXHR2YXIgc3R5bGVzID0gW107XG5cdHZhciBuZXdTdHlsZXMgPSB7fTtcblx0Zm9yKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgaXRlbSA9IGxpc3RbaV07XG5cdFx0dmFyIGlkID0gaXRlbVswXTtcblx0XHR2YXIgY3NzID0gaXRlbVsxXTtcblx0XHR2YXIgbWVkaWEgPSBpdGVtWzJdO1xuXHRcdHZhciBzb3VyY2VNYXAgPSBpdGVtWzNdO1xuXHRcdHZhciBwYXJ0ID0ge2NzczogY3NzLCBtZWRpYTogbWVkaWEsIHNvdXJjZU1hcDogc291cmNlTWFwfTtcblx0XHRpZighbmV3U3R5bGVzW2lkXSlcblx0XHRcdHN0eWxlcy5wdXNoKG5ld1N0eWxlc1tpZF0gPSB7aWQ6IGlkLCBwYXJ0czogW3BhcnRdfSk7XG5cdFx0ZWxzZVxuXHRcdFx0bmV3U3R5bGVzW2lkXS5wYXJ0cy5wdXNoKHBhcnQpO1xuXHR9XG5cdHJldHVybiBzdHlsZXM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBzdHlsZUVsZW1lbnQpIHtcblx0dmFyIGhlYWQgPSBnZXRIZWFkRWxlbWVudCgpO1xuXHR2YXIgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AgPSBzdHlsZUVsZW1lbnRzSW5zZXJ0ZWRBdFRvcFtzdHlsZUVsZW1lbnRzSW5zZXJ0ZWRBdFRvcC5sZW5ndGggLSAxXTtcblx0aWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwidG9wXCIpIHtcblx0XHRpZighbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3ApIHtcblx0XHRcdGhlYWQuaW5zZXJ0QmVmb3JlKHN0eWxlRWxlbWVudCwgaGVhZC5maXJzdENoaWxkKTtcblx0XHR9IGVsc2UgaWYobGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpIHtcblx0XHRcdGhlYWQuaW5zZXJ0QmVmb3JlKHN0eWxlRWxlbWVudCwgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRoZWFkLmFwcGVuZENoaWxkKHN0eWxlRWxlbWVudCk7XG5cdFx0fVxuXHRcdHN0eWxlRWxlbWVudHNJbnNlcnRlZEF0VG9wLnB1c2goc3R5bGVFbGVtZW50KTtcblx0fSBlbHNlIGlmIChvcHRpb25zLmluc2VydEF0ID09PSBcImJvdHRvbVwiKSB7XG5cdFx0aGVhZC5hcHBlbmRDaGlsZChzdHlsZUVsZW1lbnQpO1xuXHR9IGVsc2Uge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgdmFsdWUgZm9yIHBhcmFtZXRlciAnaW5zZXJ0QXQnLiBNdXN0IGJlICd0b3AnIG9yICdib3R0b20nLlwiKTtcblx0fVxufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG5cdHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG5cdHZhciBpZHggPSBzdHlsZUVsZW1lbnRzSW5zZXJ0ZWRBdFRvcC5pbmRleE9mKHN0eWxlRWxlbWVudCk7XG5cdGlmKGlkeCA+PSAwKSB7XG5cdFx0c3R5bGVFbGVtZW50c0luc2VydGVkQXRUb3Auc3BsaWNlKGlkeCwgMSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcblx0c3R5bGVFbGVtZW50LnR5cGUgPSBcInRleHQvY3NzXCI7XG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBzdHlsZUVsZW1lbnQpO1xuXHRyZXR1cm4gc3R5bGVFbGVtZW50O1xufVxuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlRWxlbWVudCwgdXBkYXRlLCByZW1vdmU7XG5cblx0aWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG5cdFx0dmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG5cdFx0c3R5bGVFbGVtZW50ID0gc2luZ2xldG9uRWxlbWVudCB8fCAoc2luZ2xldG9uRWxlbWVudCA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKSk7XG5cdFx0dXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlRWxlbWVudCwgc3R5bGVJbmRleCwgZmFsc2UpO1xuXHRcdHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZUVsZW1lbnQsIHN0eWxlSW5kZXgsIHRydWUpO1xuXHR9IGVsc2Uge1xuXHRcdHN0eWxlRWxlbWVudCA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKTtcblx0XHR1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGVFbGVtZW50KTtcblx0XHRyZW1vdmUgPSBmdW5jdGlvbigpIHtcblx0XHRcdHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuXHRcdH07XG5cdH1cblxuXHR1cGRhdGUob2JqKTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG5cdFx0aWYobmV3T2JqKSB7XG5cdFx0XHRpZihuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApXG5cdFx0XHRcdHJldHVybjtcblx0XHRcdHVwZGF0ZShvYmogPSBuZXdPYmopO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZW1vdmUoKTtcblx0XHR9XG5cdH07XG59XG5cbnZhciByZXBsYWNlVGV4dCA9IChmdW5jdGlvbiAoKSB7XG5cdHZhciB0ZXh0U3RvcmUgPSBbXTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gKGluZGV4LCByZXBsYWNlbWVudCkge1xuXHRcdHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcblx0XHRyZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcblx0fTtcbn0pKCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcoc3R5bGVFbGVtZW50LCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcblx0dmFyIGNzcyA9IHJlbW92ZSA/IFwiXCIgOiBvYmouY3NzO1xuXG5cdGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuXHRcdHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcblx0fSBlbHNlIHtcblx0XHR2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG5cdFx0dmFyIGNoaWxkTm9kZXMgPSBzdHlsZUVsZW1lbnQuY2hpbGROb2Rlcztcblx0XHRpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG5cdFx0aWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG5cdFx0XHRzdHlsZUVsZW1lbnQuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0c3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGNzc05vZGUpO1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlRWxlbWVudCwgb2JqKSB7XG5cdHZhciBjc3MgPSBvYmouY3NzO1xuXHR2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG5cdHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG5cdGlmIChtZWRpYSkge1xuXHRcdHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJtZWRpYVwiLCBtZWRpYSk7XG5cdH1cblxuXHRpZiAoc291cmNlTWFwKSB7XG5cdFx0Ly8gaHR0cHM6Ly9kZXZlbG9wZXIuY2hyb21lLmNvbS9kZXZ0b29scy9kb2NzL2phdmFzY3JpcHQtZGVidWdnaW5nXG5cdFx0Ly8gdGhpcyBtYWtlcyBzb3VyY2UgbWFwcyBpbnNpZGUgc3R5bGUgdGFncyB3b3JrIHByb3Blcmx5IGluIENocm9tZVxuXHRcdGNzcyArPSAnXFxuLyojIHNvdXJjZVVSTD0nICsgc291cmNlTWFwLnNvdXJjZXNbMF0gKyAnICovJztcblx0XHQvLyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8yNjYwMzg3NVxuXHRcdGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIgKyBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpICsgXCIgKi9cIjtcblx0fVxuXG5cdGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuXHRcdHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG5cdH0gZWxzZSB7XG5cdFx0d2hpbGUoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcblx0XHRcdHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG5cdFx0fVxuXHRcdHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcblx0fVxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1zdHlsZS1sb2FkZXIvYWRkU3R5bGVzLmpzXG4vLyBtb2R1bGUgaWQgPSA5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzPXtyZW5kZXI6ZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO1xuICByZXR1cm4gX3ZtLl9oKCdoMScsIFtcIkF1dGggRmxvd1wiICsgX3ZtLl9zKF92bS5sb2dnZWRJbildKVxufSxzdGF0aWNSZW5kZXJGbnM6IFtdfVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikucmVyZW5kZXIoXCJkYXRhLXYtMjRlNzc4OGJcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIuanM/aWQ9ZGF0YS12LTI0ZTc3ODhiIS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9zcmMvdmlld3MvaW5kZXgvdmlldy52dWVcbi8vIG1vZHVsZSBpZCA9IDEwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxyXG4gKiDmj4/ov7A6IOeUqOaIt+inhuWbvlxyXG4gKiDniYjmnYM6IENvcHlyaWdodCAoYykgMjAxNlxyXG4gKiDlhazlj7g6IOa3seWcs+W4guaYiuaZqOenkeaKgOW8gOWPkeaciemZkOWFrOWPuFxyXG4gKiDkvZzogIU6IOmZiOWFg1xyXG4gKiDniYjmnKw6IDEuMFxyXG4gKiDliJvlu7rml6XmnJ86IDIwMTYvMTEvMjNcclxuICog5Yib5bu65pe26Ze0OiAxNjoyN1xyXG4gKi9cclxubGV0IHZ1ZSA9IHJlcXVpcmUoXCIuL3ZpZXcudnVlXCIpO1xyXG4vLyDlr7nosaHnm5HlkKxcclxudnVlLndhdGNoID0ge1xyXG4gICAgJHJvdXRlOiBmdW5jdGlvbiAodG8sIGZyb20pIHtcclxuICAgICAgICBjb25zb2xlLmxvZyh0byk7XHJcbiAgICAgICAgY29uc29sZS5sb2coZnJvbSk7XHJcbiAgICB9XHJcbn07XHJcblxyXG4vLyDmlbDmja7liJ3lp4vljJZcclxudnVlLmRhdGEgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIG5hbWU6IG51bGwsXHJcbiAgICAgICAgbWVzc2FnZTogXCJIZWxsbyBXb3JsZCFcIlxyXG4gICAgfVxyXG59O1xyXG5cclxuLy8g57uE5Lu25Yid5aeL5YyW5LqL5Lu2XHJcbnZ1ZS5jcmVhdGVkID0gZnVuY3Rpb24gKCkge1xyXG4gICAgY29uc29sZS5sb2codGhpcyk7XHJcbiAgICB0aGlzW1wiZmV0Y2hEYXRhXCJdKCk7XHJcbiAgICBjb25zb2xlLmxvZygnPT09PT1Vc2VyVmlldyBDcmVhdGVkPT09PT0nKTtcclxufTtcclxuXHJcbnZ1ZS5tZXRob2RzID0ge1xyXG4gICAgZmV0Y2hEYXRhICgpIHtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpPT4ge1xyXG4gICAgICAgICAgICB0aGlzLm5hbWUgPSBcIlVzZXIgQ3JlYXRlZFwiO1xyXG4gICAgICAgIH0sIDIwMDApO1xyXG4gICAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgdnVlO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0U6L1Rlc3RXb3JrL3Z1ZS9zcmMvdmlld3MvdXNlci92aWV3LmpzIiwidmFyIF9fdnVlX2V4cG9ydHNfXywgX192dWVfb3B0aW9uc19fXG52YXIgX192dWVfc3R5bGVzX18gPSB7fVxuXG4vKiBzdHlsZXMgKi9cbnJlcXVpcmUoXCIhIXZ1ZS1zdHlsZS1sb2FkZXIhY3NzLWxvYWRlcj9zb3VyY2VNYXAhdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXI/aWQ9ZGF0YS12LWYyNjUxZGFjIXZ1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c3R5bGVzJmluZGV4PTAhLi92aWV3LnZ1ZVwiKVxuXG4vKiB0ZW1wbGF0ZSAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX18gPSByZXF1aXJlKFwiISF2dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj9pZD1kYXRhLXYtZjI2NTFkYWMhdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vdmlldy52dWVcIilcbl9fdnVlX29wdGlvbnNfXyA9IF9fdnVlX2V4cG9ydHNfXyA9IF9fdnVlX2V4cG9ydHNfXyB8fCB7fVxuaWYgKFxuICB0eXBlb2YgX192dWVfZXhwb3J0c19fLmRlZmF1bHQgPT09IFwib2JqZWN0XCIgfHxcbiAgdHlwZW9mIF9fdnVlX2V4cG9ydHNfXy5kZWZhdWx0ID09PSBcImZ1bmN0aW9uXCJcbikge1xuaWYgKE9iamVjdC5rZXlzKF9fdnVlX2V4cG9ydHNfXykuc29tZShmdW5jdGlvbiAoa2V5KSB7IHJldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleSAhPT0gXCJfX2VzTW9kdWxlXCIgfSkpIHtjb25zb2xlLmVycm9yKFwibmFtZWQgZXhwb3J0cyBhcmUgbm90IHN1cHBvcnRlZCBpbiAqLnZ1ZSBmaWxlcy5cIil9XG5fX3Z1ZV9vcHRpb25zX18gPSBfX3Z1ZV9leHBvcnRzX18gPSBfX3Z1ZV9leHBvcnRzX18uZGVmYXVsdFxufVxuaWYgKHR5cGVvZiBfX3Z1ZV9vcHRpb25zX18gPT09IFwiZnVuY3Rpb25cIikge1xuICBfX3Z1ZV9vcHRpb25zX18gPSBfX3Z1ZV9vcHRpb25zX18ub3B0aW9uc1xufVxuX192dWVfb3B0aW9uc19fLl9fZmlsZSA9IFwiRTpcXFxcVGVzdFdvcmtcXFxcdnVlXFxcXHNyY1xcXFx2aWV3c1xcXFx1c2VyXFxcXHZpZXcudnVlXCJcbl9fdnVlX29wdGlvbnNfXy5yZW5kZXIgPSBfX3Z1ZV90ZW1wbGF0ZV9fLnJlbmRlclxuX192dWVfb3B0aW9uc19fLnN0YXRpY1JlbmRlckZucyA9IF9fdnVlX3RlbXBsYXRlX18uc3RhdGljUmVuZGVyRm5zXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi1mMjY1MWRhY1wiLCBfX3Z1ZV9vcHRpb25zX18pXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi1mMjY1MWRhY1wiLCBfX3Z1ZV9vcHRpb25zX18pXG4gIH1cbn0pKCl9XG5pZiAoX192dWVfb3B0aW9uc19fLmZ1bmN0aW9uYWwpIHtjb25zb2xlLmVycm9yKFwiW3Z1ZS1sb2FkZXJdIHZpZXcudnVlOiBmdW5jdGlvbmFsIGNvbXBvbmVudHMgYXJlIG5vdCBzdXBwb3J0ZWQgYW5kIHNob3VsZCBiZSBkZWZpbmVkIGluIHBsYWluIGpzIGZpbGVzIHVzaW5nIHJlbmRlciBmdW5jdGlvbnMuXCIpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9fdnVlX2V4cG9ydHNfX1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvdmlld3MvdXNlci92aWV3LnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi1mMjY1MWRhYyEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vdmlldy52dWVcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIHt9KTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuXHQvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuXHRpZighY29udGVudC5sb2NhbHMpIHtcblx0XHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LWYyNjUxZGFjIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi92aWV3LnZ1ZVwiLCBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LWYyNjUxZGFjIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi92aWV3LnZ1ZVwiKTtcblx0XHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXHRcdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHRcdH0pO1xuXHR9XG5cdC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1zdHlsZS1sb2FkZXIhLi9+L2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vfi92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtZjI2NTFkYWMhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9zcmMvdmlld3MvdXNlci92aWV3LnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG5oMSB7XFxuICAgIGNvbG9yOiAjRjAwO1xcbn1cXG5cIiwgXCJcIiwge1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wiLy4vc3JjL3ZpZXdzL3VzZXIvdmlldy52dWU/MjA1MjdjNzVcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIjtBQUNBO0lBQ0EsWUFBQTtDQUNBXCIsXCJmaWxlXCI6XCJ2aWV3LnZ1ZVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI8c3R5bGU+XFxyXFxuICAgIGgxIHtcXHJcXG4gICAgICAgIGNvbG9yOiAjRjAwO1xcclxcbiAgICB9XFxyXFxuPC9zdHlsZT5cXHJcXG5cXHJcXG48dGVtcGxhdGU+XFxyXFxuICAgIDxkaXYgaWQ9XFxcInVzZXJcXFwiPlxcclxcbiAgICAgICAgPGgxPkhlbGxvIHt7JGRhdGEubmFtZX19PC9oMT5cXHJcXG4gICAgICAgIDxwPnt7JHJvdXRlLnBhcmFtcy5pZH19PC9wPlxcclxcbiAgICAgICAgPGRpdiB2LXRleHQ9XFxcIiRkYXRhLm1lc3NhZ2VcXFwiPjwvZGl2PlxcclxcbiAgICAgICAgPHJvdXRlci12aWV3Pjwvcm91dGVyLXZpZXc+XFxyXFxuICAgIDwvZGl2PlxcclxcbjwvdGVtcGxhdGU+XCJdLFwic291cmNlUm9vdFwiOlwid2VicGFjazovL1wifV0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9+L3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi1mMjY1MWRhYyEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3NyYy92aWV3cy91c2VyL3ZpZXcudnVlXG4vLyBtb2R1bGUgaWQgPSAxNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpcztcbiAgcmV0dXJuIF92bS5faCgnZGl2Jywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcImlkXCI6IFwidXNlclwiXG4gICAgfVxuICB9LCBbX3ZtLl9oKCdoMScsIFtcIkhlbGxvIFwiICsgX3ZtLl9zKF92bS4kZGF0YS5uYW1lKV0pLCBcIiBcIiwgX3ZtLl9oKCdwJywgW192bS5fcyhfdm0uJHJvdXRlLnBhcmFtcy5pZCldKSwgXCIgXCIsIF92bS5faCgnZGl2Jywge1xuICAgIGRvbVByb3BzOiB7XG4gICAgICBcInRleHRDb250ZW50XCI6IF92bS5fcyhfdm0uJGRhdGEubWVzc2FnZSlcbiAgICB9XG4gIH0pLCBcIiBcIiwgX3ZtLl9oKCdyb3V0ZXItdmlldycpXSlcbn0sc3RhdGljUmVuZGVyRm5zOiBbXX1cbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpLnJlcmVuZGVyKFwiZGF0YS12LWYyNjUxZGFjXCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyLmpzP2lkPWRhdGEtdi1mMjY1MWRhYyEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vc3JjL3ZpZXdzL3VzZXIvdmlldy52dWVcbi8vIG1vZHVsZSBpZCA9IDE1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxyXG4gKiDmj4/ov7A6IOeUqOaIt+inhuWbvlxyXG4gKiDniYjmnYM6IENvcHlyaWdodCAoYykgMjAxNlxyXG4gKiDlhazlj7g6IOa3seWcs+W4guaYiuaZqOenkeaKgOW8gOWPkeaciemZkOWFrOWPuFxyXG4gKiDkvZzogIU6IOmZiOWFg1xyXG4gKiDniYjmnKw6IDEuMFxyXG4gKiDliJvlu7rml6XmnJ86IDIwMTYvMTEvMjNcclxuICog5Yib5bu65pe26Ze0OiAxNjoyN1xyXG4gKi9cclxubGV0IHZ1ZSA9IHJlcXVpcmUoXCIuL3ZpZXcudnVlXCIpO1xyXG5cclxuLy8g5pWw5o2u5Yid5aeL5YyWXHJcbnZ1ZS5kYXRhID0gZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBuYW1lOiBcIlRhZ1ZpZXdcIlxyXG4gICAgfVxyXG59O1xyXG5cclxuLy8g57uE5Lu25Yid5aeL5YyW5LqL5Lu2XHJcbnZ1ZS5jcmVhdGVkID0gZnVuY3Rpb24gKCkge1xyXG4gICAgY29uc29sZS5sb2coJz09PT09VGFnPT09PT0nKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHZ1ZTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9FOi9UZXN0V29yay92dWUvc3JjL3ZpZXdzL3RhZy92aWV3LmpzIiwidmFyIF9fdnVlX2V4cG9ydHNfXywgX192dWVfb3B0aW9uc19fXG52YXIgX192dWVfc3R5bGVzX18gPSB7fVxuXG4vKiBzdHlsZXMgKi9cbnJlcXVpcmUoXCIhIXZ1ZS1zdHlsZS1sb2FkZXIhY3NzLWxvYWRlcj9zb3VyY2VNYXAhdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXI/aWQ9ZGF0YS12LTVkMzFiM2MzIXZ1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c3R5bGVzJmluZGV4PTAhLi92aWV3LnZ1ZVwiKVxuXG4vKiB0ZW1wbGF0ZSAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX18gPSByZXF1aXJlKFwiISF2dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj9pZD1kYXRhLXYtNWQzMWIzYzMhdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vdmlldy52dWVcIilcbl9fdnVlX29wdGlvbnNfXyA9IF9fdnVlX2V4cG9ydHNfXyA9IF9fdnVlX2V4cG9ydHNfXyB8fCB7fVxuaWYgKFxuICB0eXBlb2YgX192dWVfZXhwb3J0c19fLmRlZmF1bHQgPT09IFwib2JqZWN0XCIgfHxcbiAgdHlwZW9mIF9fdnVlX2V4cG9ydHNfXy5kZWZhdWx0ID09PSBcImZ1bmN0aW9uXCJcbikge1xuaWYgKE9iamVjdC5rZXlzKF9fdnVlX2V4cG9ydHNfXykuc29tZShmdW5jdGlvbiAoa2V5KSB7IHJldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleSAhPT0gXCJfX2VzTW9kdWxlXCIgfSkpIHtjb25zb2xlLmVycm9yKFwibmFtZWQgZXhwb3J0cyBhcmUgbm90IHN1cHBvcnRlZCBpbiAqLnZ1ZSBmaWxlcy5cIil9XG5fX3Z1ZV9vcHRpb25zX18gPSBfX3Z1ZV9leHBvcnRzX18gPSBfX3Z1ZV9leHBvcnRzX18uZGVmYXVsdFxufVxuaWYgKHR5cGVvZiBfX3Z1ZV9vcHRpb25zX18gPT09IFwiZnVuY3Rpb25cIikge1xuICBfX3Z1ZV9vcHRpb25zX18gPSBfX3Z1ZV9vcHRpb25zX18ub3B0aW9uc1xufVxuX192dWVfb3B0aW9uc19fLl9fZmlsZSA9IFwiRTpcXFxcVGVzdFdvcmtcXFxcdnVlXFxcXHNyY1xcXFx2aWV3c1xcXFx0YWdcXFxcdmlldy52dWVcIlxuX192dWVfb3B0aW9uc19fLnJlbmRlciA9IF9fdnVlX3RlbXBsYXRlX18ucmVuZGVyXG5fX3Z1ZV9vcHRpb25zX18uc3RhdGljUmVuZGVyRm5zID0gX192dWVfdGVtcGxhdGVfXy5zdGF0aWNSZW5kZXJGbnNcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTVkMzFiM2MzXCIsIF9fdnVlX29wdGlvbnNfXylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTVkMzFiM2MzXCIsIF9fdnVlX29wdGlvbnNfXylcbiAgfVxufSkoKX1cbmlmIChfX3Z1ZV9vcHRpb25zX18uZnVuY3Rpb25hbCkge2NvbnNvbGUuZXJyb3IoXCJbdnVlLWxvYWRlcl0gdmlldy52dWU6IGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhcmUgbm90IHN1cHBvcnRlZCBhbmQgc2hvdWxkIGJlIGRlZmluZWQgaW4gcGxhaW4ganMgZmlsZXMgdXNpbmcgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbm1vZHVsZS5leHBvcnRzID0gX192dWVfZXhwb3J0c19fXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy92aWV3cy90YWcvdmlldy52dWVcbi8vIG1vZHVsZSBpZCA9IDE3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtNWQzMWIzYzMhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3ZpZXcudnVlXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCB7fSk7XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcblx0Ly8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0aWYoIWNvbnRlbnQubG9jYWxzKSB7XG5cdFx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi01ZDMxYjNjMyEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vdmlldy52dWVcIiwgZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi01ZDMxYjNjMyEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vdmlldy52dWVcIik7XG5cdFx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblx0XHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0XHR9KTtcblx0fVxuXHQvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtc3R5bGUtbG9hZGVyIS4vfi9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL34vdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LTVkMzFiM2MzIS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vc3JjL3ZpZXdzL3RhZy92aWV3LnZ1ZVxuLy8gbW9kdWxlIGlkID0gMThcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG5oMSB7XFxuICAgIGNvbG9yOiAjRjAwO1xcbn1cXG5cIiwgXCJcIiwge1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wiLy4vc3JjL3ZpZXdzL3RhZy92aWV3LnZ1ZT9lMzg2MWI0Y1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiO0FBS0E7SUFDQSxZQUFBO0NBQ0FcIixcImZpbGVcIjpcInZpZXcudnVlXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjx0ZW1wbGF0ZT5cXHJcXG4gICAgPGgxPumhtemdojp7eyRkYXRhLm5hbWV9fTwvaDE+XFxyXFxuPC90ZW1wbGF0ZT5cXHJcXG5cXHJcXG48c3R5bGU+XFxyXFxuICAgIGgxIHtcXHJcXG4gICAgICAgIGNvbG9yOiAjRjAwO1xcclxcbiAgICB9XFxyXFxuPC9zdHlsZT5cIl0sXCJzb3VyY2VSb290XCI6XCJ3ZWJwYWNrOi8vXCJ9XSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL34vdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LTVkMzFiM2MzIS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vc3JjL3ZpZXdzL3RhZy92aWV3LnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7XG4gIHJldHVybiBfdm0uX2goJ2gxJywgW1wi6aG16Z2iOlwiICsgX3ZtLl9zKF92bS4kZGF0YS5uYW1lKV0pXG59LHN0YXRpY1JlbmRlckZuczogW119XG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKS5yZXJlbmRlcihcImRhdGEtdi01ZDMxYjNjM1wiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci5qcz9pZD1kYXRhLXYtNWQzMWIzYzMhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3NyYy92aWV3cy90YWcvdmlldy52dWVcbi8vIG1vZHVsZSBpZCA9IDIwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxyXG4gKiDmj4/ov7A6IOS8muWRmOinhuWbvlxyXG4gKiDniYjmnYM6IENvcHlyaWdodCAoYykgMjAxNlxyXG4gKiDlhazlj7g6IOa3seWcs+W4guaYiuaZqOenkeaKgOW8gOWPkeaciemZkOWFrOWPuFxyXG4gKiDkvZzogIU6IOmZiOWFg1xyXG4gKiDniYjmnKw6IDEuMFxyXG4gKiDliJvlu7rml6XmnJ86IDIwMTYvMTEvMjRcclxuICog5Yib5bu65pe26Ze0OiAxNToyNFxyXG4gKi9cclxuaW1wb3J0IFZpZXcgZnJvbSBcIi4uLy4uLy4uL3V0aWxzL3ZpZXdcIjtcclxubGV0IHZ1ZSA9IHJlcXVpcmUoXCIuL3ZpZXcudnVlXCIpO1xyXG5cclxuY2xhc3MgVXNlck1lbWJlclZpZXcgZXh0ZW5kcyBWaWV3IHtcclxuICAgIGNvbnN0cnVjdG9yKHZpZXcpIHtcclxuICAgICAgICBzdXBlcih2aWV3KTtcclxuICAgIH1cclxuXHJcbiAgICBkYXRhICgpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBuYW1lOiBcIlVzZXJNZW1iZXJWaWV3XCJcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBuZXcgVXNlck1lbWJlclZpZXcodnVlKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9FOi9UZXN0V29yay92dWUvc3JjL3ZpZXdzL3VzZXIvbWVtYmVyL3ZpZXcuanMiLCIvKipcclxuICog5o+P6L+wOiDop4blm77nsbtcclxuICog54mI5p2DOiBDb3B5cmlnaHQgKGMpIDIwMTZcclxuICog5YWs5Y+4OiDmt7HlnLPluILmmIrmmajnp5HmioDlvIDlj5HmnInpmZDlhazlj7hcclxuICog5L2c6ICFOiDpmYjlhYNcclxuICog54mI5pysOiAxLjBcclxuICog5Yib5bu65pel5pyfOiAyMDE2LzExLzIzXHJcbiAqIOWIm+W7uuaXtumXtDogMTY6MjFcclxuICovXHJcbmNsYXNzIFZpZXcge1xyXG4gICAgY29uc3RydWN0b3IodmlldyA9IHt9KSB7XHJcbiAgICAgICAgZm9yIChsZXQgayBpbiB2aWV3KSB7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gIOWwhlZ1Zeaooeadv+WvueixoeeahOaWueazleaLt+i0neWIsFZpZXflrp7kvovkuIpcclxuICAgICAgICAgICAgaWYgKHZpZXcuaGFzT3duUHJvcGVydHkoaykpXHJcbiAgICAgICAgICAgICAgICB0aGlzW2tdID0gdmlld1trXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5tZXRob2RzID0ge307XHJcbiAgICAgICAgdGhpcy5tZXRob2RzLmRhdGFzID0ge307XHJcbiAgICB9XHJcblxyXG4gICAgY29uZmlnKGNvbmZpZ01ldGhvZCkge1xyXG4gICAgICAgIGxldCBjb25maWcgPSBuZXcgY29uZmlnTWV0aG9kKCk7XHJcbiAgICAgICAgZm9yIChsZXQgayBpbiBjb25maWcpIHtcclxuICAgICAgICAgICAgaWYgKGNvbmZpZy5oYXNPd25Qcm9wZXJ0eShrKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRBdHRyaWJ1dGUoaywgY29uZmlnW2tdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzWydBQUFBQUFBJ10gPSBcIkFBQUFBQUFBQUFBXCI7XHJcbiAgICAgICAgdGhpcy5tZXRob2RzWydCQkJCQkJCJ10gPSBcIkJCQkJCQkJcIjtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRBdHRyaWJ1dGUobmFtZSwgdmFsdWUpIHtcclxuICAgICAgICBpZiAobmFtZSA9PSBcImNyZWF0ZWRcIiB8fCBuYW1lID09IFwid2F0Y2hcInx8IG5hbWUgPT0gXCJkYXRhXCIpIHtcclxuICAgICAgICAgICAgdGhpc1tuYW1lXSA9IHZhbHVlO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodHlwZW9mKHZhbHVlKSA9PSBcImZ1bmN0aW9uXCIpIHtcclxuICAgICAgICAgICAgdGhpcy5tZXRob2RzW25hbWVdID0gdmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBWaWV3O1xyXG5leHBvcnQge1ZpZXd9O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0U6L1Rlc3RXb3JrL3Z1ZS9zcmMvdXRpbHMvdmlldy5qcyIsInZhciBfX3Z1ZV9leHBvcnRzX18sIF9fdnVlX29wdGlvbnNfX1xudmFyIF9fdnVlX3N0eWxlc19fID0ge31cblxuLyogdGVtcGxhdGUgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9fID0gcmVxdWlyZShcIiEhdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/aWQ9ZGF0YS12LTM3NTdiNmIyIXZ1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3ZpZXcudnVlXCIpXG5fX3Z1ZV9vcHRpb25zX18gPSBfX3Z1ZV9leHBvcnRzX18gPSBfX3Z1ZV9leHBvcnRzX18gfHwge31cbmlmIChcbiAgdHlwZW9mIF9fdnVlX2V4cG9ydHNfXy5kZWZhdWx0ID09PSBcIm9iamVjdFwiIHx8XG4gIHR5cGVvZiBfX3Z1ZV9leHBvcnRzX18uZGVmYXVsdCA9PT0gXCJmdW5jdGlvblwiXG4pIHtcbmlmIChPYmplY3Qua2V5cyhfX3Z1ZV9leHBvcnRzX18pLnNvbWUoZnVuY3Rpb24gKGtleSkgeyByZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkgIT09IFwiX19lc01vZHVsZVwiIH0pKSB7Y29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuX192dWVfb3B0aW9uc19fID0gX192dWVfZXhwb3J0c19fID0gX192dWVfZXhwb3J0c19fLmRlZmF1bHRcbn1cbmlmICh0eXBlb2YgX192dWVfb3B0aW9uc19fID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgX192dWVfb3B0aW9uc19fID0gX192dWVfb3B0aW9uc19fLm9wdGlvbnNcbn1cbl9fdnVlX29wdGlvbnNfXy5fX2ZpbGUgPSBcIkU6XFxcXFRlc3RXb3JrXFxcXHZ1ZVxcXFxzcmNcXFxcdmlld3NcXFxcdXNlclxcXFxtZW1iZXJcXFxcdmlldy52dWVcIlxuX192dWVfb3B0aW9uc19fLnJlbmRlciA9IF9fdnVlX3RlbXBsYXRlX18ucmVuZGVyXG5fX3Z1ZV9vcHRpb25zX18uc3RhdGljUmVuZGVyRm5zID0gX192dWVfdGVtcGxhdGVfXy5zdGF0aWNSZW5kZXJGbnNcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTM3NTdiNmIyXCIsIF9fdnVlX29wdGlvbnNfXylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTM3NTdiNmIyXCIsIF9fdnVlX29wdGlvbnNfXylcbiAgfVxufSkoKX1cbmlmIChfX3Z1ZV9vcHRpb25zX18uZnVuY3Rpb25hbCkge2NvbnNvbGUuZXJyb3IoXCJbdnVlLWxvYWRlcl0gdmlldy52dWU6IGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhcmUgbm90IHN1cHBvcnRlZCBhbmQgc2hvdWxkIGJlIGRlZmluZWQgaW4gcGxhaW4ganMgZmlsZXMgdXNpbmcgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbm1vZHVsZS5leHBvcnRzID0gX192dWVfZXhwb3J0c19fXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy92aWV3cy91c2VyL21lbWJlci92aWV3LnZ1ZVxuLy8gbW9kdWxlIGlkID0gMjNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7XG4gIHJldHVybiBfdm0uX2goJ2RpdicsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJpZFwiOiBcInVzZXJcIlxuICAgIH1cbiAgfSwgW192bS5faCgnaDEnLCBbXCJIZWxsbyBcIiArIF92bS5fcyhfdm0ubmFtZSldKV0pXG59LHN0YXRpY1JlbmRlckZuczogW119XG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKS5yZXJlbmRlcihcImRhdGEtdi0zNzU3YjZiMlwiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci5qcz9pZD1kYXRhLXYtMzc1N2I2YjIhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3NyYy92aWV3cy91c2VyL21lbWJlci92aWV3LnZ1ZVxuLy8gbW9kdWxlIGlkID0gMjRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuL21haW4uc2Nzc1wiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCB7fSk7XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcblx0Ly8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0aWYoIWNvbnRlbnQubG9jYWxzKSB7XG5cdFx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuL21haW4uc2Nzc1wiLCBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4vbWFpbi5zY3NzXCIpO1xuXHRcdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cdFx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdFx0fSk7XG5cdH1cblx0Ly8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9hc3NldHMvc2Nzcy9tYWluLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDI1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwOyB9XFxuXFxuYSB7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7IH1cXG5cXG4jYXBwICNtZW51IHtcXG4gIHBhZGRpbmc6IDIwcHggMDtcXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjRkYwO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyOyB9XFxuICAjYXBwICNtZW51IGEge1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIGhlaWdodDogMzBweDtcXG4gICAgbGluZS1oZWlnaHQ6IDMwcHg7XFxuICAgIGJhY2tncm91bmQ6ICNDQ0NDQ0M7XFxuICAgIHBhZGRpbmc6IDAgMjBweDsgfVxcblwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCIvLi9zcmMvYXNzZXRzL3Njc3Mvc3JjL2Fzc2V0cy9zY3NzL21haW4uc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLFdBQVc7RUFDWCxVQUFVLEVBQ1g7O0FBRUQ7RUFDRSxzQkFBc0IsRUFDdkI7O0FBRUQ7RUFFSSxnQkFBZTtFQUNmLDhCQUE2QjtFQUM3QixtQkFBbUIsRUFRcEI7RUFaSDtJQU1NLHNCQUFzQjtJQUN0QixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLG9CQUFvQjtJQUNwQixnQkFBZ0IsRUFDakJcIixcImZpbGVcIjpcIm1haW4uc2Nzc1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxufVxcclxcblxcclxcbmEge1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4jYXBwIHtcXHJcXG4gICNtZW51IHtcXHJcXG4gICAgcGFkZGluZzoyMHB4IDA7XFxyXFxuICAgIGJvcmRlci1ib3R0b206MnB4IHNvbGlkICNGRjA7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgYSB7XFxyXFxuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgICAgIGhlaWdodDogMzBweDtcXHJcXG4gICAgICBsaW5lLWhlaWdodDogMzBweDtcXHJcXG4gICAgICBiYWNrZ3JvdW5kOiAjQ0NDQ0NDO1xcclxcbiAgICAgIHBhZGRpbmc6IDAgMjBweDtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJ3ZWJwYWNrOi8vXCJ9XSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL34vc2Fzcy1sb2FkZXI/c291cmNlTWFwIS4vc3JjL2Fzc2V0cy9zY3NzL21haW4uc2Nzc1xuLy8gbW9kdWxlIGlkID0gMjZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLypcclxuXHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxyXG5cdEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcclxuKi9cclxudmFyIHN0eWxlc0luRG9tID0ge30sXHJcblx0bWVtb2l6ZSA9IGZ1bmN0aW9uKGZuKSB7XHJcblx0XHR2YXIgbWVtbztcclxuXHRcdHJldHVybiBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdGlmICh0eXBlb2YgbWVtbyA9PT0gXCJ1bmRlZmluZWRcIikgbWVtbyA9IGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcblx0XHRcdHJldHVybiBtZW1vO1xyXG5cdFx0fTtcclxuXHR9LFxyXG5cdGlzT2xkSUUgPSBtZW1vaXplKGZ1bmN0aW9uKCkge1xyXG5cdFx0cmV0dXJuIC9tc2llIFs2LTldXFxiLy50ZXN0KHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCkpO1xyXG5cdH0pLFxyXG5cdGdldEhlYWRFbGVtZW50ID0gbWVtb2l6ZShmdW5jdGlvbiAoKSB7XHJcblx0XHRyZXR1cm4gZG9jdW1lbnQuaGVhZCB8fCBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImhlYWRcIilbMF07XHJcblx0fSksXHJcblx0c2luZ2xldG9uRWxlbWVudCA9IG51bGwsXHJcblx0c2luZ2xldG9uQ291bnRlciA9IDAsXHJcblx0c3R5bGVFbGVtZW50c0luc2VydGVkQXRUb3AgPSBbXTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obGlzdCwgb3B0aW9ucykge1xyXG5cdGlmKHR5cGVvZiBERUJVRyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBERUJVRykge1xyXG5cdFx0aWYodHlwZW9mIGRvY3VtZW50ICE9PSBcIm9iamVjdFwiKSB0aHJvdyBuZXcgRXJyb3IoXCJUaGUgc3R5bGUtbG9hZGVyIGNhbm5vdCBiZSB1c2VkIGluIGEgbm9uLWJyb3dzZXIgZW52aXJvbm1lbnRcIik7XHJcblx0fVxyXG5cclxuXHRvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcclxuXHQvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cclxuXHQvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXHJcblx0aWYgKHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiA9PT0gXCJ1bmRlZmluZWRcIikgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XHJcblxyXG5cdC8vIEJ5IGRlZmF1bHQsIGFkZCA8c3R5bGU+IHRhZ3MgdG8gdGhlIGJvdHRvbSBvZiA8aGVhZD4uXHJcblx0aWYgKHR5cGVvZiBvcHRpb25zLmluc2VydEF0ID09PSBcInVuZGVmaW5lZFwiKSBvcHRpb25zLmluc2VydEF0ID0gXCJib3R0b21cIjtcclxuXHJcblx0dmFyIHN0eWxlcyA9IGxpc3RUb1N0eWxlcyhsaXN0KTtcclxuXHRhZGRTdHlsZXNUb0RvbShzdHlsZXMsIG9wdGlvbnMpO1xyXG5cclxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcclxuXHRcdHZhciBtYXlSZW1vdmUgPSBbXTtcclxuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XHJcblx0XHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xyXG5cdFx0XHRkb21TdHlsZS5yZWZzLS07XHJcblx0XHRcdG1heVJlbW92ZS5wdXNoKGRvbVN0eWxlKTtcclxuXHRcdH1cclxuXHRcdGlmKG5ld0xpc3QpIHtcclxuXHRcdFx0dmFyIG5ld1N0eWxlcyA9IGxpc3RUb1N0eWxlcyhuZXdMaXN0KTtcclxuXHRcdFx0YWRkU3R5bGVzVG9Eb20obmV3U3R5bGVzLCBvcHRpb25zKTtcclxuXHRcdH1cclxuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBtYXlSZW1vdmUubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0dmFyIGRvbVN0eWxlID0gbWF5UmVtb3ZlW2ldO1xyXG5cdFx0XHRpZihkb21TdHlsZS5yZWZzID09PSAwKSB7XHJcblx0XHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKVxyXG5cdFx0XHRcdFx0ZG9tU3R5bGUucGFydHNbal0oKTtcclxuXHRcdFx0XHRkZWxldGUgc3R5bGVzSW5Eb21bZG9tU3R5bGUuaWRdO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fTtcclxufVxyXG5cclxuZnVuY3Rpb24gYWRkU3R5bGVzVG9Eb20oc3R5bGVzLCBvcHRpb25zKSB7XHJcblx0Zm9yKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XHJcblx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcclxuXHRcdGlmKGRvbVN0eWxlKSB7XHJcblx0XHRcdGRvbVN0eWxlLnJlZnMrKztcclxuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSB7XHJcblx0XHRcdFx0ZG9tU3R5bGUucGFydHNbal0oaXRlbS5wYXJ0c1tqXSk7XHJcblx0XHRcdH1cclxuXHRcdFx0Zm9yKDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcclxuXHRcdFx0XHRkb21TdHlsZS5wYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcclxuXHRcdFx0fVxyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0dmFyIHBhcnRzID0gW107XHJcblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XHJcblx0XHRcdFx0cGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XHJcblx0XHRcdH1cclxuXHRcdFx0c3R5bGVzSW5Eb21baXRlbS5pZF0gPSB7aWQ6IGl0ZW0uaWQsIHJlZnM6IDEsIHBhcnRzOiBwYXJ0c307XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiBsaXN0VG9TdHlsZXMobGlzdCkge1xyXG5cdHZhciBzdHlsZXMgPSBbXTtcclxuXHR2YXIgbmV3U3R5bGVzID0ge307XHJcblx0Zm9yKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcclxuXHRcdHZhciBpdGVtID0gbGlzdFtpXTtcclxuXHRcdHZhciBpZCA9IGl0ZW1bMF07XHJcblx0XHR2YXIgY3NzID0gaXRlbVsxXTtcclxuXHRcdHZhciBtZWRpYSA9IGl0ZW1bMl07XHJcblx0XHR2YXIgc291cmNlTWFwID0gaXRlbVszXTtcclxuXHRcdHZhciBwYXJ0ID0ge2NzczogY3NzLCBtZWRpYTogbWVkaWEsIHNvdXJjZU1hcDogc291cmNlTWFwfTtcclxuXHRcdGlmKCFuZXdTdHlsZXNbaWRdKVxyXG5cdFx0XHRzdHlsZXMucHVzaChuZXdTdHlsZXNbaWRdID0ge2lkOiBpZCwgcGFydHM6IFtwYXJ0XX0pO1xyXG5cdFx0ZWxzZVxyXG5cdFx0XHRuZXdTdHlsZXNbaWRdLnBhcnRzLnB1c2gocGFydCk7XHJcblx0fVxyXG5cdHJldHVybiBzdHlsZXM7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBzdHlsZUVsZW1lbnQpIHtcclxuXHR2YXIgaGVhZCA9IGdldEhlYWRFbGVtZW50KCk7XHJcblx0dmFyIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wID0gc3R5bGVFbGVtZW50c0luc2VydGVkQXRUb3Bbc3R5bGVFbGVtZW50c0luc2VydGVkQXRUb3AubGVuZ3RoIC0gMV07XHJcblx0aWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwidG9wXCIpIHtcclxuXHRcdGlmKCFsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCkge1xyXG5cdFx0XHRoZWFkLmluc2VydEJlZm9yZShzdHlsZUVsZW1lbnQsIGhlYWQuZmlyc3RDaGlsZCk7XHJcblx0XHR9IGVsc2UgaWYobGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpIHtcclxuXHRcdFx0aGVhZC5pbnNlcnRCZWZvcmUoc3R5bGVFbGVtZW50LCBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZyk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRoZWFkLmFwcGVuZENoaWxkKHN0eWxlRWxlbWVudCk7XHJcblx0XHR9XHJcblx0XHRzdHlsZUVsZW1lbnRzSW5zZXJ0ZWRBdFRvcC5wdXNoKHN0eWxlRWxlbWVudCk7XHJcblx0fSBlbHNlIGlmIChvcHRpb25zLmluc2VydEF0ID09PSBcImJvdHRvbVwiKSB7XHJcblx0XHRoZWFkLmFwcGVuZENoaWxkKHN0eWxlRWxlbWVudCk7XHJcblx0fSBlbHNlIHtcclxuXHRcdHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgdmFsdWUgZm9yIHBhcmFtZXRlciAnaW5zZXJ0QXQnLiBNdXN0IGJlICd0b3AnIG9yICdib3R0b20nLlwiKTtcclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcclxuXHRzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xyXG5cdHZhciBpZHggPSBzdHlsZUVsZW1lbnRzSW5zZXJ0ZWRBdFRvcC5pbmRleE9mKHN0eWxlRWxlbWVudCk7XHJcblx0aWYoaWR4ID49IDApIHtcclxuXHRcdHN0eWxlRWxlbWVudHNJbnNlcnRlZEF0VG9wLnNwbGljZShpZHgsIDEpO1xyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcclxuXHR2YXIgc3R5bGVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xyXG5cdHN0eWxlRWxlbWVudC50eXBlID0gXCJ0ZXh0L2Nzc1wiO1xyXG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBzdHlsZUVsZW1lbnQpO1xyXG5cdHJldHVybiBzdHlsZUVsZW1lbnQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUxpbmtFbGVtZW50KG9wdGlvbnMpIHtcclxuXHR2YXIgbGlua0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlua1wiKTtcclxuXHRsaW5rRWxlbWVudC5yZWwgPSBcInN0eWxlc2hlZXRcIjtcclxuXHRpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgbGlua0VsZW1lbnQpO1xyXG5cdHJldHVybiBsaW5rRWxlbWVudDtcclxufVxyXG5cclxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XHJcblx0dmFyIHN0eWxlRWxlbWVudCwgdXBkYXRlLCByZW1vdmU7XHJcblxyXG5cdGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xyXG5cdFx0dmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XHJcblx0XHRzdHlsZUVsZW1lbnQgPSBzaW5nbGV0b25FbGVtZW50IHx8IChzaW5nbGV0b25FbGVtZW50ID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcclxuXHRcdHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZUVsZW1lbnQsIHN0eWxlSW5kZXgsIGZhbHNlKTtcclxuXHRcdHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZUVsZW1lbnQsIHN0eWxlSW5kZXgsIHRydWUpO1xyXG5cdH0gZWxzZSBpZihvYmouc291cmNlTWFwICYmXHJcblx0XHR0eXBlb2YgVVJMID09PSBcImZ1bmN0aW9uXCIgJiZcclxuXHRcdHR5cGVvZiBVUkwuY3JlYXRlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcclxuXHRcdHR5cGVvZiBVUkwucmV2b2tlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcclxuXHRcdHR5cGVvZiBCbG9iID09PSBcImZ1bmN0aW9uXCIgJiZcclxuXHRcdHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcclxuXHRcdHN0eWxlRWxlbWVudCA9IGNyZWF0ZUxpbmtFbGVtZW50KG9wdGlvbnMpO1xyXG5cdFx0dXBkYXRlID0gdXBkYXRlTGluay5iaW5kKG51bGwsIHN0eWxlRWxlbWVudCk7XHJcblx0XHRyZW1vdmUgPSBmdW5jdGlvbigpIHtcclxuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XHJcblx0XHRcdGlmKHN0eWxlRWxlbWVudC5ocmVmKVxyXG5cdFx0XHRcdFVSTC5yZXZva2VPYmplY3RVUkwoc3R5bGVFbGVtZW50LmhyZWYpO1xyXG5cdFx0fTtcclxuXHR9IGVsc2Uge1xyXG5cdFx0c3R5bGVFbGVtZW50ID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpO1xyXG5cdFx0dXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlRWxlbWVudCk7XHJcblx0XHRyZW1vdmUgPSBmdW5jdGlvbigpIHtcclxuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XHJcblx0XHR9O1xyXG5cdH1cclxuXHJcblx0dXBkYXRlKG9iaik7XHJcblxyXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcclxuXHRcdGlmKG5ld09iaikge1xyXG5cdFx0XHRpZihuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApXHJcblx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHR1cGRhdGUob2JqID0gbmV3T2JqKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHJlbW92ZSgpO1xyXG5cdFx0fVxyXG5cdH07XHJcbn1cclxuXHJcbnZhciByZXBsYWNlVGV4dCA9IChmdW5jdGlvbiAoKSB7XHJcblx0dmFyIHRleHRTdG9yZSA9IFtdO1xyXG5cclxuXHRyZXR1cm4gZnVuY3Rpb24gKGluZGV4LCByZXBsYWNlbWVudCkge1xyXG5cdFx0dGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xyXG5cdFx0cmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XHJcblx0fTtcclxufSkoKTtcclxuXHJcbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcoc3R5bGVFbGVtZW50LCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcclxuXHR2YXIgY3NzID0gcmVtb3ZlID8gXCJcIiA6IG9iai5jc3M7XHJcblxyXG5cdGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xyXG5cdFx0c3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xyXG5cdH0gZWxzZSB7XHJcblx0XHR2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XHJcblx0XHR2YXIgY2hpbGROb2RlcyA9IHN0eWxlRWxlbWVudC5jaGlsZE5vZGVzO1xyXG5cdFx0aWYgKGNoaWxkTm9kZXNbaW5kZXhdKSBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xyXG5cdFx0aWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XHJcblx0XHRcdHN0eWxlRWxlbWVudC5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0c3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGNzc05vZGUpO1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZUVsZW1lbnQsIG9iaikge1xyXG5cdHZhciBjc3MgPSBvYmouY3NzO1xyXG5cdHZhciBtZWRpYSA9IG9iai5tZWRpYTtcclxuXHJcblx0aWYobWVkaWEpIHtcclxuXHRcdHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJtZWRpYVwiLCBtZWRpYSlcclxuXHR9XHJcblxyXG5cdGlmKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XHJcblx0XHRzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xyXG5cdH0gZWxzZSB7XHJcblx0XHR3aGlsZShzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xyXG5cdFx0XHRzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xyXG5cdFx0fVxyXG5cdFx0c3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gdXBkYXRlTGluayhsaW5rRWxlbWVudCwgb2JqKSB7XHJcblx0dmFyIGNzcyA9IG9iai5jc3M7XHJcblx0dmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XHJcblxyXG5cdGlmKHNvdXJjZU1hcCkge1xyXG5cdFx0Ly8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMjY2MDM4NzVcclxuXHRcdGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIgKyBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpICsgXCIgKi9cIjtcclxuXHR9XHJcblxyXG5cdHZhciBibG9iID0gbmV3IEJsb2IoW2Nzc10sIHsgdHlwZTogXCJ0ZXh0L2Nzc1wiIH0pO1xyXG5cclxuXHR2YXIgb2xkU3JjID0gbGlua0VsZW1lbnQuaHJlZjtcclxuXHJcblx0bGlua0VsZW1lbnQuaHJlZiA9IFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XHJcblxyXG5cdGlmKG9sZFNyYylcclxuXHRcdFVSTC5yZXZva2VPYmplY3RVUkwob2xkU3JjKTtcclxufVxyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vc3R5bGUtbG9hZGVyL2FkZFN0eWxlcy5qc1xuLy8gbW9kdWxlIGlkID0gMjdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==