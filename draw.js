let coor = document.getElementById('coordinate');
let canvas = document.getElementById("canvas");
let ctx = canvas.getContext('2d');
let scale = 20;
let rows = canvas.height / scale;
let columns = canvas.width / scale;
let keys = {};
let jump = false;
let moveSpeed = 0.42145;

(function setup() {
  ball = new Ball();
  levels = new Levels();
  levels.init();
  ball.init();

  window.setInterval(() => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ball.draw();
    levels.draw();
    coor.innerHTML = 'x:' + ball.x + ' y:' + ball.y+ ' ' + colision('left')
  }, 1000 / 60);

  window.setInterval(() => {
    ball.move();
    if (jump) {
      ball.move.jump();
    } else if (!jump) {
      ball.fall();
    }
  }, 5);
}())

window.addEventListener('keydown', ((evt) => {
  keys[evt.code] = true;

}))

window.addEventListener('keyup', ((evt) => {
  keys[evt.code] = false;
}))