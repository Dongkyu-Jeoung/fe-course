/**
 * 클래스의 필드에 선언되는 변수, 상수에 대한 접근 제한자
 * 변수, 상수 앞에 #을 붙이면 private으로 설정, 클래스 내에서만 접근 가능
 */

class Person {
    #empno;
    name;
    age;

    constructor (empno, name, age) {
        this.#empno = empno;
        this.name = name;
        this.age = age;
    }

    display = () => { console.log(this.#empno, this.name, this.age); }
    getEmpNo = () => { return this.#empno ;}
    setEmpNo = (newEmpNo) => {
        this.#empno = newEmpNo;
    }
}

let hong = new Person('1234','홍길동', 30);
hong.display();             // 클래스 내에서 접근
console.log(hong.empno);    // 클래스 외부에서 접근

hong.empno = '4567';        // 외부에서 값을 변경 -> 불가
console.log(hong.empno);    // 클래스 외부에서 접근

hong.setEmpNo('4567');
hong.display();     // 클래스 외부에서 접근