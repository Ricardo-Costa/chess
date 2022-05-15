import { PieceField } from "../models/piece-field"

export type BlockProps = {
  pieceField: PieceField
  block: number
  position: string
  clickBlock: (blockId: number, position: string) => void
}