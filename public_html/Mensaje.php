<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'ruta/hacia/PHPMailer/src/Exception.php';
require 'ruta/hacia/PHPMailer/src/PHPMailer.php';
require 'ruta/hacia/PHPMailer/src/SMTP.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    // Configurar PHPMailer
    $mail = new PHPMailer(true);
    try {
        // Configuración del servidor SMTP
        $mail->isSMTP();
        $mail->Host = 'smtp.tudominio.com';
        $mail->SMTPAuth = true;
        $mail->Username = 'tu_correo@tudominio.com';
        $mail->Password = 'tu_contraseña';
        $mail->SMTPSecure = 'tls';
        $mail->Port = 587;

        // Configuración del remitente y destinatario
        $mail->setFrom('tu_correo@tudominio.com', 'Nombre del remitente');
        $mail->addAddress('controlbiker2024@gmail.com');

        // Contenido del correo electrónico
        $mail->isHTML(false);
        $mail->Subject = 'Nuevo mensaje del formulario de contacto';
        $mail->Body    = "Nombre: $name\nCorreo electrónico: $email\nMensaje: $message";

        // Enviar correo electrónico
        $mail->send();
        echo '¡El correo electrónico se envió con éxito!';
    } catch (Exception $e) {
        echo "Hubo un error al enviar el correo electrónico: {$mail->ErrorInfo}";
    }
} else {
    // Si no es una solicitud POST, redireccionar al formulario
    header("Location: formulario.html");
    exit;
}
?>

