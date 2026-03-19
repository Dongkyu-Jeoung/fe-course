/**
 * 제어문 : 반복 실행
 * - for : 정확한 반복 횟수를 알고 있을 때
 * - while : 종료 시점을 알고 있는 경우
 * 
 *  for( 초기값 ; 조건절 ; 증가값 ) {
 *      실행문;
 *   }
 * - 초기값 선언시 키워드는 let으로 정의 (계속 증가 해야함)
 */

// 1부터 10까지 출력
for (let i = 1; i < 11; i++) {
    console.log(`i= ${i}`);
}

// 숫자 배열을 생성하고 내용을 출력
const numbers = [1,2,3,4,5];
for (let i=0 ; i < numbers.length ; i++) {
    console.log(`numbers[${i}] : ${numbers[i]}`);
}

// 과일이 레몬이면 이모지 출력
let fruits = ['apple','orange','lemon','mango','banana'];
let emojis = ['🍎','🍊','🍋','🥭','🍌'];
let result = undefined;

for (let i=0; i<fruits.length; i++){
    if (fruits[i]=='lemon') {
        result = emojis[i];
        break;
    }
}
console.log(result);
