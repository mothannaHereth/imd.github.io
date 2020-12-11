<?php
 

if (isset($_POST['submit'])) { 
    $name = $_POST['name']; 
    $email = $_POST['email']; 
    $subject = $_POST['subject']; 
    $message = $_POST['message'];
    

$mailTo = "mothannaaz@yahoo.com";
$headers = "From my portfolio : $subject";
$emailBody = "$message";

mail($mailTo, $headers, $subject, $emailBody);

header("Location: index.html?mailsend");

}