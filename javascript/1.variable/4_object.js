/*
    참조 데이터 타입 : 객체 (Object)
    - 객체(Object) : { 'property' : data, 'property' : data, ... }
    - 배열(Array) : [데이터, 데이터, ...]
*/
// 객체 타입을 넣으려고 할 때, null을 사용
let apple = null;
apple = {
    // 'name' : 'apple',
    // 'color' : 'red',
    // 'emoji' : '😀'
    name : 'apple',
    color : 'red',
    emoji : '😀'
};
console.log(apple.name);
console.log(apple['color']);

let orange = {
    name : 'orange',
    color : 'orange',
    price : 1000,
    emoji : '😁'
};
console.log(orange);
console.log(typeof orange);
console.log(orange.name);
console.log(orange.color);
console.log(orange.price);
console.log(orange.emoji);


let fruitList = null;
fruitList = ['apple', '😀', 100, true]; // 다양한 데이터 타입 저장 가능, 권장 X
console.log(fruitList);
console.log(fruitList[0]);
console.log(fruitList.length);

// 객체 타입을 요소로 하는 배열 생성
let fruitListObj = null;
fruitListObj = [apple, orange];
console.log(fruitListObj);
console.log(fruitListObj[0]);
console.log(fruitListObj[0].name);
console.log(fruitListObj[1].emoji);

