const assert = require('assert');
const Launch = require('../Launch');
const LaunchLib = new Launch()

let chai = require('chai');
let should = chai.should();
var expect = chai.expect;


// Agency
it('should return the agency with an ID of 1 using getAgencyById', async () => {
    const data = await LaunchLib.get('getAgencyById', '1')
    expect(data.agencies).to.be.a('array')
    expect(data.agencies).to.have.lengthOf(1)
    expect(data.agencies[0].id).to.equal(1)

});

it('should return the agency with an abbreviation of NASA using getAgencyByAbbr', async () => {
    const data = await LaunchLib.get('getAgencyByAbbr', 'NASA')
    expect(data.agencies).to.be.a('array')
    expect(data.agencies).to.have.lengthOf(1)
    expect(data.agencies[0].abbrev).to.equal('NASA')
});

it('should return the agency with a name matching "National" using getAgenciesByName', async () => {
    const data = await LaunchLib.get('getAgenciesByName', 'National')
    expect(data.agencies).to.be.a('array')
    expect(data.agencies[0].name).to.match(/(?:National)/gi)
});

// Agency Type
it('should return the agency type with an ID of 1 using getAgencyTypeById', async () => {
    const data = await LaunchLib.get('getAgencyTypeById', '1')
    expect(data.types).to.be.a('array')
    expect(data.types).to.have.lengthOf(1)
    expect(data.types[0].id).to.equal(1)
});

it('should return the agency type with a name of government using getAgencyTypeByName', async () => {
    const data = await LaunchLib.get('getAgencyTypeByName', 'government')
    expect(data.types).to.be.a('array')
    expect(data.types[0].name).to.match(/(?:Government)/gi)
});

// Event Type
it('should return the event type with an ID of 1 using getEventTypeById', async () => {
    const data = await LaunchLib.get('getEventTypeById', '1')
    expect(data.types).to.be.a('array')
    expect(data.types).to.have.lengthOf(1)
    expect(data.types[0].id).to.equal(1)
});

it('should return the event type with a name of info using getEventTypeByName', async () => {
    const data = await LaunchLib.get('getEventTypeByName', 'info')
    expect(data.types).to.be.a('array')
    expect(data.types[0].name).to.match(/(?:Info)/gi)
});


// Launch
it('should return the launch with an ID of 1028 using getLaunchById', async () => {
    const data = await LaunchLib.get('getLaunchById', '1028')
    expect(data.launches).to.be.a('array')
    expect(data.launches).to.have.lengthOf(1)
    expect(data.launches[0].id).to.equal(1028)
});

it('should return the launch with a name including Falcon using getLaunchByName', async () => {
    const data = await LaunchLib.get('getLaunchByName', 'falcon')
    expect(data.launches).to.be.a('array')
    expect(data.launches[0].name).to.match(/(?:falcon)/gi)
});

it('should return the next 5 launches using getLaunches', async () => {
    const data = await LaunchLib.get('getLaunches', '5')
    expect(data.launches).to.be.a('array')
    expect(data.launches).to.have.lengthOf(5)
});

it('should return launches after August 20th, 2015 using getLaunchesAfter', async () => {
    const data = await LaunchLib.get('getLaunchesAfter', '2015-08-20')
    expect(data.launches).to.be.a('array')
});

it('should return launches between August 20th, 2015 and September 20th, 2015 using getLaunchesBetween', async () => {
    const data = await LaunchLib.get('getLaunchesBetween', {
        "startDate": "2015-08-20",
        "endDate": "2015-09-20"
    })
    expect(data.launches).to.be.a('array')
});

// Launch Event
// it('should return the launch event with an ID of 7 using getLaunchEventById', async () =>{
//     const data = await LaunchLib.get('getLaunchEventById', '1')
//         // this is broken on the API side
//         expect(data.types).to.be.a('array')
//         expect(data.types).to.have.lengthOf(1)
//         expect(data.types[0].id).to.equal(1)  
// });

// Launch Status
it('should return the launch status with an ID of 1 using getLaunchStatusById', async () => {
    const data = await LaunchLib.get('getLaunchStatusById', '1')
    expect(data.types).to.be.a('array')
    expect(data.types).to.have.lengthOf(1)
    expect(data.types[0].id).to.equal(1)
});

it('should return the launch status with a name of GO using getLaunchStatusByName', async () => {
    const data = await LaunchLib.get('getLaunchStatusByName', 'GO')
    expect(data.types).to.be.a('array')
    expect(data.types[0].name).to.match(/(?:GO)/gi)
});

// Location
it('should return the location with an ID of 1 using getLocationById', async () => {
    const data = await LaunchLib.get('getLocationById', '1')
    expect(data.locations).to.be.a('array')
    expect(data.locations).to.have.lengthOf(1)
    expect(data.locations[0].id).to.equal(1)
});

it('should return the location with a name of Woomera using getLocationByName', async () => {
    const data = await LaunchLib.get('getLocationByName', 'woomera')
    expect(data.locations).to.be.a('array')
    expect(data.locations[0].name).to.match(/(?:woomera)/gi)
});

