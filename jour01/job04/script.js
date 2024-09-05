// Fonction myArraySum qui calcule la somme des éléments dans un tableau
function myArraySum(arr) {
    let sum = 0; // Initialiser la somme à 0

    // Parcourir chaque élément du tableau et ajouter à la somme
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]; // Ajouter chaque élément à la somme
    }

    return sum; // Retourner la somme totale
}

// Fonction appelée lors du clic sur le bouton pour calculer la somme
function calculateSum() {
    const input = document.getElementById('arrayInput').value; // Récupérer la chaîne de caractères
    const stringArray = input.split(','); // Diviser la chaîne en un tableau de chaînes
    const numberArray = [];

    // Convertir chaque élément en nombre
    for (let i = 0; i < stringArray.length; i++) {
        // Transformer la chaîne en nombre et l'ajouter au tableau
        numberArray.push(parseInt(stringArray[i]));
    }

    // Appeler la fonction myArraySum pour calculer la somme
    const result = myArraySum(numberArray);

    // Afficher le résultat
    document.getElementById('result').textContent = `La somme des éléments est : ${result}`;
    console.log(result); // Afficher le résultat dans la console
}

