/**
 * Date 클래스 - 날짜 형식을 지원하는 클래스
 * - new Date() 클래스 생성 후, 생성된 객체의 메소드를 호출
 * - getFullYear(), getMonth(), getDay()...
 */

let date = new Date();
let date2 = Date.now();     // static method, 현재 날짜 가져옴
let year = date.getFullYear();
let month = date.getMonth() + 1;         // 2000년 전에 만든거라 +1 해야 맞는다 함
let day = date.getDate();
let yoyil = date.getDay();              // 0이 일요일 ~ (요일 표시)


console.log(date);
console.log(year, month, day);
console.log(date2);

console.log(date.toLocaleDateString('ko-KR'));
console.log(date.toLocaleDateString('en-US'));
