/**
 * Class 란? 객체를 생성하기 위한 설계도 (틀)
 * - 생성자 함수와의 차이점
 * - 객체지향언어의 클래스와는 다름
 * - 자바스크립트에서 실행시 내부적으로 프로토타입 기반의 형식으로 실행됨
 * - new 키워드를 사용하여 객체를 생성
 * 
 * 형식
 * class 클래스명 {
 *      필드명 (field)
 *      생성자 (Constructor)
 *      메소드 (Method)
 * }
 */

class Animal {
    // Field - 변수, 상수 => static으로 정의, 클래스 변수, 클래스 상수로 부름
    // static으로 정의된 변수, 상수는 객체 생성 전 별도의 메모리에 저장됨
    static MAX_SIZE = 10;
    static className = 'Animal';
    // Constructor - 객체 생성시 호출, new
    constructor (name, emoji) {
        this.name = name;
        this.emoji = emoji;
    }
    // Method - 기능, 동작을 함수로 정의
    display = () => {
        console.log(this.name, this.emoji);
    }
}
console.log(Animal.MAX_SIZE);

let dog = new Animal('happy', '🐶');
console.log(dog);
dog.display();
