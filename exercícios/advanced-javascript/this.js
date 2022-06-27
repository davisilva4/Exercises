const person = {
    name: 'Davi',
    sayMyName: function(){
        console.log(`My name is ${this.name}`)
    }
}

/*person.sayMyName()*/

function sayMyName(name){
    console.log(`My name is ${this.name}`)
}

sayMyName.call(person)