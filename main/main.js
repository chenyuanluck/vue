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
	var app = new _vue2.default({ router: _router2.default }).$mount('#app'); // 创建和挂载根实例
	
	_router2.default.beforeEach(function (to, from, next) {
	  console.log(to);
	  console.log(from);
	  next();
	});

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
	
	var _view3 = __webpack_require__(12);
	
	var _view4 = _interopRequireDefault(_view3);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// 路由插件
	var IndexView = __webpack_require__(15); // 引入indexVue
	/**
	 * 描述: 路由配置文件
	 * 版权: Copyright (c) 2016
	 * 公司: 深圳市昊晨科技开发有限公司
	 * 作者: 陈元
	 * 版本: 1.0
	 * 创建日期: 2016/11/23
	 * 创建时间: 10:11
	 */
	// 引入User视图
	// 引入UserMember视图
	
	// 定义路由
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
	    component: IndexView
	}, {
	    name: "user",
	    path: "/user/:id",
	    component: _view2.default,
	    children: [{
	        path: "member",
	        component: _view4.default
	    }, {
	        path: "",
	        component: _view4.default
	    }]
	}];
	
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
	            var index = 0;
	            var t = setInterval(function () {
	                data.message += "@";
	                index++;
	                if (index >= 10) {
	                    clearInterval(t);
	                }
	            }, 200);
	            return data;
	        }
	    }, {
	        key: "created",
	        value: function created() {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZDUyMGRlYmU4NmQ4N2Y1YmY0YjEiLCJ3ZWJwYWNrOi8vLy4vRTovVGVzdFdvcmsvdnVlL3NyYy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vRTovVGVzdFdvcmsvdnVlL34vdnVlL2Rpc3QvdnVlLm1pbi5qcyIsIndlYnBhY2s6Ly8vLi9FOi9UZXN0V29yay92dWUvfi92dWUtcm91dGVyL2Rpc3QvdnVlLXJvdXRlci5qcyIsIndlYnBhY2s6Ly8vLi9FOi9UZXN0V29yay92dWUvc3JjL3JvdXRlci5qcyIsIndlYnBhY2s6Ly8vLi9FOi9UZXN0V29yay92dWUvc3JjL3ZpZXdzL3VzZXIvdmlldy5qcyIsIndlYnBhY2s6Ly8vLi9FOi9UZXN0V29yay92dWUvc3JjL3V0aWxzL3ZpZXcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL3VzZXIvdmlldy52dWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL3VzZXIvdmlldy52dWU/ZDQ4NCIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvdXNlci92aWV3LnZ1ZT8zZjZkIiwid2VicGFjazovLy8uL0U6L1Rlc3RXb3JrL3Z1ZS9+L2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzIiwid2VicGFjazovLy8uL34vdnVlLXN0eWxlLWxvYWRlci9hZGRTdHlsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL3VzZXIvdmlldy52dWU/Y2U4YyIsIndlYnBhY2s6Ly8vLi9FOi9UZXN0V29yay92dWUvc3JjL3ZpZXdzL3VzZXIvbWVtYmVyL3ZpZXcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL3VzZXIvbWVtYmVyL3ZpZXcudnVlIiwid2VicGFjazovLy8uL3NyYy92aWV3cy91c2VyL21lbWJlci92aWV3LnZ1ZT9hOGFkIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9pbmRleC52dWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL2luZGV4LnZ1ZT8zMGY5Iiwid2VicGFjazovLy8uL3NyYy92aWV3cy9pbmRleC52dWU/NDJlNyIsIndlYnBhY2s6Ly8vaW5kZXgudnVlIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9pbmRleC52dWU/NjBhOSJdLCJuYW1lcyI6WyJ1c2UiLCJhcHAiLCJyb3V0ZXIiLCIkbW91bnQiLCJiZWZvcmVFYWNoIiwidG8iLCJmcm9tIiwibmV4dCIsImNvbnNvbGUiLCJsb2ciLCJlIiwidCIsImV4cG9ydHMiLCJtb2R1bGUiLCJWdWUiLCJKU09OIiwic3RyaW5naWZ5IiwiU3RyaW5nIiwicGFyc2VGbG9hdCIsIm4iLCJPYmplY3QiLCJjcmVhdGUiLCJyIiwic3BsaXQiLCJpIiwibGVuZ3RoIiwidG9Mb3dlckNhc2UiLCJpbmRleE9mIiwic3BsaWNlIiwiVXIiLCJjYWxsIiwibyIsImEiLCJzIiwiYXJndW1lbnRzIiwiYXBwbHkiLCJfbGVuZ3RoIiwiYyIsIkFycmF5IiwibCIsInUiLCJmIiwicXIiLCJXciIsImQiLCJwIiwidiIsInJlZHVjZSIsImNvbmNhdCIsInN0YXRpY0tleXMiLCJqb2luIiwiaCIsIm0iLCJnIiwiY2hhckNvZGVBdCIsInkiLCJkZWZpbmVQcm9wZXJ0eSIsInZhbHVlIiwiZW51bWVyYWJsZSIsIndyaXRhYmxlIiwiY29uZmlndXJhYmxlIiwiXyIsIkdyIiwidGVzdCIsImIiLCJ0b1N0cmluZyIsIiQiLCJkaSIsInRhcmdldCIsInBpIiwicHVzaCIsInciLCJwb3AiLCJ4IiwiX19wcm90b19fIiwiQyIsImsiLCJfX29iX18iLCJ5aSIsImdpIiwic2hvdWxkQ29udmVydCIsIm9pIiwiaXNBcnJheSIsImlzRXh0ZW5zaWJsZSIsIl9pc1Z1ZSIsIkEiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiLCJnZXQiLCJzZXQiLCJkZXBlbmQiLCJkZXAiLCJUIiwibm90aWZ5IiwiTyIsIk1hdGgiLCJtYXgiLCJ2bUNvdW50IiwiUyIsImoiLCJrZXlzIiwiRSIsIk4iLCJMIiwicHJvcHMiLCJWciIsInR5cGUiLCJEIiwiZGlyZWN0aXZlcyIsImJpbmQiLCJ1cGRhdGUiLCJNIiwiX2kiLCJiaSIsImV4dGVuZHMiLCJvcHRpb25zIiwibWl4aW5zIiwicHJvdG90eXBlIiwiUmUiLCJQIiwienIiLCJSIiwiQiIsIktyIiwiSSIsImRlZmF1bHQiLCIkb3B0aW9ucyIsInByb3BzRGF0YSIsIkZ1bmN0aW9uIiwiRiIsIm1hdGNoIiwiVSIsIndpIiwieGkiLCJDaSIsImtpIiwiSCIsInNvcnQiLCJpZCIsIkFpIiwicnVuIiwibGkiLCJkZXZ0b29scyIsImFpIiwiZW1pdCIsIlYiLCJzaSIsInoiLCJUaSIsImNsZWFyIiwiSiIsImhhcyIsImFkZCIsIksiLCJfd2F0Y2hlcnMiLCJxIiwiVyIsIloiLCJZIiwiUSIsIl9wcm9wS2V5cyIsIiRwYXJlbnQiLCJkYXRhIiwiX2RhdGEiLCJ0ZSIsImNvbXB1dGVkIiwiamkiLCJHIiwiY2FjaGUiLCJTaSIsImxhenkiLCJkaXJ0eSIsImV2YWx1YXRlIiwibWV0aG9kcyIsIndhdGNoIiwiWCIsImhhbmRsZXIiLCIkd2F0Y2giLCJlZSIsIiRzZXQiLCIkZGVsZXRlIiwidXNlciIsImltbWVkaWF0ZSIsInRlYXJkb3duIiwibmUiLCJFaSIsInRhZyIsImNoaWxkcmVuIiwidGV4dCIsImVsbSIsIm5zIiwiY29udGV4dCIsImNvbXBvbmVudE9wdGlvbnMiLCJpc1N0YXRpYyIsImtleSIsImlzQ2xvbmVkIiwicmUiLCJpZSIsIl9faW5qZWN0ZWQiLCJvZSIsImZuIiwiY2hhckF0Iiwic2xpY2UiLCJpbnZva2VyIiwiYWUiLCJzZSIsImNlIiwibGUiLCJ1ZSIsImZlIiwiZmlsdGVyIiwiZGUiLCJwYXJlbnQiLCJhYnN0cmFjdCIsIiRjaGlsZHJlbiIsIiRyb290IiwiJHJlZnMiLCJfd2F0Y2hlciIsIl9pbmFjdGl2ZSIsIl9pc01vdW50ZWQiLCJfaXNEZXN0cm95ZWQiLCJfaXNCZWluZ0Rlc3Ryb3llZCIsInBlIiwiX21vdW50IiwiJGVsIiwicmVuZGVyIiwiTmkiLCJ2ZSIsIl91cGRhdGUiLCJfcmVuZGVyIiwiJHZub2RlIiwiTGkiLCJfdm5vZGUiLCJfX3BhdGNoX18iLCJfX3Z1ZV9fIiwiX3VwZGF0ZUZyb21QYXJlbnQiLCJfcmVuZGVyQ2hpbGRyZW4iLCJfcGFyZW50Vm5vZGUiLCJfcGFyZW50TGlzdGVuZXJzIiwiX3VwZGF0ZUxpc3RlbmVycyIsIiRzbG90cyIsIkVlIiwiX3JlbmRlckNvbnRleHQiLCIkZm9yY2VVcGRhdGUiLCIkZGVzdHJveSIsIiRvZmYiLCIkZW1pdCIsImhlIiwiX2Jhc2UiLCJleHRlbmQiLCJjaWQiLCJyZXNvbHZlZCIsIndlIiwiUGUiLCJ4ZSIsImZ1bmN0aW9uYWwiLCJtZSIsIm9uIiwibmF0aXZlT24iLCJrZSIsIm5hbWUiLCJDdG9yIiwibGlzdGVuZXJzIiwiT2UiLCJfc2VsZiIsInNsb3RzIiwiZnVuY3Rpb25hbENvbnRleHQiLCJzbG90IiwiZ2UiLCJfaXNDb21wb25lbnQiLCJfY29tcG9uZW50VGFnIiwiaW5saW5lVGVtcGxhdGUiLCJzdGF0aWNSZW5kZXJGbnMiLCJ5ZSIsImNoaWxkIiwia2VlcEFsaXZlIiwiX2UiLCJiZSIsIiRlIiwicmVxdWVzdGVkIiwicGVuZGluZ0NhbGxiYWNrcyIsInRoZW4iLCJhdHRycyIsImRvbVByb3BzIiwiQ2UiLCJob29rIiwiTWkiLCJEaSIsIkFlIiwiU2UiLCJzY29wZWRTbG90cyIsImdldFRhZ05hbWVzcGFjZSIsImlzUmVzZXJ2ZWRUYWciLCJUZSIsIl9zdGF0aWNUcmVlcyIsIiRzY29wZWRTbG90cyIsIiRjcmVhdGVFbGVtZW50IiwiZWwiLCJqZSIsImlzT25jZSIsIiRuZXh0VGljayIsIl9yZW5kZXJQcm94eSIsImVycm9ySGFuZGxlciIsImVycm9yIiwiX2giLCJfcyIsIl9uIiwiX3EiLCJfbSIsIl9vIiwiX2YiLCJfbCIsIl90IiwiX2IiLCJtdXN0VXNlUHJvcCIsIl9rIiwia2V5Q29kZXMiLCJpc0NvbW1lbnQiLCJOZSIsIl9ldmVudHMiLCIkb24iLCJMZSIsIiRvbmNlIiwiRGUiLCJfaW5pdCIsIl91aWQiLCJQaSIsIk1lIiwiY29uc3RydWN0b3IiLCJzdXBlciIsInN1cGVyT3B0aW9ucyIsImV4dGVuZE9wdGlvbnMiLCJfc2NvcGVJZCIsImNvbXBvbmVudHMiLCJJZSIsImluc3RhbGxlZCIsInVuc2hpZnQiLCJpbnN0YWxsIiwiRmUiLCJtaXhpbiIsIkJlIiwiX0N0b3IiLCJfYXNzZXRUeXBlcyIsImZvckVhY2giLCJVZSIsIkhlIiwiVmUiLCJ1dGlsIiwiJGkiLCJkZWxldGUiLCJuZXh0VGljayIsIkZpIiwiemUiLCJKZSIsIktlIiwic3RhdGljQ2xhc3MiLCJxZSIsImNsYXNzIiwiV2UiLCJaZSIsIlhpIiwiR2UiLCJRciIsIm5vIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50Iiwid2luZG93IiwiSFRNTFVua25vd25FbGVtZW50IiwiSFRNTEVsZW1lbnQiLCJZZSIsInF1ZXJ5U2VsZWN0b3IiLCJRZSIsInNldEF0dHJpYnV0ZSIsIlhlIiwiY3JlYXRlRWxlbWVudE5TIiwiV2kiLCJldCIsImNyZWF0ZVRleHROb2RlIiwidHQiLCJjcmVhdGVDb21tZW50IiwibnQiLCJpbnNlcnRCZWZvcmUiLCJydCIsInJlbW92ZUNoaWxkIiwiaXQiLCJhcHBlbmRDaGlsZCIsIm90IiwicGFyZW50Tm9kZSIsImF0IiwibmV4dFNpYmxpbmciLCJzdCIsInRhZ05hbWUiLCJjdCIsInRleHRDb250ZW50IiwibHQiLCJjaGlsZE5vZGVzIiwidXQiLCJmdCIsInJlZiIsInJlZkluRm9yIiwiZHQiLCJwdCIsInZ0IiwiaHQiLCJtdCIsImlzUm9vdEluc2VydCIsImluaXQiLCJvbyIsImluc2VydCIsInBlbmRpbmdJbnNlcnQiLCJkZXN0cm95IiwicmVtb3ZlIiwicHJlcGF0Y2giLCJzZXRUZXh0Q29udGVudCIsInBvc3RwYXRjaCIsIm1vZHVsZXMiLCJub2RlT3BzIiwiYW8iLCJub2RlVHlwZSIsImhhc0F0dHJpYnV0ZSIsInJlbW92ZUF0dHJpYnV0ZSIsImd0IiwieXQiLCJvbGRWYWx1ZSIsImJ0IiwiZGVmIiwiY29tcG9uZW50VXBkYXRlZCIsImluc2VydGVkIiwibW9kaWZpZXJzIiwiY28iLCJyYXdOYW1lIiwiJHQiLCJ3dCIsIkppIiwicmVtb3ZlQXR0cmlidXRlTlMiLCJ6aSIsIktpIiwiSGkiLCJWaSIsInFpIiwic2V0QXR0cmlidXRlTlMiLCJ4dCIsIl90cmFuc2l0aW9uQ2xhc3NlcyIsIl9wcmV2Q2xhc3MiLCJDdCIsIl92X2FkZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJfdl9yZW1vdmUiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwia3QiLCJfdmFsdWUiLCJjb21wb3NpbmciLCJBdCIsIk90Iiwic3R5bGUiLCJzdGF0aWNTdHlsZSIsImhvIiwiU3QiLCJUdCIsImdvIiwianQiLCJ0cmltIiwiY2xhc3NMaXN0IiwiZ2V0QXR0cmlidXRlIiwiRXQiLCJyZXBsYWNlIiwiTnQiLCJTbyIsIkx0IiwiRHQiLCJNdCIsIlB0IiwidGltZW91dCIsInByb3BDb3VudCIsIndvIiwia28iLCJPbyIsInNldFRpbWVvdXQiLCJnZXRDb21wdXRlZFN0eWxlIiwiQ28iLCJSdCIsIkFvIiwieG8iLCJUbyIsImhhc1RyYW5zZm9ybSIsIm1hcCIsIkl0IiwiTnVtYmVyIiwiRnQiLCJfbGVhdmVDYiIsImNhbmNlbGxlZCIsIlV0IiwidHJhbnNpdGlvbiIsIl9lbnRlckNiIiwiY3NzIiwiZW50ZXJDbGFzcyIsImVudGVyQWN0aXZlQ2xhc3MiLCJhcHBlYXJDbGFzcyIsImFwcGVhckFjdGl2ZUNsYXNzIiwiYmVmb3JlRW50ZXIiLCJlbnRlciIsImFmdGVyRW50ZXIiLCJlbnRlckNhbmNlbGxlZCIsImJlZm9yZUFwcGVhciIsImFwcGVhciIsImFmdGVyQXBwZWFyIiwiYXBwZWFyQ2FuY2VsbGVkIiwidGkiLCJIdCIsInNob3ciLCJfcGVuZGluZyIsIkJ0IiwibGVhdmVDbGFzcyIsImxlYXZlQWN0aXZlQ2xhc3MiLCJiZWZvcmVMZWF2ZSIsImxlYXZlIiwiYWZ0ZXJMZWF2ZSIsImxlYXZlQ2FuY2VsbGVkIiwiZGVsYXlMZWF2ZSIsImpvIiwiVnQiLCJtdWx0aXBsZSIsIkp0Iiwic2VsZWN0ZWQiLCJzZWxlY3RlZEluZGV4IiwienQiLCJLdCIsInF0IiwiV3QiLCJjcmVhdGVFdmVudCIsImluaXRFdmVudCIsImRpc3BhdGNoRXZlbnQiLCJadCIsIkd0IiwiWXQiLCJRdCIsIlh0IiwiZW4iLCJfbW92ZUNiIiwidG4iLCJuZXdQb3MiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJubiIsInBvcyIsImxlZnQiLCJ0b3AiLCJtb3ZlZCIsInRyYW5zZm9ybSIsIldlYmtpdFRyYW5zZm9ybSIsInRyYW5zaXRpb25EdXJhdGlvbiIsInJuIiwiaW5uZXJIVE1MIiwiVm8iLCJhbiIsIkRhIiwiTmEiLCJMYSIsIk1hIiwiUGEiLCJzbiIsInN1YnN0cmluZyIsIllvIiwic3RhcnQiLCJRbyIsIldvIiwidW5hcnlTbGFzaCIsImVuZCIsIlFpIiwiWWkiLCJyYSIsInNob3VsZERlY29kZU5ld2xpbmVzIiwiZXhwZWN0SFRNTCIsImlzVW5hcnlUYWciLCJaciIsImphIiwic2ZjIiwiRWEiLCJSZWdFeHAiLCJjaGFycyIsInRhIiwibmEiLCJlYSIsIlhvIiwiY24iLCJsbiIsInVuIiwiRmEiLCJSYSIsImxhc3RJbmRleCIsImV4ZWMiLCJpbmRleCIsImRuIiwicG4iLCJ2biIsImhuIiwiYXJnIiwibW4iLCJjYXB0dXJlIiwibmF0aXZlIiwibmF0aXZlRXZlbnRzIiwiZXZlbnRzIiwiZ24iLCJ5biIsImF0dHJzTWFwIiwiYXR0cnNMaXN0Iiwib2EiLCJpYSIsInNhIiwiY2EiLCJsYSIsImxhc3RJbmRleE9mIiwiZXhwIiwiaWR4IiwiJG4iLCJhYSIsImJuIiwid24iLCJDbiIsInhuIiwia24iLCJ1YSIsIndhcm4iLCJmYSIsImRhIiwicGEiLCJpc1ByZVRhZyIsInZhIiwiaGEiLCJtYSIsImdhIiwiZGVsaW1pdGVycyIsInByZXNlcnZlV2hpdGVzcGFjZSIsImVpIiwiVm4iLCJCbiIsIkhuIiwiZm9yYmlkZGVuIiwiQW4iLCJwcmUiLCJPbiIsImpuIiwiRW4iLCJEbiIsIlNuIiwicGxhaW4iLCJUbiIsIk1uIiwiUG4iLCJSbiIsImlmIiwiZWxzZWlmIiwiZWxzZSIsIkxuIiwiYmxvY2siLCJObiIsInNsb3RTY29wZSIsInNsb3RUYXJnZXQiLCJwbGFjZWhvbGRlciIsInFhIiwiZXhwcmVzc2lvbiIsIkluIiwiVWEiLCJmb3IiLCJIYSIsImFsaWFzIiwiaXRlcmF0b3IxIiwiaXRlcmF0b3IyIiwiVW4iLCJjb25kaXRpb25zIiwib25jZSIsInNsb3ROYW1lIiwiY29tcG9uZW50IiwiQmEiLCJoYXNCaW5kaW5ncyIsIkZuIiwiS2EiLCJWYSIsInByb3AiLCJjYW1lbCIsInphIiwiSmEiLCJXYSIsIlphIiwiem4iLCJ5YSIsIkdhIiwiX2EiLCJLbiIsInFuIiwiSm4iLCJzdGF0aWMiLCJabiIsInN0YXRpY0luRm9yIiwic3RhdGljUm9vdCIsIlduIiwiQnIiLCJHbiIsImV2ZXJ5IiwiWW4iLCJRbiIsInRzIiwiZXMiLCJYbiIsIlFhIiwiWWEiLCJlciIsInBhcnNlSW50IiwiWGEiLCJ0ciIsIndyYXBEYXRhIiwibnIiLCJDYSIsImthIiwiQWEiLCJiYSIsIiRhIiwid2EiLCJ4YSIsInJyIiwic3RhdGljUHJvY2Vzc2VkIiwiaXIiLCJvbmNlUHJvY2Vzc2VkIiwib3IiLCJmb3JQcm9jZXNzZWQiLCJjciIsImlmUHJvY2Vzc2VkIiwiYXIiLCJnciIsInlyIiwibHIiLCJ2ciIsInNyIiwic2hpZnQiLCJ1ciIsIl9yIiwiZHIiLCJmciIsInJzIiwicHIiLCJzY29wZSIsImhyIiwibXIiLCJiciIsIiRyIiwiYXN0Iiwid3IiLCJjbGFzc0JpbmRpbmciLCJ4ciIsIkNyIiwic3R5bGVCaW5kaW5nIiwia3IiLCJBciIsIk9hIiwianIiLCJPciIsIlNyIiwiVHIiLCJudW1iZXIiLCJFciIsIk5yIiwiTHIiLCJEciIsImxzIiwiTXIiLCJ1aSIsImNzIiwiUHIiLCJSciIsIm91dGVySFRNTCIsImNsb25lTm9kZSIsIklyIiwiRnIiLCJoYXNPd25Qcm9wZXJ0eSIsIkhyIiwidG9VcHBlckNhc2UiLCJKciIsIllyIiwiWHIiLCJuYXZpZ2F0b3IiLCJ1c2VyQWdlbnQiLCJuaSIsInJpIiwiaWkiLCJnbG9iYWwiLCJwcm9jZXNzIiwiZW52IiwiVlVFX0VOViIsIl9fVlVFX0RFVlRPT0xTX0dMT0JBTF9IT09LX18iLCJQcm9taXNlIiwicmVzb2x2ZSIsIk11dGF0aW9uT2JzZXJ2ZXIiLCJvYnNlcnZlIiwiY2hhcmFjdGVyRGF0YSIsIlNldCIsImNpIiwib3B0aW9uTWVyZ2VTdHJhdGVnaWVzIiwic2lsZW50IiwiaWdub3JlZEVsZW1lbnRzIiwiaXNVbmtub3duRWxlbWVudCIsIl9saWZlY3ljbGVIb29rcyIsIl9tYXhVcGRhdGVDb3VudCIsImZpIiwic3VicyIsImFkZFN1YiIsInJlbW92ZVN1YiIsImFkZERlcCIsInZpIiwiaGkiLCJvYnNlcnZlQXJyYXkiLCJtaSIsImdldE93blByb3BlcnR5TmFtZXMiLCJpc1NldHRpbmdQcm9wcyIsIndhbGsiLCJmcmVlemUiLCJkZWZpbmVSZWFjdGl2ZSIsIl90b1N0cmluZyIsInRvTnVtYmVyIiwibWFrZU1hcCIsImlzQnVpbHRJblRhZyIsImhhc093biIsImlzUHJpbWl0aXZlIiwiY2FjaGVkIiwiY2FtZWxpemUiLCJjYXBpdGFsaXplIiwiaHlwaGVuYXRlIiwidG9BcnJheSIsImlzT2JqZWN0IiwiaXNQbGFpbk9iamVjdCIsInRvT2JqZWN0Iiwibm9vcCIsImdlblN0YXRpY0tleXMiLCJsb29zZUVxdWFsIiwibG9vc2VJbmRleE9mIiwiaXNSZXNlcnZlZCIsInBhcnNlUGF0aCIsImhhc1Byb3RvIiwiaW5Ccm93c2VyIiwiVUEiLCJpc0lFIiwiaXNJRTkiLCJpc0VkZ2UiLCJpc0FuZHJvaWQiLCJpc0lPUyIsImlzU2VydmVyUmVuZGVyaW5nIiwiX1NldCIsIm1lcmdlT3B0aW9ucyIsInJlc29sdmVBc3NldCIsImZvcm1hdENvbXBvbmVudE5hbWUiLCJ2YWxpZGF0ZVByb3AiLCJPaSIsInZtIiwiZGVlcCIsInN5bmMiLCJjYiIsImFjdGl2ZSIsImRlcHMiLCJuZXdEZXBzIiwiZGVwSWRzIiwibmV3RGVwSWRzIiwiZ2V0dGVyIiwiY2xlYW51cERlcHMiLCJfdkZvclJlbW92aW5nIiwicmF3IiwiUmkiLCJJaSIsImluY2x1ZGUiLCJleGNsdWRlIiwiY3JlYXRlZCIsImRlc3Ryb3llZCIsIktlZXBBbGl2ZSIsInZlcnNpb24iLCJCaSIsIlVpIiwic3ZnIiwibWF0aCIsInhodG1sIiwiWmkiLCJHaSIsImVvIiwicm8iLCJpbyIsInNvIiwibG8iLCJ1byIsImZvIiwicG8iLCJ2byIsIm1vIiwic2V0UHJvcGVydHkiLCJ5byIsImJvIiwiJG8iLCJvbnRyYW5zaXRpb25lbmQiLCJvbndlYmtpdHRyYW5zaXRpb25lbmQiLCJvbmFuaW1hdGlvbmVuZCIsIm9ud2Via2l0YW5pbWF0aW9uZW5kIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiRW8iLCJObyIsIkxvIiwiRG8iLCJhY3RpdmVFbGVtZW50Iiwidm1vZGVsIiwiTW8iLCJzb21lIiwiUG8iLCJkaXNwbGF5IiwiX192T3JpZ2luYWxEaXNwbGF5IiwiUm8iLCJtb2RlbCIsIklvIiwiQm9vbGVhbiIsIm1vZGUiLCJGbyIsIl9sZWF2aW5nIiwiQm8iLCJtb3ZlQ2xhc3MiLCJVbyIsInByZXZDaGlsZHJlbiIsImtlcHQiLCJyZW1vdmVkIiwiYmVmb3JlVXBkYXRlIiwidXBkYXRlZCIsImhhc01vdmUiLCJib2R5Iiwib2Zmc2V0SGVpZ2h0IiwicHJvcGVydHlOYW1lIiwiX2hhc01vdmUiLCJIbyIsIlRyYW5zaXRpb24iLCJUcmFuc2l0aW9uR3JvdXAiLCJjb25maWciLCJ6byIsIkpvIiwiS28iLCJxbyIsInNvdXJjZSIsIlpvIiwiR28iLCJTYSIsIlRhIiwiSWEiLCJlc2MiLCJ0YWIiLCJzcGFjZSIsInVwIiwicmlnaHQiLCJkb3duIiwic3RvcCIsInByZXZlbnQiLCJzZWxmIiwiY3RybCIsImFsdCIsIm1ldGEiLCJjbG9hayIsImlzIiwidHJhbnNmb3JtTm9kZSIsImdlbkRhdGEiLCJvcyIsImFzIiwic3MiLCJodG1sIiwidXMiLCJmcyIsImRvY3VtZW50RWxlbWVudCIsInRlbXBsYXRlIiwiY29tcGlsZSIsImZhY3RvcnkiLCJWdWVSb3V0ZXIiLCJWaWV3Iiwicm91dGVyVmlldyIsInJvdXRlIiwiJHJvdXRlIiwiX3JvdXRlclZpZXdDYWNoZSIsImRlcHRoIiwiaW5hY3RpdmUiLCJyb3V0ZXJWaWV3RGVwdGgiLCJtYXRjaGVkIiwiaG9va3MiLCJ2bm9kZSIsImluc3RhbmNlcyIsIm9sZFZub2RlIiwidW5kZWZpbmVkIiwicmVzb2x2ZVBhdGgiLCJyZWxhdGl2ZSIsImJhc2UiLCJhcHBlbmQiLCJzdGFjayIsInNlZ21lbnRzIiwic2VnbWVudCIsInBhdGgiLCJoYXNoIiwicXVlcnkiLCJoYXNoSW5kZXgiLCJxdWVyeUluZGV4IiwiY2xlYW5QYXRoIiwiYXNzZXJ0IiwiY29uZGl0aW9uIiwibWVzc2FnZSIsIkVycm9yIiwiZW5jb2RlIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwiZGVjb2RlIiwiZGVjb2RlVVJJQ29tcG9uZW50IiwicmVzb2x2ZVF1ZXJ5IiwiZXh0cmFRdWVyeSIsInBhcnNlZFF1ZXJ5IiwicGFyc2VRdWVyeSIsInJlcyIsInBhcmFtIiwicGFydHMiLCJ2YWwiLCJzdHJpbmdpZnlRdWVyeSIsIm9iaiIsInJlc3VsdCIsInZhbDIiLCJjcmVhdGVSb3V0ZSIsInJlY29yZCIsImxvY2F0aW9uIiwicmVkaXJlY3RlZEZyb20iLCJwYXJhbXMiLCJmdWxsUGF0aCIsImdldEZ1bGxQYXRoIiwiZm9ybWF0TWF0Y2giLCJTVEFSVCIsInRyYWlsaW5nU2xhc2hSRSIsImlzU2FtZVJvdXRlIiwiaXNPYmplY3RFcXVhbCIsImFLZXlzIiwiYktleXMiLCJpc0luY2x1ZGVkUm91dGUiLCJjdXJyZW50IiwicXVlcnlJbmNsdWRlcyIsIm5vcm1hbGl6ZUxvY2F0aW9uIiwiX25vcm1hbGl6ZWQiLCJwYXJzZWRQYXRoIiwiYmFzZVBhdGgiLCJ0b1R5cGVzIiwiTGluayIsInJlcXVpcmVkIiwiZXhhY3QiLCJhY3RpdmVDbGFzcyIsInRoaXMkMSIsIiRyb3V0ZXIiLCJoaXN0b3J5IiwiaHJlZiIsImNyZWF0ZUhyZWYiLCJjbGFzc2VzIiwibGlua0FjdGl2ZUNsYXNzIiwiY29tcGFyZVRhcmdldCIsImNsaWNrIiwibWV0YUtleSIsImN0cmxLZXkiLCJzaGlmdEtleSIsImRlZmF1bHRQcmV2ZW50ZWQiLCJidXR0b24iLCJwcmV2ZW50RGVmYXVsdCIsImZpbmRBbmNob3IiLCJfVnVlIiwiYURhdGEiLCJhQXR0cnMiLCJfcm91dGVyIiwiZ2V0JDEiLCJfcm91dGUiLCJiZWZvcmVDcmVhdGUiLCJzdHJhdHMiLCJiZWZvcmVSb3V0ZUVudGVyIiwiYmVmb3JlUm91dGVMZWF2ZSIsIl9fbW9kdWxlRXhwb3J0cyIsImFyciIsImlzYXJyYXkiLCJwYXRoVG9SZWdleHAiLCJwYXJzZV8xIiwicGFyc2UiLCJjb21waWxlXzEiLCJ0b2tlbnNUb0Z1bmN0aW9uXzEiLCJ0b2tlbnNUb0Z1bmN0aW9uIiwidG9rZW5zVG9SZWdFeHBfMSIsInRva2Vuc1RvUmVnRXhwIiwiUEFUSF9SRUdFWFAiLCJzdHIiLCJ0b2tlbnMiLCJkZWZhdWx0RGVsaW1pdGVyIiwiZGVsaW1pdGVyIiwiZXNjYXBlZCIsIm9mZnNldCIsInByZWZpeCIsImdyb3VwIiwibW9kaWZpZXIiLCJhc3RlcmlzayIsInBhcnRpYWwiLCJyZXBlYXQiLCJvcHRpb25hbCIsInBhdHRlcm4iLCJlc2NhcGVHcm91cCIsImVzY2FwZVN0cmluZyIsInN1YnN0ciIsImVuY29kZVVSSUNvbXBvbmVudFByZXR0eSIsImVuY29kZVVSSSIsImVuY29kZUFzdGVyaXNrIiwibWF0Y2hlcyIsIm9wdHMiLCJwcmV0dHkiLCJ0b2tlbiIsIlR5cGVFcnJvciIsImF0dGFjaEtleXMiLCJmbGFncyIsInNlbnNpdGl2ZSIsInJlZ2V4cFRvUmVnZXhwIiwiZ3JvdXBzIiwiYXJyYXlUb1JlZ2V4cCIsInJlZ2V4cCIsInN0cmluZ1RvUmVnZXhwIiwic3RyaWN0IiwiZW5kc1dpdGhEZWxpbWl0ZXIiLCJjcmVhdGVSb3V0ZU1hcCIsInJvdXRlcyIsInBhdGhNYXAiLCJuYW1lTWFwIiwiYWRkUm91dGVSZWNvcmQiLCJtYXRjaEFzIiwibm9ybWFsaXplUGF0aCIsInJlZGlyZWN0IiwicmVnZXhwQ2FjaGUiLCJyZWdleHBQYXJhbXNDYWNoZSIsInJlZ2V4cENvbXBpbGVDYWNoZSIsImNyZWF0ZU1hdGNoZXIiLCJjdXJyZW50Um91dGUiLCJwYXJhbU5hbWVzIiwiZ2V0UGFyYW1zIiwiZmlsbFBhcmFtcyIsIl9jcmVhdGVSb3V0ZSIsIm1hdGNoUm91dGUiLCJvcmlnaW5hbFJlZGlyZWN0IiwidGFyZ2V0UmVjb3JkIiwicmF3UGF0aCIsInJlc29sdmVSZWNvcmRQYXRoIiwicmVzb2x2ZWRQYXRoIiwiYWxpYXNlZFBhdGgiLCJhbGlhc2VkTWF0Y2giLCJhbGlhc2VkUmVjb3JkIiwiZ2V0Um91dGVSZWdleCIsImhpdCIsInBhdGhuYW1lIiwibGVuIiwicm91dGVNc2ciLCJmaWxsZXIiLCJzdXBwb3J0c0hpc3RvcnkiLCJydW5RdWV1ZSIsInF1ZXVlIiwic3RlcCIsIkhpc3RvcnkiLCJub3JtYWxpemVCYXNlIiwicGVuZGluZyIsImxpc3RlbiIsInRyYW5zaXRpb25UbyIsImNvbmZpcm1UcmFuc2l0aW9uIiwidXBkYXRlUm91dGUiLCJlbnN1cmVVUkwiLCJyZXNvbHZlUXVldWUiLCJkZWFjdGl2YXRlZCIsImFjdGl2YXRlZCIsImV4dHJhY3RMZWF2ZUd1YXJkcyIsImJlZm9yZUhvb2tzIiwicmVzb2x2ZUFzeW5jQ29tcG9uZW50cyIsIml0ZXJhdG9yIiwicG9zdEVudGVyQ2JzIiwiZW50ZXJHdWFyZHMiLCJleHRyYWN0RW50ZXJHdWFyZHMiLCJwcmV2IiwiYWZ0ZXJIb29rcyIsImJhc2VFbCIsImV4dHJhY3RHdWFyZCIsImZsYXR0ZW4iLCJmbGF0TWFwQ29tcG9uZW50cyIsImluc3RhbmNlIiwiZ3VhcmQiLCJ3cmFwTGVhdmVHdWFyZCIsInJldmVyc2UiLCJyb3V0ZUxlYXZlR3VhcmQiLCJjYnMiLCJpc1ZhbGlkIiwid3JhcEVudGVyR3VhcmQiLCJyb3V0ZUVudGVyR3VhcmQiLCJwb2xsIiwicmVzb2x2ZWREZWYiLCJyZWplY3QiLCJyZWFzb24iLCJwb3NpdGlvblN0b3JlIiwic2F2ZVNjcm9sbFBvc2l0aW9uIiwicGFnZVhPZmZzZXQiLCJwYWdlWU9mZnNldCIsImdldFNjcm9sbFBvc2l0aW9uIiwiZ2V0RWxlbWVudFBvc2l0aW9uIiwiZG9jUmVjdCIsImVsUmVjdCIsImlzVmFsaWRQb3NpdGlvbiIsImlzTnVtYmVyIiwibm9ybWFsaXplUG9zaXRpb24iLCJnZW5LZXkiLCJEYXRlIiwibm93IiwiX2tleSIsIkhUTUw1SGlzdG9yeSIsImV4cGVjdFNjcm9sbCIsInNjcm9sbEJlaGF2aW9yIiwic3RhdGUiLCJnZXRMb2NhdGlvbiIsImhhbmRsZVNjcm9sbCIsInB1c2hTdGF0ZSIsInJlcGxhY2VTdGF0ZSIsImlzUG9wIiwiYmVoYXZpb3IiLCJwb3NpdGlvbiIsInNob3VsZFNjcm9sbCIsInNlbGVjdG9yIiwic2Nyb2xsVG8iLCJzZWFyY2giLCJ1cmwiLCJIYXNoSGlzdG9yeSIsImZhbGxiYWNrIiwiY2hlY2tGYWxsYmFjayIsImVuc3VyZVNsYXNoIiwib25IYXNoQ2hhbmdlIiwiZ2V0SGFzaCIsInJlcGxhY2VIYXNoIiwicHVzaEhhc2giLCJBYnN0cmFjdEhpc3RvcnkiLCJ0YXJnZXRJbmRleCIsInByb3RvdHlwZUFjY2Vzc29ycyIsImFmdGVyRWFjaCIsImJhY2siLCJmb3J3YXJkIiwiZ2V0TWF0Y2hlZENvbXBvbmVudHMiLCJkZWZpbmVQcm9wZXJ0aWVzIiwiSW5kZXhWaWV3IiwicmVxdWlyZSIsIlVzZXJUZW1wbGF0ZSIsIlVzZXJWaWV3IiwidmlldyIsInNldEludGVydmFsIiwiY2xlYXJJbnRlcnZhbCIsImxpc3QiLCJpdGVtIiwibWVkaWFRdWVyeSIsImFscmVhZHlJbXBvcnRlZE1vZHVsZXMiLCJ2dWUiLCJVc2VyTWVtYmVyVmlldyJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFl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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdURBQXNELG1EQUFtRCxJQUFJO0FBQzdHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxhQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBLEVBQUM7QUFDRCxrQ0FBaUM7O0FBRWpDOzs7Ozs7O0FDeENBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXVGO0FBQ3ZGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0EsaUNBQWdDLFVBQVUsRUFBRTtBQUM1QyxFOzs7Ozs7QUNwQkE7QUFDQTs7O0FBR0E7QUFDQSxpQ0FBZ0Msa0JBQWtCLEdBQUcsVUFBVSxrRkFBa0YsS0FBSyxVQUFVLDZFQUE2RSxVQUFVLCtDQUErQyx3QkFBd0IsU0FBUyxnREFBZ0Qsb0JBQW9CLHdCQUF3Qix1REFBdUQsYUFBYSwyQkFBMkIsNkNBQTZDLGFBQWEsU0FBUyxvQkFBb0IsK0JBQStCLHdCQUF3Qix1REFBdUQsYUFBYSxtQ0FBbUMsNkNBQTZDLGFBQWEsVUFBVSw4QkFBOEIsMENBQTBDOztBQUVuNEI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0lBO1lBRUE7O3VCQUdBO0FBRkE7QUFJQTs7ZUFDQTtxQkFDQTtBQUNBO0FBVEE7QUFVQTt1QkFFQTs7dUJBR0E7QUFGQTtBQUdBOzBCQUNBO3FCQUNBO0FBQ0E7QUFSQTtBQVNBLHVCOzs7Ozs7QUNoQ0EsaUJBQWdCLG1CQUFtQjtBQUNuQztBQUNBLEVBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiLi9tYWluL1wiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGQ1MjBkZWJlODZkODdmNWJmNGIxIiwiLyoqXHJcbiAqIOaPj+i/sDog5YWl5Y+j6aG16Z2iXHJcbiAqIOeJiOadgzogQ29weXJpZ2h0IChjKSAyMDE2XHJcbiAqIOWFrOWPuDog5rex5Zyz5biC5piK5pmo56eR5oqA5byA5Y+R5pyJ6ZmQ5YWs5Y+4XHJcbiAqIOS9nOiAhTog6ZmI5YWDXHJcbiAqIOeJiOacrDogMS4wXHJcbiAqIOWIm+W7uuaXpeacnzogMjAxNi8xMS8yMVxyXG4gKiDliJvlu7rml7bpl7Q6IDE0OjI2XHJcbiAqL1xyXG5pbXBvcnQgVnVlIGZyb20gXCJ2dWVcIjsgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHZ1ZeahhuaetuWMhVxyXG5pbXBvcnQgVnVlUm91dGVyIGZyb20gXCJ2dWUtcm91dGVyXCI7ICAgICAgICAgICAgIC8vIOi3r+eUseaPkuS7tlxyXG5pbXBvcnQgcm91dGVyIGZyb20gXCIuL3JvdXRlclwiOyAgICAgICAgICAgICAgICAgIC8vIOWvvOWFpei3r+eUsemFjee9ruWvueixoVxyXG5cclxuVnVlLnVzZShWdWVSb3V0ZXIpOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIOWmguaenOS9v+eUqOaooeWdl+WMluacuuWItue8lueoi1xyXG5jb25zdCBhcHAgPSBuZXcgVnVlKHtyb3V0ZXJ9KS4kbW91bnQoJyNhcHAnKTsgICAvLyDliJvlu7rlkozmjILovb3moLnlrp7kvotcclxuXHJcbnJvdXRlci5iZWZvcmVFYWNoKCh0bywgZnJvbSwgbmV4dCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2codG8pO1xyXG4gICAgY29uc29sZS5sb2coZnJvbSk7XHJcbiAgICBuZXh0KCk7XHJcbn0pO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0U6L1Rlc3RXb3JrL3Z1ZS9zcmMvYXBwLmpzIiwiLyohXG4gKiBWdWUuanMgdjIuMS4wXG4gKiAoYykgMjAxNC0yMDE2IEV2YW4gWW91XG4gKiBSZWxlYXNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXG4gKi9cbiFmdW5jdGlvbihlLHQpe1wib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzJiZcInVuZGVmaW5lZFwiIT10eXBlb2YgbW9kdWxlP21vZHVsZS5leHBvcnRzPXQoKTpcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQ/ZGVmaW5lKHQpOmUuVnVlPXQoKX0odGhpcyxmdW5jdGlvbigpe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIGUoZSl7cmV0dXJuIG51bGw9PWU/XCJcIjpcIm9iamVjdFwiPT10eXBlb2YgZT9KU09OLnN0cmluZ2lmeShlLG51bGwsMik6U3RyaW5nKGUpfWZ1bmN0aW9uIHQoZSl7dmFyIHQ9cGFyc2VGbG9hdChlLDEwKTtyZXR1cm4gdHx8MD09PXQ/dDplfWZ1bmN0aW9uIG4oZSx0KXtmb3IodmFyIG49T2JqZWN0LmNyZWF0ZShudWxsKSxyPWUuc3BsaXQoXCIsXCIpLGk9MDtpPHIubGVuZ3RoO2krKyluW3JbaV1dPSEwO3JldHVybiB0P2Z1bmN0aW9uKGUpe3JldHVybiBuW2UudG9Mb3dlckNhc2UoKV19OmZ1bmN0aW9uKGUpe3JldHVybiBuW2VdfX1mdW5jdGlvbiByKGUsdCl7aWYoZS5sZW5ndGgpe3ZhciBuPWUuaW5kZXhPZih0KTtpZihuPi0xKXJldHVybiBlLnNwbGljZShuLDEpfX1mdW5jdGlvbiBpKGUsdCl7cmV0dXJuIFVyLmNhbGwoZSx0KX1mdW5jdGlvbiBvKGUpe3JldHVyblwic3RyaW5nXCI9PXR5cGVvZiBlfHxcIm51bWJlclwiPT10eXBlb2YgZX1mdW5jdGlvbiBhKGUpe3ZhciB0PU9iamVjdC5jcmVhdGUobnVsbCk7cmV0dXJuIGZ1bmN0aW9uKG4pe3ZhciByPXRbbl07cmV0dXJuIHJ8fCh0W25dPWUobikpfX1mdW5jdGlvbiBzKGUsdCl7ZnVuY3Rpb24gbihuKXt2YXIgcj1hcmd1bWVudHMubGVuZ3RoO3JldHVybiByP3I+MT9lLmFwcGx5KHQsYXJndW1lbnRzKTplLmNhbGwodCxuKTplLmNhbGwodCl9cmV0dXJuIG4uX2xlbmd0aD1lLmxlbmd0aCxufWZ1bmN0aW9uIGMoZSx0KXt0PXR8fDA7Zm9yKHZhciBuPWUubGVuZ3RoLXQscj1uZXcgQXJyYXkobik7bi0tOylyW25dPWVbbit0XTtyZXR1cm4gcn1mdW5jdGlvbiBsKGUsdCl7Zm9yKHZhciBuIGluIHQpZVtuXT10W25dO3JldHVybiBlfWZ1bmN0aW9uIHUoZSl7cmV0dXJuIG51bGwhPT1lJiZcIm9iamVjdFwiPT10eXBlb2YgZX1mdW5jdGlvbiBmKGUpe3JldHVybiBxci5jYWxsKGUpPT09V3J9ZnVuY3Rpb24gZChlKXtmb3IodmFyIHQ9e30sbj0wO248ZS5sZW5ndGg7bisrKWVbbl0mJmwodCxlW25dKTtyZXR1cm4gdH1mdW5jdGlvbiBwKCl7fWZ1bmN0aW9uIHYoZSl7cmV0dXJuIGUucmVkdWNlKGZ1bmN0aW9uKGUsdCl7cmV0dXJuIGUuY29uY2F0KHQuc3RhdGljS2V5c3x8W10pfSxbXSkuam9pbihcIixcIil9ZnVuY3Rpb24gaChlLHQpe3JldHVybiBlPT10fHwhKCF1KGUpfHwhdSh0KSkmJkpTT04uc3RyaW5naWZ5KGUpPT09SlNPTi5zdHJpbmdpZnkodCl9ZnVuY3Rpb24gbShlLHQpe2Zvcih2YXIgbj0wO248ZS5sZW5ndGg7bisrKWlmKGgoZVtuXSx0KSlyZXR1cm4gbjtyZXR1cm4tMX1mdW5jdGlvbiBnKGUpe3ZhciB0PShlK1wiXCIpLmNoYXJDb2RlQXQoMCk7cmV0dXJuIDM2PT09dHx8OTU9PT10fWZ1bmN0aW9uIHkoZSx0LG4scil7T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsdCx7dmFsdWU6bixlbnVtZXJhYmxlOiEhcix3cml0YWJsZTohMCxjb25maWd1cmFibGU6ITB9KX1mdW5jdGlvbiBfKGUpe2lmKCFHci50ZXN0KGUpKXt2YXIgdD1lLnNwbGl0KFwiLlwiKTtyZXR1cm4gZnVuY3Rpb24oZSl7Zm9yKHZhciBuPTA7bjx0Lmxlbmd0aDtuKyspe2lmKCFlKXJldHVybjtlPWVbdFtuXV19cmV0dXJuIGV9fX1mdW5jdGlvbiBiKGUpe3JldHVybi9uYXRpdmUgY29kZS8udGVzdChlLnRvU3RyaW5nKCkpfWZ1bmN0aW9uICQoZSl7ZGkudGFyZ2V0JiZwaS5wdXNoKGRpLnRhcmdldCksZGkudGFyZ2V0PWV9ZnVuY3Rpb24gdygpe2RpLnRhcmdldD1waS5wb3AoKX1mdW5jdGlvbiB4KGUsdCl7ZS5fX3Byb3RvX189dH1mdW5jdGlvbiBDKGUsdCxuKXtmb3IodmFyIHI9MCxpPW4ubGVuZ3RoO3I8aTtyKyspe3ZhciBvPW5bcl07eShlLG8sdFtvXSl9fWZ1bmN0aW9uIGsoZSl7aWYodShlKSl7dmFyIHQ7cmV0dXJuIGkoZSxcIl9fb2JfX1wiKSYmZS5fX29iX18gaW5zdGFuY2VvZiB5aT90PWUuX19vYl9fOmdpLnNob3VsZENvbnZlcnQmJiFvaSgpJiYoQXJyYXkuaXNBcnJheShlKXx8ZihlKSkmJk9iamVjdC5pc0V4dGVuc2libGUoZSkmJiFlLl9pc1Z1ZSYmKHQ9bmV3IHlpKGUpKSx0fX1mdW5jdGlvbiBBKGUsdCxuLHIpe3ZhciBpPW5ldyBkaSxvPU9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoZSx0KTtpZighb3x8by5jb25maWd1cmFibGUhPT0hMSl7dmFyIGE9byYmby5nZXQscz1vJiZvLnNldCxjPWsobik7T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsdCx7ZW51bWVyYWJsZTohMCxjb25maWd1cmFibGU6ITAsZ2V0OmZ1bmN0aW9uKCl7dmFyIHQ9YT9hLmNhbGwoZSk6bjtyZXR1cm4gZGkudGFyZ2V0JiYoaS5kZXBlbmQoKSxjJiZjLmRlcC5kZXBlbmQoKSxBcnJheS5pc0FycmF5KHQpJiZUKHQpKSx0fSxzZXQ6ZnVuY3Rpb24odCl7dmFyIHI9YT9hLmNhbGwoZSk6bjt0PT09cnx8dCE9PXQmJnIhPT1yfHwocz9zLmNhbGwoZSx0KTpuPXQsYz1rKHQpLGkubm90aWZ5KCkpfX0pfX1mdW5jdGlvbiBPKGUsdCxuKXtpZihBcnJheS5pc0FycmF5KGUpKXJldHVybiBlLmxlbmd0aD1NYXRoLm1heChlLmxlbmd0aCx0KSxlLnNwbGljZSh0LDEsbiksbjtpZihpKGUsdCkpcmV0dXJuIHZvaWQoZVt0XT1uKTt2YXIgcj1lLl9fb2JfXztpZighKGUuX2lzVnVlfHxyJiZyLnZtQ291bnQpKXJldHVybiByPyhBKHIudmFsdWUsdCxuKSxyLmRlcC5ub3RpZnkoKSxuKTp2b2lkKGVbdF09bil9ZnVuY3Rpb24gUyhlLHQpe3ZhciBuPWUuX19vYl9fO2UuX2lzVnVlfHxuJiZuLnZtQ291bnR8fGkoZSx0KSYmKGRlbGV0ZSBlW3RdLG4mJm4uZGVwLm5vdGlmeSgpKX1mdW5jdGlvbiBUKGUpe2Zvcih2YXIgdD12b2lkIDAsbj0wLHI9ZS5sZW5ndGg7bjxyO24rKyl0PWVbbl0sdCYmdC5fX29iX18mJnQuX19vYl9fLmRlcC5kZXBlbmQoKSxBcnJheS5pc0FycmF5KHQpJiZUKHQpfWZ1bmN0aW9uIGooZSx0KXtpZighdClyZXR1cm4gZTtmb3IodmFyIG4scixvLGE9T2JqZWN0LmtleXModCkscz0wO3M8YS5sZW5ndGg7cysrKW49YVtzXSxyPWVbbl0sbz10W25dLGkoZSxuKT9mKHIpJiZmKG8pJiZqKHIsbyk6TyhlLG4sbyk7cmV0dXJuIGV9ZnVuY3Rpb24gRShlLHQpe3JldHVybiB0P2U/ZS5jb25jYXQodCk6QXJyYXkuaXNBcnJheSh0KT90Olt0XTplfWZ1bmN0aW9uIE4oZSx0KXt2YXIgbj1PYmplY3QuY3JlYXRlKGV8fG51bGwpO3JldHVybiB0P2wobix0KTpufWZ1bmN0aW9uIEwoZSl7dmFyIHQ9ZS5wcm9wcztpZih0KXt2YXIgbixyLGksbz17fTtpZihBcnJheS5pc0FycmF5KHQpKWZvcihuPXQubGVuZ3RoO24tLTspcj10W25dLFwic3RyaW5nXCI9PXR5cGVvZiByJiYoaT1WcihyKSxvW2ldPXt0eXBlOm51bGx9KTtlbHNlIGlmKGYodCkpZm9yKHZhciBhIGluIHQpcj10W2FdLGk9VnIoYSksb1tpXT1mKHIpP3I6e3R5cGU6cn07ZS5wcm9wcz1vfX1mdW5jdGlvbiBEKGUpe3ZhciB0PWUuZGlyZWN0aXZlcztpZih0KWZvcih2YXIgbiBpbiB0KXt2YXIgcj10W25dO1wiZnVuY3Rpb25cIj09dHlwZW9mIHImJih0W25dPXtiaW5kOnIsdXBkYXRlOnJ9KX19ZnVuY3Rpb24gTShlLHQsbil7ZnVuY3Rpb24gcihyKXt2YXIgaT1faVtyXXx8Ymk7dVtyXT1pKGVbcl0sdFtyXSxuLHIpfUwodCksRCh0KTt2YXIgbz10LmV4dGVuZHM7aWYobyYmKGU9XCJmdW5jdGlvblwiPT10eXBlb2Ygbz9NKGUsby5vcHRpb25zLG4pOk0oZSxvLG4pKSx0Lm1peGlucylmb3IodmFyIGE9MCxzPXQubWl4aW5zLmxlbmd0aDthPHM7YSsrKXt2YXIgYz10Lm1peGluc1thXTtjLnByb3RvdHlwZSBpbnN0YW5jZW9mIFJlJiYoYz1jLm9wdGlvbnMpLGU9TShlLGMsbil9dmFyIGwsdT17fTtmb3IobCBpbiBlKXIobCk7Zm9yKGwgaW4gdClpKGUsbCl8fHIobCk7cmV0dXJuIHV9ZnVuY3Rpb24gUChlLHQsbixyKXtpZihcInN0cmluZ1wiPT10eXBlb2Ygbil7dmFyIGk9ZVt0XSxvPWlbbl18fGlbVnIobildfHxpW3pyKFZyKG4pKV07cmV0dXJuIG99fWZ1bmN0aW9uIFIoZSx0LG4scil7dmFyIG89dFtlXSxhPSFpKG4sZSkscz1uW2VdO2lmKEIoby50eXBlKSYmKGEmJiFpKG8sXCJkZWZhdWx0XCIpP3M9ITE6XCJcIiE9PXMmJnMhPT1LcihlKXx8KHM9ITApKSx2b2lkIDA9PT1zKXtzPUkocixvLGUpO3ZhciBjPWdpLnNob3VsZENvbnZlcnQ7Z2kuc2hvdWxkQ29udmVydD0hMCxrKHMpLGdpLnNob3VsZENvbnZlcnQ9Y31yZXR1cm4gc31mdW5jdGlvbiBJKGUsdCxuKXtpZihpKHQsXCJkZWZhdWx0XCIpKXt2YXIgcj10LmRlZmF1bHQ7cmV0dXJuIHUociksZSYmZS4kb3B0aW9ucy5wcm9wc0RhdGEmJnZvaWQgMD09PWUuJG9wdGlvbnMucHJvcHNEYXRhW25dJiZ2b2lkIDAhPT1lW25dP2Vbbl06XCJmdW5jdGlvblwiPT10eXBlb2YgciYmdC50eXBlIT09RnVuY3Rpb24/ci5jYWxsKGUpOnJ9fWZ1bmN0aW9uIEYoZSl7dmFyIHQ9ZSYmZS50b1N0cmluZygpLm1hdGNoKC9eXFxzKmZ1bmN0aW9uIChcXHcrKS8pO3JldHVybiB0JiZ0WzFdfWZ1bmN0aW9uIEIoZSl7aWYoIUFycmF5LmlzQXJyYXkoZSkpcmV0dXJuXCJCb29sZWFuXCI9PT1GKGUpO2Zvcih2YXIgdD0wLG49ZS5sZW5ndGg7dDxuO3QrKylpZihcIkJvb2xlYW5cIj09PUYoZVt0XSkpcmV0dXJuITA7cmV0dXJuITF9ZnVuY3Rpb24gVSgpe3dpLmxlbmd0aD0wLHhpPXt9LENpPWtpPSExfWZ1bmN0aW9uIEgoKXtmb3Ioa2k9ITAsd2kuc29ydChmdW5jdGlvbihlLHQpe3JldHVybiBlLmlkLXQuaWR9KSxBaT0wO0FpPHdpLmxlbmd0aDtBaSsrKXt2YXIgZT13aVtBaV0sdD1lLmlkO3hpW3RdPW51bGwsZS5ydW4oKX1haSYmbGkuZGV2dG9vbHMmJmFpLmVtaXQoXCJmbHVzaFwiKSxVKCl9ZnVuY3Rpb24gVihlKXt2YXIgdD1lLmlkO2lmKG51bGw9PXhpW3RdKXtpZih4aVt0XT0hMCxraSl7Zm9yKHZhciBuPXdpLmxlbmd0aC0xO24+PTAmJndpW25dLmlkPmUuaWQ7KW4tLTt3aS5zcGxpY2UoTWF0aC5tYXgobixBaSkrMSwwLGUpfWVsc2Ugd2kucHVzaChlKTtDaXx8KENpPSEwLHNpKEgpKX19ZnVuY3Rpb24geihlKXtUaS5jbGVhcigpLEooZSxUaSl9ZnVuY3Rpb24gSihlLHQpe3ZhciBuLHIsaT1BcnJheS5pc0FycmF5KGUpO2lmKChpfHx1KGUpKSYmT2JqZWN0LmlzRXh0ZW5zaWJsZShlKSl7aWYoZS5fX29iX18pe3ZhciBvPWUuX19vYl9fLmRlcC5pZDtpZih0LmhhcyhvKSlyZXR1cm47dC5hZGQobyl9aWYoaSlmb3Iobj1lLmxlbmd0aDtuLS07KUooZVtuXSx0KTtlbHNlIGZvcihyPU9iamVjdC5rZXlzKGUpLG49ci5sZW5ndGg7bi0tOylKKGVbcltuXV0sdCl9fWZ1bmN0aW9uIEsoZSl7ZS5fd2F0Y2hlcnM9W10scShlKSxXKGUpLFooZSksWShlKSxRKGUpfWZ1bmN0aW9uIHEoZSl7dmFyIHQ9ZS4kb3B0aW9ucy5wcm9wcztpZih0KXt2YXIgbj1lLiRvcHRpb25zLnByb3BzRGF0YXx8e30scj1lLiRvcHRpb25zLl9wcm9wS2V5cz1PYmplY3Qua2V5cyh0KSxpPSFlLiRwYXJlbnQ7Z2kuc2hvdWxkQ29udmVydD1pO2Zvcih2YXIgbz1mdW5jdGlvbihpKXt2YXIgbz1yW2ldO0EoZSxvLFIobyx0LG4sZSkpfSxhPTA7YTxyLmxlbmd0aDthKyspbyhhKTtnaS5zaG91bGRDb252ZXJ0PSEwfX1mdW5jdGlvbiBXKGUpe3ZhciB0PWUuJG9wdGlvbnMuZGF0YTt0PWUuX2RhdGE9XCJmdW5jdGlvblwiPT10eXBlb2YgdD90LmNhbGwoZSk6dHx8e30sZih0KXx8KHQ9e30pO2Zvcih2YXIgbj1PYmplY3Qua2V5cyh0KSxyPWUuJG9wdGlvbnMucHJvcHMsbz1uLmxlbmd0aDtvLS07KXImJmkocixuW29dKXx8dGUoZSxuW29dKTtrKHQpLHQuX19vYl9fJiZ0Ll9fb2JfXy52bUNvdW50Kyt9ZnVuY3Rpb24gWihlKXt2YXIgdD1lLiRvcHRpb25zLmNvbXB1dGVkO2lmKHQpZm9yKHZhciBuIGluIHQpe3ZhciByPXRbbl07XCJmdW5jdGlvblwiPT10eXBlb2Ygcj8oamkuZ2V0PUcocixlKSxqaS5zZXQ9cCk6KGppLmdldD1yLmdldD9yLmNhY2hlIT09ITE/RyhyLmdldCxlKTpzKHIuZ2V0LGUpOnAsamkuc2V0PXIuc2V0P3Moci5zZXQsZSk6cCksT2JqZWN0LmRlZmluZVByb3BlcnR5KGUsbixqaSl9fWZ1bmN0aW9uIEcoZSx0KXt2YXIgbj1uZXcgU2kodCxlLHAse2xhenk6ITB9KTtyZXR1cm4gZnVuY3Rpb24oKXtyZXR1cm4gbi5kaXJ0eSYmbi5ldmFsdWF0ZSgpLGRpLnRhcmdldCYmbi5kZXBlbmQoKSxuLnZhbHVlfX1mdW5jdGlvbiBZKGUpe3ZhciB0PWUuJG9wdGlvbnMubWV0aG9kcztpZih0KWZvcih2YXIgbiBpbiB0KWVbbl09bnVsbD09dFtuXT9wOnModFtuXSxlKX1mdW5jdGlvbiBRKGUpe3ZhciB0PWUuJG9wdGlvbnMud2F0Y2g7aWYodClmb3IodmFyIG4gaW4gdCl7dmFyIHI9dFtuXTtpZihBcnJheS5pc0FycmF5KHIpKWZvcih2YXIgaT0wO2k8ci5sZW5ndGg7aSsrKVgoZSxuLHJbaV0pO2Vsc2UgWChlLG4scil9fWZ1bmN0aW9uIFgoZSx0LG4pe3ZhciByO2YobikmJihyPW4sbj1uLmhhbmRsZXIpLFwic3RyaW5nXCI9PXR5cGVvZiBuJiYobj1lW25dKSxlLiR3YXRjaCh0LG4scil9ZnVuY3Rpb24gZWUoZSl7dmFyIHQ9e307dC5nZXQ9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5fZGF0YX0sT2JqZWN0LmRlZmluZVByb3BlcnR5KGUucHJvdG90eXBlLFwiJGRhdGFcIix0KSxlLnByb3RvdHlwZS4kc2V0PU8sZS5wcm90b3R5cGUuJGRlbGV0ZT1TLGUucHJvdG90eXBlLiR3YXRjaD1mdW5jdGlvbihlLHQsbil7dmFyIHI9dGhpcztuPW58fHt9LG4udXNlcj0hMDt2YXIgaT1uZXcgU2kocixlLHQsbik7cmV0dXJuIG4uaW1tZWRpYXRlJiZ0LmNhbGwocixpLnZhbHVlKSxmdW5jdGlvbigpe2kudGVhcmRvd24oKX19fWZ1bmN0aW9uIHRlKGUsdCl7Zyh0KXx8T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsdCx7Y29uZmlndXJhYmxlOiEwLGVudW1lcmFibGU6ITAsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIGUuX2RhdGFbdF19LHNldDpmdW5jdGlvbihuKXtlLl9kYXRhW3RdPW59fSl9ZnVuY3Rpb24gbmUoZSl7dmFyIHQ9bmV3IEVpKGUudGFnLGUuZGF0YSxlLmNoaWxkcmVuLGUudGV4dCxlLmVsbSxlLm5zLGUuY29udGV4dCxlLmNvbXBvbmVudE9wdGlvbnMpO3JldHVybiB0LmlzU3RhdGljPWUuaXNTdGF0aWMsdC5rZXk9ZS5rZXksdC5pc0Nsb25lZD0hMCx0fWZ1bmN0aW9uIHJlKGUpe2Zvcih2YXIgdD1uZXcgQXJyYXkoZS5sZW5ndGgpLG49MDtuPGUubGVuZ3RoO24rKyl0W25dPW5lKGVbbl0pO3JldHVybiB0fWZ1bmN0aW9uIGllKGUsdCxuLHIpe3IrPXQ7dmFyIGk9ZS5fX2luamVjdGVkfHwoZS5fX2luamVjdGVkPXt9KTtpZighaVtyXSl7aVtyXT0hMDt2YXIgbz1lW3RdO28/ZVt0XT1mdW5jdGlvbigpe28uYXBwbHkodGhpcyxhcmd1bWVudHMpLG4uYXBwbHkodGhpcyxhcmd1bWVudHMpfTplW3RdPW59fWZ1bmN0aW9uIG9lKGUsdCxuLHIsaSl7dmFyIG8sYSxzLGMsbCx1O2ZvcihvIGluIGUpaWYoYT1lW29dLHM9dFtvXSxhKWlmKHMpe2lmKGEhPT1zKWlmKEFycmF5LmlzQXJyYXkocykpe3MubGVuZ3RoPWEubGVuZ3RoO2Zvcih2YXIgZj0wO2Y8cy5sZW5ndGg7ZisrKXNbZl09YVtmXTtlW29dPXN9ZWxzZSBzLmZuPWEsZVtvXT1zfWVsc2UgdT1cIiFcIj09PW8uY2hhckF0KDApLGw9dT9vLnNsaWNlKDEpOm8sQXJyYXkuaXNBcnJheShhKT9uKGwsYS5pbnZva2VyPWFlKGEpLHUpOihhLmludm9rZXJ8fChjPWEsYT1lW29dPXt9LGEuZm49YyxhLmludm9rZXI9c2UoYSkpLG4obCxhLmludm9rZXIsdSkpO2Vsc2U7Zm9yKG8gaW4gdCllW29dfHwobD1cIiFcIj09PW8uY2hhckF0KDApP28uc2xpY2UoMSk6byxyKGwsdFtvXS5pbnZva2VyKSl9ZnVuY3Rpb24gYWUoZSl7cmV0dXJuIGZ1bmN0aW9uKHQpe2Zvcih2YXIgbj1hcmd1bWVudHMscj0xPT09YXJndW1lbnRzLmxlbmd0aCxpPTA7aTxlLmxlbmd0aDtpKyspcj9lW2ldKHQpOmVbaV0uYXBwbHkobnVsbCxuKX19ZnVuY3Rpb24gc2UoZSl7cmV0dXJuIGZ1bmN0aW9uKHQpe3ZhciBuPTE9PT1hcmd1bWVudHMubGVuZ3RoO24/ZS5mbih0KTplLmZuLmFwcGx5KG51bGwsYXJndW1lbnRzKX19ZnVuY3Rpb24gY2UoZSx0LG4pe2lmKG8oZSkpcmV0dXJuW2xlKGUpXTtpZihBcnJheS5pc0FycmF5KGUpKXtmb3IodmFyIHI9W10saT0wLGE9ZS5sZW5ndGg7aTxhO2krKyl7dmFyIHM9ZVtpXSxjPXJbci5sZW5ndGgtMV07QXJyYXkuaXNBcnJheShzKT9yLnB1c2guYXBwbHkocixjZShzLHQsKG58fFwiXCIpK1wiX1wiK2kpKTpvKHMpP2MmJmMudGV4dD9jLnRleHQrPVN0cmluZyhzKTpcIlwiIT09cyYmci5wdXNoKGxlKHMpKTpzIGluc3RhbmNlb2YgRWkmJihzLnRleHQmJmMmJmMudGV4dD9jLmlzQ2xvbmVkfHwoYy50ZXh0Kz1zLnRleHQpOih0JiZ1ZShzLHQpLHMudGFnJiZudWxsPT1zLmtleSYmbnVsbCE9biYmKHMua2V5PVwiX192bGlzdFwiK24rXCJfXCIraStcIl9fXCIpLHIucHVzaChzKSkpfXJldHVybiByfX1mdW5jdGlvbiBsZShlKXtyZXR1cm4gbmV3IEVpKHZvaWQgMCx2b2lkIDAsdm9pZCAwLFN0cmluZyhlKSl9ZnVuY3Rpb24gdWUoZSx0KXtpZihlLnRhZyYmIWUubnMmJihlLm5zPXQsZS5jaGlsZHJlbikpZm9yKHZhciBuPTAscj1lLmNoaWxkcmVuLmxlbmd0aDtuPHI7bisrKXVlKGUuY2hpbGRyZW5bbl0sdCl9ZnVuY3Rpb24gZmUoZSl7cmV0dXJuIGUmJmUuZmlsdGVyKGZ1bmN0aW9uKGUpe3JldHVybiBlJiZlLmNvbXBvbmVudE9wdGlvbnN9KVswXX1mdW5jdGlvbiBkZShlKXt2YXIgdD1lLiRvcHRpb25zLG49dC5wYXJlbnQ7aWYobiYmIXQuYWJzdHJhY3Qpe2Zvcig7bi4kb3B0aW9ucy5hYnN0cmFjdCYmbi4kcGFyZW50OyluPW4uJHBhcmVudDtuLiRjaGlsZHJlbi5wdXNoKGUpfWUuJHBhcmVudD1uLGUuJHJvb3Q9bj9uLiRyb290OmUsZS4kY2hpbGRyZW49W10sZS4kcmVmcz17fSxlLl93YXRjaGVyPW51bGwsZS5faW5hY3RpdmU9ITEsZS5faXNNb3VudGVkPSExLGUuX2lzRGVzdHJveWVkPSExLGUuX2lzQmVpbmdEZXN0cm95ZWQ9ITF9ZnVuY3Rpb24gcGUoZSl7ZS5wcm90b3R5cGUuX21vdW50PWZ1bmN0aW9uKGUsdCl7dmFyIG49dGhpcztyZXR1cm4gbi4kZWw9ZSxuLiRvcHRpb25zLnJlbmRlcnx8KG4uJG9wdGlvbnMucmVuZGVyPU5pKSx2ZShuLFwiYmVmb3JlTW91bnRcIiksbi5fd2F0Y2hlcj1uZXcgU2kobixmdW5jdGlvbigpe24uX3VwZGF0ZShuLl9yZW5kZXIoKSx0KX0scCksdD0hMSxudWxsPT1uLiR2bm9kZSYmKG4uX2lzTW91bnRlZD0hMCx2ZShuLFwibW91bnRlZFwiKSksbn0sZS5wcm90b3R5cGUuX3VwZGF0ZT1mdW5jdGlvbihlLHQpe3ZhciBuPXRoaXM7bi5faXNNb3VudGVkJiZ2ZShuLFwiYmVmb3JlVXBkYXRlXCIpO3ZhciByPW4uJGVsLGk9TGk7TGk9bjt2YXIgbz1uLl92bm9kZTtuLl92bm9kZT1lLG8/bi4kZWw9bi5fX3BhdGNoX18obyxlKTpuLiRlbD1uLl9fcGF0Y2hfXyhuLiRlbCxlLHQpLExpPWksciYmKHIuX192dWVfXz1udWxsKSxuLiRlbCYmKG4uJGVsLl9fdnVlX189biksbi4kdm5vZGUmJm4uJHBhcmVudCYmbi4kdm5vZGU9PT1uLiRwYXJlbnQuX3Zub2RlJiYobi4kcGFyZW50LiRlbD1uLiRlbCksbi5faXNNb3VudGVkJiZ2ZShuLFwidXBkYXRlZFwiKX0sZS5wcm90b3R5cGUuX3VwZGF0ZUZyb21QYXJlbnQ9ZnVuY3Rpb24oZSx0LG4scil7dmFyIGk9dGhpcyxvPSEoIWkuJG9wdGlvbnMuX3JlbmRlckNoaWxkcmVuJiYhcik7aWYoaS4kb3B0aW9ucy5fcGFyZW50Vm5vZGU9bixpLiRvcHRpb25zLl9yZW5kZXJDaGlsZHJlbj1yLGUmJmkuJG9wdGlvbnMucHJvcHMpe2dpLnNob3VsZENvbnZlcnQ9ITE7Zm9yKHZhciBhPWkuJG9wdGlvbnMuX3Byb3BLZXlzfHxbXSxzPTA7czxhLmxlbmd0aDtzKyspe3ZhciBjPWFbc107aVtjXT1SKGMsaS4kb3B0aW9ucy5wcm9wcyxlLGkpfWdpLnNob3VsZENvbnZlcnQ9ITAsaS4kb3B0aW9ucy5wcm9wc0RhdGE9ZX1pZih0KXt2YXIgbD1pLiRvcHRpb25zLl9wYXJlbnRMaXN0ZW5lcnM7aS4kb3B0aW9ucy5fcGFyZW50TGlzdGVuZXJzPXQsaS5fdXBkYXRlTGlzdGVuZXJzKHQsbCl9byYmKGkuJHNsb3RzPUVlKHIsaS5fcmVuZGVyQ29udGV4dCksaS4kZm9yY2VVcGRhdGUoKSl9LGUucHJvdG90eXBlLiRmb3JjZVVwZGF0ZT1mdW5jdGlvbigpe3ZhciBlPXRoaXM7ZS5fd2F0Y2hlciYmZS5fd2F0Y2hlci51cGRhdGUoKX0sZS5wcm90b3R5cGUuJGRlc3Ryb3k9ZnVuY3Rpb24oKXt2YXIgZT10aGlzO2lmKCFlLl9pc0JlaW5nRGVzdHJveWVkKXt2ZShlLFwiYmVmb3JlRGVzdHJveVwiKSxlLl9pc0JlaW5nRGVzdHJveWVkPSEwO3ZhciB0PWUuJHBhcmVudDshdHx8dC5faXNCZWluZ0Rlc3Ryb3llZHx8ZS4kb3B0aW9ucy5hYnN0cmFjdHx8cih0LiRjaGlsZHJlbixlKSxlLl93YXRjaGVyJiZlLl93YXRjaGVyLnRlYXJkb3duKCk7Zm9yKHZhciBuPWUuX3dhdGNoZXJzLmxlbmd0aDtuLS07KWUuX3dhdGNoZXJzW25dLnRlYXJkb3duKCk7ZS5fZGF0YS5fX29iX18mJmUuX2RhdGEuX19vYl9fLnZtQ291bnQtLSxlLl9pc0Rlc3Ryb3llZD0hMCx2ZShlLFwiZGVzdHJveWVkXCIpLGUuJG9mZigpLGUuJGVsJiYoZS4kZWwuX192dWVfXz1udWxsKSxlLl9fcGF0Y2hfXyhlLl92bm9kZSxudWxsKX19fWZ1bmN0aW9uIHZlKGUsdCl7dmFyIG49ZS4kb3B0aW9uc1t0XTtpZihuKWZvcih2YXIgcj0wLGk9bi5sZW5ndGg7cjxpO3IrKyluW3JdLmNhbGwoZSk7ZS4kZW1pdChcImhvb2s6XCIrdCl9ZnVuY3Rpb24gaGUoZSx0LG4scixpKXtpZihlKXt2YXIgbz1uLiRvcHRpb25zLl9iYXNlO2lmKHUoZSkmJihlPW8uZXh0ZW5kKGUpKSxcImZ1bmN0aW9uXCI9PXR5cGVvZiBlKXtpZighZS5jaWQpaWYoZS5yZXNvbHZlZCllPWUucmVzb2x2ZWQ7ZWxzZSBpZihlPXdlKGUsbyxmdW5jdGlvbigpe24uJGZvcmNlVXBkYXRlKCl9KSwhZSlyZXR1cm47UGUoZSksdD10fHx7fTt2YXIgYT14ZSh0LGUpO2lmKGUub3B0aW9ucy5mdW5jdGlvbmFsKXJldHVybiBtZShlLGEsdCxuLHIpO3ZhciBzPXQub247dC5vbj10Lm5hdGl2ZU9uLGUub3B0aW9ucy5hYnN0cmFjdCYmKHQ9e30pLGtlKHQpO3ZhciBjPWUub3B0aW9ucy5uYW1lfHxpLGw9bmV3IEVpKFwidnVlLWNvbXBvbmVudC1cIitlLmNpZCsoYz9cIi1cIitjOlwiXCIpLHQsdm9pZCAwLHZvaWQgMCx2b2lkIDAsdm9pZCAwLG4se0N0b3I6ZSxwcm9wc0RhdGE6YSxsaXN0ZW5lcnM6cyx0YWc6aSxjaGlsZHJlbjpyfSk7cmV0dXJuIGx9fX1mdW5jdGlvbiBtZShlLHQsbixyLGkpe3ZhciBvPXt9LGE9ZS5vcHRpb25zLnByb3BzO2lmKGEpZm9yKHZhciBjIGluIGEpb1tjXT1SKGMsYSx0KTt2YXIgbD1lLm9wdGlvbnMucmVuZGVyLmNhbGwobnVsbCxzKE9lLHtfc2VsZjpPYmplY3QuY3JlYXRlKHIpfSkse3Byb3BzOm8sZGF0YTpuLHBhcmVudDpyLGNoaWxkcmVuOmNlKGkpLHNsb3RzOmZ1bmN0aW9uKCl7cmV0dXJuIEVlKGkscil9fSk7cmV0dXJuIGwgaW5zdGFuY2VvZiBFaSYmKGwuZnVuY3Rpb25hbENvbnRleHQ9cixuLnNsb3QmJigobC5kYXRhfHwobC5kYXRhPXt9KSkuc2xvdD1uLnNsb3QpKSxsfWZ1bmN0aW9uIGdlKGUsdCl7dmFyIG49ZS5jb21wb25lbnRPcHRpb25zLHI9e19pc0NvbXBvbmVudDohMCxwYXJlbnQ6dCxwcm9wc0RhdGE6bi5wcm9wc0RhdGEsX2NvbXBvbmVudFRhZzpuLnRhZyxfcGFyZW50Vm5vZGU6ZSxfcGFyZW50TGlzdGVuZXJzOm4ubGlzdGVuZXJzLF9yZW5kZXJDaGlsZHJlbjpuLmNoaWxkcmVufSxpPWUuZGF0YS5pbmxpbmVUZW1wbGF0ZTtyZXR1cm4gaSYmKHIucmVuZGVyPWkucmVuZGVyLHIuc3RhdGljUmVuZGVyRm5zPWkuc3RhdGljUmVuZGVyRm5zKSxuZXcgbi5DdG9yKHIpfWZ1bmN0aW9uIHllKGUsdCl7aWYoIWUuY2hpbGR8fGUuY2hpbGQuX2lzRGVzdHJveWVkKXt2YXIgbj1lLmNoaWxkPWdlKGUsTGkpO24uJG1vdW50KHQ/ZS5lbG06dm9pZCAwLHQpfWVsc2UgaWYoZS5kYXRhLmtlZXBBbGl2ZSl7dmFyIHI9ZTtfZShyLHIpfX1mdW5jdGlvbiBfZShlLHQpe3ZhciBuPXQuY29tcG9uZW50T3B0aW9ucyxyPXQuY2hpbGQ9ZS5jaGlsZDtyLl91cGRhdGVGcm9tUGFyZW50KG4ucHJvcHNEYXRhLG4ubGlzdGVuZXJzLHQsbi5jaGlsZHJlbil9ZnVuY3Rpb24gYmUoZSl7ZS5jaGlsZC5faXNNb3VudGVkfHwoZS5jaGlsZC5faXNNb3VudGVkPSEwLHZlKGUuY2hpbGQsXCJtb3VudGVkXCIpKSxlLmRhdGEua2VlcEFsaXZlJiYoZS5jaGlsZC5faW5hY3RpdmU9ITEsdmUoZS5jaGlsZCxcImFjdGl2YXRlZFwiKSl9ZnVuY3Rpb24gJGUoZSl7ZS5jaGlsZC5faXNEZXN0cm95ZWR8fChlLmRhdGEua2VlcEFsaXZlPyhlLmNoaWxkLl9pbmFjdGl2ZT0hMCx2ZShlLmNoaWxkLFwiZGVhY3RpdmF0ZWRcIikpOmUuY2hpbGQuJGRlc3Ryb3koKSl9ZnVuY3Rpb24gd2UoZSx0LG4pe2lmKCFlLnJlcXVlc3RlZCl7ZS5yZXF1ZXN0ZWQ9ITA7dmFyIHI9ZS5wZW5kaW5nQ2FsbGJhY2tzPVtuXSxpPSEwLG89ZnVuY3Rpb24obil7aWYodShuKSYmKG49dC5leHRlbmQobikpLGUucmVzb2x2ZWQ9biwhaSlmb3IodmFyIG89MCxhPXIubGVuZ3RoO288YTtvKyspcltvXShuKX0sYT1mdW5jdGlvbihlKXt9LHM9ZShvLGEpO3JldHVybiBzJiZcImZ1bmN0aW9uXCI9PXR5cGVvZiBzLnRoZW4mJiFlLnJlc29sdmVkJiZzLnRoZW4obyxhKSxpPSExLGUucmVzb2x2ZWR9ZS5wZW5kaW5nQ2FsbGJhY2tzLnB1c2gobil9ZnVuY3Rpb24geGUoZSx0KXt2YXIgbj10Lm9wdGlvbnMucHJvcHM7aWYobil7dmFyIHI9e30saT1lLmF0dHJzLG89ZS5wcm9wcyxhPWUuZG9tUHJvcHM7aWYoaXx8b3x8YSlmb3IodmFyIHMgaW4gbil7dmFyIGM9S3Iocyk7Q2UocixvLHMsYywhMCl8fENlKHIsaSxzLGMpfHxDZShyLGEscyxjKX1yZXR1cm4gcn19ZnVuY3Rpb24gQ2UoZSx0LG4scixvKXtpZih0KXtpZihpKHQsbikpcmV0dXJuIGVbbl09dFtuXSxvfHxkZWxldGUgdFtuXSwhMDtpZihpKHQscikpcmV0dXJuIGVbbl09dFtyXSxvfHxkZWxldGUgdFtyXSwhMH1yZXR1cm4hMX1mdW5jdGlvbiBrZShlKXtlLmhvb2t8fChlLmhvb2s9e30pO2Zvcih2YXIgdD0wO3Q8TWkubGVuZ3RoO3QrKyl7dmFyIG49TWlbdF0scj1lLmhvb2tbbl0saT1EaVtuXTtlLmhvb2tbbl09cj9BZShpLHIpOml9fWZ1bmN0aW9uIEFlKGUsdCl7cmV0dXJuIGZ1bmN0aW9uKG4scil7ZShuLHIpLHQobixyKX19ZnVuY3Rpb24gT2UoZSx0LG4pe3JldHVybiB0JiYoQXJyYXkuaXNBcnJheSh0KXx8XCJvYmplY3RcIiE9dHlwZW9mIHQpJiYobj10LHQ9dm9pZCAwKSxTZSh0aGlzLl9zZWxmLGUsdCxuKX1mdW5jdGlvbiBTZShlLHQsbixyKXtpZighbnx8IW4uX19vYl9fKXtpZighdClyZXR1cm4gTmkoKTtpZihBcnJheS5pc0FycmF5KHIpJiZcImZ1bmN0aW9uXCI9PXR5cGVvZiByWzBdJiYobj1ufHx7fSxuLnNjb3BlZFNsb3RzPXtkZWZhdWx0OnJbMF19LHIubGVuZ3RoPTApLFwic3RyaW5nXCI9PXR5cGVvZiB0KXt2YXIgaSxvPWxpLmdldFRhZ05hbWVzcGFjZSh0KTtpZihsaS5pc1Jlc2VydmVkVGFnKHQpKXJldHVybiBuZXcgRWkodCxuLGNlKHIsbyksdm9pZCAwLHZvaWQgMCxvLGUpO2lmKGk9UChlLiRvcHRpb25zLFwiY29tcG9uZW50c1wiLHQpKXJldHVybiBoZShpLG4sZSxyLHQpO3ZhciBhPVwiZm9yZWlnbk9iamVjdFwiPT09dD9cInhodG1sXCI6bztyZXR1cm4gbmV3IEVpKHQsbixjZShyLGEpLHZvaWQgMCx2b2lkIDAsbyxlKX1yZXR1cm4gaGUodCxuLGUscil9fWZ1bmN0aW9uIFRlKGUpe2UuJHZub2RlPW51bGwsZS5fdm5vZGU9bnVsbCxlLl9zdGF0aWNUcmVlcz1udWxsLGUuX3JlbmRlckNvbnRleHQ9ZS4kb3B0aW9ucy5fcGFyZW50Vm5vZGUmJmUuJG9wdGlvbnMuX3BhcmVudFZub2RlLmNvbnRleHQsZS4kc2xvdHM9RWUoZS4kb3B0aW9ucy5fcmVuZGVyQ2hpbGRyZW4sZS5fcmVuZGVyQ29udGV4dCksZS4kc2NvcGVkU2xvdHM9bnVsbCxlLiRjcmVhdGVFbGVtZW50PXMoT2UsZSksZS4kb3B0aW9ucy5lbCYmZS4kbW91bnQoZS4kb3B0aW9ucy5lbCl9ZnVuY3Rpb24gamUobil7ZnVuY3Rpb24gcihlLHQsbil7aWYoQXJyYXkuaXNBcnJheShlKSlmb3IodmFyIHI9MDtyPGUubGVuZ3RoO3IrKyllW3JdJiZcInN0cmluZ1wiIT10eXBlb2YgZVtyXSYmaShlW3JdLHQrXCJfXCIrcixuKTtlbHNlIGkoZSx0LG4pfWZ1bmN0aW9uIGkoZSx0LG4pe2UuaXNTdGF0aWM9ITAsZS5rZXk9dCxlLmlzT25jZT1ufW4ucHJvdG90eXBlLiRuZXh0VGljaz1mdW5jdGlvbihlKXtyZXR1cm4gc2koZSx0aGlzKX0sbi5wcm90b3R5cGUuX3JlbmRlcj1mdW5jdGlvbigpe3ZhciBlPXRoaXMsdD1lLiRvcHRpb25zLG49dC5yZW5kZXIscj10LnN0YXRpY1JlbmRlckZucyxpPXQuX3BhcmVudFZub2RlO2lmKGUuX2lzTW91bnRlZClmb3IodmFyIG8gaW4gZS4kc2xvdHMpZS4kc2xvdHNbb109cmUoZS4kc2xvdHNbb10pO2kmJihlLiRzY29wZWRTbG90cz1pLmRhdGEuc2NvcGVkU2xvdHMpLHImJiFlLl9zdGF0aWNUcmVlcyYmKGUuX3N0YXRpY1RyZWVzPVtdKSxlLiR2bm9kZT1pO3ZhciBhO3RyeXthPW4uY2FsbChlLl9yZW5kZXJQcm94eSxlLiRjcmVhdGVFbGVtZW50KX1jYXRjaCh0KXtpZihsaS5lcnJvckhhbmRsZXIpbGkuZXJyb3JIYW5kbGVyLmNhbGwobnVsbCx0LGUpO2Vsc2V7aWYob2koKSl0aHJvdyB0O2NvbnNvbGUuZXJyb3IodCl9YT1lLl92bm9kZX1yZXR1cm4gYSBpbnN0YW5jZW9mIEVpfHwoYT1OaSgpKSxhLnBhcmVudD1pLGF9LG4ucHJvdG90eXBlLl9oPU9lLG4ucHJvdG90eXBlLl9zPWUsbi5wcm90b3R5cGUuX249dCxuLnByb3RvdHlwZS5fZT1OaSxuLnByb3RvdHlwZS5fcT1oLG4ucHJvdG90eXBlLl9pPW0sbi5wcm90b3R5cGUuX209ZnVuY3Rpb24oZSx0KXt2YXIgbj10aGlzLl9zdGF0aWNUcmVlc1tlXTtyZXR1cm4gbiYmIXQ/QXJyYXkuaXNBcnJheShuKT9yZShuKTpuZShuKToobj10aGlzLl9zdGF0aWNUcmVlc1tlXT10aGlzLiRvcHRpb25zLnN0YXRpY1JlbmRlckZuc1tlXS5jYWxsKHRoaXMuX3JlbmRlclByb3h5KSxyKG4sXCJfX3N0YXRpY19fXCIrZSwhMSksbil9LG4ucHJvdG90eXBlLl9vPWZ1bmN0aW9uKGUsdCxuKXtyZXR1cm4gcihlLFwiX19vbmNlX19cIit0KyhuP1wiX1wiK246XCJcIiksITApLGV9O3ZhciBvPWZ1bmN0aW9uKGUpe3JldHVybiBlfTtuLnByb3RvdHlwZS5fZj1mdW5jdGlvbihlKXtyZXR1cm4gUCh0aGlzLiRvcHRpb25zLFwiZmlsdGVyc1wiLGUsITApfHxvfSxuLnByb3RvdHlwZS5fbD1mdW5jdGlvbihlLHQpe3ZhciBuLHIsaSxvLGE7aWYoQXJyYXkuaXNBcnJheShlKSlmb3Iobj1uZXcgQXJyYXkoZS5sZW5ndGgpLHI9MCxpPWUubGVuZ3RoO3I8aTtyKyspbltyXT10KGVbcl0scik7ZWxzZSBpZihcIm51bWJlclwiPT10eXBlb2YgZSlmb3Iobj1uZXcgQXJyYXkoZSkscj0wO3I8ZTtyKyspbltyXT10KHIrMSxyKTtlbHNlIGlmKHUoZSkpZm9yKG89T2JqZWN0LmtleXMoZSksbj1uZXcgQXJyYXkoby5sZW5ndGgpLHI9MCxpPW8ubGVuZ3RoO3I8aTtyKyspYT1vW3JdLG5bcl09dChlW2FdLGEscik7cmV0dXJuIG59LG4ucHJvdG90eXBlLl90PWZ1bmN0aW9uKGUsdCxuKXt2YXIgcj10aGlzLiRzY29wZWRTbG90cyYmdGhpcy4kc2NvcGVkU2xvdHNbZV07aWYocilyZXR1cm4gcihufHx7fSl8fHQ7dmFyIGk9dGhpcy4kc2xvdHNbZV07cmV0dXJuIGl8fHR9LG4ucHJvdG90eXBlLl9iPWZ1bmN0aW9uKGUsdCxuLHIpe2lmKG4paWYodShuKSl7QXJyYXkuaXNBcnJheShuKSYmKG49ZChuKSk7Zm9yKHZhciBpIGluIG4paWYoXCJjbGFzc1wiPT09aXx8XCJzdHlsZVwiPT09aSllW2ldPW5baV07ZWxzZXt2YXIgbz1yfHxsaS5tdXN0VXNlUHJvcCh0LGkpP2UuZG9tUHJvcHN8fChlLmRvbVByb3BzPXt9KTplLmF0dHJzfHwoZS5hdHRycz17fSk7b1tpXT1uW2ldfX1lbHNlO3JldHVybiBlfSxuLnByb3RvdHlwZS5faz1mdW5jdGlvbihlKXtyZXR1cm4gbGkua2V5Q29kZXNbZV19fWZ1bmN0aW9uIEVlKGUsdCl7dmFyIG49e307aWYoIWUpcmV0dXJuIG47Zm9yKHZhciByLGksbz1jZShlKXx8W10sYT1bXSxzPTAsYz1vLmxlbmd0aDtzPGM7cysrKWlmKGk9b1tzXSwoaS5jb250ZXh0PT09dHx8aS5mdW5jdGlvbmFsQ29udGV4dD09PXQpJiZpLmRhdGEmJihyPWkuZGF0YS5zbG90KSl7dmFyIGw9bltyXXx8KG5bcl09W10pO1widGVtcGxhdGVcIj09PWkudGFnP2wucHVzaC5hcHBseShsLGkuY2hpbGRyZW4pOmwucHVzaChpKX1lbHNlIGEucHVzaChpKTtyZXR1cm4gYS5sZW5ndGgmJigxIT09YS5sZW5ndGh8fFwiIFwiIT09YVswXS50ZXh0JiYhYVswXS5pc0NvbW1lbnQpJiYobi5kZWZhdWx0PWEpLG59ZnVuY3Rpb24gTmUoZSl7ZS5fZXZlbnRzPU9iamVjdC5jcmVhdGUobnVsbCk7dmFyIHQ9ZS4kb3B0aW9ucy5fcGFyZW50TGlzdGVuZXJzLG49cyhlLiRvbixlKSxyPXMoZS4kb2ZmLGUpO2UuX3VwZGF0ZUxpc3RlbmVycz1mdW5jdGlvbih0LGkpe29lKHQsaXx8e30sbixyLGUpfSx0JiZlLl91cGRhdGVMaXN0ZW5lcnModCl9ZnVuY3Rpb24gTGUoZSl7ZS5wcm90b3R5cGUuJG9uPWZ1bmN0aW9uKGUsdCl7dmFyIG49dGhpcztyZXR1cm4obi5fZXZlbnRzW2VdfHwobi5fZXZlbnRzW2VdPVtdKSkucHVzaCh0KSxufSxlLnByb3RvdHlwZS4kb25jZT1mdW5jdGlvbihlLHQpe2Z1bmN0aW9uIG4oKXtyLiRvZmYoZSxuKSx0LmFwcGx5KHIsYXJndW1lbnRzKX12YXIgcj10aGlzO3JldHVybiBuLmZuPXQsci4kb24oZSxuKSxyfSxlLnByb3RvdHlwZS4kb2ZmPWZ1bmN0aW9uKGUsdCl7dmFyIG49dGhpcztpZighYXJndW1lbnRzLmxlbmd0aClyZXR1cm4gbi5fZXZlbnRzPU9iamVjdC5jcmVhdGUobnVsbCksbjt2YXIgcj1uLl9ldmVudHNbZV07aWYoIXIpcmV0dXJuIG47aWYoMT09PWFyZ3VtZW50cy5sZW5ndGgpcmV0dXJuIG4uX2V2ZW50c1tlXT1udWxsLG47Zm9yKHZhciBpLG89ci5sZW5ndGg7by0tOylpZihpPXJbb10saT09PXR8fGkuZm49PT10KXtyLnNwbGljZShvLDEpO2JyZWFrfXJldHVybiBufSxlLnByb3RvdHlwZS4kZW1pdD1mdW5jdGlvbihlKXt2YXIgdD10aGlzLG49dC5fZXZlbnRzW2VdO2lmKG4pe249bi5sZW5ndGg+MT9jKG4pOm47Zm9yKHZhciByPWMoYXJndW1lbnRzLDEpLGk9MCxvPW4ubGVuZ3RoO2k8bztpKyspbltpXS5hcHBseSh0LHIpfXJldHVybiB0fX1mdW5jdGlvbiBEZShlKXtlLnByb3RvdHlwZS5faW5pdD1mdW5jdGlvbihlKXt2YXIgdD10aGlzO3QuX3VpZD1QaSsrLHQuX2lzVnVlPSEwLGUmJmUuX2lzQ29tcG9uZW50P01lKHQsZSk6dC4kb3B0aW9ucz1NKFBlKHQuY29uc3RydWN0b3IpLGV8fHt9LHQpLHQuX3JlbmRlclByb3h5PXQsdC5fc2VsZj10LGRlKHQpLE5lKHQpLHZlKHQsXCJiZWZvcmVDcmVhdGVcIiksSyh0KSx2ZSh0LFwiY3JlYXRlZFwiKSxUZSh0KX19ZnVuY3Rpb24gTWUoZSx0KXt2YXIgbj1lLiRvcHRpb25zPU9iamVjdC5jcmVhdGUoZS5jb25zdHJ1Y3Rvci5vcHRpb25zKTtuLnBhcmVudD10LnBhcmVudCxuLnByb3BzRGF0YT10LnByb3BzRGF0YSxuLl9wYXJlbnRWbm9kZT10Ll9wYXJlbnRWbm9kZSxuLl9wYXJlbnRMaXN0ZW5lcnM9dC5fcGFyZW50TGlzdGVuZXJzLG4uX3JlbmRlckNoaWxkcmVuPXQuX3JlbmRlckNoaWxkcmVuLG4uX2NvbXBvbmVudFRhZz10Ll9jb21wb25lbnRUYWcsdC5yZW5kZXImJihuLnJlbmRlcj10LnJlbmRlcixuLnN0YXRpY1JlbmRlckZucz10LnN0YXRpY1JlbmRlckZucyl9ZnVuY3Rpb24gUGUoZSl7dmFyIHQ9ZS5vcHRpb25zO2lmKGUuc3VwZXIpe3ZhciBuPWUuc3VwZXIub3B0aW9ucyxyPWUuc3VwZXJPcHRpb25zLGk9ZS5leHRlbmRPcHRpb25zO24hPT1yJiYoZS5zdXBlck9wdGlvbnM9bixpLnJlbmRlcj10LnJlbmRlcixpLnN0YXRpY1JlbmRlckZucz10LnN0YXRpY1JlbmRlckZucyxpLl9zY29wZUlkPXQuX3Njb3BlSWQsdD1lLm9wdGlvbnM9TShuLGkpLHQubmFtZSYmKHQuY29tcG9uZW50c1t0Lm5hbWVdPWUpKX1yZXR1cm4gdH1mdW5jdGlvbiBSZShlKXt0aGlzLl9pbml0KGUpfWZ1bmN0aW9uIEllKGUpe2UudXNlPWZ1bmN0aW9uKGUpe2lmKCFlLmluc3RhbGxlZCl7dmFyIHQ9Yyhhcmd1bWVudHMsMSk7cmV0dXJuIHQudW5zaGlmdCh0aGlzKSxcImZ1bmN0aW9uXCI9PXR5cGVvZiBlLmluc3RhbGw/ZS5pbnN0YWxsLmFwcGx5KGUsdCk6ZS5hcHBseShudWxsLHQpLGUuaW5zdGFsbGVkPSEwLHRoaXN9fX1mdW5jdGlvbiBGZShlKXtlLm1peGluPWZ1bmN0aW9uKGUpe3RoaXMub3B0aW9ucz1NKHRoaXMub3B0aW9ucyxlKX19ZnVuY3Rpb24gQmUoZSl7ZS5jaWQ9MDt2YXIgdD0xO2UuZXh0ZW5kPWZ1bmN0aW9uKGUpe2U9ZXx8e307dmFyIG49dGhpcyxyPW4uY2lkLGk9ZS5fQ3Rvcnx8KGUuX0N0b3I9e30pO2lmKGlbcl0pcmV0dXJuIGlbcl07dmFyIG89ZS5uYW1lfHxuLm9wdGlvbnMubmFtZSxhPWZ1bmN0aW9uKGUpe3RoaXMuX2luaXQoZSl9O3JldHVybiBhLnByb3RvdHlwZT1PYmplY3QuY3JlYXRlKG4ucHJvdG90eXBlKSxhLnByb3RvdHlwZS5jb25zdHJ1Y3Rvcj1hLGEuY2lkPXQrKyxhLm9wdGlvbnM9TShuLm9wdGlvbnMsZSksYS5zdXBlcj1uLGEuZXh0ZW5kPW4uZXh0ZW5kLGEubWl4aW49bi5taXhpbixhLnVzZT1uLnVzZSxsaS5fYXNzZXRUeXBlcy5mb3JFYWNoKGZ1bmN0aW9uKGUpe2FbZV09bltlXX0pLG8mJihhLm9wdGlvbnMuY29tcG9uZW50c1tvXT1hKSxhLnN1cGVyT3B0aW9ucz1uLm9wdGlvbnMsYS5leHRlbmRPcHRpb25zPWUsaVtyXT1hLGF9fWZ1bmN0aW9uIFVlKGUpe2xpLl9hc3NldFR5cGVzLmZvckVhY2goZnVuY3Rpb24odCl7ZVt0XT1mdW5jdGlvbihlLG4pe3JldHVybiBuPyhcImNvbXBvbmVudFwiPT09dCYmZihuKSYmKG4ubmFtZT1uLm5hbWV8fGUsbj10aGlzLm9wdGlvbnMuX2Jhc2UuZXh0ZW5kKG4pKSxcImRpcmVjdGl2ZVwiPT09dCYmXCJmdW5jdGlvblwiPT10eXBlb2YgbiYmKG49e2JpbmQ6bix1cGRhdGU6bn0pLHRoaXMub3B0aW9uc1t0K1wic1wiXVtlXT1uLG4pOnRoaXMub3B0aW9uc1t0K1wic1wiXVtlXX19KX1mdW5jdGlvbiBIZShlLHQpe3JldHVyblwic3RyaW5nXCI9PXR5cGVvZiBlP2Uuc3BsaXQoXCIsXCIpLmluZGV4T2YodCk+LTE6ZS50ZXN0KHQpfWZ1bmN0aW9uIFZlKGUpe3ZhciB0PXt9O3QuZ2V0PWZ1bmN0aW9uKCl7cmV0dXJuIGxpfSxPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxcImNvbmZpZ1wiLHQpLGUudXRpbD0kaSxlLnNldD1PLGUuZGVsZXRlPVMsZS5uZXh0VGljaz1zaSxlLm9wdGlvbnM9T2JqZWN0LmNyZWF0ZShudWxsKSxsaS5fYXNzZXRUeXBlcy5mb3JFYWNoKGZ1bmN0aW9uKHQpe2Uub3B0aW9uc1t0K1wic1wiXT1PYmplY3QuY3JlYXRlKG51bGwpfSksZS5vcHRpb25zLl9iYXNlPWUsbChlLm9wdGlvbnMuY29tcG9uZW50cyxGaSksSWUoZSksRmUoZSksQmUoZSksVWUoZSl9ZnVuY3Rpb24gemUoZSl7Zm9yKHZhciB0PWUuZGF0YSxuPWUscj1lO3IuY2hpbGQ7KXI9ci5jaGlsZC5fdm5vZGUsci5kYXRhJiYodD1KZShyLmRhdGEsdCkpO2Zvcig7bj1uLnBhcmVudDspbi5kYXRhJiYodD1KZSh0LG4uZGF0YSkpO3JldHVybiBLZSh0KX1mdW5jdGlvbiBKZShlLHQpe3JldHVybntzdGF0aWNDbGFzczpxZShlLnN0YXRpY0NsYXNzLHQuc3RhdGljQ2xhc3MpLGNsYXNzOmUuY2xhc3M/W2UuY2xhc3MsdC5jbGFzc106dC5jbGFzc319ZnVuY3Rpb24gS2UoZSl7dmFyIHQ9ZS5jbGFzcyxuPWUuc3RhdGljQ2xhc3M7cmV0dXJuIG58fHQ/cWUobixXZSh0KSk6XCJcIn1mdW5jdGlvbiBxZShlLHQpe3JldHVybiBlP3Q/ZStcIiBcIit0OmU6dHx8XCJcIn1mdW5jdGlvbiBXZShlKXt2YXIgdD1cIlwiO2lmKCFlKXJldHVybiB0O2lmKFwic3RyaW5nXCI9PXR5cGVvZiBlKXJldHVybiBlO2lmKEFycmF5LmlzQXJyYXkoZSkpe2Zvcih2YXIgbixyPTAsaT1lLmxlbmd0aDtyPGk7cisrKWVbcl0mJihuPVdlKGVbcl0pKSYmKHQrPW4rXCIgXCIpO3JldHVybiB0LnNsaWNlKDAsLTEpfWlmKHUoZSkpe2Zvcih2YXIgbyBpbiBlKWVbb10mJih0Kz1vK1wiIFwiKTtyZXR1cm4gdC5zbGljZSgwLC0xKX1yZXR1cm4gdH1mdW5jdGlvbiBaZShlKXtyZXR1cm4gWGkoZSk/XCJzdmdcIjpcIm1hdGhcIj09PWU/XCJtYXRoXCI6dm9pZCAwfWZ1bmN0aW9uIEdlKGUpe2lmKCFRcilyZXR1cm4hMDtpZih0byhlKSlyZXR1cm4hMTtpZihlPWUudG9Mb3dlckNhc2UoKSxudWxsIT1ub1tlXSlyZXR1cm4gbm9bZV07dmFyIHQ9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChlKTtyZXR1cm4gZS5pbmRleE9mKFwiLVwiKT4tMT9ub1tlXT10LmNvbnN0cnVjdG9yPT09d2luZG93LkhUTUxVbmtub3duRWxlbWVudHx8dC5jb25zdHJ1Y3Rvcj09PXdpbmRvdy5IVE1MRWxlbWVudDpub1tlXT0vSFRNTFVua25vd25FbGVtZW50Ly50ZXN0KHQudG9TdHJpbmcoKSl9ZnVuY3Rpb24gWWUoZSl7aWYoXCJzdHJpbmdcIj09dHlwZW9mIGUpe2lmKGU9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihlKSwhZSlyZXR1cm4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKX1yZXR1cm4gZX1mdW5jdGlvbiBRZShlLHQpe3ZhciBuPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoZSk7cmV0dXJuXCJzZWxlY3RcIiE9PWU/bjoodC5kYXRhJiZ0LmRhdGEuYXR0cnMmJlwibXVsdGlwbGVcImluIHQuZGF0YS5hdHRycyYmbi5zZXRBdHRyaWJ1dGUoXCJtdWx0aXBsZVwiLFwibXVsdGlwbGVcIiksbil9ZnVuY3Rpb24gWGUoZSx0KXtyZXR1cm4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKFdpW2VdLHQpfWZ1bmN0aW9uIGV0KGUpe3JldHVybiBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShlKX1mdW5jdGlvbiB0dChlKXtyZXR1cm4gZG9jdW1lbnQuY3JlYXRlQ29tbWVudChlKX1mdW5jdGlvbiBudChlLHQsbil7ZS5pbnNlcnRCZWZvcmUodCxuKX1mdW5jdGlvbiBydChlLHQpe2UucmVtb3ZlQ2hpbGQodCl9ZnVuY3Rpb24gaXQoZSx0KXtlLmFwcGVuZENoaWxkKHQpfWZ1bmN0aW9uIG90KGUpe3JldHVybiBlLnBhcmVudE5vZGV9ZnVuY3Rpb24gYXQoZSl7cmV0dXJuIGUubmV4dFNpYmxpbmd9ZnVuY3Rpb24gc3QoZSl7cmV0dXJuIGUudGFnTmFtZX1mdW5jdGlvbiBjdChlLHQpe2UudGV4dENvbnRlbnQ9dH1mdW5jdGlvbiBsdChlKXtyZXR1cm4gZS5jaGlsZE5vZGVzfWZ1bmN0aW9uIHV0KGUsdCxuKXtlLnNldEF0dHJpYnV0ZSh0LG4pfWZ1bmN0aW9uIGZ0KGUsdCl7dmFyIG49ZS5kYXRhLnJlZjtpZihuKXt2YXIgaT1lLmNvbnRleHQsbz1lLmNoaWxkfHxlLmVsbSxhPWkuJHJlZnM7dD9BcnJheS5pc0FycmF5KGFbbl0pP3IoYVtuXSxvKTphW25dPT09byYmKGFbbl09dm9pZCAwKTplLmRhdGEucmVmSW5Gb3I/QXJyYXkuaXNBcnJheShhW25dKSYmYVtuXS5pbmRleE9mKG8pPDA/YVtuXS5wdXNoKG8pOmFbbl09W29dOmFbbl09b319ZnVuY3Rpb24gZHQoZSl7cmV0dXJuIG51bGw9PWV9ZnVuY3Rpb24gcHQoZSl7cmV0dXJuIG51bGwhPWV9ZnVuY3Rpb24gdnQoZSx0KXtyZXR1cm4gZS5rZXk9PT10LmtleSYmZS50YWc9PT10LnRhZyYmZS5pc0NvbW1lbnQ9PT10LmlzQ29tbWVudCYmIWUuZGF0YT09IXQuZGF0YX1mdW5jdGlvbiBodChlLHQsbil7dmFyIHIsaSxvPXt9O2ZvcihyPXQ7cjw9bjsrK3IpaT1lW3JdLmtleSxwdChpKSYmKG9baV09cik7cmV0dXJuIG99ZnVuY3Rpb24gbXQoZSl7ZnVuY3Rpb24gdChlKXtyZXR1cm4gbmV3IEVpKHgudGFnTmFtZShlKS50b0xvd2VyQ2FzZSgpLHt9LFtdLHZvaWQgMCxlKX1mdW5jdGlvbiBuKGUsdCl7ZnVuY3Rpb24gbigpezA9PT0tLW4ubGlzdGVuZXJzJiZyKGUpfXJldHVybiBuLmxpc3RlbmVycz10LG59ZnVuY3Rpb24gcihlKXt2YXIgdD14LnBhcmVudE5vZGUoZSk7dCYmeC5yZW1vdmVDaGlsZCh0LGUpfWZ1bmN0aW9uIGkoZSx0LG4pe3ZhciByLGk9ZS5kYXRhO2lmKGUuaXNSb290SW5zZXJ0PSFuLHB0KGkpJiYocHQocj1pLmhvb2spJiZwdChyPXIuaW5pdCkmJnIoZSkscHQocj1lLmNoaWxkKSkpcmV0dXJuIGwoZSx0KSxlLmVsbTt2YXIgbz1lLmNoaWxkcmVuLHM9ZS50YWc7cmV0dXJuIHB0KHMpPyhlLmVsbT1lLm5zP3guY3JlYXRlRWxlbWVudE5TKGUubnMscyk6eC5jcmVhdGVFbGVtZW50KHMsZSksdShlKSxhKGUsbyx0KSxwdChpKSYmYyhlLHQpKTplLmlzQ29tbWVudD9lLmVsbT14LmNyZWF0ZUNvbW1lbnQoZS50ZXh0KTplLmVsbT14LmNyZWF0ZVRleHROb2RlKGUudGV4dCksZS5lbG19ZnVuY3Rpb24gYShlLHQsbil7aWYoQXJyYXkuaXNBcnJheSh0KSlmb3IodmFyIHI9MDtyPHQubGVuZ3RoOysrcil4LmFwcGVuZENoaWxkKGUuZWxtLGkodFtyXSxuLCEwKSk7ZWxzZSBvKGUudGV4dCkmJnguYXBwZW5kQ2hpbGQoZS5lbG0seC5jcmVhdGVUZXh0Tm9kZShlLnRleHQpKX1mdW5jdGlvbiBzKGUpe2Zvcig7ZS5jaGlsZDspZT1lLmNoaWxkLl92bm9kZTtyZXR1cm4gcHQoZS50YWcpfWZ1bmN0aW9uIGMoZSx0KXtmb3IodmFyIG49MDtuPCQuY3JlYXRlLmxlbmd0aDsrK24pJC5jcmVhdGVbbl0ob28sZSk7Xz1lLmRhdGEuaG9vayxwdChfKSYmKF8uY3JlYXRlJiZfLmNyZWF0ZShvbyxlKSxfLmluc2VydCYmdC5wdXNoKGUpKX1mdW5jdGlvbiBsKGUsdCl7ZS5kYXRhLnBlbmRpbmdJbnNlcnQmJnQucHVzaC5hcHBseSh0LGUuZGF0YS5wZW5kaW5nSW5zZXJ0KSxlLmVsbT1lLmNoaWxkLiRlbCxzKGUpPyhjKGUsdCksdShlKSk6KGZ0KGUpLHQucHVzaChlKSl9ZnVuY3Rpb24gdShlKXt2YXIgdDtwdCh0PWUuY29udGV4dCkmJnB0KHQ9dC4kb3B0aW9ucy5fc2NvcGVJZCkmJnguc2V0QXR0cmlidXRlKGUuZWxtLHQsXCJcIikscHQodD1MaSkmJnQhPT1lLmNvbnRleHQmJnB0KHQ9dC4kb3B0aW9ucy5fc2NvcGVJZCkmJnguc2V0QXR0cmlidXRlKGUuZWxtLHQsXCJcIil9ZnVuY3Rpb24gZihlLHQsbixyLG8sYSl7Zm9yKDtyPD1vOysrcil4Lmluc2VydEJlZm9yZShlLGkobltyXSxhKSx0KX1mdW5jdGlvbiBkKGUpe3ZhciB0LG4scj1lLmRhdGE7aWYocHQocikpZm9yKHB0KHQ9ci5ob29rKSYmcHQodD10LmRlc3Ryb3kpJiZ0KGUpLHQ9MDt0PCQuZGVzdHJveS5sZW5ndGg7Kyt0KSQuZGVzdHJveVt0XShlKTtpZihwdCh0PWUuY2hpbGRyZW4pKWZvcihuPTA7bjxlLmNoaWxkcmVuLmxlbmd0aDsrK24pZChlLmNoaWxkcmVuW25dKX1mdW5jdGlvbiBwKGUsdCxuLHIpe2Zvcig7bjw9cjsrK24pe3ZhciBpPXRbbl07cHQoaSkmJihwdChpLnRhZyk/KHYoaSksZChpKSk6eC5yZW1vdmVDaGlsZChlLGkuZWxtKSl9fWZ1bmN0aW9uIHYoZSx0KXtpZih0fHxwdChlLmRhdGEpKXt2YXIgaT0kLnJlbW92ZS5sZW5ndGgrMTtmb3IodD90Lmxpc3RlbmVycys9aTp0PW4oZS5lbG0saSkscHQoXz1lLmNoaWxkKSYmcHQoXz1fLl92bm9kZSkmJnB0KF8uZGF0YSkmJnYoXyx0KSxfPTA7XzwkLnJlbW92ZS5sZW5ndGg7KytfKSQucmVtb3ZlW19dKGUsdCk7cHQoXz1lLmRhdGEuaG9vaykmJnB0KF89Xy5yZW1vdmUpP18oZSx0KTp0KCl9ZWxzZSByKGUuZWxtKX1mdW5jdGlvbiBoKGUsdCxuLHIsbyl7Zm9yKHZhciBhLHMsYyxsLHU9MCxkPTAsdj10Lmxlbmd0aC0xLGg9dFswXSxnPXRbdl0seT1uLmxlbmd0aC0xLF89blswXSxiPW5beV0sJD0hbzt1PD12JiZkPD15OylkdChoKT9oPXRbKyt1XTpkdChnKT9nPXRbLS12XTp2dChoLF8pPyhtKGgsXyxyKSxoPXRbKyt1XSxfPW5bKytkXSk6dnQoZyxiKT8obShnLGIsciksZz10Wy0tdl0sYj1uWy0teV0pOnZ0KGgsYik/KG0oaCxiLHIpLCQmJnguaW5zZXJ0QmVmb3JlKGUsaC5lbG0seC5uZXh0U2libGluZyhnLmVsbSkpLGg9dFsrK3VdLGI9blstLXldKTp2dChnLF8pPyhtKGcsXyxyKSwkJiZ4Lmluc2VydEJlZm9yZShlLGcuZWxtLGguZWxtKSxnPXRbLS12XSxfPW5bKytkXSk6KGR0KGEpJiYoYT1odCh0LHUsdikpLHM9cHQoXy5rZXkpP2FbXy5rZXldOm51bGwsZHQocyk/KHguaW5zZXJ0QmVmb3JlKGUsaShfLHIpLGguZWxtKSxfPW5bKytkXSk6KGM9dFtzXSxjLnRhZyE9PV8udGFnPyh4Lmluc2VydEJlZm9yZShlLGkoXyxyKSxoLmVsbSksXz1uWysrZF0pOihtKGMsXyxyKSx0W3NdPXZvaWQgMCwkJiZ4Lmluc2VydEJlZm9yZShlLF8uZWxtLGguZWxtKSxfPW5bKytkXSkpKTt1PnY/KGw9ZHQoblt5KzFdKT9udWxsOm5beSsxXS5lbG0sZihlLGwsbixkLHkscikpOmQ+eSYmcChlLHQsdSx2KX1mdW5jdGlvbiBtKGUsdCxuLHIpe2lmKGUhPT10KXtpZih0LmlzU3RhdGljJiZlLmlzU3RhdGljJiZ0LmtleT09PWUua2V5JiYodC5pc0Nsb25lZHx8dC5pc09uY2UpKXJldHVybiB2b2lkKHQuZWxtPWUuZWxtKTt2YXIgaSxvPXQuZGF0YSxhPXB0KG8pO2EmJnB0KGk9by5ob29rKSYmcHQoaT1pLnByZXBhdGNoKSYmaShlLHQpO3ZhciBjPXQuZWxtPWUuZWxtLGw9ZS5jaGlsZHJlbix1PXQuY2hpbGRyZW47aWYoYSYmcyh0KSl7Zm9yKGk9MDtpPCQudXBkYXRlLmxlbmd0aDsrK2kpJC51cGRhdGVbaV0oZSx0KTtwdChpPW8uaG9vaykmJnB0KGk9aS51cGRhdGUpJiZpKGUsdCl9ZHQodC50ZXh0KT9wdChsKSYmcHQodSk/bCE9PXUmJmgoYyxsLHUsbixyKTpwdCh1KT8ocHQoZS50ZXh0KSYmeC5zZXRUZXh0Q29udGVudChjLFwiXCIpLGYoYyxudWxsLHUsMCx1Lmxlbmd0aC0xLG4pKTpwdChsKT9wKGMsbCwwLGwubGVuZ3RoLTEpOnB0KGUudGV4dCkmJnguc2V0VGV4dENvbnRlbnQoYyxcIlwiKTplLnRleHQhPT10LnRleHQmJnguc2V0VGV4dENvbnRlbnQoYyx0LnRleHQpLGEmJnB0KGk9by5ob29rKSYmcHQoaT1pLnBvc3RwYXRjaCkmJmkoZSx0KX19ZnVuY3Rpb24gZyhlLHQsbil7aWYobiYmZS5wYXJlbnQpZS5wYXJlbnQuZGF0YS5wZW5kaW5nSW5zZXJ0PXQ7ZWxzZSBmb3IodmFyIHI9MDtyPHQubGVuZ3RoOysrcil0W3JdLmRhdGEuaG9vay5pbnNlcnQodFtyXSl9ZnVuY3Rpb24geShlLHQsbil7dC5lbG09ZTt2YXIgcj10LnRhZyxpPXQuZGF0YSxvPXQuY2hpbGRyZW47aWYocHQoaSkmJihwdChfPWkuaG9vaykmJnB0KF89Xy5pbml0KSYmXyh0LCEwKSxwdChfPXQuY2hpbGQpKSlyZXR1cm4gbCh0LG4pLCEwO2lmKHB0KHIpKXtpZihwdChvKSl7dmFyIHM9eC5jaGlsZE5vZGVzKGUpO2lmKHMubGVuZ3RoKXt2YXIgdT0hMDtpZihzLmxlbmd0aCE9PW8ubGVuZ3RoKXU9ITE7ZWxzZSBmb3IodmFyIGY9MDtmPG8ubGVuZ3RoO2YrKylpZigheShzW2ZdLG9bZl0sbikpe3U9ITE7YnJlYWt9aWYoIXUpcmV0dXJuITF9ZWxzZSBhKHQsbyxuKX1wdChpKSYmYyh0LG4pfXJldHVybiEwfXZhciBfLGIsJD17fSx3PWUubW9kdWxlcyx4PWUubm9kZU9wcztmb3IoXz0wO188YW8ubGVuZ3RoOysrXylmb3IoJFthb1tfXV09W10sYj0wO2I8dy5sZW5ndGg7KytiKXZvaWQgMCE9PXdbYl1bYW9bX11dJiYkW2FvW19dXS5wdXNoKHdbYl1bYW9bX11dKTtyZXR1cm4gZnVuY3Rpb24oZSxuLHIsbyl7aWYoIW4pcmV0dXJuIHZvaWQoZSYmZChlKSk7dmFyIGEsYyxsPSExLHU9W107aWYoZSl7dmFyIGY9cHQoZS5ub2RlVHlwZSk7aWYoIWYmJnZ0KGUsbikpbShlLG4sdSxvKTtlbHNle2lmKGYpe2lmKDE9PT1lLm5vZGVUeXBlJiZlLmhhc0F0dHJpYnV0ZShcInNlcnZlci1yZW5kZXJlZFwiKSYmKGUucmVtb3ZlQXR0cmlidXRlKFwic2VydmVyLXJlbmRlcmVkXCIpLHI9ITApLHImJnkoZSxuLHUpKXJldHVybiBnKG4sdSwhMCksZTtlPXQoZSl9aWYoYT1lLmVsbSxjPXgucGFyZW50Tm9kZShhKSxpKG4sdSksbi5wYXJlbnQmJihuLnBhcmVudC5lbG09bi5lbG0scyhuKSkpZm9yKHZhciB2PTA7djwkLmNyZWF0ZS5sZW5ndGg7Kyt2KSQuY3JlYXRlW3ZdKG9vLG4ucGFyZW50KTtudWxsIT09Yz8oeC5pbnNlcnRCZWZvcmUoYyxuLmVsbSx4Lm5leHRTaWJsaW5nKGEpKSxwKGMsW2VdLDAsMCkpOnB0KGUudGFnKSYmZChlKX19ZWxzZSBsPSEwLGkobix1KTtyZXR1cm4gZyhuLHUsbCksbi5lbG19fWZ1bmN0aW9uIGd0KGUsdCl7aWYoZS5kYXRhLmRpcmVjdGl2ZXN8fHQuZGF0YS5kaXJlY3RpdmVzKXt2YXIgbixyLGksbz1lPT09b28sYT15dChlLmRhdGEuZGlyZWN0aXZlcyxlLmNvbnRleHQpLHM9eXQodC5kYXRhLmRpcmVjdGl2ZXMsdC5jb250ZXh0KSxjPVtdLGw9W107Zm9yKG4gaW4gcylyPWFbbl0saT1zW25dLHI/KGkub2xkVmFsdWU9ci52YWx1ZSxidChpLFwidXBkYXRlXCIsdCxlKSxpLmRlZiYmaS5kZWYuY29tcG9uZW50VXBkYXRlZCYmbC5wdXNoKGkpKTooYnQoaSxcImJpbmRcIix0LGUpLGkuZGVmJiZpLmRlZi5pbnNlcnRlZCYmYy5wdXNoKGkpKTtpZihjLmxlbmd0aCl7dmFyIHU9ZnVuY3Rpb24oKXtjLmZvckVhY2goZnVuY3Rpb24obil7YnQobixcImluc2VydGVkXCIsdCxlKX0pfTtvP2llKHQuZGF0YS5ob29rfHwodC5kYXRhLmhvb2s9e30pLFwiaW5zZXJ0XCIsdSxcImRpci1pbnNlcnRcIik6dSgpfWlmKGwubGVuZ3RoJiZpZSh0LmRhdGEuaG9va3x8KHQuZGF0YS5ob29rPXt9KSxcInBvc3RwYXRjaFwiLGZ1bmN0aW9uKCl7bC5mb3JFYWNoKGZ1bmN0aW9uKG4pe2J0KG4sXCJjb21wb25lbnRVcGRhdGVkXCIsdCxlKX0pfSxcImRpci1wb3N0cGF0Y2hcIiksIW8pZm9yKG4gaW4gYSlzW25dfHxidChhW25dLFwidW5iaW5kXCIsZSl9fWZ1bmN0aW9uIHl0KGUsdCl7dmFyIG49T2JqZWN0LmNyZWF0ZShudWxsKTtpZighZSlyZXR1cm4gbjt2YXIgcixpO2ZvcihyPTA7cjxlLmxlbmd0aDtyKyspaT1lW3JdLGkubW9kaWZpZXJzfHwoaS5tb2RpZmllcnM9Y28pLG5bX3QoaSldPWksaS5kZWY9UCh0LiRvcHRpb25zLFwiZGlyZWN0aXZlc1wiLGkubmFtZSwhMCk7cmV0dXJuIG59ZnVuY3Rpb24gX3QoZSl7cmV0dXJuIGUucmF3TmFtZXx8ZS5uYW1lK1wiLlwiK09iamVjdC5rZXlzKGUubW9kaWZpZXJzfHx7fSkuam9pbihcIi5cIil9ZnVuY3Rpb24gYnQoZSx0LG4scil7dmFyIGk9ZS5kZWYmJmUuZGVmW3RdO2kmJmkobi5lbG0sZSxuLHIpfWZ1bmN0aW9uICR0KGUsdCl7aWYoZS5kYXRhLmF0dHJzfHx0LmRhdGEuYXR0cnMpe3ZhciBuLHIsaSxvPXQuZWxtLGE9ZS5kYXRhLmF0dHJzfHx7fSxzPXQuZGF0YS5hdHRyc3x8e307cy5fX29iX18mJihzPXQuZGF0YS5hdHRycz1sKHt9LHMpKTtmb3IobiBpbiBzKXI9c1tuXSxpPWFbbl0saSE9PXImJnd0KG8sbixyKTtmb3IobiBpbiBhKW51bGw9PXNbbl0mJihKaShuKT9vLnJlbW92ZUF0dHJpYnV0ZU5TKHppLEtpKG4pKTpIaShuKXx8by5yZW1vdmVBdHRyaWJ1dGUobikpfX1mdW5jdGlvbiB3dChlLHQsbil7VmkodCk/cWkobik/ZS5yZW1vdmVBdHRyaWJ1dGUodCk6ZS5zZXRBdHRyaWJ1dGUodCx0KTpIaSh0KT9lLnNldEF0dHJpYnV0ZSh0LHFpKG4pfHxcImZhbHNlXCI9PT1uP1wiZmFsc2VcIjpcInRydWVcIik6SmkodCk/cWkobik/ZS5yZW1vdmVBdHRyaWJ1dGVOUyh6aSxLaSh0KSk6ZS5zZXRBdHRyaWJ1dGVOUyh6aSx0LG4pOnFpKG4pP2UucmVtb3ZlQXR0cmlidXRlKHQpOmUuc2V0QXR0cmlidXRlKHQsbil9ZnVuY3Rpb24geHQoZSx0KXt2YXIgbj10LmVsbSxyPXQuZGF0YSxpPWUuZGF0YTtpZihyLnN0YXRpY0NsYXNzfHxyLmNsYXNzfHxpJiYoaS5zdGF0aWNDbGFzc3x8aS5jbGFzcykpe3ZhciBvPXplKHQpLGE9bi5fdHJhbnNpdGlvbkNsYXNzZXM7YSYmKG89cWUobyxXZShhKSkpLG8hPT1uLl9wcmV2Q2xhc3MmJihuLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsbyksbi5fcHJldkNsYXNzPW8pfX1mdW5jdGlvbiBDdChlLHQpe2lmKGUuZGF0YS5vbnx8dC5kYXRhLm9uKXt2YXIgbj10LmRhdGEub258fHt9LHI9ZS5kYXRhLm9ufHx7fSxpPXQuZWxtLl92X2FkZHx8KHQuZWxtLl92X2FkZD1mdW5jdGlvbihlLG4scil7dC5lbG0uYWRkRXZlbnRMaXN0ZW5lcihlLG4scil9KSxvPXQuZWxtLl92X3JlbW92ZXx8KHQuZWxtLl92X3JlbW92ZT1mdW5jdGlvbihlLG4pe3QuZWxtLnJlbW92ZUV2ZW50TGlzdGVuZXIoZSxuKX0pO29lKG4scixpLG8sdC5jb250ZXh0KX19ZnVuY3Rpb24ga3QoZSx0KXtpZihlLmRhdGEuZG9tUHJvcHN8fHQuZGF0YS5kb21Qcm9wcyl7dmFyIG4scixpPXQuZWxtLG89ZS5kYXRhLmRvbVByb3BzfHx7fSxhPXQuZGF0YS5kb21Qcm9wc3x8e307YS5fX29iX18mJihhPXQuZGF0YS5kb21Qcm9wcz1sKHt9LGEpKTtmb3IobiBpbiBvKW51bGw9PWFbbl0mJihpW25dPVwiXCIpO2ZvcihuIGluIGEpaWYocj1hW25dLFwidGV4dENvbnRlbnRcIiE9PW4mJlwiaW5uZXJIVE1MXCIhPT1ufHwodC5jaGlsZHJlbiYmKHQuY2hpbGRyZW4ubGVuZ3RoPTApLHIhPT1vW25dKSlpZihcInZhbHVlXCI9PT1uKXtpLl92YWx1ZT1yO3ZhciBzPW51bGw9PXI/XCJcIjpTdHJpbmcocik7aS52YWx1ZT09PXN8fGkuY29tcG9zaW5nfHwoaS52YWx1ZT1zKX1lbHNlIGlbbl09cn19ZnVuY3Rpb24gQXQoZSl7dmFyIHQ9T3QoZS5zdHlsZSk7cmV0dXJuIGUuc3RhdGljU3R5bGU/bChlLnN0YXRpY1N0eWxlLHQpOnR9ZnVuY3Rpb24gT3QoZSl7cmV0dXJuIEFycmF5LmlzQXJyYXkoZSk/ZChlKTpcInN0cmluZ1wiPT10eXBlb2YgZT9obyhlKTplfWZ1bmN0aW9uIFN0KGUsdCl7dmFyIG4scj17fTtpZih0KWZvcih2YXIgaT1lO2kuY2hpbGQ7KWk9aS5jaGlsZC5fdm5vZGUsaS5kYXRhJiYobj1BdChpLmRhdGEpKSYmbChyLG4pOyhuPUF0KGUuZGF0YSkpJiZsKHIsbik7Zm9yKHZhciBvPWU7bz1vLnBhcmVudDspby5kYXRhJiYobj1BdChvLmRhdGEpKSYmbChyLG4pO3JldHVybiByfWZ1bmN0aW9uIFR0KGUsdCl7dmFyIG49dC5kYXRhLHI9ZS5kYXRhO2lmKG4uc3RhdGljU3R5bGV8fG4uc3R5bGV8fHIuc3RhdGljU3R5bGV8fHIuc3R5bGUpe3ZhciBpLG8sYT10LmVsbSxzPWUuZGF0YS5zdGF0aWNTdHlsZSxjPWUuZGF0YS5zdHlsZXx8e30sdT1zfHxjLGY9T3QodC5kYXRhLnN0eWxlKXx8e307dC5kYXRhLnN0eWxlPWYuX19vYl9fP2woe30sZik6Zjt2YXIgZD1TdCh0LCEwKTtmb3IobyBpbiB1KW51bGw9PWRbb10mJmdvKGEsbyxcIlwiKTtmb3IobyBpbiBkKWk9ZFtvXSxpIT09dVtvXSYmZ28oYSxvLG51bGw9PWk/XCJcIjppKX19ZnVuY3Rpb24ganQoZSx0KXtpZih0JiZ0LnRyaW0oKSlpZihlLmNsYXNzTGlzdCl0LmluZGV4T2YoXCIgXCIpPi0xP3Quc3BsaXQoL1xccysvKS5mb3JFYWNoKGZ1bmN0aW9uKHQpe3JldHVybiBlLmNsYXNzTGlzdC5hZGQodCl9KTplLmNsYXNzTGlzdC5hZGQodCk7ZWxzZXt2YXIgbj1cIiBcIitlLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpK1wiIFwiO24uaW5kZXhPZihcIiBcIit0K1wiIFwiKTwwJiZlLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsKG4rdCkudHJpbSgpKX19ZnVuY3Rpb24gRXQoZSx0KXtpZih0JiZ0LnRyaW0oKSlpZihlLmNsYXNzTGlzdCl0LmluZGV4T2YoXCIgXCIpPi0xP3Quc3BsaXQoL1xccysvKS5mb3JFYWNoKGZ1bmN0aW9uKHQpe3JldHVybiBlLmNsYXNzTGlzdC5yZW1vdmUodCl9KTplLmNsYXNzTGlzdC5yZW1vdmUodCk7ZWxzZXtmb3IodmFyIG49XCIgXCIrZS5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKStcIiBcIixyPVwiIFwiK3QrXCIgXCI7bi5pbmRleE9mKHIpPj0wOyluPW4ucmVwbGFjZShyLFwiIFwiKTtlLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsbi50cmltKCkpfX1mdW5jdGlvbiBOdChlKXtTbyhmdW5jdGlvbigpe1NvKGUpfSl9ZnVuY3Rpb24gTHQoZSx0KXsoZS5fdHJhbnNpdGlvbkNsYXNzZXN8fChlLl90cmFuc2l0aW9uQ2xhc3Nlcz1bXSkpLnB1c2godCksanQoZSx0KX1mdW5jdGlvbiBEdChlLHQpe2UuX3RyYW5zaXRpb25DbGFzc2VzJiZyKGUuX3RyYW5zaXRpb25DbGFzc2VzLHQpLEV0KGUsdCl9ZnVuY3Rpb24gTXQoZSx0LG4pe3ZhciByPVB0KGUsdCksaT1yLnR5cGUsbz1yLnRpbWVvdXQsYT1yLnByb3BDb3VudDtpZighaSlyZXR1cm4gbigpO3ZhciBzPWk9PT13bz9rbzpPbyxjPTAsbD1mdW5jdGlvbigpe2UucmVtb3ZlRXZlbnRMaXN0ZW5lcihzLHUpLG4oKX0sdT1mdW5jdGlvbih0KXt0LnRhcmdldD09PWUmJisrYz49YSYmbCgpfTtzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7YzxhJiZsKCl9LG8rMSksZS5hZGRFdmVudExpc3RlbmVyKHMsdSl9ZnVuY3Rpb24gUHQoZSx0KXt2YXIgbixyPXdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGUpLGk9cltDbytcIkRlbGF5XCJdLnNwbGl0KFwiLCBcIiksbz1yW0NvK1wiRHVyYXRpb25cIl0uc3BsaXQoXCIsIFwiKSxhPVJ0KGksbykscz1yW0FvK1wiRGVsYXlcIl0uc3BsaXQoXCIsIFwiKSxjPXJbQW8rXCJEdXJhdGlvblwiXS5zcGxpdChcIiwgXCIpLGw9UnQocyxjKSx1PTAsZj0wO3Q9PT13bz9hPjAmJihuPXdvLHU9YSxmPW8ubGVuZ3RoKTp0PT09eG8/bD4wJiYobj14byx1PWwsZj1jLmxlbmd0aCk6KHU9TWF0aC5tYXgoYSxsKSxuPXU+MD9hPmw/d286eG86bnVsbCxmPW4/bj09PXdvP28ubGVuZ3RoOmMubGVuZ3RoOjApO3ZhciBkPW49PT13byYmVG8udGVzdChyW0NvK1wiUHJvcGVydHlcIl0pO3JldHVybnt0eXBlOm4sdGltZW91dDp1LHByb3BDb3VudDpmLGhhc1RyYW5zZm9ybTpkfX1mdW5jdGlvbiBSdChlLHQpe2Zvcig7ZS5sZW5ndGg8dC5sZW5ndGg7KWU9ZS5jb25jYXQoZSk7cmV0dXJuIE1hdGgubWF4LmFwcGx5KG51bGwsdC5tYXAoZnVuY3Rpb24odCxuKXtyZXR1cm4gSXQodCkrSXQoZVtuXSl9KSl9ZnVuY3Rpb24gSXQoZSl7cmV0dXJuIDFlMypOdW1iZXIoZS5zbGljZSgwLC0xKSl9ZnVuY3Rpb24gRnQoZSl7dmFyIHQ9ZS5lbG07dC5fbGVhdmVDYiYmKHQuX2xlYXZlQ2IuY2FuY2VsbGVkPSEwLHQuX2xlYXZlQ2IoKSk7dmFyIG49VXQoZS5kYXRhLnRyYW5zaXRpb24pO2lmKG4mJiF0Ll9lbnRlckNiJiYxPT09dC5ub2RlVHlwZSl7dmFyIHI9bi5jc3MsaT1uLnR5cGUsbz1uLmVudGVyQ2xhc3MsYT1uLmVudGVyQWN0aXZlQ2xhc3Mscz1uLmFwcGVhckNsYXNzLGM9bi5hcHBlYXJBY3RpdmVDbGFzcyxsPW4uYmVmb3JlRW50ZXIsdT1uLmVudGVyLGY9bi5hZnRlckVudGVyLGQ9bi5lbnRlckNhbmNlbGxlZCxwPW4uYmVmb3JlQXBwZWFyLHY9bi5hcHBlYXIsaD1uLmFmdGVyQXBwZWFyLG09bi5hcHBlYXJDYW5jZWxsZWQsZz1MaS4kdm5vZGUseT1nJiZnLnBhcmVudD9nLnBhcmVudC5jb250ZXh0OkxpLF89IXkuX2lzTW91bnRlZHx8IWUuaXNSb290SW5zZXJ0O2lmKCFffHx2fHxcIlwiPT09dil7dmFyIGI9Xz9zOm8sJD1fP2M6YSx3PV8/cHx8bDpsLHg9XyYmXCJmdW5jdGlvblwiPT10eXBlb2Ygdj92OnUsQz1fP2h8fGY6ZixrPV8/bXx8ZDpkLEE9ciE9PSExJiYhdGksTz14JiYoeC5fbGVuZ3RofHx4Lmxlbmd0aCk+MSxTPXQuX2VudGVyQ2I9SHQoZnVuY3Rpb24oKXtBJiZEdCh0LCQpLFMuY2FuY2VsbGVkPyhBJiZEdCh0LGIpLGsmJmsodCkpOkMmJkModCksdC5fZW50ZXJDYj1udWxsfSk7ZS5kYXRhLnNob3d8fGllKGUuZGF0YS5ob29rfHwoZS5kYXRhLmhvb2s9e30pLFwiaW5zZXJ0XCIsZnVuY3Rpb24oKXt2YXIgbj10LnBhcmVudE5vZGUscj1uJiZuLl9wZW5kaW5nJiZuLl9wZW5kaW5nW2Uua2V5XTtyJiZyLnRhZz09PWUudGFnJiZyLmVsbS5fbGVhdmVDYiYmci5lbG0uX2xlYXZlQ2IoKSx4JiZ4KHQsUyl9LFwidHJhbnNpdGlvbi1pbnNlcnRcIiksdyYmdyh0KSxBJiYoTHQodCxiKSxMdCh0LCQpLE50KGZ1bmN0aW9uKCl7RHQodCxiKSxTLmNhbmNlbGxlZHx8T3x8TXQodCxpLFMpfSkpLGUuZGF0YS5zaG93JiZ4JiZ4KHQsUyksQXx8T3x8UygpfX19ZnVuY3Rpb24gQnQoZSx0KXtmdW5jdGlvbiBuKCl7bS5jYW5jZWxsZWR8fChlLmRhdGEuc2hvd3x8KChyLnBhcmVudE5vZGUuX3BlbmRpbmd8fChyLnBhcmVudE5vZGUuX3BlbmRpbmc9e30pKVtlLmtleV09ZSksbCYmbChyKSx2JiYoTHQocixzKSxMdChyLGMpLE50KGZ1bmN0aW9uKCl7RHQocixzKSxtLmNhbmNlbGxlZHx8aHx8TXQocixhLG0pfSkpLHUmJnUocixtKSx2fHxofHxtKCkpfXZhciByPWUuZWxtO3IuX2VudGVyQ2ImJihyLl9lbnRlckNiLmNhbmNlbGxlZD0hMCxyLl9lbnRlckNiKCkpO3ZhciBpPVV0KGUuZGF0YS50cmFuc2l0aW9uKTtpZighaSlyZXR1cm4gdCgpO2lmKCFyLl9sZWF2ZUNiJiYxPT09ci5ub2RlVHlwZSl7dmFyIG89aS5jc3MsYT1pLnR5cGUscz1pLmxlYXZlQ2xhc3MsYz1pLmxlYXZlQWN0aXZlQ2xhc3MsbD1pLmJlZm9yZUxlYXZlLHU9aS5sZWF2ZSxmPWkuYWZ0ZXJMZWF2ZSxkPWkubGVhdmVDYW5jZWxsZWQscD1pLmRlbGF5TGVhdmUsdj1vIT09ITEmJiF0aSxoPXUmJih1Ll9sZW5ndGh8fHUubGVuZ3RoKT4xLG09ci5fbGVhdmVDYj1IdChmdW5jdGlvbigpe3IucGFyZW50Tm9kZSYmci5wYXJlbnROb2RlLl9wZW5kaW5nJiYoci5wYXJlbnROb2RlLl9wZW5kaW5nW2Uua2V5XT1udWxsKSx2JiZEdChyLGMpLG0uY2FuY2VsbGVkPyh2JiZEdChyLHMpLGQmJmQocikpOih0KCksZiYmZihyKSksci5fbGVhdmVDYj1udWxsfSk7cD9wKG4pOm4oKX19ZnVuY3Rpb24gVXQoZSl7aWYoZSl7aWYoXCJvYmplY3RcIj09dHlwZW9mIGUpe3ZhciB0PXt9O3JldHVybiBlLmNzcyE9PSExJiZsKHQsam8oZS5uYW1lfHxcInZcIikpLGwodCxlKSx0fXJldHVyblwic3RyaW5nXCI9PXR5cGVvZiBlP2pvKGUpOnZvaWQgMH19ZnVuY3Rpb24gSHQoZSl7dmFyIHQ9ITE7cmV0dXJuIGZ1bmN0aW9uKCl7XG50fHwodD0hMCxlKCkpfX1mdW5jdGlvbiBWdChlLHQsbil7dmFyIHI9dC52YWx1ZSxpPWUubXVsdGlwbGU7aWYoIWl8fEFycmF5LmlzQXJyYXkocikpe2Zvcih2YXIgbyxhLHM9MCxjPWUub3B0aW9ucy5sZW5ndGg7czxjO3MrKylpZihhPWUub3B0aW9uc1tzXSxpKW89bShyLEp0KGEpKT4tMSxhLnNlbGVjdGVkIT09byYmKGEuc2VsZWN0ZWQ9byk7ZWxzZSBpZihoKEp0KGEpLHIpKXJldHVybiB2b2lkKGUuc2VsZWN0ZWRJbmRleCE9PXMmJihlLnNlbGVjdGVkSW5kZXg9cykpO2l8fChlLnNlbGVjdGVkSW5kZXg9LTEpfX1mdW5jdGlvbiB6dChlLHQpe2Zvcih2YXIgbj0wLHI9dC5sZW5ndGg7bjxyO24rKylpZihoKEp0KHRbbl0pLGUpKXJldHVybiExO3JldHVybiEwfWZ1bmN0aW9uIEp0KGUpe3JldHVyblwiX3ZhbHVlXCJpbiBlP2UuX3ZhbHVlOmUudmFsdWV9ZnVuY3Rpb24gS3QoZSl7ZS50YXJnZXQuY29tcG9zaW5nPSEwfWZ1bmN0aW9uIHF0KGUpe2UudGFyZ2V0LmNvbXBvc2luZz0hMSxXdChlLnRhcmdldCxcImlucHV0XCIpfWZ1bmN0aW9uIFd0KGUsdCl7dmFyIG49ZG9jdW1lbnQuY3JlYXRlRXZlbnQoXCJIVE1MRXZlbnRzXCIpO24uaW5pdEV2ZW50KHQsITAsITApLGUuZGlzcGF0Y2hFdmVudChuKX1mdW5jdGlvbiBadChlKXtyZXR1cm4hZS5jaGlsZHx8ZS5kYXRhJiZlLmRhdGEudHJhbnNpdGlvbj9lOlp0KGUuY2hpbGQuX3Zub2RlKX1mdW5jdGlvbiBHdChlKXt2YXIgdD1lJiZlLmNvbXBvbmVudE9wdGlvbnM7cmV0dXJuIHQmJnQuQ3Rvci5vcHRpb25zLmFic3RyYWN0P0d0KGZlKHQuY2hpbGRyZW4pKTplfWZ1bmN0aW9uIFl0KGUpe3ZhciB0PXt9LG49ZS4kb3B0aW9ucztmb3IodmFyIHIgaW4gbi5wcm9wc0RhdGEpdFtyXT1lW3JdO3ZhciBpPW4uX3BhcmVudExpc3RlbmVycztmb3IodmFyIG8gaW4gaSl0W1ZyKG8pXT1pW29dLmZuO3JldHVybiB0fWZ1bmN0aW9uIFF0KGUsdCl7cmV0dXJuL1xcZC1rZWVwLWFsaXZlJC8udGVzdCh0LnRhZyk/ZShcImtlZXAtYWxpdmVcIik6bnVsbH1mdW5jdGlvbiBYdChlKXtmb3IoO2U9ZS5wYXJlbnQ7KWlmKGUuZGF0YS50cmFuc2l0aW9uKXJldHVybiEwfWZ1bmN0aW9uIGVuKGUpe2UuZWxtLl9tb3ZlQ2ImJmUuZWxtLl9tb3ZlQ2IoKSxlLmVsbS5fZW50ZXJDYiYmZS5lbG0uX2VudGVyQ2IoKX1mdW5jdGlvbiB0bihlKXtlLmRhdGEubmV3UG9zPWUuZWxtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpfWZ1bmN0aW9uIG5uKGUpe3ZhciB0PWUuZGF0YS5wb3Msbj1lLmRhdGEubmV3UG9zLHI9dC5sZWZ0LW4ubGVmdCxpPXQudG9wLW4udG9wO2lmKHJ8fGkpe2UuZGF0YS5tb3ZlZD0hMDt2YXIgbz1lLmVsbS5zdHlsZTtvLnRyYW5zZm9ybT1vLldlYmtpdFRyYW5zZm9ybT1cInRyYW5zbGF0ZShcIityK1wicHgsXCIraStcInB4KVwiLG8udHJhbnNpdGlvbkR1cmF0aW9uPVwiMHNcIn19ZnVuY3Rpb24gcm4oZSx0KXt2YXIgbj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO3JldHVybiBuLmlubmVySFRNTD0nPGRpdiBhPVwiJytlKydcIj4nLG4uaW5uZXJIVE1MLmluZGV4T2YodCk+MH1mdW5jdGlvbiBvbihlKXtyZXR1cm4gVm89Vm98fGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksVm8uaW5uZXJIVE1MPWUsVm8udGV4dENvbnRlbnR9ZnVuY3Rpb24gYW4oZSx0KXtyZXR1cm4gdCYmKGU9ZS5yZXBsYWNlKERhLFwiXFxuXCIpKSxlLnJlcGxhY2UoTmEsXCI8XCIpLnJlcGxhY2UoTGEsXCI+XCIpLnJlcGxhY2UoTWEsXCImXCIpLnJlcGxhY2UoUGEsJ1wiJyl9ZnVuY3Rpb24gc24oZSx0KXtmdW5jdGlvbiBuKHQpe2YrPXQsZT1lLnN1YnN0cmluZyh0KX1mdW5jdGlvbiByKCl7dmFyIHQ9ZS5tYXRjaChZbyk7aWYodCl7dmFyIHI9e3RhZ05hbWU6dFsxXSxhdHRyczpbXSxzdGFydDpmfTtuKHRbMF0ubGVuZ3RoKTtmb3IodmFyIGksbzshKGk9ZS5tYXRjaChRbykpJiYobz1lLm1hdGNoKFdvKSk7KW4ob1swXS5sZW5ndGgpLHIuYXR0cnMucHVzaChvKTtpZihpKXJldHVybiByLnVuYXJ5U2xhc2g9aVsxXSxuKGlbMF0ubGVuZ3RoKSxyLmVuZD1mLHJ9fWZ1bmN0aW9uIGkoZSl7dmFyIG49ZS50YWdOYW1lLHI9ZS51bmFyeVNsYXNoO2wmJihcInBcIj09PXMmJlFpKG4pJiZvKFwiXCIscyksWWkobikmJnM9PT1uJiZvKFwiXCIsbikpO2Zvcih2YXIgaT11KG4pfHxcImh0bWxcIj09PW4mJlwiaGVhZFwiPT09c3x8ISFyLGE9ZS5hdHRycy5sZW5ndGgsZj1uZXcgQXJyYXkoYSksZD0wO2Q8YTtkKyspe3ZhciBwPWUuYXR0cnNbZF07cmEmJnBbMF0uaW5kZXhPZignXCJcIicpPT09LTEmJihcIlwiPT09cFszXSYmZGVsZXRlIHBbM10sXCJcIj09PXBbNF0mJmRlbGV0ZSBwWzRdLFwiXCI9PT1wWzVdJiZkZWxldGUgcFs1XSk7dmFyIHY9cFszXXx8cFs0XXx8cFs1XXx8XCJcIjtmW2RdPXtuYW1lOnBbMV0sdmFsdWU6YW4odix0LnNob3VsZERlY29kZU5ld2xpbmVzKX19aXx8KGMucHVzaCh7dGFnOm4sYXR0cnM6Zn0pLHM9bixyPVwiXCIpLHQuc3RhcnQmJnQuc3RhcnQobixmLGksZS5zdGFydCxlLmVuZCl9ZnVuY3Rpb24gbyhlLG4scixpKXt2YXIgbztpZihudWxsPT1yJiYocj1mKSxudWxsPT1pJiYoaT1mKSxuKXt2YXIgYT1uLnRvTG93ZXJDYXNlKCk7Zm9yKG89Yy5sZW5ndGgtMTtvPj0wJiZjW29dLnRhZy50b0xvd2VyQ2FzZSgpIT09YTtvLS0pO31lbHNlIG89MDtpZihvPj0wKXtmb3IodmFyIGw9Yy5sZW5ndGgtMTtsPj1vO2wtLSl0LmVuZCYmdC5lbmQoY1tsXS50YWcscixpKTtjLmxlbmd0aD1vLHM9byYmY1tvLTFdLnRhZ31lbHNlXCJiclwiPT09bi50b0xvd2VyQ2FzZSgpP3Quc3RhcnQmJnQuc3RhcnQobixbXSwhMCxyLGkpOlwicFwiPT09bi50b0xvd2VyQ2FzZSgpJiYodC5zdGFydCYmdC5zdGFydChuLFtdLCExLHIsaSksdC5lbmQmJnQuZW5kKG4scixpKSl9Zm9yKHZhciBhLHMsYz1bXSxsPXQuZXhwZWN0SFRNTCx1PXQuaXNVbmFyeVRhZ3x8WnIsZj0wO2U7KXtpZihhPWUscyYmamEocyx0LnNmYyxjKSl7dmFyIGQ9cy50b0xvd2VyQ2FzZSgpLHA9RWFbZF18fChFYVtkXT1uZXcgUmVnRXhwKFwiKFtcXFxcc1xcXFxTXSo/KSg8L1wiK2QrXCJbXj5dKj4pXCIsXCJpXCIpKSx2PTAsaD1lLnJlcGxhY2UocCxmdW5jdGlvbihlLG4scil7cmV0dXJuIHY9ci5sZW5ndGgsXCJzY3JpcHRcIiE9PWQmJlwic3R5bGVcIiE9PWQmJlwibm9zY3JpcHRcIiE9PWQmJihuPW4ucmVwbGFjZSgvPCEtLShbXFxzXFxTXSo/KS0tPi9nLFwiJDFcIikucmVwbGFjZSgvPCFcXFtDREFUQVxcWyhbXFxzXFxTXSo/KV1dPi9nLFwiJDFcIikpLHQuY2hhcnMmJnQuY2hhcnMobiksXCJcIn0pO2YrPWUubGVuZ3RoLWgubGVuZ3RoLGU9aCxvKFwiPC9cIitkK1wiPlwiLGQsZi12LGYpfWVsc2V7dmFyIG09ZS5pbmRleE9mKFwiPFwiKTtpZigwPT09bSl7aWYodGEudGVzdChlKSl7dmFyIGc9ZS5pbmRleE9mKFwiLS0+XCIpO2lmKGc+PTApe24oZyszKTtjb250aW51ZX19aWYobmEudGVzdChlKSl7dmFyIHk9ZS5pbmRleE9mKFwiXT5cIik7aWYoeT49MCl7bih5KzIpO2NvbnRpbnVlfX12YXIgXz1lLm1hdGNoKGVhKTtpZihfKXtuKF9bMF0ubGVuZ3RoKTtjb250aW51ZX12YXIgYj1lLm1hdGNoKFhvKTtpZihiKXt2YXIgJD1mO24oYlswXS5sZW5ndGgpLG8oYlswXSxiWzFdLCQsZik7Y29udGludWV9dmFyIHc9cigpO2lmKHcpe2kodyk7Y29udGludWV9fXZhciB4PXZvaWQgMCxDPXZvaWQgMCxrPXZvaWQgMDtpZihtPjApe2ZvcihDPWUuc2xpY2UobSk7IShYby50ZXN0KEMpfHxZby50ZXN0KEMpfHx0YS50ZXN0KEMpfHxuYS50ZXN0KEMpfHwoaz1DLmluZGV4T2YoXCI8XCIsMSksazwwKSk7KW0rPWssQz1lLnNsaWNlKG0pO3g9ZS5zdWJzdHJpbmcoMCxtKSxuKG0pfW08MCYmKHg9ZSxlPVwiXCIpLHQuY2hhcnMmJngmJnQuY2hhcnMoeCl9aWYoZT09PWEmJnQuY2hhcnMpe3QuY2hhcnMoZSk7YnJlYWt9fW8oKX1mdW5jdGlvbiBjbihlKXtmdW5jdGlvbiB0KCl7KGF8fChhPVtdKSkucHVzaChlLnNsaWNlKHYsaSkudHJpbSgpKSx2PWkrMX12YXIgbixyLGksbyxhLHM9ITEsYz0hMSxsPSExLHU9ITEsZj0wLGQ9MCxwPTAsdj0wO2ZvcihpPTA7aTxlLmxlbmd0aDtpKyspaWYocj1uLG49ZS5jaGFyQ29kZUF0KGkpLHMpMzk9PT1uJiY5MiE9PXImJihzPSExKTtlbHNlIGlmKGMpMzQ9PT1uJiY5MiE9PXImJihjPSExKTtlbHNlIGlmKGwpOTY9PT1uJiY5MiE9PXImJihsPSExKTtlbHNlIGlmKHUpNDc9PT1uJiY5MiE9PXImJih1PSExKTtlbHNlIGlmKDEyNCE9PW58fDEyND09PWUuY2hhckNvZGVBdChpKzEpfHwxMjQ9PT1lLmNoYXJDb2RlQXQoaS0xKXx8Znx8ZHx8cClzd2l0Y2gobil7Y2FzZSAzNDpjPSEwO2JyZWFrO2Nhc2UgMzk6cz0hMDticmVhaztjYXNlIDk2Omw9ITA7YnJlYWs7Y2FzZSA0Nzp1PSEwO2JyZWFrO2Nhc2UgNDA6cCsrO2JyZWFrO2Nhc2UgNDE6cC0tO2JyZWFrO2Nhc2UgOTE6ZCsrO2JyZWFrO2Nhc2UgOTM6ZC0tO2JyZWFrO2Nhc2UgMTIzOmYrKzticmVhaztjYXNlIDEyNTpmLS19ZWxzZSB2b2lkIDA9PT1vPyh2PWkrMSxvPWUuc2xpY2UoMCxpKS50cmltKCkpOnQoKTtpZih2b2lkIDA9PT1vP289ZS5zbGljZSgwLGkpLnRyaW0oKTowIT09diYmdCgpLGEpZm9yKGk9MDtpPGEubGVuZ3RoO2krKylvPWxuKG8sYVtpXSk7cmV0dXJuIG99ZnVuY3Rpb24gbG4oZSx0KXt2YXIgbj10LmluZGV4T2YoXCIoXCIpO2lmKG48MClyZXR1cm4nX2YoXCInK3QrJ1wiKSgnK2UrXCIpXCI7dmFyIHI9dC5zbGljZSgwLG4pLGk9dC5zbGljZShuKzEpO3JldHVybidfZihcIicrcisnXCIpKCcrZStcIixcIitpfWZ1bmN0aW9uIHVuKGUsdCl7dmFyIG49dD9GYSh0KTpSYTtpZihuLnRlc3QoZSkpe2Zvcih2YXIgcixpLG89W10sYT1uLmxhc3RJbmRleD0wO3I9bi5leGVjKGUpOyl7aT1yLmluZGV4LGk+YSYmby5wdXNoKEpTT04uc3RyaW5naWZ5KGUuc2xpY2UoYSxpKSkpO3ZhciBzPWNuKHJbMV0udHJpbSgpKTtvLnB1c2goXCJfcyhcIitzK1wiKVwiKSxhPWkrclswXS5sZW5ndGh9cmV0dXJuIGE8ZS5sZW5ndGgmJm8ucHVzaChKU09OLnN0cmluZ2lmeShlLnNsaWNlKGEpKSksby5qb2luKFwiK1wiKX19ZnVuY3Rpb24gZm4oZSl7Y29uc29sZS5lcnJvcihcIltWdWUgcGFyc2VyXTogXCIrZSl9ZnVuY3Rpb24gZG4oZSx0KXtyZXR1cm4gZT9lLm1hcChmdW5jdGlvbihlKXtyZXR1cm4gZVt0XX0pLmZpbHRlcihmdW5jdGlvbihlKXtyZXR1cm4gZX0pOltdfWZ1bmN0aW9uIHBuKGUsdCxuKXsoZS5wcm9wc3x8KGUucHJvcHM9W10pKS5wdXNoKHtuYW1lOnQsdmFsdWU6bn0pfWZ1bmN0aW9uIHZuKGUsdCxuKXsoZS5hdHRyc3x8KGUuYXR0cnM9W10pKS5wdXNoKHtuYW1lOnQsdmFsdWU6bn0pfWZ1bmN0aW9uIGhuKGUsdCxuLHIsaSxvKXsoZS5kaXJlY3RpdmVzfHwoZS5kaXJlY3RpdmVzPVtdKSkucHVzaCh7bmFtZTp0LHJhd05hbWU6bix2YWx1ZTpyLGFyZzppLG1vZGlmaWVyczpvfSl9ZnVuY3Rpb24gbW4oZSx0LG4scixpKXtyJiZyLmNhcHR1cmUmJihkZWxldGUgci5jYXB0dXJlLHQ9XCIhXCIrdCk7dmFyIG87ciYmci5uYXRpdmU/KGRlbGV0ZSByLm5hdGl2ZSxvPWUubmF0aXZlRXZlbnRzfHwoZS5uYXRpdmVFdmVudHM9e30pKTpvPWUuZXZlbnRzfHwoZS5ldmVudHM9e30pO3ZhciBhPXt2YWx1ZTpuLG1vZGlmaWVyczpyfSxzPW9bdF07QXJyYXkuaXNBcnJheShzKT9pP3MudW5zaGlmdChhKTpzLnB1c2goYSk6cz9vW3RdPWk/W2Esc106W3MsYV06b1t0XT1hfWZ1bmN0aW9uIGduKGUsdCxuKXt2YXIgcj15bihlLFwiOlwiK3QpfHx5bihlLFwidi1iaW5kOlwiK3QpO2lmKG51bGwhPXIpcmV0dXJuIGNuKHIpO2lmKG4hPT0hMSl7dmFyIGk9eW4oZSx0KTtpZihudWxsIT1pKXJldHVybiBKU09OLnN0cmluZ2lmeShpKX19ZnVuY3Rpb24geW4oZSx0KXt2YXIgbjtpZihudWxsIT0obj1lLmF0dHJzTWFwW3RdKSlmb3IodmFyIHI9ZS5hdHRyc0xpc3QsaT0wLG89ci5sZW5ndGg7aTxvO2krKylpZihyW2ldLm5hbWU9PT10KXtyLnNwbGljZShpLDEpO2JyZWFrfXJldHVybiBufWZ1bmN0aW9uIF9uKGUpe2lmKG9hPWUsaWE9b2EubGVuZ3RoLHNhPWNhPWxhPTAsZS5pbmRleE9mKFwiW1wiKTwwfHxlLmxhc3RJbmRleE9mKFwiXVwiKTxpYS0xKXJldHVybntleHA6ZSxpZHg6bnVsbH07Zm9yKDshJG4oKTspYWE9Ym4oKSx3bihhYSk/Q24oYWEpOjkxPT09YWEmJnhuKGFhKTtyZXR1cm57ZXhwOmUuc3Vic3RyaW5nKDAsY2EpLGlkeDplLnN1YnN0cmluZyhjYSsxLGxhKX19ZnVuY3Rpb24gYm4oKXtyZXR1cm4gb2EuY2hhckNvZGVBdCgrK3NhKX1mdW5jdGlvbiAkbigpe3JldHVybiBzYT49aWF9ZnVuY3Rpb24gd24oZSl7cmV0dXJuIDM0PT09ZXx8Mzk9PT1lfWZ1bmN0aW9uIHhuKGUpe3ZhciB0PTE7Zm9yKGNhPXNhOyEkbigpOylpZihlPWJuKCksd24oZSkpQ24oZSk7ZWxzZSBpZig5MT09PWUmJnQrKyw5Mz09PWUmJnQtLSwwPT09dCl7bGE9c2E7YnJlYWt9fWZ1bmN0aW9uIENuKGUpe2Zvcih2YXIgdD1lOyEkbigpJiYoZT1ibigpLGUhPT10KTspO31mdW5jdGlvbiBrbihlLHQpe3VhPXQud2Fybnx8Zm4sZmE9dC5nZXRUYWdOYW1lc3BhY2V8fFpyLGRhPXQubXVzdFVzZVByb3B8fFpyLHBhPXQuaXNQcmVUYWd8fFpyLHZhPWRuKHQubW9kdWxlcyxcInByZVRyYW5zZm9ybU5vZGVcIiksaGE9ZG4odC5tb2R1bGVzLFwidHJhbnNmb3JtTm9kZVwiKSxtYT1kbih0Lm1vZHVsZXMsXCJwb3N0VHJhbnNmb3JtTm9kZVwiKSxnYT10LmRlbGltaXRlcnM7dmFyIG4scixpPVtdLG89dC5wcmVzZXJ2ZVdoaXRlc3BhY2UhPT0hMSxhPSExLHM9ITE7cmV0dXJuIHNuKGUse2V4cGVjdEhUTUw6dC5leHBlY3RIVE1MLGlzVW5hcnlUYWc6dC5pc1VuYXJ5VGFnLHNob3VsZERlY29kZU5ld2xpbmVzOnQuc2hvdWxkRGVjb2RlTmV3bGluZXMsc3RhcnQ6ZnVuY3Rpb24oZSxvLGMpe2Z1bmN0aW9uIGwoZSl7fXZhciB1PXImJnIubnN8fGZhKGUpO2VpJiZcInN2Z1wiPT09dSYmKG89Vm4obykpO3ZhciBmPXt0eXBlOjEsdGFnOmUsYXR0cnNMaXN0Om8sYXR0cnNNYXA6Qm4obykscGFyZW50OnIsY2hpbGRyZW46W119O3UmJihmLm5zPXUpLEhuKGYpJiYhb2koKSYmKGYuZm9yYmlkZGVuPSEwKTtmb3IodmFyIGQ9MDtkPHZhLmxlbmd0aDtkKyspdmFbZF0oZix0KTtpZihhfHwoQW4oZiksZi5wcmUmJihhPSEwKSkscGEoZi50YWcpJiYocz0hMCksYSlPbihmKTtlbHNle2puKGYpLEVuKGYpLERuKGYpLFNuKGYpLGYucGxhaW49IWYua2V5JiYhby5sZW5ndGgsVG4oZiksTW4oZiksUG4oZik7Zm9yKHZhciBwPTA7cDxoYS5sZW5ndGg7cCsrKWhhW3BdKGYsdCk7Um4oZil9aWYobj9pLmxlbmd0aHx8bi5pZiYmKGYuZWxzZWlmfHxmLmVsc2UpJiYobChmKSxMbihuLHtleHA6Zi5lbHNlaWYsYmxvY2s6Zn0pKToobj1mLGwobikpLHImJiFmLmZvcmJpZGRlbilpZihmLmVsc2VpZnx8Zi5lbHNlKU5uKGYscik7ZWxzZSBpZihmLnNsb3RTY29wZSl7ci5wbGFpbj0hMTt2YXIgdj1mLnNsb3RUYXJnZXR8fFwiZGVmYXVsdFwiOyhyLnNjb3BlZFNsb3RzfHwoci5zY29wZWRTbG90cz17fSkpW3ZdPWZ9ZWxzZSByLmNoaWxkcmVuLnB1c2goZiksZi5wYXJlbnQ9cjtjfHwocj1mLGkucHVzaChmKSk7Zm9yKHZhciBoPTA7aDxtYS5sZW5ndGg7aCsrKW1hW2hdKGYsdCl9LGVuZDpmdW5jdGlvbigpe3ZhciBlPWlbaS5sZW5ndGgtMV0sdD1lLmNoaWxkcmVuW2UuY2hpbGRyZW4ubGVuZ3RoLTFdO3QmJjM9PT10LnR5cGUmJlwiIFwiPT09dC50ZXh0JiZlLmNoaWxkcmVuLnBvcCgpLGkubGVuZ3RoLT0xLHI9aVtpLmxlbmd0aC0xXSxlLnByZSYmKGE9ITEpLHBhKGUudGFnKSYmKHM9ITEpfSxjaGFyczpmdW5jdGlvbihlKXtpZihyJiYoIWVpfHxcInRleHRhcmVhXCIhPT1yLnRhZ3x8ci5hdHRyc01hcC5wbGFjZWhvbGRlciE9PWUpJiYoZT1zfHxlLnRyaW0oKT9xYShlKTpvJiZyLmNoaWxkcmVuLmxlbmd0aD9cIiBcIjpcIlwiKSl7dmFyIHQ7IWEmJlwiIFwiIT09ZSYmKHQ9dW4oZSxnYSkpP3IuY2hpbGRyZW4ucHVzaCh7dHlwZToyLGV4cHJlc3Npb246dCx0ZXh0OmV9KTpyLmNoaWxkcmVuLnB1c2goe3R5cGU6Myx0ZXh0OmV9KX19fSksbn1mdW5jdGlvbiBBbihlKXtudWxsIT15bihlLFwidi1wcmVcIikmJihlLnByZT0hMCl9ZnVuY3Rpb24gT24oZSl7dmFyIHQ9ZS5hdHRyc0xpc3QubGVuZ3RoO2lmKHQpZm9yKHZhciBuPWUuYXR0cnM9bmV3IEFycmF5KHQpLHI9MDtyPHQ7cisrKW5bcl09e25hbWU6ZS5hdHRyc0xpc3Rbcl0ubmFtZSx2YWx1ZTpKU09OLnN0cmluZ2lmeShlLmF0dHJzTGlzdFtyXS52YWx1ZSl9O2Vsc2UgZS5wcmV8fChlLnBsYWluPSEwKX1mdW5jdGlvbiBTbihlKXt2YXIgdD1nbihlLFwia2V5XCIpO3QmJihlLmtleT10KX1mdW5jdGlvbiBUbihlKXt2YXIgdD1nbihlLFwicmVmXCIpO3QmJihlLnJlZj10LGUucmVmSW5Gb3I9SW4oZSkpfWZ1bmN0aW9uIGpuKGUpe3ZhciB0O2lmKHQ9eW4oZSxcInYtZm9yXCIpKXt2YXIgbj10Lm1hdGNoKFVhKTtpZighbilyZXR1cm47ZS5mb3I9blsyXS50cmltKCk7dmFyIHI9blsxXS50cmltKCksaT1yLm1hdGNoKEhhKTtpPyhlLmFsaWFzPWlbMV0udHJpbSgpLGUuaXRlcmF0b3IxPWlbMl0udHJpbSgpLGlbM10mJihlLml0ZXJhdG9yMj1pWzNdLnRyaW0oKSkpOmUuYWxpYXM9cn19ZnVuY3Rpb24gRW4oZSl7dmFyIHQ9eW4oZSxcInYtaWZcIik7aWYodCllLmlmPXQsTG4oZSx7ZXhwOnQsYmxvY2s6ZX0pO2Vsc2V7bnVsbCE9eW4oZSxcInYtZWxzZVwiKSYmKGUuZWxzZT0hMCk7dmFyIG49eW4oZSxcInYtZWxzZS1pZlwiKTtuJiYoZS5lbHNlaWY9bil9fWZ1bmN0aW9uIE5uKGUsdCl7dmFyIG49VW4odC5jaGlsZHJlbik7biYmbi5pZiYmTG4obix7ZXhwOmUuZWxzZWlmLGJsb2NrOmV9KX1mdW5jdGlvbiBMbihlLHQpe2UuY29uZGl0aW9uc3x8KGUuY29uZGl0aW9ucz1bXSksZS5jb25kaXRpb25zLnB1c2godCl9ZnVuY3Rpb24gRG4oZSl7dmFyIHQ9eW4oZSxcInYtb25jZVwiKTtudWxsIT10JiYoZS5vbmNlPSEwKX1mdW5jdGlvbiBNbihlKXtpZihcInNsb3RcIj09PWUudGFnKWUuc2xvdE5hbWU9Z24oZSxcIm5hbWVcIik7ZWxzZXt2YXIgdD1nbihlLFwic2xvdFwiKTt0JiYoZS5zbG90VGFyZ2V0PSdcIlwiJz09PXQ/J1wiZGVmYXVsdFwiJzp0KSxcInRlbXBsYXRlXCI9PT1lLnRhZyYmKGUuc2xvdFNjb3BlPXluKGUsXCJzY29wZVwiKSl9fWZ1bmN0aW9uIFBuKGUpe3ZhciB0Oyh0PWduKGUsXCJpc1wiKSkmJihlLmNvbXBvbmVudD10KSxudWxsIT15bihlLFwiaW5saW5lLXRlbXBsYXRlXCIpJiYoZS5pbmxpbmVUZW1wbGF0ZT0hMCl9ZnVuY3Rpb24gUm4oZSl7dmFyIHQsbixyLGksbyxhLHMsYyxsPWUuYXR0cnNMaXN0O2Zvcih0PTAsbj1sLmxlbmd0aDt0PG47dCsrKWlmKHI9aT1sW3RdLm5hbWUsbz1sW3RdLnZhbHVlLEJhLnRlc3QocikpaWYoZS5oYXNCaW5kaW5ncz0hMCxzPUZuKHIpLHMmJihyPXIucmVwbGFjZShLYSxcIlwiKSksVmEudGVzdChyKSlyPXIucmVwbGFjZShWYSxcIlwiKSxvPWNuKG8pLHMmJihzLnByb3AmJihjPSEwLHI9VnIociksXCJpbm5lckh0bWxcIj09PXImJihyPVwiaW5uZXJIVE1MXCIpKSxzLmNhbWVsJiYocj1WcihyKSkpLGN8fGRhKGUudGFnLHIpP3BuKGUscixvKTp2bihlLHIsbyk7ZWxzZSBpZih6YS50ZXN0KHIpKXI9ci5yZXBsYWNlKHphLFwiXCIpLG1uKGUscixvLHMpO2Vsc2V7cj1yLnJlcGxhY2UoQmEsXCJcIik7dmFyIHU9ci5tYXRjaChKYSk7dSYmKGE9dVsxXSkmJihyPXIuc2xpY2UoMCwtKGEubGVuZ3RoKzEpKSksaG4oZSxyLGksbyxhLHMpfWVsc2Ugdm4oZSxyLEpTT04uc3RyaW5naWZ5KG8pKX1mdW5jdGlvbiBJbihlKXtmb3IodmFyIHQ9ZTt0Oyl7aWYodm9pZCAwIT09dC5mb3IpcmV0dXJuITA7dD10LnBhcmVudH1yZXR1cm4hMX1mdW5jdGlvbiBGbihlKXt2YXIgdD1lLm1hdGNoKEthKTtpZih0KXt2YXIgbj17fTtyZXR1cm4gdC5mb3JFYWNoKGZ1bmN0aW9uKGUpe25bZS5zbGljZSgxKV09ITB9KSxufX1mdW5jdGlvbiBCbihlKXtmb3IodmFyIHQ9e30sbj0wLHI9ZS5sZW5ndGg7bjxyO24rKyl0W2Vbbl0ubmFtZV09ZVtuXS52YWx1ZTtyZXR1cm4gdH1mdW5jdGlvbiBVbihlKXtmb3IodmFyIHQ9ZS5sZW5ndGg7dC0tOylpZihlW3RdLnRhZylyZXR1cm4gZVt0XX1mdW5jdGlvbiBIbihlKXtyZXR1cm5cInN0eWxlXCI9PT1lLnRhZ3x8XCJzY3JpcHRcIj09PWUudGFnJiYoIWUuYXR0cnNNYXAudHlwZXx8XCJ0ZXh0L2phdmFzY3JpcHRcIj09PWUuYXR0cnNNYXAudHlwZSl9ZnVuY3Rpb24gVm4oZSl7Zm9yKHZhciB0PVtdLG49MDtuPGUubGVuZ3RoO24rKyl7dmFyIHI9ZVtuXTtXYS50ZXN0KHIubmFtZSl8fChyLm5hbWU9ci5uYW1lLnJlcGxhY2UoWmEsXCJcIiksdC5wdXNoKHIpKX1yZXR1cm4gdH1mdW5jdGlvbiB6bihlLHQpe2UmJih5YT1HYSh0LnN0YXRpY0tleXN8fFwiXCIpLF9hPXQuaXNSZXNlcnZlZFRhZ3x8ZnVuY3Rpb24oKXtyZXR1cm4hMX0sS24oZSkscW4oZSwhMSkpfWZ1bmN0aW9uIEpuKGUpe3JldHVybiBuKFwidHlwZSx0YWcsYXR0cnNMaXN0LGF0dHJzTWFwLHBsYWluLHBhcmVudCxjaGlsZHJlbixhdHRyc1wiKyhlP1wiLFwiK2U6XCJcIikpfWZ1bmN0aW9uIEtuKGUpe2lmKGUuc3RhdGljPVpuKGUpLDE9PT1lLnR5cGUpe2lmKCFfYShlLnRhZykmJlwic2xvdFwiIT09ZS50YWcmJm51bGw9PWUuYXR0cnNNYXBbXCJpbmxpbmUtdGVtcGxhdGVcIl0pcmV0dXJuO2Zvcih2YXIgdD0wLG49ZS5jaGlsZHJlbi5sZW5ndGg7dDxuO3QrKyl7dmFyIHI9ZS5jaGlsZHJlblt0XTtLbihyKSxyLnN0YXRpY3x8KGUuc3RhdGljPSExKX19fWZ1bmN0aW9uIHFuKGUsdCl7aWYoMT09PWUudHlwZSl7aWYoKGUuc3RhdGljfHxlLm9uY2UpJiYoZS5zdGF0aWNJbkZvcj10KSxlLnN0YXRpYyYmZS5jaGlsZHJlbi5sZW5ndGgmJigxIT09ZS5jaGlsZHJlbi5sZW5ndGh8fDMhPT1lLmNoaWxkcmVuWzBdLnR5cGUpKXJldHVybiB2b2lkKGUuc3RhdGljUm9vdD0hMCk7aWYoZS5zdGF0aWNSb290PSExLGUuY2hpbGRyZW4pZm9yKHZhciBuPTAscj1lLmNoaWxkcmVuLmxlbmd0aDtuPHI7bisrKXFuKGUuY2hpbGRyZW5bbl0sdHx8ISFlLmZvcik7ZS5jb25kaXRpb25zJiZXbihlLmNvbmRpdGlvbnMsdCl9fWZ1bmN0aW9uIFduKGUsdCl7Zm9yKHZhciBuPTEscj1lLmxlbmd0aDtuPHI7bisrKXFuKGVbbl0uYmxvY2ssdCl9ZnVuY3Rpb24gWm4oZSl7cmV0dXJuIDIhPT1lLnR5cGUmJigzPT09ZS50eXBlfHwhKCFlLnByZSYmKGUuaGFzQmluZGluZ3N8fGUuaWZ8fGUuZm9yfHxCcihlLnRhZyl8fCFfYShlLnRhZyl8fEduKGUpfHwhT2JqZWN0LmtleXMoZSkuZXZlcnkoeWEpKSkpfWZ1bmN0aW9uIEduKGUpe2Zvcig7ZS5wYXJlbnQ7KXtpZihlPWUucGFyZW50LFwidGVtcGxhdGVcIiE9PWUudGFnKXJldHVybiExO2lmKGUuZm9yKXJldHVybiEwfXJldHVybiExfWZ1bmN0aW9uIFluKGUsdCl7dmFyIG49dD9cIm5hdGl2ZU9uOntcIjpcIm9uOntcIjtmb3IodmFyIHIgaW4gZSluKz0nXCInK3IrJ1wiOicrUW4ocixlW3JdKStcIixcIjtyZXR1cm4gbi5zbGljZSgwLC0xKStcIn1cIn1mdW5jdGlvbiBRbihlLHQpe2lmKHQpe2lmKEFycmF5LmlzQXJyYXkodCkpcmV0dXJuXCJbXCIrdC5tYXAoZnVuY3Rpb24odCl7cmV0dXJuIFFuKGUsdCl9KS5qb2luKFwiLFwiKStcIl1cIjtpZih0Lm1vZGlmaWVycyl7dmFyIG49XCJcIixyPVtdLGk9dHMudGVzdChlKTtmb3IodmFyIG8gaW4gdC5tb2RpZmllcnMpZXNbb10/bis9ZXNbb106aSYmbnNbb10/bis9bnNbb106ci5wdXNoKG8pO3IubGVuZ3RoJiYobj1YbihyKStuKTt2YXIgYT1RYS50ZXN0KHQudmFsdWUpP3QudmFsdWUrXCIoJGV2ZW50KVwiOnQudmFsdWU7cmV0dXJuXCJmdW5jdGlvbigkZXZlbnQpe1wiK24rYStcIn1cIn1yZXR1cm4gWWEudGVzdCh0LnZhbHVlKXx8UWEudGVzdCh0LnZhbHVlKT90LnZhbHVlOlwiZnVuY3Rpb24oJGV2ZW50KXtcIit0LnZhbHVlK1wifVwifXJldHVyblwiZnVuY3Rpb24oKXt9XCJ9ZnVuY3Rpb24gWG4oZSl7dmFyIHQ9MT09PWUubGVuZ3RoP2VyKGVbMF0pOkFycmF5LnByb3RvdHlwZS5jb25jYXQuYXBwbHkoW10sZS5tYXAoZXIpKTtyZXR1cm4gQXJyYXkuaXNBcnJheSh0KT9cImlmKFwiK3QubWFwKGZ1bmN0aW9uKGUpe3JldHVyblwiJGV2ZW50LmtleUNvZGUhPT1cIitlfSkuam9pbihcIiYmXCIpK1wiKXJldHVybjtcIjpcImlmKCRldmVudC5rZXlDb2RlIT09XCIrdCtcIilyZXR1cm47XCJ9ZnVuY3Rpb24gZXIoZSl7cmV0dXJuIHBhcnNlSW50KGUsMTApfHxYYVtlXXx8XCJfayhcIitKU09OLnN0cmluZ2lmeShlKStcIilcIn1mdW5jdGlvbiB0cihlLHQpe2Uud3JhcERhdGE9ZnVuY3Rpb24obil7cmV0dXJuXCJfYihcIituK1wiLCdcIitlLnRhZytcIicsXCIrdC52YWx1ZSsodC5tb2RpZmllcnMmJnQubW9kaWZpZXJzLnByb3A/XCIsdHJ1ZVwiOlwiXCIpK1wiKVwifX1mdW5jdGlvbiBucihlLHQpe3ZhciBuPUNhLHI9Q2E9W10saT1rYTtrYT0wLEFhPXQsYmE9dC53YXJufHxmbiwkYT1kbih0Lm1vZHVsZXMsXCJ0cmFuc2Zvcm1Db2RlXCIpLHdhPWRuKHQubW9kdWxlcyxcImdlbkRhdGFcIikseGE9dC5kaXJlY3RpdmVzfHx7fTt2YXIgbz1lP3JyKGUpOidfaChcImRpdlwiKSc7cmV0dXJuIENhPW4sa2E9aSx7cmVuZGVyOlwid2l0aCh0aGlzKXtyZXR1cm4gXCIrbytcIn1cIixzdGF0aWNSZW5kZXJGbnM6cn19ZnVuY3Rpb24gcnIoZSl7aWYoZS5zdGF0aWNSb290JiYhZS5zdGF0aWNQcm9jZXNzZWQpcmV0dXJuIGlyKGUpO2lmKGUub25jZSYmIWUub25jZVByb2Nlc3NlZClyZXR1cm4gb3IoZSk7aWYoZS5mb3ImJiFlLmZvclByb2Nlc3NlZClyZXR1cm4gY3IoZSk7aWYoZS5pZiYmIWUuaWZQcm9jZXNzZWQpcmV0dXJuIGFyKGUpO2lmKFwidGVtcGxhdGVcIiE9PWUudGFnfHxlLnNsb3RUYXJnZXQpe2lmKFwic2xvdFwiPT09ZS50YWcpcmV0dXJuIGdyKGUpO3ZhciB0O2lmKGUuY29tcG9uZW50KXQ9eXIoZS5jb21wb25lbnQsZSk7ZWxzZXt2YXIgbj1lLnBsYWluP3ZvaWQgMDpscihlKSxyPWUuaW5saW5lVGVtcGxhdGU/bnVsbDp2cihlKTt0PVwiX2goJ1wiK2UudGFnK1wiJ1wiKyhuP1wiLFwiK246XCJcIikrKHI/XCIsXCIrcjpcIlwiKStcIilcIn1mb3IodmFyIGk9MDtpPCRhLmxlbmd0aDtpKyspdD0kYVtpXShlLHQpO3JldHVybiB0fXJldHVybiB2cihlKXx8XCJ2b2lkIDBcIn1mdW5jdGlvbiBpcihlKXtyZXR1cm4gZS5zdGF0aWNQcm9jZXNzZWQ9ITAsQ2EucHVzaChcIndpdGgodGhpcyl7cmV0dXJuIFwiK3JyKGUpK1wifVwiKSxcIl9tKFwiKyhDYS5sZW5ndGgtMSkrKGUuc3RhdGljSW5Gb3I/XCIsdHJ1ZVwiOlwiXCIpK1wiKVwifWZ1bmN0aW9uIG9yKGUpe2lmKGUub25jZVByb2Nlc3NlZD0hMCxlLmlmJiYhZS5pZlByb2Nlc3NlZClyZXR1cm4gYXIoZSk7aWYoZS5zdGF0aWNJbkZvcil7Zm9yKHZhciB0PVwiXCIsbj1lLnBhcmVudDtuOyl7aWYobi5mb3Ipe3Q9bi5rZXk7YnJlYWt9bj1uLnBhcmVudH1yZXR1cm4gdD9cIl9vKFwiK3JyKGUpK1wiLFwiK2thKysgKyh0P1wiLFwiK3Q6XCJcIikrXCIpXCI6cnIoZSl9cmV0dXJuIGlyKGUpfWZ1bmN0aW9uIGFyKGUpe3JldHVybiBlLmlmUHJvY2Vzc2VkPSEwLHNyKGUuY29uZGl0aW9ucyl9ZnVuY3Rpb24gc3IoZSl7ZnVuY3Rpb24gdChlKXtyZXR1cm4gZS5vbmNlP29yKGUpOnJyKGUpfWlmKCFlLmxlbmd0aClyZXR1cm5cIl9lKClcIjt2YXIgbj1lLnNoaWZ0KCk7cmV0dXJuIG4uZXhwP1wiKFwiK24uZXhwK1wiKT9cIit0KG4uYmxvY2spK1wiOlwiK3NyKGUpOlwiXCIrdChuLmJsb2NrKX1mdW5jdGlvbiBjcihlKXt2YXIgdD1lLmZvcixuPWUuYWxpYXMscj1lLml0ZXJhdG9yMT9cIixcIitlLml0ZXJhdG9yMTpcIlwiLGk9ZS5pdGVyYXRvcjI/XCIsXCIrZS5pdGVyYXRvcjI6XCJcIjtyZXR1cm4gZS5mb3JQcm9jZXNzZWQ9ITAsXCJfbCgoXCIrdCtcIiksZnVuY3Rpb24oXCIrbityK2krXCIpe3JldHVybiBcIitycihlKStcIn0pXCJ9ZnVuY3Rpb24gbHIoZSl7dmFyIHQ9XCJ7XCIsbj11cihlKTtuJiYodCs9bitcIixcIiksZS5rZXkmJih0Kz1cImtleTpcIitlLmtleStcIixcIiksZS5yZWYmJih0Kz1cInJlZjpcIitlLnJlZitcIixcIiksZS5yZWZJbkZvciYmKHQrPVwicmVmSW5Gb3I6dHJ1ZSxcIiksZS5jb21wb25lbnQmJih0Kz0ndGFnOlwiJytlLnRhZysnXCIsJyk7Zm9yKHZhciByPTA7cjx3YS5sZW5ndGg7cisrKXQrPXdhW3JdKGUpO2lmKGUuYXR0cnMmJih0Kz1cImF0dHJzOntcIitfcihlLmF0dHJzKStcIn0sXCIpLGUucHJvcHMmJih0Kz1cImRvbVByb3BzOntcIitfcihlLnByb3BzKStcIn0sXCIpLGUuZXZlbnRzJiYodCs9WW4oZS5ldmVudHMpK1wiLFwiKSxlLm5hdGl2ZUV2ZW50cyYmKHQrPVluKGUubmF0aXZlRXZlbnRzLCEwKStcIixcIiksZS5zbG90VGFyZ2V0JiYodCs9XCJzbG90OlwiK2Uuc2xvdFRhcmdldCtcIixcIiksZS5zY29wZWRTbG90cyYmKHQrPWRyKGUuc2NvcGVkU2xvdHMpK1wiLFwiKSxlLmlubGluZVRlbXBsYXRlKXt2YXIgaT1mcihlKTtpJiYodCs9aStcIixcIil9cmV0dXJuIHQ9dC5yZXBsYWNlKC8sJC8sXCJcIikrXCJ9XCIsZS53cmFwRGF0YSYmKHQ9ZS53cmFwRGF0YSh0KSksdH1mdW5jdGlvbiB1cihlKXt2YXIgdD1lLmRpcmVjdGl2ZXM7aWYodCl7dmFyIG4scixpLG8sYT1cImRpcmVjdGl2ZXM6W1wiLHM9ITE7Zm9yKG49MCxyPXQubGVuZ3RoO248cjtuKyspe2k9dFtuXSxvPSEwO3ZhciBjPXhhW2kubmFtZV18fHJzW2kubmFtZV07YyYmKG89ISFjKGUsaSxiYSkpLG8mJihzPSEwLGErPSd7bmFtZTpcIicraS5uYW1lKydcIixyYXdOYW1lOlwiJytpLnJhd05hbWUrJ1wiJysoaS52YWx1ZT9cIix2YWx1ZTooXCIraS52YWx1ZStcIiksZXhwcmVzc2lvbjpcIitKU09OLnN0cmluZ2lmeShpLnZhbHVlKTpcIlwiKSsoaS5hcmc/Jyxhcmc6XCInK2kuYXJnKydcIic6XCJcIikrKGkubW9kaWZpZXJzP1wiLG1vZGlmaWVyczpcIitKU09OLnN0cmluZ2lmeShpLm1vZGlmaWVycyk6XCJcIikrXCJ9LFwiKX1yZXR1cm4gcz9hLnNsaWNlKDAsLTEpK1wiXVwiOnZvaWQgMH19ZnVuY3Rpb24gZnIoZSl7dmFyIHQ9ZS5jaGlsZHJlblswXTtpZigxPT09dC50eXBlKXt2YXIgbj1ucih0LEFhKTtyZXR1cm5cImlubGluZVRlbXBsYXRlOntyZW5kZXI6ZnVuY3Rpb24oKXtcIituLnJlbmRlcitcIn0sc3RhdGljUmVuZGVyRm5zOltcIituLnN0YXRpY1JlbmRlckZucy5tYXAoZnVuY3Rpb24oZSl7cmV0dXJuXCJmdW5jdGlvbigpe1wiK2UrXCJ9XCJ9KS5qb2luKFwiLFwiKStcIl19XCJ9fWZ1bmN0aW9uIGRyKGUpe3JldHVyblwic2NvcGVkU2xvdHM6e1wiK09iamVjdC5rZXlzKGUpLm1hcChmdW5jdGlvbih0KXtyZXR1cm4gcHIodCxlW3RdKX0pLmpvaW4oXCIsXCIpK1wifVwifWZ1bmN0aW9uIHByKGUsdCl7cmV0dXJuIGUrXCI6ZnVuY3Rpb24oXCIrU3RyaW5nKHQuYXR0cnNNYXAuc2NvcGUpK1wiKXtyZXR1cm4gXCIrKFwidGVtcGxhdGVcIj09PXQudGFnP3ZyKHQpfHxcInZvaWQgMFwiOnJyKHQpKStcIn1cIn1mdW5jdGlvbiB2cihlKXtpZihlLmNoaWxkcmVuLmxlbmd0aClyZXR1cm5cIltcIitlLmNoaWxkcmVuLm1hcChocikuam9pbihcIixcIikrXCJdXCJ9ZnVuY3Rpb24gaHIoZSl7cmV0dXJuIDE9PT1lLnR5cGU/cnIoZSk6bXIoZSl9ZnVuY3Rpb24gbXIoZSl7cmV0dXJuIDI9PT1lLnR5cGU/ZS5leHByZXNzaW9uOmJyKEpTT04uc3RyaW5naWZ5KGUudGV4dCkpfWZ1bmN0aW9uIGdyKGUpe3ZhciB0PWUuc2xvdE5hbWV8fCdcImRlZmF1bHRcIicsbj12cihlKTtyZXR1cm5cIl90KFwiK3QrKG4/XCIsXCIrbjpcIlwiKSsoZS5hdHRycz8obj9cIlwiOlwiLG51bGxcIikrXCIse1wiK2UuYXR0cnMubWFwKGZ1bmN0aW9uKGUpe3JldHVybiBWcihlLm5hbWUpK1wiOlwiK2UudmFsdWV9KS5qb2luKFwiLFwiKStcIn1cIjpcIlwiKStcIilcIn1mdW5jdGlvbiB5cihlLHQpe3ZhciBuPXQuaW5saW5lVGVtcGxhdGU/bnVsbDp2cih0KTtyZXR1cm5cIl9oKFwiK2UrXCIsXCIrbHIodCkrKG4/XCIsXCIrbjpcIlwiKStcIilcIn1mdW5jdGlvbiBfcihlKXtmb3IodmFyIHQ9XCJcIixuPTA7bjxlLmxlbmd0aDtuKyspe3ZhciByPWVbbl07dCs9J1wiJytyLm5hbWUrJ1wiOicrYnIoci52YWx1ZSkrXCIsXCJ9cmV0dXJuIHQuc2xpY2UoMCwtMSl9ZnVuY3Rpb24gYnIoZSl7cmV0dXJuIGUucmVwbGFjZSgvXFx1MjAyOC9nLFwiXFxcXHUyMDI4XCIpLnJlcGxhY2UoL1xcdTIwMjkvZyxcIlxcXFx1MjAyOVwiKX1mdW5jdGlvbiAkcihlLHQpe3ZhciBuPWtuKGUudHJpbSgpLHQpO3puKG4sdCk7dmFyIHI9bnIobix0KTtyZXR1cm57YXN0Om4scmVuZGVyOnIucmVuZGVyLHN0YXRpY1JlbmRlckZuczpyLnN0YXRpY1JlbmRlckZuc319ZnVuY3Rpb24gd3IoZSx0KXt2YXIgbj0odC53YXJufHxmbix5bihlLFwiY2xhc3NcIikpO24mJihlLnN0YXRpY0NsYXNzPUpTT04uc3RyaW5naWZ5KG4pKTt2YXIgcj1nbihlLFwiY2xhc3NcIiwhMSk7ciYmKGUuY2xhc3NCaW5kaW5nPXIpfWZ1bmN0aW9uIHhyKGUpe3ZhciB0PVwiXCI7cmV0dXJuIGUuc3RhdGljQ2xhc3MmJih0Kz1cInN0YXRpY0NsYXNzOlwiK2Uuc3RhdGljQ2xhc3MrXCIsXCIpLGUuY2xhc3NCaW5kaW5nJiYodCs9XCJjbGFzczpcIitlLmNsYXNzQmluZGluZytcIixcIiksdH1mdW5jdGlvbiBDcihlLHQpe3ZhciBuPSh0Lndhcm58fGZuLHluKGUsXCJzdHlsZVwiKSk7biYmKGUuc3RhdGljU3R5bGU9SlNPTi5zdHJpbmdpZnkoaG8obikpKTt2YXIgcj1nbihlLFwic3R5bGVcIiwhMSk7ciYmKGUuc3R5bGVCaW5kaW5nPXIpfWZ1bmN0aW9uIGtyKGUpe3ZhciB0PVwiXCI7cmV0dXJuIGUuc3RhdGljU3R5bGUmJih0Kz1cInN0YXRpY1N0eWxlOlwiK2Uuc3RhdGljU3R5bGUrXCIsXCIpLGUuc3R5bGVCaW5kaW5nJiYodCs9XCJzdHlsZTooXCIrZS5zdHlsZUJpbmRpbmcrXCIpLFwiKSx0fWZ1bmN0aW9uIEFyKGUsdCxuKXtPYT1uO3ZhciByPXQudmFsdWUsaT10Lm1vZGlmaWVycyxvPWUudGFnLGE9ZS5hdHRyc01hcC50eXBlO3JldHVyblwic2VsZWN0XCI9PT1vP2pyKGUscixpKTpcImlucHV0XCI9PT1vJiZcImNoZWNrYm94XCI9PT1hP09yKGUscixpKTpcImlucHV0XCI9PT1vJiZcInJhZGlvXCI9PT1hP1NyKGUscixpKTpUcihlLHIsaSksITB9ZnVuY3Rpb24gT3IoZSx0LG4pe3ZhciByPW4mJm4ubnVtYmVyLGk9Z24oZSxcInZhbHVlXCIpfHxcIm51bGxcIixvPWduKGUsXCJ0cnVlLXZhbHVlXCIpfHxcInRydWVcIixhPWduKGUsXCJmYWxzZS12YWx1ZVwiKXx8XCJmYWxzZVwiO3BuKGUsXCJjaGVja2VkXCIsXCJBcnJheS5pc0FycmF5KFwiK3QrXCIpP19pKFwiK3QrXCIsXCIraStcIik+LTE6X3EoXCIrdCtcIixcIitvK1wiKVwiKSxtbihlLFwiY2hhbmdlXCIsXCJ2YXIgJCRhPVwiK3QrXCIsJCRlbD0kZXZlbnQudGFyZ2V0LCQkYz0kJGVsLmNoZWNrZWQ/KFwiK28rXCIpOihcIithK1wiKTtpZihBcnJheS5pc0FycmF5KCQkYSkpe3ZhciAkJHY9XCIrKHI/XCJfbihcIitpK1wiKVwiOmkpK1wiLCQkaT1faSgkJGEsJCR2KTtpZigkJGMpeyQkaTwwJiYoXCIrdCtcIj0kJGEuY29uY2F0KCQkdikpfWVsc2V7JCRpPi0xJiYoXCIrdCtcIj0kJGEuc2xpY2UoMCwkJGkpLmNvbmNhdCgkJGEuc2xpY2UoJCRpKzEpKSl9fWVsc2V7XCIrdCtcIj0kJGN9XCIsbnVsbCwhMCl9ZnVuY3Rpb24gU3IoZSx0LG4pe3ZhciByPW4mJm4ubnVtYmVyLGk9Z24oZSxcInZhbHVlXCIpfHxcIm51bGxcIjtpPXI/XCJfbihcIitpK1wiKVwiOmkscG4oZSxcImNoZWNrZWRcIixcIl9xKFwiK3QrXCIsXCIraStcIilcIiksbW4oZSxcImNoYW5nZVwiLEVyKHQsaSksbnVsbCwhMCl9ZnVuY3Rpb24gVHIoZSx0LG4pe3ZhciByPWUuYXR0cnNNYXAudHlwZSxpPW58fHt9LG89aS5sYXp5LGE9aS5udW1iZXIscz1pLnRyaW0sYz1vfHxlaSYmXCJyYW5nZVwiPT09cj9cImNoYW5nZVwiOlwiaW5wdXRcIixsPSFvJiZcInJhbmdlXCIhPT1yLHU9XCJpbnB1dFwiPT09ZS50YWd8fFwidGV4dGFyZWFcIj09PWUudGFnLGY9dT9cIiRldmVudC50YXJnZXQudmFsdWVcIisocz9cIi50cmltKClcIjpcIlwiKTpzP1wiKHR5cGVvZiAkZXZlbnQgPT09ICdzdHJpbmcnID8gJGV2ZW50LnRyaW0oKSA6ICRldmVudClcIjpcIiRldmVudFwiO2Y9YXx8XCJudW1iZXJcIj09PXI/XCJfbihcIitmK1wiKVwiOmY7dmFyIGQ9RXIodCxmKTt1JiZsJiYoZD1cImlmKCRldmVudC50YXJnZXQuY29tcG9zaW5nKXJldHVybjtcIitkKSxwbihlLFwidmFsdWVcIix1P1wiX3MoXCIrdCtcIilcIjpcIihcIit0K1wiKVwiKSxtbihlLGMsZCxudWxsLCEwKX1mdW5jdGlvbiBqcihlLHQsbil7dmFyIHI9biYmbi5udW1iZXIsaT0nQXJyYXkucHJvdG90eXBlLmZpbHRlci5jYWxsKCRldmVudC50YXJnZXQub3B0aW9ucyxmdW5jdGlvbihvKXtyZXR1cm4gby5zZWxlY3RlZH0pLm1hcChmdW5jdGlvbihvKXt2YXIgdmFsID0gXCJfdmFsdWVcIiBpbiBvID8gby5fdmFsdWUgOiBvLnZhbHVlO3JldHVybiAnKyhyP1wiX24odmFsKVwiOlwidmFsXCIpK1wifSlcIisobnVsbD09ZS5hdHRyc01hcC5tdWx0aXBsZT9cIlswXVwiOlwiXCIpLG89RXIodCxpKTttbihlLFwiY2hhbmdlXCIsbyxudWxsLCEwKX1mdW5jdGlvbiBFcihlLHQpe3ZhciBuPV9uKGUpO3JldHVybiBudWxsPT09bi5pZHg/ZStcIj1cIit0OlwidmFyICQkZXhwID0gXCIrbi5leHArXCIsICQkaWR4ID0gXCIrbi5pZHgrXCI7aWYgKCFBcnJheS5pc0FycmF5KCQkZXhwKSl7XCIrZStcIj1cIit0K1wifWVsc2V7JCRleHAuc3BsaWNlKCQkaWR4LCAxLCBcIit0K1wiKX1cIn1mdW5jdGlvbiBOcihlLHQpe3QudmFsdWUmJnBuKGUsXCJ0ZXh0Q29udGVudFwiLFwiX3MoXCIrdC52YWx1ZStcIilcIil9ZnVuY3Rpb24gTHIoZSx0KXt0LnZhbHVlJiZwbihlLFwiaW5uZXJIVE1MXCIsXCJfcyhcIit0LnZhbHVlK1wiKVwiKX1mdW5jdGlvbiBEcihlLHQpe3JldHVybiB0PXQ/bChsKHt9LGxzKSx0KTpscywkcihlLHQpfWZ1bmN0aW9uIE1yKGUsdCxuKXt2YXIgcj0odCYmdC53YXJufHx1aSx0JiZ0LmRlbGltaXRlcnM/U3RyaW5nKHQuZGVsaW1pdGVycykrZTplKTtpZihjc1tyXSlyZXR1cm4gY3Nbcl07dmFyIGk9e30sbz1EcihlLHQpO2kucmVuZGVyPVByKG8ucmVuZGVyKTt2YXIgYT1vLnN0YXRpY1JlbmRlckZucy5sZW5ndGg7aS5zdGF0aWNSZW5kZXJGbnM9bmV3IEFycmF5KGEpO2Zvcih2YXIgcz0wO3M8YTtzKyspaS5zdGF0aWNSZW5kZXJGbnNbc109UHIoby5zdGF0aWNSZW5kZXJGbnNbc10pO3JldHVybiBjc1tyXT1pfWZ1bmN0aW9uIFByKGUpe3RyeXtyZXR1cm4gbmV3IEZ1bmN0aW9uKGUpfWNhdGNoKGUpe3JldHVybiBwfX1mdW5jdGlvbiBScihlKXtpZihlLm91dGVySFRNTClyZXR1cm4gZS5vdXRlckhUTUw7dmFyIHQ9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtyZXR1cm4gdC5hcHBlbmRDaGlsZChlLmNsb25lTm9kZSghMCkpLHQuaW5uZXJIVE1MfXZhciBJcixGcixCcj1uKFwic2xvdCxjb21wb25lbnRcIiwhMCksVXI9T2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eSxIcj0vLShcXHcpL2csVnI9YShmdW5jdGlvbihlKXtyZXR1cm4gZS5yZXBsYWNlKEhyLGZ1bmN0aW9uKGUsdCl7cmV0dXJuIHQ/dC50b1VwcGVyQ2FzZSgpOlwiXCJ9KX0pLHpyPWEoZnVuY3Rpb24oZSl7cmV0dXJuIGUuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkrZS5zbGljZSgxKX0pLEpyPS8oW14tXSkoW0EtWl0pL2csS3I9YShmdW5jdGlvbihlKXtyZXR1cm4gZS5yZXBsYWNlKEpyLFwiJDEtJDJcIikucmVwbGFjZShKcixcIiQxLSQyXCIpLnRvTG93ZXJDYXNlKCl9KSxxcj1PYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLFdyPVwiW29iamVjdCBPYmplY3RdXCIsWnI9ZnVuY3Rpb24oKXtyZXR1cm4hMX0sR3I9L1teXFx3LiRdLyxZcj1cIl9fcHJvdG9fX1wiaW57fSxRcj1cInVuZGVmaW5lZFwiIT10eXBlb2Ygd2luZG93JiZcIltvYmplY3QgT2JqZWN0XVwiIT09T2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHdpbmRvdyksWHI9UXImJndpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCksZWk9WHImJi9tc2llfHRyaWRlbnQvLnRlc3QoWHIpLHRpPVhyJiZYci5pbmRleE9mKFwibXNpZSA5LjBcIik+MCxuaT1YciYmWHIuaW5kZXhPZihcImVkZ2UvXCIpPjAscmk9WHImJlhyLmluZGV4T2YoXCJhbmRyb2lkXCIpPjAsaWk9WHImJi9pcGhvbmV8aXBhZHxpcG9kfGlvcy8udGVzdChYciksb2k9ZnVuY3Rpb24oKXtyZXR1cm4gdm9pZCAwPT09SXImJihJcj0hUXImJlwidW5kZWZpbmVkXCIhPXR5cGVvZiBnbG9iYWwmJlwic2VydmVyXCI9PT1nbG9iYWwucHJvY2Vzcy5lbnYuVlVFX0VOViksSXJ9LGFpPVFyJiZ3aW5kb3cuX19WVUVfREVWVE9PTFNfR0xPQkFMX0hPT0tfXyxzaT1mdW5jdGlvbigpe2Z1bmN0aW9uIGUoKXtyPSExO3ZhciBlPW4uc2xpY2UoMCk7bi5sZW5ndGg9MDtmb3IodmFyIHQ9MDt0PGUubGVuZ3RoO3QrKyllW3RdKCl9dmFyIHQsbj1bXSxyPSExO2lmKFwidW5kZWZpbmVkXCIhPXR5cGVvZiBQcm9taXNlJiZiKFByb21pc2UpKXt2YXIgaT1Qcm9taXNlLnJlc29sdmUoKTt0PWZ1bmN0aW9uKCl7aS50aGVuKGUpLGlpJiZzZXRUaW1lb3V0KHApfX1lbHNlIGlmKFwidW5kZWZpbmVkXCI9PXR5cGVvZiBNdXRhdGlvbk9ic2VydmVyfHwhYihNdXRhdGlvbk9ic2VydmVyKSYmXCJbb2JqZWN0IE11dGF0aW9uT2JzZXJ2ZXJDb25zdHJ1Y3Rvcl1cIiE9PU11dGF0aW9uT2JzZXJ2ZXIudG9TdHJpbmcoKSl0PWZ1bmN0aW9uKCl7c2V0VGltZW91dChlLDApfTtlbHNle3ZhciBvPTEsYT1uZXcgTXV0YXRpb25PYnNlcnZlcihlKSxzPWRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFN0cmluZyhvKSk7YS5vYnNlcnZlKHMse2NoYXJhY3RlckRhdGE6ITB9KSx0PWZ1bmN0aW9uKCl7bz0obysxKSUyLHMuZGF0YT1TdHJpbmcobyl9fXJldHVybiBmdW5jdGlvbihlLGkpe3ZhciBvO2lmKG4ucHVzaChmdW5jdGlvbigpe2UmJmUuY2FsbChpKSxvJiZvKGkpfSkscnx8KHI9ITAsdCgpKSwhZSYmXCJ1bmRlZmluZWRcIiE9dHlwZW9mIFByb21pc2UpcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKGUpe289ZX0pfX0oKTtGcj1cInVuZGVmaW5lZFwiIT10eXBlb2YgU2V0JiZiKFNldCk/U2V0OmZ1bmN0aW9uKCl7ZnVuY3Rpb24gZSgpe3RoaXMuc2V0PU9iamVjdC5jcmVhdGUobnVsbCl9cmV0dXJuIGUucHJvdG90eXBlLmhhcz1mdW5jdGlvbihlKXtyZXR1cm4gdm9pZCAwIT09dGhpcy5zZXRbZV19LGUucHJvdG90eXBlLmFkZD1mdW5jdGlvbihlKXt0aGlzLnNldFtlXT0xfSxlLnByb3RvdHlwZS5jbGVhcj1mdW5jdGlvbigpe3RoaXMuc2V0PU9iamVjdC5jcmVhdGUobnVsbCl9LGV9KCk7dmFyIGNpLGxpPXtvcHRpb25NZXJnZVN0cmF0ZWdpZXM6T2JqZWN0LmNyZWF0ZShudWxsKSxzaWxlbnQ6ITEsZGV2dG9vbHM6ITEsZXJyb3JIYW5kbGVyOm51bGwsaWdub3JlZEVsZW1lbnRzOm51bGwsa2V5Q29kZXM6T2JqZWN0LmNyZWF0ZShudWxsKSxpc1Jlc2VydmVkVGFnOlpyLGlzVW5rbm93bkVsZW1lbnQ6WnIsZ2V0VGFnTmFtZXNwYWNlOnAsbXVzdFVzZVByb3A6WnIsX2Fzc2V0VHlwZXM6W1wiY29tcG9uZW50XCIsXCJkaXJlY3RpdmVcIixcImZpbHRlclwiXSxfbGlmZWN5Y2xlSG9va3M6W1wiYmVmb3JlQ3JlYXRlXCIsXCJjcmVhdGVkXCIsXCJiZWZvcmVNb3VudFwiLFwibW91bnRlZFwiLFwiYmVmb3JlVXBkYXRlXCIsXCJ1cGRhdGVkXCIsXCJiZWZvcmVEZXN0cm95XCIsXCJkZXN0cm95ZWRcIixcImFjdGl2YXRlZFwiLFwiZGVhY3RpdmF0ZWRcIl0sX21heFVwZGF0ZUNvdW50OjEwMH0sdWk9cCxmaT0wLGRpPWZ1bmN0aW9uKCl7dGhpcy5pZD1maSsrLHRoaXMuc3Vicz1bXX07ZGkucHJvdG90eXBlLmFkZFN1Yj1mdW5jdGlvbihlKXt0aGlzLnN1YnMucHVzaChlKX0sZGkucHJvdG90eXBlLnJlbW92ZVN1Yj1mdW5jdGlvbihlKXtyKHRoaXMuc3VicyxlKX0sZGkucHJvdG90eXBlLmRlcGVuZD1mdW5jdGlvbigpe2RpLnRhcmdldCYmZGkudGFyZ2V0LmFkZERlcCh0aGlzKX0sZGkucHJvdG90eXBlLm5vdGlmeT1mdW5jdGlvbigpe2Zvcih2YXIgZT10aGlzLnN1YnMuc2xpY2UoKSx0PTAsbj1lLmxlbmd0aDt0PG47dCsrKWVbdF0udXBkYXRlKCl9LGRpLnRhcmdldD1udWxsO3ZhciBwaT1bXSx2aT1BcnJheS5wcm90b3R5cGUsaGk9T2JqZWN0LmNyZWF0ZSh2aSk7W1wicHVzaFwiLFwicG9wXCIsXCJzaGlmdFwiLFwidW5zaGlmdFwiLFwic3BsaWNlXCIsXCJzb3J0XCIsXCJyZXZlcnNlXCJdLmZvckVhY2goZnVuY3Rpb24oZSl7dmFyIHQ9dmlbZV07eShoaSxlLGZ1bmN0aW9uKCl7Zm9yKHZhciBuPWFyZ3VtZW50cyxyPWFyZ3VtZW50cy5sZW5ndGgsaT1uZXcgQXJyYXkocik7ci0tOylpW3JdPW5bcl07dmFyIG8sYT10LmFwcGx5KHRoaXMsaSkscz10aGlzLl9fb2JfXztzd2l0Y2goZSl7Y2FzZVwicHVzaFwiOm89aTticmVhaztjYXNlXCJ1bnNoaWZ0XCI6bz1pO2JyZWFrO2Nhc2VcInNwbGljZVwiOm89aS5zbGljZSgyKX1yZXR1cm4gbyYmcy5vYnNlcnZlQXJyYXkobykscy5kZXAubm90aWZ5KCksYX0pfSk7dmFyIG1pPU9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGhpKSxnaT17c2hvdWxkQ29udmVydDohMCxpc1NldHRpbmdQcm9wczohMX0seWk9ZnVuY3Rpb24oZSl7aWYodGhpcy52YWx1ZT1lLHRoaXMuZGVwPW5ldyBkaSx0aGlzLnZtQ291bnQ9MCx5KGUsXCJfX29iX19cIix0aGlzKSxBcnJheS5pc0FycmF5KGUpKXt2YXIgdD1Zcj94OkM7dChlLGhpLG1pKSx0aGlzLm9ic2VydmVBcnJheShlKX1lbHNlIHRoaXMud2FsayhlKX07eWkucHJvdG90eXBlLndhbGs9ZnVuY3Rpb24oZSl7Zm9yKHZhciB0PU9iamVjdC5rZXlzKGUpLG49MDtuPHQubGVuZ3RoO24rKylBKGUsdFtuXSxlW3Rbbl1dKX0seWkucHJvdG90eXBlLm9ic2VydmVBcnJheT1mdW5jdGlvbihlKXtmb3IodmFyIHQ9MCxuPWUubGVuZ3RoO3Q8bjt0KyspayhlW3RdKX07dmFyIF9pPWxpLm9wdGlvbk1lcmdlU3RyYXRlZ2llcztfaS5kYXRhPWZ1bmN0aW9uKGUsdCxuKXtyZXR1cm4gbj9lfHx0P2Z1bmN0aW9uKCl7dmFyIHI9XCJmdW5jdGlvblwiPT10eXBlb2YgdD90LmNhbGwobik6dCxpPVwiZnVuY3Rpb25cIj09dHlwZW9mIGU/ZS5jYWxsKG4pOnZvaWQgMDtyZXR1cm4gcj9qKHIsaSk6aX06dm9pZCAwOnQ/XCJmdW5jdGlvblwiIT10eXBlb2YgdD9lOmU/ZnVuY3Rpb24oKXtyZXR1cm4gaih0LmNhbGwodGhpcyksZS5jYWxsKHRoaXMpKX06dDplfSxsaS5fbGlmZWN5Y2xlSG9va3MuZm9yRWFjaChmdW5jdGlvbihlKXtfaVtlXT1FfSksbGkuX2Fzc2V0VHlwZXMuZm9yRWFjaChmdW5jdGlvbihlKXtfaVtlK1wic1wiXT1OfSksX2kud2F0Y2g9ZnVuY3Rpb24oZSx0KXtpZighdClyZXR1cm4gZTtpZighZSlyZXR1cm4gdDt2YXIgbj17fTtsKG4sZSk7Zm9yKHZhciByIGluIHQpe3ZhciBpPW5bcl0sbz10W3JdO2kmJiFBcnJheS5pc0FycmF5KGkpJiYoaT1baV0pLG5bcl09aT9pLmNvbmNhdChvKTpbb119cmV0dXJuIG59LF9pLnByb3BzPV9pLm1ldGhvZHM9X2kuY29tcHV0ZWQ9ZnVuY3Rpb24oZSx0KXtpZighdClyZXR1cm4gZTtpZighZSlyZXR1cm4gdDt2YXIgbj1PYmplY3QuY3JlYXRlKG51bGwpO3JldHVybiBsKG4sZSksbChuLHQpLG59O3ZhciBiaT1mdW5jdGlvbihlLHQpe3JldHVybiB2b2lkIDA9PT10P2U6dH0sJGk9T2JqZWN0LmZyZWV6ZSh7ZGVmaW5lUmVhY3RpdmU6QSxfdG9TdHJpbmc6ZSx0b051bWJlcjp0LG1ha2VNYXA6bixpc0J1aWx0SW5UYWc6QnIscmVtb3ZlOnIsaGFzT3duOmksaXNQcmltaXRpdmU6byxjYWNoZWQ6YSxjYW1lbGl6ZTpWcixjYXBpdGFsaXplOnpyLGh5cGhlbmF0ZTpLcixiaW5kOnMsdG9BcnJheTpjLGV4dGVuZDpsLGlzT2JqZWN0OnUsaXNQbGFpbk9iamVjdDpmLHRvT2JqZWN0OmQsbm9vcDpwLG5vOlpyLGdlblN0YXRpY0tleXM6dixsb29zZUVxdWFsOmgsbG9vc2VJbmRleE9mOm0saXNSZXNlcnZlZDpnLGRlZjp5LHBhcnNlUGF0aDpfLGhhc1Byb3RvOllyLGluQnJvd3NlcjpRcixVQTpYcixpc0lFOmVpLGlzSUU5OnRpLGlzRWRnZTpuaSxpc0FuZHJvaWQ6cmksaXNJT1M6aWksaXNTZXJ2ZXJSZW5kZXJpbmc6b2ksZGV2dG9vbHM6YWksbmV4dFRpY2s6c2ksZ2V0IF9TZXQoKXtyZXR1cm4gRnJ9LG1lcmdlT3B0aW9uczpNLHJlc29sdmVBc3NldDpQLHdhcm46dWksZm9ybWF0Q29tcG9uZW50TmFtZTpjaSx2YWxpZGF0ZVByb3A6Un0pLHdpPVtdLHhpPXt9LENpPSExLGtpPSExLEFpPTAsT2k9MCxTaT1mdW5jdGlvbihlLHQsbixyKXt2b2lkIDA9PT1yJiYocj17fSksdGhpcy52bT1lLGUuX3dhdGNoZXJzLnB1c2godGhpcyksdGhpcy5kZWVwPSEhci5kZWVwLHRoaXMudXNlcj0hIXIudXNlcix0aGlzLmxhenk9ISFyLmxhenksdGhpcy5zeW5jPSEhci5zeW5jLHRoaXMuZXhwcmVzc2lvbj10LnRvU3RyaW5nKCksdGhpcy5jYj1uLHRoaXMuaWQ9KytPaSx0aGlzLmFjdGl2ZT0hMCx0aGlzLmRpcnR5PXRoaXMubGF6eSx0aGlzLmRlcHM9W10sdGhpcy5uZXdEZXBzPVtdLHRoaXMuZGVwSWRzPW5ldyBGcix0aGlzLm5ld0RlcElkcz1uZXcgRnIsXCJmdW5jdGlvblwiPT10eXBlb2YgdD90aGlzLmdldHRlcj10Oih0aGlzLmdldHRlcj1fKHQpLHRoaXMuZ2V0dGVyfHwodGhpcy5nZXR0ZXI9ZnVuY3Rpb24oKXt9KSksdGhpcy52YWx1ZT10aGlzLmxhenk/dm9pZCAwOnRoaXMuZ2V0KCl9O1NpLnByb3RvdHlwZS5nZXQ9ZnVuY3Rpb24oKXskKHRoaXMpO3ZhciBlPXRoaXMuZ2V0dGVyLmNhbGwodGhpcy52bSx0aGlzLnZtKTtyZXR1cm4gdGhpcy5kZWVwJiZ6KGUpLHcoKSx0aGlzLmNsZWFudXBEZXBzKCksZX0sU2kucHJvdG90eXBlLmFkZERlcD1mdW5jdGlvbihlKXt2YXIgdD1lLmlkO3RoaXMubmV3RGVwSWRzLmhhcyh0KXx8KHRoaXMubmV3RGVwSWRzLmFkZCh0KSx0aGlzLm5ld0RlcHMucHVzaChlKSx0aGlzLmRlcElkcy5oYXModCl8fGUuYWRkU3ViKHRoaXMpKX0sU2kucHJvdG90eXBlLmNsZWFudXBEZXBzPWZ1bmN0aW9uKCl7Zm9yKHZhciBlPXRoaXMsdD10aGlzLmRlcHMubGVuZ3RoO3QtLTspe3ZhciBuPWUuZGVwc1t0XTtlLm5ld0RlcElkcy5oYXMobi5pZCl8fG4ucmVtb3ZlU3ViKGUpfXZhciByPXRoaXMuZGVwSWRzO3RoaXMuZGVwSWRzPXRoaXMubmV3RGVwSWRzLHRoaXMubmV3RGVwSWRzPXIsdGhpcy5uZXdEZXBJZHMuY2xlYXIoKSxyPXRoaXMuZGVwcyx0aGlzLmRlcHM9dGhpcy5uZXdEZXBzLHRoaXMubmV3RGVwcz1yLHRoaXMubmV3RGVwcy5sZW5ndGg9MH0sU2kucHJvdG90eXBlLnVwZGF0ZT1mdW5jdGlvbigpe3RoaXMubGF6eT90aGlzLmRpcnR5PSEwOnRoaXMuc3luYz90aGlzLnJ1bigpOlYodGhpcyl9LFNpLnByb3RvdHlwZS5ydW49ZnVuY3Rpb24oKXtpZih0aGlzLmFjdGl2ZSl7dmFyIGU9dGhpcy5nZXQoKTtpZihlIT09dGhpcy52YWx1ZXx8dShlKXx8dGhpcy5kZWVwKXt2YXIgdD10aGlzLnZhbHVlO2lmKHRoaXMudmFsdWU9ZSx0aGlzLnVzZXIpdHJ5e3RoaXMuY2IuY2FsbCh0aGlzLnZtLGUsdCl9Y2F0Y2goZSl7aWYoIWxpLmVycm9ySGFuZGxlcil0aHJvdyBlO2xpLmVycm9ySGFuZGxlci5jYWxsKG51bGwsZSx0aGlzLnZtKX1lbHNlIHRoaXMuY2IuY2FsbCh0aGlzLnZtLGUsdCl9fX0sU2kucHJvdG90eXBlLmV2YWx1YXRlPWZ1bmN0aW9uKCl7dGhpcy52YWx1ZT10aGlzLmdldCgpLHRoaXMuZGlydHk9ITF9LFNpLnByb3RvdHlwZS5kZXBlbmQ9ZnVuY3Rpb24oKXtmb3IodmFyIGU9dGhpcyx0PXRoaXMuZGVwcy5sZW5ndGg7dC0tOyllLmRlcHNbdF0uZGVwZW5kKCl9LFNpLnByb3RvdHlwZS50ZWFyZG93bj1mdW5jdGlvbigpe3ZhciBlPXRoaXM7aWYodGhpcy5hY3RpdmUpe3RoaXMudm0uX2lzQmVpbmdEZXN0cm95ZWR8fHRoaXMudm0uX3ZGb3JSZW1vdmluZ3x8cih0aGlzLnZtLl93YXRjaGVycyx0aGlzKTtmb3IodmFyIHQ9dGhpcy5kZXBzLmxlbmd0aDt0LS07KWUuZGVwc1t0XS5yZW1vdmVTdWIoZSk7dGhpcy5hY3RpdmU9ITF9fTt2YXIgVGk9bmV3IEZyLGppPXtlbnVtZXJhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMCxnZXQ6cCxzZXQ6cH0sRWk9ZnVuY3Rpb24oZSx0LG4scixpLG8sYSxzKXt0aGlzLnRhZz1lLHRoaXMuZGF0YT10LHRoaXMuY2hpbGRyZW49bix0aGlzLnRleHQ9cix0aGlzLmVsbT1pLHRoaXMubnM9byx0aGlzLmNvbnRleHQ9YSx0aGlzLmZ1bmN0aW9uYWxDb250ZXh0PXZvaWQgMCx0aGlzLmtleT10JiZ0LmtleSx0aGlzLmNvbXBvbmVudE9wdGlvbnM9cyx0aGlzLmNoaWxkPXZvaWQgMCx0aGlzLnBhcmVudD12b2lkIDAsdGhpcy5yYXc9ITEsdGhpcy5pc1N0YXRpYz0hMSx0aGlzLmlzUm9vdEluc2VydD0hMCx0aGlzLmlzQ29tbWVudD0hMSx0aGlzLmlzQ2xvbmVkPSExLHRoaXMuaXNPbmNlPSExfSxOaT1mdW5jdGlvbigpe3ZhciBlPW5ldyBFaTtyZXR1cm4gZS50ZXh0PVwiXCIsZS5pc0NvbW1lbnQ9ITAsZX0sTGk9bnVsbCxEaT17aW5pdDp5ZSxwcmVwYXRjaDpfZSxpbnNlcnQ6YmUsZGVzdHJveTokZX0sTWk9T2JqZWN0LmtleXMoRGkpLFBpPTA7RGUoUmUpLGVlKFJlKSxMZShSZSkscGUoUmUpLGplKFJlKTt2YXIgUmk9W1N0cmluZyxSZWdFeHBdLElpPXtuYW1lOlwia2VlcC1hbGl2ZVwiLGFic3RyYWN0OiEwLHByb3BzOntpbmNsdWRlOlJpLGV4Y2x1ZGU6Uml9LGNyZWF0ZWQ6ZnVuY3Rpb24oKXt0aGlzLmNhY2hlPU9iamVjdC5jcmVhdGUobnVsbCl9LHJlbmRlcjpmdW5jdGlvbigpe3ZhciBlPWZlKHRoaXMuJHNsb3RzLmRlZmF1bHQpO2lmKGUmJmUuY29tcG9uZW50T3B0aW9ucyl7dmFyIHQ9ZS5jb21wb25lbnRPcHRpb25zLG49dC5DdG9yLm9wdGlvbnMubmFtZXx8dC50YWc7aWYobiYmKHRoaXMuaW5jbHVkZSYmIUhlKHRoaXMuaW5jbHVkZSxuKXx8dGhpcy5leGNsdWRlJiZIZSh0aGlzLmV4Y2x1ZGUsbikpKXJldHVybiBlO3ZhciByPW51bGw9PWUua2V5P3QuQ3Rvci5jaWQrKHQudGFnP1wiOjpcIit0LnRhZzpcIlwiKTplLmtleTt0aGlzLmNhY2hlW3JdP2UuY2hpbGQ9dGhpcy5jYWNoZVtyXS5jaGlsZDp0aGlzLmNhY2hlW3JdPWUsZS5kYXRhLmtlZXBBbGl2ZT0hMH1yZXR1cm4gZX0sZGVzdHJveWVkOmZ1bmN0aW9uKCl7dmFyIGU9dGhpcztmb3IodmFyIHQgaW4gdGhpcy5jYWNoZSl7dmFyIG49ZS5jYWNoZVt0XTt2ZShuLmNoaWxkLFwiZGVhY3RpdmF0ZWRcIiksbi5jaGlsZC4kZGVzdHJveSgpfX19LEZpPXtLZWVwQWxpdmU6SWl9O1ZlKFJlKSxPYmplY3QuZGVmaW5lUHJvcGVydHkoUmUucHJvdG90eXBlLFwiJGlzU2VydmVyXCIse2dldDpvaX0pLFJlLnZlcnNpb249XCIyLjEuMFwiO3ZhciBCaSxVaT1mdW5jdGlvbihlLHQpe3JldHVyblwidmFsdWVcIj09PXQmJihcImlucHV0XCI9PT1lfHxcInRleHRhcmVhXCI9PT1lfHxcIm9wdGlvblwiPT09ZSl8fFwic2VsZWN0ZWRcIj09PXQmJlwib3B0aW9uXCI9PT1lfHxcImNoZWNrZWRcIj09PXQmJlwiaW5wdXRcIj09PWV8fFwibXV0ZWRcIj09PXQmJlwidmlkZW9cIj09PWV9LEhpPW4oXCJjb250ZW50ZWRpdGFibGUsZHJhZ2dhYmxlLHNwZWxsY2hlY2tcIiksVmk9bihcImFsbG93ZnVsbHNjcmVlbixhc3luYyxhdXRvZm9jdXMsYXV0b3BsYXksY2hlY2tlZCxjb21wYWN0LGNvbnRyb2xzLGRlY2xhcmUsZGVmYXVsdCxkZWZhdWx0Y2hlY2tlZCxkZWZhdWx0bXV0ZWQsZGVmYXVsdHNlbGVjdGVkLGRlZmVyLGRpc2FibGVkLGVuYWJsZWQsZm9ybW5vdmFsaWRhdGUsaGlkZGVuLGluZGV0ZXJtaW5hdGUsaW5lcnQsaXNtYXAsaXRlbXNjb3BlLGxvb3AsbXVsdGlwbGUsbXV0ZWQsbm9ocmVmLG5vcmVzaXplLG5vc2hhZGUsbm92YWxpZGF0ZSxub3dyYXAsb3BlbixwYXVzZW9uZXhpdCxyZWFkb25seSxyZXF1aXJlZCxyZXZlcnNlZCxzY29wZWQsc2VhbWxlc3Msc2VsZWN0ZWQsc29ydGFibGUsdHJhbnNsYXRlLHRydWVzcGVlZCx0eXBlbXVzdG1hdGNoLHZpc2libGVcIiksemk9XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCIsSmk9ZnVuY3Rpb24oZSl7cmV0dXJuXCI6XCI9PT1lLmNoYXJBdCg1KSYmXCJ4bGlua1wiPT09ZS5zbGljZSgwLDUpfSxLaT1mdW5jdGlvbihlKXtyZXR1cm4gSmkoZSk/ZS5zbGljZSg2LGUubGVuZ3RoKTpcIlwifSxxaT1mdW5jdGlvbihlKXtyZXR1cm4gbnVsbD09ZXx8ZT09PSExfSxXaT17c3ZnOlwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIixtYXRoOlwiaHR0cDovL3d3dy53My5vcmcvMTk5OC9NYXRoL01hdGhNTFwiLHhodG1sOlwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94aHRtbFwifSxaaT1uKFwiaHRtbCxib2R5LGJhc2UsaGVhZCxsaW5rLG1ldGEsc3R5bGUsdGl0bGUsYWRkcmVzcyxhcnRpY2xlLGFzaWRlLGZvb3RlcixoZWFkZXIsaDEsaDIsaDMsaDQsaDUsaDYsaGdyb3VwLG5hdixzZWN0aW9uLGRpdixkZCxkbCxkdCxmaWdjYXB0aW9uLGZpZ3VyZSxocixpbWcsbGksbWFpbixvbCxwLHByZSx1bCxhLGIsYWJicixiZGksYmRvLGJyLGNpdGUsY29kZSxkYXRhLGRmbixlbSxpLGtiZCxtYXJrLHEscnAscnQscnRjLHJ1YnkscyxzYW1wLHNtYWxsLHNwYW4sc3Ryb25nLHN1YixzdXAsdGltZSx1LHZhcix3YnIsYXJlYSxhdWRpbyxtYXAsdHJhY2ssdmlkZW8sZW1iZWQsb2JqZWN0LHBhcmFtLHNvdXJjZSxjYW52YXMsc2NyaXB0LG5vc2NyaXB0LGRlbCxpbnMsY2FwdGlvbixjb2wsY29sZ3JvdXAsdGFibGUsdGhlYWQsdGJvZHksdGQsdGgsdHIsYnV0dG9uLGRhdGFsaXN0LGZpZWxkc2V0LGZvcm0saW5wdXQsbGFiZWwsbGVnZW5kLG1ldGVyLG9wdGdyb3VwLG9wdGlvbixvdXRwdXQscHJvZ3Jlc3Msc2VsZWN0LHRleHRhcmVhLGRldGFpbHMsZGlhbG9nLG1lbnUsbWVudWl0ZW0sc3VtbWFyeSxjb250ZW50LGVsZW1lbnQsc2hhZG93LHRlbXBsYXRlXCIpLEdpPW4oXCJhcmVhLGJhc2UsYnIsY29sLGVtYmVkLGZyYW1lLGhyLGltZyxpbnB1dCxpc2luZGV4LGtleWdlbixsaW5rLG1ldGEscGFyYW0sc291cmNlLHRyYWNrLHdiclwiLCEwKSxZaT1uKFwiY29sZ3JvdXAsZGQsZHQsbGksb3B0aW9ucyxwLHRkLHRmb290LHRoLHRoZWFkLHRyLHNvdXJjZVwiLCEwKSxRaT1uKFwiYWRkcmVzcyxhcnRpY2xlLGFzaWRlLGJhc2UsYmxvY2txdW90ZSxib2R5LGNhcHRpb24sY29sLGNvbGdyb3VwLGRkLGRldGFpbHMsZGlhbG9nLGRpdixkbCxkdCxmaWVsZHNldCxmaWdjYXB0aW9uLGZpZ3VyZSxmb290ZXIsZm9ybSxoMSxoMixoMyxoNCxoNSxoNixoZWFkLGhlYWRlcixoZ3JvdXAsaHIsaHRtbCxsZWdlbmQsbGksbWVudWl0ZW0sbWV0YSxvcHRncm91cCxvcHRpb24scGFyYW0scnAscnQsc291cmNlLHN0eWxlLHN1bW1hcnksdGJvZHksdGQsdGZvb3QsdGgsdGhlYWQsdGl0bGUsdHIsdHJhY2tcIiwhMCksWGk9bihcInN2ZyxhbmltYXRlLGNpcmNsZSxjbGlwcGF0aCxjdXJzb3IsZGVmcyxkZXNjLGVsbGlwc2UsZmlsdGVyLGZvbnQsZm9udC1mYWNlLGcsZ2x5cGgsaW1hZ2UsbGluZSxtYXJrZXIsbWFzayxtaXNzaW5nLWdseXBoLHBhdGgscGF0dGVybixwb2x5Z29uLHBvbHlsaW5lLHJlY3Qsc3dpdGNoLHN5bWJvbCx0ZXh0LHRleHRwYXRoLHRzcGFuLHVzZSx2aWV3XCIsITApLGVvPWZ1bmN0aW9uKGUpe3JldHVyblwicHJlXCI9PT1lfSx0bz1mdW5jdGlvbihlKXtyZXR1cm4gWmkoZSl8fFhpKGUpfSxubz1PYmplY3QuY3JlYXRlKG51bGwpLHJvPU9iamVjdC5mcmVlemUoe2NyZWF0ZUVsZW1lbnQ6UWUsY3JlYXRlRWxlbWVudE5TOlhlLGNyZWF0ZVRleHROb2RlOmV0LGNyZWF0ZUNvbW1lbnQ6dHQsaW5zZXJ0QmVmb3JlOm50LHJlbW92ZUNoaWxkOnJ0LGFwcGVuZENoaWxkOml0LHBhcmVudE5vZGU6b3QsbmV4dFNpYmxpbmc6YXQsdGFnTmFtZTpzdCxzZXRUZXh0Q29udGVudDpjdCxjaGlsZE5vZGVzOmx0LHNldEF0dHJpYnV0ZTp1dH0pLGlvPXtjcmVhdGU6ZnVuY3Rpb24oZSx0KXtmdCh0KX0sdXBkYXRlOmZ1bmN0aW9uKGUsdCl7ZS5kYXRhLnJlZiE9PXQuZGF0YS5yZWYmJihmdChlLCEwKSxmdCh0KSl9LGRlc3Ryb3k6ZnVuY3Rpb24oZSl7ZnQoZSwhMCl9fSxvbz1uZXcgRWkoXCJcIix7fSxbXSksYW89W1wiY3JlYXRlXCIsXCJ1cGRhdGVcIixcInJlbW92ZVwiLFwiZGVzdHJveVwiXSxzbz17Y3JlYXRlOmd0LHVwZGF0ZTpndCxkZXN0cm95OmZ1bmN0aW9uKGUpe2d0KGUsb28pfX0sY289T2JqZWN0LmNyZWF0ZShudWxsKSxsbz1baW8sc29dLHVvPXtjcmVhdGU6JHQsdXBkYXRlOiR0fSxmbz17Y3JlYXRlOnh0LHVwZGF0ZTp4dH0scG89e2NyZWF0ZTpDdCx1cGRhdGU6Q3R9LHZvPXtjcmVhdGU6a3QsdXBkYXRlOmt0fSxobz1hKGZ1bmN0aW9uKGUpe3ZhciB0PXt9LG49ZS5pbmRleE9mKFwiYmFja2dyb3VuZFwiKT49MCxyPW4/LzsoPyFbXihdKlxcKSkvZzpcIjtcIixpPW4/LzooLispLzpcIjpcIjtyZXR1cm4gZS5zcGxpdChyKS5mb3JFYWNoKGZ1bmN0aW9uKGUpe2lmKGUpe3ZhciBuPWUuc3BsaXQoaSk7bi5sZW5ndGg+MSYmKHRbblswXS50cmltKCldPW5bMV0udHJpbSgpKX19KSx0fSksbW89L14tLS8sZ289ZnVuY3Rpb24oZSx0LG4pe21vLnRlc3QodCk/ZS5zdHlsZS5zZXRQcm9wZXJ0eSh0LG4pOmUuc3R5bGVbX28odCldPW59LHlvPVtcIldlYmtpdFwiLFwiTW96XCIsXCJtc1wiXSxfbz1hKGZ1bmN0aW9uKGUpe2lmKEJpPUJpfHxkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLGU9VnIoZSksXCJmaWx0ZXJcIiE9PWUmJmUgaW4gQmkuc3R5bGUpcmV0dXJuIGU7Zm9yKHZhciB0PWUuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkrZS5zbGljZSgxKSxuPTA7bjx5by5sZW5ndGg7bisrKXt2YXIgcj15b1tuXSt0O2lmKHIgaW4gQmkuc3R5bGUpcmV0dXJuIHJ9fSksYm89e2NyZWF0ZTpUdCx1cGRhdGU6VHR9LCRvPVFyJiYhdGksd289XCJ0cmFuc2l0aW9uXCIseG89XCJhbmltYXRpb25cIixDbz1cInRyYW5zaXRpb25cIixrbz1cInRyYW5zaXRpb25lbmRcIixBbz1cImFuaW1hdGlvblwiLE9vPVwiYW5pbWF0aW9uZW5kXCI7JG8mJih2b2lkIDA9PT13aW5kb3cub250cmFuc2l0aW9uZW5kJiZ2b2lkIDAhPT13aW5kb3cub253ZWJraXR0cmFuc2l0aW9uZW5kJiYoQ289XCJXZWJraXRUcmFuc2l0aW9uXCIsa289XCJ3ZWJraXRUcmFuc2l0aW9uRW5kXCIpLHZvaWQgMD09PXdpbmRvdy5vbmFuaW1hdGlvbmVuZCYmdm9pZCAwIT09d2luZG93Lm9ud2Via2l0YW5pbWF0aW9uZW5kJiYoQW89XCJXZWJraXRBbmltYXRpb25cIixPbz1cIndlYmtpdEFuaW1hdGlvbkVuZFwiKSk7dmFyIFNvPVFyJiZ3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lfHxzZXRUaW1lb3V0LFRvPS9cXGIodHJhbnNmb3JtfGFsbCkoLHwkKS8sam89YShmdW5jdGlvbihlKXtyZXR1cm57ZW50ZXJDbGFzczplK1wiLWVudGVyXCIsbGVhdmVDbGFzczplK1wiLWxlYXZlXCIsYXBwZWFyQ2xhc3M6ZStcIi1lbnRlclwiLGVudGVyQWN0aXZlQ2xhc3M6ZStcIi1lbnRlci1hY3RpdmVcIixsZWF2ZUFjdGl2ZUNsYXNzOmUrXCItbGVhdmUtYWN0aXZlXCIsYXBwZWFyQWN0aXZlQ2xhc3M6ZStcIi1lbnRlci1hY3RpdmVcIn19KSxFbz1Rcj97Y3JlYXRlOmZ1bmN0aW9uKGUsdCl7dC5kYXRhLnNob3d8fEZ0KHQpfSxyZW1vdmU6ZnVuY3Rpb24oZSx0KXtlLmRhdGEuc2hvdz90KCk6QnQoZSx0KX19Ont9LE5vPVt1byxmbyxwbyx2byxibyxFb10sTG89Tm8uY29uY2F0KGxvKSxEbz1tdCh7bm9kZU9wczpybyxtb2R1bGVzOkxvfSk7dGkmJmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJzZWxlY3Rpb25jaGFuZ2VcIixmdW5jdGlvbigpe3ZhciBlPWRvY3VtZW50LmFjdGl2ZUVsZW1lbnQ7ZSYmZS52bW9kZWwmJld0KGUsXCJpbnB1dFwiKX0pO3ZhciBNbz17aW5zZXJ0ZWQ6ZnVuY3Rpb24oZSx0LG4pe2lmKFwic2VsZWN0XCI9PT1uLnRhZyl7dmFyIHI9ZnVuY3Rpb24oKXtWdChlLHQsbi5jb250ZXh0KX07cigpLChlaXx8bmkpJiZzZXRUaW1lb3V0KHIsMCl9ZWxzZVwidGV4dGFyZWFcIiE9PW4udGFnJiZcInRleHRcIiE9PWUudHlwZXx8dC5tb2RpZmllcnMubGF6eXx8KHJpfHwoZS5hZGRFdmVudExpc3RlbmVyKFwiY29tcG9zaXRpb25zdGFydFwiLEt0KSxlLmFkZEV2ZW50TGlzdGVuZXIoXCJjb21wb3NpdGlvbmVuZFwiLHF0KSksdGkmJihlLnZtb2RlbD0hMCkpfSxjb21wb25lbnRVcGRhdGVkOmZ1bmN0aW9uKGUsdCxuKXtpZihcInNlbGVjdFwiPT09bi50YWcpe1Z0KGUsdCxuLmNvbnRleHQpO3ZhciByPWUubXVsdGlwbGU/dC52YWx1ZS5zb21lKGZ1bmN0aW9uKHQpe3JldHVybiB6dCh0LGUub3B0aW9ucyl9KTp0LnZhbHVlIT09dC5vbGRWYWx1ZSYmenQodC52YWx1ZSxlLm9wdGlvbnMpO3ImJld0KGUsXCJjaGFuZ2VcIil9fX0sUG89e2JpbmQ6ZnVuY3Rpb24oZSx0LG4pe3ZhciByPXQudmFsdWU7bj1adChuKTt2YXIgaT1uLmRhdGEmJm4uZGF0YS50cmFuc2l0aW9uO3ImJmkmJiF0aSYmRnQobik7dmFyIG89XCJub25lXCI9PT1lLnN0eWxlLmRpc3BsYXk/XCJcIjplLnN0eWxlLmRpc3BsYXk7ZS5zdHlsZS5kaXNwbGF5PXI/bzpcIm5vbmVcIixlLl9fdk9yaWdpbmFsRGlzcGxheT1vfSx1cGRhdGU6ZnVuY3Rpb24oZSx0LG4pe3ZhciByPXQudmFsdWUsaT10Lm9sZFZhbHVlO2lmKHIhPT1pKXtuPVp0KG4pO3ZhciBvPW4uZGF0YSYmbi5kYXRhLnRyYW5zaXRpb247byYmIXRpP3I/KEZ0KG4pLGUuc3R5bGUuZGlzcGxheT1lLl9fdk9yaWdpbmFsRGlzcGxheSk6QnQobixmdW5jdGlvbigpe2Uuc3R5bGUuZGlzcGxheT1cIm5vbmVcIn0pOmUuc3R5bGUuZGlzcGxheT1yP2UuX192T3JpZ2luYWxEaXNwbGF5Olwibm9uZVwifX19LFJvPXttb2RlbDpNbyxzaG93OlBvfSxJbz17bmFtZTpTdHJpbmcsYXBwZWFyOkJvb2xlYW4sY3NzOkJvb2xlYW4sbW9kZTpTdHJpbmcsdHlwZTpTdHJpbmcsZW50ZXJDbGFzczpTdHJpbmcsbGVhdmVDbGFzczpTdHJpbmcsZW50ZXJBY3RpdmVDbGFzczpTdHJpbmcsbGVhdmVBY3RpdmVDbGFzczpTdHJpbmcsYXBwZWFyQ2xhc3M6U3RyaW5nLGFwcGVhckFjdGl2ZUNsYXNzOlN0cmluZ30sRm89e25hbWU6XCJ0cmFuc2l0aW9uXCIscHJvcHM6SW8sYWJzdHJhY3Q6ITAsXG5yZW5kZXI6ZnVuY3Rpb24oZSl7dmFyIHQ9dGhpcyxuPXRoaXMuJHNsb3RzLmRlZmF1bHQ7aWYobiYmKG49bi5maWx0ZXIoZnVuY3Rpb24oZSl7cmV0dXJuIGUudGFnfSksbi5sZW5ndGgpKXt2YXIgcj10aGlzLm1vZGUsaT1uWzBdO2lmKFh0KHRoaXMuJHZub2RlKSlyZXR1cm4gaTt2YXIgbz1HdChpKTtpZighbylyZXR1cm4gaTtpZih0aGlzLl9sZWF2aW5nKXJldHVybiBRdChlLGkpO3ZhciBhPW8ua2V5PW51bGw9PW8ua2V5fHxvLmlzU3RhdGljP1wiX192XCIrKG8udGFnK3RoaXMuX3VpZCkrXCJfX1wiOm8ua2V5LHM9KG8uZGF0YXx8KG8uZGF0YT17fSkpLnRyYW5zaXRpb249WXQodGhpcyksYz10aGlzLl92bm9kZSx1PUd0KGMpO2lmKG8uZGF0YS5kaXJlY3RpdmVzJiZvLmRhdGEuZGlyZWN0aXZlcy5zb21lKGZ1bmN0aW9uKGUpe3JldHVyblwic2hvd1wiPT09ZS5uYW1lfSkmJihvLmRhdGEuc2hvdz0hMCksdSYmdS5kYXRhJiZ1LmtleSE9PWEpe3ZhciBmPXUuZGF0YS50cmFuc2l0aW9uPWwoe30scyk7aWYoXCJvdXQtaW5cIj09PXIpcmV0dXJuIHRoaXMuX2xlYXZpbmc9ITAsaWUoZixcImFmdGVyTGVhdmVcIixmdW5jdGlvbigpe3QuX2xlYXZpbmc9ITEsdC4kZm9yY2VVcGRhdGUoKX0sYSksUXQoZSxpKTtpZihcImluLW91dFwiPT09cil7dmFyIGQscD1mdW5jdGlvbigpe2QoKX07aWUocyxcImFmdGVyRW50ZXJcIixwLGEpLGllKHMsXCJlbnRlckNhbmNlbGxlZFwiLHAsYSksaWUoZixcImRlbGF5TGVhdmVcIixmdW5jdGlvbihlKXtkPWV9LGEpfX1yZXR1cm4gaX19fSxCbz1sKHt0YWc6U3RyaW5nLG1vdmVDbGFzczpTdHJpbmd9LElvKTtkZWxldGUgQm8ubW9kZTt2YXIgVW89e3Byb3BzOkJvLHJlbmRlcjpmdW5jdGlvbihlKXtmb3IodmFyIHQ9dGhpcy50YWd8fHRoaXMuJHZub2RlLmRhdGEudGFnfHxcInNwYW5cIixuPU9iamVjdC5jcmVhdGUobnVsbCkscj10aGlzLnByZXZDaGlsZHJlbj10aGlzLmNoaWxkcmVuLGk9dGhpcy4kc2xvdHMuZGVmYXVsdHx8W10sbz10aGlzLmNoaWxkcmVuPVtdLGE9WXQodGhpcykscz0wO3M8aS5sZW5ndGg7cysrKXt2YXIgYz1pW3NdO2MudGFnJiZudWxsIT1jLmtleSYmMCE9PVN0cmluZyhjLmtleSkuaW5kZXhPZihcIl9fdmxpc3RcIikmJihvLnB1c2goYyksbltjLmtleV09YywoYy5kYXRhfHwoYy5kYXRhPXt9KSkudHJhbnNpdGlvbj1hKX1pZihyKXtmb3IodmFyIGw9W10sdT1bXSxmPTA7ZjxyLmxlbmd0aDtmKyspe3ZhciBkPXJbZl07ZC5kYXRhLnRyYW5zaXRpb249YSxkLmRhdGEucG9zPWQuZWxtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLG5bZC5rZXldP2wucHVzaChkKTp1LnB1c2goZCl9dGhpcy5rZXB0PWUodCxudWxsLGwpLHRoaXMucmVtb3ZlZD11fXJldHVybiBlKHQsbnVsbCxvKX0sYmVmb3JlVXBkYXRlOmZ1bmN0aW9uKCl7dGhpcy5fX3BhdGNoX18odGhpcy5fdm5vZGUsdGhpcy5rZXB0LCExLCEwKSx0aGlzLl92bm9kZT10aGlzLmtlcHR9LHVwZGF0ZWQ6ZnVuY3Rpb24oKXt2YXIgZT10aGlzLnByZXZDaGlsZHJlbix0PXRoaXMubW92ZUNsYXNzfHwodGhpcy5uYW1lfHxcInZcIikrXCItbW92ZVwiO2lmKGUubGVuZ3RoJiZ0aGlzLmhhc01vdmUoZVswXS5lbG0sdCkpe2UuZm9yRWFjaChlbiksZS5mb3JFYWNoKHRuKSxlLmZvckVhY2gobm4pO2RvY3VtZW50LmJvZHkub2Zmc2V0SGVpZ2h0O2UuZm9yRWFjaChmdW5jdGlvbihlKXtpZihlLmRhdGEubW92ZWQpe3ZhciBuPWUuZWxtLHI9bi5zdHlsZTtMdChuLHQpLHIudHJhbnNmb3JtPXIuV2Via2l0VHJhbnNmb3JtPXIudHJhbnNpdGlvbkR1cmF0aW9uPVwiXCIsbi5hZGRFdmVudExpc3RlbmVyKGtvLG4uX21vdmVDYj1mdW5jdGlvbiBlKHIpe3ImJiEvdHJhbnNmb3JtJC8udGVzdChyLnByb3BlcnR5TmFtZSl8fChuLnJlbW92ZUV2ZW50TGlzdGVuZXIoa28sZSksbi5fbW92ZUNiPW51bGwsRHQobix0KSl9KX19KX19LG1ldGhvZHM6e2hhc01vdmU6ZnVuY3Rpb24oZSx0KXtpZighJG8pcmV0dXJuITE7aWYobnVsbCE9dGhpcy5faGFzTW92ZSlyZXR1cm4gdGhpcy5faGFzTW92ZTtMdChlLHQpO3ZhciBuPVB0KGUpO3JldHVybiBEdChlLHQpLHRoaXMuX2hhc01vdmU9bi5oYXNUcmFuc2Zvcm19fX0sSG89e1RyYW5zaXRpb246Rm8sVHJhbnNpdGlvbkdyb3VwOlVvfTtSZS5jb25maWcuaXNVbmtub3duRWxlbWVudD1HZSxSZS5jb25maWcuaXNSZXNlcnZlZFRhZz10byxSZS5jb25maWcuZ2V0VGFnTmFtZXNwYWNlPVplLFJlLmNvbmZpZy5tdXN0VXNlUHJvcD1VaSxsKFJlLm9wdGlvbnMuZGlyZWN0aXZlcyxSbyksbChSZS5vcHRpb25zLmNvbXBvbmVudHMsSG8pLFJlLnByb3RvdHlwZS5fX3BhdGNoX189UXI/RG86cCxSZS5wcm90b3R5cGUuJG1vdW50PWZ1bmN0aW9uKGUsdCl7cmV0dXJuIGU9ZSYmUXI/WWUoZSk6dm9pZCAwLHRoaXMuX21vdW50KGUsdCl9LHNldFRpbWVvdXQoZnVuY3Rpb24oKXtsaS5kZXZ0b29scyYmYWkmJmFpLmVtaXQoXCJpbml0XCIsUmUpfSwwKTt2YXIgVm8sem89ISFRciYmcm4oXCJcXG5cIixcIiYjMTA7XCIpLEpvPS8oW15cXHNcIic8PlxcLz1dKykvLEtvPS8oPzo9KS8scW89Wy9cIihbXlwiXSopXCIrLy5zb3VyY2UsLycoW14nXSopJysvLnNvdXJjZSwvKFteXFxzXCInPTw+YF0rKS8uc291cmNlXSxXbz1uZXcgUmVnRXhwKFwiXlxcXFxzKlwiK0pvLnNvdXJjZStcIig/OlxcXFxzKihcIitLby5zb3VyY2UrXCIpXFxcXHMqKD86XCIrcW8uam9pbihcInxcIikrXCIpKT9cIiksWm89XCJbYS16QS1aX11bXFxcXHdcXFxcLVxcXFwuXSpcIixHbz1cIigoPzpcIitabytcIlxcXFw6KT9cIitabytcIilcIixZbz1uZXcgUmVnRXhwKFwiXjxcIitHbyksUW89L15cXHMqKFxcLz8pPi8sWG89bmV3IFJlZ0V4cChcIl48XFxcXC9cIitHbytcIltePl0qPlwiKSxlYT0vXjwhRE9DVFlQRSBbXj5dKz4vaSx0YT0vXjwhLS0vLG5hPS9ePCFcXFsvLHJhPSExO1wieFwiLnJlcGxhY2UoL3goLik/L2csZnVuY3Rpb24oZSx0KXtyYT1cIlwiPT09dH0pO3ZhciBpYSxvYSxhYSxzYSxjYSxsYSx1YSxmYSxkYSxwYSx2YSxoYSxtYSxnYSx5YSxfYSxiYSwkYSx3YSx4YSxDYSxrYSxBYSxPYSxTYT1uKFwic2NyaXB0LHN0eWxlXCIsITApLFRhPWZ1bmN0aW9uKGUpe3JldHVyblwibGFuZ1wiPT09ZS5uYW1lJiZcImh0bWxcIiE9PWUudmFsdWV9LGphPWZ1bmN0aW9uKGUsdCxuKXtyZXR1cm4hIVNhKGUpfHwhIXQmJiEoXCJ0ZW1wbGF0ZVwiPT09ZSYmMT09PW4ubGVuZ3RoJiYhblswXS5hdHRycy5zb21lKFRhKSl9LEVhPXt9LE5hPS8mbHQ7L2csTGE9LyZndDsvZyxEYT0vJiMxMDsvZyxNYT0vJmFtcDsvZyxQYT0vJnF1b3Q7L2csUmE9L1xce1xceygoPzoufFxcbikrPylcXH1cXH0vZyxJYT0vWy0uKis/XiR7fSgpfFtcXF1cXC9cXFxcXS9nLEZhPWEoZnVuY3Rpb24oZSl7dmFyIHQ9ZVswXS5yZXBsYWNlKElhLFwiXFxcXCQmXCIpLG49ZVsxXS5yZXBsYWNlKElhLFwiXFxcXCQmXCIpO3JldHVybiBuZXcgUmVnRXhwKHQrXCIoKD86LnxcXFxcbikrPylcIituLFwiZ1wiKX0pLEJhPS9edi18XkB8XjovLFVhPS8oLio/KVxccysoPzppbnxvZilcXHMrKC4qKS8sSGE9L1xcKChcXHtbXn1dKlxcfXxbXixdKiksKFteLF0qKSg/OiwoW14sXSopKT9cXCkvLFZhPS9eOnxedi1iaW5kOi8semE9L15AfF52LW9uOi8sSmE9LzooLiopJC8sS2E9L1xcLlteLl0rL2cscWE9YShvbiksV2E9L154bWxuczpOU1xcZCsvLFphPS9eTlNcXGQrOi8sR2E9YShKbiksWWE9L15cXHMqKFtcXHckX10rfFxcKFteKV0qP1xcKSlcXHMqPT58XmZ1bmN0aW9uXFxzKlxcKC8sUWE9L15cXHMqW0EtWmEtel8kXVtcXHckXSooPzpcXC5bQS1aYS16XyRdW1xcdyRdKnxcXFsnLio/J118XFxbXCIuKj9cIl18XFxbXFxkK118XFxbW0EtWmEtel8kXVtcXHckXSpdKSpcXHMqJC8sWGE9e2VzYzoyNyx0YWI6OSxlbnRlcjoxMyxzcGFjZTozMix1cDozOCxsZWZ0OjM3LHJpZ2h0OjM5LGRvd246NDAsZGVsZXRlOls4LDQ2XX0sZXM9e3N0b3A6XCIkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XCIscHJldmVudDpcIiRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1wiLHNlbGY6XCJpZigkZXZlbnQudGFyZ2V0ICE9PSAkZXZlbnQuY3VycmVudFRhcmdldClyZXR1cm47XCJ9LHRzPS9ebW91c2V8XnBvaW50ZXJ8XihjbGlja3xkYmxjbGlja3xjb250ZXh0bWVudXx3aGVlbCkkLyxucz17Y3RybDpcImlmKCEkZXZlbnQuY3RybEtleSlyZXR1cm47XCIsc2hpZnQ6XCJpZighJGV2ZW50LnNoaWZ0S2V5KXJldHVybjtcIixhbHQ6XCJpZighJGV2ZW50LmFsdEtleSlyZXR1cm47XCIsbWV0YTpcImlmKCEkZXZlbnQubWV0YUtleSlyZXR1cm47XCJ9LHJzPXtiaW5kOnRyLGNsb2FrOnB9LGlzPShuZXcgUmVnRXhwKFwiXFxcXGJcIitcImRvLGlmLGZvcixsZXQsbmV3LHRyeSx2YXIsY2FzZSxlbHNlLHdpdGgsYXdhaXQsYnJlYWssY2F0Y2gsY2xhc3MsY29uc3Qsc3VwZXIsdGhyb3csd2hpbGUseWllbGQsZGVsZXRlLGV4cG9ydCxpbXBvcnQscmV0dXJuLHN3aXRjaCxkZWZhdWx0LGV4dGVuZHMsZmluYWxseSxjb250aW51ZSxkZWJ1Z2dlcixmdW5jdGlvbixhcmd1bWVudHNcIi5zcGxpdChcIixcIikuam9pbihcIlxcXFxifFxcXFxiXCIpK1wiXFxcXGJcIikse3N0YXRpY0tleXM6W1wic3RhdGljQ2xhc3NcIl0sdHJhbnNmb3JtTm9kZTp3cixnZW5EYXRhOnhyfSksb3M9e3N0YXRpY0tleXM6W1wic3RhdGljU3R5bGVcIl0sdHJhbnNmb3JtTm9kZTpDcixnZW5EYXRhOmtyfSxhcz1baXMsb3NdLHNzPXttb2RlbDpBcix0ZXh0Ok5yLGh0bWw6THJ9LGNzPU9iamVjdC5jcmVhdGUobnVsbCksbHM9e2V4cGVjdEhUTUw6ITAsbW9kdWxlczphcyxzdGF0aWNLZXlzOnYoYXMpLGRpcmVjdGl2ZXM6c3MsaXNSZXNlcnZlZFRhZzp0byxpc1VuYXJ5VGFnOkdpLG11c3RVc2VQcm9wOlVpLGdldFRhZ05hbWVzcGFjZTpaZSxpc1ByZVRhZzplb30sdXM9YShmdW5jdGlvbihlKXt2YXIgdD1ZZShlKTtyZXR1cm4gdCYmdC5pbm5lckhUTUx9KSxmcz1SZS5wcm90b3R5cGUuJG1vdW50O3JldHVybiBSZS5wcm90b3R5cGUuJG1vdW50PWZ1bmN0aW9uKGUsdCl7aWYoZT1lJiZZZShlKSxlPT09ZG9jdW1lbnQuYm9keXx8ZT09PWRvY3VtZW50LmRvY3VtZW50RWxlbWVudClyZXR1cm4gdGhpczt2YXIgbj10aGlzLiRvcHRpb25zO2lmKCFuLnJlbmRlcil7dmFyIHI9bi50ZW1wbGF0ZTtpZihyKWlmKFwic3RyaW5nXCI9PXR5cGVvZiByKVwiI1wiPT09ci5jaGFyQXQoMCkmJihyPXVzKHIpKTtlbHNle2lmKCFyLm5vZGVUeXBlKXJldHVybiB0aGlzO3I9ci5pbm5lckhUTUx9ZWxzZSBlJiYocj1ScihlKSk7aWYocil7dmFyIGk9TXIocix7d2Fybjp1aSxzaG91bGREZWNvZGVOZXdsaW5lczp6byxkZWxpbWl0ZXJzOm4uZGVsaW1pdGVyc30sdGhpcyksbz1pLnJlbmRlcixhPWkuc3RhdGljUmVuZGVyRm5zO24ucmVuZGVyPW8sbi5zdGF0aWNSZW5kZXJGbnM9YX19cmV0dXJuIGZzLmNhbGwodGhpcyxlLHQpfSxSZS5jb21waWxlPU1yLFJlfSk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vRTovVGVzdFdvcmsvdnVlL34vdnVlL2Rpc3QvdnVlLm1pbi5qcyIsIi8qKlxuICogdnVlLXJvdXRlciB2Mi4wLjNcbiAqIChjKSAyMDE2IEV2YW4gWW91XG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuKGZ1bmN0aW9uIChnbG9iYWwsIGZhY3RvcnkpIHtcbiAgdHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnID8gbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCkgOlxuICB0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQgPyBkZWZpbmUoZmFjdG9yeSkgOlxuICAoZ2xvYmFsLlZ1ZVJvdXRlciA9IGZhY3RvcnkoKSk7XG59KHRoaXMsIChmdW5jdGlvbiAoKSB7ICd1c2Ugc3RyaWN0JztcblxudmFyIFZpZXcgPSB7XG4gIG5hbWU6ICdyb3V0ZXItdmlldycsXG4gIGZ1bmN0aW9uYWw6IHRydWUsXG4gIHByb3BzOiB7XG4gICAgbmFtZToge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdDogJ2RlZmF1bHQnXG4gICAgfVxuICB9LFxuICByZW5kZXI6IGZ1bmN0aW9uIHJlbmRlciAoaCwgcmVmKSB7XG4gICAgdmFyIHByb3BzID0gcmVmLnByb3BzO1xuICAgIHZhciBjaGlsZHJlbiA9IHJlZi5jaGlsZHJlbjtcbiAgICB2YXIgcGFyZW50ID0gcmVmLnBhcmVudDtcbiAgICB2YXIgZGF0YSA9IHJlZi5kYXRhO1xuXG4gICAgZGF0YS5yb3V0ZXJWaWV3ID0gdHJ1ZVxuXG4gICAgdmFyIHJvdXRlID0gcGFyZW50LiRyb3V0ZVxuICAgIHZhciBjYWNoZSA9IHBhcmVudC5fcm91dGVyVmlld0NhY2hlIHx8IChwYXJlbnQuX3JvdXRlclZpZXdDYWNoZSA9IHt9KVxuICAgIHZhciBkZXB0aCA9IDBcbiAgICB2YXIgaW5hY3RpdmUgPSBmYWxzZVxuXG4gICAgd2hpbGUgKHBhcmVudCkge1xuICAgICAgaWYgKHBhcmVudC4kdm5vZGUgJiYgcGFyZW50LiR2bm9kZS5kYXRhLnJvdXRlclZpZXcpIHtcbiAgICAgICAgZGVwdGgrK1xuICAgICAgfVxuICAgICAgaWYgKHBhcmVudC5faW5hY3RpdmUpIHtcbiAgICAgICAgaW5hY3RpdmUgPSB0cnVlXG4gICAgICB9XG4gICAgICBwYXJlbnQgPSBwYXJlbnQuJHBhcmVudFxuICAgIH1cblxuICAgIGRhdGEucm91dGVyVmlld0RlcHRoID0gZGVwdGhcbiAgICB2YXIgbWF0Y2hlZCA9IHJvdXRlLm1hdGNoZWRbZGVwdGhdXG4gICAgaWYgKCFtYXRjaGVkKSB7XG4gICAgICByZXR1cm4gaCgpXG4gICAgfVxuXG4gICAgdmFyIG5hbWUgPSBwcm9wcy5uYW1lXG4gICAgdmFyIGNvbXBvbmVudCA9IGluYWN0aXZlXG4gICAgICA/IGNhY2hlW25hbWVdXG4gICAgICA6IChjYWNoZVtuYW1lXSA9IG1hdGNoZWQuY29tcG9uZW50c1tuYW1lXSlcblxuICAgIGlmICghaW5hY3RpdmUpIHtcbiAgICAgIHZhciBob29rcyA9IGRhdGEuaG9vayB8fCAoZGF0YS5ob29rID0ge30pXG4gICAgICBob29rcy5pbml0ID0gZnVuY3Rpb24gKHZub2RlKSB7XG4gICAgICAgIG1hdGNoZWQuaW5zdGFuY2VzW25hbWVdID0gdm5vZGUuY2hpbGRcbiAgICAgIH1cbiAgICAgIGhvb2tzLnByZXBhdGNoID0gZnVuY3Rpb24gKG9sZFZub2RlLCB2bm9kZSkge1xuICAgICAgICBtYXRjaGVkLmluc3RhbmNlc1tuYW1lXSA9IHZub2RlLmNoaWxkXG4gICAgICB9XG4gICAgICBob29rcy5kZXN0cm95ID0gZnVuY3Rpb24gKHZub2RlKSB7XG4gICAgICAgIGlmIChtYXRjaGVkLmluc3RhbmNlc1tuYW1lXSA9PT0gdm5vZGUuY2hpbGQpIHtcbiAgICAgICAgICBtYXRjaGVkLmluc3RhbmNlc1tuYW1lXSA9IHVuZGVmaW5lZFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGgoY29tcG9uZW50LCBkYXRhLCBjaGlsZHJlbilcbiAgfVxufVxuXG4vKiAgKi9cblxuZnVuY3Rpb24gcmVzb2x2ZVBhdGggKFxuICByZWxhdGl2ZSxcbiAgYmFzZSxcbiAgYXBwZW5kXG4pIHtcbiAgaWYgKHJlbGF0aXZlLmNoYXJBdCgwKSA9PT0gJy8nKSB7XG4gICAgcmV0dXJuIHJlbGF0aXZlXG4gIH1cblxuICBpZiAocmVsYXRpdmUuY2hhckF0KDApID09PSAnPycgfHwgcmVsYXRpdmUuY2hhckF0KDApID09PSAnIycpIHtcbiAgICByZXR1cm4gYmFzZSArIHJlbGF0aXZlXG4gIH1cblxuICB2YXIgc3RhY2sgPSBiYXNlLnNwbGl0KCcvJylcblxuICAvLyByZW1vdmUgdHJhaWxpbmcgc2VnbWVudCBpZjpcbiAgLy8gLSBub3QgYXBwZW5kaW5nXG4gIC8vIC0gYXBwZW5kaW5nIHRvIHRyYWlsaW5nIHNsYXNoIChsYXN0IHNlZ21lbnQgaXMgZW1wdHkpXG4gIGlmICghYXBwZW5kIHx8ICFzdGFja1tzdGFjay5sZW5ndGggLSAxXSkge1xuICAgIHN0YWNrLnBvcCgpXG4gIH1cblxuICAvLyByZXNvbHZlIHJlbGF0aXZlIHBhdGhcbiAgdmFyIHNlZ21lbnRzID0gcmVsYXRpdmUucmVwbGFjZSgvXlxcLy8sICcnKS5zcGxpdCgnLycpXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc2VnbWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgc2VnbWVudCA9IHNlZ21lbnRzW2ldXG4gICAgaWYgKHNlZ21lbnQgPT09ICcuJykge1xuICAgICAgY29udGludWVcbiAgICB9IGVsc2UgaWYgKHNlZ21lbnQgPT09ICcuLicpIHtcbiAgICAgIHN0YWNrLnBvcCgpXG4gICAgfSBlbHNlIHtcbiAgICAgIHN0YWNrLnB1c2goc2VnbWVudClcbiAgICB9XG4gIH1cblxuICAvLyBlbnN1cmUgbGVhZGluZyBzbGFzaFxuICBpZiAoc3RhY2tbMF0gIT09ICcnKSB7XG4gICAgc3RhY2sudW5zaGlmdCgnJylcbiAgfVxuXG4gIHJldHVybiBzdGFjay5qb2luKCcvJylcbn1cblxuZnVuY3Rpb24gcGFyc2VQYXRoIChwYXRoKSB7XG4gIHZhciBoYXNoID0gJydcbiAgdmFyIHF1ZXJ5ID0gJydcblxuICB2YXIgaGFzaEluZGV4ID0gcGF0aC5pbmRleE9mKCcjJylcbiAgaWYgKGhhc2hJbmRleCA+PSAwKSB7XG4gICAgaGFzaCA9IHBhdGguc2xpY2UoaGFzaEluZGV4KVxuICAgIHBhdGggPSBwYXRoLnNsaWNlKDAsIGhhc2hJbmRleClcbiAgfVxuXG4gIHZhciBxdWVyeUluZGV4ID0gcGF0aC5pbmRleE9mKCc/JylcbiAgaWYgKHF1ZXJ5SW5kZXggPj0gMCkge1xuICAgIHF1ZXJ5ID0gcGF0aC5zbGljZShxdWVyeUluZGV4ICsgMSlcbiAgICBwYXRoID0gcGF0aC5zbGljZSgwLCBxdWVyeUluZGV4KVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBwYXRoOiBwYXRoLFxuICAgIHF1ZXJ5OiBxdWVyeSxcbiAgICBoYXNoOiBoYXNoXG4gIH1cbn1cblxuZnVuY3Rpb24gY2xlYW5QYXRoIChwYXRoKSB7XG4gIHJldHVybiBwYXRoLnJlcGxhY2UoL1xcL1xcLy9nLCAnLycpXG59XG5cbi8qICAqL1xuXG5mdW5jdGlvbiBhc3NlcnQgKGNvbmRpdGlvbiwgbWVzc2FnZSkge1xuICBpZiAoIWNvbmRpdGlvbikge1xuICAgIHRocm93IG5ldyBFcnJvcigoXCJbdnVlLXJvdXRlcl0gXCIgKyBtZXNzYWdlKSlcbiAgfVxufVxuXG5mdW5jdGlvbiB3YXJuIChjb25kaXRpb24sIG1lc3NhZ2UpIHtcbiAgaWYgKCFjb25kaXRpb24pIHtcbiAgICB0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcgJiYgY29uc29sZS53YXJuKChcIlt2dWUtcm91dGVyXSBcIiArIG1lc3NhZ2UpKVxuICB9XG59XG5cbi8qICAqL1xuXG52YXIgZW5jb2RlID0gZW5jb2RlVVJJQ29tcG9uZW50XG52YXIgZGVjb2RlID0gZGVjb2RlVVJJQ29tcG9uZW50XG5cbmZ1bmN0aW9uIHJlc29sdmVRdWVyeSAoXG4gIHF1ZXJ5LFxuICBleHRyYVF1ZXJ5XG4pIHtcbiAgaWYgKCBleHRyYVF1ZXJ5ID09PSB2b2lkIDAgKSBleHRyYVF1ZXJ5ID0ge307XG5cbiAgaWYgKHF1ZXJ5KSB7XG4gICAgdmFyIHBhcnNlZFF1ZXJ5XG4gICAgdHJ5IHtcbiAgICAgIHBhcnNlZFF1ZXJ5ID0gcGFyc2VRdWVyeShxdWVyeSlcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICB3YXJuKGZhbHNlLCBlLm1lc3NhZ2UpXG4gICAgICBwYXJzZWRRdWVyeSA9IHt9XG4gICAgfVxuICAgIGZvciAodmFyIGtleSBpbiBleHRyYVF1ZXJ5KSB7XG4gICAgICBwYXJzZWRRdWVyeVtrZXldID0gZXh0cmFRdWVyeVtrZXldXG4gICAgfVxuICAgIHJldHVybiBwYXJzZWRRdWVyeVxuICB9IGVsc2Uge1xuICAgIHJldHVybiBleHRyYVF1ZXJ5XG4gIH1cbn1cblxuZnVuY3Rpb24gcGFyc2VRdWVyeSAocXVlcnkpIHtcbiAgdmFyIHJlcyA9IHt9XG5cbiAgcXVlcnkgPSBxdWVyeS50cmltKCkucmVwbGFjZSgvXihcXD98I3wmKS8sICcnKVxuXG4gIGlmICghcXVlcnkpIHtcbiAgICByZXR1cm4gcmVzXG4gIH1cblxuICBxdWVyeS5zcGxpdCgnJicpLmZvckVhY2goZnVuY3Rpb24gKHBhcmFtKSB7XG4gICAgdmFyIHBhcnRzID0gcGFyYW0ucmVwbGFjZSgvXFwrL2csICcgJykuc3BsaXQoJz0nKVxuICAgIHZhciBrZXkgPSBkZWNvZGUocGFydHMuc2hpZnQoKSlcbiAgICB2YXIgdmFsID0gcGFydHMubGVuZ3RoID4gMFxuICAgICAgPyBkZWNvZGUocGFydHMuam9pbignPScpKVxuICAgICAgOiBudWxsXG5cbiAgICBpZiAocmVzW2tleV0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmVzW2tleV0gPSB2YWxcbiAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkocmVzW2tleV0pKSB7XG4gICAgICByZXNba2V5XS5wdXNoKHZhbClcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzW2tleV0gPSBbcmVzW2tleV0sIHZhbF1cbiAgICB9XG4gIH0pXG5cbiAgcmV0dXJuIHJlc1xufVxuXG5mdW5jdGlvbiBzdHJpbmdpZnlRdWVyeSAob2JqKSB7XG4gIHZhciByZXMgPSBvYmogPyBPYmplY3Qua2V5cyhvYmopLnNvcnQoKS5tYXAoZnVuY3Rpb24gKGtleSkge1xuICAgIHZhciB2YWwgPSBvYmpba2V5XVxuXG4gICAgaWYgKHZhbCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gJydcbiAgICB9XG5cbiAgICBpZiAodmFsID09PSBudWxsKSB7XG4gICAgICByZXR1cm4gZW5jb2RlKGtleSlcbiAgICB9XG5cbiAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWwpKSB7XG4gICAgICB2YXIgcmVzdWx0ID0gW11cbiAgICAgIHZhbC5zbGljZSgpLmZvckVhY2goZnVuY3Rpb24gKHZhbDIpIHtcbiAgICAgICAgaWYgKHZhbDIgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICAgIGlmICh2YWwyID09PSBudWxsKSB7XG4gICAgICAgICAgcmVzdWx0LnB1c2goZW5jb2RlKGtleSkpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmVzdWx0LnB1c2goZW5jb2RlKGtleSkgKyAnPScgKyBlbmNvZGUodmFsMikpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICByZXR1cm4gcmVzdWx0LmpvaW4oJyYnKVxuICAgIH1cblxuICAgIHJldHVybiBlbmNvZGUoa2V5KSArICc9JyArIGVuY29kZSh2YWwpXG4gIH0pLmZpbHRlcihmdW5jdGlvbiAoeCkgeyByZXR1cm4geC5sZW5ndGggPiAwOyB9KS5qb2luKCcmJykgOiBudWxsXG4gIHJldHVybiByZXMgPyAoXCI/XCIgKyByZXMpIDogJydcbn1cblxuLyogICovXG5cbmZ1bmN0aW9uIGNyZWF0ZVJvdXRlIChcbiAgcmVjb3JkLFxuICBsb2NhdGlvbixcbiAgcmVkaXJlY3RlZEZyb21cbikge1xuICB2YXIgcm91dGUgPSB7XG4gICAgbmFtZTogbG9jYXRpb24ubmFtZSB8fCAocmVjb3JkICYmIHJlY29yZC5uYW1lKSxcbiAgICBtZXRhOiAocmVjb3JkICYmIHJlY29yZC5tZXRhKSB8fCB7fSxcbiAgICBwYXRoOiBsb2NhdGlvbi5wYXRoIHx8ICcvJyxcbiAgICBoYXNoOiBsb2NhdGlvbi5oYXNoIHx8ICcnLFxuICAgIHF1ZXJ5OiBsb2NhdGlvbi5xdWVyeSB8fCB7fSxcbiAgICBwYXJhbXM6IGxvY2F0aW9uLnBhcmFtcyB8fCB7fSxcbiAgICBmdWxsUGF0aDogZ2V0RnVsbFBhdGgobG9jYXRpb24pLFxuICAgIG1hdGNoZWQ6IHJlY29yZCA/IGZvcm1hdE1hdGNoKHJlY29yZCkgOiBbXVxuICB9XG4gIGlmIChyZWRpcmVjdGVkRnJvbSkge1xuICAgIHJvdXRlLnJlZGlyZWN0ZWRGcm9tID0gZ2V0RnVsbFBhdGgocmVkaXJlY3RlZEZyb20pXG4gIH1cbiAgcmV0dXJuIE9iamVjdC5mcmVlemUocm91dGUpXG59XG5cbi8vIHRoZSBzdGFydGluZyByb3V0ZSB0aGF0IHJlcHJlc2VudHMgdGhlIGluaXRpYWwgc3RhdGVcbnZhciBTVEFSVCA9IGNyZWF0ZVJvdXRlKG51bGwsIHtcbiAgcGF0aDogJy8nXG59KVxuXG5mdW5jdGlvbiBmb3JtYXRNYXRjaCAocmVjb3JkKSB7XG4gIHZhciByZXMgPSBbXVxuICB3aGlsZSAocmVjb3JkKSB7XG4gICAgcmVzLnVuc2hpZnQocmVjb3JkKVxuICAgIHJlY29yZCA9IHJlY29yZC5wYXJlbnRcbiAgfVxuICByZXR1cm4gcmVzXG59XG5cbmZ1bmN0aW9uIGdldEZ1bGxQYXRoIChyZWYpIHtcbiAgdmFyIHBhdGggPSByZWYucGF0aDtcbiAgdmFyIHF1ZXJ5ID0gcmVmLnF1ZXJ5OyBpZiAoIHF1ZXJ5ID09PSB2b2lkIDAgKSBxdWVyeSA9IHt9O1xuICB2YXIgaGFzaCA9IHJlZi5oYXNoOyBpZiAoIGhhc2ggPT09IHZvaWQgMCApIGhhc2ggPSAnJztcblxuICByZXR1cm4gKHBhdGggfHwgJy8nKSArIHN0cmluZ2lmeVF1ZXJ5KHF1ZXJ5KSArIGhhc2hcbn1cblxudmFyIHRyYWlsaW5nU2xhc2hSRSA9IC9cXC8kL1xuZnVuY3Rpb24gaXNTYW1lUm91dGUgKGEsIGIpIHtcbiAgaWYgKGIgPT09IFNUQVJUKSB7XG4gICAgcmV0dXJuIGEgPT09IGJcbiAgfSBlbHNlIGlmICghYikge1xuICAgIHJldHVybiBmYWxzZVxuICB9IGVsc2UgaWYgKGEucGF0aCAmJiBiLnBhdGgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgYS5wYXRoLnJlcGxhY2UodHJhaWxpbmdTbGFzaFJFLCAnJykgPT09IGIucGF0aC5yZXBsYWNlKHRyYWlsaW5nU2xhc2hSRSwgJycpICYmXG4gICAgICBhLmhhc2ggPT09IGIuaGFzaCAmJlxuICAgICAgaXNPYmplY3RFcXVhbChhLnF1ZXJ5LCBiLnF1ZXJ5KVxuICAgIClcbiAgfSBlbHNlIGlmIChhLm5hbWUgJiYgYi5uYW1lKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIGEubmFtZSA9PT0gYi5uYW1lICYmXG4gICAgICBhLmhhc2ggPT09IGIuaGFzaCAmJlxuICAgICAgaXNPYmplY3RFcXVhbChhLnF1ZXJ5LCBiLnF1ZXJ5KSAmJlxuICAgICAgaXNPYmplY3RFcXVhbChhLnBhcmFtcywgYi5wYXJhbXMpXG4gICAgKVxuICB9IGVsc2Uge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG59XG5cbmZ1bmN0aW9uIGlzT2JqZWN0RXF1YWwgKGEsIGIpIHtcbiAgaWYgKCBhID09PSB2b2lkIDAgKSBhID0ge307XG4gIGlmICggYiA9PT0gdm9pZCAwICkgYiA9IHt9O1xuXG4gIHZhciBhS2V5cyA9IE9iamVjdC5rZXlzKGEpXG4gIHZhciBiS2V5cyA9IE9iamVjdC5rZXlzKGIpXG4gIGlmIChhS2V5cy5sZW5ndGggIT09IGJLZXlzLmxlbmd0aCkge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG4gIHJldHVybiBhS2V5cy5ldmVyeShmdW5jdGlvbiAoa2V5KSB7IHJldHVybiBTdHJpbmcoYVtrZXldKSA9PT0gU3RyaW5nKGJba2V5XSk7IH0pXG59XG5cbmZ1bmN0aW9uIGlzSW5jbHVkZWRSb3V0ZSAoY3VycmVudCwgdGFyZ2V0KSB7XG4gIHJldHVybiAoXG4gICAgY3VycmVudC5wYXRoLmluZGV4T2YodGFyZ2V0LnBhdGgucmVwbGFjZSgvXFwvJC8sICcnKSkgPT09IDAgJiZcbiAgICAoIXRhcmdldC5oYXNoIHx8IGN1cnJlbnQuaGFzaCA9PT0gdGFyZ2V0Lmhhc2gpICYmXG4gICAgcXVlcnlJbmNsdWRlcyhjdXJyZW50LnF1ZXJ5LCB0YXJnZXQucXVlcnkpXG4gIClcbn1cblxuZnVuY3Rpb24gcXVlcnlJbmNsdWRlcyAoY3VycmVudCwgdGFyZ2V0KSB7XG4gIGZvciAodmFyIGtleSBpbiB0YXJnZXQpIHtcbiAgICBpZiAoIShrZXkgaW4gY3VycmVudCkpIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cbiAgfVxuICByZXR1cm4gdHJ1ZVxufVxuXG4vKiAgKi9cblxuZnVuY3Rpb24gbm9ybWFsaXplTG9jYXRpb24gKFxuICByYXcsXG4gIGN1cnJlbnQsXG4gIGFwcGVuZFxuKSB7XG4gIHZhciBuZXh0ID0gdHlwZW9mIHJhdyA9PT0gJ3N0cmluZycgPyB7IHBhdGg6IHJhdyB9IDogcmF3XG4gIGlmIChuZXh0Lm5hbWUgfHwgbmV4dC5fbm9ybWFsaXplZCkge1xuICAgIHJldHVybiBuZXh0XG4gIH1cblxuICB2YXIgcGFyc2VkUGF0aCA9IHBhcnNlUGF0aChuZXh0LnBhdGggfHwgJycpXG4gIHZhciBiYXNlUGF0aCA9IChjdXJyZW50ICYmIGN1cnJlbnQucGF0aCkgfHwgJy8nXG4gIHZhciBwYXRoID0gcGFyc2VkUGF0aC5wYXRoXG4gICAgPyByZXNvbHZlUGF0aChwYXJzZWRQYXRoLnBhdGgsIGJhc2VQYXRoLCBhcHBlbmQpXG4gICAgOiAoY3VycmVudCAmJiBjdXJyZW50LnBhdGgpIHx8ICcvJ1xuICB2YXIgcXVlcnkgPSByZXNvbHZlUXVlcnkocGFyc2VkUGF0aC5xdWVyeSwgbmV4dC5xdWVyeSlcbiAgdmFyIGhhc2ggPSBuZXh0Lmhhc2ggfHwgcGFyc2VkUGF0aC5oYXNoXG4gIGlmIChoYXNoICYmIGhhc2guY2hhckF0KDApICE9PSAnIycpIHtcbiAgICBoYXNoID0gXCIjXCIgKyBoYXNoXG4gIH1cblxuICByZXR1cm4ge1xuICAgIF9ub3JtYWxpemVkOiB0cnVlLFxuICAgIHBhdGg6IHBhdGgsXG4gICAgcXVlcnk6IHF1ZXJ5LFxuICAgIGhhc2g6IGhhc2hcbiAgfVxufVxuXG4vKiAgKi9cblxuLy8gd29yayBhcm91bmQgd2VpcmQgZmxvdyBidWdcbnZhciB0b1R5cGVzID0gW1N0cmluZywgT2JqZWN0XVxuXG52YXIgTGluayA9IHtcbiAgbmFtZTogJ3JvdXRlci1saW5rJyxcbiAgcHJvcHM6IHtcbiAgICB0bzoge1xuICAgICAgdHlwZTogdG9UeXBlcyxcbiAgICAgIHJlcXVpcmVkOiB0cnVlXG4gICAgfSxcbiAgICB0YWc6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQ6ICdhJ1xuICAgIH0sXG4gICAgZXhhY3Q6IEJvb2xlYW4sXG4gICAgYXBwZW5kOiBCb29sZWFuLFxuICAgIHJlcGxhY2U6IEJvb2xlYW4sXG4gICAgYWN0aXZlQ2xhc3M6IFN0cmluZ1xuICB9LFxuICByZW5kZXI6IGZ1bmN0aW9uIHJlbmRlciAoaCkge1xuICAgIHZhciB0aGlzJDEgPSB0aGlzO1xuXG4gICAgdmFyIHJvdXRlciA9IHRoaXMuJHJvdXRlclxuICAgIHZhciBjdXJyZW50ID0gdGhpcy4kcm91dGVcbiAgICB2YXIgdG8gPSBub3JtYWxpemVMb2NhdGlvbih0aGlzLnRvLCBjdXJyZW50LCB0aGlzLmFwcGVuZClcbiAgICB2YXIgcmVzb2x2ZWQgPSByb3V0ZXIubWF0Y2godG8sIGN1cnJlbnQpXG4gICAgdmFyIGZ1bGxQYXRoID0gcmVzb2x2ZWQucmVkaXJlY3RlZEZyb20gfHwgcmVzb2x2ZWQuZnVsbFBhdGhcbiAgICB2YXIgYmFzZSA9IHJvdXRlci5oaXN0b3J5LmJhc2VcbiAgICB2YXIgaHJlZiA9IGNyZWF0ZUhyZWYoYmFzZSwgZnVsbFBhdGgsIHJvdXRlci5tb2RlKVxuICAgIHZhciBjbGFzc2VzID0ge31cbiAgICB2YXIgYWN0aXZlQ2xhc3MgPSB0aGlzLmFjdGl2ZUNsYXNzIHx8IHJvdXRlci5vcHRpb25zLmxpbmtBY3RpdmVDbGFzcyB8fCAncm91dGVyLWxpbmstYWN0aXZlJ1xuICAgIHZhciBjb21wYXJlVGFyZ2V0ID0gdG8ucGF0aCA/IGNyZWF0ZVJvdXRlKG51bGwsIHRvKSA6IHJlc29sdmVkXG4gICAgY2xhc3Nlc1thY3RpdmVDbGFzc10gPSB0aGlzLmV4YWN0XG4gICAgICA/IGlzU2FtZVJvdXRlKGN1cnJlbnQsIGNvbXBhcmVUYXJnZXQpXG4gICAgICA6IGlzSW5jbHVkZWRSb3V0ZShjdXJyZW50LCBjb21wYXJlVGFyZ2V0KVxuXG4gICAgdmFyIG9uID0ge1xuICAgICAgY2xpY2s6IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIC8vIGRvbid0IHJlZGlyZWN0IHdpdGggY29udHJvbCBrZXlzXG4gICAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICAgICAgICBpZiAoZS5tZXRhS2V5IHx8IGUuY3RybEtleSB8fCBlLnNoaWZ0S2V5KSB7IHJldHVybiB9XG4gICAgICAgIC8vIGRvbid0IHJlZGlyZWN0IHdoZW4gcHJldmVudERlZmF1bHQgY2FsbGVkXG4gICAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICAgICAgICBpZiAoZS5kZWZhdWx0UHJldmVudGVkKSB7IHJldHVybiB9XG4gICAgICAgIC8vIGRvbid0IHJlZGlyZWN0IG9uIHJpZ2h0IGNsaWNrXG4gICAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICAgICAgICBpZiAoZS5idXR0b24gIT09IDApIHsgcmV0dXJuIH1cbiAgICAgICAgLy8gZG9uJ3QgcmVkaXJlY3QgaWYgYHRhcmdldD1cIl9ibGFua1wiYFxuICAgICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgICAgICAgdmFyIHRhcmdldCA9IGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgndGFyZ2V0JylcbiAgICAgICAgaWYgKC9cXGJfYmxhbmtcXGIvaS50ZXN0KHRhcmdldCkpIHsgcmV0dXJuIH1cblxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgaWYgKHRoaXMkMS5yZXBsYWNlKSB7XG4gICAgICAgICAgcm91dGVyLnJlcGxhY2UodG8pXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcm91dGVyLnB1c2godG8pXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgZGF0YSA9IHtcbiAgICAgIGNsYXNzOiBjbGFzc2VzXG4gICAgfVxuXG4gICAgaWYgKHRoaXMudGFnID09PSAnYScpIHtcbiAgICAgIGRhdGEub24gPSBvblxuICAgICAgZGF0YS5hdHRycyA9IHsgaHJlZjogaHJlZiB9XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGZpbmQgdGhlIGZpcnN0IDxhPiBjaGlsZCBhbmQgYXBwbHkgbGlzdGVuZXIgYW5kIGhyZWZcbiAgICAgIHZhciBhID0gZmluZEFuY2hvcih0aGlzLiRzbG90cy5kZWZhdWx0KVxuICAgICAgaWYgKGEpIHtcbiAgICAgICAgLy8gaW4gY2FzZSB0aGUgPGE+IGlzIGEgc3RhdGljIG5vZGVcbiAgICAgICAgYS5pc1N0YXRpYyA9IGZhbHNlXG4gICAgICAgIHZhciBleHRlbmQgPSBfVnVlLnV0aWwuZXh0ZW5kXG4gICAgICAgIHZhciBhRGF0YSA9IGEuZGF0YSA9IGV4dGVuZCh7fSwgYS5kYXRhKVxuICAgICAgICBhRGF0YS5vbiA9IG9uXG4gICAgICAgIHZhciBhQXR0cnMgPSBhLmRhdGEuYXR0cnMgPSBleHRlbmQoe30sIGEuZGF0YS5hdHRycylcbiAgICAgICAgYUF0dHJzLmhyZWYgPSBocmVmXG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBkb2Vzbid0IGhhdmUgPGE+IGNoaWxkLCBhcHBseSBsaXN0ZW5lciB0byBzZWxmXG4gICAgICAgIGRhdGEub24gPSBvblxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBoKHRoaXMudGFnLCBkYXRhLCB0aGlzLiRzbG90cy5kZWZhdWx0KVxuICB9XG59XG5cbmZ1bmN0aW9uIGZpbmRBbmNob3IgKGNoaWxkcmVuKSB7XG4gIGlmIChjaGlsZHJlbikge1xuICAgIHZhciBjaGlsZFxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNoaWxkID0gY2hpbGRyZW5baV1cbiAgICAgIGlmIChjaGlsZC50YWcgPT09ICdhJykge1xuICAgICAgICByZXR1cm4gY2hpbGRcbiAgICAgIH1cbiAgICAgIGlmIChjaGlsZC5jaGlsZHJlbiAmJiAoY2hpbGQgPSBmaW5kQW5jaG9yKGNoaWxkLmNoaWxkcmVuKSkpIHtcbiAgICAgICAgcmV0dXJuIGNoaWxkXG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUhyZWYgKGJhc2UsIGZ1bGxQYXRoLCBtb2RlKSB7XG4gIHZhciBwYXRoID0gbW9kZSA9PT0gJ2hhc2gnID8gJy8jJyArIGZ1bGxQYXRoIDogZnVsbFBhdGhcbiAgcmV0dXJuIGJhc2UgPyBjbGVhblBhdGgoYmFzZSArIHBhdGgpIDogcGF0aFxufVxuXG52YXIgX1Z1ZVxuXG5mdW5jdGlvbiBpbnN0YWxsIChWdWUpIHtcbiAgaWYgKGluc3RhbGwuaW5zdGFsbGVkKSB7IHJldHVybiB9XG4gIGluc3RhbGwuaW5zdGFsbGVkID0gdHJ1ZVxuXG4gIF9WdWUgPSBWdWVcblxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoVnVlLnByb3RvdHlwZSwgJyRyb3V0ZXInLCB7XG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQgKCkgeyByZXR1cm4gdGhpcy4kcm9vdC5fcm91dGVyIH1cbiAgfSlcblxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoVnVlLnByb3RvdHlwZSwgJyRyb3V0ZScsIHtcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCQxICgpIHsgcmV0dXJuIHRoaXMuJHJvb3QuX3JvdXRlIH1cbiAgfSlcblxuICBWdWUubWl4aW4oe1xuICAgIGJlZm9yZUNyZWF0ZTogZnVuY3Rpb24gYmVmb3JlQ3JlYXRlICgpIHtcbiAgICAgIGlmICh0aGlzLiRvcHRpb25zLnJvdXRlcikge1xuICAgICAgICB0aGlzLl9yb3V0ZXIgPSB0aGlzLiRvcHRpb25zLnJvdXRlclxuICAgICAgICB0aGlzLl9yb3V0ZXIuaW5pdCh0aGlzKVxuICAgICAgICBWdWUudXRpbC5kZWZpbmVSZWFjdGl2ZSh0aGlzLCAnX3JvdXRlJywgdGhpcy5fcm91dGVyLmhpc3RvcnkuY3VycmVudClcbiAgICAgIH1cbiAgICB9XG4gIH0pXG5cbiAgVnVlLmNvbXBvbmVudCgncm91dGVyLXZpZXcnLCBWaWV3KVxuICBWdWUuY29tcG9uZW50KCdyb3V0ZXItbGluaycsIExpbmspXG5cbiAgdmFyIHN0cmF0cyA9IFZ1ZS5jb25maWcub3B0aW9uTWVyZ2VTdHJhdGVnaWVzXG4gIC8vIHVzZSB0aGUgc2FtZSBob29rIG1lcmdpbmcgc3RyYXRlZ3kgZm9yIHJvdXRlIGhvb2tzXG4gIHN0cmF0cy5iZWZvcmVSb3V0ZUVudGVyID0gc3RyYXRzLmJlZm9yZVJvdXRlTGVhdmUgPSBzdHJhdHMuY3JlYXRlZFxufVxuXG52YXIgX19tb2R1bGVFeHBvcnRzID0gQXJyYXkuaXNBcnJheSB8fCBmdW5jdGlvbiAoYXJyKSB7XG4gIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoYXJyKSA9PSAnW29iamVjdCBBcnJheV0nO1xufTtcblxudmFyIGlzYXJyYXkgPSBfX21vZHVsZUV4cG9ydHNcblxuLyoqXG4gKiBFeHBvc2UgYHBhdGhUb1JlZ2V4cGAuXG4gKi9cbnZhciBpbmRleCA9IHBhdGhUb1JlZ2V4cFxudmFyIHBhcnNlXzEgPSBwYXJzZVxudmFyIGNvbXBpbGVfMSA9IGNvbXBpbGVcbnZhciB0b2tlbnNUb0Z1bmN0aW9uXzEgPSB0b2tlbnNUb0Z1bmN0aW9uXG52YXIgdG9rZW5zVG9SZWdFeHBfMSA9IHRva2Vuc1RvUmVnRXhwXG5cbi8qKlxuICogVGhlIG1haW4gcGF0aCBtYXRjaGluZyByZWdleHAgdXRpbGl0eS5cbiAqXG4gKiBAdHlwZSB7UmVnRXhwfVxuICovXG52YXIgUEFUSF9SRUdFWFAgPSBuZXcgUmVnRXhwKFtcbiAgLy8gTWF0Y2ggZXNjYXBlZCBjaGFyYWN0ZXJzIHRoYXQgd291bGQgb3RoZXJ3aXNlIGFwcGVhciBpbiBmdXR1cmUgbWF0Y2hlcy5cbiAgLy8gVGhpcyBhbGxvd3MgdGhlIHVzZXIgdG8gZXNjYXBlIHNwZWNpYWwgY2hhcmFjdGVycyB0aGF0IHdvbid0IHRyYW5zZm9ybS5cbiAgJyhcXFxcXFxcXC4pJyxcbiAgLy8gTWF0Y2ggRXhwcmVzcy1zdHlsZSBwYXJhbWV0ZXJzIGFuZCB1bi1uYW1lZCBwYXJhbWV0ZXJzIHdpdGggYSBwcmVmaXhcbiAgLy8gYW5kIG9wdGlvbmFsIHN1ZmZpeGVzLiBNYXRjaGVzIGFwcGVhciBhczpcbiAgLy9cbiAgLy8gXCIvOnRlc3QoXFxcXGQrKT9cIiA9PiBbXCIvXCIsIFwidGVzdFwiLCBcIlxcZCtcIiwgdW5kZWZpbmVkLCBcIj9cIiwgdW5kZWZpbmVkXVxuICAvLyBcIi9yb3V0ZShcXFxcZCspXCIgID0+IFt1bmRlZmluZWQsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCBcIlxcZCtcIiwgdW5kZWZpbmVkLCB1bmRlZmluZWRdXG4gIC8vIFwiLypcIiAgICAgICAgICAgID0+IFtcIi9cIiwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCBcIipcIl1cbiAgJyhbXFxcXC8uXSk/KD86KD86XFxcXDooXFxcXHcrKSg/OlxcXFwoKCg/OlxcXFxcXFxcLnxbXlxcXFxcXFxcKCldKSspXFxcXCkpP3xcXFxcKCgoPzpcXFxcXFxcXC58W15cXFxcXFxcXCgpXSkrKVxcXFwpKShbKyo/XSk/fChcXFxcKikpJ1xuXS5qb2luKCd8JyksICdnJylcblxuLyoqXG4gKiBQYXJzZSBhIHN0cmluZyBmb3IgdGhlIHJhdyB0b2tlbnMuXG4gKlxuICogQHBhcmFtICB7c3RyaW5nfSAgc3RyXG4gKiBAcGFyYW0gIHtPYmplY3Q9fSBvcHRpb25zXG4gKiBAcmV0dXJuIHshQXJyYXl9XG4gKi9cbmZ1bmN0aW9uIHBhcnNlIChzdHIsIG9wdGlvbnMpIHtcbiAgdmFyIHRva2VucyA9IFtdXG4gIHZhciBrZXkgPSAwXG4gIHZhciBpbmRleCA9IDBcbiAgdmFyIHBhdGggPSAnJ1xuICB2YXIgZGVmYXVsdERlbGltaXRlciA9IG9wdGlvbnMgJiYgb3B0aW9ucy5kZWxpbWl0ZXIgfHwgJy8nXG4gIHZhciByZXNcblxuICB3aGlsZSAoKHJlcyA9IFBBVEhfUkVHRVhQLmV4ZWMoc3RyKSkgIT0gbnVsbCkge1xuICAgIHZhciBtID0gcmVzWzBdXG4gICAgdmFyIGVzY2FwZWQgPSByZXNbMV1cbiAgICB2YXIgb2Zmc2V0ID0gcmVzLmluZGV4XG4gICAgcGF0aCArPSBzdHIuc2xpY2UoaW5kZXgsIG9mZnNldClcbiAgICBpbmRleCA9IG9mZnNldCArIG0ubGVuZ3RoXG5cbiAgICAvLyBJZ25vcmUgYWxyZWFkeSBlc2NhcGVkIHNlcXVlbmNlcy5cbiAgICBpZiAoZXNjYXBlZCkge1xuICAgICAgcGF0aCArPSBlc2NhcGVkWzFdXG4gICAgICBjb250aW51ZVxuICAgIH1cblxuICAgIHZhciBuZXh0ID0gc3RyW2luZGV4XVxuICAgIHZhciBwcmVmaXggPSByZXNbMl1cbiAgICB2YXIgbmFtZSA9IHJlc1szXVxuICAgIHZhciBjYXB0dXJlID0gcmVzWzRdXG4gICAgdmFyIGdyb3VwID0gcmVzWzVdXG4gICAgdmFyIG1vZGlmaWVyID0gcmVzWzZdXG4gICAgdmFyIGFzdGVyaXNrID0gcmVzWzddXG5cbiAgICAvLyBQdXNoIHRoZSBjdXJyZW50IHBhdGggb250byB0aGUgdG9rZW5zLlxuICAgIGlmIChwYXRoKSB7XG4gICAgICB0b2tlbnMucHVzaChwYXRoKVxuICAgICAgcGF0aCA9ICcnXG4gICAgfVxuXG4gICAgdmFyIHBhcnRpYWwgPSBwcmVmaXggIT0gbnVsbCAmJiBuZXh0ICE9IG51bGwgJiYgbmV4dCAhPT0gcHJlZml4XG4gICAgdmFyIHJlcGVhdCA9IG1vZGlmaWVyID09PSAnKycgfHwgbW9kaWZpZXIgPT09ICcqJ1xuICAgIHZhciBvcHRpb25hbCA9IG1vZGlmaWVyID09PSAnPycgfHwgbW9kaWZpZXIgPT09ICcqJ1xuICAgIHZhciBkZWxpbWl0ZXIgPSByZXNbMl0gfHwgZGVmYXVsdERlbGltaXRlclxuICAgIHZhciBwYXR0ZXJuID0gY2FwdHVyZSB8fCBncm91cFxuXG4gICAgdG9rZW5zLnB1c2goe1xuICAgICAgbmFtZTogbmFtZSB8fCBrZXkrKyxcbiAgICAgIHByZWZpeDogcHJlZml4IHx8ICcnLFxuICAgICAgZGVsaW1pdGVyOiBkZWxpbWl0ZXIsXG4gICAgICBvcHRpb25hbDogb3B0aW9uYWwsXG4gICAgICByZXBlYXQ6IHJlcGVhdCxcbiAgICAgIHBhcnRpYWw6IHBhcnRpYWwsXG4gICAgICBhc3RlcmlzazogISFhc3RlcmlzayxcbiAgICAgIHBhdHRlcm46IHBhdHRlcm4gPyBlc2NhcGVHcm91cChwYXR0ZXJuKSA6IChhc3RlcmlzayA/ICcuKicgOiAnW14nICsgZXNjYXBlU3RyaW5nKGRlbGltaXRlcikgKyAnXSs/JylcbiAgICB9KVxuICB9XG5cbiAgLy8gTWF0Y2ggYW55IGNoYXJhY3RlcnMgc3RpbGwgcmVtYWluaW5nLlxuICBpZiAoaW5kZXggPCBzdHIubGVuZ3RoKSB7XG4gICAgcGF0aCArPSBzdHIuc3Vic3RyKGluZGV4KVxuICB9XG5cbiAgLy8gSWYgdGhlIHBhdGggZXhpc3RzLCBwdXNoIGl0IG9udG8gdGhlIGVuZC5cbiAgaWYgKHBhdGgpIHtcbiAgICB0b2tlbnMucHVzaChwYXRoKVxuICB9XG5cbiAgcmV0dXJuIHRva2Vuc1xufVxuXG4vKipcbiAqIENvbXBpbGUgYSBzdHJpbmcgdG8gYSB0ZW1wbGF0ZSBmdW5jdGlvbiBmb3IgdGhlIHBhdGguXG4gKlxuICogQHBhcmFtICB7c3RyaW5nfSAgICAgICAgICAgICBzdHJcbiAqIEBwYXJhbSAge09iamVjdD19ICAgICAgICAgICAgb3B0aW9uc1xuICogQHJldHVybiB7IWZ1bmN0aW9uKE9iamVjdD0sIE9iamVjdD0pfVxuICovXG5mdW5jdGlvbiBjb21waWxlIChzdHIsIG9wdGlvbnMpIHtcbiAgcmV0dXJuIHRva2Vuc1RvRnVuY3Rpb24ocGFyc2Uoc3RyLCBvcHRpb25zKSlcbn1cblxuLyoqXG4gKiBQcmV0dGllciBlbmNvZGluZyBvZiBVUkkgcGF0aCBzZWdtZW50cy5cbiAqXG4gKiBAcGFyYW0gIHtzdHJpbmd9XG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cbmZ1bmN0aW9uIGVuY29kZVVSSUNvbXBvbmVudFByZXR0eSAoc3RyKSB7XG4gIHJldHVybiBlbmNvZGVVUkkoc3RyKS5yZXBsYWNlKC9bXFwvPyNdL2csIGZ1bmN0aW9uIChjKSB7XG4gICAgcmV0dXJuICclJyArIGMuY2hhckNvZGVBdCgwKS50b1N0cmluZygxNikudG9VcHBlckNhc2UoKVxuICB9KVxufVxuXG4vKipcbiAqIEVuY29kZSB0aGUgYXN0ZXJpc2sgcGFyYW1ldGVyLiBTaW1pbGFyIHRvIGBwcmV0dHlgLCBidXQgYWxsb3dzIHNsYXNoZXMuXG4gKlxuICogQHBhcmFtICB7c3RyaW5nfVxuICogQHJldHVybiB7c3RyaW5nfVxuICovXG5mdW5jdGlvbiBlbmNvZGVBc3RlcmlzayAoc3RyKSB7XG4gIHJldHVybiBlbmNvZGVVUkkoc3RyKS5yZXBsYWNlKC9bPyNdL2csIGZ1bmN0aW9uIChjKSB7XG4gICAgcmV0dXJuICclJyArIGMuY2hhckNvZGVBdCgwKS50b1N0cmluZygxNikudG9VcHBlckNhc2UoKVxuICB9KVxufVxuXG4vKipcbiAqIEV4cG9zZSBhIG1ldGhvZCBmb3IgdHJhbnNmb3JtaW5nIHRva2VucyBpbnRvIHRoZSBwYXRoIGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiB0b2tlbnNUb0Z1bmN0aW9uICh0b2tlbnMpIHtcbiAgLy8gQ29tcGlsZSBhbGwgdGhlIHRva2VucyBpbnRvIHJlZ2V4cHMuXG4gIHZhciBtYXRjaGVzID0gbmV3IEFycmF5KHRva2Vucy5sZW5ndGgpXG5cbiAgLy8gQ29tcGlsZSBhbGwgdGhlIHBhdHRlcm5zIGJlZm9yZSBjb21waWxhdGlvbi5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCB0b2tlbnMubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAodHlwZW9mIHRva2Vuc1tpXSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIG1hdGNoZXNbaV0gPSBuZXcgUmVnRXhwKCdeKD86JyArIHRva2Vuc1tpXS5wYXR0ZXJuICsgJykkJylcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24gKG9iaiwgb3B0cykge1xuICAgIHZhciBwYXRoID0gJydcbiAgICB2YXIgZGF0YSA9IG9iaiB8fCB7fVxuICAgIHZhciBvcHRpb25zID0gb3B0cyB8fCB7fVxuICAgIHZhciBlbmNvZGUgPSBvcHRpb25zLnByZXR0eSA/IGVuY29kZVVSSUNvbXBvbmVudFByZXR0eSA6IGVuY29kZVVSSUNvbXBvbmVudFxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0b2tlbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciB0b2tlbiA9IHRva2Vuc1tpXVxuXG4gICAgICBpZiAodHlwZW9mIHRva2VuID09PSAnc3RyaW5nJykge1xuICAgICAgICBwYXRoICs9IHRva2VuXG5cbiAgICAgICAgY29udGludWVcbiAgICAgIH1cblxuICAgICAgdmFyIHZhbHVlID0gZGF0YVt0b2tlbi5uYW1lXVxuICAgICAgdmFyIHNlZ21lbnRcblxuICAgICAgaWYgKHZhbHVlID09IG51bGwpIHtcbiAgICAgICAgaWYgKHRva2VuLm9wdGlvbmFsKSB7XG4gICAgICAgICAgLy8gUHJlcGVuZCBwYXJ0aWFsIHNlZ21lbnQgcHJlZml4ZXMuXG4gICAgICAgICAgaWYgKHRva2VuLnBhcnRpYWwpIHtcbiAgICAgICAgICAgIHBhdGggKz0gdG9rZW4ucHJlZml4XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29udGludWVcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdFeHBlY3RlZCBcIicgKyB0b2tlbi5uYW1lICsgJ1wiIHRvIGJlIGRlZmluZWQnKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChpc2FycmF5KHZhbHVlKSkge1xuICAgICAgICBpZiAoIXRva2VuLnJlcGVhdCkge1xuICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0V4cGVjdGVkIFwiJyArIHRva2VuLm5hbWUgKyAnXCIgdG8gbm90IHJlcGVhdCwgYnV0IHJlY2VpdmVkIGAnICsgSlNPTi5zdHJpbmdpZnkodmFsdWUpICsgJ2AnKVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHZhbHVlLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgIGlmICh0b2tlbi5vcHRpb25hbCkge1xuICAgICAgICAgICAgY29udGludWVcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignRXhwZWN0ZWQgXCInICsgdG9rZW4ubmFtZSArICdcIiB0byBub3QgYmUgZW1wdHknKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgdmFsdWUubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICBzZWdtZW50ID0gZW5jb2RlKHZhbHVlW2pdKVxuXG4gICAgICAgICAgaWYgKCFtYXRjaGVzW2ldLnRlc3Qoc2VnbWVudCkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0V4cGVjdGVkIGFsbCBcIicgKyB0b2tlbi5uYW1lICsgJ1wiIHRvIG1hdGNoIFwiJyArIHRva2VuLnBhdHRlcm4gKyAnXCIsIGJ1dCByZWNlaXZlZCBgJyArIEpTT04uc3RyaW5naWZ5KHNlZ21lbnQpICsgJ2AnKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHBhdGggKz0gKGogPT09IDAgPyB0b2tlbi5wcmVmaXggOiB0b2tlbi5kZWxpbWl0ZXIpICsgc2VnbWVudFxuICAgICAgICB9XG5cbiAgICAgICAgY29udGludWVcbiAgICAgIH1cblxuICAgICAgc2VnbWVudCA9IHRva2VuLmFzdGVyaXNrID8gZW5jb2RlQXN0ZXJpc2sodmFsdWUpIDogZW5jb2RlKHZhbHVlKVxuXG4gICAgICBpZiAoIW1hdGNoZXNbaV0udGVzdChzZWdtZW50KSkge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdFeHBlY3RlZCBcIicgKyB0b2tlbi5uYW1lICsgJ1wiIHRvIG1hdGNoIFwiJyArIHRva2VuLnBhdHRlcm4gKyAnXCIsIGJ1dCByZWNlaXZlZCBcIicgKyBzZWdtZW50ICsgJ1wiJylcbiAgICAgIH1cblxuICAgICAgcGF0aCArPSB0b2tlbi5wcmVmaXggKyBzZWdtZW50XG4gICAgfVxuXG4gICAgcmV0dXJuIHBhdGhcbiAgfVxufVxuXG4vKipcbiAqIEVzY2FwZSBhIHJlZ3VsYXIgZXhwcmVzc2lvbiBzdHJpbmcuXG4gKlxuICogQHBhcmFtICB7c3RyaW5nfSBzdHJcbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xuZnVuY3Rpb24gZXNjYXBlU3RyaW5nIChzdHIpIHtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC8oWy4rKj89XiE6JHt9KClbXFxdfFxcL1xcXFxdKS9nLCAnXFxcXCQxJylcbn1cblxuLyoqXG4gKiBFc2NhcGUgdGhlIGNhcHR1cmluZyBncm91cCBieSBlc2NhcGluZyBzcGVjaWFsIGNoYXJhY3RlcnMgYW5kIG1lYW5pbmcuXG4gKlxuICogQHBhcmFtICB7c3RyaW5nfSBncm91cFxuICogQHJldHVybiB7c3RyaW5nfVxuICovXG5mdW5jdGlvbiBlc2NhcGVHcm91cCAoZ3JvdXApIHtcbiAgcmV0dXJuIGdyb3VwLnJlcGxhY2UoLyhbPSE6JFxcLygpXSkvZywgJ1xcXFwkMScpXG59XG5cbi8qKlxuICogQXR0YWNoIHRoZSBrZXlzIGFzIGEgcHJvcGVydHkgb2YgdGhlIHJlZ2V4cC5cbiAqXG4gKiBAcGFyYW0gIHshUmVnRXhwfSByZVxuICogQHBhcmFtICB7QXJyYXl9ICAga2V5c1xuICogQHJldHVybiB7IVJlZ0V4cH1cbiAqL1xuZnVuY3Rpb24gYXR0YWNoS2V5cyAocmUsIGtleXMpIHtcbiAgcmUua2V5cyA9IGtleXNcbiAgcmV0dXJuIHJlXG59XG5cbi8qKlxuICogR2V0IHRoZSBmbGFncyBmb3IgYSByZWdleHAgZnJvbSB0aGUgb3B0aW9ucy5cbiAqXG4gKiBAcGFyYW0gIHtPYmplY3R9IG9wdGlvbnNcbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xuZnVuY3Rpb24gZmxhZ3MgKG9wdGlvbnMpIHtcbiAgcmV0dXJuIG9wdGlvbnMuc2Vuc2l0aXZlID8gJycgOiAnaSdcbn1cblxuLyoqXG4gKiBQdWxsIG91dCBrZXlzIGZyb20gYSByZWdleHAuXG4gKlxuICogQHBhcmFtICB7IVJlZ0V4cH0gcGF0aFxuICogQHBhcmFtICB7IUFycmF5fSAga2V5c1xuICogQHJldHVybiB7IVJlZ0V4cH1cbiAqL1xuZnVuY3Rpb24gcmVnZXhwVG9SZWdleHAgKHBhdGgsIGtleXMpIHtcbiAgLy8gVXNlIGEgbmVnYXRpdmUgbG9va2FoZWFkIHRvIG1hdGNoIG9ubHkgY2FwdHVyaW5nIGdyb3Vwcy5cbiAgdmFyIGdyb3VwcyA9IHBhdGguc291cmNlLm1hdGNoKC9cXCgoPyFcXD8pL2cpXG5cbiAgaWYgKGdyb3Vwcykge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZ3JvdXBzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBrZXlzLnB1c2goe1xuICAgICAgICBuYW1lOiBpLFxuICAgICAgICBwcmVmaXg6IG51bGwsXG4gICAgICAgIGRlbGltaXRlcjogbnVsbCxcbiAgICAgICAgb3B0aW9uYWw6IGZhbHNlLFxuICAgICAgICByZXBlYXQ6IGZhbHNlLFxuICAgICAgICBwYXJ0aWFsOiBmYWxzZSxcbiAgICAgICAgYXN0ZXJpc2s6IGZhbHNlLFxuICAgICAgICBwYXR0ZXJuOiBudWxsXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBhdHRhY2hLZXlzKHBhdGgsIGtleXMpXG59XG5cbi8qKlxuICogVHJhbnNmb3JtIGFuIGFycmF5IGludG8gYSByZWdleHAuXG4gKlxuICogQHBhcmFtICB7IUFycmF5fSAgcGF0aFxuICogQHBhcmFtICB7QXJyYXl9ICAga2V5c1xuICogQHBhcmFtICB7IU9iamVjdH0gb3B0aW9uc1xuICogQHJldHVybiB7IVJlZ0V4cH1cbiAqL1xuZnVuY3Rpb24gYXJyYXlUb1JlZ2V4cCAocGF0aCwga2V5cywgb3B0aW9ucykge1xuICB2YXIgcGFydHMgPSBbXVxuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcGF0aC5sZW5ndGg7IGkrKykge1xuICAgIHBhcnRzLnB1c2gocGF0aFRvUmVnZXhwKHBhdGhbaV0sIGtleXMsIG9wdGlvbnMpLnNvdXJjZSlcbiAgfVxuXG4gIHZhciByZWdleHAgPSBuZXcgUmVnRXhwKCcoPzonICsgcGFydHMuam9pbignfCcpICsgJyknLCBmbGFncyhvcHRpb25zKSlcblxuICByZXR1cm4gYXR0YWNoS2V5cyhyZWdleHAsIGtleXMpXG59XG5cbi8qKlxuICogQ3JlYXRlIGEgcGF0aCByZWdleHAgZnJvbSBzdHJpbmcgaW5wdXQuXG4gKlxuICogQHBhcmFtICB7c3RyaW5nfSAgcGF0aFxuICogQHBhcmFtICB7IUFycmF5fSAga2V5c1xuICogQHBhcmFtICB7IU9iamVjdH0gb3B0aW9uc1xuICogQHJldHVybiB7IVJlZ0V4cH1cbiAqL1xuZnVuY3Rpb24gc3RyaW5nVG9SZWdleHAgKHBhdGgsIGtleXMsIG9wdGlvbnMpIHtcbiAgcmV0dXJuIHRva2Vuc1RvUmVnRXhwKHBhcnNlKHBhdGgsIG9wdGlvbnMpLCBrZXlzLCBvcHRpb25zKVxufVxuXG4vKipcbiAqIEV4cG9zZSBhIGZ1bmN0aW9uIGZvciB0YWtpbmcgdG9rZW5zIGFuZCByZXR1cm5pbmcgYSBSZWdFeHAuXG4gKlxuICogQHBhcmFtICB7IUFycmF5fSAgICAgICAgICB0b2tlbnNcbiAqIEBwYXJhbSAgeyhBcnJheXxPYmplY3QpPX0ga2V5c1xuICogQHBhcmFtICB7T2JqZWN0PX0gICAgICAgICBvcHRpb25zXG4gKiBAcmV0dXJuIHshUmVnRXhwfVxuICovXG5mdW5jdGlvbiB0b2tlbnNUb1JlZ0V4cCAodG9rZW5zLCBrZXlzLCBvcHRpb25zKSB7XG4gIGlmICghaXNhcnJheShrZXlzKSkge1xuICAgIG9wdGlvbnMgPSAvKiogQHR5cGUgeyFPYmplY3R9ICovIChrZXlzIHx8IG9wdGlvbnMpXG4gICAga2V5cyA9IFtdXG4gIH1cblxuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fVxuXG4gIHZhciBzdHJpY3QgPSBvcHRpb25zLnN0cmljdFxuICB2YXIgZW5kID0gb3B0aW9ucy5lbmQgIT09IGZhbHNlXG4gIHZhciByb3V0ZSA9ICcnXG5cbiAgLy8gSXRlcmF0ZSBvdmVyIHRoZSB0b2tlbnMgYW5kIGNyZWF0ZSBvdXIgcmVnZXhwIHN0cmluZy5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCB0b2tlbnMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgdG9rZW4gPSB0b2tlbnNbaV1cblxuICAgIGlmICh0eXBlb2YgdG9rZW4gPT09ICdzdHJpbmcnKSB7XG4gICAgICByb3V0ZSArPSBlc2NhcGVTdHJpbmcodG9rZW4pXG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBwcmVmaXggPSBlc2NhcGVTdHJpbmcodG9rZW4ucHJlZml4KVxuICAgICAgdmFyIGNhcHR1cmUgPSAnKD86JyArIHRva2VuLnBhdHRlcm4gKyAnKSdcblxuICAgICAga2V5cy5wdXNoKHRva2VuKVxuXG4gICAgICBpZiAodG9rZW4ucmVwZWF0KSB7XG4gICAgICAgIGNhcHR1cmUgKz0gJyg/OicgKyBwcmVmaXggKyBjYXB0dXJlICsgJykqJ1xuICAgICAgfVxuXG4gICAgICBpZiAodG9rZW4ub3B0aW9uYWwpIHtcbiAgICAgICAgaWYgKCF0b2tlbi5wYXJ0aWFsKSB7XG4gICAgICAgICAgY2FwdHVyZSA9ICcoPzonICsgcHJlZml4ICsgJygnICsgY2FwdHVyZSArICcpKT8nXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY2FwdHVyZSA9IHByZWZpeCArICcoJyArIGNhcHR1cmUgKyAnKT8nXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNhcHR1cmUgPSBwcmVmaXggKyAnKCcgKyBjYXB0dXJlICsgJyknXG4gICAgICB9XG5cbiAgICAgIHJvdXRlICs9IGNhcHR1cmVcbiAgICB9XG4gIH1cblxuICB2YXIgZGVsaW1pdGVyID0gZXNjYXBlU3RyaW5nKG9wdGlvbnMuZGVsaW1pdGVyIHx8ICcvJylcbiAgdmFyIGVuZHNXaXRoRGVsaW1pdGVyID0gcm91dGUuc2xpY2UoLWRlbGltaXRlci5sZW5ndGgpID09PSBkZWxpbWl0ZXJcblxuICAvLyBJbiBub24tc3RyaWN0IG1vZGUgd2UgYWxsb3cgYSBzbGFzaCBhdCB0aGUgZW5kIG9mIG1hdGNoLiBJZiB0aGUgcGF0aCB0b1xuICAvLyBtYXRjaCBhbHJlYWR5IGVuZHMgd2l0aCBhIHNsYXNoLCB3ZSByZW1vdmUgaXQgZm9yIGNvbnNpc3RlbmN5LiBUaGUgc2xhc2hcbiAgLy8gaXMgdmFsaWQgYXQgdGhlIGVuZCBvZiBhIHBhdGggbWF0Y2gsIG5vdCBpbiB0aGUgbWlkZGxlLiBUaGlzIGlzIGltcG9ydGFudFxuICAvLyBpbiBub24tZW5kaW5nIG1vZGUsIHdoZXJlIFwiL3Rlc3QvXCIgc2hvdWxkbid0IG1hdGNoIFwiL3Rlc3QvL3JvdXRlXCIuXG4gIGlmICghc3RyaWN0KSB7XG4gICAgcm91dGUgPSAoZW5kc1dpdGhEZWxpbWl0ZXIgPyByb3V0ZS5zbGljZSgwLCAtZGVsaW1pdGVyLmxlbmd0aCkgOiByb3V0ZSkgKyAnKD86JyArIGRlbGltaXRlciArICcoPz0kKSk/J1xuICB9XG5cbiAgaWYgKGVuZCkge1xuICAgIHJvdXRlICs9ICckJ1xuICB9IGVsc2Uge1xuICAgIC8vIEluIG5vbi1lbmRpbmcgbW9kZSwgd2UgbmVlZCB0aGUgY2FwdHVyaW5nIGdyb3VwcyB0byBtYXRjaCBhcyBtdWNoIGFzXG4gICAgLy8gcG9zc2libGUgYnkgdXNpbmcgYSBwb3NpdGl2ZSBsb29rYWhlYWQgdG8gdGhlIGVuZCBvciBuZXh0IHBhdGggc2VnbWVudC5cbiAgICByb3V0ZSArPSBzdHJpY3QgJiYgZW5kc1dpdGhEZWxpbWl0ZXIgPyAnJyA6ICcoPz0nICsgZGVsaW1pdGVyICsgJ3wkKSdcbiAgfVxuXG4gIHJldHVybiBhdHRhY2hLZXlzKG5ldyBSZWdFeHAoJ14nICsgcm91dGUsIGZsYWdzKG9wdGlvbnMpKSwga2V5cylcbn1cblxuLyoqXG4gKiBOb3JtYWxpemUgdGhlIGdpdmVuIHBhdGggc3RyaW5nLCByZXR1cm5pbmcgYSByZWd1bGFyIGV4cHJlc3Npb24uXG4gKlxuICogQW4gZW1wdHkgYXJyYXkgY2FuIGJlIHBhc3NlZCBpbiBmb3IgdGhlIGtleXMsIHdoaWNoIHdpbGwgaG9sZCB0aGVcbiAqIHBsYWNlaG9sZGVyIGtleSBkZXNjcmlwdGlvbnMuIEZvciBleGFtcGxlLCB1c2luZyBgL3VzZXIvOmlkYCwgYGtleXNgIHdpbGxcbiAqIGNvbnRhaW4gYFt7IG5hbWU6ICdpZCcsIGRlbGltaXRlcjogJy8nLCBvcHRpb25hbDogZmFsc2UsIHJlcGVhdDogZmFsc2UgfV1gLlxuICpcbiAqIEBwYXJhbSAgeyhzdHJpbmd8UmVnRXhwfEFycmF5KX0gcGF0aFxuICogQHBhcmFtICB7KEFycmF5fE9iamVjdCk9fSAgICAgICBrZXlzXG4gKiBAcGFyYW0gIHtPYmplY3Q9fSAgICAgICAgICAgICAgIG9wdGlvbnNcbiAqIEByZXR1cm4geyFSZWdFeHB9XG4gKi9cbmZ1bmN0aW9uIHBhdGhUb1JlZ2V4cCAocGF0aCwga2V5cywgb3B0aW9ucykge1xuICBpZiAoIWlzYXJyYXkoa2V5cykpIHtcbiAgICBvcHRpb25zID0gLyoqIEB0eXBlIHshT2JqZWN0fSAqLyAoa2V5cyB8fCBvcHRpb25zKVxuICAgIGtleXMgPSBbXVxuICB9XG5cbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge31cblxuICBpZiAocGF0aCBpbnN0YW5jZW9mIFJlZ0V4cCkge1xuICAgIHJldHVybiByZWdleHBUb1JlZ2V4cChwYXRoLCAvKiogQHR5cGUgeyFBcnJheX0gKi8gKGtleXMpKVxuICB9XG5cbiAgaWYgKGlzYXJyYXkocGF0aCkpIHtcbiAgICByZXR1cm4gYXJyYXlUb1JlZ2V4cCgvKiogQHR5cGUgeyFBcnJheX0gKi8gKHBhdGgpLCAvKiogQHR5cGUgeyFBcnJheX0gKi8gKGtleXMpLCBvcHRpb25zKVxuICB9XG5cbiAgcmV0dXJuIHN0cmluZ1RvUmVnZXhwKC8qKiBAdHlwZSB7c3RyaW5nfSAqLyAocGF0aCksIC8qKiBAdHlwZSB7IUFycmF5fSAqLyAoa2V5cyksIG9wdGlvbnMpXG59XG5cbmluZGV4LnBhcnNlID0gcGFyc2VfMTtcbmluZGV4LmNvbXBpbGUgPSBjb21waWxlXzE7XG5pbmRleC50b2tlbnNUb0Z1bmN0aW9uID0gdG9rZW5zVG9GdW5jdGlvbl8xO1xuaW5kZXgudG9rZW5zVG9SZWdFeHAgPSB0b2tlbnNUb1JlZ0V4cF8xO1xuXG4vKiAgKi9cblxuZnVuY3Rpb24gY3JlYXRlUm91dGVNYXAgKHJvdXRlcykge1xuICB2YXIgcGF0aE1hcCA9IE9iamVjdC5jcmVhdGUobnVsbClcbiAgdmFyIG5hbWVNYXAgPSBPYmplY3QuY3JlYXRlKG51bGwpXG5cbiAgcm91dGVzLmZvckVhY2goZnVuY3Rpb24gKHJvdXRlKSB7XG4gICAgYWRkUm91dGVSZWNvcmQocGF0aE1hcCwgbmFtZU1hcCwgcm91dGUpXG4gIH0pXG5cbiAgcmV0dXJuIHtcbiAgICBwYXRoTWFwOiBwYXRoTWFwLFxuICAgIG5hbWVNYXA6IG5hbWVNYXBcbiAgfVxufVxuXG5mdW5jdGlvbiBhZGRSb3V0ZVJlY29yZCAoXG4gIHBhdGhNYXAsXG4gIG5hbWVNYXAsXG4gIHJvdXRlLFxuICBwYXJlbnQsXG4gIG1hdGNoQXNcbikge1xuICB2YXIgcGF0aCA9IHJvdXRlLnBhdGg7XG4gIHZhciBuYW1lID0gcm91dGUubmFtZTtcbiAgYXNzZXJ0KHBhdGggIT0gbnVsbCwgXCJcXFwicGF0aFxcXCIgaXMgcmVxdWlyZWQgaW4gYSByb3V0ZSBjb25maWd1cmF0aW9uLlwiKVxuXG4gIHZhciByZWNvcmQgPSB7XG4gICAgcGF0aDogbm9ybWFsaXplUGF0aChwYXRoLCBwYXJlbnQpLFxuICAgIGNvbXBvbmVudHM6IHJvdXRlLmNvbXBvbmVudHMgfHwgeyBkZWZhdWx0OiByb3V0ZS5jb21wb25lbnQgfSxcbiAgICBpbnN0YW5jZXM6IHt9LFxuICAgIG5hbWU6IG5hbWUsXG4gICAgcGFyZW50OiBwYXJlbnQsXG4gICAgbWF0Y2hBczogbWF0Y2hBcyxcbiAgICByZWRpcmVjdDogcm91dGUucmVkaXJlY3QsXG4gICAgYmVmb3JlRW50ZXI6IHJvdXRlLmJlZm9yZUVudGVyLFxuICAgIG1ldGE6IHJvdXRlLm1ldGEgfHwge31cbiAgfVxuXG4gIGlmIChyb3V0ZS5jaGlsZHJlbikge1xuICAgIC8vIFdhcm4gaWYgcm91dGUgaXMgbmFtZWQgYW5kIGhhcyBhIGRlZmF1bHQgY2hpbGQgcm91dGUuXG4gICAgLy8gSWYgdXNlcnMgbmF2aWdhdGUgdG8gdGhpcyByb3V0ZSBieSBuYW1lLCB0aGUgZGVmYXVsdCBjaGlsZCB3aWxsXG4gICAgLy8gbm90IGJlIHJlbmRlcmVkIChHSCBJc3N1ZSAjNjI5KVxuICAgIGlmIChcInByb2R1Y3Rpb25cIiAhPT0gJ3Byb2R1Y3Rpb24nKSB7fVxuICAgIHJvdXRlLmNoaWxkcmVuLmZvckVhY2goZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgICBhZGRSb3V0ZVJlY29yZChwYXRoTWFwLCBuYW1lTWFwLCBjaGlsZCwgcmVjb3JkKVxuICAgIH0pXG4gIH1cblxuICBpZiAocm91dGUuYWxpYXMgIT09IHVuZGVmaW5lZCkge1xuICAgIGlmIChBcnJheS5pc0FycmF5KHJvdXRlLmFsaWFzKSkge1xuICAgICAgcm91dGUuYWxpYXMuZm9yRWFjaChmdW5jdGlvbiAoYWxpYXMpIHtcbiAgICAgICAgYWRkUm91dGVSZWNvcmQocGF0aE1hcCwgbmFtZU1hcCwgeyBwYXRoOiBhbGlhcyB9LCBwYXJlbnQsIHJlY29yZC5wYXRoKVxuICAgICAgfSlcbiAgICB9IGVsc2Uge1xuICAgICAgYWRkUm91dGVSZWNvcmQocGF0aE1hcCwgbmFtZU1hcCwgeyBwYXRoOiByb3V0ZS5hbGlhcyB9LCBwYXJlbnQsIHJlY29yZC5wYXRoKVxuICAgIH1cbiAgfVxuXG4gIHBhdGhNYXBbcmVjb3JkLnBhdGhdID0gcmVjb3JkXG4gIGlmIChuYW1lKSB7XG4gICAgaWYgKCFuYW1lTWFwW25hbWVdKSB7XG4gICAgICBuYW1lTWFwW25hbWVdID0gcmVjb3JkXG4gICAgfSBlbHNlIHtcbiAgICAgIHdhcm4oZmFsc2UsIChcIkR1cGxpY2F0ZSBuYW1lZCByb3V0ZXMgZGVmaW5pdGlvbjogeyBuYW1lOiBcXFwiXCIgKyBuYW1lICsgXCJcXFwiLCBwYXRoOiBcXFwiXCIgKyAocmVjb3JkLnBhdGgpICsgXCJcXFwiIH1cIikpXG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIG5vcm1hbGl6ZVBhdGggKHBhdGgsIHBhcmVudCkge1xuICBwYXRoID0gcGF0aC5yZXBsYWNlKC9cXC8kLywgJycpXG4gIGlmIChwYXRoWzBdID09PSAnLycpIHsgcmV0dXJuIHBhdGggfVxuICBpZiAocGFyZW50ID09IG51bGwpIHsgcmV0dXJuIHBhdGggfVxuICByZXR1cm4gY2xlYW5QYXRoKCgocGFyZW50LnBhdGgpICsgXCIvXCIgKyBwYXRoKSlcbn1cblxuLyogICovXG5cbnZhciByZWdleHBDYWNoZSA9IE9iamVjdC5jcmVhdGUobnVsbClcblxudmFyIHJlZ2V4cFBhcmFtc0NhY2hlID0gT2JqZWN0LmNyZWF0ZShudWxsKVxuXG52YXIgcmVnZXhwQ29tcGlsZUNhY2hlID0gT2JqZWN0LmNyZWF0ZShudWxsKVxuXG5mdW5jdGlvbiBjcmVhdGVNYXRjaGVyIChyb3V0ZXMpIHtcbiAgdmFyIHJlZiA9IGNyZWF0ZVJvdXRlTWFwKHJvdXRlcyk7XG4gIHZhciBwYXRoTWFwID0gcmVmLnBhdGhNYXA7XG4gIHZhciBuYW1lTWFwID0gcmVmLm5hbWVNYXA7XG5cbiAgZnVuY3Rpb24gbWF0Y2ggKFxuICAgIHJhdyxcbiAgICBjdXJyZW50Um91dGUsXG4gICAgcmVkaXJlY3RlZEZyb21cbiAgKSB7XG4gICAgdmFyIGxvY2F0aW9uID0gbm9ybWFsaXplTG9jYXRpb24ocmF3LCBjdXJyZW50Um91dGUpXG4gICAgdmFyIG5hbWUgPSBsb2NhdGlvbi5uYW1lO1xuXG4gICAgaWYgKG5hbWUpIHtcbiAgICAgIHZhciByZWNvcmQgPSBuYW1lTWFwW25hbWVdXG4gICAgICB2YXIgcGFyYW1OYW1lcyA9IGdldFBhcmFtcyhyZWNvcmQucGF0aClcblxuICAgICAgaWYgKHR5cGVvZiBsb2NhdGlvbi5wYXJhbXMgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIGxvY2F0aW9uLnBhcmFtcyA9IHt9XG4gICAgICB9XG5cbiAgICAgIGlmIChjdXJyZW50Um91dGUgJiYgdHlwZW9mIGN1cnJlbnRSb3V0ZS5wYXJhbXMgPT09ICdvYmplY3QnKSB7XG4gICAgICAgIGZvciAodmFyIGtleSBpbiBjdXJyZW50Um91dGUucGFyYW1zKSB7XG4gICAgICAgICAgaWYgKCEoa2V5IGluIGxvY2F0aW9uLnBhcmFtcykgJiYgcGFyYW1OYW1lcy5pbmRleE9mKGtleSkgPiAtMSkge1xuICAgICAgICAgICAgbG9jYXRpb24ucGFyYW1zW2tleV0gPSBjdXJyZW50Um91dGUucGFyYW1zW2tleV1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHJlY29yZCkge1xuICAgICAgICBsb2NhdGlvbi5wYXRoID0gZmlsbFBhcmFtcyhyZWNvcmQucGF0aCwgbG9jYXRpb24ucGFyYW1zLCAoXCJuYW1lZCByb3V0ZSBcXFwiXCIgKyBuYW1lICsgXCJcXFwiXCIpKVxuICAgICAgICByZXR1cm4gX2NyZWF0ZVJvdXRlKHJlY29yZCwgbG9jYXRpb24sIHJlZGlyZWN0ZWRGcm9tKVxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAobG9jYXRpb24ucGF0aCkge1xuICAgICAgbG9jYXRpb24ucGFyYW1zID0ge31cbiAgICAgIGZvciAodmFyIHBhdGggaW4gcGF0aE1hcCkge1xuICAgICAgICBpZiAobWF0Y2hSb3V0ZShwYXRoLCBsb2NhdGlvbi5wYXJhbXMsIGxvY2F0aW9uLnBhdGgpKSB7XG4gICAgICAgICAgcmV0dXJuIF9jcmVhdGVSb3V0ZShwYXRoTWFwW3BhdGhdLCBsb2NhdGlvbiwgcmVkaXJlY3RlZEZyb20pXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgLy8gbm8gbWF0Y2hcbiAgICByZXR1cm4gX2NyZWF0ZVJvdXRlKG51bGwsIGxvY2F0aW9uKVxuICB9XG5cbiAgZnVuY3Rpb24gcmVkaXJlY3QgKFxuICAgIHJlY29yZCxcbiAgICBsb2NhdGlvblxuICApIHtcbiAgICB2YXIgb3JpZ2luYWxSZWRpcmVjdCA9IHJlY29yZC5yZWRpcmVjdFxuICAgIHZhciByZWRpcmVjdCA9IHR5cGVvZiBvcmlnaW5hbFJlZGlyZWN0ID09PSAnZnVuY3Rpb24nXG4gICAgICAgID8gb3JpZ2luYWxSZWRpcmVjdChjcmVhdGVSb3V0ZShyZWNvcmQsIGxvY2F0aW9uKSlcbiAgICAgICAgOiBvcmlnaW5hbFJlZGlyZWN0XG5cbiAgICBpZiAodHlwZW9mIHJlZGlyZWN0ID09PSAnc3RyaW5nJykge1xuICAgICAgcmVkaXJlY3QgPSB7IHBhdGg6IHJlZGlyZWN0IH1cbiAgICB9XG5cbiAgICBpZiAoIXJlZGlyZWN0IHx8IHR5cGVvZiByZWRpcmVjdCAhPT0gJ29iamVjdCcpIHtcbiAgICAgIHdhcm4oZmFsc2UsIChcImludmFsaWQgcmVkaXJlY3Qgb3B0aW9uOiBcIiArIChKU09OLnN0cmluZ2lmeShyZWRpcmVjdCkpKSlcbiAgICAgIHJldHVybiBfY3JlYXRlUm91dGUobnVsbCwgbG9jYXRpb24pXG4gICAgfVxuXG4gICAgdmFyIHJlID0gcmVkaXJlY3RcbiAgICB2YXIgbmFtZSA9IHJlLm5hbWU7XG4gICAgdmFyIHBhdGggPSByZS5wYXRoO1xuICAgIHZhciBxdWVyeSA9IGxvY2F0aW9uLnF1ZXJ5O1xuICAgIHZhciBoYXNoID0gbG9jYXRpb24uaGFzaDtcbiAgICB2YXIgcGFyYW1zID0gbG9jYXRpb24ucGFyYW1zO1xuICAgIHF1ZXJ5ID0gcmUuaGFzT3duUHJvcGVydHkoJ3F1ZXJ5JykgPyByZS5xdWVyeSA6IHF1ZXJ5XG4gICAgaGFzaCA9IHJlLmhhc093blByb3BlcnR5KCdoYXNoJykgPyByZS5oYXNoIDogaGFzaFxuICAgIHBhcmFtcyA9IHJlLmhhc093blByb3BlcnR5KCdwYXJhbXMnKSA/IHJlLnBhcmFtcyA6IHBhcmFtc1xuXG4gICAgaWYgKG5hbWUpIHtcbiAgICAgIC8vIHJlc29sdmVkIG5hbWVkIGRpcmVjdFxuICAgICAgdmFyIHRhcmdldFJlY29yZCA9IG5hbWVNYXBbbmFtZV1cbiAgICAgIGFzc2VydCh0YXJnZXRSZWNvcmQsIChcInJlZGlyZWN0IGZhaWxlZDogbmFtZWQgcm91dGUgXFxcIlwiICsgbmFtZSArIFwiXFxcIiBub3QgZm91bmQuXCIpKVxuICAgICAgcmV0dXJuIG1hdGNoKHtcbiAgICAgICAgX25vcm1hbGl6ZWQ6IHRydWUsXG4gICAgICAgIG5hbWU6IG5hbWUsXG4gICAgICAgIHF1ZXJ5OiBxdWVyeSxcbiAgICAgICAgaGFzaDogaGFzaCxcbiAgICAgICAgcGFyYW1zOiBwYXJhbXNcbiAgICAgIH0sIHVuZGVmaW5lZCwgbG9jYXRpb24pXG4gICAgfSBlbHNlIGlmIChwYXRoKSB7XG4gICAgICAvLyAxLiByZXNvbHZlIHJlbGF0aXZlIHJlZGlyZWN0XG4gICAgICB2YXIgcmF3UGF0aCA9IHJlc29sdmVSZWNvcmRQYXRoKHBhdGgsIHJlY29yZClcbiAgICAgIC8vIDIuIHJlc29sdmUgcGFyYW1zXG4gICAgICB2YXIgcmVzb2x2ZWRQYXRoID0gZmlsbFBhcmFtcyhyYXdQYXRoLCBwYXJhbXMsIChcInJlZGlyZWN0IHJvdXRlIHdpdGggcGF0aCBcXFwiXCIgKyByYXdQYXRoICsgXCJcXFwiXCIpKVxuICAgICAgLy8gMy4gcmVtYXRjaCB3aXRoIGV4aXN0aW5nIHF1ZXJ5IGFuZCBoYXNoXG4gICAgICByZXR1cm4gbWF0Y2goe1xuICAgICAgICBfbm9ybWFsaXplZDogdHJ1ZSxcbiAgICAgICAgcGF0aDogcmVzb2x2ZWRQYXRoLFxuICAgICAgICBxdWVyeTogcXVlcnksXG4gICAgICAgIGhhc2g6IGhhc2hcbiAgICAgIH0sIHVuZGVmaW5lZCwgbG9jYXRpb24pXG4gICAgfSBlbHNlIHtcbiAgICAgIHdhcm4oZmFsc2UsIChcImludmFsaWQgcmVkaXJlY3Qgb3B0aW9uOiBcIiArIChKU09OLnN0cmluZ2lmeShyZWRpcmVjdCkpKSlcbiAgICAgIHJldHVybiBfY3JlYXRlUm91dGUobnVsbCwgbG9jYXRpb24pXG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gYWxpYXMgKFxuICAgIHJlY29yZCxcbiAgICBsb2NhdGlvbixcbiAgICBtYXRjaEFzXG4gICkge1xuICAgIHZhciBhbGlhc2VkUGF0aCA9IGZpbGxQYXJhbXMobWF0Y2hBcywgbG9jYXRpb24ucGFyYW1zLCAoXCJhbGlhc2VkIHJvdXRlIHdpdGggcGF0aCBcXFwiXCIgKyBtYXRjaEFzICsgXCJcXFwiXCIpKVxuICAgIHZhciBhbGlhc2VkTWF0Y2ggPSBtYXRjaCh7XG4gICAgICBfbm9ybWFsaXplZDogdHJ1ZSxcbiAgICAgIHBhdGg6IGFsaWFzZWRQYXRoXG4gICAgfSlcbiAgICBpZiAoYWxpYXNlZE1hdGNoKSB7XG4gICAgICB2YXIgbWF0Y2hlZCA9IGFsaWFzZWRNYXRjaC5tYXRjaGVkXG4gICAgICB2YXIgYWxpYXNlZFJlY29yZCA9IG1hdGNoZWRbbWF0Y2hlZC5sZW5ndGggLSAxXVxuICAgICAgbG9jYXRpb24ucGFyYW1zID0gYWxpYXNlZE1hdGNoLnBhcmFtc1xuICAgICAgcmV0dXJuIF9jcmVhdGVSb3V0ZShhbGlhc2VkUmVjb3JkLCBsb2NhdGlvbilcbiAgICB9XG4gICAgcmV0dXJuIF9jcmVhdGVSb3V0ZShudWxsLCBsb2NhdGlvbilcbiAgfVxuXG4gIGZ1bmN0aW9uIF9jcmVhdGVSb3V0ZSAoXG4gICAgcmVjb3JkLFxuICAgIGxvY2F0aW9uLFxuICAgIHJlZGlyZWN0ZWRGcm9tXG4gICkge1xuICAgIGlmIChyZWNvcmQgJiYgcmVjb3JkLnJlZGlyZWN0KSB7XG4gICAgICByZXR1cm4gcmVkaXJlY3QocmVjb3JkLCByZWRpcmVjdGVkRnJvbSB8fCBsb2NhdGlvbilcbiAgICB9XG4gICAgaWYgKHJlY29yZCAmJiByZWNvcmQubWF0Y2hBcykge1xuICAgICAgcmV0dXJuIGFsaWFzKHJlY29yZCwgbG9jYXRpb24sIHJlY29yZC5tYXRjaEFzKVxuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlUm91dGUocmVjb3JkLCBsb2NhdGlvbiwgcmVkaXJlY3RlZEZyb20pXG4gIH1cblxuICByZXR1cm4gbWF0Y2hcbn1cblxuZnVuY3Rpb24gZ2V0Um91dGVSZWdleCAocGF0aCkge1xuICB2YXIgaGl0ID0gcmVnZXhwQ2FjaGVbcGF0aF1cbiAgdmFyIGtleXMsIHJlZ2V4cFxuXG4gIGlmIChoaXQpIHtcbiAgICBrZXlzID0gaGl0LmtleXNcbiAgICByZWdleHAgPSBoaXQucmVnZXhwXG4gIH0gZWxzZSB7XG4gICAga2V5cyA9IFtdXG4gICAgcmVnZXhwID0gaW5kZXgocGF0aCwga2V5cylcbiAgICByZWdleHBDYWNoZVtwYXRoXSA9IHsga2V5czoga2V5cywgcmVnZXhwOiByZWdleHAgfVxuICB9XG5cbiAgcmV0dXJuIHsga2V5czoga2V5cywgcmVnZXhwOiByZWdleHAgfVxufVxuXG5mdW5jdGlvbiBtYXRjaFJvdXRlIChcbiAgcGF0aCxcbiAgcGFyYW1zLFxuICBwYXRobmFtZVxuKSB7XG4gIHZhciByZWYgPSBnZXRSb3V0ZVJlZ2V4KHBhdGgpO1xuICB2YXIgcmVnZXhwID0gcmVmLnJlZ2V4cDtcbiAgdmFyIGtleXMgPSByZWYua2V5cztcbiAgdmFyIG0gPSBwYXRobmFtZS5tYXRjaChyZWdleHApXG5cbiAgaWYgKCFtKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH0gZWxzZSBpZiAoIXBhcmFtcykge1xuICAgIHJldHVybiB0cnVlXG4gIH1cblxuICBmb3IgKHZhciBpID0gMSwgbGVuID0gbS5sZW5ndGg7IGkgPCBsZW47ICsraSkge1xuICAgIHZhciBrZXkgPSBrZXlzW2kgLSAxXVxuICAgIHZhciB2YWwgPSB0eXBlb2YgbVtpXSA9PT0gJ3N0cmluZycgPyBkZWNvZGVVUklDb21wb25lbnQobVtpXSkgOiBtW2ldXG4gICAgaWYgKGtleSkgeyBwYXJhbXNba2V5Lm5hbWVdID0gdmFsIH1cbiAgfVxuXG4gIHJldHVybiB0cnVlXG59XG5cbmZ1bmN0aW9uIGZpbGxQYXJhbXMgKFxuICBwYXRoLFxuICBwYXJhbXMsXG4gIHJvdXRlTXNnXG4pIHtcbiAgdHJ5IHtcbiAgICB2YXIgZmlsbGVyID1cbiAgICAgIHJlZ2V4cENvbXBpbGVDYWNoZVtwYXRoXSB8fFxuICAgICAgKHJlZ2V4cENvbXBpbGVDYWNoZVtwYXRoXSA9IGluZGV4LmNvbXBpbGUocGF0aCkpXG4gICAgcmV0dXJuIGZpbGxlcihwYXJhbXMgfHwge30sIHsgcHJldHR5OiB0cnVlIH0pXG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBhc3NlcnQoZmFsc2UsIChcIm1pc3NpbmcgcGFyYW0gZm9yIFwiICsgcm91dGVNc2cgKyBcIjogXCIgKyAoZS5tZXNzYWdlKSkpXG4gICAgcmV0dXJuICcnXG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0UGFyYW1zIChwYXRoKSB7XG4gIHJldHVybiByZWdleHBQYXJhbXNDYWNoZVtwYXRoXSB8fFxuICAgIChyZWdleHBQYXJhbXNDYWNoZVtwYXRoXSA9IGdldFJvdXRlUmVnZXgocGF0aCkua2V5cy5tYXAoZnVuY3Rpb24gKGtleSkgeyByZXR1cm4ga2V5Lm5hbWU7IH0pKVxufVxuXG5mdW5jdGlvbiByZXNvbHZlUmVjb3JkUGF0aCAocGF0aCwgcmVjb3JkKSB7XG4gIHJldHVybiByZXNvbHZlUGF0aChwYXRoLCByZWNvcmQucGFyZW50ID8gcmVjb3JkLnBhcmVudC5wYXRoIDogJy8nLCB0cnVlKVxufVxuXG4vKiAgKi9cblxudmFyIGluQnJvd3NlciA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnXG5cbnZhciBzdXBwb3J0c0hpc3RvcnkgPSBpbkJyb3dzZXIgJiYgKGZ1bmN0aW9uICgpIHtcbiAgdmFyIHVhID0gd2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnRcblxuICBpZiAoXG4gICAgKHVhLmluZGV4T2YoJ0FuZHJvaWQgMi4nKSAhPT0gLTEgfHwgdWEuaW5kZXhPZignQW5kcm9pZCA0LjAnKSAhPT0gLTEpICYmXG4gICAgdWEuaW5kZXhPZignTW9iaWxlIFNhZmFyaScpICE9PSAtMSAmJlxuICAgIHVhLmluZGV4T2YoJ0Nocm9tZScpID09PSAtMSAmJlxuICAgIHVhLmluZGV4T2YoJ1dpbmRvd3MgUGhvbmUnKSA9PT0gLTFcbiAgKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICByZXR1cm4gd2luZG93Lmhpc3RvcnkgJiYgJ3B1c2hTdGF0ZScgaW4gd2luZG93Lmhpc3Rvcnlcbn0pKClcblxuLyogICovXG5cbmZ1bmN0aW9uIHJ1blF1ZXVlIChxdWV1ZSwgZm4sIGNiKSB7XG4gIHZhciBzdGVwID0gZnVuY3Rpb24gKGluZGV4KSB7XG4gICAgaWYgKGluZGV4ID49IHF1ZXVlLmxlbmd0aCkge1xuICAgICAgY2IoKVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAocXVldWVbaW5kZXhdKSB7XG4gICAgICAgIGZuKHF1ZXVlW2luZGV4XSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHN0ZXAoaW5kZXggKyAxKVxuICAgICAgICB9KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc3RlcChpbmRleCArIDEpXG4gICAgICB9XG4gICAgfVxuICB9XG4gIHN0ZXAoMClcbn1cblxuLyogICovXG5cblxudmFyIEhpc3RvcnkgPSBmdW5jdGlvbiBIaXN0b3J5IChyb3V0ZXIsIGJhc2UpIHtcbiAgdGhpcy5yb3V0ZXIgPSByb3V0ZXJcbiAgdGhpcy5iYXNlID0gbm9ybWFsaXplQmFzZShiYXNlKVxuICAvLyBzdGFydCB3aXRoIGEgcm91dGUgb2JqZWN0IHRoYXQgc3RhbmRzIGZvciBcIm5vd2hlcmVcIlxuICB0aGlzLmN1cnJlbnQgPSBTVEFSVFxuICB0aGlzLnBlbmRpbmcgPSBudWxsXG59O1xuXG5IaXN0b3J5LnByb3RvdHlwZS5saXN0ZW4gPSBmdW5jdGlvbiBsaXN0ZW4gKGNiKSB7XG4gIHRoaXMuY2IgPSBjYlxufTtcblxuSGlzdG9yeS5wcm90b3R5cGUudHJhbnNpdGlvblRvID0gZnVuY3Rpb24gdHJhbnNpdGlvblRvIChsb2NhdGlvbiwgY2IpIHtcbiAgICB2YXIgdGhpcyQxID0gdGhpcztcblxuICB2YXIgcm91dGUgPSB0aGlzLnJvdXRlci5tYXRjaChsb2NhdGlvbiwgdGhpcy5jdXJyZW50KVxuICB0aGlzLmNvbmZpcm1UcmFuc2l0aW9uKHJvdXRlLCBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcyQxLnVwZGF0ZVJvdXRlKHJvdXRlKVxuICAgIGNiICYmIGNiKHJvdXRlKVxuICAgIHRoaXMkMS5lbnN1cmVVUkwoKVxuICB9KVxufTtcblxuSGlzdG9yeS5wcm90b3R5cGUuY29uZmlybVRyYW5zaXRpb24gPSBmdW5jdGlvbiBjb25maXJtVHJhbnNpdGlvbiAocm91dGUsIGNiKSB7XG4gICAgdmFyIHRoaXMkMSA9IHRoaXM7XG5cbiAgdmFyIGN1cnJlbnQgPSB0aGlzLmN1cnJlbnRcbiAgaWYgKGlzU2FtZVJvdXRlKHJvdXRlLCBjdXJyZW50KSkge1xuICAgIHRoaXMuZW5zdXJlVVJMKClcbiAgICByZXR1cm5cbiAgfVxuXG4gIHZhciByZWYgPSByZXNvbHZlUXVldWUodGhpcy5jdXJyZW50Lm1hdGNoZWQsIHJvdXRlLm1hdGNoZWQpO1xuICAgIHZhciBkZWFjdGl2YXRlZCA9IHJlZi5kZWFjdGl2YXRlZDtcbiAgICB2YXIgYWN0aXZhdGVkID0gcmVmLmFjdGl2YXRlZDtcblxuICB2YXIgcXVldWUgPSBbXS5jb25jYXQoXG4gICAgLy8gaW4tY29tcG9uZW50IGxlYXZlIGd1YXJkc1xuICAgIGV4dHJhY3RMZWF2ZUd1YXJkcyhkZWFjdGl2YXRlZCksXG4gICAgLy8gZ2xvYmFsIGJlZm9yZSBob29rc1xuICAgIHRoaXMucm91dGVyLmJlZm9yZUhvb2tzLFxuICAgIC8vIGVudGVyIGd1YXJkc1xuICAgIGFjdGl2YXRlZC5tYXAoZnVuY3Rpb24gKG0pIHsgcmV0dXJuIG0uYmVmb3JlRW50ZXI7IH0pLFxuICAgIC8vIGFzeW5jIGNvbXBvbmVudHNcbiAgICByZXNvbHZlQXN5bmNDb21wb25lbnRzKGFjdGl2YXRlZClcbiAgKVxuXG4gIHRoaXMucGVuZGluZyA9IHJvdXRlXG4gIHZhciBpdGVyYXRvciA9IGZ1bmN0aW9uIChob29rLCBuZXh0KSB7XG4gICAgaWYgKHRoaXMkMS5wZW5kaW5nICE9PSByb3V0ZSkgeyByZXR1cm4gfVxuICAgIGhvb2socm91dGUsIGN1cnJlbnQsIGZ1bmN0aW9uICh0bykge1xuICAgICAgaWYgKHRvID09PSBmYWxzZSkge1xuICAgICAgICAvLyBuZXh0KGZhbHNlKSAtPiBhYm9ydCBuYXZpZ2F0aW9uLCBlbnN1cmUgY3VycmVudCBVUkxcbiAgICAgICAgdGhpcyQxLmVuc3VyZVVSTCh0cnVlKVxuICAgICAgfSBlbHNlIGlmICh0eXBlb2YgdG8gPT09ICdzdHJpbmcnIHx8IHR5cGVvZiB0byA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgLy8gbmV4dCgnLycpIG9yIG5leHQoeyBwYXRoOiAnLycgfSkgLT4gcmVkaXJlY3RcbiAgICAgICAgdGhpcyQxLnB1c2godG8pXG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBjb25maXJtIHRyYW5zaXRpb24gYW5kIHBhc3Mgb24gdGhlIHZhbHVlXG4gICAgICAgIG5leHQodG8pXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIHJ1blF1ZXVlKHF1ZXVlLCBpdGVyYXRvciwgZnVuY3Rpb24gKCkge1xuICAgIHZhciBwb3N0RW50ZXJDYnMgPSBbXVxuICAgIHZhciBlbnRlckd1YXJkcyA9IGV4dHJhY3RFbnRlckd1YXJkcyhhY3RpdmF0ZWQsIHBvc3RFbnRlckNicywgZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHRoaXMkMS5jdXJyZW50ID09PSByb3V0ZVxuICAgIH0pXG4gICAgLy8gd2FpdCB1bnRpbCBhc3luYyBjb21wb25lbnRzIGFyZSByZXNvbHZlZCBiZWZvcmVcbiAgICAvLyBleHRyYWN0aW5nIGluLWNvbXBvbmVudCBlbnRlciBndWFyZHNcbiAgICBydW5RdWV1ZShlbnRlckd1YXJkcywgaXRlcmF0b3IsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmICh0aGlzJDEucGVuZGluZyA9PT0gcm91dGUpIHtcbiAgICAgICAgdGhpcyQxLnBlbmRpbmcgPSBudWxsXG4gICAgICAgIGNiKHJvdXRlKVxuICAgICAgICB0aGlzJDEucm91dGVyLmFwcC4kbmV4dFRpY2soZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHBvc3RFbnRlckNicy5mb3JFYWNoKGZ1bmN0aW9uIChjYikgeyByZXR1cm4gY2IoKTsgfSlcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9KVxuICB9KVxufTtcblxuSGlzdG9yeS5wcm90b3R5cGUudXBkYXRlUm91dGUgPSBmdW5jdGlvbiB1cGRhdGVSb3V0ZSAocm91dGUpIHtcbiAgdmFyIHByZXYgPSB0aGlzLmN1cnJlbnRcbiAgdGhpcy5jdXJyZW50ID0gcm91dGVcbiAgdGhpcy5jYiAmJiB0aGlzLmNiKHJvdXRlKVxuICB0aGlzLnJvdXRlci5hZnRlckhvb2tzLmZvckVhY2goZnVuY3Rpb24gKGhvb2spIHtcbiAgICBob29rICYmIGhvb2socm91dGUsIHByZXYpXG4gIH0pXG59O1xuXG5mdW5jdGlvbiBub3JtYWxpemVCYXNlIChiYXNlKSB7XG4gIGlmICghYmFzZSkge1xuICAgIGlmIChpbkJyb3dzZXIpIHtcbiAgICAgIC8vIHJlc3BlY3QgPGJhc2U+IHRhZ1xuICAgICAgdmFyIGJhc2VFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Jhc2UnKVxuICAgICAgYmFzZSA9IGJhc2VFbCA/IGJhc2VFbC5nZXRBdHRyaWJ1dGUoJ2hyZWYnKSA6ICcvJ1xuICAgIH0gZWxzZSB7XG4gICAgICBiYXNlID0gJy8nXG4gICAgfVxuICB9XG4gIC8vIG1ha2Ugc3VyZSB0aGVyZSdzIHRoZSBzdGFydGluZyBzbGFzaFxuICBpZiAoYmFzZS5jaGFyQXQoMCkgIT09ICcvJykge1xuICAgIGJhc2UgPSAnLycgKyBiYXNlXG4gIH1cbiAgLy8gcmVtb3ZlIHRyYWlsaW5nIHNsYXNoXG4gIHJldHVybiBiYXNlLnJlcGxhY2UoL1xcLyQvLCAnJylcbn1cblxuZnVuY3Rpb24gcmVzb2x2ZVF1ZXVlIChcbiAgY3VycmVudCxcbiAgbmV4dFxuKSB7XG4gIHZhciBpXG4gIHZhciBtYXggPSBNYXRoLm1heChjdXJyZW50Lmxlbmd0aCwgbmV4dC5sZW5ndGgpXG4gIGZvciAoaSA9IDA7IGkgPCBtYXg7IGkrKykge1xuICAgIGlmIChjdXJyZW50W2ldICE9PSBuZXh0W2ldKSB7XG4gICAgICBicmVha1xuICAgIH1cbiAgfVxuICByZXR1cm4ge1xuICAgIGFjdGl2YXRlZDogbmV4dC5zbGljZShpKSxcbiAgICBkZWFjdGl2YXRlZDogY3VycmVudC5zbGljZShpKVxuICB9XG59XG5cbmZ1bmN0aW9uIGV4dHJhY3RHdWFyZCAoXG4gIGRlZixcbiAga2V5XG4pIHtcbiAgaWYgKHR5cGVvZiBkZWYgIT09ICdmdW5jdGlvbicpIHtcbiAgICAvLyBleHRlbmQgbm93IHNvIHRoYXQgZ2xvYmFsIG1peGlucyBhcmUgYXBwbGllZC5cbiAgICBkZWYgPSBfVnVlLmV4dGVuZChkZWYpXG4gIH1cbiAgcmV0dXJuIGRlZi5vcHRpb25zW2tleV1cbn1cblxuZnVuY3Rpb24gZXh0cmFjdExlYXZlR3VhcmRzIChtYXRjaGVkKSB7XG4gIHJldHVybiBmbGF0dGVuKGZsYXRNYXBDb21wb25lbnRzKG1hdGNoZWQsIGZ1bmN0aW9uIChkZWYsIGluc3RhbmNlKSB7XG4gICAgdmFyIGd1YXJkID0gZXh0cmFjdEd1YXJkKGRlZiwgJ2JlZm9yZVJvdXRlTGVhdmUnKVxuICAgIGlmIChndWFyZCkge1xuICAgICAgcmV0dXJuIEFycmF5LmlzQXJyYXkoZ3VhcmQpXG4gICAgICAgID8gZ3VhcmQubWFwKGZ1bmN0aW9uIChndWFyZCkgeyByZXR1cm4gd3JhcExlYXZlR3VhcmQoZ3VhcmQsIGluc3RhbmNlKTsgfSlcbiAgICAgICAgOiB3cmFwTGVhdmVHdWFyZChndWFyZCwgaW5zdGFuY2UpXG4gICAgfVxuICB9KS5yZXZlcnNlKCkpXG59XG5cbmZ1bmN0aW9uIHdyYXBMZWF2ZUd1YXJkIChcbiAgZ3VhcmQsXG4gIGluc3RhbmNlXG4pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIHJvdXRlTGVhdmVHdWFyZCAoKSB7XG4gICAgcmV0dXJuIGd1YXJkLmFwcGx5KGluc3RhbmNlLCBhcmd1bWVudHMpXG4gIH1cbn1cblxuZnVuY3Rpb24gZXh0cmFjdEVudGVyR3VhcmRzIChcbiAgbWF0Y2hlZCxcbiAgY2JzLFxuICBpc1ZhbGlkXG4pIHtcbiAgcmV0dXJuIGZsYXR0ZW4oZmxhdE1hcENvbXBvbmVudHMobWF0Y2hlZCwgZnVuY3Rpb24gKGRlZiwgXywgbWF0Y2gsIGtleSkge1xuICAgIHZhciBndWFyZCA9IGV4dHJhY3RHdWFyZChkZWYsICdiZWZvcmVSb3V0ZUVudGVyJylcbiAgICBpZiAoZ3VhcmQpIHtcbiAgICAgIHJldHVybiBBcnJheS5pc0FycmF5KGd1YXJkKVxuICAgICAgICA/IGd1YXJkLm1hcChmdW5jdGlvbiAoZ3VhcmQpIHsgcmV0dXJuIHdyYXBFbnRlckd1YXJkKGd1YXJkLCBjYnMsIG1hdGNoLCBrZXksIGlzVmFsaWQpOyB9KVxuICAgICAgICA6IHdyYXBFbnRlckd1YXJkKGd1YXJkLCBjYnMsIG1hdGNoLCBrZXksIGlzVmFsaWQpXG4gICAgfVxuICB9KSlcbn1cblxuZnVuY3Rpb24gd3JhcEVudGVyR3VhcmQgKFxuICBndWFyZCxcbiAgY2JzLFxuICBtYXRjaCxcbiAga2V5LFxuICBpc1ZhbGlkXG4pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIHJvdXRlRW50ZXJHdWFyZCAodG8sIGZyb20sIG5leHQpIHtcbiAgICByZXR1cm4gZ3VhcmQodG8sIGZyb20sIGZ1bmN0aW9uIChjYikge1xuICAgICAgbmV4dChjYilcbiAgICAgIGlmICh0eXBlb2YgY2IgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgY2JzLnB1c2goZnVuY3Rpb24gKCkge1xuICAgICAgICAgIC8vICM3NTBcbiAgICAgICAgICAvLyBpZiBhIHJvdXRlci12aWV3IGlzIHdyYXBwZWQgd2l0aCBhbiBvdXQtaW4gdHJhbnNpdGlvbixcbiAgICAgICAgICAvLyB0aGUgaW5zdGFuY2UgbWF5IG5vdCBoYXZlIGJlZW4gcmVnaXN0ZXJlZCBhdCB0aGlzIHRpbWUuXG4gICAgICAgICAgLy8gd2Ugd2lsbCBuZWVkIHRvIHBvbGwgZm9yIHJlZ2lzdHJhdGlvbiB1bnRpbCBjdXJyZW50IHJvdXRlXG4gICAgICAgICAgLy8gaXMgbm8gbG9uZ2VyIHZhbGlkLlxuICAgICAgICAgIHBvbGwoY2IsIG1hdGNoLmluc3RhbmNlcywga2V5LCBpc1ZhbGlkKVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH0pXG4gIH1cbn1cblxuZnVuY3Rpb24gcG9sbCAoXG4gIGNiLCAvLyBzb21laG93IGZsb3cgY2Fubm90IGluZmVyIHRoaXMgaXMgYSBmdW5jdGlvblxuICBpbnN0YW5jZXMsXG4gIGtleSxcbiAgaXNWYWxpZFxuKSB7XG4gIGlmIChpbnN0YW5jZXNba2V5XSkge1xuICAgIGNiKGluc3RhbmNlc1trZXldKVxuICB9IGVsc2UgaWYgKGlzVmFsaWQoKSkge1xuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgcG9sbChjYiwgaW5zdGFuY2VzLCBrZXksIGlzVmFsaWQpXG4gICAgfSwgMTYpXG4gIH1cbn1cblxuZnVuY3Rpb24gcmVzb2x2ZUFzeW5jQ29tcG9uZW50cyAobWF0Y2hlZCkge1xuICByZXR1cm4gZmxhdE1hcENvbXBvbmVudHMobWF0Y2hlZCwgZnVuY3Rpb24gKGRlZiwgXywgbWF0Y2gsIGtleSkge1xuICAgIC8vIGlmIGl0J3MgYSBmdW5jdGlvbiBhbmQgZG9lc24ndCBoYXZlIFZ1ZSBvcHRpb25zIGF0dGFjaGVkLFxuICAgIC8vIGFzc3VtZSBpdCdzIGFuIGFzeW5jIGNvbXBvbmVudCByZXNvbHZlIGZ1bmN0aW9uLlxuICAgIC8vIHdlIGFyZSBub3QgdXNpbmcgVnVlJ3MgZGVmYXVsdCBhc3luYyByZXNvbHZpbmcgbWVjaGFuaXNtIGJlY2F1c2VcbiAgICAvLyB3ZSB3YW50IHRvIGhhbHQgdGhlIG5hdmlnYXRpb24gdW50aWwgdGhlIGluY29taW5nIGNvbXBvbmVudCBoYXMgYmVlblxuICAgIC8vIHJlc29sdmVkLlxuICAgIGlmICh0eXBlb2YgZGVmID09PSAnZnVuY3Rpb24nICYmICFkZWYub3B0aW9ucykge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uICh0bywgZnJvbSwgbmV4dCkge1xuICAgICAgICB2YXIgcmVzb2x2ZSA9IGZ1bmN0aW9uIChyZXNvbHZlZERlZikge1xuICAgICAgICAgIG1hdGNoLmNvbXBvbmVudHNba2V5XSA9IHJlc29sdmVkRGVmXG4gICAgICAgICAgbmV4dCgpXG4gICAgICAgIH1cblxuICAgICAgICB2YXIgcmVqZWN0ID0gZnVuY3Rpb24gKHJlYXNvbikge1xuICAgICAgICAgIHdhcm4oZmFsc2UsIChcIkZhaWxlZCB0byByZXNvbHZlIGFzeW5jIGNvbXBvbmVudCBcIiArIGtleSArIFwiOiBcIiArIHJlYXNvbikpXG4gICAgICAgICAgbmV4dChmYWxzZSlcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciByZXMgPSBkZWYocmVzb2x2ZSwgcmVqZWN0KVxuICAgICAgICBpZiAocmVzICYmIHR5cGVvZiByZXMudGhlbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIHJlcy50aGVuKHJlc29sdmUsIHJlamVjdClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSlcbn1cblxuZnVuY3Rpb24gZmxhdE1hcENvbXBvbmVudHMgKFxuICBtYXRjaGVkLFxuICBmblxuKSB7XG4gIHJldHVybiBmbGF0dGVuKG1hdGNoZWQubWFwKGZ1bmN0aW9uIChtKSB7XG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKG0uY29tcG9uZW50cykubWFwKGZ1bmN0aW9uIChrZXkpIHsgcmV0dXJuIGZuKFxuICAgICAgbS5jb21wb25lbnRzW2tleV0sXG4gICAgICBtLmluc3RhbmNlc1trZXldLFxuICAgICAgbSwga2V5XG4gICAgKTsgfSlcbiAgfSkpXG59XG5cbmZ1bmN0aW9uIGZsYXR0ZW4gKGFycikge1xuICByZXR1cm4gQXJyYXkucHJvdG90eXBlLmNvbmNhdC5hcHBseShbXSwgYXJyKVxufVxuXG4vKiAgKi9cblxudmFyIHBvc2l0aW9uU3RvcmUgPSBPYmplY3QuY3JlYXRlKG51bGwpXG5cbmZ1bmN0aW9uIHNhdmVTY3JvbGxQb3NpdGlvbiAoa2V5KSB7XG4gIGlmICgha2V5KSB7IHJldHVybiB9XG4gIHBvc2l0aW9uU3RvcmVba2V5XSA9IHtcbiAgICB4OiB3aW5kb3cucGFnZVhPZmZzZXQsXG4gICAgeTogd2luZG93LnBhZ2VZT2Zmc2V0XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0U2Nyb2xsUG9zaXRpb24gKGtleSkge1xuICBpZiAoIWtleSkgeyByZXR1cm4gfVxuICByZXR1cm4gcG9zaXRpb25TdG9yZVtrZXldXG59XG5cbmZ1bmN0aW9uIGdldEVsZW1lbnRQb3NpdGlvbiAoZWwpIHtcbiAgdmFyIGRvY1JlY3QgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcbiAgdmFyIGVsUmVjdCA9IGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gIHJldHVybiB7XG4gICAgeDogZWxSZWN0LmxlZnQgLSBkb2NSZWN0LmxlZnQsXG4gICAgeTogZWxSZWN0LnRvcCAtIGRvY1JlY3QudG9wXG4gIH1cbn1cblxuZnVuY3Rpb24gaXNWYWxpZFBvc2l0aW9uIChvYmopIHtcbiAgcmV0dXJuIGlzTnVtYmVyKG9iai54KSB8fCBpc051bWJlcihvYmoueSlcbn1cblxuZnVuY3Rpb24gbm9ybWFsaXplUG9zaXRpb24gKG9iaikge1xuICByZXR1cm4ge1xuICAgIHg6IGlzTnVtYmVyKG9iai54KSA/IG9iai54IDogd2luZG93LnBhZ2VYT2Zmc2V0LFxuICAgIHk6IGlzTnVtYmVyKG9iai55KSA/IG9iai55IDogd2luZG93LnBhZ2VZT2Zmc2V0XG4gIH1cbn1cblxuZnVuY3Rpb24gaXNOdW1iZXIgKHYpIHtcbiAgcmV0dXJuIHR5cGVvZiB2ID09PSAnbnVtYmVyJ1xufVxuXG4vKiAgKi9cblxuXG52YXIgZ2VuS2V5ID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gU3RyaW5nKERhdGUubm93KCkpOyB9XG52YXIgX2tleSA9IGdlbktleSgpXG5cbnZhciBIVE1MNUhpc3RvcnkgPSAoZnVuY3Rpb24gKEhpc3RvcnkpIHtcbiAgZnVuY3Rpb24gSFRNTDVIaXN0b3J5IChyb3V0ZXIsIGJhc2UpIHtcbiAgICB2YXIgdGhpcyQxID0gdGhpcztcblxuICAgIEhpc3RvcnkuY2FsbCh0aGlzLCByb3V0ZXIsIGJhc2UpXG5cbiAgICB2YXIgZXhwZWN0U2Nyb2xsID0gcm91dGVyLm9wdGlvbnMuc2Nyb2xsQmVoYXZpb3JcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncG9wc3RhdGUnLCBmdW5jdGlvbiAoZSkge1xuICAgICAgX2tleSA9IGUuc3RhdGUgJiYgZS5zdGF0ZS5rZXlcbiAgICAgIHZhciBjdXJyZW50ID0gdGhpcyQxLmN1cnJlbnRcbiAgICAgIHRoaXMkMS50cmFuc2l0aW9uVG8oZ2V0TG9jYXRpb24odGhpcyQxLmJhc2UpLCBmdW5jdGlvbiAobmV4dCkge1xuICAgICAgICBpZiAoZXhwZWN0U2Nyb2xsKSB7XG4gICAgICAgICAgdGhpcyQxLmhhbmRsZVNjcm9sbChuZXh0LCBjdXJyZW50LCB0cnVlKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0pXG5cbiAgICBpZiAoZXhwZWN0U2Nyb2xsKSB7XG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBzYXZlU2Nyb2xsUG9zaXRpb24oX2tleSlcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgaWYgKCBIaXN0b3J5ICkgSFRNTDVIaXN0b3J5Ll9fcHJvdG9fXyA9IEhpc3Rvcnk7XG4gIEhUTUw1SGlzdG9yeS5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKCBIaXN0b3J5ICYmIEhpc3RvcnkucHJvdG90eXBlICk7XG4gIEhUTUw1SGlzdG9yeS5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBIVE1MNUhpc3Rvcnk7XG5cbiAgSFRNTDVIaXN0b3J5LnByb3RvdHlwZS5nbyA9IGZ1bmN0aW9uIGdvIChuKSB7XG4gICAgd2luZG93Lmhpc3RvcnkuZ28obilcbiAgfTtcblxuICBIVE1MNUhpc3RvcnkucHJvdG90eXBlLnB1c2ggPSBmdW5jdGlvbiBwdXNoIChsb2NhdGlvbikge1xuICAgIHZhciB0aGlzJDEgPSB0aGlzO1xuXG4gICAgdmFyIGN1cnJlbnQgPSB0aGlzLmN1cnJlbnRcbiAgICB0aGlzLnRyYW5zaXRpb25Ubyhsb2NhdGlvbiwgZnVuY3Rpb24gKHJvdXRlKSB7XG4gICAgICBwdXNoU3RhdGUoY2xlYW5QYXRoKHRoaXMkMS5iYXNlICsgcm91dGUuZnVsbFBhdGgpKVxuICAgICAgdGhpcyQxLmhhbmRsZVNjcm9sbChyb3V0ZSwgY3VycmVudCwgZmFsc2UpXG4gICAgfSlcbiAgfTtcblxuICBIVE1MNUhpc3RvcnkucHJvdG90eXBlLnJlcGxhY2UgPSBmdW5jdGlvbiByZXBsYWNlIChsb2NhdGlvbikge1xuICAgIHZhciB0aGlzJDEgPSB0aGlzO1xuXG4gICAgdmFyIGN1cnJlbnQgPSB0aGlzLmN1cnJlbnRcbiAgICB0aGlzLnRyYW5zaXRpb25Ubyhsb2NhdGlvbiwgZnVuY3Rpb24gKHJvdXRlKSB7XG4gICAgICByZXBsYWNlU3RhdGUoY2xlYW5QYXRoKHRoaXMkMS5iYXNlICsgcm91dGUuZnVsbFBhdGgpKVxuICAgICAgdGhpcyQxLmhhbmRsZVNjcm9sbChyb3V0ZSwgY3VycmVudCwgZmFsc2UpXG4gICAgfSlcbiAgfTtcblxuICBIVE1MNUhpc3RvcnkucHJvdG90eXBlLmVuc3VyZVVSTCA9IGZ1bmN0aW9uIGVuc3VyZVVSTCAocHVzaCkge1xuICAgIGlmIChnZXRMb2NhdGlvbih0aGlzLmJhc2UpICE9PSB0aGlzLmN1cnJlbnQuZnVsbFBhdGgpIHtcbiAgICAgIHZhciBjdXJyZW50ID0gY2xlYW5QYXRoKHRoaXMuYmFzZSArIHRoaXMuY3VycmVudC5mdWxsUGF0aClcbiAgICAgIHB1c2ggPyBwdXNoU3RhdGUoY3VycmVudCkgOiByZXBsYWNlU3RhdGUoY3VycmVudClcbiAgICB9XG4gIH07XG5cbiAgSFRNTDVIaXN0b3J5LnByb3RvdHlwZS5oYW5kbGVTY3JvbGwgPSBmdW5jdGlvbiBoYW5kbGVTY3JvbGwgKHRvLCBmcm9tLCBpc1BvcCkge1xuICAgIHZhciByb3V0ZXIgPSB0aGlzLnJvdXRlclxuICAgIGlmICghcm91dGVyLmFwcCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdmFyIGJlaGF2aW9yID0gcm91dGVyLm9wdGlvbnMuc2Nyb2xsQmVoYXZpb3JcbiAgICBpZiAoIWJlaGF2aW9yKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgYXNzZXJ0KHR5cGVvZiBiZWhhdmlvciA9PT0gJ2Z1bmN0aW9uJywgXCJzY3JvbGxCZWhhdmlvciBtdXN0IGJlIGEgZnVuY3Rpb25cIilcblxuICAgIC8vIHdhaXQgdW50aWwgcmUtcmVuZGVyIGZpbmlzaGVzIGJlZm9yZSBzY3JvbGxpbmdcbiAgICByb3V0ZXIuYXBwLiRuZXh0VGljayhmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgcG9zaXRpb24gPSBnZXRTY3JvbGxQb3NpdGlvbihfa2V5KVxuICAgICAgdmFyIHNob3VsZFNjcm9sbCA9IGJlaGF2aW9yKHRvLCBmcm9tLCBpc1BvcCA/IHBvc2l0aW9uIDogbnVsbClcbiAgICAgIGlmICghc2hvdWxkU2Nyb2xsKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgICAgdmFyIGlzT2JqZWN0ID0gdHlwZW9mIHNob3VsZFNjcm9sbCA9PT0gJ29iamVjdCdcbiAgICAgIGlmIChpc09iamVjdCAmJiB0eXBlb2Ygc2hvdWxkU2Nyb2xsLnNlbGVjdG9yID09PSAnc3RyaW5nJykge1xuICAgICAgICB2YXIgZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNob3VsZFNjcm9sbC5zZWxlY3RvcilcbiAgICAgICAgaWYgKGVsKSB7XG4gICAgICAgICAgcG9zaXRpb24gPSBnZXRFbGVtZW50UG9zaXRpb24oZWwpXG4gICAgICAgIH0gZWxzZSBpZiAoaXNWYWxpZFBvc2l0aW9uKHNob3VsZFNjcm9sbCkpIHtcbiAgICAgICAgICBwb3NpdGlvbiA9IG5vcm1hbGl6ZVBvc2l0aW9uKHNob3VsZFNjcm9sbClcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChpc09iamVjdCAmJiBpc1ZhbGlkUG9zaXRpb24oc2hvdWxkU2Nyb2xsKSkge1xuICAgICAgICBwb3NpdGlvbiA9IG5vcm1hbGl6ZVBvc2l0aW9uKHNob3VsZFNjcm9sbClcbiAgICAgIH1cblxuICAgICAgaWYgKHBvc2l0aW9uKSB7XG4gICAgICAgIHdpbmRvdy5zY3JvbGxUbyhwb3NpdGlvbi54LCBwb3NpdGlvbi55KVxuICAgICAgfVxuICAgIH0pXG4gIH07XG5cbiAgcmV0dXJuIEhUTUw1SGlzdG9yeTtcbn0oSGlzdG9yeSkpO1xuXG5mdW5jdGlvbiBnZXRMb2NhdGlvbiAoYmFzZSkge1xuICB2YXIgcGF0aCA9IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZVxuICBpZiAoYmFzZSAmJiBwYXRoLmluZGV4T2YoYmFzZSkgPT09IDApIHtcbiAgICBwYXRoID0gcGF0aC5zbGljZShiYXNlLmxlbmd0aClcbiAgfVxuICByZXR1cm4gKHBhdGggfHwgJy8nKSArIHdpbmRvdy5sb2NhdGlvbi5zZWFyY2ggKyB3aW5kb3cubG9jYXRpb24uaGFzaFxufVxuXG5mdW5jdGlvbiBwdXNoU3RhdGUgKHVybCwgcmVwbGFjZSkge1xuICAvLyB0cnkuLi5jYXRjaCB0aGUgcHVzaFN0YXRlIGNhbGwgdG8gZ2V0IGFyb3VuZCBTYWZhcmlcbiAgLy8gRE9NIEV4Y2VwdGlvbiAxOCB3aGVyZSBpdCBsaW1pdHMgdG8gMTAwIHB1c2hTdGF0ZSBjYWxsc1xuICB2YXIgaGlzdG9yeSA9IHdpbmRvdy5oaXN0b3J5XG4gIHRyeSB7XG4gICAgaWYgKHJlcGxhY2UpIHtcbiAgICAgIGhpc3RvcnkucmVwbGFjZVN0YXRlKHsga2V5OiBfa2V5IH0sICcnLCB1cmwpXG4gICAgfSBlbHNlIHtcbiAgICAgIF9rZXkgPSBnZW5LZXkoKVxuICAgICAgaGlzdG9yeS5wdXNoU3RhdGUoeyBrZXk6IF9rZXkgfSwgJycsIHVybClcbiAgICB9XG4gICAgc2F2ZVNjcm9sbFBvc2l0aW9uKF9rZXkpXG4gIH0gY2F0Y2ggKGUpIHtcbiAgICB3aW5kb3cubG9jYXRpb25bcmVwbGFjZSA/ICdhc3NpZ24nIDogJ3JlcGxhY2UnXSh1cmwpXG4gIH1cbn1cblxuZnVuY3Rpb24gcmVwbGFjZVN0YXRlICh1cmwpIHtcbiAgcHVzaFN0YXRlKHVybCwgdHJ1ZSlcbn1cblxuLyogICovXG5cblxudmFyIEhhc2hIaXN0b3J5ID0gKGZ1bmN0aW9uIChIaXN0b3J5KSB7XG4gIGZ1bmN0aW9uIEhhc2hIaXN0b3J5IChyb3V0ZXIsIGJhc2UsIGZhbGxiYWNrKSB7XG4gICAgSGlzdG9yeS5jYWxsKHRoaXMsIHJvdXRlciwgYmFzZSlcblxuICAgIC8vIGNoZWNrIGhpc3RvcnkgZmFsbGJhY2sgZGVlcGxpbmtpbmdcbiAgICBpZiAoZmFsbGJhY2sgJiYgdGhpcy5jaGVja0ZhbGxiYWNrKCkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGVuc3VyZVNsYXNoKClcbiAgfVxuXG4gIGlmICggSGlzdG9yeSApIEhhc2hIaXN0b3J5Ll9fcHJvdG9fXyA9IEhpc3Rvcnk7XG4gIEhhc2hIaXN0b3J5LnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoIEhpc3RvcnkgJiYgSGlzdG9yeS5wcm90b3R5cGUgKTtcbiAgSGFzaEhpc3RvcnkucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gSGFzaEhpc3Rvcnk7XG5cbiAgSGFzaEhpc3RvcnkucHJvdG90eXBlLmNoZWNrRmFsbGJhY2sgPSBmdW5jdGlvbiBjaGVja0ZhbGxiYWNrICgpIHtcbiAgICB2YXIgbG9jYXRpb24gPSBnZXRMb2NhdGlvbih0aGlzLmJhc2UpXG4gICAgaWYgKCEvXlxcLyMvLnRlc3QobG9jYXRpb24pKSB7XG4gICAgICB3aW5kb3cubG9jYXRpb24ucmVwbGFjZShcbiAgICAgICAgY2xlYW5QYXRoKHRoaXMuYmFzZSArICcvIycgKyBsb2NhdGlvbilcbiAgICAgIClcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuICB9O1xuXG4gIEhhc2hIaXN0b3J5LnByb3RvdHlwZS5vbkhhc2hDaGFuZ2UgPSBmdW5jdGlvbiBvbkhhc2hDaGFuZ2UgKCkge1xuICAgIGlmICghZW5zdXJlU2xhc2goKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIHRoaXMudHJhbnNpdGlvblRvKGdldEhhc2goKSwgZnVuY3Rpb24gKHJvdXRlKSB7XG4gICAgICByZXBsYWNlSGFzaChyb3V0ZS5mdWxsUGF0aClcbiAgICB9KVxuICB9O1xuXG4gIEhhc2hIaXN0b3J5LnByb3RvdHlwZS5wdXNoID0gZnVuY3Rpb24gcHVzaCAobG9jYXRpb24pIHtcbiAgICB0aGlzLnRyYW5zaXRpb25Ubyhsb2NhdGlvbiwgZnVuY3Rpb24gKHJvdXRlKSB7XG4gICAgICBwdXNoSGFzaChyb3V0ZS5mdWxsUGF0aClcbiAgICB9KVxuICB9O1xuXG4gIEhhc2hIaXN0b3J5LnByb3RvdHlwZS5yZXBsYWNlID0gZnVuY3Rpb24gcmVwbGFjZSAobG9jYXRpb24pIHtcbiAgICB0aGlzLnRyYW5zaXRpb25Ubyhsb2NhdGlvbiwgZnVuY3Rpb24gKHJvdXRlKSB7XG4gICAgICByZXBsYWNlSGFzaChyb3V0ZS5mdWxsUGF0aClcbiAgICB9KVxuICB9O1xuXG4gIEhhc2hIaXN0b3J5LnByb3RvdHlwZS5nbyA9IGZ1bmN0aW9uIGdvIChuKSB7XG4gICAgd2luZG93Lmhpc3RvcnkuZ28obilcbiAgfTtcblxuICBIYXNoSGlzdG9yeS5wcm90b3R5cGUuZW5zdXJlVVJMID0gZnVuY3Rpb24gZW5zdXJlVVJMIChwdXNoKSB7XG4gICAgdmFyIGN1cnJlbnQgPSB0aGlzLmN1cnJlbnQuZnVsbFBhdGhcbiAgICBpZiAoZ2V0SGFzaCgpICE9PSBjdXJyZW50KSB7XG4gICAgICBwdXNoID8gcHVzaEhhc2goY3VycmVudCkgOiByZXBsYWNlSGFzaChjdXJyZW50KVxuICAgIH1cbiAgfTtcblxuICByZXR1cm4gSGFzaEhpc3Rvcnk7XG59KEhpc3RvcnkpKTtcblxuZnVuY3Rpb24gZW5zdXJlU2xhc2ggKCkge1xuICB2YXIgcGF0aCA9IGdldEhhc2goKVxuICBpZiAocGF0aC5jaGFyQXQoMCkgPT09ICcvJykge1xuICAgIHJldHVybiB0cnVlXG4gIH1cbiAgcmVwbGFjZUhhc2goJy8nICsgcGF0aClcbiAgcmV0dXJuIGZhbHNlXG59XG5cbmZ1bmN0aW9uIGdldEhhc2ggKCkge1xuICAvLyBXZSBjYW4ndCB1c2Ugd2luZG93LmxvY2F0aW9uLmhhc2ggaGVyZSBiZWNhdXNlIGl0J3Mgbm90XG4gIC8vIGNvbnNpc3RlbnQgYWNyb3NzIGJyb3dzZXJzIC0gRmlyZWZveCB3aWxsIHByZS1kZWNvZGUgaXQhXG4gIHZhciBocmVmID0gd2luZG93LmxvY2F0aW9uLmhyZWZcbiAgdmFyIGluZGV4ID0gaHJlZi5pbmRleE9mKCcjJylcbiAgcmV0dXJuIGluZGV4ID09PSAtMSA/ICcnIDogaHJlZi5zbGljZShpbmRleCArIDEpXG59XG5cbmZ1bmN0aW9uIHB1c2hIYXNoIChwYXRoKSB7XG4gIHdpbmRvdy5sb2NhdGlvbi5oYXNoID0gcGF0aFxufVxuXG5mdW5jdGlvbiByZXBsYWNlSGFzaCAocGF0aCkge1xuICB2YXIgaSA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmLmluZGV4T2YoJyMnKVxuICB3aW5kb3cubG9jYXRpb24ucmVwbGFjZShcbiAgICB3aW5kb3cubG9jYXRpb24uaHJlZi5zbGljZSgwLCBpID49IDAgPyBpIDogMCkgKyAnIycgKyBwYXRoXG4gIClcbn1cblxuLyogICovXG5cblxudmFyIEFic3RyYWN0SGlzdG9yeSA9IChmdW5jdGlvbiAoSGlzdG9yeSkge1xuICBmdW5jdGlvbiBBYnN0cmFjdEhpc3RvcnkgKHJvdXRlcikge1xuICAgIEhpc3RvcnkuY2FsbCh0aGlzLCByb3V0ZXIpXG4gICAgdGhpcy5zdGFjayA9IFtdXG4gICAgdGhpcy5pbmRleCA9IC0xXG4gIH1cblxuICBpZiAoIEhpc3RvcnkgKSBBYnN0cmFjdEhpc3RvcnkuX19wcm90b19fID0gSGlzdG9yeTtcbiAgQWJzdHJhY3RIaXN0b3J5LnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoIEhpc3RvcnkgJiYgSGlzdG9yeS5wcm90b3R5cGUgKTtcbiAgQWJzdHJhY3RIaXN0b3J5LnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IEFic3RyYWN0SGlzdG9yeTtcblxuICBBYnN0cmFjdEhpc3RvcnkucHJvdG90eXBlLnB1c2ggPSBmdW5jdGlvbiBwdXNoIChsb2NhdGlvbikge1xuICAgIHZhciB0aGlzJDEgPSB0aGlzO1xuXG4gICAgdGhpcy50cmFuc2l0aW9uVG8obG9jYXRpb24sIGZ1bmN0aW9uIChyb3V0ZSkge1xuICAgICAgdGhpcyQxLnN0YWNrID0gdGhpcyQxLnN0YWNrLnNsaWNlKDAsIHRoaXMkMS5pbmRleCArIDEpLmNvbmNhdChyb3V0ZSlcbiAgICAgIHRoaXMkMS5pbmRleCsrXG4gICAgfSlcbiAgfTtcblxuICBBYnN0cmFjdEhpc3RvcnkucHJvdG90eXBlLnJlcGxhY2UgPSBmdW5jdGlvbiByZXBsYWNlIChsb2NhdGlvbikge1xuICAgIHZhciB0aGlzJDEgPSB0aGlzO1xuXG4gICAgdGhpcy50cmFuc2l0aW9uVG8obG9jYXRpb24sIGZ1bmN0aW9uIChyb3V0ZSkge1xuICAgICAgdGhpcyQxLnN0YWNrID0gdGhpcyQxLnN0YWNrLnNsaWNlKDAsIHRoaXMkMS5pbmRleCkuY29uY2F0KHJvdXRlKVxuICAgIH0pXG4gIH07XG5cbiAgQWJzdHJhY3RIaXN0b3J5LnByb3RvdHlwZS5nbyA9IGZ1bmN0aW9uIGdvIChuKSB7XG4gICAgdmFyIHRoaXMkMSA9IHRoaXM7XG5cbiAgICB2YXIgdGFyZ2V0SW5kZXggPSB0aGlzLmluZGV4ICsgblxuICAgIGlmICh0YXJnZXRJbmRleCA8IDAgfHwgdGFyZ2V0SW5kZXggPj0gdGhpcy5zdGFjay5sZW5ndGgpIHtcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICB2YXIgcm91dGUgPSB0aGlzLnN0YWNrW3RhcmdldEluZGV4XVxuICAgIHRoaXMuY29uZmlybVRyYW5zaXRpb24ocm91dGUsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHRoaXMkMS5pbmRleCA9IHRhcmdldEluZGV4XG4gICAgICB0aGlzJDEudXBkYXRlUm91dGUocm91dGUpXG4gICAgfSlcbiAgfTtcblxuICBBYnN0cmFjdEhpc3RvcnkucHJvdG90eXBlLmVuc3VyZVVSTCA9IGZ1bmN0aW9uIGVuc3VyZVVSTCAoKSB7XG4gICAgLy8gbm9vcFxuICB9O1xuXG4gIHJldHVybiBBYnN0cmFjdEhpc3Rvcnk7XG59KEhpc3RvcnkpKTtcblxuLyogICovXG5cbnZhciBWdWVSb3V0ZXIgPSBmdW5jdGlvbiBWdWVSb3V0ZXIgKG9wdGlvbnMpIHtcbiAgaWYgKCBvcHRpb25zID09PSB2b2lkIDAgKSBvcHRpb25zID0ge307XG5cbiAgdGhpcy5hcHAgPSBudWxsXG4gIHRoaXMub3B0aW9ucyA9IG9wdGlvbnNcbiAgdGhpcy5iZWZvcmVIb29rcyA9IFtdXG4gIHRoaXMuYWZ0ZXJIb29rcyA9IFtdXG4gIHRoaXMubWF0Y2ggPSBjcmVhdGVNYXRjaGVyKG9wdGlvbnMucm91dGVzIHx8IFtdKVxuXG4gIHZhciBtb2RlID0gb3B0aW9ucy5tb2RlIHx8ICdoYXNoJ1xuICB0aGlzLmZhbGxiYWNrID0gbW9kZSA9PT0gJ2hpc3RvcnknICYmICFzdXBwb3J0c0hpc3RvcnlcbiAgaWYgKHRoaXMuZmFsbGJhY2spIHtcbiAgICBtb2RlID0gJ2hhc2gnXG4gIH1cbiAgaWYgKCFpbkJyb3dzZXIpIHtcbiAgICBtb2RlID0gJ2Fic3RyYWN0J1xuICB9XG4gIHRoaXMubW9kZSA9IG1vZGVcblxuICBzd2l0Y2ggKG1vZGUpIHtcbiAgICBjYXNlICdoaXN0b3J5JzpcbiAgICAgIHRoaXMuaGlzdG9yeSA9IG5ldyBIVE1MNUhpc3RvcnkodGhpcywgb3B0aW9ucy5iYXNlKVxuICAgICAgYnJlYWtcbiAgICBjYXNlICdoYXNoJzpcbiAgICAgIHRoaXMuaGlzdG9yeSA9IG5ldyBIYXNoSGlzdG9yeSh0aGlzLCBvcHRpb25zLmJhc2UsIHRoaXMuZmFsbGJhY2spXG4gICAgICBicmVha1xuICAgIGNhc2UgJ2Fic3RyYWN0JzpcbiAgICAgIHRoaXMuaGlzdG9yeSA9IG5ldyBBYnN0cmFjdEhpc3RvcnkodGhpcylcbiAgICAgIGJyZWFrXG4gICAgZGVmYXVsdDpcbiAgICAgIGFzc2VydChmYWxzZSwgKFwiaW52YWxpZCBtb2RlOiBcIiArIG1vZGUpKVxuICB9XG59O1xuXG52YXIgcHJvdG90eXBlQWNjZXNzb3JzID0geyBjdXJyZW50Um91dGU6IHt9IH07XG5cbnByb3RvdHlwZUFjY2Vzc29ycy5jdXJyZW50Um91dGUuZ2V0ID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdGhpcy5oaXN0b3J5ICYmIHRoaXMuaGlzdG9yeS5jdXJyZW50XG59O1xuXG5WdWVSb3V0ZXIucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbiBpbml0IChhcHAgLyogVnVlIGNvbXBvbmVudCBpbnN0YW5jZSAqLykge1xuICAgIHZhciB0aGlzJDEgPSB0aGlzO1xuXG4gIGFzc2VydChcbiAgICBpbnN0YWxsLmluc3RhbGxlZCxcbiAgICBcIm5vdCBpbnN0YWxsZWQuIE1ha2Ugc3VyZSB0byBjYWxsIGBWdWUudXNlKFZ1ZVJvdXRlcilgIFwiICtcbiAgICBcImJlZm9yZSBjcmVhdGluZyByb290IGluc3RhbmNlLlwiXG4gIClcblxuICB0aGlzLmFwcCA9IGFwcFxuXG4gIHZhciBoaXN0b3J5ID0gdGhpcy5oaXN0b3J5XG5cbiAgaWYgKGhpc3RvcnkgaW5zdGFuY2VvZiBIVE1MNUhpc3RvcnkpIHtcbiAgICBoaXN0b3J5LnRyYW5zaXRpb25UbyhnZXRMb2NhdGlvbihoaXN0b3J5LmJhc2UpKVxuICB9IGVsc2UgaWYgKGhpc3RvcnkgaW5zdGFuY2VvZiBIYXNoSGlzdG9yeSkge1xuICAgIGhpc3RvcnkudHJhbnNpdGlvblRvKGdldEhhc2goKSwgZnVuY3Rpb24gKCkge1xuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2hhc2hjaGFuZ2UnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGhpc3Rvcnkub25IYXNoQ2hhbmdlKClcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxuXG4gIGhpc3RvcnkubGlzdGVuKGZ1bmN0aW9uIChyb3V0ZSkge1xuICAgIHRoaXMkMS5hcHAuX3JvdXRlID0gcm91dGVcbiAgfSlcbn07XG5cblZ1ZVJvdXRlci5wcm90b3R5cGUuYmVmb3JlRWFjaCA9IGZ1bmN0aW9uIGJlZm9yZUVhY2ggKGZuKSB7XG4gIHRoaXMuYmVmb3JlSG9va3MucHVzaChmbilcbn07XG5cblZ1ZVJvdXRlci5wcm90b3R5cGUuYWZ0ZXJFYWNoID0gZnVuY3Rpb24gYWZ0ZXJFYWNoIChmbikge1xuICB0aGlzLmFmdGVySG9va3MucHVzaChmbilcbn07XG5cblZ1ZVJvdXRlci5wcm90b3R5cGUucHVzaCA9IGZ1bmN0aW9uIHB1c2ggKGxvY2F0aW9uKSB7XG4gIHRoaXMuaGlzdG9yeS5wdXNoKGxvY2F0aW9uKVxufTtcblxuVnVlUm91dGVyLnByb3RvdHlwZS5yZXBsYWNlID0gZnVuY3Rpb24gcmVwbGFjZSAobG9jYXRpb24pIHtcbiAgdGhpcy5oaXN0b3J5LnJlcGxhY2UobG9jYXRpb24pXG59O1xuXG5WdWVSb3V0ZXIucHJvdG90eXBlLmdvID0gZnVuY3Rpb24gZ28gKG4pIHtcbiAgdGhpcy5oaXN0b3J5LmdvKG4pXG59O1xuXG5WdWVSb3V0ZXIucHJvdG90eXBlLmJhY2sgPSBmdW5jdGlvbiBiYWNrICgpIHtcbiAgdGhpcy5nbygtMSlcbn07XG5cblZ1ZVJvdXRlci5wcm90b3R5cGUuZm9yd2FyZCA9IGZ1bmN0aW9uIGZvcndhcmQgKCkge1xuICB0aGlzLmdvKDEpXG59O1xuXG5WdWVSb3V0ZXIucHJvdG90eXBlLmdldE1hdGNoZWRDb21wb25lbnRzID0gZnVuY3Rpb24gZ2V0TWF0Y2hlZENvbXBvbmVudHMgKCkge1xuICBpZiAoIXRoaXMuY3VycmVudFJvdXRlKSB7XG4gICAgcmV0dXJuIFtdXG4gIH1cbiAgcmV0dXJuIFtdLmNvbmNhdC5hcHBseShbXSwgdGhpcy5jdXJyZW50Um91dGUubWF0Y2hlZC5tYXAoZnVuY3Rpb24gKG0pIHtcbiAgICByZXR1cm4gT2JqZWN0LmtleXMobS5jb21wb25lbnRzKS5tYXAoZnVuY3Rpb24gKGtleSkge1xuICAgICAgcmV0dXJuIG0uY29tcG9uZW50c1trZXldXG4gICAgfSlcbiAgfSkpXG59O1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydGllcyggVnVlUm91dGVyLnByb3RvdHlwZSwgcHJvdG90eXBlQWNjZXNzb3JzICk7XG5cblZ1ZVJvdXRlci5pbnN0YWxsID0gaW5zdGFsbFxuXG5pZiAoaW5Ccm93c2VyICYmIHdpbmRvdy5WdWUpIHtcbiAgd2luZG93LlZ1ZS51c2UoVnVlUm91dGVyKVxufVxuXG5yZXR1cm4gVnVlUm91dGVyO1xuXG59KSkpO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0U6L1Rlc3RXb3JrL3Z1ZS9+L3Z1ZS1yb3V0ZXIvZGlzdC92dWUtcm91dGVyLmpzIiwiLyoqXHJcbiAqIOaPj+i/sDog6Lev55Sx6YWN572u5paH5Lu2XHJcbiAqIOeJiOadgzogQ29weXJpZ2h0IChjKSAyMDE2XHJcbiAqIOWFrOWPuDog5rex5Zyz5biC5piK5pmo56eR5oqA5byA5Y+R5pyJ6ZmQ5YWs5Y+4XHJcbiAqIOS9nOiAhTog6ZmI5YWDXHJcbiAqIOeJiOacrDogMS4wXHJcbiAqIOWIm+W7uuaXpeacnzogMjAxNi8xMS8yM1xyXG4gKiDliJvlu7rml7bpl7Q6IDEwOjExXHJcbiAqL1xyXG5pbXBvcnQgVnVlUm91dGVyIGZyb20gXCJ2dWUtcm91dGVyXCI7ICAgICAgICAgICAgICAgICAgICAgICAgIC8vIOi3r+eUseaPkuS7tlxyXG5sZXQgSW5kZXhWaWV3ID0gcmVxdWlyZShcIi4vdmlld3MvaW5kZXgudnVlXCIpOyAgICAgICAgICAgICAgICAvLyDlvJXlhaVpbmRleFZ1ZVxyXG5pbXBvcnQgVXNlclZpZXcgZnJvbSBcIi4vdmlld3MvdXNlci92aWV3XCI7ICAgICAgICAgICAgICAgICAgIC8vIOW8leWFpVVzZXLop4blm75cclxuaW1wb3J0IFVzZXJWaWV3TWVtYmVyIGZyb20gXCIuL3ZpZXdzL3VzZXIvbWVtYmVyL3ZpZXdcIjsgICAgICAvLyDlvJXlhaVVc2VyTWVtYmVy6KeG5Zu+XHJcblxyXG4vLyDlrprkuYnot6/nlLFcclxuY29uc3Qgcm91dGVzID0gW1xyXG4gICAge1xyXG4gICAgICAgIG5hbWU6IFwiZm9vXCIsXHJcbiAgICAgICAgcGF0aDogXCIvZm9vXCIsXHJcbiAgICAgICAgLy8gcmVkaXJlY3Q6IFwiaW5kZXhcIixcclxuICAgICAgICBjb21wb25lbnQ6IHtcclxuICAgICAgICAgICAgdGVtcGxhdGU6IFwiPGRpdj5mb288L2Rpdj5cIlxyXG4gICAgICAgIH1cclxuICAgIH0sIHtcclxuICAgICAgICBuYW1lOiBcImluZGV4XCIsXHJcbiAgICAgICAgcGF0aDogXCIvaW5kZXhcIixcclxuICAgICAgICBjb21wb25lbnQ6IEluZGV4Vmlld1xyXG4gICAgfSAsIHtcclxuICAgICAgICBuYW1lOiBcInVzZXJcIixcclxuICAgICAgICBwYXRoOiBcIi91c2VyLzppZFwiLFxyXG4gICAgICAgIGNvbXBvbmVudDogVXNlclZpZXcsXHJcbiAgICAgICAgY2hpbGRyZW46W1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBwYXRoOiBcIm1lbWJlclwiLFxyXG4gICAgICAgICAgICAgICAgY29tcG9uZW50OiBVc2VyVmlld01lbWJlclxyXG4gICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICBwYXRoOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgY29tcG9uZW50OiBVc2VyVmlld01lbWJlclxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXVxyXG4gICAgfVxyXG5dO1xyXG5cclxuY29uc3Qgcm91dGVyID0gbmV3IFZ1ZVJvdXRlcih7cm91dGVzfSk7ICAgICAgICAgLy8g5a6e5L6L5YyW5LiA5LiqVnVlUm91dGVy6Lev55Sx5a+56LGhXHJcblxyXG5leHBvcnQgZGVmYXVsdCByb3V0ZXI7XHJcbmV4cG9ydCB7cm91dGVyfTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9FOi9UZXN0V29yay92dWUvc3JjL3JvdXRlci5qcyIsIi8qKlxyXG4gKiDmj4/ov7A6IOeUqOaIt+inhuWbvlxyXG4gKiDniYjmnYM6IENvcHlyaWdodCAoYykgMjAxNlxyXG4gKiDlhazlj7g6IOa3seWcs+W4guaYiuaZqOenkeaKgOW8gOWPkeaciemZkOWFrOWPuFxyXG4gKiDkvZzogIU6IOmZiOWFg1xyXG4gKiDniYjmnKw6IDEuMFxyXG4gKiDliJvlu7rml6XmnJ86IDIwMTYvMTEvMjNcclxuICog5Yib5bu65pe26Ze0OiAxNjoyN1xyXG4gKi9cclxuaW1wb3J0IFZpZXcgZnJvbSBcIi4uLy4uL3V0aWxzL3ZpZXdcIjsgICAgICAgICAgICAgICAgLy8g5a+85YWl6KeG5Zu+54i257G7XHJcbmxldCBVc2VyVGVtcGxhdGUgPSByZXF1aXJlKFwiLi92aWV3LnZ1ZVwiKTsgICAgICAgICAgICAvLyDlr7zlhaXop4blm77mqKHmnb9cclxuXHJcbmNsYXNzIFVzZXJWaWV3IGV4dGVuZHMgVmlldyB7XHJcbiAgICBjb25zdHJ1Y3Rvcih2aWV3KSB7XHJcbiAgICAgICAgc3VwZXIodmlldyk7XHJcbiAgICB9XHJcblxyXG4gICAgd2F0Y2goKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgJHJvdXRlOiBmdW5jdGlvbiAodG8sIGZyb20pIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRvKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGZyb20pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBkYXRhKCkge1xyXG4gICAgICAgIGxldCBkYXRhID0ge1xyXG4gICAgICAgICAgICBuYW1lOiBcIlVzZXJWaWV3XCIsXHJcbiAgICAgICAgICAgIG1lc3NhZ2U6IFwi6L+Z5piv5LiA5p2h5rWL6K+V5raI5oGvXCJcclxuICAgICAgICB9O1xyXG4gICAgICAgIGxldCBpbmRleCA9IDA7XHJcbiAgICAgICAgbGV0IHQgPSBzZXRJbnRlcnZhbCgoKT0+IHtcclxuICAgICAgICAgICAgZGF0YS5tZXNzYWdlICs9IFwiQFwiO1xyXG4gICAgICAgICAgICBpbmRleCsrO1xyXG4gICAgICAgICAgICBpZiAoaW5kZXggPj0gMTApIHtcclxuICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwodCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LCAyMDApO1xyXG4gICAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZWQoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJz09PT09VXNlclZpZXcgQ3JlYXRlZD09PT09Jyk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IG5ldyBVc2VyVmlldyhVc2VyVGVtcGxhdGUpO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0U6L1Rlc3RXb3JrL3Z1ZS9zcmMvdmlld3MvdXNlci92aWV3LmpzIiwiLyoqXHJcbiAqIOaPj+i/sDog6KeG5Zu+57G7XHJcbiAqIOeJiOadgzogQ29weXJpZ2h0IChjKSAyMDE2XHJcbiAqIOWFrOWPuDog5rex5Zyz5biC5piK5pmo56eR5oqA5byA5Y+R5pyJ6ZmQ5YWs5Y+4XHJcbiAqIOS9nOiAhTog6ZmI5YWDXHJcbiAqIOeJiOacrDogMS4wXHJcbiAqIOWIm+W7uuaXpeacnzogMjAxNi8xMS8yM1xyXG4gKiDliJvlu7rml7bpl7Q6IDE2OjIxXHJcbiAqL1xyXG5jbGFzcyBWaWV3IHtcclxuICAgIGNvbnN0cnVjdG9yKHZpZXcpIHtcclxuICAgICAgICBpZiAodmlldyA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlZpZXfnsbvmnoTpgKDmlrnms5XnmoTlj4LmlbDkuI3og73kuLrnqbpcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghKHR5cGVvZih2aWV3KSA9PSBcIm9iamVjdFwiICYmIHR5cGVvZih2aWV3LnJlbmRlcikgPT0gXCJmdW5jdGlvblwiKSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiVmlld+exu+aehOmAoOaWueazleeahOWPguaVsOW/hemhu+S4unZ1Zeaooeadv+WvueixoVwiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0eXBlb2YodGhpcy5kYXRhKSA9PT0gXCJmdW5jdGlvblwiKSB7ICAgICAgICAgICAgICAgICAvLyDmj5Dlj5blrZDnsbvnmoRkYXRh5pa55rOVXHJcbiAgICAgICAgICAgIHZpZXcuZGF0YSA9IHRoaXMuZGF0YTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0eXBlb2YodGhpcy5jcmVhdGVkKSA9PT0gXCJmdW5jdGlvblwiKSB7ICAgICAgICAgICAgICAvLyDmj5Dlj5blrZDnsbvnmoRjcmVhdGVk5pa55rOVXHJcbiAgICAgICAgICAgIHZpZXcuY3JlYXRlZCA9IHRoaXMuY3JlYXRlZDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0eXBlb2YodGhpcy53YXRjaCkgPT09IFwiZnVuY3Rpb25cIikgeyAgICAgICAgICAgICAgICAvLyDmj5Dlj5blrZDnsbvnmoR3YXRjaOaWueazlee7k+aenFxyXG4gICAgICAgICAgICB2aWV3LndhdGNoID0gdGhpc1snd2F0Y2gnXSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZm9yIChsZXQgayBpbiB2aWV3KSB7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gIOWwhlZ1Zeaooeadv+WvueixoeeahOaWueazleaLt+i0neWIsFZpZXflrp7kvovkuIpcclxuICAgICAgICAgICAgaWYgKHZpZXcuaGFzT3duUHJvcGVydHkoaykpXHJcbiAgICAgICAgICAgICAgICB0aGlzW2tdID0gdmlld1trXTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFZpZXc7XHJcbmV4cG9ydCB7Vmlld307XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vRTovVGVzdFdvcmsvdnVlL3NyYy91dGlscy92aWV3LmpzIiwidmFyIF9fdnVlX2V4cG9ydHNfXywgX192dWVfb3B0aW9uc19fXG52YXIgX192dWVfc3R5bGVzX18gPSB7fVxuXG4vKiBzdHlsZXMgKi9cbnJlcXVpcmUoXCIhIXZ1ZS1zdHlsZS1sb2FkZXIhY3NzLWxvYWRlcj9zb3VyY2VNYXAhdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXI/aWQ9ZGF0YS12LWYyNjUxZGFjIXZ1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c3R5bGVzJmluZGV4PTAhLi92aWV3LnZ1ZVwiKVxuXG4vKiB0ZW1wbGF0ZSAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX18gPSByZXF1aXJlKFwiISF2dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj9pZD1kYXRhLXYtZjI2NTFkYWMhdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vdmlldy52dWVcIilcbl9fdnVlX29wdGlvbnNfXyA9IF9fdnVlX2V4cG9ydHNfXyA9IF9fdnVlX2V4cG9ydHNfXyB8fCB7fVxuaWYgKFxuICB0eXBlb2YgX192dWVfZXhwb3J0c19fLmRlZmF1bHQgPT09IFwib2JqZWN0XCIgfHxcbiAgdHlwZW9mIF9fdnVlX2V4cG9ydHNfXy5kZWZhdWx0ID09PSBcImZ1bmN0aW9uXCJcbikge1xuaWYgKE9iamVjdC5rZXlzKF9fdnVlX2V4cG9ydHNfXykuc29tZShmdW5jdGlvbiAoa2V5KSB7IHJldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleSAhPT0gXCJfX2VzTW9kdWxlXCIgfSkpIHtjb25zb2xlLmVycm9yKFwibmFtZWQgZXhwb3J0cyBhcmUgbm90IHN1cHBvcnRlZCBpbiAqLnZ1ZSBmaWxlcy5cIil9XG5fX3Z1ZV9vcHRpb25zX18gPSBfX3Z1ZV9leHBvcnRzX18gPSBfX3Z1ZV9leHBvcnRzX18uZGVmYXVsdFxufVxuaWYgKHR5cGVvZiBfX3Z1ZV9vcHRpb25zX18gPT09IFwiZnVuY3Rpb25cIikge1xuICBfX3Z1ZV9vcHRpb25zX18gPSBfX3Z1ZV9vcHRpb25zX18ub3B0aW9uc1xufVxuX192dWVfb3B0aW9uc19fLl9fZmlsZSA9IFwiRTpcXFxcVGVzdFdvcmtcXFxcdnVlXFxcXHNyY1xcXFx2aWV3c1xcXFx1c2VyXFxcXHZpZXcudnVlXCJcbl9fdnVlX29wdGlvbnNfXy5yZW5kZXIgPSBfX3Z1ZV90ZW1wbGF0ZV9fLnJlbmRlclxuX192dWVfb3B0aW9uc19fLnN0YXRpY1JlbmRlckZucyA9IF9fdnVlX3RlbXBsYXRlX18uc3RhdGljUmVuZGVyRm5zXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi1mMjY1MWRhY1wiLCBfX3Z1ZV9vcHRpb25zX18pXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi1mMjY1MWRhY1wiLCBfX3Z1ZV9vcHRpb25zX18pXG4gIH1cbn0pKCl9XG5pZiAoX192dWVfb3B0aW9uc19fLmZ1bmN0aW9uYWwpIHtjb25zb2xlLmVycm9yKFwiW3Z1ZS1sb2FkZXJdIHZpZXcudnVlOiBmdW5jdGlvbmFsIGNvbXBvbmVudHMgYXJlIG5vdCBzdXBwb3J0ZWQgYW5kIHNob3VsZCBiZSBkZWZpbmVkIGluIHBsYWluIGpzIGZpbGVzIHVzaW5nIHJlbmRlciBmdW5jdGlvbnMuXCIpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9fdnVlX2V4cG9ydHNfX1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvdmlld3MvdXNlci92aWV3LnZ1ZVxuLy8gbW9kdWxlIGlkID0gNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LWYyNjUxZGFjIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi92aWV3LnZ1ZVwiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9hZGRTdHlsZXMuanNcIikoY29udGVudCwge30pO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG5cdC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdGlmKCFjb250ZW50LmxvY2Fscykge1xuXHRcdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtZjI2NTFkYWMhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3ZpZXcudnVlXCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtZjI2NTFkYWMhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3ZpZXcudnVlXCIpO1xuXHRcdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cdFx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdFx0fSk7XG5cdH1cblx0Ly8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLXN0eWxlLWxvYWRlciEuL34vY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9+L3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi1mMjY1MWRhYyEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3NyYy92aWV3cy91c2VyL3ZpZXcudnVlXG4vLyBtb2R1bGUgaWQgPSA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuaDEge1xcbiAgICBjb2xvcjogI0YwMDtcXG59XFxuXCIsIFwiXCIsIHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIi8uL3NyYy92aWV3cy91c2VyL3ZpZXcudnVlPzU3NzZiNjUyXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7QUFVQTtJQUNBLFlBQUE7Q0FDQVwiLFwiZmlsZVwiOlwidmlldy52dWVcIixcInNvdXJjZXNDb250ZW50XCI6W1wiPHRlbXBsYXRlPlxcclxcbiAgICA8ZGl2IGlkPVxcXCJ1c2VyXFxcIj5cXHJcXG4gICAgICAgIDxoMT5IZWxsbyB7e25hbWV9fTwvaDE+XFxyXFxuICAgICAgICA8cD57eyRyb3V0ZS5wYXJhbXMuaWR9fTwvcD5cXHJcXG4gICAgICAgIDxkaXYgdi10ZXh0PVxcXCJtZXNzYWdlXFxcIj48L2Rpdj5cXHJcXG4gICAgICAgIDxyb3V0ZXItdmlldz48L3JvdXRlci12aWV3PlxcclxcbiAgICA8L2Rpdj5cXHJcXG48L3RlbXBsYXRlPlxcclxcblxcclxcbjxzdHlsZT5cXHJcXG4gICAgaDEge1xcclxcbiAgICAgICAgY29sb3I6ICNGMDA7XFxyXFxuICAgIH1cXHJcXG48L3N0eWxlPlwiXSxcInNvdXJjZVJvb3RcIjpcIndlYnBhY2s6Ly9cIn1dKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vfi92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtZjI2NTFkYWMhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9zcmMvdmlld3MvdXNlci92aWV3LnZ1ZVxuLy8gbW9kdWxlIGlkID0gOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKlxyXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXHJcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxyXG4qL1xyXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkge1xyXG5cdHZhciBsaXN0ID0gW107XHJcblxyXG5cdC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcclxuXHRsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XHJcblx0XHR2YXIgcmVzdWx0ID0gW107XHJcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHR2YXIgaXRlbSA9IHRoaXNbaV07XHJcblx0XHRcdGlmKGl0ZW1bMl0pIHtcclxuXHRcdFx0XHRyZXN1bHQucHVzaChcIkBtZWRpYSBcIiArIGl0ZW1bMl0gKyBcIntcIiArIGl0ZW1bMV0gKyBcIn1cIik7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0cmVzdWx0LnB1c2goaXRlbVsxXSk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdHJldHVybiByZXN1bHQuam9pbihcIlwiKTtcclxuXHR9O1xyXG5cclxuXHQvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxyXG5cdGxpc3QuaSA9IGZ1bmN0aW9uKG1vZHVsZXMsIG1lZGlhUXVlcnkpIHtcclxuXHRcdGlmKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKVxyXG5cdFx0XHRtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCBcIlwiXV07XHJcblx0XHR2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xyXG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0dmFyIGlkID0gdGhpc1tpXVswXTtcclxuXHRcdFx0aWYodHlwZW9mIGlkID09PSBcIm51bWJlclwiKVxyXG5cdFx0XHRcdGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcclxuXHRcdH1cclxuXHRcdGZvcihpID0gMDsgaSA8IG1vZHVsZXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0dmFyIGl0ZW0gPSBtb2R1bGVzW2ldO1xyXG5cdFx0XHQvLyBza2lwIGFscmVhZHkgaW1wb3J0ZWQgbW9kdWxlXHJcblx0XHRcdC8vIHRoaXMgaW1wbGVtZW50YXRpb24gaXMgbm90IDEwMCUgcGVyZmVjdCBmb3Igd2VpcmQgbWVkaWEgcXVlcnkgY29tYmluYXRpb25zXHJcblx0XHRcdC8vICB3aGVuIGEgbW9kdWxlIGlzIGltcG9ydGVkIG11bHRpcGxlIHRpbWVzIHdpdGggZGlmZmVyZW50IG1lZGlhIHF1ZXJpZXMuXHJcblx0XHRcdC8vICBJIGhvcGUgdGhpcyB3aWxsIG5ldmVyIG9jY3VyIChIZXkgdGhpcyB3YXkgd2UgaGF2ZSBzbWFsbGVyIGJ1bmRsZXMpXHJcblx0XHRcdGlmKHR5cGVvZiBpdGVtWzBdICE9PSBcIm51bWJlclwiIHx8ICFhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XHJcblx0XHRcdFx0aWYobWVkaWFRdWVyeSAmJiAhaXRlbVsyXSkge1xyXG5cdFx0XHRcdFx0aXRlbVsyXSA9IG1lZGlhUXVlcnk7XHJcblx0XHRcdFx0fSBlbHNlIGlmKG1lZGlhUXVlcnkpIHtcclxuXHRcdFx0XHRcdGl0ZW1bMl0gPSBcIihcIiArIGl0ZW1bMl0gKyBcIikgYW5kIChcIiArIG1lZGlhUXVlcnkgKyBcIilcIjtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0bGlzdC5wdXNoKGl0ZW0pO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fTtcclxuXHRyZXR1cm4gbGlzdDtcclxufTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vRTovVGVzdFdvcmsvdnVlL34vY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanMiLCIvKlxuXHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xudmFyIHN0eWxlc0luRG9tID0ge30sXG5cdG1lbW9pemUgPSBmdW5jdGlvbihmbikge1xuXHRcdHZhciBtZW1vO1xuXHRcdHJldHVybiBmdW5jdGlvbiAoKSB7XG5cdFx0XHRpZiAodHlwZW9mIG1lbW8gPT09IFwidW5kZWZpbmVkXCIpIG1lbW8gPSBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuXHRcdFx0cmV0dXJuIG1lbW87XG5cdFx0fTtcblx0fSxcblx0aXNPbGRJRSA9IG1lbW9pemUoZnVuY3Rpb24oKSB7XG5cdFx0cmV0dXJuIC9tc2llIFs2LTldXFxiLy50ZXN0KHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCkpO1xuXHR9KSxcblx0Z2V0SGVhZEVsZW1lbnQgPSBtZW1vaXplKGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gZG9jdW1lbnQuaGVhZCB8fCBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImhlYWRcIilbMF07XG5cdH0pLFxuXHRzaW5nbGV0b25FbGVtZW50ID0gbnVsbCxcblx0c2luZ2xldG9uQ291bnRlciA9IDAsXG5cdHN0eWxlRWxlbWVudHNJbnNlcnRlZEF0VG9wID0gW107XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obGlzdCwgb3B0aW9ucykge1xuXHRpZih0eXBlb2YgREVCVUcgIT09IFwidW5kZWZpbmVkXCIgJiYgREVCVUcpIHtcblx0XHRpZih0eXBlb2YgZG9jdW1lbnQgIT09IFwib2JqZWN0XCIpIHRocm93IG5ldyBFcnJvcihcIlRoZSBzdHlsZS1sb2FkZXIgY2Fubm90IGJlIHVzZWQgaW4gYSBub24tYnJvd3NlciBlbnZpcm9ubWVudFwiKTtcblx0fVxuXG5cdG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXHQvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cblx0Ly8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXHRpZiAodHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uID09PSBcInVuZGVmaW5lZFwiKSBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcblxuXHQvLyBCeSBkZWZhdWx0LCBhZGQgPHN0eWxlPiB0YWdzIHRvIHRoZSBib3R0b20gb2YgPGhlYWQ+LlxuXHRpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwidW5kZWZpbmVkXCIpIG9wdGlvbnMuaW5zZXJ0QXQgPSBcImJvdHRvbVwiO1xuXG5cdHZhciBzdHlsZXMgPSBsaXN0VG9TdHlsZXMobGlzdCk7XG5cdGFkZFN0eWxlc1RvRG9tKHN0eWxlcywgb3B0aW9ucyk7XG5cblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG5cdFx0dmFyIG1heVJlbW92ZSA9IFtdO1xuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xuXHRcdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XG5cdFx0XHRkb21TdHlsZS5yZWZzLS07XG5cdFx0XHRtYXlSZW1vdmUucHVzaChkb21TdHlsZSk7XG5cdFx0fVxuXHRcdGlmKG5ld0xpc3QpIHtcblx0XHRcdHZhciBuZXdTdHlsZXMgPSBsaXN0VG9TdHlsZXMobmV3TGlzdCk7XG5cdFx0XHRhZGRTdHlsZXNUb0RvbShuZXdTdHlsZXMsIG9wdGlvbnMpO1xuXHRcdH1cblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgbWF5UmVtb3ZlLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBtYXlSZW1vdmVbaV07XG5cdFx0XHRpZihkb21TdHlsZS5yZWZzID09PSAwKSB7XG5cdFx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKylcblx0XHRcdFx0XHRkb21TdHlsZS5wYXJ0c1tqXSgpO1xuXHRcdFx0XHRkZWxldGUgc3R5bGVzSW5Eb21bZG9tU3R5bGUuaWRdO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcbn1cblxuZnVuY3Rpb24gYWRkU3R5bGVzVG9Eb20oc3R5bGVzLCBvcHRpb25zKSB7XG5cdGZvcih2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcblx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcblx0XHRpZihkb21TdHlsZSkge1xuXHRcdFx0ZG9tU3R5bGUucmVmcysrO1xuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzW2pdKGl0ZW0ucGFydHNbal0pO1xuXHRcdFx0fVxuXHRcdFx0Zm9yKDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0ZG9tU3R5bGUucGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdHZhciBwYXJ0cyA9IFtdO1xuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0cGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XG5cdFx0XHR9XG5cdFx0XHRzdHlsZXNJbkRvbVtpdGVtLmlkXSA9IHtpZDogaXRlbS5pZCwgcmVmczogMSwgcGFydHM6IHBhcnRzfTtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gbGlzdFRvU3R5bGVzKGxpc3QpIHtcblx0dmFyIHN0eWxlcyA9IFtdO1xuXHR2YXIgbmV3U3R5bGVzID0ge307XG5cdGZvcih2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGl0ZW0gPSBsaXN0W2ldO1xuXHRcdHZhciBpZCA9IGl0ZW1bMF07XG5cdFx0dmFyIGNzcyA9IGl0ZW1bMV07XG5cdFx0dmFyIG1lZGlhID0gaXRlbVsyXTtcblx0XHR2YXIgc291cmNlTWFwID0gaXRlbVszXTtcblx0XHR2YXIgcGFydCA9IHtjc3M6IGNzcywgbWVkaWE6IG1lZGlhLCBzb3VyY2VNYXA6IHNvdXJjZU1hcH07XG5cdFx0aWYoIW5ld1N0eWxlc1tpZF0pXG5cdFx0XHRzdHlsZXMucHVzaChuZXdTdHlsZXNbaWRdID0ge2lkOiBpZCwgcGFydHM6IFtwYXJ0XX0pO1xuXHRcdGVsc2Vcblx0XHRcdG5ld1N0eWxlc1tpZF0ucGFydHMucHVzaChwYXJ0KTtcblx0fVxuXHRyZXR1cm4gc3R5bGVzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgc3R5bGVFbGVtZW50KSB7XG5cdHZhciBoZWFkID0gZ2V0SGVhZEVsZW1lbnQoKTtcblx0dmFyIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wID0gc3R5bGVFbGVtZW50c0luc2VydGVkQXRUb3Bbc3R5bGVFbGVtZW50c0luc2VydGVkQXRUb3AubGVuZ3RoIC0gMV07XG5cdGlmIChvcHRpb25zLmluc2VydEF0ID09PSBcInRvcFwiKSB7XG5cdFx0aWYoIWxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wKSB7XG5cdFx0XHRoZWFkLmluc2VydEJlZm9yZShzdHlsZUVsZW1lbnQsIGhlYWQuZmlyc3RDaGlsZCk7XG5cdFx0fSBlbHNlIGlmKGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKSB7XG5cdFx0XHRoZWFkLmluc2VydEJlZm9yZShzdHlsZUVsZW1lbnQsIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0aGVhZC5hcHBlbmRDaGlsZChzdHlsZUVsZW1lbnQpO1xuXHRcdH1cblx0XHRzdHlsZUVsZW1lbnRzSW5zZXJ0ZWRBdFRvcC5wdXNoKHN0eWxlRWxlbWVudCk7XG5cdH0gZWxzZSBpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJib3R0b21cIikge1xuXHRcdGhlYWQuYXBwZW5kQ2hpbGQoc3R5bGVFbGVtZW50KTtcblx0fSBlbHNlIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIHZhbHVlIGZvciBwYXJhbWV0ZXIgJ2luc2VydEF0Jy4gTXVzdCBiZSAndG9wJyBvciAnYm90dG9tJy5cIik7XG5cdH1cbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuXHRzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xuXHR2YXIgaWR4ID0gc3R5bGVFbGVtZW50c0luc2VydGVkQXRUb3AuaW5kZXhPZihzdHlsZUVsZW1lbnQpO1xuXHRpZihpZHggPj0gMCkge1xuXHRcdHN0eWxlRWxlbWVudHNJbnNlcnRlZEF0VG9wLnNwbGljZShpZHgsIDEpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKSB7XG5cdHZhciBzdHlsZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG5cdHN0eWxlRWxlbWVudC50eXBlID0gXCJ0ZXh0L2Nzc1wiO1xuXHRpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgc3R5bGVFbGVtZW50KTtcblx0cmV0dXJuIHN0eWxlRWxlbWVudDtcbn1cblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG5cdHZhciBzdHlsZUVsZW1lbnQsIHVwZGF0ZSwgcmVtb3ZlO1xuXG5cdGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuXHRcdHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuXHRcdHN0eWxlRWxlbWVudCA9IHNpbmdsZXRvbkVsZW1lbnQgfHwgKHNpbmdsZXRvbkVsZW1lbnQgPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuXHRcdHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZUVsZW1lbnQsIHN0eWxlSW5kZXgsIGZhbHNlKTtcblx0XHRyZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGVFbGVtZW50LCBzdHlsZUluZGV4LCB0cnVlKTtcblx0fSBlbHNlIHtcblx0XHRzdHlsZUVsZW1lbnQgPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG5cdFx0dXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlRWxlbWVudCk7XG5cdFx0cmVtb3ZlID0gZnVuY3Rpb24oKSB7XG5cdFx0XHRyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcblx0XHR9O1xuXHR9XG5cblx0dXBkYXRlKG9iaik7XG5cblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuXHRcdGlmKG5ld09iaikge1xuXHRcdFx0aWYobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKVxuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR1cGRhdGUob2JqID0gbmV3T2JqKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmVtb3ZlKCk7XG5cdFx0fVxuXHR9O1xufVxuXG52YXIgcmVwbGFjZVRleHQgPSAoZnVuY3Rpb24gKCkge1xuXHR2YXIgdGV4dFN0b3JlID0gW107XG5cblx0cmV0dXJuIGZ1bmN0aW9uIChpbmRleCwgcmVwbGFjZW1lbnQpIHtcblx0XHR0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG5cdFx0cmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG5cdH07XG59KSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlRWxlbWVudCwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG5cdHZhciBjc3MgPSByZW1vdmUgPyBcIlwiIDogb2JqLmNzcztcblxuXHRpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcblx0XHRzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG5cdH0gZWxzZSB7XG5cdFx0dmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuXHRcdHZhciBjaGlsZE5vZGVzID0gc3R5bGVFbGVtZW50LmNoaWxkTm9kZXM7XG5cdFx0aWYgKGNoaWxkTm9kZXNbaW5kZXhdKSBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuXHRcdGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuXHRcdFx0c3R5bGVFbGVtZW50Lmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChjc3NOb2RlKTtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZUVsZW1lbnQsIG9iaikge1xuXHR2YXIgY3NzID0gb2JqLmNzcztcblx0dmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuXHR2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuXHRpZiAobWVkaWEpIHtcblx0XHRzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibWVkaWFcIiwgbWVkaWEpO1xuXHR9XG5cblx0aWYgKHNvdXJjZU1hcCkge1xuXHRcdC8vIGh0dHBzOi8vZGV2ZWxvcGVyLmNocm9tZS5jb20vZGV2dG9vbHMvZG9jcy9qYXZhc2NyaXB0LWRlYnVnZ2luZ1xuXHRcdC8vIHRoaXMgbWFrZXMgc291cmNlIG1hcHMgaW5zaWRlIHN0eWxlIHRhZ3Mgd29yayBwcm9wZXJseSBpbiBDaHJvbWVcblx0XHRjc3MgKz0gJ1xcbi8qIyBzb3VyY2VVUkw9JyArIHNvdXJjZU1hcC5zb3VyY2VzWzBdICsgJyAqLyc7XG5cdFx0Ly8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMjY2MDM4NzVcblx0XHRjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiICsgYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSArIFwiICovXCI7XG5cdH1cblxuXHRpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcblx0XHRzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuXHR9IGVsc2Uge1xuXHRcdHdoaWxlKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG5cdFx0XHRzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuXHRcdH1cblx0XHRzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG5cdH1cbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtc3R5bGUtbG9hZGVyL2FkZFN0eWxlcy5qc1xuLy8gbW9kdWxlIGlkID0gMTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7XG4gIHJldHVybiBfdm0uX2goJ2RpdicsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJpZFwiOiBcInVzZXJcIlxuICAgIH1cbiAgfSwgW192bS5faCgnaDEnLCBbXCJIZWxsbyBcIiArIF92bS5fcyhfdm0ubmFtZSldKSwgXCIgXCIsIF92bS5faCgncCcsIFtfdm0uX3MoX3ZtLiRyb3V0ZS5wYXJhbXMuaWQpXSksIFwiIFwiLCBfdm0uX2goJ2RpdicsIHtcbiAgICBkb21Qcm9wczoge1xuICAgICAgXCJ0ZXh0Q29udGVudFwiOiBfdm0uX3MoX3ZtLm1lc3NhZ2UpXG4gICAgfVxuICB9KSwgXCIgXCIsIF92bS5faCgncm91dGVyLXZpZXcnKV0pXG59LHN0YXRpY1JlbmRlckZuczogW119XG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKS5yZXJlbmRlcihcImRhdGEtdi1mMjY1MWRhY1wiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci5qcz9pZD1kYXRhLXYtZjI2NTFkYWMhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3NyYy92aWV3cy91c2VyL3ZpZXcudnVlXG4vLyBtb2R1bGUgaWQgPSAxMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcclxuICog5o+P6L+wOiDkvJrlkZjop4blm75cclxuICog54mI5p2DOiBDb3B5cmlnaHQgKGMpIDIwMTZcclxuICog5YWs5Y+4OiDmt7HlnLPluILmmIrmmajnp5HmioDlvIDlj5HmnInpmZDlhazlj7hcclxuICog5L2c6ICFOiDpmYjlhYNcclxuICog54mI5pysOiAxLjBcclxuICog5Yib5bu65pel5pyfOiAyMDE2LzExLzI0XHJcbiAqIOWIm+W7uuaXtumXtDogMTU6MjRcclxuICovXHJcbmltcG9ydCBWaWV3IGZyb20gXCIuLi8uLi8uLi91dGlscy92aWV3XCI7XHJcbmxldCB2dWUgPSByZXF1aXJlKFwiLi92aWV3LnZ1ZVwiKTtcclxuXHJcbmNsYXNzIFVzZXJNZW1iZXJWaWV3IGV4dGVuZHMgVmlldyB7XHJcbiAgICBjb25zdHJ1Y3Rvcih2aWV3KSB7XHJcbiAgICAgICAgc3VwZXIodmlldyk7XHJcbiAgICB9XHJcblxyXG4gICAgZGF0YSAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgbmFtZTogXCJVc2VyTWVtYmVyVmlld1wiXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgbmV3IFVzZXJNZW1iZXJWaWV3KHZ1ZSk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vRTovVGVzdFdvcmsvdnVlL3NyYy92aWV3cy91c2VyL21lbWJlci92aWV3LmpzIiwidmFyIF9fdnVlX2V4cG9ydHNfXywgX192dWVfb3B0aW9uc19fXG52YXIgX192dWVfc3R5bGVzX18gPSB7fVxuXG4vKiB0ZW1wbGF0ZSAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX18gPSByZXF1aXJlKFwiISF2dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj9pZD1kYXRhLXYtMzc1N2I2YjIhdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vdmlldy52dWVcIilcbl9fdnVlX29wdGlvbnNfXyA9IF9fdnVlX2V4cG9ydHNfXyA9IF9fdnVlX2V4cG9ydHNfXyB8fCB7fVxuaWYgKFxuICB0eXBlb2YgX192dWVfZXhwb3J0c19fLmRlZmF1bHQgPT09IFwib2JqZWN0XCIgfHxcbiAgdHlwZW9mIF9fdnVlX2V4cG9ydHNfXy5kZWZhdWx0ID09PSBcImZ1bmN0aW9uXCJcbikge1xuaWYgKE9iamVjdC5rZXlzKF9fdnVlX2V4cG9ydHNfXykuc29tZShmdW5jdGlvbiAoa2V5KSB7IHJldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleSAhPT0gXCJfX2VzTW9kdWxlXCIgfSkpIHtjb25zb2xlLmVycm9yKFwibmFtZWQgZXhwb3J0cyBhcmUgbm90IHN1cHBvcnRlZCBpbiAqLnZ1ZSBmaWxlcy5cIil9XG5fX3Z1ZV9vcHRpb25zX18gPSBfX3Z1ZV9leHBvcnRzX18gPSBfX3Z1ZV9leHBvcnRzX18uZGVmYXVsdFxufVxuaWYgKHR5cGVvZiBfX3Z1ZV9vcHRpb25zX18gPT09IFwiZnVuY3Rpb25cIikge1xuICBfX3Z1ZV9vcHRpb25zX18gPSBfX3Z1ZV9vcHRpb25zX18ub3B0aW9uc1xufVxuX192dWVfb3B0aW9uc19fLl9fZmlsZSA9IFwiRTpcXFxcVGVzdFdvcmtcXFxcdnVlXFxcXHNyY1xcXFx2aWV3c1xcXFx1c2VyXFxcXG1lbWJlclxcXFx2aWV3LnZ1ZVwiXG5fX3Z1ZV9vcHRpb25zX18ucmVuZGVyID0gX192dWVfdGVtcGxhdGVfXy5yZW5kZXJcbl9fdnVlX29wdGlvbnNfXy5zdGF0aWNSZW5kZXJGbnMgPSBfX3Z1ZV90ZW1wbGF0ZV9fLnN0YXRpY1JlbmRlckZuc1xuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtMzc1N2I2YjJcIiwgX192dWVfb3B0aW9uc19fKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtMzc1N2I2YjJcIiwgX192dWVfb3B0aW9uc19fKVxuICB9XG59KSgpfVxuaWYgKF9fdnVlX29wdGlvbnNfXy5mdW5jdGlvbmFsKSB7Y29uc29sZS5lcnJvcihcIlt2dWUtbG9hZGVyXSB2aWV3LnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIGFuZCBzaG91bGQgYmUgZGVmaW5lZCBpbiBwbGFpbiBqcyBmaWxlcyB1c2luZyByZW5kZXIgZnVuY3Rpb25zLlwiKX1cblxubW9kdWxlLmV4cG9ydHMgPSBfX3Z1ZV9leHBvcnRzX19cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3ZpZXdzL3VzZXIvbWVtYmVyL3ZpZXcudnVlXG4vLyBtb2R1bGUgaWQgPSAxM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpcztcbiAgcmV0dXJuIF92bS5faCgnZGl2Jywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcImlkXCI6IFwidXNlclwiXG4gICAgfVxuICB9LCBbX3ZtLl9oKCdoMScsIFtcIkhlbGxvIFwiICsgX3ZtLl9zKF92bS5uYW1lKV0pXSlcbn0sc3RhdGljUmVuZGVyRm5zOiBbXX1cbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpLnJlcmVuZGVyKFwiZGF0YS12LTM3NTdiNmIyXCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyLmpzP2lkPWRhdGEtdi0zNzU3YjZiMiEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vc3JjL3ZpZXdzL3VzZXIvbWVtYmVyL3ZpZXcudnVlXG4vLyBtb2R1bGUgaWQgPSAxNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgX192dWVfZXhwb3J0c19fLCBfX3Z1ZV9vcHRpb25zX19cbnZhciBfX3Z1ZV9zdHlsZXNfXyA9IHt9XG5cbi8qIHN0eWxlcyAqL1xucmVxdWlyZShcIiEhdnVlLXN0eWxlLWxvYWRlciFjc3MtbG9hZGVyP3NvdXJjZU1hcCF2dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlcj9pZD1kYXRhLXYtNWNhYTkxZTYhdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL2luZGV4LnZ1ZVwiKVxuXG4vKiBzY3JpcHQgKi9cbl9fdnVlX2V4cG9ydHNfXyA9IHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlciF2dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vaW5kZXgudnVlXCIpXG5cbi8qIHRlbXBsYXRlICovXG52YXIgX192dWVfdGVtcGxhdGVfXyA9IHJlcXVpcmUoXCIhIXZ1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP2lkPWRhdGEtdi01Y2FhOTFlNiF2dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9pbmRleC52dWVcIilcbl9fdnVlX29wdGlvbnNfXyA9IF9fdnVlX2V4cG9ydHNfXyA9IF9fdnVlX2V4cG9ydHNfXyB8fCB7fVxuaWYgKFxuICB0eXBlb2YgX192dWVfZXhwb3J0c19fLmRlZmF1bHQgPT09IFwib2JqZWN0XCIgfHxcbiAgdHlwZW9mIF9fdnVlX2V4cG9ydHNfXy5kZWZhdWx0ID09PSBcImZ1bmN0aW9uXCJcbikge1xuaWYgKE9iamVjdC5rZXlzKF9fdnVlX2V4cG9ydHNfXykuc29tZShmdW5jdGlvbiAoa2V5KSB7IHJldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleSAhPT0gXCJfX2VzTW9kdWxlXCIgfSkpIHtjb25zb2xlLmVycm9yKFwibmFtZWQgZXhwb3J0cyBhcmUgbm90IHN1cHBvcnRlZCBpbiAqLnZ1ZSBmaWxlcy5cIil9XG5fX3Z1ZV9vcHRpb25zX18gPSBfX3Z1ZV9leHBvcnRzX18gPSBfX3Z1ZV9leHBvcnRzX18uZGVmYXVsdFxufVxuaWYgKHR5cGVvZiBfX3Z1ZV9vcHRpb25zX18gPT09IFwiZnVuY3Rpb25cIikge1xuICBfX3Z1ZV9vcHRpb25zX18gPSBfX3Z1ZV9vcHRpb25zX18ub3B0aW9uc1xufVxuX192dWVfb3B0aW9uc19fLl9fZmlsZSA9IFwiRTpcXFxcVGVzdFdvcmtcXFxcdnVlXFxcXHNyY1xcXFx2aWV3c1xcXFxpbmRleC52dWVcIlxuX192dWVfb3B0aW9uc19fLnJlbmRlciA9IF9fdnVlX3RlbXBsYXRlX18ucmVuZGVyXG5fX3Z1ZV9vcHRpb25zX18uc3RhdGljUmVuZGVyRm5zID0gX192dWVfdGVtcGxhdGVfXy5zdGF0aWNSZW5kZXJGbnNcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTVjYWE5MWU2XCIsIF9fdnVlX29wdGlvbnNfXylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTVjYWE5MWU2XCIsIF9fdnVlX29wdGlvbnNfXylcbiAgfVxufSkoKX1cbmlmIChfX3Z1ZV9vcHRpb25zX18uZnVuY3Rpb25hbCkge2NvbnNvbGUuZXJyb3IoXCJbdnVlLWxvYWRlcl0gaW5kZXgudnVlOiBmdW5jdGlvbmFsIGNvbXBvbmVudHMgYXJlIG5vdCBzdXBwb3J0ZWQgYW5kIHNob3VsZCBiZSBkZWZpbmVkIGluIHBsYWluIGpzIGZpbGVzIHVzaW5nIHJlbmRlciBmdW5jdGlvbnMuXCIpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9fdnVlX2V4cG9ydHNfX1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvdmlld3MvaW5kZXgudnVlXG4vLyBtb2R1bGUgaWQgPSAxNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LTVjYWE5MWU2IS4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9pbmRleC52dWVcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIHt9KTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuXHQvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuXHRpZighY29udGVudC5sb2NhbHMpIHtcblx0XHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LTVjYWE5MWU2IS4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9pbmRleC52dWVcIiwgZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi01Y2FhOTFlNiEuLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vaW5kZXgudnVlXCIpO1xuXHRcdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cdFx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdFx0fSk7XG5cdH1cblx0Ly8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLXN0eWxlLWxvYWRlciEuL34vY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9+L3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi01Y2FhOTFlNiEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3NyYy92aWV3cy9pbmRleC52dWVcbi8vIG1vZHVsZSBpZCA9IDE2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuaDEge1xcbiAgICBjb2xvcjogI0YwMDtcXG59XFxuXCIsIFwiXCIsIHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIi8uL3NyYy92aWV3cy9pbmRleC52dWU/NDA0ZmE0OGFcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIjtBQUtBO0lBQ0EsWUFBQTtDQUNBXCIsXCJmaWxlXCI6XCJpbmRleC52dWVcIixcInNvdXJjZXNDb250ZW50XCI6W1wiPHRlbXBsYXRlPlxcclxcbiAgICA8aDE+QXV0aCBGbG93e3tsb2dnZWRJbn19PC9oMT5cXHJcXG48L3RlbXBsYXRlPlxcclxcblxcclxcbjxzdHlsZT5cXHJcXG4gICAgaDEge1xcclxcbiAgICAgICAgY29sb3I6ICNGMDA7XFxyXFxuICAgIH1cXHJcXG48L3N0eWxlPlxcclxcblxcclxcbjxzY3JpcHQ+XFxyXFxuICAgIGNsYXNzIHRlc3Qge1xcclxcbiAgICAgICAgZGF0YSgpIHtcXHJcXG4gICAgICAgICAgICByZXR1cm4ge1xcclxcbiAgICAgICAgICAgICAgICBsb2dnZWRJbjogXFxcIlRFU1RcXFwiXFxyXFxuICAgICAgICAgICAgfVxcclxcbiAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgY3JlYXRlZCgpIHtcXHJcXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnQEBAQEBAQEBAQEBAQCcpO1xcclxcbiAgICAgICAgfVxcclxcbiAgICB9XFxyXFxuICAgIGxldCBwYWdlID0ge1xcclxcbiAgICAgICAgZGF0YTogZnVuY3Rpb24gKCkge1xcclxcbiAgICAgICAgICAgIHJldHVybiB7XFxyXFxuICAgICAgICAgICAgICAgIGxvZ2dlZEluOiBcXFwiVEVTVFxcXCJcXHJcXG4gICAgICAgICAgICB9XFxyXFxuICAgICAgICB9LFxcclxcbiAgICAgICAgY3JlYXRlZDogZnVuY3Rpb24gKCkge1xcclxcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdAQEBAQEBAQEBAQEBAJyk7XFxyXFxuICAgICAgICB9XFxyXFxuICAgIH07XFxyXFxuICAgIG1vZHVsZS5leHBvcnRzID0gcGFnZTtcXHJcXG48L3NjcmlwdD5cIl0sXCJzb3VyY2VSb290XCI6XCJ3ZWJwYWNrOi8vXCJ9XSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL34vdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LTVjYWE5MWU2IS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vc3JjL3ZpZXdzL2luZGV4LnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiPHRlbXBsYXRlPlxyXG4gICAgPGgxPkF1dGggRmxvd3t7bG9nZ2VkSW59fTwvaDE+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c3R5bGU+XHJcbiAgICBoMSB7XHJcbiAgICAgICAgY29sb3I6ICNGMDA7XHJcbiAgICB9XHJcbjwvc3R5bGU+XHJcblxyXG48c2NyaXB0PlxyXG4gICAgY2xhc3MgdGVzdCB7XHJcbiAgICAgICAgZGF0YSgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIGxvZ2dlZEluOiBcIlRFU1RcIlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjcmVhdGVkKCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnQEBAQEBAQEBAQEBAQCcpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGxldCBwYWdlID0ge1xyXG4gICAgICAgIGRhdGE6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIGxvZ2dlZEluOiBcIlRFU1RcIlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBjcmVhdGVkOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdAQEBAQEBAQEBAQEBAJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIG1vZHVsZS5leHBvcnRzID0gcGFnZTtcclxuPC9zY3JpcHQ+XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGluZGV4LnZ1ZT80MDRmYTQ4YSIsIm1vZHVsZS5leHBvcnRzPXtyZW5kZXI6ZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO1xuICByZXR1cm4gX3ZtLl9oKCdoMScsIFtcIkF1dGggRmxvd1wiICsgX3ZtLl9zKF92bS5sb2dnZWRJbildKVxufSxzdGF0aWNSZW5kZXJGbnM6IFtdfVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikucmVyZW5kZXIoXCJkYXRhLXYtNWNhYTkxZTZcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIuanM/aWQ9ZGF0YS12LTVjYWE5MWU2IS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9zcmMvdmlld3MvaW5kZXgudnVlXG4vLyBtb2R1bGUgaWQgPSAxOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9