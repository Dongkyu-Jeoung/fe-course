import {useState} from 'react'

export default function BasicCounter({click, total, setTotal}) {

    let [count, setCount] = useState(0);
    let [flag, setFlag] = useState(false);

    function handleCount(e) {
        if (e.target.name == 'inc') {
            setCount(count + 1);
            setFlag(true);
            click(+1);
        } else if (e.target.name == 'dec') {
            setCount(count - 1);
            setFlag(false);
            click(-1);
        } else {
            setTotal(total-count);
            setCount(0);
        }
    }

    return (
        <div style={{border:"1px solid gray", padding : '10px 20px'}}>
            <h1>React Counter</h1>
            <h2>Counter :: 
                { flag? <span style={{color:'red'}} >{count}</span> : <span style={{color:'blue'}} >{count}</span> }
                / Total Count :: 
                <span>{total}</span>
            </h2>
            <div>
                <button type="button" name="inc" onClick={handleCount}>증가(+)</button>
                <button type="button" name="dec" onClick={handleCount}>감소(-)</button>
                <button type="button" name="re" onClick={handleCount}>초기화</button>
            </div>
        </div>
    )
}