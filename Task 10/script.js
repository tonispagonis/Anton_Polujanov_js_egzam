'use strict';
console.log('Task 10');
/* ------------------------------ TASK 10 ---------------------------------------------------
Sutvarkykite užduoties "Task 10" esančius failus taip, kad veiktų žemiau pateiktos funkcijos.
-------------------------------------------------------------------------------------------- */
import { one, two, three, four, five } from "./modules/numbers/numbers.js";
import { composition } from "./modules/math/composition.js";
import { division } from "./modules/math/division.js";
import { substraction } from "./modules/math/subtraction.js";
import { multiplication } from "./modules/math/multiplication.js";

let a = composition(one, four);
let b = division(four, two);
let c = substraction(three, two);
let d = multiplication(five, two);

console.log('Composition result: ===', a);
console.log('Division result: ===', b);
console.log('Subtraction result: ===', c);
console.log('Multiplication result: ===', d);
