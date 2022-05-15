import { Players } from "../enum/players.enum";
import BasePiece from "../models/pieces/base-piece";
import { PawnBottom } from "../models/pieces/pawn-bottom";
import { PawnTop } from "../models/pieces/pawn-top";
import { GameStatus } from "../types/game-status.type";
import { getMyPiecesPosition, getOpponentPiecesPosition } from "../utils/game-status.utils";
import { checkWithValidDiagonalMovement } from "../utils/pawn-action.utils";

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
    
    const availablePositions = piece.getFullPositions().filter( position => !positions.includes(position));

    // Special actions if Pawn type
    if (piece instanceof PawnBottom || piece instanceof PawnTop) {
      const opponentPositions = getOpponentPiecesPosition(playerTag, gameStatus);

      return checkWithValidDiagonalMovement(
        piece,
        availablePositions,
        opponentPositions
      );
    }

    return availablePositions;
  }

}