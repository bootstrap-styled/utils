'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var UnitUtils = function UnitUtils() {
  var _this = this;

  _classCallCheck(this, UnitUtils);

  this.UNIT = {
    EM: 'em',
    REM: 'rem',
    PX: 'px',
    PERCENT: '%'
  };
  this.math = {
    addition: function addition(a, b) {
      var unit = this.detectUnit(a) || this.detectUnit(b);
      return this.rmUnit(a) + this.rmUnit(b) + unit;
    }.bind(this),
    subtract: function subtract(a, b) {
      var unit = this.detectUnit(a) || this.detectUnit(b);
      return this.rmUnit(a) - this.rmUnit(b) + unit;
    }.bind(this),
    multiply: function multiply(a, b) {
      var unit = this.detectUnit(a) || this.detectUnit(b);
      return this.rmUnit(a) * this.rmUnit(b) + unit;
    }.bind(this),
    divide: function divide(a, b) {
      var unit = this.detectUnit(a) || this.detectUnit(b);
      return this.rmUnit(a) / this.rmUnit(b) + unit;
    }.bind(this)
  };

  this.detectUnit = function (value) {
    var ext = void 0;
    var valueStr = value.toString();
    if (valueStr.match(_this.UNIT.PX)) {
      ext = _this.UNIT.PX;
    } else if (valueStr.match(_this.UNIT.REM)) {
      ext = _this.UNIT.REM;
    } else if (valueStr.match(_this.UNIT.EM)) {
      ext = _this.UNIT.EM;
    } else if (valueStr.match(_this.UNIT.PERCENT)) {
      ext = _this.UNIT.PERCENT;
    } else if (!isNaN(value)) {
      // eslint-disable-line no-restricted-globals
      return null;
    } else {
      throw new Error('detectUnit can\'t find unit for ' + value);
    }
    return ext;
  };

  this.rmUnit = function (value, unit) {
    var valueStr = value.toString();
    var ext = unit || _this.detectUnit(valueStr);
    var number = valueStr.replace(ext, '');
    return parseFloat(number);
  };

  this.toPercent = function (value) {
    var total = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;
    var decimal = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 2;
    // eslint-disable-line arrow-body-style
    return '' + Math.floor(value / total * 100 * Math.pow(10, decimal)) / Math.pow(10, decimal) + _this.UNIT.PERCENT; // eslint-disable-line no-mixed-operators
  };
}
/**
 * Unit
 * @type {{EM: string, REM: string, PX: string, PERCENT: string}}
 */


/**
 * Math operations accepting units value and return
 * @type {{addition: math.addition, substract: math.subtract, multiply: math.multiply, divide: math.divide}}
 */


/**
 * detectUnit :
 * return the unit from a string by priority : px/rem/em/percent
 * @param value
 * @throw {Error} if unit can't be detected
 * @returns {*}
 */


/**
 * rmUnit :
 * Convert a value string to float
 * If unit is undefined, it will try to guess it's value using {detectUnit}
 *
 * @param value
 * @param unit
 * @returns {Number} without it's unit
 */


/**
 * toPercent
 * @param value
 * @param total (default: 100)
 * @param decimal (default: 2)
 * @returns {string} percentage value
 */
;

exports.default = new UnitUtils();
module.exports = exports['default'];