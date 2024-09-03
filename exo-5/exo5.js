// you can write js here

console.log('exo-5');

let input = 'Turpentine and turtles';

const vowels = ['a', 'e', 'i', 'o', 'u', 'y'];

let resultArray = [];

for (let i = 0; i < input.length; i++) {

    console.log('Lettre numero ' + i + ' est un ' + input[i].toLowerCase());

    ///// étape 5 ////////
    let index = vowels.indexOf(input[i]);
    if (index !== -1) {
        console.log("C'est une voyelle !");
        resultArray.push(input[i]);

    }
    ///// étape 6 //////
    // for (let j = 0; j < vowels.length; j++) {
    //     if (input[i] === vowels[j]) {
    //         console.log("C'est une voyelle !");
    //     }
    // }

}

console.log(resultArray.join(' ').toUpperCase());