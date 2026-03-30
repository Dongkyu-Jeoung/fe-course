/**
 * Set : 다양한 데이터 저장
 * - add() : 데이터 추가
 * - has() : 데이터 체크
 * - delete() : 데이터 삭제
 * - 중복된 데이터는 자동 필터링
 */

let mySet = new Set();
mySet.add(100);
mySet.add('홍길동');
mySet.add({name : 'apple'});
mySet.add([1,2,3,4,5]);
mySet.add('100');
console.log(mySet);


// 데이터 출력
for(item of mySet) {
    if (item == '홍길동') console.log(item);
    else console.log('아님');
}


// 홍길동이 존재하면 삭제
if (mySet.has('홍길동')) {
    mySet.delete('홍길동');
}
console.log(mySet);


// 모든 요소 삭제
mySet.clear();
console.log(mySet);