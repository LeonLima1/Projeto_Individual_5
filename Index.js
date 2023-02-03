import chalk, { Chalk } from 'chalk';
import readline from 'readline';

//Declarando o readline
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

//Array onde serão armazenadas as propriedades de css
const propriedadesCss = [];

//codigo para pedir no console para você escreve as propriedades!
console.log(chalk.green("Insira as propriedades CSS (SAIR para finalizar):"));
rl.on("line", (input) => {

  //codigo para se você escrever SAIR, finaliza e traz todas as propriedades armazenados no array
  //e escreve propriedades ordenadas com as propriedades do array
  
  if (input === "SAIR") {
    console.log(chalk.green("Propriedades ordenadas:"));
    propriedadesCss.sort().forEach((elemento) => console.log(chalk.red(elemento)));
    rl.close();

  //O codigo so acaba se escrever SAIR no console em letra maiuscula  
  
  } else {
    propriedadesCss.push(input);
  }
});