
"use strict";

/*
 * QUIZ ARENA
 * Banque de démonstration : 42 questions.
 * Chaque question possède 4 choix et une explication.
 * Pour obtenir les 630 questions prévues, il faudra compléter la banque.
 */

const questions = [
    // INFORMATIQUE
    
    {
        categorie: "Informatique", emoji: "💻", niveau: "facile",
        question: "Que signifie CPU ?",
        choix: ["Central Processing Unit", "Computer Personal Unit", "Central Program Utility", "Control Process User"],
        reponse: 0,
        explication: "Le CPU est le processeur qui exécute les instructions d'un ordinateur."
    },
    {
    categorie: "Informatique", emoji: "💻", niveau: "facile",
    question: "Quel langage est utilisé pour styliser une page web ?",
    choix: ["HTML", "CSS", "SQL", "Python"],
    reponse: 1,
    explication: "CSS permet de définir les couleurs, les tailles, les espacements et la présentation d'une page web."
    },
    {
    categorie: "Informatique", emoji: "💻", niveau: "facile",
    question: "Que signifie USB ?",
    choix: ["Universal Serial Bus", "United System Board", "Universal System Backup", "User Service Base"],
    reponse: 0,
    explication: "USB signifie Universal Serial Bus. Il sert notamment à connecter des périphériques."
    },
    {
        categorie: "Informatique", emoji: "💻", niveau: "facile",
        question: "Quel appareil permet principalement de déplacer le curseur ?",
        choix: ["Imprimante", "Souris", "Microphone", "Routeur"],
        reponse: 1,
        explication: "La souris permet de déplacer le pointeur et de sélectionner des éléments."
    },
    {
        categorie: "Informatique", emoji: "💻", niveau: "moyen",
        question: "Quel langage est principalement utilisé pour structurer une page web ?",
        choix: ["HTML", "SQL", "Python", "C"],
        reponse: 0,
        explication: "HTML définit la structure et le contenu d'une page web."
    },
    {
    categorie: "Informatique", emoji: "💻", niveau: "moyen",
    question: "Quel langage est principalement utilisé pour interroger une base de données relationnelle ?",
    choix: ["CSS", "SQL", "HTML", "XML"],
    reponse: 1,
    explication: "SQL permet notamment de rechercher, ajouter, modifier et supprimer des données dans une base relationnelle."
},
    {
        categorie: "Informatique", emoji: "💻", niveau: "moyen",
        question: "À quoi sert principalement Git ?",
        choix: ["Créer des images", "Gérer les versions du code", "Accélérer le processeur", "Remplacer un système d'exploitation"],
        reponse: 1,
        explication: "Git conserve l'historique des modifications d'un projet."
    },
    {
        categorie: "Informatique", emoji: "💻", niveau: "difficile",
        question: "Quel principe de sécurité consiste à donner uniquement les droits nécessaires ?",
        choix: ["Redondance", "Moindre privilège", "Virtualisation", "Compression"],
        reponse: 1,
        explication: "Le principe du moindre privilège limite les permissions au strict nécessaire."
    },
    {
    categorie: "Informatique", emoji: "💻", niveau: "difficile",
    question: "Quelle structure de données fonctionne selon le principe LIFO ?",
    choix: ["File", "Pile", "Arbre binaire", "Graphe"],
    reponse: 1,
    explication: "LIFO signifie Last In, First Out : le dernier élément ajouté à une pile est le premier retiré."
},
    {
        categorie: "Informatique", emoji: "💻", niveau: "difficile",
        question: "Quel algorithme est couramment utilisé pour vérifier l'intégrité d'un fichier ?",
        choix: ["SHA-256", "HTML5", "FTP", "CSS Grid"],
        reponse: 0,
        explication: "SHA-256 produit une empreinte permettant de détecter une modification du fichier."
    },

    // SCIENCES
    {
        categorie: "Sciences", emoji: "🔬", niveau: "facile",
        question: "Quelle planète est surnommée la planète rouge ?",
        choix: ["Vénus", "Mars", "Jupiter", "Mercure"],
        reponse: 1,
        explication: "La poussière riche en oxyde de fer donne à Mars sa couleur rougeâtre."
    },
    {
    categorie: "Sciences", emoji: "🔬", niveau: "facile",
    question: "Quel gaz les humains respirent-ils pour assurer leur respiration cellulaire ?",
    choix: ["Hélium", "Oxygène", "Hydrogène", "Méthane"],
    reponse: 1,
    explication: "L'oxygène est utilisé par les cellules dans la respiration cellulaire aérobie."
},
{
    categorie: "Sciences", emoji: "🔬", niveau: "facile",
    question: "À quelle température l'eau pure gèle-t-elle normalement ?",
    choix: ["0 °C", "10 °C", "50 °C", "100 °C"],
    reponse: 0,
    explication: "À pression atmosphérique normale, l'eau pure gèle à 0 °C."
},
    {
        categorie: "Sciences", emoji: "🔬", niveau: "facile",
        question: "Quel organe pompe le sang dans le corps humain ?",
        choix: ["Le foie", "Le poumon", "Le cœur", "Le rein"],
        reponse: 2,
        explication: "Le cœur propulse le sang dans le système circulatoire."
    },
    {
        categorie: "Sciences", emoji: "🔬", niveau: "moyen",
        question: "Quel est le symbole chimique de l'or ?",
        choix: ["Ag", "Au", "Or", "Fe"],
        reponse: 1,
        explication: "Au vient du mot latin aurum."
    },
    {
    categorie: "Sciences", emoji: "🔬", niveau: "moyen",
    question: "Quelle force attire les objets vers la Terre ?",
    choix: ["La gravité", "Le magnétisme uniquement", "La friction", "La poussée d'Archimède"],
    reponse: 0,
    explication: "La gravité est l'attraction entre les corps qui possèdent une masse."
},
    {
        categorie: "Sciences", emoji: "🔬", niveau: "moyen",
        question: "Quelle est approximativement la vitesse de la lumière dans le vide ?",
        choix: ["30 000 km/s", "150 000 km/s", "300 000 km/s", "1 000 000 km/s"],
        reponse: 2,
        explication: "La lumière se déplace à environ 300 000 kilomètres par seconde dans le vide."
    },
    {
        categorie: "Sciences", emoji: "🔬", niveau: "difficile",
        question: "Quelle particule possède une charge électrique négative ?",
        choix: ["Proton", "Neutron", "Électron", "Photon"],
        reponse: 2,
        explication: "L'électron porte une charge électrique négative."
    },
    {
    categorie: "Sciences", emoji: "🔬", niveau: "difficile",
    question: "Quel est le pH approximatif d'une solution neutre à 25 °C ?",
    choix: ["0", "3", "7", "14"],
    reponse: 2,
    explication: "À 25 °C, une solution aqueuse neutre possède un pH de 7."
},
    {
        categorie: "Sciences", emoji: "🔬", niveau: "difficile",
        question: "Quel phénomène explique principalement la déviation de la lumière lorsqu'elle change de milieu ?",
        choix: ["Réfraction", "Fusion", "Conduction", "Radioactivité"],
        reponse: 0,
        explication: "La réfraction est le changement de direction de la lumière entre deux milieux."
    },

    // HISTOIRE
    {
        categorie: "Histoire", emoji: "📜", niveau: "facile",
        question: "En quelle année la Seconde Guerre mondiale s'est-elle terminée en Europe ?",
        choix: ["1918", "1939", "1945", "1950"],
        reponse: 2,
        explication: "La capitulation allemande en Europe est entrée en vigueur en mai 1945."
    },
    {
    categorie: "Histoire", emoji: "📜", niveau: "facile",
    question: "Qui était le premier homme à marcher sur la Lune ?",
    choix: ["Youri Gagarine", "Neil Armstrong", "Buzz Aldrin", "Michael Collins"],
    reponse: 1,
    explication: "Neil Armstrong a posé le pied sur la Lune le 21 juillet 1969, heure UTC."
},
{
    categorie: "Histoire", emoji: "📜", niveau: "facile",
    question: "Quel peuple est associé à la construction du Colisée de Rome ?",
    choix: ["Les Romains", "Les Incas", "Les Mayas", "Les Mongols"],
    reponse: 0,
    explication: "Le Colisée a été construit dans la Rome antique sous la dynastie des Flaviens."
},
    {
        categorie: "Histoire", emoji: "📜", niveau: "facile",
        question: "Quelle civilisation a construit les pyramides de Gizeh ?",
        choix: ["Les Romains", "Les Égyptiens de l'Antiquité", "Les Vikings", "Les Perses"],
        reponse: 1,
        explication: "Les pyramides de Gizeh ont été construites dans l'Égypte ancienne."
    },
    {
        categorie: "Histoire", emoji: "📜", niveau: "moyen",
        question: "En quelle année la Révolution française a-t-elle commencé ?",
        choix: ["1492", "1789", "1815", "1914"],
        reponse: 1,
        explication: "L'année 1789 marque le début de la Révolution française."
    },
    {
    categorie: "Histoire", emoji: "📜", niveau: "moyen",
    question: "En quelle année l'indépendance de la République démocratique du Congo a-t-elle été proclamée ?",
    choix: ["1956", "1960", "1965", "1971"],
    reponse: 1,
    explication: "La RDC a accédé à l'indépendance le 30 juin 1960."
},
    {
        categorie: "Histoire", emoji: "📜", niveau: "moyen",
        question: "Qui fut le premier président des États-Unis ?",
        choix: ["Abraham Lincoln", "Thomas Jefferson", "George Washington", "John Adams"],
        reponse: 2,
        explication: "George Washington a été le premier président américain, de 1789 à 1797."
    },
    {
        categorie: "Histoire", emoji: "📜", niveau: "difficile",
        question: "Quel traité est généralement associé à la fin de la Première Guerre mondiale avec l'Allemagne ?",
        choix: ["Traité de Rome", "Traité de Versailles", "Traité de Maastricht", "Traité de Tordesillas"],
        reponse: 1,
        explication: "Le traité de Versailles a été signé en 1919."
    },
    {
    categorie: "Histoire", emoji: "📜", niveau: "difficile",
    question: "Quelle civilisation ancienne utilisait l'écriture cunéiforme en Mésopotamie ?",
    choix: ["Les Sumériens", "Les Aztèques", "Les Celtes", "Les Polynésiens"],
    reponse: 0,
    explication: "Les Sumériens sont parmi les premiers peuples à avoir développé l'écriture cunéiforme."
},
    {
        categorie: "Histoire", emoji: "📜", niveau: "difficile",
        question: "Quelle ville était la capitale de l'Empire byzantin ?",
        choix: ["Athènes", "Constantinople", "Alexandrie", "Antioche"],
        reponse: 1,
        explication: "Constantinople, aujourd'hui Istanbul, fut la capitale de l'Empire byzantin."
    },

    // GÉOGRAPHIE
    {
        categorie: "Géographie", emoji: "🌍", niveau: "facile",
        question: "Quelle est la capitale de la France ?",
        choix: ["Lyon", "Marseille", "Paris", "Nice"],
        reponse: 2,
        explication: "Paris est la capitale de la France."
    },
    {
    categorie: "Géographie", emoji: "🌍", niveau: "facile",
    question: "Quel est le plus grand continent en superficie ?",
    choix: ["Afrique", "Europe", "Asie", "Océanie"],
    reponse: 2,
    explication: "L'Asie est le plus grand continent du monde en superficie."
},
{
    categorie: "Géographie", emoji: "🌍", niveau: "facile",
    question: "Quel fleuve traverse l'Égypte et se jette dans la Méditerranée ?",
    choix: ["Le Nil", "Le Congo", "Le Niger", "Le Zambèze"],
    reponse: 0,
    explication: "Le Nil traverse l'Égypte et se termine par un vaste delta en Méditerranée."
},
    {
        categorie: "Géographie", emoji: "🌍", niveau: "facile",
        question: "Sur quel continent se trouve la République démocratique du Congo ?",
        choix: ["Asie", "Afrique", "Europe", "Amérique du Sud"],
        reponse: 1,
        explication: "La RDC se trouve en Afrique centrale."
    },
    {
        categorie: "Géographie", emoji: "🌍", niveau: "moyen",
        question: "Quel est le plus grand océan du monde ?",
        choix: ["Atlantique", "Indien", "Arctique", "Pacifique"],
        reponse: 3,
        explication: "L'océan Pacifique est le plus vaste de la planète."
    },
    {
    categorie: "Géographie", emoji: "🌍", niveau: "moyen",
    question: "Quelle est la capitale du Japon ?",
    choix: ["Kyoto", "Osaka", "Tokyo", "Hiroshima"],
    reponse: 2,
    explication: "Tokyo est la capitale du Japon."
},
    {
        categorie: "Géographie", emoji: "🌍", niveau: "moyen",
        question: "Quelle est la capitale de la Tunisie ?",
        choix: ["Sfax", "Sousse", "Tunis", "Gabès"],
        reponse: 2,
        explication: "Tunis est la capitale de la Tunisie."
    },
    {
        categorie: "Géographie", emoji: "🌍", niveau: "difficile",
        question: "Quel pays est entièrement enclavé dans l'Afrique du Sud ?",
        choix: ["Namibie", "Lesotho", "Botswana", "Zimbabwe"],
        reponse: 1,
        explication: "Le Lesotho est un État enclavé à l'intérieur du territoire sud-africain."
    },
    {
    categorie: "Géographie", emoji: "🌍", niveau: "difficile",
    question: "Quel est le plus vaste désert chaud du monde ?",
    choix: ["Le désert de Gobi", "Le Sahara", "Le Kalahari", "Le désert d'Arabie"],
    reponse: 1,
    explication: "Le Sahara est le plus vaste désert chaud du monde. L'Antarctique est le plus grand désert au sens général."
},
    {
        categorie: "Géographie", emoji: "🌍", niveau: "difficile",
        question: "Quel détroit sépare l'Espagne du Maroc ?",
        choix: ["Détroit de Béring", "Détroit de Gibraltar", "Détroit d'Ormuz", "Détroit de Malacca"],
        reponse: 1,
        explication: "Le détroit de Gibraltar relie l'Atlantique à la Méditerranée."
    },

    // SPORT
    {
        categorie: "Sport", emoji: "⚽", niveau: "facile",
        question: "Combien de joueurs une équipe de football aligne-t-elle normalement sur le terrain ?",
        choix: ["7", "9", "11", "13"],
        reponse: 2,
        explication: "Une équipe de football commence normalement un match avec onze joueurs."
    },
    {
    categorie: "Sport", emoji: "⚽", niveau: "facile",
    question: "Combien de points vaut un panier classique réussi à l'intérieur de la ligne des trois points au basket ?",
    choix: ["1", "2", "3", "4"],
    reponse: 1,
    explication: "Un panier marqué à l'intérieur de la ligne des trois points vaut normalement deux points."
},
{
    categorie: "Sport", emoji: "⚽", niveau: "facile",
    question: "Dans quel sport utilise-t-on un ring ?",
    choix: ["Boxe", "Cyclisme", "Natation", "Athlétisme"],
    reponse: 0,
    explication: "La boxe se pratique sur un ring délimité par des cordes."
},
    {
        categorie: "Sport", emoji: "⚽", niveau: "facile",
        question: "Dans quel sport utilise-t-on une raquette et un volant ?",
        choix: ["Badminton", "Rugby", "Handball", "Hockey"],
        reponse: 0,
        explication: "Le badminton se joue avec une raquette et un volant."
    },
    {
        categorie: "Sport", emoji: "⚽", niveau: "moyen",
        question: "Tous les combien d'années ont lieu les Jeux olympiques d'été en temps normal ?",
        choix: ["2 ans", "3 ans", "4 ans", "5 ans"],
        reponse: 2,
        explication: "Les Jeux olympiques d'été suivent normalement un cycle de quatre ans."
    },
    {
    categorie: "Sport", emoji: "⚽", niveau: "moyen",
    question: "Quel pays a remporté la Coupe du monde masculine de football en 2022 ?",
    choix: ["France", "Brésil", "Argentine", "Croatie"],
    reponse: 2,
    explication: "L'Argentine a remporté la finale contre la France aux tirs au but en 2022."
},
    {
        categorie: "Sport", emoji: "⚽", niveau: "moyen",
        question: "Dans quel sport peut-on réaliser un slam dunk ?",
        choix: ["Basket-ball", "Tennis", "Golf", "Natation"],
        reponse: 0,
        explication: "Le slam dunk consiste à marquer en faisant entrer le ballon directement dans le panier."
    },
    {
        categorie: "Sport", emoji: "⚽", niveau: "difficile",
        question: "Quelle est la distance officielle d'un marathon ?",
        choix: ["40 km", "41,195 km", "42,195 km", "45 km"],
        reponse: 2,
        explication: "La distance officielle d'un marathon est de 42,195 kilomètres."
    },
    {
    categorie: "Sport", emoji: "⚽", niveau: "difficile",
    question: "Quelle est la longueur officielle d'une piscine olympique en grand bassin ?",
    choix: ["25 mètres", "33 mètres", "50 mètres", "100 mètres"],
    reponse: 2,
    explication: "Une piscine olympique en grand bassin mesure 50 mètres de longueur."
},
    {
        categorie: "Sport", emoji: "⚽", niveau: "difficile",
        question: "Dans quel pays le judo moderne a-t-il été développé ?",
        choix: ["Chine", "Japon", "Corée du Sud", "Thaïlande"],
        reponse: 1,
        explication: "Jigoro Kano a fondé le judo au Japon à la fin du XIXe siècle."
    },

    // MUSIQUE
    {
        categorie: "Musique", emoji: "🎵", niveau: "facile",
        question: "Combien de notes différentes compte la gamme diatonique classique ?",
        choix: ["5", "6", "7", "8"],
        reponse: 2,
        explication: "La gamme diatonique comporte sept notes : do, ré, mi, fa, sol, la et si."
    },
    {
    categorie: "Musique", emoji: "🎵", niveau: "facile",
    question: "Quel instrument possède généralement six cordes dans sa version classique moderne ?",
    choix: ["Guitare", "Trompette", "Flûte traversière", "Timbales"],
    reponse: 0,
    explication: "La guitare classique moderne possède généralement six cordes."
},
{
    categorie: "Musique", emoji: "🎵", niveau: "facile",
    question: "Comment appelle-t-on une personne qui dirige un orchestre ?",
    choix: ["Un soliste", "Un chef d'orchestre", "Un parolier", "Un ingénieur du son"],
    reponse: 1,
    explication: "Le chef d'orchestre coordonne les musiciens et guide l'interprétation musicale."
},
    {
        categorie: "Musique", emoji: "🎵", niveau: "facile",
        question: "Quel instrument possède généralement 88 touches ?",
        choix: ["Guitare", "Piano", "Flûte", "Violon"],
        reponse: 1,
        explication: "Un piano standard moderne possède généralement 88 touches."
    },
    {
        categorie: "Musique", emoji: "🎵", niveau: "moyen",
        question: "Quel compositeur a écrit la Neuvième Symphonie avec l'Ode à la joie ?",
        choix: ["Mozart", "Beethoven", "Chopin", "Vivaldi"],
        reponse: 1,
        explication: "L'Ode à la joie est intégrée à la Neuvième Symphonie de Beethoven."
    },
    {
    categorie: "Musique", emoji: "🎵", niveau: "moyen",
    question: "Quel chanteur est surnommé le « Roi de la pop » ?",
    choix: ["Elvis Presley", "Michael Jackson", "Freddie Mercury", "Bob Marley"],
    reponse: 1,
    explication: "Michael Jackson est mondialement connu sous le surnom de « Roi de la pop »."
},
    {
        categorie: "Musique", emoji: "🎵", niveau: "moyen",
        question: "Quel instrument appartient à la famille des cuivres ?",
        choix: ["Clarinette", "Trompette", "Violoncelle", "Harpe"],
        reponse: 1,
        explication: "La trompette est un instrument à vent de la famille des cuivres."
    },
    {
        categorie: "Musique", emoji: "🎵", niveau: "difficile",
        question: "Comment appelle-t-on la vitesse d'exécution d'un morceau musical ?",
        choix: ["Timbre", "Tempo", "Tonalité", "Accord"],
        reponse: 1,
        explication: "Le tempo indique la vitesse à laquelle une œuvre musicale est jouée."
    },
    {
    categorie: "Musique", emoji: "🎵", niveau: "difficile",
    question: "Combien de lignes comporte une portée musicale standard ?",
    choix: ["4", "5", "6", "7"],
    reponse: 1,
    explication: "Une portée musicale standard comporte cinq lignes et quatre interlignes."
},
    {
        categorie: "Musique", emoji: "🎵", niveau: "difficile",
        question: "Combien de demi-tons séparent deux notes à l'intervalle d'une octave en tempérament égal ?",
        choix: ["6", "8", "10", "12"],
        reponse: 3,
        explication: "Une octave comporte douze demi-tons en tempérament égal."
    },

    // CULTURE GÉNÉRALE
    {
        categorie: "Culture générale", emoji: "🧠", niveau: "facile",
        question: "Combien de jours compte une année bissextile ?",
        choix: ["364", "365", "366", "367"],
        reponse: 2,
        explication: "Une année bissextile compte 366 jours, avec un 29 février."
    },
    {
    categorie: "Culture générale", emoji: "🧠", niveau: "facile",
    question: "Combien de couleurs compte traditionnellement l'arc-en-ciel ?",
    choix: ["5", "6", "7", "8"],
    reponse: 2,
    explication: "On distingue traditionnellement sept couleurs dans l'arc-en-ciel."
},
{
    categorie: "Culture générale", emoji: "🧠", niveau: "facile",
    question: "Quel animal est souvent appelé le roi des animaux ?",
    choix: ["Le tigre", "Le lion", "L'éléphant", "Le loup"],
    reponse: 1,
    explication: "Le lion porte traditionnellement le surnom de roi des animaux."
},
    {
        categorie: "Culture générale", emoji: "🧠", niveau: "facile",
        question: "Quelle langue parle-t-on principalement au Brésil ?",
        choix: ["Espagnol", "Portugais", "Français", "Italien"],
        reponse: 1,
        explication: "La langue officielle du Brésil est le portugais."
    },
    {
        categorie: "Culture générale", emoji: "🧠", niveau: "moyen",
        question: "Quel est le plus petit nombre premier ?",
        choix: ["0", "1", "2", "3"],
        reponse: 2,
        explication: "Le nombre 2 est le plus petit nombre premier et le seul premier pair."
    },
    {
    categorie: "Culture générale", emoji: "🧠", niveau: "moyen",
    question: "Quel est le résultat de 12 multiplié par 8 ?",
    choix: ["86", "92", "96", "108"],
    reponse: 2,
    explication: "12 x 8 = 96."
},
    {
        categorie: "Culture générale", emoji: "🧠", niveau: "moyen",
        question: "Combien de côtés possède un hexagone ?",
        choix: ["5", "6", "7", "8"],
        reponse: 1,
        explication: "Un hexagone est un polygone à six côtés."
    },
    {
        categorie: "Culture générale", emoji: "🧠", niveau: "difficile",
        question: "Quel est le nom du processus par lequel les plantes utilisent la lumière pour produire des sucres ?",
        choix: ["Fermentation", "Photosynthèse", "Évaporation", "Digestion"],
        reponse: 1,
        explication: "La photosynthèse permet aux plantes de transformer l'énergie lumineuse en énergie chimique."
    },
    {
    categorie: "Culture générale", emoji: "🧠", niveau: "difficile",
    question: "Quel scientifique a formulé les trois lois classiques du mouvement ?",
    choix: ["Albert Einstein", "Isaac Newton", "Galilée", "Nikola Tesla"],
    reponse: 1,
    explication: "Isaac Newton a formulé les trois lois du mouvement présentées dans ses travaux de mécanique classique."
},
    {
        categorie: "Culture générale", emoji: "🧠", niveau: "difficile",
        question: "Quel écrivain a créé le personnage de Sherlock Holmes ?",
        choix: ["Jules Verne", "Arthur Conan Doyle", "Victor Hugo", "Agatha Christie"],
        reponse: 1,
        explication: "Arthur Conan Doyle a créé Sherlock Holmes, détective apparu en 1887."
    }
];

