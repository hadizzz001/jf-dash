exports.id = 812;
exports.ids = [812];
exports.modules = {

/***/ 49624:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/**
 * @license uploadcare-widget v3.21.2
 *
 * Copyright (c) 2023 Uploadcare, Inc.
 *
 * This source code is licensed under the BSD 2-Clause License
 * found in the LICENSE file in the root directory of this source tree.
 */

(function (global, factory) {
   true ? module.exports = factory(__webpack_require__(48051)) :
  0;
})(this, (function ($) { 'use strict';

  function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

  var $__default = /*#__PURE__*/_interopDefaultLegacy($);

  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);

    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      enumerableOnly && (symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      })), keys.push.apply(keys, symbols);
    }

    return keys;
  }

  function _objectSpread2(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = null != arguments[i] ? arguments[i] : {};
      i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }

    return target;
  }

  function _typeof(obj) {
    "@babel/helpers - typeof";

    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
      return typeof obj;
    } : function (obj) {
      return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    }, _typeof(obj);
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    Object.defineProperty(Constructor, "prototype", {
      writable: false
    });
    return Constructor;
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    Object.defineProperty(subClass, "prototype", {
      writable: false
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }

  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;

    try {
      Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    } else if (call !== void 0) {
      throw new TypeError("Derived constructors may only return object or undefined");
    }

    return _assertThisInitialized(self);
  }

  function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();

    return function _createSuperInternal() {
      var Super = _getPrototypeOf(Derived),
          result;

      if (hasNativeReflectConstruct) {
        var NewTarget = _getPrototypeOf(this).constructor;

        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }

      return _possibleConstructorReturn(this, result);
    };
  }

  function _superPropBase(object, property) {
    while (!Object.prototype.hasOwnProperty.call(object, property)) {
      object = _getPrototypeOf(object);
      if (object === null) break;
    }

    return object;
  }

  function _get() {
    if (typeof Reflect !== "undefined" && Reflect.get) {
      _get = Reflect.get;
    } else {
      _get = function _get(target, property, receiver) {
        var base = _superPropBase(target, property);

        if (!base) return;
        var desc = Object.getOwnPropertyDescriptor(base, property);

        if (desc.get) {
          return desc.get.call(arguments.length < 3 ? target : receiver);
        }

        return desc.value;
      };
    }

    return _get.apply(this, arguments);
  }

  function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
  }

  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
  }

  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
  }

  function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
  }

  function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
  }

  function _iterableToArrayLimit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;

    var _s, _e;

    try {
      for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"] != null) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }

  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;

    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

    return arr2;
  }

  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  function _createForOfIteratorHelper(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];

    if (!it) {
      if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
        if (it) o = it;
        var i = 0;

        var F = function () {};

        return {
          s: F,
          n: function () {
            if (i >= o.length) return {
              done: true
            };
            return {
              done: false,
              value: o[i++]
            };
          },
          e: function (e) {
            throw e;
          },
          f: F
        };
      }

      throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }

    var normalCompletion = true,
        didErr = false,
        err;
    return {
      s: function () {
        it = it.call(o);
      },
      n: function () {
        var step = it.next();
        normalCompletion = step.done;
        return step;
      },
      e: function (e) {
        didErr = true;
        err = e;
      },
      f: function () {
        try {
          if (!normalCompletion && it.return != null) it.return();
        } finally {
          if (didErr) throw err;
        }
      }
    };
  }

  // utils
  var log = function log() {
    var ref;

    try {
      var _ref;

      return (ref = window.console) != null ? typeof ref.log === 'function' ? (_ref = ref).log.apply(_ref, arguments) : undefined : undefined;
    } catch (error) {}
  };

  var debug = function debug() {
    var ref;

    if ((ref = window.console) != null ? ref.debug : undefined) {
      try {
        var _window$console;

        return (_window$console = window.console).debug.apply(_window$console, arguments);
      } catch (error) {}
    } else {
      return log.apply(void 0, ['Debug:'].concat(Array.prototype.slice.call(arguments)));
    }
  };

  var warn = function warn() {
    var ref;

    if ((ref = window.console) != null ? ref.warn : undefined) {
      try {
        var _window$console2;

        return (_window$console2 = window.console).warn.apply(_window$console2, arguments);
      } catch (error) {}
    } else {
      return log.apply(void 0, ['Warning:'].concat(Array.prototype.slice.call(arguments)));
    }
  };

  var messages = {};

  var warnOnce = function warnOnce(msg) {
    if (messages[msg] == null) {
      messages[msg] = true;
      return warn(msg);
    }
  };

  var isWindowDefined = function isWindowDefined() {
    return (typeof window === "undefined" ? "undefined" : _typeof(window)) === 'object';
  };

  var isWindowDefined$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    isWindowDefined: isWindowDefined
  });

  var REQUEST_WAS_THROTTLED_CODE = 'RequestThrottledError';
  var DEFAULT_THROTTLED_TIMEOUT = 15000;
  /**
   * @typedef {object} RetryState
   * @property {number} [attempt]
   * @property {number} [timeoutId]
   * @property {JQuery.jqXHR} [jqXHR]
   */

  /**
   * @typedef {object} RetryConfig
   * @property {number} baseTimeout
   * @property {number} attempts
   * @property {number} throttledAttempts
   * @property {number} factor
   * @property {boolean} debugUploads
   * @property {Function} [onAttemptFail]
   */

  /**
   * @param {JQuery.jqXHR} jqXHR
   * @param {RetryConfig} config
   * @param {RetryState} state
   */

  function getRetrySettings(jqXHR, config, state) {
    var _jqXHR$responseJSON, _jqXHR$responseJSON$e;

    var isThrottled = (jqXHR === null || jqXHR === void 0 ? void 0 : (_jqXHR$responseJSON = jqXHR.responseJSON) === null || _jqXHR$responseJSON === void 0 ? void 0 : (_jqXHR$responseJSON$e = _jqXHR$responseJSON.error) === null || _jqXHR$responseJSON$e === void 0 ? void 0 : _jqXHR$responseJSON$e.error_code) === REQUEST_WAS_THROTTLED_CODE;

    if (isThrottled && state.attempt < config.throttledAttempts) {
      var retryAfter = Number.parseFloat(jqXHR.getResponseHeader('retry-after'));
      return {
        shouldRetry: true,
        retryTimeout: Number.isFinite(retryAfter) ? Math.ceil(retryAfter * 1000) : DEFAULT_THROTTLED_TIMEOUT
      };
    }

    var isRequestFailed = ['error', 'timeout'].indexOf(jqXHR.statusText) !== -1;

    if (isRequestFailed && state.attempt < config.attempts) {
      var retryTimeout = Math.round(config.baseTimeout * Math.pow(config.factor, state.attempt));
      return {
        shouldRetry: true,
        retryTimeout: retryTimeout
      };
    }

    return {
      shouldRetry: false
    };
  }
  /**
   *
   * @param {JQuery.jqXHR} jqXHR
   * @param {JQuery.AjaxSettings} ajaxSettings
   * @param {RetryConfig} config
   * @param {RetryState} state
   * @returns
   */


  function createPipeFilter(jqXHR, ajaxSettings, config, state) {
    return function () {
      var df = $__default["default"].Deferred();

      function nextRequest() {
        state.jqXHR = $__default["default"].ajax(ajaxSettings).retry(config, _objectSpread2(_objectSpread2({}, state), {}, {
          attempt: state.attempt + 1
        })).done(df.resolve).fail(df.reject);
      }

      var _getRetrySettings = getRetrySettings(jqXHR, config, state),
          shouldRetry = _getRetrySettings.shouldRetry,
          retryTimeout = _getRetrySettings.retryTimeout;

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      if (shouldRetry) {
        var _config$onAttemptFail;

        (_config$onAttemptFail = config.onAttemptFail) === null || _config$onAttemptFail === void 0 ? void 0 : _config$onAttemptFail.call(config, {
          attempt: state.attempt
        });

        if (config.debugUploads) {
          log("Attempt failed. Retry #".concat(state.attempt + 1, " in ").concat(retryTimeout, "ms"), jqXHR);
        }

        state.timeoutId = setTimeout(nextRequest, retryTimeout);
      } else if (jqXHR.state() === 'resolved') {
        df.resolveWith(jqXHR, args);
      } else {
        df.rejectWith(jqXHR, args);
      }

      return df;
    };
  }
  /**
   *
   * @param {JQuery.jqXHR} jqXHR
   * @param {JQuery.AjaxSettings} ajaxSettings
   * @param {RetryConfig} retryConfig
   * @param {RetryState} retryState
   * @returns {JQuery.PromiseBase}
   */


  function ajaxRetry(jqXHR, ajaxSettings, retryConfig, retryState) {
    var missedOption = ['baseTimeout', 'attempts', 'factor'].find(function (key) {
      return typeof retryConfig[key] === 'undefined';
    });

    if (missedOption) {
      warn("Option key \"".concat(missedOption, "\" is missed in the retry config."));
      return jqXHR;
    }

    retryState = {
      attempt: retryState.attempt || 0,
      timeoutId: null,
      jqXHR: null
    };
    retryConfig = _objectSpread2({
      baseTimeout: null,
      attempts: null,
      factor: null,
      onAttemptFail: null,
      debugUploads: false
    }, retryConfig);
    var pipeFilter = createPipeFilter(jqXHR, ajaxSettings, retryConfig, retryState);
    var df = jqXHR.then(pipeFilter, pipeFilter);

    df.abort = function () {
      var _retryState$jqXHR;

      clearTimeout(retryState.timeoutId);

      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      jqXHR.abort.apply(jqXHR, args);
      (_retryState$jqXHR = retryState.jqXHR) === null || _retryState$jqXHR === void 0 ? void 0 : _retryState$jqXHR.abort.apply(_retryState$jqXHR, args);
    };

    return df;
  }

  isWindowDefined() && function () {
    $__default["default"].ajaxPrefilter(function (ajaxSettings, _, jqXHR) {
      jqXHR.retry = function (retryConfig) {
        var retryState = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        return ajaxRetry(jqXHR, ajaxSettings, retryConfig, retryState);
      };
    });
  }();

  if (isWindowDefined() && window.XDomainRequest) {
    $__default["default"].ajaxTransport(function (s) {
      if (s.crossDomain && s.async) {
        if (s.timeout) {
          s.xdrTimeout = s.timeout;
          delete s.timeout;
        }

        var xdr;
        return {
          send: function send(_, complete) {
            function callback(status, statusText, responses, responseHeaders) {
              xdr.onload = xdr.onerror = xdr.ontimeout = function () {};

              xdr = undefined;
              complete(status, statusText, responses, responseHeaders);
            }

            xdr = new XDomainRequest();

            xdr.onload = function () {
              callback(200, "OK", {
                text: xdr.responseText
              }, "Content-Type: " + xdr.contentType);
            };

            xdr.onerror = function () {
              callback(404, "Not Found");
            };

            xdr.onprogress = function () {};

            xdr.ontimeout = function () {
              callback(0, "timeout");
            };

            xdr.timeout = s.xdrTimeout || Number.MAX_VALUE;
            xdr.open(s.type, s.url.replace(/^https?:/, ''));
            xdr.send(s.hasContent && s.data || null);
          },
          abort: function abort() {
            if (xdr) {
              xdr.onerror = function () {};

              xdr.abort();
            }
          }
        };
      }
    });
  }

  var version = "3.21.2";

  var fileAPI = isWindowDefined() && !!(window.File && window.FileList && window.FileReader);
  var sendFileAPI = isWindowDefined() && !!(window.FormData && fileAPI); // https://github.com/Modernizr/Modernizr/blob/master/feature-detects/draganddrop.js

  var dragAndDrop = isWindowDefined() && function () {
    var el;
    el = document.createElement('div');
    return 'draggable' in el || 'ondragstart' in el && 'ondrop' in el;
  }(); // https://github.com/Modernizr/Modernizr/blob/master/feature-detects/canvas.js


  var canvas = isWindowDefined() && function () {
    var el;
    el = document.createElement('canvas');
    return !!(el.getContext && el.getContext('2d'));
  }();

  var fileDragAndDrop = fileAPI && dragAndDrop;
  var iOSVersion = null; // TODO: don't access to navigator in module scope (NODE don't have navigator)

  var ios = isWindowDefined() && /^[^(]+\(iP(?:hone|od|ad);\s*(.+?)\)/.exec(navigator.userAgent);

  if (ios) {
    var ver = /OS (\d*)_(\d*)/.exec(ios[1]);

    if (ver) {
      iOSVersion = +ver[1] + ver[2] / 10;
    }
  } // There is no a guaranteed way to detect iPadOs, cause it mimics the desktop safari.
  // So we're checkin for multitouch support and `navigator.platform` value.
  // Since no desktop macs with multitouch exists, this check will work. For now at least.
  // Workaround source: https://stackoverflow.com/questions/57776001/how-to-detect-ipad-pro-as-ipad-using-javascript


  var isIpadOs = isWindowDefined() && navigator.maxTouchPoints && navigator.maxTouchPoints > 2 && /MacIntel/.test(navigator.platform);
  var Blob = false;

  try {
    if (isWindowDefined() && new window.Blob()) {
      Blob = window.Blob;
    }
  } catch (error) {}

  var url = isWindowDefined() && (window.URL || window.webkitURL || false);
  var URL = url && url.createObjectURL && url;
  var FileReader = isWindowDefined() && (window.FileReader != null ? window.FileReader.prototype.readAsArrayBuffer : undefined) && window.FileReader;

  var canUsePermissionsApi = function canUsePermissionsApi() {
    return typeof navigator.permissions !== 'undefined';
  };

  var indexOf$2 = [].indexOf; // utils

  var unique = function unique(arr) {
    var item, j, len, result;
    result = [];

    for (j = 0, len = arr.length; j < len; j++) {
      item = arr[j];

      if (indexOf$2.call(result, item) < 0) {
        result.push(item);
      }
    }

    return result;
  };

  var defer = function defer(fn) {
    return setTimeout(fn, 0);
  };

  var gcd = function gcd(a, b) {
    var c;

    while (b) {
      c = a % b;
      a = b;
      b = c;
    }

    return a;
  };

  var once = function once(fn) {
    var called, result;
    called = false;
    result = null;
    return function () {
      if (!called) {
        result = fn.apply(this, arguments);
        called = true;
      }

      return result;
    };
  };

  var wrapToPromise = function wrapToPromise(value) {
    return $__default["default"].Deferred().resolve(value).promise();
  }; // same as promise.then(), but if filter returns promise
  // it will be just passed forward without any special behavior


  var then = function then(pr, doneFilter, failFilter, progressFilter) {
    var compose, df;
    df = $__default["default"].Deferred();

    compose = function compose(fn1, fn2) {
      if (fn1 && fn2) {
        return function () {
          return fn2.call(this, fn1.apply(this, arguments));
        };
      } else {
        return fn1 || fn2;
      }
    };

    pr.then(compose(doneFilter, df.resolve), compose(failFilter, df.reject), compose(progressFilter, df.notify));
    return df.promise();
  }; // Build copy of source with only specified methods.
  // Handles chaining correctly.


  var bindAll = function bindAll(source, methods) {
    var target;
    target = {};
    $__default["default"].each(methods, function (i, method) {
      var fn = source[method];

      if ($__default["default"].isFunction(fn)) {
        target[method] = function () {
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          var result = fn.apply(source, args); // Fix chaining

          if (result === source) {
            return target;
          } else {
            return result;
          }
        };
      } else {
        target[method] = fn;
      }
    });
    return target;
  };

  var upperCase = function upperCase(s) {
    return s.replace(/([A-Z])/g, '_$1').toUpperCase();
  };

  var publicCallbacks = function publicCallbacks(callbacks) {
    var result;
    result = callbacks.add;
    result.add = callbacks.add;
    result.remove = callbacks.remove;
    return result;
  };

  var uuid = function uuid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      var r = Math.random() * 16 | 0;
      var v = c === 'x' ? r : r & 3 | 8;
      return v.toString(16);
    });
  }; // splitUrlRegex("url") => ["url", "scheme", "host", "path", "query", "fragment"]


  var splitUrlRegex = /^(?:([^:/?#]+):)?(?:\/\/([^/?#]*))?([^?#]*)\??([^#]*)#?(.*)$/;
  var uuidRegex = /[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}/i;
  var groupIdRegex = new RegExp("".concat(uuidRegex.source, "~[0-9]+"), 'i');
  var cdnUrlRegex = new RegExp("^/?(".concat(uuidRegex.source, ")(?:/(-/(?:[^/]+/)+)?([^/]*))?$"), 'i');

  var splitCdnUrl = function splitCdnUrl(url) {
    return cdnUrlRegex.exec(splitUrlRegex.exec(url)[3]);
  };

  var escapeRegExp = function escapeRegExp(str) {
    return str.replace(/[\\-\\[]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&');
  };

  var globRegexp = function globRegexp(str) {
    var flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'i';
    var parts;
    parts = $__default["default"].map(str.split('*'), escapeRegExp);
    return new RegExp('^' + parts.join('.+') + '$', flags);
  };

  var normalizeUrl = function normalizeUrl(url) {
    var scheme; // google.com/ → google.com
    // /google.com/ → /google.com
    // //google.com/ → http://google.com
    // http://google.com/ → http://google.com

    scheme = document.location.protocol;

    if (scheme !== 'http:') {
      scheme = 'https:';
    }

    return url.replace(/^\/\//, scheme + '//').replace(/\/+$/, '');
  };

  var fitText = function fitText(text, max) {
    if (text.length > max) {
      var head = Math.ceil((max - 3) / 2);
      var tail = Math.floor((max - 3) / 2);
      return text.slice(0, head) + '...' + text.slice(-tail);
    } else {
      return text;
    }
  };

  var fitSizeInCdnLimit = function fitSizeInCdnLimit(objSize) {
    return fitSize(objSize, [2048, 2048]);
  };

  var fitSize = function fitSize(objSize, boxSize, upscale) {
    var heightRation, widthRatio;

    if (objSize[0] > boxSize[0] || objSize[1] > boxSize[1] || upscale) {
      widthRatio = boxSize[0] / objSize[0];
      heightRation = boxSize[1] / objSize[1];

      if (!boxSize[0] || boxSize[1] && widthRatio > heightRation) {
        return [Math.round(heightRation * objSize[0]), boxSize[1]];
      } else {
        return [boxSize[0], Math.round(widthRatio * objSize[1])];
      }
    } else {
      return objSize.slice();
    }
  };

  var applyCropCoordsToInfo = function applyCropCoordsToInfo(info, crop, size, coords) {
    var downscale, h, modifiers, prefered, upscale, w, wholeImage;
    w = coords.width;
    h = coords.height;
    prefered = crop.preferedSize;
    modifiers = '';
    wholeImage = w === size[0] && h === size[1];

    if (!wholeImage) {
      modifiers += "-/crop/".concat(w, "x").concat(h, "/").concat(coords.left, ",").concat(coords.top, "/");
    }

    downscale = crop.downscale && (w > prefered[0] || h > prefered[1]);
    upscale = crop.upscale && (w < prefered[0] || h < prefered[1]);

    if (downscale || upscale) {
      var _prefered = prefered;

      var _prefered2 = _slicedToArray(_prefered, 2);

      coords.sw = _prefered2[0];
      coords.sh = _prefered2[1];
      modifiers += "-/resize/".concat(prefered.join('x'), "/");
    } else if (!wholeImage) {
      modifiers += '-/preview/';
    }

    info = $__default["default"].extend({}, info);
    info.cdnUrlModifiers = modifiers;
    info.cdnUrl = "".concat(info.originalUrl).concat(modifiers || '');
    info.crop = coords;
    return info;
  };

  var imagesOnlyAcceptTypes = ['image/*', 'image/heif', 'image/heif-sequence', 'image/heic', 'image/heic-sequence', 'image/avif', 'image/avif-sequence', '.heif', '.heifs', '.heic', '.heics', '.avif', '.avifs'].join(',');

  var fileInput = function fileInput(container, settings, fn) {
    var accept, input, _run;

    input = null;
    accept = settings.inputAcceptTypes;

    if (accept === '') {
      accept = settings.imagesOnly ? imagesOnlyAcceptTypes : null;
    }

    (_run = function run() {
      input = (settings.multiple ? $__default["default"]('<input type="file" multiple>') : $__default["default"]('<input type="file">')).attr('accept', accept).css({
        position: 'absolute',
        top: 0,
        opacity: 0,
        margin: 0,
        padding: 0,
        width: 'auto',
        height: 'auto',
        cursor: container.css('cursor')
      }).on('change', function () {
        fn(this);
        $__default["default"](this).hide();
        return _run();
      });
      return container.append(input);
    })();

    return container.css({
      position: 'relative',
      overflow: 'hidden' // to make it posible to set `cursor:pointer` on button
      // http://stackoverflow.com/a/9182787/478603

    }).mousemove(function (e) {
      var left, top, width;

      var _$$offset = $__default["default"](this).offset();

      left = _$$offset.left;
      top = _$$offset.top;
      width = input.width();
      return input.css({
        left: e.pageX - left - width + 10,
        top: e.pageY - top - 10
      });
    });
  };

  var fileSelectDialog = function fileSelectDialog(container, settings, fn) {
    var attributes = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
    var accept;
    accept = settings.inputAcceptTypes;

    if (accept === '') {
      accept = settings.imagesOnly ? imagesOnlyAcceptTypes : null;
    }

    return $__default["default"](settings.multiple ? '<input type="file" multiple>' : '<input type="file">').attr('accept', accept).attr(attributes).css({
      position: 'fixed',
      bottom: 0,
      opacity: 0
    }).on('change', function () {
      fn(this);
      return $__default["default"](this).remove();
    }).appendTo(container).focus().click().hide();
  };

  var fileSizeLabels = 'B KB MB GB TB PB EB ZB YB'.split(' ');

  var readableFileSize = function readableFileSize(value) {
    var onNaN = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
    var prefix = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
    var postfix = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '';
    var digits, fixedTo, i, threshold;
    value = parseInt(value, 10);

    if (isNaN(value)) {
      return onNaN;
    }

    digits = 2;
    i = 0;
    threshold = 1000 - 5 * Math.pow(10, 2 - Math.max(digits, 3));

    while (value > threshold && i < fileSizeLabels.length - 1) {
      i++;
      value /= 1024;
    }

    value += 0.000000000000001;
    fixedTo = Math.max(0, digits - Math.floor(value).toFixed(0).length); // fixed → number → string, to trim trailing zeroes

    value = Number(value.toFixed(fixedTo)); // eslint-disable-next-line no-irregular-whitespace

    return "".concat(prefix).concat(value, "\xA0").concat(fileSizeLabels[i]).concat(postfix);
  };

  var ajaxDefaults = {
    dataType: 'json',
    crossDomain: true,
    cache: false
  };

  var jsonp = function jsonp(url, type, data) {
    var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
    var jqXHR = $__default["default"].ajax($__default["default"].extend({
      url: url,
      type: type,
      data: data
    }, options, ajaxDefaults)).retry(options.retryConfig).fail(function (_, textStatus, errorThrown) {
      var text = "".concat(textStatus, " (").concat(errorThrown, ")");
      warn("JSONP unexpected error: ".concat(text, " while loading ").concat(url));
    });
    var df = jqXHR.then(function (data) {
      if (data.error) {
        var message, code;

        if (typeof data.error === 'string') {
          // /from_url/state/ case
          message = data.error;
          code = data.error_code;
        } else {
          // other cases (direct/multipart/group)
          message = data.error.content;
          code = data.error.error_code;
        }

        return $__default["default"].Deferred().reject({
          message: message,
          code: code
        });
      }

      return data;
    });
    df.abort = jqXHR.abort.bind(jqXHR);
    return df;
  };

  var canvasToBlob = function canvasToBlob(canvas, type, quality, callback) {
    var arr, binStr, dataURL, i, j, ref;

    if (window.HTMLCanvasElement.prototype.toBlob) {
      return canvas.toBlob(callback, type, quality);
    }

    dataURL = canvas.toDataURL(type, quality);
    dataURL = dataURL.split(',');
    binStr = window.atob(dataURL[1]);
    arr = new Uint8Array(binStr.length);

    for (i = j = 0, ref = binStr.length; j < ref; i = j += 1) {
      arr[i] = binStr.charCodeAt(i);
    }

    return callback(new window.Blob([arr], {
      type: /:(.+\/.+);/.exec(dataURL[0])[1]
    }));
  };

  var taskRunner = function taskRunner(capacity) {
    var queue, _release, run, running;

    running = 0;
    queue = [];

    _release = function release() {
      var task;

      if (queue.length) {
        task = queue.shift();
        return defer(function () {
          return task(_release);
        });
      } else {
        running -= 1;
        return running;
      }
    };

    run = function run(task) {
      if (!capacity || running < capacity) {
        running += 1;
        return defer(function () {
          return task(_release);
        });
      } else {
        return queue.push(task);
      }
    };

    return run;
  }; // This is work around bug in jquery https://github.com/jquery/jquery/issues/2013
  // action, add listener, callbacks,
  // ... .then handlers, argument index, [final state]


  var pipeTuples = [['notify', 'progress', 2], ['resolve', 'done', 0], ['reject', 'fail', 1]];

  var fixedPipe = function fixedPipe(promise) {
    for (var _len2 = arguments.length, fns = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      fns[_key2 - 1] = arguments[_key2];
    }

    return $__default["default"].Deferred(function (newDefer) {
      return $__default["default"].each(pipeTuples, function (i, tuple) {
        var fn; // Map tuples (progress, done, fail) to arguments (done, fail, progress)

        fn = $__default["default"].isFunction(fns[tuple[2]]) && fns[tuple[2]];
        return promise[tuple[1]](function () {
          var returned;
          returned = fn && fn.apply(this, arguments);

          if (returned && $__default["default"].isFunction(returned.promise)) {
            return returned.promise().progress(newDefer.notify).done(newDefer.resolve).fail(newDefer.reject);
          } else {
            return newDefer[tuple[0] + 'With'](this === promise ? newDefer.promise() : this, fn ? [returned] : arguments);
          }
        });
      });
    }).promise();
  };

  var getMetadataObject = function getMetadataObject(settings) {
    var metadata;

    if (settings.metadataCallback) {
      metadata = settings.metadataCallback() || {};
    } else {
      metadata = settings.metadata || {};
    }

    metadata = _objectSpread2({}, metadata);
    $__default["default"].each(metadata, function (key, value) {
      metadata[key] = String(value);
    });
    return metadata;
  };

  var isObject = function isObject(input) {
    return Object.prototype.toString.call(input) === '[object Object]';
  };

  var TestPixel = {
    R: 55,
    G: 110,
    B: 165,
    A: 255
  };
  var FILL_STYLE = "rgba(".concat(TestPixel.R, ", ").concat(TestPixel.G, ", ").concat(TestPixel.B, ", ").concat(TestPixel.A / 255, ")");
  function canvasTest(width, height) {
    // Wrapped into try/catch because memory alloction errors can be thrown due to insufficient RAM
    try {
      var fill = [width - 1, height - 1, 1, 1]; // x, y, width, height

      var cropCvs = document.createElement('canvas');
      cropCvs.width = 1;
      cropCvs.height = 1;
      var testCvs = document.createElement('canvas');
      testCvs.width = width;
      testCvs.height = height;
      var cropCtx = cropCvs.getContext('2d');
      var testCtx = testCvs.getContext('2d');

      if (testCtx) {
        testCtx.fillStyle = FILL_STYLE;
        testCtx.fillRect.apply(testCtx, fill); // Render the test pixel in the bottom-right corner of the
        // test canvas in the top-left of the 1x1 crop canvas. This
        // dramatically reducing the time for getImageData to complete.

        cropCtx.drawImage(testCvs, width - 1, height - 1, 1, 1, 0, 0, 1, 1);
      }

      var imageData = cropCtx && cropCtx.getImageData(0, 0, 1, 1).data;
      var isTestPass = false;

      if (imageData) {
        // On IE10, imageData have type CanvasPixelArray, not Uint8ClampedArray.
        // CanvasPixelArray supports index access operations only.
        // Array buffers can't be destructuredd and compared with JSON.stringify
        isTestPass = imageData[0] === TestPixel.R && imageData[1] === TestPixel.G && imageData[2] === TestPixel.B && imageData[3] === TestPixel.A;
      }

      testCvs.width = testCvs.height = 1;
      return isTestPass;
    } catch (e) {
      log("Failed to test for max canvas size of ".concat(width, "x").concat(height, "."), e);
      return false;
    }
  }

  function memoize(fn, serializer) {
    var cache = {};
    return function () {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      var key = serializer(args, cache);
      return key in cache ? cache[key] : cache[key] = fn.apply(void 0, args);
    };
  }

  var sizes = {
    squareSide: [// Safari (iOS < 9, ram >= 256)
    // We are supported mobile safari < 9 since widget v2, by 5 Mpx limit
    // so it's better to continue support despite the absence of this browser in the support table
    Math.floor(Math.sqrt(5 * 1000 * 1000)), // IE Mobile (Windows Phone 8.x)
    // Safari (iOS >= 9)
    4096, // IE 9 (Win)
    8192, // Firefox 63 (Mac, Win)
    11180, // Chrome 68 (Android 6)
    10836, // Chrome 68 (Android 5)
    11402, // Chrome 68 (Android 7.1-9)
    14188, // Chrome 70 (Mac, Win)
    // Chrome 68 (Android 4.4)
    // Edge 17 (Win)
    // Safari 7-12 (Mac)
    16384],
    dimension: [// IE Mobile (Windows Phone 8.x)
    4096, // IE 9 (Win)
    8192, // Edge 17 (Win)
    // IE11 (Win)
    16384, // Chrome 70 (Mac, Win)
    // Chrome 68 (Android 4.4-9)
    // Firefox 63 (Mac, Win)
    32767, // Chrome 83 (Mac, Win)
    // Safari 7-12 (Mac)
    // Safari (iOS 9-12)
    // Actually Safari has a much bigger limits - 4194303 of width and 8388607 of height,
    // but we will not use them
    65535]
  };
  var MAX_SQUARE_SIDE = sizes.squareSide[sizes.squareSide.length - 1];

  function wrapAsync(fn) {
    return function () {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      var df = $__default["default"].Deferred();
      defer(function () {
        var passed = fn.apply(void 0, args);
        df.resolve(passed);
      });
      return df.promise();
    };
  }
  /**
   * Memoization key serealizer, that prevents unnecessary canvas tests.
   * No need to make test if we know that:
   * - browser supports higher canvas size
   * - browser doesn't support lower canvas size
   */


  function memoKeySerializer(args, cache) {
    var _args = _slicedToArray(args, 1),
        w = _args[0];

    var cachedWidths = Object.keys(cache).map(function (val) {
      return parseInt(val, 10);
    }).sort(function (a, b) {
      return a - b;
    });

    for (var i = 0; i < cachedWidths.length; i++) {
      var cachedWidth = cachedWidths[i];
      var isSupported = !!cache[cachedWidth]; // higher supported canvas size, return it

      if (cachedWidth > w && isSupported) {
        return cachedWidth;
      } // lower unsupported canvas size, return it


      if (cachedWidth < w && !isSupported) {
        return cachedWidth;
      }
    } // use canvas width as the key,
    // because we're doing dimension test by width - [dimension, 1]


    return w;
  } // separate memoization for square and dimension tests


  var squareTest = wrapAsync(memoize(canvasTest, memoKeySerializer));
  var dimensionTest = wrapAsync(memoize(canvasTest, memoKeySerializer));
  function testCanvasSize(w, h) {
    var df = $__default["default"].Deferred();
    var testSquareSide = sizes.squareSide.find(function (side) {
      return side * side >= w * h;
    });
    var testDimension = sizes.dimension.find(function (side) {
      return side >= w && side >= h;
    });

    if (!testSquareSide || !testDimension) {
      return df.reject();
    }

    var tasks = [squareTest(testSquareSide, testSquareSide), dimensionTest(testDimension, 1)];
    $__default["default"].when.apply($__default["default"], tasks).done(function (squareSupported, dimensionSupported) {
      if (squareSupported && dimensionSupported) {
        df.resolve();
      } else {
        df.reject();
      }
    });
    return df.promise();
  }

  var indexOf$1 = [].indexOf; // settings

  var arrayOptions, constrainOptions, constraints, defaultPreviewUrlCallback, defaults$1, initialSettings, flagOptions, intOptions, integration, integrationToUserAgent, buildRetryConfig, normalize, parseCrop, parseShrink, presets, script, str2arr, transformOptions, transforms, urlOptions, callbackOptions, objectOptions;
  defaults$1 = {
    // developer hooks
    live: true,
    manualStart: false,
    locale: null,
    localePluralize: null,
    localeTranslations: null,
    // widget & dialog settings
    systemDialog: false,
    crop: false,
    previewStep: false,
    imagesOnly: false,
    clearable: false,
    multiple: false,
    multipleMax: 1000,
    multipleMin: 1,
    multipleMaxStrict: false,
    imageShrink: false,
    pathValue: true,
    tabs: 'file camera url facebook gdrive gphotos dropbox instagram evernote flickr onedrive',
    preferredTypes: '',
    inputAcceptTypes: '',
    // '' means default, null means "disable accept"
    // upload settings
    doNotStore: false,
    publicKey: null,
    secureSignature: '',
    secureExpire: '',
    pusherKey: '79ae88bd931ea68464d9',
    cdnBase: 'https://ucarecdn.com',
    urlBase: 'https://upload.uploadcare.com',
    socialBase: 'https://social.uploadcare.com',
    previewProxy: null,
    previewUrlCallback: null,
    remoteTabSessionKey: null,
    metadata: null,
    metadataCallback: null,
    // fine tuning
    imagePreviewMaxSize: 25 * 1024 * 1024,
    multipartMinSize: 10 * 1024 * 1024,
    multipartPartSize: 5 * 1024 * 1024,
    multipartMinLastPartSize: 1024 * 1024,
    multipartConcurrency: 4,
    // `multipartMaxAttempts` is deprecated, value will be assigned to `retryAttempts` if set
    multipartMaxAttempts: null,
    retryAttempts: 3,
    retryThrottledAttempts: 10,
    retryBaseTimeout: 1000,
    retryFactor: 2,
    parallelDirectUploads: 10,
    passWindowOpen: false,
    // camera
    cameraMirrorDefault: true,
    // camera recording
    enableAudioRecording: true,
    enableVideoRecording: true,
    videoPreferredMimeTypes: null,
    audioBitsPerSecond: null,
    videoBitsPerSecond: null,
    // maintain settings
    scriptBase: "//ucarecdn.com/widget/".concat(version, "/uploadcare/"),
    debugUploads: false,
    integration: ''
  };
  initialSettings = _objectSpread2({}, defaults$1);
  transforms = {
    multipleMax: {
      from: 0,
      to: 1000
    }
  };
  constraints = {
    multipleMax: {
      min: 1,
      max: 1000
    }
  };
  presets = {
    tabs: {
      all: 'file camera url facebook gdrive gphotos dropbox instagram evernote flickr onedrive box vk huddle',
      default: defaults$1.tabs
    }
  }; // integration setting from data attributes of script tag

  script = isWindowDefined() && (document.currentScript || function () {
    var scripts;
    scripts = document.getElementsByTagName('script');
    return scripts[scripts.length - 1];
  }());

  integration = isWindowDefined() && $__default["default"](script).data('integration');

  if (integration && integration != null) {
    defaults$1 = $__default["default"].extend(defaults$1, {
      integration: integration
    });
  }

  str2arr = function str2arr(value) {
    if (!$__default["default"].isArray(value)) {
      value = $__default["default"].trim(value);
      value = value ? value.split(' ') : [];
    }

    return value;
  };

  arrayOptions = function arrayOptions(settings, keys) {
    var hasOwnProperty = Object.prototype.hasOwnProperty;
    var i, item, j, key, len, len1, source, value;

    for (i = 0, len = keys.length; i < len; i++) {
      key = keys[i];
      value = source = str2arr(settings[key]);

      if (hasOwnProperty.apply(presets, [key])) {
        value = [];

        for (j = 0, len1 = source.length; j < len1; j++) {
          item = source[j];

          if (hasOwnProperty.apply(presets[key], [item])) {
            value = value.concat(str2arr(presets[key][item]));
          } else {
            value.push(item);
          }
        }
      }

      settings[key] = unique(value);
    }

    return settings;
  };

  urlOptions = function urlOptions(settings, keys) {
    var i, key, len;

    for (i = 0, len = keys.length; i < len; i++) {
      key = keys[i];

      if (settings[key] != null) {
        settings[key] = normalizeUrl(settings[key]);
      }
    }

    return settings;
  };

  flagOptions = function flagOptions(settings, keys) {
    var i, key, len, value;

    for (i = 0, len = keys.length; i < len; i++) {
      key = keys[i];

      if (!(settings[key] != null)) {
        continue;
      }

      value = settings[key];

      if (typeof value === 'string') {
        // "", "..." -> true
        // "false", "disabled" -> false
        value = $__default["default"].trim(value).toLowerCase();
        settings[key] = !(value === 'false' || value === 'disabled');
      } else {
        settings[key] = !!value;
      }
    }

    return settings;
  };

  intOptions = function intOptions(settings, keys) {
    var i, key, len;

    for (i = 0, len = keys.length; i < len; i++) {
      key = keys[i];

      if (settings[key] != null) {
        settings[key] = parseInt(settings[key]);
      }
    }

    return settings;
  };

  integrationToUserAgent = function integrationToUserAgent(settings) {
    settings._userAgent = "UploadcareWidget/".concat(version, "/").concat(settings.publicKey, " (JavaScript").concat(settings.integration ? "; ".concat(settings.integration) : '', ")");
    return settings;
  };

  buildRetryConfig = function buildRetryConfig(settings) {
    if (settings.retryAttempts === initialSettings.retryAttempts && settings.multipartMaxAttempts !== null) {
      settings.retryAttempts = settings.multipartMaxAttempts;
    }

    settings.retryConfig = {
      baseTimeout: settings.retryBaseTimeout,
      factor: settings.retryFactor,
      attempts: settings.retryAttempts,
      debugUploads: settings.debugUploads,
      throttledAttempts: settings.retryThrottledAttempts
    };
  };

  transformOptions = function transformOptions(settings, transforms) {
    var key, transform;

    for (key in transforms) {
      transform = transforms[key];

      if (settings[key] != null) {
        if (settings[key] === transform.from) {
          settings[key] = transform.to;
        }
      }
    }

    return settings;
  };

  constrainOptions = function constrainOptions(settings, constraints) {
    var key, max, min;

    for (key in constraints) {
      var _constraints$key = constraints[key];
      min = _constraints$key.min;
      max = _constraints$key.max;

      if (settings[key] != null) {
        settings[key] = Math.min(Math.max(settings[key], min), max);
      }
    }

    return settings;
  };

  callbackOptions = function callbackOptions(settings, keys) {
    for (var i = 0, len = keys.length; i < len; i++) {
      var key = keys[i];

      if (settings[key] && typeof settings[key] !== 'function') {
        warnOnce("Option \"".concat(key, "\" is expected to be a function. Instead got: ").concat(_typeof(settings[key])));
      }
    }
  };

  objectOptions = function objectOptions(settings, keys) {
    for (var i = 0, len = keys.length; i < len; i++) {
      var key = keys[i];

      if (settings[key] && !isObject(settings[key])) {
        warnOnce("Option \"".concat(key, "\" is expected to be an object. Instead got: ").concat(_typeof(settings[key])));
      }
    }
  };

  parseCrop = function parseCrop(val) {
    var ratio, reRatio;
    reRatio = /^([0-9]+)([x:])([0-9]+)\s*(|upscale|minimum)$/i;
    ratio = reRatio.exec($__default["default"].trim(val.toLowerCase())) || [];
    return {
      downscale: ratio[2] === 'x',
      upscale: !!ratio[4],
      notLess: ratio[4] === 'minimum',
      preferedSize: ratio.length ? [+ratio[1], +ratio[3]] : undefined
    };
  };

  parseShrink = function parseShrink(val) {
    var reShrink = /^([0-9]+)x([0-9]+)(?:\s+(\d{1,2}|100)%)?$/i;
    var shrink = reShrink.exec($__default["default"].trim(val.toLowerCase())) || [];

    if (!shrink.length) {
      return false;
    }

    var size = shrink[1] * shrink[2];
    var maxSize = MAX_SQUARE_SIDE * MAX_SQUARE_SIDE;

    if (size > maxSize) {
      warnOnce("Shrinked size can not be larger than ".concat(Math.floor(maxSize / 1000 / 1000), "MP. ") + "You have set ".concat(shrink[1], "x").concat(shrink[2], " (") + "".concat(Math.ceil(size / 1000 / 100) / 10, "MP)."));
      return false;
    }

    return {
      quality: shrink[3] ? shrink[3] / 100 : undefined,
      size: size
    };
  };

  defaultPreviewUrlCallback = function defaultPreviewUrlCallback(url, info) {
    var addAmpersand, addName, addQuery, queryPart;

    if (!this.previewProxy) {
      return url;
    }

    addQuery = !/\?/.test(this.previewProxy);
    addName = addQuery || !/=$/.test(this.previewProxy);
    addAmpersand = !addQuery && !/[&?=]$/.test(this.previewProxy);
    queryPart = encodeURIComponent(url);

    if (addName) {
      queryPart = 'url=' + queryPart;
    }

    if (addAmpersand) {
      queryPart = '&' + queryPart;
    }

    if (addQuery) {
      queryPart = '?' + queryPart;
    }

    return this.previewProxy + queryPart;
  };

  normalize = function normalize(settings) {
    arrayOptions(settings, ['tabs', 'preferredTypes', 'videoPreferredMimeTypes']);
    urlOptions(settings, ['cdnBase', 'socialBase', 'urlBase', 'scriptBase']);
    flagOptions(settings, ['doNotStore', 'imagesOnly', 'multiple', 'clearable', 'pathValue', 'previewStep', 'systemDialog', 'debugUploads', 'multipleMaxStrict', 'cameraMirrorDefault']);
    intOptions(settings, ['multipleMax', 'multipleMin', 'multipartMinSize', 'multipartPartSize', 'multipartMinLastPartSize', 'multipartConcurrency', 'multipartMaxAttempts', 'retryAttempts', 'retryThrottledAttempts', 'retryBaseTimeout', 'retryFactor', 'parallelDirectUploads']);
    callbackOptions(settings, ['previewUrlCallback', 'metadataCallback']);
    objectOptions(settings, ['metadata']);
    transformOptions(settings, transforms);
    constrainOptions(settings, constraints);
    integrationToUserAgent(settings);
    buildRetryConfig(settings);

    if (settings.crop !== false && !$__default["default"].isArray(settings.crop)) {
      if (/^(disabled?|false|null)$/i.test(settings.crop)) {
        settings.crop = false;
      } else if ($__default["default"].isPlainObject(settings.crop)) {
        // old format
        settings.crop = [settings.crop];
      } else {
        settings.crop = $__default["default"].map(('' + settings.crop).split(','), parseCrop);
      }
    }

    if (settings.imageShrink && !$__default["default"].isPlainObject(settings.imageShrink)) {
      settings.imageShrink = parseShrink(settings.imageShrink);
    }

    if (settings.crop || settings.multiple) {
      settings.previewStep = true;
    }

    if (!sendFileAPI) {
      settings.systemDialog = false;
    }

    if (settings.validators) {
      settings.validators = settings.validators.slice();
    }

    if (settings.previewProxy && !settings.previewUrlCallback) {
      settings.previewUrlCallback = defaultPreviewUrlCallback;
    }

    var skydriveIndex = settings.tabs.indexOf('skydrive');

    if (skydriveIndex !== -1) {
      settings.tabs[skydriveIndex] = 'onedrive';
    }

    return settings;
  }; // global variables only


  var globals = function globals() {
    var key, scriptSettings, value;
    scriptSettings = {};

    for (key in defaults$1) {
      value = window["UPLOADCARE_".concat(upperCase(key))];

      if (value != null) {
        scriptSettings[key] = value;
      }
    }

    return scriptSettings;
  }; // Defaults + global variables + global overrides (once from uploadcare.start)
  // Not publicly-accessible


  var common = once(function (settings, ignoreGlobals) {
    var result;

    if (!ignoreGlobals) {
      defaults$1 = $__default["default"].extend(defaults$1, globals());
    }

    result = normalize($__default["default"].extend(defaults$1, settings || {}));
    waitForSettings.fire(result);
    return result;
  }); // Defaults + global variables + global overrides + local overrides

  var build = function build(settings) {
    var result;
    result = $__default["default"].extend({}, common());

    if (!$__default["default"].isEmptyObject(settings)) {
      result = normalize($__default["default"].extend(result, settings));
    }

    return result;
  };

  var waitForSettings = isWindowDefined() && $__default["default"].Callbacks('once memory');

  var CssCollector = /*#__PURE__*/function () {
    function CssCollector() {
      _classCallCheck(this, CssCollector);

      this.urls = [];
      this.styles = [];
    }

    _createClass(CssCollector, [{
      key: "addUrl",
      value: function addUrl(url) {
        if (!/^https?:\/\//i.test(url)) {
          throw new Error('Embedded urls should be absolute. ' + url);
        }

        if (!(indexOf$1.call(this.urls, url) >= 0)) {
          return this.urls.push(url);
        }
      }
    }, {
      key: "addStyle",
      value: function addStyle(style) {
        return this.styles.push(style);
      }
    }]);

    return CssCollector;
  }();

  var emptyKeyText = '<div class="uploadcare--tab__content">\n<div class="uploadcare--text uploadcare--text_size_large uploadcare--tab__title">Hello!</div>\n<div class="uploadcare--text">Your <a class="uploadcare--link" href="https://uploadcare.com/dashboard/">public key</a> is not set.</div>\n<div class="uploadcare--text">Add this to the &lt;head&gt; tag to start uploading files:</div>\n<div class="uploadcare--text uploadcare--text_pre">&lt;script&gt;\nUPLOADCARE_PUBLIC_KEY = \'your_public_key\';\n&lt;/script&gt;</div>\n</div>';

  var trackLoading = function trackLoading(image, src) {
    var def;
    def = $__default["default"].Deferred();

    if (src) {
      image.src = src;
    }

    if (image.complete) {
      def.resolve(image);
    } else {
      $__default["default"](image).one('load', function () {
        return def.resolve(image);
      });
      $__default["default"](image).one('error', function () {
        return def.reject(image);
      });
    }

    return def.promise();
  };

  var imageLoader = function imageLoader(image) {
    // if argument is an array, treat as
    // load(['1.jpg', '2.jpg'])
    if ($__default["default"].isArray(image)) {
      return $__default["default"].when.apply(null, $__default["default"].map(image, imageLoader));
    }

    if (image.src) {
      return trackLoading(image);
    } else {
      return trackLoading(new window.Image(), image);
    }
  };

  var videoLoader = function videoLoader(src) {
    var def = $__default["default"].Deferred();
    $__default["default"]('<video></video>').on('loadeddata', def.resolve).on('error', def.reject).attr('src', src).get(0).load();
    return def.promise();
  };

  var testImageSrc = 'data:image/jpg;base64,' + '/9j/4AAQSkZJRgABAQEASABIAAD/4QA6RXhpZgAATU0AKgAAAAgAAwESAAMAAAABAAYAAAEo' + 'AAMAAAABAAIAAAITAAMAAAABAAEAAAAAAAD/2wBDAP//////////////////////////////' + '////////////////////////////////////////////////////////wAALCAABAAIBASIA' + '/8QAJgABAAAAAAAAAAAAAAAAAAAAAxABAAAAAAAAAAAAAAAAAAAAAP/aAAgBAQAAPwBH/9k=';
  var isApplied;

  var isBrowserApplyExif = function isBrowserApplyExif() {
    var df = $__default["default"].Deferred();

    if (isApplied !== undefined) {
      df.resolve(isApplied);
    } else {
      var image = new window.Image();

      image.onload = function () {
        isApplied = image.naturalWidth < image.naturalHeight;
        image.src = '//:0';
        df.resolve(isApplied);
      };

      image.src = testImageSrc;
    }

    return df.promise();
  };

  var resizeCanvas = function resizeCanvas(img, w, h) {
    var df = $__default["default"].Deferred();
    defer(function () {
      try {
        var canvas = document.createElement('canvas');
        var cx = canvas.getContext('2d');
        canvas.width = w;
        canvas.height = h;
        cx.imageSmoothingQuality = 'high';
        cx.drawImage(img, 0, 0, w, h);
        img.src = '//:0'; // for image

        img.width = img.height = 1; // for canvas

        df.resolve(canvas);
      } catch (e) {
        log("Failed to shrink image to size ".concat(w, "x").concat(h, "."), e);
        df.reject(e);
      }
    });
    return df.promise();
  };
  /**
   * Goes from target to source by step, the last incomplete step is dropped.
   * Always returns at least one step - target. Source step is not included.
   * Sorted descending.
   *
   * Example with step = 0.71, source = 2000, target = 400
   * 400 (target) <- 563 <- 793 <- 1117 <- 1574 (dropped) <- [2000 (source)]
   */


  var calcShrinkSteps = function calcShrinkSteps(sourceW, targetW, targetH, step) {
    var steps = [];
    var sW = targetW;
    var sH = targetH; // result should include at least one target step,
    // even if abs(source - target) < step * source
    // just to be sure nothing will break
    // if the original resolution / target resolution condition changes

    do {
      steps.push([sW, sH]);
      sW = Math.round(sW / step);
      sH = Math.round(sH / step);
    } while (sW < sourceW * step);

    return steps.reverse();
  };
  /**
   * Fallback resampling algorithm
   *
   * Reduces dimensions by step until reaches target dimensions,
   * this gives a better output quality than one-step method
   *
   * Target dimensions expected to be supported by browser,
   * unsupported steps will be dropped.
   */


  var runFallback = function runFallback(img, sourceW, targetW, targetH, step) {
    var steps = calcShrinkSteps(sourceW, targetW, targetH, step);
    var seriesDf = $__default["default"].Deferred();
    var chainedDf = $__default["default"].Deferred();
    chainedDf.resolve(img);

    var _iterator = _createForOfIteratorHelper(steps),
        _step;

    try {
      var _loop = function _loop() {
        var _step$value = _slicedToArray(_step.value, 2),
            w = _step$value[0],
            h = _step$value[1];

        chainedDf = chainedDf.then(function (canvas) {
          var df = $__default["default"].Deferred();
          testCanvasSize(w, h).then(function () {
            return df.resolve(canvas, false);
          }).fail(function () {
            return df.resolve(canvas, true);
          });
          return df.promise();
        }).then(function (canvas, skip) {
          return skip ? canvas : resizeCanvas(canvas, w, h);
        }).then(function (canvas) {
          seriesDf.notify((sourceW - w) / (sourceW - targetW));
          return canvas;
        });
      };

      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        _loop();
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    chainedDf.done(function (canvas) {
      seriesDf.resolve(canvas);
    });
    chainedDf.fail(function (error) {
      seriesDf.reject(error);
    });
    return seriesDf.promise();
  };
  /**
   * Native high-quality canvas resampling
   *
   * Browser support: https://caniuse.com/mdn-api_canvasrenderingcontext2d_imagesmoothingenabled
   * Target dimensions expected to be supported by browser.
   */


  var runNative = function runNative(img, targetW, targetH) {
    return resizeCanvas(img, targetW, targetH);
  };

  var shrinkImage = function shrinkImage(img, settings) {
    // in -> image
    // out <- canvas
    var df = $__default["default"].Deferred(); // do not shrink image if original resolution / target resolution ratio falls behind 2.0

    var STEP = 0.71; // should be > sqrt(0.5)

    if (img.width * STEP * img.height * STEP < settings.size) {
      return df.reject('not required');
    }

    var sourceW = img.width;
    var sourceH = img.height;
    var ratio = sourceW / sourceH; // target size shouldn't be greater than settings.size in any case

    var targetW = Math.floor(Math.sqrt(settings.size * ratio));
    var targetH = Math.floor(settings.size / Math.sqrt(settings.size * ratio)); // we test the last step because we can skip all intermediate steps

    testCanvasSize(targetW, targetH).fail(function () {
      df.reject('not supported');
    }).then(function () {
      var cx = document.createElement('canvas').getContext('2d');
      var supportNative = ('imageSmoothingQuality' in cx); // native scaling on ios gives blurry results

      var useNativeScaling = supportNative && !iOSVersion && !isIpadOs;
      var task = useNativeScaling ? runNative(img, targetW, targetH) : runFallback(img, sourceW, targetW, targetH, STEP);
      task.done(function (canvas) {
        return df.resolve(canvas);
      }).progress(function (progress) {
        return df.notify(progress);
      }).fail(function () {
        return df.reject('not supported');
      });
    });
    return df.promise();
  };

  var DataView = isWindowDefined() && window.DataView;
  var runner = taskRunner(1);

  var shrinkFile = function shrinkFile(file, settings) {
    // in -> file
    // out <- blob
    var df = $__default["default"].Deferred();

    if (!(URL && DataView && Blob)) {
      return df.reject('support');
    } // start = new Date()


    runner(function (release) {
      // console.log('delayed: ' + (new Date() - start))
      df.always(release); // start = new Date()

      var op = shouldSkipShrink(file).then(function (shouldSkip) {
        if (shouldSkip) {
          df.reject('skipped');
          return $__default["default"].Deferred().reject();
        }
      }).then(function () {
        return stripIccProfile(file).fail(function () {
          df.reject('not image');
        });
      });
      op.done(function (img) {
        // console.log('load: ' + (new Date() - start))
        df.notify(0.1);
        var exifOp = $__default["default"].when(getExif(file), isBrowserApplyExif(), getIccProfile(file)).always(function (exif, isExifApplied, iccProfile) {
          df.notify(0.2);
          var isJPEG = exifOp.state() === 'resolved'; // start = new Date()

          var op = shrinkImage(img, settings);
          op.progress(function (progress) {
            return df.notify(0.2 + progress * 0.6);
          });
          op.fail(df.reject);
          op.done(function (canvas) {
            // console.log('shrink: ' + (new Date() - start))
            // start = new Date()
            var format = 'image/jpeg';
            var quality = settings.quality || 0.8;

            if (!isJPEG && hasTransparency(canvas)) {
              format = 'image/png';
              quality = undefined;
            }

            canvasToBlob(canvas, format, quality, function (blob) {
              canvas.width = canvas.height = 1;
              df.notify(0.9); // console.log('to blob: ' + (new Date() - start))

              var replaceChain = $__default["default"].Deferred().resolve(blob);

              if (exif) {
                replaceChain = replaceChain.then(function (blob) {
                  return replaceExif(blob, exif, isExifApplied);
                }).catch(function () {
                  return blob;
                });
              }

              if ((iccProfile === null || iccProfile === void 0 ? void 0 : iccProfile.length) > 0) {
                replaceChain = replaceChain.then(function (blob) {
                  return replaceIccProfile(blob, iccProfile);
                }).catch(function () {
                  return blob;
                });
              }

              replaceChain.done(df.resolve);
              replaceChain.fail(function () {
                return df.resolve(blob);
              });
            });
          });
        });
      });
    });
    return df.promise();
  };

  var drawFileToCanvas = function drawFileToCanvas(file, mW, mH, bg, maxSource) {
    var df, op; // in -> file
    // out <- canvas

    df = $__default["default"].Deferred();

    if (!URL) {
      return df.reject('support');
    }

    op = imageLoader(URL.createObjectURL(file));
    op.always(function (img) {
      return URL.revokeObjectURL(img.src);
    });
    op.fail(function () {
      return df.reject('not image');
    });
    op.done(function (img) {
      df.always(function () {
        img.src = '//:0';
      });

      if (maxSource && img.width * img.height > maxSource) {
        return df.reject('max source');
      }

      return $__default["default"].when(getExif(file), isBrowserApplyExif()).always(function (exif, isExifApplied) {
        var orientation = isExifApplied ? 1 : parseExifOrientation(exif) || 1;
        var swap = orientation > 4;
        var sSize = swap ? [img.height, img.width] : [img.width, img.height];

        var _fitSize = fitSize(sSize, [mW, mH]),
            _fitSize2 = _slicedToArray(_fitSize, 2),
            dW = _fitSize2[0],
            dH = _fitSize2[1];

        var trns = [[1, 0, 0, 1, 0, 0], [-1, 0, 0, 1, dW, 0], [-1, 0, 0, -1, dW, dH], [1, 0, 0, -1, 0, dH], [0, 1, 1, 0, 0, 0], [0, 1, -1, 0, dW, 0], [0, -1, -1, 0, dW, dH], [0, -1, 1, 0, 0, dH]][orientation - 1];

        if (!trns) {
          return df.reject('bad image');
        }

        var canvas = document.createElement('canvas');
        canvas.width = dW;
        canvas.height = dH;
        var ctx = canvas.getContext('2d');
        ctx.transform.apply(ctx, trns);

        if (swap) {
          var _ref = [dH, dW];
          dW = _ref[0];
          dH = _ref[1];
        }

        if (bg) {
          ctx.fillStyle = bg;
          ctx.fillRect(0, 0, dW, dH);
        }

        ctx.drawImage(img, 0, 0, dW, dH);
        return df.resolve(canvas, sSize);
      });
    });
    return df.promise();
  }; // Util functions


  var readJpegChunks = function readJpegChunks(file) {
    var df, pos, readNext, readNextChunk, readToView;

    readToView = function readToView(file, cb) {
      var reader;
      reader = new FileReader();

      reader.onload = function () {
        return cb(new DataView(reader.result));
      };

      reader.onerror = function (e) {
        return df.reject('reader', e);
      };

      return reader.readAsArrayBuffer(file);
    };

    readNext = function readNext() {
      return readToView(file.slice(pos, pos + 128), function (view) {
        var i, j, ref;

        for (i = j = 0, ref = view.byteLength; ref >= 0 ? j < ref : j > ref; i = ref >= 0 ? ++j : --j) {
          if (view.getUint8(i) === 0xff) {
            pos += i;
            break;
          }
        }

        return readNextChunk();
      });
    };

    readNextChunk = function readNextChunk() {
      var startPos;
      startPos = pos; // todo fix
      // eslint-disable-next-line no-return-assign

      return readToView(file.slice(pos, pos += 4), function (view) {
        var length, marker;

        if (view.byteLength !== 4 || view.getUint8(0) !== 0xff) {
          return df.reject('corrupted');
        }

        marker = view.getUint8(1);

        if (marker === 0xda) {
          // Start Of Scan
          // console.log('read jpeg chunks: ' + (new Date() - start))
          return df.resolve();
        }

        length = view.getUint16(2) - 2; // eslint-disable-next-line no-return-assign

        return readToView(file.slice(pos, pos += length), function (view) {
          if (view.byteLength !== length) {
            return df.reject('corrupted');
          }

          df.notify(startPos, length, marker, view);
          return readNext();
        });
      });
    };

    df = $__default["default"].Deferred();

    if (!(FileReader && DataView)) {
      return df.reject('support');
    } // start = new Date()


    pos = 2;
    readToView(file.slice(0, 2), function (view) {
      if (view.getUint16(0) !== 0xffd8) {
        return df.reject('not jpeg');
      }

      return readNext();
    });
    return df.promise();
  };

  var replaceJpegChunk = function replaceJpegChunk(blob, marker, chunks) {
    var df, oldChunkLength, oldChunkPos, op;
    df = $__default["default"].Deferred();
    oldChunkPos = [];
    oldChunkLength = [];
    op = readJpegChunks(blob);
    op.fail(df.reject);
    op.progress(function (pos, length, oldMarker) {
      if (oldMarker === marker) {
        oldChunkPos.push(pos);
        return oldChunkLength.push(length);
      }
    });
    op.done(function () {
      var chunk, i, intro, j, k, len, newChunks, pos, ref;
      newChunks = [blob.slice(0, 2)];

      for (j = 0, len = chunks.length; j < len; j++) {
        chunk = chunks[j];
        intro = new DataView(new ArrayBuffer(4));
        intro.setUint16(0, 0xff00 + marker);
        intro.setUint16(2, chunk.byteLength + 2);
        newChunks.push(intro.buffer);
        newChunks.push(chunk);
      }

      pos = 2;

      for (i = k = 0, ref = oldChunkPos.length; ref >= 0 ? k < ref : k > ref; i = ref >= 0 ? ++k : --k) {
        if (oldChunkPos[i] > pos) {
          newChunks.push(blob.slice(pos, oldChunkPos[i]));
        }

        pos = oldChunkPos[i] + oldChunkLength[i] + 4;
      }

      newChunks.push(blob.slice(pos, blob.size));
      return df.resolve(new Blob(newChunks, {
        type: blob.type
      }));
    });
    return df.promise();
  };

  var getExif = function getExif(file) {
    var exif = null;
    var op = readJpegChunks(file);
    op.progress(function (pos, l, marker, view) {
      if (!exif && marker === 0xe1) {
        if (view.byteLength >= 14) {
          if ( // check for "Exif\0"
          view.getUint32(0) === 0x45786966 && view.getUint16(4) === 0) {
            exif = view;
            return exif;
          }
        }
      }
    });
    return op.then(function () {
      return exif;
    }, function () {
      return $__default["default"].Deferred().reject(exif);
    });
  };

  var getIccProfile = function getIccProfile(file) {
    var iccProfile = [];
    var op = readJpegChunks(file);
    op.progress(function (pos, l, marker, view) {
      if (marker === 0xe2) {
        if ( // check for "ICC_PROFILE\0"
        view.getUint32(0) === 0x4943435f && view.getUint32(4) === 0x50524f46 && view.getUint32(8) === 0x494c4500) {
          iccProfile.push(view);
        }
      }
    });
    return op.then(function () {
      return iccProfile;
    }, function () {
      return $__default["default"].Deferred().reject(iccProfile);
    });
  };

  var replaceExif = function replaceExif(blob, exif, isExifApplied) {
    if (isExifApplied) {
      setExifOrientation(exif, 1);
    }

    return replaceJpegChunk(blob, 0xe1, [exif.buffer]);
  };

  var replaceIccProfile = function replaceIccProfile(blob, iccProfile) {
    return replaceJpegChunk(blob, 0xe2, iccProfile.map(function (chunk) {
      return chunk.buffer;
    }));
  };

  var stripIccProfile = function stripIccProfile(inputFile) {
    var df = $__default["default"].Deferred();
    replaceIccProfile(inputFile, []).catch(function () {
      return inputFile;
    }).then(function (file) {
      var op = imageLoader(URL.createObjectURL(file));
      op.always(function (img) {
        URL.revokeObjectURL(img.src);
      });
      op.fail(function () {
        df.reject();
      });
      op.done(function (img) {
        df.resolve(img);
      });
    }).fail(function () {
      df.reject();
    });
    return df.promise();
  };

  var shouldSkipShrink = function shouldSkipShrink(file) {
    var allowLayers = [1, // L (black-white)
    3 // RGB
    ];
    var markers = [0xc0, // ("SOF0", "Baseline DCT", SOF)
    0xc1, // ("SOF1", "Extended Sequential DCT", SOF)
    0xc2, // ("SOF2", "Progressive DCT", SOF)
    0xc3, // ("SOF3", "Spatial lossless", SOF)
    0xc5, // ("SOF5", "Differential sequential DCT", SOF)
    0xc6, // ("SOF6", "Differential progressive DCT", SOF)
    0xc7, // ("SOF7", "Differential spatial", SOF)
    0xc9, // ("SOF9", "Extended sequential DCT (AC)", SOF)
    0xca, // ("SOF10", "Progressive DCT (AC)", SOF)
    0xcb, // ("SOF11", "Spatial lossless DCT (AC)", SOF)
    0xcd, // ("SOF13", "Differential sequential DCT (AC)", SOF)
    0xce, // ("SOF14", "Differential progressive DCT (AC)", SOF)
    0xcf // ("SOF15", "Differential spatial (AC)", SOF)
    ];
    var skip = false;
    var op = readJpegChunks(file);
    op.progress(function (pos, l, marker, view) {
      if (!skip && markers.indexOf(marker) >= 0) {
        var layer = view.getUint8(5);

        if (allowLayers.indexOf(layer) < 0) {
          skip = true;
        }
      }
    });
    return op.then(function () {
      return skip;
    }).catch(function () {
      return skip;
    });
  };

  var setExifOrientation = function setExifOrientation(exif, orientation) {
    findExifOrientation(exif, function (offset, little) {
      return exif.setUint16(offset, orientation, little);
    });
  };

  var parseExifOrientation = function parseExifOrientation(exif) {
    return findExifOrientation(exif, function (offset, little) {
      return exif.getUint16(offset, little);
    });
  };

  var findExifOrientation = function findExifOrientation(exif, exifCallback) {
    var count, j, little, offset, ref;

    if (!exif || exif.byteLength < 14 || exif.getUint32(0) !== 0x45786966 || exif.getUint16(4) !== 0) {
      return null;
    }

    if (exif.getUint16(6) === 0x4949) {
      little = true;
    } else if (exif.getUint16(6) === 0x4d4d) {
      little = false;
    } else {
      return null;
    }

    if (exif.getUint16(8, little) !== 0x002a) {
      return null;
    }

    offset = 8 + exif.getUint32(10, little);
    count = exif.getUint16(offset - 2, little);

    for (j = 0, ref = count; ref >= 0 ? j < ref : j > ref; ref >= 0 ? ++j : --j) {
      if (exif.byteLength < offset + 10) {
        return null;
      }

      if (exif.getUint16(offset, little) === 0x0112) {
        return exifCallback(offset + 8, little);
      }

      offset += 12;
    }

    return null;
  };

  var hasTransparency = function hasTransparency(img) {
    var canvas, ctx, data, i, j, pcsn, ref;
    pcsn = 50;
    canvas = document.createElement('canvas');
    canvas.width = canvas.height = pcsn;
    ctx = canvas.getContext('2d');
    ctx.drawImage(img, 0, 0, pcsn, pcsn);
    data = ctx.getImageData(0, 0, pcsn, pcsn).data;
    canvas.width = canvas.height = 1;

    for (i = j = 3, ref = data.length; j < ref; i = j += 4) {
      if (data[i] < 254) {
        return true;
      }
    }

    return false;
  };

  // progressState: one of 'error', 'ready', 'uploading', 'uploaded'
  // internal api
  //   __notifyApi: file upload in progress
  //   __resolveApi: file is ready
  //   __rejectApi: file failed on any stage
  //   __completeUpload: file uploaded, info required

  var BaseFile = /*#__PURE__*/function () {
    function BaseFile(param, settings1) {
      var sourceInfo = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      _classCallCheck(this, BaseFile);

      var base;
      this.settings = settings1;
      this.sourceInfo = sourceInfo;
      this.fileId = null;
      this.fileName = null;
      this.sanitizedName = null;
      this.fileSize = null;
      this.isStored = null;
      this.cdnUrlModifiers = null;
      this.isImage = null;
      this.imageInfo = null;
      this.videoInfo = null;
      this.contentInfo = null;
      this.mimeType = null;
      this.s3Bucket = null;
      this.metadata = null;
      (base = this.sourceInfo).source || (base.source = this.sourceName);

      this.__setupValidation();

      this.__initApi();
    }

    _createClass(BaseFile, [{
      key: "__startUpload",
      value: function __startUpload() {
        return $__default["default"].Deferred().resolve();
      }
    }, {
      key: "__completeUpload",
      value: function __completeUpload() {
        var _this = this;

        var _check, logger, ncalls, timeout; // Update info until @apiDeferred resolved.


        ncalls = 0;

        if (this.settings.debugUploads) {
          debug('Load file info.', this.fileId, this.settings.publicKey);
          logger = setInterval(function () {
            return debug('Still waiting for file ready.', ncalls, _this.fileId, _this.settings.publicKey);
          }, 5000);
          this.apiDeferred.done(function () {
            return debug('File uploaded.', ncalls, _this.fileId, _this.settings.publicKey);
          }).always(function () {
            return clearInterval(logger);
          });
        }

        timeout = 100;
        return (_check = function check() {
          if (_this.apiDeferred.state() === 'pending') {
            ncalls += 1;
            return _this.__updateInfo().done(function () {
              setTimeout(_check, timeout);
              timeout += 50;
              return timeout;
            });
          }
        })();
      }
    }, {
      key: "__updateInfo",
      value: function __updateInfo() {
        var _this2 = this;

        return jsonp("".concat(this.settings.urlBase, "/info/"), 'GET', {
          jsonerrors: 1,
          file_id: this.fileId,
          pub_key: this.settings.publicKey,
          // Assume that we have all other info if isImage is set to something
          // other than null and we only waiting for is_ready flag.
          wait_is_ready: +(this.isImage === null)
        }, {
          headers: {
            'X-UC-User-Agent': this.settings._userAgent
          },
          retryConfig: this.settings.retryConfig
        }).fail(function (error) {
          if (_this2.settings.debugUploads) {
            log("Can't load file info. Probably removed.", _this2.fileId, _this2.settings.publicKey, error.message);
          }

          return _this2.__rejectApi('info', error);
        }).done(this.__handleFileData.bind(this));
      }
    }, {
      key: "__handleFileData",
      value: function __handleFileData(data) {
        this.fileName = data.original_filename;
        this.sanitizedName = data.filename;
        this.fileSize = data.size;
        this.isImage = data.is_image;
        this.imageInfo = data.image_info;
        this.videoInfo = data.video_info;
        this.contentInfo = data.content_info;
        this.mimeType = data.mime_type;
        this.isStored = data.is_stored;
        this.s3Bucket = data.s3_bucket;
        this.metadata = data.metadata;

        if (data.default_effects) {
          this.cdnUrlModifiers = '-/' + data.default_effects;
        }

        if (this.s3Bucket && this.cdnUrlModifiers) {
          this.__rejectApi('baddata');
        }

        this.__runValidators();

        if (data.is_ready) {
          return this.__resolveApi();
        }
      } // Retrieve info

    }, {
      key: "__progressInfo",
      value: function __progressInfo() {
        var ref;
        return {
          state: this.__progressState,
          uploadProgress: this.__progress,
          progress: (ref = this.__progressState) === 'ready' || ref === 'error' ? 1 : this.__progress * 0.9,
          incompleteFileInfo: this.__fileInfo()
        };
      }
    }, {
      key: "__fileInfo",
      value: function __fileInfo() {
        var urlBase;

        if (this.s3Bucket) {
          urlBase = "https://".concat(this.s3Bucket, ".s3.amazonaws.com/").concat(this.fileId, "/").concat(this.sanitizedName);
        } else {
          urlBase = "".concat(this.settings.cdnBase, "/").concat(this.fileId, "/");
        }

        return {
          uuid: this.fileId,
          name: this.fileName,
          size: this.fileSize,
          isStored: this.isStored,
          isImage: !this.s3Bucket && this.isImage,
          originalImageInfo: this.imageInfo,
          originalVideoInfo: this.videoInfo,
          originalContentInfo: this.contentInfo,
          mimeType: this.mimeType,
          originalUrl: this.fileId ? urlBase : null,
          cdnUrl: this.fileId ? "".concat(urlBase).concat(this.cdnUrlModifiers || '') : null,
          cdnUrlModifiers: this.cdnUrlModifiers,
          sourceInfo: this.sourceInfo,
          metadata: this.metadata
        };
      } // Validators

    }, {
      key: "__setupValidation",
      value: function __setupValidation() {
        this.validators = this.settings.validators || this.settings.__validators || [];

        if (this.settings.imagesOnly) {
          return this.validators.push(function (info) {
            if (info.isImage === false) {
              throw new Error('image');
            }
          });
        }
      }
    }, {
      key: "__runValidators",
      value: function __runValidators() {
        var err, i, info, len, ref, results, v;
        info = this.__fileInfo();

        try {
          ref = this.validators;
          results = [];

          for (i = 0, len = ref.length; i < len; i++) {
            v = ref[i];
            results.push(v(info));
          }

          return results;
        } catch (error) {
          err = error;
          return this.__rejectApi(err.message);
        }
      } // Internal API control

    }, {
      key: "__initApi",
      value: function __initApi() {
        this.apiDeferred = $__default["default"].Deferred();
        this.__progressState = 'uploading';
        this.__progress = 0;
        return this.__notifyApi();
      }
    }, {
      key: "__notifyApi",
      value: function __notifyApi() {
        return this.apiDeferred.notify(this.__progressInfo());
      }
    }, {
      key: "__rejectApi",
      value: function __rejectApi(errorType, err) {
        this.__progressState = 'error';

        this.__notifyApi();

        return this.apiDeferred.reject(errorType, this.__fileInfo(), err);
      }
    }, {
      key: "__resolveApi",
      value: function __resolveApi() {
        this.__progressState = 'ready';

        this.__notifyApi();

        return this.apiDeferred.resolve(this.__fileInfo());
      }
    }, {
      key: "__cancel",
      value: function __cancel() {
        return this.__rejectApi('user');
      }
    }, {
      key: "__extendApi",
      value: function __extendApi(api) {
        var _this3 = this;

        api.cancel = this.__cancel.bind(this);

        api.pipe = api.then = function () {
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          // 'pipe' is alias to 'then' from jQuery 1.8
          return _this3.__extendApi(fixedPipe.apply(void 0, [api].concat(args)));
        };

        return api; // extended promise
      }
    }, {
      key: "promise",
      value: function promise() {
        var _this4 = this;

        var op;

        if (!this.__apiPromise) {
          this.__apiPromise = this.__extendApi(this.apiDeferred.promise());

          this.__runValidators();

          if (this.apiDeferred.state() === 'pending') {
            op = this.__startUpload();
            op.done(function () {
              _this4.__progressState = 'uploaded';
              _this4.__progress = 1;

              _this4.__notifyApi();

              return _this4.__completeUpload();
            });
            op.progress(function (progress) {
              if (progress > _this4.__progress) {
                _this4.__progress = progress;
                return _this4.__notifyApi();
              }
            });
            op.fail(function (error) {
              return _this4.__rejectApi('upload', error);
            });
            this.apiDeferred.always(op.reject);
          }
        }

        return this.__apiPromise;
      }
    }]);

    return BaseFile;
  }();

  var _directRunner = null;

  var ObjectFile = /*#__PURE__*/function (_BaseFile) {
    _inherits(ObjectFile, _BaseFile);

    var _super = _createSuper(ObjectFile);

    function ObjectFile(__file) {
      var _this;

      _classCallCheck(this, ObjectFile);

      _this = _super.apply(this, arguments);
      _this.__file = __file;
      _this.fileName = _this.__file.name || 'original';

      _this.__notifyApi();

      return _this;
    }

    _createClass(ObjectFile, [{
      key: "setFile",
      value: function setFile(file) {
        if (file) {
          this.__file = file;
        }

        this.sourceInfo.file = this.__file;

        if (!this.__file) {
          return;
        }

        this.fileSize = this.__file.size;
        this.fileType = this.__file.type || 'application/octet-stream';

        if (this.settings.debugUploads) {
          debug('Use local file.', this.fileName, this.fileType, this.fileSize);
        }

        this.__runValidators();

        return this.__notifyApi();
      }
    }, {
      key: "__startUpload",
      value: function __startUpload() {
        var _this2 = this;

        var df, ios, resizeShare;
        this.apiDeferred.always(function () {
          _this2.__file = null;
          return _this2.__file;
        });

        if (this.__file.size >= this.settings.multipartMinSize && Blob) {
          this.setFile();
          return this.multipartUpload();
        }

        ios = iOSVersion;

        if (!this.settings.imageShrink || ios && ios < 8) {
          this.setFile();
          return this.directUpload();
        } // if @settings.imageShrink


        df = $__default["default"].Deferred();
        resizeShare = 0.4;
        shrinkFile(this.__file, this.settings.imageShrink).progress(function (progress) {
          return df.notify(progress * resizeShare);
        }).done(this.setFile.bind(this)).fail(function () {
          _this2.setFile();

          resizeShare = resizeShare * 0.1;
          return resizeShare;
        }).always(function () {
          df.notify(resizeShare);
          return _this2.directUpload().done(df.resolve).fail(df.reject).progress(function (progress) {
            return df.notify(resizeShare + progress * (1 - resizeShare));
          });
        });
        return df;
      }
    }, {
      key: "__autoAbort",
      value: function __autoAbort(xhr) {
        this.apiDeferred.fail(function () {
          return xhr.abort();
        });
        return xhr;
      }
    }, {
      key: "directRunner",
      value: function directRunner(task) {
        if (!_directRunner) {
          _directRunner = taskRunner(this.settings.parallelDirectUploads);
        }

        return _directRunner(task);
      }
    }, {
      key: "directUpload",
      value: function directUpload() {
        var _this3 = this;

        var df;
        df = $__default["default"].Deferred();

        if (!this.__file) {
          this.__rejectApi('baddata');

          return df;
        }

        if (this.fileSize > 100 * 1024 * 1024) {
          this.__rejectApi('size');

          return df;
        }

        this.directRunner(function (release) {
          df.always(release);

          if (_this3.apiDeferred.state() !== 'pending') {
            return;
          }

          var formData = new window.FormData();
          formData.append('UPLOADCARE_PUB_KEY', _this3.settings.publicKey);
          formData.append('signature', _this3.settings.secureSignature);
          formData.append('expire', _this3.settings.secureExpire);
          formData.append('UPLOADCARE_STORE', _this3.settings.doNotStore ? '' : 'auto');
          formData.append('file', _this3.__file, _this3.fileName);
          formData.append('file_name', _this3.fileName);
          formData.append('source', _this3.sourceInfo.source);
          $__default["default"].each(getMetadataObject(_this3.settings), function (key, value) {
            formData.append("metadata[".concat(key, "]"), value);
          });
          return _this3.__autoAbort($__default["default"].ajax({
            xhr: function xhr() {
              var xhr; // Naked XHR for progress tracking

              xhr = $__default["default"].ajaxSettings.xhr();

              if (xhr.upload) {
                xhr.upload.addEventListener('progress', function (e) {
                  return df.notify(e.loaded / e.total);
                }, false);
              }

              return xhr;
            },
            crossDomain: true,
            type: 'POST',
            url: "".concat(_this3.settings.urlBase, "/base/?jsonerrors=1"),
            headers: {
              'X-UC-User-Agent': _this3.settings._userAgent
            },
            contentType: false,
            // For correct boundary string
            processData: false,
            data: formData,
            dataType: 'json'
          }).retry(_this3.settings.retryConfig).done(function (data) {
            if (data != null ? data.file : undefined) {
              _this3.fileId = data.file;
              return df.resolve();
            } else if (data.error) {
              var _data$error = data.error,
                  message = _data$error.content,
                  code = _data$error.error_code;
              return df.reject({
                message: message,
                code: code
              });
            } else {
              return df.reject();
            }
          }).fail(df.reject));
        });
        return df;
      }
    }, {
      key: "multipartUpload",
      value: function multipartUpload() {
        var _this4 = this;

        var df;
        df = $__default["default"].Deferred();

        if (!this.__file) {
          return df;
        }

        this.multipartStart().done(function (data) {
          return _this4.uploadParts(data.parts, data.uuid).done(function () {
            return _this4.multipartComplete(data.uuid).done(function (data) {
              _this4.fileId = data.uuid;

              _this4.__handleFileData(data);

              return df.resolve();
            }).fail(df.reject);
          }).progress(df.notify).fail(df.reject);
        }).fail(df.reject);
        return df;
      }
    }, {
      key: "multipartStart",
      value: function multipartStart() {
        var _this5 = this;

        var data = {
          UPLOADCARE_PUB_KEY: this.settings.publicKey,
          signature: this.settings.secureSignature,
          expire: this.settings.secureExpire,
          filename: this.fileName,
          source: this.sourceInfo.source,
          size: this.fileSize,
          content_type: this.fileType,
          part_size: this.settings.multipartPartSize,
          UPLOADCARE_STORE: this.settings.doNotStore ? '' : 'auto'
        };
        $__default["default"].each(getMetadataObject(this.settings), function (key, value) {
          data["metadata[".concat(key, "]")] = value;
        });
        return this.__autoAbort(jsonp("".concat(this.settings.urlBase, "/multipart/start/?jsonerrors=1"), 'POST', data, {
          headers: {
            'X-UC-User-Agent': this.settings._userAgent
          },
          retryConfig: this.settings.retryConfig
        })).fail(function (error) {
          if (_this5.settings.debugUploads) {
            return log("Can't start multipart upload.", error.message, data);
          }
        });
      }
    }, {
      key: "uploadParts",
      value: function uploadParts(parts, uuid) {
        var _this6 = this;

        var df, inProgress, j, lastUpdate, progress, ref1, _submit, submittedBytes, submittedParts, updateProgress;

        progress = [];
        lastUpdate = Date.now();

        updateProgress = function updateProgress(i, loaded) {
          var j, len, total;
          progress[i] = loaded;

          if (Date.now() - lastUpdate < 250) {
            return;
          }

          lastUpdate = Date.now();
          total = 0;

          for (j = 0, len = progress.length; j < len; j++) {
            loaded = progress[j];
            total += loaded;
          }

          return df.notify(total / _this6.fileSize);
        };

        df = $__default["default"].Deferred();
        inProgress = 0;
        submittedParts = 0;
        submittedBytes = 0;

        _submit = function submit() {
          if (submittedBytes >= _this6.fileSize) {
            return;
          }

          var bytesToSubmit = submittedBytes + _this6.settings.multipartPartSize;

          if (_this6.fileSize < bytesToSubmit + _this6.settings.multipartMinLastPartSize) {
            bytesToSubmit = _this6.fileSize;
          }

          var blob = _this6.__file.slice(submittedBytes, bytesToSubmit);

          submittedBytes = bytesToSubmit;
          var partNo = submittedParts;
          inProgress += 1;
          submittedParts += 1;
          return function () {
            if (_this6.apiDeferred.state() !== 'pending') {
              return;
            }

            progress[partNo] = 0;
            return _this6.__autoAbort($__default["default"].ajax({
              xhr: function xhr() {
                var xhr; // Naked XHR for progress tracking

                xhr = $__default["default"].ajaxSettings.xhr();
                xhr.responseType = 'text';

                if (xhr.upload) {
                  xhr.upload.addEventListener('progress', function (e) {
                    return updateProgress(partNo, e.loaded);
                  }, false);
                }

                return xhr;
              },
              url: parts[partNo],
              crossDomain: true,
              type: 'PUT',
              processData: false,
              contentType: _this6.fileType,
              data: blob
            }).retry(_objectSpread2(_objectSpread2({}, _this6.settings.retryConfig), {}, {
              onAttemptFail: function onAttemptFail(_ref) {
                var attempt = _ref.attempt;

                if (_this6.settings.debugUploads) {
                  debug("Part #".concat(partNo, "(").concat(attempt, ") upload is failed."), uuid);
                }
              }
            })).done(function () {
              inProgress -= 1;

              _submit();

              if (!inProgress) {
                return df.resolve();
              }
            }).fail(function () {
              if (_this6.settings.debugUploads) {
                log("Part #".concat(partNo, " and file upload is failed."), uuid);
              }

              return df.reject();
            }));
          }();
        };

        for (j = 0, ref1 = this.settings.multipartConcurrency; ref1 >= 0 ? j < ref1 : j > ref1; ref1 >= 0 ? ++j : --j) {
          _submit();
        }

        return df;
      }
    }, {
      key: "multipartComplete",
      value: function multipartComplete(uuid) {
        var _this7 = this;

        var data;
        data = {
          UPLOADCARE_PUB_KEY: this.settings.publicKey,
          uuid: uuid
        };
        return this.__autoAbort(jsonp("".concat(this.settings.urlBase, "/multipart/complete/?jsonerrors=1"), 'POST', data, {
          headers: {
            'X-UC-User-Agent': this.settings._userAgent
          },
          retryConfig: this.settings.retryConfig
        })).fail(function (error) {
          if (_this7.settings.debugUploads) {
            return log("Can't complete multipart upload.", uuid, _this7.settings.publicKey, error.message);
          }
        });
      }
    }]);

    return ObjectFile;
  }(BaseFile);

  ObjectFile.prototype.sourceName = 'local';

  var InputFile = /*#__PURE__*/function (_BaseFile) {
    _inherits(InputFile, _BaseFile);

    var _super = _createSuper(InputFile);

    function InputFile(__input) {
      var _this;

      _classCallCheck(this, InputFile);

      _this = _super.apply(this, arguments);
      _this.__input = __input;
      _this.fileId = uuid();
      _this.fileName = $__default["default"](_this.__input).val().split('\\').pop();

      _this.__notifyApi();

      return _this;
    }

    _createClass(InputFile, [{
      key: "__startUpload",
      value: function __startUpload() {
        var df, formParam, iframeId, targetUrl;
        df = $__default["default"].Deferred();
        targetUrl = "".concat(this.settings.urlBase, "/iframe/");
        iframeId = "uploadcare--iframe-".concat(this.fileId);
        this.__iframe = $__default["default"]('<iframe>').attr({
          id: iframeId,
          name: iframeId
        }).css('display', 'none').appendTo('body').on('load', df.resolve).on('error', df.reject);

        formParam = function formParam(name, value) {
          return $__default["default"]('<input/>', {
            type: 'hidden',
            name: name,
            value: value
          });
        };

        $__default["default"](this.__input).attr('name', 'file');
        this.__iframeForm = $__default["default"]('<form>').attr({
          method: 'POST',
          action: targetUrl,
          enctype: 'multipart/form-data',
          target: iframeId
        }).append(formParam('UPLOADCARE_PUB_KEY', this.settings.publicKey)).append(formParam('UPLOADCARE_SIGNATURE', this.settings.secureSignature)).append(formParam('UPLOADCARE_EXPIRE', this.settings.secureExpire)).append(formParam('UPLOADCARE_FILE_ID', this.fileId)).append(formParam('UPLOADCARE_STORE', this.settings.doNotStore ? '' : 'auto')).append(formParam('UPLOADCARE_SOURCE', this.sourceInfo.source)).append(this.__input).css('display', 'none').appendTo('body').submit();
        return df.always(this.__cleanUp.bind(this));
      }
    }, {
      key: "__cleanUp",
      value: function __cleanUp() {
        var ref1, ref2;

        if ((ref1 = this.__iframe) != null) {
          ref1.off('load error').remove();
        }

        if ((ref2 = this.__iframeForm) != null) {
          ref2.remove();
        }

        this.__iframe = null;
        this.__iframeForm = null;
        return this.__iframeForm;
      }
    }]);

    return InputFile;
  }(BaseFile);

  InputFile.prototype.sourceName = 'local-compat';

  function createCommonjsModule(fn, module) {
  	return module = { exports: {} }, fn(module, module.exports), module.exports;
  }

  var pusher = createCommonjsModule(function (module, exports) {
  // changed:
  //   Pusher.dependency_suffix = '.min'; (was '')
  //   window.WEB_SOCKET_SWF_LOCATION = "https://s3.amazonaws.com/uploadcare-static/WebSocketMainInsecure.swf"

  /*!
   * Pusher JavaScript Library v1.12.2
   * http://pusherapp.com/
   *
   * Copyright 2011, Pusher
   * Released under the MIT licence.
   */
  var isWindowDefined = isWindowDefined$1.isWindowDefined;

  (function () {
    var _Pusher, _require;

    (function () {
      _Pusher = function Pusher(app_key, options) {
        this.options = options || {};
        this.key = app_key;
        this.channels = new _Pusher.Channels();
        this.global_emitter = new _Pusher.EventsDispatcher();
        var self = this;
        this.checkAppKey();
        this.connection = new _Pusher.Connection(this.key, this.options); // Setup / teardown connection

        this.connection.bind('connected', function () {
          self.subscribeAll();
        }).bind('message', function (params) {
          var internal = params.event.indexOf('pusher_internal:') === 0;

          if (params.channel) {
            var channel;

            if (channel = self.channel(params.channel)) {
              channel.emit(params.event, params.data);
            }
          } // Emit globaly [deprecated]


          if (!internal) self.global_emitter.emit(params.event, params.data);
        }).bind('disconnected', function () {
          self.channels.disconnect();
        }).bind('error', function (err) {
          _Pusher.warn('Error', err);
        });

        _Pusher.instances.push(this);

        if (_Pusher.isReady) self.connect();
      };

      _Pusher.instances = [];
      _Pusher.prototype = {
        channel: function channel(name) {
          return this.channels.find(name);
        },
        connect: function connect() {
          this.connection.connect();
        },
        disconnect: function disconnect() {
          this.connection.disconnect();
        },
        bind: function bind(event_name, callback) {
          this.global_emitter.bind(event_name, callback);
          return this;
        },
        bind_all: function bind_all(callback) {
          this.global_emitter.bind_all(callback);
          return this;
        },
        subscribeAll: function subscribeAll() {
          var channelName;

          for (channelName in this.channels.channels) {
            if (this.channels.channels.hasOwnProperty(channelName)) {
              this.subscribe(channelName);
            }
          }
        },
        subscribe: function subscribe(channel_name) {
          var self = this;
          var channel = this.channels.add(channel_name, this);

          if (this.connection.state === 'connected') {
            channel.authorize(this.connection.socket_id, this.options, function (err, data) {
              if (err) {
                channel.emit('pusher:subscription_error', data);
              } else {
                self.send_event('pusher:subscribe', {
                  channel: channel_name,
                  auth: data.auth,
                  channel_data: data.channel_data
                });
              }
            });
          }

          return channel;
        },
        unsubscribe: function unsubscribe(channel_name) {
          this.channels.remove(channel_name);

          if (this.connection.state === 'connected') {
            this.send_event('pusher:unsubscribe', {
              channel: channel_name
            });
          }
        },
        send_event: function send_event(event_name, data, channel) {
          return this.connection.send_event(event_name, data, channel);
        },
        checkAppKey: function checkAppKey() {
          if (this.key === null || this.key === undefined) {
            _Pusher.warn('Warning', 'You must pass your app key when you instantiate Pusher.');
          }
        }
      };
      _Pusher.Util = {
        extend: function extend(target, extensions) {
          for (var property in extensions) {
            if (extensions[property] && extensions[property].constructor && extensions[property].constructor === Object) {
              target[property] = extend(target[property] || {}, extensions[property]);
            } else {
              target[property] = extensions[property];
            }
          }

          return target;
        },
        stringify: function stringify() {
          var m = ["Pusher"];

          for (var i = 0; i < arguments.length; i++) {
            if (typeof arguments[i] === "string") {
              m.push(arguments[i]);
            } else {
              if (window['JSON'] == undefined) {
                m.push(arguments[i].toString());
              } else {
                m.push(JSON.stringify(arguments[i]));
              }
            }
          }
          return m.join(" : ");
        },
        arrayIndexOf: function arrayIndexOf(array, item) {
          // MSIE doesn't have array.indexOf
          var nativeIndexOf = Array.prototype.indexOf;
          if (array == null) return -1;
          if (nativeIndexOf && array.indexOf === nativeIndexOf) return array.indexOf(item);

          for (i = 0, l = array.length; i < l; i++) {
            if (array[i] === item) return i;
          }

          return -1;
        }
      }; // To receive log output provide a Pusher.log function, for example
      // Pusher.log = function(m){console.log(m)}

      _Pusher.debug = function () {
        if (!_Pusher.log) return;

        _Pusher.log(_Pusher.Util.stringify.apply(this, arguments));
      };

      _Pusher.warn = function () {
        if (window.console && window.console.warn) {
          window.console.warn(_Pusher.Util.stringify.apply(this, arguments));
        } else {
          if (!_Pusher.log) return;

          _Pusher.log(_Pusher.Util.stringify.apply(this, arguments));
        }
      }; // Pusher defaults


      _Pusher.VERSION = '1.12.2';
      _Pusher.host = 'ws.pusherapp.com';
      _Pusher.ws_port = 80;
      _Pusher.wss_port = 443;
      _Pusher.channel_auth_endpoint = '/pusher/auth';
      _Pusher.cdn_http = 'http://js.pusher.com/';
      _Pusher.cdn_https = 'https://d3dy5gmtp8yhk7.cloudfront.net/';
      _Pusher.dependency_suffix = '.min';
      _Pusher.channel_auth_transport = 'ajax';
      _Pusher.activity_timeout = 120000;
      _Pusher.pong_timeout = 30000;
      _Pusher.isReady = false;

      _Pusher.ready = function () {
        _Pusher.isReady = true;

        for (var i = 0, l = _Pusher.instances.length; i < l; i++) {
          _Pusher.instances[i].connect();
        }
      };
    })();

    (function () {
      /* Abstract event binding
      Example:
      
          var MyEventEmitter = function(){};
          MyEventEmitter.prototype = new Pusher.EventsDispatcher;
      
          var emitter = new MyEventEmitter();
      
          // Bind to single event
          emitter.bind('foo_event', function(data){ alert(data)} );
      
          // Bind to all
          emitter.bind_all(function(eventName, data){ alert(data) });
      
      --------------------------------------------------------*/
      function CallbackRegistry() {
        this._callbacks = {};
      }

      CallbackRegistry.prototype.get = function (eventName) {
        return this._callbacks[this._prefix(eventName)];
      };

      CallbackRegistry.prototype.add = function (eventName, callback) {
        var prefixedEventName = this._prefix(eventName);

        this._callbacks[prefixedEventName] = this._callbacks[prefixedEventName] || [];

        this._callbacks[prefixedEventName].push(callback);
      };

      CallbackRegistry.prototype.remove = function (eventName, callback) {
        if (this.get(eventName)) {
          var index = _Pusher.Util.arrayIndexOf(this.get(eventName), callback);

          this._callbacks[this._prefix(eventName)].splice(index, 1);
        }
      };

      CallbackRegistry.prototype._prefix = function (eventName) {
        return "_" + eventName;
      };

      function EventsDispatcher(failThrough) {
        this.callbacks = new CallbackRegistry();
        this.global_callbacks = []; // Run this function when dispatching an event when no callbacks defined

        this.failThrough = failThrough;
      }

      EventsDispatcher.prototype.bind = function (eventName, callback) {
        this.callbacks.add(eventName, callback);
        return this; // chainable
      };

      EventsDispatcher.prototype.unbind = function (eventName, callback) {
        this.callbacks.remove(eventName, callback);
        return this;
      };

      EventsDispatcher.prototype.emit = function (eventName, data) {
        // Global callbacks
        for (var i = 0; i < this.global_callbacks.length; i++) {
          this.global_callbacks[i](eventName, data);
        } // Event callbacks


        var callbacks = this.callbacks.get(eventName);

        if (callbacks) {
          for (var i = 0; i < callbacks.length; i++) {
            callbacks[i](data);
          }
        } else if (this.failThrough) {
          this.failThrough(eventName, data);
        }

        return this;
      };

      EventsDispatcher.prototype.bind_all = function (callback) {
        this.global_callbacks.push(callback);
        return this;
      };

      _Pusher.EventsDispatcher = EventsDispatcher;
    })();

    (function () {
      /*-----------------------------------------------
        Helpers:
      -----------------------------------------------*/
      function capitalize(str) {
        return str.substr(0, 1).toUpperCase() + str.substr(1);
      }

      function safeCall(method, obj, data) {
        if (obj[method] !== undefined) {
          obj[method](data);
        }
      }
      /*-----------------------------------------------
        The State Machine
      -----------------------------------------------*/


      function Machine(initialState, transitions, stateActions) {
        _Pusher.EventsDispatcher.call(this);

        this.state = undefined;
        this.errors = []; // functions for each state

        this.stateActions = stateActions; // set up the transitions

        this.transitions = transitions;
        this.transition(initialState);
      }

      Machine.prototype.transition = function (nextState, data) {
        var prevState = this.state;
        var stateCallbacks = this.stateActions;

        if (prevState && _Pusher.Util.arrayIndexOf(this.transitions[prevState], nextState) == -1) {
          this.emit('invalid_transition_attempt', {
            oldState: prevState,
            newState: nextState
          });
          throw new Error('Invalid transition [' + prevState + ' to ' + nextState + ']');
        } // exit


        safeCall(prevState + 'Exit', stateCallbacks, data); // tween

        safeCall(prevState + 'To' + capitalize(nextState), stateCallbacks, data); // pre

        safeCall(nextState + 'Pre', stateCallbacks, data); // change state:

        this.state = nextState; // handy to bind to

        this.emit('state_change', {
          oldState: prevState,
          newState: nextState
        }); // Post:

        safeCall(nextState + 'Post', stateCallbacks, data);
      };

      Machine.prototype.is = function (state) {
        return this.state === state;
      };

      Machine.prototype.isNot = function (state) {
        return this.state !== state;
      };

      _Pusher.Util.extend(Machine.prototype, _Pusher.EventsDispatcher.prototype);

      _Pusher.Machine = Machine;
    })();

    (function () {
      /*
        A little bauble to interface with window.navigator.onLine,
        window.ononline and window.onoffline.  Easier to mock.
      */
      var NetInfo = function NetInfo() {
        var self = this;

        _Pusher.EventsDispatcher.call(this); // This is okay, as IE doesn't support this stuff anyway.


        if (window.addEventListener !== undefined) {
          window.addEventListener("online", function () {
            self.emit('online', null);
          }, false);
          window.addEventListener("offline", function () {
            self.emit('offline', null);
          }, false);
        }
      }; // Offline means definitely offline (no connection to router).
      // Inverse does NOT mean definitely online (only currently supported in Safari
      // and even there only means the device has a connection to the router).


      NetInfo.prototype.isOnLine = function () {
        if (window.navigator.onLine === undefined) {
          return true;
        } else {
          return window.navigator.onLine;
        }
      };

      _Pusher.Util.extend(NetInfo.prototype, _Pusher.EventsDispatcher.prototype);

      _Pusher.NetInfo = NetInfo;
    })();

    (function () {
      var machineTransitions = {
        'initialized': ['waiting', 'failed'],
        'waiting': ['connecting', 'permanentlyClosed'],
        'connecting': ['open', 'permanentlyClosing', 'impermanentlyClosing', 'waiting'],
        'open': ['connected', 'permanentlyClosing', 'impermanentlyClosing', 'waiting'],
        'connected': ['permanentlyClosing', 'waiting'],
        'impermanentlyClosing': ['waiting', 'permanentlyClosing'],
        'permanentlyClosing': ['permanentlyClosed'],
        'permanentlyClosed': ['waiting', 'failed'],
        'failed': ['permanentlyClosed']
      }; // Amount to add to time between connection attemtpts per failed attempt.

      var UNSUCCESSFUL_CONNECTION_ATTEMPT_ADDITIONAL_WAIT = 2000;
      var UNSUCCESSFUL_OPEN_ATTEMPT_ADDITIONAL_TIMEOUT = 2000;
      var UNSUCCESSFUL_CONNECTED_ATTEMPT_ADDITIONAL_TIMEOUT = 2000;
      var MAX_CONNECTION_ATTEMPT_WAIT = 5 * UNSUCCESSFUL_CONNECTION_ATTEMPT_ADDITIONAL_WAIT;
      var MAX_OPEN_ATTEMPT_TIMEOUT = 5 * UNSUCCESSFUL_OPEN_ATTEMPT_ADDITIONAL_TIMEOUT;
      var MAX_CONNECTED_ATTEMPT_TIMEOUT = 5 * UNSUCCESSFUL_CONNECTED_ATTEMPT_ADDITIONAL_TIMEOUT;

      function resetConnectionParameters(connection) {
        connection.connectionWait = 0;

        if (_Pusher.TransportType === 'flash') {
          // Flash needs a bit more time
          connection.openTimeout = 5000;
        } else {
          connection.openTimeout = 2000;
        }

        connection.connectedTimeout = 2000;
        connection.connectionSecure = connection.compulsorySecure;
        connection.connectionAttempts = 0;
      }

      function Connection(key, options) {
        var self = this;

        _Pusher.EventsDispatcher.call(this);

        this.options = _Pusher.Util.extend({
          encrypted: false
        }, options);
        this.netInfo = new _Pusher.NetInfo();
        this.netInfo.bind('online', function () {
          if (self._machine.is('waiting')) {
            self._machine.transition('connecting');

            updateState('connecting');
          }
        });
        this.netInfo.bind('offline', function () {
          if (self._machine.is('connected')) {
            // These are for Chrome 15, which ends up
            // having two sockets hanging around.
            self.socket.onclose = undefined;
            self.socket.onmessage = undefined;
            self.socket.onerror = undefined;
            self.socket.onopen = undefined;
            self.socket.close();
            self.socket = undefined;

            self._machine.transition('waiting');
          }
        }); // define the state machine that runs the connection

        this._machine = new _Pusher.Machine('initialized', machineTransitions, {
          initializedPre: function initializedPre() {
            self.compulsorySecure = self.options.encrypted;
            self.key = key;
            self.socket = null;
            self.socket_id = null;
            self.state = 'initialized';
          },
          waitingPre: function waitingPre() {
            if (self.connectionWait > 0) {
              self.emit('connecting_in', self.connectionWait);
            }

            if (self.netInfo.isOnLine() && self.connectionAttempts <= 4) {
              updateState('connecting');
            } else {
              updateState('unavailable');
            } // When in the unavailable state we attempt to connect, but don't
            // broadcast that fact


            if (self.netInfo.isOnLine()) {
              self._waitingTimer = setTimeout(function () {
                self._machine.transition('connecting');
              }, connectionDelay());
            }
          },
          waitingExit: function waitingExit() {
            clearTimeout(self._waitingTimer);
          },
          connectingPre: function connectingPre() {
            // Case that a user manages to get to the connecting
            // state even when offline.
            if (self.netInfo.isOnLine() === false) {
              self._machine.transition('waiting');

              updateState('unavailable');
              return;
            }

            var url = formatURL(self.key, self.connectionSecure);

            _Pusher.debug('Connecting', url);

            self.socket = new _Pusher.Transport(url); // now that the socket connection attempt has been started,
            // set up the callbacks fired by the socket for different outcomes

            self.socket.onopen = ws_onopen;
            self.socket.onclose = transitionToWaiting;
            self.socket.onerror = ws_onError; // allow time to get ws_onOpen, otherwise close socket and try again

            self._connectingTimer = setTimeout(TransitionToImpermanentlyClosing, self.openTimeout);
          },
          connectingExit: function connectingExit() {
            clearTimeout(self._connectingTimer);
            self.socket.onopen = undefined; // unbind to avoid open events that are no longer relevant
          },
          connectingToWaiting: function connectingToWaiting() {
            updateConnectionParameters(); // FUTURE: update only ssl
          },
          connectingToImpermanentlyClosing: function connectingToImpermanentlyClosing() {
            updateConnectionParameters(); // FUTURE: update only timeout
          },
          openPre: function openPre() {
            self.socket.onmessage = ws_onMessageOpen;
            self.socket.onerror = ws_onError;
            self.socket.onclose = transitionToWaiting; // allow time to get connected-to-Pusher message, otherwise close socket, try again

            self._openTimer = setTimeout(TransitionToImpermanentlyClosing, self.connectedTimeout);
          },
          openExit: function openExit() {
            clearTimeout(self._openTimer);
            self.socket.onmessage = undefined; // unbind to avoid messages that are no longer relevant
          },
          openToWaiting: function openToWaiting() {
            updateConnectionParameters();
          },
          openToImpermanentlyClosing: function openToImpermanentlyClosing() {
            updateConnectionParameters();
          },
          connectedPre: function connectedPre(socket_id) {
            self.socket_id = socket_id;
            self.socket.onmessage = ws_onMessageConnected;
            self.socket.onerror = ws_onError;
            self.socket.onclose = transitionToWaiting;
            resetConnectionParameters(self);
            self.connectedAt = new Date().getTime();
            resetActivityCheck();
          },
          connectedPost: function connectedPost() {
            updateState('connected');
          },
          connectedExit: function connectedExit() {
            stopActivityCheck();
            updateState('disconnected');
          },
          impermanentlyClosingPost: function impermanentlyClosingPost() {
            if (self.socket) {
              self.socket.onclose = transitionToWaiting;
              self.socket.close();
            }
          },
          permanentlyClosingPost: function permanentlyClosingPost() {
            if (self.socket) {
              self.socket.onclose = function () {
                resetConnectionParameters(self);

                self._machine.transition('permanentlyClosed');
              };

              self.socket.close();
            } else {
              resetConnectionParameters(self);

              self._machine.transition('permanentlyClosed');
            }
          },
          failedPre: function failedPre() {
            updateState('failed');

            _Pusher.debug('WebSockets are not available in this browser.');
          },
          permanentlyClosedPost: function permanentlyClosedPost() {
            updateState('disconnected');
          }
        });
        /*-----------------------------------------------
          -----------------------------------------------*/

        function updateConnectionParameters() {
          if (self.connectionWait < MAX_CONNECTION_ATTEMPT_WAIT) {
            self.connectionWait += UNSUCCESSFUL_CONNECTION_ATTEMPT_ADDITIONAL_WAIT;
          }

          if (self.openTimeout < MAX_OPEN_ATTEMPT_TIMEOUT) {
            self.openTimeout += UNSUCCESSFUL_OPEN_ATTEMPT_ADDITIONAL_TIMEOUT;
          }

          if (self.connectedTimeout < MAX_CONNECTED_ATTEMPT_TIMEOUT) {
            self.connectedTimeout += UNSUCCESSFUL_CONNECTED_ATTEMPT_ADDITIONAL_TIMEOUT;
          }

          if (self.compulsorySecure !== true) {
            self.connectionSecure = !self.connectionSecure;
          }

          self.connectionAttempts++;
        }

        function formatURL(key, isSecure) {
          var port = _Pusher.ws_port;
          var protocol = 'ws://'; // Always connect with SSL if the current page has
          // been loaded via HTTPS.
          //
          // FUTURE: Always connect using SSL.
          //

          if (isSecure || document.location.protocol === 'https:') {
            port = _Pusher.wss_port;
            protocol = 'wss://';
          }

          var flash = _Pusher.TransportType === "flash" ? "true" : "false";
          return protocol + _Pusher.host + ':' + port + '/app/' + key + '?protocol=5&client=js' + '&version=' + _Pusher.VERSION + '&flash=' + flash;
        } // callback for close and retry.  Used on timeouts.


        function TransitionToImpermanentlyClosing() {
          self._machine.transition('impermanentlyClosing');
        }

        function resetActivityCheck() {
          if (self._activityTimer) {
            clearTimeout(self._activityTimer);
          } // Send ping after inactivity


          self._activityTimer = setTimeout(function () {
            self.send_event('pusher:ping', {}); // Wait for pong response

            self._activityTimer = setTimeout(function () {
              self.socket.close();
            }, self.options.pong_timeout || _Pusher.pong_timeout);
          }, self.options.activity_timeout || _Pusher.activity_timeout);
        }

        function stopActivityCheck() {
          if (self._activityTimer) {
            clearTimeout(self._activityTimer);
          }
        } // Returns the delay before the next connection attempt should be made
        //
        // This function guards against attempting to connect more frequently than
        // once every second
        //


        function connectionDelay() {
          var delay = self.connectionWait;

          if (delay === 0) {
            if (self.connectedAt) {
              var t = 1000;
              var connectedFor = new Date().getTime() - self.connectedAt;

              if (connectedFor < t) {
                delay = t - connectedFor;
              }
            }
          }

          return delay;
        }
        /*-----------------------------------------------
          WebSocket Callbacks
          -----------------------------------------------*/
        // no-op, as we only care when we get pusher:connection_established


        function ws_onopen() {
          self._machine.transition('open');
        }

        function handleCloseCode(code, message) {
          // first inform the end-developer of this error
          self.emit('error', {
            type: 'PusherError',
            data: {
              code: code,
              message: message
            }
          });

          if (code === 4000) {
            // SSL only app
            self.compulsorySecure = true;
            self.connectionSecure = true;
            self.options.encrypted = true;
            TransitionToImpermanentlyClosing();
          } else if (code < 4100) {
            // Permentently close connection
            self._machine.transition('permanentlyClosing');
          } else if (code < 4200) {
            // Backoff before reconnecting
            self.connectionWait = 1000;

            self._machine.transition('waiting');
          } else if (code < 4300) {
            // Reconnect immediately
            TransitionToImpermanentlyClosing();
          } else {
            // Unknown error
            self._machine.transition('permanentlyClosing');
          }
        }

        function ws_onMessageOpen(event) {
          var params = parseWebSocketEvent(event);

          if (params !== undefined) {
            if (params.event === 'pusher:connection_established') {
              self._machine.transition('connected', params.data.socket_id);
            } else if (params.event === 'pusher:error') {
              handleCloseCode(params.data.code, params.data.message);
            }
          }
        }

        function ws_onMessageConnected(event) {
          resetActivityCheck();
          var params = parseWebSocketEvent(event);

          if (params !== undefined) {
            _Pusher.debug('Event recd', params);

            switch (params.event) {
              case 'pusher:error':
                self.emit('error', {
                  type: 'PusherError',
                  data: params.data
                });
                break;

              case 'pusher:ping':
                self.send_event('pusher:pong', {});
                break;
            }

            self.emit('message', params);
          }
        }
        /**
         * Parses an event from the WebSocket to get
         * the JSON payload that we require
         *
         * @param {MessageEvent} event  The event from the WebSocket.onmessage handler.
        **/


        function parseWebSocketEvent(event) {
          try {
            var params = JSON.parse(event.data);

            if (typeof params.data === 'string') {
              try {
                params.data = JSON.parse(params.data);
              } catch (e) {
                if (!(e instanceof SyntaxError)) {
                  throw e;
                }
              }
            }

            return params;
          } catch (e) {
            self.emit('error', {
              type: 'MessageParseError',
              error: e,
              data: event.data
            });
          }
        }

        function transitionToWaiting() {
          self._machine.transition('waiting');
        }

        function ws_onError(error) {
          // just emit error to user - socket will already be closed by browser
          self.emit('error', {
            type: 'WebSocketError',
            error: error
          });
        } // Updates the public state information exposed by connection
        //
        // This is distinct from the internal state information used by _machine
        // to manage the connection
        //


        function updateState(newState, data) {
          var prevState = self.state;
          self.state = newState; // Only emit when the state changes

          if (prevState !== newState) {
            _Pusher.debug('State changed', prevState + ' -> ' + newState);

            self.emit('state_change', {
              previous: prevState,
              current: newState
            });
            self.emit(newState, data);
          }
        }
      }

      Connection.prototype.connect = function () {
        // no WebSockets
        if (!this._machine.is('failed') && !_Pusher.Transport) {
          this._machine.transition('failed');
        } // initial open of connection
        else if (this._machine.is('initialized')) {
          resetConnectionParameters(this);

          this._machine.transition('waiting');
        } // user skipping connection wait
        else if (this._machine.is('waiting') && this.netInfo.isOnLine() === true) {
          this._machine.transition('connecting');
        } // user re-opening connection after closing it
        else if (this._machine.is("permanentlyClosed")) {
          resetConnectionParameters(this);

          this._machine.transition('waiting');
        }
      };

      Connection.prototype.send = function (data) {
        if (this._machine.is('connected')) {
          // Workaround for MobileSafari bug (see https://gist.github.com/2052006)
          var self = this;
          setTimeout(function () {
            self.socket.send(data);
          }, 0);
          return true;
        } else {
          return false;
        }
      };

      Connection.prototype.send_event = function (event_name, data, channel) {
        var payload = {
          event: event_name,
          data: data
        };
        if (channel) payload['channel'] = channel;

        _Pusher.debug('Event sent', payload);

        return this.send(JSON.stringify(payload));
      };

      Connection.prototype.disconnect = function () {
        if (this._machine.is('permanentlyClosed')) return;

        if (this._machine.is('waiting') || this._machine.is('failed')) {
          this._machine.transition('permanentlyClosed');
        } else {
          this._machine.transition('permanentlyClosing');
        }
      };

      _Pusher.Util.extend(Connection.prototype, _Pusher.EventsDispatcher.prototype);

      _Pusher.Connection = Connection;
    })();

    (function () {
      _Pusher.Channels = function () {
        this.channels = {};
      };

      _Pusher.Channels.prototype = {
        add: function add(channel_name, pusher) {
          var existing_channel = this.find(channel_name);

          if (!existing_channel) {
            var channel = _Pusher.Channel.factory(channel_name, pusher);

            this.channels[channel_name] = channel;
            return channel;
          } else {
            return existing_channel;
          }
        },
        find: function find(channel_name) {
          return this.channels[channel_name];
        },
        remove: function remove(channel_name) {
          delete this.channels[channel_name];
        },
        disconnect: function disconnect() {
          for (var channel_name in this.channels) {
            this.channels[channel_name].disconnect();
          }
        }
      };

      _Pusher.Channel = function (channel_name, pusher) {
        var self = this;

        _Pusher.EventsDispatcher.call(this, function (event_name, event_data) {
          _Pusher.debug('No callbacks on ' + channel_name + ' for ' + event_name);
        });

        this.pusher = pusher;
        this.name = channel_name;
        this.subscribed = false;
        this.bind('pusher_internal:subscription_succeeded', function (data) {
          self.onSubscriptionSucceeded(data);
        });
      };

      _Pusher.Channel.prototype = {
        // inheritable constructor
        init: function init() {},
        disconnect: function disconnect() {
          this.subscribed = false;
          this.emit("pusher_internal:disconnected");
        },
        onSubscriptionSucceeded: function onSubscriptionSucceeded(data) {
          this.subscribed = true;
          this.emit('pusher:subscription_succeeded');
        },
        authorize: function authorize(socketId, options, callback) {
          return callback(false, {}); // normal channels don't require auth
        },
        trigger: function trigger(event, data) {
          return this.pusher.send_event(event, data, this.name);
        }
      };

      _Pusher.Util.extend(_Pusher.Channel.prototype, _Pusher.EventsDispatcher.prototype);

      _Pusher.Channel.PrivateChannel = {
        authorize: function authorize(socketId, options, callback) {
          var self = this;
          var authorizer = new _Pusher.Channel.Authorizer(this, _Pusher.channel_auth_transport, options);
          return authorizer.authorize(socketId, function (err, authData) {
            if (!err) {
              self.emit('pusher_internal:authorized', authData);
            }

            callback(err, authData);
          });
        }
      };
      _Pusher.Channel.PresenceChannel = {
        init: function init() {
          this.members = new Members(this); // leeches off channel events
        },
        onSubscriptionSucceeded: function onSubscriptionSucceeded(data) {
          this.subscribed = true; // We override this because we want the Members obj to be responsible for
          // emitting the pusher:subscription_succeeded.  It will do this after it has done its work.
        }
      };

      var Members = function Members(channel) {
        var self = this;

        var reset = function reset() {
          this._members_map = {};
          this.count = 0;
          this.me = null;
        };

        reset.call(this);
        channel.bind('pusher_internal:authorized', function (authorizedData) {
          var channelData = JSON.parse(authorizedData.channel_data);
          channel.bind("pusher_internal:subscription_succeeded", function (subscriptionData) {
            self._members_map = subscriptionData.presence.hash;
            self.count = subscriptionData.presence.count;
            self.me = self.get(channelData.user_id);
            channel.emit('pusher:subscription_succeeded', self);
          });
        });
        channel.bind('pusher_internal:member_added', function (data) {
          if (self.get(data.user_id) === null) {
            // only incr if user_id does not already exist
            self.count++;
          }

          self._members_map[data.user_id] = data.user_info;
          channel.emit('pusher:member_added', self.get(data.user_id));
        });
        channel.bind('pusher_internal:member_removed', function (data) {
          var member = self.get(data.user_id);

          if (member) {
            delete self._members_map[data.user_id];
            self.count--;
            channel.emit('pusher:member_removed', member);
          }
        });
        channel.bind('pusher_internal:disconnected', function () {
          reset.call(self);
        });
      };

      Members.prototype = {
        each: function each(callback) {
          for (var i in this._members_map) {
            callback(this.get(i));
          }
        },
        get: function get(user_id) {
          if (this._members_map.hasOwnProperty(user_id)) {
            // have heard of this user user_id
            return {
              id: user_id,
              info: this._members_map[user_id]
            };
          } else {
            // have never heard of this user
            return null;
          }
        }
      };

      _Pusher.Channel.factory = function (channel_name, pusher) {
        var channel = new _Pusher.Channel(channel_name, pusher);

        if (channel_name.indexOf('private-') === 0) {
          _Pusher.Util.extend(channel, _Pusher.Channel.PrivateChannel);
        } else if (channel_name.indexOf('presence-') === 0) {
          _Pusher.Util.extend(channel, _Pusher.Channel.PrivateChannel);

          _Pusher.Util.extend(channel, _Pusher.Channel.PresenceChannel);
        }
        channel.init();
        return channel;
      };
    })();

    (function () {
      _Pusher.Channel.Authorizer = function (channel, type, options) {
        this.channel = channel;
        this.type = type;
        this.authOptions = (options || {}).auth || {};
      };

      _Pusher.Channel.Authorizer.prototype = {
        composeQuery: function composeQuery(socketId) {
          var query = '&socket_id=' + encodeURIComponent(socketId) + '&channel_name=' + encodeURIComponent(this.channel.name);

          for (var i in this.authOptions.params) {
            query += "&" + encodeURIComponent(i) + "=" + encodeURIComponent(this.authOptions.params[i]);
          }

          return query;
        },
        authorize: function authorize(socketId, callback) {
          return _Pusher.authorizers[this.type].call(this, socketId, callback);
        }
      };
      _Pusher.auth_callbacks = {};
      _Pusher.authorizers = {
        ajax: function ajax(socketId, callback) {
          var xhr;

          if (_Pusher.XHR) {
            xhr = new _Pusher.XHR();
          } else {
            xhr = window.XMLHttpRequest ? new window.XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
          }

          xhr.open("POST", _Pusher.channel_auth_endpoint, true); // add request headers

          xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

          for (var headerName in this.authOptions.headers) {
            xhr.setRequestHeader(headerName, this.authOptions.headers[headerName]);
          }

          xhr.onreadystatechange = function () {
            if (xhr.readyState == 4) {
              if (xhr.status == 200) {
                var data,
                    parsed = false;

                try {
                  data = JSON.parse(xhr.responseText);
                  parsed = true;
                } catch (e) {
                  callback(true, 'JSON returned from webapp was invalid, yet status code was 200. Data was: ' + xhr.responseText);
                }

                if (parsed) {
                  // prevents double execution.
                  callback(false, data);
                }
              } else {
                _Pusher.warn("Couldn't get auth info from your webapp", xhr.status);

                callback(true, xhr.status);
              }
            }
          };

          xhr.send(this.composeQuery(socketId));
          return xhr;
        },
        jsonp: function jsonp(socketId, callback) {
          if (this.authOptions.headers !== undefined) {
            _Pusher.warn("Warn", "To send headers with the auth request, you must use AJAX, rather than JSONP.");
          }

          var script = document.createElement("script"); // Hacked wrapper.

          _Pusher.auth_callbacks[this.channel.name] = function (data) {
            callback(false, data);
          };

          var callback_name = "Pusher.auth_callbacks['" + this.channel.name + "']";
          script.src = _Pusher.channel_auth_endpoint + '?callback=' + encodeURIComponent(callback_name) + this.composeQuery(socketId);
          var head = document.getElementsByTagName("head")[0] || document.documentElement;
          head.insertBefore(script, head.firstChild);
        }
      };
    })(); // _require(dependencies, callback) takes an array of dependency urls and a
    // callback to call when all the dependecies have finished loading


    var _require = function () {
      function handleScriptLoaded(elem, callback) {
        if (document.addEventListener) {
          elem.addEventListener('load', callback, false);
        } else {
          elem.attachEvent('onreadystatechange', function () {
            if (elem.readyState == 'loaded' || elem.readyState == 'complete') {
              callback();
            }
          });
        }
      }

      function addScript(src, callback) {
        var head = document.getElementsByTagName('head')[0];
        var script = document.createElement('script');
        script.setAttribute('src', src);
        script.setAttribute("type", "text/javascript");
        script.setAttribute('async', true);
        handleScriptLoaded(script, function () {
          callback();
        });
        head.appendChild(script);
      }

      return function (deps, callback) {
        var deps_loaded = 0;

        for (var i = 0; i < deps.length; i++) {
          addScript(deps[i], function () {
            if (deps.length == ++deps_loaded) {
              // This setTimeout is a workaround for an Opera issue
              setTimeout(callback, 0);
            }
          });
        }
      };
    }();

    (function () {
      // Support Firefox versions which prefix WebSocket
      if (isWindowDefined() && !window['WebSocket'] && window['MozWebSocket']) {
        window['WebSocket'] = window['MozWebSocket'];
      }

      if (isWindowDefined() && window['WebSocket']) {
        _Pusher.Transport = window['WebSocket'];
        _Pusher.TransportType = 'native';
      }

      var cdn = isWindowDefined() && (document.location.protocol == 'http:' ? _Pusher.cdn_http : _Pusher.cdn_https);
      var root = cdn + _Pusher.VERSION;
      var deps = [];

      if (isWindowDefined() && !window['JSON']) {
        deps.push(root + '/json2' + _Pusher.dependency_suffix + '.js');
      }

      if (isWindowDefined() && !window['WebSocket']) {
        // We manually initialize web-socket-js to iron out cross browser issues
        window.WEB_SOCKET_DISABLE_AUTO_INITIALIZATION = true;
        deps.push(root + '/flashfallback' + _Pusher.dependency_suffix + '.js');
      }

      var initialize = function () {
        if (isWindowDefined() && window['WebSocket']) {
          // Initialize function in the case that we have native WebSocket support
          return function () {
            _Pusher.ready();
          };
        } else {
          // Initialize function for fallback case
          return function () {
            if (window['WebSocket']) {
              // window['WebSocket'] is a flash emulation of WebSocket
              _Pusher.Transport = window['WebSocket'];
              _Pusher.TransportType = 'flash'; // window.WEB_SOCKET_SWF_LOCATION = root + "/WebSocketMain.swf";

              window.WEB_SOCKET_SWF_LOCATION = "https://s3.amazonaws.com/uploadcare-static/WebSocketMainInsecure.swf";

              WebSocket.__addTask(function () {
                _Pusher.ready();
              });

              WebSocket.__initialize();
            } else {
              // Flash must not be installed
              _Pusher.Transport = null;
              _Pusher.TransportType = 'none';

              _Pusher.ready();
            }
          };
        }
      }(); // Allows calling a function when the document body is available


      var ondocumentbody = function ondocumentbody(callback) {
        var load_body = function load_body() {
          isWindowDefined() && (document.body ? callback() : setTimeout(load_body, 0));
        };

        load_body();
      };

      var initializeOnDocumentBody = function initializeOnDocumentBody() {
        ondocumentbody(initialize);
      };

      if (deps.length > 0) {
        _require(deps, initializeOnDocumentBody);
      } else {
        initializeOnDocumentBody();
      }
    })();

    this.Pusher = _Pusher;
  }).call(exports);
  });
  var pusher_1 = pusher.Pusher;

  var pushers = {}; // This fixes Pusher's prototype. Because Pusher replaces it:
  // Pusher.prototype = {method: ...}
  // instead of extending:
  // Pusher.prototype.method = ...

  pusher_1.prototype.constructor = pusher_1;

  var ManagedPusher = /*#__PURE__*/function (_Pusher) {
    _inherits(ManagedPusher, _Pusher);

    var _super = _createSuper(ManagedPusher);

    function ManagedPusher() {
      _classCallCheck(this, ManagedPusher);

      return _super.apply(this, arguments);
    }

    _createClass(ManagedPusher, [{
      key: "subscribe",
      value: function subscribe(name) {
        // Ensure we are connected when subscribing.
        if (this.disconnectTimeout) {
          clearTimeout(this.disconnectTimeout);
          this.disconnectTimeout = null;
        }

        this.connect();
        return _get(_getPrototypeOf(ManagedPusher.prototype), "subscribe", this).apply(this, arguments);
      }
    }, {
      key: "unsubscribe",
      value: function unsubscribe(name) {
        var _this = this;

        _get(_getPrototypeOf(ManagedPusher.prototype), "unsubscribe", this).apply(this, arguments); // Schedule disconnect if no channels left.


        if ($__default["default"].isEmptyObject(this.channels.channels)) {
          this.disconnectTimeout = setTimeout(function () {
            _this.disconnectTimeout = null;
            return _this.disconnect();
          }, 5000);
        }
      }
    }]);

    return ManagedPusher;
  }(pusher_1);

  var getPusher = function getPusher(key) {
    if (pushers[key] == null) {
      pushers[key] = new ManagedPusher(key);
    } // Preconnect before we actually need channel.


    pushers[key].connect();
    return pushers[key];
  };

  var UrlFile = /*#__PURE__*/function (_BaseFile) {
    _inherits(UrlFile, _BaseFile);

    var _super = _createSuper(UrlFile);

    function UrlFile(__url) {
      var _this;

      _classCallCheck(this, UrlFile);

      var filename;
      _this = _super.apply(this, arguments);
      _this.__url = __url;
      filename = splitUrlRegex.exec(_this.__url)[3].split('/').pop();

      if (filename) {
        try {
          _this.fileName = decodeURIComponent(filename);
        } catch (error) {
          _this.fileName = filename;
        }
      }

      _this.__notifyApi();

      return _this;
    }

    _createClass(UrlFile, [{
      key: "setName",
      value: function setName(fileName) {
        this.fileName = fileName;
        this.__realFileName = fileName;
        return this.__notifyApi();
      }
    }, {
      key: "setIsImage",
      value: function setIsImage(isImage) {
        this.isImage = isImage;
        return this.__notifyApi();
      }
    }, {
      key: "__startUpload",
      value: function __startUpload() {
        var _this2 = this;

        var df = $__default["default"].Deferred();
        var pusherWatcher = new PusherWatcher(this.settings);
        var pollWatcher = new PollWatcher(this.settings);
        var data = {
          pub_key: this.settings.publicKey,
          signature: this.settings.secureSignature,
          expire: this.settings.secureExpire,
          source_url: this.__url,
          filename: this.__realFileName || '',
          source: this.sourceInfo.source,
          store: this.settings.doNotStore ? '' : 'auto',
          jsonerrors: 1
        };
        $__default["default"].each(getMetadataObject(this.settings), function (key, value) {
          data["metadata[".concat(key, "]")] = value;
        });
        defer(function () {
          if (_this2.apiDeferred.state() !== 'pending') {
            return;
          }

          return jsonp("".concat(_this2.settings.urlBase, "/from_url/"), 'GET', data, {
            headers: {
              'X-UC-User-Agent': _this2.settings._userAgent
            },
            retryConfig: _this2.settings.retryConfig
          }).fail(function (error) {
            if (_this2.settings.debugUploads) {
              debug("Can't start upload from URL.", error.message, data);
            }

            return df.reject(error);
          }).done(function (data) {
            var logger;

            if (_this2.apiDeferred.state() !== 'pending') {
              return;
            }

            if (_this2.settings.debugUploads) {
              debug('Start watchers.', data.token);
              logger = setInterval(function () {
                return debug('Still watching.', data.token);
              }, 5000);
              df.done(function () {
                return debug('Stop watchers.', data.token);
              }).always(function () {
                return clearInterval(logger);
              });
            }

            _this2.__listenWatcher(df, $__default["default"]([pusherWatcher, pollWatcher]));

            df.always(function () {
              $__default["default"]([pusherWatcher, pollWatcher]).off(_this2.allEvents);
              pusherWatcher.stopWatching();
              return pollWatcher.stopWatching();
            }); // turn off pollWatcher if we receive any message from pusher

            $__default["default"](pusherWatcher).one(_this2.allEvents, function () {
              if (!pollWatcher.interval) {
                return;
              }

              if (_this2.settings.debugUploads) {
                debug('Start using pusher.', data.token);
              }

              return pollWatcher.stopWatching();
            });
            pusherWatcher.watch(data.token);
            return pollWatcher.watch(data.token);
          });
        });
        return df;
      }
    }, {
      key: "__listenWatcher",
      value: function __listenWatcher(df, watcher) {
        var _this3 = this;

        return watcher.on('progress', function (e, data) {
          _this3.fileSize = data.total;
          return df.notify(data.done / data.total);
        }).on('success', function (e, data) {
          $__default["default"](e.target).trigger('progress', data);
          _this3.fileId = data.uuid;

          _this3.__handleFileData(data);

          return df.resolve();
        }).on('error fail', function (e, error) {
          if (error.error_code) {
            // error from our pusher backend
            var code = error.error_code,
                message = error.msg;
            df.reject({
              code: code,
              message: message
            });
          } else {
            // some other error
            df.reject(error);
          }
        });
      }
    }]);

    return UrlFile;
  }(BaseFile);

  UrlFile.prototype.sourceName = 'url';
  UrlFile.prototype.allEvents = 'progress success error fail';

  var PusherWatcher = /*#__PURE__*/function () {
    function PusherWatcher(settings) {
      _classCallCheck(this, PusherWatcher);

      this.settings = settings;

      try {
        this.pusher = getPusher(this.settings.pusherKey);
      } catch (error) {
        this.pusher = null;
      }
    }

    _createClass(PusherWatcher, [{
      key: "watch",
      value: function watch(token) {
        var _this4 = this;

        var channel;
        this.token = token;

        if (!this.pusher) {
          return;
        }

        channel = this.pusher.subscribe("task-status-".concat(this.token));
        return channel.bind_all(function (ev, data) {
          return $__default["default"](_this4).trigger(ev, data);
        });
      }
    }, {
      key: "stopWatching",
      value: function stopWatching() {
        if (!this.pusher) {
          return;
        }

        return this.pusher.unsubscribe("task-status-".concat(this.token));
      }
    }]);

    return PusherWatcher;
  }();

  var PollWatcher = /*#__PURE__*/function () {
    function PollWatcher(settings) {
      _classCallCheck(this, PollWatcher);

      this.settings = settings;
      this.poolUrl = "".concat(this.settings.urlBase, "/from_url/status/");
    }

    _createClass(PollWatcher, [{
      key: "watch",
      value: function watch(token) {
        var _this5 = this;

        this.token = token;

        var bind = function bind() {
          _this5.interval = setTimeout(function () {
            _this5.__updateStatus().done(function () {
              if (_this5.interval) {
                // Do not schedule next request if watcher stopped.
                bind();
              }
            });
          }, 333);
          return _this5.interval;
        };

        return bind();
      }
    }, {
      key: "stopWatching",
      value: function stopWatching() {
        if (this.interval) {
          clearTimeout(this.interval);
        }

        this.interval = null;
        return this.interval;
      }
    }, {
      key: "__updateStatus",
      value: function __updateStatus() {
        var _this6 = this;

        return jsonp(this.poolUrl, 'GET', {
          token: this.token
        }, {
          headers: {
            'X-UC-User-Agent': this.settings._userAgent
          },
          retryConfig: this.settings.retryConfig
        }).fail(function (error) {
          return $__default["default"](_this6).trigger('error', error);
        }).done(function (data) {
          return $__default["default"](_this6).trigger(data.status, data);
        });
      }
    }]);

    return PollWatcher;
  }();

  var UploadedFile = /*#__PURE__*/function (_BaseFile) {
    _inherits(UploadedFile, _BaseFile);

    var _super = _createSuper(UploadedFile);

    function UploadedFile(fileIdOrUrl) {
      var _this;

      _classCallCheck(this, UploadedFile);

      var cdnUrl;
      _this = _super.apply(this, arguments);
      cdnUrl = splitCdnUrl(fileIdOrUrl);

      if (cdnUrl) {
        _this.fileId = cdnUrl[1];

        if (cdnUrl[2]) {
          _this.cdnUrlModifiers = cdnUrl[2];
        }
      } else {
        _this.__rejectApi('baddata');
      }

      return _this;
    }

    return _createClass(UploadedFile);
  }(BaseFile);

  UploadedFile.prototype.sourceName = 'uploaded';

  var ReadyFile = /*#__PURE__*/function (_BaseFile2) {
    _inherits(ReadyFile, _BaseFile2);

    var _super2 = _createSuper(ReadyFile);

    function ReadyFile(data) {
      var _this2;

      _classCallCheck(this, ReadyFile);

      _this2 = _super2.apply(this, arguments);

      if (!data) {
        _this2.__rejectApi('deleted');
      } else {
        _this2.fileId = data.uuid;

        _this2.__handleFileData(data);
      }

      return _this2;
    }

    return _createClass(ReadyFile);
  }(BaseFile);

  ReadyFile.prototype.sourceName = 'uploaded';

  var converters = {
    object: ObjectFile,
    input: InputFile,
    url: UrlFile,
    uploaded: UploadedFile,
    ready: ReadyFile
  };

  var fileFrom = function fileFrom(type, data, s) {
    return filesFrom(type, [data], s)[0];
  };

  var filesFrom = function filesFrom(type, data, s) {
    var i, info, len, param, results;
    s = build(s || {});
    results = [];

    for (i = 0, len = data.length; i < len; i++) {
      param = data[i];
      info = undefined;

      if ($__default["default"].isArray(param)) {
        info = param[1];
        param = param[0];
      }

      results.push(new converters[type](param, s, info).promise());
    }

    return results;
  };

  var isFile = function isFile(obj) {
    return obj && obj.done && obj.fail && obj.cancel;
  }; // Converts user-given value to File object.


  var valueToFile = function valueToFile(value, settings) {
    if (value && !isFile(value)) {
      value = fileFrom('uploaded', value, settings);
    }

    return value || null;
  };

  var isFileGroup = function isFileGroup(obj) {
    return obj && obj.files && obj.promise;
  }; // Converts user-given value to FileGroup object.


  var valueToGroup = function valueToGroup(value, settings) {
    var files, item;

    if (value) {
      if ($__default["default"].isArray(value)) {
        files = function () {
          var j, len, results;
          results = [];

          for (j = 0, len = value.length; j < len; j++) {
            item = value[j];
            results.push(valueToFile(item, settings));
          }

          return results;
        }();

        value = FileGroup(files, settings);
      } else {
        if (!isFileGroup(value)) {
          return loadFileGroup(value, settings);
        }
      }
    }

    return wrapToPromise(value || null);
  }; // check if two groups contains same files in same order


  var isFileGroupsEqual = function isFileGroupsEqual(group1, group2) {
    var file, files1, files2, i, j, len;

    if (group1 === group2) {
      return true;
    }

    if (!(isFileGroup(group1) && isFileGroup(group2))) {
      return false;
    }

    files1 = group1.files();
    files2 = group2.files();

    if (files1.length !== files2.length) {
      return false;
    }

    for (i = j = 0, len = files1.length; j < len; i = ++j) {
      file = files1[i];

      if (file !== files2[i]) {
        return false;
      }
    }

    return true;
  };

  var indexOf = [].indexOf; // utils

  var Collection = /*#__PURE__*/function () {
    function Collection() {
      var items = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var after = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      _classCallCheck(this, Collection);

      this.onAdd = $__default["default"].Callbacks();
      this.onRemove = $__default["default"].Callbacks();
      this.onSort = $__default["default"].Callbacks();
      this.onReplace = $__default["default"].Callbacks();
      this.__items = [];

      if (!after) {
        this.init(items);
      }
    }

    _createClass(Collection, [{
      key: "init",
      value: function init(items) {
        var item, j, len;

        for (j = 0, len = items.length; j < len; j++) {
          item = items[j];
          this.add(item);
        }
      }
    }, {
      key: "add",
      value: function add(item) {
        return this.__add(item, this.__items.length);
      }
    }, {
      key: "__add",
      value: function __add(item, i) {
        this.__items.splice(i, 0, item);

        return this.onAdd.fire(item, i);
      }
    }, {
      key: "remove",
      value: function remove(item) {
        var i;
        i = $__default["default"].inArray(item, this.__items);

        if (i !== -1) {
          return this.__remove(item, i);
        }
      }
    }, {
      key: "__remove",
      value: function __remove(item, i) {
        this.__items.splice(i, 1);

        return this.onRemove.fire(item, i);
      }
    }, {
      key: "clear",
      value: function clear() {
        var i, item, items, j, len, results;
        items = this.get();
        this.__items.length = 0;
        results = [];

        for (i = j = 0, len = items.length; j < len; i = ++j) {
          item = items[i];
          results.push(this.onRemove.fire(item, i));
        }

        return results;
      }
    }, {
      key: "replace",
      value: function replace(oldItem, newItem) {
        var i;

        if (oldItem !== newItem) {
          i = $__default["default"].inArray(oldItem, this.__items);

          if (i !== -1) {
            return this.__replace(oldItem, newItem, i);
          }
        }
      }
    }, {
      key: "__replace",
      value: function __replace(oldItem, newItem, i) {
        this.__items[i] = newItem;
        return this.onReplace.fire(oldItem, newItem, i);
      }
    }, {
      key: "sort",
      value: function sort(comparator) {
        this.__items.sort(comparator);

        return this.onSort.fire();
      }
    }, {
      key: "get",
      value: function get(index) {
        if (index != null) {
          return this.__items[index];
        } else {
          return this.__items.slice(0);
        }
      }
    }, {
      key: "length",
      value: function length() {
        return this.__items.length;
      }
    }]);

    return Collection;
  }();

  var UniqCollection = /*#__PURE__*/function (_Collection) {
    _inherits(UniqCollection, _Collection);

    var _super = _createSuper(UniqCollection);

    function UniqCollection() {
      _classCallCheck(this, UniqCollection);

      return _super.apply(this, arguments);
    }

    _createClass(UniqCollection, [{
      key: "add",
      value: function add(item) {
        if (indexOf.call(this.__items, item) >= 0) {
          return;
        }

        return _get(_getPrototypeOf(UniqCollection.prototype), "add", this).apply(this, arguments);
      }
    }, {
      key: "__replace",
      value: function __replace(oldItem, newItem, i) {
        if (indexOf.call(this.__items, newItem) >= 0) {
          return this.remove(oldItem);
        } else {
          return _get(_getPrototypeOf(UniqCollection.prototype), "__replace", this).apply(this, arguments);
        }
      }
    }]);

    return UniqCollection;
  }(Collection);

  var CollectionOfPromises = /*#__PURE__*/function (_UniqCollection) {
    _inherits(CollectionOfPromises, _UniqCollection);

    var _super2 = _createSuper(CollectionOfPromises);

    function CollectionOfPromises() {
      var _thisSuper, _this;

      _classCallCheck(this, CollectionOfPromises);

      _this = _super2.call.apply(_super2, [this].concat(Array.prototype.slice.call(arguments), [true]));
      _this.anyDoneList = $__default["default"].Callbacks();
      _this.anyFailList = $__default["default"].Callbacks();
      _this.anyProgressList = $__default["default"].Callbacks();
      _this._thenArgs = null;

      _this.anyProgressList.add(function (item, firstArgument) {
        return $__default["default"](item).data('lastProgress', firstArgument);
      });

      _get((_thisSuper = _assertThisInitialized(_this), _getPrototypeOf(CollectionOfPromises.prototype)), "init", _thisSuper).call(_thisSuper, arguments[0]);

      return _this;
    }

    _createClass(CollectionOfPromises, [{
      key: "onAnyDone",
      value: function onAnyDone(cb) {
        var file, j, len, ref1, results;
        this.anyDoneList.add(cb);
        ref1 = this.__items;
        results = [];

        for (j = 0, len = ref1.length; j < len; j++) {
          file = ref1[j];

          if (file.state() === 'resolved') {
            results.push(file.done(function () {
              for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                args[_key] = arguments[_key];
              }

              return cb.apply(void 0, [file].concat(args));
            }));
          } else {
            results.push(undefined);
          }
        }

        return results;
      }
    }, {
      key: "onAnyFail",
      value: function onAnyFail(cb) {
        var file, j, len, ref1, results;
        this.anyFailList.add(cb);
        ref1 = this.__items;
        results = [];

        for (j = 0, len = ref1.length; j < len; j++) {
          file = ref1[j];

          if (file.state() === 'rejected') {
            results.push(file.fail(function () {
              for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
                args[_key2] = arguments[_key2];
              }

              return cb.apply(void 0, [file].concat(args));
            }));
          } else {
            results.push(undefined);
          }
        }

        return results;
      }
    }, {
      key: "onAnyProgress",
      value: function onAnyProgress(cb) {
        var file, j, len, ref1, results;
        this.anyProgressList.add(cb);
        ref1 = this.__items;
        results = [];

        for (j = 0, len = ref1.length; j < len; j++) {
          file = ref1[j];
          results.push(cb(file, $__default["default"](file).data('lastProgress')));
        }

        return results;
      }
    }, {
      key: "lastProgresses",
      value: function lastProgresses() {
        var item, j, len, ref1, results;
        ref1 = this.__items;
        results = [];

        for (j = 0, len = ref1.length; j < len; j++) {
          item = ref1[j];
          results.push($__default["default"](item).data('lastProgress'));
        }

        return results;
      }
    }, {
      key: "add",
      value: function add(item) {
        if (!(item && item.then)) {
          return;
        }

        if (this._thenArgs) {
          var _item;

          item = (_item = item).then.apply(_item, _toConsumableArray(this._thenArgs));
        }

        _get(_getPrototypeOf(CollectionOfPromises.prototype), "add", this).call(this, item);

        return this.__watchItem(item);
      }
    }, {
      key: "__replace",
      value: function __replace(oldItem, newItem, i) {
        if (!(newItem && newItem.then)) {
          return this.remove(oldItem);
        } else {
          _get(_getPrototypeOf(CollectionOfPromises.prototype), "__replace", this).apply(this, arguments);

          return this.__watchItem(newItem);
        }
      }
    }, {
      key: "__watchItem",
      value: function __watchItem(item) {
        var _this2 = this;

        var handler = function handler(callbacks) {
          return function () {
            if (indexOf.call(_this2.__items, item) >= 0) {
              for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
                args[_key3] = arguments[_key3];
              }

              return callbacks.fire.apply(callbacks, [item].concat(args));
            }
          };
        };

        return item.then(handler(this.anyDoneList), handler(this.anyFailList), handler(this.anyProgressList));
      }
    }, {
      key: "autoThen",
      value: function autoThen() {
        var i, item, j, len, ref1, results;

        if (this._thenArgs) {
          throw new Error('CollectionOfPromises.then() could be used only once');
        }

        for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
          args[_key4] = arguments[_key4];
        }

        this._thenArgs = args;
        ref1 = this.__items;
        results = [];

        for (i = j = 0, len = ref1.length; j < len; i = ++j) {
          var _item2;

          item = ref1[i];
          results.push(this.__replace(item, (_item2 = item).then.apply(_item2, _toConsumableArray(this._thenArgs)), i));
        }

        return results;
      }
    }]);

    return CollectionOfPromises;
  }(UniqCollection);

  // #
  // # Please, do not use this locale as a reference for new translations.
  // # It could be outdated or incomplete. Always use the latest English versions:
  // # https://github.com/uploadcare/uploadcare-widget/blob/master/app/assets/javascripts/uploadcare/locale/en.js
  // #
  // # Any fixes are welcome.
  // #
  var translations$u = {
    uploading: 'جاري الرفع... الرجاء الانتظار',
    loadingInfo: 'جار تحميل المعلومات ...',
    errors: {
      default: 'خطأ',
      baddata: 'قيمة غير صحيحة',
      size: 'ملف كبير جداً',
      upload: 'يتعذر الرفع',
      user: 'تم إلغاء الرفع',
      info: 'يتعذر تحميل المعلومات',
      image: 'يسمح بالصور فقط',
      createGroup: 'لا يمكن إنشاء مجموعة ملفات',
      deleted: 'تم حذف الملف'
    },
    draghere: 'أسقط ملف هنا',
    file: {
      one: '%1 ملف',
      other: '%1 ملفات'
    },
    buttons: {
      cancel: 'إلغاء',
      remove: 'إزالة',
      choose: {
        files: {
          one: 'اختر ملف',
          other: 'اختر ملفات'
        },
        images: {
          one: 'اختر صورة',
          other: 'اختر صور'
        }
      }
    },
    dialog: {
      close: 'أغلق',
      openMenu: 'افتح القائمة',
      done: 'موافق',
      showFiles: 'اظهار الملفات',
      tabs: {
        names: {
          'empty-pubkey': 'مرحبا!',
          preview: 'معاينة',
          file: 'ملفات محلية',
          url: 'رابط مباشر',
          camera: 'كاميرا',
          facebook: 'فيس بوك',
          dropbox: 'دروب بوكس',
          gdrive: 'جوجل دريف',
          gphotos: 'صور غوغل',
          instagram: 'إينستجرام',
          vk: 'في كي',
          evernote: 'إيفرنوت',
          box: 'بوكس',
          onedrive: 'ون درايف',
          flickr: 'فليكر',
          huddle: 'هادل'
        },
        file: {
          drag: 'سحب وإفلات<br>أي ملف',
          nodrop: 'رفع ملفات من&nbsp;الحاسوب',
          cloudsTip: 'مخازن على السحابة<br>والشبكات الاجتماعية',
          or: 'أو',
          button: 'اختر ملف محلي',
          also: 'أو اختر من'
        },
        url: {
          title: 'ملفات من شبكة الإنترنت',
          line1: 'التقاط أي ملف من على شبكة الإنترنت',
          line2: 'فقط قم بتوفير الرابط',
          input: 'الصق الرابط هنا...',
          button: 'رفع'
        },
        camera: {
          title: 'ملف من كاميرا الويب',
          capture: 'التقاط صورة',
          mirror: 'عكس الصورة',
          startRecord: 'سجل فيديو',
          stopRecord: 'توقف',
          cancelRecord: 'إلغاء',
          retry: 'طلب الإذن مرة أخرى',
          pleaseAllow: {
            title: 'يرجى السماح بالوصول إلى الكاميرا',
            text: 'تمت مطالبتك بالسماح بالدخول إلى الكاميرا من هذا الموقع<br>' + 'من أجل التقاط الصور من الكاميرا يجب عليك الموافقة على هذا الطلب'
          },
          notFound: {
            title: 'لم يتم اكتشاف أي كاميرا',
            text: 'يبدو أنه ليس لديك كاميرا متصلة بهذا الجهاز'
          }
        },
        preview: {
          unknownName: 'غير معروف',
          change: 'إلغاء',
          back: 'الرجوع',
          done: 'إضافة',
          unknown: {
            title: 'جار الرفع ... يرجى الانتظار للحصول على معاينة',
            done: 'تخطي المعاينة والقبول'
          },
          regular: {
            title: 'إضافة هذا الملف؟',
            line1: 'أنت على وشك إضافة الملف أعلاه',
            line2: 'يرجى التأكيد'
          },
          image: {
            title: 'إضافة هذة الصورة',
            change: 'إلغاء'
          },
          crop: {
            title: 'قص وإضافة هذه الصورة',
            done: 'موافق',
            free: 'حر'
          },
          video: {
            title: 'إضافة هذا الفيديو',
            change: 'إلغاء'
          },
          error: {
            default: {
              title: 'عفوا آسف',
              text: 'حدث خطأ أثناء الرفع',
              back: 'حاول مرة اخرى'
            },
            image: {
              title: 'يتم قبول ملفات الصور فقط',
              text: 'الرجاء إعادة المحاولة باستخدام ملف آخر',
              back: 'اختر صورة'
            },
            size: {
              title: 'الملف الذي حددتة يتجاوز الحد المسموح بة',
              text: 'الرجاء إعادة المحاولة باستخدام ملف آخر'
            },
            loadImage: {
              title: 'خطأ',
              text: 'لا يمكن تحميل الصورة'
            }
          },
          multiple: {
            title: 'لقد اخترت %files%',
            question: 'إضافة %files%?',
            tooManyFiles: 'لقد اخترت عددا كبيرا جدا من الملفات %max% هو الحد الأقصى',
            tooFewFiles: 'لقد اخترت %files%. على الأقل %min% مطلوب',
            clear: 'حذف الكل',
            done: 'إضافة',
            file: {
              preview: 'معاينة %file%',
              remove: 'حذف %file%'
            }
          }
        }
      },
      footer: {
        text: 'مدعوم بواسطة',
        link: 'ابلود كير'
      }
    }
  }; // Pluralization rules taken from:
  // https://unicode.org/cldr/charts/34/supplemental/language_plural_rules.html

  var pluralize$u = function pluralize(n) {
    var mod;

    if (n === 0) {
      return 'zero';
    }

    if (n === 1) {
      return 'one';
    }

    if (n === 2) {
      return 'two';
    }

    mod = n % 100;

    if (mod >= 3 && mod <= 10) {
      return 'few';
    }

    if (mod >= 11 && mod <= 99) {
      return 'many';
    }

    return 'other';
  };

  var ar = {
    translations: translations$u,
    pluralize: pluralize$u
  };

  // #
  // # Please, do not use this locale as a reference for new translations.
  // # It could be outdated or incomplete. Always use the latest English versions:
  // # https://github.com/uploadcare/uploadcare-widget/blob/master/app/assets/javascripts/uploadcare/locale/en.js
  // #
  // # Any fixes are welcome.
  // #
  var translations$t = {
    uploading: 'Yüklənilir... Lütfən, gözləyin.',
    loadingInfo: 'İnfo yüklənilir...',
    errors: {
      default: 'Xəta',
      baddata: 'Yanlış dəyər',
      size: 'Fayl çox böyükdür',
      upload: 'Yüklənilə bilmədi',
      user: 'Yükləmə ləğv edildi',
      info: 'İnfo yüklənə bilmədi',
      image: 'Yalnız təsvirlərə icazə verilir',
      createGroup: 'Fayl qrupu yaradıla bilmir',
      deleted: 'Fayl silindi'
    },
    draghere: 'Faylı bura atın',
    file: {
      one: '%1 fayl',
      other: '%1 fayl'
    },
    buttons: {
      cancel: 'Ləğv edin',
      remove: 'Silin',
      choose: {
        files: {
          one: 'Fayl seçin',
          other: 'Fayllar seçin'
        },
        images: {
          one: 'Təsvir seçin',
          other: 'Təsvirlər seçin'
        }
      }
    },
    dialog: {
      done: 'Hazırdır',
      showFiles: 'Faylları göstərin',
      tabs: {
        names: {
          'empty-pubkey': 'Xoş gəlmisiniz',
          preview: 'Önbaxış',
          file: 'Lokal Fayllar',
          url: 'İxtiyari linklər',
          camera: 'Kamera',
          gdrive: 'Google Disk'
        },
        file: {
          drag: 'Faylı bura atın',
          nodrop: 'Kompüterinizdən faylları yükləyin',
          cloudsTip: 'Bulud yaddaşlar <br>və sosial xidmətlər',
          or: 'or',
          button: 'Lokal fayl seçin',
          also: 'Həmçinin, buradan seçə bilərsiniz'
        },
        url: {
          title: 'Vebdən fayllar',
          line1: 'Vebdən istənilən faylı götürün.',
          line2: 'Sadəcə, link verin.',
          input: 'Linkinizi bura yerləşdirin...',
          button: 'Yükləyin'
        },
        camera: {
          capture: 'Şəkil çəkin',
          mirror: 'Güzgü',
          retry: 'Yenidən icazə sorğusu göndərin.',
          pleaseAllow: {
            title: 'Lütfən, kameranıza giriş hüququ verin',
            text: 'Bu saytdan kameranıza daxil olmaq icazəsi verildi. ' + 'Kameranız ilə şəkil çəkmək üçün bu sorğunu təsdiq etməlisiniz.'
          },
          notFound: {
            title: 'Kamera aşkar edilmədi',
            text: 'Görünür, bu cihaza kamera qoşulmayıb.'
          }
        },
        preview: {
          unknownName: 'naməlum',
          change: 'Ləğv edin',
          back: 'Geri',
          done: 'Əlavə edin',
          unknown: {
            title: 'Yüklənilir... Lütfən, önbaxış üçün gözləyin.',
            done: 'Önbaxışı ötürün və qəbul edin'
          },
          regular: {
            title: 'Bu fayl əlavə edilsin?',
            line1: 'Yuxarıdakı faylı əlavə etmək üzrəsiniz.',
            line2: 'Lütfən, təsdiq edin.'
          },
          image: {
            title: 'Bu təsvir əlavə edilsin?',
            change: 'Ləğv edin'
          },
          crop: {
            title: 'Bu təsviri kəsin və əlavə edin',
            done: 'Hazırdır',
            free: 'pulsuz'
          },
          error: {
            default: {
              title: 'Ups!',
              text: 'Yükləmə zamanı nəsə xəta baş verdi.',
              back: 'Lütfən, y enidən cəhd edin.'
            },
            image: {
              title: 'Yaınız təsvir faylları qəbul olunur.',
              text: 'Lütfən, başqa fayl ilə cəhd edin.',
              back: 'Təsvir seçin'
            },
            size: {
              title: 'Seçdiyiniz fayl limiti keçir.',
              text: 'Lütfən, başqa fayl ilə cəhd edin.'
            },
            loadImage: {
              title: 'Xəta',
              text: 'Təsvir yüklənilə bilmir'
            }
          },
          multiple: {
            title: '%files% fayl seçdiniz.',
            question: 'Bütün bu faylları əlavə etmək istəyirsiniz?',
            tooManyFiles: 'Həddindən çox fayl seçdiniz. %max% maksimumdur.',
            tooFewFiles: '%files% fayl seçdiniz. Ən azı %min% tələb olunur.',
            clear: 'Hamısını silin',
            done: 'Hazırdır'
          }
        }
      }
    }
  };

  var pluralize$t = function pluralize(n) {
    return 'other';
  };

  var az = {
    translations: translations$t,
    pluralize: pluralize$t
  };

  // #
  // # Please, do not use this locale as a reference for new translations.
  // # It could be outdated or incomplete. Always use the latest English versions:
  // # https://github.com/uploadcare/uploadcare-widget/blob/master/app/assets/javascripts/uploadcare/locale/en.js
  // #
  // # Any fixes are welcome.
  // #
  var translations$s = {
    uploading: 'Carregant... Si us plau esperi.',
    loadingInfo: 'Carregant informació...',
    errors: {
      default: 'Error',
      baddata: 'Valor incorrecte',
      size: 'Massa gran',
      upload: "No s'ha pogut carregar",
      user: 'Carrega cancel·lada',
      info: "No s'ha pogut carregar la informació",
      image: 'Només es permeten imatges',
      createGroup: "No es pot crear el grup d'arxius",
      deleted: 'Fitxer eliminat'
    },
    draghere: 'Arrossega els fitxers fins aquí',
    file: {
      one: '%1 fitxer',
      other: '%1 fitxers'
    },
    buttons: {
      cancel: 'Cancel·lar',
      remove: 'Eliminar',
      choose: {
        files: {
          one: 'Escull un fitxer',
          other: 'Escull fitxers'
        },
        images: {
          one: 'Escull una imatge',
          other: 'Escull imatges'
        }
      }
    },
    dialog: {
      done: 'Fet',
      showFiles: 'Mostra fitxers',
      tabs: {
        names: {
          'empty-pubkey': 'Benvingut',
          preview: 'Avanci',
          file: 'Ordinador',
          url: 'Enllaços arbitraris',
          camera: 'Càmera'
        },
        file: {
          drag: 'Arrossega un fitxer aquí',
          nodrop: 'Carrega fitxers des del teu ordinador',
          cloudsTip: 'Emmagatzematge al núvol<br>i xarxes socials',
          or: 'o',
          button: 'Escull un fitxer des del teu ordinador',
          also: 'També pots seleccionar-lo de'
        },
        url: {
          title: 'Fitxers de la web',
          line1: 'Selecciona qualsevol fitxer de la web.',
          line2: 'Només proporcioni el link.',
          input: 'Copiï el link aquí...',
          button: 'Pujar'
        },
        camera: {
          capture: 'Realitza una foto',
          mirror: 'Mirall',
          retry: 'Demanar permisos una altra vegada',
          pleaseAllow: {
            title: 'Si us plau, permet accés a la teva càmera',
            text: "Aquest lloc t'ha demanat de permetre accés a la càmera. " + "Per tal de realitzar imatges amb la teva càmera has d'acceptar aquesta petició."
          },
          notFound: {
            title: "No s'ha detectat cap càmera",
            text: 'Sembla que no tens cap càmera connectada a aquest dispositiu.'
          }
        },
        preview: {
          unknownName: 'desconegut',
          change: 'Cancel·lar',
          back: 'Endarrere',
          done: 'Pujar',
          unknown: {
            title: 'Carregant. Si us plau esperi per la visualització prèvia.',
            done: 'Saltar visualització prèvia i acceptar'
          },
          regular: {
            title: 'Vols pujar aquest fitxer?',
            line1: 'Estàs a punt de pujar el fitxer superior.',
            line2: 'Confirmi, si us plau.'
          },
          image: {
            title: 'Vols pujar aquesta imatge?',
            change: 'Cancel·lar'
          },
          crop: {
            title: 'Tallar i pujar aquesta imatge',
            done: 'Fet',
            free: 'lliure'
          },
          error: {
            default: {
              title: 'La pujada ha fallat!',
              text: "S'ha produït un error durant la pujada.",
              back: 'Si us plau, provi-ho de nou.'
            },
            image: {
              title: "Només s'accepten fitxers d'imatges.",
              text: 'Si us plau, provi-ho de nou amb un altre fitxer.',
              back: 'Escull imatge'
            },
            size: {
              title: 'La mida del fitxer que has seleccionat sobrepassa el límit.',
              text: 'Si us plau, provi-ho de nou amb un altre fitxer.'
            },
            loadImage: {
              title: 'Error',
              text: "No s'ha pogut carregar la imatge"
            }
          },
          multiple: {
            title: "N'has escollit %files%",
            question: 'Vols afegir tots aquests fitxers?',
            tooManyFiles: 'Has escollit massa fitxers. %max% és el màxim.',
            tooFewFiles: 'Has escollit %files%. Com a mínim en calen %min%.',
            clear: 'Eliminar-los tots',
            done: 'Fet'
          }
        }
      }
    }
  }; // Pluralization rules taken from:
  // https://unicode.org/cldr/charts/34/supplemental/language_plural_rules.html

  var pluralize$s = function pluralize(n) {
    if (n === 1) {
      return 'one';
    }

    return 'other';
  };

  var ca = {
    translations: translations$s,
    pluralize: pluralize$s
  };

  // #
  // # Please, do not use this locale as a reference for new translations.
  // # It could be outdated or incomplete. Always use the latest English versions:
  // # https://github.com/uploadcare/uploadcare-widget/blob/master/app/assets/javascripts/uploadcare/locale/en.js
  // #
  // # Any fixes are welcome.
  // #
  var translations$r = {
    uploading: 'Nahrávám... Malý moment.',
    loadingInfo: 'Nahrávám informace...',
    errors: {
      default: 'Chyba',
      baddata: 'Neplatná hodnota',
      size: 'Soubor je příliš velký',
      upload: 'Nelze nahrát',
      user: 'Nahrávání zrušeno',
      info: 'Nelze nahrát informace',
      image: 'Lze nahrát pouze obrázky',
      createGroup: 'Nelze vytvořit adresář',
      deleted: 'Soubor byl smazán'
    },
    draghere: 'Přetáhněte soubor sem',
    file: {
      one: '%1 soubor',
      few: '%1 soubory',
      many: '%1 souborů'
    },
    buttons: {
      cancel: 'Zrušit',
      remove: 'Odstranit',
      choose: {
        files: {
          one: 'Vyberte soubor',
          other: 'Vyberte soubory'
        },
        images: {
          one: 'Vyberte obrázek',
          other: 'Vyberte obrázky'
        }
      }
    },
    dialog: {
      done: 'Hotovo',
      showFiles: 'Zobrazit soubory',
      tabs: {
        names: {
          'empty-pubkey': 'Vítejte',
          preview: 'Náhled',
          file: 'Soubor z počítače',
          url: 'Soubor z internetu',
          camera: 'Webkamera',
          facebook: 'Facebook',
          dropbox: 'Dropbox',
          gdrive: 'Google Drive',
          instagram: 'Instagram',
          vk: 'VK',
          evernote: 'Evernote',
          box: 'Box',
          onedrive: 'OneDrive',
          flickr: 'Flickr',
          huddle: 'Huddle'
        },
        file: {
          drag: 'Přetáhněte soubor sem',
          nodrop: 'Nahrajte soubory z vašeho počítače',
          cloudsTip: 'Cloudové úložiště<br>a sociální sítě',
          or: 'nebo',
          button: 'Vyberte soubor z počítače',
          also: 'Můžete také nahrát soubor z'
        },
        url: {
          title: 'Soubory z internetu',
          line1: 'Nahrajte jakýkoliv soubor z internetu.',
          line2: 'Stačí vložit odkaz.',
          input: 'Odkaz vložte zde...',
          button: 'Nahrát'
        },
        camera: {
          capture: 'Pořídit fotografii',
          mirror: 'Zrcadlo',
          retry: 'Znovu požádat o povolení',
          pleaseAllow: {
            title: 'Prosím povolte přístup k webkameře',
            text: 'Byl(a) jste požádán(a) o přístup k webkameře. ' + 'Abyste mohl(a) pořídit fotografii, musíte přístup povolit.'
          },
          notFound: {
            title: 'Nebyla nalezena webkamera',
            text: 'Zdá se, že k tomuto zařízení není připojena žádná webkamera.'
          }
        },
        preview: {
          unknownName: 'neznámý',
          change: 'Zrušit',
          back: 'Zpět',
          done: 'Přidat',
          unknown: {
            title: 'Nahrávám... Prosím vyčkejte na náhled.',
            done: 'Přeskočit náhled a odeslat'
          },
          regular: {
            title: 'Přidat tento soubor?',
            line1: 'Tímto přidáte výše vybraný soubor.',
            line2: 'Prosím potvrďte.'
          },
          image: {
            title: 'Přidat tento obrázek?',
            change: 'Zrušit'
          },
          crop: {
            title: 'Oříznout a přidat tento obrázek',
            done: 'Hotovo',
            free: 'zdarma'
          },
          error: {
            default: {
              title: 'Jejda!',
              text: 'Něco se v průběhu nahrávání nepodařilo.',
              back: 'Zkuste to prosím znovu.'
            },
            image: {
              title: 'Lze nahrávat pouze obrázky.',
              text: 'Zkuste to prosím s jiným souborem.',
              back: 'Vyberte obrázek'
            },
            size: {
              title: 'Soubor přesahuje povolenou velikost.',
              text: 'Prosím zkuste to s jiným souborem.'
            },
            loadImage: {
              title: 'Chyba',
              text: 'Nelze nahrát obrázek'
            }
          },
          multiple: {
            title: 'Bylo vybráno %files% souborů',
            question: 'Chcete přidat všechny tyto soubory?',
            tooManyFiles: 'Bylo vybráno moc souborů. Maximum je %max%',
            tooFewFiles: 'Bylo vybráno %files% souborů. Musíte vybrat minimálně %min%',
            clear: 'Odstranit vše',
            done: 'Hotovo'
          }
        }
      }
    }
  }; // Pluralization rules taken from:
  // https://unicode.org/cldr/charts/34/supplemental/language_plural_rules.html

  var pluralize$r = function pluralize(n) {
    if (n === 1) {
      return 'one';
    } else if (n >= 2 && n <= 4) {
      return 'few';
    } else {
      return 'many';
    }
  };

  var cs = {
    translations: translations$r,
    pluralize: pluralize$r
  };

  // #
  // # Please, do not use this locale as a reference for new translations.
  // # It could be outdated or incomplete. Always use the latest English versions:
  // # https://github.com/uploadcare/uploadcare-widget/blob/master/app/assets/javascripts/uploadcare/locale/en.js
  // #
  // # Any fixes are welcome.
  // #
  var translations$q = {
    uploading: 'Uploader... Vent venligst.',
    loadingInfo: 'Henter information...',
    errors: {
      default: 'Fejl',
      baddata: 'Forkert værdi',
      size: 'Filen er for stor',
      upload: 'Kan ikke uploade / sende fil',
      user: 'Upload fortrudt',
      info: 'Kan ikke hente information',
      image: 'Kun billeder er tilladt',
      createGroup: 'Kan ikke oprette fil gruppe',
      deleted: 'Filen blev slettet'
    },
    draghere: 'Drop en fil her',
    file: {
      one: '%1 fil',
      other: '%1 filer'
    },
    buttons: {
      cancel: 'Annuller',
      remove: 'Fjern',
      choose: {
        files: {
          one: 'Vælg en fil',
          other: 'Vælg filer'
        },
        images: {
          one: 'Vælg et billede',
          other: 'Vælg billeder'
        }
      }
    },
    dialog: {
      done: 'Færdig',
      showFiles: 'Vis filer',
      tabs: {
        names: {
          preview: 'Vis',
          file: 'Computer',
          gdrive: 'Google Drev',
          url: 'Direkte link'
        },
        file: {
          drag: 'Drop en fil her',
          nodrop: 'Hent filer fra din computer',
          or: 'eller',
          button: 'Hent fil fra din computer',
          also: 'Du kan også hente fra'
        },
        url: {
          title: 'Filer fra en Web adresse',
          line1: 'Vælg en fil fra en web adresse.',
          line2: 'Skriv bare linket til filen.',
          input: 'Indsæt link her...',
          button: 'Upload / Send'
        },
        preview: {
          unknownName: 'ukendt',
          change: 'Annuller',
          back: 'Tilbage',
          done: 'Fortsæt',
          unknown: {
            title: 'Uploader / sender... Vent for at se mere.',
            done: 'Fortsæt uden at vente på resultat'
          },
          regular: {
            title: 'Tilføje fil?',
            line1: 'Du er ved at tilføje filen ovenfor.',
            line2: 'Venligst accepter.'
          },
          image: {
            title: 'Tilføj billede?',
            change: 'Annuller'
          },
          crop: {
            title: 'Beskær og tilføj dette billede',
            done: 'Udfør'
          },
          error: {
            default: {
              title: 'Hov!',
              text: 'Noget gik galt under upload.',
              back: 'Venligst prøv igen'
            },
            image: {
              title: 'Du kan kun vælge billeder.',
              text: 'Prøv igen med en billedfil.',
              back: 'Vælg billede'
            },
            size: {
              title: 'Den fil du valgte, er desværre større end tilladt.',
              text: 'Venligst prøv med en mindre fil.'
            },
            loadImage: {
              title: 'Fejl',
              text: 'Kan ikke åbne billede'
            }
          },
          multiple: {
            title: 'Du har valgt %files% filer',
            question: 'Vil du tilføje alle disse filer?',
            tooManyFiles: 'Du har valgt for mange filer. %max% er maximum.',
            tooFewFiles: 'Du har valgt %files% filer. Men du skal vælge mindst %min%.',
            clear: 'Fjern alle',
            done: 'Fortsæt'
          }
        }
      }
    }
  }; // Pluralization rules taken from:
  // https://unicode.org/cldr/charts/34/supplemental/language_plural_rules.html

  var pluralize$q = function pluralize(n) {
    if (n === 1) {
      return 'one';
    }

    return 'other';
  };

  var da = {
    translations: translations$q,
    pluralize: pluralize$q
  };

  // #
  // # Please, do not use this locale as a reference for new translations.
  // # It could be outdated or incomplete. Always use the latest English versions:
  // # https://github.com/uploadcare/uploadcare-widget/blob/master/app/assets/javascripts/uploadcare/locale/en.js
  // #
  // # Any fixes are welcome.
  // #
  var translations$p = {
    uploading: 'Upload läuft… Bitte warten…',
    loadingInfo: 'Informationen werden geladen…',
    errors: {
      default: 'Fehler',
      baddata: 'Falscher Wert',
      size: 'Datei zu groß',
      upload: 'Kann nicht hochgeladen werden',
      user: 'Hochladen abgebrochen',
      info: 'Informationen können nicht geladen werden',
      image: 'Nur Bilder sind erlaubt',
      createGroup: 'Datei-Gruppe kann nicht erstellt werden',
      deleted: 'Datei wurde gelöscht'
    },
    draghere: 'Ziehen Sie eine Datei hierhin',
    file: {
      one: '%1 Datei',
      other: '%1 Dateien'
    },
    buttons: {
      cancel: 'Abbrechen',
      remove: 'Löschen',
      choose: {
        files: {
          one: 'Datei auswählen',
          other: 'Dateien auswählen'
        },
        images: {
          one: 'Bild auswählen',
          other: 'Bilder auswählen'
        }
      }
    },
    dialog: {
      close: 'Schließen',
      openMenu: 'Menü öffnen',
      done: 'Fertig',
      showFiles: 'Dateien anzeigen',
      tabs: {
        names: {
          'empty-pubkey': 'Willkommen',
          preview: 'Vorschau',
          file: 'Lokale Dateien',
          url: 'Web-Links',
          camera: 'Kamera'
        },
        file: {
          drag: 'Ziehen Sie eine Datei hierhin',
          nodrop: 'Laden Sie Dateien von Ihrem PC hoch',
          cloudsTip: 'Cloud-Speicher<br>und soziale Dienste',
          or: 'oder',
          button: 'Wählen Sie eine Datei',
          also: 'Sie können sie auch Dateien wählen aus'
        },
        url: {
          title: 'Eine Datei aus dem Web hochladen',
          line1: 'Sie können eine Datei aus dem Internet hochladen.',
          line2: 'Geben Sie hier einfach den Link ein.',
          input: 'Bitte geben Sie hier den Link ein…',
          button: 'Hochladen'
        },
        camera: {
          title: 'Foto mit Webcam aufnehmen',
          capture: 'Machen Sie ein Foto',
          mirror: 'Andere Kamera',
          retry: 'Berechtigungen erneut anfordern',
          pleaseAllow: {
            title: 'Bitte erlauben Sie den Zugriff auf Ihre Kamera',
            text: 'Sie wurden gebeten, dieser Website den Zugriff auf Ihre Kamera zu erlauben. Um mit Ihrer Kamera Fotos machen zu können, müssen Sie diese Erlaubnis erteilen.'
          },
          notFound: {
            title: 'Keine Kamera gefunden',
            text: 'Es sieht so aus, als hätten Sie keine Kamera an dieses Gerät angeschlossen.'
          }
        },
        preview: {
          unknownName: 'nicht bekannt',
          change: 'Abbrechen',
          back: 'Zurück',
          done: 'Hinzufügen',
          unknown: {
            title: 'Upload läuft… Bitte warten Sie auf die Vorschau.',
            done: 'Vorschau überspringen und Datei annehmen'
          },
          regular: {
            title: 'Diese Datei hinzufügen?',
            line1: 'Diese Datei wird nun hinzugefügt.',
            line2: 'Bitte bestätigen Sie.'
          },
          image: {
            title: 'Nur Bilder sind akzeptiert.',
            text: 'Bitte veruschen Sie es erneut mit einer anderen Datei.',
            back: 'Bild wählen'
          },
          error: {
            default: {
              title: 'Oops!',
              text: 'Etwas ist während dem Hochladen schief gelaufen.',
              back: 'Bitte versuchen Sie es erneut'
            },
            image: {
              title: 'Nur Bilder sind akzeptiert.',
              text: 'Bitte veruschen Sie es erneut mit einer anderen Datei.',
              back: 'Bild wählen'
            },
            size: {
              title: 'Die gewählte Datei ist zu groß.',
              text: 'Bitte versuchen Sie es erneut mit einer anderen Datei.'
            },
            loadImage: {
              title: 'Fehler',
              text: 'Das Bild kann nicht geladen werden'
            }
          },
          multiple: {
            title: 'Sie haben %files% Dateien gewählt',
            question: 'Möchten Sie all diese Dateien hinzufügen?',
            tooManyFiles: 'Sie haben zu viele Dateien gewählt. %max% ist das Maximum.',
            tooFewFiles: 'Sie haben %files% Dateien gewählt. Es sind mindestens %min% nötig.',
            clear: 'Alle löschen',
            done: 'Fertig',
            file: {
              preview: 'Vorschau: %file%',
              remove: 'Datei löschen: %file%'
            }
          }
        }
      }
    }
  }; // Pluralization rules taken from:
  // https://unicode.org/cldr/charts/34/supplemental/language_plural_rules.html

  var pluralize$p = function pluralize(n) {
    if (n === 1) {
      return 'one';
    }

    return 'other';
  };

  var de = {
    translations: translations$p,
    pluralize: pluralize$p
  };

  // #
  // # Please, do not use this locale as a reference for new translations.
  // # It could be outdated or incomplete. Always use the latest English versions:
  // # https://github.com/uploadcare/uploadcare-widget/blob/master/app/assets/javascripts/uploadcare/locale/en.js
  // #
  // # Any fixes are welcome.
  // #
  var translations$o = {
    loadingInfo: 'Φόρτωση πληροφοριών...',
    errors: {
      default: 'Σφάλμα',
      baddata: 'Λανθασμένη αξία',
      size: 'Πολύ μεγάλο αρχείο',
      upload: 'Δεν μπορεί να γίνει φόρτωση',
      user: 'Η φόρτωση ακυρώθηκε',
      info: 'Δεν μπορούν να φορτωθούν πληροφορίες',
      image: 'Μόνο εικόνες επιτρέπονται',
      createGroup: 'Δεν μπορεί να δημιουργηθεί ομάδα αρχείων',
      deleted: 'Το αρχείο διαγράφηκε'
    },
    uploading: 'Φόρτωση... Παρακαλούμε περιμένετε.',
    draghere: 'Αποθέστε ένα αρχείο εδώ',
    file: {
      one: '%1 αρχείο',
      other: '%1 αρχεία'
    },
    buttons: {
      cancel: 'Ακύρωση',
      remove: 'Κατάργηση',
      choose: {
        files: {
          one: 'Επιλέξτε ένα αρχείο',
          other: 'Επιλέξτε αρχεία'
        },
        images: {
          one: 'Επιλέξτε μία εικόνα',
          other: 'Επιλέξτε εικόνες'
        }
      }
    },
    dialog: {
      close: 'Κλείσιμο',
      openMenu: 'Άνοιγμα μενού',
      done: 'Εντάξει',
      showFiles: 'Προβολή αρχείων',
      tabs: {
        names: {
          'empty-pubkey': 'Καλώς ήρθατε',
          preview: 'Προεπισκόπηση',
          file: 'Τοπικά αρχεία',
          url: 'Απευθείας σύνδεσμος',
          camera: 'Κάμερα',
          facebook: 'Facebook',
          dropbox: 'Dropbox',
          gdrive: 'Google Drive',
          instagram: 'Instagram',
          gphotos: 'Google Photos',
          vk: 'VK',
          evernote: 'Evernote',
          box: 'Box',
          onedrive: 'OneDrive',
          flickr: 'Flickr',
          huddle: 'Huddle'
        },
        file: {
          drag: 'σύρετε & αποθέστε<br>οποιαδήποτε αρχεία',
          nodrop: 'Φορτώστε αρχεία από τον&nbsp;υπολογιστή σας',
          cloudsTip: 'Αποθήκευση νέφους<br>και κοινωνικά δίκτυα',
          or: 'ή',
          button: 'Επιλέξτε ένα τοπικό αρχείο',
          also: 'ή επιλέξτε από'
        },
        url: {
          title: 'Αρχεία από τον Ιστό',
          line1: 'Πάρτε οποιοδήποτε αρχείο από το διαδίκτυο.',
          line2: 'Γράψτε απλώς τον σύνδεσμο.',
          input: 'Επικολλήστε τον σύνδεσμό σας εδώ...',
          button: 'Φόρτωση'
        },
        camera: {
          title: 'Αρχείο από κάμερα web',
          capture: 'Τραβήξτε μια φωτογραφία',
          mirror: 'Καθρέφτης',
          startRecord: 'Εγγραφή βίντεο',
          cancelRecord: 'Ακύρωση',
          stopRecord: 'Διακοπή',
          retry: 'Νέο αίτημα για άδεια',
          pleaseAllow: {
            text: 'Έχετε δεχτεί υπόδειξη να επιτρέψετε την πρόσβαση στην κάμερα από αυτόν τον ιστότοπο.<br>Για να τραβήξετε φωτογραφίες με την κάμερά σας πρέπει να εγκρίνετε αυτό το αίτημα.',
            title: 'Παρακαλούμε επιτρέψτε την πρόσβαση στην κάμερά σας'
          },
          notFound: {
            title: 'Δεν εντοπίστηκε κάμερα',
            text: 'Φαίνεται ότι δεν έχετε κάμερα συνδεδεμένη με αυτή τη συσκευή.'
          }
        },
        preview: {
          unknownName: 'άγνωστο',
          change: 'Ακύρωση',
          back: 'Πίσω',
          done: 'Προσθήκη',
          unknown: {
            title: 'Φόρτωση... Παρακαλούμε περιμένετε για προεπισκόπηση.',
            done: 'Παράλειψη επισκόπησης και αποδοχή'
          },
          regular: {
            title: 'Να προστεθεί αυτό το αρχείο;',
            line1: 'Πρόκειται να προσθέσετε το παραπάνω αρχείο.',
            line2: 'Παρακαλούμε επιβεβαιώστε.'
          },
          image: {
            title: 'Να προστεθεί αυτή η εικόνα;',
            change: 'Ακύρωση'
          },
          crop: {
            title: 'Περικοπή και προσθήκη αυτής της εικόνας',
            done: 'Εντάξει',
            free: 'δωρεάν'
          },
          video: {
            title: 'Να προστεθεί αυτό το βίντεο;',
            change: 'Ακύρωση'
          },
          error: {
            default: {
              title: 'Ουπς!',
              back: 'Παρακαλούμε προσπαθήστε ξανά',
              text: 'Κάτι πήγε στραβά κατά τη φόρτωση.'
            },
            image: {
              title: 'Μόνο αρχεία εικόνων γίνονται δεκτά.',
              text: 'Δοκιμάστε ξανά με άλλο αρχείο.',
              back: 'Επιλέξτε εικόνα'
            },
            size: {
              title: 'Το αρχείο που επιλέξατε υπερβαίνει το όριο.',
              text: 'Δοκιμάστε ξανά με άλλο αρχείο.'
            },
            loadImage: {
              title: 'Σφάλμα',
              text: 'Δεν μπορεί να φορτωθεί η εικόνα'
            }
          },
          multiple: {
            title: 'Έχετε επιλέξει %files%',
            question: 'Προσθήκη %files%;',
            tooManyFiles: 'Έχετε επιλέξει πάρα πολλά αρχεία. Το μέγιστο είναι %max%.',
            tooFewFiles: 'Έχετε επιλέξει %files%. Απαιτούνται τουλάχιστον %min%.',
            clear: 'Κατάργηση όλων',
            file: {
              preview: 'Προεπισκόπηση %file%',
              remove: 'Αφαίρεση %file%'
            },
            done: 'Προσθήκη'
          }
        }
      },
      footer: {
        text: 'παρέχεται από',
        link: 'uploadcare'
      }
    }
  }; // Pluralization rules taken from:
  // https://unicode.org/cldr/charts/34/supplemental/language_plural_rules.html

  var pluralize$o = function pluralize(n) {
    if (n === 1) {
      return 'one';
    }

    return 'other';
  };

  var el = {
    translations: translations$o,
    pluralize: pluralize$o
  };

  // #
  // # English locale is the default and used as a fallback.
  // #
  var translations$n = {
    uploading: 'Uploading... Please wait.',
    loadingInfo: 'Loading info...',
    errors: {
      default: 'Error',
      baddata: 'Incorrect value',
      size: 'File too big',
      upload: 'Can’t upload',
      user: 'Upload canceled',
      info: 'Can’t load info',
      image: 'Only images allowed',
      createGroup: 'Can’t create file group',
      deleted: 'File was deleted'
    },
    draghere: 'Drop a file here',
    file: {
      one: '%1 file',
      other: '%1 files'
    },
    buttons: {
      cancel: 'Cancel',
      remove: 'Remove',
      choose: {
        files: {
          one: 'Choose a file',
          other: 'Choose files'
        },
        images: {
          one: 'Choose an image',
          other: 'Choose images'
        }
      }
    },
    dialog: {
      close: 'Close',
      openMenu: 'Open menu',
      done: 'Done',
      showFiles: 'Show files',
      tabs: {
        names: {
          'empty-pubkey': 'Welcome',
          preview: 'Preview',
          file: 'Local Files',
          url: 'Direct Link',
          camera: 'Camera',
          facebook: 'Facebook',
          dropbox: 'Dropbox',
          gdrive: 'Google Drive',
          gphotos: 'Google Photos',
          instagram: 'Instagram',
          vk: 'VK',
          evernote: 'Evernote',
          box: 'Box',
          onedrive: 'OneDrive',
          flickr: 'Flickr',
          huddle: 'Huddle',
          nft: 'NFT'
        },
        file: {
          drag: 'drag & drop<br>any files',
          nodrop: 'Upload files from your&nbsp;computer',
          cloudsTip: 'Cloud storages<br>and social networks',
          or: 'or',
          button: 'Choose a local file',
          also: 'or choose from'
        },
        url: {
          title: 'Files from the Web',
          line1: 'Grab any file off the web.',
          line2: 'Just provide the link.',
          input: 'Paste your link here...',
          button: 'Upload'
        },
        camera: {
          camera: 'Camera',
          title: 'File from web camera',
          capture: 'Take a photo',
          mirror: 'Mirror',
          startRecord: 'Record a video',
          stopRecord: 'Stop',
          cancelRecord: 'Cancel',
          retry: 'Request permissions again',
          pleaseAllow: {
            title: 'Please allow access to your camera',
            text: 'You have been prompted to allow camera access from this site.<br>' + 'In order to take pictures with your camera you must approve this request.'
          },
          notFound: {
            title: 'No camera detected',
            text: 'Looks like you have no camera connected to this device.'
          }
        },
        preview: {
          unknownName: 'unknown',
          change: 'Cancel',
          back: 'Back',
          done: 'Add',
          unknown: {
            title: 'Uploading... Please wait for a preview.',
            done: 'Skip preview and accept'
          },
          regular: {
            title: 'Add this file?',
            line1: 'You are about to add the file above.',
            line2: 'Please confirm.'
          },
          image: {
            title: 'Add this image?',
            change: 'Cancel'
          },
          crop: {
            title: 'Crop and add this image',
            done: 'Done',
            free: 'free'
          },
          video: {
            title: 'Add this video?',
            change: 'Cancel'
          },
          error: {
            default: {
              title: 'Oops!',
              text: 'Something went wrong during the upload.',
              back: 'Please try again'
            },
            image: {
              title: 'Only image files are accepted.',
              text: 'Please try again with another file.',
              back: 'Choose image'
            },
            size: {
              title: 'The file you selected exceeds the limit.',
              text: 'Please try again with another file.'
            },
            loadImage: {
              title: 'Error',
              text: 'Can’t load image'
            }
          },
          multiple: {
            title: 'You’ve chosen %files%.',
            question: 'Add %files%?',
            tooManyFiles: 'You’ve chosen too many files. %max% is maximum.',
            tooFewFiles: 'You’ve chosen %files%. At least %min% required.',
            clear: 'Remove all',
            done: 'Add',
            file: {
              preview: 'Preview %file%',
              remove: 'Remove %file%'
            }
          }
        }
      },
      footer: {
        text: 'powered by',
        link: 'uploadcare'
      }
    },
    serverErrors: {
      AccountBlockedError: "Administrator's account has been blocked. Please, contact support.",
      AccountUnpaidError: "Administrator's account has been blocked. Please, contact support.",
      AccountLimitsExceededError: "Administrator's account has reached its limits. Please, contact support.",
      FileSizeLimitExceededError: 'File is too large.',
      MultipartFileSizeLimitExceededError: 'File is too large.',
      FileTypeForbiddenOnCurrentPlanError: 'Uploading of these files types is not allowed.',
      DownloadFileSizeLimitExceededError: 'Downloaded file is too big.'
    }
  }; // Pluralization rules taken from:
  // https://unicode.org/cldr/charts/34/supplemental/language_plural_rules.html

  var pluralize$n = function pluralize(n) {
    if (n === 1) {
      return 'one';
    }

    return 'other';
  };

  var en = {
    pluralize: pluralize$n,
    translations: translations$n
  };

  // #
  // # Please, do not use this locale as a reference for new translations.
  // # It could be outdated or incomplete. Always use the latest English versions:
  // # https://github.com/uploadcare/uploadcare-widget/blob/master/app/assets/javascripts/uploadcare/locale/en.js
  // #
  // # Any fixes are welcome.
  // #
  var translations$m = {
    uploading: 'Subiendo... Por favor espere.',
    loadingInfo: 'Cargando información...',
    errors: {
      default: 'Error',
      baddata: 'Valor incorrecto',
      size: 'Archivo demasiado grande',
      upload: 'No se puede subir',
      user: 'Subida cancelada',
      info: 'No se puede cargar la información',
      image: 'Solo se permiten imágenes',
      createGroup: 'No se puede crear el grupo de archivos',
      deleted: 'El archivo fue eliminado'
    },
    draghere: 'Arrastra un archivo aquí',
    file: {
      one: '%1 archivo',
      other: '%1 archivos'
    },
    buttons: {
      cancel: 'Cancelar',
      remove: 'Eliminar',
      choose: {
        files: {
          one: 'Escoge un archivo',
          other: 'Escoge archivos'
        },
        images: {
          one: 'Escoge una imagen',
          other: 'Escoge imágenes'
        }
      }
    },
    dialog: {
      close: 'Cerrar',
      openMenu: 'Menú abierto',
      done: 'Hecho',
      showFiles: 'Mostrar archivos',
      tabs: {
        names: {
          'empty-pubkey': 'Bienvenido',
          preview: 'Previsualización',
          file: 'Archivos locales',
          url: 'Enlaces arbitrarios',
          camera: 'Cámara'
        },
        file: {
          drag: 'Arrastra un archivo aquí',
          nodrop: 'Sube fotos desde tu dispositivo',
          cloudsTip: 'Almacenamiento en la nube<br>y redes sociales',
          or: 'o',
          button: 'Elige un archivo de tu dispositivo',
          also: 'Tambien puedes seleccionarlo de'
        },
        url: {
          title: 'Archivos de la Web',
          line1: 'Coge cualquier archivo de la web.',
          line2: 'Solo danos el link.',
          input: 'Pega tu link aquí...',
          button: 'Subir'
        },
        camera: {
          title: 'Archivo desde la cámara web',
          capture: 'Hacer una foto',
          mirror: 'Espejo',
          startRecord: 'Grabar un video',
          stopRecord: 'Detener',
          cancelRecord: 'Cancelar',
          retry: 'Solicitar permisos de nuevo',
          pleaseAllow: {
            title: 'Por favor, permite el acceso a tu cámara',
            text: 'Este sitio ha pedido permiso para acceder a la cámara. ' + 'Para tomar imágenes con tu cámara debes aceptar esta petición.'
          },
          notFound: {
            title: 'No se ha detectado ninguna cámara',
            text: 'Parece que no tienes ninguna cámara conectada a este dispositivo.'
          }
        },
        preview: {
          unknownName: 'desconocido',
          change: 'Cancelar',
          back: 'Atrás',
          done: 'Añadir',
          unknown: {
            title: 'Subiendo. Por favor espera para una vista previa.',
            done: 'Saltar vista previa y aceptar'
          },
          regular: {
            title: '¿Quieres subir este archivo?',
            line1: 'Estás a punto de subir el archivo de arriba.',
            line2: 'Confírmalo por favor.'
          },
          image: {
            title: '¿Quieres subir esta imagen?',
            change: 'Cancelar'
          },
          crop: {
            title: 'Cortar y añadir esta imagen',
            done: 'Listo',
            free: 'libre'
          },
          video: {
            title: '¿Añadir este video?',
            change: 'Cancelar'
          },
          error: {
            default: {
              title: 'Ups!',
              text: 'Algo salió mal durante la subida.',
              back: 'Por favor, inténtalo de nuevo.'
            },
            image: {
              title: 'Solo se aceptan archivos de imagen.',
              text: 'Por favor, inténtalo de nuevo con otro archivo.',
              back: 'Escoger imagen'
            },
            size: {
              title: 'El archivo que has seleccinado excede el límite.',
              text: 'Por favor, inténtalo de nuevo con otro archivo.'
            },
            loadImage: {
              title: 'Error',
              text: 'No puede cargar la imagen'
            }
          },
          multiple: {
            title: 'Has escogido %files%',
            question: '¿Quieres añadir todos estos archivos?',
            tooManyFiles: 'Has escogido demasiados archivos. %max% es el máximo.',
            tooFewFiles: 'Has escogido %files%. Hacen falta al menos %min%.',
            clear: 'Eliminar todo',
            done: 'Hecho',
            file: {
              preview: 'Vista previa %file%',
              remove: 'Quitar %file%'
            }
          }
        }
      },
      footer: {
        text: 'alimentado por'
      }
    }
  }; // Pluralization rules taken from:
  // https://unicode.org/cldr/charts/34/supplemental/language_plural_rules.html

  var pluralize$m = function pluralize(n) {
    if (n === 1) {
      return 'one';
    }

    return 'other';
  };

  var es = {
    translations: translations$m,
    pluralize: pluralize$m
  };

  // #
  // # Please, do not use this locale as a reference for new translations.
  // # It could be outdated or incomplete. Always use the latest English versions:
  // # https://github.com/uploadcare/uploadcare-widget/blob/master/app/assets/javascripts/uploadcare/locale/en.js
  // #
  // # Any fixes are welcome.
  // #
  var translations$l = {
    uploading: 'Üleslaadimine… Palun oota.',
    loadingInfo: 'Info laadimine...',
    errors: {
      default: 'Viga',
      baddata: 'Incorrect value',
      size: 'Fail on liiga suur',
      upload: 'Ei saa üles laadida',
      user: 'Üleslaadimine tühistatud',
      info: 'Ei saa infot laadida',
      image: 'Ainult pildid lubatud',
      createGroup: 'Ei saa luua failigruppi',
      deleted: 'Fail on kustutatud'
    },
    draghere: 'Tiri fail siia',
    file: {
      one: '%1 fail',
      other: '%1 failid'
    },
    buttons: {
      cancel: 'Tühista',
      remove: 'Kustuta',
      choose: {
        files: {
          one: 'Vali fail',
          other: 'Vali failid'
        },
        images: {
          one: 'Vali pilt',
          other: 'Vali pildid'
        }
      }
    },
    dialog: {
      done: 'Valmis',
      showFiles: 'Näita faile',
      tabs: {
        names: {
          'empty-pubkey': 'Tere',
          preview: 'Eelvaade',
          file: 'Failid Kõvakettalt',
          url: 'Veebilink',
          camera: 'Kaamera'
        },
        file: {
          drag: 'Tiri failid siia',
          nodrop: 'Lae failid arvutist',
          cloudsTip: 'Pilv<br>ja sotsiaalmeedia',
          or: 'või',
          button: 'Vali fail kõvakettalt',
          also: 'Saad samuti valida'
        },
        url: {
          title: 'Failid veebist',
          line1: 'Ükskõik mis fail otse veebist.',
          line2: 'Lihtsalt sisesta URL.',
          input: 'Kleebi link siia...',
          button: 'Lae üles'
        },
        camera: {
          capture: 'Take a photo',
          mirror: 'Mirror',
          startRecord: 'Record a video',
          stopRecord: 'Stop',
          cancelRecord: 'Cancel',
          retry: 'Request permissions again',
          pleaseAllow: {
            title: 'Please allow access to your camera',
            text: 'You have been prompted to allow camera access from this site. ' + 'In order to take pictures with your camera you must approve this request.'
          },
          notFound: {
            title: 'No camera detected',
            text: 'Looks like you have no camera connected to this device.'
          }
        },
        preview: {
          unknownName: 'teadmata',
          change: 'Tühista',
          back: 'Tagasi',
          done: 'Lisa',
          unknown: {
            title: 'Üleslaadimine... Palun oota eelvaadet.',
            done: 'Jäta eelvaade vahele ja nõustu'
          },
          regular: {
            title: 'Lisa see fail?',
            line1: 'Oled lisamas ülaltoodud faili.',
            line2: 'Palun kinnita.'
          },
          image: {
            title: 'Lisa pilt?',
            change: 'Tühista'
          },
          crop: {
            title: 'Lõika ja lisa pilt',
            done: 'Valmis',
            free: 'vaba'
          },
          video: {
            title: 'Lisa video?',
            change: 'Tühista'
          },
          error: {
            default: {
              title: 'Oihh!',
              text: 'Midagi läks üleslaadimisel valesti.',
              back: 'Palun proovi uuesti'
            },
            image: {
              title: 'Ainult pildifailid on lubatud.',
              text: 'Palun proovi uuesti teise failiga.',
              back: 'Vali pilt'
            },
            size: {
              title: 'Valitud fail ületab maksimaalse suuruse.',
              text: 'Palun proovi uuesti teise failiga.'
            },
            loadImage: {
              title: 'Viga',
              text: 'Ei saa pilti laadida'
            }
          },
          multiple: {
            title: 'Oled valinud %files%',
            question: 'Kas sa soovid lisada kõik failid?',
            tooManyFiles: 'Oled valinud liiga suure hulga faile. %max% on maksimaalne.',
            tooFewFiles: 'Oled valinud %files%. Vähemalt %min% nõutud.',
            clear: 'Eemalda kõik',
            done: 'Valmis'
          }
        }
      }
    }
  }; // Pluralization rules taken from:
  // https://unicode.org/cldr/charts/34/supplemental/language_plural_rules.html

  var pluralize$l = function pluralize(n) {
    if (n === 1) {
      return 'one';
    }

    return 'other';
  };

  var et = {
    translations: translations$l,
    pluralize: pluralize$l
  };

  // #
  // # Please, do not use this locale as a reference for new translations.
  // # It could be outdated or incomplete. Always use the latest English versions:
  // # https://github.com/uploadcare/uploadcare-widget/blob/master/app/assets/javascripts/uploadcare/locale/en.js
  // #
  // # Any fixes are welcome.
  // #
  var translations$k = {
    uploading: 'Envoi en cours... Merci de patienter.',
    loadingInfo: 'Chargement des informations...',
    errors: {
      default: 'Erreur',
      baddata: 'Valeur incorrecte',
      size: 'Fichier trop volumineux',
      upload: 'Envoi impossible',
      user: 'Envoi annulé',
      info: 'Impossible de charger les informations',
      image: 'Seules les images sont autorisées',
      createGroup: "Création d'1 groupe impossible",
      deleted: 'Le fichier a été supprimé'
    },
    draghere: 'Glissez-déposez un fichier ici',
    file: {
      one: '%1 fichier',
      other: '%1 fichiers'
    },
    buttons: {
      cancel: 'Annuler',
      remove: 'Supprimer',
      choose: {
        files: {
          one: 'Sélectionner un fichier',
          other: 'Sélectionner des fichiers'
        },
        images: {
          one: 'Sélectionner une image',
          other: 'Sélectionner des images'
        }
      }
    },
    dialog: {
      close: 'Fermer',
      openMenu: 'Ouvrir le menu',
      done: 'Terminer',
      showFiles: 'Voir les fichiers',
      tabs: {
        names: {
          'empty-pubkey': 'Bienvenue',
          preview: 'Avant-première',
          file: 'Fichier en local',
          url: 'Une adresse web',
          camera: 'Caméra',
          facebook: 'Facebook',
          dropbox: 'Dropbox',
          gdrive: 'Google Drive',
          gphotos: 'Google Photos',
          instagram: 'Instagram',
          vk: 'VK',
          evernote: 'Evernote',
          box: 'Box',
          onedrive: 'OneDrive',
          flickr: 'Flickr',
          huddle: 'Huddle'
        },
        file: {
          drag: 'Glissez-déposez un fichier ici',
          nodrop: 'Envoyez des fichiers depuis votre ordinateur',
          cloudsTip: 'Stockage sur le cloud<br>et réseaux sociaux',
          or: 'ou',
          button: 'Choisir un fichier local',
          also: 'Vous pouvez également le sélectionner depuis'
        },
        url: {
          title: 'Fichiers depuis le Web',
          line1: "Prenez n'importe quel fichier depuis un site web.",
          line2: 'Saisissez simplement son adresse.',
          input: 'Collez le lien ici...',
          button: 'Envoi'
        },
        camera: {
          title: 'Fichier depuis la caméra',
          capture: 'Prendre une photo',
          mirror: 'Miroir',
          startRecord: 'Enregistrer une vidéo',
          stopRecord: 'Arrêter',
          cancelRecord: 'Annuler',
          retry: 'Envoyer une nouvelle demande de permission',
          pleaseAllow: {
            title: "Autorisez l'accès à votre appareil photo",
            text: "Vous avez été invité à autoriser l'accès à votre appareil photo. Pour prendre des photos avec votre caméra vous devez approuver cette demande."
          },
          notFound: {
            title: 'Aucun appareil photo détecté',
            text: "Il semblerait que vous n'ayez pas d'appareil photo connecté à cet appareil."
          }
        },
        preview: {
          unknownName: 'inconnu',
          change: 'Annuler',
          back: 'Retour',
          done: 'Ajouter',
          unknown: {
            title: 'Envoi en cours... Merci de patienter pour prévisualiser.',
            done: 'Passer la prévisualisation et accepter'
          },
          regular: {
            title: 'Ajouter ce fichier ?',
            line1: "Vous êtes sur le point d'ajouter le fichier ci-dessus.",
            line2: 'Merci de confirmer.'
          },
          image: {
            title: 'Ajouter cette image ?',
            change: 'Annuler'
          },
          crop: {
            title: 'Recadrer et ajouter cette image',
            done: 'Terminer',
            free: 'libre'
          },
          video: {
            title: 'Ajouter cette vidéo ?',
            change: 'Annuler'
          },
          error: {
            default: {
              title: 'Oups!',
              text: "Quelque chose n'a pas fonctionné pendant l'envoi.",
              back: 'Merci de bien vouloir recommencer'
            },
            image: {
              title: 'Seules les images sont acceptées.',
              text: 'Merci de bien vouloir recommencer avec un autre fichier.',
              back: 'Choisir une image'
            },
            size: {
              title: 'Le fichier sélectionné est trop volumineux.',
              text: 'Merci de bien vouloir recommencer avec un autre fichier.'
            },
            loadImage: {
              title: 'Erreur',
              text: "Impossible de charger l'image"
            }
          },
          multiple: {
            title: 'Vous avez choisi %files%',
            question: 'Voulez vous ajouter tous ces fichiers ?',
            tooManyFiles: 'Vous avez choisi trop de fichiers. %max% est le maximum.',
            tooFewFiles: 'Vous avez choisi %fichiers%. %min% est le minimum.',
            clear: 'Tout retirer',
            done: 'Terminer',
            file: {
              preview: 'Prévisualiser %file%',
              remove: 'Supprimer %file%'
            }
          }
        }
      }
    }
  }; // Pluralization rules taken from:
  // https://unicode.org/cldr/charts/34/supplemental/language_plural_rules.html

  var pluralize$k = function pluralize(n) {
    if (n === 1) {
      return 'one';
    }

    return 'other';
  };

  var fr = {
    translations: translations$k,
    pluralize: pluralize$k
  };

  // #
  // # Please, do not use this locale as a reference for new translations.
  // # It could be outdated or incomplete. Always use the latest English versions:
  // # https://github.com/uploadcare/uploadcare-widget/blob/master/app/assets/javascripts/uploadcare/locale/en.js
  // #
  // # Any fixes are welcome.
  // #
  var translations$j = {
    uploading: 'טוען... אנא המתן.',
    loadingInfo: 'טוען מידע...',
    errors: {
      default: 'שגיאה',
      baddata: 'ערך שגוי',
      size: 'קובץ גדול מידי',
      upload: 'לא ניתן להעלות',
      user: 'העלאה בוטלה',
      info: 'לא ניתן לטעון מידע',
      image: 'ניתן להעלות רק תמונות',
      createGroup: 'לא ניתן ליצור קבוצה',
      deleted: 'הקובץ נמחק'
    },
    draghere: 'שחרר כאן קובץ',
    file: {
      one: 'קובץ %1',
      other: '%1 קבצים'
    },
    buttons: {
      cancel: 'ביטול',
      remove: 'הסר',
      choose: {
        files: {
          one: 'בחר קובץ',
          other: 'בחר קבצים'
        },
        images: {
          one: 'בחר תמונה',
          other: 'בחר תמונות'
        }
      }
    },
    dialog: {
      done: 'סיום',
      showFiles: 'הצג קבצים',
      tabs: {
        names: {
          facebook: 'פייסבוק',
          dropbox: 'דרופבוקס',
          gdrive: 'כונן גוגל',
          instagram: 'אינסטגרם',
          url: 'לינק מהאינטרנט'
        },
        file: {
          drag: 'שחרר כאן קובץ',
          nodrop: 'העלה קבצים מהמחשב',
          or: 'או',
          button: 'בחר קובץ מהמחשב',
          also: 'ניתן לבחור גם מ'
        },
        url: {
          title: 'קובץ מהאינטרנט',
          line1: 'גרור קובץ מהאינטרנט',
          line2: 'ספק את כתובת הקובץ',
          input: 'הדבק את כתובת הקובץ...',
          button: 'העלה'
        },
        preview: {
          unknownName: 'לא ידוע',
          change: 'ביטול',
          back: 'חזרה',
          done: 'הוסף',
          unknown: {
            title: 'מעלה... נא המתן לתצוגה מקדימה.',
            done: 'דלג על תצוגה מקדימה'
          },
          regular: {
            title: 'להוסיף קובץ זה?',
            line1: 'קובץ זה יועלה',
            line2: 'נא אשר.'
          },
          image: {
            title: 'להוסיף תמונה זו?',
            change: 'ביטול'
          },
          crop: {
            title: 'חתוך והוסף תמונה זו',
            done: 'סיום'
          },
          error: {
            default: {
              title: 'אופס!',
              text: 'משהו השתבש בזמן ההעלאה.',
              back: 'נא נסה שוב'
            },
            image: {
              title: 'ניתן לקבל רק קבצי תמונות.',
              text: 'נא נסה שוב עם קובץ אחר.',
              back: 'בחר תמונה'
            },
            size: {
              title: 'הקובץ שבחרת חורג מהגבול.',
              text: 'נא נסה שוב עם קובץ אחר.'
            },
            loadImage: {
              title: 'שגיאה',
              text: 'טעינת התמונה נכשלה'
            }
          },
          multiple: {
            title: 'בחרת %files%',
            question: 'אתה מעוניין להוסיף את כל הקבצים האלו?',
            tooManyFiles: 'בחרת יותר מידי קבצים. יש לבחור מקסימום %max% קבצים.',
            tooFewFiles: 'בחרת %files%. יש לבחור לפחות %min%.',
            clear: 'הסר הכל',
            done: 'סיום'
          }
        }
      }
    }
  }; // Pluralization rules taken from:
  // https://unicode.org/cldr/charts/34/supplemental/language_plural_rules.html

  var pluralize$j = function pluralize(n) {
    if (n === 1) {
      return 'one';
    }

    return 'other';
  };

  var he = {
    translations: translations$j,
    pluralize: pluralize$j
  };

  // #
  // # Icelandic translations
  // #
  var translations$i = {
    uploading: 'Hleð upp... Vinsamlegast bíðið.',
    loadingInfo: 'Hleð upp upplýsingum...',
    errors: {
      default: 'Villa',
      baddata: 'Rangt gildi',
      size: 'Skráin er of stór',
      upload: 'Ekki tókst að hlaða upp skrá',
      user: 'Hætt var við',
      info: 'Ekki tókst að sækja upplýsingar',
      image: 'Myndir eru einungis leyfðar',
      createGroup: 'Ekki tókst að búa til hóp',
      deleted: 'Skrá hefur verið eytt'
    },
    draghere: 'Dragðu skrá hingað',
    file: {
      one: '%1 skrá',
      other: '%1 skráa'
    },
    buttons: {
      cancel: 'Hætta við',
      remove: 'Fjarlægja',
      choose: {
        files: {
          one: 'Veldu skrá',
          other: 'Veldu skrár'
        },
        images: {
          one: 'Veldu mynd',
          other: 'Veldu myndir'
        }
      }
    },
    dialog: {
      close: 'Loka',
      openMenu: 'Opna valmynd',
      done: 'Búið',
      showFiles: 'Sjá skrár',
      tabs: {
        names: {
          'empty-pubkey': 'Velkomin/n/ð',
          preview: 'Forskoðun',
          file: 'Staðbundnar skrár',
          url: 'Beinn hlekkur',
          camera: 'Myndavél',
          facebook: 'Facebook',
          dropbox: 'Dropbox',
          gdrive: 'Google Drive',
          gphotos: 'Google Photos',
          instagram: 'Instagram',
          vk: 'VK',
          evernote: 'Evernote',
          box: 'Box',
          onedrive: 'OneDrive',
          flickr: 'Flickr',
          huddle: 'Huddle'
        },
        file: {
          drag: 'dragðu & slepptu<br>skrám',
          nodrop: 'Hlaða upp þínum skrám',
          cloudsTip: 'Skýjaþjónustur<br>og samfélagsmiðlar',
          or: 'eða',
          button: 'Veldu staðbundna skrá',
          also: 'eða veldu'
        },
        url: {
          title: 'Skrár af netinu',
          line1: 'Sæktu hvaða skrá sem er frá netinu',
          line2: 'Settu bara inn hlekk',
          input: 'Límdu hlekkinn hér...',
          button: 'Hlaða upp'
        },
        camera: {
          title: 'Skrá frá myndavél',
          capture: 'Taktu mynd',
          mirror: 'Spegill',
          startRecord: 'Taktu upp myndband',
          stopRecord: 'Stopp',
          cancelRecord: 'Hætta við',
          retry: 'Biðja aftur um heimild',
          pleaseAllow: {
            title: 'Vinsamlegast gefðu heimild til þess að nota myndavélina',
            text: 'Þú hefur verið beðin/n/ð um að gefa heimild til myndavélanotkunar frá þessari síðu<br>' + 'Til þess að geta tekið myndir er nauðsynlegt að gefa heimild.'
          },
          notFound: {
            title: 'Engin myndavél fannst.',
            text: 'Það lítur út fyrir að það sé engin myndavél tengd.'
          }
        },
        preview: {
          unknownName: 'óþekkt',
          change: 'Hætta við',
          back: 'Bakka',
          done: 'Bæta við',
          unknown: {
            title: 'Hleð upp ... vinsamlegast bíðið eftir forskoðun. ',
            done: 'Sleppa forskoðun og samþykkja'
          },
          regular: {
            title: 'Bæta þessari skrá við?',
            line1: 'Þú ert að fara bæta þessari skrá við.',
            line2: 'Vinsamlegast staðfestið.'
          },
          image: {
            title: 'Bæta þessari mynd við?',
            change: 'Hætta við'
          },
          crop: {
            title: 'Kroppa og bæta þessari mynd við?',
            done: 'Búið',
            free: 'frítt'
          },
          video: {
            title: 'Bæta þessu myndbandi við?',
            change: 'Hætta við'
          },
          error: {
            default: {
              title: 'Úps!',
              text: 'Eitthvað fór úrskeiðis.',
              back: 'Vinsamlegast reyndu aftur'
            },
            image: {
              title: 'Myndir eru einungis leyfðar.',
              text: 'Vinsamlegast reyndu aftur.',
              back: 'Velja mynd'
            },
            size: {
              title: 'Skráin er of stór.',
              text: 'Vinsamlegast reyndu aftur.'
            },
            loadImage: {
              title: 'Villa',
              text: 'Gat ekki hlaðið upp mynd.'
            }
          },
          multiple: {
            title: 'Þú hefur valið %files%.',
            question: 'Bæta við %files%?',
            tooManyFiles: 'Þú hefur valið of margar skrár. %max% er hámarkið.',
            tooFewFiles: 'Þú hefur valið %files%. Að minnsta kosti %min% er lágmarkið.',
            clear: 'Fjarlægja allar skrár',
            done: 'Bæta við',
            file: {
              preview: 'Forskoða %file%',
              remove: 'Fjarlægja %file%'
            }
          }
        }
      }
    }
  }; // Pluralization rules taken from:
  // https://unicode.org/cldr/charts/34/supplemental/language_plural_rules.html

  var pluralize$i = function pluralize(n) {
    if (n === 1) {
      return 'one';
    }

    return 'other';
  };

  var is = {
    pluralize: pluralize$i,
    translations: translations$i
  };

  // #
  // # Please, do not use this locale as a reference for new translations.
  // # It could be outdated or incomplete. Always use the latest English versions:
  // # https://github.com/uploadcare/uploadcare-widget/blob/master/app/assets/javascripts/uploadcare/locale/en.js
  // #
  // # Any fixes are welcome.
  // #
  var translations$h = {
    uploading: 'Caricamento in corso... Si prega di attendere.',
    loadingInfo: 'Caricamento informazioni in corso...',
    errors: {
      default: 'Errore',
      baddata: 'Valore errato',
      size: 'Il file è troppo grande',
      upload: 'Impossibile fare l’upload',
      user: 'Upload cancellato',
      info: 'Impossibile caricare le informazioni',
      image: 'Sono ammesse solo immagini',
      createGroup: 'Impossibile creare gruppo di file',
      deleted: 'Il file è stato eliminato'
    },
    draghere: 'Trascina un file qui',
    file: {
      one: 'file %1',
      other: 'file %1'
    },
    buttons: {
      cancel: 'Cancella',
      remove: 'Rimuovi',
      choose: {
        files: {
          one: 'Seleziona un file',
          other: 'Seleziona file'
        },
        images: {
          one: 'Seleziona un’immagine',
          other: 'Seleziona immagini'
        }
      }
    },
    dialog: {
      done: 'Fatto',
      showFiles: 'Mostra file',
      tabs: {
        names: {
          'empty-pubkey': 'Benvenuto',
          preview: 'Anteprima',
          file: 'File locali',
          url: 'Link arbitrari',
          camera: 'Fotocamera'
        },
        file: {
          drag: 'Trascina un file qui',
          nodrop: 'Carica file dal tuo computer',
          cloudsTip: 'Salvataggi nel cloud<br>e servizi sociali',
          or: 'o',
          button: 'Seleziona un file locale',
          also: 'Puoi anche scegliere da'
        },
        url: {
          title: 'File dal web',
          line1: 'Preleva un file dal web.',
          line2: 'È sufficiente fornire il link.',
          input: 'Incolla il tuo link qui...',
          button: 'Carica'
        },
        camera: {
          capture: 'Scatta una foto',
          mirror: 'Specchio',
          retry: 'Richiedi di nuovo le autorizzazioni',
          pleaseAllow: {
            title: 'Consenti l’accesso alla tua fotocamera',
            text: 'Ti è stato richiesto di consentire l’accesso alla fotocamera da questo sito. Per scattare le foto con la tua fotocamera devi accettare questa richiesta.'
          },
          notFound: {
            title: 'Nessuna fotocamera rilevata',
            text: 'Non risulta che tu non abbia una fotocamera collegata a questo dispositivo.'
          }
        },
        preview: {
          unknownName: 'sconosciuto',
          change: 'Cancella',
          back: 'Indietro',
          done: 'Aggiungi',
          unknown: {
            title: 'Caricamento in corso... Attendi l’anteprima.',
            done: 'Salta l’anteprima e accetta'
          },
          regular: {
            title: 'Vuoi aggiungere questo file?',
            line1: 'Stai per aggiungere il file sopra.',
            line2: 'Conferma.'
          },
          image: {
            title: 'Vuoi aggiungere questa immagine?',
            change: 'Cancella'
          },
          crop: {
            title: 'Ritaglia e aggiungi questa immagine',
            done: 'Fatto',
            free: 'gratis'
          },
          error: {
            default: {
              title: 'Ops!',
              text: 'Si è verificato un problema durante l’upload.',
              back: 'Si prega di riprovare'
            },
            image: {
              title: 'Sono accettati solo file immagine.',
              text: 'Riprova con un altro file.',
              back: 'Scegli immagine'
            },
            size: {
              title: 'Il file selezionato supera il limite.',
              text: 'Riprova con un altro file.'
            },
            loadImage: {
              title: 'Errore',
              text: 'Impossibile caricare l’immagine'
            }
          },
          multiple: {
            title: 'Hai selezionato %files%',
            question: 'Vuoi aggiungere tutti questi file?',
            tooManyFiles: 'Hai selezionato troppi file. %max% è il massimo.',
            tooFewFiles: 'Hai selezionato %files%. È richiesto almeno %min%.',
            clear: 'Rimuovi tutto',
            done: 'Fatto'
          }
        }
      }
    }
  }; // Pluralization rules taken from:
  // https://unicode.org/cldr/charts/34/supplemental/language_plural_rules.html

  var pluralize$h = function pluralize(n) {
    if (n === 1) {
      return 'one';
    }

    return 'other';
  };

  var it = {
    translations: translations$h,
    pluralize: pluralize$h
  };

  // #
  // # Please, do not use this locale as a reference for new translations.
  // # It could be outdated or incomplete. Always use the latest English versions:
  // # https://github.com/uploadcare/uploadcare-widget/blob/master/app/assets/javascripts/uploadcare/locale/en.js
  // #
  // # Any fixes are welcome.
  // #
  var translations$g = {
    uploading: 'アップロードしています… 完了までお待ち下さい。',
    loadingInfo: '読み込み中…',
    errors: {
      default: 'エラー',
      baddata: '間違った値',
      size: 'ファイルが大きすぎます',
      upload: 'アップロードできませんでした',
      user: 'アップロードがキャンセルされました',
      info: '読み込みに失敗しました',
      image: 'アップロードできるのは画像ファイルのみです',
      createGroup: 'グループの作成に失敗しました',
      deleted: '削除されたファイルです'
    },
    draghere: 'ここにファイルをドロップ',
    file: {
      other: '%1ファイル'
    },
    buttons: {
      cancel: 'キャンセル',
      remove: '削除',
      choose: {
        files: {
          one: 'ファイルを選択',
          other: 'ファイルを選択'
        },
        images: {
          one: '画像を選択',
          other: '画像を選択'
        }
      }
    },
    dialog: {
      done: '完了',
      showFiles: 'ファイルを表示',
      tabs: {
        names: {
          preview: 'プレビュー',
          file: 'ローカルファイル',
          url: 'URLを直接入力'
        },
        file: {
          drag: 'ここにファイルをドロップ',
          nodrop: 'ファイルを選択してアップロード',
          cloudsTip: 'クラウドストレージ<br>およびソーシャルサービス',
          or: 'もしくは',
          button: 'ローカルのファイルを選択',
          also: '次からも選択可能です：'
        },
        url: {
          title: 'ウェブ上のファイル',
          line1: 'ウェブ上からファイルを取得します。',
          line2: 'URLを入力してください。',
          input: 'ここにURLを貼り付けしてください…',
          button: 'アップロード'
        },
        preview: {
          unknownName: '不明なファイル',
          change: 'キャンセル',
          back: '戻る',
          done: '追加',
          unknown: {
            title: 'アップロードしています… プレビューの表示をお待ちください。',
            done: 'プレビューの確認をスキップして完了'
          },
          regular: {
            title: 'このファイルを追加しますか？',
            line1: 'こちらのファイルを追加しようとしています。',
            line2: '確認してください。'
          },
          image: {
            title: 'この画像を追加しますか？',
            change: 'キャンセル'
          },
          crop: {
            title: '画像の切り取りと追加',
            done: '完了',
            free: 'リセット'
          },
          error: {
            default: {
              title: '失敗しました',
              text: 'アップロード中に不明なエラーが発生しました。',
              back: 'もう一度お試し下さい'
            },
            image: {
              title: '画像ファイルのみ許可されています',
              text: '他のファイルで再度お試し下さい。',
              back: '画像を選択'
            },
            size: {
              title: 'ファイルサイズが大きすぎます。',
              text: '他のファイルで再度お試し下さい。'
            },
            loadImage: {
              title: 'エラー',
              text: '画像のロードに失敗しました。'
            }
          },
          multiple: {
            title: '%files%つのファイルを選択中',
            question: 'これら全てのファイルを追加しますか？',
            tooManyFiles: '選択ファイルが多すぎます。%max%つ以下にしてください。',
            tooFewFiles: '選択ファイルが少なすぎます。%files%つ選択中です。少なくとも%min%つ選択してください。',
            clear: '全て削除',
            done: '完了'
          }
        }
      }
    }
  }; // Pluralization rules taken from:
  // https://unicode.org/cldr/charts/34/supplemental/language_plural_rules.html

  var pluralize$g = function pluralize(n) {
    return 'other';
  };

  var ja = {
    translations: translations$g,
    pluralize: pluralize$g
  };

  // #
  // # Please, do not use this locale as a reference for new translations.
  // # It could be outdated or incomplete. Always use the latest English versions:
  // # https://github.com/uploadcare/uploadcare-widget/blob/master/app/assets/javascripts/uploadcare/locale/en.js
  // #
  // # Any fixes are welcome.
  // #
  var translations$f = {
    uploading: '업로드중 기다려주세요',
    loadingInfo: '정보 로드중...',
    errors: {
      default: '오류',
      baddata: '잘못된 값',
      size: '파일용량 초과',
      upload: '업로드 실패',
      user: '업로드 취소됨',
      info: '정보를 불러올 수 없습니다',
      image: '허용된 이미지만 가능',
      createGroup: '파일 그룹 만들기 실패',
      deleted: '파일이 삭제되었습니다'
    },
    draghere: '여기에 끌어다 놓기',
    file: {
      one: '%1 파일',
      other: '%1 파일'
    },
    buttons: {
      cancel: '취소',
      remove: '삭제',
      choose: {
        files: {
          one: '파일 첨부',
          other: '파일 첨부'
        },
        images: {
          one: '이미지 첨부',
          other: '이미지 첨부'
        }
      }
    },
    dialog: {
      close: '닫기',
      openMenu: '메뉴 열기',
      done: '완료',
      showFiles: '파일 표시',
      tabs: {
        names: {
          'empty-pubkey': '반갑습니다',
          preview: '미리보기',
          file: '파일 첨부',
          url: '링크 연결',
          camera: '카메라',
          facebook: '페이스북',
          dropbox: '드롭박스',
          gdrive: '구글 드라이브',
          gphotos: '구글 포토',
          instagram: '인스타그램',
          evernote: '에버노트',
          box: '박스',
          onedrive: '스카이드라이브',
          flickr: '플리커'
        },
        file: {
          drag: '모든 파일을<br>드래그 & 드롭',
          nodrop: '파일 업로드',
          cloudsTip: '클라우드 스토리지 및 소셜',
          or: '또는',
          button: '파일 선택',
          also: '또는 선택하십시오'
        },
        url: {
          title: '웹에서 파일 링크 연결',
          line1: '웹에서 모든파일을 가져옵니다',
          line2: '링크만 연결합니다.',
          input: '링크 붙여 넣기...',
          button: '업로드'
        },
        camera: {
          title: '카메라 연결',
          capture: '사진 찍기',
          mirror: '거울',
          startRecord: '비디오 녹화',
          stopRecord: '정지',
          cancelRecord: '취소',
          retry: '재 시도',
          pleaseAllow: {
            title: '카메라 접근 허용',
            text: '카메라 접근을 허용하시겠습니까?<br>' + '승인 요청을 해주셔야 합니다'
          },
          notFound: {
            title: '카메라가 없습니다',
            text: '이 기기에 연결된 카메라가 없습니다'
          }
        },
        preview: {
          unknownName: '알수없음',
          change: '취소',
          back: '뒤로',
          done: '추가',
          unknown: {
            title: '업로드중, 기다려주세요',
            done: '미리보기 건너뛰기'
          },
          regular: {
            title: '이 파일을 추가하시겠습니까?',
            line1: '위 파일을 추가하려고 합니다',
            line2: '확인 하십시오'
          },
          image: {
            title: '이미지를 추가하시겠습니까?',
            change: '취소'
          },
          crop: {
            title: '이미지 자르기 및 추가',
            done: '완료',
            free: '무료'
          },
          video: {
            title: '비디오를 추가하시겠습니까?',
            change: '취소'
          },
          error: {
            default: {
              title: '죄송합니다',
              text: '업로드에 문제가 있습니다',
              back: '다시 시도해 주세요'
            },
            image: {
              title: '이미지 파일만 허용됩니다',
              text: '다른 파일로 다시 시도하세요',
              back: '이미지 선택'
            },
            size: {
              title: '선택한 파일이 한도 초과하였습니다',
              text: '다른 파일로 다시 시도하세요'
            },
            loadImage: {
              title: '오류',
              text: '이미지를 불러올 수 없습니다'
            }
          },
          multiple: {
            title: '%files%을(를) 선택하였습니다',
            question: '%files%을 추가하시겠습니까?',
            tooManyFiles: '너무 많은 파일을 추가하셨습니다. %max%가 최대 한도입니다',
            tooFewFiles: '%files%을(를) 선택하였습니다 최소 %min%이상 필요합니다',
            clear: '모두 삭제',
            done: '추가',
            file: {
              preview: '%file% 미리보기',
              remove: '%file% 삭제'
            }
          }
        }
      },
      footer: {
        text: 'powered by',
        link: 'uploadcare'
      }
    }
  }; // Pluralization rules taken from:
  // https://unicode.org/cldr/charts/34/supplemental/language_plural_rules.html

  var pluralize$f = function pluralize(n) {
    if (n === 1) {
      return 'one';
    }

    return 'other';
  };

  var ko = {
    translations: translations$f,
    pluralize: pluralize$f
  };

  // #
  // # Please, do not use this locale as a reference for new translations.
  // # It could be outdated or incomplete. Always use the latest English versions:
  // # https://github.com/uploadcare/uploadcare-widget/blob/master/app/assets/javascripts/uploadcare/locale/en.js
  // #
  // # Any fixes are welcome.
  // #
  var translations$e = {
    uploading: 'Augšupielādē... Lūdzu, gaidiet.',
    errors: {
      default: 'Kļūda',
      image: 'Atļauti tikai attēli'
    },
    draghere: 'Velciet failus šeit',
    file: {
      zero: '%1 failu',
      one: '%1 fails',
      other: '%1 faili'
    },
    buttons: {
      cancel: 'Atcelt',
      remove: 'Dzēst'
    },
    dialog: {
      title: 'Ielādēt jebko no jebkurienes',
      poweredby: 'Darbināts ar',
      support: {
        images: 'Attēli',
        audio: 'Audio',
        video: 'Video',
        documents: 'Dokumenti'
      },
      tabs: {
        file: {
          title: 'Mans dators',
          line1: 'Paņemiet jebkuru failu no jūsu datora.',
          line2: 'Izvēlēties ar dialogu vai ievelciet iekšā.',
          button: 'Meklēt failus'
        },
        url: {
          title: 'Faili no tīmekļa',
          line1: 'Paņemiet jebkuru failu no tīmekļa.',
          line2: 'Tikai uzrādiet linku.',
          input: 'Ielīmējiet linku šeit...',
          button: 'Ielādēt'
        }
      }
    }
  };

  var pluralize$e = function pluralize(n) {
    if (n === 0) {
      return 'zero';
    }

    if (n % 10 === 1 && n % 100 !== 11) {
      return 'one';
    }

    return 'other';
  };

  var lv = {
    translations: translations$e,
    pluralize: pluralize$e
  };

  // #
  // # Please, do not use this locale as a reference for new translations.
  // # It could be outdated or incomplete. Always use the latest English versions:
  // # https://github.com/uploadcare/uploadcare-widget/blob/master/app/assets/javascripts/uploadcare/locale/en.js
  // #
  // # Any fixes are welcome.
  // #
  var translations$d = {
    uploading: 'Laster opp... Vennligst vent.',
    loadingInfo: 'Laster inn info...',
    errors: {
      default: 'Feil',
      baddata: 'Ugyldig verdi',
      size: 'Filen er for stor',
      upload: 'Kan ikke laste opp',
      user: 'Opplasting avbrutt',
      info: 'Kan ikke laste inn info',
      image: 'Kun bilder er tillatt',
      createGroup: 'Kan ikke opprette filgruppe',
      deleted: 'Filen er slettet'
    },
    draghere: 'Dra en fil hit',
    file: {
      one: '%1 fil',
      other: '%1 filer'
    },
    buttons: {
      cancel: 'Avbryt',
      remove: 'Fjern',
      choose: {
        files: {
          one: 'Velg en fil',
          other: 'Velg filer'
        },
        images: {
          one: 'Velg et bilde',
          other: 'Velg bilder'
        }
      }
    },
    dialog: {
      done: 'Ferdig',
      showFiles: 'Vis filer',
      tabs: {
        names: {
          preview: 'Forhåndsvising',
          file: 'Lokale filer',
          url: 'Direktelink'
        },
        file: {
          drag: 'Dra og slipp en fil her',
          nodrop: 'Last opp filer fra datamaskinen',
          cloudsTip: 'Skylagring<br>og sosiale tjenester',
          or: 'eller',
          button: 'Velg en lokal fil',
          also: 'Du kan også velge det fra'
        },
        url: {
          title: 'Filer fra internett',
          line1: 'Velg hvilken som helst fil fra internett.',
          line2: 'Bare gi oss linken.',
          input: 'Lim inn linken her...',
          button: 'Last opp'
        },
        preview: {
          unknownName: 'ukjent',
          change: 'Avbryt',
          back: 'Tilbake',
          done: 'Legg til',
          unknown: {
            title: 'Laster opp... Vennligst vent på forhåndsvisning.',
            done: 'Hopp over forhåndsvisning og godkjenn'
          },
          regular: {
            title: 'Legge til denne filen?',
            line1: 'Filen legges nå til.',
            line2: 'Vennligst bekreft.'
          },
          image: {
            title: 'Legge til dette bildet?',
            change: 'Avbryt'
          },
          crop: {
            title: 'Kutt og legg til dette bildet',
            done: 'Ferdig',
            free: 'frigjør'
          },
          error: {
            default: {
              title: 'Ops!',
              text: 'Noe gikk galt under opplastingen.',
              back: 'Vennligst prøv igjen'
            },
            image: {
              title: 'Kun bilder er akseptert.',
              text: 'Prøv igjen med en annen fil.',
              back: 'Velg bilde'
            },
            size: {
              title: 'Den valgte filen overskrider tilatt størrelse.',
              text: 'Vennligst prøv igjen med en annen fil.'
            },
            loadImage: {
              title: 'Feil',
              text: 'Kan ikke laste bildet'
            }
          },
          multiple: {
            title: 'Du har valgt %files%',
            question: 'Ønsker du å legge til alle filene?',
            tooManyFiles: 'Du har valgt for mange filer. %max% er maksimum.',
            tooFewFiles: 'Du har valgt %files%. Minimum %min% er påkrevd.',
            clear: 'Fjern alle',
            done: 'Ferdig'
          }
        }
      }
    }
  }; // Pluralization rules taken from:
  // https://unicode.org/cldr/charts/34/supplemental/language_plural_rules.html

  var pluralize$d = function pluralize(n) {
    if (n === 1) {
      return 'one';
    }

    return 'other';
  };

  var nb = {
    translations: translations$d,
    pluralize: pluralize$d
  };

  // #
  // # Please, do not use this locale as a reference for new translations.
  // # It could be outdated or incomplete. Always use the latest English versions:
  // # https://github.com/uploadcare/uploadcare-widget/blob/master/app/assets/javascripts/uploadcare/locale/en.js
  // #
  // # Any fixes are welcome.
  // #
  var translations$c = {
    uploading: 'Uploaden... Even geduld.',
    loadingInfo: 'Laden informatie...',
    errors: {
      default: 'Fout',
      baddata: 'Ongeldige waarde',
      size: 'Bestand is te groot',
      upload: 'Kan niet uploaden',
      user: 'Upload geannuleerd',
      info: 'Kan informatie niet laden',
      image: 'Alleen afbeeldingen toegestaan',
      createGroup: 'Kan bestandsgroep niet maken',
      deleted: 'Bestand is verwijderd'
    },
    draghere: 'Drop hier een bestand',
    file: {
      one: '%1 bestand',
      other: '%1 bestanden'
    },
    buttons: {
      cancel: 'Annuleren',
      remove: 'Verwijderen',
      choose: {
        files: {
          one: 'Kies een bestand',
          other: 'Kies bestanden'
        },
        images: {
          one: 'Kies een afbeelding',
          other: 'Kies afbeeldingen'
        }
      }
    },
    dialog: {
      done: 'Klaar',
      showFiles: 'Toon bestanden',
      tabs: {
        names: {
          preview: 'Voorvertoning',
          file: 'Computer',
          url: 'Directe links'
        },
        file: {
          drag: 'Drop hier een bestand',
          nodrop: 'Upload bestanden van je computer',
          or: 'of',
          button: 'Selecteer een bestand op je computer',
          also: 'Je kan ook selecteren van'
        },
        camera: {
          title: 'Bestand van webcamera',
          retry: 'Opnieuw toegang aanvragen'
        },
        url: {
          title: 'Bestanden op het web',
          line1: 'Selecteer een bestand op het web.',
          line2: 'Voer de link in.',
          input: 'Plak de link hier...',
          button: 'Upload'
        },
        preview: {
          unknownName: 'onbekend',
          change: 'Annuleren',
          back: 'Terug',
          done: 'Toevoegen',
          unknown: {
            title: 'Uploaden... Wacht op de voorvertoning.',
            done: 'Voorvertoning overslaan an accepteren'
          },
          regular: {
            title: 'Dit bestand toevoegen?',
            line1: 'Je staat op het punt bovenstaand bestand toe te voegen.',
            line2: 'Bevestig'
          },
          image: {
            title: 'Voeg deze afbeelding toe?',
            change: 'Annuleren'
          },
          crop: {
            title: 'Afbeelding bijknippen en toevoegen',
            done: 'Klaar'
          },
          error: {
            default: {
              title: 'Oeps!',
              text: 'Er is een fout opgetreden tijdens het uploaden.',
              back: 'Probeer opnieuw'
            },
            image: {
              title: 'Alleen afbeeldingen worden geaccepteerd.',
              text: 'Probeer opnieuw met een andere bestand.',
              back: 'Selecteer afbeelding'
            },
            size: {
              title: 'Het geselecteerd bestand is groter dan de limiet.',
              text: 'Probeer opnieuw met een andere bestand.'
            },
            loadImage: {
              title: 'Fout',
              text: 'Kan afbeelding niet laden'
            }
          },
          multiple: {
            title: 'Je hebt de volgende bestanden geselecteerd %files%',
            question: 'Wil je al deze bestanden toevoegen?',
            tooManyFiles: 'Je hebt teveel bestanden geselecteerd. %max% is het maximum.',
            tooFewFiles: 'Je hebt de volgende bestanden geselecteerd %files%. Minimaal %min% is verplicht.',
            clear: 'Verwijder alle bestanden',
            done: 'Klaar'
          }
        }
      }
    }
  }; // Pluralization rules taken from:
  // https://unicode.org/cldr/charts/34/supplemental/language_plural_rules.html

  var pluralize$c = function pluralize(n) {
    if (n === 1) {
      return 'one';
    }

    return 'other';
  };

  var nl = {
    translations: translations$c,
    pluralize: pluralize$c
  };

  // #
  // # Please, do not use this locale as a reference for new translations.
  // # It could be outdated or incomplete. Always use the latest English versions:
  // # https://github.com/uploadcare/uploadcare-widget/blob/master/app/assets/javascripts/uploadcare/locale/en.js
  // #
  // # Any fixes are welcome.
  // #
  var translations$b = {
    uploading: 'Przesyłanie... Proszę czekać.',
    loadingInfo: 'Ładowanie...',
    errors: {
      default: 'Błąd',
      baddata: 'Niepoprawna wartość',
      size: 'Plik zbyt duży',
      upload: 'Nie udało się przesłać',
      user: 'Przesyłanie anulowane',
      info: 'Nie udało się załadować informacji',
      image: 'Dozwolone są tylko obrazy',
      createGroup: 'Nie udało się utworzyć grupy plików',
      deleted: 'Plik został usunięty'
    },
    draghere: 'Upuść plik tutaj',
    file: {
      one: '%1 plik',
      few: '%1 pliki',
      many: '%1 plików'
    },
    buttons: {
      cancel: 'Anuluj',
      remove: 'Usuń',
      choose: {
        files: {
          one: 'Wybierz plik',
          other: 'Wybierz pliki'
        },
        images: {
          one: 'Wybierz obraz',
          other: 'Wybierz obrazy'
        }
      }
    },
    dialog: {
      close: 'Zamknij',
      openMenu: 'Otwórz menu',
      done: 'Wykonano',
      showFiles: 'Pokaż pliki',
      tabs: {
        names: {
          'empty-pubkey': 'Witaj',
          preview: 'Podgląd',
          file: 'Pliki lokalne',
          url: 'Plik z Sieci',
          camera: 'Aparat'
        },
        file: {
          drag: 'Upuść plik tutaj',
          nodrop: 'Prześlij pliki z Twojego komputera',
          cloudsTip: 'Dane w chmurze<br>i sieci społecznościowe',
          or: 'lub',
          button: 'Wybierz plik lokalny',
          also: 'Możesz również wybrać z'
        },
        url: {
          title: 'Pliki z Sieci',
          line1: 'Złap jakikolwiej plik z sieci.',
          line2: 'Podaj adres.',
          input: 'Wklej link...',
          button: 'Prześlij'
        },
        camera: {
          title: 'Plik z kamery internetowej',
          capture: 'Zrób zdjęcie',
          mirror: 'Odbicie lustrzane',
          startRecord: 'Nagraj film',
          stopRecord: 'Zakończ',
          cancelRecord: 'Anuluj',
          retry: 'Poproś ponownie o dostęp',
          pleaseAllow: {
            title: 'Prośba o udostępnienie aparatu',
            text: 'Zostałeś poproszony przez tę stronę o dostęp do aparatu. ' + 'Aby robić zdjecia, musisz zaakceptować tę prośbę.'
          },
          notFound: {
            title: 'Nie wykryto aparatu.',
            text: 'Wygląda na to, że nie masz podłączonego aparatu do tego urządzenia.'
          }
        },
        preview: {
          unknownName: 'nieznany',
          change: 'Anuluj',
          back: 'Wstecz',
          done: 'Dodaj',
          unknown: {
            title: 'Przesyłanie... Proszę czekać na podgląd.',
            done: 'Omiń podgląd i zaakceptuj.'
          },
          regular: {
            title: 'Dodać ten plik?',
            line1: 'Zamierzasz dodać nowy plik.',
            line2: 'Potwierdź, proszę.'
          },
          image: {
            title: 'Dodać ten obraz?',
            change: 'Anuluj'
          },
          crop: {
            title: 'Przytnij i dodaj ten obraz',
            done: 'Wykonano',
            free: 'wolny'
          },
          video: {
            title: 'Dodać ten film?',
            change: 'Anuluj'
          },
          error: {
            default: {
              title: 'Oops!',
              text: 'Coś poszło nie tak podczas przesyłania.',
              back: 'Spróbuj ponownie'
            },
            image: {
              title: 'Akceptowane są tylko obrazy.',
              text: 'Spróbuj ponownie z innym plikiem.',
              back: 'Wybierz obraz'
            },
            size: {
              title: 'Plik, który wybrałeś, przekracza dopuszczalny rozmiar',
              text: 'Spróbuj ponownie z innym plikiem.'
            },
            loadImage: {
              title: 'Błąd',
              text: 'Nie udało się załadować obrazu'
            }
          },
          multiple: {
            title: 'Wybrałeś %files%',
            question: 'Czy chcesz dodać wszystkie te pliki?',
            tooManyFiles: 'Wybrałeś zbyt wiele plików. Maksimum to %max%.',
            tooFewFiles: 'Wybrałeś %files%. Wymagane jest co najmniej %min%.',
            clear: 'Usuń wszystkie',
            done: 'Wykonano',
            file: {
              preview: 'Zobacz %file%',
              remove: 'Usuń %file%'
            }
          }
        }
      }
    }
  }; // Pluralization rules taken from:
  // https://unicode.org/cldr/charts/34/supplemental/language_plural_rules.html

  var pluralize$b = function pluralize(n) {
    var ref;

    if (n === 1) {
      return 'one';
    } else if ((ref = n % 10) >= 2 && ref <= 4 && (n / 10 % 10 | 0) !== 1) {
      return 'few';
    } else {
      return 'many';
    }
  };

  var pl = {
    translations: translations$b,
    pluralize: pluralize$b
  };

  // #
  // # Please, do not use this locale as a reference for new translations.
  // # It could be outdated or incomplete. Always use the latest English versions:
  // # https://github.com/uploadcare/uploadcare-widget/blob/master/app/assets/javascripts/uploadcare/locale/en.js
  // #
  // # Any fixes are welcome.
  // #
  var translations$a = {
    uploading: 'Fazendo upload... Aguarde.',
    loadingInfo: 'Carregando informações...',
    errors: {
      default: 'Erro',
      baddata: 'Valor incorreto',
      size: 'Arquivo muito grande',
      upload: 'Não foi possível fazer o upload',
      user: 'Upload cancelado',
      info: 'Não foi possível carregar as informações',
      image: 'Apenas imagens são permitidas',
      createGroup: 'Não foi possível criar o grupo de arquivos',
      deleted: 'O arquivo foi excluído'
    },
    draghere: 'Arraste um arquivo aqui',
    file: {
      one: '%1 arquivo',
      other: '%1 arquivos'
    },
    buttons: {
      cancel: 'Cancelar',
      remove: 'Excluir',
      choose: {
        files: {
          one: 'Escolha um arquivo',
          other: 'Escolha arquivos'
        },
        images: {
          one: 'Escolha uma imagem',
          other: 'Escolha imagens'
        }
      }
    },
    dialog: {
      done: 'OK',
      showFiles: 'Mostrar arquivos',
      tabs: {
        names: {
          preview: 'Visualizar',
          file: 'Computador',
          url: 'Link da web'
        },
        file: {
          drag: 'Arraste um arquivo aqui',
          nodrop: 'Faça upload de arquivos do seu computador',
          or: 'ou',
          button: 'Escolha um arquivo do computador',
          also: 'Você também pode escolher arquivos de'
        },
        url: {
          title: 'Arquivos da web',
          line1: 'Faça upload de qualquer arquivo da web.',
          line2: 'Apenas informe o link.',
          input: 'Cole seu link aqui...',
          button: 'Upload'
        },
        camera: {
          capture: 'Tirar uma foto',
          mirror: 'Espelhar',
          startRecord: 'Gravar um vídeo',
          stopRecord: 'Parar',
          cancelRecord: 'Cancelar',
          retry: 'Requisitar permissão novamente',
          pleaseAllow: {
            title: 'Por favor permita o acesso a sua câmera',
            text: 'Você foi solicitado a permitir o acesso à câmera a partir deste site. ' + 'Para tirar fotos com sua câmera, você deve aprovar este pedido.'
          },
          notFoud: {
            title: 'Câmera não detectada',
            text: 'Parece que você não tem uma câmera conectada a este dispositivo'
          }
        },
        preview: {
          unknownName: 'desconhecido',
          change: 'Cancelar',
          back: 'Voltar',
          done: 'Adicionar',
          unknown: {
            title: 'Fazendo upload... Aguarde a visualização.',
            done: 'Pular visualização e aceitar'
          },
          regular: {
            title: 'Adicionar esse arquivo?',
            line1: 'Você está prestes a adicionar o arquivo acima.',
            line2: 'Por favor, confirme.'
          },
          image: {
            title: 'Adicionar essa imagem?',
            change: 'Cancelar'
          },
          crop: {
            title: 'Cortar e adicionar essa imagem',
            done: 'OK',
            free: 'livre'
          },
          error: {
            default: {
              title: 'Oops!',
              text: 'Alguma coisa deu errado durante o upload.',
              back: 'Por favor, tente novamente'
            },
            image: {
              title: 'Apenas arquivos de imagem são aceitos.',
              text: 'Por favor, tente novamente com outro arquivo.',
              back: 'Escolher a imagem'
            },
            size: {
              title: 'O arquivo que você escolheu excede o limite.',
              text: 'Por favor, tente novamente com outro arquivo.'
            },
            loadImage: {
              title: 'Erro',
              text: 'Não foi possível carregar a imagem'
            }
          },
          multiple: {
            title: 'Você escolheu',
            question: 'Você quer adicionar todos esses arquivos?',
            clear: 'Excluir todos',
            done: 'OK'
          }
        }
      }
    }
  }; // Pluralization rules taken from:
  // https://unicode.org/cldr/charts/34/supplemental/language_plural_rules.html

  var pluralize$a = function pluralize(n) {
    if (n === 1) {
      return 'one';
    }

    return 'other';
  };

  var pt = {
    translations: translations$a,
    pluralize: pluralize$a
  };

  // #
  // # Please, do not use this locale as a reference for new translations.
  // # It could be outdated or incomplete. Always use the latest English versions:
  // # https://github.com/uploadcare/uploadcare-widget/blob/master/app/assets/javascripts/uploadcare/locale/en.js
  // #
  // # Any fixes are welcome.
  // #
  var translations$9 = {
    uploading: 'Se încarcă... Răbdare.',
    loadingInfo: 'Info încărcare...',
    errors: {
      default: 'Eroare',
      baddata: 'Valoare incorectă',
      size: 'Fișier prea mare',
      upload: 'Nu pot încărca',
      user: 'Încărcare anulată',
      info: 'Nu pot încărca info',
      image: 'Doar imagini, vă rog',
      createGroup: 'Nu pot crea grup de fișiere',
      deleted: 'Fișierul a fost șters'
    },
    draghere: 'Trage un fișier aici',
    file: {
      one: '%1 fișier',
      other: '%1 fișiere'
    },
    buttons: {
      cancel: 'Anulare',
      remove: 'Șterge',
      choose: {
        files: {
          one: 'Alege un fișier',
          other: 'Alege fișiere'
        },
        images: {
          one: 'Alege o imagine',
          other: 'Alege imagini'
        }
      }
    },
    dialog: {
      close: 'Închide',
      openMenu: 'Deschide meniu',
      done: 'Gata',
      showFiles: 'Arată fișiere',
      tabs: {
        names: {
          'empty-pubkey': 'Bine ai venit',
          preview: 'Previzualizare',
          file: 'Fișiere locale',
          url: 'Link direct',
          camera: 'Camera',
          facebook: 'Facebook',
          dropbox: 'Dropbox',
          gdrive: 'Google Drive',
          gphotos: 'Google Photos',
          instagram: 'Instagram',
          vk: 'VK',
          evernote: 'Evernote',
          box: 'Box',
          onedrive: 'OneDrive',
          flickr: 'Flickr',
          huddle: 'Huddle'
        },
        file: {
          drag: 'trage aici<br>fișierele',
          nodrop: 'Încarcă fișiere din computer',
          cloudsTip: 'Cloud <br>și rețle sociale',
          or: 'sau',
          button: 'Alege un fișier local',
          also: 'sau alege din'
        },
        url: {
          title: 'Fișiere din Web',
          line1: 'Ia orice fișier din Web.',
          line2: 'Trebuie să ai doar linkul.',
          input: 'Lipește linkul aici...',
          button: 'Încarcă'
        },
        camera: {
          title: 'Fișier din camera web',
          capture: 'Fă o fotografie',
          mirror: 'Mirror',
          startRecord: 'Înregistrează un video',
          stopRecord: 'Stop',
          cancelRecord: 'Anulează',
          retry: 'Cere permisiune din nou',
          pleaseAllow: {
            title: 'Te rog sa-mi dai acces la cameră',
            text: 'Ai fost rugat să dai acces la cameră de acest site.<br>' + 'Pentru a putea face fotografii cu camera, trebuie să aprobi această cerere.'
          },
          notFound: {
            title: 'Nicio cameră detectată',
            text: 'Se pare că nu ai nicio cameră atașată acestui device.'
          }
        },
        preview: {
          unknownName: 'necunoscut',
          change: 'Anulează',
          back: 'Înapoi',
          done: 'Adaugă',
          unknown: {
            title: 'Se încarcă... Te rog așteaptă previzualizarea.',
            done: 'Sari peste previzualizare și acceptă'
          },
          regular: {
            title: 'Adaug acest fișier?',
            line1: 'Ești pe punctul de a adăuga fișierul de mai sus.',
            line2: 'Te rog confirmă.'
          },
          image: {
            title: 'Adaug această imagine?',
            change: 'Anulează'
          },
          crop: {
            title: 'Decupează și adaugă aceasta imagine',
            done: 'Gata',
            free: 'gratis'
          },
          video: {
            title: 'Adaug acest video?',
            change: 'anulează'
          },
          error: {
            default: {
              title: 'Oops!',
              text: 'A intervenit o problemă la încărcare.',
              back: 'te rog încearcă din nou'
            },
            image: {
              title: 'Sunt acceptate doar imagini.',
              text: 'Te rog încearcă din nou cu un alt fișier.',
              back: 'Alege imagine'
            },
            size: {
              title: 'Fișierul selectat de tine este prea mare.',
              text: 'Te rog să încerci cu alt fișier.'
            },
            loadImage: {
              title: 'Eroare',
              text: 'Nu pot încărca imaginea'
            }
          },
          multiple: {
            title: 'Ai ales %files%.',
            question: 'Adaug %files%?',
            tooManyFiles: 'Ai ales prea multe fișiere. %max% is maximum.',
            tooFewFiles: 'Ai ales %files%. Minimul este %min% .',
            clear: 'Șterge toate',
            done: 'Adaugă',
            file: {
              preview: 'Previzualizare %file%',
              remove: 'Șterge %file%'
            }
          }
        }
      },
      footer: {
        text: 'powered by',
        link: 'uploadcare'
      }
    }
  }; // Pluralization rules taken from:
  // https://unicode.org/cldr/charts/34/supplemental/language_plural_rules.html

  var pluralize$9 = function pluralize(n) {
    if (n === 1) {
      return 'one';
    }

    return 'other';
  };

  var ro = {
    translations: translations$9,
    pluralize: pluralize$9
  };

  // #
  // # Please, do not use this locale as a reference for new translations.
  // # It could be outdated or incomplete. Always use the latest English versions:
  // # https://github.com/uploadcare/uploadcare-widget/blob/master/app/assets/javascripts/uploadcare/locale/en.js
  // #
  // # Any fixes are welcome.
  // #
  var translations$8 = {
    uploading: 'Идет загрузка',
    loadingInfo: 'Загрузка информации...',
    errors: {
      default: 'Ошибка',
      baddata: 'Некорректные данные',
      size: 'Слишком большой файл',
      upload: 'Ошибка при загрузке',
      user: 'Загрузка прервана',
      info: 'Ошибка при загрузке информации',
      image: 'Разрешены только изображения',
      createGroup: 'Не удалось создать группу файлов',
      deleted: 'Файл удалён'
    },
    draghere: 'Перетащите файл сюда',
    file: {
      one: '%1 файл',
      few: '%1 файла',
      many: '%1 файлов'
    },
    buttons: {
      cancel: 'Отмена',
      remove: 'Удалить',
      choose: {
        files: {
          one: 'Выбрать файл',
          other: 'Выбрать файлы'
        },
        images: {
          one: 'Выбрать изображение',
          other: 'Выбрать изображения'
        }
      }
    },
    dialog: {
      done: 'Готово',
      showFiles: 'Показать файлы',
      tabs: {
        names: {
          preview: 'Предпросмотр',
          'empty-pubkey': 'Приветствие',
          file: 'Локальные файлы',
          vk: 'ВКонтакте',
          url: 'Ссылка',
          camera: 'Камера'
        },
        file: {
          drag: 'Перетащите файл сюда',
          nodrop: 'Загрузка файлов с вашего компьютера',
          cloudsTip: 'Облачные хранилища<br>и социальные сети',
          or: 'или',
          button: 'Выберите локальный файл',
          also: 'Вы также можете загрузить файлы, используя:'
        },
        url: {
          title: 'Файлы с других сайтов',
          line1: 'Загрузите любой файл из сети.',
          line2: '',
          input: 'Укажите здесь ссылку...',
          button: 'Загрузить'
        },
        camera: {
          title: 'Файл из видеокамеры',
          capture: 'Сделать снимок',
          mirror: 'Отразить',
          retry: 'Повторно запросить разрешение',
          pleaseAllow: {
            title: 'Пожалуйста, разрешите доступ к камере',
            text: 'Для того, чтобы сделать снимок, мы запросили разрешение ' + 'на доступ к камере с этого сайта.'
          },
          notFound: {
            title: 'Камера не найдена',
            text: 'Скорее всего камера не подключена или не настроена.'
          }
        },
        preview: {
          unknownName: 'неизвестно',
          change: 'Отмена',
          back: 'Назад',
          done: 'Добавить',
          unknown: {
            title: 'Загрузка... Пожалуйста подождите.',
            done: 'Пропустить предварительный просмотр'
          },
          regular: {
            title: 'Загрузить этот файл?',
            line1: 'Вы собираетесь добавить этот файл:',
            line2: 'Пожалуйста, подтвердите.'
          },
          image: {
            title: 'Добавить это изображение?',
            change: 'Отмена'
          },
          video: {
            title: 'Добавить это видео?',
            change: 'Отмена'
          },
          crop: {
            title: 'Обрезать и добавить это изображение',
            done: 'Готово',
            free: 'произв.'
          },
          error: {
            default: {
              title: 'Ой!',
              text: 'Что-то пошло не так во время загрузки.',
              back: 'Пожалуйста, попробуйте ещё раз'
            },
            image: {
              title: 'Можно загружать только изображения.',
              text: 'Попробуйте загрузить другой файл.',
              back: 'Выберите изображение'
            },
            size: {
              title: 'Размер выбранного файла превышает лимит.',
              text: 'Попробуйте загрузить другой файл.'
            },
            loadImage: {
              title: 'Ошибка',
              text: 'Изображение не удалось загрузить'
            }
          },
          multiple: {
            title: 'Вы выбрали %files%',
            question: 'Добавить все эти файлы?',
            tooManyFiles: 'Вы выбрали слишком много файлов. %max% максимум.',
            tooFewFiles: 'Вы выбрали %files%. Нужно не меньше %min%.',
            clear: 'Удалить все',
            done: 'Добавить',
            file: {
              preview: 'Предпросмотр %file%',
              remove: 'Удалить %file%'
            }
          }
        }
      }
    }
  }; // Pluralization rules taken from:
  // https://unicode.org/cldr/charts/34/supplemental/language_plural_rules.html

  var pluralize$8 = function pluralize(n) {
    if ((n / 10 % 10 | 0) === 1 || n % 10 === 0 || n % 10 > 4) {
      return 'many';
    } else if (n % 10 === 1) {
      return 'one';
    } else {
      return 'few';
    }
  };

  var ru = {
    translations: translations$8,
    pluralize: pluralize$8
  };

  // #
  // # Please, do not use this locale as a reference for new translations.
  // # It could be outdated or incomplete. Always use the latest English versions:
  // # https://github.com/uploadcare/uploadcare-widget/blob/master/app/assets/javascripts/uploadcare/locale/en.js
  // #
  // # Any fixes are welcome.
  // #
  var translations$7 = {
    uploading: 'Nahrávam... Prosím počkajte.',
    loadingInfo: 'Nahrávam informácie...',
    errors: {
      default: 'Chyba',
      baddata: 'Nesprávna hodnota',
      size: 'Súbor je príliš veľký',
      upload: 'Nedá sa nahrať',
      user: 'Nahrávanie bolo zrušené',
      info: 'Informácie sa nedajú nahrať',
      image: 'Povolené sú len obrázky',
      createGroup: 'Nie je možné vytvoriť priečinok',
      deleted: 'Súbor bol odstránený'
    },
    draghere: 'Sem presuňte súbor',
    file: {
      one: '%1 súbor',
      few: '%1 súbory',
      other: '%1 súborov'
    },
    buttons: {
      cancel: 'Zrušiť',
      remove: 'Odstrániť',
      choose: {
        files: {
          one: 'Vyberte súbor',
          other: 'Vyberte súbory'
        },
        images: {
          one: 'Vyberte obrázok',
          other: 'Vyberte obrázky'
        }
      }
    },
    dialog: {
      close: 'Zavrieť',
      openMenu: 'Otvoriť menu',
      done: 'Hotovo',
      showFiles: 'Ukázať súbory',
      tabs: {
        names: {
          'empty-pubkey': 'Vitajte',
          preview: 'Náhľad',
          file: 'Z počítača',
          url: 'Z internetu',
          camera: 'Kamera',
          facebook: 'Facebook',
          dropbox: 'Dropbox',
          gdrive: 'Disk Google',
          gphotos: 'Google Obrázky',
          instagram: 'Instagram',
          vk: 'VK',
          evernote: 'Evernote',
          box: 'Box',
          onedrive: 'OneDrive',
          flickr: 'Flickr',
          huddle: 'Huddle'
        },
        file: {
          drag: 'presuňte a vložte<br>akékoľvek súbory',
          nodrop: 'Nahrajte súbory z vášho&nbsp;počítača',
          cloudsTip: 'Cloud úložiská<br>a sociálne siete',
          or: 'alebo',
          button: 'Vyberte súbor z počítača',
          also: 'alebo vyberte z'
        },
        url: {
          title: 'Súbory z internetu',
          line1: 'Uložte akýkoľvek súbor z internetu.',
          line2: 'Stačí pridať odkaz na neho.',
          input: 'Vložte svoj odkaz sem...',
          button: 'Nahrať'
        },
        camera: {
          title: 'Súbor z webkamery',
          capture: 'Odfotiť',
          mirror: 'Zrkadliť',
          startRecord: 'Natočte video',
          stopRecord: 'Prestať natáčať',
          cancelRecord: 'Zrušiť',
          retry: 'Znovu požiadať o prístup',
          pleaseAllow: {
            title: 'Prosím povoľte prístup k vašej kamere',
            text: 'Boli ste vyzvaní aby ste umožnili tejto stránke prístup ku kamere.<br>' + 'Prístup musíte povolit aby ste mohli fotiť s vašou kamerou.'
          },
          notFound: {
            title: 'Kamera nebola nájdená',
            text: 'Zdá sa, že k tomuto zariadeniu nemáte pripojenú kameru.'
          }
        },
        preview: {
          unknownName: 'neznámy',
          change: 'Zrušiť',
          back: 'Späť',
          done: 'Pridať',
          unknown: {
            title: 'Nahráva sa... Prosím počkajte na náhľad.',
            done: 'Preskočiť náhľad a nahrať'
          },
          regular: {
            title: 'Pridať tento súbor?',
            line1: 'Chystáte sa pridať vyššie uvedený súbor.',
            line2: 'Prosím potvrďte váš výber.'
          },
          image: {
            title: 'Pridať tento obrázok?',
            change: 'Zrušiť'
          },
          crop: {
            title: 'Orezať a pridať túto fotku',
            done: 'Hotovo',
            free: 'obnoviť'
          },
          video: {
            title: 'Pridať toto video?',
            change: 'Zrušiť'
          },
          error: {
            default: {
              title: 'Ejha!',
              text: 'Pri nahrávaní sa vyskytla chyba.',
              back: 'Skúste to znovu'
            },
            image: {
              title: 'Je možné nahrávať len obrázky',
              text: 'Skúste to znovu s iným súborom.',
              back: 'Vybrať obrázok'
            },
            size: {
              title: 'Súbor, ktorý ste vybrali presahuje povolenú veľkosť.',
              text: 'Skúste to znovu s iným súborom.'
            },
            loadImage: {
              title: 'Chyba',
              text: 'Obrázok nie je možné vyhľadať'
            }
          },
          multiple: {
            title: 'Vybrali ste %files%.',
            question: 'Pridať %files%?',
            tooManyFiles: 'Vybrali ste príliš veľa súborov. Maximum je %max%.',
            tooFewFiles: 'Vybrali ste %files%. Potrebných je aspoň %min%.',
            clear: 'Odstrániť všetky',
            done: 'Pridať',
            file: {
              preview: 'Nahliadnuť na %file%',
              remove: 'Odstrániť %file%'
            }
          }
        }
      }
    }
  }; // Pluralization rules taken from:
  // https://unicode.org/cldr/charts/34/supplemental/language_plural_rules.html

  var pluralize$7 = function pluralize(n) {
    if (n === 1) {
      return 'one';
    } else if (n >= 2 && n <= 4) {
      return 'few';
    } else {
      return 'many';
    }
  };

  var sk = {
    translations: translations$7,
    pluralize: pluralize$7
  };

  // #
  // # Please, do not use this locale as a reference for new translations.
  // # It could be outdated or incomplete. Always use the latest English versions:
  // # https://github.com/uploadcare/uploadcare-widget/blob/master/app/assets/javascripts/uploadcare/locale/en.js
  // #
  // # Any fixes are welcome.
  // #
  var translations$6 = {
    uploading: 'Шаљем... Молимо сачекајте.',
    loadingInfo: 'Учитавам информације...',
    errors: {
      default: 'Грешка',
      baddata: 'Погрешна вредност',
      size: 'Фајл је сувише велик',
      upload: 'Не могу да пошаљем',
      user: 'Слање прекинуто',
      info: 'Не могу да учитам информације',
      image: 'Дозвољене су само слике',
      createGroup: 'Не могу да направим групу фајлова',
      deleted: 'Фајл је обрисан'
    },
    draghere: 'Убаците фајл овде',
    file: {
      one: '%1 фајл',
      other: '%1 фајлова'
    },
    buttons: {
      cancel: 'Поништи',
      remove: 'Избаци',
      choose: {
        files: {
          one: 'Изабери фајл',
          other: 'Изабери фајлове'
        },
        images: {
          one: 'Изабери слику',
          other: 'Изабери слике'
        }
      }
    },
    dialog: {
      close: 'Затвори',
      openMenu: 'Отвори мени',
      done: 'Готово',
      showFiles: 'Покажи фајлове',
      tabs: {
        names: {
          'empty-pubkey': 'Добродошли',
          preview: 'Погледај',
          file: 'Локални фајлови',
          url: 'Директан линк',
          camera: 'Камера',
          facebook: 'Фејсбук',
          dropbox: 'Dropbox',
          gdrive: 'Google Drive',
          gphotos: 'Google Photos',
          instagram: 'Инстаграм',
          vk: 'VK',
          evernote: 'Evernote',
          box: 'Box',
          onedrive: 'OneDrive',
          flickr: 'Flickr',
          huddle: 'Huddle'
        },
        file: {
          drag: 'превуци<br>било које фајлове',
          nodrop: 'Пошаљи фајлове са твог&nbsp;компјутера',
          cloudsTip: 'Клауд<br>и социјалне мреже',
          or: 'или',
          button: 'Изабери локални фајл',
          also: 'или изабери'
        },
        url: {
          title: 'Фајлове са Интернета',
          line1: 'Изабери било који фајл са Интернета.',
          line2: 'Само убаци линк.',
          input: 'Убаци линк овде...',
          button: 'Пошаљи'
        },
        camera: {
          title: 'Фајл са камере',
          capture: 'Усликај',
          mirror: 'Огледало',
          startRecord: 'Сними видео',
          stopRecord: 'Заустави',
          cancelRecord: 'Поништи',
          retry: 'Тражи дозволу поново',
          pleaseAllow: {
            title: 'Молимо вас да дозволите приступ вашој камери',
            text: 'Упитани сте да дозволите приступ вашој камери са овог сајта.<br>' + 'Уколико желите да сликате, морате одобрити овај захтев.'
          },
          notFound: {
            title: 'Камера није препозната',
            text: 'Изгледа да немате камеру на овом уређају.'
          }
        },
        preview: {
          unknownName: 'непознато',
          change: 'Поништи',
          back: 'Назад',
          done: 'Додај',
          unknown: {
            title: 'Шаљем... Сачекајте за приказ.',
            done: 'Прескочи приказ и прихвати'
          },
          regular: {
            title: 'Додај овај фајл?',
            line1: 'Управо ћете додати овај фајл изнад.',
            line2: 'Молимо потврдите.'
          },
          image: {
            title: 'Додај ову слику?',
            change: 'Поништи'
          },
          crop: {
            title: 'Кропуј и додај ову слику',
            done: 'Урађено',
            free: 'слободно'
          },
          video: {
            title: 'Додај овај видео?',
            change: 'Поништи'
          },
          error: {
            default: {
              title: 'Ооопс!',
              text: 'Нешто је искрсло у току слања.',
              back: 'Молимо покушајте поново'
            },
            image: {
              title: 'Дозвљене су само слике.',
              text: 'Молимо покушајте са другим фајлом.',
              back: 'Изабери слику'
            },
            size: {
              title: 'Фајл који сте изабрали премашује лимит.',
              text: 'Молимо покушајте са другим фајлом.'
            },
            loadImage: {
              title: 'Грешка',
              text: 'Не могу да учитам слику'
            }
          },
          multiple: {
            title: 'Изабрали сте %files%.',
            question: 'Додај %files%?',
            tooManyFiles: 'Изабрали сте превише фајлова. %max% је максимално.',
            tooFewFiles: 'Изабрали сте %files%. Морате најмање %min% фајла.',
            clear: 'Избаци све',
            done: 'Додај',
            file: {
              preview: 'Прегледај %file%',
              remove: 'Избаци %file%'
            }
          }
        }
      },
      footer: {
        text: 'направио',
        link: 'uploadcare'
      }
    }
  }; // Pluralization rules taken from:
  // https://unicode.org/cldr/charts/34/supplemental/language_plural_rules.html

  var pluralize$6 = function pluralize(n) {
    if (n === 1) {
      return 'one';
    }

    return 'other';
  };

  var sr = {
    translations: translations$6,
    pluralize: pluralize$6
  };

  // #
  // # Please, do not use this locale as a reference for new translations.
  // # It could be outdated or incomplete. Always use the latest English versions:
  // # https://github.com/uploadcare/uploadcare-widget/blob/master/app/assets/javascripts/uploadcare/locale/en.js
  // #
  // # Any fixes are welcome.
  // #
  var translations$5 = {
    uploading: 'Laddar... Var god vänta.',
    loadingInfo: 'Laddar info...',
    errors: {
      default: 'Fel',
      baddata: 'Felaktigt värde',
      size: 'Filen är för stor',
      upload: 'Kan inte ladda upp',
      user: 'Uppladdning avbruten',
      info: 'Kan inte ladda informationen',
      image: 'Endast bilder tillåtna',
      createGroup: 'Kan inte skapa filgrupp',
      deleted: 'Fil raderad'
    },
    draghere: 'Dra filen hit',
    file: {
      one: '%1 fil',
      other: '%1 filer'
    },
    buttons: {
      cancel: 'Avbryt',
      remove: 'Ta bort',
      choose: {
        files: {
          one: 'Välj fil',
          other: 'Välj filer'
        },
        images: {
          one: 'Välj en bild',
          other: 'Välj bilder'
        }
      }
    },
    dialog: {
      done: 'Klar',
      showFiles: 'Visa filer',
      tabs: {
        names: {
          'empty-pubkey': 'Välkommen',
          preview: 'Förhandsgranskning',
          file: 'Lokala filer',
          url: 'Direkta länkar',
          camera: 'Kamera'
        },
        file: {
          drag: 'Släpp filen här',
          nodrop: 'Ladda upp filer från din dator',
          cloudsTip: 'Molnlagring<br>och sociala nätverk',
          or: 'eller',
          button: 'Välj en lokal fil',
          also: 'Du kan också välja den från'
        },
        url: {
          title: 'Filer från webben',
          line1: 'Välj en fil från en webbadress.',
          line2: 'Ange bara länken till filen.',
          input: 'Klistra in din länk här...',
          button: 'Ladda upp'
        },
        camera: {
          capture: 'Ta ett foto',
          mirror: 'Spegel',
          retry: 'Begär tillstånd igen',
          pleaseAllow: {
            title: 'Vänligen ge tillgång till din kamera',
            text: 'Du har uppmanats att tillåta att denna webbplats får tillgång till din kamera.' + 'För att ta bilder med din kamera måste du godkänna denna begäran.'
          },
          notFound: {
            title: 'Ingen kamera hittades',
            text: 'Det verkar som att du inte har någon kamera ansluten till denna enheten.'
          }
        },
        preview: {
          unknownName: 'okänd',
          change: 'Avbryt',
          back: 'Tillbaka',
          done: 'Lägg till',
          unknown: {
            title: 'Laddar... Vänligen vänta på förhandsgranskning.',
            done: 'Skippa förhandsgranskning och acceptera'
          },
          regular: {
            title: 'Lägg till denna filen?',
            line1: 'Du håller på att lägga till filen ovan.',
            line2: 'Vänligen bekräfta.'
          },
          image: {
            title: 'Lägg till denna bilden?',
            change: 'Avbryt'
          },
          crop: {
            title: 'Beskär och lägg till denna bild',
            done: 'Klar',
            free: 'fri'
          },
          error: {
            default: {
              title: 'Oops!',
              text: 'Någonting gick fel under uppladdningen.',
              back: 'Vänligen försök igen'
            },
            image: {
              title: 'Endast bildfiler accepteras.',
              text: 'Vänligen försök igen med en annan fil.',
              back: 'Välj bild'
            },
            size: {
              title: 'Filen du har valt är för stor.',
              text: 'Vänligen försök igen med en annan fil.'
            },
            loadImage: {
              title: 'Fel',
              text: 'Kan inte ladda bild'
            }
          },
          multiple: {
            title: 'Du har valt %files%',
            question: 'Vill du lägga till alla dessa filer?',
            tooManyFiles: 'Du har valt för många filer. %max% är max.',
            tooFewFiles: 'Du har valt %files%. Minst %min% krävs.',
            clear: 'Ta bort alla',
            done: 'Klar'
          }
        }
      }
    }
  }; // Pluralization rules taken from:
  // https://unicode.org/cldr/charts/34/supplemental/language_plural_rules.html

  var pluralize$5 = function pluralize(n) {
    if (n === 1) {
      return 'one';
    }

    return 'other';
  };

  var sv = {
    translations: translations$5,
    pluralize: pluralize$5
  };

  // #
  // # Please, do not use this locale as a reference for new translations.
  // # It could be outdated or incomplete. Always use the latest English versions:
  // # https://github.com/uploadcare/uploadcare-widget/blob/master/app/assets/javascripts/uploadcare/locale/en.js
  // #
  // # Any fixes are welcome.
  // #
  var translations$4 = {
    uploading: 'Yükleniyor... Lütfen bekleyin.',
    loadingInfo: 'Bilgiler yükleniyor...',
    errors: {
      default: 'Hata',
      baddata: 'Geçersiz değer',
      size: 'Dosya çok büyük',
      upload: 'Yüklenemedi',
      user: 'Yükleme iptal edildi',
      info: 'Bilgiler getirilemedi',
      image: 'Sadece resim dosyası yüklenebilir',
      createGroup: 'Dosya grubu yaratılamıyor',
      deleted: 'Dosya silinmiş'
    },
    draghere: 'Buraya bir dosya bırakın',
    file: {
      other: '%1 dosya'
    },
    buttons: {
      cancel: 'İptal',
      remove: 'Kaldır',
      choose: {
        files: {
          one: 'Dosya Seçin',
          other: 'Dosya Seçin'
        },
        images: {
          one: 'Resim Dosyası Seçin',
          other: 'Resim Dosyası Seçin'
        }
      }
    },
    dialog: {
      done: 'Bitti',
      showFiles: 'Dosyaları Göster',
      tabs: {
        names: {
          'empty-pubkey': 'Hoş geldiniz',
          preview: 'Önizleme',
          file: 'Bilgisayar',
          url: 'Dış Bağlantılar',
          camera: 'Kamera'
        },
        file: {
          drag: 'Buraya bir dosya bırakın',
          nodrop: 'Bilgisayarınızdan dosya yükleyin',
          or: 'ya da',
          button: 'Bilgisayardan bir dosya seç',
          also: 'Diğer yükleme seçenekleri',
          cloudsTip: 'Bulut depolamalar<br>ve sosyal hizmetler'
        },
        url: {
          title: 'Webden dosyalar',
          line1: 'Webden herhangi bir dosya seçin.',
          line2: 'Dosya bağlantısını sağlayın.',
          input: 'Bağlantınızı buraya yapıştırın...',
          button: 'Yükle'
        },
        camera: {
          capture: 'Fotoğraf çek',
          mirror: 'Ayna',
          retry: 'Tekrar izin iste',
          pleaseAllow: {
            title: 'Lütfen kameranıza erişilmesine izin verin',
            text: 'Bu siteden kamera erişimine izin vermeniz talep ediliyor. Kameranızla fotoğraf çekmek için bu isteği onaylamanız gerekmektedir.'
          },
          notFound: {
            title: 'Kamera algılanamadı',
            text: 'Bu cihaza kamera bağlantısının olmadığı görünüyor.'
          }
        },
        preview: {
          unknownName: 'bilinmeyen',
          change: 'İptal',
          back: 'Geri',
          done: 'Ekle',
          unknown: {
            title: 'Yükleniyor... Önizleme için lütfen bekleyin.',
            done: 'Önizlemeyi geç ve kabul et'
          },
          regular: {
            title: 'Bu dosya eklensin mi?',
            line1: 'Yukarıdaki dosyayı eklemek üzeresiniz.',
            line2: 'Lütfen onaylayın.'
          },
          image: {
            title: 'Bu görsel eklensin mi?',
            change: 'İptal'
          },
          crop: {
            title: 'Bu görseli kes ve ekle',
            done: 'Bitti'
          },
          error: {
            default: {
              title: 'Aman!',
              text: 'Yükleme sırasında bir hata oluştu.',
              back: 'Lütfen tekrar deneyin.'
            },
            image: {
              title: 'Sadece resim dosyaları kabul edilmektedir.',
              text: 'Lütfen başka bir dosya ile tekrar deneyin.',
              back: 'Resim dosyası seç'
            },
            size: {
              title: 'Seçtiğiniz dosya limitleri aşıyor.',
              text: 'Lütfen başka bir dosya ile tekrar deneyin.'
            },
            loadImage: {
              title: 'Hata',
              text: 'Resim dosyası yüklenemedi'
            }
          },
          multiple: {
            title: '%files% dosya seçtiniz',
            question: 'Bu dosyaların hepsini eklemek istiyor musunuz?',
            tooManyFiles: 'Fazla sayıda dosya seçtiniz, en fazla %max% dosya olabilir.',
            tooFewFiles: '%files% dosya seçtiniz, en az %min% dosya olmalıdır.',
            clear: 'Hepsini kaldır',
            done: 'Bitti'
          }
        }
      }
    }
  };

  var pluralize$4 = function pluralize(n) {
    return 'other';
  };

  var tr = {
    translations: translations$4,
    pluralize: pluralize$4
  };

  // #
  // # Please, do not use this locale as a reference for new translations.
  // # It could be outdated or incomplete. Always use the latest English versions:
  // # https://github.com/uploadcare/uploadcare-widget/blob/master/app/assets/javascripts/uploadcare/locale/en.js
  // #
  // # Any fixes are welcome.
  // #
  var translations$3 = {
    uploading: 'Завантаження... Зачекайте.',
    loadingInfo: 'Завантаження інформації...',
    errors: {
      default: 'Помилка',
      baddata: 'Неправильне значення',
      size: 'Завеликий файл',
      upload: 'Помилка завантаження',
      user: 'Завантаження скасовано',
      info: 'Помилка завантаження інформації',
      image: 'Дозволені лише зображення',
      createGroup: 'Неможливо створити групу файлів',
      deleted: 'Файл видалено'
    },
    draghere: 'Перетягніть файл сюди',
    file: {
      one: '%1 файл',
      few: '%1 файли',
      many: '%1 файлів'
    },
    buttons: {
      cancel: 'Скасувати',
      remove: 'Видалити',
      choose: {
        files: {
          one: 'Вибрати файл',
          other: 'Вибрати файли'
        },
        images: {
          one: 'Вибрати зображення',
          other: 'Вибрати зображення'
        }
      }
    },
    dialog: {
      close: 'Закрити',
      openMenu: 'Відкрити меню',
      done: 'Готово',
      showFiles: 'Показати файли',
      tabs: {
        names: {
          'empty-pubkey': 'Вітання',
          preview: 'Попередній перегляд',
          file: 'Локальні файли',
          url: 'Пряме посилання',
          camera: 'Камера'
        },
        file: {
          drag: 'Перетягніть<br>будь-які файли',
          nodrop: "Завантаження файлів з вашого комп'ютера",
          cloudsTip: 'Хмарні сховища<br>та соціальні мережі',
          or: 'або',
          button: 'Обрати локальний файл',
          also: 'або обрати з'
        },
        url: {
          title: 'Файли з інших сайтів',
          line1: 'Візьміть будь-який файл з Інтернету..',
          line2: 'Вкажіть тут посилання.',
          input: 'Вставте ваше посилання тут...',
          button: 'Завантажити'
        },
        camera: {
          title: 'Файл із відеокамери',
          capture: 'Зробити знімок',
          mirror: 'Віддзеркалити',
          startRecord: 'Записати відео',
          stopRecord: 'Стоп',
          cancelRecord: 'Скасувати',
          retry: 'Повторний запит дозволу',
          pleaseAllow: {
            title: 'Будь ласка, надайте доступ до вашої камери',
            text: 'Вам буде запропоновано дозволити доступ до камери з цього сайту.<br>' + 'Для того, щоб фотографувати за допомогою камери, ви повинні схвалити цей запит.'
          },
          notFound: {
            title: 'Камера не виявлена',
            text: 'Схоже, у вас немає камери, підключеної до цього пристрою.'
          }
        },
        preview: {
          unknownName: 'невідомо',
          change: 'Скасувати',
          back: 'Назад',
          done: 'Додати',
          unknown: {
            title: 'Завантаження... Зачекайте на попередній перегляд.',
            done: 'Пропустити перегляд і прийняти'
          },
          regular: {
            title: 'Додати цей файл?',
            line1: 'Ви збираєтеся додати файл вище.',
            line2: 'Будь ласка, підтвердіть.'
          },
          image: {
            title: 'Додати це зображення?',
            change: 'Скасувати'
          },
          crop: {
            title: 'Обрізати та додати це зображення',
            done: 'Готово',
            free: 'довільно'
          },
          video: {
            title: 'Додати це відео?',
            change: 'Скасувати'
          },
          error: {
            default: {
              title: 'Ой!',
              text: 'Під час завантаження сталася помилка.',
              back: 'Будь ласка, спробуйте ще раз'
            },
            image: {
              title: 'Приймаються лише файли зображень.',
              text: 'Повторіть спробу з іншим файлом.',
              back: 'Виберіть зображення'
            },
            size: {
              title: 'Розмір вибраного файлу перевищує ліміт.',
              text: 'Повторіть спробу з іншим файлом.'
            },
            loadImage: {
              title: 'Помилка',
              text: 'Помилка завантаження зображення'
            }
          },
          multiple: {
            title: 'Ви вибрали %files%.',
            question: 'Додати %files%?',
            tooManyFiles: 'Ви вибрали забагато файлів. Максимальна кількість %max%.',
            tooFewFiles: 'Ви вибрали %files%. Мінімальна кількість %min%.',
            clear: 'Видалити все',
            done: 'Додати',
            file: {
              preview: 'Попередній перегляд %file%',
              remove: 'Видалити %file%'
            }
          }
        }
      },
      footer: {
        text: 'працює на',
        link: 'uploadcare'
      }
    }
  }; // Pluralization rules taken from:
  // https://unicode.org/cldr/charts/34/supplemental/language_plural_rules.html

  var pluralize$3 = function pluralize(n) {
    if ((n / 10 % 10 | 0) === 1 || n % 10 === 0 || n % 10 > 4) {
      return 'many';
    } else if (n % 10 === 1) {
      return 'one';
    } else {
      return 'few';
    }
  };

  var uk = {
    translations: translations$3,
    pluralize: pluralize$3
  };

  // #
  // # Please, do not use this locale as a reference for new translations.
  // # It could be outdated or incomplete. Always use the latest English versions:
  // # https://github.com/uploadcare/uploadcare-widget/blob/master/app/assets/javascripts/uploadcare/locale/en.js
  // #
  // # Any fixes are welcome.
  // #
  var translations$2 = {
    loadingInfo: 'Đang tải thông tin...',
    errors: {
      default: 'Lỗi',
      baddata: 'Giá trị không đúng',
      size: 'Tệp quá lớn',
      upload: 'Không thể tải lên',
      user: 'Tải lên bị hủy',
      info: 'Không thể nạp thông tin',
      image: 'Chỉ cho phép các hình ảnh',
      createGroup: 'Không thể tạo nhóm tệp',
      deleted: 'Tệp đã bị xóa'
    },
    uploading: 'Đang tải lên... Vui lòng chờ đợi.',
    draghere: 'Thả một tệp vào đây',
    file: {
      other: '%1 tệp'
    },
    buttons: {
      cancel: 'Hủy',
      remove: 'Xóa',
      choose: {
        files: {
          other: 'Lựa chọn các tệp'
        },
        images: {
          other: 'Lựa chọn hình ảnh'
        }
      }
    },
    dialog: {
      close: 'Đóng',
      openMenu: 'Mở menu',
      done: 'Xong',
      showFiles: 'Hiển thị tệp',
      tabs: {
        names: {
          'empty-pubkey': 'Chào mừng',
          preview: 'Xem trước',
          file: 'Các tệp trên máy',
          url: 'Liên kết tr.tiếp',
          camera: 'Máy ảnh',
          facebook: 'Facebook',
          dropbox: 'Dropbox',
          gdrive: 'Google Drive',
          instagram: 'Instagram',
          gphotos: 'Google Photos',
          vk: 'VK',
          evernote: 'Evernote',
          box: 'Box',
          onedrive: 'OneDrive',
          flickr: 'Flickr',
          huddle: 'Huddle'
        },
        file: {
          drag: 'kéo & thả<br>bất kỳ tệp nào',
          nodrop: 'Tải lên các tệp từ &nbsp;máy tính của bạn',
          cloudsTip: 'Lưu trữ Đám mây<br>và các mạng xã hội',
          or: 'hoặc',
          button: 'Lựa chọn một tệp trên máy',
          also: 'hoặc lựa chọn từ'
        },
        url: {
          title: 'Các tệp trên Web',
          line1: 'Chọn bất từ tệp nào từ web.',
          line2: 'Chỉ cần cung cấp liên kết.',
          input: 'Dán liên kết của bạn xuống đây...',
          button: 'Tải lên'
        },
        camera: {
          title: 'Tệp từ web cam',
          capture: 'Chụp một bức ảnh',
          mirror: 'Gương',
          startRecord: 'Quay một video',
          cancelRecord: 'Hủy',
          stopRecord: 'Dừng',
          retry: 'Yêu cầu cấp phép lần nữa',
          pleaseAllow: {
            text: 'Bạn đã được nhắc nhở để cho phép truy cập vào camera từ trang này.<br>Để có thể chụp ảnh với camera, bạn phải chấp thuận yêu cầu này.',
            title: 'Vui lòng cho phép truy cập tới camera của bạn'
          },
          notFound: {
            title: 'Không tìm thấy camera nào',
            text: 'Có vẻ như bạn không có camera nào nối với thiết bị này.'
          }
        },
        preview: {
          unknownName: 'vô danh',
          change: 'Hủy',
          back: 'Quay lại',
          done: 'Thêm',
          unknown: {
            title: 'Đang tải lên...Vui lòng đợi để xem trước.',
            done: 'Bỏ qua và chấp nhận'
          },
          regular: {
            title: 'Thêm tệp này?',
            line1: 'Bạn dự định thêm tệp ở trên.',
            line2: 'Vui lòng chấp thuận.'
          },
          image: {
            title: 'Thêm hình ảnh này?',
            change: 'Hủy'
          },
          crop: {
            title: 'Cắt và thêm ảnh này',
            done: 'Xong',
            free: 'miễn phí'
          },
          video: {
            title: 'Thêm video này?',
            change: 'Hủy'
          },
          error: {
            default: {
              title: 'Ồ!',
              back: 'Vui lòng thử lại',
              text: 'Có lỗi gì đó trong quá trình tải lên.'
            },
            image: {
              title: 'Chỉ chấp thuận các tệp hình ảnh.',
              text: 'Vui lòng thử lại với một tệp mới.',
              back: 'Lựa chọn hình ảnh'
            },
            size: {
              title: 'Tệp bạn đã lựa chọn vượt quá giới hạn',
              text: 'Vui lòng thử lại với một tệp khác.'
            },
            loadImage: {
              title: 'Lỗi',
              text: 'Không thể tải hình ảnh'
            }
          },
          multiple: {
            title: 'Bạn đã lựa chọn %files%',
            question: 'Thêm %files%?',
            tooManyFiles: 'Bạn đã lựa chọn quá nhiều tệp. %max% là tối đa.',
            tooFewFiles: 'Bạn đã lựa chọn %files%. Ít nhất cần %min%',
            clear: 'Xoá Tất cả',
            file: {
              preview: 'Xem trước %file%',
              remove: 'Xóa %file%'
            },
            done: 'Thêm'
          }
        }
      },
      footer: {
        text: 'được hỗ trợ bởi',
        link: 'uploadcare'
      }
    }
  }; // Pluralization rules taken from:
  // https://unicode.org/cldr/charts/34/supplemental/language_plural_rules.html

  var pluralize$2 = function pluralize(n) {
    return 'other';
  };

  var vi = {
    translations: translations$2,
    pluralize: pluralize$2
  };

  // #
  // # Please, do not use this locale as a reference for new translations.
  // # It could be outdated or incomplete. Always use the latest English versions:
  // # https://github.com/uploadcare/uploadcare-widget/blob/master/app/assets/javascripts/uploadcare/locale/en.js
  // #
  // # Any fixes are welcome.
  // #
  var translations$1 = {
    uploading: '上傳中...請等待',
    loadingInfo: '正在讀取資訊...',
    errors: {
      default: '錯誤',
      baddata: '錯誤資料',
      size: '檔案太大',
      upload: '無法上傳',
      user: '上傳被取消',
      info: '無法讀取資訊',
      image: '只允許圖片檔案',
      createGroup: '無法建立檔案群組',
      deleted: '檔案已被刪除'
    },
    draghere: '拖放檔案到這裡',
    file: {
      other: '%1 個檔案'
    },
    buttons: {
      cancel: '取消',
      remove: '刪除',
      choose: {
        files: {
          one: '選擇檔案',
          other: '選擇檔案'
        },
        images: {
          one: '選擇圖片',
          other: '選擇圖片'
        }
      }
    },
    dialog: {
      done: '完成',
      showFiles: '顯示檔案',
      tabs: {
        names: {
          'empty-pubkey': '歡迎',
          preview: '預覽',
          file: '從本機上傳',
          url: '任意圖片連結',
          camera: '相機'
        },
        file: {
          drag: '拖放檔案到這裡',
          nodrop: '從你的本機中上傳',
          cloudsTip: '雲端硬碟<br>與社群網站',
          or: '或者',
          button: '從本機中選取檔案',
          also: '你也可以選自'
        },
        url: {
          title: '來自網際網路的檔案',
          line1: '從網際網路選取檔案',
          line2: '只需提供連結',
          input: '將連結複製至此...',
          button: '上傳'
        },
        camera: {
          capture: '拍照',
          mirror: '鏡像',
          retry: '重新取得相機權限',
          pleaseAllow: {
            title: '請允許使存取您的相機',
            text: '你一直在提示允許來自這個網站的訪問攝像頭。' + '為了拍照用你的相機，你必須批准這一請求。'
          },
          notFound: {
            title: '沒有找到相機',
            text: '看起來你有沒有將連接相機。'
          }
        },
        preview: {
          unknownName: '未知',
          change: '取消',
          back: '返回',
          done: '加入',
          unknown: {
            title: '上傳中...請等待預覽',
            done: '跳過預覽，直接接受'
          },
          regular: {
            title: '加入這個檔案？',
            line1: '你將加入上面的檔案。',
            line2: '請確認。'
          },
          image: {
            title: '加入這個圖片？',
            change: '取消'
          },
          crop: {
            title: '裁切並加入這個圖片',
            done: '完成',
            free: '自由裁切'
          },
          error: {
            default: {
              title: '錯誤！',
              text: '上傳過程中出錯。',
              back: '請重試'
            },
            image: {
              title: '只允許上傳圖片檔案。',
              text: '請選擇其他檔案重新上傳。',
              back: '選擇圖片'
            },
            size: {
              title: '你選取的檔案超過了100MB的上限',
              text: '請用另一個檔案再試一次。'
            },
            loadImage: {
              title: '錯誤',
              text: '無法讀取圖片'
            }
          },
          multiple: {
            title: '你已經選擇 %files%',
            question: '你要加入所有檔案嗎？',
            tooManyFiles: '你選了太多的檔案. 最多可選擇%max%. 請刪除一些。',
            tooFewFiles: '你所選擇的檔案 %files%. 至少要 %min% .',
            clear: '清空',
            done: '完成'
          }
        }
      }
    }
  }; // Pluralization rules taken from:
  // https://unicode.org/cldr/charts/34/supplemental/language_plural_rules.html

  var pluralize$1 = function pluralize(n) {
    return 'other';
  };

  var zhTW = {
    translations: translations$1,
    pluralize: pluralize$1
  };

  // #
  // # Please, do not use this locale as a reference for new translations.
  // # It could be outdated or incomplete. Always use the latest English versions:
  // # https://github.com/uploadcare/uploadcare-widget/blob/master/app/assets/javascripts/uploadcare/locale/en.js
  // #
  // # Any fixes are welcome.
  // #
  var translations = {
    uploading: '上传中...请等待',
    loadingInfo: '正在读取信息...',
    errors: {
      default: '错误',
      baddata: '错误数据',
      size: '文件太大',
      upload: '无法上传',
      user: '上传被取消',
      info: '无法读取信息',
      image: '只允许图形文件',
      createGroup: '无法建立文件组',
      deleted: '文件已被删除'
    },
    draghere: '拖放文件到这里',
    file: {
      other: '%1 个文件'
    },
    buttons: {
      cancel: '取消',
      remove: '删除'
    },
    dialog: {
      done: '完成',
      showFiles: '显示文件',
      tabs: {
        names: {
          url: '任意图片链接'
        },
        file: {
          drag: '拖放文件到这里',
          nodrop: '从你的电脑中上传',
          or: '或者',
          button: '从电脑中选取文件',
          also: '你也可以选自'
        },
        url: {
          title: '来自互联网的文件',
          line1: '从互联网选取文件',
          line2: '只需提供链接',
          input: '将链接拷贝至此...',
          button: '上传'
        },
        preview: {
          unknownName: '未知',
          change: '取消',
          back: '返回',
          done: '添加',
          unknown: {
            title: '上传中...请等待预览',
            done: '跳过预览，直接接受'
          },
          regular: {
            title: '添加这个文件?',
            line1: '你将添加上面的文件。',
            line2: '请确认。'
          },
          image: {
            title: '添加这个图片?',
            change: '取消'
          },
          crop: {
            title: '剪裁并添加这个图片',
            done: '完成'
          },
          error: {
            default: {
              title: '错误!',
              text: '上传过程中出错。',
              back: '请重试'
            },
            image: {
              title: '只允许上传图片文件。',
              text: '请选择其他文件重新上传。',
              back: '选择图片'
            },
            size: {
              title: '你选取的文件超过了100MB的上限',
              text: '请用另一个文件再试一次。'
            },
            loadImage: {
              title: '错误',
              text: '无法读取图片'
            }
          },
          multiple: {
            title: '你已经选择 %files%',
            question: '你要添加所有文件吗？',
            tooManyFiles: '你选了太多的文件. 最多可选择%max%. 请删除一些。',
            clear: '清空',
            done: '完成'
          }
        }
      }
    }
  }; // Pluralization rules taken from:
  // https://unicode.org/cldr/charts/34/supplemental/language_plural_rules.html

  var pluralize = function pluralize(n) {
    return 'other';
  };

  var zh = {
    translations: translations,
    pluralize: pluralize
  };

  var locales = {
    ar: ar,
    az: az,
    ca: ca,
    cs: cs,
    da: da,
    de: de,
    el: el,
    en: en,
    es: es,
    et: et,
    fr: fr,
    he: he,
    is: is,
    it: it,
    ja: ja,
    ko: ko,
    lv: lv,
    nb: nb,
    nl: nl,
    pl: pl,
    pt: pt,
    ro: ro,
    ru: ru,
    sk: sk,
    sr: sr,
    sv: sv,
    tr: tr,
    uk: uk,
    vi: vi,
    zhTW: zhTW,
    zh: zh
  };

  var currentLocale = null;
  var locale = {
    translations: Object.keys(locales).reduce(function (translations, lang) {
      translations[lang] = locales[lang].translations;
      return translations;
    }, {}),
    pluralize: Object.keys(locales).reduce(function (pluralize, lang) {
      pluralize[lang] = locales[lang].pluralize;
      return pluralize;
    }, {}),
    // Backdoor for widget constructor
    rebuild: function rebuild(settings) {
      currentLocale = null;
      return _build(settings);
    },
    t: function t(key, n) {
      var locale, ref, value;
      locale = _build();
      value = translate(key, locale.translations);

      if (value == null && locale.lang !== defaults.lang) {
        locale = defaults;
        value = translate(key, locale.translations);
      }

      if (n != null) {
        if (locale.pluralize != null) {
          value = ((ref = value[locale.pluralize(n)]) != null ? ref.replace('%1', n) : undefined) || n;
        } else {
          value = '';
        }
      }

      return value || '';
    }
  };
  var defaultLang = 'en';
  var defaults = {
    lang: defaultLang,
    translations: locales[defaultLang].translations,
    pluralize: locales[defaultLang].pluralize
  };

  var _build = function _build(stgs) {
    if (!currentLocale) {
      var settings = build(stgs);
      var lang = settings.locale || defaults.lang;
      var translations = $__default["default"].extend(true, {}, locale.translations[lang], settings.localeTranslations);
      var pluralize = $__default["default"].isFunction(settings.localePluralize) ? settings.localePluralize : locale.pluralize[lang];
      currentLocale = {
        lang: lang,
        translations: translations,
        pluralize: pluralize
      };
    }

    return currentLocale;
  };

  var translate = function translate(key, node) {
    var path = key.split('.');

    for (var i = 0, len = path.length; i < len; i++) {
      var subkey = path[i];

      if (node == null) {
        return null;
      }

      node = node[subkey];
    }

    return node;
  };

  var FileGroup$1 = /*#__PURE__*/function () {
    function FileGroup(files, settings) {
      var _this = this;

      _classCallCheck(this, FileGroup);

      this.__uuid = null;
      this.settings = build(settings);
      this.__fileColl = new CollectionOfPromises(files);
      this.__allFilesDf = $__default["default"].when.apply($__default["default"], _toConsumableArray(this.files()));

      this.__fileInfosDf = function () {
        var file;

        files = function () {
          var j, len, ref, results;
          ref = this.files();
          results = [];

          for (j = 0, len = ref.length; j < len; j++) {
            file = ref[j];
            results.push( // eslint-disable-next-line n/handle-callback-err
            file.then(null, function (err, info) {
              return $__default["default"].when(info);
            }));
          }

          return results;
        }.call(_this);

        return $__default["default"].when.apply($__default["default"], _toConsumableArray(files));
      }();

      this.__createGroupDf = $__default["default"].Deferred();

      this.__initApiDeferred();
    }

    _createClass(FileGroup, [{
      key: "files",
      value: function files() {
        return this.__fileColl.get();
      }
    }, {
      key: "__save",
      value: function __save() {
        var _this2 = this;

        if (!this.__saved) {
          this.__saved = true;
          return this.__allFilesDf.done(function () {
            return _this2.__createGroup().done(function (groupInfo) {
              _this2.__uuid = groupInfo.id;
              return _this2.__buildInfo(function (info) {
                if (_this2.settings.imagesOnly && !info.isImage) {
                  return _this2.__createGroupDf.reject('image', info);
                } else {
                  return _this2.__createGroupDf.resolve(info);
                }
              });
            }).fail(function (error) {
              return _this2.__createGroupDf.reject('createGroup', error);
            });
          });
        }
      } // returns object similar to File object

    }, {
      key: "promise",
      value: function promise() {
        this.__save();

        return this.__apiDf.promise();
      }
    }, {
      key: "__initApiDeferred",
      value: function __initApiDeferred() {
        var _this3 = this;

        var notify, reject, resolve;
        this.__apiDf = $__default["default"].Deferred();
        this.__progressState = 'uploading';

        reject = function reject(err) {
          return _this3.__buildInfo(function (info) {
            return _this3.__apiDf.reject(err, info);
          });
        };

        resolve = function resolve(info) {
          return _this3.__apiDf.resolve(info);
        };

        notify = function notify() {
          return _this3.__apiDf.notify(_this3.__progressInfo());
        };

        notify();

        this.__fileColl.onAnyProgress(notify);

        this.__allFilesDf.done(function () {
          _this3.__progressState = 'uploaded';
          return notify();
        }).fail(reject);

        return this.__createGroupDf.done(function (info) {
          _this3.__progressState = 'ready';
          notify();
          return resolve(info);
        }).fail(reject);
      }
    }, {
      key: "__progressInfo",
      value: function __progressInfo() {
        var j, len, progress, progressInfo, progressInfos;
        progress = 0;
        progressInfos = this.__fileColl.lastProgresses();

        for (j = 0, len = progressInfos.length; j < len; j++) {
          progressInfo = progressInfos[j];
          progress += ((progressInfo != null ? progressInfo.progress : undefined) || 0) / progressInfos.length;
        }

        return {
          state: this.__progressState,
          uploadProgress: progress,
          progress: this.__progressState === 'ready' ? 1 : progress * 0.9
        };
      }
    }, {
      key: "__buildInfo",
      value: function __buildInfo(cb) {
        var info;
        info = {
          uuid: this.__uuid,
          cdnUrl: this.__uuid ? "".concat(this.settings.cdnBase, "/").concat(this.__uuid, "/") : null,
          name: locale.t('file', this.__fileColl.length()),
          count: this.__fileColl.length(),
          size: 0,
          isImage: true,
          isStored: true
        };
        return this.__fileInfosDf.done(function () {
          var _info, j, len;

          for (var _len = arguments.length, infos = new Array(_len), _key = 0; _key < _len; _key++) {
            infos[_key] = arguments[_key];
          }

          for (j = 0, len = infos.length; j < len; j++) {
            _info = infos[j];
            info.size += _info.size;

            if (!_info.isImage) {
              info.isImage = false;
            }

            if (!_info.isStored) {
              info.isStored = false;
            }
          }

          return cb(info);
        });
      }
    }, {
      key: "__createGroup",
      value: function __createGroup() {
        var _this4 = this;

        var df;
        df = $__default["default"].Deferred();

        if (this.__fileColl.length()) {
          this.__fileInfosDf.done(function () {
            for (var _len2 = arguments.length, infos = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
              infos[_key2] = arguments[_key2];
            }

            var info;
            return jsonp("".concat(_this4.settings.urlBase, "/group/?jsonerrors=1"), 'POST', {
              pub_key: _this4.settings.publicKey,
              signature: _this4.settings.secureSignature,
              expire: _this4.settings.secureExpire,
              files: function () {
                var j, len, results;
                results = [];

                for (j = 0, len = infos.length; j < len; j++) {
                  info = infos[j];
                  results.push("/".concat(info.uuid, "/").concat(info.cdnUrlModifiers || ''));
                }

                return results;
              }()
            }, {
              headers: {
                'X-UC-User-Agent': _this4.settings._userAgent
              },
              retryConfig: _this4.settings.retryConfig
            }).fail(function (error) {
              if (_this4.settings.debugUploads) {
                log("Can't create group.", _this4.settings.publicKey, error.message);
              }

              return df.reject(error);
            }).done(df.resolve);
          });
        } else {
          df.reject();
        }

        return df.promise();
      }
    }, {
      key: "api",
      value: function api() {
        if (!this.__api) {
          this.__api = bindAll(this, ['promise', 'files']);
        }

        return this.__api;
      }
    }]);

    return FileGroup;
  }();

  var SavedFileGroup = /*#__PURE__*/function (_FileGroup) {
    _inherits(SavedFileGroup, _FileGroup);

    var _super = _createSuper(SavedFileGroup);

    function SavedFileGroup(data, settings) {
      var _this5;

      _classCallCheck(this, SavedFileGroup);

      var files;
      files = filesFrom('ready', data.files, settings);
      _this5 = _super.call(this, files, settings);
      _this5.__data = data;
      return _this5;
    }

    _createClass(SavedFileGroup, [{
      key: "__createGroup",
      value: function __createGroup() {
        return wrapToPromise(this.__data);
      }
    }]);

    return SavedFileGroup;
  }(FileGroup$1);

  var FileGroup = function FileGroup() {
    var filesAndGroups = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var settings = arguments.length > 1 ? arguments[1] : undefined;
    var file, files, item, j, k, len, len1, ref;
    files = [];

    for (j = 0, len = filesAndGroups.length; j < len; j++) {
      item = filesAndGroups[j];

      if (isFile(item)) {
        files.push(item);
      } else if (isFileGroup(item)) {
        ref = item.files();

        for (k = 0, len1 = ref.length; k < len1; k++) {
          file = ref[k];
          files.push(file);
        }
      }
    }

    return new FileGroup$1(files, settings).api();
  };

  var loadFileGroup = function loadFileGroup(groupIdOrUrl, settings) {
    var df, id;
    settings = build(settings);
    df = $__default["default"].Deferred();
    id = groupIdRegex.exec(groupIdOrUrl);

    if (id) {
      jsonp("".concat(settings.urlBase, "/group/info/"), 'GET', {
        jsonerrors: 1,
        pub_key: settings.publicKey,
        group_id: id[0]
      }, {
        headers: {
          'X-UC-User-Agent': settings._userAgent
        },
        retryConfig: settings.retryConfig
      }).fail(function (error) {
        if (settings.debugUploads) {
          log("Can't load group info. Probably removed.", id[0], settings.publicKey, error.message);
        }

        return df.reject(error);
      }).done(function (data) {
        var group;
        group = new SavedFileGroup(data, settings);
        return df.resolve(group.api());
      });
    } else {
      df.reject();
    }

    return df.promise();
  };

  var callbacks = {};
  isWindowDefined() && $__default["default"](window).on('message', function (_ref) {
    var e = _ref.originalEvent;
    var i, item, len, message, ref, results;

    try {
      message = JSON.parse(e.data);
    } catch (error) {
      return;
    }

    if ((message != null ? message.type : undefined) && message.type in callbacks) {
      ref = callbacks[message.type];
      results = [];

      for (i = 0, len = ref.length; i < len; i++) {
        item = ref[i];

        if (e.source === item[0]) {
          results.push(item[1](message));
        } else {
          results.push(undefined);
        }
      }

      return results;
    }
  });

  var registerMessage = function registerMessage(type, sender, callback) {
    if (!(type in callbacks)) {
      callbacks[type] = [];
    }

    return callbacks[type].push([sender, callback]);
  };

  var unregisterMessage = function unregisterMessage(type, sender) {
    if (type in callbacks) {
      callbacks[type] = $__default["default"].grep(callbacks[type], function (item) {
        return item[0] !== sender;
      });
      return callbacks[type];
    }
  };

  var tabsCss = new CssCollector();

  var RemoteTab = /*#__PURE__*/function () {
    function RemoteTab(container, tabButton, dialogApi, settings, name1) {
      var _this = this;

      _classCallCheck(this, RemoteTab);

      this.__createIframe = this.__createIframe.bind(this);
      this.container = container;
      this.tabButton = tabButton;
      this.dialogApi = dialogApi;
      this.settings = settings;
      this.name = name1;
      this.dialogApi.progress(function (name) {
        if (name === _this.name) {
          _this.__createIframe();

          _this.container.find('.uploadcare--tab__iframe').focus();
        }

        return _this.__sendMessage({
          type: 'visibility-changed',
          visible: name === _this.name
        });
      });
    }

    _createClass(RemoteTab, [{
      key: "remoteUrl",
      value: function remoteUrl() {
        var params = {
          lang: this.settings.locale,
          public_key: this.settings.publicKey,
          widget_version: version,
          images_only: this.settings.imagesOnly,
          pass_window_open: this.settings.passWindowOpen
        };

        if (this.settings.remoteTabSessionKey) {
          params.session_key = this.settings.remoteTabSessionKey;
        }

        return "".concat(this.settings.socialBase, "/window3/").concat(this.name, "?") + $__default["default"].param(params);
      }
    }, {
      key: "__sendMessage",
      value: function __sendMessage(messageObj) {
        var ref, ref1;
        return (ref = this.iframe) != null ? (ref1 = ref[0].contentWindow) != null ? ref1.postMessage(JSON.stringify(messageObj), '*') : undefined : undefined;
      }
    }, {
      key: "__createIframe",
      value: function __createIframe() {
        var _this2 = this;

        var iframe;

        if (this.iframe) {
          return;
        }

        this.iframe = $__default["default"]('<iframe>', {
          src: this.remoteUrl(),
          marginheight: 0,
          marginwidth: 0,
          frameborder: 0,
          allowTransparency: 'true'
        }).addClass('uploadcare--tab__iframe').appendTo(this.container).on('load', function () {
          var i, j, len, len1, ref, ref1, style, url;

          _this2.iframe.css('opacity', '1');

          ref = tabsCss.urls;

          for (i = 0, len = ref.length; i < len; i++) {
            url = ref[i];

            _this2.__sendMessage({
              type: 'embed-css',
              url: url
            });
          }

          ref1 = tabsCss.styles;

          for (j = 0, len1 = ref1.length; j < len1; j++) {
            style = ref1[j];

            _this2.__sendMessage({
              type: 'embed-css',
              style: style
            });
          }
        });
        this.container.addClass('uploadcare--tab_remote');
        iframe = this.iframe[0].contentWindow;
        registerMessage('file-selected', iframe, function (message) {
          var file, sourceInfo, url;

          url = function () {
            var i, key, len, ref, type;

            if (message.alternatives) {
              ref = _this2.settings.preferredTypes;

              for (i = 0, len = ref.length; i < len; i++) {
                type = ref[i];
                type = globRegexp(type);

                for (key in message.alternatives) {
                  if (type.test(key)) {
                    return message.alternatives[key];
                  }
                }
              }
            }

            return message.url;
          }();

          sourceInfo = $__default["default"].extend({
            source: _this2.name
          }, message.info || {});
          file = new UrlFile(url, _this2.settings, sourceInfo);

          if (message.filename) {
            file.setName(message.filename);
          }

          if (message.is_image != null) {
            file.setIsImage(message.is_image);
          }

          return _this2.dialogApi.addFiles([file.promise()]);
        });
        registerMessage('open-new-window', iframe, function (message) {
          var interval, popup, resolve;

          if (_this2.settings.debugUploads) {
            debug('Open new window message.', _this2.name);
          }

          popup = window.open(message.url, '_blank');

          if (!popup) {
            warn("Can't open new window. Possible blocked.", _this2.name);
            return;
          }

          resolve = function resolve() {
            if (_this2.settings.debugUploads) {
              debug('Window is closed.', _this2.name);
            }

            return _this2.__sendMessage({
              type: 'navigate',
              fragment: ''
            });
          }; // Detect is window supports "closed".
          // In browsers we have only "closed" property.
          // In Cordova addEventListener('exit') does work.


          if ('closed' in popup) {
            interval = setInterval(function () {
              if (popup.closed) {
                clearInterval(interval);
                return resolve();
              }
            }, 100);
            return interval;
          } else {
            return popup.addEventListener('exit', resolve);
          }
        });
        return this.dialogApi.done(function () {
          unregisterMessage('file-selected', iframe);
          return unregisterMessage('open-new-window', iframe);
        });
      }
    }]);

    return RemoteTab;
  }();

  var _namespace = {
    version: version,
    jQuery: $__default["default"],
    utils: {
      abilities: {
        fileAPI: fileAPI,
        sendFileAPI: sendFileAPI,
        dragAndDrop: dragAndDrop,
        canvas: canvas,
        fileDragAndDrop: fileDragAndDrop,
        iOSVersion: iOSVersion,
        Blob: Blob,
        URL: URL,
        FileReader: FileReader
      },
      Collection: Collection,
      UniqCollection: UniqCollection,
      CollectionOfPromises: CollectionOfPromises,
      imageLoader: imageLoader,
      videoLoader: videoLoader,
      log: log,
      debug: debug,
      warn: warn,
      warnOnce: warnOnce,
      //   commonWarning
      registerMessage: registerMessage,
      unregisterMessage: unregisterMessage,
      unique: unique,
      defer: defer,
      gcd: gcd,
      once: once,
      wrapToPromise: wrapToPromise,
      then: then,
      bindAll: bindAll,
      upperCase: upperCase,
      publicCallbacks: publicCallbacks,
      uuid: uuid,
      splitUrlRegex: splitUrlRegex,
      uuidRegex: uuidRegex,
      groupIdRegex: groupIdRegex,
      cdnUrlRegex: cdnUrlRegex,
      splitCdnUrl: splitCdnUrl,
      escapeRegExp: escapeRegExp,
      globRegexp: globRegexp,
      normalizeUrl: normalizeUrl,
      fitText: fitText,
      fitSizeInCdnLimit: fitSizeInCdnLimit,
      fitSize: fitSize,
      applyCropCoordsToInfo: applyCropCoordsToInfo,
      fileInput: fileInput,
      fileSelectDialog: fileSelectDialog,
      fileSizeLabels: fileSizeLabels,
      readableFileSize: readableFileSize,
      ajaxDefaults: ajaxDefaults,
      jsonp: jsonp,
      canvasToBlob: canvasToBlob,
      taskRunner: taskRunner,
      fixedPipe: fixedPipe,
      isFile: isFile,
      valueToFile: valueToFile,
      image: {
        shrinkFile: shrinkFile,
        shrinkImage: shrinkImage,
        drawFileToCanvas: drawFileToCanvas,
        readJpegChunks: readJpegChunks,
        replaceJpegChunk: replaceJpegChunk,
        getExif: getExif,
        parseExifOrientation: parseExifOrientation,
        hasTransparency: hasTransparency
      },
      pusher: {
        getPusher: getPusher
      },
      isFileGroup: isFileGroup,
      valueToGroup: valueToGroup,
      isFileGroupsEqual: isFileGroupsEqual
    },
    settings: {
      globals: globals,
      build: build,
      common: common,
      waitForSettings: waitForSettings,
      CssCollector: CssCollector
    },
    locale: locale,
    tabsCss: tabsCss,
    files: {
      BaseFile: BaseFile,
      ObjectFile: ObjectFile,
      InputFile: InputFile,
      UrlFile: UrlFile,
      UploadedFile: UploadedFile,
      ReadyFile: ReadyFile,
      FileGroup: FileGroup$1,
      SavedFileGroup: SavedFileGroup
    },
    Pusher: pusher_1,
    FileGroup: FileGroup,
    loadFileGroup: loadFileGroup,
    fileFrom: fileFrom,
    filesFrom: filesFrom,
    __exports: {},
    namespace: function namespace(path, fn) {
      var target = _namespace;

      if (path) {
        var ref = path.split('.');

        for (var i = 0, len = ref.length; i < len; i++) {
          var part = ref[i];

          if (!target[part]) {
            target[part] = {};
          }

          target = target[part];
        }
      }

      return fn(target);
    },
    expose: function expose(key, value) {
      var parts = key.split('.');
      var last = parts.pop();
      var target = _namespace.__exports;
      var source = _namespace;

      for (var i = 0, len = parts.length; i < len; i++) {
        var part = parts[i];

        if (!target[part]) {
          target[part] = {};
        }

        target = target[part];
        source = source != null ? source[part] : undefined;
      }

      target[last] = value || source[last];
    }
  };

  function createPlugin(ns) {
    return function (fn) {
      return fn(ns);
    };
  }

  var plugin$2 = createPlugin(_namespace);

  var uploadcare$2 = {
    plugin: plugin$2,
    version: version,
    jQuery: $__default["default"],
    // Defaults (not normalized)
    defaults: _objectSpread2(_objectSpread2({}, defaults$1), {}, {
      allTabs: presets.tabs.all
    }),
    globals: common,
    start: common,
    fileFrom: fileFrom,
    filesFrom: filesFrom,
    FileGroup: FileGroup,
    loadFileGroup: loadFileGroup,
    locales: ['en']
  };

  var dialog = function dialog() {
    return "<div class=\"uploadcare--dialog\"><div class=\"uploadcare--dialog__container\"><button type=\"button\" title=\"".concat(locale.t('dialog.close'), "\" aria-label=\"").concat(locale.t('dialog.close'), "\" class=\"uploadcare--button uploadcare--button_icon uploadcare--button_muted uploadcare--dialog__close\"><svg role=\"presentation\" width=\"32\" height=\"32\" class=\"uploadcare--icon\"><use xlink:href=\"#uploadcare--icon-close\"></use></svg></button><div class=\"uploadcare--dialog__placeholder\"></div></div><div class=\"uploadcare--powered-by uploadcare--dialog__powered-by\">").concat(locale.t('dialog.footer.text'), " <a class=\"uploadcare--link uploadcare--powered-by__link\" href=\"https://uploadcare.com/uploader/").concat(version, "/\" target=\"_blank\"><svg width=\"32\" height=\"32\" role=\"presentation\" class=\"uploadcare--icon uploadcare--powered-by__logo\"><use xlink:href=\"#uploadcare--icon-uploadcare\"></use></svg> ").concat(locale.t('dialog.footer.link'), "</a></div></div>");
  };

  var dialogPanel = function dialogPanel() {
    return "<div class=\"uploadcare--panel\"><div class=\"uploadcare--menu uploadcare--panel__menu\"><button type=\"button\" title=\"".concat(locale.t('dialog.openMenu'), "\" aria-label=\"").concat(locale.t('dialog.openMenu'), "\" class=\"uploadcare--button uploadcare--button_icon uploadcare--button_muted uploadcare--menu__toggle\"><svg role=\"presentation\" width=\"32\" height=\"32\" class=\"uploadcare--icon uploadcare--menu__toggle-icon uploadcare--menu__toggle-icon_menu\"><use xlink:href=\"#uploadcare--icon-menu\"></use></svg> <svg role=\"presentation\" width=\"32\" height=\"32\" class=\"uploadcare--icon uploadcare--menu__toggle-icon uploadcare--menu__toggle-icon_back\"><use xlink:href=\"#uploadcare--icon-back\"></use></svg></button><div class=\"uploadcare--menu__items\"></div></div><div class=\"uploadcare--panel__content\"><div class=\"uploadcare--footer uploadcare--panel__footer\"><div class=\"uploadcare--footer__additions uploadcare--panel__message\"></div><button type=\"button\" class=\"uploadcare--button uploadcare--footer__button uploadcare--panel__show-files\">").concat(locale.t('dialog.showFiles'), "<div class=\"uploadcare--panel__file-counter\"></div></button> <button type=\"button\" class=\"uploadcare--button uploadcare--button_primary uploadcare--footer__button uploadcare--panel__done\">").concat(locale.t('dialog.done'), "</button></div><div class=\"uploadcare--powered-by uploadcare--panel__powered-by\">").concat(locale.t('dialog.footer.text'), " <a class=\"uploadcare--link uploadcare--powered-by__link\" href=\"https://uploadcare.com/uploader/").concat(version, "/\" target=\"_blank\"><svg width=\"32\" height=\"32\" role=\"presentation\" class=\"uploadcare--icon uploadcare--powered-by__logo\"><use xlink:href=\"#uploadcare--icon-uploadcare\"></use></svg> ").concat(locale.t('dialog.footer.link'), "</a></div></div></div>");
  };

  var progressText = function progressText() {
    return '<div class="uploadcare--progress__text-container"><div class="uploadcare--progress__text"></div></div>';
  };

  var tabCameraCapture = function tabCameraCapture() {
    return "<div class=\"uploadcare--tab__content\"><div class=\"uploadcare--text uploadcare--text_size_large uploadcare--tab__title\">".concat(locale.t('dialog.tabs.camera.title'), "</div><div class=\"uploadcare--camera__controls\"><button type=\"button\" class=\"uploadcare--button uploadcare--button_size_big uploadcare--button_primary uploadcare--camera__button uploadcare--camera__button_type_photo\">").concat(locale.t('dialog.tabs.camera.capture'), "</button> <button type=\"button\" class=\"uploadcare--button uploadcare--button_size_big uploadcare--button_primary uploadcare--camera__button uploadcare--camera__button_type_video\">").concat(locale.t('dialog.tabs.camera.startRecord'), "</button></div></div>");
  };

  var tabCamera = function tabCamera() {
    return "<div class=\"uploadcare--tab__content\"><div class=\"uploadcare--text uploadcare--text_size_large uploadcare--tab__title\">".concat(locale.t('dialog.tabs.camera.title'), "</div><select class=\"uploadcare--camera__device-select\"></select><div class=\"uploadcare--media uploadcare--camera__video-container\"><video muted class=\"uploadcare--media__video uploadcare--camera__video uploadcare--camera__video_mirrored\"></video><button type=\"button\" class=\"uploadcare--button uploadcare--button_size_small uploadcare--button_overlay uploadcare--camera__button uploadcare--camera__button_type_mirror\">").concat(locale.t('dialog.tabs.camera.mirror'), "</button></div><div class=\"uploadcare--camera__controls\"><button type=\"button\" class=\"uploadcare--button uploadcare--button_primary uploadcare--camera__button uploadcare--camera__button_type_start-record\">").concat(locale.t('dialog.tabs.camera.startRecord'), "</button> <button type=\"button\" class=\"uploadcare--button uploadcare--button_primary uploadcare--camera__button uploadcare--camera__button_type_capture\">").concat(locale.t('dialog.tabs.camera.capture'), "</button> <button type=\"button\" class=\"uploadcare--button uploadcare--camera__button uploadcare--camera__button_type_cancel-record\">").concat(locale.t('dialog.tabs.camera.cancelRecord'), "</button> <button type=\"button\" class=\"uploadcare--button uploadcare--button_primary uploadcare--camera__button uploadcare--camera__button_type_stop-record\">").concat(locale.t('dialog.tabs.camera.stopRecord'), "</button></div><div class=\"uploadcare--camera__please-allow\"><div class=\"uploadcare--text uploadcare--text_size_medium\">").concat(locale.t('dialog.tabs.camera.pleaseAllow.title'), "</div><div class=\"uploadcare--text\">").concat(locale.t('dialog.tabs.camera.pleaseAllow.text'), "</div></div><div class=\"uploadcare--camera__not-found\"><div class=\"uploadcare--text uploadcare--text_size_medium\">").concat(locale.t('dialog.tabs.camera.notFound.title'), "</div><div class=\"uploadcare--text\">").concat(locale.t('dialog.tabs.camera.notFound.text'), "</div></div><button type=\"button\" class=\"uploadcare--button uploadcare--camera__button uploadcare--camera__button_type_retry\">").concat(locale.t('dialog.tabs.camera.retry'), "</button></div>");
  };

  var tabFile = function tabFile() {
    return "<div class=\"uploadcare--tab__content uploadcare--draganddrop\"><div class=\"uploadcare--text uploadcare--text_size_extra-large uploadcare--dragging__show\">".concat(locale.t('draghere'), "</div><div class=\"uploadcare--draganddrop__title uploadcare--dragging__hide\"><div class=\"uploadcare--draganddrop__supported\"><div class=\"uploadcare--text uploadcare--text_size_extra-large\">").concat(locale.t('dialog.tabs.file.drag'), "</div><div class=\"uploadcare--text uploadcare--text_size_small uploadcare--text_muted\">").concat(locale.t('dialog.tabs.file.or'), "</div></div><div class=\"uploadcare--text uploadcare--text_size_large uploadcare--draganddrop__not-supported\">").concat(locale.t('dialog.tabs.file.nodrop'), "</div></div><button type=\"button\" class=\"uploadcare--button uploadcare--button_size_big uploadcare--button_primary uploadcare--tab__action-button needsclick uploadcare--dragging__hide\">").concat(locale.t('dialog.tabs.file.button'), "</button><div class=\"uploadcare--file-sources uploadcare--dragging__hide\"><div class=\"uploadcare--text uploadcare--text_size_small uploadcare--text_muted uploadcare--file-sources__caption\">").concat(locale.t('dialog.tabs.file.also'), "</div><div class=\"uploadcare--file-sources__items\"><button type=\"button\" class=\"uploadcare--button uploadcare--button_icon uploadcare--file-source uploadcare--file-source_all uploadcare--file-sources__item\"><svg role=\"presentation\" width=\"32\" height=\"32\" class=\"uploadcare--icon\"><use xlink:href=\"#uploadcare--icon-more\"></use></svg></button></div></div></div>");
  };

  var tabPreviewError = function tabPreviewError(_ref) {
    var debugUploads = _ref.debugUploads,
        errorType = _ref.errorType,
        error = _ref.error;
    return "<div class=\"uploadcare--tab__content uploadcare--preview__content uploadcare--error\"><div class=\"uploadcare--text uploadcare--text_size_large uploadcare--tab__title uploadcare--preview__title\">".concat(locale.t('dialog.tabs.preview.error.' + errorType + '.title') || locale.t('dialog.tabs.preview.error.default.title'), "</div><div class=\"uploadcare--text\">").concat(debugUploads && (error === null || error === void 0 ? void 0 : error.message) || locale.t("serverErrors.".concat(error === null || error === void 0 ? void 0 : error.code)) || (error === null || error === void 0 ? void 0 : error.message) || locale.t('dialog.tabs.preview.error.' + errorType + '.text') || locale.t('dialog.tabs.preview.error.default.text'), "</div><button type=\"button\" class=\"uploadcare--button uploadcare--preview__back\">").concat(locale.t('dialog.tabs.preview.error.' + errorType + '.back') || locale.t('dialog.tabs.preview.error.default.back'), "</button></div>");
  };

  /*!
   * escape-html
   * Copyright(c) 2012-2013 TJ Holowaychuk
   * Copyright(c) 2015 Andreas Lubbe
   * Copyright(c) 2015 Tiancheng "Timothy" Gu
   * MIT Licensed
   */

  /**
   * Module variables.
   * @private
   */

  var matchHtmlRegExp = /["'&<>]/;

  /**
   * Module exports.
   * @public
   */

  var escapeHtml_1 = escapeHtml;

  /**
   * Escape special characters in the given string of html.
   *
   * @param  {string} string The string to escape for inserting into HTML
   * @return {string}
   * @public
   */

  function escapeHtml(string) {
    var str = '' + string;
    var match = matchHtmlRegExp.exec(str);

    if (!match) {
      return str;
    }

    var escape;
    var html = '';
    var index = 0;
    var lastIndex = 0;

    for (index = match.index; index < str.length; index++) {
      switch (str.charCodeAt(index)) {
        case 34: // "
          escape = '&quot;';
          break;
        case 38: // &
          escape = '&amp;';
          break;
        case 39: // '
          escape = '&#39;';
          break;
        case 60: // <
          escape = '&lt;';
          break;
        case 62: // >
          escape = '&gt;';
          break;
        default:
          continue;
      }

      if (lastIndex !== index) {
        html += str.substring(lastIndex, index);
      }

      lastIndex = index + 1;
      html += escape;
    }

    return lastIndex !== index
      ? html + str.substring(lastIndex, index)
      : html;
  }

  var tabPreviewImage = function tabPreviewImage(_ref) {
    var src = _ref.src,
        _ref$name = _ref.name,
        name = _ref$name === void 0 ? '' : _ref$name,
        crop = _ref.crop;
    return "<div class=\"uploadcare--tab__header\"><div class=\"uploadcare--text uploadcare--text_size_large uploadcare--tab__title uploadcare--preview__title\">".concat(locale.t('dialog.tabs.preview.image.title'), "</div></div><div class=\"uploadcare--tab__content uploadcare--preview__content\"><div class=\"uploadcare--media\"><img src=\"").concat(src, "\" title=\"").concat(escapeHtml_1(name), "\" alt=\"").concat(escapeHtml_1(name), "\" class=\"uploadcare--media__image uploadcare--preview__image\"></div></div><div class=\"uploadcare--footer uploadcare--tab__footer\"><div class=\"uploadcare--footer__additions\">").concat(crop ? '<div class="uploadcare--crop-sizes"><div role="button" tabindex="0" class="uploadcare--button uploadcare--button_icon uploadcare--crop-sizes__item" data-caption="free"><div class="uploadcare--crop-sizes__icon"></div></div></div>' : '', "</div><button type=\"button\" class=\"uploadcare--button uploadcare--footer__button uploadcare--preview__back\">").concat(locale.t('dialog.tabs.preview.image.change'), "</button> <button type=\"button\" class=\"uploadcare--button uploadcare--button_primary uploadcare--footer__button uploadcare--preview__done\">").concat(locale.t('dialog.tabs.preview.done'), "</button></div>");
  };

  var tabPreviewMultipleFile = function tabPreviewMultipleFile() {
    return "<div class=\"uploadcare--file uploadcare--files__item uploadcare--file_status_uploading\"><div class=\"uploadcare--file__description\" tabindex=\"0\"><div class=\"uploadcare--file__preview\"></div><div class=\"uploadcare--file__name\">".concat(locale.t('dialog.tabs.preview.unknownName'), "</div><div class=\"uploadcare--file__size\"></div><div class=\"uploadcare--file__error\"></div></div><div class=\"uploadcare--file__progressbar\"><div class=\"uploadcare--progressbar\"><div class=\"uploadcare--progressbar__value\"></div></div></div><button type=\"button\" class=\"uploadcare--button uploadcare--button_icon uploadcare--button_muted uploadcare--file__remove\"><svg role=\"presentation\" width=\"32\" height=\"32\" class=\"uploadcare--icon\"><use xlink:href=\"#uploadcare--icon-remove\"></use></svg></button></div>");
  };

  var tabPreviewMultiple = function tabPreviewMultiple() {
    return "<div class=\"uploadcare--tab__header\"><div id=\"preview__title\" class=\"uploadcare--text uploadcare--text_size_large uploadcare--tab__title uploadcare--preview__title\" role=\"status\" aria-live=\"assertive\"></div></div><div class=\"uploadcare--tab__content uploadcare--preview__content\"><div class=\"uploadcare--files\"></div></div><div class=\"uploadcare--footer uploadcare--tab__footer\"><div class=\"uploadcare--footer__additions uploadcare--preview__message\"></div><button type=\"button\" class=\"uploadcare--button uploadcare--footer__button uploadcare--preview__back\">".concat(locale.t('dialog.tabs.preview.multiple.clear'), "</button> <button type=\"button\" class=\"uploadcare--button uploadcare--button_primary uploadcare--footer__button uploadcare--preview__done\" aria-describedby=\"preview_title\">").concat(locale.t('dialog.tabs.preview.multiple.done'), "</button></div>");
  };

  var tabPreviewRegular = function tabPreviewRegular(_ref) {
    var file = _ref.file;
    return "<div class=\"uploadcare--tab__header\"><div id=\"tab__title\" class=\"uploadcare--text uploadcare--text_size_large uploadcare--tab__title\" role=\"status\" aria-live=\"assertive\">".concat(locale.t('dialog.tabs.preview.regular.title'), "</div></div><div class=\"uploadcare--tab__content uploadcare--preview__content\"><div class=\"uploadcare--text uploadcare--preview__file-name\">").concat(escapeHtml_1(file.name) || locale.t('dialog.tabs.preview.unknownName'), " ").concat(readableFileSize(file.size, '', ', '), "</div></div><div class=\"uploadcare--footer uploadcare--tab__footer\"><button type=\"button\" class=\"uploadcare--button uploadcare--footer__button uploadcare--preview__back\">").concat(locale.t('dialog.tabs.preview.change'), "</button> <button type=\"button\" class=\"uploadcare--button uploadcare--button_primary uploadcare--footer__button uploadcare--preview__done\" aria-describedby=\"tab__title\">").concat(locale.t('dialog.tabs.preview.done'), "</button></div>");
  };

  var tabPreviewUnknown = function tabPreviewUnknown() {
    return "<div class=\"uploadcare--tab__header\"><div class=\"uploadcare--text uploadcare--text_size_large uploadcare--tab__title uploadcare--preview__title\">".concat(locale.t('dialog.tabs.preview.unknown.title'), "</div></div><div class=\"uploadcare--tab__content uploadcare--preview__content\"><div class=\"uploadcare--text uploadcare--preview__file-name\"></div></div><div class=\"uploadcare--footer uploadcare--tab__footer\"><button type=\"button\" class=\"uploadcare--button uploadcare--footer__button uploadcare--preview__back\">").concat(locale.t('dialog.tabs.preview.change'), "</button> <button type=\"button\" class=\"uploadcare--button uploadcare--button_primary uploadcare--footer__button uploadcare--preview__done\">").concat(locale.t('dialog.tabs.preview.unknown.done'), "</button></div>");
  };

  var tabPreviewVideo = function tabPreviewVideo() {
    return "<div class=\"uploadcare--tab__header\"><div class=\"uploadcare--text uploadcare--text_size_large uploadcare--tab__title uploadcare--preview__title\">".concat(locale.t('dialog.tabs.preview.video.title'), "</div></div><div class=\"uploadcare--tab__content uploadcare--preview__content\"><div class=\"uploadcare--media\"><video controls class=\"uploadcare--media__video uploadcare--preview__video\"></video></div></div><div class=\"uploadcare--footer uploadcare--tab__footer\"><button type=\"button\" class=\"uploadcare--button uploadcare--footer__button uploadcare--preview__back\">").concat(locale.t('dialog.tabs.preview.video.change'), "</button> <button type=\"button\" class=\"uploadcare--button uploadcare--button_primary uploadcare--footer__button uploadcare--preview__done\">").concat(locale.t('dialog.tabs.preview.done'), "</button></div>");
  };

  var tabUrl = function tabUrl() {
    return "<div class=\"uploadcare--tab__content\"><div class=\"uploadcare--text uploadcare--text_size_large uploadcare--tab__title\">".concat(locale.t('dialog.tabs.url.title'), "</div><div class=\"uploadcare--text\">").concat(locale.t('dialog.tabs.url.line1'), "</div><div class=\"uploadcare--text\">").concat(locale.t('dialog.tabs.url.line2'), "</div><form class=\"uploadcare--form\"><input type=\"text\" class=\"uploadcare--input\" placeholder=\"").concat(locale.t('dialog.tabs.url.input'), "\"> <button type=\"submit\" class=\"uploadcare--button uploadcare--button_primary uploadcare--tab__action-button\" type=\"submit\">").concat(locale.t('dialog.tabs.url.button'), "</button></form></div>");
  };

  var widgetButton = function widgetButton(_ref) {
    var caption = _ref.caption,
        name = _ref.name;
    return "<button type=\"button\" class=\"uploadcare--widget__button uploadcare--widget__button_type_".concat(name, "\">").concat(caption, "</button>");
  };

  var widgetFileName = function widgetFileName(_ref) {
    var name = _ref.name,
        size = _ref.size;
    return "<div class=\"uploadcare--link uploadcare--widget__file-name\" tabindex=\"0\" role=\"link\">".concat(escapeHtml_1(fitText(name, 20)), "</div><div class=\"uploadcare--widget__file-size\">, ").concat(readableFileSize(size), "</div>");
  };

  var widget = function widget() {
    return "<div class=\"uploadcare--widget\" aria-describedby=\"uploadcare--widget__text uploadcare--widget__progress\"><div class=\"uploadcare--widget__dragndrop-area\">".concat(locale.t('draghere'), "</div><div id=\"uploadcare--widget__progress\" class=\"uploadcare--widget__progress\" role=\"progressbar\" aria-valuenow=\"0\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div><div id=\"uploadcare--widget__text\" class=\"uploadcare--widget__text\" aria-live=\"polite\"></div></div>");
  };

  var _styles = ".uploadcare--jcrop-handle{background:transparent;box-sizing:border-box;height:45px;padding:12.5px;width:45px;z-index:2147483621}.uploadcare--jcrop-handle:before{background:#fff;border-radius:50%;box-shadow:inset 0 0 0 1px rgba(0,0,0,.2);content:\"\";display:block;height:20px;width:20px}@media (min-width:760px){.uploadcare--jcrop-handle:before{height:15px;width:15px}}.uploadcare--jcrop-handle.ord-nw{left:0;margin-left:-22.5px;margin-top:-22.5px;top:0}@media (min-width:760px){.uploadcare--jcrop-handle.ord-nw{margin-left:-17.5px;margin-top:-17.5px}}.uploadcare--jcrop-handle.ord-ne{margin-right:-22.5px;margin-top:-22.5px;right:0;top:0}@media (min-width:760px){.uploadcare--jcrop-handle.ord-ne{margin-right:-17.5px;margin-top:-17.5px}}.uploadcare--jcrop-handle.ord-se{bottom:0;margin-bottom:-22.5px;margin-right:-22.5px;right:0}@media (min-width:760px){.uploadcare--jcrop-handle.ord-se{margin-bottom:-17.5px;margin-right:-17.5px}}.uploadcare--jcrop-handle.ord-sw{bottom:0;left:0;margin-bottom:-22.5px;margin-left:-22.5px}@media (min-width:760px){.uploadcare--jcrop-handle.ord-sw{margin-bottom:-17.5px;margin-left:-17.5px}.uploadcare--jcrop-handle{height:35px;padding:10px;width:35px}}.uploadcare--jcrop-hline{background-color:#fff;box-shadow:0 0 0 1px rgba(0,0,0,.2);height:1px!important;width:100%;z-index:2147483620}.uploadcare--jcrop-hline.bottom{bottom:0}.uploadcare--jcrop-vline{background-color:#fff;box-shadow:0 0 0 1px rgba(0,0,0,.2);height:100%;width:1px!important;z-index:2147483620}.uploadcare--jcrop-vline.right{right:0}.uploadcare--jcrop-tracker{-webkit-tap-highlight-color:transparent;-webkit-touch-callout:none;height:100%;-webkit-user-select:none;-ms-user-select:none;user-select:none;width:100%}.uploadcare--jcrop-holder img{max-height:none;max-width:none}.uploadcare--text{font-size:17.5px;line-height:25px;margin:0 0 10px;padding:0}.uploadcare--text:empty{display:none}.uploadcare--text_muted{color:#a4a2a1}.uploadcare--text_pre{background:#e3e1e1;box-sizing:border-box;font-family:monospace;max-width:100%;overflow-x:auto;padding:20px;text-align:left;white-space:pre}.uploadcare--text_size_small{font-size:15px;line-height:20px}.uploadcare--text_size_medium{font-size:20px;font-weight:700;line-height:25px}.uploadcare--text_size_large{font-size:22px;font-weight:700;line-height:25px}.uploadcare--text_size_extra-large{font-size:35px;line-height:45px}@media (min-width:760px){.uploadcare--text_size_extra-large{font-size:42.5px;line-height:50px}}.uploadcare--icon{fill:currentColor;all:initial;color:inherit;cursor:inherit;height:32px;margin:0;max-width:100%;padding:0;width:32px}.uploadcare--link,.uploadcare--link:link,.uploadcare--link:visited{color:#157cfc;cursor:pointer;text-decoration:underline}.uploadcare--link:focus,.uploadcare--link:hover{color:#3891ff;text-decoration:none}.uploadcare--link:focus{outline:2px solid rgba(21,124,252,.5);outline-offset:1px}.uploadcare--link:active{color:#0969ee}.uploadcare--button{-ms-flex-negative:0;all:initial;background:transparent;border:1px solid #157cfc;border-radius:6px;box-shadow:none;box-sizing:border-box;color:#157cfc;cursor:default;display:inline-block;flex-shrink:0;font-family:inherit;font-size:15px;font-style:normal;font-weight:400;height:auto;line-height:20px;margin:0;min-height:0;min-width:100px;overflow:hidden;padding:10px;text-align:center;text-overflow:ellipsis;text-shadow:none;transition:background .3s,color .3s,border .3s;white-space:nowrap;width:auto}.uploadcare--button svg{pointer-events:none}.uploadcare--button:focus,.uploadcare--button:hover{background:transparent;border-color:#3891ff;box-shadow:none;color:#3891ff;font-style:normal;font-weight:400;text-shadow:none}.uploadcare--button:focus{outline:2px solid rgba(21,124,252,.5);outline-offset:1px}.uploadcare--button:active{border-color:#0969ee;color:#0969ee}.uploadcare--button:disabled,.uploadcare--button[aria-disabled=true]{background:transparent!important;border-color:#d4d2d2!important;color:#d4d2d2!important;cursor:not-allowed}@media (min-width:760px){.uploadcare--button{font-size:17.5px;line-height:25px;padding:10px 20px}}.uploadcare--button_icon{height:60px;min-width:0;padding:14px;width:60px}.uploadcare--button_muted{border-color:transparent!important;border-radius:0;color:#a4a2a1}.uploadcare--button_muted:focus,.uploadcare--button_muted:hover{color:#157cfc}.uploadcare--button_muted:disabled,.uploadcare--button_muted[aria-disabled=true]{border-color:transparent!important}.uploadcare--button_overlay{background:rgba(53,53,53,.5);border-color:transparent;color:#fff}.uploadcare--button_overlay:focus,.uploadcare--button_overlay:hover{background:hsla(0,0%,40%,.5);border-color:transparent;color:#fff}.uploadcare--button_overlay:active{background:rgba(33,33,33,.5)}.uploadcare--button_primary{background:#157cfc;border-color:#157cfc;color:#fff}.uploadcare--button_primary:focus,.uploadcare--button_primary:hover{background:#3891ff;border-color:#3891ff;color:#fff}.uploadcare--button_primary:active{background:#0969ee;border-color:#0969ee}.uploadcare--button_primary:disabled,.uploadcare--button_primary[aria-disabled=true]{background:#d4d2d2!important;border-color:#d4d2d2!important;color:#fff!important}.uploadcare--button_size_big{font-size:20px;line-height:30px;padding:10px 25px}.uploadcare--button_size_small{font-size:15px;line-height:20px;min-width:80px;padding:5px 10px}.uploadcare--input{-ms-flex-negative:0;-webkit-appearance:none;appearance:none;background:#fff;border:1px solid #a4a2a1;border-radius:2px;box-shadow:none;box-sizing:border-box;color:#353535;display:block;flex-shrink:0;font-size:17.5px;line-height:25px;margin:5px 0 15px;padding:10px 15px;width:100%}.uploadcare--input:focus{outline:2px solid rgba(21,124,252,.5);outline-offset:1px}.uploadcare--input:-ms-input-placeholder{color:#a4a2a1}.uploadcare--input::placeholder{color:#a4a2a1}.uploadcare--form{-ms-flex-align:center;align-items:center;box-sizing:border-box;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;max-width:400px;width:100%}.uploadcare--error{color:#e66a6a}.uploadcare--powered-by{-ms-flex-pack:center;-ms-flex-align:center;align-items:center;color:#fff;display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;font-size:12.5px;justify-content:center;line-height:15px;padding:7.5px 0;text-align:center}.uploadcare--powered-by__link{color:inherit!important;display:-ms-inline-flexbox;display:inline-flex;text-decoration:none!important}.uploadcare--powered-by__logo{display:-ms-inline-flexbox;display:inline-flex;height:15px;vertical-align:text-bottom;width:20px}.uploadcare--progress__canvas{height:100%;width:100%}.uploadcare--progress__text{display:table-cell;font-size:60%;line-height:1;text-align:center;vertical-align:middle}.uploadcare--progress__text-container{display:table;height:100%;white-space:normal;width:100%}.uploadcare--progress_type_canvas{border-color:#e3e1e1;color:#ffd800;height:32px;padding:2px;width:32px}.uploadcare--progressbar{background:#e3e1e1;border-radius:6px;height:100%;overflow:hidden;width:100%}.uploadcare--progressbar__value{background:#ffd800;height:100%;width:0}.uploadcare--menu{-ms-flex-negative:0;flex-shrink:0;height:100%;max-width:100%;overflow:hidden;width:100%;width:100vw}@media (max-width:759px){.uploadcare--menu{height:60px}}@media (min-width:760px){.uploadcare--menu{width:60px}}.uploadcare--menu__icon{-ms-flex-negative:0;flex-shrink:0;margin:14px}@media (max-width:759px){.uploadcare--menu:not(.uploadcare--menu_opened) .uploadcare--menu__item_current:not(.uploadcare--menu__item_tab_file) .uploadcare--menu__icon{left:50%;margin-left:0;position:absolute;top:0;transform:translateX(-50%)}}.uploadcare--menu__item{-ms-flex-negative:0;-ms-flex-align:center;align-items:center;background:#e3e1e1;color:#666;cursor:default;display:-ms-flexbox;display:flex;flex-shrink:0;height:60px;overflow:hidden;transition:background .3s,color .3s;width:100vw}.uploadcare--menu__item:focus,.uploadcare--menu__item:hover{color:#157cfc}.uploadcare--menu__item:active{background-color:#fff;color:#0969ee}.uploadcare--menu__item:focus{box-shadow:inset 0 0 0 2px rgba(21,124,252,.5);outline:none}.uploadcare--menu__item[aria-disabled=true]{background:#e3e1e1!important;color:#666!important;cursor:not-allowed}@media (min-width:760px){.uploadcare--menu__item{width:60px}}.uploadcare--menu__item:after{-ms-flex-negative:0;content:attr(title);display:-ms-flexbox;display:flex;flex-shrink:0;font-size:17px;height:30px;line-height:30px;white-space:nowrap}@media (min-width:760px){.uploadcare--menu__item:after{max-width:170px;overflow:hidden;text-overflow:ellipsis}}.uploadcare--menu__item_current,.uploadcare--menu__item_current:active,.uploadcare--menu__item_current:focus,.uploadcare--menu__item_current:hover{background-color:#fff;color:#353535}.uploadcare--menu__item_hidden{display:none}.uploadcare--menu__items{background:#e3e1e1;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;height:100%;overflow-x:hidden;overflow-y:auto;padding-right:100vw;width:100%}.uploadcare--menu__toggle{height:60px;transition:none;width:60px}.uploadcare--menu__toggle:focus{outline-offset:-2px}@media (min-width:760px){.uploadcare--menu__toggle{display:none}}@media (max-width:759px){.uploadcare--menu:not(.uploadcare--menu_opened) .uploadcare--menu__toggle-icon_back{display:none}.uploadcare--menu_opened{height:100%;position:relative;z-index:1000}.uploadcare--menu_opened .uploadcare--menu__toggle{-ms-flex-pack:start;background:#e3e1e1;justify-content:flex-start;text-align:left;width:100%}.uploadcare--menu_opened .uploadcare--menu__toggle-icon_menu{display:none}.uploadcare--menu_opened .uploadcare--menu__items{height:calc(100% - 60px)}}.uploadcare--footer{-ms-flex-negative:0;-ms-flex-pack:justify;-ms-flex-align:center;align-items:center;box-sizing:border-box;display:-ms-flexbox;display:flex;flex-shrink:0;justify-content:space-between;margin-top:10px;padding:5px 20px 15px;width:100%}@media (max-width:759px) and (orientation:portrait){.uploadcare--footer{display:block}}.uploadcare--footer:empty{display:none}.uploadcare--footer__additions{-ms-flex-positive:1;-ms-flex-order:1;-ms-flex-pack:center;-ms-flex-align:center;align-items:center;box-sizing:border-box;display:-ms-flexbox;display:flex;flex-grow:1;justify-content:center;order:1;padding:0 0 15px;text-align:center}@media (max-width:759px) and (orientation:landscape){.uploadcare--footer__additions{padding:0 20px}}@media (max-width:500px) and (orientation:landscape){.uploadcare--footer__additions{display:none}}@media (min-width:760px){.uploadcare--footer__additions{padding:0 20px}}.uploadcare--footer__additions:empty{padding:0;visibility:hidden}.uploadcare--footer__button{margin-bottom:5px;margin-top:5px}.uploadcare--footer__button:first-of-type{-ms-flex-order:0;order:0}.uploadcare--footer__button:nth-of-type(2){-ms-flex-order:2;order:2}@media (max-width:759px){.uploadcare--footer__button{max-width:calc(50% - 20px)}}@media (max-width:759px) and (orientation:portrait){.uploadcare--footer__button:first-of-type{float:left}.uploadcare--footer__button:nth-of-type(2){float:right}}.uploadcare--dragging .uploadcare--draganddrop{background:#e3e1e1;border:2px dashed;border-radius:20px;color:#a4a2a1;margin:20px}.uploadcare--draganddrop.uploadcare--dragging{color:#157cfc!important}@media (max-width:759px){.uploadcare--draganddrop__title{display:none}}.uploadcare--draganddrop:not(.uploadcare--draganddrop_supported) .uploadcare--draganddrop__supported,.uploadcare--draganddrop_supported .uploadcare--draganddrop__not-supported,.uploadcare--dragging .uploadcare--dialog__close,.uploadcare--dragging__show{display:none}.uploadcare--dragging .uploadcare--dragging__show{display:block}.uploadcare--dragging .uploadcare--dragging__hide{display:none}.uploadcare--file{-ms-flex-align:stretch;-ms-flex-pack:justify;align-items:stretch;box-sizing:border-box;color:#353535;cursor:default;display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;justify-content:space-between;padding:5px 0 5px 20px}.uploadcare--file:hover{background:rgba(21,124,252,.1)}.uploadcare--file__description{-ms-flex-positive:1;flex-grow:1;min-width:0;padding-right:20px;text-align:left}.uploadcare--file__description:focus,.uploadcare--file__description:focus .uploadcare--file__preview,.uploadcare--file__description:hover,.uploadcare--file__description:hover .uploadcare--file__preview{color:#157cfc}.uploadcare--file__description:active,.uploadcare--file__description:active .uploadcare--file__preview{color:#0969ee}.uploadcare--file__description:focus{outline:2px solid rgba(21,124,252,.5);outline-offset:2px}.uploadcare--file__icon{max-height:100%;max-width:100%}.uploadcare--file__name{line-height:25px;margin:0;max-width:calc(100vw - 200px);overflow:hidden;text-overflow:ellipsis;transition:color .3s;white-space:nowrap}@media (min-width:760px){.uploadcare--file__name{max-width:350px}}.uploadcare--file__preview{-ms-flex-negative:0;-ms-flex-align:center;-ms-flex-pack:center;align-items:center;background:transparent;border:1px solid;border-radius:6px;box-sizing:border-box;color:#e3e1e1;display:-ms-flexbox;display:flex;flex-shrink:0;float:left;height:60px;justify-content:center;margin-right:10px;overflow:hidden;padding:2px;transition:border .3s;width:60px}.uploadcare--file__progressbar{-ms-flex-negative:0;-ms-flex-item-align:center;align-self:center;flex-shrink:0;height:10px;margin:0 10px;width:60px}.uploadcare--file__size{color:#a4a2a1;font-size:12.5px}.uploadcare--file_status_error,.uploadcare--file_status_error .uploadcare--file__description,.uploadcare--file_status_error .uploadcare--file__preview{color:#e66a6a!important}.uploadcare--file_status_error .uploadcare--file__name{color:hsla(0,71%,66%,.5)!important}.uploadcare--file_status_error .uploadcare--file__progressbar,.uploadcare--file_status_error .uploadcare--file__size,.uploadcare--file_status_uploaded .uploadcare--file__progressbar{display:none}.uploadcare--file_status_uploading,.uploadcare--file_status_uploading .uploadcare--file__description{color:#353535!important}.uploadcare--file_status_uploading .uploadcare--file__name{max-width:calc(100vw - 280px)}@media (min-width:760px){.uploadcare--file_status_uploading .uploadcare--file__name{max-width:270px}}.uploadcare--file_status_uploading .uploadcare--file__preview{background:#ffd800;color:#ffd800!important}.uploadcare--files{-ms-flex-positive:1;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;flex-grow:1;height:100%;overflow:auto;width:100%}.uploadcare--files__item{-ms-flex-negative:0;flex-shrink:0}.uploadcare--crop-sizes{-ms-flex-positive:1;-ms-flex-pack:distribute;display:-ms-flexbox;display:flex;flex-grow:1;justify-content:space-around}.uploadcare--crop-sizes__item{-ms-flex-pack:end;-ms-flex-align:center;align-items:center;background:transparent;border-color:transparent;color:#353535;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;height:65px;justify-content:flex-end;padding:0}.uploadcare--crop-sizes__item:focus,.uploadcare--crop-sizes__item:hover{background:transparent;border-color:transparent;color:#157cfc}.uploadcare--crop-sizes__item:active{background:transparent;border-color:transparent;color:#0969ee}.uploadcare--crop-sizes__item:disabled,.uploadcare--crop-sizes__item[aria-disabled=true]{border-color:transparent!important}.uploadcare--crop-sizes__item:after{content:attr(data-caption);display:block;font-size:14px;line-height:25px;text-transform:uppercase}@media (max-width:400px),(max-width:600px) and (orientation:landscape){.uploadcare--crop-sizes__item:after{font-size:12px}}.uploadcare--crop-sizes__item:before{-ms-flex-order:1;background:transparent;border-radius:50%;content:\"\";display:block;height:6px;margin:1px 0;order:1;width:6px}.uploadcare--crop-sizes__item_current:active,.uploadcare--crop-sizes__item_current:focus,.uploadcare--crop-sizes__item_current:hover{color:#353535}.uploadcare--crop-sizes__item_current:before{background:#157cfc}.uploadcare--crop-sizes__icon{border:2px solid;border-radius:2px;box-sizing:border-box;color:inherit;height:30px;transform:scale(.666);width:30px}.uploadcare--crop-sizes__icon_free{border:none;border-radius:0;transform:none}.uploadcare--file-source{background:#e3e1e1;border-color:#e3e1e1;color:#353535;margin:10px}.uploadcare--file-source_all{-ms-flex-order:1;background:transparent;border-color:currentColor;color:#157cfc;order:1}.uploadcare--file-sources{-ms-flex-negative:0;-ms-flex-align:center;align-items:center;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;flex-shrink:0;width:100%}@media (max-width:759px) and (max-height:450px),(min-width:760px){.uploadcare--file-sources{display:none}}.uploadcare--file-sources__caption{margin:15px 0 5px}@media (max-width:759px) and (max-height:550px){.uploadcare--file-sources__item:nth-child(4),.uploadcare--file-sources__item:nth-child(5),.uploadcare--file-sources__item:nth-child(6){display:none}}.uploadcare--file-sources__items{-ms-flex-pack:center;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;justify-content:center;max-width:300px}.uploadcare--file-sources__items:empty,.uploadcare--file-sources__items:not(.uploadcare--file-sources__items_many) .uploadcare--file-source__all{display:none}.uploadcare--media{-ms-flex-positive:1;-ms-flex-pack:center;-ms-flex-align:center;align-items:center;display:-ms-flexbox;display:flex;flex-grow:1;justify-content:center;position:relative;width:100%}.uploadcare--media__image{left:50%;max-height:100%;max-width:100%;position:absolute;top:50%;transform:translateX(-50%) translateY(-50%)}.uploadcare--media__video{all:initial;height:auto;max-height:100%;max-width:100%;min-height:100px;width:auto}@media (max-width:759px) and (max-height:379px){.uploadcare--media__video{max-height:120px}}@media (max-width:759px) and (min-height:380px) and (max-height:499px){.uploadcare--media__video{max-height:160px}}@media (max-width:759px) and (min-height:500px),(min-width:760px){.uploadcare--media__video{max-height:300px}}.uploadcare--camera__button{margin:5px 10px}.uploadcare--camera__button_type_mirror{left:50%;margin:0;position:absolute;top:15px;transform:translateX(-50%)}.uploadcare--camera__video{transition:transform .8s cubic-bezier(.23,1,.32,1)}.uploadcare--camera__video_mirrored{transform:scaleX(-1)}.uploadcare--camera__video-container{-ms-flex-positive:0;flex-grow:0;margin-bottom:10px;position:relative}.uploadcare--camera_status_denied .uploadcare--camera__button_type_cancel-record,.uploadcare--camera_status_denied .uploadcare--camera__button_type_capture,.uploadcare--camera_status_denied .uploadcare--camera__button_type_mirror,.uploadcare--camera_status_denied .uploadcare--camera__button_type_start-record,.uploadcare--camera_status_denied .uploadcare--camera__button_type_stop-record,.uploadcare--camera_status_denied .uploadcare--camera__controls,.uploadcare--camera_status_denied .uploadcare--camera__not-found,.uploadcare--camera_status_denied .uploadcare--camera__please-allow,.uploadcare--camera_status_denied .uploadcare--camera__video-container,.uploadcare--camera_status_not-founded .uploadcare--camera__button_type_cancel-record,.uploadcare--camera_status_not-founded .uploadcare--camera__button_type_capture,.uploadcare--camera_status_not-founded .uploadcare--camera__button_type_mirror,.uploadcare--camera_status_not-founded .uploadcare--camera__button_type_retry,.uploadcare--camera_status_not-founded .uploadcare--camera__button_type_start-record,.uploadcare--camera_status_not-founded .uploadcare--camera__button_type_stop-record,.uploadcare--camera_status_not-founded .uploadcare--camera__controls,.uploadcare--camera_status_not-founded .uploadcare--camera__please-allow,.uploadcare--camera_status_not-founded .uploadcare--camera__video-container,.uploadcare--camera_status_ready .uploadcare--camera__button_type_cancel-record,.uploadcare--camera_status_ready .uploadcare--camera__button_type_retry,.uploadcare--camera_status_ready .uploadcare--camera__button_type_stop-record,.uploadcare--camera_status_ready .uploadcare--camera__not-found,.uploadcare--camera_status_ready .uploadcare--camera__please-allow,.uploadcare--camera_status_recording .uploadcare--camera__button_type_capture,.uploadcare--camera_status_recording .uploadcare--camera__button_type_mirror,.uploadcare--camera_status_recording .uploadcare--camera__button_type_retry,.uploadcare--camera_status_recording .uploadcare--camera__button_type_start-record,.uploadcare--camera_status_recording .uploadcare--camera__device-select,.uploadcare--camera_status_recording .uploadcare--camera__not-found,.uploadcare--camera_status_recording .uploadcare--camera__please-allow,.uploadcare--camera_status_requested .uploadcare--camera__button_type_cancel-record,.uploadcare--camera_status_requested .uploadcare--camera__button_type_capture,.uploadcare--camera_status_requested .uploadcare--camera__button_type_mirror,.uploadcare--camera_status_requested .uploadcare--camera__button_type_retry,.uploadcare--camera_status_requested .uploadcare--camera__button_type_start-record,.uploadcare--camera_status_requested .uploadcare--camera__button_type_stop-record,.uploadcare--camera_status_requested .uploadcare--camera__controls,.uploadcare--camera_status_requested .uploadcare--camera__device-select,.uploadcare--camera_status_requested .uploadcare--camera__not-found,.uploadcare--camera_status_requested .uploadcare--camera__video-container{display:none}.uploadcare--camera__device-select{-ms-flex-negative:0;all:initial;background-image:linear-gradient(45deg,transparent 50%,#3891ff 0),linear-gradient(135deg,#3891ff 50%,transparent 0),linear-gradient(90deg,#ccc,#ccc);background-position:calc(100% - 20px) calc(1em + 2px),calc(100% - 15px) calc(1em + 2px),calc(100% - 2.5em) .5em;background-repeat:no-repeat;background-size:5px 5px,5px 5px,1px 1.5em;border:1px solid #157cfc;border-radius:6px;box-shadow:none;box-sizing:border-box;color:#157cfc;cursor:default;display:none;flex-shrink:0;font-family:inherit;font-size:15px;font-style:normal;font-weight:400;height:auto;line-height:20px;margin:5px 10px 15px;max-width:500px;min-height:0;min-width:100px;overflow:hidden;padding:10px 60px 10px 10px;text-align:center;text-overflow:ellipsis;text-shadow:none;transition:background .3s,color .3s,border .3s;white-space:nowrap;width:auto}.uploadcare--camera__device-select svg{pointer-events:none}.uploadcare--camera__device-select:focus,.uploadcare--camera__device-select:hover{border-color:#3891ff;box-shadow:none;color:#3891ff;font-style:normal;font-weight:400;text-shadow:none}.uploadcare--camera__device-select:focus{outline:2px solid rgba(21,124,252,.5);outline-offset:1px}.uploadcare--camera__device-select:active{border-color:#0969ee;color:#0969ee}@media (min-width:760px){.uploadcare--camera__device-select{font-size:17.5px;line-height:25px;padding:10px 60px 10px 20px}}.uploadcare--camera__device-select.uploadcare--camera__device-select_has-options{display:block}.uploadcare--crop-widget>.uploadcare--preview__image{filter:brightness(60%);transform:none}.uploadcare--tab{-ms-flex-align:stretch;align-items:stretch;overflow:hidden;text-align:center}.uploadcare--tab,.uploadcare--tab__content{-ms-flex-positive:1;-ms-flex-pack:center;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;flex-grow:1;justify-content:center}.uploadcare--tab__content{-ms-flex-negative:1;-ms-flex-align:center;align-items:center;flex-shrink:1;overflow-y:auto;padding:0 20px}.uploadcare--tab__header{-ms-flex-negative:0;flex-shrink:0;overflow:hidden;padding:0 20px}@media (min-width:760px){.uploadcare--tab__header{-ms-flex-align:center;align-items:center;display:-ms-flexbox;display:flex;height:60px;padding-right:60px}}.uploadcare--tab__iframe{-ms-flex-positive:1;border:0;flex-grow:1;height:100%;opacity:0;width:100%}.uploadcare--tab__title{margin-bottom:10px;margin-top:10px}.uploadcare--tab:not(.uploadcare--tab_current),.uploadcare--tab_name_preview.uploadcare--tab_current~.uploadcare--panel__footer{display:none}.uploadcare--tab_remote.uploadcare--tab_current~.uploadcare--panel__footer{margin-top:0}.uploadcare--panel{-ms-flex-negative:0;background:#fff;border:1px solid #a4a2a1;border-radius:6px;box-sizing:border-box;color:#353535;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;flex-shrink:0;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,Arial,sans-serif;font-size:15px;font-weight:400;height:500px;line-height:20px;overflow:hidden;position:relative;width:100%}@media (min-width:760px){.uploadcare--panel{-ms-flex-direction:row;flex-direction:row}}.uploadcare--panel>.uploadcare--icons{position:absolute}.uploadcare--panel__content{-ms-flex-positive:1;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;flex-grow:1;overflow:hidden}.uploadcare--panel__file-counter{display:inline}.uploadcare--panel__footer{background:#fff9d8;padding-top:15px}.uploadcare--panel__icon{box-sizing:border-box;padding:3px}.uploadcare--panel__menu_hidden{display:none}.uploadcare--panel__message_hidden{color:#d4d2d2}.uploadcare--panel__powered-by{background:#353535;color:hsla(0,0%,100%,.5)}@media (min-width:760px){.uploadcare--panel__powered-by{display:none}}.uploadcare--tab:not(:nth-child(2)).uploadcare--tab_current~.uploadcare--panel__powered-by{display:none}@media (max-width:759px){.uploadcare--panel_menu-hidden .uploadcare--tab__header{min-height:60px;padding:6px 60px 0}}.uploadcare--panel:not(.uploadcare--panel_multiple) .uploadcare--panel__footer{display:none}.uploadcare--panel_multiple .uploadcare--panel__content{position:relative}.uploadcare--panel_multiple .uploadcare--tab_name_preview{height:100%;left:0;position:absolute;top:0;width:100%}.uploadcare--panel_multiple .uploadcare--tab_name_preview .uploadcare--tab__content{padding-left:0;padding-right:0}.uploadcare--panel_multiple .uploadcare--tab_name_preview .uploadcare--tab__footer{margin-top:0;padding-top:15px;position:relative}.uploadcare--panel_multiple .uploadcare--tab_name_preview .uploadcare--tab__footer:before{background:#e3e1e1;content:\"\";height:1px;left:20px;position:absolute;top:0;width:calc(100% - 40px)}.uploadcare--preview__content{overflow:hidden}.uploadcare--preview__content_crop{padding:10px 20px}.uploadcare--dialog{-ms-flex-pack:start;-ms-flex-align:stretch;align-items:stretch;background:#fff;box-sizing:border-box;color:#353535;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,Arial,sans-serif;font-size:15px;font-weight:400;height:100%;justify-content:flex-start;left:0;line-height:20px;opacity:0;overflow:hidden;position:fixed;top:0;-ms-touch-action:none;touch-action:none;transition:opacity .33s cubic-bezier(.05,.7,.25,1);width:100%;z-index:2147483647}@media (min-width:760px){.uploadcare--dialog{-ms-flex-align:center;align-items:center;background:rgba(0,0,0,.5);overflow-y:auto}}@media (min-width:760px) and (max-height:559px){.uploadcare--dialog{padding-top:30px}}@media (min-width:760px) and (min-height:560px){.uploadcare--dialog{-ms-flex-pack:center;justify-content:center}}.uploadcare--dialog__close{position:absolute;right:0;top:0;z-index:49}.uploadcare--dialog__close:focus{outline-offset:-2px}.uploadcare--dialog__container{display:-ms-flexbox;display:flex;overflow:hidden;position:relative}@media (max-width:759px){.uploadcare--dialog__container{-ms-flex-positive:1;flex-grow:1;height:100%}}@media (min-width:760px){.uploadcare--dialog__container{border-radius:6px;height:calc(100% - 60px);-webkit-mask-image:-webkit-radial-gradient(#fff,#000);max-height:660px;max-width:900px;min-height:500px;width:calc(100% - 60px)}}@media (min-width:1210px){.uploadcare--dialog__container{max-width:1050px}}.uploadcare--dialog__panel{border:none;border-radius:0;height:100%}@media (min-width:1210px){.uploadcare--dialog__panel .uploadcare--menu,.uploadcare--dialog__panel .uploadcare--menu__item{width:250px}}.uploadcare--dialog__powered-by{-ms-flex-negative:0;flex-shrink:0}@media (max-width:759px){.uploadcare--dialog__powered-by{display:none}}.uploadcare--dialog_status_active{opacity:1}.uploadcare--widget{display:inline-block;vertical-align:baseline}.uploadcare--dragging .uploadcare--widget,.uploadcare--widget.uploadcare--dragging{position:relative}.uploadcare--widget__button{all:initial;background:#c3c3c3;border:none;border-radius:6px;box-shadow:none;box-sizing:border-box;color:#fff;cursor:default;display:inline-block;font:inherit;height:auto;line-height:inherit;margin:0;min-height:0;min-width:0;padding:.4em 1em;text-align:center;text-shadow:inherit;transition:background .3s;white-space:nowrap;width:auto}.uploadcare--widget__button:focus,.uploadcare--widget__button:hover{background:#b3b3b3;box-shadow:none;color:#fff;font:inherit;text-shadow:inherit}.uploadcare--widget__button:focus{outline:2px solid rgba(21,124,252,.5);outline-offset:1px}.uploadcare--widget__button:active{background:#b3b3b3}.uploadcare--widget__button:disabled{background:#c3c3c3;color:#fff;cursor:not-allowed}.uploadcare--widget__button_type_open{background:#157cfc;color:#fff}.uploadcare--widget__button_type_open:focus,.uploadcare--widget__button_type_open:hover{background:#3891ff}.uploadcare--widget__button_type_open:active{background:#0969ee}.uploadcare--widget__button_type_open:disabled{background:#c3c3c3}.uploadcare--widget__dragndrop-area{background:#e3e1e1;border:1.5px dashed;border-radius:6px;box-sizing:border-box;color:#a4a2a1;display:none;font:inherit;left:0;line-height:inherit;margin:0;min-height:100%;min-width:100%;padding:calc(.4em - 1.5px) 1em;position:absolute;text-align:center;top:0;transition:color .3s;white-space:nowrap}.uploadcare--dragging .uploadcare--widget__dragndrop-area{display:block}.uploadcare--widget.uploadcare--dragging .uploadcare--widget__dragndrop-area{color:#157cfc}.uploadcare--widget__file-name,.uploadcare--widget__file-size{display:inline}.uploadcare--widget__progress{display:inline-block;height:1.8em;line-height:0;margin:0 .2em 0 0;padding:0;vertical-align:middle;width:1.8em}.uploadcare--widget__text{box-sizing:border-box;display:inline-block;margin-right:.2em;padding:.4em 0;white-space:nowrap}.uploadcare--widget:not(.uploadcare--widget_option_clearable).uploadcare--widget_status_error .uploadcare--widget__button_type_remove,.uploadcare--widget:not(.uploadcare--widget_option_clearable).uploadcare--widget_status_loaded .uploadcare--widget__button_type_remove,.uploadcare--widget_option_clearable.uploadcare--widget_status_error .uploadcare--widget__button_type_open,.uploadcare--widget_status_error .uploadcare--widget__button_type_cancel,.uploadcare--widget_status_error .uploadcare--widget__progress,.uploadcare--widget_status_loaded .uploadcare--widget__button_type_cancel,.uploadcare--widget_status_loaded .uploadcare--widget__button_type_open,.uploadcare--widget_status_loaded .uploadcare--widget__progress,.uploadcare--widget_status_ready .uploadcare--widget__button_type_cancel,.uploadcare--widget_status_ready .uploadcare--widget__button_type_remove,.uploadcare--widget_status_ready .uploadcare--widget__progress,.uploadcare--widget_status_ready .uploadcare--widget__text,.uploadcare--widget_status_started .uploadcare--widget__button_type_open,.uploadcare--widget_status_started .uploadcare--widget__button_type_remove{display:none}.uploadcare--page{height:auto;max-height:100%;max-width:100%;min-height:0;min-width:0;overflow:hidden;width:auto}.uploadcare--mouse-focused:focus{outline:none}";

  var _icons = "<svg class=\"uploadcare--icons\" width=\"0\" height=\"0\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"><symbol viewBox=\"0 0 32 32\" id=\"uploadcare--icon-back\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M21.132 9.06a1.5 1.5 0 0 0-2.122-2.12L9.88 16.07l9.06 9.061a1.5 1.5 0 1 0 2.122-2.121l-6.94-6.94 7.01-7.01Z\"/></symbol><symbol viewBox=\"0 0 32 32\" id=\"uploadcare--icon-box\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M4.962 9C4.385 9 4 9.384 4 9.96v8.243C4 20.793 6.213 23 8.811 23c1.829 0 3.464-1.043 4.33-2.578.866 1.535 2.406 2.578 4.33 2.578 2.695 0 4.812-2.206 4.812-4.797 0-2.686-2.117-4.886-4.811-4.886-1.829 0-3.465 1.043-4.33 2.578-.77-1.535-2.406-2.578-4.33-2.578a4.957 4.957 0 0 0-2.887.96V9.958c0-.48-.482-.959-.963-.959Zm17.08 4.257a.841.841 0 0 0-.33.15c-.385.288-.5.965-.211 1.349l2.526 3.357-2.526 3.358c-.289.384-.174 1.061.21 1.35.385.287 1.065.173 1.354-.21l2.105-2.879 2.105 2.878c.288.384.968.498 1.353.21.385-.288.499-.965.21-1.349l-2.526-3.358 2.526-3.357c.289-.384.175-1.061-.21-1.35-.385-.287-1.065-.203-1.353.18l-2.105 2.879-2.105-2.878c-.217-.288-.657-.406-1.023-.33Zm-13.23 2.068c1.539 0 2.886 1.344 2.886 2.878.096 1.535-1.25 2.878-2.887 2.878a2.89 2.89 0 0 1-2.886-2.878c0-1.63 1.347-2.878 2.886-2.878Zm8.66 0a2.89 2.89 0 0 1 2.886 2.878c0 1.535-1.347 2.878-2.886 2.878a2.89 2.89 0 0 1-2.887-2.878c0-1.63 1.347-2.878 2.887-2.878Z\"/></symbol><symbol viewBox=\"0 0 32 32\" id=\"uploadcare--icon-camera\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M21 10h3c1.653 0 3 1.343 3 3v9c0 1.656-1.344 3-3.001 3H8A3 3 0 0 1 5 22v-9a3 3 0 0 1 3-3h3v-.999C11 7.901 11.895 7 13 7h6c1.113 0 2 .896 2 2.001V10Zm-5 12a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Zm0-2a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z\"/></symbol><symbol viewBox=\"0 0 32 32\" id=\"uploadcare--icon-close\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M10.06 7.94a1.5 1.5 0 0 0-2.12 2.12L13.878 16l-5.94 5.94a1.5 1.5 0 0 0 2.122 2.12L16 18.122l5.94 5.94a1.5 1.5 0 0 0 2.12-2.122L18.122 16l5.94-5.94a1.5 1.5 0 0 0-2.122-2.12L16 13.878l-5.94-5.94Z\"/></symbol><symbol viewBox=\"0 0 32 32\" id=\"uploadcare--icon-crop-free\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M8 12a2.004 2.004 0 0 1-2-2.01V8.01C6 6.897 6.893 6 8.01 6h1.98c1.109 0 2.005.888 2.01 2h8c.005-1.107.896-2 2.01-2h1.98C25.103 6 26 6.893 26 8.01v1.98A2.004 2.004 0 0 1 24 12v8c1.107.005 2 .896 2 2.01v1.98c0 1.112-.893 2.01-2.01 2.01h-1.98A2.004 2.004 0 0 1 20 24h-8a2.004 2.004 0 0 1-2.01 2H8.01A2.004 2.004 0 0 1 6 23.99v-1.98c0-1.109.888-2.005 2-2.01v-8Zm2 0v8a2.004 2.004 0 0 1 2 2h8a2.004 2.004 0 0 1 2-2v-8a2.004 2.004 0 0 1-2-2h-8a2.004 2.004 0 0 1-2 2Zm12 10.01v1.98c0 .01 0 .01.01.01h1.98c.01 0 .01 0 .01-.01v-1.98c0-.01 0-.01-.01-.01h-1.98c-.01 0-.01 0-.01.01Zm0-14v1.98c0 .01 0 .01.01.01h1.98c.01 0 .01 0 .01-.01V8.01C24 8 24 8 23.99 8h-1.98C22 8 22 8 22 8.01Zm-14 14v1.98c0 .01 0 .01.01.01h1.98c.01 0 .01 0 .01-.01v-1.98c0-.01 0-.01-.01-.01H8.01C8 22 8 22 8 22.01Zm0-14v1.98c0 .01 0 .01.01.01h1.98c.01 0 .01 0 .01-.01V8.01C10 8 10 8 9.99 8H8.01C8 8 8 8 8 8.01Z\"/></symbol><symbol viewBox=\"0 0 32 32\" id=\"uploadcare--icon-dropbox\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M9.5 5 16 9.141l-6.5 4.141L3 9.141 9.5 5Zm13 0L29 9.141l-6.5 4.141L16 9.141 22.5 5ZM3 17.423l6.5-4.141 6.5 4.141-6.5 4.141L3 17.423Zm19.5-4.141 6.5 4.141-6.5 4.141-6.5-4.141 6.5-4.141Zm-13 9.662 6.5-4.14 6.5 4.14-6.5 4.141-6.5-4.14Z\"/></symbol><symbol viewBox=\"0 0 32 32\" id=\"uploadcare--icon-empty-pubkey\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M16 31C7.716 31 1 24.284 1 16 1 7.716 7.716 1 16 1c8.284 0 15 6.716 15 15 0 8.284-6.716 15-15 15Zm0-13.704a1.296 1.296 0 1 0 0-2.592 1.296 1.296 0 0 0 0 2.592Z\"/></symbol><symbol viewBox=\"0 0 32 32\" id=\"uploadcare--icon-error\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M18.122 23.93V21a.583.583 0 0 0-.179-.434.585.585 0 0 0-.423-.175h-2.616a.585.585 0 0 0-.424.175.583.583 0 0 0-.179.434v2.93c0 .172.06.316.18.433.118.117.26.175.423.175h2.616a.585.585 0 0 0 .423-.175.583.583 0 0 0 .18-.434Zm-.037-6.326.339-9.05a.404.404 0 0 0-.189-.351c-.163-.135-.313-.203-.452-.203H14.64c-.138 0-.288.068-.452.203-.125.086-.188.215-.188.388l.32 9.013c0 .123.063.224.188.304.126.08.277.12.452.12h2.484c.176 0 .324-.04.443-.12a.41.41 0 0 0 .198-.304Z\"/></symbol><symbol viewBox=\"0 0 32 32\" id=\"uploadcare--icon-evernote\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M7.998 8.648h2.245a.233.233 0 0 0 .232-.233s-.028-1.931-.028-2.468v-.006c0-.441.093-.825.253-1.148l.077-.144a.05.05 0 0 0-.026.014l-4.359 4.34a.05.05 0 0 0-.016.025c.09-.044.213-.106.23-.113.38-.172.84-.267 1.392-.267M24.196 6.56c-.553-.2-1.675-.408-3.084-.575-1.134-.134-2.467-.123-3.272-.098-.097-.665-.56-1.272-1.08-1.482-1.384-.56-3.523-.424-4.071-.27-.437.123-.92.373-1.188.76-.18.258-.297.59-.298 1.051 0 .262.007.878.014 1.426.006.548.014 1.04.014 1.043a.887.887 0 0 1-.884.888H8.103c-.479 0-.845.08-1.124.208-.28.127-.478.3-.628.503-.3.404-.352.902-.351 1.411 0 0 .004.416.104 1.22.083.622.756 4.971 1.394 6.294.248.514.413.73.9.956 1.083.466 3.559.984 4.72 1.133 1.158.148 1.885.46 2.318-.451.002-.003.087-.227.204-.557.377-1.144.43-2.16.43-2.894 0-.075.108-.078.108 0 0 .519-.098 2.354 1.283 2.847.545.194 1.676.367 2.826.502 1.039.12 1.793.53 1.793 3.208 0 1.628-.34 1.851-2.122 1.851-1.444 0-1.994.038-1.994-1.113 0-.932.917-.834 1.596-.834.304 0 .083-.226.083-.8 0-.572.357-.902.02-.91-2.35-.066-3.733-.003-3.733 2.947 0 2.679 1.021 3.176 4.357 3.176 2.614 0 3.536-.086 4.616-3.45.213-.663.73-2.69 1.043-6.092.197-2.15-.187-8.644-.491-10.282-.178-.958-.746-1.43-1.259-1.616Zm-3.3 8.792a4.75 4.75 0 0 0-.923.056c.081-.66.353-1.473 1.316-1.439 1.066.037 1.216 1.049 1.22 1.734-.45-.201-1.006-.33-1.613-.35\"/></symbol><symbol viewBox=\"0 0 32 32\" id=\"uploadcare--icon-facebook\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M28 16c0-6.627-5.373-12-12-12S4 9.373 4 16c0 5.99 4.388 10.954 10.125 11.854V19.47h-3.047V16h3.047v-2.644c0-3.007 1.792-4.668 4.533-4.668 1.312 0 2.686.234 2.686.234v2.953H19.83c-1.491 0-1.956.925-1.956 1.875V16h3.328l-.532 3.469h-2.796v8.385C23.612 26.954 28 21.99 28 16Z\"/></symbol><symbol viewBox=\"0 0 32 32\" id=\"uploadcare--icon-file\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"m19 6 5 5h-4c-.556 0-1-.448-1-1V6Zm5 7v11.192c0 .995-.808 1.808-1.804 1.808H9.804A1.808 1.808 0 0 1 8 24.2V7.74C8 6.602 8.627 6 9.778 6H17v4.994c0 1.12.898 2.006 2.006 2.006H24Z\"/></symbol><symbol viewBox=\"0 0 32 32\" id=\"uploadcare--icon-flickr\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M11 20c-2.212 0-4-1.79-4-4s1.79-4 4-4a4 4 0 0 1 0 8Zm10.001 0a4 4 0 1 1-.002-8 4 4 0 0 1 .002 8Z\"/></symbol><symbol viewBox=\"0 0 32 32\" id=\"uploadcare--icon-gdrive\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"m19.461 6 7.109 12h-7.004L12.539 6h6.922Zm-9.27 19 3.467-6H27l-3.466 6H10.192ZM5 18.841l6.618-11.36 3.566 5.929-6.722 11.36L5 18.84Z\"/></symbol><symbol viewBox=\"0 0 32 32\" id=\"uploadcare--icon-gphotos\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M15.318 11.39V4.681A.682.682 0 0 1 16 4h.682a6.341 6.341 0 0 1 3.929 11.318h6.707A.682.682 0 0 1 28 16v.682a6.342 6.342 0 0 1-11.318 3.929v6.707A.682.682 0 0 1 16 28h-.682a6.342 6.342 0 0 1-3.929-11.318H4.682A.682.682 0 0 1 4 16v-.682a6.341 6.341 0 0 1 11.318-3.929Zm1.362 5.292a4.977 4.977 0 1 0 9.955 0H16.68Zm0-11.318a4.977 4.977 0 0 1 0 9.954V5.364Zm-1.362 9.954H5.364a4.977 4.977 0 1 1 9.954 0Zm0 1.362v9.956a4.977 4.977 0 0 1-.056-9.954l.056-.002Z\"/></symbol><symbol viewBox=\"0 0 32 32\" id=\"uploadcare--icon-huddle\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M13.63 14.39c.07-.102.17-.26.2-.313 1.474-2.683 6.857-2.686 8.49 1.002.43.968.67 1.97.675 3.023.008 1.978.004 3.957.002 5.936 0 1.192-.68 1.945-1.763 1.962-1.087.016-1.856-.766-1.865-1.944-.014-1.874.003-3.749-.006-5.623-.006-1.351-.654-2.388-1.719-2.793-1.775-.675-3.59.305-3.892 2.159-.122.747-.104 1.52-.114 2.281-.016 1.336-.002 2.673-.005 4.01-.003 1.125-.669 1.866-1.707 1.907-1.06.042-1.828-.668-1.922-1.78-.007-.086-.003-.173-.003-.26 0-5.31-.002-10.622.002-15.932 0-1.2.731-2.016 1.79-2.025 1.05-.01 1.832.74 1.837 1.792.01 2.013.003 4.026.005 6.04 0 .12.002.391-.005.558\"/></symbol><symbol viewBox=\"0 0 32 32\" id=\"uploadcare--icon-instagram\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M16 5c2.987 0 3.362.013 4.535.066 1.171.054 1.97.24 2.67.511a5.391 5.391 0 0 1 1.949 1.27 5.392 5.392 0 0 1 1.269 1.948c.272.7.457 1.499.51 2.67.054 1.173.067 1.548.067 4.535s-.013 3.362-.066 4.535c-.054 1.171-.24 1.97-.511 2.67a5.392 5.392 0 0 1-1.27 1.949 5.391 5.391 0 0 1-1.948 1.269c-.7.271-1.499.457-2.67.51-1.173.054-1.548.067-4.535.067s-3.362-.013-4.535-.066c-1.171-.054-1.97-.24-2.67-.511a5.392 5.392 0 0 1-1.949-1.27 5.391 5.391 0 0 1-1.268-1.948c-.273-.7-.458-1.499-.512-2.67C5.013 19.362 5 18.987 5 16s.013-3.362.066-4.535c.054-1.171.24-1.97.512-2.67a5.391 5.391 0 0 1 1.268-1.949 5.392 5.392 0 0 1 1.949-1.269c.7-.271 1.499-.457 2.67-.51C12.638 5.012 13.013 5 16 5Zm0 1.982c-2.937 0-3.285.011-4.445.064-1.072.049-1.655.228-2.042.379-.514.2-.88.438-1.265.823a3.41 3.41 0 0 0-.823 1.264c-.15.388-.33.97-.379 2.043-.053 1.16-.064 1.508-.064 4.445 0 2.937.011 3.285.064 4.445.049 1.072.228 1.655.379 2.043.2.513.438.88.823 1.264.385.385.751.624 1.265.823.387.15.97.33 2.042.379 1.16.053 1.508.064 4.445.064 2.937 0 3.285-.011 4.445-.064 1.072-.049 1.655-.228 2.042-.379.514-.2.88-.438 1.265-.823.385-.385.624-.751.823-1.264.15-.388.33-.97.379-2.043.053-1.16.064-1.508.064-4.445 0-2.937-.011-3.285-.064-4.445-.049-1.072-.228-1.655-.379-2.043-.2-.513-.438-.88-.823-1.264a3.408 3.408 0 0 0-1.265-.823c-.387-.15-.97-.33-2.042-.379-1.16-.053-1.508-.064-4.445-.064Zm0 3.37a5.649 5.649 0 1 1 0 11.297 5.649 5.649 0 0 1 0-11.298Zm0 9.315a3.667 3.667 0 1 0 0-7.334 3.667 3.667 0 0 0 0 7.334Zm7.192-9.539a1.32 1.32 0 1 1-2.64 0 1.32 1.32 0 0 1 2.64 0Z\"/></symbol><symbol viewBox=\"0 0 32 32\" id=\"uploadcare--icon-menu\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M7.5 10a1.5 1.5 0 0 1 0-3h17a1.5 1.5 0 0 1 0 3h-17Zm0 7a1.5 1.5 0 0 1 0-3h17a1.5 1.5 0 0 1 0 3h-17Zm0 7a1.5 1.5 0 0 1 0-3h17a1.5 1.5 0 0 1 0 3h-17Z\"/></symbol><symbol viewBox=\"0 0 32 32\" id=\"uploadcare--icon-more\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M21 16a3 3 0 1 1 6 0 3 3 0 0 1-6 0Zm-8 0a3 3 0 1 1 6 0 3 3 0 0 1-6 0Zm-8 0a3 3 0 1 1 6 0 3 3 0 0 1-6 0Z\"/></symbol><symbol viewBox=\"0 0 32 32\" id=\"uploadcare--icon-nft\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M15.76 3.252c-.059.138-1.805 3.07-3.881 6.515-2.077 3.446-3.793 6.31-3.814 6.365-.028.072 1.1.773 3.955 2.46l3.995 2.36 3.992-2.36c2.87-1.697 3.983-2.39 3.955-2.463C23.817 15.753 16.052 3 15.968 3c-.057 0-.151.113-.209.252ZM8.073 17.829c.154.263 7.908 11.172 7.94 11.171.053-.002 7.98-11.203 7.95-11.234-.03-.029-7.439 4.335-7.748 4.563l-.19.14-3.835-2.265a734.48 734.48 0 0 1-4.01-2.377c-.158-.101-.167-.101-.107.002Z\"/></symbol><symbol viewBox=\"0 0 32 32\" id=\"uploadcare--icon-onedrive\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M11.715 16.427c.584-2.413 2.699-4.177 5.209-4.177 1.483 0 2.873.621 3.878 1.7.425-.14.922-.248 1.364-.258v-.16c0-3.054-2.214-5.532-4.944-5.532-1.952 0-3.624 1.278-4.428 3.115a3.55 3.55 0 0 0-2.033-.658c-2.142 0-3.877 1.94-3.877 4.336 0 .258.028.51.068.754-1.652.167-2.946 1.9-2.946 3.79 0 .02.005.037.005.056-.001.017-.011.035-.011.052 0 .757.257 1.449.673 2.007a3.14 3.14 0 0 0 2.568 1.317h1.513a4.49 4.49 0 0 1-.477-1.987c-.001-2.138 1.476-3.93 3.438-4.355Zm13.752 2.375c-.03 0-.06.01-.09.01.008-.09.026-.18.026-.273 0-1.812-1.431-3.279-3.198-3.279-.703 0-1.347.24-1.877.635-.655-1.249-1.924-2.107-3.405-2.107-2.146 0-3.885 1.784-3.885 3.984 0 .029.008.053.009.082a2.764 2.764 0 0 0-.431-.045c-1.602 0-2.898 1.33-2.898 2.973 0 .205.02.406.059.599C10.05 22.87 11.322 24 12.856 24h12.847v-.023C26.99 23.85 28 22.753 28 21.402c0-1.435-1.134-2.6-2.533-2.6Z\"/></symbol><symbol viewBox=\"0 0 32 32\" id=\"uploadcare--icon-remove\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M22.142 24.009c-.078 1.1-1.044 1.991-2.15 1.991h-7.983c-1.11 0-2.073-.897-2.151-1.991l-.786-11.002A.924.924 0 0 1 10.007 12h11.986c.556 0 .975.45.935 1.007l-.786 11.002ZM13 7V6c0-.556.444-1 .99-1h4.02A1 1 0 0 1 19 6v1h4c.556 0 1 .447 1 .999v1.002A.997.997 0 0 1 23 10H9c-.555 0-1-.447-1-.999V7.999A.996.996 0 0 1 9 7h4Z\"/></symbol><symbol viewBox=\"0 0 32 32\" id=\"uploadcare--icon-uploadcare\" xmlns=\"http://www.w3.org/2000/svg\"><path fill=\"#ffd800\" d=\"M16 31C7.716 31 1 24.284 1 16 1 7.716 7.716 1 16 1c8.284 0 15 6.716 15 15 0 8.284-6.716 15-15 15Zm0-13.704a1.296 1.296 0 1 0 0-2.592 1.296 1.296 0 0 0 0 2.592Z\"/></symbol><symbol viewBox=\"0 0 32 32\" id=\"uploadcare--icon-url\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M16 5c6.074 0 11 4.926 11 11s-4.926 11-11 11S5 22.074 5 16 9.926 5 16 5Zm6.076 6.327a.992.992 0 1 0-1.403-1.403l-1.128 1.128c-1.431-.92-3.47-.768-4.697.461l-3.186 3.185a3.7 3.7 0 0 0-1.09 2.636c0 .748.22 1.46.624 2.067l-1.272 1.272a.992.992 0 1 0 1.402 1.403l1.273-1.272c.606.405 1.32.623 2.067.623.997 0 1.933-.386 2.634-1.089l3.187-3.186a3.729 3.729 0 0 0 .464-4.7l1.125-1.125Zm-4.252 3.841a.982.982 0 0 0 .701-.29l.95-.95c.067.188.114.385.114.591 0 .466-.178.904-.505 1.23l-3.186 3.187c-.472.47-1.197.588-1.813.382l.793-.792a.992.992 0 1 0-1.404-1.404l-.801.802a1.752 1.752 0 0 1-.115-.59c0-.468.179-.905.506-1.232l3.186-3.186a1.736 1.736 0 0 1 1.23-.507c.207 0 .404.049.592.116l-.948.95a.992.992 0 0 0 .7 1.693Z\"/></symbol><symbol viewBox=\"0 0 32 32\" id=\"uploadcare--icon-vk\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M27.791 21.484c-.416-.767-1.212-1.708-2.386-2.824l-.038-.038c-.558-.532-.895-.882-1.037-1.06-.258-.341-.316-.686-.175-1.036.1-.264.475-.821 1.125-1.673.341-.451.612-.813.812-1.086 1.441-1.959 2.066-3.21 1.874-3.756l-.074-.127c-.05-.077-.18-.147-.387-.211-.209-.064-.475-.075-.8-.032l-3.599.025a.457.457 0 0 0-.25.007l-.163.038-.062.032-.05.039a.56.56 0 0 0-.137.134.882.882 0 0 0-.125.223 21.072 21.072 0 0 1-1.337 2.875 27.31 27.31 0 0 1-.85 1.373c-.258.388-.475.673-.65.856a4.57 4.57 0 0 1-.475.44c-.141.112-.25.158-.324.141a8.987 8.987 0 0 1-.213-.05.843.843 0 0 1-.281-.314 1.425 1.425 0 0 1-.144-.498c-.025-.2-.04-.373-.044-.518-.003-.144-.002-.349.007-.613.008-.264.012-.443.012-.536 0-.324.007-.675.019-1.054l.031-.901c.009-.222.013-.456.013-.703 0-.247-.015-.44-.044-.581a2.02 2.02 0 0 0-.131-.409.684.684 0 0 0-.256-.307 1.426 1.426 0 0 0-.419-.172c-.441-.102-1.004-.158-1.687-.166-1.55-.017-2.545.085-2.986.307a1.69 1.69 0 0 0-.475.383c-.15.187-.171.29-.063.306.5.077.854.26 1.062.55l.075.153c.059.11.117.307.175.588.059.28.096.592.113.932.041.622.041 1.154 0 1.597-.042.443-.081.788-.119 1.035a2.107 2.107 0 0 1-.169.6 2.55 2.55 0 0 1-.15.281.217.217 0 0 1-.062.064.918.918 0 0 1-.337.064c-.117 0-.259-.06-.425-.179a3.024 3.024 0 0 1-.519-.492c-.179-.208-.38-.5-.606-.875a15.385 15.385 0 0 1-.7-1.328l-.2-.37a32.156 32.156 0 0 1-.512-1.042 20.306 20.306 0 0 1-.575-1.323.84.84 0 0 0-.3-.408l-.062-.039a.85.85 0 0 0-.2-.108 1.304 1.304 0 0 0-.287-.083L4.8 9.64c-.35 0-.587.081-.712.243l-.05.077a.421.421 0 0 0-.038.204c0 .094.025.209.075.345.5 1.201 1.043 2.36 1.63 3.475C6.294 15.1 6.804 16 7.237 16.68c.433.681.875 1.324 1.325 1.929.45.604.748.992.893 1.162.146.17.26.298.344.384l.312.306c.2.205.494.45.881.735.388.285.817.566 1.287.843.471.277 1.019.503 1.644.677a5.564 5.564 0 0 0 1.824.211h1.437c.292-.026.512-.12.662-.281l.05-.064a.858.858 0 0 0 .094-.236c.029-.107.044-.224.044-.351a4.301 4.301 0 0 1 .08-.99c.063-.294.134-.516.213-.665a1.632 1.632 0 0 1 .482-.562.806.806 0 0 1 .1-.045c.2-.068.434-.002.705.199.271.2.525.447.763.74.237.295.522.625.856.99.333.367.625.64.874.818l.25.154c.167.102.384.196.65.28.266.086.5.107.7.065l3.199-.051c.316 0 .562-.054.737-.16.175-.107.279-.224.312-.351.034-.128.035-.273.007-.435a1.632 1.632 0 0 0-.088-.338 1.694 1.694 0 0 0-.082-.16Z\"/></symbol></svg>";

  var JST = {
    dialog: dialog,
    dialog__panel: dialogPanel,
    progress__text: progressText,
    'tab-camera-capture': tabCameraCapture,
    'tab-camera': tabCamera,
    'tab-file': tabFile,
    'tab-preview-error': tabPreviewError,
    'tab-preview-image': tabPreviewImage,
    'tab-preview-multiple-file': tabPreviewMultipleFile,
    'tab-preview-multiple': tabPreviewMultiple,
    'tab-preview-regular': tabPreviewRegular,
    'tab-preview-unknown': tabPreviewUnknown,
    'tab-preview-video': tabPreviewVideo,
    'tab-url': tabUrl,
    'widget-button': widgetButton,
    'widget-file-name': widgetFileName,
    widget: widget,
    icons: function icons() {
      return _icons;
    },
    styles: function styles() {
      return _styles;
    }
  };

  var tpl = function tpl(key) {
    var ctx = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var fn = JST[key];
    return fn != null ? fn(_objectSpread2({}, ctx)) : '';
  };

  isWindowDefined() && waitForSettings.add(function (settings) {
    var css = tpl('styles', {
      settings: settings
    });
    var style = document.createElement('style');
    style.setAttribute('type', 'text/css');

    if (style.styleSheet != null) {
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(document.createTextNode(css));
    }

    return $__default["default"]('head').prepend(style);
  });

  var canSubmit = function canSubmit(form) {
    var notSubmittable;
    notSubmittable = '[data-status=started], [data-status=error]';
    return !form.find('.uploadcare--widget').is(notSubmittable);
  };

  var submitPreventionState = function submitPreventionState(form, prevent) {
    form.attr('data-uploadcare-submitted', prevent);
    return form.find(':submit').attr('disabled', prevent);
  };

  var uploadForm = '[role~="uploadcare-upload-form"]';
  var submittedForm = uploadForm + '[data-uploadcare-submitted]';

  if (isWindowDefined()) {
    $__default["default"](document).on('submit', uploadForm, function () {
      var form;
      form = $__default["default"](this);

      if (canSubmit(form)) {
        return true; // allow submit
      } else {
        submitPreventionState(form, true);
        return false;
      }
    });
    $__default["default"](document).on('loaded.uploadcare', submittedForm, function () {
      return $__default["default"](this).submit();
    });
    var cancelEvents = 'ready.uploadcare error.uploadcare';
    $__default["default"](document).on(cancelEvents, submittedForm, function () {
      var form;
      form = $__default["default"](this);

      if (canSubmit(form)) {
        return submitPreventionState(form, false);
      }
    });
  }

  var fakeButtons = ['.uploadcare--menu__item', '.uploadcare--file__description', '.uploadcare--crop-sizes__item'].join(', ');
  var mouseFocusedClass = 'uploadcare--mouse-focused';
  isWindowDefined() && $__default["default"](document.documentElement).on('mousedown', fakeButtons, function (e) {
    // http://wd.dizaina.net/internet-maintenance/on-outlines/
    return defer(function () {
      var activeElement;
      activeElement = document.activeElement;

      if (activeElement && activeElement !== document.body) {
        return $__default["default"](activeElement).addClass(mouseFocusedClass).one('blur', function () {
          return $__default["default"](activeElement).removeClass(mouseFocusedClass);
        });
      }
    });
  }).on('keypress', fakeButtons, function (e) {
    // 13 = Return, 32 = Space
    if (e.which === 13 || e.which === 32) {
      $__default["default"](this).click();
      e.preventDefault();
      return e.stopPropagation();
    }
  });

  var Circle = /*#__PURE__*/function () {
    function Circle(element) {
      _classCallCheck(this, Circle);

      if (canvas) {
        this.renderer = new CanvasRenderer(element);
      } else {
        this.renderer = new TextRenderer(element);
      }

      this.observed = null;
    }

    _createClass(Circle, [{
      key: "listen",
      value: function listen(file, selector) {
        var _this = this;

        var selectorFn;
        this.reset();
        selectorFn = selector != null ? function (info) {
          return info[selector];
        } : function (x) {
          return x;
        };
        this.observed = file;

        if (this.observed.state() === 'resolved') {
          this.renderer.setValue(1, true);
        } else {
          this.observed.progress(function (progress) {
            // if we are still listening to this one
            if (file === _this.observed) {
              _this.renderer.setValue(selectorFn(progress));
            }
          }).always(function (uploadedFile) {
            if (file === _this.observed) {
              _this.renderer.setValue(1, false);
            }
          });
        }

        return this;
      }
    }, {
      key: "reset",
      value: function reset() {
        var filled = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
        this.observed = null;
        this.renderer.setValue(filled ? 1 : 0, true);
      }
    }, {
      key: "update",
      value: function update() {
        this.renderer.update();
      }
    }]);

    return Circle;
  }();

  var BaseRenderer = /*#__PURE__*/function () {
    function BaseRenderer(el) {
      _classCallCheck(this, BaseRenderer);

      this.element = $__default["default"](el);
      this.element.data('uploadcare-progress-renderer', this);
      this.element.addClass('uploadcare--progress');
    }

    _createClass(BaseRenderer, [{
      key: "update",
      value: function update() {}
    }]);

    return BaseRenderer;
  }();

  var TextRenderer = /*#__PURE__*/function (_BaseRenderer) {
    _inherits(TextRenderer, _BaseRenderer);

    var _super = _createSuper(TextRenderer);

    function TextRenderer() {
      var _this2;

      _classCallCheck(this, TextRenderer);

      _this2 = _super.apply(this, arguments);

      _this2.element.addClass('uploadcare--progress_type_text');

      _this2.element.html(tpl('progress__text'));

      _this2.text = _this2.element.find('.uploadcare--progress__text');
      return _this2;
    }

    _createClass(TextRenderer, [{
      key: "setValue",
      value: function setValue(val) {
        val = Math.round(val * 100);
        this.text.html("".concat(val, " %"));
      }
    }]);

    return TextRenderer;
  }(BaseRenderer);

  var CanvasRenderer = /*#__PURE__*/function (_BaseRenderer2) {
    _inherits(CanvasRenderer, _BaseRenderer2);

    var _super2 = _createSuper(CanvasRenderer);

    function CanvasRenderer() {
      var _this3;

      _classCallCheck(this, CanvasRenderer);

      _this3 = _super2.apply(this, arguments);
      _this3.canvasEl = $__default["default"]('<canvas>').addClass('uploadcare--progress__canvas').get(0);

      _this3.element.addClass('uploadcare--progress_type_canvas');

      _this3.element.html(_this3.canvasEl);

      _this3.setValue(0, true);

      return _this3;
    }

    _createClass(CanvasRenderer, [{
      key: "update",
      value: function update() {
        var _this4 = this;

        window.cancelAnimationFrame(this.__rafId);
        this.__rafId = window.requestAnimationFrame(function () {
          var half = Math.floor(Math.min(_this4.element.width(), _this4.element.height()));
          var size = half * 2;

          if (half) {
            if (_this4.canvasEl.width !== size || _this4.canvasEl.height !== size) {
              _this4.canvasEl.width = size;
              _this4.canvasEl.height = size;
            }

            var ctx = _this4.canvasEl.getContext('2d');

            var arc = function arc(radius, val) {
              var offset;
              offset = -Math.PI / 2;
              ctx.beginPath();
              ctx.moveTo(half, half);
              ctx.arc(half, half, radius, offset, offset + 2 * Math.PI * val, false);
              ctx.fill();
            }; // Clear


            ctx.clearRect(0, 0, size, size); // Background circle

            ctx.globalCompositeOperation = 'source-over';
            ctx.fillStyle = _this4.element.css('border-left-color');
            arc(half - 0.5, 1); // Progress circle

            ctx.fillStyle = _this4.element.css('color');
            arc(half, _this4.val); // Make a hole

            ctx.globalCompositeOperation = 'destination-out';
            arc(half / 7, 1);
          }
        });
      }
    }, {
      key: "__animateValue",
      value: function __animateValue(target) {
        var _this5 = this;

        var speed, start, val;
        val = this.val;
        start = new Date();
        speed = target > val ? 2 : -2;
        this.__animIntervalId = setInterval(function () {
          var current;
          current = val + (new Date() - start) / 1000 * speed;
          current = (speed > 0 ? Math.min : Math.max)(current, target);

          if (current === target) {
            _this5.__stopAnimation();
          }

          _this5.__setValue(current);
        }, 15);
      }
    }, {
      key: "__stopAnimation",
      value: function __stopAnimation() {
        if (this.__animIntervalId) {
          clearInterval(this.__animIntervalId);
        }

        this.__animIntervalId = null;
      }
    }, {
      key: "__setValue",
      value: function __setValue(val) {
        this.val = val;
        this.element.attr('aria-valuenow', (val * 100).toFixed(0));
        this.update();
      }
    }, {
      key: "setValue",
      value: function setValue(val) {
        var instant = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

        this.__stopAnimation();

        if (instant) {
          this.__setValue(val);
        } else {
          this.__animateValue(val);
        }
      }
    }]);

    return CanvasRenderer;
  }(BaseRenderer);

  var support = fileDragAndDrop;

  var uploadDrop = function uploadDrop(el, callback, settings) {
    settings = build(settings);
    return receiveDrop(el, function (type, data) {
      return callback(settings.multiple ? filesFrom(type, data, settings) : fileFrom(type, data[0], settings));
    });
  };

  var receiveDrop = !support ? function () {} : function (el, callback) {
    watchDragging(el);
    $__default["default"](el).on({
      dragover: function dragover(e) {
        e.preventDefault(); // Prevent opening files.
        // This is way to change cursor.

        e.originalEvent.dataTransfer.dropEffect = 'copy';
      },
      drop: function drop(e) {
        var dt, i, len, ref, uri, uris;
        e.preventDefault(); // Prevent opening files.

        dt = e.originalEvent.dataTransfer;

        if (!dt) {
          return;
        }

        if (dt.files.length) {
          // eslint-disable-next-line n/no-callback-literal
          return callback('object', dt.files);
        } else {
          uris = [];
          ref = dt.getData('text/uri-list').split();

          for (i = 0, len = ref.length; i < len; i++) {
            uri = ref[i];
            uri = $__default["default"].trim(uri);

            if (uri && uri[0] !== '#') {
              uris.push(uri);
            }
          }

          if (uris) {
            // eslint-disable-next-line n/no-callback-literal
            return callback('url', uris);
          }
        }
      }
    });
  };
  var watchDragging = !support ? function () {} : function (el, receiver) {
    var changeState, counter, lastActive;
    lastActive = false;
    counter = 0;

    changeState = function changeState(active) {
      if (lastActive !== active) {
        lastActive = active;
        return $__default["default"](el).toggleClass('uploadcare--dragging', active);
      }
    };

    return $__default["default"](receiver || el).on({
      dragenter: function dragenter() {
        counter += 1;
        return changeState(true);
      },
      dragleave: function dragleave() {
        counter -= 1;

        if (counter === 0) {
          return changeState(false);
        }
      },
      'drop mouseenter': function dropMouseenter() {
        counter = 0;
        return changeState(false);
      }
    });
  };
  isWindowDefined() && watchDragging('body', document);

  var Template = /*#__PURE__*/function () {
    function Template(settings, element) {
      _classCallCheck(this, Template);

      this.settings = settings;
      this.element = element;
      this.content = $__default["default"](tpl('widget'));
      this.element.after(this.content);
      this.circle = new Circle(this.content.find('.uploadcare--widget__progress').removeClass('uploadcare--widget__progress'));
      this.content.find('.uploadcare--progress').addClass('uploadcare--widget__progress');
      this.statusText = this.content.find('.uploadcare--widget__text');
      this.content.toggleClass('uploadcare--widget_option_clearable', this.settings.clearable);
    }

    _createClass(Template, [{
      key: "addButton",
      value: function addButton(name) {
        var caption = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
        return $__default["default"](tpl('widget-button', {
          name: name,
          caption: caption
        })).appendTo(this.content);
      }
    }, {
      key: "setStatus",
      value: function setStatus(status) {
        var prefix;
        prefix = 'uploadcare--widget_status_';
        this.content.removeClass(prefix + this.content.attr('data-status'));
        this.content.attr('data-status', status);
        this.content.addClass(prefix + status);
        return this.element.trigger("".concat(status, ".uploadcare"));
      }
    }, {
      key: "reset",
      value: function reset() {
        this.circle.reset();
        this.setStatus('ready');
        this.content.attr('aria-busy', false);
        this.__file = undefined;
        return this.__file;
      }
    }, {
      key: "loaded",
      value: function loaded() {
        this.setStatus('loaded');
        this.content.attr('aria-busy', false);
        return this.circle.reset(true);
      }
    }, {
      key: "listen",
      value: function listen(file) {
        var _this = this;

        this.__file = file;
        this.circle.listen(file, 'uploadProgress');
        this.setStatus('started');
        this.content.attr('aria-busy', true);
        return file.progress(function (info) {
          if (file === _this.__file) {
            switch (info.state) {
              case 'uploading':
                return _this.statusText.text(locale.t('uploading'));

              case 'uploaded':
                return _this.statusText.text(locale.t('loadingInfo'));
            }
          }
        });
      }
    }, {
      key: "error",
      value: function error(errorType, _error) {
        var text = this.settings.debugUploads && (_error === null || _error === void 0 ? void 0 : _error.message) || locale.t("serverErrors.".concat(_error === null || _error === void 0 ? void 0 : _error.code)) || (_error === null || _error === void 0 ? void 0 : _error.message) || locale.t("errors.".concat(errorType || 'default'));
        this.statusText.text(text);
        this.content.attr('aria-busy', false);
        return this.setStatus('error');
      }
    }, {
      key: "setFileInfo",
      value: function setFileInfo(info) {
        return this.statusText.html(tpl('widget-file-name', info)).find('.uploadcare--widget__file-name').toggleClass('needsclick', this.settings.systemDialog);
      }
    }]);

    return Template;
  }();

  var FileTab = /*#__PURE__*/function () {
    function FileTab(container, tabButton1, dialogApi, settings, name1) {
      _classCallCheck(this, FileTab);

      this.__initTabsList = this.__initTabsList.bind(this);
      this.container = container;
      this.tabButton = tabButton1;
      this.dialogApi = dialogApi;
      this.settings = settings;
      this.name = name1;
      this.container.append(tpl('tab-file'));

      this.__setupFileButton();

      this.__initDragNDrop();

      this.__initTabsList();
    }

    _createClass(FileTab, [{
      key: "__initDragNDrop",
      value: function __initDragNDrop() {
        var _this = this;

        var dropArea;
        dropArea = this.container.find('.uploadcare--draganddrop');

        if (fileDragAndDrop) {
          receiveDrop(dropArea, function (type, files) {
            if (_this.settings.multiple) {
              _this.dialogApi.addFiles(type, files);
            } else {
              _this.dialogApi.addFiles(type, [files[0]]);
            }

            return _this.dialogApi.switchTab('preview');
          });
          return dropArea.addClass('uploadcare--draganddrop_supported');
        }
      }
    }, {
      key: "__setupFileButton",
      value: function __setupFileButton() {
        var _this2 = this;

        var fileButton;
        fileButton = this.container.find('.uploadcare--tab__action-button');

        if (sendFileAPI) {
          return fileButton.on('click', function () {
            fileSelectDialog(_this2.container, _this2.settings, function (input) {
              _this2.dialogApi.addFiles('object', input.files);

              return _this2.dialogApi.switchTab('preview');
            });
            return false;
          });
        } else {
          return fileInput(fileButton, this.settings, function (input) {
            _this2.dialogApi.addFiles('input', [input]);

            return _this2.dialogApi.switchTab('preview');
          });
        }
      }
    }, {
      key: "__initTabsList",
      value: function __initTabsList() {
        var _this3 = this;

        var i, len, list, n, ref, tab;
        list = this.container.find('.uploadcare--file-sources__items');
        list.remove('.uploadcare--file-sources__item:not(.uploadcare--file-source_all)');
        n = 0;
        ref = this.settings.tabs;

        for (i = 0, len = ref.length; i < len; i++) {
          tab = ref[i];

          if (tab === 'file' || tab === 'url' || tab === 'camera') {
            continue;
          }

          if (!this.dialogApi.isTabVisible(tab)) {
            continue;
          }

          n += 1;

          if (n > 5) {
            continue;
          }

          list.append([this.__tabButton(tab), ' ']);
        }

        list.find('.uploadcare--file-source_all').on('click', function () {
          return _this3.dialogApi.openMenu();
        });

        if (n > 5) {
          list.addClass('uploadcare--file-sources__items_many');
        }

        return this.container.find('.uploadcare--file-sources').attr('hidden', n === 0);
      }
    }, {
      key: "__tabButton",
      value: function __tabButton(name) {
        var _this4 = this;

        var tabIcon;
        tabIcon = $__default["default"]("<svg width='32' height='32'><use xlink:href='#uploadcare--icon-".concat(name, "'/></svg>")).attr('role', 'presentation').attr('class', 'uploadcare--icon uploadcare--file-source__icon');
        return $__default["default"]('<button>').addClass('uploadcare--button').addClass('uploadcare--button_icon').addClass('uploadcare--file-source').addClass("uploadcare--file-source_".concat(name)).addClass('uploadcare--file-sources__item').attr('type', 'button').attr('title', locale.t("dialog.tabs.names.".concat(name))).attr('data-tab', name).append(tabIcon).on('click', function () {
          return _this4.dialogApi.switchTab(name);
        });
      }
    }, {
      key: "displayed",
      value: function displayed() {
        this.dialogApi.takeFocus() && this.container.find('.uploadcare--tab__action-button').focus();
      }
    }]);

    return FileTab;
  }();

  var fixUrl, urlRegexp;

  var UrlTab = /*#__PURE__*/function () {
    function UrlTab(container, tabButton, dialogApi, settings, name) {
      var _this = this;

      _classCallCheck(this, UrlTab);

      var button, input;
      this.container = container;
      this.tabButton = tabButton;
      this.dialogApi = dialogApi;
      this.settings = settings;
      this.name = name;
      this.container.append(tpl('tab-url'));
      input = this.container.find('.uploadcare--input');
      input.on('change keyup input', function () {
        var isDisabled = !$__default["default"].trim(this.value);
        return button.attr('disabled', isDisabled).attr('aria-disabled', isDisabled);
      });
      button = this.container.find('.uploadcare--button[type=submit]').attr('disabled', true);
      this.container.find('.uploadcare--form').on('submit', function () {
        var url = fixUrl(input.val());

        if (url) {
          _this.dialogApi.addFiles('url', [[url, {
            source: 'url-tab'
          }]]);

          input.val('').trigger('change');
        }

        return false;
      });
    }

    _createClass(UrlTab, [{
      key: "displayed",
      value: function displayed() {
        this.dialogApi.takeFocus() && this.container.find('.uploadcare--input').focus();
      }
    }]);

    return UrlTab;
  }(); // starts with scheme


  urlRegexp = /^[a-z][a-z0-9+\-.]*:?\/\//;

  fixUrl = function fixUrl(url) {
    url = $__default["default"].trim(url);

    if (urlRegexp.test(url)) {
      return url;
    } else {
      return 'http://' + url;
    }
  };

  function find(arr, predicate) {
    var len = arr.length;
    var k = 0;

    while (k < len) {
      var kValue = arr[k];

      if (predicate(kValue)) {
        return kValue;
      }

      k++;
    }

    return undefined;
  }

  var isSecure = isWindowDefined() && document.location.protocol === 'https:';

  var CameraTab = /*#__PURE__*/function () {
    function CameraTab(container1, tabButton, dialogApi, settings, name1) {
      _classCallCheck(this, CameraTab);

      var video;
      this.__captureInput = this.__captureInput.bind(this);
      this.__captureInputHandle = this.__captureInputHandle.bind(this);
      this.__setState = this.__setState.bind(this);
      this.__requestCamera = this.__requestCamera.bind(this);
      this.__revoke = this.__revoke.bind(this);
      this.__mirror = this.__mirror.bind(this);
      this.__capture = this.__capture.bind(this);
      this.__startRecording = this.__startRecording.bind(this);
      this.__stopRecording = this.__stopRecording.bind(this);
      this.__cancelRecording = this.__cancelRecording.bind(this);
      this.__onDeviceSelect = this.__onDeviceSelect.bind(this);
      this.__requestDevicesList = this.__requestDevicesList.bind(this);
      this.container = container1;
      this.tabButton = tabButton;
      this.dialogApi = dialogApi;
      this.settings = settings;
      this.name = name1;

      if (this.__checkCapture()) {
        this.container.append(tpl('tab-camera-capture'));
        this.container.addClass('uploadcare--camera');
        this.container.find('.uploadcare--camera__button_type_photo').on('click', this.__captureInput('image/*'));
        video = this.container.find('.uploadcare--camera__button_type_video').on('click', this.__captureInput('video/*'));

        if (this.settings.imagesOnly) {
          video.hide();
        }
      } else {
        if (!this.__checkCompatibility()) {
          this.dialogApi.hideTab(this.name);
          return;
        }

        this.__initCamera();
      }
    }

    _createClass(CameraTab, [{
      key: "__captureInput",
      value: function __captureInput(accept) {
        var _this = this;

        return function () {
          return fileSelectDialog(_this.container, {
            inputAcceptTypes: accept
          }, _this.__captureInputHandle, {
            capture: 'camera'
          });
        };
      }
    }, {
      key: "__captureInputHandle",
      value: function __captureInputHandle(input) {
        this.dialogApi.addFiles('object', input.files);
        return this.dialogApi.switchTab('preview');
      }
    }, {
      key: "__subscribePermissions",
      value: function __subscribePermissions() {
        var _this2 = this;

        navigator.permissions.query({
          name: 'camera'
        }).then(function (permissionsResponse) {
          permissionsResponse.addEventListener('change', function () {
            _this2.__requestDevicesList();
          });
        }).catch(function () {// do nothing
        });
      }
    }, {
      key: "__initCamera",
      value: function __initCamera() {
        var _this3 = this;

        this.__loaded = false;
        this.mirrored = this.settings.cameraMirrorDefault;
        this.container.append(tpl('tab-camera'));
        this.container.addClass('uploadcare--camera');
        this.container.addClass('uploadcare--camera_status_requested');
        this.container.find('.uploadcare--camera__button_type_capture').on('click', this.__capture);
        var startRecord = this.container.find('.uploadcare--camera__button_type_start-record').on('click', this.__startRecording);
        this.container.find('.uploadcare--camera__button_type_stop-record').on('click', this.__stopRecording);
        this.container.find('.uploadcare--camera__button_type_cancel-record').on('click', this.__cancelRecording);
        this.container.find('.uploadcare--camera__button_type_mirror').on('click', this.__mirror);
        this.container.find('.uploadcare--camera__button_type_retry').on('click', this.__requestDevicesList);
        this.container.find('.uploadcare--camera__device-select').on('change', this.__onDeviceSelect);

        if (canUsePermissionsApi()) {
          this.__subscribePermissions();
        }

        if (!this.MediaRecorder || this.settings.imagesOnly || !this.settings.enableVideoRecording) {
          startRecord.hide();
        }

        this.video = this.container.find('.uploadcare--camera__video');
        this.video.toggleClass('uploadcare--camera__video_mirrored', this.mirrored);
        this.video.on('loadeddata', function () {
          return this.play();
        });
        this.dialogApi.progress(function (name) {
          if (name === _this3.name) {
            if (!_this3.__loaded) {
              _this3.__requestDevicesList();
            }
          } else {
            if (_this3.__loaded && isSecure) {
              _this3.__revoke();
            }
          }
        });
        this.dialogApi.always(this.__revoke);
      }
    }, {
      key: "__checkCompatibility",
      value: function __checkCompatibility() {
        if (navigator.mediaDevices && navigator.mediaDevices.enumerateDevices) {
          this.enumerateVideoDevices = function () {
            return navigator.mediaDevices.enumerateDevices().then(function (mediaDevices) {
              var videoDevices = mediaDevices.filter(function (device) {
                return device.kind === 'videoinput';
              });
              return videoDevices;
            });
          };
        }

        if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
          this.getUserMedia = function (constraints) {
            return navigator.mediaDevices.getUserMedia(constraints);
          };
        } else {
          this.getUserMedia = function (constraints) {
            var getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia;
            var df = $__default["default"].Deferred();
            getUserMedia.call(navigator, constraints, function (stream) {
              return df.resolve(stream);
            }, function (error) {
              return df.reject(error);
            });
            return df.promise();
          };
        }

        this.URL = window.URL || window.webkitURL;
        this.MediaRecorder = window.MediaRecorder;

        if (!isSecure) {
          warn('Camera is not allowed for HTTP. Please use HTTPS connection.');
        }

        var isLocalhost = document.location.hostname === 'localhost';
        return !!this.getUserMedia && Uint8Array && (isSecure || isLocalhost);
      }
    }, {
      key: "__checkCapture",
      value: function __checkCapture() {
        var input;
        input = document.createElement('input');
        input.setAttribute('capture', 'camera');
        return !!input.capture;
      }
    }, {
      key: "__setState",
      value: function __setState(newState) {
        var oldStates = ['', 'ready', 'requested', 'denied', 'not-founded', 'recording', 'error'].join(' uploadcare--camera_status_');
        this.container.removeClass(oldStates).addClass("uploadcare--camera_status_".concat(newState));
        this.container.find('.uploadcare--camera__button').focus();
      }
    }, {
      key: "__requestDevicesList",
      value: function __requestDevicesList() {
        var _this4 = this;

        if (this.enumerateVideoDevices) {
          // before calling enumerateVideoDevices we should request user permissions with getUserMedia
          // see https://www.w3.org/TR/mediacapture-streams/
          this.getUserMedia({
            video: true,
            audio: true
          }).then(function (stream) {
            return _this4.enumerateVideoDevices().then(function (devices) {
              // after calling enumerateVideoDevices we need to stop media tracks
              stream.getTracks().forEach(function (track) {
                return track.stop();
              });
              return devices;
            });
          }).then(function (devices) {
            var _devices$;

            // select first device, it should be default one in browser/os
            _this4.__groupId = devices === null || devices === void 0 ? void 0 : (_devices$ = devices[0]) === null || _devices$ === void 0 ? void 0 : _devices$.groupId;

            _this4.__renderDevicesList(devices);
          }).then(function () {
            return _this4.__requestCamera();
          }).catch(function () {
            return _this4.__requestCamera();
          });
        } else {
          this.__requestCamera();
        }
      }
    }, {
      key: "__requestCamera",
      value: function __requestCamera() {
        var _this5 = this;

        if (this.__stream) {
          this.__revoke();
        }

        this.__loaded = true;
        var constraints = {
          audio: this.settings.enableAudioRecording,
          video: {
            width: {
              ideal: 1920
            },
            height: {
              ideal: 1080
            },
            frameRate: {
              ideal: 30
            }
          }
        };

        if (this.__groupId) {
          constraints.video.groupId = {
            exact: this.__groupId
          };
          constraints.audio = constraints.audio && {
            exact: this.__groupId
          };
        }

        return this.getUserMedia.call(navigator, constraints).then(function (stream) {
          _this5.__setState('ready');

          _this5.__stream = stream;
          stream.addEventListener('inactive', function () {
            _this5.__setState('denied');
          });

          var currentGroupId = _this5.__getGroupIdByStream(stream);

          _this5.__groupId = currentGroupId;

          if ('srcObject' in _this5.video[0]) {
            _this5.video.prop('srcObject', stream);

            return _this5.video.on('loadedmetadata', function () {
              return _this5.video[0].play();
            });
          } else {
            if (_this5.URL) {
              _this5.__streamObject = _this5.URL.createObjectURL(stream);

              _this5.video.prop('src', _this5.__streamObject);
            } else {
              _this5.video.prop('src', stream);
            }

            return _this5.video[0].play();
          }
        }).catch(function (error) {
          var handle = Object.create(null);

          handle.NotFoundError = function () {
            _this5.__setState('not-founded');
          };

          handle.NotAllowedError = function () {
            _this5.__setState('denied');
          };

          handle.other = function () {
            _this5.__setState('denied'); // TODO: add common error state: this.__setState('error')


            console.warn('Camera error occurred: ' + error.name);
          };

          (handle[error.name] || handle.other)();
          _this5.__loaded = false;
          return _this5.__loaded;
        });
      }
    }, {
      key: "__revoke",
      value: function __revoke() {
        var base;

        this.__setState('requested');

        this.__loaded = false;

        if (!this.__stream) {
          return;
        }

        if (this.__streamObject) {
          this.URL.revokeObjectURL(this.__streamObject);
        }

        if (this.__stream.getTracks) {
          $__default["default"].each(this.__stream.getTracks(), function () {
            return typeof this.stop === 'function' ? this.stop() : undefined;
          });
        } else {
          if (typeof (base = this.__stream).stop === 'function') {
            base.stop();
          }
        }

        this.__stream = null;
      }
    }, {
      key: "__mirror",
      value: function __mirror() {
        this.mirrored = !this.mirrored;
        return this.video.toggleClass('uploadcare--camera__video_mirrored', this.mirrored);
      }
    }, {
      key: "__capture",
      value: function __capture() {
        var _this6 = this;

        var canvas, ctx, h, video, w;
        video = this.video[0];
        w = video.videoWidth;
        h = video.videoHeight;
        canvas = document.createElement('canvas');
        canvas.width = w;
        canvas.height = h;
        ctx = canvas.getContext('2d');

        if (this.mirrored) {
          ctx.translate(w, 0);
          ctx.scale(-1, 1);
        }

        ctx.drawImage(video, 0, 0, w, h);
        return canvasToBlob(canvas, 'image/jpeg', 0.9, function (blob) {
          canvas.width = canvas.height = 1;
          blob.name = 'camera.jpg';

          _this6.dialogApi.addFiles('object', [[blob, {
            source: 'camera'
          }]]);

          return _this6.dialogApi.switchTab('preview');
        });
      }
    }, {
      key: "__startRecording",
      value: function __startRecording() {
        var _this7 = this;

        this.__setState('recording');

        this.__chunks = [];
        var __recorderOptions = {};
        var mimeTypes = this.settings.videoPreferredMimeTypes;

        if (mimeTypes != null) {
          var mimeType = find($__default["default"].isArray(mimeTypes) ? mimeTypes : [mimeTypes], function (mimeType) {
            return _this7.MediaRecorder.isTypeSupported(mimeType);
          });

          if (mimeType != null) {
            __recorderOptions.mimeType = mimeType;
          }
        }

        var isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;

        if (__recorderOptions.mimeType == null && isFirefox && this.MediaRecorder.isTypeSupported('video/webm')) {
          __recorderOptions.mimeType = 'video/webm';
        }

        if (this.settings.audioBitsPerSecond !== null) {
          __recorderOptions.audioBitsPerSecond = this.settings.audioBitsPerSecond;
        }

        if (this.settings.videoBitsPerSecond !== null) {
          __recorderOptions.videoBitsPerSecond = this.settings.videoBitsPerSecond;
        }

        if (Object.keys(__recorderOptions).length !== 0) {
          this.__recorder = new this.MediaRecorder(this.__stream, __recorderOptions);
        } else {
          this.__recorder = new this.MediaRecorder(this.__stream);
        }

        this.__recorder.start();

        this.__recorder.ondataavailable = function (e) {
          return _this7.__chunks.push(e.data);
        };

        return this.__recorder.ondataavailable;
      }
    }, {
      key: "__stopRecording",
      value: function __stopRecording() {
        var _this8 = this;

        this.__setState('ready');

        this.__recorder.onstop = function () {
          var blob, ext;
          blob = new window.Blob(_this8.__chunks, {
            type: _this8.__recorder.mimeType
          });
          ext = _this8.__guessExtensionByMime(_this8.__recorder.mimeType);
          blob.name = "record.".concat(ext);

          _this8.dialogApi.addFiles('object', [[blob, {
            source: 'camera'
          }]]);

          _this8.dialogApi.switchTab('preview');

          _this8.__chunks = [];
          return _this8.__chunks;
        };

        return this.__recorder.stop();
      }
    }, {
      key: "__cancelRecording",
      value: function __cancelRecording() {
        this.__setState('ready');

        this.__recorder.stop();

        this.__chunks = [];
        return this.__chunks;
      }
    }, {
      key: "__onDeviceSelect",
      value: function __onDeviceSelect(e) {
        var groupId = e.target.value;
        this.__groupId = groupId;

        this.__requestCamera();
      }
    }, {
      key: "__renderDevicesList",
      value: function __renderDevicesList(devices) {
        var _this9 = this;

        var deviceSelect = this.container.find('.uploadcare--camera__device-select');
        deviceSelect.empty();
        devices.forEach(function (device, idx) {
          var selected = _this9.__groupId ? device.groupId === _this9.__groupId : idx === 0;
          deviceSelect.append($__default["default"]('<option>', {
            value: device.groupId,
            // Browsers could return empty labels in some cases, so fallback it to the camera index
            text: device.label || "".concat(locale.t('dialog.tabs.camera.camera'), " #").concat(idx + 1),
            selected: selected
          }));
        });
        deviceSelect.toggleClass('uploadcare--camera__device-select_has-options', true);
      }
    }, {
      key: "__getGroupIdByStream",
      value: function __getGroupIdByStream(stream) {
        var videoTracks = stream.getVideoTracks();

        if (videoTracks.length === 0) {
          return;
        }

        var firstTrack = videoTracks[0];

        var _firstTrack$getSettin = firstTrack.getSettings(),
            groupId = _firstTrack$getSettin.groupId;

        return groupId;
      }
    }, {
      key: "__guessExtensionByMime",
      value: function __guessExtensionByMime(mime) {
        var knownContainers = {
          mp4: 'mp4',
          ogg: 'ogg',
          webm: 'webm',
          quicktime: 'mov',
          'x-matroska': 'mkv'
        }; // MediaRecorder.mimeType returns empty string in Firefox.
        // Firefox record video as WebM now by default.
        // @link https://bugzilla.mozilla.org/show_bug.cgi?id=1512175

        if (mime === '') {
          return 'webm';
        } // e.g. "video/x-matroska;codecs=avc1,opus"


        if (mime) {
          // e.g. ["video", "x-matroska;codecs=avc1,opus"]
          mime = mime.split('/');

          if (mime[0] === 'video') {
            // e.g. "x-matroska;codecs=avc1,opus"
            mime = mime.slice(1).join('/'); // e.g. "x-matroska"

            var container = mime.split(';')[0]; // e.g. "mkv"

            if (knownContainers[container]) {
              return knownContainers[container];
            }
          }
        } // In all other cases just return the base extension for all times


        return 'avi';
      }
    }, {
      key: "displayed",
      value: function displayed() {
        this.dialogApi.takeFocus() && this.container.find('.uploadcare--camera__button').focus();
      }
    }]);

    return CameraTab;
  }();

  /**
   * jquery.Jcrop.js v0.9.10
   * jQuery Image Cropping Plugin - released under MIT License
   * Author: Kelly Hallman <khallman@gmail.com>
   * http://github.com/tapmodo/Jcrop
   * Copyright (c) 2008-2012 Tapmodo Interactive LLC {{{
   *
   * Permission is hereby granted, free of charge, to any person
   * obtaining a copy of this software and associated documentation
   * files (the "Software"), to deal in the Software without
   * restriction, including without limitation the rights to use,
   * copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the
   * Software is furnished to do so, subject to the following
   * conditions:
   *
   * The above copyright notice and this permission notice shall be
   * included in all copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
   * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
   * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
   * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
   * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
   * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
   * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
   * OTHER DEALINGS IN THE SOFTWARE.
   *
   * }}}
   */

  isWindowDefined() && function ($) {
    $.Jcrop = function (obj, opt) {
      var options = $.extend({}, $.Jcrop.defaults),
          docOffset;
   // Internal Methods {{{

      function px(n) {
        return Math.round(n) + 'px';
      }

      function cssClass(cl) {
        return options.baseClass + '-' + cl;
      }

      function supportsColorFade() {
        return $.fx.step.hasOwnProperty('backgroundColor');
      }

      function getPos(obj) //{{{
      {
        var pos = $(obj).offset();
        return [pos.left, pos.top];
      } //}}}


      function mouseAbs(e) //{{{
      {
        return [e.pageX - docOffset[0], e.pageY - docOffset[1]];
      } //}}}


      function setOptions(opt) //{{{
      {
        if (_typeof(opt) !== 'object') opt = {};
        options = $.extend(options, opt);
        $.each(['onChange', 'onSelect', 'onRelease', 'onDblClick'], function (i, e) {
          if (typeof options[e] !== 'function') options[e] = function () {};
        });
      } //}}}


      function startDragMode(mode, pos) //{{{
      {
        docOffset = getPos($img);

        if (mode === 'move') {
          return Tracker.activateHandlers(createMover(pos), doneSelect);
        }

        var fc = Coords.getFixed();
        var opp = oppLockCorner(mode);
        var opc = Coords.getCorner(oppLockCorner(opp));
        Coords.setPressed(Coords.getCorner(opp));
        Coords.setCurrent(opc);
        Tracker.activateHandlers(dragmodeHandler(mode, fc), doneSelect);
      } //}}}


      function dragmodeHandler(mode, f) //{{{
      {
        return function (pos) {
          if (!options.aspectRatio) {
            switch (mode) {
              case 'e':
                pos[1] = f.y2;
                break;

              case 'w':
                pos[1] = f.y2;
                break;

              case 'n':
                pos[0] = f.x2;
                break;

              case 's':
                pos[0] = f.x2;
                break;
            }
          } else {
            switch (mode) {
              case 'e':
                pos[1] = f.y + 1;
                break;

              case 'w':
                pos[1] = f.y + 1;
                break;

              case 'n':
                pos[0] = f.x + 1;
                break;

              case 's':
                pos[0] = f.x + 1;
                break;
            }
          }

          Coords.setCurrent(pos);
          Selection.update();
        };
      } //}}}


      function createMover(pos) //{{{
      {
        var lloc = pos;
        KeyManager.watchKeys();
        return function (pos) {
          Coords.moveOffset([pos[0] - lloc[0], pos[1] - lloc[1]]);
          lloc = pos;
          Selection.update();
        };
      } //}}}


      function oppLockCorner(ord) //{{{
      {
        switch (ord) {
          case 'n':
            return 'sw';

          case 's':
            return 'nw';

          case 'e':
            return 'nw';

          case 'w':
            return 'ne';

          case 'ne':
            return 'sw';

          case 'nw':
            return 'se';

          case 'se':
            return 'nw';

          case 'sw':
            return 'ne';
        }
      } //}}}


      function createDragger(ord) //{{{
      {
        return function (e) {
          if (options.disabled) {
            return false;
          }

          if (ord === 'move' && !options.allowMove) {
            return false;
          } // Fix position of crop area when dragged the very first time.
          // Necessary when crop image is in a hidden element when page is loaded.


          docOffset = getPos($img);
          btndown = true;
          startDragMode(ord, mouseAbs(e));
          e.stopPropagation();
          e.preventDefault();
          return false;
        };
      } //}}}


      function presize($obj, w, h) //{{{
      {
        var nw = $obj.width(),
            nh = $obj.height();

        if (nw > w && w > 0) {
          nw = w;
          nh = w / $obj.width() * $obj.height();
        }

        if (nh > h && h > 0) {
          nh = h;
          nw = h / $obj.height() * $obj.width();
        }

        xscale = $obj.width() / nw;
        yscale = $obj.height() / nh;
        $obj.width(nw).height(nh);
      } //}}}


      function unscale(c) //{{{
      {
        return {
          x: c.x * xscale,
          y: c.y * yscale,
          x2: c.x2 * xscale,
          y2: c.y2 * yscale,
          w: c.w * xscale,
          h: c.h * yscale
        };
      } //}}}


      function doneSelect(pos) //{{{
      {
        Coords.getFixed();
        Selection.enableHandles();
        Selection.done();
      } //}}}


      function newTracker() //{{{
      {
        var trk = $('<div></div>').addClass(cssClass('tracker'));
        trk.css({
          opacity: 0,
          backgroundColor: 'white'
        });
        return trk;
      } //}}}
      // }}}
      // Initialization {{{
      // Sanitize some options {{{


      if (_typeof(obj) !== 'object') {
        obj = $(obj)[0];
      }

      if (_typeof(opt) !== 'object') {
        opt = {};
      } // }}}


      setOptions(opt); // Initialize some jQuery objects {{{
      // The values are SET on the image(s) for the interface
      // If the original image has any of these set, they will be reset
      // However, if you destroy() the Jcrop instance the original image's
      // character in the DOM will be as you left it.

      var img_css = {
        border: 'none',
        visibility: 'visible',
        margin: 0,
        padding: 0,
        position: 'absolute',
        top: 0,
        left: 0
      };
      var $origimg = $(obj),
          img_mode = true;

      if (obj.tagName == 'IMG') {
        // Fix size of crop image.
        // Necessary when crop image is within a hidden element when page is loaded.
        if ($origimg[0].width != 0 && $origimg[0].height != 0) {
          // Obtain dimensions from contained img element.
          $origimg.width($origimg[0].width);
          $origimg.height($origimg[0].height);
        } else {
          // Obtain dimensions from temporary image in case the original is not loaded yet (e.g. IE 7.0).
          var tempImage = new Image();
          tempImage.src = $origimg[0].src;
          $origimg.width(tempImage.width);
          $origimg.height(tempImage.height);
        }

        var $img = $origimg.clone().removeAttr('id').css(img_css).show();
        $img.width($origimg.width());
        $img.height($origimg.height());
        $origimg.after($img).hide();
      } else {
        $img = $origimg.css(img_css).show();
        img_mode = false;

        if (options.shade === null) {
          options.shade = true;
        }
      }

      presize($img, options.boxWidth, options.boxHeight);
      var boundx = $img.width(),
          boundy = $img.height(),
          $div = $('<div></div>').width(boundx).height(boundy).addClass(cssClass('holder')).css({
        position: 'relative',
        backgroundColor: options.bgColor
      }).insertAfter($origimg).append($img);

      if (options.addClass) {
        $div.addClass(options.addClass);
      }

      var $img2 = $('<div></div>'),
          $img_holder = $('<div></div>').width('100%').height('100%').css({
        zIndex: 310,
        position: 'absolute',
        overflow: 'hidden'
      }),
          $sel = $('<div></div>').css({
        position: 'absolute',
        zIndex: 600
      }).dblclick(function () {
        var c = Coords.getFixed();
        options.onDblClick.call(api, c);
      }).insertBefore($img).append($img_holder);

      if (img_mode) {
        $img2 = $('<img />').attr('src', $img.attr('src')).css(img_css).width(boundx).height(boundy), $img_holder.append($img2);
      }

      var bound = options.boundary;
      var $trk = newTracker().width(boundx + bound * 2).height(boundy + bound * 2).css({
        position: 'absolute',
        top: px(-bound),
        left: px(-bound),
        zIndex: 290
      });
      /* }}} */
      // Set more variables {{{

      var bgcolor = options.bgColor,
          bgopacity = options.bgOpacity,
          xlimit,
          ylimit,
          xmin,
          ymin,
          xscale,
          yscale,
          btndown,
          shift_down;
      docOffset = getPos($img); // }}}
      // }}}
      // Internal Modules {{{
      // Touch Module {{{

      var Touch = function () {
        // Touch support detection function adapted (under MIT License)
        // from code by Jeffrey Sambells - http://github.com/iamamused/
        function hasTouchSupport() {
          var support = {},
              events = ['touchstart', 'touchmove', 'touchend'],
              el = document.createElement('div'),
              i;

          try {
            for (i = 0; i < events.length; i++) {
              var eventName = events[i];
              eventName = 'on' + eventName;
              var isSupported = (eventName in el);

              if (!isSupported) {
                el.setAttribute(eventName, 'return;');
                isSupported = typeof el[eventName] == 'function';
              }

              support[events[i]] = isSupported;
            }

            return support.touchstart && support.touchend && support.touchmove;
          } catch (err) {
            return false;
          }
        }

        function detectSupport() {
          if (options.touchSupport === true || options.touchSupport === false) return options.touchSupport;else return hasTouchSupport();
        }

        return {
          createDragger: function createDragger(ord) {
            return function (e) {
              e.pageX = e.originalEvent.changedTouches[0].pageX;
              e.pageY = e.originalEvent.changedTouches[0].pageY;

              if (options.disabled) {
                return false;
              }

              if (ord === 'move' && !options.allowMove) {
                return false;
              }

              btndown = true;
              startDragMode(ord, mouseAbs(e));
              e.stopPropagation();
              e.preventDefault();
              return false;
            };
          },
          isSupported: hasTouchSupport,
          support: detectSupport()
        };
      }(); // }}}
      // Coords Module {{{


      var Coords = function () {
        var x1 = 0,
            y1 = 0,
            x2 = 0,
            y2 = 0,
            ox,
            oy;

        function setPressed(pos) //{{{
        {
          pos = rebound(pos);
          x2 = x1 = pos[0];
          y2 = y1 = pos[1];
        } //}}}


        function setCurrent(pos) //{{{
        {
          pos = rebound(pos);
          ox = pos[0] - x2;
          oy = pos[1] - y2;
          x2 = pos[0];
          y2 = pos[1];
        } //}}}


        function getOffset() //{{{
        {
          return [ox, oy];
        } //}}}


        function moveOffset(offset) //{{{
        {
          var ox = offset[0],
              oy = offset[1];

          if (0 > x1 + ox) {
            ox -= ox + x1;
          }

          if (0 > y1 + oy) {
            oy -= oy + y1;
          }

          if (boundy < y2 + oy) {
            oy += boundy - (y2 + oy);
          }

          if (boundx < x2 + ox) {
            ox += boundx - (x2 + ox);
          }

          x1 += ox;
          x2 += ox;
          y1 += oy;
          y2 += oy;
        } //}}}


        function getCorner(ord) //{{{
        {
          var c = getFixed();

          switch (ord) {
            case 'ne':
              return [c.x2, c.y];

            case 'nw':
              return [c.x, c.y];

            case 'se':
              return [c.x2, c.y2];

            case 'sw':
              return [c.x, c.y2];
          }
        } //}}}


        function getFixed() //{{{
        {
          if (!options.aspectRatio) {
            return getRect();
          } // This function could use some optimization I think...


          var aspect = options.aspectRatio,
              min_x = options.minSize[0] / xscale,
              //min_y = options.minSize[1]/yscale,
          max_x = options.maxSize[0] / xscale;
              options.maxSize[1] / yscale;
              var rw = x2 - x1,
              rh = y2 - y1,
              rwa = Math.abs(rw),
              rha = Math.abs(rh),
              real_ratio = rwa / rha,
              xx,
              yy,
              w,
              h;

          if (max_x === 0) {
            max_x = boundx * 10;
          }

          if (real_ratio < aspect) {
            yy = y2;
            w = rha * aspect;
            xx = rw < 0 ? x1 - w : w + x1;

            if (xx < 0) {
              xx = 0;
              h = Math.abs((xx - x1) / aspect);
              yy = rh < 0 ? y1 - h : h + y1;
            } else if (xx > boundx) {
              xx = boundx;
              h = Math.abs((xx - x1) / aspect);
              yy = rh < 0 ? y1 - h : h + y1;
            }
          } else {
            xx = x2;
            h = rwa / aspect;
            yy = rh < 0 ? y1 - h : y1 + h;

            if (yy < 0) {
              yy = 0;
              w = Math.abs((yy - y1) * aspect);
              xx = rw < 0 ? x1 - w : w + x1;
            } else if (yy > boundy) {
              yy = boundy;
              w = Math.abs(yy - y1) * aspect;
              xx = rw < 0 ? x1 - w : w + x1;
            }
          } // Magic %-)


          if (xx > x1) {
            // right side
            if (xx - x1 < min_x) {
              xx = x1 + min_x;
            } else if (xx - x1 > max_x) {
              xx = x1 + max_x;
            }

            if (yy > y1) {
              yy = y1 + (xx - x1) / aspect;
            } else {
              yy = y1 - (xx - x1) / aspect;
            }
          } else if (xx < x1) {
            // left side
            if (x1 - xx < min_x) {
              xx = x1 - min_x;
            } else if (x1 - xx > max_x) {
              xx = x1 - max_x;
            }

            if (yy > y1) {
              yy = y1 + (x1 - xx) / aspect;
            } else {
              yy = y1 - (x1 - xx) / aspect;
            }
          }

          if (xx < 0) {
            x1 -= xx;
            xx = 0;
          } else if (xx > boundx) {
            x1 -= xx - boundx;
            xx = boundx;
          }

          if (yy < 0) {
            y1 -= yy;
            yy = 0;
          } else if (yy > boundy) {
            y1 -= yy - boundy;
            yy = boundy;
          }

          return makeObj(flipCoords(x1, y1, xx, yy));
        } //}}}


        function rebound(p) //{{{
        {
          if (p[0] < 0) {
            p[0] = 0;
          }

          if (p[1] < 0) {
            p[1] = 0;
          }

          if (p[0] > boundx) {
            p[0] = boundx;
          }

          if (p[1] > boundy) {
            p[1] = boundy;
          }

          return [p[0], p[1]];
        } //}}}


        function flipCoords(x1, y1, x2, y2) //{{{
        {
          var xa = x1,
              xb = x2,
              ya = y1,
              yb = y2;

          if (x2 < x1) {
            xa = x2;
            xb = x1;
          }

          if (y2 < y1) {
            ya = y2;
            yb = y1;
          }

          return [xa, ya, xb, yb];
        } //}}}


        function getRect() //{{{
        {
          var xsize = x2 - x1,
              ysize = y2 - y1,
              delta;

          if (xlimit && Math.abs(xsize) > xlimit) {
            x2 = xsize > 0 ? x1 + xlimit : x1 - xlimit;
          }

          if (ylimit && Math.abs(ysize) > ylimit) {
            y2 = ysize > 0 ? y1 + ylimit : y1 - ylimit;
          }

          if (ymin / yscale && Math.abs(ysize) < ymin / yscale) {
            y2 = ysize > 0 ? y1 + ymin / yscale : y1 - ymin / yscale;
          }

          if (xmin / xscale && Math.abs(xsize) < xmin / xscale) {
            x2 = xsize > 0 ? x1 + xmin / xscale : x1 - xmin / xscale;
          }

          if (x1 < 0) {
            x2 -= x1;
            x1 -= x1;
          }

          if (y1 < 0) {
            y2 -= y1;
            y1 -= y1;
          }

          if (x2 < 0) {
            x1 -= x2;
            x2 -= x2;
          }

          if (y2 < 0) {
            y1 -= y2;
            y2 -= y2;
          }

          if (x2 > boundx) {
            delta = x2 - boundx;
            x1 -= delta;
            x2 -= delta;
          }

          if (y2 > boundy) {
            delta = y2 - boundy;
            y1 -= delta;
            y2 -= delta;
          }

          if (x1 > boundx) {
            delta = x1 - boundy;
            y2 -= delta;
            y1 -= delta;
          }

          if (y1 > boundy) {
            delta = y1 - boundy;
            y2 -= delta;
            y1 -= delta;
          }

          return makeObj(flipCoords(x1, y1, x2, y2));
        } //}}}


        function makeObj(a) //{{{
        {
          return {
            x: a[0],
            y: a[1],
            x2: a[2],
            y2: a[3],
            w: a[2] - a[0],
            h: a[3] - a[1]
          };
        } //}}}


        return {
          flipCoords: flipCoords,
          setPressed: setPressed,
          setCurrent: setCurrent,
          getOffset: getOffset,
          moveOffset: moveOffset,
          getCorner: getCorner,
          getFixed: getFixed
        };
      }(); //}}}
      // Shade Module {{{


      var Shade = function () {
        var enabled = false,
            holder = $('<div></div>').css({
          position: 'absolute',
          zIndex: 240,
          opacity: 0
        }),
            shades = {
          top: createShade(),
          left: createShade().height(boundy),
          right: createShade().height(boundy),
          bottom: createShade()
        };

        function resizeShades(w, h) {
          shades.left.css({
            height: px(h)
          });
          shades.right.css({
            height: px(h)
          });
        }

        function updateAuto() {
          return updateShade(Coords.getFixed());
        }

        function updateShade(c) {
          shades.top.css({
            left: px(c.x),
            width: px(c.w),
            height: px(c.y)
          });
          shades.bottom.css({
            top: px(c.y2),
            left: px(c.x),
            width: px(c.w),
            height: px(boundy - c.y2)
          });
          shades.right.css({
            left: px(c.x2),
            width: px(boundx - c.x2)
          });
          shades.left.css({
            width: px(c.x)
          });
        }

        function createShade() {
          return $('<div></div>').css({
            position: 'absolute',
            backgroundColor: options.shadeColor || options.bgColor
          }).appendTo(holder);
        }

        function enableShade() {
          if (!enabled) {
            enabled = true;
            holder.insertBefore($img);
            updateAuto();
            Selection.setBgOpacity(1, 0, 1);
            $img2.hide();
            setBgColor(options.shadeColor || options.bgColor, 1);

            if (Selection.isAwake()) {
              setOpacity(options.bgOpacity, 1);
            } else setOpacity(1, 1);
          }
        }

        function setBgColor(color, now) {
          colorChangeMacro(getShades(), color, now);
        }

        function disableShade() {
          if (enabled) {
            holder.remove();
            $img2.show();
            enabled = false;

            if (Selection.isAwake()) {
              Selection.setBgOpacity(options.bgOpacity, 1, 1);
            } else {
              Selection.setBgOpacity(1, 1, 1);
            }

            colorChangeMacro($div, 0, 1);
          }
        }

        function setOpacity(opacity, now) {
          if (enabled) {
            if (options.bgFade && !now) {
              holder.animate({
                opacity: 1 - opacity
              }, {
                queue: false,
                duration: options.fadeTime
              });
            } else holder.css({
              opacity: 1 - opacity
            });
          }
        }

        function refreshAll() {
          options.shade ? enableShade() : disableShade();
          if (Selection.isAwake()) setOpacity(options.bgOpacity);
        }

        function getShades() {
          return holder.children();
        }

        return {
          update: updateAuto,
          updateRaw: updateShade,
          getShades: getShades,
          setBgColor: setBgColor,
          enable: enableShade,
          disable: disableShade,
          resize: resizeShades,
          refresh: refreshAll,
          opacity: setOpacity
        };
      }(); // }}}
      // Selection Module {{{


      var Selection = function () {
        var awake,
            borders = {},
            handle = {};
   // Private Methods

        function insertBorder(type) //{{{
        {
          var jq = $('<div></div>').css({
            position: 'absolute'
          }).addClass(cssClass(type));
          $sel.append(jq);
          return jq;
        } //}}}


        function dragDiv(ord) //{{{
        {
          var jq = $('<div></div>').mousedown(createDragger(ord)).css({
            cursor: ord + '-resize',
            position: 'absolute'
          }).append('<div></div>').addClass('ord-' + ord);

          if (Touch.support) {
            jq.on('touchstart.jcrop', Touch.createDragger(ord));
          }

          $sel.append(jq);
          return jq;
        } //}}}


        function insertHandle(ord) //{{{
        {
          return dragDiv(ord).addClass(cssClass('handle'));
        } //}}}


        function createBorders(li) //{{{
        {
          var cl, i;

          for (i = 0; i < li.length; i++) {
            switch (li[i]) {
              case 'n':
                cl = 'hline';
                break;

              case 's':
                cl = 'hline bottom';
                break;

              case 'e':
                cl = 'vline right';
                break;

              case 'w':
                cl = 'vline';
                break;
            }

            borders[li[i]] = insertBorder(cl);
          }
        } //}}}


        function createHandles(li) //{{{
        {
          var i;

          for (i = 0; i < li.length; i++) {
            handle[li[i]] = insertHandle(li[i]);
          }
        } //}}}


        function moveto(x, y) //{{{
        {
          if (!options.shade) {
            $img2.css({
              top: px(-y),
              left: px(-x)
            });
          }

          $sel.css({
            top: px(y),
            left: px(x)
          });
        } //}}}


        function resize(w, h) //{{{
        {
          $sel.width(Math.round(w)).height(Math.round(h));
        } //}}}


        function refresh() //{{{
        {
          var c = Coords.getFixed();
          Coords.setPressed([c.x, c.y]);
          Coords.setCurrent([c.x2, c.y2]);
          updateVisible();
        } //}}}
        // Internal Methods


        function updateVisible(select) //{{{
        {
          if (awake) {
            return update(select);
          }
        } //}}}


        function update(select) //{{{
        {
          var c = Coords.getFixed();
          resize(c.w, c.h);
          moveto(c.x, c.y);
          if (options.shade) Shade.updateRaw(c);
          awake || show();

          if (select) {
            options.onSelect.call(api, unscale(c));
          } else {
            options.onChange.call(api, unscale(c));
          }
        } //}}}


        function setBgOpacity(opacity, force, now) //{{{
        {
          if (!awake && !force) return;

          if (options.bgFade && !now) {
            $img.animate({
              opacity: opacity
            }, {
              queue: false,
              duration: options.fadeTime
            });
          } else {
            $img.css('opacity', opacity);
          }
        } //}}}


        function show() //{{{
        {
          $sel.show();
          if (options.shade) Shade.opacity(bgopacity);else setBgOpacity(bgopacity, true);
          awake = true;
        } //}}}


        function release() //{{{
        {
          $sel.hide();
          if (options.shade) Shade.opacity(1);else setBgOpacity(1);
          awake = false;
          options.onRelease.call(api);
        } //}}}


        function enableHandles() //{{{
        {

          if (options.allowResize) {
            return true;
          }
        } //}}}


        function disableHandles() //{{{
        {
        } //}}}


        function animMode(v) //{{{
        {
          if (v) ; else {
            enableHandles();
          }
        } //}}}


        function done() //{{{
        {
          animMode(false);
          refresh();
        } //}}}
        // Insert draggable elements {{{
        // Insert border divs for outline


        if ($.isArray(options.createHandles)) createHandles(options.createHandles);
        if (options.drawBorders && $.isArray(options.createBorders)) createBorders(options.createBorders); //}}}
        // This is a hack for iOS5 to support drag/move touch functionality

        $(document).on('touchstart.jcrop-ios', function (e) {
          if ($(e.currentTarget).hasClass('jcrop-tracker')) e.stopPropagation();
        });
        var $track = newTracker().mousedown(createDragger('move')).css({
          cursor: 'move',
          position: 'absolute',
          zIndex: 360
        });

        if (Touch.support) {
          $track.on('touchstart.jcrop', Touch.createDragger('move'));
        }

        $img_holder.append($track);
        return {
          updateVisible: updateVisible,
          update: update,
          release: release,
          refresh: refresh,
          isAwake: function isAwake() {
            return awake;
          },
          setCursor: function setCursor(cursor) {
            $track.css('cursor', cursor);
          },
          enableHandles: enableHandles,
          enableOnly: function enableOnly() {
          },
          disableHandles: disableHandles,
          animMode: animMode,
          setBgOpacity: setBgOpacity,
          done: done
        };
      }(); //}}}
      // Tracker Module {{{


      var Tracker = function () {
        var onMove = function onMove() {},
            onDone = function onDone() {},
            trackDoc = options.trackDocument;

        function toFront() //{{{
        {
          $trk.css({
            zIndex: 450
          });

          if (Touch.support) {
            $(document).on('touchmove.jcrop', trackTouchMove).on('touchend.jcrop', trackTouchEnd);
          }

          if (trackDoc) {
            $(document).on('mousemove.jcrop', trackMove).on('mouseup.jcrop', trackUp);
          }
        } //}}}


        function toBack() //{{{
        {
          $trk.css({
            zIndex: 290
          });
          $(document).off('.jcrop');
        } //}}}


        function trackMove(e) //{{{
        {
          onMove(mouseAbs(e));
          return false;
        } //}}}


        function trackUp(e) //{{{
        {
          e.preventDefault();
          e.stopPropagation();

          if (btndown) {
            btndown = false;
            onDone(mouseAbs(e));

            if (Selection.isAwake()) {
              options.onSelect.call(api, unscale(Coords.getFixed()));
            }

            toBack();

            onMove = function onMove() {};

            onDone = function onDone() {};
          }

          return false;
        } //}}}


        function activateHandlers(move, done) //{{{
        {
          btndown = true;
          onMove = move;
          onDone = done;
          toFront();
          return false;
        } //}}}


        function trackTouchMove(e) //{{{
        {
          e.pageX = e.originalEvent.changedTouches[0].pageX;
          e.pageY = e.originalEvent.changedTouches[0].pageY;
          return trackMove(e);
        } //}}}


        function trackTouchEnd(e) //{{{
        {
          e.pageX = e.originalEvent.changedTouches[0].pageX;
          e.pageY = e.originalEvent.changedTouches[0].pageY;
          return trackUp(e);
        } //}}}


        if (!trackDoc) {
          $trk.mousemove(trackMove).mouseup(trackUp).mouseout(trackUp);
        }

        $img.before($trk);
        return {
          activateHandlers: activateHandlers
        };
      }(); //}}}
      // KeyManager Module {{{


      var KeyManager = function () {
        var $keymgr = $('<input type="radio" />').css({
          position: 'fixed',
          left: '-120px',
          width: '12px'
        }).addClass('jcrop-keymgr'),
            $keywrap = $('<div></div>').css({
          position: 'absolute',
          overflow: 'hidden'
        }).append($keymgr);

        function watchKeys() //{{{
        {
          if (options.keySupport) {
            $keymgr.show();
            $keymgr.focus();
          }
        } //}}}


        function onBlur(e) //{{{
        {
          $keymgr.hide();
        } //}}}


        function doNudge(e, x, y) //{{{
        {
          if (options.allowMove) {
            Coords.moveOffset([x, y]);
            Selection.updateVisible(true);
          }

          e.preventDefault();
          e.stopPropagation();
        } //}}}


        function parseKey(e) //{{{
        {
          if (e.ctrlKey || e.metaKey) {
            return true;
          }

          shift_down = e.shiftKey ? true : false;
          var nudge = shift_down ? 10 : 1;

          switch (e.keyCode) {
            case 37:
              doNudge(e, -nudge, 0);
              break;

            case 39:
              doNudge(e, nudge, 0);
              break;

            case 38:
              doNudge(e, 0, -nudge);
              break;

            case 40:
              doNudge(e, 0, nudge);
              break;

            case 9:
              return true;
          }

          return false;
        } //}}}


        if (options.keySupport) {
          $keymgr.keydown(parseKey).blur(onBlur);
          $keymgr.css({
            position: 'absolute',
            left: '-20px'
          });
          $keywrap.append($keymgr).insertBefore($img);
        }

        return {
          watchKeys: watchKeys
        };
      }(); //}}}
      // }}}
      // API methods {{{


      function setClass(cname) //{{{
      {
        $div.removeClass().addClass(cssClass('holder')).addClass(cname);
      } //}}}


      function setSelect(rect) //{{{
      {
        setSelectRaw([rect[0] / xscale, rect[1] / yscale, rect[2] / xscale, rect[3] / yscale]);
        options.onSelect.call(api, unscale(Coords.getFixed()));
        Selection.enableHandles();
      } //}}}


      function setSelectRaw(l) //{{{
      {
        Coords.setPressed([l[0], l[1]]);
        Coords.setCurrent([l[2], l[3]]);
        Selection.update();
      } //}}}


      function tellSelect() //{{{
      {
        return unscale(Coords.getFixed());
      } //}}}


      function tellScaled() //{{{
      {
        return Coords.getFixed();
      } //}}}


      function setOptionsNew(opt) //{{{
      {
        setOptions(opt);
        interfaceUpdate();
      } //}}}


      function disableCrop() //{{{
      {
        options.disabled = true;
        Selection.setCursor('default');
      } //}}}


      function enableCrop() //{{{
      {
        options.disabled = false;
        interfaceUpdate();
      } //}}}


      function cancelCrop() //{{{
      {
        Selection.done();
        Tracker.activateHandlers(null, null);
      } //}}}


      function destroy() //{{{
      {
        $div.remove();
        $origimg.show();
        $origimg.css('visibility', 'visible');
        $(obj).removeData('Jcrop');
      } //}}}


      function colorChangeMacro($obj, color, now) {
        var mycolor = color || options.bgColor;

        if (options.bgFade && supportsColorFade() && options.fadeTime && !now) {
          $obj.animate({
            backgroundColor: mycolor
          }, {
            queue: false,
            duration: options.fadeTime
          });
        } else {
          $obj.css('backgroundColor', mycolor);
        }
      }

      function interfaceUpdate(alt) //{{{
      // This method tweaks the interface based on options object.
      // Called when options are changed and at end of initialization.
      {
        if (options.allowResize) {
          if (alt) ; else {
            Selection.enableHandles();
          }
        }

        Selection.setCursor(options.allowMove ? 'move' : 'default');

        if (options.hasOwnProperty('trueSize')) {
          xscale = options.trueSize[0] / boundx;
          yscale = options.trueSize[1] / boundy;
        }

        if (options.hasOwnProperty('setSelect')) {
          setSelect(options.setSelect);
          Selection.done();
          delete options.setSelect;
        }

        Shade.refresh();

        if (options.bgColor != bgcolor) {
          colorChangeMacro(options.shade ? Shade.getShades() : $div, options.shade ? options.shadeColor || options.bgColor : options.bgColor);
          bgcolor = options.bgColor;
        }

        if (bgopacity != options.bgOpacity) {
          bgopacity = options.bgOpacity;
          if (options.shade) Shade.refresh();else Selection.setBgOpacity(bgopacity);
        }

        xlimit = options.maxSize[0] || 0;
        ylimit = options.maxSize[1] || 0;
        xmin = options.minSize[0] || 0;
        ymin = options.minSize[1] || 0;

        if (options.hasOwnProperty('outerImage')) {
          $img.attr('src', options.outerImage);
          delete options.outerImage;
        }

        Selection.refresh();
      } //}}}
      //}}}


      interfaceUpdate(true);
      var api = {
        setSelect: setSelect,
        setOptions: setOptionsNew,
        tellSelect: tellSelect,
        tellScaled: tellScaled,
        setClass: setClass,
        disable: disableCrop,
        enable: enableCrop,
        cancel: cancelCrop,
        release: Selection.release,
        destroy: destroy,
        focus: KeyManager.watchKeys,
        getBounds: function getBounds() {
          return [boundx * xscale, boundy * yscale];
        },
        getWidgetSize: function getWidgetSize() {
          return [boundx, boundy];
        },
        getScaleFactor: function getScaleFactor() {
          return [xscale, yscale];
        },
        getOptions: function getOptions() {
          // careful: internal values are returned
          return options;
        },
        ui: {
          holder: $div,
          selection: $sel
        }
      };
      $origimg.data('Jcrop', api);
      return api;
    };

    $.fn.Jcrop = function (options, callback) //{{{
    {
      var api; // Iterate over each object, attach Jcrop

      this.each(function () {
        // If we've already attached to this object
        if ($(this).data('Jcrop')) {
          // The API can be requested this way (undocumented)
          if (options === 'api') return $(this).data('Jcrop'); // Otherwise, we just reset the options...
          else $(this).data('Jcrop').setOptions(options);
        } // If we haven't been attached, preload and attach
        else {
          if (this.tagName == 'IMG') $.Jcrop.Loader(this, function () {
            $(this).css({
              display: 'block',
              visibility: 'hidden'
            });
            api = $.Jcrop(this, options);
            if ($.isFunction(callback)) callback.call(api);
          });else {
            $(this).css({
              display: 'block',
              visibility: 'hidden'
            });
            api = $.Jcrop(this, options);
            if ($.isFunction(callback)) callback.call(api);
          }
        }
      }); // Return "this" so the object is chainable (jQuery-style)

      return this;
    }; //}}}
    // $.Jcrop.Loader - basic image loader {{{


    $.Jcrop.Loader = function (imgobj, success, error) {
      var $img = $(imgobj),
          img = $img[0];

      function completeCheck() {
        if (img.complete) {
          $img.off('.jcloader');
          if ($.isFunction(success)) success.call(img);
        } else window.setTimeout(completeCheck, 50);
      }

      $img.on('load.jcloader', completeCheck).on('error.jcloader', function (e) {
        $img.off('.jcloader');
        if ($.isFunction(error)) error.call(img);
      });

      if (img.complete && $.isFunction(success)) {
        $img.off('.jcloader');
        success.call(img);
      }
    }; //}}}
    // Global Defaults {{{


    $.Jcrop.defaults = {
      // Basic Settings
      allowMove: true,
      allowResize: true,
      trackDocument: true,
      // Styling Options
      baseClass: 'jcrop',
      addClass: null,
      bgColor: 'black',
      bgOpacity: 0.6,
      bgFade: false,
      aspectRatio: 0,
      keySupport: true,
      createHandles: ['n', 's', 'e', 'w', 'nw', 'ne', 'se', 'sw'],
      createBorders: ['n', 's', 'e', 'w'],
      drawBorders: true,
      dragEdges: true,
      fixedSupport: true,
      touchSupport: null,
      shade: null,
      boxWidth: 0,
      boxHeight: 0,
      boundary: 2,
      fadeTime: 400,
      animationDelay: 20,
      swingSpeed: 3,
      maxSize: [0, 0],
      minSize: [0, 0],
      // Callbacks / Event Handlers
      onChange: function onChange() {},
      onSelect: function onSelect() {},
      onDblClick: function onDblClick() {},
      onRelease: function onRelease() {}
    }; // }}}
  }($__default["default"]);

  var cropModifierRegExp = /-\/crop\/([0-9]+)x([0-9]+)(\/(center|([0-9]+),([0-9]+)))?\//i;

  var CropWidget = /*#__PURE__*/function () {
    function CropWidget(element, originalSize) {
      var crop = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      _classCallCheck(this, CropWidget);

      this.element = element;
      this.originalSize = originalSize;
      this.__api = $__default["default"].Jcrop(this.element[0], {
        trueSize: this.originalSize,
        baseClass: 'uploadcare--jcrop',
        addClass: 'uploadcare--crop-widget',
        createHandles: ['nw', 'ne', 'se', 'sw'],
        bgColor: 'transparent',
        bgOpacity: 0.8
      });
      this.setCrop(crop);
      this.setSelection();
    } //   downscale:
    // If set to `true` "-/resize/%preferedSize%/" will be added
    // if selected area bigger than `preferedSize`. Default false.
    //   upscale:
    // If set to `true` "-/resize/%preferedSize%/" will be added
    // if selected area smaller than `preferedSize`. Default false.
    //   notLess:
    // Restrict selection to preferedSize area. Default false.
    //   preferedSize:
    // Defines image size you want to get at the end.
    // If `downscale` option is set to `false`, it defines only
    // the prefered aspect ratio.
    // If set to `null` any aspect ratio will be acceptable.
    // Array: [123, 123]. (optional)


    _createClass(CropWidget, [{
      key: "setCrop",
      value: function setCrop(crop) {
        this.crop = crop;
        return this.__api.setOptions({
          aspectRatio: crop.preferedSize ? crop.preferedSize[0] / crop.preferedSize[1] : 0,
          minSize: crop.notLess ? fitSize(crop.preferedSize, this.originalSize) : [0, 0]
        });
      }
    }, {
      key: "setSelection",
      value: function setSelection(selection) {
        var center, left, size, top;

        if (selection) {
          center = selection.center;
          size = [selection.width, selection.height];
        } else {
          center = true;
          size = this.originalSize;
        }

        if (this.crop.preferedSize) {
          size = fitSize(this.crop.preferedSize, size, true);
        }

        if (center) {
          left = (this.originalSize[0] - size[0]) / 2;
          top = (this.originalSize[1] - size[1]) / 2;
        } else {
          left = selection.left || 0;
          top = selection.top || 0;
        }

        return this.__api.setSelect([left, top, size[0] + left, size[1] + top]);
      }
    }, {
      key: "__parseModifiers",
      value: function __parseModifiers(modifiers) {
        var raw = modifiers != null ? modifiers.match(cropModifierRegExp) : undefined;

        if (raw) {
          return {
            width: parseInt(raw[1], 10),
            height: parseInt(raw[2], 10),
            center: raw[4] === 'center',
            left: parseInt(raw[5], 10) || undefined,
            top: parseInt(raw[6], 10) || undefined
          };
        }
      }
    }, {
      key: "setSelectionFromModifiers",
      value: function setSelectionFromModifiers(modifiers) {
        return this.setSelection(this.__parseModifiers(modifiers));
      }
    }, {
      key: "getSelection",
      value: function getSelection() {
        var coords, left, top;
        coords = this.__api.tellSelect();
        left = Math.round(Math.max(0, coords.x));
        top = Math.round(Math.max(0, coords.y));
        return {
          left: left,
          top: top,
          width: Math.round(Math.min(this.originalSize[0], coords.x2)) - left,
          height: Math.round(Math.min(this.originalSize[1], coords.y2)) - top
        };
      }
    }, {
      key: "applySelectionToFile",
      value: function applySelectionToFile(file) {
        var _this = this;

        return file.then(function (info) {
          return applyCropCoordsToInfo(info, _this.crop, _this.originalSize, _this.getSelection());
        });
      }
    }]);

    return CropWidget;
  }();

  var BasePreviewTab = /*#__PURE__*/function () {
    function BasePreviewTab(container, tabButton, dialogApi, settings, name) {
      var _this = this;

      _classCallCheck(this, BasePreviewTab);

      var notDisabled;
      this.container = container;
      this.tabButton = tabButton;
      this.dialogApi = dialogApi;
      this.settings = settings;
      this.name = name;

      this.__initTabButtonCircle();

      this.container.addClass('uploadcare--preview');
      notDisabled = ':not(:disabled)';
      this.container.on('click', '.uploadcare--preview__back' + notDisabled, function () {
        return _this.dialogApi.fileColl.clear();
      });
      this.container.on('click', '.uploadcare--preview__done' + notDisabled, this.dialogApi.resolve);
    }

    _createClass(BasePreviewTab, [{
      key: "__initTabButtonCircle",
      value: function __initTabButtonCircle() {
        var _this2 = this;

        var circle, circleDf, circleEl, update;
        circleEl = this.tabButton.find('.uploadcare--panel__icon');
        circleDf = $__default["default"].Deferred();

        update = function update() {
          var i, infos, len, progress, progressInfo;
          infos = _this2.dialogApi.fileColl.lastProgresses();
          progress = 0;

          for (i = 0, len = infos.length; i < len; i++) {
            progressInfo = infos[i];
            progress += ((progressInfo != null ? progressInfo.progress : undefined) || 0) / infos.length;
          }

          return circleDf.notify(progress);
        };

        this.dialogApi.fileColl.onAnyProgress(update);
        this.dialogApi.fileColl.onAdd.add(update);
        this.dialogApi.fileColl.onRemove.add(update);
        update();
        circle = new Circle(circleEl).listen(circleDf.promise());
        return this.dialogApi.progress(function () {
          var _circle;

          return (_circle = circle).update.apply(_circle, arguments);
        });
      }
    }]);

    return BasePreviewTab;
  }();

  var PreviewTab = /*#__PURE__*/function (_BasePreviewTab) {
    _inherits(PreviewTab, _BasePreviewTab);

    var _super = _createSuper(PreviewTab);

    function PreviewTab(container, tabButton, dialogApi, settings, name) {
      var _this;

      _classCallCheck(this, PreviewTab);

      _this = _super.apply(this, arguments); // error
      // unknown
      // image
      // video
      // regular

      _this.container = container;
      _this.tabButton = tabButton;
      _this.dialogApi = dialogApi;
      _this.settings = settings;
      _this.name = name;
      $__default["default"].each(_this.dialogApi.fileColl.get(), function (i, file) {
        return _this.__setFile(file);
      });

      _this.dialogApi.fileColl.onAdd.add(_this.__setFile.bind(_assertThisInitialized(_this)));

      _this.widget = null;
      _this.__state = null;
      return _this;
    }

    _createClass(PreviewTab, [{
      key: "__setFile",
      value: function __setFile(file) {
        var _this2 = this;

        var ifCur, tryToLoadImagePreview, tryToLoadVideoPreview;
        this.file = file;

        ifCur = function ifCur(fn) {
          return function () {
            if (file === _this2.file) {
              for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                args[_key] = arguments[_key];
              }

              return fn.apply(null, args);
            }
          };
        };

        tryToLoadImagePreview = once(this.__tryToLoadImagePreview.bind(this));
        tryToLoadVideoPreview = once(this.__tryToLoadVideoPreview.bind(this));

        this.__setState('unknown', {});

        this.file.progress(ifCur(function (info) {
          var blob, label, source;
          info = info.incompleteFileInfo;
          label = (info.name || '') + readableFileSize(info.size, '', ', ');

          _this2.container.find('.uploadcare--preview__file-name').text(label);

          source = info.sourceInfo;
          blob = Blob;

          if (source.file && blob && source.file instanceof blob) {
            if (source.file.type && source.file.type.search(/^image\//i) !== -1) {
              return tryToLoadImagePreview(file, source.file);
            } else if (source.file.type && source.file.type.search(/^video\//i) !== -1) {
              return tryToLoadVideoPreview(file, source.file);
            } else {
              return tryToLoadImagePreview(file, source.file).fail(function () {
                return tryToLoadVideoPreview(file, source.file);
              });
            }
          }
        }));
        this.file.done(ifCur(function (info) {
          var imgInfo, src;

          if (_this2.__state === 'video') {
            return;
          }

          if (info.isImage) {
            // avoid subsequent image states
            if (_this2.__state !== 'image') {
              src = info.originalUrl; // 1162x684 is 1.5 size of conteiner

              src += '-/preview/1162x693/-/setfill/ffffff/-/format/jpeg/-/progressive/yes/';

              if (_this2.settings.previewUrlCallback) {
                src = _this2.settings.previewUrlCallback(src, info);
              }

              imgInfo = info.originalImageInfo;

              _this2.__setState('image', {
                src: src,
                name: info.name,
                info: info
              });

              return _this2.initImage([imgInfo.width, imgInfo.height], info.cdnUrlModifiers);
            }
          } else {
            // , but update if other
            return _this2.__setState('regular', {
              file: info
            });
          }
        }));
        return this.file.fail(ifCur(function (errorType, info, error) {
          return _this2.__setState('error', {
            errorType: errorType,
            error: error,
            file: info
          });
        }));
      }
    }, {
      key: "__tryToLoadImagePreview",
      value: function __tryToLoadImagePreview(file, blob) {
        var _this3 = this;

        var df;
        df = $__default["default"].Deferred();

        if (file.state() !== 'pending' || !blob.size || blob.size >= this.settings.multipartMinSize) {
          return df.reject().promise();
        }

        drawFileToCanvas(blob, 1550, 924, '#ffffff', this.settings.imagePreviewMaxSize).done(function (canvas, size) {
          return canvasToBlob(canvas, 'image/jpeg', 0.95, function (blob) {
            var src;
            df.resolve();
            canvas.width = canvas.height = 1;

            if (file.state() !== 'pending' || _this3.dialogApi.state() !== 'pending' || _this3.file !== file) {
              return;
            }

            src = URL.createObjectURL(blob);

            _this3.dialogApi.always(function () {
              return URL.revokeObjectURL(src);
            });

            if (_this3.__state !== 'image') {
              _this3.__setState('image', {
                src: src,
                name: ''
              });

              return _this3.initImage(size);
            }
          });
        }).fail(df.reject);
        return df.promise();
      }
    }, {
      key: "__tryToLoadVideoPreview",
      value: function __tryToLoadVideoPreview(file, blob) {
        var _this4 = this;

        var df, op, src;
        df = $__default["default"].Deferred();

        if (!URL || !blob.size) {
          return df.reject().promise();
        }

        src = URL.createObjectURL(blob);
        op = videoLoader(src);
        op.fail(function () {
          URL.revokeObjectURL(src);
          return df.reject();
        }).done(function () {
          if (file.state() !== 'pending' || _this4.dialogApi.state() !== 'pending' || _this4.file !== file) {
            URL.revokeObjectURL(src);
            return;
          }

          _this4.dialogApi.always(function () {
            return URL.revokeObjectURL(src);
          });

          df.resolve();

          _this4.__setState('video');

          var videoTag = _this4.container.find('.uploadcare--preview__video'); // hack to enable seeking due to bug in MediaRecorder API
          // https://bugs.chromium.org/p/chromium/issues/detail?id=569840


          videoTag.on('loadeddata', function () {
            var el;
            el = videoTag.get(0);
            el.currentTime = 360000; // 100 hours

            return videoTag.off('loadeddata');
          });
          videoTag.on('ended', function () {
            var el;
            el = videoTag.get(0);
            el.currentTime = 0;
            return videoTag.off('ended');
          }); // end of hack

          videoTag.attr('src', src); // hack to load first-frame poster on ios safari

          return videoTag.get(0).load();
        });
        return df.promise();
      }
    }, {
      key: "__setState",
      value: function __setState(state, data) {
        this.__state = state;
        data = data || {};
        data.crop = this.settings.crop;
        this.container.empty().append(tpl("tab-preview-".concat(state), _objectSpread2(_objectSpread2({}, data), {}, {
          debugUploads: this.settings.debugUploads
        })));
        this.container.removeClass(function (index, classes) {
          return classes.split(' ').filter(function (c) {
            return !!~c.indexOf('uploadcare--preview_status_');
          }).join(' ');
        });

        if (state === 'unknown' && this.settings.crop) {
          this.container.find('.uploadcare--preview__done').hide();
        }

        if (state === 'error') {
          this.container.addClass('uploadcare--preview_status_error-' + data.errorType);
        }

        this.container.find('.uploadcare--preview__done').focus();
      }
    }, {
      key: "initImage",
      value: function initImage(imgSize, cdnModifiers) {
        var _this5 = this;

        var done, img, imgLoader, startCrop;
        img = this.container.find('.uploadcare--preview__image');
        done = this.container.find('.uploadcare--preview__done');
        imgLoader = imageLoader(img[0]).done(function () {
          return _this5.container.addClass('uploadcare--preview_status_loaded');
        }).fail(function () {
          _this5.file = null;
          return _this5.__setState('error', {
            error: 'loadImage'
          });
        });

        startCrop = function startCrop() {
          _this5.container.find('.uploadcare--crop-sizes__item').attr('aria-disabled', false).attr('tabindex', 0);

          done.attr('disabled', false).attr('aria-disabled', false);
          _this5.widget = new CropWidget(img, imgSize, _this5.settings.crop[0]);

          if (cdnModifiers) {
            _this5.widget.setSelectionFromModifiers(cdnModifiers);
          }

          return done.on('click', function () {
            var newFile;
            newFile = _this5.widget.applySelectionToFile(_this5.file);

            _this5.dialogApi.fileColl.replace(_this5.file, newFile);

            return true;
          });
        };

        if (this.settings.crop) {
          this.container.find('.uploadcare--preview__title').text(locale.t('dialog.tabs.preview.crop.title'));
          this.container.find('.uploadcare--preview__content').addClass('uploadcare--preview__content_crop');
          done.attr('disabled', true).attr('aria-disabled', true);
          done.text(locale.t('dialog.tabs.preview.crop.done'));
          this.populateCropSizes();
          this.container.find('.uploadcare--crop-sizes__item').attr('aria-disabled', true).attr('tabindex', -1);
          return imgLoader.done(function () {
            // Often IE 11 doesn't do reflow after image.onLoad
            // and actual image remains 28x30 (broken image placeholder).
            // Looks like defer always fixes it.
            return defer(startCrop);
          });
        }
      }
    }, {
      key: "populateCropSizes",
      value: function populateCropSizes() {
        var _this6 = this;

        var control, currentClass, template;
        control = this.container.find('.uploadcare--crop-sizes');
        template = control.children();
        currentClass = 'uploadcare--crop-sizes__item_current';
        $__default["default"].each(this.settings.crop, function (i, crop) {
          var caption, gcd$1, icon, item, prefered, size;
          prefered = crop.preferedSize;

          if (prefered) {
            gcd$1 = gcd(prefered[0], prefered[1]);
            caption = "".concat(prefered[0] / gcd$1, ":").concat(prefered[1] / gcd$1);
          } else {
            caption = locale.t('dialog.tabs.preview.crop.free');
          }

          item = template.clone().appendTo(control).attr('data-caption', caption).on('click', function (e) {
            if ($__default["default"](e.currentTarget).attr('aria-disabled') === 'true') {
              return;
            }

            if (!$__default["default"](e.currentTarget).hasClass(currentClass) && _this6.settings.crop.length > 1 && _this6.widget) {
              _this6.widget.setCrop(crop);

              control.find('>*').removeClass(currentClass);
              item.addClass(currentClass);
            }
          });

          if (prefered) {
            size = fitSize(prefered, [30, 30], true);
            return item.children().css({
              width: Math.max(20, size[0]),
              height: Math.max(12, size[1])
            });
          } else {
            icon = $__default["default"]("<svg width='32' height='32'><use xlink:href='#uploadcare--icon-crop-free'/></svg>").attr('role', 'presentation').attr('class', 'uploadcare--icon');
            return item.children().append(icon).addClass('uploadcare--crop-sizes__icon_free');
          }
        });
        template.remove();
        return control.find('>*').eq(0).addClass(currentClass);
      }
    }, {
      key: "displayed",
      value: function displayed() {
        this.dialogApi.takeFocus() && this.container.find('.uploadcare--preview__done').focus();
      }
    }]);

    return PreviewTab;
  }(BasePreviewTab);

  isWindowDefined() && function ($) {
    function nearestFinder(targets) {
      this.targets = targets;
      this.last = null;
      this.update();
    }

    nearestFinder.prototype = {
      update: function update() {
        var rows = {};
        this.targets.each(function (i) {
          var offset = $(this).offset();

          if (!(offset.top in rows)) {
            rows[offset.top] = [];
          }

          rows[offset.top].push([offset.left + this.offsetWidth / 2, this]);
        });
        this.rows = rows;
      },
      find: function find(x, y) {
        var minDistance = Infinity;
        var rows = this.rows;
        var nearestRow, top, nearest;

        for (top in rows) {
          var distance = Math.abs(top - y);

          if (distance < minDistance) {
            minDistance = distance;
            nearestRow = rows[top];
          }
        }

        minDistance = Math.abs(nearestRow[0][0] - x);
        nearest = nearestRow[0][1];

        for (var i = 1; i < nearestRow.length; i++) {
          var distance = Math.abs(nearestRow[i][0] - x);

          if (distance < minDistance) {
            minDistance = distance;
            nearest = nearestRow[i][1];
          }
        }

        return nearest;
      },
      findNotLast: function findNotLast(x, y) {
        var nearest = this.find(x, y);

        if (this.last && nearest && this.last == nearest) {
          return null;
        }

        return this.last = nearest;
      }
    };
    var movableName = 'uploadcareMovable';
    var sortableName = 'uploadcareSortable';
    var extend = {};

    extend[movableName] = function (o) {
      o = $.extend({
        distance: 4,
        anyButton: false,
        axis: false,
        zIndex: 1000,
        start: $.noop,
        move: $.noop,
        finish: $.noop,
        items: null,
        keepFake: false,
        touch: true
      }, o);

      function fixTouch(e) {
        if (!o.touch) {
          return;
        }

        var touch, s;
        s = e.originalEvent.touches;

        if (s && s.length) {
          touch = s[0];
        } else {
          s = e.originalEvent.changedTouches;

          if (s && s.length) {
            touch = s[0];
          } else {
            return;
          }
        }

        e.pageX = touch.pageX;
        e.pageY = touch.pageY;
        e.which = 1;
      }

      var events = 'mousedown.{} touchstart.{}'.replace(/\{}/g, movableName);
      this.on(events, o.items, null, function (eDown) {
        fixTouch(eDown);

        if (!o.anyButton && eDown.which != 1) {
          return;
        }

        eDown.preventDefault();
        var dragged = false;
        var $dragged = $(this);
        var $fake = false;
        var originalPos = $dragged.position(); // offset parent

        originalPos.top += $dragged.offsetParent().scrollTop();
        originalPos.left += $dragged.offsetParent().scrollLeft();
        var events = 'mousemove.{} touchmove.{}'.replace(/\{}/g, movableName);
        $(document).on(events, function (eMove) {
          fixTouch(eMove);

          if (!dragged && (Math.abs(eMove.pageX - eDown.pageX) > o.distance || Math.abs(eMove.pageY - eDown.pageY) > o.distance)) {
            dragged = true;
            $fake = $dragged.clone().css({
              position: 'absolute',
              zIndex: o.zIndex,
              width: $dragged.width()
            }).appendTo($dragged.offsetParent());
            o.start({
              event: eMove,
              dragged: $dragged,
              fake: $fake
            });
          }

          if (!dragged) {
            return;
          }

          eMove.preventDefault();
          var dx = o.axis == 'y' ? 0 : eMove.pageX - eDown.pageX;
          var dy = o.axis == 'x' ? 0 : eMove.pageY - eDown.pageY;
          $fake.css({
            left: dx + originalPos.left,
            top: dy + originalPos.top
          });
          o.move({
            event: eMove,
            dragged: $dragged,
            fake: $fake,
            dx: dx,
            dy: dy
          });
        });
        var events = 'mouseup.{} touchend.{} touchcancel.{} touchleave.{}';
        $(document).on(events.replace(/\{}/g, movableName), function (eUp) {
          fixTouch(eUp);
          var events = 'mousemove.{} touchmove.{} mouseup.{} touchend.{} touchcancel.{} touchleave.{}';
          $(document).off(events.replace(/\{}/g, movableName));

          if (!dragged) {
            return;
          }

          eUp.preventDefault();
          var dx = eUp.pageX - eDown.pageX;
          var dy = eUp.pageY - eDown.pageY;
          dragged = false;
          o.finish({
            event: eUp,
            dragged: $dragged,
            fake: $fake,
            dx: dx,
            dy: dy
          });

          if (!o.keepFake) {
            $fake.remove();
          }
        });
      });
    };

    extend[sortableName] = function (o) {
      var oMovable = $.extend({
        items: '>*'
      }, o);
      var o = $.extend({
        checkBounds: function checkBounds() {
          return true;
        },
        start: $.noop,
        attach: $.noop,
        move: $.noop,
        finish: $.noop
      }, o);
      var finder;
      var initialNext = false;
      var parent = this;

      oMovable.start = function (info) {
        o.start(info);
        finder = new nearestFinder(parent.find(oMovable.items).not(info.fake));
        initialNext = info.dragged.next();
      };

      oMovable.move = function (info) {
        info.nearest = null;

        if (o.checkBounds(info)) {
          var offset = info.fake.offset();
          var nearest = finder.findNotLast(offset.left + info.dragged.width() / 2, offset.top);
          info.nearest = $(nearest);

          if (nearest && nearest != info.dragged[0]) {
            if (info.dragged.nextAll().filter(nearest).length > 0) {
              info.dragged.insertAfter(nearest);
            } else {
              info.dragged.insertBefore(nearest);
            }

            o.attach(info);
            finder.last = null;
            finder.update();
          }
        } else if (finder.last !== null) {
          finder.last = null;

          if (initialNext.length) {
            info.dragged.insertBefore(initialNext);
          } else {
            info.dragged.parent().append(info.dragged);
          }

          o.attach(info);
          finder.update();
        }

        o.move(info);
      };

      oMovable.finish = function (info) {
        var offset = info.fake.offset();
        info.nearest = null;

        if (o.checkBounds(info)) {
          info.nearest = $(finder.find(offset.left + info.dragged.width() / 2, offset.top));
        }

        o.finish(info);
        finder = null;
      };

      return this[movableName](oMovable);
    };

    $.fn.extend(extend);
  }($__default["default"]);

  var PreviewTabMultiple = /*#__PURE__*/function (_BasePreviewTab) {
    _inherits(PreviewTabMultiple, _BasePreviewTab);

    var _super = _createSuper(PreviewTabMultiple);

    function PreviewTabMultiple() {
      var _this;

      _classCallCheck(this, PreviewTabMultiple);

      _this = _super.apply(this, arguments);

      _this.container.append(tpl('tab-preview-multiple'));

      _this.__fileTpl = $__default["default"](tpl('tab-preview-multiple-file'));
      _this.fileListEl = _this.container.find('.uploadcare--files');
      _this.doneBtnEl = _this.container.find('.uploadcare--preview__done');
      $__default["default"].each(_this.dialogApi.fileColl.get(), function (i, file) {
        return _this.__fileAdded(file);
      });

      _this.__updateContainerView();

      _this.dialogApi.fileColl.onAdd.add(_this.__fileAdded.bind(_assertThisInitialized(_this)), function () {
        return _this.__updateContainerView();
      });

      _this.dialogApi.fileColl.onRemove.add(_this.__fileRemoved.bind(_assertThisInitialized(_this)), function () {
        return _this.__updateContainerView();
      });

      _this.dialogApi.fileColl.onReplace.add(_this.__fileReplaced.bind(_assertThisInitialized(_this)), function () {
        return _this.__updateContainerView();
      });

      _this.dialogApi.fileColl.onAnyProgress(_this.__fileProgress.bind(_assertThisInitialized(_this)));

      _this.dialogApi.fileColl.onAnyDone(_this.__fileDone.bind(_assertThisInitialized(_this)));

      _this.dialogApi.fileColl.onAnyFail(_this.__fileFailed.bind(_assertThisInitialized(_this)));

      _this.fileListEl.addClass(_this.settings.imagesOnly ? 'uploadcare--files_type_tiles' : 'uploadcare--files_type_table');

      _this.__setupSorting();

      return _this;
    }

    _createClass(PreviewTabMultiple, [{
      key: "__setupSorting",
      value: function __setupSorting() {
        var _this2 = this;

        return this.fileListEl.uploadcareSortable({
          touch: false,
          axis: this.settings.imagesOnly ? 'xy' : 'y',
          start: function start(info) {
            return info.dragged.css('visibility', 'hidden');
          },
          finish: function finish(info) {
            var elements, index;
            info.dragged.css('visibility', 'visible');
            elements = _this2.container.find('.uploadcare--file');

            index = function index(file) {
              return elements.index(_this2.__fileToEl(file));
            };

            return _this2.dialogApi.fileColl.sort(function (a, b) {
              return index(a) - index(b);
            });
          }
        });
      }
    }, {
      key: "__updateContainerView",
      value: function __updateContainerView() {
        var errorContainer, files, hasWrongNumberFiles, title, tooFewFiles, tooManyFiles, wrongNumberFilesMessage;
        files = this.dialogApi.fileColl.length();
        tooManyFiles = files > this.settings.multipleMax;
        tooFewFiles = files < this.settings.multipleMin;
        hasWrongNumberFiles = tooManyFiles || tooFewFiles;
        this.doneBtnEl.attr('disabled', hasWrongNumberFiles).attr('aria-disabled', hasWrongNumberFiles);
        title = locale.t('dialog.tabs.preview.multiple.question').replace('%files%', locale.t('file', files));
        this.container.find('.uploadcare--preview__title').text(title);
        errorContainer = this.container.find('.uploadcare--preview__message');
        errorContainer.empty();

        if (hasWrongNumberFiles) {
          wrongNumberFilesMessage = tooManyFiles ? locale.t('dialog.tabs.preview.multiple.tooManyFiles').replace('%max%', this.settings.multipleMax) : files && tooFewFiles ? locale.t('dialog.tabs.preview.multiple.tooFewFiles').replace('%min%', this.settings.multipleMin).replace('%files%', locale.t('file', files)) : undefined;
          return errorContainer.addClass('uploadcare--error').text(wrongNumberFilesMessage);
        }
      }
    }, {
      key: "__updateFileInfo",
      value: function __updateFileInfo(fileEl, info) {
        var filename;
        filename = info.name || locale.t('dialog.tabs.preview.unknownName');
        fileEl.find('.uploadcare--file__name').text(filename);
        fileEl.find('.uploadcare--file__description').attr('aria-label', locale.t('dialog.tabs.preview.multiple.file.preview').replace('%file%', filename));
        fileEl.find('.uploadcare--file__remove').attr('title', locale.t('dialog.tabs.preview.multiple.file.remove').replace('%file%', filename)).attr('aria-label', locale.t('dialog.tabs.preview.multiple.file.remove').replace('%file%', filename));
        return fileEl.find('.uploadcare--file__size').text(readableFileSize(info.size, '–'));
      }
    }, {
      key: "__fileProgress",
      value: function __fileProgress(file, progressInfo) {
        var fileEl;
        fileEl = this.__fileToEl(file);
        fileEl.find('.uploadcare--progressbar__value').css('width', Math.round(progressInfo.progress * 100) + '%');
        return this.__updateFileInfo(fileEl, progressInfo.incompleteFileInfo);
      }
    }, {
      key: "__fileDone",
      value: function __fileDone(file, info) {
        var _this3 = this;

        var cdnURL, fileEl, filePreview, filename;
        fileEl = this.__fileToEl(file).removeClass('uploadcare--file_status_uploading').addClass('uploadcare--file_status_uploaded');
        fileEl.find('.uploadcare--progressbar__value').css('width', '100%');

        this.__updateFileInfo(fileEl, info);

        if (info.isImage) {
          cdnURL = "".concat(info.cdnUrl, "-/quality/lightest/-/preview/108x108/");

          if (this.settings.previewUrlCallback) {
            cdnURL = this.settings.previewUrlCallback(cdnURL, info);
          }

          filename = fileEl.find('.uploadcare--file__name').text();
          filePreview = $__default["default"]('<img>').attr('src', cdnURL).attr('alt', filename).addClass('uploadcare--file__icon');
        } else {
          filePreview = $__default["default"]("<svg width='32' height='32'><use xlink:href='#uploadcare--icon-file'/></svg>").attr('role', 'presentation').attr('class', 'uploadcare--icon uploadcare--file__icon');
        }

        fileEl.find('.uploadcare--file__preview').html(filePreview);
        return fileEl.find('.uploadcare--file__description').on('click', function () {
          return openPreviewDialog(file, _this3.settings).done(function (newFile) {
            return _this3.dialogApi.fileColl.replace(file, newFile);
          });
        });
      }
    }, {
      key: "__fileFailed",
      value: function __fileFailed(file, errorType, info, error) {
        var text = this.settings.debugUploads && (error === null || error === void 0 ? void 0 : error.message) || locale.t("serverErrors.".concat(error === null || error === void 0 ? void 0 : error.code)) || (error === null || error === void 0 ? void 0 : error.message) || locale.t("errors.".concat(errorType));

        var fileEl = this.__fileToEl(file).removeClass('uploadcare--file_status_uploading').addClass('uploadcare--file_status_error');

        fileEl.find('.uploadcare--file__error').text(text);
        var filePreview = $__default["default"]("<svg width='32' height='32'><use xlink:href='#uploadcare--icon-error'/></svg>").attr('role', 'presentation').attr('class', 'uploadcare--icon uploadcare--file__icon');
        return fileEl.find('.uploadcare--file__preview').html(filePreview);
      }
    }, {
      key: "__fileAdded",
      value: function __fileAdded(file) {
        var fileEl;
        fileEl = this.__createFileEl(file);
        return fileEl.appendTo(this.fileListEl);
      }
    }, {
      key: "__fileRemoved",
      value: function __fileRemoved(file) {
        this.__fileToEl(file).remove();

        return $__default["default"](file).removeData();
      }
    }, {
      key: "__fileReplaced",
      value: function __fileReplaced(oldFile, newFile) {
        var fileEl;
        fileEl = this.__createFileEl(newFile);
        fileEl.insertAfter(this.__fileToEl(oldFile));
        return this.__fileRemoved(oldFile);
      }
    }, {
      key: "__fileToEl",
      value: function __fileToEl(file) {
        // File can be removed before.
        return $__default["default"](file).data('dpm-el') || $__default["default"]();
      }
    }, {
      key: "__createFileEl",
      value: function __createFileEl(file) {
        var _this4 = this;

        var fileEl;
        fileEl = this.__fileTpl.clone().on('click', '.uploadcare--file__remove', function () {
          return _this4.dialogApi.fileColl.remove(file);
        });
        $__default["default"](file).data('dpm-el', fileEl);
        return fileEl;
      }
    }, {
      key: "displayed",
      value: function displayed() {
        this.container.find('.uploadcare--preview__done').focus();
      }
    }]);

    return PreviewTabMultiple;
  }(BasePreviewTab);

  var lockDialogFocus = function lockDialogFocus(e) {
    if (!e.shiftKey && focusableElements.last().is(e.target)) {
      e.preventDefault();
      return focusableElements.first().focus();
    } else if (e.shiftKey && focusableElements.first().is(e.target)) {
      e.preventDefault();
      return focusableElements.last().focus();
    }
  };

  var lockScroll = function lockScroll(el, toTop) {
    var left, top;
    top = el.scrollTop();
    left = el.scrollLeft();

    if (toTop) {
      el.scrollTop(0).scrollLeft(0);
    }

    return function () {
      return el.scrollTop(top).scrollLeft(left);
    };
  };

  isWindowDefined() && $__default["default"](window).on('keydown', function (e) {
    if (isDialogOpened()) {
      if (e.which === 27) {
        // Escape
        e.stopImmediatePropagation(); // close only topmost dialog

        if (typeof currentDialogPr !== 'undefined' && currentDialogPr !== null) {
          currentDialogPr.reject();
        }
      }

      if (e.which === 9) {
        // Tab
        return lockDialogFocus(e);
      }
    }
  });
  var currentDialogPr = null;
  var openedClass = 'uploadcare--page';
  var originalFocusedElement = null;
  var focusableElements = null;

  var isDialogOpened = function isDialogOpened() {
    return currentDialogPr !== null;
  };

  var closeDialog = function closeDialog() {
    if (currentDialogPr) {
      currentDialogPr.reject();
      currentDialogPr = null;
    }
  };

  var openDialog = function openDialog(files, tab, settings) {
    var cancelLock, dialog, dialogPr;
    closeDialog();
    originalFocusedElement = document.activeElement;
    dialog = $__default["default"](tpl('dialog')).appendTo('body');
    dialogPr = openPanel(dialog.find('.uploadcare--dialog__placeholder'), files, tab, settings, {
      inModal: true
    });
    dialog.find('.uploadcare--panel').addClass('uploadcare--dialog__panel');
    dialog.addClass('uploadcare--dialog_status_active');
    dialogPr.dialogElement = dialog;
    focusableElements = dialog.find('select, input, textarea, button, a[href]');
    focusableElements.first().focus();
    cancelLock = lockScroll($__default["default"](window), dialog.css('position') === 'absolute');
    $__default["default"]('html, body').addClass(openedClass);
    dialog.find('.uploadcare--dialog__close').on('click', dialogPr.reject);
    dialog.on('dblclick', function (e) {
      var showStoppers; // handler can be called after element detached (close button)

      if (!$__default["default"].contains(document.documentElement, e.target)) {
        return;
      }

      showStoppers = '.uploadcare--dialog__panel, .uploadcare--dialog__powered-by';

      if ($__default["default"](e.target).is(showStoppers) || $__default["default"](e.target).parents(showStoppers).length) {
        return;
      }

      return dialogPr.reject();
    });
    currentDialogPr = dialogPr.always(function () {
      $__default["default"]('html, body').removeClass(openedClass);
      currentDialogPr = null;
      dialog.remove();
      cancelLock();
      return originalFocusedElement.focus();
    });
    return currentDialogPr;
  };

  var openPreviewDialog = function openPreviewDialog(file, settings) {
    var dialog, oldDialogPr; // hide current opened dialog and open new one

    oldDialogPr = currentDialogPr;
    currentDialogPr = null;
    settings = $__default["default"].extend({}, settings, {
      multiple: false,
      tabs: ''
    });
    dialog = openDialog(file, 'preview', settings);

    if (oldDialogPr != null) {
      oldDialogPr.dialogElement.addClass('uploadcare--dialog_status_inactive');
    }

    dialog.always(function () {
      currentDialogPr = oldDialogPr;

      if (oldDialogPr != null) {
        // still opened
        $__default["default"]('html, body').addClass(openedClass);
        return oldDialogPr.dialogElement.removeClass('uploadcare--dialog_status_inactive');
      }
    });
    dialog.onTabVisibility(function (tab, shown) {
      if (tab === 'preview' && !shown) {
        return dialog.reject();
      }
    });
    return dialog;
  }; // files - null, or File object, or array of File objects, or FileGroup object
  // result - File objects or FileGroup object (depends on settings.multiple)


  var openPanel = function openPanel(placeholder, files, tab, settings) {
    var opt = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {
      inModal: false
    };
    var filter, panel;

    if ($__default["default"].isPlainObject(tab)) {
      settings = tab;
      tab = null;
    }

    if (!files) {
      files = [];
    } else if (isFileGroup(files)) {
      files = files.files();
    } else if (!$__default["default"].isArray(files)) {
      files = [files];
    }

    settings = build(settings);
    panel = new Panel(settings, placeholder, files, tab, opt).publicPromise();

    filter = function filter(files) {
      if (settings.multiple) {
        return FileGroup(files, settings);
      } else {
        return files[0];
      }
    };

    return then(panel, filter, filter).promise(panel);
  };

  var registeredTabs = {};

  var registerTab = function registerTab(tabName, constructor) {
    registeredTabs[tabName] = constructor;
    return registeredTabs[tabName];
  };

  registerTab('file', FileTab);
  registerTab('url', UrlTab);
  registerTab('camera', CameraTab);
  registerTab('facebook', RemoteTab);
  registerTab('dropbox', RemoteTab);
  registerTab('gdrive', RemoteTab);
  registerTab('gphotos', RemoteTab);
  registerTab('instagram', RemoteTab);
  registerTab('flickr', RemoteTab);
  registerTab('vk', RemoteTab);
  registerTab('evernote', RemoteTab);
  registerTab('box', RemoteTab);
  registerTab('onedrive', RemoteTab);
  registerTab('huddle', RemoteTab);
  registerTab('nft', RemoteTab);
  registerTab('empty-pubkey', function (tabPanel, _1, _2, settings) {
    return tabPanel.append(emptyKeyText);
  });
  registerTab('preview', function (tabPanel, tabButton, dialogApi, settings, name) {
    var tabCls;

    if (!settings.previewStep && dialogApi.fileColl.length() === 0) {
      return;
    }

    tabCls = settings.multiple ? PreviewTabMultiple : PreviewTab; // eslint-disable-next-line new-cap

    return new tabCls(tabPanel, tabButton, dialogApi, settings, name);
  });

  var Panel = /*#__PURE__*/function () {
    function Panel(settings1, placeholder, files, tab, opt) {
      var _this = this;

      _classCallCheck(this, Panel);

      var sel;
      this.inModal = opt.inModal || false; // (fileType, data) or ([fileObject, fileObject])

      this.addFiles = this.addFiles.bind(this);
      this.__resolve = this.__resolve.bind(this);
      this.__reject = this.__reject.bind(this);
      this.__updateFooter = this.__updateFooter.bind(this);
      this.__closePanel = this.__closePanel.bind(this);
      this.switchTab = this.switchTab.bind(this);
      this.showTab = this.showTab.bind(this);
      this.hideTab = this.hideTab.bind(this);
      this.isTabVisible = this.isTabVisible.bind(this);
      this.openMenu = this.openMenu.bind(this);
      this.settings = settings1;
      this.dfd = $__default["default"].Deferred();
      this.dfd.always(this.__closePanel);
      sel = '.uploadcare--panel';
      this.content = $__default["default"](tpl('dialog__panel'));
      this.panel = this.content.find(sel).add(this.content.filter(sel));
      this.placeholder = $__default["default"](placeholder);
      this.placeholder.replaceWith(this.content);
      this.panel.append($__default["default"](tpl('icons')));

      if (this.settings.multiple) {
        this.panel.addClass('uploadcare--panel_multiple');
      }

      this.panel.find('.uploadcare--menu__toggle').on('click', function () {
        return _this.panel.find('.uploadcare--menu').toggleClass('uploadcare--menu_opened');
      }); // files collection

      this.files = new CollectionOfPromises(files);
      this.files.onRemove.add(function () {
        if (_this.files.length() === 0) {
          return _this.hideTab('preview');
        }
      });

      this.__autoCrop(this.files);

      this.tabs = {};

      this.__prepareFooter();

      this.onTabVisibility = $__default["default"].Callbacks().add(function (tab, show) {
        return _this.panel.find(".uploadcare--menu__item_tab_".concat(tab)).toggleClass('uploadcare--menu__item_hidden', !show);
      });

      if (this.settings.publicKey) {
        this.__prepareTabs(tab);
      } else {
        this.__welcome();
      }
    }

    _createClass(Panel, [{
      key: "takeFocus",
      value: function takeFocus() {
        return this.inModal;
      }
    }, {
      key: "publicPromise",
      value: function publicPromise() {
        if (!this.promise) {
          this.promise = this.dfd.promise({
            reject: this.__reject,
            resolve: this.__resolve,
            fileColl: this.files,
            addFiles: this.addFiles,
            switchTab: this.switchTab,
            hideTab: this.hideTab,
            showTab: this.showTab,
            isTabVisible: this.isTabVisible,
            openMenu: this.openMenu,
            takeFocus: this.takeFocus.bind(this),
            onTabVisibility: publicCallbacks(this.onTabVisibility)
          });
        }

        return this.promise;
      }
    }, {
      key: "addFiles",
      value: function addFiles(files, data) {
        var file, i, len;

        if (data) {
          // 'files' is actually file type
          files = filesFrom(files, data, this.settings);
        }

        if (!this.settings.multiple) {
          this.files.clear();
          files = [files[0]];
        }

        for (i = 0, len = files.length; i < len; i++) {
          file = files[i];

          if (this.settings.multipleMaxStrict) {
            if (this.files.length() >= this.settings.multipleMax) {
              file.cancel();
              continue;
            }
          }

          this.files.add(file);
        }

        if (this.settings.previewStep) {
          this.showTab('preview');

          if (!this.settings.multiple) {
            return this.switchTab('preview');
          }
        } else {
          return this.__resolve();
        }
      }
    }, {
      key: "__autoCrop",
      value: function __autoCrop(files) {
        var _this2 = this;

        var crop, i, len, ref;

        if (!this.settings.crop || !this.settings.multiple) {
          return;
        }

        ref = this.settings.crop;

        for (i = 0, len = ref.length; i < len; i++) {
          crop = ref[i]; // if even one of crop option sets allow free crop,
          // we don't need to crop automatically

          if (!crop.preferedSize) {
            return;
          }
        }

        return files.autoThen(function (fileInfo) {
          var info, size; // .cdnUrlModifiers came from already cropped files
          // .crop came from autocrop even if autocrop do not set cdnUrlModifiers

          if (!fileInfo.isImage || fileInfo.cdnUrlModifiers || fileInfo.crop) {
            return fileInfo;
          }

          info = fileInfo.originalImageInfo;
          size = fitSize(_this2.settings.crop[0].preferedSize, [info.width, info.height], true);
          return applyCropCoordsToInfo(fileInfo, _this2.settings.crop[0], [info.width, info.height], {
            width: size[0],
            height: size[1],
            left: Math.round((info.width - size[0]) / 2),
            top: Math.round((info.height - size[1]) / 2)
          });
        });
      }
    }, {
      key: "__resolve",
      value: function __resolve() {
        return this.dfd.resolve(this.files.get());
      }
    }, {
      key: "__reject",
      value: function __reject() {
        return this.dfd.reject(this.files.get());
      }
    }, {
      key: "__prepareTabs",
      value: function __prepareTabs(tab) {
        var i, len, ref, tabName;
        this.addTab('preview');
        ref = this.settings.tabs;

        for (i = 0, len = ref.length; i < len; i++) {
          tabName = ref[i];
          this.addTab(tabName);
        }

        if (this.files.length()) {
          this.showTab('preview');
          this.switchTab('preview');
        } else {
          this.hideTab('preview');
          this.switchTab(tab || this.__firstVisibleTab());
        }

        if (this.settings.tabs.length === 0) {
          this.panel.addClass('uploadcare--panel_menu-hidden');
          return this.panel.find('.uploadcare--panel__menu').addClass('uploadcare--panel__menu_hidden');
        }
      }
    }, {
      key: "__prepareFooter",
      value: function __prepareFooter() {
        var _this3 = this;

        var notDisabled;
        this.footer = this.panel.find('.uploadcare--panel__footer');
        notDisabled = ':not(:disabled)';
        this.footer.on('click', '.uploadcare--panel__show-files' + notDisabled, function () {
          return _this3.switchTab('preview');
        });
        this.footer.on('click', '.uploadcare--panel__done' + notDisabled, this.__resolve);

        this.__updateFooter();

        this.files.onAdd.add(this.__updateFooter);
        return this.files.onRemove.add(this.__updateFooter);
      }
    }, {
      key: "__updateFooter",
      value: function __updateFooter() {
        var footer, tooFewFiles, tooManyFiles;
        var files = this.files.length();
        tooManyFiles = files > this.settings.multipleMax;
        tooFewFiles = files < this.settings.multipleMin;
        this.footer.find('.uploadcare--panel__done').attr('disabled', tooManyFiles || tooFewFiles).attr('aria-disabled', tooManyFiles || tooFewFiles);
        this.footer.find('.uploadcare--panel__show-files').attr('disabled', files === 0).attr('aria-disabled', files === 0);
        footer = tooManyFiles ? locale.t('dialog.tabs.preview.multiple.tooManyFiles').replace('%max%', this.settings.multipleMax) : files && tooFewFiles ? locale.t('dialog.tabs.preview.multiple.tooFewFiles').replace('%min%', this.settings.multipleMin) : locale.t('dialog.tabs.preview.multiple.title');
        this.footer.find('.uploadcare--panel__message').toggleClass('uploadcare--panel__message_hidden', files === 0).toggleClass('uploadcare--error', tooManyFiles || tooFewFiles).text(footer.replace('%files%', locale.t('file', files)));
        return this.footer.find('.uploadcare--panel__file-counter').toggleClass('uploadcare--error', tooManyFiles || tooFewFiles).text(files ? "(".concat(files, ")") : '');
      }
    }, {
      key: "__closePanel",
      value: function __closePanel() {
        this.panel.replaceWith(this.placeholder);
        return this.content.remove();
      }
    }, {
      key: "addTab",
      value: function addTab(name) {
        var _this4 = this;

        var TabCls, tabButton, tabIcon, tabPanel;

        if (name in this.tabs) {
          return;
        }

        TabCls = registeredTabs[name];

        if (!TabCls) {
          throw new Error("No such tab: ".concat(name));
        }

        tabPanel = $__default["default"]('<div>').addClass('uploadcare--tab').addClass("uploadcare--tab_name_".concat(name)).insertBefore(this.footer);

        if (name === 'preview') {
          tabIcon = $__default["default"]('<div class="uploadcare--menu__icon uploadcare--panel__icon" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">');
        } else {
          tabIcon = $__default["default"]("<svg width='32' height='32'><use xlink:href='#uploadcare--icon-".concat(name, "'/></svg>")).attr('role', 'presentation').attr('class', 'uploadcare--icon uploadcare--menu__icon');
        }

        tabButton = $__default["default"]('<div>', {
          role: 'button',
          tabindex: '0'
        }).addClass('uploadcare--menu__item').addClass("uploadcare--menu__item_tab_".concat(name)).attr('title', locale.t("dialog.tabs.names.".concat(name))).append(tabIcon).appendTo(this.panel.find('.uploadcare--menu__items')).on('click', function () {
          if (name === _this4.currentTab) {
            return _this4.panel.find('.uploadcare--panel__menu').removeClass('uploadcare--menu_opened');
          } else {
            return _this4.switchTab(name);
          }
        });
        this.tabs[name] = new TabCls(tabPanel, tabButton, this.publicPromise(), this.settings, name);
        return this.tabs[name];
      }
    }, {
      key: "switchTab",
      value: function switchTab(tab) {
        var className;

        if (!tab || this.currentTab === tab) {
          return;
        }

        this.currentTab = tab;
        this.panel.find('.uploadcare--panel__menu').removeClass('uploadcare--menu_opened').attr('data-current', tab);
        this.panel.find('.uploadcare--menu__item').removeClass('uploadcare--menu__item_current').filter(".uploadcare--menu__item_tab_".concat(tab)).addClass('uploadcare--menu__item_current');
        className = 'uploadcare--tab';
        this.panel.find(".".concat(className)).removeClass("".concat(className, "_current")).filter(".".concat(className, "_name_").concat(tab)).addClass("".concat(className, "_current"));

        if (this.tabs[tab].displayed) {
          this.tabs[tab].displayed();
        }

        return this.dfd.notify(tab);
      }
    }, {
      key: "showTab",
      value: function showTab(tab) {
        return this.onTabVisibility.fire(tab, true);
      }
    }, {
      key: "hideTab",
      value: function hideTab(tab) {
        this.onTabVisibility.fire(tab, false);

        if (this.currentTab === tab) {
          return this.switchTab(this.__firstVisibleTab());
        }
      }
    }, {
      key: "isTabVisible",
      value: function isTabVisible(tab) {
        return !this.panel.find(".uploadcare--menu__item_tab_".concat(tab)).is('.uploadcare--menu__item_hidden');
      }
    }, {
      key: "openMenu",
      value: function openMenu() {
        return this.panel.find('.uploadcare--panel__menu').addClass('uploadcare--menu_opened');
      }
    }, {
      key: "__firstVisibleTab",
      value: function __firstVisibleTab() {
        var i, len, ref, tab;
        ref = this.settings.tabs;

        for (i = 0, len = ref.length; i < len; i++) {
          tab = ref[i];

          if (this.isTabVisible(tab)) {
            return tab;
          }
        }
      }
    }, {
      key: "__welcome",
      value: function __welcome() {
        var i, len, ref, tabName;
        this.addTab('empty-pubkey');
        this.switchTab('empty-pubkey');
        ref = this.settings.tabs;

        for (i = 0, len = ref.length; i < len; i++) {
          tabName = ref[i];

          this.__addFakeTab(tabName);
        }

        return null;
      }
    }, {
      key: "__addFakeTab",
      value: function __addFakeTab(name) {
        var tabIcon;
        tabIcon = $__default["default"]("<svg width='32' height='32'><use xlink:href='#uploadcare--icon-".concat(name, "'/></svg>")).attr('role', 'presentation').attr('class', 'uploadcare--icon uploadcare--menu__icon');

        if (name === 'empty-pubkey') {
          tabIcon.addClass('uploadcare--panel__icon');
        }

        return $__default["default"]('<div>').addClass('uploadcare--menu__item').addClass("uploadcare--menu__item_tab_".concat(name)).attr('aria-disabled', true).attr('title', locale.t("dialog.tabs.names.".concat(name))).append(tabIcon).appendTo(this.panel.find('.uploadcare--menu__items'));
      }
    }]);

    return Panel;
  }();

  var BaseWidget = /*#__PURE__*/function () {
    function BaseWidget(element, settings) {
      var _this = this;

      _classCallCheck(this, BaseWidget);

      this.element = element;
      this.settings = settings;
      this.validators = this.settings.validators = [];
      this.currentObject = null;
      this.__onDialogOpen = $__default["default"].Callbacks();
      this.__onUploadComplete = $__default["default"].Callbacks();
      this.__onChange = $__default["default"].Callbacks().add(function (object) {
        return object != null ? object.promise().done(function (info) {
          return _this.__onUploadComplete.fire(info);
        }) : undefined;
      });

      this.__setupWidget();

      this.element.on('change.uploadcare', this.reloadInfo.bind(this)); // Delay loading info to allow set custom validators on page load.

      this.__hasValue = false;
      defer(function () {
        // Do not reload info if user call uc.Widget().value(uuid) manual.
        if (!_this.__hasValue) {
          return _this.reloadInfo();
        }
      });
    }

    _createClass(BaseWidget, [{
      key: "__setupWidget",
      value: function __setupWidget() {
        var _this2 = this;

        var path;
        this.template = new Template(this.settings, this.element);
        path = ['buttons.choose'];
        path.push(this.settings.imagesOnly ? 'images' : 'files');
        path.push(this.settings.multiple ? 'other' : 'one');
        this.template.addButton('open', locale.t(path.join('.'))).toggleClass('needsclick', this.settings.systemDialog).on('click', function () {
          return _this2.openDialog();
        });
        this.template.addButton('cancel', locale.t('buttons.cancel')).on('click', function () {
          return _this2.__setObject(null);
        });
        this.template.addButton('remove', locale.t('buttons.remove')).on('click', function () {
          return _this2.__setObject(null);
        });
        this.template.content.on('click', '.uploadcare--widget__file-name', function () {
          return _this2.openDialog();
        }); // Enable drag and drop

        receiveDrop(this.template.content, this.__handleDirectSelection.bind(this));
        return this.template.reset();
      }
    }, {
      key: "__infoToValue",
      value: function __infoToValue(info) {
        if (info.cdnUrlModifiers || this.settings.pathValue) {
          return info.cdnUrl;
        } else {
          return info.uuid;
        }
      }
    }, {
      key: "__reset",
      value: function __reset() {
        var object; // low-level primitive. @__setObject(null) could be better.

        object = this.currentObject;
        this.currentObject = null;

        if (object != null) {
          if (typeof object.cancel === 'function') {
            object.cancel();
          }
        }

        return this.template.reset();
      }
    }, {
      key: "__setObject",
      value: function __setObject(newFile) {
        if (newFile === this.currentObject) {
          return;
        }

        this.__reset();

        if (newFile) {
          this.currentObject = newFile;

          this.__watchCurrentObject();
        } else {
          this.element.val('');
        }

        return this.__onChange.fire(this.currentObject);
      }
    }, {
      key: "__watchCurrentObject",
      value: function __watchCurrentObject() {
        var _this3 = this;

        var object;
        object = this.__currentFile();

        if (object) {
          this.template.listen(object);
          return object.done(function (info) {
            if (object === _this3.__currentFile()) {
              return _this3.__onUploadingDone(info);
            }
          }).fail(function (errorType, fileInfo, error) {
            if (object === _this3.__currentFile()) {
              return _this3.__onUploadingFailed(errorType, error);
            }
          });
        }
      }
    }, {
      key: "__onUploadingDone",
      value: function __onUploadingDone(info) {
        this.element.val(this.__infoToValue(info));
        this.template.setFileInfo(info);
        return this.template.loaded();
      }
    }, {
      key: "__onUploadingFailed",
      value: function __onUploadingFailed(errorType, error) {
        this.template.reset();
        return this.template.error(errorType, error);
      }
    }, {
      key: "__setExternalValue",
      value: function __setExternalValue(value) {
        return this.__setObject(valueToFile(value, this.settings));
      }
    }, {
      key: "value",
      value: function value(_value) {
        if (_value !== undefined) {
          this.__hasValue = true;

          this.__setExternalValue(_value);

          return this;
        } else {
          return this.currentObject;
        }
      }
    }, {
      key: "reloadInfo",
      value: function reloadInfo() {
        return this.value(this.element.val());
      }
    }, {
      key: "openDialog",
      value: function openDialog(tab) {
        var _this4 = this;

        if (this.settings.systemDialog) {
          return fileSelectDialog(this.template.content, this.settings, function (input) {
            return _this4.__handleDirectSelection('object', input.files);
          });
        } else {
          return this.__openDialog(tab);
        }
      }
    }, {
      key: "__openDialog",
      value: function __openDialog(tab) {
        var dialogApi;
        dialogApi = openDialog(this.currentObject, tab, this.settings);

        this.__onDialogOpen.fire(dialogApi);

        return dialogApi.done(this.__setObject.bind(this));
      }
    }, {
      key: "api",
      value: function api() {
        if (!this.__api) {
          this.__api = bindAll(this, ['openDialog', 'reloadInfo', 'value', 'validators']);
          this.__api.onChange = publicCallbacks(this.__onChange);
          this.__api.onUploadComplete = publicCallbacks(this.__onUploadComplete);
          this.__api.onDialogOpen = publicCallbacks(this.__onDialogOpen);
          this.__api.inputElement = this.element.get(0);
        }

        return this.__api;
      }
    }]);

    return BaseWidget;
  }();

  var Widget$1 = /*#__PURE__*/function (_BaseWidget) {
    _inherits(Widget, _BaseWidget);

    var _super = _createSuper(Widget);

    function Widget() {
      _classCallCheck(this, Widget);

      return _super.apply(this, arguments);
    }

    _createClass(Widget, [{
      key: "__currentFile",
      value: function __currentFile() {
        return this.currentObject;
      }
    }, {
      key: "__handleDirectSelection",
      value: function __handleDirectSelection(type, data) {
        var file = fileFrom(type, data[0], this.settings);

        if (this.settings.systemDialog || !this.settings.previewStep) {
          return this.__setObject(file);
        } else {
          return this.__openDialog('preview').addFiles([file]);
        }
      }
    }]);

    return Widget;
  }(BaseWidget);

  Widget$1._name = 'SingleWidget';

  var MultipleWidget$1 = /*#__PURE__*/function (_BaseWidget) {
    _inherits(MultipleWidget, _BaseWidget);

    var _super = _createSuper(MultipleWidget);

    function MultipleWidget() {
      _classCallCheck(this, MultipleWidget);

      return _super.apply(this, arguments);
    }

    _createClass(MultipleWidget, [{
      key: "__currentFile",
      value: function __currentFile() {
        var ref1;
        return (ref1 = this.currentObject) != null ? ref1.promise() : undefined;
      }
    }, {
      key: "__setObject",
      value: function __setObject(group) {
        if (!isFileGroupsEqual(this.currentObject, group)) {
          return _get(_getPrototypeOf(MultipleWidget.prototype), "__setObject", this).call(this, group); // special case, when multiple widget is used with clearable
          // and user or some external code clears the value after
          // group loading error.
        } else if (!group) {
          this.__reset();

          return this.element.val('');
        }
      }
    }, {
      key: "__setExternalValue",
      value: function __setExternalValue(value) {
        var _this = this;

        var groupPr;
        this.__lastGroupPr = groupPr = valueToGroup(value, this.settings);

        if (value) {
          this.template.setStatus('started');
          this.template.statusText.text(locale.t('loadingInfo'));
        }

        return groupPr.done(function (group) {
          if (_this.__lastGroupPr === groupPr) {
            return _this.__setObject(group);
          }
        }).fail(function () {
          if (_this.__lastGroupPr === groupPr) {
            return _this.__onUploadingFailed('createGroup');
          }
        });
      }
    }, {
      key: "__handleDirectSelection",
      value: function __handleDirectSelection(type, data) {
        var files = filesFrom(type, data, this.settings);

        if (this.settings.systemDialog) {
          return this.__setObject(FileGroup(files, this.settings));
        } else {
          return this.__openDialog('preview').addFiles(files);
        }
      }
    }]);

    return MultipleWidget;
  }(BaseWidget);

  MultipleWidget$1._name = 'MultipleWidget';

  var dataAttr = 'uploadcareWidget';
  var selector = '[role~="uploadcare-uploader"]';

  var initialize = function initialize() {
    var container = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : ':root';
    var el, i, len, ref, res, widgets;
    res = [];
    ref = $__default["default"](container);

    for (i = 0, len = ref.length; i < len; i++) {
      el = ref[i];
      widgets = _initialize(el.querySelectorAll(selector));
      res = res.concat(widgets);
    }

    return res;
  };

  var _initialize = function _initialize(targets) {
    var i, len, results, target, widget;
    results = [];

    for (i = 0, len = targets.length; i < len; i++) {
      target = targets[i];
      widget = $__default["default"](target).data(dataAttr);

      if (widget && widget.inputElement === target) {
        // widget already exists
        continue;
      }

      results.push(initializeWidget(target));
    }

    return results;
  };

  var SingleWidget = function SingleWidget(el, settings) {
    return initializeWidget(el, settings, Widget$1);
  };

  var MultipleWidget = function MultipleWidget(el, settings) {
    return initializeWidget(el, settings, MultipleWidget$1);
  };

  var Widget = function Widget(el, settings) {
    return initializeWidget(el, settings);
  };

  var initializeWidget = function initializeWidget(input) {
    var settings = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var targetClass = arguments.length > 2 ? arguments[2] : undefined;
    var inputArr = $__default["default"](input);

    if (inputArr.length === 0) {
      throw new Error('No DOM elements found matching selector');
    } else if (inputArr.length > 1) {
      warn('There are multiple DOM elements matching selector');
    }

    input = inputArr.eq(0);
    var s = build(_objectSpread2(_objectSpread2({}, settings), input.data()));
    var Widget = s.multiple ? MultipleWidget$1 : Widget$1;

    if (targetClass && Widget !== targetClass) {
      throw new Error("This element should be processed using ".concat(Widget._name));
    }

    var api = input.data(dataAttr);

    if (!api || api.inputElement !== input[0]) {
      cleanup(input);
      var widget = new Widget(input, s);
      api = widget.api();
      input.data(dataAttr, api);
      widget.template.content.data(dataAttr, api);
    }

    return api;
  };

  var cleanup = function cleanup(input) {
    return input.off('.uploadcare').each(function () {
      var widget, widgetElement;
      widgetElement = $__default["default"](this).next('.uploadcare--widget');
      widget = widgetElement.data(dataAttr);

      if (widget && widget.inputElement === this) {
        return widgetElement.remove();
      }
    });
  };

  var start = once(function (s, isolated) {
    // when isolated, call settings.common(s) only
    s = common(s, isolated);

    if (isolated) {
      return;
    }

    if (s.live) {
      setInterval(initialize, 100);
    } // should be after settings.common(s) call


    return initialize();
  });
  isWindowDefined() && $__default["default"](function () {
    if (!window.UPLOADCARE_MANUAL_START) {
      start();
    }
  });

  var namespace$1 = _objectSpread2(_objectSpread2({}, _namespace), {}, {
    templates: {
      JST: JST,
      tpl: tpl
    },
    crop: {
      CropWidget: CropWidget
    },
    dragdrop: {
      support: support,
      uploadDrop: uploadDrop,
      watchDragging: watchDragging,
      receiveDrop: receiveDrop
    },
    ui: {
      progress: {
        Circle: Circle,
        BaseRenderer: BaseRenderer,
        TextRenderer: TextRenderer,
        CanvasRenderer: CanvasRenderer
      }
    },
    widget: {
      tabs: {
        FileTab: FileTab,
        UrlTab: UrlTab,
        CameraTab: CameraTab,
        RemoteTab: RemoteTab,
        BasePreviewTab: BasePreviewTab,
        PreviewTab: PreviewTab,
        PreviewTabMultiple: PreviewTabMultiple
      },
      Template: Template,
      BaseWidget: BaseWidget,
      Widget: Widget$1,
      MultipleWidget: MultipleWidget$1
    },
    isDialogOpened: isDialogOpened,
    closeDialog: closeDialog,
    openDialog: openDialog,
    openPreviewDialog: openPreviewDialog,
    openPanel: openPanel,
    registerTab: registerTab,
    initialize: initialize,
    SingleWidget: SingleWidget,
    MultipleWidget: MultipleWidget,
    Widget: Widget,
    start: start
  });

  var plugin$1 = createPlugin(namespace$1);

  var uploadcare$1 = _objectSpread2(_objectSpread2({}, uploadcare$2), {}, {
    plugin: plugin$1,
    start: start,
    initialize: initialize,
    openDialog: openDialog,
    closeDialog: closeDialog,
    openPanel: openPanel,
    registerTab: registerTab,
    Circle: Circle,
    SingleWidget: SingleWidget,
    MultipleWidget: MultipleWidget,
    Widget: Widget,
    tabsCss: tabsCss,
    dragdrop: {
      receiveDrop: receiveDrop,
      support: support,
      uploadDrop: uploadDrop
    }
  });

  var namespace = namespace$1;
  var plugin = createPlugin(namespace);

  var uploadcare = _objectSpread2(_objectSpread2({}, uploadcare$1), {}, {
    plugin: plugin,
    locales: Object.keys(locale.translations)
  });

  return uploadcare;

}));


/***/ }),

/***/ 20429:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   a: () => (/* binding */ useCustomTabs),
/* harmony export */   b: () => (/* binding */ useDeepEffect),
/* harmony export */   d: () => (/* binding */ defaultPreviewUrlCallback),
/* harmony export */   u: () => (/* binding */ useCommitedCallback)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17640);
/* harmony import */ var _index_da2efec7_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(46145);
/* harmony import */ var react_fast_compare__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(77015);




var useCommitedRef = function useCommitedRef(value) {
  var ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(value);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    ref.current = value;
  }, [value]);
  return ref;
};

var useCommitedCallback = function useCommitedCallback(callback) {
  var ref = useCommitedRef(callback);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {
    return ref.current && ref.current.apply(ref, arguments);
  }, [ref]);
};

var useDeepEffect = function useDeepEffect(effect, deps) {
  var ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(undefined);
  if (!react_fast_compare__WEBPACK_IMPORTED_MODULE_1__(deps, ref.current)) {
    ref.current = deps;
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(effect, ref.current);
};

var useCustomTabs = function useCustomTabs(tabs, uploadcare) {
  useDeepEffect(function () {
    var customTabs = Object.entries(tabs || []);
    customTabs.forEach(function (_ref) {
      var _ref2 = (0,_index_da2efec7_mjs__WEBPACK_IMPORTED_MODULE_2__.b)(_ref, 2),
        name = _ref2[0],
        implementation = _ref2[1];
      uploadcare.registerTab(name, function () {
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        return implementation.apply(void 0, args.concat([uploadcare]));
      });
    });
  }, [tabs, uploadcare]);
};

var defaultPreviewUrlCallback = function defaultPreviewUrlCallback(cdnUrl) {
  return cdnUrl;
};




/***/ })

};
;