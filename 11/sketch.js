//inktober 2017
//11
//eating ants
//this p5 play library is amazing thankyou.

//GROUPS
var wallGroup, antGroup;
// Sprites
var ant;
var bg;
var mouth;

function preload(){
  song = loadSound("mouth_sound.wav");
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  for (var i = 0; i < 12; i++) {
    bg = createSprite(random(0, width), random(0, width));
    bg.addAnimation("normal", "bg001.png", "bg002.png");
    bg.rotation = random(360);
    bg.scale = random(0.1, 0.75);
  }

  mouth = createSprite(width / 2, height / 2);
  mouth.addAnimation("floating", "mouthFloat001.png", "mouthFloat004.png");
  mouth.addAnimation("eating", "mouthEat001.png", "mouthEat008.png");
  mouth.setCollider("circle", 0, 0, 70);
 // mouth.debug = true;

  antGroup = new Group();

  for (var i = 0; i < 55; i++) {
    ant = createSprite(random(0, width), random(0, width));
    ant.addAnimation("normal", "antWalk001.png", "antWalk004.png");
    ant.scale = random(0.5, 1);
    ant.velocity.x = random(-1, 1);
    print(ant.velocity.x);
    ant.velocity.y = random(-1, 1);
    ant.rotation = random(-20, 20);
    if (ant.velocity.x < 0) {
      ant.mirrorX(1);
      print("i am going left")
    } else if (ant.velocity.x > 0) {
      ant.mirrorX(-1);
      print("i am going right")
    }
    ant.life = 1500;
    //ant.debug = true;
    ant.setCollider("circle", 0, 0, 20);
    antGroup.add(ant);
  }




} //end of setup

function draw() {
  background(255, 0, 102);


  if (mouth.overlap(antGroup))
    mouth.overlap(antGroup, collect);
  else
    mouth.changeAnimation("floating");

  drawSprites();
} //end of draw

function keyPressed() {
  if (keyCode == RIGHT_ARROW) {
    mouth.mirrorX(1);
    mouth.setSpeed(2, 0);
  } else if (keyCode == DOWN_ARROW) {
    mouth.setSpeed(2, 90);
  } else if (keyCode == LEFT_ARROW) {
    mouth.mirrorX(-1);
    mouth.setSpeed(2, 180);
  } else if (keyCode == UP_ARROW) {
    mouth.setSpeed(2, -90);
  } else if (key == ' ') {
    mouth.setSpeed(0, 0);
  }
} //end of keypressed


function collect(collector, collected) {
  mouth.changeAnimation("eating");
  if (frameCount % 20 == 0){
    collected.remove();
    song.play();
  }

}
