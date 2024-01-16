import React from 'react';
import logo from '../assets/logo.svg';
import '../App.css';

import pencilIcon from '@jetbrains/icons/pencil';

import alertService from "@jetbrains/ring-ui-built/components/alert-service/alert-service";
import Button from "@jetbrains/ring-ui-built/components/button/button";
import EditBoardDialog from "../components/EditBoardDialog";
import GameBoard from "../game/GameBoard";
import GameBoardDto from "../dto/GameBoardDto";

type HomeProps = {

}

type HomeState = {
    showEditBoardDialog: boolean;
    editBoardDialogSeq: number;
}

class Home extends React.Component<HomeProps, HomeState> {
    state: HomeState = {
        showEditBoardDialog: false,
        editBoardDialogSeq: 0
    }

    constructor(props: HomeProps) {
        super(props);

        this.handleLearnClick = this.handleLearnClick.bind(this);
    }

    handleLearnClick() {
        this.setState({showEditBoardDialog: true, editBoardDialogSeq: this.state.editBoardDialogSeq + 1});
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>
                        Edit <code>src/App.tsx</code> and save to reload.
                    </p>
                    <Button icon={pencilIcon} primary={true} onClick={this.handleLearnClick}>
                        Learn react :D
                    </Button>
                    <Button danger={true} onClick={() => alertService.error('Unlearned')}>
                        Don't learn react &gt;:D
                    </Button>
                    <EditBoardDialog key={this.state.editBoardDialogSeq} show={this.state.showEditBoardDialog} board={new GameBoardDto(new GameBoard(100, 100))} onCancel={null} onSave={null}></EditBoardDialog>
                </header>
            </div>
        );
    }
}

export default Home;
