Series of helpers and methods used to calculate css numerical values.

#### Helpers

* detectUnit()

Return the unit from a string by priority : px/rem/em/percent.

```js static

import unitUtils from '@bootstrap-styled/utils/lib/unitUtils';
const { detectUnit, rmUnit, toPercent } = unitUtils;

$spacer = '1rem';
const detectedUnit = detectUnit($spacer);
// OUTPUT 'rem'

```

*  rmUnit()

Convert a value string to float. If unit is undefined, it will try to guess it's value using {detectUnit}

```js static

'$spacer-halved' = rmUnit($spacer, detectedUnit) / 2 + detectedUnit);
// OUTPUT '.5rem'

```
*  toPercent()

```js static

'$spacer-halved-percentage' = toPercent(rmUnit(toPercent));
// OUTPUT '50%'

```

#### Calculus

Math operations accepting units value and return;

```js static
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
