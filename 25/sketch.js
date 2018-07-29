//inktober 2017
//25
//horse skating
//this p5 play library is amazing thankyou.

var bg, horse, carrot;

function preload(){
  song = loadSound("wheel_sound.wav");
}
function setup() {
  createCanvas(windowWidth, windowHeight);


  for (var i = 0; i < 20; i++) {
    bg = createSprite(random(0, width), random(0, width));
    bg.addAnimation("normal", "splodge.png");
    bg.rotation = random(360);
    bg.scale = random(0.1, 0.75);
  }

  //horse
  horse = createSprite(width / 2, height / 2 + (height / 5));
  horse.addAnimation("normal", "horse001.png", "horse012.png");
  // horse.debug = true;

  carrot = createSprite(width / 2, height / 2 + (height / 5));
  carrot.addAnimation("normal", "carrot001.png");
  carrot.rotation = random(360);

} //end of setup

function draw() {
  background(231, 255, 107);

  carrot.position.x = mouseX;
  carrot.position.y = mouseY;

  if(song.isPlaying()){
  } else song.play();
  //move LEFT towards mouse
  if (mouseX < horse.position.x + 30) {

    //flip horizontally
    horse.mirrorX(-1);
    //negative x velocity: move left
    horse.velocity.x = -1.5;
  }
  //move RIGHT towards mouse
  else if (mouseX > horse.position.x - 30) {
    //unflip
    horse.mirrorX(1);
    horse.velocity.x = 1.5;
  }

  drawSprites();
} // end of draw
