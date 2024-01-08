import Canvas from "./Canvas";

const fps = 60;
const gameObjects = []
let gameFrame = 0;
let staggerFrames = 5

function animate() {
    const canvas = Canvas()
    const ctx = canvas.ctx
    ctx.clearRect(0,0, canvas.witdh, canvas.height)

    gameObjects.forEach(element => {
        element.update();
        element.draw();
    });

    gameFrame++
    if(gameFrame % 60 == 0){
        gameFrame=0
    }

    setTimeout(() => {
        requestAnimationFrame(animate);
    }, 1000 / fps);
}

const addGameObject = (object)=>{
    gameObjects.push(object)
}

export {addGameObject, gameFrame, staggerFrames}

export default ()=>{
    animate();
}