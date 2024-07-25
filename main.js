#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
class Student {
    name;
    constructor(name) {
        this.name = name;
    }
}
class Person {
    student = [];
    AddStudent(obj) {
        this.student.push(obj);
    }
}
let persons = new Person();
let programStart = async (persons) => {
    do {
        console.log(`${chalk.yellow(`-----------`)}${chalk.green(`Welcome guest`)}${chalk.yellow(`-----------`)}`);
        let ans = await inquirer.prompt([
            {
                name: "input",
                type: "list",
                message: chalk.yellowBright("Ap kis se bat karna chahte ho?"),
                choices: ["Khud Se", "Student", "Kisi se nhi"]
            }
        ]);
        if (ans.input == "Khud Se") {
            console.log(chalk.redBright("Ap khud se bat kar rahe hain"));
        }
        if (ans.input == "Student") {
            let input = await inquirer.prompt([
                {
                    name: "ans",
                    type: "input",
                    message: chalk.redBright("Ap kis student se bat karna chahte ho"),
                    validate: function (value) {
                        if (value.trim().length === 0) {
                            return "Please enter a name.";
                        }
                        return true;
                    }
                }
            ]);
            let student = persons.student.find(val => val.name == input.ans);
            if (!student) {
                let name = new Student(input.ans);
                persons.AddStudent(name);
                console.log(chalk.yellow(`Hello i am ${name.name} or me thk hun`));
                console.log(persons.student);
            }
            if (student) {
                console.log(chalk.yellow(`Hello i am ${student.name} or me thk hun.......\Or Sunao ghar me baki sab kese hain`));
                console.log(persons.student);
            }
        }
        if (ans.input == "Kisi se nhi") {
            console.log(chalk.redBright("Exiting......"));
            process.exit();
        }
    } while (true);
};
programStart(persons);
