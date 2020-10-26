
const data = {
  lang : "English",
  otherLang : "Français",
  title : require("@/assets/Title/TitleEN.png"),
  menu : ['Home', 'Profil', 'Skills', 'Projects', 'Contacts'],
  headband : {
    cv : "Show my resume",
    cvTitle : "Resume",
    presentationTitle : "What is a creative engineer ?",
    presentationText : `
    With abilities in both science and art, a creative engineer knows how to manage 
    and operate within teams with varied profiles such as software or web developers, graphic
     designers, technicians and artists to work on the realization of innovative projects. Thanks 
     to a solid artistic and technical culture, he generally uses his multidisciplinarity 
     in fields like video games, animation, web or even audiovisual industry.
    `
  },
  contacts : {
    title : "Contacts",
    tel : "Phone",
    email : "Email Adress",
    object : "Object",
    content : "Content",
    send : "Send",
    emailAlert : "Email Adress is not valid !",
    objectAlert : "There is no object !",
    contentAlert : "There is no content !"
  },
  skills : {
    title : "Image, in all its forms.",
    text : `
    Passionate about visual creation and digital technology, I have always cultivated 
    a multidisciplinary approach between digital engineering and arts. Coming to
     the end of my training, I am now eager to continue on that way as a developer 
     for creative and innovative projects. Why not continue with you: I 
     am currently looking for a 6-month internship from April 2021.
    `,
    contactButton : "Contact me",
    skillButton : "Show projects",
    cards : [
      { // Computer Graphics 
        icon : "fa-cube",
        title : "3D Programmation",
        bullets : [
          "Advanced C ++ development.",
          "Good knowledge of the OpenGL graphics API.",
          "Game creation with Unity and Unreal Engine.",
          "Mathematics and physics applied to computer."
        ]
      },
      { // Digital Art
        icon : "fa-palette",
        title : "Digital Arts",
        bullets : [
          "Modelling, texturing et animation with Blender.",
          "Motion design creation with After Effects.",
          "Good knowledge of VR technologies.",
          "Programming creation with tools like Processing and P5.js."
        ]
      },
      { // Web 
        icon : "fa-code",
        title : "Web",
        bullets : [
          "Backend development in Node.js or PHP.",
          "Frontend development in Vue.js or Angular.",
          "Server deployment, Node.js and Apache.",
          "Graphic creation in WebGL with Three.js."
        ]
      },
      { // Audiovisual
        icon : "fa-camera",
        title : "Audiovisual",
        bullets : [
          "Creation of fiction: story-board, scenario.",
          "Image and sound capture.",
          "Post-production: editing and color correction.",
          "Live recording."
        ]
      }
    ]
  },
  metaproject : {
    title : "My projects",
    categoriesName : ["3D Programmation", "Web", "All", "Digital Arts", "Audiovisual"],
    categories : ["ComputerGraphics", "Web", "All", "DigitalArt", "Audiovisual"],
    textCategories : {
      ComputerGraphics : `
      Whether it is rendering a video game or an animated film, I know the issues encountered 
      in the graphics pipeline of such projects. I know how to design a graphics engine and 
      interfaces for small 2D and 3D games, as well as work on the most famous rendering engines.
      `,
      Web : `
      For the creation of a fun and colorful application, or a showcase website with smart 
      and detailed communication, I know how to develop on such projects both in frontend 
      and backend, using the most recent technologies. I also know how to conduct UX / UI study 
      for a website and how to deploy it.
      `,
      All : `
      All of my projects seek to combine digital technology and creativity. They are 
      sometimes personal initiatives, but more often the result of collaboration with 
      other engineers and artists.
      `,
      DigitalArt : `
      Animated movies, motion design or even multimedia installations, I have worked in 
      the artistic direction of a variety of projects combining visual, sound and
       interactive elements. Receptive to artistic biases to defend, I know how to 
       identify digital technologies that will best serve the interests of a project.
       `,
      Audiovisual : `
      For dreamlike fictions as well as persuasive corporate movies, I know how to
       design, capture and post-produce short videos and lives. Within a medium
        or small team, I know how to manage the different skills mobilized to 
        promote a brand or ideas.
        `
    },
    moreButton : "More projects",
    discoverLink : "Discover",
    seeCodeLink : "See the code",
    feature : "Main features",
    present : "Presentation",
    contrib : "Contributors"
  },
  projects :
   [
    { // Projet 1
      nameIndex : "Bleu202TV",
      title : "Bleu202TV",
      text : `Bleu202TV is an interactive, fun and entertaining web experience, produced
       in collaboration with the Compagnie Bleu 202 of Alençon. With Covid Restrictions,
        the company made the choice in summer 2020 to produce an entirely digital work, 
        mixing videos, photos, quizzes, interactive photo-novels, games and digital 
        illustrations to depict a comic and colourful universe aimed at raising awareness
         of gestures barriers against Covid.
       <br/><br/>
       I had the immense pleasure of accompanying the company in the realization of the 
       various videos and photos and in the creation of the entire website.
            `,
      features : [
        "Management of a project combining artistic creation and web development.",
        "Creation of a single page application in Vue.js.",
        "Construction of a website in a spirit of gamification.",
        "Implementation of a backend API with Node.js and MongoDB.",
        "Capture and post-production of numerous photos and videos.",
        "Creation of an interactive photo novel."
      ],
      contributor : [],
      img: [require("@/assets/Projets/4/1.png"), require("@/assets/Projets/4/2.png"), require("@/assets/Projets/4/3.png")],
      type : "Web, Digital Arts, Audiovisual | July 2020",
      categories : ["Web", "DigitalArt", "Audiovisual"],
      projectLink : ["https://www.leche-vitrines.tv/", "See website"],
      codeUrl : "https://github.com/LibertAntoine/Bleu202TV"
    },
    { // Projet 2
      nameIndex : "PokerImac",
      title : "PokerImac",
      text : `Multiplayer poker game, developed with Unity and following the rules of Texas Holden Poker. 
      The game has the particularity of providing the player with these probabilities at each moment 
      of the game to obtain remarkable series of Poker (pair, flush, straight, …) according to the 
      cards in his hands and the board.
      <br/><br/>
      It is possible to play with AIs, and choose, at the beginning of the game, the behaviour of 
      these virtual players (make them more aggressive or with a greater tendency to bluff). AIs 
      will rely on their own probability of winning, as well as various random variables that 
      can be set by the player, to determine each of their actions.
      <br/><br/>
      This project is an initiative resulting from a lecture about statistics and probability at the
       IMAC engineering school.
      `,
      features : [
        "Gameplay creation with Unity.",
        "Calculation of the player's probabilities of winning.",
        "Virtual players with artificial intelligence."
      ],
      contributor : [
        "Antoine Libert – Programmation, Maths",
        "Flora Mallet – Assets"
      ],
      img: [require("@/assets/Projets/17/1.png"), require("@/assets/Projets/17/2.png"), require("@/assets/Projets/17/3.png")],
      type : "3D Programmation | May 2020",
      categories : ["ComputerGraphics"],
      codeUrl : "https://github.com/LibertAntoine/OpenGL-Galaxie"
    },
    { // Projet 3
      nameIndex : "AOneWayTicketToNishiwaga",
      title : "A one-way ticket to Nishiwaga",
      text : `Inspired by the history of traditional Japan, this project is the opening credits (title sequence) of 
      a fictional film created for the occasion. The credits present the story of Tom, a young Frenchman of 17, who,
      after the sudden death of his father, decides to leave everything to join his uncle living in a small village 
      in Japan. He will meet people that will change his vision of the world and the meaning of his life.
      <br/><br/>
      The graphical charter of the title sequence is based on the traditional ink drawings of Asia, used to depict 
      the natural and spiritual world of rural Japan. This project is an initiative resulting from lecture about 
      the understanding of cinema at the IMAC engineering school.
       `,
      features : [
        "Story Board of the title sequence.", 
        "Creation of digital illustrations, Asian ink effect.", 
        "Creation of filmed scenes, edited in double exposure.",
        "Animation of assets with After Effect."
      ],
      contributor : [
        "Antoine Libert – Captation, Animation", 
        "Flora Mallet – Story Board, Illustrations"
      ],   
      img: [require("@/assets/Projets/1/1.png"), require("@/assets/Projets/1/2.png"), require("@/assets/Projets/1/3.png")],
      type : "Digital Arts, Audiovisuel | May 2020",
      categories : ["DigitalArt", "Audiovisual"],
      projectLink : ["https://vimeo.com/466817887", "See video"],
       //codeUrl : "http://"
    },
    { // Projet 4
      nameIndex : "ActTogether",
      title : "ActTogether",
      text : `3D mock-up representing an interactive installation within
       the Saint-Lazare metro station, in Paris, and raising awareness of
        violence and harassment in public places, in particular transport 
        area. The installation puts several passers-by in a situation of 
        aggression against which it is possible for them to act collectively
       to arrest the aggressor.
      <br/><br/>
      This mock-up was produced with the P5 library. This project is an 
      initiative resulting from a lecture about interactivity, at the IMAC
       engineering school.
            `,
      features : [
        "Creation of a 3D reproduction of part of the Gare Saint-Lazare metro station.",
        "Implementation of a first-person camera view allowing to move around the mock-up.",
        "Interaction possible with the various billboards of the installation.",
        "Creation of 2D illustrations and videos."
      ],
      contributor : [
        "Antoine Libert – Programmation, 3D modélisation , video captation.", 
        "Flora Mallet – 2D Illustrations."
      ],
      img: [require("@/assets/Projets/2/1.png"), require("@/assets/Projets/2/2.png"), require("@/assets/Projets/2/3.png")],
      type : "Digital Arts | May 2020",
      categories : ["DigitalArt"],
      projectLink : ["http://interactivity.ingenus.ovh/", "See the mockup"],
      codeUrl : "https://github.com/LibertAntoine/AtcTogether"
    },
    { // Projet 5
      nameIndex : "Memap",
      title : "Memap",
      text : `The Memap application is a concept of a knowledge base manager inspired by human thought 
      aimed at offering a storage tool for our knowledge that is more intuitive and more in line 
      with our way of thinking. It offers a set of services allowing the cloud storage of various 
      documents, the drafting of new documents, and navigation among these documents allowing them 
      to be linked to each other, in a nodal spirit. The site also offers the possibility of splitting 
      the display into several parts in order to view several documents or node networks at the same time.
      <br/><br/>
      This project is an initiative of Nicolas Liénart and Antoine Libert, included as a tutored project 
      within the IMAC engineering school. 
            `,
      features : [
        "Creation of an editor with TinyMCE library.",
        "Creation of a document browser in front with a nodal form. ",
        "Neo4j database.",
        "Web scraping system for retrieving extracts from other websites."
      ],
      contributor : [
        "Antoine Libert – Editor, Web Scraping",
        "Nicolas Liénart – Nodal viewer",
      ],
      img: [require("@/assets/Projets/13/1.png"), require("@/assets/Projets/13/2.png"), require("@/assets/Projets/13/3.png")],
      type : "Web | September 2019 - May 2020",
      categories : ["Web"],
      codeUrl : "https://github.com/LibertAntoine/Memap"
    },
    { // Projet 6
      nameIndex : "DashBoard",
      title : "DashBoard",
      text : `Web application offering a weather dashboard. Temperature, wind and humidity 
      information for a chosen geographic area can be viewed via an aesthetic and simple 
      interface, either by entering the name of a city or a location directly on the map. 
      The application can also identify the user's location. This project aims at the production 
      of data visualization elements using various javascript libraries. 
      The application is based on a Vue.js frontend.
      <br/><br/>
      This project is an initiative resulting from a lecture about framework 
      frontend at the IMAC engineering school.
            `,
      features : [
        "Responsive application with Vue.js.",
        "Use of the vue-graphJs, Plotly, D3.js libraries for data visualization.",
      ],
      contributor : [
        "Antoine Libert – Web architecture, API",
        "Nicolas Lienart – Datavisualisation.",
        "Enguerrand De Smet - Datavisualisation.",
        "Margaux Vaillant – Style, responsive."
      ],
      img: [require("@/assets/Projets/8/1.png"), require("@/assets/Projets/8/2.png"), require("@/assets/Projets/8/3.png")],
      type : "Web | May 2020",
      categories : ["Web"],
      projectLink : ["https://dashboard.ingenus.ovh/", "See website"]
    },
    { // Projet 7
      nameIndex : "MinecraftEditor",
      title : "Minecraft Editor",
      text : `Cubic-based 3D world editor, developed in C++ and the OpenGL 4 graphics API.
       This editor offers a very complete interface allowing you to create cubes by moving 
       a selector or using the mouse. It is possible to change the colour or texture of 
       the cubes, and to do multi-texturing on the same cube, by choosing a different 
       texture per face. It is possible to place a directional or point light in the scene.
        Each cube is built by the geometry shader from a coordinate. The cubes are rendered
         in batch rendering technics.
         <br/><br/>
      This project is an initiative resulting from a lecture about image synthesis and 
      applied mathematics at the IMAC engineering school.
            `,
      features : [
        "Graphics pipeline in OpenGL 4.",
        "Selection of cubes with the mouse.",
        "Multi-texturing of cubes.",
        "Interface with ImGUi.",
        "Directional or point light."
      ],
      contributor : [
        "Antoine Libert – Renderer, GUI",
        "Nicolas Liénart – Selection, RBF",
      ],
      img: [require("@/assets/Projets/14/1.png"), require("@/assets/Projets/14/2.png"), require("@/assets/Projets/14/3.png")],
      type : "3D Programmation | December 2019",
      categories : ["ComputerGraphics"],
      codeUrl : "https://github.com/LibertAntoine/Minecraft_editor"
    },
    { // Projet 8
      nameIndex : "AtlantisWay",
      title : "Atlantis way",
      text : `Immersion in the oceanic shallows, this animation is modelled on Blender.
       It presents an underwater explorer who, among seaweed and corals, discovers
      the ruins of an ancient civilization. The goal here was to work on the creation
       of an underwater universe.
      <br/><br/>
      The rendering of this animation is calculated from Blender in rasterization 
      (but a ray tracing rendering is in progress, since… er…).
            `,
      features : [
        "Creation of an underwater environment.",
        "3D modeling of algae, corals and ruins.",
        "Procedural distribution of corals.",
        "Animations of modelled elements."
      ],
      contributor : [
        "Antoine Libert – Modeling of corals, underwater effect, animation.", 
        "Flora Mallet – Modeling and skeleton of plants."
      ],
      img: [require("@/assets/Projets/3/1.png"), require("@/assets/Projets/3/2.png"), require("@/assets/Projets/3/3.png")],
      type : "Digital Arts | December 2019",
      categories : ["DigitalArt"],
      projectLink : ["https://vimeo.com/466823067", "See video"]
    },
    { // Projet 9
      nameIndex : "OpenGLGalaxie",
      title : "OpenGL Galaxie",
      text : `Small OpenGL rendering project simulating the planet Earth with many moons in orbit. 
      The project contains different versions, with directional or point light, orbital or free camera.
      <br/><br/>
      This project is an implementation of the image synthesis lecture at the IMAC engineering school.
            `,
      features : [
        "OpenGL 4 rendering engine.",
        "Directional and point light."
      ],
      contributor : [],
      img: [require("@/assets/Projets/15/1.png"), require("@/assets/Projets/15/2.png"), require("@/assets/Projets/15/3.png")],
      type : "3D Programmation | November 2019",
      categories : ["ComputerGraphics"],
      codeUrl : "https://github.com/LibertAntoine/OpenGL-Galaxie"
    },
    { // Projet 10
      nameIndex : "Orpheus",
      title : "Orpheus",
      text : `Inspired by the myth of Orpheus, this audio story delves into the glorious 
      myth of the hero going to hell to recover his late wife and bring her back to the 
      living. Dotted with music and ambient sounds, this story can be listened to with 
      headphones for guaranteed immersion.
      <br/><br/>
      This project is an initiative resulting from a lecture about sound post-production
       at the IMAC engineering school.
            `,
      features : [
        "Sound editing and mixing with Protools.",
        "Recording of ambient sounds and voiceovers."
      ],
      contributor : [
        "Guillaume Haerinck",
        "Antoine Libert",
        "Nicolas Liénart"
      ],
      img: [require("@/assets/Projets/16/1.png"), require("@/assets/Projets/16/2.png"), require("@/assets/Projets/16/3.png")],
      type : "Audiovisual | November 2019",
      categories : ["Audiovisual"],
      projectLink : ["https://soundcloud.com/user-581905519/orphee", "Listen to the story"]
    },
    { // Projet 11
      nameIndex : "ConterTime",
      title : "Counter-time",
      text : `In this 9-minutes short movie, a young woman, Anna, who, during a jogging 
      finds herself debating the impending death of a stranger with a mysterious preacher 
      at the corner of a park. As the future occupies her every thought, she is confronted 
      at the fragility of her existence. This unexpected meeting could change the vision 
      she has of her future forever.
      <br/><br/>
      This film is an initiative resulting from a course in Motion Picture Creation 
      at the IMAC engineering school.
            `,
      features : [
        "Creation of a scenario and a technical breakdown.",
        "Video Capture.",
        "Audio and video post-production."
      ],
      contributor : [
        "Antoine Libert – Directing, editing",
        "Nicolas Liénart – Video Captation, editing",
        "Flora Mallet – Video Captation, editing",
        "Brice Mangeat – Video management",
        "Solène Mary-Vallée – Sound captation"
      ],
      img: [require("@/assets/Projets/6/1.png"), require("@/assets/Projets/6/2.png"), require("@/assets/Projets/6/3.png")],
      type : "Audiovisual | November 2019",
      categories : ["Audiovisual"],
      projectLink : ["https://www.youtube.com/watch?v=d41-IxLGGIA&t=6s", "See video"]
    },
    { // Projet 12
      nameIndex : "InsectTowerDefense",
      title : "Insect Tower Defense",
      text : `Insect Tower is a tower defense game about the world of insects. 
      The goal is to defend the Ant Queen against waves of invaders. To do this, 
      as in reality, ants will call on other species of insects, which they will 
      feed in exchange for their protection. Different resources can be used to 
      increase the strength, rate of fire or range of insects.
      <br/><br/>
      This project is entirely developed in C, with OpenGL v2 graphics API. This is 
      an initiative resulting from a lecture about image synthesis and algorithmics 
      at IMAC engineering school.
            `,
      features : [
        "OpenGL v2 rendering engine.",
        "Dynamic levels creation with itd or ppm file loading.",
        "User interface.",
        "Animations and sprites management",
        "Shortest path algorithm.",
        "Dynamic trajectory management of projectiles.",
        "Creation of several menus."
      ],
      contributor : [
        "Antoine Libert – Gameplay, projectile, shortest path algorithm, monster wave.",
        "Nicolas Lienart – GUI, map, sprite, building."
      ],
      img: [require("@/assets/Projets/11/1.png"), require("@/assets/Projets/11/2.png"), require("@/assets/Projets/11/3.png")],
      type : "3D programming | May 2019",
      categories : ["ComputerGraphics"],
      codeUrl : "https://github.com/LibertAntoine/Insect_Tower_Defense"
    },
    { // Projet 13
      nameIndex : "DaftPunkClip",
      title : "Daft Punk Clip",
      text : `In homage to the science fiction universe of Daft punk clips, this animation, produced 
      with After effect, draws a palette of visuals inspired by cartoons from the 80s, all on a medley 
      of Daft Punk's iconic album, Discovery. The square format of the clip aims to recall the form of 
      vinyl and CD covers.
      <br/><br/>
      This project is an initiative resulting from a lecture about post-production After Effect at the 
      IMAC engineering school.
            `,
      features : [
        "Motion design with After Effect.",
        "Ability to use layers, masks, animation keys, cameras and lights.",
        "Ability to use scripts et controllers."
      ],
      contributor : [],
      img: [require("@/assets/Projets/7/1.png"), require("@/assets/Projets/7/2.png"), require("@/assets/Projets/7/3.png")],
      type : "Digital Arts | May 2019",
      categories : ["DigitalArt"],
      projectLink : ["https://vimeo.com/466834974", "See video"]
    },
    { // Projet 14
      nameIndex : "FriederNakeRemake",
      title : "Frieder Nake Remake",
      text : `As a tribute to the renowned digital artist Freider Nake, this 
      project revisits his work Labyrinth, adding nuances of frequencies and 
      colours chosen in a procedural way, but while respecting the rules set 
      by the artist in his work. A perfect opportunity to immerse yourself in 
      the beginnings of digital art. This project was created with Processing 3.
      <br/><br/>
      This project is an initiative resulting from a lecture about algorithmic 
      aesthetics at the IMAC engineering school.            
            `,
      features : [
        "Analysis of the artist's algorithmic rules.",
        "Reproduction of his work with Processing 3.",
        "Creation of a GUI allowing to influence the procedural generation parameters."
      ],
      contributor : [],
      img: [require("@/assets/Projets/9/1.png"), require("@/assets/Projets/9/2.png"), require("@/assets/Projets/9/3.png")],
      type : "Digital Arts | December 2018",
      categories : ["DigitalArt"],
      codeUrl : "https://github.com/LibertAntoine/Frieder_Nake_Remake"
    },
    { // Projet 15
      nameIndex : "BreakTheIce",
      title : "Break the ice",
      text : `This 5.30 min short film tells the story of Melanie and Thomas, two longtime
       friends who both meet at a party. But as Thomas timidly tries to confess his feelings
        to his friend, the confession turns into a nightmare, pulling Mélanie into a controversial
         situation.
         <br/><br/>
      This film is an initiative resulting from a lecture about video creation at
       the IMAC engineering school.
            `,
      features : [
        "Creation of a scenario and a technical breakdown.",
        "Video Capture.",
        "Audio and video post-production."
      ],
      contributor : [
        "Sophie Bayer – Editing",
        "Andréa Guillet – Sound recording, script",
        "Guillaume Haerinck – Video captation",
        "Antoine Libert – Acting direction, editing, color calibration",
        "Nicolas Liénart – Sound recording, script"
      ],
      img: [require("@/assets/Projets/5/1.png"), require("@/assets/Projets/5/2.png"), require("@/assets/Projets/5/3.png")],
      type : "Audiovisual | December 2018",
      categories : ["Audiovisual"],
      projectLink : ["https://www.youtube.com/watch?v=Blzk_FCrKG0&t=3s", "See video"]
    }
    /*{ // Projet 12
      nameIndex : "Lolimac",
      title : "Lolimac",
      text : `Application allowing its users to create events and invite other members to join them. 
      Developed in Angular 7 for the frontend and PHP / MySQL for the backend, this project aimed
       to help students at IMAC engineering school more easily organize events.
       <br/><br/>
      This project is an initiative resulting from a lecture about web programming, at the IMAC 
      engineering school.
            `,
      features : [
        "Front responsive with Angular 7.",
        "API REST with PHP.",
        "Authentification with token JWT."
      ],
      contributor : [
        "Antoine Libert – Backend Architecture, JWT.",
        "Jules Fouchy – Backend PHP.",
        "Nicolas Liénart – Backend PHP.",
        "Guillaume Haerinck – Frontend Angular.",
        "Monica Lisasek – Frontend Design."
      ],
      img: [require("@/assets/Projets/11/1.png"), require("@/assets/Projets/11/2.png"), require("@/assets/Projets/11/3.png")],
      type : "Web | May 2019",
      categories : ["Web"],
      codeUrl : "https://github.com/LibertAntoine/Lolimac"
    },*/
    
   
   
    
   
   ]
}

export default data