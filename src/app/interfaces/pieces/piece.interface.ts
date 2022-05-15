import { MovementMapType } from "../../types/movement-map.type";

export interface IPiece {
    getMap(): MovementMapType

    setPosition(position: string): void

    getPosition(): string

    getFullPositions(): string[]
}