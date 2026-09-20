// Données sur les personnages de "La Boîte à Merveilles" d'Ahmed Sefrioui.
// Les informations sont volontairement prudentes : en cas de doute sur un
// détail biographique, l'élément est laissé de côté plutôt qu'inventé.

const characters = [
  {
    id: 'sidi-mohammed',
    name: 'Sidi Mohammed',
    role: 'Narrateur — enfant unique',
    relation: 'Le personnage principal',
    short: "L'enfant qui raconte son enfance à Fès, des années plus tard, avec les yeux de l'adulte qu'il est devenu.",
    description:
      "Sidi Mohammed est le narrateur du roman : un enfant unique d'environ six ans qui grandit dans la maison Dar Chouafa, au cœur de la médina de Fès. Sensible et rêveur, il se sent souvent seul, sans frère ni sœur avec qui jouer. Sa boîte à merveilles, remplie d'objets sans valeur marchande mais précieux à ses yeux, devient son refuge contre la solitude. Le roman est raconté à la première personne, par le narrateur adulte qui se souvient de son enfance.",
  },
  {
    id: 'lalla-zoubida',
    name: 'Lalla Zoubida',
    role: 'La mère de Sidi Mohammed',
    relation: 'Sa mère',
    short: 'Une mère aimante et énergique, très attachée aux traditions et aux relations de voisinage.',
    description:
      "Lalla Zoubida est la mère de Sidi Mohammed. Femme au foyer, elle occupe une place centrale dans la vie quotidienne de l'enfant : elle l'emmène au hammam, gère la maison et entretient des relations parfois tendues avec les autres femmes de Dar Chouafa. Attachée aux croyances et pratiques populaires de son époque, elle représente l'univers féminin et domestique du roman.",
  },
  {
    id: 'maalem-abdeslam',
    name: 'Maalem Abdeslam',
    role: 'Le père de Sidi Mohammed',
    relation: 'Son père',
    short: "Tisserand de son métier, figure d'autorité discrète mais aimante.",
    description:
      "Maalem Abdeslam est le père de Sidi Mohammed. Il exerce le métier de tisserand (maalem signifie « maître artisan ») et travaille dans la médina de Fès. Homme plutôt calme et pieux, il incarne une figure paternelle rassurante, même si le roman évoque aussi les difficultés et les soucis matériels qui pèsent parfois sur la famille.",
  },
  {
    id: 'rahma',
    name: 'Rahma',
    role: 'Voisine de Dar Chouafa',
    relation: 'Voisine, mère de Zineb',
    short: 'Voisine de la famille, mère de la petite Zineb, avec qui les relations sont parfois conflictuelles.',
    description:
      "Rahma habite également Dar Chouafa. Elle est la mère de Zineb, une des rares camarades de jeu de Sidi Mohammed. Les relations entre Rahma et Lalla Zoubida illustrent la promiscuité et les tensions ordinaires de la vie collective dans une maison partagée par plusieurs familles.",
  },
  {
    id: 'zineb',
    name: 'Zineb',
    role: 'Fille de Rahma',
    relation: 'Compagne de jeu de Sidi Mohammed',
    short: "L'une des seules camarades de jeu de l'enfant à Dar Chouafa.",
    description:
      "Zineb est la fille de Rahma. Elle partage avec Sidi Mohammed quelques moments de jeu au sein de la maison Dar Chouafa, offrant à l'enfant un peu de compagnie dans son quotidien par ailleurs marqué par la solitude.",
  },
  {
    id: 'lalla-aicha',
    name: 'Lalla Aïcha',
    role: 'Voisine de Dar Chouafa',
    relation: 'Voisine de la famille',
    short: "Une autre voisine de la maison, qui fait partie du petit monde féminin de Dar Chouafa.",
    description:
      "Lalla Aïcha fait partie des voisines qui vivent avec la famille de Sidi Mohammed à Dar Chouafa. Comme les autres femmes de la maison, elle participe à la vie collective faite d'entraide, de commérages et de tensions passagères qui rythme le quotidien du roman.",
  },
  {
    id: 'lalla-kenza',
    name: 'Lalla Kenza',
    role: 'La chouafa (voyante)',
    relation: "Habitante de la maison, à l'origine de son nom",
    short: "La voyante qui donne son nom à la maison « Dar Chouafa » (la maison de la voyante).",
    description:
      "Lalla Kenza est la chouafa, c'est-à-dire la diseuse de bonne aventure, qui occupe l'étage supérieur de la maison — d'où le nom « Dar Chouafa » (la maison de la voyante). Elle reçoit des visiteuses venues chercher des remèdes ou des prédictions, et incarne les pratiques de magie populaire et de superstition très présentes dans l'univers du roman.",
  },
  {
    id: 'si-abderrahmane',
    name: 'Si Abderrahmane',
    role: 'Le fqih du Msid',
    relation: "Maître d'école coranique de Sidi Mohammed",
    short: "Le maître de l'école coranique (le Msid) que fréquente Sidi Mohammed.",
    description:
      "Si Abderrahmane est le fqih (maître) du Msid, l'école coranique où Sidi Mohammed apprend à lire et à réciter le Coran. Il représente l'univers de l'éducation traditionnelle marocaine de l'époque, avec sa discipline stricte et ses méthodes d'enseignement propres au Msid.",
  },
  {
    id: 'driss-el-aouad',
    name: 'Driss El Aouad',
    role: 'Voisin de Dar Chouafa',
    relation: 'Voisin, cordier de métier',
    short: 'Un voisin de la maison, exerçant le métier de cordier.',
    description:
      "Driss El Aouad est un habitant de Dar Chouafa. Il exerce le métier de cordier (fabricant de cordes). Comme les autres personnages de la maison, il fait partie de la petite communauté qui entoure Sidi Mohammed durant son enfance.",
  },
  {
    id: 'abdellah',
    name: 'Abdellah',
    role: "L'épicier",
    relation: 'Ami du père, commerçant du quartier',
    short: "L'épicier du quartier, dont la boutique est un lieu de vie sociale pour les adultes.",
    description:
      "Abdellah tient une épicerie dans le quartier. Sa boutique est un lieu de rencontre et de discussion pour les adultes du roman, notamment pour le père de Sidi Mohammed, et illustre la vie du souk et du commerce de proximité dans la médina de Fès.",
  },
];

export default characters;
