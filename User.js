class User extends Entity{
    constructor(name, age, experience, classroom){
        super (name)
        this.age = age
        this.experience = experience
        this.classroom = classroom
    }

    teacherSay(){
        console.log(`Hi. I'm ${this.name}. My classroom is ${this.classroom}`)
    }
}