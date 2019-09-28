const req = require('request')
const moment = require('moment')

class LaunchJS {
  constructor() {
    this.timeoutVal = 20000
    this.version = '1.4.1'
    // added different types of requests parameters for more functionality
  }

  timeout(milliseconds) {
    (milliseconds) ? this.timeoutVal = milliseconds: this.timeoutVal = null
    return this
  }

  _setVersion(version) {
    (version) ? this.version = version: this.version = '1.4.1'
  }

  _generateReqUrl(reqType, param) {
    (param && reqType) ? this.url = `https://launchlibrary.net/${this.version}/${reqType}${param}`: this.url = ``
  }

  get(reqType, param) {
    switch (reqType) {
      // Agency
      case `getAgencyById`:
      case `getAgencyByAbbr`:
        this._generateReqUrl(`agency/`, param)
        break
      case `getAgenciesByName`:
        this._generateReqUrl(`agency?name=`, param)
        break

        // Agency Type
      case `getAgencyTypeById`:
      case `getAgencyTypeByName`:
        this._generateReqUrl(`agencytype/`, param)
        break

        // Event Type
      case `getEventTypeById`:
      case `getEventTypeByName`:
        this._generateReqUrl(`eventtype/`, param)
        break

        // Launch
      case `getLaunchById`:
      case `getLaunchByName`:
        this._generateReqUrl(`launch/`, param)
        break
      case `getLaunches`:
        this._generateReqUrl(`launch/next/`, param)
        break

      case `getLaunchesAfter`:
        this._generateReqUrl(`launch/`, moment(param).format('YYYY-MM-DD'))
        break
      case `getLaunchesBetween`:
        param = '/' + moment(param.startDate).format('YYYY-MM-DD') + '/' + moment(param.endDate).format('YYYY-MM-DD')
        this._generateReqUrl(`launch/`, param)
        break
        // Launch Event
      case `getLaunchEventById`:
        this._generateReqUrl(`launchevent/`, param)
        break

        // Launch Status
      case `getLaunchStatusById`:
      case `getLaunchStatusByName`:
        this._generateReqUrl(`launchstatus/`, param)
        break

        // location
      case `getLocationById`:
      case `getLocationByName`:
        this._generateReqUrl(`location/`, param)
        break
      case `getLocationByCountryCode`:
        this._generateReqUrl(`location/?countryCode=`, param)
        break

        // Mission
      case `getMissionById`:
      case `getMissionByName`:
        this._generateReqUrl(`mission/`, param)
        break

        // Mission Event
      case `getMissionEventById`:
        this._generateReqUrl(`missionevent/`, param)
        break
      case `getMissionEventByParentId`:
        this._generateReqUrl(`missionevent?parentid=`, param)
        break

        // Mission Type
      case `getMissionTypeById`:
      case `getMissionTypeByName`:
        this._generateReqUrl(`missiontype/`, param)
        break

        // Pad
      case `getPadById`:
      case `getPadTypeByName`:
        this._generateReqUrl(`pad/`, param)
        break
      case `getPadTypeByLocationId`:
        this._generateReqUrl(`pad?locationid=`, param)
        break

        // Rocket
      case `getRocketById`:
      case `getRocketTypeByName`:
        this._generateReqUrl(`rocket/`, param)
        break
      case `getRocketTypeByConfigName`:
        this._generateReqUrl(`rocket?name=`, param)
        break

        // Rocket Event
      case `getRocketEventById`:
        this._generateReqUrl(`rocketevent/`, param)
        break
      case `getRocketEventByLaunchId`:
        this._generateReqUrl(`rocketevent?parentid=`, param)
        break

        // Rocket Family
      case `getRocketFamilyById`:
        this._generateReqUrl(`rocketfamily/`, param)
        break
    }
    return new Promise((resolve, reject) => {
      req({
        url: this.url,
        json: true,
        timeout: this.timeoutVal
      }, (err, res, body) => {
        if (err) {
          reject(new Error(`Launch data cannot be retrieved. ERROR: ${err}`))
          return
        }
        if (res.statusCode !== 200) {
          reject(new Error(`Launch data cannot be retrieved. Response: ${res.statusCode} ${res.statusMessage}`))
          return
        }
        resolve(body)
        return
      })
    })
  }

}

module.exports = LaunchJS