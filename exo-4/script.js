// you can write js here

console.log('exo-4');

var secretMessage = ["Learning", "isn't", "about", "what", "you", "get", "easily", "the", "first", "time,", "it's", "about", "what", "you", "can", "figure", "out.", "-2015,", "Chris", "Pine,", "Learn", "JavaScript"];

secretMessage = secretMessage.pop;

secretMessage = secretMessage.push("to");

secretMessage = secretMessage.push("program");

secretMessage.forEach(function (item, index, array) {
    console.log(item, index);
})