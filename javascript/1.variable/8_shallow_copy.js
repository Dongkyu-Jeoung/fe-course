/**
 * shallow copy(얕은 복사) - Array.from(original)
 * - 객체의 얕은 복사는 복사본의 속성이 복사본이 만들어진 원본 객체와 같은 참조 
 *    (메모리 내의 같은 값을 가리킴)를 공유하는 복사입니다. 
 *    따라서 원본이나 복사본을 변경하면, 다른 객체 또한 변경될 수 있습니다.
 *    
 *    객체의 요소가 원시데이터 타입인 경우에는 독립적으로 관리되고,
 *    객체의 요소가 참조데이터 타입인 경우에는 주소가 공유된다.
 */

let fruits = ['apple', 'orange', 'lemon'];       // 1. 요소가 원시 데이터 타입
let fruitsCopy = Array.from(fruits);

console.log(fruits, typeof fruits);
console.log(fruitsCopy, typeof fruitsCopy);

fruitsCopy[0] = 'mango';                        //복사본 원본이 따로따로 움직임
fruits[0] = '🍎';
console.log();
console.log(fruits, typeof fruits);
console.log(fruitsCopy, typeof fruitsCopy);


let fruitsObj = [                                    //2 . 요소가 객체인 경우
    {name : 'apple', emoji : '🍎'},
    {name : 'orange', emoji : '🍊'},
    {name : 'lemon', emoji : '🍋'}
]
let fruitsObjCopy = Array.from(fruitsObj);
console.log(fruitsObj, typeof fruitsObj);
console.log(fruitsObjCopy, typeof fruitsObjCopy);

fruitsObjCopy[0].emoji = '🍈';           //복사본을 바꾸니까 원본도 바뀜 (객체의 주소가 공유)
console.log(fruitsObj, typeof fruitsObj);
console.log(fruitsObjCopy, typeof fruitsObjCopy);
