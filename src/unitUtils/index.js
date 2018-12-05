class UnitUtils {
  /**
   * Unit
   * @type {{EM: string, REM: string, PX: string, PERCENT: string}}
   */
  UNIT = {
    EM: 'em',
    REM: 'rem',
    PX: 'px',
    PERCENT: '%',
  };

  /**
   * @public
   * @description Math operations accepting units value and return calculated result with unit.
   * @example
   * import unitUtils from '@bootstrap-styled/utils/lib/unitUtils';
   *
   * const { math } = unitUtils;
   *
   * const add = math.addition('15px' + '23px');
   * // OUTPUT '38px';
   * const sub = math.substract('1.5em' + '2.3em');
   * // OUTPUT '3.8em';
   * const mult = math.multiply('15px' * 0.5);
   * // OUTPUT '7.5px';
   * const div = math.divide('15px' / 5);
   * // OUTPUT '3px';
   */
  math = {
    addition: function addition(a, b) {
      const unit = this.detectUnit(a) || this.detectUnit(b);
      return (this.rmUnit(a) + this.rmUnit(b)) + unit;
    }.bind(this),
    subtract: function subtract(a, b) {
      const unit = this.detectUnit(a) || this.detectUnit(b);
      return (this.rmUnit(a) - this.rmUnit(b)) + unit;
    }.bind(this),
    multiply: function multiply(a, b) {
      const unit = this.detectUnit(a) || this.detectUnit(b);
      return (this.rmUnit(a) * this.rmUnit(b)) + unit;
    }.bind(this),
    divide: function divide(a, b) {
      const unit = this.detectUnit(a) || this.detectUnit(b);
      return (this.rmUnit(a) / this.rmUnit(b)) + unit;
    }.bind(this),
  };

  /**
   * @public
   * @description Return the unit from a string by priority : px/rem/em/percent
   * @param {String} value
   * @throw {Error} if unit can't be detected
   * @returns {String} a unit.
   * @example
   * import unitUtils from '@bootstrap-styled/utils/lib/unitUtils';
   * const { detectUnit } = unitUtils;
   *
   * const spacer = '1rem';
   * const detectedUnit = detectUnit(spacer);
   *
   * // OUTPUT 'rem'
   */
  detectUnit = (value) => {
    let ext;
    const valueStr = value.toString();
    if (valueStr.match(this.UNIT.PX)) {
      ext = this.UNIT.PX;
    } else if (valueStr.match(this.UNIT.REM)) {
      ext = this.UNIT.REM;
    } else if (valueStr.match(this.UNIT.EM)) {
      ext = this.UNIT.EM;
    } else if (valueStr.match(this.UNIT.PERCENT)) {
      ext = this.UNIT.PERCENT;
    } else if (!isNaN(value)) { // eslint-disable-line no-restricted-globals
      return null;
    } else {
      throw new Error(`detectUnit can't find unit for ${value}`);
    }
    return ext;
  }

  /**
   * @public
   * @description Convert a value string to float. If unit is undefined, it will try to guess it's value using {detectUnit}
   * @param {String} value
   * @param {String} unit
   * @returns {Number} without it's unit
   * @example
   * import unitUtils from '@bootstrap-styled/utils/lib/unitUtils';
   * const { detectUnit, rmUnit } = unitUtils;
   *
   * const spacer = '1rem';
   * const spacerHalved' = rmUnit(spacer, detectedUnit) / 2 + detectedUnit);
   *
   * // OUTPUT '.5rem'
   */
  rmUnit = (value, unit) => {
    const valueStr = value.toString();
    const ext = unit || this.detectUnit(valueStr);
    const number = valueStr.replace(ext, '');
    return parseFloat(number);
  }

  /**
   * @public
   * @description toPercent
   * @param {Number} value
   * @param {Number} [input=100]
   * @param {Number} decimal (default: 2)
   * @returns {string} percentage value
   * @example
   * import unitUtils from '@bootstrap-styled/utils/lib/unitUtils';
   * const { toPercent } = unitUtils;
   *
   *  const percentage = toPercent(20, 100, 10);
   *
   * // OUTPUT '20%'
   */
  toPercent = (value, total = 100, decimal = 2) => { // eslint-disable-line arrow-body-style
    return `${Math.floor((value / total * 100) * (10 ** decimal)) / (10 ** decimal)}${this.UNIT.PERCENT}`; // eslint-disable-line no-mixed-operators
  }
}

export default new UnitUtils();
