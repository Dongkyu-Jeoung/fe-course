/**
 * try .. catch .. finally : 자바 스크립트에서 예외를 처리하는 구문
 *  - finally : 예외 발생에 상관없이 무조건 출력되는 구문
 */

let numbers2 = new Number(12345);

try {
    for (const number of numbers2) {
       console.log(number);
    }    
} catch (error) {
    console.log('error --------->\n', error);
}


let numbers3 = new String('12345');

try {
    for (const number of numbers3) {
       console.log(number);
    }    
} catch (error) {
    console.log('error --------->\n', error);
} finally {
    console.log('number3 실습 -----------');
}

