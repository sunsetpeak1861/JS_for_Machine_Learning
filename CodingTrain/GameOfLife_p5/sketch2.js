
let angle = 45;
let xradius = 200;
let yradius = 100;
let stepsize = 15;
let slider;

function setup() {
  createCanvas(600, 400);
  angleMode(DEGREES);
  slider = createSlider(5, 100, 5);
}


function draw() {
  background(220);
  translate(width / 2, height / 2);
  // radius = random(50, 100);
  strokeWeight(1);
  noFill();
  stepsize = slider.value();
  beginShape();
  let a = 0;
  
  for (let angle = 0; angle < 360; angle+=stepsize) {
    let offset = abs(sin(a)) * 20;
    xradius = 200 + offset;
    yradius = 100 + offset;
    let x = xradius * cos(angle);
    let y = yradius * sin(angle);
    vertex(x, y);
    a = a + 55;
    // point(x, y);
  }
  endShape(CLOSE);
  // fill(255, 0, 0);
  // rect(-200, -200, 10, 10);
}