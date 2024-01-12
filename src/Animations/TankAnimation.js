import blueTankHalfBody from "/src/assets/Blue/Bodies/body_halftrack.png"
import blueTankBody from "/src/assets/Blue/Bodies/body_tracks.png"
import camoTankHalfBody from "/src/assets/Camo/Bodies/body_halftrack.png"
import camoTankBody from "/src/assets/Camo/Bodies/body_tracks.png"
import desertTankHalfBody from "/src/assets/Desert/Bodies/body_halftrack.png"
import desertTankBody from "/src/assets/Desert/Bodies/body_tracks.png"
import purpleTankHalfBody from "/src/assets/Purple/Bodies/body_halftrack.png"
import purpleTankBody from "/src/assets/Purple/Bodies/body_tracks.png"
import redTankHalfBody from "/src/assets/Red/Bodies/body_halftrack.png"
import redTankBody from "/src/assets/Red/Bodies/body_tracks.png"

import animator from "/src/lib/animation/Animator"
import { colors } from "../js/Tank"


const states = {
    "idle": 0,
    "move": 1,
    "idleHalf": 2,
    "moveHalf": 3
}
Object.freeze(states);


const idle =  [
    {
        x: 30,
        y: 16,
        width: 68,
        height: 86
    }
];

const move = [
    {
        x: 30,
        y: 16,
        width: 68,
        height: 86
    },
    {
        x: 158,
        y: 16,
        width: 68,
        height: 86
    }
];

class TankAnimation{
    constructor(width, height, color){
        this.frames = this._generateFrames(color)
        this.canvas = animator.newAnimation("tank", width, height, this.frames, states.idle, "sprite")
    }

    _generateFrames(color){
        let tankBody;
        let tankHalfBody;

        switch(color){
            case colors.Blue:
                tankBody = blueTankBody;
                tankHalfBody = blueTankHalfBody;
                break
            case colors.Camo:
                tankBody = camoTankBody
                tankHalfBody = camoTankHalfBody;
                break
            case colors.Desert:
                tankBody = desertTankBody
                tankHalfBody = desertTankHalfBody;
                break
            case colors.Purple:
                tankBody = purpleTankBody
                tankHalfBody = purpleTankHalfBody;
                break
            case colors.Red:
                tankBody = redTankBody;
                tankHalfBody = redTankHalfBody;
                break
        }

        const tank = {}
        tank[states.idle] = [...idle];
        tank[states.move] = [...move];
        tank[states.idleHalf] = [...idle];
        tank[states.moveHalf] = [...move]

        tank[states.idle].forEach(element => {
            element.src = tankBody
        });
        tank[states.move].forEach(element => {
            element.src = tankBody
        });
        tank[states.idleHalf].forEach(element => {
            element.src = tankHalfBody
        });
        tank[states.moveHalf].forEach(element => {
            element.src = tankHalfBody
        });

        return tank
    }
}

export default TankAnimation
export {states, colors}