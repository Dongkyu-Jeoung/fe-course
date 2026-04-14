

export default function Menu ({ href, style, name }) {
    return (
        <a href={href} className={style}>{name}</a>
    )
}