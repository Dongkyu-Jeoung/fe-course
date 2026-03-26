/**
 * forEach 메소드는 Iterator 심볼 객체를 상속한 객체에서 사용됨
 * - Iterator 상속 객체. forEach(callback)
 */

let numbers = [1, 2, 3, 4, 5, 6];
numbers.forEach((num, idx, obj) => {
    console.log(`numbers[${idx}] = ${num}`); 
});

let fruits = new Array('🥭', '🍑', '🍓', '🍒','🍏');
// fruits.forEach( val => console.log(val));

// 딸기를 레몬(🍋)으로
// fruits.forEach( (val, idx) => {
//     if(val === '🍓') {
//         fruits[idx] = '🍋';
//     }
// });

fruits.forEach( (val, idx) => {
    if(val === '🍓'){
        fruits.splice(idx,1,'🍋');
    }
});
console.log(fruits);

let idx = 0;
for (fruit of fruits) {
    if(fruit === '🍋') {
        fruits.splice(idx,1,'🍓');
    }
    idx++;
}
console.log(fruits);
