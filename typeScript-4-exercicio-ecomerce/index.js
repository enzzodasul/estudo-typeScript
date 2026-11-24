function store(balance, product) {
    if (product == 'phone' && balance >= 1000) {
        balance -= 1000;
        return 'purchase made';
    }
    if (product == 'television' && balance >= 2000) {
        balance -= 2000;
        return 'purchase made';
    }
    if (product == 'computer' && balance >= 3000) {
        balance -= 3000;
        return 'purchase made';
    }
    if (product != 'phone' && product != 'television' && product != 'computer') {
        return 'invalid product';
    }
    else {
        return 'insufficient balance';
    }
}
let a = store(2000, 'phone');
console.log(a);
let b = store(1000, 'mouse');
console.log(b);
let c = store(1000, 'television');
console.log(c);
export {};
