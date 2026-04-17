import Menu from "./Menu.jsx";
import { useState } from "react";

export default function MenuList ({ menus, style }) {
    const [cur, setCur] = useState(null);

    function handleClick(e) {
        setCur(e.target.innerText);
    }
    return (
        <nav>
            <ul className={style}>
                { menus?.map( (menu, idx) => 
                    <li key={idx}>
                        <Menu href={menu.href} 
                                style={menu.style} 
                                name={menu.name} key={idx} click={handleClick}/>
                    </li>
                ) }
            </ul>
        </nav>
    )
}