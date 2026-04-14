import Image from "../../common/Image.jsx"
import "./Airbnb.css"

export default function RoomAvatar ({ item }) {
    const { img, roomTitle, roomDate, roomPrice, roomRating, isGuest, isLike } = item;
    
    return (
        <div className="room_container">
            <Image img = {img}
                    alt = "Room image"
                    className="room_img"
                    />
            {isGuest && <span className="guest_preference">게스트 선호</span>}
            {isLike && <span className="like">❤</span>}
            
            <h4 className="room_title">{roomTitle}</h4>
            <p className="room_date">{roomDate}</p>
            <div className="room_price">
                <p>{roomPrice}</p>
                <span>⭐{roomRating}</span>
            </div>
            
        </div>
    )
}