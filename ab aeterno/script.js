document.addEventListener('DOMContentLoaded', function() {

    const backButton = document.querySelector('.back-btn');


    backButton.addEventListener('click', function() {

        window.location.href = '../index.html';
    });
});