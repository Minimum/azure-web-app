import React from 'react';
import '../App.css';

import {Grid} from "@jetbrains/ring-ui-built/components/grid/grid";
import Row from "@jetbrains/ring-ui-built/components/grid/row";
import Col from "@jetbrains/ring-ui-built/components/grid/col";

import BoardControls from "../components/BoardControls";
import GameDataService from "../game/GameDataService";
import GameBoardDto from "../dto/GameBoardDto";
import NavigationControls from "../components/NavigationControls";

import GameViewport from "../components/GameViewport";
import GameBoard from "../game/GameBoard";

type HomeProps = {

}

type HomeState = {
    showEditBoardDialog: boolean;
    editBoardDialogSeq: number;

    board: GameBoard;
}

class Home extends React.Component<HomeProps, HomeState> {
    state: HomeState = {
        showEditBoardDialog: false,
        editBoardDialogSeq: 0,

        board: GameDataService.getInstance().initialize().loadLast()
    }

    constructor(props: HomeProps) {
        super(props);

        this.handleEditBoardClick = this.handleEditBoardClick.bind(this);
    }

    private getBoardDto = (): GameBoardDto => new GameBoardDto(this.state.board);

    private handleEditBoardClick(): void {
        this.setState({showEditBoardDialog: true, editBoardDialogSeq: this.state.editBoardDialogSeq + 1});
    }

    private handleBoardChange(newBoard : GameBoardDto): void {
        this.setState({board: GameDataService.getInstance().gameData.boards[newBoard.id]});
    }

    render() {
        return (
            <div className="ringMod-app">
                <Grid className="ringMod-fullGrid">
                    <Row className="ringMod-fillHeight">
                        <Col xs={2} className="ringMod-sidebar">
                            <BoardControls onBoardChange={this.handleBoardChange} board={this.getBoardDto()}/>
                            <NavigationControls/>
                        </Col>
                        <Col xs={10} className="ringMod-fullGrid-main">
                            <GameViewport board={this.state.board}/>
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}

export default Home;
