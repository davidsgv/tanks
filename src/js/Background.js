import { addGameObject } from "./Game";
import Canvas from "./Canvas";
import img from "../assets/Terrains/terrain.png"

const ctx = Canvas().ctx;

class BackgroundImage{
    constructor(src, srcX, srcY, srcWidth, srcHeight, gridPosX, gridPosY){
        this.srcX = srcX;
        this.srcY = srcY;
        this.srcWidth = srcWidth;
        this.srcHeight = srcHeight;

        this.gridPosX = gridPosX;
        this.gridPosY = gridPosY;

        this.image = new Image();
        this.image.src = src;

        
        this.proportion = 0.20;
        let canvas = Canvas();
        this.width = canvas.witdh * this.proportion;
        this.height = canvas.height * this.proportion;
    }

    update(){
        let canvas = Canvas();
        this.width = canvas.witdh * this.proportion;
        this.height = canvas.height * this.proportion;
    }

    draw(){
        // ctx.drawImage(this.image, this.x, this.y, 200, 200);
        ctx.drawImage(this.image, this.srcX, this.srcY, this.srcWidth, this.srcHeight, 
            this.width * this.gridPosX, this.height * this.gridPosY, this.width, this.height);
        // ctx.drawImage(this.image, 0, 0, this.width, this.height, this.x, this.y, this.width, CANVAS_HEIGHT)
        // ctx.drawImage(this.image, 0, 0, this.width, this.height, this.x + this.width, this.y, this.width, CANVAS_HEIGHT)
    }
}

const tiles = {
    "ice": {
        x: 0,
        y: 0,
        width: 130,
        height: 127,
    },
    "ice-broke": {
        x: 130,
        y: 0,
        width: 120,
        height: 127,
    },
    "ice-tree": {
        x: 245,
        y: 0,
        width: 140,
        height: 127,
    }
};

const mapGrid = [
    [
        tiles["ice"],
        tiles["ice-broke"],
        tiles["ice-tree"],
        tiles["ice"],
        tiles["ice"],
    ],
    [
        tiles["ice"],
        tiles["ice"],
        tiles["ice"],
        tiles["ice"],
        tiles["ice"],
    ],
    [
        tiles["ice"],
        tiles["ice"],
        tiles["ice"],
        tiles["ice"],
        tiles["ice"],
    ],
    [
        tiles["ice"],
        tiles["ice"],
        tiles["ice"],
        tiles["ice"],
        tiles["ice"],
    ],
    [
        tiles["ice"],
        tiles["ice"],
        tiles["ice"],
        tiles["ice"],
        tiles["ice-tree"],
    ]
];


export default ()=>{
    mapGrid.forEach((row, rowIndex)=>{
        row.forEach((column, columnIndex)=>{
            let tile = new BackgroundImage(img, column.x, column.y, column.width, column.height, columnIndex, rowIndex)
            addGameObject(tile);
        });
    })
}