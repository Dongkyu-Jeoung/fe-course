/**
 * 배열 객체에서 필터링을 진행한 후 shallow copy(얕은 복사) 진행 후 리턴
 * - 배열객체.filter(callback)
 */

let strList = ['hong', 'smith', 'lee', 'james'];
let fruits = [
    {name : 'apple', emoji : '🍎'},
    {name : 'orange', emoji : '🍊'},
    {name : 'bannana', emoji : '🍌'}
]

//이름이 4글자 이상인 사람 출력
let find = strList.filter( (val) => val.length >=4 );
console.log(find);

// fruits 객체에서 orange 객체 출력
let findFruit = fruits.filter( (val) => val.name === 'orange' )
console.log(findFruit);          // filter 결과물은 list안에 들어간다.
console.log(findFruit[0].name);
console.log(findFruit[0].emoji);