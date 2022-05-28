const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

init();

function init() {
  drawBackground();

  canvas.addEventListener('mousemove', (event) => {
    const { left: viewportLeft, top: viewportTop } =
      canvas.getBoundingClientRect();

    const mouseX = event.clientX - viewportLeft;
    const mouseY = event.clientY - viewportTop;

    drawBackground();
    drawCircle(mouseX, mouseY);
  });
}

function drawBackground() {
  context.fillStyle = 'skyblue';
  context.fillRect(0, 0, canvas.width, canvas.height);
}

function drawCircle(x, y) {
  context.beginPath();
  context.fillStyle = 'white';
  context.arc(x, y, 50, 0, Math.PI * 2, true);
  context.fill();
}
