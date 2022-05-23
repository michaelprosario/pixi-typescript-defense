
export enum GameGridCellContent {
    Empty, Wall
}

export class GameGridCell {
    content: GameGridCellContent;
    explored: boolean;

    constructor() {
        this.content = GameGridCellContent.Empty;
        this.explored = false;
    }
}