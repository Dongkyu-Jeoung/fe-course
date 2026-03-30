/**
 * Spread Operator(전개 구문)
 * - 객체가 가지고 있는 요소를 펼쳐 놓음
 * - iterable object, object literal
 * - 함수 호출 : 예) myFunction(...객체명);
 */

// 배열 객체를 복사 :: shallow copy
let numbers = [1, 2, 3, 4, 5];
let copyNumbers = [...numbers];
let concatNumbers = [...numbers, 100, ...copyNumbers];

console.log(concatNumbers);

// 오브젝트 리터럴 복사
let fruit = {
    name : 'apple',
    emoji : '🍎'
}
let copyFruit = {...fruit};
let updateFruit = {
    ...fruit,
    color : 'red'
}
console.log(copyFruit);
console.log(updateFruit);

let list = [
    {...fruit},
    {...copyFruit},
    {...updateFruit}
]

console.log(list);


