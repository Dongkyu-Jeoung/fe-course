/**
 * 생성자 함수를 통한 객체 생성
 * - 객체의 틀을 이용하여 다수의 객체 생성하는 함수
 */


// Object Literal
// const fruit = {
//     name : 'apple',
//     emoji : '🍎'
// }

// 생성자 함수로 생성되는 객체 틀 정의
// 사과, 레몬, 오렌지 => name, color, emoji (공통 property)
function Fruit(name, color, emoji) {
    this.name = name;
    this.color = color;
    this.emoji = emoji;

    this.display = () => {
        console.log(this.name, this.color, this.emoji);
    }
}

let apple = new Fruit('apple', 'red', '🍎');
let orange = new Fruit('orange', 'orange', '🍊');
let lemon = new Fruit('lemon', 'yellow', '🍋');

apple.display();
orange.display();
lemon.display();


// 학생 성적 리스트 관리
// 홍길동, 스미스, 이순신, 김유신, 제임스
// name, kor, eng, math
function Score(name, kor, eng, math) {
    this.name = name;
    this.kor = kor;
    this.eng = eng;
    this.math = math;

    this.display = () => {
        console.log(this.name, this.kor, this.eng, this.math);
    }
    this.sum = () => {
        return this.kor + this.eng + this.math;
    }
    this.avg = () => {
        return parseInt(this.sum() / 3);
    }
}

// 성적 리스트 객체 생성 함수
function createScoreList (st1, st2, st3, st4, st5) {
    return {st1, st2, st3, st4, st5};
}

let hong = new Score('홍길동', 90, 95, 97);
let smith = new Score('smith', 92, 93, 93);
let lee = new Score('이순신', 97, 78, 92);
let kim = new Score('김유신', 93, 21, 45);
let james = new Score('james', 100, 100, 50);

lee.display();

let scoreList = createScoreList(hong, smith, lee, kim, james);
// console.log(scoreList);

console.log(`${hong.name} 총점 / 평균 : ${hong.sum()} / ${hong.avg()}`);
console.log(`${smith.name} 총점 / 평균 : ${smith.sum()} / ${smith.avg()}`);

