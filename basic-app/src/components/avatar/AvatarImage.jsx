// import style from "./Avatar.module.css"
import Image from "../../common/Image.jsx"


export default function AvatarImage ({img, style}) {
    return (
        <Image img={img} alt="photo" className={style}/>
    )
}