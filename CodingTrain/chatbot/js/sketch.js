function setup() {
  // put setup code here
  noCanvas();
  let speech = new p5.Speech();
  speech.speak('Coding Train');
  console.log(speech.voices);
}

function draw() {
  // put drawing code here
}