/**
 * const : 상수 선언 시 사용
 * - 정의된 상수에 데이터 재할당 불가
 */

const person = {
    name:'홍길동',
    age: 30
}
let name1 = '강감찬';

person2 = person;
person2.name = name1;
console.log(person, person2);
