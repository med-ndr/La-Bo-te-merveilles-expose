import { BookMarked } from 'lucide-react'
import './Footer.css'

function Footer() {
  return (
    <footer className="footer pattern-border">
      <div className="container footer-inner">
        <div className="footer-brand">
          <BookMarked size={18} aria-hidden="true" />
          <span>La Boîte à Merveilles</span>
        </div>
        <p className="footer-text">
          Présentation interactive du roman d'Ahmed Sefrioui — réalisée pour le Lycée Mohamed V,
          1ère année du baccalauréat.
        </p>
        <p className="footer-signature">Créé avec passion par Mohamed EL Karkri</p>
      </div>
    </footer>
  )
}

export default Footer