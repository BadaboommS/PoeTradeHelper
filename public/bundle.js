(function () {
	'use strict';

	function getDefaultExportFromCjs (x) {
		return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
	}

	var react = {exports: {}};

	var react_production_min = {};

	/**
	 * @license React
	 * react.production.min.js
	 *
	 * Copyright (c) Facebook, Inc. and its affiliates.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	var hasRequiredReact_production_min;

	function requireReact_production_min () {
		if (hasRequiredReact_production_min) return react_production_min;
		hasRequiredReact_production_min = 1;

		var l = Symbol.for("react.element"),
		  n = Symbol.for("react.portal"),
		  p = Symbol.for("react.fragment"),
		  q = Symbol.for("react.strict_mode"),
		  r = Symbol.for("react.profiler"),
		  t = Symbol.for("react.provider"),
		  u = Symbol.for("react.context"),
		  v = Symbol.for("react.forward_ref"),
		  w = Symbol.for("react.suspense"),
		  x = Symbol.for("react.memo"),
		  y = Symbol.for("react.lazy"),
		  z = Symbol.iterator;
		function A(a) {
		  if (null === a || "object" !== typeof a) return null;
		  a = z && a[z] || a["@@iterator"];
		  return "function" === typeof a ? a : null;
		}
		var B = {
		    isMounted: function () {
		      return !1;
		    },
		    enqueueForceUpdate: function () {},
		    enqueueReplaceState: function () {},
		    enqueueSetState: function () {}
		  },
		  C = Object.assign,
		  D = {};
		function E(a, b, e) {
		  this.props = a;
		  this.context = b;
		  this.refs = D;
		  this.updater = e || B;
		}
		E.prototype.isReactComponent = {};
		E.prototype.setState = function (a, b) {
		  if ("object" !== typeof a && "function" !== typeof a && null != a) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
		  this.updater.enqueueSetState(this, a, b, "setState");
		};
		E.prototype.forceUpdate = function (a) {
		  this.updater.enqueueForceUpdate(this, a, "forceUpdate");
		};
		function F() {}
		F.prototype = E.prototype;
		function G(a, b, e) {
		  this.props = a;
		  this.context = b;
		  this.refs = D;
		  this.updater = e || B;
		}
		var H = G.prototype = new F();
		H.constructor = G;
		C(H, E.prototype);
		H.isPureReactComponent = !0;
		var I = Array.isArray,
		  J = Object.prototype.hasOwnProperty,
		  K = {
		    current: null
		  },
		  L = {
		    key: !0,
		    ref: !0,
		    __self: !0,
		    __source: !0
		  };
		function M(a, b, e) {
		  var d,
		    c = {},
		    k = null,
		    h = null;
		  if (null != b) for (d in void 0 !== b.ref && (h = b.ref), void 0 !== b.key && (k = "" + b.key), b) J.call(b, d) && !L.hasOwnProperty(d) && (c[d] = b[d]);
		  var g = arguments.length - 2;
		  if (1 === g) c.children = e;else if (1 < g) {
		    for (var f = Array(g), m = 0; m < g; m++) f[m] = arguments[m + 2];
		    c.children = f;
		  }
		  if (a && a.defaultProps) for (d in g = a.defaultProps, g) void 0 === c[d] && (c[d] = g[d]);
		  return {
		    $$typeof: l,
		    type: a,
		    key: k,
		    ref: h,
		    props: c,
		    _owner: K.current
		  };
		}
		function N(a, b) {
		  return {
		    $$typeof: l,
		    type: a.type,
		    key: b,
		    ref: a.ref,
		    props: a.props,
		    _owner: a._owner
		  };
		}
		function O(a) {
		  return "object" === typeof a && null !== a && a.$$typeof === l;
		}
		function escape(a) {
		  var b = {
		    "=": "=0",
		    ":": "=2"
		  };
		  return "$" + a.replace(/[=:]/g, function (a) {
		    return b[a];
		  });
		}
		var P = /\/+/g;
		function Q(a, b) {
		  return "object" === typeof a && null !== a && null != a.key ? escape("" + a.key) : b.toString(36);
		}
		function R(a, b, e, d, c) {
		  var k = typeof a;
		  if ("undefined" === k || "boolean" === k) a = null;
		  var h = !1;
		  if (null === a) h = !0;else switch (k) {
		    case "string":
		    case "number":
		      h = !0;
		      break;
		    case "object":
		      switch (a.$$typeof) {
		        case l:
		        case n:
		          h = !0;
		      }
		  }
		  if (h) return h = a, c = c(h), a = "" === d ? "." + Q(h, 0) : d, I(c) ? (e = "", null != a && (e = a.replace(P, "$&/") + "/"), R(c, b, e, "", function (a) {
		    return a;
		  })) : null != c && (O(c) && (c = N(c, e + (!c.key || h && h.key === c.key ? "" : ("" + c.key).replace(P, "$&/") + "/") + a)), b.push(c)), 1;
		  h = 0;
		  d = "" === d ? "." : d + ":";
		  if (I(a)) for (var g = 0; g < a.length; g++) {
		    k = a[g];
		    var f = d + Q(k, g);
		    h += R(k, b, e, f, c);
		  } else if (f = A(a), "function" === typeof f) for (a = f.call(a), g = 0; !(k = a.next()).done;) k = k.value, f = d + Q(k, g++), h += R(k, b, e, f, c);else if ("object" === k) throw b = String(a), Error("Objects are not valid as a React child (found: " + ("[object Object]" === b ? "object with keys {" + Object.keys(a).join(", ") + "}" : b) + "). If you meant to render a collection of children, use an array instead.");
		  return h;
		}
		function S(a, b, e) {
		  if (null == a) return a;
		  var d = [],
		    c = 0;
		  R(a, d, "", "", function (a) {
		    return b.call(e, a, c++);
		  });
		  return d;
		}
		function T(a) {
		  if (-1 === a._status) {
		    var b = a._result;
		    b = b();
		    b.then(function (b) {
		      if (0 === a._status || -1 === a._status) a._status = 1, a._result = b;
		    }, function (b) {
		      if (0 === a._status || -1 === a._status) a._status = 2, a._result = b;
		    });
		    -1 === a._status && (a._status = 0, a._result = b);
		  }
		  if (1 === a._status) return a._result.default;
		  throw a._result;
		}
		var U = {
		    current: null
		  },
		  V = {
		    transition: null
		  },
		  W = {
		    ReactCurrentDispatcher: U,
		    ReactCurrentBatchConfig: V,
		    ReactCurrentOwner: K
		  };
		react_production_min.Children = {
		  map: S,
		  forEach: function (a, b, e) {
		    S(a, function () {
		      b.apply(this, arguments);
		    }, e);
		  },
		  count: function (a) {
		    var b = 0;
		    S(a, function () {
		      b++;
		    });
		    return b;
		  },
		  toArray: function (a) {
		    return S(a, function (a) {
		      return a;
		    }) || [];
		  },
		  only: function (a) {
		    if (!O(a)) throw Error("React.Children.only expected to receive a single React element child.");
		    return a;
		  }
		};
		react_production_min.Component = E;
		react_production_min.Fragment = p;
		react_production_min.Profiler = r;
		react_production_min.PureComponent = G;
		react_production_min.StrictMode = q;
		react_production_min.Suspense = w;
		react_production_min.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = W;
		react_production_min.cloneElement = function (a, b, e) {
		  if (null === a || void 0 === a) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + a + ".");
		  var d = C({}, a.props),
		    c = a.key,
		    k = a.ref,
		    h = a._owner;
		  if (null != b) {
		    void 0 !== b.ref && (k = b.ref, h = K.current);
		    void 0 !== b.key && (c = "" + b.key);
		    if (a.type && a.type.defaultProps) var g = a.type.defaultProps;
		    for (f in b) J.call(b, f) && !L.hasOwnProperty(f) && (d[f] = void 0 === b[f] && void 0 !== g ? g[f] : b[f]);
		  }
		  var f = arguments.length - 2;
		  if (1 === f) d.children = e;else if (1 < f) {
		    g = Array(f);
		    for (var m = 0; m < f; m++) g[m] = arguments[m + 2];
		    d.children = g;
		  }
		  return {
		    $$typeof: l,
		    type: a.type,
		    key: c,
		    ref: k,
		    props: d,
		    _owner: h
		  };
		};
		react_production_min.createContext = function (a) {
		  a = {
		    $$typeof: u,
		    _currentValue: a,
		    _currentValue2: a,
		    _threadCount: 0,
		    Provider: null,
		    Consumer: null,
		    _defaultValue: null,
		    _globalName: null
		  };
		  a.Provider = {
		    $$typeof: t,
		    _context: a
		  };
		  return a.Consumer = a;
		};
		react_production_min.createElement = M;
		react_production_min.createFactory = function (a) {
		  var b = M.bind(null, a);
		  b.type = a;
		  return b;
		};
		react_production_min.createRef = function () {
		  return {
		    current: null
		  };
		};
		react_production_min.forwardRef = function (a) {
		  return {
		    $$typeof: v,
		    render: a
		  };
		};
		react_production_min.isValidElement = O;
		react_production_min.lazy = function (a) {
		  return {
		    $$typeof: y,
		    _payload: {
		      _status: -1,
		      _result: a
		    },
		    _init: T
		  };
		};
		react_production_min.memo = function (a, b) {
		  return {
		    $$typeof: x,
		    type: a,
		    compare: void 0 === b ? null : b
		  };
		};
		react_production_min.startTransition = function (a) {
		  var b = V.transition;
		  V.transition = {};
		  try {
		    a();
		  } finally {
		    V.transition = b;
		  }
		};
		react_production_min.unstable_act = function () {
		  throw Error("act(...) is not supported in production builds of React.");
		};
		react_production_min.useCallback = function (a, b) {
		  return U.current.useCallback(a, b);
		};
		react_production_min.useContext = function (a) {
		  return U.current.useContext(a);
		};
		react_production_min.useDebugValue = function () {};
		react_production_min.useDeferredValue = function (a) {
		  return U.current.useDeferredValue(a);
		};
		react_production_min.useEffect = function (a, b) {
		  return U.current.useEffect(a, b);
		};
		react_production_min.useId = function () {
		  return U.current.useId();
		};
		react_production_min.useImperativeHandle = function (a, b, e) {
		  return U.current.useImperativeHandle(a, b, e);
		};
		react_production_min.useInsertionEffect = function (a, b) {
		  return U.current.useInsertionEffect(a, b);
		};
		react_production_min.useLayoutEffect = function (a, b) {
		  return U.current.useLayoutEffect(a, b);
		};
		react_production_min.useMemo = function (a, b) {
		  return U.current.useMemo(a, b);
		};
		react_production_min.useReducer = function (a, b, e) {
		  return U.current.useReducer(a, b, e);
		};
		react_production_min.useRef = function (a) {
		  return U.current.useRef(a);
		};
		react_production_min.useState = function (a) {
		  return U.current.useState(a);
		};
		react_production_min.useSyncExternalStore = function (a, b, e) {
		  return U.current.useSyncExternalStore(a, b, e);
		};
		react_production_min.useTransition = function () {
		  return U.current.useTransition();
		};
		react_production_min.version = "18.2.0";
		return react_production_min;
	}

	{
	  react.exports = requireReact_production_min();
	}

	var reactExports = react.exports;
	var React = /*@__PURE__*/getDefaultExportFromCjs(reactExports);

	var client = {};

	var reactDom = {exports: {}};

	var reactDom_production_min = {};

	var scheduler = {exports: {}};

	var scheduler_production_min = {};

	/**
	 * @license React
	 * scheduler.production.min.js
	 *
	 * Copyright (c) Facebook, Inc. and its affiliates.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	var hasRequiredScheduler_production_min;

	function requireScheduler_production_min () {
		if (hasRequiredScheduler_production_min) return scheduler_production_min;
		hasRequiredScheduler_production_min = 1;
		(function (exports) {

			function f(a, b) {
			  var c = a.length;
			  a.push(b);
			  a: for (; 0 < c;) {
			    var d = c - 1 >>> 1,
			      e = a[d];
			    if (0 < g(e, b)) a[d] = b, a[c] = e, c = d;else break a;
			  }
			}
			function h(a) {
			  return 0 === a.length ? null : a[0];
			}
			function k(a) {
			  if (0 === a.length) return null;
			  var b = a[0],
			    c = a.pop();
			  if (c !== b) {
			    a[0] = c;
			    a: for (var d = 0, e = a.length, w = e >>> 1; d < w;) {
			      var m = 2 * (d + 1) - 1,
			        C = a[m],
			        n = m + 1,
			        x = a[n];
			      if (0 > g(C, c)) n < e && 0 > g(x, C) ? (a[d] = x, a[n] = c, d = n) : (a[d] = C, a[m] = c, d = m);else if (n < e && 0 > g(x, c)) a[d] = x, a[n] = c, d = n;else break a;
			    }
			  }
			  return b;
			}
			function g(a, b) {
			  var c = a.sortIndex - b.sortIndex;
			  return 0 !== c ? c : a.id - b.id;
			}
			if ("object" === typeof performance && "function" === typeof performance.now) {
			  var l = performance;
			  exports.unstable_now = function () {
			    return l.now();
			  };
			} else {
			  var p = Date,
			    q = p.now();
			  exports.unstable_now = function () {
			    return p.now() - q;
			  };
			}
			var r = [],
			  t = [],
			  u = 1,
			  v = null,
			  y = 3,
			  z = !1,
			  A = !1,
			  B = !1,
			  D = "function" === typeof setTimeout ? setTimeout : null,
			  E = "function" === typeof clearTimeout ? clearTimeout : null,
			  F = "undefined" !== typeof setImmediate ? setImmediate : null;
			"undefined" !== typeof navigator && void 0 !== navigator.scheduling && void 0 !== navigator.scheduling.isInputPending && navigator.scheduling.isInputPending.bind(navigator.scheduling);
			function G(a) {
			  for (var b = h(t); null !== b;) {
			    if (null === b.callback) k(t);else if (b.startTime <= a) k(t), b.sortIndex = b.expirationTime, f(r, b);else break;
			    b = h(t);
			  }
			}
			function H(a) {
			  B = !1;
			  G(a);
			  if (!A) if (null !== h(r)) A = !0, I(J);else {
			    var b = h(t);
			    null !== b && K(H, b.startTime - a);
			  }
			}
			function J(a, b) {
			  A = !1;
			  B && (B = !1, E(L), L = -1);
			  z = !0;
			  var c = y;
			  try {
			    G(b);
			    for (v = h(r); null !== v && (!(v.expirationTime > b) || a && !M());) {
			      var d = v.callback;
			      if ("function" === typeof d) {
			        v.callback = null;
			        y = v.priorityLevel;
			        var e = d(v.expirationTime <= b);
			        b = exports.unstable_now();
			        "function" === typeof e ? v.callback = e : v === h(r) && k(r);
			        G(b);
			      } else k(r);
			      v = h(r);
			    }
			    if (null !== v) var w = !0;else {
			      var m = h(t);
			      null !== m && K(H, m.startTime - b);
			      w = !1;
			    }
			    return w;
			  } finally {
			    v = null, y = c, z = !1;
			  }
			}
			var N = !1,
			  O = null,
			  L = -1,
			  P = 5,
			  Q = -1;
			function M() {
			  return exports.unstable_now() - Q < P ? !1 : !0;
			}
			function R() {
			  if (null !== O) {
			    var a = exports.unstable_now();
			    Q = a;
			    var b = !0;
			    try {
			      b = O(!0, a);
			    } finally {
			      b ? S() : (N = !1, O = null);
			    }
			  } else N = !1;
			}
			var S;
			if ("function" === typeof F) S = function () {
			  F(R);
			};else if ("undefined" !== typeof MessageChannel) {
			  var T = new MessageChannel(),
			    U = T.port2;
			  T.port1.onmessage = R;
			  S = function () {
			    U.postMessage(null);
			  };
			} else S = function () {
			  D(R, 0);
			};
			function I(a) {
			  O = a;
			  N || (N = !0, S());
			}
			function K(a, b) {
			  L = D(function () {
			    a(exports.unstable_now());
			  }, b);
			}
			exports.unstable_IdlePriority = 5;
			exports.unstable_ImmediatePriority = 1;
			exports.unstable_LowPriority = 4;
			exports.unstable_NormalPriority = 3;
			exports.unstable_Profiling = null;
			exports.unstable_UserBlockingPriority = 2;
			exports.unstable_cancelCallback = function (a) {
			  a.callback = null;
			};
			exports.unstable_continueExecution = function () {
			  A || z || (A = !0, I(J));
			};
			exports.unstable_forceFrameRate = function (a) {
			  0 > a || 125 < a ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : P = 0 < a ? Math.floor(1E3 / a) : 5;
			};
			exports.unstable_getCurrentPriorityLevel = function () {
			  return y;
			};
			exports.unstable_getFirstCallbackNode = function () {
			  return h(r);
			};
			exports.unstable_next = function (a) {
			  switch (y) {
			    case 1:
			    case 2:
			    case 3:
			      var b = 3;
			      break;
			    default:
			      b = y;
			  }
			  var c = y;
			  y = b;
			  try {
			    return a();
			  } finally {
			    y = c;
			  }
			};
			exports.unstable_pauseExecution = function () {};
			exports.unstable_requestPaint = function () {};
			exports.unstable_runWithPriority = function (a, b) {
			  switch (a) {
			    case 1:
			    case 2:
			    case 3:
			    case 4:
			    case 5:
			      break;
			    default:
			      a = 3;
			  }
			  var c = y;
			  y = a;
			  try {
			    return b();
			  } finally {
			    y = c;
			  }
			};
			exports.unstable_scheduleCallback = function (a, b, c) {
			  var d = exports.unstable_now();
			  "object" === typeof c && null !== c ? (c = c.delay, c = "number" === typeof c && 0 < c ? d + c : d) : c = d;
			  switch (a) {
			    case 1:
			      var e = -1;
			      break;
			    case 2:
			      e = 250;
			      break;
			    case 5:
			      e = 1073741823;
			      break;
			    case 4:
			      e = 1E4;
			      break;
			    default:
			      e = 5E3;
			  }
			  e = c + e;
			  a = {
			    id: u++,
			    callback: b,
			    priorityLevel: a,
			    startTime: c,
			    expirationTime: e,
			    sortIndex: -1
			  };
			  c > d ? (a.sortIndex = c, f(t, a), null === h(r) && a === h(t) && (B ? (E(L), L = -1) : B = !0, K(H, c - d))) : (a.sortIndex = e, f(r, a), A || z || (A = !0, I(J)));
			  return a;
			};
			exports.unstable_shouldYield = M;
			exports.unstable_wrapCallback = function (a) {
			  var b = y;
			  return function () {
			    var c = y;
			    y = b;
			    try {
			      return a.apply(this, arguments);
			    } finally {
			      y = c;
			    }
			  };
			}; 
		} (scheduler_production_min));
		return scheduler_production_min;
	}

	var hasRequiredScheduler;

	function requireScheduler () {
		if (hasRequiredScheduler) return scheduler.exports;
		hasRequiredScheduler = 1;

		{
		  scheduler.exports = requireScheduler_production_min();
		}
		return scheduler.exports;
	}

	/**
	 * @license React
	 * react-dom.production.min.js
	 *
	 * Copyright (c) Facebook, Inc. and its affiliates.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	var hasRequiredReactDom_production_min;

	function requireReactDom_production_min () {
		if (hasRequiredReactDom_production_min) return reactDom_production_min;
		hasRequiredReactDom_production_min = 1;

		var aa = reactExports,
		  ca = requireScheduler();
		function p(a) {
		  for (var b = "https://reactjs.org/docs/error-decoder.html?invariant=" + a, c = 1; c < arguments.length; c++) b += "&args[]=" + encodeURIComponent(arguments[c]);
		  return "Minified React error #" + a + "; visit " + b + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
		}
		var da = new Set(),
		  ea = {};
		function fa(a, b) {
		  ha(a, b);
		  ha(a + "Capture", b);
		}
		function ha(a, b) {
		  ea[a] = b;
		  for (a = 0; a < b.length; a++) da.add(b[a]);
		}
		var ia = !("undefined" === typeof window || "undefined" === typeof window.document || "undefined" === typeof window.document.createElement),
		  ja = Object.prototype.hasOwnProperty,
		  ka = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
		  la = {},
		  ma = {};
		function oa(a) {
		  if (ja.call(ma, a)) return !0;
		  if (ja.call(la, a)) return !1;
		  if (ka.test(a)) return ma[a] = !0;
		  la[a] = !0;
		  return !1;
		}
		function pa(a, b, c, d) {
		  if (null !== c && 0 === c.type) return !1;
		  switch (typeof b) {
		    case "function":
		    case "symbol":
		      return !0;
		    case "boolean":
		      if (d) return !1;
		      if (null !== c) return !c.acceptsBooleans;
		      a = a.toLowerCase().slice(0, 5);
		      return "data-" !== a && "aria-" !== a;
		    default:
		      return !1;
		  }
		}
		function qa(a, b, c, d) {
		  if (null === b || "undefined" === typeof b || pa(a, b, c, d)) return !0;
		  if (d) return !1;
		  if (null !== c) switch (c.type) {
		    case 3:
		      return !b;
		    case 4:
		      return !1 === b;
		    case 5:
		      return isNaN(b);
		    case 6:
		      return isNaN(b) || 1 > b;
		  }
		  return !1;
		}
		function v(a, b, c, d, e, f, g) {
		  this.acceptsBooleans = 2 === b || 3 === b || 4 === b;
		  this.attributeName = d;
		  this.attributeNamespace = e;
		  this.mustUseProperty = c;
		  this.propertyName = a;
		  this.type = b;
		  this.sanitizeURL = f;
		  this.removeEmptyString = g;
		}
		var z = {};
		"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function (a) {
		  z[a] = new v(a, 0, !1, a, null, !1, !1);
		});
		[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function (a) {
		  var b = a[0];
		  z[b] = new v(b, 1, !1, a[1], null, !1, !1);
		});
		["contentEditable", "draggable", "spellCheck", "value"].forEach(function (a) {
		  z[a] = new v(a, 2, !1, a.toLowerCase(), null, !1, !1);
		});
		["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function (a) {
		  z[a] = new v(a, 2, !1, a, null, !1, !1);
		});
		"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function (a) {
		  z[a] = new v(a, 3, !1, a.toLowerCase(), null, !1, !1);
		});
		["checked", "multiple", "muted", "selected"].forEach(function (a) {
		  z[a] = new v(a, 3, !0, a, null, !1, !1);
		});
		["capture", "download"].forEach(function (a) {
		  z[a] = new v(a, 4, !1, a, null, !1, !1);
		});
		["cols", "rows", "size", "span"].forEach(function (a) {
		  z[a] = new v(a, 6, !1, a, null, !1, !1);
		});
		["rowSpan", "start"].forEach(function (a) {
		  z[a] = new v(a, 5, !1, a.toLowerCase(), null, !1, !1);
		});
		var ra = /[\-:]([a-z])/g;
		function sa(a) {
		  return a[1].toUpperCase();
		}
		"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function (a) {
		  var b = a.replace(ra, sa);
		  z[b] = new v(b, 1, !1, a, null, !1, !1);
		});
		"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function (a) {
		  var b = a.replace(ra, sa);
		  z[b] = new v(b, 1, !1, a, "http://www.w3.org/1999/xlink", !1, !1);
		});
		["xml:base", "xml:lang", "xml:space"].forEach(function (a) {
		  var b = a.replace(ra, sa);
		  z[b] = new v(b, 1, !1, a, "http://www.w3.org/XML/1998/namespace", !1, !1);
		});
		["tabIndex", "crossOrigin"].forEach(function (a) {
		  z[a] = new v(a, 1, !1, a.toLowerCase(), null, !1, !1);
		});
		z.xlinkHref = new v("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
		["src", "href", "action", "formAction"].forEach(function (a) {
		  z[a] = new v(a, 1, !1, a.toLowerCase(), null, !0, !0);
		});
		function ta(a, b, c, d) {
		  var e = z.hasOwnProperty(b) ? z[b] : null;
		  if (null !== e ? 0 !== e.type : d || !(2 < b.length) || "o" !== b[0] && "O" !== b[0] || "n" !== b[1] && "N" !== b[1]) qa(b, c, e, d) && (c = null), d || null === e ? oa(b) && (null === c ? a.removeAttribute(b) : a.setAttribute(b, "" + c)) : e.mustUseProperty ? a[e.propertyName] = null === c ? 3 === e.type ? !1 : "" : c : (b = e.attributeName, d = e.attributeNamespace, null === c ? a.removeAttribute(b) : (e = e.type, c = 3 === e || 4 === e && !0 === c ? "" : "" + c, d ? a.setAttributeNS(d, b, c) : a.setAttribute(b, c)));
		}
		var ua = aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
		  va = Symbol.for("react.element"),
		  wa = Symbol.for("react.portal"),
		  ya = Symbol.for("react.fragment"),
		  za = Symbol.for("react.strict_mode"),
		  Aa = Symbol.for("react.profiler"),
		  Ba = Symbol.for("react.provider"),
		  Ca = Symbol.for("react.context"),
		  Da = Symbol.for("react.forward_ref"),
		  Ea = Symbol.for("react.suspense"),
		  Fa = Symbol.for("react.suspense_list"),
		  Ga = Symbol.for("react.memo"),
		  Ha = Symbol.for("react.lazy");
		var Ia = Symbol.for("react.offscreen");
		var Ja = Symbol.iterator;
		function Ka(a) {
		  if (null === a || "object" !== typeof a) return null;
		  a = Ja && a[Ja] || a["@@iterator"];
		  return "function" === typeof a ? a : null;
		}
		var A = Object.assign,
		  La;
		function Ma(a) {
		  if (void 0 === La) try {
		    throw Error();
		  } catch (c) {
		    var b = c.stack.trim().match(/\n( *(at )?)/);
		    La = b && b[1] || "";
		  }
		  return "\n" + La + a;
		}
		var Na = !1;
		function Oa(a, b) {
		  if (!a || Na) return "";
		  Na = !0;
		  var c = Error.prepareStackTrace;
		  Error.prepareStackTrace = void 0;
		  try {
		    if (b) {
		      if (b = function () {
		        throw Error();
		      }, Object.defineProperty(b.prototype, "props", {
		        set: function () {
		          throw Error();
		        }
		      }), "object" === typeof Reflect && Reflect.construct) {
		        try {
		          Reflect.construct(b, []);
		        } catch (l) {
		          var d = l;
		        }
		        Reflect.construct(a, [], b);
		      } else {
		        try {
		          b.call();
		        } catch (l) {
		          d = l;
		        }
		        a.call(b.prototype);
		      }
		    } else {
		      try {
		        throw Error();
		      } catch (l) {
		        d = l;
		      }
		      a();
		    }
		  } catch (l) {
		    if (l && d && "string" === typeof l.stack) {
		      for (var e = l.stack.split("\n"), f = d.stack.split("\n"), g = e.length - 1, h = f.length - 1; 1 <= g && 0 <= h && e[g] !== f[h];) h--;
		      for (; 1 <= g && 0 <= h; g--, h--) if (e[g] !== f[h]) {
		        if (1 !== g || 1 !== h) {
		          do if (g--, h--, 0 > h || e[g] !== f[h]) {
		            var k = "\n" + e[g].replace(" at new ", " at ");
		            a.displayName && k.includes("<anonymous>") && (k = k.replace("<anonymous>", a.displayName));
		            return k;
		          } while (1 <= g && 0 <= h);
		        }
		        break;
		      }
		    }
		  } finally {
		    Na = !1, Error.prepareStackTrace = c;
		  }
		  return (a = a ? a.displayName || a.name : "") ? Ma(a) : "";
		}
		function Pa(a) {
		  switch (a.tag) {
		    case 5:
		      return Ma(a.type);
		    case 16:
		      return Ma("Lazy");
		    case 13:
		      return Ma("Suspense");
		    case 19:
		      return Ma("SuspenseList");
		    case 0:
		    case 2:
		    case 15:
		      return a = Oa(a.type, !1), a;
		    case 11:
		      return a = Oa(a.type.render, !1), a;
		    case 1:
		      return a = Oa(a.type, !0), a;
		    default:
		      return "";
		  }
		}
		function Qa(a) {
		  if (null == a) return null;
		  if ("function" === typeof a) return a.displayName || a.name || null;
		  if ("string" === typeof a) return a;
		  switch (a) {
		    case ya:
		      return "Fragment";
		    case wa:
		      return "Portal";
		    case Aa:
		      return "Profiler";
		    case za:
		      return "StrictMode";
		    case Ea:
		      return "Suspense";
		    case Fa:
		      return "SuspenseList";
		  }
		  if ("object" === typeof a) switch (a.$$typeof) {
		    case Ca:
		      return (a.displayName || "Context") + ".Consumer";
		    case Ba:
		      return (a._context.displayName || "Context") + ".Provider";
		    case Da:
		      var b = a.render;
		      a = a.displayName;
		      a || (a = b.displayName || b.name || "", a = "" !== a ? "ForwardRef(" + a + ")" : "ForwardRef");
		      return a;
		    case Ga:
		      return b = a.displayName || null, null !== b ? b : Qa(a.type) || "Memo";
		    case Ha:
		      b = a._payload;
		      a = a._init;
		      try {
		        return Qa(a(b));
		      } catch (c) {}
		  }
		  return null;
		}
		function Ra(a) {
		  var b = a.type;
		  switch (a.tag) {
		    case 24:
		      return "Cache";
		    case 9:
		      return (b.displayName || "Context") + ".Consumer";
		    case 10:
		      return (b._context.displayName || "Context") + ".Provider";
		    case 18:
		      return "DehydratedFragment";
		    case 11:
		      return a = b.render, a = a.displayName || a.name || "", b.displayName || ("" !== a ? "ForwardRef(" + a + ")" : "ForwardRef");
		    case 7:
		      return "Fragment";
		    case 5:
		      return b;
		    case 4:
		      return "Portal";
		    case 3:
		      return "Root";
		    case 6:
		      return "Text";
		    case 16:
		      return Qa(b);
		    case 8:
		      return b === za ? "StrictMode" : "Mode";
		    case 22:
		      return "Offscreen";
		    case 12:
		      return "Profiler";
		    case 21:
		      return "Scope";
		    case 13:
		      return "Suspense";
		    case 19:
		      return "SuspenseList";
		    case 25:
		      return "TracingMarker";
		    case 1:
		    case 0:
		    case 17:
		    case 2:
		    case 14:
		    case 15:
		      if ("function" === typeof b) return b.displayName || b.name || null;
		      if ("string" === typeof b) return b;
		  }
		  return null;
		}
		function Sa(a) {
		  switch (typeof a) {
		    case "boolean":
		    case "number":
		    case "string":
		    case "undefined":
		      return a;
		    case "object":
		      return a;
		    default:
		      return "";
		  }
		}
		function Ta(a) {
		  var b = a.type;
		  return (a = a.nodeName) && "input" === a.toLowerCase() && ("checkbox" === b || "radio" === b);
		}
		function Ua(a) {
		  var b = Ta(a) ? "checked" : "value",
		    c = Object.getOwnPropertyDescriptor(a.constructor.prototype, b),
		    d = "" + a[b];
		  if (!a.hasOwnProperty(b) && "undefined" !== typeof c && "function" === typeof c.get && "function" === typeof c.set) {
		    var e = c.get,
		      f = c.set;
		    Object.defineProperty(a, b, {
		      configurable: !0,
		      get: function () {
		        return e.call(this);
		      },
		      set: function (a) {
		        d = "" + a;
		        f.call(this, a);
		      }
		    });
		    Object.defineProperty(a, b, {
		      enumerable: c.enumerable
		    });
		    return {
		      getValue: function () {
		        return d;
		      },
		      setValue: function (a) {
		        d = "" + a;
		      },
		      stopTracking: function () {
		        a._valueTracker = null;
		        delete a[b];
		      }
		    };
		  }
		}
		function Va(a) {
		  a._valueTracker || (a._valueTracker = Ua(a));
		}
		function Wa(a) {
		  if (!a) return !1;
		  var b = a._valueTracker;
		  if (!b) return !0;
		  var c = b.getValue();
		  var d = "";
		  a && (d = Ta(a) ? a.checked ? "true" : "false" : a.value);
		  a = d;
		  return a !== c ? (b.setValue(a), !0) : !1;
		}
		function Xa(a) {
		  a = a || ("undefined" !== typeof document ? document : void 0);
		  if ("undefined" === typeof a) return null;
		  try {
		    return a.activeElement || a.body;
		  } catch (b) {
		    return a.body;
		  }
		}
		function Ya(a, b) {
		  var c = b.checked;
		  return A({}, b, {
		    defaultChecked: void 0,
		    defaultValue: void 0,
		    value: void 0,
		    checked: null != c ? c : a._wrapperState.initialChecked
		  });
		}
		function Za(a, b) {
		  var c = null == b.defaultValue ? "" : b.defaultValue,
		    d = null != b.checked ? b.checked : b.defaultChecked;
		  c = Sa(null != b.value ? b.value : c);
		  a._wrapperState = {
		    initialChecked: d,
		    initialValue: c,
		    controlled: "checkbox" === b.type || "radio" === b.type ? null != b.checked : null != b.value
		  };
		}
		function ab(a, b) {
		  b = b.checked;
		  null != b && ta(a, "checked", b, !1);
		}
		function bb(a, b) {
		  ab(a, b);
		  var c = Sa(b.value),
		    d = b.type;
		  if (null != c) {
		    if ("number" === d) {
		      if (0 === c && "" === a.value || a.value != c) a.value = "" + c;
		    } else a.value !== "" + c && (a.value = "" + c);
		  } else if ("submit" === d || "reset" === d) {
		    a.removeAttribute("value");
		    return;
		  }
		  b.hasOwnProperty("value") ? cb(a, b.type, c) : b.hasOwnProperty("defaultValue") && cb(a, b.type, Sa(b.defaultValue));
		  null == b.checked && null != b.defaultChecked && (a.defaultChecked = !!b.defaultChecked);
		}
		function db(a, b, c) {
		  if (b.hasOwnProperty("value") || b.hasOwnProperty("defaultValue")) {
		    var d = b.type;
		    if (!("submit" !== d && "reset" !== d || void 0 !== b.value && null !== b.value)) return;
		    b = "" + a._wrapperState.initialValue;
		    c || b === a.value || (a.value = b);
		    a.defaultValue = b;
		  }
		  c = a.name;
		  "" !== c && (a.name = "");
		  a.defaultChecked = !!a._wrapperState.initialChecked;
		  "" !== c && (a.name = c);
		}
		function cb(a, b, c) {
		  if ("number" !== b || Xa(a.ownerDocument) !== a) null == c ? a.defaultValue = "" + a._wrapperState.initialValue : a.defaultValue !== "" + c && (a.defaultValue = "" + c);
		}
		var eb = Array.isArray;
		function fb(a, b, c, d) {
		  a = a.options;
		  if (b) {
		    b = {};
		    for (var e = 0; e < c.length; e++) b["$" + c[e]] = !0;
		    for (c = 0; c < a.length; c++) e = b.hasOwnProperty("$" + a[c].value), a[c].selected !== e && (a[c].selected = e), e && d && (a[c].defaultSelected = !0);
		  } else {
		    c = "" + Sa(c);
		    b = null;
		    for (e = 0; e < a.length; e++) {
		      if (a[e].value === c) {
		        a[e].selected = !0;
		        d && (a[e].defaultSelected = !0);
		        return;
		      }
		      null !== b || a[e].disabled || (b = a[e]);
		    }
		    null !== b && (b.selected = !0);
		  }
		}
		function gb(a, b) {
		  if (null != b.dangerouslySetInnerHTML) throw Error(p(91));
		  return A({}, b, {
		    value: void 0,
		    defaultValue: void 0,
		    children: "" + a._wrapperState.initialValue
		  });
		}
		function hb(a, b) {
		  var c = b.value;
		  if (null == c) {
		    c = b.children;
		    b = b.defaultValue;
		    if (null != c) {
		      if (null != b) throw Error(p(92));
		      if (eb(c)) {
		        if (1 < c.length) throw Error(p(93));
		        c = c[0];
		      }
		      b = c;
		    }
		    null == b && (b = "");
		    c = b;
		  }
		  a._wrapperState = {
		    initialValue: Sa(c)
		  };
		}
		function ib(a, b) {
		  var c = Sa(b.value),
		    d = Sa(b.defaultValue);
		  null != c && (c = "" + c, c !== a.value && (a.value = c), null == b.defaultValue && a.defaultValue !== c && (a.defaultValue = c));
		  null != d && (a.defaultValue = "" + d);
		}
		function jb(a) {
		  var b = a.textContent;
		  b === a._wrapperState.initialValue && "" !== b && null !== b && (a.value = b);
		}
		function kb(a) {
		  switch (a) {
		    case "svg":
		      return "http://www.w3.org/2000/svg";
		    case "math":
		      return "http://www.w3.org/1998/Math/MathML";
		    default:
		      return "http://www.w3.org/1999/xhtml";
		  }
		}
		function lb(a, b) {
		  return null == a || "http://www.w3.org/1999/xhtml" === a ? kb(b) : "http://www.w3.org/2000/svg" === a && "foreignObject" === b ? "http://www.w3.org/1999/xhtml" : a;
		}
		var mb,
		  nb = function (a) {
		    return "undefined" !== typeof MSApp && MSApp.execUnsafeLocalFunction ? function (b, c, d, e) {
		      MSApp.execUnsafeLocalFunction(function () {
		        return a(b, c, d, e);
		      });
		    } : a;
		  }(function (a, b) {
		    if ("http://www.w3.org/2000/svg" !== a.namespaceURI || "innerHTML" in a) a.innerHTML = b;else {
		      mb = mb || document.createElement("div");
		      mb.innerHTML = "<svg>" + b.valueOf().toString() + "</svg>";
		      for (b = mb.firstChild; a.firstChild;) a.removeChild(a.firstChild);
		      for (; b.firstChild;) a.appendChild(b.firstChild);
		    }
		  });
		function ob(a, b) {
		  if (b) {
		    var c = a.firstChild;
		    if (c && c === a.lastChild && 3 === c.nodeType) {
		      c.nodeValue = b;
		      return;
		    }
		  }
		  a.textContent = b;
		}
		var pb = {
		    animationIterationCount: !0,
		    aspectRatio: !0,
		    borderImageOutset: !0,
		    borderImageSlice: !0,
		    borderImageWidth: !0,
		    boxFlex: !0,
		    boxFlexGroup: !0,
		    boxOrdinalGroup: !0,
		    columnCount: !0,
		    columns: !0,
		    flex: !0,
		    flexGrow: !0,
		    flexPositive: !0,
		    flexShrink: !0,
		    flexNegative: !0,
		    flexOrder: !0,
		    gridArea: !0,
		    gridRow: !0,
		    gridRowEnd: !0,
		    gridRowSpan: !0,
		    gridRowStart: !0,
		    gridColumn: !0,
		    gridColumnEnd: !0,
		    gridColumnSpan: !0,
		    gridColumnStart: !0,
		    fontWeight: !0,
		    lineClamp: !0,
		    lineHeight: !0,
		    opacity: !0,
		    order: !0,
		    orphans: !0,
		    tabSize: !0,
		    widows: !0,
		    zIndex: !0,
		    zoom: !0,
		    fillOpacity: !0,
		    floodOpacity: !0,
		    stopOpacity: !0,
		    strokeDasharray: !0,
		    strokeDashoffset: !0,
		    strokeMiterlimit: !0,
		    strokeOpacity: !0,
		    strokeWidth: !0
		  },
		  qb = ["Webkit", "ms", "Moz", "O"];
		Object.keys(pb).forEach(function (a) {
		  qb.forEach(function (b) {
		    b = b + a.charAt(0).toUpperCase() + a.substring(1);
		    pb[b] = pb[a];
		  });
		});
		function rb(a, b, c) {
		  return null == b || "boolean" === typeof b || "" === b ? "" : c || "number" !== typeof b || 0 === b || pb.hasOwnProperty(a) && pb[a] ? ("" + b).trim() : b + "px";
		}
		function sb(a, b) {
		  a = a.style;
		  for (var c in b) if (b.hasOwnProperty(c)) {
		    var d = 0 === c.indexOf("--"),
		      e = rb(c, b[c], d);
		    "float" === c && (c = "cssFloat");
		    d ? a.setProperty(c, e) : a[c] = e;
		  }
		}
		var tb = A({
		  menuitem: !0
		}, {
		  area: !0,
		  base: !0,
		  br: !0,
		  col: !0,
		  embed: !0,
		  hr: !0,
		  img: !0,
		  input: !0,
		  keygen: !0,
		  link: !0,
		  meta: !0,
		  param: !0,
		  source: !0,
		  track: !0,
		  wbr: !0
		});
		function ub(a, b) {
		  if (b) {
		    if (tb[a] && (null != b.children || null != b.dangerouslySetInnerHTML)) throw Error(p(137, a));
		    if (null != b.dangerouslySetInnerHTML) {
		      if (null != b.children) throw Error(p(60));
		      if ("object" !== typeof b.dangerouslySetInnerHTML || !("__html" in b.dangerouslySetInnerHTML)) throw Error(p(61));
		    }
		    if (null != b.style && "object" !== typeof b.style) throw Error(p(62));
		  }
		}
		function vb(a, b) {
		  if (-1 === a.indexOf("-")) return "string" === typeof b.is;
		  switch (a) {
		    case "annotation-xml":
		    case "color-profile":
		    case "font-face":
		    case "font-face-src":
		    case "font-face-uri":
		    case "font-face-format":
		    case "font-face-name":
		    case "missing-glyph":
		      return !1;
		    default:
		      return !0;
		  }
		}
		var wb = null;
		function xb(a) {
		  a = a.target || a.srcElement || window;
		  a.correspondingUseElement && (a = a.correspondingUseElement);
		  return 3 === a.nodeType ? a.parentNode : a;
		}
		var yb = null,
		  zb = null,
		  Ab = null;
		function Bb(a) {
		  if (a = Cb(a)) {
		    if ("function" !== typeof yb) throw Error(p(280));
		    var b = a.stateNode;
		    b && (b = Db(b), yb(a.stateNode, a.type, b));
		  }
		}
		function Eb(a) {
		  zb ? Ab ? Ab.push(a) : Ab = [a] : zb = a;
		}
		function Fb() {
		  if (zb) {
		    var a = zb,
		      b = Ab;
		    Ab = zb = null;
		    Bb(a);
		    if (b) for (a = 0; a < b.length; a++) Bb(b[a]);
		  }
		}
		function Gb(a, b) {
		  return a(b);
		}
		function Hb() {}
		var Ib = !1;
		function Jb(a, b, c) {
		  if (Ib) return a(b, c);
		  Ib = !0;
		  try {
		    return Gb(a, b, c);
		  } finally {
		    if (Ib = !1, null !== zb || null !== Ab) Hb(), Fb();
		  }
		}
		function Kb(a, b) {
		  var c = a.stateNode;
		  if (null === c) return null;
		  var d = Db(c);
		  if (null === d) return null;
		  c = d[b];
		  a: switch (b) {
		    case "onClick":
		    case "onClickCapture":
		    case "onDoubleClick":
		    case "onDoubleClickCapture":
		    case "onMouseDown":
		    case "onMouseDownCapture":
		    case "onMouseMove":
		    case "onMouseMoveCapture":
		    case "onMouseUp":
		    case "onMouseUpCapture":
		    case "onMouseEnter":
		      (d = !d.disabled) || (a = a.type, d = !("button" === a || "input" === a || "select" === a || "textarea" === a));
		      a = !d;
		      break a;
		    default:
		      a = !1;
		  }
		  if (a) return null;
		  if (c && "function" !== typeof c) throw Error(p(231, b, typeof c));
		  return c;
		}
		var Lb = !1;
		if (ia) try {
		  var Mb = {};
		  Object.defineProperty(Mb, "passive", {
		    get: function () {
		      Lb = !0;
		    }
		  });
		  window.addEventListener("test", Mb, Mb);
		  window.removeEventListener("test", Mb, Mb);
		} catch (a) {
		  Lb = !1;
		}
		function Nb(a, b, c, d, e, f, g, h, k) {
		  var l = Array.prototype.slice.call(arguments, 3);
		  try {
		    b.apply(c, l);
		  } catch (m) {
		    this.onError(m);
		  }
		}
		var Ob = !1,
		  Pb = null,
		  Qb = !1,
		  Rb = null,
		  Sb = {
		    onError: function (a) {
		      Ob = !0;
		      Pb = a;
		    }
		  };
		function Tb(a, b, c, d, e, f, g, h, k) {
		  Ob = !1;
		  Pb = null;
		  Nb.apply(Sb, arguments);
		}
		function Ub(a, b, c, d, e, f, g, h, k) {
		  Tb.apply(this, arguments);
		  if (Ob) {
		    if (Ob) {
		      var l = Pb;
		      Ob = !1;
		      Pb = null;
		    } else throw Error(p(198));
		    Qb || (Qb = !0, Rb = l);
		  }
		}
		function Vb(a) {
		  var b = a,
		    c = a;
		  if (a.alternate) for (; b.return;) b = b.return;else {
		    a = b;
		    do b = a, 0 !== (b.flags & 4098) && (c = b.return), a = b.return; while (a);
		  }
		  return 3 === b.tag ? c : null;
		}
		function Wb(a) {
		  if (13 === a.tag) {
		    var b = a.memoizedState;
		    null === b && (a = a.alternate, null !== a && (b = a.memoizedState));
		    if (null !== b) return b.dehydrated;
		  }
		  return null;
		}
		function Xb(a) {
		  if (Vb(a) !== a) throw Error(p(188));
		}
		function Yb(a) {
		  var b = a.alternate;
		  if (!b) {
		    b = Vb(a);
		    if (null === b) throw Error(p(188));
		    return b !== a ? null : a;
		  }
		  for (var c = a, d = b;;) {
		    var e = c.return;
		    if (null === e) break;
		    var f = e.alternate;
		    if (null === f) {
		      d = e.return;
		      if (null !== d) {
		        c = d;
		        continue;
		      }
		      break;
		    }
		    if (e.child === f.child) {
		      for (f = e.child; f;) {
		        if (f === c) return Xb(e), a;
		        if (f === d) return Xb(e), b;
		        f = f.sibling;
		      }
		      throw Error(p(188));
		    }
		    if (c.return !== d.return) c = e, d = f;else {
		      for (var g = !1, h = e.child; h;) {
		        if (h === c) {
		          g = !0;
		          c = e;
		          d = f;
		          break;
		        }
		        if (h === d) {
		          g = !0;
		          d = e;
		          c = f;
		          break;
		        }
		        h = h.sibling;
		      }
		      if (!g) {
		        for (h = f.child; h;) {
		          if (h === c) {
		            g = !0;
		            c = f;
		            d = e;
		            break;
		          }
		          if (h === d) {
		            g = !0;
		            d = f;
		            c = e;
		            break;
		          }
		          h = h.sibling;
		        }
		        if (!g) throw Error(p(189));
		      }
		    }
		    if (c.alternate !== d) throw Error(p(190));
		  }
		  if (3 !== c.tag) throw Error(p(188));
		  return c.stateNode.current === c ? a : b;
		}
		function Zb(a) {
		  a = Yb(a);
		  return null !== a ? $b(a) : null;
		}
		function $b(a) {
		  if (5 === a.tag || 6 === a.tag) return a;
		  for (a = a.child; null !== a;) {
		    var b = $b(a);
		    if (null !== b) return b;
		    a = a.sibling;
		  }
		  return null;
		}
		var ac = ca.unstable_scheduleCallback,
		  bc = ca.unstable_cancelCallback,
		  cc = ca.unstable_shouldYield,
		  dc = ca.unstable_requestPaint,
		  B = ca.unstable_now,
		  ec = ca.unstable_getCurrentPriorityLevel,
		  fc = ca.unstable_ImmediatePriority,
		  gc = ca.unstable_UserBlockingPriority,
		  hc = ca.unstable_NormalPriority,
		  ic = ca.unstable_LowPriority,
		  jc = ca.unstable_IdlePriority,
		  kc = null,
		  lc = null;
		function mc(a) {
		  if (lc && "function" === typeof lc.onCommitFiberRoot) try {
		    lc.onCommitFiberRoot(kc, a, void 0, 128 === (a.current.flags & 128));
		  } catch (b) {}
		}
		var oc = Math.clz32 ? Math.clz32 : nc,
		  pc = Math.log,
		  qc = Math.LN2;
		function nc(a) {
		  a >>>= 0;
		  return 0 === a ? 32 : 31 - (pc(a) / qc | 0) | 0;
		}
		var rc = 64,
		  sc = 4194304;
		function tc(a) {
		  switch (a & -a) {
		    case 1:
		      return 1;
		    case 2:
		      return 2;
		    case 4:
		      return 4;
		    case 8:
		      return 8;
		    case 16:
		      return 16;
		    case 32:
		      return 32;
		    case 64:
		    case 128:
		    case 256:
		    case 512:
		    case 1024:
		    case 2048:
		    case 4096:
		    case 8192:
		    case 16384:
		    case 32768:
		    case 65536:
		    case 131072:
		    case 262144:
		    case 524288:
		    case 1048576:
		    case 2097152:
		      return a & 4194240;
		    case 4194304:
		    case 8388608:
		    case 16777216:
		    case 33554432:
		    case 67108864:
		      return a & 130023424;
		    case 134217728:
		      return 134217728;
		    case 268435456:
		      return 268435456;
		    case 536870912:
		      return 536870912;
		    case 1073741824:
		      return 1073741824;
		    default:
		      return a;
		  }
		}
		function uc(a, b) {
		  var c = a.pendingLanes;
		  if (0 === c) return 0;
		  var d = 0,
		    e = a.suspendedLanes,
		    f = a.pingedLanes,
		    g = c & 268435455;
		  if (0 !== g) {
		    var h = g & ~e;
		    0 !== h ? d = tc(h) : (f &= g, 0 !== f && (d = tc(f)));
		  } else g = c & ~e, 0 !== g ? d = tc(g) : 0 !== f && (d = tc(f));
		  if (0 === d) return 0;
		  if (0 !== b && b !== d && 0 === (b & e) && (e = d & -d, f = b & -b, e >= f || 16 === e && 0 !== (f & 4194240))) return b;
		  0 !== (d & 4) && (d |= c & 16);
		  b = a.entangledLanes;
		  if (0 !== b) for (a = a.entanglements, b &= d; 0 < b;) c = 31 - oc(b), e = 1 << c, d |= a[c], b &= ~e;
		  return d;
		}
		function vc(a, b) {
		  switch (a) {
		    case 1:
		    case 2:
		    case 4:
		      return b + 250;
		    case 8:
		    case 16:
		    case 32:
		    case 64:
		    case 128:
		    case 256:
		    case 512:
		    case 1024:
		    case 2048:
		    case 4096:
		    case 8192:
		    case 16384:
		    case 32768:
		    case 65536:
		    case 131072:
		    case 262144:
		    case 524288:
		    case 1048576:
		    case 2097152:
		      return b + 5E3;
		    case 4194304:
		    case 8388608:
		    case 16777216:
		    case 33554432:
		    case 67108864:
		      return -1;
		    case 134217728:
		    case 268435456:
		    case 536870912:
		    case 1073741824:
		      return -1;
		    default:
		      return -1;
		  }
		}
		function wc(a, b) {
		  for (var c = a.suspendedLanes, d = a.pingedLanes, e = a.expirationTimes, f = a.pendingLanes; 0 < f;) {
		    var g = 31 - oc(f),
		      h = 1 << g,
		      k = e[g];
		    if (-1 === k) {
		      if (0 === (h & c) || 0 !== (h & d)) e[g] = vc(h, b);
		    } else k <= b && (a.expiredLanes |= h);
		    f &= ~h;
		  }
		}
		function xc(a) {
		  a = a.pendingLanes & -1073741825;
		  return 0 !== a ? a : a & 1073741824 ? 1073741824 : 0;
		}
		function yc() {
		  var a = rc;
		  rc <<= 1;
		  0 === (rc & 4194240) && (rc = 64);
		  return a;
		}
		function zc(a) {
		  for (var b = [], c = 0; 31 > c; c++) b.push(a);
		  return b;
		}
		function Ac(a, b, c) {
		  a.pendingLanes |= b;
		  536870912 !== b && (a.suspendedLanes = 0, a.pingedLanes = 0);
		  a = a.eventTimes;
		  b = 31 - oc(b);
		  a[b] = c;
		}
		function Bc(a, b) {
		  var c = a.pendingLanes & ~b;
		  a.pendingLanes = b;
		  a.suspendedLanes = 0;
		  a.pingedLanes = 0;
		  a.expiredLanes &= b;
		  a.mutableReadLanes &= b;
		  a.entangledLanes &= b;
		  b = a.entanglements;
		  var d = a.eventTimes;
		  for (a = a.expirationTimes; 0 < c;) {
		    var e = 31 - oc(c),
		      f = 1 << e;
		    b[e] = 0;
		    d[e] = -1;
		    a[e] = -1;
		    c &= ~f;
		  }
		}
		function Cc(a, b) {
		  var c = a.entangledLanes |= b;
		  for (a = a.entanglements; c;) {
		    var d = 31 - oc(c),
		      e = 1 << d;
		    e & b | a[d] & b && (a[d] |= b);
		    c &= ~e;
		  }
		}
		var C = 0;
		function Dc(a) {
		  a &= -a;
		  return 1 < a ? 4 < a ? 0 !== (a & 268435455) ? 16 : 536870912 : 4 : 1;
		}
		var Ec,
		  Fc,
		  Gc,
		  Hc,
		  Ic,
		  Jc = !1,
		  Kc = [],
		  Lc = null,
		  Mc = null,
		  Nc = null,
		  Oc = new Map(),
		  Pc = new Map(),
		  Qc = [],
		  Rc = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
		function Sc(a, b) {
		  switch (a) {
		    case "focusin":
		    case "focusout":
		      Lc = null;
		      break;
		    case "dragenter":
		    case "dragleave":
		      Mc = null;
		      break;
		    case "mouseover":
		    case "mouseout":
		      Nc = null;
		      break;
		    case "pointerover":
		    case "pointerout":
		      Oc.delete(b.pointerId);
		      break;
		    case "gotpointercapture":
		    case "lostpointercapture":
		      Pc.delete(b.pointerId);
		  }
		}
		function Tc(a, b, c, d, e, f) {
		  if (null === a || a.nativeEvent !== f) return a = {
		    blockedOn: b,
		    domEventName: c,
		    eventSystemFlags: d,
		    nativeEvent: f,
		    targetContainers: [e]
		  }, null !== b && (b = Cb(b), null !== b && Fc(b)), a;
		  a.eventSystemFlags |= d;
		  b = a.targetContainers;
		  null !== e && -1 === b.indexOf(e) && b.push(e);
		  return a;
		}
		function Uc(a, b, c, d, e) {
		  switch (b) {
		    case "focusin":
		      return Lc = Tc(Lc, a, b, c, d, e), !0;
		    case "dragenter":
		      return Mc = Tc(Mc, a, b, c, d, e), !0;
		    case "mouseover":
		      return Nc = Tc(Nc, a, b, c, d, e), !0;
		    case "pointerover":
		      var f = e.pointerId;
		      Oc.set(f, Tc(Oc.get(f) || null, a, b, c, d, e));
		      return !0;
		    case "gotpointercapture":
		      return f = e.pointerId, Pc.set(f, Tc(Pc.get(f) || null, a, b, c, d, e)), !0;
		  }
		  return !1;
		}
		function Vc(a) {
		  var b = Wc(a.target);
		  if (null !== b) {
		    var c = Vb(b);
		    if (null !== c) if (b = c.tag, 13 === b) {
		      if (b = Wb(c), null !== b) {
		        a.blockedOn = b;
		        Ic(a.priority, function () {
		          Gc(c);
		        });
		        return;
		      }
		    } else if (3 === b && c.stateNode.current.memoizedState.isDehydrated) {
		      a.blockedOn = 3 === c.tag ? c.stateNode.containerInfo : null;
		      return;
		    }
		  }
		  a.blockedOn = null;
		}
		function Xc(a) {
		  if (null !== a.blockedOn) return !1;
		  for (var b = a.targetContainers; 0 < b.length;) {
		    var c = Yc(a.domEventName, a.eventSystemFlags, b[0], a.nativeEvent);
		    if (null === c) {
		      c = a.nativeEvent;
		      var d = new c.constructor(c.type, c);
		      wb = d;
		      c.target.dispatchEvent(d);
		      wb = null;
		    } else return b = Cb(c), null !== b && Fc(b), a.blockedOn = c, !1;
		    b.shift();
		  }
		  return !0;
		}
		function Zc(a, b, c) {
		  Xc(a) && c.delete(b);
		}
		function $c() {
		  Jc = !1;
		  null !== Lc && Xc(Lc) && (Lc = null);
		  null !== Mc && Xc(Mc) && (Mc = null);
		  null !== Nc && Xc(Nc) && (Nc = null);
		  Oc.forEach(Zc);
		  Pc.forEach(Zc);
		}
		function ad(a, b) {
		  a.blockedOn === b && (a.blockedOn = null, Jc || (Jc = !0, ca.unstable_scheduleCallback(ca.unstable_NormalPriority, $c)));
		}
		function bd(a) {
		  function b(b) {
		    return ad(b, a);
		  }
		  if (0 < Kc.length) {
		    ad(Kc[0], a);
		    for (var c = 1; c < Kc.length; c++) {
		      var d = Kc[c];
		      d.blockedOn === a && (d.blockedOn = null);
		    }
		  }
		  null !== Lc && ad(Lc, a);
		  null !== Mc && ad(Mc, a);
		  null !== Nc && ad(Nc, a);
		  Oc.forEach(b);
		  Pc.forEach(b);
		  for (c = 0; c < Qc.length; c++) d = Qc[c], d.blockedOn === a && (d.blockedOn = null);
		  for (; 0 < Qc.length && (c = Qc[0], null === c.blockedOn);) Vc(c), null === c.blockedOn && Qc.shift();
		}
		var cd = ua.ReactCurrentBatchConfig,
		  dd = !0;
		function ed(a, b, c, d) {
		  var e = C,
		    f = cd.transition;
		  cd.transition = null;
		  try {
		    C = 1, fd(a, b, c, d);
		  } finally {
		    C = e, cd.transition = f;
		  }
		}
		function gd(a, b, c, d) {
		  var e = C,
		    f = cd.transition;
		  cd.transition = null;
		  try {
		    C = 4, fd(a, b, c, d);
		  } finally {
		    C = e, cd.transition = f;
		  }
		}
		function fd(a, b, c, d) {
		  if (dd) {
		    var e = Yc(a, b, c, d);
		    if (null === e) hd(a, b, d, id, c), Sc(a, d);else if (Uc(e, a, b, c, d)) d.stopPropagation();else if (Sc(a, d), b & 4 && -1 < Rc.indexOf(a)) {
		      for (; null !== e;) {
		        var f = Cb(e);
		        null !== f && Ec(f);
		        f = Yc(a, b, c, d);
		        null === f && hd(a, b, d, id, c);
		        if (f === e) break;
		        e = f;
		      }
		      null !== e && d.stopPropagation();
		    } else hd(a, b, d, null, c);
		  }
		}
		var id = null;
		function Yc(a, b, c, d) {
		  id = null;
		  a = xb(d);
		  a = Wc(a);
		  if (null !== a) if (b = Vb(a), null === b) a = null;else if (c = b.tag, 13 === c) {
		    a = Wb(b);
		    if (null !== a) return a;
		    a = null;
		  } else if (3 === c) {
		    if (b.stateNode.current.memoizedState.isDehydrated) return 3 === b.tag ? b.stateNode.containerInfo : null;
		    a = null;
		  } else b !== a && (a = null);
		  id = a;
		  return null;
		}
		function jd(a) {
		  switch (a) {
		    case "cancel":
		    case "click":
		    case "close":
		    case "contextmenu":
		    case "copy":
		    case "cut":
		    case "auxclick":
		    case "dblclick":
		    case "dragend":
		    case "dragstart":
		    case "drop":
		    case "focusin":
		    case "focusout":
		    case "input":
		    case "invalid":
		    case "keydown":
		    case "keypress":
		    case "keyup":
		    case "mousedown":
		    case "mouseup":
		    case "paste":
		    case "pause":
		    case "play":
		    case "pointercancel":
		    case "pointerdown":
		    case "pointerup":
		    case "ratechange":
		    case "reset":
		    case "resize":
		    case "seeked":
		    case "submit":
		    case "touchcancel":
		    case "touchend":
		    case "touchstart":
		    case "volumechange":
		    case "change":
		    case "selectionchange":
		    case "textInput":
		    case "compositionstart":
		    case "compositionend":
		    case "compositionupdate":
		    case "beforeblur":
		    case "afterblur":
		    case "beforeinput":
		    case "blur":
		    case "fullscreenchange":
		    case "focus":
		    case "hashchange":
		    case "popstate":
		    case "select":
		    case "selectstart":
		      return 1;
		    case "drag":
		    case "dragenter":
		    case "dragexit":
		    case "dragleave":
		    case "dragover":
		    case "mousemove":
		    case "mouseout":
		    case "mouseover":
		    case "pointermove":
		    case "pointerout":
		    case "pointerover":
		    case "scroll":
		    case "toggle":
		    case "touchmove":
		    case "wheel":
		    case "mouseenter":
		    case "mouseleave":
		    case "pointerenter":
		    case "pointerleave":
		      return 4;
		    case "message":
		      switch (ec()) {
		        case fc:
		          return 1;
		        case gc:
		          return 4;
		        case hc:
		        case ic:
		          return 16;
		        case jc:
		          return 536870912;
		        default:
		          return 16;
		      }
		    default:
		      return 16;
		  }
		}
		var kd = null,
		  ld = null,
		  md = null;
		function nd() {
		  if (md) return md;
		  var a,
		    b = ld,
		    c = b.length,
		    d,
		    e = "value" in kd ? kd.value : kd.textContent,
		    f = e.length;
		  for (a = 0; a < c && b[a] === e[a]; a++);
		  var g = c - a;
		  for (d = 1; d <= g && b[c - d] === e[f - d]; d++);
		  return md = e.slice(a, 1 < d ? 1 - d : void 0);
		}
		function od(a) {
		  var b = a.keyCode;
		  "charCode" in a ? (a = a.charCode, 0 === a && 13 === b && (a = 13)) : a = b;
		  10 === a && (a = 13);
		  return 32 <= a || 13 === a ? a : 0;
		}
		function pd() {
		  return !0;
		}
		function qd() {
		  return !1;
		}
		function rd(a) {
		  function b(b, d, e, f, g) {
		    this._reactName = b;
		    this._targetInst = e;
		    this.type = d;
		    this.nativeEvent = f;
		    this.target = g;
		    this.currentTarget = null;
		    for (var c in a) a.hasOwnProperty(c) && (b = a[c], this[c] = b ? b(f) : f[c]);
		    this.isDefaultPrevented = (null != f.defaultPrevented ? f.defaultPrevented : !1 === f.returnValue) ? pd : qd;
		    this.isPropagationStopped = qd;
		    return this;
		  }
		  A(b.prototype, {
		    preventDefault: function () {
		      this.defaultPrevented = !0;
		      var a = this.nativeEvent;
		      a && (a.preventDefault ? a.preventDefault() : "unknown" !== typeof a.returnValue && (a.returnValue = !1), this.isDefaultPrevented = pd);
		    },
		    stopPropagation: function () {
		      var a = this.nativeEvent;
		      a && (a.stopPropagation ? a.stopPropagation() : "unknown" !== typeof a.cancelBubble && (a.cancelBubble = !0), this.isPropagationStopped = pd);
		    },
		    persist: function () {},
		    isPersistent: pd
		  });
		  return b;
		}
		var sd = {
		    eventPhase: 0,
		    bubbles: 0,
		    cancelable: 0,
		    timeStamp: function (a) {
		      return a.timeStamp || Date.now();
		    },
		    defaultPrevented: 0,
		    isTrusted: 0
		  },
		  td = rd(sd),
		  ud = A({}, sd, {
		    view: 0,
		    detail: 0
		  }),
		  vd = rd(ud),
		  wd,
		  xd,
		  yd,
		  Ad = A({}, ud, {
		    screenX: 0,
		    screenY: 0,
		    clientX: 0,
		    clientY: 0,
		    pageX: 0,
		    pageY: 0,
		    ctrlKey: 0,
		    shiftKey: 0,
		    altKey: 0,
		    metaKey: 0,
		    getModifierState: zd,
		    button: 0,
		    buttons: 0,
		    relatedTarget: function (a) {
		      return void 0 === a.relatedTarget ? a.fromElement === a.srcElement ? a.toElement : a.fromElement : a.relatedTarget;
		    },
		    movementX: function (a) {
		      if ("movementX" in a) return a.movementX;
		      a !== yd && (yd && "mousemove" === a.type ? (wd = a.screenX - yd.screenX, xd = a.screenY - yd.screenY) : xd = wd = 0, yd = a);
		      return wd;
		    },
		    movementY: function (a) {
		      return "movementY" in a ? a.movementY : xd;
		    }
		  }),
		  Bd = rd(Ad),
		  Cd = A({}, Ad, {
		    dataTransfer: 0
		  }),
		  Dd = rd(Cd),
		  Ed = A({}, ud, {
		    relatedTarget: 0
		  }),
		  Fd = rd(Ed),
		  Gd = A({}, sd, {
		    animationName: 0,
		    elapsedTime: 0,
		    pseudoElement: 0
		  }),
		  Hd = rd(Gd),
		  Id = A({}, sd, {
		    clipboardData: function (a) {
		      return "clipboardData" in a ? a.clipboardData : window.clipboardData;
		    }
		  }),
		  Jd = rd(Id),
		  Kd = A({}, sd, {
		    data: 0
		  }),
		  Ld = rd(Kd),
		  Md = {
		    Esc: "Escape",
		    Spacebar: " ",
		    Left: "ArrowLeft",
		    Up: "ArrowUp",
		    Right: "ArrowRight",
		    Down: "ArrowDown",
		    Del: "Delete",
		    Win: "OS",
		    Menu: "ContextMenu",
		    Apps: "ContextMenu",
		    Scroll: "ScrollLock",
		    MozPrintableKey: "Unidentified"
		  },
		  Nd = {
		    8: "Backspace",
		    9: "Tab",
		    12: "Clear",
		    13: "Enter",
		    16: "Shift",
		    17: "Control",
		    18: "Alt",
		    19: "Pause",
		    20: "CapsLock",
		    27: "Escape",
		    32: " ",
		    33: "PageUp",
		    34: "PageDown",
		    35: "End",
		    36: "Home",
		    37: "ArrowLeft",
		    38: "ArrowUp",
		    39: "ArrowRight",
		    40: "ArrowDown",
		    45: "Insert",
		    46: "Delete",
		    112: "F1",
		    113: "F2",
		    114: "F3",
		    115: "F4",
		    116: "F5",
		    117: "F6",
		    118: "F7",
		    119: "F8",
		    120: "F9",
		    121: "F10",
		    122: "F11",
		    123: "F12",
		    144: "NumLock",
		    145: "ScrollLock",
		    224: "Meta"
		  },
		  Od = {
		    Alt: "altKey",
		    Control: "ctrlKey",
		    Meta: "metaKey",
		    Shift: "shiftKey"
		  };
		function Pd(a) {
		  var b = this.nativeEvent;
		  return b.getModifierState ? b.getModifierState(a) : (a = Od[a]) ? !!b[a] : !1;
		}
		function zd() {
		  return Pd;
		}
		var Qd = A({}, ud, {
		    key: function (a) {
		      if (a.key) {
		        var b = Md[a.key] || a.key;
		        if ("Unidentified" !== b) return b;
		      }
		      return "keypress" === a.type ? (a = od(a), 13 === a ? "Enter" : String.fromCharCode(a)) : "keydown" === a.type || "keyup" === a.type ? Nd[a.keyCode] || "Unidentified" : "";
		    },
		    code: 0,
		    location: 0,
		    ctrlKey: 0,
		    shiftKey: 0,
		    altKey: 0,
		    metaKey: 0,
		    repeat: 0,
		    locale: 0,
		    getModifierState: zd,
		    charCode: function (a) {
		      return "keypress" === a.type ? od(a) : 0;
		    },
		    keyCode: function (a) {
		      return "keydown" === a.type || "keyup" === a.type ? a.keyCode : 0;
		    },
		    which: function (a) {
		      return "keypress" === a.type ? od(a) : "keydown" === a.type || "keyup" === a.type ? a.keyCode : 0;
		    }
		  }),
		  Rd = rd(Qd),
		  Sd = A({}, Ad, {
		    pointerId: 0,
		    width: 0,
		    height: 0,
		    pressure: 0,
		    tangentialPressure: 0,
		    tiltX: 0,
		    tiltY: 0,
		    twist: 0,
		    pointerType: 0,
		    isPrimary: 0
		  }),
		  Td = rd(Sd),
		  Ud = A({}, ud, {
		    touches: 0,
		    targetTouches: 0,
		    changedTouches: 0,
		    altKey: 0,
		    metaKey: 0,
		    ctrlKey: 0,
		    shiftKey: 0,
		    getModifierState: zd
		  }),
		  Vd = rd(Ud),
		  Wd = A({}, sd, {
		    propertyName: 0,
		    elapsedTime: 0,
		    pseudoElement: 0
		  }),
		  Xd = rd(Wd),
		  Yd = A({}, Ad, {
		    deltaX: function (a) {
		      return "deltaX" in a ? a.deltaX : "wheelDeltaX" in a ? -a.wheelDeltaX : 0;
		    },
		    deltaY: function (a) {
		      return "deltaY" in a ? a.deltaY : "wheelDeltaY" in a ? -a.wheelDeltaY : "wheelDelta" in a ? -a.wheelDelta : 0;
		    },
		    deltaZ: 0,
		    deltaMode: 0
		  }),
		  Zd = rd(Yd),
		  $d = [9, 13, 27, 32],
		  ae = ia && "CompositionEvent" in window,
		  be = null;
		ia && "documentMode" in document && (be = document.documentMode);
		var ce = ia && "TextEvent" in window && !be,
		  de = ia && (!ae || be && 8 < be && 11 >= be),
		  ee = String.fromCharCode(32),
		  fe = !1;
		function ge(a, b) {
		  switch (a) {
		    case "keyup":
		      return -1 !== $d.indexOf(b.keyCode);
		    case "keydown":
		      return 229 !== b.keyCode;
		    case "keypress":
		    case "mousedown":
		    case "focusout":
		      return !0;
		    default:
		      return !1;
		  }
		}
		function he(a) {
		  a = a.detail;
		  return "object" === typeof a && "data" in a ? a.data : null;
		}
		var ie = !1;
		function je(a, b) {
		  switch (a) {
		    case "compositionend":
		      return he(b);
		    case "keypress":
		      if (32 !== b.which) return null;
		      fe = !0;
		      return ee;
		    case "textInput":
		      return a = b.data, a === ee && fe ? null : a;
		    default:
		      return null;
		  }
		}
		function ke(a, b) {
		  if (ie) return "compositionend" === a || !ae && ge(a, b) ? (a = nd(), md = ld = kd = null, ie = !1, a) : null;
		  switch (a) {
		    case "paste":
		      return null;
		    case "keypress":
		      if (!(b.ctrlKey || b.altKey || b.metaKey) || b.ctrlKey && b.altKey) {
		        if (b.char && 1 < b.char.length) return b.char;
		        if (b.which) return String.fromCharCode(b.which);
		      }
		      return null;
		    case "compositionend":
		      return de && "ko" !== b.locale ? null : b.data;
		    default:
		      return null;
		  }
		}
		var le = {
		  color: !0,
		  date: !0,
		  datetime: !0,
		  "datetime-local": !0,
		  email: !0,
		  month: !0,
		  number: !0,
		  password: !0,
		  range: !0,
		  search: !0,
		  tel: !0,
		  text: !0,
		  time: !0,
		  url: !0,
		  week: !0
		};
		function me(a) {
		  var b = a && a.nodeName && a.nodeName.toLowerCase();
		  return "input" === b ? !!le[a.type] : "textarea" === b ? !0 : !1;
		}
		function ne(a, b, c, d) {
		  Eb(d);
		  b = oe(b, "onChange");
		  0 < b.length && (c = new td("onChange", "change", null, c, d), a.push({
		    event: c,
		    listeners: b
		  }));
		}
		var pe = null,
		  qe = null;
		function re(a) {
		  se(a, 0);
		}
		function te(a) {
		  var b = ue(a);
		  if (Wa(b)) return a;
		}
		function ve(a, b) {
		  if ("change" === a) return b;
		}
		var we = !1;
		if (ia) {
		  var xe;
		  if (ia) {
		    var ye = ("oninput" in document);
		    if (!ye) {
		      var ze = document.createElement("div");
		      ze.setAttribute("oninput", "return;");
		      ye = "function" === typeof ze.oninput;
		    }
		    xe = ye;
		  } else xe = !1;
		  we = xe && (!document.documentMode || 9 < document.documentMode);
		}
		function Ae() {
		  pe && (pe.detachEvent("onpropertychange", Be), qe = pe = null);
		}
		function Be(a) {
		  if ("value" === a.propertyName && te(qe)) {
		    var b = [];
		    ne(b, qe, a, xb(a));
		    Jb(re, b);
		  }
		}
		function Ce(a, b, c) {
		  "focusin" === a ? (Ae(), pe = b, qe = c, pe.attachEvent("onpropertychange", Be)) : "focusout" === a && Ae();
		}
		function De(a) {
		  if ("selectionchange" === a || "keyup" === a || "keydown" === a) return te(qe);
		}
		function Ee(a, b) {
		  if ("click" === a) return te(b);
		}
		function Fe(a, b) {
		  if ("input" === a || "change" === a) return te(b);
		}
		function Ge(a, b) {
		  return a === b && (0 !== a || 1 / a === 1 / b) || a !== a && b !== b;
		}
		var He = "function" === typeof Object.is ? Object.is : Ge;
		function Ie(a, b) {
		  if (He(a, b)) return !0;
		  if ("object" !== typeof a || null === a || "object" !== typeof b || null === b) return !1;
		  var c = Object.keys(a),
		    d = Object.keys(b);
		  if (c.length !== d.length) return !1;
		  for (d = 0; d < c.length; d++) {
		    var e = c[d];
		    if (!ja.call(b, e) || !He(a[e], b[e])) return !1;
		  }
		  return !0;
		}
		function Je(a) {
		  for (; a && a.firstChild;) a = a.firstChild;
		  return a;
		}
		function Ke(a, b) {
		  var c = Je(a);
		  a = 0;
		  for (var d; c;) {
		    if (3 === c.nodeType) {
		      d = a + c.textContent.length;
		      if (a <= b && d >= b) return {
		        node: c,
		        offset: b - a
		      };
		      a = d;
		    }
		    a: {
		      for (; c;) {
		        if (c.nextSibling) {
		          c = c.nextSibling;
		          break a;
		        }
		        c = c.parentNode;
		      }
		      c = void 0;
		    }
		    c = Je(c);
		  }
		}
		function Le(a, b) {
		  return a && b ? a === b ? !0 : a && 3 === a.nodeType ? !1 : b && 3 === b.nodeType ? Le(a, b.parentNode) : "contains" in a ? a.contains(b) : a.compareDocumentPosition ? !!(a.compareDocumentPosition(b) & 16) : !1 : !1;
		}
		function Me() {
		  for (var a = window, b = Xa(); b instanceof a.HTMLIFrameElement;) {
		    try {
		      var c = "string" === typeof b.contentWindow.location.href;
		    } catch (d) {
		      c = !1;
		    }
		    if (c) a = b.contentWindow;else break;
		    b = Xa(a.document);
		  }
		  return b;
		}
		function Ne(a) {
		  var b = a && a.nodeName && a.nodeName.toLowerCase();
		  return b && ("input" === b && ("text" === a.type || "search" === a.type || "tel" === a.type || "url" === a.type || "password" === a.type) || "textarea" === b || "true" === a.contentEditable);
		}
		function Oe(a) {
		  var b = Me(),
		    c = a.focusedElem,
		    d = a.selectionRange;
		  if (b !== c && c && c.ownerDocument && Le(c.ownerDocument.documentElement, c)) {
		    if (null !== d && Ne(c)) if (b = d.start, a = d.end, void 0 === a && (a = b), "selectionStart" in c) c.selectionStart = b, c.selectionEnd = Math.min(a, c.value.length);else if (a = (b = c.ownerDocument || document) && b.defaultView || window, a.getSelection) {
		      a = a.getSelection();
		      var e = c.textContent.length,
		        f = Math.min(d.start, e);
		      d = void 0 === d.end ? f : Math.min(d.end, e);
		      !a.extend && f > d && (e = d, d = f, f = e);
		      e = Ke(c, f);
		      var g = Ke(c, d);
		      e && g && (1 !== a.rangeCount || a.anchorNode !== e.node || a.anchorOffset !== e.offset || a.focusNode !== g.node || a.focusOffset !== g.offset) && (b = b.createRange(), b.setStart(e.node, e.offset), a.removeAllRanges(), f > d ? (a.addRange(b), a.extend(g.node, g.offset)) : (b.setEnd(g.node, g.offset), a.addRange(b)));
		    }
		    b = [];
		    for (a = c; a = a.parentNode;) 1 === a.nodeType && b.push({
		      element: a,
		      left: a.scrollLeft,
		      top: a.scrollTop
		    });
		    "function" === typeof c.focus && c.focus();
		    for (c = 0; c < b.length; c++) a = b[c], a.element.scrollLeft = a.left, a.element.scrollTop = a.top;
		  }
		}
		var Pe = ia && "documentMode" in document && 11 >= document.documentMode,
		  Qe = null,
		  Re = null,
		  Se = null,
		  Te = !1;
		function Ue(a, b, c) {
		  var d = c.window === c ? c.document : 9 === c.nodeType ? c : c.ownerDocument;
		  Te || null == Qe || Qe !== Xa(d) || (d = Qe, "selectionStart" in d && Ne(d) ? d = {
		    start: d.selectionStart,
		    end: d.selectionEnd
		  } : (d = (d.ownerDocument && d.ownerDocument.defaultView || window).getSelection(), d = {
		    anchorNode: d.anchorNode,
		    anchorOffset: d.anchorOffset,
		    focusNode: d.focusNode,
		    focusOffset: d.focusOffset
		  }), Se && Ie(Se, d) || (Se = d, d = oe(Re, "onSelect"), 0 < d.length && (b = new td("onSelect", "select", null, b, c), a.push({
		    event: b,
		    listeners: d
		  }), b.target = Qe)));
		}
		function Ve(a, b) {
		  var c = {};
		  c[a.toLowerCase()] = b.toLowerCase();
		  c["Webkit" + a] = "webkit" + b;
		  c["Moz" + a] = "moz" + b;
		  return c;
		}
		var We = {
		    animationend: Ve("Animation", "AnimationEnd"),
		    animationiteration: Ve("Animation", "AnimationIteration"),
		    animationstart: Ve("Animation", "AnimationStart"),
		    transitionend: Ve("Transition", "TransitionEnd")
		  },
		  Xe = {},
		  Ye = {};
		ia && (Ye = document.createElement("div").style, "AnimationEvent" in window || (delete We.animationend.animation, delete We.animationiteration.animation, delete We.animationstart.animation), "TransitionEvent" in window || delete We.transitionend.transition);
		function Ze(a) {
		  if (Xe[a]) return Xe[a];
		  if (!We[a]) return a;
		  var b = We[a],
		    c;
		  for (c in b) if (b.hasOwnProperty(c) && c in Ye) return Xe[a] = b[c];
		  return a;
		}
		var $e = Ze("animationend"),
		  af = Ze("animationiteration"),
		  bf = Ze("animationstart"),
		  cf = Ze("transitionend"),
		  df = new Map(),
		  ef = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
		function ff(a, b) {
		  df.set(a, b);
		  fa(b, [a]);
		}
		for (var gf = 0; gf < ef.length; gf++) {
		  var hf = ef[gf],
		    jf = hf.toLowerCase(),
		    kf = hf[0].toUpperCase() + hf.slice(1);
		  ff(jf, "on" + kf);
		}
		ff($e, "onAnimationEnd");
		ff(af, "onAnimationIteration");
		ff(bf, "onAnimationStart");
		ff("dblclick", "onDoubleClick");
		ff("focusin", "onFocus");
		ff("focusout", "onBlur");
		ff(cf, "onTransitionEnd");
		ha("onMouseEnter", ["mouseout", "mouseover"]);
		ha("onMouseLeave", ["mouseout", "mouseover"]);
		ha("onPointerEnter", ["pointerout", "pointerover"]);
		ha("onPointerLeave", ["pointerout", "pointerover"]);
		fa("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
		fa("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
		fa("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
		fa("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
		fa("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
		fa("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
		var lf = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),
		  mf = new Set("cancel close invalid load scroll toggle".split(" ").concat(lf));
		function nf(a, b, c) {
		  var d = a.type || "unknown-event";
		  a.currentTarget = c;
		  Ub(d, b, void 0, a);
		  a.currentTarget = null;
		}
		function se(a, b) {
		  b = 0 !== (b & 4);
		  for (var c = 0; c < a.length; c++) {
		    var d = a[c],
		      e = d.event;
		    d = d.listeners;
		    a: {
		      var f = void 0;
		      if (b) for (var g = d.length - 1; 0 <= g; g--) {
		        var h = d[g],
		          k = h.instance,
		          l = h.currentTarget;
		        h = h.listener;
		        if (k !== f && e.isPropagationStopped()) break a;
		        nf(e, h, l);
		        f = k;
		      } else for (g = 0; g < d.length; g++) {
		        h = d[g];
		        k = h.instance;
		        l = h.currentTarget;
		        h = h.listener;
		        if (k !== f && e.isPropagationStopped()) break a;
		        nf(e, h, l);
		        f = k;
		      }
		    }
		  }
		  if (Qb) throw a = Rb, Qb = !1, Rb = null, a;
		}
		function D(a, b) {
		  var c = b[of];
		  void 0 === c && (c = b[of] = new Set());
		  var d = a + "__bubble";
		  c.has(d) || (pf(b, a, 2, !1), c.add(d));
		}
		function qf(a, b, c) {
		  var d = 0;
		  b && (d |= 4);
		  pf(c, a, d, b);
		}
		var rf = "_reactListening" + Math.random().toString(36).slice(2);
		function sf(a) {
		  if (!a[rf]) {
		    a[rf] = !0;
		    da.forEach(function (b) {
		      "selectionchange" !== b && (mf.has(b) || qf(b, !1, a), qf(b, !0, a));
		    });
		    var b = 9 === a.nodeType ? a : a.ownerDocument;
		    null === b || b[rf] || (b[rf] = !0, qf("selectionchange", !1, b));
		  }
		}
		function pf(a, b, c, d) {
		  switch (jd(b)) {
		    case 1:
		      var e = ed;
		      break;
		    case 4:
		      e = gd;
		      break;
		    default:
		      e = fd;
		  }
		  c = e.bind(null, b, c, a);
		  e = void 0;
		  !Lb || "touchstart" !== b && "touchmove" !== b && "wheel" !== b || (e = !0);
		  d ? void 0 !== e ? a.addEventListener(b, c, {
		    capture: !0,
		    passive: e
		  }) : a.addEventListener(b, c, !0) : void 0 !== e ? a.addEventListener(b, c, {
		    passive: e
		  }) : a.addEventListener(b, c, !1);
		}
		function hd(a, b, c, d, e) {
		  var f = d;
		  if (0 === (b & 1) && 0 === (b & 2) && null !== d) a: for (;;) {
		    if (null === d) return;
		    var g = d.tag;
		    if (3 === g || 4 === g) {
		      var h = d.stateNode.containerInfo;
		      if (h === e || 8 === h.nodeType && h.parentNode === e) break;
		      if (4 === g) for (g = d.return; null !== g;) {
		        var k = g.tag;
		        if (3 === k || 4 === k) if (k = g.stateNode.containerInfo, k === e || 8 === k.nodeType && k.parentNode === e) return;
		        g = g.return;
		      }
		      for (; null !== h;) {
		        g = Wc(h);
		        if (null === g) return;
		        k = g.tag;
		        if (5 === k || 6 === k) {
		          d = f = g;
		          continue a;
		        }
		        h = h.parentNode;
		      }
		    }
		    d = d.return;
		  }
		  Jb(function () {
		    var d = f,
		      e = xb(c),
		      g = [];
		    a: {
		      var h = df.get(a);
		      if (void 0 !== h) {
		        var k = td,
		          n = a;
		        switch (a) {
		          case "keypress":
		            if (0 === od(c)) break a;
		          case "keydown":
		          case "keyup":
		            k = Rd;
		            break;
		          case "focusin":
		            n = "focus";
		            k = Fd;
		            break;
		          case "focusout":
		            n = "blur";
		            k = Fd;
		            break;
		          case "beforeblur":
		          case "afterblur":
		            k = Fd;
		            break;
		          case "click":
		            if (2 === c.button) break a;
		          case "auxclick":
		          case "dblclick":
		          case "mousedown":
		          case "mousemove":
		          case "mouseup":
		          case "mouseout":
		          case "mouseover":
		          case "contextmenu":
		            k = Bd;
		            break;
		          case "drag":
		          case "dragend":
		          case "dragenter":
		          case "dragexit":
		          case "dragleave":
		          case "dragover":
		          case "dragstart":
		          case "drop":
		            k = Dd;
		            break;
		          case "touchcancel":
		          case "touchend":
		          case "touchmove":
		          case "touchstart":
		            k = Vd;
		            break;
		          case $e:
		          case af:
		          case bf:
		            k = Hd;
		            break;
		          case cf:
		            k = Xd;
		            break;
		          case "scroll":
		            k = vd;
		            break;
		          case "wheel":
		            k = Zd;
		            break;
		          case "copy":
		          case "cut":
		          case "paste":
		            k = Jd;
		            break;
		          case "gotpointercapture":
		          case "lostpointercapture":
		          case "pointercancel":
		          case "pointerdown":
		          case "pointermove":
		          case "pointerout":
		          case "pointerover":
		          case "pointerup":
		            k = Td;
		        }
		        var t = 0 !== (b & 4),
		          J = !t && "scroll" === a,
		          x = t ? null !== h ? h + "Capture" : null : h;
		        t = [];
		        for (var w = d, u; null !== w;) {
		          u = w;
		          var F = u.stateNode;
		          5 === u.tag && null !== F && (u = F, null !== x && (F = Kb(w, x), null != F && t.push(tf(w, F, u))));
		          if (J) break;
		          w = w.return;
		        }
		        0 < t.length && (h = new k(h, n, null, c, e), g.push({
		          event: h,
		          listeners: t
		        }));
		      }
		    }
		    if (0 === (b & 7)) {
		      a: {
		        h = "mouseover" === a || "pointerover" === a;
		        k = "mouseout" === a || "pointerout" === a;
		        if (h && c !== wb && (n = c.relatedTarget || c.fromElement) && (Wc(n) || n[uf])) break a;
		        if (k || h) {
		          h = e.window === e ? e : (h = e.ownerDocument) ? h.defaultView || h.parentWindow : window;
		          if (k) {
		            if (n = c.relatedTarget || c.toElement, k = d, n = n ? Wc(n) : null, null !== n && (J = Vb(n), n !== J || 5 !== n.tag && 6 !== n.tag)) n = null;
		          } else k = null, n = d;
		          if (k !== n) {
		            t = Bd;
		            F = "onMouseLeave";
		            x = "onMouseEnter";
		            w = "mouse";
		            if ("pointerout" === a || "pointerover" === a) t = Td, F = "onPointerLeave", x = "onPointerEnter", w = "pointer";
		            J = null == k ? h : ue(k);
		            u = null == n ? h : ue(n);
		            h = new t(F, w + "leave", k, c, e);
		            h.target = J;
		            h.relatedTarget = u;
		            F = null;
		            Wc(e) === d && (t = new t(x, w + "enter", n, c, e), t.target = u, t.relatedTarget = J, F = t);
		            J = F;
		            if (k && n) b: {
		              t = k;
		              x = n;
		              w = 0;
		              for (u = t; u; u = vf(u)) w++;
		              u = 0;
		              for (F = x; F; F = vf(F)) u++;
		              for (; 0 < w - u;) t = vf(t), w--;
		              for (; 0 < u - w;) x = vf(x), u--;
		              for (; w--;) {
		                if (t === x || null !== x && t === x.alternate) break b;
		                t = vf(t);
		                x = vf(x);
		              }
		              t = null;
		            } else t = null;
		            null !== k && wf(g, h, k, t, !1);
		            null !== n && null !== J && wf(g, J, n, t, !0);
		          }
		        }
		      }
		      a: {
		        h = d ? ue(d) : window;
		        k = h.nodeName && h.nodeName.toLowerCase();
		        if ("select" === k || "input" === k && "file" === h.type) var na = ve;else if (me(h)) {
		          if (we) na = Fe;else {
		            na = De;
		            var xa = Ce;
		          }
		        } else (k = h.nodeName) && "input" === k.toLowerCase() && ("checkbox" === h.type || "radio" === h.type) && (na = Ee);
		        if (na && (na = na(a, d))) {
		          ne(g, na, c, e);
		          break a;
		        }
		        xa && xa(a, h, d);
		        "focusout" === a && (xa = h._wrapperState) && xa.controlled && "number" === h.type && cb(h, "number", h.value);
		      }
		      xa = d ? ue(d) : window;
		      switch (a) {
		        case "focusin":
		          if (me(xa) || "true" === xa.contentEditable) Qe = xa, Re = d, Se = null;
		          break;
		        case "focusout":
		          Se = Re = Qe = null;
		          break;
		        case "mousedown":
		          Te = !0;
		          break;
		        case "contextmenu":
		        case "mouseup":
		        case "dragend":
		          Te = !1;
		          Ue(g, c, e);
		          break;
		        case "selectionchange":
		          if (Pe) break;
		        case "keydown":
		        case "keyup":
		          Ue(g, c, e);
		      }
		      var $a;
		      if (ae) b: {
		        switch (a) {
		          case "compositionstart":
		            var ba = "onCompositionStart";
		            break b;
		          case "compositionend":
		            ba = "onCompositionEnd";
		            break b;
		          case "compositionupdate":
		            ba = "onCompositionUpdate";
		            break b;
		        }
		        ba = void 0;
		      } else ie ? ge(a, c) && (ba = "onCompositionEnd") : "keydown" === a && 229 === c.keyCode && (ba = "onCompositionStart");
		      ba && (de && "ko" !== c.locale && (ie || "onCompositionStart" !== ba ? "onCompositionEnd" === ba && ie && ($a = nd()) : (kd = e, ld = "value" in kd ? kd.value : kd.textContent, ie = !0)), xa = oe(d, ba), 0 < xa.length && (ba = new Ld(ba, a, null, c, e), g.push({
		        event: ba,
		        listeners: xa
		      }), $a ? ba.data = $a : ($a = he(c), null !== $a && (ba.data = $a))));
		      if ($a = ce ? je(a, c) : ke(a, c)) d = oe(d, "onBeforeInput"), 0 < d.length && (e = new Ld("onBeforeInput", "beforeinput", null, c, e), g.push({
		        event: e,
		        listeners: d
		      }), e.data = $a);
		    }
		    se(g, b);
		  });
		}
		function tf(a, b, c) {
		  return {
		    instance: a,
		    listener: b,
		    currentTarget: c
		  };
		}
		function oe(a, b) {
		  for (var c = b + "Capture", d = []; null !== a;) {
		    var e = a,
		      f = e.stateNode;
		    5 === e.tag && null !== f && (e = f, f = Kb(a, c), null != f && d.unshift(tf(a, f, e)), f = Kb(a, b), null != f && d.push(tf(a, f, e)));
		    a = a.return;
		  }
		  return d;
		}
		function vf(a) {
		  if (null === a) return null;
		  do a = a.return; while (a && 5 !== a.tag);
		  return a ? a : null;
		}
		function wf(a, b, c, d, e) {
		  for (var f = b._reactName, g = []; null !== c && c !== d;) {
		    var h = c,
		      k = h.alternate,
		      l = h.stateNode;
		    if (null !== k && k === d) break;
		    5 === h.tag && null !== l && (h = l, e ? (k = Kb(c, f), null != k && g.unshift(tf(c, k, h))) : e || (k = Kb(c, f), null != k && g.push(tf(c, k, h))));
		    c = c.return;
		  }
		  0 !== g.length && a.push({
		    event: b,
		    listeners: g
		  });
		}
		var xf = /\r\n?/g,
		  yf = /\u0000|\uFFFD/g;
		function zf(a) {
		  return ("string" === typeof a ? a : "" + a).replace(xf, "\n").replace(yf, "");
		}
		function Af(a, b, c) {
		  b = zf(b);
		  if (zf(a) !== b && c) throw Error(p(425));
		}
		function Bf() {}
		var Cf = null,
		  Df = null;
		function Ef(a, b) {
		  return "textarea" === a || "noscript" === a || "string" === typeof b.children || "number" === typeof b.children || "object" === typeof b.dangerouslySetInnerHTML && null !== b.dangerouslySetInnerHTML && null != b.dangerouslySetInnerHTML.__html;
		}
		var Ff = "function" === typeof setTimeout ? setTimeout : void 0,
		  Gf = "function" === typeof clearTimeout ? clearTimeout : void 0,
		  Hf = "function" === typeof Promise ? Promise : void 0,
		  Jf = "function" === typeof queueMicrotask ? queueMicrotask : "undefined" !== typeof Hf ? function (a) {
		    return Hf.resolve(null).then(a).catch(If);
		  } : Ff;
		function If(a) {
		  setTimeout(function () {
		    throw a;
		  });
		}
		function Kf(a, b) {
		  var c = b,
		    d = 0;
		  do {
		    var e = c.nextSibling;
		    a.removeChild(c);
		    if (e && 8 === e.nodeType) if (c = e.data, "/$" === c) {
		      if (0 === d) {
		        a.removeChild(e);
		        bd(b);
		        return;
		      }
		      d--;
		    } else "$" !== c && "$?" !== c && "$!" !== c || d++;
		    c = e;
		  } while (c);
		  bd(b);
		}
		function Lf(a) {
		  for (; null != a; a = a.nextSibling) {
		    var b = a.nodeType;
		    if (1 === b || 3 === b) break;
		    if (8 === b) {
		      b = a.data;
		      if ("$" === b || "$!" === b || "$?" === b) break;
		      if ("/$" === b) return null;
		    }
		  }
		  return a;
		}
		function Mf(a) {
		  a = a.previousSibling;
		  for (var b = 0; a;) {
		    if (8 === a.nodeType) {
		      var c = a.data;
		      if ("$" === c || "$!" === c || "$?" === c) {
		        if (0 === b) return a;
		        b--;
		      } else "/$" === c && b++;
		    }
		    a = a.previousSibling;
		  }
		  return null;
		}
		var Nf = Math.random().toString(36).slice(2),
		  Of = "__reactFiber$" + Nf,
		  Pf = "__reactProps$" + Nf,
		  uf = "__reactContainer$" + Nf,
		  of = "__reactEvents$" + Nf,
		  Qf = "__reactListeners$" + Nf,
		  Rf = "__reactHandles$" + Nf;
		function Wc(a) {
		  var b = a[Of];
		  if (b) return b;
		  for (var c = a.parentNode; c;) {
		    if (b = c[uf] || c[Of]) {
		      c = b.alternate;
		      if (null !== b.child || null !== c && null !== c.child) for (a = Mf(a); null !== a;) {
		        if (c = a[Of]) return c;
		        a = Mf(a);
		      }
		      return b;
		    }
		    a = c;
		    c = a.parentNode;
		  }
		  return null;
		}
		function Cb(a) {
		  a = a[Of] || a[uf];
		  return !a || 5 !== a.tag && 6 !== a.tag && 13 !== a.tag && 3 !== a.tag ? null : a;
		}
		function ue(a) {
		  if (5 === a.tag || 6 === a.tag) return a.stateNode;
		  throw Error(p(33));
		}
		function Db(a) {
		  return a[Pf] || null;
		}
		var Sf = [],
		  Tf = -1;
		function Uf(a) {
		  return {
		    current: a
		  };
		}
		function E(a) {
		  0 > Tf || (a.current = Sf[Tf], Sf[Tf] = null, Tf--);
		}
		function G(a, b) {
		  Tf++;
		  Sf[Tf] = a.current;
		  a.current = b;
		}
		var Vf = {},
		  H = Uf(Vf),
		  Wf = Uf(!1),
		  Xf = Vf;
		function Yf(a, b) {
		  var c = a.type.contextTypes;
		  if (!c) return Vf;
		  var d = a.stateNode;
		  if (d && d.__reactInternalMemoizedUnmaskedChildContext === b) return d.__reactInternalMemoizedMaskedChildContext;
		  var e = {},
		    f;
		  for (f in c) e[f] = b[f];
		  d && (a = a.stateNode, a.__reactInternalMemoizedUnmaskedChildContext = b, a.__reactInternalMemoizedMaskedChildContext = e);
		  return e;
		}
		function Zf(a) {
		  a = a.childContextTypes;
		  return null !== a && void 0 !== a;
		}
		function $f() {
		  E(Wf);
		  E(H);
		}
		function ag(a, b, c) {
		  if (H.current !== Vf) throw Error(p(168));
		  G(H, b);
		  G(Wf, c);
		}
		function bg(a, b, c) {
		  var d = a.stateNode;
		  b = b.childContextTypes;
		  if ("function" !== typeof d.getChildContext) return c;
		  d = d.getChildContext();
		  for (var e in d) if (!(e in b)) throw Error(p(108, Ra(a) || "Unknown", e));
		  return A({}, c, d);
		}
		function cg(a) {
		  a = (a = a.stateNode) && a.__reactInternalMemoizedMergedChildContext || Vf;
		  Xf = H.current;
		  G(H, a);
		  G(Wf, Wf.current);
		  return !0;
		}
		function dg(a, b, c) {
		  var d = a.stateNode;
		  if (!d) throw Error(p(169));
		  c ? (a = bg(a, b, Xf), d.__reactInternalMemoizedMergedChildContext = a, E(Wf), E(H), G(H, a)) : E(Wf);
		  G(Wf, c);
		}
		var eg = null,
		  fg = !1,
		  gg = !1;
		function hg(a) {
		  null === eg ? eg = [a] : eg.push(a);
		}
		function ig(a) {
		  fg = !0;
		  hg(a);
		}
		function jg() {
		  if (!gg && null !== eg) {
		    gg = !0;
		    var a = 0,
		      b = C;
		    try {
		      var c = eg;
		      for (C = 1; a < c.length; a++) {
		        var d = c[a];
		        do d = d(!0); while (null !== d);
		      }
		      eg = null;
		      fg = !1;
		    } catch (e) {
		      throw null !== eg && (eg = eg.slice(a + 1)), ac(fc, jg), e;
		    } finally {
		      C = b, gg = !1;
		    }
		  }
		  return null;
		}
		var kg = [],
		  lg = 0,
		  mg = null,
		  ng = 0,
		  og = [],
		  pg = 0,
		  qg = null,
		  rg = 1,
		  sg = "";
		function tg(a, b) {
		  kg[lg++] = ng;
		  kg[lg++] = mg;
		  mg = a;
		  ng = b;
		}
		function ug(a, b, c) {
		  og[pg++] = rg;
		  og[pg++] = sg;
		  og[pg++] = qg;
		  qg = a;
		  var d = rg;
		  a = sg;
		  var e = 32 - oc(d) - 1;
		  d &= ~(1 << e);
		  c += 1;
		  var f = 32 - oc(b) + e;
		  if (30 < f) {
		    var g = e - e % 5;
		    f = (d & (1 << g) - 1).toString(32);
		    d >>= g;
		    e -= g;
		    rg = 1 << 32 - oc(b) + e | c << e | d;
		    sg = f + a;
		  } else rg = 1 << f | c << e | d, sg = a;
		}
		function vg(a) {
		  null !== a.return && (tg(a, 1), ug(a, 1, 0));
		}
		function wg(a) {
		  for (; a === mg;) mg = kg[--lg], kg[lg] = null, ng = kg[--lg], kg[lg] = null;
		  for (; a === qg;) qg = og[--pg], og[pg] = null, sg = og[--pg], og[pg] = null, rg = og[--pg], og[pg] = null;
		}
		var xg = null,
		  yg = null,
		  I = !1,
		  zg = null;
		function Ag(a, b) {
		  var c = Bg(5, null, null, 0);
		  c.elementType = "DELETED";
		  c.stateNode = b;
		  c.return = a;
		  b = a.deletions;
		  null === b ? (a.deletions = [c], a.flags |= 16) : b.push(c);
		}
		function Cg(a, b) {
		  switch (a.tag) {
		    case 5:
		      var c = a.type;
		      b = 1 !== b.nodeType || c.toLowerCase() !== b.nodeName.toLowerCase() ? null : b;
		      return null !== b ? (a.stateNode = b, xg = a, yg = Lf(b.firstChild), !0) : !1;
		    case 6:
		      return b = "" === a.pendingProps || 3 !== b.nodeType ? null : b, null !== b ? (a.stateNode = b, xg = a, yg = null, !0) : !1;
		    case 13:
		      return b = 8 !== b.nodeType ? null : b, null !== b ? (c = null !== qg ? {
		        id: rg,
		        overflow: sg
		      } : null, a.memoizedState = {
		        dehydrated: b,
		        treeContext: c,
		        retryLane: 1073741824
		      }, c = Bg(18, null, null, 0), c.stateNode = b, c.return = a, a.child = c, xg = a, yg = null, !0) : !1;
		    default:
		      return !1;
		  }
		}
		function Dg(a) {
		  return 0 !== (a.mode & 1) && 0 === (a.flags & 128);
		}
		function Eg(a) {
		  if (I) {
		    var b = yg;
		    if (b) {
		      var c = b;
		      if (!Cg(a, b)) {
		        if (Dg(a)) throw Error(p(418));
		        b = Lf(c.nextSibling);
		        var d = xg;
		        b && Cg(a, b) ? Ag(d, c) : (a.flags = a.flags & -4097 | 2, I = !1, xg = a);
		      }
		    } else {
		      if (Dg(a)) throw Error(p(418));
		      a.flags = a.flags & -4097 | 2;
		      I = !1;
		      xg = a;
		    }
		  }
		}
		function Fg(a) {
		  for (a = a.return; null !== a && 5 !== a.tag && 3 !== a.tag && 13 !== a.tag;) a = a.return;
		  xg = a;
		}
		function Gg(a) {
		  if (a !== xg) return !1;
		  if (!I) return Fg(a), I = !0, !1;
		  var b;
		  (b = 3 !== a.tag) && !(b = 5 !== a.tag) && (b = a.type, b = "head" !== b && "body" !== b && !Ef(a.type, a.memoizedProps));
		  if (b && (b = yg)) {
		    if (Dg(a)) throw Hg(), Error(p(418));
		    for (; b;) Ag(a, b), b = Lf(b.nextSibling);
		  }
		  Fg(a);
		  if (13 === a.tag) {
		    a = a.memoizedState;
		    a = null !== a ? a.dehydrated : null;
		    if (!a) throw Error(p(317));
		    a: {
		      a = a.nextSibling;
		      for (b = 0; a;) {
		        if (8 === a.nodeType) {
		          var c = a.data;
		          if ("/$" === c) {
		            if (0 === b) {
		              yg = Lf(a.nextSibling);
		              break a;
		            }
		            b--;
		          } else "$" !== c && "$!" !== c && "$?" !== c || b++;
		        }
		        a = a.nextSibling;
		      }
		      yg = null;
		    }
		  } else yg = xg ? Lf(a.stateNode.nextSibling) : null;
		  return !0;
		}
		function Hg() {
		  for (var a = yg; a;) a = Lf(a.nextSibling);
		}
		function Ig() {
		  yg = xg = null;
		  I = !1;
		}
		function Jg(a) {
		  null === zg ? zg = [a] : zg.push(a);
		}
		var Kg = ua.ReactCurrentBatchConfig;
		function Lg(a, b) {
		  if (a && a.defaultProps) {
		    b = A({}, b);
		    a = a.defaultProps;
		    for (var c in a) void 0 === b[c] && (b[c] = a[c]);
		    return b;
		  }
		  return b;
		}
		var Mg = Uf(null),
		  Ng = null,
		  Og = null,
		  Pg = null;
		function Qg() {
		  Pg = Og = Ng = null;
		}
		function Rg(a) {
		  var b = Mg.current;
		  E(Mg);
		  a._currentValue = b;
		}
		function Sg(a, b, c) {
		  for (; null !== a;) {
		    var d = a.alternate;
		    (a.childLanes & b) !== b ? (a.childLanes |= b, null !== d && (d.childLanes |= b)) : null !== d && (d.childLanes & b) !== b && (d.childLanes |= b);
		    if (a === c) break;
		    a = a.return;
		  }
		}
		function Tg(a, b) {
		  Ng = a;
		  Pg = Og = null;
		  a = a.dependencies;
		  null !== a && null !== a.firstContext && (0 !== (a.lanes & b) && (Ug = !0), a.firstContext = null);
		}
		function Vg(a) {
		  var b = a._currentValue;
		  if (Pg !== a) if (a = {
		    context: a,
		    memoizedValue: b,
		    next: null
		  }, null === Og) {
		    if (null === Ng) throw Error(p(308));
		    Og = a;
		    Ng.dependencies = {
		      lanes: 0,
		      firstContext: a
		    };
		  } else Og = Og.next = a;
		  return b;
		}
		var Wg = null;
		function Xg(a) {
		  null === Wg ? Wg = [a] : Wg.push(a);
		}
		function Yg(a, b, c, d) {
		  var e = b.interleaved;
		  null === e ? (c.next = c, Xg(b)) : (c.next = e.next, e.next = c);
		  b.interleaved = c;
		  return Zg(a, d);
		}
		function Zg(a, b) {
		  a.lanes |= b;
		  var c = a.alternate;
		  null !== c && (c.lanes |= b);
		  c = a;
		  for (a = a.return; null !== a;) a.childLanes |= b, c = a.alternate, null !== c && (c.childLanes |= b), c = a, a = a.return;
		  return 3 === c.tag ? c.stateNode : null;
		}
		var $g = !1;
		function ah(a) {
		  a.updateQueue = {
		    baseState: a.memoizedState,
		    firstBaseUpdate: null,
		    lastBaseUpdate: null,
		    shared: {
		      pending: null,
		      interleaved: null,
		      lanes: 0
		    },
		    effects: null
		  };
		}
		function bh(a, b) {
		  a = a.updateQueue;
		  b.updateQueue === a && (b.updateQueue = {
		    baseState: a.baseState,
		    firstBaseUpdate: a.firstBaseUpdate,
		    lastBaseUpdate: a.lastBaseUpdate,
		    shared: a.shared,
		    effects: a.effects
		  });
		}
		function ch(a, b) {
		  return {
		    eventTime: a,
		    lane: b,
		    tag: 0,
		    payload: null,
		    callback: null,
		    next: null
		  };
		}
		function dh(a, b, c) {
		  var d = a.updateQueue;
		  if (null === d) return null;
		  d = d.shared;
		  if (0 !== (K & 2)) {
		    var e = d.pending;
		    null === e ? b.next = b : (b.next = e.next, e.next = b);
		    d.pending = b;
		    return Zg(a, c);
		  }
		  e = d.interleaved;
		  null === e ? (b.next = b, Xg(d)) : (b.next = e.next, e.next = b);
		  d.interleaved = b;
		  return Zg(a, c);
		}
		function eh(a, b, c) {
		  b = b.updateQueue;
		  if (null !== b && (b = b.shared, 0 !== (c & 4194240))) {
		    var d = b.lanes;
		    d &= a.pendingLanes;
		    c |= d;
		    b.lanes = c;
		    Cc(a, c);
		  }
		}
		function fh(a, b) {
		  var c = a.updateQueue,
		    d = a.alternate;
		  if (null !== d && (d = d.updateQueue, c === d)) {
		    var e = null,
		      f = null;
		    c = c.firstBaseUpdate;
		    if (null !== c) {
		      do {
		        var g = {
		          eventTime: c.eventTime,
		          lane: c.lane,
		          tag: c.tag,
		          payload: c.payload,
		          callback: c.callback,
		          next: null
		        };
		        null === f ? e = f = g : f = f.next = g;
		        c = c.next;
		      } while (null !== c);
		      null === f ? e = f = b : f = f.next = b;
		    } else e = f = b;
		    c = {
		      baseState: d.baseState,
		      firstBaseUpdate: e,
		      lastBaseUpdate: f,
		      shared: d.shared,
		      effects: d.effects
		    };
		    a.updateQueue = c;
		    return;
		  }
		  a = c.lastBaseUpdate;
		  null === a ? c.firstBaseUpdate = b : a.next = b;
		  c.lastBaseUpdate = b;
		}
		function gh(a, b, c, d) {
		  var e = a.updateQueue;
		  $g = !1;
		  var f = e.firstBaseUpdate,
		    g = e.lastBaseUpdate,
		    h = e.shared.pending;
		  if (null !== h) {
		    e.shared.pending = null;
		    var k = h,
		      l = k.next;
		    k.next = null;
		    null === g ? f = l : g.next = l;
		    g = k;
		    var m = a.alternate;
		    null !== m && (m = m.updateQueue, h = m.lastBaseUpdate, h !== g && (null === h ? m.firstBaseUpdate = l : h.next = l, m.lastBaseUpdate = k));
		  }
		  if (null !== f) {
		    var q = e.baseState;
		    g = 0;
		    m = l = k = null;
		    h = f;
		    do {
		      var r = h.lane,
		        y = h.eventTime;
		      if ((d & r) === r) {
		        null !== m && (m = m.next = {
		          eventTime: y,
		          lane: 0,
		          tag: h.tag,
		          payload: h.payload,
		          callback: h.callback,
		          next: null
		        });
		        a: {
		          var n = a,
		            t = h;
		          r = b;
		          y = c;
		          switch (t.tag) {
		            case 1:
		              n = t.payload;
		              if ("function" === typeof n) {
		                q = n.call(y, q, r);
		                break a;
		              }
		              q = n;
		              break a;
		            case 3:
		              n.flags = n.flags & -65537 | 128;
		            case 0:
		              n = t.payload;
		              r = "function" === typeof n ? n.call(y, q, r) : n;
		              if (null === r || void 0 === r) break a;
		              q = A({}, q, r);
		              break a;
		            case 2:
		              $g = !0;
		          }
		        }
		        null !== h.callback && 0 !== h.lane && (a.flags |= 64, r = e.effects, null === r ? e.effects = [h] : r.push(h));
		      } else y = {
		        eventTime: y,
		        lane: r,
		        tag: h.tag,
		        payload: h.payload,
		        callback: h.callback,
		        next: null
		      }, null === m ? (l = m = y, k = q) : m = m.next = y, g |= r;
		      h = h.next;
		      if (null === h) if (h = e.shared.pending, null === h) break;else r = h, h = r.next, r.next = null, e.lastBaseUpdate = r, e.shared.pending = null;
		    } while (1);
		    null === m && (k = q);
		    e.baseState = k;
		    e.firstBaseUpdate = l;
		    e.lastBaseUpdate = m;
		    b = e.shared.interleaved;
		    if (null !== b) {
		      e = b;
		      do g |= e.lane, e = e.next; while (e !== b);
		    } else null === f && (e.shared.lanes = 0);
		    hh |= g;
		    a.lanes = g;
		    a.memoizedState = q;
		  }
		}
		function ih(a, b, c) {
		  a = b.effects;
		  b.effects = null;
		  if (null !== a) for (b = 0; b < a.length; b++) {
		    var d = a[b],
		      e = d.callback;
		    if (null !== e) {
		      d.callback = null;
		      d = c;
		      if ("function" !== typeof e) throw Error(p(191, e));
		      e.call(d);
		    }
		  }
		}
		var jh = new aa.Component().refs;
		function kh(a, b, c, d) {
		  b = a.memoizedState;
		  c = c(d, b);
		  c = null === c || void 0 === c ? b : A({}, b, c);
		  a.memoizedState = c;
		  0 === a.lanes && (a.updateQueue.baseState = c);
		}
		var nh = {
		  isMounted: function (a) {
		    return (a = a._reactInternals) ? Vb(a) === a : !1;
		  },
		  enqueueSetState: function (a, b, c) {
		    a = a._reactInternals;
		    var d = L(),
		      e = lh(a),
		      f = ch(d, e);
		    f.payload = b;
		    void 0 !== c && null !== c && (f.callback = c);
		    b = dh(a, f, e);
		    null !== b && (mh(b, a, e, d), eh(b, a, e));
		  },
		  enqueueReplaceState: function (a, b, c) {
		    a = a._reactInternals;
		    var d = L(),
		      e = lh(a),
		      f = ch(d, e);
		    f.tag = 1;
		    f.payload = b;
		    void 0 !== c && null !== c && (f.callback = c);
		    b = dh(a, f, e);
		    null !== b && (mh(b, a, e, d), eh(b, a, e));
		  },
		  enqueueForceUpdate: function (a, b) {
		    a = a._reactInternals;
		    var c = L(),
		      d = lh(a),
		      e = ch(c, d);
		    e.tag = 2;
		    void 0 !== b && null !== b && (e.callback = b);
		    b = dh(a, e, d);
		    null !== b && (mh(b, a, d, c), eh(b, a, d));
		  }
		};
		function oh(a, b, c, d, e, f, g) {
		  a = a.stateNode;
		  return "function" === typeof a.shouldComponentUpdate ? a.shouldComponentUpdate(d, f, g) : b.prototype && b.prototype.isPureReactComponent ? !Ie(c, d) || !Ie(e, f) : !0;
		}
		function ph(a, b, c) {
		  var d = !1,
		    e = Vf;
		  var f = b.contextType;
		  "object" === typeof f && null !== f ? f = Vg(f) : (e = Zf(b) ? Xf : H.current, d = b.contextTypes, f = (d = null !== d && void 0 !== d) ? Yf(a, e) : Vf);
		  b = new b(c, f);
		  a.memoizedState = null !== b.state && void 0 !== b.state ? b.state : null;
		  b.updater = nh;
		  a.stateNode = b;
		  b._reactInternals = a;
		  d && (a = a.stateNode, a.__reactInternalMemoizedUnmaskedChildContext = e, a.__reactInternalMemoizedMaskedChildContext = f);
		  return b;
		}
		function qh(a, b, c, d) {
		  a = b.state;
		  "function" === typeof b.componentWillReceiveProps && b.componentWillReceiveProps(c, d);
		  "function" === typeof b.UNSAFE_componentWillReceiveProps && b.UNSAFE_componentWillReceiveProps(c, d);
		  b.state !== a && nh.enqueueReplaceState(b, b.state, null);
		}
		function rh(a, b, c, d) {
		  var e = a.stateNode;
		  e.props = c;
		  e.state = a.memoizedState;
		  e.refs = jh;
		  ah(a);
		  var f = b.contextType;
		  "object" === typeof f && null !== f ? e.context = Vg(f) : (f = Zf(b) ? Xf : H.current, e.context = Yf(a, f));
		  e.state = a.memoizedState;
		  f = b.getDerivedStateFromProps;
		  "function" === typeof f && (kh(a, b, f, c), e.state = a.memoizedState);
		  "function" === typeof b.getDerivedStateFromProps || "function" === typeof e.getSnapshotBeforeUpdate || "function" !== typeof e.UNSAFE_componentWillMount && "function" !== typeof e.componentWillMount || (b = e.state, "function" === typeof e.componentWillMount && e.componentWillMount(), "function" === typeof e.UNSAFE_componentWillMount && e.UNSAFE_componentWillMount(), b !== e.state && nh.enqueueReplaceState(e, e.state, null), gh(a, c, e, d), e.state = a.memoizedState);
		  "function" === typeof e.componentDidMount && (a.flags |= 4194308);
		}
		function sh(a, b, c) {
		  a = c.ref;
		  if (null !== a && "function" !== typeof a && "object" !== typeof a) {
		    if (c._owner) {
		      c = c._owner;
		      if (c) {
		        if (1 !== c.tag) throw Error(p(309));
		        var d = c.stateNode;
		      }
		      if (!d) throw Error(p(147, a));
		      var e = d,
		        f = "" + a;
		      if (null !== b && null !== b.ref && "function" === typeof b.ref && b.ref._stringRef === f) return b.ref;
		      b = function (a) {
		        var b = e.refs;
		        b === jh && (b = e.refs = {});
		        null === a ? delete b[f] : b[f] = a;
		      };
		      b._stringRef = f;
		      return b;
		    }
		    if ("string" !== typeof a) throw Error(p(284));
		    if (!c._owner) throw Error(p(290, a));
		  }
		  return a;
		}
		function th(a, b) {
		  a = Object.prototype.toString.call(b);
		  throw Error(p(31, "[object Object]" === a ? "object with keys {" + Object.keys(b).join(", ") + "}" : a));
		}
		function uh(a) {
		  var b = a._init;
		  return b(a._payload);
		}
		function vh(a) {
		  function b(b, c) {
		    if (a) {
		      var d = b.deletions;
		      null === d ? (b.deletions = [c], b.flags |= 16) : d.push(c);
		    }
		  }
		  function c(c, d) {
		    if (!a) return null;
		    for (; null !== d;) b(c, d), d = d.sibling;
		    return null;
		  }
		  function d(a, b) {
		    for (a = new Map(); null !== b;) null !== b.key ? a.set(b.key, b) : a.set(b.index, b), b = b.sibling;
		    return a;
		  }
		  function e(a, b) {
		    a = wh(a, b);
		    a.index = 0;
		    a.sibling = null;
		    return a;
		  }
		  function f(b, c, d) {
		    b.index = d;
		    if (!a) return b.flags |= 1048576, c;
		    d = b.alternate;
		    if (null !== d) return d = d.index, d < c ? (b.flags |= 2, c) : d;
		    b.flags |= 2;
		    return c;
		  }
		  function g(b) {
		    a && null === b.alternate && (b.flags |= 2);
		    return b;
		  }
		  function h(a, b, c, d) {
		    if (null === b || 6 !== b.tag) return b = xh(c, a.mode, d), b.return = a, b;
		    b = e(b, c);
		    b.return = a;
		    return b;
		  }
		  function k(a, b, c, d) {
		    var f = c.type;
		    if (f === ya) return m(a, b, c.props.children, d, c.key);
		    if (null !== b && (b.elementType === f || "object" === typeof f && null !== f && f.$$typeof === Ha && uh(f) === b.type)) return d = e(b, c.props), d.ref = sh(a, b, c), d.return = a, d;
		    d = yh(c.type, c.key, c.props, null, a.mode, d);
		    d.ref = sh(a, b, c);
		    d.return = a;
		    return d;
		  }
		  function l(a, b, c, d) {
		    if (null === b || 4 !== b.tag || b.stateNode.containerInfo !== c.containerInfo || b.stateNode.implementation !== c.implementation) return b = zh(c, a.mode, d), b.return = a, b;
		    b = e(b, c.children || []);
		    b.return = a;
		    return b;
		  }
		  function m(a, b, c, d, f) {
		    if (null === b || 7 !== b.tag) return b = Ah(c, a.mode, d, f), b.return = a, b;
		    b = e(b, c);
		    b.return = a;
		    return b;
		  }
		  function q(a, b, c) {
		    if ("string" === typeof b && "" !== b || "number" === typeof b) return b = xh("" + b, a.mode, c), b.return = a, b;
		    if ("object" === typeof b && null !== b) {
		      switch (b.$$typeof) {
		        case va:
		          return c = yh(b.type, b.key, b.props, null, a.mode, c), c.ref = sh(a, null, b), c.return = a, c;
		        case wa:
		          return b = zh(b, a.mode, c), b.return = a, b;
		        case Ha:
		          var d = b._init;
		          return q(a, d(b._payload), c);
		      }
		      if (eb(b) || Ka(b)) return b = Ah(b, a.mode, c, null), b.return = a, b;
		      th(a, b);
		    }
		    return null;
		  }
		  function r(a, b, c, d) {
		    var e = null !== b ? b.key : null;
		    if ("string" === typeof c && "" !== c || "number" === typeof c) return null !== e ? null : h(a, b, "" + c, d);
		    if ("object" === typeof c && null !== c) {
		      switch (c.$$typeof) {
		        case va:
		          return c.key === e ? k(a, b, c, d) : null;
		        case wa:
		          return c.key === e ? l(a, b, c, d) : null;
		        case Ha:
		          return e = c._init, r(a, b, e(c._payload), d);
		      }
		      if (eb(c) || Ka(c)) return null !== e ? null : m(a, b, c, d, null);
		      th(a, c);
		    }
		    return null;
		  }
		  function y(a, b, c, d, e) {
		    if ("string" === typeof d && "" !== d || "number" === typeof d) return a = a.get(c) || null, h(b, a, "" + d, e);
		    if ("object" === typeof d && null !== d) {
		      switch (d.$$typeof) {
		        case va:
		          return a = a.get(null === d.key ? c : d.key) || null, k(b, a, d, e);
		        case wa:
		          return a = a.get(null === d.key ? c : d.key) || null, l(b, a, d, e);
		        case Ha:
		          var f = d._init;
		          return y(a, b, c, f(d._payload), e);
		      }
		      if (eb(d) || Ka(d)) return a = a.get(c) || null, m(b, a, d, e, null);
		      th(b, d);
		    }
		    return null;
		  }
		  function n(e, g, h, k) {
		    for (var l = null, m = null, u = g, w = g = 0, x = null; null !== u && w < h.length; w++) {
		      u.index > w ? (x = u, u = null) : x = u.sibling;
		      var n = r(e, u, h[w], k);
		      if (null === n) {
		        null === u && (u = x);
		        break;
		      }
		      a && u && null === n.alternate && b(e, u);
		      g = f(n, g, w);
		      null === m ? l = n : m.sibling = n;
		      m = n;
		      u = x;
		    }
		    if (w === h.length) return c(e, u), I && tg(e, w), l;
		    if (null === u) {
		      for (; w < h.length; w++) u = q(e, h[w], k), null !== u && (g = f(u, g, w), null === m ? l = u : m.sibling = u, m = u);
		      I && tg(e, w);
		      return l;
		    }
		    for (u = d(e, u); w < h.length; w++) x = y(u, e, w, h[w], k), null !== x && (a && null !== x.alternate && u.delete(null === x.key ? w : x.key), g = f(x, g, w), null === m ? l = x : m.sibling = x, m = x);
		    a && u.forEach(function (a) {
		      return b(e, a);
		    });
		    I && tg(e, w);
		    return l;
		  }
		  function t(e, g, h, k) {
		    var l = Ka(h);
		    if ("function" !== typeof l) throw Error(p(150));
		    h = l.call(h);
		    if (null == h) throw Error(p(151));
		    for (var u = l = null, m = g, w = g = 0, x = null, n = h.next(); null !== m && !n.done; w++, n = h.next()) {
		      m.index > w ? (x = m, m = null) : x = m.sibling;
		      var t = r(e, m, n.value, k);
		      if (null === t) {
		        null === m && (m = x);
		        break;
		      }
		      a && m && null === t.alternate && b(e, m);
		      g = f(t, g, w);
		      null === u ? l = t : u.sibling = t;
		      u = t;
		      m = x;
		    }
		    if (n.done) return c(e, m), I && tg(e, w), l;
		    if (null === m) {
		      for (; !n.done; w++, n = h.next()) n = q(e, n.value, k), null !== n && (g = f(n, g, w), null === u ? l = n : u.sibling = n, u = n);
		      I && tg(e, w);
		      return l;
		    }
		    for (m = d(e, m); !n.done; w++, n = h.next()) n = y(m, e, w, n.value, k), null !== n && (a && null !== n.alternate && m.delete(null === n.key ? w : n.key), g = f(n, g, w), null === u ? l = n : u.sibling = n, u = n);
		    a && m.forEach(function (a) {
		      return b(e, a);
		    });
		    I && tg(e, w);
		    return l;
		  }
		  function J(a, d, f, h) {
		    "object" === typeof f && null !== f && f.type === ya && null === f.key && (f = f.props.children);
		    if ("object" === typeof f && null !== f) {
		      switch (f.$$typeof) {
		        case va:
		          a: {
		            for (var k = f.key, l = d; null !== l;) {
		              if (l.key === k) {
		                k = f.type;
		                if (k === ya) {
		                  if (7 === l.tag) {
		                    c(a, l.sibling);
		                    d = e(l, f.props.children);
		                    d.return = a;
		                    a = d;
		                    break a;
		                  }
		                } else if (l.elementType === k || "object" === typeof k && null !== k && k.$$typeof === Ha && uh(k) === l.type) {
		                  c(a, l.sibling);
		                  d = e(l, f.props);
		                  d.ref = sh(a, l, f);
		                  d.return = a;
		                  a = d;
		                  break a;
		                }
		                c(a, l);
		                break;
		              } else b(a, l);
		              l = l.sibling;
		            }
		            f.type === ya ? (d = Ah(f.props.children, a.mode, h, f.key), d.return = a, a = d) : (h = yh(f.type, f.key, f.props, null, a.mode, h), h.ref = sh(a, d, f), h.return = a, a = h);
		          }
		          return g(a);
		        case wa:
		          a: {
		            for (l = f.key; null !== d;) {
		              if (d.key === l) {
		                if (4 === d.tag && d.stateNode.containerInfo === f.containerInfo && d.stateNode.implementation === f.implementation) {
		                  c(a, d.sibling);
		                  d = e(d, f.children || []);
		                  d.return = a;
		                  a = d;
		                  break a;
		                } else {
		                  c(a, d);
		                  break;
		                }
		              } else b(a, d);
		              d = d.sibling;
		            }
		            d = zh(f, a.mode, h);
		            d.return = a;
		            a = d;
		          }
		          return g(a);
		        case Ha:
		          return l = f._init, J(a, d, l(f._payload), h);
		      }
		      if (eb(f)) return n(a, d, f, h);
		      if (Ka(f)) return t(a, d, f, h);
		      th(a, f);
		    }
		    return "string" === typeof f && "" !== f || "number" === typeof f ? (f = "" + f, null !== d && 6 === d.tag ? (c(a, d.sibling), d = e(d, f), d.return = a, a = d) : (c(a, d), d = xh(f, a.mode, h), d.return = a, a = d), g(a)) : c(a, d);
		  }
		  return J;
		}
		var Bh = vh(!0),
		  Ch = vh(!1),
		  Dh = {},
		  Eh = Uf(Dh),
		  Fh = Uf(Dh),
		  Gh = Uf(Dh);
		function Hh(a) {
		  if (a === Dh) throw Error(p(174));
		  return a;
		}
		function Ih(a, b) {
		  G(Gh, b);
		  G(Fh, a);
		  G(Eh, Dh);
		  a = b.nodeType;
		  switch (a) {
		    case 9:
		    case 11:
		      b = (b = b.documentElement) ? b.namespaceURI : lb(null, "");
		      break;
		    default:
		      a = 8 === a ? b.parentNode : b, b = a.namespaceURI || null, a = a.tagName, b = lb(b, a);
		  }
		  E(Eh);
		  G(Eh, b);
		}
		function Jh() {
		  E(Eh);
		  E(Fh);
		  E(Gh);
		}
		function Kh(a) {
		  Hh(Gh.current);
		  var b = Hh(Eh.current);
		  var c = lb(b, a.type);
		  b !== c && (G(Fh, a), G(Eh, c));
		}
		function Lh(a) {
		  Fh.current === a && (E(Eh), E(Fh));
		}
		var M = Uf(0);
		function Mh(a) {
		  for (var b = a; null !== b;) {
		    if (13 === b.tag) {
		      var c = b.memoizedState;
		      if (null !== c && (c = c.dehydrated, null === c || "$?" === c.data || "$!" === c.data)) return b;
		    } else if (19 === b.tag && void 0 !== b.memoizedProps.revealOrder) {
		      if (0 !== (b.flags & 128)) return b;
		    } else if (null !== b.child) {
		      b.child.return = b;
		      b = b.child;
		      continue;
		    }
		    if (b === a) break;
		    for (; null === b.sibling;) {
		      if (null === b.return || b.return === a) return null;
		      b = b.return;
		    }
		    b.sibling.return = b.return;
		    b = b.sibling;
		  }
		  return null;
		}
		var Nh = [];
		function Oh() {
		  for (var a = 0; a < Nh.length; a++) Nh[a]._workInProgressVersionPrimary = null;
		  Nh.length = 0;
		}
		var Ph = ua.ReactCurrentDispatcher,
		  Qh = ua.ReactCurrentBatchConfig,
		  Rh = 0,
		  N = null,
		  O = null,
		  P = null,
		  Sh = !1,
		  Th = !1,
		  Uh = 0,
		  Vh = 0;
		function Q() {
		  throw Error(p(321));
		}
		function Wh(a, b) {
		  if (null === b) return !1;
		  for (var c = 0; c < b.length && c < a.length; c++) if (!He(a[c], b[c])) return !1;
		  return !0;
		}
		function Xh(a, b, c, d, e, f) {
		  Rh = f;
		  N = b;
		  b.memoizedState = null;
		  b.updateQueue = null;
		  b.lanes = 0;
		  Ph.current = null === a || null === a.memoizedState ? Yh : Zh;
		  a = c(d, e);
		  if (Th) {
		    f = 0;
		    do {
		      Th = !1;
		      Uh = 0;
		      if (25 <= f) throw Error(p(301));
		      f += 1;
		      P = O = null;
		      b.updateQueue = null;
		      Ph.current = $h;
		      a = c(d, e);
		    } while (Th);
		  }
		  Ph.current = ai;
		  b = null !== O && null !== O.next;
		  Rh = 0;
		  P = O = N = null;
		  Sh = !1;
		  if (b) throw Error(p(300));
		  return a;
		}
		function bi() {
		  var a = 0 !== Uh;
		  Uh = 0;
		  return a;
		}
		function ci() {
		  var a = {
		    memoizedState: null,
		    baseState: null,
		    baseQueue: null,
		    queue: null,
		    next: null
		  };
		  null === P ? N.memoizedState = P = a : P = P.next = a;
		  return P;
		}
		function di() {
		  if (null === O) {
		    var a = N.alternate;
		    a = null !== a ? a.memoizedState : null;
		  } else a = O.next;
		  var b = null === P ? N.memoizedState : P.next;
		  if (null !== b) P = b, O = a;else {
		    if (null === a) throw Error(p(310));
		    O = a;
		    a = {
		      memoizedState: O.memoizedState,
		      baseState: O.baseState,
		      baseQueue: O.baseQueue,
		      queue: O.queue,
		      next: null
		    };
		    null === P ? N.memoizedState = P = a : P = P.next = a;
		  }
		  return P;
		}
		function ei(a, b) {
		  return "function" === typeof b ? b(a) : b;
		}
		function fi(a) {
		  var b = di(),
		    c = b.queue;
		  if (null === c) throw Error(p(311));
		  c.lastRenderedReducer = a;
		  var d = O,
		    e = d.baseQueue,
		    f = c.pending;
		  if (null !== f) {
		    if (null !== e) {
		      var g = e.next;
		      e.next = f.next;
		      f.next = g;
		    }
		    d.baseQueue = e = f;
		    c.pending = null;
		  }
		  if (null !== e) {
		    f = e.next;
		    d = d.baseState;
		    var h = g = null,
		      k = null,
		      l = f;
		    do {
		      var m = l.lane;
		      if ((Rh & m) === m) null !== k && (k = k.next = {
		        lane: 0,
		        action: l.action,
		        hasEagerState: l.hasEagerState,
		        eagerState: l.eagerState,
		        next: null
		      }), d = l.hasEagerState ? l.eagerState : a(d, l.action);else {
		        var q = {
		          lane: m,
		          action: l.action,
		          hasEagerState: l.hasEagerState,
		          eagerState: l.eagerState,
		          next: null
		        };
		        null === k ? (h = k = q, g = d) : k = k.next = q;
		        N.lanes |= m;
		        hh |= m;
		      }
		      l = l.next;
		    } while (null !== l && l !== f);
		    null === k ? g = d : k.next = h;
		    He(d, b.memoizedState) || (Ug = !0);
		    b.memoizedState = d;
		    b.baseState = g;
		    b.baseQueue = k;
		    c.lastRenderedState = d;
		  }
		  a = c.interleaved;
		  if (null !== a) {
		    e = a;
		    do f = e.lane, N.lanes |= f, hh |= f, e = e.next; while (e !== a);
		  } else null === e && (c.lanes = 0);
		  return [b.memoizedState, c.dispatch];
		}
		function gi(a) {
		  var b = di(),
		    c = b.queue;
		  if (null === c) throw Error(p(311));
		  c.lastRenderedReducer = a;
		  var d = c.dispatch,
		    e = c.pending,
		    f = b.memoizedState;
		  if (null !== e) {
		    c.pending = null;
		    var g = e = e.next;
		    do f = a(f, g.action), g = g.next; while (g !== e);
		    He(f, b.memoizedState) || (Ug = !0);
		    b.memoizedState = f;
		    null === b.baseQueue && (b.baseState = f);
		    c.lastRenderedState = f;
		  }
		  return [f, d];
		}
		function hi() {}
		function ii(a, b) {
		  var c = N,
		    d = di(),
		    e = b(),
		    f = !He(d.memoizedState, e);
		  f && (d.memoizedState = e, Ug = !0);
		  d = d.queue;
		  ji(ki.bind(null, c, d, a), [a]);
		  if (d.getSnapshot !== b || f || null !== P && P.memoizedState.tag & 1) {
		    c.flags |= 2048;
		    li(9, mi.bind(null, c, d, e, b), void 0, null);
		    if (null === R) throw Error(p(349));
		    0 !== (Rh & 30) || ni(c, b, e);
		  }
		  return e;
		}
		function ni(a, b, c) {
		  a.flags |= 16384;
		  a = {
		    getSnapshot: b,
		    value: c
		  };
		  b = N.updateQueue;
		  null === b ? (b = {
		    lastEffect: null,
		    stores: null
		  }, N.updateQueue = b, b.stores = [a]) : (c = b.stores, null === c ? b.stores = [a] : c.push(a));
		}
		function mi(a, b, c, d) {
		  b.value = c;
		  b.getSnapshot = d;
		  oi(b) && pi(a);
		}
		function ki(a, b, c) {
		  return c(function () {
		    oi(b) && pi(a);
		  });
		}
		function oi(a) {
		  var b = a.getSnapshot;
		  a = a.value;
		  try {
		    var c = b();
		    return !He(a, c);
		  } catch (d) {
		    return !0;
		  }
		}
		function pi(a) {
		  var b = Zg(a, 1);
		  null !== b && mh(b, a, 1, -1);
		}
		function qi(a) {
		  var b = ci();
		  "function" === typeof a && (a = a());
		  b.memoizedState = b.baseState = a;
		  a = {
		    pending: null,
		    interleaved: null,
		    lanes: 0,
		    dispatch: null,
		    lastRenderedReducer: ei,
		    lastRenderedState: a
		  };
		  b.queue = a;
		  a = a.dispatch = ri.bind(null, N, a);
		  return [b.memoizedState, a];
		}
		function li(a, b, c, d) {
		  a = {
		    tag: a,
		    create: b,
		    destroy: c,
		    deps: d,
		    next: null
		  };
		  b = N.updateQueue;
		  null === b ? (b = {
		    lastEffect: null,
		    stores: null
		  }, N.updateQueue = b, b.lastEffect = a.next = a) : (c = b.lastEffect, null === c ? b.lastEffect = a.next = a : (d = c.next, c.next = a, a.next = d, b.lastEffect = a));
		  return a;
		}
		function si() {
		  return di().memoizedState;
		}
		function ti(a, b, c, d) {
		  var e = ci();
		  N.flags |= a;
		  e.memoizedState = li(1 | b, c, void 0, void 0 === d ? null : d);
		}
		function ui(a, b, c, d) {
		  var e = di();
		  d = void 0 === d ? null : d;
		  var f = void 0;
		  if (null !== O) {
		    var g = O.memoizedState;
		    f = g.destroy;
		    if (null !== d && Wh(d, g.deps)) {
		      e.memoizedState = li(b, c, f, d);
		      return;
		    }
		  }
		  N.flags |= a;
		  e.memoizedState = li(1 | b, c, f, d);
		}
		function vi(a, b) {
		  return ti(8390656, 8, a, b);
		}
		function ji(a, b) {
		  return ui(2048, 8, a, b);
		}
		function wi(a, b) {
		  return ui(4, 2, a, b);
		}
		function xi(a, b) {
		  return ui(4, 4, a, b);
		}
		function yi(a, b) {
		  if ("function" === typeof b) return a = a(), b(a), function () {
		    b(null);
		  };
		  if (null !== b && void 0 !== b) return a = a(), b.current = a, function () {
		    b.current = null;
		  };
		}
		function zi(a, b, c) {
		  c = null !== c && void 0 !== c ? c.concat([a]) : null;
		  return ui(4, 4, yi.bind(null, b, a), c);
		}
		function Ai() {}
		function Bi(a, b) {
		  var c = di();
		  b = void 0 === b ? null : b;
		  var d = c.memoizedState;
		  if (null !== d && null !== b && Wh(b, d[1])) return d[0];
		  c.memoizedState = [a, b];
		  return a;
		}
		function Ci(a, b) {
		  var c = di();
		  b = void 0 === b ? null : b;
		  var d = c.memoizedState;
		  if (null !== d && null !== b && Wh(b, d[1])) return d[0];
		  a = a();
		  c.memoizedState = [a, b];
		  return a;
		}
		function Di(a, b, c) {
		  if (0 === (Rh & 21)) return a.baseState && (a.baseState = !1, Ug = !0), a.memoizedState = c;
		  He(c, b) || (c = yc(), N.lanes |= c, hh |= c, a.baseState = !0);
		  return b;
		}
		function Ei(a, b) {
		  var c = C;
		  C = 0 !== c && 4 > c ? c : 4;
		  a(!0);
		  var d = Qh.transition;
		  Qh.transition = {};
		  try {
		    a(!1), b();
		  } finally {
		    C = c, Qh.transition = d;
		  }
		}
		function Fi() {
		  return di().memoizedState;
		}
		function Gi(a, b, c) {
		  var d = lh(a);
		  c = {
		    lane: d,
		    action: c,
		    hasEagerState: !1,
		    eagerState: null,
		    next: null
		  };
		  if (Hi(a)) Ii(b, c);else if (c = Yg(a, b, c, d), null !== c) {
		    var e = L();
		    mh(c, a, d, e);
		    Ji(c, b, d);
		  }
		}
		function ri(a, b, c) {
		  var d = lh(a),
		    e = {
		      lane: d,
		      action: c,
		      hasEagerState: !1,
		      eagerState: null,
		      next: null
		    };
		  if (Hi(a)) Ii(b, e);else {
		    var f = a.alternate;
		    if (0 === a.lanes && (null === f || 0 === f.lanes) && (f = b.lastRenderedReducer, null !== f)) try {
		      var g = b.lastRenderedState,
		        h = f(g, c);
		      e.hasEagerState = !0;
		      e.eagerState = h;
		      if (He(h, g)) {
		        var k = b.interleaved;
		        null === k ? (e.next = e, Xg(b)) : (e.next = k.next, k.next = e);
		        b.interleaved = e;
		        return;
		      }
		    } catch (l) {} finally {}
		    c = Yg(a, b, e, d);
		    null !== c && (e = L(), mh(c, a, d, e), Ji(c, b, d));
		  }
		}
		function Hi(a) {
		  var b = a.alternate;
		  return a === N || null !== b && b === N;
		}
		function Ii(a, b) {
		  Th = Sh = !0;
		  var c = a.pending;
		  null === c ? b.next = b : (b.next = c.next, c.next = b);
		  a.pending = b;
		}
		function Ji(a, b, c) {
		  if (0 !== (c & 4194240)) {
		    var d = b.lanes;
		    d &= a.pendingLanes;
		    c |= d;
		    b.lanes = c;
		    Cc(a, c);
		  }
		}
		var ai = {
		    readContext: Vg,
		    useCallback: Q,
		    useContext: Q,
		    useEffect: Q,
		    useImperativeHandle: Q,
		    useInsertionEffect: Q,
		    useLayoutEffect: Q,
		    useMemo: Q,
		    useReducer: Q,
		    useRef: Q,
		    useState: Q,
		    useDebugValue: Q,
		    useDeferredValue: Q,
		    useTransition: Q,
		    useMutableSource: Q,
		    useSyncExternalStore: Q,
		    useId: Q,
		    unstable_isNewReconciler: !1
		  },
		  Yh = {
		    readContext: Vg,
		    useCallback: function (a, b) {
		      ci().memoizedState = [a, void 0 === b ? null : b];
		      return a;
		    },
		    useContext: Vg,
		    useEffect: vi,
		    useImperativeHandle: function (a, b, c) {
		      c = null !== c && void 0 !== c ? c.concat([a]) : null;
		      return ti(4194308, 4, yi.bind(null, b, a), c);
		    },
		    useLayoutEffect: function (a, b) {
		      return ti(4194308, 4, a, b);
		    },
		    useInsertionEffect: function (a, b) {
		      return ti(4, 2, a, b);
		    },
		    useMemo: function (a, b) {
		      var c = ci();
		      b = void 0 === b ? null : b;
		      a = a();
		      c.memoizedState = [a, b];
		      return a;
		    },
		    useReducer: function (a, b, c) {
		      var d = ci();
		      b = void 0 !== c ? c(b) : b;
		      d.memoizedState = d.baseState = b;
		      a = {
		        pending: null,
		        interleaved: null,
		        lanes: 0,
		        dispatch: null,
		        lastRenderedReducer: a,
		        lastRenderedState: b
		      };
		      d.queue = a;
		      a = a.dispatch = Gi.bind(null, N, a);
		      return [d.memoizedState, a];
		    },
		    useRef: function (a) {
		      var b = ci();
		      a = {
		        current: a
		      };
		      return b.memoizedState = a;
		    },
		    useState: qi,
		    useDebugValue: Ai,
		    useDeferredValue: function (a) {
		      return ci().memoizedState = a;
		    },
		    useTransition: function () {
		      var a = qi(!1),
		        b = a[0];
		      a = Ei.bind(null, a[1]);
		      ci().memoizedState = a;
		      return [b, a];
		    },
		    useMutableSource: function () {},
		    useSyncExternalStore: function (a, b, c) {
		      var d = N,
		        e = ci();
		      if (I) {
		        if (void 0 === c) throw Error(p(407));
		        c = c();
		      } else {
		        c = b();
		        if (null === R) throw Error(p(349));
		        0 !== (Rh & 30) || ni(d, b, c);
		      }
		      e.memoizedState = c;
		      var f = {
		        value: c,
		        getSnapshot: b
		      };
		      e.queue = f;
		      vi(ki.bind(null, d, f, a), [a]);
		      d.flags |= 2048;
		      li(9, mi.bind(null, d, f, c, b), void 0, null);
		      return c;
		    },
		    useId: function () {
		      var a = ci(),
		        b = R.identifierPrefix;
		      if (I) {
		        var c = sg;
		        var d = rg;
		        c = (d & ~(1 << 32 - oc(d) - 1)).toString(32) + c;
		        b = ":" + b + "R" + c;
		        c = Uh++;
		        0 < c && (b += "H" + c.toString(32));
		        b += ":";
		      } else c = Vh++, b = ":" + b + "r" + c.toString(32) + ":";
		      return a.memoizedState = b;
		    },
		    unstable_isNewReconciler: !1
		  },
		  Zh = {
		    readContext: Vg,
		    useCallback: Bi,
		    useContext: Vg,
		    useEffect: ji,
		    useImperativeHandle: zi,
		    useInsertionEffect: wi,
		    useLayoutEffect: xi,
		    useMemo: Ci,
		    useReducer: fi,
		    useRef: si,
		    useState: function () {
		      return fi(ei);
		    },
		    useDebugValue: Ai,
		    useDeferredValue: function (a) {
		      var b = di();
		      return Di(b, O.memoizedState, a);
		    },
		    useTransition: function () {
		      var a = fi(ei)[0],
		        b = di().memoizedState;
		      return [a, b];
		    },
		    useMutableSource: hi,
		    useSyncExternalStore: ii,
		    useId: Fi,
		    unstable_isNewReconciler: !1
		  },
		  $h = {
		    readContext: Vg,
		    useCallback: Bi,
		    useContext: Vg,
		    useEffect: ji,
		    useImperativeHandle: zi,
		    useInsertionEffect: wi,
		    useLayoutEffect: xi,
		    useMemo: Ci,
		    useReducer: gi,
		    useRef: si,
		    useState: function () {
		      return gi(ei);
		    },
		    useDebugValue: Ai,
		    useDeferredValue: function (a) {
		      var b = di();
		      return null === O ? b.memoizedState = a : Di(b, O.memoizedState, a);
		    },
		    useTransition: function () {
		      var a = gi(ei)[0],
		        b = di().memoizedState;
		      return [a, b];
		    },
		    useMutableSource: hi,
		    useSyncExternalStore: ii,
		    useId: Fi,
		    unstable_isNewReconciler: !1
		  };
		function Ki(a, b) {
		  try {
		    var c = "",
		      d = b;
		    do c += Pa(d), d = d.return; while (d);
		    var e = c;
		  } catch (f) {
		    e = "\nError generating stack: " + f.message + "\n" + f.stack;
		  }
		  return {
		    value: a,
		    source: b,
		    stack: e,
		    digest: null
		  };
		}
		function Li(a, b, c) {
		  return {
		    value: a,
		    source: null,
		    stack: null != c ? c : null,
		    digest: null != b ? b : null
		  };
		}
		function Mi(a, b) {
		  try {
		    console.error(b.value);
		  } catch (c) {
		    setTimeout(function () {
		      throw c;
		    });
		  }
		}
		var Ni = "function" === typeof WeakMap ? WeakMap : Map;
		function Oi(a, b, c) {
		  c = ch(-1, c);
		  c.tag = 3;
		  c.payload = {
		    element: null
		  };
		  var d = b.value;
		  c.callback = function () {
		    Pi || (Pi = !0, Qi = d);
		    Mi(a, b);
		  };
		  return c;
		}
		function Ri(a, b, c) {
		  c = ch(-1, c);
		  c.tag = 3;
		  var d = a.type.getDerivedStateFromError;
		  if ("function" === typeof d) {
		    var e = b.value;
		    c.payload = function () {
		      return d(e);
		    };
		    c.callback = function () {
		      Mi(a, b);
		    };
		  }
		  var f = a.stateNode;
		  null !== f && "function" === typeof f.componentDidCatch && (c.callback = function () {
		    Mi(a, b);
		    "function" !== typeof d && (null === Si ? Si = new Set([this]) : Si.add(this));
		    var c = b.stack;
		    this.componentDidCatch(b.value, {
		      componentStack: null !== c ? c : ""
		    });
		  });
		  return c;
		}
		function Ti(a, b, c) {
		  var d = a.pingCache;
		  if (null === d) {
		    d = a.pingCache = new Ni();
		    var e = new Set();
		    d.set(b, e);
		  } else e = d.get(b), void 0 === e && (e = new Set(), d.set(b, e));
		  e.has(c) || (e.add(c), a = Ui.bind(null, a, b, c), b.then(a, a));
		}
		function Vi(a) {
		  do {
		    var b;
		    if (b = 13 === a.tag) b = a.memoizedState, b = null !== b ? null !== b.dehydrated ? !0 : !1 : !0;
		    if (b) return a;
		    a = a.return;
		  } while (null !== a);
		  return null;
		}
		function Wi(a, b, c, d, e) {
		  if (0 === (a.mode & 1)) return a === b ? a.flags |= 65536 : (a.flags |= 128, c.flags |= 131072, c.flags &= -52805, 1 === c.tag && (null === c.alternate ? c.tag = 17 : (b = ch(-1, 1), b.tag = 2, dh(c, b, 1))), c.lanes |= 1), a;
		  a.flags |= 65536;
		  a.lanes = e;
		  return a;
		}
		var Xi = ua.ReactCurrentOwner,
		  Ug = !1;
		function Yi(a, b, c, d) {
		  b.child = null === a ? Ch(b, null, c, d) : Bh(b, a.child, c, d);
		}
		function Zi(a, b, c, d, e) {
		  c = c.render;
		  var f = b.ref;
		  Tg(b, e);
		  d = Xh(a, b, c, d, f, e);
		  c = bi();
		  if (null !== a && !Ug) return b.updateQueue = a.updateQueue, b.flags &= -2053, a.lanes &= ~e, $i(a, b, e);
		  I && c && vg(b);
		  b.flags |= 1;
		  Yi(a, b, d, e);
		  return b.child;
		}
		function aj(a, b, c, d, e) {
		  if (null === a) {
		    var f = c.type;
		    if ("function" === typeof f && !bj(f) && void 0 === f.defaultProps && null === c.compare && void 0 === c.defaultProps) return b.tag = 15, b.type = f, cj(a, b, f, d, e);
		    a = yh(c.type, null, d, b, b.mode, e);
		    a.ref = b.ref;
		    a.return = b;
		    return b.child = a;
		  }
		  f = a.child;
		  if (0 === (a.lanes & e)) {
		    var g = f.memoizedProps;
		    c = c.compare;
		    c = null !== c ? c : Ie;
		    if (c(g, d) && a.ref === b.ref) return $i(a, b, e);
		  }
		  b.flags |= 1;
		  a = wh(f, d);
		  a.ref = b.ref;
		  a.return = b;
		  return b.child = a;
		}
		function cj(a, b, c, d, e) {
		  if (null !== a) {
		    var f = a.memoizedProps;
		    if (Ie(f, d) && a.ref === b.ref) if (Ug = !1, b.pendingProps = d = f, 0 !== (a.lanes & e)) 0 !== (a.flags & 131072) && (Ug = !0);else return b.lanes = a.lanes, $i(a, b, e);
		  }
		  return dj(a, b, c, d, e);
		}
		function ej(a, b, c) {
		  var d = b.pendingProps,
		    e = d.children,
		    f = null !== a ? a.memoizedState : null;
		  if ("hidden" === d.mode) {
		    if (0 === (b.mode & 1)) b.memoizedState = {
		      baseLanes: 0,
		      cachePool: null,
		      transitions: null
		    }, G(fj, gj), gj |= c;else {
		      if (0 === (c & 1073741824)) return a = null !== f ? f.baseLanes | c : c, b.lanes = b.childLanes = 1073741824, b.memoizedState = {
		        baseLanes: a,
		        cachePool: null,
		        transitions: null
		      }, b.updateQueue = null, G(fj, gj), gj |= a, null;
		      b.memoizedState = {
		        baseLanes: 0,
		        cachePool: null,
		        transitions: null
		      };
		      d = null !== f ? f.baseLanes : c;
		      G(fj, gj);
		      gj |= d;
		    }
		  } else null !== f ? (d = f.baseLanes | c, b.memoizedState = null) : d = c, G(fj, gj), gj |= d;
		  Yi(a, b, e, c);
		  return b.child;
		}
		function hj(a, b) {
		  var c = b.ref;
		  if (null === a && null !== c || null !== a && a.ref !== c) b.flags |= 512, b.flags |= 2097152;
		}
		function dj(a, b, c, d, e) {
		  var f = Zf(c) ? Xf : H.current;
		  f = Yf(b, f);
		  Tg(b, e);
		  c = Xh(a, b, c, d, f, e);
		  d = bi();
		  if (null !== a && !Ug) return b.updateQueue = a.updateQueue, b.flags &= -2053, a.lanes &= ~e, $i(a, b, e);
		  I && d && vg(b);
		  b.flags |= 1;
		  Yi(a, b, c, e);
		  return b.child;
		}
		function ij(a, b, c, d, e) {
		  if (Zf(c)) {
		    var f = !0;
		    cg(b);
		  } else f = !1;
		  Tg(b, e);
		  if (null === b.stateNode) jj(a, b), ph(b, c, d), rh(b, c, d, e), d = !0;else if (null === a) {
		    var g = b.stateNode,
		      h = b.memoizedProps;
		    g.props = h;
		    var k = g.context,
		      l = c.contextType;
		    "object" === typeof l && null !== l ? l = Vg(l) : (l = Zf(c) ? Xf : H.current, l = Yf(b, l));
		    var m = c.getDerivedStateFromProps,
		      q = "function" === typeof m || "function" === typeof g.getSnapshotBeforeUpdate;
		    q || "function" !== typeof g.UNSAFE_componentWillReceiveProps && "function" !== typeof g.componentWillReceiveProps || (h !== d || k !== l) && qh(b, g, d, l);
		    $g = !1;
		    var r = b.memoizedState;
		    g.state = r;
		    gh(b, d, g, e);
		    k = b.memoizedState;
		    h !== d || r !== k || Wf.current || $g ? ("function" === typeof m && (kh(b, c, m, d), k = b.memoizedState), (h = $g || oh(b, c, h, d, r, k, l)) ? (q || "function" !== typeof g.UNSAFE_componentWillMount && "function" !== typeof g.componentWillMount || ("function" === typeof g.componentWillMount && g.componentWillMount(), "function" === typeof g.UNSAFE_componentWillMount && g.UNSAFE_componentWillMount()), "function" === typeof g.componentDidMount && (b.flags |= 4194308)) : ("function" === typeof g.componentDidMount && (b.flags |= 4194308), b.memoizedProps = d, b.memoizedState = k), g.props = d, g.state = k, g.context = l, d = h) : ("function" === typeof g.componentDidMount && (b.flags |= 4194308), d = !1);
		  } else {
		    g = b.stateNode;
		    bh(a, b);
		    h = b.memoizedProps;
		    l = b.type === b.elementType ? h : Lg(b.type, h);
		    g.props = l;
		    q = b.pendingProps;
		    r = g.context;
		    k = c.contextType;
		    "object" === typeof k && null !== k ? k = Vg(k) : (k = Zf(c) ? Xf : H.current, k = Yf(b, k));
		    var y = c.getDerivedStateFromProps;
		    (m = "function" === typeof y || "function" === typeof g.getSnapshotBeforeUpdate) || "function" !== typeof g.UNSAFE_componentWillReceiveProps && "function" !== typeof g.componentWillReceiveProps || (h !== q || r !== k) && qh(b, g, d, k);
		    $g = !1;
		    r = b.memoizedState;
		    g.state = r;
		    gh(b, d, g, e);
		    var n = b.memoizedState;
		    h !== q || r !== n || Wf.current || $g ? ("function" === typeof y && (kh(b, c, y, d), n = b.memoizedState), (l = $g || oh(b, c, l, d, r, n, k) || !1) ? (m || "function" !== typeof g.UNSAFE_componentWillUpdate && "function" !== typeof g.componentWillUpdate || ("function" === typeof g.componentWillUpdate && g.componentWillUpdate(d, n, k), "function" === typeof g.UNSAFE_componentWillUpdate && g.UNSAFE_componentWillUpdate(d, n, k)), "function" === typeof g.componentDidUpdate && (b.flags |= 4), "function" === typeof g.getSnapshotBeforeUpdate && (b.flags |= 1024)) : ("function" !== typeof g.componentDidUpdate || h === a.memoizedProps && r === a.memoizedState || (b.flags |= 4), "function" !== typeof g.getSnapshotBeforeUpdate || h === a.memoizedProps && r === a.memoizedState || (b.flags |= 1024), b.memoizedProps = d, b.memoizedState = n), g.props = d, g.state = n, g.context = k, d = l) : ("function" !== typeof g.componentDidUpdate || h === a.memoizedProps && r === a.memoizedState || (b.flags |= 4), "function" !== typeof g.getSnapshotBeforeUpdate || h === a.memoizedProps && r === a.memoizedState || (b.flags |= 1024), d = !1);
		  }
		  return kj(a, b, c, d, f, e);
		}
		function kj(a, b, c, d, e, f) {
		  hj(a, b);
		  var g = 0 !== (b.flags & 128);
		  if (!d && !g) return e && dg(b, c, !1), $i(a, b, f);
		  d = b.stateNode;
		  Xi.current = b;
		  var h = g && "function" !== typeof c.getDerivedStateFromError ? null : d.render();
		  b.flags |= 1;
		  null !== a && g ? (b.child = Bh(b, a.child, null, f), b.child = Bh(b, null, h, f)) : Yi(a, b, h, f);
		  b.memoizedState = d.state;
		  e && dg(b, c, !0);
		  return b.child;
		}
		function lj(a) {
		  var b = a.stateNode;
		  b.pendingContext ? ag(a, b.pendingContext, b.pendingContext !== b.context) : b.context && ag(a, b.context, !1);
		  Ih(a, b.containerInfo);
		}
		function mj(a, b, c, d, e) {
		  Ig();
		  Jg(e);
		  b.flags |= 256;
		  Yi(a, b, c, d);
		  return b.child;
		}
		var nj = {
		  dehydrated: null,
		  treeContext: null,
		  retryLane: 0
		};
		function oj(a) {
		  return {
		    baseLanes: a,
		    cachePool: null,
		    transitions: null
		  };
		}
		function pj(a, b, c) {
		  var d = b.pendingProps,
		    e = M.current,
		    f = !1,
		    g = 0 !== (b.flags & 128),
		    h;
		  (h = g) || (h = null !== a && null === a.memoizedState ? !1 : 0 !== (e & 2));
		  if (h) f = !0, b.flags &= -129;else if (null === a || null !== a.memoizedState) e |= 1;
		  G(M, e & 1);
		  if (null === a) {
		    Eg(b);
		    a = b.memoizedState;
		    if (null !== a && (a = a.dehydrated, null !== a)) return 0 === (b.mode & 1) ? b.lanes = 1 : "$!" === a.data ? b.lanes = 8 : b.lanes = 1073741824, null;
		    g = d.children;
		    a = d.fallback;
		    return f ? (d = b.mode, f = b.child, g = {
		      mode: "hidden",
		      children: g
		    }, 0 === (d & 1) && null !== f ? (f.childLanes = 0, f.pendingProps = g) : f = qj(g, d, 0, null), a = Ah(a, d, c, null), f.return = b, a.return = b, f.sibling = a, b.child = f, b.child.memoizedState = oj(c), b.memoizedState = nj, a) : rj(b, g);
		  }
		  e = a.memoizedState;
		  if (null !== e && (h = e.dehydrated, null !== h)) return sj(a, b, g, d, h, e, c);
		  if (f) {
		    f = d.fallback;
		    g = b.mode;
		    e = a.child;
		    h = e.sibling;
		    var k = {
		      mode: "hidden",
		      children: d.children
		    };
		    0 === (g & 1) && b.child !== e ? (d = b.child, d.childLanes = 0, d.pendingProps = k, b.deletions = null) : (d = wh(e, k), d.subtreeFlags = e.subtreeFlags & 14680064);
		    null !== h ? f = wh(h, f) : (f = Ah(f, g, c, null), f.flags |= 2);
		    f.return = b;
		    d.return = b;
		    d.sibling = f;
		    b.child = d;
		    d = f;
		    f = b.child;
		    g = a.child.memoizedState;
		    g = null === g ? oj(c) : {
		      baseLanes: g.baseLanes | c,
		      cachePool: null,
		      transitions: g.transitions
		    };
		    f.memoizedState = g;
		    f.childLanes = a.childLanes & ~c;
		    b.memoizedState = nj;
		    return d;
		  }
		  f = a.child;
		  a = f.sibling;
		  d = wh(f, {
		    mode: "visible",
		    children: d.children
		  });
		  0 === (b.mode & 1) && (d.lanes = c);
		  d.return = b;
		  d.sibling = null;
		  null !== a && (c = b.deletions, null === c ? (b.deletions = [a], b.flags |= 16) : c.push(a));
		  b.child = d;
		  b.memoizedState = null;
		  return d;
		}
		function rj(a, b) {
		  b = qj({
		    mode: "visible",
		    children: b
		  }, a.mode, 0, null);
		  b.return = a;
		  return a.child = b;
		}
		function tj(a, b, c, d) {
		  null !== d && Jg(d);
		  Bh(b, a.child, null, c);
		  a = rj(b, b.pendingProps.children);
		  a.flags |= 2;
		  b.memoizedState = null;
		  return a;
		}
		function sj(a, b, c, d, e, f, g) {
		  if (c) {
		    if (b.flags & 256) return b.flags &= -257, d = Li(Error(p(422))), tj(a, b, g, d);
		    if (null !== b.memoizedState) return b.child = a.child, b.flags |= 128, null;
		    f = d.fallback;
		    e = b.mode;
		    d = qj({
		      mode: "visible",
		      children: d.children
		    }, e, 0, null);
		    f = Ah(f, e, g, null);
		    f.flags |= 2;
		    d.return = b;
		    f.return = b;
		    d.sibling = f;
		    b.child = d;
		    0 !== (b.mode & 1) && Bh(b, a.child, null, g);
		    b.child.memoizedState = oj(g);
		    b.memoizedState = nj;
		    return f;
		  }
		  if (0 === (b.mode & 1)) return tj(a, b, g, null);
		  if ("$!" === e.data) {
		    d = e.nextSibling && e.nextSibling.dataset;
		    if (d) var h = d.dgst;
		    d = h;
		    f = Error(p(419));
		    d = Li(f, d, void 0);
		    return tj(a, b, g, d);
		  }
		  h = 0 !== (g & a.childLanes);
		  if (Ug || h) {
		    d = R;
		    if (null !== d) {
		      switch (g & -g) {
		        case 4:
		          e = 2;
		          break;
		        case 16:
		          e = 8;
		          break;
		        case 64:
		        case 128:
		        case 256:
		        case 512:
		        case 1024:
		        case 2048:
		        case 4096:
		        case 8192:
		        case 16384:
		        case 32768:
		        case 65536:
		        case 131072:
		        case 262144:
		        case 524288:
		        case 1048576:
		        case 2097152:
		        case 4194304:
		        case 8388608:
		        case 16777216:
		        case 33554432:
		        case 67108864:
		          e = 32;
		          break;
		        case 536870912:
		          e = 268435456;
		          break;
		        default:
		          e = 0;
		      }
		      e = 0 !== (e & (d.suspendedLanes | g)) ? 0 : e;
		      0 !== e && e !== f.retryLane && (f.retryLane = e, Zg(a, e), mh(d, a, e, -1));
		    }
		    uj();
		    d = Li(Error(p(421)));
		    return tj(a, b, g, d);
		  }
		  if ("$?" === e.data) return b.flags |= 128, b.child = a.child, b = vj.bind(null, a), e._reactRetry = b, null;
		  a = f.treeContext;
		  yg = Lf(e.nextSibling);
		  xg = b;
		  I = !0;
		  zg = null;
		  null !== a && (og[pg++] = rg, og[pg++] = sg, og[pg++] = qg, rg = a.id, sg = a.overflow, qg = b);
		  b = rj(b, d.children);
		  b.flags |= 4096;
		  return b;
		}
		function wj(a, b, c) {
		  a.lanes |= b;
		  var d = a.alternate;
		  null !== d && (d.lanes |= b);
		  Sg(a.return, b, c);
		}
		function xj(a, b, c, d, e) {
		  var f = a.memoizedState;
		  null === f ? a.memoizedState = {
		    isBackwards: b,
		    rendering: null,
		    renderingStartTime: 0,
		    last: d,
		    tail: c,
		    tailMode: e
		  } : (f.isBackwards = b, f.rendering = null, f.renderingStartTime = 0, f.last = d, f.tail = c, f.tailMode = e);
		}
		function yj(a, b, c) {
		  var d = b.pendingProps,
		    e = d.revealOrder,
		    f = d.tail;
		  Yi(a, b, d.children, c);
		  d = M.current;
		  if (0 !== (d & 2)) d = d & 1 | 2, b.flags |= 128;else {
		    if (null !== a && 0 !== (a.flags & 128)) a: for (a = b.child; null !== a;) {
		      if (13 === a.tag) null !== a.memoizedState && wj(a, c, b);else if (19 === a.tag) wj(a, c, b);else if (null !== a.child) {
		        a.child.return = a;
		        a = a.child;
		        continue;
		      }
		      if (a === b) break a;
		      for (; null === a.sibling;) {
		        if (null === a.return || a.return === b) break a;
		        a = a.return;
		      }
		      a.sibling.return = a.return;
		      a = a.sibling;
		    }
		    d &= 1;
		  }
		  G(M, d);
		  if (0 === (b.mode & 1)) b.memoizedState = null;else switch (e) {
		    case "forwards":
		      c = b.child;
		      for (e = null; null !== c;) a = c.alternate, null !== a && null === Mh(a) && (e = c), c = c.sibling;
		      c = e;
		      null === c ? (e = b.child, b.child = null) : (e = c.sibling, c.sibling = null);
		      xj(b, !1, e, c, f);
		      break;
		    case "backwards":
		      c = null;
		      e = b.child;
		      for (b.child = null; null !== e;) {
		        a = e.alternate;
		        if (null !== a && null === Mh(a)) {
		          b.child = e;
		          break;
		        }
		        a = e.sibling;
		        e.sibling = c;
		        c = e;
		        e = a;
		      }
		      xj(b, !0, c, null, f);
		      break;
		    case "together":
		      xj(b, !1, null, null, void 0);
		      break;
		    default:
		      b.memoizedState = null;
		  }
		  return b.child;
		}
		function jj(a, b) {
		  0 === (b.mode & 1) && null !== a && (a.alternate = null, b.alternate = null, b.flags |= 2);
		}
		function $i(a, b, c) {
		  null !== a && (b.dependencies = a.dependencies);
		  hh |= b.lanes;
		  if (0 === (c & b.childLanes)) return null;
		  if (null !== a && b.child !== a.child) throw Error(p(153));
		  if (null !== b.child) {
		    a = b.child;
		    c = wh(a, a.pendingProps);
		    b.child = c;
		    for (c.return = b; null !== a.sibling;) a = a.sibling, c = c.sibling = wh(a, a.pendingProps), c.return = b;
		    c.sibling = null;
		  }
		  return b.child;
		}
		function zj(a, b, c) {
		  switch (b.tag) {
		    case 3:
		      lj(b);
		      Ig();
		      break;
		    case 5:
		      Kh(b);
		      break;
		    case 1:
		      Zf(b.type) && cg(b);
		      break;
		    case 4:
		      Ih(b, b.stateNode.containerInfo);
		      break;
		    case 10:
		      var d = b.type._context,
		        e = b.memoizedProps.value;
		      G(Mg, d._currentValue);
		      d._currentValue = e;
		      break;
		    case 13:
		      d = b.memoizedState;
		      if (null !== d) {
		        if (null !== d.dehydrated) return G(M, M.current & 1), b.flags |= 128, null;
		        if (0 !== (c & b.child.childLanes)) return pj(a, b, c);
		        G(M, M.current & 1);
		        a = $i(a, b, c);
		        return null !== a ? a.sibling : null;
		      }
		      G(M, M.current & 1);
		      break;
		    case 19:
		      d = 0 !== (c & b.childLanes);
		      if (0 !== (a.flags & 128)) {
		        if (d) return yj(a, b, c);
		        b.flags |= 128;
		      }
		      e = b.memoizedState;
		      null !== e && (e.rendering = null, e.tail = null, e.lastEffect = null);
		      G(M, M.current);
		      if (d) break;else return null;
		    case 22:
		    case 23:
		      return b.lanes = 0, ej(a, b, c);
		  }
		  return $i(a, b, c);
		}
		var Aj, Bj, Cj, Dj;
		Aj = function (a, b) {
		  for (var c = b.child; null !== c;) {
		    if (5 === c.tag || 6 === c.tag) a.appendChild(c.stateNode);else if (4 !== c.tag && null !== c.child) {
		      c.child.return = c;
		      c = c.child;
		      continue;
		    }
		    if (c === b) break;
		    for (; null === c.sibling;) {
		      if (null === c.return || c.return === b) return;
		      c = c.return;
		    }
		    c.sibling.return = c.return;
		    c = c.sibling;
		  }
		};
		Bj = function () {};
		Cj = function (a, b, c, d) {
		  var e = a.memoizedProps;
		  if (e !== d) {
		    a = b.stateNode;
		    Hh(Eh.current);
		    var f = null;
		    switch (c) {
		      case "input":
		        e = Ya(a, e);
		        d = Ya(a, d);
		        f = [];
		        break;
		      case "select":
		        e = A({}, e, {
		          value: void 0
		        });
		        d = A({}, d, {
		          value: void 0
		        });
		        f = [];
		        break;
		      case "textarea":
		        e = gb(a, e);
		        d = gb(a, d);
		        f = [];
		        break;
		      default:
		        "function" !== typeof e.onClick && "function" === typeof d.onClick && (a.onclick = Bf);
		    }
		    ub(c, d);
		    var g;
		    c = null;
		    for (l in e) if (!d.hasOwnProperty(l) && e.hasOwnProperty(l) && null != e[l]) if ("style" === l) {
		      var h = e[l];
		      for (g in h) h.hasOwnProperty(g) && (c || (c = {}), c[g] = "");
		    } else "dangerouslySetInnerHTML" !== l && "children" !== l && "suppressContentEditableWarning" !== l && "suppressHydrationWarning" !== l && "autoFocus" !== l && (ea.hasOwnProperty(l) ? f || (f = []) : (f = f || []).push(l, null));
		    for (l in d) {
		      var k = d[l];
		      h = null != e ? e[l] : void 0;
		      if (d.hasOwnProperty(l) && k !== h && (null != k || null != h)) if ("style" === l) {
		        if (h) {
		          for (g in h) !h.hasOwnProperty(g) || k && k.hasOwnProperty(g) || (c || (c = {}), c[g] = "");
		          for (g in k) k.hasOwnProperty(g) && h[g] !== k[g] && (c || (c = {}), c[g] = k[g]);
		        } else c || (f || (f = []), f.push(l, c)), c = k;
		      } else "dangerouslySetInnerHTML" === l ? (k = k ? k.__html : void 0, h = h ? h.__html : void 0, null != k && h !== k && (f = f || []).push(l, k)) : "children" === l ? "string" !== typeof k && "number" !== typeof k || (f = f || []).push(l, "" + k) : "suppressContentEditableWarning" !== l && "suppressHydrationWarning" !== l && (ea.hasOwnProperty(l) ? (null != k && "onScroll" === l && D("scroll", a), f || h === k || (f = [])) : (f = f || []).push(l, k));
		    }
		    c && (f = f || []).push("style", c);
		    var l = f;
		    if (b.updateQueue = l) b.flags |= 4;
		  }
		};
		Dj = function (a, b, c, d) {
		  c !== d && (b.flags |= 4);
		};
		function Ej(a, b) {
		  if (!I) switch (a.tailMode) {
		    case "hidden":
		      b = a.tail;
		      for (var c = null; null !== b;) null !== b.alternate && (c = b), b = b.sibling;
		      null === c ? a.tail = null : c.sibling = null;
		      break;
		    case "collapsed":
		      c = a.tail;
		      for (var d = null; null !== c;) null !== c.alternate && (d = c), c = c.sibling;
		      null === d ? b || null === a.tail ? a.tail = null : a.tail.sibling = null : d.sibling = null;
		  }
		}
		function S(a) {
		  var b = null !== a.alternate && a.alternate.child === a.child,
		    c = 0,
		    d = 0;
		  if (b) for (var e = a.child; null !== e;) c |= e.lanes | e.childLanes, d |= e.subtreeFlags & 14680064, d |= e.flags & 14680064, e.return = a, e = e.sibling;else for (e = a.child; null !== e;) c |= e.lanes | e.childLanes, d |= e.subtreeFlags, d |= e.flags, e.return = a, e = e.sibling;
		  a.subtreeFlags |= d;
		  a.childLanes = c;
		  return b;
		}
		function Fj(a, b, c) {
		  var d = b.pendingProps;
		  wg(b);
		  switch (b.tag) {
		    case 2:
		    case 16:
		    case 15:
		    case 0:
		    case 11:
		    case 7:
		    case 8:
		    case 12:
		    case 9:
		    case 14:
		      return S(b), null;
		    case 1:
		      return Zf(b.type) && $f(), S(b), null;
		    case 3:
		      d = b.stateNode;
		      Jh();
		      E(Wf);
		      E(H);
		      Oh();
		      d.pendingContext && (d.context = d.pendingContext, d.pendingContext = null);
		      if (null === a || null === a.child) Gg(b) ? b.flags |= 4 : null === a || a.memoizedState.isDehydrated && 0 === (b.flags & 256) || (b.flags |= 1024, null !== zg && (Gj(zg), zg = null));
		      Bj(a, b);
		      S(b);
		      return null;
		    case 5:
		      Lh(b);
		      var e = Hh(Gh.current);
		      c = b.type;
		      if (null !== a && null != b.stateNode) Cj(a, b, c, d, e), a.ref !== b.ref && (b.flags |= 512, b.flags |= 2097152);else {
		        if (!d) {
		          if (null === b.stateNode) throw Error(p(166));
		          S(b);
		          return null;
		        }
		        a = Hh(Eh.current);
		        if (Gg(b)) {
		          d = b.stateNode;
		          c = b.type;
		          var f = b.memoizedProps;
		          d[Of] = b;
		          d[Pf] = f;
		          a = 0 !== (b.mode & 1);
		          switch (c) {
		            case "dialog":
		              D("cancel", d);
		              D("close", d);
		              break;
		            case "iframe":
		            case "object":
		            case "embed":
		              D("load", d);
		              break;
		            case "video":
		            case "audio":
		              for (e = 0; e < lf.length; e++) D(lf[e], d);
		              break;
		            case "source":
		              D("error", d);
		              break;
		            case "img":
		            case "image":
		            case "link":
		              D("error", d);
		              D("load", d);
		              break;
		            case "details":
		              D("toggle", d);
		              break;
		            case "input":
		              Za(d, f);
		              D("invalid", d);
		              break;
		            case "select":
		              d._wrapperState = {
		                wasMultiple: !!f.multiple
		              };
		              D("invalid", d);
		              break;
		            case "textarea":
		              hb(d, f), D("invalid", d);
		          }
		          ub(c, f);
		          e = null;
		          for (var g in f) if (f.hasOwnProperty(g)) {
		            var h = f[g];
		            "children" === g ? "string" === typeof h ? d.textContent !== h && (!0 !== f.suppressHydrationWarning && Af(d.textContent, h, a), e = ["children", h]) : "number" === typeof h && d.textContent !== "" + h && (!0 !== f.suppressHydrationWarning && Af(d.textContent, h, a), e = ["children", "" + h]) : ea.hasOwnProperty(g) && null != h && "onScroll" === g && D("scroll", d);
		          }
		          switch (c) {
		            case "input":
		              Va(d);
		              db(d, f, !0);
		              break;
		            case "textarea":
		              Va(d);
		              jb(d);
		              break;
		            case "select":
		            case "option":
		              break;
		            default:
		              "function" === typeof f.onClick && (d.onclick = Bf);
		          }
		          d = e;
		          b.updateQueue = d;
		          null !== d && (b.flags |= 4);
		        } else {
		          g = 9 === e.nodeType ? e : e.ownerDocument;
		          "http://www.w3.org/1999/xhtml" === a && (a = kb(c));
		          "http://www.w3.org/1999/xhtml" === a ? "script" === c ? (a = g.createElement("div"), a.innerHTML = "<script>\x3c/script>", a = a.removeChild(a.firstChild)) : "string" === typeof d.is ? a = g.createElement(c, {
		            is: d.is
		          }) : (a = g.createElement(c), "select" === c && (g = a, d.multiple ? g.multiple = !0 : d.size && (g.size = d.size))) : a = g.createElementNS(a, c);
		          a[Of] = b;
		          a[Pf] = d;
		          Aj(a, b, !1, !1);
		          b.stateNode = a;
		          a: {
		            g = vb(c, d);
		            switch (c) {
		              case "dialog":
		                D("cancel", a);
		                D("close", a);
		                e = d;
		                break;
		              case "iframe":
		              case "object":
		              case "embed":
		                D("load", a);
		                e = d;
		                break;
		              case "video":
		              case "audio":
		                for (e = 0; e < lf.length; e++) D(lf[e], a);
		                e = d;
		                break;
		              case "source":
		                D("error", a);
		                e = d;
		                break;
		              case "img":
		              case "image":
		              case "link":
		                D("error", a);
		                D("load", a);
		                e = d;
		                break;
		              case "details":
		                D("toggle", a);
		                e = d;
		                break;
		              case "input":
		                Za(a, d);
		                e = Ya(a, d);
		                D("invalid", a);
		                break;
		              case "option":
		                e = d;
		                break;
		              case "select":
		                a._wrapperState = {
		                  wasMultiple: !!d.multiple
		                };
		                e = A({}, d, {
		                  value: void 0
		                });
		                D("invalid", a);
		                break;
		              case "textarea":
		                hb(a, d);
		                e = gb(a, d);
		                D("invalid", a);
		                break;
		              default:
		                e = d;
		            }
		            ub(c, e);
		            h = e;
		            for (f in h) if (h.hasOwnProperty(f)) {
		              var k = h[f];
		              "style" === f ? sb(a, k) : "dangerouslySetInnerHTML" === f ? (k = k ? k.__html : void 0, null != k && nb(a, k)) : "children" === f ? "string" === typeof k ? ("textarea" !== c || "" !== k) && ob(a, k) : "number" === typeof k && ob(a, "" + k) : "suppressContentEditableWarning" !== f && "suppressHydrationWarning" !== f && "autoFocus" !== f && (ea.hasOwnProperty(f) ? null != k && "onScroll" === f && D("scroll", a) : null != k && ta(a, f, k, g));
		            }
		            switch (c) {
		              case "input":
		                Va(a);
		                db(a, d, !1);
		                break;
		              case "textarea":
		                Va(a);
		                jb(a);
		                break;
		              case "option":
		                null != d.value && a.setAttribute("value", "" + Sa(d.value));
		                break;
		              case "select":
		                a.multiple = !!d.multiple;
		                f = d.value;
		                null != f ? fb(a, !!d.multiple, f, !1) : null != d.defaultValue && fb(a, !!d.multiple, d.defaultValue, !0);
		                break;
		              default:
		                "function" === typeof e.onClick && (a.onclick = Bf);
		            }
		            switch (c) {
		              case "button":
		              case "input":
		              case "select":
		              case "textarea":
		                d = !!d.autoFocus;
		                break a;
		              case "img":
		                d = !0;
		                break a;
		              default:
		                d = !1;
		            }
		          }
		          d && (b.flags |= 4);
		        }
		        null !== b.ref && (b.flags |= 512, b.flags |= 2097152);
		      }
		      S(b);
		      return null;
		    case 6:
		      if (a && null != b.stateNode) Dj(a, b, a.memoizedProps, d);else {
		        if ("string" !== typeof d && null === b.stateNode) throw Error(p(166));
		        c = Hh(Gh.current);
		        Hh(Eh.current);
		        if (Gg(b)) {
		          d = b.stateNode;
		          c = b.memoizedProps;
		          d[Of] = b;
		          if (f = d.nodeValue !== c) if (a = xg, null !== a) switch (a.tag) {
		            case 3:
		              Af(d.nodeValue, c, 0 !== (a.mode & 1));
		              break;
		            case 5:
		              !0 !== a.memoizedProps.suppressHydrationWarning && Af(d.nodeValue, c, 0 !== (a.mode & 1));
		          }
		          f && (b.flags |= 4);
		        } else d = (9 === c.nodeType ? c : c.ownerDocument).createTextNode(d), d[Of] = b, b.stateNode = d;
		      }
		      S(b);
		      return null;
		    case 13:
		      E(M);
		      d = b.memoizedState;
		      if (null === a || null !== a.memoizedState && null !== a.memoizedState.dehydrated) {
		        if (I && null !== yg && 0 !== (b.mode & 1) && 0 === (b.flags & 128)) Hg(), Ig(), b.flags |= 98560, f = !1;else if (f = Gg(b), null !== d && null !== d.dehydrated) {
		          if (null === a) {
		            if (!f) throw Error(p(318));
		            f = b.memoizedState;
		            f = null !== f ? f.dehydrated : null;
		            if (!f) throw Error(p(317));
		            f[Of] = b;
		          } else Ig(), 0 === (b.flags & 128) && (b.memoizedState = null), b.flags |= 4;
		          S(b);
		          f = !1;
		        } else null !== zg && (Gj(zg), zg = null), f = !0;
		        if (!f) return b.flags & 65536 ? b : null;
		      }
		      if (0 !== (b.flags & 128)) return b.lanes = c, b;
		      d = null !== d;
		      d !== (null !== a && null !== a.memoizedState) && d && (b.child.flags |= 8192, 0 !== (b.mode & 1) && (null === a || 0 !== (M.current & 1) ? 0 === T && (T = 3) : uj()));
		      null !== b.updateQueue && (b.flags |= 4);
		      S(b);
		      return null;
		    case 4:
		      return Jh(), Bj(a, b), null === a && sf(b.stateNode.containerInfo), S(b), null;
		    case 10:
		      return Rg(b.type._context), S(b), null;
		    case 17:
		      return Zf(b.type) && $f(), S(b), null;
		    case 19:
		      E(M);
		      f = b.memoizedState;
		      if (null === f) return S(b), null;
		      d = 0 !== (b.flags & 128);
		      g = f.rendering;
		      if (null === g) {
		        if (d) Ej(f, !1);else {
		          if (0 !== T || null !== a && 0 !== (a.flags & 128)) for (a = b.child; null !== a;) {
		            g = Mh(a);
		            if (null !== g) {
		              b.flags |= 128;
		              Ej(f, !1);
		              d = g.updateQueue;
		              null !== d && (b.updateQueue = d, b.flags |= 4);
		              b.subtreeFlags = 0;
		              d = c;
		              for (c = b.child; null !== c;) f = c, a = d, f.flags &= 14680066, g = f.alternate, null === g ? (f.childLanes = 0, f.lanes = a, f.child = null, f.subtreeFlags = 0, f.memoizedProps = null, f.memoizedState = null, f.updateQueue = null, f.dependencies = null, f.stateNode = null) : (f.childLanes = g.childLanes, f.lanes = g.lanes, f.child = g.child, f.subtreeFlags = 0, f.deletions = null, f.memoizedProps = g.memoizedProps, f.memoizedState = g.memoizedState, f.updateQueue = g.updateQueue, f.type = g.type, a = g.dependencies, f.dependencies = null === a ? null : {
		                lanes: a.lanes,
		                firstContext: a.firstContext
		              }), c = c.sibling;
		              G(M, M.current & 1 | 2);
		              return b.child;
		            }
		            a = a.sibling;
		          }
		          null !== f.tail && B() > Hj && (b.flags |= 128, d = !0, Ej(f, !1), b.lanes = 4194304);
		        }
		      } else {
		        if (!d) if (a = Mh(g), null !== a) {
		          if (b.flags |= 128, d = !0, c = a.updateQueue, null !== c && (b.updateQueue = c, b.flags |= 4), Ej(f, !0), null === f.tail && "hidden" === f.tailMode && !g.alternate && !I) return S(b), null;
		        } else 2 * B() - f.renderingStartTime > Hj && 1073741824 !== c && (b.flags |= 128, d = !0, Ej(f, !1), b.lanes = 4194304);
		        f.isBackwards ? (g.sibling = b.child, b.child = g) : (c = f.last, null !== c ? c.sibling = g : b.child = g, f.last = g);
		      }
		      if (null !== f.tail) return b = f.tail, f.rendering = b, f.tail = b.sibling, f.renderingStartTime = B(), b.sibling = null, c = M.current, G(M, d ? c & 1 | 2 : c & 1), b;
		      S(b);
		      return null;
		    case 22:
		    case 23:
		      return Ij(), d = null !== b.memoizedState, null !== a && null !== a.memoizedState !== d && (b.flags |= 8192), d && 0 !== (b.mode & 1) ? 0 !== (gj & 1073741824) && (S(b), b.subtreeFlags & 6 && (b.flags |= 8192)) : S(b), null;
		    case 24:
		      return null;
		    case 25:
		      return null;
		  }
		  throw Error(p(156, b.tag));
		}
		function Jj(a, b) {
		  wg(b);
		  switch (b.tag) {
		    case 1:
		      return Zf(b.type) && $f(), a = b.flags, a & 65536 ? (b.flags = a & -65537 | 128, b) : null;
		    case 3:
		      return Jh(), E(Wf), E(H), Oh(), a = b.flags, 0 !== (a & 65536) && 0 === (a & 128) ? (b.flags = a & -65537 | 128, b) : null;
		    case 5:
		      return Lh(b), null;
		    case 13:
		      E(M);
		      a = b.memoizedState;
		      if (null !== a && null !== a.dehydrated) {
		        if (null === b.alternate) throw Error(p(340));
		        Ig();
		      }
		      a = b.flags;
		      return a & 65536 ? (b.flags = a & -65537 | 128, b) : null;
		    case 19:
		      return E(M), null;
		    case 4:
		      return Jh(), null;
		    case 10:
		      return Rg(b.type._context), null;
		    case 22:
		    case 23:
		      return Ij(), null;
		    case 24:
		      return null;
		    default:
		      return null;
		  }
		}
		var Kj = !1,
		  U = !1,
		  Lj = "function" === typeof WeakSet ? WeakSet : Set,
		  V = null;
		function Mj(a, b) {
		  var c = a.ref;
		  if (null !== c) if ("function" === typeof c) try {
		    c(null);
		  } catch (d) {
		    W(a, b, d);
		  } else c.current = null;
		}
		function Nj(a, b, c) {
		  try {
		    c();
		  } catch (d) {
		    W(a, b, d);
		  }
		}
		var Oj = !1;
		function Pj(a, b) {
		  Cf = dd;
		  a = Me();
		  if (Ne(a)) {
		    if ("selectionStart" in a) var c = {
		      start: a.selectionStart,
		      end: a.selectionEnd
		    };else a: {
		      c = (c = a.ownerDocument) && c.defaultView || window;
		      var d = c.getSelection && c.getSelection();
		      if (d && 0 !== d.rangeCount) {
		        c = d.anchorNode;
		        var e = d.anchorOffset,
		          f = d.focusNode;
		        d = d.focusOffset;
		        try {
		          c.nodeType, f.nodeType;
		        } catch (F) {
		          c = null;
		          break a;
		        }
		        var g = 0,
		          h = -1,
		          k = -1,
		          l = 0,
		          m = 0,
		          q = a,
		          r = null;
		        b: for (;;) {
		          for (var y;;) {
		            q !== c || 0 !== e && 3 !== q.nodeType || (h = g + e);
		            q !== f || 0 !== d && 3 !== q.nodeType || (k = g + d);
		            3 === q.nodeType && (g += q.nodeValue.length);
		            if (null === (y = q.firstChild)) break;
		            r = q;
		            q = y;
		          }
		          for (;;) {
		            if (q === a) break b;
		            r === c && ++l === e && (h = g);
		            r === f && ++m === d && (k = g);
		            if (null !== (y = q.nextSibling)) break;
		            q = r;
		            r = q.parentNode;
		          }
		          q = y;
		        }
		        c = -1 === h || -1 === k ? null : {
		          start: h,
		          end: k
		        };
		      } else c = null;
		    }
		    c = c || {
		      start: 0,
		      end: 0
		    };
		  } else c = null;
		  Df = {
		    focusedElem: a,
		    selectionRange: c
		  };
		  dd = !1;
		  for (V = b; null !== V;) if (b = V, a = b.child, 0 !== (b.subtreeFlags & 1028) && null !== a) a.return = b, V = a;else for (; null !== V;) {
		    b = V;
		    try {
		      var n = b.alternate;
		      if (0 !== (b.flags & 1024)) switch (b.tag) {
		        case 0:
		        case 11:
		        case 15:
		          break;
		        case 1:
		          if (null !== n) {
		            var t = n.memoizedProps,
		              J = n.memoizedState,
		              x = b.stateNode,
		              w = x.getSnapshotBeforeUpdate(b.elementType === b.type ? t : Lg(b.type, t), J);
		            x.__reactInternalSnapshotBeforeUpdate = w;
		          }
		          break;
		        case 3:
		          var u = b.stateNode.containerInfo;
		          1 === u.nodeType ? u.textContent = "" : 9 === u.nodeType && u.documentElement && u.removeChild(u.documentElement);
		          break;
		        case 5:
		        case 6:
		        case 4:
		        case 17:
		          break;
		        default:
		          throw Error(p(163));
		      }
		    } catch (F) {
		      W(b, b.return, F);
		    }
		    a = b.sibling;
		    if (null !== a) {
		      a.return = b.return;
		      V = a;
		      break;
		    }
		    V = b.return;
		  }
		  n = Oj;
		  Oj = !1;
		  return n;
		}
		function Qj(a, b, c) {
		  var d = b.updateQueue;
		  d = null !== d ? d.lastEffect : null;
		  if (null !== d) {
		    var e = d = d.next;
		    do {
		      if ((e.tag & a) === a) {
		        var f = e.destroy;
		        e.destroy = void 0;
		        void 0 !== f && Nj(b, c, f);
		      }
		      e = e.next;
		    } while (e !== d);
		  }
		}
		function Rj(a, b) {
		  b = b.updateQueue;
		  b = null !== b ? b.lastEffect : null;
		  if (null !== b) {
		    var c = b = b.next;
		    do {
		      if ((c.tag & a) === a) {
		        var d = c.create;
		        c.destroy = d();
		      }
		      c = c.next;
		    } while (c !== b);
		  }
		}
		function Sj(a) {
		  var b = a.ref;
		  if (null !== b) {
		    var c = a.stateNode;
		    switch (a.tag) {
		      case 5:
		        a = c;
		        break;
		      default:
		        a = c;
		    }
		    "function" === typeof b ? b(a) : b.current = a;
		  }
		}
		function Tj(a) {
		  var b = a.alternate;
		  null !== b && (a.alternate = null, Tj(b));
		  a.child = null;
		  a.deletions = null;
		  a.sibling = null;
		  5 === a.tag && (b = a.stateNode, null !== b && (delete b[Of], delete b[Pf], delete b[of], delete b[Qf], delete b[Rf]));
		  a.stateNode = null;
		  a.return = null;
		  a.dependencies = null;
		  a.memoizedProps = null;
		  a.memoizedState = null;
		  a.pendingProps = null;
		  a.stateNode = null;
		  a.updateQueue = null;
		}
		function Uj(a) {
		  return 5 === a.tag || 3 === a.tag || 4 === a.tag;
		}
		function Vj(a) {
		  a: for (;;) {
		    for (; null === a.sibling;) {
		      if (null === a.return || Uj(a.return)) return null;
		      a = a.return;
		    }
		    a.sibling.return = a.return;
		    for (a = a.sibling; 5 !== a.tag && 6 !== a.tag && 18 !== a.tag;) {
		      if (a.flags & 2) continue a;
		      if (null === a.child || 4 === a.tag) continue a;else a.child.return = a, a = a.child;
		    }
		    if (!(a.flags & 2)) return a.stateNode;
		  }
		}
		function Wj(a, b, c) {
		  var d = a.tag;
		  if (5 === d || 6 === d) a = a.stateNode, b ? 8 === c.nodeType ? c.parentNode.insertBefore(a, b) : c.insertBefore(a, b) : (8 === c.nodeType ? (b = c.parentNode, b.insertBefore(a, c)) : (b = c, b.appendChild(a)), c = c._reactRootContainer, null !== c && void 0 !== c || null !== b.onclick || (b.onclick = Bf));else if (4 !== d && (a = a.child, null !== a)) for (Wj(a, b, c), a = a.sibling; null !== a;) Wj(a, b, c), a = a.sibling;
		}
		function Xj(a, b, c) {
		  var d = a.tag;
		  if (5 === d || 6 === d) a = a.stateNode, b ? c.insertBefore(a, b) : c.appendChild(a);else if (4 !== d && (a = a.child, null !== a)) for (Xj(a, b, c), a = a.sibling; null !== a;) Xj(a, b, c), a = a.sibling;
		}
		var X = null,
		  Yj = !1;
		function Zj(a, b, c) {
		  for (c = c.child; null !== c;) ak(a, b, c), c = c.sibling;
		}
		function ak(a, b, c) {
		  if (lc && "function" === typeof lc.onCommitFiberUnmount) try {
		    lc.onCommitFiberUnmount(kc, c);
		  } catch (h) {}
		  switch (c.tag) {
		    case 5:
		      U || Mj(c, b);
		    case 6:
		      var d = X,
		        e = Yj;
		      X = null;
		      Zj(a, b, c);
		      X = d;
		      Yj = e;
		      null !== X && (Yj ? (a = X, c = c.stateNode, 8 === a.nodeType ? a.parentNode.removeChild(c) : a.removeChild(c)) : X.removeChild(c.stateNode));
		      break;
		    case 18:
		      null !== X && (Yj ? (a = X, c = c.stateNode, 8 === a.nodeType ? Kf(a.parentNode, c) : 1 === a.nodeType && Kf(a, c), bd(a)) : Kf(X, c.stateNode));
		      break;
		    case 4:
		      d = X;
		      e = Yj;
		      X = c.stateNode.containerInfo;
		      Yj = !0;
		      Zj(a, b, c);
		      X = d;
		      Yj = e;
		      break;
		    case 0:
		    case 11:
		    case 14:
		    case 15:
		      if (!U && (d = c.updateQueue, null !== d && (d = d.lastEffect, null !== d))) {
		        e = d = d.next;
		        do {
		          var f = e,
		            g = f.destroy;
		          f = f.tag;
		          void 0 !== g && (0 !== (f & 2) ? Nj(c, b, g) : 0 !== (f & 4) && Nj(c, b, g));
		          e = e.next;
		        } while (e !== d);
		      }
		      Zj(a, b, c);
		      break;
		    case 1:
		      if (!U && (Mj(c, b), d = c.stateNode, "function" === typeof d.componentWillUnmount)) try {
		        d.props = c.memoizedProps, d.state = c.memoizedState, d.componentWillUnmount();
		      } catch (h) {
		        W(c, b, h);
		      }
		      Zj(a, b, c);
		      break;
		    case 21:
		      Zj(a, b, c);
		      break;
		    case 22:
		      c.mode & 1 ? (U = (d = U) || null !== c.memoizedState, Zj(a, b, c), U = d) : Zj(a, b, c);
		      break;
		    default:
		      Zj(a, b, c);
		  }
		}
		function bk(a) {
		  var b = a.updateQueue;
		  if (null !== b) {
		    a.updateQueue = null;
		    var c = a.stateNode;
		    null === c && (c = a.stateNode = new Lj());
		    b.forEach(function (b) {
		      var d = ck.bind(null, a, b);
		      c.has(b) || (c.add(b), b.then(d, d));
		    });
		  }
		}
		function dk(a, b) {
		  var c = b.deletions;
		  if (null !== c) for (var d = 0; d < c.length; d++) {
		    var e = c[d];
		    try {
		      var f = a,
		        g = b,
		        h = g;
		      a: for (; null !== h;) {
		        switch (h.tag) {
		          case 5:
		            X = h.stateNode;
		            Yj = !1;
		            break a;
		          case 3:
		            X = h.stateNode.containerInfo;
		            Yj = !0;
		            break a;
		          case 4:
		            X = h.stateNode.containerInfo;
		            Yj = !0;
		            break a;
		        }
		        h = h.return;
		      }
		      if (null === X) throw Error(p(160));
		      ak(f, g, e);
		      X = null;
		      Yj = !1;
		      var k = e.alternate;
		      null !== k && (k.return = null);
		      e.return = null;
		    } catch (l) {
		      W(e, b, l);
		    }
		  }
		  if (b.subtreeFlags & 12854) for (b = b.child; null !== b;) ek(b, a), b = b.sibling;
		}
		function ek(a, b) {
		  var c = a.alternate,
		    d = a.flags;
		  switch (a.tag) {
		    case 0:
		    case 11:
		    case 14:
		    case 15:
		      dk(b, a);
		      fk(a);
		      if (d & 4) {
		        try {
		          Qj(3, a, a.return), Rj(3, a);
		        } catch (t) {
		          W(a, a.return, t);
		        }
		        try {
		          Qj(5, a, a.return);
		        } catch (t) {
		          W(a, a.return, t);
		        }
		      }
		      break;
		    case 1:
		      dk(b, a);
		      fk(a);
		      d & 512 && null !== c && Mj(c, c.return);
		      break;
		    case 5:
		      dk(b, a);
		      fk(a);
		      d & 512 && null !== c && Mj(c, c.return);
		      if (a.flags & 32) {
		        var e = a.stateNode;
		        try {
		          ob(e, "");
		        } catch (t) {
		          W(a, a.return, t);
		        }
		      }
		      if (d & 4 && (e = a.stateNode, null != e)) {
		        var f = a.memoizedProps,
		          g = null !== c ? c.memoizedProps : f,
		          h = a.type,
		          k = a.updateQueue;
		        a.updateQueue = null;
		        if (null !== k) try {
		          "input" === h && "radio" === f.type && null != f.name && ab(e, f);
		          vb(h, g);
		          var l = vb(h, f);
		          for (g = 0; g < k.length; g += 2) {
		            var m = k[g],
		              q = k[g + 1];
		            "style" === m ? sb(e, q) : "dangerouslySetInnerHTML" === m ? nb(e, q) : "children" === m ? ob(e, q) : ta(e, m, q, l);
		          }
		          switch (h) {
		            case "input":
		              bb(e, f);
		              break;
		            case "textarea":
		              ib(e, f);
		              break;
		            case "select":
		              var r = e._wrapperState.wasMultiple;
		              e._wrapperState.wasMultiple = !!f.multiple;
		              var y = f.value;
		              null != y ? fb(e, !!f.multiple, y, !1) : r !== !!f.multiple && (null != f.defaultValue ? fb(e, !!f.multiple, f.defaultValue, !0) : fb(e, !!f.multiple, f.multiple ? [] : "", !1));
		          }
		          e[Pf] = f;
		        } catch (t) {
		          W(a, a.return, t);
		        }
		      }
		      break;
		    case 6:
		      dk(b, a);
		      fk(a);
		      if (d & 4) {
		        if (null === a.stateNode) throw Error(p(162));
		        e = a.stateNode;
		        f = a.memoizedProps;
		        try {
		          e.nodeValue = f;
		        } catch (t) {
		          W(a, a.return, t);
		        }
		      }
		      break;
		    case 3:
		      dk(b, a);
		      fk(a);
		      if (d & 4 && null !== c && c.memoizedState.isDehydrated) try {
		        bd(b.containerInfo);
		      } catch (t) {
		        W(a, a.return, t);
		      }
		      break;
		    case 4:
		      dk(b, a);
		      fk(a);
		      break;
		    case 13:
		      dk(b, a);
		      fk(a);
		      e = a.child;
		      e.flags & 8192 && (f = null !== e.memoizedState, e.stateNode.isHidden = f, !f || null !== e.alternate && null !== e.alternate.memoizedState || (gk = B()));
		      d & 4 && bk(a);
		      break;
		    case 22:
		      m = null !== c && null !== c.memoizedState;
		      a.mode & 1 ? (U = (l = U) || m, dk(b, a), U = l) : dk(b, a);
		      fk(a);
		      if (d & 8192) {
		        l = null !== a.memoizedState;
		        if ((a.stateNode.isHidden = l) && !m && 0 !== (a.mode & 1)) for (V = a, m = a.child; null !== m;) {
		          for (q = V = m; null !== V;) {
		            r = V;
		            y = r.child;
		            switch (r.tag) {
		              case 0:
		              case 11:
		              case 14:
		              case 15:
		                Qj(4, r, r.return);
		                break;
		              case 1:
		                Mj(r, r.return);
		                var n = r.stateNode;
		                if ("function" === typeof n.componentWillUnmount) {
		                  d = r;
		                  c = r.return;
		                  try {
		                    b = d, n.props = b.memoizedProps, n.state = b.memoizedState, n.componentWillUnmount();
		                  } catch (t) {
		                    W(d, c, t);
		                  }
		                }
		                break;
		              case 5:
		                Mj(r, r.return);
		                break;
		              case 22:
		                if (null !== r.memoizedState) {
		                  hk(q);
		                  continue;
		                }
		            }
		            null !== y ? (y.return = r, V = y) : hk(q);
		          }
		          m = m.sibling;
		        }
		        a: for (m = null, q = a;;) {
		          if (5 === q.tag) {
		            if (null === m) {
		              m = q;
		              try {
		                e = q.stateNode, l ? (f = e.style, "function" === typeof f.setProperty ? f.setProperty("display", "none", "important") : f.display = "none") : (h = q.stateNode, k = q.memoizedProps.style, g = void 0 !== k && null !== k && k.hasOwnProperty("display") ? k.display : null, h.style.display = rb("display", g));
		              } catch (t) {
		                W(a, a.return, t);
		              }
		            }
		          } else if (6 === q.tag) {
		            if (null === m) try {
		              q.stateNode.nodeValue = l ? "" : q.memoizedProps;
		            } catch (t) {
		              W(a, a.return, t);
		            }
		          } else if ((22 !== q.tag && 23 !== q.tag || null === q.memoizedState || q === a) && null !== q.child) {
		            q.child.return = q;
		            q = q.child;
		            continue;
		          }
		          if (q === a) break a;
		          for (; null === q.sibling;) {
		            if (null === q.return || q.return === a) break a;
		            m === q && (m = null);
		            q = q.return;
		          }
		          m === q && (m = null);
		          q.sibling.return = q.return;
		          q = q.sibling;
		        }
		      }
		      break;
		    case 19:
		      dk(b, a);
		      fk(a);
		      d & 4 && bk(a);
		      break;
		    case 21:
		      break;
		    default:
		      dk(b, a), fk(a);
		  }
		}
		function fk(a) {
		  var b = a.flags;
		  if (b & 2) {
		    try {
		      a: {
		        for (var c = a.return; null !== c;) {
		          if (Uj(c)) {
		            var d = c;
		            break a;
		          }
		          c = c.return;
		        }
		        throw Error(p(160));
		      }
		      switch (d.tag) {
		        case 5:
		          var e = d.stateNode;
		          d.flags & 32 && (ob(e, ""), d.flags &= -33);
		          var f = Vj(a);
		          Xj(a, f, e);
		          break;
		        case 3:
		        case 4:
		          var g = d.stateNode.containerInfo,
		            h = Vj(a);
		          Wj(a, h, g);
		          break;
		        default:
		          throw Error(p(161));
		      }
		    } catch (k) {
		      W(a, a.return, k);
		    }
		    a.flags &= -3;
		  }
		  b & 4096 && (a.flags &= -4097);
		}
		function ik(a, b, c) {
		  V = a;
		  jk(a);
		}
		function jk(a, b, c) {
		  for (var d = 0 !== (a.mode & 1); null !== V;) {
		    var e = V,
		      f = e.child;
		    if (22 === e.tag && d) {
		      var g = null !== e.memoizedState || Kj;
		      if (!g) {
		        var h = e.alternate,
		          k = null !== h && null !== h.memoizedState || U;
		        h = Kj;
		        var l = U;
		        Kj = g;
		        if ((U = k) && !l) for (V = e; null !== V;) g = V, k = g.child, 22 === g.tag && null !== g.memoizedState ? kk(e) : null !== k ? (k.return = g, V = k) : kk(e);
		        for (; null !== f;) V = f, jk(f), f = f.sibling;
		        V = e;
		        Kj = h;
		        U = l;
		      }
		      lk(a);
		    } else 0 !== (e.subtreeFlags & 8772) && null !== f ? (f.return = e, V = f) : lk(a);
		  }
		}
		function lk(a) {
		  for (; null !== V;) {
		    var b = V;
		    if (0 !== (b.flags & 8772)) {
		      var c = b.alternate;
		      try {
		        if (0 !== (b.flags & 8772)) switch (b.tag) {
		          case 0:
		          case 11:
		          case 15:
		            U || Rj(5, b);
		            break;
		          case 1:
		            var d = b.stateNode;
		            if (b.flags & 4 && !U) if (null === c) d.componentDidMount();else {
		              var e = b.elementType === b.type ? c.memoizedProps : Lg(b.type, c.memoizedProps);
		              d.componentDidUpdate(e, c.memoizedState, d.__reactInternalSnapshotBeforeUpdate);
		            }
		            var f = b.updateQueue;
		            null !== f && ih(b, f, d);
		            break;
		          case 3:
		            var g = b.updateQueue;
		            if (null !== g) {
		              c = null;
		              if (null !== b.child) switch (b.child.tag) {
		                case 5:
		                  c = b.child.stateNode;
		                  break;
		                case 1:
		                  c = b.child.stateNode;
		              }
		              ih(b, g, c);
		            }
		            break;
		          case 5:
		            var h = b.stateNode;
		            if (null === c && b.flags & 4) {
		              c = h;
		              var k = b.memoizedProps;
		              switch (b.type) {
		                case "button":
		                case "input":
		                case "select":
		                case "textarea":
		                  k.autoFocus && c.focus();
		                  break;
		                case "img":
		                  k.src && (c.src = k.src);
		              }
		            }
		            break;
		          case 6:
		            break;
		          case 4:
		            break;
		          case 12:
		            break;
		          case 13:
		            if (null === b.memoizedState) {
		              var l = b.alternate;
		              if (null !== l) {
		                var m = l.memoizedState;
		                if (null !== m) {
		                  var q = m.dehydrated;
		                  null !== q && bd(q);
		                }
		              }
		            }
		            break;
		          case 19:
		          case 17:
		          case 21:
		          case 22:
		          case 23:
		          case 25:
		            break;
		          default:
		            throw Error(p(163));
		        }
		        U || b.flags & 512 && Sj(b);
		      } catch (r) {
		        W(b, b.return, r);
		      }
		    }
		    if (b === a) {
		      V = null;
		      break;
		    }
		    c = b.sibling;
		    if (null !== c) {
		      c.return = b.return;
		      V = c;
		      break;
		    }
		    V = b.return;
		  }
		}
		function hk(a) {
		  for (; null !== V;) {
		    var b = V;
		    if (b === a) {
		      V = null;
		      break;
		    }
		    var c = b.sibling;
		    if (null !== c) {
		      c.return = b.return;
		      V = c;
		      break;
		    }
		    V = b.return;
		  }
		}
		function kk(a) {
		  for (; null !== V;) {
		    var b = V;
		    try {
		      switch (b.tag) {
		        case 0:
		        case 11:
		        case 15:
		          var c = b.return;
		          try {
		            Rj(4, b);
		          } catch (k) {
		            W(b, c, k);
		          }
		          break;
		        case 1:
		          var d = b.stateNode;
		          if ("function" === typeof d.componentDidMount) {
		            var e = b.return;
		            try {
		              d.componentDidMount();
		            } catch (k) {
		              W(b, e, k);
		            }
		          }
		          var f = b.return;
		          try {
		            Sj(b);
		          } catch (k) {
		            W(b, f, k);
		          }
		          break;
		        case 5:
		          var g = b.return;
		          try {
		            Sj(b);
		          } catch (k) {
		            W(b, g, k);
		          }
		      }
		    } catch (k) {
		      W(b, b.return, k);
		    }
		    if (b === a) {
		      V = null;
		      break;
		    }
		    var h = b.sibling;
		    if (null !== h) {
		      h.return = b.return;
		      V = h;
		      break;
		    }
		    V = b.return;
		  }
		}
		var mk = Math.ceil,
		  nk = ua.ReactCurrentDispatcher,
		  ok = ua.ReactCurrentOwner,
		  pk = ua.ReactCurrentBatchConfig,
		  K = 0,
		  R = null,
		  Y = null,
		  Z = 0,
		  gj = 0,
		  fj = Uf(0),
		  T = 0,
		  qk = null,
		  hh = 0,
		  rk = 0,
		  sk = 0,
		  tk = null,
		  uk = null,
		  gk = 0,
		  Hj = Infinity,
		  vk = null,
		  Pi = !1,
		  Qi = null,
		  Si = null,
		  wk = !1,
		  xk = null,
		  yk = 0,
		  zk = 0,
		  Ak = null,
		  Bk = -1,
		  Ck = 0;
		function L() {
		  return 0 !== (K & 6) ? B() : -1 !== Bk ? Bk : Bk = B();
		}
		function lh(a) {
		  if (0 === (a.mode & 1)) return 1;
		  if (0 !== (K & 2) && 0 !== Z) return Z & -Z;
		  if (null !== Kg.transition) return 0 === Ck && (Ck = yc()), Ck;
		  a = C;
		  if (0 !== a) return a;
		  a = window.event;
		  a = void 0 === a ? 16 : jd(a.type);
		  return a;
		}
		function mh(a, b, c, d) {
		  if (50 < zk) throw zk = 0, Ak = null, Error(p(185));
		  Ac(a, c, d);
		  if (0 === (K & 2) || a !== R) a === R && (0 === (K & 2) && (rk |= c), 4 === T && Dk(a, Z)), Ek(a, d), 1 === c && 0 === K && 0 === (b.mode & 1) && (Hj = B() + 500, fg && jg());
		}
		function Ek(a, b) {
		  var c = a.callbackNode;
		  wc(a, b);
		  var d = uc(a, a === R ? Z : 0);
		  if (0 === d) null !== c && bc(c), a.callbackNode = null, a.callbackPriority = 0;else if (b = d & -d, a.callbackPriority !== b) {
		    null != c && bc(c);
		    if (1 === b) 0 === a.tag ? ig(Fk.bind(null, a)) : hg(Fk.bind(null, a)), Jf(function () {
		      0 === (K & 6) && jg();
		    }), c = null;else {
		      switch (Dc(d)) {
		        case 1:
		          c = fc;
		          break;
		        case 4:
		          c = gc;
		          break;
		        case 16:
		          c = hc;
		          break;
		        case 536870912:
		          c = jc;
		          break;
		        default:
		          c = hc;
		      }
		      c = Gk(c, Hk.bind(null, a));
		    }
		    a.callbackPriority = b;
		    a.callbackNode = c;
		  }
		}
		function Hk(a, b) {
		  Bk = -1;
		  Ck = 0;
		  if (0 !== (K & 6)) throw Error(p(327));
		  var c = a.callbackNode;
		  if (Ik() && a.callbackNode !== c) return null;
		  var d = uc(a, a === R ? Z : 0);
		  if (0 === d) return null;
		  if (0 !== (d & 30) || 0 !== (d & a.expiredLanes) || b) b = Jk(a, d);else {
		    b = d;
		    var e = K;
		    K |= 2;
		    var f = Kk();
		    if (R !== a || Z !== b) vk = null, Hj = B() + 500, Lk(a, b);
		    do try {
		      Mk();
		      break;
		    } catch (h) {
		      Nk(a, h);
		    } while (1);
		    Qg();
		    nk.current = f;
		    K = e;
		    null !== Y ? b = 0 : (R = null, Z = 0, b = T);
		  }
		  if (0 !== b) {
		    2 === b && (e = xc(a), 0 !== e && (d = e, b = Ok(a, e)));
		    if (1 === b) throw c = qk, Lk(a, 0), Dk(a, d), Ek(a, B()), c;
		    if (6 === b) Dk(a, d);else {
		      e = a.current.alternate;
		      if (0 === (d & 30) && !Pk(e) && (b = Jk(a, d), 2 === b && (f = xc(a), 0 !== f && (d = f, b = Ok(a, f))), 1 === b)) throw c = qk, Lk(a, 0), Dk(a, d), Ek(a, B()), c;
		      a.finishedWork = e;
		      a.finishedLanes = d;
		      switch (b) {
		        case 0:
		        case 1:
		          throw Error(p(345));
		        case 2:
		          Qk(a, uk, vk);
		          break;
		        case 3:
		          Dk(a, d);
		          if ((d & 130023424) === d && (b = gk + 500 - B(), 10 < b)) {
		            if (0 !== uc(a, 0)) break;
		            e = a.suspendedLanes;
		            if ((e & d) !== d) {
		              L();
		              a.pingedLanes |= a.suspendedLanes & e;
		              break;
		            }
		            a.timeoutHandle = Ff(Qk.bind(null, a, uk, vk), b);
		            break;
		          }
		          Qk(a, uk, vk);
		          break;
		        case 4:
		          Dk(a, d);
		          if ((d & 4194240) === d) break;
		          b = a.eventTimes;
		          for (e = -1; 0 < d;) {
		            var g = 31 - oc(d);
		            f = 1 << g;
		            g = b[g];
		            g > e && (e = g);
		            d &= ~f;
		          }
		          d = e;
		          d = B() - d;
		          d = (120 > d ? 120 : 480 > d ? 480 : 1080 > d ? 1080 : 1920 > d ? 1920 : 3E3 > d ? 3E3 : 4320 > d ? 4320 : 1960 * mk(d / 1960)) - d;
		          if (10 < d) {
		            a.timeoutHandle = Ff(Qk.bind(null, a, uk, vk), d);
		            break;
		          }
		          Qk(a, uk, vk);
		          break;
		        case 5:
		          Qk(a, uk, vk);
		          break;
		        default:
		          throw Error(p(329));
		      }
		    }
		  }
		  Ek(a, B());
		  return a.callbackNode === c ? Hk.bind(null, a) : null;
		}
		function Ok(a, b) {
		  var c = tk;
		  a.current.memoizedState.isDehydrated && (Lk(a, b).flags |= 256);
		  a = Jk(a, b);
		  2 !== a && (b = uk, uk = c, null !== b && Gj(b));
		  return a;
		}
		function Gj(a) {
		  null === uk ? uk = a : uk.push.apply(uk, a);
		}
		function Pk(a) {
		  for (var b = a;;) {
		    if (b.flags & 16384) {
		      var c = b.updateQueue;
		      if (null !== c && (c = c.stores, null !== c)) for (var d = 0; d < c.length; d++) {
		        var e = c[d],
		          f = e.getSnapshot;
		        e = e.value;
		        try {
		          if (!He(f(), e)) return !1;
		        } catch (g) {
		          return !1;
		        }
		      }
		    }
		    c = b.child;
		    if (b.subtreeFlags & 16384 && null !== c) c.return = b, b = c;else {
		      if (b === a) break;
		      for (; null === b.sibling;) {
		        if (null === b.return || b.return === a) return !0;
		        b = b.return;
		      }
		      b.sibling.return = b.return;
		      b = b.sibling;
		    }
		  }
		  return !0;
		}
		function Dk(a, b) {
		  b &= ~sk;
		  b &= ~rk;
		  a.suspendedLanes |= b;
		  a.pingedLanes &= ~b;
		  for (a = a.expirationTimes; 0 < b;) {
		    var c = 31 - oc(b),
		      d = 1 << c;
		    a[c] = -1;
		    b &= ~d;
		  }
		}
		function Fk(a) {
		  if (0 !== (K & 6)) throw Error(p(327));
		  Ik();
		  var b = uc(a, 0);
		  if (0 === (b & 1)) return Ek(a, B()), null;
		  var c = Jk(a, b);
		  if (0 !== a.tag && 2 === c) {
		    var d = xc(a);
		    0 !== d && (b = d, c = Ok(a, d));
		  }
		  if (1 === c) throw c = qk, Lk(a, 0), Dk(a, b), Ek(a, B()), c;
		  if (6 === c) throw Error(p(345));
		  a.finishedWork = a.current.alternate;
		  a.finishedLanes = b;
		  Qk(a, uk, vk);
		  Ek(a, B());
		  return null;
		}
		function Rk(a, b) {
		  var c = K;
		  K |= 1;
		  try {
		    return a(b);
		  } finally {
		    K = c, 0 === K && (Hj = B() + 500, fg && jg());
		  }
		}
		function Sk(a) {
		  null !== xk && 0 === xk.tag && 0 === (K & 6) && Ik();
		  var b = K;
		  K |= 1;
		  var c = pk.transition,
		    d = C;
		  try {
		    if (pk.transition = null, C = 1, a) return a();
		  } finally {
		    C = d, pk.transition = c, K = b, 0 === (K & 6) && jg();
		  }
		}
		function Ij() {
		  gj = fj.current;
		  E(fj);
		}
		function Lk(a, b) {
		  a.finishedWork = null;
		  a.finishedLanes = 0;
		  var c = a.timeoutHandle;
		  -1 !== c && (a.timeoutHandle = -1, Gf(c));
		  if (null !== Y) for (c = Y.return; null !== c;) {
		    var d = c;
		    wg(d);
		    switch (d.tag) {
		      case 1:
		        d = d.type.childContextTypes;
		        null !== d && void 0 !== d && $f();
		        break;
		      case 3:
		        Jh();
		        E(Wf);
		        E(H);
		        Oh();
		        break;
		      case 5:
		        Lh(d);
		        break;
		      case 4:
		        Jh();
		        break;
		      case 13:
		        E(M);
		        break;
		      case 19:
		        E(M);
		        break;
		      case 10:
		        Rg(d.type._context);
		        break;
		      case 22:
		      case 23:
		        Ij();
		    }
		    c = c.return;
		  }
		  R = a;
		  Y = a = wh(a.current, null);
		  Z = gj = b;
		  T = 0;
		  qk = null;
		  sk = rk = hh = 0;
		  uk = tk = null;
		  if (null !== Wg) {
		    for (b = 0; b < Wg.length; b++) if (c = Wg[b], d = c.interleaved, null !== d) {
		      c.interleaved = null;
		      var e = d.next,
		        f = c.pending;
		      if (null !== f) {
		        var g = f.next;
		        f.next = e;
		        d.next = g;
		      }
		      c.pending = d;
		    }
		    Wg = null;
		  }
		  return a;
		}
		function Nk(a, b) {
		  do {
		    var c = Y;
		    try {
		      Qg();
		      Ph.current = ai;
		      if (Sh) {
		        for (var d = N.memoizedState; null !== d;) {
		          var e = d.queue;
		          null !== e && (e.pending = null);
		          d = d.next;
		        }
		        Sh = !1;
		      }
		      Rh = 0;
		      P = O = N = null;
		      Th = !1;
		      Uh = 0;
		      ok.current = null;
		      if (null === c || null === c.return) {
		        T = 1;
		        qk = b;
		        Y = null;
		        break;
		      }
		      a: {
		        var f = a,
		          g = c.return,
		          h = c,
		          k = b;
		        b = Z;
		        h.flags |= 32768;
		        if (null !== k && "object" === typeof k && "function" === typeof k.then) {
		          var l = k,
		            m = h,
		            q = m.tag;
		          if (0 === (m.mode & 1) && (0 === q || 11 === q || 15 === q)) {
		            var r = m.alternate;
		            r ? (m.updateQueue = r.updateQueue, m.memoizedState = r.memoizedState, m.lanes = r.lanes) : (m.updateQueue = null, m.memoizedState = null);
		          }
		          var y = Vi(g);
		          if (null !== y) {
		            y.flags &= -257;
		            Wi(y, g, h, f, b);
		            y.mode & 1 && Ti(f, l, b);
		            b = y;
		            k = l;
		            var n = b.updateQueue;
		            if (null === n) {
		              var t = new Set();
		              t.add(k);
		              b.updateQueue = t;
		            } else n.add(k);
		            break a;
		          } else {
		            if (0 === (b & 1)) {
		              Ti(f, l, b);
		              uj();
		              break a;
		            }
		            k = Error(p(426));
		          }
		        } else if (I && h.mode & 1) {
		          var J = Vi(g);
		          if (null !== J) {
		            0 === (J.flags & 65536) && (J.flags |= 256);
		            Wi(J, g, h, f, b);
		            Jg(Ki(k, h));
		            break a;
		          }
		        }
		        f = k = Ki(k, h);
		        4 !== T && (T = 2);
		        null === tk ? tk = [f] : tk.push(f);
		        f = g;
		        do {
		          switch (f.tag) {
		            case 3:
		              f.flags |= 65536;
		              b &= -b;
		              f.lanes |= b;
		              var x = Oi(f, k, b);
		              fh(f, x);
		              break a;
		            case 1:
		              h = k;
		              var w = f.type,
		                u = f.stateNode;
		              if (0 === (f.flags & 128) && ("function" === typeof w.getDerivedStateFromError || null !== u && "function" === typeof u.componentDidCatch && (null === Si || !Si.has(u)))) {
		                f.flags |= 65536;
		                b &= -b;
		                f.lanes |= b;
		                var F = Ri(f, h, b);
		                fh(f, F);
		                break a;
		              }
		          }
		          f = f.return;
		        } while (null !== f);
		      }
		      Tk(c);
		    } catch (na) {
		      b = na;
		      Y === c && null !== c && (Y = c = c.return);
		      continue;
		    }
		    break;
		  } while (1);
		}
		function Kk() {
		  var a = nk.current;
		  nk.current = ai;
		  return null === a ? ai : a;
		}
		function uj() {
		  if (0 === T || 3 === T || 2 === T) T = 4;
		  null === R || 0 === (hh & 268435455) && 0 === (rk & 268435455) || Dk(R, Z);
		}
		function Jk(a, b) {
		  var c = K;
		  K |= 2;
		  var d = Kk();
		  if (R !== a || Z !== b) vk = null, Lk(a, b);
		  do try {
		    Uk();
		    break;
		  } catch (e) {
		    Nk(a, e);
		  } while (1);
		  Qg();
		  K = c;
		  nk.current = d;
		  if (null !== Y) throw Error(p(261));
		  R = null;
		  Z = 0;
		  return T;
		}
		function Uk() {
		  for (; null !== Y;) Vk(Y);
		}
		function Mk() {
		  for (; null !== Y && !cc();) Vk(Y);
		}
		function Vk(a) {
		  var b = Wk(a.alternate, a, gj);
		  a.memoizedProps = a.pendingProps;
		  null === b ? Tk(a) : Y = b;
		  ok.current = null;
		}
		function Tk(a) {
		  var b = a;
		  do {
		    var c = b.alternate;
		    a = b.return;
		    if (0 === (b.flags & 32768)) {
		      if (c = Fj(c, b, gj), null !== c) {
		        Y = c;
		        return;
		      }
		    } else {
		      c = Jj(c, b);
		      if (null !== c) {
		        c.flags &= 32767;
		        Y = c;
		        return;
		      }
		      if (null !== a) a.flags |= 32768, a.subtreeFlags = 0, a.deletions = null;else {
		        T = 6;
		        Y = null;
		        return;
		      }
		    }
		    b = b.sibling;
		    if (null !== b) {
		      Y = b;
		      return;
		    }
		    Y = b = a;
		  } while (null !== b);
		  0 === T && (T = 5);
		}
		function Qk(a, b, c) {
		  var d = C,
		    e = pk.transition;
		  try {
		    pk.transition = null, C = 1, Xk(a, b, c, d);
		  } finally {
		    pk.transition = e, C = d;
		  }
		  return null;
		}
		function Xk(a, b, c, d) {
		  do Ik(); while (null !== xk);
		  if (0 !== (K & 6)) throw Error(p(327));
		  c = a.finishedWork;
		  var e = a.finishedLanes;
		  if (null === c) return null;
		  a.finishedWork = null;
		  a.finishedLanes = 0;
		  if (c === a.current) throw Error(p(177));
		  a.callbackNode = null;
		  a.callbackPriority = 0;
		  var f = c.lanes | c.childLanes;
		  Bc(a, f);
		  a === R && (Y = R = null, Z = 0);
		  0 === (c.subtreeFlags & 2064) && 0 === (c.flags & 2064) || wk || (wk = !0, Gk(hc, function () {
		    Ik();
		    return null;
		  }));
		  f = 0 !== (c.flags & 15990);
		  if (0 !== (c.subtreeFlags & 15990) || f) {
		    f = pk.transition;
		    pk.transition = null;
		    var g = C;
		    C = 1;
		    var h = K;
		    K |= 4;
		    ok.current = null;
		    Pj(a, c);
		    ek(c, a);
		    Oe(Df);
		    dd = !!Cf;
		    Df = Cf = null;
		    a.current = c;
		    ik(c);
		    dc();
		    K = h;
		    C = g;
		    pk.transition = f;
		  } else a.current = c;
		  wk && (wk = !1, xk = a, yk = e);
		  f = a.pendingLanes;
		  0 === f && (Si = null);
		  mc(c.stateNode);
		  Ek(a, B());
		  if (null !== b) for (d = a.onRecoverableError, c = 0; c < b.length; c++) e = b[c], d(e.value, {
		    componentStack: e.stack,
		    digest: e.digest
		  });
		  if (Pi) throw Pi = !1, a = Qi, Qi = null, a;
		  0 !== (yk & 1) && 0 !== a.tag && Ik();
		  f = a.pendingLanes;
		  0 !== (f & 1) ? a === Ak ? zk++ : (zk = 0, Ak = a) : zk = 0;
		  jg();
		  return null;
		}
		function Ik() {
		  if (null !== xk) {
		    var a = Dc(yk),
		      b = pk.transition,
		      c = C;
		    try {
		      pk.transition = null;
		      C = 16 > a ? 16 : a;
		      if (null === xk) var d = !1;else {
		        a = xk;
		        xk = null;
		        yk = 0;
		        if (0 !== (K & 6)) throw Error(p(331));
		        var e = K;
		        K |= 4;
		        for (V = a.current; null !== V;) {
		          var f = V,
		            g = f.child;
		          if (0 !== (V.flags & 16)) {
		            var h = f.deletions;
		            if (null !== h) {
		              for (var k = 0; k < h.length; k++) {
		                var l = h[k];
		                for (V = l; null !== V;) {
		                  var m = V;
		                  switch (m.tag) {
		                    case 0:
		                    case 11:
		                    case 15:
		                      Qj(8, m, f);
		                  }
		                  var q = m.child;
		                  if (null !== q) q.return = m, V = q;else for (; null !== V;) {
		                    m = V;
		                    var r = m.sibling,
		                      y = m.return;
		                    Tj(m);
		                    if (m === l) {
		                      V = null;
		                      break;
		                    }
		                    if (null !== r) {
		                      r.return = y;
		                      V = r;
		                      break;
		                    }
		                    V = y;
		                  }
		                }
		              }
		              var n = f.alternate;
		              if (null !== n) {
		                var t = n.child;
		                if (null !== t) {
		                  n.child = null;
		                  do {
		                    var J = t.sibling;
		                    t.sibling = null;
		                    t = J;
		                  } while (null !== t);
		                }
		              }
		              V = f;
		            }
		          }
		          if (0 !== (f.subtreeFlags & 2064) && null !== g) g.return = f, V = g;else b: for (; null !== V;) {
		            f = V;
		            if (0 !== (f.flags & 2048)) switch (f.tag) {
		              case 0:
		              case 11:
		              case 15:
		                Qj(9, f, f.return);
		            }
		            var x = f.sibling;
		            if (null !== x) {
		              x.return = f.return;
		              V = x;
		              break b;
		            }
		            V = f.return;
		          }
		        }
		        var w = a.current;
		        for (V = w; null !== V;) {
		          g = V;
		          var u = g.child;
		          if (0 !== (g.subtreeFlags & 2064) && null !== u) u.return = g, V = u;else b: for (g = w; null !== V;) {
		            h = V;
		            if (0 !== (h.flags & 2048)) try {
		              switch (h.tag) {
		                case 0:
		                case 11:
		                case 15:
		                  Rj(9, h);
		              }
		            } catch (na) {
		              W(h, h.return, na);
		            }
		            if (h === g) {
		              V = null;
		              break b;
		            }
		            var F = h.sibling;
		            if (null !== F) {
		              F.return = h.return;
		              V = F;
		              break b;
		            }
		            V = h.return;
		          }
		        }
		        K = e;
		        jg();
		        if (lc && "function" === typeof lc.onPostCommitFiberRoot) try {
		          lc.onPostCommitFiberRoot(kc, a);
		        } catch (na) {}
		        d = !0;
		      }
		      return d;
		    } finally {
		      C = c, pk.transition = b;
		    }
		  }
		  return !1;
		}
		function Yk(a, b, c) {
		  b = Ki(c, b);
		  b = Oi(a, b, 1);
		  a = dh(a, b, 1);
		  b = L();
		  null !== a && (Ac(a, 1, b), Ek(a, b));
		}
		function W(a, b, c) {
		  if (3 === a.tag) Yk(a, a, c);else for (; null !== b;) {
		    if (3 === b.tag) {
		      Yk(b, a, c);
		      break;
		    } else if (1 === b.tag) {
		      var d = b.stateNode;
		      if ("function" === typeof b.type.getDerivedStateFromError || "function" === typeof d.componentDidCatch && (null === Si || !Si.has(d))) {
		        a = Ki(c, a);
		        a = Ri(b, a, 1);
		        b = dh(b, a, 1);
		        a = L();
		        null !== b && (Ac(b, 1, a), Ek(b, a));
		        break;
		      }
		    }
		    b = b.return;
		  }
		}
		function Ui(a, b, c) {
		  var d = a.pingCache;
		  null !== d && d.delete(b);
		  b = L();
		  a.pingedLanes |= a.suspendedLanes & c;
		  R === a && (Z & c) === c && (4 === T || 3 === T && (Z & 130023424) === Z && 500 > B() - gk ? Lk(a, 0) : sk |= c);
		  Ek(a, b);
		}
		function Zk(a, b) {
		  0 === b && (0 === (a.mode & 1) ? b = 1 : (b = sc, sc <<= 1, 0 === (sc & 130023424) && (sc = 4194304)));
		  var c = L();
		  a = Zg(a, b);
		  null !== a && (Ac(a, b, c), Ek(a, c));
		}
		function vj(a) {
		  var b = a.memoizedState,
		    c = 0;
		  null !== b && (c = b.retryLane);
		  Zk(a, c);
		}
		function ck(a, b) {
		  var c = 0;
		  switch (a.tag) {
		    case 13:
		      var d = a.stateNode;
		      var e = a.memoizedState;
		      null !== e && (c = e.retryLane);
		      break;
		    case 19:
		      d = a.stateNode;
		      break;
		    default:
		      throw Error(p(314));
		  }
		  null !== d && d.delete(b);
		  Zk(a, c);
		}
		var Wk;
		Wk = function (a, b, c) {
		  if (null !== a) {
		    if (a.memoizedProps !== b.pendingProps || Wf.current) Ug = !0;else {
		      if (0 === (a.lanes & c) && 0 === (b.flags & 128)) return Ug = !1, zj(a, b, c);
		      Ug = 0 !== (a.flags & 131072) ? !0 : !1;
		    }
		  } else Ug = !1, I && 0 !== (b.flags & 1048576) && ug(b, ng, b.index);
		  b.lanes = 0;
		  switch (b.tag) {
		    case 2:
		      var d = b.type;
		      jj(a, b);
		      a = b.pendingProps;
		      var e = Yf(b, H.current);
		      Tg(b, c);
		      e = Xh(null, b, d, a, e, c);
		      var f = bi();
		      b.flags |= 1;
		      "object" === typeof e && null !== e && "function" === typeof e.render && void 0 === e.$$typeof ? (b.tag = 1, b.memoizedState = null, b.updateQueue = null, Zf(d) ? (f = !0, cg(b)) : f = !1, b.memoizedState = null !== e.state && void 0 !== e.state ? e.state : null, ah(b), e.updater = nh, b.stateNode = e, e._reactInternals = b, rh(b, d, a, c), b = kj(null, b, d, !0, f, c)) : (b.tag = 0, I && f && vg(b), Yi(null, b, e, c), b = b.child);
		      return b;
		    case 16:
		      d = b.elementType;
		      a: {
		        jj(a, b);
		        a = b.pendingProps;
		        e = d._init;
		        d = e(d._payload);
		        b.type = d;
		        e = b.tag = $k(d);
		        a = Lg(d, a);
		        switch (e) {
		          case 0:
		            b = dj(null, b, d, a, c);
		            break a;
		          case 1:
		            b = ij(null, b, d, a, c);
		            break a;
		          case 11:
		            b = Zi(null, b, d, a, c);
		            break a;
		          case 14:
		            b = aj(null, b, d, Lg(d.type, a), c);
		            break a;
		        }
		        throw Error(p(306, d, ""));
		      }
		      return b;
		    case 0:
		      return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : Lg(d, e), dj(a, b, d, e, c);
		    case 1:
		      return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : Lg(d, e), ij(a, b, d, e, c);
		    case 3:
		      a: {
		        lj(b);
		        if (null === a) throw Error(p(387));
		        d = b.pendingProps;
		        f = b.memoizedState;
		        e = f.element;
		        bh(a, b);
		        gh(b, d, null, c);
		        var g = b.memoizedState;
		        d = g.element;
		        if (f.isDehydrated) {
		          if (f = {
		            element: d,
		            isDehydrated: !1,
		            cache: g.cache,
		            pendingSuspenseBoundaries: g.pendingSuspenseBoundaries,
		            transitions: g.transitions
		          }, b.updateQueue.baseState = f, b.memoizedState = f, b.flags & 256) {
		            e = Ki(Error(p(423)), b);
		            b = mj(a, b, d, c, e);
		            break a;
		          } else if (d !== e) {
		            e = Ki(Error(p(424)), b);
		            b = mj(a, b, d, c, e);
		            break a;
		          } else for (yg = Lf(b.stateNode.containerInfo.firstChild), xg = b, I = !0, zg = null, c = Ch(b, null, d, c), b.child = c; c;) c.flags = c.flags & -3 | 4096, c = c.sibling;
		        } else {
		          Ig();
		          if (d === e) {
		            b = $i(a, b, c);
		            break a;
		          }
		          Yi(a, b, d, c);
		        }
		        b = b.child;
		      }
		      return b;
		    case 5:
		      return Kh(b), null === a && Eg(b), d = b.type, e = b.pendingProps, f = null !== a ? a.memoizedProps : null, g = e.children, Ef(d, e) ? g = null : null !== f && Ef(d, f) && (b.flags |= 32), hj(a, b), Yi(a, b, g, c), b.child;
		    case 6:
		      return null === a && Eg(b), null;
		    case 13:
		      return pj(a, b, c);
		    case 4:
		      return Ih(b, b.stateNode.containerInfo), d = b.pendingProps, null === a ? b.child = Bh(b, null, d, c) : Yi(a, b, d, c), b.child;
		    case 11:
		      return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : Lg(d, e), Zi(a, b, d, e, c);
		    case 7:
		      return Yi(a, b, b.pendingProps, c), b.child;
		    case 8:
		      return Yi(a, b, b.pendingProps.children, c), b.child;
		    case 12:
		      return Yi(a, b, b.pendingProps.children, c), b.child;
		    case 10:
		      a: {
		        d = b.type._context;
		        e = b.pendingProps;
		        f = b.memoizedProps;
		        g = e.value;
		        G(Mg, d._currentValue);
		        d._currentValue = g;
		        if (null !== f) if (He(f.value, g)) {
		          if (f.children === e.children && !Wf.current) {
		            b = $i(a, b, c);
		            break a;
		          }
		        } else for (f = b.child, null !== f && (f.return = b); null !== f;) {
		          var h = f.dependencies;
		          if (null !== h) {
		            g = f.child;
		            for (var k = h.firstContext; null !== k;) {
		              if (k.context === d) {
		                if (1 === f.tag) {
		                  k = ch(-1, c & -c);
		                  k.tag = 2;
		                  var l = f.updateQueue;
		                  if (null !== l) {
		                    l = l.shared;
		                    var m = l.pending;
		                    null === m ? k.next = k : (k.next = m.next, m.next = k);
		                    l.pending = k;
		                  }
		                }
		                f.lanes |= c;
		                k = f.alternate;
		                null !== k && (k.lanes |= c);
		                Sg(f.return, c, b);
		                h.lanes |= c;
		                break;
		              }
		              k = k.next;
		            }
		          } else if (10 === f.tag) g = f.type === b.type ? null : f.child;else if (18 === f.tag) {
		            g = f.return;
		            if (null === g) throw Error(p(341));
		            g.lanes |= c;
		            h = g.alternate;
		            null !== h && (h.lanes |= c);
		            Sg(g, c, b);
		            g = f.sibling;
		          } else g = f.child;
		          if (null !== g) g.return = f;else for (g = f; null !== g;) {
		            if (g === b) {
		              g = null;
		              break;
		            }
		            f = g.sibling;
		            if (null !== f) {
		              f.return = g.return;
		              g = f;
		              break;
		            }
		            g = g.return;
		          }
		          f = g;
		        }
		        Yi(a, b, e.children, c);
		        b = b.child;
		      }
		      return b;
		    case 9:
		      return e = b.type, d = b.pendingProps.children, Tg(b, c), e = Vg(e), d = d(e), b.flags |= 1, Yi(a, b, d, c), b.child;
		    case 14:
		      return d = b.type, e = Lg(d, b.pendingProps), e = Lg(d.type, e), aj(a, b, d, e, c);
		    case 15:
		      return cj(a, b, b.type, b.pendingProps, c);
		    case 17:
		      return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : Lg(d, e), jj(a, b), b.tag = 1, Zf(d) ? (a = !0, cg(b)) : a = !1, Tg(b, c), ph(b, d, e), rh(b, d, e, c), kj(null, b, d, !0, a, c);
		    case 19:
		      return yj(a, b, c);
		    case 22:
		      return ej(a, b, c);
		  }
		  throw Error(p(156, b.tag));
		};
		function Gk(a, b) {
		  return ac(a, b);
		}
		function al(a, b, c, d) {
		  this.tag = a;
		  this.key = c;
		  this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null;
		  this.index = 0;
		  this.ref = null;
		  this.pendingProps = b;
		  this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null;
		  this.mode = d;
		  this.subtreeFlags = this.flags = 0;
		  this.deletions = null;
		  this.childLanes = this.lanes = 0;
		  this.alternate = null;
		}
		function Bg(a, b, c, d) {
		  return new al(a, b, c, d);
		}
		function bj(a) {
		  a = a.prototype;
		  return !(!a || !a.isReactComponent);
		}
		function $k(a) {
		  if ("function" === typeof a) return bj(a) ? 1 : 0;
		  if (void 0 !== a && null !== a) {
		    a = a.$$typeof;
		    if (a === Da) return 11;
		    if (a === Ga) return 14;
		  }
		  return 2;
		}
		function wh(a, b) {
		  var c = a.alternate;
		  null === c ? (c = Bg(a.tag, b, a.key, a.mode), c.elementType = a.elementType, c.type = a.type, c.stateNode = a.stateNode, c.alternate = a, a.alternate = c) : (c.pendingProps = b, c.type = a.type, c.flags = 0, c.subtreeFlags = 0, c.deletions = null);
		  c.flags = a.flags & 14680064;
		  c.childLanes = a.childLanes;
		  c.lanes = a.lanes;
		  c.child = a.child;
		  c.memoizedProps = a.memoizedProps;
		  c.memoizedState = a.memoizedState;
		  c.updateQueue = a.updateQueue;
		  b = a.dependencies;
		  c.dependencies = null === b ? null : {
		    lanes: b.lanes,
		    firstContext: b.firstContext
		  };
		  c.sibling = a.sibling;
		  c.index = a.index;
		  c.ref = a.ref;
		  return c;
		}
		function yh(a, b, c, d, e, f) {
		  var g = 2;
		  d = a;
		  if ("function" === typeof a) bj(a) && (g = 1);else if ("string" === typeof a) g = 5;else a: switch (a) {
		    case ya:
		      return Ah(c.children, e, f, b);
		    case za:
		      g = 8;
		      e |= 8;
		      break;
		    case Aa:
		      return a = Bg(12, c, b, e | 2), a.elementType = Aa, a.lanes = f, a;
		    case Ea:
		      return a = Bg(13, c, b, e), a.elementType = Ea, a.lanes = f, a;
		    case Fa:
		      return a = Bg(19, c, b, e), a.elementType = Fa, a.lanes = f, a;
		    case Ia:
		      return qj(c, e, f, b);
		    default:
		      if ("object" === typeof a && null !== a) switch (a.$$typeof) {
		        case Ba:
		          g = 10;
		          break a;
		        case Ca:
		          g = 9;
		          break a;
		        case Da:
		          g = 11;
		          break a;
		        case Ga:
		          g = 14;
		          break a;
		        case Ha:
		          g = 16;
		          d = null;
		          break a;
		      }
		      throw Error(p(130, null == a ? a : typeof a, ""));
		  }
		  b = Bg(g, c, b, e);
		  b.elementType = a;
		  b.type = d;
		  b.lanes = f;
		  return b;
		}
		function Ah(a, b, c, d) {
		  a = Bg(7, a, d, b);
		  a.lanes = c;
		  return a;
		}
		function qj(a, b, c, d) {
		  a = Bg(22, a, d, b);
		  a.elementType = Ia;
		  a.lanes = c;
		  a.stateNode = {
		    isHidden: !1
		  };
		  return a;
		}
		function xh(a, b, c) {
		  a = Bg(6, a, null, b);
		  a.lanes = c;
		  return a;
		}
		function zh(a, b, c) {
		  b = Bg(4, null !== a.children ? a.children : [], a.key, b);
		  b.lanes = c;
		  b.stateNode = {
		    containerInfo: a.containerInfo,
		    pendingChildren: null,
		    implementation: a.implementation
		  };
		  return b;
		}
		function bl(a, b, c, d, e) {
		  this.tag = b;
		  this.containerInfo = a;
		  this.finishedWork = this.pingCache = this.current = this.pendingChildren = null;
		  this.timeoutHandle = -1;
		  this.callbackNode = this.pendingContext = this.context = null;
		  this.callbackPriority = 0;
		  this.eventTimes = zc(0);
		  this.expirationTimes = zc(-1);
		  this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0;
		  this.entanglements = zc(0);
		  this.identifierPrefix = d;
		  this.onRecoverableError = e;
		  this.mutableSourceEagerHydrationData = null;
		}
		function cl(a, b, c, d, e, f, g, h, k) {
		  a = new bl(a, b, c, h, k);
		  1 === b ? (b = 1, !0 === f && (b |= 8)) : b = 0;
		  f = Bg(3, null, null, b);
		  a.current = f;
		  f.stateNode = a;
		  f.memoizedState = {
		    element: d,
		    isDehydrated: c,
		    cache: null,
		    transitions: null,
		    pendingSuspenseBoundaries: null
		  };
		  ah(f);
		  return a;
		}
		function dl(a, b, c) {
		  var d = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
		  return {
		    $$typeof: wa,
		    key: null == d ? null : "" + d,
		    children: a,
		    containerInfo: b,
		    implementation: c
		  };
		}
		function el(a) {
		  if (!a) return Vf;
		  a = a._reactInternals;
		  a: {
		    if (Vb(a) !== a || 1 !== a.tag) throw Error(p(170));
		    var b = a;
		    do {
		      switch (b.tag) {
		        case 3:
		          b = b.stateNode.context;
		          break a;
		        case 1:
		          if (Zf(b.type)) {
		            b = b.stateNode.__reactInternalMemoizedMergedChildContext;
		            break a;
		          }
		      }
		      b = b.return;
		    } while (null !== b);
		    throw Error(p(171));
		  }
		  if (1 === a.tag) {
		    var c = a.type;
		    if (Zf(c)) return bg(a, c, b);
		  }
		  return b;
		}
		function fl(a, b, c, d, e, f, g, h, k) {
		  a = cl(c, d, !0, a, e, f, g, h, k);
		  a.context = el(null);
		  c = a.current;
		  d = L();
		  e = lh(c);
		  f = ch(d, e);
		  f.callback = void 0 !== b && null !== b ? b : null;
		  dh(c, f, e);
		  a.current.lanes = e;
		  Ac(a, e, d);
		  Ek(a, d);
		  return a;
		}
		function gl(a, b, c, d) {
		  var e = b.current,
		    f = L(),
		    g = lh(e);
		  c = el(c);
		  null === b.context ? b.context = c : b.pendingContext = c;
		  b = ch(f, g);
		  b.payload = {
		    element: a
		  };
		  d = void 0 === d ? null : d;
		  null !== d && (b.callback = d);
		  a = dh(e, b, g);
		  null !== a && (mh(a, e, g, f), eh(a, e, g));
		  return g;
		}
		function hl(a) {
		  a = a.current;
		  if (!a.child) return null;
		  switch (a.child.tag) {
		    case 5:
		      return a.child.stateNode;
		    default:
		      return a.child.stateNode;
		  }
		}
		function il(a, b) {
		  a = a.memoizedState;
		  if (null !== a && null !== a.dehydrated) {
		    var c = a.retryLane;
		    a.retryLane = 0 !== c && c < b ? c : b;
		  }
		}
		function jl(a, b) {
		  il(a, b);
		  (a = a.alternate) && il(a, b);
		}
		function kl() {
		  return null;
		}
		var ll = "function" === typeof reportError ? reportError : function (a) {
		  console.error(a);
		};
		function ml(a) {
		  this._internalRoot = a;
		}
		nl.prototype.render = ml.prototype.render = function (a) {
		  var b = this._internalRoot;
		  if (null === b) throw Error(p(409));
		  gl(a, b, null, null);
		};
		nl.prototype.unmount = ml.prototype.unmount = function () {
		  var a = this._internalRoot;
		  if (null !== a) {
		    this._internalRoot = null;
		    var b = a.containerInfo;
		    Sk(function () {
		      gl(null, a, null, null);
		    });
		    b[uf] = null;
		  }
		};
		function nl(a) {
		  this._internalRoot = a;
		}
		nl.prototype.unstable_scheduleHydration = function (a) {
		  if (a) {
		    var b = Hc();
		    a = {
		      blockedOn: null,
		      target: a,
		      priority: b
		    };
		    for (var c = 0; c < Qc.length && 0 !== b && b < Qc[c].priority; c++);
		    Qc.splice(c, 0, a);
		    0 === c && Vc(a);
		  }
		};
		function ol(a) {
		  return !(!a || 1 !== a.nodeType && 9 !== a.nodeType && 11 !== a.nodeType);
		}
		function pl(a) {
		  return !(!a || 1 !== a.nodeType && 9 !== a.nodeType && 11 !== a.nodeType && (8 !== a.nodeType || " react-mount-point-unstable " !== a.nodeValue));
		}
		function ql() {}
		function rl(a, b, c, d, e) {
		  if (e) {
		    if ("function" === typeof d) {
		      var f = d;
		      d = function () {
		        var a = hl(g);
		        f.call(a);
		      };
		    }
		    var g = fl(b, d, a, 0, null, !1, !1, "", ql);
		    a._reactRootContainer = g;
		    a[uf] = g.current;
		    sf(8 === a.nodeType ? a.parentNode : a);
		    Sk();
		    return g;
		  }
		  for (; e = a.lastChild;) a.removeChild(e);
		  if ("function" === typeof d) {
		    var h = d;
		    d = function () {
		      var a = hl(k);
		      h.call(a);
		    };
		  }
		  var k = cl(a, 0, !1, null, null, !1, !1, "", ql);
		  a._reactRootContainer = k;
		  a[uf] = k.current;
		  sf(8 === a.nodeType ? a.parentNode : a);
		  Sk(function () {
		    gl(b, k, c, d);
		  });
		  return k;
		}
		function sl(a, b, c, d, e) {
		  var f = c._reactRootContainer;
		  if (f) {
		    var g = f;
		    if ("function" === typeof e) {
		      var h = e;
		      e = function () {
		        var a = hl(g);
		        h.call(a);
		      };
		    }
		    gl(b, g, a, e);
		  } else g = rl(c, b, a, e, d);
		  return hl(g);
		}
		Ec = function (a) {
		  switch (a.tag) {
		    case 3:
		      var b = a.stateNode;
		      if (b.current.memoizedState.isDehydrated) {
		        var c = tc(b.pendingLanes);
		        0 !== c && (Cc(b, c | 1), Ek(b, B()), 0 === (K & 6) && (Hj = B() + 500, jg()));
		      }
		      break;
		    case 13:
		      Sk(function () {
		        var b = Zg(a, 1);
		        if (null !== b) {
		          var c = L();
		          mh(b, a, 1, c);
		        }
		      }), jl(a, 1);
		  }
		};
		Fc = function (a) {
		  if (13 === a.tag) {
		    var b = Zg(a, 134217728);
		    if (null !== b) {
		      var c = L();
		      mh(b, a, 134217728, c);
		    }
		    jl(a, 134217728);
		  }
		};
		Gc = function (a) {
		  if (13 === a.tag) {
		    var b = lh(a),
		      c = Zg(a, b);
		    if (null !== c) {
		      var d = L();
		      mh(c, a, b, d);
		    }
		    jl(a, b);
		  }
		};
		Hc = function () {
		  return C;
		};
		Ic = function (a, b) {
		  var c = C;
		  try {
		    return C = a, b();
		  } finally {
		    C = c;
		  }
		};
		yb = function (a, b, c) {
		  switch (b) {
		    case "input":
		      bb(a, c);
		      b = c.name;
		      if ("radio" === c.type && null != b) {
		        for (c = a; c.parentNode;) c = c.parentNode;
		        c = c.querySelectorAll("input[name=" + JSON.stringify("" + b) + '][type="radio"]');
		        for (b = 0; b < c.length; b++) {
		          var d = c[b];
		          if (d !== a && d.form === a.form) {
		            var e = Db(d);
		            if (!e) throw Error(p(90));
		            Wa(d);
		            bb(d, e);
		          }
		        }
		      }
		      break;
		    case "textarea":
		      ib(a, c);
		      break;
		    case "select":
		      b = c.value, null != b && fb(a, !!c.multiple, b, !1);
		  }
		};
		Gb = Rk;
		Hb = Sk;
		var tl = {
		    usingClientEntryPoint: !1,
		    Events: [Cb, ue, Db, Eb, Fb, Rk]
		  },
		  ul = {
		    findFiberByHostInstance: Wc,
		    bundleType: 0,
		    version: "18.2.0",
		    rendererPackageName: "react-dom"
		  };
		var vl = {
		  bundleType: ul.bundleType,
		  version: ul.version,
		  rendererPackageName: ul.rendererPackageName,
		  rendererConfig: ul.rendererConfig,
		  overrideHookState: null,
		  overrideHookStateDeletePath: null,
		  overrideHookStateRenamePath: null,
		  overrideProps: null,
		  overridePropsDeletePath: null,
		  overridePropsRenamePath: null,
		  setErrorHandler: null,
		  setSuspenseHandler: null,
		  scheduleUpdate: null,
		  currentDispatcherRef: ua.ReactCurrentDispatcher,
		  findHostInstanceByFiber: function (a) {
		    a = Zb(a);
		    return null === a ? null : a.stateNode;
		  },
		  findFiberByHostInstance: ul.findFiberByHostInstance || kl,
		  findHostInstancesForRefresh: null,
		  scheduleRefresh: null,
		  scheduleRoot: null,
		  setRefreshHandler: null,
		  getCurrentFiber: null,
		  reconcilerVersion: "18.2.0-next-9e3b772b8-20220608"
		};
		if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
		  var wl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
		  if (!wl.isDisabled && wl.supportsFiber) try {
		    kc = wl.inject(vl), lc = wl;
		  } catch (a) {}
		}
		reactDom_production_min.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = tl;
		reactDom_production_min.createPortal = function (a, b) {
		  var c = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
		  if (!ol(b)) throw Error(p(200));
		  return dl(a, b, null, c);
		};
		reactDom_production_min.createRoot = function (a, b) {
		  if (!ol(a)) throw Error(p(299));
		  var c = !1,
		    d = "",
		    e = ll;
		  null !== b && void 0 !== b && (!0 === b.unstable_strictMode && (c = !0), void 0 !== b.identifierPrefix && (d = b.identifierPrefix), void 0 !== b.onRecoverableError && (e = b.onRecoverableError));
		  b = cl(a, 1, !1, null, null, c, !1, d, e);
		  a[uf] = b.current;
		  sf(8 === a.nodeType ? a.parentNode : a);
		  return new ml(b);
		};
		reactDom_production_min.findDOMNode = function (a) {
		  if (null == a) return null;
		  if (1 === a.nodeType) return a;
		  var b = a._reactInternals;
		  if (void 0 === b) {
		    if ("function" === typeof a.render) throw Error(p(188));
		    a = Object.keys(a).join(",");
		    throw Error(p(268, a));
		  }
		  a = Zb(b);
		  a = null === a ? null : a.stateNode;
		  return a;
		};
		reactDom_production_min.flushSync = function (a) {
		  return Sk(a);
		};
		reactDom_production_min.hydrate = function (a, b, c) {
		  if (!pl(b)) throw Error(p(200));
		  return sl(null, a, b, !0, c);
		};
		reactDom_production_min.hydrateRoot = function (a, b, c) {
		  if (!ol(a)) throw Error(p(405));
		  var d = null != c && c.hydratedSources || null,
		    e = !1,
		    f = "",
		    g = ll;
		  null !== c && void 0 !== c && (!0 === c.unstable_strictMode && (e = !0), void 0 !== c.identifierPrefix && (f = c.identifierPrefix), void 0 !== c.onRecoverableError && (g = c.onRecoverableError));
		  b = fl(b, null, a, 1, null != c ? c : null, e, !1, f, g);
		  a[uf] = b.current;
		  sf(a);
		  if (d) for (a = 0; a < d.length; a++) c = d[a], e = c._getVersion, e = e(c._source), null == b.mutableSourceEagerHydrationData ? b.mutableSourceEagerHydrationData = [c, e] : b.mutableSourceEagerHydrationData.push(c, e);
		  return new nl(b);
		};
		reactDom_production_min.render = function (a, b, c) {
		  if (!pl(b)) throw Error(p(200));
		  return sl(null, a, b, !1, c);
		};
		reactDom_production_min.unmountComponentAtNode = function (a) {
		  if (!pl(a)) throw Error(p(40));
		  return a._reactRootContainer ? (Sk(function () {
		    sl(null, null, a, !1, function () {
		      a._reactRootContainer = null;
		      a[uf] = null;
		    });
		  }), !0) : !1;
		};
		reactDom_production_min.unstable_batchedUpdates = Rk;
		reactDom_production_min.unstable_renderSubtreeIntoContainer = function (a, b, c, d) {
		  if (!pl(c)) throw Error(p(200));
		  if (null == a || void 0 === a._reactInternals) throw Error(p(38));
		  return sl(a, b, c, !1, d);
		};
		reactDom_production_min.version = "18.2.0-next-9e3b772b8-20220608";
		return reactDom_production_min;
	}

	function checkDCE() {
	  /* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */
	  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === 'undefined' || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== 'function') {
	    return;
	  }
	  try {
	    // Verify that the code above has been dead code eliminated (DCE'd).
	    __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
	  } catch (err) {
	    // DevTools shouldn't crash React, no matter what.
	    // We should still report in case we break this code.
	    console.error(err);
	  }
	}
	{
	  // DCE check should happen before ReactDOM bundle executes so that
	  // DevTools can report bad minification during injection.
	  checkDCE();
	  reactDom.exports = requireReactDom_production_min();
	}

	var reactDomExports = reactDom.exports;
	var ReactDom = /*@__PURE__*/getDefaultExportFromCjs(reactDomExports);

	var m = reactDomExports;
	{
	  client.createRoot = m.createRoot;
	  client.hydrateRoot = m.hydrateRoot;
	}

	function styleInject(css, ref) {
	  if (ref === void 0) ref = {};
	  var insertAt = ref.insertAt;
	  if (!css || typeof document === 'undefined') {
	    return;
	  }
	  var head = document.head || document.getElementsByTagName('head')[0];
	  var style = document.createElement('style');
	  style.type = 'text/css';
	  if (insertAt === 'top') {
	    if (head.firstChild) {
	      head.insertBefore(style, head.firstChild);
	    } else {
	      head.appendChild(style);
	    }
	  } else {
	    head.appendChild(style);
	  }
	  if (style.styleSheet) {
	    style.styleSheet.cssText = css;
	  } else {
	    style.appendChild(document.createTextNode(css));
	  }
	}

	var css_248z$1 = "/*! tailwindcss v3.4.3 | MIT License | https://tailwindcss.com*/*,:after,:before{border:0 solid #e5e7eb;box-sizing:border-box}:after,:before{--tw-content:\"\"}:host,html{-webkit-text-size-adjust:100%;font-feature-settings:normal;-webkit-tap-highlight-color:transparent;font-family:ui-sans-serif,system-ui,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;font-variation-settings:normal;line-height:1.5;-moz-tab-size:4;-o-tab-size:4;tab-size:4}body{line-height:inherit;margin:0}hr{border-top-width:1px;color:inherit;height:0}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,pre,samp{font-feature-settings:normal;font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-size:1em;font-variation-settings:normal}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{border-collapse:collapse;border-color:inherit;text-indent:0}button,input,optgroup,select,textarea{font-feature-settings:inherit;color:inherit;font-family:inherit;font-size:100%;font-variation-settings:inherit;font-weight:inherit;letter-spacing:inherit;line-height:inherit;margin:0;padding:0}button,select{text-transform:none}button,input:where([type=button]),input:where([type=reset]),input:where([type=submit]){-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dd,dl,figure,h1,h2,h3,h4,h5,h6,hr,p,pre{margin:0}fieldset{margin:0}fieldset,legend{padding:0}menu,ol,ul{list-style:none;margin:0;padding:0}dialog{padding:0}textarea{resize:vertical}input::-moz-placeholder,textarea::-moz-placeholder{color:#9ca3af;opacity:1}input::placeholder,textarea::placeholder{color:#9ca3af;opacity:1}[role=button],button{cursor:pointer}:disabled{cursor:default}audio,canvas,embed,iframe,img,object,svg,video{display:block;vertical-align:middle}img,video{height:auto;max-width:100%}[hidden]{display:none}*,:after,:before{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness:proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }::backdrop{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness:proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }h1{font-size:1.5rem;line-height:2rem}h2{font-size:1.25rem}h2,h3{line-height:1.75rem}h3{font-size:1.125rem}button{background-color:#fff}.m-0{margin:0}.m-auto{margin:auto}.m-2{margin:.5rem}.my-0{margin-bottom:0;margin-top:0}.my-2{margin-bottom:.5rem;margin-top:.5rem}.my-4{margin-bottom:1rem;margin-top:1rem}.mt-2{margin-top:.5rem}.block{display:block}.flex{display:flex}.table{display:table}.h-10{height:2.5rem}.h-fit{height:-moz-fit-content;height:fit-content}.max-h-\\[90\\%\\]{max-height:90%}.w-3\\/4{width:75%}.w-full{width:100%}.w-8{width:2rem}.w-fit{width:-moz-fit-content;width:fit-content}.min-w-10{min-width:2.5rem}.max-w-4xl{max-width:56rem}.max-w-\\[90\\%\\]{max-width:90%}.border-collapse{border-collapse:collapse}.scale-100{--tw-scale-x:1;--tw-scale-y:1;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.flex-row{flex-direction:row}.flex-col{flex-direction:column}.items-center{align-items:center}.justify-center{justify-content:center}.justify-between{justify-content:space-between}.justify-evenly{justify-content:space-evenly}.gap-2{gap:.5rem}.gap-3{gap:.75rem}.gap-4{gap:1rem}.overflow-y-scroll{overflow-y:scroll}.text-wrap{text-wrap:wrap}.rounded-md{border-radius:.375rem}.rounded-sm{border-radius:.125rem}.border{border-width:1px}.border-black{--tw-border-opacity:1;border-color:rgb(0 0 0/var(--tw-border-opacity))}.bg-slate-200{--tw-bg-opacity:1;background-color:rgb(226 232 240/var(--tw-bg-opacity))}.bg-stone-500{--tw-bg-opacity:1;background-color:rgb(120 113 108/var(--tw-bg-opacity))}.bg-slate-950{--tw-bg-opacity:1;background-color:rgb(2 6 23/var(--tw-bg-opacity))}.p-0{padding:0}.p-1{padding:.25rem}.p-2{padding:.5rem}.p-4{padding:1rem}.p-5{padding:1.25rem}.px-8{padding-left:2rem;padding-right:2rem}.text-center{text-align:center}.text-start{text-align:start}.text-2xl{font-size:1.5rem;line-height:2rem}.text-lg{font-size:1.125rem;line-height:1.75rem}.text-sm{font-size:.875rem;line-height:1.25rem}.text-xl{font-size:1.25rem;line-height:1.75rem}.font-bold{font-weight:700}.uppercase{text-transform:uppercase}.capitalize{text-transform:capitalize}.text-black{--tw-text-opacity:1;color:rgb(0 0 0/var(--tw-text-opacity))}.text-white{--tw-text-opacity:1;color:rgb(255 255 255/var(--tw-text-opacity))}.decoration-inherit{text-decoration-color:inherit}.filter{filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}@media (min-width:768px){.md\\:w-3\\/4{width:75%}.md\\:flex-row{flex-direction:row}.md\\:flex-col{flex-direction:column}.md\\:justify-end{justify-content:flex-end}.md\\:justify-center{justify-content:center}.md\\:justify-evenly{justify-content:space-evenly}.md\\:px-0{padding-left:0;padding-right:0}}@media (min-width:1024px){.lg\\:my-2{margin-bottom:.5rem;margin-top:.5rem}.lg\\:w-5\\/12{width:41.666667%}.lg\\:w-6\\/12{width:50%}.lg\\:w-full{width:100%}.lg\\:scale-110{--tw-scale-x:1.1;--tw-scale-y:1.1;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.lg\\:flex-row{flex-direction:row}}@media (min-width:1280px){.xl\\:my-4{margin-bottom:1rem;margin-top:1rem}.xl\\:scale-125{--tw-scale-x:1.25;--tw-scale-y:1.25;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}}";
	styleInject(css_248z$1,{"insertAt":"top"});

	var css_248z = "[data-tooltip]{cursor:help;display:inline-block;padding:4px;position:relative}[data-tooltip]:before{background:#000;border-radius:4px;color:#fff;content:attr(data-tooltip);display:none;font-size:14px;line-height:1.4;min-width:100px;padding:4px 8px;position:absolute;text-align:center}[data-tooltip-position=bottom]:before,[data-tooltip-position=top]:before{left:50%;transform:translateX(-50%)}[data-tooltip-position=left]:before,[data-tooltip-position=right]:before{top:50%;transform:translateY(-50%)}[data-tooltip-position=top]:before{bottom:100%;margin-bottom:6px}[data-tooltip-position=right]:before{left:100%;margin-left:6px}[data-tooltip-position=bottom]:before{margin-top:6px;top:100%}[data-tooltip-position=left]:before{margin-right:6px;right:100%}[data-tooltip]:after{border-color:transparent;border-style:solid;content:\"\";display:none;height:0;position:absolute;width:0}[data-tooltip-position=bottom]:after,[data-tooltip-position=top]:after{left:50%;margin-left:-6px}[data-tooltip-position=left]:after,[data-tooltip-position=right]:after{margin-top:-6px;top:50%}[data-tooltip-position=top]:after{border-top-color:#000;border-width:6px 6px 0;bottom:100%}[data-tooltip-position=right]:after{border-right-color:#000;border-width:6px 6px 6px 0;left:100%}[data-tooltip-position=bottom]:after{border-bottom-color:#000;border-width:0 6px 6px;top:100%}[data-tooltip-position=left]:after{border-left-color:#000;border-width:6px 0 6px 6px;right:100%}[data-tooltip]:hover:after,[data-tooltip]:hover:before{display:block;z-index:50}";
	styleInject(css_248z,{"insertAt":"top"});

	async function fetchData(url) {
	  const response = await fetch(url);
	  const data = response.json();
	  return data;
	}
	function codeDecompress(code) {
	  try {
	    //Retrieve Code and decode
	    const cleanBase64Code = code.replaceAll('-', '+').replaceAll('_', '/');
	    const compressedCode = atob(cleanBase64Code, "base64");

	    //Inflate code
	    const inputArray = Uint8Array.from([...compressedCode].map(v => v.charCodeAt(0)));
	    var data = pako.inflate(inputArray, {
	      to: 'string'
	    });

	    //Parse items into usable array
	    const parser = new DOMParser();
	    const xmlDoc = parser.parseFromString(data, "text/xml");
	    const htmlItems = xmlDoc.getElementsByTagName("Items");
	    let itemsArray = [];
	    for (let i = 0; i < htmlItems[0].children.length; i++) {
	      if (htmlItems[0].children[i].nodeName === "Item") {
	        itemsArray.push(htmlItems[0].children[i]);
	      }
	    }
	    return itemsArray;
	  } catch (err) {
	    return err;
	  }
	}
	function isIterable(obj) {
	  // checks for null and undefined
	  if (obj == null) {
	    return false;
	  }
	  return typeof obj[Symbol.iterator] === 'function';
	}
	function handleExplicitClass(item) {
	  switch (true) {
	    case /{crafted}/i.test(item):
	      return 'item_crafted';
	    case /{enchanted}/i.test(item):
	      return 'item_enchanted';
	    case /{fractured}/i.test(item):
	      return 'item_fractured';
	    default:
	      return '';
	  }
	}

	function formatItemInfoArray(item) {
	  let itemContent = item.textContent.replace(/\t/g, '');
	  let itemArray = itemContent.split('\n');
	  let itemInfoArray = itemArray.filter(str => str != '');

	  // useless lines filter
	  let filters = ['BasePercentile:', 'Unique ID:', "LevelReq:", "Quality:", "Requires", "Variant", "Prefix:", "Suffix:", "Limited to:", "Cluster Jewel Skill:", "Cluster Jewel Node Count:", "League:", "Crafted:", "Catalyst:", "Radius:"];
	  for (const fil of filters) {
	    itemInfoArray = itemInfoArray.filter(line => {
	      return line.indexOf(fil) === -1;
	    });
	  }

	  // item variant handle and line cleaning
	  let itemVariant = [];
	  if (item.getAttribute("variant")) {
	    itemVariant.push(item.getAttribute("variant"));
	  }
	  if (item.getAttribute("variantAlt")) {
	    itemVariant.push(item.getAttribute("variantAlt"));
	  }
	  if (item.getAttribute("variantAlt2")) {
	    itemVariant.push(item.getAttribute("variantAlt2"));
	  }

	  // filter only selected variant
	  if (itemVariant.length !== 0) {
	    itemInfoArray = itemInfoArray.filter(line => {
	      if (line.includes("{variant:")) {
	        let tempVariant = line.split('variant:')[1].split('}')[0];
	        if (tempVariant.includes(',')) {
	          let tempCheck = false;
	          tempVariant.split(",").forEach(v => {
	            if (itemVariant.indexOf(v) !== -1) {
	              tempCheck = true;
	            }
	          });
	          return tempCheck;
	        }
	        return itemVariant.indexOf(tempVariant) !== -1;
	      }
	      return true;
	    });
	  }

	  // remove {}
	  itemInfoArray = itemInfoArray.map(line => {
	    if (line.includes("tags:")) {
	      let replaceString = line.match(/{tags:.*?}/g);
	      line = line.replace(replaceString[0], '');
	    }
	    if (line.includes("variant:")) {
	      let replaceString = line.match(/{variant:.*?}/g);
	      line = line.replace(replaceString[0], '');
	    }
	    if (line.includes("custom")) {
	      let replaceString = line.match(/{custom}/g);
	      line = line.replace(replaceString[0], '');
	    }
	    return line;
	  });
	  return itemInfoArray;
	}
	function convertExplicitRangeText(explicit) {
	  if (explicit.indexOf('range:') !== -1) {
	    let rangeString = explicit.match(/{range:.*?}/g);
	    explicit = explicit.replace(rangeString[0], '');
	    let rangeValue = rangeString[0].slice(rangeString[0].indexOf(':') + 1, rangeString[0].length - 1);
	    const matches = explicit.match(/(?<=\().+?(?=\))/g);
	    for (let i = 0; i < matches.length; i++) {
	      let splits = matches[i].match(/-/g);
	      let minValue = matches[i].split('-')[0];
	      let maxValue = matches[i].split('-')[1];
	      if (splits.length > 1) {
	        let tempValue = matches[i].split('-', 2).join('-').length;
	        minValue = matches[i].substr(0, tempValue);
	        maxValue = matches[i].substr(tempValue + 1);
	      }
	      let value = parseInt(minValue) + parseInt(Math.floor(maxValue - minValue) * rangeValue);
	      explicit = explicit.replace(`(${matches[i]})`, value.toString());
	    }
	  }
	  return explicit;
	}
	function formatExplicit(explicit) {
	  const r = /-?(\d+)/g;
	  const modValue = explicit.match(r);
	  const modText = explicit.replace(r, "#").replaceAll('#.#', '#').replaceAll("##", "#").replaceAll('#-#', '#').replaceAll("(#)", '#').replaceAll('+#', "#").replaceAll('-#', '#').trimStart();
	  return {
	    modValue,
	    modText
	  };
	}
	function addOrder(buildItemArray) {
	  let tempBuildItemArray = [];
	  let tempArrayWeapons = buildItemArray.filter(item => item.baseInfo.item_category === "weapons");
	  let tempArrayArmour = buildItemArray.filter(item => item.baseInfo.item_category === "armour");
	  tempArrayArmour.sort((a, b) => a.baseInfo.item_sort < b.baseInfo.item_sort ? -1 : a.baseInfo.item_sort > b.baseInfo.item_sort ? 1 : 0);
	  let tempArrayAccessories = buildItemArray.filter(item => item.baseInfo.item_category === "accessories");
	  tempArrayAccessories.sort((a, b) => a.baseInfo.item_sort < b.baseInfo.item_sort ? -1 : a.baseInfo.item_sort > b.baseInfo.item_sort ? 1 : 0);
	  let tempArrayFlask = buildItemArray.filter(item => item.baseInfo.item_category === "flasks");
	  let tempArrayJewel = buildItemArray.filter(item => item.baseInfo.item_category === "jewels");
	  tempArrayJewel.sort((a, b) => a.baseInfo.item_sort < b.baseInfo.item_sort ? -1 : a.baseInfo.item_sort > b.baseInfo.item_sort ? 1 : 0);
	  let tempArrayUndefined = buildItemArray.filter(item => item.baseInfo.item_category === undefined);
	  tempBuildItemArray = [...tempArrayWeapons, ...tempArrayArmour, ...tempArrayAccessories, ...tempArrayFlask, ...tempArrayJewel, ...tempArrayUndefined];
	  return tempBuildItemArray;
	}
	function findItemBaseType(itemBase, allItemData, flask, jewel) {
	  if (flask === true) {
	    for (let i = 0, l = allItemData[3].list[0].list.length; i < l; i++) {
	      if (itemBase.includes(allItemData[3].list[0].list[i])) {
	        const item_base = allItemData[3].list[0].list[i];
	        const item_sort = allItemData[3].list[0].sort_priority ? allItemData[3].list[0].sort_priority : null;
	        const item_category = "flasks";
	        const base_type = "Flask";
	        const base_query = "flask";
	        const base_info = {
	          item_base: item_base,
	          item_sort: item_sort,
	          item_category: item_category,
	          base_type: base_type,
	          base_query: base_query
	        };
	        return base_info;
	      }
	    }
	  } else if (jewel === true) {
	    for (let i = 0, l = allItemData[4].list[2].list.length; i < l; i++) {
	      if (itemBase.includes(allItemData[4].list[2].list[i])) {
	        const item_base = allItemData[4].list[2].list[i];
	        const item_sort = allItemData[4].list[2].sort_priority ? allItemData[4].list[2].sort_priority : null;
	        const item_category = "jewels";
	        const base_type = "Abyss Jewel";
	        const base_query = "jewel.abyss";
	        const base_info = {
	          item_base: item_base,
	          item_sort: item_sort,
	          item_category: item_category,
	          base_type: base_type,
	          base_query: base_query
	        };
	        return base_info;
	      }
	    }
	  } else {
	    for (let i = 0, l = allItemData.length; i < l; i++) {
	      for (let j = 0, k = allItemData[i].list.length; j < k; j++) {
	        if (allItemData[i].list[j].list.includes(itemBase)) {
	          const item_category = allItemData[i].id;
	          const item_sort = allItemData[i].list[j].sort_priority ? allItemData[i].list[j].sort_priority : null;
	          const base_type = allItemData[i].list[j].base_type;
	          const stat_type = allItemData[i].list[j].stat_type ? allItemData[i].list[j].stat_type : null;
	          const base_query = allItemData[i].list[j].base_query;
	          const base_info = {
	            item_category: item_category,
	            item_sort: item_sort,
	            base_type: base_type,
	            stat_type: stat_type,
	            base_query: base_query
	          };
	          return base_info;
	        }
	      }
	    }
	  }
	}
	function createItemObj(item, allItemData) {
	  let cleanItemInfoArray = formatItemInfoArray(item);

	  //Corrupted
	  let itemIsCorrupted = false;
	  if (cleanItemInfoArray[cleanItemInfoArray.length - 1] === 'Corrupted') {
	    itemIsCorrupted = true;
	    cleanItemInfoArray.pop();
	  }

	  //Item Rarity
	  let itemRarity;
	  if (cleanItemInfoArray[0].indexOf('Rarity:') !== -1) {
	    itemRarity = cleanItemInfoArray[0].split(': ')[1];
	    cleanItemInfoArray.shift();
	  } else if (itemRarity === "RELIC") {
	    itemRarity = 'UNIQUE';
	  }

	  //Item Name & Base
	  let itemName;
	  let itemBase;
	  let itemBaseInfo;
	  let flask = null;
	  let abyss = null;
	  if (cleanItemInfoArray[0].indexOf('Flask') !== -1) {
	    itemName = cleanItemInfoArray[0];
	    cleanItemInfoArray.shift();
	    if (cleanItemInfoArray[0].indexOf('Flask') !== -1) {
	      cleanItemInfoArray.shift();
	    }

	    //Base Info
	    flask = true;
	    itemBaseInfo = findItemBaseType(itemName, allItemData, flask, abyss);
	    itemBase = itemBaseInfo.item_base;
	  } else if (itemRarity !== "UNIQUE" && cleanItemInfoArray[0].indexOf('Eye Jewel') !== -1) {
	    itemName = cleanItemInfoArray[0];
	    cleanItemInfoArray.shift();

	    //Base Info
	    let abyss = true;
	    itemBaseInfo = findItemBaseType(itemName, allItemData, flask, abyss);
	    itemBase = itemBaseInfo.item_base;
	  } else {
	    if (/Implicits:|Sockets:|Armour:|Evasion:|Energy Shield:|Item Level:/.test(cleanItemInfoArray[1])) {
	      itemName = null;
	      itemBase = cleanItemInfoArray[0];
	      if (itemBase.includes("Jewel")) {
	        let jewelType = itemBase.split(' Jewel')[0].split(' ').pop();
	        itemBase = jewelType + " Jewel";
	      }
	    } else {
	      itemName = cleanItemInfoArray[0];
	      itemBase = cleanItemInfoArray[1];
	      cleanItemInfoArray.shift();
	    }
	    cleanItemInfoArray.shift();
	    //Base Info
	    itemBaseInfo = findItemBaseType(itemBase, allItemData);
	  }

	  //Item Defences
	  let itemDefences = [];
	  cleanItemInfoArray.map((line, i) => {
	    if (line.includes("Armour: ") || line.includes("Energy Shield: ") || line.includes("Evasion: ") || line.includes("Ward: ")) {
	      itemDefences.push(line);
	    }
	  });
	  for (let i = 0, l = itemDefences.length; i < l; i++) {
	    cleanItemInfoArray.shift();
	  }

	  //Item Influences
	  let itemInfluences = [];
	  while (cleanItemInfoArray[0].indexOf(' Item') !== -1) {
	    cleanItemInfoArray.shift();
	  }

	  //Item Lv
	  let itemIlv = null;
	  if (cleanItemInfoArray[0].indexOf("Item Level:") !== -1) {
	    itemIlv = cleanItemInfoArray[0].split(": ")[1];
	    cleanItemInfoArray.shift();
	  }

	  //Item Sockets
	  let itemSockets = [];
	  if (cleanItemInfoArray[0].indexOf("Sockets:") !== -1) {
	    itemSockets = cleanItemInfoArray[0].split(": ")[1].split(/-| /);
	    cleanItemInfoArray.shift();
	  }

	  //Item Implicit
	  let itemImplicitNumber = 0;
	  let itemImplicitArray = [];
	  if (cleanItemInfoArray[0].indexOf("Implicits:") !== -1) {
	    itemImplicitNumber = cleanItemInfoArray[0].split(": ")[1];
	    cleanItemInfoArray.shift();
	  } else {
	    cleanItemInfoArray.shift();
	    itemImplicitNumber = cleanItemInfoArray[0].split(": ")[1];
	    cleanItemInfoArray.shift();
	  }
	  if (itemImplicitNumber !== 0) {
	    for (let i = 0; i < itemImplicitNumber; i++) {
	      let newImplicit = {
	        text: convertExplicitRangeText(cleanItemInfoArray[0]),
	        display: false,
	        precision: false
	      };
	      itemImplicitArray.push(newImplicit);
	      cleanItemInfoArray.shift();
	    }
	  }

	  //Item Modifiers
	  let itemExplicitsArray = [];
	  while (cleanItemInfoArray.length > 0) {
	    let newExplicit = {
	      text: convertExplicitRangeText(cleanItemInfoArray[0]),
	      display: false,
	      precision: false
	    };
	    itemExplicitsArray.push(newExplicit);
	    cleanItemInfoArray.shift();
	  }

	  //return new item object
	  let newItem = {
	    name: itemName,
	    base: itemBase,
	    baseInfo: itemBaseInfo,
	    influence: itemInfluences,
	    defence: itemDefences,
	    rarity: itemRarity,
	    iLv: itemIlv,
	    sockets: itemSockets,
	    implicits: itemImplicitArray,
	    explicits: itemExplicitsArray,
	    corrupted: itemIsCorrupted
	  };
	  return newItem;
	}
	function translateModifiersRare(item, allItemTypes, allModifiers) {
	  let modArray = item.explicits;
	  const itemCategoryIndex = allItemTypes.findIndex(x => x.id === item.baseInfo.item_category);
	  const itemBaseTypeIndex = allItemTypes[itemCategoryIndex].list.findIndex(x => x.base_type === item.baseInfo.base_type && (item.baseInfo.stat_type !== null ? x.stat_type === item.baseInfo.stat_type : true));
	  modArray.map(mod => {
	    let specialMod = null;
	    let modPreText = null;
	    let modFilter = null;
	    let modInfluence = null;
	    let modOption = null;

	    //split special if needed
	    switch (true) {
	      case mod.text.includes('{crafted}'):
	        specialMod = 'crafted';
	        modPreText = mod.text.split('}')[1];
	        break;
	      case mod.text.includes('{fractured}'):
	        specialMod = 'fractured';
	        modPreText = mod.text.split('}')[1];
	        break;
	      default:
	        modPreText = mod.text;
	    }

	    //retrieve mod value and explicit text
	    let {
	      modValue,
	      modText
	    } = formatExplicit(modPreText);
	    let index = null;
	    const targetedExplicitArr = allItemTypes[itemCategoryIndex].list[itemBaseTypeIndex].explicits;
	    if (specialMod === "fractured") {
	      modInfluence = "fractured";
	      index = allItemTypes[5].affixes.findIndex(x => x.text === modText);
	      if (index === -1) {
	        modFilter += ' (Local)';
	        index = allItemTypes[5].affixes.findIndex(x => x.text === modText);
	      }
	      if (index !== -1) {
	        modFilter = allItemTypes[5].affixes[index].id;
	      } else {
	        modFilter = null;
	      }
	    } else if (specialMod === "crafted") {
	      modInfluence = "crafted";
	      index = targetedExplicitArr[9].affixes.findIndex(x => x.text === modText);
	      if (index === -1) {
	        modText += ' (Local)';
	        index = targetedExplicitArr[9].affixes.findIndex(x => x.text === modText);
	      }
	      if (index !== -1) {
	        modFilter = targetedExplicitArr[9].affixes[index].trade;
	      } else {
	        modFilter = null;
	      }
	    } else {
	      for (let i = 0; i < targetedExplicitArr.length; i++) {
	        index = targetedExplicitArr[i].affixes.findIndex(x => x.text === modText);
	        if (index !== -1) {
	          modFilter = targetedExplicitArr[i].affixes[index].trade;
	          modInfluence = targetedExplicitArr[i].types;
	          break;
	        }
	      }
	      if (index === -1) {
	        if (modText.includes('reduced')) {
	          modText = modText.replace('reduced', 'increased');
	          for (let i = 0; i < targetedExplicitArr.length; i++) {
	            index = targetedExplicitArr[i].affixes.findIndex(x => x.text === modText);
	            if (index !== -1) {
	              modFilter = targetedExplicitArr[i].affixes[index].trade;
	              modInfluence = targetedExplicitArr[i].types;
	              break;
	            }
	          }
	        } else if (modText.includes('less')) {
	          modText = modText.replace('less', 'more');
	          for (let i = 0; i < targetedExplicitArr.length; i++) {
	            index = targetedExplicitArr[i].affixes.findIndex(x => x.text === modText);
	            if (index !== -1) {
	              modFilter = targetedExplicitArr[i].affixes[index].trade;
	              modInfluence = targetedExplicitArr[i].types;
	              break;
	            }
	          }
	        } else {
	          modText += ' (Local)';
	          for (let i = 0; i < targetedExplicitArr.length; i++) {
	            index = targetedExplicitArr[i].affixes.findIndex(x => x.text === modText);
	            if (index !== -1) {
	              modFilter = targetedExplicitArr[i].affixes[index].trade;
	              modInfluence = targetedExplicitArr[i].types;
	              break;
	            }
	          }
	        }
	      }
	    }
	    if (index === -1) {
	      translateModifiers([mod], allModifiers, 'Explicit');
	    } else {
	      if (!mod.hasOwnProperty('influence')) {
	        mod.influence = modInfluence;
	      }
	      if (!mod.hasOwnProperty('filter')) {
	        mod.filter = modFilter;
	      }
	      if (!mod.hasOwnProperty('value')) {
	        mod.value = modValue;
	      }
	      if (!mod.hasOwnProperty('option')) {
	        mod.option = modOption;
	      }
	    }
	  });
	}
	function translateModifiers(modArray, allModifiers, type) {
	  modArray.map(mod => {
	    //remove bracket
	    let label = null;
	    let modPreText = null;
	    let modFilter = null;
	    let modOption = null;
	    if (type === "implicit") {
	      switch (true) {
	        case /Allocates/.test(mod.text):
	          {
	            mod.filter = "enchant.stat_2954116742";
	            mod.option = allModifiers[4].entries[4].option.options[allModifiers[4].entries[4].option.options.findIndex(i => i.text === mod.text.split('Allocates ')[1])].id;
	            return null;
	          }
	        case /Small Passive Skills/.test(mod.text):
	          {
	            mod.filter = "enchant.stat_3948993189";
	            mod.option = allModifiers[4].entries[1].option.options[allModifiers[4].entries[1].option.options.findIndex(i => i.text === mod.text.split(': ')[1])].id;
	            return null;
	          }
	        case /crafted/.test(mod.text):
	          label = "Enchant";
	          break;
	        default:
	          label = "Implicit";
	      }
	    } else {
	      switch (true) {
	        case /Forbidden Flesh/.test(mod.text):
	          {
	            mod.filter = "explicit.stat_1190333629";
	            mod.option = allModifiers[1].entries[1549].option.options[allModifiers[1].entries[1549].option.options.findIndex(i => i.text === mod.text.split('Allocates ')[1].split(" if")[0])].id;
	            return null;
	          }
	        case /Forbidden Flame/.test(mod.text):
	          {
	            mod.filter = "explicit.stat_2460506030";
	            mod.option = allModifiers[1].entries[981].option.options[allModifiers[1].entries[1549].option.options.findIndex(i => i.text === mod.text.split('Allocates ')[1].split(" if")[0])].id;
	            return null;
	          }
	        case /Passives in Radius of/.test(mod.text):
	          {
	            mod.filter = "explicit.stat_2422708892";
	            mod.option = allModifiers[1].entries[1894].option.options[allModifiers[1].entries[1894].option.options.findIndex(i => i.text === mod.text.split('of ')[1].split(" can")[0])].id;
	            return null;
	          }
	        case /Only affects Passives in/.test(mod.text):
	          {
	            mod.filter = "explicit.stat_3642528642";
	            mod.option = allModifiers[1].entries[906].option.options[allModifiers[1].entries[906].option.options.findIndex(i => i.text === mod.text.split('in ')[1].split(" Ring")[0])].id;
	            return null;
	          }
	        case /crafted/.test(mod.text):
	          label = "Crafted";
	          break;
	        case /fractured/.test(mod.text):
	          label = "Fractured";
	          break;
	        default:
	          label = "Explicit";
	      }
	    }
	    //split special if needed
	    /}/.test(mod.text) ? modPreText = mod.text.split('}')[1] : modPreText = mod.text;

	    //retrieve mod value and explicit text
	    const r = /-?(\d+)/g;
	    let modValue = modPreText.match(r);
	    let modText = modPreText.replace(r, "#").replaceAll('#.#', '#').replaceAll("##", "#").replaceAll('#-#', '#').replaceAll("(#)", '#').replaceAll('+#', "#").replaceAll('-#', '#').trimStart();

	    //exceptions
	    const filteredAllModifiers = allModifiers.filter(lab => lab.label === label);
	    let index = filteredAllModifiers[0].entries.findIndex(i => i.text.replace(r, "#") === modText);
	    if (index === -1) {
	      if (/Total Mana Cost/.test(modText)) {
	        modText = modText.replace("# to", "+# to");
	      } else if (/Small Passive Skill which grants nothing/.test(modText)) {
	        modText = modText.replace("Skill which grants", "Skills which grant");
	      } else if (/reduced/.test(modText)) {
	        modText = modText.replace("reduced", "increased");
	        modValue = modValue.map(v => '-' + v);
	      } else if (/Devotion/.test(modText)) {
	        modText = modText.replace("# Devotion", "10 Devotion");
	        modValue.pop();
	      } else if (/Charges/.test(modText)) {
	        modText = modText.replace("Charges", "Charge");
	      } else if (/to all Elemental Resistances/.test(modText)) {
	        modText = modText.replace("#", "+#");
	        modValue = modValue.map(v => '-' + v);
	      } else {
	        modText += ' (Local)';
	      }
	      index = filteredAllModifiers[0].entries.findIndex(i => i.text.replace(r, "#") === modText);
	    }
	    if (index !== -1) {
	      modFilter = filteredAllModifiers[0].entries[index].id;
	    }

	    //debug
	    if (modFilter === null) {
	      console.log(mod);
	      console.log("Mod label: ", label);
	      console.log("Mod text before traitment: ", modPreText);
	      console.log("Mod text after traitment: ", modText);
	      console.log('Mod value: ', modValue);
	      console.log("Searching in: ", filteredAllModifiers[0].id);
	      console.log("Found in index: ", index);
	      console.log("Mod Filter: ", modFilter);
	      console.log("Mod Options: ", modOption);
	    }
	    mod.filter = modFilter;
	    mod.value = modValue;
	    mod.option = modOption;
	  });
	}
	function handleInfluenceExplicits(item, allItemTypes) {
	  let filteredInfArray = item.explicits.filter(m => /hunter|shaper|crusader|warlord|elder|redeemer/.test(m.influence));
	  let tempInfArr = [];
	  let resultInf = [];
	  const itemCategoryIndex = allItemTypes.findIndex(x => x.id === item.baseInfo.item_category);
	  const itemBaseTypeIndex = allItemTypes[itemCategoryIndex].list.findIndex(x => x.base_type === item.baseInfo.base_type && (item.baseInfo.stat_type !== null ? x.stat_type === item.baseInfo.stat_type : true));
	  const targetedExplicitArr = allItemTypes[itemCategoryIndex].list[itemBaseTypeIndex].explicits;
	  filteredInfArray.forEach(mod => {
	    let {
	      modText
	    } = formatExplicit(mod.text);
	    let tempInf = [];
	    let index = null;
	    for (let i = 0; i < targetedExplicitArr.length; i++) {
	      index = targetedExplicitArr[i].affixes.findIndex(x => x.text === modText);
	      if (index !== -1) {
	        tempInf.push(targetedExplicitArr[i].types);
	      }
	    }
	    if (index === -1) {
	      if (modText.includes('reduced')) {
	        modText = modText.replace('reduced', 'increased');
	        for (let i = 0; i < targetedExplicitArr.length; i++) {
	          index = targetedExplicitArr[i].affixes.findIndex(x => x.text === modText);
	          if (index !== -1) {
	            tempInf.push(targetedExplicitArr[i].types);
	          }
	        }
	      } else if (modText.includes('less')) {
	        modText = modText.replace('less', 'more');
	        for (let i = 0; i < targetedExplicitArr.length; i++) {
	          index = targetedExplicitArr[i].affixes.findIndex(x => x.text === modText);
	          if (index !== -1) {
	            tempInf.push(targetedExplicitArr[i].types);
	          }
	        }
	      } else {
	        modText += ' (Local)';
	        for (let i = 0; i < targetedExplicitArr.length; i++) {
	          index = targetedExplicitArr[i].affixes.findIndex(x => x.text === modText);
	          if (index !== -1) {
	            tempInf.push(targetedExplicitArr[i].types);
	          }
	        }
	      }
	    }
	    tempInfArr.push(tempInf);
	  });
	  tempInfArr = tempInfArr.map(inf => {
	    return inf.filter(i => /hunter|shaper|crusader|warlord|elder|redeemer/.test(i));
	  });
	  tempInfArr.forEach(inf => {
	    if (inf.length === 1) {
	      resultInf.push(inf[0]);
	    }
	  });
	  if (resultInf.length > 0 && resultInf.length < 3) {
	    resultInf.forEach(i => item.influence.push(i));
	  }
	}

	function generateTradeUrl(tradeInfluence, tradeDefence, tradeIlv, tradeLinks, tradeCorrupted, tradeImplicits, tradeExplicits, item, league) {
	  const leagueChoice = league;

	  //setup Filters

	  //baseQuery
	  let itemRarity = 'unique';
	  let itemBaseQuery = `,"name":"${item.name}","type":"${item.base}"`;
	  let itemCategory = '';
	  if (item.rarity !== "UNIQUE") {
	    itemRarity = "nonunique";
	    itemBaseQuery = `,"type":"${item.base}"`;
	  }

	  //armour Filter
	  let armourFilter = '';
	  if (tradeDefence.length > 0) {
	    let defenceArray = [];
	    tradeDefence.map(def => {
	      let temp;
	      switch (def.split(': ')[0]) {
	        case 'Armour':
	          temp = `"ar":{"min":${def.split(': ')[1]}}`;
	          break;
	        case 'Evasion':
	          temp = `"ev":{"min":${def.split(': ')[1]}}`;
	          break;
	        case 'Energy Shield':
	          temp = `"es":{"min":${def.split(': ')[1]}}`;
	          break;
	        case 'Ward':
	          temp = `"block":{"min":${def.split(': ')[1]}}`;
	          break;
	        default:
	          console.log('Error sur le switch Armour filter !');
	      }
	      defenceArray.push(temp);
	    });
	    armourFilter = `,"armour_filters":{"filters":{${defenceArray.join(',')}}}`;
	  }

	  //misc Filter
	  let iLvFilter = `"ilvl":{"min":${tradeIlv},"max":100}`;
	  let corruptedFilter = '';
	  if (tradeCorrupted !== "any") {
	    corruptedFilter = `,"corrupted":{"option":"${tradeCorrupted}"}`;
	  }
	  let miscFilter = `"misc_filters":{"filters":{${iLvFilter}${corruptedFilter}}}`;

	  //type Filter
	  let rarity = `"rarity":{"option":"${itemRarity}"}`;
	  let typeFilter = `,"type_filters":{"filters":{${rarity}${itemCategory}}}`;
	  let socketFilter = `,"socket_filters":{"filters":{"links":{"min":${tradeLinks}}}}`;

	  //stats Filter
	  let tempItemModifiersArray = [];
	  if (tradeInfluence[0]) {
	    tradeInfluence.map(inf => {
	      let tempInfFilter = `{"id":"pseudo.pseudo_has_${inf}_influence"}`;
	      tempItemModifiersArray.push(tempInfFilter);
	    });
	  }
	  tradeImplicits.map(implicit => {
	    if (implicit.filter !== undefined && implicit.filter !== null) {
	      let tempModFilter = `{"id":"${implicit.filter}"${implicit.option ? `,"value":{"option":${implicit.option}}` : ''}${implicit.value ? `,"value":{"min":${implicit.value[0]}${implicit.value && implicit.precision ? `,"max":${implicit.value[0]}` : ''}}` : ''}, "disabled": ${!implicit.display}}`;
	      tempItemModifiersArray.push(tempModFilter);
	    }
	  });
	  tradeExplicits.map(explicit => {
	    if (explicit.filter !== undefined && explicit.filter !== null) {
	      let tempModFilter = `{"id":"${explicit.filter}"${explicit.option ? `,"value":{"option":${explicit.option}}` : ''}${explicit.value ? `,"value":{"min":${explicit.value[0]}${explicit.value && explicit.precision ? `,"max":${explicit.value[0]}` : ''}}` : ''}, "disabled": ${!explicit.display}}`;
	      tempItemModifiersArray.push(tempModFilter);
	    }
	  });
	  let statsFilter = `,"stats":[{"type":"and","filters":[${tempItemModifiersArray.join(",")}]}]`;
	  const urlPOETrade = `https://www.pathofexile.com/trade/search/${leagueChoice}`;
	  const query = `?q={"query":{"filters":{${miscFilter}${socketFilter}${armourFilter}${typeFilter}}${itemBaseQuery}${statsFilter},"status":{"option":"online"}},"sort":{"price":"asc"}}`;
	  const tempRequest = urlPOETrade + query;
	  return encodeURI(tempRequest);
	}

	function handleUniquePrice(item, fetchItemData) {
	  let index = fetchItemData[item.baseInfo.item_category].lines.map(e => e.name).indexOf(item.name);
	  if (index !== -1) {
	    return [fetchItemData[item.baseInfo.item_category].lines[index]];
	  }
	}
	function handleBaseTypePrice(item, fetchItemData) {
	  let itemPrices = fetchItemData.baseType.lines.filter(c => c.baseType === item.base && c.levelRequired >= parseInt(item.iLv));
	  let itemPricesResult = [];
	  if (itemPrices.length > 0) {
	    if (item.influence.length > 0) {
	      function capitalize(str) {
	        return str.charAt(0).toUpperCase() + str.slice(1);
	      }
	      let allInfluences = [];
	      const itemInf = item.influence.map(i => capitalize(i));
	      itemInf.forEach(i => allInfluences.push(i));
	      if (itemInf.length > 1) {
	        let tempInf = itemInf.flatMap((v, i) => itemInf.slice(i + 1).map(w => v + '/' + w));
	        tempInf.map(i => {
	          let tempMods = i.split('/');
	          allInfluences.push(tempMods.join('/'));
	          allInfluences.push(tempMods.reverse().join('/'));
	        });
	      }
	      let finalAllInfluence = new Set(allInfluences);
	      finalAllInfluence.forEach(i => {
	        itemPrices.forEach(p => {
	          if (p.hasOwnProperty('variant') && p.variant === i) {
	            itemPricesResult.push(p);
	          }
	        });
	      });
	    }
	    let baseItemPrices = itemPrices.filter(r => !r.hasOwnProperty('variant'));
	    baseItemPrices.forEach(i => itemPricesResult.push(i));
	    if (itemPricesResult.length > 0) {
	      itemPricesResult.sort(({
	        levelRequired: a
	      }, {
	        levelRequired: b
	      }) => b - a);
	      return itemPricesResult;
	    }
	  }
	}
	function handleClusterPrice(item, clusterData) {
	  const clusterFilterPassiveFilter = item.implicits.filter(i => i.text.includes("Small Passive Skills"))[0].text.split(': ')[1];
	  const clusterFilterNbPassive = item.implicits.filter(i => i.text.includes("Adds"))[0].text.split("Adds ")[1].split(" Passive")[0];
	  let clusterFilterIlv = parseInt(item.iLv);
	  let clusterPriceResults = clusterData.filter(c => c.baseType === item.base && c.name === clusterFilterPassiveFilter && c.variant === `${clusterFilterNbPassive} passives`);
	  const clusterBreakpoints = [1, 50, 68, 75, 84];
	  if (!clusterBreakpoints.includes(clusterFilterIlv)) {
	    let tempIlv = null;
	    clusterBreakpoints.forEach(b => {
	      if (clusterFilterIlv > b) {
	        tempIlv = b;
	      }
	    });
	    clusterFilterIlv = tempIlv;
	  }
	  clusterPriceResults = clusterPriceResults.filter(c => c.levelRequired === clusterFilterIlv);
	  if (clusterPriceResults.length >= 1) {
	    clusterPriceResults.sort(({
	      levelRequired: a
	    }, {
	      levelRequired: b
	    }) => b - a);
	    return clusterPriceResults;
	  } else {
	    return null;
	  }
	}
	function displayEstimatedPrice(item) {
	  if (item !== undefined) {
	    if (item.divineValue >= 2) {
	      return /*#__PURE__*/React.createElement("p", {
	        className: "flex flex-row justify-center items-center gap-2 w-fit",
	        "data-tooltip": `chaos: ${item.chaosValue} | divine: ${item.divineValue}`,
	        "data-tooltip-position": "top"
	      }, /*#__PURE__*/React.createElement("span", {
	        className: "text-lg"
	      }, item.divineValue), /*#__PURE__*/React.createElement("img", {
	        className: "w-8",
	        src: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvQ3VycmVuY3lNb2RWYWx1ZXMiLCJ3IjoxLCJoIjoxLCJzY2FsZSI6MX1d/e1a54ff97d/CurrencyModValues.png",
	        alt: "Divine Orb"
	      }));
	    } else {
	      return /*#__PURE__*/React.createElement("p", {
	        className: "flex flex-row justify-center items-center gap-2 w-fit",
	        "data-tooltip": `chaos: ${item.chaosValue} | divine: ${item.divineValue}`,
	        "data-tooltip-position": "top"
	      }, /*#__PURE__*/React.createElement("span", {
	        className: "text-lg"
	      }, item.chaosValue), /*#__PURE__*/React.createElement("img", {
	        className: "w-8",
	        src: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvQ3VycmVuY3lSZXJvbGxSYXJlIiwidyI6MSwiaCI6MSwic2NhbGUiOjF9XQ/d119a0d734/CurrencyRerollRare.png",
	        alt: "Chaos"
	      }));
	    }
	  }
	}

	const Modal = ({
	  open,
	  children,
	  close
	}) => {
	  if (!open) return null;
	  return /*#__PURE__*/ReactDom.createPortal( /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
	    className: "modal_bg",
	    onClick: close
	  }), /*#__PURE__*/React.createElement("div", {
	    className: "modal_content rounded-sm max-h-[90%] max-w-[90%] overflow-y-scroll"
	  }, children)), document.getElementById('modal_portal'));
	};

	function ItemTrade({
	  itemNumber,
	  item,
	  league,
	  allFetchItemData
	}) {
	  const [tradeInfluence, setTradeInfluence] = reactExports.useState([]);
	  const [tradeDefence, setTradeDefence] = reactExports.useState([]);
	  const [tradeIlv, setTradeIlv] = reactExports.useState(0);
	  const [tradeLinks, setTradeLinks] = reactExports.useState(0);
	  const [tradeCorrupted, setTradeCorrupted] = reactExports.useState("any");
	  const [tradeImplicits, setTradeImplicits] = reactExports.useState(item.implicits);
	  const [tradeExplicits, setTradeExplicits] = reactExports.useState(item.explicits);
	  const [customPrecision, setCustomPrecision] = reactExports.useState(false);
	  const [itemEstimatedPriceArr, setItemEstimatedPriceArr] = reactExports.useState([]);
	  const [loader, setLoader] = reactExports.useState(true);
	  const [isOpen, setIsOpen] = reactExports.useState(false);
	  const didMount = reactExports.useRef(false);
	  const itemName = item.rarity === 'UNIQUE' ? `${item.name} - ${item.base}` : `${item.base}`;
	  reactExports.useEffect(() => {
	    if (didMount.current) {
	      let itemPriceInfo = [];
	      if (item.rarity === "UNIQUE") {
	        itemPriceInfo = handleUniquePrice(item, allFetchItemData);
	        setItemEstimatedPriceArr(itemPriceInfo);
	      } else if (item.rarity === "RARE" && item.baseInfo.base_type === "Cluster Jewel") {
	        itemPriceInfo = handleClusterPrice(item, allFetchItemData.cluster.lines);
	        setItemEstimatedPriceArr(itemPriceInfo);
	      } else {
	        itemPriceInfo = handleBaseTypePrice(item, allFetchItemData);
	        setItemEstimatedPriceArr(itemPriceInfo);
	      }
	    } else {
	      didMount.current = true;
	    }
	  }, [allFetchItemData]);
	  reactExports.useEffect(() => {
	    setTimeout(() => {
	      setLoader(false);
	    }, 200);
	  }, [allFetchItemData]);
	  function handleTradeInfluence(e) {
	    if (tradeInfluence.indexOf(e) === -1) {
	      setTradeInfluence([...tradeInfluence, e]);
	    } else {
	      let tempArray = [...tradeInfluence];
	      tempArray.splice(tradeInfluence.indexOf(e), 1);
	      setTradeInfluence(tempArray);
	    }
	  }
	  function handleTradeDefence(e) {
	    if (tradeDefence.indexOf(e) === -1) {
	      setTradeDefence([...tradeDefence, e]);
	    } else {
	      let tempArray = [...tradeDefence];
	      tempArray.splice(tradeDefence.indexOf(e), 1);
	      setTradeDefence(tempArray);
	    }
	  }
	  function handleChangeIlv(e) {
	    tradeIlv === 0 ? setTradeIlv(e) : setTradeIlv(0);
	  }
	  function handleChangeLinks(e) {
	    tradeLinks === 0 ? setTradeLinks(e) : setTradeLinks(0);
	  }
	  function handleChangeImplicits(e) {
	    let tempArray = [...tradeImplicits];
	    tempArray.forEach(implicit => {
	      if (implicit.text === e) {
	        implicit.display = !implicit.display;
	      }
	    });
	    setTradeImplicits(tempArray);
	  }
	  function handleChangeExplicits(e) {
	    let tempArray = [...tradeExplicits];
	    tempArray.forEach(explicit => {
	      if (explicit.text === e) {
	        explicit.display = !explicit.display;
	      }
	    });
	    setTradeExplicits(tempArray);
	  }
	  function changeAllPrecision(bool) {
	    let tempImplicitsArray = [...tradeImplicits];
	    let tempExplicitsArray = [...tradeExplicits];
	    tempImplicitsArray.forEach(implicit => {
	      implicit.precision = bool;
	    });
	    tempExplicitsArray.forEach(explicit => {
	      explicit.precision = bool;
	    });
	    setTradeImplicits(tempImplicitsArray);
	    setTradeExplicits(tempExplicitsArray);
	  }
	  function handleChangePrecision(e) {
	    if (e === "min") {
	      setCustomPrecision(false);
	      changeAllPrecision(false);
	    }
	    if (e === "exact") {
	      setCustomPrecision(false);
	      changeAllPrecision(true);
	    }
	    if (e === "custom") {
	      setCustomPrecision(true);
	      changeAllPrecision(false);
	    }
	  }
	  function handleCustomPrecisionChange(e, type) {
	    console.log(e);
	    if (type === "implicit") {
	      let tempArray = [...tradeImplicits];
	      let newImplicit = e;
	      newImplicit.precision = !newImplicit.precision;
	      tempArray.splice(tempArray.indexOf(e), 1, newImplicit);
	      setTradeImplicits([...tempArray]);
	    } else {
	      let tempArray = [...tradeExplicits];
	      let newExplicit = e;
	      newExplicit.precision = !newExplicit.precision;
	      tempArray.splice(tempArray.indexOf(e), 1, newExplicit);
	      setTradeExplicits([...tempArray]);
	    }
	  }
	  let tradeUrl = generateTradeUrl(tradeInfluence, tradeDefence, tradeIlv, tradeLinks, tradeCorrupted, tradeImplicits, tradeExplicits, item, league);
	  reactExports.useEffect(() => {
	    tradeUrl = generateTradeUrl(tradeInfluence, tradeDefence, tradeIlv, tradeLinks, tradeCorrupted, tradeImplicits, tradeExplicits, item, league);
	  }, []);
	  return /*#__PURE__*/React.createElement("section", {
	    className: "flex flex-col p-5 w-full lg:w-6/12"
	  }, /*#__PURE__*/React.createElement("p", null, "Select desired modifiers for trade:"), item.defence[0] || item.iLv || item.sockets[0] || item.corrupted ? /*#__PURE__*/React.createElement("p", {
	    className: `item_split item_split-${item.rarity.toLowerCase()}`
	  }) : /*#__PURE__*/React.createElement(React.Fragment, null), /*#__PURE__*/React.createElement("div", {
	    className: "flex flex-col items-center text-start item_stats"
	  }, /*#__PURE__*/React.createElement("div", {
	    className: "w-full"
	  }, item.influence[0] ? item.influence.map((inf, i) => {
	    return /*#__PURE__*/React.createElement("div", {
	      className: "flex flex-row my-2 gap-4 items-center w-full",
	      key: i
	    }, /*#__PURE__*/React.createElement("input", {
	      type: "checkbox",
	      id: `${itemNumber}_${itemName}_influence_${i}`,
	      className: "h-fit",
	      onChange: () => handleTradeInfluence(inf)
	    }), /*#__PURE__*/React.createElement("label", {
	      htmlFor: `${itemNumber}_${itemName}_influence_${i}`
	    }, "Has ", /*#__PURE__*/React.createElement("strong", {
	      className: "item_rarity-normal"
	    }, inf), " Influence"));
	  }) : /*#__PURE__*/React.createElement(React.Fragment, null), item.defence[0] ? item.defence.map((def, i) => {
	    return /*#__PURE__*/React.createElement("div", {
	      className: "flex flex-row my-2 gap-4 items-center w-full",
	      key: i
	    }, /*#__PURE__*/React.createElement("input", {
	      type: "checkbox",
	      id: `${itemNumber}_${itemName}_defence_${i}`,
	      className: "h-fit",
	      onChange: () => handleTradeDefence(def)
	    }), /*#__PURE__*/React.createElement("label", {
	      htmlFor: `${itemNumber}_${itemName}_defence_${i}`
	    }, /*#__PURE__*/React.createElement("strong", {
	      className: "item_rarity-normal"
	    }, def.split(': ')[0], ":"), " ", def.split(': ')[1]));
	  }) : /*#__PURE__*/React.createElement(React.Fragment, null), item.iLv ? /*#__PURE__*/React.createElement("div", {
	    className: "flex flex-row my-2 gap-4 items-center w-full"
	  }, /*#__PURE__*/React.createElement("input", {
	    type: "checkbox",
	    id: `${itemNumber}_${itemName}_ilv`,
	    className: "h-fit",
	    onChange: () => handleChangeIlv(item.iLv)
	  }), /*#__PURE__*/React.createElement("label", {
	    htmlFor: `${itemNumber}_${itemName}_ilv`
	  }, /*#__PURE__*/React.createElement("strong", {
	    className: "item_rarity-normal"
	  }, "Item level:"), " ", item.iLv)) : /*#__PURE__*/React.createElement(React.Fragment, null), item.sockets[0] ? /*#__PURE__*/React.createElement("div", {
	    className: "flex flex-row my-2 gap-4 items-center w-full"
	  }, /*#__PURE__*/React.createElement("input", {
	    type: "checkbox",
	    id: `${itemNumber}_${itemName}_link`,
	    className: "h-fit",
	    onChange: () => handleChangeLinks(item.sockets.length)
	  }), /*#__PURE__*/React.createElement("label", {
	    htmlFor: `${itemNumber}_${itemName}_link`
	  }, /*#__PURE__*/React.createElement("strong", {
	    className: "item_rarity-normal"
	  }, "Socket Links:"), " ", item.sockets.length)) : /*#__PURE__*/React.createElement(React.Fragment, null), item.corrupted ? /*#__PURE__*/React.createElement("div", {
	    className: "flex flex-row my-2 gap-4 items-center w-full"
	  }, /*#__PURE__*/React.createElement("select", {
	    name: "corruptingSorting",
	    id: `${itemNumber}_${itemName}_corrupted`,
	    className: "text-black p-1 h-fit",
	    defaultValue: "any",
	    onChange: e => setTradeCorrupted(e.target.value)
	  }, /*#__PURE__*/React.createElement("option", {
	    value: "any"
	  }, "any"), /*#__PURE__*/React.createElement("option", {
	    value: "yes"
	  }, "yes"), /*#__PURE__*/React.createElement("option", {
	    value: "no"
	  }, "no")), /*#__PURE__*/React.createElement("label", {
	    htmlFor: `${itemNumber}_${itemName}_corrupted`,
	    className: "item_corrupted"
	  }, "Corrupted")) : /*#__PURE__*/React.createElement(React.Fragment, null)), item.implicits.length ? /*#__PURE__*/React.createElement("div", {
	    className: "w-full"
	  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
	    className: `item_split item_split-${item.rarity.toLowerCase()}`
	  }), /*#__PURE__*/React.createElement("p", {
	    className: "text-center"
	  }, "Implicits: ")), /*#__PURE__*/React.createElement("div", null, item.implicits.map((implicit, i) => {
	    return implicit.filter !== null ? /*#__PURE__*/React.createElement("div", {
	      className: "flex flex-row my-2 gap-4 justify-between w-full",
	      key: i
	    }, /*#__PURE__*/React.createElement("div", {
	      className: "flex flex-row gap-4 max-w-3/4 items-center"
	    }, /*#__PURE__*/React.createElement("input", {
	      type: "checkbox",
	      id: `${itemNumber}_${itemName}_implicit_${i}`,
	      className: "h-fit",
	      onChange: () => handleChangeImplicits(implicit.text)
	    }), /*#__PURE__*/React.createElement("label", {
	      htmlFor: `${itemNumber}_${itemName}_implicit_${i}`,
	      className: handleExplicitClass(implicit.text)
	    }, implicit.text)), customPrecision ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
	      className: "flex flex-row gap-4 items-center"
	    }, /*#__PURE__*/React.createElement("label", {
	      htmlFor: `${itemNumber}_${itemName}_implicit_precision_${i}`,
	      className: handleExplicitClass(implicit.text)
	    }, "Exact:"), /*#__PURE__*/React.createElement("input", {
	      type: "checkbox",
	      id: `${itemNumber}_${itemName}_implicit_precision_${i}`,
	      className: "h-fit",
	      onChange: () => handleCustomPrecisionChange(implicit, "implicit")
	    }))) : /*#__PURE__*/React.createElement(React.Fragment, null)) : /*#__PURE__*/React.createElement(React.Fragment, null);
	  }))) : /*#__PURE__*/React.createElement(React.Fragment, null), item.explicits.length ? /*#__PURE__*/React.createElement("div", {
	    className: "w-full"
	  }, /*#__PURE__*/React.createElement("p", {
	    className: `item_split item_split-${item.rarity.toLowerCase()}`
	  }), /*#__PURE__*/React.createElement("p", {
	    className: "text-center"
	  }, "Explicits: "), /*#__PURE__*/React.createElement("div", null, item.explicits.map((explicit, i) => {
	    return explicit.filter !== null ? /*#__PURE__*/React.createElement("div", {
	      className: "flex flex-row my-2 gap-4 justify-between w-full",
	      key: i
	    }, /*#__PURE__*/React.createElement("div", {
	      className: "flex flex-row gap-4 max-w-3/4 items-center"
	    }, /*#__PURE__*/React.createElement("input", {
	      type: "checkbox",
	      id: `${itemNumber}_${itemName}_explicit_${i}`,
	      className: "h-fit",
	      onChange: () => handleChangeExplicits(explicit.text)
	    }), /*#__PURE__*/React.createElement("label", {
	      htmlFor: `${itemNumber}_${itemName}_explicit_${i}`,
	      className: handleExplicitClass(explicit.text)
	    }, explicit.text)), customPrecision ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
	      className: "flex flex-row gap-4 items-center"
	    }, /*#__PURE__*/React.createElement("label", {
	      htmlFor: `${itemNumber}_${itemName}_explicit_precision_${i}`,
	      className: handleExplicitClass(explicit.text)
	    }, "Exact: "), /*#__PURE__*/React.createElement("input", {
	      type: "checkbox",
	      id: `${itemNumber}_${itemName}_explicit_precision_${i}`,
	      className: "h-fit",
	      onChange: () => handleCustomPrecisionChange(explicit, "explicit")
	    }))) : /*#__PURE__*/React.createElement(React.Fragment, null)) : /*#__PURE__*/React.createElement(React.Fragment, null);
	  }))) : /*#__PURE__*/React.createElement(React.Fragment, null)), /*#__PURE__*/React.createElement("p", {
	    className: `item_split item_split-${item.rarity.toLowerCase()}`
	  }), /*#__PURE__*/React.createElement("div", {
	    className: "flex justify-center w-full"
	  }, /*#__PURE__*/React.createElement("div", {
	    className: "flex flex-col md:flex-row items-center justify-evenly w-full md:w-3/4 gap-2"
	  }, /*#__PURE__*/React.createElement("div", {
	    className: "flex flex-col gap-2"
	  }, /*#__PURE__*/React.createElement("label", {
	    htmlFor: `${itemNumber}_${itemName}_sorting`
	  }, "Trading Precision"), /*#__PURE__*/React.createElement("select", {
	    name: "sorting",
	    id: `${itemNumber}_${itemName}_sorting`,
	    className: "text-black p-1",
	    defaultValue: "min",
	    onChange: e => handleChangePrecision(e.target.value)
	  }, /*#__PURE__*/React.createElement("option", {
	    value: "min"
	  }, "min"), /*#__PURE__*/React.createElement("option", {
	    value: "exact"
	  }, "exact"), /*#__PURE__*/React.createElement("option", {
	    value: "custom"
	  }, "custom"))), loader ? /*#__PURE__*/React.createElement("div", {
	    className: "lds-dual-ring"
	  }) : /*#__PURE__*/React.createElement(React.Fragment, null), !loader && itemEstimatedPriceArr !== undefined && itemEstimatedPriceArr.length !== 0 ? /*#__PURE__*/React.createElement(React.Fragment, null, itemEstimatedPriceArr.length !== 1 ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("button", {
	    onClick: () => setIsOpen(true),
	    className: "text-black bg-slate-200 rounded-md p-2 decoration-inherit"
	  }, "Check Prices"), /*#__PURE__*/React.createElement(Modal, {
	    open: isOpen,
	    close: () => setIsOpen(false)
	  }, /*#__PURE__*/React.createElement("div", {
	    className: "w-full"
	  }, /*#__PURE__*/React.createElement("h3", {
	    className: "text-center text-2xl m-2 font-bold"
	  }), /*#__PURE__*/React.createElement("ul", {
	    className: "flex flex-col items-center justify-center"
	  }, /*#__PURE__*/React.createElement("table", {
	    className: "w-3/4 border-collapse border border-black m-0 p-0"
	  }, /*#__PURE__*/React.createElement("caption", {
	    className: "text-xl m-2"
	  }, "Estimated Prices :"), /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", {
	    className: "text-lg font-bold uppercase"
	  }, /*#__PURE__*/React.createElement("th", null, "Item Name"), /*#__PURE__*/React.createElement("th", null, "Item Level"), /*#__PURE__*/React.createElement("th", null, "Influence"), /*#__PURE__*/React.createElement("th", null, "Estimed Price"))), /*#__PURE__*/React.createElement("tbody", null, itemEstimatedPriceArr.map((price, i) => {
	    return /*#__PURE__*/React.createElement("tr", {
	      key: `${itemName}_${i}`
	    }, /*#__PURE__*/React.createElement("td", {
	      "data-label": "Item Name"
	    }, itemName), /*#__PURE__*/React.createElement("td", {
	      "data-label": "Item Level"
	    }, price.levelRequired), /*#__PURE__*/React.createElement("td", {
	      "data-label": "Influence"
	    }, price.variant ? price.variant : 'None'), /*#__PURE__*/React.createElement("td", {
	      "data-label": "Estimed Price",
	      className: "flex flex-row justify-between md:justify-center items-center"
	    }, displayEstimatedPrice(price)));
	  })))), /*#__PURE__*/React.createElement("div", {
	    className: "flex justify-center md:justify-end"
	  }, /*#__PURE__*/React.createElement("button", {
	    onClick: () => setIsOpen(false),
	    className: "bg-stone-500 text-white text-center p-2 rounded-sm"
	  }, "Close"))))) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
	    className: "flex flex-row md:flex-col"
	  }, /*#__PURE__*/React.createElement("p", {
	    className: "flex items-center"
	  }, /*#__PURE__*/React.createElement("strong", null, "Estimated Price: ")), /*#__PURE__*/React.createElement("div", {
	    className: "text-xl flex justify-center items-center"
	  }, displayEstimatedPrice(itemEstimatedPriceArr[0]))))) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
	    className: "flex flex-row md:flex-col"
	  }, /*#__PURE__*/React.createElement("p", {
	    className: "flex items-center"
	  }, /*#__PURE__*/React.createElement("strong", null, "Estimated Price:")), /*#__PURE__*/React.createElement("p", null, "Not fetched"))), /*#__PURE__*/React.createElement("a", {
	    href: tradeUrl,
	    className: "text-black bg-slate-200 rounded-md p-4 decoration-inherit",
	    target: "_blank",
	    rel: "noopener noreferrer"
	  }, "Trade"))));
	}

	function ItemInfo({
	  item,
	  allFetchItemData
	}) {
	  const didMount = reactExports.useRef(false);
	  const [itemImg, setItemImg] = reactExports.useState(null);
	  const [loader, setLoader] = reactExports.useState(true);
	  reactExports.useEffect(() => {
	    if (didMount.current) {
	      if (item.rarity === "UNIQUE") {
	        let index = allFetchItemData[item.baseInfo.item_category].lines.map(e => e.name).indexOf(item.name);
	        if (index !== -1) {
	          setItemImg(allFetchItemData[item.baseInfo.item_category].lines[index].icon);
	        }
	      } else if (item.baseInfo.base_type === "Cluster Jewel") {
	        if (item.base === "Small Cluster Jewel") {
	          setItemImg("https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvSmV3ZWxzL05ld0dlbUJhc2UxIiwidyI6MSwiaCI6MSwic2NhbGUiOjF9XQ/0eb1a9d981/NewGemBase1.png");
	        }
	        if (item.base === "Medium Cluster Jewel") {
	          setItemImg("https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvSmV3ZWxzL05ld0dlbUJhc2UyIiwidyI6MSwiaCI6MSwic2NhbGUiOjF9XQ/78f6bf8356/NewGemBase2.png");
	        }
	        if (item.base === "Large Cluster Jewel") {
	          setItemImg("https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvSmV3ZWxzL05ld0dlbUJhc2UzIiwidyI6MSwiaCI6MSwic2NhbGUiOjF9XQ/db35e60885/NewGemBase3.png");
	        }
	      } else {
	        let index = allFetchItemData.baseType.lines.map(e => e.name).indexOf(item.base);
	        if (index !== -1) {
	          setItemImg(allFetchItemData.baseType.lines[index].icon);
	        }
	      }
	    } else {
	      didMount.current = true;
	    }
	  }, [allFetchItemData]);
	  reactExports.useEffect(() => {
	    setTimeout(() => {
	      setLoader(false);
	    }, 200);
	  }, [loader]);
	  return /*#__PURE__*/React.createElement("section", {
	    className: "w-full lg:w-5/12"
	  }, /*#__PURE__*/React.createElement("div", {
	    className: `item_border-${item.rarity.toLowerCase()} item_background-${item.rarity.toLowerCase()} p-5`
	  }, /*#__PURE__*/React.createElement("span", {
	    className: `item_rarity-${item.rarity.toLowerCase()} text-2xl`
	  }, /*#__PURE__*/React.createElement("strong", null, item.rarity === 'UNIQUE' ? `${item.name} - ${item.base}` : `${item.base}`))), /*#__PURE__*/React.createElement("div", {
	    className: `item_border-${item.rarity.toLowerCase()} item_background-${item.rarity.toLowerCase()} p-5 flex flex-col items-center`
	  }, /*#__PURE__*/React.createElement("div", {
	    className: "flex flex-row gap-4 items-center"
	  }, loader ? /*#__PURE__*/React.createElement("div", {
	    className: "lds-dual-ring"
	  }) : /*#__PURE__*/React.createElement(React.Fragment, null), !loader && itemImg !== null ? /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("img", {
	    src: itemImg,
	    className: "scale-100 lg:scale-110 xl:scale-125 my-0 lg:my-2 xl:my-4",
	    alt: "Loading...",
	    title: item.rarity === "UNIQUE" ? item.name : item.base
	  })) : /*#__PURE__*/React.createElement(React.Fragment, null), /*#__PURE__*/React.createElement("div", null, item.influence[0] ? item.influence.map((inf, i) => {
	    return /*#__PURE__*/React.createElement("p", {
	      key: i
	    }, /*#__PURE__*/React.createElement("strong", {
	      className: "item_rarity-normal"
	    }, inf), " Item");
	  }) : /*#__PURE__*/React.createElement(React.Fragment, null), item.defence[0] ? item.defence.map((def, i) => {
	    return /*#__PURE__*/React.createElement("p", {
	      key: i
	    }, /*#__PURE__*/React.createElement("strong", {
	      className: "item_rarity-normal"
	    }, def.split(': ')[0], ":"), " ", def.split(': ')[1]);
	  }) : /*#__PURE__*/React.createElement(React.Fragment, null), item.rarity ? /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("strong", {
	    className: "item_rarity-normal"
	  }, "Rarity:"), " ", /*#__PURE__*/React.createElement("span", {
	    className: `item_rarity-${item.rarity.toLowerCase()}`
	  }, item.rarity)) : /*#__PURE__*/React.createElement(React.Fragment, null), item.iLv ? /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("strong", {
	    className: "item_rarity-normal"
	  }, "Item Level:"), " ", item.iLv) : /*#__PURE__*/React.createElement(React.Fragment, null), item.sockets[0] ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("strong", {
	    className: "item_rarity-normal"
	  }, "Sockets:"), " ", item.sockets.map((socket, i) => /*#__PURE__*/React.createElement("span", {
	    key: i,
	    className: `socket-${socket}`
	  }, socket))), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("strong", {
	    className: "item_rarity-normal"
	  }, "Links:"), " ", item.sockets.length)) : /*#__PURE__*/React.createElement(React.Fragment, null))), /*#__PURE__*/React.createElement("div", {
	    className: "item_stats"
	  }, item.implicits.length ? /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
	    className: `item_split item_split-${item.rarity.toLowerCase()}`
	  }), item.implicits.map((implicit, i) => {
	    return /*#__PURE__*/React.createElement("p", {
	      key: i,
	      className: handleExplicitClass(implicit.text)
	    }, implicit.text);
	  })) : /*#__PURE__*/React.createElement(React.Fragment, null), item.explicits.length ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("p", {
	    className: `item_split item_split-${item.rarity.toLowerCase()}`
	  }), item.explicits.map((explicit, i) => {
	    return /*#__PURE__*/React.createElement("p", {
	      key: i,
	      className: handleExplicitClass(explicit.text)
	    }, explicit.text);
	  })) : /*#__PURE__*/React.createElement(React.Fragment, null), item.corrupted ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("p", {
	    className: `item_split item_split-${item.rarity.toLowerCase()}`
	  }), /*#__PURE__*/React.createElement("p", {
	    className: "item_corrupted"
	  }, "Corrupted")) : /*#__PURE__*/React.createElement(React.Fragment, null))));
	}

	function Item({
	  itemNumber,
	  item,
	  league,
	  allFetchItemData
	}) {
	  return /*#__PURE__*/React.createElement("div", {
	    className: "flex flex-col lg:flex-row px-8 md:px-0 gap-4 text-center justify-center md:justify-evenly items-center w-full md:w-3/4 lg:w-full"
	  }, /*#__PURE__*/React.createElement(ItemInfo, {
	    item: item,
	    allFetchItemData: allFetchItemData
	  }), /*#__PURE__*/React.createElement(ItemTrade, {
	    item: item,
	    league: league,
	    itemNumber: itemNumber,
	    key: itemNumber,
	    allFetchItemData: allFetchItemData
	  }));
	}

	function ItemFeed({
	  items,
	  leagueChoice
	}) {
	  const [allFetchItemData, setAllFetchItemData] = reactExports.useState({});
	  let containsUniqueWeapons = false;
	  let containsUniqueArmour = false;
	  let containsUniqueAccessory = false;
	  let containsUniqueFlasks = false;
	  let containsUniqueJewels = false;
	  let containsClusterJewels = false;
	  for (let i = 0, l = items.length; i < l; i++) {
	    if (items[i].rarity === "UNIQUE" && items[i].baseInfo.item_category === "weapons" && containsUniqueWeapons === false) {
	      containsUniqueWeapons = true;
	    }
	    if (items[i].rarity === "UNIQUE" && items[i].baseInfo.item_category === "armour" && containsUniqueArmour === false) {
	      containsUniqueArmour = true;
	    }
	    if (items[i].rarity === "UNIQUE" && items[i].baseInfo.item_category === "accessories" && containsUniqueAccessory === false) {
	      containsUniqueAccessory = true;
	    }
	    if (items[i].rarity === "UNIQUE" && items[i].baseInfo.item_category === "flasks" && containsUniqueFlasks === false) {
	      containsUniqueFlasks = true;
	    }
	    if (items[i].rarity === "UNIQUE" && items[i].baseInfo.item_category === "jewels" && containsUniqueJewels === false) {
	      containsUniqueJewels = true;
	    }
	    if (items[i].rarity !== "UNIQUE" && items[i].base.includes('Cluster') && containsClusterJewels === false) {
	      containsClusterJewels = true;
	    }
	  }
	  const handleFetchUniques = async () => {
	    let uniqueWeaponsData = null;
	    let uniqueArmourData = null;
	    let uniqueAccessoryData = null;
	    let uniqueFlaskData = null;
	    let uniqueJewelData = null;
	    let clusterJewelData = null;
	    let itemBaseData = null;
	    let allItemData = null;
	    let proxyUrl = `http://localhost:8080/`;
	    if (containsUniqueWeapons) {
	      uniqueWeaponsData = await fetchData(proxyUrl + `https://poe.ninja/api/data/itemoverview?league=${leagueChoice}&type=UniqueWeapon`);
	    }
	    if (containsUniqueArmour) {
	      uniqueArmourData = await fetchData(proxyUrl + `https://poe.ninja/api/data/itemoverview?league=${leagueChoice}&type=UniqueArmour`);
	    }
	    if (containsUniqueAccessory) {
	      uniqueAccessoryData = await fetchData(proxyUrl + `https://poe.ninja/api/data/itemoverview?league=${leagueChoice}&type=UniqueAccessory`);
	    }
	    if (containsUniqueFlasks) {
	      uniqueFlaskData = await fetchData(proxyUrl + `https://poe.ninja/api/data/itemoverview?league=${leagueChoice}&type=UniqueFlask`);
	    }
	    if (containsUniqueJewels) {
	      uniqueJewelData = await fetchData(proxyUrl + `https://poe.ninja/api/data/itemoverview?league=${leagueChoice}&type=UniqueJewel`);
	    }
	    if (containsClusterJewels) {
	      clusterJewelData = await fetchData(proxyUrl + `https://poe.ninja/api/data/itemoverview?league=${leagueChoice}&type=ClusterJewel`);
	    }
	    itemBaseData = await fetchData(proxyUrl + `https://poe.ninja/api/data/itemoverview?league=${leagueChoice}&type=BaseType`);
	    allItemData = await {
	      weapons: uniqueWeaponsData,
	      armour: uniqueArmourData,
	      accessories: uniqueAccessoryData,
	      flasks: uniqueFlaskData,
	      jewels: uniqueJewelData,
	      cluster: clusterJewelData,
	      baseType: itemBaseData
	    };
	    setAllFetchItemData(allItemData);
	  };
	  reactExports.useEffect(() => {
	    handleFetchUniques();
	  }, [items, leagueChoice]);
	  return items.map((item, i) => {
	    return /*#__PURE__*/React.createElement(reactExports.Fragment, {
	      key: i
	    }, /*#__PURE__*/React.createElement(Item, {
	      itemNumber: i,
	      item: item,
	      league: leagueChoice,
	      allFetchItemData: allFetchItemData
	    }), /*#__PURE__*/React.createElement("p", {
	      className: `item_split item_split-normal`
	    }));
	  });
	}

	const InputCode = ({
	  handleSubmit
	}) => {
	  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
	    className: "text-white text-center text-2xl"
	  }, "POE Build Trade Helper"), /*#__PURE__*/React.createElement("p", {
	    className: "text-white text-center"
	  }, "Put build import code and generate POE.trade URL for each Item!"), /*#__PURE__*/React.createElement("form", {
	    className: "flex flex-col justify-center items-center gap-2",
	    onSubmit: handleSubmit
	  }, /*#__PURE__*/React.createElement("textarea", {
	    className: "w-3/4 max-w-4xl rounded-sm p-2 text-sm",
	    placeholder: "Put build import code here",
	    type: "text",
	    name: "importCode",
	    rows: "5",
	    cols: "50",
	    required: true
	  }), /*#__PURE__*/React.createElement("div", {
	    className: "flex flex-col md:flex-row justify-center items-center gap-2"
	  }, /*#__PURE__*/React.createElement("select", {
	    className: "w-50 h-10 text-center",
	    defaultValue: "Necropolis",
	    id: "leagueSelect"
	  }, /*#__PURE__*/React.createElement("option", {
	    value: "Necropolis"
	  }, "Necropolis"), /*#__PURE__*/React.createElement("option", {
	    value: "Standard"
	  }, "Standard"), /*#__PURE__*/React.createElement("option", {
	    value: "Ruthless%20Necropolis"
	  }, "Ruthless Necropolis"), /*#__PURE__*/React.createElement("option", {
	    value: "Ruthless"
	  }, "Ruthless"), /*#__PURE__*/React.createElement("option", {
	    value: "Hardcore%20Necropolis"
	  }, "Hardcore Necropolis"), /*#__PURE__*/React.createElement("option", {
	    value: "Hardcore"
	  }, "Hardcore"), /*#__PURE__*/React.createElement("option", {
	    value: "HC%20Ruthless%20Necropolis"
	  }, "HardCore Ruthless Necropolis"), /*#__PURE__*/React.createElement("option", {
	    value: "Hardcore%20Ruthless"
	  }, "Hardcore Ruthless")), /*#__PURE__*/React.createElement("div", {
	    className: "flex flex-row gap-3"
	  }, /*#__PURE__*/React.createElement("button", {
	    className: "text-center min-w-10 p-1 rounded-md"
	  }, "Go"), /*#__PURE__*/React.createElement("button", {
	    className: "text-center min-w-10 p-1 rounded-md",
	    onClick: event => {
	      event.preventDefault();
	      location.reload();
	    }
	  }, "Restart")))));
	};

	//init
	let buildItemArray = [];
	let defaultLeagueChoice = "Necropolis";
	let allModifiers = null;
	let allItemData = null;
	function App() {
	  const [inputError, setInputError] = reactExports.useState(false);
	  const [loader, setLoader] = reactExports.useState(false);
	  const [isOpen, setIsOpen] = reactExports.useState(false);
	  const handleFetchItemData = async () => {
	    allModifiers = await fetchData('./item_mods/allModifiers.json');
	    allItemData = await fetchData('./item_mods/allItemTypes.json');
	  };
	  if (allModifiers === null && allItemData === null) {
	    handleFetchItemData();
	  }
	  function handleSubmit(event) {
	    event.preventDefault();
	    buildItemArray = [];
	    setInputError(false);
	    setLoader(true);

	    //retrieve league choice
	    let e = document.getElementById("leagueSelect");
	    defaultLeagueChoice !== e.value;

	    //Retrieve Code and decode
	    const code = event.target.importCode.value;
	    const htmlItems = codeDecompress(code);
	    if (!isIterable(htmlItems) || htmlItems[0].textContent === undefined) {
	      setInputError(true);
	      setLoader(false);
	      //setReload(true);
	      return;
	    }

	    //Create item obj for each item
	    let tempItemArray = [];
	    for (let i of htmlItems) {
	      let tempItem = createItemObj(i, allItemData);
	      tempItemArray.push(tempItem);
	    }

	    //Translate mods for filter
	    tempItemArray.map(item => {
	      translateModifiers(item.implicits, allModifiers, 'implicit');
	      item.rarity === "UNIQUE" ? translateModifiers(item.explicits, allModifiers, 'explicit') : translateModifiersRare(item, allItemData, allModifiers);
	      if (item.explicits.some(i => /hunter|shaper|crusader|warlord|elder|redeemer/.test(i.influence))) {
	        handleInfluenceExplicits(item, allItemData);
	      }
	    });
	    buildItemArray = addOrder(tempItemArray);
	    setTimeout(() => {
	      setLoader(false);
	    }, 500);
	  }
	  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("button", {
	    onClick: () => setIsOpen(true),
	    className: "openModalBtn"
	  }, /*#__PURE__*/React.createElement("img", {
	    src: "./img/info_icon.jpg",
	    alt: "How to use",
	    title: "How to use"
	  })), /*#__PURE__*/React.createElement(Modal, {
	    open: isOpen,
	    close: () => setIsOpen(false)
	  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
	    className: "text-center"
	  }, "How to Use:"), /*#__PURE__*/React.createElement("p", {
	    className: `item_split bg-slate-950 my-4`
	  }), /*#__PURE__*/React.createElement("div", {
	    className: "my-2"
	  }, /*#__PURE__*/React.createElement("p", null, "1 - Import Build Code from: POE Ninja, Path Of Building, Pastebind or any equivalent"), /*#__PURE__*/React.createElement("p", null, "2 - Paste the code into the Import code Input"), /*#__PURE__*/React.createElement("p", null, "3 - Select your league"), /*#__PURE__*/React.createElement("p", null, "4 - Click \"Go\""), /*#__PURE__*/React.createElement("p", null, "The list of item of the build are now imported."), /*#__PURE__*/React.createElement("p", null, "An estimated price should give you an idea of the item price."), /*#__PURE__*/React.createElement("p", null, "You can now select the desired stats for you item and press \"Trade\" !")), /*#__PURE__*/React.createElement("p", {
	    className: `item_split bg-slate-950 my-4`
	  }), /*#__PURE__*/React.createElement("div", {
	    className: "my-2"
	  }, /*#__PURE__*/React.createElement("p", {
	    className: "text-center"
	  }, "\u26A0\uFE0F WARNING \u26A0\uFE0F"), /*#__PURE__*/React.createElement("p", null, "Estimated Price is about the cheapest item best you can find. Real items with desired stats often cost way more !"), /*#__PURE__*/React.createElement("p", null, "This value is given just to give an idea about the item rarity."), /*#__PURE__*/React.createElement("p", null, "Too much stats selecting could end up in showing no results (good items are rare) !"), /*#__PURE__*/React.createElement("p", null, "Image and Prices Data are fetched with the Poe.ninja API.")), /*#__PURE__*/React.createElement("p", {
	    className: `item_split bg-slate-950 my-4`
	  }), /*#__PURE__*/React.createElement("div", {
	    className: "my-2"
	  }, /*#__PURE__*/React.createElement("p", null, "This app is a personal project."), /*#__PURE__*/React.createElement("p", null, "Project Repo: ", /*#__PURE__*/React.createElement("a", {
	    href: "https://github.com/BadaboommS/PoeTradeHelper"
	  }, "Link"))), /*#__PURE__*/React.createElement("p", {
	    className: `item_split bg-slate-950 my-4`
	  }), /*#__PURE__*/React.createElement("div", {
	    className: "flex justify-center my-2"
	  }, /*#__PURE__*/React.createElement("button", {
	    onClick: () => setIsOpen(false),
	    className: "bg-stone-500 text-white text-center p-2 rounded-sm"
	  }, "Got It !"))))), /*#__PURE__*/React.createElement(InputCode, {
	    handleSubmit: handleSubmit
	  }), /*#__PURE__*/React.createElement("p", {
	    className: `item_split item_split-normal my-4`
	  }), loader ? /*#__PURE__*/React.createElement("div", {
	    className: "lds-dual-ring"
	  }) : /*#__PURE__*/React.createElement(React.Fragment, null), inputError ? /*#__PURE__*/React.createElement("p", {
	    className: "text-white text-center"
	  }, "Build code not recognized! Try another Code.") : '', !loader && !inputError && buildItemArray[0] ? /*#__PURE__*/React.createElement("article", {
	    className: "flex flex-col items-center m-auto text-white"
	  }, /*#__PURE__*/React.createElement(ItemFeed, {
	    items: buildItemArray,
	    leagueChoice: defaultLeagueChoice
	  })) : /*#__PURE__*/React.createElement(React.Fragment, null));
	}

	client.createRoot(document.querySelector('#root')).render( /*#__PURE__*/React.createElement(App, null));

})();
