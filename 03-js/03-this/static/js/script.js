// Get all images with the 'remove-image' class
var images = document.querySelectorAll(".remove-image");

// Get the remove photos button element
let removePhotosBtn = document.getElementById("remove-photos-btn");

// Add click event listener to remove all images
removePhotosBtn.addEventListener("click", () => {
    // Iterate through each image and remove it
    images.forEach(function (image) {
        image.remove();
    });
});