document.addEventListener('DOMContentLoaded', function() {
    // Select the back button
    const backButton = document.querySelector('.back-btn');

    // Add click event listener to the back button
    backButton.addEventListener('click', function() {
        // Navigate to the main homepage
        window.location.href = '../index.html'; // Adjust the path based on your folder structure
    });
});