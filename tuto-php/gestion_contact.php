<?php
// Récupérer les données du formulaire
$prenom = $_POST['prenom'];
$nom = $_POST['nom'];
$email = $_POST['email'];
$message = $_POST['message'];
// Stocker les données dans un tableau associatif
$contact_info = [
    'prenom' => $prenom,
    'nom' => $nom,
    'email' => $email,
    'message' => $message,
];
// Afficher les données pour vérification (à des fins de débogage)
echo '<pre>';
print_r($contact_info);
echo '</pre>';
?>
 