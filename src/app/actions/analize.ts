import BasePiece from "../models/pieces/base-piece";
import { GameStatus } from "../types/game-status.type";

export default class AnalizeActions {

  /**
   * Should return available actions.
   * 
   * @param piece 
   * @param gameStatus 
   */
  static identifyOptions(piece: BasePiece | null, gameStatus: GameStatus): string[] {
    if (!piece) return [];
    return piece.getFullPositions();
  }

}