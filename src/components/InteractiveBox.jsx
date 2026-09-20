import { useState } from 'react'
import './InteractiveBox.css'

const treasures = [
  {
    id: 'bille',
    emoji: '🔵',
    name: 'Une bille de verre',
    text: "Un simple bout de verre coloré devient, pour l'enfant, un petit monde à contempler à la lumière.",
  },
  {
    id: 'clou',
    emoji: '🔩',
    name: 'Un clou recourbé',
    text: 'Un objet sans valeur pour les adultes, mais que Sidi Mohammed imagine porteur d\u2019une histoire secrète.',
  },
  {
    id: 'piece',
    emoji: '🪙',
    name: 'Une vieille pièce',
    text: "Une pièce hors d'usage, gardée non pour son prix, mais pour le souvenir ou le rêve qu'elle évoque.",
  },
  {
    id: 'perle',
    emoji: '📿',
    name: 'Une perle isolée',
    text: "Détachée d'un collier oublié, elle nourrit l'imagination de l'enfant plus qu'un bijou entier ne le ferait.",
  },
  {
    id: 'coquillage',
    emoji: '🐚',
    name: 'Un coquillage',
    text: "Venu de nulle part et de partout, il ouvre une porte vers des lieux que l'enfant n'a jamais vus.",
  },
  {
    id: 'ficelle',
    emoji: '🧵',
    name: 'Un bout de ficelle',
    text: 'Un fragment banal, mais suffisant pour inventer mille jeux dans la solitude des après-midi.',
  },
]

function InteractiveBox({ autoLabel = 'Ouvrir la boîte' }) {
  const [isOpen, setIsOpen] = useState(false)
  const [selected, setSelected] = useState(null)

  const handleOpen = () => {
    setIsOpen(true)
  }

  return (
    <div className="interactive-box-wrap">
      <div className={`box-scene ${isOpen ? 'is-open' : ''}`}>
        <button
          className="box-lid"
          onClick={handleOpen}
          aria-label={isOpen ? 'Boîte ouverte' : autoLabel}
          disabled={isOpen}
        >
          <span className="box-lid-star" aria-hidden="true">✦</span>
        </button>
        <div className="box-base pattern-zellige-gold">
          {isOpen && (
            <div className="box-treasures">
              {treasures.map((t, i) => (
                <button
                  key={t.id}
                  className="treasure"
                  style={{ animationDelay: `${i * 70}ms` }}
                  onClick={() => setSelected(t)}
                  aria-label={`En savoir plus sur : ${t.name}`}
                >
                  <span aria-hidden="true">{t.emoji}</span>
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {!isOpen && (
        <p className="box-hint">Cliquez sur la boîte pour découvrir ce qu\u2019elle renferme.</p>
      )}

      {isOpen && !selected && (
        <p className="box-hint">Touchez un objet pour lire son histoire.</p>
      )}

      {selected && (
        <div className="treasure-card" role="status">
          <h4>
            <span aria-hidden="true">{selected.emoji}</span> {selected.name}
          </h4>
          <p>{selected.text}</p>
        </div>
      )}
    </div>
  )
}

export default InteractiveBox
