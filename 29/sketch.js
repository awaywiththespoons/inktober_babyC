//inktober 2017
//29
//duck stuff
//this p5 play library is amazing thankyou.

var bgs, cabbages, ducks, cabbage1, bg1;

function preload(){
  song = loadSound("chick_sound.mp3");
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  //cabbage
  for (var i = 0; i < 10; i++) {
    cabbage1 = createSprite(random(0, width), random(0, width));
    cabbage1.addAnimation("normal", "cabbage001.png", "cabbage005.png");
    cabbage1.rotation = random(360);
    // cabbage1.debug = true;
  }

  bgs = new Group();
  for (var i = 0; i < 20; i++) {
    var bg = createSprite(random(0, width), random(0, width));
    bg.addAnimation("normal", "lines001.png");
    bg.rotation = random(360);
    bg.immovable = true;
    bg.scale = random(0.1, 0.75);
    bgs.add(bg);
  }

  ducks = new Group();

  for (var i = 0; i < 40; i++) {
    //duck
    var duck = createSprite(random(0, width), random(0, height));
    //duck.addAnimation("normal", "duck001.png", "duck002.png");
    duck.addAnimation("walking", "duckWalk001.png", "duckWalk004.png");
    //duck.debug = true;
    duck.setCollider("circle", -2, 2, 55);
    duck.setSpeed(random(-1, 2), random(0, 360));
    //scale affects the size of the collider
    duck.scale = random(0.1, 1);
    //mass determines the force exchange in case of bounce
    duck.mass = duck.scale;
    ducks.add(duck);
  }

  //cabbage
  cabbages = new Group();
  for (var i = 0; i < 20; i++) {
    var cabbage = createSprite(random(0, width), random(0, width));
    cabbage.addAnimation("normal", "cabbage001.png", "cabbage005.png");
    cabbage.rotation = random(360);
    cabbage.life = random(150,170)

    //cabbage.debug = true;
    if (i % 2 == 0)
      cabbage.rotation = 90;
    cabbages.add(cabbage);
  }

  for (var i = 0; i < 5; i++) {
    bg1 = createSprite(random(0, width), random(0, width));
    bg1.addAnimation("normal", "lines001.png");
    bg1.rotation = random(360);
    bg1.scale = random(0.1, 0.75);
  }

} //end of setup

function draw() {

  if(song.isPlaying()){
  } else song.play();
  background(231, 255, 107);
  ducks.bounce(ducks);
  //boxes are "immovable"
  ducks.bounce(cabbages);

  ducks.bounce(bgs);
  drawSprites();
} // end of draw
