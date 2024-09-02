// you can write js here
console.log('exo-2');


// const myDate = new Date();
//
// const weekDay = "C'est un jour de la semaine.";
//
// const weekEndDay = "C'est un jour de week-end.";

// let actualDay = myDate.getDay();
// //console.log(actualDay);
//
// let actualHour = myDate.getHours();
// console.log(actualHour);

let isTesting = true;


if (isTesting) {
    const day = prompt("Entrez le jour de la semaine en minuscules");
    const time = prompt("Entrez l'heure (format 24h) sans les minutes");

    const weekDay = "C'est la semaine :-(";
    const weekEndDay = "C'est le week-end !!!";
    if ( day === "lundi" && time > 9) {
        console.log(weekDay);
    } else if (day === "mardi" || day === "mercredi" || day === "jeudi") {
        console.log(weekDay);
    } else if (day === "vendredi" && time < 16) {
        console.log(weekDay);
    } else {
        console.log(weekEndDay);
    }

} else {
    let myDate = new Date();
    actualDay = myDate.getDay();
    actualHour = myDate.getHours();
    const weekDay = "C'est un jour de la semaine.";
    const weekEndDay = "C'est un jour de week-end.";
    if ( actualDay > 0 && actualDay < 6) {
        console.log(weekDay);
    } else if ( actualDay === 5 && actualHour > 16) {
        console.log(weekEndDay);
    } else if (actualDay === 1 && actualHour < 9) {
        console.log(weekEndDay);
    } else {
        console.log(weekEndDay);
    }
}

