# bootstrap-styled-utils

bootstrap-styled-utils are utils function used in our bootstrap-styled components.

**Master**

[![build status](https://module.kopaxgroup.com/styled-components/bootstrap-styled-utils/badges/master/build.svg)](https://module.kopaxgroup.com/styled-components/bootstrap-styled-utils/commits/master)
[![coverage report](https://module.kopaxgroup.com/styled-components/bootstrap-styled-utils/badges/master/coverage.svg)](https://module.kopaxgroup.com/styled-components/bootstrap-styled-utils/commits/master)

**Dev**

[![build status](https://module.kopaxgroup.com/styled-components/bootstrap-styled-utils/badges/dev/build.svg)](https://module.kopaxgroup.com/styled-components/bootstrap-styled-utils/commits/dev)
[![coverage report](https://module.kopaxgroup.com/styled-components/bootstrap-styled-utils/badges/dev/coverage.svg)](https://module.kopaxgroup.com/styled-components/bootstrap-styled-utils/commits/dev)

## Table of Contents

  - [Installation](#installation)
  - [Changelog](#changelog)
  - [Utilities](#utilities)
  - [Reminders](#reminders)
  - [Quick start](#quick-start)
  - [Release](#release)
  - [License](#license)

---

## Installation

    npm install git+ssh://git@module.kopaxgroup.com:20024/styled-components/bootstrap-styled-utils.git --save

## Changelog

  - View [Changelog](CHANGELOG.md)
  
## Utilities

  - fn `parseTransition`: return a transitionList `[{ property, duration, timingFunction, delay }]` from a css transition rule.
  - fn `toHashCode`: return a hash code.
  - fn `getTetherAttachment`: return attachement `{ attachment, tragetAttachment }` from position.
  - Array `tetherAttachements` : list of tether position.
  - fn `getScrollbarWidth`: get the width of the scrollbar.
  - fn `setScrollbarWidth`: set the width of the scrollbar to the body style.
  - fn `isBodyOverflowing`: return true if body is overflowing.
  - fn `getOriginalBodyPadding`: return original body padding. 
  - fn `conditionallyUpdateScrollbar`: fix scrolbar depending on navar classes.

## Reminders

**⚠️ When using this plugin, you must import in the first line of your application javascript entry file `babel-polyfill`: ⚠️**
  
    import "babel-polyfill";
    
To enable ES features in older browsers, you MUST include in the package.json

    "browserslist": ["ie >= 9", "last 2 versions"]
    // or
    "browserslist": ["ie >= 10", "last 2 versions"]

## Quick start

Clone project

    git clone ssh://git@module.kopaxgroup.com:20024/styled-components/bootstrap-styled-utils.git

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

`dev` is the developement branch. It should be used by developers for applying their merge requests.

If you wish to implement new functionalities you need to do a merge request including your change on the `dev` branch.

    git checkout dev
    git checkout $(whoami)-dev
    git push -u origin $(whoami)-dev 

You can now start working on your branch. Don't forget to check `Delete branch when merged`.

## Release

Merge `dev` into `master` will release a new version and prepare a new version in `dev`.

To release a new version, edit the [Changelog](CHANGELOG.md) and set the version in `package.json` and merge your change into `master`.

**⚠️ if you are releasing on a git repository instead of a npm repository, **DO NOT** forget to remove `build`, and `dist` from the `.gitignore` ⚠️**

    sed -i "/lib\|dist/d" .gitignore

## License

Copyright (c) 2017 Kopax Ltd. For more information `contact@kopaxgroup.com`. Made with [rollup-umd](https://module.kopaxgroup.com/dev-tools/rollup-umd/tags/0.1.5) 0.1.5
