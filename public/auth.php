<?php
$servername = "localhost";
$username = "root";
$password = "12345678";
$database = "sistemaregistro";

$conn = new mysqli($servername, $username, $password, $database);

if ($conn->connect_error) {
    die("La conexión a la base de datos ha fallado: " . $conn->connect_error);
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $user = mysqli_real_escape_string($conn, $_POST['username']); // Evitar inyección SQL
    $pass = mysqli_real_escape_string($conn, $_POST['password']);

    // Utilizar consulta preparada
    $sql = "SELECT * FROM usuarios WHERE Id_Usuario=? AND Clave=?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("ss", $user, $pass);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($result->num_rows > 0) {
        echo "success"; // Autenticación exitosa
    } else {
        echo "error"; // Autenticación fallida
    }

    $stmt->close();
}

$conn->close();
?>