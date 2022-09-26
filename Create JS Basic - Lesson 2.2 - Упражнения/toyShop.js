function toyShop(input) {
    let tripPrise = Number(input[0]);
    let puzzels = Number(input[1]);
    let dolls = Number(input[2]);
    let bears = Number(input[3]);
    let minions = Number(input[4]);
    let trucks = Number(input[5]);

    let puzzelsTotal = puzzels * 2.60;
    let dollsTotal = dolls * 3;
    let bearsTotal = bears * 4.10;
    let minionsTotal = minions * 8.20;
    let trucksTotal = trucks * 2;

    let sumOrder = puzzels + dolls + bears + minions + trucks;
    let sumTotalPrice = puzzelsTotal + dollsTotal + bearsTotal + minionsTotal + trucksTotal;

    if (sumOrder >= 50) {
        sumTotalPrice = sumTotalPrice * 75/100;
    }

    sumTotalPrice = sumTotalPrice * 90/100;

    if (sumTotalPrice >= tripPrise) {
        console.log(`Yes! ${(sumTotalPrice - tripPrise).toFixed(2)} lv left.`);
    } else {
        console.log(`Not enough money! ${(tripPrise - sumTotalPrice).toFixed(2)} lv needed.`);
    }
}
toyShop()