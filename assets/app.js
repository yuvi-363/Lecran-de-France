const coverImage = 'cover.png'

const LANG_KEY = 'lecran_lang'
let currentLang = 'fr'
try {
  const saved = localStorage.getItem(LANG_KEY)
  if (saved === 'en' || saved === 'fr') currentLang = saved
} catch {}

function saveLang(lang) {
  currentLang = lang
  try { localStorage.setItem(LANG_KEY, lang) } catch {}
}

const i18n = {
  fr: {
    'home.eyebrow': 'Une courte histoire d’un long regard',
    'home.h1': 'Le cinéma<br><em>en images.</em>',
    'home.lede': 'Un magazine pour comprendre les réalisateurs, les mouvements et les idées qui ont fait de la France un laboratoire du cinéma.',
    'home.note': 'Commence par un visage. Suis un mouvement. Repar(t)s avec une autre idée de ce qu’un film peut faire.',
    'home.cta1': 'Rencontrer les réalisateurs',
    'home.cta2': 'Suivre les mouvements',
    'home.cta3': 'Voir la chronologie',
    'home.coverLeft': 'Numéro 01 / dossier scolaire',
    'home.coverRight': 'cinéma français',
    'home.indexEyebrow': 'L’index',
    'home.indexTitle': 'Un cinéma<br><em>jamais unique.</em>',
    'home.indexIntro': 'Le cinéma français n’est pas un style. C’est une conversation entre la rue et le studio, la théorie et l’instinct, la mémoire et le prochain plan.',
    'home.card1Title': 'Les réalisateurs comme lentilles',
    'home.card1Text': 'Quatre cinéastes qui ont changé la manière de regarder les histoires françaises : du réalisme poétique au regard contemporain.',
    'home.card1Link': 'Ouvrir les dossiers',
    'home.card2Title': 'Les mouvements en mouvement',
    'home.card2Text': 'Impressionnisme, réalisme poétique, Nouvelle Vague et cinéma du réel : les idées derrière les images.',
    'home.card2Link': 'Lire les mouvements',
    'home.card3Title': 'Les films qui restent',
    'home.card3Text': 'Une sélection de films influents, choisis pour leur forme et leur héritage, pas pour une popularité invérifiable.',
    'home.card3Link': 'Parcourir la sélection',
    'home.card4Title': 'Le prochain plan',
    'home.card4Text': 'Des réalisatrices et réalisateurs continuent d’élargir le cadre autour de l’identité, de la mémoire et de l’appartenance.',
    'home.card4Link': 'Rencontrer les voix actuelles',
    'home.facesEyebrow': 'Les visages du numéro',
    'home.facesTitle': 'Regarder<br><em>qui regarde.</em>',
    'home.facesIntro': 'Les images des personnes citées dans ce dossier ne sont pas décoratives : elles rappellent que chaque mouvement est aussi une trajectoire humaine.',
    'home.quote': '« Une image ne montre jamais seulement ce qui est devant la caméra. »',
    'home.quoteCite': '— une question à garder devant chaque film',
    'home.sourcesEyebrow': 'Salle de lecture',
    'home.sourcesTitle': 'Les notes<br>derrière la <em>lumière.</em>',
    'home.sourcesIntro': 'Ce projet privilégie les œuvres influentes et documentées plutôt que des classements de films « les plus vus » impossibles à vérifier ici.',
    'home.src1Num': 'Source 01',
    'home.src1Title': 'La BFI',
    'home.src1Text': 'Des dossiers d’histoire du cinéma et de réalisateurs publiés par le British Film Institute.',
    'home.src1Link': 'Visiter la BFI',
    'home.src2Num': 'Source 02',
    'home.src2Title': 'Le CNC',
    'home.src2Text': 'Le Centre national du cinéma documente l’écosystème et l’histoire du cinéma en France.',
    'home.src2Link': 'Visiter le CNC',
    'home.src3Num': 'Source 03',
    'home.src3Title': 'La Cinémathèque',
    'home.src3Text': 'Un lieu de conservation, d’exposition et de programmation qui maintient la mémoire du cinéma vivante.',
    'home.src3Link': 'Visiter l’archive',

    'directors.eyebrow': 'Quatre manières de voir',
    'directors.title': 'Dossiers<br><em>de réalisateurs.</em>',
    'directors.copy': 'Quatre cinéastes, quatre pressions sur le cadre. Ouvre un dossier pour une biographie courte, une contribution, un film-clé et une frise interactive.',
    'directors.ruleLeft': 'Rechercher dans l’archive',
    'directors.ruleRight': '4 profils / 4 trajectoires',
    'directors.filterLabel': 'Filtrer',
    'directors.searchPlaceholder': 'un nom, une époque, un film…',
    'directors.searchAria': 'Rechercher un dossier',

    'movements.eyebrow': 'Les idées en mouvement',
    'movements.title': 'Grands<br><em>mouvements.</em>',
    'movements.copy': 'Un mouvement n’est pas une boîte fermée. C’est une question partagée : comment filmer une conscience, une ville, un corps ou une histoire ?',
    'movements.ruleLeft': 'Quatre courants',
    'movements.ruleRight': 'Du muet au cinéma du réel',
    'movements.sourcesLabel': 'Pour aller plus loin :',
    'movements.src1': 'La BFI sur la Nouvelle Vague',
    'movements.src2': 'La Cinémathèque française',

    'films.eyebrow': 'Une sélection qui reste',
    'films.title': 'Les films<br><em>qui laissent une trace.</em>',
    'films.copy': 'Ce n’est pas un classement. Ce sont des films influents ou emblématiques qui ouvrent une porte vers un mouvement, une forme ou une question du cinéma français.',
    'films.ruleLeft': 'Six portes d’entrée',
    'films.ruleRight': 'Forme / influence / mémoire',
    'films.sourcesLabel': 'Contexte :',

    'emerging.eyebrow': 'Le cadre continue de s’élargir',
    'emerging.title': 'Voix<br><em>actuelles.</em>',
    'emerging.copy': 'Le cinéma français contemporain est pluriel : documentaire et genre, diaspora et banlieue, tribunal et corps, Atlantique et appartement.',
    'emerging.ruleLeft': 'Six trajectoires',
    'emerging.ruleRight': 'Réalisateurs / scénaristes / artistes',
    'emerging.sourcesLabel': 'Explorer :',
    'emerging.src1': 'Festival de Cannes',
    'emerging.src3': 'Académie des César',

    'facts.eyebrow': 'Quelques détails à remarquer',
    'facts.title': 'Repères &<br><em>détails.</em>',
    'facts.copy': 'Les petits faits rendent une culture cinématographique visible. Voici quelques indices fiables pour relier invention, institutions et mémoire des images.',
    'facts.ruleLeft': 'Six indices',
    'facts.ruleRight': 'Histoire / institutions / langage',
    'facts.sourcesLabel': 'Sources :',

    'timeline.eyebrow': 'De 1895 à aujourd’hui',
    'timeline.title': 'Chronologie<br><em>du cinéma.</em>',
    'timeline.copy': 'Plus d’un siècle de films, de manifestes et de regards : sélectionne une période ou clique sur une date pour traverser l’histoire du cinéma français.',
    'timeline.ruleLeft': 'Frise historique',
    'timeline.ruleRight': '11 repères / 1895 — 2023',
    'timeline.filterAria': 'Filtrer par période',
    'timeline.sourcesLabel': 'Repères & archives :'
  },
  en: {
    'home.eyebrow': 'A short history of a long gaze',
    'home.h1': 'Cinema<br><em>in frames.</em>',
    'home.lede': 'A magazine for understanding the directors, movements, and ideas that turned France into a laboratory of film.',
    'home.note': 'Start with a face. Follow a movement. Leave with a different idea of what a film can do.',
    'home.cta1': 'Meet the directors',
    'home.cta2': 'Follow the movements',
    'home.cta3': 'Explore the timeline',
    'home.coverLeft': 'Issue 01 / study dossier',
    'home.coverRight': 'French cinema',
    'home.indexEyebrow': 'The index',
    'home.indexTitle': 'A cinema<br><em>never singular.</em>',
    'home.indexIntro': 'French cinema is not a single style. It is a conversation between the street and the studio, theory and instinct, memory and the next shot.',
    'home.card1Title': 'Directors as lenses',
    'home.card1Text': 'Four filmmakers who reshaped how French stories are seen: from poetic realism to contemporary framing.',
    'home.card1Link': 'Open the dossiers',
    'home.card2Title': 'Movements in motion',
    'home.card2Text': 'Impressionism, poetic realism, the New Wave, and cinéma du réel: the ideas behind the images.',
    'home.card2Link': 'Read the movements',
    'home.card3Title': 'Films that stay',
    'home.card3Text': 'A selection of influential films chosen for their form and legacy, not unverifiable popularity.',
    'home.card3Link': 'Browse the selection',
    'home.card4Title': 'The next frame',
    'home.card4Text': 'Filmmakers continue to widen the frame around identity, memory, and belonging.',
    'home.card4Link': 'Meet current voices',
    'home.facesEyebrow': 'Faces of the issue',
    'home.facesTitle': 'Looking at<br><em>who looks.</em>',
    'home.facesIntro': 'The portraits featured in this dossier are not decorative: they remind us that every movement is also a human trajectory.',
    'home.quote': '“An image never shows only what stands in front of the camera.”',
    'home.quoteCite': '— a question to keep before every film',
    'home.sourcesEyebrow': 'Reading room',
    'home.sourcesTitle': 'Notes<br>behind the <em>light.</em>',
    'home.sourcesIntro': 'This project favors documented, influential works over unverifiable “most-watched” rankings.',
    'home.src1Num': 'Source 01',
    'home.src1Title': 'The BFI',
    'home.src1Text': 'Film history and filmmaker dossiers published by the British Film Institute.',
    'home.src1Link': 'Visit BFI',
    'home.src2Num': 'Source 02',
    'home.src2Title': 'The CNC',
    'home.src2Text': 'France’s National Centre for Cinema documents the country’s film ecosystem and history.',
    'home.src2Link': 'Visit CNC',
    'home.src3Num': 'Source 03',
    'home.src3Title': 'La Cinémathèque',
    'home.src3Text': 'A hub of preservation, exhibitions, and programming that keeps cinema’s memory alive.',
    'home.src3Link': 'Visit the archive',

    'directors.eyebrow': 'Four ways of seeing',
    'directors.title': 'Director<br><em>dossiers.</em>',
    'directors.copy': 'Four filmmakers, four pressures on the frame. Open a dossier for a brief biography, contribution, key film, and interactive timeline.',
    'directors.ruleLeft': 'Search the archive',
    'directors.ruleRight': '4 profiles / 4 trajectories',
    'directors.filterLabel': 'Filter',
    'directors.searchPlaceholder': 'a name, an era, a film…',
    'directors.searchAria': 'Search a dossier',

    'movements.eyebrow': 'Ideas in motion',
    'movements.title': 'Major<br><em>movements.</em>',
    'movements.copy': 'A movement is not a closed box. It is a shared question: how to film consciousness, a city, a body, or a history?',
    'movements.ruleLeft': 'Four currents',
    'movements.ruleRight': 'From silent cinema to cinéma du réel',
    'movements.sourcesLabel': 'Further reading:',
    'movements.src1': 'BFI on the French New Wave',
    'movements.src2': 'La Cinémathèque française',

    'films.eyebrow': 'A lasting selection',
    'films.title': 'Films<br><em>that leave a mark.</em>',
    'films.copy': 'This is not a ranking. These are influential or emblematic films that open a door onto a movement, form, or question in French cinema.',
    'films.ruleLeft': 'Six entry points',
    'films.ruleRight': 'Form / influence / memory',
    'films.sourcesLabel': 'Context:',

    'emerging.eyebrow': 'The frame keeps widening',
    'emerging.title': 'Current<br><em>voices.</em>',
    'emerging.copy': 'Contemporary French cinema is plural: documentary and genre, diaspora and banlieue, courtroom and body, the Atlantic and the apartment.',
    'emerging.ruleLeft': 'Six trajectories',
    'emerging.ruleRight': 'Directors / screenwriters / artists',
    'emerging.sourcesLabel': 'Explore:',
    'emerging.src1': 'Cannes Film Festival',
    'emerging.src3': 'César Academy',

    'facts.eyebrow': 'Details worth noticing',
    'facts.title': 'Landmarks &<br><em>details.</em>',
    'facts.copy': 'Small facts make a film culture visible. Here are reliable clues connecting invention, institutions, and the memory of images.',
    'facts.ruleLeft': 'Six clues',
    'facts.ruleRight': 'History / institutions / language',
    'facts.sourcesLabel': 'Sources:',

    'timeline.eyebrow': 'From 1895 to today',
    'timeline.title': 'Cinema<br><em>timeline.</em>',
    'timeline.copy': 'Over a century of films, manifestos, and gazes: choose an era or click a date to travel through the history of French cinema.',
    'timeline.ruleLeft': 'Historical timeline',
    'timeline.ruleRight': '11 landmarks / 1895 — 2023',
    'timeline.filterAria': 'Filter by era',
    'timeline.sourcesLabel': 'Landmarks & archives:'
  }
}

