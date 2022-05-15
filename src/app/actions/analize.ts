import BasePiece from "../models/pieces/base-piece";
import { GameStatus } from "../types/game-status.type";

export default class AnalizeActions {

  /**
   * Should return available actions.
   * 
   * @param piece 
   * @param gameStatus 
   */
  static identifyOptions(piece: BasePiece, gameStatus: GameStatus): string[] {
    return piece.getFullPositions();
  }

}