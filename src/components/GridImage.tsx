import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faShoppingBasket } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import type { ReactNode } from 'react'
import { useId } from 'react'
import { copyEmail, INSTAGRAM_USERNAME } from '../contants'
import { Dialog } from './Dialog'
import { DoubleElement } from './DoubleElement'

export const GridImage = ({
  src,
  title,
  type,
  subtitle,
  number,
  price,
  soldOut,
}: {
  src: string
  title?: ReactNode
  type?: ReactNode
  subtitle?: ReactNode
  number?: ReactNode
  price?: ReactNode
  soldOut?: boolean
}) => {
  const titleId = useId()

  return (
    <Dialog
      title={
        <>
          <span className="title">{title}</span>
          <br />
          <span className="type">{type}</span>
          <span className="number">(#{number})</span>
        </>
      }
      target={
        <div className="grid-image" aria-labelledby={titleId}>
          <img src={src} aria-labelledby={titleId} />
          <div className="top-left">
            <DoubleElement className="number">#{number}</DoubleElement>
          </div>
          <div className="top-right">
            <div className="button">
              <FontAwesomeIcon icon={faShoppingBasket} />
            </div>
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
      }
      className="order-dialog"
    >
      <div className="order-dialog-body">
        {subtitle}
        <img src={src} aria-labelledby={titleId} />
        <div>
          <p>Order form is in the works! For now, send us a message to order:</p>
          <div className="links" role="group" aria-label="send links">
            <a
              tabIndex={0}
              className="instagram button"
              href={`https://ig.me/m/${INSTAGRAM_USERNAME}`}
            >
              Instagram <FontAwesomeIcon icon={faInstagram} size="xl" />
            </a>
            <a tabIndex={0} className="email button" onClick={copyEmail}>
              Email <FontAwesomeIcon icon={faEnvelope} size="xl" />
            </a>
          </div>
        </div>
      </div>
    </Dialog>
  )
}
