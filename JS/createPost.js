

const loader = document.getElementById('loader');

const showLoading = () => {
    loader.classList.remove('hidden'); 
}

const hideLoading = () => {
    loader.classList.add('hidden');
}


const newPost = {
    title: "New title New title New title",
    body: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati nemo accusamus eligendi saepe, est voluptate.",
    userId: 11
}

/*
    1. get the container element where you want to add the new element
    2. create child element
    3. set innerText or innerHTML
    4. appendChild
*/

function createNewPost(){
    showLoading()
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: "POST",
        body: JSON.stringify(newPost),
        headers: {
            'Content-type' : 'application/json'
        }
    })
    .then(res => res.json())
    .then(data => displayNewPost(data))
}

function displayNewPost(newPost){

    const postsContainer = document.getElementById('postsContainer');
    // console.log(newPost)
    const article = document.createElement('article');
        article.classList.add('newPost')
        article.innerHTML = `
            <h3>User-${newPost.userId}</h3>
            <h3>${newPost.title}</h3>
            <p>${newPost.body}</p> 
        `
        postsContainer.insertAdjacentElement('afterbegin', article)
    
    hideLoading()
}