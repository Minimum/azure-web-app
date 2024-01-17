import React, {Component} from "react";
import Dialog from "@jetbrains/ring-ui-built/components/dialog/dialog";
import Island, {Content} from "@jetbrains/ring-ui-built/components/island/island";
import Heading from "@jetbrains/ring-ui-built/components/heading/heading";
import {Grid} from "@jetbrains/ring-ui-built/components/grid/grid";
import Row from "@jetbrains/ring-ui-built/components/grid/row";
import Col from "@jetbrains/ring-ui-built/components/grid/col";
import ButtonSet from "@jetbrains/ring-ui-built/components/button-set/button-set";
import Button from "@jetbrains/ring-ui-built/components/button/button";
import Panel from "@jetbrains/ring-ui-built/components/panel/panel";
import Selection, {SelectionItem} from "@jetbrains/ring-ui-built/components/table/selection";
import Table from "@jetbrains/ring-ui-built/components/table/table";
import TimeUtil from "../util/Time";
import GameData from "../game/GameData";
import GameBoard from "../game/GameBoard";
import GameDataService from "../game/GameDataService";

type LoadBoardDialogProps = {
    show: boolean;

    onCancel: any;
    onLoad: any;
}

type LoadBoardDialogState = {
    show: boolean;
    table: Item[];
}

interface Item extends SelectionItem {
    id: number,
    name: string,
    desc: string,
    author: string,
    authorDate: Date
}

class LoadBoardDialog extends Component<LoadBoardDialogProps, LoadBoardDialogState> {
    static columns: { id: string, title: string, sortable: boolean, rightAlign?: boolean, getValue?: any }[] = [
        {
            id: "id",
            title: "Id",
            sortable: true,
            rightAlign: true
        },
        {
            id: "name",
            title: "Name",
            sortable: true
        },
        {
            id: "desc",
            title: "Description",
            sortable: true
        },
        {
            id: "author",
            title: "Author",
            sortable: true
        },
        {
            id: "authorDate",
            title: "Modified",
            sortable: true,
            getValue: (row: any) => {
                return TimeUtil.getTimestampString(new Date(row.authorDate));
            }
        }
    ];

    state: LoadBoardDialogState = {
        show: this.props.show,
        table: this.getTableData()
    }

    constructor(props: LoadBoardDialogProps) {
        super(props);

        this.state.table = this.getTableData();

        this.handleCloseAttempt = this.handleCloseAttempt.bind(this);
        this.handleCancelClick = this.handleCancelClick.bind(this);
        this.handleLoadClick = this.handleLoadClick.bind(this);
    }

    private getTableData(): Item[] {
        let gameData: GameData = GameDataService.getInstance().gameData;
        let items: Item[] = [];

        for (let i: number = 0; i < gameData.boards.length; i++) {
            let board: GameBoard = gameData.boards[i];
            items.push({
                id: board.id,
                name: board.name,
                desc: board.desc,
                author: board.author,
                authorDate: board.authorDate
            });
        }

        return items;
    }

    private handleCloseAttempt(): void {
        this.setState({show: false});

        if(this.props.onCancel !== null)
            this.props.onCancel();
    }

    private handleCancelClick(): void {
        this.setState({show: false});

        if(this.props.onCancel !== null)
            this.props.onCancel();
    }

    private handleLoadClick(): void {
        if(this.props.onLoad !== null)
            this.props.onLoad();
    }

    render() {
        return (
            <Dialog
                label="Edit Board"
                show={this.state.show}
                className={"ringMod-dialog-large ringMod-dialog-large--size-10"}
                onCloseAttempt={this.handleCloseAttempt}
            >
                <Island>
                    <Content>
                        <Heading>Load Board</Heading>
                        <Table<Item>
                            data={this.state.table}
                            columns={LoadBoardDialog.columns}
                            selectable={false}
                            selection={new Selection({})}
                            focused/>
                    </Content>
                    <Panel>
                        <Grid>
                            <Row>
                                <Col xs={12}>
                                    <Row end="xs">
                                        <Col xs={12}>
                                            <ButtonSet>
                                                <Button onClick={this.handleCancelClick}>Cancel</Button>
                                                <Button primary onClick={this.handleLoadClick}>Load Board</Button>
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
}

export default LoadBoardDialog;