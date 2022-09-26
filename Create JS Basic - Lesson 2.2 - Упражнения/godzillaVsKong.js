function godzilaVsKong(input) {
    let moenyForFilm = Number(input[0]);
    let numberOfStatist = Number(input[1]);
    let priceForCloths = Number(input[2]);
    sumDecor = moenyForFilm * 10 / 100;
    sumCloths = priceForCloths * numberOfStatist;
    sumExpences = sumDecor + sumCloths;
    sumMoneyLeft = (moenyForFilm - sumExpences).toFixed(2);

    if (numberOfStatist >= 150) {
        let discount = sumCloths * 10 / 100;
        sumCloths = ((priceForCloths * numberOfStatist) - discount);
        sumExpences = sumDecor + sumCloths;
        sumMoneyLeft = (moenyForFilm - sumExpences).toFixed(2);
    }
    if (sumExpences > moenyForFilm) {
        console.log(`Not enough money!`);
        console.log(`Wingard needs ${Math.abs(sumMoneyLeft).toFixed(2)} leva more.`);
    }
    else if (sumExpences <= moenyForFilm) {
        console.log(`Action!`);
        console.log(`Wingard starts filming with ${Math.abs(sumMoneyLeft).toFixed(2)} leva left.`);
    }

}
godzilaVsKong()