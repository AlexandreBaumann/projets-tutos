
document.addEventListener('DOMContentLoaded', function() {
    const head = document.querySelector('head');
    const header = document.querySelector('header');
    const footer = document.querySelector('footer');

    head.innerHTML += `
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <LINK href="style.css" rel="stylesheet" type="text/css">
        <LINK href="normalize.css" rel="stylesheet" type="text/css">
        <title> ${titre} </title>
    `;

    header.innerHTML = `
        <div id="menu-secondaire">
            <nav>
                <ul>
                    <li>Hydrogène</li>
                    <li>Agriculture</li>
                    <li>Nucléaire</li>
                    <li>EnR</li>
                </ul>
            </nav>
        </div>
        <div id="barre-principale">
            <nav>
                <a href="index.html"><img src="Logo-greentech1.jpg"></a>
                <ul id="menu-primaire">
                    <li><a href="index.html">Blog</a></li>
                    <li>Thématiques</li>
                    <li><a href="contact.html">Contact</a></li>
                </ul>
            </nav>
        </div>
    `;

    footer.innerHTML = `
        <nav id="menu-footer">
            <ul>
                <li>Contact</li>
                <li>Mentions légales</li>
                <li>Politique de confidentialité</li>
            </ul>
        </nav>
    `;
    const contenuDiv = document.getElementById('contenu-articles');
    const h1Element = document.createElement('h1');

    h1Element.textContent = titre;
    contenuDiv.insertBefore(h1Element, contenuDiv.firstChild);
 
});
