export {}

//-----------------------------------------
// DECLARAÇÃO DE VARIÁVEIS
//-----------------------------------------

//var a = 10
//var b = 'text'
//var c = true

//-----------------------------------------
// TEMPLATE STRINGS
//-----------------------------------------

//let d: string
//d = `hello
//world
//multiLines`

//console.log(d)

//-----------------------------------------
// ARRAYS DE STRINGS
//-----------------------------------------

//let stringArr: string[]
//stringArr = ['Course', 'typeScript']

//let genericArr: Array<string>
//genericArr = ['Codi', 'Academy']

//console.log(stringArr)
//console.log(genericArr)

//-----------------------------------------
// TUPLAS
//-----------------------------------------

let myTuple: [number, boolean, string]

myTuple = [3, true, 'text']

console.log(myTuple)

//-----------------------------------------
// ENUMS
//-----------------------------------------

enum Colors {
    Red = 'red',
    Blue = 'blue',
    Green = 'green'
}

let color: Colors

color = Colors.Green

console.log(color)
