import {Component} from "react";
import GameCell from "../game/GameCell";

type ViewportRowProps = {
    cells: GameCell[];
    yPosition: number;
}

type ViewportRowState = {
    cells: GameCell[];
    yPosition: number;
}

class ViewportRow extends Component<ViewportRowProps, ViewportRowState> {
    state: ViewportRowState = {
        cells: this.props.cells,
        yPosition: this.props.yPosition
    }
    constructor(props: any) {
        super(props);
    }

    public render() {
        return (
            <div className="ringMod-viewport-row">
                Row
            </div>
        );
    }
}