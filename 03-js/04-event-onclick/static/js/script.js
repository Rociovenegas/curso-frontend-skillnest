
// let loggedIn = false;

// loginBtn.addEventListener("click", () => {
//     loggedIn = !loggedIn;
//     loginBtn.textContent = loggedIn ? "Cerrar sesión" : "Iniciar sesión";
// });


// Cuando sé de clic en el botón “Iniciar sesión” este debe cambiar a “Cerrar sesión”.
const loginBtn = document.getElementById("login-btn");
loginBtn.addEventListener("click", () => loginBtn.textContent = "Cerrar sesión");

// Cuando se da clic en “Agregar definición” el botón debe desaparecer.
const addDefinitionBtn = document.getElementById("add-definition-btn");
addDefinitionBtn.addEventListener("click", () => {
    addDefinitionBtn.style.display = 'none';
});

// 1.- Cuando se da clic en “Me gusta” para una de las definiciones se dispara una alarma indicando 
// que te gusto la definición junto con el título de la misma.
// 2.- Cada vez que se le da clic al botón de like de cada definición, este debe aumentar el conteo de likes de cada definición.

const likeBtnAll = document.querySelectorAll(".like-btn");
likeBtnAll.forEach(likeBtn => {
    likeBtn.addEventListener("click", () => {
        let title = likeBtn.parentNode.firstElementChild.textContent; // selecciona el h2 que esta en el mismo div
        alert(`${title} was liked`);

        let likes = parseInt(likeBtn.textContent) || 0; // parseInt() lee el string convierte todos los dígitos continuos en un número
        likes++;
        likeBtn.textContent = `${likes} me gusta`;
    });
})



