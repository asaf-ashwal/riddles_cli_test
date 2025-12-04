import readline from "readline-sync";
import PlayerUtils from "../utils/playerUtils.js";
import { printAll } from "../services/service.js";

export function createPlayer() {
  const name = readline.question("What is your name? ");
  let newPlayer = new PlayerUtils(name);
  return newPlayer;
}

export function askRiddle(ridd) {
  printAll([ridd]);
  let flag = true;
  while (flag) {

    const enswer = readline.question("enswer? ");
    if (enswer == ridd.correctAnswer) {
      console.log("corect !!!");
      return true;
      
    }
  }
}



