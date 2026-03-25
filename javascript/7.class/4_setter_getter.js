/**
 * 사원 (Employee) 클래스 정의
 * - 사원번호(#), 사원명, 나이를 입력받아 객체 생성
 */

class Emp {
    #empNo;

    constructor(empNo, name, age) {
        this.#empNo = empNo;
        this.name = name;
        this.age = age;
    }

    // getter
    getEmpNo = () => { return this.#empNo; }
    getName = () => { return this.name; }
    getAge = () => { return this.age; }

    // setter
    setEmpNo = (empno) => { this.#empNo = empno; }
    setName = (name) => { this.name = name; }
    setAge = (age) => { this.age = age; }

    display = () => { console.log(this.#empNo, this.name, this.age); }
}

let hong = new Emp();
hong.setEmpNo('1234');
hong.setName('홍길동');
hong.setAge(30);

hong.display();

let smith = new Emp('4567', 'smith', 35);
smith.display();

let empList = [];
// empList[0] = hong;
// empList[1] = smith;
empList.push(hong);
empList.push(smith);
console.log(empList);
empList.pop(hong);
console.log(empList);

empListObj = {};
empListObj.hong = hong;
empListObj['smith'] = smith;
console.log(empListObj);

