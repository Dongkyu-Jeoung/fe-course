/**
 * String 문자열 클래스
 * - character를 하나씩 배열에 저장
 * - split(), slice(), chatAt(), toUpperCase()...
 */

let str = '홍길동';
let strObj = new String('홍길동');

console.log(str, typeof str);
console.log(strObj, typeof strObj);

let str2 = 'Hello~ JavaScript!!';
console.log('str2.length = ', str2.length);

// 문자열 7번째 index 문자 출력
console.log(str2[7]);
console.log(str2.charAt(7));

console.log(str2.toUpperCase());
console.log(str2.toLowerCase());

console.log(str2.concat(', React Programming!!'));
console.log(str2 + ', React Programming!!');

let str3 = '           Hello~ React Programming               ';
console.log(str3.trim());    // 앞뒤 공백 삭제
console.log(str3.trimEnd());
console.log(str3.trimStart());

//문자열을 구분자를 이용하여 배열객체로 생성
let fruits = 'apple, lemon, orange';
let fruitsList = fruits.split(', ');
console.log(fruitsList, typeof fruitsList);

// 문자열 추출 - substring(), slice()
let str4 = 'Hello~ JavaScript!!';
console.log(str4.substring(0, 5));     // 0~4 index 출력
console.log(str4.slice(0,5));          // 0~4 index 출력

