//inktober 2017
//10
//bubler
//this p5 play library is amazing thankyou.

var fish;
var weed1, weed2
var bubbleGroup;
var GRAVITY = -1;

function preload(){
  song = loadSound('bubble_sound.wav');
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  bubbleGroup = new Group();

  for (var i = 0; i < 6; i++) {
    weed1 = createSprite(random(0, width), random(height / 2, height));
    weed1.addAnimation("floating", "weed001.png", "weed008.png");
  }

  fish = createSprite(width / 2, height / 4);
  fish.addAnimation("swimming", "otherFish001.png", "otherFish004.png");

  for (var i = 0; i < 4; i++) {
    var weed2 = createSprite(random(0, width), random(height / 2, height));
    weed2.addAnimation("floating", "seaweed001.png", "seaweed008.png");
    weed2.mirrorX(-1);
  }

  //BUBBLES
  for (var i = 0; i < 100; i++) {
    var bubble = createSprite(random(0, width), random(0, height));
    bubble.addAnimation("normal", "bubble001.png", "bubble007.png");
    bubble.velocity.y += random(-0.1, -1);
    bubbleGroup.add(bubble);
  }

} //end of setup

function draw() {
  background(179, 255, 255);
  fish.overlap(bubbleGroup, collect);
  drawSprites();
} //end of draw

function keyPressed() {

  if (keyCode == RIGHT_ARROW) {
    fish.mirrorX(1);
    fish.setSpeed(1.5, 0);
  } else if (keyCode == DOWN_ARROW) {
    fish.setSpeed(1.5, 90);
  } else if (keyCode == LEFT_ARROW) {
    fish.mirrorX(-1);
    fish.setSpeed(1.5, 180);
  } else if (keyCode == UP_ARROW) {
    fish.mirrorX(-1);
    fish.setSpeed(1.5, -90);
  } else if (key == ' ') {
    fish.setSpeed(0, 0);
  }
}

function collect(collector, collected) {
  collected.remove();
  song.play();
}