const pageTitles = {
  home: { fr: 'L’écran de France — Le cinéma français, en images', en: 'L’écran de France — French cinema, in frames' },
  directors: { fr: 'Réalisateurs — L’écran de France', en: 'Directors — L’écran de France' },
  movements: { fr: 'Mouvements — L’écran de France', en: 'Movements — L’écran de France' },
  films: { fr: 'Films — L’écran de France', en: 'Films — L’écran de France' },
  timeline: { fr: 'Chronologie — L’écran de France', en: 'Timeline — L’écran de France' },
  emerging: { fr: 'Voix actuelles — L’écran de France', en: 'Current Voices — L’écran de France' },
  facts: { fr: 'Repères — L’écran de France', en: 'Landmarks — L’écran de France' }
}

const directors = {
  kassovitz: {
    name: 'Mathieu Kassovitz',
    portrait: 'portraits/kassovitz.jpg',
    era: { fr: 'né en 1967 · cinéma contemporain', en: 'born 1967 · contemporary cinema' },
    role: { fr: 'Réalisateur · acteur · scénariste', en: 'Director · actor · screenwriter' },
    themeWord: { fr: 'la friction', en: 'friction' },
    bio: {
      fr: 'Mathieu Kassovitz s’est imposé dans le cinéma indépendant des années 1990 avec une mise en scène urbaine, nerveuse et attentive aux fractures sociales. Ses films observent la ville comme un espace de pression et de choix.',
      en: 'Mathieu Kassovitz emerged in 1990s independent cinema with an urban, kinetic staging attentive to social fractures. His films observe the city as a space of pressure and choice.'
    },
    contribution: {
      fr: 'Avec La Haine, Kassovitz transforme la tension de la banlieue en une grammaire visuelle radicale. Le noir et blanc, le compte à rebours sur vingt-quatre heures et le mélange entre observation documentaire et énergie de genre ont donné une forme internationale à une colère française.',
      en: 'With La Haine, Kassovitz turned suburban tension into a radical visual grammar. Black-and-white cinematography, a twenty-four-hour countdown, and a blend of documentary observation and genre energy gave French anger an international form.'
    },
    film: 'La Haine',
    year: '1995',
    filmText: {
      fr: 'Une journée dans la vie de trois amis après une émeute. Le film fait de la ville un personnage, et du temps une mèche qui brûle.',
      en: 'A day in the life of three friends after a riot. The film turns the city into a character, and time into a burning fuse.'
    },
    timeline: [
      {
        year: '1967',
        title: { fr: 'Naissance à Paris', en: 'Born in Paris' },
        text: { fr: 'Il grandit dans un environnement lié au cinéma et se forme d’abord comme acteur.', en: 'He grew up around filmmaking and first trained as an actor.' },
        glimpse: { fr: 'Avant le cadre : une génération qui regarde la ville autrement.', en: 'Before the frame: a generation looking at the city differently.' }
      },
      {
        year: '1993',
        title: { fr: 'Métisse', en: 'Café au Lait (Métisse)' },
        text: { fr: 'Son premier long métrage met déjà en scène les tensions d’identité, de désir et de milieu.', en: 'His debut feature already staged tensions of identity, desire, and background.' },
        glimpse: { fr: 'Un premier geste : filmer les frontières intimes.', en: 'A first gesture: filming intimate borders.' }
      },
      {
        year: '1995',
        title: { fr: 'La Haine', en: 'La Haine' },
        text: { fr: 'Le film reçoit le Prix de la mise en scène à Cannes et devient une œuvre majeure des années 1990.', en: 'The film won Best Director at Cannes and became a landmark work of the 1990s.' },
        glimpse: { fr: 'Le film-clé : une course contre le temps en noir et blanc.', en: 'The key film: a race against time in black and white.' }
      },
      {
        year: '2000 →',
        title: { fr: 'Au-delà du cadre', en: 'Beyond the frame' },
        text: { fr: 'Il poursuit une carrière d’acteur et de réalisateur, entre productions françaises et internationales.', en: 'He continued working as both actor and director across French and international productions.' },
        glimpse: { fr: 'Après le choc : changer d’échelle sans perdre la tension.', en: 'After the shock: shifting scale without losing tension.' }
      }
    ]
  },
  sciamma: {
    name: 'Céline Sciamma',
    portrait: 'portraits/sciamma.jpg',
    era: { fr: 'née en 1978 · cinéma contemporain', en: 'born 1978 · contemporary cinema' },
    role: { fr: 'Réalisatrice · scénariste', en: 'Director · screenwriter' },
    themeWord: { fr: 'l’attention', en: 'attention' },
    bio: {
      fr: 'Céline Sciamma construit un cinéma de gestes, de regards et de passages. Chez elle, l’identité n’est jamais une réponse fixe : c’est un espace que les personnages apprennent à habiter.',
      en: 'Céline Sciamma builds a cinema of gestures, gazes, and passages. In her work, identity is never a fixed answer: it is a space characters learn to inhabit.'
    },
    contribution: {
      fr: 'Sciamma a élargi les possibilités du récit d’apprentissage français. Sa précision du cadre, son attention aux groupes et son intérêt pour les subjectivités féminines et queer font de l’intimité une force de mise en scène.',
      en: 'Sciamma expanded the possibilities of the French coming-of-age story. Her precision of framing, attention to groups, and focus on female and queer subjectivities turn intimacy into a directing force.'
    },
    film: 'Portrait de la jeune fille en feu',
    year: '2019',
    filmText: {
      fr: 'Sur une île, une peintre et son modèle apprennent à se regarder. Le film parle de désir, de mémoire et des images que l’on garde.',
      en: 'On an island, a painter and her model learn to look at each other. The film speaks of desire, memory, and the images we keep.'
    },
    timeline: [
      {
        year: '1978',
        title: { fr: 'Naissance à Pontoise', en: 'Born in Pontoise' },
        text: { fr: 'Elle grandit au nord de Paris puis étudie la littérature avant d’entrer à La Fémis.', en: 'She grew up north of Paris and studied literature before attending La Fémis.' },
        glimpse: { fr: 'Le regard se forme : littérature, école de cinéma, observation du quotidien.', en: 'Forming the gaze: literature, film school, observing everyday life.' }
      },
      {
        year: '2007',
        title: { fr: 'Naissance des pieuvres', en: 'Water Lilies' },
        text: { fr: 'Son premier long métrage observe les liens d’amitié et de désir autour d’une piscine.', en: 'Her debut feature observes friendship and desire around a swimming pool.' },
        glimpse: { fr: 'Premier plongeon : le corps adolescent devient un territoire de cinéma.', en: 'First dive: the adolescent body becomes a territory of cinema.' }
      },
      {
        year: '2014',
        title: { fr: 'Bande de filles', en: 'Girlhood' },
        text: { fr: 'Un récit vibrant sur l’amitié, la performance et la possibilité de se réinventer.', en: 'A vibrant story about friendship, performance, and the possibility of reinvention.' },
        glimpse: { fr: 'La bande : la caméra circule entre les corps et les voix.', en: 'The group: the camera moves between bodies and voices.' }
      },
      {
        year: '2019 →',
        title: { fr: 'Un cadre plus large', en: 'A wider frame' },
        text: { fr: 'Portrait de la jeune fille en feu est présenté à Cannes et son travail s’ouvre aussi vers l’animation et la transmission.', en: 'Portrait of a Lady on Fire premiered at Cannes, while her work also expanded into animation and mentorship.' },
        glimpse: { fr: 'Le regard devient réciproque : filmer, c’est aussi être regardé.', en: 'The gaze becomes mutual: to film is also to be seen.' }
      }
    ]
  },
  carne: {
    name: 'Marcel Carné',
    portrait: 'portraits/carne.jpg',
    era: { fr: '1906–1996 · réalisme poétique', en: '1906–1996 · poetic realism' },
    role: { fr: 'Réalisateur · scénariste', en: 'Director · screenwriter' },
    themeWord: { fr: 'l’atmosphère', en: 'atmosphere' },
    bio: {
      fr: 'Marcel Carné a façonné l’atmosphère du cinéma français avant et pendant la Seconde Guerre mondiale. Chez lui, la pluie, les rues, les décors et la nuit deviennent des forces dramatiques.',
      en: 'Marcel Carné shaped the atmosphere of French cinema before and during World War II. In his films, rain, streets, sets, and night become dramatic forces.'
    },
    contribution: {
      fr: 'Carné a donné au réalisme poétique une forme populaire et sophistiquée. Ses personnages semblent souvent pris entre la classe sociale, le désir et le destin ; ses décors font sentir le monde intérieur des héros.',
      en: 'Carné gave poetic realism a form both popular and refined. His characters are often caught between class, desire, and fate; his sets make their inner world tangible.'
    },
    film: 'Les Enfants du paradis',
    year: '1945',
    filmText: {
      fr: 'Une fresque amoureuse dans le monde du théâtre, tournée dans un contexte de guerre et devenue un monument du cinéma français.',
      en: 'A romantic fresco set in the world of theatre, filmed during wartime and celebrated as a monument of French cinema.'
    },
    timeline: [
      {
        year: '1906',
        title: { fr: 'Naissance à Paris', en: 'Born in Paris' },
        text: { fr: 'Il commence comme assistant de caméra et critique avant de passer à la réalisation.', en: 'He started as a camera assistant and critic before turning to directing.' },
        glimpse: { fr: 'Avant le monument : apprendre à fabriquer la lumière et l’espace.', en: 'Before the monument: learning how to craft light and space.' }
      },
      {
        year: '1938',
        title: { fr: 'Le Quai des brumes', en: 'Port of Shadows' },
        text: { fr: 'Le film installe un monde de brouillard, de fatalité et de personnages en fuite.', en: 'The film establishes a world of fog, fatality, and characters on the run.' },
        glimpse: { fr: 'Le brouillard comme émotion : une ville où chaque sortie semble impossible.', en: 'Fog as emotion: a city where every exit feels closed.' }
      },
      {
        year: '1945',
        title: { fr: 'Les Enfants du paradis', en: 'Children of Paradise' },
        text: { fr: 'Une œuvre en deux parties, produite dans les contraintes de l’Occupation et de la guerre.', en: 'A two-part work produced under the constraints of Occupation and war.' },
        glimpse: { fr: 'Le théâtre comme miroir : jouer, aimer, survivre.', en: 'Theatre as a mirror: performing, loving, surviving.' }
      },
      {
        year: '1950 →',
        title: { fr: 'Après le réalisme poétique', en: 'After poetic realism' },
        text: { fr: 'Il continue à travailler alors que le cinéma français change de rythme et de génération.', en: 'He continued working as French cinema shifted pace and welcomed a new generation.' },
        glimpse: { fr: 'Changer d’époque : rester fidèle à la puissance du décor.', en: 'Shifting eras: staying faithful to the power of set design.' }
      }
    ]
  },
  clouzot: {
    name: 'Henri-Georges Clouzot',
    portrait: 'portraits/clouzot.png',
    era: { fr: '1907–1977 · suspense & drame moral', en: '1907–1977 · suspense & moral drama' },
    role: { fr: 'Réalisateur · scénariste', en: 'Director · screenwriter' },
    themeWord: { fr: 'la pression', en: 'pressure' },
    bio: {
      fr: 'Henri-Georges Clouzot apporte une précision d’ingénieur au suspense. Ses films mettent les personnages sous pression : une route dangereuse, une pièce fermée, une institution, un groupe dont la confiance se fissure.',
      en: 'Henri-Georges Clouzot brought an engineer’s precision to suspense. His films put characters under pressure: a treacherous road, a locked room, an institution, a group whose trust fractures.'
    },
    contribution: {
      fr: 'Clouzot a établi une tradition française du thriller psychologique et de l’ambiguïté morale. Le suspense n’est pas seulement une énigme : c’est une expérience qui révèle ce que la peur et la survie font aux individus.',
      en: 'Clouzot established a French tradition of psychological thriller and moral ambiguity. Suspense is not merely a puzzle: it is an experiment revealing what fear and survival do to people.'
    },
    film: 'Le Salaire de la peur',
    year: '1953',
    filmText: {
      fr: 'Quatre hommes transportent de la nitroglycérine sur une route de montagne. L’aventure devient une étude du choix sous pression.',
      en: 'Four men haul nitroglycerin across a mountain road. The journey becomes a study of choice under pressure.'
    },
    timeline: [
      {
        year: '1907',
        title: { fr: 'Naissance à Niort', en: 'Born in Niort' },
        text: { fr: 'Après des études de droit et de sciences politiques, il travaille dans le cinéma européen comme scénariste.', en: 'After studying law and political science, he worked in European cinema as a screenwriter.' },
        glimpse: { fr: 'Le suspense commence dans l’écriture : organiser l’information, retenir le regard.', en: 'Suspense begins in writing: organizing information, holding back the gaze.' }
      },
      {
        year: '1942',
        title: { fr: 'L’Assassin habite… au 21', en: 'The Murderer Lives at Number 21' },
        text: { fr: 'Un premier succès de mystère annonce son goût pour les espaces contrôlés et les indices.', en: 'An early mystery hit heralding his taste for controlled spaces and clues.' },
        glimpse: { fr: 'Le crime comme mécanique : chaque détail peut changer le récit.', en: 'Crime as clockwork: any detail can alter the story.' }
      },
      {
        year: '1953',
        title: { fr: 'Le Salaire de la peur', en: 'The Wages of Fear' },
        text: { fr: 'Le film reçoit le Grand Prix à Cannes et l’Ours d’or à Berlin.', en: 'The film won the Grand Prix at Cannes and the Golden Bear in Berlin.' },
        glimpse: { fr: 'La route comme piège : avancer devient une décision morale.', en: 'The road as a trap: moving forward becomes a moral decision.' }
      },
      {
        year: '1955 →',
        title: { fr: 'Les esprits enfermés', en: 'Trapped minds' },
        text: { fr: 'Les Diaboliques, La Vérité et Le Mystère Picasso prolongent sa recherche sur le regard et la manipulation.', en: 'Les Diaboliques, La Vérité, and The Mystery of Picasso extended his inquiry into gaze and manipulation.' },
        glimpse: { fr: 'Après l’explosion : filmer le doute, l’art et le mensonge.', en: 'After the blast: filming doubt, art, and deception.' }
      }
    ]
  }
}

