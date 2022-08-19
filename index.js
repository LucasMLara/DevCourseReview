const target = { a: 1, b: 2, z: 'Rafael'};

const source = { b: 4, c: 5 };

const exemplo = {a: 44, b:98, c:75, d:"Kreimer"}

// console.log(target)

const alo = Object.assign({}, {target, source, exemplo});

// console.log(alo);

console.log(Object.values(alo)[0]['a'])