const totalQuestions = 20;
const dureeParQuestion = 30;

const ecrans = document.querySelectorAll(".ecran");
const formulaire = document.getElementById("formulaire-demarrage");
const modeSelect = document.getElementById("mode");
const champJoueur2 = document.getElementById("champ-joueur2");
const nom1Input = document.getElementById("nom1");
const nom2Input = document.getElementById("nom2");

const boutonSuivant = document.getElementById("bouton-suivant");
const boutonQuitter = document.getElementById("quitter");
const boutonRecommencer = document.getElementById("recommencer");
const boutonRejouer = document.getElementById("rejouer");
const boutonRetourAccueil = document.getElementById("retour-accueil");

let joueurs = [];
let questionsJoueurs = [];
let indexQuestion = 0;
let joueurActuel = 0;
let tempsRestant = dureeParQuestion;
let intervalleChrono = null;
let reponseDonnee = false;
let debutPartie = 0;

function melanger(tableau) {
    const copie = [...tableau];

    for (let i = copie.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [copie[i], copie[j]] = [copie[j], copie[i]];
    }

    return copie;
}

function afficherEcran(id) {
    ecrans.forEach((ecran) => {
        ecran.classList.toggle("active", ecran.id === id);
    });
}

function mettreAJourMode() {
    const modeDuo = modeSelect.value === "duo";

    champJoueur2.classList.toggle("cache", !modeDuo);
    nom2Input.required = modeDuo;
}

