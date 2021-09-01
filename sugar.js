
const user1 = new User ('Mrs. Ivanova',50, '25 years', '2-08');

const user2 = new User('Mr. Petrov', 32, '10 years', '2-11');

const box1 = new Box('1A', 26 , user1);
const box2 = new Box('1B', 28, user2);

const pupil1 = new Stuff('Masha', 'Romanova', 6, box1);
const pupil2 = new Stuff('Katya', 'Kovalova', 7, box2);

console.log(user1.name, user1.age)
console.log(user2.teacherSay());
console.log(box1.getInfo());
console.log(pupil1.pupilSay());
