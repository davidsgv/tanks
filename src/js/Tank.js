import Canvas from "./Canvas";
import img from "../assets/Red/Bodies/body_halftrack.png"
import { addGameObject } from "./Game";
import { calcFrame } from "./animation/animation"; 

const ctx = Canvas().ctx;

const tank = {
    "idle": [
        {
            x: 30,
            y: 12,
            width: 68,
            height: 93
        },    
    ],
    "move": [
        {
            x: 30,
            y: 12,
            width: 68,
            height: 93
        },
        {
            x: 158,
            y: 12,
            width: 68,
            height: 93
        }
    ]
}

function drawRotate(x, y, angle, drawFunction){
    angle = angle * Math.PI/180

    ctx.save();
    ctx.rotate(angle);

    let r = Math.sqrt(x*x + y*y); //r^2 = (delta X)^2 + (delta Y)^2
    let alpha = Math.asin(y/r)
    x = r * Math.cos(alpha - angle)
    y = r * Math.sin(alpha- angle)

    drawFunction(x,y)
    ctx.restore()
}

class Tank{
    constructor(){
        this.x = 300;
        this.y = 300;

        this.image = new Image();
        this.image.src = img;

        this.proportion = 0.1;
        let canvas = Canvas();
        this.width = canvas.witdh * this.proportion;
        this.height = this.width * (4/3);
        // this.height = canvas.height * this.proportion;

        this.animationState = "move";
        this.getFrame();

        this.angle = 0;

        window.addEventListener("keydown", e=>{
            // console.log(e)
            if(e.key == "ArrowUp") this.moveUp();
            if(e.key == "ArrowDown") this.moveDown();
            if(e.key == "ArrowLeft") this.moveLeft();
            if(e.key == "ArrowRight") this.moveRight();
        })
    }

    update(){
        this.getFrame();
    }

    draw(){
        let posx = ((this.x + this.width) + this.x)/2
        let posy = ((this.y + this.height) + this.y)/2
        drawRotate(posx, this.y, this.angle, (x,y)=>{
            ctx.drawImage(this.image, this.imgX, this.imgY, this.imgWidth, this.imgHeight, x, y, this.width, this.height);
            // ctx.strokeRect(this.x, this.y, this.width, this.height);
        });
        ctx.strokeRect(this.x, this.y, this.width, this.height);
        // ctx.save();
        // ctx.rotate(this.angle * Math.PI /180);

        // ctx.drawImage(this.image, this.imgX, this.imgY, this.imgWidth, this.imgHeight, this.x, this.y, this.width, this.height);
        // ctx.strokeRect(this.x, this.y, this.width, this.height);  
        // ctx.restore()
    }

    getFrame(){
        let framePos = calcFrame(tank, this.animationState);
        this.imgX = framePos.x;
        this.imgY = framePos.y;
        this.imgWidth = framePos.width;
        this.imgHeight = framePos.height;
    }

    moveUp(){
        this.x += 5
    }
    moveDown(){
        this.x -= 5
    }
    moveLeft(){
        this.angle -= 5
    }
    moveRight(){
        this.angle += 5
    }
}

const player1 = new Tank()

export default ()=>{
    addGameObject(player1)
}