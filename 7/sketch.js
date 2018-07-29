//inktober 2017
//7
//mask
//this p5 play library is amazing thankyou.

var walker;
var sad, happy, shock, spotty;

function setup() {
  createCanvas(windowWidth, windowHeight);
song = loadSound("walker_sound.wav");

  // create MASKS
  //SAD
  sad = createSprite(200, 200);
  sad.addAnimation("normal", "sad001.png", "sad003.png");
  sad.changeAnimation("normal");


  //HAPPY
  happy = createSprite(400, 200);
  happy.addAnimation("normal", "happy001.png", "happy003.png");
  happy.changeAnimation("normal");


  //SHOCK
  shock = createSprite(600, 200);
  shock.addAnimation("normal", "shock001.png", "shock003.png");
  shock.changeAnimation("normal");


  //SPOTTY
  spotty = createSprite(800, 200);
  spotty.addAnimation("normal", "spotty001.png", "spotty003.png");
  spotty.changeAnimation("normal");


  //WALKER
  walker = createSprite(width / 2, 600);
  walker.addAnimation("walking", "walk001.png", "walk003.png");
  walker.addAnimation("still", "still001.png", "still002.png");
  walker.addAnimation("sad", "sadwalk001.png", "sadwalk003.png");
  walker.addAnimation("shock", "shockwalk001.png", "shockwalk003.png");
  walker.addAnimation("spotty", "spotwalk001.png", "spotwalk003.png");
  walker.addAnimation("happy", "happywalk001.png", "happywalk003.png");
  walker.changeAnimation("still");

} //end of setup

function draw() {
  background(255, 166, 77);
  if (walker.overlap(sad)){
    walker.changeAnimation("sad");
}
  else if (walker.overlap(shock)){
    walker.changeAnimation("shock");
  }

  else if (walker.overlap(spotty)){
    walker.changeAnimation("spotty");
  }

  else if (walker.overlap(happy)){
    walker.changeAnimation("happy");
  }

  drawSprites();
} //end of draw

function keyPressed() {
  if(song.isPlaying()){
  } else {
    song.play();
  }
  if (keyCode == RIGHT_ARROW) {
    walker.changeAnimation("walking");
    walker.mirrorX(1);
    walker.setSpeed(1.5, 0);
  } else if (keyCode == DOWN_ARROW) {
    walker.changeAnimation("walking");
    walker.setSpeed(1.5, 90);
  } else if (keyCode == LEFT_ARROW) {
    walker.changeAnimation("walking");
    walker.mirrorX(-1);
    walker.setSpeed(1.5, 180);
  } else if (keyCode == UP_ARROW) {
    walker.changeAnimation("walking");
    walker.setSpeed(1.5, 270);
  } else if (key == ' ') {
    walker.changeAnimation("still");
    walker.setSpeed(0, 0);
    song.stop();
  }
  //return false;
} //end of draw
