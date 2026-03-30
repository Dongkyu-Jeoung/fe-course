/**
 * Map : key, value를 한쌍의 데이터로 가지는 객체
 * - set(key, value) : 데이터 추가
 * - get(key) : 데이터 반환
 * - has(key) : 데이터 체크 (true / false)
 * - delete(key) : 데이터 삭제
 *  */

let fruitsMap = new Map();
fruitsMap.set('lemon', '🍋');      // key, value
fruitsMap.set('apple', '🍎');      // key, value
fruitsMap.set('orange', '🍊');      // key, value
console.log(fruitsMap, typeof fruitsMap);

console.log(fruitsMap.get('orange'));     // key 값을 통한 value값 호출
console.log(fruitsMap.has('watermelon'));
(fruitsMap.get('grape')) ? console.log(fruitsMap.get('apple')) : console.log('준비중입니다.');


// 데이터 업데이트
// 기존의 없던 키값 사용시 데이터 추가 / 있는 키값에 set 사용 시 update
fruitsMap.set('apple', '🍏');
console.log(fruitsMap);

// 데이터 없으면 추가 있으면 삭제

(fruitsMap.has('orange')) ? fruitsMap.delete('orange') : fruitsMap.set('orange', '🍊');
console.log(fruitsMap);


// entries() : [key, value] 한쌍으로 묶어줌
let fruitsArray = fruitsMap.entries();
console.log(fruitsArray);
