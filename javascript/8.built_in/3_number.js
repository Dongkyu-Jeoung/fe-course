/**
 * Number 클래스
 * - valueOf(), toString(), ..
 */

let a = 100;
let b = 1234567;

let aa = new Number(100);
let bb = new Number(1234567);

console.log(a, typeof a);
console.log(b, typeof b);
console.log(aa, typeof aa);
console.log(bb, typeof bb);

console.log(a.toLocaleString(), typeof a);
console.log(aa.toLocaleString());
console.log(b.toLocaleString());
console.log(bb.toLocaleString());

let localeNum = b.toLocaleString();
console.log(localeNum, typeof localeNum);       // b라는 원본값은 number로 유지

let number = '12348746123';
let locNum = parseInt(number).toLocaleString();   // function chainning
console.log(locNum);

let fnumber = '1234.8746123';
let flocNum = parseFloat(fnumber).toLocaleString();
let flocNum2 = parseFloat(fnumber).toFixed(2);   // 소수점 아래 둘째자리 까지 표현 (셋째자리에서 반올림)
console.log(flocNum);
console.log(flocNum2);