const movements = [
  {
    title: { fr: 'Impressionnisme français', en: 'French Impressionism' },
    period: { fr: '1918–1929', en: '1918–1929' },
    text: {
      fr: 'Un cinéma muet qui traite l’image comme une langue de sensations. Surimpressions, objectifs déformants et caméra mobile rendent visible la vie intérieure.',
      en: 'A silent cinema treating the image as a language of sensation. Superimpositions, distorting lenses, and a mobile camera make inner life visible.'
    },
    tags: { fr: ['Silence', 'Subjectivité', 'Rythme'], en: ['Silence', 'Subjectivity', 'Rhythm'] }
  },
  {
    title: { fr: 'Réalisme poétique', en: 'Poetic Realism' },
    period: { fr: 'années 1930–40', en: '1930s–40s' },
    text: {
      fr: 'Les rues populaires, les amours impossibles et les décors de studio composent un cinéma d’atmosphère où les personnages semblent pris par le destin.',
      en: 'Working-class streets, impossible loves, and studio sets build an atmospheric cinema where characters seem caught by fate.'
    },
    tags: { fr: ['Brouillard', 'Destin', 'Décors'], en: ['Fog', 'Fate', 'Set design'] }
  },
  {
    title: { fr: 'La Nouvelle Vague', en: 'The French New Wave' },
    period: { fr: 'fin des années 1950–60', en: 'late 1950s–60s' },
    text: {
      fr: 'De jeunes cinéastes remettent en cause les conventions du studio avec des tournages en décors réels, de petites équipes, des coupes franches et des récits modernes.',
      en: 'Young filmmakers challenged studio conventions with location shooting, small crews, jump cuts, and modern stories.'
    },
    tags: { fr: ['Liberté', 'Paris', 'Montage'], en: ['Freedom', 'Paris', 'Editing'] }
  },
  {
    title: { fr: 'Le cinéma du réel', en: 'Cinéma du réel' },
    period: { fr: 'des années 1960 à aujourd’hui', en: '1960s to today' },
    text: {
      fr: 'Le documentaire français interroge la manière de filmer la réalité sans prétendre que la caméra est invisible. Observation, participation et essai restent mêlés.',
      en: 'French documentary questions how reality is filmed without pretending the camera is invisible. Observation, participation, and essay remain intertwined.'
    },
    tags: { fr: ['Documentaire', 'Présence', 'Mémoire'], en: ['Documentary', 'Presence', 'Memory'] }
  }
]

