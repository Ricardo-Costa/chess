import { IPiece } from "../interfaces/pieces/piece.interface";

export class PieceField {
  constructor(
    readonly position: string,
    readonly piece: IPiece | null,
    readonly cssClass: string
  ) {}
}