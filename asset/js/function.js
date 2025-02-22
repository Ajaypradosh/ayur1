// $(document).ready(function() {
//     // Load the footer
//     $("#footer").load("footer.html");

//     // Load the header
//     $("#header").load("navbar.html");
// });



function learnMore() {
    console.log("Learn More");
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
        let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if(message == '') {
            Swal.fire({
                title: 'Error!',
                text: 'Please enter a message',
                icon: 'error',
                confirmButtonText: 'Ok'
            });
            $('#message').addClass('border border-danger');
            return;

        }

        if (emailPattern.test(email)) {
            
            Swal.fire({
                title: 'Success!',
                text: 'Your email has been sent',
                icon: 'success',
                confirmButtonText: 'Ok'
            });
            $('#emailinput').removeClass('border border-danger');
        } else {
            Swal.fire({
                title: 'Error!',
                text: 'Please enter a valid email',
                icon: 'error',
                confirmButtonText: 'Ok'
            });
            $('#emailinput').addClass('border border-danger');
            // $('#emailinput').focus();
        }
    });
});
