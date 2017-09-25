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
   * Math operations accepting units value and return
   * @type {{addition: math.addition, substract: math.subtract, multiply: math.multiply, divide: math.divide}}
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
   * detectUnit :
   * return the unit from a string by priority : px/rem/em/percent
   * @param value
   * @throw {Error} if unit can't be detected
   * @returns {*}
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
   * rmUnit :
   * Convert a value string to float
   * If unit is undefined, it will try to guess it's value using {detectUnit}
   *
   * @param value
   * @param unit
   * @returns {Number} without it's unit
   */
  rmUnit = (value, unit) => {
    const valueStr = value.toString();
    const ext = unit || this.detectUnit(valueStr);
    const number = valueStr.replace(ext, '');
    return parseFloat(number);
  }

  /**
   * toPercent
   * @param value
   * @param total (default: 100)
   * @param decimal (default: 2)
   * @returns {string} percentage value
   */
  toPercent = (value, total = 100, decimal = 2) => { // eslint-disable-line arrow-body-style
    return `${Math.floor((value / total * 100) * (10 ** decimal)) / (10 ** decimal)}${this.UNIT.PERCENT}`; // eslint-disable-line no-mixed-operators
  }
}

export default new UnitUtils();

