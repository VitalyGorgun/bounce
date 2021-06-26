function Ball() {
  let ballSprite = new Image();
  ballSprite.src = 'sprites/ballSprite3.png';

  this.init = function () {
    this.x = levels.level.ballDefaultPosition[0];
    this.y = levels.level.ballDefaultPosition[1];
    ctx.drawImage(ballSprite, this.x, this.y, scale, scale);
  }

  this.draw = function () {
    ctx.drawImage(ballSprite, this.x, this.y, scale, scale);
  }

  this.move = function () {
    keys.Space ? jump = true : false;

    keys.ArrowLeft && colision('left') ? this.x -= moveSpeed : false;
    keys.ArrowRight && colision('right') ? this.x += moveSpeed : false;

    this.move.jump = function () {
      let x = 0;
      let jumpTimer = setInterval(() => {
        x++;
        if (!(levels.level.wall.find(x => x.x > ball.x - 20 &&
            x.x < ball.x + 20 && x.y == ball.y - 20))) {
          ball.y -= 1;
        }
        if (x == 3) {
          clearInterval(jumpTimer)
          jump = false;
        };
      }, 100)
    }
  }

  this.fall = function () {
    if (!(levels.level.wall.find(x => x.x > ball.x - 20 &&
        x.x < ball.x + 20 && x.y == ball.y + 20))) {
      this.y += 1;
    }
  }
}

function colision(direction) {
  switch (direction) {
    case 'left':
      if (levels.level.wall.find(x =>
          ball.y - scale < x.y && ball.y + scale > x.y &&
          ball.x - moveSpeed - scale <= x.x && ball.x + scale > x.x)) {
        return false;
      } else {
        return true;
      };
    case 'right':
      if (levels.level.wall.find(x =>
        x.y > ball.y - 20 &&  x.y < ball.y + 20 &&
        x.x == ball.x + 20)) {
      return false;
    } else {
      return true;
    };
  }

}