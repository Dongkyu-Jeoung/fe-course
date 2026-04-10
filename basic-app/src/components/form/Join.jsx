import { useState } from 'react'
import { useRef } from 'react'

import './cgv.css'
import './commons.css'



export default function Join () {
    const idRef = useRef(null);
    const pwdRef = useRef(null);
    const cpwdRef = useRef(null);
    const nameRef = useRef(null);
    const phoneRef = useRef(null);
    const emailNameRef = useRef(null);
    const emailDomainRef = useRef(null);

    const initForm = {
        id : '',
        pwd : '',
        cpwd : '',
        name : '',
        phone : '',
        emailName : '',
        emailDomain : ''
    }

    const [form, setForm] = useState(initForm);

    function handleJoinSubmit(e) {
        e.preventDefault();

        // Validation Check
        if (idRef.current.value === '') alert('id!')
        else if (pwdRef.current.value === '') alert('pwd!')
        else if (cpwdRef.current.value === '') alert('cpwd!')
        else if (nameRef.current.value === '') alert('name!')
        else if (phoneRef.current.value === '') alert('phone!')
        else if (emailNameRef.current.value === '') alert('email name!')
        else if (emailDomainRef.current.value === 'default') alert('email domain!')
        else {
            // 서버에 전송하는 이메일 형식을 만들어서 form에 추가
            setForm({...form, email:`${form.emailName}@${form.emailDomain}`})
            console.log(form);
        }
    }

    function handleFormChange (e) {
        const { name, value } = e.target;
        setForm({...form, [name] : value});
    }

    function handleFormReset () {
        setForm(initForm);
    }
    
    console.log(form);

    return (
        <div className="content">
            <div className="join-form center-layout">
                <h1 className="center-title">회원가입</h1>
                <form onSubmit={handleJoinSubmit}>
                    <ul>
                        <li>
                            <label htmlFor="id"><b>아이디</b></label>
                            { (form.id === '') && <span id="idMsg">아이디를 입력해주세요</span> }
                            <div>
                                <input type="text" name="id" id="id" ref={idRef} onChange={handleFormChange} value={form.id}
                                    placeholder="아이디 입력(6~20자)"/>
                                <button>중복확인</button>
                            </div>
                        </li>
                        <li>
                            <label htmlFor="pwd"><b>패스워드</b></label>
                            { ( (form.pwd === '') || (form.pwd.length >12) ) && <span id="pwdMsg">12자 이내의 비밀번호를 입력해주세요</span> }
                            <input type="password" name="pwd" id="pwd" ref={pwdRef} onChange={handleFormChange} value={form.pwd}
                                placeholder="비밀번호 입력(문자, 숫자, 특수문자 포함 6~12자)"/>
                        </li>
                        <li>
                            <label htmlFor="cpwd"><b>패스워드 확인</b></label>
                            { (form.cpwd != form.pwd) && <span id="cpwdMsg">비밀번호가 일치하지 않습니다.</span> }
                            <input type="password" name="cpwd" id="cpwd" ref={cpwdRef} onChange={handleFormChange} value={form.cpwd}
                                placeholder="비밀번호 재입력" />
                        </li>
                        <li>
                            <label htmlFor="name"><b>이름</b></label>
                            <input type="text" name="name" id="name" onChange={handleFormChange} value={form.name}
                                placeholder="이름을 입력해주세요" ref={nameRef}/>
                        </li>
                        <li>
                            <label htmlFor="phone"><b>전화번호</b></label>
                            <input type="text" name="phone" id="phone" onChange={handleFormChange} value={form.phone}
                                placeholder="전화번호를 입력해주세요 ('-' 포함)" ref={phoneRef}/>
                        </li>
                        <li>
                            <label htmlFor="emailname"><b>이메일 주소</b></label>
                            <div>
                                <input type="text" name="emailName" id="emailname" onChange={handleFormChange} value={form.emailName}
                                    placeholder="이메일 주소를 입력해주세요" ref={emailNameRef}/>
                                <span>@</span>
                                <select name="emailDomain" id="emaildomain" 
                                    ref={emailDomainRef} onChange={handleFormChange} value={form.emailDomain}>
                                    <option value="default">선택해주세요</option>
                                    <option value="naver.com">네이버</option>
                                    <option value="gmail.com">구글</option>
                                    <option value="daum.net">다음</option>
                                </select>
                            </div>
                        </li>
                        <li>
                            <button type="submit">가입하기</button>
                            <button type="button" onClick={handleFormReset}>다시작성</button>
                        </li>
                    </ul>
                </form>
            </div>
        </div>
    )
}