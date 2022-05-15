import baseMovementsMap from "../../configs/movements/base-movements-map";
import { IPiece } from "../../interfaces/pieces/piece.interface";
import { MovementMapType } from "../../types/movement-map.type";

export default class BasePiece implements IPiece {
  
  constructor(protected position: string) {}

  getMap(): MovementMapType {
    return baseMovementsMap
  }

  setPosition(position: string): void {
    this.position = position
  }

  getPosition(): string {
    return this.position
  }

  getFullPositions(): string[] {
    return Reflect.get(this.getMap(), this.position)
  }
}