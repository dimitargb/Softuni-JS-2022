function worldSwimmingRecord(input) {
    let recordInSeconds = Number(input[0]);
    let distanceInMeters = Number(input[1]);
    let timeInSdecondsForOneMeter = Number(input[2]);

    distanceToSwimInSeconds = distanceInMeters * timeInSdecondsForOneMeter;
    addedTime1 = Math.floor(distanceInMeters / 15);
    addedTime2 = addedTime1 * 12.5;
    totalTime = (distanceToSwimInSeconds + addedTime2).toFixed(2);
    record = (totalTime - recordInSeconds).toFixed(2);

    if (totalTime < recordInSeconds) {
        console.log(`Yes, he succeeded! The new world record is ${totalTime} seconds.`);
    } else {
        console.log(`No, he failed! He was ${record} seconds slower.`);
    }

}
worldSwimmingRecord(["55555.67",
"3017",
"5.03"])