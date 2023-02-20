let name = 'Max';
let age = 30;
const hasHobbies = true;
age = 31;
console.log(name);
console.log(age);

// arrow function 
const summarizeUser =  (userName, userAge, userHasHobby)=>{
    
    return (
        'Name is '+
        userName +
        ', age is '+
        userAge + 
        ' and the user has hobbies: '+
        userHasHobby
    )
}

const add = (a,b)=>{
    return a+b;
}
const addOne = (a)=> a+1;
const  addRandom = ()=>1+2;
console.log(addOne(1));
console.log(addRandom());
console.log(add(4,2));
console.log(summarizeUser(name,age,hasHobbies))