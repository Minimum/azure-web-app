import React from 'react';
import '../App.css';

import pencilIcon from '@jetbrains/icons/pencil';

import Button from "@jetbrains/ring-ui-built/components/button/button";
import {Grid} from "@jetbrains/ring-ui-built/components/grid/grid";
import Row from "@jetbrains/ring-ui-built/components/grid/row";
import Col from "@jetbrains/ring-ui-built/components/grid/col";
import Text from "@jetbrains/ring-ui-built/components/text/text";
import BoardControls from "../components/BoardControls";
import GameDataService from "../game/GameDataService";
import GameBoardDto from "../dto/GameBoardDto";
import NavigationControls from "../components/NavigationControls";
import EditorControls from "../components/EditorControls";

type HomeProps = {

}

type HomeState = {
    showEditBoardDialog: boolean;
    editBoardDialogSeq: number;

    board: GameBoardDto;
}

class Home extends React.Component<HomeProps, HomeState> {
    state: HomeState = {
        showEditBoardDialog: false,
        editBoardDialogSeq: 0,

        board: new GameBoardDto(GameDataService.getInstance().initialize().loadLast())
    }

    constructor(props: HomeProps) {
        super(props);

        this.handleEditBoardClick = this.handleEditBoardClick.bind(this);
    }

    handleEditBoardClick(): void {
        this.setState({showEditBoardDialog: true, editBoardDialogSeq: this.state.editBoardDialogSeq + 1});
    }

    handleBoardChange(newBoard : GameBoardDto): void {
        this.setState({board: newBoard});
    }

    render() {
        return (
            <div className="ringMod-app">
                <Grid className="ringMod-fullGrid">
                    <Row className="ringMod-fillHeight">
                        <Col xs={2} className="ringMod-sidebar">
                            <BoardControls onBoardChange={this.handleBoardChange} board={this.state.board}/>
                            <EditorControls/>
                            <NavigationControls/>
                        </Col>
                        <Col xs={10}>
                            Game board
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}

export default Home;
