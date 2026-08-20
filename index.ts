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