<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $date = $_POST["date"];
    $shootType = $_POST["shootType"];
    $details = $_POST["details"];

    // Designated email address
    $to = "leahmailemedia@gmail.com";
    $subject = "New Booking Inquiry from $name";

    $message = "Name: $name\n";
    $message .= "Email: $email\n";
    $message .= "Desired Date: $date\n";
    $message .= "Type of Shoot: $shootType\n";
    $message .= "Additional Details:\n$details";

    $headers = "From: webmaster@example.com" . "\r\n" .
               "Reply-To: $email" . "\r\n" .
               "X-Mailer: PHP/" . phpversion();

    if (mail($to, $subject, $message, $headers)) {
        echo "Email sent successfully!";
    } else {
        echo "There was an error sending the email.";
    }
}
?>

