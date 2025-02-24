
<?php
// Include PHPMailer files
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';
require 'PHPMailer/src/Exception.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// Create an instance of PHPMailer
$mail = new PHPMailer(true);


if (isset($_POST['email'])) {
    $email = $_POST['email'];
    $message = $_POST['message'];
    // echo "kajbsk";
     echo sendMail($email, $message ,$mail);
}

 function sendMail($email, $message , $mail){
    
    // ec?ho "kajbsk";

    try {
        // SMTP Configuration
        $mail->isSMTP();
        $mail->Host = 'smtp.gmail.com'; // Change this to your mail server
        $mail->SMTPAuth = true;
        $mail->Username = 'bcacompilers@gmail.com'; // Your email
        $mail->Password = 'xoxxo dgfc bahz xbxv'; // Your email password
        $mail->SMTPSecure = 'tls';
        $mail->Port = 587;
    
        // Email Settings
        $mail->setFrom('donbinoy25@gmail.com', 'don');
        $mail->addAddress('donbinoy25@gmail.com', 'don');
        $mail->Subject = 'Test Email';
        $mail->Body = 'This is a test email sent without Composer!';
        
        // Send Email
        $mail->send();
        // echo "jfhbvhdf";exit;

        if($mail->send()){
        // echo "aaaaaaaaaaaaaaaaaaa <br>";
        return 'Email sent successfully!';
    } else {
        // echo "bbbbbbbbbbbbbbbbbbb <br>";
        return 'Failed to send email. Error: ' . $mail->ErrorInfo;
    }
} catch (Exception $e) {
    // echo "ccccccccccccccccccccccc <br>";
    return 'Failed to send email. Exception: ' . $e->getMessage();
}
}
    
?>


