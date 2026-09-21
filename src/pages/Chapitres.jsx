import { useState } from 'react'
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