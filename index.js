const chalk = require("chalk");
const { program } = require("commander");
const clipboard = require('clipboardy');

const { createPassword } = require("./utils/createPassword");

program.version("1.0.0").description("Simple Node.js Password Generator");
program
  .option("-l,--length <number>", "Length of password", "9")
  .option("-nn,--no-numbers", "No numbers in  password")
  .option("-ns,--no-symbols", "No symbols in  password")
  .parse();

const { length, save, numbers, symbols } = program.opts();

const generatedPassword = createPassword(length, numbers, symbols);

clipboard.writeSync(generatedPassword);

console.log(chalk.greenBright('Password Generated: '),chalk.redBright(generatedPassword));
console.log(chalk.cyanBright("Password copied to clipbaord"))