import readline from "readline-sync";
import r1 from "../riddles/r1.js";
import r2 from "../riddles/r2.js";

export function readall() {
  return [r1, r2];
}
export function printAll(riddels) {
  // const  = readall()
  for (const ridd of riddels) {
    if (ridd.choices) {
      console.log(`
-----------------------------------
 
     Riddle 1: ${ridd.name}
     ${ridd.taskDescription}
     options: ${ridd.choices}

-----------------------------------

            `);
    } else {
      console.log(`
-----------------------------------
 
     Riddle 1: ${ridd.name}
     ${ridd.taskDescription}

-----------------------------------

            `);
    }
  }
}

// console.log(
//   printAll([
//     {
//       id: 4,
//       name: "Animal Sound",
//       taskDescription: "Which of the following makes a 'moo'",
//       sound: "",
//       choices: ["Dog", "Cow", "Cat"],
//       correctAnswer: "1", // the index of the correct answer
//     },
//   ])
// );
