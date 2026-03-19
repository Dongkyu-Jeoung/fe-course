/**
 * 비교연산자 : >, <, >=, <=, ==, ===
 * - 결과값은 boolean type
 * - 제어문의 조건 비교시 사용 if, while 등 같이 사용
 */

let a = 3;
let b = 7;

console.log(a > b);
console.log(a < b);

while (a < b) {
    console.log(a, b);
    a++
}

if (a<b) {
    console.log(a + b);
} else {
    console.log(a - b);
}

console.log();


const obj1 = {name : '홍길동', age : 30}
const obj2 = {name : '홍길동', age : '30'}
console.log(obj1 == obj2);  // 저장된 주소값이 다르기 때문에 false
console.log(obj1.name == obj2.name);
console.log(obj1.age == obj2.age);
console.log(obj1.age === obj2.age);

