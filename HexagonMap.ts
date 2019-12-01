import { HexagonCell } from "./HexagonCell"
export class HexagonMap {
    private cells: Array<HexagonCell>;
    private row_count: number;
    private col_count: number;

    public constructor(row_count: number, col_count: number) {
        this.row_count = row_count;
        this.col_count = col_count;

        // grid initialization
        this.cells = new Array<HexagonCell>();
        for (let col = 0; col < col_count; col++) {
            let init_row: number;
            if (col % 2 == 0) {
                init_row = 1;
            }
            else {
                init_row = 0;
            }
            for (let row = init_row; row < row_count; row += 2) {
                let cell: HexagonCell = new HexagonCell();
                cell.y = row;
                cell.x = col;
                this.cells.push(cell);
            }
        }
    }

    public getCells(): Array<HexagonCell> {
        const clone = Object.assign([], this.cells);

        return clone;
    }
}