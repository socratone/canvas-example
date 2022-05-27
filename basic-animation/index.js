const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

init();

function init() {
  let x = 0;
  let y = 200;
  const SPEED = 5;
  let direction = 'right';

  setInterval(() => {
    drawBackground();
    drawCircle(x, y);

    if (x > 400) {
      direction = 'left';
    } else if (x < 0) {
      direction = 'right';
    }

    if (direction === 'right') {
      x += SPEED;
    } else {
      x -= SPEED;
    }
  }, 10);
}

function drawBackground() {
  context.fillStyle = 'skyblue';
  context.fillRect(0, 0, canvas.width, canvas.height);
}

function drawCircle(x, y) {
  context.beginPath();
  context.fillStyle = 'white';
  context.arc(x, y, 10, 0, Math.PI * 2, true);
  context.fill();
}
