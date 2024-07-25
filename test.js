import inquirer from "inquirer";
class Student {
    name;
    constructor(name) {
        this.name = name;
    }
}
class Person {
    student = [];
    addStudent(obj) {
        this.student.push(obj);
    }
}
let persons = new Person();
let programStart = async (persons) => {
    do {
        console.log("Welcome guest");
        let input = await inquirer.prompt([
            {
                name: "select",
                type: "list",
                message: "Ap Kis se bat karna Chahte ho",
                choices: ["Khud Se", "Student"]
            }
        ]);
        if (input.select == "Khud Se") {
            console.log("Ap is time khud se bat kar rahe hain kesa feel horaha hai\nkhud se bat kar ke");
        }
        if (input.select == "Student") {
            let ans = await inquirer.prompt([
                {
                    name: "student",
                    type: "input",
                    message: "Student ka name likhen"
                }
            ]);
            let student = persons.student.find((val) => val.name == ans.student);
            if (!student) {
                let name = new Student(ans.student);
                persons.addStudent(name);
                console.log(`Hello i am ${name.name} me thek hun ap batao kiya haal hai.`);
                console.log(persons.student);
            }
            if (student) {
                console.log(`Hello i am ${student.name} me thek hun ap batao kiya haal hai\n ghar me sab thk hain biwi bache.`);
                console.log(persons.student);
            }
        }
    } while (true);
};
programStart(persons);
// let input = await inquirer.prompt([
//     {
//         name:"select",
//         type:"list",
//         message:"Ap Kis se bat karna Chahte ho",
//         choices:["Khud Se", "Student"]
//     }
// ])
