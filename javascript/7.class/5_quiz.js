/**
 * 학생(student) 클래스 정의
 * 필드 : #이름, #나이, #주소, 이모지
 * 메소드 : setter/getter, display
 */


let dataList = [
    { name: '홍길동', age: 20, address: '서울시', emoji: '🧑'},
    { name: '김철수', age: 21, address: '부산시', emoji: '🧑'},
    { name: '박영희', age: 22, address: '서울시', emoji: '👩'},
    { name: '박정민', age: 23, address: '인천시', emoji: '🧑'},
    { name: '홍길순', age: 24, address: '서울시', emoji: '👩'},
];

class Student {
    #name;
    #age;
    #address;
    
    constructor(name, age, address, emoji) {
        this.#name = name;
        this.#age = age;
        this.#address = address;
        this.emoji = emoji;
    }

    //getter
    getName = () => { return this.#name }
    getAge = () => { return this.#age }
    getAddress = () => { return this.#address }
    getEmoji = () => { return this.emoji }

    //setter
    setName = (name) => { this.#name = name; }
    setAge = (age) => { this.#age = age; }
    setAddress = (address) => { this.#address = address; }
    setEmoji = (emoji) => { this.emoji = emoji; }

    //display
    display = () => { console.log(this.#name, this.#age, this.#address, this.emoji);}
}

let stdList = dataToClassList(dataList);


function dataToClassList(list) {
    let stdList = [];
    
    for(i=0 ; i < list.length ; i++){
        let std = new Student(list[i].name, list[i].age, list[i].address, list[i].emoji);
        stdList.push(std);
    }
    return stdList;
}


//출력
//stdList.forEach(a => a.display());

for(i=0 ; i<stdList.length ; i++){
    stdList[i].display();
}