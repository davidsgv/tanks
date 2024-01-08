const canvas = document.getElementById("canvas1");
const ctx = Object.freeze(canvas.getContext('2d'));
const screenSize = {}
const apectRatioWidth = 4;
const apectRatioHeight = 3;
const aspectRatio = apectRatioWidth / apectRatioHeight;
setSize();

function setSize(){
    screenSize.WIDTH = document.documentElement.clientWidth - 20;
    screenSize.HEIGHT = screenSize.WIDTH / aspectRatio;
    
    let height = document.documentElement.clientHeight  - 20;
    if(screenSize.HEIGHT > height){
        screenSize.HEIGHT = height;
        screenSize.WIDTH = height * aspectRatio
    }

    canvas.width = screenSize.WIDTH;
    canvas.height = screenSize.HEIGHT;
}

window.addEventListener("resize", setSize);

const Canvas = ()=>{
    return {ctx, witdh: screenSize.WIDTH, height: screenSize.HEIGHT}
}
export default Canvas