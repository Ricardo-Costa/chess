import React from "react";
import BasePiece from "../models/pieces/base-piece";
import { King } from "../models/pieces/king";
import { PawnBottom } from "../models/pieces/pawn-bottom";
import { PawnTop } from "../models/pieces/pawn-top";

export const Piece = ({ piece, show, position }: { piece: BasePiece | null, show: boolean, position: string }) => {
  if (!show) return <div>{position}</div>

  if (piece instanceof King) return (
    <div className="piece-component">
      <span>King</span>
    </div>
  )

  if (piece instanceof PawnTop) return (
    <div className="piece-component">
      <span>Pawn T.</span>
    </div>
  )

  if (piece instanceof PawnBottom) return (
    <div className="piece-component">
      <span>Pawn B.</span>
    </div>
  )

  return <div>{position}</div>
}