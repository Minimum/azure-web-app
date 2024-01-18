import {Component} from "react";
import GameCell from "../game/GameCell";

type ViewportCellProps = {
    cell: GameCell;
}

type ViewportCellState = {
    cell: GameCell;
    xPosition: number;
    yPosition: number;
    active: boolean;
}

class ViewportCell extends Component<ViewportCellProps, ViewportCellState> {
    state: ViewportCellState = {
        cell: this.props.cell,
        xPosition: this.props.cell.xPosition,
        yPosition: this.props.cell.yPosition,
        active: false
    }

    constructor(props: ViewportCellProps) {
        super(props);
    }

    private handleClick(): void {

    }

    public render() {
        return (
            <div className="ringMod-viewport-cell">
                Cell
            </div>
        );
    }
}

export default ViewportCell