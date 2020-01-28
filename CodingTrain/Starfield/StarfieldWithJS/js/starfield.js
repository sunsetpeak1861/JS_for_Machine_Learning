
var stars = [];
var speed;

class Star {
  constructor() {
    this.x = random(-width, width);
    this.y = random(-height, height);
    this.z = random(width);
    this.pz = this.z;
  }
  update() {
    this.z = this.z - speed;
    if (this.z < 1) {
      this.z = width;
      this.x = random(-width, width);
      this.y = random(-height, height);
      this.pz = this.z;
    }
  }

  show() {
    fill(255);
    noStroke();

    var sx = map(this.x/this.z, 0, 1, 0, width);
    var sy = map(this.y/this.z, 0, 1, 0, height);
    var r = map(this.z, 0, width, 12, 0);
    // ellipse(sx, sy, r, r);

    var px = map(this.x/this.pz, 0, 1, 0, width);
    var py = map(this.y/this.pz, 0, 1, 0, height);
    this.pz = this.z;

    stroke(255);
    line(px, py, sx, sy);
  }
}

function setup() {
  createCanvas(600, 600);
  star = new Star();

  // Create an array of 1600 star objects
  for (var i = 0; i < 1600; i++) {
    stars[i] = new Star();

    // This also works to populate the array
    // star = new Star();
    // append(stars, star);
  }
}

function draw() {
  speed = map(mouseX, 0, width, 5, 30);
  background(0);
  translate(width/2, height/2);

  for (var i = 0; i < stars.length; i++) {
    stars[i].update();
    stars[i].show();
  }
}
