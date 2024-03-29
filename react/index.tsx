import { FC, useMemo } from "react"
import { ReactIcons as Icons } from "./map"

interface Props {
  name: keyof typeof Icons
  size?: number
  color?: string
  style?: [{ color: string }]
}

export const Icon: FC<Props> = ({ name, size = 28, color, style }) => {
  const fill = useMemo(() => (style ? style[0].color : color), [color, style])

  return Icons[name] === undefined
    ? Icons["help"]({
        height: size,
        width: size,
        fill,
      })
    : Icons[name]({
        height: size,
        width: size,
        fill,
      })
}
