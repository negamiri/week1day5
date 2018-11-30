var chalk = require("chalk");

var message = "Hello " + chalk.yellow("world!");
console.log(message);

var background = "Half of my message has a " + chalk.bgMagenta("magenta background");
console.log(background);