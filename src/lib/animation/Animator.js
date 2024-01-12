import SpriteGenerator from '/src/lib/animation/SpriteGenerator';
import WorkerUrl from '/src/lib/animation/AnimationWorker?worker&url';
import { animationConfig } from '../../Config/Config';


//contains all animations
//generate the webworker and canvas
//generate sprites if is required
//wait images to load to perfom worker
//delete animation
class Animator{
    constructor(){
        this.animations = {};
        this.worker = new Worker(WorkerUrl, { type: 'module' });
        this.spriteGenerator = new SpriteGenerator()
    }

    newAnimation(name, width, height, frames, state, type, debug){
        let canvas = document.createElement("canvas");
        canvas.width = width;
        canvas.height = height;

        let animation = {
            name: name,
            width: width,
            height: height,
            canvas: canvas.transferControlToOffscreen(),
            state: state,
            type: type,
            debug: debug
        }

        this.spriteGenerator.generate(frames, (framesFormated)=>{
            let message = {
                messageType: "new",
                frames: framesFormated,
                ...animation
            }
            this.worker.postMessage(message, [message.canvas])
        })

        //debug prints canvas on bottom left corner
        if(animationConfig.previewBox || debug){
            canvas.style.cssText = "position: absolute; bottom: 5%; left: 5%;"
            canvas.id = "animationDebug"
            document.body.appendChild(canvas)
        }

        this.animations[name] = animation;
        return canvas;
    }

}

const animator = new Animator()

export default animator;