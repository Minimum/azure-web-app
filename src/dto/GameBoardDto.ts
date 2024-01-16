import GameCell from "../game/GameCell";
import GameBoard from "../game/GameBoard";

class GameBoardDto {
    public id: number;
    public name: string;
    public desc: string;
    public author: string;
    public authorDate: Date;
    public cells: GameCell[];
    public width: number;
    public height: number;

    constructor(board: GameBoard | undefined) {
        if(board !== undefined) {
            this.id = board.id;
            this.name = board.name;
            this.desc = board.desc;
            this.author = board.author;
            this.authorDate = board.authorDate;
            this.cells = board.getCells();
            this.width = board.width;
            this.height = board.height;
        }
        else {
            this.id = 0;
            this.name = "";
            this.desc = "";
            this.author = "";
            this.authorDate = new Date();
            this.cells = [];
            this.width = 0;
            this.height = 0;
        }
    }
}

export default GameBoardDto;