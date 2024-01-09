import React from 'react';
import '../App.css';
import GameDal from "../game/GameDal";
import GameData from "../game/GameData";
import Table from "@jetbrains/ring-ui-built/components/table/table";
import Selection, {SelectionItem} from "@jetbrains/ring-ui-built/components/table/selection";
import GameBoard from "../game/GameBoard";
import TimeUtil from "../util/Time";

interface Item extends SelectionItem {
    id: number,
    name: string,
    desc: string,
    author: string,
    authorDate: number
}

function Boards() {
    let columns: { id: string, title: string, sortable: boolean, rightAlign?: boolean, getValue?: any }[] = [
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

    let gameDal: GameDal = new GameDal();
    let gameData: GameData = gameDal.loadFromStorage() ?? gameDal.loadDefault();
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

    return (
        <div className="Boards">
            <Table<Item>
                data={items}
                columns={columns}
                selectable={false}
                selection={new Selection({})}
                focused/>
        </div>
    );
}

export default Boards;
