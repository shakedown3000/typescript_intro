
// Number-Methods-TS-Level-1_2

let num = 15.16698;
let n = num.toFixed(2)
console.log({n});
let num1 = 7.78714
let m = num1.toFixed(2)
console.log({m});
let num2 = 12.3
let o = num2.toFixed(2)
console.log({o});
// let true = true;
// let p = true.toFixed(2)
// console.log({p});
let num3 = 321;
let q = num3.toFixed(2)
console.log({q});
// let super = 'supercode'
// let r = super.toFixed(2)

// Number-Methods-TS-Level-1_3
// Werte: 15.16698, 7.78714, "12.3", "3.14random", "32px", true, false, "321" und "Supercode".

let test = 15.16698
let a = test.toString()
console.log({a});
let b = test.toString(2)
console.log({b});
let c = test.toString(8)
console.log({c});
let d = test.toString(16)
console.log({d});

let test1 = 7.78714
let a1 = test.toString()
console.log({a1});
let b1 = test.toString(2)
console.log({b1});
let c1 = test.toString(8)
console.log({c1});
let d1 = test.toString(16)
console.log({d1});

let test2 = "12.3";
let test2number = parseFloat(test2)
console.log({test2number});
let a2 = test2number.toString()
console.log({a2}); 
let b2 = test2number.toString(2)
console.log({b2}); 
let c2 = test2number.toString(8)
console.log({c2}); 
let d2 = test2number.toString(16)
console.log({d2}); 

let test3 = "3.14random";
let test3number = parseFloat(test3)
console.log({test3number});
let a3 = test3number.toString()
console.log({a3}); 
let b3 = test3number.toString(2)
console.log({b3}); 
let c3 = test3number.toString(8)
console.log({c3}); 
let d3 = test3number.toString(16)
console.log({d3}); 

let test4 = "32px";
let test4number = parseFloat(test4)
console.log({test4number});
let a4 = test4number.toString()
console.log({a4}); 
let b4 = test4number.toString(2)
console.log({b4}); 
let c4 = test4number.toString(8)
console.log({c4}); 
let d4 = test4number.toString(16)
console.log({d4}); 

// let test5 = true;
// let test5number = parseFloat(test5)

// Number-Methods-TS-Level-1_4

const x1 = 15.16698;
const x2 = Number(x1);
console.log({x2});
const y1 = "12.3";
const y2 = Number(y1);
console.log({y2});
const z1 = "32px";
const z2 = Number(z1);
console.log({z2});
const ae1 = "SuperCode";
const ae2 = Number(ae1)
console.log({ae2});