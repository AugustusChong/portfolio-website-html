<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

require '../../vendor/autoload.php';

$developmentMode = true;
$mail = new PHPMailer(true);

$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];

try {
    $mail -> SMTPDebug = SMTP::DEBUG_SERVER;
    $mail -> isSMTP();
    $mail -> Host = 'smtp.gmail.com';
    $mail -> SMTPAuth = true;
    $mail -> Username = 'ad.honorem.confido@gmail.com';
    $mail -> Password = 'pwthgsfkoellmyai';
    $mail -> SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail -> Port = 587;

    $mail -> setFrom($email, $name);
    $mail -> addAddress('augustus.chong.dev@gmail.com');
    $mail -> addReplyTo($email, $name);

    $mail -> isHTML(true);
    $mail -> Subject = 'New Message From ' . $name . ' (' . $email . ')';
    $mail -> Body = $message;

    $mail -> send();
    header('Location: ./sent.html');
} catch (Exception $e) {
    echo "Email could not be sent. Mailer Error: {$mail->ErrorInfo}";
}

?>