import React, {Component} from "react";

import Dialog from '@jetbrains/ring-ui-built/components/dialog/dialog';
import Island, {Content} from "@jetbrains/ring-ui-built/components/island/island";
import GameBoard from "../game/GameBoard";
import Panel from "@jetbrains/ring-ui-built/components/panel/panel";
import Button from "@jetbrains/ring-ui-built/components/button/button";
import Input, {Size} from "@jetbrains/ring-ui-built/components/input/input";
import Heading from "@jetbrains/ring-ui-built/components/heading/heading";
import DatePicker from "@jetbrains/ring-ui-built/components/date-picker/date-picker";
import GameBoardDto from "../dto/GameBoardDto";
import {Grid} from "@jetbrains/ring-ui-built/components/grid/grid";
import Row from "@jetbrains/ring-ui-built/components/grid/row";
import Col from "@jetbrains/ring-ui-built/components/grid/col";
import ButtonSet from "@jetbrains/ring-ui-built/components/button-set/button-set";
import Text from "@jetbrains/ring-ui-built/components/text/text";
import GameDataService from "../game/GameDataService";

type EditBoardDialogProps = {
    show: boolean;
    board: GameBoardDto;
    onCancel: any;
    onSave: any;
}

type EditBoardDialogState = {
    show: boolean;

    board: GameBoardDto;
    nameError: string | null;
}

class EditBoardDialog extends Component<EditBoardDialogProps, EditBoardDialogState> {
    state: EditBoardDialogState = {
        show: this.props.show,

        board: this.props.board,
        nameError: null
    }

    constructor(props: EditBoardDialogProps) {
        super(props);

        this.handleCloseAttempt = this.handleCloseAttempt.bind(this);
        this.handleCancelClick = this.handleCancelClick.bind(this);
        this.handleSaveClick = this.handleSaveClick.bind(this);
    }

    public render() {
        return (
            <Dialog
                label="Edit Board"
                show={this.state.show}
                className={"ringMod-dialog-large ringMod-dialog-large--size-6"}
                onCloseAttempt={this.handleCloseAttempt}
                >
                <Island>
                    <Content>
                        <Heading>Edit Board #{this.state.board.id}</Heading>
                        <Grid>
                            <Row>
                                <Col xs={3}>
                                    <Text size={Text.Size.S}>Name</Text>
                                </Col>
                                <Col xs={9}>
                                    <Input
                                        value={this.state.board.name}
                                        error={this.state.nameError}
                                        placeholder="Sample Text"
                                        size={Size.AUTO}
                                        onChange={(e: any)=> {
                                            let board : GameBoardDto = this.state.board;
                                            board.name = e.target.value;
                                            this.setState({board: board});
                                        }}
                                    />
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={3}>
                                    <Text size={Text.Size.S}>Author</Text>
                                </Col>
                                <Col xs={9}>
                                    <Input
                                        value={this.state.board.author}
                                        placeholder="Sarah Connor"
                                        size={Size.AUTO}
                                        onChange={(e: any)=> {
                                            let board : GameBoardDto = this.state.board;
                                            board.author = e.target.value;
                                            this.setState({board: board});
                                        }}
                                    />
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={3}>
                                    <Text size={Text.Size.S}>Author Date</Text>
                                </Col>
                                <Col xs={9}>
                                    <DatePicker
                                        date={this.state.board.authorDate}
                                        size={Size.FULL}
                                        onChange={(e: any)=> {
                                            let board : GameBoardDto = this.state.board;
                                            board.authorDate = e;
                                            this.setState({board: board});
                                        }}
                                    />
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={3}>
                                    <Text size={Text.Size.S}>Description</Text>
                                </Col>
                                <Col xs={9}>
                                    <Input
                                        value={this.state.board.desc}
                                        placeholder="Here's a description"
                                        size={Size.AUTO}
                                        multiline
                                        onChange={(e: any)=> {
                                            let board : GameBoardDto = this.state.board;
                                            board.desc = e.target.value;
                                            this.setState({board: board});
                                        }}
                                    />
                                </Col>
                            </Row>
                        </Grid>
                    </Content>
                    <Panel>
                        <Grid>
                            <Row>
                                <Col xs={12}>
                                    <Row end="xs">
                                        <Col xs={12}>
                                            <ButtonSet>
                                                <Button onClick={this.handleCancelClick}>Cancel</Button>
                                                <Button primary onClick={this.handleSaveClick}>Save Changes</Button>
                                            </ButtonSet>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Grid>
                    </Panel>
                </Island>
            </Dialog>
        );
    }

    private validate(): boolean {
        let validated: boolean = true;

        if(this.state.board.name.length === 0)
        {
            this.setState({nameError: "Please enter a name for the board."})

            validated = false;
        }
        else
        {
            this.setState({nameError: null})
        }

        return validated;
    }

    private handleCloseAttempt(): void {
        this.setState({show: false});

        if (this.props.onCancel !== null)
            this.props.onCancel();
    }

    private handleCancelClick(): void {
        this.setState({show: false});

        if (this.props.onCancel !== null)
            this.props.onCancel();
    }

    private handleSaveClick(): void {
        if(!this.validate() || this.props.onSave === null)
            return;

        let board: GameBoard = GameDataService.getInstance().gameData.boards[this.state.board.id];

        board.name = this.state.board.name;
        board.desc = this.state.board.desc;
        board.author = this.state.board.author;
        board.authorDate = this.state.board.authorDate;

        GameDataService.getInstance().save();

        this.setState({show: false});

        this.props.onSave(this.state.board);
    }
}

export default EditBoardDialog;
