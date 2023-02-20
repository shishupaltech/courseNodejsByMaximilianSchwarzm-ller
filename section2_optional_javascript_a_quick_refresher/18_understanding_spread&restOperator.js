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
// console.log(hobbies.map((hobby)=>{
//     return 'hobby :'+hobby;
// }));
// console.log(hobbies);
const copiedPerson = {...person};
console.log(copiedPerson);
hobbies.push('Programming');
console.log(hobbies);
// const copiedArray = hobbies.slice(hobbies);
const copiedArray = [...hobbies];
console.log(copiedArray);

// const toArray = (arr1,arr2,arr3)=>{
//     return [arr1,arr2,arr3];
// }
// console.log(toArray(1,2,3));
const toArray = (...args)=>{
    return [...args];
}
console.log(toArray(1,2,3,5,34));