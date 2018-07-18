[![build status]($CI_PROJECT_URL/badges/v$PACKAGE_VERSION/build.svg)]($CI_PROJECT_URL/commits/v$PACKAGE_VERSION)
[![coverage report]($CI_PROJECT_URL/badges/v$PACKAGE_VERSION/coverage.svg)]($CI_PROJECT_URL/commits/v$PACKAGE_VERSION)

![image](https://img.shields.io/badge/version-$PACKAGE_VERSION-green.svg)
![image](https://img.shields.io/badge/node-$NODE_VERSION-brightgreen.svg)
![image](https://img.shields.io/badge/npm-$NPM_VERSION-red.svg)
![image](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)
![image]($IMG_SHIELD_PUBLISHING)

```html
<strong>Contribute to improve our documentation, it support HTML, React and Markdown!</strong>
```
## Available tools

  - obj `unitUtils`
    - const `UNIT`: `{ EM, REM, PX, PERCENT }`: constants
    - obj `math`: `{ addition, subtract, multiply, divide }`: math operation
    - fn `detectUnit`: detect the unit of a value
    - fn `rmUnit`: remove the unit from a value
    - fn `toPercent`: convert to percentage
  - fn `parseTransition`: return a transitionList `[{ property, duration, timingFunction, delay }]` from a css transition rule.
  - fn `toHashCode`: return a hash code.
  - fn `getTetherAttachment`: return attachment `{ attachment, tragetAttachment }` from position.
  - Array `tetherAttachements` : list of tether position.
  - fn `getScrollbarWidth`: get the width of the scrollbar.
  - fn `setScrollbarWidth`: set the width of the scrollbar to the body style.
  - fn `isBodyOverflowing`: return true if body is overflowing.
  - fn `getOriginalBodyPadding`: return original body padding. 
  - fn `conditionallyUpdateScrollbar`: fix scrollbar depending on navbar classes.
