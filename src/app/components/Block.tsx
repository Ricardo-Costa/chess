import React, { MouseEvent } from "react";
import { BlockProps } from "../types/block-props.type";
import { Piece } from "./Piece";

export const Block = ({ pieceField, block, position, clickBlock }: BlockProps) => {
  return (
    <div
      id={`block-ref-${block}`}
      key={block}
      onClick={(e: MouseEvent) => {
      e.preventDefault();
      clickBlock(block, position);
    }} className="block">
      <Piece piece={pieceField.piece} show={true} position={position}/>
    </div>
  )
}