import pawnTopMovementsMap from "../../configs/movements/pawn-top-movements-map";
import { MovementMapType } from "../../types/movement-map.type";
import BasePiece from "./base-piece";

export class PawnTop extends BasePiece {

    constructor(protected position: string) {
      super(position)
    }

    getMap(): MovementMapType {
        return pawnTopMovementsMap
    }
}