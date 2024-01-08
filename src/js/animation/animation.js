import { gameFrame, staggerFrames } from "../Game";


function calcFrame(frames, state){
    if(!state) return null

    let position = Math.floor(gameFrame/staggerFrames) % frames[state].length;
    const x = frames[state][position].x;
    const y = frames[state][position].y;
    const width = frames[state][position].width;
    const height = frames[state][position].height;

    return {x, y, width, height }
}

export {calcFrame}