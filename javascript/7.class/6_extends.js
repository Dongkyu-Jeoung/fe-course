/**
 * 클래스간의 상속관계 표현 : extends
 * 부모가 가지고 있는 필드, 메소드를 자식이 상속받아 사용하도록 정의
 */

// Animal(동물) 클래스를 상속받아, Dog, Tiger, Lion 자식 클래스 생성
// 자식 is a 부모 : 성립하면 (Dog is a Animal ⭕) => 자식 extends 부모

// 부모 : Animal 클래스 정의
class Animal {
    constructor(name, emoji) {
        this.name = name;
        this.emoji = emoji;
    }

    display = () => console.log(this.name, this.emoji);
    sleep = () => console.log(`${this.name}(${this.emoji}) 자요`);
}

// 자식 : Dog 클래스 정의
class Dog extends Animal {
    constructor(name, emoji, color) {
        super(name, emoji);               // 상속받은 부모의 생성자 호출 (name, emoji 넘어옴)
        this.color = color;               // 생성된 name, emoji는 자식에 저장
    }
}

class Poodle extends Dog {
    constructor(name, emoji, color, food) {
        super(name, emoji, color);
        this.food = food;
    }
}


let dog = new Dog('happy', '🐶', 'brown');
console.log(dog);
dog.display();              // 부모가 가지고 있던 메소드 사용 가능
dog.sleep();

let animal = new Animal('animal', '😀');
console.log(animal);


let dog2 = new Poodle('해피', '🐶', 'brown', '사료');
console.log(dog2);
dog2.display();
dog2.sleep();