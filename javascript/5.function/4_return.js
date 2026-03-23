/**
 * return : 함수 실행 결과를 반환 키워드
 * 반환 결과가 1개 -> 변수
 * 반환 결과가 1개 이상 -> 객체
 */

function add1 () {
    return 1+2;
}

let result = add1();
console.log(result);

function createObj (name, age) {
    return {name : name, age : age}
}


let hong = createObj('홍길동', 30)
console.log(hong.name);
console.log(hong.age);

//홍길동, 이순신, 김유신 객체를 배열에 저장 출력
let objList = [
    createObj('홍길동', 30),
    createObj('이순신', 40),
    createObj('김유신', 50)
];

console.log(objList);

for (i=0; i<objList.length ; i++) {
    let cur = objList[i];
    console.log(`name = ${cur.name}`);
    console.log(`age = ${cur.age}`);
    
}

