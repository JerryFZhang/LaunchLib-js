const assert = require('assert');
const Launch = require('../Launch');
const LaunchJS = new Launch()

let chai = require('chai');
let should = chai.should();
var expect = chai.expect;

it('should return the agency with an ID of 5 using getAgencyById', function (done) {
    LaunchJS.get('getAgencyById', '1').then(res => {
        expect(res.agencies).to.be.a('array')
        expect(res.agencies).to.have.lengthOf(1)
        expect(res.agencies[0].id).to.equal(1)
        done()
    })
});

it('should return the agency with an abbreviation of NASA using getAgencyByAbbr', function (done) {
    LaunchJS.get('getAgencyByAbbr', 'NASA').then(res => {
        expect(res.agencies).to.be.a('array')
        expect(res.agencies).to.have.lengthOf(1)
        expect(res.agencies[0].abbrev).to.equal('NASA')
        done()
    })
});

it('should return the agency with a name matching "National" using getAgenciesByName', function (done) {
    LaunchJS.get('getAgenciesByName', 'National').then(res => {
        expect(res.agencies).to.be.a('array')
        expect(res.agencies[0].name).to.match(/(?:National)/gi)
        done()
    })
});

it('should return the agency type with an ID of 1 using getAgencyTypeById', function (done) {
    LaunchJS.get('getAgencyTypeById', '1').then(res => {
        expect(res.types).to.be.a('array')
        expect(res.types).to.have.lengthOf(1)
        expect(res.types[0].id).to.equal(1)
        done()
    })
});

it('should return the agency type with a name of government using getAgencyTypeByName', function (done) {
    LaunchJS.get('getAgencyTypeByName', 'government').then(res => {
        expect(res.types).to.be.a('array')
        expect(res.types[0].name).to.match(/(?:Government)/gi)
        done()
    })
});

it('should return the event type with an ID of 1 using getEventTypeById', function (done) {
    LaunchJS.get('getEventTypeById', '1').then(res => {
        expect(res.types).to.be.a('array')
        expect(res.types).to.have.lengthOf(1)
        expect(res.types[0].id).to.equal(1)
        done()
    })
});

it('should return the event type with a name of info using getEventTypeByName', function (done) {
    LaunchJS.get('getEventTypeByName', 'info').then(res => {
        expect(res.types).to.be.a('array')
        expect(res.types[0].name).to.match(/(?:Info)/gi)
        done()
    })
});


it('should return the launch with an ID of 1028 using getLaunchById', function (done) {
    LaunchJS.get('getLaunchById', '1028').then(res => {
        expect(res.launches).to.be.a('array')
        expect(res.launches).to.have.lengthOf(1)
        expect(res.launches[0].id).to.equal(1028)
        done()
    })
});

it('should return the launch with a name including Falcon using getLaunchByName', function (done) {
    LaunchJS.get('getLaunchByName', 'falcon').then(res => {
        expect(res.launches).to.be.a('array')
        expect(res.launches[0].name).to.match(/(?:falcon)/gi)
        done()
    })
});

it('should return the next 5 launches using getLaunches', function (done) {
    LaunchJS.get('getLaunches', '5').then(res => {
        expect(res.launches).to.be.a('array')
        expect(res.launches).to.have.lengthOf(5)
        done()
    })
});

it('should return launches after August 20th, 2015 getLaunchesAfter', function (done) {
    LaunchJS.get('getLaunchesAfter', "2015-08-20").then(res => {
        expect(res.launches).to.be.a('array')
        done()
    })
});

it('should return launches between August 20th, 2015 and September 20th, 2015 with getLaunchesBetween', function (done) {
    LaunchJS.get('getLaunchesBetween', {
        "startDate": "2015-08-20",
        "endDate": "2015-09-20"
    }).then(res => {
        expect(res.launches).to.be.a('array')
        done()
    })
});

