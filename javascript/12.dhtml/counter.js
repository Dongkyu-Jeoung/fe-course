/**
 * 숫자 증가 / 감ㅅ 함수 정의
 */

function counter (type) {
    // input type : value, <tag>content</tag> : textContent
    let number = document.querySelector('#number').textContent;
    if (type == '+') {
        document.querySelector('#number').textContent = ++number;
    } else if (type == '-') {
        if (number > 0) {
            document.querySelector('#number').textContent = --number;
        } else document.querySelector('#number').textContent = number;
    }
}