const films = [
  {
    title: 'La Haine',
    personKey: 'kassovitz',
    meta: 'Mathieu Kassovitz · 1995',
    text: {
      fr: 'Une journée tendue après une émeute. Le noir et blanc transforme l’espace urbain en pression et le temps en compte à rebours.',
      en: 'A tense day after a riot. Black and white turns urban space into pressure and time into a countdown.'
    },
    tags: { fr: ['Banlieue', 'Colère', 'Noir & blanc'], en: ['Suburbs', 'Anger', 'Black & white'] }
  },
  {
    title: 'Portrait de la jeune fille en feu',
    personKey: 'sciamma',
    meta: 'Céline Sciamma · 2019',
    text: {
      fr: 'Une peintre et son modèle construisent une image l’une de l’autre sur une île bretonne. Regarder devient une relation.',
      en: 'A painter and her model build an image of each other on a Breton island. Looking becomes a relationship.'
    },
    tags: { fr: ['Désir', 'Mémoire', 'Regard'], en: ['Desire', 'Memory', 'Gaze'] }
  },
  {
    title: 'Les Enfants du paradis',
    personKey: 'carne',
    meta: 'Marcel Carné · 1945',
    text: {
      fr: 'Un théâtre, un boulevard et des amours impossibles composent une fresque du Paris du XIXe siècle.',
      en: 'A theatre, a boulevard, and impossible loves compose a sweeping fresco of 19th-century Paris.'
    },
    tags: { fr: ['Réalisme poétique', 'Théâtre', 'Fresque'], en: ['Poetic realism', 'Theatre', 'Fresco'] }
  },
  {
    title: 'Le Salaire de la peur',
    personKey: 'clouzot',
    meta: 'Henri-Georges Clouzot · 1953',
    text: {
      fr: 'Quatre hommes conduisent un chargement instable à travers les montagnes. Le suspense devient un laboratoire moral.',
      en: 'Four men drive an unstable cargo through the mountains. Suspense becomes a moral laboratory.'
    },
    tags: { fr: ['Thriller', 'Risque', 'Choix'], en: ['Thriller', 'Risk', 'Choice'] }
  },
  {
    title: 'Cléo de 5 à 7',
    personKey: 'varda',
    meta: 'Agnès Varda · 1962',
    text: {
      fr: 'Deux heures d’attente deviennent une marche ouverte dans Paris, de l’image de soi vers l’attention aux autres.',
      en: 'Two hours of waiting become an open walk through Paris, shifting from self-image toward attention to others.'
    },
    tags: { fr: ['Temps', 'Paris', 'Attente'], en: ['Time', 'Paris', 'Waiting'] }
  },
  {
    title: 'Les Quatre Cents Coups',
    personKey: 'truffaut',
    meta: 'François Truffaut · 1959',
    text: {
      fr: 'Le passage agité d’un enfant entre l’école, la famille et la ville devient une œuvre fondatrice du récit d’apprentissage moderne.',
      en: 'A child’s turbulent passage between school, family, and the city becomes a founding work of the modern coming-of-age story.'
    },
    tags: { fr: ['Enfance', 'Liberté', 'Ville'], en: ['Childhood', 'Freedom', 'City'] }
  }
]

