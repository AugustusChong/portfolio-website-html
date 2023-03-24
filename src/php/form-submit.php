<?php

if($_SERVER['REQUEST_METHOD'] == 'POST'){
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    $errors = array();
    if(empty($name)){
        $errors[] = 'Name is required';
    }
    if(empty($email)){
        $errors[] = 'Email is required';
    }
    if(empty($message)){
        $errors[] = 'Message is required';
    }

    if(empty($errors)){
        $to = 'augustus.chong.dev@gmail.com';
        $subject = 'New message from portfolio website';
        $body = "Name: $name\n\nEmail: $email\n\nMessage:\n$message";
        $headers = "From: $email\r\nReply-To: $email\r\n";

        if(mail($to, $subject, $body, $headers)){
            echo '<p>Thank you for contacting us!</p>';
        }else{
            echo '<p>Sorry, there was an error sending your message. Please try again later.</p>';
        }
    } else {
        echo '<ul>';
        foreach ($errors as $error){
            echo "<li>$error</li>";
        }
        echo '</ul>';
    }
}

?>