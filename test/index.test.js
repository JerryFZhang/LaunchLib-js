const assert = require('assert');
const Launch = require('../Launch');
const LaunchJS = new Launch()

let chai = require('chai');
let should = chai.should();

it('should return an agency with getAgencyById', function (done) {
    const agency = LaunchJS.get('getAgencyById', '1');
    //console.log(agency)
    done()
});

it('should return an agency with getAgencyByAbbr', function (done) {
    const agency = LaunchJS.get('getAgencyByAbbr', 'NASA');
    //console.log(agency)
    done()
});

it('should return an agency with getAgenciesByName', function (done) {
    const agency = LaunchJS.get('getAgenciesByName', '1');
    //console.log(agency)
    done()
});

it('should return an agency with getAgenciesByType', function (done) {
    const agency = LaunchJS.get('getAgenciesByType', 'NASA');
    //console.log(agency)
    done()
});

it('should return an agency with getAgenciesByCountryCode', function (done) {
    const agency = LaunchJS.get('getAgenciesByCountryCode', '1');
    //console.log(agency)
    done()
});

it('should return an agency with getAgencyTypeById', function (done) {
    const agency = LaunchJS.get('getAgencyTypeById', '1');
    //console.log(agency)
    done()
});
it('should return an agency with getEventTypeById', function (done) {
    const agency = LaunchJS.get('getEventTypeById', '1');
    //console.log(agency)
    done()
});

it('should return an agency with getEventTypeByName', function (done) {
    const agency = LaunchJS.get('getEventTypeByName', 'NASA');
    //console.log(agency)
    done()
});


it('should return an agency with getLaunchById', function (done) {
    const agency = LaunchJS.get('getLaunchById', '1');
    //console.log(agency)
    done()
});

it('should return an agency with getLaunchByName', function (done) {
    const agency = LaunchJS.get('getLaunchByName', 'NASA');
    //console.log(agency)
    done()
});

it('should return an agency with getLaunches', function (done) {
    const agency = LaunchJS.get('getLaunches', 'NASA');
    //console.log(agency)
    done()
});

it('should return an agency with getLaunchesAfter', function (done) {
    const agency = LaunchJS.get('getLaunchesAfter', 'NASA');
    //console.log(agency)
    done()
});

it('should return an agency with getLaunchesBetween', function (done) {
    const agency = LaunchJS.get('getLaunchesBetween', 'NASA');
    //console.log(agency)
    done()
});

it('should return an agency with getLaunchEventById', function (done) {
    const agency = LaunchJS.get('getLaunchEventById', '1');
    //console.log(agency)
    done()
});

it('should return an agency with getLaunchStatusById', function (done) {
    const agency = LaunchJS.get('getLaunchStatusById', '1');
    //console.log(agency)
    done()
});

it('should return an agency with getLaunchStatusByName', function (done) {
    const agency = LaunchJS.get('getLaunchStatusByName', 'NASA');
    //console.log(agency)
    done()
});

it('should return an agency with getLocationById', function (done) {
    const agency = LaunchJS.get('getLocationById', '1');
    //console.log(agency)
    done()
});

it('should return an agency with getLocationByName', function (done) {
    const agency = LaunchJS.get('getLocationByName', 'NASA');
    //console.log(agency)
    done()
});

it('should return an agency with getLocationByCountryCode', function (done) {
    const agency = LaunchJS.get('getLocationByCountryCode', 'NASA');
    //console.log(agency)
    done()
});

it('should return an agency with getMissionById', function (done) {
    const agency = LaunchJS.get('getMissionById', '1');
    //console.log(agency)
    done()
});

it('should return an agency with getMissionByName', function (done) {
    const agency = LaunchJS.get('getMissionByName', 'NASA');
    //console.log(agency)
    done()
});

it('should return an agency with getMissionEventById', function (done) {
    const agency = LaunchJS.get('getMissionEventById', '1');
    //console.log(agency)
    done()
});

it('should return an agency with getMissionEventByParentId', function (done) {
    const agency = LaunchJS.get('getMissionEventByParentId', '1');
    //console.log(agency)
    done()
});

it('should return an agency with getMissionTypeById', function (done) {
    const agency = LaunchJS.get('getMissionTypeById', '1');
    //console.log(agency)
    done()
});

it('should return an agency with getMissionTypeByName', function (done) {
    const agency = LaunchJS.get('getMissionTypeByName', 'NASA');
    //console.log(agency)
    done()
});

it('should return an agency with getPadById', function (done) {
    const agency = LaunchJS.get('getPadById', '1');
    //console.log(agency)
    done()
});

it('should return an agency with getPadTypeByName', function (done) {
    const agency = LaunchJS.get('getPadTypeByName', 'NASA');
    //console.log(agency)
    done()
});

it('should return an agency with getPadTypeByLocationId', function (done) {
    const agency = LaunchJS.get('getPadTypeByLocationId', '1');
    //console.log(agency)
    done()
});

it('should return an agency with getRocketById', function (done) {
    const agency = LaunchJS.get('getRocketById', '1');
    //console.log(agency)
    done()
});

it('should return an agency with getRocketTypeByName', function (done) {
    const agency = LaunchJS.get('getRocketTypeByName', 'NASA');
    //console.log(agency)
    done()
});

it('should return an agency with getRocketTypeByConfigName', function (done) {
    const agency = LaunchJS.get('getRocketTypeByConfigName', 'NASA');
    //console.log(agency)
    done()
});

it('should return an agency with getRocketEventById', function (done) {
    const agency = LaunchJS.get('getRocketEventById', '1');
    //console.log(agency)
    done()
});

it('should return an agency with getRocketEventByLaunchId', function (done) {
    const agency = LaunchJS.get('getRocketEventByLaunchId', '1');
    //console.log(agency)
    done()
});

it('should return an agency with getRocketFamilyById', function (done) {
    const agency = LaunchJS.get('getRocketFamilyById', '1');
    //console.log(agency)
    done()
});


