class Person {
    _name;
    _age;
    static count = 0;
    constructor(name, age) {
        this._name = name;
        this._age = age;
        Person.count++;
    }
    aboutMe() {
        return `hello, my name is ${this._name} and my age is ${this._age}`;
    }
    get_name() {
        return this._name;
    }
    set_name(name) {
        this._name = name;
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
let Juca = new Func('Juca', 47, 574);
let Fafa = new Func('Fafa', 31, 574);
console.log(Person.count);
export {};
//console.log(Bob.set_name('Nexus'))
//console.log(Bob.get_name())
// STATIC:
// Permite criar propriedades ou métodos que pertencem à própria classe,
// e não a cada objeto individualmente.
// Para acessar, utilizamos o nome da classe: Person.count.
// COUNT:
// É uma propriedade estática que começa com valor 0.
// Cada vez que um novo objeto Person é criado, o contador aumenta em 1.
// CONSTRUCTOR:
// É executado automaticamente quando criamos um objeto com new.
// Recebe os valores iniciais e atribui às propriedades do objeto.
// THIS:
// Representa o próprio objeto que está sendo criado ou utilizado.
// Exemplo: this._name representa o nome daquele objeto.
// PRIVATE:
// Protege uma propriedade, impedindo seu acesso direto fora da classe
// durante a verificação de tipos do TypeScript.
// GET_NAME():
// Método utilizado para consultar o valor da propriedade _name.
// SET_NAME():
// Método utilizado para alterar o valor da propriedade _name.
// Como possui retorno void, não devolve nenhum valor.
// EXTENDS:
// Permite que uma classe herde propriedades e métodos de outra classe.
// Neste exemplo, Func herda de Person.
// SUPER:
// Chama o constructor da classe pai (Person),
// permitindo inicializar as propriedades herdadas.
// CONTADOR DE OBJETOS:
// Cada vez que criamos um novo objeto com new Func(),
// o constructor de Person é executado através de super().
// Consequentemente, Person.count aumenta em 1.
// EXEMPLO:
// let Bob = new Func('Bob', 25, 574)
// let Juca = new Func('Juca', 47, 574)
// let Fafa = new Func('Fafa', 31, 574)
//
// console.log(Person.count)
//
// RESULTADO: 3
//
// IMPORTANTE:
// STATIC pertence à classe.
// THIS pertence ao objeto.
// Person.count acessa o contador compartilhado por todos os objetos.
