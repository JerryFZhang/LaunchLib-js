const assert = require('assert');
const Launch = require('../Launch');
const LaunchJS = new Launch()

let chai = require('chai');
let should = chai.should();

it('should return an agency with getAgencyById', function (done) {
    const agency = LaunchJS.get('getAgencyById', '1');
    console.log(agency)
    done()
});

it('should return an agency with getAgencyByAbbr', function (done) {
    const agency = LaunchJS.get('getAgencyByAbbr', 'NASA');
    console.log(agency)
    done()
});