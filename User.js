class User extends Entity{
    constructor(options){
        super (options.name)
        this.age = options.age
        this.position = options.position
        this.boxesNames = options.boxesNames
    }

    countBoxes(){
        return this.boxesNames.reduce((count, item)=>{
            return ++count;
        }, 0)
    }
}