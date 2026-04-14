import { useEffect, useState } from 'react';

import AvatarList from '../avatar/AvatarList.jsx';
import {fetchData} from '../../util/fetch.js';


export default function EffectFetch () {
    const [data, setData] = useState([]);
    const [count, setCount] = useState(0);
    const url = "http://localhost:5173/data/avatar.json";

    useEffect( () => {
        console.log('마운트 or 업데이트 시 호출');
        
        const loadData = async() => {
            const jsondata = await fetchData(url);
            setData(jsondata.alist);
        }
        
        loadData();
    }, [count])

    return (
        <>
            <h1>{count}</h1>
            <AvatarList list={data} />
            <button type='button' onClick={()=> setCount(count+1)}>증가!</button>
        </>
    )
}