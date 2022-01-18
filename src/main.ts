import '@app/style.css';

import Board from '@app/Board';

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

  const resolution: number = 1; // 1 point = 10px x 10px
  const boardDimensions: [number, number] = Board.getBoardDimension(height, width, resolution);
  const cells: number[][] = getCells(boardDimensions);

  // eslint-disable-next-line
  console.log(boardDimensions);

  context.fillStyle = 'red';

  Board.drawCells(
    context,
    cells,
    resolution
  );
});
