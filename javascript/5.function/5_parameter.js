/**
 * 함수호출 --> 파라미터 (인자, 입력되는 값) --> 함수의 변수(지역)에 자동 매핑
 * 래스트 파라미터 (Rest Parameter) : '...'의 기호를 파라미터에 입력
 * - 래스트 파라미터로 입력되는 인자는 배열에 저장됨
 */

function add (...args) {
    let output = 0;
    for (i=0 ; i<args.length ; i++) {
        output += args[i];
    }


    // acc : 누적 (초기값 0) / cur : 현재 값
    // output = args.reduce((acc, cur) => acc + cur,0);

    return output;
}

console.log(add(1,2,3,4,5,6,7));

console.log(add2('홍길동', 20, 1, 2, 3, 4, 5));
// name, age는 순서대로 2개 받고, 뒤에 나오는 애들은 list로 받음
function add2 (name,age, ...args) {
    return {
        name : name,
        age : age,
        score : args.reduce((acc, cur) => acc + cur, 0)
    }
}
