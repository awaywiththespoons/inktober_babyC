//inktober 2017
//19
//ice cream central
//this p5 play library is amazing thankyou.

var scoop, ball, ball2, tub, hand;
var GRAVITY = 1;
var count = 0;

function preload() {
  tub = loadImage("tub001.png");
  hand = loadImage("handStill001.png")
  song = loadSound("yum_sound.mp3");
}

function setup() {
  createCanvas(windowWidth, windowHeight);


  //person with ice cream
  scoop = createSprite(width / 2, height - 300);
  scoop.addAnimation("zero", "noScoop001.png", "noScoop004.png");
  scoop.addAnimation("one", "oneScoop001.png", "oneScoop004.png");
  scoop.addAnimation("two", "twoScoop001.png", "twoScoop004.png");
  scoop.setCollider("circle", 0, -80, 40);
  //  scoop.debug = true;

  ball = createSprite(random(0, width), 0);
  ball.addAnimation("normal", "ball001.png");
  ball.velocity.y += 1.5;
  ball.setCollider("circle", 0, 0, 30);
  // ball.debug = true;

  ball2 = createSprite(random(0, width), 0);
  ball2.addAnimation("normal", "ball001.png");
  ball2.velocity.y += 1;
  ball2.setCollider("circle", 0, 0, 30);
  // ball2.debug = true;

} //end of setup

function draw() {
  background(26, 100, 255);
  image(hand, width / 2, 0);
  image(tub, 0, 0);

  if (scoop.overlap(ball)) {
    ball.remove();
    scoop.changeAnimation("one");
    if(song.isPlaying()){
    } else song.play();
  }
  if (scoop.overlap(ball2)) {
    ball2.remove();
    scoop.changeAnimation("two");
    if(song.isPlaying()){
    } else song.play();
  }


  drawSprites();
}

function keyPressed() {

  if (keyCode == RIGHT_ARROW) {
    scoop.mirrorX(1);
    scoop.setSpeed(2, 0);
  } else if (keyCode == DOWN_ARROW) {
    scoop.setSpeed(2, 90);
  } else if (keyCode == LEFT_ARROW) {
    scoop.mirrorX(-1);
    scoop.setSpeed(2, 180);
  } else if (keyCode == UP_ARROW) {
    scoop.setSpeed(2, -90);
  } else if (key == ' ') {
    scoop.setSpeed(0, 0);
    song.stop();
  }


} //end of keypressed
