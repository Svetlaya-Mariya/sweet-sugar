class Stuff extends Entity{
    constructor(name, surname, age, box){
        super(name)
        this.surname = surname
        this.age = age
        this.box = box
    }

    pupilSay(){
        return `Hello, My name is ${this.name} ${this.surmane} I study in ${this.box.name} class. And my teacher's name is ${this.box.user.name}`
    }
}