const emerging = [
  {
    key: 'diop',
    title: 'Alice Diop',
    meta: { fr: 'réalisatrice · documentaire & fiction', en: 'director · documentary & fiction' },
    text: {
      fr: 'Son cinéma relie migration, mémoire et vie quotidienne. Saint Omer déplace un procès vers une méditation sur la maternité, la langue et le jugement.',
      en: 'Her cinema connects migration, memory, and daily life. Saint Omer shifts a courtroom trial into a meditation on motherhood, language, and judgment.'
    }
  },
  {
    key: 'ducournau',
    title: 'Julia Ducournau',
    meta: { fr: 'réalisatrice · corps & genre', en: 'director · body & genre' },
    text: {
      fr: 'Avec Raw et Titane, elle utilise l’horreur pour parler de transformation, de désir et de normes sociales. Le corps devient un lieu de mutation.',
      en: 'With Raw and Titane, she uses horror to explore transformation, desire, and social norms. The body becomes a site of mutation.'
    }
  },
  {
    key: 'diwan',
    title: 'Audrey Diwan',
    meta: { fr: 'réalisatrice · scénariste · productrice', en: 'director · screenwriter · producer' },
    text: {
      fr: 'Son cinéma observe les forces sociales qui traversent les décisions intimes. L’Événement transforme une histoire personnelle en expérience historique et politique.',
      en: 'Her cinema observes the social forces running through intimate decisions. Happening turns a personal story into a historical and political experience.'
    }
  },
  {
    key: 'matidiop',
    title: 'Mati Diop',
    meta: { fr: 'réalisatrice · artiste', en: 'director · artist' },
    text: {
      fr: 'Entre installation, fiction et documentaire, elle fait porter à l’Atlantique la mémoire du départ et du retour. Atlantique relie amour, travail et absence.',
      en: 'Working across installation, fiction, and documentary, she lets the Atlantic carry memories of departure and return. Atlantics links love, labor, and absence.'
    }
  },
  {
    key: 'ladjly',
    title: 'Ladj Ly',
    meta: { fr: 'réalisateur · pratique collective', en: 'director · collective practice' },
    text: {
      fr: 'Les Misérables met en scène l’expérience du quartier et la tension institutionnelle dans un récit d’ensemble où l’observation devient énergie.',
      en: 'Les Misérables stages neighborhood experience and institutional tension in an ensemble narrative where observation becomes energy.'
    }
  },
  {
    key: 'triet',
    title: 'Justine Triet',
    meta: { fr: 'réalisatrice · scénariste', en: 'director · screenwriter' },
    text: {
      fr: 'Ses drames observent le travail, l’intimité et les récits instables que l’on fabrique sur soi. Anatomie d’une chute transforme un procès en débat sur la vérité.',
      en: 'Her dramas examine work, intimacy, and the unstable stories we build about ourselves. Anatomy of a Fall turns a trial into a debate over truth.'
    }
  }
]

const facts = [
  {
    title: { fr: 'Une première séance publique', en: 'A first public screening' },
    meta: { fr: 'Paris · 28 décembre 1895', en: 'Paris · December 28, 1895' },
    text: {
      fr: 'Une séance payante au Salon Indien du Grand Café est généralement considérée comme un moment fondateur de la projection publique. Le programme présente de courtes scènes de la vie quotidienne.',
      en: 'A paid screening at the Salon Indien du Grand Café is widely considered a founding moment of public cinema projection, featuring short scenes of everyday life.'
    }
  },
  {
    title: { fr: 'Une industrie née avec la photographie', en: 'An industry born with photography' },
    meta: { fr: 'Fin du XIXe siècle', en: 'Late 19th century' },
    text: {
      fr: 'Les premières entreprises du cinéma viennent souvent de la photographie et des appareils optiques. Le cinéma naît donc autant d’une invention artistique que d’une histoire technique.',
      en: 'Early film companies often grew out of photography and optical manufacturing. Cinema was born as much from technical history as from artistic invention.'
    }
  },
  {
    title: { fr: 'Un mouvement nommé par la presse', en: 'A movement named by the press' },
    meta: { fr: 'Années 1950', en: '1950s' },
    text: {
      fr: 'L’expression « Nouvelle Vague » circule d’abord dans le journalisme avant de devenir le nom d’une génération de cinéastes et d’une nouvelle manière de produire les films.',
      en: 'The phrase “Nouvelle Vague” first circulated in journalism before becoming the name of a generation of filmmakers and a new way of producing movies.'
    }
  },
  {
    title: { fr: 'La mémoire comme institution', en: 'Memory as an institution' },
    meta: { fr: 'Cinémathèque française', en: 'Cinémathèque française' },
    text: {
      fr: 'La conservation et la programmation ont fait de l’histoire du cinéma une expérience vivante : un film peut être restauré, revu, discuté, puis relu par une autre génération.',
      en: 'Preservation and programming turned film history into a living experience: a film can be restored, rewatched, debated, and reinterpreted by another generation.'
    }
  },
  {
    title: { fr: 'Un son sur la page', en: 'A sound on the page' },
    meta: { fr: 'Détail éditorial', en: 'Editorial note' },
    text: {
      fr: 'Garder les titres originaux permet de préserver leur rythme et leur contexte. Ce site affiche donc les titres français tels qu’ils circulent dans la culture cinéphile.',
      en: 'Keeping original French film titles preserves their rhythm and context, even when reading the site in English.'
    }
  },
  {
    title: { fr: 'Cannes comme conversation', en: 'Cannes as a conversation' },
    meta: { fr: 'Festival · depuis 1946', en: 'Festival · since 1946' },
    text: {
      fr: 'Un festival ne se résume pas à ses prix. Les projections, les critiques et les sections parallèles forment aussi un espace public où l’on débat de ce que le cinéma peut devenir.',
      en: 'A festival is more than its awards. Screenings, criticism, and parallel sections also form a public forum for debating what cinema can become.'
    }
  }
]