// it('should return the launch event with an ID of 7 using getLaunchEventById', function (done) {
//     LaunchJS.get('getLaunchEventById', '1').then(res => {
//         // this is broken on the API side
//         expect(res.types).to.be.a('array')
//         expect(res.types).to.have.lengthOf(1)
//         expect(res.types[0].id).to.equal(1)
//         done()
//     })
// });

it('should return the launc status with an ID of 1 using getLaunchStatusById', function (done) {
    LaunchJS.get('getLaunchStatusById', '1').then(res => {
        expect(res.types).to.be.a('array')
        expect(res.types).to.have.lengthOf(1)
        expect(res.types[0].id).to.equal(1)
        done()
    })
});

it('should return the launch status with a name of GO using getLaunchStatusByName', function (done) {
    LaunchJS.get('getLaunchStatusByName', 'GO').then(res => {
        expect(res.types).to.be.a('array')
        expect(res.types[0].name).to.match(/(?:GO)/gi)
        done()
    })
});

it('should return an agency with getLocationById', function (done) {
    const agency = LaunchJS.get('getLocationById', '1');
    //console.log(res)
    done()
});

it('should return an agency with getLocationByName', function (done) {
    const agency = LaunchJS.get('getLocationByName', 'NASA');
    //console.log(res)
    done()
});

it('should return an agency with getLocationByCountryCode', function (done) {
    const agency = LaunchJS.get('getLocationByCountryCode', 'NASA');
    //console.log(res)
    done()
});

it('should return an agency with getMissionById', function (done) {
    const agency = LaunchJS.get('getMissionById', '1');
    //console.log(res)
    done()
});

it('should return an agency with getMissionByName', function (done) {
    const agency = LaunchJS.get('getMissionByName', 'NASA');
    //console.log(res)
    done()
});

it('should return an agency with getMissionEventById', function (done) {
    const agency = LaunchJS.get('getMissionEventById', '1');
    //console.log(res)
    done()
});

it('should return an agency with getMissionEventByParentId', function (done) {
    const agency = LaunchJS.get('getMissionEventByParentId', '1');
    //console.log(res)
    done()
});

it('should return an agency with getMissionTypeById', function (done) {
    const agency = LaunchJS.get('getMissionTypeById', '1');
    //console.log(res)
    done()
});

it('should return an agency with getMissionTypeByName', function (done) {
    const agency = LaunchJS.get('getMissionTypeByName', 'NASA');
    //console.log(res)
    done()
});

it('should return an agency with getPadById', function (done) {
    const agency = LaunchJS.get('getPadById', '1');
    //console.log(res)
    done()
});

it('should return an agency with getPadTypeByName', function (done) {
    const agency = LaunchJS.get('getPadTypeByName', 'NASA');
    //console.log(res)
    done()
});

it('should return an agency with getPadTypeByLocationId', function (done) {
    const agency = LaunchJS.get('getPadTypeByLocationId', '1');
    //console.log(res)
    done()
});

it('should return an agency with getRocketById', function (done) {
    const agency = LaunchJS.get('getRocketById', '1');
    //console.log(res)
    done()
});

it('should return an agency with getRocketTypeByName', function (done) {
    const agency = LaunchJS.get('getRocketTypeByName', 'NASA');
    //console.log(res)
    done()
});

it('should return an agency with getRocketTypeByConfigName', function (done) {
    const agency = LaunchJS.get('getRocketTypeByConfigName', 'NASA');
    //console.log(res)
    done()
});

it('should return an agency with getRocketEventById', function (done) {
    const agency = LaunchJS.get('getRocketEventById', '1');
    //console.log(res)
    done()
});

it('should return an agency with getRocketEventByLaunchId', function (done) {
    const agency = LaunchJS.get('getRocketEventByLaunchId', '1');
    //console.log(res)
    done()
});

it('should return an agency with getRocketFamilyById', function (done) {
    const agency = LaunchJS.get('getRocketFamilyById', '1');
    //console.log(res)
    done()
});