modeSelect.addEventListener("change", mettreAJourMode);
mettreAJourMode();

function prendreQuestionsParNiveau(niveau, nombre) {
    const disponibles = melanger(
        questions.filter((question) => question.niveau === niveau)
    );

    if (disponibles.length < nombre) {
        throw new Error(
            `Pas assez de questions pour le niveau "${niveau}".`
        );
    }

    return disponibles.slice(0, nombre);
}

function preparerQuestions() {
    const faciles = prendreQuestionsParNiveau("facile", 14);
    const moyennes = prendreQuestionsParNiveau("moyen", 14);
    const difficiles = prendreQuestionsParNiveau("difficile", 12);

    if (modeSelect.value === "solo") {
        return [
            melanger([
                ...faciles.slice(0, 7),
                ...moyennes.slice(0, 7),
                ...difficiles.slice(0, 6)
            ])
        ];
    }

    const setJoueur1 = melanger([
        ...faciles.slice(0, 7),
        ...moyennes.slice(0, 7),
        ...difficiles.slice(0, 6)
    ]);

    const setJoueur2 = melanger([
        ...faciles.slice(7, 14),
        ...moyennes.slice(7, 14),
        ...difficiles.slice(6, 12)
    ]);

    return [setJoueur1, setJoueur2];
}

