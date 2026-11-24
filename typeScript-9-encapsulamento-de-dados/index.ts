export {}

class Person {
    private name: string
    private age: number
    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }
    aboutMe(): string {
        return `hello, my name is ${this.name} and my age is ${this.age}`
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

//console.log(Bob.name)
