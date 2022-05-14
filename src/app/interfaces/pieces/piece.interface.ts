import { Movement } from "../../models/movement";

export interface IPiece {
    getMap(): Movement[]
}