const cinemaTimeline = [
  {
    year: '1895',
    era: 'origins',
    eraLabel: { fr: 'Origines', en: 'Origins' },
    image: 'cover.png',
    title: { fr: 'Première séance au Grand Café', en: 'First screening at the Grand Café' },
    summary: { fr: '28 décembre 1895 · Paris', en: 'December 28, 1895 · Paris' },
    text: {
      fr: 'Au Salon Indien du Grand Café, les frères Lumière organisent une projection publique payante de courtes vues du quotidien. Le cinéma devient une expérience collective.',
      en: 'At the Salon Indien du Grand Café, the Lumière brothers host a paid public screening of short everyday scenes, turning cinema into a collective experience.'
    }
  },
  {
    year: '1918–1929',
    era: 'origins',
    eraLabel: { fr: 'Origines', en: 'Origins' },
    image: 'cover.png',
    title: { fr: 'L’Impressionnisme français', en: 'French Impressionism' },
    summary: { fr: 'Cinéma muet & subjectivité', en: 'Silent cinema & subjectivity' },
    text: {
      fr: 'Des cinéastes explorent la sensation intérieure par le montage rythmique, les surimpressions et les mouvements de caméra, affirmant le cinéma comme un art autonome.',
      en: 'Filmmakers explore inner sensation through rhythmic editing, superimpositions, and camera movement, establishing cinema as an autonomous art.'
    }
  },
  {
    year: '1938',
    era: 'classic',
    eraLabel: { fr: 'Classique', en: 'Classic' },
    image: 'portraits/carne.jpg',
    title: { fr: 'Le Quai des brumes', en: 'Port of Shadows' },
    summary: { fr: 'Marcel Carné · Réalisme poétique', en: 'Marcel Carné · Poetic Realism' },
    text: {
      fr: 'Brouillard portuaire, dialogues poétiques et fatalité : le réalisme poétique trouve son atmosphère emblématique avant la Seconde Guerre mondiale.',
      en: 'Harbor fog, poetic dialogue, and fatalism: poetic realism finds its signature pre-war atmosphere.'
    }
  },
  {
    year: '1945',
    era: 'classic',
    eraLabel: { fr: 'Classique', en: 'Classic' },
    image: 'portraits/carne.jpg',
    title: { fr: 'Les Enfants du paradis', en: 'Children of Paradise' },
    summary: { fr: 'Marcel Carné · Fresque théâtrale', en: 'Marcel Carné · Theatrical fresco' },
    text: {
      fr: 'Tourné sous l’Occupation, ce diptyque monumental célèbre le théâtre, la foule parisienne et l’amour impossible.',
      en: 'Filmed during the Occupation, this monumental two-part work celebrates theatre, Parisian crowds, and impossible love.'
    }
  },
  {
    year: '1946',
    era: 'classic',
    eraLabel: { fr: 'Classique', en: 'Classic' },
    image: 'cover.png',
    title: { fr: 'Création du Festival de Cannes', en: 'Launch of the Cannes Film Festival' },
    summary: { fr: 'Cannes · Scène internationale', en: 'Cannes · International stage' },
    text: {
      fr: 'La première édition du Festival de Cannes s’ouvre en 1946, faisant de la Côte d’Azur un rendez-vous mondial de la critique et de la mise en scène.',
      en: 'The inaugural Cannes Film Festival opens in 1946, turning the French Riviera into a global forum for criticism and filmmaking.'
    }
  },
  {
    year: '1953',
    era: 'classic',
    eraLabel: { fr: 'Classique', en: 'Classic' },
    image: 'portraits/clouzot.png',
    title: { fr: 'Le Salaire de la peur', en: 'The Wages of Fear' },
    summary: { fr: 'Henri-Georges Clouzot · Suspense moral', en: 'Henri-Georges Clouzot · Moral suspense' },
    text: {
      fr: 'Couronné à Cannes et à Berlin, le thriller de Clouzot transforme une route montagneuse en laboratoire de tension psychologique.',
      en: 'Awarded at both Cannes and Berlin, Clouzot’s thriller turns a mountain road into a laboratory of psychological tension.'
    }
  },
  {
    year: '1959',
    era: 'newwave',
    eraLabel: { fr: 'Nouvelle Vague', en: 'New Wave' },
    image: 'portraits/truffaut.jpg',
    title: { fr: 'Les Quatre Cents Coups', en: 'The 400 Blows' },
    summary: { fr: 'François Truffaut · La Nouvelle Vague', en: 'François Truffaut · The New Wave' },
    text: {
      fr: 'Tourné dans les rues de Paris avec une équipe légère, le film de Truffaut marque l’élan international de la Nouvelle Vague.',
      en: 'Shot on Paris streets with a lean crew, Truffaut’s debut marks the international breakthrough of the French New Wave.'
    }
  },
  {
    year: '1962',
    era: 'newwave',
    eraLabel: { fr: 'Nouvelle Vague', en: 'New Wave' },
    image: 'portraits/varda.jpg',
    title: { fr: 'Cléo de 5 à 7', en: 'Cléo from 5 to 7' },
    summary: { fr: 'Agnès Varda · Temps réel', en: 'Agnès Varda · Real time' },
    text: {
      fr: 'Agnès Varda suit deux heures d’attente dans Paris en temps quasi réel, mêlant liberté formelle, regard documentaire et portrait intime.',
      en: 'Agnès Varda follows two hours of waiting in Paris in near real time, blending formal freedom, documentary observation, and intimate portraiture.'
    }
  },
  {
    year: '1995',
    era: 'contemporary',
    eraLabel: { fr: 'Contemporain', en: 'Contemporary' },
    image: 'portraits/kassovitz.jpg',
    title: { fr: 'La Haine', en: 'La Haine' },
    summary: { fr: 'Mathieu Kassovitz · Cinéma urbain', en: 'Mathieu Kassovitz · Urban cinema' },
    text: {
      fr: 'En noir et blanc sur vingt-quatre heures, Kassovitz capte les fractures sociales de la banlieue parisienne et remporte le Prix de la mise en scène à Cannes.',
      en: 'In stark black and white over twenty-four hours, Kassovitz captures social fractures in the Paris suburbs and wins Best Director at Cannes.'
    }
  },
  {
    year: '2019',
    era: 'contemporary',
    eraLabel: { fr: 'Contemporain', en: 'Contemporary' },
    image: 'portraits/sciamma.jpg',
    title: { fr: 'Portrait de la jeune fille en feu', en: 'Portrait of a Lady on Fire' },
    summary: { fr: 'Céline Sciamma · Regard & mémoire', en: 'Céline Sciamma · Gaze & memory' },
    text: {
      fr: 'Céline Sciamma renouvelle le drame historique par une mise en scène du regard réciproque, primée pour son scénario à Cannes.',
      en: 'Céline Sciamma renews period drama through a staging of the mutual gaze, winning Best Screenplay at Cannes.'
    }
  },
  {
    year: '2023',
    era: 'contemporary',
    eraLabel: { fr: 'Contemporain', en: 'Contemporary' },
    image: 'portraits/triet.jpg',
    title: { fr: 'Anatomie d’une chute', en: 'Anatomy of a Fall' },
    summary: { fr: 'Justine Triet · Voix actuelles', en: 'Justine Triet · Current voices' },
    text: {
      fr: 'Palme d’or à Cannes, le film de Justine Triet dissèque la parole, le doute et l’intimité dans un récit judiciaire contemporain.',
      en: 'Winner of the Palme d’Or at Cannes, Justine Triet’s drama dissects speech, doubt, and intimacy inside a contemporary courtroom.'
    }
  }
]

const timelineEraFilters = [
  { key: 'all', label: { fr: 'Toutes les époques', en: 'All eras' } },
  { key: 'origins', label: { fr: 'Origines (1895–1929)', en: 'Origins (1895–1929)' } },
  { key: 'classic', label: { fr: 'Classique (1930–1955)', en: 'Classic (1930–1955)' } },
  { key: 'newwave', label: { fr: 'Nouvelle Vague (1958–1970)', en: 'New Wave (1958–1970)' } },
  { key: 'contemporary', label: { fr: 'Contemporain (1990–Aujourd’hui)', en: 'Contemporary (1990–Today)' } }
]

const currentPage = (decodeURIComponent(window.location.pathname).split('/').pop() || 'index.html').replace(/\.html$/, '').replace(/^index$/, 'home') || 'home'

function t(val) {
  if (val && typeof val === 'object' && ('fr' in val || 'en' in val)) {
    return val[currentLang] || val.fr || ''
  }
  return val ?? ''
}

function header() {
  const nav = [
    ['directors.html', { fr: 'Réalisateurs', en: 'Directors' }, 'directors'],
    ['movements.html', { fr: 'Mouvements', en: 'Movements' }, 'movements'],
    ['films.html', { fr: 'Films', en: 'Films' }, 'films'],
    ['timeline.html', { fr: 'Chronologie', en: 'Timeline' }, 'timeline'],
    ['emerging.html', { fr: 'Voix actuelles', en: 'Current Voices' }, 'emerging'],
    ['facts.html', { fr: 'Repères', en: 'Landmarks' }, 'facts']
  ]
  const skip = currentLang === 'en' ? 'Skip to content' : 'Aller au contenu'
  const homeAria = currentLang === 'en' ? 'L’écran de France Home' : 'Accueil de L’écran de France'
  const sub = currentLang === 'en' ? 'cinema / archive' : 'cinéma / archives'
  const navAria = currentLang === 'en' ? 'Main navigation' : 'Navigation principale'
  const menuAria = currentLang === 'en' ? 'Open menu' : 'Ouvrir le menu'
  const langAria = currentLang === 'en' ? 'Passer le site en français' : 'Switch website language to English'
  return `<a class="skip-link" href="#main-content">${skip}</a><header class="site-header"><div class="wrap navbar"><a class="brand" href="index.html" aria-label="${homeAria}"><span class="brand-mark">LF</span><span class="brand-name">L’écran de France</span><span class="brand-sub">${sub}</span></a><nav class="nav-links" id="site-nav" aria-label="${navAria}">${nav.map(([href, label, key]) => `<a href="${href}" ${currentPage === key ? 'aria-current="page"' : ''}>${t(label)}</a>`).join('')}</nav><div class="nav-actions"><button class="lang-toggle" id="lang-toggle" type="button" aria-label="${langAria}" aria-pressed="${currentLang === 'en'}"><span class="lang-opt ${currentLang === 'fr' ? 'is-active' : ''}">FR</span><span class="lang-sep" aria-hidden="true">/</span><span class="lang-opt ${currentLang === 'en' ? 'is-active' : ''}">EN</span></button><button class="menu-button" id="menu-toggle" type="button" aria-expanded="false" aria-controls="site-nav" aria-label="${menuAria}">☰</button></div></div></header>`
}

