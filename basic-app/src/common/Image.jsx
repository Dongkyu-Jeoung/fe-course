

export default function Image({ img, alt, w, h, className }) {
    return (
        <img src={img} 
            alt={alt}
            style={{
                width : w,
                height : h
            }}
            className={className}
            />
    )
}