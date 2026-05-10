<?php
// Autoriser l'accès depuis n'importe quel domaine
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

// Gérer la requête pré-vol (OPTIONS) CORS
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

// Paramètres du serveur SMTP
ini_set('SMTP', 'smtp.hostinger.com');  // Assure-toi que c'est bien le serveur SMTP de Hostinger
ini_set('smtp_port', 587);

// Récupération des données envoyées par React
$postData = file_get_contents('php://input');
$request = json_decode($postData, true);

// Si le JSON reçu n'est pas valide
if ($request === null) {
    echo json_encode(['status' => 'error', 'message' => 'Données invalides reçues.']);
    exit;
}

$name = $request['firstName'] . ' ' . $request['lastName']; // Utilise les champs firstName et lastName
$email = $request['email'];
$subject = $request['profession']; // Tu peux remplacer ça par un sujet spécifique si besoin
$message = $request['message'];

// Adresse email du destinataire
$to = "bbrassart@nexabridge.fr";
$subject = "Nouveau message depuis votre formulaire de contact : " . $subject;

// Contenu de l'email
$body = "Nom: $name\nEmail: $email\n\nMessage:\n$message";

// En-têtes de l'email
$headers = "From: contact@benwebdev.fr\r\n";
$headers .= "Reply-To: $email\r\n";

// Envoi de l'email
if (mail($to, $subject, $body, $headers)) {
    // Envoi réussi
    echo json_encode(['status' => 'success', 'message' => 'Email envoyé avec succès.']);
} else {
    // Envoi échoué
    echo json_encode(['status' => 'error', 'message' => 'Échec de l\'envoi de l\'email.']);
}
?>