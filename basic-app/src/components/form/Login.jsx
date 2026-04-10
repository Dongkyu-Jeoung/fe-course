import { useRef } from 'react'
import { useState } from 'react'


export default function Login () {
    const idRef = useRef(null);
    const pwdRef = useRef(null);

    const [form, setForm] = useState({id:'', pwd:''});

    const handleFormChange = (e) => {

        setForm({...form, [e.target.name] : e.target.value });

        // if (e.target.name === 'id') {
        //     setForm({id : e.target.value, pwd : form.pwd});
        // } else setForm({id : form.id, pwd : e.target.value});
    }

    const handleLoginSubmit = (e) => {
        e.preventDefault();

        let id = idRef.current.value.trim();
        let pwd = pwdRef.current.value.trim();

        if (id === '') {
            alert('아이디 입력');
            idRef.current.focus();
        }
        else if (pwd==='') {
            alert('패스워드 입력');
            pwdRef.current.focus();
        }
        else {
            console.log(form);
        }
    }
    

    return (
        <>
            <h1>로그인 폼</h1>
            <form name='login_form' onSubmit={handleLoginSubmit}>
                <ul>
                    <li>
                        <label htmlFor="id">아이디</label>
                        <input type="text" id="id" name="id" ref={idRef} value={form.id} onChange={handleFormChange} />
                    </li>
                    <li>
                        <label htmlFor="pwd">패스워드</label>
                        <input type="password" id="pwd" name="pwd" ref={pwdRef} value={form.pwd} onChange={handleFormChange} />
                    </li>
                    <li>
                        <button type="submit" >Login</button>
                        <button>Reset</button>
                    </li>
                </ul>
            </form>
        </>
    )
}