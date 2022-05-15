import { Players } from "../enum/players.enum";
import BasePiece from "../models/pieces/base-piece";
import { GameStatus } from "../types/game-status.type";
import { getMyPiecesPosition } from "../utils/game-status.utils";

export default class AnalizeActions {

  /**
   * Should return available actions.
   * 
   * @param playerTag 
   * @param piece 
   * @param gameStatus 
   * @returns 
   */
  static identifyOptions(playerTag: Players | null, piece: BasePiece | null, gameStatus: GameStatus): string[] {
    if (!piece || !playerTag) return [];

    const positions = getMyPiecesPosition(playerTag, gameStatus);

    return piece.getFullPositions().filter( position => !positions.includes(position));
  }

}