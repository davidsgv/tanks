import animator from "/src/lib/animation/Animator"

import blueTurret1MK1 from "/src/assets/Blue/Weapons/turret_01_mk1.png"
import { colors } from "/src/js/Tank";

const states = {
    "idle": 0,
    "shoot": 1,
}

const idle =  [
    {
        x: 45,
        y: 5,
        width: 39,
        height: 95
    }
];

const shoot = [
    {
        x: 45,
        y: 5,
        width: 39,
        height: 90
    },
    {
        x: 173,
        y: 5,
        width: 39,
        height: 90
    },
    {
        x: 301,
        y: 5,
        width: 39,
        height: 90
    },
    {
        x: 429,
        y: 5,
        width: 39,
        height: 90
    },
    {
        x: 557,
        y: 5,
        width: 39,
        height: 90
    },
    {
        x: 685,
        y: 5,
        width: 39,
        height: 90
    },
    {
        x: 813,
        y: 5,
        width: 39,
        height: 90
    },
    {
        x: 941,
        y: 5,
        width: 39,
        height: 90
    },
]


class WeaponAnimation{
    constructor(width, height, color){
        this.frames = this._generateFrames(color)
        this.canvas = animator.newAnimation("weapon", width, height, this.frames, states.shoot, "sprite", true)
    }

    _generateFrames(color){
        let turret1MK1;

        switch(color){
            case colors.Blue:
                turret1MK1 = blueTurret1MK1;
                break
            // case colors.Camo:
            //     tankBody = camoTankBody
            //     tankHalfBody = camoTankHalfBody;
            //     break
            // case colors.Desert:
            //     tankBody = desertTankBody
            //     tankHalfBody = desertTankHalfBody;
            //     break
            // case colors.Purple:
            //     tankBody = purpleTankBody
            //     tankHalfBody = purpleTankHalfBody;
            //     break
            // case colors.Red:
            //     tankBody = redTankBody;
            //     tankHalfBody = redTankHalfBody;
            //     break
        }

        const weapon = {}
        weapon[states.idle] = [...idle];
        weapon[states.idle].forEach(element => {
            element.src = turret1MK1
        });
        weapon[states.shoot] = [...shoot];
        weapon[states.shoot].forEach(element => {
            element.src = turret1MK1
        });

        return weapon
    }
}

export default WeaponAnimation