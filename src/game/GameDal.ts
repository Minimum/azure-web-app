import GameData from "./GameData";
import defaultData from "../defaultGameData.json"
import GameBoard from "./GameBoard";

class GameDal {
    public deserialize(data: string): GameData {
        let gameData: GameData = JSON.parse(data);

        return gameData;
    }

    public loadFromStorage(): GameData | null {
        let data: string | null = localStorage.getItem("gameData");
        let gameData: GameData | null = null;

        if(data != null) {
            gameData = this.deserialize(data);
        }

        return gameData;
    }

    public loadDefault(): GameData {
        let gameData: GameData = new GameData(defaultData.boardSequence);

        defaultData.boards.forEach((boardData) => {
            let board: GameBoard = new GameBoard(boardData.width, boardData.height);

            board.id = boardData.id;
            board.name = boardData.name;
            board.desc = boardData.desc;
            board.author = boardData.author;
            board.authorDate = new Date(boardData.authorDate);
            boardData.cells.forEach((cellData) => {
                board.addCell(cellData);
            });

            gameData.addBoard(board);
        });

        return gameData;
    }

    public saveToStorage(data: GameData): void {
        localStorage.setItem("gameData", JSON.stringify(data));
    }

    public exportData(data: GameData): void {
        let blob: Blob = new Blob([JSON.stringify(data)], {type: "application/json"});
        let url: string = URL.createObjectURL(blob);

        window.location.replace(url);
    }
}

export default GameDal;