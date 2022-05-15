import { IPiece } from "../../interfaces/pieces/piece.interface";
import { Movement } from "../movement";

export class PawnBottom implements IPiece {
    constructor(readonly initialPosition: string) {}

    getMap(): Movement[] {
        return []
    }
}