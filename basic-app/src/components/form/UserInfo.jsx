/**
 * 이름, 나이, 주소를 입력받는 폼 생성
 * - 각 폼에 유효성 체크 진행
 * - 전송 버튼 클릭시 유효성 체크 진행
 */
import { useRef, useState } from 'react'
import { validateUserInfo } from '../../util/validate.js'

export default function UserInfo () {
    const refs = {
        nameRef : useRef(null),
        ageRef : useRef(null),
        addressRef : useRef(null)
    }

    const initForm = {
        name : '',
        age : '',
        address : ''
    }

    const [form, setForm] = useState(initForm);

    function handleSubmit (e) {
        e.preventDefault();

        if (validateUserInfo(refs)) console.log('서버전송 : ', form);
    }

    function handleChange (e) {
        const {name, value} = e.target;
        setForm({ ...form, [name] : value })
    }

    return (
        <div>
            <h1>User Info</h1>
            <form onSubmit={handleSubmit}>
                <ul>
                    <li>
                        <label htmlFor="name">이름</label>
                        <input type="text" id="name" name="name"
                            ref={refs.nameRef} onChange={handleChange} value={form.name}/>
                        { form.name.trim() === '' && <span style={{color:'red', display:'block'}}>이름을 입력해주세요</span> }
                    </li>
                    <li>
                        <label htmlFor="age">나이</label>
                        <input type="text" id="age" name="age"
                            ref={refs.ageRef} onChange={handleChange} value={form.age}/>
                    </li>
                    <li>
                        <label htmlFor="address">주소</label>
                        <input type="text" id="address" name="address"
                            ref={refs.addressRef} onChange={handleChange} value={form.address}/>
                    </li>
                    <li>
                        <button type="submit">전송</button>
                        <button type="button" onClick={()=>setForm(initForm)}>다시쓰기</button>
                    </li>
                </ul>
            </form>
        </div>
        
    )
}