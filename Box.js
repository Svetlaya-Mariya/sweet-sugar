class Box extends Entity{
    constructor(name, countPupil, user){
        super(name)
        this.countPupil = countPupil
        this.user = user
    }
    getInfo(){
        console.log(`${this.name} class belongs to ${this.user.name} and thay study in ${this.user.classroom}`)
    }
}