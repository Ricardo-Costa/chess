import { PieceField } from "../models/piece-field"

export type BlockProps = {
  pieceField: PieceField
  position: string
  clickBlock: (position: string) => void
}