import { Link, NavLink } from 'react-router-dom'

export default function Menu ({ href, style, name, click }) {
    return (
        <NavLink to={href} 
            className={({isActive}) => (isActive ? `${style} active` : style)}>{name}</NavLink>
        // <Link to={href} className={style} onClick={click}>{name}</Link>
    )
}