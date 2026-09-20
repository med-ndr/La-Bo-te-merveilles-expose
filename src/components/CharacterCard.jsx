import './CharacterCard.css'

function CharacterCard({ character, onOpen }) {
  return (
    <button className="character-card arch-card" onClick={() => onOpen(character)}>
      <div className="character-avatar" aria-hidden="true">
        {character.name.charAt(0)}
      </div>
      <h3>{character.name}</h3>
      <p className="character-role">{character.role}</p>
      <p className="character-short">{character.short}</p>
      <span className="character-cta">Ouvrir la fiche</span>
    </button>
  )
}

export default CharacterCard
