//inktober 2017
//3
//goat
//based on sketch by Paolo Pedicini thank you :)

var spud;
var goat;

function preload() {
  // spud = loadImage("potato.png");
  song = loadSound('goat_sound.wav');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);
  //add goat
  goat = createSprite(300, 300);
  goat.addAnimation("normal", "goat_still001.png", "goat_still003.png");
  goat.addAnimation("eating", "goat001.png", "goat010.png");

  //add potato
  spud = createSprite(100, 100);
  spud.addAnimation("normal", "potato.png");

} //end of setup


function draw() {
  background(255, 255, 179);

  //  spud.position.x = mouseX;
  //  spud.position.y = mouseY;

  spud.velocity.x = (mouseX - spud.position.x) / 10;
  spud.velocity.y = (mouseY - spud.position.y) / 10;

  //mouse over
  if (spud.overlap(goat)) {
    goat.changeAnimation("eating");
    if(song.isPlaying()){  
    }else
      song.play();

  } else {

    goat.changeAnimation("normal");
  }

  drawSprites();
} // end of draw
