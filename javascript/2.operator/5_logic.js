/**
 * 논리 연산자 : &&(AND), ||(OR)
 * 
 * 논리식1(boolean) && 논리식2(boolean) = 결과값(boolean)
 *  - 둘다 true일 때만 -> true
 * 
 * 논리식1(boolean) || 논리식2(boolean) = 결과값(boolean)
 * - 둘 중 하나라도 true이면 -> true
 */

let a = 3;
let b = 7;

console.log('----- && : AND 연산 ------');
console.log( (a > b) && (a < b) ); // 논리식 1 : false , 논리식 2 : true
console.log( (a !== b) && (a < b) ); // 논리식 1 : true , 논리식 2 : true


console.log('----- || : OR 연산 ------');
console.log( (a > b) || (a < b) ); // 논리식 1 : false , 논리식 2 : true
console.log( (a == b) || (a > b) ); // 논리식 1 : false , 논리식 2 : false
