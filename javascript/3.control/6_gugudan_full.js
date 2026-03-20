/**
 * 2단 ~ 9단 까지 출력
 */
let start = 2;    // 구구단 2단부터
let end = 10;      // 구구단 9단 까지

let output_txt = '';

for(let k=start; k<end; k++) {    
    output_txt = output_txt + `${k}단\t\t`;
}
console.log(output_txt);

for (let i = 1; i < 10; i++ ) {
    let output = '';
    for (j=start; j<end; j++){
        output = output + `${j} x ${i} = ${j*i}\t`;
        // output += `${j} x ${i} = ${j*i}\t`;
    };
    console.log(output);
}

// 별찍기
for (i=1;i<6;i++){
    let star = '';
    // for(j=1;j<i+1;j++){
    //     star += `*\t`
    // }
    star += '*'.repeat(i);               // i번 별을 추가
    console.log(star);
}



// 삼각형으로 초록색 사과 찍기
// 세번째 줄만 빨간색 사과로 출력
for (i=1;i<6;i++){
    let star = '';
    for(j=1;j<i+1;j++){
        if (i==3) {
            star += `🍎\t`
        } else {
            star += `🍏\t`
        }
    }
    console.log(star);
}

// 정삼각형 별찍기 - repeat

let size = 10;

for (i=1 ; i<=size ; i++){
    let output = '';
    output += ' '.repeat(size-i) + '🍕'.repeat(i);
    console.log(output);
}
for (i=size-1 ; i>0 ; i--) {
    let output = '';
    output += ' '.repeat(size-i) + '🍕'.repeat(i);
    console.log(output);
}