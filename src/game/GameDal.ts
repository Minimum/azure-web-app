import GameData from "./GameData";
import defaultData from "../defaultGameData.json"
import GameBoard from "./GameBoard";
import GameCell from "./GameCell";

class GameDal {
    public deserialize(data: string): GameData {
        let gameData: GameData = JSON.parse(data);

        return gameData;
    }

    public loadFromStorage(): GameData | null {
        let data: string | null = localStorage.getItem("gameData");
        let gameData: GameData | null = null;

        if(data !== null) {
            let gameDataShell: GameData = this.deserialize(data);

            gameData = this.buildData(gameDataShell);

            console.log(gameData);
        }

        return gameData;
    }

    public loadDefault = (): GameData => this.buildData(defaultData);

    public saveToStorage(data: GameData): void {
        localStorage.setItem("gameData", JSON.stringify(data));
    }

    public exportData(data: GameData): void {
        let blob: Blob = new Blob([JSON.stringify(data)], {type: "application/json"});
        let url: string = URL.createObjectURL(blob);

        window.location.replace(url);
    }

    private buildData(gameDataShell: any): GameData {
        let boards: GameBoard[] = [];
        let gameData: GameData = new GameData(gameDataShell._boardSequence, gameDataShell._lastLoaded);

        console.log(gameDataShell);

        gameDataShell.boards.forEach((boardData: any): void => {
            boards[boardData._id] = this.buildBoard(boardData);
        });

        gameData.boards = boards;

        return gameData;
    }

    private buildBoard(boardData: any): GameBoard {
        let board: GameBoard = new GameBoard(boardData.width, boardData.height);

        board.id = boardData._id;
        board.name = boardData._name;
        board.desc = boardData._desc;
        board.author = boardData._author;
        board.authorDate = new Date(boardData._authorDate);

        if(boardData._cells !== undefined) {
            boardData._cells.forEach((cellData: any): void => {
                board.addCell(new GameCell(cellData.xPosition, cellData.yPosition, cellData.value));
            });
        }

        return board;
    }
}

export default GameDal;