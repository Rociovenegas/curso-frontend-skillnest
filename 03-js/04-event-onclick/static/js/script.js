
// let isLoggedIn = false;

// loginBtn.addEventListener("click", () => {
//     isLoggedIn = !isLoggedIn;
//     loginBtn.textContent = isLoggedIn ? "Cerrar sesión" : "Iniciar sesión";
// });


// When clicking the "Sign in" button, it should change to "Sign out".
const loginBtn = document.getElementById("login-btn");
loginBtn.addEventListener("click", () => loginBtn.textContent = "Cerrar sesión");

// When clicking "Add definition" the button should disappear.
const addDefinitionBtn = document.getElementById("add-definition-btn");
addDefinitionBtn.addEventListener("click", () => {
    addDefinitionBtn.style.display = 'none';
});

// 1. When clicking "Like" for one of the definitions, an alert is triggered indicating 
//    that you liked the definition along with its title.
// 2. Each time the like button of each definition is clicked, the like count for each definition should increase.

const likeBtnAll = document.querySelectorAll(".like-btn");
likeBtnAll.forEach(likeBtn => {
    likeBtn.addEventListener("click", () => {
        let title = likeBtn.parentNode.firstElementChild.textContent; // Selects the h2 that is in the same div
        alert(`${title} was liked`);

        let likes = parseInt(likeBtn.textContent) || 0; // parseInt() reads the string and converts all continuous digits into a number
        likes++;
        likeBtn.textContent = `${likes} me gusta`;
    });
})



