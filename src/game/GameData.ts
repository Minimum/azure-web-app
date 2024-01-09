import GameBoard from "./GameBoard";

class GameData {
    protected boardSequence: number;
    public boards: GameBoard[];

    constructor(boardSequence?: number) {
        this.boardSequence = boardSequence ?? 0;
        this.boards = [];
    }

    public addBoard(board : GameBoard): void {
        this.boards.push(board);
    }

    public getNextBoardId(): number {
        return this.boardSequence++;
    }
}

export default GameData;