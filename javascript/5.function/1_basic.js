/**
 * 함수 - 기능을 구현하고 있는 JS 객체
 * 
 * 1. 일반적인 함수 정의 방법
 *  function 함수명 (parameter) {
 *      실행코드;
 *      return 반환값;
 *  }
 * 
 * 2. 화살표 함수(Arrow Function) 정의
 *  const 함수명 = (parameter) => {
 *      실행코드;
 *      return 반환값;
 *  }
 * 
 *  3. JS 엔진에는 내장함수(Built-in)가 포함되어 있음
 *      - parseInt(), parseDouble() ...
 * 
 *  4. 함수 호출 : 함수명(parameter);
 */

function test () {
    console.log(`test!`);
}

const test2 = () => {
    console.log(`test2!`);
}

// parseInt() : 문자열 -> 정수로 반환
let str = '100';
let str2 = '100.1234';
let inum = parseInt(str);
console.log(inum);
let inum2 = parseInt(str2);
console.log(inum2);
