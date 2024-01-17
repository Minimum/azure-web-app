import GameBoard from "./GameBoard";

class GameData {
    public boards: GameBoard[];
    private _boardSequence: number;
    private _lastLoaded: number;

    constructor(boardSequence?: number, lastLoaded?: number) {
        this.boards = [];
        this._boardSequence = boardSequence ?? 0;
        this._lastLoaded = lastLoaded ?? 0;
    }

    public addBoard(board : GameBoard): void {
        this.boards.push(board);
    }

    public getNextBoardId(): number {
        return this._boardSequence++;
    }

    public getLastLoadedBoard(): GameBoard {
        return this.boards[this._lastLoaded];
    }

    get boardSequence(): number {
        return this._boardSequence;
    }

    get lastLoaded(): number {
        return this._lastLoaded;
    }

    set lastLoaded(value: number) {
        this._lastLoaded = value;
    }
}

export default GameData;