/*
    call by reference : 데이터 중복 시 주소 복제
    - 값이 Heap에 저장되어 있는 경우
*/

let name1 = '홍길동';
let name2 = name1;
let name3 = new String('홍길동');

console.log(name1, typeof name1);
console.log(name2, typeof name2);
console.log(name3, typeof name3);
console.log(name3.valueOf());

console.log(name1 === name2);
console.log(name1 === name3);

let nlist = [1, 2, 3, 4, 5];
let nlist2 = nlist; // call by reference : nlist가 참조하는 주소를 nlist2에 저장
let person = {
    name: '홍길동',
    age: 30
};
let person2 = person;

console.log(nlist, typeof nlist);
console.log(nlist2, typeof nlist2);
console.log(nlist === nlist2);

person2.name = '이순신'; // person2의 name을 변경
console.log(person.name, person2.name);  // call by reference로 진행하기 때문에 person도 바뀜



