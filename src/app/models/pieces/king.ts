import { IPiece } from "../../interfaces/pieces/piece.interface";
import { Movement } from "../movement";

export class King implements IPiece {
    constructor(readonly initialPosition: string) {}

    getMap(): Movement[] {
        return []
    }
}