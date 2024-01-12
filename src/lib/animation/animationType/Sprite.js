class Spriteanimation{
    draw(width, height, frames, ctx, time, state, animations){
        let animation = animations[state]
        let position = Math.floor(frames/10) % animation.length;
        ctx.drawImage(animation[position], 0, 0, width, height);
    }
}

export default Spriteanimation