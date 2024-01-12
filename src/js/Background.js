import Canvas from "/src/js/Canvas";
import img from "/src/assets/Terrains/terrain.png"

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
        ctx.drawImage(this.image, this.srcX, this.srcY, this.srcWidth, this.srcHeight, 
            this.width * this.gridPosX, this.height * this.gridPosY, this.width, this.height);
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

const gameObjects = []
mapGrid.forEach((row, rowIndex)=>{
    return row.map((column, columnIndex)=>{
        gameObjects.push(new BackgroundImage(img, column.x, column.y, column.width, column.height, columnIndex, rowIndex))
    });
})

export default gameObjects