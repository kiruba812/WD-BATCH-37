class Person {
    constructor(firstName,lastName,age,district,state,degree) {
        this.firstName= firstName,
        this.lastName= lastName,
        this.age= age,
        this.district= district,
        this.state= state,
        this.degree= degree
    }
}

let person = new Person("Ranjith", "Ravindran", "28", "Cuddalore", "TN", "MBBS");

console.log(person);