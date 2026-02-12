import classNames from 'classnames'
import type { HTMLAttributes, PropsWithChildren } from 'react'
import { Children } from 'react'

export const Grid = ({
  children,
  className,
  ...props
}: PropsWithChildren<HTMLAttributes<HTMLDivElement>>) => {
  return (
    <div {...props} className={classNames('grid', className)}>
      {Children.map(children, (child) => (
        <div className="grid-item">{child}</div>
      ))}
    </div>
  )
}
