/**
 * User Comments Data
 * Extracted from docs/comments.md
 */

const commentsData = [
  {
    quote: "Honestly saved my trip.",
    author: "Malik",
    nationality: "🇺🇸 USA",
    countryName: "USA",
    avatar: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?w=150&h=150&fit=crop",
    fullText: "I went to Shanghai thinking I could figure things out myself, but the apps and payments were way more complicated than expected. PandaGo helped me set up Alipay properly and even booked a restaurant for me that you just can't find on the APP thing.\nThe moment-of-truth for me was when I had an issue with a driver trying to overcharge me. I messaged PandaGo and they stepped in immediately, translated, and resolved it. That alone made it worth it.",
    rating: 5
  },
  {
    quote: "Felt just like having a local friend.",
    author: "Danny",
    nationality: "🇬🇧 UK",
    countryName: "UK",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop",
    fullText: "I used PandaGo mainly for food and getting around. I don't speak Chinese, so menus were a struggle. I'd send photos and they'd explain everything and suggest dishes.\nThey also recommended places I would never have found on my own. Not touristy at all. It made the whole trip feel much more authentic.",
    rating: 5
  },
  {
    quote: "Indispensable pour voyager en Chine.",
    author: "Julien",
    nationality: "🇫🇷 France",
    countryName: "France",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop",
    fullText: "Je ne comprenais rien aux applications locales au début. PandaGo m'a aidé à configurer Alipay et WeChat Pay rapidement.\nIls ont aussi réservé des restaurants pour moi via des plateformes chinoises. Une fois, je me suis perdu dans le métro, et ils m'ont guidé en direct. Très rassurant.",
    rating: 5
  },
  {
    quote: "Service rapide et très humain.",
    author: "Camille",
    nationality: "🇫🇷 France",
    countryName: "France",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
    fullText: "Ce que j'ai aimé, c'est qu'on parle à de vraies personnes. J'ai utilisé le service pour commander de la nourriture et vérifier certains prix.\nIls m'ont évité plusieurs erreurs. Très utile si on ne parle pas chinois.",
    rating: 5
  },
  {
    quote: "Really helpful overall, just not always instant.",
    author: "Daniel",
    nationality: "🇺🇸 USA",
    countryName: "USA",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
    fullText: "Used PandaGo in Shanghai mainly for Alipay setup and getting around. The setup guide helped, but I still had to double-check a couple things myself. Once it was working, it made daily payments much easier.\nSupport was useful when they replied, just sometimes not immediate.",
    rating: 4
  },
  {
    quote: "Made the whole trip feel manageable.",
    author: "Harper Sinclair",
    nationality: "🇬🇧 UK",
    countryName: "UK",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop",
    fullText: "I relied on it more than expected, especially for food and transport. Menus were confusing, so I'd send screenshots and they'd break it down simply.\nNot always super fast, but consistently helpful.",
    rating: 5
  },
  {
    quote: "Lo que más me ayudó fue entender la comida, no el idioma.",
    author: "Sergio Llorente",
    nationality: "🇪🇸 Spain",
    countryName: "Spain",
    avatar: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=150&h=150&fit=crop",
    fullText: "Pensaba que el problema sería el transporte, pero al final lo más complicado fue pedir en restaurantes. Las apps de traducción no ayudaban mucho porque no explican el contexto de los platos.\nCon PandaGo podía enviar fotos o menús y me explicaban qué era cada cosa de forma sencilla. Incluso me recomendaron platos que no aparecían en la parte turística del menú.\nEso hizo que la experiencia de comer fuera mucho más interesante, no solo \"segura\".",
    rating: 5
  },
  {
    quote: "Pratique quand on ne veut pas trop réfléchir sur place.",
    author: "Léa Fontaine",
    nationality: "🇫🇷 France",
    countryName: "France",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop",
    fullText: "Je l'ai utilisé surtout dans des moments où je n'avais pas envie de perdre du temps avec les applis chinoises. Commander, demander des infos, ce genre de choses.\nCe n'est pas magique, mais ça évite pas mal de micro-problèmes du quotidien.",
    rating: 5
  }
];

/**
 * Get a random comment from the data
 * @returns {Object} A random comment object
 */
function getRandomComment() {
  return commentsData[Math.floor(Math.random() * commentsData.length)];
}

/**
 * Get all comments
 * @returns {Array} All comment objects
 */
function getAllComments() {
  return commentsData;
}
