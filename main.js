
boy_with_luv_song="";
seven_song="";

function setup(){
    canvas = createCanvas(600,530);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}

function preload(){
    boy_with_luv_song = loadSound("music1.mp3");
    seven_song = loadSound("music2.mp3");
}

function draw(){
    image(video,0,0,600,530);
}
