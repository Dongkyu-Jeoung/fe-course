import AvatarImage from "./AvatarImage.jsx"

export default function AvatarImageList({imgList}) {
    return (
        <div>
            {
                imgList.map ((item, idx) => 
                    <AvatarImage key={idx} img={item.img} 
                        style={item.style}/>
                )
            }
        </div>
    )
}