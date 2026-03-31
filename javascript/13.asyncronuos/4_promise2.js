/**
 * async / await
 * - 비동기식 로직의 순차적인 순서를 보장하는 키워드
 * - async는 await를 포함한 함수 앞에 붙임
 * - await는 실행되는 비동기 객체 앞에 붙임
 */


async function promiseTest () {
    let dataArray = null;

    // Promise 객체 생성
    let promise1 = new Promise((resolve, reject) => {
        let numbers = [1, 2, 3, 4, 5];
        resolve(numbers);
    });

    await promise1            // 비동기 처리를 미루지 않고 먼저 하고 넘어가게 만듬
        .then(result => {
            // console.log('result =>', result);
            dataArray = result;
        })
        .catch(error => {console.log('error =>', error);});

    console.log('dataArray =', dataArray);
}

promiseTest();