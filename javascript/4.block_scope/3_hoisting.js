/**
 * 호이스팅(Hoisting) : 파일이 호출되면 실행 전 function 키워드의 함수들을
 *                      객체로 미리 메모리에 생성하는 작업
 */

test1();
test2();


// test1, test2 함수는 호이스팅 되므로 호출 시 정상 실행
function test1 () {
    console.log(`-----> test1`);
}

function test2 () {
    console.log(`-----> test2`);
}

// ES6 기준의 let, const로 정의된 함수(arrow func...)는 호이스팅 되지 않음!
//  반드시 함수 선언 -> 호출 순서로 이뤄지도록 해야함 (안그러면 Reference Error)

const test3 = () => {
    console.log(`------> test3`);
}

test3();