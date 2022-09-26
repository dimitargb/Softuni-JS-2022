function lunchBreak(input) {
    let serialName = input[0];
    let epizodTime = Number(input[1]);
    let brake = Number(input[2]);

    let timeForLunch = brake * 1 / 8;
    let timeForBrake = brake * 1 / 4;
    let usedTime = timeForLunch + timeForBrake;
    let timeLeft = brake - usedTime;
    let timeForWatch = epizodTime - timeLeft;

    if (epizodTime <= timeLeft) {
        console.log(`You have enough time to watch ${serialName} and left with ${Math.ceil(timeLeft - epizodTime)} minutes free time.`);
    }
    else if (epizodTime > timeLeft) {
        console.log(`You don't have enough time to watch ${serialName}, you need ${Math.ceil(epizodTime - timeLeft)} more minutes.`);
    }

}
lunchBreak()