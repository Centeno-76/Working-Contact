<?php
//Lets get all form values

$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$website = $_POST['website'];
$message = $_POST['message'];

if(!empty($email) && !empty($message)){
    if(filter_var($email, FILTER_VALIDATE_EMAIL)){
        $receiver = "mateuscenteno76@gmail.com";
        $subject = "From: $name <$email>";
        $body = "Name: $name\nEmail: $email\nPhone: $phone\nWebsite: $website\n\nMessage: $message\n\nRegards,\n$name";
        $sender = "From: $email"; // sender email
        if(mail($receiver, $subject, $body, $sender)){
            echo "Sua mensagem foi enviada";
        }else {
            echo "Deculpe, falha ao enviar a mensagem";
        }
    }else{
        echo "Coloque um e-mail válido!";
    }
} else {
    echo "E-mail e mensagem obrigatórios";
}