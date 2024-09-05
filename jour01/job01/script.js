
function myUpperCase(str) {
    let upperStr = ''; 

    for (let i = 0; i < str.length; i++) {
        let charCode = str[i].charCodeAt(0); 

        // Si le caractère est une lettre minuscule (entre 'a' et 'z')
        if (charCode >= 97 && charCode <= 122) {
           
            upperStr += String.fromCharCode(charCode - 32);
        } else {
            // Si ce n'est pas une lettre minuscule, on le garde tel quel
            upperStr += str[i];
        }
    }

    return upperStr; // Retourner la chaîne convertie
}

// Fonction appelée lorsque le bouton est cliqué
function convertText() {
    const inputText = document.getElementById('inputText').value; // Récupérer la valeur du champ texte
    const result = myUpperCase(inputText); // Passer le texte en maj
    console.log(result); // Afficher le résultat dans la console
    document.getElementById('result').textContent = result; // resultat
}
