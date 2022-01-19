function getCells(dimensions: [number, number]): number[][] {
  const generateRow: any = (): number[] =>
    [...Array(dimensions[0])]
      .reduce(
        (row: number[]): number[] => [...row, Math.random() < 0.5 ? 0 : 1],
        []
      );

  return [...Array(dimensions[1])]
    .reduce(
      (board: number[][]): number[][] => [...board, generateRow()],
      []
    );
}


function getCellNeighboors(
  point: [number, number],
  cells: number[][]
): number[][] {
  const maybeNeighboors: number[][] = [
    // left
    [point[0] - 1, point[1] - 1],
    [point[0], point[1] - 1],
    [point[0] + 1, point[1] - 1],
    // top - bottom
    [point[0] - 1, point[1]],
    [point[0] + 1, point[1]],
    // right
    [point[0] - 1, point[1] + 1],
    [point[0], point[1] + 1],
    [point[0] + 1, point[1] + 1],
  ];

  return maybeNeighboors.filter((neighboor: any): boolean => {
    return Boolean(cells[neighboor[0]] && cells[neighboor[0]][neighboor[1]]);
  });
}

function updateCells(
  cells: number[][],
  shadowCells: number[][],
  cellsClone: number[][]
): void {
  cells.map((row: any, rowIndex: number): void => {
    row.map((column: any, columnIndex: number): void => {
      const neighboors: number[][] = getCellNeighboors(
        [rowIndex, columnIndex],
        cells
      );
      const { length: neighboorsCount, } = neighboors;

      if (cells[rowIndex][columnIndex] === 1
        && shadowCells[rowIndex][columnIndex] === 0) {
        shadowCells[rowIndex][columnIndex] = 1;
      }

      if (neighboorsCount >= 4
        || neighboorsCount < 2) {
        cellsClone[rowIndex][columnIndex] = 0;
      }

      if (neighboorsCount === 3
        && cells[rowIndex][columnIndex] === 0) {
        cellsClone[rowIndex][columnIndex] = 1;
      }
    });
  });
}

export default {
  getCells,
  updateCells,
};
