const person = {
    name:'Max',
    age:29,
    greet:()=>{
        console.log('Hi, I am ' + this);
    }
};

const hobbies = ['Sports','Cooking'];
// for(let hobby of hobbies){
//     console.log(hobby);
// }
// person.greet();
// console.log(person);
console.log(hobbies.map((hobby)=>{
    return 'hobby :'+hobby;
}));
console.log(hobbies);