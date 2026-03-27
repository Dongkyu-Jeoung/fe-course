/**
 * Iterable(순회) Object : Iteration Protocol을 준수하는 객체
 * - for .. of 구문
 * - String, Array, Set, Map
 * - ...(Spread Operator, 스프레드 연산자) : 블록안에서 객체의 데이터를 전개
 * - ...(Rest Parameter) : 매개변수 모든 값을 배열로 저장
 * - ...(Destructuring Object, 구조분해 할당) : 객체를 분해한 후 변수에 할당
 */

//String 객체 생성 후 for .. of 구문 사용
let strList = new String('Hello~ JavaScript!!');
for(let str of strList) {
    // console.log(str);
}

// Array 객체 생성 후 for .. of 사용
let numbers = new Array(1,2,3,4,5);
for(num of numbers) {
    // console.log(num);
}

//forEach
// numbers.forEach((val) => console.log(val))

//find , findIndex
let findnum = numbers.find((val) => val === 3);
console.log(findnum);

let findIndex = numbers.findIndex((val) => val === 3);
console.log(findIndex);

// filter - 짝수만 반환
let evenNum = numbers.filter((val) => val%2 ===0);
console.log(evenNum);

// map - 모든 요소에 10 더함
let addNum = numbers.map((val) => val + 10);
console.log(addNum);

