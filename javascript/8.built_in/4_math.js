/**
 * Math 클래스 - 모든 메소드와 속성이 static으로 정의되어 있음
 * - 호출 : Math.메소드명(), Method.속성
 */

let a = 1234.56784;
let b = -153;

console.log(`Math.abs(value) :: ${Math.abs(b)}`);
console.log(`Math.floor(value) :: ${Math.floor(a)}`); // 소수점 버림
console.log(`Math.trunc(value) :: ${Math.trunc(a)}`); 
console.log(`Math.ceil(value) :: ${Math.ceil(a)}`); 
console.log(`Math.round(value) :: ${Math.round(a)}`);

console.log(`Math.max(value) :: ${Math.max(1,2,3,4,5)}`);
console.log(`Math.min(value) :: ${Math.min(1,2,3,4,5)}`);
console.log(`Math.random() :: ${Math.random()}`);     // 0~1 사이의 값이 임의로 출력



// 1~100 사이의 숫자를 임의로 생성
console.log(randNum());

function randNum() {
    let num = Math.random();
    num *= 100;
    return Math.round(num);
}

