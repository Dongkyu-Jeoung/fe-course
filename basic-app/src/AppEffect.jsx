import EffectCounter from './components/effects/EffectCounter.jsx'
import EffectFetch2 from './components/effects/EffectFetch2.jsx'
import EffectFetch from './components/effects/EffectFetch.jsx'
import { useState } from 'react'

export default function App () {
    const [show, setShow] = useState(true);
    return (
        <>
            {/* {show && <EffectCounter />}
            <button onClick={ () => setShow(!show) }>
                { show? "감추기" : "보이기"}
            </button>
            <hr /> */}
            <EffectFetch />
            <EffectFetch2 />
        </>
    )
}