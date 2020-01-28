let num = 37555;
console.log('test');

function setup() {
  noCanvas();

  let button = select('#submit');
  let user_input = select('#user_input');
  let output = select('#output');

  button.mousePressed(chat);

  function chat() {
    let input = user_input.value();
    output.html(input);
  }

}
