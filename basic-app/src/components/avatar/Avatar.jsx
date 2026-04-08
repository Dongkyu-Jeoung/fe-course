/**
 *  Avatar.jsx  -  아바타 이미지 + 이름
 */
import AvatarImage from "./AvatarImage.jsx"
import style from "./Avatar.module.css"

export default function Avatar ({img, name}) {
    return (
        <div className={style.avatar}>
            <AvatarImage img={img} style={style.avatar_img_circle}/>
            <p>{name}</p>
        </div>
    )
}