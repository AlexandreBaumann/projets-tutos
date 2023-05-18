$(document).ready(function() {
    $('.gallery').mauGallery({
        columns: {
            xs: 1,
            sm: 2,
            md: 3,
            lg: 3,
            xl: 3
        },
        lightBox: true,
        lightboxId: 'myAwesomeLightbox',
        showTags: true,
        tagsPosition: 'top'
    });
});

// vérifier que le fond change quand on change de filtre ; vérifier que le script est bien appelé et que le jQuery est bien appelé (a priori oui)
// vérifier s'il ne manque pas un paramètre ou un éléments caractérisant chaque image