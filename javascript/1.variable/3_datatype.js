/*
    Primitive Data Type(원시형 데이터 타입)
    - 정수형(Integer) : 100,200, ... (64bit : -2^31 ~ 2^31 - 1)
    - 실수형(Float, Double) : 3.14 ...
    - 문자형(Character(String) : '',"") : '홍길동', "이순신", ...
    - 불린형(Boolean) : true(1), false(0)

    Reference Data Type(참조형 데이터 타입)
    - 객체형(Object, {}), 배열(Array, []), 클래스(Class), JSON(객체형, 배열 모두 포함)
*/

//1. 정수형
let inumber1 = 2**31-1;
let inumber2 = 2**31;
console.log(inumber1);
console.log(inumber2);

//2. 실수형
let fnumber = 1234.1234567;
console.log(fnumber);

//3. 문자형
let name = '홍길동';
console.log(name);

//4. boolean
let flag = true;
console.log(flag);

//5. 배열
let nameArray = ['홍길동', '이순신', '김유신'];
console.log(nameArray);

//6. 객체
let obj = {
    'name' : '홍길동',
    'age' : 30
};
console.log(obj);

//7. JSON
let jsonObj = {
    'name':'홍길동',
    'score': [100, 95, 90]
};
console.log(jsonObj);

//8.초기화 값, 객체
let x = undefined; //Primitive Type 초기화
let xy = null; // Reference Type 초기화

//9. typeof : 데이터 타입
let xx = 10;
let xxx = 10.2;
let yy = '10';
let oo = {'name':'object'};

console.log(xx, typeof xx);
console.log(yy, typeof yy);
console.log(oo, typeof oo);

// 데이터 타입이 달라도 type을 맞춰서 같으면 true
console.log(xx == yy);
// data type만 비교하면 다름, false
console.log(typeof xx == typeof yy);
// === <- 이거는 값, type 둘다 일치해야 true
console.log(xx === yy);







