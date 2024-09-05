// Fonction myCountChar qui compte le nombre d'occurrences d'un caractère dans une chaîne
function myCountChar(str, char) {
    let count = 0; // Compteur d'occurrences

    // Parcourir chaque caractère de la chaîne
    for (let i = 0; i < str.length; i++) {
        if (str[i] === char) {
            count++; // Incrémenter le compteur si le caractère correspond
        }
    }

    return count; // Retourner le nombre d'occurrences
}

// Fonction appelée lors du clic sur le bouton pour compter les occurrences
function countOccurrences() {
    const inputText = document.getElementById('inputText').value; 
    const charToCount = document.getElementById('charToCount').value; 

    
    if (charToCount.length !== 1) {
        document.getElementById('result').textContent = "Veuillez entrer un seul caractère.";
        return;
    }

    // Appeler la fonction myCountChar et afficher le résultat
    const result = myCountChar(inputText, charToCount);
    console.log(result); 
    document.getElementById('result').textContent = `Le caractère "${charToCount}" apparaît ${result} fois.`;
}
