class Person {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    aboutMe() {
        return `hello, my name is ${this.name} and my age is ${this.age}`;
    }
}
class Func extends Person {
    FuncNumber;
    constructor(name, age, FuncNumber) {
        super(name, age);
        this.FuncNumber = FuncNumber;
    }
}
let Bob = new Func('Bob', 25, 574);
console.log(Bob.name);
export {};
