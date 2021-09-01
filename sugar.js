//makind variables from tags
const teacher1 = document.querySelector('.teacher1');
const teacher2 = document.querySelector('.teacher2');

const grade1 = document.querySelector('.grade1');
const grade2 = document.querySelector('.grade2');

const pupil1 = document.querySelector('.pupil1');
const pupil2 = document.querySelector('.pupil2');
const pupil3 = document.querySelector('.pupil3');

//create instance
//Class User
const user1 = new User ('Mrs. Ivanova', 50, '25 years', '2-08');
const user2 = new User('Mr. Petrov', 32, '10 years', '2-11');
//class Box
const box1 = new Box('1A', 26 , user1);
const box2 = new Box('1B', 28, user2);
//class Stuff
const stuff1 = new Stuff('Masha', 'Romanova', 6, box1);
const stuff2 = new Stuff('Katya', 'Kovalova', 7, box2);
const stuff3 = new Stuff('Pasha', 'Pavlov', 7, box1);
//ouptut Information
const teacher1Message = `${user1.name} <br> age: ${user1.age} years old <br> experience: ${user1.experience} years  <br> classroom: ${user1.classroom}`
const teacher2Message = `${user2.name} <br> age: ${user2.age} years old <br> experience: ${user2.experience} years  <br> classroom: ${user2.classroom}`

output(teacher1, teacher1Message);
output(teacher2, teacher2Message);

const grade1Message = `${box1.name} has ${box1.countPupil} pupils`;
const grade2Message = `${box2.name} has ${box2.countPupil} pupils`;

output(grade1, grade1Message);
output(grade2, grade2Message);

const pupil1Message = `${stuff1.name} ${stuff1.surname}  is in the ${stuff1.box.name} grade, she is ${stuff1.age} yars old`
const pupil2Message = `${stuff2.name} ${stuff2.surname}  is in the ${stuff2.box.name} grade, she is ${stuff2.age} yars old`
const pupil3Message = `${stuff3.name} ${stuff3.surname}  is in the ${stuff1.box.name} grade, he is ${stuff3.age} yars old`

output(pupil1, pupil1Message);
output(pupil2, pupil2Message);
output(pupil3, pupil3Message);

console.log(user1.name, user1.age)
console.log(user2.teacherSay());
console.log(box1.getInfo());
console.log(stuff1.pupilSay());

function output(element, message){
    return element.innerHTML = message;
}
