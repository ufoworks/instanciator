"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var instances = {};

var Instanciator = /*#__PURE__*/function () {
  function Instanciator(name, object) {
    var _this = this;

    _classCallCheck(this, Instanciator);

    if (!name || !object) {
      return;
    }

    document.querySelectorAll("[data-".concat(name, "]")).forEach(function (el) {
      var id = _this.uniqueId;
      el.dataset.domId = id;
      var options = el.dataset[name] === '' ? '{}' : el.dataset[name];
      instances[id] = object(el, JSON.parse(options));
    });
  }

  _createClass(Instanciator, [{
    key: "uniqueId",
    get: function get() {
      return Math.random().toString(36).substr(2, 16);
    }
  }], [{
    key: "getInstance",
    value: function getInstance(el) {
      var id = el.dataset.domId;
      return instances[id];
    }
  }]);

  return Instanciator;
}();

exports.default = Instanciator;