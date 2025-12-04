import { measureSolveTime } from "../functions/game.functions.js";
import { askRiddle } from "../functions/player.func.js";

export default class PlayerUtils {
  constructor(name) {
    this.name = name;
    this.timesInitialized = [];
  }

  addSolveTime = (seconds) => {
    this.timesInitialized.push(seconds);
  };

  askRidd = (ridd) => {
    const newTime = measureSolveTime(askRiddle, ridd);
    this.addSolveTime(newTime);
  };

  showStats = () => {
    let total = 0;
    for (const number of this.timesInitialized) {
      total += Number(number);
    }
    const avg = total / this.timesInitialized.length;
    return { total, avg };
  };
}
