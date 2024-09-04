// Cours 8 de Codecademy
console.log("exo-6");

var joeInfo = {
    name: "Joe's house",
    rooms: 5,
    garage: false,
    bathrooms: 1 + 2,
    cars: ['Clio', 'Van'],
};
// ! Ne faites pas de modification au dessus de cette ligne !

// 1. Afficher le nombre de voitures de Joe

console.log('Nombre de voitures de Joe : ' + joeInfo.cars.length);

// 2. Changer le nombre de salles de bains de Joe : il n'en possède qu'une. Afficher le nouveau nombre de salles de bain.
joeInfo.bathrooms = 1;
console.log('Nombre de salles de bains de Joe : ' + joeInfo.bathrooms);

// 3. Joe vient d'acquérir un garage. Afficher cette nouvelle information.
joeInfo.garage = true;
if (joeInfo.garage) {
    console.log('Joe a un garage.');
}

let team = {
    players: [
        {
            firstName: 'Bibi',
            lastName: 'Bobberski',
            age: 5,
        },
        {
            firstName: 'Biba',
            lastName: 'Ubobberek',
            age: 10,
        },
        {
            firstName: 'Billy',
            lastName: "O'Bobby",
            age: 8,
        },
        {
            firstName: 'Babusha',
            lastName: 'Kanapka',
            age: 12,
        },
        {
            firstName: 'Bobba',
            lastName: 'Bobberov',
            age: 6,
        }
    ],
    games: [
        {
            opponents: 'Snails of Fire',
            teamPoints: 92,
            opponentPoints: 56
        },
        {
            opponents: 'Magic Mice',
            teamPoints: 72,
            opponentPoints: 65
        },
        {
            opponents: 'Furious Geese of Hell',
            teamPoints: 83,
            opponentPoints: 68
        }
    ],
};

team.addPlayer = function (firstName, lastName, age) {
    const newPlayer = {
        firstName: firstName,
        lastName: lastName,
        age: age,
    };
    this.players.push(newPlayer);
};

team.addGame = function (opponents, teamPoints, opponentPoints) {
    const newGame = {
        opponents: opponents,
        teamPoints: teamPoints,
        opponentPoints: opponentPoints,
    };
    this.games.push(newGame);
}

team.addPlayer('Bubby', 'Metka', 7);
team.addGame('Fried Fishes', 102, 21);
team.addPlayer('BobberBaby', 'Bobberin', 1);
team.addPlayer('Bobby', 'MacBobber', 9);
team.addGame('Beautiful Butterflies', 78, 72);
team.addGame('Chinchillas of Chaos', 51, 2);


console.log(team.players);
console.log(team.games);

///////////////////////////étape 10//////////////////////////////////////////////////////

let totalOfBobbersTeamPoints = 0;
let teamPoints = team.games.teamPoints;

///// avec boucle for of (plus adapté à un tableau ou tout élément itérable) ////////////////

// for (const game of team.games.values()) {
//     totalOfBobbersTeamPoints = totalOfBobbersTeamPoints + game.teamPoints;
// }

//// avec boucle for in///////////
//////////Parcourir les propriétés énumérables d'un objet ou les clés d'un tableau.

// for (let index in team.games ) {
//     totalOfBobbersTeamPoints = totalOfBobbersTeamPoints + team.games[index].teamPoints;
// }

////// avec méthode .forEach ///////////

team.games.forEach((game) => totalOfBobbersTeamPoints = totalOfBobbersTeamPoints + game.teamPoints);

console.log("Voici le total de points de la Bobbers Team : " + totalOfBobbersTeamPoints);

///////////étape 11/////////////////////////////////////////////////////////////////////////////////////////

let totalOfOpponentsPoints = 0;

team.games.forEach((game) => totalOfOpponentsPoints = totalOfOpponentsPoints + game.opponentPoints);
// console.log(totalOfOpponentsPoints);

let averageOfOpponentsPoints = totalOfOpponentsPoints / team.games.length;

console.log("Voici la moyenne des points obtenus par les équipes adverses : " + averageOfOpponentsPoints);

/////////////////étape 12//////////////////////////////////////////////////

team.whoIsTheOldestPlayer = function () {
    let oldestAge = 0;
    let olderPlayerFirstName = "";
    let olderPlayerLastName = "";
    team.players.forEach((player) => {
        if (player.age > oldestAge) {
            oldestAge = player.age;
        }
    });
    console.log ("Le joueur le plus vieux a " + oldestAge + " ans.");

    team.players.forEach((player) => {
        if (player.age === oldestAge) {
            olderPlayerFirstName = player.firstName;
            olderPlayerLastName = player.lastName;
        }
    })

    console.log ("C'est le joueur qui s'appelle : " + olderPlayerFirstName + " " + olderPlayerLastName +".")
}

team.whoIsTheOldestPlayer();

///////////// étape 13 ////////////////////////////////////////////////////

let allPlayersLastNames = [];

team.players.forEach((player) => allPlayersLastNames.push(player.lastName));
allPlayersLastNames.sort();
console.log(allPlayersLastNames);
