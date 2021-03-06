<!-- Generated by documentation.js. Update this documentation by updating the source code. -->

## math

Math operations accepting units value and return calculated result with unit.

### Examples

```javascript
import unitUtils from '@bootstrap-styled/utils/lib/unitUtils';

const { math } = unitUtils;

const add = math.addition('15px' + '23px');
// OUTPUT '38px';
const sub = math.substract('1.5em' + '2.3em');
// OUTPUT '3.8em';
const mult = math.multiply('15px' * 0.5);
// OUTPUT '7.5px';
const div = math.divide('15px' / 5);
// OUTPUT '3px';
```

## detectUnit

Return the unit from a string by priority : px/rem/em/percent

### Parameters

-   `value` **[String][1]** 

### Examples

```javascript
import unitUtils from '@bootstrap-styled/utils/lib/unitUtils';
const { detectUnit } = unitUtils;

const spacer = '1rem';
const detectedUnit = detectUnit(spacer);

// OUTPUT 'rem'
```

Returns **[String][1]** a unit.

## rmUnit

Convert a value string to float. If unit is undefined, it will try to guess it's value using {detectUnit}

### Parameters

-   `value` **[String][1]** 
-   `unit` **[String][1]** 

### Examples

```javascript
import unitUtils from '@bootstrap-styled/utils/lib/unitUtils';
const { detectUnit, rmUnit } = unitUtils;

const spacer = '1rem';
const spacerHalved' = rmUnit(spacer, detectedUnit) / 2 + detectedUnit);

// OUTPUT '.5rem'
```

Returns **[Number][2]** without it's unit

## toPercent

toPercent

### Parameters

-   `value` **[Number][2]** 
-   `total`   (optional, default `100`)
-   `decimal` **[Number][2]** (default: 2) (optional, default `2`)
-   `input` **[Number][2]**  (optional, default `100`)

### Examples

```javascript
import unitUtils from '@bootstrap-styled/utils/lib/unitUtils';
const { toPercent } = unitUtils;

 const percentage = toPercent(20, 100, 10);

// OUTPUT '20%'
```

Returns **[string][1]** percentage value

[1]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String

[2]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number
