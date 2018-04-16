# bootstrap-styled-utils

bootstrap-styled-utils are utils function used in our bootstrap-styled components.

**Master**

[![build status](https://module.kopaxgroup.com/bootstrap-styled/bootstrap-styled-utils/badges/master/build.svg)](https://module.kopaxgroup.com/bootstrap-styled/bootstrap-styled-utils/commits/master)
[![coverage report](https://module.kopaxgroup.com/bootstrap-styled/bootstrap-styled-utils/badges/master/coverage.svg)](https://module.kopaxgroup.com/bootstrap-styled/bootstrap-styled-utils/commits/master)

**Dev**

[![build status](https://module.kopaxgroup.com/bootstrap-styled/bootstrap-styled-utils/badges/dev/build.svg)](https://module.kopaxgroup.com/bootstrap-styled/bootstrap-styled-utils/commits/dev)
[![coverage report](https://module.kopaxgroup.com/bootstrap-styled/bootstrap-styled-utils/badges/dev/coverage.svg)](https://module.kopaxgroup.com/bootstrap-styled/bootstrap-styled-utils/commits/dev)

## Table of Contents

  - [Installation](#installation)
  - [Changelog](#changelog)
  - [Utilities](#utilities)
  - [Quick start](#quick-start)
  - [License](#license)

---

## Installation

    npm install bootstrap-styled-utils --save

## Changelog

  - View [Changelog](CHANGELOG.md)
  
## Utilities

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
  
## Quick start

Clone project

    git clone ssh://git@module.kopaxgroup.com:20024/bootstrap-styled/bootstrap-styled-utils.git

Install dependencies

    npm install

Build project

    npm run build
    
Run unit test
     
    npm test
    
Watch unit test
     
    npm run test:watch

Watch the `/dist` directory

    npm run build:dist:watch

Watch the `/lib` directory

    npm run build:lib:watch

# Contribute

`master` is used to release the version. 

- `master` only accept merge requests from `dev`

`dev` is the development branch. It should be used by developers for applying their merge requests.

If you wish to implement new features, you will need to do a merge request including your change on the `dev` branch.

    git checkout dev
    git checkout $(whoami)-dev
    git push -u origin $(whoami)-dev 

You can now start working on your branch. 

## License

Licensed under the MIT License, Copyright © 2017-present Yeutech Company Limited.

See [LICENSE](LICENSE.md) for more information.
