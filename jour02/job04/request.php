<?php
// Connexion à la base de données
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "lp_official";

try {
    $conn = new PDO("mysql:host=$servername;dbname=$dbname;charset=utf8mb4", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch(PDOException $e) {
    echo json_encode(['success' => false, 'message' => "Erreur de connexion à la base de données"]);
    exit;
}

// Vérifier l'action demandée
$action = $_GET['action'] ?? null;

if ($action === 'get_grades') {
    // Récupérer toutes les promotions
    $stmt = $conn->query("SELECT id, name FROM grade");
    $grades = $stmt->fetchAll(PDO::FETCH_ASSOC);
    // Retourner les résultats sous forme JSON
    echo json_encode($grades);
} elseif ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Récupérer les données envoyées pour ajouter un étudiant
    $data = json_decode(file_get_contents('php://input'), true);

    if ($data['action'] === 'add_student') {
        $email = $data['email'];
        $fullname = $data['fullname'];
        $gender = $data['gender'];
        $grade = $data['grade'];
        $birthdate = $data['birthdate'];

        // Validation des données
        if (filter_var($email, FILTER_VALIDATE_EMAIL) && !empty($fullname) && !empty($birthdate)) {
            // Insertion dans la base de données
            $stmt = $conn->prepare("INSERT INTO student (email, fullname, gender, grade_id, birthdate) VALUES (?, ?, ?, ?, ?)");
            if ($stmt->execute([$email, $fullname, $gender, $grade, $birthdate])) {
                echo json_encode(['success' => true]);
            } else {
                echo json_encode(['success' => false, 'message' => "Erreur lors de l'insertion"]);
            }
        } else {
            echo json_encode(['success' => false, 'message' => "Données invalides"]);
        }
    }
}
