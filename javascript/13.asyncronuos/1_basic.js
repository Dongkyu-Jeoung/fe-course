/**
 * 동기식(sync) vs 비동기식(async)
 * 1) 동기식
 * - 순차적으로 한번에 하나씩 작업 실행
 * - 코드 실행 > call stack > 바로 처리
 * 
 * 2) 비동기식
 * - 대량의 작업을 모아서, 나중에 처리 (call stack이 비어있을 때)
 * - 코드 실행 > call stack > Web API(크롬), Background(NodeJS) 영역에 저장
 *      > Task Queue 순차적으로 저장
 *      > call stack이 비어있으면 ...
 *      > Event Loop 객체가 Task Queue에 있는 작업들을 call stack으로 보냄
 *      > call stack 작업 처리 후 종료
 * - setTimeout(), fetch(), axios(), DB 연동, 파일 I/O, ... 
 */

function a() {
    b();     // return address (복귀 주소) 저장
    setTimeout(() => {console.log(`Task Queue에 바로 저장`)});
    console.log(`-------------> a`);
}
function b() {
    setTimeout(() => {console.log(`Task Queue에 1초 후에 저장`)}, 1000);
    console.log(`-------------> b`);
}
function c() {
    a();    // return address (복귀 주소)
    console.log(`-------------> c`);
}

c();