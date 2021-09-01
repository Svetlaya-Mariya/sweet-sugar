class Stuff extends Entity{
    constructor(name, surname, age, box){
        super(name)
        this.surmane = surname
        this.age = age
        this.box = box
    }

    pupilSay(){
        console.log(`Hello, My name is ${this.name} ${this.surmane} I study in ${this.box.name} class. And my teacher's name is ${this.box.user.name}`)
    }
}