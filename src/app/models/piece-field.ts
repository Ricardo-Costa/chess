import { GameStatus } from "../types/game-status.type";
import BasePiece from "./pieces/base-piece";

export class PieceField {
  constructor(
    public position: string,
    protected piece: BasePiece | null
  ) {}

  getPiece(): BasePiece | null {
    return this.piece
  }

  setPosition(targetPiece: PieceField, position: string, gameStatus: GameStatus): GameStatus {
    this.position = position;

    // cleanup old piece position
    // update game status object
    Reflect.set(
      gameStatus.fieldState,
      this.piece?.getPosition() || position, // old position or new position
      new PieceField(this.piece?.getPosition() || position, null)
    );

    // set new piece position
    if (this.piece) this.piece.setPosition(position);

    // update game status object
    Reflect.set(
      gameStatus.fieldState,
      position,
      targetPiece
    );

    return gameStatus;
  }
}