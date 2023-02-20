const person = {
    name:'Max',
    age:29,
    greet:()=>{
        console.log('Hi, I am ' + this);
    }
};
person.greet();
console.log(person);