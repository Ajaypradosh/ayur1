// $(document).ready(function() {
//     // Load the footer
//     $("#footer").load("footer.html");

//     // Load the header
//     $("#header").load("navbar.html");
// });



function learnMore() {
    // console.log("Learn More");
    window.location.href = "idukki.html";
}






$(document).ready(function() {
    $('#emailbtn').click(function() {
        console.log('clicked');
        $('#email').removeClass('d-none');
    });

    $('#sentMail').click(function(e) {
        e.preventDefault();

        var email = $('#emailinput').val();
        var message = $('#message').val();
        var name = $('#formName').val();
        let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        // if(message == '') {
        //     Swal.fire({
        //         title: 'Error!',
        //         text: 'Please enter a message',
        //         icon: 'error',
        //         confirmButtonText: 'Ok'
        //     });
        //     $('#message').addClass('border border-danger');
        //     return;
            
        // }
        
        if (emailPattern.test(email)) {
            if(message != '') {
                if(name != ''){

                    // console.log('akjsbdAAAAAAAAAAAAAAAAAAAjb')
                    $('#loader').css('display', 'block');
                    $.ajax({
                        url: 'asset/php/mail.php',
                        type: 'POST',
                        data: {
                            email: email,
                            message: message,
                            name: name
                        },
                        success: function(response) {
                            console.log('response :', response);
                            // console.log(response.status);

                            response = response.trim();

                            if(response === 'success'){
                                $('#loader').css('display', 'none');
                                alertBox('success', 'Email sent successfully');
                                $('#emailinput').removeClass('border border-danger');
                                $('#message').removeClass ('border border-danger');
                            }
                            else{
                                $('#loader').css('display', 'none');
                                alertBox('error', 'email and message not sent !!!!!');
                            }
                            
                        },
                        error : function(error) {
                            $('#loader').css('display', 'none');
                            console.log(error);
                            alertBox('error', 'email and message not sent');
                        }
                        
                    });
                    
                    console.log('akjsbdjb')
                    // alertBox('success', 'Email sent successfully');
                    // $('#emailinput').removeClass('border border-danger');
                    // $('#message').removeClass ('border border-danger');
                    
                }else{
                    alertBox('error', 'Please enter your name');
                    $('#formName').addClass('border border-danger');
                }
                
            }else{
            
                alertBox('error', 'Please enter a message');
                $('#message').addClass('border border-danger');
            }
        } else {
            alertBox('error', 'Please enter a valid email');
            $('#emailinput').addClass('border border-danger');
            // $('#emailinput').focus();
        }
    });
});



function alertBox(type, message ) {
    if(type == 'success') {
        icon = 'success';
    }else{
        icon = 'error';
    }

    Swal.fire({
        title: type,
        text: message,
        icon: icon,
        confirmButtonText: 'Ok'
    });



}
