/*
export {}

function printItem(item: any): void {
    console.log(item.length)
}
printItem('Codi Academy')


export {}

function printItem<T>(item: Array<T>): void {
    console.log(item.length)
}
printItem([1, 2, 3])


// GENERICS (GENÉRICOS):
// Permitem criar funções reutilizáveis que trabalham com diferentes tipos de dados,
// mantendo a tipagem e a segurança do TypeScript.

// <T> representa um parâmetro de tipo genérico.
// Array<T> indica que o parâmetro recebe um array de elementos do tipo T.
// void indica que a função não retorna nenhum valor.

// O TypeScript consegue identificar automaticamente o tipo dos elementos (inferência).
// Exemplo: printItem([1, 2, 3]) -> T será number.
//          printItem(['Ana', 'João']) -> T será string.

// .length retorna a quantidade de elementos do array.

*/

export {}

function printItem<T>(item: Array<T>): void {
    console.log(item.length)
}

printItem([1, 2, 3])
