/* 
export {};

let stringArr: any[];

stringArr = ['Curso', 'TypeScript'];

let genericArr: Array<string>;

genericArr = ['Codi', 'Academy'];

console.log(stringArr);
console.log(genericArr);

let valores: (string | number | boolean)[];

valores = ["Curso", 10, true];

console.log(valores);

*/




/*
export{};

let myTuple: [number, boolean ,string];
myTuple=[3,true,"text"];

console.log(myTuple);

*/

/*
export{};

enum Colors {Red = 'red', Blue = 'blue', Green = 'green'};

let color: Colors;
color = Colors.Red;
console.log(color); 

*/

export{};

function multiplica(x:number,y:number):
number{
    return x*y;
}

const resposta = multiplica(2,4);
console.log(resposta)