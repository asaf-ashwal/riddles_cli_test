import readline from "readline-sync";
import PlayerUtils from "../utils/playerUtils.js";
import { printAll } from "../functions/game.functions.js";

export function createPlayer() {
  const name = readline.question("What is your name? ");
  let newPlayer = new PlayerUtils(name);
  return newPlayer;
}

export function askRiddle(ridd) {
  printAll([ridd], "QUESTION");
  let flag = true;
  while (flag) {
    const enswer = readline.question("enswer? ");
    if (enswer == ridd.correctAnswer) {
      console.log("corect !!!");
      return true;
    }
  }
}

export function difficultyList(list) {
  const result = readline.question(
    `do you want only speciDo you want just one difficulty level or what you got and below?
    1.  only speciDo
    2.difficulty level or what you got and below 
    3. Everything is not sorted `
  );
  if (result == "3") {
    return list;
  } else {
    const res = readline.question(
      `
                1. EASY
                2. MEDIUM
                3. HARD
                 `
    );
    if (result == "1") {
      return list.filter((v) => v.difficulty == res);
    } else if (result == "2") {
      return list.filter((v) => v.difficulty <= res);
    } else {
      console.log("not volid parameter default all riddles");
    }
  }
}
