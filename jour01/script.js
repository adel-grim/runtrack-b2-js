// Fonction myUpperCase qui convertit une chaîne en majuscule sans utiliser toUpperCase
function myUpperCase(str) {
    let upperStr = ''; // Variable qui contiendra la nouvelle chaîne en majuscule

    for (let i = 0; i < str.length; i++) {
        let charCode = str[i].charCodeAt(0); // Récupérer le code ASCII du caractère

        // Si le caractère est une lettre minuscule (entre 'a' et 'z')
        if (charCode >= 97 && charCode <= 122) {
            // Convertir en majuscule en soustrayant 32 (différence entre minuscule et majuscule dans ASCII)
            upperStr += String.fromCharCode(charCode - 32);
        } else {
            // Si ce n'est pas une lettre minuscule, on le garde tel quel
            upperStr += str[i];
        }
    }

    return upperStr; // Retourner la chaîne convertie
}

// Fonction convertText appelée lorsque le bouton est cliqué
function convertText() {
    const inputText = document.getElementById('inputText').value; // Récupérer la valeur du champ texte
    const result = myUpperCase(inputText); // Passer le texte en majuscule
    console.log(result); // Afficher le résultat dans la console
    document.getElementById('result').textContent = result; // Afficher le résultat à l'écran
}
