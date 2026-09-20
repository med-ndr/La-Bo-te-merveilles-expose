// Résumés simplifiés des 12 chapitres, à visée pédagogique.
// Ce sont des repères généraux : pour une citation précise ou un détail
// d'événement, il est recommandé de vérifier avec le texte intégral.

const chapters = [
  {
    number: 1,
    title: 'Dar Chouafa, la maison de l\u2019enfance',
    summary:
      "Le narrateur adulte plante le décor : la maison Dar Chouafa, dans la médina de Fès, où vit la famille de Sidi Mohammed avec plusieurs autres foyers. L'enfant, fils unique, décrit sa solitude et le monde imaginaire qu'il se construit.",
    events: [
      'Présentation de la maison Dar Chouafa et de ses habitants',
      "Portrait de l'enfant unique et de sa solitude",
      'Premières allusions à la boîte à merveilles',
    ],
    characters: ['sidi-mohammed', 'lalla-zoubida', 'lalla-kenza'],
  },
  {
    number: 2,
    title: 'Le Msid et l\u2019école coranique',
    summary:
      "Sidi Mohammed fréquente le Msid, l'école coranique dirigée par le fqih Si Abderrahmane. Le chapitre montre l'univers de l'apprentissage traditionnel, entre discipline stricte et vie de groupe.",
    events: [
      'Journée type au Msid',
      'Méthodes d\u2019enseignement du fqih',
      'Relations entre les enfants du Msid',
    ],
    characters: ['sidi-mohammed', 'si-abderrahmane'],
  },
  {
    number: 3,
    title: 'Une sortie au hammam',
    summary:
      "Sidi Mohammed accompagne sa mère, Lalla Zoubida, au bain maure. Ce moment permet de découvrir l'univers social des femmes de la médina, fait d'entraide mais aussi de rivalités.",
    events: [
      'Préparatifs avant le hammam',
      'Rencontres avec d\u2019autres femmes du quartier',
      'Regard de l\u2019enfant sur cet univers féminin',
    ],
    characters: ['sidi-mohammed', 'lalla-zoubida'],
  },
  {
    number: 4,
    title: 'La fête de l\u2019Achoura',
    summary:
      "La fête de l'Achoura apporte joie et effervescence dans la maison : préparatifs, jouets, tambourins. Un moment de bonheur rare qui contraste avec la solitude habituelle de l'enfant.",
    events: [
      'Préparatifs de la fête',
      'Cadeaux et jouets offerts à l\u2019enfant',
      'Ambiance festive à Dar Chouafa',
    ],
    characters: ['sidi-mohammed', 'maalem-abdeslam', 'lalla-zoubida'],
  },
  {
    number: 5,
    title: 'La vie des voisines de Dar Chouafa',
    summary:
      "Le quotidien de la maison est marqué par les relations entre les voisines — Rahma, Lalla Aïcha, Lalla Zoubida — faites de solidarité, de commérages et de tensions passagères.",
    events: [
      'Scènes de la vie collective dans la maison',
      'Tensions et réconciliations entre voisines',
      'Place de Zineb dans les jeux de Sidi Mohammed',
    ],
    characters: ['rahma', 'zineb', 'lalla-aicha', 'lalla-zoubida'],
  },
  {
    number: 6,
    title: 'La chouafa et les croyances populaires',
    summary:
      "Le roman s'attarde sur Lalla Kenza, la voyante qui donne son nom à la maison, et sur les pratiques de magie et de superstition auxquelles recourent les femmes du quartier.",
    events: [
      'Présentation de Lalla Kenza et de son rôle',
      'Croyances et remèdes populaires évoqués',
      'Regard de l\u2019enfant sur ces pratiques',
    ],
    characters: ['lalla-kenza', 'lalla-zoubida'],
  },
  {
    number: 7,
    title: 'Le métier du père et les soucis matériels',
    summary:
      "Maalem Abdeslam, tisserand, traverse des difficultés dans son travail. Le chapitre montre les inquiétudes financières qui pèsent sur la famille et l'inquiétude de l'enfant face aux soucis des adultes.",
    events: [
      'Difficultés liées au métier de tisserand',
      'Tensions et inquiétudes dans le couple parental',
      'Perception de ces soucis par Sidi Mohammed',
    ],
    characters: ['maalem-abdeslam', 'lalla-zoubida', 'sidi-mohammed'],
  },
  {
    number: 8,
    title: 'Le souk et les artisans de la médina',
    summary:
      "Le roman ouvre une fenêtre sur la vie économique de Fès : le souk, les artisans, les commerçants comme l'épicier Abdellah, qui rythment la vie sociale des adultes.",
    events: [
      'Description du souk et de ses commerces',
      'Rôle social de l\u2019épicerie du quartier',
      'Place du travail artisanal dans le roman',
    ],
    characters: ['abdellah', 'maalem-abdeslam', 'driss-el-aouad'],
  },
  {
    number: 9,
    title: 'Une fête religieuse',
    summary:
      "Une célébration religieuse rythme la vie du quartier, mêlant recueillement et ambiance collective, et permet à l'enfant de vivre un moment fort de la vie communautaire.",
    events: [
      'Préparatifs de la célébration',
      'Ambiance de recueillement et de fête',
      'Participation de la famille à l\u2019événement',
    ],
    characters: ['sidi-mohammed', 'maalem-abdeslam'],
  },
  {
    number: 10,
    title: 'Une sortie hors de Dar Chouafa',
    summary:
      "Le récit s'ouvre un temps sur un autre cadre que la maison familiale, offrant à Sidi Mohammed une expérience différente de son quotidien habituel.",
    events: [
      'Départ hors du cadre familier de la maison',
      'Découverte d\u2019un environnement différent',
      'Impressions de l\u2019enfant face à la nouveauté',
    ],
    characters: ['sidi-mohammed', 'lalla-zoubida'],
  },
  {
    number: 11,
    title: 'Une brouille dans la famille',
    summary:
      "Une tension éclate entre les parents de Sidi Mohammed, source d'angoisse pour l'enfant, avant qu'un apaisement ne revienne progressivement au sein du foyer.",
    events: [
      'Origine du désaccord entre les parents',
      'Réaction et angoisse de l\u2019enfant',
      'Retour progressif au calme familial',
    ],
    characters: ['maalem-abdeslam', 'lalla-zoubida', 'sidi-mohammed'],
  },
  {
    number: 12,
    title: 'Le retour au quotidien et le regard de l\u2019adulte',
    summary:
      "Le roman se referme sur le retour à la routine et sur la voix du narrateur adulte, qui livre un regard rétrospectif sur son enfance et sur ce que représentait sa boîte à merveilles.",
    events: [
      'Retour à la vie ordinaire de la famille',
      'Bilan du narrateur adulte sur son enfance',
      'Sens final donné à la boîte à merveilles',
    ],
    characters: ['sidi-mohammed'],
  },
];

export default chapters;
