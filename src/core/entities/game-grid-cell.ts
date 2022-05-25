
export enum GameGridCellContent {
    Empty, Wall
}

export class GameGridCell {
    content: GameGridCellContent;
    explored: boolean;

    constructor(public col: number, public row: number) {
        this.content = GameGridCellContent.Empty;
        this.explored = false;
    }
}