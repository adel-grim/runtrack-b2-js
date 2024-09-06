document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('form-add-student');
    const gradeSelect = document.getElementById('student-grade');
    const responseMessage = document.getElementById('response-message');

    // Remplir le select des promotions à partir de la base de données
    fetch('request.php?action=get_grades')
        .then(response => response.json())
        .then(grades => {
            // Vérifier si des promotions ont été récupérées
            if (grades.length > 0) {
                grades.forEach(grade => {
                    const option = document.createElement('option');
                    option.value = grade.id;
                    option.textContent = grade.name;
                    gradeSelect.appendChild(option);
                });
            } else {
                const option = document.createElement('option');
                option.textContent = "Aucune promotion disponible";
                gradeSelect.appendChild(option);
                gradeSelect.disabled = true; // Désactiver le select si pas de données
            }
        })
        .catch(error => {
            console.error('Erreur lors du chargement des promotions :', error);
        });

    // Gérer la soumission du formulaire
    form.addEventListener('submit', function(e) {
        e.preventDefault(); // Empêcher le rechargement de la page

        // Récupérer les valeurs des champs
        const email = document.getElementById('student-mail').value;
        const fullname = document.getElementById('student-fullname').value;
        const gender = document.getElementById('student-gender').value;
        const grade = document.getElementById('student-grade').value;
        const birthdate = document.getElementById('student-birthdate').value;

        // Envoyer les données via fetch
        fetch('request.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                action: 'add_student',
                email: email,
                fullname: fullname,
                gender: gender,
                grade: grade,
                birthdate: birthdate
            })
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                responseMessage.textContent = 'Étudiant ajouté avec succès !';
                form.reset(); // Réinitialiser le formulaire
            } else {
                responseMessage.textContent = 'Erreur lors de l\'ajout de l\'étudiant : ' + data.message;
            }
        })
        .catch(error => {
            responseMessage.textContent = 'Erreur réseau, réessayez plus tard.';
            console.error('Erreur lors de l\'envoi des données :', error);
        });
    });
});
