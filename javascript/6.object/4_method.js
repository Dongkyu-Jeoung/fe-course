/**
 * 객체 생성하는 함수 : 생성자 함수(Constructor Function)
 * 객체의 메소드 정의 : 객체안에 함수 형식으로 정의
 */

const fruit = {
    // field
    name : 'apple',
    emoji : '🍎',

    // method
    getName: function() { return this.name; },      // this : 자기 자신 객체를 의미
    getEmoji: function() { return this.emoji; },
    // name, emoji만 객체로 리턴
    display: function() { return {name : this.name, emoji : this.emoji} }
}

console.log(fruit.display());
console.log(fruit.getName());
console.log(fruit.getEmoji());
