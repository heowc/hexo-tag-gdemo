"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var _require = require('./constants'),
    DEFAULT_GDEMO_STYLE_URL = _require.DEFAULT_GDEMO_STYLE_URL,
    DEFAULT_GDEMO_SCRIPT_URL = _require.DEFAULT_GDEMO_SCRIPT_URL,
    DEFAULT_PRISMJS_THEME = _require.DEFAULT_PRISMJS_THEME,
    PRISMJS_THEME_STYLE_URL = _require.PRISMJS_THEME_STYLE_URL;

var Config =
/*#__PURE__*/
function () {
  function Config(hexo) {
    _classCallCheck(this, Config);

    if (hexo.config.gdemo) {
      this._customize(hexo.config.gdemo);
    } else {
      this._default();
    }
  }

  _createClass(Config, [{
    key: "_customize",
    value: function _customize(gdemoConfig) {
      this._styleUrl = gdemoConfig.style_url | DEFAULT_GDEMO_STYLE_URL;
      this._scriptUrl = gdemoConfig.script_url | DEFAULT_GDEMO_SCRIPT_URL;
      this._prismjsThemeStyleUrl = String(PRISMJS_THEME_STYLE_URL).replace('%s', gdemoConfig.prism_theme | DEFAULT_PRISMJS_THEME);
    }
  }, {
    key: "_default",
    value: function _default() {
      this._styleUrl = DEFAULT_GDEMO_STYLE_URL;
      this._scriptUrl = DEFAULT_GDEMO_SCRIPT_URL;
      this._prismjsThemeStyleUrl = String(PRISMJS_THEME_STYLE_URL).replace('%s', DEFAULT_PRISMJS_THEME);
    }
  }, {
    key: "getStyleUrl",
    value: function getStyleUrl() {
      return this._styleUrl;
    }
  }, {
    key: "getScriptUrl",
    value: function getScriptUrl() {
      return this._scriptUrl;
    }
  }, {
    key: "getPrismjsThemeStyleUrl",
    value: function getPrismjsThemeStyleUrl() {
      return this._prismjsThemeStyleUrl;
    }
  }]);

  return Config;
}();

exports.default = Config;