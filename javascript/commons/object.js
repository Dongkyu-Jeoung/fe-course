/**
 * 객체 생성 모듈
 */
let objects = {};

export function getObjects() { // 전체 리스트
    return objects
}

export function createObject(objectName) {   // 객체 생성
    return objects[objectName] = {};
}

export function deleteObject(objectName) { // 객체 삭제
    delete objects[objectName];
}

export function getObject (objectName) {
    return objects[objectName];
}

/**
 * 객체 CRUD 관리 모듈
 */

// 객체에 값을 추가하는 함수 정의, 모든 객체에서 사용 가능하도록 일반화
// C(Create)
export function setValue(obj, key, val) {
    obj[key] = val;
}
// 객체 값 반환, R(Read)
export function getValue(obj, key) {
    return obj[key];
}
// 객체 값 업데이트, U(Update)
export function updateValue(obj, key, val) {
    obj[key] = val;
}
// 객체 값 삭제, D(Delete)
export function deleteValue (obj, key) {
    delete obj[key];
}


/**
 * 생성자 함수를 이용한 객체 CRUD
 */

export function Fruit (name, emoji) {
    this.name = name;
    this.emoji = emoji;

    this.display = () => {
        console.log(this.name, this.emoji);
    }
}