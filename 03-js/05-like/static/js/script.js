const init = () => {
    // Seleccionar cada post individualmente
    const btnPost1 = document.querySelector("#like-post-1");
    btnPost1.querySelector("button").addEventListener("click", () => addLike(btnPost1));

    const btnPost2 = document.querySelector("#like-post-2");
    btnPost2.querySelector("button").addEventListener("click", () => addLike(btnPost2));

    const btnPost3 = document.querySelector("#like-post-3");
    btnPost3.querySelector("button").addEventListener("click", () => addLike(btnPost3));
}

// Actualizar likes
const addLike = (element) => {
    // selecciona primer parrafo 
    const textElement = element.querySelector("p");
    // Asegura que si no hay número, se use 0
    let likes = parseInt(textElement.textContent) || 0;
    likes++;
    // Actualiza el texto con el nuevo número de likes
    textElement.textContent = `${likes} like(s)`;
}

const init2 = () => {
    // Selecciona todos los post
    const likePosts = document.querySelectorAll('.likes');

    // Iterar sobre cada uno de los elementos 'likes'
    likePosts.forEach(post => {
        const button = post.querySelector('button');
        button.addEventListener('click', () => addLike(post));
    });
}

document.addEventListener("DOMContentLoaded", () => {
    // init();
    init2();
});