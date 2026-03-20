/**
 * 반복문을 강제 종료하는 방법
 * - break : break를 만나면 바로 종료
 * - 조건식 : false 조건으로 만듬, break 보다 한번 더 조건 체크
 */

for (let i = 1; i <= 10; i++){
    console.log(`i = ${i}`);    
    if (i==7) {break;}
}

console.log();

for (let i = 1; i <= 10; i++){
    console.log(`i = ${i}`);    
    if (i==7) {i = 11;}
}