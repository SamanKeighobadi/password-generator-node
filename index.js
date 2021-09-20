const chalk = require("chalk");
const { program } = require("commander");

program.version("1.0.0").description("Simple Node.js Password Generator");
program
  .option("-l,--length <number>", "Length of password", "9")
  .option("-s,--save", "Save password to Password.txt")
  .option("-nn,--no-numbers", "No numbers in  password")
  .option("-ns,--no-sybmols", "No symbols in  password")
  .option('-lc,--lower-case',"No lower case letter in  password")
  .option('-uc,--upper-case',"No upper case letter in  password")
  .parse();

console.log(program.opts());
