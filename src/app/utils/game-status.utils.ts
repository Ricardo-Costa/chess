import fieldMap from "../configs/field/map"
import { Players } from "../enum/players.enum"
import { PieceField } from "../models/piece-field"
import { GameStatus } from "../types/game-status.type"

export const genereteInitialStatus = (): GameStatus => {
  return {
    fieldState: fieldMap,
    level: 1,
  }
}

export const getMyPiecesPosition = (playerTag: Players, gameStatus: GameStatus): string[] => {
  const piecePositions: string[] = [];
  let pieceField: PieceField;
  for (const field in gameStatus.fieldState) {
    pieceField = Reflect.get(gameStatus.fieldState, field);

    if (pieceField.getPlayerTag() === playerTag) piecePositions.push(field);
  }
  return piecePositions;
}

export const getOpponentPiecesPosition = (playerTag: Players, gameStatus: GameStatus): string[] => {
  const opponentTag: Players = playerTag === Players.ONE ? Players.TWO : Players.ONE;

  const piecePositions: string[] = [];
  let pieceField: PieceField;
  for (const field in gameStatus.fieldState) {
    pieceField = Reflect.get(gameStatus.fieldState, field);

    if (pieceField.getPlayerTag() === opponentTag) piecePositions.push(field);
  }
  return piecePositions;
}