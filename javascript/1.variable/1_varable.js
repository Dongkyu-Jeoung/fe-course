/*
    ES6 기준의 문법형식 적용
    변수 : 데이터를 메모리에 저장하는 공간
    변수 선언하는 키워드 : var, let, const(상수)
    var를 사용하면 중복된 변수가 사용될 수 있어서 안씀
    let : 변수 선언, 선언한 데이터 수정 가능
    const : 상수 선언, 선언한 데이터 수정 불가능
    ---------------------------------------
    문법 : [변수선언 키워드 (let, const)] 변수명 = 데이터 ;
*/

let number = 100 ;
number = 10.125;
console.log(number);

const number2 = 101;
// number2 = 'hi';
console.log(number2);

const cname = '이순신';
console.log(cname);

let flag = true;
console.log(flag);

