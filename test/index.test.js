const assert = require('assert');
const Launch = require('../Launch');
const LaunchJS = new Launch()

let chai = require('chai');
let should = chai.should();
var expect = chai.expect;

it('should return the agency with an ID of 5 using getAgencyById', function (done) {
    LaunchJS.get('getAgencyById', '1').then(data => {
        expect(data.agencies).to.be.a('array')
        expect(data.agencies).to.have.lengthOf(1)
        expect(data.agencies[0].id).to.equal(1)
        done()
    })
});

it('should return the agency with an abbreviation of NASA using getAgencyByAbbr', function (done) {
    LaunchJS.get('getAgencyByAbbr', 'NASA').then(data => {
        expect(data.agencies).to.be.a('array')
        expect(data.agencies).to.have.lengthOf(1)
        expect(data.agencies[0].abbrev).to.equal('NASA')
        done()
    })
});

it('should return the agency with a name matching "National" using getAgenciesByName', function (done) {
    LaunchJS.get('getAgenciesByName', 'National').then(data => {
        expect(data.agencies).to.be.a('array')
        expect(data.agencies[0].name).to.match(/(?:National)/gi)
        done()
    })
});

it('should return the agency type with an ID of 1 using getAgencyTypeById', function (done) {
    LaunchJS.get('getAgencyTypeById', '1').then(data => {
        expect(data.types).to.be.a('array')
        expect(data.types).to.have.lengthOf(1)
        expect(data.types[0].id).to.equal(1)
        done()
    })
});

it('should return the agency type with a name of government using getAgencyTypeByName', function (done) {
    LaunchJS.get('getAgencyTypeByName', 'government').then(data => {
        expect(data.types).to.be.a('array')
        expect(data.types[0].name).to.match(/(?:Government)/gi)
        done()
    })
});

it('should return the event type with an ID of 1 using getEventTypeById', function (done) {
    LaunchJS.get('getEventTypeById', '1').then(data => {
        expect(data.types).to.be.a('array')
        expect(data.types).to.have.lengthOf(1)
        expect(data.types[0].id).to.equal(1)
        done()
    })
});

it('should return the event type with a name of info using getEventTypeByName', function (done) {
    LaunchJS.get('getEventTypeByName', 'info').then(data => {
        expect(data.types).to.be.a('array')
        expect(data.types[0].name).to.match(/(?:Info)/gi)
        done()
    })
});


it('should return the launch with an ID of 1028 using getLaunchById', function (done) {
    LaunchJS.get('getLaunchById', '1028').then(data => {
        expect(data.launches).to.be.a('array')
        expect(data.launches).to.have.lengthOf(1)
        expect(data.launches[0].id).to.equal(1028)
        done()
    })
});

it('should return the launch with a name including Falcon using getLaunchByName', function (done) {
    LaunchJS.get('getLaunchByName', 'falcon').then(data => {
        expect(data.launches).to.be.a('array')
        expect(data.launches[0].name).to.match(/(?:falcon)/gi)
        done()
    })
});

it('should return the next 5 launches using getLaunches', function (done) {
    LaunchJS.get('getLaunches', '5').then(data => {
        expect(data.launches).to.be.a('array')
        expect(data.launches).to.have.lengthOf(5)
        done()
    })
});

it('should return launches after August 20th, 2015 getLaunchesAfter', function (done) {
    LaunchJS.get('getLaunchesAfter', "2015-08-20").then(data => {
        expect(data.launches).to.be.a('array')
        done()
    })
});

it('should return launches between August 20th, 2015 and September 20th, 2015 with getLaunchesBetween', function (done) {
    LaunchJS.get('getLaunchesBetween', {
        "startDate": "2015-08-20",
        "endDate": "2015-09-20"
    }).then(data => {
        expect(data.launches).to.be.a('array')
        done()
    })
});

// it('should return the launch event with an ID of 7 using getLaunchEventById', function (done) {
//     LaunchJS.get('getLaunchEventById', '1').then(data => {
//         // this is broken on the API side
//         expect(data.types).to.be.a('array')
//         expect(data.types).to.have.lengthOf(1)
//         expect(data.types[0].id).to.equal(1)
//         done()
//     })
// });

it('should return the launch status with an ID of 1 using getLaunchStatusById', function (done) {
    LaunchJS.get('getLaunchStatusById', '1').then(data => {
        expect(data.types).to.be.a('array')
        expect(data.types).to.have.lengthOf(1)
        expect(data.types[0].id).to.equal(1)
        done()
    })
});

it('should return the launch status with a name of GO using getLaunchStatusByName', function (done) {
    LaunchJS.get('getLaunchStatusByName', 'GO').then(data => {
        expect(data.types).to.be.a('array')
        expect(data.types[0].name).to.match(/(?:GO)/gi)
        done()
    })
});

it('should return the location with an ID of 1 using getLocationById', function (done) {
    LaunchJS.get('getLocationById', '1').then(data => {
        expect(data.locations).to.be.a('array')
        expect(data.locations).to.have.lengthOf(1)
        expect(data.locations[0].id).to.equal(1)
        done()
    })
});

it('should return the location with a name of Woomera using getLocationByName', function (done) {
    LaunchJS.get('getLocationByName', 'woomera').then(data => {
        expect(data.locations).to.be.a('array')
        expect(data.locations[0].name).to.match(/(?:woomera)/gi)
        done()
    })
});