function footer() {
  const heading = currentLang === 'en' ? 'Keep the<br>light on.' : 'Gardons<br>la lumière.'
  const k1 = currentLang === 'en' ? 'Explore' : 'Explorer'
  const k2 = currentLang === 'en' ? 'Continue' : 'À suivre'
  const l1 = currentLang === 'en' ? 'The four dossiers' : 'Les quatre dossiers'
  const l2 = currentLang === 'en' ? 'Movements' : 'Les mouvements'
  const l3 = currentLang === 'en' ? 'Essential films' : 'Les films à voir'
  const l4 = currentLang === 'en' ? 'Cinema timeline' : 'Chronologie'
  const l5 = currentLang === 'en' ? 'Current voices' : 'Les voix actuelles'
  const l6 = currentLang === 'en' ? 'Landmarks & details' : 'Repères & détails'
  const l7 = currentLang === 'en' ? 'Sources' : 'Sources'
  const tagline = currentLang === 'en' ? 'French cinema, in frames and fragments.' : 'Le cinéma français, en images et en fragments.'
  return `<footer class="site-footer"><div class="wrap footer-grid"><div><div class="brand"><span class="brand-mark">LF</span><span class="brand-name">L’écran de France</span></div><h2>${heading}</h2></div><div><div class="footer-kicker">${k1}</div><div class="footer-links" style="margin-top:18px"><a href="directors.html">${l1}</a><a href="movements.html">${l2}</a><a href="films.html">${l3}</a><a href="timeline.html">${l4}</a></div></div><div><div class="footer-kicker">${k2}</div><div class="footer-links" style="margin-top:18px"><a href="emerging.html">${l5}</a><a href="facts.html">${l6}</a><a href="index.html#sources">${l7}</a></div></div></div><div class="wrap footer-bottom"><span>${tagline}</span><span><strong>Made by Batch 2 in Section F2.</strong></span></div></footer>`
}

function applyStaticTranslations() {
  document.documentElement.lang = currentLang
  if (currentPage in pageTitles) {
    document.title = t(pageTitles[currentPage])
  }
  const dict = i18n[currentLang] || i18n.fr
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n')
    if (key in dict) el.textContent = dict[key]
  })
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.getAttribute('data-i18n-html')
    if (key in dict) el.innerHTML = dict[key]
  })
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder')
    if (key in dict) el.setAttribute('placeholder', dict[key])
  })
  document.querySelectorAll('[data-i18n-aria]').forEach(el => {
    const key = el.getAttribute('data-i18n-aria')
    if (key in dict) el.setAttribute('aria-label', dict[key])
  })
}

function setupControls() {
  const menu = document.querySelector('#menu-toggle')
  const nav = document.querySelector('#site-nav')
  menu?.addEventListener('click', () => {
    const open = nav.classList.toggle('is-open')
    menu.setAttribute('aria-expanded', String(open))
    menu.setAttribute('aria-label', open ? (currentLang === 'en' ? 'Close menu' : 'Fermer le menu') : (currentLang === 'en' ? 'Open menu' : 'Ouvrir le menu'))
  })
  const langBtn = document.querySelector('#lang-toggle')
  langBtn?.addEventListener('click', () => {
    saveLang(currentLang === 'fr' ? 'en' : 'fr')
    renderApp(true)
  })
}

function setupReveal(forceVisible = false) {
  const items = document.querySelectorAll('.reveal')
  if (forceVisible || !('IntersectionObserver' in window)) {
    items.forEach(item => item.classList.add('is-visible'))
    return
  }
  const io = new IntersectionObserver(entries => entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible')
      io.unobserve(entry.target)
    }
  }), { threshold: .1 })
  items.forEach(item => io.observe(item))
}

function renderTimeline(key) {
  const mount = document.querySelector('#timeline')
  const stage = document.querySelector('#timeline-stage')
  const data = directors[key]
  if (!mount || !stage || !data) return
  const stepLabel = currentLang === 'en' ? 'Show milestone' : 'Afficher l’étape'
  const previewLabel = currentLang === 'en' ? 'Motion glimpse' : 'Aperçu animé'
  mount.innerHTML = data.timeline.map((item, index) => `<article class="timeline-item ${index === 0 ? 'is-active' : ''} reveal is-visible" data-index="${index}"><button type="button" aria-label="${stepLabel} ${item.year}"><div class="timeline-year">${item.year}</div><h3>${t(item.title)}</h3><p>${t(item.text)}</p></button></article>`).join('')
  const update = index => {
    const item = data.timeline[index]
    stage.innerHTML = `<div class="timeline-preview"><video autoplay muted loop playsinline preload="metadata" poster="${data.portrait}" aria-label="${previewLabel} · ${data.name}, ${t(item.title)}"><source src="glimpses/${key}.mp4" type="video/mp4"></video><img src="${data.portrait}" alt="${data.name}" /><span class="timeline-preview-label">${previewLabel} · ${data.name} / ${item.year}</span></div><div class="timeline-copy"><div class="timeline-year">${item.year}</div><h3>${t(item.title)}</h3><p>${t(item.glimpse)}</p></div>`
    const video = stage.querySelector('video')
    video?.addEventListener('error', () => video.remove(), { once: true })
    mount.querySelectorAll('.timeline-item').forEach((el, i) => el.classList.toggle('is-active', i === index))
    stage.classList.remove('is-visible')
    requestAnimationFrame(() => stage.classList.add('is-visible'))
  }
  mount.onclick = event => {
    const item = event.target.closest('.timeline-item')
    if (item) update(Number(item.dataset.index))
  }
  update(0)
}

function renderDirectorProfile(key) {
  const data = directors[key]
  if (!data) return
  document.title = `${data.name} — L’écran de France`
  const slot = document.querySelector('#director-profile')
  if (!slot) return
  const [firstName, ...rest] = data.name.split(' ')
  const lastName = rest.join(' ')
  const dossierLabel = currentLang === 'en' ? 'Director dossier' : 'Dossier réalisateur'
  const motto = currentLang === 'en' ? 'A life, a body of work, a trace.' : 'Une vie, une œuvre, une trace.'
  const cinemaOf = currentLang === 'en' ? 'A cinema of' : 'Un cinéma de'
  const entryLabel = currentLang === 'en' ? 'An entry point' : 'Une porte d’entrée'
  const entryCopy = currentLang === 'en' ? 'Click any date below to reveal a glimpse of the filmmaker’s life or key work.' : 'Clique sur une date, puis fais défiler la frise. Chaque étape ouvre un aperçu de la vie ou du film.'
  const seeFilms = currentLang === 'en' ? 'See the films' : 'Voir les films'
  const tlHead = currentLang === 'en' ? 'Life / work / <em>echo</em>' : 'Vie / œuvre / <em>écho</em>'
  const tlSub = currentLang === 'en' ? 'Scroll across the dates or select a milestone.' : 'Fais défiler les dates ou sélectionne une étape.'
  slot.innerHTML = `<section class="profile-hero"><div class="wrap"><div class="profile-kicker"><span class="eyebrow" style="margin:0">${dossierLabel} / 0${Object.keys(directors).indexOf(key) + 1}</span><span class="era">${t(data.era)}</span></div><h1>${firstName} <span>${lastName}</span></h1><div class="profile-deck"><div class="portrait-card"><img class="portrait-img round" src="${data.portrait}" alt="${data.name}" /><p>${t(data.bio)}</p></div><div class="profile-meta"><strong>${t(data.role)}</strong>${motto}</div></div></div></section><section class="wrap profile-content"><div><div class="contribution-box"><h2>${cinemaOf}<br><em>${t(data.themeWord)}.</em></h2><p>${t(data.contribution)}</p></div><div class="feature-film"><div class="film-number">${data.year.slice(-2)}</div><div><h3>${data.film}</h3><p>${t(data.filmText)}</p></div></div></div><div class="profile-aside"><div class="eyebrow">${entryLabel}</div><p class="muted">${entryCopy}</p><a class="button secondary" href="films.html">${seeFilms} <span class="arrow">↗</span></a></div></section><section class="section" style="padding-top:0"><div class="wrap timeline-wrap"><div class="timeline-head"><h2>${tlHead}</h2><p>${tlSub}</p></div><div class="timeline-experience reveal is-visible" id="timeline-stage"></div><div class="timeline" id="timeline"></div></div></section>`
  renderTimeline(key)
}

