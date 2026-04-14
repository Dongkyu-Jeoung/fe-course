import AvatarImageList from "../avatar/AvatarImageList.jsx"
import style from "../avatar/Avatar.module.css"
import { useEffect, useState } from 'react'
import { fetchData } from '../../util/fetch.js'


export default function EffectFetch2 () {
    const [data, setData] = useState([]);
    const data_url = "http://localhost:5173/data/avatar.json";

    useEffect( () => {
        // 비동기 함수 사용
        // useEffect는 async, await 사용 불가
        const loadData = async () => {
            const jsonData = await fetchData(data_url);
            const newList = jsonData.list.map(item => 
                ({...item, style : style.avatar_img_circle})
            )
            setData(newList)
        }
        loadData();

        // fetch("http://localhost:5173/data/list.json")
        //     .then( response => response.json() )
        //     .then( jsonData => setData(jsonData) )
        //     .catch( error => console.log(error) );
    }, [] );


    return (
        <>
            <AvatarImageList imgList={data} />
        </>
    )
}