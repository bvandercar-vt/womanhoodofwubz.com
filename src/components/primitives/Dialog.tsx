import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classNames from 'classnames'
import type { PropsWithChildren } from 'react'
import { cloneElement, useId, useState } from 'react'
import Modal from 'react-modal'

export const Dialog = ({
  children,
  title,
  target,
  className,
}: PropsWithChildren<
  {
    title: React.ReactNode
    target: React.ReactElement
  } & Pick<React.HTMLAttributes<HTMLElement>, 'className'>
>) => {
  const [isOpen, setIsOpen] = useState(false)
  const dialogId = useId()
  const titleId = useId()

  return (
    <>
      {cloneElement(target, {
        onClick: () => setIsOpen(true),
        'aria-haspopup': 'dialog',
        role: 'button',
        tabIndex: 0,
        className: classNames('dialog-target', target.props.className),
      } satisfies React.HTMLAttributes<HTMLElement>)}
      {/* @ts-expect-error - react-modal's class type is incompatible with React 18's Component (refs) */}
      <Modal
        isOpen={isOpen}
        onRequestClose={() => setIsOpen(false)}
        portalClassName="modal-portal"
        overlayClassName="modal-overlay"
        className={classNames('modal', 'modal-centered', className)}
        aria={{ labelledby: titleId }}
        id={dialogId}
      >
        <div className="modal-header">
          <h3 id={titleId}>{title}</h3>
          <button
            aria-label="close dialog"
            type="button"
            aria-controls={dialogId}
            onClick={() => setIsOpen(false)}
            className="close-btn"
          >
            <FontAwesomeIcon icon={faXmark} size="xl" />
          </button>
        </div>
        {children}
      </Modal>
    </>
  )
}
