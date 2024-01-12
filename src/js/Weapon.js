import Canvas from "/src/js/Canvas";
import drawRotate from "/src/js/Helpers/DrawRotate";
import WeaponAnimation from "src/Animations/WeaponAnimation";

const ctx = Canvas().ctx

export default class Weapon{
    constructor(x, y, proportion, angle, color){
        this.x = x;
        this.y = y;
        this.parentAngle = angle

        this.angle = 0;


        let canvas = Canvas();
        this.width = canvas.witdh * proportion;
        this.height = this.width * (6/3);

        this.animation = new WeaponAnimation(this.width, this.height, color)
    }

    update(x,y, angle){
        if(x) this.x = x;
        if(y) this.y = y;
        if(angle) this.parentAngle = angle
    }

    draw(){
        drawRotate(this.x, this.y, this.width, this.height, this.parentAngle + this.angle, (x,y)=>{
            ctx.drawImage(this.animation.canvas, x, y, this.width, this.height);
        })
    }
}