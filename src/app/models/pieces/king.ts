import kingMovementsMap from "../../configs/movements/king-movements-map";
import { MovementMapType } from "../../types/movement-map.type";
import BasePiece from "./base-piece";

export class King extends BasePiece {

    constructor(protected position: string) {
      super(position);
    }

    getMap(): MovementMapType {
        return kingMovementsMap
    }
}