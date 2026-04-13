import { useState, useEffect } from 'react'



export default function EffectCounter () {
    const [count, setCount] = useState(0);
    useEffect(()=>{
        console.log('mount! & update');

        return () => console.log('unmount');
    }, [count]);


    return (
        <div style={{width:"400px", textAlign:"center", border : "1px solid gray"}}>
            <h1>{count}</h1>
            <button type="button" onClick={() => setCount(count+1)}>증가(+)</button>
            <button type="button" onClick={() => count>0 && setCount(count-1)}>감소(-)</button>
        </div>
    )
}