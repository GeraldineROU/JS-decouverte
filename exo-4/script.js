// you can write js here

console.log('exo-4');

var secretMessage = ["Learning", "isn't", "about", "what", "you", "get", "easily", "the", "first", "time,", "it's", "about", "what", "you", "can", "figure", "out.", "-2015,", "Chris", "Pine,", "Learn", "JavaScript"];

secretMessage.pop;
// console.log(secretMessage);

secretMessage.push('to');

secretMessage.push("program");

secretMessage.splice(6,1,'right');

secretMessage.shift();

secretMessage.splice(0, 0, 'Programming');

secretMessage.splice(5, 5, 'know');

console.log(secretMessage.join(' '));

