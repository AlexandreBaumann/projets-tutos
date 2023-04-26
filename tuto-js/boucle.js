function raccourcit(text, maxLength) { // Définit la fonction shortenText qui prend deux arguments: text, qui est la chaîne de caractères à raccourcir, et maxLength, qui est la longueur maximale souhaitée pour le texte raccourci.
    let shortenedText = text.slice(0, maxLength); // Crée une nouvelle variable shortenedText pour stocker le texte raccourci. Utilise la méthode slice() pour extraire une partie du texte d'origine, commençant à l'index 0 et allant jusqu'à l'index maxLength.
    if (text.length > maxLength) { // Vérifie si la longueur du texte d'origine est supérieure à la valeur de maxLength.
        shortenedText += '...'; // ajoute trois petits points si la condition est remplie
    }
    return shortenedText;
}

function creeCarte(item) {
    const shortTitle = raccourcit(item.titre, 20); // applique la fonction shortenText() pour une longueur de 20
    const shortExcerpt = raccourcit(item.extrait, 100); // applique la fonction shortenText() pour une longueur de 1000

    return `
        <div class="article">
            <a href="${item.url}">
                <img src="${item.image}" alt="${shortTitle}">
            </a>
            <div>
                <h3><a href="${item.url}">${shortTitle}</a></h3>
                <p>${shortExcerpt}</p>
            </div>
        </div>
    `; // insère la "carte" présentant l'article de blog
    // item.url et item.image renvoient aux propriétés image et url de l'objet entre en paramètre (qui sera le tableau Articles).
}

  function boucleArticles(data, categorieFiltre = null) { // Définit la fonction boucleArticles qui prend deux arguments : data et categorieFiltre. data représente le tableau d'articles à afficher, tandis que categorieFiltre est un paramètre facultatif qui, lorsqu'il est défini, indique la catégorie d'articles à afficher. Par défaut, categorieFiltre est défini sur null, ce qui signifie qu'aucun filtre n'est appliqué.
    const blog = document.getElementById("injection-articles"); //récupère l'élément HTML avec l'ID "injection-articles" et le stocke dans la variable blog.
    blog.innerHTML = ""; // il faut déclarer la variable avant de l'utiliser pour forEach
  
    data.forEach((element) => {
      if (categorieFiltre === null || element.categorie === categorieFiltre) { // si categorieFiltre est null (c'est-à-dire si aucun filtre n'est appliqué) ou si la catégorie de l'élément actuel correspond à la catégorie du filtre. 
        blog.innerHTML += creeCarte(element);
      }
    });
  }// génère une carte pour chaque élément de la variable entrée en paramètres (= articles et ayant la catégorie souhaitée, les affichant tous par défaut)

