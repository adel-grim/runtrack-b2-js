// Fonction qui vérifie si un nombre est premier
function isPrime(num) {
    if (num <= 1) {
        return false; // Les nombres <= 1 ne sont pas premiers
    }
    // Boucle pour vérifier si le nombre est divisible par un autre nombre
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false; // Si le nombre est divisible par i, ce n'est pas un nombre premier
        }
    }
    return true; // Si aucune division n'est trouvée, c'est un nombre premier
}

// Fonction myPrimeList qui retourne la liste des nombres premiers jusqu'à un nombre donné
function myPrimeList(limit) {
    const primes = []; // Tableau pour stocker les nombres premiers

    // Boucle pour parcourir tous les nombres jusqu'à la limite
    for (let i = 2; i <= limit; i++) {
        if (isPrime(i)) {
            primes.push(i); // Ajouter le nombre au tableau s'il est premier
        }
    }

    return primes; // Retourner la liste des nombres premiers
}

// Fonction pour afficher la liste des nombres premiers
function displayPrimeList() {
    const limit = parseInt(document.getElementById('limit').value); 
    const primes = myPrimeList(limit); 

   
    document.getElementById('result').textContent = `Nombres premiers jusqu'à ${limit} : ${primes.join(', ')}`;
    console.log(primes); 
}
