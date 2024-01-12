import Canvas from "./Canvas";
import Weapon from "/src/js/Weapon";
import drawRotate from "/src/js/Helpers/DrawRotate";
import TankAnimation from "../Animations/TankAnimation";
import { DELTATIME } from "./Game";

const ctx = Canvas().ctx;

const colors = {
    "Blue": 0,
    "Camo": 1,
    "Desert": 2,
    "Purple": 3,
    "Red": 4,
}
Object.freeze(colors);

class Tank{
    constructor(color){
        this.x = 300;
        this.y = 300;
        this.speed = 300;

        this.proportion = 0.2;
        this.width = Canvas().witdh * this.proportion;
        this.height = this.width * (4/3);

        this.animation = new TankAnimation(this.width, this.height, color)
        // this.height = canvas.height * this.proportion;

        this.angle = 0;

        this.updateWeapon();
        this.weapon = new Weapon(this.weaponData.x, this.weaponData.y, this.weaponData.proportion, this.angle, color);
    }

    update(){
        this.animationState = "move";

        // this.animationState = "idle";

        this.updateWeapon();
        this.weapon.update(this.weaponData.x, this.weaponData.y, this.angle);
    }

    draw(){
        drawRotate(this.x, this.y, this.width, this.height, this.angle, (x,y)=>{
            ctx.drawImage(this.animation.canvas, x, y, this.width, this.height);
            // ctx.strokeRect(x, y, this.width, this.height);
        });
        this.weapon.draw()
    }

    updateWeapon(){
        let x = this.x + (this.width/6)
        let y = this.y - (this.height/5)
        // let r = Math.sqrt(Math.pow(x - this.x,2) + Math.pow(y - this.y,2))
        
        // x = r * Math.cos(this.angle * Math.PI / 180) + x
        // y = r * Math.sin(this.angle * Math.PI / 180) + y

        this.weaponData = {
            x: x,
            y: y,
            angle: this.angle,
            proportion: this.proportion/1.5
        }
    }

    movefodward(){
        let speed = this.speed * (DELTATIME);
        let angle = (this.angle - 90) * Math.PI /180;
        let posx = speed * Math.cos(angle);
        let posy = speed * Math.sin(angle);
        this.x += posx;
        this.y += posy;
    }
    moveBackward(){
        let speed = this.speed * DELTATIME;
        let angle = (this.angle + 180 - 90) * Math.PI /180;
        let posx = speed * Math.cos(angle);
        let posy = speed * Math.sin(angle);
        this.x += posx;
        this.y += posy;
    }
    moveLeft(){
        this.angle -= 5
    }
    moveRight(){
        this.angle += 5
    }
}

export default Tank
export {colors}