import Avatar from "./Avatar";
import style from "./AvatarList.module.css"


export default function AvatarList ({list}) {
    return (
        <div className={style.avatar_list}>
            {
                list.map ((item, idx) => <Avatar key={idx} img={item.img} name={item.name}/>)
            }
        </div>
    )
}