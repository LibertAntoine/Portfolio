
const data = {

  lang : "Français",
  otherLang : "English",
  title : require("@/assets/Title/TitleFR.png"),
  menu : ['Accueil', 'Profil', 'Compétences', 'Projets', 'Contacts'],
  headband : {
    cv : "Voir mon cv",
    cvTitle : "CV",
    presentationTitle : "Qu'est ce qu'un ingénieur créatif ?",
    presentationText : `
    Ayant une formation approfondie à la fois en sciences et en arts, un ingénieur créatif 
    sait manager et opérer au sein d’équipes aux profils variés tels que des développeurs 
    logiciel ou web, des graphistes, techniciens et artistes pour œuvrer à la réalisation 
    de projets innovants. Grace à une solide culture artistique et technique, il use 
    généralement de sa pluridisciplinarité dans les domaines du jeu vidéo, de l’animation, du 
    web ou encore de l’audiovisuel.
     `
  },
  contacts : {
    title : "Contacts",
    tel : "Tel",
    email : "Adresse Mail",
    object : "Objet",
    content : "Contenu",
    send : "Envoyer",
    emailAlert : "L'email n'est pas valide !",
    objectAlert : "Il n'y a pas d'objet !",
    contentAlert : "Il n'y a pas de contenu !"
  },
  skills : {
    title : "L'image, sous toutes ses formes.",
    text : `
    Passionné de création visuelle et de technologie numérique, j’ai
     toujours cultivé une pluridisciplinarité entre l’ingénierie numérique 
     et les arts. Arrivant aux termes de ma formation, je suis maintenant 
     désireux de poursuivre sur cette voix en tant que développeur pour des 
     projets créatifs et innovants. Pourquoi ne pas continuer avec vous : je 
     recherche actuellement un stage de 6 mois à partir d’avril 2021.
    `,
    contactButton : "Contactez-moi",
    skillButton : "Voir les projets",
    cards : [
      { // Computer Graphics 
        icon : "fa-cube",
        title : "Programmation 3D",
        bullets : [
          "Développement C++ avancé.",
          "Bonne maîtrise de l’API graphique OpenGL.",
          "Solides connaissances des moteurs Unity et Unreal Engine.",
          "Mathématiques et physiques appliquées à l’ordinateur."
        ],
        categorie : "ComputerGraphics"
      },
      { // Digital Art
        icon : "fa-palette",
        title : "Arts numériques",
        bullets : [
          "Développement Backend en Node.js ou PHP.",
          "Développement Frontend en Vue.js ou Angular.",
          "Déploiement serveur, Node.js et Apache.",
          "Création graphique en WebGL via Three.js."
        ],
        categorie : "DigitalArt"
      },
      { // Web 
        icon : "fa-code",
        title : "Web",
        bullets : [
          "Modelling, texturing et animation sur Blender.",
          "Création motion design via After Effects.",
          "Connaissance des technologies VR.",
          "Maîtrise d’outils de création programmative tels que Processing et P5.js."
        ],
        categorie : "Web"
      },
      { // Audiovisual
        icon : "fa-camera",
        title : "Audiovisuel",
        bullets : [
          "Création de fiction : story-board, scénario, découpage technique.",
          "Captation image et son.",
          "Post-production : montage et étalonnage.",
          "Captation live."
        ],
        categorie : "Audiovisual"
      }
    ]
  },
  metaproject : {
    title : "Mes projets",
    categoriesName : ["Programmation 3D", "Web", "Tous", "Arts numériques", "Audiovisuel"],
    categories : ["ComputerGraphics", "Web", "All", "DigitalArt", "Audiovisual"],
    textCategories : {
      ComputerGraphics : `
      Qu’il s’agisse de rendre un jeu vidéo ou un film d’animation, je suis sensible aux problématiques
       rencontrées sur le pipeline graphique de tels projets. Je sais concevoir un moteur graphique et
        les interfaces pour de petits jeux 2D et 3D, ainsi que travailler sur les moteurs de rendu 
        les plus connus.
      `,
      Web : `
      Pour la création d’une application ludique et colorée, ou un site vitrine à la communication 
      fine et détaillée, je sais développer sur de tels projets aussi bien en Frontend qu’en Backend, à 
      l’aide des technologies les plus récentes. Je sais également mener l’étude UX/UI d’un site et 
      effectuer son déploiement.
      `,
      All : `
      L’ensemble de mes projets cherche à mêler technologie du numérique et 
      créativité. Ils sont parfois des initiatives personnelles, mais résultent 
      le plus souvent de la collaboration avec d’autres ingénieurs et artistes.
      `,
      DigitalArt : `
      Films d’animation, motion designs ou encore installations multimédia, j’ai travaillé à la direction
       artistique d’une variété de projets mêlant éléments visuels, sonores et interactifs. Sensible 
       aux partis-pris artistiques à défendre, je sais identifier les technologies numériques qui 
       serviront au mieux les intérêts d’un projet.
       `,
      Audiovisual : `
      Fictions à l’univers onirique ou films corporate persuasifs, je sais concevoir, capter et post-produire 
      des vidéos et des lives de courte durée. Au sein d’une moyenne ou petite équipe, je sais manager les 
      différents savoirs-faires mobilisés pour mettre en valeur une marque ou des idées.
        `
    },
    moreButton : "Plus de projets",
    discoverLink : "Découvrir",
    seeCodeLink : "Voir le code",
    feature : "Principales implémentations",
    present : "Présentation",
    contrib : "Contributeurs"
  },
  projects :
   [
    { // Projet 1
      nameIndex : "Bleu202TV",
      title : "Bleu202TV",
      text : `Bleu202TV est une expérience web interactive, ludique et amusante, 
      réalisée en collaboration avec la Compagnie Bleu 202 d’Alençon. Restrictions
       Covid obligent, la compagnie de théâtre a fait le choix en été 2020 de 
       produire une œuvre entièrement numérique, mêlant vidéos, photos, quiz, 
       roman-photo interactif, jeux et illustrations digitales pour dépeindre 
       un univers comique et coloré visant à sensibiliser aux gestes barrières 
       face au Covid.
       <br/><br/>
      J’ai eu l’immense plaisir d’accompagner la compagnie dans la réalisation
       des différents médias et de réaliser l’entièreté du site.
            `,
      features : [
        "Management d’un projet mêlant création artistique et développement.",
        "Création d’une single page application en Vue.js.",
        "Construction d’un site dans un esprit de gamification.",
        "Mise en place d’une API backend avec Node.js et MongoDB.",
        "Captation et post-production de nombreux médias photos et vidéos.",
        "Création d’un roman-photo interactif."
      ],
      contributor : [],
      img: [require("@/assets/Projets/4/1.png"), require("@/assets/Projets/4/2.png"), require("@/assets/Projets/4/3.png")],
      type : "Web, Arts numériques, Audiovisuel | Juillet 2020",
      categories : ["Web", "DigitalArt", "Audiovisual"],
      projectLink : ["https://www.leche-vitrines.tv/", "Voir le site"],
      codeUrl : "https://github.com/LibertAntoine/Bleu202TV"
    },
    { // Projet 2
      nameIndex : "PokerImac",
      title : "PokerImac",
      text : `Jeu de poker multijoueur, développé avec Unity et suivant les règles du Texas Holden Poker. 
      Le jeu a la particularité de fournir au joueur ses probabilités, à chaque instant du jeu, d’obtenir 
      une série remarquable du Poker (paire, couleur, quinte, …) en fonction des cartes de sa main et du plateau.
      <br/><br/>
      Il est possible de jouer avec des AI, et d’influer en début de partie sur le comportement de ces joueurs 
      virtuels (les rendre plus agressifs ou avec une plus grande tendance au bluff). Les AI se fieront à leur
       propre probabilité de gagner, ainsi que différentes variables aléatoires paramétrables par le joueur, pour
        déterminer chacune de leurs actions.
        <br/><br/>
      Ce projet est une initiative issue d’un enseignement aux statistiques et probabilités, à l’école d’ingénieur IMAC.
            `,
      features : [
        "Création du gameplay via Unity.",
        "Calcul des probabilités du joueur de gagner.",
        "Joueurs virtuels dotés d’une intelligence artificielle."
      ],
      contributor : [
        "Antoine Libert – Programmation, Maths",
        "Flora Mallet – Assets"
      ],
      img: [require("@/assets/Projets/17/1.png"), require("@/assets/Projets/17/2.png"), require("@/assets/Projets/17/3.png")],
      type : "Programmation 3D | Mai 2020",
      categories : ["ComputerGraphics"],
      codeUrl : "https://github.com/LibertAntoine/OpenGL-Galaxie"
    },
    { // Projet 3
      nameIndex : "AOneWayTicketToNishiwaga",
      title : "A one-way ticket to Nishiwaga",
      text : `Inspiré de l’histoire du Japon traditionnel, ce projet est le générique d’entrée (title sequence) d’un film de fiction imaginé pour l’occasion. 
            Le générique présente l’histoire de Tom, un jeune français de 17 ans, qui, après la mort soudaine de son père, décide de tout 
            quitter pour rejoindre son oncle vivant dans un petit village du Japon. Il y fait des rencontres qui changeront sa vision du monde et le sens de sa vie. 
            <br/><br/>
            La charte graphique du générique s’appuie sur les dessins à l’encre traditionnels des pays d’Asie animés pour dépeindre 
            l’univers naturel et spirituel d'un Japon rural. Ce projet est une initiative issue d’un enseignement à la compréhension du cinéma, 
            à l’école d’ingénieur IMAC.`,
      features : [
        "Story Board du title sequence.", 
        "Création d’illustrations digitales, effet encre d’Asie.", 
        "Création de scènes filmées, montées en double exposition.",
        "Animation des assets avec After Effect."
      ], 
      contributor : [
        "Antoine Libert – Captation, Animation", 
        "Flora Mallet – Story Board, Illustrations"
      ],
      img: [require("@/assets/Projets/1/1.png"), require("@/assets/Projets/1/2.png"), require("@/assets/Projets/1/3.png")],
      type : "Arts numériques, Audiovisuel | Mai 2020",
      categories : ["DigitalArt", "Audiovisual"],
      projectLink : ["https://vimeo.com/466817887", "Voir la video"]
      //codeUrl : "http://",
    },
    { // Projet 4
      nameIndex : "ActTogether",
      title : "ActTogether",
      text : `Maquette 3D représentant une installation interactive au sein de la station de métro de la gare Saint-Lazare, 
            à Paris, et sensibilisant aux violences et au harcèlement dans les lieux publics, en particulier les transports. L’installation met plusieurs passants face à une situation d’agression contre laquelle il leur est possible d’agir collectivement pour arrêter l’agresseur.
            <br/><br/>
            Cette maquette a été réalisée avec la librairie P5. Ce projet est une initiative issue de l’enseignement en interactivité,
             à l’école d’ingénieur IMAC.
            `,
      features : [
        "Création d’une reproduction 3D d’une partie de la station de métro Gare Saint-Lazare.",
        "Implémentation d’une vue caméra première personne permettant de se déplacer dans la maquette.",
        "Interaction avec les différents panneaux publicitaires de l’installation.",
        "Création d’illustrations 2D et vidéos."
      ],
      contributor : [
        "Antoine Libert – Programmation, modélisation 3D, captation vidéo.", 
        "Flora Mallet – Illustrations 2D."
      ],
      img: [require("@/assets/Projets/2/1.png"), require("@/assets/Projets/2/2.png"), require("@/assets/Projets/2/3.png")],
      type : "Arts Numériques | Mai 2020",
      categories : ["DigitalArt"],
      projectLink : ["http://interactivity.ingenus.ovh/", "Voir la maquette"],
      codeUrl : "https://github.com/LibertAntoine/AtcTogether"
    },
    { // Projet 5
      nameIndex : "Memap",
      title : "Memap",
      text : `L'application Memap est un concept de gestionnaire de bases de connaissance 
      inspiré de la pensée humaine visant à offrir un outil de stockage pour notre savoir 
      plus intuitif et plus en adéquation avec notre façon de penser. Il se concrétise 
      autour d’un site web proposant un ensemble de services permettant le stockage en 
      Cloud de documents divers, la rédaction de nouveaux documents, et une navigation 
      parmi ces documents permettant de les lier les uns aux autres, dans un esprit nodal. 
      Le site offre également la possibilité de scinder l’affichage en plusieurs parties 
      afin de visualiser plusieurs documents ou réseaux de nodes à la fois.
      <br/><br/>
      Ce projet est une initiative de Nicolas Liénart et Antoine Libert, incluse en tant 
      que projet tuteuré au sein de la formation d’ingénieur IMAC.
            `,
      features : [
        "Création d’un éditeur via la librairie TinyMCE.",
        "Création d’un explorateur de documents sous forme nodal en front. ",
        "Mise en place d’une base de données avec Neo4j.",
        "Système de web scraping permettant de récupérer des extraits présents sur d’autres sites web."
      ],
      contributor : [
        "Antoine Libert – Editeur, Web Scraping",
        "Nicolas Liénart – Visualiseur nodal",
      ],
      img: [require("@/assets/Projets/13/1.png"), require("@/assets/Projets/13/2.png"), require("@/assets/Projets/13/3.png")],
      type : "Web | Septembre 2019 - Mai 2020",
      categories : ["Web"],
      codeUrl : "https://github.com/LibertAntoine/Memap"
    },
    { // Projet 6
      nameIndex : "DashBoard",
      title : "DashBoard",
      text : `Application web proposant un dashboard météo. Il est possible d’y voir via une interface 
      esthétique et simple les informations de température, vent et humidité pour une zone géographique 
      choisie, soit en saisissant le nom d’une ville soit via le choix d’un emplacement directement 
      sur la carte. L’application peut également identifier la localisation de l’utilisateur. Ce projet 
      visait la production d’éléments de datavisualisation en utilisant diverses librairies javascript. 
      L’application s’appuie sur un frontend en Vue.js.
      <br/><br/>
      Ce projet est une initiative issue de l’enseignement aux frameworks frontend, à l’école 
      d’ingénieur IMAC.
            `,
      features : [
        "Application responsive avec Vue.js",
        "Utilisation des librairies vue-graphJs, Plotly, D3.js pour la datavisualisation.",
      ],
      contributor : [
        "Antoine Libert – Architecture logiciel, API.",
        "Nicolas Lienart – Data visualisation.",
        "Enguerrand De Smet - Data visualisation.",
        "Margaux Vaillant – Style, responsive."
      ],
      img: [require("@/assets/Projets/8/1.png"), require("@/assets/Projets/8/2.png"), require("@/assets/Projets/8/3.png")],
      type : "Web | Mai 2020",
      categories : ["Web"],
      projectLink : ["https://dashboard.ingenus.ovh/", "Voir le site"],
      codeUrl : "https://github.com/LibertAntoine/DashBoard"
    },
    { // Projet 7
      nameIndex : "MinecraftEditor",
      title : "Minecraft Editor",
      text : `Editeur de mondes 3D à base de cubes, développé en C++ et avec l’API graphique OpenGL 4. 
      Cet éditeur offre une interface très complète permettant de créer des cubes en déplaçant un 
      sélecteur ou via la souris. Il est possible de changer la couleur ou texture des cubes, et 
      de faire du multi-texturing sur un même cube, en choisissant une texture différente par face. 
      Il est possible de placer une lumière directionnelle ou ponctuelle dans la scène. Chaque cube 
      est construit par le geometry shader à partir d’une coordonnée. Les cubes sont rendus en batch 
      rendering.
      <br/><br/>
      Ce projet est une initiative issue de l’enseignement en synthèse d’image et mathématiques appliquées, à
       l’école d’ingénieur IMAC.
            `,
      features : [
        "Pipeline graphique en OpenGL 4.",
        "Sélection des cubes à la souris.",
        "Multi-texturing des cubes.",
        "Interface à l’aide d’ImGUi.",
        "Lumière directionnelle ou ponctuelle."
      ],
      contributor : [
        "Antoine Libert – Renderer, GUI",
        "Nicolas Liénart – Selection, RBF",
      ],
      img: [require("@/assets/Projets/14/1.png"), require("@/assets/Projets/14/2.png"), require("@/assets/Projets/14/3.png")],
      type : "Programmation 3D | Décembre 2019",
      categories : ["ComputerGraphics"],
      codeUrl : "https://github.com/LibertAntoine/Minecraft_editor"
    },
    { // Projet 8
      nameIndex : "AtlantisWay",
      title : "Atlantis way",
      text : `Immersion dans les bas-fonds océaniques, cette animation a été réalisée
       à partir d’une modélisation sur Blender. Elle met en scène un explorateur
      sous-marin, qui, parmi les algues et les coraux découvre les ruines d’une
      ancienne civilisation. L’objectif était ici de travailler sur la création
      d’un univers subaquatique.
      <br/><br/>
      Le rendu de cette animation est calculé depuis Blender en rastérisation
      (mais un rendu en ray tracing est en cours, depuis… heu…)
            `,
      features : [
        "Création d’un environnement subaquatique.",
        "Modélisation 3D d’algues, coraux et ruines.",
        "Répartition procédurale des coraux.",
        "Animations des éléments modélisés."
      ],
      contributor : [
        "Antoine Libert – Modélisation des coraux, effet subaquatique, animation.", 
        "Flora Mallet – Modélisation et squelette des végétaux."
      ],
      img: [require("@/assets/Projets/3/1.png"), require("@/assets/Projets/3/2.png"), require("@/assets/Projets/3/3.png")],
      type : "Arts Numériques | Décembre 2019",
      categories : ["DigitalArt"],
      projectLink : ["https://vimeo.com/466823067", "Voir la vidéo"]
    },
    { // Projet 9
      nameIndex : "OpenGLGalaxie",
      title : "OpenGL Galaxie",
      text : `Petit projet de rendu en OpenGL simulant la planète Terre avec 
      de nombreuses lunes en orbites. Le projet contient des versions différentes, avec
       lumière directionnelle ou ponctuelle, caméra orbitale ou libre.
       <br/><br/>
      Ce projet est une mise en application des cours de Synthèse d’image, à
       l’école d’ingénieur IMAC.
            `,
      features : [
        "Moteur de rendu OpenGL 4.",
        "Lumière directionnelle et ponctuelle."
      ],
      contributor : [],
      img: [require("@/assets/Projets/15/1.png"), require("@/assets/Projets/15/2.png"), require("@/assets/Projets/15/3.png")],
      type : "Programmation 3D | Novembre 2019",
      categories : ["ComputerGraphics"],
      codeUrl : "https://github.com/LibertAntoine/OpenGL-Galaxie"
    },
    { // Projet 10
      nameIndex : "Orpheus",
      title : "Orphée",
      text : `Inspiré du mythe d’Orphée, ce récit audio plonge dans la glorieuse histoire 
      du héros se rendant aux enfers pour y récupérer sa défunte épouse et la ramener 
      auprès des vivants. Parsemée de musiques et de sons d’ambiance, cette histoire 
      est à écouter avec un casque pour une immersion garantie.
      <br/><br/>
      Ce projet est une initiative issue de l’enseignement en post-production sonore, à 
      l’école d’ingénieur IMAC.
            `,
      features : [
        "Montage et mixage sonore avec Protools.",
        "Enregistrement de sons d’ambiance et voix off."
      ],
      contributor : [
        "Guillaume Haerinck",
        "Antoine Libert",
        "Nicolas Liénart"
      ],
      img: [require("@/assets/Projets/16/1.png"), require("@/assets/Projets/16/2.png"), require("@/assets/Projets/16/3.png")],
      type : "Audiovisuel | Novembre 2019",
      categories : ["Audiovisual"],
      projectLink : ["https://soundcloud.com/user-581905519/orphee", "Ecouter le récit"]
    },
    { // Projet 11
      nameIndex : "ConterTime",
      title : "Contre-Temps",
      text : `Dans ce court métrage de 9 minutes, une jeune femme, Anna, se retrouve au 
      détour d'un parc à débattre de la mort imminente d'un inconnu avec un mystérieux 
      prédicateur. Alors que l'avenir occupe chacune de ses pensées, elle se retrouve 
      confrontée à la fragilité de son existence. Cette rencontre inattendue pourrait 
      bien bouleverser la vision qu'elle a de son futur à jamais.
      <br/><br/>
      Ce film est une initiative issue d’un enseignement en création cinématographie, à 
      l’école d’ingénieur IMAC.
            `,
      features : [
        "Création d’un scenario et d’un découpage technique.",
        "Captation vidéo.",
        "Post-production audio et vidéo."
      ],
      contributor : [
        "Antoine Libert – Mise en scène, Montage",
        "Nicolas Liénart – Captation, Montage",
        "Flora Mallet – Captation, Montage",
        "Brice Mangeat – Régie",
        "Solène Mary-Vallée – Ingénieur du son"
      ],
      img: [require("@/assets/Projets/6/1.png"), require("@/assets/Projets/6/2.png"), require("@/assets/Projets/6/3.png")],
      type : "Audiovisuel | Novembre 2019",
      categories : ["Audiovisual"],
      projectLink : ["https://www.youtube.com/watch?v=d41-IxLGGIA&t=6s", "Voir la vidéo"]
    },
    { // Projet 12
      nameIndex : "InsectTowerDefense",
      title : "Insect Tower Defense",
      text : `Insect Tower est un jeu de tower défense autour de l’univers des insectes. 
      Le but est de défendre la reine des fourmis contre des vagues d’envahisseurs. 
      Pour cela, comme dans la réalité, des fourmis feront appel à d’autres espèces 
      d’insectes, qu’elles nourriront en échange de leur protection. 
      Différentes ressources pourront être utilisées pour accroître la force, 
      la cadence de tir ou la portée des insectes.
      <br/><br/>
      Ce projet est entièrement réalisé en C et s’appuie sur l’API graphique OpenGL v2.
       Il a été réalisé dans le cadre d’un enseignement à la synthèse d’image et à 
       l’algorithmie à l’école d’ingénieur IMAC.     
            `,
      features : [
        "Moteur de rendu OpenGL v2.",
        "Création dynamique de niveaux avec chargement de fichiers itd ou ppm.",
        "Interface utilisateur. ",
        "Gestion d’animations et sprites.",
        "Algorithme du plus court chemin.",
        "Gestion de trajectoire dynamique des projectiles.",
        "Création de différents menus."
      ],
      contributor : [
        "Antoine Libert – Gameplay, projectile, algorithme plus court chemin, vague de monstre.",
        "Nicolas Lienart – GUI, map, sprite, bâtiment."
      ],
      img: [require("@/assets/Projets/11/1.png"), require("@/assets/Projets/11/2.png"), require("@/assets/Projets/11/3.png")],
      type : "Programmation 3D | Mai 2019",
      categories : ["ComputerGraphics"],
      codeUrl : "https://github.com/LibertAntoine/Insect_Tower_Defense"
    },
    { // Projet 13
      nameIndex : "DaftPunkClip",
      title : "Daft Punk Clip",
      text : `En hommage à l’univers de science-fiction des clips des Daft punk, cette animation 
      réalisée sur After effect dessine une palette de visuels inspirés des dessins animés des 
      années 80, le tout sur un medley de l’album emblématique des Daft Punk, Discovery. Le format 
      carré du clip vise à rappeler celui des jaquettes de vinyles et CDs.
      <br/><br/>
      Ce projet est une initiative issue de l’enseignement en post-production After Effect, à 
      l’école d’ingénieur IMAC. 
            `,
      features : [
        "Motion design sur After Affect.",
        "Maîtrise de calques, masques, clés d’animation, caméras et lumières.",
        "Maîtrises des scripts et contrôleurs."
      ],
      contributor : [],
      img: [require("@/assets/Projets/7/1.png"), require("@/assets/Projets/7/2.png"), require("@/assets/Projets/7/3.png")],
      type : "Arts numériques | Mai 2019",
      categories : ["DigitalArt"],
      projectLink : ["https://vimeo.com/466834974", "Voir le clip"]
    },
    { // Projet 14
      nameIndex : "FriederNakeRemake",
      title : "Frieder Nake Remake",
      text : `Sur les traces de l’artiste numérique renommé Freider Nake, ce 
      projet revisite son œuvre Labyrinth, en y ajoutant des nuances de fréquences 
      et couleurs choisies de façon procédurale, mais dans le respect toutefois 
      des règles fixées par l’artiste dans son œuvre d’origine. Une parfaite 
      occasion de se plonger dans les prémices de l’art numérique. Ce projet a été 
      réalisé avec le logiciel Processing 3.
      <br/><br/>
      Ce projet est une initiative issue de l’enseignement en esthétique algorithmique, à 
      l’école d’ingénieur IMAC.      
            `,
      features : [
        "Analyse des règles algorithmiques de l’artiste.",
        "Reproduction de l’œuvre via Processing 3.",
        "Création d’une interface permettant d’influer sur les paramètres de génération procédurale."
      ],
      contributor : [],
      img: [require("@/assets/Projets/9/1.png"), require("@/assets/Projets/9/2.png"), require("@/assets/Projets/9/3.png")],
      type : "Arts numériques | Décembre 2018",
      categories : ["DigitalArt"],
      codeUrl : "https://github.com/LibertAntoine/Frieder_Nake_Remake"
    },
    { // Projet 15
      nameIndex : "BreakTheIce",
      title : "Briser la glace",
      text : `Ce court-métrage de 5 min 30 raconte l’histoire de Mélanie et Thomas, 
      deux amis de longue date qui se retrouvent tous les deux lors d’une soirée. 
      Mais alors que Thomas cherche timidement à avouer ses sentiments à son amie, 
      la déclaration vire au cauchemar, entrainant Mélanie dans une situation controversée.
      <br/><br/>
      Ce film est une initiative issue de l’enseignement en création vidéo, 
      à l’école d’ingénieur IMAC.
            `,
      features : [
        "Création d’un scenario et d’un découpage technique.",
        "Captation vidéo.",
        "Post-production audio et vidéo."
      ],
      contributor : [
        "Sophie Bayer – Montage",
        "Andréa Guillet – Prise de son, script",
        "Guillaume Haerinck – Cadrage",
        "Antoine Libert – Réalisation, Montage, Etalonnage",
        "Nicolas Liénart – Prise de son, script"
      ],
      img: [require("@/assets/Projets/5/1.png"), require("@/assets/Projets/5/2.png"), require("@/assets/Projets/5/3.png")],
      type : "Audiovisuel | Décembre 2018",
      categories : ["Audiovisual"],
      projectLink : ["https://www.youtube.com/watch?v=Blzk_FCrKG0&t=3s", "Voir la vidéo"]
    }
    /*
    { // Projet 10
      title : "GameEngine",
      text : `Projet de construction de moteur graphique permettant de créer des jeux 
      en 2D et 3D. Le code de ce projet s’inspire beaucoup de l’architecture 
      du projet Hazel de The Cherno. Ce moteur vise à terme à fonctionner avec
       différentes APIs graphiques et sur différents systèmes (Windows uniquement 
        aujourd’hui).
        <br/><br/>
      Ce projet est l’occasion pour moi de consolider mes bases en programmation 
      3D et en C++, et de me familiariser avec des designs d’applications performants.
            `,
      features : [
        "Moteur de rendu 2D.",
        "Implémentation ECS via enTT."
      ],
      contributor : [],
      img: [require("@/assets/Projets/10/1.png"), require("@/assets/Projets/10/2.png"), require("@/assets/Projets/10/3.png")],
      type : "Programation 3D | En cours",
      categories : ["ComputerGraphics"],
      codeUrl : "https://github.com/LibertAntoine/GameEngine"
    }*/
   
    /*{ // Projet 12
      nameIndex : "Lolimac",
      title : "Lolimac",
      text : `Application permettant à ses utilisateurs de créer des évènements et 
      d’inviter d’autres membres à les rejoindre. Développé en Angular 7 pour le 
      frontend et PHP/MySQL pour le backend, ce projet visait à aider les élèves 
      de l’école d’ingénieur IMAC à plus facilement organiser des évènements entre eux.
      <br/><br/>
      Ce projet est une initiative issue de l’enseignement en programmation web, à 
      l’école d’ingénieur IMAC.
            `,
      features : [
        "Frontend responsive en Angular 7.",
        "API REST en PHP.",
        "Authentification via token JWT."
      ],
      contributor : [
        "Antoine Libert – Architecture back, JWT.",
        "Jules Fouchy – Backend PHP.",
        "Nicolas Liénart – Backend PHP.",
        "Guillaume Haerinck – Front Angular.",
        "Monica Lisasek – Front Design."
      ],
      img: [require("@/assets/Projets/11/1.png"), require("@/assets/Projets/11/2.png"), require("@/assets/Projets/11/3.png")],
      type : "Web | Mai 2019",
      categories : ["Web"],
      codeUrl : "https://github.com/LibertAntoine/Lolimac"
    },*/
   ]
}

export default data