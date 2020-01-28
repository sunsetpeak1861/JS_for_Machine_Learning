let slider;
let phase = 0;
let zoff = 0;

function setup() {
  createCanvas(400, 400);
  slider = createSlider(0, 10, 1, 0.1);
}

function draw() {
  background(215, 220, 215);
  translate(width / 2, height / 2);
  stroke(195);
  strokeWeight(4);
  fill(215);
  let t = 0;
  beginShape();
  let noiseMax = slider.value();
  for (let a = 0; a < TWO_PI; a += 0.03) {
    let xoff = map(cos(a + phase), -1, 1, 0, noiseMax);
    let yoff = map(sin(a + phase), -1, 1, 0, noiseMax);
    let r = map(noise(xoff, yoff, zoff), 0, 1, 100, 200);
    let x = r * cos(a);
    let y = r * sin(a);
    vertex(x, y);
  }
  endShape(CLOSE);
  // phase += 0.02;
  // noLoop();
  zoff += 0.004;
}