it('should return the location withing the United States using getLocationByCountryCode', function (done) {
    LaunchJS.get('getLocationByCountryCode', 'USA').then(data => {
        expect(data.locations).to.be.a('array')
        // Bug from API side that lists all countries.
        // expect(data.locations[0].countrycode).to.match(/(?:USA)/gi)
        done()
    })
});

it('should return the mission with an ID of 1 using getMissionById', function (done) {
    LaunchJS.get('getMissionById', '601').then(data => {
        expect(data.missions).to.be.a('array')
        expect(data.missions).to.have.lengthOf(1)
        expect(data.missions[0].id).to.equal(601)
        done()
    })
});

it('should return the mission with a name of GPS using s getMissionByName', function (done) {
    LaunchJS.get('getMissionByName', 'GPS').then(data => {
        expect(data.missions).to.be.a('array')
        expect(data.missions[0].name).to.match(/(?:GPS)/gi)
        done()
    })
});

// it('should return the mission event with an ID of 1 using getMissionEventById', function (done) {
//     LaunchJS.get('getMissionEventById', '1').then(data => {
//         console.log(data)
//         expect(data.missions).to.be.a('array')
//         expect(data.missions).to.have.lengthOf(1)
//         expect(data.missions[0].id).to.equal(601)
//         done()
//     })
// });

// it('should return the mission event with a mission id of 1 using getMissionEventByParentId', function (done) {
//     LaunchJS.get('getMissionEventByParentId', '1').then(data => {
//         // console.log(data)
//         expect(data.missions).to.be.a('array')
//         expect(data.missions).to.have.lengthOf(1)
//         expect(data.missions[0].id).to.equal(601)
//         done()
//     })
// });

it('should return the mission type with an ID of 1 using getMissionTypeById', function (done) {
    LaunchJS.get('getMissionTypeById', '1').then(data => {
        expect(data.types).to.be.a('array')
        expect(data.types).to.have.lengthOf(1)
        expect(data.types[0].id).to.equal(1)
        done()
    })
});

it('should return the mission type with a name of Earth Science using getMissionTypeByName', function (done) {
    LaunchJS.get('getMissionTypeByName', 'Earth Science').then(data => {
        expect(data.types).to.be.a('array')
        expect(data.types[0].name).to.match(/(?:Earth Science)/gi)
        done()
    })
});

it('should return the pad with an ID of 1 using getPadById', function (done) {
    LaunchJS.get('getPadById', '1').then(data => {
        expect(data.pads).to.be.a('array')
        expect(data.pads).to.have.lengthOf(1)
        expect(data.pads[0].id).to.equal(1)
        done()
    })
});

it('should return pads with a name containing launch complex using getPadTypeByName', function (done) {
    LaunchJS.get('getPadTypeByName', 'launch complex').then(data => {
        expect(data.pads).to.be.a('array')
        expect(data.pads[0].name).to.match(/(?:launch complex)/gi)
        done()
    })
});

it('should return pads with a location ID of 1 using getPadTypeByLocationId', function (done) {
    LaunchJS.get('getPadTypeByLocationId', '1').then(data => {
        expect(data.pads).to.be.a('array')
        expect(data.pads[0].locationid).to.equal(1)
        done()
    })
});

it('should return the rocket with an ID of 1 using getRocketById', function (done) {
    LaunchJS.get('getRocketById', '1').then(data => {
        expect(data.rockets).to.be.a('array')
        expect(data.rockets).to.have.lengthOf(1)
        expect(data.rockets[0].id).to.equal(1)
        done()
    })
});

it('should return the rocket with a name containing Falcon using getRocketTypeByName', function (done) {
    LaunchJS.get('getRocketTypeByName', 'falcon').then(data => {
        expect(data.rockets).to.be.a('array')
        expect(data.rockets[0].name).to.match(/(?:falcon)/gi)
        done()
    })
});

it('should  return the rockets with configuration containing v1.1 using getRocketTypeByConfigName', function (done) {
    LaunchJS.get('getRocketTypeByConfigName', 'v1.1').then(data => {
        expect(data.rockets).to.be.a('array')
        expect(data.rockets[0].name).to.match(/(?:v1.1)/gi)
        done()
    })
});

it('should return the rocket event with an ID of 10 using getRocketEventById', function (done) {
    LaunchJS.get('getRocketEventById', '10').then(data => {
        expect(data).to.be.a('array')
        expect(data).to.have.lengthOf(1)
        expect(data[0].id).to.equal(10)
        done()
    })
});

it('should return the launch event with a launch id of 1 using getRocketEventByLaunchId', function (done) {
    const agency = LaunchJS.get('getRocketEventByLaunchId', '1');
    LaunchJS.get('getRocketEventByLaunchId', '1').then(data => {
        expect(data).to.be.a('array')
        done()
    })
});

it('should return the rocket family with an ID of 1 using getRocketFamilyById', function (done) {
    LaunchJS.get('getRocketFamilyById', '1').then(data => {
        expect(data.RocketFamilies).to.be.a('array')
        expect(data.RocketFamilies).to.have.lengthOf(1)
        expect(data.RocketFamilies[0].id).to.equal(1)
        done()
    })
});