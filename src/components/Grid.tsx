import classNames from 'classnames'
import type { HTMLAttributes, PropsWithChildren } from 'react'
import { Children } from 'react'

export const Grid = ({ children, ...props }: PropsWithChildren<HTMLAttributes<HTMLDivElement>>) => {
  return (
    <div {...props} className={classNames('grid', props['className'])}>
      {Children.map(children, (child) => (
        <div className="grid-item">{child}</div>
      ))}
    </div>
  )
}
