// Code your solution in this file!
function distanceFromHqInBlocks(blocks) {
    if (blocks > 42) {
        return blocks - 42
    } return 42 - blocks
}

function distanceFromHqInFeet(blocks) {
    return distanceFromHqInBlocks(blocks) * 264
}

function distanceTravelledInFeet(start, destination) {
    if (destination > start) {
        return (destination- start) * 264
    } return (start - destination) * 264
}

   // total feet travelled is 528, minus the first 400 feet, comes to 128 -> 2.56
function calculatesFarePrice(start, destination) {
    let distance = distanceTravelledInFeet(start, destination)
    if (distance < 400) {
        return 0
    } else if (distance > 400 && distance < 2000) {
        return (distance - 400) * .02
    } else if (distance > 2000 && distance < 2500) {
        return 25
    } return "cannot travel that far"
}