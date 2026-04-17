import Logo from "./header/Logo.jsx"
import MenuList from "./commons/MenuList.jsx"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export default function Header ({jsonHeader}) {

    return (
        <header className="header">
            <Logo img="/images/favicon.ico" alt="header logo" 
                    style="header_logo_img" title="Judy"/>
            <MenuList menus={jsonHeader?.menus} style="header_menu"/>
            <button className="header_toggle">
                <FontAwesomeIcon icon={faBars} />
            </button>
        </header>
    )
}