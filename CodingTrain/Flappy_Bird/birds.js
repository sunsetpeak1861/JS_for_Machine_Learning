function Bird() {
  this.y = height/2;
  this.x = 64;
  
  this.gravity = 0.6;
  this.lift = -2; 
  this.velocity = 0;
  
  this.show = function() {
    // eye
    fill(255);
    ellipse(this.x, this.y, 32, 32);
    fill(0);
    ellipse(this.x+2, this.y-3, 16, 16);
    // let img;
    // img = createImg(
    //   'https://p5js.org/assets/img/asterisk-01.png',
    //   // 'the p5 magenta asterisk'
      
    // );
    // img.resize(50, 100);
    
  }
  
  this.up = function() {
    this.velocity += this.lift*10;
  }
  
  this.update = function() {
    this.velocity += this.gravity;
    this.velocity *= 0.9; 
    this.y += this.velocity;
    
    if (this.y > height) {
      this.y = height;
      this.velocity = 0;
    }
     if (this.y < 0) {
      this.y = 0;
      this.velocity = 0;
    } 
  }
  
  
}