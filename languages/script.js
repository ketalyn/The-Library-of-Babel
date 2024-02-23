document.addEventListener('DOMContentLoaded', function() {
    const textContainer = document.getElementById('textContainer');
    const originalText = textContainer.textContent.trim();
    const words = originalText.split(' ');

    // Clear the text container
    textContainer.innerHTML = '';

    // Store original and scrambled versions of each word
    const wordData = words.map(word => ({
        original: word,
        scrambled: scrambleText(word)
    }));

    // Display words with initial scrambled text
    wordData.forEach(wordObj => {
        const span = document.createElement('span');
        span.textContent = wordObj.scrambled;
        textContainer.appendChild(span);
        textContainer.appendChild(document.createTextNode(' ')); // Add a space after each word
    });

    // Add event listeners to scramble/unscramble on hover
    const spans = textContainer.querySelectorAll('span');

    spans.forEach(span => {
        span.addEventListener('mouseenter', function() {
            const originalWord = wordData.find(obj => obj.scrambled === span.textContent).original;
            span.textContent = originalWord; // Restore the original word
        });

        span.addEventListener('mouseleave', function() {
            const scrambledWord = wordData.find(obj => obj.original === span.textContent).scrambled;
            span.textContent = scrambledWord; // Scramble the word again
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
