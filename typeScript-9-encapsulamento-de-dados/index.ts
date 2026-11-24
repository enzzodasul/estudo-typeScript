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

// ENCAPSULAMENTO:
// É o conceito de proteger os dados de uma classe, controlando
// como eles podem ser acessados e utilizados.

// PRIVATE:
// Impede o acesso direto à propriedade fora da própria classe.
// Exemplo: private name: string
// A propriedade name só pode ser acessada diretamente dentro da classe Person.

// CONSTRUCTOR:
// Inicializa as propriedades da classe quando um objeto é criado.

// SUPER:
// Chama o constructor da classe pai (Person) dentro da classe filha (Func).
// Permite inicializar as propriedades herdadas.

// EXTENDS:
// Permite que uma classe herde propriedades e métodos de outra classe.

// ABOUTME():
// Método público que permite consultar os dados privados de Person
// sem precisar acessar diretamente as propriedades.

// IMPORTANTE:
// O private tradicional do TypeScript é verificado durante a compilação.
// No JavaScript, ele não garante privacidade em tempo de execução.
// Para isso, existe a sintaxe nativa #nome.

// EXEMPLO:
// Bob.name        -> acesso direto bloqueado pelo TypeScript.
// Bob.aboutMe()   -> acesso permitido, pois o método está dentro da classe Person.
