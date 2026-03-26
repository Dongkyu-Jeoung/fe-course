/**
 * push(), pop(), ..
 */

let numbers = [1, 2, 3, 4, 5];
let fruits = new Array('🥭', '🍑', '🍓', '🍒');

// 1. 요소 추가 : push()
numbers.push(6);
fruits.push('🍓');

console.log(numbers);
console.log(fruits);

// 2. 요소 출력 : keys()
let itNumbers = numbers.keys()
console.log(itNumbers);
//for..of : 확장 for 문 - for 내부에서 index 관리
for (let key of itNumbers) {
    console.log(`key = ${key}`);
}

//3. 요소 삭제, pop(), slice()
//3.1 마지막 요소 삭제
console.log(fruits);
console.log(fruits.pop());       // pop에 인자를 안주면 마지막 요소를 제거하고 return
console.log(fruits);



//3.2 선택적 요소 삭제 및 교체
//splice(시작 인덱스, 개수, 교체 아이템)
console.log(fruits.splice(0, 2));
console.log(fruits);
console.log(fruits.splice(0, 1, '🍙'));   // index 0 부터 1개 빼서 return하고 대체
console.log(fruits);

//삭제 하지 않고 요소 추가
console.log(fruits.splice(0, 0, '🍉'));
console.log(fruits);


// 4. 요소 추출 : slice(시작인덱스, 종료인덱스) - 새로운 배열 객체 반환
console.log(numbers);
console.log(numbers.slice(0,3));
console.log(numbers);                // 원본 변화 없음

// 5. 얕은 복사 (shallow copy)
// - 배열의 요소가 원시데이터 타입이면 독립적으로 생성
// - 배열의 요소가 참조데이터 타입이면 주소를 공유 (원본도 바뀜)


// 배열의 요소가 원시데이터
const sfruit = ['🍈','🍊','🍉'];
const sfruitCopy1 = sfruit.slice(0, sfruit.length);
const sfruitCopy2 = Array.from(sfruit);
//sfruits의 0번지 과일을 딸기로 수정
sfruit[0] = '🍓';              // 원시 데이터 타입이라서 sfruit만 변경
console.log(sfruit);
console.log(sfruitCopy1);
console.log(sfruitCopy2);


// 배열의 요소가 객체
const sfruitObj = [
    {name : 'melon', emoji : '🍈'},
    {name : 'orange', emoji : '🍊'},
    {name : 'watermelon', emoji : '🍉'}
]
const sfruitObjCopy1 = sfruitObj.slice(0, sfruitObj.length);
const sfruitObjCopy2 = Array.from(sfruitObj);

sfruitObjCopy1[0].emoji = '🍓';           // 복사본1의 값을 바꾸니 원본, 복사본2 다 바뀜

console.log(sfruitObj);
console.log(sfruitObjCopy1);
console.log(sfruitObjCopy2);

// 6. concat : 배열 객체 결합
let arr1 = [1,2,3];
let arr2 = [4,5,6];

let arrConcat = arr1.concat(arr2);
console.log(arrConcat); 
console.log(arr1);                 // 기존배열 변경x 새 배열 return

// 7. join : 배열 객체를 구분자로 분리하여 문자열로 반환
// console.clear();
console.log(arrConcat); 

let strJoin = arrConcat.join(', ');        // default : ','
console.log(strJoin, typeof strJoin);

// 다시 배열로
let strJoinSplit = strJoin.split(', ');
console.log(strJoinSplit, typeof strJoinSplit);



