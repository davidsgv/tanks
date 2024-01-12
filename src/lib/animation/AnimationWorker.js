import KeyFrameAnimation from '/src/lib/animation/animationType/Keyframe'
import SpriteAnimation from '/src/lib/animation/animationType/Sprite'
import { animationConfig } from '../../Config/Config';

let objects = []

//fps
let DELTATIME = 0;
let FRAMES = 0;
let FPS = 0;

// animation Change
// create canvas
self.onmessage = function(event){
    let data = event.data
    if(data.messageType == "new"){
        newCanvas(data)
    }
}

// data = {
    //canvas: HTMLcanvas
    // name: String
    // width: number
    // height: number
    // frames: array[{
    //     x: Number
    //     y: Number
    //     src: ImageElement
    //     width: Number,
    //     height: Number,
    // }]
// }
const newCanvas = (data)=>{
    let canvasObj = {
        canvas: data.canvas,
        name: data.name,
        ctx: data.canvas.getContext('2d'),
        width: data.width,
        height: data.height,
        frames: data.frames,
        state: data.state,
        type: data.type,
        debug: data.debug,
        animation: createAnimationType(data.type)
    }
    
    if(animationConfig.showFPS || data.debug){
        canvasObj.ctx.font = "18px serif";
        canvasObj.ctx.strokeStyle = "White";
    }

    objects.push(canvasObj);
}

function createAnimationType(type){
    var animationType
    if (type === "sprite") {
        animationType = new SpriteAnimation();
    } else if (type === "keyframe") {
        animationType = new KeyFrameAnimation();
    }
    return animationType
}

const animate = (time)=>{
    FRAMES++
    FPS = Math.floor(1000 / (time - DELTATIME));
    DELTATIME = time;

    objects.forEach(element => {
        element.ctx.clearRect(0,0, element.width, element.height);

        element.animation.draw(element.width, element.height, FRAMES, 
            element.ctx, performance.now(), element.state, element.frames);

        if(animationConfig.showFPS || element.debug)
            element.ctx.strokeText(`${FPS} FPS`, 0, 18)
    });

    requestAnimationFrame(animate)
}

requestAnimationFrame(animate)