//makind variables from tags
const pen = document.querySelector('.stuff1');
const notebook = document.querySelector('.stuff2');
const ruler = document.querySelector('.stuff3');
const eraser = document.querySelector('.stuff4');
const scketchbook = document.querySelector('.stuff5');

const oldBox = document.querySelector('.box1');
const pencilCase = document.querySelector('.box2');
const binderForPaper = document.querySelector('.box3');

const ivanov = document.querySelector('.user1');
const petrov = document.querySelector('.user2');

const exe1 = document.querySelector('.exemple1');
const exe2 = document.querySelector('.exemple2');

//create instance
//class Stuff
const stuff1 = new Stuff({
    name : 'pen',
    color: 'red',
    price: '1$'
});
const stuff2 = new Stuff({
    name: 'notebook', 
    price: '3$'
});
const stuff3 = new Stuff({
    name: 'ruler', 
    color: 'pinc',
    price:  '2$'
});
const stuff4 = new Stuff({
    name: 'eraser', 
    color: 'blue',
    price: '4$'
});
const stuff5 = new Stuff({
    name: 'sketchbook',
    color: 'white',
    price: '5$'
});
//class User
const user1 = new User({
    name: 'Ivanov', 
    age: 30, 
    position: 'developer',
    boxesNames: ['Old sneaker box']
});
const user2 = new User({
    name: 'Petrov', 
    age: 32,
    position: 'hr', 
    boxesNames: [
        'Pancil case', 
        'Binder for paper'
    ]
});
//class Box
const box1 = new Box({
    name: 'Old sneaker box', 
    content: [
        stuff1, 
        stuff2
    ], 
    ownerName: user1
});

const box2 = new Box({
    name: 'Pencil case', 
    content: [
        stuff1, 
        stuff3,
        stuff4
    ], 
    ownerName: user2
});
const box3 = new Box({
    name: 'Binder for paper', 
    content: [
        stuff2, 
        stuff5
    ],
    ownerName: user2
});

//ouptut Information
//output stuff
const stuff1Info = messageStuff(stuff1.name, stuff1.color, stuff1.price);
const stuff2Info = messageStuff(stuff2.name, stuff2.color, stuff2.price);
const stuff3Info = messageStuff(stuff3.name, stuff3.color, stuff3.price);
const stuff4Info = messageStuff(stuff4.name, stuff4.color, stuff4.price);
const stuff5Info = messageStuff(stuff5.name, stuff5.color, stuff5.price);

output(pen, stuff1Info);
output(notebook, stuff2Info);
output(ruler, stuff3Info);
output(eraser, stuff4Info);
output(scketchbook, stuff5Info);
//output box
outputBox(oldBox, box1.name, box1.content, box1.ownerName.name);
outputBox(pencilCase, box2.name, box2.content, box2.ownerName.name);
outputBox(binderForPaper, box3.name, box3.content, box3.ownerName.name);
//output users
outputUsers(ivanov, user1.name, user1.age, user1.position, user1.boxesNames);
outputUsers(petrov, user2.name, user2.age, user2.position, user2.boxesNames);
// exemple 

output(exe1, `In <strong>${box1.name}</strong> contains items for the total amount <strong>${box1.sumStuff()}$</strong> ` )
output(exe2, `<strong>${user2.name}</strong> has <strong>${user2.countBoxes()}</strong> boxes` )

//function for output info in html
function output(element, message){
    return element.innerHTML = message;
}

function messageStuff(name, color, price){
    if (color == undefined){
        return `<strong>${name}</strong>: <br> price: ${price}`
    }
    return `<strong>${name}</strong>: <br> color: ${color} <br> price: ${price}`
}

function outputBox(element, name, content, ownerName){
    element.innerHTML = `<strong>${name}</strong> belonges <strong>${ownerName}</strong> and has `;
        content.forEach((elem) => {
            const str = document.createElement('span');
            str.innerHTML = `<strong>${elem.name}, </strong> `;
            element.append(str);
        });
    return element.innerHTML;
}

function outputUsers(element, name, age, position, boxesNames){
    element.innerHTML = `<strong>${name}</strong> <br> age: ${age} years old <br> position: ${position} <br> his box: `;
    boxesNames.forEach((elem) => {
        const str = document.createElement('span');
        str.innerHTML = `${elem} `;
        element.append(str);
    });
return element.innerHTML;
}
