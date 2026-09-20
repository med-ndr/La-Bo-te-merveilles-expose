import { useEffect, useRef } from 'react'
import { X } from 'lucide-react'
import './Modal.css'

function Modal({ title, subtitle, onClose, children }) {
  const dialogRef = useRef(null)

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKeyDown)
    dialogRef.current?.focus()
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-panel pattern-zellige"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        tabIndex={-1}
        ref={dialogRef}
        onClick={(e) => e.stopPropagation()}
      >
        <button className="modal-close" onClick={onClose} aria-label="Fermer la fenêtre">
          <X size={20} />
        </button>
        <h3 id="modal-title">{title}</h3>
        {subtitle && <p className="modal-subtitle">{subtitle}</p>}
        <div className="modal-body">{children}</div>
      </div>
    </div>
  )
}

export default Modal
