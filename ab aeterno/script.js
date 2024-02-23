document.addEventListener('DOMContentLoaded', function() {
    // Select the back button
    const backButton = document.querySelector('.back-btn');

    // Add click event listener to the back button
    backButton.addEventListener('click', function() {
        // Go back in the browser's history
        window.history.back();
    });
});

