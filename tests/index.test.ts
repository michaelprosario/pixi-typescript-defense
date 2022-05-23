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
    gameGrid.setGridCell(10, 5, GameGridCellContent.Wall);
    gameGrid.setGridCell(10, 6, GameGridCellContent.Wall);
    gameGrid.setGridCell(10, 7, GameGridCellContent.Wall);
    gameGrid.setGridCell(10, 8, GameGridCellContent.Wall);
    gameGrid.setGridCell(10, 9, GameGridCellContent.Wall);

    // act
    gameGrid.printOut();

    // assert
    expect(gameGrid.grid[10][5]).toBe(GameGridCellContent.Wall);
});

