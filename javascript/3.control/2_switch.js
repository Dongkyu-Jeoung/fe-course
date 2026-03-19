/**
 *  제어문 : 조건 분기
 *  switch (조건:숫자, 문자) {
 *      case 숫자, 문자 : 
 *          실행문 ; 
 *      break;
 *      case 숫자, 문자 : 
 *          실행문 ; 
 *      break;
 *      ..
 *      default : 실행문;          // 조건절에 해당하는 숫자, 문자가 없는 경우
 *  }
 */

// 선택한 숫자에 해당하는 요일을 출력
// 0:월 ~ 6:금
switch (4) {
    case 0 :
        console.log('월요일');
        break;
    case 1 :
        console.log('화요일');
        break;
    case 2 :
        console.log('수요일');
        break;
    case 3 :
        console.log('목요일');
        break;
    case 4 :
        console.log('금요일');
        break;
    case 5 :
        console.log('토요일');
        break;
    case 6 :
        console.log('일요일');
        break;
    default :
        console.log('요일을 선택해주세요.');
        break;
}


let a = 100;
let result = undefined;

switch (a%2) {
    case 0 :
        result = '짝수';
        break;
    case 1 :
        result = '홀수';
        break;
}
console.log(`${a}은 ${result}입니다.`);
