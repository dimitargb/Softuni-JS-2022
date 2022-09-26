function bonusScore(input) {
    let numberOfPoints = Number(input[0]);
    let bonus = 0.0;
    let extraBonus = 0.0;

    if (numberOfPoints <= 100) {
        bonus = 5;
    }
    else if (numberOfPoints > 1000) {
        bonus = numberOfPoints * 10 / 100;
    } else {
        bonus = numberOfPoints * 20 / 100;
    }
    if (numberOfPoints % 2 === 0) {
        extraBonus = bonus + 1;
    }
    else if (numberOfPoints % 10 === 5) {
        extraBonus = bonus + 2;
    } else {
        extraBonus = bonus + 0;
    }
    console.log(extraBonus);
    console.log(numberOfPoints +extraBonus );
}
bonusScore(['175'])