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


    // act
    gameGrid.printOut();
});

