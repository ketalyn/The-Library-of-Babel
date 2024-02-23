document.addEventListener('DOMContentLoaded', function() {
    const textContainer = document.getElementById('textContainer');
    const originalText = textContainer.textContent.trim();
    const words = originalText.split(' ');

    textContainer.innerHTML = '';

    const wordData = words.map(word => ({
        original: word,
        scrambled: scrambleText(word)
    }));

    wordData.forEach(wordObj => {
        const span = document.createElement('span');
        span.textContent = wordObj.scrambled;
        textContainer.appendChild(span);
        textContainer.appendChild(document.createTextNode(' '));
    });

    const spans = textContainer.querySelectorAll('span');

    spans.forEach(span => {
        span.addEventListener('mouseenter', function() {
            const originalWord = wordData.find(obj => obj.scrambled === span.textContent).original;
            span.textContent = originalWord; 
        });

        span.addEventListener('mouseleave', function() {
            const scrambledWord = wordData.find(obj => obj.original === span.textContent).scrambled;
            span.textContent = scrambledWord; 
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
