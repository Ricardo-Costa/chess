import React from "react";
import { IPiece } from "../interfaces/pieces/piece.interface";
import { King } from "../models/pieces/king";
import { PawnBottom } from "../models/pieces/pawn-bottom";

export const Piece = ({ piece, show, position }: { piece: IPiece | null, show: boolean, position: string }) => {
  if (!show) return <div>{position}</div>

  if (piece) {
    console.log(typeof piece)
    console.log(piece instanceof King)
  }

  if (piece instanceof King) return (
    <div className="piece-component">
      <span>King</span>
    </div>
  )

  if (piece instanceof PawnBottom) return (
    <div className="piece-component">
      <span>Pawn B.</span>
    </div>
  )

  return <div>{position}</div>
}