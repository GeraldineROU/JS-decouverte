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
            lastName: 'Bobberek',
            age: 10,
        },
        {
            firstName: 'Bibili',
            lastName: 'Bobberek',
            age: 8,
        },
        {
            firstName: 'Babusha',
            lastName: 'Bobberski',
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

team.addPlayer('Bubby', 'Bobberman', 7);
team.addGame('Fried Fishes', 102, 21);
team.addPlayer('BobberBaby', 'Bobberin', 1);
team.addPlayer('Bobby', 'MacBobber', 9);
team.addGame('Beautiful Butterflies', 78, 72);
team.addGame('Chinchillas of Chaos', 51, 2);


console.log(team.players);
console.log(team.games);

let totalOfBobbersTeamPoints = 0;
team.games.forEach(game => {totalOfBobbersTeamPoints = totalOfBobbersTeamPoints + game.opponentPoints;})
console.log(totalOfBobbersTeamPoints);

let averageOfBobbersTeamPoints = 0;
averageOfBobbersTeamPoints = totalOfBobbersTeamPoints / (team.games.length-1);
console.log(averageOfBobbersTeamPoints);
