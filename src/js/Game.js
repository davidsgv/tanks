import Canvas from "/src/js/Canvas"
import { gameConfig } from "../Config/Config";

const gameObjects = []
let FPS = 60;
let GAMEFRAME = 0;
let DELTATIME = 0;
let LASTSTAMP = 0;


function animate(time) {
    GAMEFRAME++;
    DELTATIME = (time - LASTSTAMP)/1000;
    FPS =  1/DELTATIME;
    LASTSTAMP = time;

    const canvas = Canvas()
    const ctx = canvas.ctx
    ctx.clearRect(0,0, canvas.witdh, canvas.height)

    gameObjects.forEach(element => {
        element.update();
        element.draw();
    });

    if(gameConfig.showFPS){
        ctx.font = "18px serif";
        ctx.strokeStyle = "black";
        ctx.strokeText(`${FPS.toFixed()} FPS`, 0, 18)
    }

    requestAnimationFrame(animate);
}

const addGameObject = (object)=>{
    gameObjects.push(object)
}

export {addGameObject, GAMEFRAME}

export default ()=>{
    requestAnimationFrame(animate);
}

export {DELTATIME}