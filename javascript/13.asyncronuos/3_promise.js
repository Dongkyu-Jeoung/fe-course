/**
 * 비동기 로직(미래의 작업)을 구현하는 객체
 * - resolve : 작업 성공시 반환
 * - reject : 작업 실패시 반환
 * - Promise 객체 생성
 * 예)  const 프로미스객체 = new Promise((resolve, reject) => { 비동기 로직(미래의 작업) });
 * - Promise 객체 호출
 * 예)  프로미스객체.then(성공시 callback).catch(실패시 callback);
 */

// Promise 객체 생성
const promise = new Promise((resolve, reject) => {
    // 비동기 로직 (미래의 작업)
    let success = false;
    if(success) {
        resolve('성공!');
    } else {
        reject('실패!');
    }
});

console.log(`promise 객체 호출 -------------->`);


promise
    .then( result => console.log(result) )
    .catch( error => console.log(error) );

console.log(`프로그램 종료 -------------->`);

