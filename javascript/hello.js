console.log("Hello world");
/* the two lines are run in the browser
let age = prompt("How old are you?");
alert(`You're ${age} years old.`)
*/ 

/*using the confirm*/
let isBoss= confirm("Are you my boss?")

//learning the difference and similarity in quotes
const firstname="Becky";
const lastname="Ttendo";
const message=`My name is ${firstname} ${lastname}`
console.log(message)

//boolean
let isFemale
isFemale = true;
isFemale = false;

//creating an object then items
let user = new Object();
user.name = "Ttendo"
user.course = "BSE"
console.log(user);
//{name: "Ttendo", course: "BSE"}

//creating objects with items at once
let user = {
    name:"Becky",age:50,isMale:false
    }
    //running=>console.log(user);
    //{name: "Becky", age:50, isMale:false}

    let user = {
        name:"Becky",age:50,isMale:false
        }
        let introduction = `My name is ${user.name} and i am not ${user.isMale ? "female":"male"} and am ${user.age} years old`;
        //running=>console.log(introduction);
        // answer => My name is Becky and i am not male and am 50 years old