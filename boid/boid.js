console.log("test");

window.onload = function() {
  // 定数設定
  var canvas = document.getElementById("world");
  var ctx = canvas.getContext("2d");
  var fps = 50;
  var canvas_size = 300;
  var num_objects = 100;
  var away_distance = 6;
  var objects = [];
  var max_speed = 5;
  var ball_size = 3;

  // 球オブジェクト
  class Ball {
    constructor(name, x, y) {
      this.name = name;
      this.x = x;
      this.y = y;
      this.vx = 1;
      this.vy = 1;
    }
    // 結合
    cohesion() {
      let center = { x: 0, y: 0 };
      for (let obj of objects) {
        if (obj.name != this.name) {
          center.x += obj.x;
          center.y += obj.y;
        }
      }
      center.x /= objects.length - 1;
      center.y /= objects.length - 1;
      this.vx += (center.x - this.x) / 100;
      this.vy += (center.y - this.y) / 100;
    }
    // 分離
    separation() {
      for (let obj of objects) {
        if (obj.name != this.name) {
          let d = distance(obj,this);
          if (d < away_distance) {
            this.vx -= obj.x - this.x;
            this.vy -= obj.y - this.y;
          }
        }
      }
    }
    // 整列
    alignment() {
      var average = { vx: 0, vy: 0 };
      for (let obj of objects) {
        if (obj.name != this.name) {
          average.vx += obj.vx;
          average.vy += obj.vy;
        }
      }
      average.vx /= objects.length - 1;
      average.vy /= objects.length - 1;
      this.vx += (average.vx - this.vx) / 8;
      this.vy += (average.vy - this.vy) / 8;
    }
    draw() {
      this.move();
      ctx.fillStyle = "rgba(33, 33, 33, 0.8)";
      ctx.beginPath();
      ctx.arc(this.x, this.y, ball_size, 0, Math.PI * 3, false);
      ctx.fill();
    }
    move() {
      let speed = Math.sqrt(this.vx ** 2 + this.vy ** 2);
      this.cohesion();
      this.separation();
      this.alignment();
      if (speed >= max_speed) {
        let deceleration = max_speed / speed;
        this.vx *= deceleration;
        this.vy *= deceleration;
      }
      if (
        (this.x < 0 && this.vx < 0) ||
        (this.x > canvas_size && this.vx > 0)
      ) {
        this.vx *= -1;
      }
      if (
        (this.y < 0 && this.vy < 0) ||
        (this.y > canvas_size && this.vy > 0)
      ) {
        this.vy *= -1;
      }
      this.x += this.vx;
      this.y += this.vy;
    }
  }

  // 距離取得
  var distance = function (obj1, obj2) {
    var x = Math.abs(obj1.x - obj2.x);
    var y = Math.abs(obj1.y - obj2.y);
    return Math.sqrt(x ** 2 + y ** 2);
  };

  // canvas更新
  var update = function() {
    ctx.clearRect(0, 0, canvas_size, canvas_size);
    for (let obj of objects) {
      obj.draw();
    }
  };

  // 初期設定
  canvas.width = canvas.height = canvas_size;
  for (let i = 0; i < num_objects; i++) {
    objects[i] = new Ball(
      i,
      Math.random() * canvas_size,
      Math.random() * canvas_size
    );
  }
  this.setInterval(update, 1000 / fps);
};