//inktober 2017
//31 last day!
//halloweeeeeeeen pumpkin soup
//this p5 play library is amazing thankyou.

var pump, chop, soup;

function preload(){
  song = loadSound("soup_sound.wav");
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  //soup bowl
  soup = createSprite(width / 2, height / 2);
  soup.addAnimation("normal", "soup001.png");
  soup.setCollider("circle", 0, 0, 200)
  //soup.debug = true;
  soup.life = 2500;

  //chopsticks
  chop = createSprite(width / 2, height / 2);
  chop.addAnimation("normal", "chop001.png", "chop002.png");
  chop.setCollider("circle", 0, -200, 70);
 // chop.debug = true;
  chop.life = 3000;




} //end of setup

function draw() {
  background(20, 255, 125);

  chop.position.x = mouseX;
  chop.position.y = mouseY;

  if (mouseX > width / 2)
    chop.mirrorX(1);
  else {
    chop.mirrorX(-1);
  }

  if (chop.overlap(soup)) {
    if (mouseIsPressed) {
      // pumpkins
      //every 10 frames
      if(song.isPlaying()){
      } else song.play();
      if (frameCount % 5 == 0) {
        var pump;
        pump = createSprite(width/2+(random(-200, 200)), height/2 +(random(-200, 200)));
        pump.addAnimation("normal", "pump001.png", "pump006.png");
        pump.rotation = random(180);
        pump.life = 200;
      }
    }
  }



  drawSprites();
} //end of draw