const articles = [
    {
        image: 'seabased.png',
        titre: 'Seabased: énergie houlomotrice',
        extrait: 'Seabased est une entreprise suédoise fondée en 2001 commercialisant des fermes d’énergie houlomotrices.',
        url: 'seabased.html',
        categorie: 'EnR'
    },
    {
        image: 'waveroller.jpg',
        titre: 'AW Energy: énergie houlomotrice',
        extrait: 'L’énergie houlomotrice est une forme d’énergie renouvelable qui convertit l’énergie cinétique des vagues océaniques en électricité. Des dispositifs tels que les absorbeurs ponctuels, les colonnes oscillantes et les clapots capturent le mouvement des vagues et le transforment en énergie mécanique. Des générateurs convertissent ensuite cette énergie mécanique en électricité. L’énergie houlomotrice offre une meilleure prévisibilité et',
        url: 'waveroller.html',
        categorie: 'EnR',
    },
    {
        image: 'CFS.jpg',
        titre: 'CommonWealth Fusion Systems (CFS)',
        extrait: 'CommonWealth Fusion Systems (CFS) est l\'entreprise développant la fusion nucléaire la plus financée: 1.8 milliards d\'euros. La technologie étudiée est celle du tokamak.',
        url: 'CFS.html',
        categorie: 'Nucléaire',
    },
    {
        image: 'CARBON.png',
        titre: 'Carbon Solar: des cellules photovoltaïques françaises',
        extrait: 'Carbon Solar ou CARBON est une société industrielle française créée en 2022 proposant de produire des cellules photovoltaïques ainsi que leurs composants (lingots et wafers) et leur assemblages. Elle ambitionne de construire d’ici 2025 une usine de production représentant un investissement de 1,5 milliards d’euros.',
        url: 'CarbonSolar.html',
        categorie: 'EnR',
    },
    {
        image: 'Solid-Power.jpg',
        titre: 'Solid power: batteries à électrolyte solide',
        extrait: 'Solid Power est une startup du Colorado développant des batteries à électrolytes solides fondée en 2011. Leurs batteries à lithium-ion seraient plus sûres, fiables à hautes températures, auraient une meilleure puissance et coûteraient moins cher que leurs équivalents sans électrolyte solide.',
        url: 'solidpower.html',
        categorie: '',
    },
    {
        image: 'Sunfire.png',
        titre: 'Sunfire: electrolyseurs industriels',
        extrait: 'Sunfire est une entreprise allemande développant des électrolyseurs industriels alcalins ou à oxyde solide produisant de l’hydrogène pur ou du gaz de synthèse (syngaz). Elle a levé plus de 200 millions d’euros.',
        url: 'sunfire.html',
        categorie: 'Hydrogène',
    },
];

boucleArticles(articles)

// ------------------------ Filtres ------------------------//
// ------------------------ Filtres ------------------------//
// ------------------------ Filtres ------------------------//
// ------------------------ Filtres ------------------------//


function setActiveFilter(button) {
    buttons.forEach((btn) => {
      btn.classList.remove('active-filter'); // Supprime la classe de tous les boutons

    });
    button.classList.add('active-filter');     // Ajoute la classe au bouton spécifié

  }


/* 
const buttons = document.querySelectorAll('#filtres button');
buttons[0].addEventListener("click", () => boucleArticles(articles));
buttons[1].addEventListener("click", () => boucleArticles(articles, "Hydrogène"));
buttons[2].addEventListener("click", () => boucleArticles(articles, "Nucléaire"));
buttons[3].addEventListener("click", () => boucleArticles(articles, "EnR"));
*/

  
const buttons = document.querySelectorAll('#filtres button');
buttons[0].addEventListener("click", () => {
  boucleArticles(articles);
  setActiveFilter(buttons[0]);
});
buttons[1].addEventListener("click", () => {
  boucleArticles(articles, "Hydrogène");
  setActiveFilter(buttons[1]);
});
buttons[2].addEventListener("click", () => {
  boucleArticles(articles, "Nucléaire");
  setActiveFilter(buttons[2]);
});
buttons[3].addEventListener("click", () => {
  boucleArticles(articles, "EnR");
  setActiveFilter(buttons[3]);
});
/*
const buttons = document.querySelectorAll('#filtres button');

buttons.forEach((button, index) => {
    button.addEventListener("click", () => {
      switch (index) {
        case 0:
          // Action pour le bouton "Tous"
          boucleArticles(articles); // Affiche tous les articles
          break;
        case 1:
          // Action pour le bouton "Hydrogène"
          boucleArticles(articles, "Hydrogène"); // Affiche les articles de la catégorie "Hydrogène"
          break;
        case 2:
          // Action pour le bouton "Nucléaire"
          boucleArticles(articles, "Nucléaire"); // Affiche les articles de la catégorie "Nucléaire"
          break;
        case 3:
          // Action pour le bouton "EnR"
          boucleArticles(articles, "EnR"); // Affiche les articles de la catégorie "EnR"
          break;
        default:
          break;
      }
    });
  });
  */