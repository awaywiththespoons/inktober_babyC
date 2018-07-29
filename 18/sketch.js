//inktober 2017
//18
//some dancing
//this p5 play library is amazing thankyou.

var treeGroup;
var toothGroup;
var shoe1, shoe2;

function preload(){
  song = loadSound("dance_sound.wav");
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  //TOOTH
  toothGroup = new Group();

  for (var i = 0; i < 50; i++) {
    var tooth = createSprite(random(0, width), random(0, height));
    tooth.addAnimation("normal", "teeth001.png", "teeth005.png");
    tooth.setCollider("circle", -2, 2, 55);
    tooth.scale = random(0.5, 1);
    tooth.rotation = random(-10, 10);
    tooth.mass = tooth.scale*1.5;
    toothGroup.add(tooth);
    tooth.life = 2000;
  }

  //FEET
  shoe1 = createSprite(width / 2, height / 2 + 50);
  shoe1.addAnimation("normal", "dance1001.png", "dance1010.png");
  shoe1.setCollider("circle", 0, 0, 70);

  // shoe1.debug = true;

  shoe2 = createSprite((width / 2) - 150, height / 2 + 50);
  shoe2.addAnimation("normal", "dance2001.png", "dance2014.png");
  shoe2.setCollider("circle", 0, 0, 70);
  //shoe2.debug = true;


} //end of setup

function draw() {
  background(25, 10, 255);

  //lefs bounce against each others and against trees
  toothGroup.bounce(shoe1);
  toothGroup.bounce(shoe2);
  toothGroup.bounce(toothGroup);

  drawSprites();
}

function keyPressed() {

  if(song.isPlaying()){
  } else song.play();

  if (keyCode == RIGHT_ARROW) {
    shoe1.mirrorX(1);
    shoe1.setSpeed(2, 0);
  } else if (keyCode == DOWN_ARROW) {
    shoe1.setSpeed(2, 90);
  } else if (keyCode == LEFT_ARROW) {
    shoe1.mirrorX(-1);
    shoe1.setSpeed(2, 180);
  } else if (keyCode == UP_ARROW) {
    shoe1.setSpeed(2, -90);
  } else if (key == ' ') {
    shoe1.setSpeed(0, 0);
    shoe2.setSpeed(0, 0);
    song.stop();
  }

  if (keyCode == 68) {
    shoe2.mirrorX(1);
    shoe2.setSpeed(2, 0);
  } else if (keyCode == 83) {
    shoe2.setSpeed(2, 90);
  } else if (keyCode == 65) {
    shoe2.mirrorX(-1);
    shoe2.setSpeed(2, 180);
  } else if (keyCode == 87) {
    shoe2.setSpeed(2, -90);
  }
} //end of keypressed
