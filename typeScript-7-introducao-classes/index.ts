export {}
interface iPerson {
    name: string
    age: number
}

//class Bob implements Person{
//    name = "Bob";
//    age = 25;
//}

class Person implements iPerson {
    name
    age
    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }
    aboutMe(): string {
        return `hello, my name is ${this.name} and my age is ${this.age}`
    }
}
let Bob = new Person('Bob', 25)
console.log(Bob.aboutMe())

// INTERFACE:
// Define um modelo com regras que uma classe precisa seguir.
// Neste exemplo, toda pessoa precisa ter name (string) e age (number).

// CLASS:
// É uma estrutura utilizada para criar objetos.

// IMPLEMENTS:
// Faz com que a classe siga as regras definidas pela interface.

// CONSTRUCTOR:
// É executado quando criamos um novo objeto com new.
// Recebe os valores iniciais e os armazena no objeto.

// THIS:
// Representa o próprio objeto.
// this.name acessa o nome daquele objeto.

// METHOD:
// É uma função que pertence à classe.
// aboutMe() retorna uma apresentação da pessoa.

// NEW:
// Cria um novo objeto a partir da classe.
