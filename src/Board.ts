function getBoardDimension(
  height: number,
  width: number,
  resolution: number
) : [number, number] {
  return [
    Math.floor(width / resolution),
    Math.floor(height / resolution)
  ];
}

function drawRecursively(
  context: CanvasRenderingContext2D,
  rowIndex: number,
  row: number[],
  resolution: number
) : void {
  row.forEach((column: any, columnIndex: number) : void => {
    if (0 === column) return;

    context.fillRect(
      columnIndex * resolution,
      rowIndex * resolution,
      resolution,
      resolution
    );
  });
}

function drawCells(
  context: CanvasRenderingContext2D,
  cells: number[][],
  resolution: number
) : void {
  cells.forEach((row: any, rowIndex: number) : void => drawRecursively(
    context,
    rowIndex,
    row,
    resolution
  ));
}
export default {
  getBoardDimension,
  drawCells,
};

