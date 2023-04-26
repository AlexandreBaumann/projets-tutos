<!DOCTYPE html>
<html lang="en">
<head>

    <?php 
	$title = "Discover the greentech";
    	include 'head.php';
    ?>
    <title>Document</title>
</head>
<body>
    <header>
        <?php 
        include 'header.php';
        ?>
    </header>
    <main>
        <div id="contenu-principal">
            <section id="filtres"> 
                <button type="button">Startup</button>
                <button type="button">Grand groupe</button>
                <button type="button">Filiale</button>
                <button type="button">Rapports</button>
            </section>
            <section id="injection-articles">
   
            <?php 
            include 'boucle.php';
            boucle($articles)
            ?>
            </section>
        </div>
    </main>
    <footer>
        <?php 
        include 'footer.php';
        ?>

    </footer>
</body>
</html>