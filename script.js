document.addEventListener('DOMContentLoaded', function() {
    // Get the contact button element by its ID
    const contactButton = document.getElementById('contactBtn');

    // Add an event listener for a click event
    contactButton.addEventListener('click', function() {
        // Define the contact message
        const message = "Thank you for your interest! You can reach me at:mallipeddivardhan9@gmail.com";
        
        // Use the browser's alert function to display the message
        alert(message);
        
        // Optional: Log to the console for debugging
        console.log("Contact button clicked.");
    });

});

