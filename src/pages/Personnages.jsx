import { useState } from 'react'
import SectionTitle from '../components/SectionTitle.jsx'
import CharacterCard from '../components/CharacterCard.jsx'
import Modal from '../components/Modal.jsx'
import characters from '../data/characters.js'
import './Personnages.css'

function Personnages() {
  const [selected, setSelected] = useState(null)

  return (
    <div className="page">
      <div className="container">
        <SectionTitle
          eyebrow="Les habitants de Dar Chouafa"
          title="Personnages"
          subtitle="Cliquez sur une fiche pour découvrir son rôle et sa relation avec Sidi Mohammed."
        />

        <div className="character-grid">
          {characters.map((c) => (
            <CharacterCard key={c.id} character={c} onOpen={setSelected} />
          ))}
        </div>
      </div>

      {selected && (
        <Modal title={selected.name} subtitle={selected.relation} onClose={() => setSelected(null)}>
          <p><strong>Rôle : </strong>{selected.role}</p>
          <p>{selected.description}</p>
        </Modal>
      )}
    </div>
  )
}

export default Personnages
