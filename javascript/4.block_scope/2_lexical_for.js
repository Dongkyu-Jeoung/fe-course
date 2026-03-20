
// 1~5까지 출력
for (let i = 0 ; i < 6 ; i++) {
    console.log(i);
    // console.log(j);  j는 하위 block에 선언된 지역변수라 출력 X
    
    for (let j = 10 ; j < 60 ; j+=10 ) {
        console.log(j);
    }
}

// fruits 배열 요소 출력
let fruits = ['🍇', '🍑', '🍓'];
for (let i = 0 ; i < 3 ; i++) {
    console.log(fruits[i]);
}