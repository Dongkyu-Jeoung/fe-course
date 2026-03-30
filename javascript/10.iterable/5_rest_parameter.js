/**
 * Rest Parameter : 파라미터 인자를 배열로 저장
 * - 함수의 매개변수에 정의함
 * - function 함수명 (...rest parameter) {}
 * - contst 함수명 = (...rest parameter) => {}
 */

function add (a, b, ...numbers) {
    let sum = numbers.reduce((acc, cur) => acc+cur);
    console.log(a, b, numbers, sum);
    return a + b + sum;
}

const fadd = (f1, ...fruits) => {
    fruits.push(f1);
    return fruits;
}

add(1, 2, 3, 4, 5);
add(1, 2, 3, 4, 5, 456, 72, 33);
console.log(add(1, 2, 3, 4, 5, 456, 72, 33));

let fruits = ['🍎','🍇','🍊'];
let newFruits = fadd('🍋', ...fruits);
console.log(newFruits);

