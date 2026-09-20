import { Sparkles, Heart, BrainCircuit, Feather } from 'lucide-react'
import SectionTitle from '../components/SectionTitle.jsx'
import InteractiveBox from '../components/InteractiveBox.jsx'
import './LaBoite.css'

const meanings = [
  {
    icon: Feather,
    title: "Qu'est-ce que la boîte ?",
    text: "Un simple coffret où Sidi Mohammed conserve des objets ordinaires — billes, perles, bouts de ficelle — sans valeur marchande, mais précieux à ses yeux d'enfant.",
  },
  {
    icon: Heart,
    title: "Pourquoi il la garde",
    text: "Faute de frères, de sœurs ou de vrais compagnons de jeu, l'enfant a besoin d'un espace bien à lui, où se réfugier loin du regard des adultes.",
  },
  {
    icon: Sparkles,
    title: "Ce qu'elle représente",
    text: "Elle symbolise la capacité de l'enfance à transformer le rien en trésor, et à donner un sens et une valeur à ce que le monde adulte ignore.",
  },
  {
    icon: BrainCircuit,
    title: "Boîte, imagination, solitude",
    text: "La boîte est indissociable de l'imagination de Sidi Mohammed : elle lui permet de transformer sa solitude en un espace de rêverie plutôt qu'en un simple manque.",
  },
]

function LaBoite() {
  return (
    <div className="page">
      <div className="container">
        <SectionTitle
          eyebrow="Le symbole du roman"
          title="La Boîte à Merveilles"
          subtitle="Un objet minuscule qui porte à lui seul le sens de tout le roman."
        />

        <div className="boite-interactive">
          <InteractiveBox autoLabel="Ouvrir la boîte à merveilles" />
        </div>

        <div className="boite-meanings">
          {meanings.map((m) => (
            <div className="meaning-card" key={m.title}>
              <div className="meaning-icon" aria-hidden="true">
                <m.icon size={22} />
              </div>
              <h3>{m.title}</h3>
              <p>{m.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default LaBoite
