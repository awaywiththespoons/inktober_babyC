//inktober 2017
//4
//pandaz
//this p5 play library is amazing thankyou.

var leafGroup;
var pandaGroup;

function preload() {}

function setup() {
  createCanvas(windowWidth, windowHeight);

  leafGroup = new Group();

  for (var i = 0; i < 30; i++) {
    var leaf = createSprite(random(0, width), random(0, height));
    leaf.addAnimation("normal", "leaf001.png", "leaf002.png");
    leaf.setCollider("circle", -2, 2, 55);
    leaf.setSpeed(random(2, 3), random(0, 360));

    //scale affects the size of the collider
    leaf.scale = random(0.5, 2);
    //mass determines the force exchange in case of bounce
    leaf.mass = leaf.scale;


    leafGroup.add(leaf);
  }

  pandaGroup = new Group();

  for (var i = 0; i < 3; i++) {
    var panda = createSprite(random(10, width - 20), random(10, height - 20));
    panda.addAnimation("normal", "panda001.png", "panda017.png");
    //setting immovable to true makes the sprite immune to bouncing and displacements
    //as if with infinite mass
    panda.immovable = false;

    //rotation rotates the collider too but it will always be an axis oriented
    panda.rotation = random(-20, 20);
    panda.scale = random(0.7, 1);

    pandaGroup.add(panda);
  }
}



function draw() {
  background(204, 255, 204);

  //lefs bounce against each others and against pandas
  leafGroup.bounce(leafGroup);
  leafGroup.bounce(pandaGroup);

  //all sprites bounce at the screen edges
  for (var i = 0; i < allSprites.length; i++) {
    var s = allSprites[i];
    if (s.position.x < 0) {
      s.position.x = 1;
      s.velocity.x = abs(s.velocity.x);
    }

    if (s.position.x > width) {
      s.position.x = width - 1;
      s.velocity.x = -abs(s.velocity.x);
    }

    if (s.position.y < 0) {
      s.position.y = 1;
      s.velocity.y = abs(s.velocity.y);
    }

    if (s.position.y > height) {
      s.position.y = height - 1;
      s.velocity.y = -abs(s.velocity.y);
    }
  }

  drawSprites();

}
