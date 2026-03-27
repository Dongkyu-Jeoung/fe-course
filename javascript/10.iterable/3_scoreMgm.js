/**
 * 성적관리 프로그램
 */

function createList () {
    return new Array();        // return [];
}

// 객체 생성 후 list에 push
function createScore(list, name, kor, eng, math) {
    list.push({name, kor, eng, math});         // property명, 매개변수 이름 같을 때 생략가능
}

// search 함수 : 학생이름을 입력하면 정보(객체) 출력
function searchName(arr, name) {
    return arr.find( val => val.name === name );
}

// 과목, 점수 입력 -> 해당 과목의 점수가 입력 점수 이상인 객체 반환
function searchScore (list, subject, score) {
    return list.filter(val => val[subject] >= score);   // property명이 매개변수로 들어오기 때문에 []로 감싸야함
}

// 특정 과목 점수 수정
function updateScore (list, subject, score) {
    // spread 연산자 (...)  : 객체에서 다른건 가만히 두고 하나만 바꾸려고 할때
    let updateList = list.map ( val => {
        if(val[subject] < 100 && (val[subject]+5) < 100) {
            return {...val, [subject] : val[subject] + score} ;
        } else {
            return val;
        }
    })
    return updateList;
    // return list.map( val => (val[subject] < 100) ? {...val, [subject] : val[subject] + score } : val );
}


let scoreList = createList();
createScore(scoreList, '홍길동', 100, 100, 100);
createScore(scoreList, '스미스', 80, 50, 98);
createScore(scoreList, '이순신', 100, 60, 70);
createScore(scoreList, '제임스', 90, 70, 33);

// 학생이름 검색
console.log('searchName ::', searchName(scoreList, '제임스'));

// 국어 점수가 90점 이상인 학생 조회
console.log('searchScore1 ::', searchScore(scoreList, 'kor', 90));
console.log('searchScore2 ::', searchScore(scoreList, 'eng', 70));

// 모든 학생의 수학 점수에 +5
console.log('updateScore ::',updateScore(scoreList, 'math', 5));


// console.log(scoreList);
