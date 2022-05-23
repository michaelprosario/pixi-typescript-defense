import { Guard } from "../services/guard";
import { GameGridCell, GameGridCellContent } from "./game-grid-cell";

export class GameGrid {

    grid: any[];
    width: number;
    height: number;

    constructor(width: number, height: number) {
        if (width < 10) {
            throw "width is less than 10";
        }

        if (height < 10) {
            throw "height is less than 10";
        }

        this.grid = new Array(width);
        this.width = width;
        this.height = height;

        let col = 0;
        let row = 0;
        for (col = 0; col < width; col++) {
            this.grid[col] = new Array(height);
        }

        for (col = 0; col < width; col++) {
            for (row = 0; row < height; row++) {
                this.grid[col][row] = new GameGridCell();
            }
        }

    }

    setGridCell(col: number, row: number, content: GameGridCellContent) {
        if (col < 0)
            throw "col is negative";
        if (col > this.width)
            throw "col is too large"

        if (row < 0)
            throw "row is negative";

        if (row > this.height) {
            throw "row is too large"
        }

        this.grid[col][row] = content;
    }

    printOut() {
        let col = 0;
        let row = 0;

        let content = "";
        for (row = 0; row < this.height; row++) {
            let line = "";
            for (col = 0; col < this.width; col++) {
                if (this.grid[col][row].content == GameGridCellContent.Empty) {
                    line += "-";
                } else {
                    line += "*";
                }
            }

            content += line + "\n";
        }

        console.log(content);
    }


}