objects = [];
status = "";

function setup(){
    video = createCapture(VIDEO);
    video.size(380,380);
    video.hide();
    canvas = createCanvas(380,380);
    canvas.center();
}
function draw(){
    image(video,0,0,380,380);
    if (status != ""){
        objectDetector.detect(video);
    }
}
function start(){
    objectDetector = ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML = "Status:Detecting Objects";
    object_name = document.getElementById("object_name").value;
}
function modelLoaded(){
    console.log("Model Loaded!");
    status = true;
    
}
