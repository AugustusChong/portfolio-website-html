<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

require '../../vendor/autoload.php';
include ("../../config/config.php");

$developmentMode = true;
$mail = new PHPMailer(true);

$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];

try {
    $mail -> SMTPDebug = SMTP::DEBUG_SERVER;
    $mail -> isSMTP();
    $mail -> Host = 'augustuschong.com';
    $mail -> SMTPAuth = true;
    $mail -> Username = $Username;
    $mail -> Password = $Password;
    $mail -> SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail -> Port = 587;

    $mail -> setFrom('contact@augustuschong.com', $name);
    $mail -> addAddress($PersonalEmail);
    $mail -> addReplyTo($email, $name);

    $mail -> isHTML(false);
    $mail -> Subject = 'New Message from ' . $name . ' (' . $email . ')';
    $mail -> Body = <<<EOT
    Email: {$email}
    Name: {$name}
    Message: {$message}
    EOT;;

    $mail -> send();
    header('Location: ./sent.html');
} catch (Exception $e) {
    echo "Email could not be sent. Mailer Error: {$mail->ErrorInfo}";
}

?>