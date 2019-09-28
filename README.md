# LaunchLib-js
[![NPM version][npm-version-image]][npm-url] 
[![NPM downloads][npm-downloads-image]][downloads-url] 
[![MIT License][license-image]][license-url]
[![Travis](https://api.travis-ci.org/JerryFZhang/LaunchLib-js.svg)](https://travis-ci.org/JerryFZhang/LaunchLib-js) 
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/beb89b404293452bbc98bc6c65829fdb)](https://www.codacy.com/manual/jerry.fengwei/LaunchLib-js?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=JerryFZhang/LaunchLib-js&amp;utm_campaign=Badge_Grade)
[![Dependency Status](https://david-dm.org/JerryFZhang/LaunchLib-js.svg)](https://david-dm.org/JerryFZhang/LaunchLib-js) 
[![devDependency Status](https://david-dm.org/JerryFZhang/LaunchLib-js/dev-status.svg)](https://david-dm.org/JerryFZhang/LaunchLib-js#info=devDependencies) 
[![Coverage Status](https://coveralls.io/repos/github/JerryFZhang/LaunchLib-js/badge.svg?branch=master)](https://coveralls.io/github/JerryFZhang/LaunchLib-js?branch=master) 
![License](https://img.shields.io/badge/license-MIT-lightgray.svg)

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

## Supported Request Types and Parameters (total of 33)

### Agency
#### `getAgencyById`
- To return the agency with an ID of 1 using `getAgencyById`
```
LaunchLib.get('getAgencyById', '1').then(data => {{...})
```

#### `getAgencyByAbbr`
- To return the agency with an abbreviation of NASA using `getAgencyByAbbr`
```
LaunchLib.get('getAgencyByAbbr', 'NASA').then(data => {{...})
```
#### `getAgenciesByName`
- To return the agency with a name matching "National" using `getAgenciesByName`
```
LaunchLib.get('getAgenciesByName', 'National').then(data => {{...})
```

### Agency Type
#### `getAgencyTypeById`
- To return the agency type with an ID of 1 using `getAgencyTypeById`
```
LaunchLib.get('getAgencyTypeById', '1').then(data => {{...})
```

#### `getAgencyTypeByName`
- To return the agency type with a name of government using `getAgencyTypeByName`
```
LaunchLib.get('getAgencyTypeByName', 'government').then(data => {{...})
```

### Event Type
#### `getEventTypeById`
- To return the event type with an ID of 1 using `getEventTypeById`
```
LaunchLib.get('getEventTypeById', '1').then(data => {{...})
```

#### `getEventTypeByName`
- To return the event type with a name of info using `getEventTypeByName`
```
LaunchLib.get('getEventTypeByName', 'info').then(data => {{...})
```

### Launch
#### `getLaunchById`
- To return the launch with an ID of 1028 using `getLaunchById`
```
LaunchLib.get('getLaunchById', '1028').then(data => {{...})
```

#### `getLaunchByName`
- TO return the launch with a name including Falcon using `getLaunchByName`
```
LaunchLib.get('getLaunchByName', 'falcon').then(data => {{...})
```

#### `getLaunches`
- To return the next 5 launches using `getLaunches`
```
LaunchLib.get('getLaunches', '5').then(data => {{...})
```

#### `getLaunchesAfter`
- To return launches after August 20th, 2015 using `getLaunchesAfter`
```
LaunchLib.get('getLaunchesAfter', '2015-08-20').then(data => {{...})
```

#### `getLaunchesBetween`
- To return launches between August 20th, 2015 and September 20th, 2015 using `getLaunchesBetween`
```
LaunchLib.get('getLaunchesBetween', {
        "startDate": "2015-08-20",
        "endDate": "2015-09-20"
    }).then(data => {{...})
```
### Launch Event
#### `getLaunchEventById`
- To return the launch event with an ID of 7 using `getLaunchEventById`
```
LaunchLib.get('getLaunchEventById', '1').then(data => {{...})
```

### Launch Status
#### `getLaunchStatusById`
- To return the launch status with an ID of 1 using `getLaunchStatusById`
```
LaunchLib.get('getLaunchStatusById', '1').then(data => {{...})
```
#### `getLaunchStatusByName`
- To return the launch status with a name of GO using `getLaunchStatusByName`
```
LaunchLib.get('getLaunchStatusByName', 'GO').then(data => {{...})
```

### Location
#### `getLocationById`
- To return the location with an ID of 1 using `getLocationById`
```
LaunchLib.get('getLocationById', '1').then(data => {{...})
```
#### `getLocationByName`
- To return the location with a name of Woomera using `getLocationByName`
```
LaunchLib.get('getLocationByName', 'woomera').then(data => {{...})
```
#### `getLocationByCountryCode`
- To return the location withing the United States using `getLocationByCountryCode`
```
LaunchLib.get('getLocationByCountryCode', 'USA').then(data => {{...})
```

### Mission
#### `getMissionById`
- To return the mission with an ID of 601 using `getMissionById`
```
LaunchLib.get('getMissionById', '601').then(data => {{...})
```
#### `getMissionByName`
- To return the mission with a name of GPS using s `getMissionByName`
```
LaunchLib.get('getMissionByName', 'GPS').then(data => {{...})
```

### Mission Event
#### `getMissionEventById`
- To return the mission event with an ID of 1 using `getMissionEventById`
```
LaunchLib.get('getMissionEventById', '1').then(data => {{...})
```
#### `getMissionEventByParentId`
- To return the mission event with a mission id of 1 using `getMissionEventByParentId`
```
LaunchLib.get('getMissionEventByParentId', '1').then(data => {{...})
```

### Mission Type
#### `getMissionTypeById`
- To return the mission type with an ID of 1 using `getMissionTypeById`
```
LaunchLib.get('getMissionTypeById', '1').then(data => {{...})
```
#### `getMissionTypeByName`
- To should return the mission type with a name of Earth Science using `getMissionTypeByName`
```
LaunchLib.get('getMissionTypeByName', 'Earth Science').then(data => {{...})
```

### Pad
#### `getPadById`
- To return the pad with an ID of 1 using `getPadById`
```
LaunchLib.get('getPadById', '1').then(data => {{...})
```
#### `getPadTypeByName`
- To should return pads with a name containing launch complex using `getPadTypeByName`
```
LaunchLib.get('getPadTypeByName', 'launch complex').then(data => {{...})
```
#### `getPadTypeByLocationId`
- To should return pads with a location ID of 1 using `getPadTypeByLocationId`
```
LaunchLib.get('getPadTypeByLocationId', '1').then(data => {{...})
```

### Rocket Event
#### `getRocketById`
- To return the rocket with an ID of 1 using `getRocketById`
```
LaunchLib.get('getRocketById', '1').then(data => {{...})
```
#### `getRocketTypeByName`
- To return the rocket with a name containing Falcon using `getRocketTypeByName`
```
LaunchLib.get('getRocketTypeByName', 'falcon').then(data => {{...})
```
#### `getRocketTypeByConfigName`
- To return the rockets with configuration containing v1.1 using `getRocketTypeByConfigName`
```
LaunchLib.get('getRocketTypeByConfigName', 'v1.1').then(data => {{...})
```
#### `getRocketEventById`
- To return the rocket event with an ID of 10 using `getRocketEventById`
```
LaunchLib.get('getRocketEventById', '10').then(data => {{...})
```
#### `getRocketEventByLaunchId`
- To return the launch event with a launch id of 1 using `getRocketEventByLaunchId`
```
LaunchLib.get('getRocketEventByLaunchId', '1').then(data => {{...})
```

### Rocket Family
#### `getRocketFamilyById`
- To return the rocket family with an ID of 1 using `getRocketFamilyById`
```
LaunchLib.get('getRocketFamilyById', '1').then(data => {{...})
```

### Example App
[Click here](https://github.com/JerryFZhang/rockets) to see a React + Node.js exmaple of `launchlib-js`

## License


LaunchLib-js is freely distributable under the terms of the [MIT license](https://github.com/moment/moment/blob/develop/LICENSE).



[license-image]: http://img.shields.io/badge/license-MIT-blue.svg?style=flat
[license-url]: LICENSE

[npm-url]: https://npmjs.org/package/launchlib-js
[npm-version-image]: http://img.shields.io/npm/v/launchlib-js.svg?style=flat
[npm-downloads-image]: http://img.shields.io/npm/dm/launchlib-js.svg?style=flat
[downloads-url]: https://npmcharts.com/compare/launchlib-js?minimal=true
