


/* 
 JavaScript Object Notation (JSON) 
 JavaScript Object Notation is an open data interchange format that is both human and machine-readable.
*/



const user = {id: 1, name: "Gorib Amir", job: 'actor'};
// JavaScript Object Notation (JSON)
const stringifyUser = JSON.stringify(user);
console.log(stringifyUser); // {"id":1,"name":"Gorib Amir","job":"actor"}



const shop = {
    owner: 'Alia',
    address: {
        street: "kochukhet voot er goli",
        city: 'ranbir',
        country: 'BD'
    },
    products: ['laptop', 'mic', 'monitor', 'keyboard'],
    revenue: 45000,
    isOpen: true,
    isNew: false
} 
console.log(shop);
// convert to string using JSON
const shopJSON = JSON.stringify(shop);
console.log(shopJSON);

// convert to Object from JSON string
const shopObject = JSON.parse(shopJSON)
console.log(shopObject);