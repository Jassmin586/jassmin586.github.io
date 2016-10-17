<?php
if($_POST["submit"]) {
$addressee = "joannarz52@gmail.com";
$name = $_POST ["yourName"];
$email = $_POST["yourEmail"];
$content = $_POST["yourPhone"];

$mailBody="Name: $name\nEmail: $email\n\n$content";
mail($addressee, $mailBody, "From: $name <$email>");
$thankYou="<p>Dziękuję za wysłanie wiadomości</p>";
}
?>
