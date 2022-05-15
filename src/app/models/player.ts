import { Players } from "../enum/players.enum";

export default class Player {
  constructor(
    readonly playerTag: Players,
    readonly nickname: string,
    readonly score: number
  ) {}
}