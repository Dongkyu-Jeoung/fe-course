import {
    getObjects, createObject, Fruit, setValue, deleteValue
} from "../commons/object.js"

// store 생성
let store = getObjects();

// 과일 생성
let apple = new Fruit('apple', '🍎');
let lemon = new Fruit('lemon', '🍋');

// store에 등록
setValue(store, 'apple', apple);
setValue(store, 'lemon', lemon);

// store에서 삭제
deleteValue(store, 'apple');

console.log(store);
// console.log(apple);
