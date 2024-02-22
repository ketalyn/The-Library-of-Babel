document.addEventListener('DOMContentLoaded', function() {
    const textContainer = document.getElementById('textContainer');
    const originalText = textContainer.textContent.trim();
    const words = originalText.split(' ');

    // Clear the text container
    textContainer.innerHTML = '';

    // Scramble each word and append it to the text container wrapped in a span
    words.forEach(word => {
        const span = document.createElement('span');
        span.textContent = scrambleText(word);
        textContainer.appendChild(span);
        textContainer.appendChild(document.createTextNode(' ')); // Add a space after each word
    });

    // Add event listeners to scramble/unscramble on hover
    const spans = textContainer.querySelectorAll('span');

    spans.forEach(span => {
        const originalWord = span.textContent; // Store the original word
        span.addEventListener('mouseenter', function() {
            span.textContent = originalWord; // Restore the original word
        });

        span.addEventListener('mouseleave', function() {
            span.textContent = scrambleText(originalWord); // Scramble the word again
        });
    });
});

function scrambleText(text) {
    return text
        .split('')
        .sort(function() {
            return 0.5 - Math.random();
        })
        .join('');
}
