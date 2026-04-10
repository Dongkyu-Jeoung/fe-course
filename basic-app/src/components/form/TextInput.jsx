import { useRef } from 'react'
import { useState } from 'react'


export default function TextInput () {
    const textRef = useRef(null);
    const [input, setInput] = useState('홍길동');

    const handleClick = () => {
        let text = textRef.current.value.trim();
        if (text === '') {
            alert('입력값 없음');
            textRef.current.focus();
        } else {
            alert('전송' + text)
        }
    }
    const handleChange = (e) => {
        setInput(e.target.value);
    }
    return (
        <div>
            <h2>Ref : 텍스트폼 입력</h2>
            <input type="text"
                name="text"
                value={input}
                ref={textRef}
                onChange={handleChange}/>
            <button type="button"
                onClick={handleClick}>전송</button>
        </div>
    )
}