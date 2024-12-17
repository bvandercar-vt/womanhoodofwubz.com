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
  subtitle,
  number,
  price,
  soldOut,
}: {
  src: string
  title?: ReactNode
  subtitle?: ReactNode
  number?: ReactNode
  price?: ReactNode
  soldOut?: boolean
}) => {
  const titleId = useId()

  return (
    <div className="grid-image">
      <img src={src} aria-labelledby={titleId} />
      <div className="top-left">
        <DoubleElement className="number">#{number}</DoubleElement>
      </div>
      <div className="top-right">
        <Dialog
          title="Order It!"
          target={
            <button aria-label="order" title="Order">
              <FontAwesomeIcon icon={faShoppingBasket} />
            </button>
          }
          className="order-dialog"
        >
          <div className="order-dialog-body">
            {title}
            <br />
            {subtitle}
            <img src={src} aria-labelledby={titleId} />
            <div>
              <p>Order form in the works! For now, send us a message to order:</p>
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
      </div>
      <div className="bottom-left caption">
        <DoubleElement>
          {title && (
            <p className="title" id={titleId}>
              {title}
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
}
