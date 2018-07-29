//inktober 2017
//2
//badger
//based on sketch by Alison Parish (http://creative-coding.decontextualize.com/making-games-with-p5-play/) thank you :)

var badger;

function setup() {
  createCanvas(windowWidth, windowHeight);
  song = loadSound('badger_sound.wav');

}

function draw() {
  background(255, 125, 125);
  drawSprites();
}

function mousePressed() {
  // make a sprite
  badger = createSprite(width / 2, height / 2, random(10, 50), random(10, 50));
  // add and animation
  badger.addAnimation("walking", "badger001.png", "badger008.png")
  song.play();
    // speed settings
  badger.velocity.y = random(-1, 1);
  badger.velocity.x = random(-3, 3);
  //mirror if facing left
  if (badger.velocity.x <= 0) {
    badger.mirrorX(-1);
  }
  //position
  badger.position.x = mouseX;
  badger.position.y = mouseY;

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
