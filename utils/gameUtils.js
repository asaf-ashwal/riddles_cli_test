import { createPlayer, difficultyList } from "../functions/player.func.js";
import { readall } from "../services/service.js";
import { printAll } from "../functions/game.functions.js";

export default class GameUtils {
  gameFlow = () => {
    let newPlayer = createPlayer();
    const allRidd = readall();
    printAll(allRidd, "All QUESTIONS");
    const gameList = difficultyList(allRidd);
    
    for (const ridd of gameList) {
      newPlayer.askRidd(ridd);
    }

    console.log(newPlayer.showStats());
  };
}
