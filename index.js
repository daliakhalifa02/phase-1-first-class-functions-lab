const drivers = ["Jake", "Amy", "Rosa", "Charles", "Terry"];

const returnFirstTwoDrivers = function(drivers){
    return drivers.slice(0, 2)
}
const firstTwoDrivers = returnFirstTwoDrivers(drivers);
console.log(firstTwoDrivers)

const returnLastTwoDrivers = function(drivers){
    return drivers.slice(-2)
}
const lastTwoDrivers = returnLastTwoDrivers(drivers);
console.log(lastTwoDrivers)

const selectingDrivers = [
    returnFirstTwoDrivers,
    returnLastTwoDrivers
]

function createFareMultiplier(integer){
    return function(fare) {
      return fare * integer;
    }
}

const fare = 10;
const fareMultiplier = createFareMultiplier(4);
const multipliedFare = fareMultiplier(fare);
console.log(multipliedFare)

const fareDoubler = createFareMultiplier(2);
const doubledFare = fareDoubler(fare);
console.log(doubledFare)

const fareTripler = createFareMultiplier(3);
const tripledFare = fareTripler(fare);
console.log(tripledFare)

function selectDifferentDrivers(drivers, selectFunction){
    if(selectFunction === returnFirstTwoDrivers){
      return returnFirstTwoDrivers(drivers)
    }
    else if(selectFunction === returnLastTwoDrivers){
      return returnLastTwoDrivers(drivers)
    }
}
