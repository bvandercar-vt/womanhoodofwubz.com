import { faInstagram, faSoundcloud } from '@fortawesome/free-brands-svg-icons'
import {
  faArrowUpRightFromSquare,
  faCircleArrowDown,
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import type { HTMLAttributes } from 'react'
import { copyEmail, INSTAGRAM_USERNAME } from '../contants'
import { CircleLink } from './CircleLink'
import { DoubleElement } from './DoubleElement'

export const Header = ({
  scrollToGrid,
}: {
  scrollToGrid: HTMLAttributes<HTMLAnchorElement>['onClick']
}) => {
  return (
    <header>
      <div id="header-center">
        <img src="/Logo.png" alt="Womanhood of Wubz" id="header-logo-img" />
        <div id="bio">
          <DoubleElement>
            <p>📍 Denver, CO 📍</p>
            <p>
              ✨ Bringing you the accessories that celebrate the magic of good music and the power
              of connection ✨
            </p>
          </DoubleElement>
        </div>
        <div id="buttons">
          <DoubleElement>
            <a className="button" id="designed" tabIndex={0} onClick={scrollToGrid}>
              Designed Hats <FontAwesomeIcon icon={faCircleArrowDown} />
            </a>
          </DoubleElement>
          <DoubleElement>
            <a
              className="button"
              id="custom"
              tabIndex={0}
              onClick={() => alert('Page coming soon!')}
            >
              Custom Hats <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </a>
          </DoubleElement>
        </div>
      </div>
      <div id="header-right">
        <div id="social-links-wrapper" role="region" aria-label="links and social media">
          <span id="connect">
            <DoubleElement>Connect with us!</DoubleElement>
          </span>
          <div id="social-links">
            <CircleLink
              className="instagram"
              title="Instagram"
              icon={faInstagram}
              href={`https://www.instagram.com/${INSTAGRAM_USERNAME}/`}
            />
            <CircleLink className="email" title="Email" icon={faEnvelope} onClick={copyEmail} />
            <CircleLink
              className="soundcloud"
              title="SoundCloud"
              icon={faSoundcloud}
              href="https://soundcloud.com/marisa-kerstanski"
            />
          </div>
        </div>
      </div>
    </header>
  )
}
