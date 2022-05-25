import { GameGrid } from "../src/core/entities/game-grid";
import { GameGridCellContent } from "../src/core/entities/game-grid-cell";

test("GameGrid setup", () => {
    // arrange
    // act
    let gameGrid = new GameGrid(30, 20);


    // assert
    expect(gameGrid.width).toBe(30);
    expect(gameGrid.height).toBe(20);
});

test("GameGrid__setContent__testValidInputs", () => {
    // arrange
    let gameGrid = new GameGrid(30, 20);

    // act
    gameGrid.setGridCell(10, 5, GameGridCellContent.Wall);

    // assert
    expect(gameGrid.grid[10][5]).toBe(GameGridCellContent.Wall);
});

test("GameGrid__printOut", () => {
    // arrange
    let gameGrid = new GameGrid(30, 20);
    createTestGrid(gameGrid);

    // act
    gameGrid.printOut();
});

test("GameGrid__getAdjacentCells__UpperLeftCell", () => {
    let gameGrid = new GameGrid(30, 20);
    createTestGrid(gameGrid);
    let response = gameGrid.getAdjacentCells(0, 0);
    expect(response.length).toBe(2);
});

test("GameGrid__getAdjacentCells__LowerRightCell", () => {
    let gameGrid = new GameGrid(30, 20);
    createTestGrid(gameGrid);
    let response = gameGrid.getAdjacentCells(29, 19);
    expect(response.length).toBe(1);
});

test("GameGrid__getAdjacentCells__UpperRightCell", () => {
    let gameGrid = new GameGrid(30, 20);
    createTestGrid(gameGrid);
    let response = gameGrid.getAdjacentCells(29, 0);
    expect(response.length).toBe(2);
});


function createTestGrid(gameGrid: GameGrid) {
    for (let i = 0; i < 18; i++) {
        gameGrid.setGridCell(5, i, GameGridCellContent.Wall);
        gameGrid.setGridCell(15, i, GameGridCellContent.Wall);
        gameGrid.setGridCell(25, i, GameGridCellContent.Wall);
    }

    for (let i = 20; i > 2; i--) {
        gameGrid.setGridCell(8, i, GameGridCellContent.Wall);
        gameGrid.setGridCell(18, i, GameGridCellContent.Wall);
        gameGrid.setGridCell(28, i, GameGridCellContent.Wall);
    }
}
/*

given
- upper left cell
when
- get adjacent cells

then
- return cell to the right
- return cell below

===


given
- lower right cell
when
- get adjacent cells

then
- return cell to the left
- return cell upper

===


given
- cell 2 2
when
- get adjacent cells

then
- return cell to top
- return cell to bottom
- return cell to left
- return cell to right

===

given
- cell 4 4
when
- get adjacent cells

then
- return cell to top
- return cell to left
- return cell to right


*/