// Fonction myNearZero qui retourne l'entier le plus proche de zéro
function myNearZero(arr) {
    if (arr.length === 0) return null; 

    let closest = arr[0]; 

    for (let i = 1; i < arr.length; i++) {
        // Comparer la distance à zéro des éléments actuels et mettre à jour si plus proche
        if (Math.abs(arr[i]) < Math.abs(closest) || 
           (Math.abs(arr[i]) === Math.abs(closest) && arr[i] > closest)) {
            closest = arr[i];
        }
    }

    return closest; // Retourner le nombre le plus proche de zéro
}

// Fonction pour afficher le résultat
function displayNearZero() {
    
    const input = document.getElementById('inputArray').value;
    const inputArray = input.split(',').map(Number); // Convertir les valeurs en nombres

    
    const nearZero = myNearZero(inputArray);

    
    document.getElementById('result').textContent = `Entier le plus proche de zéro : ${nearZero}`;
    console.log(nearZero); 
}