function demarrerPartie() {
    try {
        const nom1 = nom1Input.value.trim();
        const nom2 = nom2Input.value.trim();

        if (!nom1) {
            nom1Input.focus();
            alert("Entre le nom du joueur 1.");
            return;
        }

        if (modeSelect.value === "duo" && !nom2) {
            nom2Input.focus();
            alert("Entre le nom du joueur 2.");
            return;
        }

        if (modeSelect.value === "duo" &&
            nom1.toLocaleLowerCase() === nom2.toLocaleLowerCase()) {
            alert("Choisis deux noms différents pour les joueurs.");
            nom2Input.focus();
            return;
        }

        joueurs = [
            { nom: nom1, score: 0 }
        ];

        if (modeSelect.value === "duo") {
            joueurs.push({ nom: nom2, score: 0 });
        }

        questionsJoueurs = preparerQuestions();
        indexQuestion = 0;
        joueurActuel = 0;
        debutPartie = Date.now();

        document.getElementById("affichage-nom1").textContent = joueurs[0].nom;
        document.getElementById("score1").textContent = "0";

        const carteJoueur2 = document.getElementById("carte-joueur2");
        carteJoueur2.classList.toggle("cache", joueurs.length === 1);

        if (joueurs.length === 2) {
            document.getElementById("affichage-nom2").textContent = joueurs[1].nom;
            document.getElementById("score2").textContent = "0";
        }

        afficherEcran("jeu");
        afficherQuestion();
    } catch (erreur) {
        console.error(erreur);
        alert("Impossible de préparer la partie. Vérifie la banque de questions.");
    }
}

