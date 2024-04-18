#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.red.bold("\n \t MY WORD COUNTER APPLICATION \n"));
const answer = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: "Enter your sentence to count the words:  "
    }
]);
const words = answer.sentence.trim().split(" ");
console.log(words);
console.log(chalk.green.bold(`Your sentence word count is: ${words.length}`));
