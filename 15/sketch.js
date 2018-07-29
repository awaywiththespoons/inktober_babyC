//inktober 2017
//15
//some waterings
//this p5 play library is amazing thankyou.

//assets
var plant, watering;



function preload() {

  plant = loadAnimation("plantGROW001.png", "plantGROW020.png");
  plant.looping = false;
  song = loadSound("water_sound.wav");
}

function setup() {
  createCanvas(windowWidth, windowHeight);


  //plant
  // plant = createSprite(width / 2, height / 2);
  // plant.addAnimation("normal", "plant001.png", "plant002.png");
  // plant.addAnimation("growing", "plantGROW001.png", "plantGROW020.png");
  // plant.addAnimation("grown", "plantGROW020.png");
  // plant.setCollider("circle", 0, 0, 80)
 // plant.debug = true;
  // plant.life = 2500;

  //watering
  watering = createSprite(width / 4, height / 2);
  watering.addAnimation("normal", "hand001.png", "hand002.png");
  watering.addAnimation("watering", "handwater004.png");
  watering.setCollider("circle", 0, 0, 100);
//  watering.debug = true;
  watering.life = 3000;

} //end of setup

function draw() {
  background(255, 40, 100);
  animation(plant, width / 2, height / 2);
  watering.position.x = mouseX;
  watering.position.y = mouseY;

  if (mouseX > width / 2)
    watering.mirrorX(-1);
  else {
    watering.mirrorX(1);
  }

  if (mouseIsPressed) {
    plant.play();
    watering.changeAnimation("watering");
    if(song.isPlaying()){
    } else song.play();
  } else {
    plant.stop();
    watering.changeAnimation("normal");
    song.stop();
  }


  // if (watering.overlap(plant)) {
  //   // plant.changeAnimation("growing");
  //   plant.play();
  //   watering.changeAnimation("watering");
  // } else {
  //   // plant.changeAnimation("grown");
  //   plant.stop();
  //   watering.changeAnimation("normal");
  // }

  drawSprites();
} //end of draw