formulaire.addEventListener("submit", (event) => {
    event.preventDefault();
    demarrerPartie();
});

function afficherQuestion() {
    arreterChronometre();

    reponseDonnee = false;
    tempsRestant = dureeParQuestion;

    const question = questionsJoueurs[joueurActuel][indexQuestion];
    const joueur = joueurs[joueurActuel];

    document.getElementById("numero-question").textContent =
        `Question ${indexQuestion + 1} / ${totalQuestions}`;

    document.getElementById("barre-progression").style.width =
        `${((indexQuestion + 1) / totalQuestions) * 100}%`;

    document.getElementById("categorie-question").textContent =
        `${question.emoji} ${question.categorie}`;

    const badge = document.getElementById("badge-difficulte");
    badge.textContent = question.niveau.charAt(0).toUpperCase() +
        question.niveau.slice(1);
    badge.className = `badge ${question.niveau}`;

    document.getElementById("instruction-question").textContent =
        joueurs.length === 1
            ? "À toi de jouer !"
            : `Au tour de ${joueur.nom}`;

    document.getElementById("texte-question").textContent = question.question;
    document.getElementById("temps").textContent = tempsRestant;
    document.querySelector(".chronometre").classList.remove("urgent");

    document.getElementById("correction").classList.add("cache");
    boutonSuivant.classList.add("cache");

    const zoneReponses = document.getElementById("reponses");
    zoneReponses.replaceChildren();

    question.choix.forEach((choix, index) => {
        const bouton = document.createElement("button");
        bouton.type = "button";
        bouton.className = "bouton-reponse";
        bouton.textContent = `${String.fromCharCode(65 + index)}. ${choix}`;

        bouton.addEventListener("click", () => verifierReponse(index));
        zoneReponses.appendChild(bouton);
    });

    document.getElementById("carte-joueur1").classList.toggle(
        "active", joueurActuel === 0
    );

    document.getElementById("carte-joueur2").classList.toggle(
        "active", joueurActuel === 1
    );

    demarrerChronometre();
}

