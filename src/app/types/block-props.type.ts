import { PieceField } from "../models/piece-field"

export type BlockProps = {
  highlight: boolean
  pieceField: PieceField
  position: string
  clickBlock: (position: string) => void
}