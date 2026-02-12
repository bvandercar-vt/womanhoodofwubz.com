import classNames from 'classnames'
import type { ReactNode } from 'react'
import { useId } from 'react'
import { OrderDialog } from './OrderDialog'
import { Dialog } from './primitives/Dialog'
import { DoubleElement } from './primitives/DoubleElement'

interface GridImageTargetProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title'> {
  src: string
  title?: ReactNode
  titleId: string
  type?: ReactNode
  subtitle?: ReactNode
  number?: ReactNode
  price?: ReactNode
  soldOut?: boolean
}

const GridImageTarget = ({
  src,
  titleId,
  number,
  title,
  type,
  subtitle,
  soldOut,
  price,
  className,
  ...rest
}: GridImageTargetProps) => (
  // biome-ignore lint/a11y/useSemanticElements: group is fine here
  <div
    role="group"
    className={classNames('grid-image', className)}
    aria-labelledby={titleId}
    {...rest}
  >
    <img src={src} aria-labelledby={titleId} />
    <div className="top-left">
      <DoubleElement className="number">#{number}</DoubleElement>
    </div>
    <div className="bottom-left caption">
      <DoubleElement>
        {title && (
          <p className="title" id={titleId}>
            {title}
            <br />
            <span className="type" id={titleId}>
              {type}
            </span>
          </p>
        )}
        {subtitle && <p className="subtitle">{subtitle}</p>}
      </DoubleElement>
    </div>
    <div className="bottom-right">
      {soldOut ? (
        <DoubleElement className="sold-out">Sold!</DoubleElement>
      ) : (
        price && <DoubleElement className="price">${price}</DoubleElement>
      )}
    </div>
  </div>
)

interface GridImageProps extends Omit<GridImageTargetProps, 'titleId'> {}

export const GridImage = (props: GridImageProps) => {
  const titleId = useId()

  return (
    <Dialog
      title={
        <>
          <span className="title">{props.title}</span>
          <br />
          <span className="type">{props.type}</span>
          <span className="number">(#{props.number})</span>
        </>
      }
      target={<GridImageTarget {...props} titleId={titleId} />}
      className="order-dialog"
    >
      <OrderDialog
        subtitle={props.subtitle}
        src={props.src}
        titleId={titleId}
      />
    </Dialog>
  )
}
