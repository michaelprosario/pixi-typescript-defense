
export enum GameGridCellContent {
    Empty, Wall
}

export class GameGridCell {
    content: GameGridCellContent;

    constructor() {
        this.content = GameGridCellContent.Empty;
    }
}