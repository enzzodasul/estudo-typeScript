class Person {
    _name;
    _age;
    constructor(name, age) {
        this._name = name;
        this._age = age;
    }
    aboutMe() {
        return `hello, my name is ${this._name} and my age is ${this._age}`;
    }
    set_name(name) {
        this._name = name;
    }
    get_name() {
        return this._name;
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
console.log(Bob.get_name());
console.log(Bob.set_name('Nexus'));
console.log(Bob.get_name());
export {};
