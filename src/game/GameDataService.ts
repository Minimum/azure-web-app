import GameData from "./GameData";
import GameDal from "./GameDal";

class GameDataService {
    private static instance: GameDataService;

    private _gameData: GameData | null = null;
    private _gameDal: GameDal;

    private constructor() {
        this._gameDal = new GameDal();
        this._gameData = null;
    }

    public initialize() : void {
        this._gameData = this._gameDal.loadFromStorage() ?? this._gameDal.loadDefault();
    }

    public save() : void {
        this._gameDal.saveToStorage(this._gameData as GameData);
    }

    public get gameData(): GameData {
        if (this._gameData === null) {
            this.initialize();
        }

        return this._gameData ?? new GameData();
    }

    public static getInstance(): GameDataService {
        if(!GameDataService.instance) {
            GameDataService.instance = new GameDataService();
        }

        return GameDataService.instance;
    }
}

export default GameDataService;