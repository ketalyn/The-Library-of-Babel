// Define an array to keep track of whether each column is currently paused
let columnPaused = [false, false, false, false, false, false];

document.addEventListener("scroll", () => {
    let viewportHeight = window.innerHeight;
    let totalBodyHeight = document.body.offsetHeight;
    let scrollHeight = totalBodyHeight - viewportHeight;

    // Define resume points for each column (common resume point at the bottom)
    let resumePointsArray = [
        1, // Resume point for the first column
        1, // Resume point for the second column
        1, // Resume point for the third column
        1, // Resume point for the fourth column
        1, // Resume point for the fifth column
        1  // Resume point for the sixth column
    ];

    // Define pause points for each column
    let pausePointsArray = [
        [0.08],             // Pause points for the first column
        [0.05, 0.5],        // Pause points for the second column
        [0.05, 0.7, 0.95],  // Pause points for the third column
        [0.05, 0.5],        // Pause points for the fourth column
        [0.05, 0.7, 0.95],  // Pause points for the fifth column
        [0.05, 0.7, 0.95]   // Pause points for the sixth column
    ];

    if (window.scrollY >= (resumePointsArray[resumePointsArray.length - 1] * scrollHeight)) {
        // Show the button
        document.querySelector('.prev-btn').style.display = 'block';
    } else {
        // Hide the button
        document.querySelector('.prev-btn').style.display = 'none';
    }

    document.querySelectorAll(".column").forEach((column, columnIndex) => {
        let pausePoints = pausePointsArray[columnIndex]; // Get pause points for the current column
        let resumePoint = resumePointsArray[columnIndex]; // Get resume point for the current column

        let columnScrollHeight = pausePoints[0] * scrollHeight;

        for (let i = 0; i < pausePoints.length; i++) {
            if (window.scrollY >= pausePoints[i] * scrollHeight) {
                // Update columnScrollHeight to the current pause point only if it's the first pause point
                if (i === 0) {
                    columnScrollHeight = pausePoints[i] * scrollHeight;
                }
            } else {
                break; // Exit the loop once the current scroll position is before the next pause point
            }
        }

        // Log information for debugging
        console.log("Column " + (columnIndex + 1) + " Scroll Height: " + columnScrollHeight);
        console.log("Scroll Y: " + window.scrollY);
        console.log("Pause Points: " + pausePoints);

        // Check if scrolling is paused for the current column
        if (columnPaused[columnIndex]) {
            // If scrolling is paused, skip the logic to update the column position
            return;
        }

        if (window.scrollY < columnScrollHeight) {
            // Scroll within the pause point
            column.style.transform = `translateY(0%)`;
        } else if (window.scrollY > resumePoint * scrollHeight) {
            // Scroll at the common resume point (bottom of the page)
            column.style.transform = `translateY(calc(-${(resumePoint * 100)}%))`;
        } else {
            // Scroll between pause and resume points
            let columnScrollProgress = (window.scrollY - columnScrollHeight) / ((resumePoint * scrollHeight) - columnScrollHeight);
            column.style.transform = `translateY(calc(-${columnScrollProgress * 100}%))`;
        }
    });
});

// Function to pause scrolling for a specific column
function pauseScroll(columnIndex) {
    columnPaused[columnIndex] = true;
}

// Function to resume scrolling for a specific column
function resumeScroll(columnIndex) {
    columnPaused[columnIndex] = false;
}
