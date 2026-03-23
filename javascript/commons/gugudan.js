// 싱글 구구단 정의
export function singleGugudan(dan) {
    console.log(`[구구단 ${dan}단]`);
    
    for (let i=1; i<10; i++) {
        console.log(`${dan} x ${i} = ${dan * i}`);
    }
    console.log();
}

// 멀티 구구단 정의
export function mutltiGugudan(dan1, dan2) {
    for (let i = 1; i <= 9 ; i++) {
        let rows = ''
        for (let j=dan1 ; j <= dan2 ; j++) {
            rows += `${j} x ${i} = ${j * i}\t`
        }
        console.log(rows);
    }
}