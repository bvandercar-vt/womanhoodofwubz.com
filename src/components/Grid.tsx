import type { PropsWithChildren, RefObject } from 'react'
import { Children } from 'react'

export const Grid = ({
  children,
  gridRef,
}: PropsWithChildren<{ gridRef?: RefObject<HTMLDivElement> }>) => {
  return (
    <div className="grid" ref={gridRef}>
      {Children.map(children, (child) => (
        <div className="grid-item">{child}</div>
      ))}
    </div>
  )
}
