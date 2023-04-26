<!DOCTYPE html>
<html lang="fr">
<head>

    <?php 
    $title = "Contact";
    include 'head.php';
    ?>

</head>
<body>
    <header>
        <?php 
        include 'header.php';
        ?>
    </header>
    <main>
        <div id ="contenu-articles">
            <h1> <?php echo $title ?> </h1>
            <form action="gestion_contact.php" method="post" id="formulaire">
                <div class="champ" >
                    <label for="prenom" >Prénom</label>
                    <input type="prenom" id="prenom" name="prenom">
                </div>
                <div class="champ" >
                    <label for="nom" >Nom</label>
                    <input type="nom" id="nom" name="nom">
                </div>
                <div class="champ">
                    <label for="email">Email</label>
                    <input type="email" id="email" name="email" placeholder="you@example.com" >
                </div>
                <textarea name="message" placeholder="Votre message" ></textarea>
                <button type="submit" value="Connexion" id="login">Envoyer</button>
                <p><a href="">Mot de passe oublié</a></p>
            </form>
        </div>
    </main>
    <footer>
        <?php 
        include 'footer.php';
        ?>

    </footer>
</body>
</html>