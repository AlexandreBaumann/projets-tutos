<?php
function boucle($items) {
 $longMaxTitre = 20; // Longueur maximale du titre
 $longMaxExtrait = 100; // Longueur maximale de l'extrait

 foreach ($items as $item) {
  $titreCourt = mb_substr($item['titre'], 0, $longMaxTitre);
  if (mb_strlen($item['titre']) > $longMaxTitre) {
   $titreCourt .= '...';
  }
  
  $extraitCourt = mb_substr($item['extrait'], 0, $longMaxExtrait);
  if (mb_strlen($item['extrait']) > $longMaxExtrait) {
   $extraitCourt .= '...';
  }

  echo '
  <div class="article">
   <a href="' . $item['url'] . '">
    <img src="' . $item['image'] . '" alt="' . $titreCourt . '">
   </a>
   <div>
    <h3><a href="' . $item['url'] . '">' . $titreCourt . '</a></h3>
    <p>' . $extraitCourt . '</p>
   </div>
  </div> 
  ';
 }
}



$articles = [
 [
  'image' => 'seabased.png',
  'titre' => 'Seabased: énergie houlomotrice',
  'extrait' => 'Seabased est une entreprise suédoise fondée en 2001 commercialisant des fermes d’énergie houlomotrices.',
  'url' => 'seabased.php',
 ],  
 [
  'image' => 'waveroller.jpg',
  'titre' => 'AW Energy: énergie houlomotrice',
  'extrait' => 'L’énergie houlomotrice est une forme d’énergie renouvelable qui convertit l’énergie cinétique des vagues océaniques en électricité. Des dispositifs tels que les absorbeurs ponctuels, les colonnes oscillantes et les clapots capturent le mouvement des vagues et le transforment en énergie mécanique. Des générateurs convertissent ensuite cette énergie mécanique en électricité. L’énergie houlomotrice offre une meilleure prévisibilité et une moindre intermittence par rapport à d’autres sources d’énergie renouvelable.',
  'url' => 'waveroller.php',
 ],  
 [
  'image' => 'CFS.jpg',
  'titre' => 'CommonWealth Fusion Systems (CFS)',
  'extrait' => 'CommonWealth Fusion Systems (CFS) est l\'entreprise développant la fusion nucléaire la plus financée: 1.8 milliards d\'euros. La technologie étudiée est celle du tokamak.',
  'url' => 'CFS.php',
 ],  
 [
  'image' => 'CARBON.png',
  'titre' => 'Carbon Solar: des cellules photovoltaïques françaises',
  'extrait' => 'Carbon Solar ou CARBON est une société industrielle française créée en 2022 proposant de produire des cellules photovoltaïques ainsi que leurs composants (lingots et wafers) et leur assemblages. Elle ambitionne de construire d’ici 2025 une usine de production représentant un investissement de 1,5 milliards d’euros.',
  'url' => 'CarbonSolar.php',
 ], 
 [
  'image' => 'Solid-Power.jpg',
  'titre' => 'Solid power: batteries à électrolyte solide',
  'extrait' => 'Solid Power est une startup du Colorado développant des batteries à électrolytes solides fondée en 2011. Leurs batteries à lithium-ion seraient plus sûres, fiables à hautes températures, auraient une meilleure puissance et coûteraient moins cher que leurs équivalents sans électrolyte solide.',
  'url' => 'solidpower.php',
 ], 
 [
  'image' => 'Sunfire.png',
  'titre' => 'Sunfire: electrolyseurs industriels',
  'extrait' => 'Sunfire est une entreprise allemande développant des électrolyseurs industriels alcalins ou à oxyde solide produisant de l’hydrogène pur ou du gaz de synthèse (syngaz). Elle a levé plus de 200 millions d’euros.',
  'url' => 'sunfire.php',
 ], 
]

?>