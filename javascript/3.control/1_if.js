/**
 * 단일 if,
 * if .. else..,
 * if(조건절1) .. else if(조건절2) .. else if(조건절3) .. else..
 * 
 * 삼항 연산자 : (조건절)? statement1 : statement2 ;
 * - 조건절이 true이면 statement1, false이면 statement2
 */

// 입력되는 과일이름이 'apple'인 경우에만 이모지 출력
let frame = undefined;
frame = {
    name: 'apple',
    emoji: '🍎'
};

if (frame.name == 'apple') {
    console.log(frame.emoji);
} else {
    console.log('❌');
};


(frame.name == 'apple')? console.log(frame.emoji) : console.log('❌');

let result = (frame.name == 'apple')? frame.emoji : '❌';
console.log('과일 이모지: ', result);

// 입력받은 숫자가 홀수이면 사과, 짝수이면 오렌지 출력

let num = 156;

if (num % 2 == 0) {
    console.log('orange');
} else {
    console.log('apple');
}

// 조건식의 결과가 0, 1 이면 자동으로 false, true (boolean)으로 변환
if (!(num%2)) {                       // num%2가 짝수일때는 0 -> false로 인식
    console.log('orange');
} else {
    console.log('apple');
}

let fresult = (!(num%2))? 'orange' : 'apple';
console.log(`실행결과: ${fresult}`);





let fruitList = ['apple', 'orange', 'tomato'];
let a = 0 ;

while (a < fruitList.length) {
    // console.log(a);  
    if (fruitList[a] == 'orange') {
        console.log('🍊');
    } else {
        console.log('🥢');
    }
    a++;
};
