class SpriteGenerator{
    async _createBitmap(src, x, y, width, height, state){
        let image = new Image()
        image.src = src
        let bitImage = await new Promise((resolve, reject) => {
            try{
                image.onload = ()=>{
                    createImageBitmap(image, x, y, width, height)
                        .then((image)=>{resolve({bitmap: image, state: state})})
                }
            }catch (error){
                reject(error)
            }
        });
        return bitImage
    }

    generate(frames, onSpritesReady){
        let states = Object.keys(frames);
        let framesFormated = {};
        let promises = [];

        states.forEach((state)=>{
            framesFormated[state] = [];
            let framesState = frames[state];
            framesState.forEach((frameItem)=>{
                promises.push(this._createBitmap(frameItem.src, frameItem.x, frameItem.y, frameItem.width, frameItem.height, state));
            })
        });

        Promise.allSettled(promises).then(sprites =>{
            sprites.forEach((element)=>{
                if(element.value){
                    let state = element.value.state;
                    let map = element.value.bitmap;

                    framesFormated[state].push(map)
                }
            })

            onSpritesReady(framesFormated);
        })
    }
}

export default SpriteGenerator;