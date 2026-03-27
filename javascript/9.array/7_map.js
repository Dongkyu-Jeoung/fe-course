/**
 * 배열의 모든 요소를 순회하며 callback 함수 적용 -> 새로운 배열 생성 (기존 배열 변화X)
 * - 배열객체.map(callback)
 */

let numbers = [1,2,3,4,5,6,7,8,9,10];

// numbers의 모든 요소에 x100
let newNumbers = numbers.map((val) => val * 100);
console.log(newNumbers);

let fnumbers = [1.123, 2.345, 3.7846];

// fnumbers의 모든 요소를 정수로 변환
let newFnumbers = fnumbers.map((val)=> Math.round(val));
console.log(newFnumbers);
