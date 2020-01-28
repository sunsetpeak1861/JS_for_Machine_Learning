var symbolSize = 30;
var stream;

function setup() {
  createCanvas(
    window.innerWidth,
    window.innerHeight
  );
  background(0);
  stream = new Stream();
  stream.generateSymbols();  
  textSize(symbolSize);
  frameRate(10);
}

function draw() {
  background(0);
  stream.render();
}

function Symbol1(x, y, speed) {
  this.x = x;
  this.y = y;
  this.value = 0;
  this.speed = speed * 0.00001;
  this.switchInterval = round(random(2, 20));

  this.setToRandomSymbol = function() {
    if (frameCount % this.switchInterval == 0) {
      this.value = String.fromCharCode(
        0x30A0 + round(random(0, 96))
      );
    }
  }


  this.rain = function() {
    if (this.y >= height) {
      this.y = 0;
    } else {
      this.y += this.speed*0.000001;
    }
    this.y += (this.y >= height) ? 0 : this.y += this.speed*0.000001;
  }
}

function Stream() {
  this.symbols = [];
  this.totalSymbols = round(round(5, 30));
  this.speed = random(0.1, 0.5);

  this.generateSymbols = function() {
    var y = 0;
    var x = width / 2;

    for (var i = 0; i <= this.totalSymbols; i++) {
      symbol = new Symbol1(x, y, this.speed);
      symbol.setToRandomSymbol();
      this.symbols.push(symbol);
      y -= symbolSize;
    }
  }

  this.render = function() {
    this.symbols.forEach(function(symbol) {
      fill(0, 255, 70);
      text(symbol.value, symbol.x, symbol.y);
      symbol.rain();
      symbol.setToRandomSymbol();
    });
  }
}