
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
    $name = $_POST['name'];
    // echo "kajbsk";
    //  echo 
     sendMail($email, $message ,$mail , $name);
    //  echo "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa".$res; 
    //  echo sendMail($email, $message ,$mail , $name);
}

 function sendMail($email, $message ,$mail ,$name){

    $res = [
        'status'=> true,
        ];
    
    // ec?ho "kajbsk";

    try {
        // SMTP Configuration
        $mail->isSMTP();
        $mail->Host = 'smtp.gmail.com'; // Change this to your mail server
        $mail->SMTPAuth = true;
        $mail->Username = 'bcacompilers@gmail.com'; // Your email
        $mail->Password = 'etnu jgxw dztg pxze'; // Your email password
        $mail->SMTPSecure = 'tls';
        $mail->Port = 587;
    
        // Email Settings
        $mail->setFrom('bcacompilers@gmail.com', 'admin');
        $mail->addAddress($email, $name);
        $mail->Subject = 'Test Email';
        $mail->Body = 'This is a test email sent without Composer!';
        
        // Send Email
        $mail->send();
        // echo "jfhbvhdf";exit;

        if($mail->send()){
        // echo "aaaaaaaaaaaaaaaaaaa <br>";
        echo 'success';
    } else {
        // echo "bbbbbbbbbbbbbbbbbbb <br>";
        echo 'failed';
    }
} catch (Exception $e) {
    // echo "ccccccccccccccccccccccc <br>";
    return 'Failed to send email. Exception: ' . $e->getMessage();
}
}
    
?>


