// Fonction qui affiche le texte de l'input dans le paragraphe
function myDisplayText() {
    const inputText = document.getElementById('input-text').value;
    const displayElement = document.getElementById('text-displayer');
    displayElement.textContent = inputText;
}

// Fonction  gras
function myTurnBold() {
    const displayElement = document.getElementById('text-displayer');
    displayElement.style.fontWeight = 'bold'; // Applique le style gras
}

// Fonctionqui met le texte en italique
function myTurnItalic() {
    const displayElement = document.getElementById('text-displayer');
    displayElement.style.fontStyle = 'italic'; // Applique le style italique
}

// Fonction qui enlève les styles 
function myClearText() {
    const displayElement = document.getElementById('text-displayer');
    displayElement.style.fontWeight = 'normal'; // Enlève le style gras
    displayElement.style.fontStyle = 'normal';  // Enlève le style italique
}

// Écouter les changements de l'input pour mettre à jour le paragraphe
document.getElementById('input-text').addEventListener('input', myDisplayText);

// Écouter les clics sur les boutons pour appliquer ou enlever les styles
document.getElementById('turn-text-bold').addEventListener('click', myTurnBold);
document.getElementById('turn-text-italic').addEventListener('click', myTurnItalic);
document.getElementById('clear-text').addEventListener('click', myClearText);
