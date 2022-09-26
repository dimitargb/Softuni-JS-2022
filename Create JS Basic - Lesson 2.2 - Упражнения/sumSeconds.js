function sumSeconds(input) {
    let firstPlayer = Number(input[0]);
    let secondPlayer = Number(input[1]);
    let thirdPlayer = Number(input[2]);

    let totalTime = firstPlayer + secondPlayer + thirdPlayer;
    let minutes = Math.floor(totalTime / 60);
    let second = totalTime % 60;

    if (second < 10) {
        console.log(`${minutes}:0${second}`);
    } else {
        console.log(`${minutes}:${second}`);
    }
}
sumSeconds()