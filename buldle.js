"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Math =
/*#__PURE__*/
function () {
  function Math() {
    _classCallCheck(this, Math);
  }

  _createClass(Math, null, [{
    key: "sum",
    value: function sum(a, b) {
      return a + b;
    }
  }]);

  return Math;
}();

console.log(Math.sum(1, 2));
