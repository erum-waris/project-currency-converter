#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.bgCyan.blue.bold("Welcome to ERUM'S currency convertor"));
let currency = {
    USD: 1,
    PKR: 278,
    GBP: 1.26,
    TRY: 32,
    EUR: 0.92,
    NZD: 1.66,
    INR: 83.30, //INDIAN RUPEE
};
let UserAnswer = await inquirer.prompt([{
        name: "from",
        message: "Enter from currency",
        type: "list",
        choices: ["USD", "PKR", "GBP", "TRY", "EUR", "NZD", "INR"],
    },
    {
        name: "to",
        message: "Enter to currency",
        type: "list",
        choices: ["USD", "PKR", "GBP", "TRY", "EUR", "NZD", "INR"],
    },
    {
        name: "amount",
        message: "Enter your amount",
        type: "number",
    }
]);
let fromAmount = currency[UserAnswer.from];
let toAmount = currency[UserAnswer.to];
let amount = UserAnswer.amount;
let baseAmount = amount / fromAmount;
let convertedAmount = baseAmount * toAmount;
console.log(chalk.bgBlue.italic(`Your converted amount is:${convertedAmount}`));
