document.addEventListener('DOMContentLoaded', function() {
    // Top Shelf
    const prevBtnTop = document.querySelector('.prev-btn');
    const nextBtnTop = document.querySelector('.next-btn');
    const slidesTop = document.querySelector('.books');
    let slideIndexTop = 0;
    const totalSlidesTop = 6; // Total number of slides in the top shelf

    function showSlideTop(index) {
        const slideWidthPercentage = 100 / totalSlidesTop;
        slidesTop.style.transition = 'transform 0.5s ease-in-out';
        slidesTop.style.transform = `translateX(-${index * slideWidthPercentage}%)`;
    }

    function revealContentTop() {
        if (slidesTop.scrollWidth > slidesTop.clientWidth) {
            slidesTop.classList.add('show-content');
        } else {
            slidesTop.classList.remove('show-content');
        }
    }

    prevBtnTop.addEventListener('click', function() {
        slideIndexTop = (slideIndexTop === 0 ) ? totalSlidesTop - 1 : slideIndexTop - 1;
        showSlideTop(slideIndexTop);
        revealContentTop();
    });

    nextBtnTop.addEventListener('click', function() {
        slideIndexTop = (slideIndexTop === totalSlidesTop - 1 ) ? 0 : slideIndexTop + 1;
        showSlideTop(slideIndexTop);
        revealContentTop();
    });

    window.addEventListener('resize', function() {
        revealContentTop();
    });
    
    // Middle Shelf
    const prevBtnMiddle = document.querySelector('.prev-btn-2');
    const nextBtnMiddle = document.querySelector('.next-btn-2');
    const slidesMiddle = document.querySelector('.books-middle');
    let slideIndexMiddle = 0;
    const totalSlidesMiddle = 6; // Total number of slides in the middle shelf

    function showSlideMiddle(index) {
        const slideWidthPercentage = 100 / totalSlidesMiddle;
        slidesMiddle.style.transition = 'transform 0.5s ease-in-out';
        slidesMiddle.style.transform = `translateX(-${index * slideWidthPercentage}%)`;
    }

    function revealContentMiddle() {
        if (slidesMiddle.scrollWidth > slidesMiddle.clientWidth) {
            slidesMiddle.classList.add('show-content');
        } else {
            slidesMiddle.classList.remove('show-content');
        }
    }

    prevBtnMiddle.addEventListener('click', function(event) {
        event.stopPropagation();
        slideIndexMiddle = (slideIndexMiddle === 0 ) ? totalSlidesMiddle - 1 : slideIndexMiddle - 1;
        showSlideMiddle(slideIndexMiddle);
        revealContentMiddle();
    });

    nextBtnMiddle.addEventListener('click', function(event) {
        event.stopPropagation();
        slideIndexMiddle = (slideIndexMiddle === totalSlidesMiddle - 1 ) ? 0 : slideIndexMiddle + 1;
        showSlideMiddle(slideIndexMiddle);
        revealContentMiddle();
    });

    window.addEventListener('resize', function() {
        revealContentMiddle();
    });


    // Bottom Shelf
    const prevBtnBottom = document.querySelector('.prev-btn-3');
    const nextBtnBottom = document.querySelector('.next-btn-3');
    const slidesBottom = document.querySelector('.books-bottom');
    let slideIndexBottom = 0;
    const totalSlidesBottom = 6; // Increase the total number of slides in the bottom shelf

    function showSlideBottom(index) {
        const slideWidthPercentage = 100 / totalSlidesBottom;
        slidesBottom.style.transition = 'transform 0.5s ease-in-out';
        slidesBottom.style.transform = `translateX(-${index * slideWidthPercentage}%)`;
    }

    function revealContentBottom() {
        if (slidesBottom.scrollWidth > slidesBottom.clientWidth) {
            slidesBottom.classList.add('show-content');
        } else {
            slidesBottom.classList.remove('show-content');
        }
    }

    prevBtnBottom.addEventListener('click', function(event) {
        event.stopPropagation();
        slideIndexBottom = (slideIndexBottom === 0 ) ? totalSlidesBottom - 1 : slideIndexBottom - 1;
        showSlideBottom(slideIndexBottom);
        revealContentBottom();
    });

    nextBtnBottom.addEventListener('click', function(event) {
        event.stopPropagation();
        slideIndexBottom = (slideIndexBottom === totalSlidesBottom - 1 ) ? 0 : slideIndexBottom + 1;
        showSlideBottom(slideIndexBottom);
        revealContentBottom();
    });

    window.addEventListener('resize', function() {
        revealContentBottom();
    });

});