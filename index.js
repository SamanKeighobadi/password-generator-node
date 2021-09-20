const chalk = require("chalk");
const { program } = require("commander");

const {createPassword} = require('./utils/createPassword');

program.version("1.0.0").description("Simple Node.js Password Generator");
program
  .option("-l,--length <number>", "Length of password", "9")
  .option("-s,--save", "Save password to Password.txt")
  .option("-nn,--no-numbers", "No numbers in  password")
  .option("-ns,--no-symbols", "No symbols in  password")
  .option('-lc,--no-lowercase',"No lower case letter in  password")
  .option('-uc,--no-uppercase',"No upper case letter in  password")
  .parse();

const {length,save,numbers,symbols,lowercase,uppercase} = program.opts()



const generatedPassword = createPassword(length,numbers,symbols)