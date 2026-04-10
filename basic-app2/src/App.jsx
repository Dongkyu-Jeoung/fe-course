import { useRef } from 'react'

import Input from "./components/Input.jsx"
import Birth from "./components/Birth.jsx"

export default function App() {
  const idRef = useRef(null);
  const pwdRef = useRef(null);
  const cpwdRef = useRef(null);
  const nameRef = useRef(null);

  function handleFormSubmit(e) {
    e.preventDefault();

    // Validation Check
    if (idRef.current.value === '') alert('아이디를 입력해주세요');
  }
  return (
    <form onSubmit={handleFormSubmit}>
      <h1>회원가입</h1>
      <h3>필수항목</h3>
      <ul>
        <Input type="text" title="아이디" name="id" ref={idRef}/>
        <Input type="password" title="비밀번호" name="pwd" ref={pwdRef}/>
        <Input type="password" title="비밀번호 확인" name="cpwd" ref={cpwdRef}/>
        <Input type="text" title="성명" name="name" ref={nameRef}/>
        <Birth title="생년월일" name1="birthYear"
                              name2="birthMonth"
                              name3="birthDay"/>
        
        {/* 이메일 입력 HTML */}
        <li>
          <label>이메일</label>
          <input type="text" />
          <span>@</span>
          <input type="text" />
          <select name="">
            <option value="">직접입력</option>
            <option value="naver.com">naver.com</option>
            <option value="google.com">google.com</option>
          </select>
        </li>
      </ul>
      <button type="submit">제출</button>
    </form>
  )
}