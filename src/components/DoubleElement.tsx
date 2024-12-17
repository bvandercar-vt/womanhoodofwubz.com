import classNames from 'classnames'
import type { HTMLAttributes, PropsWithChildren } from 'react'

export const DoubleElement = ({
  children,
  className,
  ...props
}: PropsWithChildren<HTMLAttributes<HTMLSpanElement>>) => (
  <div className="double-element-container">
    <span {...props} className={classNames('el-back', className)} aria-hidden>
      {children}
    </span>
    <span {...props} className={classNames('el-front', className)}>
      {children}
    </span>
  </div>
)
