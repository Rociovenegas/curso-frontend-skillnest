const init = () => {
    // Select each post individually
    const likePost1 = document.querySelector("#like-post-1");
    likePost1.querySelector("button").addEventListener("click", () => addLike(likePost1));

    const likePost2 = document.querySelector("#like-post-2");
    likePost2.querySelector("button").addEventListener("click", () => addLike(likePost2));

    const likePost3 = document.querySelector("#like-post-3");
    likePost3.querySelector("button").addEventListener("click", () => addLike(likePost3));
}

// Update likes count
const addLike = (element) => {
    // Select the first paragraph
    const textElement = element.querySelector("p");
    // Ensure that if there is no number, use 0
    let likeCount = parseInt(textElement.textContent) || 0;
    likeCount++;
    // Update the text with the new likes number
    textElement.textContent = `${likeCount} like(s)`;
}

const init2 = () => {
    // Select all posts
    const likePosts = document.querySelectorAll('.likes');

    // Iterate over each likes element
    likePosts.forEach(post => {
        const button = post.querySelector('button');
        button.addEventListener('click', () => addLike(post));
    });
}

document.addEventListener("DOMContentLoaded", () => {
    // init();
    init2();
});