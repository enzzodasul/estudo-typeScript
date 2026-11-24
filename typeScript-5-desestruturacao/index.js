//export {}
let nameBuilder = (pNome, ...oNomes) => {
    return pNome + ' ' + oNomes.join(' ');
};
const answer = nameBuilder('bill', 'Fred', 'james', 'Sam');
console.log(answer);
export {};
