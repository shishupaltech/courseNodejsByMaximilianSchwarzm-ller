let name = 'Max';
let age = 30;
const hasHobbies = true;
age = 31;
console.log(name);
console.log(age);

function summarizeUser(userName, userAge, userHasHobby){
    return (
        'Name is '+
        userName +
        ', age is '+
        userAge + 
        ' and the user has hobbies: '+
        userHasHobby
    )
}
console.log(summarizeUser(name,age,hasHobbies))