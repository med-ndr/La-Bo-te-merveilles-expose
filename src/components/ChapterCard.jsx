import { ChevronDown } from 'lucide-react'
import characters from '../data/characters.js'
import './ChapterCard.css'

function ChapterCard({ chapter, isOpen, onToggle }) {
  const chapterCharacters = characters.filter((c) => chapter.characters.includes(c.id))

  return (
    <div className={`chapter-card ${isOpen ? 'is-open' : ''}`}>
      <button
        className="chapter-header"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={`chapitre-${chapter.number}`}
      >
        <span className="chapter-number">{chapter.number}</span>
        <span className="chapter-title">{chapter.title}</span>
        <ChevronDown className="chapter-chevron" size={20} aria-hidden="true" />
      </button>

      {isOpen && (
        <div className="chapter-details" id={`chapitre-${chapter.number}`}>
          <p className="chapter-summary">{chapter.summary}</p>

          <div className="chapter-block">
            <h4>Événements importants</h4>
            <ul>
              {chapter.events.map((event) => (
                <li key={event}>{event}</li>
              ))}
            </ul>
          </div>

          <div className="chapter-block">
            <h4>Personnages importants</h4>
            <div className="chapter-characters">
              {chapterCharacters.map((c) => (
                <span key={c.id} className="chapter-character-pill">
                  {c.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default ChapterCard
