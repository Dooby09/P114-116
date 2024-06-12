imgx=0;
imgy=0;

function preload(){
    moustache=loadImage("clipart11879.png");
}

function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    canvas.position(825,300)

    video= createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    posenet=ml5.poseNet(video, modelloaded);
    posenet.on("pose", gotposes);
}

function gotposes(results){
    console.log(results);
    imgx= results[0].pose.nose.x-25;
    imgy= results[0].pose.nose.y+15;
}

function modelloaded(){
    console.log("model is loaded");
}

function draw(){
    image(video, 0,0,300,300);
    image(moustache, imgx, imgy, 60,30);
}

function takesnapshot(){

    save("filter.png");
}