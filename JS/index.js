
function loadUsers2(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => displayUsers2(data))
}


function displayUsers2(users){
    // users.forEach(user => {
    //     console.log(user?.username)
    // });

    const ul = document.getElementById("userContainer");

    users.forEach(user => { 
        const li = document.createElement('li');
        li.innerText = user.name;
        ul.appendChild(li);
    });
}