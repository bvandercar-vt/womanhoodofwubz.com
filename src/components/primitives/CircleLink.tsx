import type { FontAwesomeIconProps } from '@fortawesome/react-fontawesome'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classNames from 'classnames'

export const CircleLink = ({
  icon,
  className,
  ...props
}: React.AnchorHTMLAttributes<HTMLAnchorElement> &
  Pick<FontAwesomeIconProps, 'icon'>) => (
  <a
    target="_blank"
    tabIndex={0}
    {...props}
    className={classNames('circle', className)}
  >
    <FontAwesomeIcon
      icon={icon}
      aria-label={props['aria-label'] ?? props.title}
    />
  </a>
)
