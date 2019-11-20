<?php

// if (isset($_POST['submit'])){
//   $name = $_POST['name'];
//   $subject = $_POST['subject'];
//   $mailFrom = $_POST['mail'];
//   $message = $_POST['message'];
//
//   $mailTo = "info@bamboocreativestudio.com";
//   $headers = "From: ".$mailFrom;
//   $txt = "You have received an email from ".$name.".\n\n".$message;
//
//   mail($mailTo, $subject, $txt, $headers);
//
//   header("Location: contact.html");
// }

$name = $_POST['name'];
$mailFrom = $_POST['email'];
$subject= $_POST['subject']
$message = $_POST['message'];


$email_from = 'info@bamboocreativestudio.com';

$email_subject = "New Form Submission";

$email_body = "User Name: $name.\n".
"User Subject: $subject.\n".
"User Email: $mailFrom.\n".
"User Message: $message.\n";


$to = "info@bamboocreativestudio.com";

$headers = "From: $email_from \r\n";

$headers .= "Reply To: $visitor_email \r\n";

mail($to,$email_subject,$email_body,$headers);

header("Location: contact.html");

?>
