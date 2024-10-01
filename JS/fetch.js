


/*
    FETCH API
    The Fetch API is a modern interface that allows you to make HTTP requests to servers from web brwosers.
*/


// fetch("https://jsonplaceholder.typicode.com/todos/1")
//   .then((response) => console.log(response)) // .json is not similar but close to JSON.parse()
// //   .then((json) => console.log(json));


const url = "https://jsonplaceholder.typicode.com/todos/1";
fetch(url)
    .then((res) => res.json())
    .then((data) => console.log(data))