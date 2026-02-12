import { faInstagramSquare } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { copyEmail, INSTAGRAM_USERNAME } from '../contants'

export const OrderDialog = ({
  subtitle,
  src,
  titleId,
}: {
  subtitle: React.ReactNode
  src: string
  titleId: string
}) => (
  <div className="order-dialog-body">
    {subtitle}
    <img src={src} aria-labelledby={titleId} />
    <div>
      <p>Order form is in the works! For now, send us a message to order:</p>

      {/** biome-ignore lint/a11y/useSemanticElements: group is fine here */}
      <div className="links" role="group" aria-label="send links">
        <a
          tabIndex={0}
          className="instagram button"
          href={`https://ig.me/m/${INSTAGRAM_USERNAME}`}
        >
          Instagram <FontAwesomeIcon icon={faInstagramSquare} size="xl" />
        </a>
        <button className="email button" type="button" onClick={copyEmail}>
          Email <FontAwesomeIcon icon={faEnvelope} size="xl" />
        </button>
      </div>
    </div>
  </div>
)
