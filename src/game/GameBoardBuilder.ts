import GameBoard from "./GameBoard";
import GameCell from "./GameCell";
import GameCellCompute from "./GameCellCompute";

class GameBoardBuilder {
    protected startBoard : GameBoard;
    protected endBoard : GameBoard;
    protected computeCells : GameCellCompute[][];

    constructor(startBoard : GameBoard) {
        this.startBoard = startBoard;
        this.endBoard = new GameBoard(startBoard.width, startBoard.height);
        this.computeCells = [];
    }

    public build() : void {
        for(let x : number = 0; x < this.startBoard.width; x++) {
            this.computeCells[x] = [];
        }

        let cells : GameCell[] = this.startBoard.getCells();

        for (let i : number = 0; i < cells.length; i++) {
            let cell : GameCell = cells[i];
            let computeCell : GameCellCompute;

            if(this.computeCells[cell.xPosition][cell.yPosition] === undefined) {
                computeCell = new GameCellCompute(cell.xPosition, cell.yPosition, cell.getValue());

                this.computeCells[cell.xPosition][cell.yPosition] = computeCell;
            }
            else {
                computeCell = this.computeCells[cell.xPosition][cell.yPosition];

                computeCell.setValue(cell.getValue());
            }

            this.incrementCell(cell.xPosition - 1, cell.yPosition - 1);
            this.incrementCell(cell.xPosition - 1, cell.yPosition);
            this.incrementCell(cell.xPosition - 1, cell.yPosition + 1);
            this.incrementCell(cell.xPosition, cell.yPosition - 1);
            this.incrementCell(cell.xPosition, cell.yPosition + 1);
            this.incrementCell(cell.xPosition + 1, cell.yPosition - 1);
            this.incrementCell(cell.xPosition + 1, cell.yPosition);
            this.incrementCell(cell.xPosition + 1, cell.yPosition + 1);
        }

        for(let x : number = 0; x < this.startBoard.width; x++)
        {
            for(let y : number = 0; y < this.startBoard.height; y++)
            {
                let computeCell : GameCellCompute = this.computeCells[x][y];
                let alive : boolean = (computeCell !== undefined && computeCell.computeNextValue());

                if(alive) {
                    this.endBoard.addCell(new GameCell(x, y, alive));
                }
            }
        }
    }

    public incrementCell(xPosition : number, yPosition : number) : void {
        if(this.startBoard.width <= xPosition || this.startBoard.height <= yPosition) {
            return;
        }

        let cell : GameCellCompute = this.computeCells[xPosition][yPosition];

        if(cell === undefined) {
            cell = new GameCellCompute(xPosition, yPosition, false);
            this.computeCells[xPosition][yPosition] = cell;
        }

        cell.incrementLiveNeighbors();
    }
}

export default GameBoardBuilder;