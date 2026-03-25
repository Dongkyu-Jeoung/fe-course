/**
 * 로그인 처리
 */
class User {
    #id;
    #pw;

    constructor(id, pw){
        this.#id = id;
        this.#pw = pw;
    }

    getId = () => this.#id;
    getPw = () => this.#pw;

    setId = (id) => this.#id = id;
    setId = (pw) => this.#pw = pw;
}


function loginCheck() {
    // id, pw 값 가져오기
    let id = document.querySelector('#id').value;
    let pw = document.querySelector('#pw').value;
    // console.log(id, pw);

    // 유효성 체크 (Validation check) - 데이터의 유,무 체크
    if(id === ''){
        alert('아이디를 입력해주세요');
        document.querySelector('#id').focus();
    } else if(pw === ''){
        alert('패스워드를 입력해주세요');
        document.querySelector('#pw').focus();
    } else {
        // 유저 클래스 생성
        let user = new User(id, pw);
        console.log(user);

        // 비교 => did=test , dpass = 1234           [서버에서 하는 일]
        if (user.getId() === 'test' && user.getPw() ==='1234'){
            alert('로그인성공!')
        } else {
            alert('아이디 혹은 패스워드가 일치하지 않습니다.')
        }
    }

    


    
}





