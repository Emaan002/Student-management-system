#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.bold.underline.greenBright("\t\nAdmission open"));
const randomNumber = Math.floor(10000 + Math.random() * 90000);
let answer = await inquirer.prompt([
    {
        type: "input",
        name: "students",
        message: "Enter Student Name:",
        validate: function (value) {
            if (value.trim() !== "") {
                return true;
            }
            return "Please enter a non-empty value";
        },
    },
    {
        name: "courses",
        type: "list",
        choices: ["IT", "Graphics", "Art", "Englishlanguage", "Digitalmarketing"],
    },
]);
const studentBalance = 0;
const courseFees = {
    IT: 5000,
    Graphics: 3000,
    Art: 600,
    Englishlanguage: 500,
    DigitalMarketing: 1000,
};
console.log(chalk.cyan(`\n\tCourse fees: ${courseFees[answer.courses]}/-`));
console.log(chalk.cyan(`\tBalance: ${studentBalance}\n`));
let paymetMethod = await inquirer.prompt([
    {
        type: "list",
        name: "payment",
        message: "Enter Your Paymet Method.",
        choices: ["Bank Transfer", "Jazz cash", "Easy Paisa"],
    },
    {
        type: "input",
        name: "amount",
        message: " Tranfer Money",
        validate: function (value) {
            if (value.trim() !== "") {
                return true;
            }
            return "Please enter a non-empty value";
        },
    },
]);
const courseFee = courseFees[answer.courses];
const paymentAmount = parseFloat(paymetMethod.amount);
if (courseFee === paymentAmount) {
    console.log(chalk.bold.yellowBright("\tCongratulations, you have purchased this course.\n"));
    let viewAndExit = await inquirer.prompt([
        {
            type: "list",
            name: "information",
            message: "Student Information",
            choices: ["View", "Exit"],
        },
    ]);
    if (viewAndExit.information === "View") {
        console.log(chalk.bold.whiteBright(`\tCongratulation, ${answer.students} you have purchased this course.\n`));
        console.log(chalk.bold.blue(" Your Status"));
        console.log(chalk.green(`Student Name: ${chalk.bold.underline(answer.students)}`));
        console.log(chalk.green(`Student ID: ${chalk.bold.underline(randomNumber)}`));
        console.log(chalk.green(`Course: ${chalk.bold.underline(answer.courses)}`));
        console.log(chalk.green(`Course Fees: ${chalk.bold.underline(paymentAmount)}`));
        console.log(chalk.green(`Balance ${chalk.bold.underline(studentBalance + paymentAmount)}`));
    }
    else {
        console.log(chalk.redBright("Existing form!"));
    }
}
else {
    console.log(chalk.redBright("Invalid amount!"));
}
