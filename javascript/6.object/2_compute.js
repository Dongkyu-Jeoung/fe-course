import { setValue, getValue, updateValue, deleteValue} 
    from "../commons/object.js";

const person = {
    name : '홍길동',
    age : 30
}

const apple = {
    name : 'apple'
}

// 1. property, value 추가
setValue (person, 'address', '서울시 강남구');
setValue (person, 'job', 'software engineer');
setValue (apple, 'emoji', '🍎');

// 2. property, value 가져오기
let person_name = getValue(person, 'name');
console.log(person_name);

// 3. property 값 업데이트
updateValue(apple, 'emoji', '🍏');
console.log(getValue(apple, 'emoji'));

// 4. 값 삭제
deleteValue(apple, 'emoji');
console.log(apple);
