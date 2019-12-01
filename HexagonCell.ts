import { CellType } from "./CellType"
import { ObjType } from "./ObjType"

export class HexagonCell {
    public x: number = null;
    public y: number = null;
    public base_type: CellType;
    public attach_type: ObjType;
    constructor() {
    }
}