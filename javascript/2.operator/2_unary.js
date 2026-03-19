/*
    단항 연산자 : ++, --, !, !!
*/

let a = 10;
let b = 10;

console.log(++a); // 전위, 11 (출력 전 1 증가)
console.log(a);
console.log(a++); // 후위, 11 (출력 후 1 증가)
console.log(a);
console.log();

console.log(b--);
console.log(b);
console.log(--b);
console.log();

let flag = true;
console.log(!flag); // 'Not' -> 반대값
console.log(flag); // 저장되어있는 값을 바꾸지는 않음
console.log(!!flag); // 부정 2번 -> 제자리 : true

