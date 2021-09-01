//makind variables from tags
const teacher1 = document.querySelector('.teacher1');
const teacher2 = document.querySelector('.teacher2');

const grade1 = document.querySelector('.grade1');
const grade2 = document.querySelector('.grade2');

const pupil1 = document.querySelector('.pupil1');
const pupil2 = document.querySelector('.pupil2');
const pupil3 = document.querySelector('.pupil3');

const exe1 = document.querySelector('.exempl1');
const exe2 = document.querySelector('.exempl2');
const exe3 = document.querySelector('.exempl3');
//create instance
//class User
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
const teacher1Message = message1(user1.name, user1.age, user1.experience, user1.classroom);
const teacher2Message = message1(user2.name, user2.age, user2.experience, user2.classroom);

output(teacher1, teacher1Message);
output(teacher2, teacher2Message);

const grade1Message = message2(box1.name, box1.countPupil);
const grade2Message = message2(box2.name, box2.countPupil);


output(grade1, grade1Message);
output(grade2, grade2Message);

const pupil1Message = message3(stuff1.name, stuff1.surname, stuff1.box.name, stuff1.age);
const pupil2Message = message3(stuff2.name, stuff2.surname, stuff2.box.name, stuff2.age);
const pupil3Message = message3(stuff3.name, stuff3.surname, stuff3.box.name, stuff3.age);

output(pupil1, pupil1Message);
output(pupil2, pupil2Message);
output(pupil3, pupil3Message);


const func1 = user2.teacherSay();
const func2 = box1.getInfo();
const func3 = stuff1.pupilSay();

output(exe1, func1);
output(exe2, func2);
output(exe3, func3);

function output(element, message){
    return element.innerHTML = message;
}

function message1(name, age, experience, classroom){
    return `${name} <br> age: ${age} years old <br> experience: ${experience} years  <br> classroom: ${classroom}`
}

function message2(name, countPupil){
    return `${name} has ${countPupil} pupils`
}

function message3(name, surname, boxName, age){
    return `${name} ${surname}  is in the ${boxName} grade, she is ${age} yars old`
}