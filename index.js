// Code your solution in this file!
function distanceFromHqInBlocks(someValue) {
    return Math.abs(someValue - 42);
}

function distanceFromHqInFeet(someValue) {
    const distanceInBlocks = distanceFromHqInBlocks(someValue);
    return (distanceInBlocks * 264)
    
}

function distanceTravelledInFeet(start, destination) {
    return Math.abs(destination - start) * 264
}

function calculatesFarePrice(start, destination) {
    const distanceInFeet = distanceTravelledInFeet(start, destination);
    console.log(distanceInFeet);
    if (distanceInFeet <= 400) {
        return 0
    } else if (distanceInFeet > 400 && distanceInFeet < 2000) {
        return 0.02 * (distanceInFeet - 400)
    } else if (distanceInFeet > 2000 && distanceInFeet < 2500) {
        return 25
    } else {
        return 'cannot travel that far'
    }
}
console.log(calculatesFarePrice(50, 58));