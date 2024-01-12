import Game, {addGameObject} from "/src/js/Game";
import Background from "/src/js/Background";
import {colors} from "/src/js/Tank"
import Player from "/src/js/Player";

export default function TestScene(){
    Game();

    const backgroundObjects = Background;
    backgroundObjects.forEach(element => {
        addGameObject(element)
    });

    const player1 = new Player(colors.Blue);
    addGameObject(player1)
}
