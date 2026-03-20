/**
 * while - 종료되는 조건을 알고 있는 경우
 * 
 *  초기값
 *  while (조건식) {
 *      실행문;
 *      증가값;
 *  }
 */

let num = 1;

while (num <11) {
    console.log(`num = ${num}`);
    if (num == 7) break;
    num++;
}

//메뉴 선택
// 메뉴1 : 피자, 메뉴2 : 핫도그, 메뉴3 : 햄버거
let flag = true;
let menu = 2;
while (flag) {
    console.log(`1 : 피자, 2 : 핫도그, 3 : 햄버거`);
    if (menu ==1) {
        console.log('🍕');
        flag = false;
    } else if (menu == 2) {
        console.log('🌭');
        flag = false;
    } else if (menu == 3) {
        console.log('🍔');
        flag = false;
    } else {
        console.log('메뉴를 선택해주세요.');
    }
}