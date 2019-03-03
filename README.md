# LaunchLib-js
[![NPM version][npm-version-image]][npm-url] 
[![NPM downloads][npm-downloads-image]][downloads-url] 
[![MIT License][license-image]][license-url]

Unofficial NPM package for wrapping Launch Library (https://launchlibrary.net)

## Usage
### Install
`npm install --save launchlib-js`

### Import
`const Launch = require('launchlib-js')`

`const LaunchLib = new Launch()`

### Examples
LaunchLib takes two parameters, a function name, and a variable, then returns the result depends on the parameters passed in.
`LaunchLib.get(functionName, var).then(data => {...})`

```
LaunchLib.get('getLaunches', '12')
    .then(data => { 
        // do something
    })
    .catch(err => { 
        // handle error
    }) 
```

The above call will return next 12 upcoming launches.

### Supported Request Types and Parameters (total of 34)
- `getAgencyById`
- `getAgencyByAbbr`
- `getAgenciesByName`
- `getAgenciesByType`
- `getAgenciesByCountryCode`
- `getAgencyTypeById`
- `getAgencyTypeByName`
- `getEventTypeById`
- `getEventTypeByName`
- `getLaunchById`
- `getLaunchByName`
- `getLaunches`
- `getLaunchesAfter`
- `getLaunchesBetween`
- `getLaunchEventById`
- `getLaunchStatusById`
- `getLaunchStatusByName`
- `getLocationById`
- `getLocationByName`
- `getLocationByCountryCode`
- `getMissionById`
- `getMissionByName`
- `getMissionEventById`
- `getMissionEventByParentId`
- `getMissionTypeById`
- `getMissionTypeByName`
- `getPadById`
- `getPadTypeByName`
- `getPadTypeByLocationId`
- `getRocketById`
- `getRocketTypeByName`
- `getRocketTypeByConfigName`
- `getRocketEventById`
- `getRocketEventByLaunchId`
- `getRocketFamilyById`

### Example App
[Click here](https://github.com/JerryFZhang/rockets) to see a React + Node.js exmaple of `launchlib-js`

## License

Moment.js is freely distributable under the terms of the [MIT license](https://github.com/moment/moment/blob/develop/LICENSE).



[license-image]: http://img.shields.io/badge/license-MIT-blue.svg?style=flat
[license-url]: LICENSE

[npm-url]: https://npmjs.org/package/launchlib-js
[npm-version-image]: http://img.shields.io/npm/v/launchlib-js.svg?style=flat
[npm-downloads-image]: http://img.shields.io/npm/dm/launchlib-js.svg?style=flat
[downloads-url]: https://npmcharts.com/compare/launchlib-js?minimal=true