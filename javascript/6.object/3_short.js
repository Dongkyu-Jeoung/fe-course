let name ='홍길동';
let age = 30;
let address = '서울시 강남구'

let person = {
    // name : name,
    // age : age
    // property 이름과 변수 이름이 같을 때
    name, age, address
}

console.log(person);

// 두개의 값을 입력받아, 객체로 리턴하는 함수 생성

const createObj = (x, y) => {
    return {x, y};
}
let num1 = createObj(1, 2);
console.log(num1);


// 사원의 이름, 나이, 주소, 소속부서 정보를 입력받아 사원객체를 생성하고 반환하는 함수 정의
const createEmp = (name, age, address, dept) => {
    return {name, age, address, dept};
}

let emp1 = createEmp('정동규', 30, '경기도 성남시', '개발');
let emp2 = createEmp('Smith', 33, '부산시 해운대구', '영업');
console.log(emp1);
console.log(emp2);

let empList = [
    ['홍길동', '30', '서울', '개발부'],
    ['Smith', '35', '부산', '영업부'],
    ['이순신', '40', '인천', 'HR']
];

/* 데이터 출력
for (i=0 ; i < empList.length ; i++) {
    let rows = '';
    for (j=0 ; j <empList[i].length ; j++){
        rows += empList[i][j]+'\t';
    }
    console.log(rows);
}
*/

// obj를 빈 객체로 만들어놓고 계속 추가 하는 방식
for (i=0 ; i < empList.length ; i++) {
    let obj = {};
    for (j=0 ; j <empList[i].length ; j++){
        if(j==0) obj.name = empList[i][j];
        else if(j==1) obj.age = empList[i][j];
        else if(j==2) obj.address = empList[i][j];
        else if(j==3) obj.dept = empList[i][j];
        else console.log('error!');
    }
    console.log(obj);
}

console.log();
console.log();

for (i=0 ; i < empList.length ; i++) {
    let name, age, address, dept = undefined;
    for (j=0 ; j < empList[i].length ; j++){
        if(j==0) name = empList[i][j];
        else if(j==1) age = empList[i][j];
        else if(j==2) address = empList[i][j];
        else if(j==3) dept = empList[i][j];
        else console.log('error!');
    }
    let emp = createEmp(name, age, address, dept);
    console.log(emp);
}
