
<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Collect form data
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    if (empty($name) || empty($email) || empty($message)) {
        echo "Please fill in all fields.";
    } else {
        echo "Name: $name<br>";
        echo "Email: $email<br>";
        echo "Message: $message<br>";
        echo "<p style='color: green;'>Message sent successfully!</p>"; // Success message
    }
}
?>
