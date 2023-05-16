<?php
  $to = "leahmailemedia@gmail.com";
  $subject = "New message from contact form";
  $name = $_POST["name"];
  $email = $_POST["email"];
  $message = $_POST["message"];
  $headers = "From: $name <$email>";
  if (mail($to, $subject, $message, $headers)) {
    echo "Email sent successfully!";
  } else {
    echo "Error sending email.";
  }
?>
