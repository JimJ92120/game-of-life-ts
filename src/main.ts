import '@app/style.css';

function resizeCanvas(
  canvas: HTMLCanvasElement,
  context: CanvasRenderingContext2D,
  height: number,
  width: number
) : void {
  canvas.width = width;
  canvas.height = height;

  context.clearRect(0, 0, width, height);
}

window.addEventListener('load', () => {
  const canvas: HTMLCanvasElement = document.querySelector('#scene');
  if (!canvas) return;

  const context: CanvasRenderingContext2D = canvas.getContext('2d');
  if (!context) return;

  const clientRect: DOMRect = document.documentElement.getBoundingClientRect();
  const { height, width } = clientRect;

  resizeCanvas(canvas, context, height, width);
});
