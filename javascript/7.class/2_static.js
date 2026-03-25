/**
 * static 상수, 메소드 정의 - 클래스 상수, 클래스 메소드
 * static 키워드가 붙은 상수, 메소드
 * - 호출 시 : 클래스명.상수, 클래스.메소드
 *  static이 붙은 상수, 메소드는 stack의 static 메모리 영역에 별도 저장되므로
 *  객체 생성 전 호출이 가능하다.
 */

class Fruit {
    //Field
    static MAX_SIZE = 10;
    //Constructor
    constructor (name, color, emoji) {
        this.name = name;
        this.color = color;
        this.emoji = emoji;
    }
    //Method
    getName = () => { return this.name; }
    // 객체 생성 함수
    // 객체가 생성되기 이전에 불러와야하는 함수 이므로 "static"으로
    static create = (name, color, emoji) => {
        return new Fruit(name, color, emoji);
    }
}

let apple = new Fruit('apple', 'red', '🍎');
console.log(apple);
console.log(apple.getName());
let lemon = Fruit.create('lemon', 'yellow', '🍋');
console.log(lemon);
