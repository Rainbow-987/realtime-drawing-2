function setup() {
    canvas = createCanvas(500, 500);
    canvas.position(550, 180);

    background("violet");
    video = createCapture(VIDEO);
    video.size(500, 500);

    poseNet = ml5.poseNet(video, modelloaded);
    poseNet.on('pose', gotPoses);
}

function preload() {

}

function draw() {
    background("violet");
}

function modelloaded() {
    console.log("PoseNet Model Is Loaded")
}
function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);

    }

}