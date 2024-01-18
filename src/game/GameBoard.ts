import GameCell from "./GameCell";

class GameBoard {
    private _id: number;
    private _name: string;
    private _desc: string;
    private _author: string;
    private _authorDate: Date;
    private _cells: GameCell[];
    public readonly width: number;
    public readonly height: number;

    constructor(width: number, height: number) {
        this._id = 0;
        this._name = "";
        this._desc = "";
        this._author = "";
        this._authorDate = new Date();
        this._cells = [];
        this.width = width;
        this.height = height;
    }

    public getCells() : GameCell[] {
        return this.cells;
    }

    public addCell(cell : GameCell) : void {
        this.cells.push(cell);
    }

    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get authorDate(): Date {
        return this._authorDate;
    }

    set authorDate(value: Date) {
        this._authorDate = value;
    }
    get author(): string {
        return this._author;
    }

    set author(value: string) {
        this._author = value;
    }
    get desc(): string {
        return this._desc;
    }

    set desc(value: string) {
        this._desc = value;
    }

    get cells(): GameCell[] {
        return this._cells;
    }
}

export default GameBoard;