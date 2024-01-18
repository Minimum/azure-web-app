import React, {Component} from "react";
import pencilIcon from '@jetbrains/icons/pencil';
import entryIcon from '@jetbrains/icons/entry';
import {Tabs} from "@jetbrains/ring-ui-built/components/tabs/tabs";
import Tab from "@jetbrains/ring-ui-built/components/tabs/tab";
import Button from "@jetbrains/ring-ui-built/components/button/button";
import GameBoardDto from "../dto/GameBoardDto";
import EditBoardDialog from "./EditBoardDialog";
import Text from "@jetbrains/ring-ui-built/components/text/text";
import LoadBoardDialog from "./LoadBoardDialog";

type BoardControlsProps = {
    board: GameBoardDto;

    onBoardChange: any;
}

type BoardControlsState = {
    board: GameBoardDto;

    showEditBoardDialog: boolean;
    editBoardDialogSeq: number;
    showLoadBoardDialog: boolean;
    loadBoardDialogSeq: number;
}

class BoardControls extends Component<BoardControlsProps, BoardControlsState> {
    state: BoardControlsState = {
        board: this.props.board,

        showEditBoardDialog: false,
        editBoardDialogSeq: 0,
        showLoadBoardDialog: false,
        loadBoardDialogSeq: 0
    }

    constructor(props: BoardControlsProps) {
        super(props);

        this.handleEditBoardClick = this.handleEditBoardClick.bind(this);
        this.handleEditBoardSave = this.handleEditBoardSave.bind(this);
        this.handleLoadBoardClick = this.handleLoadBoardClick.bind(this);
        this.handleLoadBoardLoad = this.handleLoadBoardLoad.bind(this);
    }

    private handleEditBoardClick(): void {
        this.setState({showEditBoardDialog: true, editBoardDialogSeq: this.state.editBoardDialogSeq + 1});
    }

    private handleEditBoardSave(newBoard: GameBoardDto): void {
        this.setState({board: newBoard});
    }

    private handleLoadBoardClick(): void {
        this.setState({showLoadBoardDialog: true, loadBoardDialogSeq: this.state.loadBoardDialogSeq + 1});
    }

    private handleLoadBoardLoad(newBoard: GameBoardDto): void {
        this.setState({board: newBoard});
    }

    public render() {
        return (
            <div className="ringMod-text ringMod-sidebar-section">
                <Tabs
                 selected={"board"}
                 autoCollapse>
                    <Tab id="board" title="Board Detail">
                        <Text>Board: {this.state.board.name}</Text>
                        <Button icon={pencilIcon} name={"Edit Board"} primary={true} onClick={this.handleEditBoardClick}></Button>
                        <Button icon={entryIcon} name={"Load Board"} primary={true} onClick={this.handleLoadBoardClick}></Button>
                        <br/>
                        <Text>Size: {this.state.board.width}x{this.state.board.height}</Text>
                    </Tab>
                </Tabs>
                <EditBoardDialog key={`editBoardDialog-${this.state.editBoardDialogSeq}`} show={this.state.showEditBoardDialog} board={this.state.board} onCancel={null} onSave={this.handleEditBoardSave}></EditBoardDialog>
                <LoadBoardDialog key={`loadBoardDialog-${this.state.loadBoardDialogSeq}`} show={this.state.showLoadBoardDialog} onCancel={null} onLoad={this.handleLoadBoardLoad}></LoadBoardDialog>
            </div>
        );
    }
}

export default BoardControls;