import * as object from "../commons/object.js";  //Alias 설정

// 회원 주소록 생성
// 홍길동, 스미스
let addressBook = object.getObjects();  // objects 주소 공유
// 1. 객체 생성
object.createObject('hong');
// 2. hong 주소 가져오기
let hong = object.getObject('hong');
// 3. name, age, address 추가
object.setValue(hong, 'name', '홍길동');
object.setValue(hong, 'age', '30');
object.setValue(hong, 'address', '서울시');

object.setValue(addressBook, 'smith', {'name' : 'smith', 'age' : '35', 'address' : '부산'});

console.log(addressBook);
