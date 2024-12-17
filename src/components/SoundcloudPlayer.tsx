import { faSoundcloud } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useId, useRef } from 'react'

export const SoundcloudPlayer = ({
  href,
  src,
  title,
}: {
  href: string
  src: string
  title: string
}) => {
  const id = useId()
  const iFrameElement = useRef(null)

  return (
    <div className="sc-player" role="group" aria-label="soundcloud player">
      <a className="sc-title" href={href} target="_blank" title="SoundCloud playlist">
        <p>
          <FontAwesomeIcon
            icon={faSoundcloud}
            style={{ paddingRight: '0.2em', verticalAlign: 'middle', paddingBottom: '1px' }}
          />
          {title}
        </p>
      </a>
      <div className="sc-iframe-wrapper">
        <iframe
          width="100%"
          height="350"
          scrolling="no"
          frameBorder="no"
          allow="autoplay"
          src={src}
          id={id}
          ref={iFrameElement}
        />
      </div>
    </div>
  )
}