function renderCollections() {
  const movementMount = document.querySelector('#movement-grid')
  if (movementMount) {
    movementMount.innerHTML = movements.map((m, i) => `<article class="movement-card reveal" data-delay="${i % 3}"><div class="period">${t(m.period)}</div><h2>${t(m.title)}</h2><p>${t(m.text)}</p><div class="tag-row">${t(m.tags).map(tag => `<span class="tag">${tag}</span>`).join('')}</div></article>`).join('')
  }
  const filmMount = document.querySelector('#film-grid')
  if (filmMount) {
    filmMount.innerHTML = films.map((f, i) => {
      const portrait = directors[f.personKey]?.portrait || `portraits/${f.personKey}.jpg`
      const person = f.meta.split(' · ')[0]
      return `<article class="film-card reveal" data-delay="${i % 3}"><div class="portrait-card"><img class="portrait-img round" src="${portrait}" alt="${person}" /><div><div class="meta">${f.meta}</div><h2>${f.title}</h2></div></div><p>${t(f.text)}</p><div class="tag-row">${t(f.tags).map(tag => `<span class="tag">${tag}</span>`).join('')}</div></article>`
    }).join('')
  }
  const emergingMount = document.querySelector('#emerging-grid')
  if (emergingMount) {
    emergingMount.innerHTML = emerging.map((f, i) => `<article class="emerging-card reveal" data-delay="${i % 3}"><img class="portrait-img" src="portraits/${f.key === 'matidiop' ? 'matidiop' : f.key}.jpg" alt="${f.title}" /><div><div class="meta">${t(f.meta)}</div><h2>${f.title}</h2><p>${t(f.text)}</p></div></article>`).join('')
  }
  const factsMount = document.querySelector('#facts-grid')
  if (factsMount) {
    factsMount.innerHTML = facts.map((f, i) => `<article class="fact-card reveal" data-delay="${i % 3}"><div class="meta">${t(f.meta)}</div><h2>${t(f.title)}</h2><p>${t(f.text)}</p></article>`).join('')
  }
}

function renderDirectorsIndex() {
  const mount = document.querySelector('#director-grid')
  if (!mount) return
  const linkLabel = currentLang === 'en' ? 'Open dossier' : 'Ouvrir le dossier'
  mount.innerHTML = Object.entries(directors).map(([key, d], i) => `<article class="card director-card portrait-card reveal" data-delay="${i % 3}" data-director-card><img class="portrait-img" src="${d.portrait}" alt="${d.name}" /><div><div class="era">${t(d.era)}</div><h2>${d.name}</h2><p class="bio">${t(d.contribution).split('.')[0]}.</p><a class="card-link" href="${key}.html">${linkLabel}</a></div></article>`).join('')
}

function setupDirectorFilters() {
  const input = document.querySelector('#director-search')
  if (!input) return
  const applyFilter = () => {
    const query = input.value.toLowerCase()
    document.querySelectorAll('[data-director-card]').forEach(card => {
      card.hidden = !card.textContent.toLowerCase().includes(query)
    })
  }
  input.oninput = applyFilter
  applyFilter()
}

let activeEra = 'all'
let activeTimelineIdx = 0

function renderCinemaTimeline() {
  const filterMount = document.querySelector('#timeline-filters')
  const stageMount = document.querySelector('#cinema-timeline-stage')
  const trackMount = document.querySelector('#cinema-timeline-track')
  if (!filterMount || !stageMount || !trackMount) return

  const filtered = activeEra === 'all'
    ? cinemaTimeline
    : cinemaTimeline.filter(item => item.era === activeEra)

  if (activeTimelineIdx >= filtered.length) activeTimelineIdx = 0

  const periodText = currentLang === 'en' ? 'Era' : 'Période'
  filterMount.innerHTML = `<span class="filter-label">${periodText}</span>` +
    timelineEraFilters.map(f => `<button type="button" class="filter-button" data-era="${f.key}" aria-pressed="${activeEra === f.key}">${t(f.label)}</button>`).join('')

  const renderStage = () => {
    const item = filtered[activeTimelineIdx]
    if (!item) return
    const prevLabel = currentLang === 'en' ? '← Previous' : '← Précédent'
    const nextLabel = currentLang === 'en' ? 'Next →' : 'Suivant →'
    const stepOf = currentLang === 'en'
      ? `Landmark ${activeTimelineIdx + 1} of ${filtered.length}`
      : `Repère ${activeTimelineIdx + 1} sur ${filtered.length}`
    stageMount.innerHTML = `
      <div class="timeline-preview">
        <img src="${item.image}" alt="${t(item.title)}" />
        <span class="timeline-preview-label">${item.year} · ${t(item.eraLabel)}</span>
      </div>
      <div class="timeline-copy">
        <div class="cinema-timeline-meta">
          <div class="timeline-year">${item.year}</div>
          <span class="cinema-timeline-era">${t(item.summary)}</span>
        </div>
        <h3>${t(item.title)}</h3>
        <p>${t(item.text)}</p>
        <div class="timeline-nav">
          <span class="timeline-counter">${stepOf}</span>
          <div class="timeline-nav-buttons">
            <button type="button" class="timeline-nav-btn" id="tl-prev" ${activeTimelineIdx === 0 ? 'disabled' : ''}>${prevLabel}</button>
            <button type="button" class="timeline-nav-btn" id="tl-next" ${activeTimelineIdx === filtered.length - 1 ? 'disabled' : ''}>${nextLabel}</button>
          </div>
        </div>
      </div>`
    stageMount.classList.add('is-visible')

    stageMount.querySelector('#tl-prev')?.addEventListener('click', () => {
      if (activeTimelineIdx > 0) { activeTimelineIdx--; updateSelection() }
    })
    stageMount.querySelector('#tl-next')?.addEventListener('click', () => {
      if (activeTimelineIdx < filtered.length - 1) { activeTimelineIdx++; updateSelection() }
    })
  }

  const updateSelection = () => {
    renderStage()
    trackMount.querySelectorAll('.cinema-timeline-node').forEach((node, idx) => {
      node.classList.toggle('is-active', idx === activeTimelineIdx)
    })
  }

  trackMount.innerHTML = filtered.map((item, idx) => `
    <article class="cinema-timeline-node ${idx === activeTimelineIdx ? 'is-active' : ''}" data-idx="${idx}">
      <button type="button" aria-label="${item.year} — ${t(item.title)}">
        <div class="timeline-year">${item.year}</div>
        <h3>${t(item.title)}</h3>
        <p>${t(item.summary)}</p>
      </button>
    </article>`).join('')

  filterMount.onclick = e => {
    const btn = e.target.closest('[data-era]')
    if (!btn) return
    activeEra = btn.dataset.era
    activeTimelineIdx = 0
    renderCinemaTimeline()
  }

  trackMount.onclick = e => {
    const node = e.target.closest('.cinema-timeline-node')
    if (!node) return
    activeTimelineIdx = Number(node.dataset.idx)
    updateSelection()
  }

  renderStage()
}

function renderApp(fromToggle = false) {
  const headerMount = document.querySelector('#site-header')
  const footerMount = document.querySelector('#site-footer')
  if (headerMount) headerMount.innerHTML = header()
  if (footerMount) footerMount.innerHTML = footer()
  applyStaticTranslations()
  setupControls()
  renderDirectorsIndex()
  renderCollections()
  renderCinemaTimeline()
  if (currentPage in directors) renderDirectorProfile(currentPage)
  setupDirectorFilters()
  setupReveal(fromToggle)
  document.querySelectorAll('[data-cover-image]').forEach(img => { img.src = coverImage })
}

document.addEventListener('DOMContentLoaded', () => renderApp(false))
