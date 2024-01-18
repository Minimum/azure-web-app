import GameCell from "./GameCell";

class GameCellCompute extends GameCell {
    protected liveNeighbors : number;

    constructor(xPosition : number, yPosition : number, value : boolean) {
        super(xPosition, yPosition, value);

        this.liveNeighbors = 0;
    }

    public setValue (value : boolean) : void {
        this.value = value;
    }

    public incrementLiveNeighbors() : void {
        this.liveNeighbors++;
    }

    public computeNextValue() : boolean {
        let alive : boolean;

        /*
            Rules:
            1. Any live cell with fewer than two live neighbours dies, as if by underpopulation.
            2. Any live cell with two or three live neighbours lives on to the next generation.
            3. Any live cell with more than three live neighbours dies, as if by overpopulation.
            4. Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.
        */
        if(this.value) {
            alive = this.liveNeighbors === 2 || this.liveNeighbors === 3;
        }
        else {
            alive = this.liveNeighbors === 3;
        }

        return alive;
    }
}

export default GameCellCompute;