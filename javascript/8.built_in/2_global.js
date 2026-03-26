/**
 * 전역 함수로 최상위 객체인 Window 객체에서 호출되는 함수
 * - 호출방법 : window.함수명
 * - 객체명을 생략 가능
 * - alert(), confirm(), parseInt() ...
 */

let number = '123.4567';
let intNum = Number.parseInt(number);
let intNum2 = parseInt(number);
console.log('number :', number, typeof number);
console.log('intNumber :', intNum, typeof intNum);
console.log('intNumber2 :', intNum2, typeof intNum2);

// URI 주소 인코딩, 디코딩
let uri = 'http://www.naver.com?name=홍길동';
let encodeUri = encodeURI(uri);
let decodeUri = decodeURI(encodeUri);

console.log(uri);
console.log(encodeUri);
console.log(decodeUri);
