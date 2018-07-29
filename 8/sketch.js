//inktober 2017
//8
//lemons
//this p5 play library is amazing thankyou.

var walker;

function setup() {
  createCanvas(windowWidth, windowHeight);

song = loadSound("lemon_sound.wav");
  //WALKER
  walker = createSprite(width / 2, height / 4);
  walker.addAnimation("walking", "walker001.png", "walker003.png");
  walker.addAnimation("still", "walker001.png");
} //end of setup

function draw() {
  background(102, 255, 102);

  //every 10 frames
  if (frameCount % 40 == 0) {
    var closedLemon;
    closedLemon = createSprite(walker.position.x, walker.position.y - 120);
    closedLemon.addAnimation("normal", "closedLemon001.png", "closedLemon006.png");
    closedLemon.rotation = random(360);
    closedLemon.life = 1000;

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
    walker.mirrorX(-1);
    walker.setSpeed(1.5, 0);
  } else if (keyCode == DOWN_ARROW) {
    walker.changeAnimation("walking");
    walker.setSpeed(1.5, 90);
  } else if (keyCode == LEFT_ARROW) {
    walker.changeAnimation("walking");
    walker.mirrorX(1);
    walker.setSpeed(1.5, 180);
  } else if (keyCode == UP_ARROW) {
    walker.changeAnimation("walking");
    walker.setSpeed(1.5, -90);
  } else if (key == ' ') {
        walker.changeAnimation("still");
    walker.setSpeed(0, 0);
    song.stop();
  }

} //end of keypressed
