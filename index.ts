import inquirer from "inquirer";
import chalk from "chalk";
let ans = Math.floor(Math.random()*10)

const answers = await inquirer.prompt([
 {
    name:`UserGuess`,
    type:`number`,
    message:`Guess the number`
 },

    
])
if (answers.UserGuess===ans) {
    console.log(chalk.bgBlueBright`Hurrah! correct guess`)
}else{
    console.log(chalk.red`Better luck next time`)
}
console.log(`Correct Answer:${ans}`);