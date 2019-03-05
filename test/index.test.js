const assert = require('assert');
const Launch = require('../Launch');
const LaunchJS = new Launch()

let chai = require('chai');
let should = chai.should();

it('should return the agency with an ID of 5 using getAgencyById', function (done) {
    const agency = LaunchJS.get('getAgencyById', '1');
    //console.log(agency)
    done()
});

it('should return the agency with an abbreviation of NASA using getAgencyByAbbr', function (done) {
    const agency = LaunchJS.get('getAgencyByAbbr', 'NASA');
    //console.log(agency)
    done()
});

it('should return the agency with a name matching "National" using getAgenciesByName', function (done) {
    const agency = LaunchJS.get('getAgenciesByName', 'National');
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

it('should return the agency type with an ID of 1 using getAgencyTypeById', function (done) {
    const agency = LaunchJS.get('getAgencyTypeById', '1');
    //console.log(agency)
    done()
});

it('should return the agency type with a name of government using getAgencyTypeByName', function (done) {
    const agency = LaunchJS.get('getAgencyTypeByName', 'government');
    //console.log(agency)
    done()
});

it('should return the event type with an ID of 1 using getEventTypeById', function (done) {
    const agency = LaunchJS.get('getEventTypeById', '1');
    //console.log(agency)
    done()
});

it('should return the event type with a name of info using getEventTypeByName', function (done) {
    const agency = LaunchJS.get('getEventTypeByName', 'info');
    //console.log(agency)
    done()
});


it('should return the launch with an ID of 1 using getLaunchById', function (done) {
    const agency = LaunchJS.get('getLaunchById', '1');
    //console.log(agency)
    done()
});

it('should return the launch with a name including Falcon using getLaunchByName', function (done) {
    const agency = LaunchJS.get('getLaunchByName', 'falcon');
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


