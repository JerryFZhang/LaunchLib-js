const req = require('request')

class LaunchJS {
  constructor() {
    this.timeoutVal = 20000
    // added different types of requests parameters for more functionality
  }

  timeout(milliseconds) {
    (milliseconds)
      ? this.timeoutVal = milliseconds
      : this.timeoutVal = null
    return this
  }

  _generateReqUrl(number) {
    (number)
      ? this.url = `https://launchlibrary.net/1.4/launch/next/` + number
      : this.url = `https://launchlibrary.net/1.4/launch/next/20`
  }

  get(number) {
    return new Promise((resolve, reject) => {
      this._generateReqUrl(number)
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
      })
    })
  }
}
module.exports = LaunchJS
