// Fonction qui change la couleur de fond en fonction de la taille de l'écran
function myChangeBackgroundColor() {
    const screenWidth = window.innerWidth; // Obtenir la largeur de l'écran

    if (screenWidth >= 1337) {
        document.documentElement.style.backgroundColor = '#ffb703'; // Fond jaune-orangé
    } else if (screenWidth >= 505 && screenWidth <= 1336) {
        document.documentElement.style.backgroundColor = '#d90429'; // Fond rouge
    } else {
        document.documentElement.style.backgroundColor = '#003049'; // Fond bleu foncé
    }
}

// Exécuter la fonction au chargement de la page et à chaque redimensionnement de la fenêtre
window.addEventListener('load', myChangeBackgroundColor);
window.addEventListener('resize', myChangeBackgroundColor);
