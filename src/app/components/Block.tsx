import React, { MouseEvent } from "react";
import { BlockProps } from "../types/block-props.type";

export const Block = ({ block, position, clickBlock }: BlockProps) => {
  return (
    <div
      id={`block-ref-${block}`}
      key={block}
      onClick={(e: MouseEvent) => {
      e.preventDefault();
      clickBlock(block, position);
    }} className="block">{position}</div>
  )
}