
let columnPaused = [false, false, false, false, false, false];

document.addEventListener("scroll", () => {
    let viewportHeight = window.innerHeight;
    let totalBodyHeight = document.body.offsetHeight;
    let scrollHeight = totalBodyHeight - viewportHeight;

    let resumePointsArray = [
        1,
        1, 
        1, 
        1,
        1, 
        1  
    ];

    let pausePointsArray = [
        [0.08],            
        [0.05, 0.5],        
        [0.05, 0.7, 0.95],  
        [0.05, 0.5],        
        [0.05, 0.7, 0.95],  
        [0.05, 0.7, 0.95]  
    ];

    if (window.scrollY >= (resumePointsArray[resumePointsArray.length - 1] * scrollHeight)) {
        document.querySelector('.prev-btn').style.display = 'block';
    } else {
        document.querySelector('.prev-btn').style.display = 'none';
    }

    document.querySelectorAll(".column").forEach((column, columnIndex) => {
        let pausePoints = pausePointsArray[columnIndex]; 
        let resumePoint = resumePointsArray[columnIndex]; 

        let columnScrollHeight = pausePoints[0] * scrollHeight;

        for (let i = 0; i < pausePoints.length; i++) {
            if (window.scrollY >= pausePoints[i] * scrollHeight) {
                if (i === 0) {
                    columnScrollHeight = pausePoints[i] * scrollHeight;
                }
            } else {
                break; 
            }
        }

        console.log("Column " + (columnIndex + 1) + " Scroll Height: " + columnScrollHeight);
        console.log("Scroll Y: " + window.scrollY);
        console.log("Pause Points: " + pausePoints);

        if (columnPaused[columnIndex]) {
            return;
        }

        if (window.scrollY < columnScrollHeight) {
            column.style.transform = `translateY(0%)`;
        } else if (window.scrollY > resumePoint * scrollHeight) {
            column.style.transform = `translateY(calc(-${(resumePoint * 100)}%))`;
        } else {
            let columnScrollProgress = (window.scrollY - columnScrollHeight) / ((resumePoint * scrollHeight) - columnScrollHeight);
            column.style.transform = `translateY(calc(-${columnScrollProgress * 100}%))`;
        }
    });
});

function pauseScroll(columnIndex) {
    columnPaused[columnIndex] = true;
}

function resumeScroll(columnIndex) {
    columnPaused[columnIndex] = false;
}
