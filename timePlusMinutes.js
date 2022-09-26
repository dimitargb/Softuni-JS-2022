function timePlusMinutes(input) {
    let hours = Number(input[0]);
    let minutes = Number(input[1]);
    let timeInMinutes = (hours * 60) + minutes;
    let timePlus = timeInMinutes + 15;
    let totalHours = Math.floor(timePlus /60);
    let totalMinutes = Math.floor(timePlus % 60);
 
    if (totalHours  >= 24) {
     totalHours  = totalHours - 24;
    }
    if (totalMinutes < 10) {
        console.log(`${totalHours}:0${totalMinutes}`);
    } else {
     console.log(`${totalHours}:${totalMinutes}`);
    }
 }
 timePlusMinutes()