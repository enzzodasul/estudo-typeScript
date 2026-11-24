//--------------------------------
//-----------FUNCTIONS-------------

//export {}
//function multiplica(x: number, y: number): number {
//    return x * y
//}

//const answer = multiplica(2, 4)
//console.log(answer)

//----------------------------------------------
//------------- declarating with ? ---------------------------------
//----------------------------------------------
//export {}
//function multiplica(x: number, y?: number): number {
//    return x * (y || 6)
//}
//const answer = multiplica(2)
//console.log(answer)

//----------------------------------------------
//---------------ARROW FUNCTION => -------------------------------
//----------------------------------------------
//export {}
//let multiply = (x: number, y: number = 4): number => {
//    return x * y
//}
//const answer = multiply(10)
//console.log(answer)
//----------------------------------------------
let myFunc = ({ x, y, z }): number => {
    return y
}
const answer = myFunc({ y: 4, z: 3, x: 5 })
console.log(answer)
//----------------------------------------------
