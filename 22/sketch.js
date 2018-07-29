//inktober 2017
//22
//ice cream central
//this p5 play library is amazing thankyou.

var boulders, cat, arm;
var imgW, imgH;

function preload() {
  boulders = loadImage("bolders.png");
  song = loadSound("cat_sound.mp3");

}

function setup() {
  createCanvas(windowWidth, windowHeight);


  //CAT
  cat = createSprite(width / 2, height / 2 + (height / 5));
  cat.addAnimation("normal", "catStill001.png");
  cat.addAnimation("stroke", "catStar001.png", "catStar005.png");
  cat.setCollider("circle", -190, -70, 70);
 // cat.debug = true;

  //ARM
  arm = createSprite(width / 2, 200);
  arm.addAnimation("stroke", "armStroke001.png", "armStroke002.png");
  arm.setCollider("circle", 0, 175, 70);
  //arm.debug = true;

  imgW = random(width, 0);
  imagH = random(height, 0);


} //end of setup

function draw() {
  background(153, 255, 153);

  //Images
  tint(255, 127);
  image(boulders, 0, height - boulders.height + imgH);
  image(boulders, imgW, height - boulders.height);
  image(boulders, width / 4 + imgW, imgH);
  image(boulders, imgW + imgH, imgW - boulders.height);

  if (arm.overlap(cat)) {
    arm.changeAnimation("stroke");
    if(song.isPlaying()){
    } else song.play();
    if (frameCount % 8 == 0) {
      cat.changeAnimation("stroke");
      tint(255, 127);
      var star = createSprite(mouseX, mouseY);
      star.addAnimation("normal", "star001.png", "star016.png")
      star.velocity.x = random(-5, 5);
      star.velocity.y = random(-5, 5);
      star.rotation = random(360);
      star.life = 100;
    }
  } else {
    cat.changeAnimation("normal");
    song.stop();
  }

  tint(255, 255);
  arm.position.x = mouseX;
  arm.position.y = mouseY - 150;
  drawSprites();
} // end of draw