function demarrerChronometre() {
    arreterChronometre();

    intervalleChrono = setInterval(() => {
        if (reponseDonnee) {
            arreterChronometre();
            return;
        }

        tempsRestant--;
        document.getElementById("temps").textContent = tempsRestant;

        if (tempsRestant <= 5) {
            document.querySelector(".chronometre").classList.add("urgent");
        }

        if (tempsRestant <= 0) {
            verifierReponse(-1);
        }
    }, 1000);
}

function arreterChronometre() {
    if (intervalleChrono !== null) {
        clearInterval(intervalleChrono);
        intervalleChrono = null;
    }
}

function verifierReponse(indexChoisi) {
    if (reponseDonnee) return;

    reponseDonnee = true;
    arreterChronometre();

    const question = questionsJoueurs[joueurActuel][indexQuestion];
    const boutons = document.querySelectorAll(".bouton-reponse");
    const bonneReponse = question.reponse;

    boutons.forEach((bouton, index) => {
        bouton.disabled = true;

        if (index === bonneReponse) {
            bouton.classList.add("correct");
        } else if (index === indexChoisi) {
            bouton.classList.add("incorrect");
        }
    });

    const bonneReponseDonnee = indexChoisi === bonneReponse;

    if (bonneReponseDonnee) {
        joueurs[joueurActuel].score++;
    }

    document.getElementById("score1").textContent = joueurs[0].score;

    if (joueurs.length === 2) {
        document.getElementById("score2").textContent = joueurs[1].score;
    }

    const titreCorrection = document.getElementById("titre-correction");

    if (indexChoisi === -1) {
        titreCorrection.textContent =
            `Temps écoulé ! Réponse : ${question.choix[bonneReponse]}`;
    } else if (bonneReponseDonnee) {
        titreCorrection.textContent = "Bonne réponse ! +1 point";
    } else {
        titreCorrection.textContent =
            `Mauvaise réponse. La bonne réponse était : ${question.choix[bonneReponse]}`;
    }

    document.getElementById("explication").textContent = question.explication;
    document.getElementById("correction").classList.remove("cache");

    boutonSuivant.textContent =
        indexQuestion === totalQuestions - 1
            ? (joueurActuel === joueurs.length - 1
                ? "Voir les résultats →"
                : "Terminer le tour →")
            : "Question suivante →";

    boutonSuivant.classList.remove("cache");
}

