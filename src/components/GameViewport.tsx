import {Component} from "react";
import GameBoard from "../game/GameBoard";

type GameViewportProps = {
    board: GameBoard;
}

type GameViewportState = {
    board: GameBoard;
}

class GameViewport extends Component<GameViewportProps, GameViewportState> {
    state: GameViewportState = {
        board: this.props.board
    }

<<<<<<< HEAD
=======
    constructor(props: GameViewportProps) {
        super(props);
    }

>>>>>>> master
    public render() {
        return (
            <div className="ringMod-viewport">
                Game Viewport
            </div>
        );
    }
}

export default GameViewport;