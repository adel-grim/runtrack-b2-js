
function myIsInString(mainStr, subStr) {
    // Si la sous-chaîne est plus longue que la chaîne principale, elle ne peut pas y être
    if (subStr.length > mainStr.length) {
        return false;
    }

    // Parcourir la chaîne principale
    for (let i = 0; i <= mainStr.length - subStr.length; i++) {
        // Comparer chaque caractère de la sous-chaîne avec ceux de la chaîne principale
        let match = true;
        for (let j = 0; j < subStr.length; j++) {
            if (mainStr[i + j] !== subStr[j]) {
                match = false; // Si une lettre ne correspond pas, casser la boucle
                break;
            }
        }
        // Si on a trouvé une correspondance complète
        if (match) {
            return true;
        }
    }

    return false;
}

// Fonction checkSubstring appelée lors du clic sur le bouton
function checkSubstring() {
    const mainString = document.getElementById('mainString').value; // Récupérer la chaîne principale
    const subString = document.getElementById('subString').value;  // la secondaire

    // Appeler la fonction myIsInString pour vérifier si la sous-chaîne est présente
    const result = myIsInString(mainString, subString);

    // Afficher le résultat
    document.getElementById('result').textContent = result
        ? `La sous-chaîne "${subString}" est présente dans la chaîne.`
        : `La sous-chaîne "${subString}" n'est pas présente dans la chaîne.`;

    console.log(result);
}
