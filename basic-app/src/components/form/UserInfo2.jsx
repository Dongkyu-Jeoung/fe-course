/**
 * 이름, 나이, 주소를 입력받는 폼 생성
 * - 각 폼에 유효성 체크 진행
 * - 전송 버튼 클릭시 유효성 체크 진행
 */
import { useRef, useState } from 'react'
import { validateUserInfo2 } from '../../util/validate.js'
import Input from './Input.jsx'

export default function UserInfo2 () {
    const refs = useRef({});

    const initForm = {
        name : '',
        age : '',
        address : ''
    }

    const forms = [
        {label : "이름", type : "text", name : "name", isRequired: true},
        {label : "나이", type : "text", name : "age", isRequired: true},
        {label : "주소", type : "text", name : "address", isRequired: false}
    ];

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
                    {forms.map ( item => 
                        <li>
                            {item.isRequired && <span>✨</span>}
                            <label htmlFor={item.name}>{item.label}</label>
                            <Input item={item} value={form[item.name]} 
                                handleChange={handleChange} inputRef={(e) => refs.current[item.name] = e}/>
                            { form[item.name].trim() === '' && <span style={{color:'red', display:'block'}}>{item.label}을 입력해주세요</span> }
                        </li>
                    )}
                </ul>
                <li>
                    <button type="submit">전송</button>
                    <button type="button" onClick={()=>setForm(initForm)}>다시쓰기</button>
                </li>
            </form>
        </div>
        
    )
}