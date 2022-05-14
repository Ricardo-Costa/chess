export type BlockProps = {
  block: number
  position: string
  clickBlock: (blockId: number, position: string) => void
}