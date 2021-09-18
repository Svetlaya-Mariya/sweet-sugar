class Box extends Entity{
    constructor(options){
        super(options.name)
        this.content = options.content
        this.ownerName = options.ownerName
    }
    
    sumStuff(){
        return this.content.reduce((sum, elem) => {
           return sum + parseInt(elem.price)
        }, 0) 
    }
}

