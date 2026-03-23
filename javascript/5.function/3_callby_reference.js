/**
 * 함수는 객체(Object)로 Heap에 저장된다
 * 일반적인 함수 형식(function)로 선언되면, 호이스팅 되어 전역으로 맨 먼저 힙에 저장
 */
import { toNumber } from "../commons/utills.js";

function add (num1, num2) {
    let obj = toNumber(num1, num2);
    console.log(`sum = ${obj.num1 + obj.num2}`);
}

add(100,200);

let add2 = add; // call by reference

add2('2932', 100);