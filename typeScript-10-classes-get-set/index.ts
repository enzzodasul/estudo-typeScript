export {}

class Person {
    private _name: string
    private _age: number
    constructor(name: string, age: number) {
        this._name = name
        this._age = age
    }
    aboutMe(): string {
        return `hello, my name is ${this._name} and my age is ${this._age}`
    }
    set_name(name: string): void {
        this._name = name
    }
    get_name(): string {
        return this._name
    }
}
class Func extends Person {
    private FuncNumber: number
    constructor(name: string, age: number, FuncNumber: number) {
        super(name, age)
        this.FuncNumber = FuncNumber
    }
}

let Bob = new Func('Bob', 25, 574)
console.log(Bob.get_name())
console.log(Bob.set_name('Nexus'))
console.log(Bob.get_name())
