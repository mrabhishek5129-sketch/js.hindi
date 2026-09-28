const score = 100 
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

 console.log(id === anotherId);

const heros = ["shaktiman","naagraj","doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}
const myFunction = function(){
    console.log("hello world");
    
}
console.log(typeof heros);



// *****************************************

// Stack( primitive),  Heap (Non-Primitive)

let myYoutubename = "Abhishekprjapaticom"

let anothername =  myYoutubename 

console.log(anothername);
console.log(myYoutubename);

let userOne = {
    email: "user@google.com",
    upi: " user@ybl"
}
let userTwo = userOne
userTwo.email = "abhi@google,com"

console.log(userOne.email);
console.log(userTwo.email);


