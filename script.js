document.addEventListener('DOMContentLoaded', function() {
    const contactButton = document.getElementById('contactBtn');

    contactButton.addEventListener('click', function() {
        window.open(
            "https://mail.google.com/mail/?view=cm&fs=1&to=mallipeddivardhan9@gmail.com",
            "_blank"
        );
    });
});
