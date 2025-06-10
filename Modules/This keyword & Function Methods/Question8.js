function personInfo() {
    console.log(`Name: ${this.name}, Age: ${this.age}`);
}

const person = {
    name: "John",
    age: 25
};

personInfo.call(person);