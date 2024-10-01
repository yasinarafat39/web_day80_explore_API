 
function loadPostFormServer(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((res) => res.json())
    .then((data) => displayPost(data))
}


/*
    1. get the container element where you want to add the new element
    2. create child element
    3. set innerText or innerHTML
    4. appendChild
*/

function displayPost(posts){
    const postsContainer = document.getElementById('postsContainer')
    posts.forEach(post => { 
        const article = document.createElement('article');
        article.classList.add('post')
        article.innerHTML = `
            <h3>User-${post.userId}</h3>
            <h3>${post.title}</h3>
            <p>${post.body}</p> 
        `
        postsContainer.appendChild(article)
    });
}


loadPostFormServer()