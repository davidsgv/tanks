import Canvas from "../Canvas";
const ctx = Canvas().ctx;

export default function drawRotate(x, y, width, height, angle, drawFunction){
    ctx.save();
    ctx.translate(x + width/2, y + height/2);
    ctx.rotate(angle * Math.PI/180);
    drawFunction(-width/2, -height/2)
    ctx.restore()
}