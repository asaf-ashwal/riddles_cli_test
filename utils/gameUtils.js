import { createPlayer } from "../functions/player.func.js";
import { printAll, readall } from "../services/service.js";
import { measureSolveTime } from "../functions/game.functions.js";
export default class GameUtils {
  gameFlow = () => {
    const players = [];
    let newPlayer = createPlayer();
    players.push(newPlayer);
    const allRidd = readall();

    printAll(allRidd);
    for (const ridd of allRidd) {
      newPlayer.askRidd(ridd);
    }

    console.log(newPlayer.showStats());
  };
}
