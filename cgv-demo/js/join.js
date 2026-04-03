window.addEventListener('DOMContentLoaded', () => {
    let id = document.querySelector('#id');
    let idMsg = document.querySelector('#idMsg');

    // ID validation check
    id.addEventListener('input', () => {
        if (id.value.trim() !== "") {
            idMsg.style.display = 'none';
        } else {
            idMsg.style.display = 'inline';
        }
    })

    // PW validation check
    pwd.addEventListener('input', () => {
        if (pwd.value.trim() !== "") {
            pwdMsg.style.display = 'none';
        } else {
            pwdMsg.style.display = 'inline';
        }
    })

    // 비밀번호 확인 validation check
    cpwd.addEventListener('input', () => {
        if (cpwd.value === pwd.value) {
            cpwdMsg.style.display = 'none';
        } else {
            cpwdMsg.style.display = 'inline';
        }
    })

    // 가입하기 버튼 이벤트
    btnSignup.addEventListener('click', () => {
        let isValid = true;

        if (id.value.trim() !== '') {
            idMsg.style.fontWeight = 'bold';
            isValid = false;
        } else {
            if(isValid) {
                console.log('서버 전송 ----->', id.value);
            }
        }
    })
})