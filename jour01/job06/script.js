// Fonction mySquareArray qui retourne un tableau des carrés des nombres
function mySquareArray(arr) {
    const squaredArray = []; // Tableau pour stocker les résultats
    for (let i = 0; i < arr.length; i++) {
        squaredArray.push(arr[i] * arr[i]); // Ajouter le carré de l'élément dans le tableau
    }
    return squaredArray; // Retourner le nouveau tableau
}

// Fonction pour afficher le tableau des carrés à partir de la saisie utilisateur
function displaySquareArray() {
    // Récupérer la valeur entrée par l'utilisateur et la convertir en tableau
    const input = document.getElementById('inputArray').value;
    const inputArray = input.split(',').map(Number); // Convertir les valeurs en nombres

    // Appeler la fonction mySquareArray et obtenir le résultat
    const squaredArray = mySquareArray(inputArray);

    // Afficher le résultat dans le paragraphe
    document.getElementById('result').textContent = `Résultat: ${squaredArray.join(', ')}`;
    console.log(squaredArray); // Afficher dans la console pour vérification
}
