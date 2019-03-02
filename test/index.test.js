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

it('should return an agency with getAgenciesByName', function (done) {
    const agency = LaunchJS.get('getAgenciesByName', '1');
    console.log(agency)
    done()
});

it('should return an agency with getAgenciesByType', function (done) {
    const agency = LaunchJS.get('getAgenciesByType', 'NASA');
    console.log(agency)
    done()
});

it('should return an agency with getAgenciesByCountryCode', function (done) {
    const agency = LaunchJS.get('getAgenciesByCountryCode', '1');
    console.log(agency)
    done()
});

it('should return an agency with getAgencyTypeById', function (done) {
    const agency = LaunchJS.get('getAgencyTypeById', 'NASA');
    console.log(agency)
    done()
});
it('should return an agency with getEventTypeById', function (done) {
    const agency = LaunchJS.get('getEventTypeById', '1');
    console.log(agency)
    done()
});

it('should return an agency with getEventTypeByName', function (done) {
    const agency = LaunchJS.get('getEventTypeByName', 'NASA');
    console.log(agency)
    done()
});

