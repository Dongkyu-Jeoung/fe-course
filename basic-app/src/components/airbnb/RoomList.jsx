import { useState, useEffect } from 'react'
import { fetchData } from "../../util/fetch.js";
import RoomAvatar from "./RoomAvatar.jsx"

export default function RoomList() {
    const [list, setList] = useState([]);

    useEffect( () => {
        const loadData = async() => {
            const jsonData = await fetchData("http://localhost:5173/data/airbnb.json");
            setList(jsonData.roomList);
        }
        loadData();
    }, []);

    return (
        <div className="room_list_container">
            {list.map( item =>
                <RoomAvatar item = {item}
                            key={item.pk}/>
            )}
        </div>
    )
}