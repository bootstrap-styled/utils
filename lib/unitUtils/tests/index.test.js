'use strict';

var _index = require('../index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var math = _index2.default.math,
    rmUnit = _index2.default.rmUnit,
    toPercent = _index2.default.toPercent,
    detectUnit = _index2.default.detectUnit,
    UNIT = _index2.default.UNIT;


describe('unitUtils', function () {
  it('UNIT.PX should be equal to "px"', function () {
    expect(UNIT.PX).toEqual('px');
  });
  it('UNIT.EM should be equal to "em"', function () {
    expect(UNIT.EM).toEqual('em');
  });
  it('UNIT.REM should be equal to "rem"', function () {
    expect(UNIT.REM).toEqual('rem');
  });
  it('rmUnit should return a value without it\'s px unit', function () {
    var value = rmUnit('12px', UNIT.PX);
    expect(value).toEqual(12);
  });
  it('rmUnit should return a value without it\'s em unit', function () {
    var value = rmUnit('0.1em', UNIT.EM);
    expect(value).toEqual(0.1);
  });
  it('rmUnit should return a value without it\'s rem unit', function () {
    var value = rmUnit('0.7rem', UNIT.REM);
    expect(value).toEqual(0.7);
  });
  it('rmUnit should return a value without it\'s auto detected px unit', function () {
    var value = rmUnit('12px');
    expect(value).toEqual(12);
  });
  it('rmUnit should return a value without it\'s auto detected em unit', function () {
    var value = rmUnit('0.1em');
    expect(value).toEqual(0.1);
  });
  it('rmUnit should return a value without it\'s auto detected rem unit', function () {
    var value = rmUnit('0.7rem');
    expect(value).toEqual(0.7);
  });
  it('rmUnit should return a value without it\'s auto detected percent unit', function () {
    var value = rmUnit('10%');
    expect(value).toEqual(10);
  });
  it('detectUnit should return a px unit', function () {
    var value = detectUnit('12px');
    expect(value).toEqual(UNIT.PX);
  });
  it('detectUnit should return a em unit', function () {
    var value = detectUnit('0.7em');
    expect(value).toEqual(UNIT.EM);
  });
  it('detectUnit should return a rem unit', function () {
    var value = detectUnit('1rem');
    expect(value).toEqual(UNIT.REM);
  });
  it('detectUnit should return a percent unit', function () {
    var value = detectUnit('10%');
    expect(value).toEqual(UNIT.PERCENT);
  });
  it('toPercent should render a percentage', function () {
    var value = 5;
    var total = 20;
    var decimal = 3;
    expect(toPercent(value, total, decimal)).toEqual('25%');
  });
  it('toPercent should have arguments', function () {
    var css = toPercent(20, 100, 10);
    expect(css).toEqual('20%');
  });
  it('toPercent should have arguments with default args', function () {
    var css = toPercent(20);
    expect(css).toEqual('20%');
  });
  it('math should addition units', function () {
    var value = math.addition('10%', '15%');
    expect(value).toEqual('25%');
  });
  it('math should addition units and detect unit on second parameter', function () {
    var value = math.addition('10', '15%');
    expect(value).toEqual('25%');
  });
  it('math should subtract units', function () {
    var value = math.subtract('17px', '18px');
    expect(value).toEqual('-1px');
  });
  it('math should subtract units and detect unit on second parameter', function () {
    var value = math.subtract('17', '18px');
    expect(value).toEqual('-1px');
  });
  it('math should multiply units', function () {
    var value = math.multiply('15rem', '2');
    expect(value).toEqual('30rem');
  });
  it('math should multiply units and detect unit on second parameter', function () {
    var value = math.multiply('15', '2rem');
    expect(value).toEqual('30rem');
  });
  it('math should divide units', function () {
    var value = math.divide('0.1em', -2);
    expect(value).toEqual('-0.05em');
  });
  it('math should divide units and detect unit on second parameter', function () {
    var value = math.divide('0.1', '-2em');
    expect(value).toEqual('-0.05em');
  });
  it('should throw error if wrong arguments are passed', function () {
    expect(function () {
      return detectUnit('test-function');
    }).toThrowError("detectUnit can't find unit for test-function");
  });
});