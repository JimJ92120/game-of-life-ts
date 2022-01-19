import '@app/style.css';

import Cells from '@app/Cells';
import Board from '@app/Board';
import BoardControls from '@app/Controls/BoardControls';

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

  let resolution: number = 100; // 1 point = 10px x 10px
  let boardDimensions: [number, number] = Board.getBoardDimension(height, width, resolution);
  let cells: number[][] = Cells.getCells(boardDimensions);
  let shadowCells: number[][] = cells; // keep state for cells that have been alive at least once
  const updateBoard: any = (): void => {
    context.clearRect(0, 0, width, height);
    Board.drawCells(
      context,
      cells,
      resolution
    );
  };

  context.fillStyle = 'red';
  Board.drawCells(
    context,
    cells,
    resolution
  );

  // change with `requestAnimationFrame()`
  const loop: any = setInterval((): void => {
    const cellsClone: number[][] = JSON.parse(JSON.stringify(cells)); // do not copy reference

    Cells.updateCells(cells, shadowCells, cellsClone);

    if (JSON.stringify(cells) === JSON.stringify(cellsClone)) {
      clearInterval(loop);
      alert('Done.');

      return;
    }

    cells = cellsClone;

    updateBoard();
  }, 2000);

  // Controls (to move)
  const controls: HTMLElement = BoardControls.initControls(boardDimensions, resolution);
  const resolutionControl: HTMLElement = controls.querySelector('input[name="resolution"]');
  const infoControl: HTMLElement = controls.querySelector('.board-controls__info');
  // to change with custom events
  const resolutionReadControl: HTMLInputElement = infoControl.querySelector('input[name="resolution-read"]');
  const heightReadControl: HTMLInputElement = infoControl.querySelector('input[name="height-read"]');
  const widthReadControl: HTMLInputElement = infoControl.querySelector('input[name="width-read"]');

  document.body.appendChild(controls);
  resolutionControl.addEventListener('change', (event: any) : void => {
    resolution = Number(event.target.value);
    boardDimensions = Board.getBoardDimension(height, width, resolution);
    // start a loader here
    cells = Cells.getCells(boardDimensions);
    shadowCells = cells;
    // remove loader here

    resolutionReadControl.value = String(resolution);
    heightReadControl.value = String(boardDimensions[1]);
    widthReadControl.value = String(boardDimensions[0]);

    updateBoard();
  });
});
