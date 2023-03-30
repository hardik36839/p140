song_1 = "";
song_2 = "";
left_x = 0;
left_y = 0;

right_x = 0;
right_y = 0;
function preload()
{
    song_1 = loadSound("music.mp3")
    song_2 = loadSound("music2.mp3")
}
function setup()
{
    canvas = createCanvas(600  ,500)
    canvas.center()

    video = createCapture(VIDEO)
    video.hide()

    poseNet = ml5.poseNet(video, modelloaded)
    poseNet.on('pose' , gotposes)
}
function modelloaded()
{
    console.log("model is loaded ! ")
}
function gotposes(results)
{
if (results.length > 0)
  {
    console.log(results)

    left_x = results[0].pose.leftWrist.x
    left_y = results[0].pose.leftWrist.y

    right_x = results[0].pose.leftWrist.x  
    right_y = results[0].pose.leftWrist.y
  }  
}
function draw()
{
    image(video , 0  , 0 , 600 , 500)
}