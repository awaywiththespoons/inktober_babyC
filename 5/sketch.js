//inktober 2017
//5
//pangolin
//this p5 play library is amazing thankyou.

var pangolin;
var grassGroup;


function setup() {
  createCanvas(windowWidth, windowHeight);
  song = loadSound("pango_sound.wav");


  grassGroup = new Group();
    for (var i = 0; i < 50; i++) {
    var grass = createSprite(random(0, width), random(0, height));
    grass.addAnimation("normal", "grass001.png", "grass003.png");

    //grass.setSpeed(random(2, 3), random(0, 360));

    //scale affects the size of the collider
    grass.scale = random(0.5, 1);
    //mass determines the force exchange in case of bounce
   //grass.mass = grass.scale;
    grass.rotation = random(-10, 10);
    grass.immovable = true;

    grassGroup.add(grass);
  }

 pangolin = createSprite(width / 2, height / 3, 40, 40);
  pangolin.addAnimation("walking", "p_swalk001.png", "p_swalk006.png");
  pangolin.addAnimation("still", "p_still001.png", "p_still003.png");
  pangolin.changeAnimation("still");

} //end of setup

function draw() {
  background(255, 184, 77);


 //lefs bounce against each others and against pandas

  drawSprites();
} //end of draw

function keyPressed() {
  if(song.isPlaying()){
  } else {
    song.play();
  }
  if (keyCode == RIGHT_ARROW) {
    pangolin.changeAnimation("walking");
    pangolin.mirrorX(1);
    pangolin.setSpeed(1.5, 0);
  } else if (keyCode == DOWN_ARROW) {
    pangolin.changeAnimation("walking");
    pangolin.setSpeed(1.5, 90);
  } else if (keyCode == LEFT_ARROW) {
    pangolin.changeAnimation("walking");
    pangolin.mirrorX(-1);
    pangolin.setSpeed(1.5, 180);
  } else if (keyCode == UP_ARROW) {
    pangolin.changeAnimation("walking");
    pangolin.setSpeed(1.5, 270);
  } else if (key == ' ') {
    pangolin.changeAnimation("still");
    pangolin.setSpeed(0, 0);
    song.stop();
  }
  //return false;
} //end of draw
