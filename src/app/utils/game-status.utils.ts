import fieldMap from "../configs/field/map"
import { GameStatus } from "../types/game-status.type"

export const genereteInitialStatus = (): GameStatus => {
  return {
    fieldState: fieldMap,
    level: 1,
  }
}