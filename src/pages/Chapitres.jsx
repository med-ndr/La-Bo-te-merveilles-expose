import { useState } from 'react'
import { Info } from 'lucide-react'
import SectionTitle from '../components/SectionTitle.jsx'
import ChapterCard from '../components/ChapterCard.jsx'
import chapters from '../data/chapters.js'
import './Chapitres.css'

function Chapitres() {
  const [openNumber, setOpenNumber] = useState(1)

  return (
    <div className="page">
      <div className="container">
        <SectionTitle
          eyebrow="Douze chapitres, une année d'enfance"
          title="Chapitres"
          subtitle="Cliquez sur un chapitre pour déplier son résumé, ses événements et ses personnages."
        />

        <div className="chapitres-note">
          <Info size={18} aria-hidden="true" />
          <p>
            Résumés simplifiés à visée pédagogique : pour une citation exacte ou un détail précis,
            reportez-vous au texte intégral du roman.
          </p>
        </div>

        <div className="chapters-list">
          {chapters.map((chapter) => (
            <ChapterCard
              key={chapter.number}
              chapter={chapter}
              isOpen={openNumber === chapter.number}
              onToggle={() => setOpenNumber(openNumber === chapter.number ? null : chapter.number)}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Chapitres
