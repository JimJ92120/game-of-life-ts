import '@app/style.css';

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

function getCells(dimensions: [number, number]) : number[][] {
  const generateRow: any = () : number[] =>
    [...Array(dimensions[0])]
      .reduce(
        (row: number[]) : number[] => [...row, Math.random() < 0.5 ? 0 : 1],
        []
      );

  return [...Array(dimensions[1])]
    .reduce(
      (board: number[][]) : number[][] => [...board, generateRow()],
      []
    );
}

window.addEventListener('load', () => {
  const canvas: HTMLCanvasElement = document.querySelector('#scene');
  if (!canvas) return;

  const context: CanvasRenderingContext2D = canvas.getContext('2d');
  if (!context) return;

  const clientRect: DOMRect = document.documentElement.getBoundingClientRect();
  const { height, width } = clientRect;

  resizeCanvas(canvas, context, height, width);

  let resolution: number = 10; // 1 point = 10px x 10px
  let boardDimensions: [number, number] = Board.getBoardDimension(height, width, resolution);
  let cells: number[][] = getCells(boardDimensions);

  context.fillStyle = 'red';
  Board.drawCells(
    context,
    cells,
    resolution
  );

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
    cells = getCells(boardDimensions);
    // remove loader here

    resolutionReadControl.value = String(resolution);
    heightReadControl.value = String(boardDimensions[1]);
    widthReadControl.value = String(boardDimensions[0]);

    context.clearRect(0, 0, width, height);

    Board.drawCells(
      context,
      cells,
      resolution
    );
  });
});
