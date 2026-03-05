document.addEventListener('DOMContentLoaded', function() {

    // Get the contact button
    const contactButton = document.getElementById('contactBtn');

    // When button is clicked
    contactButton.addEventListener('click', function() {

        // Open user's email application
        window.location.href = "mailto:mallipeddivardhan9@gmail.com";

    });

});
