// Get the button element by its ID and add a click event listener
document.getElementById("colorButton").addEventListener("click", function () {
    // Call the function to change the background color
    changeRandomBackgroundColor();
});

// Function to change the background color to a random color from the colors array
function changeRandomBackgroundColor() {
    // Array of color hex codes available for the background
    var colors = ["#FF6347", "#66CDAA", "#9370DB", "#FFD700", "#4682B4", "#FFA07A"];
    
    // Get a random index from the colors array
    var randomIndex = Math.floor(Math.random() * colors.length);
    
    // Get the random color from the array
    var randomColor = colors[randomIndex];
    
    // Apply the random color to the body background
    document.body.style.backgroundColor = randomColor;
}