it('should return the location withing the United States using getLocationByCountryCode', async () => {
    const data = await LaunchLib.get('getLocationByCountryCode', 'USA')
    expect(data.locations).to.be.a('array')
    // Bug from API side that lists all countries.
    // expect(data.locations[0].countrycode).to.match(/(?:USA)/gi)
});

// Mission  
it('should return the mission with an ID of 601 using getMissionById', async () => {
    const data = await LaunchLib.get('getMissionById', '601')
    expect(data.missions).to.be.a('array')
    expect(data.missions).to.have.lengthOf(1)
    expect(data.missions[0].id).to.equal(601)
});

it('should return the mission with a name of GPS using s getMissionByName', async () => {
    const data = await LaunchLib.get('getMissionByName', 'GPS')
    expect(data.missions).to.be.a('array')
    expect(data.missions[0].name).to.match(/(?:GPS)/gi)
});

// Mission Event
// it('should return the mission event with an ID of 1 using getMissionEventById', async () =>{
//     const data = await LaunchLib.get('getMissionEventById', '1')
//         console.log(data)
//         expect(data.missions).to.be.a('array')
//         expect(data.missions).to.have.lengthOf(1)
//         expect(data.missions[0].id).to.equal(601)  
// });

// it('should return the mission event with a mission id of 1 using getMissionEventByParentId', async () =>{
//     const data = await LaunchLib.get('getMissionEventByParentId', '1')
//         // console.log(data)
//         expect(data.missions).to.be.a('array')
//         expect(data.missions).to.have.lengthOf(1)
//         expect(data.missions[0].id).to.equal(601)
// });

// Mission Type
it('should return the mission type with an ID of 1 using getMissionTypeById', async () => {
    const data = await LaunchLib.get('getMissionTypeById', '1')
    expect(data.types).to.be.a('array')
    expect(data.types).to.have.lengthOf(1)
    expect(data.types[0].id).to.equal(1)
});

it('should return the mission type with a name of Earth Science using getMissionTypeByName', async () => {
    const data = await LaunchLib.get('getMissionTypeByName', 'Earth Science')
    expect(data.types).to.be.a('array')
    expect(data.types[0].name).to.match(/(?:Earth Science)/gi)
});

// Pad
it('should return the pad with an ID of 1 using getPadById', async () => {
    const data = await LaunchLib.get('getPadById', '1')
    expect(data.pads).to.be.a('array')
    expect(data.pads).to.have.lengthOf(1)
    expect(data.pads[0].id).to.equal(1)
});

it('should return pads with a name containing launch complex using getPadTypeByName', async () => {
    const data = await LaunchLib.get('getPadTypeByName', 'launch complex')
    expect(data.pads).to.be.a('array')
    expect(data.pads[0].name).to.match(/(?:launch complex)/gi)
});

it('should return pads with a location ID of 1 using getPadTypeByLocationId', async () => {
    const data = await LaunchLib.get('getPadTypeByLocationId', '1')
    expect(data.pads).to.be.a('array')
    expect(data.pads[0].locationid).to.equal(1)
});

// Rocket Event
it('should return the rocket with an ID of 1 using getRocketById', async () => {
    const data = await LaunchLib.get('getRocketById', '1')
    expect(data.rockets).to.be.a('array')
    expect(data.rockets).to.have.lengthOf(1)
    expect(data.rockets[0].id).to.equal(1)
});

it('should return the rocket with a name containing Falcon using getRocketTypeByName', async () => {
    const data = await LaunchLib.get('getRocketTypeByName', 'falcon')
    expect(data.rockets).to.be.a('array')
    expect(data.rockets[0].name).to.match(/(?:falcon)/gi)
});

it('should return the rockets with configuration containing v1.1 using getRocketTypeByConfigName', async () => {
    const data = await LaunchLib.get('getRocketTypeByConfigName', 'v1.1')
    expect(data.rockets).to.be.a('array')
    expect(data.rockets[0].name).to.match(/(?:v1.1)/gi)
});

it('should return the rocket event with an ID of 10 using getRocketEventById', async () => {
    const data = await LaunchLib.get('getRocketEventById', '10')
    expect(data).to.be.a('array')
    expect(data).to.have.lengthOf(1)
    expect(data[0].id).to.equal(10)
});

// Rocket Family
it('should return the launch event with a launch id of 1 using getRocketEventByLaunchId', async () => {
    const data = await LaunchLib.get('getRocketEventByLaunchId', '1')
    expect(data).to.be.a('array')
});

it('should return the rocket family with an ID of 1 using getRocketFamilyById', async () => {
    const data = await LaunchLib.get('getRocketFamilyById', '1')
    expect(data.RocketFamilies).to.be.a('array')
    expect(data.RocketFamilies).to.have.lengthOf(1)
    expect(data.RocketFamilies[0].id).to.equal(1)
});