/**
 * find : 배열에서 검색하려는 첫번째 요소를 반환, 없으면 undefined 반환
 * - 배열객체.find(callback)
 * 
 * findIndex : 배열에서 검색하는 요소의 인덱스 반환
 * - 배열객체.findIndex(callback)
 */

let fruits = new Array('🥭', '🍑', '🍓', '🍒','🍏');

// 만족하는 값 찾기
let findObj = fruits.find( (val) => val === '🍓' );
console.log(findObj);

// 만족하는 index 값 찾기
let findIdx = fruits.findIndex( (val) => val === '🍓' );
console.log(findIdx);