import BasePiece from "../models/pieces/base-piece";
import { PawnBottom } from "../models/pieces/pawn-bottom";
import { PawnTop } from "../models/pieces/pawn-top";

const specialMovementByPositionMap = {
  "A": [ "B" ],
  "B": [ "A", "C" ],
  "C": [ "B", "D" ],
  "D": [ "C", "E" ],
  "E": [ "D", "F" ],
  "F": [ "E", "G" ],
  "G": [ "F", "H" ],
  "H": [ "G" ],
}

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

    let specialPosition;
    const keepSpecialPositions = [], keepValidSpecialPositions = [];
    for (const key of specialMovements) {
      specialPosition = `${key}${nextPosition}`;

      keepSpecialPositions.push(specialPosition);

      if (opponentPositions.includes(specialPosition))
        keepValidSpecialPositions.push(specialPosition);
    }      
    return (
      keepValidSpecialPositions.includes(position) ||
      !keepSpecialPositions.includes(position)
    );
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