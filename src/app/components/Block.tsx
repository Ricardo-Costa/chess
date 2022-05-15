import React, { MouseEvent } from "react";
import { BlockProps } from "../types/block-props.type";
import { Piece } from "./Piece";

export const Block = ({ highlight, pieceField, position, clickBlock }: BlockProps) => {
  return (
    <div
      key={position}
      onClick={(e: MouseEvent) => {
      e.preventDefault();
      clickBlock(position);
    }} className={highlight ? "block lighlight-block" : "block" }>
      <Piece piece={pieceField.getPiece()} show={true} position={position}/>
    </div>
  )
}