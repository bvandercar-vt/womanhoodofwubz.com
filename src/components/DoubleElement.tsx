import classNames from 'classnames'
import type { HTMLAttributes, PropsWithChildren } from 'react'

export const DoubleElement = ({
  children,
  ...props
}: PropsWithChildren<HTMLAttributes<HTMLSpanElement>>) => (
  <div {...props} className={classNames('double-element-container', props['className'])}>
    <span className="el-back" aria-hidden>
      {children}
    </span>
    <span className="el-front">{children}</span>
  </div>
)
