/**
 * - state 값으로 count 정의
 * - 각버튼의 이벤트는 콜백함수로 count 값을 변경함
 */
import { useState } from 'react'
import style from './Counter.module.css'


export default function Counter () {
    const [count, setCount] = useState(0);

    function handleCount (e) {
        if (e.target.name == "-100") setCount(count - 100)
        else if (e.target.name == "-10") setCount(count - 10)
        else if (e.target.name == "-1") setCount(count - 1)
        else if (e.target.name == "+1") setCount(count + 1)
        else if (e.target.name == "+10") setCount(count + 10)
        else if (e.target.name == "+100") setCount(count + 100)
        else setCount(0);
    }

    return (
        <div className={style.counter_wrap}>
            <h1 className={style.title}>현재 카운트 :</h1>
            <div className={style.count_num}>
                <span>{count}</span>
            </div>
            <div className={style.button_list}>
                <button type="button" name="-100" onClick={handleCount}>-100</button>
                <button type="button" name="-10" onClick={handleCount}>-10</button>
                <button type="button" name="-1" onClick={handleCount}>-1</button>
                <button type="button" name="+1" onClick={handleCount}>+1</button>
                <button type="button" name="+10" onClick={handleCount}>+10</button>
                <button type="button" name="+100" onClick={handleCount}>+100</button>
                <button type="button" name="reset" onClick={handleCount}>초기화</button>
            </div>
        </div>
    )
}