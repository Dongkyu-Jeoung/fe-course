/**
 * 함수 생성 및 호출
 */
import { toNumber } from "../commons/utills.js";

// 두 수를 입력하여 합계를 출력

// 호이스팅(Hoisting)되어 add함수 호출 전 메모리에 저장
function add(num1, num2) {
    sum = parseInt(num1) + parseInt(num2)
    console.log(`sum = ${sum}`);
}

let a = '101';
let b = 153;

add (a,b);
add (277, 133);

// arrow function
// 호이스팅이 안돼서 함수 선언 전에 호출이 일어나면 error
const add1 = (num1, num2) => {
    let obj = toNumber(num1, num2)  // {num1 : parseInt(num1), num2 : parseInt(num2)}
    console.log(`sum = ${obj.num1 + obj.num2}`);
}

add1 (a,b);
add1 (123, 245);

