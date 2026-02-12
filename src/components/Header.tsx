import { faInstagram, faSoundcloud } from '@fortawesome/free-brands-svg-icons'
import {
  faArrowUpRightFromSquare,
  faCircleArrowDown,
  faEnvelope,
  faExternalLink,
  faLocationDot,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import type { HTMLAttributes } from 'react'
import { copyEmail, INSTAGRAM_USERNAME } from '../contants'
import { CircleLink } from './primitives/CircleLink'
import { Dialog } from './primitives/Dialog'
import { DoubleElement } from './primitives/DoubleElement'

export const Header = ({
  scrollToGrid,
}: {
  scrollToGrid: HTMLAttributes<HTMLButtonElement>['onClick']
}) => {
  return (
    <header>
      <div id="header-center">
        <img src="/Logo.png" alt="Womanhood of Wubz" id="header-logo-img" />
        <div id="bio">
          <DoubleElement>
            <p id="location">
              <span className="icon-wrapper">
                <FontAwesomeIcon icon={faLocationDot} size="sm" />
              </span>
              Denver, CO
            </p>
            <p>
              Bringing you the accessories that celebrate the magic of good
              music and the power of connection
            </p>
          </DoubleElement>
        </div>
        <div id="buttons">
          <button type="button" onClick={scrollToGrid}>
            <DoubleElement className="button" id="designed">
              Designed Hats <FontAwesomeIcon icon={faCircleArrowDown} />
            </DoubleElement>
          </button>
          <Dialog
            target={
              <button type="button">
                <DoubleElement className="button" id="custom">
                  Custom Hats{' '}
                  <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                </DoubleElement>
              </button>
            }
            title="Custom Designs"
            className="custom-dialog"
          >
            Custom designs page is in the works! For now, see our{' '}
            <b>
              <a href="https://www.instagram.com/p/DDr601Wx6sF/?img_index=1">
                Instagram post{' '}
                <FontAwesomeIcon icon={faExternalLink} size="xs" />
              </a>
            </b>{' '}
            for information on custom orders, including dimensions for each hat
            size. We have all sizes!
          </Dialog>
        </div>
      </div>
      <div id="header-right">
        <section id="social-links-wrapper" aria-label="links and social media">
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
            <CircleLink
              className="email"
              title="Email"
              icon={faEnvelope}
              onClick={copyEmail}
            />
            <CircleLink
              className="soundcloud"
              title="SoundCloud"
              icon={faSoundcloud}
              href="https://soundcloud.com/marisa-kerstanski"
            />
          </div>
        </section>
      </div>
    </header>
  )
}
