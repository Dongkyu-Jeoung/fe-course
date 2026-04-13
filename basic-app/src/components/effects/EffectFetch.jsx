import { useEffect, useState } from 'react';
import people1 from '../../assets/people1.webp'
import people2 from '../../assets/people2.webp'
import people3 from '../../assets/people3.webp'
import AvatarList from '../avatar/AvatarList.jsx';


export default function EffectFetch () {
    const [data, setData] = useState([]);
    const [count, setCount] = useState(0);
    const url = "http://localhost:5173/data/alist.json";

    useEffect( () => {
        console.log('마운트 or 업데이트 시 호출');
        
        const fetchData = async() => {
            const response = await fetch(url);
            const jsondata = await response.json();  
            setData(jsondata);
        }

        fetchData();
    }, [count])

    return (
        <>
            <h1>{count}</h1>
            <AvatarList list={data} />
            <button type='button' onClick={()=> setCount(count+1)}>증가!</button>
        </>
    )
}