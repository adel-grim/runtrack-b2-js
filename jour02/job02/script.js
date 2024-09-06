// compteur à 0
let count = 0;

// Fonction qui incrémente le compteur
function myAddCount() {
    count++; // Incrémenter
    const displayElement = document.getElementById('count-displayer');
    displayElement.textContent = `Compteur : ${count}`; 
}

// bouton evenement au clic
document.getElementById('add-count-btn').addEventListener('click', myAddCount);
