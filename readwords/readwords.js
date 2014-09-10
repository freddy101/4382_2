var censor = require("censorfy_cidm4382_fall2014_babb");
console.log(censor.getCensoredWords());
console.log(censor.censor("Some very sad, bad, and mad words here"));
censor.addCensoredWord("gloomy");
console.log(censor.getCensoredWords());
console.log(censor.censor(("It is a very gloomy day outside")));
console.log(censor.getCensoredWords());
