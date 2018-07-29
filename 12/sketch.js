//inktober 2017
//12
//somthing not sure what
//this p5 play library is amazing thankyou.

//bg
var bgFoot, bgTri;
//sprites
var spnx, person;

function preload(){
  song = loadSound("spnx_sound.wav");
}
function setup() {
  createCanvas(windowWidth, windowHeight);

  for (var i = 0; i < 12; i++) {
    bgFoot = createSprite(random(0, width), random(height / 2, 0));
    bgTri = createSprite(random(0, width), random(height, height / 2));
    bgTri.addAnimation("normal", "triangle001.png", "triangle003.png");
    bgFoot.addAnimation("normal", "bgFoot001.png", "bgFoot005.png");
    bgTri.scale = random(0.2, 0.5);
    bgFoot.scale = random(0.75, 1);
    bgTri.life = 1500;
    bgFoot.life = 2000;
  }

  //SPhINX
  spnx = createSprite(width / 2, height / 4);
  spnx.addAnimation("normal", "spnx001.png");
  spnx.setCollider("circle", 0, 0, 70)
    // spnx.debug = true;
  spnx.life = 2500;

  //PERSON
  person = createSprite(width / 4, height / 2);
  person.addAnimation("still", "person001.png");
  person.addAnimation("walking", "person001.png", "person002.png");
  person.addAnimation("spnx", "personsSpnx001.png", "personsSpnx002.png")
  person.setCollider("circle", 0, -30, 60);
  //person.debug = true;


} //end of setup

function draw() {
  background(255, 0, 0);

  if (person.overlap(spnx)) {
    person.changeAnimation("spnx");
    if(song.isPlaying()){
    } else song.play();
  }

  drawSprites();


} //end of draw


function keyPressed() {
  if (keyCode == RIGHT_ARROW) {
    person.mirrorX(1);
    person.setSpeed(2, 0);
    person.changeAnimation("walking");
  } else if (keyCode == DOWN_ARROW) {
    person.setSpeed(2, 90);
    person.changeAnimation("walking");
  } else if (keyCode == LEFT_ARROW) {
    person.mirrorX(-1);
    person.setSpeed(2, 180);
    person.changeAnimation("walking");
  } else if (keyCode == UP_ARROW) {
    person.setSpeed(2, -90);
    person.changeAnimation("walking");
  } else if (key == ' ') {
    person.setSpeed(0, 0);
    person.changeAnimation("still");
  }
}
