// var xoff1 = 0;
// var xoff2 = 10000;
var inc = 0.01;
var start = 0; 

function setup() {
  createCanvas(300, 300);
}

function draw() {
  background(180, 180, 180);
  // var x = random(width);
  // var x = map(noise(xoff1), 0, 1, 0, width);
  // var y = map(noise(xoff2), 0, 1, 0, height);
  // xoff1 += 0.02;
  // xoff2 += 0.02;
  // stroke(225);
  // strokeWeight(2);
  // fill(236);
  // ellipse(x, y, 24, 24);
  stroke(255);
  noFill();
  beginShape();
  var xoff = start;
  for (var x =0; x < width; x++) {
    stroke(255);
    var n = map(noise(xoff), 0, 1, 0, height);
    var s = map(sin(xoff), -1, 1, -50, 50);
    var y = s + n;
    // var y = random(height);
    // var y = noise(xoff) * 100 + height / 2 + sin(xoff) * height;
    vertex(x, y);
    
    xoff += inc;
  }
  endShape();
  start += 0.01;
  // noLoop();
  
}