/**
 * Destructure object : 구조분해 할당
 * - 객체의 구조를 분해하여 변수에 자동으로 할당
 */


// 1. 배열 객체
let numbers = [1, 2, 3, 4, 5];
let [a, b, ...nlist] = numbers;
console.log(a,b, nlist);



// 2. 오브젝트 리터럴
let hong = {
    name : '홍길동',
    age : 30,
    job : '개발자'
}
let {name, age, job} = hong;
console.log(name, age, job);

// 오브젝트 리터럴을 반환하는 함수
const createObj = () => {
    return {
        name : 'apple',
        color : 'red',
        emoji : '🍎'
    };
}

// let {c, d ,e} = createObj();     // property명과 다르게 줬더니 구조분해 할당 안됨
// console.log(c, d, e);


