import { GameGridCell } from "./game-grid-cell";

export class GameGrid {
    columns: GameGridCell[];

    constructor(width: number, height: number) {
        this.columns = new GameGridCell[width];

    }


}