class GameCell {
    public readonly xPosition : number;
    public readonly yPosition : number;
    protected value : boolean;

    constructor(xPosition: number, yPosition: number, value: boolean) {
        this.xPosition = xPosition;
        this.yPosition = yPosition;
        this.value = value;
    }

    public getValue() : boolean {
        return this.value;
    }
}

export default GameCell;