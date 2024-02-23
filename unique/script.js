document.addEventListener('DOMContentLoaded', function() {
    const textContainer = document.querySelector('.text-container'); 
    const toggleButton = document.getElementById('toggleButton');
    let isWordSpacingIncreased = false;

    toggleButton.addEventListener('click', function() {
        isWordSpacingIncreased = !isWordSpacingIncreased;
        textContainer.style.wordSpacing = isWordSpacingIncreased ? '50px' : 'normal';
    });
});