boutonSuivant.addEventListener("click", () => {
    if (!reponseDonnee) return;

    if (indexQuestion === totalQuestions - 1) {
        if (joueurActuel < joueurs.length - 1) {
            joueurActuel++;
            indexQuestion = 0;
            afficherQuestion();
        } else {
            afficherResultats();
        }

        return;
    }

    indexQuestion++;

    if (joueurs.length === 2) {
        joueurActuel = joueurActuel === 0 ? 1 : 0;
    }

    afficherQuestion();
});

function formaterTemps(secondes) {
    const minutes = Math.floor(secondes / 60);
    const reste = secondes % 60;

    return `${String(minutes).padStart(2, "0")}:${String(reste).padStart(2, "0")}`;
}

function afficherResultats() {
    arreterChronometre();

    const scoreTotal = joueurs.reduce(
        (total, joueur) => total + joueur.score, 0
    );

    const totalPossible = joueurs.length * totalQuestions;
    const pourcentage = Math.round((scoreTotal / totalPossible) * 100);
    const dureeTotale = Math.floor((Date.now() - debutPartie) / 1000);

    document.getElementById("bonnes-reponses").textContent =
        `${scoreTotal} / ${totalPossible}`;

    document.getElementById("pourcentage").textContent = `${pourcentage} %`;
    document.getElementById("temps-final").textContent =
        formaterTemps(dureeTotale);

    const resume = document.getElementById("resume-scores");
    resume.replaceChildren();

    if (joueurs.length === 2) {
        const titre = document.createElement("h3");
        titre.textContent = "Résultats des joueurs";
        resume.appendChild(titre);

        joueurs.forEach((joueur) => {
            const ligne = document.createElement("div");
            ligne.className = "ligne-resultat";

            const nom = document.createElement("span");
            nom.textContent = joueur.nom;

            const score = document.createElement("strong");
            score.textContent = `${joueur.score} / ${totalQuestions}`;

            ligne.append(nom, score);
            resume.appendChild(ligne);
        });

        const titreResultat = document.getElementById("titre-resultat");
        const message = document.getElementById("message-resultat");

        if (joueurs[0].score > joueurs[1].score) {
            titreResultat.textContent = `${joueurs[0].nom} gagne !`;
            message.textContent = "Bravo ! Le joueur 1 remporte cette partie.";
        } else if (joueurs[1].score > joueurs[0].score) {
            titreResultat.textContent = `${joueurs[1].nom} gagne !`;
            message.textContent = "Bravo ! Le joueur 2 remporte cette partie.";
        } else {
            titreResultat.textContent = "Égalité !";
            message.textContent = "Les deux joueurs terminent avec le même score.";
        }

        document.getElementById("icone-resultat").textContent =
            joueurs[0].score === joueurs[1].score ? "🤝" : "🏆";
    } else {
        document.getElementById("titre-resultat").textContent =
            pourcentage >= 80 ? "Excellent travail !" :
            pourcentage >= 50 ? "Bien joué !" : "Continue à progresser !";

        document.getElementById("message-resultat").textContent =
            `Tu as obtenu ${joueurs[0].score} point(s) sur ${totalQuestions}.`;

        document.getElementById("icone-resultat").textContent =
            pourcentage >= 80 ? "🏆" : pourcentage >= 50 ? "👏" : "💪";
    }

    afficherEcran("resultats");
}

boutonQuitter.addEventListener("click", () => {
    const confirme = confirm("Quitter la partie en cours ? La progression sera perdue.");

    if (confirme) {
        arreterChronometre();
        afficherEcran("accueil");
    }
});

boutonRecommencer.addEventListener("click", () => {
    const confirme = confirm(
        "Recommencer la partie depuis le début ? Les scores actuels seront perdus."
    );

    if (confirme) {
        demarrerPartie();
    }
});

boutonRejouer.addEventListener("click", () => {
    demarrerPartie();
});

boutonRetourAccueil.addEventListener("click", () => {
    arreterChronometre();
    afficherEcran("accueil");
});
