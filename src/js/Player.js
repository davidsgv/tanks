import Tank from "/src/js/Tank"

class Player{
    constructor(tankColor){
        this.tank = new Tank(tankColor);
        this.pressedKeys = {}

        window.addEventListener("keydown", e=>{
            this.pressedKeys[e.key] = true;
        })

        window.addEventListener("keyup", e=>{
            this.pressedKeys[e.key] = false;
        })
    }

    update(){
        if(this.pressedKeys["ArrowUp"]) this.tank.movefodward();
        if(this.pressedKeys["ArrowDown"]) this.tank.moveBackward();
        if(this.pressedKeys["ArrowLeft"]) this.tank.moveLeft();
        if(this.pressedKeys["ArrowRight"]) this.tank.moveRight();

        this.tank.update();
    }

    draw(){
        this.tank.draw()
    }
}

export default Player