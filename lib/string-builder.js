"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var StringBuilder = /*#__PURE__*/function () {
  function StringBuilder(value) {
    _classCallCheck(this, StringBuilder);

    this._array = [];
    this.append(value);
  }

  _createClass(StringBuilder, [{
    key: "append",
    value: function append(value) {
      if (value) {
        this._array.push(value);
      }
    }
  }, {
    key: "toString",
    value: function toString() {
      return this._array.join('');
    }
  }, {
    key: "clear",
    value: function clear() {
      this._array.length = 0;
    }
  }]);

  return StringBuilder;
}();

exports.default = StringBuilder;