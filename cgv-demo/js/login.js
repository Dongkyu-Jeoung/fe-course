/**
 * DOM 객체 생성 후 객체별 이벤트 호출
 */
window.addEventListener('DOMContentLoaded', () => {

    let id = document.querySelector('#id');
    let pwd = document.querySelector('#pwd');
    let idMsg = document.querySelector('#idMsg');
    let pwdMsg = document.querySelector('#pwdMsg');
    let btnLogin = document.querySelector('#btnLogin');

    id.addEventListener('input', () => {
        if(id.value.trim() !== '') {
            idMsg.style.display = 'none';
        }
    });
    pwd.addEventListener('input', () => {
        if(pwd.value.trim() !== '') {
            pwdMsg.style.display = 'none';
        }
    });
    btnLogin.addEventListener('click', () => {
        let isValid = true;

        if(id.value.trim() === '') {
            idMsg.style.display = 'block';
            idMsg.style.fontSize = '12px';
            idMsg.style.color = 'red';
            idMsg.textContent = '아이디를 입력해주세요';
            id.focus();
            isValid = false;
        } else if(pwd.value.trim() === '') {
            pwdMsg.style.display = 'block';
            pwdMsg.style.fontSize = '12px';
            pwdMsg.style.color = 'red';
            pwdMsg.textContent = '비밀번호를 입력해주세요';
            pwd.focus();
            isValid = false;
        } else {
            if(isValid) {
                console.log('서버전송--->', id.value, pwd.value);
            }
        }
    });


});


/**
 * loginCheck() - 로그인 유효성 체크 함수
 */
// function loginCheck() {
//     let id = document.querySelector('#id');
//     let pwd = document.querySelector('#pwd');
//     let idMsg = document.querySelector('#idMsg');
//     let pwdMsg = document.querySelector('#pwdMsg');

//     if (id.value === '') {
//         idMsg.textContent = `아이디를 입력해주세요`;
//         idMsg.style.fontSize = '11px';
//         idMsg.style.color = 'red';
//         id.focus();
//     } else if (pwd.value === '') {
//         pwdMsg.textContent = '비밀번호를 입력해주세요';
//         pwdMsg.style.fontSize = '11px';
//         pwdMsg.style.color = 'red';
//         pwd.focus();
//     } else {
//         // 서버 전송 작업
//         console.log('서버 전송', id.value, pwd.value);
//     }
    
//     id.addEventListener('input', () => {
//         if(id.value.trim() === '') {
//             idMsg.style.display = 'block';
//         } else {
//             idMsg.style.display = 'none';
//         }
//     })
// }