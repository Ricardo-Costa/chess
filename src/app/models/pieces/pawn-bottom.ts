import pawnBottomMovementsMap from "../../configs/movements/pawn-bottom-movements-map";
import { MovementMapType } from "../../types/movement-map.type";
import BasePiece from "./base-piece";

export class PawnBottom extends BasePiece {

    constructor(protected position: string) {
      super(position)
    }

    getMap(): MovementMapType {
        return pawnBottomMovementsMap
    }
}