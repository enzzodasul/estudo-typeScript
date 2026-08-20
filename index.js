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
var Colors;
(function (Colors) {
    Colors[Colors["Red"] = 0] = "Red";
    Colors[Colors["Blue"] = 1] = "Blue";
    Colors[Colors["Green"] = 2] = "Green";
})(Colors || (Colors = {}));
;
let color;
color = Colors.Green;
console.log(color);
export {};
