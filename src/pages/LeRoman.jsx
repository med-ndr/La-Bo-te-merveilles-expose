import { Feather, BookOpenText, MapPin, Mic2, CalendarDays, Layers } from 'lucide-react'
import SectionTitle from '../components/SectionTitle.jsx'
import InfoCard from '../components/InfoCard.jsx'
import './LeRoman.css'

const infos = [
  { icon: Feather, label: 'Auteur', value: 'Ahmed Sefrioui' },
  { icon: BookOpenText, label: 'Titre', value: 'La Boîte à Merveilles' },
  { icon: Layers, label: 'Genre', value: 'Roman autobiographique' },
  { icon: CalendarDays, label: 'Publication', value: '1954' },
  { icon: MapPin, label: 'Cadre', value: 'La médina de Fès, Maroc' },
  { icon: Mic2, label: 'Narrateur', value: 'Sidi Mohammed (narration à la 1ère personne)' },
]

function LeRoman() {
  return (
    <div className="page">
      <div className="container">
        <SectionTitle
          eyebrow="Fiche d'identité"
          title="Le Roman"
          subtitle="Les repères essentiels pour situer l'œuvre avant d'en explorer les détails."
        />

        <div className="roman-info-grid">
          {infos.map((info) => (
            <InfoCard key={info.label} {...info} />
          ))}
        </div>

        <div className="roman-summary">
          <h3>Résumé du roman</h3>
          <p>
            À travers les yeux de Sidi Mohammed, un enfant unique d'environ six ans, le roman
            raconte le quotidien d'une famille modeste dans la maison Dar Chouafa, au cœur de la
            médina de Fès. Le père, Maalem Abdeslam, est tisserand ; la mère, Lalla Zoubida,
            tient la maison et entretient des liens de voisinage faits d'entraide et de tensions.
          </p>
          <p>
            Faute de frères, de sœurs ou de véritables camarades de jeu, Sidi Mohammed vit une
            enfance marquée par la solitude. Il trouve refuge dans son imagination et dans sa
            « boîte à merveilles », où il conserve des objets sans grande valeur mais chargés de
            sens à ses yeux : billes, perles, bouts de ficelle... Le récit alterne entre scènes de
            la vie quotidienne — le Msid, le hammam, les fêtes religieuses — et moments plus
            intimes qui dessinent le portrait sensible d'une enfance et d'un Maroc traditionnel.
          </p>
          <p>
            Raconté à la première personne par le narrateur devenu adulte, le roman mêle nostalgie
            et tendresse envers ce monde disparu, tout en interrogeant la place de l'imaginaire
            face à la solitude et aux difficultés de la vie.
          </p>
        </div>
      </div>
    </div>
  )
}

export default LeRoman
