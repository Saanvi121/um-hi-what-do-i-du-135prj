function preload()
{
}

function setup()
{
    canvas = createCanvas(480,380)
    canvas.position(470,170)
    objectDetector = ml5.objectDetector('cocossd', modelLoaded)
}

function modelLoaded()
{
    console.log("model is loaded deal with it")
}