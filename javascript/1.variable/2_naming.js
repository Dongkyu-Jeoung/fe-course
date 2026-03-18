/*
    변수명 작성 규칙
    - 라틴어(0~9, a~z, A~Z)
    - 특수문자($, _ 사용가능)
    - Camel Case : 첫글자 소문자로 시작, 중간 단어의 첫 시작은 대문자  ex) camelCaseTest
    - Pascal Case : 첫글자 대문자로 시작, 중간 단어의 첫 시작은 대문자  ex) PascalCaseTest
    - Snake Case : 전체 소문자, 중간 단어 연결 시 _ 사용   ex) snake_case_test

    주의사항
    - 숫자로 시작하면 안됨
    - 예약어(키워드)는 사용 불가   예)function, var, let ...
*/

// camelCase
let myName = '홍길동';
let myAge = 30 ;
console.log (myName, myAge);

// snake_case
let my_name = '홍길동';
let my_age = 30;
console.log (my_name, my_age);

// 저의 이름은 홍길동이고, 나이는 30살 입니다.
let output = '저의 이름은 ' + myName + '이고, 나이는 ' + myAge + '살 입니다.';
console.log(output);

// 템플릿 리터럴(Template Literal) : `출력 문자 ${변수명}`
let output2 = `저의 이름은 ${myName}이고, 나이는 ${myAge}살 입니다.`
console.log(output2);

//상수 선언 시에는 전부 대문자 사용
const AUDIO_DEVICE_START =0;
const AUDIO_DEVICE_CONTINUE =1;
const AUDIO_DEVICE_END =2;
console.log(AUDIO_DEVICE_START, AUDIO_DEVICE_CONTINUE, AUDIO_DEVICE_END);



