/**
 * 중복된 배열 객체를 입력받아, 중복을 제거한 후 출력하는 함수 생성
 */

function filter (arr) {
    return new Set(arr);         // iterable 객체를 받아서 set으로 전환
}

let numbers = [1,2,3,4,5,6,5,4,3,2,1];
console.log(numbers);
console.log(filter(numbers));

let newNumbers = new Array(...filter(numbers));      // array는 iterable 객체를 받아서 변환 X
console.log(newNumbers);

/**
 * 구조 분해 할당
 */
const getObj1 = () => {
    return {
        name : '홍길동',
        age : 30,
        job : '개발자',
        address : '서울시'
    }
}

const getObj2 = () => {
    return [1, 2, 3, 4, 5];
}

let {name, age, job, address} = getObj1();
let [a, b, c, d, e] = getObj2();
console.log(name, age, job, address);
console.log(a,b,c,d,e);

// textList를 입력받아, 3글자 이상의 text이면 새로운 배열 생성
const textFilter = (textList) => {
    return textList.filter(item => item.length >= 3)
}
const textFilter2 = (textList) => {
    return textList.filter(item => item.length < 3)
}
let result = textFilter(['javascript', 'react', 'html', 'css', 'a', 'ab']);
let result2 = textFilter2(['javascript', 'react', 'html', 'css', 'a', 'ab']);

console.log(result);
console.log(result2);

