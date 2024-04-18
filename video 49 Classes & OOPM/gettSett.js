class user{
    constructor (name){
        // invoke the setter function
    this.name  = name;
    }

    get name(){
        return   this._name;
    }

    set name(value){
        if(value.length < 4){
            console.log('Name is too Short')
            return; 
        }
       this._name = value;
    }
}

let work = new user ("Rohit"); //Here we will initilize the object
console.log(user.name)

work = new user(""); //Name is too short.