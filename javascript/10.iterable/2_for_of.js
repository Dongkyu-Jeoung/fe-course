/**
 * 배열의 요소를 치환하는 함수 생성
 */


// --------------------------함수

// for .. of 구문을 이용한 함수
function replace (list, oldItem, newItem) {
    // list 안에 요소들이 원시 데이터 타입 -> 얕은 복사해도 원본이 안바뀜
    let newList = Array.from(list);
    let idx = 0;
    
    for(item of newList) {
        if(item === oldItem){
            newList.splice(idx, 1, newItem);
        }
        idx++;
    }
    return newList;
}


// forEach 사용
function replace1 (list, oldItem, newItem) {
    let newList = Array.from(list);

    newList.forEach( (item, idx) => {
        if(item === oldItem) {
            newList[idx] = newItem;
        }
    })

    // newList.forEach ( (item, idx) => {if(item===oldItem) newList[idx] = newItem;})
    return newList;
}


// map 사용 : 새로운 리스트를 반환하기 때문에 원본 copy X
// map은 매 요소 마다 return 값을 새로운 리스트에 추가하기 때문에 return 값이 있어야함
function replace2 (list, oldItem, newItem) {
    let newList = list.map(item => {
        if(item == oldItem){
            return newItem;
        } else return item; 
    })
    return newList             // replace2 함수의 return 값

    // return list.map ( item => (item == oldItem) ? newItem : item )
}

// fruitsObj(list안에 객체들이 요소로 있음)
function replaceObj (list, oldItem, newItem) {
    let newList = Array.from(list);
    let idx = 0;
    
    for(item of newList) {
        if(item.emoji == oldItem) {
            newList[idx].emoji = newItem;       // 복사본에 들어있는 값 변경 -> 원본 바뀜

            // newList[idx] = {...newList[idx], emoji : newItem};    // 원본 안바뀜

            // 객체 하나 새로 만들어 갈아끼우는거라서 주소가 원본이랑 달라짐
            newList.splice(idx, 1, { name : item.name, emoji : newItem });   // 원본 안바뀜
        }
        idx++;
    }
    return newList;
}


// -------------------------------------- 사용 데이터
let fruits = new Array('🥭', '🍑', '🍓', '🍒','🍏');
let fruitsObj = [
    {name : 'orange', emoji : '🍊'},
    {name : 'lemon', emoji : '🍋'}
]


// ----------------------------- 함수 적용 / 출력 확인
let obj1 = replace(fruits, '🍓', '🍏');
let obj2 = replace1(fruits, '🍓', '🍏');
let obj3 = replace2(fruits, '🍓', '🍏');
let obj4 = replaceObj(fruitsObj, '🍋', '🍏');


// console.log(fruits);
// console.log('for..of', obj1);
// console.log('forEach', obj2);
// console.log('map', obj3);


console.log(fruitsObj);
console.log(obj4);

