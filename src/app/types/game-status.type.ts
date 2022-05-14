import { PieceField } from "../models/piece-field";

export type GameStatus = {
  fieldState: PieceField[]
  level: number
};