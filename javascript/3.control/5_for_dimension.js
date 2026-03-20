/**
 * 중첩 for 문
 *  for(초기값; 조건식; 증가값) {         // 행(row)
 *      for () {                       // 열 (col) 
 *          실행문;
 *      }
 *  }
 */

/*
    2행 3열의 테이블 생성 후 데이터 출력
    1(1,1)    2(1,2)   3(1,3)
    4(2,1)    5(2,2)   6(2,3)
*/

let count = 1;

for (let i=1; i<3; i++) {
    let output = '';
    for(let j=1; j<4; j++) {
        // console.log(`${count++}(${i},${j})`);
        // console.log는 무조건 한줄 찍고 넘어감 1열로 배치가 안됨
        output = output + `${count++}(${i},${j}) \t`;     // \t : tab 한번 누름
    }
    console.log(output);
}
