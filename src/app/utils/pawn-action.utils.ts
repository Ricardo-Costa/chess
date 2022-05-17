import BasePiece from "../models/pieces/base-piece";
import { PawnBottom } from "../models/pieces/pawn-bottom";
import { PawnTop } from "../models/pieces/pawn-top";

// movements that the piece can do
const specialMovementByPositionMap = {
  "A": [ "B" ],
  "B": [ "A", "C" ],
  "C": [ "B", "D" ],
  "D": [ "C", "E" ],
  "E": [ "D", "F" ],
  "F": [ "E", "G" ],
  "G": [ "F", "H" ],
  "H": [ "G" ],
};
// movements that the piece do not should do
const specialMovementByPositionForbiddenMap = {
  "A": [ "A" ],
  "B": [ "B" ],
  "C": [ "C" ],
  "D": [ "D" ],
  "E": [ "E" ],
  "F": [ "F" ],
  "G": [ "G" ],
  "H": [ "H" ],
};

const verifyCompatibility = (
  nextPosition: number,
  piece: BasePiece | null,
  availablePositions: string[],
  opponentPositions: string[]
): string[] => {
  
  if (!piece) return [];

  return availablePositions.filter( position => {
    const keyOfPosition = piece.getPosition()[0];
    const specialMovements: string[] = Reflect.get(specialMovementByPositionMap, keyOfPosition);
    const specialMovementsForbidden: string[] = Reflect.get(specialMovementByPositionForbiddenMap, keyOfPosition);

    let specialPosition;
    const keepValidSpecialPositions = [];
    // keep positions that this piece can go to event that place has um opponent piece
    for (const key of specialMovements) {
      specialPosition = `${key}${nextPosition}`;

      if (opponentPositions.includes(specialPosition))
        keepValidSpecialPositions.push(specialPosition);
    }
    let specialPositionForbidden;
    const keepValidSpecialPositionsForbidden = [];
    // keep positions that this piece can go to, if that place has um opponent piece
    for (const key of specialMovementsForbidden) {
      specialPositionForbidden = `${key}${nextPosition}`;

      if (opponentPositions.includes(specialPositionForbidden))
        keepValidSpecialPositionsForbidden.push(specialPositionForbidden);
    }
    return (
      keepValidSpecialPositions.includes(position) ||
      !keepSpecialPositions.includes(position)
    ) && !keepValidSpecialPositionsForbidden.includes(position);
  });
}

export const checkWithValidDiagonalMovement = (
  piece: BasePiece | null,
  availablePositions: string[],
  opponentPositions: string[]
): string[] => {

  let nextPosition = 0;

  // rule action to PawnTop type
  if (piece instanceof PawnTop) {
    nextPosition = Number(piece.getPosition()[1])-1;
    return verifyCompatibility(nextPosition, piece, availablePositions, opponentPositions);
  }
  // rule action to PawnBottom type
  else if (piece instanceof PawnBottom) {
    nextPosition = Number(piece.getPosition()[1])+1;
  }
  return verifyCompatibility(nextPosition, piece, availablePositions, opponentPositions);
}