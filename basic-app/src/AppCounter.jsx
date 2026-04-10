import BasicCounter from './components/counter/BasicCounter.jsx'
import Counter from './components/counter/Counter.jsx'
import {useState} from 'react'

export default function App() {

    const [tot, setTot] = useState(0);
    function handleTot (result) {
        setTot(tot + result)
    }

    return (
        <>
            <h1>App Counter</h1>
            <h1>Total Count :: <span>{tot}</span></h1>
            <BasicCounter click={handleTot} total={tot} setTotal={setTot}/>
            <BasicCounter click={handleTot} total={tot} setTotal={setTot}/>
            <BasicCounter click={handleTot} total={tot} setTotal={setTot}/>
            
            <Counter/>
        </>
    )
}