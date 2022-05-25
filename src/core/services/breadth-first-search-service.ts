import { GameGrid } from "../entities/game-grid";
import { GameGridCell } from "../entities/game-grid-cell";
import { Point2D } from "../entities/point";
import { Queue } from "./queue";

export class BreadthFirstSearchService {

    execute(gameGrid: GameGrid, startCell: Point2D, goalCell: Point2D) {
        gameGrid.resetExploreFlags();
        let queue = new Queue();
        let rootCell = gameGrid.getCellFromPoint(startCell);
        rootCell.explored = true;
        queue.enqueue(rootCell);

        while (queue.length > 0) {
            let currentCell = queue.dequeue() as GameGridCell;

            // if we found the goal cell
            if (currentCell.col == goalCell.x && currentCell.row == goalCell.y) {
                return currentCell;
            }

            let neighbors = gameGrid.getAdjacentCells(currentCell.col, currentCell.row);
            for (const cell of neighbors) {
                if (!cell.explored) {
                    cell.explored = true;
                    cell.parentCell = currentCell;
                    queue.enqueue(cell);
                }
            }

        }
    }
}